---
normalized_id: shared-pdf-reference-estimating-intertemporal-relationships-using-longitudinal-data
exam_code: SHARED
material_scope: estimating intertemporal relationships using longitudinal data.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Estimating Intertemporal Relationships Using Longitudinal Data.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-estimating-intertemporal-relationships-using-longitudinal-data

      A Practitioner’s Approach to Estimating Intertemporal
              Relationships Using Longitudinal Data:
          Lessons from Applications in Wage Dynamics                                                    *




                                                          by

                                                 Thomas MaCurdy **

                                             Revised: December 2004



                                              Abstract
            This chapter presents a unified set of estimation methods for fitting a rich array of
models describing dynamic relationships within a longitudinal data setting. The discussion
surveys approaches for characterizing the micro dynamics of continuous dependent variables
both over time and across individuals, focusing on two flexible sets of empirical specifications:
dynamic simultaneous equations models incorporating error-components structures, and
autoregressive quantile models. The chapter is motivated by the principle that, whenever
possible, estimation methods should rely on routines available in familiar software packages to
make them accessible to a wide range of practitioners. Conventional method-of-moments
procedures offer a general apparatus for estimating parameters of panel-data specifications,
though one must introduce a series of modifications to overcome challenges arising from: (1) use
of unbalanced data structures, (2) weighting to account for stratified sampling inherent in survey
longitudinal data, (3) incorporation of predetermined variables in estimation, and (4)
computational complexities confronted when estimating large systems of equations with intricate
intertemporal restrictions. To allow researchers to separate the estimation of longitudinal
time-series specifications into manageable pieces, the discussion describes multi-step approaches
that estimate subsets of parameters appearing in a single model component (such as the
autoregressive or moving-average structure of the error process) without having to estimate all
parameters of the entire model jointly. Such procedures offer a powerful set of diagnostic tools
for narrowing model choices and for selecting among specifications that fit the underlying data.
To illustrate all of the econometric methods outlined in this chapter, the analysis presents a set of
empirical applications summarizing the dynamic properties of hourly wages for adult men using
data from the Panel Study of Income Dynamics.



 *
      Acknowledgments: MaCurdy gratefully acknowledges research support from NIH grants HD32055-02 and
        5P01AG005842-17. This chapter benefitted greatly from participants’ comments at the Chicago and London
        Handbook conferences and from expert research assistance provided by Frank McIntyre and James Wishart
        Pearce.
 **
      Professor, Department of Economics, and Senior Fellow, The Hoover Institution, Stanford University, Stanford, CA
        94305
                                                               Contents

1. Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1-1

2. Empirical Specifications Describing Panel Data Dynamics . . . . . . . . . . . . . . . . . . . . . . . 2 - 1
  2.1     General Characterization of Empirical Specifications . . . . . . . . . . . . . . . . . . . . . 2 - 2
  2.2     Sources of Dynamics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 - 3
    2.2.1 Aggregate Dynamics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 - 5
    2.2.2 Micro Dynamics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 - 5
  2.3     Dynamic Simultaneous Equation Models . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 - 7
  2.4     Modeling Dynamics Through Error Structures . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 - 9
    2.4.1 Addition of Other Error Components . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 - 10
    2.4.2 Admitting Nonstationarity in Longitudinal Analysis . . . . . . . . . . . . . . . . . . . . . . 2 - 12
  2.5     Dynamic Quantile Regressions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 - 13

3. Basic Estimation Concepts and Challenges . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 - 1
  3.1     Overview of Method of Moments Estimation Procedures . . . . . . . . . . . . . . . . . . . 3 - 2
    3.1.1 Method of Moments Estimators . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 - 2
    3.1.2 Generalized Least Squares . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 - 4
    3.1.3 Instrumental Variable Estimators . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 - 6
    3.1.4 Optimal Choice of Instrumental Variables . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 - 7
    3.1.5 Testing Procedures . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 - 9
  3.2     Challenges . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 - 10
    3.2.1 Simultaneous Equations with Predetermined Variables . . . . . . . . . . . . . . . . . . . 3 - 10
    3.2.2 Optimal Instrumental Variables with Predetermined Variables in MM Framework
           . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 - 12
    3.2.3 Specifications Providing for Estimation of ARMA Coefficients and Dynamic
          Quantiles . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 - 13
    3.2.4 Potential Computational Issues . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 - 14
    3.2.5 Estimation with Stratified and Unbalanced Data . . . . . . . . . . . . . . . . . . . . . . . . . 3 - 16

4. Simplified Estimation Approaches . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 - 1
  4.1     Several Important Computational Simplifications . . . . . . . . . . . . . . . . . . . . . . . . . 4 - 2
    4.1.1 A Condition Simplifying Multi-Step Estimation . . . . . . . . . . . . . . . . . . . . . . . . . . 4 - 2
    4.1.2 Three-Stage Least Squares . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 - 4
    4.1.3 Adding Equations to Account for Predetermined Variables . . . . . . . . . . . . . . . . . 4 - 5
    4.1.4 Incorporating Optimal Instruments with Predetermined Variables in 3SLS . . . . . 4 - 8
  4.2     Estimating Subsets of Parameters . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 - 8
    4.2.1 Distinguishing the Different Parameter Subsets . . . . . . . . . . . . . . . . . . . . . . . . . . 4 - 9
    4.2.2 Estimation of Structural Coefficients . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 - 10
  4.3     Estimation of Covariance Parameters . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 - 11
    4.3.1 Framework for Estimating Variance and Covariance Parameters . . . . . . . . . . . . 4 - 12
    4.3.2 Specification of Variance-Covariance Matrix Accounting for Initial Conditions 4 - 14
    4.3.3 Joint Estimation of Structural Coefficients and Covariance Parameters . . . . . . . 4 - 20
    4.3.4 Further Subdivision of Estimation of Covariance Parameters . . . . . . . . . . . . . . . 4 - 21

                                                                      i
    4.4         Direct Estimation of Autocovariances Using Residuals . . . . . . . . . . . . . . . . . . . 4 - 22
    4.5         Direct Estimation of Autoregressive Parameters . . . . . . . . . . . . . . . . . . . . . . . . . 4 - 25
    4.6         Estimation of the Partial Correlation Coefficients . . . . . . . . . . . . . . . . . . . . . . . 4 - 28
    4.7         Direct Estimation of Moving-Average Parameters . . . . . . . . . . . . . . . . . . . . . . . 4 - 29

5. Estimating Dynamic Quantile Specifications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 - 1
  5.1     Using Nonlinear Instrumental Variable Procedures to Estimate Quantile Regressio5ns- 1
    5.1.1 Representing Dynamic Quantile Regressions as Nonlinear Simultaneous Equations
           ................................................................ 5-2
    5.1.2 Nonlinear Instrumental Estimation of Quantile Specifications . . . . . . . . . . . . . . . 5 - 4
  5.2     Jointly Estimating Combinations of Quantile Regressions . . . . . . . . . . . . . . . . . . 5 - 5
    5.2.1 Nonlinear Instrumental Estimation of Quantiles in Panel Data . . . . . . . . . . . . . . . 5 - 5
    5.2.2 Estimating Dynamic Specifications Describing Several Quantiles . . . . . . . . . . . . 5 - 7

6. Use of Sample Weights and Unbalanced Data . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 - 1
  6.1     Basics of Weighting to Account for Stratified Sampling . . . . . . . . . . . . . . . . . . . 6 - 1
  6.2     Weighting to Account for More Sophisticated Sample Stratification . . . . . . . . . . 6 - 3
    6.2.1 Typical Form of Weights Provided in Survey Data . . . . . . . . . . . . . . . . . . . . . . . . 6 - 4
    6.2.2 Calculating Statistics for Subpopulations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 - 5
  6.3     Weighting in Method-of-Moments Procedures to Compute Estimators . . . . . . . . 6 - 6
  6.4     Weighting in LS and Instrumental Variable Procedures to Compute Estimators
           ................................................................ 6-8
    6.4.1 Familiar Form of Weighting in LS Procedures . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 - 8
    6.4.2 Weighting with LS Interpreted as an IV Procedure . . . . . . . . . . . . . . . . . . . . . . . 6 - 11
    6.4.3 Weighting in Nonlinear IV Procedures . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 - 12
  6.5     Which Weights Should be Used in Longitudinal Analyses? . . . . . . . . . . . . . . . . 6 - 13
  6.6     Estimation with Unbalanced Data . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 - 15
    6.6.1 Characterizing Estimators Computed Using Unbalanced Data . . . . . . . . . . . . . . 6 - 16
    6.6.2 What is the Asymptotic Distribution of Estimators Computed using Unbalanced
          Data? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 - 17
    6.6.3 Wrong Variance-Covariance Matrix Reported by Conventional Estimation Procedures
           . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 - 20
  6.7     Weighting and Unbalanced Data in the Estimation of Quantile Specifications . 6 - 21

7. An Empirical Application to Wage Dynamics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 - 1
  7.1     Data Description and Prototype Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 - 2
  7.2     Estimation of Autocorrelations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 - 3
    7.2.1 Estimating Covariograms . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 - 4
    7.2.2 Implications of Covariograms for Stationarity and ARMA Specifications . . . . . . 7 - 4
  7.3     Empirical Specifications for ARMA Error Process . . . . . . . . . . . . . . . . . . . . . . . . 7 - 6
    7.3.1 Specifications for Estimating Only Autoregressive Coefficients . . . . . . . . . . . . . 7 - 6
    7.3.2 Specifications for Estimating Autoregressive and Moving-Average Coefficients
          Jointly . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 - 8
    7.3.3 Estimators for ARMA Coefficients . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 - 9
  7.4     Empirical Findings for ARMA Estimation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 - 10
    7.4.1 Estimates of Only Autoregressive Coefficients . . . . . . . . . . . . . . . . . . . . . . . . . . 7 - 10

                                                                      ii
     7.4.2 Estimates of Autoregressive and Moving-Average Coefficients Jointly . . . . . . . 7 - 11
   7.5     Bootstrapping ARMA Models Using Panel Data . . . . . . . . . . . . . . . . . . . . . . . . 7 - 12
     7.5.1 Estimates with Bootstrapped Standard Errors . . . . . . . . . . . . . . . . . . . . . . . . . . 7 - 13
     7.5.2 Implications of Bootstrap Estimates . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 - 14
   7.6     Results Based on Balanced Versus Unbalanced Data . . . . . . . . . . . . . . . . . . . . . 7 - 14
     7.6.1 Estimates with Unbalanced Data . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 - 15
     7.6.2 Implications of Estimating with Unbalanced Data . . . . . . . . . . . . . . . . . . . . . . . 7 - 16
   7.7     Results Based on Weighted Versus Unweighted Data . . . . . . . . . . . . . . . . . . . . 7 - 17
     7.7.1 Estimates with Stratified Sample Weights . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 - 17
     7.7.2 Implications of Stratified Sampling Weights . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 - 18
   7.8     Results Based on Median Regressions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 - 20
     7.8.1 Single Equation Estimation of a Strictly Autoregressive Model . . . . . . . . . . . . . 7 - 22
     7.8.2 System of Equations Estimation of a Strictly Autoregressive Process . . . . . . . . 7 - 24
     7.8.3 Estimation of Autoregressive Coefficients Allowing for a Moving Average
           Component . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 - 28
   7.9     Summary of Findings . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 - 29

8. Conclusion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 - 1



Appendices

Appendix A: Specifying the Covariance Matrix for an ARMA Process
Appendix B: General Procedure for Estimating ARMA Process


Tables

Table 7.1 Covariogram for Wage Growth Residuals
Table 7.2 Estimates of Only Autoregressive Coefficients for Wage Growth Error Structure
Table 7.3 Joint Estimates of Autoregressive and Covariance Parameters for Wage Growth Error
          Structure
Table 7.4 Bootstrapped Estimates of ARMA Processes for Wage Growth Error Structure
Table 7.5 Covariogram Based on Unbalanced Wage Growth Residuals
Table 7.6 Covariogram Based on Weighted Wage Growth Residuals
Table 7.7 Weighted Estimates of ARMA Processes for Wage Growth Error Structure
Table 7.8 Quantile Regression Estimates of AR Processes for Wage Growth Error Structure




                                                                   iii
                                        1. Introduction



       Few topics in empirical economics have received as much attention as the dynamic

properties of wages and earnings. The questions asked in this work include: To what extent does

the dispersion of an individual’s earnings grow over time? Is this dispersion shared by other

individuals and groups? Does this dispersion give rise to a shift in rankings of individuals within

groups? Comprehensive answers to such questions require knowledge of two factors that jointly

determine the dynamic properties of an individual’s earnings: market-wide trends governing the

evolution of cross-sectional distributions over time, and forces underlying an individual’s

mobility within distributions. Empirical analyses exploiting micro-longitudinal data constitute a

prominent approach for acquiring this knowledge, an approach that relies on a rich array of

econometric specifications to uncover the intertemporal relationships linking an economic

agent’s variables over both short and long time horizons. This chapter overviews the panel data

models and estimation methods found in the literature on earnings and income dynamics. While

it motivates the discussion by drawing upon the questions and analyses found in this extensive

literature, one can readily apply the empirical methods covered here to characterize the

intertemporal properties of a wide range of variables available in longitudinal settings.

       The discussion surveys methods for estimating specifications designed to characterize the

dynamic properties of continuous dependent variables in panel data settings, variables whose

stochastic fluctuations follow patterns consistent with sophisticated forms of time-series and

error-component models. In addition to considering flexible intertemporal specifications for

error structures, the analysis admits nonlinear structural equations as a vehicle for relating


                                                 1-1
measured variables both contemporaneously and over time. This chapter not only covers such

specifications that provide a summary of the autocorrelation patterns of variables, which link the

first and second moments of variables over time, but it also explores procedures for fitting

quantiles to describe dynamic relationships. Panel data offer multiple observations on

individuals over several periods, often supplying only short and noncontiguous time series for

members of a large cross section of individuals. This feature of longitudinal data means that not

all of the specifications and estimation procedures applicable in conventional time series analysis

carry over to panel data and, alternatively, many of the problems and options relevant in

analyzing longitudinal data are not found in standard time series studies.

       Familiar “method of moments” (MM) procedures provide a general apparatus for

estimating parameters of panel data specifications, but one encounters a variety of challenges in

implementing such procedures in longitudinal data settings. One issue, easily overcome by

drawing upon findings in the literature, concerns how to exploit predetermined variables –

quantities which are endogenous in some equations but not in others – as instrumental variables

in estimation. More demanding challenges involve computational complexities confronted when

estimating large systems of equations with intricate nonlinearities, circumstances that often come

about in panel data applications, especially when one incorporates empirical specifications to

estimate dynamic structures describing error processes. Still more formidable challenges concern

how to use weights to account for the stratified samples that are a part of all longitudinal surveys,

and how to carry out estimation with unbalanced samples – samples that have an uneven number

of, and possibly different, time series observations across individuals. Longitudinal surveys

supply a variety of weights for use in the calculation of statistics to compensate for nonrandom

sampling, and the question arises as to which weights one should use in MM procedures when


                                                1-2
estimating dynamic relationships. Use of unbalanced datasets in MM procedures to avoid

discarding data typically leads to the reporting of invalid standard errors and test statistics by

conventional MM formulas.

       To surmount the computational challenges one can encounter with implementation of

MM procedures, this chapter lays out several options enabling practitioners to estimate

sophisticated longitudinal data specifications using standard routines available in familiar

software packages. Linear/nonlinear 3SLS procedures rely on convenient computational

formulas for large systems of equations. While 3SLS routines do not allow for the inclusion of

predetermined variables as instrumental variables, the subsequent discussion demonstrates how

to modify a conventional 3SLS system to exploit predetermined variables fully in estimation with

a minimal amount of extra programing and computational burden. In addition, to allow

researchers to separate the estimation of longitudinal time-series specifications into manageable

pieces, the discussion describes multi-step approaches. When carrying out a step, a researcher

can focus on estimating only the subset of parameters appearing in a single model component

(such as the AR or MA structure of the error process) without having to estimate all parameters

of the entire model jointly. Such procedures offer a powerful set of diagnostic tools for

narrowing model choices and for selecting among specifications that fit the underlying data.

       Regarding other challenges, this chapter demonstrates how to incorporate weights in MM

procedures to compensate for the nonrandom sampling frames inherent in longitudinal surveys –

thus avoiding naive MM implementations that produce inconsistent estimates and/or test

statistics . It also describes how to construct weights to enable use of unbalanced data structures.

In addition to describing estimation of dynamic simultaneous equations that relate the moments

and autocorrelation patterns of earnings over time, the analysis also outlines how this apparatus


                                                 1-3
can be applied to estimate specifications characterizing the autoregressive properties of the

quantiles of earnings.

       To illustrate implementation of the econometric methods outlined in this chapter, the

exposition relies on a unified set of empirical applications rather than attempting to cite examples

from the existing literature; the current body of studies does not offer sufficient overlap or cover

all issues necessary to exemplify approaches. All empirical illustrations presented here utilize a

common dataset on men’s wages drawn from the Panel Study of Income Dynamics (PSID). The

discussion presents ideas in a way useful to practitioners who wish to specify and estimate

models capable of addressing their empirical questions, not to readers desiring a knowledge of

the rigorous theoretical underpinnings of econometric results or a comprehensive documentation

of studies in the field. While the chapter draws heavily on existing results in the literature and

does not claim originality of the concepts outlined here, it does not attempt to attribute each

development to specific authors and omits many references. Instead, as concepts are introduced,

it directs readers to a variety of other surveys, especially to other chapters in this and other

Handbooks, that offer a wealth of citations and references along with alternative presentations of

the material.

       This chapter does not address a variety of interesting topics important in analyses of

longitudinal data and aggregate trends. First, this chapter focuses on estimation approaches

applicable for continuous dependent variables, and not for dependent variables that are discrete,

censored, or truncated. For discrete variables in a longitudinal setting, popular estimation

approaches include duration and competing risk models, topics comprehensively covered in

Handbook of Econometrics chapters by Heckman and Singer (1986) and van den Berg (2001).

Handbook chapters by McFadden (1984), Hajivassiliou and Ruud (1994), and Arellano and


                                                  1-4
Honoré (2001) describe other valuable approaches for estimating dynamic relationships

involving discrete, as well as censored and truncated, variables. Second, this chapter interprets

specifications of market-wide trends as time effects that are common across population segments,

and estimates these effects as parameters. Therefore, the analysis does not consider the more

elaborate specifications for aggregate trends that incorporate sophisticated forms of stochastic

components of the sort entertained in Handbook chapters surveying time-series techniques by

Granger and Watson (1984), Hendry, Pagan and Sargan (1984), Geweke (1984), Wooldridge

(1994), Stock (1994), Watson (1994), Teräsvirta, Tjøstheim and Granger (1994) and Hamilton

(1994); nor does this chapter survey the empirical methods found in the extensive literature

documenting the market-wide trends in wage growth and earnings inequality that have occurred

during the past three decades, a topic covered in the Handbook of Labor Economics chapter by

Katz and Autor (2001). Third, this chapter restricts attention to classical estimation methods

applicable for parametric specifications; consequently, it does not cover the burgeoning literature

on non-parametric and semi-parametric estimation methods, nor does it address the use of

Bayesian procedures. Handbook chapters by Härdle and Linton (1994), Powell (1994), Geweke

and Keane (2001) and Abbring, Heckman and Vytlacil (2004) provide insightful overviews of

these alternative estimation methods.

       Six sections make up the core of this chapter. Section 2 surveys the wide variety of

empirical specifications applied in the longitudinal data literature to characterize the dynamic

properties of wages and earnings, considering specifications for both error structures and

distributed lag relationships linking measured variables. Section 3 briefly covers the key

asymptotic results underlying MM estimation and testing procedures, along with the challenges

encountered in implementing these methods in panel data settings. Section 4 presents several


                                                1-5
approaches for simplifying the estimation problem confronted when fitting sophisticated

longitudinal specifications, with the focus on subdividing the overall estimation problem into a

series of manageable steps. Section 5 outlines how to adapt the empirical apparatus covered in

the earlier sections to provide for estimation of autoregressive specifications for the quantiles of

variables. Section 6 describes how to integrate the weights provided by longitudinal surveys into

the estimation of panel data models, and it goes on to develop a modified weighting-type

procedure enabling one to use unbalanced data structures to estimate dynamic specifications. To

illustrate application of the modeling and theoretical concepts covered in this chapter, Section 7

presents a series of empirical examples designed to explore the dynamic properties of the hourly

wages of men using data from the PSID for the years 1980-91. The purpose of this empirical

analysis is not only to enhance accessibility to practitioners, but also to offer some insights into

the sensitivities of findings induced by relying on alternative methods. As a conclusion to the

overall chapter, Section 8 offers an abbreviated summary and concluding remarks.




                                                 1-6
         2. Empirical Specifications Describing Panel Data Dynamics



       The empirical literature characterizing wage and earnings dynamics in panel data settings

exploits a wide variety of specifications. Modeling the intertemporal properties of continuously-

distributed variables using longitudinal surveys involves distinguishing two sources of variation

in data: aggregate dynamics determining how cross-sectional distributions evolve over time, and

micro dynamics describing the evolution of individual agents’ relative positions within cross-

sectional distributions from period to period. This chapter reviews empirical approaches focused

on characterizing the micro aspects of dynamics.

       Two components make up panel data specifications designed to capture the underlying

sources of micro dynamics experienced by individuals. The first relates to measured variables,

be they endogenous, predetermined or exogenous quantities. These specifications may be

nonlinear in both parameters and variables; they often incorporate distributed lag relationships.

The second model component describes the stochastic properties of error terms appearing in

structural equations. These properties reflect features of the time series processes generating

individual-specific errors. One finds elaborate representations for these time-series models in

longitudinal data analyses, including sophisticated integration of nonstationary ARMA

specifications and error-component models comprised of time-varying combinations of

individual-specific factors.

       This section begins with a broad characterization of the empirical specifications whose

estimation occupies the remainder of this chapter. After identifying how such specifications

account for the underlying aggregate and micro aspects of dynamics, the discussion reviews the


                                               2-1
empirical parameterizations applied to model complex autocorrelation structures linking both

measured variables and unobserved errors over time. In addition to exploring parameterizations

that describe the intertemporal pattern of the moments of variables, this section ends with a

discussion of empirical parameterizations aimed at modeling the dynamic properties of

dependent variables through the evolution of quantiles of over time.



2.1     General Characterization of Empirical Specifications

        The panel data models discussed in this survey belong to parameterizations of the

following nonlinear simultaneous equation:

(2.1)                   f ti = f ti (Yti , Zti , Xti , ( ) =   U ti .

The function f ti possesses a known form, but the parameter vector ( is unknown and must be

estimated. The data vectors Yti, Zti and Xti have the structure




(2.2)                                                                                           ,




with observations available for “agent” or “individual” i in time period t. The models considered

here assume that a panel dataset supplies T time series observations for each of N cross sectional

observations on individuals. The yti’s in (2.2) represent current and lagged endogenous variables;

the zti’s comprise additional sets of endogenous and predetermined quantities; and the xti’s

constitute exogenous variables. The quantities fti , yti , zti and xti may all be interpreted as column

vectors, but much of the discussion treats them as scalars to simplify the exposition.

        The error term U ti in (2.1) follows a generalized ARMA(p,q) process given by


                                                     2-2
                                                                         ,

where the ,ti’s constitute mean-zero disturbances that are independently distributed over both

time and individuals, and the ajt’s and mjt’s are parameters with aot = mot = 1. A compact

representation of this equation is

(2.3)                                  at (L) Uti = m t (L) ,ti,

where at (L) /                 and mt (L) /                  are lag polynomials of orders p and q

respectively.1 In many longitudinal data specifications, the coefficients of at (L) and mt (L) are

time invariant. The error terms ,ti are independently distributed over time and individuals, with a

variance-covariance structure given by

(2.4)

When Eti = Eki /Ei for all t and k, the literature designates the ,ti’s as white noise, for they satisfy

a weak stationarity property (i.e., have constant variances over time). When Eti = Etj /Et for all i

and j, the disturbances ,ti are homoscedastic across individuals. The subsequent discussion

covers estimation procedures allowing for the parameters Eti to be constant over time and/or

across agents. Regardless of the specification of Eti , the following exposition refers to the ,ti’s

as white noise.



2.2       Sources of Dynamics

          Modeling the dynamic properties of variables for individuals requires distinguishing two

sources of variation: components reflecting shared time effects that jointly displace measures for

entire groups, and individual-specific sources of variation. In practice, there can be considerable

discretion in attributing fluctuations to these different sources, making this conceptually-simple

 1
      The roots of the polynomial m t(L) are assumed to lie on or outside the unit circle. This restriction is the usual one
       imposed in the time series literature to guarantee identification of the coefficients of mt(L).

                                                             2-3
task quite difficult. Often this task is accomplished without researchers explicitly realizing that

they have done so.

          To fix ideas, consider the simple linear regression specification

(2.5)                                                                                                                      ,

where        constitutes a time effect common to all individuals i in period t, and the error terms

are distributed independently of all time components making up the vector of                                           .

According to this relation, time effects influence the dynamics of yti’s only by shifting the means

of the cross-sectional distributions from one period to the next. If, in addition, the variance of

the     systematically grows or declines over time, then one might replace (2.5) by

(2.6)                                                                                     ,

where         and        are distinct time components realized in period t, and now                       is distributed


independently of all the           ’s and       ’s. When there are multiple time effects operative in period

t, the subsequent analysis interprets             as a vector incorporating these effects, and the vector J as

including all time components              .2

          Inspection of (2.5) reveals that the overall dynamic properties of yti depend on four

sources: (1) the stochastic behavior of the time components Jt ; (2) the parameters determining

the distributed lag relationships involving past yti’s and xti’s; (3) the intertemporal properties of

the xti’s; and (4) the stochastic process of the errors               .

2.2.1     Aggregate Dynamics

          Many studies focus on understanding the forces underlying trends in the economy or in a

market, rather than how individuals sort themselves around these trends from one period to the
 2
      Analyses may further specify that time effects differ across groups of individuals, in which one might further
        substitute      and       for     and      in (2.6) where the subscript “g” distinguishes particular groups. In this

        case, the notation J t would be a vector incorporating the elements      and          for all groups.


                                                            2-4
next. These forces determine the evolution of cross-sectional distributions over time. This

exercise requires knowledge of the time patterns followed by the Jt’s, for movements in the Jt’s

determine how cross-sectional distributions shift over time.

        In a micro empirical analysis, one can treat the Jt’s as fixed or random effects. The

majority of micro studies estimate the elements of J as parameters, thus implicitly interpreting

the Jt’s as fixed effects. Another popular approach treats the time effects Jt as deterministic

functions of exogenous variables, with year and age variables introduced to capture underlying

trends. Such analyses often abandon attempts to learn much about the intertemporal process

determining time effects and merely plot the estimated values of J1 ,..., JT against time.

        When studies interpret the Jt’s as random time effects, their purpose is to estimate

relationships characterizing the stochastic properties of these time components. Typically, micro

analyses interpret the time effects as being independently distributed over time. In contrast,

macroeconomic analyses introduce sophisticated relationships to model the dynamic properties

of these economy-wide effects, exploiting rich specifications based on ARMA, ARCH, or

GARCH models. These models are not pursued in most longitudinal studies due to small

samples in T, which render consistent estimation infeasible.

2.2.2   Micro Dynamics

        Treating the time components (Jt ) as parameters in estimation renders a micro analysis

that depicts the stochastic properties of the yti’s conditional on the Jt ’s. This variation

characterizes how individuals sort themselves within cross-sectional distributions over time after

removing aggregate or economy-wide effects. Such information reveals how individuals

systematically deviate from the aggregate trends measured by the quantities J from one period to

the next.


                                                 2-5
        There are two routes through which specification (2.1) captures the micro sources of

dynamics: the measured function fti that relates current and past yti’s and xti’s, and the stochastic

process generating the unobserved quantities Uti . Expressed in terms of these micro dynamic

components, prototype specification (2.5) becomes:


(2.7)


Thus, fti incorporates features of the distributed lag relationships involving measured variables,

along with the time effects estimated as parameters. The error Uti captures the time series

properties of disturbances. If one were instead to consider specification (2.6), then the error

becomes                 which depends directly on time effects and may, as a consequence, exhibit


heteroscedasticity properties over time in addition to its autocorrelation attributes.

        The remainder of this section discusses a rich array of empirical specifications for

modeling both f ti and the intertemporal properties of U ti . The particular variety of model

introduced in a longitudinal analysis to characterize individual variation fundamentally depends

on the character of the dependent variables. When variables are discrete, duration or competing

risk models are popular candidates. When variables are censored or truncated, researchers

commonly specify complete distributional assumptions combining continuous and discrete

variables and carry out maximum likelihood procedures. This chapter primarily focuses on

estimation methods applicable when the yti’s are continuously distributed with J treated as fixed.

The analysis covers two distinct types of empirical specifications devised to summarize the micro

dynamic properties of y: (i) relationships that link the moments of y determining its

autocorrelation structure, and (ii) empirical formulations that describe the evolution of the

quantiles of y over time.

                                                 2-6
2.3      Dynamic Simultaneous Equation Models

         Starting with flexible specifications for the function fti in (2.1) designed to model the

intertemporal moments of y, a popular formulation consists of a structural equation from a

DSEM (dynamic simultaneous equation model), such as

(2.8)           A(L) yti = Q (L) z ti + B(L) x ti + Uti,

where A (L) /               is a finite-order lag polynomial with A0 = 1 , and Q(L) /                and

B(L) /             are row vectors of finite-order lag polynomials. Written in terms of (2.1), this

DSEM implies the specification

                f ti (Yti , Zti , Xti , ( ) = A(L) yti - Q (L) z ti - B(L) x ti .

An alternative representation of (2.8) is

                                                                          ,

which may be expressed compactly as

(2.9)           yti = Y (t-1)iN B + ZtiN R + XtiN $ + Uti ,

where the vectors Y(t-1)i , Zti , and X ti are defined by (2.2), and the parameter vectors B, R and $

incorporate coefficients included in A, Q and B respectively. With T* denoting the total number

of time periods supplied by the panel data source, T/ T* - max (n, r, s) is the number of periods

for which there are data on all the variables appearing in equation (2.9). Period 1 in this

discussion refers to the first period in which data are available, so t = 1 , . . . , T.

         Combining observations on equation (2.9) for a given individual into a single system

creates a model that is particularly useful for the analysis of panel data. Stacking these

observations in descending order starting with the last period yields




                                                    2-7
                                                                                            ,




which, in matrix notation, is

(2.10)                      yi = Yi B + ZiR + Xi$ + Ui

i = 1 , . . . , N. The disturbances Uti of equation (2.9) may be autocorrelated over time, but they

are assumed to be independently distributed over individuals after the removal of common period

effects achieved by including time dummies or polynomials in time among the exogenous

variables. Denote the variance-covariance matrix of Ui by 1 = E{Ui UiN}. With distributed lag

structures common across individuals, the panel data source offers N independent sets of T time

series observations with which to estimate the parameters of equation (2.9).

         Equation (2.8) provides a framework for considering a wide variety of distributed lag

relationships among the elements of Y, Z, and X using panel data, including infinite order

schemes. The assumption that the lag polynomials A(L), Q(L), and B(L) are of finite order is not

as restrictive as it may at first appear. One can derive a specification in the form of (2.8) for any

infinite-order distributed lag relationship that can be written as a ratio of finite order lag

polynomials. Such lag schemes, known as rational distributed lags, admit flexible weighting

patterns on past variables and contain many well-known schemes as special cases. Analyzing

rational distributed lag schemes using specifications (2.8) or (2.9) can imply nonlinear

restrictions relating the coefficients of the polynomials A(L), Q(L), and B(L). The estimation

procedures developed below permit such restrictions. While imposing these constraints may yield

increased efficiency in estimation, one can construct less efficient estimates of infinite-order lag


                                                 2-8
structures using unconstrained estimates and the formulas implied by Q(L)/A(L) and B(L)/A(L).3

         The desirability of imposing “smoothness” restrictions of the sort implied by a rational

distributed lag structure has been questioned in the time series literature,4 and it is natural to

question the value of such restrictions in a longitudinal analysis as well. In contrast to a time

series analysis, one can completely relax these smoothness restrictions in a panel data setting and

test the constraints implied by a particular rational distributed lag scheme before accepting it as a

specification. The main implication of assuming that a DSEM characterizes distributed lag

relationships among measured variables is the imposition of constraints across equations

associated with different time periods for a given individual. Inspection of model (2.10) reveals

that these constraints translate into an equality restriction that requires B, R and $ to be constant

across equations. It is straightforward to relax this equality restriction when estimating the system

of equations given by (2.10) and to test whether it can be accepted for the longitudinal dataset

under consideration.

         While specification (2.9) presumes that a researcher wishes to analyze only a single

structural equation per period, it is straightforward to modify this specification to permit analysis

of a multicolumn vector and of the coefficients Aj , Q j and Bj as matrices of parameters.




 3
     Consider, for example, the construction of estimates for the coefficients of an infinite order rational distributed lag
      that relates Y ti to a single exogenous variable K ti. According to equation (2.8), this distributed lag * (L) =       is
      given by * (L) = B(L)/A(L). The result A(L) *(L) = B(L) implies formulas for the * j’s. In particular, equating the
      coefficients associated with each Lj term in the polynomial A(L)*(L) to the corresponding coefficient in the
      polynomial B(L) yields a set of difference equations that can be solved for * j, j = 0, . . ., given estimates of the A j’s
      and the B j’s.

 4
     See, for example, Sims (1977) for a discussion of this issue.

                                                             2-9
2.4       Modeling Dynamics Through Error Structures

          In many applications, modeling the autocorrelation properties of disturbances is an

important component of a panel data analysis. Indeed, it is the focus of most longitudinal studies

in the empirical literature concerned with characterizing the dynamic aspects of an individual’s

wages or earnings.5 Besides providing a framework for summarizing the intertemporal properties

of variables, the introduction of a stochastic process for disturbances can create a statistical

model that may be used for prediction outside the sample period. In the case of simultaneous

equations, its inclusion can aid in securing the identification of structural parameters.

2.4.1     Addition of Other Error Components

          Many longitudinal analyses combine pure autoregressive or pure moving-average error

terms with permanent components and random trend components to model the intertemporal

correlation pattern of disturbances. Thus, Uti in equation (2.8) becomes

(2.11)                                          Uti = N1i + N2i t + <ti ,

where <ti is now generated by the ARMA process (2.3) with either a(L) = 1 or m(L) = 1, and N1i

and N2i are time-invariant random components distributed independently across individuals.6

          For those procedures in the subsequent discussion that provide for the direct estimation of

either autoregressive or moving-average coefficients contained in the lag polynomials a(L) and

m(L), the difference disturbances (1-L)<ti or (1-L) 2 <ti should be used in place of the Uti’s when

either N1i or N2i are present. In particular, if only the permanent component N1i is admitted (i.e.,

N2i = 0), then first-differencing equation (2.8) creates a new error (1-L) Uti that follows an

 5
      See, for example, Hause (1977), Lillard and Willis (1978), Baker and Solon (2003), Altonji and Dunn (2000).
 6
      The most popular specification is one that combines a permanent component with a pure autoregressive scheme.
       David (1971), Hause (1977, 1980), Lillard and Willis (1978), and Lillard and Weiss (1979) are examples of
       studies that estimate first-order schemes (i.e., p = 1 and q = 0 in (2.3)); Ashenfelter (1978) considers higher-order
       autoregressive processes. Friedman and Kuznets (1957, p. 353) estimate a first-order moving-average scheme (i.e.,
       p =0 and q = 1 in (2.3)) with a permanent component; Hause (1977) considers higher-order moving-average
       processes. MaCurdy (1982) considers a mixture of an autoregressive and a moving-average process.

                                                          2 - 10
ARMA structure of the sort given by (2.3). If N2i is also admitted, then second-differencing

changes the specification of the ARMA process for the disturbances in a known way and

introduces no new parameters. The same is true if a DSEM specification happens to describe

the relationships involving the measured variables. Thus, it is possible to construct a full set of

estimates for the coefficients of the polynomials A(L), Q(L), B(L), a(L), and m(L) using only the

parameter estimates of the differenced equations.

         Alternatively, if the error components N1i and N2i are assumed to be independent of the

<ti’s, as is often maintained in longitudinal studies, it is straightforward to modify the

specification of 1 = E {Ui Ui N} developed below to reflect the influence of N1i, N2i, or both. This

adjusted specification of 1 can then be used in the estimation procedures proposed in later

sections.

         Yet another set of error structures implemented in a longitudinal setting describes

disturbances as taking the form

(2.12)

where                    is a vector of factor-loading coefficients (which may or may not be

known); and                       is a vector of individual-specific time-invariant disturbances with



According to (2.12), Uti equals a weighted sum of two error structures: a k-dimensional “factor”

model consisting of a sum of correlated individual-specific errors Nj ; and an individual-time-

specific error <ti which is distributed independently of Ni and may be serially independent over

time or follow an ARMA(p,q) process. This error structure admits a wide variety of

autocorrelation patterns with a minimal number of parameters.

         As in the case of (2.11), it is elementary to modify the specification of 1 = E {Ui Ui N}


                                                2 - 11
developed below to account for the influence of the factor components Ni appearing in (2.12).

This adjusted specification of 1 can then be used in the estimation procedures proposed in later

sections. Alternatively, one can often transform (2.12) into a form that eliminates the N

components, and one can estimate the transformed error structure utilizing approaches similar to

the differenced specifications outlined above. For example, in the most common formulations,

the factor loading 8t and error component Ni are each scalars. In such cases, one can divide

(2.12) by 8t and apply first-differencing to eliminate Ni . The resulting specification introduces

an individual-time-specific error, <ti /8t , which may be heteroscedastic over time. In terms of

specification (2.4), this implies the white noise errors ,ti will be nonstationary.

2.4.2   Admitting Nonstationarity in Longitudinal Analysis

        Permitting the errors ,ti to be heteroscedastic over time gives rise to no conceptual

difficulties in analyses of panel data. The variance-covariance parameters Eti in (2.4) differ

across t but remain constant over individuals i. In standard time series analysis, this sort of

nonstationarity does not necessarily create estimation problems, but it does require an explicit

parameterization of the suspected form of the heteroscedasticity that avoids an incidental

parameters problem. In the case of panel data, however, estimation procedures allow for

arbitrary forms of serial heteroscedasticity.

        A second form of nonstationarity permitted in panel data analysis provides for the

coefficients of the lag polynomials a(L) and m(L) to vary arbitrarily across periods so that there

are new sets of autoregressive and moving-average parameters for each t. Specification (2.3)

incorporated such options by including t subscripts on the lag polynomials at (L) and mt(L);

testing of common coefficients in a longitudinal analysis setting is discussed below.

        A third source of nonstationarity readily admitted in panel data analysis involves relaxing


                                                2 - 12
the requirement for the roots of the autoregressive lag operator a(L) to lie outside the unit circle.

Thus, it is possible to consider such error processes as random walks when using longitudinal

data. In a time series analysis the existence of such nonstationarity has significant consequences

on the asymptotic properties of estimators, but in the case of panel data, where asymptotic results

rely on a large number of individuals rather than a large number of time periods, its inclusion has

no such effects.

          A fourth form of nonstationarity found in panel data studies comes about due to the

influence of initial conditions associated with the starting values of an ARMA model, a set of

conditions that differ across individuals. Section 4 considers this topic in detail.

          To highlight key ideas, Sections 4 and 7 focus on the modeling and estimation problems

encountered when assuming that a common ARMA process generates the disturbances Uti over

time and across individuals, with the white noise errors ,ti assumed to be stationary and the same

for all individuals. Such error structures admit a wide variety of time series aspects of panel data

with a minimal number of parameters. Moreover, in longitudinal analyses this class of error

specifications has performed well in describing the intertemporal features of the data. The

subsequent discussion also covers modifications needed to accommodate each of the sources of

nonstationarity outlined above.7



2.5       Dynamic Quantile Regressions

          Rather than introducing specifications describing the evolution of the mean and the

autocorrelation structure of the yti’s, suppose one instead wishes to characterize the micro

dynamic properties of these dependent variables by modeling the intertemporal features of the

 7
      Baltagi (2002) surveys recent developments of panel data methods for estimating parameters in the presence of
        several varieties of nonstationarity popular in the times series literature.

                                                         2 - 13
conditional quantiles of y. To interpret prototype equation (2.5) in this context, assume the error

<ti in this specification is distributed independently both over time and across individuals; so, <ti

= ,ti , the white noise error term specified in (2.4). The autoregressive coefficient B characterizes

the dynamic properties of wages after removing trends, and one can readily generalize this

prototype specification to incorporate an autoregressive structure with multiple lags, as analogous

to the DSEM specified by (2.8).

         A conventional autoregressive formulation of (2.5 ) invokes the moment restriction

(2.13)                             E ( <ti | Y(t-1) i , Xti ) = 0,

where Y(t-1) i signifies the past wages y(t-1) i , ... , y(t-k) i . This condition implies that (2.5)

characterizes how the first moment of the Markov distribution of yti conditional on Y(t-1) i and Xti

evolves over time. One applies least squares or generalized least squares methods to estimate the

parameters of such formulations, suitably adjusting for heteroscedasticity or correlation in an

individual’s errors when appropriate.

         Alternatively, one can associate relation (2.5) with an autoregressive formulation of the 6-

th percent quantile (or percentile) of the Markov distribution of yti by imposing the restriction

(2.14)                             q 6 ( <t i | Y(t-1) i , Xti ) = 0,

where q 6 ( ) designates the 6-th percent quantile of the distribution of <ti conditional on Y(t-1) i

and Xti , where 6 0 (0, 100). When 6 = 50, equation (2.5) determines how the conditional

median of yti evolves over time. Conceptually, the application of LAD procedures would

produce consistent estimates of the autoregressive coefficients appearing in (2.5). Such relations

have only rarely been estimated in a panel data context, but specifying variants of (2.14) for

several values of 6 offers a parsimonious and flexible framework for describing micro dynamic

relationships.


                                                       2 - 14
       Section 5 summarizes a class of quantile estimators for systems of simultaneous equation

models comprised of time series observations on fti (Yti , Zti , Xti , ( ) that provides a flexible and

non-cumbersome procedure for estimating parameters of dynamic relationships of the sort

specified by (2.5). In essence, assuming specifications for the quantiles of structural error

distributions conditional on exogenous or predetermined instruments, the estimators formulate

these conditional quantiles into moment conditions capable of being estimated within a

conventional nonlinear instrumental variable or MM (method of moments) framework. This

apparatus matches the sample analog of the conditional quantiles against their population value,

employing a smoothing procedure familiar in various problems found in non-parametric

inference and simulation estimation. The analysis applies standard arguments to demonstrate

consistency and asymptotic normality of the resulting Smoothed MM Quantile estimator.




                                                2 - 15
                       3. Basic Estimation Concepts and Challenges



         Much is known about the estimation of nonlinear simultaneous equations of the sort

encountered in longitudinal data analyses, and this section outlines the key results. The

discussion opens with a brief summary of the “method of moments” (MM) estimation

framework, which also goes by the names of “generalized method of moments” (GMM),

“nonlinear instrumental variables” (NIV), and “minimum chi-squared” estimation.8 In addition

to reviewing the central asymptotic results exploited in the MM estimation approach, the

discussion also highlights the procedures for selecting optimal instrumental variables and for

testing joint hypotheses.

         While this apparatus offers a comprehensive framework for estimating a wide variety of

models, one encounters several challenges in applying these methods in a panel data context.

One challenge, which has been addressed fully in the literature, concerns how to exploit

predetermined variables – variables that are endogenous in some equations but not in others – as

instrumental variables in estimation. More demanding undertakings involve computational

complexities that arise when one incorporates large numbers of equations in estimation with

intricate nonlinearities, as well as development of empirical specifications enabling estimation of

the dynamic structure describing error processes. Still more formidable challenges concern how

to use weights to account for stratified samples that are a part of all longitudinal surveys, and

how to carry out estimation with unbalanced datasets – samples with an uneven number of time
 8
     Many have contributed to the development of this estimation methodology. Most notably, Sargan (1958, 1961)
      initiated the study of this class of estimators, and Amemiya (1974, 1975, 1977) and Hansen (1981) substantially
      generalized and expanded these methods to create the broad framework summarized in this section. Handbook
      chapters by Amemiya (1984) and Manski (1994) present valuable overviews and alternative presentations of these
      approaches.

                                                        3-1
periods and possibly non-overlapping time periods of data available for individual sample

members. The second part of this section provides an overview of these challenges, whereas

Sections 4 through 6 lay out specific approaches for dealing with each challenge in a longitudinal

data setting.



3.1     Overview of Method of Moments Estimation Procedures

        Suppose one is interested in calculating a consistent estimate of the “true” value of a

p x 1 parameter vector ( that is an unknown determinant of the distribution generating a random

vector Y. Denote this true value as (o , and let Yi and X i , i = 1, ..., N, denote N observations on

Y and on a vector of measured characteristics X. The Yi’s are assumed to be independently

distributed across observations after conditioning on the X i’s, or when these characteristics are

treated as known constants.

3.1.1   Method-of-Moments Estimators

        The MM approach offers a general procedure for estimating the parameters (o in large

samples. To characterize this class of estimators, let Ri (() / R ((, Mi ), i=1, ..., N, represent a b x

1 vector of known functions with b $ p where the vector Mi includes elements of Yi and X i .

Consider the system of equations


(3.1)                                                             .


Assuming each Ri possesses a sufficiently well-behaved distribution and the Ri’s are chosen so

that lim N64 E(LN ((o)) = 0, one can show that setting ( = (o solves (3.1) in the sense that LN ((o)

converges in probability to zero as the sample size goes to infinity. Identification of ( requires

the existence of a unique solution to (3.1), which requires the Jacobian of LN to have the



                                                  3-2
appropriate rank, as dictated by the implicit function theorem.9 The MM estimation approach

maintains that the matrices of first partials                           i = 1, ..., N, exist with each element uniformly

continuous in (. Denote the average of these partials by                                                         assumed to

possess full column rank, and define the matrix                                                             as an average of

outer products. By maintaining further assumptions guaranteeing satisfaction of a set of

regularity conditions, one can demonstrate that computing a solution to (3.1) yields a strongly

consistent estimate for (o that is asymptotically normally distributed.10 To derive the asymptotic

results cited below, the distributions associated with the Ri’s and the matrices of first partials

cannot have too much weight in the tails.11

           When the number of equations in (3.1) used to compute estimates surpasses the number

of parameters, there seldom exists a value for ( that solves all equations making up (3.1) exactly

in finite samples. Thus, one requires a weighting scheme for comparing the errors obtained in

solving the various equations. A standard approach is to compute a value                                   to minimize the


quadratic form

(3.2)                                                                           ,

where H N is a positive definite symmetric matrix for all N (including its probability limit as

N64). When the number of equations exceeds the number of parameters, the form of HN




 9
      In many applications, one cannot rule out the possibility that values of ( other than ( o may also satisfy (3.1) in the
         limit. One can, however, easily resolve this issue for the estimation problems considered below, and for simplicity
         this analysis assumes the solution to (3.1) is unique.
 10
      To prove consistency and asymptotic normality of the solution to L N (() = 0 , the convergence of LN , SN , and V N to
        their respective limits must be uniform in (, and this assumption is maintained throughout the discussion. Chapter
        4 in Amemyia (1985) provides detailed definitions of several forms of uniform convergence.
 11
      Letting Rji and sjki denote the j and (j, k) elements of Ri and       respectively, sufficient conditions restricting the tails

        of distributions are:                                                       for some * 1 , * 2 > 0 and all ( , '.

                                                                 3-3
determines the relative tradeoffs in solving (3.1), which in turn defines the estimator                       . 12


Essentially any         that minimizes (3.2) yields a strongly consistent estimator for (o that is


asymptotically normally distributed as follows:



                                                                                                                          ,


where                     and                    . Thus, the approximate distribution for                in large


samples is

(3.3)                                                                                                                .



The efficiency of the estimator             depends on the choice of HN.


3.1.2     Generalized Least Squares

          According to generalized least squares theory, selecting HN in (3.2) to be a matrix that is

proportional to the inverse of the variance-covariance matrix of LN ((o) leads to the most

efficient parameter estimate obtained by minimizing (3.2). Such a choice is

                              , where this expression relies on the the relation

                                                                                       ,

following from the independence of observations Ri with the notation                        designating convergence


in probability. The matrix E(VN((o)) is unknown, but as with many generalized least squares

analyses, a consistent estimate for this matrix is easily constructed and the asymptotic properties

of estimators are unaffected if one substitutes this consistent estimate for the true value of the

 12
      Ordinary least squares derives an estimate for ( by minimizing the sum of squared errors associated with the b
        equations appearing in (3.1), which implies setting H N = I (/identity matrix), corresponding to minimizing the
        quantity

                                                           3-4
matrix. Accordingly, when computing an estimate for (o, one sacrifices no estimation efficiency

by instead minimizing the quadratic-form distance function

(3.4)                                                             ,



where                         representing any consistent estimate for (0 , implying



                           . Let     denote that value of ( minimizing (3.4).



        The asymptotic properties of the estimator     follow from (3.3). With               , we


have           and



                                                                                ,


where the matrices S(     ) and V(    ) respectively denote the probability limits of SN(    ) and


VN(     ). Thus, the approximate distribution for    in large samples is


(3.5)                                                                 ,


where                .

         Distribution formula (3.5) also applies when equation system (3.1) yields a just-

identified solution for the parameters (. In such instances, the number of equations in (3.1)

equals the number of elements in (. Since the system of equations LN = 0 alone fully defines (,

the choice of HN in (3.2) is irrelevant in the calculation of . In such circumstances, the


asymptotic distribution simplifies to

                                                3-5
(3.6)                                                                              .

One finds this specification of the large-sample distribution reported for many estimators.13

3.1.3     Instrumental Variable Estimators

          Longitudinal empirical models of the sort outlined in Section 2 comprise special cases of

the following system of nonlinear simultaneous equations:




(3.7)                                                                                        ,




i = 1, . . ., N, where f ti , t = 1, . . ., T, are vectors of known functions, the column vector Mi

represents the i-th observation on measured variables, (o denotes the true value of the parameter

vector that generates the sample under consideration, and >i represents an error vector which is

distributed independently across observations with E{>i}= 0. Designate Q i as a vector whose

elements are functions of instrumental variables, and which is presumed in the subsequent

discussion to always include a constant. In conventional simultaneous nonlinear equations, one

maintains the assumption that E{ >i * Qi} = 0, so we have conditional-first-moment

independence of > i and Qi .

          A formulation for Ri’s in the MM framework satisfying the properties needed for

consistent estimation of (o takes the form




 13
      Prominent examples include least squares procedures, wherein (3.1) corresponds to the “moment conditions”.

                                                         3-6
(3.8)                                                                               ,




where the operator q designates a matrix Kronecker product,14 and the matrix )i is given by




(3.9)                                                                                         ,




with       denoting an identity matrix of dimension n j . If there exist the same number of structural

equations in each period, then n T = ... = n 1 . This formulation of Ri allows different functions of

the instrumental variables to be applied to each set of equations fti in estimating the parameter

vector (. The distance function (3.4) multiplied by N2 takes the form


                                                                                ,


where       is a consistent estimate of R i. This may also be written as:



(3.10)


where        is a consistent estimate of >i . According to (3.5), this instrumental variable estimator


possesses the large sample multivariate normal distribution:



 14
      The Kronecker is defined as                 , where           .




                                                   3-7
(3.11)



where              is a matrix of gradients evaluated at              .




3.1.4     Optimal Choice of Instrumental Variables

          The efficiency of the MM estimator depends on the selection of the instrumental variables

Qti implemented to estimate the various equations. Assuming the errors >i in system (3.7) have a

common variance-covariance structure across individuals, the optimal choice of the functional

forms of the instrumental variables–the form producing the most efficient estimates–is given by


(3.12)                                                                                             t = 1,...,T,


where the parameter vector (t includes the components of ( appearing in f ti . The expectations in

(3.12) condition on all the exogenous variables available in the simultaneous equations system

(3.7), designated here as Xi.15 With this formulation for the Qti’s, minimizing the function (3.4)

computes the MM estimate, and its asymptotic distribution is given by (3.11). Considering the

class of all MM estimators with Q ti being any function of the instrumental variables, the

estimator computed with the Q ti selected according to (3.12) yields the most efficient estimator

in this class when errors are homoscedastic.

          In general, this choice of Q ti is not directly observed because (0 is unknown. However,

there is no loss of efficiency by replacing (3.12) with



 15
      See Amemiya (1975) for the original demonstration of this result. Formula (3.12) assumes that fti is a single

        structural equation. If fti is a vector, then one forms Q ti by stacking the columns of the matrix            .


                                                             3-8
(3.13)                                                                 t = 1,...,T,


where      is a consistent estimate for (0 , treated as fixed in the calculations of the expectation. A


popular procedure for approximating the formulation of Q ti given by (3.13) is to

(3.14)                     project           on functions of elements of Xi .

This is usually accomplished by regressing components of               on functions of Xi . One then

uses the fitted values from this regression to serve as Q ti .

3.1.5    Testing Procedures

         Two approaches are popular for testing hypotheses involving general forms of nonlinear

restrictions relating the elements of (. Consider the null and alternative hypotheses

(3.15)                         H:
                                o r(() = 0      versus      H:
                                                             a r(()   0,

where r (() is a q x 1 vector of known functions specifying the q restrictions linking the

components of (. One form of test relies on a Wald statistic, and a second exploits a likelihood-

ratio type statistic.

         To construct a Wald statistic, define the partial derivative matrix and its corresponding

estimate as

                                                 and                        .

Assuming that Ho contains no redundant restrictions, one can formulate a matrix R that possesses

full row rank. If Ho is true, then


(3.16)                                                                           ;



that is, under the null hypothesis, the Wald statistic is approximately distributed, for sufficiently


                                                  3-9
large N, according to a chi-squared distribution with q degrees of freedom.

         A comparison of the optimized values of the distance functions (3.4) when assuming the

null and alternative hypotheses provides another basis for testing H.
                                                                    o If Ho is true, then it can be



shown that

(3.17)                                                                            ,


where      in (3.4) is kept constant when minimizing C(() under Ho and H.
                                                                        a The first term in




(3.17) computes C(() imposing the constraints r(() = 0, whereas the second term minimizes C(()

invoking no restrictions. Thus, under the null hypothesis, the difference in optimized distance

functions used to calculate estimates is approximately distributed, for sufficiently large N,

according to a chi-squared distribution with q degrees of freedom.



3.2      Challenges

         One encounters a variety of problems in implementing the above MM framework when

estimating panel data specifications. Some are easily overcome, such as incorporating

predetermined variables as instruments in estimation. Others can become particularly

troublesome, such as avoiding computational difficulties with large systems, formulating

empirical specifications to estimate the correlation pattern of sophisticated error structures, and

using weights and unbalanced samples in estimation. The following discussion briefly reviews

these challenges, while the next sections present options for overcoming the various problems.

3.2.1    Simultaneous Equations with Predetermined Variables

         When estimating time series models within a simultaneous equation system, it is often

necessary or desirable to exploit the fact that certain variables can be considered predetermined


                                               3 - 10
for a subset of the equations. This involves using these variables as instruments in estimating

some equations, while treating these same variables as endogenous in others. Previous literature

has fully addressed methods for exploiting predetermined variables in the estimation of

longitudinal models. 16

          To convey the essential ideas underlying these methods, consider a system of structural

equations




(3.18)                                                                                 ,




where gti (@) and <ti are directly analogous to fti (@) and > ti appearing in model (3.7). Interpret gti as

a structural equation associated with time period t. Suppose that the variables included in the

column vector Pti (a subset of Mti) are predetermined for this equation. While a “predetermined

property” often refers only to covariance restrictions (e.g., E{Pti <ti } = 0), much of the discussion

below interprets predetermined as implying that all the elements of the vector Pti are distributed

independently of the error <ti , but not necessarily of the errors <ki , k < t. The exogenous

variables of model (3.18) – grouped into the vector Xi – are assumed to be distributed

independently of the errors <ti , t =1, . . ., T.

          Efficient estimation of this system of equations requires the use of the Pti’s as

instrumental variables for the appropriate equations. More importantly, for some models,

predetermined variables are the only source of instruments, which makes it necessary to devise

 16
      The Handbook chapter by Arellano and Honoré (2001) presents an extensive review of these methods. Studies
        exploiting predetermined variables as instrumental variables in the estimation of longitudinal models include
        Anderson and Hsiao (1982), Bhargava and Sargan (1983), Amemiya and MaCurdy (1986), Holtz-Eakin, Newey
        and Rosen (1988), Arellano and Bond (1991), Keane and Runkle (1992), and Arellano and Bover (1995).

                                                         3 - 11
an estimation procedure that exploits these variables.

         An obvious method for using the MM procedure described above to calculate an estimate

for (o utilizing all the available instrumental variables is to create a new structural model in the

form of (3.8) by setting




(3.19)                                                                           ,




with )i* defined analogously to (3.9). This formulation for Ri satisfies the properties required in

the above discussion for minimization of (3.4) to result in a consistent estimate for (o that is

asymptotically normally distributed according to distribution (3.5). Accordingly, the distance

function (3.10) and the asymptotic distribution (3.11) apply when estimating (3.18) with gti ,         ,

Qti*, and )i* replacing f ti ,   , Q ti , and )i in (3.10) and (3.11) respectively.


3.2.2    Optimal Instrumental Variables with Predetermined Variables in the MM Framework

         As in the case with only exogenous variables, with predetermined variables present the

efficiency of the MM estimator depends on the selection of the instrumental variables. Assuming

homoscedasticity of errors <i , a linear transformation of equation system (3.18) puts it into a

simpler form for characterizing this efficient estimator. Premultiplying equation (3.18) by the

matrix B that is constructed to be lower triangular with B E(<<N) BN = I transforms the model

into the form

(3.20)                                               .




                                                    3 - 12
This linear transformation creates a model with errors possessing the covariance structure

E(<#<#N) = I, while maintaining the particular “predetermined properties” assumed for the Pti’s,

with the <# ti’s serving in place of the <ti’s; namely, the variables Pti are distributed independently

of the errors <#ti ,..., <#Ti , but not of the errors <#1i ,..., <#(t-1)i .

          Implementing MM to estimate the coefficients ( computes an estimator to minimize

(3.10) with
                                       ;
                                           with                               ; and
                            IT = E{<# <# N} replaces                 .

With these substitutions, distribution (3.11) specifies the asymptotic distribution of this NIV

estimator.

          In place of expression (3.12), the optimal choice for Qti# accounting for predetermined

variables takes the form17

(3.21)                                                               ,            t = 1,...T.

Considering the class of all NIV estimators with Qti# being any functions of the exogenous and

predetermined variables available for errors <ti ,..., <Ti , the NIV estimator computed with Qti#

selected according to (3.21) yields the most efficient estimator in this class when errors <i are

homoscedastic across individuals. Because Qti# is not directly observed, a procedure for

constructing (3.21) is to

(3.22)                     project                on functions of elements of Xi and Pti

where       is any consistent estimate of (o . Then use the fitted values of this projection as the


optimal Qti# .

 17
      See the appendix of Amemiya and MaCurdy (1986) for the derivation of this optimal choice. The Handbook chapter
        by Arellano and Honoré (2001) surveys recent developments and generalizations of this specification of optimal
        instrumental variables, and also covers a variety of interesting refinements in estimation methods.

                                                         3 - 13
3.2.3   Specifications Providing for Estimation of ARMA Coefficients and Dynamic Quantiles

        Often the aim of a longitudinal analysis involves discovering the characteristics of the

error structure of a model, and the challenge becomes developing empirical specifications that

allow for the estimation of parameters governing either the autocorrelation pattern or the

dynamic evolution of the quantiles associated with errors appearing in structural equations.

Obviously, if the fti’s in the above framework only refer to the original structural equations

linking measured variables, then the information signaling the dynamic properties of error terms

merely shows up as a determinant of the standard errors of coefficients that the above analysis

computes in an unrestricted fashion. For the MM framework to be of use in informing

researchers about the intertemporal properties of error processes, additional specifications must

be formulated for some of the fti’s that capture the restrictions implied by the proposed error

structure. Moreover, these additional fti’s must be combined with the original structural

equations so as to identify all parameters and meet the conditions maintained by the MM

framework.

        When the disturbances Uti in (2.7) follow a pure AR process, simple and well-known

linear transformations of the original equations create the specifications needed to estimate the

AR coefficients. It is also straightforward to derive the additional specifications needed to

estimate parameters associated with a pure MA error process. The task becomes substantially

more difficult when a mixed ARMA model describes the intertemporal properties of the Uti’s. In

such instances, one must accommodate the consequences of “initial conditions” in specifications,

which can be a formidable task, as demonstrated in the next section.

        An attractive alternative to estimating moment relationships characterizing the micro

intertemporal properties of variables involves using conditional quantile regressions to describe


                                               3 - 14
these dynamics. To date, the MM framework outlined above has not been directly applied to

estimate parameters of such specifications in a panel data setting. As demonstrated in Section 5,

this framework offers a flexible empirical approach for estimating autoregressive specifications

of quantile equations.

3.2.4   Potential Computational Issues

        A variety of software routines exist for implementing the above formulation of the MM

estimation framework, albeit in some conventional statistical packages one must undertake

programming beyond the built-in procedures. In the use of any of these routines, one can

encounter considerable computational problems in applying this approach in a panel data setting.

Two factors contribute to these difficulties.

        First, estimation of longitudinal specifications often results in structures of the Ri’s that

have large dimensions, leading to potential problems in inverting the matrix          as required to


calculate estimates using (3.4) and to compute asymptotic distributions using (3.5). Consider, for

example, estimation of the simple linear prototype equation (2.5) using a longitudinal dataset. In

conducting this estimation, suppose: (i) the errors       in (2.5) follow a MA(2) process; (ii) the

vectors xti each include 5 exogenous variables that are linearly independent of the other xki’s,

k t; (iii) the coefficients B, $1 , and $2 differ over time; and (iv) a researcher has 10 periods of

data along with information on the initial conditions y0i and y-1i . To estimate coefficients of the

period-t variant (2.5), available instrumental variables include the exogenous variables xti , x(t-1)i ,

the predetermined variables y(t-2) i , ..., y-1i , and time dummies. (The inclusion of the 10 time

dummies, of course, identifies the time effects J.) Thus, joint estimation of all 10 period

equations implies a construction of Ri in (3.19) that incorporates at least 165 elements. Moreover,

for each period-t equation, all xki for k t, t-1 also constitute valid instrumental variables

                                                 3 - 15
providing for increased prediction of variation in y(t-1) i beyond that captured in the above list,

instruments which if exploited would enhance the efficiency of estimation. This implies

existence of an additional 45 (=5C9) instrumental variables per equation. Incorporating all these

over-identifying variables in estimation would expand Ri by 450 elements. If, instead, a

researcher merely employs 4 over-identifying restrictions per equation, then Ri contains more than

200 elements. Consequently, the dimension of the                                   matrix is over 200x200 in this simple


case. While inverting such a matrix is conceptually manageable using familiar statistical

software, problems can arise if the panel data source supplies less than 500 observations on

individuals, which is not an uncommon occurrence. One may have to resort to quadruple

precision or generalized inverse routines to conduct such inversions. Regardless of whether one

can invert           , reliable estimates of its individual elements are unlikely since this matrix contains


over 20,000 unique quantities. Problems do not necessarily go away if the sample size were to

double to 1000 or quadruple to 2000 observations. Of course, even with these larger samples one

would still have little hope of jointly estimating the 10 period model using all over-identifying

instrumental variables, since the dimension of                                would balloon to 615x615.18 As we will see


in the next section, estimation of sophisticated variants of an ARMA process for errors can

readily enlarge the number of equations in Ri even further.

           Second, longitudinal surveys sometimes supply very large amounts of data that lead to

exceeding memory barriers imposed in software applications, making the implementation of the


 18
      In this simple linear model, approaches exist for reducing the number of instrumental variables in the construction of
         the Ri’s while resulting in little or no loss in estimation efficiency. For example, according to (3.22), near-optimal
         instrumental variables for the coefficients B, $ 1 , and $ 2 consist of the quantities y^ (t-1) i , x ti , and x (t-1)i , where y^ (t-1) i
        represents the fitted value of y(t-1) i regressed on y(t-2) i , ..., y-1i and all x ki – with time effects removed from all
         variables. This yields an Ri with 120 elements.

                                                                     3 - 16
above MM methods problematic, if not impossible. This issue is especially prevalent in

Windows statistical software where the memory barrier currently falls between 1.5 and 2 GB.

One must conscientiously accommodate this barrier when using monthly data from a longitudinal

survey such as SIPP96 or NLSY79.

        There are additional reasons for simplifying estimation within the MM framework,

beyond providing options for avoiding the potential computational difficulties described above.

Most importantly, less-burdensome methods would offer valuable procedures for carrying out

diagnostic tests without the need to estimate the entire model, as the previous discussion

assumes. The next section reviews a variety of simplifications in estimation methods.

3.2.5   Estimation with Stratified and Unbalanced Data

        Practically all micro data are collected using a stratified sampling frame, meaning that

observations with particular characteristics are drawn in proportions differing from those of the

true population. Failure to account for this sampling frame in an empirical analysis results in the

computation of inconsistent estimates, even when calculating simple statistics such as means.

Consequently, naive application of the MM approach produces inconsistent estimates as well.

        The question is how to modify MM estimation methods to recognize the implications of

the stratified sampling present in longitudinal surveys. These surveys provide weights for use in

the calculation of statistics to compensate for nonrandom sampling, but they invariably supply

many weights. Besides offering at least one set for each time period for the purpose of

computing the appropriate cross section statistics, surveys regularly provide different weights to

compensate for over-samples of particular race/ethnic groups or low-income families. Which

weights should one use in MM procedures when estimating dynamic relationships, and how

should these weights be incorporated in forming the Ri’s appearing in equation systems (3.8) and


                                               3 - 17
(3.19)?

          Another important question concerns how to carry out estimation when one has an

unbalanced data structure. Whereas balanced samples restrict data to be available for a common

set of time periods for each individual included in the analysis, unbalanced samples retain

individuals without requiring data for every period. Typically, when faced with unbalanced data,

researchers discard observations until they have constructed a balanced sample. The resulting

loss of data not only lowers efficiency, but, more fundamentally, it often leads to the selection of

nonrepresentative segments of the original sample, and also eliminates a rich source of

information for identifying dynamic relationships for sample members seen sporadically or for

short horizons.

          One might initially surmise that the MM framework can be easily modified to account for

unbalanced samples. After all, one can readily portray the Ri’s as having a different number of

elements – consistent with a different number of time periods – for each individual. However,

as demonstrated in Section 6, the formulas reported above do not give the correct representations

for the asymptotic distributions of the MM estimators in this case. More sophisticated

adjustments are required.




                                               3 - 18
                        4. Simplified Estimation Approaches



       The following discussion, in conjunction with the next two sections, lays out specific

approaches for dealing with the challenges outlined above in a longitudinal data setting. The

current section focuses on a variety of simplifications in estimation methods.

       The discussion opens with an overview of 3SLS procedures, a well-known special case of

the MM framework that yields convenient computational formulas for large systems of

equations. It is not straightforward to incorporate predetermined variables in such a procedure,

for most 3SLS routines presume common instrumental variables across all equations. The

subsequent analysis shows how to surmount this problem with a minimal amount of extra

programming and computational burden.

       There are considerable advantages to breaking up a longitudinal data estimation problem

into parts, allowing researchers to focus on one part of the model at a time. The panel data

models introduced in Section 2 provide a rich set of specifications, making the task of choosing

among these specifications a formidable endeavor. Not only do they permit flexible

parameterizations relating measured variables, but numerous formulations are available for error

processes; indeed, far more than can be entertained in standard time series analyses. A researcher

rarely knows precisely which parameterizations are consistent with data, and typically must

invest considerable effort in performing diagnostic procedures designed to narrow model choices.

       This section presents an array of procedures that subdivide the problem of estimating the

many parameters introduced in a longitudinal time-series specification into manageable pieces.

This multi-step approach permits a researcher to focus on fitting particular components of the


                                               4-1
model (such as the AR or MA structure of the error process) without having either to estimate all

parameters jointly or to adjust output reported by statistical packages when conducting tests

among alternative structures. These procedures offer a powerful set of diagnostic tools useful not

only for evaluating the basic features of specifications – such as identifying the orders of ARMA

models consistent with the data– but also for discovering reliable values for parameters that can

serve as starting values for the larger estimation exercises.



4.1     Several Important Computational Simplifications

        Three approaches assist in dealing with the computational challenges of MM methods

outlined in Section 3.2. The first relates to the design of the estimation problem so as to permit

application of multi-step procedures requiring computation of only subsets of the parameters at a

time. The second involves specialization of MM methods to 3SLS procedures, irrespective of

whether estimation is linear or nonlinear. Finally, the third proposes adaptations of 3SLS

procedures to incorporate predetermined variables as instrumental variables in estimation. This

subsection elaborates on each of these computational simplifications.

4.1.1   A Condition Simplifying Multi-Step Estimation

        In the application of estimation procedures considered in Section 4.2, it is very

convenient to limit the number of parameters estimated at any stage of the analysis by fixing a

subset of the parameters at a consistent estimate obtained from a previous stage. With fi ((o, :o)

replacing fi((o) in model (3.7), these estimation procedures can be described as computing an

estimate    for (o by minimizing (3.10) with f i ((,   ) substituted for fi ((), where   is a


consistent estimate of :o . The application of NIV produces standard errors and test statistics for

  according to (3.11), with gradient matrix              replacing the gradient matrix          in

                                                4-2
the expression for the asymptotic variance-covariance matrix. In general, these standard errors

and test statistics are invalid because they ignore any correction for estimation error induced by

imperfect knowledge of :o. However, given a special set of conditions stated in the following

proposition, no correction for estimation error is needed when computing standard errors.

          Proposition 4.1:              Suppose fi ((o, :o) replaces fi ((o) in model (3.7) and this vector of
                                        structural equations satisfies the property

(4.1)

                                        Then, NIV applied to the system of equations fi ((,                   ), where         is
                                        a consistent estimate of , yields an estimator whose
                                        asymptotic distribution is given by (3.11) with the gradient matrix

                                                          replacing the matrix                 in the formula for the

                                        variance-covariance matrix.19


          This proposition has two important implications for the following analysis: (i) the

application of a standard NIV procedure for these cases not only produces a consistent estimate

of (o when         is treated as fixed, but also reports asymptotically valid standard errors and test



 19
      To demonstrate this proposition, define F((, ) as the function given by (3.10), with f i ((,     ) substituted for f i (().
        Minimizing F defines the estimator by the first-order condition




        Taking an exact first-order Taylor expansion of this system of equations in ( and : around the true values of these
        parameters yields
                                                                                      ,
        where




        and the values ((*, :*) lie between (      ) and (( o , : o ). Solving these equations for -( o , it can be shown using
        the standard regularity assumptions that
                         plim { ( - ( o)} = plim {G [ (( o, : o) /           +H      ( - : o)]},
        where
                      G -1 = plim {                }     and               H = plim {             }.
        Condition (4.1) implies that H = 0. Consequently,          ( -( o) has the same asymptotic distribution as
        G (( o ,: o)/  ; and (3.11) gives a large-sample approximation to the distribution of ( o+ G (( o, : o)/N.

                                                             4-3
statistics; and (ii) joint estimation of (o and :o by NIV using the equations in fi will not lead to an

improvement in asymptotic efficiency. Many of the econometric specifications considered in the

subsequent discussion satisfy this condition, so attention can be focused on estimating and testing

hypotheses involving subsets of the parameters.

4.1.2   Three-Stage Least Squares

        Conventional 3SLS analysis – a special case of NIV – maintains the assumption that the

error vector >i is homoscedastic or distributed independently of Qi , where the vector Qi contains

all the linearly independent elements of the Qti ’s. Such an assumption is often satisfied in

longitudinal analyses. Thus, the variance-covariance matrix E{> >N } = E{>i >iN* Qi} is constant

across observations.

        Accordingly, in the formula for the NIV distance function given by (3.10), one can

replace the estimated matrices         by a consistent estimate of the variance-covariance matrix


of the error vector >. Designating this estimate as          , a standard calculation for this

quantity is

(4.2)                                                           .

        One computes the 3SLS estimator, then, by minimizing the distance function


(4.3)                                                                           .


The asymptotic normal distribution for the 3SLS estimator is


(4.4)                                                                                        .



        In those software packages specifying a common set of instrumental variables for each



                                                 4-4
equation, the nonlinear 3SLS estimator                  is defined by that value of ( minimizing the function

(4.5)                                                                                                 .

The matrix                                    in these expressions corresponds to the matrix                        appearing


in the MM distance function (3.4). Even for large equation systems including many measured

variables and time periods, this construction of                    is easily computed, as is its inverse. The


dimension of the matrix                   is merely the number of structural equations (or the number of


time periods if there exists a single equation per period), whereas the dimension of


corresponds to the total number of instrumental variables used in the analysis.20 This estimator is

consistent for (o , and in large samples               approximately follows a multivariate normal

distribution given by



(4.6)                                                                                                                      .



4.1.3     Adding Equations to Account for Predetermined Variables

          Conventional linear/nonlinear 3SLS computer programs (including seemingly unrelated

regression routines) do not permit inclusion of predetermined variables as instrumental variables.

In conventional 3SLS programs, one must classify a variable either as endogenous or as an

instrumental variable for the entire system of equations. Including predetermined variables in the

list of instruments or in any prediction equation for endogenous variables in the application of


 20
      If a linear/nonlinear 3SLS procedure encounters difficulties in inverting the matrix                , it eliminates elements
        of Q i until this matrix becomes invertible. This results in no effective loss of efficiency since this smaller variant
        of Q i spans the same space as the original instrumental variable vector; consequently, it does as well in predicting
        all endogenous components of the structural equation.

                                                             4-5
these programs will result in inconsistent parameter estimates.

        Fortunately, one can devise a relatively simple and computationally feasible method for

using predetermined variables as instruments in the estimation of model (3.18) within a standard

3SLS program. This approach adds several new structural equations to the model. Suppose that

the predetermined variables can be related to the exogenous variables by the regression equations

(4.7)

where * t is a matrix of coefficients, and the errors 0ti are distributed independently across

observations and are independent of the exogenous variables Xi (and, therefore, of the elements

of the instrumental variables Qi ).

        For the moment assume that the 0ti are observed (i.e., that data are provided for these

errors) and that gti in (3.18) embodies a single structural equation in period t. To model (3.18),

add the structural equations 0ti gti = >ti for t = 1, . . ., T. This creates an expanded system of

equations that can be compactly expressed in terms of model (3.7) with


(4.8)                                                       .


The error vector >i implied by this specification has a zero mean and is homoscedastic across

individuals given the assumption of the independence of 0ti with gti and Qi .

        Thus, this particular specification of model (3.7) can be estimated by a standard 3SLS

procedure with a common set of instrumental variables Qi used for all equations. The estimator

calculated from this procedure is consistent and the output reported by this computation is

asymptotically valid. Moreover, its asymptotic efficiency at least matches that of the NIV

estimator computed with Ri specified by (3.19), which uses all the predetermined variables as




                                                 4-6
instrumental variables in the estimation of (.21

          This 3SLS estimator can be easily modified to account for the fact that the disturbances

0ti are not directly observed. In particular, in the specification of the fti’ s given by (4.8), one

merely needs to replace the 0ti ’s by their corresponding LS or GLS residuals – defined by

                        . Application of the standard 3SLS program to this modified specification of


(4.8) continues to produce asymptotically valid standard errors and test statistics, and an

estimator with the same large sample properties as one computed using the true 0ti ’s. This

conclusion follows directly from Proposition 4.1 by interpreting : as (*1 N, . . ., *T N)N .

            The following proposition summarizes the key results that allow one to compute an

estimate of the coefficients (o appearing in model (3.7) using both the available exogenous and

predetermined variables as instrumental variables.

          Proposition 4.2:             With Qi as the instrumental variables, 3SLS applied to model (3.7)
                                       with the specification

(4.9)

                                       yields an estimator for (o whose large-sample distribution is given
                                       by (4.6) and whose asymptotic efficiency attains that associated
                                       with the instrumental variable estimator obtained by minimizing
                                       (4.3) with Ri specified by (3.19).

          This proposition implies two important results: (i) standard 3SLS estimation of this

model produces standard errors and test statistics that are asymptotically valid; and (ii) the

estimate of (o computed by this procedure is as efficient as one calculated using the exogenous

variables as instruments for all equations and the predetermined variables as instruments for the

subset of equations for which they are appropriate.
 21
      This claim follows from the observation that the quantity                    – used in (3.19) to compute the
        instrumental variable estimator – is a strict linear combination of the quantity                       – used in the
        computation of 3SLS with Q i used as instrumental variables for all equations. This observation presumes that Q i
        contains a constant.

                                                            4-7
4.1.4    Incorporating Optimal Instruments with Predetermined Variables in 3SLS

         If one desires to exploit a near-optimal set of instrumental variables in the application of

3SLS estimation, analogous to the set characterized in Section 3.2.2 for the general MM case, a

straightforward modification of equations (4.9) achieves this formulation. One must first

transform equation system (3.18) into the form given by model (3.20). Then, gti# replaces gti in

(4.9).

         The formulation of the       ’s appearing in (4.9) changes as well. According to (3.22), the

near-optimal instrumental variables for the system are the         ’s representing the fitted values


obtained by regressing the quantities             on functions of the elements of Qi and Pti .

Replacing Pti by          in regression equation (4.7) produces the residuals                    . It is


the linearly independent components of these residuals that go into constructing the expanded

system of structural equations given by (4.9).

         Simpler procedures exist for attaining most of the gains achievable through explicit use of

optimal instrumental variables in 3SLS. If one specifies a Qi and Pti’s in the original formulation

of 3SLS that virtually span the space of         , then few efficiency improvements are possible with


the actual use of     .




4.2      Estimating Subsets of Parameters

         Proposition 4.1 serves as the cornerstone for many estimation methods that rely on multi-

stage procedures wherein a later stage conditions on parameter values estimated in earlier stages

without recognizing any estimation error associated with the fixed parameters. Generalized least


                                                   4-8
squares represents the classic example of such a procedure. A first stage estimates parameters

describing the error structure, and a second stage uses this estimated structure to compute a

weighting matrix in the application of least squares. The second stage ignores that the weighting

matrix depends on estimated parameters. The form of this estimation method satisfies the

conditions listed in Proposition 4.1.

        The following discussion exploits this proposition to provide a variety of procedures

allowing researchers to subdivide the problem of estimating parameters of sophisticated

longitudinal specifications into a multi-stage approach. In each step, the application of familiar

estimation routines yield valid test statistics that are useful for discovering which parts of a

model fit the data without having to specify all parts together. The analysis assumes that a panel

data source offers a fixed number of time periods T and asymptotic results depend on a large

number of individuals N. Later sections develop results when T differs across individuals.

4.2.1   Distinguishing the Different Parameter Subsets

        The parameters of the longitudinal specifications introduced in Section 2 may be grouped

into two sets: the first – hereafter called the structural coefficients – consists of those coefficients

included in the matrices A, Q, and B which relate measured variables and determine distributed

lag relationships; and the second set – hereafter called the covariance parameters and denoted by

the vector " – consists of those parameters involved in the specification of the covariance matrix

1 / E{Ui UiN}. If a researcher considers a specification other than a DSEM of the sort described

in Section 2.3, then “structural parameters” refer to those coefficients appearing in the

specification of f ti characterizing the dynamic relationships linking Yti , Zti , and Xti . The

covariance parameters " include coefficients of the lag polynomials a(L) and m(L), variances of

white noise and any permanent components if they are present, and the elements of the


                                                 4-9
covariance matrix summarizing information on initial conditions.22

4.2.2     Estimation of Structural Coefficients

          If the sole aim of a longitudinal analysis is to estimate the coefficients of distributed lag

structures relating measured variables, it is well known that one can carry out this estimation

without assuming anything about the stochastic process generating the disturbances Uti. Given a

large sample of individuals, the variance-covariance matrix 1 can be left unconstrained and

estimated by standard methods using residuals computed for Uti.

          When one disregards predetermined variables as instruments, standard procedures can be

directly applied to estimate the coefficients of model (2.10) and to test hypotheses regarding

these coefficients. Joint generalized least squares can be employed to estimate this equation

system and the parameter vector $ when no predetermined or endogenous variables appear in this

system (i.e., when B = 0 and R = 0). Otherwise, 3SLS can be applied to estimate B, R and $ in

(2.10), with Xi used as instrumental variables and with Zi treated as endogenous. To account for

the restrictions implied by distributed lag structures, one must impose equality constraints across

equations when applying these estimation methods.

          Expressed in terms of the simultaneous equation framework outlined in Section 3, define

the vector fi as the system of equations in model (2.10), which is given by

(4.10)                        fi(1)(B, R, $) = yi - Yi B - ZiR - Xi$ = Ui .


 22
      The following analysis does not present any formal identification conditions. For the standard multivariate ARMA
        model, Kashyap and Nasburg (1974) develop necessary and sufficient conditions for identification and Hannan
        (1969) presents sufficient conditions. These conditions are not easily applied in practice and panel data introduce
        additional complications. The length of the time series, for example, becomes a crucial factor. Also, the treatment
        of initial conditions reduces the effective length of the panel and at the same time introduces new parameters.
        Considering an error specification that combines a permanent component with a time series process does not
        complicate the identification problem. First differencing equations eliminates permanent components, and it does
        not introduce any new parameters. Thus, introducing a permanent component only has the effect of reducing the
        length of the time series by one period, and identification will be lost only in those cases in which the orders of the
        autoregressive and the moving average components are sufficiently high to make the length of the time series a
        crucial factor.

                                                            4 - 10
Applying 3SLS (or joint generalized least squares) to model (2.10) amounts to specifying fi = fi(1)

in (3.7) and computing an estimate of ( = (BN, RN, $N) by minimizing (3.10) or (4.5), including in

the instrumental variables Qi all the unique elements of X i and a constant.

         When one wants to use predetermined variables as instruments in the estimation of the

structural coefficients, then fi(1) is modified according to Proposition 4.2, with gi =yi -Yi B - ZiR -

Xi$ and ( = (BN, RN, $N).23 Instrumental variable estimation is then carried out as outlined in this

proposition, with Qi consisting of all the unique elements of Xi along with a constant. In the

subsequent discussion all references to (4.10) as the specification of fi(1) are meant to imply this

modified formulation of fi(1) in which predetermined variables are also exploited as instruments

in the estimation of model (2.10).

         These estimation methods offer a simple framework for performing preliminary data

analysis to determine the order of the polynomials associated with distributed lags (i.e., A(L),

Q(L) and B(L) in (2.8)) and to test whether the coefficients of these polynomials are constant

across periods. This form of data analysis involves standard tests of linear hypotheses.

         While specification (2.9) presumes that a researcher wishes to analyze only a single

structural equation per period, it is straightforward to modify this specification to permit analysis

of a multicolumn vector, and of the coefficients Aj, Q j and Bj as matrices of parameters.



4.3      Estimation of Covariance Parameters

         As briefly noted in Section 2.4, estimating parameters determining the autocorrelation

structure of the disturbances Uti is far more difficult than estimating structural coefficients

linking measured variables. Part of the reason for difficulties arises from the fact that the Uti’s
 23
      The past values of Y t will not be predetermined, except for special cases of the stochastic process generating U ti.
       Thus, in applications where a researcher wants to estimate structural coefficients in complete ignorance of the
       variance-covariance matrix 1, lagged values of Y t cannot be considered as predetermined variables.

                                                           4 - 11
are unobserved and must themselves be estimated. Further complications come about with the

presence of moving-average error structures that (i) introduce problems due to initial conditions

and (ii) require sophisticated transformations to isolate ARMA coefficients.

         Two basic approaches provide for the estimation of coefficients determining the

specification of the variance-covariance matrix 1 for the error vector Ui appearing in (4.10). One

expresses the elements of 1 in terms of the underlying ARMA coefficients and estimates these

coefficients using fitted values of Ui and nonlinear regression methods, with adjustments

introduced to compute standard errors and test statistics that account for use of estimated values

in place of the true values of Ui . The second set of approaches further subdivides the estimation

problem by allowing researchers to estimate autoregressive and moving-average coefficients

separately. These latter procedures are especially applicable when the particular orders of the AR

and MA lags in the ARMA model are unknown and one needs procedures for testing and

identifying the basic form of the lag structure. Whereas this subsection summarizes features of

the first approach, Subsections 4.4-4.7 outline estimation procedures relevant for the second

approach.

4.3.1    Framework for Estimating Variance and Covariance Parameters

         Suppose for the moment that one directly observes Ui. Consider the problem of

estimating a single element of the covariance matrix 1, say the one corresponding to the

covariance E{Uti U(t-k)i}, denoted by the parameter 2kt. A simple way to proceed for obtaining an

estimate of 2kt is to consider the regression equation

(4.11)                          Uti U(t-k) i = 2kt + Vkti

for i = 1, . . ., N, where Uti U(t-k) i is the dependent variable and Vkti is an error term defined to

have a zero mean. Since the dependent variables and, thus, the Vkti are independently distributed


                                                  4 - 12
across individuals, it is evident that least squares estimation of equation (4.11) using cross-

sectional data on individuals will yield a consistent estimate for 2kt and valid test statistics.

         Combining these regression equations for estimating the different elements of the

covariance matrix 1 into a single seemingly unrelated regression model provides a convenient

framework for estimating the set of covariance parameters. In particular, stacking equations

(4.11) for various values of t and k (i.e., t = 1, . . ., T, and k = 0,. . . , t-1) for a given individual i

yields the system of equations




(4.12)




where St {@} denotes an operator that stacks the transposes of the rows of a matrix after deleting

all elements that lie below the diagonal, 2 / St { } is a vector of intercepts, and Vi is an error

vector composed of the disturbances Vkti of equation (4.11) for the implied values of t and k.

Writing the intercepts of model (4.12) as functions of the form 2 = St {1 (")} / 2(") and given

data for Ui , one can – using data on individuals – compute an estimate for " and test hypotheses


                                                   4 - 13
concerning its structure using a conventional nonlinear joint generalized least squares procedure .

        One encounters three formidable challenges in utilizing equation system (4.12) to

estimate parameters of the ARMA process (i.e., the coefficients a, m and E in (2.3) and (2.4))

determining the elements of 2. First, one requires a complete specification for 1 relating how

each element of 2 depends on coefficients a, m and E. As illustrated below, such an exercise is

not as easy as one may initially surmise. Second, an obvious challenge involves unavailability of

data on Ui. Using residuals     in place of the actual Ui typically implies that standard errors and

test statistics must be adjusted to account for estimation error present in dependent variables.

Finally, for even short panels, the number of equations in system (4.12) is quite large, making

estimation burdensome as outlined in Section 3.2. The subsequent discussion deals with each of

these problems.

4.3.2   Specification of Variance-Covariance Matrix Accounting for Initial Conditions

         Regarding the first challenge, any development of a specification for 1 requires a

complete understanding of the initial conditions problem associated with ARMA processes. The

consequence of assuming that the disturbances appearing in (2.8) follow the error specification

given by (2.3) is the imposition of restrictions on the variance-covariance matrix 1 / E{Ui UiN}

associated with the stacked representation of the DSEM given by (2.10). The following analysis

describes the exact restrictions on autocovariances implied by this error specification, and

formulates an explicit parameterization for 1. Appendix A expands upon this discussion and

presents a more elaborate derivation of this parameterization. While solutions to this problem can

be found in the panel data literature for pure autoregressive or pure moving-average schemes,

none are available for mixed ARMA processes.

        According to (2.3) with AR and MA coefficients constant over time, Ui is determined by


                                               4 - 14
the system of equations




(4.13)                                                                        .




This system does not represent a one-to-one transformation from the ,ti’s, t = 1, . . . , T, to Ui.

One cannot derive the covariance matrix for Ui from (4.13) given only the distributional

assumptions for ,Ti,..., ,1i. Also appearing in (4.13) are the variables U0i, . . . , U(1-p)i, and ,0i, . . .,

,(1-q)i which are known in the time series literature as initial conditions or starting values for the

error process. To derive a parameterization for 1, one requires a specification of initial

conditions.

          Conventional time series techniques that consider starting values as known constants

(usually chosen to be zero) result in inconsistent estimates for the parameters of the error process

if the technique is applied in a panel data analysis where T is fixed. Similarly, time series

procedures that “backforecast”, or treat initial conditions as parameters, introduce an incidental

parameters problem in a panel data analysis which, under most circumstances, also leads to

inconsistent estimates for all parameters of the error process.24 A third way to deal with these

initial conditions for the disturbances is to treat them as random variables. This is the procedure

followed below. Treating initial conditions as random variables avoids problems with

inconsistency by introducing only a finite number of new parameters: those determining the

distribution of the starting values and those relating the distribution of the starting values to the

 24
      See Hsiao (1986) for further discussion of this problem.

                                                          4 - 15
distribution of disturbances realized in periods 1 through T.

         There are several complications associated with choosing a distribution for the initial

conditions specified above. If we assume that the stochastic process generating disturbances

during the sample period is also operative prior to this period, then one would expect the Uki’s, k

= (1-p), . . . , 0, to be not only correlated with one another and with the ,ti’s, t = (1-q), . . . , 0, but

also with all the Uti’s realized after period 0. Furthermore, the correlations relating these

variables will, in general, depend directly on parameters of the ARMA process given by (2.3),

and one must account for these restrictions to achieve efficient estimation.

         A natural approach for dealing with this specification of the correlation properties of

initial conditions is to assume that the time series process generating disturbances over the

sample period started some time prior to this period at an unknown date and under an unknown

set of circumstances. In particular, assume the ARMA process given by (2.3) started in the finite

past between periods R2 and R1 with R2 < R1 and with R1 occurring at least p-q+1 periods prior to

the first sample observation. One can write each of the Uti's realized after period R1 as a moving-

average scheme of the form

(4.14)                                                                  ,

where the .j coefficients are defined as .0 / 1 and .j / mj -               for j > 0; the , ki’s for k$ R1



are white noise; and the Nki’s are error terms distributed independently of ,Ji for J $ R1. Formally,

one can derive a relation like (4.14) by starting with the ARMA representation


                                     and successively substituting out for past U(t-j) i’s using their




ARMA representations until t-j = R1 - 1. The Nki’s in (4.14) may be interpreted as the true starting

                                                   4 - 16
values of the ARMA process. Specifying the distribution of these variables determines exactly

how and when the ARMA process generating the Uti’s began.

         Given this moving-average representation of the ARMA process generating transitory

components, one can derive a complete specification for the covariance matrix of Ui . A change

of variables simplifies the derivation. Define the random variable eti by eti =                                 and

consider a linear transformation from the vector                    = (UTi, . . . , U1i) to a new vector (      , U(1)iN),


where       = (eTi, . . . , e(p+1)i) and U(1)iN = (Upi, . . . , U1i). With F denoting this linear


transformation,


(4.15)                                                 ,




where F is a T X T matrix that can be partitioned as


                                                                ,


with A representing a diagonal band matrix with the elements (ao, . . ., ap) running down the

diagonal.25 The following analysis first develops the covariance matrix for the vector (eiN, U(1)iN)N,

and then uses this result to obtain 1. The covariance matrix of (eiN, U(1)iN)N is conveniently
 25
      A matrix Q is a diagonal band with the elements (a,b,c,d,) running down the diagonal if it has the form




                                                                                .




                                                           4 - 17
partitioned into three blocks: the (1,1) block, E {ei eiN}; the (2,2) block, E {U(1)i U(1)iN}; and the

(2,1) block E {U(1)i eiN}. Below we derive the implied parameterization for each of these blocks

in turn.

           Since eti = a(L) Uti = m(L) ,ti , we see that the eti’s, for t = (p+l),..., T, are generated by a

pure moving-average process. Their covariance matrix, then, is determined uniquely by the

relationships


(4.16) E{eti e(t-h)i } =
                            9
for t = p+1, . . ., T and p+1 # t-h # t.

           The moving-average expression for the Uti’s, t = 1, . . , p, given by (4.14) provides the

only information available for determining a parameterization for E{U(1)i U(1)iN}. Inspection of

this expression reveals that the elements of U(1)i depend directly on the random variables Nki and

on the number of periods since these variables were realized. Unless one is willing to be very

specific about how and when the ARMA process generating transitory components started for

each individual in the sample, nothing can be said about the number or the correlation properties

of the Nki’s, or about how far in the past they were realized. To avoid specifying this

information, one can simply assume that starting times and the Nki’s are randomly distributed

over the population, in which case no restrictions are implied for the covariance structure

associated with U(1)i. Thus, assume

(4.17)                                                 ,

where m is an unconstrained, positive definite, symmetric matrix. As a consequence of this

assumption, the time series process generating disturbances need not be stationary.


                                                     4 - 18
          Finally, one requires a specification for E{U(1)i eiN}. Using the moving-average

representation for eti, t = (p+l),..., T, and those for Uki, k =1, . . ., p, given by (4.14), the implied

covariance between eti and U(t-h)i is



(4.18) E{eti U(t-h)i } =
                               9
Implicit in this formula is the nonrestrictive assumption that the ARMA process for disturbances

starts prior to period p-q+l,26 and, as a consequence, covariance terms like E{eki Nsi}do not

appear. An attractive feature of this formulation for the covariance is that no new parameters

appear in the expression. If one is willing to introduce new parameters into the analysis, it is

possible to avoid constructing the . j ’s and imposing the restrictions implied by (4.18). In

particular, one can simply treat the nonzero values of E{eti U(t-h)i} as arbitrary parameters and

estimate them directly along with the other parameters of the error process. While this

alternative parameterization avoids the need for imposing some nonlinear restrictions, it has the

disadvantage of reducing the efficiency of estimation; and in some instances it can destroy the

identification of some parameters of the error process if the time series supplied by the panel

dataset is short.

          The relations given by (4.16), (4.17), and (4.18) imply an explicit parameterization for the

covariance matrix associated with the vector (eiN,U(1)iN)N. Denote this matrix by S. Since this

vector and Ui are linearly related according to equation (4.15), it follows that

(4.19)                                 E{Ui UiN} = F-1 S F-1N .

This parameterization imposes all of the covariance restrictions implied by the ARMA process,

 26
      This assumption concerning the starting time of the ARMA process generating the U ti’s follows immediately from
       the assumption that U (p+1)i can be represented by the specification given by (2.3). This restriction ensures that no
       N ki’s appear in the moving average component of (2.3) for t = p+1.

                                                           4 - 19
unless one is willing to introduce precise information about how and when this process began.

Appendix A presents explicit expressions for 2 that impose all nonlinear constraints. These

formulas have relatively simple representations, thus making them particularly useful when

applying estimation procedures.

          The above treatment of initial conditions induces a source of nonstationarity in the Uti’s ,

even when all the coefficients of the ARMA model and the variances of white noise are constant

over time. Permitting the AR coefficients to be different over time changes the form of the

matrix A in a straightforward way, and allowing the MA coefficients to differ alters the form of

the matrix S.27 In conventional time-series analyses, these generalizations are either not possible

or introduce substantial complications in estimation.

4.3.3     Joint Estimation of Structural Coefficients and Covariance Parameters

          With a specification of 2 in hand, we now turn to the second challenge, which involves

estimation of the covariance parameters without direct data on the Ui ’s in (4.12). With

observations on Ui unavailable, combining equation systems (4.10) and (4.12) to estimate

structural coefficients and covariance parameters jointly offers a conceptually simple framework

for estimating the elements of 2 or ".

          To describe this estimation approach in terms of the nonlinear system of simultaneous

equations given by (3.7), split the vector of structural equations fi in (3.7) into two subvectors fi =

(fi(1)N fi(2)N)N. The system of equations fi(1) given by (4.10) is used in 3SLS estimation of the

structural coefficients. In the specification of model (4.12), substitute yi - Yi B - ZiR - Xi $ for Ui

to obtain the vector of equations

(4.20) fi(2) (B, R, $, 2 (")) = St {(yi -Yi B -ZiR -Xi $) (yi -Yi B -Zi R -Xi $)N} - 2(") = Vi .

 27
      Baltagi (2002) surveys recent developments of panel data methods for estimating parameters in the presence of
        several varieties of nonstationarity popular in the times series literature.

                                                         4 - 20
Combining (4.10) and (4.20) to form f i (B, R, $, 2 (")) = ( fi(1)N, fi(2)N )N satisfies the assumptions

of model (3.7).28 Since Ui is assumed to be independent of Xi, these exogenous variables

constitute valid instruments for all the equations incorporated in fi. Thus, 3SLS applied to model

(3.7) with this specification of fi produces consistent estimates of B, R, $, and 2 (or ") and

asymptotically valid standard errors and test statistics.29

          Simultaneously estimating structural coefficients and covariance parameters yields

estimates that are, in general, more efficient than those obtained from the other methods outlined

in this paper. There are two sources for this increase in efficiency. First, in those instances in

which the third moments of Ui are nonzero (which implies that E {Ui ViN} 0), the estimates

based on joint estimation of fi(1) and fi(2) will be more efficient for the same reason that

generalized least squares estimates are more efficient than ordinary least squares estimates. The

second source of efficiency gain arises if there are any constraints involving both structural

coefficients and covariance parameters, and if it is possible to impose these restrictions when

estimating (4.10) and (4.20) jointly.

4.3.4     Further Subdivision of Estimation of Covariance Parameters

          Two unattractive features of this joint estimation approach are the large number of

equations involved in the implementation of GMM or 3SLS and the nonlinear parametric

restrictions that must be imposed across equations when computing estimates. Fortunately,

simpler estimation methods are available if a researcher is willing to estimate parameters in

subsets.

          Appendix B offers one approach for estimating all parameters appearing in specification
 28
      This statement assumes that at least fourth moments of U i exist. Homoscedasticity follows from the assumption that
        the U i’s are distributed independently of X i and across individuals. Clearly E{fi} = 0 at the true parameter values.
 29
      This procedure corresponds to an estimation approach suggested by Chamberlain (1982). In Chamberlain’s
        approach, nonlinear generalized least squares is applied to a larger model that includes the equations fi = St {G iG iN
        - E(G iG iN)}, where the vector G i contains all the unique elements of Y i, Zi and X i .

                                                            4 - 21
(2.3) of the ARMA process underlying the Uti’s, without the need to introduce any parameters

associated with initial conditions. This approach replaces equation system (4.20) with an

alternative set of equations exploiting relationships implied by system (4.13). In addition to

reducing the number of parameters, this replacement simplifies imposition of the nonlinear

restrictions inherent in relating autocorrelations. A shortcoming of this approach concerns its

provision of insufficient information to develop a full specification of 1 without relying on

ancillary assumptions; as demonstrated above, such a specification requires knowledge of the

process generating ARMA-model initial conditions. If a researcher desires, however, to estimate

only parameters of the ARMA process, then Appendix B offers a more manageable approach for

conducting this estimation than use of equations (4.12).

        One can achieve further simplifications in estimating parameters of error processes by

developing procedures that use fitted values of Ui as dependent variables and that enable one to

estimate finer subsets of parameters, such as just the AR or just the MA coefficients, using linear

methods. The following subsections describe such procedures. These approaches provide

especially useful diagnostic tools for inferring the basic characteristics of the underlying

autocorrelation structure.



4.4    Direct Estimation of Autocovariances Using Residuals

       Under conventional assumptions, econometric theory implies that one can replace the

Ui’s in an MM framework by their estimated residual counterparts and still obtain consistent

estimates of other parameters. The residuals      must be consistent estimates of the Ui for this

property to hold. The problem is how to adjust the standard errors and test statistics to make this

procedure of use in learning about that aspect of the error structure analyzed by the estimation


                                               4 - 22
approach.

         A natural place to consider using residuals to form dependent variables is in system

(4.13). This would eliminate the need to combine models (4.10) and (4.20) as suggested above,

which involves jointly estimating numerous equations. From a methodological perspective,

replacing the Ui by their fitted values amounts to fixing a subset of parameters at consistently

estimated values and proceeding with estimation of another set appearing in structural equations.

Proposition 4.1 identifies the conditions needed for this procedure to report asymptotically valid

results for the non-fixed coefficients.

         Inspection of specification (4.20) of fi(2) reveals that it satisfies the property


(4.21)


where $k designates any element of the parameter vector $, and X(k)i constitutes the k-th column

vector of the matrix Xi . Define the new system of equations

(4.22)

where     is a consistent estimator of $, and now specify fi in model (3.7) as

                         fi (B, R, $, 2 (")) = (fi(1)N, fi(3)N)N.

Given (4.21), it is evident that this specification of fi satisfies the conditions of Proposition 4.1,

with the parameter vector ( in this proposition interpreted as including B and R in both fi(1) and

fi(3) , $ only in fi(1), and 2(") in fi(3), and with the parameter vector : interpreted as including only

$ in fi(2) . Thus, as indicated by Proposition 4.1, NIV or 3SLS applied to the system of structural

equations


(4.23)                                                                                        ,



                                                      4 - 23
with Xi used as instrumental variables, yields consistent estimates of B, R, $, and 2(") and

asymptotically valid standard errors and test statistics. These estimates have the same asymptotic

efficiency as the ones produced by the above joint estimation procedure, but they are easier to

compute since $ is not estimated in the second set of equations and parametric restrictions

relating $ in the two sets of equations are ignored.

         When B = 0 and R = 0 – that is, when no lags in Yti and no predetermined or endogenous

variables appear in equation (2.9) – then residuals alone can be used to estimate covariance

parameters. With                 fi(3) in (4.22) becomes

                                               .

A corresponding formulation for this system of equations takes the form:

(4.24)

which constitutes a seemingly unrelated regression model with              as dependent variables


and with only intercepts as explanatory variables. Condition (4.21) and Proposition 4.1 imply

that standard generalized least squares applied to model (4.24) produces consistent estimates of

the elements of 2 and asymptotically valid standard errors and test statistics. To estimate the

covariance parameters ", nonlinear generalized least squares can be applied to model (4.24), with

the functions 2(") substituted for 2.

         Estimating subsets of the equations in (4.24) offers a simple framework for constructing

estimates of the covariogram and the correlogram, which are valuable data analysis tools that can

aid in choosing among competing specifications for the stochastic process generating the

disturbances. Since estimation of the model discussed above requires only residuals, the model

permits a researcher to ignore the specification of the relationships among measured variables

once such a specification has been chosen, and to concentrate only on fitting the error process.

                                               4 - 24
Many simple tests are available for distinguishing among competing specifications. For

example, with the imposition of linear constraints in subsets of equations in model (4.24), one

can test whether autocovariances of a given order are constant over periods, and one can obtain a

unique estimate of each autocovariance if the constancy hypothesis is accepted. Using these

results, one can also perform tests for nonstationarity and other forms of heteroscedasticity.

These preliminary data analyses are particularly useful for identifying the orders of the

autoregressive and moving average lag polynomials and for determining whether it is reasonable

to assume that the coefficients of these polynomials are constant over time.



4.5      Direct Estimation of Autoregressive Parameters

         This discussion describes a simple procedure for estimating coefficients of the

autoregressive lag polynomial a(L) without requiring the joint estimation of all the covariance

parameters, as required in the previous approaches. This procedure offers a useful framework for

testing hypotheses that involve just the coefficients of a(L). To simplify the exposition, suppose

for the moment that the disturbances Uti are directly observed and follow a mixed ARMA (1,1)

scheme; in particular, Uti = -at U(t-1)i + ,ti + m l ,(t-1)i .

         This stochastic process implies that Uti satisfies the linear structural equation

(4.25)                     Uti = -at U(t-1) i + eti,    t = 3, . . . ,T,

where the error eti = ,ti + m1 ,(t-1) i follows a first-order moving-average process. The disturbance

U1i is predetermined for equation t = 3 in (4.25); the disturbances U1i and U2i are predetermined

for equation t = 4, and so on, with U1i , . . . ,U(T-2) i predetermined for equation t = T. To use all

the available predetermined variables as instruments in the estimation of the at’s, application of

Proposition 4.2 considers expanding the system beyond (4.25) to include the structural equations:


                                                       4 - 25
(4.26)            U(t-k)i Uti = -at U(t-k)i U(t-1)i + eti* ,                 t = 3, . . . , T,
                                                                             k = 2, . . . , (t - 1),

where eti* = U(t-k)i eti with E{eti*} = 0. Formulating fi in (3.7) according to (4.9) implies

combining structural equations (4.25) and (4.26) to form fti . Applying 3SLS to this model with a

constant as the only instrument in this procedure (i.e., with Qi = 1 in (4.5)) produces consistent

estimates of aN = (-a 3 , . . . , -a T ) exploiting U1i , . . ., U(t-2) i as instrumental variables in the

estimation of the t-th equation.

         Without data on Ui , combined estimation of equation systems (4.10) and (4.26) offers a

framework for jointly estimating the structural coefficients and a. To translate this estimation

approach into the notation of Section 3, split the vector of structural equations fi in (3.7) into two

subvectors so that fi = (fi(1)N, fi(4)N)N. As specified by (4.10), let fi(1) denote the set of equations

used in 3SLS estimation of the structural coefficients. Further, let                                       , where k =

2,..., (t-l) and t = 3,..., T. Then, with y ti - Y (t-1)iNB - ZtiNR - XtiN$ substituted for Uti in equations

(4.26), form the vector fi(4) whose j-th element is given by:

(4.27)    fji(4) (B, R, $, a) = [y (t-k)i - Y (t-k-1)iNB - Z(t-k)iN R -X(t-k)iN $ ] ×

                                 [(y ti - Y (t-1)iNB - ZtiNR - XtiN$) + at (y (t-1)i - Y (t-2)iNB - Z(t-1)iNR -X(t-1)i N$ )] .

Stacking (4.10) and (4.27) to obtain fi (B, R, $, a) = (fi(1)N, fi(4)N)N creates a model in the form of

(3.7). All the variables in Xi can serve as instruments for the equations incorporated in fi since Ui

is assumed to be independent of these exogenous variables. Consequently, 3SLS applied to

model (3.7) with this specification of fi yields consistent estimates of B, R, $ and a, along with

the appropriate asymptotic standard errors and test statistics.

         As in the above case, joint estimation of these parameters can be simplified by evaluating

$ in fi(4) at a consistent estimate        , which avoids the need of imposing some (or all) of the



                                                           4 - 26
nonlinear parametric restrictions in estimation. Define this new system of structural equations as

(4.28)                           fi(5) (B, R, a) = fi(4) (B, R,   , a).

Differentiating the elements of fi(4) in (4.27) with respect to $ and computing expectations at the

true parameter values yields the result

(4.29)

This finding implies that the stacked system of equations f i (B, R, $, a) = (fi(1)N, fi(5)N)N satisfies the

conditions of Proposition 4.1, with the parameter vector ( in this proposition incorporating the

coefficients B and R in both fi(1) and fi(5), $ only in fi(1) , and a in fi(5), and with the parameter

vector : interpreted as including only $ in fi(4). Thus, according to Proposition 4.1, NIV or 3SLS

applied to this specification of fi , with all the elements of Xi used as instrumental variables,

yields consistent estimates of B, R, $, and a and asymptotically valid standard errors and test

statistics.

         For those models in which B = 0 and R= 0, residuals alone can be used to estimate the

autoregressive parameters a. With these parametric restrictions, one can estimate the coefficients

a using only the equations in fi(5) . Defining Uti = y ti - XtiN , these equations are

(4.30)

Condition (4.29) and Proposition 4.1 imply that 3SLS applied to this system of equations with a

constant as the only instrument produces consistent estimates of the a coefficients and

asymptotically appropriate standard errors and test statistics.

       Model (4.30) offers a valuable data analysis tool that can aid in determining the form of the

ARMA process generating disturbances. Testing the linear constraint that at = ao for all t

provides a simple test for the constancy of autoregressive coefficients over time. Of course,

many such tests can be carried out using only subsets of the equations included in model (4.30).

                                                   4 - 27
It is straightforward to modify this model to admit a second or higher-order autoregressive

process, which provides the basis for testing for the presence of higher-order schemes. Changing

the order of the moving average component of the error process alters which of the past U(t-k)i’s

are predetermined, and hence which can serve as instrumental variables for each equation. Thus,

increasing the order of the moving-average process implies a reduction in the number of

equations that can be included in model (4.30). Furthermore, increasing this order precludes the

possibility of using this data analysis framework to estimate some period-specific values of a for

the early periods of the sample.



4.6   Estimation of the Partial Correlation Coefficients

      Another useful data analysis tool found in the time series literature is the partial correlation

function. The k-th order partial correlation coefficient associated with the stochastic process

generating Uti corresponds to the coefficient akk in the regression equation

(4.31)                            Uti = -akl U(t-1)i - . . . -akk U(t-k)i + 0ti,

where the error 0ti is uncorrelated with the regressors U(t-1)i, . . . ,U(t-k)i.

      The procedures outlined in Section 4.5 provide a method for estimating the coefficients akk

for different orders and time periods. In the application of these procedures, the disturbances

U(t-1)i, ... , U(t-k)i are considered to be predetermined for the equation corresponding to period t, but

are not necessarily predetermined for any other equation. Thus, to estimate the first-order partial

correlation coefficients for periods t = 2,...,T using the above procedures, one would set k = 1 in

equation (4.26) with a11t substituted for at.

      When the Uti’s represent disturbances from a regression equation (i.e., when B = 0 and R=0

in equation (2.9)), a more elementary approach exists for estimating the coefficient akjt . With Ûti


                                                       4 - 28
= yti - XtiN     denoting the least squares residuals, consider the seemingly unrelated regression

model

(4.32)

Generalized least squares applied to this model can be shown to produce consistent estimates of

the coefficients akjt and appropriate large sample standard errors and test statistics.30 Estimating

these coefficients imposing equality constraints across the equations of this model (i.e., akjt = akj

for t = k + 1,...,T) generates a unique estimate of the k-th order partial correlation coefficient and

an asymptotic standard error for this coefficient. Graphing these constrained estimates of the

akk’s for each value of k creates the sample partial correlation function, which is useful in the

identification of time series processes.31



4.7      Direct Estimation of Moving-Average Parameters

         This last procedure provides a method for estimating parameters associated with the

moving average component of the ARMA process. These parameters include the coefficients of

the lag polynomial m(L) and the variance of the white noise errors, which are grouped into the

parameter vector 8. There are no new concepts encountered in this estimation method.

           Continuing to assume, for expositional simplicity, that an ARMA(1,1) process generates

Uti, the errors eti = ,ti + m1 ,(t-1)i appearing in equation (4.25) capture the information about the

moving average portion of this process. Define the vector of errors associated with equations


 30
      To verify this claim, write the seemingly unrelated regression model obtained by combining equations (4.32) as T i =
        H i D + 0 i, where T i = (Û T i , . . . Û (k+1) i )N. With S = E{0 i, 0 iN), generalized least squares applied to this model
        yields the estimate                                      . In terms of the framework of Section 3, this GLS estimate is

        obtained when fi = H i   (T i -H iD) and Q i = 1 in (4.5). For this specification of fi , the conditions of Proposition
        4.1 hold with ( = D and with interpreted to include and the elements of .
 31
      Section 7 presents an application illustrating this claim.

                                                              4 - 29
(4.25) as ei = (eTi,..., e3i)N. The moving-average parameters 8 determine the parameterization of

the variance-covariance matrix R = E{ei eiN}. Given data on ei , one could estimate the elements

of r / St {R} by applying generalized least squares to the model St {ei eiN} = r + vi – analogous

to the regression model for St{Ui Ui N} given by (4.12). With the functions r (8) substituted for r

in this model, one could estimate the parameters 8 by nonlinear generalized least squares.

         As in the previous analysis, jointly estimating parameters provides a method for

estimating r or 8 without data on ei. Observe that

              eti = (y ti - Y (t-1)iNB - ZtiNR - XtiN$) + a t (y (t-1)i - Y (t-2) iNB - Z(t-1) iNR - X(t-1) i N $).

Corresponding to the system of equations included in St {Ui UiN}, form the vector of equations

fi(6) whose j-th element is:


(4.33) f ji(6) (B, R, $, a, r(8)) =
               [(y ti -Y (t-1)iNB - ZtiNR- XtiN$) + at (y (t-1)i -Y (t-2)iNB - Z(t-1)iNR- X(t-1)iN$)] ×
               [(y (t-k)i -Y (t-k-1) iNB -Z(t-k) iNR -X(t-k)iN$) + a t - k (y (t-k-1)i -Y (t-k-2) iNB - Z(t-k-1)iNR - X(t-k-1) iN$)],


with j =                                            for t = T, . . ., 3, and k = (t-3), . . ., 0. Combining these

equations along with those in fi(1) and fi(4) creates a model in the form of (3.7) with

                             fi (B, R, $, a, r(8)) = (fi(1)N, fi(4)N, fi(6)N)N.

Applying 3SLS to this model, with the exogenous variables Xi used as instruments, produces

consistent estimates for B, R, $, a and r (or 8) and asymptotically valid standard errors and test

statistics.

         To reduce computational burden, this estimation procedure can be carried out with $ in

fi(4) and fi(6) replaced by a consistent estimate . With

(4.34)                       fi (7) (B, R, a, r (8)) = fi (6) (B, R,         , a, r (8)),

this approach involves 3SLS applied to model (3.7) with fi (B, R, $, a, r (8)) = (fi(1)N, fi(5)N, fi(7)N)N

                                                              4 - 30
and with the elements of Xi used as instrumental variables. Condition (4.29), along with the

finding

(4.35)                                  ,

implies that this specification of fi satisfies the requirements of Proposition 4.1. Consequently,

application of 3SLS to this model not only yields consistent parameter estimates, but also the

appropriate large sample standard errors and test statistics.

          Once again as in the previous approaches, if B = 0 and R= 0, then the system of equations

in fi(1) can be eliminated from the model and only data on residuals are needed to carry out

estimation. With Ûti = yti -XtiN , the vector fi (a, r(8)) = (fi(5)N, fi(7)N)N includes equations of the

form




(4.36)
                                                                                            .


Applying 3SLS to this system of equations using a constant as the only instrumental variable

produces consistent estimates of a and r (or 8) and asymptotically valid standard errors and test

statistics.

          Similar to model (4.24), model (4.36) offers a relatively simple framework for

constructing estimates of the covariogram and the correlogram associated with the moving

average component of the error process, both of which are useful for preliminary data analysis.

After one has settled on the specification of the autoregressive component, model (4.36) can

potentially be useful for testing for various features of the moving-average process, such as

whether it is stationary or the length of its order.



                                                   4 - 31
                    5. Estimating Dynamic Quantile Specifications



        An attractive alternative to estimating moment relationships characterizing the micro

intertemporal properties of variables involves using conditional quantile regressions to describe

these dynamics. This section presents a flexible empirical approach based on nonlinear

instrumental variable specifications for estimating autoregressive quantile equations, exploiting

the procedures outlined in the previous discussion.



5.1 Using Nonlinear Instrumental Variable Procedures to Estimate Quantile Regressions

        A familiar empirical formulation for modeling the growth of wages experienced by

individuals in longitudinal data takes the form:

(5.1)             yti    = D1 y(t-1)i + ... + Dr y(t-r)i + XtiN $t + <ti       t = 1,...,T,   i = 1,...,N,

                        / Y(t-1) iN D + XtiN $t + <ti ,

where yti is the dependent variable for the i-th individual in the t-th year, Xti is a vector of

exogenous measured variables, and the coefficients Dj and $t are parameters. (The t = 1 period in

(5.1) corresponds to the first period in which a researcher has data on all yti ,..., y(t-r)i .) The

elements of Xti include exogenous variables such as year and age effects, measures of educational

attainment, and gender and race indicators. The following analysis assumes the error <ti is

distributed independently both over time and across individuals. Thus, the autoregressive

coefficients Dj characterize the dynamic properties of the dependent variable after removing

trends. For notational simplicity, the subsequent discussion typically ignores the i subscript on

variables.


                                                       5-1
          One can associate relation (5.1) with an autoregressive formulation of the 6-th percent

quantile of the Markov distribution of yt by imposing the restriction:

(5.2)                                       q 6 ( <ti | Y(t-1)i , Xti ) = 0,

where q 6 ( ) designates the 6-th percent quantile of the distribution of <ti conditional on Y(t-1)i – a

shorthand notation signifying all the past wages y(t-1) i ... y(t-r) i appearing in (5.1) – and Xti , where

6 0 (0, 100). When 6 = 50, equation (5.2) determines how the conditional median of yt evolves

over time. Although LAD procedures provide consistent estimates of the autoregressive

coefficients appearing in (5.2), they have not been extensively employed.

5.1.1     Representing Dynamic Quantile Regressions as Nonlinear Simultaneous Equations

          A class of estimators based on simultaneous equation models provides a flexible and non-

cumbersome procedure for estimating parameters of the dynamic quantile wage growth equation

introduced above.32 Conditioning on exogenous and predetermined instruments, this method

specifies conditional quantiles of the structural error distribution as moment conditions capable

of being estimated within a conventional nonlinear instrumental variables framework of the sort

described in Section 3. This apparatus matches the sample analog of the conditional quantiles

against their population values, employing a smoothing procedure familiar in various problems in

non-parametric inference and simulation estimation. The analysis applies standard arguments to

demonstrate consistency and asymptotic normality of the resulting Smoothed MM Quantile

estimator.

          To apply this MM quantile procedure, let yt denote the dependent variable in year t, and

let Xt denote the exogenous variables such as demographic characteristics. We are interested in

obtaining information about the distribution of yt conditional on Xt and Yt-1 (past values of the


 32
      The material presented in Subsection 5.1.1 and 5.1.2 draws heavily on MaCurdy and Hong (1998).

                                                         5-2
dependent variable). Let q 6 (Yt-1, Xt ) represent the 6-th percent quantile of this conditional

distribution, where 6 0 (0, 100). This defines the equation

(5.3)

which underlies the construction of most quantile estimation procedures. The SmoothedMM

Quantile estimator uses relation (5.3) to form moment conditions. This relation implies the

condition

(5.4)                                                                                ,

where 1( ) represents the indicator function which takes value 1 when the condition expressed in

the parentheses is true, and 0 otherwise. The indicator function inside the moment condition is

neither continuous nor differentiable.

        To develop a variant of this relationship capable of being specified as a moment condition

in the standard framework of nonlinear method of moments estimation, observe that a smooth

representation of this condition takes the form:


(5.5)                                                                                       ,


where N represents the sample size, M is a continuously differentiable cumulative distribution

function with bounded symmetric density function N, and sN is the “bandwidth” function of N

that converges to 0 as N goes to 4 at a rate slower than N-1/2. The following analysis selects M to

be the standard normal cumulative distribution function; a natural alternative choice would be the

logit or any other cdf .

        The specification of the conditional quantile function adopted in our characterization of

wage dynamics is the linear distributed lag relation:

(5.6)


                                                5-3
Given longitudinal data for a sample of individuals i to estimate this conditional quantile, the

variant of the nonlinear simultaneous equation implied by (3.7) takes the form:


(5.7)                                                                                                            ,


where Uti is treated as a structural error with E (U ti | y(t-1)i ,..., y(t-r)i , X ti ) = 0.

5.1.2     Nonlinear Instrumental Estimation of Quantile Specifications

          Viewing (5.7) as a system of nonlinear simultaneous equations, application of

conventional nonlinear IV or 2SLS/3SLS procedures to (5.7) yields consistent D and $ estimates

possessing large sample normal distributions. The formal proof of this proposition assumes the

bandwidth parameter sN = N-d for 0 < d < ½.33 One can readily verify that when sN 6 0, M(A)

converges almost surely to the indicator function 1(yt > q 6 (Yt-1, Xt )). Since M is a bounded

function, one can exchange the expectation and limit operators to obtain the above smoothed

moment condition. A generalized nonlinear two stage least squares estimation routine can be

directly applied to this asymptotic moment condition. The estimation approach selects

instrumental variables that are conditionally independent of the error terms defined by

                                          1(yt > q 6 (Yt-1 , Xt )) - (1- 6) .

The resulting Smoothed MM Quantile (SMMQ) estimators are consistent and asymptotically

normally distributed with standard errors computed using robust methods. Simulation exercises

reveal that this procedure accurately reproduces estimators and test statistics generated by

conventional quantile estimation approaches.34

          The selection of the value of 6j in (5.7) determines the quantile estimated in the nonlinear

 33
      The condition imposed on the convergence rate 0 < d < ½ is needed for the proof of asymptotic normality.
 34
      MaCurdy and Hong (1998) explore the performance of various choices for the bandwidth parameter in a simulation
       study; the estimation analysis below relies on the results of this exercise.

                                                          5-4
IV estimation analysis. Setting 6j = 650 = .5 estimates the median, whereas setting 6j = 625 = .25

estimates the lower quartile and 6j = 675 = .75 the upper quartile. Conceptually, one can

generalize specifications (5.6) and (5.7) to allow parameters to be year (or age) dependent.

Estimation in this instance would require an equation for each quantile for each year (or age) that

a person has current and past wage observations. Within- and cross-equation restrictions on the

quantile regression coefficients could be imposed in the standard way using the multi-equation

MM framework discussed below. If weighting is required to adjust for the stratified character of

a dataset, then one applies the procedures summarized in Section 6.



5.2     Jointly Estimating Combinations of Quantile Regressions

        This estimation framework extends readily to consideration of a set of quantile relations.

This set may describe how a particular percentile of a distribution evolves over time, or it may

summarize the relationship among several different percentiles of a conditional distribution

either in a single period or over time.

5.2.1   Nonlinear Instrumental Variable Estimation of Quantiles in Panel Data

        Understanding how the j-th quantile of wage rates shifts over time in a longitudinal

setting involves estimating variants of (5.7) for each period available in the dataset. Allowing for

the coefficients of this conditional quantile to vary over periods, the nonlinear structural equation

representation of the 6j-th percentile for individual i in period t takes the form


(5.8)



for t = 1, ..., T. Conditional on past wages, y(t-1)i ,..., y(t-r)i , and Xti , the error Uti has mean 0.

Constraining the coefficients Dtm = Dm for all t yields a parameterization analogous to a


                                                     5-5
conventional ARMA(r,0) process.

         With the structural errors Uti distributed independently over time as well as across

individuals, nonlinear 2SLS offers a simple procedure for estimating the coefficients Dj and $ –

assumed here to be constant over time. This approach treats each gti in (5.8) as a separate

observation, with the sample made up of all the combinations of (t, i) where t = 1, ..., T and i =

1,..., N. The instrumental variables used in estimation consist of functions of y(t-1)i ,..., y(t-r)i and

Xti. Expressed in terms of the notation of Section 3, this estimation procedure amounts to setting

(5.9)           fi = g tj        and              Qi = { functions of y(t-1) j ,..., y(t-r) j and X tj }
                                                          where t = 1, ..., T and j = 1,..., N.
This formulation for fi substitutes for (3.7), with the index i merely counting all observations

obtained by stacking the time series observations for all individuals. If one suspects the errors Uti

are heteroscedastic, then nonlinear 2SLS estimation should be implemented calculating robust

standard errors corresponding to the asymptotic distribution (3.11).

         Alternatively, if one wishes to allow for an individual’s Uti errors to be dependent in some

way over time, with Uti’s still being independent across individuals, then multi-equation methods

incorporating predetermined variables described in Subsections 3.2.1 and 4.1.3 offer an approach

for estimating the parameters of (5.8). The predetermined variables include the past values of

wages, so the analog of regression equation (4.7) becomes

(5.10)                                                               .

The regressors Qi incorporate all of the exogenous variables of the model, including the relevant

functions of the components making up Xi . The implied formulation for fti in this case is




                                                   5-6
(5.11)                                            ,               t = 1, ..., T .




The parameters ( include all the coefficients Dt1, ..., Dtr , $t for t = (r+1), ..., T. (These

coefficients may be constrained.) Relation (4.9) gives the specification for fti . In constructing fti ,

one can replace the      with functions of the        . Moreover, one can expand fti to include

additional elements involving extra functions of the         . Formulas (3.21) and (3.22) give the

optimal specification for the instrumental variables.

5.2.2    Estimating Dynamic Specifications Describing Several Quantiles

         Suppose a researcher wishes to estimate more than one quantile to describe the evolution

of the wage distribution more fully. In particular, suppose interest focuses on estimating the J

quantiles 0 < 61 < 62 < þ < 6J < 1. The system of J nonlinear simultaneous equations providing

for the estimation of these percentiles takes the form


(5.12)                                                                     ,        j = 1, ..., J .



These equations apply to period t. Introducing a variant of system (5.12) for each available

period in panel data permits an analysis of how these J quantiles shift over time.

         Each of these equations can be separately estimated using single equation two-stage least

square methods. To improve efficiency given the available instruments, one can apply a three-

stage nonlinear least squares or joint-equation MM estimation procedure by weighting the J




                                                  5-7
equations optimally. Under the conditions noted briefly in Subsection 5.1.2,35 the nonlinear

instrumental variable procedures presented in Sections 3 and 4 applied to (5.12) produce

consistent estimates and valid asymptotic distributions for the coefficients of the quantile

functions. The optimal weighting matrix is determined by the variance-covariance matrix of J

sign-variables defined by

(5.13)


This matrix depends only on the 6’s associated with the specific distribution of the error term. In

particular, Var [1(yt > q 6 (Yt-1, Xt )] = 6 (1-6), and for 6p > 6j ,

(5.14)


One can permit flexible and unknown forms of heteroscedasticity in calculating the optimal

weighting matrix used in MM estimation. Incorporating these generalizations involves

implementing the conventional approach utilized in multiple-equation MM procedures.




 35
      See MaCurdy and Hong (1998) for more details.

                                                      5-8
                 6. Use of Sample Weights and Unbalanced Data



       When and how to weight data are two of the most important and least understood

concepts in estimation. The subsequent discussion begins with the basic principles underlying

weighting, and then summarizes how these basics apply to MM estimation with longitudinal data

with nonlinear specifications. The discussion documents how one must modify MM formula to

account for stratified sampling. The section ends by describing a modified weighting-type

procedure enabling researchers to use conventional methods to estimate intertemporal

specifications using unbalanced datasets – datasets supplying not a perfect overlap in the time

periods for individuals included in the cross-sectional samples.



6.1    Basics of Weighting to Account for Stratified Sampling

       Practically all micro data are collected using a stratified sampling frame, meaning that

observations with particular characteristics are drawn in proportions differing from those of the

true population. Throughout this section, the discussion considers households as observations,

but the weighting procedures outlined here obviously apply for whatever observation unit

happens to be relevant for an analysis, such as individuals or firms. The true population refers to

the group whose distribution a researcher wishes to discern.

       Suppose one would like to infer the mean of a variable y, say income, in a population

with households of two types: Type 1 and Type 2. Type 1 may refer to a poor household, and

Type 2 to a non-poor household; alternatively, Type 1 may designate a black family, whereas

Type 2 indicates a white one. In the true population, assume Type 1 households make up

proportion P1 of the population, and Type 2 households constitute the remaining P2 = (1- P1 )


                                               6-1
proportion. Thus, P1 represents the probability that a randomly drawn household from the true

population is Type 1. With yi denoting the value of y for household i, suppose the expected value

of y differs for the two types of household with

                        E(yi | Type 1) = :1           E(yi | Type 2) = :2 .

Thus, the mean of y in the population is

(6.1)                           E( yi ) / : = :1 P1 + :2 P2 .

         A stratified sample includes observations on household types in proportions that differ

from P1 and P2 . Data collectors may want an oversample of poor or black families to enable

them to learn about the circumstances of these groups with added precision. Suppose this

oversample occurs for Type 1 households; out of a sample of size N, N1 are of Type 1 with the

sample share S1 / N1 /N > P1 . The sample average of y equals



(6.2)



where S2 / (N-N1 )/N / N2 /N, and
                                                      ,                       j = 1,2 .


The sample mean        calculated over Type j households in the sample consistently estimates the

expected value :j . Since the sample shares S1 and S2 do not converge asymptotically to the true

population shares P1 and P2 ,   clearly does not consistently estimate :.

         Weighting the data solves this problem. Define the weight for observation i as

(6.3)                                   ,
where j signifies household i’s type. Weighting observations and recalculating the sample mean

yields



                                                6-2
(6.4)


The use of a weight inflates observations that are under-represented and deflates values

associated with over-represented households.



6.2     Weighting to Account for More Sophisticated Sample Stratification

        One can readily generalize the above scheme to admit many types of households.

Suppose the vector of characteristics Xi designates a household i’s type, and the share of this type

in the overall population equals Pi = P(Xi ). The expected value of y in this population is


                                                                          .


With Si representing the share of Type X i in the sample, the weight for observation i with these

characteristics is

(6.5)                                            .


Computing the average of the sample using weights (6.5) yields




(6.6)                                                                            .




This relation generalizes (6.4). In the first and second lines of (6.6), the index j designates types.

The last line presumes each observation is its own type, producing the most general form of

weighting.



                                                6-3
6.2.1   Typical Form of Weights Provided in Survey Data

        Datasets often report weights in a way such that adding weights for observations of a

particular type Xi yields the total number of households of that type in the overall population.

Thus, in place of (6.5), datasets may provide the weight:



(6.7)



The i subscript in these expressions designates observation i’s type. Summing these weights over

all members of types in the set K yields




(6.8)




Thus, when the set K includes all types j, this quantity measures the total number of households

in the true population; equivalently,


                                                                                             .


        Computing weighted averages of the observations yi to estimate expected values of y in

the true population takes the form

(6.9)                                                                                  .



The last step in (6.9) treats every individual as his/her own type, with K covering all possible

types. The standard error of this estimated mean is the square root of the quantity


                                                6-4
(6.10)




Most software packages use these formulas to compute weighted means and their associated

standard errors.36

6.2.2     Calculating Statistics for Subpopulations

          Instead of representing the entire population, suppose the set K includes only a subset of

household types. Let :K designate the mean of the subpopulation comprised of all household

types making up the set K. A consistent estimate of this mean takes the form




(6.11)




In this weighted average, note that the expression




 36
      Software packages often present several options for using different forms of weights.

                                                           6-5
corresponds to the proportion of Type j households that make up the true subpopulation defined

by set K.

       The variable yi in the above discussion can represent any general quantity of the data,

including higher-order terms, allowing the estimation of higher order moments of y. This

analysis merely shows how to estimate moments associated with the true population using

observations from a stratified sample. As one example, a consistent estimate of the variance of yi

in subpopulation K is:




Note, in contrast to the classic unweighted case – which corresponds to the situation wi* = 1 for

all i – the square of the standard error of the weighted estimated mean is not proportional to the

estimated variance of yi . Weighting alters the variability of the sample average.



6.3    Weighting in Method-of-Moments Procedures to Compute Estimators

       Nonlinear functions of variable and parameter vectors can also be represented by the yi

variable in the above discussion. The analysis merely shows how to estimate moments associated

with the true population using observations from a stratified sample. An important question

concerns how these lessons can be implemented using the general estimation procedures

described in Section 3.

       As noted in Section 3, MM procedures minimize a distance function of the form (3.2) to

                                               6-6
compute estimates ( ) for the parameters (. The quantities LN ((), VN ((), and SN (() appearing


in (3.2) and (3.3), which specify the asymptotic distribution of    , take the form


                          ,                            and                                   .


As in the previous analysis, the matrix HN appearing in distance function (3.2) and the asymptotic

distribution (3.3), is any positive definite matrix.

         The asymptotic properties of the estimator    critically rely on             , and this


convergence property in turn relies on the sample average of the Ri (()’s converging to an

expectation of zero based on the true distribution. Thus, to have average (3.1) converge to the

appropriate expectation in the case of a stratified sample, one replaces LN (() by its weighted

counterpart



(6.12)                                                                            ,



where the set K includes all types included in the overall dataset. The corresponding

formulations for SN (() and VN (() take the form



(6.13)                                                                                             .



With (6.12) used to construct the distance function (3.2) with any positive-definite matrix HN, the

extremum estimator       consistently estimates the value of (o associated with the true population.


Moreover,      possesses asymptotic distribution (3.3) with                 and               , where


                                                 6-7
(6.13) gives the formula for VN (() and SN (().

         The generalized least-squares variant of the distance function providing for the

computation of the most efficient method-of-moments estimator          is still the function C(()

specified by (3.4). The quadratic form matrix in C(() is the inverse of                   , with (6.13)

again giving the formula for VN ((), and      being any consistent weighted estimator. The


extremum estimator      , the value of ( minimizing C((), consistently estimates the value (o


associated with the true population. Moreover,        follows an asymptotic distribution given by

(3.5) with (6.13) giving the formulas for VN (() and SN (().



6.4      Weighting in LS and Instrumental Variable Procedures to Compute Estimators

         What are the implications of applying the above weighting procedures for implementing

least squares? For nonlinear least squares? For nonlinear 3SLS?

6.4.1    Familiar Form of Weighting in LS Procedures

         For least squares, consider the simple linear model

                                          ,                            i = 1,..., N.

Expressed in terms of equation system (3.7), this relation translates as

(6.14)                                        .

Least squares amounts to selecting the instrumental variables Qi = Xi , and minimizing distance

function (3.2) with


                                      ,           where         Ri (() = Xi (yi - XiN()

(6.15)

                                                   6-8
                                                                .



The implied formulations for the matrices       and        are:

(6.16)                                                                                       .


Since the system of equations LN = 0 fully defines the least squares estimator          (i.e., the number

of equations equals the number of elements estimated in (), asymptotic distribution (3.6)

approximates the large-sample distribution of    . The formula for the variance-covariance matrix

in (3.6) provides for the computation of robust standard errors. Obviously, under the assumption

of homoscedasticity, this formula simplifies to the familiar least squares specification.

         Weighting to account for stratified sampling amounts to computing a least squares

estimator (or generalized least squares estimator) for the equation

                                                       .


Considered in the context of the general estimation approach described in Subsection 3.1, this

estimation procedure sets

(6.17)                                                      ,


and selects the instrumental variables                . The weighted least squares estimator        ,


minimizes the distance function (3.2) with


                                              where                 Ri (() = wi Xi (yi - Xi N() ,

(6.18)




                                                6-9
                                                                 .


The implied formulations for the matrices        and      are:

(6.19)                                                                                        .

The specification for LN in (6.18) clearly possesses the form required by (6.12) to adjust for the

use of a stratified sample, so    consistently estimates the value of ( associated with the true

population. Asymptotic distribution (3.6) approximates the large-sample distribution of           , with

(6.19) serving as the components appearing in the formula for the variance-covariance matrix of

this distribution.

         Although the variance-covariance formula agrees with what one would obtain through

computing robust standard errors by applying least squares to estimate the weighted regression

equation (6.17), be aware that this formula is not the one typically reported by weighted

regression software packages. These packages presume that weighting is done to induce

homoscedasticity, which renders the matrix        proportional to     with the factor of


proportionality consistently estimated by

                                                             .

This simplification relies on the assumption that Var( >i ) is proportional to wi . There is little

reason to believe this relationship holds in a stratified sample, for the sampling weights are not

designed with this consideration in mind. For example, it is possible for a stratified sample to

have different means but the same variances across groups. In this case, weighting is needed to

compute means for the overall population, but a simple average estimates variances. Weighting

in this instance induces heteroscedasticity. The variance-covariance formula appearing in (3.5),

                                                6 - 10
with (6.19) inserted as the components of this expression, consistently estimates the appropriate

standard errors and test statistics regardless of how weighting alters the variances of disturbances.

6.4.2    Weighting with LS Interpreted as an IV Procedure

         Alternatively, representing the weighted least squares estimators within a 2SLS

framework offers an approach for computing the appropriate standard errors when one wants

willing to assume the regression errors > are homoscedastic across observations. Designate the

specification for fi by (6.14), and implement 2SLS selecting the instrumental variables Qi = wi

Xi. The application of 2SLS minimizes distance function (3.2) with


                                       ,       where           Ri (() = wi Xi (yi - XiN() ,

(6.20)

                                                                       .


Relations (6.19) give the implied formulations for the matrices      and     . As mentioned


before, the specification of HN is irrelevant in the calculation of estimates with the form of LN

given by (6.18)–in the terminology of 2SLS, this equation is exactly identified. So, the weighted

least squares estimator       is the 2SLS estimator. Asymptotic distribution (3.6) once again

approximates the large-sample distribution of      , with (6.19) serving as the components

appearing in the formula for the variance-covariance matrix of this distribution. Carrying out

2SLS estimation with the robust standard error option selected to calculate standard errors uses

this formula for the variance-covariance matrix. If one assumes the errors > are homoscedastic,

then the conventional standard error formula for 2SLS consistently estimates the variance-

covariance matrix of (3.6).

         This 2SLS representation of weighted least squares readily accommodates the nonlinear


                                                6 - 11
regression case. One computes the weighted nonlinear least squares estimator using nonlinear

2SLS procedures by specifying f i = yi - g(Xi , (), where g is a known nonlinear function, and

selecting the instrumental variables as: 37

                                                            .

With these specifications of fi and Qi, all of the above findings apply in computing the weighted

nonlinear least squares estimator and its asymptotic distribution.

6.4.3     Weighting in Nonlinear IV Procedures

          Now consider NIV and nonlinear 3SLS estimation with weighting, which encompass all

other linear and nonlinear MM procedures. Application of weighted NIV to the model specified

in system (3.7) selects the instrumental variables

(6.21)                                                 Qji = wi Gji ,

where Gji represents the instrumental variables a researcher would use in the absence of

weighting. The implied formulation for the Ri’s in the NIV framework takes the form




(6.22)                                                                                                              ,




where the matrix )i is given by (3.9). (Relation (6.22) presumes consideration of only a single

structural equation per period for expositional simplicity; inclusion of Kroenecker products in

forming the Ri’s as in (3.8) will generalize this expression to permit consideration of multiple

structural equations per period.) The specification of LN implied by (6.22) clearly possesses the

form required by (6.12) to adjust for the use of a stratified sample, so the value of                         minimizing


 37
      Note, this specification of Q i corresponds to the weighted value of the optimal choice of instrumental variables
       presented in (3.13).

                                                           6 - 12
distance function (3.10) consistently estimates the value of (o associated with the true

population. Moreover, the weighted estimator        possesses asymptotic distribution (3.11). If

the homoscedasticity assumption applies for the structural errors >i , then     can be interpreted as

the nonlinear 3SLS estimator obtained by minimizing distance function (4.3), and (4.4) gives the

asymptotic distribution of    . An equivalent representation has the 3SLS estimator

minimize distance function (4.5) with its asymptotic distribution given by (4.6), where the

quantities wi Qi replace Qi in these expressions.



6.5    Which Weights Should be Used in Longitudinal Analyses?

       The selection of weights appropriate for a panel data exercise requires the following

steps: first, a decision of exactly which population a researcher wants to emulate; and, second, a

clear understanding of what the weights are intended to represent. Documentation accompanying

survey data on weights seldom discuss their use other than vaguely noting the broad category of

the population the weights are meant to replicate. For example, there are usually weights for

estimating relationships involving observations on individuals, and weights for families. The

choice among these options is usually obvious since one emulates the population of individuals

for some region or age range, and the other models a population of families or households.

However, there are often different sets of weights for each year as well, leaving the question of

which to use.

       To discuss the principles underlying the answer to this question, return to the problem of

estimating the expected value of a variable yti , where i refers to a household and t designates the

year. The variable y may represent a simple variable such as income, or it may equal the product

of income in the current period and some previous period. To estimate the mean of y in the


                                               6 - 13
target population using the framework outlined above, the specification fti in equation system

(3.7) takes the form

(6.23)                                     ,                  t = 1,...,T,   i = 1,...,N.

With Gti again representing the instrumental variables used ignoring weighting, replace the

weighted variant of instrumental variables appearing in (6.22) by the quantity

(6.24)                                 Qti = wti Gti ,

with the specification of wti designated below. In the estimation of equation (6.23), the constant

Gti = 1 constitutes the only instrumental variable. The implied formulation for the Ri’s in the MM

framework becomes




(6.25)                                                                                           ,




where relation (3.9) gives the formula for the matrix )i. Implementing the weighted NIV

procedure described above produces consistent estimates for the value of (o associated with the

true population assuming the weights correspond to this population.

         So how does one select the wti? Rarely would one select the wti to be the annual weights

provided in survey longitudinal data. The annual weights are meant to adjust for the fact that

households attrit from the sample over time, and this attrition does not occur randomly across

household types. Moreover, these weights may also adjust to recognize that, for example, the

national population changes due to immigration. These adjustments recognize that what was

representative in one year is not representative a decade later.

         Most empirical analyses investigating intertemporal relationships work with balanced


                                                 6 - 14
data, meaning that all observations i are deleted from the dataset if any of their observations (t,i)

are missing. Suppose a researcher wishes to estimate relationships over the period 1 to T, and

uses all data on households i who are in the data in period 1and still part of the dataset through

period T. Conceptually, the weight wTi would be the proper one to use in such analyses; so, in

(6.24) and (6.25) one would set wti = wTi for all t. This selection would also be appropriate if the

researcher conducted the analysis starting after period 1.

          The validity of this choice, of course, critically depends on the weights properly adjusting

for attrition. The circumstances under which weights accomplish this task rely on accounting for

the potential presence of endogenous sample selection, an exceedingly complicated problem that

requires implementation of a structural analysis to infer corrected probabilities of sample

inclusion. This significant topic is beyond the scope of the chapter.38 Additional problems can

arise if the annual weights in longitudinal data attempt to adjust for recent-arrival immigrant

households who were underrepresented in the original sample. For the weights to adjust properly

for stratification, a researcher must presume that households designated to be equivalent by

sample weights do not differ depending on whether they are original-sample or recent-arrival

immigrant households.



6.6       Estimation with Unbalanced Data

          What about using all observations available in panel data to estimate relationships,

irrespective of whether these observations come from households who were not represented in

some years? Using an unbalanced dataset requires adjustments to the output of test statistics

reported by conventional estimation procedures.

 38
      The creation of weights in such instances is closely linked to the theory underlying choice based sampling, a topic
       touched upon in the Handbook chapter by McFadden (1984).

                                                          6 - 15
6.6.1    Characterizing Estimators Computed Using Unbalanced Data

         Suppose a data source offers observations on N households i for some years t during the

period 1,...,T. In year t, observations exist on all households who are members of the set {i 0

{t}}; there are Nt such households in year t. A particular household j may be represented in a

combination of years, implying it may be in any combination of the sets {i 0 {1}}, ..., {i 0 {T}}.

A stratified sample assigns a household missing in year t a weight equal to 0; that is, wti = 0 when

an observation on i is unavailable for year t. A convenient reformulation of the weights useful in

the subsequent analysis takes the form

(6.26)                                        .

Often the weights provided in data sources are in fact Wti and not wti , for they adjust for the

smaller sizes of the cross-sectional samples. Generally, the weight wti appearing in (6.26) refers

to the cross-sectional weight applicable for year t; this selection of wti presumes that the most

recent endogenous variable included in the equation weighted by wti is from period t. A

household i with a missing observation in period t has Wti = 0. One need not distinguish between

Wti and wti in the formulation of the w * weights (representing population sizes) discussed in

Section 6.2.

         An MM estimator using unbalanced data minimizes a distance function of the form (3.2)

where




(6.27)                                                                                              .




                                                  6 - 16
This relation defines the vectors Rti* and Rti so they differ only by the factor N/N t , which enlarges

values of Rti* to account for summing over a greater number of households than there are

observations in year t. When an observation on household i is missing in year t, Rti = 0 as is the

case for the weight Wti . In the case of NIV estimation with stratified samples, (6.27) becomes

(6.28)




                                                                                                      ,




where Gji again constitutes the instrumental variables a researcher would use in the absence of

weighting. Expressed in terms of the notation of Section 3, (6.28) translates to




(6.29)                                                                                           ,




Thus, Ri , formed by stacking the elements of the Rti’s, possesses the same structure as (3.8); and


                       where (3.9) gives the matrix ) i .



6.6.2    What is the Asymptotic Distribution of Estimators Computed using Unbalanced Data?

         The large-sample distribution of the unbalanced MM estimator           depends on the

asymptotic properties of the vector




                                                 6 - 17
(6.30)                                                                  .




In sharp contrast to all previous interpretations of the expression                , this expression in


(6.30) and throughout this subsection merely serves as a notation representing the unequally-

normalized vectors specified on the left-hand side of definition (6.30). (So, this expression does

not equal the square root of N times LN listed in (6.28) or (6.29). ) The term                 defined


in (6.30) corresponds to its analogous expression appearing in Section 3 in that it possesses an

asymptotic normal distribution with a form comparable to the representations considered above.

         In particular, assuming the Rti* vectors satisfy the same distributional properties

maintained for the Rti’s in Section 3, (6.30) converges to a normal distribution possessing the

form

                                                                              .

The variance-covariance matrix                      has as its (r, s) block the matrix

(6.31)                                                                                          ,

where the notation {i 0 {r, s}} signifies the set of all households with observations in both years

r and s, and Nrs denotes the total number of households in this set. The approximate large-sample

distribution of LN becomes
                                                                    ,
where the (r, s) element of the variance-covariance matrix                  takes the form



                                                 6 - 18
(6.32)                                                                                           .


Similar to the reinterpretation of notation exploited at the beginning of this subsection, the

expression           in (6.32) does not designate the matrix     divided by N, as has been true in the


previous discussion. It merely represents the sample size normalized variant of the variance-

covariance matrix.

           Paralleling the steps outlined in Section 3.1, the approximate large-sample distribution of

the weighted estimator          , calculated by minimizing distance function (3.2) using weighted

data, is

(6.33)                                                                                               ,

where                    with




(6.34)                                                                                       .




When implementing estimation procedures with parameters exactly identified–in which case the

choice of HN is irrelevant in the calculation of the estimator–the estimator      possesses the

simpler asymptotic distribution



(6.35)                                                              .




                                                  6 - 19
(This distribution is the analog to (3.6).) Finally, the estimator          , computed by minimizing the


counterpart to the optimal quadratic-form distance function C(() given by (3.4), approximately

follows the large-sample distribution



(6.36)                                                                  .




6.6.3    Wrong Variance-Covariance Matrix Reported by Conventional Estimation Procedures

         Unfortunately, the familiar estimation procedures compute incorrect values for the

variance-covariance matrix, even after implementing robust standard errors options. This

produces invalid test statistics for some hypotheses. The conventional approaches report

variance-covariances based on the following formula to compute

                                                      .

The (r, s) element of this matrix is




(6.37)




Comparing (6.32) to (6.37) reveals discrepancies in the off-diagonal elements of the valid

specification of        and the reported value            . The relationship between the (r, s) elements

of these matrices is

(6.38)                                                                                              .

This formula shows how to adjust each element of the reported matrix – the right-hand-side

                                                 6 - 20
elements in (6.38) – to the appropriate values.

         Inspection of (6.38) reveals that the diagonal blocks of these matrices are the same since,

with r = s, N rs = N r = N s . This implies that standard errors, t-statistics, and test statistics

reported by the regular estimation procedures are valid as long as no constraints are imposed

across equations. When restrictions are considered across equations, the off diagonal blocks

come into play and the elements in these blocks differ depending on the relative sample sizes in

distinct periods. In many longitudinal datasets, observations are dropped after the period they

first attrit from the panel. Consequently, assuming period r comes before period s and some

attrition occurs, then N r > N s . If all households present in period s were also observed in period

r, then N rs = N s . In this case the conversion factor becomes


(6.39)                                                .

Thus, the (r, s) element reported by conventional estimation is too low, and it must be enlarged

by the ratio of the square roots of the early sample size to the later one to calculate the correct

covariance. So, if the period r sample is twice as large as the period s sample, the covariances

associated with coefficients across the year r and s equations must be multiplied by           . 1.4. Of



course, if all households are observed in all years, then N rs = N r = N s = N, and no adjustments

are required.



6.7      Weighting and Unbalanced Data in the Estimation of Quantile Specifications

         The above procedures readily apply in estimating the parameters of conditional quantile

relationships using a stratified and/or an unbalanced sample. When faced with a stratified sample

in a longitudinal data context, selecting instrumental variables according to (6.24) in the

                                                  6 - 21
implementation of the Section 5.1 quantile estimation approach yields consistent estimates of the

coefficients Dt1, ..., Dtr , $t . As noted in Section 6.5, the selection of weights wti in (6.24) depends

on precisely which population a dataset’s weights emulate, and which population a researcher

wishes to replicate. Often an analyst estimates intertemporal relationships using balanced data,

restricting the sample to include observations for periods 1 through T for all individuals i who

remain sample members during this time horizon. In such a situation, one would select wti = wTi

for all t when forming the weighted instrumental variables in (6.24).

        When estimating dynamic quantile specifications using unbalanced data, the discussion of

Section 6.6 applies fully. One carries out nonlinear instrumental variable estimation using

weights specified by (6.26) and the formulation of LN given by (6.28) and (6.29). This

formulation applies directly when implementing the multi-equation method described above with

fti specified by (5.11). This framework also permits implementation of the nonlinear 2SLS

procedure discussed above, which assumes the structural errors Uti are distributed independently

over time as well as across individuals. In this 2SLS case, fti in (6.28) is a scalar and the

specification of the HN matrix in the formulation of the distance function (3.2) takes the form:


                                                                           ,


where 4 in this Kronecker product refers to a column vector or 1's of dimension T, and equations

(6.29) define the instrumental variables Qti .




                                                 6 - 22
                  7. An Empirical Application to Wage Dynamics



       This section introduces a set of empirical examples to illustrate the econometric methods

presented in the previous four sections. These examples characterize the dynamic properties of

hourly wages of men during the period 1980-91 using the Panel Study of Income Dynamics

(PSID). This empirical analysis is not intended to provide a comprehensive investigation of

wage dynamics; instead, its aim is to enhance the accessibility of the procedures discussed in this

chapter to practitioners. The section reports empirical findings applying many of these

procedures, explaining implementation in a concrete context and comparing standard-error

estimates obtained by through the use of both classical and bootstrap approaches. It also

highlights the differences in estimation from using balanced data, where individuals are restricted

to have data for every period t, versus unbalanced data, where individuals who are only available

for part of the sample period are retained. After illustrating the proper use of stratified sample

weights, the section ends by using quantile regression procedures to characterize the dynamic

properties of median hourly wages for men.

        Section 7.1 summarizes the data used, while Section 7.2 estimates covariograms using

the method described in Section 4.4. Section 7.3 uses the methods of Sections 4.5 and 4.7 to

illustrate how the autoregressive parameters can be estimated alone, or jointly along with the

moving-average parameters. Section 7.4 reports the results of the estimation proposed in Section

7.3. Section 7.5 provides bootstrapped standard errors for comparison to the asymptotic standard

errors reported in Section 7.4. Section 7.6 applies results in Section 6.6 to illustrate the

utilization of information from unbalanced data, and Section 7.7 applies the results in Section 6.4


                                                7-1
to show the correct use of stratified sampling weights. Section 7.8 is an application of quantile

regressions to estimate ARMA processes as discussed in Section 5. Finally, Section 7.9

summarizes the findings.



7.1       Data Description and Prototype Model

           Data are drawn from the randomly-designed sample of the Michigan Panel Study of

Income Dynamics.39 The dataset consists of 959 observations on prime-age males for the years

1980-90, a total of 11 years of data for each individual. Only males 25-46 years old in 1980 are

included in the sample. The wage rate is defined to be annual real earnings deflated by the

Consumer Price Index divided by hours of work reported during the year.

          Because the PSID is a stratified sample, one must apply weights to adjust for differences

between the sample and national populations in order to obtain consistent estimates of population

parameters. Regrettably, most standard software routines do not use weights properly in

calculating standard errors when weights adjust for stratified sampling; these routines instead

assume weights merely adjust for heteroscedasticity. Routines that do make proper adjustments

are often termed “survey sampling” procedures. Given the illustrative nature of the empirical

examples presented below, and the fact that most economists ignore weighting, the following

empirical examples do not use weighting in calculating estimates. To assess the impact of

weighting, Section 7.7 presents the findings of several exercises.

          The following exercises assume that wages obey the regression/median equation:

(7.1)                                          Tti = X ti $ + Uti,

where Tti measures the growth in an individual’s hourly wages from period (t-1) to t. This


 39
      The panel study’s procedures and methods are detailed in Hill (1992).

                                                          7-2
equation is a special case of relation (2.10), with B and R set equal to zero and $ constrained

across time.40 The majority of the analysis presumes that the disturbances in (7.1) follow the

ARMA process specified in equation (2.3)

                                                a(L) Uti = m(L) ,ti ,

which the following empirical applications respecify as

(7.2)                                                                           .

(Note, the coefficients ajt in (7.2) have been redefined to have the opposite sign as the

corresponding coefficients appearing in relation (2.3) and the previous discussion; expression

(7.2) takes the form typically found in empirical earnings literature.) Both mean and quantile

regression techniques can be used to consistently estimate the parameters of interest. For

simplicity, the subscript i will be omitted from equations when this causes no confusion.

          Least squares estimation of the reduced-form model (7.1) produces the residuals Ût used

in much of the subsequent empirical exercises. The variables incorporated as regressors in Xt are

designed to capture the measured component of wage growth, including four education dummy

variables, a quadratic in age, full interactions between the age polynomial and the education

dummy variables and a dummy variable for each year of the sample after the first. With time

effects included in X t, the errors Ut represent the vector of deviations in individuals’ wage

growth from averages in the population in period t, after accounting for age and education. Thus

this exercise seeks to characterize the correlation across years in unmeasured (residual) wage

growth.




 40
      Regression coefficients are constrained to be equal across years. Formal hypothesis tests easily accept this
        restriction at conventional levels of significance.

                                                            7-3
7.2     Estimation of Autocorrelations

        Prior to estimating specifications of model (7.1), it is necessary to investigate two

questions: (1) Do the vectors U1,...,UT satisfy the weak stationarity property implicitly assumed in

the multiple time series specifications presented in equation (7.2)? (2) What are the orders of the

autoregressive and the moving average lag polynomials in the multivariate ARMA process that

best describe the intertemporal variation in the Ut’s?

7.2.1   Estimating Covariograms

        Estimating autocovariances provides the essential information needed to answer these

questions. Section 4.4 describes the approach utilized to calculate these quantities implementing

the joint generalized least squares or seemingly unrelated regression framework specified by

equation (4.24) using the fitted values of Ut , Ût. This procedure estimates the second moments

E(Ut Ut-kN) for each value of t and k setting each moment equal to its sample analog Ût Ût-k ,

which consistently estimates population autocovariances when averaged. Weak stationarity

follows if one can accept the hypothesis that these second moments are independent of t for any k

(i.e., independent of year for any lag). One can test weak stationarity with a standard F-test on

the joint hypothesis that for a given k, E(Ut Ut-k) is the same for all t. Further, the properties of

these estimated second moments provide information allowing one to choose which ARMA

process best fits the data.

        The estimation of the sample moments is done within a seemingly unrelated regression

context in order to account for unspecified heteroscedasticity and autocorrelation across time for

a given individual. Thus the values ÛtÛt-k for all available combinations of t and k are

constructed for each individual to form the system of equations (4.24).




                                                 7-4
7.2.2   Implications of Covariograms for Stationarity and ARMA Specifications

        Table 7.1 presents estimates of the covariogram associated with specification (7.1). The

first row presents estimates for autocovariances of order k = 0,1,...,6 when the autocovariances of

the specified order are constrained to be equal across time. These are the constrained estimates

of 2 from the version of equation (4.24) described above. The second row lists the

autocorrelation coefficients implied by these estimates. The third row reports the minimum and

maximum estimates of the autocovariances when the 2’s are not restricted to be equal over time.

The fourth row reports the test results for the hypothesis that the k-th order autocovariance is

equal across periods, e.g., the hypothesis is that the covariance between U1981 and U1982 is the

same as the covariance between U1982 and U1983 .

        Table 7.1 provides answers to the two questions posed above. The F-Test in row 4 is

easily accepted for all k. Therefore, the data do accept a weak stationarity restriction.

        The second question, how to model the error structure process in a tractable way,

amounts to picking an ARMA process that best fits the data. Autoregressive processes lead to

autocovariances that, at orders higher than the order of the process, gradually fall to zero.

Moving-average processes exhibit autocovariances that sharply drop to zero once one moves to

an order higher than the order of the moving average. These two theoretical predictions are the

guidelines from which to specify the error structure. Note that these predictions involve

evaluating magnitudes (i.e., absolute values) of the coefficients.

        Using the above theoretical predictions as guidelines, it is easy to see the existence of a

first-order moving average in the data. The first-order autocovariance term, estimated to be

-0.048, is by far the largest in magnitude. The second-order term, while still statistically different

from zero, takes a sharp drop to -.006, an eighth the size of the first. The higher order


                                                7-5
autocovariance terms get progressively smaller and are all statistically indistinguishable from

zero.

        The sharp drop after the first-order autocovariance term suggests a first-order moving-

average process, but it also suggests a short autoregressive process. A lengthy autoregressive

process would not have autocovariance terms that drop off so fast. The gradual fall in the terms

of order two and higher invites one to consider a low-order autoregressive process. Based on the

autocovariance coefficients and prior work, this section will investigate models with a first-order

moving average component and either a first- or second-order autoregressive process

(ARMA(1,1) or ARMA(2,1)). One could investigate a wider class of specifications, but these

two specifications should serve to sufficiently illustrate the methods without getting bogged

down in repetitive tables. For notational simplicity, equations will be in terms of the ARMA(2,1)

specification, and the changes that are required to estimate the ARMA(1,1) process will be noted.



7.3     Empirical Specifications for ARMA Error Process

        This section describes specifications and methods used to estimate the autoregressive and

moving-average coefficients in equation (7.2). The estimation done here uses the framework

outlined in Section 4 with B =0 and R= 0, meaning that there are no right hand endogenous

variables. Combining equations (7.1) and (7.2), the researcher wishes to estimate the parameters

of the following equation:

(7.3)          Tt - Xt$ + a1( Tt-1 - Xt-1$) + a2(Tt-2 - Xt-2$) = ,t + m1 ,t-1,

an ARMA(2,l) specification. When a2 = 0, equation (7.3) specifies an ARMA(1,1) process.

7.3.1   Specifications for Estimating Only Autoregressive Coefficients

        Section 4.5 outlines methods for directly estimating the autoregressive parameters of


                                                 7-6
ARMA processes. Starting with equation (7.1) one can follow Section 4.5 to estimate both the

structural parameters $ and the autoregressive parameters of the error process. Assuming that the

moving-average process is first-order implies that error terms from two or more periods back are

predetermined and can be used as instruments. In this case, define a system of equations of the

following form (modeled after equations (4.10) and (4.27)):

(7.4)           f t(8) = Tt - Xt $

                ftk(9) = [Tt-k - Xt-k$]×[(Tt - Xt$) -a1(Tt-1 -Xt-1$) -a2(Tt-2 -Xt-2$)]

                         k = 2,...,(t-1983)                t = 1983,...,1990.

Stacking these equations to obtain fi ($,a)=(f t(8)N, ftk(9)N)N for all t creates a model in the form of

equation (3.7). This can be estimated using nonlinear three-stage least squares. Following the

discussion in the second half of Section 4.5, if one wishes to estimate only the autoregressive

parameters then one could use a consistent estimate of $ to form

(7.5)           f tk(10) = Ût-k×( Ût - a1Ût-1 - a2Ût-2 )

                         k = 2,...,t-1983                  t = 1983,...,1990,

where                       and      is the ordinary least squares estimate from OLS in equation (7.1).

This equation is an ARMA(2,1) version of equation (4.30). The second half of the product in

ftk(10) is the gt of equation (3.18); it is multiplied by an orthogonal regressor in order to provide the

identifying restrictions.

        Equation (7.5) is the specification estimated, with one modification. Instead of

estimating the model with all available predetermined variables as instruments, i.e., all residuals

from two or more periods back, this section uses a linear combination of those predetermined

variables - specifically the linear combination that brings them closest to being the optimal

instruments discussed in Sections 3.2.2 and 4.1.4: namely,                               and


                                                     7-7
                      . This is done by regressing Ût-1 and Ût-2 on all available predetermined and

exogenous variables. This yields predicted values for these two quantities for every year t, which

can then be used as instruments. Formally, let Ûpt be the predicted value of Ût based on a

regression on all its previous (predetermined) lags. For example, regress Û1984 on Û1981, Û1982,

and Û1983. Then use the predicted value, Ûp1984, as an instrument on the equation (7.5) where

t =1985. In the 1986 equation, it will also serve as an instrument but since it is two periods back

it is predetermined in the 1986 equation and therefore can be perfectly predicted by itself. This

allows one to get instruments that are close to the optimal instruments but are uncorrelated with

the first-order moving-average error term.

        Implementing the above specification yields

(7.6)           f t(11) = Ûpt-1×( Ût - a1Ût-1 - a2Ût-2 ) = Ûpt-1×gt

                f t(12) = Ûpt-2×( Ût - a1Ût-1 - a2Ût-2 ) = Ûpt-2×gt                t = 1983,...,1990.

Stacking these equations to obtain fi(a1, a2) = (f t(11)N, ft(12)N)N for t = 1983,...,1990 creates a model of

the form of (3.7). Using these two projected instruments is convenient because they are

sufficient to identify both a1 and a2, while reducing the number of equations in the system makes

it easier to estimate computationally and decreases programming time. In the case of the

ARMA(1,1), f t(12) is dropped from estimation as f t(11) is sufficient to identify the system.

7.3.2   Specifications for Estimating Autoregressive and Moving-Average Coefficients Jointly

        Since the covariograms gave strong evidence of a moving-average process, one might

wish to estimate jointly the autoregressive and moving-average parameters as described in

Section 4.7. This can be done by adding the relevant moment restrictions to the estimation.

Using the notation from above, one would estimate:




                                                    7-8
(7.7)     f tk(13) = Ût-k×( Ût - a1Ût-1 - a2Ût-2 )                                     = Ût-k×gt

          f t(14) = (Ût - a1Ût-1 - a2Ût-2)2 - F11                                      = gt 2 - F11

          f t(15) = (Ût - a1Ût-1 - a2Ût-2)( Ût-1 - a1Ût-2 - a2Ût-3) - F12              = gt×gt-1 - F12

          k = 2,...,(t-1983)                    t = 1983,...,1990.

The value F11 in f t(14) estimates the variance of the residual term (, t + m1 ,t-1) while F12 in f t(15)

estimates the residual first-order autocovariance. To estimate the moving average component,

use the estimates of the variance and the first-order autocovariance to derive the parameter m1.

This requires extracting it from the equations                                       and                     , which

follow from standard time-series results.41

          The estimation of equation (7.7) can be simplified through the use of near-optimal

instruments as discussed above. Using similar notation, the optimal instruments are predicted

using all predetermined variables, and then these estimated instruments are introduced into the

estimation, yielding:

(7.8) f t(11) = Ûpt-1×( Ût - a1Ût-1 - a2Ût-2 )                                         = Ûpt-1×gt

          f t(12) = Ûpt-2×( Ût - a1Ût-1 - a2Ût-2 )                                     = Ûpt-2×gt

          f t(14) = (Ût - a1Ût-1 - a2Ût-2)2    - F11                                   = gt2 - F11

          f t(15) = (Ût - a1Ût-1 - a2Ût-2)( Ût-1 - a1Ût-2 - a2Ût-3) - F12              = gt×gt-1 - F12

          t = 1983,...,1990.

Stacking these equations to obtain fi (a1, a2, F11, F12) = (f t(11)N, ft(12)N, f t(14)N, ft(15)N)N for t =

1983,...,1990 creates a model of the form of (3.7). When the model tested is ARMA(1,1), the a2

parameter is set to zero and the second moment restriction, f t(12), is unnecessary for identification

and is dropped.

 41
      The quadratic in the equations yields two answers. The convention is to use the root that is less than one in absolute
        value, making the series invertible.

                                                            7-9
7.3.3   Estimators for ARMA Coefficients

        This estimation can be done in several different ways, two of which are mentioned here.

The first is to use a method of moments procedure to relate the ARMA parameters to the sample

mean and autocovariances through the system of moment restrictions as given in equations (7.6)

and (7.8). The equations are estimated with a constant as the only instrument specified for the

software. This gives consistent results with asymptotically valid standard errors and covariances.

        The second method is similar; the researcher uses nonlinear three-stage least squares with

a constant as the only designated instrument. This also produces asymptotically valid results.

Note that the “real” instruments are embedded in the equations to be estimated and differ from

equation to equation. Thus the researcher instruments manually instead of using software

commands to designate an instrument set. Reported below are estimates from the method-of-

moments approach.



7.4     Empirical Findings for ARMA Estimation

        Turning to the results, Tables 7.2 and 7.3 present estimates for the two candidate ARMA

specifications generating the individual error terms in wage growth. Results are unweighted and

standard errors are given in parentheses. This subsection will discuss each table in turn. The

goals are to compare the specifications to see which better fits the data and to determine how

robust the results are across models.

7.4.1   Estimates of Only Autoregressive Coefficients

        Table 7.2 presents the coefficient estimates for the autoregressive component of the

ARMA(1,1) and ARMA(2,1) models specified by equation (7.6). Recall that equation (7.6)

estimates only the autoregressive parameters of each ARMA model. Looking at the ARMA(1,1)


                                              7 - 10
specification, estimating just a1 gives a smaller coefficent in magnitude than when a2 is not

constrained to be zero, -0.134 vs. -0.189. So from year to year approximately 13 to 19 percent of

the residual variation in wage growth is undone the following year through the autoregressive

parameter. In terms of their sampling distributions, the two estimates are several standard

deviations from 0 and so the effect is significantly different from zero.

         The ARMA(2,1) specification reports an estimate for the a2 parameter. The estimate is

negative and small. The a2 estimate, -0.024, cannot be statistically distinguished from zero,

despite the fact that the standard errors are tighter than those reported on the a1 coefficient.

Regardless, the value indicates that if there is a second-order term it is probably negative and

small.

7.4.2    Estimates of Autoregressive and Moving-Average Coefficients Jointly

         Table 7.3 reports the results from the joint estimation of the autoregressive and moving-

average coefficients as specified by equation (7.8) in Section 7.3.2. The first four columns are

self-explanatory in that the parameters listed appear directly in Equation (7.8); the last two

columns are delta method extrapolations of moving-average parameters. These columns give

both the implied standard deviation of the white noise process, F, and the coefficient on the first-

order moving average, m1.

         The results are similar, in some respects, to what was observed in Table 7.2. The first-

order autoregressive parameter a1 is reported as -0.151 in the ARMA(1,1) and -0.186 in the

ARMA(2,1). These estimates are close to one another and close to the estimates found when just

the autoregressive parameters were estimated. The a2 parameter in the ARMA(2,1) model looks

almost exactly as it did when only the autoregressive parameters were estimated. It remains

small and statistically indistinguishable from zero.


                                                7 - 11
       Turning to the covariance terms, the table shows that both specifications return stable and

precisely estimated results. The F11 coefficient is about 0.13 and the F12 coefficient is almost half

as large at about -0.06. The standard errors on these estimates are small, providing confidence of

a reasonably good estimate. Notably, the F12 estimate is clearly not zero, reinforcing the

hypothesis that there is a first-order moving-average process. From these two parameter

estimates one can get the implied estimates for the standard deviation on the white noise process,

F, and the coefficient on the moving average component, m1. Using linear extrapolation (the

delta method) one can also compute an asymptotic approximation for standard errors. The

reported coefficient on F is about 0.3 in both specifications. For m1, the two specifications return

values of -0.645 and -0.686 respectively. The standard error is less than 0.03 in the ARMA(1,1)

but 0.044 in the second. Regardless, both procedures find evidence of what previous analysis of

the covariogram indicated – a large negative first-order moving average.

       In summary, the data strongly support the hypothesis of serial correlation in the error

terms. The first-order autoregressive component is somewhere between -0.13 and -0.19. The

moving-average parameter is between -0.6 and -0.7. The second-order autoregressive lag is

probably slightly negative but cannot be distinguished from zero. Looking back to the

covariogram in Table 7.1, these parameter estimates easily account for the large negative

correlation between wage residuals in adjacent years. They also fit with the observed lack of

correlation beyond the first lag.



7.5    Bootstrapping ARMA Models Using Panel Data

       This discussion very briefly presents findings illustrating the consequences of utilizing

bootstrap procedures to fit the two models considered above. The goal is to compare the


                                               7 - 12
standard errors calculated by classical first-order normal asymptotic theory and those computed

by the residual resampling method. This section illustrates the bootstrapped version of the

method-of-moments estimator considered above.

7.5.1   Estimates with Bootstrapped Standard Errors

        There may be some doubt as to the effectiveness of using first-order asymptotic theory as

a guide to constructing standard errors. As always, the asymptotic theory offers only a guideline.

At times there is reason to question the validity of this guideline. This may be because the model

was misspecified or because the sample is too small to be well-approximated by its large-sample

distribution. One can cross-check the validity of the asymptotic approximation by comparing it

to a bootstrapped estimate. Instead of relying on a linear extrapolation at infinite sample size to

guide standard error calculation, one assumes that the sampled data is representative of the

population density, and thus can be used to evaluate the sampling distribution of the estimators.

        No special techniques are required to produce these results. Bootstrapping begins with the

residuals first described in Subsection 7.2.1 and used in Subsection 7.4 to estimate the ARMA

processes. Each individual’s set of residuals is given an equal probability of being drawn with

replacement. To preserve the serial correlation, the resampling is done over the individuals, not

over each year of each individual. The sample consists of 959 individuals, so 959 draws are

made in each resample. 1000 resamples are performed and equations (7.6) and (7.8) are

estimated, for both the ARMA(1,1) and the ARMA(2,1) specifications. These 1000 estimated

coefficients are used to create a sampling distribution for each estimator. The standard deviation

of these 1000 coefficients is the standard error for the estimator. The following subsection

compares the asymptotic standard errors reported in tables 7.2 and 7.3 to those implied by the

bootstrap procedure. Once again, the estimation is performed on the unweighted sample.


                                               7 - 13
7.5.2     Implications of Bootstrap Estimates

          Table 7.4 reports comparisons for specifications of equations (7.6) and (7.8) estimated in

Section 7.4. It first estimates the subset of autoregressive parameters as in equation (7.6), and

then adds the covariance parameters as in equation (7.8). Each specification lists the previously

developed asymptotic estimation results and is immediately followed by the bootstrap results.

          All of the standard errors are wider for the bootstrapped sample, typically – although not

always – on the order of 25 percent. Thus the asymptotic standard errors are biased downwards

for this sample size. Turning to parameter estimates, when the autocovariance terms are

estimated alone, the bootstrap gives results that are very close to the original estimates. When

the joint system is estimated, the bootstrapped a1 and a2 parameter estimates move noticeably.

The largest effect is for the a1 parameter estimate in the ARMA(2,1) model. It goes from -0.186

in the method-of-moments routine to a bootstrapped estimate of -0.117.42 Unsurprisingly, the

standard error doubles. Note that the bootstrapped estimate of a1 is still close to the original

range of -0.13 to -0.19 observed in the original data, but it has jumped from the high end to the

low end. The estimates for F11 and F12, on the other hand, are fairly stable.43



7.6       Results Based on Balanced Versus Unbalanced Data

          Practitioners of econometrics often are confronted with thorny problems stemming from

data collection. Although these problems do not draw as much attention in the literature as other,

more provocative subjects, they can have a large effect on the estimates’ validity. This

 42
      These large changes are possible when one is dealing with a nonlinear estimation method such as the one used here.
        But the magnitude of the change is cause for wonder. Preliminary data research uncovered several large outliers,
        which are not unusual in sample data, especially when they have been first-differenced. This leads to an
        extremely fat-tailed distribution for the residuals. This could make the 4-equation system (7.8) vulnerable to
        outliers due to its squared term. These vulnerabilities were apparently uncovered in the bootstrap estimation.
 43
       For a comprehensive and enlightening discussion of the issues involved in bootstrap estimation, see the Handbook
        chapter by Horowitz (2001).

                                                         7 - 14
subsection and the next deal with a brief application of the two data issues discussed in Section

6: unbalanced data and stratified sampling.

          The first concern, unbalanced data, stems from the fact that many sampled units (in this

case, people) do not have data in one or more years of a panel dataset. One could assume

random attrition (which probably is not true but is very convenient) and form estimates using just

those people having all observations.44 This ignores potentially valuable information. In the

PSID sample utilized thus far, roughly a third of the observations were dropped due to

incomplete data over the sample period. Subsection 7.6 looks at how one might conveniently

estimate the covariogram for the PSID data using an unbalanced sample.

          Subsection 7.7 looks at stratified sampling weights. Datasets frequently oversample

certain groups in order to provide researchers with a more detailed picture of a small segment of

the population. This oversampling destroys the randomness of the sample and, as noted in

Section 6, requires some care in correcting. Section 7.7 will give an example correctly using the

stratified sampling weights by designating them as instruments.

7.6.1     Estimates with Unbalanced Data

          Researchers prefer to use all the data available to conduct an empirical analysis to

enhance the efficiency of estimation. For this reason, many would like to recapture the

information contained in observations that do not have data for one or more years of the sample.

          The seemingly unrelated regression method used in Section 7.2 requires complete data,

i.e., the dataset must be balanced. This has the unfortunate result that one must throw out

observations that contain all the necessary information but are missing even just one year.

Section 6.6 details a method to recover this lost information while staying within the simple

 44
      Fitzgerald et al. (1998) in an analysis of PSID attrition concludes that use of the available weights maintain the
        representativeness of the survey.

                                                            7 - 15
seemingly unrelated regression framework. Applying this method assigns a zero person-year

weight to those person-year observations that are missing and proceeds with estimation as if the

data were balanced. This amounts to replacing the entire equation for the person-year by zero.

In conducting this estimation, the procedure formulates weights – or adjusts stratified sample

weights if they are used in the analysis – for the remaining observed data to reflect the number of

missing observations associated with each equation.

          As discussed in Section 6.6.3, an additional correction is necessary to perform

multivariate, multi-equation tests when using unbalanced data. The off-diagonal elements of the

sample covariance matrix require the correct denominator. Working from the formulas already

used to correct the variance terms,45 multiply the i,j element of the cross-equation covariance

matrix by the square roots of the number of available observations in equation i and the number

of available observations in equation j, then divide by the number of common observations

between i and j. This corrected covariance matrix can then be used to test the weak stationarity

hypothesis first discussed in Section 7.2.

7.6.2     Implications of Estimating with Unbalanced Data

          Table 7.5 presents estimates of the covariogram when using the unbalanced data. Its

format is the same as Table 7.1. The zero-order variance term is larger at 0.162. The higher

order terms also tend to be larger so that the autocorrelation terms are very close to what they

were in Table 7.1. Instead of the first-order autocorrelation of -0.37, the unbalanced sample

reports the slightly weaker -0.35. The second order term was -0.05 in the balanced data but now

is -0.04. Regardless, the inferences made in Subsection 7.2 are unchanged. The tests of weak

stationarity all fail to reject at a 5 percent significance level, if only barely. Thus, there is room to

 45
      Recall that since each equation estimates a single parameter, the mean, the cross-equation covariance system is
        exactly the same size as the unrestricted coefficient covariance matrix.

                                                          7 - 16
doubt the assumption, but not nearly enough evidence to overturn it.



7.7     Results Based on Weighted Versus Unweighted Data

        Up to now this section has ignored the implications of weighting stratified samples like

the PSID. Section 6 explained some of the difficulties that can arise in properly weighting

stratified samples. In this subsection there is a short discussion of how the principles outlined in

Section 6 apply to the estimation done here.

7.7.1   Estimates with Stratified Sample Weights

        Several statistical packages offer a weighting option in their estimation routine. Usually

this is the standard weighted least squares procedure designed to account for heteroscedasticity.

If a researcher uses weighted least squares to calculate standard errors, the package premultiplies

the regressor and the regressand by the square root of the weight and then proceeds with the rest

of the estimation as usual. In the linear case it reports estimator variances of the form

               where                    and S is a diagonal matrix with the weight wi for each

observation on the diagonal. This is correct if the weighting is designed to correct for

heteroscedasticity of the form       . It is not correct for the case of a stratified sample. The

general framework is outlined in Section 6. The proposed solution when using instrumental

variables techniques is to premultiply the instruments by the weight wi (making sure that the

weight is properly normalized). When one is estimating with the method outlined in Subsections

7.3 and 7.4 (where the only instrument is a constant) one could simply designate the stratified

sampling weights as the instruments. These new instruments will impose the correct weighting

for consistent estimates and will yield asymptotically correct standard errors. Before giving

results there are two things which should be noted. First, as noted in Equation (6.7), stratified


                                               7 - 17
weights in survey data are often designed to sum to the size of the total population. These wi*

weights can be converted to wi weights by dividing them by their average value. This is the

strategy followed in Subsection 6.3. Thus all weights discussed in this subsection are normalized

weights. Second, as explained in Subsection 6.5, the correct weight to use for all years of the

PSID is the weight given in the last year of the sample, as this weight reflects the longitudinal

changes in the data.

7.7.2     Implications of Stratified Sampling Weights

          Tables 7.6 and 7.7 redo the estimation of Subsections 7.2 and 7.4 using the balanced data

and sample weights from 1990. Table 7.6 is the covariogram and is designed the same as Table

7.1. The methodological difference is that in the seemingly unrelated regression framework used

to construct the covariogram, the dependent variable was premultiplied by the weight for 1990.46

One could obtain the same result by switching to a three-stage least squares framework and

designating the weight as the only instrument.

          The results are quantitatively different but the implications are identical. The variance

(zero-order autocovariance) falls from an unweighted value of 0.13 to a weighted value of 0.11.

All the other terms tend to be proportionately lower and so the autocorrelations are almost

identical to the unweighted sample. Thus, the ARMA(2,1) and ARMA(1,1) models are still the

best candidate specifications.

          Table 7.7 gives the weighted estimates for ARMA(1,1) and ARMA(2,1) specifications.

The estimation is done using the same method-of-moments routine previously described. The

only methodological difference between the two estimates (besides different sample sizes) is that


 46
      Normally, one weights the entire moment condition. But when the only regressor is a constant the desired result can
       also be achieved by simply weighting the dependent variable. This convenient result turns on the fact that the
       weights are normalized to have an average value of one, thus they drop out of terms where they are multiplied by a
       constant.

                                                         7 - 18
the previous estimation programmed the statistical package to use a constant as the only

instrument. The weighted estimation is done by designating in the statistical package the 1990

weights as instruments (which is the same as using a constant as an instrument but multiplying it

by the weight).

       The same balanced data are used here as were used in Subsections 7.2 and 7.4, but this is

somewhat misleading. The PSID assigns zero weights to many people in the sample for certain

years, so the effective sample size for weighted regression falls from 959 to 720. Thus, there

should be a slight widening of standard errors attributable to this sample size effect. Indeed, the

weighted sample does have larger standard errors than the unweighted sample.

       Looking first at the results for the ARMA(1,1) model, the a1 parameter estimate is

reasonably close to its unweighted value. Estimated alone or with the moving-average

parameters it is about -0.11. In the joint estimation based on system (7.8), the covariance

parameters are slightly lower in magnitude than in the unweighted sample and this shows up in a

moving-average parameter of -0.598. This is only slightly smaller in magnitude than the

estimates in the unweighted sample.

       The most noteworthy difference from weighting is the effect that it has on the

ARMA(2,1) model autoregressive coefficient estimates. While estimation of just the

autoregressive parameters (system (7.6)) gives similar results to those in Table 7.2, the

coefficients change significantly when estimation includes the covariance parameters. The

largest change shows up in the a1 coefficient that moves from -0.186 to -0.062. This is beyond

what one would expect and resembles the jump encountered in the bootstrap estimation, where

the a1 parameter in the full estimation also proves to be sensitive. Other parameter values do not

change as much; the a2 coefficient is of opposite sign but remains insignificant. The variance and


                                               7 - 19
autocovariance terms are both slightly lower in magnitude than earlier estimates. This leads to

lower values of F and m1, 0.29 and -0.59. The unweighted estimates are not consistent for the

same values as the weighted population and so there is no reason to expect them to be the same,

but the joint estimation does appear to be sensitive to minor changes.



7.8       Results Based on Median Regressions

          The above empirical exercises investigate trends in mean wages, which involve the use of

regression analysis. Such estimation techniques, of course, suffer from the fact that individual

observations have unbounded influences upon the regression. Coding errors, reporting errors,

and other anomalous events can have large effects on the estimated coefficients. Such outliers

might induce the sensitivity of the autoregressive parameters uncovered in the bootstrap and

weighted estimators. Consequently, one might wish to consider bounded influence methods, such

as median regression.47

          Section 5 offers a convenient approach for estimating a smoothed version of median

regression using standard nonlinear equation methods discussed in Sections 3 and 4. This

subsection illustrates the use of these quantile regression procedures to estimate the parameters of

the ARMA process governing the error structure of equations like (5.1). The models estimated

below modify the specifications considered in Subsection 7.3 to estimate the error structure of

(7.1). As such, although the computational problems of quantile regressions may involve a

somewhat heavier burden due to their nonlinearities, the specifications are still relatively simple

to implement.

          An important difference between the estimation procedures outlined in Subsection 7.3

 47
      As discussed in Subsection 5.2.2, one might also wish to use this type of estimator at several percentile points to
        better characterize the entire wage distribution (see Moshinsky (1994) for an example).

                                                            7 - 20
and those outlined below is that the researcher cannot use residuals Ût instead of Tt to simplify

the estimation. Equation (5.1) specifies an equation where Tt (= yt ) depends on its own past

values and a set of exogenous Xt’s. Using mean regressions, as in Subsection 7.3, allows the

researcher to estimate the error structure using the estimated residuals from regressing Tt on the

Xt’s, due to the applicability of Proposition 4.1. This simplification cannot be used here – the

smoothed median regression wraps the parameters into a cdf function M, and this nonlinearity

leads to a violation of Proposition 4.1. Thus, median regressions require joint estimation of $

and the a’s.

        The theory in Section 5 does not consider moving-average processes. Although it is

possible to estimate a median version of equation (7.8) when such a process is present – see

Subsection 7.8.3 below – it is not entirely clear how the additional moving-average parameters

are to be interpreted. Estimates are no longer consistent for autocovariances, but are instead

consistent for some ‘median’ version of the autocovariances. Additionally, the easiest median

specification requires assuming that, after accounting for the autoregressive component, the

errors are uncorrelated across time. To illustrate this simple technique, this subsection starts with

a purely autoregressive process even though the evidence presented above supports a moving

average component. Given this focus, the estimation allows for the existence of a third

autoregressive lag (ARMA(3,0)), instead of just the first- or second-order models already

considered.

7.8.1   Single Equation Estimation of a Strictly Autoregressive Model

        Subsection 5.2.1 outlines two approaches for estimating quantiles with panel data. The

first and simplest assumes that error terms are independently distributed after one accounts for

the autoregressive process. The second, using a system of equations, does not require this


                                               7 - 21
assumption for efficiency or correct inference.

          For the sake of illustrating the first approach, assume the data satisfy an ARMA(3,0) type

process. Thus, one can consistently estimate coefficients using a structural equation analogous to

(5.8), which implies the following form for gt :


(7.9)                                                                                                                 ,


where the Tt’s and the Xt’s are defined in Subsection 7.1. To estimate the median, set "k equal to

0.5, and the smoothing parameter SN equal to 0.03.48 M is the standard normal cdf. The sample

used to estimate equation (7.9) consists of multiple years stacked as multiple observations. Thus,

the sample size equals the number of people multiplied by the number of years in the panel.

Setting f ti = g ti in equation (3.7) and using functions of the Xti’s and all past values of Tti as the

instrumental variables in formulating the Qti’s in (3.8), one can apply nonlinear two-stage least

squares (N2SLS) to estimate the structural and autoregressive parameters of equation (7.9).49 If

one suspects the structural errors g ti are heteroscedastic, then one can select a robust option when

computing standard errors.

          As an alternative for increasing estimation efficiency, Subsections 3.1.4, 3.2.2 and 4.1.4

outline the development of optimal instrumental variables. In the case considered here, due to

the use of the normal cdf, the optimal instrument for a1 takes the form


(7.10)



 48
      Setting SN to other small values does not change the findings in any substantive way.
 49
      Note that all lagged values of T t are predetermined since the model assumes there is no serial correlation beyond the
       autoregressive process already accounted for. Although one can use all past values of T t, a subset of early lags
       would also provide consistent estimates and may be more manageable to program and estimate. The important
       thing is to use instruments that provide the best predictive power while being uncorrelated with gt.

                                                           7 - 22
where N is the standard normal density. Designating ( = (a1, a2, a3, $), optimal instruments for

each element of ( look similar; they are the standard normal density multiplied by the

appropriate regressor. For (7.10) to constitute optimal instrumental variables in estimation

requires structural errors, defined by gti in (7.9), to exhibit homoscedasticity across observations t

and i. Given the nonlinear form of gti and its direct functional dependence on Xti , satisfaction of

this homoscedasticity assumption may be dubious.

          Unfortunately, the expectations in (7.10) are unobserved and must be estimated. Given a
consistent set of parameter estimates                                   , form the estimated analog of (7.10),

             , the gradient vector of gt, for each observation. To estimate an approximation for

(7.10), regress                 on flexible functions of the Xt’s and all past values of Tt .50 Call the


fitted value of this regression                      ; this quantity corresponds to the predicted value or

projection of                  conditioning on all exogenous and predetermined variables.


          Using the                  in place of the Xti’s and past values of Tti as the instrumental

variables in the application of N2SLS offers an alternative approach for estimating coefficients of

equation (7.9). This method improves efficiency in estimation assuming the g ti’s are

homoscedastic across observations. As recognized in 2SLS theory, if one were to use a series of

flexible functional forms in the Xti’s and past values of Tti , then one would expect little gain in

efficiency in using the quantities                       even with homoscedasticity since these functions

would effectively span the space of these projected gradients.

          The first row of Table 7.8 reports the results of estimating equation (7.9) using the

optimal instrument set. The three autoregressive parameters are all large and significantly

 50
      Due to the nonlinearity in gt,, the researcher might get better results by adding interactions and higher powers of the
       X t’s and lagged T t’s.

                                                            7 - 23
different from zero with point estimates of -.397, -.225, and -.112. Note that these estimates are

not necessarily consistent for the same coefficients estimated using mean regression, as these

parameters are consistent for medians, not means. Regressed around the median, the

autoregressive lag is much longer than its mean counterpart. The standard errors are all quite

small, less than .02. So the smoothed median regression in this case appears to give precise

results. Of course, these standard errors are constructed under the classical hypothesis of serially

uncorrelated, homoscedastic error terms.

         To check the validity of the asymptotic standard errors, Table 7.8 reports bootstrapped

standard errors as well. The bootstrap, done in a manner similar to that in Subsection 7.5, yields

identical standard errors to the asymptotically approximated errors. Note that this bootstrap

maintained the assumption of independence over time and so sampling was done on person-

years, not on individuals; these bootstrapped standard errors and the estimates are inconsistent if

there is serial correlation after accounting for the autoregressive process.

7.8.2    System of Equations Estimation of a Strictly Autoregressive Process

         While maintaining the assumption of an ARMA(3,0), one can conceptually improve the

efficiency of estimation by allowing for heteroscedasticity in structural disturbances across years

for individuals. Moreover, one can allow for the possibility that coefficients are nonconstant

over time. Instead of treating each person-year as an observation in equation (7.9), one stacks

these equations into a multiple equation system and treats each person as an observation of this

system. This approach amounts to formulating a variant of fti given by (5.11), relying on

Proposition 4.2 to compute estimates of the structural and autoregressive parameters of equation

(7.9).

         When using functions of the Xti’s and all past values of Tti as the instrumental variables,


                                                7 - 24
the procedure specifies the components of the f ti’s as

(7.11)           ft (17) = gt

                 ft (18) =      × gt       k = 1,...,(t-1984)                t = 1984,...,1990,

where gt is defined in equation (7.9) with           calculated using equation (5.10). Stacking these

equations across years to obtain fti (a1, a2, a3, $) = ( fti (17)N, f ti (18)N)N produces a model in the form

of equations (4.9) and (3.7). Estimation specifies all the elements of the Xti’s as instrumental

variables comprising Qi appearing in (3.8).

         One can again in principle achieve improved efficiency by exploiting an optimal set of

instrumental variables given by (7.10). Approximating these quantities by the projections

             discussed above, this use of instruments implies that one calculates               appearing in

(7.11) using equation (5.10) with                 replacing the dependent variables Tti and with Qi,

including a flexible set of quantities involving the Xti’s providing for accurate approximations of

the expected values of the gradients. Note that the vector                     varies for each year, and is

predicted with an ever-expanding set of predetermined values of Tt; therefore the researcher

cannot simply designate all the instruments as applying to all of the years. For example,

                is predicted using T1985 , which is correlated with g1985 . So                      cannot

serve as an instrument for the g1985 equation. If one were to introduce a full set of optimal

instruments, then there will be as many           terms/equations in (7.11) for any given t as there

exist parameters in the dynamic median equation (7.9). Attaining improved efficiency requires

application of transformation (3.20) and the assumption of homoscedasticity across persons.

Admittedly, the validity of this assumption may be suspect in light of the nonlinear character of

the structural equation (7.9).

         If one is not intending to attain full efficiency, then one can include only a subset of the


                                                    7 - 25
     terms/equations in (7.11) associated with selected elements of               . To avoid having

to include predetermined variables among the instrumental variable list used in estimation, a

natural selection would be to include the terms corresponding to the elements linked to the

autoregressive coefficients a1, a2 and a3. The remaining parameters are identified through the

incorporation of all the Xti’s among the instrumental variable Qi.

       Depending on the assumptions maintained concerning the homoscedasticity of structural

errors across individuals, nonlinear three-stage least squares (N3SLS) or method of moments

(MM) offer procedures for estimating the structural and autoregressive coefficients of the

dynamic median given by equation (7.9). If one believes that errors are heteroscedastic, then use

of the optimal weighting matrix in MM will increase efficiency over the single equation system

estimated in Subsection 7.8.1. In the empirical illustration considered here, estimation relies on

N3SLS and the variance-covariance matrix of the system of equations is assumed to satisfy

homoscedasticity across individuals.

       Row 2 of Table 7.8 reports the results from the application of N3SLS estimation of

equation system (7.11) with        terms/equations incorporated corresponding to the D1, D2 and D3

components of              . Instrumental variables include all the exogenous variables Xi .

Whereas the estimated value of a2 in this row is similar to the findings obtained in the N2SLS

estimation based on the single equation case discussed above, the estimate for a1, at -0.463, is

much higher in magnitude, especially given the tight standard error reported of 0.005. The a3

coefficient drops to -0.065.

       To examine the robustness of the standard errors, Table 7.8 also reports bootstrap

standard errors. This bootstrap is done by sampling over the 959 individuals in the sample to

preserve serial correlation. All three bootstrap standard errors are three times larger than their


                                                7 - 26
asymptotic counterparts, moving from around 0.007 to 0.024, implying that the asymptotic

standard errors are misleading.            Theoretically, (7.11) should be consistent for the same values

as the estimation in Subsection 7.8.1, and may be more efficient. This requires the researcher to

consider two questions. Why do these estimates from the system of equations not appear to be

converging to the same value as those estimated in Subsection 7.8.1? And why are the standard

errors reported on the supposedly more efficient procedure far larger?

          The marked change in the parameter estimates may indicate misspecification.

Specifically, if there is correlation across time in the gt terms, then the first lagged residual, Tt-1,

is likely to be correlated with gt, leading to inconsistent estimates. In this case the researcher

should consider another specification - such as an ARMA(3,1).

          Although the bootstrap standard error estimates are larger for the system of equations

than for the single-equation estimation, this is expected because the standard error estimates in

Subsection 7.8.1 assume classical errors and are wrong in the presence of heteroscedastic errors

or serial correlation. But the bootstrap standard errors reported in Subsection 7.8.1 are consistent

under heteroscedasticity and they are identical to their asymptotic counterparts; thus the

differences between the standard error estimates in Subsections 7.8.1 and 7.8.2 are probably due

to serial correlation. Subsection 7.8.2 imposes neither heteroscedasticity nor independence in

computing standard errors.51 Thus it is not surprising that the more efficient estimation reports

larger standard errors, because the asymptotic standard errors calculated in 7.8.1 make much

stronger assumptions. Given these findings, the researcher should consider another specification,

such as an ARMA(3,1), that is still consistent under the assumption of first-order serial

correlation.

 51
      Serial correlation would make the parameter estimates inconsistent due to the presence of correlated instruments, but
        the standard errors for these estimates would be correctly estimated.

                                                          7 - 27
7.8.3   Estimation of Autoregressive Coefficients Allowing for a Moving Average Component

        If the researcher wishes to allow for a first-order moving-average type process to be

present in a quantile regression specification, then the system of equations introduced in

Subsection 7.8.2 can be used to estimate autoregressive parameters with a slight modification.

Under the assumption of an ARMA(3,1), the approaches in Subsections 7.8.1 and 7.8.2 are

inconsistent because they treat the first lag in wage growth, Tt-1, as a predetermined variable

when in reality it is correlated with gt.

        Conceptually, a researcher could increase efficiency by using optimal instruments as in

Subsection 7.8.2. In this case one would compute               from a least squares prediction of

          using a flexible set of regressors depending on Xi and all the predetermined values of

Tt (i.e., Tt-2 and those farther back). These predictions would then be used as described in

Subsection 7.8.2.

        Row 3 of Table 7.8 reports the results of N3SLS estimation of equation (7.11) with

instrumental variables incorporating the exogenous variables Xi’s. The change in identifying

assumptions does affect the estimates. The a1 and a2 parameter estimates are larger in magnitude

than in the single equation procedure of Subsection 7.8.1: -0.637 vs. -0.397 and -0.308 vs. -

0.225. The a3 parameter, -0.131, is also larger in magnitude than it was in Subsection 7.8.1 or

Subsection 7.8.2. These final estimates are consistent under heteroscedasticity and even under

one-period serial correlation in the error terms.

        Although the asymptotic standard errors imply minuscule confidence intervals, a

bootstrap performed in the same manner as in the last subsection reveals standard errors that are,

as before, three to five times larger than the asymptotically approximated standard errors. For

example, the a1 standard error estimate is 0.014 under the asymptotic approximation, while the


                                                7 - 28
bootstrap approximation is 0.069. Thus the asymptotic standard errors are not correctly

approximating the small sample distribution. Note that these bootstrap standard errors are larger

than those that resulted under the ARMA(3,0) assumption. This is expected as Tt-1 is an

important part of the identification strategy followed in Subsections 7.8.1 and 7.8.2.

       Although the median regression estimates do shift somewhat in response to assumptions

about the specification, the qualitative implications are robust. The coefficients on the

autoregressive parameters are about -0.40, -0.22, and -0.11. All three coefficients are statistically

non-zero under either standard error estimate for all specifications. After adjusting for schooling

and age, the average worker’s wage growth is typically low in the years following a high growth

year, and high in years following a low growth year. This is the same implication found using

mean regression, but the autoregressive effect is stronger in medians than in means.



7.9    Summary of Findings

       The above empirical example characterizes the dynamic properties of hourly wages of

men using the estimation procedures for time series models applied to panel data as described in

Sections 3 and 4. Estimates of the covariogram associated with specification (7.1), and the

autocorrelation coefficients implied by those estimates, accept the hypothesis of weak stationarity

of the data. In addition, the sharp drop in the absolute value of the autocovariances after the first-

order implies the existence of a first-order moving-average process. The gradual decline of the

autocovariances of the second order and above also suggests a short autoregressive process. As a

result, the mean regressions focused on estimating the autoregressive and moving average

components of ARMA(1,1) and ARMA(2,1) time series processes in the errors.

       Subsection 7.3 described procedures for estimating the autoregressive parameters alone


                                               7 - 29
and in conjunction with the moving-average parameters for the ARMA models implied by the

results of Subsection 7.2. The pattern that emerges from Tables 7.2 and 7.3 is that the

ARMA(1,1) specification fits the data better than the ARMA(2,1) specification does. Estimates

of the first-order autoregressive parameter were similar across all versions of estimation,

implying that 13 to 19 percent of residual wage growth dissipates the next year through the

autoregressive parameter. The estimates for the second-order autoregressive parameter were

small with standard errors of the same magnitude, leading to the conclusion that the ARMA(1,1)

model fits the data better than the ARMA(2,1) does. Estimating the autoregressive parameters

jointly with the moving-average parameter did not have any significant effect on the estimates of

the autoregressive parameters and the moving-average parameters were tightly estimated. The

first order moving-average parameter had a coefficient of about -0.65, implying that residual

wage growth in one year typically reverts about halfway back in the next year.

       Reliance on classical asymptotic standard errors for samples sizes as small as 1000 can

potentially lead to overconfidence in one’s inferences. The bootstrap standard errors calculated

in Subsection 7.5 show that this is the case for the ARMA models estimated in Subsection 7.4.

Specifically, bootstrap standard errors were larger than the classical asymptotic standard errors in

all cases, and typically were about 25 percent larger. The second-order autoregressive parameter

remained statistically indistinguishable from zero, and despite these changes the first-order

autoregressive parameter remained statistically different from zero in all but one case. The

bootstrap estimate of the first-order autoregressive parameter from the joint estimation of the

ARMA(2,1) procedure is significantly smaller than that given in Table 7.3. Viewed in light of

the results of Subsection 7.7, it appears as though joint estimation of the ARMA(2,1) process is

sensitive to changes in the procedure used.


                                               7 - 30
        The use of a balanced set of data in a panel context often requires that the researcher

throw out individuals who do not have observations for every year of the sample. Subsection 7.6

re-estimates the covariogram and the autocorrelation coefficients associated with it using an

unbalanced version of the data. Although comparisons of Table 7.5 with Table 7.1 show some

difference in the estimates of the autocovariance parameters, the estimates presented in Table 7.5

still lead to the same conclusions: acceptance of the hypothesis of weak stationarity and the

existence of a first-order moving-average process accompanied by a short autoregressive process

in the errors.

        Subsection 7.7 repeats the estimation reported in Subsection 7.2 and 7.4 while accounting

for the stratified sampling of the data through weighting. The relatively few quantitative or

qualitative differences in these estimates should not be taken as an indication that weighting for a

stratified sample is unimportant. For the particular PSID sample used here, Table 7.6 shows that

weighting for the stratified nature of the data changes the covariogram quantitatively, but none of

the qualitative conclusions change; the hypothesis of weak stationarity is maintained, as well as

the existence of a first-order moving-average process and a short first- or second-order

autoregressive process. Using the stratified sample weights to estimate the autoregressive

parameters alone led to little change quantitatively or qualitatively versus the unweighted

estimates. The weighted first-order autoregressive parameter estimates from the ARMA(1,1) and

ARMA(2,1) models imply that 11 to 18 percent of residual variation in wage growth is undone

the next year through the autoregressive parameter, as opposed to 13 to 19 percent for the

unweighted counterpart. The weighted second-order parameter estimate for the ARMA(2,1)

model remains small and insignificant.

        Joint estimation of the autoregressive and moving-average parameters using stratified


                                               7 - 31
sampling weights does lead to some important changes. Although the joint estimates of the

ARMA(1,1) coefficients using weights are similar to those from the unweighted procedure, the

joint estimates for the ARMA(2,1) model are different. Specifically, the estimate of the first-

order autoregressive parameter is 1/3 the size of any of the other ARMA(2,1) specifications, with

a standard error that implies that the estimate is statistically indistinguishable from zero. In

conjunction with the results of the bootstrap estimates of Subsection 7.5, it appears that joint

estimation of the ARMA(2,1) process is sensitive to changes in the procedure used.

       Turning to the median regressions, one can limit the sensitivity of the estimation to

outliers in a tractable way by using the techniques developed in Section 5. This smoothed

median regression estimator can be done with one equation or several, and can be thought of as a

fairly standard nonlinear optimization problem. The estimation revealed a three period lag in the

autoregressive parameters with coefficients of -0.397, -0.225, and -0.112 respectively. Single

and multiple equation techniques are illustrated, both of which can be estimated using standard

techniques of two and three stage least squares or method of moments. The single equation

estimator reports identical standard errors under asymptotic and bootstrap approximations. The

same cannot be said for the system of equations methods that use an optimal weighting matrix.

Judging from the bootstrapped standard errors, the asymptotic standard errors reported here

under report the true variance in the sampling distribution by a factor of three.

       The techniques executed above show how to apply fairly sophisticated methods of

estimation within a very simple estimation framework. Any software package capable of

estimating a nonlinear system of equations (preferably with instrumental variables, although this

is not required) should be able to perform all the techniques introduced here. The standard errors

reported by these routines are asymptotically valid.


                                                7 - 32
       Bootstrapped standard errors indicate that the asymptotic estimates may be a useful guide,

but could deviate substantially from the true values. This is especially true in a median

regression of systems of equations where one uses an optimal weighting matrix. Thus, there is a

potential gain from bootstrapping estimates in systems of equations.




                                              7 - 33
                        8. Summary and Concluding Remarks


        The goal of this chapter has been to present a unified set of estimation methods for fitting

a rich array of models describing dynamic relationships within a longitudinal data setting. The

chapter is motivated by the principle that, whenever possible, these methods should rely on

routines available in familiar software packages to make them accessible to a broad range of

practitioners. The discussion covers both the empirical specifications and estimation methods

applicable in a wide variety of longitudinal analyses. The exposition motivates approaches by

considering applications aimed at characterizing the intertemporal properties of wages and

earnings, a research area in which one finds virtually all assortments of longitudinal applications.

In addition to presenting the econometric principles underlying approaches, this chapter

illustrates methods through a series of empirical examples using hourly wages data on men from

the PSID.

        As outlined in Section 2, panel data specifications designed to capture the underlying

sources of micro dynamics experienced by individuals consist of two components: (i) parametric

relationships depicting the links among current, past and future values of measured variables, be

they endogenous, predetermined or exogenous quantities; and (ii) error structures describing the

stochastic properties of disturbances introduced in relationships to account for unmeasured

factors. Nonlinear simultaneous equation specifications provide a general class of models for the

relationships linking measured variables. Especially useful simplifications include dynamic

simultaneous equations models (DSEM) incorporating rational distributed lags that allow

researchers to entertain flexible lag structures having finite or infinite order using short time

series of the sort available in longitudinal data.

                                                 8-1
       Popular formulations for error structures include variants of autoregressive-moving

average (ARMA) processes. In a panel data setting, a researcher enjoys a wider choice of

specifications because distributed lag and ARMA parameters can be permitted to vary freely over

time. Furthermore, error specifications provided by ARMA schemes can be readily extended to

incorporate permanent and random trend error components. Special problems arise in deriving

parameterizations of the variance-covariance matrix associated with ARMA processes in a

longitudinal data setting. These problems pertain to the treatment of initial conditions, which are

particularly troublesome for mixed ARMA specifications. Section 4.3 proposes a general

solution to this problem. The DSEM and these extensions encompass most of the specifications

found in the longitudinal literature.

       The “method of moments” (MM) framework conceptually provides a general approach

for estimating parameters of panel data specifications, and Section 3 outlines the particular

formulations and key asymptotic results relied upon in this framework for computing estimates

and testing hypotheses. The discussion summarizes approaches in the literature for exploiting

predetermined variables as instrumental variables in the MM framework, as well as selecting

instrumental variables that yield the greatest efficiency.

       Section 4 covers several specializations of the MM approach that can substantially

simplify the problem of estimating sophisticated specifications or many equations in a

longitudinal data context. One application includes linear/nonlinear 3SLS procedures, a well-

known special case of the MM framework that yields convenient computational formulas for

large systems of equations. While conventional implementation of 3SLS routines do not permit

use of predetermined variables as instruments, Section 4.1 demonstrates how one can readily

overcome this shortcoming by adding new structural equations to the model while staying within


                                                8-2
a standard 3SLS program.

       There are also considerable advantages to breaking up a longitudinal data estimation

problem into parts, allowing researchers to focus on one part of the model at a time. The panel

data models introduced in Section 2 provide a rich set of specifications, making the task of

choosing among these specifications a formidable endeavor. Not only do they permit flexible

parameterizations relating measured variables, but numerous formulations are available for error

processes; indeed, far more than can be entertained in standard time series analyses. A researcher

rarely knows precisely which parameterizations are consistent with the data, and typically must

invest considerable effort in performing diagnostic procedures designed to narrow model choices.

       In view of this complexity, Section 4 presents a variety of procedures allowing

researchers to subdivide the problem of estimating parameters of sophisticated longitudinal

specifications into a multi-stage approach. One can estimate parameters determining the

autocovariance patterns of errors separately from the structural coefficients directly associated

with measured variables, as well as further separating estimation of parameters of the AR and the

MA components of the error process. In each step, the application of familiar estimation routines

reports valid test statistics that are useful for discovering which parts of a model fit the data

without having to specify all parts together. Moreover, these procedures offer a powerful set of

diagnostic tools useful not only for evaluating the basic features of specifications – such as

identifying the orders of ARMA models consistent with the data– but also for discovering

reliable values for parameters that can serve as starting values for the larger estimation exercises.

       Section 5 considers using conditional quantile regressions to describe the dynamics of

earnings, a set of empirical specifications representing an attractive alternative to DSEMs. The

analysis considers the formulation of quantiles analogous to autoregressive models, including


                                                 8-3
systems of equations permitting one to evaluate how several different percentiles jointly evolve

over time. The section further describes a flexible approach for estimating the coefficients of

autoregressive quantile equations by implementing conventional nonlinear instrumental variable

procedures. Thus, the estimation approaches and issues considered throughout this chapter apply

to computing estimates and test statistics for these dynamic quantile specifications as well.

       Section 6 describes how to incorporate weighting and unbalanced data in the estimation

of longitudinal data models, which is applicable for both linear and nonlinear specifications. The

type of weighting considered in this discussion corresponded to the sort typically provided in

survey data to account for stratified sampling designs implemented during data collection,

designs which produce nonrandom samples. Not only must the construction of weights account

for the stratification of the original sample, this construction must also adjust for the sample

attrition which contributes to a varying sample composition over time. Virtually all survey data

sources contain such weights, and not using them in estimation produces inconsistent estimates

of even basic statistics. Naive use of weighting options available in standard software packages

also generates incorrect calculations for standard errors and test statistics. The discussion

documents how one must modify the MM formula to account for stratified sampling. The

section ends by describing a modified weighting-type procedure enabling one to use conventional

methods to estimate intertemporal specifications with unbalanced data, which are samples

supplying an imperfect overlap in the time periods available for individuals included in the

longitudinal survey. The procedures covered in this discussion also apply to estimating the

parameters of conditional quantile relationships using stratified and/or unbalanced samples.

       To illustrate the estimation approaches covered in this chapter, Section 7 applies many of

the methods in an empirical analysis of the dynamic properties of the hourly wages of men during


                                                8-4
the period 1980-91 using data from the PSID. While this analysis merely provides examples of

methods to highlight critical concepts, comparisons of findings across procedures offers insights

into how various procedures influence results. Estimates of the covariogram using data on

residuals support the hypothesis of weak stationarity for wage growth, with the pattern of

estimated autocovariances and test statistics suggesting that an ARMA(1,1) model adequately

describes the data. Applying procedures that estimate parameters of the AR and MA portions of

this model in separate steps yield values for the coefficients similar to those obtained by joint

estimation of the parameters of the ARMA(1,1) specification.

       The empirical analysis goes on to examine the sensitivity of results to using: (1)

bootstraps to calculate estimates and standard errors, (2) unbalanced data, and (3) weighting to

account for stratified sampling inherent in survey data. According to the findings, bootstrap

standard errors tend to exceed those based on classical asymptotic theory, typically being about

25 percent larger. The calculation of estimates using unbalanced data allows a researcher to

exploit all data available for a person, without requiring deletion of individuals who do not have

observations for every year of the sample. Although results for the balanced and unbalanced data

show differences, both sets of findings still allow acceptance of the hypothesis of weak

stationarity and the underlying presence of an ARMA(2,1) process. Finally, joint estimation of

the autoregressive and moving-average parameters using stratified sampling weights does lead to

substantial changes for some estimates of the ARMA(2,1) model.

       Section 7 also illustrates the estimation of dynamic quantiles, focusing on the

intertemporal variation in medians. The empirical analysis reveals the presence of at least a

three-period lag in the autoregressive structure in the median of wages. The application of

bootstrap procedures yields substantially larger standard errors for the multi-equation estimation


                                                8-5
methods, but not for the single equation approach.

       Other chapters in the Handbook of Econometrics and the Handbook of Labor Economics

offer valuable alternative or complementary discussions of the topics covered here. In the area of

estimation approaches applicable for panel data, Chamberlain (1984) has become a standard

reference, and Arellano and Honoré (2001) provides a thoughtful update of recent developments.

Horowitz (2001) discusses the theoretical underpinnings for the bootstrap procedures pertinent to

the estimation methods described in this study. Variants of the empirical models discussed in

this chapter also appear in the body of work surveyed by Solon (2001), which summarizes what

has been learned from recent research on intergenerational earnings mobility. Beyond the

Handbooks, the textbooks by Hsiao (1986, 2002) and Baltagi (1995) provide comprehensive

reviews of the panel data literature, offering a wealth of references and detailed presentations of

many concepts only touched on in this chapter.

       Econometric developments introduced to analyze longitudinal data comprise one of the

most active research areas in the past three decades. No doubt these developments will continue

since these data constitute the richest sources of information available to economists hoping to

understand a wide range of phenomena. Just as in the past, the study of wage, earnings and

income dynamics will motivate many of these econometric innovations.




                                                8-6
                                         References

Abadie, A. (2000) “Semiparametric Estimation of Instrumental Variable Models for Causal
Effects”, NBER Working Paper No. t0260.

Abadie, A., Angrist, J.D. and G.W. Imbens (1998) “Instrumental Variables Estimation of
Quantile Treatment Effects”, NBER Working Paper No. t0229.

Abbring, J., Heckman, J.J. and E. Vytlacil (forthcoming) “Econometric Evaluation of Social
Programs”, in: J.J. Heckman and E. Leamer, eds., Handbook of Econometrics, Vol. VI.
Amsterdam: North-Holland.

Abowd, J., Crépon, B. and F. Kramarz (1997) “Moment Estimation with Attrition”, NBER
Working Paper No. t0214.

Abowd, J. and D. Card (1984) ‘“Intertemporal Substitution in the Presence of Long Term
Contracts’, Industrial Relations Section, Princeton University, Working Paper No. 166.

Abowd, J. and D. Card (1989) “On the Covariance Structure of Earnings and Hours Changes”,
Econometrica, 57, 411-445.

Ahn, S.C. and P. Schmidt (1995) “Efficient Estimation of Models for Dynamic Panel Data”,
Journal of Econometrics, 68, 5-27.

Ahn, S.C. and P. Schmidt (1999) “Modified Generalized Instrumental Variables Estimation of
Panel Data Models with Strictly Exogenous Instrumental Variables”, in: C. Hsiao, K. Lahiri, L.
Lee, and M.H. Pesaran, eds., Analysis of Panels and Limited Dependent Variables Models: In
Honour of G.S. Maddala. Cambridge, New York and Melbourne: Cambridge University Press.

Ahn, S.C., Y.H. Lee and P. Schmidt (2001) “GMM Estimation of Linear Panel Data Models with
Time-Varying Individual Effects”, Journal of Econometrics, 102, 219-255.

Andrews, D. and B. Lu (1999) “Consistent Model and Moment Selection Criteria for GMM
Estimation with Application to Dynamic Panel Data”, Yale Cowles Foundation Discussion Paper
No. 1233.

Altonji, J.G. and R.L. Matzkin (2001) “Panel Data Estimators for Nonseparable Models with
Endogenous Regressors”, NBER Working Paper No. t0267.

Amemiya, T. (1975) “The Nonlinear Limited-Information Maximum-Likelihood Estimator and
the Modified Nonlinear Two-stage Least-squares Estimator”, Journal of Econometrics, 375-386.

Amemiya, T. (1977) “The Maximum Likelihood and the Nonlinear Three-Stage Least Squares
Estimator in the General Nonlinear Simultaneous Equation Model”, Econometrica, 45, 955-968.

Amemiya, T. (1985) Advanced Econometrics. Cambridge: Harvard University Press.

                                             R-1
Amemiya, T. and T.E. MaCurdy (1986) “Instrumental-Variable Estimation of an Error-
Components Model”, Econometrica, 54, 869-881.

Anderson, T.W. and C. Hsiao (1981) “Estimation of Dynamic Models with Error Components”,
Journal of the American Statistical Association, 76, 598-606.

Anderson, T.W. and C. Hsiao (1982) “Formulation and Estimation of Dynamic Models Using
Panel Data”, Journal of Econometrics, 18, 47-82.

Anderson, T.W. (1971) The Statistical Analysis of Time Series. New York: John Wiley and Sons.

Arellano, M. (1990) “Testing for Autocorrelation in Dynamic Random Effects Models”, Review
of Economic Studies, 57, 127-134.

Arellano, M. and B. Honoré (2001) “Panel Data Models: Some Recent Developments”, in: J.J.
Heckman and E. Leamer, eds., Handbook of Econometrics, Vol. V. Amsterdam: North-Holland,
Ch. 53.

Arellano, M. and S.R. Bond (1991) “Some Tests of Specification for Panel Data: Monte Carlo
Evidence and an Application to Employment Equations”, Review of Economic Studies, 58, 277-
297.

Arellano, M. and O. Bover (1995) “Another Look at the Instrumental-Variable Estimation of
Error-Components Models”, Journal of Econometrics, 68, 29-51.

Ashenfelter, O. (1978) “Estimating the Effects of Training Programs on Earnings”, Review of
Economics and Statistics, 40, 47-57.

Baker, M. (1997) “Growth-Rate Heterogeneity and the Covariance Structure of Life-Cycle
Earnings”, Journal of Labor Economics, 15, 338-375.

Baltagi, B.H. (1995) Econometric Analysis of Panel Data. Chichester: John Wiley and Sons.

Baltagi, B.H., ed. ( 2002) Recent Developments in the Econometrics of Panel Data. Williston:
American International Distribution Corporation.

Baltagi, B.H. and C. Kao (2000) “Nonstationary Panels, Cointegration in Panels and Dynamic
Panels: A Survey”, Advances in Econometrics, 15, 7-51.

Baltagi, B.H., S.H. Song and B.C. Jung (2002) “A Comparative Study of Alternative Estimators
for the Unbalanced Two-Way Error Component Regression Model”, Econometrics Journal, 5,
480-493.

Bekker, P.A. (1994) “Alternative Approximations to the Distribution of Instrumental Variables
Estimators”, Econometrica, 62, 657-682.



                                             R-2
Bergstrom, A.R. (1984) “Continuous Time Stochastic Models and Issues of Aggregation over
Time”, in: Z. Griliches and M.D. Intriligator, eds., Handbook of Econometrics, Vol. II.
Amsterdam: North-Holland, Ch. 20.

Bhargava, A. and J.D. Sargan (1983) “Estimating Dynamic Random Effects Models from Panel
Data Covering Short Time Periods”, Econometrica, 51, 1635-1659.

Borjas, G.J. (2002) “The Wage Structure and the Sorting of Workers into the Public Sector”,
NBER Working Paper No. w9313.

Bound, J. and G. Johnson (1992) “Changes in the Structure of Wages in the 1980s: An
Evaluation of Alternative Explanations”, American Economic Review, 82, 371-392.

Blundell, R. and S. Bond (1998) “Initial Conditions and Moment Restrictions in Dynamic Panel
Data Models”, Journal of Econometrics, 87, 115-143.

Blundell, R., S. Bond and F. Windmeijer (2000) “Estimation in Dynamic Panel Data Models:
Improving on the Performance of the Standard GMM Estimator”, in: B. Baltagi, ed., Advances in
Econometrics, Vol. 15. Amsterdam: Elsevier Science.

Box, G. E. P. and G. N. Jenkins (1970) Time Series Analysis, Forecasting and Control. San
Francisco: Holden-Day.

Breitung, J. and M. Lechner (1999) “Alternative GMM Methods for Nonlinear Panel Data
Models”, in: L. Matyas, ed., Generalized Method of Moments Estimation. Cambridge:
Cambridge University Press.

Cermeno, R. (1999) “Median Unbiased Estimation in Fixed Effects Dynamic Panels”, Annales
D’Economie et de Statistique, 351-368.

Chamberlain, G. (1984) “Panel Data”, in: Z. Griliches and M.D. Intriligator, eds., Handbook of
Econometrics, Vol. II. Amsterdam: North-Holland, Ch. 22.

Chamberlain, G. (1992) “Comment: Sequential Moment Restrictions in Panel Data”, Journal of
Business and Economic Statistics, 10, 20-26.

Chamberlain, G. (1982) “Multivariate Regression Models for Panel Data”, Journal of
Econometrics, 18, 5-46.

Chamberlain, G. and K. Hirano (1999) “Predictive Distributions Based on Longitudinal Earnings
Data”, Annales d’Economie et de Statistique, 55-56, 211-242.

Cragg, J. C. (1985) “More Efficient Estimation in the Presence of Heteroscedasticity of unknown
Form”, Econometrica, 51, 751-763.




                                             R-3
Chib, S. and B.H. Hamilton (2002) “Semiparametric Bayes Analysis of Longitudinal Data
Treatment Models”, Journal of Econometrics, 110, 67-89.

Choi, I. (2002) “Instrumental Variables Estimation of a Nearly Nonstationary, Heterogeneous
Error Component Model”, Journal of Econometrics, 109, 1-32.

Chumacero, R.A. (2001) “Estimating ARMA Models Efficiently”, Studies in Nonlinear
Dynamics and Econometrics, 5, 103-114.

Coakley, J., A. Fuerts and R.P. Smith (2002) “A Principal Components Approach to Cross-
Section Dependence in Panels”, Birckbeck College, University of London, unpublished
manuscript.

Conley, T.G. (1999) “GMM Estimation with Cross-Sectional Dependence”, Journal of
Econometrics, 92, 1-45.

David, M.. (1971) “Lifetime Income Variability and Income Profiles”, Proceedings of the Annual
Meeting of the American Statistical Association, 285-292.

Davis, P. (2002) “Estimating Multi-Way Error Components Models with Unbalanced Data
Structures”, Journal of Econometrics, 106, 67-95.

Dhrymes, P.J. (1986) “Limited Dependent Variables”, in: Z. Griliches and M.D. Intriligator eds.,
Handbook of Econometrics, Vol. III. Amsterdam: North-Holland, Ch. 27.

Druska, V. and W.C. Horrace (2003) “Generalized Moments Estimation for Panel Data”, NBER
Working Paper No. t0291.

DuMoucel, W.H. and G.J. Duncan (1983) “Using Sample Survey Weights in Multiple
Regression Analysis of Stratified Samples”, Journal of the American Statistical Association, 78,
681-700.

Dustmann, C. and M.E. Rochina-Barrachina (2000) “Selection Correction in Panel Data Models:
An Application to Labour Supply and Wages”, Institute for the Study of Labor (IZA) Discussion
Paper No. 162.

Edwards, T.H. and J. Whalley (2002) “Short and Long Run Decompositions of OECD Wage
Inequality Changes”, NBER Working Paper No. w9265.

Efron, B. and R.J. Tibshirani (1993) An Introduction to the Bootstrap. New York: Chapman and
Hall.

Engle, R. F. (1982) “Autoregressive Conditional Heteroscedasticity With Estimates of the
Variance of the United Kingdom Inflation”, Econometrica, 50, 987-1007.




                                              R-4
Fitzenberger, B. and T. MaCurdy (1997) “Estimation of Grouped-Data Models by Block
Bootstrap Procedures”, Stanford Working Paper.

Fitzgerald, J., P. Gottschalk and R. Moffitt (1998) “An Analysis of Sample Attrition in Panel
Data: The Michigan Panel Study of Income Dynamics”, NBER Working Paper No. t0220.

Flavin, M. (1981) “The Adjustment of Consumption to Changing Expectations about Future
Income”, Journal of Political Economy, 89, 974-1009.

Gottschalk, P. and R. Moffitt (1993) “The Growth of Earnings Instability in the U.S. Labour
Market”, Brooking Papers on Economic Activity, 217-272.

Granger, C.W.J. and M.W. Watson (1984) “Time Series and Spectral Methods in Econometrics”,
in: Z. Griliches and M.D. Intriligator, eds., Handbook of Econometrics, Vol. II. Amsterdam:
North-Holland, Ch. 17.

Geweke, J. (1984) “Inference and Causality in Economic Time Series Models”, in: Z. Griliches
and M.D. Intriligator, eds., Handbook of Econometrics, Vol. II. Amsterdam: North-Holland, Ch.
19.

Geweke, J. and M. Keane (2001) “Computationally Intensive Methods for Integration in
Econometrics”, in: J.J. Heckman and E. Leamer, eds., Handbook of Econometrics, Vol. V.
Amsterdam: North-Holland, Ch. 56.

Hadri, K. (2001) “Testing for Stationarity in Heterogeneous Panel Data”, Econometrics Journal,
1, 1-14.

Hahn, J. and G. Kuersteiner (2002) “Asymptotically Unbiased Inference for a Dynamic Panel
Model with Fixed Effects when Both n and T are Large”, Econometrica, 70, 1639-1657.

Hajivassilou, B.A. and P.A. Rudd (1994) “Classical Estimation Methods for LDV Models Using
Simulation”, in: R.F. Engle and D. McFadden, eds., Handbook of Econometrics, Vol. IV.
Amsterdam: North-Holland, Ch. 40.

Hall, A.R. (2001) “Generalized Method of Moments”, in: B. Baltagi, ed., Companions to
Contemporary Economics. Oxford: Blackwell.

Hall, P. (1994) “Methodology and Theory for the Bootstrap”, in: R.F. Engle and D. McFadden,
eds., Handbook of Econometrics, Vol. IV. Amsterdam: North-Holland, Ch. 39.

Hall, R.E. and F.S. Mishkin (1982) “The Sensitivity of Consumption to Transitory income:
Estimates from Panel Data on Households”, Econometrica, 50, 461-481.

Hamilton, J.D. (1994) “State-Space Models”, in: R.F. Engle and D. McFadden, eds., Handbook
of Econometrics, Vol. IV. Amsterdam: North-Holland, Ch. 50.



                                              R-5
Hansen, L.P. (1982) “Large Sample Properties of Generalized Method of Moment Estimators”,
Econometrica, 50, 1029-1054.

Härdle, W. and O. Linton (1994) “Applied Nonparametric Methods”, in: R.F. Engle and D.
McFadden, eds., Handbook of Econometrics, Vol. IV. Amsterdam: North-Holland, Ch. 38.

Hause, J. (1977) “The Covariance Structure of Earnings and the On-the-Job Training
Hypothesis”, Annals of Economic and Social Measurement, 335-366.

Heckman, J.J. and B. Singer (1986) “Econometric Analysis of Longitudinal Data”, in: Z.
Griliches and M.D. Intriligator, eds., Handbook of Econometrics, Vol. III. Amsterdam: North-
Holland, Ch. 29.

Heckman, J.J., L.J. Lochner and P.E. Todd (2003) “Fifty Years of Mincer Earnings Regressions”,
NBER Working Paper No. w9732.

Heckman, J.J. and T.E. MaCurdy (1986) “Labor Econometrics”, in: Z. Griliches and M.D.
Intriligator, eds., Handbook of Econometrics, Vol. III. Amsterdam: North-Holland, Ch. 32.

Heckman, J.J., T. Lyons and P. Todd (2000) “Understanding Black-White Wage Differentials,
1960-1990”, American Economic Review, 92, 344-349.

Hendry, D.F., A.R. Pagan and J.D. Sargan (1984) “Dynamic Specification”, in: Z. Griliches and
M.D. Intriligator, eds., Handbook of Econometrics, Vol. II. Amsterdam: North-Holland, Ch. 18.

Hill, M. (1992) The Panel Study of Income Dynamics: A User’s Guide. Newbury Park: Sage
Publications.

Hirano, K. (2002) “Semiparametric Bayesian Inference in Autoregressive Panel Data Models”,
Econometrica, 70, 781-799.

Holtz-Eakin, D., W. Newey, and H. Rosen (1988) “Estimating Vector Autoregressions with
Panel Data”, Econometrica, 56, 1371-1395.

Horowitz, J.L. ( 2001) “The Bootstrap”, in: J.J Heckman and E. Leamer, eds., Handbook of
Econometrics, Vol. V. Amsterdam: North-Holland.

Hsiao, C. (1986) Econometric Analysis of Panel Data. London: Cambridge University Press.

Hsiao, C. and M.H. Pesaran (1997) “Bayes Estimation of Short-Run Coefficients in Dynamic
Panel Data Models”, University of Cambridge, Department of Applied Economics Working
Papers, Amalgamated Series No. 9804.




                                             R-6
Hsiao, C., M.H. Pesaran, and A.K. Tahmiscioglu (1999) “Bayes Estimation of Short-Run
Coefficients in Dynamic Panel Data Models”, in: C. Hsiao, K. Lahiri, L.F. Lee and M.H. Pesaran
eds., Analysis of Panels and Limited Dependent Variables: A Volume in Honour of G.S.
Maddala. Cambridge: Cambridge University Press.

Juhn, C., K.M. Murphy and B. Pierce (1993) “Wage Inequality and the Rise in Returns to Skill”,
Journal of Political Economy, 101, 410-442.

Katz, L.F. and D.H. Autor (1999) “Changes in the Wage Structure and Earnings Inequality”, in:
O. Ashenfelter and D. Card, eds., Handbook of Labor Economics, Vol. 3A. Amsterdam: North-
Holland, Ch. 26.

Katz, L.F. and K.M. Murphy (1992) “Changes in the Wage Structure, 1963-87: Supply and
Demand Factors”, Quarterly Journal of Economics, 107, 35-78.

Keane, M. and D. Runkle (1992) “On the Estimation of Panel-Data Models with Serial
Correlation When Instruments Are Not Strictly Exogenous”, Journal of Business and Economic
Statistics, 10, 1-9.

Kelejian, H. And I. Prucha (1999) “A Generalized Moments Estimator for the Autoregressive
Parameter in a Spatial Model”, International Economic Review, 40, 509-533.

Kniesner, T.J. and Q. Li (2002) “Nonlinearity in Dynamic Adjustment: Semiparametric
Estimation of Panel Labor Supply”, Empirical Economics, 27, 131-148.

Kyriazidou, E. ( 1997) “Estimation of a Panel Data Sample Selection Model”, Econometrica, 65,
1335-1364.

Kumar, S. and A. Ullah (2000) “Semiparametric Varying Parametric Panel Data Models: An
Application to Estimation of Speed of Convergence”, in: T.B. Fomby and R.C. Hill, eds.,
Advances in Econometrics, 14: Stamford, Conn.: JAI Press.

Kuersteiner, G.M. (2001) “Optimal Instrumental Variables Estimation for ARMA Models”,
Journal of Econometrics, 104, 395-405.

Lancaster, T. and S. Aiyar (2000) “Econometric Analysis of Dynamic Panel Data Models: A
Growth Theory Example”, in: H. Bunzel, ed., Panel Data and Structural Labour Market Models:
Amsterdam: Elsevier Science.

Lillard, L. and R. Willis (1978) “Dynamic Aspects of Earnings Mobility”, Econometrica, 46,
985-1012.

Lillard, L. and Y. Weiss (1979) “Components of Variation in Panel Earnings Data: American
Scientists 1960-1970”, Econometrica, 47, 437-454.




                                             R-7
MaCurdy, T. (1985) “A Guide to Applying Time Series Models to Panel Data”, (first draft,
NBER Working Paper No. w0624, 1981) NORC Dicussion Paper 86-12,

MaCurdy, T. ( 1982) “The Use of Time Series Processes to Model the Error Structure of
Earnings in a Longitudinal Data Analysis”, Journal of Econometrics, 18, 83-114.

MaCurdy, T. (1982) “Using Information on the Moments of Disturbances to Increase the
Efficiency of Estimation”, NBER Working Paper No. t0022.

MaCurdy, T. and H. Hong (1998) “Smoothed Quantile Regression in Generalized Method of
Moments”, Stanford Working Paper.

MaCurdy T. and T. Morz (1989) “Measuring Macroeconomic Shifts in Wages from Cohort
Specifications”, Stanford Working Paper (Revised 1995).

Maddala, G.S. (1994) “To Pool or Not to Pool: That is the Question”, in: G.S. Maddala, ed.,
Econometric Methods and Applications, Vol. 1. Broomfield, Vt.: Ashgate Press.

Mark, N.C., M. Ogaki, and D. Sul (2003) “Dynamic Seemingly Unrelated Cointegrating
Regression”, NBER Working Paper No. t0292.

Mark, N.C. and D. Sul (1999) “A Computationally Simple Cointegration Vector Estimator for
Panel Data”, Ohio State University, mimeo.

Matzkin, R.L. (1999) “Nonparametric Estimation of Nonadditive Random Functions”,
Northwestern University, mimeo.

McFadden, D.L. ( 1984) “Econometric Analysis of Qualitative Response Models”, in: Z.
Griliches and M.D. Intriligator, eds., Handbook of Econometrics, Vol. II. Amsterdam: North-
Holland, Ch. 24.

Mincer, J. (1958) “Investment in Human Capital and Personal Income Distribution”, Journal of
Political Economy, 66, 281-302.

Moffitt, R. and P. Gottschalk (1994) “Trends in the Autocovariance Structure of Earnings in the
U.S.: 1969-1987”, Department of Economics, Brown University, mimeo.

Moon, R.H. and B. Perron (2000) “The Seemingly Unrelated Dynamic Cointegration Regression
Model and Testing for Purchasing Power Parity”, University of Southern California, mimeo.

Moon, H.R. and P. Phillips (1999) “Maximum Likelihood Estimation in Panels with Incidental
Trends”, Yale Cowles Foundation Discussion Paper No. 1246.

Moretti, E. (2002) “Estimating the Social Return to Higher Education: Evidence from
Longitudinal and Repeated Cross-Sectional Data”, NBER Working Paper No. w9108.



                                             R-8
Movshuk, O. (2003) “Does the Choice of Detrending Method Matter in Demand Analysis?”
Japan and the World Economy, 15, 341-359.

Munkin, M.K. and P.K. Trivendi (2003) “Bayesian Analysis of a Self-Selection Model with
Multiple Outcomes Using Simulation-Based Estimation: An Application to the Demand for
Healthcare”, Journal of Econometrics, 114, 197-200.

Murphy, K.M. and F. Welch (1992) “The Structure of Wages”, Quarterly Journal of Economics,
107, 215-326.

Murphy, K. and F. Welch (1992) “Empirical Age-Earnings Profiles”, Journal of Labor
Economics, 8, 202-229.

Nandram, B. and J.D. Petruccelli (1997) “A Bayesian Analysis of Autoregressive Time Series
Panel Data”, Journal of Business and Economic Statistics, 15, 328-334.

Neal, D. (2002) “The Measured Black-White Wage Gap Among Women is Too Small”, NBER
Working Paper No. w9133.

Nerlove, M. (1967) “Distributed Lags and Unobserved Components in Economic Time Series”,
Ten Economic Studies in the Tradition of Irving Fisher. New York: John Wiley and Sons, Ch. 6.

Nevo, A. (2001) “Using Weights to Adjust for Sample Selection When Auxiliary Information is
Available”, NBER Working Paper No. t0275.

Nevo, A. (2002) “Sample Selection and Information-Theoretic Alternatives to GMM”, Journal
of Econometrics, 107, 149-157.

Newbold, P. (1978) “Feedback Induced by Measurement Errors”, International Economic
Review, 19, 787-791.

Park, J.Y. and M. Ogaki (1991) “Seemingly Unrelated Canonical Cointegrating Regressions”,
Rochester Center for Economic Research Working Paper No. 280.

Pesaran, H.M. (2003) “Estimation and Inference in Large Heterogenous Panels with Cross
Section Dependence”, University of Cambridge CESifo Working Paper Series No. 869.

Pfeffermann, D. (1993) “The Role of Sampling Weights when Modeling Survey Data”,
International Statistical Review, 61, 317-337.

Phillips, R.F. (2003) “Estimation of a Stratified Error-Components Model”, International
Economic Review, 44, 501-521.

Phillips, P.C.B. and H.R. Moon (1999) “Linear Regression Limit Theory for Nonstationary Panel
Data”, Econometrica, 67, 1057-1112.



                                             R-9
Phillips, P.C. and D. Sul (2000) “Dynamic Panel Estimation and Homogeneity Testing Under
Cross Section Dependence”, Cowles Foundation Discussion Paper No. 1362.

Phillips, P.C.B. and D. Sul (2002) “Dynamic Panel Estimation and Homogeneity Testing Under
Cross Section Dependence”, Yale University, mimeo.

Powell, J.L. (1994) “Estimation of Semiparametric Models”, in: R.F. Engle and D. McFadden,
eds., Handbook of Econometrics, Vol. IV. Amsterdam: North-Holland, Ch. 41.

Ridder, G. (1992) “An Empirical Evaluation of Some Models for Non-Random Attrition in Panel
Data”, Structural Change and Economic Dynamics, 3, 337-355.

Robertson, D. and J. Symons (2000) “Factor Residuals in SUR Regressions: Estimating Panels
Allowing for Cross Sectional Correlation”, Faculty of Economics and Politics, University of
Cambridg, unpublished manuscript.

Saikkonen, P. (1991) “Asymptotically Efficient Estimation of Cointegration Regressions”,
Econometric Theory, 7, 1-21.

Sargan, J. D. (1958) “The Estimation of Economic Relationships Using Instrumental Variables”,
Econometrica, 26, 393-415.

Sentana, E. (1995) “Quadratic ARCH Models”, Review of Economic Studies, 62, 639-661.

Sims, C. (1974) “Distributed Lags”, In: M. Intriligator and D. Kendrick, eds., Frontiers of
Quantitative Economics Vol. II, 289-332.

Solon, G. (1999) “Intergenerational Mobility in the Labor Market”, in: O. Ashenfelter and D.
Card, eds., Handbook of Labor Economics, Vol. 3A. Amsterdam: North-Holland, Ch. 29.

Stock, J.H. (1994) “Unit Roots, Structural Breaks and Trends”, in: R.F. Engle and D. McFadden,
eds., Handbook of Econometrics, Vol. IV. Amsterdam: North-Holland, Ch. 46.

Teräsvirta, T., F. Tjøstheim, and C.W.J. Granger (1994) “Aspects of Modelling Nonlinear Time
Series”, in: R.F. Engle and D. McFadden, eds., Handbook of Econometrics, Vol. IV. Amsterdam:
North-Holland, Ch. 48.

Ullah, A. and N. Roy (1998) “Nonparametric and Semiparametric Econometrics of Panel Data”,
in: A. Ullah and D.E.A. Giles, eds., Handbook of Applied Economic Statistics. New York, Basel
and Hong Kong: Dekker, Ch. 17.

Wallis, K. (1977) “Multiple Time Series and the Final Form of Econometric Models”,
Econometrica. 45, 1481-1498.

Wallis, K. (1977) “Multiple Time Series Analysis and the Final Form of Econometric Models”,
Econometrica, 45, 1481-1498.


                                              R - 10
Watson, M.W. (1994) “Vector Autoregression and Cointegration”, in: R.F. Engle and D.
McFadden, eds., Handbook of Econometrics, Vol. IV. Amsterdam: North-Holland, Ch. 47.

Wooldridge, J.M. (1994) “Estimation and Inference for Dependent Processes”, in: R.F. Engle
and D. McFadden, eds., Handbook of Econometrics, Vol. IV. Amsterdam: North-Holland, Ch.
45.

Wooldridge, J.M. (1999) “Asymptotic Properties of Weighted M-Estimators for Variable
Probability Samples”, Econometrica, 67, 1385-1406.

Wooldridge, Jeffrey M. (2001) “Asymptotic Properties of Weighted M-Estimators for Standard
Stratified Samples”, Econometric Theory, 17, 451-470.

Wooldridge, J.M. (2002) Econometric Analysis of Cross Section and Panel Data. Cambridge and
London: MIT Press.

Zellner, A. and F. Palm (1974) “Time Series Analysis and Simultaneous Equation Models”,
Journal of Econometrics, 2, 17-54.

Zellner, A. and F. Palm (1975), “Time Series and Structural Analysis of Monetary Models of the
U.S. Economy”, Sankya, 37, Series C, Part 2, 12-56.

Ziliak, J. P. (1997) “Efficient Estimation with Panel Data When Instruments are Predetermined:
An Empirical Comparison of Moment-Condition Estimators”, Journal of Business Economics
and Statistics, 15, 419-431.




                                            R - 11
                                             Appendix A
                                 Specifying the Covariance Matrix
                                       for an ARMA Process



        The purpose of this appendix is to provide explicit parameterizations for the covariance
matrix E{Ui UiN} associated with the vector of transitory components. The assumptions and
notation introduced to derive the specification for E{Ui UiN} given by relations (4.16)-(4.19) are
also used here. The following discussion begins with the development of a simple
parameterization corresponding to relations (4.16)-(4.19).
        Using (4.14), it is possible to reformulate the system of equations given by (4.13). To
avoid the need for dealing with several possible cases, it is convenient to introduce the notation .j
= 0 for j < 0 (for j = 0, .0 / 1 and for j > 0 .j / mj -     ) and the definition that a summation
of the form      is equal to zero whenever c < 0. Using this notation, equations (4.13) and (4.14)
imply




(A.1)                                                                      ,




                                                  A-1
where



The first set of T-p equations in (A.1) is simply the standard representation of the ARMA process
generating U(p+1)i, . . . , UTi, and the second set of p equations is the moving average
representation of the ARMA process for U1i, . . ., Upi with the :ti’s, t = 1, . . . , p, defined to
include all disturbances realized prior to period p-q+1. The formulation of (A.1) assumes that R1<
p-q+1.1 In matrix notation, (A.1) may be written as

(A.2)                        F Ui = G           ,

where




                                                                          .




F is the T X T matrix defined below (4.15), and G is a T x (T+q) matrix defined as


                                                               .


M is a diagonal band matrix with the elements (mo , . . ., mq ) running down the diagonal,2 and
the matrix K has (.0, . . . , .q-1) as its first row, (0, .0, . . . , .q-2) as its second row, and so on until
the p-th row is reached, or if q< p, until the q-th row is reached, after which the rows of K
contain zeros. When forming the partitioned matrices associated with F and G, the above analysis
assumes that any matrix with an implied dimension equal to zero is deleted from the
specification. Thus, when p = 0, F = [A] and G = [M]; and when q= 0, K is eliminated and

                                                      G=              .


 1
     The justification for the restriction can be found in the footnote following equation (4.18).
 2
     A diagonal band matrix is specified in the first footnote following equation (4.15).

                                                           A-2
        Given the expression for Ui implied by (A.2), the problem of parameterizing E{Ui UiN}
becomes one of specifying a correlation structure for disturbance vectors ,i and :i. Since each of
the components of ,i follows a white noise error process, we have
(A.3)               E{,i ,iN} = (IT-p+q qF2) / E,
where F2 = E{,ti2} for t = p-q+1, . . . , T. Inspection of the formulas for the :ki’s reveals three
facts: (i) the :ki’s depend on a common set of disturbances; (ii) all of these disturbances are
realized prior to period p-q+1; and (iii) included among these disturbances are the initial
conditions for the ARMA process (i.e., the Nki’s). Since each of the components of ,i are realized
during and after period p-q+1, fact (ii) implies E(:i,iN) = 0. Fact (i) implies that the components
of :i are mutually correlated, so E{:i:iN} contains no zero elements in general. In addition,
without imposing rigorous conditions, fact (iii) indicates that no restrictions will exist on the
form of E{:i:iN}. In general, then, :i will possess an arbitrary covariance structure which we may
formally express as
(A.4)                           E{:i :iN} = 7
where 7 is any positive definite, symmetric matrix.
        Combining the above results, we obtain the following specification for E{UiUiN}:

(A.5)                                                 .


This parameterization imposes all of the restrictions implied by the ARMA process unless one is
willing to introduce precise information about how and when this process started.
        There are two modifications of the above parameterization that may be useful in applied
work. First, to simplify the construction of the matrix K, one may replace each of the nonzero
elements of this matrix (i.e., all the .j’s, j$ 0) by arbitrary parameters, rather than using the
coefficients of the ARMA process and the formulas specified above to form these elements. This
modification avoids the need for imposing nonlinear restrictions, but it introduces new
parameters and reduces the efficiency of estimation.
        The second modification concerns the parameterization of 7 defined by (A.4). This
matrix is purely a theoretical construct and represents nuisance parameters. An unattractive
feature of this parameterization is that one cannot easily infer an approximate value for 7 using
preliminary data analysis techniques or estimation methods that do not require the full estimation
of 1. An alternative specification is obtained if one replaces the matrix 7 by the matrix

                                                    A-3
K= E{:i :iN} + K(Iq x F2) KN which is also only restricted to be positive definite and symmetric.
Substituting this new parameterization into (A.5) implies



(A.6)                                                              .



According to this new specification, K = E{U(1)i U(1)iN}, where the vector U(1)iN / (Upi, . . . ,U1i)
includes the last p components of Ui. In contrast to the previous parameterization, K can be
estimated prior to the full estimation of 1. The specification given by (A.6) is equivalent to the
one implied by relations (4.16)-(4.19) presented in Section 4.
        It is straightforward to generalize the above specifications to deal with the case where
more than one structural equation is included in model (4.10) (i.e., there are several equations for
each period) and where the disturbance vector Uti follows a multivariate ARMA process. One
merely needs to replace the coefficients aj, mj, and .j in the above specifications by matrices with
dimensions equal to the number of equations and redefine the dimensions of other matrices so
that they are conformable.




                                                  A-4
                                              Appendix B
                     A General Approach for Estimating ARMA Processes

        This appendix presents a general framework for estimating parameters of a stationary
multivariate autoregressive moving-average (ARMA) process applying the procedures
summarized in Sections 4, 6 and 7.
        Consider the following stationary multivariate ARMA process
(B.1)                      F(L) V t =         M j (L) , tj ,
where Vt is a vector of observed variables with zero mean, F(L) = F0 + F1 L + . . .Fp Lp and
Mj(L) = M j0 + M j1 L + . . . + M jq Lq are matrix lag polynomials, and the , tj are mutually
independent, white-noise error vectors with
                                E (,tj ,tj N ) = E j ,         j = 1, . . . ., J.
The inclusion of more than one moving average component in relation (B.1) allows the model to
incorporate error-component specifications. Obviously, if error components are present, then the
forms of F(L) and M j (L) lag matrices must be restricted according to some structural constraints
to achieve identification of coeffficients.
        Represent the k-th order autocovariances of Vt by
                               1-6 = E (Vt Vt-kN ) .
The stationarity of the process implies that 16 = 1 -6.
        Using multivariate extensions of equations (9), (10), and (11) in Section 5.8 of Anderson
(1971), one can derive from (B.1) the following system of equations:


(B.2)                                                               M j k E j M jkN


                                                                   M j, k + 1 E j M j kN
                                                  C
                                                  C
                                                  C

                                                                 M j q E j M j 0N




                                                      B-1
                                                C
                                                C
                                                C

                                                              .


where T is farthest time period available in the longitudinal data set for computing

autocovariances (with assumed to satisfy T-1 > q). Let 2 be a vector which stacks the own and

cross-autocovariances in (B.2), and let " be a parameter vector in which the unknown elements

of the matrices Fj, M jk and Ej are stacked. With some algebraic manipulations, the system of

equations in (B.2) can be stacked to yield a vector equality of the form

(B.3)                           f (", 2) = 0.

with evaluation of this relationship at the true values of the parameters.

        To understand how f( ", 2) is formed, first consider the case of a univariate ARMA

process. Then

                f 1 (" , 2) =                               M2 j k F 2 j


                f 2 (" , 2) =                                 M j , k+1 M j k F2j

and so on. In the case of an n-variate ARMA process, recognize that the matrix


                                                          Mjk Ej MjkN


is symmetric. Hence, to form f(", 2) one stacks only the upper triangular part of this matrix.

Thus, the first (n(n+l)/2) elements of f(", 2) are generated by the first matrix equation in (B.2),

the next n2 are generated by the second matrix equation in (B.2), and so on.

        Let "* and 2* denote the true values of " and 2. Further, suppose that      is a consistent


estimate of 2* with               converging in distribution to N(0,H), where N is the sample



                                                    B-2
size. Then, as long as f(" ,2) satisfies the general conditions given in Section 3, it is the case that


(B.4)                                                                           .


        When (*f/*"’) has full column rank, it will be possible in (B.3) to solve for the elements

of " in terms of the elements of 2. Since 2 will typically be overidentified, the result in (B.4)

justifies the applicability of MM procedures to compute a unique estimate of ". This procedure

calculates an estimate " to minimize the function

(B.5)                  Q = f (",    ) N W f (",    ),

where W is any positive definite matrix. The resulting estimate is consistent and asymptotically

normal given (B.4). Further, if     is a consistent estimate of H and     is a consistent estimate of


", the result in (B.4) enables one to conclude that                          is an optimal choice for

W. Standard MM procedures then imply that


(B.6)                                                                               ,


where    is the estimate of " when W is chosen optimally.

        The value of the function Q given in (B.5), with W chosen optimally, forms the basis for

a statistic to test whether the autocovariances of Vt have a parameterization implied by (B.1). Let

   be the value of the function Q, let k2 denote the number of elements in 2, and let k" denote the

number of parameters contained in ". According to the findings in (3.17), it follows that if the

null hypothesis given by (B.3) is true, then N     is approximately distributed as a chi-squared

random variable with (k2 - k") degrees of freedom. This statistic provides a measure of fit of the

parameterized multiple time series model to the sample own- and cross-covariograms, with the



                                                  B-3
alternative hypothesis interpreting all variances and autocovariances as being entirely

unconstrained.




                                               B-4
                                                                           Table 7.1
                                                            Covariogram for Wage Growth Residuals
                                                          Based on Seemingly Unrelated Regression Model

                       Lag (Order)
                                               0                1               2                3               4               5                6
Statistics

Constrained Autocovariances                  0.131           -0.048           -0.006          -0.004          -0.003           -0.001           0.002
   (Standard errors in parentheses)         (0.007)          (0.004)          (0.002)        (0.0025)         (0.003)          (0.003)         (0.003)
        Autocorrelation                        1              -0.37           -0.05            -0.03           -0.02            -0.01           0.01
  Range of Autocovariances               (0.120, 0.171)   (-0.035, 0.067) ( -0.011, 0.005) (-0.021, 0.002) (-0.013, 0.005) (-0.004, 0.007) (-0.006, 0.005)
       Test for Constant                      yes              yes             yes             yes              yes             yes              yes
       Autocovariance                        (0.46)           (0.60)          (0.63)          (0.32)           (0.71)          (0.85)           (0.80)
 (Probability of event in parentheses)
                                                    Table 7.2
                 Estimates of Only Autoregressive Coefficients for Wage Growth Error Structure
                                      Specification based on Equation (9.6)
                                               (Standard errors in parentheses)


                                  ARMA
                                                          a1                         a2
                                   (p, q)
                                                       -0.134
                                   (1,1)
                                                      (0.0354)
                                                       -0.189                      -0.024
                                   (2,1)
                                                      (0.0491)                    (0.0254)



                                                      Table 7.3
          Joint Estimates of Autoregressive and Covariance Parameters for Wage Growth Error Structure
                                        Specification based on Equation (9.8)
                                               (Standard errors in parentheses)


                                       Direct Estimates                                      Implied Values from Delta Method
ARMA
 (p, q)         a1                a2                     F11                        F12            F               m1

              -0.151                                  0.131                    -0.060            0.305            -0.645
 (1,1)
             (0.0339)                                (0.0074)                 (0.0040)          (0.0076)         (0.0279)
              -0.186            -0.020                0.132                    -0.062            0.300            -0.686
 (2,1)
             (0.0405)          (0.0225)              (0.0089)                 (0.0052)          (0.0075)         (0.0441)
                                                             Table 7.4
                           Bootstrapped Estimates of ARMA Processes for Wage Growth Error Structure
                                          Specifications based on Equations (9.6) and (9.8)
                                                    (Standard errors in parentheses)


ARMA                  Estimation Method
                                                               a1                         a2        F11        F12
 (p, q)
          Autoregressive Subset Estimation                  -0.134
                Asymptotic Theory                          (0.0354)
          Autoregressive Subset Estimation                  -0.136
                Bootstrap with 1000 Replications           (0.0406)
 (1,1)
          Full Estimation                                   -0.151                                 0.131      -0.060
                 Asymptotic Theory                         (0.0339)                               (0.0074)   (0.0040)
          Full Estimation                                   -0.115                                 0.120      -0.054
                 Bootstrap with 1000 Replications          (0.0448)                               (0.0088)   (0.0048)
          Autoregressive Subset Estimation                  -0.189                      -0.024
                Asymptotic Theory                          (0.0491)                    (0.0254)
          Autoregressive Subset Estimation                  -0.173                      -0.017
                Bootstrap with 1000 Replications           (0.0540)                    (0.0274)
 (2,1)
          Full Estimation                                   -0.186                      -0.020     0.132      -0.062
                 Asymptotic Theory                         (0.0405)                    (0.0225)   (0.0089)   (0.0052)
          Full Estimation                                   -0.117                      0.003      0.116      -0.052
                 Bootstrap with 1000 Replications          (0.0807)                    (0.0331)   (0.0123)   (0.0076)
                                                                         Table 7.5
                                                 Covariogram Based on Unbalanced Wage Growth Residuals
                                                       Based on Seemingly Unrelated Regression Model

                             Lag (Order)
                                                   0               1                  2               3               4               5                6
Statistics

   Constrained Autocovariances                   0.162          -0.056          -0.007           -0.004          -0.004          -0.001           0.003
      (Standard errors in parentheses)          (0.008)         (0.004)         (0.002)          (0.003)         (0.003)         (0.003)         (0.004)
             Autocorrelation                       1             -0.35           -0.04            -0.02           -0.02           -0.01           0.02
     Range of Autocovariances                (0.148, 0.206) (-0.080, -0.043) (-0.020, 0.004) (-0.026, 0.005) (-0.012, 0.008) (-0.011, 0.003) (0.002, 0.003)

Test for Constant Autocovariance                  yes             yes             yes             yes             yes             yes              yes
    (Probability of event in parentheses)        (0.40)          (0.47)          (0.46)          (0.06)          (0.10)          (0.73)           (0.58)



                                                                        Table 7.6
                                                  Covariogram Based on Weighted Wage Growth Residuals
                                                       Based on Seemingly Unrelated Regression Model

                           Lag (Order)
                                                  0               1               2               3               4               5                6
Statistics

  Constrained Autocovariances                   0.112          -0.042          -0.004          -0.005          -0.002           -0.001           0.002
     (Standard errors in parentheses)          (0.007)         (0.004)         (0.002)         (0.003)         (0.003)          (0.003)         (0.003)
             Autocorrelation                      1             -0.37           -0.04           -0.04           -0.02            -0.01           0.02
    Range of Autocovariances                (0.101, 0.159) (-0.061,- 0.028) (-0.011, 0.003) (-0.006, 0.001) (-0.014, 0.005) (-0.007, 0.010) (-0.007, 0.005)

Test for Constant Autocovariance                yes              yes             yes             yes             yes             yes             yes
   (Probability of event in parentheses)       (0.15)           (0.22)          (0.90)          (0.52)          (0.10)          (0.70)          (0.73)
                                                               Table 7.7
                               Weighted Estimates of ARMA Processes for Wage Growth Error Structure
                                            Specifications based on Equations (9.6) and (9.8)
                                                        (Standard errors in parentheses)


                                                                                                                 Implied Values from
                      Estimation Method                                        Direct Estimates
ARMA                                                                                                                Delta Method
 (p, q)                                                     a1                a2             F11        F12         F          m1

                                                         -0.110
          Estimating only Autoregressive Coefficients
                                                        (0.0401)
 (1,1)
          Estimating Autoregressive and Covariance       -0.102                             0.119      -0.052     0.295       -0.598
          Parameters Jointly                            (0.0395)                           (0.0079)   (0.0042)   (0.0090)    (0.0312)
                                                         -0.181            -0.027
          Estimating only Autoregressive Coefficients
                                                        (0.0558)          (0.0302)
 (2,1)
          Estimating Autoregressive and Covariance       -0.062            0.025            0.110      -0.048     0.286       -0.587
          Parameters Jointly                            (0.0507)          (0.0260)         (0.0090)   (0.0056)   (0.0090)    (0.0569)
                                                Table 7.8
              Quantile Regression Estimates of AR Processes for Wage Growth Error Structure
                                          (Standard errors in parentheses)


ARMA
                        Estimation Method                                      D1        D2        D3
 (p, q)
          Individual Regression                                              -0.397    -0.225    -0.112
          (Asymptotic Standard Errors)                                       (0.019)   (0.017)   (0.014)
          (1000 Reps Bootstrap Standard Errors)                              (0.019)   (0.017)   (0.016)
 (3,0)
          System of Equations                                                -0.463    -0.250    -0.065
          (Asymptotic Standard Errors)                                       (0.010)   (0.007)   (0.006)
          (1000 Reps Bootstrap Standard Errors)                              (0.027)   (0.022)   (0.024)
          System of Equations                                                -0.637    -0.308    -0.131
 (3,1)    (Asymptotic Standard Errors)                                       (0.014)   (0.010)   (0.009)
          (1000 Reps Bootstrap Standard Errors)                              (0.069)   (0.028)   (0.025)



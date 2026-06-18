---
normalized_id: shared-pdf-reference-implementing-nonparametric-and-semiparametric-estimators
exam_code: SHARED
material_scope: implementing nonparametric and semiparametric estimators.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Implementing Nonparametric and Semiparametric Estimators.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-implementing-nonparametric-and-semiparametric-estimators

   Implementing Nonparametric and Semiparametric Estimators1

                            Hidehiko Ichimura and Petra E. Todd

                                       January 23, 2004




  1
    Prepared for Handbook of Econometrics Volume 5. This research is supported by NSF grant # SBR-
9730688.
Contents
1 Introduction                                                                                          2
  1.1 The nature of recent progress . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       2
  1.2 Benefits of flexible modeling approaches for empirical research . . . . . . . . . . . . .         2
  1.3 Implementation issues . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       3
  1.4 Overview of chapter . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       4
  1.5 Related literature . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    5

2 Applications of Flexible Modeling Approaches in Economics                                             5
  2.1 Density estimation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      6
  2.2 Conditional mean and conditional quantile function estimation . . . . . . . . . . . .             6
      2.2.1 Earnings function estimation . . . . . . . . . . . . . . . . . . . . . . . . . . .          6
      2.2.2 Analysis of consumer demand . . . . . . . . . . . . . . . . . . . . . . . . . . .           7
      2.2.3 Analysis of sample selection . . . . . . . . . . . . . . . . . . . . . . . . . . . .        8
  2.3 Averages of functions: evaluating effects of treatments . . . . . . . . . . . . . . . . .         9

3 Key Concepts in Flexible Modeling                                                                    10
  3.1 Consistency concepts . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     10
  3.2 Curse of dimensionality . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      12
  3.3 Semiparametric models . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        13
      3.3.1 Changing the parameter . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .         13
      3.3.2 Restricting the class of models . . . . . . . . . . . . . . . . . . . . . . . . . .        14
      3.3.3 Specifying different stochastic assumptions . . . . . . . . . . . . . . . . . . .          15

4 Nonparametric Estimation Methods                                                                     16
  4.1 Density estimation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     17
      4.1.1 Method-of-Moment based estimators . . . . . . . . . . . . . . . . . . . . . . .            17
      4.1.2 Likelihood-based approaches . . . . . . . . . . . . . . . . . . . . . . . . . . .          19
  4.2 Conditional mean and quantile function estimation . . . . . . . . . . . . . . . . . . .          21
  4.3 Properties of the kernel and local linear regression estimators . . . . . . . . . . . . .        24
  4.4 Properties of Global Estimators . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      26

5 Semiparametric Estimation                                                                            27
  5.1 Conditional mean function estimation . . . . . . . . . . . . . . . . . . . . . . . . . .         27
      5.1.1 Additively separable models . . . . . . . . . . . . . . . . . . . . . . . . . . . .        27
      5.1.2 The partially linear model . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       30
      5.1.3 Average derivative estimation . . . . . . . . . . . . . . . . . . . . . . . . . . .        35
      5.1.4 Index Models . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       36

6 Smoothing parameter choice and trimming                                                   37
  6.1 Methods for selecting smoothing parameters in density estimation . . . . . . . . . . 38
      6.1.1 Choice of bandwidth in local, kernel density estimation . . . . . . . . . . . . 38


                                                   1
         6.1.2 Conclusions and directions for further research . . . . . . . . . . . . . . . . .          48
   6.2   Alternative methods for selecting smoothing parameters in regression function esti-
         mation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   48
         6.2.1 Optimality criteria . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      48
         6.2.2 Empirical performance of alternative methods of selecting bandwidths in local
                estimation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    50
         6.2.3 Empirical performance of alternative methods of choosing degree of trunca-
                tion in global series expansion . . . . . . . . . . . . . . . . . . . . . . . . . . .     51
         6.2.4 Methods for choosing the degree of the polynomial and bandwidth simulta-
                neously . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     52
   6.3   Methods for choosing smoothing parameters in semiparametric models . . . . . . . .               53
         6.3.1 Optimal bandwidth choice in average derivative estimation . . . . . . . . . .              53
         6.3.2 Optimal bandwidth choice in the partially linear model . . . . . . . . . . . .             54
         6.3.3 Application of the RMSE-search method to the partially linear model . . . .                57
         6.3.4 Monte Carlo study of bandwidth selector performance . . . . . . . . . . . . .              58
   6.4   Trimming . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     60
         6.4.1 What is trimming? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        60
         6.4.2 Three reasons for trimming . . . . . . . . . . . . . . . . . . . . . . . . . . . .         60
         6.4.3 How to trim . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      61

7 Asymptotic distribution                                                                                 62
  7.1 Nonparametric estimators . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .          62
      7.1.1 Density estimators . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .          63
      7.1.2 Regression function estimators . . . . . . . . . . . . . . . . . . . . . . . . . .            63
  7.2 Semiparametric estimators . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .         63

8 Computation                                                                                             74
  8.1 Description of approximation method . . . . . . . . . . . . . . . . . . . . . . . . . .             75
      8.1.1 A simple binning estimator for linear linear regression estimation . . . . . . .              75
      8.1.2 Fast Fourier transform (FFT) binning for density estimation . . . . . . . . .                 76
  8.2 Performance evaluation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .          79

9 Efficiency Concepts in Nonparametric and Semiparametric Models                                          80

10 Conclusions                                                                                            80




                                                     2
1        Introduction
In the last two decades significant progress has been made in the study of nonparametric and
semiparametric models. This chapter describes recent advances with special emphasis on their
applicability to empirical research and on resolving issues that arise in implementation. As the
coverage of the chapter is broad, our discussion provides only an overview. Nevertheless, we hope
the chapter captures the basic motivations and ideas behind the developments and serves as a guide
to the literature. We begin by briefly summarizing the nature of recent progress, implications for
empirical research, and some implementation issues.

1.1        The nature of recent progress
A major motivation for work on flexible modeling methods is the desire to avoid masking impor-
tant features of the data by use of parametric models.1 Recent progress has provided many new
ways of modeling and estimating different aspects of a conditional probability distribution. For
example, there are now a number of alternatives to linear regression for modeling and estimating
the conditional mean function as well as methods available for examining other features of distribu-
tions, such as conditional quantiles. Another area of advance has been in the study of models with
limited dependent variables. In the early eighties, the standard approach with such models was to
specify the error distribution parametrically and employ maximum likelihood (ML) estimation, but
recent research has shown that parametric specification of the error term is often unnecessary for
consistent estimation of slope parameters. These developments enable empirical work to be carried
out under fewer restrictions than was deemed possible twenty years ago.
     Another important motivation for research on flexible modeling methods is the pursuit of a
classical theme in econometrics: the study of the trade-off between the assumptions that achieve
efficiency and those that achieve consistency. We usually seek the weakest assumptions under
which a parameter is identified, but weakening assumptions sometimes comes at the expense of less
efficient estimation. Recent research has clarified the trade-offs in terms of convergence rates and
attainable efficiency bounds between specifying more or less flexible models.

1.2        Benefits of flexible modeling approaches for empirical research
¿From an empirical perspective, the primary benefit of recent work in flexible modeling is that
estimation can proceed under less stringent assumptions with a better understanding of the effi-
ciency loss associated with different modeling approaches. Another benefit is that the departure
from the traditional linear modeling framework decreases the tendency to focus solely on the con-
ditional mean function as the parameter of interest. Flexible modeling methods provide a natural
way of considering other aspects of the probability distribution that may be of interest, such as
conditional quantiles.2 Research on limited dependent variable models has shown that quantile
restrictions provide sharper restrictions than conditional mean restrictions for identifying model
    1
        See McFadden (1985). For brevity, we refer to nonparametric and semiparametric models as flexible models.
    2
        See e.g. Buchinski (1995), Chamberlain (1995), Buchinsky and Hahn (1998).




                                                           3
parameters.3
     An additional benefit of flexible modeling approaches is that they allow for a more direct
connection between the parameters of interest and the identification restrictions being exploited in
estimation. For example, consider the linear regression model with the conditional mean restriction
E (y|x) = x0 β 0 . Here β 0 represents a vector that defines the conditional mean function and also
a vector that defines the derivative of the conditional mean function. Generally, in a restricted
framework conceptually different parameters may coincide and there can be a discrepancy between
the parameter of interest and the source of variation in the data used to estimate the parameter.
Flexible modeling approaches seek to match the source of variation in the data closely to the
parameter of interest. For example, it is natural to estimate β 0 by ordinary least squares when
it represents a vector defining the conditional mean function and to estimate it by an average
derivative estimator, when it represents a vector defining the derivative of the conditional mean
function. Average derivative estimators are discussed below in section 5.
     Finally, flexible modeling frameworks provide a systematic way of addressing concerns about
model specification. First, they require fewer modeling assumptions, which directly eliminates the
need for some specification testing. Second, they provide a formal framework for conducting the
specification search. In parametric models, searches often proceed piece-meal, leaving the selection
of which models to examine and the order in which to examine them up to the researcher. One
difficulty this creates is that the route by which a particular model is chosen is often not explicit,
making it difficult to obtain general results about the properties of the estimators. Another difficulty
is that there is no formal language for effectively communicating the domain of search, and the
description of the domain is usually left up to the researcher’s conscious effort. In contrast, the
flexible modeling framework specifies a priori a class of models for which the estimation is valid, so
that the domain is clear and the process by which a particular model is chosen is more transparent.
     Careful researchers have always been aware of potential drawbacks of parametric models and
have guarded against them by examining the sensitivity of empirical results to alternative specifi-
cations and using imaginative ways of checking model restrictions.4 The recent progress in flexible
modeling makes it easier for researchers to address concerns about model specification and also to
assess the variability of estimation procedures. The progress represents an important step towards
replacing what has been characterized as the difficult art of model specification with a simpler,
more systematic approach.

1.3    Implementation issues
So far we have emphasized the benefits of flexible modeling approaches. To fully realize these
benefits, however, there are still some open questions that need to be resolved regarding how to
choose a model and an estimation method that is well suited to a particular application and how
to implement the chosen estimation method.
   3
    Powell (1984), Manski (1985).
   4
    Various formal specification tests and model selection rules have been developed. See for example Davidson and
McKinnon (1982), Hansen (1982), Hausman (1978), Newey (1985, 1987), Tauchen (1985), White (1980), and Wu
(1974).



                                                        4
     A key consideration in using flexible modeling is that greater flexibility often comes at a cost
of a slower convergence rate. Thus, understanding the tradeoff between flexibility and efficiency is
important to choosing an appropriate estimation strategy.
     Another barrier to implementing the new estimators is how to choose from a bewildering array
of available estimators. A first impression from studying nonparametric literature is the richness
in the variety of methods. In this chapter, we attempt to pick up some common threads among
different methods, to highlight differences and commonalities, and to discuss when each method is
justified theoretically.
     Another consideration is that there is a degree of arbitrariness in many of the available estima-
tion procedures that takes the form of unspecified parameters. The arbitrariness is not problematic
for certain theoretical questions of interest, such as the question of whether a particular level of
convergence rate is achievable. But the arbitrariness poses a problem from the point of view of
implementation, because different ways of specifying these parameters can greatly affect the esti-
mates. For example, parameter estimates or asymptotic variance estimates can be highly sensitive
to the choice of smoothing parameters or to different ways of trimming the data.5 One focus of
this chapter is on how to choose the values of these unspecified parameters.
     A third problem we address is how to assess the variability of nonparametric and semiparametric
estimators. In many empirical applications, the model used and methods applied deviate in some
respects from the prototypical models and methods studied in the theoretic literature. Hence, it
is important for researchers to be able to modify theories according to their needs and to derive
the properties of modified versions of the estimators. For models and estimators based on moment
conditions with finite dimensional parameters, Hansen (1982) and Pakes and Pollard (1989) provide
results that are sufficiently general to accommodate many different kinds of modifications. For
semiparametric models, some progress has also been made along similar lines. See Andrews (1994),
and Newey and McFadden (1994) Ai and Chen (2003) and Chen, Linton and van Keilegom (2003).
     Finally, another obstacle in applying flexible estimators is that they can be computationally
intensive, particularly for large data sets. Because of slower rates of convergence, the methods
are ideally suited for larger data sets. Yet it is precisely when sample sizes are large, say on the
order of 100,000, when the computational burden of these methods can make them impractical. We
discuss approximation methods that speed up estimation and provide great gains in speed, making
it feasible to analyze even very large samples.

1.4    Overview of chapter
In section 2, we illustrate through examples drawn from different empirical literatures how flexi-
ble estimation methods have been used as an alternative or as a supplement to more traditional
estimation approaches. Section 3 describes some concepts in semiparametric and nonparametric
modeling and makes precise how new developments in the literature broaden the kinds of models
and parameters of interest that can be considered in empirical research.
   5
    “Trimming” is the practice of excluding a fraction of observations in local nonparametric estimation. Trimming is
required when the density of the data is low at these observations and a nonparametric estimate would be unreliable.
See Section 6.


                                                         5
    Section 4 discusses nonparametric estimation of densities, conditional mean functions, and
derivatives of functions. Although fully nonparametric analyses are not often practical because of
slow rates of convergence, we begin with nonparametric estimators because they serve as building
blocks for many semiparametric estimators. We discuss how apparently different estimators are
in some ways closely related and present a unifying framework for thinking about nonparametric
density and conditional mean estimators.
    Section 5 considers estimation of the same parameters of interest (densities, conditional mean
functions, and derivatives of functions) using semiparametric modeling methods that overcome the
problem of slow-convergence of fully nonparametric estimators. We describe a variety of semi-
parametric approaches to estimating densities and conditional mean functions. As there are many
semiparametric estimators available in the literature, we only discuss a subset of them. The esti-
mators we cover include additively separable models, index models, average derivative estimators,
and partially linear model estimators.
    Section 6 focuses on the question of how to choose smoothing parameters and trimming methods
that are required to implement flexible estimators. The problem of choosing the values of these
unspecified parameters is similar to a model selection problem in a parametric context. For each
estimator, we summarize existing research on how to choose the values of these parameters and
describe the evidence on the effectiveness of various smoothing parameter selection methods, some
of which comes from our own Monte Carlo studies.
    Section 7 discusses how to assess the variability of different estimation procedures. Section 8 ex-
amines the problem of how to compute local nonparametric estimates in large samples. We describe
binning algorithms that speed up computation through accurate approximation of nonparametric
densities and conditional mean functions.
    Section 9 contains a brief discussion of efficiency concepts and Section 10 concludes.

1.5   Related literature
There are several useful surveys in the literature to which we will at times refer in this chapter.
For semiparametric literature, see Andrews (1994), Bickel, Klaassen, Ritov, and Wellner (1992),
Blundell and Duncan (1998), Deaton (1998), Delgado and Robinson (1992), Honoré and Arellano
(Chapter ?), Horowitz (1998), Lee (1998), Manski (1994), Matzkin (1994), Newey (1990), Newey
and McFadden (1994), Pfanzagl (1990), Powell (1994), Robinson (1988), Stoker (1991), Ullah and
Vinod (1993), Pagan and Ullah (2000) and Yatchew (1998). For nonparametric literature, see
Cleveland and Loader (Chapter ?), Fan and Gijbels (1996), Härdle (1990), Härdle and Linton
(1994), Prakasa-Rao (1983), Scott (1992) and Silverman (1986).


2     Applications of Flexible Modeling Approaches in Economics
In this section, we illustrate through several examples how flexible modeling methods have been
used in empirical work, either as an alternative to more traditional estimation approaches or as a
supplement to them. The examples are drawn from the literatures on estimating consumer demand



                                                  6
functions, estimating the determinants of worker earnings, correcting for sample selection bias, and
evaluating the effects of social programs. Our examples are chosen to highlight different kinds
of parameters that may be of interest in empirical studies, such as densities, conditional mean
functions, averages of functions and quantiles.

2.1     Density estimation
In many empirical studies, researchers are interested in analyzing the distribution of some random
variable. Nonparametric density estimators provide a straightforward way of estimating densities.
One nonparametric estimator that has already gained widespread use is the histogram estimator,
which estimates the density by the fraction of observations falling within a specified bin divided
by the bin width. In section 4, we discuss how the histogram relates to other nonparametric
density estimators and how to optimally choose the bin width. We also present alternatives to the
histogram estimator that have superior properties, such as the Nadaraya-Watson kernel density
estimator which can be viewed as a generalized version of the histogram estimator.
    An economic application that uses nonparametric density estimation methods extensively is
DiNardo, Fortin and Lemieux (1996), which investigates the effects of institutional and labor market
factors on changes in the U.S. wage distribution over time. The authors write the overall wage
density at time t, fw (w|t), in terms of the conditional wage densities, where conditioning is on a
set of labor market or institutional factors, z, whose effects on earnings they analyze:
                                             Z
                                  fw (w|t) =     fw (w|z, t)fz (z|t)dz.
                                             Z

In their study, z includes variables indicating union status, industrial sector, and whether the
wage falls above or below the minimum wage. Counter-factual wage densities are constructed by
replacing fz (z|t) by a different hypothetical conditional density, gz (z|t).
    A traditional parametric approach to simulating wage distributions would specify a parametric
functional form for the w and z distributions. Under the parametric approach, inference would
only be valid within the class of models specified. The alternative approach taken in the paper is to
estimate the densities nonparametrically, using a nonparametric kernel density estimator that will
be discussed in section 4 of this chapter. Using a flexible modeling approach makes inference valid
for a broader class of models and avoids the need to search for an appropriate parametric model
specification for fw and fz .

2.2     Conditional mean and conditional quantile function estimation
2.2.1    Earnings function estimation

In addition to studying the shape of the earnings distribution, economists are often interested in
examining how changes in individual characteristics, such as education or years of labor market
experience, affect some aspect of the distribution, such as the mean. An earnings specification that
is widely used in empirical labor research is that of Mincer (1974), which writes log earnings as a
                                                                                          ˙
linear function of years of schooling (s) and as a quadratic in years of work experience (exp)   and


                                                 7
an unobserved variable (ε) representing other factors affecting the earnings:

                                     ln y = α0 + ρs + β 1 exp +β 2 exp2 +ε.

This simple parametric specification captures several empirical regularities, such as concavity of log
earnings-age and experience profiles and steeper profiles for persons with more years of education.6
However, Mincer’s model was derived under some strong assumptions, so it is of interest to also
consider more general specifications of the earnings equation such as

                                               ln y = g(s, exp) + ε,

where g is a function that is continuous in the continuous variable (experience). Usually the g
function is interpreted as the conditional mean function.
   In Heckman, Lochner and Todd (2003), nonparametric regression methods are applied to esti-
mate the above equation and to examine the empirical support for the parametric Mincer model.
Their study finds substantial support for the parametric specification in decennial Census data from
1940-1960 but not in more recent decades.7 Figure 2.1 shows the nonparametrically estimated log
earnings-experience relationship for alternative schooling classes for adult males from the 1960
U.S. decennial census (the same data analyzed by Mincer, 1974). Nonparametric estimation was
performed using local linear regression methods that are described in section 4 of this chapter.
   {Figure 2.1: Earnings-Experience Profiles by Education Level Estimated Nonparametrically by
a Local Linear Regression Estimator }
   One can also interpret the g function as a conditional quantile function, in which case the
nonparametric quantile estimation methods can be applied, as in Buchinsky (1994, 1998).

2.2.2    Analysis of consumer demand

Several recent studies in consumer demand analysis have made use of flexible estimation techniques
in estimating Engel curves, which relate a consumer’s budget share or expenditure on a good to
total expenditure or income. Economic theory does not place strong restrictions on functional
forms for Engel curves, so earlier research addressed the question of model specification mainly by
adopting flexible parametric functional forms. Research by Banks, Blundell and Lewbel (1997),
Blundell and Duncan (1998), Deaton and Paxson (1998), Härdle, Hildebrand and Jerison (1991)
and Schmalensee and Stoker (1999) consider nonparametric and semiparametric estimation of Engel
curves. The basic modeling framework is

                                                 y = g(x, z) + u,

where y is the budget share of a good, x is total expenditure or income, and z represents other
household or individual characteristics included as conditioning variables. Typically g(x, z) is as-
sumed to be the conditional mean function of y given x and z so that E(u|x, z) = 0.
   6
    See Willis (1986) for a discussion of the use of the Mincer model in labor economics.
   7
    Data from the 1940, 1950, 1960 show support for the model, but data from 1970, 1980 and 1990 show important
deviations from the model, which Heckman et. al. (2003) attribute in part to changing skill prices over recent decades,
which violates an assumption of the traditional Mincer model.


                                                          8
    The traditional approach to estimating conditional mean functions specifies the functional form
of g up to some finite number of parameters. In consumer demand analysis, the Engel curve function
is often assumed to be linear or quadratic in ln x and z and the coefficients on the conditioning
variables are estimated by ordinary least squares (OLS). A nonparametric estimation approach
places no restrictions on the g(x, z) relationship other than assuming that the g(·) function lies
within a class of smooth functions such as the class of twice continuously differentiable functions.
    As discussed in section 3, with a large number of regressors fully nonparametric estimators
converge at a rate that is too slow to be practical in conventional size samples. A semiparametric
modeling approach provides a more practical alternative. These methods achieve a faster rate of
convergence by restricting some aspects of the g(x, z) relationship while at the same time main-
taining some flexibility. For example, the approach taken in Banks, Blundell and Lewbel (1997),
Blundell and Duncan (1998), and Deaton and Paxon (1998) is to model the budget-share-log-income
relationship nonparametrically under the parametric restriction that other z covariates enter in a
linear, additively separable way. This yields a partially linear model :

                                              y = g(x) + zγ + u.

When z are discrete variables, assuming that they enter in a linear fashion imposes only the
assumption of additive separability. Schmalensee and Stoker (1996) adopt a similar but slightly
more general specification. Ai, Blundell and Chen (2000) consider the consumer demand model of
the form

                                            y = g(x + zγ) + zγ + u

and show that including the term zγ both in the g(·) function and in the linear term is necessary
to make the Engel curve consistent with a consumer demand system.
   A variety of semiparametric estimators that allow for flexibility in different model components
have been proposed in the econometrics and statistics literatures. Several classes of estimators will
be discussed in section 5 of this chapter.

2.2.3      Analysis of sample selection

A leading area of application of flexible estimation methods in economics is to the sample selection
problem. In fact, several estimators for the partially linear model were developed with the sample
selection model in mind.8 In the sample selection problem, an outcome is observed for a nonrandom
sub-sample of the population and the goal is to draw inferences that are valid for the full population.
For example, in the analysis of labor supply the outcome equation corresponds to the market wage,
observed only for workers, and the selection equation corresponds to the decision to participate in
the labor force. The wage model takes the form

                                               w = w(x, θ1 ) + u
  8
      The sample selection model is developed by Gronau (1973), Heckman (1976), and Lewis (1974).




                                                        9
where w is observed if the wage exceeds the individual’s reservation wage, wr , which is the minimum
wage the individual would be willing to accept.
   Many of the approaches for estimating the above wage model lead to a partially linear model
form:

                                        w = w(x, θ1 ) + ϕ(x, z) + u

where ϕ(x, z) = E(u|w > wr , x) is the so-called control function that can be estimated using
nonparametric methods.9 Clearly, in the above equation the functions w(x, θ1 ) and ϕ(x, z) could
not be nonparametrically separately identified without some additional restrictions. Section 5 of
this chapter considers alternative estimators for the sample selection model under different kinds
of restrictions.
    There have been numerous applications of the partially linear sample selection model. For
example, Newey, Powell and Walker (1990) and Buchinsky (1998) apply the model to study female
labor force participation. Stern (1996) uses it to study labor force participation among disabled
workers. Olley and Pakes (1996) use the partially linear framework to control for nonrandom firm
entry and exit decisions in a study of productivity in the telecommunications industry. Additional
applications are discussed in section 5.

2.3    Averages of functions: evaluating effects of treatments
A common problem that arises in economics as well as other many fields is that of determining the
impact of some intervention or treatment on some measured outcome variables. For example, one
may be interested in estimating the effect of a job training program on earnings or employment
outcomes.10 In evaluating social programs, the average effect of the program for people participating
in it (known as the mean impact of treatment on the treated) is a key parameter of interest on
which many studies focus.
    Let (Y1 , Y0 ) denote the outcomes for an individual in two hypothetical states of the world
corresponding to with and without receiving treatment. Let D be an indicator variable that takes
the value 1 if treatment is received and 0 else. The outcome observed for each individual can be
written as Y = DY1 + (1 − D)Y0 . The mean effect of the program for program participants with
characteristic X is given by E(Y1 − Y0 |D = 1, X). The average of this parameter for the treated
(D = 1) population is E(Y1 − Y0 |D = 1).
    Under certain conditions, the conditional on X parameter can be estimated nonparametrically
                                        √
at a rate of convergence slower than n-rate; but the second parameter can be estimated non-
                                   √
parametrically at the parametric n- rate. The faster rate of convergence comes from the fact
that averages of nonparametric estimators converge at a faster rate than pointwise estimators and
sometimes even at a rate that is free from the dimension of the nonparametric estimation problem,
as discussed in detail in the next section and in section 6.
   9
    Heckman (1980).
  10
    See, e.g. Ashenfelter (1978), Bassi (1984), Ashenfelter and Card (1985), Fraker and Maynard (1987), Heckman
and Hotz (1989), Heckman and Smith (1995), Heckman, Ichimura, Smith and Todd (1998a), and Smith and Todd
(2000,2003).


                                                      10
    A variety of estimators have been put forth in the literature to estimate E(Y1 − Y0 |D = 1).
One class of estimators are so-called matching estimators, which impute no-treatment outcomes
for treated persons by matching each treated person to one or more observably similar untreated
persons. Heckman, Ichimura and Todd (1997, 1998) develop nonparametric matching estimators
that use local regression methods in constructing matched outcomes. Local regression estimators
are discussed in section 4. The application of these estimators in program evaluation settings is
discussed in the Chapter by Abbring, Heckman and Vytlacil in this handbook.


3     Key Concepts in Flexible Modeling
A key motivation for studying flexible models is to bridge the gap between the typically weak
functional form restrictions economic theory suggests and the functional forms used in empirical
work. However, there are some limits to the gains that can be achieved with fully nonparametric
methods and the choice of how nonparametric to be requires considering different trade-offs.
     Many models have been developed to study aspects of the conditional distribution functions
such as the conditional mean function and the conditional quantile function. Traditionally both
functions have been studied using the linear in parameter model. Let the dependent variable
be y, conditioning vector be x, and a known finite row vector of functions of x be r (x). Then
the linear in parameters model specifies the conditional mean function or the conditional quantile
function by r (x) β for some unknown finite dimensional vector β. The ordinary least squares
estimator estimates the conditional mean function and the quantile regression estimator estimates
the conditional quantile function. On the other hand, the most flexible way of specifying the model
would be to specify g (x) for some unknown function g (·). The unknown function itself or its
derivative may be the parameter of interest.
     The specification of parametric models involves two difficulties: which variables to include
in the model and what functional form to use. Nonparametric methods do not resolve the first
difficulty, but they do resolve the second. Thus if g (·) could be estimated with the same accuracy
as that for β, then there would be no reason to consider finite dimensional linear in parameter
model. Unfortunately that is not the case. Let n be the sample size. Under very general regularity
conditions, there are estimators of β that converge with rate n−1/2 ; thus r (x) β can be estimated
with the same rate. In the context of nonparametrically estimating the conditional mean function,
Stone (1980, 1982) showed that any estimator of g (·) converges slower than n−1/2 .

3.1   Consistency concepts
Three leading types of consistency concepts in the finite dimensional estimation problem are conver-
gence in probability, convergence almost surely, and convergence in r-th absolute mean deviation,
where r ≥ 1. In the nonparametric context, the parameter of interest is a function, so one can
consider each of the three consistency concept either at a point of the argument or one can consider
the function as a point in an infinite dimensional space. Let ĝ (x) be a nonparametric estimator
of a function g (x). One can regard it as an estimator of g (x) at a particular point x and dis-



                                                11
cuss consistency of θ̂ = ĝ (x) to θ0 = g (x), which reduces the problem defining consistency for a
nonparametric estimator to the standard finite dimensional framework.
    The same problem can be framed differently by defining a norm on a space of functions in
which ĝ (x) and g (x) lie.11 Let X ⊂ Rd be the support of µ (x) which is the probability measure
of the relevant random vector of the functions in G. We assume that X is included in the domain
of functions in G. An often used norm is an Lr -norm (k·kr )or sup-norm (k·k∞ ) where the distance
between two functions ĝ (x) and g (x) is
                               Z                            1/r
                                                    r
                                      |ĝ (x) − g (x)| dµ (x)     or sup |ĝ (x) − g (x)| .
                                  X                                     x∈X

For α = (α1 , ..., αd ), let Dα = ∂ α1 +···αd / (∂ α1 x1 · · · ∂ αd xd ). In comparing two functions, one can
also include their partial derivatives up to the k-th order as in Sobolev norms (k·kk,r or k·kk,∞ ):
                                                          1/r
            X            Z
                            |Dα (ĝ (x) − g (x))|r dµ (x)       or       max        sup |Dα (ĝ (x) − g (x))| .
                         X                                             0≤α1 +···+αd ≤k x∈X
       0≤α1 +···+αd ≤k

Once a norm is defined, consistency can be defined using one of the three standard consistency
concepts.
   For any two norms, |·|1 and |·|2 in a finite dimensional space Θ there exist positive constants
CH and CL such that for any θ and θ0 ∈ Θ,

                                        CL θ − θ0 1 ≤ θ − θ0 2 ≤ CH θ − θ0 1 .

Hence, consistency using one norm implies consistency using another norm on the same space. For
infinite dimensional spaces, this is no longer the case, so we need to be more explicit about which
norm is used to define consistency.12 Which norm is more appropriate clearly depends on how
the estimator is going to be used. For example if a function value at a point is of interest, then
Lr -norm is not useful because there are many functions close to a function in Lr -sense which takes
on different value at measure zero points. Consider a function which is 0 on [0, 1] and set µ (x) to
be the uniform distribution on [0, 1]. Any function which differs from this function on a countable
number of points is indistinguishable from this function using Lr -norm.
    To carry out statistical inferences with nonparametric estimators, we need to examine distri-
butional results. Distributional results are often available for estimation of g (x) at each point
(pointwise). Some results are also available when g (x) is regarded as a point in a space of func-
tions, but in this chapter we will only describe asymptotic distributional results for a finite number
of points of x.
  11
      More generally one can define a metric on a relevant space of functions, but that generality may not be useful
as we typically want the distance between m̂ (x) and m (x) and that between m̂ (x) + c (x) and m (x) + c (x) for any
c (x) to be the same. It is easy to see that the distance between m̂ (x) and m (x) only depends on m̂ (x) − m (x).
   12
      One might wonder if a pointwise consistency concept can be regarded as a consistency concept using a metic
or a norm. Whether this is possible will depend on what the domain of m (x) is and what the set of functions is.
Without any restriction this is not possible.




                                                            12
3.2    Curse of dimensionality
Stone (1980, 1982) considers consistent estimation over a class of functions which are k-times
continuously differentiable with their kth derivative being Hölder continuous with exponent 0 <
γ ≤ 1: denoting p = k + γ
                                                                                                      
                                                                                             d        
                                               γ
                                                                                             X
Gp,C = f ; Dα f (x) − Dα f x0 ≤ C · x − x0 for any non-negative integers α1 , ..., αd with
                                
                                                                                                αj = k
                                                                                                      
                                                                                                          j=1



for some positive C. He shows that in general the optimal convergence rate for estimating the mth
derivative of g (·) pointwise or with Lr norm for any r with 0 < r < ∞ depends on the dimension
of the number of continuous conditioning variables d and the smoothness p (p > m) of g (·). In
particular, he shows that the optimal rate of convergence is n−(p−m)/(2p+d)) . For the sup-norm
he shows that the optimal rate is (log n/n)−(p−m)/(2p+d)) . Note that (p − m) / (2p + d)) < 1/2 so
that Stone’s result implies that the optimal rate is slower than n−1/2 . Stone also shows that an
analogous result holds for the estimation of Lebesgue densities.
    If we specify a different class of functions in place of Gp,C , then the optimality result may change.
For example, neural network literature considers a class of functions GC representable by an inverse
Fourier tansform formula with finite absolute first moment:
                     Z                                                       Z                      
                           iω·x
  GC = f ; f (x) = e F̃ (dω) for some complex measure F̃ with                     |ω| dF̃ (ω) dω ≤ C .
                                                                                Rd



See Barron (1993). For this class of functions, Chen and White (1999) constructs an estimator
which converges in mean square with rate

                                    (n/ ln n)−(1+2/(d+1))/[4(1+1/(d+1))] .

Whether this is the best rate for GC is an open question, but this rate is better than Stone’s
optimal rate when p < d/2 + d/ (d + 1). However, not all functions which are less smooth than
d/2 + d/ (d + 1) are in GC . Let [s] denote the largest integer which is less or equal to s. Barron
(1993) has shown that if the partial derivatives of f (x) of order [d/2] + 2 are continuous on Rd ,
then those functions can be considered to be in GC .13
    That the optimal rate may be slower than the regular n−1/2 -rate may be intuitive. Consider
estimating the conditional mean function g (x) = E (y|x) at a point x0 . If x has a probability mass
at x0 , then we can use data whose corresponding x equals x0 and construct the conditional mean
function estimator at point x0 . However, if x has continuous distribution and if we do not wish to
presume any particular functional form in the conditional mean function, all we can make use of
are data that lie close to x0 . Let it be an ε-neighborhood of x0 . In general we will have sample
size of order nεd if the underlying density is bounded away from 0 and finite. This implies that
the variance of the sample mean will decrease with rate 1/ nεd under i.i.d. sampling.14 If we are
                                                                
  13
    It will be useful to clarify the relationship between Gp,C and GC more completely.
  14
    An uncritical assertion we take for granted is that the mean of y whose corresponding regressors are in the
neighborhood is the best estimator of the g (x0 ).


                                                      13
to construct a consistent estimator for a large set of functions we will have to make ε smaller as
sample size increases because without making ε smaller we will not be able to gurantee the estimator
to be consistent for a broad class of functions specified in the set. This consideration separates
nonparametric estimation from more restricted estimation. That ε converges to zero implies that
the variance will decrease with rate slower than n−1 which in turn implies the estimator to converge
at rate slower than the n−1/2 -rate.
    This intuition can be used to gain more insight to the formula obtained by Stone. As we
                                                                                                −1
discussed the variance of an estimator of the mean in an ε-neighborhood is of order nεd             . On
the other hand, if g (·) has smoothness p, then a parametric assumption of polynomial of order [p]
on this ball will result in the bias of order εp if we consider all functions in set Gp . Thus the mean
square error to the first order is, for some constants C1 and C2
                                            C1
                                                + C2 · ε2p .
                                            nεd
Minimizing this expression over ε yields r = p/ (2p + d). If the target function is the m-th derivative
of g (x), note that the bias becomes of order εp−m . The variance also changes because the target
changes to the difference of means devided by something of order εm . Because the number of
observations is still of order nεd , the mean square error expression changes to
                                          C1
                                               + C2 · ε2(p−m) .
                                        nεd−2m
Minimizing this expression with respect to ε yields r = (p − m) / (2p + d).
    The result means that if we can only restrict ourselves to a conditional functions with a certain
degree of smoothness, then we can estimate the mth derivative of the function with a slower rate
which depends on three factors: the number of continuous regressors, underlying smoothness of the
target function, and the target function. The result is in sharp contrast to the situation where we
obtain the convergence rate of n−1/2 regardless.
    The dependence of the convergence rate on the dimension is often referred to as the curse of
dimensionality. The adversity limits our ability to examine data in a very flexible way (as in Gp )
for higher dimensional problems and has motivated examining models in the middle ground, which
impose restrictions on the class of functions for which estimation is valid and still retain flexibility.

3.3     Semiparametric models
The curse of dimensionality has been addressed using one of the three approaches: by changing
the parameter we estimate, by restricting the class of models we allow, and by imposing different
kinds of stochastic assumptions.

3.3.1    Changing the parameter

The first approach is to give up estimation of the nonparametric parameter and instead estimate
only some aspect of it. For example, instead of estimating g (·), one may estimate the average of
g (·) over a subset of the support of the regressors. Ahmad (1977) and Powell, Stock, Stoker (1989)


                                                   14
demonstrate this possibility. Ahmad (1977) considers estimation of f 2 (x) dx where f is a density.
                                                                      R

This is a basic quantity of interest in rank tests of location shift.
    Powell, Stock, and Stoker (1989) show how to avoid the curse of dimensionality by restricting
attention to a particular aspect of a parameter of interest. In their case, they are interested in the
derivative of a model, but they restrict attention to a weighted average of the nonparametrically
estimated derivatives so as to improve the convergence rate. Specifically, the nonparametric model
they study is

                                                 y = m(x) + ε

where m (x) = E (y|x). They show that the weighted average derivative of the nonparametric
regression function, {∂m(x)/∂x}f (x)2 w(x)dx for some weight function, can be estimated with
                     R

n−1/2 -rate, even though ∂m(x)/∂x itself cannot be estimated pointwise at a n−1/2 -rate. By chang-
ing the weighting function w(x) appropriately, the average derivative parameter can inform us
about some aspects of ∂m(x)/∂x. We will discuss this method in some detail in section 5.

3.3.2   Restricting the class of models

The second approach is to impose some restrictions on the underlying function. For example, some
popular ways of restricting the conditional mean function are to assume (i) an additively separable
model

                                      g (x) = φ1 (x1 ) + · · · + φk (xk ) ,

where φj (j = 1, ..., k) are unknown functions; (ii) a partially linear model,

                                         g (x) = r (x0 )0 β + φ (x1 ) ,

where r (·) is a known function and φ (·) is an unknown function; and (iii) a multiple index model
(Ichimura and Lee (1991))

                   g (x) = r0 (x0 )0 β 0 (θ) + φ r1 (x1 )0 β 1 (θ) , . . . , rk (xk )0 β k (θ) ,
                                                                                              


where rj (j = 0, 1, ..., k) are known functions and φ (·) is an unknown function. Note that the
multiple index model reduces to the partially linear model when rj (xj ) and β j (θ) (j = 1, ..., k) are
appropriately chosen.
    For the additive model, Linton and Nielsen (1995, 1997) show that the convergence rate of
φj (xj ) depends only on the number of continuous regressors in φj (·). For the partially linear
model Robinson (1988) shows that β can be estimated with n−1/2 -rate regardless of the number
of regressors in x1 . For the multiple index model, Ichimura and Lee (1991) show that θ can be
estimated with n−1/2 -reate regardless of the dimension of unknown function φ. We shall discuss
these models and estimation methods developed for these models in some detail in section 5.




                                                        15
3.3.3    Specifying different stochastic assumptions

The third approach imposes different kinds of stochastic assumptions on the model, such as a
conditional quantile restriction on the distribution of the error term in the model. This type of
assumption has been shown to be effective by Powell (1984) in achieving identification of model
parameters in the context of limited dependent variables. To illustrate the approach, we first need
to fully specify the probability model.
    A probability model is specified by a class of conditional or unconditional distributions of obser-
vations z, say F.15 To distinguish conditional and unconditional models, we write z = (y, x) where
x represents conditioning variables. Let Fx denote a conditional probability model. When there is
no need to distinguish the two models clearly, we use unconditional probability model notation F
. Sometimes F is specified indirectly as a known mapping, say h, from another parameter space
Θ into a space of distributions, F = {f : f (z) = h(z; θ), θ ∈ Θ}. This is the conventional way the
standard parametric model specifies F. When the indirect specification of a probability model
can be accomplished based on a finite dimensional space Θ in some ‘smooth’ way, the model is
called a parametric model.16 In contrast, a nonparametric model restricts F only with qualitative
conditions.
    Consider, for example, the linear regression model discussed above with a conditional mean zero
error with independent and identically distributed (i.i.d.) observations. In this case the model of
the conditional distribution of (y1 , ..., yn ) given (x1 , ..., xn ) is
                                                      n
                  (                                                                          )
                                                      Y                    
           Fx = f : f (y1 , ..., yn |x1 , ..., xn ) =   h yi − r (xi )T β|xi , β ∈ <K , h ∈ Γ ,
                                                       i=1

where Γ is a class of densities with conditional mean zero and finite variance.17 The parameter
space is Θ = <K × Γ. In the past, however, it was common to treat the parameter space as <K or,
under homoskedasticity, <+ × <K . Clarifying the probability model turned out to be an important
step towards understanding the convergence rate, bias, and efficiency bound of a semiparametric
estimator.
    We call a probability model which has some restriction on the (conditional) distribution of ob-
servables but does not have a strong enough restriction to allow parametric specification semipara-
metric. Under that definition, the linear regression model is semiparametric when the distribution
of the errors is not restricted to be a member of a parametric family. However, we note that the pre-
cise trichotomy of probability models into parametric, semiparametric, and nonparametric models
is by no means clear-cut.18 There seems to be no consensus about exactly what restrictions make
a model semiparametric.19 Sometimes an estimator is called nonparametric or semiparametric if
  15
     Whether the conditional or unconditional distribution is appropriate depends on the problem under consideration.
  16
     Without a smoothness restriction on the mapping from the finite dimensional parameter space to the space of
probability distributions, the definition of the parametric model is not meaningful. Without smoothness one can
always ‘encode’ an infinite dimensional space into a finite dimensional space.
  17
     A different specification of Γ leads to a different model. Another possibility is a class of densities with unique
conditional median zero.
  18
     See Bickel et. al. (1990) p.1–2 and Powell (1994), p.2449.
  19
     But unless there is some compelling reason to isolate some particular class there is no reason to dwell on the


                                                          16
it is consistent for a parameter in a nonparametric or semiparametric model, respectively. Until
more recently, the explicit specification of a probabilistic model was not common in econometrics,
except with regard to fully parametric models.
     Powell (1984) considers the classical linear regression model under censoring from below at 0.
The corresponding probability model is
                                                                                                       #1{yi =0} 
                                           n h                    i1{yi >0} Z −r(xi )T β
                                                                             "
                                          Y                                                                      
Fx = f : f (y1 , ..., yn |x1 , ..., xn ) =    h yi − r (xi )T β|xi                         h (s|xi ) ds             .
       
                                             i=1                               −∞                                 



As before the parameter space is Θ = <K × Γ. For this model Powell (1984) develops an estimator
of β which converges with rate n−1/2 when

    Γ = {g : g(s|x) is a continuous conditional density of ε given x,
                                                             and has unique median 0, and f (0|x) > 0}.

    Note that when we impose conditional mean zero restriction on Γ, then the only data that help
estimate β are those with x satisfying Pr {y = 0|x} = 0. So if a class of models includes those with
Pr {y = 0|x} > 0 almost surely, then there is no n−1/2 -consistent estimator of β.
    To some extent, these developments partly solve the specification search problem that was
described in the introduction. For the censored regression model, for example, the specification
search for the error distribution has become completely redundant as the slope parameters can be
estimated at the parametric rate without specifying a functional form for the error distribution.
However, search problems still remain for the specification of the systematic component of the
model. For the average derivative example, the specification search problem reduces to that of fully
nonparametric models: the main difficulty being which variables to use and not which functional
form to adopt.
    In a parametric setting, specification search often makes it difficult to assess the variability of the
resulting estimator. In contrast, there are now large classes of semiparametric and nonparametric
models for which at least asymptotic assessment of the variability of estimators is possible. Not
only has consistency been proved for many estimators, but the explicit form of the asymptotic bias
and variance has also been obtained.


4      Nonparametric Estimation Methods
Alternative nonparametric estimation methods can be viewed as different ways of extending para-
metric methods to make them more flexible. There are two main types of extensions. One extension
allows the parametric model to vary depending on the point of evaluation. By considering a real
valued function g (x) at a single point x0 , the problem of estimating the function becomes equiva-
lent to that of estimating a real number g (x0 ). If we are interested in evaluating the function in
the neighborhood of the point x0 , we can approximate the function by g(x0 ) or, if the distribution
subtle differences in the classification criteria.


                                                        17
of x is continuous in the neighborhood and g (x) is continuously differentiable at x0 , then a better
approximation might be g (x0 ) + g 0 (x0 ) (x − x0 ). Thus, the problem of estimating a function at a
point may be thought of as estimating two real numbers h (x0 ) and h0 (x0 ), making use of observa-
tions in the neighborhood. To estimate the function over a wider range of x values, the pointwise
problem can be solved at the different points of evaluation. This way of extending parametric
models corresponds to local nonparametric estimation.
    An alternative way of extending parametric models is to introduce a coordinate system in a
space of functions, which reduces the problem of estimating a function into that of estimating a
set of real numbers. For example, any element v in a l-dimensional vector space can be uniquely
expressed using a system of independent vectors {bj }lj=1 as

                                                   l
                                                   X
                                             v=          θ j · bj ,
                                                   j=1


where one can think of {bj }lj=1 as a system of coordinates and (θ1 , ..., θl )0 as the representation of v
using the coordinate system. Likewise, using an appropriate set of linearly independent functions
         ∞
  φj (x) j=1 as coordinates, any square integrable real valued function can be uniquely expressed by
                                                                                                      ∞
a set of coefficients. That is, given an appropriate set of linearly independent functions φj (x) j=1 ,
any square integrable function g (x) has unique coefficients {θj }∞   j=1 such that

                                                   ∞
                                                   X
                                         g (x) =         θj · φj (x) .
                                                   j=1

                            ∞
One can think of φj (x) j=1 as a system of coordinates and (θ1 , θ2 , ...)0 as the representation of
                   

g (x) using the coordinate system. This observation allows us to translate the problem of estimating
a function into a problem of estimating a sequence of real numbers {θj }∞j=1 . This way of extending
parametric models corresponds to the global nonparametric estimation approach.
    Below, we illustrate both global and local approaches to density and conditional mean function
estimation. We emphasize commonalities among estimation approaches that on the surface may
appear very different.

4.1     Density estimation
In parametric estimation, both maximum likelihood and method-of-moments estimators are avail-
able for estimating densities. Nonparametric density estimators can similarly be represented as
either maximum likelihood or method-of-moments based estimators.

4.1.1    Method-of-Moment based estimators

The kernel density estimator,
                                                      n
                                                      X
                                      fˆh (x) = n−1         Kh (x − xi )
                                                      i=1



                                                      18
provides the prototype of the class of method-of-moment type estimators. This type of estimators
was called method of delta sequence by Walter and Blum (1979) and Susarla and Walter (1981).
Note that the function h−1 K((x − t)/h) as a function of t will explode when t = x if K (0) > 0 and
h → 0, but when t 6= x, the function will approach zero if lim|s|→∞ |s|K(s) = 0. Moreover
                                     Z ∞            
                                           1     x−t
                                             K         dt = 1
                                       −∞ h       h
          R∞
whenever −∞ K (t) dt = 1. Therefore, the function h−1 K((x − t)/h) can be viewed as an approxi-
mation to a function with the following properties:
                                (                         Z +∞
                                  +∞ if t = x
                      δ x (t) =                     and          δ x (t) dt = 1,
                                  0     otherwise          −∞

which is called a Dirac delta function.20 Note that with these properties we have,
                         Z +∞                           Z +∞
                               δ x (t) f (t) dt = f (x)      δ x (t) dt = f (x) ,
                            −∞                              −∞

where the first equality follows because δ x (t) = 0 when t 6= x. Since the left hand side equals
E {δ x (X)}, where X is a random variable with Lebesgue density f , this equality can be viewed
as the moment condition for estimating f at a point x. Because any function which is 0 except at
a point integrates to 0 in Lebesgue sense, the Dirac-delta function cannot be handled within the
standard theory. But it can be expressed as a limit of a class of standard functions indexed by h,
say δ x (s, h). By setting δ x (s, h) = h−1 K((x − t)/h) and using the moment condition yields kernel
density estimator.
    We assume that indexing is such that the above requirements for δ x (s) hold for δ x (s, h) as
h → 0. That is,
                                    (                            Z +∞
                                       +∞ if s = x
                  lim δ x (s, h) =                      and lim        δ x (s, h) ds = 1.
                  h→0                  0     otherwise       h→0 −∞

Analogously when indexing by a parameter that diverges to infinity is more convenient we write
δ x (s, m) and assume that m → ∞.
     Some other density estimators can also be seen as method-of-moment estimators for a particular
choice for the bandwidth parameter in the kernel function. For example, the nearest-neighbor
method described in section 6 is a kernel density estimator with a data-dependent smoothing
parameter, h, that depends on the distance between the data points.
     Consider an orthogonal bases {φv (·)}∞
                                          v in a space of Lebesgue densities and suppose any density
function f in this space can be written as
                                                     ∞
                                                     X
                                           f (x) =         cv φv (x)
                                                     v=1
  20
   We need to define what we mean by convergence. It converges to Dirac delta function in a sense that for all
smooth function,
                                      Z ∞           
                                          1     x−t
                                  lim       K          ϕ (t) dt = ϕ (x) .
                                  h→0 −∞ h        h
See Walter and Blum (1979) and Zemanian (1965) section2.2.


                                                     19
           R∞
where cv = −∞ φv (s) f (s) ds = E {φv (X)}. A natural estimator is to truncate the series at some
finite number, say m and replace cv with the sample average. The resulting estimator is
                           m       n                      n m
                                             !
                   ˆ
                           X    1 X                    1 XX
                   f (x) =           φv (xi ) φv (x) =         φv (xi ) φv (x) .
                                n                      n
                                    v=0        i=1                                 i=1 v=0
                   Pm
Let δ x (s, m) = v=0 φv (s) φv (x). We can show that δ x (s, m) also satisfies the requirements of a
Dirac delta function.21 Therefore, the series expansion estimator can be viewed as a method-of-
moment based estimator with a different approximation to the Dirac delta function. Figure 4.1
plots δ x (s, m).
    {Figure 4.1: implicit kernel function for the Fourier series density estimator }
    A notable difference between the kernel estimator and the series estimators is that the kernel
estimator estimates the density to be zero only when there is no observation near the point whereas
the series estimator puts zero weight outside the support points of the bases functions. This implies
that in order to estimate the density function whose support is the entire Rd , it is desirable to use
bases supported on the entire Rd . The second difference is that the δ x function which corresponds
to the series estimator has support on a window that does not depend on the number of terms
in the expansion, whereas the delta function for the kernel density estimation has a support that
depends on the bandwidth choice unless the support of it is the entire Rd . The third difference
is that in the kernel density estimator the choice of the shape of the delta function and its scale
are separate but in the series estimator they are not. For the series estimator inclusion of more
base functions, which correspond to a smaller bandwidth in the kernel density estimation, imply
changing the shape of the delta function as well as changing the amount of smoothing.

4.1.2      Likelihood-based approaches

Another natural way of estimating densities is a maximum likelihood (ML) approach. However, a
straightforward application of the likelihood method fails in nonparametric density estimation. To
see why consider the ML estimator
                                                               n
                                                               X
                                                        max          log f (xi )
                                                        f ∈F
                                                               i=1

where F is an a priori specified class of densities. If F is not restricted, then for each n one can
choose an f with spikes at xi and yet f be a density. Thus the likelihood can be made as high
as desired regardless of the underlying density and the method leads to an inconsistent estimator.
The source of the problem is analogous to that in try finding a maximizer of a function on an entire
real line.
  21
       We want to show
                       m
                                               (                                     m              Z +∞
                       X                           +∞    if s = x                    X
                 lim         φv (x) φv (s) =                            and lim            φv (x)          φv (s) ds = 1.
                m→∞
                       v=0
                                                   0     otherwise            m→∞
                                                                                     v=0            −∞


The first condition corresponds to the convergence of the Fourier series of the Dirac delta function. The second
condition corresponds to the convergence of the Fourier series of the constant function of 1.



                                                                 20
    Many modifications have been proposed to resolve this failure by restricting F in some way.22
Imposing smoothness alone does not correct the situation in the same way assuming smoothness of
an objective function does not necessarily enable us to find a maximizer of a function defined over
an entire real line. To see this, first observe that the likelihood value is only affected by values of
f (x) on the data points x1 , ...,xn . One can therefore construct a polynomial function that passes
through any given finite points that are a subset of the graph of log f (x), making the likelihood
value arbitrarily large. Stronger restrictions are needed regardless of whether one takes a global or
a local approach.
    The global method, such as that of Stone et. al. (1997), restricts the rate at which more
complex functions are included in F as the sample size increases. The local method attempts to
approximate the density locally holding the complexity of the functions fixed. The approach taken
by Hjort and Jones (1996) and Loader (1996) is to approximate a density locally by a parametric
density such as the exponential density. Rates of convergence have been established for both local
and global estimators, but the form of the form of the bias is only known for the local approach.

Global likelihood estimation The global likelihood-based approach restricts the rate at which
complex functions are included in F as the sample size increases. Here, we describe a density
estimation implementation of Stone’s extended linear modeling, as exposited in Stone et al. (1997).
Their starting point is to observe that the log-density function can be written in the form
                                                      Z
                                l(h, X) = h (X) − log    exp h (x) dx
                                                                    X

for any function h (x) ∈ H, where H is a linear space of real-valued functions on X . The second
term on the right hand side ensures that exp [l (h, X)] is a proper density.23
    Stone et. al. (1997) define the estimator of the log-density as the maximizer of the log-likelihood
function
                                  Xn                  Z
                                      h (Xi ) − n log   exp [h (x)] dx
                                        i=1                     X

over h in a finite dimensional linear subset of H, denoted G. With no restriction on H to a smaller
subset G, the problem pointed out earlier about the inconsistency of the unrestricted ML estimator
                                                                                        Pn
also arises here. By choosing h to have spikes at observation points we can make          i=1 h (Xi )
                                                              R
as large as we wish, while keeping the contribution to n log X exp [h (x)] dx small. Also, for any
constant value C, h (x) and h (x) + C give rise to the same log-likelihood value so a normalization
is required. Stone et. al. (1997) use the normalization E [h (X)] = 0, which guarantees a unique
optimizer in G since the log likelihood function is strictly concave. The implementation of this
density estimation method depends crucially on how G is chosen.
 22
      See Prakasa-Rao (1984), Silverman (1984),    and Scott (1994).
 23
                                             R                                   R
      Here, h(x) = log f (x). The restriction X f (x)dx = 1 can be written as log X exp h (x) dx = 0.




                                                           21
Local likelihood estimation Loader (1996) and Hjort and Jones (1996) propose a localized
likelihood based estimator. The local likelihood is defined as
                            n
                            X                              Z
                 L (f, x) =   Kh (x − Xi ) log f (Xi ) − n    Kh (x − Xi ) f (u) du.
                                 i=1                                         X

Because the data are localized through the use of kernel weighting, the log-density only needs
to be approximated locally. Loader considers polynomial approximation of the log density that
is equivalent to using exponential models. Hjort and Jones consider approximation by general
parametric models. If we do not restrict the class of models to a small subset like the ones considered
in these papers, then the optimization problem does not have a well defined solution.
    To gain insight into the form of the above objective function, we show that one can view the
objective function as an approximation to a likelihood for a indicator variable Ii = I {|x − Xi | ≤ h},
which corresponds to the likelihood of observing data in the local area. Kh is assumed to be a
kernel function supported on [−1, 1]. We can write the likelihood as
                Xn                                          Z                         
                    Ii log [f (Xi ) Ii ] + (1 − Ii ) log 1 −   I {|x − u| ≤ h} f (u) du .
                  i=1                                                    X
                                                R                 R
Using the approximation log 1 − X I {|x − u| ≤ h} f (u) du ≈ − X I {|x − u| ≤ h} f (u) du gives
                       Xn                         Z                          
                           Ii log f (Xi ) − n log    I {|x − u| ≤ h} f (u) du
                             i=1                                     X
                                 n
                                 X          Z
                             −         Ii           I {|x − u| ≤ h} f (u) du,
                                 i=1         X

where the leading two terms are of higher order. Approximating the indicator function by the
kernel function Kh (x − Xi ) gives the objective function
                       Xn                              Z
                          Kh (x − Xi ) log f (Xi ) − n    Kh (x − u) f (u) du,
                           i=1                                           X

which is the objective function studied by Loader (1996) and Hjort and Jones (1996).24

4.2    Conditional mean and quantile function estimation
As with density estimation, there are both local and global approaches for estimating the condi-
tional mean or conditional quantile functions. Because the conditional mean or conditional quantile
function does not fully characterize the conditional distribution, most of the methods analyzed ex-
tensively in the literature are based on the method-of-moments approach rather than the likelihood
approach. Let G denote a class of functions in which the conditional mean function or the condi-
tional α-quantile functions lies. We can characterize both of the conditional functions in two ways:
as the solution to
                                           n                       o
                                    inf E ρ (yi − g (xi ))2 |xi = x                              (*)
                                            g(·)∈G
  24
    The local likelihood estimator is available as a supplement to the Splus statistical software package. In section
6, we present some results on the performance of this estimator relative to standard kernel density estimators.


                                                                22
or as the solution (unique up to measure zero sets using distribution of x as the measure) to

                                             inf E {ρ (yi − g (xi ))} ,
                                            g(·)∈G


where ρ (s) = s2 for the conditional mean function and ρ (s) = −α · 1 {s < 0} + (1 − α) · 1 {s ≥ 0}
for the conditional α-quantile function. The local method is based on the first characterization and
the global method on the second characterization. Analogous to the ML-based density estimation,
both local and global approaches to estimating conditional mean functions require that the space
M be restricted to avoid over-fitting.
    Let f (y, x) and f (x) denote the joint density of (y, x) and the marginal density of x, respectively.
Using the Dirac-delta function, δ x (s) , as used previously in setting up the moment condition for
the density estimation (Section 4.1), we can write
                 Z Z                                         Z
                                  2
                       [y − g (s)] f (y, s) δ x (s) dsdy =     [y − g (x)]2 f (y, x) dy
                                                               n                   o
                                                         = E (yi − g)2 |xi = x f (x) .
                                        n                o
As the last term is proportional to E (yi − g)2 |xi = x , the solution to the infimum problem is
the same so long as f (x) > 0. Following the same logic as for the density estimation case, one can
construct a sample analog objective function using approximations to the Dirac-delta function.
    If we do not restrict the class of functions (M) over which infimum is taken, then the opti-
mization problem does not have a well defined solution. Different local estimation methods can be
viewed as different combinations of decisions about (1) how to approximate the Dirac-delta function
(2) how to restrict the class M and (3) how to use the data in choosing the approximation and the
class M.
    For example, if we approximate the Dirac-delta function by
                                                      
                                            1     x−s
                                              K
                                            h      h

and restrict M to the class of constant functions, we obtain the standard kernel regression estimator
                                               Pn          x−xi
                                                                
                                                 i=1 yi K    h 
                                     m̂ (x) = Pn          x−xi    .
                                                  i=1 K     h

If function K (s) takes the form I (|s| ≤ 1) where |s| denotes a norm of s and I (A) is an indicator
function that is one if statement A holds and zero otherwise and the smoothing parameter h is
chosen to be the distance between x and the kth closest observations {xi }ni=1 , then the estimator is
the kth-nearest neighbor estimator. For the same Dirac-delta approximation, when M is replaced
by a class of finite dimensional polynomial functions, we obtain the local polynomial regression
estimators.25
 25
      See Stone (1977) and Fan and Gijbels (1996), for example.




                                                         23
                                        n               o
The global approach A sample analog of E [yi − g (xi )]2 is

                                                   n
                                               1X
                                                  [yi − g (xi )]2 .
                                               n
                                                  i=1

A global estimation method can be constructed as an optimizer of this sample analog. Different
global methods can be viewed as different combinations of decisions about (1) how the class M is
restricted and (2) how the data are used in choosing the class M.
    For example if we restrict M to be the class of finite order polynomial functions or Fourier
series on [a, b], then we get polynomial series or Fourier series estimators. If M is restricted to be
the m-th order Sobolev space on [a, b] with some finite variation of the m-th derivative, say and
for some given positive number Cm , then the class of estimators known as the smoothing splines
results.26
    There are some types of global nonparametric regression estimators that do not readily fall
into this classification. A leading example is a wavelet estimator, which presumes regressors to be
equally placed on rectangular boxes that are assumed to become smaller as sample size increases.27
There are also some wavelet estimators that seek to adapt to the smoothness of the underlying
regression function, assumed to be in a very general class.28
    The global approach to nonparametric estimation constructs a sequence of parametric models
Mn such that approximation error of m (·) by an element of Mn eventually goes down to zero as
n → ∞. Some well known sequences are a sequence of polynomial functions, a sequence of cubic
spline functions, or a sequence of wavelets. All sequences specify for each n some set of functions
          Jn
  φnj (x) j=1 , and use them to define the sequence of models by
                  
              Mn = f ; f (x) = θ1 φn1 (x) + · · · + θJn φnJn (x) for some θ1 , ..., θJn ∈ R .

Then, for each n the global estimator can be defined as m̂G (x, Jn ) = θ̂1 φn1 (x) + · · · + θ̂Jn φnJn (x),
where θ̂1 ,...,θ̂Jn are obtained by the least squares minimization problem of the following objective
function:
                               n
                               X                                            2
                                  yi − θ1 φn1 (xi ) + · · · + θJn φnJn (xi ) .29
                                 

                               i=1
                                                                                                Jn
   The properties of this estimator depend crucially on how we choose the base functions φnj (x) j=1
and Jn .
  26
     See Schoenberg (1964) and also Eubank (1988).
  27
     See Donoho and Johnstone (1994) and also Fan and Gijbels (1996) section 2.5 for a discussion of equispaced
wavelet estimation. See Hall and Turlach (1997) and Cai and Brown (1998) for nonequispaced sampling in one
dimension.
  28
     When they are not in the general class, we can define a wavelet estimator by choosing M to be a multi-resolution
approximation of a class of square integrable functions and choose the basis as well as the wavelet coefficients using
the global objective function restricting the number of local basis and the size of frequency coefficients.




                                                         24
The local approach The local nonparametric regression approach is based on fitting a simple
model to observations in a sequentially smaller and smaller neighborhood of a point at which we
wish to estimate m (·). The leading examples are local constant or local linear regression methods.
Local constant estimators are usually called kernel regression estimators. To gain insight into the
form of these estimators, observe that

                                    yi = m (xi ) + εi
                                         = m (x0 ) + εi + [m (xi ) − m (x0 )] .

When xi and x0 are close together and m (·) is smooth, then m (xi ) − m (x0 ) should be close to
zero. This implies that so long as we only use (yi , xi ) observations whose xi values are close to x0 ,
then fitting a constant function through the yi should roughly estimate m (x0 ).
    This observation motivates the following weighted least squares objective function:
                                            n                                 
                                            X                        xi − x0
                                                  (yi − α)2 K                      ,
                                                                        h
                                            i=1

where K (·) is a prespecified kernel function supported on a finite interval (typically a function
proportional to a symmetric unimodal density function centered at zero) and h is a prespecified
bandwidth.30 Methods for choosing h are discussed in section 6.31
   Solving the minimization for α gives the kernel regression estimator of m (x0 ):
                                               Pn          xi −x0
                                                                  
                                                 i=1 yi K     h 
                                 m̂K (x0 , h) = Pn        xi −x0
                                                  i=1 K      h

whenever the denominator is not zero.
    We could use a higher order Taylor expansion to exploit further smoothness of m (·), but this
would require using more parameters to characterize the local function and would not necessarily
lead to improved performance of the estimator. When there are K-regressors, the local linear
regression uses K + 1 parameters. In a local quadratic regression, we would need 1 + K (K + 1) /2
parameters. This means that we would need to choose a larger bandwidth h, which in turn makes
the model fit worse.

4.3     Properties of the kernel and local linear regression estimators
Schuster (1972) first proved asymptotic normality of the kernel regression estimator. Theorems for
consistency and asymptotic normality are stated in Härdle and Linton (1994). Here, we restate
the theorem for asymptotic normality of the local constant estimator for comparison with the local
linear estimator.32
  30
     See Härdle (1990).
  31
     Theoretical considerations imply that properties of the estimator depend more on the choice of h than on the
choice of the kernel function within a class of kernel functions. See, e.g., Epanechnikov (1969).
  32
     For consideration of the distribution of kernel estimators of derivatives of densities, see Härdle and Linton (1994),
and for consideration of the distribution of higher order local polynomial estimators in a time series context see Masry
(1996a,b).



                                                            25
    The following theorem applies to interior points of the support of Xi . An interior point is defined
as an x that satisfies |x − b(x)| > hn , where b(x) is a boundary or edge point in the support of Xi .
Let d be the dimension of X.

Theorem 1 Asymptotic normality of the kernel regression estimator at an interior point

   Under the following assumptions:
                      R∞                                                R∞          2+η du < ∞, for some
 (i) K(·) satisfies    −∞ |K(u)|du < ∞, lim|u|→∞ uK(u) = 0, and            −∞ |K(u)|
      η > 0.

 (ii) m(x) and f (x) are twice continuously differentiable at x and E(|Y |2+η |x|) exists and is con-
      tinuous at x.

 (iii) Limhn →0,n→∞ h5 n < ∞

   Then

                                (nhd )−1/2 (m̂(x) − m(x))˜N (Bn , Vn ) + op (1)

where
                                                                     Z ∞
                                     2        00  m0 (x)fx0 (x)
                           Bn   = h · (0.5m (x) +               )·         u2 K(u)du
                                                      fx (x)          −∞
                                            Z ∞
                                    σ 2 (x)
                           Vn   =               K 2 (u)du,
                                  fx (x)nhd −∞

and where σ 2 (x) = E(ε2 |x). 
    We next give the asymptotic distribution of the local linear regression estimator. Section 7 takes
up the question of how to derive the distribution theory. Note that the expressions for the variance
of local linear and for the Nadaraya-Watson kernel estimator are identical but the expression for
the bias differs. The bias of the kernel density estimator depends on the design density of the data
f (x), but the bias expression for the local linear estimator does not, which is an advantage for the
local linear estimator that is emphasized by Fan (1992).

Theorem 2 Asymptotic normality of the local linear regression estimator at an interior point

   Under the following assumptions:
                      R∞                                          R∞        2+η du < ∞, for some η > 0.
 (i) K(·) satisfies   −∞ |K(u)|du < ∞, Lim|u|→∞ uK(u) = 0,         −∞ |K(u)|

 (ii) m(x) and f (x) are twice continuously differentiable at x and E(|Y |2+η |x|) exists and is con-
      tinuous at x.

 (iii) Limhn →0,n→∞ h5 n < ∞




                                                      26
    Then

                             (nhdn )−1/2 (m̂(x) − m(x))˜N (Bn , Vn ) + op (1)

where
                                                          Z ∞
                                  Bn =   0.5h2n m00 (x)         u2 K(u)du
                                                        −∞
                                                      Z ∞
                                           σ 2 (x)
                                  Vn =                      K 2 (u)du.      
                                         fx (x)nhdn    −∞


    Performance at boundary points For x-points near the boundary, the kernel weighting
becomes asymmetric. In the extreme case, at boundary points, there is only a one-sided interval
over which to carry out the local averaging. This “boundary effect” will affect the bias and variance
of the kernel estimator. At boundary points, the bias of the kernel regression estimator of m̂(x)
converges at a slower rate than at interior points; the bias is O(h2n ) at interior points, but only O(hn )
at boundary points. A major advantage of local linear regression methods is that they overcome
the boundary effect problem, so that the bias is of the same order as boundary points as at interior
points. For additional information on boundary effects and various solutions to overcoming them,
see Härdle (1991).

4.4     Properties of Global Estimators
As described earlier, the global approach to nonparametric estimation constructs a sequence of
parametric models Mn such that approximation error of m (·) by an element of Mn eventually goes
down to zero as n → ∞. A well known sequence is a sequence of polynomial functions, a sequence
of cubic spline functions, or a sequence of wavelets. All sequences specify for each n some set of
                   Jn
functions φnj (x) j=1  , and use them to define the sequence of models by
                 
             Mn = f ; f (x) = θ1 φn1 (x) + · · · + θJn φnJn (x) for some θ1 , ..., θJn ∈ R .

Then, for each n the global estimator can be defined as m̂G (x, Jn ) = θ̂1 φn1 (x) + · · · + θ̂Jn φnJn (x),
where θ̂1 ,...,θ̂Jn are obtained by the least squares minimization problem of the following objective
function:
                            n
                            X                                            2
                               yi − θ1 φn1 (xi ) + · · · + θJn φnJn (xi ) .33
                              

                            i=1

    Clearly the properties of this estimator crucially depends on how we choose the base functions
         Jn
 φnj (x) j=1  and Jn . The properties of this type of estimator are studied extensively in the lit-
erature for one-dimensional cases but there are some important problems not resolved for higher
dimensional cases. For example, there is no characterization of approximation error to high enough
order to discuss optimal choice of Jn in these global methods and theories are often developed in
the context of equally spaced regressors. Thus, we will confine our attention in this chapter mostly
to the local approaches discussed above. For a summary of what is studied in the literature for the
global methods, see Fan and Gijbels (1996, Chapter 2) and literature cited therein.

                                                      27
5     Semiparametric Estimation
As discussed in section two, the curse-of-dimensionality problem associated with nonparametric
density and conditional mean function estimators makes the methods impractical in applications
with many regressors and modest size samples. Semiparametric modeling approaches offer a middle
ground between fully nonparametric and fully parametric approaches. They achieve faster rates of
convergence for conditional mean functions or other parameters of interest by specifying models
that are flexible in some aspects but also impose some parametric restrictions. The nonparametric
density and regression estimators described in the last section form the building blocks of a variety
of semiparametric estimators. A detailed discussion of techniques for deriving the distribution
theory is left for section 7.

5.1     Conditional mean function estimation
Suppose the relationship of interest is

                                              y = g(x) + ε

where x is a random vector of length kx and g is an unknown function from Rk into R and
E(ε|x) = 0. As described earlier, when x is of high dimension, the fully nonparametric estimator
of g(x) converges at a slow rate.
    We consider three classes of semiparametric estimators for g(x) that impose different kinds
of modeling restrictions designed to overcome the curse-of-dimensionality problem and to make
estimates easier to interpret. The first class, additively separable models, restricts g(x) to lie in
the space of functions that can be written as an additively separable function of the regressors.
The second class, single index models, assumes that x affects y only through an index x0 β. That
is, g(x) = g(x0 β). Multiple index models allow the conditional mean of y to depend on multiple
indices. The third class, partially linear models, assumes that the function g(x) can be decomposed
into a linear component and a nonparametric component, thereby extending the traditional linear
modeling framework to include a nonparametric term. Partially linear restrictions are often imposed
in connection with index model restrictions, giving rise to partially linear, single or multiple index
models.

5.1.1    Additively separable models

An additively separable model restricts g(x) to be additively separable in the components of the
vector x :

                       y = α + g1 (x1 ) + g2 (x2 ) + g3 (x3 ) + · · · + gk (xk ) + ε,

where the gi (xi ), i = 1..k, are assumed to be unknown and are nonparametrically estimated. A
key advantage of imposing additive separability is that the nonparametric estimators of the gi (xi )
functions as well as of the conditional mean function E(y|x) can be made to converge at the
univariate nonparametric rate. Another advantage is interpretive: the model allows for graphical

                                                    28
depiction of the effect of xj on y holding other regressors constant. The separability assumption
is also not as restrictive as it may seem, because some regressors could be interactions of other
regressors (e.g. x3 = x1 x2 ). However, for gi (xi ) to be nonparametrically identified, it is necessary to
rule out general forms of collinearity between the regressors. That is, we could not allow x1 = ψ(xk )
for some ψ function, for example, and still separately identify g1 (x), gk (x).34

Estimation Methods

    Backfitting As described in Hastie and Tibshirani (1990), additively separable models can
be solved through an algorithm called backfitting (which generalizes the Gauss-Seidel method for
solving systems of simultaneous equations).
    The algorithm involves three steps:

(i) Choose initial starting values for α and for gj . A good starting value might set α0 = average(y)
     and gj0 equal to the values predicted by a linear in x least squares regression of y on a constant
     and all the regressors.

(ii) For each j = 1..k, define gj = Ê(y − α − l6=j gl0 (xl ) |xj ), where gl0 is the most recent estimate
                                                 P

      of gl (xl ) (the starting value at the first iteration). The conditional expectation is estimated
      by a smoothing method, such as kernel or local linear regression, or series expansion or spline
      regression. At this stage, if it is desired that a functional form restriction be imposed on the
      shape of one or more of the gj functions, then the restriction can be imposed by setting, for
      example, Ê(y − α − l6=j gl0 (xl ) |xj ) = xj β j .
                              P


(iii) Repeat step (ii) until convergence is reached (when the estimated gl (xl ) functions no longer
      change).35

    Backfitting can require many iterations to reach convergence, but it is relatively easy to imple-
ment and is available in the software package Splus. A disadvantage of the method is that there is
as of yet no general distribution theory available that can be used to evaluate the variation of the
estimators when nonparametric smoothing methods are used in step (ii).

    An estimator based on integration An alternative approach to estimating the additively
separable model, which is studied by Newey (1994), Linton and Härdle (1996), Linton, Chen,
Wang and Härdle (1997) and others, is a method based on integration that has the advantage
over the backfitting approach of having a distribution theory available. It is more more difficult
to implement, however, because the method requires a pilot estimator of the nonparametric model
g(x).
  34
    See the discussion of concurvity in Hastie and Tibshirani (1990).
  35
    Also see Hastie and Tibshirani (1990) for discussion of a modified backfitting algorithm that, in some circum-
stances, converges in fewer iterations.




                                                       29
   For notational simplicitly, consider the additively separable model with two regressors y =
α + g1 (x1 ) + g2 (x2 ) + ε. Define the integration estimator
                                                  Z
                                       g̃1 (x1 ) = ĝ(x1 , x2 )dFx2 ,

where ĝ(x1 , x2 ) is a nonparametric estimator of E(y|x1 , x2 ) obtained without imposing additivity.
The empirical integration estimator is given by
                                                          n
                                                          X
                                        ĝ1 (x1 ) = n−1         ĝ(x1 , x2 ),
                                                          i=1

where the estimator is self-weighting by the density of x2 . If the model is additive, then ĝ1 (x1 )
estimates g1 (x1 ) up to an additive constant. Reversing the roles of x1 and x2 obtains an estimator
for g2 (x2 ), again up to scale.
    Newey (1994) shows that the estimator ĝ1 (x1 ) converges at the univariate nonparametric rate
because of the averaging. We show below (in relation to the average derivative estimator) why
averaging increases the rate of convergence.
    A key advantage of estimating additive models through integration is that the distribution
theory for the estimators is available. A disadvantage is that the integration estimator requires
that the higher dimensional estimate of the g(x) be calculated prior to averaging, and also that the
existing distribution theory for the estimator requires the use of negative kernel functions be used
for bias reduction.(See e.g. Härdle and Linton, 1996)

Generalized additive models The additive modeling framework described above has been
generalized to allow for known or unknown transformations of the dependent variable, y. That is,
estimators are available for models of the form

                        θ(y) = α + g1 (x1 ) + g2 (x2 ) + g3 (x3 ) + · · · + gk (xk ) + ε,

where the θ link function may be a known transformation (such as the Box-Cox transformation)
or may be assumed to be unknown and nonparametrically estimated along with the gi functions.
Hastie and Tibshirani (1993) describe how to modify backfitting procedures to accommodate binary
response data and survival data when the link function is known. For the case of an unknown θ
function, Breiman and Friedman (1985) propose an estimation procedure called ACE (Alternating
Conditional Expectation).36 Linton, Chen, Wang and Härdle (1997) describe an instrumental
variables procedure for estimating the θ function, which is based on the identifying assumption
that the model is only additively separable for the correct transformation of the y variable, so that
misspecification in θ shows up as a correlation between the error terms and the instruments.
  36
    ACE is also discussed in Hastie and Tibshirani (1990). The ACE algorithm is available in the Splus software
package.




                                                       30
5.1.2    The partially linear model

The partially linear model extends the conventional linear regression model to include an additively
separable nonparametric component. It takes the form

                                            y = x0 β + ϕ(z) + ε,                                          (1)

where x and z are real random vectors of length kx and kz , respectively, ϕ is an unknown function
from Rkz into R, and E(ε|x, z) = 0.
    This type of modeling framework is often adopted when there many regressors and fully non-
parametric estimation is impractical. It is also a good choice when the model contains discrete
regressors along with a few continuous ones. As discussed in section two, the partially linear model
has broad applicability to the problem of estimating Engel curves and to the problem of controlling
for sample selection bias. Estimators for the partially linear model are studied in Heckman(1980,
1990), Shiller (1984), Stock (1985), Wahba (1984), Engle, Granger, Rice and Weiss (1986), Cham-
berlain (1987), Powell (1987), Newey (1988), Robinson (1988), Ichimura and Lee (1991), Andrews
(1991), Cosslett (1991), Choi (1992), Ahn and Powell (1993) and others.
    Sometimes β is the key parameter of interest and ϕ is considered a nuisance function. Several
of the estimation techniques developed in the literature provide estimators for β, treating ϕ as a
nuisance function to be eliminated. In an influential paper, Robinson (1988) showed that despite
the presence of a nonparametric component, ϕ, in the model, β can be estimated at the usual
parametric rate. Thus, parametric restrictions on ϕ can be relaxed at no cost in estimating β.
Robinson (1988), Powell (1987) and Ahn and Powell (1993) develop various differencing procedures
to eliminate ϕ. However, in some applications and for the purposes of prediction, the ϕ(·) function
and its properties may be of interest along with those of β.37 Here we consider estimators for both
β and ϕ(·). Our discussion draws on results in Heckman, Ichimura and Todd (1998) that extend
Robinson’s (1988) estimator to allow for generated regressors, data-dependent bandwidths, and a
new method of trimming the data.(Bandwidth selection and trimming are discussed in section 6).
    Several estimation methods have been advanced for partially linear models. Robinson (1988)
proposes an estimator for β for the case when x and z are mutually exclusive. Powell (1987) studies
estimation of β in the single index version of the model

                                          y = x0 β + ϕ(p(z)) + ε
                                       p(z) = p(z 0 θ)

when n−1/2 -consistent estimation of θ is possible. Ichimura and Lee (1991) propose a way of
simultaneously estimating β and θ with truncated data. Ahn and Powell (1993) study estimation
of β when p(z) can be estimated nonparametrically. Heckman, Ichimura and Todd (1998) study
estimation of β, ϕ(p(z)), and the mean of ϕ(p(z)), ϕ̄, allowing for generated regressors and data-
dependent bandwidths. All authors establish asymptotic distribution theories for their estimators.
  37
   For example, in Engle, Granger, Rice and Weiss (1986), Blundell and Duncan (1998), Deaton and Paxon (1998),
Schmalensee and Stoker (1995) and Heckman, Ichimura, Smith and Todd (1998) characterizing the ϕ function is an
important part of the problem.


                                                     31
   Before describing estimators for the parameters of the model given in (1), we need to introduce
some notation. For an arbitrary random variable S and a random vector T , let ES|T (t) denote the
conditional mean function of S given T evaluated at point t and denote its estimator by ÊS|T (t).

    Robinson’s (1988) estimator Robinson’s (1988) estimator for β uses a nonparametric es-
timator of ES|T (t) for all the support points of T , where S = y or x, and T = z. The method
Robinson proposes for estimating β is an analogous to the Frisch-Waugh “double residual regres-
sion” (see e.g. Malinvaud, 1970, and Goldberger, 1968) in a semiparametric context. β is estimated
by β̂ R = (X̃ 0 X̃)−1 X̃ 0 Ỹ where the ith rows of X̃ and Ỹ are [xi − Êx|z (zi )]Ibzi and [yi − Êy|z (zi )]Ibzi ,
respectively for i = 1, ..., n. If the density of T is close to zero at t, the nonparametric estimator of
ES|T (t) is unreliable. This problem is avoided through trimming (using Bickel’s (1982) appoach).
Let Ibt = I{fˆT (t) > b}, where I{A} is an indicator function which takes value one if A holds and zero
otherwise, fˆT (t) is an estimator of the density of T at t, and b a given number. The idea is to only
use points that make the indicator function one so that the density value, at least asymptotically
exceeds b.
    The partially linear model includes sample selection model of Gronau (1973) and Heckman
(1974) and more generally includes index models as studied by Heckman and Robb (1985). However
the approach as prescribed by Robinson (1988) is of limited value applied to these cases, because
the method only identifies coefficients of x variables that are not in the z variables. Under the
stronger conditions that lead to index models, Powell (1987) and Ahn and Powell (1993) study the
model where x and z can have overlapping elements. They show that if there is an index function
p(z) = p(z 0 θ) through which variables z affect outcome y, so that

                                                 y = x0 β + ϕ(p(z)) + ε,

then identification of β may be possible even when all variables in x and z coincide.
    In the context of the earnings selection model described in section two, ϕ(p(z)) corresponds to
the control function E(u|x, w > wr ) included to control for bias and p(z) would typically correspond
to the predicted probability that an individual with characteristics z works as estimated from a
binary choice model. When data only are available on workers (i.e. truncated data), then exclusion
restrictions are required to separate out the bias function from the systematic component of the
model.
    A natural extension of Robinson’s estimator to the single index setting is a two stage least
squares version that replaces Êy|z (zi ) and Êx|z (zi ) with Êy|p(z) (p̂(zi )) and Êx|p(z) (p̂(zi )), respectively.
However, that involves a technical difficulty because the properties of the trimming function that
Robinson used no longer apply when p(z) is estimated.

    Ahn and Powell’s estimator (1993) To resolve this difficulty, Powell (1987) and Ahn and
Powell (1993) adopt a weighting scheme that circumvents the need for trimming in the estimation
of β. Let di = 1 if w > wr and di = 0 else. In the first stage, p̂(zi ) = E(di |zi ) = Pr(di = 1|zi ) is
estimated by a kernel regression of di on zi , p̂i = nj=1 Kh (zj − zi )dj / nj=1 Kh (zj − zi ).38 In the
                                                    P                      P

  38                                  z −z
       Recall that Kh (zj − zi ) = K( j h i ).


                                                           32
second stage, pairwise differences are taken over observations with similar estimated p̂i values. The
estimator solves
                                    −1 n−1 n
                                    n    X X
                    β̂ = arg min               [yi − yj − (xi β − xj β) − (p̂i − p̂j )]2 ŵij ,
                              β     2
                                           i=1 j=i+1

where weights ŵij = h−1n Kh ((p̂i − p̂j ))di dj measure the proximity of two observations in terms of
their estimated p̂i values. Observations for which the estimated p̂i values are far apart receive little
or zero weight.
    As discussed in Ahn and Powell (1993), the estimator has an alternative interpretation as an
instrumental variables estimator, which can be seen by writing the estimator as

                                                 β̂ = [Ŝpx ]−1 [Ŝpy ]

where
                                           −1 n−1 n
                                           n    X X
                               Ŝpx =                 ŵij (p̂i − p̂j )(xi − xj )0
                                           2
                                                   i=1 j=i+1
                                         −1 n−1 n
                                         n    X X
                               Ŝpy   =             ŵij (p̂i − p̂j )(yi − yj )0 .
                                         2
                                                   i=1 j=i+1

This shows that estimator is a weighted instrumental variables fit in the sub-sample with di = 1 for
all pairwise differences yi − yj of the dependent variable on the corresponding pairwise differences
xi −xj of regressors using differences pi −pj as instruments and ŵij as weights. Powell (1987) shows
that this estimator is also equivalent to a weighted instrumental variables version of Robinson’s
(1988) estimator, with weights given by a nonparametric density estimator of the index variable
pi . Ahn and Powell’s estimator avoids the need for trimming through density weighting.
     The above estimation procedure only gives an estimator for β. If we wish to study the prop-
erties of the function ϕ(·) along with β, then the problem of trimming reemerges. A drawback
of the trimming approach taken by Robinson (1988) is that it does not control the percentage of
the data being trimmed and is therefore subject to the risk that a large percentage of the data
could be inadvertently trimmed away in estimation.39 Heckman, Ichimura and Todd (1998) pro-
pose a data-dependent trimming method that guards against this problem by trimming away only
a fixed percentage of the data. We next describe their extension of Robinson’s estimator to allow
for a data-dependent trimming method and for generated regressors, as often arise in sample se-
lection problems. The estimator uses local linear regression in all nonparametric projections. The
advantages of local linear methods over kernel methods were discussed in section 4.

    Heckman et. al.’s (1998) extension of Robinson’s (1988) estimator Heckman et.
al. (1998) study the two stage least squares version of Robinson’s (1988) estimator, under the
index-sufficient assumption and for the case where pi is estimated parametrically. The estimator is
β̂ = (X̃ 0 X̃)−1 X̃ 0 Ỹ , where the matrices X̃ and Ỹ are those whose ith row is [xi − Êx|p(z) (p̂(zi ))]Ibi
  39
       See Robinson’s (1988, p. 936) comment on this problem.


                                                          33
and [yi − Êy|p(z) (p̂(zi ))]Ibi , respectively for i = 1, ..., n, and Ib is a data-dependent trimming function.
Conditional means are estimated by local linear regression. We first define the estimators for β 0
and ϕ(p) and then describe their distribution theory. Section 7 describes techniques for deriving
the distribution theory.
    Let the index p̂i = p(zi0 θ̂) where p(·) is a known cumulative distribution function and θ̂ is
a n−1/2 -consistent estimator of θ0 . Also define x̃i = xi − Êx|p (pi ) and ỹi = yi − Êy|p (pi ). The
estimator for β 0 is:
                                           ( n                   )−1 ( n                   )
                                            X                         X
                                    β̂ =          x̃i x̃0i Iˆi               x̃i ỹi Iˆi
                                            i=1                        i=1

where Iˆi = 1(fˆ(pi ) > q̂n ) is a data-dependent trimming rule–required because the estimator fails to
be consistent if the density of p̂i becomes too thin. Trimming is implemented using the standard
kernel density function in estimating the density (described in section 4):
                                                                 n              
                                                         −1
                                                                 X     p̂i − p̂j
                                    fˆ(p̂i ) = (nan )              J               ,
                                                                           an
                                                                 j=1

where J(·) is a one dimensional kernel function
                                              n thatosatisfies the properties discussed in section 4.
We choose q̂n to be the αth percentile of the fˆ(p̂i ) values, where α is typically a small number
such as 1 or 2.
    The following theorem, proven in Heckman et. al. (1998b), establishes the asymptotic properties
of β̂:

Theorem 3 : Distribution Theory for β̂

    Assume that

 (i) Data {(xi , yi , zi )} are i.i.d., E{||xi ||2+ε + ||zi ||2+ε } < ∞ for some ε > 0, and E{|yi |3 } < ∞.
        √
         n(θ̂ − θ0 ) = n−1/2 ni=1 ψ(zi ) + op (1), where n1/2 ni=1 ψ(zi ) converges in distribution to a
                            P                                P
 (ii)
        normal random vector.

 (iii) G satisfies (a) G(s) = 0 if | s |> 1
                   (b) G(s) is twice continuously differentiable.

 (iv) p(zi0 θ) is twice continuously differentiable with respect to θ and both derivatives have second
      moments.

 (v) Ex|p (pi ), E{ϕ(pi )} for j = 0, 1 are twice continuously differentiable with respect to θ.

 (vi) H1 = E{[xi − Ex|p (pi )][xi − Ex|p (pi )]0 Ii } is nonsingular.

 (vii) The density of pi (θ), fθ , is uniformly bounded and uniformly continuous in the neighborhood
       of θ0 and for any ε > 0 there exists δ > 0 such that if ||θ − θ0 || < δ then sup |fθ (s) − fθ0 (s)| <
                                                                                               0≤s≤1
        ε.

                                                                 34
 (viii) na3n / log n → ∞ and na8n → 0.

Under conditions (i)-(viii),
                                               n
                                               X
                   n−1/2 (β̂ − β 0 ) = n−1/2         H1−1 {[xi − Exi |p (pi )]εi Ii + H2 ψ(zi , di )} + op (1)
                                               i=1

where H2 = E{[xi − Ex|p (pi )]p(zi0 θ0 )[zi − Ez|p (pi )]0 Ii }. 
    Using the estimated β to purge y of its dependence on X, we can estimate ϕ(p) by a local linear
regression of yi − x0i β̂ on p̂i evaluated at p0 :

                                                     ϕ̂(p0 ) = Êyi −x0 β̂ (p0 )
                                                                        i


where Êyi −x0 β̂ is the local linear regression estimator defined in section 3.
              i
    The asymptotic properties of the local linear regression estimator of ϕ(p0 ) were described in
section 4, for the case where β is and p are not estimated. These assumptions are relaxed in the next
theorem, which allows for estimated β, a data dependent bandwidth and an estimated regressor p.
40


Theorem 4 Distribution Theory for ϕ̂(p) allowing for Estimated β̂, Plug-in Estimated Bandwidth,
and Estimated Regressors

          In addition to assumptions (iv), (v), (vi), and (vii) of the previous theorem, assume

 (i) the kernel function K(·) has bounded support, is twice continuously differentiable and satisfies
                R∞                 R∞                  R∞                    R∞
      satisfies: −∞ K(s)ds = 1, −∞ sK(s)ds = 0, −∞ K 2 (s)ds < ∞, −∞ s2 K(s)ds 6= 0.

 (ii) ϕ is twice continuously differentiable.

 (iii) fp (p0 ) > 0

 (viii) The bandwidth sequence satisfies ân = α̂n n−1/5 , plim α̂n = α0 > 0

 (ix) σ 2 (p0 ) = E[|yi − x0i β|2 | p = p0 ] is finite and continuous at p0 .

Under these assumptions,

                                      n2/5 (Êyi −x0 β̂ (p0 ) − ϕ(p0 )) ∼ N (B, V )
                                                      i

where
                                                                Z                 
                                              1
                                          Bϕ = ϕ00 (p0 )             s K(s)ds α20
                                                                       2
                                              2

                                               Var (yi − x0i β | p = p0 ) R 2
                                     Vϕ =                                  K (s)ds
                                                      fp (p0 )α0
and ϕ00 (p0 ) is the second derivative of the regression function. 
     40
   These formulae are valid for interior p points. See Heckman et. al. (1998b) for formulae that are valid at
boundary points.


                                                                35
5.1.3      Average derivative estimation

Average derivative estimation In some applications, economists are more interested in the
slope of a regression function than in the conditional mean function, for example when the aim is to
understand the marginal effect of a change in one variable on another, such as the effect of changing
prices on consumption fo a good.41 For the standard linear regression model where g(x) = xβ, the
marginal effect of x on y is β and estimating the conditional mean function and the slope amount
to the same problem of estimating β. But in the more general case,

                                                     y = g(x) + ε,

a different estimator is required for g(x) and g 0 (x). As described in section 4, the conditional mean
could be estimated by the intercept term from a local polynomial regression and the derivative
by the coefficient on the linear slope term. Both of these estimators are subject to the slower
nonparametric rate of convergence that depends on the dimension of x.
    If interest centers around the average of the marginal effects, E(g 0 (x)), rather than the entire
pointwise g 0 (x) function, then the curse of dimensionality can be avoided through the use of an
average derivative estimator. Variations of average derivative estimators are developed in Stoker
(1986), Härdle and Stoker (1989), Powell, Stock and Stoker (1989) and Stoker (1991). The faster
rate of convergence comes because averaging reduces the variance of the estimator, as shown in
section 7. The average derivative estimator imposes no parametric restrictions and is therefore a
fully nonparametric estimator. We describe it in here along with some semiparametric versions of
the estimator that invoke index restrictions.
    The direct average derivative estimator, simply takes an average over the pointwise nonpara-
metric estimates
                                              Pn ∂ Ê(yi |xi ) ˆ
                                                               Ii
                                       δ̂ AD = i=1   Pn ∂xˆ       ,
                                                        i=1 Ii

where Iˆ = 1(fˆ(xi ) ≥ qα ) is a trimming function that ensures that only estimates at points where the
density is positive are used in the average. An alternative average derivative estimator introduced
in Härdle and Stoker (1989) writes
                                            Z ∞
                               ∂g(x)             ∂g(x)
                           E(        ) =               f (x)dx
                                 ∂x          −∞ ∂x
                                                            Z ∞
                                                     ∞                ∂f (x)
                                       = g(x)f (x)|−∞ −          g(x)        dx.
                                                             −∞        ∂x

Under the assumption that g(x) is bounded and f (x) dies out in the tails, the first term g(x)f (x)|∞
                                                                                                    −∞
=0. We can write the second term as
                    Z ∞                       Z ∞
                              ∂f (x)                     ∂f (x)
                  −      g(x)        dx = −         g(x)         f (x)−1 f (x)dx
                      −∞        ∂x              −∞         ∂x
                                                                       
                                                        ∂f (x)       −1
                                        = −E g(x)              f (x)      = δ IAD
                                                          ∂x
 41
      In Schmalensee and Stoker (1999), the goal is to estimate the effect of changing prices on the demand for gasoline.


                                                           36
An estimator for this expectation, called the indirect average derivative estimator, is
                                                         n
                                                       1 X ∂ fˆ(x) ˆ −1 ˆ
                                          δ̂ IAD = −              f (x) yi I.
                                                       n     ∂x
                                                         i=1

This estimator requires the use of trimming to ensure a nonzero denominator.
   An alternative estimator that avoids the need for trimming is the density-weighted indirect
average derivative estimator:
                                                               n
                                                             2 X ∂ fˆ(x)
                                              δ̂ W IAD = −               yi .
                                                             n     ∂x
                                                               i=1

Stoker (1991) gives conditions under which the direct and indirect average derivative estimators
are asymptotically equivalent. The density weighted versions are not equivalent to the unweighted
versions, however, because they estimate different parameters of interest.

5.1.4       Index Models

The single index model writes

                                                     y = g(xβ) + ε

Stoker (1986) notes that the average derivative estimator provides a convenient way of estimating
the index coefficients, β. The average slope identifies β up to scale:42

                                         ∂g(x0 β)          ∂g(x0 β)
                                                                 
                             δ AD = E               =E                · β.
                                           ∂x              ∂(x0 β)

Powell, Stock and Stoker (1989) consider weighted versions of the estimator, which also identify β
up to scale for any weighting function w(x)

                                           ∂g(x0 β)               ∂g(x0 β)
                                                                        
                        δ AD = E w(x)                 = E w(x)               · β,
                                              ∂x                  ∂(x0 β)
                           0 β)
                               
provided that E w(x) ∂g(x
                       ∂(x0 β)    6= 0. As discussed above, a convenient choice of a weighting function
is f (x):

                                                     ∂g(x0 β)
                                                             
                                    δ AD = E f (x)              = γβ k.
                                                       ∂xk

    Powell et. al. (1989) consider a rescaled version of the average derivative, δ ∗AD = [E(f (x))]−1 δ AD .
Although any scale normalization is valid (because the index coefficients are only identified up to
scale), this particular normalization makes the components of δ ∗AD comparable to linear model
coefficients in the case where g(x) = α + x0 β. An estimator for δ ∗AD is given by
                                                  n               n
                                          ∗      X                X ∂ fˆ(xi )
                                       δ̂ AD = −[   fˆ(xi )]−1 [2             yi ]
                                                                       ∂x
                                                   i=1               i=1
  42
       Estimating β in this way requires ruling out functionally related regressors.


                                                             37
                           ˆ
where fˆ(xi ) and ∂ f∂x
                      (xi )
                            are kernel estimators for the density and derivative of the density.
    Another estimator for δ ∗AD examined in Powell et. al. (1989) estimates δ ∗AD by an instrumental
variables regression of yi on xi . First, they note that by integration by parts it can be shown that

                                                                          ∂ fˆ(xi ) 0
                                               Ik E(f (x)) = −2E(                  x ),
                                                                             ∂x
where Ik is a k × k identity matrix. Therefore, Ik E(f (x)) is consistently estimated by the density
weighted average derivative estimator
                                                             n
                                                           2 X ∂ fˆ(xi ) 0
                                                       −                xi .
                                                           n      ∂x
                                                             i=1

The estimator for δ ∗AD for which Powell et. al. (1989) derive the distribution theory is:
                                               ( n               )−1 ( n              )
                                        ∗       X ∂ fˆi (xi )         X ∂ fˆi (xi )
                                                               0
                                     δ̂ AD =                  xi                    yi ,
                                                      ∂x                    ∂x
                                                 i=1                        i=1

              ˆ
where ∂ f∂x
         i (xi )
                 is the so-called “leave-one-out” estimator of the derivative of the density43 :
                                                                  n
                                      ∂ fˆi (xi )       1     k+1 X
                                                  =                 Kh0 (xi − xj ).
                                          ∂x        (n − 1)hn
                                                                        j=1,j6=i

 ∗                                                                                                              ˆ
δ̂ AD is equivalent to the estimated coefficient from an IV regression of yi on xi using ∂ f∂x
                                                                                             (xi )
                                                                                                   as the
instrument. Powell et. al. (1989) show under some regularity conditions the average derivative
                               √
estimator estimates β at the n rate.


6         Smoothing parameter choice and trimming
The flexible estimators described in sections 4 and 5 are specified up to choices of smoothing
parameters. The problem of choosing smoothing parameters in flexible estimation is analogous
to the model specification problem in parametric inference. For local estimators, the smoothing
parameter choice amounts to choosing the bandwidth parameter, hn . For global series estimators,
the smoothing parameter choice amounts to choosing how many and which of the basis terms to
include in the expansion. For semiparametric estimators, implementation also sometimes requires
choosing a method of trimming the data, as discussed in section 6.4. There are some claims in the
literature that the particular method used to trim the data does not matter, however it is not well
understand in what cases the trimming matters more or less.
    In this section, we discuss the problem of smoothing parameter choice in the context of density,
conditional mean, and derivative estimation. We summarize results in the literature and present
some results from our own Monte Carlo studies evaluating the performance of different smooth-
ing parameter selection methods. We also discuss trimming and provide an overview of different
trimming methods that have been developed.
    43
         The leave-one-out estimator is used because it simplifies the derivation of the distribution theory of the estimator.


                                                                   38
6.1      Methods for selecting smoothing parameters in density estimation
6.1.1      Choice of bandwidth in local, kernel density estimation

As was shown in Table 1, the mean-squared error of a nonparametric kernel density estimator
depends more on the choice of bandwidth than on the choice of kernel within a class of commonly
used kernels.44 Therefore, in the following discussion we take the choice of kernel function as given
and focus on the question of how to choose the smoothing parameter. As discussed above, the
smoothing parameter choice represents a trade-off between bias and variance. Smaller smoothing
parameters leads to lower bias, but possibly at the cost of increased variance.
    One way of choosing smoothing parameters is to use graphical diagnostics, which reveal how an
estimated surface changes in response to varying the bandwidth. There are some problems with this
approach. One is that the procedure by which the parameter is chosen is not typically well specified
so that results cannot be reproduced. Another problem is that our eye can see the realized variance
but not potential bias, the outcome of a eye-balling method of choosing the parameter is probably
to oversmooth (i.e. choose too large a bandwidth value). However, for a simple problem, graphical
diagnostics can be a good check on the results of an automatic bandwidth selection method. For
more complicated problems or for cases where nonparametric estimates are being used as input into
a semiparametric estimation problem, the graphical approach is too user-intensive to be practical
and a more automatic bandwidth selection method is needed. For nonparametric density and
regression estimation, the importance of developing data-based methods to guide researchers in
selecting bandwidths is well recognized and a variety of bandwidth selectors have been proposed
in the statistics and econometrics literatures. All the methods select the bandwidth to minimize
error in estimation. They differ primarily in the criteria used for measuring estimation error.
    Here we describe the various criteria and the bandwidth selectors motivated by them. We also
summarize empirical evidence from Monte Carlo studies reported in the literature that compare
the performance of different methods. Although researchers generally agree that some methods
outperform others under certain conditions, there is no clear consensus in the literature on a single
most-effective method. This is not surprising, however, because different bandwidth selectors invoke
different sets of assumptions on the underlying data generating process. Table 6.2 summarizes the
kinds of assumptions invoked by four popular bandwidth selectors that are discussed in detail below.
    As shown in the table, the Sheather-Jones plug-in (SJPI) selector achieves a faster rate of
convergence than the classical cross-validation selector but only by invoking stronger smoothness
assumptions. The cross-validation selector has a slower rate of convergence, but it has the advantage
that it maintains its optimality properties under very weak assumptions on the data generating
process. Because the performance of each bandwidth selector depends both on the sample size and
on the smoothness and distribution of the underlying data, different selectors cannot be compared
in isolation from the type of data being analyzed. Therefore, one of our goals here is simply to
clarify the factors that need to be considered in choosing an appropriate selector. After describing
the selectors available in the literature, we present evidence from our own Monte Carlo study for a
simulation based on earnings data.
 44
      See Epanechnikov (1969). These results are also summarized in Hardle and Linton (1994).


                                                        39
 Selector                        Rule-of-thumb        SJPI                   Smoothed Bootstrap    LSCV
 assumptions needed              f(x) twice           f(x) Holder cont.,     ?                     twice diff.
 for consistency                 differentiable       square integrable                            and 2nd derivative
                                                      fourth derivative45                          uniformly cont.46

 assumptions needed              f(x) normal          same as for            ?                     same as for
 for optimality property                              consistency                                  consistency

 optimality criterion47          AMISE                AMISE                  MISE                  ISE

 convergence rate                Op (n−1/2 )          Op (n−5/14 )48         Op (n−5/14 )          Op (n−1/10 )
 of bandwidth selector

            Table 1: Comparison of Assumptions Invoked by Different Bandwidth Selectors


Optimality criteria A standard measure of estimation error is the mean-squared-error (MSE),
defined as the variance + bias2 . A global measure of estimation error is the expected value of the
MSE, called the mean integrated squared error (MISE).49 The MISE is defined as
                                                  Z
                                    M ISE(h) = E (fˆh − f )2 ,

where fˆh is a nonparametric estimator and, unless otherwise specified, all integrals go from −∞ to
∞.
    Under conditions described in Silverman (1986) the MISE is asymptotically approximated by
the asymptotic mean integrated squared error (AMISE). Given expressions for the asymptotic bias
and variance, the AMISE can be defined for any nonparametric estimator. For the standard kernel
density estimator, it equals
                                             Z
                                                  00
                       AM ISE(h) = (1/4)h4 ( f (x)2 dx)c21k + n−1 h−1 c2k ,

where c1k and c2k are constants that depend only on the kernel function: c1k = s2 K(s)ds and
                                                                                  R

c2k = K 2 (s)ds. Differentiating with respect to h gives the bandwidth that minimizes the AMISE:
     R

                                                              1/5
                                              c2k       1
                                    hAM ISE = 2    R 00             n−1/5 .                                (2)
                                              c1k [ f (x)2 dx]

The optimal bandwidth decreases with the size of the sample and increases when the effect of bias
                                R 00
on the AMISE is greater (when f (x)2 dx is larger).
   hAM ISE provides an estimator for a global bandwidth, i.e. one that is fixed for all points of
evaluation. We could also derive an expression for a bandwidth that varies across data points and
minimizes the AMSE at every data point. The advantage of a variable bandwidth is that it adapts
 49
      This measure was discussed in the early literature by Rosenblatt (1955) and Parzen (1962).



                                                          40
better to the design of the data and results in an overall lower value of MISE. A disadvantage is
that once the bandwidth is allowed to depend on the data, the resulting estimator is no longer
guaranteed to be a density. Because of this problem, we will only consider global methods for
choosing the bandwidth in density estimation. For regression estimation, this problem does not
exist so we will consider both global and local bandwidth selectors.
    ¿From equation (2) we see that estimating the global optimal plug-in bandwidth that minimizes
                                                  R 00
the AMISE requires obtaining an estimate of f (x)2 dx. Rule-of-thumb, solve-the-equation plug-
in, and biased cross-validation bandwidth selection procedures (described below) provide three
different ways of estimating this unknown quantity.
    An alternative measure of estimation error to the MISE is the integrated squared error (ISE),
given by
                                  Z
                     ISE(h) =       (fˆh (x) − f (x))2 dx
                                  Z                 Z                Z
                              =      fˆh (x)2 dx − 2 fˆh (x)f (x)dx + f (x)2 dx.

Hall and Marron (1987) argue that ISE is a better criterion than MISE, because the bandwidth
that minimizes ISE is better suited for the particular dataset at hand. The least squares cross
validation procedure, described below, minimizes an estimate of the ISE.
    A third measure of estimation error that is occasionally used is Kullback-Leibler (KL) informa-
tion defined by
                                             Z      
                                       ˆ              f
                               dKL (f, fh ) = log         (x)f (x)dx.
                                                     fˆh
It measures the distance between the estimated density and the true density. Likelihood cross-
validation chooses the bandwidth to minimize KL distance.50
    All proposals for choosing bandwidths in an optimal way minimize a measure of estimation
error. Some methods minimize the same error criterion but differ in terms of implementation. For
example, the rule-of-thumb, plug-in-equation and biased cross-validation approaches all minimize
                                            R 00
the AMISE but differ in how they estimate f (x)2 dx. Other methods, such as LSCV and LCV,
differ in the criteria used.
    Jones, Marron and Sheather (1996) (henceforth JMS) survey a variety of bandwidth selection
methods, which they classify into “first generation” and “second generation” approaches. They
argue that there has been a “quantum leap” in terms of performance between first generation
and second generation methods. However, other researchers disagree with this assessment and
  50
    Hall (1987) notes that the estimator that minimizes the Kullback-Leibler criterion only works when the tail
behavior of the density can be neglected, since the criterion is infinite when the estimated density is 0. Kawazawa
(1993) notes that an estimator that minimizes the Kullback-Leibler criterion (when the tail effect can be ignored) is
equivalent to one that minimizes the mean Helliger distance given by
                                                     Z
                                   M HD(fˆh , f ) = E {fˆh (x)1/2 − f (x)1/2 }2 dx.

The bandwidth chosen to minimize the mean Helliger distance (hM HD ) will be more sensitive to tail behavior than
hAM ISE , since Helliger distance allocated larger weight to regions with low density.


                                                         41
maintain that some first generation methods perform as well as second generation methods in
many reasonable situations.(See Loader, 1996, and Cleveland and Loader, 1996) Below, we further
examine this claim in a simulation study and also find some evidence to support the reliability of an
early technique called least squares cross-validation (discussed below) as a way of choosing values
of smoothing parameters.

   First generation methods One of the earliest bandwidth selection proposals is the rule-of-
thumb (ROT) method, which minimizes an estimate of the AM ISE.51 The problem of estimating
                          R 00
the unknown quantity f (x)2 dx is addressed by assuming a value based on a parametric family,
usually the N (0, σ 2 ) distribution. Under normality,
                                   Z
                                      00               3
                                     f (x)2 dx = σ −5 √ ≈ 0.212σ −5 .
                                                     8 π

If in addition a normal kernel is used, the ROT bandwidth is approximately equal to 1.06σn−1/5 .
     Because the scale parameter σ is potentially sensitive to outliers, Silverman (1986) suggests
using a more robust rule-of-thumb estimator, where the interquartile range of the data replaces the
sample standard deviation as a scale parameter. It is given by hROT = 1.06 min(σ̂, R̂/1.34)n−1/5 ,
where σ̂ is the sample standard deviation and R̂ the estimated interquartile range. (for Gaussian
data, R̂ ≈ 1.34σ̂).52
     Another early bandwidth selection procedure that is still a popular choice for empirical work
is least-squares-cross-validation, based on the ideas of Stone (1974), Bowman (1984) and Rudemo
(1982). This method minimizes ISE. The first term of the ISE is computable from the data and
the second term is estimated by −2n−1 ni=1 fˆh,i (Xi ), where fˆh,i (Xi ) is the leave-one-out kernel
                                             P

density estimator defined using the data with Xi removed:
                                                     X  Xi − Xj 
                                               −1 −1
                                fˆh,i = (n − 1) h      K              .
                                                               h
                                                         j6=i

If the data is not continuous and there are repeated observations at some of the x values, then the
leave-one-out estimator needs to be modified to exclude duplicate observations
                                                                       
                         ˆ                   −1 −1
                                                    X          Xi − Xj
                         fh,i = (n − 1 − nd ) h            K              ,
                                                                   h
                                                        Xi 6=Xj ,j6=i

where nd are the number of duplicate observations for which j 6= i but Xi = Xj .
   The third term of the ISE does not depend on the bandwidth and so can be treated as a
constant. Thus the LSCV bandwidth is chosen in minimize
                                       Z               n
                                                     2Xˆ
                             CV (h) = fˆh2 (x)dx −        fh,i (Xi )
                                                     n
                                                                  i=1
  51
    See Silverman (1986).
  52
    The rule-of-thumb method can of course be tailored to a particular application. For example, if a researcher
strongly suspected bimodality in the density, he/she may want to use a bimodel parametric density for the plug-in
estimator.


                                                       42
                                                                                       
                                                                                 Xj −Xi
To evaluate the first term, note that fˆh2 (x)dx = n−2 h−1 ni=1 nj=1 K ∗ K
                                      R                    P P
                                                                                    h     , where K ∗
                                                             R
K(u) is the convolution of the kernel function.(K ∗ K(u) = K(u)K(u − m)dm)
    The attractive property of the LSCV bandwidth estimator is that it does not require an estimate
   R 00 2
of f (x) dx, which appears in the AMISE formula. Asymptotic first-order optimality of LSCV
in density estimation has been established by Hall (1983) and by Stone (1984).
    Another bandwidth selection method that is closely related to LSCV, is likelihood cross-validation
(LCV), which minimizes the KL criterion.53 Observe that
                                        Z                      Z
                               ˆ               ˆ
                  −E(dKL (f, fh )) = E( log fh (x)f (x)dx) − log[f (x)]f (x)dx.

The second term does not depend on the estimated fˆh , and the first term is approximately equal
to the log of n−1 ni=1 log(fˆh,i (Xi )). Therefore, the KL criterion can be minimized by choosing the
                  P

bandwidth that maximizes n−1 ni=1 log(fˆh,i (Xi )) where fˆh,i is the leave-on-out estimator.54
                                   P

    Finally, a fourth method is biased cross-validation (BCV), developed by Scott and Terrell
(1987). The BCV selector minimizes the AMISE, as does the ROT selector, but uses a different
                         R 00
approach to estimating f (x)2 dx. Instead of plugging-in a value based on a parametric family,
                                00
the BCV method estimates f (x) nonparametrically using the same bandwidth as used for f (x).
                                            00
This leads to a bias term, because var(f (x)) does not converge to 0 for a bandwidth proportional
to n−1/5 . Scott and Terrell (1987) derive an expression that corrects for the bias:
                                                   Z           R 00 2 
                                   −1 −1         4      00        K (s) ds
                                                                             c21k ,
                                                                                 
                    BCV (h) = n h c2k + h              fh (x) −
                                                                    mh

where c1k and c2k are the constants defined previously. This expression applies to standard kernel
density estimators based on the quartic, triweight or Gaussian kernel. The bandwidth is chosen to
minimize BCV (h).

    Second generation methods The more recent literature aims to develop bandwidth selec-
tion methods that outperform classical methods such as ROT or LSCV. There are many different
proposals, so for brevity we focus here on two that were found to be very promising in the Monte
Carlo studies reported in Jones and Sheather (1991) and Jones, Marron and Sheather (1996).
One is the so-called Sheather-Jones solve-the-equation-plug-in (SJPI) method and the other is the
smoothed bootstrap (SB) method. The SJPI selector builds on earlier bandwidth selectors proposed
in Park and Marron (1990).
    The SJPI method is similar to the BCV method, except that it goes one step further in trying
                                                   R 00
to obtain a better pilot bandwidth for estimating f (x)2 dx. Sheather and Jones (1991) propose
  53
    This approach is described in Härdle (1991), Bowman (1984), Hall (1992), and Kanazawa (1993).
  54
    The LCV procedure can only be used on compactly supported densities whose tail effect terms may be ignored,
because the KL criterion is infinite when the estimated density is 0. A problem with the LCV method noted by Hall
(1991) is that it tends to pick a large bandwidth to avoid the case of an observation having an estimated density of 0
(which could occur when a kernel function with finite support is used.) If the data is sparse, this can lead to choosing
too large a bandwidth.




                                                          43
choosing hSJP I as the solution of the fixed-point equation
                                         "                           #1/5
                                        c2k       1
                                    h = 2 R 00                              n−1/5 ,                         (3)
                                        c1k [ fg(h) (x)2 dx]
                                                     R 00
where g(h) is the bandwidth that is optimal for f (x)2 dx. The g(h) pilot is obtained by first
                                                                             R 00
finding the analogue to the AMISE expression for the problem of estimating ( f (x)2 dx) and
solving for the optimal g as a function of n :
                                               Z
                                                 000
                               g(n) = D1 (L)[ f (x)2 dx]−1/7 n−1/7 ,                       (4)

                                                     R 00
where L is the kernel function used in estimating f (x)2 dx, which may or may not be the same
                                             1/7 55
as K, and D1 (L) = 2Liv (0)/ u2 L(u)du
                               R

    Solving (2) for n in terms of h and plugging the resulting expression into g(n) gives an expression
for g(h) :
                                                        (R      00
                                                                            )1/7
                                         D1 (L)           f (x)2 dx
                               g(h) =                    R 000                     h5/7 ,
                                      [c2k /c21k ]1/7     f (x)2 dx

where the constants c1k and c2k are those defined above, which depend on the kernel function K
used to estimate f (x). At this point, the quantities in brackets are estimated by a ROT method
                                                R 00             R 000
with a normal reference density. Estimators for f (x)2 dx and f (x)2 dx are given by
                                                                n X
                                                                X n
                                                    −1 −5
                         ŜD (a) = {n(n − 1)}           a               φiv {a−1 (Xi − Xj )}
                                                            i=1 j=1
                                                              n X
                                                              X   n
                                                        −1 −7
                     and T̂D (b) = −{n(n − 1))              b               φvi {b−1 (Xi − Xj )},
                                                                 i=1 j=1

respectively. The bandwidths a and b are given by the normal scale model estimate of (4) and
the corresponding formula for f 000 (s)2 ds; a = 0.920λn−1/7 and b = 0.912λn−1/9 where λ is the
                               R

sample interquartile range. More details on the solve-the-equation-plug-in approach can be found
in Sheather and Jones (1991), and in Jones, Marron and Sheather (1992).
    Another “second generation” bandwidth selector found to perform well in Monte Carlo studies
is the smoothed bootstrap approach (SB), studied in Faraway and Juhn (1990) and Taylor (1989).
This method targets the MISE of the estimator directly instead of working through the AMISE.
The SB method can be implemented by constructing an initial estimate of the density for candidate
bandwidths and then generating bootstrap samples by resampling from the estimated densities. The
variance and bias are then be computed from each of the different samples, yielding an estimate
of the BMISE (bootstrap MISE) for each of the candidate bandwidths.56 The one with the lowest
BMISE is chosen as optimal.
  55
     The SJPI estimator requires that sixth derivatives of L exist, which precludes several of the commonly used
kernel functions. Sheather and Jones (1991) use a normal kernel.
  56
     See Faraway and Jhun (1990) for an alternative way of implementing the SB method.



                                                        44
   A drawback of SB is that bootstrapping is computationally intensive. However, Muller (1992)
shows that the SB method can be carried out without the usual bootstrap simulation step, in a
way that is computationally as fast as some of the other methods. He shows that BMISE equals:

                  BM ISE(h) = n−1 {h−1 R(K) + R(Kh ∗ fˆg )} + R(Kh ∗ fˆg − fˆg )}
                                        +R(Kh ∗ fˆg − fˆg ),

where ∗ denotes convolution.57

Empirical performance Methods for selecting bandwidths can be evaluated under two criteria:
their asymptotic behavior and their performance in Monte Carlo studies. However, as discussed
above, asymptotic comparisons between alternative selectors are only valid when the selectors
invoke similar assumptions. The leading bandwidth selectors currently in use invoke different sets
of assumptions, so they cannot be straightforwardly compared. For example, the fact that the
SJPI selector achieves a faster rate of convergence than the LSCV selector does not mean that it
is superior, because the SJPI selector imposes stronger assumptions and therefore is optimal for a
narrower class of models.(See the assumptions shown in Table 2.) Furthermore, estimators with
desirable asymptotic properties are not always the best performers in Monte Carlo studies, since
asymptotics may not be a good guide until the sample size is very large.
    Several published studies examine bandwidth performance in real data examples and in Monte
Carlo settings. They include Jones, Marron and Sheather (1992), Cao, Cuevas, and Gonzales-
Maniega (1994), Park and Turlach (1992), Park and Marron (1990), Härdle (1991), Cleveland and
Loader (1996) and Loader (1995). Below we summarize commonalities and disparities in findings
across studies and then present some findings from our own Monte Carlo study. More empirical
evidence needs to be accumulated to better understand how different methods compare under data
designs that commonly arise in economics.
    In their evaluation of rule-of-thumb (ROT) methods, Silverman (1986), JMS (1992) and Härdle
(1991) conclude that a ROT estimator with a normal reference density has a tendency to over-
smooth, or choose too large a bandwidth, particularly when the data is highly skewed or is multi-
modal. In two separate examples, JMS and Härdle find that the ROT estimator is unable to
detect a simple case of bimodality.58 JMS document a similar tendency to oversmooth for the BCV
method, which in simulations exhibited an even greater tendency to oversmooth than the ROT
method.
    The LSCV estimator tends to suffer from the opposite problem: undersmoothing. JMS (1992)
conclude that because of undersmoothing, the LSCV procedure leads to high variability and over-
all unreliability in choosing the optimal bandwidth. Hall and Marron (1991) partly explain the
undersmoothing tendency by showing that LSCV frequently gives local minima and the tendency
to undersmooth likely comes from not finding the global minimum. Park and Marron (1990) and
  57
    See Muller (1992) or Jones, Marron and Sheather (1996).
  58
    This drawback could possibly be overcome by using a more flexible parametric family as a reference in constructing
                       R 00
the plug-in estimate of f (x)2 dx. For example, a mixture of normals could be used.




                                                         45
Loader (1995) point out that LSCV is nonetheless the method of choice for cases where the re-
searcher is only willing to maintain a limited degree of smoothness on the true density. Most other
bandwidth selection methods require smoothness assumptions on higher order derivatives.
    The method that JMS find to be a good overall compromise between bias and variance is SJPI,
which they describe as “a consistent, stable performer ready for use as the default in software
packages.” However, a simulation study reported by Loader (1995) is less optimistic about this
selector. Loader finds the SJPI method to be very sensitive to the initial pilot bandwidth and also
to exhibit a tendency to oversmooth in simulations where the true distribution is multimodal. In
Loader’s simulations, the classical LSCV approach performs better.59 This was also the finding in
our own simulation study reported below.
    The SB selector has only been studied in a few papers. JMS find its performance to be close to
that of SJPI. Faraway and Juhn (1990) compare the SB and LSCV procedures and find that SB
performs better, which they attribute mostly to its lower variability.

Monte Carlo study of rule-of-thumb, Sheather-Jones plug-in and least-squares cross-
validation selectors We next present the findings from our own Monte Carlo studies. The
first study examines the performance of the rule-of-thumb (ROT), least squares cross-validation
(LSCV), and Sheather-Jones plug-in (SJPI) selectors. Our second study compares the performance
of the kernel density estimator to that of a local likelihood estimator.
     To ensure that our simulation is based on the kind of data that might realistically be examined
in empirical work, we choose as the design density a parametric mixture model that was visually
fitted to actual earnings data.60 Figure 6.1 shows the density of the earnings data, estimated by a
kernel density estimator using the biweight kernel and a bandwidth equal to 300. The bottom panel
shows the density used to generate the simulated data. It is a parametric mixture of a truncated
log normally distributed variable and a normal distributed variable.61
     We draw 500 simulated samples and estimate the density, using the three alternative methods
of selecting the bandwidths. Our LSCV method searches over a grid of 100 equally spaced band-
width values in between 20 and 2020. Table 3 reports the bias, variance and root-mean-squared
error across the simulated samples for three quantile points and on average over all the points of
evaluation. (All the numbers have been rescaled by 1e-10.)
     The method with the overall average lowest RMSE is LSCV, although the difference between
LSCV and SJPI is small. At particular quantile points the ROT and SJPI methods sometimes have
a lower RMSE than LSCV. From the bias and variance, we see that the LSCV has a lower average
bias and a higher average variance, which is consistent with previous findings in the literature that
  59
     It is worth noting, though, that Loader (1995) advocates using local likelihood density estimation methods,
described in section 3, instead of standard kernel methods. He concludes that “much of the criticism against cross-
validation and classical approaches would be better directed against kernel estimation and fixed bandwidth methods.”
  60
     The data was gathered in 1980 from a random sample of men and women who worked on Pennsylvania at some
time during 1976 to 1986. The data come from administrative records, which avoids problems of “heaping” at rounded
numbers that one often finds with self-reported earnings data.
  61
     With probability 97% x is drawn from a log normal where the ln x has a mean equal to 10 and a variance equal to
4.84. x is truncated at 50,000. With probability 3%, x is drawn from a normal mean 8000, variance 8100 distribution.



                                                        46
                                                   Bandwidth Selector
                                     Rule-of-Thumb   LSCV    Sheather-Jones Plug-in


    bias-squared      1st quantile          3.29          .0000889             .00000620
                        median             .694e             1.57                 1.57
                      3rd quantile        .000258          .000260              .000438
                        average             9.74             .741                 1.07

      variance        1st quantile          .0633            .803                 5.68
                        median             .00867            .410                 .292
                      3rd quantile         .00869            .174                 .116
                        average              .261            .634                 .380

       RMSE           1st quantile       1.83e+05         8.96e+04             7.54e+04
                        median           8.38e+04         1.41e+05             1.37e+05
                      3rd quantile       9.46e+03         4.17e+04             3.41e+04
                        average          2.12e+05         1.17e+05             1.20e+05


     Table 2: Performance of Alternative Bandwidth Selectors for Kernel Density Estimation


the LSCV method tends to be more variable than other methods. Figure 6.2 plots the density
of the estimates for the three bandwidth selector methods at the 25th quantile, median and 75%
quantile of the points of evaluation and shows the higher variance of the LSCV estimator.
    Figures 6.3(a) and (b) superimpose plots of the estimated density for each of the bandwidth
selectors on the true density for 2 representative simulation samples. The ROT selector performs
poorly relative to the other two selectors and misses the general shape of the curve, especially the
steep incline at low values.
    To reexamine the finding in the literature that the higher variability of the LSCV is partly due to
the existence of multiple optima, which make the global optimum hard to find, Figure 6.4 plots the
cross-validation objective function for a grid of 500 equally spaced bandwidth values in between 25
and 4000. For this data design, there do not appear to be multiple optima. An alternative possible
explanation for why LSCV tends to choose too low a bandwidth is that the ISE criterion, targeted
by LSCV, is estimated less precisely at smaller bandwidth values. Therefore, bad choices, when
they occur, will tend to be at smaller bandwidth values.

Monte Carlo study of local likelihood As described in section 4, a new estimator recently
proposed as a better alternative to standard kernel density estimators is local likelihood density
estimation, developed in Loader (1996) and Hjort and Jones (1996). Here we evaluate the perfor-
mance of a local likelihood estimator of degree 0, 1 and 2 on the simulated data described above.
In implementing the estimator, we consider different nearest neighbor bandwidth choices. One


                                                    47
                                    Degree of Local Likelihood/Nearest Neighbor Bandwidth
                                    0/35%     1/35%     2/35%    0/10%     1/10%   2/10%


   biasˆ2        1st quantile         .157          1.58          .539           .0604         .0404         .0578
                   median             .617          7.57          .855             .84          .875          .831
                 3rd quantile        .0126         .00438        .00183         .00298        .00197        .00315
                   average            .548          6.62          3.94            .687          .992          .480

  variance       1st quantile          .188          1.62          .185          .579           .704          1.21
                   median             .0222         .0276         .0571          .107           .117          .229
                 3rd quantile        .00585        .00851         .0146         .0263          .0284         .0594
                   average             .101          .107          .161          .438           .501          .931

   RMSE          1st quantile      5.87e+04      5.65e+04       8.51e+04      8.00e+04      8.63e+04       1.13e+05
                   median          8.00e+04      8.58e+04       9.55e+04      9.74e+04      9.96e+04       1.03e+05
                 3rd quantile      1.36e+04      1.36e+04       1.28e+04      1.71e+04      1.74e+04       2.50e+04
                   average         2.36e+05      2.59e+05       2.02e+05      1.06e+05      1.22e+05       1.19e+05


Table 3: Performance of Alternative Bandwidth Selectors for Local Likelihood Density Estimation


includes 35% of the data in estimation and the other includes 10% of the data.
    Table 4 presents the bias, variance, and RMSE for the local likelihood estimators.62 The local
likelihood estimator of degree 0 with a 10% bandwidth has an overall RMSE that is slightly lower
than the LSCV estimator that was found to perform best among the kernel density estimators.
Using a 10% bandwidth rather than a 35% bandwidth reduces the RMSE roughly by a factor of
two. Thus, like the kernel estimator, the local likelihood estimator appears to be fairly sensitive to
bandwidth choice. This is obvious in comparing Figures 6.5(a) and (b), which plot the estimated
curves for the same representative simulated sample for the two bandwidth choices. Changing from
degree 0 to degree 1 or 2 does not make a big difference.
    Figure 6.6(a) and (b) plot the density of the estimates for three quantiles and for estimates of
degree 0, 1 and 2. As discussed above, one claim in the literature about the superiority of local
likelihood estimators over standard kernel estimators is that they exhibit better behavior in the tails
of the distribution. To examine this claim, Figure 6.7 plots the bias, variance and RMSE for the
local likelihood estimators (with 10% bandwidth) and for the LSCV, SJPI and plug-in estimators
over the left tail of the distribution.
  62
    Software for local likelihood estimation is available from Clive Loader at Lucent Technologies (http://cm.bel-
labs.com/stat/project/locfit.) There are two versions of the software; one is in C and the other is a library of routines
written for and soon to be incorporated in the Splus language. We used the Splus library for our simulation study.




                                                           48
6.1.2    Conclusions and directions for further research

Different bandwidth selectors satisfy different optimality criteria under different sets of assumptions.
The relative benefit of choosing one selector over another depends on the sample size at hand and
on the researcher’s prior beliefs about the shape and smoothness of the density being estimated.
The LSCV selector imposes the fewest restrictions on the smoothness and shape of the density, but
also converges at the slowest rate of the different selectors. By restricting the class of probability
models being considered through shape and/or smoothness conditions, bandwidth selectors can be
made to converge to optimal ones at faster rates. However, asymptotic performance may be a poor
guide to selecting an appropriate bandwidth selection method for modest size samples.
    Our Monte Carlo study of three difference bandwidth selectors for the standard kernel estimator
(rule-of-thumb, SJPI and LSCV) showed that the method used to select the bandwidth can make
a big difference to the estimates. The classical LSCV method was found to perform best overall
in terms of lowest average RMSE, with the SJPI method a close second-best. The ROT selector
with a normal reference density performed much less well, exhibiting a large amount of bias and
missing the general shape of the curve.63 When the function being estimated is relatively smooth
(see Table 2), the SJPI method offers a quick, automatic way of selecting the bandwidth that is
less computationally intensive than LSCV. It performs relatively well in our study.64
    Our second Monte Carlo study of new local likelihood density estimators also revealed the
importance of the bandwidth choice. Although we considered only relatively crude nearest neighbor
methods, which were easily implementable with the currently available software, we found that using
a 10% nearest neighbor led to a big improvement over a 35% nearest neighbor. The local likelihood
estimators of degree 0, 1 or 2 with a 10% nearest bandwidth all performed better than the SJPI
method. The degree 0 estimator performed comparably to LSCV. Local likelihood appears to be a
promising new density estimation method that deserves further consideration.

6.2     Alternative methods for selecting smoothing parameters in regression func-
        tion estimation
As described in section 4, implementing global nonparametric regression estimators requires choos-
ing both a basis for the expansion and the degree of truncation. Implementing local polynomial
regression estimators requires choosing the value of the smoothing parameter and the degree of the
polynomial. Here, we first consider the problem of choosing the smoothing parameter for a local
polynomial estimator of fixed degree equal to one (i.e. local linear regression). Then we turn to
the problem of choosing the degree of expansion, both in global estimation and in local estimation.

6.2.1    Optimality criteria

Suppose the model under consideration is yi = m(xi )+εi , where the goal is to estimate the function
m(xi ). Many of the bandwidth selectors for density estimation described in the last section can be
  63
    This is the bandwidth selection method available in the Stata software.
  64
    It is worth noting though that Loader (1995) provides several examples of functions with many modes or with
sharp fluctuations where the SJPI performs poorly relative to the LSCV selector in simulations.



                                                      49
straightforwardly extended to nonparametric regression. A commonly used bandwidth selectors is
least-squares cross validation (LSCV), which minimizes a weighted ISE criterion. The method is
easily implemented as follows. First, the regression function m(x) is estimated for each of the data
points for a grid of candidate bandwidths. The ith observation is omitted in estimation and the
prediction errors are used to validate the model. We denote the so-called “leave-one-out” estimator
by m̂cv,h (xi ) and the prediction errors by Yi − m̂cv,h (xi ).
    The LSCV bandwidth is chosen to minimize the sum of the squared prediction errors:
                                                                n
                                                      1X
                                      hLSCV = arg min    (yi − m̂cv,h (xi ))2 .
                                                  hn n
                                                               i=1

When there are duplicate observations in the sense that the (yi , xi ) pair is the same for multiple
observations, then the “leave-one-out” m̂cv,h (xi ) estimator needs to be modified to also exclude
duplicate observations. Otherwise, the procedure will tend to choose too small a bandwidth as the
prediction error can always be set to 0 by choosing hn small enough.
    Another consideration in carrying out LSCV is that the local linear estimator is only defined
when there are at least two data points within one bandwidth of the point of evaluation. This
effectively places a lower bound on the values of bandwidths that can be considered.
    In the previous section, we described several different plug-in bandwidth selectors for kernel
density estimation that minimize the AMISE criterion. For regression estimation, both the AMISE
and the AMSE (asymptotic mean-squared error) are commonly used as criteria for selecting optimal
bandwidths. When the bandwidth is chosen to minimize AMSE at each point of evaluation, it will
vary pointwise. When the bandwidth is chosen to minimize a global AMISE criterion, it is fixed
across all the points of evaluation. We call selectors that choose a bandwidth that is fixed across
sample points global selectors and those that allow bandwidths to vary across points local or variable
selectors.
    Fan and Gijbels (1996) develop several variations of plug-in bandwidth selectors that minimize
either AMISE or AMSE for local polynomial models. For the local linear regression estimator of
m(x), AMISE equals

                                  C2 (K) 2 2
                     Z                     
                                                         V ar(yi − m(xi )|xi = x)
                                                       Z
                      1     00                     1                                 C3 (K)
        AM SE =           m (x)dx         hn +                                    dx         ,
                      2           C1 (K)          nan              f (x)             C1 (K)2

where C3 (K) and C1 (K) are constants that depend on the kernel function.65 Regarding the con-
ditional variance as a constant, σ, and taking the derivative with respect to h yields the global
optimal bandwidth:
                                                                 1/5
                                             σ2
                                          
                                                         C3 (G)
                                   hP I1 = R                          n−1/5 .
                                      {m00 (x)2 }f (x)dx C22 (G)

The denominator can be estimated by ni=1 m̂00 (xi ), where m̂00 (x) can be estimated from the coef-
                                         P

ficient on the quadratic term in a local quadratic or local cubic polynomial regression.66 σ 2 can be
estimated by the average sum of squared fitted residuals.
 65
      These constants are defined in section 4.
 66
      The coefficient on the quadratic term is an estimator for 12 m00 (x0 ).


                                                             50
   If we choose the bandwidth to minimize the AMSE instead of the AMISE, then the optimal
bandwidth, which now depends on the point of evaluation, is:


                                      V ar(yi − m(xi )|xi = x)dx C3 (K) 1/5 −1/5
                                                                        
                          hP I2 (x) =                                      n     .
                                           f (x) [m00 (x)]2 dx   C22 (K)

V ar(yi − m(xi )|x = x) is the conditional variance at xi = x and hP I2 is the plug-in bandwidth that
depends on the point of evaluation.
     Constructing a plug-in bandwidth requires estimating each of the unknown quantities in the
expression. The conditional variance is estimable by a local regression of the squared residuals on
xi and the density by a standard kernel density estimator or by a local likelihood estimator. Again,
each of these terms introduces more bandwidth selection problems, because they require specifying
“pilot” bandwidths. For estimating the density we can use any of the bandwidth selectors described
previously. One way to select pilots for estimating the conditional variance and m00 (x) is to use
a simple nearest neighbor or a rule–of-thumb guided fixed bandwidth. Another approach is the
“refined bandwidth selector” described in Fan and Gijbels (1996).
     An alternative to plug-in approaches are bootstrap resampling methods. In a nonparametric
regression context, the bootstrap method first constructs many bootstrap samples by resampling
(xi , yi ) pairs with replacement from the original dataset. Parameter estimates are then obtained
for each of the bootstrap samples and for each of the candidate bandwidths. The bandwidth
minimizing the empirical root-mean-squared error of the estimates, taken across the bootstrap
datasets evaluated at a common set of points, is chosen as optimal. This procedure can be used to
choose a bandwidth that varies depending on the point of evaluation or one that is common across
all points of evaluation. Bootstrapping is computationally intensive, because it requires estimating
the model repeatedly for many data subsamples and for a set of bandwidth choices.67

6.2.2       Empirical performance of alternative methods of selecting bandwidths in local
            estimation

We next evaluate the performance of three different bandwidth selectors for nonparametric regres-
sion in a Monte Carlo stimulation study. The study is based on data generated by the model
                2
yi = x + 2e−16x + 0.4ε where xi is drawn from a uniform distribution between -1 and 2 and εi from
a N(0,1) distribution.68 We draw 500 simulated samples with 500 observations in each. Figure 6.8
plots the data from one simulated sample, superimposed on the true m(xi ) function.
    The bandwidth methods we evaluate are the LSCV, variable plug-in and fixed plug-in selectors
described above. The LSCV method is implemented by searching over a grid of 20 equally spaced
bandwidth values in between 0.1 and 2. The plug-in selectors require that several pilot bandwidths
be specified. For estimating the density, we used the SJPI method described earlier. For estimating
  67
       The speed of computation can however be improved using estimation methods developed by Silverman (1982),
Fan and Marron (1994) and Wand (1994), discussed later in the chapter.
  68
     This data design is also considered in Fan and Gijbels (1996).




                                                       51
                                             Method for Selecting Bandwidth
                                          LSCV   Variable Plug-in Fixed Plug-in

          bias-squared     1st quantile   3.52e-06         2.93e-06             0.00007
                             median       6.98e-06         1.22e-05             0.00001
                           3rd quantile   7.21e-03         5.25e-05             0.10541
                             average        1.51             1.54                 1.45

          variance         1st quantile     0.037           0.002                0.025
                             median         0.006           0.006                0.005
                           3rd quantile     0.009           0.012                0.062
                             average        0.008           0.007                0.014

          rmse             1st quantile     0.193           0.179                0.157
                             median         0.078           0.076                0.075
                           3rd quantile     0.125           0.108                0.409
                             average        1.234           1.242                1.210


        Table 4: Performance of Alternative Bandwidth Selectors for Regression Estimation


m00 (x) we use a local quadratic regression with a variable nearest neighbor bandwidth that includes
20% of the data. The same nearest neighbor bandwidth is used to estimate the conditional variance.
     Table 5 presents the bias, variance and RMSE associated with each of the bandwidth selectors.
Of the three methods, the fixed plug-in method had the overall lowest RMSE which was due to a
lower overall average bias. Figure 6.9 plots the density of the estimated m(xi ) at three different xi
quantile points and Figure 6.10 plots the estimated m(xi ) function for a representative simulated
sample. All three bandwidth estimators do a reasonably good job in capturing the general shape
of the function.

6.2.3    Empirical performance of alternative methods of choosing degree of truncation
         in global series expansion

As described in section 5, global series expansion methods provide an alternative to local methods
for nonparametrically estimating conditional mean functions. An advantage of some of the global
methods is that they are easily implemented using a software package for linear regression. Imple-
menting a global series expansion estimator requires two decisions on the part of the user: which
basis to use and the number of terms to include. Here we evaluate different methods for selecting
the degree taking the basis as given. We use the basis of orthogonal polynomials to avoid numerical
instability that may arise in estimating high degree polynomial series that are not orthogonalized.
    We evaluate two main methods for selecting the degree of the series expansion: by standard
model selection criteria or by cross-validation. The three model selection criteria that we apply are


                                                    52
                                       Method of Selecting the Polynomial Degree
                                     BIC Akaike Hannan-Quinn Cross-validation

    bias-squared      1st quantile   0.0005   2.2e-03        0.0014
                        median       0.0051   1.4e-03        0.0033
                      3rd quantile   0.0010   2.4e-05        0.0003
                        average       1.554    1.557         1.556

    variance          1st quantile   0.0369   0.0373         0.0379
                        median       0.0051   0.0066         0.0056
                      3rd quantile   0.1442   0.0153         0.0150
                        average      0.0104   0.0110         0.1069

    rmse              1st quantile   0.1934   0.1987         0.1982
                        median       0.1011   0.0893         0.0948
                      3rd quantile   0.1241   0.1239         0.1237
                        average      1.2508   1.2522         1.2516


Table 5: Performance of Orthogonal Polynomial Expansion Estimator under Alternative Methods
of Selecting the Degree of the Polynomial


the Bayesian Information Criterion (BIC), the Akaike criterion, and the Hannan-Quinn criterion
(HQ).(See Judge et. al., 1985). The design of the data is the same as for the previous simulation.
Figure 6.11 plots the nonparametrically estimated function superimposed on the true function for
polynomials of different degrees for a representative sample and shows how the approximation
improves as the degree of the polynomial increases. For this example, the three model selection
criteria chose the same degree as optimal: 13. Figure 6.12 plots the density of the estimated m(xi )
for the simulated data at three different xi quantile points
    Table 6 reports the bias, variance and mean-squared error at three different quantiles and
averaged over all datapoints for the different methods of selecting the number of terms in the
series. The overall average RMSE is higher for the global expansion estimator than for the local
linear regression estimator, but the differences are not great.




6.2.4   Methods for choosing the degree of the polynomial and bandwidth simultane-
        ously

We now turn to the problem of how to choose the degree of the local polynomial regression. As
discussed in section 4, the local estimator of degree 0 or 1 is consistent as long as the smoothing
parameter shrinks to zero at the appropriate rate. Nevertheless, there is a potential gain from


                                                53
simultaneously choosing the degree of the polynomial and the smoothing parameter. A global
estimaotr can be thought of as the limiting case of a local estimator with a large bandwidth, so
some of the methods for choosing the degree of fit for global series estimators are adaptable to local
estimators. However, consistency of a nonparametric esitmator requires that either the bandwidth
shrink to zero or the number of terms in the series increase to infinity with the same size, but not
both. So, in some sense, there is a trade-off between shrinking the bandwidth and increasing the
degree of the polynomial. The problem of how to evaluate this trade-off has not been solved in the
literature and has been considered only in a few papers. (See e.g. Cleveland, Hastie and Loader,
1995, Cleveland and Loader, 1996, and Fan and Gijbels, 1996).

6.3     Methods for choosing smoothing parameters in semiparametric models
Relatively few papers have examined the problem of how to optimal choose smoothing parameters
in semiparametric models.69 Here we provide an overview of some of the developments in this new
area of research. We also describe in detail a new method for selecting bandwidths in estimating
semiparametric model parameters that is studied in Heckman, Ichimura and Todd (1998) and
present results from a Monte Carlo study evaluating this method.

6.3.1    Optimal bandwidth choice in average derivative estimation

The problem of choosing the optimal bandwidth in average derivative estimation is considered in
Powell and Stoker (1996), Härdle, Hart, Marron, and Tsybakov (1992), and Härdle and Tsybakov
(1993). Härdle et. al. (1992) study bandwidth choice for the estimation of univariate unweighted
average derivatives. Härdle and Tsybakov (1993) and Powell and Stoker (1996) study a variety of
weighted average derivative estimators for higher dimensions under a variety of weighting schemes.
Here, we describe the approach taken in Powell and Stoker (1996) as it applies to a univariate
indirect density weighted average derivative estimator. Their method chooses an optimal plug-in
bandwidth to minimize the leading terms of the asymptotic mean-squared error of the estimator.
Their approach is an extension of the nonparametric plug-in bandwidth selection methods discussed
previously.
    Recall from section 5 of the chapter that an indirect density weighted average derivative esti-
mator takes the form
                                                           n
                                                         2 X ∂ fˆ(x)
                                          δ̂ W IAD = −               yi.
                                                         n     ∂x
                                                             i=1

As shown in Powell and Stoker (1989), this estimator can be written in the alternative form
                                                 !−1
                                             N         X
                                                              p(xi , xj , y),
                                             2         i<j

  69
    See Hardle, Hall, and Ichimura (1993), Härdle, Hart, Marron, and Tsybakov (1992), Härdle and Tsybakov (1993),
Hall and Horowitz (1995), Hall and Marron (1987), Horowitz (1995), Linton (1995, 1996), Powell and Stoker (1996),
Robinson (1991), and Stoker (1997).



                                                         54
                                     x −xk
                          1      ∂K( i       )
where p(xi , xj , h) = − k+1     h
                             xi −xk (yi − yj ) and where K(·) is a kernel function satisfying K(u) =
                        hn
                         R ∂( hl )
K(−u), K(u)du = 1, K(u)u du = 0 for l < α, K(u)uα du 6= 0 (for commonly chosen kernels,
        R                                           R

α = 2). A requirement for asymptotic normality of the estimator is 2α > k + 2, where k is the
dimension of xi . Define
                                                              N
                                                           1 X
                                             r(xi , h) =       p(xi , xj , y)
                                                           N
                                                              i=1

and r0 (z) = limh→0 r(zi , h), where it is assumed that

                                      r(zi , h) − r0 (xi ) = s(xi )hα + o(h2α )

and

                                  E(||p(xi , xj , h)||2 ) = E(q(xi ))h−2 + o(h−2 ).

      As shown in Powell and Stoker (1996), the mean-squared error of δ̂ W IAD is given by

                 E(s(xi ))2 h2α + 4N −1 var[r0 (zi )] + 2N −1 C0 hα + 2N −2 E(var(p(x, xj , h)]h−2
                 +o(h2α ) + o(hα /N ) + o(1/N 2 h2 ) + o(N −2 )

Minimizing over h (noting that the variance term does not depend on the bandwidth) and keeping
only the leading terms gives the optimal plug-in bandwidth selector70 :

                                     γE(var(p(x, xj , h)] 1/(2α+2) 1 2/(2α+2)
                                                                 
                              hopt =
                                       α{E(s(x))}2                 N

6.3.2      Optimal bandwidth choice in the partially linear model

Two estimators considered in section 5 in relation to the partially linear model were β and ϕ(p).
Estimators for each of these parameters were specified up to some choice of smoothing parameter,
kernel function, degree of local polynomial, and trimming quantile level, α. Here we focus on how
to choose the smoothing parameter taking the choice of kernel function, degree of polynomial and
trimming level as given.
                                                          √
    As was discussed in section 5, β can be estimated at a n-rate within a theoretically wide range
                                                                       √
of choices for the smoothing parameter. ϕ cannot be estimated at a n-rate. Some of the data-
driven smoothing parameter selection methods described in the last two sections can be adapted to
a semiparametric model. Linton (1995) develops a plug-in method for β. Heckman, Ichimura and
Todd (1998) develop a variation of the cross-validation method for β, which they call the RMSE-
search method. After obtaining an estimate for β, any of the bandwidth selectors for nonparametric
regression can be applied in estimating ϕ. Table 7 summarizes the alternative bandwidth selection
methods that have been developed in the literature for each type of parameter.
    The least squares cross validation procedure, described in the last section with regard to non-
parametric regression, can be applied straightforwardly in choosing an optimal bandwidth for ϕ̂(pi ).
 70
      See Proposition 4.1 in Powell and Stoker (1996).


                                                             55
                                                               β̂ 1   ϕ̂(p)
                                           fixed                x       x
                                     cross-validation                   x
                                        bootstrap               x       x
                                global and local “plug-in”              x
                                    Linton’s “plug-in”          x
                                   min. RMSE search             x      x

Table 6: Alternative Methods Evaluated for Choosing Smoothing Parameters in the Partially Linear
Model

However, the procedure needs to be applied to yi − xi β̂ which requires that a preliminary band-
width be chosen for the purpose of obtaining the estimating β. The RMSE-search method, described
below, can be used to obtain an optimal bandwidth for estimating β.




       Though computationally intensive, Bootstrap methods can also be applied to obtain bandwidths
for estimating all the parameters of interest. The bootstrap method is implemented by first resam-
pling from the original dataset to construct many bootstrap samples. The model is then estimated
for each bootstrap dataset for each of a set of candidate bandwidths. The bandwidth that mini-
mizes the empirical RMSE of the estimates is chosen as optimal. Since an estimate for β is needed
in order to estimate ϕ(p), the bootstrapping procedure must be performed twice — once to search
for the optimal bandwidth for β and then again to search for the optimal bandwidth for ϕ and ϕ̄.71
    The plug-in bandwidth selection method chooses the optimal bandwidth to minimize an asymp-
totic approximation to the MSE or MISE. Because these quantities can be defined for all the
parameters of the semiparametric model, in principal a plug-in estimator could be developed for
each.

    RMSE-search method The RMSE-search method, developed in Heckman, Ichimura and
Todd (1998), is a variation of the cross-validation method that can be applied to choose bandwidths
for each of the parameters of the partially linear model. It is applicable to any linear nonparametric
regression function estimator as well as to cases where nonparametric regression function estimators
are used in the construction of a semiparametric estimator. The advantage of the RMSE-search
  71
    The speed of computation can be improved using the approximation methods developed by Silverman (1982),
Fan and Marron (1994) and Wand (1994). Some of these methods are described in section 8.



                                                    56
method is that it does not require specifying an initial pilot bandwidth or knowing the degree of
smoothness, as is usually required by plug-in methods. We first describe the approach in general
and then in relation to the partially linear model.
    The method is based on the idea of constructing an approximation to the asymptotic RMSE
using only the highest order terms of the asymptotic variance and bias expressions. Denote the
linear nonparametric regression function estimator with weights ŵjn (x0 , hn ) by Êy|x (x0 , hn ) =
Pn
   j=1 yj ŵjn (x0 , hn ), where hn is the smoothing parameter and yj = m(xj ) + εj with m(xj ) =
Ey|x (xj ) and εj = yj − m(xj ). Because of linearity, we can write

                                 Êy|x (x0 , hn ) = Êm(x)|x (x0 , hn ) + Êε|x (x0 , hn ),

Êm(x)|x (x0 , hn ) gives rise the asymptotic bias of the estimator and Êε|x (x0 , hn ) the asymptotic
variance. Typically,

                            Êm(x)|x (x0 , hn ) = m(x0 ) + B(x0 , hn ) + op (B(x0 , hn )),                              (*)

where B(x0 , hn ) is the highest order of bias that depends on m(x) and possibly also on the distri-
bution of x. We need to estimate B(x0 , hn ) to obtain the estimator of the highest order bias. From
(*), we might conjecture that

                            Êm̂(x)|x (x0 , hn ) = m̂(x0 ) + B̂(x0 , hn ) + op (B̂(x0 , hn )),                        (**)

so that Êm̂(x)|x (x0 , hn ) − m̂(x0 ) would estimate the bias function. We can make this argument
plausible by using the standard sample splitting idea: use the even number observations to compute
m̂(x0 ) and odd number observations to compute Ê·|x (x0 , an ). Then (**) can be formally justified
conditional on the even number observations whenever (*) is justified and m̂(x0 ) and m(x0 ) share
the same regularity conditions that justify (*). Note that estimating the bias function by this
method requires double-smoothing the nonparametric estimates m̂(x0 ).
     Estimation of the asymptotic variance is based on an estimator of εi . A natural estimator of εi
is ε̃i = yi − Êyi |x (xi ; an ), but this estimator contains a bias term comparable in magnitude to the
bias estimator. Instead we use ε̂i = yi − 2Êi,yi |x (xi ; an0 ) + Êi, m̂(xi )|x (xi , an0 ), where Êi,yi |x (xi ; an0 ) =
                                     0
P
   j6=i yj ŵjn0 (xi , an0 ), where n = n−1. The delete-one estimator is used to guard against overfitting,
as in cross-validation.
     To choose a bandwidth to estimate m(x), we can minimize an estimate of the RMSE:
                                                                      n
                                                                      X
                                                                 2
                                 [Êm̂(x)|x (x0 , an ) − m̂(x0 )] +         ε̂2i ŵi2 (x0 , an ).
                                                                      i=1

While most cross validation methods choose a global smoothing parameter, our method chooses a
pointwise smoothing parameter. It does not require choosing an initial pilot bandwidth parame-
ter.72 Also, the RMSE-search method does not require knowing the degree of smoothness a priori,
as is typically required with plug-in methods.
  72
    Bierens’s (1985) method of choosing a smoothing parameter is a variant of cross validation and thus also provides
a way to choose a global smoothing parameter in the context of kernel regression estimator.


                                                            57
   So far, we have not specifically addressed the choice of smoothing parameter hn , other than
to note that it is chosen to minimize the RMSE. For kernel based methods hn may be a local
bandwidth parameter, for series estimators hn may be the order of the series to be used. More
generally, for local series expansion estimators it is useful to regard hn as a vector that contains
both the bandwidth parameter and the order of series expansion. In this way the RMSE-search
approach allows choosing the order of series expansion and the bandwidth in a unified framework.

6.3.3       Application of the RMSE-search method to the partially linear model

We next illustrate how the RMSE-search method can be applied in estimating β in the model
given in (2) using the Robinson (1988) estimator, where ϕ is estimated by local linear regression.
The idea is the same as for estimating m(x0 ). We construct estimates of the highest order of the
asymptotic bias and variance terms for alternative smoothing parameter values to estimate the
asymptotic mean-squared error, and we pick the smoothing parameter value that minimizes the
estimated asymptotic mean-square error.
     In the notation from section 5, the bias term is (X̃ 0 X̃)−1 X̃ 0 ∆,    ˆ where ∆   ˆ is a column vector with
the ith element [ϕ(pi ) − Êϕ|p (pi )]Iˆpi and X̃ is a matrix with the ith row equal to [xi − Êx|p (pi )]Iˆpi .
We estimate the asymptotic bias by (X̃ 0 X̃)−1 X̃ 0 ∆,      ˜ where ∆  ˜ is a column vector with the ith element
[ϕ̂(pi ) − Êϕ̂|p (pi )]Iˆpi . The asymptotic variance is driven by (X̃ 0 X̃)−1 X̃ 0 ε, so we estimate the asymp-
totic variance covariance matrix by (X̃ 0 X̃)−1 ni=1 ε̂2i [xi − Êx|p (pi )][xi − Êx|p (pi )]0 Ibpi (X̃ 0 X̃)−1 , where
                                                         P

ε̂i equals yi − 2Êi,y|p (pi ) + Êi,(oi )|p (pi ). Again there is no need to choose an initial pilot bandwidth,
because each of the expectations is estimated using the candidate bandwidth. If we are interested
in estimating a particular linear combination of the β parameters, c0 β for some given vector c, then
we can choose the smoothing parameter to minimize
                                                          n
                                                          X
                                   ˜ 2 + c0 (X̃ 0 X̃)−1
              (c0 (X̃ 0 X̃)−1 X̃ 0 ∆)                           ε̂2i [xi − Êx|p (pi )][xi − Êx|p (pi )]0 Ibpi (X̃ 0 X̃)−1 c.
                                                          i=1

Note that the bandwidth we choose could, in principle, depend on x and be different for each com-
ponent of β. That is, we could search over a vector of bandwidths. But to reduce the computational
burden, we may want to minimize over a global smoothing parameter choice.
    An advantage of the RMSE-search bandwidth selector is that does not require an initial pilot
bandwidth be chosen or that the order of smoothness be specified a priori, unlike most plug-in
methods.73 Another advantage is that it can be adapted to different types of semiparametric
models and estimators. For example, we could apply the method to choose the bandwidth for an
average derivative estimator. We can also imbed seminonparametric series estimators as a special
case of more general local series estimators (the local series method approaches the global one as
the bandwidth gets large enough to encompass all the data) and use the RMSE-search method to
choose the degree of the polynomial. The main practical difficulty with implementing the RMSE-
search method is that the user usually has to derive and program the expressions for the asymptotic
bias and variance terms, because little software for semiparametric bandwidth selection is currently
available.
  73
       Heckman, Ichumura and Todd (1998) clarify this point theoretically.


                                                                    58
                                         β̂ 1   ϕ̂(p) at median p74
                                b.w.   RMSE            RMSE
                                0.01    20.05           59.42
                                0.02    19.53           42.36
                                0.04    19.30           30.54
                                0.06    19.17           24.94
                                0.08    19.18           21.79
                                0.1    19.17           19.80
                                0.12    19.16           18.68
                                0.14    19.14          18.19*
                                0.16    19.12           18.23
                                0.18    19.14           18.70
                                0.2    19.10           19.61
                                0.22   19.07*           20.93
                                0.24    19.09           22.61
                                0.26    19.09           24.56
                                0.28    19.08           26.83
                                0.3     19.1           29.28

Table 7: Simulation Results from Monte Carlo Study of Bandwidth Sensitivity in the Partially
Linear Model

6.3.4   Monte Carlo study of bandwidth selector performance

We next evaluate the performance of the RMSE-search method of choosing bandwidths for the three
parameters of interest in the partially linear model in a Monte Carlo experiment with the following
design. x is a binomial random variable distributed uniformly over [0, 1]. The true β equals 10. p is
drawn from a beta distribution with shape parameters equal to 2 and 3. It takes on values between
0 and 1. We set ϕ(p) = 500 + 100p2 + 2000p3 . ε is drawn from the normal distribution with mean
0 and variance equal to 400. 500 samples of 500 observations each are drawn. All nonparametric
estimates are obtained using the truncated biweight kernel. In trimming, the 5% quantile of p is
used as the cut-off.
    Table 7 reports the root-mean-squared error of the estimated parameters for alternative fixed
bandwidth values. As theory would predict, the estimate of β is not overly sensitive to alternative
fixed choices of smoothing parameters, while the estimates for ϕ are sensitive. Figure 6.12 plots
the root-mean-squared-error (RMSE) against the log of the bandwidth for each of the parameters
of interest and for different bandwidth choices. The RMSE is normalized by the maximum RMSE
observed over the range of bandwidths examined. It attains a minimum at 0.28. Figure 6.13 plots
normalized estimated parameters for 10 of the simulated datasets. Figure 7.3 depicts in three
dimensions the relationship between the bandwidth, the estimated parameters and the density of




                                                 59
                                                                            ϕ(p)
                                                                          RMSE
                                                                       #1     #2
                             “leave-one-out” cross-validation        18.70   21.79
                                                                     (0.18) (0.08)
                                          bootstrap                  102.29 115.60
                                                                     (0.02) (0.30)
                                 plug-in method (0.05)76              19.8   21.79
                                                                     (0.10) (0.08)
                                  plug-in method (0.15)              18.21   24.94
                                                                     (0.07) (0.06)
                                  RMSE-search method                  13.95  19.03
                                                                     (0.16) (0.18)

        Table 8: Monte Carlo Study of Bandwidth Sensitivity in the Partially Linear Model


the estimates.75
    The results from the simulation are informative on which bandwidth achieves the minimum
RMSE for each of the parameters, but in an empirical application one would need a method that
does not require knowing the true values of the parameters in picking the optimal bandwidths.
    Because β̂ R is not very sensitive to the choices of the smoothing parameter, here we examine
the performance of our method in the context of estimating ϕ. Estimation of ϕ involves estimation
of β, which distinguishes this problem from a regular nonparametric problem. We consider four
types of data-driven smoothing parameter selection methods: cross-validation, bootstrapping, a
“plug-in” method and the RMSE-search method described above.
    The bootstrap resamples from the original dataset to construct many bootstrap samples (we
construct 500 bootstrap samples with 100% resampling). Given the computational intensity of
bootstrapping, we selected two representative samples and examined the performance of different
methods of choosing parameter choices. Table 8 compares the performance of cross-validation,
bootstrapping, and the RMSE-search method using the two data sets. The bandwidth chosen
to be optimal under each procedure is shown in parentheses. The bandwidths chosen by cross-
validation (for the 1st dataset) and by the method are closest to that which was optimal for ϕ̂ in
the simulation above (0.14). The bandwidth chosen by the bootstrap procedure is sensitive to the
initial sample used (compare 1st and 2nd columns).
    In implementing the plug-in method, an important consideration is the initial choice of fixed
bandwidth used to estimate the ingredients of the plug-in bandwidth. The two rows of Table 8
labeled ‘plug-in’ compare using 0.05 and 0.15, respectively, as the initial bandwidth and demonstrate
sensitivity to the initial fixed bandwidth choice. A similar sensitivity in nonparametric regression
models has been documented in Cleveland and Loader (1996).
  75
    The density was estimated using a kernel density estimator with a biweight kernel and the optimal fixed bandwidth
derived by Silverman (1982) for normally distributed data.



                                                         60
6.4     Trimming
6.4.1    What is trimming?

In the context of computing a statistic, trimming refers to a practice to systematically discarding
the contribution of estimated function values to the statistic when some properties hold at the
points the function is being evaluated. Usually “trimming function” refers to an indicator function
indicating which points of evaluation to include, rather than which points to discard.

6.4.2    Three reasons for trimming

There are three reasons for trimming. First, a parameter studied may not make sense without
trimming. Second, a statistic may not make sense without trimming, and, third, the statistics may
not have desirable properties asymptotically without trimming.
    As an example for the first case, consider estimating the conditional mean function m (x). Recall
that this function is defined only at points in the support, S, of the conditioning random vector,
so more precisely, we should write it as m (x) · 1 (x ∈ S). If we are to estimate the conditional
mean function at observed data points, the indicator function is always 1, so that we can ignore
the trimming function, but otherwise, the definition of the parameter calls for it. Parameters
examined in section provide other examples. We saw that the identifiable parameter under the
matching assumption needed to satisfy the common support condition. Therefore the definition of
the average treatment on treated parameter, for example, incorporated the trimming function as
in
                                  E {(Y1 − Y0 ) 1 (X ∈ S) |D = 1}
                                                                  .
                                      E {1 (X ∈ S) |D = 1}

where S denotes the common support of regressors X.
     As an example for the second case, recall the definition of the kernel regression estimator using
the Epanechnikov kernel with the optimal bandwidth. With this estimator, there is a positive
probability that the denominator is zero so that the estimator is not necessarily well defined. That
is, the estimator is well defined only is there is a data point in the appropriate neighborhood. There
are at least two distinct technical reasons for trimming in order to establish desirable properties of
the statistics under consideration. First, to secure local data and second, to avoid the boundary
value problem. Consider the same estimator above and assume we want to show that the estimator
converges with a rate uniformly over a given domain. Then at any point over the domain, the
density of the conditioning vector needs to be bounded away from 0 by the amount dictated by the
convergence rate of the estimator we wish to obtain. For one thing, if the density is too low, then
we cannot hope to obtain the local observation comparable to other regions. From a theoretical
point of view, we can assume that the density is bounded away from 0 but, of course, in application,
the condition does not necessarily hold and hence we would have to introduce trimming. We also
need to ensure that the function is not evaluated at the points too close to the boundary value. As
we have seen in section four, the estimator converges with slower rate at the boundary points and
thus the uniform convergence rate will be slower if we include the boundary points.


                                                 61
     The third case often arises in examining semiparametric estimators which use nonparamet-
ric estimators in their construction. In establishing asymptotic properties of the semiparametric
estimator, a uniform convergence rate of the nonparametric estimator is used.
     The need for trimming for all these cases is uncontroversial. However, the problem of trimming
is sometimes ignored along with claims that “in practice it does not matter very much.” While
life would be easier if this were true, we emphasize that at this point we know of no systematic
empirical or theoretical study which substantiates such a claim.

6.4.3   How to trim

Sometimes trimming is specified using a priori chosen set over which some desirable properties hold,
such as the set of points for which the density is bounded away from zero. There is no provision
for how we should choose such a set given a finite amount of observations.
    Bickel (1982) introduced a trimming function that does not depend on a priori knowledge
of the shape of the support in the context of adaptive estimation. In carrying out trimming of
certain data points with low density, he used the estimated density. A deterministic sequence
which converges to zero is used to decide which points correspond to “low” density points. While
theoretically this procedure can be carried out without knowing anything about the density, in
finite sample, the procedure might inadvertantly trim out high fraction of observations. To avoid
this problem, Heckman, Ichimura, Smith, and Todd (1997) proposed defining a trimming function
using a quantile of the estimated density values (e.g. trim 2% of the points with the lowest densities
that are estimated to be positive). This method controls the percentage of data being trimmed.
    An additional complication arises in the implementation of trimming for the case of the index
model. Consider for concreteness the linear index model. In this case, we need to find low points of
density corresponding to any index defined by a linear combination of the regressors. It may seem
enough to trim observations based on the joint density of the regressors but that is not the case.
To see this consider two independent regressors both distributed uniformly over unit intervals. On
the support the density of the regressors are bounded away from zero. But any linear combination
of the two regressors will not be bounded away from zero at the minimum and the maximum points
when indeed two regressors are involved in the linear combination. This is because the density is
low when the length of the line segment that leads to the same value for the linear combination is
short. At the points that have the minimum and the maximum values of the linear combination,
the corresponding length of the line segments are zero.
    In addition to the density being bounded away from zero, trimming in this case needs to
guarantee the points of estimation to be interior points of the support so that the length of the line
segments will be away from zero. Clearly, one can presume a priori knowledge about the support
and define trimming function using the knowledge. One way to define the trimming function
empirically may be to use the estimated density as in the previous case. In this case, we need to
keep points only if the density values are above certain value and that, in a neighborhood, there are
no points with density values below the prespecified value. The prespecified value can be defined
using the quantiles of the estimated density as in the previous case.



                                                 62
    Given that the index models are used when we do not have enough observations to use fully
nonparametric models, the above trimming approach may be unattractive because it uses fully
nonparametric density estimator. An alternative approach which only involves one dimensional
density estimation is to search over the lowest one dimensional density estimate at each point. We
only keep a point if the point does not correspond to a low density point for any linear combination
of regressors. Clearly this approach is computationally intensive. A practical alternative to this
approach may be to try out the density estimation of the index defined by the bases of the space
of the coefficients and to keep all points which are above the prespecified low density values.


7     Asymptotic distribution
In this section, we gather some basic asymptotic results of nonparametric estimators which are
useful in themselves and also useful in deriving the asymptotic distribution theory for semipara-
metric estimators. We also consider how the variability of a semiparametric estimator that uses
nonparametric estimators in its construction can be assessed and show how these estimators often
take the form of U-statistics. Our main objective is to demonstrate that much of the logic that
underlies the derivations is analogous to the logic behind proofs of the asymptotic properties of
parametric estimators, although there are some differences. The main differences are that (1) an
appropriate concept of differentiability needs to be used, (2) there is a greater need to pay attention
to the norm used, (3) a U-statistics argument, rather than the central limit theorem needs to be
used and (4) the bias of the estimator needs to be controlled. We will explain why these differences
arise.

7.1    Nonparametric estimators
We next define some notations that will be used in the derivations. The following notion of smooth-
ness is used by Robinson (1988). Let [µ] denote the largest integer not equal or larger than µ.

Definition 1 Gµα , α > 0, µ > 0, is the class of functions g : Rd → R satisfying: g is [µ]-times par-
tially differentiable for all z ∈ Rd ; for some ρ > 0, supy∈{ky−zk d <ρ} |g (y) − g (z) − Q (y, z)| / ky − zkµRd ≤
                                                                  R
h (z) for all z; Q = 0 when [µ] = 0; Q is a [µ]-th degree homogeneous polynomial in (y − z) with
coefficients the partial derivatives of g at z of orders 1 through [µ] when [µ] ≥ 1; and g (z), its
partial derivatives of order [µ] and less, and h (z) have finite αth moments.

    Bounded functions are denoted by Gµ∞ .
    To control the bias a certain type of kernel function needs to be used. The following “higher
order kernel” by Bartlett (1963) is a standard device in the literature. Let δ j0 = 1 if j = 0 and 0
for any other integer value j.

Definition 2 K` , ` ≥ 1 is the class of symmetric functions k : R → R around zero such that
R∞ j
 −∞ t k (t) dt = δ j0 for j = 0, 1, ..., ` − 1 and for some ε > 0
                                                              
                                       lim k (t) / 1 + |t|`+1+ε < ∞.
                                   |t|→∞



                                                    63
   A dimension d kernel function K of order ` is constructed by K (t1 , ..., td ) = k (t1 ) · · · k (td ) for
k ∈ K` .
   In order to improve the order of bias by the higher order kernel, the underlying density is
required to be smooth accordingly.

7.1.1    Density estimators

First, we summarize the asymptotic results of the kernel density estimator and the kernel regression
estimator that provide building blocks for the semiparametric estimators. Let K be a higher order
kernel constructed as above. Robinson (1988) has shown the following result:
                            n                                     2 o
Lemma 5 (Robinson) E E h−d K ((z2 − z1 ) /h) |z1 − f (z1 )              = O h2λ when f ∈ Gλ∞ for
                                                                               

some λ > 0 and k ∈ K[λ]+1 .

7.1.2    Regression function estimators
                                                               α
Lemma 6 (Robinson) E (g (z2 ) − g (z1 )) h−d K ((z2 − z1 ) /h)                = O hα min(µ,λ+1,λ+µ) when
                                                                                                  

f ∈ Gλ∞ , g ∈ Gµα , and k ∈ K[λ]+[µ]+1 .

7.2     Semiparametric estimators
Let Γ be a norm space equiped with norm k·kΓ and let k·k be a norm on RK . First we state a
Taylor’s series expansion theorem for a general mapping F from an open subset of space Γ into
RK .77 To state this theorem, we first need to define the concept of Fréchet differentiability of a
mapping from an open subset O of a normed space X into another normed space Y . Let k·kX and
k·kY be the norms of X and Y , respectively. After stating the theorem, we will apply it to explain
the structure of a general class of semiparametric estimators.
   Definition: (Fréchet Differentiability) A mapping f : O → Y is Fréchet differentiable if and
only if at x ∈ O there is a continuous linear operator Lx such that for any ε > 0 there exists δ ε > 0
such that for any khkX < δ ε the following inequality holds:

                                 kf (x + h) − f (x) − Lx hkY ≤ ε · khkX .

We write this as f (x + h) − f (x) − Lx h = o (h) .

    Next we discuss second order differentiability of mapping f or differentiability of Lx . Note
that Lx can be regarded as a mapping from X into L (X, Y ), a space of linear operators from X
into Y . Because X is a normed space and L (X, Y ) is a normed space, we can discuss Fréchet
differentiability of this mapping Lx when f is Fréchet differentiable over O.78 When Lx is Fréchet
  77
     See for example Kolmogorov and Fomin (1957), Fourth edition Chapter 10. This section summarizes some of the
results in that chapter.
  78
     For any L ∈ L (X, Y ) the norm of L (X, Y ) is defined by

                                                  sup kLhkY .
                                                khkX ≤1




                                                      64
differentiable, we have

                                           Lx+h − Lx − Qx h = o (h)

for some linear operator Qx . We regard this linear operator as the second derivative of f . Note
that Qx is an element of L (X, L (X, Y )). Because L (X, L (X, Y )) can be identified with a space of
bilinear operators B X 2 , Y via
                            


                                             B (x1 , x2 ) = A (x1 ) x2 ,

where A ∈ L (X, L (X, Y )) and B ∈ B X 2 , Y , we will regard Qx as an element of B X 2 , Y .79
                                                                                                     

     Analogously one can define the nth order derivative of mapping f and will regard them as an
element of the space of the rth order linear operators R (X r , Y ). From now on, we will denote
the derivative of f (x) by f 0 (x), the second derivative by f 00 (x), the rth derivative by f (r) (x). As
discussed above, for each x, f 0 (x) is a linear operator, f 00 (x) is a bilinear operator, and in general
f (r) (x) is the rth order linear operator into Y . Thus for any element h ∈ X, f 0 (x) (h), f 00 (x) (h, h),
and in general f (r) (x) (h, ..., h) are all well defined and take values in Y .
     Using these notations, we can state the Taylor’s series expansion theorem:
    Theorem: (Taylor’s series expansion) Let F be a mapping from Γ into RK and let F be
defined over an open subset O of Γ. If F (r) (γ) exists for any γ ∈ O and F (n) (γ) is continuous,
then
                                                  1                         1
              F (γ + h) = F (γ) + F 0 (γ) (h) + F 00 (γ) (h, h) + · · · + F (r) (γ) (h, ..., h)
                                                 2!                         r!
                            Z 1         r−1 
                                (1 − t)                                    
                          +                   F (r) (γ + t · h) − F (r) (γ) (h, ..., h) dt
                             0   (r −  1)!
where integration is defined element wise.
    We will use this result to describe the structure of the asymptotic argument for a general class
of semiparametric estimators that use nonparametric estimators as input. Many semiparametric
estimators solve conditions of the form
                                             Xn         
                                        n−1     gi θ̂, γ̂ = 0,
                                                  i=1

which often corresponds to the first order condition of an extremum estimation problem. By the
standard argument of expanding gi around θ0 , we obtain
                                      "      n
                                                              #−1       n
                    √         
                                         −1
                                            X                           X
                                                                  n−1/2
                                                            
                     n θ̂ − θ0 = − n           5θ gi θ̄, γ̂               gi (γ̂)
                                                    i=1                         i=1

where θ̄ is a value on a line segment between θ̂ and θ0 and gi (γ) = gi (θ0 , γ). Applying the Taylor’s
series expansion, assuming Fréchet continuous differentiability, we get
                                                        Z 1
         gi (γ̂) = gi (γ 0 ) + gi0 (γ 0 ) (γ̂ − γ 0 ) +     gi0 (γ 0 + t · (γ̂ − γ 0 )) − gi0 (γ 0 ) (γ̂ − γ 0 ) dt.
                                                                                                    
                                                     0
  79
       The elementary proof given by Kolmogorov and Fomin is presented in the Appendix.


                                                          65
Thus,
                "     n
                                       #−1        n
√         
                   −1
                      X                     −1/2
                                                  X
 n θ̂ − θ0   = − n      5θ gi θ̄, γ̂       n        gi (γ 0 )
                             i=1                                        i=1
                    "        n
                                                       #−1              n
                             X                                          X
                        −1                                       −1/2
                                                                              gi0 (γ 0 ) (γ̂ − γ 0 )
                                                   
                  − n              5θ gi θ̄, γ̂              n
                             i=1                                        i=1
                    "        n
                                                       #−1          n Z 1
                             X                                      X
                  − n−1                                      n1/2                  gi0 (γ 0 + t · (γ̂ − γ 0 )) − gi0 (γ 0 ) (γ̂ − γ 0 ) dt.
                                                                                                                          
                                   5θ gi θ̄, γ̂
                             i=1                                    i=1       0

The last term converges to zero when gi0 (γ) satisfies a Lipschitz condition (with a constant term
                                      √
whose norm has finite mean) and when n kγ̂ − γ 0 k2Γ converges in probability to zero.
   Next, examine the second term
                                                        n
                                                        X
                                               −1/2
                                           n                  gi0 (γ 0 ) (γ̂ − γ 0 ) .
                                                        i=1
                                                                                       √
When Γ is a subset of a finite dimensional space, typically,                               n (γ̂ − γ 0 ) converges in distribution
and hence we can examine this term rewriting the term as
                                                   n
                                              −1
                                                   X               √
                                          n              gi0 (γ 0 ) n (γ̂ − γ 0 ) .
                                                   i=1

                                       −1
                                          Pn
                                           0
When Γ is finite dimensional, n       i=1 gi (γ 0 ) converges in probability to a finite dimensional
                                                                               √
matrix. When Γ is infinite dimensional, as we discussed earlier, typically n (γ̂ − γ 0 ) does not
converge in distribution. Convergence in distribution would require multiplying the term (γ̂ − γ 0 )
                                 √
by something of order less than n, and then ni=1 gi0 (γ 0 ) needs to be divided by something in
                                                   P

order less than n, which makes it impossible to apply a standard Law of Large Numbers.
   We therefore take a different approach, making use of a U-statistics argument and a quadratic
approximation of γ̂:
                                               n
                                               X                                  n X
                                                                                  X n
                  γ̂ (x) − γ 0 (x) = n−1                φnj (x) + n−2                       ρnjk (x) + ω̂ (x) ,
                                               j=1                                j=1 k=1
        √
where n kω̂kΓ converges in probability to zero. Term ω̂ includes the approximation error as well
as the bias term. Because gi0 (γ 0 ) is by assumption a linear operator, we have
                                                        n
                                                        X
                                          n−1/2               gi0 (γ 0 ) (γ̂ − γ 0 )
                                                        i=1
                                                        Xn Xn
                                      = n−3/2                       gi0 (γ 0 ) φnj
                                                                                       

                                                i=1 j=1
                                                  Xn X n X   n
                                             −5/2
                                                                  gi0 (γ 0 )
                                                                                                  
                                          +n                                               ρnjk
                                                  i=1 j=1 k=1
                                                  Xn
                                          +n−1/2      gi0 (γ 0 ) (ω̂) .
                                                  i=1


                                                                  66
                                √
Under the assumption that n kω̂kΓ converges in probability to zero, the last term converges to
zero when kgi0 (γ 0 )k has a finite moment. The second term is typically op (1), as will be seen in the
example below. The first and second terms can be analyzed using a U-statistics argument.
    The important point to observe is that the consistency of γ̂ with rate and approximation error
rate of ω̂ need to be shown using the same or a stronger norm than the norm used to define the
Fréchet differentiability of gi (γ).

Properties of the local linear regression estimator There are basically three types of con-
sistency concepts in parametric estimation: convergence in probability, convergence almost surely,
and convergence in r-th absolute mean deviation, where r ≥ 1. In the nonparametric context, the
parameter of interest is a function, so one can consider each consistency concept either at each point
of the argument of the function or one can regard the function as a point in an infinite dimensional
metric space. For example, let m̂ (x) be a nonparametric function estimator. One can regard it as
an estimator of m (x) at a particular point x and discuss consistency of θ̂ = m̂ (x) to θ0 = m (x),
which reduces the problem to the standard consistency framework in the parametric case.
    The same problem can be framed differently by defining a metric on an infinite dimensional
space in which m̂ (x) and m (x) lie. An often used metric is a sup-norm where the distance between
two functions m̂ and m is defined as

                                         sup |m̂ (x) − m (x)| .
                                        x∈X

Once a metric between m̂ and m is defined, then consistency can be defined in the same way as
before.
    In parametric estimation where the parameter space Θ is finite dimensional, for any two metrics,
d1 (·, ·) and d2 (·, ·) there exist positive constants CH and CL such that for any θ and θ0 ∈ Θ,

                                   CL d1 θ, θ0 ≤ d2 θ, θ0 ≤ CH d1 θ, θ0
                                                                      


Hence, consistency using one metric implies consistency using another metric on the same space.
For infinite dimensional spaces, this is no longer the case, so we need to be more explicit about
which metric is used to define consistency.
    Another difference that arises in nonparametric estimation problem relates to the convergence
rate of the estimator. In the parametric context, under random sampling, the standard convergence
         √                                        √
rate is n, where n denotes the sample size; n times the difference between an estimator and
the target parameter is stochastically finite. As discussed in section 3, this is no longer the case
with nonparametric estimators and the convergence, in general, depends on the dimension of the
number of continuous variables among the conditioning variables.
    To carry out statistical inferences with nonparametric estimators, we need to examine distribu-
tional results. Distributional results are available for estimation of m (x) at each point (pointwise).
Some results are also available when m is regarded as a point in infinite dimensional space, but
here we will only study asymptotic distributional results for a finite number of points of x. We
investigate consistency, convergence rates, and asymptotic distribution theory in the context of the
local linear regression estimator that was described in section 4.

                                                  67
Local linear vs local constant estimation Before we study the asymptotic properties in detail,
it is useful to contrast the kernel regression estimator and the local linear regression estimator to gain
some insight into why how the local linear regression estimator improves on the kernel estimator.
As discussed in section 4, the local linear regression estimator can be written as a linear function
of the yi ’s
                                                                        n
                                                                        X
                                                                                L
                                                m̂L (x0 , h) =                 wni (x0 ) yi .
                                                                         i=1

Observing that

                                m (xi ) = m (x0 ) + (xi − x0 )0 ∇m (x0 ) + r (xi , x0 ) ,

where r (xi , x0 ) = (xi − x0 )0 [∇m (x̄i ) − ∇m (x0 )] and where x̄i lies between the line connecting x0
and xi (Taylor’s expansion) and using yi = m (xi ) + εi , we can write
                            n                                                                  n
                                                                    0
                            X                                                                X
                                   L                                                              L
                                               
        m̂L (x0 , h) =            wni (x0 )     m (x0 ) + (xi − x0 ) ∇m (x0 ) + r (xi , x0 ) +   wni (x0 ) εi
                            i=1                                                                                         i=1
                            n
                                                             " n                                      #
                                                                            (x0 ) (xi − x0 )0 ∇m (x0 )
                            X                                 X
                                   L                                     L
                       =          wni (x0 ) m (x0 ) +                   wni
                            i=1                                   i=1
                                n
                                X                                   n
                                                                    X
                                       L                                       L
                            +         wni (x0 ) r (xi , x0 ) +                wni (x0 ) εi .
                                i=1                                     i=1
                                                                                Pn        L
We showed in section 4 that local linear regression weights sum to one, i.e.       i=1 wni (x0 ) =
                                                                              L (x ) (x − x )0 =
                                                                       Pn
1. Another property satisfied by the local linear regression weights is i=1 wni   0     i    0
0.80 This second property gives the local linear estimator an advantage over the standard kernel
regression estimator in terms of order of convergence of the estimator at points near or at the
boundary of the support of x. Because of this property, we can write
                                                            n
                                                            X                                        n
                                                                                                     X
                                                                   L                                        L
                        m̂L (x0 , h) = m (x0 ) +                  wni (x0 ) r (xi , x0 ) +                 wni (x0 ) εi .
                                                            i=1                                      i=1
                      Pn  L (x ) r (x , x ) is of order h2 in finite sample.
We will see that i=1 wni      0      i 0
  In contrast, consider the kernel regression estimator. By a similar argument we have
                                 n
                                                         " n                       #
                                                                  (x0 ) (xi − x0 )0 ∇m (x0 )
                                X                         X
                                      K                         K
              m̂K (x0 , h) =        wni  (x0 ) m (x0 ) +     wni
                                         i=1                                    i=1
                                            n
                                            X                                      n
                                                                                   X
                                                   K                                         K
                                        +         wni (x0 ) r (xi , x0 ) +                  wni (x0 ) εi .
                                            i=1                                       i=1
                Pn     K
As we saw,        i=1 wni (x0 ) = 1 so
                                                                  " n                                      #
                                                                              (x0 ) (xi − x0 )0 ∇m (x0 )
                                                                   X
                                                                           K
                         m̂L (x0 , h) = m (x0 ) +                         wni
                                                                    i=1
                                                      n
                                                      X                                       n
                                                                                              X
                                                             L                                        L
                                                  +         wni (x0 ) r (xi , x0 ) +                 wni (x0 ) εi .
                                                      i=1                                      i=1
 80
      This property can be straightforwardly verified using the definition of the weights.


                                                                        68
We can show that while ni=1 wni    K (x ) (x − x )0 converges to zero in probability faster than h2 ,
                            P
                                        0   i    0
when x0 is an interior point of the support of x, it is not necessarily zero in finite samples and is also
not zero, asymptotically, at boundary points. The standard kernel regression estimator weights do
not share the property enjoyed by the local linear regression weights that ni=1 wni       K (x ) (x − x )0 =
                                                                               P
                                                                                              0      i   0
0 in finite sample at boundary or at interior points.
     One might think that the limitation of the kernel regression estimator at boundary points is
not so important, because there are a lot more interior points than boundary points. However, two
points should be taken into consideration: (1) The comparable performance of the kernel regression
estimator on interior points is obtained in the limit, not in the finite sample. (2) In finite sample
it is entirely plausible that the data is unevenly distributed, so that many more points lie on one
side of x0 (the point of evaluation) than on the other. This is even more likely in higher dimension.
In these cases, the asymptotic proporties of the estimator may not capture well its finite sample
behavior. In finite sample, there are likely many points at which the boundary behavior of the
estimator may be a better representation of its performance.
     We next study the bias and variance, finite and asymptotic, of the local linear regression esti-
mator, making use of the following notation:
                                                                                                        
                                                        K x1 −x
                                                                    
            1 (x1 − x0 )0                                                          ···
                                       
                                      y1                        h
                                                                  0
                                                                          0                      0
                                                                                 ..             ..
         1 (x2 − x0 )0 
                                                                                                        
                          
                                    y2 
                                                                       x2 −x0         .
                                                            0        K      h                    .      
   X=                       , Y =          , W  =                                                       .
                                                                                                        
         ..        ..              .. 
                                                         ..          . .        . .
         .          .              . 
                           
                                                   
                                                             .              .          .        0       
                                                                                                         
            1 (xn − x0 )0             yn                                                        xn −x0
                                                                                                       
                                                             0           ···         0 K            h



The local linear regression estimator of m (x0 ) and its partial derivatives can be written as
                                         !           !
                            m̂L (x0 , h)          α̂
                                           ≡           = (X 0 W X)−1 X 0 W Y
                            dˆL (x0 , h)          β̂
                                                       n
                                                       X
                                                              L
                                                   =         wni (x0 ) yi
                                                       i=1


Bias      Let α0 = m (x0 ), β 0 = ∇m (x0 ) and r = (r (x1 , x0 ) , ..., r (xn , x0 ))0 . Then
                                                  
                                           m (x1 )
                                                                      !
                                        m (x2 ) 
                                                  
                                                                α  0
                                   m=        ..   =X                    +r
                                       
                                              .
                                                   
                                                               β0
                                           m (xn )

so that
                               !            !
                          α̂           α0                  −1                     −1
                                   =            + X 0W X         X 0W r + X 0W X         X 0 W ε,
                          β̂           β0

where ε = (ε1 , ..., εn )0 . The expression decomposes the estimator into a bias component a variance
component.

                                                           69
   Let H be a K + 1 by K + 1 matrix
                                                                                               
                                                             1        0        ···         0
                                              
                                               0 h−1                          ..          ..   
                                                                                  .         .   
                                            H= . .                                             .
                                                                                               
                                               ..  ..                         ..
                                                                                 .        0    
                                                                                                
                                                0 ···                           0         h−1

Then, we can write
               !              !
            α̂           α0                                           −1                                               −1
                 =                 + H HX 0 W XH                               HX 0 W r + H HX 0 W XH                         X 0 W ε,
            β̂           β0

where
                                       !        !                     !
                              α̂                             α0                                      −1
                     E                     |X       =                     + H HX 0 W XH                    HX 0 W r.
                              β̂                             β0

Hence, (X 0 W X)−1 X 0 W r is the conditional bias given X of the local linear regression estima-
tor, when (X 0 W X) is invertible. Unconditional bias may not be well defined, as expectation of
(X 0 W X)−1 X 0 W r over X may not be well defined.

Variance The expression for the variance is given by
                   ! !
                α̂                            −1                        −1
          V           |X     = HX 0 W XH          HX 0 W ΣW XH HX 0 W XH
                β̂
                                              −1                    −1
                             = HX 0 W XH          HX 0 ΩXH HX 0 W XH

where
                                                                                                                                   
                         x1 −x0
                    K2                 σ 2 (x1 )
                                   
                            h                                             0           ···                      0
                                                                                     .                        ..                   
                                                        K2       x2 −x0
                                                                            σ 2 (x2 ) . .
                                                                          
                             0                                     h                                           .                   
          Ω=                                                                                                                       .
                                                                                                                                   
                              ..                                      ..              ..
            
                              .                                         .               .                     0                    
                                                                                                                                    
                                                                                                           xn −x0
                                                                                                     K2                 σ 2 (xn )
                                                                                                                    
                              0                                       ···                       0             h

   We will examine these terms in more detail, noting that

                           n                                                                                   
            0
                           X                            0         0     xi − x0           0     
        HX W XH =        [1, (xi − x0 ) /h] 1, (xi − x0 ) /h K
                                                                           h
                     i=1
                      n                                               
                                                               xi − x0
                         [1, (xi − x0 )0 /h]0 r (xi , x0 ) K
                     X
          HX 0 W r =
                                                                  h
                           i=1
                           n                                                                                                            
                           X                            0         0                 xi − x0
                                                                                      0
                 =     [1, (xi − x0 ) /h] (xi − x0 ) [∇m (x̄i ) − ∇m (x0 )] K
                                                                                       h
                   i=1
                    n                                                                
                                                                              xi − x0
                       [1, (xi − x0 )0 /h]0 1, (xi − x0 )0 /h σ 2 (xi ) K 2
                   X
        HX 0 ΩXH =
                                                             
                                                                                        .
                                                                                 h
                           i=1


                                                                          70
                                                                                                −1
We examine conditional bias and conditional variance terms after normalizing them by nhK            .
A common feature in all the calculations is that they require a straightforward integral calculation
of the following sort:
                                                         
                                          1        x − x0
                                    E       yJ
                                         hK           h
                                                             
                                              1         x − x0
                                = E E             yJ             |x
                                             hK            h
                                                            
                                                      x − x0
                                    Z
                                              1
                                =      g (x) K J               f (x) dx
                                             h           h
                                                            
                                                      x − x0
                                    Z
                                               1
                                =      ψ (x) K J                dx,
                                             h            h

where f (x) is the Lebesgue density of x, J is a kernel function and ψ (x) = g (x) f (x). By a change
of variable, s = (x − x0 ) /h we obtain
                                               
                                         x − x0
              Z                                        Z
                                   1
                 [ψ (x) − ψ (x0 )] K J            dx = J (s) [ψ (x0 − hs) − ψ (x0 )] ds.
                                  h        h

When ψ (x) is Hölder continuous with order ρ: i.e. |ψ (s) − ψ (t)| ≤ C · ks − tkρ for some C > 0
and ρ > 0,81 we have
                                           
                                     x − x0
           Z                                          Z
                               1
             [ψ (x) − ψ (x0 )] K J            dx ≤       |J (s) [ψ (x0 − hs) − ψ (x0 )]| ds
                              h        h
                                                             Z
                                                  ≤ C · hρ |J (s)| kskρ ds.

This shows that when h → 0, E h1K yJ x−x
                                                          R
                                            h
                                              0
                                                   → ψ (x0 ) J (s) ds. Note that when x0 is on the
boundary point of the support of random variable x, the limit of integration is not going to be the
whole line.
                                                                         −1
    Applying this type of integration shows that the expectation of nhK      HX 0 W XH converges
to a matrix with the 1-1 element
                                                 Z
                                         f (x0 ) K (s) ds

and the (j + 1)-(k + 1) element
                                                          Z
                                                f (x0 )       sj sk K (s) ds.

                                    −1
Also the expectation of nhK               HX 0 ΩXH converges to a matrix with the 1-1 element
                                                             Z
                                            σ 2 (x0 ) f (x0 ) K 2 (s) ds

and the (j + 1)-(k + 1) element
                                                              Z
                                            2
                                          σ (x0 ) f (x0 )          sj sk K 2 (s) ds.

 81
      When ρ = 1, the function is Lipschitz continuous.


                                                              71
Thus writing (K + 1) × (K + 1) matrices S1 and S2 as
                      R                R                         R               
                           K (s) ds       s1 K (s) ds  ···          sK K (s) ds
                      R                R 2                      R
                      s1 K (s) ds        s1 K (s) ds  ···         s1 sK K (s) ds 
                                                                                  
                S1 =         .               .        ..                ..       
                     
                             ..              ..           .              .
                                                                                  
                                                                                  
                        R             R                           R 2
                          sK K (s) ds   s1 sK K (s) ds · · ·        sK K (s) ds

and
                        R 2                                                         
                                         s1 K 2 (s) ds               sK K 2 (s) ds
                                       R                           R
                          K (s) ds                     ···
                             2            2   2                     s1 sK K 2 (s) ds 
                       R               R                          R
                      s1 K (s) ds       s1 K (s) ds   ···
                                                                                    
                S2 =        .                .        ..                 ..         
                     
                            ..               ..          .                .
                                                                                     
                                                                                     
                              2                  2
                       R             R                             R 2 2
                         sK K (s) ds   s1 sK K (s) ds · · ·          sK K (s) ds
we get
                                                      −1                    −1
                                nhK       HX 0 W XH     HX 0 ΩXH HX 0 W XH
                                      

                                     σ 2 (x0 ) −1
                                nhK            S1 S2 S1−1 + o nhK .
                                                                 
                        =
                                      f (x0 )
    If x0 is an the interior point of the support of x, and if K is symmetric then both S1 and S2
are diagonal matrices, with the j-th diagonal element given by
                                             R 2 2
                                               sj K (s) ds
                                            hR              i2
                                               s2j K (s) ds

with s0 = 1.
                                                                        −1
    These results imply that that the variance is of order nhK              . Because h needs to become
small to control bias term, the variance converges more slowly for larger K. Recall that in standard
parametric cases, variance is of order n−1 and there is no bias term. This is because in the
parametric case, the specification is assumed to be globally correct, so there is no need to control
the bias. (In nonparametric context, if we fixed h and regarded the specified model to be the true
model, then the variance is also of order n−1 .)
    As we might expect, when the conditional variance of y given x (σ 2 (x0 )) is high the first order
variance of m̂L (x0 , h) is high. The variance expression also shows that when the density of x is
low at x0 , the variance of m̂L (x0 , h) is higher to first order. That makes sense, because when the
density of x is low at x0 , we would have a smaller number of observations near x0 . Finally, the
matrices S1 and S2 are determined solely by an underlying kernel function K (·) and whether x0 is
at the boundary point of the support of x or not. When x0 is an interior point of the support of x,
we could make the variance smaller by choosing K (·) so that S1−1 S2 S1−1 becomes small. We will
discuss this issue later.
                                                −1
    We can investigate the bias term nhK            HX 0 W r in an analogous way. Recall that
                     −1
                nhK       HX 0 W r
                           n                                                                    
                   K −1
                      X                   0   0          0                              xi − x0
           = nh              [1, (xi − x0 ) /h] (xi − x0 ) /h [∇m (x̄i ) − ∇m (x0 )] K
                                                                                            h
                          i=1


                                                       72
Denoting the second partial derivative matrix of m (x) by ∇2 m (x), by Taylor’s expansion we have

                        ∇m (x̄i ) − ∇m (x0 ) = ∇2 m (xi ) (xi − x0 )
                                               + ∇2 m (x̃i ) − ∇2 m (xi ) (xi − x0 ) ,
                                                                        


where x̃i lies on the line connecting x0 and x̄i . Substituting this expression, we see that
             −1
       nhK    HX 0 W r
                 n                                                                    
          K −1 2
                X                0   0          0   2                         xi − x0
  =    nh     h     [1, (xi − x0 ) /h] (xi − x0 ) /h∇ m (xi ) (xi − x0 ) /hK
                                                                                  h
                       i=1
                            n                                                                                             
             K −1       2
                            X                    0   0       0                                                   xi − x0
                                  [1, (xi − x0 ) /h] (xi − x0 ) /h ∇2 m (x̃i ) − ∇2 m (xi ) (xi − x0 ) /hK
                                                                                         
      + nh          h                                                                                                          .
                                                                                                                    h
                            i=1

The first term can be analyzed by making use of the earlier calculation. The expectation of the
first element of the first K + 1 vector is
                                                                                   
                       2 −K                0    2                           xi − x0
                     h h E (xi − x0 ) /h∇ m (xi ) (xi − x0 ) /hK
                                                                                h
                          K   K
                                          xik − x0k xik0 − x0k0 ∂ 2 m (xi )
                                                                                        
                       2
                         XX
                                    −K                                            xi − x0
                 = h               h E                                      K
                                              h          h      ∂xik ∂xik0           h
                         k=1 k0 =1
                                 K X K
                                       ∂ 2 m (x0 )
                                X                  Z
                       2
                                                     sk sk0 K (s) ds + o h2
                                                                              
                 = h f (x0 )
                                     0
                                       ∂x0k ∂x0k0
                                       k=1 k =1

and the (j + 1)-th element of the first K + 1 vector is
                       K X
                         K
                                   xij − x0j xik − x0k xik0 − x0k0 ∂ 2 m (xi )
                                                                                                      
                   2
                       X
                                      −K                                                      xi − x0
               h            h E                                                K
                                       h          h           h     ∂xik ∂xik0                   h
                  k=1 k0 =1
                          K XK
                                ∂ 2 m (x0 )
                          X                 Z
             = h2 f (x0 )                     sj sk sk0 K (s) ds + o h2
                                                                        
                             0
                               ∂x0k ∂x0k0
                                  k=1 k =1

We show next that the second term of the K + 1 vector is of smaller order than h2 . To see this
note that
                    n                                                                                    
           K −1 2
                  X                                 0   2             2
                                                                                                 xi − x0
       nh       h      (1, (xi − x0 ) /h) (xi − x0 ) /h ∇ m (x̃i ) − ∇ m (xi ) (xi − x0 ) /hK
                                                                                                      h
                   i=1
                   n                                                                                      
          K −1 2
                 X                                0       2            2                          xi − x0
  ≤ nh         h      |1, (xi − x0 )| /h (xi − x0 ) /h ∇ m (x̃i ) − ∇ m (xi ) (xi − x0 ) /hK
                                                                                                      h
                  i=1
                     n                                                                        
            −1 2 X                                                                    xi − x0
  ≤ nhK        h C      |1, (xi − x0 )| /h (xi − x0 )0 /h |xi − x0 |ρ (xi − x0 ) /hK
                                                                                          h
                            i=1

where absolute value of a matrix or a vector should be taken as element by element and we use
the assumption of Hölder continuity of ∇2 m (x) at x0 to obtain the last inequality. By the same
argument, the mean of the last expression is O h2+ρ .
                                                     



                                                            73
   Thus the form of bias is
                                                                        −1
                                (1, 0, ..., 0) H HX 0 W XH                     HX 0 W r

and the asymptotic bias to the first order is
                                                                          
                                                                     1
                                         K X K                  Z  s 
                     2               −1
                                        X         ∂ 2 m (x0 )      1 
                    h [1, 0, ..., 0]S1                             .  sk sk0 K (s) ds.
                                                                   . 
                                                  ∂x 0k ∂x 0k 0
                                                                   . 
                                        k=1 k0 =1
                                                                    sK

We make the following observations:

(i) The first order of bias for the local linear regression estimator is h2 when m is twice continuously
     differentiable and the second derivative is Hölder continuous.

(ii) The first order bias for the local linear does not depend on the distribution of the regressors,
      f (x). This is not true for the kernel regression estimator. (See section 5 or Hardle and Linton
      (1994) for a statement of the distribution theory of the kernel regression estimator)

(iii) In the bias computation, it is crucial that f (x0 ) > 0 even though the first order expression
      does not involve f (x0 ).

(iv) When x0 is an interior point of the regressor distribution and the kernel function is symmetric,
     the form of the bias form simplifies to:
                                                    K                 R 2
                                                2
                                                    X ∂ 2 m (x0 )      s K (s) ds
                                            h                          Rk         .
                                                          ∂x20k         K (s) ds
                                                    k=1


(v) The smaller h, the smaller the first order asymptotic bias. But the earlier computation implies
     that the smaller the h, the larger the asymptotic variance to the first order. This is the
     bias-variance trade-off that we always face in nonparametric estimation.

Why does averaging nonparametric estimates speed up the convergence rate? In sec-
tion 5, we introduced the average derivative estimator studied in Stoker (1986, 1991), Härdle and
Stoker (1989), and Powell, Stock and Stoker (1989). The major benefit of using an average deriva-
tive approach is that under some assumptions on the bandwidth sequence, on the kernel function
and on the smoothness of the derivative function, the average of the derivatives can be estimated at
                √
the parametric n rate. We next illustrate why averaging speeds up the convergence rate, using an
an example a nonparametric estimator that is a simple average of nonparametric density estimates:
                                     n                            n    n                    
                                 1   X                      1 XX                   xj − xi
                           fb̄ =           fˆ(xj ) =             K                               ,
                                 n                        n2 hn                      hn
                                     j=1                        j=1 i=1




                                                           74
which gives a double summation form that is the form of a U-statistic.(See e.g. Serfling, 1980)
If the data are distributed i.i.d. and under the standard conditions invoked for kernel regression
estimator (See Härdle and Linton, 1994), the expectation of the estimator is given by
                                                   
                                      1     xj − xi
                       E(f ) = E
                          b̄            K            . = E(fˆ(xj )) + O(h2n ).
                                     hn       hn

The order of convergence of the bias is not affected by the averaging, but the order of the variance
is. We can write the variance as:
                                                n                              n
                     n2              2 XX                    2 XX
      V ar(fb̄) =    4  2
                          V arKij + 4 2   cov(Kii , Kij ) + 4 2   cov(Kji , Kij )
                    n hn           n hn                    n hn
                                               j=1 i6=j                      j=1 i6=j

                     n2                    2                               2
               =             V arKij +          n(n − 1)cov(Kii , Kij ) + 4 2 n(n − 1)cov(Kji , Kij ).
                    n4 h2n               n4 h2n                          n hn

The lowest order term of the variance is O( n21hn ), which is of higher order than the variance of
the nonparametric kernel density estimator (=O( nh1 n )). When the bandwidth is chosen optimally
to minimize the MSE, then the order of the RMSE is O(n−2/5 ). Through the use of negative
kernels to speed up the rate of convergence of the bias, one can obtain a RMSE that converges
at the parametric rate. With pointwise nonparametric estimators, the fastest obtainable rate is
n−r/(2r+1) , which requires choosing a kernel function for which the first r moments equal 0.


8    Computation
Flexible modeling methods are computationally more demanding than traditional approaches.
Among the various classes of flexible estimators, local methods tend to be the most computation-
ally intensive, because they require solving separate problems at each point at which the density
or function is evaluated. The computational burden is particularly great when cross-validation or
bootstrap methods are used to select smoothing parameters and/or bootstrap methods are used to
evaluate the variation of the estimators. Because local density and regression estimators form the
ingredients for many semiparametric procedures, the semiparametric methods can also be highly
computationally intensive.
    Fortunately, the processing speeds of today’s computers make nonparametric and semiparamet-
ric modeling methods feasible in many applications with sample sizes on the order of a few thousand
observations, despite their additional computational burden. But when sample sizes get large, say
on the order of 10,000 or more, then computing estimates and standard errors can become a major
task, and time considerations may drive the choice of bandwidth selector and variance estimator.
In such cases, one can take advantage of approximation methods that were suggested by Silverman
(1982) and further extended in Fan and Marron (1994), Hall and Wand (1995), Jones and Lotwick
(1983), Wand (1994), Turlach and Wand (1995), Seifert et. al. (1994) and others for speeding up
computations in local regression and density estimation. These methods allow for great gains in
speed and provide a way of controlling the accuracy of the approximation.




                                                          75
8.1     Description of approximation method
The approximation method first grids the x-axis and computes the nonparametric estimates only
at grid points in an efficient way using fast Fourier transformation. The method then interpolates
to find function values between the grid-point estimates. The number of grid points, M , is chosen
by the researcher. We first describe the most simple version of the binning method, in the context
of obtaining a local linear regression estimate. Then we describe a fast Fourier implementation
of the binning method that has been developed for density estimation. The FF transformation
effectively factors the data component and the bandwidth component in the frequency domain.
This allows computation across different bandwidths to be done in a more efficient way, because
the data component of the computation can be done only once and reused when computing the
values at different bandwidths.

8.1.1    A simple binning estimator for linear linear regression estimation

Let x1 ...xn denote n actual data points at which we wish to evaluate the conditional mean function
for the model

                                                   y = m(x) + ε.

As described in sections 4 and 7, the local linear regression estimator at a point x is given by
                  Pn           Pn                2
                                                    Pn                     Pn
                     j=1 yi Kj   k=1 Kk (x − xk ) −    j=1 yi Kj (x − xj )   k=1 Kk (x − xk )
          m̂(x) =           Pn        Pn                    h Pn                  i2          ,
                                                        2
                               j=1 Kj  k=1 Kk (xi − xk ) −       j=1 Kj (xi − xj )


where Kj = K((x − xj )/hn ). Calculating the local regression estimator requires estimating terms
of the form
                                     n
                                     X
                                           yi (xi − x)l K((xi − xj )/hn )                          (5)
                                     i=1

for l = 0, 1, 2 for the n data points at which the function is evaluated.
    The binning method reduces the computational burden of evaluating these kernel values by
making a grid over the support of x1 ..xn of equally spaced points, evaluating the function only at
the grid points and interpolating to estimate the value of the function at other points. Denote the
N grid points by z1 ..zN . Binning can be implemented by first assigning each data point (xi ) and
point of evaluation (x) to their nearest grid points (zj 0 and zj , respectively) and approximating (5)
by
                               N X
                               X
                                               yi (zj 0 − zj )l K((zj 0 − zj )/hn ),
                               j 0 =1 i∈Ij 0


where zj are now the N grid points of evaluation, zj 0 are the grid points to which the data points
have been assigned and Ij 0 are the set of indices that are binned into the j 0 th bin.



                                                          76
   A consequence of choosing equally-spaced grid points is that the distance between z1 and z3 is
the same as between zN −2 and zN , etc. Letting ∆ denote the smallest distance between two grid
points, we only need to evaluate the kernel at N values:

                             K(∆/h), K(2∆/h), K(3∆/h), ..., K(N ∆/h)

which reduces the required number of evaluations of the kernel function from n2 (the number re-
quired under a strategy of evaluating the kernel for each possible combination of data-points) to
N.
   Fan and Marron (1994) introduce a modification of this simple binning idea, called linear
binning. Linear binning assigns each data point or point of evaluation to multiple grid points,
weighting each in proportion to their distance from the grid points. Fan and Marron (1994) show
that for the linear binning estimator, the approximation error can be bounded by δ 4 , where δ is
the bin or grid width. The FFT implementation described below uses the linear binning idea.

8.1.2   Fast Fourier transform (FFT) binning for density estimation

The binning method described above is adequate for many univariate estimation problems. But
for multivariate as well as univariate estimation problems, a more efficient FFT implementation of
binning is available. We describe how the FFT can be used to increase the efficiency of the binning
estimator in the context of estimating a density and show how the FFT reduces the number of
computations by taking advantage of periodicity in complex functions.
    The Fourier transform of a density g(t) is
                                                     Z ∞
                                    g̃(s) = (2π)−1/2     eist g(t)dt                            (6)
                                                             −∞

Let fˆn (x) be a standard kernel density estimator, fˆn (x) = (nhn )−1 ni=1 K((t − xi )/hn ). The F-
                                                                        P

transform of fˆn (x) is
                                                    n Z
                                                    X
                                      −1/2       −1
                        f n (s) = (2π)     (nhn )         eist K((t − xi )/hn )dt
                        ê
                                                           i=1
                                                    n Z
                                                    X
                              = (2π)−1/2 n−1                 eis(xi +hn u) K(u)du
                                                    i=1
                                          n
                                          X                              Z
                                     −1         isxi              −1/2
                              = {n              e      } · {(2π)             eishn u K(u)du}
                                          i=1

where the last two equalities follow after doing a change of variables u = (t − xj )/hn . The first term
in brackets depends only on the data. The second is the F-transform of the K(shn ), which depends
on the kernel and bandwidth choice. Under certain choices for K, there is an explicit solution for
the second term. For example, if K is normal it equals (2π)−1/2 exp{(−s2 h2n )/2}.
    The separation of (6) into two terms–one that depends solely on the data and one on the smooth-
ing parameters–has a major computational advantage for algorithms, such as cross-validation, which
require evaluating the function for several different bandwidth parameter, because the data com-
ponent need to be evaluated only once.

                                                        77
     To be able to quickly evaluate the data component, we wish to find an approximation to the
first term, (2π)−1/2 n−1 ni=1 eisxi . Then fn (s) will be estimated by applying FF inversion to f n (s).
                         P                                                                         ê
                                                                    ∞
     For large n, (2π)−1/2 n−1 ni=1 eisxi converges to (2π)−1/2 −∞ eisxi g(xi )dxi . Usually it is not
                               P                                  R

possible to explicitly obtain the integral, but it can be approximated over a discrete set of points. Let
tk = k∆ denotes grid points over the interval [−∞, ∞], ∆ a bin width, k = −(N −1), ..., 0, ...(N −1),
and let gk = g(tk ). The discrete FFT approximation to the integral evaluated at a point sn =
n/(N ∆), n = −N/2, ..., N/2 is
                                                                           (N −1)
                                                                            X
                                                               −1/2
                                        g̃(sn ) = (2π)                                    eisn tk gk ∆,
                                                                       k=−(N −1)

The last expression can be written as
                                                                                 (N −1)
                                                                                  X              ink∆
                                                                −1/2
                                        g̃(sn ) = (2π)                 ∆                     e N ∆ gk .
                                                                            k=−(N −1)


We can use the fact that eiα is a cyclical function to reduce the number of calculations to N log2 N .
Writing the last expression as
                                                                           
                                     X   −1                   (N −1)       
                                                  ink           X      ink
                        (2π)−1/2 ∆              e N gk + g0 +         e N gk .                     (7)
                                                                           
                                                  k=−(N −1)                                      k=1

We now consider just the third term in brackets, since all the same considerations apply to the
first. We can write it as
                     (N −1)                          (N
                                                      2
                                                        −1)                                       (N
                                                                                                   2
                                                                                                     −1)
                      X           ink                    X          in(2k+1)                        X          in(2k)
                              e    N    gk =                    e      N         g(2k+1) +                 e     N      g(2k)
                      k=1                                k=1                                        k=1
                                                              (N
                                                               2
                                                                 −1)                              (N
                                                                                                   2
                                                                                                     −1)
                                                         in    X           ink                      X          ink
                                              = e        N             e   N/2   g(2k+1) +                 e N/2 g(2k) .
                                                               k=1                                  k=1

Repeat this process until the summation only includes one term:

                                  (N
                                   4
                                     −1)                                                     (N
                                                                                              4
                                                                                                −1)
                            in     X             in(2k+1)                               in    X           in(2k)
                     = e    N                e     N/2        g(2(2k+1)+1) + e          N               e N/2 g(2(2k)+1)
                                   k=1                                                        k=1
                              (N
                               4
                                 −1)                                             (N
                                                                                  4
                                                                                    −1)
                                  X          in(2k+1)                             X          in2k
                         +               e     N/2       g(2(2k+1)) +                     e N/2 g(2(2k))
                                  k=1                                             k=1
                                         (N
                                          4
                                            −1)                                        (N
                                                                                        4
                                                                                          −1)
                            in      in       X           ink                      in    X           ink
                     = e e  N      N/2               e   N/4   g(4k+3) + e        N               e N/4 g(4k+1)
                                             k=1                                        k=1
                                        (N
                                         4
                                           −1)                              (N
                                                                             4
                                                                               −1)
                                  in     X           ink                       X           ink
                         +e N/2                    e N/4 g(4k+2) +                      e N/4 g(4k)
                                         k=1                                     k=1
                         etc...

                                                                       78
After making these substitutions, we get

                  = g(0) (ein/N )0 + g(1) (ein/N )1 + g(2) (ein/N )2 + · · · + g(2r ) (ein/N )2r ,

where 2r is the total number of grid points (2r = M ).
   Consider the number of calculations required for each of these terms for n = 0, ..., N/2. (Negative
terms are complex conjugates). Here

                  g(1) (ein/N ) , n = 0, .., N/2 requires N complex multiplications
                 g(2) (ein/N )2 , n = 0, .., N/2 requires N/2 complex multiplications
                 g(3) (ein/N )3 , n = 0, .., N/2 requires N/3 complex multiplications
                                           .
                                           .
                             2r
               g(2r ) (ein/N )    , n = 0, .., N/2 requires N/N complex multiplications.

Thus, using this method we need no more than N + N/2 + N/3 + ... + N/N = N log2 N complex
multiplications.

Making the grid To implement the method described above, consider an interval [a, b] in which
the data lie. The FFT method imposes periodic boundary conditions, so the interval needs to be
chosen large enough. For a normal kernel, it suffices to choose a and b that satisfy

                                               a < min(xj ) − 3hn
                                               b > max(xj ) + 3hn ,

where hn is the bandwidth.(Silverman, 1986) Also, let M = 2r for some integer r denote the total
number of grid points and let δ the bin width, δ = (b − a)/M . The grid points are given by
tk = a + kδ, for k = 0, 1, ..., M − 1. If the data point falls onto the grid interval [tk , tk+1 ], we assign
a weight ξ k = δ −2 n−1 (tk+1 − xj ) to tk and a weight ξ̄ k+1 = δ −2 n−1 (xj − tk ) to tk+1 . The weights
over all the data points (xj , j = 1..n) are accumulated at each grid point. Let
                                                   n
                                                   X
                                 ξ k = δ −2 n−1          (tk+1 − xj )1(xj ∈ [tk , tk+1 ])
                                                   j=1
                                                   Xn
                                 ξ̄ k = δ −2 n−1         (xj − tk−1 )1(xj ∈ [tk−1 , tk ])
                                                   j=1


                                                   ξ k = ξ k + ξ̄ k .
                           PM
The ξ k weights satisfy k=0 ξ k = δ −1 .
   In this notation, we can write the binning approximation for (2π)−1/2 n−1 ni=1 eisn xi as
                                                                            P

                                                            M
                                                            X −1
                                         ≈ (2π)−1/2                δξ k eisn tk
                                                            k=0
                                                            M
                                                            X −1
                                         = (2π)−1/2                δξ k eisn (a+kδ) .
                                                            k=0


                                                            79
                                   n = 1000       n = 10, 000          n = 100, 000
                                     1.02 sec      14.7 sec                185.8 sec
                      M = 100
                                     0.25%         0.27%                   0.40%
                                     1.81 sec      11.5 sec                145.1 sec
                      M = 500
                                     0.047%        0.048%                  0.049%
                                     2.45 sec      11.5 sec                137.4 sec
                      M = 1000
                                     0.021%        0.036%                  0.041%
                      no approx.   175.2 sec      22257 sec            N/A

                              Table 9: Speed/Accuracy comparisons


sn are taken to be sn = n/M δ for n = −M/2, ..., M/2:
                                                  M −1
                                                  X              n
                                           −1/2
                                   = (2π)                δξ k ei M δ (a+kδ)
                                                  k=0
                                                         M −1
                                                   ia    X           ink
                                   = (2π)−1/2 e M δ {           δξ k e M }.
                                                         k=0

This last expression is in the form needed to apply FFT. Jones and Lotwick (1983) show that the
MISE of this approximation is O(δ 4 ).

8.2   Performance evaluation
We next evaluate the gains in speed obtainable from using the binning methods described above
in a set-up where we are performing local linear regression and choosing smoothing parameters
through least squares cross-validation (the LSCV method described in section 6). The computa-
tional method effectively factors the data component and the bandwidth component in the fre-
quency domain, so that computation across different bandwidths can be done efficiently by reusing
the data component of the computation. We show how these techniques work very well and make
it feasible to do nonparametric and semiparametric estimation even with sample sizes well over
100,000.
    The following result is obtained for data generated by y = exp x without error, where x has
the standard normal distribution. Grids are constructed between -3 and 3. We estimate m(x) at
all grid data points using the local linear regression method and use LSCV to select the globally
optimum bandwidth. The machine we used is a DEC 5000/240.
    Table 11 compares the speed and the average root percentage mean squared errors obtained
using the binning approximation method to that obtained without approximating (reported in the
second row of each cell) for different size samples and for different numbers of grid points, M.
    Speed does not necessarily increase with the gain in accuracy, because the computation involves
optimization over the bandwidth. The time it takes for convergence, in our experience, goes down
as M increases. As one can see for the case of 10000 observations we can reduce the computation
time to 0.036 % of the time it would otherwise take. For the case of 100,000 observations and for


                                                  80
this workstation, the computation would have been a major task running over days as opposed to
about 3 minutes with the approximation method.


9    Efficiency Concepts in Nonparametric and Semiparametric Mod-
     els
When a probability model is specified parametrically, under some regularity conditions the ML
estimator is asymptotically efficient for a large class of estimators. In some cases, the probability
model can be expanded to include infinite dimensional parameters and aspects of the model are
still estimable at the parametric rate or even with the same efficiency as under the parametric
specification. Consider for example a parametric probability model with two parameters β and
η. Under some regularity conditions the joint efficiency bound is provided by the inverse of the
information matrix, with the efficiency bound for estimating β being given by the appropriate
component of the partition inverse formula corresponding to the information matrix. The efficiency
bound for estimating β can also be calculated when η is known, say to be equal to η 0 , and is equal
to the inverse of the information matrix. A comparison of the two efficiency bounds for β shows
the effect of knowing η. When the bounds coincide, there is no efficiency loss in not knowing η 0 . If
the bounds do not coincide there is an efficiency loss.
     When η lies in an infinite dimensional parameter space the approach needs some modifications,
but analogous results have now been obtained in much generality for many classes of models. See
Bickel, Klaassen, Ritov, and Wellner (1993), Newey , Hansen, Hansen, Heaton and Ogaki (1988),
Cosslett ( ), Chamberlain (1992), Han ( ), Hall and Ichimura ( ), Horowitz ( ), Pfanzagl (1990).


10     Conclusions




                                                 81
References
 [1] Abbring, J., Heckman, J. J. and E. Vytlacil (2003): “Econometric Evaluation of Social
     Programs,” this handbook.

 [2] Ahn, H. and J. L. Powell (1993): “Semiparametric Estimation of Censored Sample Selection
     Models with A Nonparametric Selection Mechanism.” Journal of Econometrics, 58, No. 1-2,
     3-29.

 [3] Ai, Chunrong, Richard Blundell and Xiaohong Chen (2000): “Semiparametric Engle Curves
     with Endogenous Expenditure,” mimeo, UCL.

 [4] Andrews, D. (1991): “Asymptotic Normality of Series Estimators for Various Nonparametric
     and Semiparametric Models, ” Econometrica, 59, 307–345.

 [5] Andrews, D. (1994): “Empirical Process Methods in Econometrics,” Handbook of Economet-
     rics, Volume 4. eds. R.F. Engle and D.L. McFadden, 2247–2294.

 [6] Arabmazar, A. and P. Schmidt (1982): “An Investigation of the Robustness of the Tobit
     Estimator to Non-Normality,” Econometrica, 50, No. 4, 1055-1063.

 [7] Ashenfelter, O. (1978): “Estimating the Effect of Training Programs on Earnings,” Review
     of Economics and Statistics, 60, 47-57.

 [8] Ashenfelter, O. and D. Card (1985): “Using the Longitudinal Structure of Earnings to Esti-
     mate the Effect of Training Programs,” Review of Economics and Statistics, 67, 648-660.

 [9] Banks, J., Blundell, R. and A. Lewbel (1997): “Quadratic Engel Curves and Consumer
     Demand” in Review of Economics and Statistics, Vol. XLLIX, No. 4.

[10] Bassi, L. (1984): “Estimating the Effects of Training Programs with Nonrandom Selection,
     ” Review of Economics and Statistics, 66, 36-43.

[11] Bergstrom, A. R. (1985): “The Estimation of Nonparametric Functions in a Hilbert Space”
     in Econometric Theory, 1, 1-26.

[12] Bickel, P. (1982): “On Adaptive Estimation,” Annals of Statistics, 10, 647–671.

[13] Bickel et. al.(1980):

[14] Bickel et. al.(1990):

[15] Bickel, P., Y. Aı̈tSahalia, and T. Stoker (1995): ”Goodness-of-fit Tests for Regression Using
     Kernel Methods,” unpublished manuscript, University of Chicago.

[16] Bickel, P. J., C. A. J. Klaassen, Y. Ritov, and J. A. Wellner (1993): Efficient and Adap-
     tive Estimation for Semiparametric Models, Johns Hopkins University Press, Baltimore and
     London.


                                               82
[17] Bierens, H. J. (1985): “Kernel estimators of regression functions,” in Advances in Economet-
     rics, edited by T. Bewley, Cambridge University Press, New York.

[18] Blundell, R. and Duncan, A. (1998): “Kernel Regression in Empirical Microeconomics” in
     The Journal of Human Resources, Vol. XXXIII, Vol. 1.

[19] Bowman, Adrian (1984): “An alternative method of cross-validation for the smoothing of
     density estimates,” in Biometrika, 71, 353-360.

[20] Breiman, L. and Friedman, J. H. (1985): “Estimating Optimal Transformations for Multiple
     Regression and Correlation.” in Journal of the American Statistical Association, 80, 580-619.

[21] Buchinsky, Moshe (1994): “Changes in the U.S. wage structure 1963-1987: Application of
     quantile regression” in Econometrica, Vol. 62, no. 2, p. 405(54).

[22] Buchinsky, Moshe (1995): “Quantile regression, Box-Cox transformation model, and the U.S.
     wage structure, 1963-1987” in Journal of Econometrics, 65, 109-154.

[23] Buchinsky, Moshe (1995): “Estimating the asymptotic covariance matrix for quantile regres-
     sion models. A Monte Carlo study” in Journal of Econometrics, 68, 303-338.

[24] Buchinsky, Moshe (1998): ” The Dynamics of Changes in the Female Wage Distribution
     is the USA: A Quantile Regression Approach” in Journal of Applied Econometrics, Vol. 13,
     1-30.

[25] Buchinsky, Moshe and Jinyong Hahn (1998): “An alternative estimator for the censored
     quantile regression model” in Econometrica, Vol.66, no. 3, p. 653(19).

[26] Cai, T. Tony and Lawrence D. Brown (1998): “Wavelet shrinkage for nonequispaced samples.”
     in Annals of Statistics, 26, 1783-1799.

[27] Cao, Ricardo Cuevas, antonio and Wenceslao Gonzales-Maniega (1994): “A comparative
     study of several smoothing methods in density estimation” in Computational Statistics and
     Data Analysis, 17, 153-176.

[28] Chamberlain, Gary (1984):

[29] Chamberlain, Gary (1986): “Notes on Semiparametric Regression,” unpublished manuscript,
     Harvard University.

[30] Chamberlain, Gary (1987):

[31] Chamberlain, Gary (1995):

[32] Chamberlain, Gary (1992): “Efficiency Bounds for Semiparametric Regression,” Economet-
     rica, 1992, vol. 60, issue 3, pages 567-96.

[33] Choi, K. (1992): “The Semiparametric Estimation of the Sample Selection Model Using Series
     Expansion and the Propensity Score,” PhD dissertation, University of Chicago.

                                               83
[34] Chui (1991)

[35] Cleveland, William S. and Clive Loader (1996): “Smoothing by Local Regression: Principles
     and Methods.” unpublished manuscript, AT&T Bell Laboratories.

[36] Cosslett, S. R. (1984):

[37] Cosslett, S. R. (1991): “Semiparametric Estimation of a Regression Model with Sample
     Selectivity” in Nonparametric and Semiparametric Methods in Economics and Statistics: ed.
     by W.A. Barnett, J. Powell and G. Tauchen. Cambridge: Cambridge University Press, 175–
     197.

[38]      (1988): “Efficiency of Semiparametric Estimators for the Binary Choice Model in Large
       Samples: A Monte Carlo Comparison,” unpublished manuscript, University of Florida.

[39] Cox, D. D. (1988): “Approximation of Least Squares Regression on Nested Subspaces” in
     Annals of Statistics, 16, 713-732.

[40] Davidian, M. and A. R. Gallant (1992): “Smooth Nonparametric Maximum Likelihood Esti-
     mation for Population Pharmacokinestics with Application to Quinidine,” Journal of Phar-
     macokinetics and Biopharmaceutics, 20, 5.

[41] Davidson, R. and J. G. MacKinnon (1981): “Several Tests for Model Specification in the
     Presence of Alternative Hypotheses” in Econometrics, 49, No. 3, pp. 781-793.

[42] Davidson, R. and J. G. MacKinnon (1982): “Some Non-nested Hypotheses Tests and the
     Relations Among Them” in The Review of Economic Studies, Vol 49, No. 4, pp.551-565.

[43] Deaton, Angus and Serena Mg (1998): “Parametric and Nonparametric Approaches in Price
     and Tax Reform” in Journal of the American Statistical Association, Vol. 93, No. 443,
     p.900(10).

[44] Deaton, Angus and Christina Paxson (1998): “Economies of Scale, Household Size and the
     Demand for Food” in Journal of Political Economy, vol. 106, no. 5.

[45] Deaton, Angus (1998):

[46] Delgado, M.A. (1992): “Semiparametric Generalized Least Squares in the Multivariate Non-
     linear Regression Model,” Econometric Theory, 8, 203-222.

[47] Delgado, Miguel A. and Robinson, Peter M. (1992): “Nonparametric and Semiparametric
     Methods for Economic Research,” Journal of Economic Surveys: 6(3): 201-250.

[48] Devroye and Lugosi (1996): “A Universally Acceptable Smoothing Factor for Kernel Density
     Estimators” in Annals of Statistics, 2499-2512.

[49] DiNardo, J., Fortin, N. and Lemiex, T. (1996): “Labor Market Institutions and the Distri-
     bution of Wages, 1973-1992: A Semiparametric Approach” in Econometrica, Vol. 64, No. 5,
     1001-1044.

                                               84
[50] Dirac, P. A. M. (1958): Quantum Mechanics, 4th ed., London: Oxford University Press.

[51] Donohoe and Johnstone (1994)

[52] Eastwood, Brian (1991): “Asymptotic Normality and Consistency of Semi-nonparametric Re-
     gression Estimators Using an Upwards F Test Truncation Rule” in Journal of Econometrics,
     48 (1-2), 151-81.

[53] Eastwood, Brian and A.R. Gallant (1991): “Adaptive Rules for Seminonparametric Estima-
     tors that Achieve Asymptotic Normality,” Econometric Theory, 8, 307-340.

[54] Elbadawi, I. , Gallant, A. R. and G. Souza (1983): “An Elasticity can be estimated consis-
     tently without a priori knowledge of functional form” Econometrica, 51:1731-51.

[55] Engle, Robert, Clive W. Granger, J. Rice and A. Weiss (1986): “Semiparametric Estimates of
     the Relation between Weather and Electricity Demand,” Journal of the American Statistical
     Association, 81, 310-320.

[56] Epanechnikov (1969): “Nonparametric estimation of a multi-variate probability density,”
     Theory of Probability and its Applications, 14:153-158.

[57] Eubank, R. L. (1988): Spline Smoothing and Nonparametric Regression New York: Marcel
     Dekker.

[58] Fabian, V. (1988): “Polynomial Estimation of a Regression Function with the Supremum
     Norm Error” in Annals of Statistics, 16, 1345-1368.

[59] Fan, J. (1992): “Design Adaptive Nonparametric Regression, ” Journal of the American
     Statistical Association, 87, 998–1004.

[60] Fan, J. (1993): “Local Linear Regression Smoothers and their Minimax Efficiencies,” The
     Annals of Statistics, 21, 196-216.

[61] Fan, J. and I. Gijbels (1994): “Data-driven bandwidth selection in local polynomial fitting:
     variable bandwidth and spatial adaptation,” unpublished manuscript, University of North
     Carolina.

[62] Fan, J. and Gijbels, I. (1996): Local Polynomial Modelling and Its Applications. New York:
     Chapman and Hall.

[63] Fan, J. and Marron (1994): “Fast implementations of nonparametric curve estimation,” un-
     published manuscript forthcoming in Journal of Computational and Graphical Analysis.

[64] Fan, Y and Q. Li (1996) “Consistent Model Specification Tests: Omitted Variables and
     Semiparametric Functional Forms,” Econometrica, 64, 865–890.

[65] Faraway, J. J. and Jhun, M. (1990) “Bootstrap Choice of Bandwidth for Density Estimation”
     in JASA, 85, 1119-1122.

                                              85
[66] Fenton, V. and Gallant, R. (1996): “Convergence rates of seminonparametric density estima-
     tors” Econometrica, 64:719-29.

[67] Fisher, R. A. (1935): Design of Experiments. New York: Hafner.

[68] Fraker, T. and R. Maynard (1987): ”The Adequacy of Comparison Group Designs for Eval-
     uations of Employment Related Programs,” The Journal of Human Resources, 22, 194-227.

[69] Gallant, A. R. (1981): “On the Bias in Flexible Functional Forms and an Essentially Unbiased
     Form: The Fourier Flexible Form” in Journal of Econometrics, 15, 211-245.

[70] Gallant, A. R. and D.W. Nychka (1987): “Seminonparametric Maximum Likelihood Estima-
     tion,” Econometrica, 55, 363-390.

[71] Gallant, A. R. and G. Golub (1984): “Imposing curvature restrictions on flexible functional
     forms” Journal of Econometrics, 26: 295-321.

[72] Gallant, A. R. and G. Souza (1991): “On the Asymptotic Normality of Fourier Flexible Form
     Estimates” in Journal of Econometrics, 50 (3), 329-54.

[73] Geman, S. and C. Hwang (1982): “Nonparametric Maximum Likelihood Estimation by the
     Method of Sieves” in Annals of Statistics, 10, 401-414.

[74] Goldberger, A. (1968): Topics in Regression Analysis. New York: Wiley.

[75] Goldberger, A. (1982): “Abnormal Selection Bias,” in Studies in Econometrics, Time Series
     and Multivariate Statistics, ed. by S. Karlin, T. Amemiya and L.A. Goodman. New York:
     Academic Press. 67-84.

[76] Goldberger, A. (1990):

[77] Gozalo, Pedro L. (1993): “A Consistent Model Specification Test for Nonparametric Estima-
     tion of Regression Function Models,” Econometric Theory, 9, 451–477.

[78] Gronau, R. (1973): “New Econometric Approaches to Fertility” in Journal of Political Econ-
     omy, Vol. 81, No. 2, Part 2, pp.S168-S199.

[79] Gronau, R. (1973): “The Intrafamily Allocation of Time: The Value of the Housewive’s
     Time” in The American Economic Review, Vol. 63, No. 4, pp. 634-651.

[80] Hall, Peter (1983): “Large Sample Optimality of Least-Squares Cross-Validation in Density
     Estimation” in Annals of Statistics, 11,1156-1174.

[81] Hall, Peter (1987)

[82] Hall, Peter (1992): “Transformations to remove skewness when constructing confidence in-
     tervals,” Journal of Royal Statistical Society

[83] Hall, Peter (1992): The Bootstrap and Edgeworth Expansion, Springer-Verlag, New York.

                                              86
[84] Hall, Peter and Joel L. Horowitz (1990): “Bandwidth Selection in Semiparametric Estimation
     of Censored Linear Regression Models,” Econometric Theory, 6, 123–150.

[85] Hall, P., S. Sheather, M. Jones and J. Marron (1991): “On optimal data-based bandwidth
     selection in kernel density estimation.” Biometrika, 78, 263-269.

[86] Hall, P. and M. P. Wand (1996): “On the accuracy of binned kernel density estimates,”
     Journal of Multivariate Analysis, 56, 165–184.

[87] Hall, Peter and Marron, J. S. (1987): “Extent to which Least-Squares Cross-Validation Mini-
     mizes Integrated Squared Error in Nonparametric Density Estimation” in Probability Theory
     and Related Fields, Springer-Verlag.

[88] Hall, Peter, Marron, J.S. and Park, B. U. (1992): “Smoothed Cross-Validation” in Probability
     Theory and Related Fields, 90, 149-173.

[89] Hall, P. and B. U. Turlach (1997): “Interpolation methods for adapting to sparse design in
     nonparametric regression (C/R: p. 473-476)” in JASA, 92, 466-472.

[90] Hall, P. and H. Ichimura ( ):

[91] Hansen, Lars P. (1982): “Large Sample Properties of Generalized Method of Moments Esti-
     mators” in Econometrica, 50, 1029-1059.

[92] Hansen, Lars Peter, Heaton, John C. and Masao Ogaki. ”Efficiency Bounds Implied by Mul-
     tiperiod Conditional Moment Restrictions.” Journal of the American Statistical Association
     83, no.403 (September 1988): 863-71.

[93] Härdle, Wolfgang (1990): Applied Nonparametric Regression. Cambridge: Cambridge Uni-
     versity Press.

[94] Härdle, Wolfgang (1991): Smoothing Techniques with Implementation in S, Springer-Verlag,
     New York.

[95] Härdle, Wolfgang and Oliver Linton (1994): “Applied Nonparametric Methods” in Handbook
     of Econometrics, Vol. 4, Elsevier, Amsterdam, p. 2295-2339.

[96] Härdle, Wolfgang and Linton, Oliver B. (1996): “Estimating Additive Regression with Known
     Links” in Biometrika, 83, 529-540.

[97] Härdle, Wolfgang, Peter Hall and Hidehiko Ichimura (1993): “Optimal Semiparametric Esti-
     mation in Single Index Models,” The Annals of Statistics, 21, 1, 157-178.

[98] Härdle, Wolfgang, Hildebrand, and M. Jerison (1991): “Empirical Evidence on the Law of
     Demand” in Econometrica, 59, 1525-1549.

[99] Härdle, Wolfgang, J. Hart, J. S. Marron, and A. B. Tsybakov (1992): “Bandwidth Choice
     for Average Derivative Estimation” in Journal of the American Statistical Association, Vol.
     87 (417), p. 218-26.

                                              87
[100] Härdle, Wolfgang and Thomas Stoker (1989): “Investigating Smooth Multiple Regression by
      the Method of Average Derivatives” in JASA, 84, 986-95.

[101] Hastie, Trevor J. and Tibshirani, R. J., (1990) Generalized Additive Models (Chapman and
      Hall: ).

[102] Hausman, J. (1978): “Specification Tests in Econometrics” in Econometrica, 46, 1251-1272.

[103] Hausman, J. and Whitney K. Newey (1995): “Nonparametric Estimation of Exact Consumer
      Surplus and Deadweight Loss,” Econometrica, 63:1445-76.

[104] Heckman, James J. (1974): “Shadow prices, market wages and labor supply” in Econometrica,
      42, 679-694.

[105] Heckman, James J. (1976): “The Common Structure of Statistical Models of Truncation,
      Sample Selection, and Limited Dependent Variables and a Simple Estimator for such Models”,
      Annals of Economic and Social Measurement, 5, 475-492.

[106] Heckman, James J. (1980): “Addendum to Sample Selection Bias as specification Error,”
      in Evaluation Studies Review Annual, ed. by E. Stromsdorfer and G. Frakas. San Fransisco,
      Sage.

[107] Heckman, James J. (1990): “Varieties of Selection Bias,” American Economic Review, 80, 2,
      313-328.

[108] Heckman, James J. and Richard Robb (1985): “Alternative Methods for Evaluating the
      Impact of Interventions” in Longitudinal Analysis of Labor Market Data, eds. J. Heckman
      and B. Singer, Cambridge University Press.

[109] Heckman, James J. and Joseph Hotz (1989): “Choosing Among Alternative Nonexperimental
      Methods for Estimating the Impact of Social Programs: The Case of Manpower Training”,
      Journal of the American Statistical Association, 84, 408, 862-880.

[110] Heckman, James J. and Thomas MaCurdy (1985): ”A Simultaneous Equations Linear Prob-
      ability Model,” Canadian Journal of Economics, 18, 28-37.

[111] Heckman, James J. and Jeffrey Smith (1995): “Evaluating the Case for Randomized Social
      Experiments”, Journal of Economic Perspectives.

[112] Heckman, James J. , Hidehiko Ichimura, Jeffrey Smith, and Petra Todd (1998): “Nonpara-
      metric Characterization of Selection Bias Using Experimental Data”, in Econometrica, Vol.
      66, Sept.

[113] Heckman, James J. , Hidehiko Ichimura, and Petra Todd (1996a): “Matching as an Econo-
      metric Evaluation Estimator: Theory and Evidence on its Performance Applied to the JTPA
      Program, Part I. Theory and Methods,” forthcoming in Review of Economic Studies, 1997.



                                              88
[114] Heckman, James J., Hidehiko Ichimura, and Petra Todd (1996b): “Matching as an Econo-
      metric Evaluation Estimator: Theory and Evidence on its Performance Applied to the JTPA
      Program, Part II. Empirical Evidence,” forthcoming in Review of Economic Studies, 1997.

[115] Heckman, James J., Ichimura, Hidehiko and Petra Todd (1998): “Implementing the Partially
      Linear Regression Model,” unpublished manuscript.

[116] Heckman, James J., Lochner, Lance and Petra Todd (2003): “Fifty Years of Mincer Earnings
      Regressions,” NBER working paper #.

[117] Heckman, J. J., Lalonde, R. and J. Smith (1999): “The Economics and Econometrics of Active
      Labor Market Programs” in Handbook of Labor Economics, Volume III, eds. O. Ashenfelter
      and D. Card (Elsevier: Amsterdam).

[118] Hjort and Jones (1996): “Local Parametric Nonparametric Density Estimation” in Annals of
      Statistics, Vol. 24, 1619-1647.

[119] Hong, Y. and Halbert White (1995): “Consistent Specification Testing via Nonparametric
      Series Regression,” Econometrica, 63, 1133–1159.

[120] Horowitz, Joel L. (1992): “A Smoothed Maximum Score Estimator for the Binary Response
      Model,” Econometrica, 60, 505–531.

[121] Horowitz, Joel L. (1998): Semiparametric Methods in Econometrics: Lecture Notes in Statis-
      tics, Vol. 131, New York and Heidelberg: Springer Verlag.

[122] Horowitz, Joel L. and W. Härdle (1994): “Testing a parametric model against a semipara-
      metric alternative,” Econometric Theory, 821–848.

[123] Horowitz, Joel and G. Neumann (1989): “Specification Testing in Censored Regression Mod-
      els: Parametric and Semiparametric Methods” in Journal of Applied Econometrics, Vol. 4,
      S61-S86.

[124] Ichimura, Hidehiko (1993): “Semiparametric Least Squares Estimation of Single Index Models
      (SLS) and Weighted SLS Estimation of Single Index Models.” Journal of Econometrics, 58,
      71-120.

[125] Ichimura, Hidehiko and Lung-Fei Lee ( 1991): “Semiparametric Least Squares Estimation of
      Multiple Index Models: Single Equation Estimation,” in Nonparametric and Semiparamet-
      ric Methods in Economics and Statistics, ed. by W.A. Barnett, J. Powell, and G. Tauchen
      (Cambridge, England: Cambridge University Press) 3-49.

[126] Ichimura, Hidehiko (1995): “Asymptotic Distribution Theory for Semiparametric and
      Nonparametric Estimators with Data Dependent Smoothing Parameters,” unpublished
      manuscript, University of Pittsburgh.

[127] Johnson, N. J. (1978): “Modified t-tests and confidence intervals for asymmetrical popula-
      tions,” Journal of the American Statistical Association, 73, 536–544.

                                              89
[128] Jones, M. C. and S.J. Sheather (1991): “A reliable data-based bandwidth selection method
      for kernel density estimation” in Journal of the Royal Statistical Society, Series B, Method-
      ological, 53, 683-390.

[129] Jones, M. C., Marron, J. S. and Sheather, S. J. (1996): “A Brief Survey of Bandwidth
      Selection for Density Estimation” in Journal of the American Statistical Association, Vol. 91,
      No. 433, 401-407.

[130] Jones, M. C. and Marron, J. S. (1992): “Progress in Data-Based Bandwidth Selection for
      Kernel Density Estimation” in .

[131] Jones, M.C. and Lotwick, H.W. (1983), “On the errors involved in computing the empirical
      characteristic function” in Journal of Statist. Comput. Simulation, 17, 133-149.

[132] Kanazawa, Y. (1993) “Helliger distance and Kullback-Leibler loss for the kernel density esti-
      mator” in Statistics and Probability Letters, 18, 315-321.

[133] Klein, R. W. and R. H. Spady (1993): “An Efficient Semiparametric Estimator for Binary
      Response Models,” Econometrica, 61, 2, 387-421.

[134] Koenker, R. and G. Bassett (1978): “Regression Quantiles” in Econometrica, 46, 33-50.

[135] Kolmogorov, A. N. and S. V. Fomin (1957): Elements of the Theory of Functions and
      Functional Analysis, Translated from Russian by Leo F. Boron (Rochester, NY: Graylock
      Press).

[136] Leamer, Edward (1978): Specification Searches: Ad Hoc Inference with Nonexperimental
      Data, New York: Wiley.

[137] Lee, Lung-Fei (1978): “Unionism and Wage Rates,” International Economic Review, 19,
      415–433.

[138] Lee (1998)

[139] Lewis, H. Gregg (1974): “Comments on Selectivity Biases in Wage Comparisons” in Journal
      of Political Economy, Vol. 82 (6), p. 1145-55.

[140] Linton, Oliver B. (1995): “Second Order Approximation in the Partially Linear Regression
      Model,” Econometrica, 63, 1079–1112.

[141] Linton, Oliver B. (1996): “Second order approximation in a linear regression with het-
      eroskedasticity of unknown form,” Econometric Review, 15, 1–32.

[142] Linton, Oliver B. (1996): “Second Order Approximation in the Partially Linear Regression
      Model,” Econometrica, 63, 1079-1112.

[143] Linton, Oliver B.; Chen, Rong; Wang, Naiysin; and Hardle,Wolfgang (1997): “An Analy-
      sis of Transformations for Additive Nonparametric Regression” in Journal of the American
      Statistical Association, Vol. 92, No. 440, p. 1512(10..

                                                90
[144] Loader, Clive (1995): “Old Faithful Erupts: Bandwidth Selection Reviewed” unpublished
      manuscript, AT&T Bell Laboratories.

[145] Loader, Clive (1996): “Local Likelihood Density Estimation” in The Annals of Statistics,
      Vol. 24, No. 4, 1602-1618.

[146] Loader, Clive (1999): Local Regression and Likelihood, Springer-Verlag.

[147] Low (1997): “On nonparametric confidence intervals” in The Annals of Statistics, 25, 2547-
      2554.

[148] Malinvaud, E.B. (1970): Statistical Methods of Econometrics. Amsterdam: North-Holland.

[149] Mallows, C. L. and J. W. Tukey (1982): “An overview of techniques of data analysis, em-
      phasizing its exploratory aspects,” in Some Recent Advances in Statistics, ed. by J. Tiago de
      Oliveira and B. Epstein (New York, Academic Press) 111–172.

[150] Manski, Charles F. (1975): “Maximum Score Estimation of the Stochastic Utility Model of
      Choice,” Journal of Econometrics, 3, 205–228.

[151] Manski, Charles F. (1985): “Semiparametric analysis of discrete response: Asymptotic prop-
      erties of the maximum score estimator” in Journal of Econometrics, 27, 313-333.

[152] Manski, Charles F. (1988): “Identification of Binary Response Models,” Journal of the Amer-
      ican Statistical Association, 83, 729-738.

[153] Manski, Charles F. (1994): “Analog Estimation of Econometric Models” in Handbook of
      Econometrics, Volume 4. eds. R.F. Engle and D.L. McFadden, ?.

[154] Manski, Charles F. and Scott Thompson (1986): “Operational Characteristics of Maximum
      Score Estimation,” Journal of Econometrics, 32, 85–108.

[155] Manski, Charles F. and Daniel McFadden (1981): “Alternative Estimators and Sample De-
      signs for Discrete Choice Analysis” in Structural Analysis of Discrete Data with Economic
      Applications, edited by C.F. Manski and D. McFadden (Cambridge, Mass.: MIT Press) 1-50.

[156] Marron, J. S. (1991) “Bootstrap bandwidth Selection” in Exploring the Limits of the Boot-
      strap, eds. R. LePage and L. Billard, New York: John Wiley, pp. 249-262.

[157] Marron, J. S. (1992) “Bootstrap Bandwidth Selection” in Exploring the Limits of the Boot-
      strap, eds. R. LePage and L. Billard, New York: John Wiley, pp.249-262.

[158] Marron, J. S., Park and Kim (1994): “Asymptotically best bandwidth selection in kernel
      density estimation,” Statistics and Probability Letters, 19:119-127.

[159] Masry, Elias (1996a): “Multivariate Local Polynomial Regression for Time Series: Uniform
      Strong Consistency and Rates,” in Journal of Time Series Analysis, Vol. 1, p. 571-599.



                                                91
[160] Masry, Elias (1996b): “Multivariate Regression Estimation: Local Polynomial Fitting for
      Time Series” in Stochastic Processes and their Applications, 65:81-101.

[161] Matzkin, Rosa (1994): “Restrictions of Economic Theory in Nonparametric Methods” in
      Handbook of Econometrics, Volume 4. eds. R.F. Engle and D.L. McFadden, 2524-2554.

[162] McFadden, Daniel (1985): (citation appears on p. 1)

[163] Mincer, Jacob (1958): “Investment in Human Capital and Personal Income Distribution”,
      Journal of Political Economy, 66, 281-302.

[164] Mincer, Jacob (1974): Schooling, Experience and Earnings (New York: National Bureau of
      Economic Research).

[165] Muller, H. G. (1985) “Empirical Bandwidth Choice for Nonparametric Kernel Regression by
      Means of Pilot Estimators” in Statistics and Decisions, Supp. issue 2, 193-206.

[166] Muller, H. G. (1992)

[167] Nadaraya, E. A. (1964): “On estimating regression” in Theory of Probability and its Appli-
      cations, 10, 186-190.

[168] Nagar, A. L. (1959): “The Bias and Moment Matrix of the General k-Class Estimators of
      the Parameters in Simultaneous Equations,” Econometrica, 27, 573–595.

[169] Newey, Whitney K. (1985): “Generalized method of moments specificaiton tests” in Journal
      of Econometrics, 29, 229-256.

[170] Newey, Whitney K. (1987): “Specification tests for distributional assumptions in the tobit
      model” in Journal of Econometrics, 34, 125-145.

[171] Newey, Whitney K. (1988): “Two-step series estimation of sample selection models,” working
      paper, MIT.

[172] Newey, Whitney K. (1990): “Semiparametric Efficiency Bounds,” Journal of Applied Econo-
      metrics, 5, 99–135.

[173] Newey, Whitney K. (1993): “Efficient estimation of models with conditional moment restric-
      tions” in Handbook of statistics, volume 11: Econometrics, 419-454.

[174] Newey, Whitney K. (1994): “The Asymptotic Variance of Semiparametric Estimators” Econo-
      metrica, Vol. 62, No. 6,1349-82.

[175] Newey, Whitney K. (1994):“Kernel Estimation of Partial Means” in Econometric Theory, 10,
      233-253.

[176] Newey, Whitney K. ; Powell, James and James Walker (1990): “Semiparametric estimation
      of selection models: some empirical results” American Economic Review, 80:324-8.


                                              92
[177] Newey, Whitney and James Powell (1993): “Efficiency Bounds for Some Semiparametric
      Selection Models” in Journal of Econometrics, Vol. 58 (1-2), p.169-84.

[178] Newey, Whitney and Daniel McFadden (1994): “Large Sample Estimation and Hypothesis
      Testing” in Handbook of Econometrics, Volume 4. eds. R.F. Engle and D.L. McFadden, 2113-
      2241.

[179] Olley, Steve and Pakes, Ariel (1996) “The Dynamics of Productivity in the Telecommunica-
      tions Equipment Industry” Econometrica, Vol. 64, 1263-1297.

[180] Pagan, Adrian and Ullah, Aman (1999): Nonparametric Econometrics, (Cambridge, MA:
      Cambridge University Press)

[181] Pakes, Ariel and David Pollard (1989): “ ”, Econometrica, Vol. 57, No. 5, p. 1027(32).

[182] Park, B. U. and Marron, J. S. (1990): “Comparison of data-driven bandwidth selectors” in
      JASA, 85, 66-72.

[183] Park, Byeong U. and Turlach, Berwin A. (1992): “Reply to comments on ‘Practical perfor-
      mance of several data driven bandwidth selectors”’ in Computational Statistics, 7, 283-285.

[184] Parzen, E. (1962) “On estimation of a probability density function and mode” in Annals of
      Mathematical Statistics, 33, 1065-1076.

[185] Pfanzagl, J. (1990): Estimation in Semiparametric Models: Some Recent Developments, Lec-
      ture Notes in Statistics, Vol. 63, New York and Heidelberg: Springer Verlag.

[186] Pfanzagl, J. and W. Wefelmeyer (1978): “A third order optimal property of the maximum
      likelihood estimator,” Journal of Multivariate Analysis, 8, 1–29. addendum: 9, 179–182.

[187] Phillips, P. C. B. (1977): “A general theorem in the theory of asymptotic expansions as
      approximations to the finite sample distributions of econometric estimators,” Econometrica,
      45, 1517–1534.

[188] Pollard, David (1984): Convergence of Stochastic Processes, Springer-Verlag, New York.

[189] Pollard, David (1990): Empirical Processes: Theory and Applications. CBMS Conference
      Series in Probability and Statistics, Vol. 2. Hayward, CA: Institute of Mathematical Statistics.

[190] Powell, James (1984): “Least Absolute Deviations Estimator for the Censored Regression
      Model” in Journal of Econometrics, Vol. 25 (3), p. 303-25.

[191] Powell, James (1986): “Symmetrically trimmed least squares estimation for Tobit Models”
      in Econometrica, V54, p.1435(26).

[192] Powell, James (1987): “Semiparametric Estimation of Bivariate Latent Variable Models,”
      SSRI, University of Wisconsin–Madison, Working Paper No. 8704.



                                                 93
[193] Powell, James (1994): “Estimation of Semiparametric Models.” Handbook of Econometrics,
      Volume 4. eds. R.F. Engle and D.L. McFadden, 2443-2521.

[194] Powell, J. Stock and Thomas Stoker (1989): “Semiparametric Estimation of Index Coeffi-
      cients,” Econometrica, 57, 6, 1403-1430.

[195] Powell, James and Thomas Stoker (1996): “Optimal bandwidth choice for density weighted
      averages,” Journal of Econometrics, 75, 291–316.

[196] Prakasa-Rao (1983): Nonparametric Functional Estimation, (Orlando: Academic Press).

[197] Prakasa-Rao (1984):

[198] Robinson, Peter M. (1988): “Root-N Consistent Nonparametric Regression.” Econometrica,
      56, 931-954.

[199] Robinson, Peter M. (1991): “Automatic Frequency Domain Inference on Semiparametric and
      Nonparametric Models,” Econometrica, 59, 1329–1363.

[200] Rosenblatt, M. (1955) “Remarks on some Nonparametric Estimators of a Density Function”
      in Nonparametric Estimates, 832-837.

[201] Rosenzweig, Mark and Wolpin, Kenneth I. (2000): “Natural Natural Experiments” in Journal
      of Economic Literature.

[202] Rothenberg, Theodore J. (1984): “Approximating the distributions of econometric estimators
      and test statistics,” Chapter 15 in Handbook of Econometrics Vol 2, editors Z. Griliches and
      M. D. Intriligator, North-Holland, New York.

[203] Rudemo (1982): “Empirical choice of histograms and kernel density estimators” in Scandi-
      navian Journal of Statistics, 9, 65-78.

[204] Sain, S.R. and Scott, D.W. (1996): “On Locally Adaptive Density Estimation,” JASA, 91,
      1525-1534.

[205] Sargan, J. D. (1976): “Econometric estimators and the Edgeworth Approximation,” Econo-
      metrica, 44, 421–448; erratum, 45, 272.

[206] Sargan, J. D. and W. M. Mikhail (1971): “A general approximation to the distribution of
      instrumental variables estimates,” Econometrica, 39, 131–169.

[207] Schmalensee, R. and Stoker, Thomas (1999): “Household Gasoline Demand in the United
      States,” in Econometrica, Volume 67(3), p. 645-62.

[208] Schoenberg (1964):

[209] Schuster, E. F. (1972): “Joint asymptotic distribution of the estimated regression function
      at a finite number of distinct points” in Annals of Mathematical Statistics, 43, 84-88.


                                               94
[210] Scott, D. W. (1992): Multivariate Density Estimation: Theory, practice and visualization.
      Wiley and Sons.

[211] Scott, D.W. and Terrell, G. R.(1987): “Biased and Unbiased Cross-Validation in Density
      Estimation” in JASA, 82, 1131-1146.

[212] Seifert, B., M. Brockmann, J. Engel, T. Gasser (1994): “Fast algorithms for nonparametric
      curve estimation,” Journal of Computational and Graphical Statistics, 3:192-213.

[213] Serfling, R.J. (1980): Approximation Theorems of Mathematical Statistics (New York: John
      Wiley and Sons).

[214] Severini, T. A. and W. H. Wong (1987): “Convergence Rates of Maximum Likelihood and
      Related Estimates in General Parameter Spaces,” technical working paper, Department of
      Statistics, University of Chicago.

[215] Shao J. (1991): “Consistency of jackknife variance estimators,” Statistics, 22, 49–57.

[216] Shao J. and C. F. J. Wu (1989): “General theory for jackknife variance estimation,” Annals
      of Statistics, 17, 1176–1197.

[217] Sherman, (1994a): “Maximal Inequalities for Degenerate U-Processes with Application to
      Optimization Estimators,” Annals of Statistics, 22, 439–459.

[218] Sherman, R. (1994b): “U-Processes in the analysis of a generalized semiparametric regression
      estimator,” Econometric Theory, 10, 372–395.

[219] Shiller, R.J. (1984): “Smoothness Priors and Nonlinear Regression,”Journal of the American
      Statistical Association, 72, 420-423.

[220] Schoenberg (1964):

[221] Silverman, B. W. (1980): “Density estimation for univariate and bivariate data,” in V. Bar-
      nett, ed., Interpreting Multivariate Data, John Wiley and Sons, 37-53.

[222] Silverman, B. W. (1981):

[223] Silverman, B.W. (1982): “Kernel density estimation using the fast Fourier Transform
      Method,” Applied Statistics, 31, 93–99.

[224] Silverman, B.W. (1982): “On the estimation of a probability density function by the maxi-
      mum penalized likelihood method” in Annals of Statistics, 10, 795-810.

[225] Silverman, B. W. (1983): “Some aspects of the spline smoothing approach to nonparametric
      regression curve fitting (with discussion),” Journal of the Royal Statistical Society, Series B,
      47, 1-52.

[226] Silverman, B. W. (1984):


                                                 95
[227] Silverman, B. W. (1985):

[228] Silverman, B. W. (1986) Density Estimation for Statistics and Data Analysis (London: Chap-
      man and Hall).

[229] Smith, Jeffrey and Todd, Petra (2000): ‘Reconciling Conflicting Evidence on the Perfor-
      mance of Propensity Score Matching Estimators’ in American Economic Review, Papers and
      Proceedings, May.

[230] Smith, Jeffrey and Todd, Petra (2003): ‘Does Matching Address Lalonde’s Critique of Non-
      experimental Estimators?’ forthcoming in Journal of Econometrics.

[231] Smith, J. and F. Welch (1989): “Black Economic Progress After Myrdal.” Journal of Eco-
      nomic Literature, 27, 519-64.

[232] Srinivasan, T. N. (1970): “Approximations to finite sample moments of estimators whose
      exact sampling distribution are unknown,” Econometrica, 38, 533–541.

[233] Stern, Steven (1996): “Semiparametric estimates of the supply and demand effects of disabil-
      ity on labor force participation” in Journal of Econometrics, 71, 49-70.

[234] Stock, James (1985): “Equivalence of Direct, Indirect, and Slope Estimators of Average
      Derivatives” in Non-parametric and Semiparametric Methods in Economics and statistics,
      ed. by W.A. Barnett, J. Powell and G. Tauchen. Cambridge:Cambridge University Press.

[235] Stock, James (1991): “Nonparametric Policy Analysis: An application to estimating haz-
      ardous waste cleanup benefits” in Nonparametric and Semiparametric Methods in Economics
      and Statistics, ed. by W.A. Barnett, J. Powell, and G. Tauchen (Cambridge, England: Cam-
      bridge University Press) 77–98.

[236] Stoker, Thomas (1986): “Consistent Estimation of Scaled Coefficients,” Econometrica, 54,
      1461–1481.

[237] Stoker, Thomas (1991): “Equivalence of Direct, Indirect, and Slope Estimators of Average
      Derivatives” in Nonparametric and Semiparametric Methods in Economics and Statistics, ed.
      by W.A. Barnett, J. Powell, and G. Tauchen (Cambridge, England: Cambridge University
      Press), p. 99-118.

[238] Stoker, Thomas (1996): “Smoothing bias in the measurement of marginal effects,” Journal
      of Econometrics, 72:49-84.

[239] Stone, Chales (1974): “Cross-validatory choice and assessment of statistical predictions (with
      discussion)” in Journal of the Royal Statistical Society, Series B, 36, 111-47.

[240] Stone, Charles (1977): “Consistent nonparametric regression (with discussion)” in Annals of
      Statistics, 5, 595-645.



                                                96
[241] Stone, Charles (1980): “Optimal rates of convergence for nonparametric estimators” in Annals
      of Statistics, 8, 1348-1360.

[242] Stone, Charles (1982):“Optimal rates of convergence for nonparametric regression” in Annals
      of Statistics, 10, 1040-1053.

[243] Stone, Charles (1984) “An Asymptotically Optimal Window Selection Rule for Kernel Density
      Estimates” in Annals of Statistics, 12, 1285-1297.

[244] Stone et. al. (1987)

[245] Sueyoshi, Glenn T. (1992): “Semiparametric proportional hazards estimation of competing
      risks models with time-varying covariates”

[246] Susarla, V. and Walter, G. (1981):Estimation of Multivariate Density Function Using Delta-
      Sequences, Ann. Stat. (1981) 9, 347-355.

[247] Tauchen, George (1985): “Diagnostic testing and evaluation of maximum likelihood models
      (STMA V27 3096)” in Journal of Econometrics, 30, 415-443.

[248] Taylor, Charles (1989): “Bootstrap choice of the smoothing parameter in kernel density
      estimation” in Biometrika, 76, 705-712.

[249] Terrell, G.R. and Scott, D.W. (1992): “Variable Kernel Density Estimation,” The Annals of
      Statistics, 20, 1236-1265.

[250] Tibshirani, R.and Hastie, T. (1987) “Local Likelihood Estimation” in Journal of the American
      Statistics Association” Vol. 82, 559.

[251] Todd, Petra (1996): Three Essays on Empirical Methods for Evaluating the Impact of Policy
      Interventions in Education and Training, Ph.D. Dissertation, University of Chicago.

[252] Turlach, B.A. and M.P. Wand (1995): “Fast Computation of Auxilliary Quantities in Local
      Polynomial Regression,” Journal of Computational and Graphical Statistics, 5(4).

[253] Ullah, Aman and Vinod, H. D. (1993)

[254] Wand, M. P. (1994): “Fast computation of multivariate kernel estimators,” J. Comp. Graph.
      Statist., 3, 433–445.

[255] Wahba, Grace (1984): “Partial Spline Models for the Semi-Parametric Estimation of Func-
      tions of Several Variables,” in Statistical Analysis of Time Series, ed. by R.A. Bradley, J.S.
      Hunter, D.G. Kendall and G.S. Watson. Tokyo: Institute of Statistical Mathematics.

[256] Watson, G. S. (1964): “Smooth regression analysis” in Sankhya Series A, 26, 357-372.

[257] White, Halbert (1980): “Using least squares to approximate unknown regression functions,”
      International Economic Review, 21, 149–170.


                                                97
[258] Willis, R. (1986): “Wage determinants: a survey and reinterpretation of human capital
      earnings functions” in Handbook of Labor Economics, eds. Orley Ashenfelter and Richard
      Layard.

[259] Wooldridge, Jeffrey (1992): “A Test for Functional Form Against Nonparametric Alterna-
      tives,” Econometric Theory, 8, 452–475.Cao, R., Cuevas, A. and Gonzalez-Mantiega, W.
      (1994) “A Comparative Study of Several Smoothing Methods in Density Estimation” Com-
      putational Statistics and Data Analysis, 17, 153-176.

[260] Wu, De-Min (1974): “Alternative tests of independence between stochastic regressors and
      disturbances: Finite sample results” in Econometrica, 42, 529-546.

[261] Yatchew, Adonis (1998): “Nonparametric Regression Techniques in Economics” in Journal
      of Economic Literature, Vol. 26(2), p. 669-721.

[262] Yu, Keming and M. C. Jones (1998): “Local Linear Quantile Regression” in Journal of the
      American Statistical Association, Vol. 93, No. 441, p. 228(10).




                                             98
                                                      Figure 2.1: 1960 Census, Experience-Earnings Profile, White Males
                                         9




                                                                                                             16



                                                                                                                  13-15

                                                                                                                      12
                                                                                                                           9-11
                                                                                                                                  8
                                         8
mean log annual wage and salary income




                                                                                                                                      5-7
                                         7




                                                                                                                                            0-4
                                         6
                                         5




                                             0   10               20                 30                 40                    50                  60



                                                                                  experience
              Figure 4.1: Orthonormal Legendre series expansion estimator evaluated at x=0
 20


 10                                              m=48
                                                  m=24
                                                    m=12
  0


−10


−20


−30


−40


−50


−60


−70


−80
  −1   −0.8   −0.6     −0.4      −0.2        0        0.2       0.4      0.6       0.8       1
                                             s
                                          Figure 6.1: Comparison of Density of Data and of Simulated Density


                                                                         Density Estimated from Earnings Data, bw=300

                                                         .
                                                       ....
                                                     ........
                                                     ......
                                0.00012



                                                       ..
                                                   .......
estimated density with bw=300




                                                   .. ...
                                                    ..
                                                .. ...
                                                .... ....
                                               .. ...
                                0.00008




                                                              ..
                                                               ..
                                                                ...
                                                                  ..
                                                                   ....
                                                                      ..
                                                                       ...
                                                                         .... .
                                                                           ...
                                                                                ....
                                0.00004




                                                                                   ...
                                                                                     ...... ............................
                                                                                          ... . . .. .....
                                                                                                                        ... . .. ...................
                                                                                                                                         .. .. .................. .
                                                                                                                                                          . . ............ . ..
                                                                                                                                                                          ..... .......... .
                                                                                                                                                                                         ............
                                                                                                                                                                                                    .................... .
                                                                                                                                                                                                                       .......................... .
                                                                                                                                                                                                                                                ....................................... ........ ....... ...... .. .. . .. . . . .. .
                                0.0




                                               0                                             10000                                                  20000                                                   30000                                                  40000                                                  50000



                                                                                                                                                                            earnings




                                                Density Estimated from Simulated Earnings Data, bw=300


                                                ..
                                                .....
                                0.00012




                                               ....
                                               . ..
                                               . ..
                                               .. ..
simulated mixture density




                                                      ...
                                                        ...
                                               . ...
                                0.00008




                                                           ...
                                                             ..
                                                              ...
                                                                ..
                                               .                  ...
                                                                    ...
                                                                      ...
                                                                        ...
                                                                          ....
                                0.00004




                                                                             ..... .........
                                                                                  ........ ..
                                                                                             ...
                                                                                               ...
                                                                                                  .........
                                                                                                           ................
                                                                                                                          ........................
                                                                                                                                                  ..... ..........................
                                                                                                                                                                                   .......... ..... . ... ....... .. .. ................ ..........
                                                                                                                                                                                                                                                   . ...................                                    ..... ...... .....
                                0.0




                                               0                                             10000                                                  20000                                                   30000                                                  40000                                                  50000



                                                                                                                                                                            earnings
                                              Figure 6.2: Density of Estimates Generated by Different Bandwidth Selectors

                                                                                                                                 Density of Estimates at First Quantile
300000




                                                                                                                                                                                                                                                                                            .               cross-val.
                                                                                                                                                                                                                                                                                            •               rule-of-thumb
                                                                                                                                                                                                                                                                                            +               Sheather-Jones plug-in


                                                         •••
                                                         ••
                                                       ••••
                                                  •••••• •••••••••
                                               ••••              •••
100000




                                             ••                    •••
                                           •••                       ••••
                                           •
                                       ••••
                                        •                               ••••
                                                                            ••••
                                    •••
                                      •                                        ••••
                                   ••                                                                                                                            .+.+.+.+.+.+.+.+.++.+
                                                                                                                                                                      .+               .+
                                                                                                                                                                                       +     .++
                                                                                                                                                                                         ..+.+
                                                                                                                                                                                        .+
                                                                                                                                                                                     .+++       .+
                                                                                                                                                                                               .+           .++
                                                                                                                                                                                                   .+.+..++.+
                                                                                                                                                                                                 ..+          ..+.+..+.+.++
                                                                                                                                                                                                             .+           ..+.+.++
                                                                                                                                                                                                                                 .+.+.++
                                                                                                                                                                                                                                  .+   .+.+.++
                                                                                                                                                                                                                                        ..+  ..+.+
                                                                                                                                                                                                                                                 .++
                                                                                                                                                                                                                                                   .++
                                                                                                                                                                                                                                                     ..+
                                                                                                                                                                                                                                                       ..+.++
                               •
                               ••••                                                •••
                                                                                      •.•.•....... +               .+...+..
                                                                                                                .+++         .+.+
                                                                                                                         ++.++   .+
                                                                                                                                .+         ...+.+.+.+
                                                                                                                                   ..++.+.++
                                                                                                                                  .+      .+
                                                                                                                                          +           .++
                                                                                                                                                     .+
                                                                                                                                                    .+      .+.+
                                                                                                                                                        ..+.+   .+
                                                                                                                                                               .+                                                                                           ..+
                                                                                                                                                                                                                                                              .+
                                                                                                                                                                                                                                                               ..+
                                                                                                                                                                                                                                                                 .+
                                                                                                                                                                                                                                                                  ..+
                                                                                                                                                                                                                                                                    .+.+.+.+.+.+.++.++
                                                                                                                                                                                                                                                                                     .+.+.+.+.+.++
                                                                                                                                                                                                                                                                                                 .+
                                                                                                                                                                                                                                                                                                  ..+++.++
                                                                                                                                                                                                                                                                                                         ..++.+++
                          •
                          ••••
                             •                                                . ... ..          +++.
                                                                                                   ++.
                                                                                                     .
                                                                                                     ++.
                                                                                                       +.
                                                                                                        +.+
                                                                                                         +..+.+.+                                                                                                                                                                                               ..+
                                                                                                                                                                                                                                                                                                                  ..++
                                                                                                                                                                                                                                                                                                                     .+
                                                                                                                                                                                                                                                                                                                      ..+
                                                                                                                                                                                                                                                                                                                        .++
                                                                                                                                                                                                                                                                                                                          .+.+
                                                                                                                                                                                                                                                                                                                             .+
                                                                                                                                                                                                                                                                                                                              .+
                                                                                                                                                                                                                                                                                                                               .+
                                                                                                                                                                                                                                                                                                                                .++
                                                                                                                                                                                                                                                                                                                                  ..+.+.+.+
                                                                                                                                                                                                                                                                                                                                          .+
                                                                                                                                                                                                                                                                                                                                           .+.+..+.+++
           •            •• + . . .. . .. . . +..+ +.++... . ++++++++++                       •+
                                                                                              ••• ••• •                                                                                                                                                                                                                                              .+.++..+
                                                                                                                                                                                                                                                                                                                                                            ..+.+. +.++. . .+
                                                                                                                                                                                                                                                                                                                                                                            . .+ ..++
                                                                                                                                                                                                                                                                                                                                                                                    . .. .+
                                                                                                                                                                                                                                                                                                                                                                                          . .. . +
                                                                                                                                                                                                                                                                                                                                                                                                 .   .
0




           0.00004                                                          0.00005                                                                  0.00006                                                                  0.00007                                                                  0.00008                                                                 0.00009

                                                                                                                                                                                            f-hat(x)

                                                                                                                           Density of Estimates at Second Quantile

                                                                                                                                                                                                                               •••
                                                                                                                                                                                                                            ••• ••••
                                                                                                                                                                                                                         ••• ••••
                                                                                                                                                                                                                         • ••
                                                                                                                                                                                                                       ••• •••••
                                                                                                                                                                                                                    ••••
300000




                                                                                                                                                                                                                                       •••
                                                                                                                                                                                                                    •                    ••
                                                                                                                                                                                                                  •••                     ••
                                                                                                                                                                                                                 ••                        •
                                                                                                                                                                                                                 •                         ••
                                                                                                                                                                                                              ••••                          ••
                                                                                                                                                                                                             ••                              ••
                                                                                                                                                                                                            ••                                ••
                                                                                                                                                                                                           ••                                  ••
               .       cross-val.                                                                                                                                                                          •                                    ••
                                                                                                                                                                                                          ••                                     ••
               •       rule-of-thumb                                                                                                                                                                      •                                       ••
                                                                                                                                                                                                        •••                                        •
100000




               +       Sheather-Jones plug-in
                                                                                                                                                                                                      •••                                          ••
                                                                                                                                                                                                                                                     ••
                                                                                                                                             .+.+
                                                                                                                                              .++.+
                                                                                                                                                .+  .++
                                                                                                                                                  ..+ .++
                                                                                                                                                       .+.++
                                                                                                                                                        .+                                           •                                                ••
                                                                                                            .
                                                                                                            +.
                                                                                                             +
                                                                                                             ++
                                                                                                              +
                                                                                                              .+
                                                                                                               .
                                                                                                               .+.+
                                                                                                                  .+.+
                                                                                                                     .+
                                                                                                                      +
                                                                                                                      ..
                                                                                                                       .+
                                                                                                                        .+++
                                                                                                                         + .
                                                                                                                           .+++
                                                                                                                              .    .++++.+.+++
                                                                                                                               +.+.+
                                                                                                                                   +
                                                                                                                                   ..                      ...+.+.+.+
                                                                                                                                                                    .+.+..+.+
                                                                                                                                                                     .+     .++
                                                                                                                                                                              .+.+.+.+.++
                                                                                                                                                                                        +
                                                                                                                                                                                        ..+
                                                                                                                                                                                          .
                                                                                                                                                                                          . +
                                                                                                                                                                                            .+
                                                                                                                                                                                             .+
                                                                                                                                                                                              ..+
                                                                                                                                                                                                +
                                                                                                                                                                                                .++
                                                                                                                                                                                                  .+
                                                                                                                                                                                                   .++
                                                                                                                                                                                                     .+
                                                                                                                                                                                                      . + +
                                                                                                                                                                                                          +
                                                                                                                                                                                                          .+
                                                                                                                                                                                                           ..+.  +
                                                                                                                                                                                                                 .
                                                                                                                                                                                                                 .+
                                                                                                                                                                                                                  +   +   +
                                                                                                                                                                                                                                                        ••
                                                                                        .
                                                                                        .....
                                                                                            ...
                                                                                              .
                                                                                              ++..
                                                                                                 +.
                                                                                                  .
                                                                                                  ++.
                                                                                                    +.
                                                                                                     +.
                                                                                                      ..
                                                                                                       +.
                                                                                                        .
                                                                                                        +
                                                                                                        ++.
                                                                                                          +.
                                                                                                           +                                                                                       •
                                                                                                                                                                                                   •               ..  . . +
                                                                                                                                                                                                                           . +
                                                                                                                                                                                                                             .+
                                                                                                                                                                                                                              +
                                                                                                                                                                                                                              ..+
                                                                                                                                                                                                                                .+
                                                                                                                                                                                                                                 +
                                                                                                                                                                                                                                 .+
                                                                                                                                                                                                                                  . +
                                                                                                                                                                                                                                    +
                                                                                                                                                                                                                                    .+
                                                                                                                                                                                                                                     .++
                                                                                                                                                                                                                                       .++
                                                                                                                                                                                                                                         . .++
                                                                                                                                                                                                                                             ..  .
                                                                                                                                                                                                                                                 +.
                                                                                                                                                                                                                                                  +.
                                                                                                                                                                                                                                                   .
                                                                                                                                                                                                                                                   ++.
                                                                                                                                                                                                                                                     ++  .+•.+
                                                                                                                                                                                                                                                       ..+   .+
                                                                                                                                                                                                                                                              ..++
                                                                                    . .      ++                                                                                                                                                                  .. .+
                                                       .+
                                                  .+...+.++          ... .....
                                                          .+.+.+..+..+++++++++
                                                                              .....
                                                                                  +.+ ++ +++
                                                                                                                                                                                                ••
                                                                                                                                                                                                  •
                                                                                                                                                                                                  •                                                           ••++.+.+++.+.++
                                                                                                                                                                                                                                                                         .+ ..+.++
                                                                                                                                                                                                                                                                                 .+
                                                                                                                                                                                                                                                                                  ..+.+.+.++
                                                                                                                                                                                                                                                                                           ...+.......... ... .... . ...
                                                                                                                                                                                                                                                                                                 +++++++ ++ +            ..+. .... . . ..
           . .               .    .. ++ ... .++ . +                                                                                                                         •               ••                                                                       • •                                                     +       + +                                                             .
0




     0.00001                                                                        0.00002                                                                                                 0.00003                                                                                                 0.00004                                                                                              0.00005
                                                                                                                                                                                            f-hat(x)

                                                                                                                               Density of Estimates at Third Quantile

                                                                                                                                                                               ••••
                                                                                                                                                                         ••••• •••
                                                                                                                                                                    •• •• •••
                                                                                                                                                                    •                   ••
                                                                                                                                                                 •••                     ••
                                                                                                                                                                                          ••
300000




                                                                                                                                                            •••••                          •••
                                                                                                                                                           ••                                •
                   .                                                                                                                                      •                                   ••
                             cross-val.                                                                                                                 •••                                    ••
                                                                                                                                                                                                ••
                   •         rule-of-thumb                                                                                                           ••••                                        ••
                   +         Sheather-Jones plug-in                                                                                                 •
                                                                                                                                                    •                                             ••
                                                                                                                                                   ••                                              •
                                                                                                                                                   •                                                ••
                                                                                                                                                 ••                                                   ••
                                                                                                                                                 •                                                     ••
                                                                                                                                                                                                        ••
                                                                                                                                               •••                                                        ••
                                                                                                                                                                                                           ••
                                                                                                                                              ••
100000




                                                                                                                                            •••                                                              ••
                                                                                                        ..+
                                                                                                          +                       .+
                                                                                                                      ..+.+.+.+.+.+
                                                                                                                     .+
                                                                                                              ..++.+.+
                                                                                                             .+
                                                                                                            ++
                                                                                                            ..
                                                                                                           .+                       ..+•.+
                                                                                                                                   .+       •
                                                                                                                                         ••.++++.
                                                                                                                                              ..  .+.
                                                                                                                                                 .+ ..+++.+
                                                                                                                                                   ++      .+
                                                                                                                                                            .+  .+
                                                                                                                                                               .+    ..++
                                                                                                                                                                        .+
                                                                                                                                                                    .+
                                                                                                                                                                 .+.+    ..+.+.+
                                                                                                                                                                               ++
                                                                                                                                                                               . +.. +
                                                                                                                                                                                    ++++++++++++++++++++++••+•+++++
                                                                                                 ..
                                                                                                  ..
                                                                                                   +.
                                                                                                    .
                                                                                                    +.
                                                                                                     +.
                                                                                                      +.
                                                                                                       .
                                                                                                       +++                                                                          ..
                                                                                                                                                                                     . .
                                                                                                                                                                                       . ... ..  ... . . .......•.•...+
                                                                                                                                                                                                                      ++++++++
                                                                                ..+++.++.+.+..+.+++
                                                                                       .+                                          ••                                                                              ••.........+.++
                                                                                                                                                                                                                                 .+
                                                                                                                                                                                                                                  .+
                                                                                                                                                                                                                                   ...++
                                                                                                                                                                                                                                       .+
                                                                    .
                                                                    . .
                                                                      .+.+
                                                                        .
                                                                        +
                                                                        + .+..+++                                                •                                                                                                      .++..+.+.+
                                                                                                                                                                                                                                                 ..++..++... ......
                                                          .....
                                                              ..
                                                               +.
                                                                + .
                                                                  +
                                                                  +.
                                                                   + ++                                                         •                                                                                     •                                   ++++++++ ......... .....
                                            . . ......
                                                     ++..
                                                        +.
                                                         + ++++                                                            • •                                                                                         • •                                           ++++++++ ....... . . ..
                                 . . . . ..
                                          ..    ++  +                                                                 • •                                                                                                                                                       +++++ ++ +. .. . . .. . .. ....
           .         .+ . .. . +        + +++                                                                    •                                                                                                           • •                                                             + +++ + + ++ .                                                            .         .                   .
0




                                 5*10^-6                                                                          10^-5                                                                  1.5*10^-5                                                                       2*10^-5                                                                    2.5*10^-5
                                                                                                                                                                                            f-hat(x)
                                                                                                                                        Figure 6.3(a): Comparison of Estimated Density Curves Under Alternative Bandwidth Selectors




                                            True Density (mixture of truncated log normal and normal)                                                                                                                                                                                                                                                                                                                                  LSCV bandwidth
                         0.00015




                                                                                                                                                                                                                                                                                                                                           0.00015
                                      .
                                     ......
                                   .......                                                                                                                                                                                                                                                                                                                 ...
                                                                                                                                                                                                                                                                                                                                                          ...




                                                                                                                                                                                                                                                                                                                  estimated density f(x)
                                    .. ...                                                                                                                                                                                                                                                                                                              .....
                                            ...                                                                                                                                                                                                                                                                                                              .
                                                                                                                                                                                                                                                                                                                                                       .. ......
                                     . ....                                                                                                                                                                                                                                                                                                          .. .... ....
true density




                                                ...                                                                                                                                                                                                                                                                                                   .. ...
                                                  ...                                                                                                                                                                                                                                                                                                . ... .......
                                                    ...                                                                                                                                                                                                                                                                                                           ... .. ..
                                   .                  ...
                         0.00005




                                                                                                                                                                                                                                                                                                                                           0.00005
                                                        ....                                                                                                                                                                                                                                                                                                        ... ......
                                                           .....                                                                                                                                                                                                                                                                                                     ... . .. .. .
                                                               .......                                                                                                                                                                                                                                                                                                        ..... .........
                                                                     .........................                                                                                                                                                                                                                                                                                 .. . ....
                                                                                              .....                                                                                                                                                                                                                                                                                           .... .....
                                                                                                  ..........                                                                                                                                                                                                                                                                                     .. .. .. ... .. ....... .. . .
                                                                                                            .......................                                                                                                                                                                                                                                                                .. .. .... .... .... .. ......... ..... ... ...
                                                                                                                                   ............................................                                                                                                                                                                                                                                . . . .. ........ ..... .. ... .. . ..... ... .... ... .. ..... .....
                                                                                                                                                                               .......................... ...... ....... ......... ..... ................. ...... ..... ......
                                                                                                                                                                                                                                                                              .................... ...... .....                                                                                                                           . . . . .. .... .... . . . .. . . .... ............... ...... ... ................ ........ ...... ..
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              .      ..         . ..                        .         . ...
                         0.0




                                                                                                                                                                                                                                                                                                                                           0.0
                                   0                                            10000                                                20000                                                30000                                                 40000                                                50000                                           0                                     10000                                        20000                                        30000                                       40000                                        50000




                                                                                                                                                                       x                                                                                                                                                                                                                                                                                            x




                                                                                                                 Rule-of-Thumb bandwidth                                                                                                                                                                                                                                                                                   Sheather-Jones plug-in
                         0.00015




                                                                                                                                                                                                                                                                                                                                           0.00015
estimated density f(x)




                                                                                                                                                                                                                                                                                                                  estimated density f(x)



                                                                                                                                                                                                                                                                                                                                                         ......
                                                                                                                                                                                                                                                                                                                                                        .. ...
                                                                                                                                                                                                                                                                                                                                                        . ...
                                                                                                                                                                                                                                                                                                                                                      ... ....
                                                                                                                                                                                                                                                                                                                                                     .. ...............
                         0.00005




                                                                                                                                                                                                                                                                                                                                           0.00005


                                                                                                                                                                                                                                                                                                                                                                      ..
                                                                                                                                                                                                                                                                                                                                                                       ...
                                                                                                                                                                                                                                                                                                                                                                         ..............
                                            ..............................................                                                                                                                                                                                                                                                                                            ....
                                   ..........                                            ...........                                                                                                                                                                                                                                                                                     ....
                                                                                                                                                                                                                                                                                                                                                                                             .... ........
                                                                                                   ..............
                                                                                                                 ........................                                                                                                                                                                                                                                                       ..... ....................
                                                                                                                                         .............................................                                                                                                                                                                                                                                    ................................... .............
                                                                                                                                                                                      .................... ...... ....... ......... ..... ................. ...... ..... ....................
                                                                                                                                                                                                                                                                                            ...... ...... .....                                                                                                                                              ... . . ......................... ..... ..... . ......... ............... ..... ... ......................... ......
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ..              . . ..                                      .....
                         0.0




                                                                                                                                                                                                                                                                                                                                           0.0




                                   0                                            10000                                                20000                                                30000                                                 40000                                                50000                                           0                                     10000                                        20000                                        30000                                       40000                                        50000




                                                                                                                                                                       x                                                                                                                                                                                                                                                                                            x
                                                                                                                                         Figure 6.3(b): Comparison of Estimated Density Curves Under Alternative Bandwidth Selectors




                                            True Density (mixture of truncated log normal and normal)                                                                                                                                                                                                                                                                                                                              LSCV bandwidth
                         0.00015




                                                                                                                                                                                                                                                                                                                                     0.00015
                                      .                                                                                                                                                                                                                                                                                                               ...
                                   .......                                                                                                                                                                                                                                                                                                           .....
                                         .                                                                                                                                                                                                                                                                                                          .. ..
                                   . ....                                                                                                                                                                                                                                                                                                          .. ...




                                                                                                                                                                                                                                                                                                            estimated density f(x)
                                   . ...                                                                                                                                                                                                                                                                                                                   .
                                           .                                                                                                                                                                                                                                                                                                      .. ...
                                   . .....                                                                                                                                                                                                                                                                                                      ... .....
true density




                                             ...                                                                                                                                                                                                                                                                                                 .. ..
                                               ...                                                                                                                                                                                                                                                                                              . ...
                                                 ...                                                                                                                                                                                                                                                                                           .. ... ......
                                   .               ...                                                                                                                                                                                                                                                                                                       ... ... ..
                         0.00005




                                                                                                                                                                                                                                                                                                                                     0.00005
                                                     ....                                                                                                                                                                                                                                                                                                     ...... .. .
                                                        .....                                                                                                                                                                                                                                                                                                    .. ......
                                                            ......                                                                                                                                                                                                                                                                                                     ... ..... .......
                                                                 .........................                                                                                                                                                                                                                                                                                     ... ....... ...
                                                                                          ....                                                                                                                                                                                                                                                                                   ..
                                                                                             .......
                                                                                                   ....................                                                                                                                                                                                                                                                                      .. ..... ......... .......
                                                                                                                                                                                                                                                                                                                                                                                               .... .... . . . .. .... .. ...
                                                                                                                       .....................................
                                                                                                                                                           ....... ........................... ................. .............. .........                                                                                                                                                                             .......... .. .. .. ... ........ ......... ............................ . ....              ...                                         ... .
                                                                                                                                                                                                                                          ...... ................. . ............ ... ..           .. ...                                                                                                                 .              ..           . ..                                   . ......... .. ...... .... ...... ......... . ................ . . ....... ... .. .. ...
                         0.0




                                                                                                                                                                                                                                                                                                                                     0.0
                                   0                                            10000                                                20000                                                 30000                                                40000                                              50000                                       0                                      10000                                        20000                                         30000                                         40000                                         50000




                                                                                                                                                                       x                                                                                                                                                                                                                                                                                         x




                                                                                                                 Rule-of-Thumb bandwidth                                                                                                                                                                                                                                                                               Sheather-Jones plug-in
                         0.00015




                                                                                                                                                                                                                                                                                                                                     0.00015
                                                                                                                                                                                                                                                                                                                                                        .....
                                                                                                                                                                                                                                                                                                                                                       .. ..
estimated density f(x)




                                                                                                                                                                                                                                                                                                            estimated density f(x)


                                                                                                                                                                                                                                                                                                                                                      .. ...
                                                                                                                                                                                                                                                                                                                                                   .... ....
                                                                                                                                                                                                                                                                                                                                                              .
                                                                                                                                                                                                                                                                                                                                                  .. ..
                                                                                                                                                                                                                                                                                                                                                ... ....
                                                                                                                                                                                                                                                                                                                                                . .
                                                                                                                                                                                                                                                                                                                                               .. .... ..
                                                                                                                                                                                                                                                                                                                                                                .. ....
                         0.00005




                                                                                                                                                                                                                                                                                                                                     0.00005


                                                                                                                                                                                                                                                                                                                                                                 ...... .
                                                                                                                                                                                                                                                                                                                                                                        ......
                                            ...........................................                                                                                                                                                                                                                                                                                      ... .....
                                   ..........                                         ........                                                                                                                                                                                                                                                                                  ............. ...
                                                                                              ...........                                                                                                                                                                                                                                                                                       .. .... ...... ....
                                                                                                        ................                                                                                                                                                                                                                                                                          .... .... ..... ..
                                                                                                                         .................................                                                                                                                                                                                                                                                          .. .................. ............ ........ ......................
                                                                                                                                                          ............... ........................... .................                                                                                                                                                                                              ......              ....        .. ...                           .... ............... ............. ..... ....... ............... ............ ...
                                                                                                                                                                                                                        .............. ......... ...... ................. . ............ ...   .. .. ...                                                                                                                                                                                                  .                   .. .. .                 ..                .. .. ...
                         0.0




                                                                                                                                                                                                                                                                                                                                     0.0




                                   0                                            10000                                                20000                                                 30000                                                40000                                              50000                                       0                                      10000                                        20000                                         30000                                         40000                                         50000




                                                                                                                                                                       x                                                                                                                                                                                                                                                                                         x
                                                            Figure 6.4: Cross-validation Objective Function
                            -3*10^-5

                                         .
cross-validation function




                                                                                                                                                                                                                                                           ...
                                         .                                                                                                                                                                                                        ........
                                                                                                                                                                                                                                 .................
                                                                                                                                                                                                                         ........
                                                                                                                                                                                                                .........
                                         .                                                                                                                                                      ................
                                                                                                                                                                                         .......
                                                                                                                                                                                 ........
                            -3.6*10^-5




                                         .
                                                                                                                                                                  ...............
                                                                                                                                                          ........
                                          .                                                                                                      ........
                                                                                                                                  ...... .......
                                           .                                                                                     .
                                                                                                                         ........
                                           .                                                                      .......
                                            .                                                         ............
                                             .                                                  ......
                                                                                         .......
                                             .                                    .......
                            -4*10^-5




                                              ..                           .......
                                               ..               . .........
                                                 ... ...........
                                                    ..


                                         0                                            2000                                                 4000                                                 6000                                                  8000



                                                                                                                                      bandwidth
                                                                                                        Figure 6.5(a): Comparison of Estimated Density Curves from Local Likelihood




                               True Density (mixture of truncated log normal and normal)                                                                                                                                                                                                                         Degree = 1, Bandwidth = 35%




                                                                                                                                                                                                                                           estimated density f(x)
                                    .......
                                     ....
                         0.00010




                                                                                                                                                                                                                                                                    0.00010
                                     . ...
true density




                                    . ....
                                            ...
                                              ....                                                                                                                                                                                                                                ...........
                                                 .....                                                                                                                                                                                                                           .. .........
                                                     ........ ......                                                                                                                                                                                                            ..            ....
                                                            ......... .....
                                                                          ............                                                                                                                                                                                        ...                ..........
                                                                                                                                                                                                                                                                                                          ..................
                                                                                     .........................................                                                                                                                                                                                             ......................................
                                                                                                                             ................. ..................................................... .. ... ............... ...... .....                                                                                                                        .......................... ...................................................... .. .......
                                                                                                                                                                                                                                                                                                                                                                                                                                                           ............ ...... .....
                         0.0




                                                                                                                                                                                                                                                                    0.0
                                    0                              10000                                  20000                                  30000                                 40000                                  50000                                           0                              10000                                   20000                                   30000                                   40000                                   50000




                                                                                                                                    x                                                                                                                                                                                                                                            x




                                                                      Degree = 0, Bandwidth = 35%                                                                                                                                                                                                                Degree = 2, Bandwidth = 35%
estimated density f(x)




                                                                                                                                                                                                                                           estimated density f(x)
                         0.00010




                                                                                                                                                                                                                                                                    0.00010
                                                                                                                                                                                                                                                                                    ........
                                         ....
                                       ... .....                                                                                                                                                                                                                                   .. ...
                                      .. .........                                                                                                                                                                                                                                .. .........
                                    ...          ....                                                                                                                                                                                                                         .....          ....
                                                                                                                                                                                                                                                                                                ...
                                                    .............                                                                                                                                                                                                                                 .................
                                                                ................                                                                                                                                                                                                                                  ....................
                                                                               ...........................................                                                                                                                                                                                                           ................................................
                                                                                                                         ................... ............................................ ......... .. ... ............... .                                                                                                                                                         ....... ...................................................... .. ................... ...... .....
                                                                                                                                                                                                                            ..... .....
                         0.0




                                                                                                                                                                                                                                                                    0.0
                                    0                              10000                                  20000                                  30000                                 40000                                  50000                                           0                              10000                                   20000                                   30000                                   40000                                   50000




                                                                                                                                    x                                                                                                                                                                                                                                            x
                                                                                                          Figure 6.5(b): Comparison of Estimated Density Curves from Local Likelihood




                               True Density (mixture of truncated log normal and normal)                                                                                                                                                                                                                                 Degree = 1, Bandwidth = 10%




                                                                                                                                                                                                                                                  estimated density f(x)
                                    .......                                                                                                                                                                                                                                               ...
                                     ....                                                                                                                                                                                                                                               ......
                         0.00010




                                                                                                                                                                                                                                                                           0.00010
                                     . ...                                                                                                                                                                                                                                            .......
true density




                                    . ....                                                                                                                                                                                                                                            . ...
                                                                                                                                                                                                                                                                                      ..
                                            ...
                                              ....                                                                                                                                                                                                                                   .. ...........
                                                 .....                                                                                                                                                                                                                                .           .........
                                                     ........ ......                                                                                                                                                                                                                 .                    ...
                                                            ......... .....                                                                                                                                                                                                                                 ....
                                                                          ............                                                                                                                                                                                                                         ...........................
                                                                                     .........................................                                                                                                                                                                                                           .......................................
                                                                                                                             ................. ..................................................... .. ... ............... ...... .....                                                                                                                                       ........................ ...................................................... .. .............
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ...... ...... .....
                         0.0




                                                                                                                                                                                                                                                                           0.0
                                    0                               10000                                   20000                                   30000                                    40000                                   50000                                           0                               10000                                   20000                                    30000                                   40000                                    50000




                                                                                                                                        x                                                                                                                                                                                                                                                x




                                                                       Degree = 0, Bandwidth = 10%                                                                                                                                                                                                                       Degree = 2, Bandwidth = 10%
                                                                                                                                                                                                                                                                                           .
                                                                                                                                                                                                                                                                                         ......
estimated density f(x)




                                                                                                                                                                                                                                                  estimated density f(x)
                                          ....                                                                                                                                                                                                                                             ...
                                         ....                                                                                                                                                                                                                                          .......
                         0.00010




                                                                                                                                                                                                                                                                           0.00010
                                        ....                                                                                                                                                                                                                                             ..
                                      ... .....                                                                                                                                                                                                                                       . ...
                                     .. ...                                                                                                                                                                                                                                           . ...... ...
                                    .. ...........                                                                                                                                                                                                                                    .. ........ .. ...
                                                 ........                                                                                                                                                                                                                                        ....... ..
                                                        ...                                                                                                                                                                                                                          ..                   ...
                                                          ..................                                                                                                                                                                                                                                ....................
                                                                           ..................                                                                                                                                                                                                                                  .................. ......... ........
                                                                                            ..........................................                                                                                                                                                                                                          .......... ...... ....................... .....................................................
                                                                                                                                      .............. ........... .......................................... .. ... ............... ...... .....                                                                                                                                                                                               . .. ................... ...... .....
                         0.0




                                                                                                                                                                                                                                                                           0.0
                                    0                               10000                                   20000                                   30000                                    40000                                   50000                                           0                               10000                                   20000                                    30000                                   40000                                    50000




                                                                                                                                        x                                                                                                                                                                                                                                                x
                      Figure 6.6(a): Density of Estimates Generated by Local Likelihood (35% bandwidth)

                                                                                                                                  Density of Estimates at First Quantile
                      500000
density of f-hat(x)

                      300000




                                                                                                     .                   local lik. deg=0
                                                                                                    •                    local lik. deg=1
                                                                                                    +                    local lik. deg=2
                      100000




                                                                                                                                                                                                                                                                                 .....•.•.•.•...•..
                                                                                                                                                                                                                                                                                              ••.•••.•.•.•.••..+
                                                                                                                                                                                                                                                                 •.•..•.•.••..•.•••••
                                                                                                                                                                                                                                                 ..•.•.•.•.•.••.•. •
                                                                                                                                                                                                                                                                                                               .•+      ++++
                                                                                                                                                                                                                                                                                                                   •.+++++
                                                                                                                                                                                                                                                                                                                 •.+      ++++++++
                                                                                                                                                                                                                                                                                        +++++++++++++.•.•.•.•.•.•.•.•..•.••.•.••....++++++++++++++
                                                                                                                                                                                                                      .. .
                                                                                                                                                                                                                         ..
                                                                                                                                                                                                                          •.
                                                                                                                                                                                                                           •
                                                                                                                                                                                                                           •.•..•..•..•.•.•.•.•.••+++++++++++++++++++++++
                                                                                                                                                                                                                            .
                                                                                                                                                                                                                            •
                                                                                                                                                                                                                            •                                                                                                   •••••.••....... ++++++
                                                                                                                                                                                                                     .
                                                                                                                                                                                                                    .••••• ++++++                +                                                                                       •••••.•... . .++++++++
                                                                                                                                                                                                   ....•..•.•••..••.+ +++++                                                                                                                      ••••••.. +.++++ +
                      0




                                                                               0.00002                                                                                0.00004                  0.00006                                                                                               0.00008

                                                                                                                                                                                f-hat(x)


                                                                                                                          Density of Estimates at Second Quantile
                      500000
density of f-hat(x)

                      300000




                                                                                                                                     ....
                                                                                                                                    ...
                                                                                                                                  .. ...
                                                                                                                          ••••••..••• ..
                                                                                                                      ••••.... •••• .....
                                                                                                                     •++
                                                                                                                     •+
                                                                                                                    •+   ++
                                                                                                                        ++  .++ ••• ...
                                                                                                                          ..+                                                              .   local lik. deg=0
                                                                                                                  +•+         ++ •• .
                                                                                                               ++•+
                                                                                                                  •• .... +++++++•••• ....
                      100000




                                                                                                              +
                                                                                                              +   •                                                                        •   local lik. deg=1
                                                                                                             + . +++••• ..
                                                                                                           +
                                                                                                           +++••••...                     +++••• ...                                       +
                                                                                                              •                                                                                local lik. deg=2
                                                                                                        ++++•• ..                           +++•• ..
                                                                                                                                               +++
                                                                                                                                                 ••+...
                                                                                                     ++++ •• ...
                                                                                                      +
                                                                                                      +                                            •+•+•+.++
                                                                                                    +
                                                                                                    +
                                                                                                    ++ ••• .                                             •.+•+
                                                                                                                                                             ..++++
                                                                                                   + • .
                      0




                                                                               0.00002                                                                                0.00004                  0.00006                                                                                               0.00008

                                                                                                                                                                                f-hat(x)


                                                                                                                                Density of Estimates at Third Quantile

                                                                 ...
                                                                ....
                      500000




                                                              .......
                                                              ..
                                                          •. ..
                                                     •••••..•.• ..
                                                   •••.•••..• ....
                                                 •••..•• .
                                                ••....••••....
density of f-hat(x)




                                              ••+                 •••..
                                             +++      ...++         •..
                      300000




                                          +
                                            +
                                            +
                                            +
                                            •••..+••••....
                                             •...+
                                          +
                                          +••... +        +   +     •••.
                                          +
                                        +••.. +                +      ••..
                                        +                       +      ••...
                                        +
                                        +
                                        + •••.. +
                                          •
                                                                 +
                                                                 ++
                                       +
                                       +•••.. +
                                       +                            +   ••.
                                       +
                                       + •
                                         •   .                      +
                                                                    +
                                                                    +    ••...
                                      +••... +
                                      +                               +   •••..
                                     +••. +                                                                                                                                                .
                                    +
                                    +••.. +
                                    +                                   +•••...
                                                                        +                                                                                                                      local lik. deg=0
                      100000




                                   +
                                   +
                                   +••.. + .                             +   ••.                                                                                                           •   local lik. deg=1
                                   +
                                   +   •.. +                                +••••....
                                                                            +
                                  ++••••... +                                 +
                                                                              ++••...                                                                                                      +   local lik. deg=2
                                  +•                                               •++.
                                 ++••.                                            +  ••.++
                               +++•• .                                                 ••.+
                                                                                          •.+
                                                                                            •+ +
                      0




                                                                               0.00002                                                                                0.00004                  0.00006                                                                                               0.00008

                                                                                                                                                                                f-hat(x)
                      Figure 6.6(b): Density of Estimates Generated by Local Likelihood (10% bandwidth)

                                                                                                                                                          Density of Estimates at First Quantile
                      150000
density of f-hat(x)




                                                                                                                                               .       local lik. deg=0
                                                                                                                                               •       local lik. deg=1
                                                                                                                                               +       local lik. deg=2
                      50000




                                                                                                                                                                                                                                                                   •.+ .•+
                                                                                                                                                                                                                                                                     .•+        •.•.••.•.•.•.•.+
                                                                                                                                                                                                                                                                         .•.•.•.+               •••.•....•
                                                                                                                                                                                                                                                                                                 ..•
                                                                                                                                                                                                                                                                                               •..         .................................
                                                                                                                                                                                                                                                                                                      •••..•••
                                                                                                                                                                                                                                                                                                            .
                                                                                                                                                                                                                                                                                                            •••
                                                                                                                                                                                                                                                                                                              ••••••••••••••••••• •••.•.•.•.........
                                                                                                                                                                                                                                             •.•.+•.+ •+
                                                                                                                                                                                                                                                    •.+  •.+
                                                                                                                                                                                                                                                       •.+     .+
                                                                                                                                                                                                                                                           •.+•+  .+
                                                                                                                                                                                                                                                                .•+       ++++++++              +++++++++++++++ ++++++++++++++++•+•+•••+•+
                                                                                                                                                                                                                                                                                                                                     +++++++++•++
                                                                                                                                                                                                                                                                                                                                                •+
                                                                                                                                                                                                                                                                                                                                                 •+
                                                                                                                                                                                                                                                                                                                                                  •+
                                                                                                                                                                                                                                                                                                                                                   •+ •.•+•.+
                                                                                                                                                                                                                          +++ + +++++
                                                                                                                                                                                                                                    •
                                                                                                                                                                                                                                    •
                                                                                                                                                                                                                                    .
                                                                                                                                                                                                                        +.••.•.•..•..+
                                                                                                                                                                                                                                     •
                                                                                                                                                                                                                                     .+
                                                                                                                                                                                                                                      •
                                                                                                                                                                                                                                      .
                                                                                                                                                                                                                                      •
                                                                                                                                                                                                                                      .+
                                                                                                                                                                                                                                       +
                                                                                                                                                                                                                                       •
                                                                                                                                                                                                                                       .+
                                                                                                                                                                                                                                        •
                                                                                                                                                                                                                                        .
                                                                                                                                                                                                                                        .  •.+
                                                                                                                                                                                                                                          .+
                                                                                                                                                                                                                                         •+                                                                                                         •+
                                                                                                                                                                                                                                                                                                                                                     •+     •.+
                                                                                                                                                                                                                                                                                                                                                              •.+•.+•+
                                                                                                                                                                                                                                                                                                                                                                     .•+.•.+
                                                                                                                                                                                                                                                                                                                                                                           •.+
                                                                                                                                                                                                                                                                                                                                                                             •.•+
                                                                                                                                                                                                                                                                                                                                                                                .•.+.•+
                                                                                                                                                                                                                +
                                                                                                                                                                                                                +++
                                                                                                                                                                                                                  + ++ +
                                                                                                                                                                                                                       •+
                                                                                                                                                                                                              + ••.•.••..                                                                                                                                                          •+ .•+
                                                                                                                                                                                                                                                                                                                                                                                        .•+
                                                                                                                                                                                                                                                                                                                                                                                          ..+•.+
                                                                                                                                                                                                                                                                                                                                                                                               •+.+
                                                                                                                                                                                                                                                                                                                                                                                                  •.+•+..•+•+.•+.+•+•.+
                                                                                                                                                                                                          +
                                                                                                                                                                                                          +++++                                                                                                                                                                                                       •+
                                                                                                                                                                                                                                                                                                                                                                                                                       .+•.+
                                                                                                                                                                                                                                                                                                                                                                                                                           •..•++
                                                                                                                                                                                                                                                                                                                                                                                                                                .++
                                                                                                                                                                                    ++                   + •. •                                                                                                                                                                                                                   ••..+
                                                                                                                                                                                                                                                                                                                                                                                                                                      .+++•+••+•++. •+++++   ++   +
                      0




                                                                                               0.00002                                                          0.00004                                                                        0.00006                                                                                  0.00008                                                                                   0.00010

                                                                                                                                                                                                                                             f-hat(x)


                                                                                                                                                        Density of Estimates at Second Quantile



                                                                                                                                                                                                                                         .                        local lik. deg=0
                      150000




                                                                                                                                                                                                                                        •                         local lik. deg=1
density of f-hat(x)




                                                                                                                                                                                                                                        +                         local lik. deg=2
                                                                                                                                              ....
                                                                                                                                              ...
                                                                                                                                           ...••
                                                                                                                                              ••..
                                                                                                                                      .•.•.•• •••...
                                                                                                                                .•.•.•. •••.•.•..
                                                                                                                             ••..                   ••...
                                                                                                                            •.
                                                                                                                         ••.. +++      +++    + ••.
                                                                                                                  ++
                                                                                                                   •
                                                                                                                   .+ .•.++++++ ++++++++++•••.•..
                                                                                                                    ••+
                                                                                                                 + •
                                                                                                                   .                                    ++++ ..
                                                                                                                                                           ••+
                                                                                                             +++••..
                      50000




                                                                                                                                                                ...
                                                                                                                                                             •+•+
                                                                                                        + +++••.•.                                              •+•+•+
                                                                                                                                                                     ..+.
                                                                                                       ++   •
                                                                                                            .
                                                                                                            • .                                                       ••+•.++
                                                                                                     +     •
                                                                                                   +++••.•..                                                                •.+
                                                                                                                                                                              .+
                                                                                                                                                                               •.+
                                                                                                                                                                                 •.+
                                                                                                                                                                                   •.•.++++
                                                                                                ++      .
                                                                                                 +.•.•..•                                                                              •.••+
                                                                                                                                                                                           .•..++++++
                                                                                           ++ ++
                                                                                               •.
                                                                                                •.
                                                                                                 .
                                                                                                 • •                                                                                          ••.••...+. ++++
                                                                                     ++++++•••.                                                                                                        ••• .•++ + +
                      0




                                                                                               0.00002                                                          0.00004                                                                        0.00006                                                                                  0.00008                                                                                   0.00010

                                                                                                                                                                                                                                             f-hat(x)


                                                                                                                                                          Density of Estimates at Third Quantile

                                                                              ..
                                                                             ....
                                                                          .•.••••..
                                                                    •••.•.. ••••....
                                                                   •.. ••.
                                                             ••.••.. •••....
                                                          •.•.. ••....                                                                                                                                                                   .                        local lik. deg=0
                                                       •. ••..
                                                      ••.++++                        •••..
                      150000




                                                   ••••...+   +++                                                                                                                                                                       •                         local lik. deg=1
density of f-hat(x)




                                                  .••.+
                                                      +                          +
                                                                                 +     ••.
                                            •+.+ +                                +
                                                                                  +      •..                                                                                                                                            +                         local lik. deg=2
                                            + •••... +                             ++•••...
                                         + +••. +                                   +
                                                                                    +      ••...
                                       +
                                       +•.. + .                                     +       ••..
                                      +
                                      +  ••.. +                                          +
                                     ++
                                     +•.•                                                  +
                                                                                           +   ••...
                                                                                               +
                                    ++  •.                                                      + +••.+
                                    +.••.
                                    +                                                                 .+
                                                                                                       ..+
                                   +.
                                  +•.••.                                                               ••.++
                                  +                                                                       •.•+
                                                                                                             .++
                                  +   •                                                                      ••..+
                      50000




                                  +
                                 +..  •
                                 +                                                                               ••.•.+
                                                                                                                      .•+
                                 +  .•
                                     •
                                     .                                                                                  .+
                                                                                                                         +
                                 +•.
                                 +                                                                                       •.•.++
                                                                                                                             •.•.+++
                                +•••.                                                                                            ••. ++++
                                +•                                                                                                 •. ++
                               +
                               +                                                                                                    ••.• .++
                                                                                                                                          •        +
                      0




                                                                                               0.00002                                                          0.00004                                                                        0.00006                                                                                  0.00008                                                                                   0.00010

                                                                                                                                                                                                                                             f-hat(x)
                              Figure 6.7: Comparison of Bias, Variance, and RMSE Across Estimators
                                                           bias squared
               5*10^-9

                                                                                         degree 0
                                                                                         degree 1
                                                                                         degree 2
               3*10^-9




                                                                                         sjpi
bias squared




                                                                                         lscv
               10^-9
               0




                          0               200            400              600          800           1000

                                                                  x


                                                               variance


                                                                                         degree 0
               6*10^-10




                                                                                         degree 1
                                                                                         degree 2
                                                                                         sjpi
                                                                                         lscv
variance

               2*10^-10




                          0               200            400              600          800           1000

                                                                  x


                                                                rmse
               0.00007




                                                                                         degree 0
                                                                                         degree 1
                                                                                         degree 2
               0.00005




                                                                                         sjpi
                                                                                         lscv
rmse

               0.00003
               0.00001




                          0               200            400              600          800           1000

                                                                  x
                                                    Figure 6.8: Data and True m(x) Function



                                                                                                                                                                                                                   .
    3

                                                                                                                                                                                                          .
                                                                               ..                                                                                     .                           . .               . .
                                                                        .. . .                                                                                                       .. . ..                      .. .
                                                                 ....... . . . .                                                                                        . .           .          . . .. ........ .. . .
    2



                                                                          .                                                                                                                    .. . . .. .. .. ..
                                                             ... . .. .. ... . . ... ... . .                          ..
                                                                                                                           . . .                     .                           .
                                                                                                                                                                   . . . .. . . .. . . .                        .
                                                              .. .
                                                                 .                  ....      ..         .                           .   ..    . .. .. .... .. . .. . .. ... .... . .. . . ... ... . .. .
                                                         ...                  . . .             .                 .               .  . .
                                                                                                                                       .   . . . . . .     .  .  ...  .  ..
                                                                                                                                                                         .         .  ... .  .     .          .
                                                          . .
                                               . . .. .. ... . .                         . . . ... . . . . . . . ... . . .. . .. ......... ... . . . .... . . . .. ..
    1




                                                                                                .. .. .                 . .                . ...             .. .                         .
                                          . . . . .. . .. .                              ... . . .... ..... ...... . ..... . ... . . . .. . . . .. . .                      .
y




                                                       .                                        .   .     . .     ..   . .     .                    .          .
                                     . . . . .. .                                                         . .                 ...                               .
                            . . . .. ... ....... . ... .                                      .                                                    .
    0




                                                   ..                                                                          .
             . . . . ... ... . .... ...... . .
            .. . .. .. . .. . . ... .
          . . . ..... . . . . . . .        ...
    -1




           . . . . . . . .. .
                                   .
                                     .
    -2




                    .

         -1.0                           -0.5                               0.0                               0.5                               1.0                               1.5                               2.0

                                                                                                               x
    Figure 6.9: Density of Estimates Generated by Different Bandwidth Selectors

                                                                 Density of Estimates at First Quantile
6

           .   cross-val.
           •   var. plug-in
5



           +   fixed plug-in
4
3




                                                                                                                                                                                       ++++++++
                                                                                                                                                                                          •.+
                                                                                                                                                                                    •+
                                                                                                                                                                                   •+ •+
                                                                                                                                                                                     •+•••...•.•••+++
                                                                                                                                                                             +    •+
                                                                                                                                                                              +•+•+ .... .•.•.•.•.+ •.•.+
                                                                                                                                                                            +
                                                                                                                                                                            +•• . ..                    •+
                                                                                                                                                                                                         .•+
                                                                                                                                                                                                           .•+
                                                                                                                                                                                                             .•+
2




                                                                                                                                                                           +•
                                                                                                                                                                            •..                                •.+
                                                                                                                                                                                                                 •.•+
                                                                                                                                                                                                                    .+
                                                                                                                                                                        +
                                                                                                                                                                        .
                                                                                                                                                                        •
                                                                                                                                                                         +
                                                                                                                                                                         +
                                                                                                                                                                         .
                                                                                                                                                                          +
                                                                                                                                                                          .
                                                                                                                                                                          ••
                                                                                                                                                                           .
                                                                                                                                                                           •.                                        •.•.+.....
                                                                                                                                                                                                                         •+    ....
                                                                                                                                                                    ...
                                                                                                                                                                      +
                                                                                                                                                                      •.
                                                                                                                                                                       +
                                                                                                                                                                       •
                                                                                                                                                                       •                                                   •+
                                                                                                                                                                                                                            •+
                                                                                                                                                                                                                             •+
                                                                                                                                                                                                                              •+•++  .•...
                                                                                                                                                                    .•
                                                                                                                                                                   .•++                                                           ••+
1




                                                                                                                                                              ... .
                                                                                                                                                                  ••+                                                               •+ •+
                                                                                                                                                                                                                                       + ••.+•.•.
                                                                                                                                                                                                                                        •+
                                                                                                                                                         . .
                                                                                                                                                           . .
                                                                                                                                                             •• •
                                                                                                                                                               •++++                                                                           ++••..•. .
                                                                                                                                          .
                                                                                                                                          .. . . . .
                                                                                                                                                   .    .  ••
                                                                                                                                                     .+•+•++++                                                                                     ++•++•..•• •..•.
                                                                             . •                                               +. . •+•••+• +••+•    •                                                                                                         +      + . +•    .
0




     0.0              0.5                                                                     1.0                                                   1.5                                                2.0                                                 2.5                 3.0

                                                                                                                                           m-hat(x)

                                                       Density of Estimates at Second Quantile

                                                                  ++
                                                                  +
                                                                ++
                                                                ++  +
                                                                  ••+
6




                                                               +
                                                               + •••+
                                                             +•• ••+
                                                             +
                                                              +  •    +
                                                                     •+
                                                                      •+
                                                                                                                                                                        .                cross-val.
                                                             +
                                                            +•••. +
                                                             + •       •+
                                                                        •+                                                                                             •                 var. plug-in
                                                           +             •+
5




                                                          ++
                                                           + •
                                                             . .  ..
                                                                   .      •+
                                                                           •+
                                                         .+  •
                                                         ..••• ...•+
                                                         .+         .       •+
                                                                            +                                                                                          +                 fixed plug-in
                                                       ..+                   •
                                                       +  •• ...•+
                                                           •                 •••
                                                       +•• .+
                                                           •
4




                                                     ..+                      +
                                                                              +.•.+
                                                     + +
                                                  ...++  •                        •.•.
                                                                                     •.•.
                                                ...+ +••• +                          +  ••.•
                                                                                           •.•.•.
3




                                               ..+••                                   + +
                                             ..+  ••                                     + +    •••..
                                            ..+  ••                                         ++      ••....
                                          ..•••+
                                               +•                                               ++    •..
2




                                        ..••++                                                      + +•••...
                                     .•.•+  +                                                           +••...
                                                                                                         +
                                           +                                                             ++••.
                                  .•.•
1




                                 ..
                                  •    +                                                                   +•+
                                                                                                             •+ .
                               ..•+                                                                           ••+•.••. •
                             . •
                        •. . +•+                                                                                 +++••++•+++
0




     0.0              0.5                                                                     1.0                                                   1.5                                                2.0                                                 2.5                 3.0
                                                                                                                                           m-hat(x)

                                                              Density of Estimates at Third Quantile
6




           .   cross-val.
           •   var. plug-in
5




           +   fixed plug-in
                                                                                              .......
                                                                                            ... ....
4




                                                                                        ..... ••      .. •
                                                                                        . •••••       ••
                                                                                                       ..••••
                                                                                                        .
                                                                                     .... ••••• ... ••••
3




                                                                              ++
                                                                               +    .
                                                                                    .         •
                                                                                              •          .. •••
                                                                          +++++++++
                                                                                  ..+ •••                 .. ••
                                                                        +++ ....+++++      •               .. •
                                                                      + .. ••+++ ... ••••
2




                                                                       +
                                                                       +                 • +
                                                                     +
                                                                     ++        .                             . •
                                                                                       •
                                                                    ++ ... •• +++ .... •••
                                                                   ++             •                +++ .. ••
1




                                                                 +
                                                                 ++
                                                                  +          .    •                  ++++ .. ••
                                                           +++++++        .. •••                           ++++ .... •
                                             +++++++++++++++          .. . •••
                +++ ++++++++++++++++++++++++++                                                                       . •• • • •
0




     0.0              0.5                                                                     1.0                                                   1.5                                                2.0                                                 2.5                 3.0
                                                                                                                                           m-hat(x)
         Figure 6.10: Estimated Conditional Mean Functions Under Alt. Bandwidths

                             (a) Least Squares Cross-validation
    2
    1
    0
y

    -1
    -2




         -1.0        -0.5        0.0           0.5           1.0    1.5            2.0

                                                x


                                   (b) Variable Bandwidth
    2
    1
    0
y

    -1
    -2




         -1.0        -0.5        0.0           0.5           1.0    1.5            2.0

                                                x


                                       (c) Fixed Bandwidth
    2
    1
    0
y

    -1
    -2




         -1.0        -0.5        0.0           0.5           1.0    1.5            2.0

                                                x
                             Figure 6.11: Global Estimates from Orthogonal Polynomial Series Expansion


    3




                                                                          3
    2




                                                                          2
    1




                                                                          1
y




                                                                      y
    0




                                                                          0
                                          poly. est.                                                           poly. est.
                                          true function                                                        true function
    -1




                                                                          -1
         -1.0   -0.5   0.0        0.5     1.0             1.5   2.0            -1.0   -0.5   0.0      0.5      1.0             1.5   2.0


                               degree=7                                                            degree=8
    3




                                                                          3
    2




                                                                          2
    1




                                                                          1
y




                                                                      y
    0




                                                                          0
                                          poly. est.                                                           poly. est.
                                          true function                                                        true function
    -1




                                                                          -1
         -1.0   -0.5   0.0        0.5     1.0             1.5   2.0            -1.0   -0.5   0.0      0.5      1.0             1.5   2.0


                               degree=9                                                            degree=10
    3




                                                                          3
    2




                                                                          2
    1




                                                                          1
y




                                                                      y
    0




                                                                          0




                                          poly. est.                                                           poly. est.
                                          true function                                                        true function
    -1




                                                                          -1




         -1.0   -0.5   0.0        0.5     1.0             1.5   2.0            -1.0   -0.5   0.0      0.5      1.0             1.5   2.0


                              degree=11                                                            degree=12
    3




                                                                          3
    2




                                                                          2
    1




                                                                          1
y




                                                                      y
    0




                                                                          0




                                          poly. est.                                                           poly. est.
                                          true function                                                        true function
    -1




                                                                          -1




         -1.0   -0.5   0.0        0.5     1.0             1.5   2.0            -1.0   -0.5   0.0      0.5      1.0             1.5   2.0


                              degree=13                                                            degree=14
    3




                                                                          3
    2




                                                                          2
    1




                                                                          1
y




                                                                      y
    0




                                                                          0




                                          poly. est.                                                           poly. est.
                                          true function                                                        true function
    -1




                                                                          -1




         -1.0   -0.5   0.0        0.5     1.0             1.5   2.0            -1.0   -0.5   0.0      0.5      1.0             1.5   2.0


                              degree=15                                                            degree=16
                            •




                   1.0
                                •   •   •    •     •   •   •   •    •     •   •    •    •    •




                   0.8
                                •
                                                                                             •
                                                                                        •
                                    •




                   0.6
                                                                                   •
                                        •                                     •              •
                                             •                            •             •
                                                   •           •    •              •
                                                       •   •                  •




                   0.4
                                                                    •     •
                                                               •




% of max RMSE
                                •                      •   •
                                    •   •    •     •




                   0.2
                                                                          beta
                                                                          phi
                                                                          mean of phi




                   0.0
                                0.05        0.10       0.15        0.20       0.25          0.30



                                                       bandwidth

                Figure 6.12: How RMSE varies by Choice of Bandwidth for Alternative Parameters
                                                                     Figure 6.13: Sensitivity of Estimated Parameters to Bandwidth Choice
                                                                                            Estimates Plotted for 10 Simulated Samples




                                                               Estimated beta                                                                                          Estimated phi-hat-bar




                                                                                                                   normalized estimated phi-bar
normalized estimated beta



                                     4




                                                                                                                                                  4
                                                                                                                                                                                                             6   6    6
                                                                                                                                                                                               7     6   6
                                                                                                                                                       6                      6   6   6   6                  3   3    3
                                                                                                                                                           6   6   6    6                      4     3   3
                                     2




                                                                                                                                                  2
                                          7                                                                                                                                       3   3   3                  5   5
                                                                                                                                                                                                                 4    4
                                                                                                                                                                                                                      5
                                                                                                                                                                                                                      8
                                          8   7   7   7    7     7   7   7   7    7     7    7   7   7    7                                                    3   3    3     3                1
                                                                                                                                                                                               6     5
                                                                                                                                                                                                     4   5
                                                                                                                                                                                                         4
                                                                                                                                                                                                         8   4
                                                                                                                                                                                                             8
                                                                                                                                                                                                             9   8
                                                                                                                                                                                                                 9    9
                                          2
                                          1   8
                                              1
                                              2   8
                                                  2
                                                  1   8
                                                      2
                                                      1    8
                                                           2     8
                                                                 2
                                                                 1   8
                                                                     2
                                                                     1   8
                                                                         1
                                                                         2   8
                                                                             1
                                                                             2    8
                                                                                  1
                                                                                  2     8
                                                                                        1
                                                                                        2    8
                                                                                             1
                                                                                             2   8
                                                                                                 1
                                                                                                 2   8
                                                                                                     1
                                                                                                     2    8
                                                                                                          1
                                                                                                          2                                            4
                                                                                                                                                       3   3            5     5   5   5
                                                                                                                                                                                      4   5
                                                                                                                                                                                          4
                                                                                                                                                                                          8    5
                                                                                                                                                                                               9
                                                                                                                                                                                               0     8
                                                                                                                                                                                                     9   9
                                          0
                                          5   0
                                              5   0
                                                  5   0
                                                      5    1
                                                           0
                                                           5     0
                                                                 5   0
                                                                     5   0
                                                                         5   0
                                                                             5    0
                                                                                  5     0
                                                                                        5    0
                                                                                             5   0
                                                                                                 5   0
                                                                                                     5    0
                                                                                                          5                                                4   5
                                                                                                                                                               4   5
                                                                                                                                                                   4    4     4
                                                                                                                                                                              9   4
                                                                                                                                                                                  9
                                                                                                                                                                                  8   8
                                                                                                                                                                                      9   9                  0   0
                                                                                                                                                                                                                 2    0
                                                                                                                                                                                                                      2
                                              4   4   4    4     4   4   4   4    4     4    4   4   4    4                                            9
                                                                                                                                                       5   9   9   9    9
                                                                                                                                                                        8     8                      0   0
                                                                                                                                                                                                         2   2   1    1
                                                                                                                                                                                                                      7
                                     0




                                                                                                                                                  0
                                          4   3   3   3    3     3   3   3   3    3     3    3   3   3    3
                                                                                                          9                                                5
                                                                                                                                                           8   8   8              0   0   0
                                                                                                                                                                                          2    3     2
                                                                                                                                                                                                     1   1
                                                                                                                                                                                                         7   1
                                                                                                                                                                                                             7   7
                                          3
                                          9   9   9   9    9     9   9   9   9    9     9    9   9   9                                                 0   0   0   0    0
                                                                                                                                                                        2     0
                                                                                                                                                                              2   2
                                                                                                                                                                                  1   2
                                                                                                                                                                                      1   1
                                                                                                                                                                                          7    2
                                                                                                                                                                                               8     7
                                              6   6   6    6     6   6   6   6    6     6    6   6   6    6                                            8   2
                                                                                                                                                           1   2
                                                                                                                                                               7
                                                                                                                                                               1   2
                                                                                                                                                                   1
                                                                                                                                                                   7    1
                                                                                                                                                                        7     1
                                                                                                                                                                              7   7   7
                                          6                                                                                                            2
                                                                                                                                                       1   7
                                     -2




                                                                                                                                                  -2
                                                                                                                                                       7
                                     -4




                                                                                                                                                  -4
                                              0.05        0.10       0.15        0.20         0.25       0.30                                              0.05        0.10       0.15        0.20       0.25        0.30



                                                                     bandwidth                                                                                                    bandwidth




                                                            Estimated phi-hat
normalized estimated phi at p=0.36



                                     4




                                                                                                 6   6    6
                                              6                                   7     6    6       9    3
                                                                                                          9
                                          2
                                          6       6              6   6   6   6    0     9    9   9
                                                                                                 3   3
                                                                                                     5    5
                                                      6                                          5
                                     2




                                          9   9
                                              2   9        6     9   9   9   9          3    3
                                                                                             5       4    4
                                          7
                                          1           9    9                 5    4
                                                                                  6     5    4   4   0    0
                                                                                                          1
                                              7
                                              5   2
                                                  5   5
                                                      2    5
                                                           2     5   5   5
                                                                         3   3    1
                                                                                  5     4    0
                                                                                             1   0
                                                                                                 1   1
                                                                                                     2    2
                                          5   1   7
                                                  1   1
                                                      7    1     2
                                                                 1   1
                                                                     2   1
                                                                         4
                                                                         2   4
                                                                             1
                                                                             2    2
                                                                                  3     1
                                                                                        0
                                                                                        2    2   2
                                                                                                 7   7    7
                                                           7     7   3
                                                                     4
                                                                     7   7   0
                                                                             7    8     7    7            8
                                     0




                                                                 4
                                                                 3       0                       8   8
                                                           4
                                                           3     0   0                  8    8
                                          3   3   3   3
                                                      4    0                      9
                                              0   0   0                      8
                                     -2




                                                  4                      8
                                          4
                                          0   4                      8
                                                                 8
                                                           8
                                     -4




                                                      8
                                                  8
                                              8


                                              0.05        0.10       0.15        0.20         0.25       0.30



                                                                     bandwidth
                                                Figure 6.14: Distribution of Estimates Over Alternative Bandwidths




                                                                                                  Smoothed density of estimated beta



                  0.0108.0185   0.0195
                            0.019
          smoothed density
    0.0165
0.016        0.0175
         0.017




                                 20


                                                                     15
                                                                                                                                                                           0.3
                                                                      be
                                                                          ta                                                                                  0.25
                                                                               (tr         10
                                                                                  ue                                                                 0.2
                                                                                          va
                                                                                             lu e=                                       0.15 th
                                                                                                                                                d
                                                                                                     10       5                             dwi
                                                                                                         )                       0.1    ban
                                                                                                                          0.05




                                                                                                  Smoothed density of estimated phi
                                         0.020.025 0.03
                               smoothed density
                                              0 0.0050.010.015




                                                          70
                                                                 0
                                                                          65
                                                                              0                                                                                      0.3
                                                                          ph
                                                                             i-h
                                                                                     at       60                                                           0.25
                                                                                          (tr    0
                                                                                             ue                                                    0.2
                                                                                                va
                                                                                                   lue        5                         0.15 th
                                                                                                          = 6 50                           dwi
                                                                                                                                               d
                                                                                                             06                  0.1   ban
                                                                                                                )
                                                                                                                    50    0.05
                                                                                                                      0
Figure 6.14 cont: Distribution of Estimates Over Alternative Bandwidths




                                                  Smoothed density of estimated phi-bar




                     20.0250.03
       smoothed density
  0 0.0050.010.0150.0




                         80
                                  0
                                         75
                                      ph     0                                                                             0.3
                                        i-h
                                            at-
                                               ba      70                                                           0.25
                                                  r(     0
                                                    tru                                                       0.2
                                                        ev
                                                           alue   65                               0.15 th
                                                                       0                                  d
                                                                  =7                        0.1       dwi
                                                                    45                            ban
                                                                           )   60    0.05
                                                                                 0



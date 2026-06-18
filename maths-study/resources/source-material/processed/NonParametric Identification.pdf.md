---
normalized_id: shared-pdf-reference-nonparametric-identification
exam_code: SHARED
material_scope: nonparametric identification.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/NonParametric Identification.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-nonparametric-identification

                   NONPARAMETRIC IDENTIFICATION

                                 Rosa L. Matzkin
                              Department of Economics
                              Northwestern University

                                    December 2005

                                     OUTLINE

1. Introduction
2. The econometric model
   2.1. From the economic to the econometric model
          2.1.1. Dependence between ε and X
   2.2. Definition of an econometric model
          2.2.1. Examples
                2.2.1.1. Additive Models
                2.2.1.2. Nonadditive Models
                2.2.1.3. Nonadditive Index Models
                2.2.1.4. Nonadditive Simultaneous Equations Models
3. Identification
   3.1. Definition of identification
         3.1.1. Examples
                3.1.1.1. Additive Models
                3.1.1.2. Nonadditive Models
                3.1.1.3. Nonadditive Index Models
                3.1.1.4. Nonadditive Simultaneous Equations Models
4. Means of achieving identification
   4.1. Identification of features of functions
         4.1.1. Examples
                4.1.1.1. Identification of derivatives in Nonadditive Models
                4.1.1.2. Identification of finite diﬀerences in Nonadditive Models
                4.1.1.3. Identification of average derivatives in Nonadditive Models
    4.2. Imposing restrictions
         4.2.1. Examples
                4.2.1.1. Nonadditive Model with separability
                4.2.1.2. Nonadditive Model with local independence
                4.2.1.3. Nonadditive Index Model with distributional restrictions
         4.2.2. Observational equivalence
                4.2.2.1. Restrictions derived from observational equivalence
                         4.2.2.1.1. Independent Nonadditive Model
                         4.2.2.1.2. Independent Nonadditive Index Model
                         4.2.2.1.3. Nonadditive Simultaneous Equations Model
   4.3. Augmenting the data
         4.3.1. Control functions
                4.3.1.1. Identification of functions and distributions using control

                                           1
                        functions
                        4.3.1.1.1. Additive Model
                        4.3.1.1.2. Nonadditive Model
                        4.3.1.1.3. Nonadditive Index Model
                        4.3.1.1.1. Nonadditive Model
              4.3.1.2. Identification of average derivatives using control functions
                        4.3.1.2.1. Nonadditive Model
              4.3.1.3. Control functions using exogenous variables
                        4.3.1.3.1. Additive Model
                        4.3.1.3.2. Nonadditive Model
              4.3.1.4. Control functions using endogenous variables
       4.3.2. Proxy variables
       4.3.3. Instrumental variables
              4.3.3.1. Additive Models
              4.3.3.2. Nonadditive Models
       4.3.4. Replacement functions
       4.3.5. Panel data
              4.3.5.1. Nonadditive Model
              4.3.5.2. Nonadditive Index Model
5. Conclusions
6. References




                                           2
1. Introduction

     This chapter presents some of the recent results on the identification of nonparametric
econometric models. It complements many other existent works that cover part of this topic,
such as the books by Horowitz (1998), Pagan and Ullah (1999), and Yatchew (2003), the
articles in recent volumes of this Handbook by Matzkin (1994) and Powell (1994), the most
recent survey articles on semiparametric and nonparametric identification, such as Blundell
and Powell (2003) and Chesher (2005), and other chapters in this Handbook, such as the
one by Heckman and Vytlacil.
     The analysis of identification in econometric models has been developing lately in several
directions. One of these directions is the econometric analysis of systems of equations that
require few or no parametric assumptions on the functions and distributions in the system.
Imposing parametric specifications for functions and distributions had been the standard
procedure in a world where large data sets were rarely available and computers could not
easily handle estimation methods that require complicated computational algorithms. In
such a world, estimating models with only a few parameters was part of the standard pro-
cedure. As computers processing power became faster and cheaper and the availability to
deal with large data sets increased, it became possible to consider estimation of increasingly
complicated functions, with increasing, even infinite, numbers of parameters. This, in turn,
drove attention to the analysis of identification of functions and distributions that do not
necessarily belong to parametric families. Rather than asking whether some parameters
are identified, the question of interest became whether a function or distribution was iden-
tified within a general set of functions or distributions. Establishing such a nonparametric
identification was recognized as an important first step in the econometric analysis of even
parametric models.
     Establishing that a function or distribution is nonparametrically identified within a set of
nonparametric functions or distributions implies its identification within any subset of the set
of nonparametric functions. In particular, if the subset is defined as the set of functions that
satisfy a parametric structure, such as being linear or quadratic, then identification with
these subset is implied by identification within the larger set of nonparametric functions
that include linear, quadratic, and possibly many other parametric specifications. If, on
the other hand, one does not know whether the function is nonparametrically identified
but one can establish its identification when a particular specification is imposed on the
function, then it is not clear how robust any estimation results may be. When a function
is nonparametrically identified, one can develop tests for diﬀerent parametric structures,
by comparing the results obtained from a nonparametric estimator for the function with
those obtained from specific parametric estimators. When a function is nonparametrically
identified, one can allow the function to possess local behavior that would not be possible
under some parametric specifications. When a model or a function within a model is
not identified nonparametrically, one can consider imposing sequentially stronger sets of
restrictions in the model, up to the point where identification is achieved. This provides a
method for analyzing the trade-oﬀ between imposing restrictions and achieving identification.
This chapter will present several of the developments in the nonparametric identification in
economic models.
     Another area of active research, specially in recent years, was in the development of


                                               3
econometric models that were specified with properties closer to those of models studied in
economic theory. The analysis of identification in the past, which concentrated on models
that were linear in variables and parameters and additive in unobservable random terms,
contrasted strongly with the standard practice in economic theory, where functions were only
specified to possess some properties, such as continuity or monotonicity. On those times,
economic theorists would work on models involving very general functions and distributions.
Econometricians, on the other side, would work on models with well specified and typically
quite restrictive functional forms and distributions. Even though the main goals of both
groups were in many instances very similar, the solutions as well as the languages used
in each of them were very diﬀerent. The picture is drastically diﬀerent nowadays. The
development of nonparametric techniques for the estimation and testing of economic models
has been shortening the distance between those roads drastically, to the point where now
some econometric models are specified with no more restrictions than those that a theorist
would impose.
     The advances that have decreased the distance between economic theory and economet-
rics have not concentrated only on the relaxation of parametric structures. There has also
been lately an increasing eﬀort to relax the way in which the unobservable random terms
are treated. A practice that has and still is commonly used when specifying an econometric
model proceeds by first using economic theory to specify a relationship between a vector
of observable explanatory variables and a vector of dependent variables, and then adding
unobservable random variables to the relationships, as an after-thought. The seminal works
by Heckman (1974), McFadden (1974), Heckman and Willis (1977), and Lancaster (1979)
have shown that one can analyze econometric models where the unobservable random terms
have important economic interpretations. They may represent, for example, heterogeneity
parameters in utility functions, productivity shocks in production functions, or utility values
for unobserved product attributes. When interpreting the unobservables in this way, it is
rarely the case that they enter in additive ways into the models of interest. Several re-
cent papers have considered the identification and estimation of nonparametric models with
nonadditive random terms. Some of these will be reviewed in this chapter.
     Ideally, one would like to be able to identify all the unknown functions and distributions
in a model without imposing more restrictions than those implied by the theory of the
model. Restrictions derived from optimization, such as concavity and linear homogeneity,
or equilibrium conditions, have been shown to be useful to identify functions in models
that had been thought in the past to be identified only under very restrictive parametric
assumptions. (See the survey chapter by Matzkin (1994) in Volume 4 of this Handbook for
several such examples.) Nevertheless, in some cases, the identification of all functions and
distributions in a model that imposes so few restrictions might not be possible. In such
cases, one may consider several options. One may try to determine what can be identified
without imposing any more restrictions on the model. One may impose some additional
restrictions on some of the functions or distributions, to achieve identification. Or, one may
consider enlarging the model, by augmenting the set of observable variables that can provide
information about the functions or distributions of interest in the model. In this chapter
we discuss some of the recent techniques that have been developed following each of these
options.
     While restrictions implied by economic theory may, in some cases, aid in achieving iden-
tification, in some other cases, they may also hinder identification. This may occur when

                                              4
restrictions such as agent’s optimization and equilibrium conditions generate interrelation-
ships among observable variables, X, and unobservable variables, ε, that aﬀect a common
observable variable, Y . When one wants to identify the eﬀect that a change in the observ-
able variable X generates in Y, one may not be able to do so when the change in X generates
at the same time a change in ε. A typical example is when Y denotes quantity demanded
for a product and X denotes the price of the product. Suppose that ε is an unobservable
demand shifter, representing taste for the product, so that when ε increases, while price
and other variables aﬀecting demand stay constant, the demanded quantity increases. If
the price that will make producers produce a certain quantity increases with quantity, this
increment in ε will generate an increment in the price X. As a result, X and ε are corre-
lated. In other words, an observed change in demand corresponding to an observed change
in price is not the same as if the unobservable variables in the demand would be fixed, since
the change in price might correspond also to a change in ε. Another typical example arises
when analyzing the eﬀect of years of education on wages. An unobservable variable, such
as ability, aﬀects wages but also years of education. When an individual chooses years of
education to maximize the discounted stream of future income, he takes ability into account
because it influences the productivity of education. As a result of this connection between
ability and years of education, the distribution of ability, given years of education, changes
with the years of education. Two people with diﬀerent level of education will typically
have also diﬀerent levels of unobserved ability. The diﬀerence in their observed wages will
then be due not only to diﬀerent education levels but also to diﬀerent ability levels, which
are unobservable to the econometrician. For parametric models, a large variety of methods
have been developed to identify and estimate models where the explanatory variables are
correlated with the unobservable variables. Some of those methods have been extended
lately to nonparametric setups. In this chapter, we will review some of those methods.
    The outline of the chapter is as follows. In the next section, we specify a structure that
allows us to establish a direct relationship between economic models and the econometric
models. In Section 3, we define identification In section 4, we analyze three diﬀerent
methods of proceeding when identification fails. Section 5 concludes.



2. The econometric model
2.1. From the economic model to the econometric model
The description of an economic model typically starts out by describing the economic agents
involved, their objective functions, their information, and the interactions among the agents.
When an econometrician tries to fit an economic model to the available data, he first needs
to determine which of the variables in the model are observable and which are unobservable.
Another important division of the variables in the model is between the variables that are
determined outside of the model and those that are determined inside the model. The
variables in the latter set are functions of the variables in the former set, and are typically
determined either by the choice of some agents or by the interaction among several agents.
We will denote by X the vector of variables that are determined outside the model and
are observable, and by ε the vector of variables that are determined outside the model and


                                              5
are unobservable. We will denote the number of coordinates of X by K and the number
of coordinates of ε by L. Hence, X ∈ RK and ε ∈ RL . The vectors of observable and
unobservable variables that are determined within the model will be denoted, respectively,
by Y and Y ∗ . We will denote the number of coordinates in the vector of observable variables,
Y, determined within the model, by G, and the number of coordinates in the vector of
unobservable variables, Y ∗ , determined within the model by G∗ . Hence, Y ∈ RG and
         ∗
Y ∗ ∈ RG . Following the standard terminology, we will say that Y and Y ∗ are endogenous in
the model, and X and ε are exogenous in the model. The description of an economic model
contains, as well as a list of variables, a list of functions and distributions. Some of these
functions and distributions are primitive, in the sense that are determined outside the model.
Some are derived within the model. We will denote by h0 the list of all primitive functions
and by F0 the list of all primitive distributions. We will describe the interrelation between
the primitive functions and distributions and the observable and unobservable variables by
a known vector function v and an equation

                                   v (Y, Y ∗ , X, ε; h0 , F0 ) = 0

This equation can be used to derive the joint distribution of the vector of observable variables,
(Y, X) , as a function of the primitives of the models, (h0 , F0 ) .
    To provide an example, consider a model of consumer demand for a consumption good
and a composite good. Let I denote the income that the consumer can spend on these
two goods. Let the price of the composite good be 1 and let p denote the price of the
consumption good. Let y and z denote the quantities chosen by the consumer of, respectively,
the consumption good and the composite good. Suppose that the economic model specifies
that the individual has preferences over bundles (y, z), and chooses the one that maximizes
those preferences over the set of all bundles that cost no more than I. Suppose, further,
that the consumer preferences can be represented by a strictly increasing, strictly concave,
twice diﬀerentiable utility function, U, on (y, z), and that such utility function is diﬀerent for
diﬀerent individuals in a population. In particular, assume that the utility function depends
on observable socioeconomic characteristics of the individual, such as age and marital status,
denoted by w, and on unobservable tastes for (y, z), denoted by ε. Then, for an individual
with characteristics w and ε, and with observable income I, the observed choice (y, z) is
defined as
                         (y, z) = arg max {U(e  y , ze, w, ε) | pe
                                                                 y + ze ≤ I}
                                      (e  z)
                                       y ,e


                                             y , ze) implies that all the available income will
Since the monotonicity of U with respect to (e
be used, this is equivalent to

                             y = arg max {U(e
                                            y , I − pe
                                                     y, w, ε)}
                                               ye


                             z = I − py


The diﬀerentiability, strict concavity, and strict monotonicity of U imply then that y satisfies

                        Uye (y, I − py, w, ε) − p Uze (y, I − py, w, ε) = 0

                                                    6
    In this model, the income, I, the vector of socioeconomic variables, w, and the price
p are observable variables determined outside the system. The unobservable taste, ε, is
also determined outside the system. The chosen quantity, y, of the commodity is observed
and determined within the system. The utility function U(·, ·, ·, ·) is an unknown primitive
function; and the distribution of (p, I, w, ε) is an unknown primitive distribution function.
Given any particular utility function U, satisfying the diﬀerentiability, monotonicity and
concavity restrictions imposed above, and given any distribution for (p, I, w, ε) , one can
use the above equation to derive the joint distribution of the vector of observable variables,
(y, p, I, w) . This is derived from the equation


                 v (Y, X, ε) = v (Y, p, I, w, ε)
                             = Uy (Y, I − pY, w, ε) − Uz (Y, I − pY, w, ε) p
                             = 0

where X = (p, I, w) .
   There are many situations in which we would be interested in studying this consumer
demand model. The analysis in many of those situations might require knowledge about the
primitive functions in the model. Suppose, for example, that we were interested in predicting
the behavior of a consumer, that possesses preferences as described above, when the price of
the consumption good depends on the quantity chosen, instead of being a fixed value, p, as
considered above. Denote the price function as s(y). To predict the choice of the consumer
with utility function U(ey , ze, w, ε) when his set of aﬀordable consumption bundles is

                                     y, ze) | s(e
                                   {(e          y ) ye + ze = I}

                                     y , ze, w, ε) to calculate the new optimal values
we would need to know the function U(e

                                          y , ze, w, ε) | s(e
                      (y, z) = arg max {U(e                 y ) ye + ze = I}
                                   (e z)
                                    y,e

One of the objectives of the study of identification is to provide conditions under which from a
distribution of observable variables one can recover some or all of the primitive functions and
distributions in an economic model. In this particular example, one would like to determine
conditions under which from a distribution of the observable variables determined by the
consumption model with fixed prices, p, one can recover the utility function U. If such a
function could be recovered, one could then use it to predict the behavior of the consumer
when the price function is s(y).
    The analysis of some situations might require less information about the primitive func-
tions than the previous case. Suppose, for example, that in the same consumption model
as described above, we were interested in predicting the change in quantity demanded as a
response to an infinitesimal change in the price, p, of the consumption good. Disregard-
ing, without much loss of generality, the dependence of the utility function in the vector of
socioeconomic characteristics, w, we will denote the solution to the consumer optimization
problem by a function m. The demand function m assigns to each vector (p, I) the optimal
choice, y, of the consumption good, by a consumer with tastes ε. That is,


                                                7
                                           Y = m (p, I, ε)
is defined as the function that satisfies the first order conditions

        Uy (m (p, I, ε) , I − pm (p, I, ε) , ε) − Uz (m (p, I, ε) , I − pm (p, I, ε) , ε) p = 0
The function m incorporates all that is needed about the function U to predict the behavior
of the consumer when the functional structure of the first order conditions does not change.
This is in contrast to the previous problem, where the change in the price function implied
a change in the structure of the first order conditions. In our new situation, all that we are
interested on is the derivative ∂m (p, I, ε) /∂p at the point (p, I, ε) . The conditions under
which such an object can be calculated from the same distribution of observable variables
as considered in the first case are diﬀerent and in most cases weaker than those required to
recover the utility function U.
    Even weaker conditions could be required when instead of being interested in the values
or derivative of a function, for a fixed value of the unobservable ε, one is interested in
some functional, such as the average value of the function or derivative, over a population
of individuals, for given p, I. Suppose, for example, that we were interested in the average
chosen quantity of the consumption good, and on the average infinitessimal response to a
change in price, over a population of consumers characterized by a common utility function,
   y, ze, ε), and with diﬀerent values of ε Suppose that ε is distributed independently of
U (e
(p, I) . Letting Fε denote the distribution of ε, assumed to be independent of (p, I), the
average consumption over this population of individuals is
                                                  Z
                           E [m (p, I, ε) |p, I] = m (p, I, ε) dFε (ε)

and the average response to an infinitessimal change in price is
                         ·                   ¸ Z
                           ∂m (p, I, ε)          ∂m (p, I, ε)
                      E                 |p, I =               dFε (ε)
                               ∂p                     ∂p
As it will become clear below, the identification of these two quantities does not require
knowing either the utility function U or the distribution Fε. Only very weak assumptions
are required on U and Fε in order to recover the above averages. One of the objectives of
identification is to determine sets of minimal conditions under which some of the elements
in a model can be recovered from the distribution of the observable variables.
    To provide another example, consider an equilibrium model of demand and supply. Let
  d
m denote an aggregate demand function, which determines the aggregate quantity de-
manded of a product, Qd , as a function of the price of the product, p, the income level
of the consumers, I, and an unobservable variable εd . Let ms denote the aggregate supply
function, which determines the aggregate supplied output, Qs, as a function of the price of
the product, P, input prices, W, and an unobservable variable, εs. In equilibrium, Qd = Qs .
The model can then be described as
                                                ¡      ¢
                                    Qd = md P, I, εd
                                     Qs = ms (P, W, εs )
                                    Qd = Qs

                                                  8
where the last equation denotes the equilibrium conditions
                                                        ¡ dthat ¢ aggregate demand equals
                                                              s
aggregate supply. Let Y = (P, Q) , X = (I, W ) , and ε = ε , ε . Then


                      v (Y, X, ε) = v (P, Q, I, w, ε)
                                    µ d¡            ¢                  ¶
                                       m P, I, εd −   ¡ ms
                                                           (P,¢W, εs
                                                                     )
                                  =
                                             Q − md P, I, εd
We might be interested, for example, in the change in the ¡value of¢ md when P changes
infinitesimally while I and εd remain fixed, that is, in ∂md P, I, εd /∂P ; or, we may be
interested in the average value of such derivative over all values of εd .


2.1.1. Dependence between ε and X


    In many cases, some of the variables that are considered to be determined outside an
economic model, are interrelated. They are determined by some underlying relationships
that are not explicitly described within the model of interest. When some of the inter-
related variables are unobservable, this can create specific statistical dependences between
these unobservable variables and some of the observable variables that are considered to be
determined outside the system. Not taking these dependencies into consideration when an-
alyzing the conditions for identification, may lead one to obtain erroneous conclusions from
the use of the model.
    Consider, for example, the utility maximization model described in the previous subsec-
tion. In that model, the income of the consumer, I, was assumed to be determined outside
of the model. The unobservable ε was assumed to denote taste for consumption. In many
cases, one could think of income as being partially determined by ε. Individuals that like to
consume more will typically make lifetime decisions, such as the choice of profession, that
would induce higher incomes. In other words, the income of an individual will be typically
a function of ε. In particular, if we let re denote a function and let δ denote additional
variables that aﬀects income I, we could specify that I = re (ε, δ) . If this latter relationship
were added to the specification of the model, then, in the augmented model, the variables
determined within the system would be (Y, Z, I) , and those determined outside the system
would be (p, ε, δ) . Exclusion of such a relationship from the model generates an underlying
relationship between I and ε, which is not spelled out in the model, but which must be rec-
ognized to obtain correct conclusions. To elaborate, suppose that the function re is strictly
increasing in ε. Let r denote the inverse of re with respect to ε. Then
                                          ε = r (I, δ)
denotes the value of the taste parameter, ε, that corresponds to an individual that has income
I and a value δ for all the other variables aﬀecting income. The demand function

                                       Y = m (p, I, w, ε)
for this individual can be written in terms of (p, I, δ) as
                                    Y = m (p, I, w, r (I, δ))

                                               9
A change in the demand of an individual with taste parameter value ε, which is due to an
infinitessimal change in income, I, is

                       ∂m (p, I, w, ε)   ∂m (p, I, w, r (I, δ))
                                       =                        |r(I,δ)=ε
                            ∂I                    ∂I
                                              dm (p, I, w, r (I, δ))
                                         6=
                                                       dI
The latter inequality implies that a change in the quantity demanded of a product that is
associated with a change in income does not necessarily denote the partial eﬀect of income,
leaving ε fixed. The change in income could have been generated from a change in ε, in
which case the change in the quantity demanded corresponds to the change of both, income
and ε.
    For another typical example, suppose that we are interested in studying an aggregate
demand model, which is specified by only the demand equation in the equilibrium model of
demand and supply that we described above,
                                              ¡         ¢
                                       Qd = md P, I, εd
   The supply equation, Qs = ms (P, W, εs ) , together with the equilibrium equation, Qd =
 s
Q , describes a relationship between the variables in this model that can induce a relationship
between εd and P. To see this, assume that the function md is strictly increasing in εd , for
each P, I. Let r d denote the inverse of md with respect to εd . Then,
                                          ¡         ¢
                                εd = r d Qd , P, I
                                    = r d (Qs , P, I)
                                    = r d (ms (P, W, εs ) , P, I)
                                    = r (P, W, I, εs )

for some function r. The demand equation can then be written as

                                      ¡         ¢
                                Q = md P, I, εd
                                    = md (P, I, r (P, I, w, εs ))

This implies, for example, that a simultaneous change in aggregate demand and price can
not necessarily be used to determine the change in demand that corresponds to the change
in price when income, I, and εd stay fixed. The change in price might respond to a change
in εd , which also aﬀects the change in demand. That is,

                     ¡         ¢
                  ∂md P, I, εd      ∂md (P, I, r (P, I, w, εs ))
                                 =                               |r(P,I,w,εs )=εd
                      ∂P                       ∂P
                                    dmd (P, I, r (P, I, w, εs ))
                                 6=
                                               dP



                                                10
When ε in the consumer demand model or εd in the demand-supply model are observable
variables, one can easily determine whether their values change at the same time that the
other variables change. When, in contrast, the values of ε and εd are not observed, their
changes are also not observed, and one cannot easily determine whether the change in either
individual or aggregate demand is in part due to, respectively, a change in ε or εd .

2.2. Definition of an econometric model
Consider the model described in the beginning of Section 2. The model contained a vector,
ε, of unobservable variables determined outside the model and a vector, Y ∗ , of unobservable
variables determined within the model. It also contained a vector, X, of observable variables
determined outside the model and a vector, Y, of observable variables determined within the
model. The relationship among the variables was described by means of a function v, that
depended on a vector of primitive functions, h0 , and primitive distributions, F0 . We assume
that the joint distribution, FY,X , of the vector (Y, X) of observable variables can be derived
from these primitives and the relationship determined by v.
    We will define an econometric model by a specification of the variables that are observed
and the variables that are unobserved, the variables that are determined within the model
and the variables that are determined outside of the model, the functional relationships
among all the variables, and the restriction that all functions and distributions in the model
are known to satisfy. We will denote a specification of a model by S, and we will denote by
S 0 the set of all vectors of functions and distributions that satisfy the restrictions imposed
by the model S. For any element ζ ∈ S 0 , we can derive the distribution, FY,X (·; ζ) , of the
observable variable that is generated by S 0 . The observable distribution, FY,X , corresponds
to the true value ζ ∗ of ζ. The objective of identification is to analyze the conditions under
which element of the economic model can be inferred from the distribution FY,X .
    The conditions for identification will depend, of course, on which particular elements of
the model one wants to infer. For example, in the model of utility maximization described
above, one may be interested in inferring the utility function, U, the demand function m, the
derivative ∂m/∂p, the distribution Fε , or any other elements of the model. The conditions
guaranteeing that one of these elements is identified may not always guarantee that some
other of the elements are also identified.

2.2.1. Examples



2.2.1.1. Additive Models
   In additive models, the unobservable variables that are determined outside the model
aﬀect the values of the variables that are determined within the model in an additive way.
A standard example of such a model is where Y denotes an observable dependent variable, X
denote a vector of observable explanatory variables, ε denotes an unobservable explanatory
variable, and the functional relationship between these variables is given by

                                        Y = Xβ ∗ + ε



                                              11
for some β ∗ . Allowing X to influence Y in a nonlinear, possibly unknown way, while leaving
the influence of ε additive, will also give rise to an additive model. In this latter case

                                           Y = g (X) + ε

for some function g. Typical restrictions that are imposed on such a model are that g is
continuous and that the distribution of ε given X has support R. Typically, one would like
to add the restriction that the distribution of (X, ε) is such that for all x, the conditional
expectation of ε given X = x is 0. In such a case g(x) denotes the conditional expectation
of Y given X = x, which is an object of main interest when one is interested in forecasting
the behavior of Y conditional on X.


2.2.1.2. Nonadditive Models
    When the unobservable random terms in an economic model have important interpre-
tations such as being variables representing tastes of consumers, or productivity shocks in
production functions, it is rarely the case that these unobservable random terms influence
the dependent variables in the model in an additive way. Nonadditive models allow the
unobservable variables that are determined outside the model to aﬀect the values of the
variables that are determined within the model in nonadditive ways.
    For a simple example, let Y denote an observable dependent variable, X denote a vector
of observable explanatory variables, and ε denote an unobservable explanatory variable. We
specify the functional relationship between these variables as

                                           Y = m (X, ε)

for some function m : RK × R → R. We may impose the restrictions that the function m is
strictly increasing in ε, for all values of X, and that the distribution, Fε,X , of (X, ε) is strictly
increasing over RK+1 . We may add the restriction that m is diﬀerentiable, or that X and
ε are distributed independently of each other. When the latter restriction is imposed, we
will call such model an Independent Nonadditive Model. An example of such a model could
be when X denotes hours of work of an individual, ε denotes the ability of the individual to
perform some task, and Y is output of the individual. For individuals with a same quantity
x of hours of work, output is higher when ability is higher.
    The additive model described in Section 2.2.1.1 is not necessarily in contradiction with
the nonadditive model. One can always express the model: Y = m (X, ε) as Y = g(X)+η,
where for each x, g(x) = E (Y |X = x) . In such case, the value of the additive unobservable
η has, by construction, conditional expectation equal 0, given X = x. The distribution of
η given X = x can be derived from the function m and the distribution of ε given X = x,
since by its definition, η = Y − E (Y |X = x) = m (X, ε) − g(x).
    A particular nonadditive model when m and ε are multivalued is the Triangular Non-
additive Model. In this model, Y ∈ (Y1 , ..., YG ) ∈ RG is a vector of observable endogenous
variables, X ∈ RK is a vector of observable explanatory variables, and ε ∈ RG is a vector of




                                                 12
unobservable variables. The functional relationship among the variables is specified as

                          Y1 = m1 (X, ε1 )
                          Y2 = m2 (X, Y1 , ε1 , ε2 )
                          Y3 = m3 (X, Y1 , Y2 , ε1 , ε2 , ε3 )
                               ·
                               ·
                               ·
                          YG = mG (X, Y1 , Y2 , · · ·, YG−1 , ε1 , ε2 , · · ·, εG )

One may impose the restriction that for all g, mg is strictly increasing in ε1 , ε2 , ..., εg , as
well as some other restrictions. A common example (see Imbens and Newey (2003) and
Chesher (2003)) is the model where Y2 denotes lifetime discounted income, Y1 denotes years
of education, X is a variable denoting the cost of education, ε1 is (unobserved) ability, and
ε2 is another unobservable variable that aﬀects income. Typically, X is an argument of the
function m1 but not of the function m2 .
    By recursively substituting the endogenous variables, in the above system of the equa-
tions, one can obtain an alternative description of that system in term of reduced form
equations, where each endogenous variable is solely determined by observable and unobserv-
able exogenous variables. This system has the form

                                    Y1 = h1 (X, ε1 )
                                    Y2 = h2 (X, ε1 , ε2 )
                                    Y3 = h3 (X, ε1 , ε2 , ε3 )
                                         ·
                                         ·
                                         ·
                                    YG = hG (X, ε1 , ε2 , · · ·, εG )

where h1 (X, ε1 ) = m1 (X, ε1 ) , h2 (X, ε1 , ε2 ) = m2 (X, Y1 , ε1 , ε2 ) = m2 (X, h1 (X, ε1 ) , ε1 , ε2 )
= h2 (X, ε1 , ε2 ) , and so on.

2.2.1.3. Nonadditive Index Models
    In many situations in economics, we might be interested in analyzing the eﬀect that some
vector of variables X has on a variable, Y, when the model establishing such a relationship
between X and Y is either very complicated or only vaguely known. If we can determine
that the eﬀect of X on Y is only through the value of an “index” function, h(X), we might
be able to determine many important properties of h even though we might not be able to
infer all the functions and distributions in the model.
    A simple example of a nonadditive index model is where Y denotes an observable de-
pendent variable, X denotes a vector of observable explanatory variables, and ε denotes an
unobservable explanatory variable. The functional relationship between these variables is
specified as
                                       Y = m (h(X), ε)

                                                     13
where m : R2 → R and h : RK → R. We may impose the restrictions that m is increasing
in each coordinate and h is continuous. If we impose the restriction that X and ε are inde-
pendently distributed, we will call it the Independent Nonadditive Index Model. Consider,
for example, a duration model, with a proportional hazard function, λ(t, x, ν), given by

                                    λ(t, x, ν) = r(t) eh(x)+ν

where x denotes the value of observable characteristics, X, ν denotes the value of an unob-
servable characteristic, and t denotes the time, Y, at which the hazard is evaluated. Suppose
that r is an unknown positive function over R+ , h is an unknown function over the support of
X, and ν is distributed independently of X. Such a model could describe a situation where Y
denotes the length of time that it takes an individual with observable characteristics, X, and
unobservable characteristic, ν, to find employment. When the probability-density of finding
employment at time t conditional on not having found employment yet is given by the above
specification for the hazard function, the model that describes the relation between Y and
X is
                                      Y = m (h(X), η + ν)
where η is extreme value, independent of (X, ν) . Moreover, m is strictly increasing in η + ν.

2.2.1.4. Nonadditive Simultaneous Equations Models
    In many economic models the values of the dependent variables are determined simulta-
neously. In the demand and supply model described at the end of Section 2.1, for example,
the equilibrium quantity, Q = Qd = Qs, and the equilibrium price are determined simultane-
ously. In most multidimensional optimization problems, such as those faced by a consumer
maximizing a utility function or by a multiproduct firm maximizing profits, the optimal
choices are also determined simultaneously. The analysis of simultaneous equations models
is typically more complicated than that of many other models because the unobservables
that aﬀect any one of the endogenous variables aﬀect, through the simultaneity, also the
other endogenous variables. Suppose, for example, that in the demand and supply example
described in Section 2.1, md is strictly increasing in εd and ms is strictly decreasing in εs .
Then, the system can be expressed as

                                     εd = r d (Q, P, I)
                                     εs = r s (Q, P, W )

where rd is the inverse function of md with respect to εd and r s is the inverse function of
   s
¡m withd respect
               ¢   to εs. Assuming that, for any value of the vector of exogenous variables,
             s
  I, W, ε , ε , this system of structural equations possesses a unique solution for (P, Q) , one
 can derive the reduced form system of the model, which can be expressed as
                                               ¡          ¢
                                     Q = h1 I, W, εd , εs
                                               ¡          ¢
                                     P = h2 I, W, εd , εs

This is in contrast to the reduced form system derived in the nonadditive triangular model,
where to each equation there corresponds only one new unobservable random term.
   When the structural equations in the simultaneous equations model above are linear in
the variables, as in the standard linear models for simultaneous equations, the reduced form

                                               14
equations turn out to be linear in the unobservables. In such case, to each reduced form
equation there will correspond a unique unobservable random term, which will enter the
equation in an additive way. The value of such unobservables will be functions of εd , εs and
of the coeﬃcients that appear in rd and r s . However, in the more realistic case where the
the structural equations are nonlinear, the reduced form equations could easily depend on
nonlinear, nonadditive functions of the unobservables εd and εs .
    We will consider below the nonadditive simultaneous equations model described by

                                           ε = r (Y, X)
where Y ∈ RG denote a vector of observable dependent variables, X ∈ RK denote a vector
of observable explanatory variables, and ε ∈ RL denote a vector of unobservable explanatory
variables. The function r : RG × RK → RL specifies the relationship between these vectors.
In our analysis of this model, we will impose the restriction that r is diﬀerentiable and is
such that for all values of (X, ε) , there is a unique Y satisfying the above equation. We
will also impose the restriction that X and ε are independently distributed with support
RK × RG .



3. Identification
3.1. Definition of identification
Following the description of an econometric model in Section 2, we denote the set of all
vectors of functions and distributions that satisfy the restrictions imposed by a model, S, by
S 0 . We denote any element in S 0 by ζ, and we denote the element of S 0 corresponding to the
vector of true functions and distributions by ζ ∗ . For any element ζ in S 0 , we will denote by
FY,X (·, ·; ζ) the distribution of the observable variables generated by ζ. The distribution of
the observable variables generated by ζ ∗ will be denoted by FY,X (·, ·; ζ ∗ ) or simply by FY,X .
     Given a model, S, with an associated vector of functions and distributions, ζ ∗ , and a
set S 0 of vectors of functions and distributions satisfying the same restrictions that ζ ∗ is
assumed to satisfy, we can ask what elements of ζ ∗ are uniquely determined from FY,X when
the only restriction imposed is that ζ ∗ belongs to S 0 . The analysis of identification studies
precisely this question.
      To provide a general analysis of identification, which allows one to study the identification
of a function as well as that of some particular feature of the function, we will let ψ∗ denote
the true value of some feature of ζ ∗ . This could be an element of ζ ∗ , or some other feature
such as, for example, the sign of the derivative of a particular function in ζ ∗ at a particular
value of its argument. We will denote by Ψ : S 0 → Ω the functional that maps each vector of
functions and distributions in S 0 to a value ψ of this feature. Given ψ, we define ΓY,X (ψ, S)
to be the set of all probability distributions of (Y, X) that are consistent with ψ and S.
Formally,                             ©                                      ª
                        ΓY,X (ψ, S) = FY,X (·, ·; ζ) | ζ ∈ S 0 and Ψ (ζ) = ψ
In other words, ΓY,X (ψ, S) is the set of all distributions of (Y, X) that are generated by
some vector of functions and distributions in S 0 and whose value of the element that we
want to infer is ψ. For example, when ψ denotes the sign of the derivative of a function in

                                                15
S 0 at a particular value of its argument, ΓY,X (ψ, S) is the set of all distributions that can be
generated from the model subject to the restrictions that the sign of the derivative of that
function at the particular value of its argument is ψ.
    We can now define identification of ψ∗ using the sets ΓY,X (·, S) .

Definition 1: ψ∗ ∈ Ω is identified in the model S if for any ψ ∈ Ω such that ψ 6= ψ ∗

                               [ ΓY,X (ψ, S) ∩ ΓY,X (ψ ∗ , S) ] = ∅


    In other words, we say that ψ∗ is identified if whenever ψ ∗ is changed to ψ, there are no
ζ, ζ ∈ S 0 such that Ψ(ζ) = ψ∗ , Ψ(ζ 0 ) = ψ, and for all (y, x) , FY,X (y, x; ζ) = FY,X (y, x; ζ 0 ) .
   0

An expression that is obviously equivalent to Definition 1 but that sometimes may be easier
to verify is the following

Definition 2: ψ ∗ ∈ Ω is identified in the model S if for any ψ ∈ Ω

                       ([ ΓY,X (ψ, S) ∩ ΓY,X (ψ∗ , S) ] 6= ∅) ⇒ [ψ = ψ ∗ ]



   This latter definition is satisfied, in particular, when one can show that ψ ∗ can be recov-
ered uniquely from any distribution in ΓY,X (ψ∗ , S) .


3.1.1. Examples



3.1.1.1. Additive Models
   Consider the additive model where Y denotes an observable dependent variable, X de-
notes a vector of observable explanatory variables, ε denotes an unobservable explanatory
variable, and for some function g∗ : RK → R

                                          Y = g ∗ (X) + ε

Impose the restriction that the function g is continuous, and that the distribution of (X, ε)
has support RK+1 . Then, the set of vectors of functions and distributions that satisfy
                                                                                   ³ the same
                                                                                            ´
restriction that g and the distribution of (X, ε) is assumed to satisfy is S = { ge, Feε,X |e
                   ∗                                                         0
                                                                                              g:
RK → R is continuous and Feε,X is a³ distribution
                                                ´     that has support RK+1 }. Let Ω denote
                                        g, Feε,X ∈ S 0 . That is, Ω is the set of all continuous
the set of all first coordinates of ζ = e
functions ge : RK → R. Then,

                                 (3.a)    ψ ∗ = g ∗ is not identified




                                                  16
Proof of (3.a): Let g ∈ Ω be such that g 6= g∗ . Let Fε,X   ∗
                                                               denote the true distribution of
                                               ∗         ∗
(ε, X) . Let Fε,X be defined by Fε,X (e, x) = Fε,X (e − g (x) + g(x), x) . Then, for any y, x

                      FY |X=x (y; g, Fε,X ) = Pr (Y ≤ y|X = x; g, Fε,X )

                                              = Pr (ε ≤ y − g(x)|X = x; g, Fε,X )

                                              = Fε|X=x (y − g(x))

                                                 ∗
                                              = Fε|X=x (e − g ∗ (x))

                                              = FY |X=x (y; g ∗ , Fε,X
                                                                   ∗
                                                                       )

This, together with the definition of Fε,X implies that
                                                        ¡                 ¢
                            FY,X (·, ·; g, Fε,X ) = FY,X ·, ·; g ∗ , Fε,X
                                                                      ∗


Hence, g ∗ is not identified.

    A possible easier way of seeing that g ∗ could not be identified in the above model was
by noticing that since the model imposed no restrictions on the distribution of ε, a constant
term in g ∗ could not be identified. Consider then the same model, but with the added
restriction
        ³ that´ the distribution of (X, ε) is such that E [ε|X = x] = 0 for all x. Then,
  0
S ={ e    g, Feε,X |e
                    g : RK → R is continuous, Feε,X is a distribution that has support RK+1
and is such that E [ε|X = x] = 0 for all x }. Let Ω be defined, again, as the set of continuous
functions ge : RK → R. Then,

                                      (3.b)    ψ ∗ = g ∗ is identified .


Proof of (3.b): We use Definition 1. Let e                  g ∈ Ω be such that e    g 6= g ∗ . Then, there ex-
ists x such that g ∗ (x) 6= e        g(x). By continuity of g ∗ and      ¡ eg , for       0
                                                                                  ¢ all x0 in some neighbor-
                     0           0                             ∗
hood of x, g(x ) 6= e        g (x ). For any vectors (g , Fε,X ) , e      g, Fε,X ∈ S , and any such x0 ,
                                                                               0

the distribution of Y given X = x0 has¡ conditional              ¢      expectation g ∗ (x0 ) under (g∗ , Fε,X )
and conditional expectation e          g (x0 ) under e       0
                                                        g, Fε,X    . By the support condition, which guar-
antees that the neighborhood       ¡   composed ¢   of all such    x0 has positive probability, it follows that
FY,X (·, ·; g ∗ , Fε,X ) 6= FY,X ·, ·; ge, Fε,X
                                              0
                                                  . Hence, by Definition 1, g is identified.

   In the proof of (3.b), we used Definition 1. We can have also used Definition 2 to show
that g∗ is identified. This can be done by noticing that from the distribution FY,X of the
observable variables, we can calculate g ∗ (x), for all x, since

                                E [Y |X = x] = g ∗ (x) + E [ε|X = x]

                                                 = g ∗ (x)

                                                      17
                ∗
Hence, letting fY,X denote the probability density of (Y, X) , we can uniquely recover g ∗ by
                                         R      ∗
                                  ∗
                                            y fY,X (y, x) dy
                                 g (x) =  R    ∗
                                                             .
                                             fY,X (y, x) dy

    In this same model, we could have defined Ω to be the set of pairs (e  g, Fε,X ) such that
     K                                                                   K+1
e
g : R → R is continuous and Fε,X is a distribution that has support R        and is such that
E [ε|X = x] = 0 for all x. It is easy to see that then
                                         ¡        ¢
                          (3.c) ψ∗ = g ∗ , Fε,X∗
                                                    is also identified .



Proof of (3.c): We have already established that g ∗ is identified. We will use Definition 2
              ∗
to show that Fε,X is identified. For this, we first note that since
                           FY |X=x (y) = Pr (Y ≤ y|X = x)

                                        = Pr (g ∗ (X) + ε ≤ y|X = x)

                                        = Pr (ε ≤ y − g ∗ (x) |X = x)

                                           ∗
                                        = Fε|X=x (y − g∗ (x))
diﬀerentiating both sides with respect to y and letting e = y − g ∗ (x), we get that for any
(x, e)
                             ∗             ∗
                            fX,ε (x, e) = fε|X=x (e) fX∗ (x)

                                         = fY∗ |X=x (g ∗ (x) + e) fX∗ (x)
Hence, for any (x, e)
                       ∗
                      FX,ε (x, e) = Pr (X ≤ x, ε ≤ e )
                                      Z Z
                                              ∗
                                  =          fX,ε  x, e
                                                  (e  e) de
                                                          x de
                                      Z Z
                                  =          fY∗ |X=ex (g(e
                                                          x) + e) fX∗ (x) de
                                                                           x de
                               ¡           ¢
It follows by Definition 2 that g ∗ , FX,ε
                                       ∗
                                             is identified.

    Suppose that we restricted the model further, by imposing the parametric structure that
for some β ∗ and all x, g ∗ (x) = xβ ∗ . Then, since we have determined above that g ∗ and Fε,X
                                                                                            ∗
                                                      ∗
are identified in the less restrictive model where g is only assumed to be continuous, we can
immediately determine that g∗ and Fε,X    ∗
                                             are identified in this more restrictive model.


                                                 18
3.1.1.2. Nonadditive Models
    Consider a nonadditive model where Y is an observable dependent variable, X is a vector
of observable explanatory variables, ε is an unobservable random term explanatory variable,
and for some function m∗ : RK × [0, 1] → R,

                                          Y = m∗ (X, ε)
                                                                              0        0
Restrict
 ³       the
          ´ functions and distributions in this model to belong to the set S , where S =
   e Feε,X | m
{ m,          e : RK × [0, 1] → R is strictly in its last coordinate and Fε,X is a strictly
                                                                      ³         ´
increasing distribution over RK+1 . Let Ω denote the set of pairs m,    e Feε,X such that
³        ´
  m, e
  e Fε,X ∈ S 0 . Then,
                                        ¡          ¢
                           (3.d)    ψ∗ = m∗ , Fε,X
                                               ∗
                                                     is not identified .


                                    e by
Proof of (3.d): Define the function m

                                       e (x, ε) = FY−1|X=x (ε)
                                       m

and define the distribution Feε,X by

                                       Feε,X (e, x) = e FX (x)

Let me −1 denotes the inverse of the function m
                                              e with respect to its last coordinate. For all
(y, x)
                       ³           ´        ³                      ´
                           e Feε,X
               FY |X=x y; m,         = Pr Y ≤ y|X = x; m,  e Feε,X
                                               ³                               ´
                                        = Pr m                   e Feε,X
                                             e (x, ε) ≤ y|X = x; m,
                                            ³                                ´
                                        = Pr ε ≤ m                   e Feε,X
                                                 e −1 (x, y) |X = x; m,

                                                 ¡ −1      ¢
                                        = Feε|X=x m
                                                  e (x, y)

                                          e −1 (x, y)
                                        = m

                                        = FY |X=x (y)

                                                 ¡             ¢
                                        = FY |X=x y; m∗ , Fε,X
                                                           ∗


where for the equalities, we have used the definition of FY |X , the strict monotonicity of
me (second and third equalities), the definition of Feε|X=x³, the specification
                                                                        ´       of Feε|X=x , the def-
                                                                                     ¡            ¢
            e and the definition of FY,X . Since FY |X=x y; m,
inition of m,                                                   e Feε,X = FY |X=x y; m∗ , Fε,X  ∗
                                                                                                    ,
                                  ∗
                                      ¡ ∗ ∗ ¢
it follows by Definition 2 that ψ = m , Fε,X is not identified.

                                                 19
    In the above nonadditive model, we could consider identification of the derivative of m
with respect to x at a particular value of (X, ε). Specifically, fix the value of (X, ε) at
(x, ε) . Let Ω denote the set of all values that ∂m (x, ε) /∂x may attain. We next show that

                       (3.e)    ψ ∗ = ∂m (x, ε) /∂x is also not identified .


Proof of (3.e): Note that the strict monotonicity of m with respect to ε implies that for all
(x, e)

                        ∗
                       Fε|X=x (e) = Pr (ε ≤ e|X = x)

                                    = Pr (m∗ (X, ε) ≤ m∗ (x, e) |X = x)

                                    = Pr (Y ≤ m∗ (x, e) |X = x)

                                 = FY |X=x (m∗ (x, e))
                                  ¡          ¢
   Hence, the relationship between m∗ , Fε,X
                                         ∗
                                               and FY,X is given by
                                                     ¡ ∗         ¢
                                 m∗ (x, e) = FY−1|X=x Fε|X=x (e)
Diﬀerentiating with respect to x, we get

                      ∂m∗ (x, ε)   ∂FY−1|X=x (t)
                                 =               |t=Fε|X=x
                                                     ∗     (ε)
                        ∂x               ∂x
                                           ∂FY−1|X=x (t)                     ∗
                                                                           ∂Fε|X=x (ε)
                                       +                   |t=Fε|X=x (ε)
                                                ∂t                             ∂x
This states that the derivative of m∗ with respect to x is determined by two terms. The
first one is determined by the change in the conditional distribution of Y given X, as the the
value of X varies while the value of Y stays fixed. The second term is determined the change
in this conditional distribution as the value of Y changes while the value of X stays fixed,
and by the change in the conditional
                             ³        ´ distribution of ε given X as the value of X changes.
We will now specify a pair m,  e Feε,X ∈ S 0 that generates the same distribution of (Y, X) as
¡ ∗ ∗ ¢
  m , Fε,X does, but it is such that ∂ m e (x, ε) /∂x 6= ∂m∗ (x, ε) /∂x. Since this implies then
that Γ (∂ me (x, ε) /∂x, S) ∩ Γ (∂m∗ (x, ε) /∂x, S) 6= ∅, it follows that ∂m∗ (x, ε) /∂x is not
                                                                         ∗
identified. Assume that fY |X=x is everywhere positive and that ∂Fε|X=x       (ε) /∂x 6= 0. The
particular properties of Feε,X will be that ∂F ∗     (ε) /∂x = 0 while F ∗
                                                     ε|X=x                     (ε) = Feε|X=x (ε) .
                                                                                    ε|X=x
Specifically, let Feε|X be defined for all (x, e) by

                                      Feε|X=x (e) = Fε|X=x
                                                     ∗
                                                           (e),
           e by
and define m

                                                     20
                                                    ¡ ∗         ¢
                                 e (x, ε) = FY−1|X=x Fε|X=x
                                 m                          (ε)
             ³       ´                                             ¡        ¢
     Then, m,    e
               e Fε|X generate the same distribution of (Y, X) as m∗ , Fε,X
                                                                        ∗
                                                                              . But, since
∂ Feε|X=x (e)/∂x = ∂Fε|X=x (e)/∂x = 0 and Feε|X=x (e) = Fε|X=x (e)


                      e (x, ε)
                     ∂m          ∂FY−1|X=x (t)
                               =               |t=Feε|X=x (ε)
                       ∂x             ∂x
                                           ∂FY−1|X=x (t)                     ∂ Feε|X=x (ε)
                                       +                    |t=Feε|X=x (ε)
                                                ∂t                                 ∂x
                                       ∂FY−1|X=x (t)
                                  =                       |t=Fε|X=x (ε)
                                             ∂x
                                       ∂m∗ (x, ε)
                                  6=
                                         ∂x
   Hence, ∂m (x, ε) /∂x is not identified..

    In the additive model, we saw that restricting the value of the conditional expectation
of ε given X allowed us to identify all the functions and distributions in the model. In the
nonadditive model, however, this is no longer enough. We might wonder whether imposing
independence between X and ε will allow us to identify the functions and distributions in
the model. We next show that

                       (3.f )    in the Independent Nonadditive Model,
                                      ¡        ¢
                                ψ∗ = m∗ , Fε,X
                                            ∗
                                                 is not identified .

Proof of (3.f): Let g : [0, 1] → [0, 1] be a strictly increasing function, diﬀerent from the
                                       e by
identity function. Define the function m

                                       e (x, ε) = m (x, g(ε))
                                       m

and define the distribution Feε,X by

                                    Feε,X (e, x) = Fε,X (g(e), x)




                                                     21
Then, for all (y, x)
                         ³           ´     ³                     ´
                             e Feε,X
                  FY |X=x y; m,                          e Feε,X
                                       = Pr Y ≤ y|X = x; m,
                                               ³                              ´
                                        = Pr m                   e Feε,X
                                             e (x, ε) ≤ y|X = x; m,
                                            ³                                ´
                                        = Pr ε ≤ m                   e Feε,X
                                                 e −1 (x, y) |X = x; m,

                                                 ¡ −1      ¢
                                        = Feε|X=x m
                                                  e (x, y)

                                           ∗
                                        = Fε|X=x    e −1 (x, y)))
                                                 (g(m

                                           ∗
                                                        ¡           ¢
                                        = Fε|X=x (g(g −1 m∗−1 (x, y) ))

                                           ∗
                                        = Fε|X=x (m∗−1 (x, y))

                                        = FY |X=x (y)

                                                 ¡             ¢
                                        = FY |X=x y; m∗ , Fε,X
                                                           ∗


where m e −1 denotes the inverse of the function m e ³with respect
                                                                 ´ to its last coordinate. The
equalities above follow by the definition of FY |X=x ·; m,   e
                                                         e Fε,X , the definition of Y under
³         ´
  e Feε,X , the strict monotonicity of m,
 m,                                     e the definition of Feε|X=x , the specification of Feε|X=x ,
                      e the fact that g ◦ g −1 is the identity function, the relationship between
the specification of m,
the function
        ³      and distributions
                    ´            in the model, and the definition of FY,X . Since for all y, x,
                                 ¡            ¢                                     ¡         ¢
FY |X=x y; m,e Feε,X = FY |X=x y; m∗ , Fε,X∗
                                                , Definition 2 implies that ψ ∗ = m∗ , Fε,X∗
                                                                                                is
not identified.


3.1.1.3. Nonadditive Index Models
   Consider the model,
                               Y = m (h(X), ε)
where Y denotes an observable dependent variable, X denote a vector of observable ex-
planatory variables, ε denotes an unobservable explanatory variable, m : R2 → R , and
h : RK → R. We will impose the restrictions that m : R2 → R is increasing in each coordi-
nate and non-constant, h : ³RK → R is continuous,
                                         ´         and Feε,X is a distribution with support
RK × [0, 1]. Hence, S 0 = { eh, Feε,X , m  e : R2 → R is increasing in each coordinate and
                                        e |m
non-constant, e
              h : RK → R is continuous, and Feε,X is a distribution with support RK ×[0, 1]}.
Let Ω denote the set of functions e
                                  h : RK → R. Then,

                                (3.g)   ψ ∗ = h is not identified .

                                                22
Proof of (3.g): Let g : R → R be a strictly increasing function diﬀerent from the identity
function. Let e                 e (t, ε) = m (g−1 (t), ε) . Then for all (x, ε) ,
              h = g ◦ h and let m
                             ³        ´        ³      ³      ´ ´
                          me e h(x), ε = m g −1 e       h(x) , ε

                                               ¡                   ¢
                                            = m g −1 (g(h(x))) , ε

                                           = m (h(x), ε)
                                                   ³          ´
Hence, the distribution of (Y, X) generated by m,    e e
                                                       h, Fε,X is the same as the distribution
of (Y, X) generated by (m, h, Fε,X ) . It follows that h is not identified.


3.1.1.4. Nonadditive Simultaneous Equations Models
   Consider the simultaneous equations model, where Y ∈ RG denotes a vector of observable
dependent variables, X ∈ RK denotes a vector of observable explanatory variables, ε ∈ RL
denotes a vector of unobservable explanatory variables, and the relationship between these
vectors is specified by a function r : RG × RK → RL such that

                                           ε = r (Y, X)

Impose the restriction that r is diﬀerentiable and is such that for all values of (X, ε) , there
is a unique Y satisfying the above equation. Impose also the restriction that X ³and ε are    ´
independently distributed with support RK ×RG . Let Ω denote the set of all pairs re, Feε,X ,
where re : RG × RK → RL is a diﬀerentiable function such that for each (X, ε) , there is a
unique value of Y satisfying re (Y, X) = ε, and where FeX,ε is a distribution function with
support RK × RG . Then,

                           (3.h)    ψ ∗ = (r, Fε,X ) is not identified .

Proof of (3.h): Let g:RL → RL be a 1-1 function. Define e             ε = g (ε) and re(Y, X) =
g (r (Y, X)) . Then, re satisfies all the properties of the functions in the structure. Since e ε
is a function of ε and ε is distributed independently of X, e   ε is distributed independently of
X. For all (y, x)

                                                ¯           ¯
                                                ¯ ∂r (y, x) ¯
                  fY |X=x (y) = fε (r (y, x)) ¯¯            ¯
                                                     ∂y ¯
                                                    ¯               ¯¯            ¯
                                                    ¯ ∂g (r (y, x)) ¯ ¯ ∂r (y, x) ¯
                              = feε (g (r (y, x))) ¯¯               ¯¯
                                                                    ¯ ¯ ∂y ¯
                                                                                  ¯
                                                           ∂ε
                                                    ¯            ¯
                                                    ¯ ∂e
                                                       r (y, x) ¯¯
                              = feε (g (r (y, x))) ¯¯
                                                         ∂y ¯

                                                 23
    The first and second equalities follow by using the standard equation to calculate the
density of a 1-1 function of random variables. The first equality uses the relationship ε =
r (y, x) to specify how to calculate the conditional density of Y given X, when fε and r are
given. The second equality uses the relationship e     ε = g(ε) to specify how to calculate the
density of ε when the density of e   ε and g are given. The third equality follows because the
invertibility of re, g and r, and the relationship re (y, x) = g (r (y, x)) implies that

        ¯           ¯ ¯               ¯ ¯                         ¯ ¯               ¯¯            ¯
        ¯ ∂e
           r (y, x) ¯ ¯ ∂g (r (y, x)) ¯ ¯ ∂g (r (y, x)) ∂r (y, x) ¯ ¯ ∂g (r (y, x)) ¯ ¯ ∂r (y, x) ¯
        ¯           ¯ ¯               ¯=¯                         ¯=¯               ¯¯            ¯
        ¯ ∂y ¯ = ¯           ∂y       ¯ ¯      ∂ε          ∂y ¯ ¯          ∂ε       ¯ ¯ ∂y ¯

Since
                                                           ¯           ¯
                                                           ¯ ∂r (y, x) ¯
                             fY |X=x (y) = fε (r (y, x)) ¯¯            ¯
                                                                ∂y ¯
                                                               ¯            ¯
                                                               ¯ ∂e
                                                                  r (y,  x) ¯
                                         = feε (g (r (y, x))) ¯¯            ¯
                                                                    ∂y ¯

 it follows that the distribution of (Y, X) generated by (e
                                                          r , Feε,X ) is the same as that generated
by (r, Fε,X ) . Hence, (r, Fε,X ) is not identified.



4. Means of achieving identification

   As we saw in some of the examples above, we may not always be able to identify one
or more elements of interest in an economic model, from the distribution of the observable
variables in the model. In some cases, we saw that after imposing additional restrictions in
a model, we were able to achieve identification of some elements of the model. In others, we
considered identification of a diﬀerent element of the model. In this section, we will discuss
these and other methods for achieving identification.



4.1. Identification of features of functions
When the identification of an element ψ ∗ in a model is not possible, one may consider
analyzing the identification of a diﬀerent element of the model. For example, instead of
being interested in identifying a function, we may want to identify either an upper or a lower
bound of the function, or the derivative of the function at only one point, or even just the
sign of the derivative. Formally, suppose that in an econometric model, S, with an element
U ∗ that belongs to a set Ω, it is the case that for some U ∈ Ω, such that U 6= U ∗

                                   ΓY,X (U, S) ∩ ΓY,X (U ∗ , S) 6= ∅

In such a model, U ∗ is not identified. Let Ξ(U ∗ ) denote some feature of U ∗ , such as the
upper and lower bounds of the values of U ∗ . Define Ω0 to be the set of all possible values
that Ξ(U) may attain when U ∈ Ω. To each element of Ω0 there correspond a set of elements

                                                    24
of Ω. Hence, Ω0 is "smaller" than Ω. It may then be possible that Ξ(U ∗ ) is identified in Ω0 ,
when U ∗ is not identified in Ω.


4.1.1. Examples



4.1.1.1. Identification of derivatives in Nonadditive Models
   Consider the Independent Nonadditive Model. We saw in Section 3.1.1.2 that ψ ∗ =
(m, Fε,X ) is not identified. Maintaining the same structure, fix the value of (Y, X) at (y ∗ , x∗ ) ,
and let ε∗ be such that y ∗ = m (x, ε∗ ) . Let Ω0 denote the set of all values that ∂m (x∗ , ε∗ ) /∂x
may attain. Then,
                            (4.a) ψ ∗ = ∂m (x∗ , ε∗ ) /∂x is identified .

Proof of (4.a): We follow closely Matzkin (1999) and Chesher (2003). Note that by inde-
pendence between X and ε and the strict monotonicity of m,

                         Fε (ε∗ ) = Fε|X=x∗ (ε∗ )

                                  = Pr (ε ≤ ε∗ |X = x∗ )

                                  = Pr (m (X, ε) ≤ m (x∗ , ε∗ ) |X = x∗ )

                                  = Pr (Y ≤ m (x∗ , ε∗ ) |X = x∗ )

                                  = FY |X=x∗ (m (x∗ , ε∗ ))

Taking derivatives with respect to x, on both sides, we get that

                                   ∂FY |X=x∗ (t)
                           0 =                   |t=m(x∗ ,ε∗ )
                                        ∂x
                                      ∂FY |X=x∗ (t)               ∂m (x∗ , ε∗ )
                                  +                 |t=m(x∗ ,ε∗ )
                                           ∂t                        ∂x
Hence, the derivative
                                        ·                 ¸
                        ∂m(x∗ , ε∗ )      ∂FY |X=x∗ (y ∗ ) −1 ∂FY |X=x∗ (y ∗ )
                                     =−
                           ∂x                   ∂y                  ∂x

is uniquely derived from the distribution FY,X of the observable variables.




                                                   25
4.1.1.2. Identification of finite diﬀerences in Nonadditive Models
    Consider again the Independent Nonadditive Model. Rather than considering the identi-
fication of an infinitessimal change, we may be interested in the identification of a discrete
change. That is, fix the value of (Y, X) at (y ∗ , x∗ ) , and let ε∗ be such that y ∗ = m (x∗ , ε∗ ) . We
are interested in the value of y 0 − y ∗ where y 0 = m(x0 , ε∗ ). This is the eﬀect on Y of chang-
ing the value of X from x∗ to x0 , while leaving the value of the unobservable variable, ε,
unchanged. Let Ω0 denote the set of all values that y 0 − y ∗ may attain. Then,
                        (4.b)    ψ∗ = m(x0 , ε∗ ) − m (x∗ , ε∗ ) is identified .


Proof of (4.b): To prove this, note that, using the same arguments as those used in the
previous subsection, the independence between X and ε and the strict monotonicity of m
imply that
                               Fε (ε∗ ) = FY |X=x∗ (m (x∗ , ε∗ ))
and, similarly, that
                                    Fε (ε∗ ) = FY |X=x0 (m (x0 , ε∗ ))
The strict monotonicity of FY |X=x0 then implies that
                         y 0 − y ∗ = m (x0 , ε∗ ) − y ∗
                                   = FY−1|X=x0 (Fε (ε∗ )) − y ∗
                                               ¡                      ¢
                                   = FY−1|X=x0 FY |X=x∗ (m (x∗ , ε∗ )) − y ∗
                                               ¡                ¢
                                   = FY−1|X=x0 FY |X=x∗ (y ∗ ) − y ∗
Hence, the change in the value of Y when X is changed from x∗ to x0 is identified.


4.1.1.3. Identification of average derivatives in Nonadditive Models
    Consider again the Independent Nonadditive Model, as in 4.1.1.1. Let Ω denote the set
of all possible values that the average derivative, defined by
                                         Z
                                            ∂m (x, ε)
                                 β(x) =                fε (ε) dε
                                               ∂x
may attain. As in Altonji and Matzkin (1997), we note that
                                              Z
                       ∂E [Y |X = x]       ∂
                                      =          m (x, ε) fε(ε) dε
                             ∂x           ∂x
                                          Z
                                              ∂m (x, ε)
                                      =                 fε (ε) dε
                                                 ∂x

                                          = β(x)
                        ¡R               ¢ ¡R              ¢
Since E [Y |X = x] =      yfY,X (y, x) dy / fY,X (y, x) dy is uniquely determined from the
distribution, FY,X , of the observable variables, its derivative is uniquely determined also.
Hence, the average derivative of m(x, e) with respect to x is identified.



                                                   26
4.2. Imposing Restrictions
When some object of interest in a model is not identified, we may consider imposing more
restrictions on the functions or distributions in the model.


4.2.1. Examples



4.2.1.1. Nonadditive Model with Separability
    Suppose that in addition to the restrictions that were imposed in the Nonadditive Model,
we assume that ε interacts with one of the coordinates of X in a known form and that,
conditional on this coordinate of X, ε is distributed independently of the other coordinates.
Formally, let X = (X−K , XK ) ∈ RK where XK denotes the last coordinate of X and X−K
denotes the subvector of all coordinates of X other than the last one. Suppose that for some
known function q : R2 → R and for some function r : RK → R, that is strictly increasing in
its last coordinate
                                m (X, ε) = r (X−K , q (XK , ε))
Assume, further that the dependence between ε and X is such that ε is independent of X−K ,
conditional on XK = xK . Then, one can identify the function m and the distribution of
ε given X, up to the conditional distribution of ε given XK = xK . The following theorem
presents one such result

Theorem (Matzkin (2004): If Fε|XK =xK and FX−K |XK =xK are strictly increasing, m is
strictly increasing in ε, and Fε|XK =xK = Fε|X−K ,XK =xK , then
                                                      ¡                ¢
                      m (x, e) = FY−1|X−K =x−K ,XK =xK Feε|XK =xK (e∗ ) , and
                                        ³                     ¡               ¢´
                 Feε|X=x (e) = FY |X=x FY−1|X−K =x−K ,XK =xK Feε|XK =xK (e∗ )
where e∗ is any value of e
                         ε such that q (xK , e∗ ) = e.



4.2.1.2. Nonadditive Model with Local Independence
    Chesher (2003) used a local insensitivity assumption to achieve local identification of the
partial derivatives of structural functions in a triangular system of equations. To demon-
strate a simple version of this restriction, consider a nonadditive model, specified as

                                         Y = m (X, ε)

where m is strictly increasing in ε. Suppose that we were interested in inferring the partial
derivative of m with respect to X. We saw in 3.1.1.2 that

                                  FY |X (m (X, ε)) = Fε|X (ε)

and that diﬀerentiation with respect to x yielded

                                               27
                     ∂m (x, ε)   ∂FY |X=x (t)
                               =              |t=m(x,ε) ·
                       ∂x             ∂t
                                 "                            ∗
                                                                        #
                                   ∂FY |X=x (t)             ∂Fε|X=x (ε)
                                                |t=m(x,ε) −
                                        ∂x                      ∂x

Assuming the local insensitivity assumption that at x = x and ε = ε,
                                          ∗
                                        ∂Fε|X=x (ε)
                                                        =0
                                               ∂x
and assuming the value of m (x, ε) is known, it follows that the derivative with respect to x
is identified at (x, ε) .


4.2.1.3. Nonadditive Index Models with restrictions on distributions
   Consider the Nonadditive Index Model

                                        Y = m (h(X), ε)

with m : RK+1 → R increasing in its arguments and nonconstant, and h a continuous and
homogenous of degree one function that achieves the value α at x and is strictly increasing
in the last coordinate of X. Assume, further, that the last coordinate of X s restricted
to possess an absolutely continuous distribution, with unbounded support, conditional on
the other coordinates of X. Matzkin (1991) showed that, in this model, if ε is distributed
independently of X, the function h is identified.
     One could easily modify the arguments in Matzkin (1991) to allow ε to be dependent on
X, by restricting the distribution of (ε, X) appropriately. In particular, impose all the above
restrictions except for the independence between ε and X. Suppose that the distribution of
ε given X depends on X only through the value of the index function h(x), and that for all
x0 , x00
                   h (x0 ) < h(x00 )  ⇒ for all e, Fε|h(x0 ) (e) > Fε|h(x00 ) (e)
Then,
                                     (4.c)      h is identified.



Proof of (4.c): Suppose that e
                             h 6= h. Then, there exists x such that

                                             e
                                             h (x) 6= h(x)

Suppose without loss of generality that e h (x) < h(x). By the homogeneity of degree one
assumption, there exists x = λx such that e
                          ∗
                                            h (x) < e
                                                    h (x∗ ) = h (x∗ ) < h(x). By the continuity
of e
   h and h, the strict monotonicity in XK and the assumption on the distribution of X,
there exists neighborhood N, N ∗ of x, x∗ such that for all x0 ∈ N, x00 ∈ N ∗ , e
                                                                                h (x0 ) < e
                                                                                          h (x00 )


                                                  28
and h (x0 ) > h (x00 ) . By assumption, it then follows that for all Fε,X , Feε,X and all m, m
                                                                                             e
satisfying the restrictions of the model

                      Fε|X=x00 (e) > Fε|X=x0 (e)            &        Feε|X=x00 (e) > Feε|X=x0 (e),




Pr {(ε0 , ε00 ) | (m (h (x0 ) , ε0 ) > m (h (x00 ) , ε00 ))} > Pr {(ε0 , ε00 ) | (m (h (x0 ) , ε0 ) < m (h (x002 ) , ε00 ))}

and

  n             ³ ³             ´    ³               ´´o     n             ³ ³             ´    ³                ´´o
                 e e
Pr (ε0 , ε00 ) | m                 e e
                    h (x0 ) , ε0 < m  h (x00 ) , ε00                        e e
                                                         > Pr (ε0 , ε00 ) | m                 e e
                                                                               h (x0 ) , ε0 > m   h (x00 ) , ε00

In other words,

                     Pr (y 0 > y 00 |x0 , x00 ; h, m, Fε,X ) > Pr (y 0 < y 00 |x0 , x00 ; h, m, Fε,X )

and                   ³                                 ´    ³                                  ´
                    Pr y 0 > y 00 |x0 , x00 ; e  e Feε,X < Pr y 0 < y 00 |x0 , x00 ; e
                                              h, m,                                     e Feε,X
                                                                                     h, m,
Hence, either
                                                                 ³                                  ´
                    Pr (y 0 > y 00 |x0 , x00 ; h, m, Fε,X ) 6= Pr y 0 > y 00 |x0 , x00 ; e  e Feε,X
                                                                                         h, m,
or                                                               ³                                  ´
                    Pr (y 0 < y 00 |x0 , x00 ; h, m, Fε,X ) 6= Pr y 0 < y 00 |x0 , x00 ; e  e Feε,X
                                                                                         h, m,
Either case implies that the distribution of Y, X under h, m, Fε,X is diﬀerent from the dis-
tribution of Y, X under e    e Feε,X . Hence, h is identified.
                          h, m,

   (See Abrevaya (2000) and Das (2001) for nonadditive models with linear parametric in-
dices and unobservable random terms that are not independent of the observable explanatory
variables.)


4.2.2. Observational Equivalence
When one is considering imposing additional restrictions in a structure, with the objective of
trying to achieve identification, one may be interested in determining first the minimal set of
conditions under which identification may be achieved. A technique that is often useful for
this proceeds by determining first the sets of observationally equivalent elements within Ω.
To describe this procedure, suppose that one is interested in identifying a function within
a model, and under the restrictions imposed in the model, the function is not identified
within a specified set of functions. One may then consider partitioning this specified set of
functions in such a way that all elements within a set will generate the same distribution of
observable variables, but elements from diﬀerent sets will generate diﬀerent distributions of
observable variables. We would then say that the elements in each set of the partition are

                                                            29
observationally equivalent between them, while elements from diﬀerent sets in the partition
are not observationally equivalent. If we can partition the original set in this way, then, what
remains to do to achieve identification is to define a set composed of only one element from
each set in the partition. By construction, the new set, composed of the "representatives"
of each partition will be such that the representative of the true function will be identified.
In a parametric setup, this is usually done by normalizing the value of some parameter. For
example, in the model
                                       Y = α + Xβ + ε
where ε is independent of X, and α, β, and E (ε) = µ are unknown, one can not identify
the vector (α, µ) within R2 . However, if we consider the set { (α, µ) ∈ R2 | µ = 0} then the
vector is identified within this set.
   We next examine the concept of observational equivalence, and describe some results
on observationally equivalent sets for some of the examples that we have considered in the
previous sections.

Definition 3: ψ∗ , ψ ∈ Ω are observational equivalent in the model S if

                               [ΓY,X (ψ, S) ∩ ΓY,X (ψ ∗ , S)] 6= ∅

   We can use this terminology to define again identification.

Definition 4: ψ∗ ∈ Ω is identified in the model S if no ψ ∈ Ω such that ψ 6= ψ∗ is
observationally equivalent to ψ ∗ .


4.2.2.1. Restrictions Derived from Observational Equivalence

   4.2.2.1.1. Independent Nonadditive Model
                                                       e ∈ Ω, m
   Matzkin (2003, Lemma 1) establishes that for all m, m      e and m are observationally
equivalent iﬀ for some strictly increasing g : R → R,

                                    e (X, ε) = m (X, g(ε))
                                    m


This implies that we can partition Ω is such a way that, for any particular set in the partition,
any two elements, m and m    e in that set, satisfy the above relationship for some strictly
increasing g. Hence, to obtain a set Ω∗ where no two functions are observationally equivalent,
we just need to specify a unique g. Since, for all g

                                       Y = m (X, g(ε))

we have that
                                      g(ε) = m−1 (X, Y )
where m−1 denotes the inverse of m with respect to its last coordinate. Hence, allowing only
one g from each observational equivalence class, is equivalent to restricting Ω∗ to be a set

                                               30
such that no two elements m−1 and me −1 is that set are strictly increasing transformatios of
each other. Matzkin (2003) considers three such possibilities. The first one, described next,
is just a normalization.

   Let x be a specified value of X, and let Ω∗ = {m−1 | m−1 (x, y) = y} . Hence, all functions
in Ω∗ satisfy
                                         m (x, ε) = ε
                         e ∈ Ω∗ such that for all x, ε
If there were a g and an m

                                     e (x, ε) = m (x, g(ε))
                                     m
substituting x = x, one would get that

                                  e (x, ε) = m (x, g(ε)) = g(ε)
                                ε=m
This could only be satisfied if g is the identity function. Hence, any function generated from
a g that is diﬀerent from the identify function will not belong to Ω∗ . It then follows that m
is identified in Ω∗ .


    In some cases, we may use economic theory to derive restrictions on Ω that will be satis-
fied by only one of the representatives in the equivalence classes. Suppose that the function
m is the profit function of a firm in a perfectly competitive environment, and suppose that
(x, ε) is the vector of prices. Then, economic theory implies that m is homogenous of degree
one in (x, ε) . Matzkin (2003) shows that this restriction together with a normalization that
specified the value of m at one point (x, ε) is enough to guarantee that only one representa-
tive in each equivalence class will satisfy these restrictions. To see this, suppose that Ω is
the set of all functions that are homogeneous of degree one and satisfy me (x, ε) = α. Suppose
that for some g and m   e ∈Ω
                                     me (x, ε) = m (x, g(ε))
Substituting x = x and ε = ε, and using the homogeneity of degree one assumption and the
assumption that me (x, ε) = α, we get that for all λ ∈ R

                                  e (λx, λε) = m (λx, g(λε))
                                  m
Since
                                 e (λx, λε) = λ m
                                 m              e (x, ε) = λα
and
                                  m (λx, λε) = λm (x, ε) = λα
this implies that, for all λ,
                                  m (λx, g(λε)) = m (λx, λε)
Since m is strictly increasing in its last coordinate, this implies that for all λ,
                                           g(λε) = λε
Hence, g is the identity function.


                                               31
     4.2.2.1.2. Independent Nonadditive Index Model
     Consider the Nonadditive Index Model

                                                  Y = m (h(X), ε)

where h is an unknown, continuous function, strictly increasing with respect to its last
coordinate; the support of X is RK , m is strictly in both coordinates, and ε is distributed
independently of X with an everywhere positive density. We can establish the following:

Theorem: h is observationally equivalent to h∗ if and only if there exists a strictly increasing
function g : R → R such that h = g ◦ h∗ .

Proof: If for all x, h(x) = g (h∗ (x)) . Then, letting m
                                                       e (t, e) = m (g −1 (t) , e) , it follows that
for all x, e
                                               ¡                    ¢
                          e (h(x), e) = m
                          m                 e g −1 (g (h∗ (x))) , e

                                                     = m (h∗ (x), e)

Hence, for any distribution, Fε, FY,X (·, ·; h∗ , m, Fε ) = FY,X (·, ·; h, m,
                                                                           e Fε ) . It follows that
Γ (h∗ , m, Fε ) ∩ Γ (h, m,
                        e Fε ) 6= ∅.
    On the other hand, suppose that there exist no strictly increasing g such that h = g ◦ h∗ ,
then, there must exist x0 , x00 such that

                                    h (x0 ) < h (x00 )    and h∗ (x0 ) > h∗ (x00 )

                           e m, for all ε
By the monotonicity of any m,

                  e (h(x0 ), ε) < m
                  m               e (h(x00 ), ε)          and      m (h∗ (x0 ), ε) > m (h∗ (x00 ), ε)

By the independence between X and ε, the full support of ε, and, again, the monotonicity
          e this implies that
of m and m,

Pr {(e0 , e00 )| (m
                  e (h (x0 ) , e0 ) < m
                                      e (h (x00 ) , e00 ))} > Pr {(e0 , e00 )| (m
                                                                                e (h (x0 ) , e0 ) > m
                                                                                                    e (h (x00 ) , e00 ))}

while

Pr {(e0 , e00 )| (m (h∗ (x0 ) , e0 ) < m (h∗ (x00 ) , e00 ))} < Pr {(e0 , e00 )| (m (h∗ (x0 ) , e0 ) > m (h∗ (x00 ) , e00 ))}

Hence, either

Pr {(e0 , e00 )| (m
                  e (h (x0 ) , e0 ) < m
                                      e (h (x00 ) , e00 ))} 6= Pr {(e0 , e00 )| (m (h∗ (x0 ) , e0 ) < m (h∗ (x00 ) , e00 ))}

or

Pr {(e0 , e00 )| (m
                  e (h (x0 ) , e0 ) > m
                                      e (h (x00 ) , e00 ))} 6= Pr {(e0 , e00 )| (m (h∗ (x0 ) , e0 ) > m (h∗ (x00 ) , e00 ))}

Let Fε , Feε be any distributions that have support R. Consider the conditional distributions


                                                            32
    FY |X=x0 (·, ·; m, h∗ , Fε ) and³FY |X=x00 (·, ·;´m, h∗ , Fε ) , generated
                                                                       ³       by (m,  ∗
                                                                                    ´ h , Fε ) , and the
                                                                                                      ³ con- ´
ditional distributions FY |X=x0 ·, ·; m, e h, Feε and FY |X=x00 ·, ·; m,    e h, Feε , generated by m,  e h, Feε .
Let Y 0 and Y 00 denote the random variables that have, respectively, distribution FY |X=x0
and FY |X=x00 . If any of the two inequalities
                                      ³        above´ are satisfied, the
                                                                      ³ probability´ of the event
  0      00
Y > Y calculated using FY |X=x0 ·, ·; m,    e h, Feε and FY |X=x00 ·, ·; m,
                                                                          e h, Feε will be dif-
ferent from the probability of the same event calculated using FY |X=x0 (·, ·; m, h∗ , Fε ) and
FY |X=x00 (·, ·; m, h∗ , Fε) . By continuity of the functions, and full support of ³X, this will ´
                                                                                                 still
hold for x  0
          e and x    00                                     0      00
                   e in neighborhoods, respectively, of x and x . Hence, FY |X 0 ·, ·; m,     e
                                                                                        e h, Fε 6=
FY |X (·, ·; m, h∗ , Fε ) . It follows that h∗ is identified.

    The previous theorem determined that in the Independent Index Model, the nonparamet-
ric index function, h, is identified up to an increasing transformation. Hence, to guarantee
that the index function is identified, one can restrict it to belong to a set of functions
such that no two functions in the set are strictly increasing transformations of each other.
Matzkin (1994) provides several examples of nonparametric sets of functions that satisfy this
condition.


    4.2.2.1.3. Nonadditive Simultaneous Equations Model
    Consider a nonadditive simultaneous equations model, of the type analyzed in Section
3.1.1.6. The true model is described by a continuously diﬀerentiable function r and a dif-
ferentiable, everywhere positive density fε . For all y ∈ RG and x ∈ RK , the value of ε
is determined by ε = r(y, x). There exists a function h such that for each x ∈ RK and
ε ∈ RG , the value of y is uniquely determined by: y = h(x, ε). For all x, y the Jacobian
determinant |∂r (y, x) /∂y| is strictly positive everywhere. The unobservable random vector
ε is distributed independently of X. The function r and the densities of ε and X are such
that the distribution of (Y, X) has support RG+K . Let fY |X=x denote the density of y given
X = x. In this model, for all y, x
                                                         ¯          ¯
                                                         ¯ ∂r(y, x) ¯
                                                         ¯
                              fY |X=x (y) = fε (r(y, x)) ¯          ¯
                                                             ∂y ¯

    We can ask what are the necessary and suﬃcient conditions for an alternative function re
and an alternative density feε to be such that (e             r , feε) is observationally equivalent to (r, fε ).
Assuming that (e   r , feε ) satisfies the same assumptions as (r, fε), (e       r, feε ) is observationally equiv-
alent to (r, fε ) iﬀ for all (y, x)
                                              ¯           ¯                  ¯            ¯
                                              ¯ ∂e
                                                 r (y, x) ¯                  ¯ ∂r(y, x) ¯
                                   r (y, x)) ¯¯
                              feε (e                      ¯ = fε (r(y, x)) ¯              ¯
                                                   ∂y ¯                      ¯ ∂y ¯

This condition could be used to determine directly the set of pairs (e        r , feε) that are observa-
tionally equivalent to (r, fε ). Alternatively, one may consider the set of alternative functions
re, rather than the set of alternative pairs (e r, feε ) . For each function re, we may ask whether
there exists an feε satisfying the above observationally equivalence conditions. The resulting


                                                       33
conditions are given in Matzkin (2005). Define
                                                           ∂ log fε (r (y, x))
                                γ (feε , r (y, x)) =                           ,
                                                                   ∂ε

                                                                   ¯          ¯        ¯           ¯
                  ¡                     ¢                  ∂       ¯ ∂r(y, x) ¯  ∂     ¯ ∂e
                                                                                          r (y, x) ¯
              ∆y y, x; ∂r, ∂ r, ∂e   2
                                 r, ∂ re =    2
                                                              log ¯¯          ¯−   log ¯           ¯
                                                           ∂y          ∂y ¯ ∂y         ¯ ∂y ¯

                                                                   ¯          ¯        ¯           ¯
                  ¡                     ¢                  ∂       ¯ ∂r(y, x) ¯  ∂     ¯ ∂e
                                                                                          r (y, x) ¯
              ∆x y, x; ∂r, ∂ r, ∂e   2
                                 r, ∂ re =    2
                                                              log ¯¯          ¯−   log ¯           ¯
                                                           ∂x          ∂y ¯ ∂x         ¯ ∂y ¯

Theorem (Matzkin (2005): There exists feε such that (e
                                                     r , feε ) is observationally equivalent to
(r, fε ) iﬀ for all y, x the rank of the matrix

                ³              ´0                                                                        
                       r(y,x)
                      ∂e
                        ∂y
                                                           2
                                                             r , ∂ re) − ∂ log(fε∂ε
                                         ∆y (y, x; ∂r, ∂ r, ∂e        2           (r(y,x))) ∂r(y,x)
                                                                                              ∂y
                                                                                                         
                                                                                                         
                ³         ´0                                                                             
                   r(y,x)                                                                                
                  ∂e
                     ∂x
                                                               r , ∂ 2 re) − ∂ log(fε∂ε
                                         ∆x (y, x; ∂r, ∂ 2 r, ∂e                      (r(y,x))) ∂r(y,x)
                                                                                                  ∂x
                                                                                                          



    is G.

    This result can be used to determine sets of functions, Ω, that contain no observationally
equivalent elements. Consider, for example, the demand and supply model considered earlier
in this chapter:
                                                  Qd = md (P, I, εd )
                                                  Qs = ms (P, W, εs )
                                                  Qd = Qs
with md strictly increasing in εd and ms strictly decreasing in εs . In this model, ε =
(εd , εs )0 , y = (q, p), and x = (I, w);
                                                   εd = rd (q, p, I)
                                                   εs = rs (q, p, w)
where rd and rs are the inverse functions of md and m with respect to εd and εs , respectively.
Suppose for example that one restricts the set of functions to guarantee that for any two
functions, r and re, ∆y (y, x; ∂r, ∂ 2 r, ∂e
                                           r , ∂ 2 re) = 0 and ∆x (y, x; ∂r, ∂ 2 r, ∂e
                                                                                     r, ∂ 2 re) . This could
be accomplished by requiring that the proportional changes of the Jacobian determinants of
all functions, r and re, in the set be constant. Or, in a more restrictive way, one could require
that for all functions, re, in the set, which is assumed to include the true function r,
                                            ¯             ¯
                                            ¯ ∂er (y,  x) ¯
                                            ¯             ¯
                                            ¯ ∂y ¯ = 1

                                                               34
In the demand and supply example,        ¡ d this latter¢ conditions                          is imposed      ¡ by      requiring ¢that for all
                                                                                s                                   d
functions re, for all (q, p, I, w), ∂e         r (q, p, I)/∂q (∂e              r (q, p, I)/∂p) − ∂e               r (q, p, I)/∂p (∂e       rs (q, p, I)/∂q)
= 1. In this set, the condition for observational equivalence is that the rank of the matrix
                     rs     ∂ log(fε (rd (q,p,I),rs (q,p,w))) ∂rd (q,p,I)                   ∂ log(fε (rd (q,p,I),rs (q,p,w))) ∂rs (q,p,w)
                                                                                                                                                 
            rd
           ∂e       ∂e
                     ∂q                                                                +
       ∂q                                       ∂εd                           ∂q                               ∂εs                     ∂q       
                                                                                                                                                
                                                                                                                                                
          ∂e
            r d     ∂er s    ∂ log ( f ε ( r d (q,p,I),r s (q,p,w)
                                                                   ))        d
                                                                         ∂r (q,p,I)          ∂ log ( f ε (r d (q,p,I),r s (q,p,w)
                                                                                                                                 )) ∂r (q,p,w) 
                                                                                                                                      s
       ∂p           ∂p                          ∂εd                           ∂p
                                                                                       +                        ∂εs                     ∂p       
                                                                                                                                                
                                                                                                                                                
 D=                                                                                                                                             
          ∂e
            r d
                     0                                       ∂ log ( f ε ( r d (q,p,I),r s (q,p,w)
                                                                                                   ))       d
                                                                                                         ∂r (q,p,I)                              
       ∂I                                                                       ∂εd                           ∂I                                
                                                                                                                                                
                                                                                                                                                
                       s
                                                                   (    (   d (q,p,I),rs (q,p,w)
                                                                                                   ))                                            
       0           ∂e
                    ∂w
                      r                                      ∂ log   fε   r                              ∂r s (q,p,w)
                                                                                                                                                 
                                                                                ∂εs                    ∂w




be 2 for all (q, p, I, w) .

     Suppose that the true model is such that

     (i) for each (q, p, I) ∈ R3 there exist w∗ ∈ R such that

                                   ∂rs(q, p, w ∗ )         ∂r d (q, p, I)
                                                     6= 0;                6= 0;
                                         ∂w                      ∂p
          ¡ ¡                                 ¢¢                ¡ ¡                               ¢¢
         ∂ fε r d (q, p, I) , rs (q, p, w ∗ )               ∂ fε r d (q, p, I) , r s (q, p, w ∗ )
                                                 6= 0 and                                            =0
                        ∂εd                                                   ∂εs

                               rd (q, p, I)/∂p 6= 0 and either
     Then, if re is such that ∂e
                   µ                    ¶−1 µ                      ¶        µ                   ¶−1 µ                     ¶
                        rd (q, p, I)
                       ∂e                         rd (q, p, I)
                                                 ∂e                             ∂rd (q, p, I)            ∂r d (q, p, I)
                                                                       6=
                            ∂p                        ∂q                             ∂p                        ∂q
or
                   µ                    ¶−1 µ                      ¶        µ                   ¶−1 µ                     ¶
                        rd (q, p, I)
                       ∂e                         rd (q, p, I)
                                                 ∂e                             ∂rd (q, p, I)            ∂r d (q, p, I)
                                                                       6=
                            ∂p                        ∂I                             ∂p                        ∂I

                                   (4.d)       re is not observationally equivalent to r




                                                                       35
Proof of (4.d): When (i) is satisfied, the matrix D becomes
                                                                                                            
                 rd (q,p,I)
                ∂e           rs (q,p,w∗ )
                            ∂e            ∂ log(fε (rd (q,p,I),rs (q,p,w∗ ))) ∂rd (q,p,I)
                   ∂q           ∂q                       ∂εd                     ∂q                         
                                                                                                            
                                                                                                            
              ∂erd (q,p,I)  rs (q,p,w∗ )
                            ∂e            ∂ log(fε (rd (q,p,I),rs (q,p,w∗ ))) ∂rd (q,p,I)                    
                                ∂p                                                                          
                   ∂p                                    ∂εd                     ∂p                         
                                                                                                            
                                                                                                            
              ∂erd (q,p,I)       0       ∂ log(fε (rd (q,p,I),rs (q,p,w))) ∂rd (q,p,I)                      
                                                                                                            
                   ∂I                                    ∂εd                    ∂I                          
                                                                                                            
                            rs (q,p,w∗ )
                                                                                                             
                    0      ∂e
                                                                 0                                           
                                 ∂w




                           rd (q, p, I)/∂p 6= 0 and ∂r d (q, p, I)/∂p 6= 0, this matrix has rank
    Since, by assumption, ∂e
larger than 2 if
                µ                   ¶−1 µ                   ¶         µ                   ¶−1 µ                    ¶
                     rd (q, p, I)
                    ∂e                       rd (q, p, I)
                                            ∂e                            ∂rd (q, p, I)           ∂r d (q, p, I)
                                                                 6=
                         ∂p                      ∂q                            ∂p                       ∂q
or if
                µ                   ¶−1 µ                    ¶        µ               ¶−1 µ                      ¶
                     rd (q, p, I)
                    ∂e                       r d (q, p, I)
                                            ∂e                       ∂rd (q, p, I)            ∂r d (q, p, I)
                                                                 6 =
                         ∂p                       ∂I                      ∂p                        ∂I


   The above result implies that when the function r is restricted to belong to a set of
functions that satisfy the above restrictions on re, the ratios of the derivatives of rd are
identified. If we has assumed that the true model satisfies

     (ii) for each (q, p, w) ∈ R3 there exist I ∗ ∈ R such that

                                     ∂rd (q, p, I ∗ )       ∂r s (q, p, I)
                                                      6= 0;                6= 0
                                           ∂I                     ∂p
         ¡ ¡                                 ¢¢                  ¡ ¡                               ¢¢
        ∂ fε r d (q, p, I ∗ ) , rs (q, p, w)                  ∂ fε r d (q, p, I ∗ ) , rs (q, p, w)
                                                = 0 and                                               6= 0
                       ∂εd                                                      ∂εs

and re is such that ∂e
                     r(q, p, I)/∂p 6= 0 and either
               µ                   ¶−1 µ                    ¶         µ                   ¶−1 µ                    ¶
                    rs (q, p, w)
                   ∂e                       rs (q, p, w)
                                           ∂e                             ∂rs (q, p, w)           ∂r s (q, p, w)
                                                                 6=
                        ∂p                      ∂q                             ∂p                       ∂q
or             µ                   ¶−1 µ                    ¶         µ                   ¶−1 µ                    ¶
                    rs (q, p, w)
                   ∂e                       rs (q, p, w)
                                           ∂e                             ∂rs (q, p, w)           ∂r s (q, p, w)
                                                                 6=
                        ∂p                      ∂w                             ∂p                       ∂w
then, following the analogous arguments as in the previous case, we can show that also in
this case, re is not observationally equivalent to r.

                                                                 36
   These results can be interpreted as follows: Suppose that we restrict all functions, re, in
the set, to satisfy
          ¡ d              ¢                    ¡ d             ¢
           ∂e                 rs (q, p, I)/∂p) − ∂e
             r (q, p, I)/∂q (∂e                                    rs (q, p, I)/∂q) = 1;
                                                  r (q, p, I)/∂p (∂e

and we restrict the true distribution of ε to be such that for any value of εd , there exists a
value of εs such that
                         ¡ ¡        ¢¢               ¡ ¡        ¢¢
                       ∂ fε εd , εs                ∂ fε εd , εs
                                       6= 0 and                    =0
                             ∂εd                        ∂εs
and for any value of εs, there exists a value of εd such that
                          ¡ ¡        ¢¢               ¡ ¡         ¢¢
                        ∂ fε εd , εs                 ∂ fε εd , εs
                                        = 0 and                      6= 0
                             ∂εd                          ∂εs
Then, by appropriately choosing the values of W and I to guarantee that the values of
εd = rd (q, p, I) and εs = rs (q, p, w) are such that the derivatives of fε satisfy one of these
conditions, we obtain the result that the rank of the matrix is larger than the one required for
observational equivalence, when the alternative function is not a monotone transformation
of the true function.


    Matzkin’s result can be used also to determine conditions for indentification when addi-
tional restrictions are imposed on the functions. The following result, for example, applies
to partially linear functions

Theorem (Matzkin (2005): Suppose that r and re are specified as:

                   ε = v(Y, Z) + BX           and          e
                                                           ε=e          e
                                                             v (Y, Z) + BX
 where Z ∈ RK1 and X ∈ RK2 are independent of ε (K1 may be 0.) Suppose further that
fε , v, and B are such that for all y, z, the range of the function ∂ log(fε (r(y, z, ·))/∂ε :
RK → RG contains an open neighborhood. Let vi and bi denote,  ³    ´respectively, the i − th
                                                                 e
coordinate of the function v and the i − th row of B. Then, ve, B is not observational to
(v, B) if for some i, and some y, z, the rank of the matrix
                                  Ã ∂v (y,z) ∂v (y,z)       !
                                        i        i
                                        ∂y       ∂z
                                                        b i
                                       v (y,z)
                                      ∂e        v (y,z) e
                                               ∂e
                                        ∂y       ∂z
                                                        bi

is strictly larger than G.




                                               37
4.3. Augmenting the data
In some cases, augmenting the set of variables that are observable can aid in getting more
information about ε. Consider, for example, the consumer demand model described in
Section 2.1, with ε = r (I, δ) . Suppose that we wanted to identify the derivative of the
demand function Y = m (p, I, ε) with respect to I, for a particular individual with value ε∗
of ε. Since ε is a function of I, this falls into the framework of the nonadditive model with
X = (p, I) . The analysis of this model in the previous section showed that the derivative of
m with respect to X is not identified. Recalling the relationship

                           ∂m (p, I, ε)    ∂m (p, I, r (I, δ))
                                        =                      |r(I,δ)=ε
                               ∂I                 ∂I
                                           dm (p, I, r (I, δ))
                                        6=
                                                  dI
derived in Section 2.1, we can see why the derivative is not identified. Letting

                                  v (p, I, δ) = m (p, I, r (I, δ))

it follows from the analysis of identification in Section 3.1, that the pair (v, δ) is observation-
ally equivalent to the pair (m, ε) . The derivatives with respect to I are however diﬀerent.
Observing additional variables is useful when they allow to diﬀerentiate the direct eﬀect of
I on the demand from the indirect eﬀect of I, which influences the demand though ε. We
next discuss methods that are useful for many such circumstances.

4.3.1. Control functions
A widely used method to achieve identification in models where the observable explanatory
variables are correlated with the unobservable explanatory variables is the control function
approach, which was fully developed, and analyzed for parametric selection models, in Heck-
man and Robb (1985). A control function is a function of observable variables such that
conditioning on its value purges any statistical dependence that may exist between the ob-
servable and unobservable explanatory variables in the original model. While one typically
defines a control function using observable variables that were not initially included in the
model of interest, in some cases, this function can be defined using the existent variables and
some additional information in the model such as a particular parametric specification for
some functions in the model. We concentrate here on the former case, and describe some
of the existent extensions of the parametric analysis of Heckman and Robb to nonpara-
metric setups. We will consider using either additional exogenous variables or additional
endogenous variables, to define these control functions.


4.3.1.1. Identification of functions and distributions using control functions

   4.3.1.1.1. Additive Model
   We saw in 3.1.1.1 that in the additive model

                                         Y = m (X) + ε

                                                38
one can not achieve identification of m when E [ε|X] is unknown. When there exists an
underlying relationship between ε and X, specifying that E (ε|X) is known is too strong a
restriction, since in this case, E [ε|X] is a function of X. Suppose, however, that we could
either observe or estimate a vector, W, such that ε satisfies the conditional mean independent
restriction
                                      E [ε|X, W ] = E [ε|W ]
Then, under some additional assumptions, one could identify the function m and the dis-
tribution of (ε, X) . Newey, Powell and Vella (1999) considered such case for a particular
W, which is estimated, but their analysis can be used more generally. To describe their
arguments, note that under the conditional mean independent restriction

                                 E [Y |X, W ] = m (X) + g (W )
Hence,
                                     Y = E [Y |X, W ] + η
where E [η|X, W ] = 0. By the arguments described in 3.1.1.1, it follows that E [Y |X, W ] =
m(X) + g(W ) can be recovered from the joint distribution of (Y, X, W ) . Hence, the problem
of identifying m has been transformed into the problem of identifying a subfunction in an
additive function. The following theorem in Newey, Powell and Vella (1999) provides a
characterization of the conditions under which such identification is possible:

    Theorem (Newey, Powell and Vella (1999)): m (X) is identified, up to an additive
constant, if and only if for any functions δ and γ such that Pr [δ (x) + γ(W ) = 0] = 1, there
is a constant c such that Pr [δ (x) = c] = 1.



   4.3.1.1.2. Nonadditive Model
   While for the additive model, it is enough for the control function to guarantee a mean
independent condition of the unobservable given the regressors and the control, for the non-
additive model a stronger condition is necessary. Recall from 4.2.2.1.1. that the independent
nonadditive model is identified, up to some normalization. This suggests that, in the model
                                         Y = m (X, ε)
where ε and X are not independently distributed, the existence of an observable or estimable
vector, W, satisfying a conditional independence assumption, may be enough to guarantee
identification of m and the distribution of (ε, X) . As with the Independent Nonadditive
Model, a normalization either on the nonparametric function m or on the distribution of ε
is required.
    Assume that m is strictly increasing in ε. Let x denote a particular value of X, at which
the density fX,W (x, w) is strictly positive for all values of W. Assume that, for X = x, it is
the case that for all w, e
                                  Fε|X=x,W =w (e) = Fε|W =w (e)
and for all x 6= x, and all e, there exists wx,e such that
                               Fε|X=x,W =wx,e (e) = Fε|W =wx,e (e)

                                               39
Then, by the arguments in Matzkin (2003) and Altonji and Matzkin (2005) we can show
that
                          (4 .e) m and Fε,X are identified
.
Proof of (4.e): The argument follows closely the proof of identification in the Independent
Nonadditive Model. By the strict monotonicity of m in ε, and the conditional independence
assumptions, it follows that for X = x


               Pr (ε ≤ e|W = w) = Pr (ε ≤ e|X = x, W = w)

                                     = Pr (m (X, ε) ≤ m (x, e) |X = x, W = w)

                                     = FY |X=x,W =w (m (x, e))

                                     = FY |X=x,W =w (e)

This implies that for all e, w, Fε|W =w (e) is identified, since

                                  Fε|W =w (e) = FY |X=x,W =w (e)

 Next, for all x, e, let wx,e be such that Fε|X=x,W =wx,e (e) = Fε|W =wx,e (e) . Then, by similar
arguments as above

                        Pr (ε ≤ e|W = wx,e ) = FY |X=x,W =wx,e (m (x, e))

Since Fε|W =w (e) = FY |X=x,W =w (e) , it follows that
                                                    ¡                    ¢
                         m (x, e) = FY−1|X=x,W =wx,e FY |X=x,W =wx,e (e)

This implies that m is identified. Next, note that, by the strict monotonicity of m in ε, for
all e, x


                 Fε|X=x (e) = Pr (ε ≤ e|X = x)

                              = Pr (m (X, ε) ≤ m (x, e) |X = x)

                              = Pr (Y ≤ m (x, e) |X = x)

                              = FY |X=x (m (x, e))
                                       ³               ¡                    ¢´
                                         −1
                              = FY |X=x FY |X=x,W =wx,e FY |X=x,W =wx,e (e)

Hence, Fε,X is identified.

                                                40
    Rather than using a normalization in the function m, one could normalize the marginal
distribution of ε, as Blundell and Powell (2003) do. Assume that m is strictly increasing in
ε, and that for all x, w
                                 Fε|X=x,W =w (e) = Fε|W =w (e)
Then, by the arguments in Blundell and Powell (2003),
                              (4 .f )      m and Fε,X are identified


Proof of (4.f): By the strict monotonicity of m in ε, and the conditional independence
assumptions, it follows that for X = x


              Pr (ε ≤ e|W = w) = Pr (ε ≤ e|X = x, W = w)

                                     = Pr (m (X, ε) ≤ m (x, e) |X = x, W = w)

                                     = FY |X=x,W =w (m (x, e))

                                            Z m(x,e)
                                     =                 fY |X=x,W =w (y) dy
                                             −∞

Multiplying both sides of the equation by fW (w) and integrating with respect to w one gets
that
     Z ∞Z e                                Z ∞ Z m(x,e)
               fε,W (ε, w)                              fY,,X,W (y, x, w)
                           fW (w) dε dw =                                 fW (w) dy dw
      −∞ −∞      fW (w)                     −∞ −∞         fX,W (x, w)
or, after interchanging the orders of the integration,

                          Z m(x,e) µZ ∞                                            ¶
               Fε (e) =                        fY |,X=x,W =w (y, x, w) fW (w) dw       dy
                           −∞             −∞
                          Z m(x,e)
                                     ¡               £                       ¤¢
                      =                  EW |Y =y,X=x fY |,X=x,W =w (y, x, w) dy
                           −∞
                                                                                 £                      ¤
The function in the left hand side is, by assumptions, known. Since EW |Y =y,X=x fY |,X=x,W =w (y, x, w) >
0, the function in the right hand side is strictly increasing in m(x, e). Hence, there exists a
unique solution for m(x, e). It follows that m is identified. Since m is identified, one can
use it to identify Fε,X from the distribution of (Y, X), as shown in the proof of (4.d).




                                                   41
   4.3.1.1.3. Nonadditive Index Model
   We saw in 4.2.2.1.2. that the function h in the Nonadditive Index Model

                                      Y = m (h(X), ε)

is identified when we impose the restriction that the function h is homogenous of degree one,
attains a given value at x, and ε and X are independently distributed. If, however, all the
assumptions are satisfied, but ε is not distributed independently of X, then the argument of
identification does not hold. However, suppose that there exists some W such that for all
x, e, w,
                                 Fε|X=x,W =w (e) = Fε|W =w (e)
Then, we can identify h, since all the arguments above hold conditionally on W.




4.3.1.2. Identification of average derivatives using control functions

    4.3.1.1.1. Nonadditive Model
    In this model, we saw that to identify the function m and the distribution of ε given X, we
                                        e in Ω to satisfy a normalization. If instead of being
needed to restrict the set of functions m
interested in m, we were interested in the average derivative of m, then this normalization
would not be necessary anymore. Suppose that we wanted to identify the average derivative
                                       Z
                                          ∂m (x, ε)
                                β(x) =               fε|X=x (e) de
                                             ∂x

using a control function W. Altonji and Matzkin (2005) show that if ε is independent of X
conditional on W, then
                                 Z
                                    ∂E [Y |W = w, X = x]
                  (4.g) β(x) =                           fW |X=x (w) dw
                                             ∂x

where E [Y |W = w, X = x] denotes the conditional expectation of Y given (W = w, X = x) .

Proof of (4.f): Since
                                     fε|W,X (e) = fε|W (e)
one has that
                                        ∂fε|W,X (e)
                                                    =0
                                            ∂x




                                              42
Hence
         Z
           ∂E [Y |W = w, X = x]
                                      fW |X=x (w) dw
                       ∂x
         Z      Z
            ∂                              fW,X (w, x)
     =              m (x, ε) fε|W,X=x (ε)                dw
           ∂x                                 fX (x)
         Z · Z                                 ¸
              ∂                                   fW,X (w, x)
     =               m (x, ε) fε|W,X=x (ε) dε                 dw
             ∂x                                      fX (x)
         Z ·Z                                   Z                            ¸
                 ∂m (x, ε)                                  ∂ fε|W,X=x (ε)     fW,X (w, x)
     =                       fε|W,X=x (ε) dε + m (x, ε)                    dε              dw
                    ∂x                                            ∂x             fX (x)
         Z ·Z                                ¸
                 ∂m (x, ε)                     fW,X (w, x)
     =                       fε|W,X=x (ε) dε                dw
                    ∂x                            fX (x)
         Z Z
               ∂m (x, ε) fε,W,X=x (e) fW,X (w, x)
     =                                                 dε dw
                   ∂x       fW,X (w, x)     fX (x)
         Z Z
               ∂m (x, ε) fε,W,X=x (e)
     =                                    dw dε
                   ∂x          fX (x)
         Z
           ∂m (x, ε) fε,X=x (e)
     =                               dε
                ∂x        fX (x)
         Z
           ∂m (x, ε)
     =                  fε|X=x (e) dε
                ∂x


   Thus, we can uniquely recover β(x) from the joint distribution of (Y, W, X) .


4.3.1.3. Control functions using exogenous variables

   4.3.1.3.1. Additive Models
   Newey, Powell, and Vella (1999) considered the model

                                     Y = m (X, Z1 ) + ε

with the additional equation
                                       X = π (Z) + u
and the restrictions
                         E [ε|u, Z] = E [ε|u]        and   E [u|Z] = 0
where Z1 is a subvector of Z.
   Since E [ε|u] = E [ε|u, Z] = E [ε|u, X, Z] , u can be used as a control function to identify
m. Since E [u|Z] = 0, the function π is identified from the joint distribution of (X, Z) .


                                                43
Hence, u = X − π (Z) is also identified. Moreover,

                           E [Y |X, Z] = m (X, Z1 ) + E [ε|u]

                                           = m (X, Z1 ) + g (X − π(Z))


   The following identification result is established in Newey, Powell and Vella (1999):

    Theorem (Newey, Powell and Vella (1999)): Suppose that m (x) , g (u) , and π (Z) are
diﬀerentiable, the boundary of the support of (Z, u) has zero probability, and with probability
one, rank(∂π (Z1 , Z2 )/∂Z2 )) = dX , where dX denotes the dimension of dX , then, m (X, Z1 )
is identified (up to constant).

   As noted in Newey, Powell, and Vella (99), one can use the additive structure to derive
the derivatives of the functions m directly. Let h (X, Z1 , Z2 ) = E [Y |X, Z1 , Z2 ] . Then, since

                           h (X, Z1 , Z2 ) = m (X, Z1 ) + g (X − π(Z))

it follows that
              ∂h (X, Z1 , Z2 )   ∂m (X, Z1 ) ∂g (u)
                               =              +         |u=X−π(Z)
                   ∂X                ∂X            ∂u
                                                 µ              ¶0
              ∂h (X, Z1 , Z2 )   ∂m (X, Z1 )       ∂π (Z1 , Z2 ) ∂g (u)
                               =              −                         |u=X−π(Z)
                   ∂Z1              ∂Z1               ∂Z1          ∂u
                                   µ              ¶0
              ∂h (X, Z1 , Z2 )       ∂π (Z1 , Z2 ) ∂g (u)
                               = −                          |u=X−π(Z)
                   ∂Z2                  ∂Z2            ∂u

Assume that rank(∂π (Z1 , Z2 ) /∂Z2 ) = dX . Define
                           ·µ                   ¶µ                   ¶0 ¸−1 µ                   ¶
                                ∂π (Z1 , Z2 )        ∂π (Z1 , Z2 )              ∂π (Z1 , Z2 )
                  D(Z) =
                                   ∂Z2                  ∂Z2                        ∂Z2

Then, multiplying ∂h (X, Z1 , Z2 ) /∂Z2 by D(Z) and solving gives

                     ∂m (X, Z1 )   ∂h (X, Z1 , Z2 )        ∂h (X, Z1 , Z2 )
                                 =                  − D(Z)
                        ∂X              ∂X                      ∂Z2

                                                     µ                   ¶0
             ∂m (X, Z1 )   ∂h (X, Z1 , Z2 )              ∂π (Z1 , Z2 )               ∂h (X, Z1 , Z2 )
                         =                  +                                 D(Z)
                ∂Z1             ∂Z1                         ∂Z1                           ∂Z2


    The above gives identification of m up to an additive constant. An additional restriction
is necessary to identify such a constant. Suppose, for example, that E [ε] = 0. Then, as


                                                      44
                                                                            R
shown in Newey, Powell, and Vella (1999), for any function τ (u) such that τ (u) du = 1,
             Z                                ·Z                          ¸
                E [Y |X, Z1 , u] τ (u) du − E    E [Y |X, Z1 , u] τ (u) du + E [Y ]

           = m (X, Z1 ) − E [m (X, Z1 )] + E [Y ]

           = m (X, Z1 )

   Hence, the constant of m is identified.




    4.3.1.3.2. Nonadditive Models
    Imbens and Newey (2003) considered identification of functions and derivatives in non-
parametric models with nonseparable errors, where an exogenous variable, Z, is available.
Their leading example was the model where the present value of lifetime earnings is deter-
mined by years of education and unobserved ability. To deal with the statistical dependence
between years of education and ability, they used observable cost of education and a rela-
tionship that establishes the years of education as a function of cost, ability, and other
unobservable variables.
    We describe Imbens and Newey’s arguments using the demand model that we have been
considering, where Y = m (p, I, ε) and ε = r (I, δ) . Suppose that either an element of δ, or
some additional variable determining income, were observed, so that now the income of the
consumer were determined by
                                        I = re (Z, η)
where Z is an observable variable that is distributed independently of (ε, η) . Assuming
that re is strictly increasing in η, the model defined by the last expression is an Independent
Nonadditive Model. Hence, the function re and the distribution of η are identified, under some
normalizations/restrictions. In particular, one can identify η, under such normalizations.
The restriction that Z is independent of (ε, η) implies that, conditional on η, ε and Z are
independent. Since, by the above expression, conditional on η, I is a function of Z, which
is independent of ε, it follows that I is independent of ε, conditional on η. Hence, η is a
control function, since conditioning on it, I and ε are independent. One can then use the
identification results presented in 4.3.1.1 and 4.3.1.2. to identify the functions, distributions,
and average derivatives.


4.3.1.4. Control functions using endogenous variables
   In 4.3.1.3, we described how one can define a control function using an observable Z that is
independent of (ε, η) . In many cases, however, it is diﬃcult to observe such a useful exogenous
variable, Z. An alternative, developed in Matzkin (2004) for the Nonadditive Model, is to
consider situations where such a variable Z is known to exist but it is unobservable. In the
demand model considered above, with Y = m (p, I, ε) and I = re (Z, η) , suppose that Z were
unobserved but we observed η. For example, η may be income in a previous period and Z


                                               45
may represent some exogenous change in income, such as a change in income taxes. We will
denote the unobservable Z by e                                e We may think of I and Ie as
                                η and the now observable η by I.
two diﬀerent indicators of ε. If
                                        Y = m (X, ε)
and                                             ³     ´
                                                  e
                                           X = s X, e
                                                    η
                             ³        ´
where e                          e
       η is independent of X, ε , then, following the arguments in Imbens and Newey
(2003), after relabelling the variables, one can establish that X and ε are independent,
                e Hence, X
conditional on X.            e can be used as a control function.
    When the control function is observed, as in this case, rather than estimated, as in
the previous subsection, the independence restriction needed to achieve identification can
be considerably weakened. Matzkin (2004) shows that to identify the function m and the
distribution Fε,X , in this case, it is only necessary that e η be independent of ε conditional on
only one value x       e
                e of X. We state this theorem below.
                                                                                      ³    ´
Theorem (Matzkin (2004)): Suppose that m is strictly increasing in ε, X = s X, e        e η , and
   e x and FX|X=e
Fε|X=e           e x are strictly increasing. Then, for all x, e
                                                        ³             ´
                               m (x, e) = FY−1|X=e
                                               e x,X=x    F   e x
                                                            ε|X=e (e)
and
                                            ³             ³             ´´
                       Fε|X=x (e) = F Y |X=x FY−1|X=e
                                                  e x,X=x   F   e x
                                                              ε|X=e (e)



    This establishes global identification of the function m and the distribution of (X, ε) , up
to a normalization on the conditional distribution Fε|X=ee x . If, for example, we normalized the

distribution of ε conditional on Xe =x  e to be U(0, 1), then, for all e ∈ (0, 1)

                                 m (x, e) = FY−1|X=x,X=e
                                                     e x (e) , and
                                                     ³                   ´
                             Fε|X=x (e) = FY |X=x        FY−1|X=e
                                                              e x,X=x (e)




4.3.2. Proxy variables
A proxy is a variable that is used to substitute for ε. In the lifetime earnings example, a
proxy for ability could be IQ, or other test scores. In an Additive Model,

                                         Y = g (X) + ε

where E (ε|X) 6= 0, one says that a variable W is a proxy for ε if for some function r and
some unobservable δ

                          ε = r (W ) + δ     and           E (δ|X, W ) = 0

                                                46
In a Nonadditive Model, where
                                        Y = m (X, ε)
a proxy for ε is a variable, W, such that

                                        ε = r (W, δ)

where δ is independent of (X, W ) . An example of the use of such proxies can be found in
Chamberlain (1984) where in a panel data model, he uses present and past values of the
explanatory variable to estimate a fixed eﬀects. In such an example, ε would be the fixed
eﬀect, and W would be a vector containing X and past values of X.
   A theorem in Matzkin (2004) establishes an equivalence result between the existence of
a proxy and the existence of a control function. In particular, the theorem states that if we
can find a proxy W for ε, then we can also use it as a control function, and, conversely, if
W is a control function, then it is also a proxy for ε.

Equivalence Theorem (Matzkin (2004): Suppose that m is strictly increasing in ε, and
that for all values w of W, the conditional distributions, Fε|W =w and FX|W =w , of ε given
W = w and of X given W = w, are strictly increasing. Then, the following statements are
equivalent:

   (i) ε is independent of X, conditional on W.

   (ii) There exists a strictly increasing function s (W, ·) and an unobservable random term
η such that
        X = s (W, η) and
        η is independent of (W, ε) .

   (iii) There exists a strictly increasing function r (W, ·) and an unobservable random term
δ such that
         ε = r (W, δ) ,
         δ is independent of (X, W ) .


   The equivalence theorem provides insight into what is needed in order to identify the
function m in the Nonadditive Model

                                        Y = m (X, ε)

To be able to identify m, we need to observe independent variation in each coordinate of m.
The theorem considers three diﬀerent representations of the model:

                                Y   = m (s (W, η) , ε)

                                    = m (s (W, η) , r (W, δ))

                                    = m (X, r (W, δ))

                                             47
From the first expression, it follows that if ε and η are independent conditional on at least
one value w of W, then we will be able to observe events where, conditional on W, each
coordinate of m achieve values independently of the other coordinates of m. From the third
expression, it follows that if δ is independent of X conditional on at least one value w of W,
then, again each coordinate of m will achieve values independently of the other coordinates
of m, when conditioning on at least one value of W. The second expression provides the
same result, when we can establish that δ and η are independent, conditional on at least
one value w of W. The equivalence theorem above states that as long as we show that the
conditions for one of these representations are satisfied, then the the conditions for the other
representations also hold.


4.3.3. Instrumental variables


    In many cases, the assumptions required to use a control function approach to deal with
endogeneity are not satisfied. Suppose that one is interested in identifying the function m1
in the model
                                     Y1 = m1 (Y2 , ε1 )
and that a variable, Z, is available, which correlates with Y2 and is distributed independently
of ε1 . Suppose that one could express the relationship between Y2 and Z, using a strictly
increasing function, s, and an unobservable variable, η, by
                                          Y2 = s(Z, η)
(Note that under some regularity conditions, such a representation can be shown to exist
letting η be a Uniform(0,1) unobservable random term, and s(z, η) = FY−1       2 |Z=z
                                                                                      (η).) If one
could establish that Z is jointly independent of (η, ε1 ) , a control function approach, as the
one developed in Imbens and Newey (2003) could be used to identify m1 . However, in cases
with simultaneity, such as when Y1 denotes aggregate demand for a product, Y2 denotes price
of the product, and ε1 denotes an unobservable demand shock, the condition that Z is jointly
independent of (η, ε1 ) , for some η, cannot be satisfied. As we have shown earlier, in the
aggregate demand model, the reduced form for Y2 would include ε1 as one of the unobservable
variables influencing the value of Y2 . Hence, even if Z were distributed independently of ε1 ,
conditional on η, Z and ε1 would not be independently distributed. As a consequence, η
could not be used as a control function to identify m1 . However, one may still be able to
identify m1 using Z and the assumption that Z is independent of ε1 . In such cases, the
variable Z is typically called an instrument.

4.3.3.1. Additive Models In additive models, the requirement that Z be independent of
ε1 may be weakened to a conditional mean independence. Newey and Powell (1989, 2003),
Darolles, Florens, and Renault (2000), Ai and Chen (2003), and Hall and Horowitz (2003)
considered the model
                                   Y = m (X, Z1 ) + ε
where E [ε|X] 6= 0. They assumed the existence of an instrument, Z, satisfying
                                        E [ε|Z1 , Z2 ] = 0

                                               48
Using the definition of ε, this yields the equation

                 E [Y |Z1 = z1 , Z2 = z2 ] = E [m (X, z1 ) |Z1 = z1 , Z2 = z2 ]
                                                Z
                                            =        m (x, z1 ) fX|Z1 =z1 ,Z2 =z2 (x) dx

Since the "reduced form" E [Y |Z1 , Z2 ] is identified from the distribution of (Y, Z1 , Z2 ) and
fX|Z1 =z1 ,Z2 =z2 (x) is identified from the distribution of (X, Z) , the only unknown in the above
integral equation is m (x, z1 ) . Newey and Powell (2003) provided conditions characterizing
the identification of the function m solely from the above integral equation.

    Theorem (Newey and Powell (2003)): Suppose that Y = m (X, Z1 )+ε and E [ε|Z1 , Z2 ] =
0. Then, m is identified if and only if for all functions δ(x, z1 ) with finite expectation,
E [δ(x, z1 )|z] = 0 implies that δ(x, z1 ) = 0.

   Using this result together with the completeness property of exponential families, Newey
and Powell (2003) established the following result:

    Theorem (Newey and Powell (2003)): Suppose that Y = m (X, Z1 ) +ε, E [ε|Z1 , Z2 ] = 0,
with probability one conditional on z the distribution of x is absolutely continuous with
density f (x|z) = s(x, z1 )t(z) exp{µ(z)0 τ (x, z1 )}, where s(x, z1 ) > 0, τ (x, z1 ) is 1-1 in x, and
the support of µ(z) given z1 is an open set, then m(z, z1 ) is identified.

   Das (2004) and Newey and Powell (2003) considered identification of this model when
the endogenous variables are discrete. To state the result presented in Newey and Powell
(2003), assume that both X and Z2 are discrete. Denote the support of X and Z2 by,
respectively, {x1 , ..., xS } and {z21 , ..., z2T }. Let P (z1 ) denote the S × T matrix whose ij − th
elements is Pr (X = xi |Z1 = z1 , Z2 = z2j ) .

   Theorem (Newey and Powell (2003)): Suppose that Y = m (X, Z1 ) +ε, E [ε|Z1 , Z2 ] = 0,
and X and Z2 have finite support. Then, m(x, z1 ) is identified if and only if Pr [rank (P (z1 )) = s] =
1.


4.3.3.2. Nonadditive Models
   Chernozhukov and Hansen (2005) and Matzkin (2004, 2005) consider identification on
nonadditive models using instruments. Chernozhukov and Hansen (2005) consider the model

                                          Y1 = m (Y2 , X, ε)

where m is an unknown function, strictly increasing in ε. They assume that

                                          Y2 = g (Z, X, u)

for some unknown function g and random vector u. They index ε by the value of Y2 , denoted
by εy2 , and impose the following restrictions

                                                    49
   (i) Conditional on X, for all y2 , εy2 is U(0, 1).

   (ii) Conditional on X, {εy2 } are independent of Z.

    (iii) Conditional on X, Z, the {εy2 } are either identically distributed, conditional on u,
or equal to each other.

   They use these assumptions to show that

                                   FY |X,Z (m (Y2 , X, ε)) = ε

and they develop moment conditions based on this relationship, which, under some conditions
provide unique solutions for the function m.


   Matzkin (2004) considers the use of unobservable instruments to identify nonadditive
models. These are variables that are known to be distributed independently of unobservable
random terms in an equation of interest, but are themselves unobservable. They can be
seen as extensions of the instruments obtained using covariance restrictions in the errors, in
the standard linear simultaneous equations models (Hausman and Taylor (1983)). Matzkin
(2004) considers the model
                                     Y1 = m (Y2 , X, ε)
with m strictly increasing in ε and ε distributed independently of X. She assumes that a
second equation,
                                      Y2 = g (Y1 , η)
is identified, and that the unobservables η and ε are independently distributed. The iden-
tification of the function g in general will require imposing additional restrictions. If, for
example, g were specified to be a linear function and one assumed that E [η|X] = 0, then
identification of g would follow by standard results. If g were nonparametric and additive
in η, then, under the assumption that E [η|X] = 0 one could identify it using the methods
in Newey and Powell (2003), Darolles et. al. (2000), or Hall and Horowitz (2003). Suppose
that g and then η is identified. Matzkin (2003) proposes a pointwise direct identification of
the function m. The argument proceeds by using η to estimate the reduced form equations

                                      Y1 = r1 (X, η, ε)
                                      Y2 = r2 (X, η, ε)

Under the assumption that ε is independent of (X, η) , these equations are identified under
one normalization (rather than two), using the arguments in 4.2.2.1.1. These equations are
next used to identify m. To see this, suppose that we wanted to identify the value of m at
a particular value (y2 , x, e) . Let η ∗ denote the value of η that solves the equation

                                        y2 = r2 (x, η ∗ , e)



                                                50
Let y1∗ = r1 (x, η ∗ , e) . If then follows by the definition of m and of the functions r1 and r2
that
                              m (y2 , x, e) = m (r2 (x, η ∗ , e) , x, e)

                                              = r1 (x, η ∗ , e)

                                              = y1∗
Hence, the function is identified.


    A diﬀerent approach, developed in Matzkin (2005), derives a constructive way of identi-
fying nonparametric functions that are nonadditive in the unobservable random terms, using
an instrument. Suppose again that one is interested in identifying the function m1 in the
model
                                      Y1 = m1 (Y2 , ε1 )
and that a variable, Z, is available, which correlates with Y2 and is distributed independently
of ε1 . As we noted in the beginning of Subsection 4.3.3, when Y2 is a function of Y1 , it is in
general not possible to express Y2 as
                                              Y2 = s(Z, η)
for some function s and unobservable η, with Z being independent of (ε1 , η). A more general
specification, which can allow Z to be jointly independent of the vector of unobservables
influencing (Y1 , Y2 ) , is
                                    Y2 = m2 (Y1 , Z, ε2 )
for some unknown function m2 that is strictly increasing in ε2 . When the system described by
(m1 , m2 ) satisfies the other assumptions of the Nonadditive Simultaneous Equations model
studied in previous sections, we can identify the ratio of the derivatives of the inverse of m1
using Z. In particular, following the discussion in Matzkin (2005), one can show a constructive
way to recover this ratio from the distribution of (Y1 , Y2 ) conditional on Z. Suppose that
the model described by m1 and m2 satisfies the conditions of the nonadditive simultaneous
model described in 4.2.2.1.3. Impose the restriction that for all (y1 , y2 , z)
                                   ¯                                       ¯
                                   ¯ ∂r1 (y1 ,y2 )        ∂r1 (y1 ,y2 ) ¯
                                   ¯                                       ¯
                                   ¯ ∂r2 (y∂y1 ,y1 2 ,z) ∂r2 (y∂y1 ,y
                                                                   2
                                                                     2 ,z)
                                                                           ¯=1
                                   ¯      ∂y                  ∂y
                                                                           ¯
                                          1              2


where r1 is the inverse of m1 with respect to ε1 and r2 is the inverse of m2 with respect to
ε2 . Consider the identification of
                                 µ                ¶−1 µ                ¶
                                   ∂r1 (y1 , y2 )       ∂r1 (y1 , y2 )
                                       ∂y2                  ∂y1
at a particular value (y1 , y2 ) . Assume that for ε1 = r1 (y1 , y2 ) there exists at least one value
ε2 such that
                             ∂fε (ε1 , ε2 )            ∂fε(ε1 , ε2 )
                                            6= 0 and                  =0
                                   ∂ε1                     ∂ε2

                                                   51
and that for at least one value z ∗ of Z, ε2 = r2 (y1 , y2 , z∗ ) . Then,

    Then,
            µ                    ¶−1 µ                    ¶        µ                               ¶−1 µ                               ¶
                ∂r1 (y1 , y2 )           ∂r1 (y1 , y2 )                ∂fY1 ,Y2 |Z=z∗ (y1 , y2 )           ∂fY1 ,Y2 |Z=z∗ (y1 , y2 )
 (4.h)                                                        =
                    ∂y2                      ∂y1                                 ∂y2                                 ∂y1
                                 ∂fY1 ,Y2 |Z=z∗ (y1 , y2 )                        ∂r2 (y1 , y2 , z ∗ )
for any z ∗ such that                                      = 0 and                                     6= 0
                                            ∂z                                          ∂z

Proof of (4.h): Since fY |Z is generated by (r1 , r2 ) and fε , and the Jacobian determinant
of (r1 , r2 ) equals to 1 everywhere, for any z ∗

                             fY1 ,Y2 |Z=z∗ (y1 , y2 ) = fε1 ,ε2 (r1 (y1 , y2 ), r2 (y1 , y2 , z ∗ )) .

Suppose that z ∗ is such ∂fY1 ,Y2 |Z=z∗ (y1 , y2 )/∂z = 0 and ∂r2 (y1 , y2 , z ∗ )/∂z 6= 0. Diﬀerentiating
the above equality, one gets that
                   ∂fY1 ,Y2 |Z=z∗ (y1 , y2 )   ∂fε (r1 (y1 , y2 ), r2 (y1 , y2 , z ∗ )) ∂r2 (y1 , y2 , z ∗ )
                                             =
                              ∂z                               ∂ε2                            ∂z
Since ∂r2 (y1 , y2 , z ∗ )/∂z 6= 0 and ∂fY1 ,Y2 |Z=z∗ (y1 , y2 )/∂z = 0, it must be that

                                           ∂fε (r1 (y1 , y2 ), r2 (y1 , y2 , z ∗ ))
                                                                                    =0
                                                           ∂ε2
Diﬀerentiating with respect to y1 and y2 both sides of the equality fY1 ,Y2 |Z=z∗ (y1 , y2 ) =
fε1 ,ε2 (r1 (y1 , y2 ), r2 (y1 , y2 , z ∗ )) , it then follows that

      ∂fY1 ,Y2 |Z=z∗ (y1 , y2 )   ∂fε(r1 (y1 , y2 ), r2 (y1 , y2 , z ∗ )) ∂r1 (y1 , y2 )    ∂r2 (y1 , y2 , z ∗ )
                                =                                                        +0
                ∂y2                              ∂ε1                          ∂y2                 ∂y2
      ∂fY1 ,Y2 |Z=z∗ (y1 , y2 )   ∂fε(r1 (y1 , y2 ), r2 (y1 , y2 , z ∗ )) ∂r1 (y1 , y2 )    ∂r2 (y1 , y2 , z ∗ )
                                =                                                        +0
                ∂y1                              ∂ε1                          ∂y1                 ∂y1
Hence, (4.h) follows.




4.3.4. Replacement functions
A replacement function is a function that expresses an unobservable variable in terms of
observable variables. In Nonadditive Models, Pakes and Olley (1996) presented this idea to
deal with a nonadditive, unobserved eﬃciency index. Using the strict monotonicity between
investment and the unobserved index variable, conditional on observable age and capital
stock of the firm, they expressed the unobserved eﬃciency index in terms of age, capital stock,
and investment, and used this to substitute the unobserved variable in terms of the observable
variables. Chesher (2003) derived replacement functions from conditional distributions, and
use them to derive expressions for the derivatives of functions in a triangular system of

                                                                  52
equations with nonadditive random terms. Chesher used a local independence assumption.
We will analyze here a special case of Chesher’s model where the independence restrictions
are stronger.
   Suppose that the model of consumer demand is

                                          Y = m (p, I, ε, η)

where ε and η are unobservable variables. Suppose that I is determined by ε and an
observable variable Z, according to a function re, strictly increasing in ε :

                                             I = re (Z, ε)
Assume that Z is distributed independently of (ε, η) . Then,

                                         ∂m (p, I, ε, η)
                               (4.i)                     is identified
                                              ∂I


Proof of (4.i): Letting r denote the inverse of re with respect to ε and substituting in the
demand function, we have that

                                       Y = m (p, I, r (Z, I) , η)
Let
                               v (p, I, Z, η) = m (p, I, r (Z, I) , η)
Note that
            ∂v (p, I, Z, η)   ∂m (p, I, r (Z, I) , η) ∂m (p, I, r (Z, I) , η) ∂r (Z, I)
                            =                        +
                 ∂I                    ∂I                      ∂ε                ∂I
and
                         ∂v (p, I, Z, η)   ∂m (p, I, r (Z, I) , η) ∂r (Z, I)
                                         =
                              ∂Z                    ∂ε                ∂Z
Hence,                                                                       " ∂r(Z,I) #
               ∂m (p, I, ε, η)             ∂v (p, I, Z, η) ∂v (p, I, Z, η)       ∂I
                               |ε=r(Z,I) =                −                    ∂r(Z,I)
                    ∂I                          ∂I              ∂Z
                                                                                 ∂Z
   This implies that, if we know the functions v and r, we can identify the derivative of m
with respect to I, at particular values of ε and δ. But, the models

                                             I = re (Z, ε)
and
                                          Y = v (p, I, Z, η)

are just the Independent Nonadditive Model, when ε and Z are independently distributed,
and when (p, I, Z) and η are also independently distributed Hence, the derivatives of re and
of v are identified from the distribution of, respectively, (I, Z) and (Y, p, I, Z). In particular,
using the results in the previous section, it immediately follows that

                                                  53
                                             ·                ¸
                          ∂v (p, I, Z, η)      ∂FY |I,Z (y ∗ ) −1 ∂FY |I,Z (y ∗ )
                                          =−
                               ∂I                   ∂y                 ∂I
and                                          ·                ¸
                          ∂v (p, I, Z, η)      ∂FY |I,Z (y ∗ ) −1 ∂FY |I,Z (y ∗ )
                                          =−
                               ∂Z                   ∂y                 ∂I

at y∗ such that y∗ = m (I, Z, η) . Diﬀerentiating the expression

                                        Fε (r (Z, I)) = FY |I,Z (y)
which can be shown to be equivalent to the expression

                                       Fε (ε) = FY |I,Z (e
                                                         r (I, Z, ε))
we get, similarly, that
                                        ·                   ¸−1
                           ∂r (Z, I)      ∂Fε (ε)               ∂FY |I,Z (y)
                                     =−           |ε=r(Z,I)
                              ∂I            ∂ε                      ∂I
and                                     ·                   ¸−1
                           ∂r (Z, I)      ∂Fε (ε)               ∂FY |I,Z (y)
                                     =−           |ε=r(Z,I)
                              ∂Z            ∂ε                     ∂Z
Hence,
                           ·               ¸ "                 " ∂F          ∗ #
                                                                   Y |I,Z (y )
                                                                                                    #
         ∂m (p, I, ε, η)     ∂FY |I,Z (y∗ ) −1 ∂FY |I,Z (y ∗ )        ∂I           ∂F Y |I,Z (y ∗
                                                                                                  )
                         =                                       ∂F       (y ∗)  −
              ∂I                  ∂y               ∂Z              Y |I,Z                ∂I
                                                                        ∂Z

 at ε = r (I, Z) and y∗ = m (p, I, ε, η) .
    Hence, using the variable Z we can identify the derivative of m with respect to I, leaving
the value of ε fixed.



4.3.5. Panel Data


    In many circumstances, one is able to observe a large number of individuals for at least
two time periods, or one is able to observe at least two individuals from each group. If the
observations for each individual along time or each group across individuals are influenced by
a common vector of unobservable random terms, one can use them to achieve identification
of otherwise nonidentified elements.




                                                     54
4.3.5.1. Nonadditive Model
   Altonji and Matzkin (2005) considered the identification of the nonadditive model
                                           Yik = m (Xik , ψ(εi , η ik ))
where ψ is a real valued function, m is strictly increasing in its last coordinate, k = 1, 2, and
i = 1, ..., N. They imposed the exchangeability condition that for any e,
                                    fψ|Xi1 =x,Xi2 =x0 (e) = fψ|Xi1 =x0 ,Xi2 =x (e)
where fψ|Xi1 ,Xi2 denotes the conditional pdf of ψ conditional on Xi1 = x, Xi2 = x0 . The
motivation for such a model is that εi represents a fixed eﬀect of group i, and η ik represents
the idiosyncratic eﬀect of individual k in group i. An example could be one where Yik denotes
income of sibling k in family i, Xik denotes year of education of sibling k in family i, and εi
denotes an unobservable family eﬀect. The model imposes the restriction that m is weakly
separable in the unobservable variables. The exchangeability assumption states that the
density of the unobservable eﬀect, conditional on sibling 1 having x years of education and
sibling 2 having x0 years of education is the same as the density of the unobservable eﬀect,
conditional on sibling 1 having x0 years of education and sibling 2 having x years of education.
An example where this is satisfied is when ψ(εi , ηik ) = εi + η ik , the density of εi conditional
on X1 , X2 is exchangeable (that is, for all e, fεi |Xi1 =x,Xi2 =x0 (e) = fεi |Xi1 =x0 ,Xi2 =x (e)), and
η i1 , η i2 , εi are independently distributed, conditional on Xi1 , Xi2 . To identify the function m,
a normalization is required. Assume that for some x and all e, m (x, e) = e. Assume also
that f (e|x1 , x2 ) is strictly positive everywhere, for all e, x1 , x2 . Then, Altonji and Matzkin
(2005) show that
                             FY1 |X1 =x,X2 =x (m(x, e)) = FY1 |X1 =x,X2 =x (m (x, e))
Hence, making use of the normalization and the strict monotonicity of FY1 |X1 =x,X2 =x
                                                   ¡                       ¢
                        m(x, e) = FY−1
                                    1 |X1 =x,X2 =x
                                                     F Y1 |X1 =x,X2 =x (e)
which shows the identification of m. Given m and FY |X , one can identify Fψ|X by following
similar arguments to those used in previous subsections.
   Rather than imposing a normalization, one may ask what can be identified without
imposing any normalization. Let x denote a value of X but impose no particular form for
m (x, e) . Let y ∗ = m(x, e). Then,
                                                      ¡                         ¢
                          m (x, e) = FY−1
                                       1 |X1 =x,X2 =x
                                                        FY1 |X1 =x,X2 =x (y ∗ )
and for any x0

                                     ¡                            ¢
       m(x0 , e) = FY−1      0
                     1 |X1 =x ,X2 =x
                                      FY1 |X1 =x,X2 =x0 (m (x, e))
                                      ³                                      ¡                          ¢´
                  = FY−1      0
                      1 |X1 =x ,X2 =x
                                       F Y1 |X1 =x,X2 =x0 (F
                                                             −1
                                                             Y1 |X1 =x,X2 =x   F Y1 |X1 =x,X2 =x (y ∗
                                                                                                      )  )
Hence, the eﬀect of changing X from x to x0 is
               m(x0 , e) − m(x, e)
                                    ³                                   ¡                     ¢´
           =   FY−1       0
                  1 |X1 =x ,X2 =x
                                                         −1
                                     FY1 |X1 =x,X2 =x0 (FY1 |X1 =x,X2 =x FY1 |X1 =x,X2 =x (y ) ) − y ∗
                                                                                            ∗




                                                         55
4.3.5.2. Nonadditive Index Model
    Abrevaya (2000) established the identification of the coeﬃcients of a linear index model
for panel data models with two observations. Abrevaya’s model was

                          Yit = D ◦ G (βXit , εi , η it )         i = 1, ..., N; t = 1, 2
where for each εi , the function G is strictly increasing in β ∗ Xit and η it . The function D is
assumed to be monotone increasing and nonconstant, (ηi1 , η i2 ) is independent of (Xi1 , Xi2 , εi )
and has support R2 , and one of the coordinates of Xit is continuously distributed with support
R, conditional on the other coordinates. The model is then like the one studied in Han (1987)
with the added fixed eﬀect εi . In the same way that Matzkin (1991) modified the arguments
in Han (1987) to show the identification of a nonparametric index function, one can modify
Abrevaya’s arguments to establish the identification of the nonparametric function h∗ in the
model
                     Yit = D ◦ G (h∗ (Xit ), εi , η it ) i = 1, ..., N ; t = 1, 2

    Theorem: Assume that the function G is strictly increasing in its first and third argu-
ments; the function D is monotone increasing and nonconstant; (η i1 , ηi2 ) is independent of
(Xi1 , Xi2 , εi ) ; conditional on εi , (Xi1 , η i1 ) is independent of (Xi2 , η i2 ) ; and (Xi1 , Xi2 ) has
support R2 . Let h∗ belong to a set of continuous, homogeneous of degree one functions, h,
that are strictly increasing in the last coordinate, and satisfy h(x) = α. Then, within this
set, h∗ is identified.

    Proof: Suppose that h belongs to the set of continuous, homogeneous of degree one
functions, that are strictly increasing in the last coordinate, and satisfy h(x) = α, and that
h 6= h∗ . Then, following the arguments in Matzkin (1991), one can show that there exist
neighborhoods N1 and N2 such that for all x001 ∈ N1 and x002 ∈ N2 ,

                                 h∗ (x001 ) > h∗ (x002 ) and       h(x001 ) < h(x002 )
For each εi , the model is as the one considered in Matzkin (1991). Hence, by analogous
arguments, it follows by independence that, conditional on εi , since h∗ (x001 ) > h∗ (x002 )
                       Pr [Yit > Yis |Xit = x001 , Xis = x002 , εi ; h∗ ]
                 =     Pr {(η it , η is) |D ◦ G (h∗ (x001 ), εi , η it ) > D ◦ G (h∗ (x002 ), εi , η is) }
                 =     Pr {(η it , η is) |D ◦ G (h∗ (x001 ), εi , η it ) > D ◦ G (h∗ (x002 ), εi , η is) }
                 <     Pr {(η it , η is) |D ◦ G (h∗ (x001 ), εi , η it ) < D ◦ G (h∗ (x002 ), εi , η is) }
                 =     Pr [Yit > Yis |Xit = x001 , Xis = x002 , εi ; h∗ ]
And, since h(x001 ) < h(x002 ),


                        Pr [Yit > Yis |Xit = x001 , Xis = x002 , εi ; h]
                   =    Pr {(η it , η is ) |D ◦ G (h(x001 ), εi , η it ) > D ◦ G (h(x002 ), εi , η is ) }
                   =    Pr {(η it , η is ) |D ◦ G (h(x001 ), εi , η it ) > D ◦ G (h(x002 ), εi , η is ) }
                   >    Pr {(η it , η is ) |D ◦ G (h(x001 ), εi , η it ) < D ◦ G (h(x002 ), εi , η is ) }
                   =    Pr [Yit > Yis |Xit = x001 , Xis = x002 , εi ; h]

                                                          56
   Integrating over any two possible distributions for εi conditional on (x001 , x002 ) , we get

        Pr [Yit > Yis |Xit = x001 , Xis = x002 ; h∗ ] < Pr [Yit > Yis |Xit = x001 , Xis = x002 ; h∗ ]
and
         Pr [Yit > Yis |Xit = x001 , Xis = x002 ; h] > Pr [Yit > Yis |Xit = x001 , Xis = x002 ; h]
    Hence, the distribution of the observable variables is diﬀerent under h than under h∗ . It
follows that h∗ is identified.



5. Conclusions

    This chapter has reviewed and extended some of the recent results on identification in
nonparametric models. We have considered models with additive and with nonadditive un-
observables, models weakly separable into a function of the observable variables, and models
with simultaneity. Diﬀerent methods of achieving identification were described. These
include the use of restrictions and the use of additional data.



6. References

  ABREVAYA, J. A. (2000) "Rank Estimation of a Generalized Fixed-Eﬀects Regression
Model," Journal of Econometrics, 95, 1-23.

    ALTONJI, J.G. and R.L. MATZKIN (1997) “Cross Section and Panel Data Estimators
for Nonseparable Models with Endogenous Regressors,” Econometrica, forthcoming.

   BLUNDELL, R. and J. L. POWELL (2003) "Endogeneity in Nonparametric and Semi-
parametric Regressin Models," in Advances in Economics and Econometrics, Theory and
Applications, Eighth World Congress, Volume II, edited by M. Dewatripont, L.P. Hansen,
and S.J.Turnovsky, Cambridge University Press, Cambridge, U.K.

   CHAMBERLAIN, G. (1984) "Panel Data," in Handbook of Econometrics, Vol. 2, edited
by Z. Griliches and M.D. Intriligator, Elsevier Science, Amsterdam.

   CHESHER, A. (2003) "Identification in Nonseparable Models," Econometrica, 71, 1405-
1441.

    DAS, M. (2001) "Monotone Comparative Statics and Estimation of Behavioral Parame-
ters," mimeo, Columbia University.




                                                     57
    DAS, M. (2004) "Instrumental Variables Estimators of Nonparametric Models with Dis-
crete Endogenous Regressors," Journal of Econometrics, 124, 335-361.

   HAUSMAN, J.A. and W.E. TAYLOR (1983): "Identification in Linear Simultaneous
Equations Models with Covariance Restrictions: An Instrumental Variables Interpretation,"
Econometrica, Vol. 51, No. 5, 1527-1550.

    HECKMAN, J.J. and R. ROBB (1985) "Alternative Methods for Evaluating the Impact
of Interventions," in Longitudinal Analysis of Labor Market Data, edited by J.J. Heckman
and B. Singer, Econometric Society Monograph 10, Cambridge University Press, Cambridge,
U.K.

   HECKMAN, J.J. and R. WILLIS (1977) “A Beta-Logistic Model for the Analysis of
Sequential Labor Force Participation by Married Women,” Journal of Political Economy.

   HOROWITZ, J. (1998) Semiparametric Methods in Econometrics, Springer-Verlag, New
York.

   HSIAO, C. (1983), "Identification," in Handbook of Econometrics, Vol. 1, edited by Z.
Griliches and M.D. Intriligator, North-Holland Publishing Company.

   IMBENS, G.W. AND W.K. NEWEY (2003) “Identification and Estimation of Triangular
Simultaneous Equations Models Without Additivity,” mimeo, M.I.T.

   LANCASTER, T. (1979) “Econometric Methods for the Analysis of Unemployment”
Econometrica, 47, 939-956.

   MATZKIN, R.L. (1994) “Restrictions of Economic Theory in Nonparametric Methods,”
in Handbook of Econometrics, Vol. IV, edited by R.F. Engel and D.L. McFadden.

   MATZKIN, R.L. (2003) "Nonparametric Estimation of Nonadditive Random Functions,"
Econometrica, 71, 1339-1375.

   MATZKIN, R.L. (2004) "Unobservable Instruments," mimeo, Northwestern University.

    MATZKIN, R.L. (2005) "Identification in Nonparametric Simultaneous Equations Mod-
els," mimeo, Northwestern University.

   McFADDEN, D. (1974) “Conditional Logit Analysis of Qualitative Choice Behavior,” in
P. Zarembka, ed. Frontiers in Econometrics, pp105-142, New York: Academic Press.

   OLLEY, G.S. and A. PAKES (1996) “The Dynamics of Productivity in the Telecommu-
nications Equipment Industry,” Econometrica, Vol. 64, 6, 1263-1297.

   PAGAN A. and A. ULLAH (1999) Nonparametric Econometrics, Cambridge University
Press, Cambridge, U.K.

                                           58
    YATCHEW, A. (2003) Semiparametric Regression for the Applied Econometrician, Cam-
bridge Univeristy Press, Cambridge, U.K.




                                         59
60



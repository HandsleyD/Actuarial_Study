---
normalized_id: shared-pdf-reference-econometric-mehtods-for-modeling-producer-behavious
exam_code: SHARED
material_scope: econometric mehtods for modeling producer behavious.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Econometric Mehtods for Modeling Producer Behavious.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-econometric-mehtods-for-modeling-producer-behavious

Chapter 31


ECONOMETRIC  METHODS                                                FOR MODELING
PRODUCER  BEHAVIOR
DALE      W. JORGENSON

Harvard       University



Contents

1.     Introduction                                                                   1842
       1.1. Production            theory                                              1842
       1.2.      Parametric       form                                                1844
       1.3.      Statistical     method                                               1845
       1.4.      Overview        of the paper                                         1847
2.     Price functions                                                                1848
       2.1,      Duality                                                              1849
       2.2.      Substitution       and technical      change                         1851
       2.3.      Parametrization                                                      1855
       2.4.      Integrability                                                        1857
 3.    Statistical methods                                                            1860
       3.1.      Stochastic       specification                                       1860
       3.2.      Autocorrelation                                                      1862
       3.3.      Identification       and estimation                                  1865
 4.    Applications of price functions                                                1871
       4.1.      Substitution                                                         1872
       4.2.      Technical       change                                               1876
       4.3.      Two stage allocation                                                 1882
 5.    Cost functions                                                                 1884
       5.1.      Duality                                                              1884
       5.2.      Substitution       and economies        of scale                     1886
       5.3.      Parametrization           and integrability                          1889
       5.4,      Stochastic       specification                                       1891
 6.    Applications of cost functions                                                 1893
       6.1.      Economies         of scale                                            1893
       6.2.      Multiple       outputs                                                1897
 7.    Conclusion                                                                      1900
       7.1.      General       equilibrium        modeling                             1900
       7.2.      Panel data                                                            1902
       7.3.      Dynamic         models of production                                  1904
 References                                                                            1905

 Handbook of Econometrics, Volume III, Edited by Z. Griliches and M.D. Intriligator
 Q Elsevier Science Publishers B V, 1986
1842                                                                                   D. W. Jorgensott




1. Introduction

The purpose of this chapter is to provide an exposition of econometric                        methods
for modeling       producer behavior. The objective of econometric                   modeling is to
determine    the nature of substitution         among inputs, the character of differences in
technology,     and the role of economies of scale. The principal                   contribution     of
recent advances in methodology               has been to exploit the potential of economic
theory in achieving this objective.
   Important      innovations     in specifying econometric        models have arisen from the
dual formulation         of the theory of production.            The chief advantage           of this
formulation     is in generating demands and supplies as explicit functions of relative
prices. By using duality in production              theory, these functions        can be specified
without imposing arbitrary restrictions on patterns of production.
   The econometric        modeling of producer behavior requires parametric                 forms for
demand and supply functions. Patterns of production                   can be represented in terms
of unknown        parameters     that specify the responses of demands and supplies to
changes in prices, technology, and scale. New measures of substitution,                      technical
change, and economies of scale have provided greater flexibility in the empirical
determination       of production     patterns.
   Econometric       models of producer behavior take the form of systems of demand
and supply functions. All the dependent               variables in these functions depend on
the same set of independent          variables. However, the variables and the parameters
may enter the functions            in a nonlinear      manner.     Efficient estimation       of these
parameters     has necessitated the development           of statistical methods for systems of
nonlinear    simultaneous      equations.
   The new methodology           for modeling producer behavior has generated a rapidly
expanding body of empirical work. We illustrate the application                   of this methodol-
ogy by summarizing            empirical     studies of substitution,       technical    change, and
economies      of scale. In this introductory         section we first review recent method-
ological developments         and then provide a brief overview of the paper.



1.1.   Production     theory

The economic     theory of production-   as presented   in such classic treatises as
Hick’s Value and Capital (1946) and Samuelson’s            Foundations   of Economic
Analysis (1983)-is    based on the maximization   of profit, subject to a production
function.  The objective of this theory is to characterize      demand    and supply
functions,  using only the restrictions   on producer     behavior   that arise from
Ch. 31: Economeiric Methods for Modeling Producer Behuvior                                              1843

optimization.         The principal      analytical     tool employed       for this purpose is the
implicit function theorem.’
    Unfortunately,         the characterization      of demands and supplies as implicit func-
tions of relative prices is inconvenient             for econometric      applications.    In specifying
an econometric          model of producer behavior the demands and supplies must be
expressed as explicit functions. These functions can be parametrized                         by treating
measures of substitution,           technical change, and economies of scale as unknown
parameters        to be estimated on the basis of empirical data.
    The traditional          approach     to modeling        producer    behavior     begins with the
assumption         that the production        function is additive and homogeneous.                 Under
 these restrictions       demand and supply functions can be derived explicitly from the
production         function     and the necessary         conditions     for producer       equilibrium.
 However, this approach has the disadvantage                   of imposing constraints       on patterns
of production         - thereby frustrating       the objective of determining           these patterns
empirically.
    The traditional        approach was originated by Cobb and Douglas (1928) and was
employed        in empirical research by Douglas and his associates for almost two
decades.2 The limitations             of this approach were made strikingly                 apparent     by
Arrow, Chenery, Minhas, and Solow (1961, henceforward                           ACMS), who pointed
out that the Cobb-Douglas               production      function imposes a priori restrictions           on
patterns      of substitution      among inputs. In particular,           elasticities of substitution
 among all inputs must be equal to unity.
     The constant elasticity of substitution           (CES) production       function introduced by
ACMS adds flexibility to the traditional                   approach by treating the elasticity of
 substitution       as an unknown parameter.3 However, the CES production                        function
 retains the assumptions          of additivity and homogeneity          and imposes very stringent
 limitations     on patterns of substitution.         McFadden (1963) and Uzawa (1962) have
 shown, essentially,         that elasticities of substitution       among all inputs must be the
 same.
     The dual formulation          of production       theory has made it possible to overcome
 the limitations       of the traditional     approach to econometric modeling. This formu-
 lation was introducted           by Hotelling (1932) and later revived and extended by
 Samuelson        (1954, 1960)4 and Shephard (1953, 1970).5 The key features of the

   ‘This approach    to production   theory is employed by Carlson (1939). Frisch (1965), and Schneider
(1934). The English edition of Frisch’s book is a translation         from the ninth edition of his lectures,
published in Norwegian      in 1962; the first edition of these lectures dates back to 1926.
   *These studies are summarized by Douglas (1948). See also: Douglas (1967, 1976). Early economet-
ric studies of producer behavior, including those based on the Cobb-Douglas            production  function,
have been surveyed by Heady and Dillon (1961) and Walters (1963). Samuelson (1979) discusses the
impact of Douglas’s research.
   3Econometric    studies based on the CES production          function have been surveyed by Griliches
(1967), Jorgenson (1974) Kennedy and Thirlwall (1972). Nadiri (1970), and Nerlove (1967).
1844                                                                                          D. W. Jorgenson

dual formulation    are, first, to characterize the production      function by means of a
dual representation     such as a price or cost function         and, second, to generate
explicit demand and supply functions as derivatives of the price or cost function.h
   The dual formulation      of production     theory embodies the same implications      of
optimizing   behavior    as the theory presented        by Hicks (1946) and Samuelson
(1983). However, the dual formulation         has a crucial advantage in the development
of econometric    methodology:     Demands and supplies can be generated as explicit
functions of relative prices without imposing the arbitrary constraints         on produc-
tion patterns required in the traditional         methodology.   In addition, the implica-
tions of production    theory can be incorporated       more readily into an econometric
model.


1.2.    Parametric     form


Patterns    of producer behavior can be described most usefully in terms of the
behavior     of the derivatives     of demand      and supply functions.7      For example,
measures of substitution       can be specified in terms of the response of demand
patterns to changes in input prices. Similarly, measures of technical change can be
specified in terms of the response of these patterns to changes in technology. The
classic formulation     of production    theory at this level of specificity can be found in
Hicks’s Theory of Wages (1963).
   Hicks (1963) introduced       the elasticity of substitution    as a measure of substitu-
tability. The elasticity of substitution       is the proportional    change in the ratio of
two inputs with respect to a proportional             change in their relative price. Two
inputs have a high degree of substitutability          if this measure exceeds unity and a
low degree of substitutability         if the measure is less than unity. The unitary
elasticity of substitution    employed in the Cobb-Douglas          production  function is a
borderline    case between high and low degrees of substitutability.
   Similarly, Hicks introduced        the bias of technical change as a measure of the
impact of changes in technology on patterns of demand for inputs. The bias of
technical change is the response of the share of an input in the value of output to
a change in the level of technology. If the bias is positive, changes in technology

   4Hotelling   (1932) and Samuelson (1954) develop the dual formulation         of production   theory on the
basis of the Legendre        transformation. This approach     is employed by Jorgenson       and Lau (lY74a,
1974b) and Lau (1976,197Sa).
   5Shephard     utilizes distance functions  to characterize     the duality between cost and production
functions. This approach is employed by Diewert (1974a, lY82), Hanoch (1978), McFadden                  (1978),
and Uzawa (1964).
   6Surveys of duality in the theory of production       are presented by Diewert (1982) and Samuelson
(1983).
   ‘This approach        to the selection of parametric    forms is discussed by Diewert (1974a), Fuss,
McFadden,     and Mundlak (1978). and Lau (1974).
Ch. 31: Econometric Methods for Modeling Producer Behavior                                          1845

increase demand for the input and are said to use the input; if the bias is negative,
changes in technology decrease demand for the input and are said to save input.
If technical change neither uses nor saves an input, the change is neutral in the
sense of Hicks.
   By treating measures of substitution          and technical change as fixed parameters
the system of demand and supply functions                can be generated         by integration.
Provided     that the resulting functions       are themselves integrable,        the underlying
price or cost function         can be obtained      by a second integration.         As we have
already pointed out, Hicks’s elasticity of substitution             is unsatisfactory     for this
purpose, since it leads to arbitrary restrictions on patterns of producer behavior.
   The introduction        of a new measure of substitution,           the share elasticity, by
Christensen,     Jorgenson, and Lau (1971, 1973) and Samuelson (1973) has made it
possible    to overcome the limitations          of parametric    forms based on constant
elasticities of substitution.’     Share elasticities, like biases of technical change, can
be defined in terms of shares of inputs in the value of output. The share elasticity
of a given input is the response of the share of that input to a proportional              change
in the price of an input.
   By taking share elasticities and biases of technical change as fixed parameters,
demand functions         for inputs &th constant share elasticities and constant biases
of technical change can be obtained by integration.             The shares of each input in
the value of output can be taken to be linear functions of the logarithms of input
prices and of the level of technology. The share elasticities and biases of technical
change can be estimated as unknown parameters of these functions.
   The constant       share elasticity (CSE) form of input demand functions                can be
integrated     a second time to obtain the underlying           price or cost function.        For
example, the logarithm of the price of output can be expressed as a quadratic
function    of the logarithms of the input prices and the level of technology. The
price of output can be expressed as a transcendental                 or, more specifically, an
exponential       function    of the logarithms       of the input        prices.’ Accordingly,
Christensen,      Jorgenson,    and Lau refer to this parametric          form as the translog
price functi0n.l’


1.3.   Statistical method

Econometric       models of producer behavior take the form of systems                     of demand
and supply      functions. All the dependent variables in these functions                  depend on

   sA more detailed discussion of this measure is presented in Section 2.2 below.
   9An alternative  approach, originated by Diewert (1971, 1973, 1974b), employs the square roots of
the input prices rather than the logarithms and results in the “generalized Leontief” parametric   form.
   ‘OSurveys of parametric    forms employed    in econometric    modeling  of producer   behavior    are
presented by Fuss, McFadden,      and Mundlak (1978) and Lau (1986).
1846                                                                                 D. W. Jorgenson

the same set of independent          variables-for       example, relative prices and the level
of technology.     The variables may enter these functions in a nonlinear                manner, as
in the translog demand functions proposed by Christensen,                  Jorgenson, and Lau.
The functions      may also be nonlinear         in the parameters.     Finally, the parameters
may be subject to nonlinear constraints             arising from the theory of production.
   The selection of a statistical method for estimation of systems of demand and
supply functions depends on the character of the data set. For cross section data
on individual      producing    units, the prices that determine demands and supplies
can be treated as exogenous variables. The unknown parameters can be estimated
by means of nonlinear multivariate            regression techniques. Methods of estimation
appropriate     for this purpose were introduced            by Jennrich (1969) and Malinvaud
(1970,1980).1’
   For time series data on aggregates such as industry groups, the prices that
determine     demands     and supplies can be treated as endogenous                 variables. The
unknown      parameters      of an econometric          model of producer       behavior     can be
estimated by techniques appropriate            for systems of nonlinear simultaneous           equa-
tions. One possible approach is to apply the method of full information                   maximum
likelihood. However, this approach has proved to be impractical,                  since it requires
the likelihood function for the full econometric              model, not only for the model of
producer behavior.
   Jorgenson     and Laffont (1974) have developed limited information                 methods for
estimating the systems of nonlinear simultaneous               equations that arise in modeling
producer     behavior.    Amemiya       (1974) proposed        to estimate a single nonlinear
structural   equation by the method of nonlinear two stage least squares. The first
step in this procedure is to linearize the equation and to apply the method of two
stage least squares to the linearized equation. Using the resulting estimates of the
coefficients of the structural equation, a second linearization             can be obtained and
the process can be repeated.
   Jorgenson     and Laffont extended Amemiya’s approach to a system of nonlinear
simultaneous      equation by introducing         the method of nonlinear        three stage least
squares.    This method requires an estimate of the covariance                      matrix of the
disturbances     of the system of equations as well as an estimate of the coefficients
of the equations. The procedure is initiated by linearizing the system and applying
the method of three stage least squares to the linearized system. This process can
be repeated, using a second linearization.12
    It is essential    to emphasize       the role of constraints        on the parameters         of
econometric     models implied by the theory of production.              These constraints      may
take the form of linear or nonlinear             restrictions   on the parameters       of a single

   “Methods   for estimation of nonlinear multivariate regression models are summarized by Malinvaud
(1980).
   “Nonlinear    two and three stage least squares methods are also discussed by Amemiya (1977),
Gallant (1977), and Gallant and Jorgenson (1979).
Ch. 31: Econometric    Methods for Modeling Producer Behavior                                    1847

equation or may involve restrictions on parameters that occur in several equa-
tions. An added complexity arises from the fact that the restrictions may take the
form of equalities or inequalities. Estimation under inequality restrictions requires
nonlinear programming techniques.13
   The constraints that arise from the theory of production can be used to provide
tests of the validity of the theory. Similarly, constraints that arise from simplifica-
tion of the patterns of production can be tested statistically. Methods for
statistical inference in multivariate nonlinear regression models were introduced
by Jennrich (1969) and Malinvaud (1970,198O). Methods for inference in systems
of nonlinear simultaneous equations were developed by Gallant and Jorgenson
(1979) and Gallant and Holly (1980).14



1.4.   Overview       of the paper

This paper begins with the simplest form of the econometric methodology for
modeling producer behavior. This methodology is based on production under
constant returns to scale. The dual representation of the production function is a
price function, giving the price of output as a function of the prices of inputs and
the level of technology. An econometric model of producer behavior is generated
by differentiating the price function with respect to the prices and the level of
technology.
   We present the dual formulation of the theory of producer behavior under
constant returns to scale in Section 2. We parameterize this model by taking
measures of substitution and technical change to be constant parameters. We
than derive the constraints on these parameters implied by the theory of produc-
tion. In Section 3 we present statistical methods for estimating this model of
producer behavior under linear and nonlinear restrictions. Finally, we illustrate
the application of this model by studies of data on individual industries in Sec-
tion 4.
   In Section 5 we consider the extension of econometric modeling of producer
behavior to nonconstant returns to scale. In regulated industries the price of
output is set by regulatory authority. Given the demand for output as a function
of the regulated price, the level of output can be taken as exogenous to the
producing unit. Necessary conditions for producer equilibrium can be derived
from cost minimization. The minimum value of total cost can be expressed as a
function of the level of output and the prices of all inputs. This cost function
provides a dual representation of the production function.

   I3Constrained estimation is discussed in more detail in Section 3.3 below.
   “‘Surveys of methods for estimation of nonlinear multivariate  regressions and systems of nonlinear
simultaneous    equations are given by Amemiya (1983) and Malinvaud (1980), especially Chs 9 and 20.
Computational     techniques are surveyed by Quandt (1983).
1848                                                                     D. W. Jorgenson

    The dual formulation of the theory of producer behavior under nonconstant
returns to scale parallels the theory under constant returns. However, the level of
output replaces the level of technology as an exogenous determinant of produc-
tion patterns. An econometric model can be parametrized by taking measures of
substitution and economies of scale to be constant parameters. In Section 6 we
illustrate this approach by means of studies of data on individual firms in
regulated industries.
    In Section 7 we conclude the paper by outlining frontiers for future research.
Current empirical research has focused on the development of more elaborate and
more detailed data sets. We consider, in particular, the modeling of consistent
time series of inter-industry transactions tables and the application of the results
to general equilibrium analysis of the impact of economic policy. We also discuss
the analysis of panel data sets, that is, time series of cross sections of observations
on individual producing units.
    Current methodological research has focused on dynamic modeling of produc-
tion. At least two promising approaches to this problem have been proposed;
both employ optimal control models of producer behavior. The first is based on
static expectations with all future prices taken to be equal to current prices. The
second approach is based on stochastic optimization under rational expectations,
utilizing information about expectations of future prices contained in current
production patterns.



2.   Price functions

The purpose of this section is to present the simplest form of the econometric
methodology for modeling producer behavior. We base this methodology on a
production function with constant returns to scale. Producer equilibrium implies
the existence of a price function, giving the price of output as a function of the
prices of inputs and the level of technology. The price function is dual to the
production function and provides an alternative and equivalent description of
technology.
   An econometric model of producer behavior takes the form of a system of
simultaneous equations, determining the distributive shares of the inputs and the
rate of technical change. Measures of substitution and technical change give the
responses of the distributive shares and the rate of technical change to changes in
prices and the level of technology. To generate an econometric model of producer
behavior we treat these measures as unknown parameters to be estimated.
   The economic theory of production implies restrictions on the parameters of an
econometric model of producer behavior. These restrictions take the form of
linear and nonlinear constraints on the parameters. Statistical methods employed
in modeling producer behavior involve the estimation of systems of nonlinear
Ch. 31: Econometric       Methods for Modeling Producer Behavior                                      1 x49

simultaneous    equations with parameters subject to constraints.    These constraints
give rise to tests of the theory of production and tests of restrictions   on patterns
of substitution   and technical change.



2. I.     Duality

In order to present the theory of production         we first require some notation. We
denote the quantity      of output by y and the quantities        of J inputs by x1( j =
1,2.. . J). Similarly, we denote the price of output by q and the prices of the J
inputs by p,(j=l,2...       J). We find it convenient     to employ vector notation for
the input quantities    and prices:
   x = (Xi, x 2.. . xJ) -vector of input quantities.
   P = (Pl? P2.. . pJ) - vector of input prices.
   We assume that the technology can be represented by a production function, say
F, where:

        Y = F(x, t>,                                                                                (2.1)
and t is an index of the level of technology. In the analysis of time series data for
a single producing unit the level of technology can be represented by time. In the
analysis of cross section data for different producing units the level of technology
can be represented    by one-zero dummy variables corresponding       to the different
units.15
   We can define the shares of inputs in the value of output by:

                PJXj
        u_=
         J
                -            (j=l,Z...J).
                 ClY ’

Under competitive    markets for output and all inputs the necessary conditions for
producer equilibrium    are given by equalities between the share of each input in
the value of output and the elasticity of output with respect to that input:


        u=S(x,t),                                                                                   (2.2)
where

    u = (Ul, u2..       . uJ) -vector   of value shares.
    lnx       = (lnx,,lnx,...      In xJ) - vector of logarithms   of input   quantities.

   15Time series and cross section differences in technology have been incorporated          into a model
of substitution     and technical change in U.S. agriculture by Binswanger  (1974a,         1974b, 1978~).
Binswanger’s    study is summarized in Section 4.2 below.
1850                                                                                               D. W. Jorgenson

   Under constant    returns           to scale the elasticities           and       the value    shares   for all
inputs sum to unity:

       i,u=i’alny         =I

                   dlnx        ’

where i is a vector of ones. The value of output is equal to the sum of the values
of the inputs.
   Finally, we can define the rate of technical change, say u,, as the rate of growth
of the quantity of output holding all inputs constant:


       ut =$y(x,t).                                                                                          (2.3)


It is important    to note that this definition does not impose any restriction   on
patterns of substitution   among inputs.
   Given the identity between the value of output and the value of all inputs and
given equalities between the value share of each input and the elasticity of output
with respect to that input, we can express the price of output as a function, say Q,
of the prices of all inputs and the level of technology:

       q=Q(~,t).                                                                                             (2.4)
We refer to this as the price function for the producing unit.
   The price function   Q is dual to the production    function F and provides an
alternative and equivalent description  of the technology of the producing unit.16
We can formalize this description in terms of the following properties of the price
function:

   1. Positiuity.   The price function is positive for positive input prices.
   2.  Homogeneity.    The price function is homogeneous        of degree one in the
input prices.
   3. Monotonicity.    The price function is increasing the input prices.
   4. Concauity.    The price function is concave in the input prices.

   Given differentiability          of the price function, we can express the value shares of
all inputs as elasticities         of the price function with respect to the input prices:


       u=z(P,t),                                                                                             (2.5)

   “The   dual formulation     of production   theory   under   constant   returns    to scale is due to Samuelson
(1954).
Ch. 31: Econometric Methods for Modeling Producer Behavior                                     1851

where:

  Inp=(lnp,,lnp,...               In pJ) -vector    of logarithms    of input   prices.

Further, we can express the negative of the rate of technical change as the rate of
growth of the price of output, holding the prices of all inputs constant:


                                                                                              (2.6)
   Since the price function Q is homogeneous     of degree one in the input prices,
the value shares and the rate of technical change are homogeneous-of    degree zero
and the value shares sum to unity:

       i,“=i’alnq=1
                   alnp       .

Since the price function           is increasing   in the input     prices the value shares must be
nonnegative,

       u 22 0.

Since the value shares sum to unity,               we can write:

       u 2 0,

where        u 2 0 implies   u 2 0 and u # 0.



2.2.        Substitution   and technical change

We have represented         the value shares of all inputs and the rate of technical
change as functions       of the input prices and the level of technology.     We can
introduce      measures of substitution   and technical change to characterize   these
functions     in detail. For this purpose we differentiate the logarithm of the price
function twice with respect to the logarithms of input prices to obtain measures of
substitution:

        u      a2lnq(p,t)=
               =
                                      j&(PT         4.                                        (2.7)
            pp alnp2
   We refer to the measures of substitution (2.7) as share elasticities, since they
give the response of the value shares of all inputs to proportional      changes in
1852                                                                                 D. W. Jorgenson

the input prices. If a share elasticity is positive, the corresponding value share
increases with the input price. If a share elasticity is negative, the value share
decreases with the input price. Finally, if a share elasticity is zero, the value
share is independent of the price.17
   Second, we can differentiate the logarithm of the price function twice with
respect to the logarithms of input prices and the level of technology to obtain
measures of technical change:


                                                                                               P-8)

We refer to these measures as biases of technical change. If a bias of technical
change is positive, the corresponding value share increases with a change in the
level of technology and we say that technical change is input-using. If a bias of
technical change is negative, the value share decreases with a change in technol-
ogy and technical change is input-sauing. Finally, if a bias is zero, the value share
is independent of technology; in this case we say that technical change is
neutral.18
   Alternatively, the vector of biases of technical change uPl can be employed to
derive the implications of changes in input prices for the rate of technical change.
If a bias of technical change is positive, the rate of technical change decreases
with the input price. If a bias is negative, the rate of technical change increases
with the input price. Finally, if a bias is zero so that technical change is neutral,
the rate of technical change is independent of the price.
   To complete the description of technical change we can differentiate the
logarithm of the price function twice with respect to the level of technology:


                                                                                               (2.9)


We refer to this measure as the deceleration of technical change, since it is the
negative of rate of change of the rate of technical change. If the deceleration is
positive, negative, or zero, the rate of technical change is decreasing, increasing, or
independent of the level of technology.
   The matrix of second-order logarithmic derivatives of the logarithm of the price
function Q must be symmetric. This matrix includes the matrix of share elastici-
ties UPP, the vector of biases of technical change up,, and the deceleration of
technical change u,,. Concavity of the price function in the input prices implies

   17The share elasticity  was introduced    by Christensen, Jorgenson,  and Lau (1971, 1973) and
Samuelson (1973).
   “This definition of the bias of technical change is due to Hicks (1963). Alternative definitions of
biases of technical change are compared by Binswanger (1978b).
Ch. 31: Econometric Methods for Modeling Producer Behavior                                        1853

that matrix of second-order  derivatives, say H, is nonpositive              definite,   so that the
matrix UPP + vu’ - V is nonpositive    definite, where:


      +NH.N=U,,+w’-V;


the price of output     q is positive   and the matrices      N and V are diagonal:




    We can define substitution          and complementarity     of inputs in terms of the
matrix of share elasticities UPP and the vector of value shares u. We say that two
inputs are substitutes if the corresponding          element of the matrix UpP + uu’ - V is
negative. Similarly, we say that two inputs are complements if the corresponding
element of this matrix is positive. If the element of this matrix corresponding             to
the two inputs is zero, we say that the inputs are independent. The definition of
substitution     and complementarity        is symmetric in the two inputs, reflecting the
symmetry of the matrix uPP + uu’- V. If there are only two inputs, nonpositive
definiteness    of this matrix tmplies that the inputs cannot be complements.”
    We next consider restrictions on patterns of substitution         and technical change
implied by separability       of the price function Q. The most important      applications
of separability    are associated with aggregation over inputs. Under separability        the
price of output can be represented as a function of the prices of a smaller number
of inputs by introducing        price indexes for input aggregates. By treating the price
of each aggregate as a function              of the prices of the inputs making up the
aggregate, we can generate a second stage of the model.
    We say that the price function               Q is separable in the K input prices
 { PI> P2.. . pK}   if and  only   if the  price  function can be represented  in the form:

                                                                                              (2.10)

where the function P is independent    of the J - K input prices { pK+ I, pK12.. . pJ}
and the level of technology t. *’ We say that the price function is homothetically
separable if the function P in (2.10) is homogeneous     of degree one.21 Separability
of the price function implies homothetic separability.22

  “Alternative definitions of substitution  and complementarity are discussed by Samuelson   (1974).
  2oThe concept of separability is due to Leontief (1947a, 1947b) and Sono (1961).
  “The concept of homothetic separability was introduced by Shephard (1953, 1970).
  22A proof of this proposition  is given by Lau (1969, 1978a).
1x54                                                                                       D. W. Jmgenson


   The price function   Q is homothetically     separable     in the K input prices
{ pl, p2.. . pK} if and only if the production       function    F is homothetically
separable in the K input quantities {x1, x2.. . xK}:

                                                                                                    (2.11)

where the function    G is homogenous      of degree one and independent    of J - K
quantities {x~+~,x~+*...     xJ } and the level of technology t.23
   We can interpret   the function   P in the definition of separability of the price
function as a price index; similarly, we can interpret the function G as a quantity
index. The price index is dual to the quantity index and has properties analogous
to those of the price function:

   1.     Positivity.  The price index is positive for positive input prices.
   2.     Homogeneity.    The price index is homogeneous      of degree one in the input
prices.
   3.     Monotonicity.    The price index is increasing in the i@ut prices.
   4.     Concavity.    The price index is concave in the input prices.

   The total cost of the K inputs            included    in the price index       P, say c, is the sum
of expenditures  on all K inputs:

             K

       c=    c PkXk.
            k=l

We can define the quantity           index G for this aggregate         as the ratio of total cost to
the price index P:

       G=$.                                                                                         (2.12)

The product of the price and quantity indexes for the aggregate is equal to the
cost of the K inputs.24
   We can analyze the implications      of homothetic   separability by introducing
price and quantity    indexes of aggregate input and defining the value share of
aggregate input in terms of these indexes. An aggregate input can be treated in
precisely the same way as any other input, so that price and quantity indexes can
be used to reduce the dimensionality    of the space of input prices and quantities.
The price index generates a second stage of the model, by treating the price of
each aggregate as a function of the prices of the inputs making up the aggregate.25

   23A proof of this proposition     is given by Lau (1978a).
   24Thi~ characterization    of price and quantity indexes was originated by Shephard (1953, 1970).
   25Gorman     (1959) has analyzed the relationship      between aggregation  over commodities    and two
stage allocation.   A presentation    of the theory of two stage allocation and references to the literature
are given by Blackorby,     Primont, and Russell (1978).
Ch. 31: Econometric   Methods for Modeling Producer Behavior                                       1855

2.3.    Parametrization

In the theory of producer behavior the dependent variables are value shares of all
inputs and the rate of technical change. The independent      variables are prices of
inputs and the level of technology.       The purpose of an econometric     model of
producer    behavior is to characterize   the value shares and the rate of technical
change as functions of the input prices and the level of technology.
   To generate an econometric model of producer behavior a natural approach is
to treat the measures of substitution   and technical change as unknown parameters
to be estimated. For this purpose we introduce the parameters:

                                                                                                (2.13)


where Bpp is a matrix of constant share elasticities, & is a vector of constant
biases of technical      change, and /3,, is a constant   deceleration   of technical
change.26
    We can regard the matrix of share elasticities, the vector of biases of technical
change, and the deceleration      of technical change as a system of second-order
partial differential equations. We can integrate this system to obtain a system of
first-order partial differential equations:

       u=a,+B,,lnp+j$,.t,

        - u, = (Y, + &ln    p + &,. t,                                                         (2.14)


where the parameters - aP, a, - are constants of integration.
   To provide an interpretation     of the parameters - aP, a, -we first normalize the
input prices. We can set the prices equal to unity where the level of technology t
is equal to zero. This represents a choice of origin for measuring         the level of
technology and a choice of scale for measuring the quantities and prices of inputs.
The vector of parameters     LYEis the vector of value shares and the parameter (Y, is
the negative of the rate of technical charge where the level of technology t is zero.
   Similarly,  we can integrate the system of first-order partial differential      eqs.
(2.14) to obtain the price function:

       1np=cu~+a~1np+a;t+~1np’B,,1np+1np’&;t+~~,;t2,                                           (2.15)


where     the parameter     CQ is a constant       of integration.     Normalizing      the price of

   26Share elasticities were introduced  as constant parameters  of an econometric  model of producer
behavior by Christensen,     Jorgenson, and Lau (1971, 1973). Constant share elasticities, biases, and
deceleration  of technical change are employed by Jorgenson       and Fraumeni (1981) and Jorgenson
(1983, 1984b). Binswanger      (1974a, 1974b, 1978~) uses a different definition of biases of technical
change in parametrizing    an econometric model with constant share elasticities.
1856                                                                                   D. W. Jorgenson

output so that it is equal to unity where t is zero, we can set this parameter equal
to zero. This represents a choice of scale for measuring the quantity and price of
output.
   For the price function (2.15) the price of output is a transcendental            or, more
specifically,    an exponential     function of the logarithms    of the input prices. We
refer to this form as the transcendental logarithmic price function or, more simply,
the translog price function,         indicating   the role of the variables.  We can also
characterize      this price function      as the constant share elasticity or CSE price
function,     indicating   the role of the fixed parameters.    In this representation   the
scalars - (Y,, p, -the vectors - (Ye,&, - and the matrix Bpp are constant parameters
that reflect the underlying       technology. Differences in levels of technology among
time periods for a given producing unit or among producing units at a given point
of time are represented by differences in the level of technology t.
   For the translog price function the negative of the average rates of technical
change at any two levels of technology, say t and t - 1, can be expressed as the
difference between successive logarithms of the price of output, less a weighted
 average of the differences between successive logarithms of the input prices with
weights given by the average value shares:

       -U,=lnq(t)-lnq(t-l)-iY[lnp(t)-lnp(t-l)].                                                  (2.16)

In the expression        (2.16) U, is the average rate of technical        change,


       v,=f[u,(t)+u,(t-l)],

and the vector       of average value shares U is given by:

       U=i[u(t)+U(t-.l)].

We refer to the expression        (2.16), introduced    by Christensen   and Jorgenson
(1970), as the translog rate of technical change.
   We have derived the translog price function as an exact representation            of a
model of producer behavior with constant share elasticities and constant biases
and deceleration     of technical change. 27 An alternative   approach to the translog
price function,    based on a Taylor’s series approximation        to an arbitrary  price
function,    was originated     by Christensen,    Jorgenson,   and Lau (1971, 1973).
Diewert (1976, 1980) has shown that the translog rate of technical change (2.16) is
exact for the translog price function and the converse.
   Diewert    (1971, 1973, 1974b) introduced         the Taylor’s series approach      for
parametrizing    models of producer behavior based on the dual formulation         of the

   “Arrow, Chenery, Minhas, and Solow (1961) have derived the CES production       function   as an exact
representation of a model of producer behavior with a constant elasticity of substitution.
Ch. 31: Econometric Methods for Modeling Producer Behuvior                                             1857

theory of production.       He utilized this approach      to generate the “generalized
Leontief” parametric     form, based on square root rather than logarithmic transfor-
mations of prices. Earlier, Heady and Dillon (1961) had employed Taylor’s series
approximations     to generate parametric     forms for the production     function, using
both square root and logarithmic transformations          of the quantities of inputs.
   The limitations    of Taylor’s series approximations        have been emphasized      by
Gallant (1981) and Elbadawi, Gallant, and Souza (1983). Taylor’s series provide
only a local approximation        to an arbitrary    price or production     function. The
behavior    of the error of approximation         must be specified in formulating       an
econometric    model of producer behavior. To remedy these deficiencies Gallant
(1981) has introduced     global approximations     based on Fourier series.28



2.4.      Integrability

The next stop in generating our econometric         model of producer behavior is to
incorporate   the implications   of the econometric      theory of production.    These
implications   take the form of restrictions   on the system of eqs. (2.14), consisting
of value shares of all inputs u and the rate of technical             change u,. These
restrictions are required to obtain a price function Q with the properties we have
listed above. Under these restrictions       we say that the system of equations        is
integrable. A complete set of conditions for integrability     is the following:

2.4, I.     Homogeneity

The value shares and the rate of technical change are homogeneous         of degree zero
in the input prices.
   We first represent the value shares and the rate of technical change as a sys-
tem of eqs. (2.14). Homogeneity         of the price function        implies   that the
parameters - Bpp, BPt -in this system must satisfy the restrictions:

       Bp,i = 0,
                                                                                                    (2.17)
       &,i = 0,


where i is a vector        of ones. For J inputs         there are J+l        restrictions   implied    by
homogeneity.

   ‘aAn alternative   approach    to the generation   of the translog parametric   form for the production
function by means of the Taylor’s series was originated by Kmenta (1967). Kmenta employs a Taylor’s
series expansion in terms of the parameters       of the CES production   function. This approach imposes
the same restrictions   on patterns of production     as those implied by the constancy of the elasticity of
substitution.  The Kmenta approximation        is employed by Griliches and Ringstad (1971) and Sargan
(1971), among others, in estimating the elasticity of substitution.
1858                                                                                             D. W. Jorgenson

2.4.2.        Product exhaustion

The sum of the value shares is equal to unity.
   Product exhaustion   implies that the value of the J inputs is equal to the value
of the product.     Product     exhaustion implies that the parameters-    (Y*, Bpp,
j?,* -must satisfy the restrictions:

         ffbi =l,

         Bipi = 0,

         &i    = 0.                                                                                     (2.18)


For J inputs          there are J + 2 restrictions        implied     by product       exhaustion.

2.4.3.        Symmetry

The matrix of share elasticities, biases of technical change, and the deceleration                             of
technical change must be symmetric.
   A necessary   and sufficient condition      for symmetry   is that the matrix                               of
parameters  must satisfy the restrictions:

                                            I



                                                                                                         (2.19)



For J inputs          the total number      of symmetry          restrictions     is iJ( J + 1).

2.4.4.        Nonnegativity

The value shares must be nonnegative.                   Nonnegativity           is implied   by monotonicity
of the price function:

          alnq
          alnp      >=O’

For the translog           price function       the conditions      for monotonicity         take the form:

          alnq
         -=~~~+B~,lnp+/$;t~O.                                                                            (2.20)
         alnp

Since the translog price function is quadratic in the logarithms of the input prices,
we can always choose prices so that the monotonicity         of the price function is
Ch. 31: EconometricMethoakfor Modeling Producer Behavior                                           1859

violated.   Accordingly,  we cannot impose            restrictions on the parameters   that
would imply nonnegativity       of the value          shares for all prices and levels of
technology.   Instead, we consider restrictions        that imply monotonicity of the value
shares wherever they are nonnegative.

2.4.5.        Monotonicity

The matrix of share elasticities must be nonpositive        definite.
   Concavity   of the price function       implies that the matrix         BPP + uu’ - V is
nonpositive  definite. Without violating the product exhaustion and nonnegativity
restrictions we can set the matrix uu’ - V equal to zero. For example, we can
choose one of the value shares equal to unity and all the others equal to zero. A
necessary condition    for the matrix BP, + uu’ - V to be nonpositive        definite is that
the matrix of constant share elasticities BP, must be nonpositive              definite. This
condition is also sufficient, since the matrix uu’ - V is nonpositive       definite and the
sum of two nonpositive     definite matrixes is nonpositive    definite.29
   We can impose concavity on the translog price functions by representing                the
matrix of constant share elasticities Bpp in terms of its Cholesky factorization:

         Bpp = TDT’,


where T is a unit lower triangular matrix and D is a diagonal matrix. For J
inputs we can write the matrix BP, in terms of its Cholesky factorization as
follows:




where:




         T=




  The matrix of constant share elasticities Bpp must satisfy restrictions implied                    by
symmetry and product exhaustion. These restrictions imply that the parameters                        of

  29This approach  to global concavity was originated by Jorgenson   and Fraumeni      (1981). Caves and
Christensen (1980) have compared regions where concavity obtains     for alternative   parametric  forms
1860                                                                                      D. W. Jorpmon

the Cholesky       factorization   must satisfy the following         conditions:

        1+h,,+A,,+       ... +x,,=o,
        1+X,,+A,,+        *.* +x,2=0,
         ...........................
        8.J                          = 0.

Under these conditions there is a one-to-one transformation      between the elements
of the matrix of share elasticities    BPP and the parameters          of the Cholesky
factorization-   T, D. The matrix of share elasticities is nonpositive    definite if and
only if the diagonal elements {S,, 8, _._S,_,} of the matrix D are nonpositive.3”



3.      Statistical methods

Our model of producer behavior is generated from a translog price function for
each producing     unit. To formulate     an econometric      model of production       and
technical change we add a stochastic component           to the equations for the value
shares and the rate of technical change. We associate this component                   with
unobservable    random    disturbances    at the level of the producing         unit. The
producer maximizes profits for given input prices, but the value shares of inputs
are subject to a random disturbance.
   The random disturbances       in an econometric    model of producer behavior may
result from errors in implementation     of production plans, random elements in the
technology not reflected in the model of producer behavior, or errors of measure-
ment in the value shares. We assume that each of the equations              for the value
shares and the rate of technical change has two additive components.          The first is a
nonrandom    function of the input prices and the level of technology;       the second is
an unobservable     random disturbance      that is functionally   independent    of these
variables.31



3. I.     Stochastic   specification

To represent      an econometric     model of production     and technical  change we
require     some additional   notation.   We consider    observations   on the relative
distribution    of the value of output among all inputs and the rate of technical

   30The Cholesky factorization      was first proposed for imposing local concavity restrictions  by Lau
(1978b).
   31Different stochastic specifications are compared by Appelbaum (1978), Burgess (1975), and Geary
and McDonnell     (1980). The implications of alternative stochastic specifications are discussed in detail
by Fuss, McFadden,       and Mundlak (1978).
Ch. 31: Economeiric Methods for Modeling Producer Behavior                              1861

change. We index the observations           by levels of technology    (f = 1,2.. . T). We
employ a level of technology indexed by time as an illustration            throughout    the
following discussion. The vector of value shares in the t th time period is denoted
u’(t =1,2 . . . T). Similarly, the rate of technical change in the t th time period is
denoted       u:. The vector of input prices in the t th time period is denoted
p,(t =1,2...      2’). Similarly, the vector of logarithms   of input prices is denoted
lnp,(t=1,2...T).
    We obtain an econometric         model of production    and technical change corre-
sponding       to the translog price function by adding random disturbances           to the
equations      for the value shares and the rate of technical change:

     v’ = LYE+ BJn           pt + /3,,.     t + E’,

     ~:=“~+Pd,lnp,+P,;t+~:,                            @=1,2.X),                      (34

where ef is the vector of unobservable    random disturbances    for the value shares of
the t th time period and E: is the corresponding         disturbance    for the rate of
technical change. Since the value shares for all inputs sum to unity in each time
period, the random disturbances     corresponding  to the J value shares sum to zero
in each time period:

     i’d = 0,             @=1,2...T),                                                 (3.2)

so that these disturbances are not distributed independently.
   We assume that the unobservable    random disturbances     for all J + 1 equations
have expected value equal to zero for all observations:


     E     E:=O,             (t=1,2...7).                                             (3.3)
          [Iet

We also assume that the disturbances     have a covariance matrix that is the same
for all observations;  since the random disturbances      corresponding to the J value
shares sum to zero, this matrix is nonnegative    definite with rank at most equal to
J. We assume that the covariance matrix of the random disturbances         correspond-
ing to the value shares and the rate of technical change, say Z, has rank J, where:


     v=          “1 =Z,          (t =1,2...      T).
             [Iat

   Finally,  we assume that the random disturbances        corresponding      to distinct
observations    in the same or distinct equations    are uncorrelated.       Under this
assumption    the covariance matrix of random disturbances     for all observations    has
1862                                                                          D. W. .Jorgenson

the Kronecker      product      form:

             1
            81


            E:




                                                                                       (3.4)




3.2.    Autocorrelation

The rate of technical change ui is not directly observable; we assume that the
equation for the translog price index of the rate of technical change can be
written:

        -~~=~~~+Pd,lnp,+P~~.t+E:,                      (t =1,2...T),                   (3.5)

where    Ej is the average disturbance             in the two periods:

       E:=$[E;+E:-r],               (t=1,2...T).

Similarly, 6    is a vector of averages of the logarithms of the input prices and t
is the average of time as an index of technology in the two periods.
   Using our new notation, the equations for the value shares of all inputs can be
written:

       V*= cyP+ BJn        pr+ &.       i + 2,        (t =1,2...   T),                 (3.6)

where E* is a vector of averages of the disturbances  in the two periods. As before,
the average value shares sum to unity, so that the average disturbances      for the
equations corresponding    to value shares sum to zero:

       i’E’ = 0,        (t =1,2...T).                                                  (3.7)

   The covariance        matrix of the average disturbances   corresponding     to the equa-
tion for the rate        of technical change for all observations     is proportional   to a
Ch. 31: Econometric       Methods for Modeling Producer Behavior                   1863

Laurent    matrix:




                                                                                 (3.8)


where:

             1
              2
                                   ...
             1                     ...

     s2=     ii                   ...


             0        0      0

   The covariance   matrix of the average disturbance    corresponding   to the equa-
tion for each value share is proportional      to the same Laurent       matrix. The
covariance   matrix of the average disturbances       for all observations    has the
Kronecker   product form:




                                                                                 (3.9)




   Since the matrix D in (3.9) is known, the equations        for the average rate of
technical change and the average value shares can be transformed          to eliminate
autocorrelation. The matrix 52 is positive definite, so that there is a matrix P such
that:

     POP’ = I,
     P’P = r’.

  To construct  the matrix P we first invert the matrix D to obtain the inverse
matrix tip’, a positive definite matrix. We then calculate the Cholesky factoriza-
1864                                                                          D. W. Jorgenson


tion of the inverse    matrix    K’,

         Q-t = TDT’.

where T is a unit lower triangular         matrix and D is a diagonal matrix with positive
elements along the main diagonal.          Finally, we can write the matrix P in the form:




where D112 is a diagonal matrix with elements along the main diagonal equal to
the square roots of the corresponding   elements of D.
   We can transform    equations for the average rates of technical change by the




                      =
matrix P = D’12T’ to obtain equations with uncorrelated      random disturbances:




                                                                      1
                 v=
                  *                    1   lnp,,    ..a   2-i                    E2



                      1
                                                                                  f
                 u3
                  I
                                       1   lnp,,    ...   3-i                    .e3
                                                                                  f
         Dl/=T          Dl/=T’                                          + D”/=T’ .        9




                 -T                                       T-f
                 “t                    1   lnp,,    ...                              ET
                                                                                     :I
                                                                                      i3.10)

since:




The transformation        P = D ‘12T’ is applied to data on the average rates of
technical change U, and data on the average values of the variables that appear on
the right hand side of the corresponding      equation.
   We can apply the transformation          P = D ‘/*T’ to the equations    for average
value shares to obtain equations with uncorrelated       disturbances.   As before, the
transformation     is also applied to data on the average values of variables that
appear on the right hand side of the corresponding          equations.  The covariance
matrix of the transformed      disturbances  from the equations for the average value
shares and the equation        for the average rates of technical      change has the
Kronecker     product form:

                         IQ~W~T’) = a3I.
         (103W~~f)(2f8i2)(                                                            (3.11)

   To estimate the unknown parameters of the translog price function we combine
the first J - 1 equations for the average value shares with the equation for the
average rate of technical change to obtain a complete econometric       model of
production   and technical change. We can estimate the parameters of the equation
Ch. 31: Econometric   Methodr for ModelingProducer Behavior                                         1865

for the remaining    average value share, using the product exhaustion   restrictions
on these parameters.     The complete model involves :J( J + 3) unknown      parame-
ters. A total of $(.I” + 4J + 5) additional   parameters can be estimated as func-
tions of these parameters,      using the homogeneity,    product  exhaustion,     and
symmetry restrictions.32




3.3.   Identification    and estimation


We next discuss the estimation             of the econometric          model of production       and
technical change given in (3.5) and (3.6). The assumption                     that the input prices
and the level of technology             are exogenous      variables     implies that the model
becomes a nonlinear          multivariate   regression model with additive errors, so that
nonlinear    regression techniques can be employed. This specification is appropriate
for cross section data and individual           producing      units. For aggregate time series
data the existence of supply functions for all inputs makes it essential to treat the
prices as endogenous.         Under this assumption          the model becomes a system of
nonlinear    simultaneous      equations.
   To estimate the complete model of production                    and technical change by the
method of full information          maximum likelihood it would be necessary to specify
the full econometric       model, not merely the model of producer behavior. Accord-
ingly, to estimate the model of production             in (3.5) and (3.6) we consider limited
information      techniques.     For nonlinear      multivariate      regression    models we can
employ the method of maximum likelihood proposed by Malinvaud (1980).33 For
systems of nonlinear         simultaneous     equations    we outline the estimation          of the
model by the nonlinear three stage least squares (NL3SLS) method originated by
Jorgenson      and Laffont (1974). Wherever the right hand side variables can be
treated as exogenous,          this method reduces to limited information                 maximum
likelihood for nonlinear multivariate         regression models.
   Application      of NL3SLS to our model of production                    and technical change
would be straightforward,          except for the fact that the covariance matrix of the
disturbances     is singular. We obtain NL3SLS estimators of the complete system by
dropping     one equation and estimating            the resulting system of J equations            by
NL3SLS. The parameter             estimates are invariant        to the choice of the equation
omitted in the model.
   The NL3SLS estimator can be employed to estimate all parameters                            of the
model of production          and technical change, provided that these parameters                 are

   32This approach to estimation is presented by Jorgenson and Fraumeni (1981).
   33Maximum     likelihood estimation  by means of the “seemingly        unrelated regressions”   model
analyzed by Zellner (1962) would not be appropriate      here, since the symmetry constraints    we have
described in Section 2.4 cannot be written in the bilinear form considered by Zellner.
1866                                                                                  D. W. Jorgenson


identified.     The necessary     order condition   for identification     is that:

       f(J+3)      < (.I-l)min(V,r-l),                                                        (3.12)

where V’is the number of instruments.         A necessary and sufficient rank condition
is given below; this amounts            to the nonlinear    analogue     of the absence of
multicollinearity.
   Our objective is to estimate the unknown parameters-            (Ye, Bpp, ppt -subject   to
the restrictions       implied by homogeneity,     product    exhaustion,    symmetry,    and
monotonicity.       By dropping    the equation for one of the value shares, we can
eliminate the restrictions     implied by summability.     These restrictions   can be used
in estimating      the parameters   that occur in the equation that has been dropped.
We impose the restrictions        implied by homogeneity      and symmetry as equalities.
The restrictions      implied by monotonicity   take the form of inequalities.
   We can write the model of production        and technical change in (3.5) and (3.6) in
the form:




where u, ( j = 1,2. . . J - 1) is the vector of observations   on the distributive   share of
the j th input for all time periods, transformed       to eliminate autocorrelation,     u, is
the corresponding      vector of observations      on the rates of technical change; the
vector y includes       the parameters-     (Ye,at, Bpp, &, &,; h(j = 1,. . . ,2.. . J) is a
vector of nonlinear       functions    of these parameters;    finally, ej( j = 1,2.. . J) is
the vector of disturbances       in the jth equation, transformed      to eliminate autocor-
relation.
   We can stack the equations in (3.13), obtaining:

       U=_f(Y)+E,                                                                             (3.14)

where:




By the assumptions         in Section    3.1 above the random     vector    E has mean zero and
Ch. 31: Econometric Methods for Modeling Producer Behavior                                         1867

covariance   matrix E’,@I where 2, is obtained from the covariance ,S in (3.11) by
striking the row and column corresponding      to the omitted equation.
    The nonlinear   three stage least squares (NL3SLS) estimator for the model of
production    and technical change is obtained by minimizing    the weighted sum of
squared residuals:

      s(y) = [u-/(y)]‘
                     [~;‘a2(z~z)-‘z~][o-f(Y)],                                                 (3.15)

with respect to the vector of unknown       parameters    y, where Z is the matrix of
T - 1 observations   on the 1’ instrumental   variables. Provided that the parameters
are identified, we can apply the Gauss-Newton         method to minimize (3.15). First,
we linearize the model (3.14), obtaining:

               af
      U=f(Yo)+-(Yo)Ay+U,                                                                       (3.16)
                      ay
where     yO is the initial   value of the vector of unknown         parameters      y and

     Ay=y,-Yo,

where yr is the revised value of this vector. The fitted residuals u depend on the
initial and revised values.
    To revise the initial values we apply Zellner and Theil’s (1962) three stage least
squares method to the linearized model, obtaining:


     Ay=      ( ~(yo)'(~;l~Z(Z'Z)-'Z')~(yo))-l
        ~~(yo)'(e;1~z(z2)-1z')[u-f(yo)].                                                       (3.17)


If S(y,) > S(y,), a further iteration is performed by replacing y. by yi in (3.16)
and (3.17); resulting in a further revised value, say y2, and so on. If this condition
is not satisfied, we divide the revision A-y by two and evaluate the criteria S(y)
again; we continue         reducing the revision Ay until the criterion improves or
the convergence     criterion maxiAyj/yj     is less than some prespecified limit. If the
criterion  improves,      we continue   with further iterations.   If not, we stop the
iterative process and employ the current value of the vector of unknown parame-
ters as our NL3SLS estimator.34

   34Computational    techniques for constrained and unconstrained estimation of nonlinear multivariatc
regression models are discussed by Malinvaud (1980). Techniques for computation        of unconstrained
estimators  for systems of nonlinear simultaneous   equations are discussed by Bemdt, Hall, Hall, and
Hausman (1974) and Belsley (1974,1979).
1868                                                                            II. W. Jorgenson

   The final step in estimation of the model of production        and technical change is
to minimize     the criterion function (3.15) subject to the restrictions         implied by
monotonicity     of the distributive  shares. We have eliminated       the restrictions    that
take the form of equalities.         Monotonicity    of the distributive     shares implies
inequality   restrictions   on the parameters     of the Cholesky factorization         of the
matrix of constant share elasticities ,BP,. The diagonal elements of the matrix D
in this factorization     must be nonposltrve.
   We can represent the inequality constrains         on the matrix of share elasticities
BP, in the form:

       ~,(YkO,          (j=1,2...     J-l),                                             (3.18)

where J - 1 is the number of restrictions.     We obtain the inequality    constrained
nonlinear   three stage least squares estimator for the model by minimizing          the
criterion function subject to the constraints   (3.18). This estimator corresponds     to
the saddlepoint   of the Lagrangian  function:

       L=S(y)+X$,                                                                       (3.19)

where X is a vector of J- 1 Lagrange multipliers         and + is a vector of J - 1
constraints.
   The Kuhn-Tucker     (1951) conditions for a saddlepoint   of the Lagrangian (3.19)
are the first-order conditions:

       aL
       -=     as(Y) +,*=,                                                               (3.20)
       a~        au            ay     ’
and the complementary          slackness      condition:

       X$ = 0,        x 2 0.                                                            (3.21)

   To find a saddlepoint   of the Lagrangian   (3.19) we begin by linearizing     the
model of production   and technical change (3.14) as in (3.16). Second, we linearize
the constraints as:


       G(Y)   = $AY     ++(Y,),                                                          (3.22)


where y0 is a vector of initial values of the unknown parameters.           We apply Liew’s
(1976) inequality  constrained   three stage least squares method           to the linearized
model, obtaining
Ch. 31: Econometric Methods for Modeling Producer Behavior                                                       1869

where AS is the change in the values of the parameters                                      (3.17) and     X* is the
solution of the linear complementarity problem:




where:




                               ‘A=09
                     +$Y&Y-$(vo)   h20.


    Given an initial value of the unknown parameters
                                                    I        yO that satisfies the J - 1
constraints    (3.18), if S(y,) < S(y,) and S, satisfies the constraints,    the iterative
process continues by linearizing the model (3.14) as in (3.16) and the constraints
(3.18) as in (3.22) at the revised value of the vector of unknown             parameters
yr = yO + Ay. If not, we shrjnk Ay as before, continuing       until an improvement       is
found subject to the constraints         or maxjAy,/yj    is less than a convergence
criterion.
    The nonlinear     three stage least squares estimator obtained by minimizing        the
criterion   function    (3.15) is a consistent  estimator  of the vector of unknown
parameters     y. A consistent estimator of the covariance      matrix E’, with typical
element is ajk is given by

       n

      ~,~=~[“j-r,(p)]‘[u,-r,ol,                                  (j,   k=1,2..-J)-                            (3.24)

Under suitable                    regularity   conditions   the estimator            y is asymptotically     normal
with covariance                   matrix:


      v(y) =                  ( ~(y)‘(~;‘.z(z~z)-lz~)~(y)}jl.                                                 (3.25)


We obtain    a consistent  estimator  of this matrix by inserting    the consistent
estimators  T and 2, in place of the parameters     y and 2,. The nonlinear    three
stage least squares estimator is efficient in the class of instrumental   variables
estimators using Z as the matrix of instrumental variables.35

   35The method of nonlinear three stage least squares introduced  by Jorgenson and Laffont (1974)
was extended to nonlinear inequality constrained  estimation by Jorgenson,   Lau, and Stoker (19X2),
esp. pp. 196-204.
1870                                                                                   D. W. Jorgenson

   The rank condition    necessary and sufficient           for identifiability of the vector of
unknown     parameters    y is the nonsingularity             of the following matrix in the
neighborhood    of the true parameter vector:


                                                                                                   (3.26)


The order condition     (3.12) given above is necessary for the nonsingularity     of this
matrix.
   Finally, we can consider the problem of testing equality restrictions          on the
vector of unknown       parameters    y. For example, suppose that the maintained
hypothesis is that there are r = $( J + 3) elements in this vector after solving out
the homogeneity,      product    exhaustion, and symmetry     restrictions.   Additional
equality restrictions  can be expressed in the form:


       r=g@L                                                                                       (3.27)

where 6 is a vector            of unknown   parameters   with S elements,       s < r. We can test
the hypothesis:


       H: Y = g(S),

against     the alternative:

       A:   yzg(6).

Test statistics appropriate    for this purpose have been analyzed by Gallant and
Jorgenson (1979) and Gallant and Holly (1980).36
   A statistic for testing equality restrictions in the form (3.27) can be constructed
by analogy with the likelihood ratio principle. First, we can evaluate the criterion
function (3.15) at the minimizing value T, obtaining:


       s(y)=      [u-f(~)]‘[2;1sz(ztz)-1z~][u-f(Q)].
Second, we can replace the vector of unknown               parameters     y by the function          g(6)
in (3.27):


       S(6)= {u-f[g(s)]}'[~,lez(z~z)-'z~]{u-~~g~~)l};

  36A nonstatistical approach to testing the theory of production has been presented   by Afriat   (1972),
Diewert and Parkan (1983), Hanoch and Rothschild (1972), and Varian (1984).
Ch. 31: Econometric Methods for Modeling Producer Behavior                                             1871

minimizing     the criterion function with respect to S, we obtain the minimizing
value 8, the constrained       estimator of y, g(a), and the constrained       value of the
criterion itself S( 6).
    The appropriate    test statistic, say T(y, 8), is equal to the difference between the
constrained    and unconstrained       values of the criterion function:

      T(P,@=s@)-s(q).                                                                               (3.28)

Gallant and Jorgenson (1979) show that this statistic is distributed    asymptotically
as &i-squared     with r - s degrees of freedom. Wherever        the right hand side
variables can be treated as exogenous, this statistic reduces to the likelihood ratio
statistic for nonlinear   multivariate    regression models proposed    by Malinvaud
(1980). The resulting statistic is distributed asymptotically as chi-squared.37


4.   Applications of price functions

We first illustrate       the econometric      modeling of substitution         among inputs in
Section 4.1 by presenting an econometric             model for nine industrial sectors of the
U.S. economy         implemented       by Berndt and Jorgenson           (1973). The Berndt-
Jorgenson    model is based on a price function for each sector, giving the price of
output as a function of the prices of capital and labor inputs and the prices of
inputs of energy and materials. Technical change is assumed to be neutral, so that
all biases of technical change are set equal to zero.
   In Section 4.2 we illustrate the econometric modeling of both substitution                   and
technical change. We present an econometric model of producer behavior that has
been implemented           for thirty-five   industrial    sectors of the U.S. economy            by
Jorgenson    and Fraumeni (1981). In this model the rate of technical change and
the distributive      shares of productive       inputs are determined         simultaneously      as
functions of relative prices. Although the rate of technical change is endogenous,
this model must be carefully distinguished                from models of induced technical
change.
   Aggregation     over inputs has proved to be an extremely important               technique for
simplifying     the description       of technology      for empirical     implementation.      The
corresponding      restrictions can be used to generate a two stage model of producer
behavior. Each stage can be parametrized              separately; alternatively,    the validity of
alternative   simplifications     can be assessed by testing the restrictions.           In Section
4.3 we conclude with illustrations         of aggregation over inputs in studies by Berndt
and Jorgenson (1973) and Bemdt and Wood (1975).

   37Statistics for testing linear inequality restrictions in linear multivariate    regression models have
been developed by Gourieroux,        Holly, and Montfort (1982); statistics for testing nonlinear inequality
restrictions   in nonlinear multivariate regression models are given by Gourieroux,       Holly, and Monfort
(1980).
1872                                                                                    D. W. Jorgenson

4. I.   Substitution


In the Berndt-Jorgenson           (1973) model, production        is divided among nine sectors
of the U.S. economy:
   1. Agriculture,      nonfuel mining, and construction.
   2. Manufacturing,        excluding petroleum refining.
   3. Transportation.
   4. Communications,          trade, and services.
   5. Coal mining.
   6. Crude petroleum and natural gas.
   7. Petroleum refining.
   8. Electric utilities.
   9. Gas utilities.
   The    nine      producing       sectors    of the U.S. economy                included     in the
Berndt-Jorgenson         model can be divided among five sectors that produce energy
commodities-coal,         crude petroleum and natural gas, refined petroleum,                   electri-
city, and natural gas as a product of gas utilities-and                 four sectors that produce
nonenergy      commodities - agriculture,         manufacturing,       transportation,      and com-
munications.      For each sector output is defined as the total domestic supply of the
corresponding        commodity       group, so that the input into the sector includes
competitive     imports of the commodity, inputs of energy, and inputs of nonenergy
commodities.
   The Berndt-Jorgenson             model of producer          behavior     includes    a system of
equations    for each of the nine producing             sectors giving the shares of capital,
labor, energy and materials inputs in the value of output as functions of the prices
of the four inputs. To formulate an econometric model stochastic components                          are
added to this system of equations. The rate of technical change is taken to be
exogenous, so that the adjustment             for autocorrelation     described in Section 3.2 is
not required. However, all prices are treated as endogenous variables; estimates of
the unknown        parameters      of the econometric      model are based on the nonlinear
three stage least squares estimator presented in Section 3.3.
    The endogenous       variables in the Berndt-Jorgenson           model of producer behavior
include value shares of capital, labor, energy, and materials inputs for each sector.
Three equations        can be estimated for each sector, corresponding                to three of the
value shares, as in (2.14). The unknown parameters include three elements of the
vector { ap} and six share elasticities in the matrix { Bpp }, which is constrained                    to
be symmetric,       so that there is a total of nine unknown parameters.                   Berndt and
Jorgenson      estimate     these parameters        from time series data for the period
 1947-1971       for each industry;         the estimates      are presented       by Hudson        and
Jorgenson (1974).
    As a further illustration       of modeling of substitution       among inputs, we consider
 an econometric        model of the total manufacturing             sector of the U.S. economy
Ch. 31: Econometric   Methods for   Modeling   Producer   Behavior                                  1873


implemented       by Berndt and Wood (1975). This sector combines the manufactur-
ing and petroleum         refining sectors of the Berndt-Jorgenson           model. Berndt and
Wood generate this model by expressing the price of aggregate input as a function
of the prices of capital, labor, energy, and materials inputs into total manufactur-
ing. They find that capital and energy inputs are complements,                    while all other
pairs of inputs are substitutes.
    By comparison       with the results of Berndt and Wood, Hudson and Jorgenson
(1978) have classified patterns of substitution           and complementarity       among inputs
for the four nonenergy          sectors of the Berndt-Jorgenson         model. For agriculture,
nonfuel mining and construction,             capital and energy are complements               and all
other pairs of inputs are substitutes.            For manufacturing,       excluding petroleum
refining, energy is complementary           with capital and materials, while other pairs of
inputs are substitutes.        For transportation      energy is complementary        with capital
and labor while other pairs of inputs are substitutes. Finally, for communications,
 trade and services, energy and materials are complements                 and all other pairs of
inputs are substitutes.
    Bemdt     and Wood have considered               further simplification     of the Berndt-
Jorgenson      model of producer behavior by imposing separability                 restrictions   on
patterns of substitution        among capital, labor, energy, and materials inputs.38 This
would reduce the number of input prices at the first stage of the model through
 the introduction     of additional input aggregates. For this purpose additional stages
 in the allocation of the value of sectoral output among inputs would be required.
 Berndt and Wood consider all possible pairs of capital, labor, energy, and
 materials inputs, but find that only the input aggregate consisting of capital and
 energy is consistent with the empirical evidence.39
    Bemdt and Morrison            (1979) have disaggregated         the Berndt-Wood          data on
 labor input between blue collar and white collar labor and have studied the
 substitution    among the two types of labor and capital, energy, and materials
 inputs for U.S. total manufacturing,            using a translog price function. Anderson
 (1981) has reanalyzed the Bemdt-Wood               data set, testing alternative specifications
 of the model of substitution        among inputs. Gallant (1981) has fitted an alternative
 model of substitution        among inputs to these data, based on the Fourier functional
 form for the price function. Elbadawi, Gallant, and Souza (1983) have employed
 this approach      in estimating      price elasticities of demand for inputs, using the
 Berndt-Wood        data as a basis for Monte Carlo simulations of the performance                 of
 alternative   functional     forms.


   3RRestrictions on patterns of substitution implied by homothetic separability have been discussed by
Bemdt and Christensen (1973a). Jorgenson and Lau (1975), Russell (1975), and Blackorby and Russell
(1976).
   39The methodology    for testing separability restrictions was originated by Jorgenson and Lau (1975).
This methodology    has been discussed by Blackorby, Primont and Russell (1977) and by Denny and
Fuss (1977). An alternative approach has been developed by Woodland (1978).
1874                                                                                      D. W. Jorgenson


    Cameron      and Schwartz (1979) Denny, May, and Pinto (1978) Fuss (1977a),
 and McRae (1981) have constructed             econometric       models of substitution          among
capital, labor, energy, and materials inputs based on translog functional forms for
 total manufacturing       in Canada. Technical change is assumed to be neutral, as in
 the study of U.S. total manufacturing          by Berndt and Wood (1975) but noncon-
 stant returns to scale are permitted. McRae and Webster (1982) have compared
models of substitution        among inputs in Canadian manufacturing,                estimated from
data for different time periods.
    Friede (1979) has analyzed substitution               among capital, labor, energy, and
materials inputs for total manufacturing            in the Federal Republic of Germany. He
assumes that technical change is neutral and utilizes a translog price function. He
has disaggregated       the results to the level of fourteen industrial            groups, covering
the whole of the West German economy. He has separated materials inputs into
two groups-manufacturing             and transportation       services as one group and other
nonenergy     inputs as a second group. Ozatalay, Grubaugh,                 and Long (1979) have
modeled substitution         among capital, labor, energy and materials inputs, on the
basis of a translog price function. They use time series data for total manufactur-
ing for the period 1963-74 in seven countries-Canada,                    Japan, the Netherlands,
Norway, Sweden, the U.S., and West Germany.
    Longva and Olsen (1983) have analyzed substitution                     among capital, labor,
energy, and materials inputs for total manufacturing                   in Norway. They assume
that technical change is neutral and utilize a generalized Leontief price function.
They have disaggregated           the results to the level of nineteen             industry     groups.
These groups do not include the whole of the Norwegian                              economy;       eight
additional     industries     are included     in a complete            multi-sectoral       model      of
production      for Norway. Dargay (1983) has constructed                 econometric       models of
substitution     among capital, labor, energy, and materials inputs based on translog
functional    forms for total manufacturing           in Sweden. She assumes that technical
change is neutral, but permits nonconstant             returns to scale. She has disaggregated
the results to the level of twelve industry groups within Swedish manufacturing.
    Although the breakdown of inputs among capital, labor, energy, and materials
has come to predominate            in econometric      models of production          at the industry
level, Humphrey       and Wolkowitz (1976) have grouped energy and materials inputs
into a single aggregate input in a study of substitution                 among inputs in several
U.S. manufacturing        industries that utilizes translog price functions. Friedlaender
and Spady (1980) have disaggregated               transportation      services between trucking
and rail service and have grouped other inputs into capital, labor and materials
inputs.    Their study is based on cross section data for ninety-six                        three-digit
industries   in the United States for 1972 and employs a translog functional                       form
with fixed inputs.
    Parks (1971) has employed a breakdown of intermediate                   inputs among agricul-
tural materials,    imported materials and commercial               services, and transportation
Ch. 31: Econometric Methods for Modeling Producer Behavior                                         1875

services in a study of Swedish manufacturing                   based on the generalized         Leontief
functional      form. Denny and May (1978) have disaggregated                    labor input between
while collar and blue collar labor, capital input between equipment                          and struc-
tures, and have grouped all other inputs into a single aggregate input for
Canadian       total manufacturing,       using a translog functional          form. Frenger (1978)
has analyzed substitution           among capital, labor, and materials inputs for three
industries     in Norway, breaking down intermediate                 inputs in a different way for
each industry, and utilizing a generalized Leontief functional form.
   Griffin (1977a, 1977b, 1977c, 1978) has estimated                        econometric     models of
substitution      among inputs for individual           industries based on translog functional
forms. For this purpose he has employed data generated by process models of the
U.S. electric power generation, petroleum refining, and petrochemical                         industries
constructed       by Thompson,        et al. (1977). Griffin (1979) and i(opp and Smith
(1980a, 1980b, 1981a, 1981b) have analyzed the effects of alternative aggregations
of intermediate         inputs on measures of substitution              among inputs in the steel
industry.     For this purpose they have utilized data generated                      from a process
analysis model of the U.S. steel industry constructed                     by Russell and Vaughan
(1976).40
   Although we have concentrated              attention on substitution        among capital, labor,
energy, and materials           inputs, there exists a sizable literature             on substitution
among capital, labor, and energy inputs alone. In this literature the price function
is assumed to be homothetieally               separable in the prices of these inputs. This
requires     that all possible pairs of the inputs -capital                 and labor, capital and
energy, and labor and energy - are separable from materials inputs. As we have
observed above, only capital-energy               separability    is consistent with the results of
Berndt and Wood (1975) for U.S. total manufacturing.
   Appelbaum         (1979b) has analyzed substitution           among capital, labor, and energy
inputs in the petroleum and natural gas industry of the United States, based on
the data of Berndt and Jorgenson. Field and Grebenstein                        (1980) have analyzed
substitution       among physical capital, working capital, labor, and energy for ten
two-digit U.S. manufacturing            industries on the basis of translog price functions,
using cross section data for individual states for 1971.
   Griffin and Gregory (1976) have modeled substitution                       among capital, labor,
and energy          inputs    for total manufacturing              in nine major         industrialized
countries - Belgium, Denmark, France, Italy, the Netherlands,                      Norway, the U.K.,
the U.S., and West Germany-using                    a translog price function. They pool four
cross sections for these countries              for the years 1955, 1960, 1965, and 1969,
allowing for differences in technology                among countries by means of one-zero


   40The advantages  and disadvantages of summarizing data from process analysis models by means of
econometric   models have been discussed by Maddala and Roberts (1980, 1981) and Griffin (1980,
1981~).
1876                                                                              D. W. Jorgenson

dummy variables.           Their results differ substantially      from those of Berndt and
Jorgenson       and Berndt and Wood. These differences have led to an extensive
discussion      among Berndt and Wood (1979, 1981), Griffin (1981a, 1981b), and
Kang and Brown (1981), attempting               to reconcile the alternative approaches.
    Substitution      among capital, labor, and energy inputs requires a price function
that is homothetically          separable in the prices of these inputs. An alternative
specification     is that the price function is homothetically        separable in the prices of
capital, labor, and natural resource inputs. This specification has been utilized by
Humphrey        and Moroney (1975), Moroney and Toeves (1977,1979) and Moroney
and Trapani         (1981a, 1981b) in studies of substitution          among these inputs for
individual     manufacturing      industries in the U.S. based on translog price functions.
    A third alternative       specification   is that the price function is separable in the
prices of capital and labor inputs. Berndt and Christensen                   (1973b, 1974) have
used translog         price functions     employing    this specification    in studies of sub-
stitution among individual types of capital and labor inputs for U.S. total manu-
facturing.     Berndt and Christensen          (1973b) have divided capital input between
structures and equipment inputs and have tested the separability                 of the two types
of capital input from labor input. Berndt and Christensen                   (1974) have divided
labor input between blue collar and white collar inputs and have tested the
separability      of the two types of labor input from capital input. Hamermesh               and
Grant (1979) have surveyed the literature on econometric                  modeling of substitu-
tion among different types of labor input.
   Woodland     (1975) has analyzed substitution     among structures, equipment    and
labor inputs for Canadian manufacturing,        using generalized Leontief price func-
tions. Woodland      (1978) has presented    an alternative   approach  to testing sep-
arability and has applied it in modeling substitution       among two types of capital
input and two types of labor input for U.S. total manufacturing,              using the
translog parametric     form. Field and Berndt (1981) and Berndt and Wood (1979,
1981) have surveyed econometric         models of substitution     among inputs. They
focus on substitution      among capital, labor, energy and materials inputs at the
level of individual   industries.



4.2.   Technical change

The Jorgenson-Fraumeni       (1981) model is based on a production     function char-
acterized by constant returns to scale for each of thirty-five industrial    sectors of
the U.S. economy. Output is a function of inputs of primary factors of produc-
tion -capital  and labor services -inputs of energy and materials, and time as an
index of the level of technology. While the rate of technical change is endogenous
in this econometric  model, the model must be carefully distinguished     from models
of induced technical change, such as those analyzed by Hicks (1963) Kennedy
(1964), Samuelson    (1965), von Weizsacker (1962) and many others. In those
Ch. 31: Econometric   Methods for   Modeling   Producer   Behavior                                  1877


models the biases of technical change are endogenous                         and depend on relative
prices. As Samuelson (1965) has pointed out, models of induced technical change
require intertemporal        optimization        since technical change at any point of time
affects future production        possibilities.41
   In the Jorgenson-Fraumeni             model of producer behavior myopic decision rules
can be derived by treating the price of capital input as a rental price of capital
services.42 The rate of technical change at any point of time is a function of
relative prices, but does not affect future production                     possibilities.  This greatly
simplifies the modeling of producer behavior and facilitates the implementation
of the econometric         model. Given myopic decision rules for producers                     in each
industrial    sector, all of the implications         of the economic theory of production           can
be described in terms of the properties of the sectoral price functions                        given in
Section 2.1.43
   The Jorgenson-Fraumeni             model of producer behavior consists of a system of
equations     giving the shares of capital, labor, energy, and materials inputs in the
value of output and the rate of technical change as functions of relative prices and
time. To formulate         an econometric         model a stochastic component             is added to
these equations.      Since the rate of technical change is not directly observable, we
consider     a form of the model with autocorrelated                    disturbances;     the data are
transformed       to eliminate the autocorrelation.           The prices are treated as endoge-
nous variables       and the unknown            parameters     are estimated        by the method of
nonlinear     three stage least squares presented in Section 3.3.
    The endogenous         variables in the Jorgenson-Fraumeni                   model include value
shares of sectoral inputs for four commodity                    groups and the sectoral rate of
technical change. Four equations can be estimated for each industry, correspond-
ing to three of the value shares and the rate of technical change. As unknown
parameters      there are three elements of the vector {(Ye}, the scalar { LYE},six share
elasticities in the matrix {BP,}, which is constrained                to be symmetric, three biases
of technical change in the vector { &}, and the scalar { &}, so that there is a
total of fourteen unknown parameters for each industry. Jorgenson and Fraumeni
estimate these parameters from time series data for the period 1958-1974 for each
industry,     subject to the inequality          restrictions   implied by monotonicity           of the
sectoral input value shares.44
    The estimated        share elasticities       with respect to price {BP,} describe                the
implications      of patterns of substitution         for the distribution      of the value of output
 among capital, labor, energy, and materials                   inputs. Positive share elasticities


   41A review of the literature on induced technical change is given by Binswanger (lY78a).
   42The model of capital as a factor of production was originated by Walras (1954). This model has
been discussed by Diewert (1980) and by Jorgenson (1973a, 1980).
   41Myopic decision rules are derived by Jorgenson (1973b).
   44 Data on energy and materials are based on annual interindustry  transactions tables for the United
States compiled by Jack Faucett Associates (1977). Data on labor and capital are based on estimates
by Fraumeni and Jorgenson (1980).
1878                                                                                      II. W. Jorgenson

imply that the corresponding               value shares increase with an increase in price;
negative share elasticities imply that the value shares decrease with price; zero
share elasticities      correspond      to value shares that are independent            of price. The
concavity     constraints     on the sectoral price functions contribute            substantially      to
the precision       of the estimates,         but require that the share of each input be
nonincreasing       in the price of the input itself.
    The empirical findings on patterns of substitution               reveal some striking similari-
ties among industries. 45 The elasticities of the shares of capital with respect to the
price of labor are nonnegative            for thirty-three of the thirty-five industries, so that
the shares of capital are nondecreasing              in the price of labor for these thirty-three
sectors. Similarly, elasticities of the share of capital with respect to the price of
energy are nonnegative           for thirty-four     industries and elasticities with respect to
 the price of materials         are nonnegative        for all thirty-five industries.      The share
elasticities    of labor with respect to the prices of energy and materials                          are
 nonnegative      for nineteen and for all thirty-five industries,            respectively.    Finally,
 the share elasticities of energy with respect to the price of materials are nonnega-
 tive for thirty of the thirty-five industries.
    We continue the interpretation            of the empirical results with estimated biases of
 technical change with respect to price { &}. These parameters can be interpreted
 as changes in the sectoral value shares (2.14) with respect to time, holding prices
 constant.    This component          of change in the value shares can be attributed                  to
 changes in technology rather than to substitution                 among inputs. For example, if
 the bias of technical change with respect to the price of capital input is positive,
 we say that technical change is capital-using;               if the bias is negative, we say that
 technical change is capital-saving.
    Considering      the rate of technical change (2.14) the biases of technical change
 { BP,} can be interpreted         in an alternative and equivalent .way. These parameters
 are changes in the negative of the rate of technical change with respect to changes
 in prices. As substitution         among inputs takes place in response to price changes,
 the rate of technical change is altered. For example, if the bias of technical change
 with respect to capital input is positive, an increase in the price of capital input
 decreases the rate of technical change; if the bias is negative, an increase in the
 price of capital input increases the rate of technical change.
    A classification      of industries by patterns of the biases of technical change is
 given in Table 1. The pattern that occurs with greatest frequency is capital-using,
 labor-using,     energy-using,      and materials-saving         technical change. This pattern
 occurs for nineteen          of the thirty-five       industries    for which biases are fitted.
 Technical     change is capital-using           for twenty-five     of the thirty-five     industries,
 labor-using     for thirty-one industries, energy-using           for twenty-nine    industries, and
 materials-using      for only two industries.

   45Parameter   &mates    are given by Jorgenson   and Fraumeni   (1983), pp. 255-264.
(‘A. 31: Lkmmetric      Methods for Modeling Producer Behmior                                        1879

                                                        Table 1
                           Classification   of industries by biases of technical   change

          Pattern    of biases          Industries

          Capital using                 Agriculture, metal mining, crude pctrolcum and natural
          Labor using                     gas, nonmetallic mining, textiles, apparel, lumber,
          Energy using                    furniture, printing, leather, fabricated metals,
          Material saving                 electrical machinery, motor vehicles, instruments,
                                          miscellaneous manufacturing,      transportation, trade,
                                          finance, insurance and real estate, services
          Capital using                 Coal mining, tobacco manufacturers,        communications,
          Labor using                     government enterprises
          Energy saving
          Material saving
          Capital using                 Petroleum      refining
          Labor saving
          Energy using
          Material saving
          Capital using                 Construction
          Labor saving
          Energy saving
          Material using
          Capital saving                Electric utilities
          Labor saving
          Energy using
          Material saving
          Capital saving                Primary      metals
          Labor using
          Energy saving
          Material saving
          Capital saving                Paper, chemicals, rubber, stone, clay and glass,
          Labor using                     machinery except electrical, transportation  equip-
          Energy using                    ment and ordnance, gas utilities
          Mate&     saving
          Capital saving                Food
          Labor saving
          Energy using
          Material using

             “Source:    Jorgenson    and Fraumeni        (19X3), p. 264.




   The patterns       of biases of technical change given in Table 1 have important
implications     for the relationship     between relative prices and the rate of economic
growth. An increase in the price of materials increases the rate of technical change
in thirty-three     of the thirty-five industries. By contrast, increases in the prices of
capital, labor, and energy reduced the rates of technical change in twenty-five,
thirty-one,    and twenty-nine       industries, respectively. The substantial increases in
1880                                                                                        D. W. Jorgenson

energy prices since 1973 have had the effect of reducing sectoral rates of technical
change, slowing the aggregate rate of technical change, and diminishing                       the rate
of growth for the U.S. economy as a whole.46
   While the empirical results suggest a considerable                degree of similarity across
industries,    it is necessary to emphasize that the Jorgenson-Fraumeni                     model of
producer behavior requires important              simplifying    assumptions.      First, conditions
for producer       equilibrium      under perfect competition         are employed        for all in-
dustries.    Second, constant        returns to scale at the industry           level are assumed.
Finally,     a description      of technology      that leads to myopic decision              rules is
employed.      These assumptions         must be justified primarily by their usefulness in
implementing        production     models that are uniform for all thirty-five industrial
sectors of the U.S. economy.
    Binswanger       (1974a, 1974b, 1978~) has analyzed              substitution     and technical
change for U.S. agriculture, using cross sections of data for individual                    states for
1949, 1954, 1959, and 1964. Binswanger                   was the first to estimate biases of
technical change based on the translog price function. He permits technology to
differ among time periods and among groups of states within the United States.
He divides capital inputs between land and machinery and divides intermediate
inputs between fertilizer and other purchased inputs. He considers substitution
among these four inputs and labor input.
   Binswanger       employs time series data on U.S. agriculture                as a whole for the
period 191221964          to estimate biases of technical change on an annual basis.
Brown and Christensen           (1981) have analyzed time series data on U.S. agriculture
for the period 1947-1974.            They divide labor services between hired labor and
self-employed       labor and capital input between land and all other-machinery,
structures,     and inventories.        Other purchased       inputs are treated as a single
aggregate. They model substitution            and technical change with fixed inputs, using
a translog functional        form.
   Berndt and Khaled (1979) have augmented the Berndt-Wood                         data set for U.S.
manufacturing         to include data on output. They estimate biases of technical
change      and permit nonconstant           returns to scale. They employ a Box-Cox
transformation       of data on input prices, generating a functional form that includes
the translog, generalized Leontief, and quadratic as special cases. The Box-Cox
transformation         is also employed         by Appelbaum          (1979a)      and by Caves,
Christensen,      and Trethaway (1980). Denny (1974) has proposed a closely related
approach to parametrization            based on mean value functions.
   Kopp and Diewert (1982) have employed a translog parametric                        form to study
technical and allocative efficiency. For this purpose they have analyzed data on
U.S. total manufacturing          for the period 1947-71 compiled by Berndt and Wood


   46The implications   of patterns   of biases   of technical   change   are discussed   in more   detail   by
Jorgenson (1981).
C-h. 31: Econometrrc   Methods for Modeling Producer Behavior                                              1881

(1975) and augmented           by Berndt and Khaled (1979). Technical change is not
required to be neutral and nonconstant             returns to scale are permitted. They have
interpreted      the resulting   model of producer            behavior     as a representation       of
average practice. They have then re-scaled the parameters                    to obtain a “frontier”
representing      best practice and have employed the results to obtain measures of
technical and allocative efficiency for each year in the sample.47
   Wills (1979) has modeled substitution             and technical change for the U.S. steel
industry,    using a translog price function. Norsworthy                 and Harper (1981) have
extended and augmented the Berndt-Wood                    data set for total manufacturing         and
have modeled substitution         and technical change, using a translog price function.
Woodward        (1983) has reanalyzed these data and has derived estimates of rates of
factor augmentation         for capital, labor, energy, and materials               inputs, using a
translog price function.
   Jorgenson (1984b) has modeled substitution               and technical change for thirty-five
industries    of the United States for the period 1958-1979, dividing energy inputs
between electricity       and nonelectrical      energy inputs. He employs translog price
functions with capital, labor, two kinds of energy, and materials inputs and finds
that technical change is electricity-using          and nonelectrical        energy-using    for most
U.S. industries.       Nakamura     (1984) has developed           a similar model for twelve
sectors covering the whole of the economy for the Federal Republic of Germany
for the period 1960-1974.            He has disaggregated           intermediate      inputs among
energy, materials, and services.
   We have already discussed the work of Kopp and Smith on substitution                         among
inputs, based on data generated by process models of the U.S. steel industry.
Kopp and Smith (1981c, 1982) have also analyzed the performance                           of different
measures of technical change, also using data generated by these models. They
show that measures           of biased technical         change based on the methodology
developed      by Binswanger      can be explained by the proportion               of investment     in
specific technologies.
   Econometric        models of substitution       among inputs at the level of individual
industries    have incorporated      intermediate      inputs-broken         down between energy
and materials inputs-along           with capital and labor inputs. However, models of
substitution     and technical change have also been constructed                 at the level of the
economy as a whole. Output can be divided between consumption                        and investment
goods, as in the original study of the translog price function by Christensen,
Jorgenson,     and Lau (1971, 1973) and input can be divided between capital and
labor services.
   Hall (1973) has considered            nonjointness       of production       of investment      and
consumption        goods outputs for the United States. Kohli (1981, 1983) has also


  47A survey of the literature   on frontier   representations   of technology   is given by Forsund,   Lovell,
and Schmidt (1980).
1882                                                                           D. W. Jorgenson

studied nonjointness   in production   for the United States. Burgess (1974) has
added imports as an input to inputs of capital and labor services. Denny and
Pinto (1978) developed a model with this same breakdown      of inputs for Canada.
Conrad and Jorgenson (1977, 1978) have considered nonjointness        of production
and alternative  models of technical change for the Federal Republic of Germany.



4.3.   Two stage allocation

Aggregation     over inputs has proved to be a very important means for simplifying
the description    of technology in modeling producer behavior. The price of output
can be represented        as a function    of a smaller number         of input prices by
introducing    price indexes for input aggregates. These price indexes can be used to
generate a second stage of the model by treating the price of each aggregate as a
function of the prices of the inputs making up the aggregate. We can parametrize
each stage of the model separately.
    The Berndt-Jorgenson        (1973) model of producer behavior is based on two
stage allocation of the value of output of each sector. In the first stage the value of
sectoral output is allocated among capital, labor, energy, and materials inputs,
where materials include inputs of nonenergy            commodities    and competitive     im-
ports. In the second stage the value of energy expenditure              is allocated among
expenditures    on individual types of energy and the value of materials expenditure
is allocated among expenditures       on competitive imports and nonenergy commod-
ities.
    The first stage of the econometric model is generated from a price function for
each sector. The price of sectoral output is a function of the prices of capital and
labor inputs and the prices of inputs of energy and materials. The second stage of
the model is generated from price indexes for energy and materials inputs. The
price of energy is a function of the prices of five types of energy inputs, while the
price of materials is a function of the prices of four types of nonenergy inputs and
the price of competitive imports.
    The Berndt-Jorgenson       model of producer behavior consists of three systems of
equations. The first system gives the shares of capital, labor, energy and materials
inputs in the value of output, the second system gives the shares of energy inputs
in the value of energy input, and the third system gives the shares of nonenergy
inputs and competitive imports in the value of materials inputs. To formulate an
econometric     model stochastic components        are added to these systems of equa-
tions. The rate of technical change is taken to be exogenous; all prices-including
the prices of energy and materials inputs for each sector-are             treated as endoge-
nous variables.     Estimates of the unknown         parameters    of all three systems of
equations    are based on the nonlinear three stage least squares estimator.
    The Berndt-Jorgenson        model illustrates    the use of two stage allocation        to
simplify the description      of producer behavior. By imposing the assumption           that
Ch. 31: Econometric Methods for Modeling Producer Behavior                                      1883

the price of aggregate input is separable in the prices of individual                   energy and
materials inputs, the price function that generates the first stage of the model can
be expressed in terms of four input prices rather than twelve. However, simplifica-
tions of the first stage of the model requires the introduction               of a second stage,
consisting of price functions for energy and materials inputs. Each of these price
functions can be expressed in terms of five prices of individual                inputs.
   Fuss (1977a) has constructed           a two stage model of Canadian total manufactur-
ing using translog functional            forms. He treats substitution       among coal, liquid
petroleum     gas, fuel oil, natural gas, electricity, and gasoline as a second stage of
the model. Friede (1979) has developed two stage models based on translog price
functions    for fourteen industries of the Federal Republic of Germany.                    In these
models the second stage consists of three separate models-one                     for substitution
among individual          types of energy and two for substitution             among individual
types of nonenergy          inputs. Dargay (1983) has constructed         a two stage model of
twelve Swedish manufacturing             industries utilizing a translog functional form. She
has analyzed        substitution     among electricity, oil, and solid fuels inputs at the
second stage of the model.
   Nakamura        (1984) has constructed         three stage models for twelve industries of
the Federal Republic of Germany, using translog price functions. The first stage
encompasses        substitution     and technical change among capital, labor, energy,
materials, and services inputs. The second stage consists of three models - a model
for substitution      among individual types of energy, a model for substitution              among
individual     types of materials,        and a model for substitution         among individual
types of services. The third stage consists of models for substitution                      between
domestically      produced input and the corresponding            imported input of each type.
   Pindyck (1979a, 1979b) has constructed              a two stage model of total manufactur-
ing for ten industrialized          countries-    Canada, France, Italy, Japan, the Nether-
lands, Norway, Sweden, the U.K., the U.S., and West Germany-using                         a translog
price function. He employs annual data for the period 1959-1973 in estimating a
model for substitution           among four energy inputs -coal,          oil, natural gas, and
electricity. He uses annual data for the period 1963-73 in estimating a model for
substitution     among capital, labor, and energy inputs. Magnus (1979) and Magnus
and Woodland         (1984) have constructed a two stage model for total manufacturing
in the Netherlands         along the same lines. Similarly, Ehud and Melnik (1981) have
developed a two stage model for the Israeli economy.
   Halvorsen (1977) and Halvorsen and Ford (1979) have constructed                      a two stage
model for substitution           among capital, labor, and energy inputs for nineteen
two-digit U.S. manufacturing            industries on the basis of translog price functions.
For this purpose they employ cross section data for individual states in 1971. The
second stage of the model provides a disaggregation              of energy input among inputs
of coal, oil, natural gas, and electricity. Halvorsen (1978) has analyzed substitu-
tion among different types of energy on the basis of cross section data for 1958,
1962. and 1971.
18X4                                                                           D. W. Jorgenson

5.     Cost functions

In Section 2 we have considered             producer behavior under constant returns to
scale. The production          function (2.1) is homogeneous       of degree one, so that a
proportional     change in all inputs results in a change in output in the same
proportion.    Necessary conditions for producer equilibrium          (2.2) are that the value
share of each input is equal to the elasticity of output with respect to that input.
Under constant returns to scale the value shares and the elasticities sum to unity.
   In this Section we consider producer behavior under increasing returns to scale.
Under increasing         returns and competitive        markets for output and all inputs,
producer equilibrium         is not defined by profit maximization,    since no maximum of
profit exists. However, in regulated            industries   the price of output is set by
regulatory    authority.      Given demand for output as a function of the regulated
price, the level of output is exogenous to the producing unit.
   With output fixed from the point of view of the producer, necessary conditions
for equilibrium       can be derived from cost minimization.            Where total cost is
defined as the sum of expenditures           on all inputs, the minimum value of cost can
be expressed as as function of the level of output and the prices of all inputs. We
refer to this function          as the cost function.     We have described the theory of
production     under constant returns to scale in terms of properties             of the price
function (2.4); similarly, we can describe the theory under increasing returns in
terms of properties of the cost function.



5.1.     Duality

Utilizing the notation of Section       2, we can define total cost, say c, as the sum of
expenditures  on all inputs:



       c=    c pjxj.
             j=1



We next define the shares of inputs        in total cost by:


       u_=
             PJxj
             -           (j=1,2...J).
        J        c   ’

  With output fixed from the point of view of the producing unit and competitive
markets for all inputs, the necessary conditions for producer equilibrium are given
by equalities between the shares of each input in total cost and the ratio of the
Ch. 31: Econometric Method.7for Modeling Producer Behmior                                                1X85

elasticity    of output       with respect     to that input     and the sum of all such elasticities:

               d In y
                alnx
                                                                                                       (5.1)
      ‘=      i,alny      ’
                alnx

where      i is a vector of ones and:

      u=(u1,u2-               uJ) -vector    of cost shares.

   Given the definition  of total cost and the necessary conditions for producer
equilibrium, we can express total cost, say c, as a function of the prices of all
inputs and the level of output:

      c=c(p,y).                                                                                        (5.2)
We refer to this as the cost function. The cost function C is dual to the production
function  F and provides an alternative and equivalent description of the technol-
ogy of the producing unit.48
   We can formalize the theory of production      in terms of the following properties
of the cost function:
   1. Positiuity. The cost function is positive for positive input prices and a
positive level of output.
   2. Homogeneity. The cost function is homogeneous         of degree one in the input
prices.
   3. Monotonicity. The cost function is increasing in the input prices and in the
level of output.
   4. Concuuity. The cost function is concave in the input prices.
   Given differentiability  of the cost function, we can express the cost shares of all
inputs as elasticities of the cost function with respect to the input prices:


      u=++,,).                                                                                         (5.3)


Further,      we can define an index of returns                 to scale as the elasticity       of the cost
function      with respect to the level of output:




  4RDuality    between   cost and production    functions   is due to Shephard   (1953, 1970).
1886                                                                             D. w. .7orgenson

Following Frisch (1965), we can refer to this elasticity as the cost flexibility.
   The cost flexibility uV is the reciprocal of the degree of returns to scale, defined
as the elasticity of output with respect to a proportional    increase in all inputs:

                 1
       u”= i, 8lny   .                                                                    (5.5)
              t3In x

If output   increases   more than in proportion       to the increase in inputs, cost
increases less than in proportion   to the increase in output.
   Since the cost function C is homogeneous      of degree one in the input prices, the
cost shares and the cost flexibility are homogeneous       of degree zero and the cost
shares sum to unity:

       i’u=i’alnc=l,
                ifI In p

Since the cost function is increasing         in the input   prices,   the cost shares must be
nonnegative  and not all zero:

       u 2 0.

The cost function        is also increasing     in the level of output,      so that   the cost
flexibility is positive:

       UP> 0.



5.2.    Substitution       and economies of scale

We have represented       the cost shares of all inputs and the cost flexibility as
functions   of the input prices and the level of output. We can characterize    these
functions in terms of measures of substitution     and economies of scale. We obtain
share elasticities by differentiating the logarithm of the cost function twice with
respect to the logarithms of input prices:


                                                                                          (5.6)

These measures of substitution    give the response of the cost shares of all inputs to
proportional  changes in the input prices.
   Second, we can differentiate     the logarithm   of the cost function    twice with
respect to the logarithms    of the input prices and the level of output to obtain
Ch. 31: Econometric Methods for Modeling Producer Behavior                             1887

measures     of economies     of scale:


                                                                                     (5.7)


We refer to these measures as biases of scale. The vector of biases of scale up_”can
be employed         to derive the implications     of economies of scale for the relative
distribution    of total cost among inputs. If a scale bias is positive, the cost share of
the corresponding         input increases with a change in the level of output. If a scale
bias is negative, the cost share decreases with a change in output. Finally, if a
scale bias is zero, the cost share is independent         of output.
   Alternatively,      the vector of biases of scale uPy can be employed to derive the
implications      of changes in input prices for the cost flexibility. If the scale bias is
positive,    the cost flexibility increases with the input price. If the scale bias
is negative, the cost flexibility decreases with the input price. Finally, if the bias is
zero, the cost flexibility is independent       of the input price.
   To complete        the description    of economies    of scale we can differentiate  the
logarithm of the cost function twice with respect to the level of output:


     U       =%P,Y)=-&P,v).                                                          (5.8)
         .“.” 8 In y 2

If this measure is positive, zero, or negative, the cost flexibility is increasing,
decreasing, or independent    of the level of output.
   The matrix of second-order logarithmic derivatives of the logarithms of the cost
function C must be symmetric. This matrix includes the matrix of share elastici-
ties UPP, the vector of biases of scale uPy, and the derivative of the cost flexibility
with respect to the logarithm of output uy,,. Concavity of the cost function in the
input prices implies that the matrix of second-order           derivatives, say H, is
nonpositive   definite, so that the matrix UP, + uu’ - V is nonpositive        definite,
where:




Total cost c is positive and the diagonal matrices N and V are defined in terms of
the input prices p and the cost shares u, as in Section 2. Two inputs are
substitutes if the corresponding    element of the matrix uPP + uu’- V is negative,
complements    if the element is negative, and independent if the element is zero.
   In Section 2.2 above we have introduced           price and quantity        indexes of
aggregate input implied by homothetic separability        of the price function. We can
analyze    the implications   of homothetic   separability     of the cost function    by
1888                                                                                 D. W. Jorgenson

introducing  price and quantity indexes of aggregate input and defining the cost
share of aggregate input in terms of these indexes. An aggregate input can be
treated in precisely the same way as any other input, so that price and quantity
indexes can be used to reduce the dimensionality      of the space of input prices and
quantities.
   We say that the cost function C is homothetic if and only if the cost function is
separable in the prices of all J inputs { pi, p2 . . . p,}, so that:


                                                                                                (5.9)

where the function P is homogeneous   of degree one and independent of the level
of output   y. The cost function  is homothetic  if and only if the production
function is homothetic, where


                                                                                              (5.10)


where the function G is homogeneous     of degree one.49
   Since the cost function is homogeneous     of degree one in the input prices, it is
homogeneous     of degree one in the function P, which can be interpreted      as the
price index for a single aggregate input; the function G is the corresponding
quantity index. Furthermore,   the cost function can be represented   as the product
of the price index of aggregate input P and a function, say H, of the level of
output:


       c=   P(   PI, ~2 a.. p,).Hb).                                                          (5.11)


   Under     homotheticity,     the cost flexibility   uv is independent     of the input     prices:


       uY   =+y(y).                                                                           (5.12)


If the cost flexibility is also independent  of the level of output, the cost function is
homogeneous      in the level of output and the production     function is homogeneous
in the quantity      index of aggregate input G. The degree of homogeneity          of the
production    function is the degree of returns to scale and is equal to the reciprocal
of the cost flexibility. Under constant returns to scale the degree of returns to
scale and the cost flexibility are equal to unity.

  49The concept of homotheticity      was introduced  by Shephard (1953). Shephard shows      that   ho-
motheticity of the cost function is equivalent to homotheticity of the production function.
Ch. 31: Econometric Method for Modeling Producer Behavior                              18X9

5.3.   Parametrization and integrability

In Section 2.3 we have generated an econometric        model of producer behavior by
treating the measures of substitution     and technical change as unknown    parame-
ters to be estimated. In this Section we generate an econometric model of cost and
production   by introducing   the parameters:


       BP,= %P’         4v = UN9         4.”= UY,”     7
                                                                                    (5.13)


where Bpp is a matrix of constant share elasticities, BP, is a vector of constant
biases of scale, and BYYis a constant derivative of the cost flexibility with respect
to the logarithm of output.
   We can regard the matrix of share elasticities, the vector of biases of scale, and
the derivative of the cost flexibility with respect to the logarithm of output as a
system of second-order  partial differential equations. We can integrate this system
to obtain a system of first-order partial differential equations:


                                                                                    (5.14)
       uv = cfyy+ &ln   p + P,,ln y,

where the parameters-       LY,,,(Y_”-are constants of integration. Choosing scales for
measuring    the quantities     and prices of output and the inputs, we can consider
values of input prices and level of output equal to unity. At these values the
vector of parameters      ‘Ye is equal to the vector of cost shares and the parameters
(Ye is equal to the cost flexibility.
   We can integrate      the system of first-order partial differential   eqs. (5.14) to
obtain the cost function:


       In c = (Ye+ ol,ln p + a,ln   y + 4 In p’B,,ln       p

              +lnp~~~,lny+:4,(lny)‘,                                                (5.15)


where the parameter         IY,, is a constant of integration. This parameter is equal to
the logarithm of total cost where the input prices and level of output are equal to
unity, We can refer to this form as the translog cost function, indicating         the role
of the variables, or the constant share elasticity (CSE) cost function, indicating
the role of the parameters.
   To incorporate        the implications     of the economic   theory of production     we
consider    restrictions    on the system of eqs. (5.14) required       to obtain a cost
function with properties listed above. A complete set of conditions for integrabil-
1890                                                                                     D. W. Jorgenson

ity is the following:

5.3.1.        Homogeneity

The cost shares and the cost flexibility are homogeneous          of degree zero in the
input prices.
   Homogeneity    of degree zero of the cost shares and the cost flexibility implies
that the parameters-   BP, and fi,,, ~ must satisfy the restrictions:

         Bppi = 0

         &i    = 0.                                                                              (5.16)

where i is a vector          of ones. For J inputs      there are J + 1 restrictions       implied   by
homogeneity.

5.3.2.        Cost exhaustion

The sum of the cost shares is equal to unity.
    Cost exhaustion   implies that the value of the J inputs is equal to total cost.
Cost exhaustion     implies that the parameters - (Ye, Bpp, p,, -must satisfy the re-
strictions:

         c$i =l,

         Bipi = 0,                                                                               (5.17)

         pdYi = 0.

For J inputs          there are J + 2 restrictions   implied   by cost exhaustion.

5.3.3.        Symmetry

The matrix of share elasticities, biases of scale, and the derivative of the cost
flexibility with respect to the logarithm output must be symmetric.
   A necessary     and sufficient condition  for symmetry  is that the matrix of
parameters    must satisfy the restrictions:

                                           I



                                                                                                 (5.18)


For J inputs          the total number    of symmetry    restrictions   is fJ( J + 1).
CA. 31: Econometric Methods for Modeling Producer Behavior                                1891

5.3.4.          Nonnegutivity

The cost shares and the cost flexibility must be nonnegative.
   Since the translog cost function is quadratic   in the logarithms     of the input
prices and the level of output, we cannot impose restrictions     on the parameters
that imply nonnegativity    of the cost shares and the cost flexibility. Instead, we
consider restrictions on the parameters that imply monotonicity     of the cost shares
wherever they are nonnegative.

5.3.5.          Monotonicity

The matrix of share elasticities B,, + ud- V is nonpositive      definite.
   The conditions    on the parameters    assuring concavity     of the cost function
wherever the cost shares are nonnegative    are precisely analogous to the conditions
given in Section 2.4 for concavity of the price function wherever the value shares
are nonnegative.    These conditions   can be expressed in terms of the Cholesky
factorization  of the matrix of constant share elasticities BP,.



5.4.      Stochastic           speci$cation

To formulate    an econometric    model of cost and production     we add a stochastic
component     to the equations for the cost shares and the cost function itself. To
represent   the econometric    model we require some additional        notation. Where
there are K producing        units we index the observations        by producing   unit
(k = 1,2.. . K). The vector of cost shares for the kth unit is denoted uk and total
cost of the unit is ck (k =1,2...    K). The vector of input prices faced by the k th
unit is denoted     pk and the vector of logarithms     of input prices is In pk(k =
1,2.. . K). Finally, the level of output of the ith unit is denoted yk(k = 1,2.. . K ).
   We obtain an econometric model of cost and production          corresponding  to the
translog cost function by adding random disturbances          to the equations for the
cost shares and the cost function:

                                                                                       (5.19)

         hlCk     =   a0   +   a,hI   pk   +   a,ln yk + i In PkB,,ln   Pk



                      +lnpk~~,lnyk+f(1nyk)2+e;,                         (k=1,2...K),


where .ak is the vector of unobservable  random disturbances      for the cost shares of
the k th producing    unity and E: is the corresponding      disturbance   for the cost
function (k = 1,2.. . K). Since the cost shares for all inputs sum to unity for each
1892                                                                                     D. W. Jorgenson

producing   unit, the random                disturbances   corresponding     to the J cost shares sum
to zero for each unit:

       i’ek = 0            (k =1,2...K),                                                         (5.20)

so that these disturbances are not distributed independently.
  We assume that the unobservable     random disturbances     for all J + 1 equations
have expected value equal to zero for all observations:

            &k
       E            =O,        (k =1,2...       K).                                              (5.21)
           [ e: 1

We also assume             that the disturbances         have a covariance   matrix   that is the same
for all producing           units and has rank         J, where:

            'k
       V            =.Z,        (k=1,2...        K).
           [G 1

   Finally,  we assume that random disturbances      corresponding   to distinct ob-
servations are uncorrelated,  so that the covariance matrix of random disturbances
for all observations  has the Kronecker product form:


             El1

             -512




       v     G        =Z@I.                                                                     (5.22)
             E21




             E;




   We can test the validity of restrictions    on economies of scale by expressing
them in terms of the parameters of an econometric model of cost and production.
Under homotheticity     the cost flexibility is independent     of the input prices. A
necessary and sufficient condition for homotheticity     is given by:

                                                                                                (5.23)

the vector of biases of scale is equal to zero.                      Under    homogeneity     the cost
flexibility is independent of output, so that:
Ch. 31: Econometric Method for Modeling Producer Behavior                                      1893

the derivative     of the flexibility with respect to the logarithm of output is zero.
Finally, under     constant returns to scale, the cost flexibility is equal to unity; given
the restrictions    implied by homogeneity,    constant returns requires:

       ay =l.                                                                               (5.24)




6.     Applications of cost functions

To illustrate the econometric      modeling of economies of scale in Section 6.1, we
present an econometric       model that has been implemented         for the electric power
industry in the United States by Christensen           and Greene (1976). This model is
based on cost functions for cross sections of individual          electric utilities in 1955
and 1970. Total cost of steam generation is a function of the level of output and
the prices of capital, labor, and fuel inputs. Steam generation           accounts for more
than ninety percent of total power generation             for each of the firms in the
Christensen-Greene       sample.
   A key feature of the electric power industry            in the United States is that
individual   firms are subject to price regulation. The regulatory authority sets the
price for electric power. Electric utilities are required to supply the electric power
that is demanded       at the regulated     price. This model must be carefully dis-
tinguished   from the model of a regulated firm proposed by Averch and Johnson
(1962).50 In the Averch-Johnson         model firms are subject to an upper limit on the
rate of return rather than price regulation.        Firms minimize costs under rate of
return regulation only if the regulatory constraint is not binding.
   The literature on econometric modeling of scale economies in U.S. transporta-
tion and communications        industries parallels the literature on the U.S. electric
power industry. Transportation        and communications      firms, like electric utilities,
are subject to price regulation and are required to supply all the services that are
demanded      at the regulated price. However, the modeling of transportation             and
communications      services is complicated     by joint production      of several outputs.
We review econometric       models with multiple outputs in Section 6.2.



6.1.    Economies of scale

The Christensen-Greene     model of the electric power industry consists of a system
of equations   giving the shares of all inputs in total cost and total cost itself as

  5oA model of a regulated firm based on cost minimization     was introduced   by Nerlove (1963).
Surveys of the literature on the Averch-Johnson model have been given by Bailey (1973) and Baumol
and Klevorick (1970).
1894                                                                                  D. W. Jorgenson

functions of relative prices and the level of output. To formulate an econometric
model Christensen           and Greene add a stochastic component              to these equations.
They treat the prices and levels of output as exogenous variables and estimate the
unknown parameters            by the method of maximum likelihood for nonlinear                 multi-
variate regression models.
    The endogenous         variables in the Christensen-Greene          model are the cost shares
of capital, labor, and fuel inputs and total cost. Christensen               and Greene estimate
three equations for each cross section,. corresponding              to two of the cost shares and
the cost function.         As unknown        parameters   they estimate two elements of the
vector up, the two scalars- (Ye and (Ye-three elements of the matrix of share
elasticities   Bpp,two biases of scale in the vector bPv, and the scalar /3,,. They
estimate a total of ten unknown               parameters    for each of two cross sections of
electric utilities      for the years 1955 and 1970.51 Estimates                 of the remaining
parameters      of the model are calculated by using the cost exhaustion,                 homogene-
ity, and symmetry restrictions. They report that the monotonicity                     and concavity
restrictions    are met at every observation in both cross section data sets.
    The hypothesis        of constant returns to scale can be tested by first considering
the hypothesis that the cost function is homothetic;               under this hypothesis the cost
flexibility is independent         of the input prices. Given homotheticity           the additional
hypothesis      that the cost function          is homogeneous        can be tested; under this
hypothesis       the cost flexibility       is independent       of output     as well as prices.
These hypotheses can be nested, so that the test of homogeneity                   is conditional    on
the test of homotheticity.            Likelihood    ratio statistics for these hypotheses          are
distributed,     asymptotically,      as &i-squared.
    We present the results of Christensen and Greene for 1955 and 1970 in Table 2.
Test statistics for the hypotheses of homotheticity             and homogeneity        for both cross
section data sets and critical values for &i-squared               are also presented in Table 2.
Homotheticity        can be rejected, so that both homotheticity            and homogeneity        are
inconsistent      with the evidence; homogeneity,         given homotheticity,      is also rejected.
If all other parameters          involving the level of output were set equal to zero, the
parameter      (Ye would be the reciprocal of the degree of returns to scale. For both
1955 and 1970 data sets this parameter is significantly different from unity.
    Christensen      and Greene employ the fitted cost functions presented in Table 2
to characterize        scale economies for individual          firms in each of the two cross
sections. For both years the cost functions are U-shaped with a minimum point
occurring     at very large levels of output. In 1955 118 of the 124 firms have


   SIChri~ten~en and Greene have assembled data on cross sections of individual firms for 1955 and
1970. The quantity of output is measured in billions of kilowatt hours (kwh). The quantity of fuel
input is measured by British thermal units (Btu). Fuel prices per million Btu are averaged by weighting
the price of each fuel by the corresponding    share in total consumption.  The price of labor input is
measured as the ratio of total salaries and wages and employee pensions and benefits to the number of
full-time employees   plus half the number of part-time       employees. The price of capital input is
estimated as the sum of interest and depreciation.
Ch. .<I: Econometric     Meihodr for Modeling Producer Behuvior                                                   1895

                                                     Table 2
        Cost function     for U.S. electric power industry (parameter            estimates,      1955 and 1970;
                                           t-ratios in parentheses).a

                                                           1955                                  1970

                                                              8.412                                7.14
                                                           (31.52)                              (32.45)
                                                              0.386                                0.587
                                                             (6.22)                             (20.87)
                                                              0.094                                0.208
                                                            (0.94)                                (2.95)
                                                              0.348                             ~ 0.151
                                                            (4.21)                            (- 1.85)
                                                              0.558                                0.943
                                                            (8.57)                              (14.64)
                                                              0.059                                0.049
                                                            (5.76)                              (12.94)
                                                          - 0.008                                  0.003
                                                        (~ 1.79)                              (- 1.23)
                                                          - 0.016                               -0.018
                                                       (~ 10.10)                              (- 8.25)
                                                              0.024                                0.021
                                                            (5.14)                               (6.64)
                                                              0.175                                0.118
                                                            (5.51)                               (6.17)
                                                              0.038                                0.081
                                                            (2.03)                            (5.00)
                                                              0.176                            0.178
                                                            (6.83)                          (10.79)
                                                          -0.018                            ~ 0.011
                                                        (- 1.01)                          (- 0.749)
                                                          - 0.159                           ~ 0.107
                                                        (-6.05)                           (- 7.48)
                                                          - 0.020                           - 0.070
                                                        (- 2.08)                          (-6.30)

                           Test statistics   for restrictions     on economies   of scaleb

      Statistic                                     Homotheticity                       Homogeneity

      1955                                                 78.22                              102.27
      1970                                                 57.91                              157.46
      Critical    Value (1%)                                9.21                               11.35

         “Source:    Christensen   and Greene      (1976, Table 4, p. 666).
         hSource:    Christensen   and Greene      (1976, Table 5, p. 666).


significant  economies    of scale; only six firms have no significant economies or
diseconomies    of scale, but these firms produce 25.9 percent of the output of the
sample. In 1970 ninety-seven      of the 114 firms have significant economies of scale,
sixteen have none, and one has significant scale diseconomies.
   Econometric    modeling of economies of scale in the U.S. electric power industry
has generated    a very extensive literature.    The results through 1978 have been
surveyed by Cowing and Smith (1978). More recently, the Christensen-Greene
1896                                                                                        D. W. Jorgrnsor~

data base has been extended by Greene (1983) to incorporate                  cross sections of
individual    electric utilities for 1955, 1960, 1965, 1970, and 1975. By including
both the logarithm of output and time as an index of technology in the translog
total cost function (5.15), Greene is able to characterize            economies of scale and
technical change simultaneously.
   Stevenson     (1980) has employed a translog total cost function incorporating
output and time to analyze cross sections of electric utilities for 1964 and 1972.
Gollop and Roberts (1981) have used a similar approach to study annual data on
eleven electric utilities in the United States for the period 195881975. They use
the results to decompose           the growth of total cost among economies            of scale,
technical    change,     and growth in input prices. Griffin (1977b) has modeled
substitution    among different types of fuel in steam electricity generation              using
four cross sections of twenty OECD countries.                Halvorsen   (1978) has analyzed
substitution    among different fuel types, using cross section data for the United
States in 1972.
   Cowing, Reifschneider,         and Stevenson (1983) have employed a translog total
cost function      similar to that of Christensen        and Greene to analyze data for
eighty-one electric utilities for the period 1964-1975. For this purpose they have
grouped the data into four cross sections, each consisting of three-year totals for
all firms. If disturbances      in the equations for the cost shares (5.19) are associated
with errors in optimization,          costs must increase relative to the minimum           level
given by the cost function (5.15). Accordingly, Cowing, Reifschneider               and Steven-
son employ a disturbance         for the cost function that is constrained    to be positive.52
   An alternative      to the Christensen-Greene        model for electric utilities has been
developed by Fuss (1977b, 1978). In Fuss’s model the cost function is permitted
to differ ex ante, before a plant is constructed,         and ex post, after the plant is in
place. 53 Fuss employ s a generalized            Leontief cost function      with four input
prices- structures,      equipment,     fuel, and labor. He models substitution          among
inputs and economies of scale for seventy-nine              steam generation    plants for the
period 1948-61.
   We have observed that a model of the behavior of a regulated firm based on
cost minimization        must be carefully distinguished       from the model originated by
Averch and Johnson           (1962). In addition      to allowing a given rate of return,
regulatory    authorities may permit electric utilities to adjust the regulated price of
output for changes in the cost of specific inputs. In the electric power industry a



   52Statistical    methods for models of production       with disturbances constrained  to be positive or
negative are discussed by Aigner, Amemiya and Pokier (1976) and Greene (1980).
    53A model of production     with differences between ex ante and ex post substitution   possibilities was
introduced       by Houthakker  (1956). This model has been further developed by Johansen (1972) and
Sato (1975) and has been discussed by Hildenbrand          (1981) and Koopmans (1977). Recent applications
are given by Forsund and Hjalmarsson          (1979,1983),   and Forsund and Jansen (1983).
Ch. 31: Econometric    Methods for Modeling Producer Behavior                                              1x97

common form of adjustment is to permit utilities to change prices with changes in
fuel costs.
    Peterson (1975) has employed a translog cost function for the electric utility
industry to test the Averch-Johnson            hypothesis. For this purpose he introduces
three measures of the effectiveness of regulation into the cost function: a one-zero
dummy variable         distinguishing    between states with and without a regulatory
commission,      a similar variable differentiating       between alternative        methods for
evaluation     of public utility property for rate making purposes, and a variable
representing     differences between the rate of return allowed by the regulatory
authority    and the cost of capital. He analyzes annual observations                 on fifty-six
steam generating plans for the period 1966 to 1968.
    Cowing     (1978) has employed          a quadratic      parametric     form to test the
Averch-Johnson         hypothesis for regulated firms. He introduces            both the cost of
capital and the rate of return allowed by the regulatory authority as determinants
of input demands.         Cowing analyzes data on 114 steam generation                plants con-
structed during each of three time periods-1947-50,                  1955-59,      and 2960-65.
Gollop and Karlson (1978) have employed a translog cost function that incorpo-
rates a measure of the effectiveness of regulatory adjustments              for changes in fuel
costs. This measure is the ratio of costs that may be recovered under the fuel cost
adjustment      mechanism      to all fuel costs. Gollop and Karlson analyze data for
cross sections of individual electric utilities for the years 1970, 1971, and 1972.
    Atkinson    and Halvorsen (1980) have employed a translog parametric                   form to
test the effects of both rate of return regulation                and fuel cost adjustment
mechanisms.      For this purpose they have analyzed cross section data for electric
utilities in 1973. Gollop and Roberts (1983) have studied the effectiveness                      of
regulations     on sulfur dioxide emissions in the electric utility industry.                 They
employ      a translog     cost function    that depends      on a measure of regulatory
effectiveness.    This measure is based on the legally mandated              reduction in emis-
sions and on the enforcement          of emission standards. Gollop and Roberts analyze
cross sections of fifty-six electric utilities for each of the years 1973-1979                 and
employ the results to study the impact of environmental              regulation on productiv-
ity growth.


6.2.    Multiple outputs

Brown, Caves, and Christensen (1979) have introduced       a model for joint produc-
tion of freight and transportation  services in the railroad industry based on the
translog cost function (5.15). 54 A cost flexibility (5.4) can be defined for each
output. Scale biases and derivatives of the cost flexibilities with respect to each

   54A review of the literature   on regulation   with joint production   is given by Bailey and Friedlaender
(1982).
1898                                                                                  D. W. Jorgemn


output     can be taken to be constant               parameters.     The resulting     cost function
depends on logarithms             of input prices and logarithms         of the quantities    of each
output. Caves, Christensen,            and Trethaway (1980) have extended this approach
by introducing       Box-Cox transformations           of the quantities of the outputs in place
of logarithmic       transformations.      This generalized       translog cost function permits
complete specialization          in the production     of a single output.
   The generalized         translog cost function has been applied to cross sections of
Class I railroads         in the United States for 1955, 1963, and 1974 by Caves,
Christensen,      and Swanson (1980). They consider five categories of inputs: labor,
way and structures,           equipment,     fuel, and materials.       For freight transportation
services they take ton-miles and average length of freight haul as measures of
output. Passenger services are measured by passenger-miles                    and average length of
passenger     trip. They employ the results to measure productivity                    growth in the
U.S. railroad industry for the period 1951-74. Caves, Christensen,                      and Swanson
(1981) have employed data for cross sections of Class I railroads in the United
States to fit a variable cost function, treating way and structures as a fixed input
and combining         equipment       and materials into a single variable input. They have
employed the results in measuring productivity                 growth for the period 1951-74.
   Friedlaender       and Spady (1981) and Harmatuck               (1979) have utilized a translog
total cost function to analyze cross section data on Class I railroads in the United
States. Jara-Diaz        and Winston (1981) have employed a quadratic cost function to
analyze data on Class III railroads, with measures of output disaggregated                      to the
level of individual      point-to-point     shipments. Brautigan, Daugherty, and Turnquist
(1982) have used a translog variable cost function to analyze monthly data for
nine years for a single railroad. Speed of shipment and quality of service are
included in the cost function as measures of the characteristics                   of output.
   The U.S. trucking industry, like the U.S. railroad industry, is subject to price
regulation.     Spady and Friedlaender          (1978) have employed a translog cost function
to analyze data on a cross section of 168 trucking firms in 1972. They have
disaggregated       inputs into four categories-labor,              fuel, capital, and purchased
transportation.      Freight transportation        services are measured in ton-miles. To take
into account the heterogeneity            of freight transportation        services, five additional
characteristics     of output are included in the cost function - average shipment size,
average length of haul, percentage of less than truckload traffic, insurance costs,
and average load per truck.
   Friedlaender,       Spady, and Chiang (1981) have employed the approach of Spady
and Friedlaender         (1978) to analyze cross sections of 154, 161, and 47 trucking
firms in 1972. Inputs are disaggregated                 in the same four categories, while an
additional     characteristic      of output is included, namely, terminal density, defined
as ton-miles per terminal. Separate models are estimated for each of the three
samples. Friedlaender           and Spady (1981) have employed the results in analyzing
Ch. 31: Econometric   Methods for Modeling Producer Behavior                                        1899

the impact of changes in regulatory policy. Harmatuck                      (1981) has employed a
translog cost function to analyze a cross section of 100 trucking firms in 1977. He
has included data on the number and size of truck load and less-than-truckload
shipments      and average length of haul as measures of output. He disaggregates
input among five activities-line          haul, pickup and delivery, billing and collecting,
platform handling, and all other.
    Finally,   Chiang and Friedlaender           (1985) have disaggregated             the output of
trucking firms into four categories-less            than truckload hauls of under 250 miles,
between 250-500 miles, and over 500 miles, and truck load traffic-all                        measured
in ton miles. Inputs are disaggregated           among five categories-labor,            fuel, revenue
equipment,        “other” capital, and purchased            transportation.      Characteristics       of
output similar to those included in earlier studies by Chiang, Friedlaender,                         and
Spady are incorporated            into the cost function,       together with measures of the
network configuration          of each firm. They have employed this model to analyze a
cross section of 105 trucking firms for 1976.
    The U.S. air transportation           industry,    like the U.S. railroad           and trucking
industries,     is subject to price regulation.          Caves, Christensen,         and Trethaway
(1983) have employed a translog cost function to analyze a panel data set for all
U.S. truck and local service airlines for the period 1970-81. Winston (1985) has
 provided a survey of econometric models of producer behavior in the transporta-
 tion industries,     including railroads, trucking, and airlines.
     In the United States the communications                industries,     like the transportation
 industries,   are largely privately owned but subject to price regulation. Nadiri and
 Schankerman         (1981) have employed a translog cost function                  to analyze time
 series data for 1947-76 on the U.S. Bell System. They include the operating
 telephone companies and Long Lines, but exclude the manufacturing                         activities of
 Western Electric and the research and development                activities of Bell Laboratories.
 Output is an aggregate of four service categories; inputs of capital, labor, and
 materials    are distinguished.      A time trend is included in the cost function as an
index of technology;           the stock of research and development               is included       as a
 separate measure of the level of technology.
    Christensen,      Cummings, and Schoech (1983) have employed alternative specifi-
cations of the translog cost functions to analyze time series data for the U.S. Bell
 System for 1947-1977.           They employ a distributed         lag of research and develop-
ment expenditures          by the Bell System to represent the level of technology.                    As
alternative    representations      they consider the proportion        of telephones with access
to direct distance dialing, the percentage of telephones connected to central offices
with modern switching facilities, and a more comprehensive                      measure of research
and development.          They also consider specifications         with capital input held fixed
and with experienced           labor and management           held fixed. Evans and Heckman
(1983, 1984) have provided an alternative analysis of the same data set. They have
1900                                                                                 D. W. Jorgenson

studied economies of scope m the joint production      of teiecommunications          services.
   Bell Canada     is the largest telecommunications       firm in Canada.         Fuss, and
Waverman     (1981) have employed a translog cost function to analyze time series
data on Bell Canada for the period 1952-1975. Three outputs are distinguished:
message toll service, other total service, and local and miscellaneous                  service.
Capital, labor, and materials are treated as separate categories of input. The level
of technology     is represented    by a time trend. Denny,           Fuss, Everson,        and
Waverman     (1981) have analyzed time series data for the period 1952-1976. The
percentage   of telephones     with access to direct dialing and the percentage               of
telephones   connected    to central offices with modern          switching    facilities are
incorporated   into the cost function as measures of the level of technology. Kiss,
Karabadjian,    and Lefebvre (1983) have compared           alternative    specifications     of
output    and the level of technology.     Fuss (1983) has provided             a survey of
econometric    modeling of telecommunications     services.



7.     Conclusion

The purpose of this concluding section is to suggest possible directions for future
research on econometric              modeling of producer behavior. We first discuss the
application      of econometric models of production            in general equilibrium     analysis.
The primary         focus of empirical research has been on the characterization                   of
technology       for individual       producing    units. Application     of the results typically
involves models for both demand and supply for each commodity.                       The ultimate
objective of econometric             modeling of production        is to construct   general equi-
librium models encompassing               demand and supplies for a wide range of products
and factors of production.
    A second direction           for future research on producer           behavior is to exploit
statistical    techniques       appropriate     for panel data. Panel data sets consist of
observations       on several producing           units at many points of time. Empirical
research on patterns of substitution             and technical change has been based on time
series observations        on a single producing unit or on cross section observations            on
different units at a given point of time. Research on economics of scale has been
based primarily on cross section observations.
    Our exposition of econometric methods has emphasized areas of research where
the methodology          has crystallized.     An important      area for future research is the
implementation         of dynamic models of technology.              These models are based on
substitution      possibilities    among outputs and inputs at different points of time. A
number       of promising         avenues for investigation        have been suggested in the
literature on the theory of production.             We conclude the paper with a brief review
of possible approaches to the dynamic modeling of producer behavior.
Ch. 31: Econometric Methods for Modeling Producer Behavior                                           1901

7.1.    General equilibrium       modeling

At the outset of our discussion it is essential to recognize that the predominant
tradition in general equilibrium          modeling does not employ econometric                  methods.
This tradition originated with the seminal work of Leontief (1951) beginning with
the implementation           of the static input-output           model. Leontief (1953) gave a
further impetus to the development              of general equilibrium         modeling by introduc-
ing a dynamic input-output             model. Empirical work associated with input-output
analysis is based on estimating the unknown parameters of a general equilibrium
model from a single interindustry            transactions      table.
    The usefulness of the “fixed coefficients” assumption                  that underlies input-out-
put analysis is hardly subject to dispute. By linearizing technology it is possible to
solve at one stroke the two fundamental                   problems      that arise in the practical
implementation         of general equilibrium        models. First, the resulting general equi-
librium    model can be solved as a system of linear equations                          with constant
coefficients.     Second, the unknown             parameters       describing     technology     can be
estimated from a single data point.
    The first successful implementation            of a general equilibrium         model without the
fixed coefficients assumption          of input-output        analysis is due to Johansen (1974).
Johansen      retained     the fixed coefficients assumption             in modeling      demands     for
intermediate       goods, but employed linear logarithmic                or Cobb-Douglas         produc-
tion functions in modeling the substitution              between capital and labor services and
technical     change. Linear logarithmic            production       functions    imply that relative
shares of inputs in the value of output are fixed, so that the unknown parameters
characterizing       substitution     between capital and labor inputs can be estimated
from a single data point.
    In modeling producer behavior Johansen employed econometric                          methods only
in estimating        constant     rates of technical         change. The essential          features    of
Johansen’s      approach       have been preserved in the general equilibrium                     models
surveyed by Fullerton,          Henderson,     and Shoven (1984). The unknown parameters
describing technology in these models are determined by “calibration”                         to a single
data point. Data from a single interindustry                transactions     table are supplemented
by a small number of parameters estimated econometrically.                         The obvious disad-
vantage of this approach is that arbitrary constraints                    on patterns of production
are required in order to make calibration               possible.
    An alternative      approach to modeling producer behavior for general equilibrium
models is through complete systems of demand functions                             for inputs in each
industrial    sector. Each system gives quantities              demanded       as functions of prices
and output. This approach to general equilibrium                   of modeling producer behavior
was originated         by Berndt and Jorgenson               (1973). As in the descriptions             of
technology      by Leontief and Johansen,             production      is characterized     by constant
1902                                                                                  D. w. Jorgmson

returns     to scale in each sector. As a consequence,              commodity       prices can be
expressed      as functions     of factor prices, using the nonsubstitution             theorem of
Samuelson       (1951). This greatly facilitates the solution of the econometric             general
equilibrium      model constructed       by Hudson and Jorgenson (1974) by permitting                a
substantial     reduction in dimensionality       of the space of prices to be determined by
the model.
   The implementation          of econometric     models of producer behavior for general
equilibrium       analysis is very demanding         in terms of data requirements.            These
models require the construction             of a consistent      time series of interindustry
transactions      tables. By comparison,      the noneconometric        approaches of Leontief
and Johansen        require only a single inter-industry      transactions     table. Second, the
implementation         of systems of input demand           functions     requires methods         for
the estimation        of parameters     in systems of nonlinear        simultaneous       equations.
Finally,     the restrictions    implied by the economic theory of producer behavior
require estimation        under both equality and inequality constraints.
   Jorgenson       and Fraumeni       (1981) have constructed       an econometric         model of
producer behavior for thirty-five industrial sectors of the U.S. economy. The next
research objective is to disaggregate           the demands for energy and materials by
constructing      a hierarchy of models for allocation within the energy and materials
aggregates. A second research objective is to incorporate                the production      models
for all thirty-five industrial sectors into an econometric general equilibrium                 model
of production       for the U.S. economy along the lines suggested by Jorgenson (1983,
1984a). A general equilibrium          model will make it possible to analyze the implica-
tions of sectoral patterns of substitution          and technical change for the behavior of
the U.S. economy as a whole.



7.2.   Panel data

The approach       to modeling economies         of scale originated   by Christensen     and
Greene (1976) is based on the underlying             assumption  that individual   producing
units at the same point of time have the same technology.               Separate models of
production     are fitted for each time period, implying that the same producing unit
has a different       technology    at different points of time. A more symmetrical
treatment    of observations     at different points of time is suggested by the model of
substitution    and technical change in U.S. agriculture         developed by Binswanger
(1974a, 1974b, 1978~). In this model technology is permitted to differ among time
periods and among producing units.
   Caves, Christensen,        and Trethaway       (1984) have employed       a translog cost
function to analyze a panel data set for all U.S. trunk and local service airlines for
the period 1970-81. Individual          airlines are observed in some or all years during
the period. Differences in technology among years and among producing units are
Ch. 31: Ecormmetric   Methods jar   Modeling   Producer   Behavior                               1903


incorporated      through one-zero         dummy variables that enter the cost function.
One set of dummy variables corresponds                  to the individual      producing    units. A
second set of dummy variables corresponds                to the time periods.
    Although    airlines provide both freight and passenger service, the revenues for
passenger service greatly predominate            in the total, so that output is defined as an
aggregate of five categories of transportation               services. Inputs are broken down
into three categories-labor,         fuel, and capital and materials. The number of points
served by an airline is included in the cost functions as a measure of the size of
the network.       Average stage length and average load factor are included                       as
additional    characteristics     of output specific to the airline.
    Caves, Christensen,       and Trethaway introduce a distinction            between economies
of scale and economies of density. Economies of scale are defined in terms of the
sum of the elasticities of total cost with respect to output and points served,
holding input prices and other characteristics               of output constant. Economies of
density are defined in terms of the elasticity of total cost with respect to output,
holding points served, input prices, and other characteristics                 of output constant.
Caves, Christensen,        and Trethaway find constant returns to scale and increasing
returns to density in airline service.
    The model of panel data .employed by Caves, Christensen,                     and Trethaway in
 analyzing air transportation        service is based on “ fixed effects”. The characteristics
 of output specific to a producing           unit can be estimated by employing one-zero
dummy variables         for each producing         unit. An alternative       approach based on
“random      effects” of output characteristics            is utilized by Caves, Christensen,
Trethaway,      and Windle (1984) in modeling                rail transportation     service. They
consider a panel data set for forty-three Class I railroads in the United States for
the period 1951-1975.
   Caves, Christensen,        Trethaway, and Windle employ a generalized translog cost
function in modeling the joint production             of freight and passenger transportation
services by rail. They treat the effects of characteristics            of output specific to each
railroad as a random variable. They estimate the resulting model by panel data
techniques originated by Mundlak (1963,1978). The number of route miles served
by a railroad is included in the cost function as a measure of the size of the
network. Length of haul for freight and length of trip for passengers are included
as additional    characteristics     of output.
    Economies      of density in the production            of rail transportation      services are
defined in terms of the elasticity of total cost with respect to output, holding route
miles, input prices, firm-specific effects, and other characteristics              of output fixed.
Economies of scale are defined holding only input prices and other characteristics
of output fixed. The impact of changes in outputs, route miles, and firm specific
effects can be estimated by panel data techniques. Economies of density and scale
can be estimated        from a single cross section by omitting firm-specific                dummy
variables.
1904                                                                             D. W. Jorgenson

   Panel data techniques          require the construction     of a consistent   time series of
observation     on individual        producing    units. By comparison,      the cross section
methods developed by Christensen               and Greene require only a cross section of
observations    for a single time period. The next research objective in characterizing
economies     of scale and economies of density is to develop panel data sets for
regulated    industries-electricity         generation,   transportation,    and communica-
tions-and     to apply panel data techniques in the analysis of economies of scale
and economies of density.



7.3.   Dynamic models of production

The simplest intertemporal       model of production       is based on capital as a factor of
production.   A less restrictive model generates costs of adjustment from changes in
the level of capital input through investment. As the level of investment increases,
the amount of marketable         output that can be produced from given levels of all
inputs is reduced. Marketable         output and investment         can be treated as outputs
that are jointly produced from capital and other inputs. Models of production
based on costs of adjustment         have been analyzed, for example, by Lucas (1967)
and Uzawa (1969).
   Optimal   production      planning    with costs of adjustment         requires the use of
optimal control techniques.        The optimal production         plan at each point of time
depends on the initial level of capital input, so that capital is a “quasi-fixed”
input. Obviously,     labor and other inputs can also be treated as quasi-fixed in
models of production       based on costs of adjustment.        The optimal production      plan
at each point of time depends on the initial levels of all quasi-fixed inputs.
   The optimal production        plan with costs of adjustment          depends on all future
prices of outputs      and inputs of the production           process. Unlike the prices of
outputs and inputs at each point of time employed in the production                  studies we
have reviewed, future prices cannot be observed on the basis of market transac-
tions. To simplify the incorporation          of future prices into econometric      models of
production,   a possible approach is to treat these prices as if they were known with
certainty. A further simplification      is to take all future prices to be equal to current
prices, so that expectations      are “static”.
   Dynamic     models of production         based on static expectations        have been em-
ployed by Denny, Fuss, and Waverman (1981), Epstein and Denny (1983), and
Morrison    and Berndt (1980). Denny, Fuss, and Waverman                     have constructed
models of substitution       among capital, labor, energy, and materials inputs for
two-digit industries     in Canada and the United States. Epstein and Denny have
analyzed substitution       among these same inputs for total manufacturing               in the
United States. Morrison and Berndt have utilized a similar data set with labor
input divided between blue collar and white collar labor. Berndt, Morrison, and
Watkins (1981) have SUNeyed dynamic models of production.
Ch. 31: Econometric Methods for Modeling Producer Behavior                                                 1905

   The obvious         objection      to dynamic      models of production         based on static
expectations      is that current prices change from period to period, but expectations
are based on unchanging              future prices. An alternative       approach is to base the
dynamic      optimization        on forecasts of future prices. Since these forecasts are
subject to random errors, it is natural to require that the optimization                      process
take into account the uncertainty            that accompanies forecasts of future prices. Two
alternative     approaches to optimization           under uncertainty    have been proposed.
   We first consider the approach to optimization                   under uncertainty      based on
certainty    equivalence.        Provided     that the objective      function    for producers       is
quadratic      and constraints         are linear, optimization       under uncertainty       can be
replaced by a corresponding             optimization    problem under certainty. This gives rise
to linear demand           functions     for inputs with prices replaced by their certainty
equivalents.     This approach has been developed in considerable                 detail by Hansen
and Sargent (1980, 1981) and has been employed in modeling producer behavior
by Epstein and Yatchew (1985), Meese (1980) and Sargent (1978).
    An alternative       approach to optimization           under uncertainty     is to employ the
information       about expectations        of future prices contained in current input levels.
This approach         has the advantage          that it is not limited to quadratic        objective
functions     and linear constraints.         Pindyck and Rotemberg          (1983a) have utilized
this approach in analyzing the Berndt-Wood                  (1975) data set for U.S. manufactur-
ing, treating       capital and labor input as quasi-fixed.             They employ a translog
variable cost function to represent technology,                 adding costs of adjustment        that
are quadratic       in the current and lagged values of .the quasi-fixed inputs. Pindyck
and Rotemberg           (1983b) have employed a similar approach                to the analysis of
production      with two kinds of capital input and two types of labor input.



References

Afriat, S. (1972) “Efficiency     Estimates of Production    Functions”,    International Economic Review,
   October, 13(3), 568-598.
Aigncr, D. J., T. Amemiya and D. J. Poirier (1976) “On the Estimation              of Production    Frontiers:
   Maximum Likelihood Estimation of the Parameters of a Discontinuous           Density Function”,    Interna-
   tional Economic Review, June, 17(2), 311-396.
Amemiya, T. (1974) “The Nonlinear Two-Stage Least Squares Estimator”,               Journal of Econometrics,
   July, 2(2), 105-110.
Amemiya,      T. (1977) “The Maximum Likelihood         Estimator   and the Nonlinear     Three-Stage     Least
   Squares Estimator in the General Nonlinear Simultaneous          Equation Model”, Econometrica, May,
   45(4), 955-968.
Amemiya, T. (1983) “Nonlinear        Regression Models”, this Hundbook, 1, 333-3X9.
Anderson,    R. G. (1981) “On The Specifcation      of Conditional    Factor Demand Functions in Recent
   Studies of U.S. Manufacturing”,     in: E. R. Bemdt and B. C. Field, eds., 119-144.
Applebaum,      E. (1978) “Testing Neoclassical Production Theory,” Journal of Econometrics, February,
   7(l), 87-102.
Applebaum,      E. (1979a) “On the Choice of Functional Forms”, International Economic Review, June,
   20(2), 449-458.
Applebaum,      E. (1979b) “Testing Price Taking Behavior”,       Journal of Econometrics, February,       9(3),
   283-294.
1906                                                                                                     D. W. Jorgenson

Arrow, K. J., H. B. Chencry, B. S. Minhas and R. M. Solow (1961) “Capital-Labor                          Substitution    and
   Economic Efficiency”,          Review of Economics and Statistics, August, 63(3), 2255241.
Atkinson,     S. E. and R. Halvorsen (1980) “A Test of Relative and Absolute Price Efficiency in
   Regulated Utilities”, Review of Economics and Statistics, February, 62(l), 81-88.
Avcrch, H. and L. L. Johnson (1962) “Behavior of the Firm Under Regulatory Constraint”,                           Americun
   Economic Review, December, 52(5), 1052-1069.
Bailey, E. E. (1973) Economic Theory of Regulatory Constmint. Lexington: Lexington Books.
Bailey, E. E. and A. F. Friedlacnder           (1982) “Market Structure and Multiproduct            Industries”,    Journal
   of Economic Literature, September, 20(3), 1024-1048.
Baumol, W. J. and A. K. Klevorick (1970) “Input Choices and Rate-of-Return                                Regulation:     An
   Overview of the Discussion”,           Bell Journal of Economics und Munugement Science, Autumn, l(2).
   1622190.
Belsley, D. A. (1974) “Estimation           of Systems of Simultaneous Equations and Computational                 Applica-
   tions of GREMLIN”,            Annuls of Social and Economic Meuuurement, October, 3(4), 551-614.
Bclsley, D. A. (1979) “On The Computational               Competitiveness      of Full-Information     Maximum-Likeli-
   hood and Three-Stage            Least-Squares     in the Estimation      of Nonlinear,       Simultaneous-Equations
   Models”, Journal of Econometrics, February, 9(3), 315-342.
Berndt, E. R. and L. R. Christensen (1973a) “The Internal Structure of Functional                           Relationships:
   Separability,    Substitution,    and Aggregation”,     Review of Economic Studies, July, 40(3), 123, 403-410.
Bcrndt, E. R. and L. R. Christensen                (1973b) “The Translog Function             and the Substitution         of
   Equipment,      Structures,     and Labor in U.S. Manufacturing,          1929%1968”, Journul of Econometrics,
   March, l(l), 81-114.
Bcrndt, E. R. and L. R. Christensen (1974) “Testing for the Existence of a Consistent Aggregate Index
   of Labor Inputs”, American Economic Review, June, 64(3), 391-404.
Berndt, E. R. and B. C. Field, cds. (1981) Modeling nnd Meusuring Natural Resource Substitution.
   Cambridge:      M.I.T. Press.
Berndt, E. R., B. H. Hall, R. E. Hall and J. A. Hausman                       (1974) “Estimation       and Inference in
   Nonlinear Structural Models”, Annals of Social and Economic Measurement, October, 3(4), 653-665.
Bcrndt, E. R. and D. W. Jorgenson (1973) “Production                   Structure”, in: D. W. Jorgenson and H. S.
   Houthakker.      eds., U.S. Energy Resources and Economic Growth. Washington:                  Energy Policy Project.
Berndt. E. R. and M. Khaled (1979) “Parametric                   Productivity     Measurement       and Choice Among
   Flexible Functional        Forms”, Journal of Political Economy, December, 87(6), 1220-1245.
Berndt, E. R. and C. J. Morrison (1979) “Income Redistribution                    and Employment        Effects of Rising
   Energy Prices”, Resources and Energy, October, 2(2), 131-150.
Bcrndt. E. R., C. J. Morrison and G. C. Watkins (1981) “Dynamic                       Models of Energy Demand: An
   Assessment      and Comparison”,        in: E. R. Bemdt and B. C. Field, eds., 259-289.
Bcrndt, E. R. and D. 0. Wood (1975) “Technology,                   Prices, and the Derived Demand for Energy”,
   Revrew of Economics und Stutistics, August, 57(3), 376-384.
Bcmdt, E. R. and D. 0. Wood (1979) “Engineering                and Econometric Intcrprctations         of Energy-Capital
   Complcmcntarity”,         American Economic Review, June, 69(3), 342-354.
Berndt, E. R. and D. 0. Wood (1981) “Engineering               and Econometric Interpretations         of Energy-Capital
   Complementarity:         Reply and Further Results”,           American Economic Review, December,                  71(5),
   1105-1110.
Binswanger.      H. P. (1974a) “A Cost-Function           Approach to the Measurement           of Elasticities of Factor
   Demand and Elasticities of Substitution”,             American Journnl of Agricultural Economics, May, 56(2),
   377-386.
Binswangcr,      H. P. (1974b) “The Mcasurcmcnt              of Technical Change Biases with Many Factors of
   Production,”      Americun Economic Review, December, 64(5), 964-976.
Binswangcr,      H. P. (1978a) “Induced Technical Change: Evolution of Thought”, in: H. P. Binswangcr
   and V. W. Ruttan, eds., 13-43.
Binswanger,      H. P. (1978b) “Issues in Modeling Induced Technical Change”, in: H. P. Binswangcr and
   V. W. Ruttan, cds., 128-163.
Binswanger,      H. P. (1978~) “Measured           Biases of Technical Change: The United States”, in: H. P.
   Binswangcr      and V. W. Ruttan, cds., 215-242.
Binswangcr,      H. P. and V. W. Ruttan, eds. (1978) Induced Innovcrtion. Baltimore: Johns Hopkins
   University Press.
C‘h. .?I: Econometric      Method.7 for Modeling Producer Rehuvior                                                         1907

Blackorby,      C., D. Primont and R. R. Russell (1977) “On Testing Separability                           Restrictions    with
   Flexible Functional         Forms”, Journal of Econometrics, March, 5(2), 195-209.
Blackorby,      C., D. Primont and R. R. Russell (1978) Duality, Separability, and Functionul Structure.
   Amsterdam:        North-Holland.
Blackorby,      C. and R. R. Russell (1976) “Functional              Structure and the Allen Partial Elasticities of
   Substitution:      An Application     of Duality Theory”, Reutew of Economic Studies, 43(2), 134, 2855292.
Braeutigan,      R. R., A. F. Daughety and M. A. Turnquist (1982) “The Estimation                         of a Hybrid Cost
   Function for a Railroad Firm”, Review of Economics and Statistics, August. 64(3), 394-404.
Brown, M., ed. (1967) The Theory and Empiricttl Analysis of Production. New York: Columbia
   University Press.
Brown, R. S.. D. W. Caves and L. R. Christensen                      (1979) “Modeling        the Structure of Cost and
   Production      for Multiproduct      Firms”, Southern Economic Journal, July, 46(3), 256273.
Brown, R. S. and L. R. Christensen                (1981) “Estimating      Elasticities of Substitution       in a Model of
   Partial Static Equilibrium:        An Application to U.S. Agriculture,           1947 to 1974”, in: E. R. Berndt and
   B. C. Field, eds., 209-229.
Burgess, D. F. (1974) “A Cost Minimization                   Approach    to Import Demand Equations”,                Review of
   Economics und Stcrtistits, May, 56(2), 224-234.
Burgess, D. F. (1975) “Duality Theory and Pitfalls in the Specification                     of Technology”,         Journnl of
   Econometrics,       May, 3(2), 105-121.
Cameron,      T. A. and S. L. Schwartz (1979) “Sectoral Energy Demand in Canadian                            Manufacturing
   Industries”.      Energy Economics, April, l(2), 112-118.
C’arlson, S. (1939) A Study on the Pure Theory of Production. London: King.
Caves, D. W. and L. R. Christensen                   (1980) “Global     Properties     of Flexible Functional         Forms”,
   Americctn Economic Review, June, 70(3), 422-432.
Caves, D. W., L. R. Christensen                 and J. A. Swanson (1980) “Productivity                 in U.S. Railroads,
   1951-1974”.        Bell Journal of Economics, Spring 1980, 11(l), 166-181.
Caves, D. W., L. R. Christensen             and J. A. Swanson (1981) “Productivity             Growth, Scale Economies
   and Capacity        Utilization in U.S. Railroads, 1955-1974”.            Amertcan Economic Review, December,
   71(5), 994-1002.
Caves. D. W.. L. R. Christensen                 and M. W. Trethaway            (1980) “Flcxiblc       Cost Functions         for
   Multiproduct       Firms”, Review of Economics und Statistics, August, 62(3), 477-481.
Caves, D. W., L. R. Christensen                and M. W. Trethaway           (1984) “Economics          of Density Versus
   Economics        of Scale: Why Trunk and Local Airline Costs Differ”, Rand Journul of Economics,
   Winter. 15(4), 471-489.
Caves. D. W.. L. R. Christensen,            M. W. Trethaway and R. Windle (1984) “Network                    Effects and the
   Measurement         of Returns to Scale and Density for U.S. Railroads”,                    in: A. F. Daughety,          ed.,
   Anu!vtical Studies in Trunsport Economics, forthcoming.
C’hiang, S. J. W. and A. F. Friedlaender            (1985) “Trucking Technology and Marked Structure”,                  Review
   of Economit~s und Statistics, May, 67(2), 250-258.
Christ, C., ct. al. (1963) Mwsurement in Economics. Stanford: Stanford University Press.
Christensen,       L. R., D. Cummings           and P. E. Schocch (1983) “Econometric                Estimation       of Scale
   Economies in Telecommunications”,                in: L. Courville, A. de Fontcnay and R. Dobell, eds., 27-53.
Christensen,      L. R. and W. H. Greene (1976) “Economies              of Scale in U.S. Electric Power Generation”,
   Jourtutl of Politicctl Economy, August, X4(4), 655-676.
Christensen.       L. R. and D. W. Jorgenson               (1970) “U.S. Real Product            and Real Factor Input,
   lY2Y-1967”.        Review of Income and Wealth, March, 16(l), 19-50.
Christensen,      L. R., D. W. Jorgenson and L. J. Lau (1971) “Conjugate                Duality and the Transcendental
   Logarithmic       Production    Function”,      Econometricu, July, 39(3), 255-256.
Christensen,      L. R., D. W. Jorgenson and L. J. Lau (1973) “Transcendental                     Logarithmic      Production
   Frontiers”,      Retjiew of Economics and Statisttcs, Februarv. 55(l). 28-45.
Cobb, C. W. and P. H. Douglas (192X) “A Theory of+Production”,                             American Economic Revrew,
   March, 18(2), 139-165.
Conrad, K. and D. W. Jorgenson (1977) “Tests of a Model of Production for the Federal Republic of
   Germany,       1950-1973”,      European Economic Review, October, 10(l), 51-75.
Conrad, K. and D. W. Jorgenson (1978) “The Structure of Technology: Nonjointness                            and Commodity
   Augmentation,        Fcdcral Republic of Germany, lY50-lY73”,                Empirical Economics, 3(2), 91-113.
1908                                                                                                     D. W. Jorgenson

Courvillc, L., A. de Fontenay and R. Dobell, eds. (1983) Economic An&is                            of Telecommunications.
   Amsterdam:      North-Holland.
Cowing, T. G. (1978) “The Effectiveness of Rate-of-Return                     Regulation:      An Empirical Test Using
   Protit Functions”,      in: M. Fuss and D. McFadden, eds.. 2, 215-246.
Cowing, T. G. and V. K. Smith (1978) “The Estimation of a Production                           Technology:     A Survey of
   Econometric      Analyses of Steam Electric Generation”,            Land Economics, May, 54(2), 158-16X.
Cowing, T. G. and R. E. Stevenson, eds. (1981), Productioitv Measurement in Regulated             ,I        Industries. New
  York: Academic Press.
Cowing, T. G., D. Rcifschncider          and R. E. Stevenson, “A Comparison                of Alternative Frontier Cost
   Function Specifications”,       in: A. Doaramaci,     ed.. 63-92.
Dargay. J. (1983) “The Demand for Energy in Swedish Manufacturing,”                       in B.-C. Ysander, ed., Energy
   in Swedish Manu/acturing. Stockholm:             Industrial     Institute for Economic           and Social Research,
   57-128.
Denny,      M. (1974) “The Relationship           Between Functional          Forms for the Production             System”,
   Canadian Journal of Economics, February, 7(l), 21-31.
Denny, M. and M. Fuss (1977) “The Use of.Approximation                      Analysis to Test for Separability and the
  Existence of Consistent Aggregates”,           American Economic Review, June, 67(3), 404-418.
Denny, M., M. Fuss, C. Everson and L. Waverman (1981) “Estimating                           the Effects of Technological
   Innovation    in Telecommunications:       The Production Structure of Bell Canada”, Canadian Journal of
   Economics, February, 14(l), 24-43.
Denny, M., M. Fuss and L. Waverman (1981) “The Substitution                        Possibilities for Energy: Evidence
   from U.S. and Canadian            Manufacturing      Industries”,     in: E. R. Bemdt and B. C. Field, eds.,
  230-258.
Denny, M. and J. D. May (1978) “Homotheticity               and Real Value-Added in Canadian Manufacturing”,
  in: M. Fuss and D. McFadden, eds., 2, 53-70.
Denny, M., J. D. May and C. Pinto (1978) “The Demand for Energy in Canadian Manufacturing:
   Prologue to an Energy Policy”, Canadian Journal of Economics, May, 11(2), 300-313.
Denny. M. and C. Pinto, “An Aggregate Model with Multi-Product                        Technologies”,      in: M. Fuss and
  D. McFadden,        eds., 2, 249-268.
Diewert, W. E. (1971) “An Application             of the Shephard Duality Theorem, A Generalized                    Leontief
   Production     Function”,    Journal of Political Economy, May/June,             79(3), 481-507.
Diewert, W. E. (1973) “Functional            Forms for Profit and Transformation                 Functions”,     Journal of
   Economic Theory, June, 6(3), 284-316.
Diewert. W. E. (1974a) “Applications          of Duality Theory”, in: M. D. Intrilligator and D. A. Kendrick,
  eds., 106-171.
Diewert,     W. E. (1974b) “Functional           Forms for Revenue and Factor Requirement                       Functions”,
  fntemutional Economic Review, February, 15(l), 119-130.
Diewert, W. E. (1976) “Exact and Superlative Index Numbers”,                     Journal of Econometrics, May, 4(2),
  115-14s.
Diewert. W. E. (1980) “Aggregation          Problems in the Measurement            of Capital”, in: D. Usher, ed., The
   Measurement of Capital. Chicago: University of Chicago Press, 433-528.
Diewert, W. E. (1982) “Duality Approaches              to Microeconomic        Theory”, in: K. J. Arrow and M. D.
  Intrilligator,   eds., Handhook of Mathematical Economics, 2, 535-591.
Diewert, W. E. and C. Parkan (1983) “Linear Programming                         Tests of Regularity         Conditions    for
  Production      Functions”,     in: W. Eichhom,        R. Henn, K. Neumann               and R. W. Shephard,          eds.,
  131-158.
Dogramaci,       A., ed. (1983)        Developments in Econometric Ana!yses of Productivity. Boston:
  Kluwer-Nijhoff.
Douglas, P. W. (1948) “Are There Laws of Production?“,                   American Economic Review, March, 38(l),
   1-41.
Douglas, P. W. (1967) “Comments            on the Cobb-Douglas            Production    Function”,     in: M. Brown, ed.,
  15-22.
Douglas, P. W. (1976) “The Cobb-Douglas              Production Function Once Again: Its History, Its Testing,
  and Some Empirical Values,” October, 84(5), 903-916.
Ehud, R. I. and A. Melnik (1981) “The Substitution                   of Capital, Labor and Energy in the Israeli
  Economy”,       Resources and Energy, November, 3(3), 247-258.
Ch. 31: Econometric       Methods for Modeling Producer Behavior                                                     1909

Eichhorn,     W., R. Henn, K. Neumann                 and R. Wm. Shephard,       eds. (1983) Quantitative Studies on
   Production and Prices. Wurzburg: Physica-Verlag.
Elbadawi,     I.. A. R. Gallant and G. Souza (1983) “An Elasticity Can Be Estimated                          Consistently
   Without a Priori Knowledge of Functional Form”, Econometrica, November, 51(6), 1731-1752.
Epstein, L. G. and A. Yatchew (1985) “The Empirical Determination                        ol Technology     and Expecta-
   tions: A Simplified Procedure”,           Journal of Econometrics, February, 27(2), 2355258.
Evans. D. S. and J. J. Heckman                   (1983) “Multi-Product       Cost Function     Estimates    and Natural
   Monopoly       Tests for the Bell System”, in: D. S. Evans, ed., Breaking up Bell. Amsterdam:
   North-Holland,        253-282.
Evans, D. S. and J. J. Heckman (1984) “A Test for Subadditivity                       of the Cost Function with an
   Application      to the Bell System”, American Economic Review, Scptcmbcr, 74(4), 615-623.
Faucett,    Jack and Associates (1977) Development of 35Order Input-Output                         Tables, 1958-1974.
   Washington:       Federal Emergency Management               Agency.
Field, B. C. and E. R. Bemdt (1981) “An Introductiory                     Review of Research on the Economics of
   Natural Resource Substitution”,            in: E. R. Bemdt and B. C. Field, eds., l-14.
Field, B. C. and C. Grebenstein            (1980) “Substituting      for Energy in U.S. Manufacturing”,         Review of
   Economtcs und Statistics, May, 62(2), 207-212.
Forsund, F. R. and L. Hjalmarsson              (1979) “Frontier Production Functions and Technical Progress: A
   Study of General Milk Processing Swedish Dairy Plants”, Econometrica, July, 47(4), 883-901.
Forsund, F. R. and L. Hjalmarsson              (1983) “Technical Progress and Structural Change in the Swedish
   Cement Industry 195S-1979”,              Econometrica, September, 51(5), 1449-1467.
Forsund, F. R. and E. S. Jansen (1983) “Technical Progress and Structural Change in the Norwegian
   Primary Aluminum          Industry”,     Scundinavian Journal of Economics, 85(2), 113-126.
Forsund, F. R., C. A. K. Love11 and P. Schmidt (1980) “A Survey of Frontier Production                         Functions
   and of Their Relationship          to Efficiency Measurement”,         Journul of Econometrrcs, May, 13(l), 5-25.
Fraumeni.      B. M. and D. W. Jorgenson               (1980) “The Role of Capital in U.S. Economic Growth,
   194X-1976”, in: G. von Furstenberg,               ed., 9-250.
Frcngcr,    P. (1978) “Factor         Substitution      in the Interindustry    Model and the Use of Inconsistent
   Aggregation”,       in: M. Fuss and D. McFadden, eds., 2, 269-310.
Friede, G. (1979) Investigution of Producer Behavior in the Federal Republic of Germany Using the
   Translog Price Function. Cambridge:              Oelgeschlager,    Gunn and Hain.
Friedlaender,     A. F. and R. H. Spady (1980) “A Derived Demand Function for Freight Transporta-
   tion”, Review of Econonucs and Statistics, August, 62(3), 432-441.
Friedlaender,     A. F. and R. H. Spady (1981) Freight Transport Regulation. Cambridge:                     M.I.T. Press.
Friedlaender,     A. F., R. H. Spady and S. J. W. Chiang (1981) “Regulation                      and the Structure of
   Technology      in the Trucking Industry”, in: T. G. Cowing and R. E. Stevenson, eds., 77-106.
Frisch, R. (1965) Theoty of Production. Chicago: Rand McNally.
Fullerton,    D., Y. K. Henderson           and J. B. Shoven, “A Comparison           of Methodologies      in Empirical
   General Equilibrium         Models of Taxation”, in: H. E. Scarf and J. B. Shoven, eds., 367-410.
Fuss, M. (1977a) “The Demand                    for Energy in Canadian         Manufacturing:     An Example of the
   Estimation     of Production       Structures with Many Inputs”, Journal <$ Econometrics, January, 5(l),
   89-116.
Fuss, M. (1977b) “The Structure of Technology                    Over Time: A Model for Testing the Putty-Clay
   Hypothesis”,       Econometrica, November, 45(8), 1797-1821.
Fuss, M. (197X) “Factor Substitution in Electricity Generation:                A Test of the Putty-Clay     Hypothesis”,
   in: M. Fuss and D. McFadden, eds., 2, 187-214.
Fuss, M. (1983) “A Survey of Recent Results in the Analysis of Production                     Conditions in Telecom-
   munications”,      in: L. Courville, A. de Fontenay and R. Dobell, eds., 3-26.
Fuss, M. and D. McFadden,              eds. (1978) Production Economics. Amsterdam,            North-Holland,      2 Vols.
Fuss, M., D. McFadden            and Y. Mundlak (1978) “A Survey of Functional                Forms in the Economic
   Analysis of Production”,         in: M. Fuss and D. McFadden, eds., 1, 219-268.
Fuss, M. and L. Waverman (1981) “Regulation                    and the Multiproduct      Firm: The Case of Telecom-
   munications      in Canada”, in: G. Fromm, ed., Studies in Public Regulation. Cambridge:                 M.I.T. Press,
   277-313.
Gallant, A. R. (1977) “Three-Stage              Least Squares Estimation for a System of Simultaneous,           Nonlin-
   ear, Implicit Equations”,        Journal of Econometrics, January, 5(l), 71-88.
1910                                                                                                   D. W. Jorgenson

Gallant, A. R. (1981) “On the Bias in Flexible Functional Forms and an Essentially Unbiased Form”,
  Journal of Econometrics, February, 15(2), 211-246.
Gallant, A. R. and A. Holly (1980) “Statistical              Inference in an Implicit, Nonlinear,           Simultaneous
  Equations      Model in the Context of Maximum Likelihood Estimation”,                     Econometrica, April, 48(3),
  6977720.
Gallant,    A. R. and D. W. Jorgenson            (1979) “Statistical     Inference for a System of Simultaneous,
  Nonlinear,      Implicit Equations      in the Context of Instrumental            Variable Estimation”,       Journul of
   E~~onometrics, October/December,           11(2/3), 275-302.
Geary, P. T. and E. J. McDonnell (1980) “Implications                 of the Specification of Technologies:        Further
  Evidence”,      Journul of Econometrics, October, 14(2), 247-255.
Gollop. F. M. and S. M. Karlson (1978) “The Impact of the Fuel Adjustment                                 Mechanism      on
  Economic Efficiency”,        Review of Economics and Stutistics, November, 60(4), 574-584.
Gallop, F. M. and M. J. Roberts (1981) “The Sources of Economic Growth in the U.S. Electric Power
  Industry”,     in: T. G. Cowing and R. E. Stevenson, eds., 107-145.
Gollop. F. M. and M. J. Roberts (1983) “Environmental                   Regulations     and Productivity     Growth: The
  Case of Fossil-Fueled         Electric Power Generation”.          Journal of Poliiicul Economy, August, 91(4).
  6544674.
German, W. M. (1959) “Separable Utility and Aggregation”,                    Econometrica, July, 27(3), 469-481.
Gourieroux,     C., A. Holly and A. Monfort (1980) “Kuhn-Tucker,                    Likelihood Ratio and Wald Tests
   for Nonlinear     Models with Constraints        on the Parameters”.        Harvard University, Harvard Institute
   for Economic Research, Discussion Paper No. 770, June.
Gourieroux,     C.. A. Holly and A. Monfort (1982) “Likelihood             Ratio Test, Wald Test, and Kuhn-Tucker
   Test in Linear Models with Inequality Constraints               on the Regression Parameters”,           Econometricu,
  January, 50(l), 63-80.
Greene.     W. H. (1980) “Maximum              Likelihood    Estimation       of Econometric       Frontier    Functions”,
  Journal of Econumetrics, May, 13(l), 27-56.
Greene. W. H. (1983) “Simultaneous            Estimation of Factor Substitution,           Economies of Scale, Produc-
   tivity, and Non-Neutral       Technical Change”, in: A. Dogramaci, ed., 121-144.
Grifftn, J. M. (1977a) “The Econometrics                of Joint Production:         Another     Approach”,      Review of
   Economics and Sfutistics, November, 59(4), 389-397.
Griffin, J. M. (1977b) “Interfuel Substitution          Possibilities: A Translog Application           to Pooled Data”,
   Internationul Economic Review, October, 18(3), 755-770.
Grit%, J. M. (1977~) “Long-Run           Production Modeling with Pseudo Data: Electric Power Generation”,
   Bell Journal of Economics, Spring 1977, 8(l), 112-127.
Griffin, J. M. (1978) “Joint Production             Technology:     The Case of Petrochemicals”,            Econometrica,
   March, 46(l), 379-396.
Griffin, J. M. (1979) “Statistical      Cost Analysis Revisited”, Quarterly Journul of Economics, February,
   93(l). 107-129.
Griffin, J. M. (1980) “Alternative       Functional Forms and Errors of Pseudo Data Estimation: A Reply”,
   Review of Economics und Statistics, May, 62(2), 327-328.
Griffin, J. M. (1981a) “The Energy-Capital              Complementarity         Controversy:     A Progress Report on
   Reconciliation     Attempts”, in: E. R. Bemdt and B. C. Field, eds., 70-80.
Griffin, J. M. (1981b) “Engineering          and Econometric       Interpretations     of Energy-Capital     Complemen-
   tarity: Comment”,       American Economic Review, December, 71(5), 1100-1104.
Griflin, J. M. (1981~) “Statistical        Cost Analysis Revisited: Reply”, Quarterly Journul of Economics,
   February,    96(l), 183-187.
GriRin, J. M. and P. R. Gregory (1976) “An Intercountry                     Translog Model of Energy Substitution
   Responses”,      Americun Economic Review, December, 66(5), 845-857.
Griliches,    Z. (1967) “Production         Functions    in Manufacturing:         Some Empirical       Results”, in: M.
   Brown, ed., 275-322.
Griliches, Z. and V. Ringstad (1971) Economies of Scale and the Form of the Production Function.
   Amsterdam:       North-Holland.
Hall, R. E. (1973) “The Specification             of Technology       with Several Kinds of Output”,            Journal of
   Political Economy, July/August,          81(4), 878-892.
Halvorsen,      R. (1977) “Energy        Substitution     in U.S. Manufacturing”,            Review of Economics and
   Statistics. November, 59(4), 381-388.
Ch. .?I: Econometric       Methods for Modeling Producer Behaoior                                                       1911

 Iialvorsen, R. (1978) Econometric Studies of U.S. Energy Demand. Lexington: Lexington Books.
 Halvorsen,        R. and J. Ford, “Substitution           Among Energy, Capital and Labor Inputs in U.S.
      Manufacturing”,        in: R. S. Pindyck, ed., Advances in the Economics af Energy and Resources.
     Greenwich:       JAI Press. 1. 51-75 _.
 Hamermesh,         D. S. and~J. Grant (1979) “Econometric          Stud& of Labor-Labor           Substitution     and Their
     Implications      for Policy”, Journal of IIuman Resources, Fall. 14(4). 518-542.
 Han&h,        G. (1978) “Symmetric         Duality and Polar Production’ Functions”,               in: M. Fuss and D.
      McFadden,       eds., 1, 111-132.
 Hanoch, G. and M. Rothschild ( 1972) “Testing the Assumptions                     of Production Theory: A Nonpara-
     metric Approach”,         Journal of Political Economy, March/April,          80(2), 256-275.
 Hansen,       L. P. and T. J. Sargent (1980) “Formulating              and Estimating        Dynamic      Linear Rational
     Expectations       Models”, Journal of Economic D.ynamics and Control, February, 2(l), l-46.
 Hansen,       L. P. and T. J. Sargent (1981) “Linear             Rational Expectations        Models for Dynamically
     Interrelated      Variables”,    in: R. E. Lucas and T. J. Sargent. eds.. Rational Exnectations                       and
     Econometric Practice. Minneapolis:          University of Minnesot~Prcss,          1, 127-156.          ’
 Harmatuck,        Donald J. (1979) “A Policy-Sensitive        Railway Cost Function”,          Logi.stic.v and Trunsporta-
     tion Review, April, 15(2), 277-315.
 Harmatuck,        Donald J. (1981) “A Multiproduct         Cost Function for the Trucking Industry”,              Journal o/
      Transportation Economics and Polky, May, 15(2), 135-153.
 Heady, E. 0. and J. L. Dillon (1961) Agricultural Production Functions. Ames: Iowa State University
     Press.
 Hicks, J. R. (1946) Value and Cupitul. 2nd ed. (1st ed. 1939) Oxford: Oxford University Press.
 Hicks, J. R. (1963) The Theory of Wages. 2nd ed. (1st ed. 1932), London: Macmillan,
 Hildenbrand,        W. (1981) “Short-Run         Production     Functions     Based on Microdata”,           Econometrtca,
     September, 4Y(5), 1095-1125.
 Hotelling.      H. S. (1932) “Edgeworth’s         Taxation Paradox and the Nature of Demand and Supply
     Functions”,      Journal of Politicul Economy, October, 40(5), 517-616.
 Houthakker,        H. S. (1955-1956)     “The Pareto Distribution        and the Cobb-Douglas           Production     Func-
     tion in Activity Analysis”, Review of Economic Studies, 23(l), 60, 27-31.
 Hudson, E A. and D. W. Jorgenson (1974) “U.S. Energy Policy and Economic Growth, 1975-2000”,
     Bell .Journul of Econ0mic.s und Munugement Science, Autumn, 5(2), 461-514.
 Hudson, E. A. and D. W. Jorgenson (197X) “The Economic Impact of Policies to Rcducc U.S. Energy
    Growth,”       Resources and Energy. November. l(3). 205-230.
 Humphrey,         D. B. and J. R. Moroney (1975) “Substitution                Among Capital, Labor, and Natural
    Resource Products in American Manufacturing”,                  Journal of Political Econom_v, February,             83(l),
    57-82.
 Humphrey,        D. B. and B. Wolkowitz (1976) “Substituting             Intermediates     for Capital and Labor with
    Alternative      Functional    Forms: An Aggregate Study”, Applied Economics, March, X(l), 59-68.
Intriligator.     M. D. and D. A. Kendrick, eds. (1974) Frontiers in Qunntitative ,!konomit:r.                 Amsterdam:
    North-Holland,         Vol. 2.
JaraaDiaz,       S. and C. Winston (1981) “Multiproduct           Transportation     Cost Functions: Scale and Scope
    in Railway Operations”,         in: N. Blattner, ed., Eighth European Associution for Research m Industrtal
    Economics, Basle: University of Basle, 1, 437-469.
Jcnnrich,      R. I. (1969) “Asymptotic       Properties of Nonlinear         Least Squares Estimations”,          Annuls of
    Mathematical Statistits, April, 40(2), 633-643.
Johansen.       L. (1972) Production Functions. Amsterdam:           North-Holland.
Johansen,       L. (1974) A Multi-Sectoral Study of Economic Growth. 2nd ed. (1st ed. 1960) Amsterdam,
   North-Holland.
Jorgenson.        D. W:. (1973a) “The Economic             Theory of Replacement           and Depreciation”,         in: W.
   Sellckaerts, ed., Econometrrcs and Economic Theoty. New York: Macmillan, 1X9-221.
Jorgenson,       D. W. (1973b) “Technology          and Decision Rules in the Theory of Investment Behavior”,
   Quarter!y Journal of Economics, November 1973, 87(4), 523-543.
Jorgenson,       D. W. (1974) “Investment        and Production:      A Review”, in: M. D. Intriligator           and D. A.
   Kendrick. eds., 341-366.
Jorgenson.       D. W. (19X0) “Accounting        for Capital”, in: G. von Furstenberg,         ed., 251-319.
Jorgenson,       D. W. (1981) “Energy Prices and Productivity           Growth”, Scundinuviun Journal of Econonz-
1912                                                                                                  D. W. Jorgenson

   tcs, X3(2), 165-179.
Jorgenson,     D. W. (1983) “Modeling           Production     for General Equilibrium        Analysis”,    Scandinauian
   Journal oj Economrcs, 85(2), 101-112.
Jorgenson,     D. W. (1984a) “Econometric           Methods for Applied General Equilibrium                Analysis”, in:
   H. E. Scarf and J. B. Shoven, eds., 139-203.
Jorgenson,     D. W. (1984b) “The Role of Energy in Productivity                  Growth”, in: J. W. Kendrick, ed.,
   International Comparisons of Productivity and Causes of the Slowdown. Cambridge:                             Ballinger,
   219-323.
Jorgenson,     D. W. and B. M. Fraumeni (1981) “Relative Prices and Technical Change”, in: E. R.
   Berndt and B. C. Field, eds., 17-47; revised and reprinted in: W. Eichhorn, R. Henn, K. Neumann
   and R. W. Shephard, eds., 241-269.
Jorgenson,    D. W. and J.-J. Laffont (1974) “Efficient Estimation of Non-Linear                   Simultaneous      Equa-
    tions with Additive Disturbances”,           Annal.s of Social and Economrc Meusurement, October, 3(4),
   615-640.
Jorgenson,     D. W. and L. .I. Lau (1974a) “Duality and Differentiability                 in Production”,     Journal of
    Ecorzomic Theory, September, 9(l), 23-42.
Jorgenson,     D. W. and L. J. Lau (1974b) “The Duality of Technology                       and Economic Behavior”,
    Review of Economic Studies, April, 41(2), 126, 181-200.
Jorgenson. D. W. and L. J. Lau (1975) “The Structure of Consumer Preferences”,                     Annals of Social and
    Economic Measurement, January, 4(l), 49-101.
Jorgenson,     D. W., L. J. Lau and T. M. Stoker (1982) “The Transcendental                     Logarithmic     Model of
   Aggregate Consumer Behavior”, in: R. L. Basmann and G. Rhodes, cds., Advances in Econometrics.
    Greenwich:     JAI Press, 1, 97-238.
Kang, H. and G. M. Brown (1981) “Partial and Full Elasticities of Substitution and the Energy-Capital
    Complementarity      Controversy”,      in: E. R. Berndt and B. C. Field, eds., 81-90.
Kennedy, C. (1964) “Induced Bias in Innovation and the Theory of Distribution”,                       Economic Journal,
    September, 74(298), 541-547.
Kennedy, C. and A. P. Thirlwall (1972) “Technical                 Progress: A Survey”, Economic Journul, March,
    X2(325). 11-72.
Kiss, F.. S. Karabadjian        and B. J. Lefebvre (1983) “Economies           of Scale and Scope in Bell Canada”,
    in: L. Courville, A. de Fontenay and R. Dobell, eds., 55-82.
Kmcnta, J. (1967) “On Estimation of the CES Production Function”,                      Internutionnl Economic Review,
    June, 8(2), 180-189.
Kohli, U. R. (1981) “Nonjointness            and Factor Intensity in U.S. Production”,          International Economic
    Remew, February,      22(l), 3-18.
Kohli, U. R. (1983) “Non-joint             Technologies”,      Review af Economic Studies, January,           50(l), 160,
    209-219.
Kopp, R. J. and W. E. Diewert (1982) “The Decomposition                   of Frontier Cost Function Deviations into
    Measures     of Technical      and Allocative     Efficiency”,     Journnl of Econometrics, August, 19(2/3),
    319-332.
Kopp, R. J. and V. K. Smith (1980a) “Input Substitution,                 Aggregation,    and Engineering Descriptions
    of Production    Activities”,    Economics Letter.s, 5(4), 289-296.
Kopp, R. J. and V. K. Smith (1980b) “Measuring                  Factor Substitution with Neoclassical Models: An
    Experimental     Evaluation”,     Bell Journal of Economics, Autumn, 11(2), 631-655.
 Kopp, R. J. and V. K. Smith (1981a) “Measuring               the Prospects of Resource Substitution Under Input
    and Technology      Aggregation”,     in: E. R. Bemdt and B. C. Field, eds., 145-174.
Kopp, R. J. and V. K. Smith (1981b) “Productivity                Measurement      and Environmental      Regulation:    An
    Engineering-Econometric         Analysis”, in: T. G. Cowing and R. E. Stevenson, eds., 249-283.
 Kopp, R. J. and V. K. Smith (1981~) “Neoclassical                Modeling of Nonneutral        Technological     Change:
    An Experimental      Appraisal”,     Scandinavian Journal of Economics, 85(2), 127-146.
Kopp, R. J. and V. K. Smith (1982) “Neoclassical                 Measurement      of Ex Ante Resource Substitution:
    An Experimental       Evaluation”,     in: J. R. Moroney, ed., Advances in the Economics of Energy and
    Resources. Greenwich:        JAI Press, 4, 183-198.
 Koopmans,      T. C. (1977) “Examples            of Production      Relations    Based on Microdata”,         in: G. C.
    Harcourt,   ed.. The Microeconomic Foundations of Macroeconomics. London: Macmillan, 144-171.
Kuhn, H. W. and A. W. Tucker (1951) “Nonlinear                  Programming”,      in: J. Neyman, ed., Proceedings of
C‘h. 31: Econometric       Methods for Modeling Producer Behavior                                                          1913

   the Second     Berkeley Symposium on Mathematical Statistics and Probability. Berkeley: University                          of
   California    Press, 481-492.
Lau, L. J. (1969) “Duality           and the Structure of Utility Functions”,              Journal of Economic Theon;,
   December,       l(4), 374-396.
Lau, L. J. (1974) “Applications            of Duality Theory: Comments”,              in: M. D. Intriligator        and D. A.
   Kendrick, eds., 176-199.
Lau, L. J. (1976) “A Characterization               of the Normalized        Restricted     Protit Function”,       Journal of
   Economic Theory, February, 12(l), 131-163.
Lau, L. J. (197Xa) “Applications .           of Profit Functions”,        in: M. Fuss and D. McFadden.                  eds.. 1.
   133-216.
Lau, I.. J. (1978b) “Testing and Imposing Monotonicity,                Convexity and Quasi-Convexity             Constraints”,
   in: M. Fuss and D. McFadden, eds., 1. 409-453.
Lau. L. J. (1986) “Functional          Forms in Econometric         Model Building”, this Handhook, Vol. 3.
Leontief, W. W. (1947a) “Introduction              to a Theory of the Internal Structure of Functional                Relation-
   ships”, Econometrico, October, 15(4), 361-373.
Leontief, W. W. (1947b) “A Note on the Interrelation                     of Subsets of Independent            Variables of a
   Continuous        Function with Continuous         First Derivatives”,      Bulletin of the American Mathematical
   Socrety, April, 53(4), 343-350.
Leontief, W. W. (1951) The Structure of the American Economy, 1919-1939.                            2nd cd. (1st ed. 1941)
   New York: Oxford University Press.
Leontief. W. W., ed. (1953) Studies in the Structure of the American Economy. New York: Oxford
   University Press.
Liew, C. K. (1976) “A Two-Stage                 Least-Squares      Estimator     with Inequality       Restrictions     on the
   Parameters”,       Review of Economics and Statistics, May, 58(2), 234-238.
Longva, S. and 0. Olsen (1983) “Producer                   Behaviour in the MSG Model”, in: 0. Bterkholt, S.
   Longva, 0. Olsen and S. Strom, eds., Ana!vsis of Supply and Demand of Electricit_v in the Norwegian
   I:‘conomy. Oslo: Central Statistical Bureau, 52-83.
Lucas, R.-E. (1967) “Adjustment              Costs and the Theory of Supply”, Journal of Political Econom,y,
   August, Pt. 1, 75(4), 321-334.
Maddala, Cr. S. and R. B. Roberts (1980) “Alternative                 Functional     Forms and Errors of Pseudo Data
   Estimation”,       Review of Economics und Statistics, May, 62(2), 323-326.
Maddala. G. S. and R. B. Roberts (1981) “Statistical                Cost Analysis Revisited: Comment”,                Quartet+
  Journal of Economrcs, February, 96(l), 177-182.
Magnus, J. R. (1979) “Substitution              Between Energy and Non-Energy                 Inputs in the Netherlands,
   1950-1976”.        International Economic Review, June, 20(2), 465-484.
Magnus,      J. R. and A. D. Woodland               (1980) “Interfuel       Substitution     and Separability        in Dutch
   Manufacturing:         A Multivariate      Error Components         Approach”,        London School of Economics,
   November.
Malinvaud,      E. (1970) “The Consistency of Non-Linear               Regressions”,      Annals of Mathematical Statts-
   tics, June, 41(3), 456-469.
Malinvaud,      E. (1980) Statistical Methods of Econometricx               3rd ed. (1st ed. 1966) trans. A. Silvey.
   Amsterdam:        North-Holland.
McFadden,       D. (1963) “Further Results on CES Production                 Functions”,     Review of Economic Studie.s,
   June, 30(2), X3, 73-83.
McFadden,       1). (1978) “Cost, Revenue, and Profit Functions”, in: M. Fuss and D. McFadden, eds., 1,
   l-110.
McRae.      R. N. (1981) “Regional            Demand      for Energy by Canadian             Manufacturing        Industries”,
   Internatronal Journal o/Energy S_ystems, January, l(l), 38-48.
McRae, R. N. and A. R. Webster (1982) “The Robustness of a Translog Model to Describe Regional
   Energy Demand by Canadian Manufacturing                  Industries”,    Resources and Energy, March, 4(l), l-25.
Meese. R. (19X0) “Dynamic               Factor Demand Schedules for Labor and Capital Under Rational
   Expectations”,       Journal of Econometrics, September, 14(l), 141-15X.
Moroney, J. R. and A. Toevs (1977) “Factor Costs and Factor Use: An Analysis of Labor, Capital,
   and Natural Resources”,          Southern Economic Journal, October, 44(2), 222-239.
Moroney. J. R. and A. Toevs (1979) “Input Prices, Substitution,                       and Product Inflation”, in: R. S.
   Pindyck, ed., Advances tn the Economics of Energy and Resources. Greenwich: JAI Press, 1, 27-50.
1914                                                                                                    D. W. Jorgenson

Moroncy, J. R. and J. M. Trapani (1981a) “Alternative                Models of Substitution        and Technical Change
   in Natural Resource Intensive Industries”, in: E. R. Berndt and B. C. Field, eds., 48-69.
Moroney. J. R. and J. M. Trapam (1981b) “Factor Demand and Substitution                              in Mineral-Intensive
   Industries”,      Bell Journul of Economics. Spring. 12(l). 212-285.
Morrison. C. J. and E. R. Berndt (1981) “Short-run               Labor Productivity in a Dynamic Model”, Journal
   of Econometrics, August, 16(3), 339-366.
Mundlak,      Y. (1963) “Estimation        of Production       and Behavioral Functions         from a Combination         of
   Cross-Section       and Time Series Data”, in: C. Christ, et al., 138-166.
Mundlak. Y. (1978) “On the Pocling of Time Series and Cross Section Data”, Econometn’cu, January,
   46(l), 60-X6.
Nadiri. M. I. (1970) “Some Approaches to the Theory and Measurcmcnt                      of Total Factor Productivity:
   A Survey”, Journul of Economic Lueruture, December, 8(4), 1137-1178.
Nadiri, M. I. and M. Schankcrman             (1981) “The Structure of Production,           Technological      Change, and
   the Rate of Growth of Total Factor Productivity                in the U.S. Bell System”, in: T. G. Cowing and
   R. E. Stevenson, eds., 219-248.
Nakamura,       S. (1984) An Inter-Industry Translog Model of Prices and Technical Change for the We.st
   C;ermun Economy. Berlin: Springer-Verlag.
Nerlove, M. (1963) “Returns to Scale in Electricity Supply”, in: C. Christ, et al., 167-200.
Nerlove, M. (1967) “ Recent Empirical Studies of the CES and Related Production Functions”, in: M.
   Brown, cd., 55-122.
Norsworthy,        J. R. and M. J. Harper (1981) “Dynamic                 Models of Energy Substitution             in U.S.
   Manufacturing”,        in: E. R. Bemdt and B. C. Field, eds., 177-208.
Ozatalay, S., S. S. Grumbaugh        and T. V. Long III, “Energy Substitution and National Energy Policy”,
   Americun Economic Review, May, 69(2), 369-371.
Parks, R. W. (1971) “Responsiveness             of Factor Utilization in Swedish Manufacturing,                1870-1950”,
   Rerliew of Economics and Stntisrics, May, 53(2), 129-139.
Peterson, H. C. (1975) “An Empirical Test of Regulatory Effects”, Bell Journal of Economics, Spring,
   6(l), 111-126.
Pindyck.     R. S. (lY79a) “Interfuel         Substitution      and Industrial    Demand       for Energy”,       Reuiew of
   Gonomic.v und Srarisric.s, May, 61(2), 169-179.
Pindyck, R. S. (1979b) The Structure of World Energy Demand. Cambridge:                        M.I.T. Press.
Pindyck, R. S. and J. J. Rotemberg (1983a) “Dynamic                    Factor Demands and the Effects of Energy_.
   Price Shocks”, Americun Economic Review, December, 73(5), 1066-1079.
Pindvck. R. S. and J. J. Rotembere (1983b) “Dvnamic Factor Demands Under Rational Exoectations”.
   S&dinaoian         Journul of Econo&,        85(i), 223-239.
Quandt, R. E. (1983) “Computational              Problems and Methods”, this Handbook, 1, 701-764.
Russell, C. S. and W. J. Vaughan (1976) Steel Production. Baltimore: Johns Hopkins University Press.
Russell, R. R. (1975) “Functional            Separability     and Partial Elasticities of Substitution”,          Reuiew of
   Economic Studies, January, 42(l), 129, 79-86.
Samuelson,       P. A. (1951) “Abstract        of a Theorem Concerning            Substitutability      in Open Leonticf
   Models”, in: T. C. Koopmans, ed., Activity Anulysis of Production and Allocution. Wiley: New York,
    142-146.
Samuelson,       P. A. (1953-1954)     “Prices of Factors and Goods in General Equilibrium”,                      Review of
   Economic Studies, 21(l), 54, l-20.
Samuelson, P. A. (1960) “Structure of a Minimum Equilibrium System”, in: R. W. Pfouts, cd., ~.~sstlys
   in Economics und Econometrrcs. Chapel Hill: University of North Carolina Press, l-33.
Samuelson,       P. A. (1965) “A Theory of Induced Innovation                  Along Kennedy-Weizsacker              Lines”,
   Revrew of Economics and Stufistics, November, 47(4), 343-356.
Samuelson, P. A. (1973) “Relative Shares and Elasticities Simplified: Comment”,                        American Economic
   Review, Septcmbcr, 63(4), 770-771.
Samuclson,      P. A. (1974) “Complementarity-An               Essay on the 40th Anniversary           of the Hicks-Allen
   Revolution      in Demand Theory”, Journul of Economic Literature, December, 12(4), 1255-1289.
Samuelson,       P. A. (1979) “Paul Douglas’s Measurement                  of Production      Functions      and Marginal
   Productivities”,      Journal of Political Economy, October, Part 1, X7(5), 923-939.
Samuelson,       P. A. (1983) Foundations of Economic Analysis. 2nd ed. (1st ed. 1947), Cambridge:
   Harvard      University Press.
Sargan, J. D. (1971) “Production           Functions”,     in: R. Layard, cd., Qualijied Manpower and Economic
Ch. <I: EconomrtrrcMethods for Modeling Producer Behavior                                                          1915

   Prrformunce. London: Allan Lane. 145-204.
Sargent. T. J. (1978) “Estimation      of Dynamic Labor Demand Schedules Under Rational Expectations”,
   Journal of Polirical Econom_y, December, 86(6), 1009-1045.
Sato, K. (1975) Produclion Functions und Aggregation. Amsterdam:                  North-Holland.
Scarf, H. E. and J. B. Shaven, eds. (1984) Applied General Equilibrium Ana+sr.s. Cambridge:
   Cambridge      University Press.
Schneider, E. (1934) Theorie der Produktion. Wien: Springer.
Shephard.     R. W. (1953) Cost and Production Functions. Princeton: Princeton University Press.
Shephard,     R. W. (1970) Theory of Cost and Production Functions. Princeton:                   Princeton    University
   Press.
Sono, M. (1961) “The Effect of Price Changes on the Demand and Supply of Separable Goods”,
   International Economic Review, September, 2(3), 239-271.
Spady, R. H. and A. F. Friedlaender            (1978) “Hedonic      Cost Functions      for the Regulated Trucking
   Industry”.     Bell Journal of Economics, Spring, 9(l), 159-179.
Stevenson, R. E. (1980) “Measuring          Technological     Bias”, American Economic Review, March, 70(l),
   162-173.
Thompson,      R. G., et al. (1977) Environment and Energy in Petroleum Rejming, Electric Power, and
   Chemical Industries. Houston: Gulf Publishing.
Uzawa, H. (1962) “Production             Functions    with Constant      Elasticity    of Substitution”,      Review of
   Economic Studies, October, 29(4), 81, 291-299.
Uzawa, H. (1964) “Duality Principles in the Theory of Cost and Production”,                    International Economic
   Review, May, 5(2), 216-220.
Uzawa, H. (1969) “Time Preference and the Penrose Effect in a Two-Class Model of Economic
   Growth”,     Journal of Political Economy, July/August,         Pt. 2, 77(4), 628-652.
Varian, H. (1984) “The Nonparametric            Approach to Production Analysis”, Econometricu, May, 52(2),
   579-598.
von Furstenberg,       G., ed. (1980) Capital, Eficiency, and Growth. Cambridge:             Ballinger.
von Weizsacker,        C. C. (1962) “A New Technical Progress Function”.                 Massachusetts      Institute of
   Technology,     Department     of Economics.
Walras, L. (1954) Elements of Pure Economics. trans. W. JatIe, Homewood:                   Irwin.
Walters, A. A. (1963) “Production           and Cost Functions:        An Econometric        Survey”, Econometrica,
   January-April,      31(l), 1-66.
Wills, J. (1979) “Technical       Change in the U.S. Primary Metals Industry”,              Journul of Econometrics,
   April, 10(l), 85-98.
Winston, C. (1985) “Conceptual          Developments      in the Economics of Transportation:           An Interpretive
   Survey”, Journal of Economic Literature, March, 23(l), 57-94.
Woodland,      A. D. (1975) “Substitution     of Structures, Equipment, and Labor in Canadian Production”,
   Internarional Economic Reuiew, February, 16(l), 171-187.
Woodland,      A. D. (1978) “On Testing Weak Separability”,            Journal of Econometrics, December, 8(3),
   383-398.
Woodward.       G. T. (1983) “A Factor Augmenting               Approach    for Studying Capital Measurement,
   Obsolescence,      and the Recent Productivity      Slowdown”, in: A. Dogramaci,          ed., 93-120.
Zellner, A. (1962) “An Efficient Method of Estimating Seemingly Unrelated Regressions and Tests for
   Aggregation     Bias”, Journnl of the American Statisiical Association, June, 58(2), 348-368.
Zellner, A. and H. Theil (1962) “Three-Stage             Least Squares: Simultaneous          Estimation    of Simulta-
   neous Equations”,       Econometrica, January, 30(l), 54-78.



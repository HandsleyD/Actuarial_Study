---
normalized_id: shared-pdf-reference-economic-and-econometric-models
exam_code: SHARED
material_scope: economic and econometric models.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Economic and Econometric Models.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-economic-and-econometric-models

Chapter 3


ECONOMIC AND ECONOMETRIC                                    MODELS
MICHAEL       D. INTRILIGATOR*

University of California, LAS Angeles




Contents

1.   Introduction and overview                                                                       182
2.   Models and economic models                                                                      182
3.   Comparative statics                                                                             186
4.   Econometric models                                                                              187
     4. I.   Structural     form                                                                     190
     4.2.    Reduced       form                                                                      193
     4.3.    Final form                                                                              195
5.   Identification                                                                                  197
6.   Some specific models                                                                            199
     6.1.    Demand       models                                                                     199
     6.2.    Production      models                                                                  202
     6.3.    Macroeconometric          models                                                        204
     6.4.    Other econometric         models                                                        206
7.   Uses of econometric models                                                                      207
     7.1.    Structural     analysis                                                                 208
     7.2.    Forecasting                                                                             209
     7.3.    Policy evaluation                                                                       212
8. Conclusion                                                                                        215
References                                                                                           216




   *The author acknowledges,   with appreciation, the helpful   suggestions   of Ray Fair, Gary   Fromm,
Zvi Griliches, Elizabeth Landaw, and Henri Theil.


Handbook of Econometrics, Volume I, Edited by Z, Griliches and M.D. Infriligator
0 North-Holland Publishing Company, 1983
182                                                                                      M. D. Intriligator




1.    Introduction and overview

This chapter of the Handbook will present a discussion of models, particularly
models used in econometrics.’ Models play a major role in all econometric
studies, whether theoretical or applied. Indeed, defining econometrics as the
branch of economics concerned with the empirical estimation of economic
relationships, models, together with data, represent the basic ingredients of any
econometric study. Typically, the theory of the phenomena under investigation is
developed into a model which is further refined into an econometric model. This
model is then estimated on the basis of data pertaining to the phenomena under
investigation using econometric techniques. The estimated model can then be
used for various purposes, including structural analysis, forecasting, and policy
evaluation.
   This chapter provides a discussion of models and economic models in Section
2, and comparative statics in Section 3. Section 4 then presents econometric
models, including the structural form, reduced form, and final form. The problem
of identification, which is presented in more detail in Chapter 4 of this Handbook,
by Cheng Hsiao, is discussed in Section 5. Section 6 provides some examples of
specific models, including demand (discussed in more detail in Chapter 30 of this
Handbook by Angus Deaton), production (discussed in more detail in Chapter 3 1
of this Handbook by Dale Jorgenson), macroeconometric models (also discussed
in Chapters 33, 34, and 35 of the Handbook by Ray Fair, John Taylor, and
Lawrence Klein, respectively), and other econometric models. Section 7 presents a
discussion of the uses of econometric models, specifically structural analysis,
forecasting (further discussed in Chapter 33 of this Handbook by Ray Fair), and
policy evaluation (further discussed in Chapters 34 and 35 of this Handbook by
John Taylor and Lawrence Klein, respectively). Section 8 presents a conclusion.


2.    Models and economic models

A model is a simplified representation of an actual phenomenon, such as an actual
system or process. The actual phenomenon is represented by the model in order
to explain it, to predict it, and to control it, goals corresponding to the three

   ‘This chapter is baaed to a large extent on material presented in Intrihgator (1978, esp. ch. 1, 2, 7, 8,
10, 12, 13, 14, 15, and 16). Other general references on economic and econometric models include
Beach (1957), Suits (1963), Christ (1966), Bergstrom (1967), Bali (1968), KendalI (1968), Cramer
(1969), Mahnvaud (1970), Bridge (1971), Goldberger and Duncan (1973), Maddala (1977), Learner
(1978), Zellner (1979), and Arnold (1981). Other chapters in this Handbook that treat economic and
econometric models include Chapter 4 by Hsiao, Chapter 5 by Learner, Chapter 26 by Lau, Chapter
28 by Maddala, and Chapter 29 by Heckman and Singer.
Ch. 3: Economic and Econometric Models                                             183


purposes of econometrics, namely structural analysis, forecasting, and policy
evaluation. Sometimes the actual system is called the real-world system in order to
emphasize the distinction between it and the model system that represents it.
   Modeling, that is, the art of model building, is an integral part of most sciences,
whether physical or social, because the real-world systems under consideration
typically are enormously complex. For example, both the motion of an elemen-
tary particle in an accelerator and the determination of national income are
real-world phenomena of such complexity that they can be treated only by means
of a simplified representation, that is, via a model. To be most useful a model has
to strike a reasonable balance between realism and manageability. It should be
realistic in incorporating the main elements of the phenomena being represented,
specifying the interrelationships among the constituent elements of the system in
a way that is sufficiently detailed and explicit so as to ensure that the study of the
model will lead to insights concerning the real-world system. It should, however,
at the same time be manageable in eliminating extraneous influences and sim-
plifying processes so as to ensure that it yields insights or conclusions not
obtainable from direct observation of the real-world system. The art of model
building involves balancing the often competing goals of realism and manageabil-
ity.
   Typically the initial models of a phenomena are highly simplified, emphasizing
manageability. They may, for example, model the system under study as a “black
box”, treating only its inputs and outputs without attempting to analyze how the
two are related. Later models are typically more elaborate, tracking inputs
forward and outputs backward until eventually an analytic model is developed
which incorporates all the major interconnections between inputs and outputs in
the real-world system. The process of modeling typically involves not only the
analysis of interconnections between inputs and outputs but also the treatment of
additional or related phenomena and greater disaggregation.
   Many different types of models have been used in economics and other social
and physical sciences. Among the most important types are verbal/logical
models, physical models, geometric models, and algebraic models, involving
alternative ways of representing the real-world system.
    Verbal/logical  models use verbal analogies, sometimes called paradigms, to
represent phenomena. In economics two of the earliest and still two of the best
paradigms were developed by Adam Smith.2 The first was the pin factory, used
by Smith as a model of the concept of division of labor. This concept is applicable
at the national and international level, but the participants and processes become
so numerous and their interrelations so manifold that the principle could be lost.
Smith therefore used the paradigm of the pin factory, where the principle could
be readily understood. The second paradigm employed by Smith was that of the

  ‘See Smith (1776).
184                                                                                 M. D. Intriligator


“invisible hand”, one of the most important contributions of economics to the
study of social processes. Smith observed that in a decentralized economy
the price system guides agents to ensure that their individual actions attain a
coherent equilibrium for the economy as a whole, promoting the general welfare
of society. Again a complex process, in this case that of all economic actions, was
represented by a verbal model.
   Physical models represent the real-world system by a physical entity. An
example is a scale model of a physical object, such as a scaled-down model
airframe for an airplane, which is tested in a wind tunnel or a scaled-up model of
a protein molecule. Economic systems have also been studied with physical
models, including hydraulic models in which flows of fluids represent monetary
flows in the economy. The most important physical models of economic phenom-
ena, however, are those relying upon electric circuits, using the modem analog
computer.3
   Geometric models use diagrams to show relationships among variables. Such
models have played an important role in the development of economics. For
example, the geometric model of price determination in a single isolated market,
involving intersecting demand and supply curves, is a fundamental one in
microeconomic theory. Similarly the geometric model of the determination of
national income, e.g. via the IS-LM diagram, is a fundamental one in macroeco-
nomic theory. Such models are useful in indicating the principal relationships
among the major variables representing the phenomena under investigation, but,
because of the limited number of dimensions available, it is necessary to restrict
geometric models to a relatively few variables. To deal with more variables
usually involves use of an algebraic model.
   Algebraic models, which are the most important type of models for purposes of
econometrics, represent a real-world system by means of algebraic relations which
form a system of equations. The system of equations involves certain variables,
called endogenous variables, which are the jointly dependent variables of the
model and which are simultaneously determined by the system of equations. The
system usually contains other variables, called exogenous variables, which are
determined outside the system but which influence it by affecting the values of
the endogenous variables. These variables affect the system but are not in turn
affected by the system. The model also contains parameters which are generally
estimated on the basis of the relevant data using econometric techniques.
   The general algebraic model can be expressed as the following system of g
independent and consistent (i.e. mutually compatible) equations in the g endoge-
nous variables, y,, y2,. . . ,y,, the k exogenous (or lagged endogenous) variables,


   3For applications  of electronic analog models to economics, see Morehouse,   Strotz   and Horwitz
(1950), Enke (195 I), Strotz, McAnulty and Naines (1953). and Tustin (1953).
Ch. 3: Economic and Econometric Models                                                                        185

x1, x2,-*.,xk,        and the m parameters, a,, a,, . . . ,a,,,:




      fg(y,,y2,...,yg;X1,X2,...,Xk;~,,~2,...,~~)=0.                                                        (2.1)
   In vector notation the general algebraic model can be written

      f(Y,.0)=0,                                                                                           (2.2)
where f is a column vector of g functions, y is a row vector of g endogenous
variables, x is a row vector of k exogenous (or lagged endogenous) variables, 6 is a
row vector of m parameters, and 0 is a column vector of zeros.
   Assuming the functions are differentiable and that the Jacobian matrix of
first-order partial derivatives is non-singular at a particular point:


                      -afl -...-
                           afl afl
                       ay, aY2 aYg
        -=
         af           s         af2
                               ay2’
                                         ..gg
       I I .’
        ay                                           *O        at(y,x),                                    (2.3)

                      -afg -...-
                           afg afg
                       JY, aY2 aYg

the implicit function theorem implies that at this point it is possible to solve the
system of equations (2.2) for the endogenous variables as differentiable functions
of the exogenous variables and parameters: 4
      Y =$+A,                                                                                              (2.4)
where (p if a column vector of g functions.
  A very simple example is the determination of price in an isolated market,
where the equations for demand and supply are

       4 - D(P, x, 8) = 0
       q-S(p,xJ)=O.                                                                                        (2.5)

   4For discussions    of the implicit   function   theorem,   see Rudin   (1964), Apostol(1974),   and Hoffman
(1975).
186                                                                                   M. D.Intriligator

Here q and p are quantity and price respectively; D and S are demand and supply
functions respectively; and x and S are vectors of exogenous variables and
parameters, respectively. The Jacobian condition is

       1    -- aD
               ap
                                                                                                 (2.6)
        1   --as *'y
              ap
which is met if the customary slope conditions

      %O            and    S-0                                                                   (2.7)
       ap                  ap

are satisfied. Then the system of equations (2.4) can be solved for (equilibrium)
quantity and price:

      4=4(x,%              p=p(-?Q                                                               (2.8)


3.    Comparative statics

The comparative statics technique is one of the most useful techniques in
economic analysis.5 It involves the comparison of two equilibrium points of a
system of equations such as (2.2), describing the phenomena under consideration.
The two equilibrium points typically involve equilibrium before and after dis-
placement by a change in one of the parameters of the system of equations.
   Consider system (2.2) for which the Jacobian condition in (2.3) is met so the
system can be solved for the endogenous variables as in (2.4). Inserting these
solutions into (2.2) yields the system of g identities:

      f[~(x,~)A~l-o.                                                                             (3.1)

Now consider the effect of a change in one of the exogenous variables or
parameters, say .xj, on the equilibrium values of the variables.6 Differentiating
each of the identities in (3.1) with respect to xj yields

      h$,gz+g=o                           1=1,2 )...) g.                                         (3-2)
                     J        J




  sFor a general discussion of the theory of comparative statics, see Samuelson (1947), Intriligator
(1971), Kalman and Intriligator (1973), Silberberg (1978), and Intriligator (1981).
  6A similar approach would yield the effect of any parameter, say S4, on the equilibrium values of the
variables.
Ch. 3: Economic and Econometric Models                                                                 187

Solving for the effect of a change in every xj, for j = 1,2,. . . , k, on yh yields, in
matrix notation,


                                                                                                   (3.3)

where the three matrices are




Eq. (3.3) expresses the change in the equilibrium levels of each of the endogenous
variables as each of the exogenous variables changes. The effect of a change dxj
in any one exogenous variable on the equilibrium value of any of the endogenous
variables d y,, is then given as

      dy,   =   2 dxjy                                                                             (3-5)
                  J

where ay,/ax, is the hj element of the ay/dx matrix in (3.3).
   Restrictions on the signs or values of the derivatives in af/ay and af/ax in
(3.3) often lead to comparable restrictions on the signs or values of the derivatives
in ay/ax. These qualitative restrictions on the effects of exogenous variables on
endogenous variables provide some of the most important results in the analysis
of economic systems described by an algebraic model.’


4.   Econometric models

Econometric models are generally algebraic models that are stochastic in including
random variables (as opposed to deterministic models which do not include
random variables). The random variables that are included, typically as additive
stochastic disturbance terms, account in part for the omission of relevant vari-
ables, incorrect specification of the model, errors in measuring variables, etc. The
general econometric model with additive stochastic disturbance terms can be
written as the non -linear structural form system of g equations:

     f(Y,x,v=&,                                                                                    (4-l)


   ‘For a discussion of qualitative economics, involving an analysis of the sign or value restrictions on
partial derivatives, see Samuelson (1947) and Quirk and Saposnik (1968). For a specific example of
these qualitative restrictions see the discussion of Barten’s fundamental matrix equation for consump-
tion theory in Chapter 1 of this Handbook by Theil.
188                                                                  M. D. Intriligator

where E is a vector of stochastic disturbance terms, one for each equation. This
form is similar to (2.2) with the addition of disturbance terms in each equation
where E is a vector of stochastic disturbance terms. If the conditions of the
implicit function theorem are met these equations can be solved for the endoge-
nous variables as differentiable functions of the exogenous variables and parame-
ters, with the stochastic disturbance terms included as additive error terms. The
resulting non -linear reduced form is the system of g equations:

                                                                                (4.2)
where u is the vector of the stochastic disturbance terms in the reduced form. The
corresponding deterministic reduced form of the model is (2.4). From (4.2) it
follows that the econometric model uniquely specifies not the endogenous vari-
ables but rather the probability distribution of each of the endogenous variables,
given the values taken by all exogenous variables and given the values of all
parameters of the model. Each equation of the model, other than definitions,
equilibrium conditions, and identities, is generally assumed to contain an additive
stochastic disturbance term, which is an unobservable random variable with
certain assumed properties, e.g. mean, variance, and covariance. The values taken
by that variable are not known with certainty; rather, they can be considered
random drawings from a probability distribution with certain assumed moments.
The inclusion of such stochastic disturbance terms in the econometric model is
basic to the use of tools of statistical inference to estimate parameters of the
model.
   Econometric models are either linear or non-linear. Early econometric models
and many current econometric models are linear in that they can be expressed as
models that are linear in the parameters. This linearity assumption has been an
important one for proving mathematical and statistical theorems concerning
econometric models, for estimating parameters, and for using the estimated
models for structural analysis, forecasting, and policy evaluation. The linearity
assumption has been justified in several ways. First, many economic relationships
are by their very nature linear, such as the definitions of expenditure, revenue,
cost, and profit. Second, the linearity assumption applies only to parameters, not
to variables of the model. Thus, a quadratic cost function, of the form

      C = a + bq + cq2,

where C is cost, q is output, and a, b, and c are parameters, while non-linear in q,
is linear in a, b, and c. Third, non-linear models can sometimes be transformed
into linear models, such as by a logarithmic transformation. For example, the
Cobb-Douglas production function

      Y = AK”Lp,                                                                 (4.4)
Ch. 3: Economic and Economefric Models                                                                      189


where Y is output, K is capital, L is labor, and A, a, and /? are parameters, can be
so transformed into the log-linear form

         logY=a+alogK+j?logL                              (a=logA).                                       (4.9

Fourth, any smooth function can be reasonably approximated in an appropriate
range by a linear function, e.g. via a Taylor’s theorem approximation. Consider,
for example, the general production function

         Y= F(K, L),                                                                                      (4.6)

of which the Cobb-Douglas form (4.4) is one special case. If the function is
continuous it can be approximated as a linear function in an appropriate range by
taking the linear portion of the Taylor’s series expansion. Expanding about the
base levels of (K,, L,),


         Y-~(K,~L,)+~(K,,L,)(K-K,)+~(K,,L,)(L-L,),                                                        (4.7)

so that8

         Ysa+bK+cL,                                                                                       (4.8)

where the parameters can be interpreted as




         b=   $+,, L,),                                                                                   G-9)

         c= s(K,,,          L,).

Finally, linear models are much more convenient                                 and more manageable than

  *Other approximations           are also possible,   e.g. expressing   the production   function   as




Taking     a Taylor’s   series approximation     yields

         logYao’+b’logK+c’logL,

which would approximate     any production  function as a log-linear Cobb-Douglas    production    function
as in (4.4) and (4.5). See Kmenta (1967). For a more general discussion of transformations     see Box and
Cox (1964).
190                                                                                  M. D. Intriligator

non-linear models. Thus, the linearity assumption has frequently been made for
econometric models.
   Non-linear models, that is, econometric models that are non-linear in the
parameters, have become more common in recent years largely due to advances in
computer software and numerical analysis that have facilitated the estimation of
such models. Techniques and computer software used in the estimation of
non-linear econometric models are discussed in Chapters 6 and 12 of this
Handbook by Takeshi Amemiya and Richard Quandt, respectively. The parame-
ters of a non-linear model are frequently estimated using successive linear
approximations to the model, and the properties of such estimators can be
derived asymptotically or approximately. While these properties are valid for
large samples the exact small sample properties of estimators for general non-
linear econometric models are unknown. Furthermore, some of the properties
have been shown to hold only under the assumption of normally distributed
stochastic disturbances, and the consequences of model n&specification are
generally not known in the non-linear case. A considerable amount of work has
been done in recent years on non-linear models, however, as discussed elsewhere
in this Handbook.’


4.1.    Structural form

The basic econometric model is the structural form, from which the reduced form
and the final form can be obtained. The general structural form of the linear (in
parameters) stochastic econometric model, assuming there are g endogenous
variables, y,, y2,. . . ,y,, and k exogenous variables, xt, x2,. . .,xk, can be written:

       YlYll   + Y2Y21 +   . . . + YgYgl + -G4,     +x2/321   +   * * * + ?A      = -%r

       YlYl2   + Y2Y22 +   * * * + YgYg2 + x,&2     +x2/322   +   * * * + %A2     = -529
                                                                                               (4.10)

       YlYI,   + Y2Y2g +   * * * + YgYg,   + x,&g   +x2&      +   . . . + XkPkg   = Eg.


Here the y’s are the coefficients of the endogenous variables, the p’s are the
coefficients of the exogenous variables, and E,, .s2,. . . ,sg are g stochastic dis-
turbance terms (random variables). This system of equations can be considered
the linear and stochastic version of the system (2. l), where the parameters include
not only the coefficients but also those parameters characterizing the stochastic

  ‘For discussions of non-linear models see Chapters 6 and 12 of this Handbook       by Amemiya and
Quandt,  respectively.  See also Goldfeld and Quandt (1968, 1972), Chow (1973), Jorgenson        and
Laffont (1974), Goldfeld and Quandt ( 1976), Relsley (1979, 1980), Gallant and Jorgenson (1979), Fair
and Parke (1980), and Gallant and Holly (1980).
Ch. 3: Economic and Econometric Models                                              191

disturbance terms. Intercept terms in the equations can be taken into account by
specifying one of the exogenous variables, conventionally either the first X, or the
last xk, to be identically unity, in which case its coefficients become the inter-
cepts.
   Typically, each equation of the structural form (4.10) has an independent
meaning and identity, reflecting a behavioral relation (such as a demand function
or a consumption function), a technological relation (such as a production
function), or some other specific relation suggested by theory for the system
under study. Each equation, because it represents one aspect of the structure of
the system, is called a structural equation, and the set of all structural equations is
the structural form. Some equations may be deterministic, e.g. definitions, identi-
ties, and equilibrium conditions, and for these equations the stochastic dis-
turbance terms are identically zero. In general, however, these equations can be
eliminated, reducing both the number of equations and the number of endoge-
nous variables.
   The structural form can also be written in summation notation, as

            g
       1        YhYhl   +     ?   xjfij/   =   EIT   1=1,2 )...) g,             (4.11)
      h=l                   j=l


where h is an index of the endogenous variable, I is an index of the equation, and j
is an index of the exogenous variable. In vector -matrix notation the structural
form is written:

      yr+xB=~,                                                                  (4.12)

which is the linear version of system (4.1), where the coefficient matrices are

      ’ = (yh,)                                                                 (4.13)

and

      B= (Pj,).                                                                 (4.14)

F is a g x g matrix of coefficients of endogenous variables, assumed non-singular,
and B is a k x g matrix of coefficients of exogenous variables. Note that the Ith
columns of r and B contain all coefficients in the Ith equation of the structural
form for I= 1, 2, . . . , g. The structural form in vector-matrix notation in (4.12) is
the most convenient of the three ways of expressing the structural form, and it
will be used in the remainder of this chapter.
   There is a trivial indeterminacy in the structural equations in that multiplying
all terms in any one of these equations by a non-zero constant does not change
192                                                                   M. D. Intriligator

the equation. This indeterminacy is eliminated by choosing a normalization rule,
which is a rule for selecting a particular numerical value for one of the non-zero
coefficients in each question. A convenient normalization rule is that which sets
all elements along the principal diagonal of the r matrix of coefficients of
endogenous variables at - 1:

      -f,,h=   -l,    h=1,2 )...) g.                                            (4.15)

This normalization rule, obtained by dividing all coefficients of equation h by
- yhh, yields the usual convention of being able to write each equation which
specifies one endogenous variable as a function of other endogenous variables,
exogenous variables, and a stochastic disturbance term, with a unique such
endogenous variable for each equation. Other normalization rules can be used,
however, typically involving setting the (non-zero) coefficient of one variable in
each equation as 1 or - 1 (by dividing by this coefficient or its negative).
  Letting i be an index of the observation number, the structural form at the ith
observation is

      yJ+      xiB= q,     i=1,2 ,***,n.                                        (4.16)

Here y,, xi, and &iare, respectively, the vector of endogenous variables, the vector
of exogenous variables, and the vector of stochastic disturbance terms at the i th
observation, where i ranges over the sample from 1 to n, n being the sample size
(the number of observations). Certain stochastic assumptions are typically made
concerning the n stochastic disturbance vectors Ed.First, they are assumed to have
a zero mean:

      E(Ei) = 0,      i=1,2 >***>
                                n.                                              (4.17)

Second, the covariance matrix of si is assumed to be the same at each observation:

      COV(Ei)= E(&iEi) =Z,        i=1,2 >-*->
                                            n,                                  (4.18)

where 2, the positive definite symmetric matrix of variances and covariances, is
the same for each i. Third, the &iare assumed uncorrelated over the sample

      E( E;Ej) = 0,      i=1,2 ,***>n; j=1,2   ,***,n;   i* j,                  (4.19)

so that each stochastic disturbance term is uncorrelated with any stochastic
disturbance term (including itself) at any other point in the sample. These
assumptions are satisfied if, for example, the stochastic disturbance vectors &iare
independently and identically distributed over the sample, with a zero mean
vector and a constant covariance matrix 2. Sometimes the further assumption of
Ch. 3: Economic and Econometric Models                                            193

normality is also made, specifying that the ai are distributed independently and
normally with zero mean vector and g x g positive definite symmetric covariance
matrix 2:

       E; -   N(0, 2))        i=1,2 >***,n.                                   (4.20)

   Under these general assumptions (without necessarily assuming normality),
while the stochastic disturbance terms are uncorrelated over the sample, they can,
by (4.18), be correlated between equations. This latter phenomenon of correlation
between stochastic disturbance terms in different equations (due to the fact that
there is usually more than one endogenous variable in each equation) is an
essential feature of the simultaneous-equation system econometric model and the
principal reason why it must be estimated using simultaneous-equation rather
than single-equation techniques, as discussed in Chapter 7 of this Handbook by
Jerry Hausman.


4.2.    Reduced form

The structural form (4.10) is a special case of the general system (2.1) (other than
the addition of stochastic disturbance terms). The general system could be solved
for the endogenous variables if condition (2.3) is met. In the case of the structural
form (2.3) is the condition that the matrix r of coefficients of endogenous
variables be non-singular, which is usually assumed. Then the structural form can
be solved for the endogenous variables as explicit (linear, stochastic) functions of
all exogenous variables and stochastic disturbance terms- the reduced form.
Postmultiplying (4.12) by F ’and solving for y yields

       y=     -xflr-‘+&r-l.                                                   (4.21)

Introducing the k x g matrix of reduced-form coefficients        II and the 1 X g
reduced-form stochastic disturbance vector u, where

       nE      -Br-1,         U=&r-‘,                                         (4.22)

the reduced form is written

       y=xII+u.                                                               (4.23)

This reduced form uniquely determines the probability distributions of the
endogenous variables, given the exogenous variables, the coefficients, and the
probability distributions of the stochastic disturbance terms.
194                                                                             M. D. Intriligator

  The matrix of reduced-form coefficients represents the changes in endogenous
variables as exogenous variables change:

      pay    ie    =!?!I
                      fl,
        ax 3 . . fh axj 3
                                         j=1,2     ,..., k;   h=1,2 ,..., g.              (4.24)


Thus, the elements of the matrix of reduced-form coefficients represent the
comparative statics results of the model, the jh element of II measuring the
change in the hth endogenous variable as the jth exogenous variable changes, all
other predetermined variables and all stochastic disturbance terms being held
constant. The estimation of these comparative statics results is an important
aspect of structural analysis using the econometric model.
   The stochastic assumptions made for the structural form have direct implica-
tions for the stochastic disturbance terms of the reduced form. If i is an index of
the observation number, the reduced form at the ith observation is

      yi=xin+z$,             i=1,2 ,***,n,                                                (4.25)

where II is the same as in (4.22) and the reduced-form                 stochastic disturbance
vector is

      Ui   =   &J-C                                                                       (4.26)

This identity is used to obtain conditions on ui from those assumed for ei. From
(4.17):

      E( Ui) = 0,     i=1,2 >-a.,n.                                                       (4.27)

From (4.18):



                                                                       i=1,2 ,..., n,     (4.28)

where 1(2is the covariance matrix of ui, which, as is the case of the covariance
matrix 2 of Ed,is constant over the sample. The last equality in (4.28) implies that

      z = IWr,                                                                            (4.29)

showing the relationship between the covariance matrix of the structural form 2
and that of the reduced form 0. Furthermore, from (4.19),

      E( UiUj) = 0,         i=1,2 ,.*., n; j=1,2    3---Yn;    i* j,                      (4.30)
Ch. 3: Economic and Econometric Models                                            195

so the ui, just as the ei, are uncorrelated over the sample. If it is further assumed
that the &iare independently and normally distributed, as in (4.20), then the ui are
also independently and normally distributed, with zero mean vector and g X g
positive definite symmetric covariance matrix 52:

        ui - N(“, a),        i=1,2 ,a**,n,                                    (4.31)

where s1 is given in (4.28) as (r- ‘)‘_Zr- ‘.
   Assumptions (4.27), (4.28), and (4.30) summarize the stochastic specification of
the reduced-form equations. Under these assumptions the conditions of both the
Gauss-Markov Theorem and the Least Squares Consistency Theorem are satis-
fied for the reduced-form equations, so the least squares estimators

        II= (XT-'X'Y,                                                         (4.32)

where X is the n x k matrix of data on the k exogenous variables at the n
observations and Y is the n X g matrix of data on the g endogenous variables at
the n observations, are the unique best linear unbiased and consistent estimators
of the reduced form. The covariance matrix can then be estimated as

        fj=   -&(Y-       Xfi)‘(Y-    xfi) = -&,[I-    x(x'x)-axqY,           (4.33)

where I - X( X’X)) ‘X’ is the fundamental idempotent matrix of least squares, as
introduced in Chapter 1 of this Handbook by Hem5 Theil. This estimator of the
covariance matrix is an unbiased and consistent estimator of Q.


4.3.     Final form

Econometric models are either static or dynamic. A static model involves no
explicit dependence on time, so time is not essential in the model. (Simply adding
time subscripts to variables does not convert a static model into a dynamic one.)
A dynamic model is one in which time plays an essential role, typically by the
inclusion of lagged variables or differences of variables over time. Thus, if any
equation of the model is a difference equation, then the model is dynamic. (Time
also plays an essential role if variables and their rates of change over time are
included in the model, such as in a differential equation.)
   If the econometric model is dynamic in including lagged endogenous variables,
then it is possible to derive another form of the model, the final form.” The final


     “See Theil and Boot (1962)
196                                                                                                      M. D. Intriligator

form expresses the current endogenous variables as functions of base values and
all relevant current and lagged exogenous and stochastic disturbance terms. If the
structural form involves only one lag, then it can be written”


                                                                                                                    (4.34)

or
      y,r+          y,_,B, + ~$2 = et,                                                                              (4.35)

where y,_ , is a vector of lagged endogenous variables. The lagged endogenous and
exogenous variables are grouped together as the predetermined variables of the
system. The B matrix has then been partitioned to conform to the partitioning of
the predetermined variables into lagged endogenous and current exogenous
variables. The reduced form is then

      Yt = Y,- In,+                  XJIZ + U,)                                                                     (4.36)

where

      II, = - BJ-‘;                                     II2 = -            BJ-',                                    (4.37)
        U, = &,I+‘.                                                                                                 (4.38)

The final form is obtained by solving this reduced form, which is a difference
equation in y,, iteratively for y,,. In the first iteration

      Y, = b,-,4                     +     x,-        $2        +   ut-    1m   .+   a2        +   Uf


             =   y,_,n:          +       [XJ,               +   xt-,qql+             [u,   +   q,fl,l.              (4.39)


   ” The index has been changed from i in (4.16) to t in (4.34) to emphasize the facts that the variables
depend on time and that the model includes lagged variables. It should also be noted that any finite
number of lags in both endogenous and exogenous variables can be treated using the approach of this
section. With lags up to those of order p, eq. (4.35) generalizes to
                    P                            P

      y,T+        c   yI-,B,i+                    z     x,-~B*~=E,.
                 j- I                           k=O


An infinite number of lags, of the form (for a single endogenous variable)

      y,=a+               c   &x-k+                   u,,
                        k-0


is a distributed lag model, discussed in Chapters 17-20 of this Handbook by Granger and Watson;
Hendry, Pagan and Sargan; Geweke; and Bergstrom, respectively. See also Griliches (1967) Sims
(1974), and Dhrymes (1981).
Ch. 3: Economic and Econometric Models                                                                197

Continuing the iteration back to the base period t = 0 yields

                        t-1                  t-1
     y, = yen;+         c xt_jn*IIT( + c ut_jn{.                                                 (4.40)
                        j=O                 j=O


This is the final form, in which each of the endogenous variables is expressed as a
function of base period values, current and lagged exogenous variables, and
stochastic disturbance terms. The coefficient of the base period endogenous
variable is IIf, and the successive coefficients of the current and lagged exogenous
variables

                                                                                                 (4.41)

indicate the influence of the current value of the endogenous variables of
successively lagged values of the exogenous variables, starting from the current
(non-lagged) values and given as


      -g          = II,n(,      j=1,2    ,...,t    - 1.                                          (4.42)
           t--I

The estimation of these successive coefficients, which can be interpreted as
various multipliers, is an important aspect of structural analysis using the
econometric model.


5.   Identification

The problem of identification is an important issue in econometric model
building. ‘* Most approaches to the estimation of the structural form start from
the estimation of the reduced-form equations, specifically the estimated matrix of
reduced-form coefficients fi in (4.32) and the estimated covariance matrix b in
(4.33) and use these estimators to obtain estimates of the structural form
parameters r, B, and Z in (4.12) and (4.18).
   The problem of identification is that of using estimates of reduced-form parame-
ters II and D to obtain estimates of structural-form parameters r, B, and 2.
Certain information is available from the relations between the structural form
and reduced form. In particular, from (4.22) and (4.29) if fi and fi are estimates
of II and 0, respectively, while if i=‘,b, and 2 are estimates of r, B, and Z,

   “For an extensive discussion of identification    see Chapter    4 of this Handbook   by Hsiao. Basic
references on identification  include Fisher (1966), Rothenberg    ( 1971, 1973), and Bowden ( 1973). See
also Intriligator (1978, ch. 10).
198                                                                   M. D. Intriligator


respectively, the estimates must satisfy

      h=fif                                                                       (5.1)

and

      2 = Pbf.                                                                   (5.2)

These restrictions provide a posteriori information, since they follow the estima-
tion of the reduced form. This information, however, is generally not adequate to
determine the structural parameters. For example, if the structural form were
postmultiplied by any non-singular matrix R:

      yirR + xiBR = ERR,                                                         (5.3)

and this “bogus” system were normalized in the same way as the old one, where
the bogus parameters are

      r=rR;             B=Bl-;          z = R%R,                                 (5.4)

then the reduced form is
      n=      _Bi+-‘=      _Bm-‘r-‘=              -Br-‘=fl,
                                                                                 (5.5)
      a= (P-l)‘zT-t=             (r-i)‘Er-i=Jz.
                                                                                 (5.6)

Thus, the bogus system has the same reduced-form parameters as the true system.
The true and bogus systems are observationally equivalent in yielding the same
reduced form (more precisely, in implying the same likelihood function for the
observed values of the endogenous variables, given the values of the prede-
termined variables). Thus, the a posteriori information in --(5.1) and (5.2) cannot
distinguish between r, B, and .Z’,the true parameters, and r, B, and z, the bogus
parameters. To distinguish the true parameters it is necessary to supplement the
a posteriori information by a priori information, restrictions on the structural
parameters imposed prior to the estimation of the reduced form. These restric-
tions on the structural form, obtained from relevant theory or the results of other
studies, have the effect of reducing the class of permissible matrices R in (5.3). If
no such restrictions are imposed, or too few are imposed, the system is not
identified, in which case additional a priori information must be imposed in order
to identify the structural parameters r, B, and 2. If enough a priori information is
available, then the system is identified in that all structural parameters can be
determined from the reduced-form            parameters. A structural equation is
underidentified if there is no way to determine its parameters from the reduced-form
Ch. 3: Economic and Econometric Models                                                                   199


parameters. It is just identified (or exactly identified) if there is a unique way of
estimating its parameters from the reduced-form parameters. It is oueridentified if
there is more than one way to calculate its parameters from the reduced-form
parameters, leading to restrictions on the reduced-form parameters.
   The a priori restrictions on the structural-form parameters r, B, and ,X usually
involve one of three approaches. The first approach is that of zero or linear
restrictions, equating some elements of the coefficient matrices a priori to zero or,
more generally, imposing a set of linear restrictions. The second approach is that
of restrictions on the covariance matrix Z, e.g. via zero restrictions or relative
sizes of variances or covariances. A third approach is some mixture of the first
two, where certain restrictions, in the form of equalities or inequalities, are
imposed on r, B, and 2:. An example is that of a recursive system, where r is a
triangular matrix and Z is a diagonal matrix. Such a system is always just
identified, each equation being just identified.13


6.      Some specific models

This section will present some specific models that have been used in economet-
rics. It emphasizes systems of equations, as opposed to single equation models.14


6. I.     Demand models

One of the earliest and most important applications of econometric models is to
the estimation of demand relationships. I5 In fact, pioneer empirical analyses of
demand, starting in the nineteenth century with the work of Engel and continuing
in the early twentieth century with the work of Schultz and Moore, led to later
studies of general issues in econometrics.
   A complete system of demand equations for n goods consists of the n demand
equations:

        xj=xj(PI,P2,...,Pn,I,uj),                 j=1,2    ,*.*, n,

where xj is the demand for good j by a single household or a group of households,
pj is the price of good j, I is income, which is the same as the expenditure on the n

    “For a discussion of recursive systems see Wold (1954, 1960) and Wold (1968).
    I4 For a more extensive discussion of various models and a discussion of single equation models see
Intriligator  (1978, esp. ch. 7, 8, 9, 12, and 13).
    “For an extensive discussion of demand analysis see Chapter 30 of this Handbook             by Deaton.
Basic references for econometric       studies of consumer demand include Brown and Deaton (1972),
Powell (I 974) Phlips (1974), Theil(1975/1976),      and Barten (1977). See also Intriligator (1978, ch. 7).
200                                                                                     M. D. Intriligator

goods, and uj is the stochastic term in thejth demand equation. The n equations
determine the quantity demanded of each good, which are the n endogenous
variables, as functions of all prices and income, the n + 1 exogenous variables,
and stochastic terms, the latter accounting for omitted variables, misspecification
of the equation, and errors in measuring variables. These n equations are the
principal results of the theory of the consumer, and their estimation is important
in quantifying demand for purposes of structural analysis, forecasting, and policy
evaluation.
   In order to estimate the system (6.1) it is necessary to specify a particular
functional form for the general relationship indicated, and a variety of functional
forms has been utilized. Only three functional forms will be considered here,
however.
   A functional form that has been widely used in demand (and other) studies is
the constant elasticity, log-linear specification. I6 The n demand functions in (6.1)
are specified as

                                                                                                    (6.2)

so, taking logarithms leads to the log-linear system:

      lnxj=aj+Ej,lnp,+ej,lnp,+                       ~**Ej,lllpn+~jlnI+Uj,

                     aj=lnAj,        j=1,2   ,..., n.                                               (6.3)

This system is one of constant elasticity, where ejj are the (own) price elasticities
of demand:

                dlnxj        pj axj
      e..=-=--                               j=1,2      ,..., n,                                    (64
       fJ   81npj            xj apj’


the &jkfor j * k are the cross price elasticities of demand:

                    aln xi      Pk   axj
      E,    c-z--                             j=1,2       ,***,n;    k=1,2 ,..., n,                 (6.5)
       Jk           alnp,       xj   aPk’




   16Among the studies using the constant elasticity log-linear specification     are Wold and Jureen
(1953), Stone (1954), and Houthakker     (1957, 1965). While this is a frequently used specification   of a
system of demand equations, such a system is not consistent with the budget constraint             and the
theoretical restrictions on systems of demand equations discussed in Phlips (1974), Intriligator (1978),
and Chapter 1 of this Handbook      by Theil. At best it can be treated as a local approximation     to the
true system of demand equations.
Ch. 3: Economic and Econometric Moa’els                                                                201

and the qj are the income elasticities of demand:

            dln xj         I axj
                                        j= I,2 ,**., n.                                             (6.6)
     qj=     ain I =X,       do     9

The defining characteristic of this specification is that all n(n + 1) of these
elasticities (n + 1 for each of the n goods) are constant.
   Another functional form used in demand analysis is the semilogarithmic specifi-
cation: I7

     xj=aj+bj,lnp,+bjzlnp,$:                  *a* +bj,lnpn+cjhI+Uj,                 j=l,&...,n,

                                                                                                    67)

where the coefficients are

               i?Xj           8X,
     bjk = -
             a1npk
                       =
                                                                                                    (6.8)

so bjk/xj is the (own or cross) price elasticity of demand.
  A third functional form which is widely used in studies of demand is the linear
expenditure system.18 This system is


     xj = xj”+    +p&),
                  J
                                           withxJ>O,          j=1,2    ,..., n,                     (6.9)


or, in terms of expenditure,

     P,x~=~,x,O+P,(I-~~~X~),                    withxy>6,         j=1,2,...,n.                    (6.10)

It can be interpreted as stating that expenditure on good j is composed of two
components, the first being expenditure on a certain base amount XT, which is the
amount to which the consumer is committed, and the second being a, fraction pi
of the so-called “supernumerary income”, given as the income above the “sub-
sistence income” Epkxi needed to purchase base amounts of all goods. These two


    “See Prais and Houthakker     (1955).As in the case of the constant elasticity log-linear specification
this semilogarithmic  specification  is not consistent with the theoretical     restrictions on systems of
demand equations.
   18Among the many studies using the linear expenditure system are Stone, Brown and Rowe (1965),
Pollak and Wales (1969), Stone (1972), Phlips (1974), Deaton (1975), and Barten (1977). The linear
expenditure system, unlike the preceding ones, is consistent with the theoretical restrictions on systems
of demand equations.
202                                                                                 M. D. Intriligator

components correspond, respectively, to committed and discretionary expenditure
on good j. The parameters that define the system are the n base quantities,
xp, x; )...) x,0, and the n marginal budget shares, p,, &, . . . ,&.


6.2.   Production models

A second important area of modeling is that of production functions.” While
many studies treat only the production function itself, a complete system involves
the production function and the first-order conditions for profit maximization
(under competition) using this production function. Thus, the complete system
consists of the n + 1 equations:


                                                                                               (6.11)
                               j=1,2    ,-a-9n,


where y is output, x,, x2,. . . , x, are the n inputs, u is a stochastic disturbance term
affecting technical efficiency, f( *) is the production function, wj is the wage of
input j relative to the price of output, ilf/ax, is the marginal product of input j, vj
are stochastic disturbance terms affecting attainment of the first-order conditions,
and g(a) is a function expressing how well the firm approximates the first-order
conditions, under which g should be unity. These n + 1 equations determine the
output and the n inputs (the endogenous variables), as functions of the wages
which, assuming the firm takes prices as given, are the exogenous variables.
Estimation of this complete system is generally superior to estimating only the
first equation from both an economic and an econometric standpoint. From an
economic standpoint, estimating only the first equation reflects only the technol-
ogy available to the firm, while estimating the complete system reflects the
behavior of the firm (profit-maximizing) as well as the technology available to it.
From an econometric standpoint estimating the first equation involves simulta-
neous equations bias, while estimating the complete system can result in con-
sistent estimators. Even estimating the complete system cannot, however, be used
to test the hypothesis of profit maximization, which is assumed in (6.11).
Furthermore, the system (6.11) assumes that the correct prices and decision rules
are known. If they are not known, then the system involves unknown parameters
or functional forms, while if they are incorrect, then specification error is
introduced in the system.

   19For an extensive discussion of production (and cost) analysis see Chapter 31 of this Handbook by
Jorgenson. Basic references for econometric studies of production functions include Walters (1963,
1968), Frisch (1965). Brown (1967), and Ferguson (1969). See also Intriligator (1978, ch. 8).
Ch. 3: Economic and Econometric Models                                                    203

   As in the case of demand analysis, a variety of functional forms has been
utilized in estimating (6.1 l), but only three will be considered here.
   One of the most widely used functional forms for production functions is the
same as that used in demand analysis, the constant elasticity log-linear specifica-
tion, also known as the Cobb- Douglas production function.20 This function,
already introduced in eqs. (4.4) and (4.5), can be written generally in the form of
(6.11) as

     y = AxP’xT*. . .xine’,
                                                                                      (6.12)
       1 aY
      --=        ~ajY = e”/ 3      j=1,2          ,...I n,
      wj axj      wjxj

where disturbances are treated as exponential. Taking logarithms gives the linear
system:

      lny=a+a,hrx,+cw,lnx,+                      -0. +a,lnx,+u,     a=lnA,
                                                                                      (6.13)
      lny=lnw,+lnxj-lnolj+u,,                                       j=1,2 ,..., n.

  A second widely used specification is the constant elasticity of substitution
(CES) production function. 21In the customary two-input case this function is

     y = A[6xyB +(I - a)~;~]             -I”,                                         (6.14)

where fi z - 1, the substitution parameter, is related to the elasticity of substitu-
tion u by

          1
                                                                                      (6.15)
     a=1+P’

This function reduces to the Cobb-Douglas case as p - 0 (so u + 1); it reduces to
a linear function as /9 --, - 1 (so u + cc); and it reduces to the input-output case
of fixed coefficients as B - cc (so u + 0).
   A third specification is the transcendental logarithmic (translog) production
function22


      lny=a+       5 ajhlxj++        t      5      ~jjlnXilIIXj,                      (6.16)
                  j=l               j=,    j=,




  *‘See Marschak and Andrews (1944), Douglas (1948), Nerlove (1965), and Zellner, Kmenta and
D&e (1966).
  *‘See Arrow, Chenely, Minhas and Solow (1961), Brown and de Cani (1963), and Minhas (1963).
  **See Christensen, Jorgenson and Lau (1973).
204                                                                                M. D. Intriligator


where yij = yji. This function, which is quadratic in the logarithms of the
variables, reduces to the Cobb-Douglas case if yij = 0; otherwise it exhibits
non-unitary elasticity of substitution. In general this function is quite flexible in
approximating arbitrary production technologies, providing a local approxima-
tion to any production frontier. It has also been applied to other frontiers, e.g. to
demand functions or to price frontiers.


6.3.    Macroeconometric models

Macroeconometric models, starting with the work of Tinbergen in the 193Os,
represent one of the most important applications of econometrics.23 Such models
generally utilize a Keynesian framework for the determination of national income
[usually measured as Gross National Product (GNP) or Gross Domestic Product
(GDP)] and its components, consumption, investment, government, and net
foreign investment, as well as other macroeconomic variables, such as the
distribution of income, prices, wages, interest rates, employment, unemployment,
production, and assets. These models are used for all three purposes of economet-
rics: structural analysis, forecasting, and policy evaluation.
   Most macroeconometric models are built around the definition of income, a
consumption function, and an investment function:

       Y=C+Z+G,
       C=C(Y,...,u),                                                                         (6.17)
       Z=Z(Y,...,u).


   23For further discussions of macroeconometric models see Chapters 33, 34, and 35 of this
Handbook, by Fair, Taylor, and Klein, respectively. For surveys of macroeconometric models see
Nerlove (1966) Ball (1973), Fromm and Klein (1973), Samuelson (1975), and Klein and Burmeister
(1976). For references to econometric models of the United States see Intriligator (1978, footnotes
24-28 and table 12.12 on pp. 454-456). Econometric models have also been developed for other
national economics. See the references in Shapiro and Halabuk (1976) and Intriligator (1978). Some
examples are Klein et al. (1961), Ball and Bums (1968), Hilton and Heathfield (1970), Ball (1973),
Hendrv (I 974), and Renton ( 1975) for models of the United Kingdom; Brown (1960) and Helliwell et
al. ( 1969; 197i) for models of Canada; Klein and Shinkai (1963);Ueno (1963),Ichimura et al. ( 1964),
and Kosobud and Ivlinami (1977) for models of Janan; Suits (1964) for a model of Greece; Evans
(1969b) for a model of France; Evans (1970) for a model of Israel; ‘Agarwala (1970) for a model of
India; and Sylos-Labini (1974) for a model of Italy. In several of these countries these models have
been further developed by official agencies, such as the Treasury model of the United Kingdom, the
Bank of Janan and Economic Planning Agency models of Japan, and the Bundesbank model for the
Federal Republic of Germany. Economet& models have al& been built for most centrally planned
economies. includine the U.S.S.R., the German Democratic Republic, Czechoslovakia, Hungarv, and
the People’s Republyc of China. Arr interesting feature of some-of the latter models is the n&t&e of
deterministic and stochastic mechanisms for resource allocation, allowing some discretion for both
planners’ behavior and market-type mechanisms.
Ch. 3: Economic and Econometric Models                                                        205


Here Y, national income, is composed of consumption, C, investment, I, and
government expenditure, G. Consumption is determined by the consumption
function C( *) as a function of income, other relevant variables (e.g. permanent
income, assets, measures of income distribution) and a stochastic disturbance
term, u. Investment is determined by the investment function I( .) as a function of
income, other relevant variables (e.g. lagged income, profits, interest rates), and a
stochastic disturbance term, 0. Virtually all macroeconometric models involve
these basic elements: a definition of national income or a group of such
definitions, a consumption function or a group of such functions, and an
investment function or a group of such functions. They have, in recent years,
however, involved a greater and greater degree of disaggregation of variables and
more and more variables as more aspects of the macroeconomy are taken into
account.
   The early postwar models involved less than ten stochastic equations, an
example being the Klein interwur model of the U.S. economy over the period
1921- 1941, involving three stochastic and three non-stochastic equations in six
endogenous and four exogenous variables.”
   An extremely influential model of the mid-1950s was the Klein - Goldberger
model of the U.S. economy over the periods 1929-1941 and 1946-1952, which
involved 15 stochastic and 5 non-stochastic equations in 20 endogenous and 14
exogenous variables.25 Among the descendent econometric models of the U.S.
economy based in part on or influenced by the Klein-Goldberger model are two
models developed in the late 1960s and early 1970s the Brookings model and the
Wharton model.
   The Brookings model was, at the time of its development in the 1960s the
largest and most ambitious model of the U.S. economy, involving in its “stan-
dard” version 176 endogenous and 89 exogenous variables.26 A major goal in
building this model was that of advancing the state of the art in model building
both via disaggregation and via the inclusion of sectors not treated in previous
models. The resulting model, in representing the detailed structure of the econ-
omy, has been used both for structural analysis of cycles and for growth and
policy evaluation.
   The Wharton model was initiated in 1967 with a quarterly model of 76
endogenous and 42 exogenous variables. Since then later variants have involved
the 1972 Wharton Annual and Industry model, with 346 endogenous and 90



  24See Klein (1950) and Theil and Boot (I 962). This model is also discussed in Christ (1966)and
Theil (1971).
  %ee Klein and Goldberger ( 1955), Goldberger (1959), and Adelman and Adelman (1959).
  26For the Brookings model see Duesenberxy,    Fromm, Klein and Kuh (1965, 1969), Fromm and
Taubman (1968),Fromm (197 I), and Fromm and Klein (1975).
206                                                                               M. D. Intriligator

exogenous variables, and the 1972 Wharton, Mark 111 model, with 201 endoge-
nous and 104 exogenous variables. 27 The Wharton models are designed explicitly
for developing forecasts of the future of the economy, particularly national
income components and unemployment. They are regularly used to forecast
ahead eight or more quarters under alternative assumptions regarding the exoge-
nous variables, particularly government monetary and fiscal policy.
   More recent macroeconometric models of the U.S., which stem largely from the
Brookings and the Wharton models, include the 1968 FMP/MPS model of the
Federal Reserve Board/MIT-Penn-SSRC,         with 171 endogenous and 119 exoge-
nous variables which emphasizes the monetary and financial sectors; the 1971
Chase Econometrics model, with 150 endogenous and 100 exogenous variables;
the 1971 Fair short-run forecasting model with 19 endogenous and 20 exogenous
variables; and the 1974 Data Resources Incorporated (DRI) model, with 718
endogenous and 170 exogenous variables in its initial version.28
   Macroeconometric models have clearly tended to increase in size and scope,
involving more variables, more sectors, and the inclusion of related models, such
as input-output, financial, and microsimulation models. They have also tended to
increase in complexity, including non-linearities. Another trend is the attempt to
link various national macroeconometric models into a model of world trade
flo~s.~’ These trends can be understood in terms of a rational response to the
falling cost of scale and complexity, given the falling cost of computation and the
availability of library programs for econometric routines and computerized data
banks. These trends can be expected to continue in the future.


6.4,   Other econometric models

An important trend in econometric models, particularly in macroeconometric
models, has been that of the growing size, scale, and complexity of these models,
as noted in the previous section. Another trend in econometric models has been
that of applying such models in many other areas of economics, including fields
in which such models have traditionally not been applied. The growing knowledge
of econometric approaches and availability of library programs for economic

   “For the Wharton model see Evans and Klein (1967, 1968), Evans (1969a), Evans, Klein and Saito
(1972), and Howrey (1972). For the Wharton AMU~ and Industry model see Preston (1972, 1975).
For the Wharton Mark III Quarterly      model see McCarthy    (1972), Duggal, Klein and McCarthy
( 1974), and Klein and Young ( 1980).
   ‘“For the FMP/MPS     model see Rasche and Shapiro (1968), de Leeuw and Gramlich (1968, 1969),
Ando and Modigliani (1969), Ando, Modigliani and Rasche (1972), and Muench et al. (1974). For tne
Chase Econometrics    model see Evans (1974). For the Fair model see Fair (1971. 1974. 1976. 1979).
For the DRI model see Eckstein, Green and Sinai (1974), Eckstein (1976), and Data Resources, Inc.
(1976).
   29Project LINK represents such an approach. See Ball (1973).
Ch. 3: Economic and Econometric Models                                                                 201


routines and data, including computerized data banks, have aided or accelerated
this trend. In fact, econometric models have been developed in virtually all areas
of economics, including commodity markets, crime, education, economic history,
education, energy, health economics, housing, industrial organization, inflation,
international trade and finance, labor economics, monetary economics, transpor-
tation, and urban and regional economics. In addition, there have been applica-
tions of econometric models to other social sciences, including demography,
political science, and sociology.3o



7.   Uses of econometric models

The three principal uses of econometric models are structural analysis, forecast-
ing, and policy evaluation, corresponding to the descriptive, predictive, and
prescriptive uses of econometrics. These uses are closely related, the structure
determined by structural analysis being used in forecasting, and policy evaluation
being based largely on conditional forecasts. These uses will be discussed for both
the general non-linear econometric model in (4.1) and (4.2) and the linear
econometric model in (4.12) and (4.23).
   Writing these models in vector notation and showing the lagged endogenous
variables explicitly, the structural form of the general non-linear econometric
model (4.1) can be written

      KY,, Yt-,,x,J) =&t’                                                                           (7.1)

where yI and y,_ , are vectors of current and lagged endogenous variables, X, is a
vector of exogenous variables at time t, 6 is a vector of parameters, and E, is a
vector of stochastic disturbance terms at time t. The corresponding reduced form
of the general non-linear econometric model in (4.2) is




where u, is a vector of stochastic disturbance terms for the reduced form at time t.
The structural form of the general linear econometric model, also allowing for
lagged endogenous variables, is

      y,r+ y,_,B, +x$2           = Et,                                                              (7.3)


   30For discussions of and references to the applications      of econometric   models in these areas see
Intriligator (1978, ch. 9, 13). See especially the bibliography   for Chapter 9, which includes references
to a wide range of applications    of econometrics.
208                                                                    M. D. Inwiligator

as in (4.35), while the corresponding reduced form of the general linear economet-
ric model is

       Y, = Yl- In,+      -wz+24   1’                                              (7.4)

as in (4.36).


7.1.    Structural analysis

Structural analysis refers to the use of an estimated econometric model for the
quantitative measurement of the underlying interrelationships of the system under
consideration. One aspect of structural analysis is the estimation of the parame-
ters of the structural form, particularly the elements of 6 in (7.1) and the elements
of the r, B,, and B2 matrices of structural coefficients in (7.3), in order to
measure the extent of influence of each of the included variables in any equation
of the model.
   Another aspect of structural analysis is the estimation of the parameters of the
reduced form, particularly the elements of the II, and IT, matrices of reduced-form
coefficients in (7.4). As indicated in (4.24), these coefficients have the interpreta-
tion of comparative statics results of the model, the effects of each of the
exogenous variables on each of the endogenous variables of the model. These
coefficients are also called impact multipliers since they indicate the impact of a
change in a current value of an exogenous variable on the current value of an
endogenous variable.
   A third aspect of structural analysis, for a model with lagged endogenous
variables, is the estimation of the final form (4.40), particularly the successive
coefficients of the current and lagged exogenous variables in (4.41). These
coefficients can also be used to estimate the interim and long-term multipliers of
the econometric model. The r-period cumulative multiplier measures the effect on
each of the endogenous variables of a change in each of the exogenous variables
over r periods, given as

                    7-l
        ay            c q~{=n,(I+II,+n:+         *** +n;-‘),
        ax                                                                        (7.5)
                =



            7       j=O




where I is the identity matrix.
  Setting r = 1 yields the impact multipliers I$, the coefficients of the exogenous
variables in the reduced form (4.36). Finite values of r larger than 1 yield the
cumulative interim multipliers, indicating the change in each endogenous variable
as each exogenous variable experiences a sustained increase over r periods.
Ch. 3: Economic and Econometric Models                                                                    209

Taking the limit as r + cc yields the long-term multipliers:

        -JY        = lim IT,(I+II,+IT~+              ... +II;)=II,(I-IT,)-‘,
        ax    co     7’00                                                                              (7.6)
assuming the power series converges. 3’ These long-term multipliers measure the
effect on the endogenous variables of a permanent sustained increase in the
exogenous variables.


7.2.    Forecasting

Forecasting   refers to the use of an estimated econometric model to predict
quantitative values for certain variables, typically the endogenous variables of the
model, outside the sample of data actually observed- typically a prediction for
other times or places.32
   The econometric approach to forecasting is typically based on the reduced form
system, which, for the general non-linear case, can be written as in (7.2). A
short -run ex -ante forecast of values taken by the endogenous variables at time
T + 1, given their values at time T, is then


                                                                                                       (7.7)

The left-hand side, j$+ ,, represents the values forecasted for the endogenous
variables at time T + 1. Three sets of variables enter the $I( *) function in (7.7).
The first set of variables is y,, the (current) values of the endogenous variables at


   3’The power series in (7.2), called a Neumann expansion, converges if lim II; = 0, or, equivalently, if
all characteristic roots of II, have modulus less than unity. The long-term multiplier in (7.2) could
have been obtained directly from (4.36) by noting that, in the long run, y, = y,_ , , so




Solving for y,:




implying (7.6).
   32For a discussion of forecasting using an econometric model see Chapter 33 of this Handbook            by
Fair. Basic references on econometric      forecasting    are Theil (1961, 1966), Zarnowitz     (1967), Klein
(1971), and Christ (1975). See also Intriligator    (1980, ch. 15). For discussions of forecasting based on
autoregressive-moving   average (ARMA) models see Box and Jenkins (1970), Cooper (1972) Zellner
and Palm (1974) Aitchison and Dunsmore            (1975), Nicholls et al. (1975), Pindyck and Rubinfeld
(I 976), Granger and Newbold (1977), Palm (1977) and Nerlove, Grether and Carvalho (1979).
210                                                                                         M. D. Intriligator

time T, summarizing the systematic dependence on lagged values of the endoge-
nous variables due to constant growth processes, distributed lag phenomena, etc.
The second set of variables in +( .) in (7.7) is $+ ,, the predicted future values of
the exogenous variables. Since the x ‘s are exogenous and hence determined on the
basis of factors not explicitly treated in the econometric model, it is reasonable to
require that these variables be forecast on the basis of factors other than those
treated in the model itself, such as on the basis of extrapolation of past trends,
expert opinion, or forecasts from another econometric model (as one example, an
econometric model for an industry might use forecasts from a macroeconometric
model). The third set of variables in C#B( .) in (7.7) is 8, representing the estimated
parameters of the econometric model. The final term in (7.7) is Cr.+,, the “add
factors”, which can be interpreted as estimates of future values of the disturbance
terms (or, alternatively, as adjustments of intercepts in each of the reduced-form
equations). These add factors account for omitted variables, incorrect specifi-
cation, and errors in measuring variables, which were the reasons for including
the stochastic disturbance term in the first place. Their inclusion in short-term
ex -ante forecasts is appropriate; excluding such terms would be tantamount to
ignoring relevant considerations simply because they were omitted from the
model. For example, in macroeconometric model forecasting it would be inap-
propriate to ignore major strikes, external shocks, or new technologies simply
because they were not explicitly included in the model. Of course, the add factors
are subjective, varying from individual to individual and thus not replicable.
Their inclusion thus means that subjective expert opinion is combined with
objective factors in generating forecasts. Experience indicates that such judgmen-
tal add factors can improve significantly on the accuracy of forecasts made with
an econometric mode1.33
   In the case of a linear econometric model the short-term ex-ante forecast,
based on the reduced-form equation (7.4) takes the form
                     1




      PT+I = Y,fl, + &+ A              + &+ 1.                                                          (7-g)

   33The choice of values for the add factors ir,, , can alsobe guided by past residuals in estimating
the model and past forecast errors, which provide clues to omitted variables, errors in measuring
coefficients, and systematic biases in forecasting exogenous variables. For example, one approach is to
define add factors so that the computed         values of the endogenous        variables at the most recent
observation, as adjusted by the add factors, are the same as the observed values. See Klein (1971) and
Haitovsky,    Treyz and Su (1974). It should be noted that professional              opinion is by no means
unanimous on the subject of add factors. While most of the commercially           available macroeconometric
models use add factors, Ray Fair has argued against their use. Fair argues, as in Chapter 33 of the
Handbook,     that the use of add factors means that the information      contained in ex-ante forecasts has
no scientific value. From this point of view he argues that the inclusion of add factors is not
appropriate.    Others use add factors freely in actual forecasts. A reasonable           intermediate position
would be to assert that add factors are appropriate     in attempting to obtain the most accurate ex-ante
forecast for a given period, but not appropriate      for using predictions    from a model for testing and
comparison purposes.
Ch. 3: Economic und Econometric Models                                                                 211

Here   yr, &-+ ,, and CT+, are vectors as before, and fir, and I?, are matrices of
estimated coefficients, summarizing the partial dependence of the forecasted
values for the endogenous variables at time T + 1 on their values at time T and on
the values of the forecasted values of the exogenous variables at time T + 1,
respectively. The terms on the right-hand side of (7.8) show explicitly the (linear)
dependence on current values of the endogenous variables, on future values of the
exogenous variables, and on add factors, representing a combination of objective
factors, in yrfi, and RT+ ,fi2, and subjective factors, in z&-+,.
   The econometric forecasts in (7.7) and (7.8) are called “ex-ante forecasts”
because they are true forecasts, made before the event occurs. By contrast, an
ex-post forecast, made after the event, would replace predicted values of the
exogenous variables by their actual values and would replace the add factors by
the zero expected values of the stochastic disturbance terms. Thus, the short-term
ex -post forecast is, for the non-linear model:


                                                                                                    (7.9)
and, for the linear model:

                                                                                                   (7.10)

This ex-post forecast is useful in focusing on the explicitly estimated parts of the
forecast, particularly the estimated coefficient matrices I?, and fiz, eliminating
the influence of &+ 1 and &.+ t, which are generally not explicitly estimated. It is
possible to replicate ex-post forecasts, but not ex-ante forecasts. Furthermore,
this forecast is optimal given a quadratic loss function.
   There are several advantages to the econometric approach to forecasting in
(7.7)-(7.10).34 First, it provides a useful structure in which to consider explicitly
various factors, including past values of variables to be forecast, values of other
variables, and judgmental factors. Second, it leads to forecasts of variables that
are consistent with one another since they must satisfy the requirements of the
model, particularly its identities. Third, it leads to forecasts that are explicitly

   34Both (7.4) and (7.5) refer to short-term forecasts. Long-term forecasts over a forecasting horizon h
determine jr+ ,, on the basis of a succession of short-term forecasts or, equivalently, on the basis of the
final form in (4.40), where the forecast of the endogenous variables at time T + h is

                       h-l                   h-l

       jT+A=   yJi:+    c    XT+h_,iI*It{+     c   ii,+,_&.
                       ,=o                   J=o



Here yr is the current value, as in (7.8), the XTth-, are successive expected future values of exogenous
variables, and the icr, h ~, are successive expected future values of stochastic disturbance terms, where
the last term on the right can itself be interpreted as the add factor for the long-term forecast.
212                                                                                   M. D. Intriligator

conditional on current values of endogenous variables, expected future values of
exogenous variables, add factors, and estimated coefficient matrices, facilitating
analysis of the relative importance of each of these factors and tests of sensitivity.
Fourth, and perhaps most important, it has a good record for accuracy and
usefulness as compared to other approaches which tend to emphasize one aspect
of an econometric forecast but exclude other aspects.


7.3.    Policy evaluation

Policy evaluation refers to the use of an estimated econometric model to choose
among alternative policies. 35 Assume there is a set of policy variables included
among the exogenous variables of the model. The structural form (4.35) can then
be written, for the non-linear model:

       f(Y,,Y,-l,zr,r,,6)=&f,                                                                   (7.11)

and, for the linear model:

       y,r+   Y,-,B, + Q2       + qB3 = et,                                                     (7.12)

where the vector X, of exogenous variables has been divided into a vector of
(non-policy) exogenous variables zI and a vector of policy variables rt, called the
instruments. The corresponding reduced form is, for the non-linear model:

                                                                                                (7.13)

and, for the linear model:

                                                                                                (7.14)

where, in addition to (4.37) and (4.38),

       II, = - B,r-‘.                                                                           (7.15)

   The problem of short-term policy evaluation is that of choosing at time T a
particular set of policy variables for time T + 1, given as r;+ ,, where it is assumed
that yr is known. There are at least three alternative approaches to evaluating

   35For further discussions of policy evaluation using an econometric model, see Chapters 34 and 35
of this Handbook by Taylor and Klein, respectively. Basic references on econometric policy evaluation
are Tinbergen (1955, 1956), Theil (1961, 1964) Suits (1962), Hickman (1965), Fox, Sengupta and
Thorbecke (1966), Naylor, Wertz and Wonnacott       (1968), Naylor (1971), and Klein (I 97 I, 1977). See
also Intriligator (1978, ch. 16).
Ch. 3: Economic and Econometric Models                                                              213


policy: the instruments - targets approach, the social-welfare-function approach,
and the simulation approach.
  In the instruments- targets approach it is assumed that there is a target for the
endogenous variables y;+ , . The optimal instruments for the non-linear economet-
ric model then solve the equation

                                                                                              (7.16)

for r:+ ,, where i,, , is the vector of expected future values of the exogenous
variables, d is the vector of estimated parameters, and fir+, is a vector of add
factors. In the linear case it is usually assumed that the number of instruments
equals the number of targets, g, so the B, matrix is square, as is lT3.36 Assuming
IIT, is non-singular, and solving (7.14) for r;+ , yields

      r:,,   = yg+,fi,’    - yJI,fi;‘-       ir+,fi,lI,’     -   iI,+,II,‘,                   (7.17)

giving the optimal value for the instruments as linear functions of the targets, the
current values of the endogenous variables, the expected future values of the
exogenous variables, and the add factors. This equation indicates the basic
interdependence of policies and objectives, with optimal values of each instru-
ment in general depending on all target variables. This approach leads to specific
results, but it suffers from three difficulties: it does not allow for tradeoffs among
the targets, it assumes that policymakers can specify targets, and it assumes there
are enough independent instruments available.
   The social - werfare -function approach to policy evaluation allows tradeoffs
among the endogenous variables by assuming the existence of a social welfare
function to be maximized by choice of the instruments subject to the constraints
of the model. If W( yr+ ,, rT+ , ) is the social welfare function, dependent on both
endogenous variables and policy variables in the next period, the problem is

                                                                                              (7.18)


subject to the constraints of the econometric model. In the case of the non-linear
model, W is maximized subject to (7.13), so the problem becomes

      maxW(CP(Yr,i,+,,r,+,,$)+Li,+,,r,+,),                                                    (7.19)
      rr+ I
while in the case of the linear model, W is maximized subject to (7.14), so the

   36More generally, the targets could be a subset of the endogenous    variables, and the number    of
instruments can exceed (or equal) the number of targets, the difference between the number           of
instruments and the number of targets being the policy degrees of freedom.
214                                                                                     M. D. Intriligator


problem becomes
                            1
      max W( yrfi,       +Zr+,~*+TT+I~3+tir+,,r,+,).                                               (7.20)
      rT+I
Frequently the social welfare function is a quadratic loss function, to be mini-
mized. While this approach allows for tradeoffs among the endogenous variables
it assumes that policymakers can specify a social welfare function.37
   The simuhtion approach to policy evaluation does not require either targets or a
social welfare function. This approach uses the estimated reduced form to
determine alternative combinations of policy variables and endogenous variables
for a given set of possible policies. If r++ i, r;+ ,, . . . , r:+, represent a set of
alternative possible policies the simulation approach would determine the endoge-
nous variables implied by each such policy, where, in the non-linear case,

      9~+,=9(Yr,~T+,,r~+,,~)+aT+,,                                                                 (7.21)

and, in the linear case,

      PI+ i = yrfii    + G+ 4,         + $+ ifi, + 4,     i,      q=1,2 ,-.e, s.                   (7.22)

The policymaker would provide the model builder with the alternative policies,
and the model builder would, in turn, provide the decisionmaker with their
consequences for the endogenous variables. The policymaker would then choose a
desired policy and its outcome, rF+ ,, y:+ 1, where r;+ , is one of the alternative
policies available. 38 This approach does not require information on the tastes of
the policymaker, such as targets or a’social welfare function. Rather, it requires
that the policymaker formulate an explicit set of policy alternatives and that an
estimated econometric model incorporating the appropriate policy variables be
available. Simulation, based in part on communication between policymaker and
model builder, represents a valuable approach to policy evaluation that could be
used in any policy area in which there exists a relevant estimated econometric
model.

   “See Pindyck (1973), Chow (1975, 1981), Ando and Palash (1976), Klein (1977), and Fair (1978) for
an extension of this approach      to the problem of optimal control using an econometric           model,
involving the choice of a time path for policy variables so as to maximize the sum over time (or, in the
continuous case, the integral over time) of a social welfare function.
   38There may, of course, be a problem of simultaneously     making a consistent model of expectations
of other agents and choosing optimal behavior, as is recognized in the rational expectations   literature.
In particular, when it becomes necessary to model how agents formulate expectations       with respect to
alternative policies, some of the structural parameters   might themselves change as a result of policy
choices, creating severe problems in estimating an econometric     model. See Lucas and Sargent (1980)
and Sargent (1981).
Ch. 3: Economic and Econometric Models                                         215


8.   Conclusion

This survey of economic and econometric models indicates that there is a wide
range of models and applications. There are many approaches to modeling, and
even in the standard linear stochastic algebraic model of econometrics there are
many alternative specifications available. These models have been applied in
many different areas; in fact, in virtually all areas of economics and in some
related social sciences. The models have been used for various purposes, including
structural analysis, forecasting, and policy evaluation. Clearly this area is an
extremely rich one in which much has been accomplished and much more will be
accomplished in the future.
   The great diversity of uses and results in the area of economic and econometric
models can perhaps be underscored by mentioning some of the issues that have
not been treated or treated only briefly, most of which are discussed elsewhere in
this Handbook. These issues include, among others:



      Adaptive expectations                  Model simplicity/complexity
      Aggregation                            Optimal control
      Asymptotic results                     Partial adjustment models
      Autoregressive moving average          Path analysis
           (ARMA) models                     Pooling cross-section and time-series
      Bayesian estimation                          data
      Causality                              Qualitative economics
      Certainty equivalence                  Qualitative variables
      Computer simulation                    Random coefficients model
      Disequilibrium models                  Rational expectations
      Distributed lags                       Residual analysis
      Dynamic multipliers                    Robust estimation
      Dynamic simulation                     Seasonality
      Errors in variables models             Seemingly unrelated equations
      Exact finite sample results            Sequential hypothesis testing
      Expectations                           Specification error
      Functional forms for relationships     Spectral analysis
      Identification                         Stochastic equilibrium
      Lag structures                         Structural change
      Latent variables                       Testing
      Limited dependent variables            Time-varying parameters
      Matrix transition models               Unobserved variables
      Measurement errors
216                                                                                             M. D. Intriligator


References

Adelman, I and F. L. Adelman (1959) “The Dynamic Properties of the Klein-Goldberger                        Model”,
   Econometrica, 21, 596-625.
Agarwala, R. (1970) An Econometric Model of India, 1948-61. London: Frank Cass & Co.
Aitchison,     J. and I. R. Dunsmore      (1975) Statistical Prediction Analysis. Cambridge:           Cambridge
   University Press.
Ando, A. and F. Modigliani          (1969) “Econometric     Analyses of Stabilization       Policies”, American
   Economic Review, 59,296-314.
Ando, A., F. Modigliani         and R. Rasche (1972) “Equations       and Definitions      of Variables for the
   FRB-MIT-Penn          Econometric Model, November, 1969”, in: B. G. Hickman (ed.), Economic Models
   of Cyclical Behaoior. National Bureau of Economic Research. New York: Columbia University
   Press.
Ando, A. and C. Palash (1976) “Some Stabilization Problems of 1971-1975, with an Application                      of
   Optimal Control Algorithms”,       American Economic Review, 66, 346-348.
Apostol, T. (1974) Mathematical Analysis (2nd edn.). Reading Mass.: Addison-Wesley                 Publishing Co.
Arnold, S. F. (1981) The Theory of Linear Models and Multivariable Analysis. New York: John Wiley
   & Sons, Inc.
Arrow, K. J., H. B. Chenery, B. S. Minhas and R. M. Solow (1961) “Capital-Labor                 Substitution    and
   Economic Efficiency”, Review of Economics and Statistics, 43, 225-235.
Ball, R. J. (1968) “Econometric      Model Building,” in: Mathematical Model Building in Economics and
   Industry. London: Charles Griffen & Co., Ltd.
Ball, R. J. (ed.) (1973) The International Linkage of Econometric Models. Amsterdam:              North-Holland
   Publishing Company.
Ball, R. J. and T. Bums (1968) “An Econometric            Approach    to Short-Run     Analysis of the United
   Kingdom Economy, l955- 1966”, Operational Research Quarterly, 19, 225-256.
Barten, A. P. (1977)“The Systems of Consumer Demand Functions Approach: A Review”, in: M. D.
   Intriligator (ed.), Frontiers of Quantitatioe Economics, vol. III. Amsterdam:      North-Holland        Publish-
   ing Co.
Beach, E. F. (1957) Economic Models: An Exposition. New York: John Wiley & Sons, Inc.
Belsley, D. A. (1979) “On the Computational         Competitiveness    of FIML and 3SLS in the Estimation
   of Nonlinear Simultaneous-Equation        Models”, Journal of Econometrics, 9, 3 15-342.
Belsley, D. A. (1980) “On the Efficient Computation          of the Nonlinear FIML Estimator”, Journal of
   Econometrics, 14, 203-225.
Bergstrom, A. R. (1967) Selected Economic Models and Their Analysis. New York: American Elsevier
   Publishing Co., Inc.
Bowden, R. (1973) “The Theory of Parametric Identification”,           Econometrica, 41, lO69- 1074.
Box, G. E. P. and D. R. Cox (1964)“An Analysis of Transformations”,            Journal of the Royal Statistical
   Society, B, 26, 21 l-243.
Box, G. E. P. and G. M. Jenkins (1970) Time Series Analysis: Forecasting and Control. San Francisco:
   Holden-Day.         .
Bridge, J. L. (197 1) Applied Econometrics. Amsterdam:        North-Holland    Publishing Co.
Brown, J. A. C. and A. S. Deaton (1972) “Surveys in Applied Economics:                   Models of Consumer
   Behavior”, Economic Journal, 82, 1143-1236.
Brown, M. (ed.) (1967) The Theory and Empirical Analysis of Production. National                        Bureau of
   Economic Research. New York: Columbia University Press.
Brown, M. and J. S. de Cani (1963) “Technological               Change and the Distribution          of Income”,
   International Economic Review, 4, 289-309.
Brown, T. M. (1960) Specification and Uses of Econometric Models. London: Macmillan & CO., Ltd.
Chow, G. (1973) “On the Computation             of Full Information     Maximum      Likelihood     Estimates for
   Nonlinear Equation Systems”, Review of Economics and Statistics, 55, lO4- 109.
Chow, G. (1975) Analysis and Control of Dynamic Economic Systems. New York: John Wiley & Sons,
   Inc.
Chow, G. (1981) Econometric Analysis by Control Methodr. New York: John Wiley & Sons, Inc.
Christ, C. (1966) Econometric Models and Methods. New York: John Wiley & Sons, Inc.
Ch. 3: Economic and Econometric Models                                                                   217

Christ, C. (1975) “Judging the Performance     of Econometric    Models of the U.S. Economy”, Znterna-
  tional Economic Review, 16, 54-74.
Christensen,  L. R., D. W. Jorgenson and L. J. Lau (1973) “Transcendental          Logarithmic    Production
  Frontiers”, Review of Economics and Statistics, 55, 28-45.
Cooper, R. L. (1972) “The Predictive Performance       of Quarterly Econometric      Models of the United
  States”, in: B. G. Hickman (ed.), Econometric Models of Cyclical Behavior. New York: Columbia
  University Press.
Cramer, J. S. (1969) Empirical Econometrics. Amsterdam:       North-Holland    Publishing Co.
Data Resources, Inc. (1976) The Data Resources National Economic Information System. Amsterdam:
  North-Holland    Publishing Co.
Deaton, A. S. (1975) Models and Projections of Demand in Post-War Britain. London: Chapman and
  Hall; New York: Halsted Press.
de Leeuw, F. and E. M. Grarnlich (1968) “The Federal Reserve-MIT            Econometric     Model”, Federal
  Reserve Bulletin, 54, 1 I-40.
de Leeuw, F. and E. M. Gramlich (1969) “The Channels of Monetary Policy: A Further Report on
  the Federal Reserve-MIT       Model”, Journal of Finance, 24, 265-290.
Douglas, P. H. (1948) “Are There Laws of Production?“,       American Economic Review, 38, l-49.
Dhrymes, P. J. (1981) Distributed Zags (revised edn.). Amsterdam:        North-Holland     Publishing Com-
  PanY.
Duesenberry,     J. S., G. Fromm, L. R. Klein and E. Kuh (eds.) (1965) The Brookings Quarterly
   Econometric Model of the United States. Chicago: Rand-McNally          and Company.
Duesenberry,     J. S., G.* Fromm, L. R. Klein and E. Kuh (eds.) (1969) The Brookings Model: Some
   Further Results. Chicago: Rand-McNally         8 Company.
Duggal, V. G., L. R. Klein and M. D. McCarthy (1974) “The Wharton Model Mark III: A Modem
   IS-LM Construct”,       International Economic Review, 15, 572-594.
Eckstein, 0. (ed.) (1976) Parameters and Policies in the U.S. Economy. Amsterdam:            North-Holland
   Publishing Co.
Eckstein, O., E. W. Green and A. Sinai (1974) “The Data Resources Model: Uses, Structure, and
  Analysis of the U.S. Economy”, International Economic Review, 15, 595-615.
Enke, S. (1951) “Equilibrium         among Spatially Separated Markets: Solution by Electric Analogue”,
   Econometrica, 19, 40-47.
Evans, M. K. (1969a) Macroeconomic Activity: Theory, Forecasting and Control: An Econometric
  Approach. New York: Harper & Row.
Evans, M. K. ( 1969b) An Econometric Model of the French Economy: A Short -Term Forecasting Model.
  Paris: Organization     for Economic Cooperation     and Development.
Evans, M. K. (1970) “An Econometric         Model of the Israeli Economy 1952- 1953”, Econometrica, 38,
  624-660.
Evans, M. K. (1974) “Econometric          Models”, in: W. F. Butler, R. A. Kavesh and R. B. Platt (eds.),
   Method and Techniques of Business Forecasting. Englewood Cliffs, N.J.: Prentice-Hall,         Inc.
Evans, M. K. and L. R. Klein (1967) The Wharton Econometric Forecasting Model. Philadelphia:
   Economics Research Unit, Wharton School, University of Pennsylvania.
Evans, M. K. and L. R. Klein (1968) The Wharton Econometric Forecasting Model (2nd enlarged edn.).
   Philadelphia:    Economics Research Unit, Wharton School, University of Pennsylvania.
Evans, M. K., L. R. Klein and M. Saito (1972) “Short Run Prediction and Long Run Simulation of
   the Wharton Model”, in: B. G. Hickman (ed.), Econometric Models of Cyclical Behavior. National
   Bureau of Economic Research. New York: Columbia University Press.
Fair, R. C. (1971) A Short- Run Forecasting Model of the United States Economy. Lexington: Heath
   Lexington Books.
Fair, R. C. (1974) “An Evaluation          of a Short-Run     Forecasting  Model”, International Economic
   Review, 15, 285-303.
Fair, R. C. (1976) A Model of Macroeconomic Activity, Volume ZZ: The Empirical Model. Cambridge:
   Ballinger Publishing Company.
Fair. R. C. (1978) “The Use of Optimal Control Techniques to Measure Economic Performance”,
   International Economic Review, 19, 289-309.
Fair, R. C. (1979) “An Analysis of the Accuracy of Four Macroeconometric               Models”, Journal of
   Political Economy, 87, 701-718.
218                                                                                                h4. D. Intriligator

Fair, R. C. and W. R. Parke (1980) “Full-Information              Estimates of a Nonlinear        Macroeconometric
   Model”, Journal of Econometrics, 13, 269-291.
Ferguson, C. E. (1969)The Neoclassical Theory of Production and Distribution. New York: Cambridge
   University Press.
Fisher, F. M. (1966) The Identification Problem in Econometrics. New York: McGraw-Hill                             Book
   Company.
Fox, K. A., J. K. Sengupta and E. Thorbecke (1966) The Theory of Quantitative Economic Policy, with
   Applications to Economic Growth and Stabilization. Amsterdam:              North-Holland      Publishing Co.
Frisch, R. (1965) Theory of Production. Dordrecht:          Reidel; Chicago: Rand-McNally.
Fromm, G. (ed.) (1971) Tax Incentioes and Capital Spending. Amsterdam:                  North-Holland       Publishing
   co.
Fromm, G. and L. R. Klein (1973) “A Comparison                  of Eleven Econometric       Models of the United
   States”, American Economic Review, 63, 385-393.
Fromm, G. and L. R. Klein (eds.) (1975) The Brookings Model: Perspective and Recent Developments.
   Amsterdam:     North-Holland    Publishing Co.
Fromm, G. and P. Taubman (1968) Policy Simulations with an Econometric Model. Washington,                         D.C.:
   Brookings Institution.
Gallant, A. R. and D. W. Jorgenson            (1979) “Statistical     Inference for a System of Simultaneous,
   Nonlinear,    Implicit Equations    in the Context of Instrumental          Variable Estimation”,        Journal of
   Econometrics, 11,275-302.
Gallant, A. R. and A. Holly (1980) “Statistical           Inference in an Implicit, Nonlinear,          Simultaneous
   Equation Model in the Context of Maximum Likelihood Estimation”,                   Econometrica, 48, 901-929.
Goldberger,     A. S. (1959) Impact Multipliers and Dynamic Properties of the Klein -Goldberger Model.
   Amsterdam:      North-Holland    Publishing Co.
Goldberger,     A. S. and 0. D. Duncan (eds.) (1973) Structural Equation Models in the Social Sciences.
   New York: Seminar Press.
Goldfeld,    S. M. and R. E. Quandt (1968) “Nonlinear                Simultaneous     Equations:     Estimation      and
   Prediction”, International Economic Review, 9, 113-146.
Goldfeld, S. M. and R. E. Quandt (1972) Nonlinear Methods in Econometrics. Amsterdam:                      North-Hol-
   land Publishing Co.
Goldfeld, S. M. and R. E. Quandt (eds.) (1976) Studies in Nonlinear Estimation. Cambridge:                    Ballinger
   Publishing Co.
Granger, C. W. J. and P. Newbold (1977) Forecasting Economic Time Series. New York: Academic
   Press.
Griliches, Z. (1967) “Distributed     Lags: A Survey”, Econometrica, 35, 16-49.
Haitovsky, Y., G. Treyz and V. Su (1974) Forecasts with Quarterb Macroeconometric Models. National
   Bureau of Economic Research. New York: Columbia University Press.
Helliwell, J. F., L. H. Officer, H. T. Shapiro and J. A. Stewart (1969)The Structure of RDXI. Ottawa:
   Bank of Canada.
Helliwell, J. F., H. T. Shapiro, G. R. Sparks, I. A. Stewart, F. W. Gerbet and D. R. Stevenson (1971)
   The Structure of RDXZ. Ottawa: The Bank of Canada.
Hendry,     D. F. (1974) “Stochastic       Specification   in an Aggregate      Demand      Model of the United
   Kingdom”, Econometrica, 42, 559-578.
Hickman,      B. G. (ed.) (1965) Quantitative Planning of Economic Policy. Washington,                      D.C.: The
   Brookings Institution.
Hickman, B. G. (ed.) (1972) Econometric Models of Cyclical Behavior. National Bureau of Economic
   Research. New York: Columbia University Press.
Hilton, K. and D. F. Heathfeld            (eds.) (1970) The Econometric Study of the United Kingdom;
   Proceedings of the I969 Southampton Conference on Short- Run Econometric Models of the U.K.
   Economy. London: Macmillan.
Hoffman, K. (1975) Analysis in Euclidean Space. Englewood Cliffs, N.J.: Prentice-Hall,                  Inc.
Houthakker,     H. S. (1957) “An International         Comparison    of Household Expenditure          Patterns Com-
   memorating     the Centenary of Engel’s Laws”, Econometrica, 25, 532-551.
Houthakker,     H. S. (1965) “New Evidence on Demand Elasticities”, Econometrica, 33, 277-288.
Howrey, E. P. (1972) “Dynamic Properties of a Condensed Version of the Wharton Model”, in: B. G.
   Hickman (ed.), Econometric Models of Cyclical Behavior. New York: Columbia University Press.
Ch. 3: Economic and Econometric Models                                                                               219

Ichimura,     S., L. R. Klein, S. Koizumi, K. Sato and Y. Shinkai (1964) “A Quarterly                       Econometric
   Model of Japan, 1952-59”, Osaka Economic Papers, 12, 19-44.
Intriligator,   M. D. (1971) Mathematical Optimization and Economic Theory. Englewood Cliffs, N.J.:
   Prentice-Hall,    Inc.
Intriligator,   M. D. (1978) Econometric Models, Techniques, and Applications. Englewood Cliffs, NJ.:
   Prentice-Hall,    Inc.; Amsterdam:     North-Holland       Publishing Co.
Intriligator,   M. D. (1981) “Mathematical         Programming,       with Applications      to Economics”,     in: K. J.
   Arrow and M. D. Intriligator         (eds.), Handbook of Mathematical Economics, Vol. I. Amsterdam:
   North-Holland       Publishing Co.
Jorgenson, D. W. and J. J. Laffont (1974) “Efficient Estimation of Nonlinear Simultaneous Equations
   with Additive Disturbances”,       Annals of Economic and Social Measurement, 3, 615-640.
Kalman, P. J. and M. D. Intriligator         (1973) “Generalized        Comparative     Statics, with Applications      to
   Consumer and Producer Theory”, International Economic Review, 14, 473-486.
Kendall, M. G. (1968) “Introduction           to Model Building and its Problems”, in: Mathematical Model
   Building in Economics and Industty. London: Charles Griffen & Co., Ltd.
Klein, L. R. (1950) Economic Fluctuations in the United States, I921- 1941. Cowles Commission
   Monograph      No. 11. New York: John Wiley & Sons, Inc.
Klein, L. R. (1971) “Forecasting        and Policy Evaluation using Large-Scale Econometric                Models: The
   State of the Art”, in: M. D. Intriligator          (ed.), Frontiers of Quantitative Economics. Amsterdam:
   North-Holland       Publishing Co.
Klein, L. R. (1977) “Economic         Policy Formation       through the Medium of Econometric             Models”, in:
   M. D. Intriligator (ed.), Frontiers of Quantitative Economics, Vol. III. Amsterdam:                   North-Holland
   Publishing Co.
Klein, L. R., R. J. Ball, A. Hazlewood and P. Vandome (1961) An Econometric Model of the United
   Kingdom. Oxford: Basil Blackwell.
Klein, L. R. and E. Burmeister (eds.) (1976) Econometric Model Performance: Comparative Simulation
   Studies of the U.S. Economy. Philadelphia:          University of Pennsylvania       Press.
Klein, L. R. and A. S. Goldberger          (1955) An Econometric Model of the United States, 1929-1952.
   Amsterdam:      North-Holland    Publishing Co.
Klein, L. R. and Y. Shinkai (1963) “An Econometric                     Model of Japan, 1930-59”,           Znternational
   Economic Review, 4, l-28.
Klein, L. R. and R. M. Young (1980) An Introduction to Econometric Forecasting Models. Lexington:
   Lexington Books.
Kmenta, J. (1967) “On the Estimation             of the CES Production          Function”,     International Economic
   Review, 8, 1SO- 189.
Kosobud, R. and R. Minami (eds.) (1977) Econometric Studies of Japan. Urbana: University of Illinois
   Press.
Learner, E. E. (1978) Specification Searches. New’York: John Wiley & Sons, Inc.
Lucas, R. E. and T. J. Sargent (eds.) (1980) Rational Expectations                        and Econometric Practice.
   Minneapolis:     University of Minnesota Press.
Maddala, G. S. (1977) Econometrics. New York: McGraw-Hill                   Book CO.
Malinvaud, E. (1970) Statistical Methods of Econometrics (2nd rev. edn.). Amsterdam:                     North-Holland
   Publishing Co.
Marschak,      J. and W. H. Andrews (1944) “Random                  Simultaneous    Equations      and the Theory of
   Production”,     Econometrica, 12, 143-205.
McCarthy,      M. D. (1972) The Wharton Quarterly Econometric Forecasting Model, Mark III. Phila-
   delphia: Economics Research Unit, University of Pennsylvania.
Minhas. B. S. (1963) An International Comparison of Factor Costs and Factor Use. Amsterdam:
   North-Holland       Publishing Co.
Morehouse. N. F.. R. H. Strom and S. J. Horwitz (1950) “An Electra-Analog                    Method for Investigating
   Problems in Economic Dynamics: Inventory Oscillations”,                 Econometrica, 18, 313-328.              _     _
Muench, T., A. Rolneck, N. Wallace and W. Weiler (1974) “Tests for Structural                              Change and
   Prediction Intervals for the Reduced Form of Two Structural Models of the U.S.: The FRB-MIT
   and Michigan Quarterly Models”, Annals of Economic and Social Measurement, 3, 491-520.
Naylor, T. H. (1971) “Policy Simulation Experiments With Macroeconometric                        Models: The State of
   the Art”, in: M. D. Intriligator (ed.), Frontiers of Quantitative Economics. Amsterdam:                   North-Hol-
   land Publishing Co.
220                                                                                             M. D. Intriligator

Naylor, T. H., K. Wertz and T. Wonnacott               (1968) “Some Methods For Evaluating            the Effects of
   Economic Policies using Simulation Experiments”,             Review of the International Statistical Institute,
   36, 184-200.
Nerlove, M. (1965)Estimation and Identification of Cobb- Douglas Production Functions. Amsterdam:
   North-Holland     Publishing Co.
Nerlove, M. ( 1966) “A Tabular Survey of Macroeconometric              Models”, International Economic Review,
   7, 127-175.
Nerlove, M., D. M. Grether and J. L. Carvalho (1979) Analysis of Economic Time Series. New York:
   Academic Press.
Nicholls, D. F., A. R. Pagan and R. D. Terre11 (1975) “The Estimation                   and Use of Models with
   Moving Average Disturbance          Terms: A Survey”, International Economic Review, 16, 113-134.
Palm, F. (1977) “On Univariate            Time Series Methods and Simultaneous             Equation     Econometric
   Models”, Journal of Econometrics, 5, 379-388.
Phlips, L. (1974) Applied Consumption Analysis. Amsterdam:              North-Holland     Publishing Co.
Pindyck,    R. S. (1973) Optimal Planning for Economic Stabilization.                Amsterdam:      North-Holland
   Publishing Co.
Pindyck, R. S. and D. L. Rubinfeld (1976) Econometric Models and Economic Forecasts. New York:
   McGraw-Hill     Book Co.
Pollak, R. A. and T. J. Wales (1969) “Estimation            of the Linear Expenditure      System”. Econometrica,
   37,61 l-628.
Powell, A. A. (1974) Empirical Analytics of Demand Systems. Lexington: Lexington Books.
Prais, S. J. and H. S. Houthakker           (1955) The Analysis of Family Budgets. New York: Cambridge
   University Press.
Preston, R. S. (1972) The Wharton Annual and Industry Forecasting Model. Philadelphia:                    Economics
   Research Unit, Wharton School, University of Pennsylvania.
Preston, R. S. (1975) “The Wharton             Long-Term      Model: Input-Output       Within the Context of a
   Macro Forecasting Model”, International Economic Review, 16, 3-19.
Quirk, J. and R. Saposnik (1968) Introduction to General Equilibrium Theory and Werfnre Economics.
   New York: McGraw-Hill          Book Company.
Rasche, R. H. and H. T. Shapiro (1968) “The FRB-MIT                   Econometric     Model: Its Special Features
   and Implications    for Stabilization Policies”, American Economic Review, 58, 123-149.
Renton, G. A., Ed. (1975) Modelling the Economy. London: Heinemann.
Rothenberg,    T. J. (1971) “Identification      in Parametric Models”, Econometrica, 38, 577-591.
Rothenberg,     T. J. (1973) Efficient Estimation with A Priori Information. Cowles Foundation                Mono-
   graph 23, New Haven: Yale University Press.
Rudin, W. (1964) Principles of Mathematical Analysis. New York: McGraw-Hill                   Book Company.
Samuelson, P. A. (1947) Foundations of Economic Analysis. Cambridge:                Harvard University Press.
Samuelson, P. A. (1975) “The Art and Science of Macro Models”, in: G. Fromm and L. R. Klein
   (eds.), The Brookings Model: Perspective and Recent Developments.                 Amsterdam:     North-Holland
   Publishing Co.
Sargent, T. J. (1981), “Interpreting     Economic Time Series”, Journal of Political Economy, 8Y, 213-248.
Shapiro, H. T. and L. Halabuk              (1976) “Macro-Econometric          Model Building in Socialist and
   Non-Socialist   Countries: A Comparative         Study”, International Economic Review, 89, 213-248.
Silberberg, E. (1978) The Structure of Economics: A Mathematical Analysis. New York: McGraw-Hill
   Book Company.
Sims, C. A. (1974) “Distributed        Lags”, in: M. D. Intriligator    and D. A. Kendrick (eds.), Frontiers of
   Quantitatioe Economics, vol. II. Amsterdam:          North-Holland    Publishing Co.
Smith, A. (1776) The Wealth of Nations, Edited by Edwin Cannan (1937). New York: The Modern
   Library.
Stone, R. (1954) The Measurement of Consumers’ Expenditure and Behavior in the United Kingdom,
   1920-1938. New York: Cambridge University Press.
Stone, R. (1972) A Computable Model of Economic Growth: A Programme for Growth, Vol. 1.
   Cambridge:     Chapman and Hall.
Stone, R., A. Brown and D. A. Rowe (1965) “Demand                        Analysis   and Projections      in Britain:
    1900-1970”, in: J. Sandee (ed.), Europe’s Future Consumption. Amsterdam:              North-Holland     Publish-
   ing Co.
Ch. 3: Economic and Econometric Models                                                                         221


Strotz, R. H., J. C. McAnulty         and J. B. Names, Jr. (1953) “Goodwin’s          Nonlinear    Theory of the
   Business Cycle: An Electra-Analog         Solution”, Econometrica, 2 1, 390-4 11.
Suits, D. B. (1962) “Forecasting         and Analysis with an Econometric          Model”, American Economic
    Review, 52, 104132.
Suits, D. B. (1963) The Theory and Application of Econometric Models. Athens: Center of Economic
   Research.
Suits, D. B. (1964) An Econometric Model of the Greek Economy. Athens: Center of Economic
   Research.
Sylos-Labini,    P. (1974)Trade Unions, Inflation and Productivity. Lexington: Lexington Books.
Theil, H. (196 I) Economic Forecasts and Policy (2nd edn.). Amsterdam:           North-Holland     Publishing Co.
Theil, H. (1964)Optimal Decision Rules for Government and Industry. Chicago: Rand-McNally                    & Co.;
   Amsterdam:      North-Holland    Publishing Co.
Theil, H. (1966)Applied Economic Forecasting. Amsterdam:             North-Holland     Publishing Co.
Theil, H. (1971) Principles of Econometrics. New York: John Wiley & Sons, Inc.
Theil, H. (1975/1976)      The Theory and Measurement of Consumer Demand, Vols. I and II. Amsterdam:
   North-Holland     Publishing Co.
Theil, H. ard J. C. G. Boot (I 962) “The Final Form of Econometric           Equation Systems”, Review of the
   lnternationul Statistical Institute, 30, I36- 152.
Tinbergen,    J. (1955) On the Theory of Economic Policy (2nd edn.). Amsterdam:                   North-Holland
   Publishing Co.
Tinbergen, J. (1956) Economic Policy: Principles and Design. Amsterdam:              North-Holland     Publishing
   co.
Tustin, A. (1953) The Mechanism of Economic Systems. Cambridge:              Harvard University Press.
Ueno, H. (1963) “A Long-Term Model of the Japanese Economy, 1920- 1958”, International Economic
   Review, 4, 171-193.
Walters, A. A. (1963) “Production        and Cost Functions: An Econometric         Survey”, Econometrica, 31,
    l-66.
Walters, A. A. (1968) “Econometric         Studies of Production and Cost Functions”,         Encyclopedia of the
   Social Sciences.
Wold, H. (1954) “Causality       and Econometrics”,     Econometrica, 22, 162- 177.
Wold, H. (1960) “A Generalization         of Causal Chain Models”, Econometrica, 28, 443-463.
Weld, H. (1968) Econometric Model Building: Essays on the Causal Chain Approach. Amsterdam:
   North-Holland     Publishing Co.
Wold, H. and L. Jureen (1953) Demand Analysis. New York: John Wiley & Sons, Inc.
Zarnowitz, V. (1967) An Appraisal of Short -Term Economic Forecasts. New York: National Bureau of
   Economic Research.
Zellner, A. (1979) “Statistical    Analysis of Econometric      Models”, Journal of the American Statistical
  Association, 74, 628-643, with Comments by D. A. Belsley and E. Kuh (643-645),                     C. F. Christ
   (645-646), P. M. Robinson (646-648), T. J. Rothenberg            (648-650),    and Rejoinder of A. Zellner
   (650-651).
Zellner, A., J. Kmenta and J. Dreze (1966) “Specification         and Estimation of Cobb-Douglas           Produc-
   tion Function Models”, Econometrica, 34, 727-729.
Zellner, A. and F. Palm (1974) “Time Series Analysis and Simultaneous                    Equation    Econometric
   Models”, Journal of Econometrics, 2, 17-54.



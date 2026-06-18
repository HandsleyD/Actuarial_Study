---
normalized_id: shared-pdf-reference-new-econometric-approaches-to-stabilization-policy-in-stochastic-models-of-macroeconomic-fluctuations
exam_code: SHARED
material_scope: new econometric approaches to stabilization policy in stochastic models of macroeconomic fluctuations.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/New Econometric Approaches to Stabilization Policy in Stochastic Models of Macroeconomic Fluctuations.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-new-econometric-approaches-to-stabilization-policy-in-stochastic-models-of-macroeconomic-fluctuations

Chapter 34


NEW ECONOMETRIC    APPROACHES TO STABILIZATION
POLICY IN STOCHASTIC MODELS OF MACROECONOMIC
FLUCTUATIONS
JOHN      B. TAYLOR*

Stanford University

Contents

1.     Introduction                                                                              1998
2.     Solution concepts and techniques                                                          1998
       2.1.   Scalar models                                                                      1999
       2.2.   Bivariate     models                                                               2016
       2.3.   The use of operators,            generating    functions,    and z-transforms      2031
       2.4.   Higher      order representations         and factorization      techniques        2033
       2.5    Rational      expectations       solutions     as boundary    value problems       2037
3.     Econometric evaluation of policy rules                                                    2038
       3.1.   Policy evaluation           for a univariate     model                             2039
       3.2.   The Lucas critique and the Cowles Commission                      critique         2040
       3.3.   Game-theoretic           approaches                                                2041
4.     Statistical inference                                                                     2041
       4.1.   Full information            estimation                                             2041
       4.2.   Identification                                                                     2043
       4.3.   Hypothesis        testing                                                          2044
       4.4.   Limited      information        estimation     methods                             2044
5.     General linear models                                                                     2045
       5.1.   A general      first-order      vector model                                       2045
       5.2.   Higher      order vector models                                                    2047
6.     Techniques for nonlinear models                                                           2048
       6.1.   Multiple      shooting       method                                                2049
       6.2.   Extended       path method                                                         2049
       6.3.   Nonlinear        saddle path manifold          method                              2050
7. Concluding remarks                                                                            2051
References                                                                                       2052

   *Grants    from the National Science Foundation        and the Guggenheim Foundation  are gratefully
acknowledged.     I am also grateful to Olivier Blanchard, Gregory Chow, Avinash Dixit, George Evans,
Zvi Griliches, Sandy Grossman,       Ben McCallum, David Papell, Larry Reed, Philip Reny, and Ken
West for helpful discussions and comments on an earlier draft.

Handbook of Econometrics, Volume III, Edited by Z. Griliches und M.D. Intriligator
0 Elsevier Science Publishers BV, 1986
 1998                                                                       J. B. Taylor




1.   Introduction

During the last 15 years econometric techniques for evaluating macroeconomic
policy using dynamic stochastic models in which expectations are consistent, or
rational, have been developed extensively. Designed to solve, control, estimate, or
test such models, these techniques have become essential for theoretical and
applied research in macroeconomics. Many recent macro policy debates have
taken place in the setting of dynamic rational expectations models. At their best
they provide a realistic framework for evaluating policy and empirically testing
assumptions and theories. At their worst, they serve as a benchmark from which
the effect of alternative assumptions can be examined. Both “new Keynesian”
theories with sticky prices and rational expectations, as well as “new Classical”
theories with perfectly flexible prices and rational expectations fall within the
domain of such models. Although the models entail very specific assumptions
about expectation formation and about the stochastic processes generating the
macroeconomic time series, they may serve as an approximation in other cir-
cumstances where the assumptions do not literally hold.
   The aim of this chapter is to describe and explain these recently developed
policy evaluation techniques. The focus is on discrete time stochastic models,
though some effort is made to relate the methods to the geometric approach (i.e.
phase diagrams and saddlepoint manifolds) commonly used in theoretical con-
tinuous time models. The exposition centers around a number of specific proto-
type rational expectations models. These models are useful for motivating the
solution methods and are of some practical interest per se. Moreover, the
techniques for analyzing these prototype models can be adapted fairly easily to
more general models. Rational expectations techniques are much like techniques
to solve differential equations: once some of the basic ideas, skills, and tricks are
learned, applying them to more general or higher order models is straightforward
and, as in many differential equations texts, might be left as exercises.
   Solution methods for several prototype models are discussed in Section 2. The
effects of anticipated, unanticipated, temporary, or permanent changes in the
policy variables are calculated. The stochastic steady state solution is derived, and
the possibility of non-uniqueness is discussed. Evaluation of policy rules and
estimation techniques oriented toward the prototype models are discussed in
Sections 3 and 4. Techniques for general linear and nonlinear models are
discussed in Sections 5 and 6.

2.   Solution concepts and techniques

The sine qua non of a rational expectations model is the appearance of forecasts
of events based on information available before the events take place. Many
Ch. 34: Stabilization   Policy in Macroeconomic   Fluctuations                 1999

different techniques have been developed to solve such models. Some of these
techniques are designed for large models with very general structures. Others are
designed to be used in full information estimation where a premium is placed on
computing reduced form parameters in terms of structural parameters as quickly
and efficiently as possible. Others are short-cut methods designed to exploit
special features of a particular model. Still others are designed for exposition
where a premium is placed on analytic tractability and intuitive appeal. Graphical
methods fall in this last category.
    In this section, I examine the basic solution concept and explain how to obtain
the solutions of some typical linear rational expectations models. For expositional
purposes I feel the method of undetermined coefficients is most useful. This
method is used in time series analysis to convert stochastic difference equations
into deterministic difference equations in the coefficients of the infinite moving
average representation. [See Anderson (1971, p. 236) or Harvey (1981, p. 38)]. The
difference equations in the coefficients have exactly the same form as a determin-
istic version of the original model, so that the method can make use of techniques
available to solve deterministic difference equations. This method was used by
Muth (1961) in his original exposition of the rational expectations assumption. It
provides a general unified treatment of most stochastic rational expectations
models without requiring knowledge of any advanced techniques, and it clearly
reveals the nature of the assumptions necessary for existence and uniqueness of
solutions. It also allows for different viewpoint dates for expectations, and
provides an easy way to distinguish between the effects of anticipated versus
unanticipated policy shifts. The method gives the solution in terms of an infinite
moving average representation which is also convenient for comparing a model’s
properties with the data as represented in estimated infinite moving average
representations. An example of such a comparison appears in Taylor (1980b). An
infinite moving average representation, however, is not useful for maximum
likelihood estimation for which a finite ARMA model is needed. Although it is
usually easy to convert an infinite moving average model into a finite ARMA
model, there are computationally more advantageous ways to compute the
ARMA model directly as we will describe below.


2.1.    Scalar models

Let yz be a random variable satisfying the relationship

                                                                              (24

where OLand 6 are parameters and E, is the conditional expectation based on all
information through period t. The variable U, is an exogenous shift variable or
“shock” to the equation. It is assumed to follow a general linear process with the
                                                                            J. B. Taylor

representation

            00

     U,=    C eiEt-,?                                                            (2.2)
           i=O




where 0,=0,1,2,...     is a sequence of parameters, and where E, is a serially
u‘ncorrelated random variable with zero mean. The shift variable could represent
a policy variable or a stochastic error term as in an econometric equation. In the
latter case, 8 would normally be set to 1.
   The information upon which the expectation in (2.1) is conditioned includes
past and current observations on et as well as the values of (Y, 6, and 0,. The
presence of the expected value of a future endogenous variable E,y,+, is
emphasized in this prototype model because the dynamic properties that this
variable gives to the model persist in more complicated models and raise many
important conceptual issues. Solving the model means finding a stochastic process
for the random variable y, that satisfies eq. (2.1). The forecasts generated by this
process will then be equal to the expectations that appear in the model. In this
sense, expectations are consistent with the model, or equivalently, expectations
are rational.

   A macroeconomic example. An important illustration of eq. (2.1) is a classical
full-employment macro model with flexible prices. In such a model the real rate of
interest and real output are unaffected by monetary policy and thus they can be
considered fixed constants. The demand for real money balances- normally a
function of the nominal interest rate and total output -is therefore a function
only of the expected inflation rate. If pt is the log of the price level and m, is the
log of the money supply, then the demand for real money can be represented as


                                                                                 (2.3)


with p > 0. In other words, the demand for real money balances depends
negatively on the expected rate of inflation, as approximated by the expected first
difference of the log of the price level. Eq. (2.3) can be written in the form of eq.
(2.1) by setting (Y= p/(1 + p) and 6 =l/(l+         p), and by letting y, = pt and
u, = m,. In this example the variable u, represents shifts in the supply of money,
as generated by the process (2.2). Alternatively, we could add an error term u, to
the right hand side of eq. (2.3), to represent shifts in the demand for money. Eq.
(2.3) was originally introduced in the seminal work by Cagan (1956), but with
adaptive, rather than rational expectations. The more recent rational expectations
version has been used by many researchers including Sargent and Wallace (1973).
Ch. 34: Stabilization   Policy in Macroeconomic   Fluctuations

2. I. I.   Some economic policy interpretations of the shocks

The stochastic process for the shock variable u, is assumed in eq. (2.2) to have a
general form. This form includes any stationary ARMA process [see Harvey
(1981), p. 27, for example]. For empirical applications this generality is necessary
because both policy variables and shocks to equations frequently have com-
plicated time series properties. In many policy applications (where U, in (2.2) is a
policy variable), one is interested in “thought experiments” in which the policy
variable is shifted in a special way and the response of the endogenous variables is
examined. In standard econometric model methodology, such thought experi-
ments require one to calculate policy multipliers [see Chow (1983), p. 147, for
example]. In forward-looking rational expectations models, the multipliers depend
not only on whether the shift in the policy variable is temporary or permanent,
but also on whether it is anticipated or unanticipated. Eq. (2.2) can be given a
special form to characterize these different thought experiments, as the following
examples indicate.
   Temporary versus permanent shocks. The shock U, is purely temporary when
8, = 1 and Bi = 0 for i > 0. Then any shock U, is expected to disappear in the
period immediately after it has occurred; that is E,u,+; = 0 for i > 0 at every
realization of u,. At the other extreme the shock u, is permanent when 0; =l for
i > 0. Then any shock u, is expected to remain forever; that is Etut+, = u, for
i > 0 at every realization of u,. In this permanent case the u, process can be
written as u, = u,_r + E,. (Although U, is not a stationary process in this case, the
solution can still be used for thought experiments, or transformed into a sta-
tionary series by first-differencing.)
   By setting 0, = p’, a range of intermediate persistence assumptions can be
modeled as p varies from 0 to 1. For 0 < p < 1 the shock u, is assumed to phase
out geometrically. In this case the u, process is simply U, = put-r + E,, a first
order autoregressive model. When p = 0, the disturbances are purely temporary.
When p = 1, they are permanent.
   Anticipated versus unanticipated shocks. In policy applications it is also im-
portant to distinguish between anticipated and unanticipated shocks. Time delays
between the realization of the shock and its incorporation in the current informa-
tion set can be introduced for this purpose by setting Bi = 0 for values of i up to
the length of time of anticipation. For example, in the case of a purely temporary
shock, we can set 0, = 0, 8, = 1, fli = 0 for i > 1 so that u, = s,_r. This would
characterize a temporary shock which is anticipated one period in advance. In
other words the expectation of u,+i at time t is equal to u,+i because et = u,+r is
in the information set at time t. More generally a temporary shock anticipated k
periods in advance would be represented by U, = E,_~.
   A permanent shock which is anticipated k periods in advance would be
modeled by setting B;=O for i=l,...,       k-l    and Bi=l for i=k,       k+l,....
2002                                                                                         J. B. Taylor

                                                    Table 1
                             Summary   of alternative policies and their effects.

             Model:                           y, = aEy,+r           + aa,,     loI ~1.
                                                         m
                                                                    du,+, , i=O,l,
             Policy:                          u,=        1 %,e,_,-%,=-
                                                     i=O             de,
             Solution     Form:               y,= f          ,&,_,-,=~;~=o,l,....
                                                    r=n                                  f
             Stochastics: E, is serially uncorrelated   with zero mean.
             Thought Experiment:       One time unit impulse to Q.
             Theorem: For every integer k >_0.
                if
                                                        Oforick,
                                                    8,=
                                                             P1-k fori>k,
                then
                                                          as-“-k’
                                                          ___            fori<k,
                                                            l-ap
                                              Y, =
                                                           i$-k
                                                          __         forizk.
                                                     i    l-ap

             Interpretation:
                Policy is anticipated k periods in advance,
                   k = 0 means unanticipated.
                Policy is phased-out at geometric rate p, 0 I p 2 1,
                   p = 0 means purely temporary (N.B. p” = 1 when p = 0).
                   p = 1 means permanent.




Similarly, a shock which is anticipated k periods in advance and which is then
expected to phase out gradually would be modeled by setting @,= 0 for i =
1,,..,k-1    and @,=p’-” fori=k,    kfl,...,   withO<p<l.Inthiscase(2.2)can
be written alternatively as U, = put-i + .c_~, a first-order autoregressive model
with a time delay.
   The various categories of shocks and their mathematical representations are
summarized in Table 1. Although in practice, we interpret E, in eq. (2.2) as a
continually perturbed random variable, for these thought experiments we examine
the effect of a one-time unit impulse to E*.The solution for yt derived below can
be used to calculate the effects on y, of such single realizations of E,.

2.1.2.   Finding       the solution

In order to find a solution for y, (that is, a stochastic process for y, which satisfies
the model (2.1) and (2.2)), we begin by representing y, in the unrestricted infinite
moving average form
Ch. 34: Stabilization    Palicy in Macroeconomic       Fluctuations              2003

Finding a solution for yI then requires determining values for the undetermined
coefficients y, such that eq. (2.1) and (2.2) are satisfied. Current and past E,
represent the entire history of the perturbations to the model. Eq. (2.4) simply
states that y, is a general function of all possible events that may potentially
influence y,. The linear form is used in (2.4) because the model (2.2) is linear.
Note that the solution for y, in eq. (2.4) can easily be used to calculate the effect
of a one time unit shock to et. The dynamic impact of such a shock is simply
dy,+,/de, = Y,-
   To find the unknown coefficients, the most direct procedure is to substitute for
Y, and E,Y,+, in (2.1) using (2.4) and solve for the y, in terms of (Y,6 and Bi. The
conditional expectation E,y,+, is obtained by leading (2.4) by one period and
taking expectations, making use of the equalities Er~,+i = 0 for i > 0. The first
equality follows from the assumption that E, has a zero unconditional mean and
is uncorrelated; the second follows from the fact that etti for i -C0 is in the
conditioning set at time t. The conditional expectation is


         EY,+~=     f    Yi’t-i+l.                                              (2.5)
          I        i=l


Substituting      (2.2), (2.4) and (2.5) into (2.1) results in


          C YiE,-lza        C Yi&t-i+l+ 6 C OiE,_j.                             (2.6)
         i=O               i=l                  i=o


Equating the coefficients of Ed,&,_r, E~_~,. . . on both sides of the equality (2.6)
results in the set of equations

         yi = cYy;+i+ sei            i=O,1,2   ,....                            (2.7)

The first equation in (2.7) for i = 0 equates the coefficients of E, on both sides of
(2.6); the second equation similarly equates the coefficient for e,_i and so on.
   Note that (2.7) is a deterministic difference equation in the yi coefficients with
di as a forcing variable. This deterministic difference equation has the same
structure as the stochastic difference eq. (2.1). It can be thought of as a
deterministic perfect foresight model of the “variable” yi. Hence, the problem of
solving a stochastic difference equation with conditional expectations of future
variables has been converted into a problem of solving a deterministic difference
equation.

2.1.3.      The solution in the case of unanticipated shocks

Consider first the most elementary case where U, = E,. That is, 8, = 0 for i 21.
This is the case of unanticipated shocks which are temporary. Then eq. (2.7) can
2004                                                                       J. B. Taylor

be written

       y. = ayl + 6.                                                            (2.8)
       Yi+l
               =   iyi    i=1,2 )... .                                          (2.9)

From eq. (2.9) all the y, for i > 1 can be obtained once we have yi. However, eq.
(2.8) gives only one equation in the two unknowns y,, and yi. Hence without
further information we cannot determine the yi coefficients uniquely. The number
of unknowns is one greater than the number of equations. This indeterminacy is
what leads to non-uniqueness in rational expectations models and has been
studied by many researchers including Blanchard (1979) Flood and Garber
(1980), McCallum (1983), Gourieroux, Laffont, and Monfort (1982) Taylor
(1977) and Whiteman (1983).
   If la1 I 1 then the requirement that y, is a stationary process will be sufficient
to yield a unique solution. (The case where Ial > 1 is considered below in Section
2.1.4.). To see this suppose that yr # 0. Since eq. (2.9) is an unstable difference
equation, the y, coefficients will explode as i gets large. But then yI would not be
a stationary stochastic process. The only value for yi that will prevent the y, from
exploding is yi = 0. From (2.9) this in turn implies that yj = 0 for all i > 1. From
eq. (2.8) we then have that y0 = 6. Hence, the unique stationary solution is simply
y, = 6~~. In this case, the impact of a unit shock dy,+s/de, is equal to S for s = 0
and is equal to 0 for s r 1. This simple impact effect is illustrated in Figure la.
(The more interesting charts in Figures lb, lc, and Id will be described below).
Example
In the case of the Cagan money demand equation this means that the price
p, = (1+ &‘m,.      Because p > 0, a temporary unanticipated increase in the
money supply increases the price level by less than the increase in money. This is
due to the fact that the price level is expected to decrease to its normal value
(zero) next period, thereby generating an expected deflation. The expected defla-
tion increases the demand for money so that real balances must increase. Hence,
the price p, rises by less than m,. This is illustrated in Figure 2a.
   For the more general case of unanticipated shifts in U, that are expected to
phase-out gradually we set 8, = pi, where p < 1. Eq. (2.7) then becomes

                   1     &J’
       Y r+l                     i=O,1,2,3   ,... .                            (2.10)
               =2--T



Again, this is a standard deterministic difference equation. In this more general
case, we can obtain the solution y, by deriving the solution to the homogeneous
part y,(*) and the particular solution to the non-homogeneous part y,“).
Ch. 34: Stabilization Policy in Macroeconomic Fluctuations                                                 2005


  dyt+s                                                  dy,,,       (b)
   det                                                    de,




                                                           s
                                                           1 -a,




                                                          dy
                                                          t+S        (d)
                                                            det




on y, of an unanticipated
                                 k
Figure l(a). Effect on y, of an unanticipated

on y, of an anticipated
                                             s                     s   0                               s

                                                  unit shift in U, which is temporary (a, = a,). (b). Effect
                              unit shift in u, which is phased-out gradually (u, = p u,_ r + E,). (c). Effect
                          unit shift in u, which is temporary (anticipated   at time 0 and to occur at time
k) (u, = eI_k). (d). Effect on yr of an anticipated       shift in u1 which is phased-out   gradually (anti-




The solution to (2.10) is the sum of the homogeneous solution and the particular
solution yi = y/H) + yi(J’). [See Baumol (1970) for example, for a description of
this solution technique for deterministic difference equations]. The homogeneous
part is

       (H)   =   ~yyO         i=O,1,2 ,...,                                                          (2.11)
     Yi+l




                   = (l/a)‘+‘yiH). A s in the earlier discussion if Ia] < 1 then for
with solution yi’+“l’
stationarity we require that y,jH) = 0. For any other value of yAH) the homoge-
neous solution will explode. Stationarity therefore implies that y:H) = 0 for
i=O,1,2 ,... .
2006                                                                                           J. B. Tuvlor

    Price level                                             Price level



          1       (a)                                                 (b)




                                                                          0

        Price level                                           Price   svel
              h
                        Cc)                                                   Cd)




                        0           k             s-                            0      k                 5

Figure 2(a). Price level effect of an unanticipated        unit increase in m, which lasts for one period.
(b). Price level effect of an unanticipated   increase in m, which is phased-out gradually. (c). Price level
effect of an anticipated    unit increase in m,+k which lasts for one period. The increase is anticipated  k
periods in advance. (d). Price level of an anticipated          unit increase in m,+k which is phased-out
                         gradually. The increase is anticipated    k periods in advance.




   To find the particular solution we substitute yi(‘) = hb’ into (2.10) and solve for
the unknown coefficients h and b. This gives:

       b=p,                                                                                        (2.12)

       h=6(1-ap)-‘.

Because the homogeneous solution is identically equal to zero, the sum of the
homogeneous and the particular solutions is simply

             Sp’
       Yi’ I_apy              i=o,1,2    )... .                                                    (2.13)
Ch. 34: Stabilization        Policy in Macroeconomic Fluctuations                  2007

In terms of the representation                for yt this means that




                                                                                 (2.14)


The variable yt is proportional to the shock U, at all t. The effect of a unit shock
E, is shown in Figure lb. Note that yt follows the same type of first order
stochastic process that U, does; that is,

                               6E
         Y,=PYt-l+y--+                                                          (2.15)


Example
For the money demand example, eq. (2.14) implies that

                         1               1
         P1=                           1+p
                        B            (     1 mt
               l-     i 1+p 1p
               i           1
                                                                                (2.16)
           =        l+p(l-p)         i mr.

As long as p -c 1 the increase in the price level will be less than the increase in the
money supply. The dynamic impact on pt of a unit shock to the money supply is
shown in Figure 2b. The price level increases by less than the increase in the
money supply because of the expected deflation that occurs as the price level
gradually returns to its equilibrium value of 0. The expected deflation causes an
increase in the demand for real money balances which is satisfied by having the
price level rise less than the money supply. For the special case that p = 1, a
permanent increase in the money supply, the price level moves proportionately to
money as in the simple quantity theory. In that case there is no change in the
expected rate of inflation since the price level remains at its new level.

2.1.4.     A digression on the possibility of non-uniqueness

If ICYI> 1, then simply requiring that y, is a stationary process will not yield g
unique solution. In this case eq. (2.9) is stable, and any value of y1 will give a
stationary time series. There is a continuum of solutions and it is necessary to
place additional restrictions on the model if one wants to obtain a unique solution
2008                                                                               J. B. Tqlor

for the y,. There does not seem to be any completely satisfactory approach to take
in this case.
   One possibility raised by Taylor (1977) is to require that the process for y, have
a minimum     variance. Consider the case where U, is uncorrelated.   The variance of
yI is given by


       Vary,=y,2+(y0-6)2((Y2-1)-1.                                                     (2.17)

where the variance of E, is supposed to be 1. The minimum occurs at y0 = Si2
from which the remaining         y, can be calculated. Although the minimum variance
condition    is a natural extension of the stationarity    (finite variance) condition, it is
difficult to give it an economic rationale.
    An alternative    rule for selecting a solution was proposed by McCallum (1983)
and is called the “minimum          state variable technique”.     In this case it chooses a
representation     for y, which involves the smallest number of Ed terms; hence, it
would give y, = 6~~. McCallum            (1983) examines this selection rule in several
different applications.
    Chow (1983, p. 361) has proposed             that the uniqueness      issue be resolved
empirically     by representing     the model in a more general form. To see this
substitute   eq. (2.8) with 6 =l and eq. (2.9) into eq. (2.4) for an arbitrary yi. That
is, from eq. (2.4) we write


       Y, =   EY,&t-1
              i=O
         =("y1+1)EI+y1E1_1+(Y1/~)&t-2+(Yl/~2)&I-3+                   ..-.              (2.18)

Lagging (2.18)      by one time period,    multiplying    by a-1   and   subtracting    from
(2.18) gives


                                                                                       (2.19)


which is ARMA (1,l) model with a free parameter yi. Clearly if yi = 0 then this
more general solution reduces to the solution discussed above. But, rather than
imposing   this condition, Chow (1983) has suggested that the parameter        yi be
estimated,  and has developed an appropriate   econometric     technique. Evans and
Honkapohja     (1984) use a similar procedure for representing     ARMA models in
terms of a free parameter.
   Are there any economic examples where Ia/ > l? In the case of the Cagan
money demand equation, (Y= p/(1 + p) which is always less than 1 since /3 is a
positive parameter.   One economic example where (Y> 1 is a flexible-price macro-
Ch. 34: Stabilization   Policy in Macroeconomic   Fluctuations                   2009

economic model with money in the production function. To see this consider the
following equations:

      m, - pr = az, -pi,.                                                     (2.20)

                                   -P$                                        (2.21)

                                                                              (2.22)

where z, is real output, i, is the nominal interest rate, and the other variables are
as defined in the earlier discussion of the Cagan model. The first equation is the
money demand equation. The second equation indicates that real output is
negatively related to the real rate of interest (an “IS” equation). In the third
equation z, is positively related to real money balances. The difference between
this model and the Cagan model (in eq. (2.3)) is that output is a positive function
of real money balances. The model can be written in the form of eq. (2.1) with

                          P
      a=1+p-d(a+pc-1)’                                                        (2.23)


Eq. (2.23) is equal to the value of (Yin the Cagan model when d = 0. In the more
general case where d > 0 and money is a factor in the production function, the
parameter cycan be greater than one. This example was explored in Taylor (1977).
Another economic example which arises in an overlapping generation model of
money was investigated by Blanchard (1979).
   Although there are examples of non-uniqueness such as these in the literature,
most theoretical and empirical applications in economics have the property that
there is a unique stationary solution. However, some researchers, such as
Gourieroux, Laffont, and Monfort (1982), have even questioned the appeal to
stationarity. Sargent and Wallace (1973) have suggested that the stability require-
ment effectively rules out speculative bubbles. But there are examples in history
where speculative bubbles have occurred and some analysts feel they are quite
common. There have been attempts to model speculative bubbles as movements
of y, along a self-fulfilling nonstationary (explosive) path. Blanchard and Watson
(1982) have developed a model of speculative bubbles in which there is a positive
probability that the bubble will burst. Flood and Garber (1980) have examined
whether the periods toward the end of the eastern European hyperinflations in the
1920s could be described as self-fulfilling speculative bubbles. To date, however,
the vast majority of rational expectations research has assumed that there is a
unique stationary solution. For the rest of this paper we assume that lcxl< 1, or
the equivalent in higher order models, and we assume that the solution is
stationary.
2010                                                                                   J. B. Taylor

2.1.5.      Finding   the solution in the case of anticipated              shocks

Consider now the case where the shock is anticipated k periods in advance and is
purely temporary. That is, u, = E,_~ so that 8,=1 and 8,=0 for i#k.         The
difference equations in the unknown parameters can be written as:

         Y, = "Y;+1      i = 0,1,2 ,...k-1.                                                (2.24)

                                                                                           (2.25)


         Yr+l =   ayi i=k+l,           k+2,....                                            (2.26)

The set of equations in (2.26) is identical in form to what we considered earlier
except that the initial condition is at k + 1. For stationarity we therefore require
that yk+r = 0. This implies from eq. (2.25) that yk = 6. The remaining coefficients
are obtained by working back using (2.24) starting with yk = S. This gives
Y~=Gc~~-‘, i=O,1,2 ,... k-l.
   The pattern of the y, coefficients is shown in Figure lc. These coefficients give
the impact of E, on JJ~+~,for s > 0, or equivalently the impact of the news that the
shock U, will occur k periods later. The size of y0 depends on how far in the
future the shock is anticipated. The farther in advance the shock is known (that is,
the larger is k), the smaller will be the current impact of the news.
Example

For the demand for money example we have

         p,=6[a%,+&1e          t-1
                                     + a..    +   “‘+(kpl)    +   &t-k].                   (2.27)

Substituting       (Y= /I/(1 + p), S =l/(l+             /I), and E, = u,+~ = mr+k into (2.27) we
get


         Pt=   (&$f( &)k-‘m”k-‘.                                                           (2.28)


Note how this reduces to pr = (1 + j3P’m, in the case of unanticipated shocks
(k = 0), as we calculated earlier. When the temporary increase in the money
supply is anticipated in advance, the price level “jumps” at the date of announce-
ment and then gradually increases until the money supply does increase. This is
illustrated in Figure 2c.
    Finally, we consider the case where the shock is anticipated in advance, but is
expected to be permanent or to phase-out gradually. Then, suppose that 0, = 0 for
Ch. 34: Stabilization    Policy in Macroeconomic     Fluctuations                   2011

i=l   , . . ., k - 1 and 8; = piPk for i 2 k. Eq. (2.7) becomes

      Yj = aYi+l           i=O,1,2       ,..., k -1,                              (2.29)
                 1        6 i-k
                          P               i=k,k+l,....                            (2.30)
      Y;+1 =3-               a

Note that eq. (2.30) is identical to eq. (2.10) except that the initial condition starts
at k rather than 0. The homogeneous part of (2.30) is

      y,‘+” =    IY!H)            i=k,k+l,....                                    (2.31)
                 a ’

In order to prevent the yitH) from exploding as i increases it is necessary that
Yk
   cH) = 0. Therefore yi(H)=Ofor i=k,k+l,....  The unknown coefficients h and
b of the particular solution y!‘) = hbiek are

      h=6(1-ap)-‘,
      b=p.                                                                        (2.32)

Since the homogeneous part is zero we have that

           aPi-k                i=k,k+l,....                                      (2.33)
      Yi= l-ap

The remaining coefficients can be obtained by using (2.29) backwards starting
with yk = 6(1- ap)-‘. The solution for y, is

                         ake,+ ak-l&,_l + ’ ‘.           +   a&t-k+1   +   Et-k


             + p&,-k-1      +    p*&,-k-2+ * * * )*                               (2.34)

After the immediate impact of the announcement, yt will grow smoothly until it
equals S(l- ap)-’ at the time that U, increases. The effect then phases out
geometrically. This pattern is illustrated in Figure Id.
Example
For the money demand model, the effect on the price level p, is shown in Figure
2d. As before the anticipation of an increase in the money supply causes the price
level to jump. The price level then increases gradually until the increase in money
actually occurs. During the period before the actual increase in money, the level
of real balances is below equilibrium because of the expected inflation. The initial
increase becomes larger as the phase-out parameter p gets larger. For the
permanent case where p = 1 the price level eventually increases by the same
amount that the money supply increases.
2012                                                                                          J. B. Taylor

2.1.6.            General ARMA processes for the shocks

The above solution procedure can be generalized to handle the case where (2.2) is
an autoregressive moving average (ARMA) model. We consider only unantic-
ipated shocks where there is no time delay. Suppose the error process is



an ARMA (p, q) model. The coefficients in the linear process for U, in the form
of (2.2) can be derived from:

                                mW,p)
         ej=#j+                        C          Pie,-1              j=o,1,2       ,.-.,q,
                                      i=l

                   miN_i.p)

         e,=             C             piej_i              j>q.                                   (2.36)
                         i=l



whtre q0 = 1. See Harvey (1981, p. 38), for example.
    Starting with j = M = max( p, q + 1) the P),.coefficients in (2.36) are determined
by a pth order difference equation. The p mrtial conditions (8,-r,. . . , OM_p) for
this difference equation are given by the p equations that preceed the 8,
equation in (2.36).
    To obtain the y, coefficients, (2.36) can be substituted into eq. (2.7). As before,
the solution to the homogeneous part is y,cH)= 0 for all i. The particular solution
to the non-homogeneous part will have the same form as (2.36) for j 2 M. That
is,


         Yj=       i           PiYj-1                 j=M,M+l              )... .                 (2.37)
                   i=l



The initial conditions ( yM_ .., yw_,,) for (2.37), as well as the remaining y
                                                             r,   .




values (Y~-~-~,...,  y,,) can then be obtained by substitution of 0; for i = 0,. . . , M
- 1 into (2.37). That is,


         Yi+l
                   =     iyi      -         $ji            i=O,l       )...) M-l.                 (2.38)

Comparing the form of (2.37) and (2.38) with (2.36) indicates that the y,
coefficients can be interpreted as the infinite moving average representation of an
ARMA (p, A4 - 1) model. That is, the solution for y, is an ARMA (p, A4 - 1)
model with an autoregressive part equal to the autoregressive part of the U,
process defined in eq. (2.35). This result is found in Gourieroux, Laffont, and
Monfort (1982). The methods of Hansen and Sargent (1980) and Taylor (1980a)
Ch. 34: Stabilization        Policy in Macroeconomic      Fluctuations                         2013

can also be used to compute the ARMA representations                        directly as summarized
in Section 2.4 below.
Example :         p=3,q=I
In this case M = 3 and eq. (2.36) becomes

      8,=1,
      @1= J/1+ Pi@,,
      8, = Piei+ P2@cl>
      6, = pie;-1 + pzei-2 + p3@i_s                       i = 3,4 )... .                     (2.39)

The y coefficients are then given by

      Yi= P 1-f-l        +     P2Yi-2     +   P3YI-3      i = 3.4 )... .                     (2.40)
              . . .                 . .
and the mitral conditions                      yO, yi and y2 are given by solving the three linear
equations




                                                                                             (2.41)




Eqs. (2.40) and (2.41) imply that yt is an ARMA (3,2) model.

2.1.7.    DiRerent viewpoint dates

In some applications of rational expectation models the forecast of future
variables might be made at different points in time. For example, a generalization
of (2.1) is

      Y, = yy,+,+                  OIYt+l          +   %EIY,      + Uf.                      (2.42)

Substituting for y, and expected y, from (2.4) into (2.42) results in a set of
equations for the y coefficients much like the equations that we studied above.
Suppose U, = PU,_~ + E,. Then, the equations for y are

      Yo=“lYl+h


      Yi+l    = 1 i
                       l-lx,
                      p--g              yi--$&                 i=1,2,....                    (2.43)
2014                                                                                                    J. B. Tuylor

Hence, we can use the same procedures                              for solving   this set of difference     equa-
tions. The solution is

         Yo = “ibp + 6,
         y, = bp’                  i =1,2 )... .

where           b = 6/(1-            (Ye- pa, - pal). Note that this reduces           to (2.13) when (Y*= (Ye
= 0.

2.1.8.          Geometric interpretation

The solution     of the difference eq. (2.7) that underlies   this technique   has an
intuitive graphical interpretation   which corresponds to the phase diagram method
used to solve continuous        time models with rational expectations.    [See Calvo
(1980) or Dixit (1980) for example]. Eq. (2.7) can be written

                                      1
         yi+l
                  -   yi   =
                                   i
                                     --1
                                     a     1
                                           yi+             i=O,l    )... .                                  (2.44)

The set of values for which y, is not changing are given by setting the right-hand
side of (2.44) to zero. These values of (yi, (3,) are plotted in Figure 3. In the case
where Bi = pi, for 0 < p -c 1 there is a difference equation representation   for Bi of
the form

         8;+i-ei=(p-1)ei,                                                                                   (2.45)

where 8, = 1. The set of points where fl is not changing is a vertical line at Bi = 0
in Figure 3. The forces which move y and 8 in different directions are also shown
in Figure 3. Points above (below) the upward sloping line cause y, to increase
(decrease).  Points to the right (left) of the vertical line cause ei to decrease
(increase). In order to prevent the yI from exploding we found in Section 2.1.3




                               I                       I
                                                       0                                  ei


Figure     3.     Illustration  of the rational    expectations solution and the saddle path. Along the saddle path
                        the motion is towards      the origin at geometric rate p. That is, 0, = PO,_ I.
Ch. 34: Stabilization Policy in Macroeconomic Fluctuations                                         2015

that it was necessary for yi = (6/l - (~p)e,. This linear equation is shown as the
straight line with the arrows in Figure 3. This line balances off the unstable
vertical forces and uses the stable horizontal forces to bring y, back to the values
yi = 0 and 0; = 0 and i + 00. For this reason it is called a saddle point and
corresponds to the notion of a saddle path in differential equation models [see
Birkhoff and Rota (1962), for example].
   Figure 3 is special in the sense that one of the zero-change lines is perfectly
vertical. This is due to the fact that the shock variable U, is exogenous to y,. If we
interpret (2.1) and (2.2) as a two variable system with variables y, and u, as the
two variables, then the system is recursive in that U, affects yt in the current
period and there are no effects of past y, on u,. In Section 2.2 we consider a more
general two variable system in which U, is endogenous.
   In using Figure 3 for thought experiments about the effect of one time shocks,
recall that yj is dy,+,/de, and ti, is drc,+,jde,. The vertical axis thereby gives the
paths of the endogenous variable y, corresponding to a shock E, to the policy eq.
(2.2). The horizontal axis gives the path of the policy variable. The points in
Figure 3 can be therefore viewed as displacements of y, and U, from their steady
state values in response to a one-time unit shock.
   The arrows in Figure 3 show that the saddle path line must have a slope greater
than zero and a slope less than the zero-change line for y. That is, the saddle path
line must lie in the shaded region of Figure 3. Only in this region is the direction
of motion toward the origin. The geometric technique to determine whether the
saddle path is upward or downward sloping is frequently used in practice to
obtain the sign of an impact effect of policy. [See Calvo (1980) for example].
   In Figure 4 the same diagram is used to determine the qualitative movement of
y, in response to a shock to u, which is anticipated k periods in advance and
which is expected to then phase out geometrically. This is the case considered




Figure 4. Illustration of the effect of an anticipated shock to U, which is then expected to be phased
out gradually  at geometric rate p. The shock is anticipated      k periods in advance. This thought
                           experiment corresponds to the chart in Figure l(d).
2016                                                                          .I. B. Taylor

above in Section 2.1.5. The endogenous variable y initially jumps at time 0 when
the future increase in u becomes known; it then moves along an explosive path
through period k when u increases by 1 unit. From time k on the motion is along
the saddle path as y and u approach their steady state values of zero.

2.1.9.       Nonstationary forcing variables

In many economic applications the forcing variables are nonstationary. For
example the money supply is a highly nonstationary series. One typically wants to
estimate the effects of changes in the growth rate of the money supply. What
happens when the growth rate is reduced gradually? What if the reduction in
growth is anticipated? Letting U, be the log of the money supply m,, these
alternatives can be analyzed by writing the growth rate of money as g, = m 1- m t _ 1
and assuming that

       g,-gt-l=P(gt-1-gt-*)+%k.
   Thus, the change in the growth rate is anticipated k periods in advance. The
new growth rate is phased in at a geometric rate p. By solving the model for the
particular solution corresponding to this equation, one can solve for the price
level and the inflation rate. In this case, the inflation rate is nonstationary, but the
change in the inflation rate is stationary.


2.2.     Bivariate models

Let yr, and y,, be given by

       Yl,   =   a1 E.h+
                     t
                                  1+   PlOY,,   +   P,lY,,-1 + 4%
       Y2t   =   a2J3.Yt   lr+1    +   P2Oh     +   P21h-l+    82%



where U, is a shock variable of the form (2.2). Model (2.46) is a special bivariate
model in that there are no lagged values of y,, and no lead values of yzr. This
asymmetry is meant to convey the continuous time idea that one variable ylt is a
“jump” variable, unaffected by its past while y21 is a more slowly adjusting
variable that is influenced by its past values. Of course in discrete time all
variables tend to jump from one period to the next so that the terminology is not
exact. Nevertheless, the distinction is important in practice. Most commonly, y,,
would be a price and y,, a stock which cannot change without large costs in the
short run.
   We assume in (2;46) that there is only one shock u,. This is for notational
convenience. The generalization to a bivariate shock (ulrr u2t) where ulr appears
Ch. 34: Stabilization   Policy in Macroeconomic   Fluctuations                2017

in the first equation and uzl in the second equation is straightforward, as should
be clear below.
   Because (2.46) has this special form it can be reduced to a first order
2-dimensional vector process:




This particular way to construct a first order process follows that of Blanchard
and Kahn (1980). A generalization to the case of viewpoint dates earlier than time
t is fairly straightforward. If yit_i or E,y,,+, also appeared in (2.46) then a
first-order model would have to be more than 2 dimensional.

2.2. I.   Some examples

There are many interesting examples of this simple bivariate model. Five of these
are summarized below.
Example I:         Exchange rate overshooting

Dombusch (1976) considered the following type of model of a small open
economy [see also Wilson (1979) and Buiter and Miller (1983)]:


      m,-p,=-a              Ee,+i--e,     ,
                          ( I            1

      Pt-Pt-l=P(et-Pt),

where e, is the log of the exchange rate, and pI and m, are as defined in the
Cagan model. The first equation is simply the demand for money as a function of
the nominal interest rate. In a small open economy with perfect capital mobility
the nominal interest rate is equal to the world interest rate (assumed fixed)
plus the expected rate of depreciation E,e,+i - e,. The second equation describes
the slow adjustment of prices in response to the excess demand for goods. Excess
demand is assumed to be a negative function of the relative price of home goods.
Here prices adjust slowly and the exchange rate is a jump variable. This model is
of the form (2.47) with yit = e,, y,, = p*, a1 =l, pi0 = -l/a,  pii = 0, 6, =1/c&
a2 = 0, &a = P/(1 + P), P2i = l/(1 + P), 62 = 0.
Example 2:         Open economy portfolio balance model

Kouri (1976), Rodriquez (1980);and Papell(1984) have considered the following
type of rational expectations model which is based on a portfolio demand for
2018                                                                                                J. B. Tqlor

foreign      assets rather            than on perfect capital   mobility:


       et + f, = a Ee,+l               - e, + u,:
                        (                  i

       r,-r,_I=P:,.

The first equation represents the demand for foreign assets f, (in logs) evaluated
in domestic currency, as a function of the expected rate of depreciation.  Here U,
is a shock. The second equation is the “current account” (the proportional  change
in the stock of foreign assets) as a function of the exchange rate. Prices are
assumed to be fixed and out of the picture. This model reduces to (2.47) with
       y2, = f,, q = G+ a>, PI0= l/O + ~1, PII = 0, 4 = l/l + a, a2= 0,
ylr = e,,
Pm= P, Pz1=- 1, 6, = 0.
Example 3:             Money and capital

Fischer      (1979) developed              the following    type of model of money          and capital.


       Y, = yk t-1,

       rt = - (l- Y)k,-1,

       m,- pt= -alEr,+l-a2                      i EP,+, - Pt)+Yv
                                  f               t

       kt = b,Ert+,          +b, ( Ept+l - Pt)+Yt.
               t                   t

The first two equations describe output y, and the marginal efficiency of capital rt
as a function   of the stock of capital at the end of period t - 1. The third and
fourth equations    are a pair of portfolio demand equations for capital and real
money balances as a function of the rates of return on these two assets. Lucas
(1976) considered    a very similar model. Substituting the first two equations into
the third and fourth we get model (2.47) with


                                                           a2               -al(l-v)
       Yl, =     Pt,        Y2t = kt,           a1=l+2               &II=        1t-a         ’
                                                                                        2



                            a,=        1
       PII   =   03
                                       l+a,’        0L2= (l+b&))’


       &o=        (1+b;(:-y))’                   p21= (I+b,;l-y)).
Ch. 34: Stuhilization         Policy in Macroeconomic    Fluctuations                     2019

Example 4:                Staggered contracts model
The model yt = atE,y,+t + a,y,_ 1 + 6~4, of a contract wage y, can occur in a
staggered wage setting model as in Taylor (1980a). The future wage appears
because workers and firms forecast the wage set by other workers and firms. The
lagged wage appears because contracts last two periods. This model can be put in
the form of (2.47) by stacking the y’s into a vector:




Example 5:                Optimal control problem
Hansen and Sargent (1980) consider the following optimal control problem. A
firm chooses a contingency plan for a single factor of production (labor) n, to
maximize expected profits.



         Yjpj[ P*+jYt+j - :(“r+j                   -    n*+j-l   I’-    w*+jnt+j]   3




subject to the linear production function y, = yn,. The random variables p, and
w, are the price of output and the wage, respectively. The first order conditions of
this maximization problem are:




This model is essentially the same as that in Example (4) where U, = wI - ypl.

2.2.2,         Finding the solution

Equation (2.47) is a vector version of the univariate eq. (2.1). The technique for
finding a solution to (2.47) is directly analogous with the univariate case.
   The solution can be represented as


         Ylt=       EYliEI-i?
                    i=O
                                                                                        (2.48)
         Y,,    =    E    Y*rEt-i.
                    i=O
2020                                                                      J. B. Taylor

These representations for the endogenous variables are an obvious generalization
of eqs. (2.4).
   Utilizing matrix notation we rewrite (2.47) as

       Bz, = CEz,,,               + au,,                                      (2.49)
               t
       Ez r+i = AZ, +da,,                                                     (2.50)
        1

where the definitions of the matrices B and C, and the vectors z, and 6 in (2.49)
should be clear, and where A = C-‘B and d = - C-‘6. Let y, = (yli,y2,-J’,
i=O,1,2,...  and set y2,_r = 0. Substitution of (2.2) and (2.48) into (2.50) gives

       Yi+l
                =       Ay, + de;          i=O,1,2    ,....                   (2.51)

Eq. (2.51) is analogous to eq. (2.7). For i = 0 we have three unknown elements of
the unknown vectors y0 = (yr,,,O)’ and yr = (yrr, y&‘. The 3 unknowns are ylo,
yii and yZo. However, there are only two equations (at i = 0) in (2.51) that can be
used to solve for these three parameters. Much as in the scalar case considering
i = 1 gives two more equations, but it also gives two more unknowns ( yr2, y2r); the
same is true for i = 2 and so on. To determine the solution for the y, process we
therefore need another equation. As in the scalar case this third equation comes
by imposing stationarity on the process for y,, and yzr or equivalently in this
context by preventing either element of yj from exploding. For uniqueness we will
require that one root of A be greater than one in modulus, and one root be less
than one in modulus. The additional equation thus comes from choosing yr =
(yir, yZo)’so that yi does not explode as i + co. This condition implies a unique
linear relationship between yir and yZo. This relationship is the extra equation. It
is the analogue of setting the scalar yi = 0 in model (2.1).
   To see this, we decompose the matrix A into H- ‘A H where A is a diagonal
matrix with Xi and X, on the diagonal. H is the matrix whose rows are the
characteristic vectors of A. Assume that the roots are distinct and that IX,1> 1
and 1X,1< 1. Let pLi= (pii, pZi)’ = Hy,. Then the homogeneous part of (2.51) is

       Yi+l     =       H-‘AHy;            i =1,2 3.e.9                       (2.52)

so that

       Pi+1     =       A/.$        i=1,2 >.*.,

or

       Pli+l        =    ~1Pli       i=1,2    >--.,
                                                                              (2.53)
       p2;+1=             X2P2;       i =1,2 )... .
Ch. 34: Stabilization         Policy in Macroeconomic    Fluctuations                     2021

For stability of pli as i + 00 we therefore require that pii = 0 which in turn
implies that pii = 0 for all i > 1. In other words we want

      ccl,   =   bYll+          h2Y20   =   0,                                         (2.54)

where (hi,, hi,) is the first row of H and is the characteristic vector of A
corresponding to the unstable root A,. Eq. (2.54) is the extra equation. When
combined with (2.51) at i = 0 we have 3 linear equations that can be solved for
yic, yii and yzo. From these we can use (2.51) or equivalently (2.53) to obtain the
remaining yi for i > 1. In particular pli = 0 implies that

                    h
      Yli = - jfY2i-1                   i=1,2,....,       *                            (2.55)
                         11



From the second equation in (2.53) we have that



Substituting         for yii+ i and yii from (2.55) this gives

      Y2i+l= ‘2Y2i                  i=O,1,2 ,....                                      (2.56)

Given the initial values y2i we compute the remaining coefficients from (2.55) and
(2.56).

2.2.3.       The solution in the case of unanticipated shocks

When the shock U, is unanticipated and purely temporary,                0, = 1 and di = 0 for
all i > 0. In this case eq. (2.51) for i = 0 is

      yll = allylo + di,
      Y20= a2lYlo + d29                                                                (2.57)

and the difference equation described by (2.51) for i > 0 is homogeneous. Hence
the solution given by (2.55) (2.56), and (2.57) is the complete solution.
   For the more general case where 13,= pi, eq. (2.57) still holds but the difference
equation in (2.51) for i 2 1 has a nonhomogeneous part. The particular solution to
the nonhomogeneous part is of the form y,“) = gb’ where g is a 2 x 1 vector.
Substituting this form into (2.51) for i 2 1 and equating coefficients we obtain the
particular solution

      vi”‘=       (PI- /l-id+,                   i=1,2     )... .                      (2.58)
2022                                                                              J. B. Ta.vlor

Since eq. (2.55) is the requirement for stability of the homogeneous   solution, the
complete solution can be obtained by substituting      y$” = yll - y$” and yif) =
y2,, - ~4:) into (2.54) to obtain


                    cm=      _   !p(Y2,_yp),                                          (2.59)
         Y11-     Yll
                                   11


Eq. (2.59) can be combined with (2.57) to obtain yr,,, ytI, and yzO. The remaining
coefficients are obtained by adding the appropriate     elements of particular solu-
tions (2.58) to the homogeneous   solutions of (2.56) and (2.57).

2.2.4.       The solution in the case of anticipated      shocks

For the case where the shock is anticipated       k periods in advance, but is purely
temporary (6, = 0 for i = 1,. . . , k - 1, 0, = 0 for i = k + 1,. . . ), we break up the
difference eq. (2.51) as:


         Y,+l=      45           i=O , 1 ,*.-, k-l.                                   (2.60)

         ~k+l=      AY, + d.                                                          (2.61)

         ~i+l= AY;               i=k+l,k+2,....                                       (2.62)

Looking     at the equations   in (2.62) it is clear that for stationarity,    yk+l =
(ylk+ 1, yzk)’ must satisfy the same relationship  that the vector y1 satisfied in eq.
(2.55). That is,


                     -- h                                                             (2.63)
         Ylk+l=           j,ff Y2k’




Once       Y2k     and  Ylk+1  have been determined      the y values   for   i > k can    be
computed          as above in eqs. (2.55) and (2.56). That is,

                          h 12
         Ylr+ 1 =    -    hY2i            i=k     ,*.e,
                            11


         y2i+1=      X2Y2i          i=k    )... .                                     (2.65)

To determine  y2k and ylk+ 1 we solve eq. (2.63) jointly with the 2( k + 1) equations
in (2.60) and (2.61) for the 2(k + l)+l   unknowns      yI1 ,..., ylk+l and yzo,. .., yzh.
(Note how this reduces to the result obtained for the unanticipated         case above
when k = 0). A convenient    way to solve these equations is to first solve the three
Ch. 34: Stabilization Policy in Macroeconomic Fluctuations                               2023

equations consisting of the two equations from:

     yk+l=     Ak+'y,,+     d,                                                        (2.66)

(obtained by “forecasting” yi out k periods) and eq. (2.61) for yzk, ylk+r and
yra. Then the remaining coefficients can be obtained from the difference equations
in (2.60) starting with the calculated value for yIO.
   The case where ei=O for i=l,...,     k-l and t3k=pk-r for i=k, k-l canbe
solved by adding the particular solution to the nonhomogeneous equation

     yj+l = Ay, +dp(‘-k)            i=k,k+l,k+2              ,...,                    (2.67)

in place of (2.62) and solving for the remaining coefficients using eqs. (2.60) and
(2.61) as above. The particular solution of (2.67) is

     y,‘p’= (PI-      A)-‘dp’-k          i=k,k+l,k+2                 ,....            (2.68)


2.2.5.   The exchange rate overshooting example

The preceding calculations can be usefully illustrated with Example 1 of Section
2.2.1.: the two variable “overshooting” model in which the exchange rate (yr, = e,)
is the jump variable and the price level (yzt = p,) is the slowly moving variable.
For this model eq. (2.50) is


                                                                                      (2.69)


where the matrix


                                                                                      (2.70)



and the vector d = ( - l/cu,O)‘. Suppose that (Y= 1 and /3 = 1. Then the character-
istic roots of A are

     A =1*     -0.707.                                                                (2.71)

The characteristic       vector .associated with the unstable root is obtained from

     h,, &)A = hh,, h,,),                                                             (2.72)
2024                                                                                                             J. B. Tqdor

this gives - h,,/h,, = -0.414 so that according to eq. (2.56) the coefficients of
the (homogeneous) solution must satisfy

       y,;+ t = - 0.414yz;                i=O,l,....                                                                    (2.73)

Using the stable root we have

       ~z,+ 1= 0.293~,;               i=O,l           )... .                                                            (2.74)

The particular          solution is given by the vector (PI-                      A)-’ dplWk as in eq. (2.68).
That is

                           (0.5 - p)/Pk
                                                                    i=k,k+l,k+2            ,...,                        (2.75)
       ‘?=         (1.5-    p)(O.5- p)-0.25

                                                                     i = k, k +l, k +2 ,...,                            (2.76)


where k is the number of periods in advance that the shock to the money supply
is anticipated (k = 0 for unanticipated shocks).
   In Tables 2, 3, and 4 and in Figures 5, 6, and 7, respectively, the effects of
temporary unanticipated money shocks (k = 0, p = 0), permanent unanticipated
money shocks (k = 0, p = l), and permanent money shocks anticipated 3 periods


                                                             Table 2
             Effect of an unanticipated           temporary increase in money on the exchange            rate and
                                                 the price level (k = 0, p = 0).

   Period after shock:                     i               0             1           2                   3                4

   Effect on exchange rate:               Yl,            0.59         -0.12        - 0.04             - 0.01            -0.00
   Effect on price level:                 -rzr           0.29            0.09        0.03               0.01               0.00




                                                        Table 3
                Effect of unanticipated    permanent increase in money on the exchange               rate and
                                            the price level (k = 0, p = 1).

       Period    after shock:                     i             0            1      2                3              4

       Effect on exchange rate:                                                     1.04             1.01          1.00
          particular solution:                                                      1                1             1
          homogeneous     solution:                                                 0.04             0.01          0.00
       Effect on price level:                                                       0.97             0.99          1.00
          particular solution:                                                      1                1             1
          homogeneous     solution:                                               - 0.03           - 0.01       -0.00
Ch. 34: Stabilization Policy in Macroeconomic Fluctuations                                                                           2025

                                                           Table 4
   Effect of a permanent      increase        in money anticipated 3 periods in advance                    on the exchange    rate
                                              and the price level (k = 3, p = 1).

  Period   after the shock:                        i          0        1         2       3             4           5           6

  Effect on the exchange rate:                yr          0.28     0.43      0.71        1.21          1.06        1.02         1.00
     particular solution:                     YliCP)          -        -         -       -             1.00        1.00         1.00
     homogeneous     solution:                &W            -        -         -        -              0.06        0.02         0.01
  Effect on the price level:                              0.14     0.28      0.50       0.85           0.96        0.99         1.00
     particular solution:                                                               1.00           1.00        1.00         1.00
     homogeneous     solution:                                                       -0.15           - 0.04      - 0.01      -0.00




                                                       Impact on the exchange rate
                                       1.0 -


                                 Yli




                                         -1               0        1         2       3          4i




                                                       Impact on the price level
                                       1 .o
                                               t




           Figure   5.   Temporary
                                       OJL                0

                                              unanticipated
                                                                    1

                                                                  increase
                                                                             2       3

                                                                             in money.
                                                                                                4i
2026                                                                                J. B. Tqvlor

                                                    Impact on the exchange rate

                         71 i



                          1.0




                                                I          I   I      I     I
                                             0             1   2      3     4i




                                           Impact on the price level
                           ,,O_-----




                         YZi




                          o.5          (--
                          0
                               -1
                                    L-L     0
                                                       I

                                                       1
                                                               I
                                                               2     3
                                                                             I
                                                                            4 i

                   Figure 6.           Permanent unanticipated increase in money.



in advance (k = 3, p = 1) are shown. In each case the increase in money is by 1
percent.
   A temporary unanticipated increase in money causes the exchange rate to
depreciate (e rises) and the price level to increase in the first period. Subse-
quently, the price level converges monotonically back to equilibrium. In the
second period, e falls below its equilibrium value and then gradually rises again
back to zero (Table 2 and Figure 5).
   A permanent unanticipated increase in money of 1 percent eventually causes
the exchange rate to depreciate by 1 percent and the price level to rise by 1
percent. But in the short run e rises above the long-run equilibrium and then
gradually falls back to zero. This is the best illustration of overshooting (Table 3
and Figure 6).
Ch. 34: Stabilization   Policy in Macroeconomic   Fluctuations                               2021


                                     Impact on the exchange rate




                                      Impact on the price level




                            Y2i



                             0.5 -




                                                                         ,
                                                       2         3   4   5 i

                Figure 7.   Permanent increase in money, anticipated 3 periods in advance.




   If the increase in the money supply is anticipated in advance, then the price
level rises and the exchange rate depreciates at the announcement date. Subse-
quently, the price level and e continue to rise. The exchange rate reaches its
lowest value (e reaches its highest value) on the announcement date, and then
appreciates back to its new long-run value of 1 (Table 4 and Figure 7). Note that
p and e are on explosive paths from period 0 until period 3.


2.2.6.     Geometric interpretation

The solution of the bivariate model has a helpful geometric interpretation.
Writing out eq. (2.51) with fli = 0 in scalar form as two different equations and
2028                                                                                                        J. B. Taylor

subtracting       yri and yzi_ 1 from the first and second equation respectively results in

         AYli+l=    Y1;+1 -Yli=                (all-l)Yli        + al*Y2i-13

         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                                                    (2.77)

  According to (2.77) there are two linear relationships between yli and y2r_1
consistent with no change in the coefficients: Ayli=r = 0 and Ay2, = 0. For
example, in the exchange rate model in eq. (2.69), the equations in (2.77) become

                              P                           1
         AY1i+ 1=
                     “(l+@y”+                         ar(1+p)Y2”’
                                                                                                                (2.78)




                                       4


                        Yli




                                                                       Yli=-o       YZi-1
                                       I                 I
                                                         0                                  YZi-1

Figure 8. Geometric     interpretation of the solution in the bivariate model. The darker line is the
    saddle point path along which the impact coefficients converge to the equilibrium value of (0,O).



                                           4
                                  71   i

                                  0.2 -




                              -0.2         1                 I                  I
                                       -0.2    -0.1          0   0.1       0.2                      Y2i-1


Figure     9.   Solution  values for the case of temporary-unanticipated       shocks. (k = 0, p = 0). The
                       numbered points are the values of i. See also Table 2 and Figure 5.
Ch. 34: Stabilization           Policy in Macroeconomic   Fluctuations

The two no-change lines are

      Yl, = -             LY2i-lY
                          P                                                                                (2.79)
      Yli    =         Y2i-19


and are plotted in Figure 8. The arrows in Figure 8 show the directions of motion
according to eq. (2.78) when the no-change relationships in (2.79) are not
satisfied. It is clear from these arrows that if the y coefficients are to converge to


                 1.6

            71i

                 1.4




                 1.2




                 1 .o




             0.8




              0.6        L




                                    I          I           I               I            I             I
            -0.2                                                               0.8     1.0           1.2
                       -0.2        0         0.2          0.4            0.6
                                                                                             %!i-1


Figure 10.              Solution values for a permanent unanticipated increase in the money supply. The open
                                      circles give the ( yIi, vz,) pairs starting with i = 0.
2030                                                                                                           J. R. Tqhr

               1.4


         Yli         r




               0.8 -



                                                                                               I
               0.6 -                                                                           I
                                                                                               I
                                                                                               I
                                                                                               I
                                                                                               I
               0.4 -                                                                           I
                                                                                               I
                                                                                               I
                                                                                               I
                                                                                               I
                                                                                               I
                                                                                               I
                                                                                               I
                                                                                               I




                                                                                               I
         -0.2                   I             I            I____L_                  I          I                I
             -0.2               0            0.2          0.4      0.6             0.8        1.0              1.2
                                                                                                     YZi-1


Figure    11.        Solution   values for an anticipated      permanent     increase in the money   supply.    The open
                                      circles give the y,, , yzzpairs starting with i = 0.




their equilibrium value (0,O) they must move along the “saddle point” path
shown by the darker line in Figure 8. Points off this line will lead to ever-increas-
ing values of the y coefficients. The linear combination of yli and yzi_i along this
saddle point path is given by the characteristic vector associated with the unstable
root A, as given in general by eq. (2.55) and for this example in eq. (2.73). Note
how Figure 8 immediately shows that the saddle point path is downward sloping.
In Figure 9 the solution values for the impacts on the exchange rate and the price
level are shown for the case of a temporary shock as considered in Table 2 and
Figure 5. In Figures 10 and 11, the solution values are shown for the case where
the increase in money is permanent. The permanent increase shifts the reference
point from (0,O) to (1,l). The point (1,l) is simply the value of the particular
Ch. 34: S~uhilrzation   Policy in Macroeconomic       Fluctuatior~s                     2031

solution    in this case. Figure 10 is the case where the permanent         increase is
unanticipated;     Figure 11 is the anticipated case.
   Note that these diagrams do not give the impact on the exchange rate and the
price level in the Same period; they are one period out of synchronization.      Hence,
the points do not correspond       to a scatter diagram of the effects of a change in
money on the exchange rate and on the price level. It is a relatively simple matter
to deduce a scatter diagram as shown by the open circles in Figures 10 and 11.



2.3.    The use of operators, generating functions, and z-transforms

As the previous Sections have shown, the problem of solving rational expectations
models is equivalent    to solving nonhomogeneous         deterministic    difference equa-
tions. The homogeneous     solution is obtained simply by requiring that the stochas-
tic process for the endogenous variables be stationary. Once this is accomplished,
most of the work comes in obtaining         the particular solution to the nonhomoge-
neous part. Lag or lead operators, operator polynomials,             and the power series
associated with these polynomials     (i.e. generating functions or z-transformations)
have frequently     been found useful in solving the nonhomogeneous                  part of
difference equations [see Baumol(1970),        for economic examples]. These methods
have also been useful in rational           expectations   analysis.    Futia (1981) and
Whiteman    (1983) have exploited the algebra of z-transforms            in solving a wide
range of linear rational expectations models.
   To illustrate the use of operators, let FSxt = xt+$ be the forward lead operator.
Then the scalar equation in the impact coefficients that we considered in eq. (2.7),
can be written

       (l-cuP)y,=M,                i=O,1,2        ,....                              (2.80)

Consider the case where 0, = pi and solve for yi by operating         on both sides by the
inverse of the polynomial (1 - crF). We then have

             Sp’
       y;= l-&7

         =-      6P’
                            i=O,1,2....                                              (2.81)
              l-ap

the last equality follows from the algebra of operator polynomials           [see for
example Baumol (1970)]. The result is identical to what we found in Section 2.1
using the method of undetermined      coefficients to obtain the particular solution.
The procedure    easily generalizes to the bivariate case and yields the particular
2032                                                                        J. B. Taylor

solution shown in eq. (2.58). It also generalizes to handle other time series
specifications of Bi.
   The operator notation used in (2.80) is standard in difference equation analysis.
In some applications of rational expectations models, a non-standard operator
has been used directly on the basic model (2.1). To see this redefine the operator
F as FE,y, = E,y,+,. That is, F moves the date on the variable but the viewpoint
date in the expectation is held constant. Then eq. (2.1) can be written (note that
E,Y, = Y,):

       (1-aF)vy,=S,.                                                           (2.82)


Formally, we can apply the inverse of (1 - aF) to (2.82) to obtain

       Ey,=6(1-aF)-‘u,
        I

            =S(lft~F+(aF)~+       -)ut

                  u,+cKEu,+~+(w*Eu,+~+           ..a
                                                       1

            =6(u,+apu,+(ap)2u,+          . ..)
                 s
            = l_%’                                                             (2.83)


and where we again assume that U, = put-i + cl. Eq. (2.83) gives the same answer
that the previous methods did (again note that E,y, = y,). As Sargent (1979, p.
337) has discussed, the use of this type of operator on conditional expectations
can lead to confusion or mistakes, if it is interpreted as a typical lag operator that
shifts all time indexes, including the viewpoint dates. The use of operators on
conventional difference operations like (2.6) is much more straightforward, and
perhaps it is best to think of the algebra in (2.82) and (2.83) in terms of (2.80) and
(2.81).
   Whiteman’s (1983) use of the generating functions associated with the operator
polynomials can be illustrated by writing the power series corresponding to eqs.
(2.2) and (2.4):


       Y(Z) = f YiZi,
               i=O

       e(z) = f      B,z’.
               i=O
Ch. 34: Stabilization       Policy in Macroeconomic   Fluctuations                2033

These are the z-transforms [see Dhrymes (1971) for a short introduction to
z-transforms and their use in econometrics]. Equating the coefficients of E,_, in
eq. (2.6) is thus the same as equating the coefficients of powers of z. That is, (2.6)
means that

       y(z) = (Yz-‘(u(z&J+~~(z).                                               (2.84)

Solving (2.84) for y(z) we have

       y(Z)=(l-Cx-rz)-l(yo-&x-lze(z)).                                         (2.85)

As in Section 2.1, eq. (2.85) has a free parameter y,, which must be determined
before y(z) can be evaluated. For Y! to be a stationary process, it is necessary that
y(z) be a convergent power series (or equivalently an analytic function) for
]z( ~1. The term (l- a-‘~)-~ on the right-hand side of (2.85) is divergent if
(Y-’ > 1. Hence, the second term in parentheses must have a factor to “cancel out”
this divergent series. For the case of serially uncorrelated shocks, e(z) is a
constant 0, = 1 so that it is obvious that y0 = 6 will cancel out the divergent
series. We then have y(z) = 6 which corresponds with the results in Section 2.1.
Whiteman (1983) shows that in general y(z) will be convergent when ]a] < 1 if
y0 = M(a). For the unanticipated autoregressive shocks this implies that y(z) =
S(1 - par)-‘(1 - pz) which is the z-transform of the solution we obtained earlier.
When ]a( > 1 there is no natural way to determine yO, so we are left with
non-uniqueness as in Section 2.1.


2.4.    Higher order representations and factorization techniques

We noted in Section 2.2 that a first-order bivariate model with one lead variable
could be interpreted as a second-order scalar model with a lead and a lag. That is,

       Y, = o,~y,+,          + azl)t-1+        suv                             (2.86)

can be written as a bivariate model and solved using the saddle point stability
method. An alternative approach followed by Sargent (1979), Hansen and
Sargent (1980) and Taylor (1980a) is to work with (2.86) directly. That the two
approaches give the same result can be shown formally.
  Substitute for y,, y,_,, and E,y,+, in eq. (2.86) using (2.4) to obtain the
equations

                                                                               (2.87)


       Yi+l
              =   tyi   -     zyi_,       -   $ei     i=1,2 )... .             (2.88)
2034                                                                       J. B. Taylor

As above, we need one more equation to solve for all the y coefficients. Consider
first the homogeneous part of (2.88). Its characteristic polynomial is

                1         a2
       z2 --z+--,                                                              (2.89)
               a1         a1



which can be factored into

       (Ai - 402           -   47
                                                                               (2.90)

where A, and A, are the roots of (2.89). The solution to the homogeneous part is
Y,(H) = klAil + k2Ai2. As we discussed above, in many economic applications one
root, say hi, will be larger than 1 in modulus and the other will be smaller than 1
in modulus. Thus, the desired solution to the homogeneous part is achieved by
setting k, = 0 so that y,cH)= k,X’, where k, equals the initial condition ydH).
Equivalently we can interpret the setting of k, = 0 as reducing the characteristic
polynomial (2.89) to (z - h2). Thus, the y coefficients satisfy

       Y, = X,Y;-,             i=1,2,...       .                               (2.91)

Equivalently, we have “factored out” (z - A,) from the characteristic polynomial.
  For the case where U, is uncorrelated so that 0, = 0 for i > 0, difference
equation in (2.88) is homogeneous. We can solve for y0 by using yi = h2y0 along
with eq. (2.87). This gives y,, = S(l- cy,X,)-‘X’, i = O,l,. . .
  To see how this result compares with the saddle-point approach, write (2.88) as


                                                                               (2.92)


The characteristic equation of the matrix A is h2 - (l/a,)h - (Y~/(Y~= 0. Hence,
the roots of A are identical to the roots of the characteristic polynomial associated
with the second-order difference eq. (2.88). [This is a well-known result shown for
the general pth order difference equation in Anderson (1971)].
   The characteristic vector of the matrix A associated with the unstable root Xi
is found from the equation (hi,, h,,)A = X1(hi,, hi,). Thus, the saddle point path
is given by

       y;=-~y,l=                        1
                     11             i   --x1
                                        a1         1
                                                   Y,-1.                       (2.93)


   For the two methods to be equivalent, we need to show that (2.91) and (2.93)
are equivalent, or that h, = l/a, - Xi. This follows immediately from the fact
Ch. 34: Stabilization Policy in Macroeconomic Fluctuations                            2035

that the sum of the roots (A, + A,) of a second-order polynomial equals the
coefficients of the linear term in the polynomial: A, + X2 = l/(~r.
   For the case where fIi = pi, we need to compare the particular solutions as well.
For the second-order scalar model we guess the form y/P) = ab’. Substituting this
into (2.88) we find that b = p and u = 6(1- (~rp - cy2p?‘))‘. To see that this
gives the same value for the particular solution that emerges from the matrix
formulation in eq. (2.58), note that



      (PI-       A)-‘dp’=


                                                      I          6 \
                                             1            -q
                            =                                          pi.          (2.94)
                                 P2-$p+012                _s
                                                 a1   \        “l/



Eq. (2.94) gives the particular solution for the vector (yi(‘), y,‘!‘,‘), which corre-
sponds to the vector y!‘
                      1 ) in eq. (2.58). Hence

                       - pcll, ‘Sp’
     y/P’=
                 p2 - pa;   l+    a2a;       l


             =           6P’
                 1-   ‘ylp - (Y2p-l      ’


which is the particular solution obtained from the second-order scalar representa-
tion.
   Rather than obtaining the solution of the homogeneous system by factoring the
characteristic equation, one can equivalently factor the polynomial in the time
shift operators. Because the operator polynomials also provide a convenient way
to obtain the nonhomogeneous solution (as was illustrated in Section 2.3), this
approach essentially combines the homogeneous solution and the nonhomoge-
neous solution in a notationally and computationally convenient way.
   Write (2.88) as


                                                                                    (2.95)


Let H(L) = L-l -l/cur              + ((Y~/(Y~)L be the polynomial on the left-hand side of
2036                                                                       J. B. Tuylor

(2.95) and let P(z) = z* -l/((~r)z + (Y~/oL~be the characteristic    polynomial in
(2.89). The polynomial H(L) can be factored into

       P(l- W’)(l-              w,                                             (2.96)

where (p = -p-l,    $ = - p-&(~;l,    and where I_Lis one of the solutions of
P(p) = 0; that is one of the roots of P(e). This can be seen by equating the
coefficient of H(L) and the polynomial in (2.96). Continuing to assume that only
one of the roots of P( .) is greater than one in modulus (say A,) we set
+ = A;’ < 1. Since the product of the roots of P( .) equals a+~;’ we immediately
have that # = A,. Thus, there is a unique factorization of the polynomial with +
and J, both less than one in modulus.
   Because IJ = A,, the stable solution (2.97) to the homogeneous difference
equation can be written

       (l-     Ir/L)y!H)=      0.                                              (2.97)

The particular solution also can be written using the operator notation:

                             SCY,lp’
       yy)     =                                                               (2.98)
                   /.l(l-   +P)(l-      l/L) .

The complete solution is given by yj = y/H) + y:” which implies that

       (l-x,L)yi=             (l-X,L)y~H)+(l-X,L_‘)y,(P).                      (2.99)

The first term on the right-hand side of (2.99) equals zero. Therefore the complete
solution is given by

                                    &Y;‘p’
       Yi='ZYi-1+
                            x,(1 - x,‘r’)
                                SCX;‘p’
             = A*yi_l +                                                       (2.100)
                            A,(1 - px;r> *

This solution is equivalent to that derived by adding the particular solution in
(2.95) to the solution of the homogeneous solution of (2.91).
   Note that this procedure or solving (2.95) can be stated quite simply in two
steps: (1) factor the lag polynomial into two stable polynomials, one involving
Ch. 34: Stabilization Policy in Macroeconomic Fluctuations                         203-I

positive powers of L (lags) and the other involving negative powers of L (leads),
and (2) operate on both sides of (2.95) by the inverse of the polynomial involving
negative powers of L.
   It is clear from (2.94) that the yj weights are such that the solution for y, can be
represented as a first-order autoregressive process with a serially correlated error:


       y, =    x,y,_,+ Gq’(& - p)-lu,,                                         (2.101)

where

       24, =   pu,_1+    E,.



   In the papers by Sargent (1979) Taylor (1980a) and Hansen and Sargent
(1980) the difference equation in (2.95) was written y, = E,y,+, and ei = E,u,+;, a
form which can be obtained by taking conditional expectations in eq. (2.86). In
other words rather than working with the moving average coefficients they worked
directly with the conditional expectations. As discussed in Section 2.3 this
requires the use of a non-standard lag operator.



2.5.     Rational expectations solutions as boundary value problems

It is useful to note that the problem of solving rational expectations models can
be thought of as a boundary value problem where final conditions as well as
initial conditions are given. To see this consider the homogeneous equation


       Yi+l
               =   iYi     i=O,l   )... .                                      (2.102)


The stationarity conditions place a restriction on the “ final” value limj ~ ,yi = 0
rather than on the “initial” value y,,. As an approximation we want y, = 0 for
large j. A traditional method to solve boundary value problems is “shooting”:
One guesses a value for y,, and then uses (2.102) to project (shoot) a value of y,
for some large j. If the resulting y, # 0 (or if y, is further from 0 than some
tolerance range) then a new value (chosen in some systematic fashion) of y0 is
tried until one gets yj sufficiently close to zero. It is obvious in this case that
y0 = 0 so it would be impractical to use such a method. But in nonlinear models
the approach can be quite useful as we discuss in Section 6.
2038                                                                       J. B. Taylor

  This approach obviously generalizes to higher order systems; for example the
homogeneous part of (2.88) is


       Y,+l=   $Yi-   ZYi-1 i=O,1,2 ,....                                    (2.103)


with y_ t = 0 as one initial condition and y, = 0 for some large j as the one
“final” condition. This is a two point boundary problem which can be solved in
the same way as (2.102).


3.     Econometric evaluation of policy rules

Perhaps the main motivation behind the development of rational expectations
models was the desire to improve policy evaluation procedures. Lucas (1976)
argued that the parameters of the models conventionally used for policy evalua-
tion - either through model simulation or formal optimal control -would shift
when policy changed. The main reason for this shift is that expectations mecha-
nisms are adaptive, or backward looking, in conventional models and thereby
unresponsive to those changes in policy that would be expected to change
expectations of future events. Hence, the policy evaluation results using conven-
tional models would be misleading.
   The Lucas criticism of conventional policy evaluation has typically been taken
as destructive. Yet, implicit in the Lucas’ criticism is a constructive way to
improve on conventional evaluation techniques by modeling economic phenom-
ena in terms of “structural” parameters; by “structural” one simply means
invariant with respect to policy intervention. Whether a parameter is invariant or
not is partly a matter of researcher’s judgment, of course, so that any attempt to
take the Lucas critique seriously by building structural models is subject to a
similar critique that the researcher’s assumption about which parameters are
structural is wrong. If taken to this extreme that no feasible structural modeling is
possible, the Lucas critique does indeed become purely destructive and perhaps
even stifling.
   Hansen and Sargent (1980), Kydland and Prescott (1982) Taylor (1982) and
Christian0 (1983) have examined policy problems where only the parameters of
utility functions or production functions can be considered invariant or structur-
al. Taylor (1979, 1980b) has considered models where the parameters of the wage
and price setting functions are invariant or structural.
   The thought experiments described in Section 2 whereby multiplier responses
are examined should be part of any policy evaluation technique. But it is
unrealistic to think of policy as consisting of such one-shot changes in the policy
instrument settings. They never occur. Rather, one wants to consider changes in
Ch. 34: Stabilization   Policy in Macroeconomic   Fluctuations                     2039

the way the policymakers respond to events - that is, changes in their policy rules.
For this we can make use of stochastic equilibrium solutions examined in Section
2. We illustrate this below.


3.1.    Policy evaluation for a univariate model

Consider the following policy problem which is based on model (2.1). Suppose
that an econometric policy advisor knows that the demand for money is given by

       m, - pt = - B@,P,+~ - P~)+G                                                (3.1)

Here there are two shocks to the system, the supply of money m, and the demand
for money u,. Suppose that u, = put-r + E,, and that in the past the money
supply was fixed: m, = 0; suppose that under this fixed money policy, prices were
thought to be too volatile. The policy advisor is asked by the Central Bank for
advice on how m, can be used in the future to reduce the fluctuations in the price
level. Note that the policy advisor is not asked just what to do today or tomorrow,
but what to do for the indefinite future. Advice thus should be given as a
contingency rule rather than as a fixed path for the money supply.
   Using the solution technique of Section 2, the behavior of pt during the past is

                               Et
       p*=ppt-1-         l+p(l_p).                                                (3.2)

Conventional policy evaluation might proceed as follows: first, the econometri-
cian would have estimated p in the reduced form relation (3.2) over the sample
period. The estimated equation would then serve as a model of expectations to be
substituted into (3.1); that is, E,pl+i = ppl would be substituted into

       m,-p,=--P(fp,-p,)+u,.                                                      (3.3)

The conventional         econometricians model of the price level would then be

                 m,-u,
                                                                                  (3.4)
       pr= l+P(l-p).

Considering a feedback policy rule of the form m, = gu,_ r eq. (3.4) implies

                                                    2[g2+1-2gp].                  (3.5)
       varpf=      [l+&)l’(l-pZ)u~

If there were no cost to varying the money supply, then eq. (3.5) indicates that the
best choice for g to minimize fluctuation in pr is g = p.
2040                                                                      J. B. Tqdor

   But we know that (3.5) is incorrect if g # 0. The error was to assume that
E*Pl+l = ppl regardless of the choice of policy. This is the expectations error that
rational expectations was designed to avoid. The correct approach would have
been to substitute m, = gut-i directly into (3.1) and calculate the stochastic
equilibrium for pt. This results in

                  -I-P(l-d
       pt=   (l+p)(l+~(I-p))uf+~u~-,.                                              (3.6)


Note how the parameters of (3.6) depend on the parameters of the policy rule.
The variance of pr is


                         1        (l+P(I-s))2     _ 2g(l+ P(l-     g>>p + g2       a2.
       Var pt =
                  (l+p)2(1-P2)                         1+/W-P)                      E
                                 i (I+P(l-P)J2                                 1

                                                                                   (3.7)

The optimal policy is found by minimizing Var pt with respect to g.
   This simple policy problem suggests the following approach to macro policy
evaluation: (1) Derive a stochastic equilibrium solution which shows how the
endogeneous variables behave as a function of the parameters of the policy rule;
(2) Specify a welfare function in terms of the moments of the stochastic equi-
librium, and (3) Maximize the welfare function across the parameters of the
policy rule. In this example the welfare function is simply Var p. In more general
models there will be several target variables. For example, in Taylor (1979) an
optimal policy rule to minimize a weighted average of the variance of real output
and the variance of inflation was calculated.
   Although eq. (3.1) was not derived explicitly from an individual optimization
problem, the same procedure could be used when the model is directly linked to
parameters of a utility function. For instance, the model of Example (5) in
Section 2.2 in which the parameters depend on a firm’s utility function could be
handled in the same way as the model in (3.1).



3.2.    The Lucas critique and the Cowles Commission   critique

The Lucas critique can be usefully thought of as a dynamic extension of the
critique developed by the Cowles Commission researchers in the late 1940s and
early 1950s and which gave rise to the enormous literature on simultaneous
equations. At that time it was recognized that reduced forms could not be used
Ch. 34: Stcrhilizdon   Policy in Mucroeconomic   Fluctuations                                      2041

for many policy evaluation       questions. Rather one should model structural rela-
tionships. The parameters       of the reduced form are, of course, functions       of the
structural parameters    in the standard Cowles Commission          setup. The discussion
by Marschak      (1953), for example, is remarkably         similar to the more recent
rational expectations   critiques; Marschak did not consider expectations       variables,
and in this sense the rational expectations     critique is a new extension. But earlier
analyses like Marschak’s       are an effort to explain why structural       modeling      is
necessary, and thus has much in common with more recent research.


3.3.      Game-theoretic    approaches

In the policy evaluation       procedure discussed above, the government          acts like a
dominant     player with respect to the private sector. The government       sets g and the
private sector takes g as given. The government         then maximizes its social welfare
function    across different values of g. One can imagine alternatively               a game
theoretic setup in which the government and the private sector each are maximiz-
ing utility. Chow (1983) Kydland (1975) Lucas and Sargent (1981), and Epple,
Hansen,     and Roberds (1983) have considered           this alternative  approach.      It is
possible to specify the game theoretic model as a choice of parameters of decision
rules in the steady state or as a formal non-steady           state dynamic optimization
problem     with initial conditions      partly determining     the outcome.     Alternative
solution concepts including Nash equilibria have been examined.
    The game-theoretic      approach    naturally  leads to the important       time incon-
sistency problem raised by Kydland and Prescott (1977) and Calvo (1979). Once
the government      announces its policy, it will be optimal to change it in the future.
The consistent     solution in which everyone expects the government           to change is
generally suboptimal.      Focussing on rules as in Section 3.1 effectively eliminates
the time inconsistency     issue. But even then, there can be temptation      to change the
rule.


4.      Statistical inference

The statistical inference issues that arise in rational            expectations       models    can be
illustrated  in a model like that of Section 2.


4. I.    Full information    estimation

Consider      the problem     of estimating      the parameters   of the structural     model

        yt = aEy,+t    + ax, + u,,                                                               (4.1)
2042                                                                       J. B. Tqhr

where u, is a serially uncorrelated random variable. Assume (for example) that xy
has a finite moving average representation:

       x, =   E, +   BIEt_l + * . . + 8qEt-q’
                                                                                (4.2)

where E, is serially uncorrelated and assume that Cov( u,, E$)= 0 for all t and s.
   To obtain the full information maximum likelihood estimate of the structural
system (4.1) and (4.2) we need to reduce (4.1) to a form which does not involve
expectations variables. This can be done by solving the model using one of the
techniques described in Section 2. Using the method of undetermined coefficients,
for example, the solution for yt is

       y, = y().st+ * * . + yyE,-q + uf’                                        (4.3)

where the y parameters are given by


       ’Yo
         Yl
                                                                                (4.4)

       \ y9



Eqs. (4.2) and (4.3) together form a two dimensional vector model.




                                                                                (4.5)

Eq. (4.5) is an estimatable reduced form system corresponding to the structural
form in (4.1) and (4.2).
   If we assume that (u,, et) is distributed normally and independently, then the
full-information maximum likelihood estimate of (13,,. . . , Oq,a, 8) can be obtained
using existing methods to estimate multivariate ARMA models. See Chow (1983,
Section 6.7 and 11.6). Note that the coefficients of the ARMA model (4.5) are
constrained. There are cross-equation restrictions in that the 19and y parameters
are related to each other by (4.4). In addition, relative to a fully unconstrained
ARMA model, the off-diagonal elements of the autoregression are equal to zero.
   Full information estimation maximum likelihood methods for linear rational
expectations models have been examined by Chow (19X3), Muth (1981) Wallis
(1980), Hansen and Sargent (1980, 1981), Dagli and Taylor (1985) Mishkin
Ch. 34: Stubilizution   Policy in Macroeconomic   Fluctuations                           2043

(1983) Taylor (1979, 1980a), and Wickens (1982). As in this example, the basic
approach is to find a constrained reduced form and maximize the likelihood
function subject to the constraints. Hansen and Sargent (1980, 1981) have
emphasized these cross-equation constraints in their expositions of rational expec-
tations estimation methods. In Muth (1981), Wickens (1982) and Taylor (1979)
multivariate models were examined in which expectations are dated at t - 1 rather
than 1 and E,_iy, app ears in (4.1) rather than E,y,+,. More general multivariate
models with leads and lags are examined in the other papers.
   For full information estimation, it is also important that the relationship
between the structural parameters and the reduced form parameters can be easily
evaluated. In this example the mapping from the structural parameters to the
reduced form parameters is easy to evaluate. In more complex models the
mapping does not have a closed form; usually because the roots of high-order
polynomials must be evaluated.


4.2.    Identification

There has been relatively little formal work on identification in rational expecta-
tions models. As in conventional econometric models, identification involves the
properties of the mapping from the structural parameters to the reduced form
parameters. The model is identified if the structural parameters can be uniquely
obtained from the reduced form parameters. Over-identification and under-iden-
tification are similarly defined as in conventional econometric models. In rational
expectations models the mapping from reduced form to structural parameters is
much more complicated than in conventional models and hence it has been
difficult to derive a simple set of conditions which have much generality. The
conditions can usually be derived in particular applications as we can illustrate
using the previous example.
    When q = 0, there is one reduced form parameter ya, which can be estimated
from (4.2) and (4.3), recalling that Cov (u,, E,) = 0, and two structural parameters
J and (Yin eq. (4.4). Hence, the model is not identified. In this case, 6 = y0 is
identified from the regression of y, on the exogenous x,, but (Yis not identified.
 When q = 1, there are three reduced form parameters yO, y1 and 8, which can be
 :stimated from (4.2) and (4.3), and three structural parameters 6, L-X,        and 8,. (0, is
 ,oth a structural and reduced form parameter since x, is exogenous). Hence, the
 node1 is exactly identified according to a simple order condition. More generally,
 here are q + 2 structural parameters (6, (Y,6’,,. . . , 8,) and 2q + 1 reduced form
 jarameters (ye, yi,. . . , y,, 8,, . . . , f?,) in this model. According to the order condi-
  ions, therefore, the model is overidentified if q > 1.
    Treatments of identification in more general models focus on the properties of
  he cross-equation restrictions in more complex versions of eq. (4.4). Wallis (1980)
  ives conditions for identification for a class of rational expectations models; the
2044                                                                       J. B. Taylor

conditions may be checked in particular applications. Blanchard (1982) has
derived a simple set of identification restrictions for the case where x, in (4.2) is
autoregressive and has generalized this to higher order multivariate versions of
(4.1) and (4.2).


4.3.   Hypothesis testing

Tests of the rational expectations assumption have generally been constructed as
a test of the cross-equation constraints. These constraints arise because of the
rational expectations assumption. In the previous example, the null hypothesis
that the cross-equation constraints in (4.5) hold can be tested against the
alternative that (4.5) is a fully unconstrained moving average model by using a
likelihood ratio test. Note, however, that this is a joint test of rational expecta-
tions and the specification of the model. Testing rational expectations against a
specific alternative like adaptive expectations usually leads to non-nested hy-
potheses.
   In more general linear models, the same types of cross-equation restrictions
arise, and tests of the model can be performed analogously. However, for large
systems the fully unconstrained ARMA model may be difficult to estimate
because of the large number of parameters.


4.4.   Limited information estimation methods

Three different types of “limited information” estimates have been used for
rational expectations models. These can be described using the model in (4.1) and
(4.2). One method investigated by Wallis estimates (4.2) separately in order to
obtain the parameters 8,, . . . , 6,. These estimates then are taken as given (as
known parameters) in estimating (4.3). Clearly this estimator is less efficient than
the full information estimator, but in more complex problems the procedure saves
considerable time and effort. This method has been suggested by Wallis (1980)
and has been used by Papell(1984) and others in applied work.
   A second method proposed by Chow (1983) and investigated by Chow and
Reny (1983) was mentioned earlier in our discussion of nonuniqueness. This
method does not impose the saddle point stability constraints on the model. It
leads to an easier computation problem than does imposing the saddle point
constraints. If the investigator does not have any reason to impose this constraint,
then this could prove quite practical.
   A third procedure is to estimate eq. (4.1) as a single equation using instrumen-
tal variables. Much work has been done in this area in recent years, and because
of computational costs of full information methods it has been used frequently in
applied research. Consider again the problem of estimating eq. (4.1). Let e, =
E,Y,+, - Y,+1 be the forecast error for the prediction of Y,. Substitute E,y,+, into
Ch. 34: Stabilization   Policy in Macroeconomic   Fluctuations                              2045

(4.1) to get


       Yt = "Yt+l+      6%+ “t - aet+1*                                                    (4.6)

By finding instruments of variables for yI+ i that are uncorrelated with u, and e,, 1
one can estimate (4.6) using the method of instrumental variables. In fact this
estimate would simply be the two stage least squares estimate with y,, i treated as
if it were a right-hand side endogenous variable in a conventional simultaneous
equation model. Lagged values of x, could serve as instruments here. This
estimate was first proposed by McCallum (1976).
   Several extensions of MeCallum’s method have been proposed to deal with
serial correlation problems including Cumby, Huizinga and Obstfeld (1983)
McCallum (1979), Hayashi and Sims (1983) Hansen (1982), and Hansen and
Singleton (1982). A useful comparison of the efficiency of these estimators is
found in Cumby, Huizinga and Obstfeld (1983).


5.     General linear models

A general linear rational expectations model can be written as

       B,JJ, + B,y,_,     + . . . + $,y,_,    + AIEyt+l          + . . . + A&Y~+~ = Cut,   (5.1)
                                                   t                        t

where y, is a vector of endogenous variables, u, is a vector of exogenous variables
or shocks, and Ai, B, and. C are matrices containing parameters.
   Two alternative approaches have been taken to solve this type of model. Once
it is solved, the policy evaluation and estimation methods discussed above can be
applied. One approach is to write the model as a large first-order vector system
directly analogous to the 2-dimensional vector model in eq. (2.50). The other
approach is to solve (5.1) directly by generalizing the approach taken to the
second-order scalar model in eq. (2.86). The first approach is the most straightfor-
ward. The disadvantage is that it can easily lead to very large (although sparse)
matrices with high-order polynomials to solve to obtain the characteristic roots.
This type of generalization is used by Blanchard and Kahn (1980) and Anderson
and Moore (1984) to solve deterministic rational expectations models.


5.1.    A general jrst-order        vector model

Equation (5.1) can be written as

        Ez t+i = AZ, + Du,,                                                                (5.2)
2046                                                                                         J.B. Tqdor

by stacking    y,, y,_,, . . . , Y,_~ into the vector z, much as in eq. (2.50). (It is
necessary that A, be nonsingular           to write (5.1) as (5.2)). Anderson    and Moore
(1984) have developed an algorithm that reduces equations                with a singular A,
into an equivalent     form with a nonsingular        matrix coefficient of yfiq and have
applied it to an econometric          model of the U.S. money market. (Alternatively,
Preston and Pagan (1982, pp. 297-304) have suggested that a “shuffle” algorithm
described by Luenberger (1977) be used for this purpose). In eq. (5.2) let z1 be an
n-dimensional     vector and let u, be an m dimensional                vector of stochastic
disturbances.  The matrix A is n x n and the matrix D is n i< m.
   We describe     the solution for the case of unanticipated            temporary   shocks:
u, = Ed where E, is a serially uncorrelated         vector with a zero mean. Alternative
assumptions   about u, can be handled by the methods discussed in Section 2.2.
The solution for zy can be written in the general form:


       z,=     E riE*_l,                                                                           (5.3)
             i=o

where the ri are n X m matrices                of unknown    coefficients.   Substituting    (5.3) into
(5.2) we get

       r,=AI’,+D,

       c.+l = AC           i =1,2 )... .                                                           (5.4)

Note that these        matrix     difference     equations   hold   for each column         of c    sep-
arately; that is

       yl=   Ax, + d,
       Yr+1=    hi         i =1,2 ,...,                                                            (5.5)

where y, is any one of the n x 1 column vectors in ri and where d is the
corresponding    column of D. Eq. (5.5) is a deterministic        first-order vector dif-
ference equation     analogous    to the stochastic difference equation in (5.2). The
solution for the Fi is obtained by solving for each of the columns of r, separately
using (5.5).
   The analogy from the 2-dimensional       case is now clear. There are n equations in
(5.5). In a given application    we will know some of the elements of yo, but not all
of them. Hence, there will generally be more than n unknowns                 in (5.5). The
number of unknowns        is 2n - k where k is the number of values of y0 which we
know. For example, in the simple bivariate case of Section 2 where n = 2, we
know that the second element of y0 equals 0. Thus, k = 1 and there are 3
unknowns     and 2 equations.
Ch. 34: Stabilization Policy in Macroeconomic Fluctuations                        2047

   To get a unique solution in the general case, we therefore need (2n - k)- n = n
- k additional   equations. These additional equations can be obtained by requir-
ing that the solution for y, be stationary or equivalently in this context that the yi
do not explode. If there are exactly n - k distinct roots of A which are greater
than one in modulus, then the saddle point manifold will give exactly the number
of additional equations necessary for a solution. The solution will be unique. If
there are less than n - k roots then we have the same nonuniqueness problem
discussed in Section 2.
   Suppose this root condition for uniqueness is satisfied. Let the n - k roots of A
that are greater than one in modulus be hi,. . . , A,_,. Diagonalize A as K’AH =
A. Then

       ffY;+1=AHy,           i=1,2 )‘.. .                                       (5.6)




where A, is a diagonal matrix with all the unstable roots on the diagonal. The y
vectors are partitioned accordingly and the rows (HII, HJ of H are the char-
acteristic vectors associated with the unstable roots. Thus, for stability we require

       Hllyl(l) + Hl,yj2) = 0.                                                  (5.8)

These n - k equations define the saddle point manifold and are the additional
n - k equations needed for a solution. Having solved for yi and the unknown
elements of yO we then obtain the remaining yi coefficients from

       y,“’ = -   H,-,1H12yi'2)    i=2 Ye..,                                    (5.9)
       y/$ = A 2y;2)        i=1,2 )... .                                       (5.10)



5.2.    Higher order vector models

Alternatively the solution of (5.1) can be obtained directly without forming a
large first order system. This method is essentially a generalization of the scalar
method used in Section 2.4. Very briefly, by substituting the general solution of y,
into (5.1) and examining the equation in the rj coefficients the solution can be
obtained by factoring the characteristic polynomial associated with these equa-
tions.
   This approach has been used by Hansen and Sargent (1981) in an optimal
control example where p = q and B, = hA;. In that case, the factorization can be
2048                                                                       J. B. Taylor

shown to be unique by an appeal to the factorization theorems for spectral
density matrices. A similar result was used in Taylor (1980a) in the case of a
factoring spectral density functions.
   In general econometric applications, these special properties on the Ai and Bi
matrices do not hold. Whiteman (1983) has a proof that a unique factorization
exists under conditions analogous to those placed on the roots of the model in
Section 5.1. Dagli and Taylor (1983) have investigated an iterative method to
factor the polynomials in the lag operator in order to obtain a solution. This
factorization method was used by Rehm (1982) to estimate a 7-equation rational
expectations model of the U.S. using full information maximum likelihood.



6.     Techniques for nonlinear models

As yet there has been relatively little research with nonlinear rational expectations
models. The research that does exist has been concerned more with solution and
policy evaluation rather than with estimation. Fair and Taylor (1983) have
investigated a full-information estimation method for a non-linear model based
on a solution procedure described below. However, this method is extremely
expensive to use given current computer technology. Hansen and Singleton (1982)
have developed and applied a limited-information estimator for nonlinear models.
   There are a number of alternative solution procedures for nonlinear models
that have been investigated in the literature. They generally focus on deterministic
models, but can be used for stochastic analysis by stochastic simulation tech-
niques.
   Three methods are reviewed here: (1) a “multiple shooting” method, adopted
for rational expectations models from two-point boundary problems in the
differential equation literature by Lipton, Poterba, Sachs, and Summers (1982)
(2) an “extended path” method based on an iterative Gauss-Seidel algorithm
examined by Fair and Taylor (1983), and (3) a nonlinear stable manifold method
examined by Bona and Grossman (1983). This is an area where there is likely to
be much research in the future.
   A general nonlinear rational expectation model can be written


                                                                                (6.1)

for i=l,...,  n, where y, is an n dimensional vector of endogenous variables at
time t, x, is a vector of exogenous variables, (Y;is a vector of parameters, and u,~
is a vector of disturbances. In some write-ups, (e.g. Fair-Taylor) the viewpoint
date on the expectations in (6.1) is based on information through period t - 1
Ch. 34: Stabilization Policy in Mucroeconomic Fluctuations                        2049

rather than through period t. For continuity with the rest of this paper, we
continue to assume that the information is through period t, but the methods can
easily be adjusted for different viewpoint dates. We also distinguish between
exogenous variables and disturbances, because some of the nonlinear algorithms
can be based on known future values of x, rather than on forecasts of these from
a model like (2.2).


6. I.   Multiple shooting method

We described the shooting method to solve linear rational expectations models in
Section 2.5. This approach is quite useful in nonlinear models. The initial
conditions are the values for the lagged dependent variables and the final
conditions are given by the long-run equilibrium of the system. In this case, a
system of nonlinear equations must be solved using an iterative scheme such as
Newton’s method. One difficulty with this technique is that (6.1) is explosive when
solved forward so that very small deviations of the endogenous variables from the
solution can lead to very large final values. If this is a problem then the shooting
method can be broken up in the series of shootings (multiple shooting) over
intervals smaller than (0, j). For example three intervals would be (0, ji), (ji, j,)
and (j,, j) for 0 < j, -Cj, < j. In effect the relationship between the final values
and the initial values is broken up into a relationship between intermediate values
of these variables. The intervals can be made arbitrarily small. This approach has
been used by Summers (1981) and others to solve rational expectations models of
investment and in a number of other applications. It seems to work very well.


6.2.    Extended path method

This approach has been examined by Fair and Taylor (1983) and used to solve
large-scale nonlinear models. Briefly it works as follows. Guess values for the
E,y,+, in eq. (6.1) for j = 1,. _., J. Use these values to solve the model to obtain a
new path for yI+,. Replace the initial guess with the new solution and repeat the
process until the path Y,+~,j = 1,. . . , J converges, or changes by less than some
tolerance range. Finally, extend the path from J to J + 1 and repeat the previous
sequence of iterations. If the values of y,, on this extended path are within the
tolerance range for the values of J + 1, then stop; otherwise extend the path one
more period to J + 2 and so on. Since the model is nonlinear, the Gauss-Seidel
method is used to solve (6.1) for each iteration given a guess for y,,,. There are no
general proofs available to show that this method works for an arbitrary nonlin-
ear model. When applied to the linear model in Section (2.1) with Ial < 1 the
method is shown to converge in Fair and Taylor (1983). When J(Y~>1, the
2050                                                                                J. B. Taylor

iterations diverge. A convergence    proof for the general linear model is not yet
available,  but many experiments      have indicated  that convergence  is achieved
under the usual saddle path assumptions.      This method is expensive but is fairly
easy to use. An empirical application    of the method to a modified version of the
Fair.model   is found in Fair and Taylor (1983) and to a system with time varying
parameters   in Taylor (1983). Carlozzi and Taylor (1984) have used the method to
calculate stochastic equilibria. This method also appears to work well.



6.3.    Nonlinear saddle path manifold method

In Section (2.4) we noted that the solution of the second-order       linear difference
eq. (2.88) is achieved by placing the solution on the stable path associated with
the saddle point line. For nonlinear models one can use the same approach after
linearizing  the system. The saddle point manifold is then linear. Such a lineariza-
tion, however, can only yield a local approximation.
    Bona and Grossman (1983) have experimented       with a method that computes a
nonlinear   saddle-point  path. Consider a deterministic    univariate     second-order
version of (6.1):


       fbi+,,    Y,,   rt-1) =07      i=1,2,...      .                                   (6.2)

A solution      will be of the form


                                                                                         (6.3)

where we have one initial condition       y,. Note that eq. (6.2) is a nonlinear version
of the homogeneous       part of eq. (2.88) and eq. (6.3) is a nonlinear version of the
saddle path dynamics (2.91).
   Bona and Grossman (1983) compute g( .) by a series of successive approxima-
tions. If eq. (6.3) is to hold for all values of the argument of g then




must hold for every value of x (at least within the range of interest).                In the
application  considered by Bona and Grossman (1983) there is a natural                 way to
write (6.4) as


       g(x) = h(ddx))t dx),x>>                                                           (6.5)
for some function         h(a). For a given       x eq. (6.5) may be solved using successive
Ch. 34: Stabilization   Policy in Macroeconomic   Fluctuations                        2051

approximations:

      &+1(X)= ~(g”(gnb))~
                        &b>~ 4                                   n=0,1,2   )....    (6.6)
The initial function g,(x) can be chosen to equal the linear stable manifold
associated with the linear approximation of f( .) at x.
   Since this sequence of successive approximations must be made at every x,
there are two alternative ways to proceed. One can make the calculations
recursively for each point y, of interest; that is, obtain a function g for x = y,, a
new function for x = y, and so on. Alternatively, one could evaluate g over a grid
of the entire range of possible values of k, and form a “meta function” g which is
piecewise linear and formed by linear interpolation for the value of x between the
grid points. Bona and Grossman (1983) use the first procedure to numerically
solve a macroeconomic model of the form (6.2).
   It is helpful to note that when applied to linear models the method reduces to a
type of undetermined coefficients method used by Lucas (1975) and McCallum
(1983) to solve rational expectations models (a different method of undetermined
coefficients than that applied to linear process (2.4) in Section 2 above). To see
this, substitute a linear function y, = gy_, into

      Yt+1 =    ZY,     - -&;                                                       (6.7)

the deterministic       difference equation already considered in eq. (2.88). The result-
ing equation is

                 2
          g’---g+$              y,_1=0.                                             (6.8)
      i                    _I

Setting the term in parenthesis equal to zero, yields the characteristic polynomial
of (6.7) which appears in eq. (2.89). Under the usual assumption that one root is
inside and one root is outside the unit circle a unique stable value of g is found
and is equal to stable root h, of (2.89).


7.   Concluding remarks

As its title suggests, the aim of this chapter has been to review and tie together in
an expository way the extensive volume of recent research on econometric
techniques for macroeconomic policy evaluation. The table of contents gives a
good summary of the subjects that I have chosen to review. In conclusion it is
perhaps useful to point out in what ways the title is either overly inclusive or not
inclusive enough relative to the subjects actually reviewed.
2052                                                                                         J. B. Tuylor

   All of the methods reviewed-estimation,         solution, testing, optimization -
involve the rational expectations assumption. In fact the title would somewhat
more accurately identify the methods reviewed if the work “new” were replaced
by “rational expectations”. Some other new econometric techniques not reviewed
here that have macroeconomic policy applications include the multivariate time
series methods (vector auto-regressions, causality, exogeneity) reviewed by Geweke
(1983) in Volume 1 of the Handbook of Econometrics, the control theory methods
reviewed by Kendrick (1981) in Volume 1 of the Handbook of athematical
Economics, and the prediction methods reviewed by Fair (1986) in this volume.
On the other hand some of the estimation and testing techniques reviewed here
were designed for other applications even though they have proven useful for
policy.
    Some of the topics included were touched on only briefly. In particular the
short treatment of limited information estimation techniques, time inconsistency,
and stochastic general equilibrium models with optimizing agents does not give
justice to the large volume of research in these areas.
    Most of the research reviewed here is currently very active and the techniques
 are still being developed. (About 3 of the papers in the bibliography were
published between the time I agreed to write the review in 1979 and the period in
 1984 when I wrote it.) The development of computationally tractable ways to deal
with large and in particular non-linear models is an important area that needs
more work. But in my view the most useful direction for future research in this
 area will be in the applications of the techniques that have already been
 developed to practical policy problems.


References
Anderson,     Gary and George Moore (1984) “An Efficient Procedure           for Solving Linear Perfect
   Foresight Models”. Board of Governors of the Federal Reserve Board, unpublished        manuscript.
Anderson,    T. W. (1971) The Statistical Anulysis of Time Series. New York: Wiley.
Baumol, W. J. (1970) Economic Dynamics: An Introduction, 3d ed. New York: Macmillan.
Birkhoff, Garret and G. C. Rota (1962) Ordinary DifSerential Equations. Waltham:           Blaisdell, 2nd
   Edition.
Blanchard,   Olivier J. (1979) “Backward and Forward Solutions for Economies with Rational Expecta-
   tions”, Americun L&onomic Review, 69, 114-118.
Blanchard.    Olivier J. (1982) “Identification in Dvnamic Linear Models with Rational Exoectations”.
   Technical Paper No. 24, ‘National Bureau of Economic Research.
Blanchard,    Oliver and Charles Kahn (1980) “The Solution of Linear Difference           Models under
   Rational Expectations”,     Econometrica, 48, 1305-1311.
Blanchard,   Olivier and Mark Watson (1982) “Rational Expectations,     Bubbles and Financial Markets”,
   in: P. Wachtel, ed., Crises in The Economrc and Financial Srructure. Lexington: Lexington Books.
Bona, Jerry and Sanford Grossman (1983) “Price and Interest Rate Dynamics in a Transactions          Based
   Model of Money Demand”. University of Chicago, unpublished         paper.
Buiter, Willem H. and Marcus Miller (1983) “Real-Exchange        Rate &&shooting    and the Output Cost
   of Brinaina Down Inflation: Some Further Results”. in: J. A. Frenkel. ed.. Exchange Rates and
   Jnterna~on~l     Macroeconomics.    Chicago:  University of Chicago Press for National      Bureau of
   Economic Research.
Ch. 34: Stabilization     Policy in Macroeconomic Fluctuations                                                       2053

Cagan, Phillip (1956) “The Monetary Dynamics of Hyperinflation”,                      in: M. Friedman, ed., Studies in
   the Quantity Theo& of Money. Chicago: University of Chicago Press.
Calvo. Guillermo        (1978) “On The Time Consistencv _ of Ontimal       _       Policv in a Monetary Economy”.
   Econometrica, 46, 1411-1428.
Calvo, Guillermo (1980) “Tax-Financed               Government     Spending in a Neoclassical        Model with Sticky
   Wages and Rational Expectations”,            Journal of Economic Dynamics and Control, 2, 61-78.
Carlozzi, Nicholas and John B. Taylor (1984) “International                Capital Mobility and the Coordination         of
   Monetary     Rules”, in: J. Bandhari, ed., Exchange Rate Management under Uncertainty. MIT Press,
   forthcoming.
Chow, G. C. (1983) Econometrics. New York: McGraw Hill.
Chow, Gregory         and Philip J. Reny (1984) “On Two Methods for Solving and Estimating                         Linear
   Simultaneous       Equations with Rational Expectations”.           Princeton University, unpublished        paper.
Christiano,     Lawrence      J. (1984) “Can Automatic           Stabilizers be Destablizing:        An Old Question
   Revisited”,     Carnegie- Rochester Conference Series on Public Policy, 20, 147-206.
Cumby, Robert E., John Huizinga and Maurice Obstfeld (1983) “Two-Step Two-Stage Least Squares
   Estimation     in Models with Rational Expectations”,           Journal of Econometrics, 21, 333-355.
Dagli, C. Ates and John B. Taylor (1985) “Estimation                and Solution of Linear Rational Expectations
   Models Using a Polynomial             Matrix Factorization”,       Journal of Economic Dynamics and Control,
   forthcoming.
Dhrymes, Pheobus J. (1971) Distributed Lags: Problems of Estimation and Formulation. San Francisco:
   Holden-Day.
Dixit, Avinash (1980) “A Solution Technique for Rational Expectations                     Models with Applications       to
   Exchange Rate and Interest Rate Determination”.               Princeton University, unpublished          paper.
Dombusch,        Rudiger     (1976) “Expectations        and Exchange        Rate Dynamics”,       Journal of Political
   Economy, 84, 1161-1176.
Epple, Dennis, Lam P. Hansen and William Roberds (1983) “Linear Quadratic Games of Resource
   Depletion”,     in: Thomas J. Sargent, ed., Energy, Foresight, and Strategy. Washington:                 Resources for
   the Future.
Evans, George and Seppo Honkapohja                (1984) “A Complete Characterization           of ARMA Solutions to
   Linear Rational        Expectations     Models”. Technical Report No. 439, Institute for Mathematical
   Studies in the Social Sciences, Stanford University.
Fair, Ray (1986) “Evaluating          the Predictive Accuracy of Models”, in: Z. Griliches and M. Intriligator,
   eds., Handbook of Econometrics. Amsterdam:               North-Holland,      Vol. III.
Fair, Ray and John B. Taylor (1983) “Solution and Maximum Likelihood Estimation                              of Dynamic
   Nonlinear     Rational Expectations       Models”, Econometrica, 51, 1169-1185.
Fischer,    Stanley (1979) “Anticipations            and the Nonneutrality         of Money”,      Journal of Political
   Economy, 87, 225-252.
Flood, R. P. and P. M. Garber (1980) “Market Fundamentals                      versus Price-Level Bubbles: The First
   Tests”, Journal of Political Economy, 88, 745-770.
Futia, Carl A. (1981) “Rational              Expectations    in Stationary      Linear Models”,      Econometrica, 49,
   171-192.
Geweke, John (1984) “Inference and Causality in Economic Time Series Models”, in: Z. Griliches and
   M. Intriligator,     eds., Handbook of Econometrics. Amsterdam:              North-Holland,     Vol. II.
Gourieroux,      C., J. J. Laffont and A. Monfort (1982) “Rational                   Expectations   in Linear Models:
   Analysis of Solutions”,        Econometrica, 50,409-425.
Hansen, Lam P. (1982) “Large Sample Properties of Generalized Method of Moments Estimators”,
    Econometrica, 50,1029-1054.
Hansen,     Lam P. and Thomas J. Sargent (1980) “Formulating                        and Estimating     Dynamic      Linear
   Rational Expectations        Models”, Journal of Economic Dynamics and Control, 2, 7-46.
Hansen, Lam P. and Thomas J. Sargent (1981) “Linear Rational Expectations                          Models for Dynami-
   cally Interrelated      Variables”, in: R. E. Lucas and T. J. Sargent, eds., Rational Expectations and
   Econometric Practice. Minneapolis:           University of Minnesota Press.
Hansen, L. P. and K. Singleton (1982) “Generalized                Instrumental     Variables Estimation of Nonlinear
    Rational Expectations        Models”, Econometrica, 50, 1269-1286.
Harvey, Andrew C. (1981) Time Series Models. New York: Halsted Press.
2054                                                                                                            J. R. Tuylor

Hayashi,      Fumio and Christopher          Sims (1983) “Nearly Efficient Estimation               of Time Series Models
   with Predetermined,          but not Exogenous, Instruments”,           Econometrica, 51, 783-798.
Kendrick,       David (1981) “Control         Theory with Applications          to Economics”,       in: K. Arrow and M.
   Intriligator,     eds., Amsterdam:      North-Holland,     Vol. I.
Kouri, Pentti J. K. (1976) “The Exchange Rate and the Balance of Payments in the Short Run and in
   the Long Run: A Monetary Approach”,                  Scandinavian Journal of Economics, 78, 280-304.
Kydland,       Finn E. (1975) “Noncooperative             and Dominant         Player Solutions in Discrete Dynamic
   Games”, International Economic Review, 16, 321-335.
Kydland,      Finn and Edward C. Prescott (1977) “Rules Rather Than Discretion: The Inconsistency                            of
   Optimal Plans”, Journal of Political Econom.v, 85, 473-491.
Kydland,        Finn and Edward C. Prescott (1982) “Time to Build and Aggregate                               Fluctuations”,
   Econometrica, 50, 1345-1370.
Lipton, David, James Poterba, Jeffrey Sachs and Lawrence Summers (1982) “Multiple Shooting in
   Rational Expectations          Models”, Economefricu, 50, 1329-1333.
Lucas, Robert E. Jr. (1975) “An Equilibrium                   Model of the Business Cycle”, Journal of Pohticul
   Economy, 83, 1113-1144.                       _
Lucas. Robert E. Jr. (1976) “Econometric               Policv Evaluation: A Critioue”, in: K. Brunner and A. H.
   Mehzer, eds., Carnegie Rochester Conference ‘Series on Public PO/;&. Amsterdam:                           North-Holland,
   19-46.
Lucas, Robert E. Jr. and Thomas J. Sargent (1981) “Introduction”,                      to their Rationul Expectutions and
   Econometric Practice. University of Minneapolis.
Luenberger,         David G. (1977) “Dynamic            Equations     in Descriptor       Form”, IEEE Trunscrctions on
   Automatic Control, AC-22, 312-321.
Marschak,        Jacob (1953) “Economic         Measurements       for Policy and Prediction”,         in: W. C. Hood and
   T. C. Koopmans,           eds., Studies in Econometric Method. Cowles Foundation                   Memograph      14, New
   Haven: Yale University Press.
McCallum,          Bennett T. (1976) “Rational           Expectations      and the Natural        Rate Hypothesis:       Some
   Consistent       Estimates”,    Econometrica, 44, 43-52.
McCallum.         Bennett T. (1979) “Topics Concerning            the Formulation,       Estimation, and Use of Macro-
   econometric         Models with Rational Expectation”,           American Statistical Association ~ Proceedings of
   the Business und Economics Section, 65-72.
McCallum,          Bennett T. (1983) “On Non-Uniqueness                  in Rational       Expectations:    An Attempt       at
   Perspective”,        Journal of Monetary Economics, 11, 139-168.
Mishkin, Frederic S. (1983) A Rational Expectations Approach to Macroeconometrics:                             Testmg Poliq
   Ineffectiveness and EfJicient-Markets Models. Chicago: University of Chicago Press.
Muth, John F. (1961) “Rational              Expectations    and The Theory of Price Movements”,               Economefricu.
   29, 315-335.
Muth, John F. (1981) “Estimation                  of Economic       Relationships       Containing     Latent Expectations
   Variables”, reprinted in: R. E. Lucas and T. J. Sargent, eds., Rational Expectations rend Econometric
   Practice. Minneapolis:          University of Minnesota Press.
Papell, David (1984) “Anticipated            and Unanticipated        Disturbances:      The Dynamics of The Exchange
    Rate and The Current Account”, Journal of international Money und Finance, forthcoming.
Preston, A. J. and A. R. Pagan (1982) The Theory of Economic Policy. Cambridge:                                   Cambridge
    University Press.
Rehm, Dawn (1982) Staggered Contructs, Capital Flows, and Mucroeconomtc Stability tn The Open
    Economy. Ph.D. Dissertation,           Columbia University.
Rodriquez,        Carlos A. (1980) “The Role of Trade Flows in Exchange Rate Determination:                       A Rational
    Expectations       Approach”,     Journal of Politico1 Economy, 88, 1148-1158.
Sargent, Thomas J. (1979) Macroeconomic Theory. New York: Academic Press.
Sargent, Thomas J. and Neil Wallace (1973) “Rational Expectations and The Dynamics of Hyperinfla-
    tion”, Internutional Economic Review, 14, 328-350.
Sargent,      Thomas       J. and Neil Wallace (1975) “‘Rational’              Expectations,      The Optimal Monetary
    Instrument,       and The Optimal Money Supply Rule”, Journal of Political Economy: 83, 241-254.                          .
Summers,         Lawrence      H. (1981) “Taxation         and Cornorate         Investment:     A a-Theorv _ Annroach”.
                                                                                                                    &.
    Brookings Papers on Economic Activity, 1, 67-127.                  L
Taylor, John B. (1977) “Conditions              for Unique Solutions in Stochastic Macroeconomic                Models with
    Rational Expectations”,         Econometrica, 45, 1377-1385.
Ch. 34: Stobilizution   Policy in Macroeconomic   Fluctuations                                           2055

Taylor, John B. (1979) “Estimation     and Control of a Macroeconomic        Model with Rational Expecta-
   tions”, Econometrica, 47, 1267-1286.
Taylor,   John B. (1980a) “Aggregate        Dynamics     and Staggered    Contracts”,   Journal of Political
   Economy, 88, l-23.
Taylor, John B. (1980b) “Output       and Price Stability: An International        Comparison”,     Journul of
   Economic Dynamics and Control, 2, 109-132.
Taylor, John B. (1982) “The Swedish Investment              Fund System as a Stabilization      Policy Rule”,
  Brookings Pupers on Economic Activity, 1, 57-99.
Taylor, John B. (1983) “Union Wage Settlements During a Disinflation”,           American Economic Review,
  73, 981-993.
Wallis, Kenneth      F. (1980) “Econometric    Implications    of The Rational Expectations      Hypothesis”,
  Econometricu, 48, 49-73.
Whiteman,     Charles H. (1983) Linear Rutionul Expectations Models: A User’s Guide. Minneapolis:
  University of Minnesota.
Wickens, M. (1982) “The Efficient Estimation of Econometric           Models with Rational Expectations”,
  Review of Economic Studies, 49, 55-68.
Wilson, Charles (1979) “Anticipated        Shocks and Exchange Rate Dynamics”,           Journal of Political
  Economy, 87, 639-647.



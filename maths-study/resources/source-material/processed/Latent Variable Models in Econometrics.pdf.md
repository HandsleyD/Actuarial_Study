---
normalized_id: shared-pdf-reference-latent-variable-models-in-econometrics
exam_code: SHARED
material_scope: latent variable models in econometrics.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Latent Variable Models in Econometrics.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-latent-variable-models-in-econometrics

Chaprer       23



LATENT VARIABLE MODELS IN ECONOMETRICS
DENNIS J. AIGNER
L’niversio,        of Southern     California


CHENG HSIAO
Unil*ersi{v        of Toronto


ARIE KAPTEYN
Tilburg    Uniuersiy


TOM       WANSBEEK*
Nerherlands          Central     Bureau   of Statistics




Contents
1.    Introduction                                                                                  1323
      1.1. Background                                                                               1323
      1.2. Our single-equation heritage                                                             1324
      1.3. Multiple equations                                                                       1326
      1.4. Simultaneous equations                                                                   1327
      1S. The power of a dynamic specification                                                      1328
      1.6. Prologue                                                                                 1329
2.    Contrasts and similarities between structural and functional models                           1329
      2.1.         ML estimation in structural and functional models                                1330
      2.2. Identification                                                                           1332
      2.3. Efficiency                                                                               1335
      2.4. The ultrastructural relations                                                            1336
3.    Single-equation models                                                                        1337
      3.1.         Non-normality and identification: An example                                     1337
      3.2.         Estimation in non-normal structural models                                       1338
   *The authors would like to express their thanks to Zvi Griliches, Hans Schneeweiss, Edward
Learner, Peter Bentler, Jerry Hausman, Jim Heckman, Wouter Keller, Franz Palm, and Wynand van
de Ven for helpful comments on an early draft of this chapter and to Denzil Fiebig for considerable
editorial assistance in its preparation. Sharon Koga has our special thanks for typing the manuscript.
C. Hsiao also wishes to thank the Social Sciences and Humanities Research Council of Canada and
the National Science Foundation, and Tom Wansbeek the Netherlands Organization for the Advance-
ment of Pure Research (Z.W.O.) for research support.


Handbook           of Econometrics,  Vohlme II, Edited 61, Z. Griliches   and M.D.   Intriligaror
Q Elsmier          Science Publishers BV, 1984
1322                                                                              D. J. Aiper    et al.

       3.3. A non-normal model with extraneous information                                      1340
       3.4. Identifying restrictions in normal structural and functional models                 1341
       3.5. Non-linear models                                                                   1344
       3.6. Should we include poor proxies?                                                     1345
       3.7. Prediction and aggregation                                                          1346
       3.8. Bounds on parameters in underidentified models                                      1347
      3.9. Tests for measurement error                                                          1349
     3.10. Repeated observations                                                                1350
     3.11.    Bayesian analysis                                                                 1352
4.     Multiple equations                                                                       1353
       4.1.   Instrumental variables                                                            1354
       4.2.   Factor analysis                                                                   1357
       4.3.   The MIMIC model and extensions                                                    1359
5.     Simultaneous equations                                                                   1362
       5.1. The case of D known                                                                 1363
       5.2. Identification and estimation                                                       1363
       5.3. The analysis of covariance structures                                               1369
6.     Dynamic models                                                                           1372
       6.1.   Identification of single-equation models                                          1372
       6.2.   Identification of dynamic simultaneous equation models                            1377
       6.3.   Estimation of dynamic error-shock models                                          1380
References                                                                                      1386
Ch. 23: L.utent   Vuriuble   Models   in Econometrics                              1323




1.     Introduction



1.1.    Background

Although it may be intuitively clear what a “latent variable” is, it is appropriate
at the very outset of this discussion to make sure we all agree on a definition.
Indeed, judging by a recent paper by a noted psychometrician [Bentler (1982)],
the definition may not be so obvious.
   The essential characteristic of a latent variable, according to Bentler, is revealed
by the fact that the system of linear structural equations in which it appears
cannot be manipulated so as to express the variable as a function of measured
variables only. This definition has no particular implication for the ultimate
identifiability of the parameters of the structural model itself. However, it does
imply that for a linear structural equation system to be called a “latent variable
model” there must be at least one more independent variable than the number of
measured variables. Usage of the term “independent” variable as contrasted with
“exogenous” variable, the more common phrase in econometrics, includes mea-
surement errors and the equation residuals themselves. Bentler’s more general
definition covers the case where the covariance matrices of the independent and
measured variables are singular.
   From this definition, while the residual in an otherwise classical single-equation
linear regression model is not a measured variable it is also not a latent variable
because it can be expressed (in the population) as a linear combination of
measured variables. There are, therefore, three sorts of variables extant: mea-
sured, unmeasured and latent. The distinction between an unmeasured variable
and a latent one seems not to be very important except in the case of the so-called
functional errors-in-variables model. For otherwise, in the structural model, the
equation disturbance, observation errors, and truly exogenous but unmeasured
variables share a similar interpretation and treatment in the identification and
estimation of such models. In the functional model, the “true” values of exoge-
nous variables are fixed variates and therefore are best thought of as nuisance
parameters that may have to be estimated en route to getting consistent estimates
of the primary structural parameters of interest.
   Since 1970 there has been a resurgence of interest in econometrics in the topic
of errors-in-variables models or, as we shall hereinafter refer to them, models
involving latent variables. That interest in such models had to be restimulated at
all may seem surprising, since there can be no doubt that economic quantities
frequently are measured with error and, moreover, that many applications depend
on the use of observable proxies for otherwise unobservable conceptual variables.
1324                                                                                  D. 1. A igner et al.

   Yet  even a cursory reading of recent econometrics texts will show that the
historical emphasis in our discipline is placed on models without measurement
error in the variables and instead with stochastic “shocks” in the equations. TO
the extent that the topic is treated, one normally will find a sentence alluding to
the result that for a classical single-equation regression model, measurement error
in the dependent variable, y, causes no particular problem because it can be
subsumed within the equation’s disturbance term.’ And, when it comes to the
matter of measurement errors in independent variables, the reader will usually be
convinced of the futility of consistent parameter estimation in such instances
unless repeated observations on y are available at each data point or strong a
priori information can be employed. And the presentation usually ends just about
there. We are left with the impression that the errors-in-variables “problem” is
bad enough in the classical regression model; surely it must be worse in more
complicated models.
   But in fact this is not the case. For example, in a simultaneous equations setting
one may employ overidentifying restrictions that appear in the system in order to
identify observation error variances and hence to obtain consistent parameter
estimates. (Not always, to be sure, but at least sometimes.) This was recognized as
long ago as 1947 in an unpublished paper by Anderson and Hurwicz, referenced
(with an example) by Chemoff and Rubin (1953) in one of the early Cowles
Commission volumes. Moreover, dynamics in an equation can also be helpful in
parameter identification, ceteris paribus. Finally, restrictions on a model’s covari-
ante structure, which are commonplace in sociometric and psychometric model-
ling, may also serve to aid identification. [See, for example, Bentler and Weeks
(1980).] These are the three main themes of research with which we will be
concerned throughout this essay. After brief expositions in this Introduction, each
topic is treated in depth in a subsequent section.

1.2.    Our single-equation heritage (Sections 2 and 3)

There is no reason to spend time and space at this point recreating the discussion
of econometrics texts on the subject of errors of measurement in the independent
variables of an otherwise conventional single-equation regression model. But the
setting does provide a useful jumping-off-place for much of what follows.
   Let each observation ( y,, xi) in a random sample be generated by the stochastic
relationships:
       _Y,= Vi + u 1)                                                                             0.1)
       xi = E, + u, 3                                                                             0 4
       17,=cr+P&+q,             i=l   ,...n.                                                      0.3)

   ‘That is to say, the presence of measurement error iny does not alter the properties of least squares
estimates of regression coefficients. But the variance of the measurement error remains hopelessly
entangled with that of the disturbance term.
Ch. 23: Latent Variable Models in Econometrics                                   1325

Equation (1.3) is the heart of the model, and we shall assume E( VilEi) = (Y+ &,
so that I$&,) = 0 and E(&e,) = 0. Also, we denote I!($) = ueE.Equations (1.1) and
(1.2) involve the measurement errors, and their properties are taken to be
E(u,) = E(ui) = 0, E(u;) = a,,, E(u;) = a”” and E(u,ui) = 0. Furthermore, we will
assume that the measurement errors are each uncorrelated with E, and with the
latent variables vi and 5,. Inserting the expressions ti = xi - ui and T),= y, - ui
into (1.3), we get:

     y,=a+px,+w;,                                                               0.4)

where w, = ei + ui - /3uj. Now since E(uilxi) # 0, we readily conclude that least
squares methods will yield biased estimates of (Yand /3.
   By assuming all random variables are normally distributed we eliminate any
concern over estimation of the 5;‘s as “nuisance” parameters. This is the so-called
structural latent variables model, as contrasted to the functional model, wherein
the &‘s are assumed to be fixed variates (Section 2). Even so, under the normality
assumption no consistent estimators of the primary.parameters of interest exist.
This can easily be seen by writing out the so-called “covariance” equations that
relate consistently estimable variances and covariances of the observables ( y, and
x,) to the underlying parameters of the model. Under the assumption of joint
normality, these equations exhaust the available information and so provide
necessary and sufficient conditions for identification. They are obtained by
“covarying” (1.4) with y, and x,, respectively. Doing so, we obtain:



      Uyx = PU,, - I%>,,
                                                                                (1.5)
      Uxx = a[6 + UCL,.


Obviously, there are but three equations (involving three consistently estimable
quantities, uYY,a,, and a,,) and five parameters to be estimated. Even if we agree
to give up any hope of disentangling the influences of .si and ui (by defining, say,
u2 = a_ + a,,) and recognize that the equation uXX= uEE+ uoC,will always be used
to identify art alone, we are still left with two equations in three unknowns (p, u2,
and Q).
   The initial theme in the literature develops from this point. One suggestion to
achieve identification in (1.5) is to assume we know something about a,,, re&ue
to u2 or uuu relative to uXX.Suppose this a priori information is in the form
h = ~,,/a*. Then we have a,, = Au2 and



                                                                               (1.5a)
1326                                                                  D. J. Aigner    et (11.


From this it follows that p is a solution to:

       p2xu,, - P( huv, - e,J-   y,,X= 0,                                            (1.6)

and that
       lJ2=u YY- Pa,, .                                                              (1.7)

   Clearly this is but one of several possible forms that the prior information may
take. In Section 3.2 we discuss various alternatives. A Bayesian treatment suggests
itself as well (Section 3.11).
   In the absence of such information, a very practical question arises. It is
whether, in the context of a classical regression model where one of the indepen-
dent variables is measured with error, that variable should be discarded or not, a
case of choosing between two second-best states of the world, where inconsistent
parameter estimates are forthcoming either from the errors-in-variables problem
or through specification bias. As is well known, in the absence of an errors-of-
observation problem in any of the independent variables, discarding one or more
of them from the model may, in the face of severe multicollinearity, be an
appropriate strategy under a mean-square-error (MSE) criterion. False restric-
tions imposed cause bias but reduce the variances on estimated coefficients
(Section 3.6).

1.3.    Multiple equations (Section 4)

Suppose that instead of having the type of information described previously to
help identify the parameters of the simple model given by (l.l)-(1.3), there exists
a z,, observable, with the properties that zi is correlated with xi but uncorrelated
with w,. This is tantamount to saying there exists another equation relating z, to
x,, for example,
       x,=yz,+8i,                                                                    (1.8)
with E(z,&)= 0, E(6,)= 0 and E(62)= uss. Treating (1.4) and (1.8) as our
structure (multinormality is again assumed) and forming the covariance equa-
tions, we get, in addition to (1.5):
        apz = P&Z 9
        Ux.x= YUZ, + *,,,                                                             (1.9)
       uZX= Yo;z.
   It is apparent that the parameters of (1.8) are identified through the last two of
these equations. If, as before, we treat a,, + uuU as a single parameter, u2, then
(1.5) and the first equation of (1.9) will suffice to identify p, u*, uL,“,and act.
   This simple example serves to illustrate how additional equations containing
the same latent variable may serve to achieve identification. This “multiple
Ch. 23: L.utent Variable Models in Econometrics                                                    1321

equations” approach, explored by Zellner (1970) and Goldberger (1972b), spawned
the revival of latent variable models in the seventies.


1.4.    Simultaneous equations (Section 5)

From our consideration of (1.4) and (1.8) together, we saw how the existence of
an instrumental variable (equation) for an independent variable subject to mea-
surement error could resolve the identification problem posed. This is equivalent
to suggesting that an overidentifying restriction exists somewhere in the system of
equations from which (1.4) is extracted that can be utilized to provide an
instrument for a variable like xi. But it is not the case that overidentifying
restrictions can be traded-off against measurement error variances without qualifi-
cation. Indeed, the locations of exogenous variables measured with error and
overidentifying restrictions appearing elsewhere in the equation system are cru-
cial. To elaborate, consider the following equation system, which is dealt with in
detail in Section 5.2:
       I$+ P12Yz= Y1151                       + Err
                                                                                              (1.10)
       P21YI+ Y2 =            Y2252 + Y23& + -529

where [, ( j = 1,2,3) denote the latent exogenous variables in the system. Were the
latent exogenous variables regarded as obseruable, the first equation is-condi-
tioned on this supposition-overidentified      (one overidentifying restriction) while
the second equation is conditionally just-identified. Therefore, at most one
measurement error variance can be identified.
   Consider first the specifications x1 = [r + ut, x2 = t2, x3 = t3, and let ull denote
the variance of ut. The corresponding system of covariance equations turns out to
be:




                                                                                                   1
                   Yll(%,x,    -   4                  Yll%x,x*                  Yll~x,x,


            -[
              0
            =&&&0 0
                 ( Y22%2x1+     Y23%3x,   >   ( Y2Pxx,x,   + YdJx,x* >   (Y*2%*x,   + Y*3%x,x, )




             I I
                                                                                              (1.11)

                  0       0         0
which, under the assumption of multinormality we have been using throughout
the development, is sufficient to examine the state of identification of all parame-
ters. In this instance, there are six equations available to determine the six
1328                                                                     D. J. Aigner et al.


unknowns,   &,   &,, Yllt Y221 Y23, and qI. It is clear that equations @ and @ in
(1.11) can be used to solve for /Ii2 and yli, leaving @ to solve for ull. The
remaining three equations can be solved for p2i, y22, ~23, SO in this case all
parameters are identified. Were the observation error instead to have been
associated with t2, we would find a different conclusion. Under that specification,
pi2 and yll are overdetermined, whereas there are only three covariance equations
available to solve for fi2t, y22, ~23, and u22. Hence, these latter four parameters [all
of them associated with the second equation in (MO)] are not identified.


1.5.    The power of a dynamic specification (Section 6)

Up to this point in our introduction we have said nothing about the existence of
dynamics in any of the equations or equation systems of interest. Indeed, the
results presented and discussed so far apply only to models depicting contempora-
neous behavior.
   When dynamics are introduced into either the dependent or the independent
variables in a linear model with measurement error, the results are usually
beneficial. To illustrate, we will once again revert to a single-equation setting, one
that parallels the development of (1.4). In particular, suppose that the sample at
hand is a set of time-series observations and that (1.4) is instead:
       7, = P-$-l + E,,
                                                                                   (1.12)
       Yt = q, + uf,      t =l,...,T,
with all the appropriate previous assumptions imposed, except that now we will
also use IpI<l, E(u,)=E(u,_,)=O,      E(u:)=E(uf_,)=u,,,    and E(u,u,_i)=O.
Then, analogous to (1.5) we have:


                                                                                  (1.13)


where yV,JP1 is our notation for the covariance between y, and y,_, and we have
equated the variances of y, and yr_r by assumption. It is apparent that this
variance identity has eliminated one parameter from consideration (a,,,,), and we
are now faced with a system of two equations in only three unknowns. Unfor-
tunately, we are not helped further by an agreement to let the effects of the
equation disturbance term (F~) and the measurement error in the dependent
variable (u,) remain joined.
   Fortunately, however, there is some additional information that can be utilized
to resolve things: it lies in the covariances between current y, and lags beyond
one period (y,_, for s 2 2). These covariances are of the form:

       U,,J_, = flu,, p--s+15           s L   2,                                   (1.14)
Ch. 23: Latent Variable Models in Econometrics                                                 1329

so that any one of them taken in conjunction with (1.13) will suffice to solve for p,
uee, and a,,,.’




I. 6.     Prologue

Our orientation in this Chapter is primarily theoretical, and while that will be
satisfactory for many readers, it may detract others from the realization that
structural modelling with latent variables is not only appropriate from a concep-
tual viewpoint in many applications, it also provides a means to enhance marginal
model specifications by taking advantage of information that otherwise might be
misused or totally ignored.
   Due to space restrictions, we have not attempted to discuss even the most
notable applications of latent variable modelling in econometrics. And indeed
there have been several quite interesting empirical studies since the early 1970’s.
In chronological order of appearance, some of these are: Griliches and Mason
(1972) Aigner (1974a), Chamberlain and Griliches (1975, 1977) Griliches (1974,
1977) Chamberlain (1977a, 1977b, 1978), Attfield (1977) Kadane et al. (1977)
Robinson and Ferrara (1977) Avery (1979), and Singleton (1980). Numerous
others in psychology and sociology are not referenced here.
   In the following discussion we have attempted to highlight interesting areas for
further research as well as to pay homage to the historical origins of the important
lines of thought that have gotten us this far. Unfortunately, at several points in
the development we have had to cut short the discussion because of space
constraints. In these instances the reader is given direction and references in order
to facilitate his/her own completion of the topic at hand. In particular we
abbreviate our discussions of parameter identification in deference to Hsiao’s
chapter on that subject in Volume I of this Handbook.




2.      Contrasts and similarities between structural and functional models

In this section we analyze the relation between functional and structural models
and compare the identification and estimation properties of them. For expository
reasons we do not aim at the greatest generality possible. The comparison takes
place within the context of the multiple linear regression model. Generalizations
are considered in later sections.

   ‘The existence of a set of solvable covariance equations should not be surprising. For, combining
(1.12) to get the reduced form expression, y, = a+ PJJ,-~ +(E, + u,)-bu,_,,  which is in the form of
an autoregressive/moving-average (ARMA) model.
1330                                                                      D. J. Aigner et al.

2.1.    ML estimation in structural and functional models

Consider the following multiple linear regression model with errors in variables:

       y, = t:r8 + E;3                                                                (2.1)
       x; = E‘,+ u; ,      i=l ,...,n,                                                (2.2)
where &, xi, u,, and /3 are k-vectors, and _y, and ei are scalars. The &‘s are
unobservable variables; instead xi is observed. u, is unobservable and we assume
u - N(0, Q) for all i. ei is assumed to follow a N(0, a*) distribution. u, and E, are
mutually independent and independent of 6,.
   In the functional model the above statements represent all the assumptions one
has to make, except for the possible specification of prior knowledge with respect
to the parameters /3, a* and S?. The elements of I, are considered to be unknown
constants. For expository simplicity we assume that D is non-singular. The
likelihood of the observable random variables y, and x, is then:

       L,aexp{-t[tr(X-Z)O’(X-Z)‘+e-*(y-~/3)’(y-Z~)]},                                 (2.3)

where X and Z are n x k-matrices with ith rows x,’ and t,‘, respectively, and
Y=(Y,,Yz,...~ y,)‘. The unknown parameters in (2.3) are /3, a, a* and the
elements of Z. Since the order of Z IS. n x k, the number of unknown parameters
increases with the number of observations. The parameters /3, a*, and G are
usually referred to as structural parameters, whereas the elements of Z are called
incidental parameters [Neyman and Scott (1948)]. The occurrence of incidental
parameters poses some nasty problems, as we shall soon see.
   In the structural model one has to make an explicit assumption about the
distribution of the vector of latent variables, t,. A common assumption is that 5,
is normally distributed: [, - N(0, K), say. Consequently x, - N(0, A), where
A = K + f2. We assume K, hence A, to be positive definite. Under these assump-
tions we can write down the simultaneous likelihood of the random variables in
y,, 6, and x,. This appears as:



       L, a exp       - ftr( y, X, 5)S-’                                              (2.4)


where S is the variance-covariance                matrix:



       S-E
                Y,
                x, (Y,&t:)=
                                         /3'Kj3
                                             K/3
                                                  +  u2     /3'K
                                                             A
                                                                   f3'K
                                                                    K                 (2.5)
               i ci                          Kb              K      K
Ch. 23: Lutent Vuriuhle Models in Econometrics                                                       1331

  In order to show the relationship between the functional and the structural




                                 (2
models it is instructive to elaborate upon (2.4). It can be verified by direct




                    -u-“/3
                      -Q-1
multiplication that:



                        9-l
                         +K-l
                           +a-2/3j?
                              1
                      a-2             0                         _-2p
      s-l=                 0        0-l                             -Q-l        .



Inserting this result in (2.4) we obtain:



                               +trZK-‘Z’]},                                                         (2.7)
which is proportional to L,.L,, where L, has been defined by (2.3) and L, is
proportional to exp{ - 4 tr ZK -lZ’}. Obviously, L, is the marginal likelihood of
4;. Thus the simultaneous likelihood L, is the product of the likelihood of the
functional model and the marginal likelihood of the latent variables. This implies
that the likelihood of the functional model, L,, is the likelihood of y, and x,
conditional upon the latent variables <,.
   In the structural model estimation takes place by integrating out the latent
variables. That is, one maximizes the marginal likelihood of y, and xi. This
marginal likelihood, L,, is:

      L,aexp             -+tr(y,X)Z’-’             cl           ,                                   (2.8)
                     1                         i        1)

C being the (k + 1) X (k + 1) variance-covariance                          matrix of y, and x,.
  Using the fact that:

                                      -y-la’
     z-l=            y-l
                   -u-la         A-l+paa’                   ’
                                                                                                   (2.9)
               (                                        I


where a = A -‘K/l and y = a2 + a’&# (2.8) can be written as:

     L,aexp{-+[y-‘(y-Xa)‘(y-Xa)+trXA-’Xl}.                                                        (2.10)

   So, the likelihood of the observable variables in the functional model is a
conditional likelihood-conditional     upon the incidental parameters, whereas the
likelihood in the structural model is the marginal likelihood obtained by integrat-
ing out the incidental parameters. Indeed, Learner (1978b, p. 229) suggests that
the functional and structural models be called the “conditional” and “marginal”
models, respectively. Although our demonstration of this relationship between the
likelihood functions pertains to the linear regression model with measurement
errors, its validity is not restricted to that case, neither is it dependent on the
1332                                                                                D. .I. Aigner   et al.


various  normality assumptions made, since parameters (in this case the incidental
parameters) can always be interpreted as random variables on which the model in
which they appear has been conditioned. These conclusions remain essentially the
same if we allow for the possibility that some variables are measured without
error. If there are no measurement errors, the distinction between the functional
and structural interpretations boils down to the familiar distinction between fixed
regressors (“conditional upon X”) and stochastic regressors [cf. Sampson (1974)].
    To compare the functional and structural models a bit further it is of interest to
look at the properties of ML estimators for both models, but for reasons of space
we will not do that here. Suffice it to say that the structural model is underiden-
tified. A formal analysis follows in Sections 2.2 and 2.3. As for the functional
model, Solari (1969) was the first author to point out that the complete log-likeli-
hood has no proper maximum.3 She also showed that the stationary point
obtained from the first order conditions corresponds to a saddle point of the
likelihood surface. Consequently, the conditions of Wald’s (1949) consistency
proof are not fulfilled. The solution to the first order conditions is known to
produce inconsistent estimators and the fact that the ML method breaks down in
this case has been ascribed to the presence of the incidental parameters [e.g.
Malinvaud (1970, p. 387), Neyman and Scott (1948)]. In a sense that explanation
is correct. For example, Cramer’s proof of the consistency of ML [Cramer (1946,
pp. 500 ff.)] does not explicitly use the fact that the first order conditions actually
generate a maximum of the likelihood function. He does assume, however, that
the number of unknown parameters remains fixed as the number of observations
increases.
    Maximization of the likelihood in the presence of incidental parameters is not
always impossible. If certain identifying restrictions are available, ML estimators
can be obtained, but the resulting estimators still need not be consistent, as will
be discussed further in Section 3.4. ML is not the only estimation method that
breaks down in the functional model. In the next subsection we shall see that
without additional identifying restrictions there does not exist a consistent
estimator of the parameters in the functional model.


2.2.   Identification

Since ML in the structural model appears to be perfectly straightforward, at least
under the assumption of normality, identification does not involve any new
conceptual difficulties. As before, if the observable random variables follow a


   ‘See also Sprent (1970) for some further comments on Solari. A result similar to Solari’s had been
obtained 13 years before by Anderson and Rubin (1956), who showed that the likelihood function of a
factor analysis model with fixed factors does not have a maximum.
Ch. 23: Latent Vanable Models in Econometrics                                                       1333

multivariate normal distribution all information about the unknown parameters is
contained in the first and second moments of this distribution.
   Although the assumption of normality of the latent variables may simplify the
analysis of identification by focusing on the moment equations, it is at the same
time a very unfortunate assumption. Under normality the first and second-order
moments equations exhaust all sample information. Under different distributional
assumptions one may hope to extract additional information from higher order
sample moments. Indeed, for the simple regression model (k = 1, & a scalar)
Reierstal(l950) has shown that under normality of the measurement error ui and
the equation error Ed,normality of & is the only assumption under which /3 is not
identified. Although this result is available in many textbooks [e.g. Malinvaud
(1970), Madansky (1976), Schmidt (1976)], a generalization to the multiple linear
regression model with errors in variables was given only recently by Kapteyn and
Wansbeek (1983).4 They show that the parameter vector B in the structural model
(2.1)-(2.2) is identified if and only if there exists no linear combination of the
elements of 6, which is normally distributed.
   That non-identifiability of /3 implies the existence of a normally distributed
linear combination of [, has been proven independently by Aufm Kampe (1979).
He also considers different concepts of non-normality of 6,. Rao (1966, p. 256)
has proven a theorem implying that an element of /3 is unidentified if the
corresponding latent variable is normally distributed. This is obviously a speciali-
zation of the proposition. Finally, Willassen (1979) proves that if the elements of
<, are independently distributed, a necessary condition for /I to be identified is
that none of them is normally distributed. This is a special case of the proposition
as well.
   The proposition rests on the assumed normality of E; and u,. If si and u, follow
a different distribution, a normally distributed <, need not spoil identifiability.
For the simple regression model, Reierserl (1950) showed that if & is normally
distributed, /I is still identified if neither the distribution of u, nor the distribution
of &iis divisible by a normal distribution.5 Since non-normal errors play a modest
role in practice we shall not devote space to the generalization of his result to the
multiple regression errors-in-variables model. Unless otherwise stated, we assume
normality of the errors throughout.
   Obviously, the proposition implies that if the latent variables follow a k-variate
normal distribution, /? is not identified. Nevertheless, non-normality is rarely
assumed in practice, although a few instances will be dealt with in Section 3. In
quite a few cases normality will be an attractive assumption (if only for reasons of


  4Part of the result was stated by Wolfowitz (1952).
   51f three random variables, u, w, and z, have characteristic functions q,(t), v,,,(r), and r+(f)
satisfying q,(f) = cp,(f).cp,(t), we say that the distribution of u is divisible by the distribution of w
and divisible by the distribution of z.
1334                                                                   D. J. Aigner et al.

tradition) and even if in certain instances normality is implausible, alternative
assumptions may lead to mathematically intractable models. Certainly for appli-
cations the argument for tractability is most persuasive.
   Due to a result obtained by Deistler and Seifert (1978), identifiability of a
parameter in the structural model is equivalent to the existence of a consistent
estimator of that parameter (see in particular their Remark 7, p. 978). In the
functional model there is no such equivalence. It appears that the functional
model is identified, but there do not exist consistent estimators of the parameters
P2, e2, or 52. Let us first look at the identification result.
   According to results obtained by Rothenberg (1971) and Bowden (1973) a
vector of parameters is identified if the information matrix is non-singular. So, in
order to check identification we only have to compute the information matrix
defined as:


                                                                                 (2.11)


where log L, is given by:


       logL,=-;logO2-          glog]O( - ftr( X- E)QP1( X- E)

                - fo-‘(   y - Z/3)1( y-~/3)-~nklog27r,                           (2.12)


and B is the [k2 + (n + l)k + l]-vector of structural and incidental parameters
given by B = (/3’, u2, v’, t’)‘, where’ cp= vet G, 6 = vet Z. After some manipula-
tion we find that:


                             n
                  0          -op4
                             2
                  0              0    ;(Poo-l)                   0

             a-“(ps)             0           0           (52-l + K2&3’) @I,

                                                                                 (2.13)

In general the matrix 9 is positive definite and hence both the structural and the
incidental parameters are identified. But this result does not help us obtain
reasonable estimates of the parameters since no consistent estimators exist.
   To see why this is true we use a result obtained by Wald (1948). In terms of the
functional model his result is that the likelihood (2.3) admits a consistent estimate
Ch. 23: Lotent   Variable Models in Econometrics                                  1335

of a parameter of the model (i.e. a2 or an element of /3 or 52) if and only if the
marginal likelihood of y, and xi admits a consistent estimate of this parameter for
any arbitrary choice of the distribution of &. To make sure that /3 can be
consistently estimated, we have therefore to make sure that it is identified under
normality of the incidental parameters (if no linear combination of the latent
variables were normally distributed it would be identified according to the
proposition). The same idea is exploited by Nussbaum (1977) to prove that in the
 functional model without additional restrictions no consistent estimator of
 the parameters exists.
   This result is of obvious practical importance since it implies that, under the
assumption of normally distributed u, and E;, investigation of (consistent) estima-
bility of parameters can be restricted to the structural model with normally
distributed incidental parameters. If u, and E, are assumed to be distributed other
than normally, the proposition does not apply and investigation of the existence
of consistent estimators has to be done on a case-by-case basis.
   Some authors [e.g. Malinvaud (1970, p. 401n)] have suggested that in the
functional model the relevant definition of identifiability of a parameter should be
that there exists a consistent estimator of the parameter. We shall follow that
suggestion from now on, observing that in the structural model the definition is
equivalent to the usual definition (as employed in Reierssl’s proof). This conven-
tion permits us to say that, under normality of u, and E,, identification of /3 in the
structural model with normally distributed latent variables is equivalent to
identification of j3 in the functional model.
   The establishment of the identifiability of the parameters in the functional
model via the rank of the information matrix is a bit lengthy, although we shall
use the information matrix again below, in Section 2.3. The identifiability of
parameters in the functional model can be seen more directly by taking expecta-
tions in (2.2) and (2.1). & is identifiable via & = Ex, and /3 via Ey, = &/3, as long
as the columns of Z are linearly independent. Furthermore, a2 and D are
identified by a2 = E( y - [$I)‘( y - [$) and D = E(xi -- &)(x, - 6;)‘. Although
these moment equations establish identifiability, it is clear that the estimators
suggested by the moment equations will be inconsistent. (For example, $2 will
always be estimated as a zero-matrix.)


2.3.   Eficiency

The investigation of efficiency properties of estimators in the structural model
does not pose new problems beyond the ones encountered in econometric models
where all variables of interest are observable. In particular ML estimators are,
under the usual regularity conditions, consistent and asymptotically efficient [see,
for example, Schmidt (1976, pp. 255256)].
1336                                                                                D. J. Aigner et al.

   With respect to the functional model, Wolfowitz (1954) appears to have shown
that in general there exists no estimator of the structural parameters which is
efficient for each possible distribution of the incidental parameters.6 Thus, no
unbiased estimator will attain the Cramer-Rao lower bound and no consistent
estimator will attain the lower bound asymptotically. Nevertheless, it may be
worthwhile to compute the asymptotic Cramer-Rao lower bound and check if an
estimator comes close to it, asymptotically. For model (2.1)-(2.2) we already
know that the information matrix is given by (2.13). The Cramer-Rao lower
bound is given by the inverse of this matrix. The problem with V’ as a lower
bound to the asymptotic variance-covariance          matrix of an estimator is that its
dimension grows with the number of observations. To obtain an asymptotic lower
bound for the variance-covariance           matrix of the estimators of the structural
parameters we invert P and only consider the part of qk- l pertaining to
6 = (B, u 2, cp’)‘. This part is easily seen to be:


               (a2+/3’f2j3)(Ez--1              0             0
                                             2a4
       R,=                 0                                 0       .                        (2.14)
                                              n
                           0                   0

 R, is a lower bound to the variance of any unbiased estimator of 6. A lower
 bound to the asymptotic variance of any consistent estimator of 6 is obtained as
 R=lim n _ mnRn. Since no consistent estimator of the structural parameters exists
 without further identifying restrictions, R has to be adjusted in any practical
 application depending on the precise specification of the identifying restrictions.
 See Section 3.4 for further details.


2.4.    The ultra-structural relations

As an integration of the simple functional and structural relations, Dolby (1976b)
proposes the following model:

       qj = a + /3tij + Eij,                                                                  (2.15)
       Xlj = tij + a,,,        i=l ,***,n;   i=l   ,***,r,                                    (2.16)

where iIij - N(0,0), .si, - N(0, r), and tij - IV&, cp). Dolby derives the likelihood

 6The result quoted here is stated briefly in Wolfowitz (1954), but no conditions or proof are given.
We are not aware of a subsequent publication containing a full proof.
Ch. 23: Latent Variable Models in Econometrics                                      1331

equations for this model as well as the information matrix. Since the case r = 1
yields a model which is closely related to the functional model, the analysis in the
previous section would suggest that in this case the inverse of the information
matrix does not yield a consistent estimate of the asymptotic variance-covariance
matrix, even if sufficient identifying assumptions are made. This is also pointed
out by Patefield (1978).


3.     Single-equation models

For this section the basic model is given by (2.1) and (2.2), although the basic
assumptions will vary over the course of the discussion. We first discuss the
structural model with non-normally distributed latent variables when no extra-
neous information is available. Next we consider an example of a non-normal
model with extraneous information. Since normal structural models and func-
tional models have the same identification properties they are treated in one
section, assuming that sufficient identifying restrictions are available. A variety of
other topics comprise the remaining sub-sections, including non-linear models,
prediction and aggregation, repeated observations, and Bayesian methods.


3.1.    Non-normality and identification: An example

Let us specialize (2.1) and (2.2) to the following simple case:


       Y;=Pt,+&i,                                                                  (3.1)
       xi=5;+ui,          i=l   ,.-., n,                                           (3.2)


where y, , .f,, .si, xi, and vi are scalar random variables with zero means; also, u,, q,
and & are mutually independent. Denote moments by subscripts, e.g. uXXXX               =
E(xP). Assuming that ti is not normally distributed, not all information about its
distribution is contained in its second moment. Thus, we can employ higher order
moments, if such moments exist. Suppose [, is symmetrically distributed around
zero and that its second and fourth moments exist. Instead of three moment
equations in four unknowns, we now have eight equations in five unknowns (i.e.
four plus the kurtosis of &). Ignoring the overidentification, one possible solution
for p can easily be shown to be:


                                                                                   (3.3)
1338                                                                                D. J. Aigner el al.


One observes that the closer the distribution of li comes to a normal distribution,
the closer uXXxX   - 3c& (the kurtosis of the distribution of xi) is to zero. In that
case the variance of the estimator defined by (3.3) may become so large as to
make it useless.
   As an illustration of the results obtained in Section 2.2, the example shows how
identification is achieved by non-normality. Two comments can be made. First, as
already observed in Section 2.2, underidentification comes from the fact that both
5; and ui are normally distributed. The denominator in (3.3) does not vanish if & is
normally distributed but ui is not. Secondly, let us extend the example by adding a
latent variable 5; so that (3.1) becomes:
                                                                                                (3.4)
The measured value of ci is ti, generated by zi = {, + wj, where w, is normally
distributed and independent of u,, E;, &, {,; {, is assumed to be normally distrib-
uted, with mean zero, independent of <,, ui, si. Applying the proposition of
Kapteyn and Wansbeek (1983) (cf. Section 2.2) we realize that there is a linear
combination of Ei and Ii, namely Ti itself, which is normally distributed. Thus,
overidentification due to the non-normal distribution of E, does not help in
identifying y, as one can easily check by writing down the moment equations.


3.2.   Estimation in non-normal structural models

If the identification condition quoted in Section 2.2 is satisfied, various estimation
methods can be used. The most obvious method is maximum likelihood (ML). If
one is willing to assume a certain parametric form for the distribution of the
latent variables, ML is straightforward in principle, although perhaps complicated
in practice.
   If one wants to avoid explicit assumptions about the distribution of the latent
variables, the method of moments provides an obvious estimation method as has
been illustrated above. In general the model will be overidentified so that the
moment equations will yield different estimators depending on the choice of
equations used to solve for the unknown parameters. In fact that number of
equations may become infinite. One may therefore decide to incorporate only
moments of lowest possible order and, if more than one possible estimator
emerges as a solution of the moment equations, as in the example, to choose some
kind of minimum variance combination of these estimators. It seems that both the
derivation of such an estimator and the establishment of its properties can
become quite complicated.’

   ‘Scott (1950) gives a consistent estimator of /II in (3.1) by using the third central moment of the
distribution of 6,. Rather than seeking a minimum variance combination, Pal (1980) considers various
moment-estimators and compares their asymptotic variances.
Ch. 23: Latent Vuriahle Models in Economevics                                              1339


   A distribution-free estimation principle related to the method of moments is
the use of product cumulants, as suggested by Geary (1942, 1943). A good
discussion of the method is given in Kendall and Stuart (1979, pp. 419-422). Just
as the method of moments replaces population moments by sample moments, the
method of product cumulants replaces population product cumulants by sample
product cumulants. Also here there is no obvious solution for overidentification.
For the case where one has to choose between two possible estimators, Madansky
(1959) gives a minimum variance linear combination. A generalization to a
minimum variance linear combination of more than two possible estimators
appears to be feasible but presumably will be quite tedious.
   A third simple estimator with considerable intuitive appeal is the method of
grouping due to Wald (1940); see, for example, Theil(l971) for a discussion. In a
regression context, this is nothing more than an instrumental variables technique
with classification dummy variables as instruments.
   The idea is to divide the observations into two groups, where the rule for
allocating observations to the groups should be independent of E; and ui. For both
groups, mean values of y, and xi are computed, say j$, Xi, j2, and X2. The
parameter j3 in (3.1) is then estimated by:


     B   ~   72 -     r1
             -        -    .                                                              (3.5)
             x2   -   Xl




One sees that as an additional condition, plim(Z, - Xi) should be non-zero for b
to exist asymptotically. If this condition and the condition for the allocation rule
is satisfied, B is a consistent estimator of p. Wald also gives confidence intervals.
The restrictive aspect of the grouping method is the required independence of the
allocation rule from the errors ei and ui.* If no such rule can be devised, grouping
has no advantages over OLS. Pakes (1982) shows that under normality of the ti
and a grouping rule based on the observed values of the xi, the grouping
estimator has the same asymptotic bias as the OLS estimator. Indeed, as he points
out, this should be expected since the asymptotic biases of the two estimators
depend on unknown parameters. If the biases were different, this could be used to
identify the unknown parameters.
   If the conditions for the use of the grouping estimator are satisfied, several
variations are possible, like groups of unequal size and more than two groups.
[See, for example, Bartlett (1949), Dorff and Gurland (1961a), Ware (1972) and
Kendall and Stuart (1979, p. 424 ff.). Small sample properties are investigated by
Dorff and Gurland (1961b).]

  ‘These are sufficient conditions for consistency; Neyman and Scott (1951) give slightly weaker
conditions that are necessary and sufficient.
1340                                                                           D. J. Aigner et al.

   The three estimators discussed so far can also be used in the functional model
under    a somewhat different interpretation.   The assumptions on cumulants or
moments are now not considered as pertaining to the distribution of 5, but as
assumptions on the behavior of sequences of the fixed variables. An example of
the application of the method of moments to a functional model can be found in
Drion (1951). Richardson and Wu (1970) give the exact distribution of grouping
estimators for the case that the groups contain an equal number of observations.
    In conclusion, we mention that Kiefer and Wolfowitz (1956) have suggested a
maximum likelihood estimator for the non-normal structural model with one
 regressor. A somewhat related approach for the same model appears in Wolfowitz
 (1952). Until recently, it was not clear how these estimators could be computed,
 so they have not been used in practice. 9 Neyman (1951) provides a consistent
 estimator for the non-normal structural model with one regressor for which
 explicit formulas are given, but these are complicated and lack an obvious
 interpretation.
    It appears that there exist quite a few consistent estimation methods for
 non-normal structural models, that is, structural models satisfying the proposition
 of Section 2.2. Unfortunately, most of these methods lack practical value, whereas
 a practical method like the method of product cumulants turns out to have a very
 large estimator variance in cases where it has been applied [Madansky (1959)].
 These observations suggest that non-normality is not such a blessing as it appears
 at first sight. To make progress in practical problems, the use of additional
 identifying information seems almost indispensable.


3.3.    A non-normal model with extraneous information

 Consider the following model:

                                                                                           (3.6)
where ei is normal i.i.d., with variance u,‘.
   The variable ti follows a binomial distribution; it is equal to unity with
probability p and to zero with probability q, where p + q = 1. But & is unobserv-
able. Instead, xi is observed. That is, xi = Ii + ui, where u, is either zero (xi
measures & correctly) or minus one if & equals one, or one if & equals zero (xi
measures ti incorrectly). There is, in other words, a certain probability of
misclassification. Since the possible values of vi depend on &, the measurement
error is correlated with the latent variable. T’he pattern of correlation can be
conveniently depicted in a joint frequency table of ui and xi, as has been done by
Aigner (1973).

   ‘For a recent operationalization,
                                  see, for example,Heckmanand Singer (1982).
Ch. 23: L.atent Variable   Models in Econometrics                                 1341


   To check identification we can again write down moments (around zero):

                                                                                 (3.7)

Since the moments of ei are all a function of u,‘, one can easily generate equations
like (3.7) to identify the unknown parameters p, &, &, u,‘. The model is thus
identified even without using the observed variable xi! The extraneous informa-
tion used here is that we know the distribution function from which the latent
variable has been drawn, although we do not known its unknown parameter p.
   The identification result remains true if we extend model (3.6) by adding
observable exogenous variables to the right-hand side. Such a relation may for
example occur in practice if y represents an individual’s wage income, Ei indicates
whether or not he has a disease, which is not always correctly diagnosed, and the
other explanatory variables are years of schooling, age, work experience, etc. In
such an application we may even have more information available, like the share
of the population suffering from the disease, which gives us the parameter p. This
situation has been considered by Aigner (1973), who uses this knowledge to
establish the size of the inconsistency of the OLS estimator (with xi instead of the
unobservable 5;) and then to correct for the inconsistency to arrive at a consistent
estimator of the parameters in the model.
   Mouchart (1977) has provided a Bayesian analysis for Aigner’s model. A fairly
extensive discussion of errors of misclassification outside regression contexts has
been given by Co&ran (1968).



3.4.    Identifying restrictions in normal structural and functional models

Rewrite the model (2.1)-(2.2) in matrix form:

       y=q3+&,                                                                   (3.8)
       x=z+v;                                                                    (3.9)

e= (El... E, )’ and V is the (n x k)-matrix with vi’as its i th row. In this section we
assume the rows of Z either to be fixed or normally distributed. To remedy the
resulting underidentilication, m 2 k* identifying restrictions are supposed to be
available:

       F(B,fJ*,s2)= 0,                                                          (3.10)

F being an m-vector of functions. If appropriate,      we take these functions to be
continuously differentiable.
1342                                                                    D. J. Aigner et al.

   Under    the structural interpretation with normally distributed 6,, estimation of
the model can take place by means of maximum likelihood where the restrictions
(3.10) are incorporated in the likelihood function (2.10). The estimator will
asymptotically attain the Cramer-Rao bound. The inverse of the information
matrix hence serves as a consistent estimator of the variance-covariance matrix of
the estimator of /3, u2 and 0. Some special cases have been dealt with in the
literature, like the simple regression model with errors-in-variables, where the
variances of both the measurement error and the error in the equation are known
[Birch (1964), Barnett (1967), Dolby (1976a)], or where one of the two variances is
known [Birch (1964), Kendall and Stuart (1979, p. 405)J.
    Although the identifying restrictions (3.10) also make it possible to construct a
consistent estimator of the parameters in the functional model, it is a little less
obvious how to construct such an estimator. In Section 2.1 we saw that without
identifying restrictions ML is not possible. In light of the findings of Section 2.2
 this is not surprising, because without identifying restrictions a consistent estima-
 tor does not exist. It is of interest to see if unboundedness of the likelihood
 function persists in the presence of identifying restrictions.
    Recall (2.12). In order to study the behavior of log L,, we first observe that a
 choice of Z such that (X - Z)‘( X - Z) and ( y - Zb)‘( y - E/3) are both zero is
 only possible if y and X in the sample satisfy y = Xp. This event has zero
probability so we assume that either (X- E)‘( X- Z) or ( y - ZJ?)‘( y - Z/3) is
 non-zero. Next assume that F( /I, u 2, a) is such that u 2 --f 0 if and only if (i21+ 0
 and both converge to zero at the same rate. Obviously, for positive finite values of
 u 2 and 1L?1, log L, is finite-valued. If u 2 or 1f21 go to infinity, log L, approaches
 minus infinity. Finally, consider the case where both u2 and I521go to zero.
 Without loss of generality we assume that Z is chosen such that X- Z is zero.
 The terms - (n/2)log u 2 and - (n/2)logI 52) go to infinity, but these terms are
 dominated by - $a-‘( y - Zfi)‘( y - Zj3), which goes to minus infinity. Thus,
 under the assumption with respect to F(/3; a*, fi), the log-likelihood is continuous
 and bounded from above, so that a proper maximum of the likelihood function
 exists.
    A well-known example is the case where u -2L? is known. While that case has
 received considerable attention in the literature, we have chosen to exclude a
 detailed treatment here because there seems to be little or no practical relevance
 to it. Some references are Moberg and Sundberg (1978), Copas (1972), Van Uven
 (193% Sprent (1966), Dolby (1972), Hoschel(1978), Casson (1974), Kapteyn and
 Wansbeek (1983), Robertson (1974), Schneeweiss (1976), Kapteyn and Wansbeek
 (1981) Fuller and Hidiroglou (1978), DeGracie and Fuller (1972), and Fuller
 (1980).
    No definitive analyses exist of overidentified functional models. A promising
 approach appears to be to compute the ML estimator as if the model were
 structural with normally distributed latent variables and to study its properties
 under functional assumptions. Kapteyn and Wansbeek (1981) show that the ML
Ch. 23: Latent Variable Models in Econometrics                                   1343

estimator is asymptotically normally distributed with a variance-covariance     ma-
trix identical to the one obtained under structural assumptions. Also, the distri-
butions of certain test statistics appear to be the same under functional and
structural assumptions. They also show that a different estimator developed by
Robinson (1977) has the same asymptotic distribution under functional and
structural assumptions.
   Let us next consider the (asymptotic) efficiency of estimators in the functional
model with identifying restrictions. It has been observed in Section 2.3 that no
estimator will attain the Cramer-Rao lower bound, but still the lower bound can
 be used as a standard of comparison, As before, cp= vet 52 and 6 = (/3’, e2, q’)‘.
 Furthermore, define the matrix of partial derivatives:


                                                                              (3.11)


where F has been defined in (3.10). Using the formula for the Cramer-Rao lower
bound for a constrained estimator [Rothenberg (1973b, p. 21)] we obtain as an
asymptotic lower bound for the variance of any estimator of 6:

      P = R - RF;( F,RF,‘)-lF,R,                                              (3.12)

where R = lim n _ mnR,, R, being given by (2.14).
   The estimators discussed so far have been described by the large sample
properties of consistency, asymptotic efficiency and asymptotic distribution. For
some simple cases there do exist exact finite sample results that are worth
mentioning.
   One would suspect that the construction of exact distributions is simplest in the
structural model since in that case the observable variables follow a multivariate
normal distribution and the distributions of various statistics that are transforms
of normal variates are known. This knowledge is used by Brown (1957) to derive
simultaneous confidence intervals for the simple structural relation:

      Yi=Po+P15,+5?                i=l   ,-.-,   n,                           (3.13)


with 5, and q independently normally distributed variables, and where their
variances are assumed to be known. The confidence intervals are based on a
x2-distribution. For the same model with the ratio of the variances known, Creasy
(1956) gives confidence intervals based on a t-distribution.” Furthermore, she
shows that a confidence interval obtained in the structural model can be used as a
conservative estimate of the corresponding confidence interval in the functional

  ‘“See Schneeweiss   (1982) for an improved     proof,
1344                                                                              D. J. Aigner et al.

model, in the sense that the confidence interval in the functional model will
actually be smaller.
   The cases considered by Creasy and by Brown are rather special and simple.
One would like to know, therefore, how good the asymptotic approximations in
more general cases will be. Some optimism in this respect can be gleaned from
results obtained by Richardson and Wu (1970), who present the exact distribution
of the least squares estimator in model (3.13) under both functional and structural
assumptions. It is found that the asymptotic approximations for the variance of
the OLS estimator of & in the functional model are very good. No asymptotic
approximation is needed for the structural case as the exact expression is already
quite simple. In light of the results obtained in Section 2.1, this is what one would
expect.



3.5.    Non-linear models

The amount of work done on non-linear models comprising latent variables is
modest, not surprising in view of the particular difficulties posed by these models
[Griliches and Ringstad (1970)]. In line with the sparse literature on the subject
we only pay attention to one-equation models:

       Y~=f(~lY8)+EiY                i=l >**-,n,                                             (3.14)
       xi = 6, + 0,)                                                                         (3.15)

where &, xi, u,, and /3 are k-vectors, y, and ei are scalars; u, - N(0, s2), with fi
non-singular. There is statistical independence across observations. The function
f is assumed to be twice continuously differentiable. Furthermore, Eu,E, = 0.
   Let us consider the functional model.” The likelihood of the observable
random variables y, and xi is given by:

       L,ocexp(     -+[tr(X-Z)Qn-‘(X-2)’

             +u-‘(Y-F(Z,8))‘(Y-F(2,B))]}.                                                    (3.16)

The n-vector I;( Z, @) has f( &, 8) as its i th element. As in Section 2.2 identifiabil-
ity of the functional model can be checked by writing down the information
matrix corresponding to this likelihood. Again, identifiability does not guarantee
the existence of consistent estimators of /3, 52, and u*. No investigations have
been carried out regarding conditions under which such consistent estimators
exist. Dolby (1972) maximizes L, with respect to 3 and /3, assuming a* and 52 to

  I1We are unaware of any studies that deal with a non-linear structural model.
Ch. 23: Latent   Variable Models in Econometrics                                 1345

be  known. He does not prove consistency of the resulting estimator. He claims
that the inverse of the information matrix is the asymptotic variance-covariance
matrix of the maximum likelihood estimator. This claim is obviously incorrect, a
conclusion which follows from the result by Wolfowitz (1954). Dolby and Lipton
(1972) apply maximum likelihood to (3.14)-(3.15), without assuming a2 and D to
be known. Instead, they assume replicated observations to be available. A similar
analysis is carried out by Dolby and Freeman (1975) for the more general case
that the errors in (3.14)-(3.15) may be correlated across different values of the
index i.
   A troublesome aspect of the maximum likelihood approach in practice is that
in general no closed form solutions for Z and /3 can be found so that one has to
iterate over all k(n + 1) unknown parameters. For sample sizes large enough to
admit conclusions on the basis of asymptotic results, that may be expected to be
an impossible task. Also, Egerton and Laycock (1979) find that the method of
scoring often does not yield the global maximum of the likelihood.
   If more specific knowledge is available about the shape of the function f, the
numerical problems may simplify considerably. O’Neill, Sinclair and Smith (1969)
describe an iterative method to fit a polynomial for which computation time
increases only linearly with the number of observations. They also assume the
variance-covariance     matrix of the errors to be known. The results by O’Neill,
Sinclair and Smith suggest that it may be a good strategy in practice to
approximate f(&, 8) by a polynomial of required accuracy and then to apply
their algorithm. Obviously a lot more work has to be done, particularly on the
statistical properties of ML, before any definitive judgment can be made on the
feasibility of estimating non-linear functional models.


3.6.   Should we include poor proxies?

Rewrite (2.1) as:


                                                                              (3.17)


with &i and fii being (k - 1)-vectors containing the first (k - 1) elements of & and
/3; the scalars tik and fik are the k th elements of I, and /3. The vector &i is
measured without error. For tik we have a proxy, xik, with observational error
independent of & and ci. Suppose we are mainly interested in estimating &.
Wickens (1972) and McCallum (1972) compare two possible estimation methods:
OLS with cik in (3.17) replaced by xik, or OLS after omitting tik from (3.17). They
show that if Eik correlates with tit the first method always gives an asymptotic bias
which is smaller than that of the second method. If tik does not correlate with &i,
1346                                                                 D. J. Aigner et al.

both estimation methods are, of course, unbiased. Thus one should always include
a proxy, however poor it may be.
   No such clear-cut conclusion can be obtained if also one or more elements of
&i are measured with error [Barnow (1976) and Garber and Klepper (1980)], or if
the measurement error in Eik is allowed to correlate with &i [Frost (1979)].
Aigner (1974b) considers mean square error rather than asymptotic bias as a
criterion to compare estimators in McCallum’s and Wickens’ model. He gives
conditions under which the mean square error of OLS with omission is smaller
than OLS with the proxy included. Giles (1980) turns the analyses of McCallum,
Wickens and Aigner upside down by considering the question whether it is
advisable to omit correctly measured variables if our interest is in the coefficient
of the mismeasured variable.
   McCallum’s and Wickens’ result holds true for both the functional and
structural model. Aigner’s conditions refer only to the structural model with
normally distributed latent variables. It would be of interest to see how his
conditions modify for a functional model.



3.7.    Prediction and aggregation

It is a rather remarkable fact that in the structural model the inconsistent OLS
estimator can be used to construct consistent predictors, as shown by Johnston
(1972, pp. 290, 291). The easiest way to show this is by considering (2.10): y, and
x, are simultaneously normally distributed with variance-covariance matrix ,Z as
defined in (2.5). Using a well-known property of the normal distribution we
obtain for the conditional distribution of y, given xi:


       fhlx,) = &       exp( - iy-‘(   y, - x@)‘),                             (3.18)


with y and a defined with respect to (2.9). Therefore, E( y]X) = Xa. This implies
that P, the OLS estimator of a is unbiased given X, and E( X&1X) = Xa = E( y 1X).
We can predict y unbiasedly (and consistently) by the usual OLS predictor,
ignoring the measurement errors. As with the preceding omitted variable problem,
we should realize that the conclusion only pertains to prediction bias, not to
precision.
  The conclusion of unbiased prediction by OLS does not carry over to the
functional model. There we have:


       f(Y,lxiYSj>= ~exp(-jo-2(y,-E~~)2),                                      (3.19)
Ch. 23: Lurenr Variable Models in Econometrics                                     1347

so  that I$ y]X, Z) = Zj?, which involves both the incidental parameters and the
unidentified parameter vector 8. OLS predictions are biased in this case, cf.
Hodges and Moore (1972).
   A somewhat different approach to prediction (and estimation) was taken by
Aigner and Goldfeld (1974). They consider the case where exogenous variables in
micro equations are measured with error but not so the corresponding aggregated
quantities in macro equations. That situation may occur if the aggregated
quantities have to satisfy certain exact accounting relationships which do not have
to hold on the micro level. The authors find that under certain conditions the
aggregate equations may yield consistent predictions whereas the micro equations
do not. Similar results are obtained with respect to the estimation of parameters.
   In a sense this result can be said to be due to the identifying restrictions that
are available on the macro level. The usual situation is rather the reverse, i.e. a
model which is underidentified at the aggregate level may be overidentified if
disaggregated data are available. An example is given by Hester (1976).
   Finally, an empirical case study of the effects of measurement error in the data
on the quality of forecasts is given by Denton and Kuiper (1965).


3.8.    Bounds on parameters in underidentified models

The maximum-likelihood         equations that correspond to the full log-likelihood L,
[recall (2.10)] are:

       &= (XlX)_‘Xly                                                            (3.20)
       y=n-l(y-X&)‘(y-X&),                                                      (3.21)
       a= n-‘X’X.                                                               (3.22)
Without further restrictions we cannot say very much about the parameters of
main interest, 8. An easy-to-accept restriction would be that the estimates of u*
and the diagonal elements of K and s2 should be non-negative. If in addition we
assume that D is diagonal we obtain the following results.
   Denote by w the k-vector of the’diagonal elements of D and by k the k-vector
of diagonal elements of K; B is the k X k diagonal matrix with the elements of /I
on its main diagonal. From (3.20)-(3.22) we derive as estimators for a*, w and k
(given j3):
       cj = B-i,@ - B-l&,                                                       (3.23)
       ;k=diaga-ij,                                                             (3.24)

                                                                                (3.25)

where diag a is the k-vector of diagonal elements of a.
1348                                                                       D. J. Aigner   et al.


  In order to actually compute these estimators we have to choose a value for 8.
The restrictions D > 0, i( > 0, 62 > 0 imply that this value, b, has to satisfy:

       diag X’X 2 &-‘X’Xb - B-‘Xly 2 0,                                              (3.26)

       y’y L B’X’Y.                                                                  (3.27)

  Let us first look at the case where k = 1. Then (3.26) reads:

       X’X   2 X’X-   X’y&’   2   0.                                                 (3.28)

So IpI 2 I(X’X)-‘Xlyl = I&( and B must have the same sign as &. Inequality
(3.27) implies for this case lb\ I [( y’y)-‘X’y-‘.        Thus, a consistent estimator for
/? must have the same sign as the OLS estimator and its absolute value has to be
between the OLS estimator and the reciprocal of the OLS regression coefficient of
the regression of X on y.
   For k > 1, such simple characterizations are no longer possible, since they
depend in particular on the structure of X’X and the signs of the elements of 8.
The only result that seems to be known is that if one computes the k + 1
regressions of each of the variables y,, xii, . . . , xik on the other k variables and all
these regressions are in the same orthant, then fi has to lie in the convex hull of
these regressions. [Frisch (1934), Koopmans (1937), Klepper and Learner (1984);
see Patefield (1981) for an elegant proof using the Frobenius theorem]. Klepper
and Learner (1984) show that if the k + 1 regressions are not all in the same
orthant, if X is a k-vector not equal to (l/n)X’y              or the zero vector, and if
(X’X))’ has no zero elements, then the set (xj3lfi satisfying (3.26) and (3.27)) is
the set of real numbers. Obviously, if one is willing to specify further prior
knowledge, bounds can also be derived for k > 1. For example, Levi (1973,1977)
considers the case where only one of the exogenous variables is measured with
error and obtains bounds for the coefficient of the mismeasured variable. Differ-
ent prior knowledge is considered by Klepper and Learner (1984).
   A related problem is whether the conventional t-statistics are biased towards
zero. Cooper and Newhouse (1972) find that for k = 1 the t-statistic of the OLS
regression coefficient is asymptotically biased toward zero. For k > 1 no direction
of bias can be determined.
   Although inequalities (3.26) and (3.27) were derived from the maximum
likelihood equations of the structural model, the same inequalities are derived in
the functional model, because & is simply the OLS estimator and t the residual
variance estimator resulting from OLS. In fact, Levi only considers the OLS
estimator & and derives bounds for a consistent estimator by considering the
inconsistency of the OLS estimator.
Ch. 23: Lorent Variable Models in Econometrics                                    1349

   Notice that the bounds obtained are not confidence intervals but merely
bounds on the numerical values of estimates. These bounds can be transformed
into confidence intervals by taking into account the (asymptotic) distribution of
the OLS estimator [cf. Rothenberg (1973a), Davies and Hutton (1975), Kapteyn
and Wansbeek (1983)]. One can also use the asymptotic distribution of the OLS
estimator and a prior guess of the order of magnitude of measurement error to
derive the approximate bias of the OLS estimator and to judge whether it is
sizable relative to its standard error. This gives an idea of the possible seriousness
of the errors-in-variables bias. This procedure has been suggested by Blomqvist
(1972) and Davies and Hutton (1975).



3.9,    Tests for measurement error

Due to the under-identification of errors-in-variables models, testing for the
presence of measurement error can only take place if additional information is
available. Hitherto the literature has invariably assumed that this additional
information comes in the form of instrumental variables. Furthermore, all tests
proposed deal with the functional model; testing in a structural model (i.e. a
structural multiple indicator model, cf. Section 4) would seem to be particularly
simple since, for example, ML estimation generates obvious likelihood ratio tests.
   For the single-equation functional model, various tests have been proposed, by
Liviatan (1961, 1963), Wu (1973), and Hausman (1978), all resting upon a
comparison of the OLS estimator and the IV estimator. Under the null-hypothe-
sis, H,, that none of the variables is measured with error, the OLS estimator is
more efficient than the IV estimator, and both are unbiased and consistent. If H,
is not true the IV estimator remains consistent whereas OLS becomes incon-
sistent. Thus, functions of the difference between both estimators are obvious
choices as test-statistics.
   To convey the basic idea, we sketch the development of Wu’s second test
statistic for the model (3.8)-(3.9). The stochastic assumptions are the same as in
Sections 2.1 and 3.4. Let there be available an (n x k)-matrix W of instrumental
variables that do not correlate with E or V. In so far as certain columns of E are
supposed to be measured without error, corresponding columns of E and W may
be identical.
   A possible statistic to test the null-hypothesis that none of the columns of Z has
been measured with error is:


       TE      Q*/k
                                                                               (3.29)
            e/(n   -2k)    ’
1350                                                                 D. J. Aigner et al.


where

       Q*= (b-&V)‘[(W’X)-lW’W(X’W)-‘-(X’X)-l]~l(b-j$,),                        (3.30)

       b = (XT-‘x’y,                                                           (3.31)

       &, = (w~x)-‘w$,                                                         (3.32)
        Q=Q~-Q*,                                                               (3.33)
and

        Q’=(y-Xb)‘(y-Xb).                                                      (3.34)

Note that b is the OLS estimator of /3 and &v is the IV estimator of 8.
   Wu shows that Q* and Q are mutually independent X2 distributed random
variables with degrees of freedom equal to k and n - 2k, respectively. Conse-
quently, T follows a central F-distribution with k and n - 2k degrees of freedom.
This knowledge can be used to test H,.
   Conceivably T is not the only possible statistic to test H,. Wu (1973) gives one
other statistic based on the small sample distribution of b and Brv and two
statistics based on asymptotic distributions. Two different statistics are proposed
by Hausman (1978).


3.10.     Repeated observations

Hitherto we have only discussed models with single indexed variables. As soon as
one has more than one observation for each value of the latent variable the
identification situation improves substantially. We shall illustrate this fact by a
few examples. We do not pay attention to matters of efficiency of estimation,
because estimation of these models is discussed extensively in the variance
components literature. [See for example, Amemiya (1971).] Consider the following
model:

       Y,j = ‘,jP + 51~+ &‘J ’    i=l ,.**, n; j=l,...,m.                       (3.35)

The variables z,, and & are for simplicity taken to be scalars; zi, is observable, &
is not. A model like (3.35) may occur in panel studies, where n is the number of
individuals in the panel and m is the number of periods in which observations on
the individuals are obtained. Alternatively, the model may describe a controlled
experiment in which the index i denotes a particular treatment with m observa-
tions per treatment.
Ch. 23: Latent Variable Models in Econometrics                                    1351

   As to the information regarding t, we can distinguish among three different
situations. The first situation is that where there are no observations on 5;. In a
single-indexed model, that fact is fatal for the possibility of obtaining a consistent
estimator for /? unless z,, and & are uncorrelated. In the double-indexed model,
however, we can run the regression:

                                                                               (3.36)

where the { ai} are binary indicators. The resulting estimate of fi is unbiased and
consistent. Although it is not possible to estimate h, the estimates of (Y, are
unbiased estimates of &h so that the treatment effects are identified. A classical
example of this situation is the correction for management bias [Mundlak (1961)]:
if (3.36) represents a production function and E, is the unobservable quality of
management in the ith firm, omission of 5; would bias j3, whereas formulation
(3.36) remedies the bias.
   A second situation which may occur is that for each latent variable there is one
fallible measurement: x, = 5, + u,, i = 1,. . . , n. One measurement per .& allows for
identification of all unknown parameters but does not affect the estimator of p, as
can be seen readily by writing out the required covariance equations.
   The third situation we want to consider is where there are m measurements of
5,:

           =   t,   +   uiJ ?   i=l   ,...,   n;   j=l   T-.-Tm.               (3.37)
     xlJ



Now there is overidentification,    and allowing for correlation between u,~ and ui,,
I # j, does not alter that conclusion. Under the structural interpretation,   ML is
the obvious estimation method for this overidentified case. In fact, (3.35) and
(3.37) provide an example of the multiple equation model discussed in the next
section, where ML estimation will also be considered.
   ML estimation for the functional model with replicated observations has been
considered by Villegas (1961), Barnett (1970), Dolby and Freeman (1975), and
Cox (1976). Barnett restricts his attention to the case with only one independent
variable. Cox analyzes the same model, but takes explicitly into account the
required non-negativity of estimates of variances. Villegas finds that apart from a
scalar factor the variance-covariance matrix of the errors is obtained as the usual
analysis-of-variance estimator applied to the multivariate counterpart of (3.37).
The structural parameters are next obtained from the usual functional ML
equations with known error matrix. Healy (1980) considers ML estimation in a
multivariate extension of Villegas’ model (actually a more general model of which
the multivariate linear functional relationship is a special case). Dolby and
Freeman (1975) generalize Villegas’ analysis by allowing the errors to be corre-
lated across different values of i. They show that, given the appropriate estimator
1352                                                                  D. J. Aigner et al.

for the variance-covariance       matrix of the errors, the ML estimator of the
structural parameters is identical to a generalized least squares estimator. Both
Barnett (1970) and Dolby and Freeman (1975) derive the information matrix and
use the elements of the partitioned inverse of the information matrix corre-
sponding to the structural parameters as asymptotic approximations to the
variance of the estimator. In light of the result obtained by Wolfowitz (1954) (cf.
Section 2.3) these approximations would seem to underestimate the true asymp-
totic variance of the estimator. Regarding Bamett’s paper, this is shown explicitly
by Patefield (1977).
   Villegas (1964) provides confidence regions for parameters in the linear func-
tional relation if there are replicated measurements for each variable. His analysis
has been generalized to a model with r linear relations among p latent variables
( p > r) by Basu (1969). For r > 2 the confidence regions are not exact.



3. Il.   Bayesian analysis

As various latent variables models suffer from underidentification, and hence
require additional prior information, a Bayesian analysis would seem to be
particularly relevant to this type of model. Still, the volume of the Bayesian
literature on latent variables models has remained modest hitherto. We mention
Lindley and El-Sayyad (1968), Zellner (1971, ch. V), Florens, Mouchart and
Richard (1974), Mouchart (1977), and Learner (1978b, ch. 7) as the main
contributions in this area. As far as identification is concerned, a Bayesian
approach is only one of many possible ways to employ extraneous information.
The use of auxiliary relations (Section 4) provides an alternative way to tackle the
same problem. The choice of any of these approaches to identification in practical
situations will depend on the researcher’s preferences and the kind of extraneous
information available.
   As noted by Zellner (1971, p. 145) and Florens et al. (1974) the distinction
between functional and structural models becomes a little more subtle in a
Bayesian context. To illustrate, reconsider model (2.1), (2.2). Under the functional
interpretation, &, /3, u2, and D are constants. A Bayesian analysis requires prior
densities for each of these parameters. The prior density for t, makes the model
look like a structural relationship. Florens, Mouchart and Richard (1974, p. 429)
suggest that the difference is mainly a matter of interpretation, i.e. one can
interpret Z as random because it is subject to sampling fluctuations or because it
is not perfectly known. In the structural model, in a Bayesian context one has to
specify in addition a prior distribution for the parameters that governs the
distribution of the incidental parameters. Of course, also in the functional model
where one has specified a prior distribution for the incidental parameters, one
may next specify a second stage prior for the parameters of the prior distribution
Ch. 23: Latent   Variable Models in Econometrics                                 1353

of the incidental parameters. The parameters of the second stage distributions are
sometimes called hyperparameters.
   The Bayesian analysis of latent variables models has mainly been restricted to
the simple linear regression model with errors-m-variables [i.e. (2.1) is simplified
to Y, = Pa + PiEi + Ei, with &s,,Pi, 5, scalars], although Florens et al. (1974) make
some remarks on possible generalizations of their analysis to the multiple regres-
sion model with errors-in-variables.
    The extent to which Bayesian analysis remedies identification problems de-
pends on the strength of the prior beliefs expressed in the prior densities. This is
illustrated by Lindley and El-Sayyad’s analysis. In the simple linear regression
model with errors in the variables they specify a normal prior distribution for the
latent variables, i.e. the [, are i.i.d. normal with mean zero and variance 7, and
next a general prior for the hyperparameter 7 and the structural parameters.
 Upon deriving the posterior distribution they find that some parts of it depend on
 the sample size n, whereas other parts do not. Specifically, the marginal posterior
distribution of the structural parameters and the hyperparameter does not depend
on n. Consequently, this distribution does not become more concentrated when n
goes to infinity.
    This result is a direct consequence of the underidentification of the model.
When repeating the analysis conditional on a given value of the ratio of the error
variances with a diffuse prior for the variance of the measurement error, the
posterior distribution of the structural parameters does depend on n and becomes
more and more concentrated if n increases. The marginal posterior distribution of
pi concentrates around the functional ML value. This is obviously due to the
identification achieved by fixing the ratio of the error variances at a given value.
   The analyses by Zellner (1971, ch. V) and Florens et al. (1974) provide
numerous variations and extensions of the results sketched above: if one imposes
exact identifying restrictions on the parameters, the posterior densities become
more and more concentrated around the true values of the parameters when the
number of observations increases. If prior distributions are specified for an
otherwise unidentified model, the posterior distributions will not degenerate for
increasing n and the prior distributions exert a non-vanishing influence on the
posterior distributions for any number of observations.


4.   Multiple equations

To introduce the ideas to be developed in this section, let us momentarily return
to the simple bivariate regression model (3.1)-(3.2) in vector notation:

     Y=IP+E,                                                                   (4.1)
     X=(+U,                                                                    (4.2)
1354                                                                   D. J. Aigner et al.

with y, x, [, e and u being (n x 1)-vectors and p a scalar. As before, y and x are
observable, and 6, E and u are not. For most of this section, we consider the
structural model, i.e. [ is random. The elements of [, e, and u are assumed to be
normally i.i.d. distributed with zero means and variances utc, u2 and a”,, respec-
tively.
   As we have seen, there is no way of obtaining consistent estimators for this
model without additional information. In this section it is assumed that the
available additional information takes on either of two forms:

        z=<y+s,                                                                    (4.3)
with z an observable (n X 1) vector, y a scalar parameter, and 6 an (n X 1) vector
of independent disturbances following an N(0, us8I,,) distribution, independent of
e, u and [; or:

        t=Wa+u,                                                                    (4.4)

with W an (n X m) matrix of observable variables, a an (m X 1) vector of
coefficients, and u an (n X 1) vector of independent disturbances following an
N(0, u,,ln) distribution, independent of e and u. Also, models will be considered
that incorporate both types of additional equations at the same time.
   An interpretation of (4.3) is that z is an indicator of I; just like y and x,z is
proportional to the unobservable <, apart from a random error term, and
therefore contains information on & Relation (4.4) may be interpreted such that
the variables in W are considered to be the cauSeS of 5, again apart from a
random error term. In any case, the model is extended by the introduction of one
or more equations, hence the description “multiple equations” for this type of
approach to the measurement error problem. Note that no simultaneity is
involved.
   Additional information in the form of an extra indicator being available for an
unobservable variable is the most frequently considered cure for the crrors-
in-variables identification problem, popularized in particular by the work of
Goldberger (1971,1974) and Goldberger and Duncan (1973). It is in fact, nothing
but the instrumental variables (IV) approach to the problem [Reiersol (1945)].
Section 4.1 deals with the IV method, whereas Section 4.2 discusses factor
analysis in its relation to IV. Section 4.3 discusses models with additional causes,
and models both with additional causes and indicators.


4. I.   Instrumental variables

Due to the assumption of joint normality for e, u and & all sample information
relating to the parameters in the model (4.1), (4.2) and (4.3) is contained in the six
Ch. 23: Lutent   Vuriahle   Models in Econometrics                             1355

covariance equations [(recall (1.5) and (1.9)]:




                                                                             (4.5)




This system of six equations in six unknowns can easily be solved to yield
consistent estimators of uEE, p, y, u2, u,,,, and a,,. So, the introduction of the
indicator variable (or instrumental variable) z renders the model identified.
   Since the number of equations in (4.5) is equal to the number of parameters,
the moment estimators are in principle also the ML estimators. This statement is
subject to a minor qualification when ML is applied and the restriction of
non-negativity of the error variances is explicitly imposed. Learner (1978a) has
shown that the ML estimator of p is the median of Syz/S,,, $,,,/S,,Y and &/&
where S indicates the sample counterpart of u, if these three quantities have the
same sign.
   In the multivariate errors-in-variables [cf. (3.8) (3.9)] model we need at least
12 k indicator variables (or instrumental variables) in order to identify the
parameter vector 8. The following relation is then assumed to hold:


      Z=Z’r’t         A,                                                      (4.6)

with Z the (n X 1) matrix of indicator variables, r an (I X k) matrix of coeffi-
cients and A an (n x I) matrix of disturbances, each row of which is [-dimen-
sional normally distributed, independent of E, I/ and Z, with zero expectation and
variance-covariance matrix 0. No restrictions are imposed on 0. This means that
the instrumental variables are allowed to show an arbitrary correlation pattern,
correlate with E (and hence X), but are independent of the disturbance E- Vfi in
the regression of y on X. Note that in particular this makes it possible to use the
columns of s that are measured without error as instrumental variables.
   Let CC?be the (k x k) variance-covariance     matrix of a row of V, and let
K 3 I$-‘ZC.     Then, in an obvious notation, the covariance equations (4.5) now
1356                                                                   D. J. Aigner et al.

read:
        a~,,=e*+rS’KB,                                                             (4.7)
        2,     = K/3,                                                              (4.8)
        Z,      = TK/3,                                                            (4.9)
        t: ..=K+L’,                                                              (4.10)
        ‘zzx = TK,                                                               (4.11)
        Zz, = I-K P + 0.                                                         (4.12)

The identification of this system can be assessed somewhat heuristically as
follows. Equations (4.7), (4.10) and (4.12) serve to identify the error variances u2,
52 and 0 for given r, K and fl. Substitution of (4.11) into (4.9) yields:

        E?,, = &&%                                                               (4.13)

which shows that 12 k is a necessary condition for the identification of /3. When
I > k, /3 is generally overidentified. For the identification of the other parameters,
K and r, only (4.8) and (4.11) remain; these contain in general insufficient
information, whether k = I or I > k, so these parameters are not identified. This is
basically due to the fact that r occurs only in conjunction with K. The only
exception is when only one column of Z is unobservable. In that case r and K
each contain k unknown elements that can be obtained from (4.8) and (4.11).
More discussion of this point will be given in Section 4.2 below.
   In the case I > k, i.e. there are more instrumental variables than regressors in
the original model, (4.13) does not produce an estimator for /I unambiguously. A
way to reconcile the conflicting information in (4.13) is to reduce it to a system of
k equations by premultiplication with some (k x /)-matrix, G say. A possible
choice for G is:

        G = Z&S;;.                                                               (4.14)

Replacing the Z’s by their sample counterparts,    indicated by a corresponding       S,
the estimator for /3 then is:

       B = (s;&;s,)           - ‘S~&S,,

             = (Xz(.z~z)-*z’x)-1x’z(z2)-1z~.                                     (4.15)

For I = k, this reduces to the well-known formula:

       /.!I= (zfx)-‘zly.                                                        (4.16)
Ch. 23: Latent   Variable   Models   in Econometrics                             1357


Sargan (1958) has shown that the weighting matrix G is optimal in the sense that
it has minimal asymptotic variance in the class of all linear combinations of
estimators which can be derived from (4.13). [See also Malinvaud (1970, section
20.5).] The asymptotic variance-covariance  matrix of B is, both for 1= k and
I> k:


                                                                              (4.17)

When the researcher is in the happy situation that he has more instruments than
error-ridden variables (i.e. I > k), he may also consider applying ML to the full
model after imposing a sufficient number of identifying restrictions on (at least) I
and K. The LISREL program (see Section 5.3) is well-suited for this purpose.
   The major problem involved with IV in the non-dynamic single equation
context, however, is to find instrumental variables. Columns of X without
measurement errors can be used as instruments, but it is often difficult to find
variables that are correlated with a variable in X and are not already explanatory
variables in the model under consideration. The method of grouping, discussed in
Section 3.2, can be considered as a special case of IV, where the instrument
consists of a vector of + l’s and - l’s, allocating observations to the two groups.
The instrument should be uncorrelated with the measurement error in order to
have a consistent estimator of the slope parameters. This is the case, for instance,
when the size of the measurement error is bounded from above and the popula-
tion consists of two subsets separated by an interval at least as great as twice this
maximum. This situation is unlikely to occur in practice.


4.2.   Factor analysis

Factor analysis (FA), a method for dealing with latent variables with a venerable
history in psychometrics, is closely related to instrumental variables. In this
section we will discuss some aspects of FA as far as it is relevant in the present
context without the pretension of coming anywhere near a complete survey. For a
more comprehensive coverage see, for example, Gorsuch (1974), Lawley and
Maxwell (1971), Harman (1967) or Bentler and Weeks (1980); econometricians
will find the book by Mulaik (1972) highly readable because of its notation.
   The connection between the FA and IV models is as follows. Let, in (3.19), the
measurement error between the columns of Z be uncorrelated, i.e. the matrix fi
of measurement error variances and covariances is diagonal, and let the coefficient
matrix of Z, so far implicitly taken to be the unit matrix, be arbitrary. This means
that (i) the correlation between different columns of X is attributable to X only,
and not to the measurement error, and (ii) X is, no longer considered to be a
1358                                                                          D. J. Aigner et al.

direct but erroneous measurement of S. Likewise, let the variance-covariance
matrix 0 of the rows of A in (4.6) be diagonal also; so, the correlation between
different columns of 2 is attributable to Z only, and not to the disturbances A.
   Under the new interpretation, the three equations (3.8), (3.9), (4.6) constituting
the IV model have become formally isomorphous, and there is no reason for
distinguishing between them anymore. We may thus dispense with (3.8) and (3.9)
without loss of generality and take (4.6) as the FA model, under the following
interpretation:    Z is the (n x /)-matrix of indicator variables of the k latent
variables (or common factors) grouped in Z oforder(nXk);Aisan(nXI)-matrix
of disturbances (or unique factors.) The common factors account for the correla-
tion between the indicators, and the unique factors take account of the remaining
variance. r is again an (I x k)-matrix of regression coefficients, or factor loadings
or factor pattern, in the FA patois.
    Although the formal analogy between the IV and FA models is apparent, there
 are interpretative differences between the two. In FA, the latent variables are fully
 conceptual variables and are not, as in the econometrics literature on measure-
 ment error, supposed to be observable in a direct (i.e. outside the model) albeit
 erroneous way; indeed, the number of factors need not be a given magnitude and
 becomes a parameter itself [e.g. Gorsuch (1974, ch. S)].
    Given the stochastic assumptions, the covariance equation corresponding to
 (4.6) is:
       ,Szz = I-KT’ + 0,                                                                 (4.18)
and the estimation problem is to derive estimators for K, r and 0 from the
observed covariance matrix S,,. Without further information, the model is
clearly underidentified since postmultiplication of r by any non-singular (k x k)-
matrix T and replacing K by T-‘K(T’)-’        leads to the same value of 2:. There are
several ways to cope with this indeterminacy, each of which identifies a main
branch of factor analysis distinguished in the literature. [See, for example, Elffers
et al. (1978).]
   An extreme case arises if k is taken equal to 1. Then I’ and K are of the same
order as zzz. This obviates the error term A, so 0 is put equal to 0. Next, the
indeterminacy may be solved by taking r to be the matrix of eigenvectors of
2 zz, and K is the diagonal matrix containing the k eigenvalues of _Szz on its
main diagonal. The matrix ZT is called the matrix of principal components of Z.
[See, for example, Anderson (1958, ch. 12) and Kendall and Stuart (1979, ch. 43).]
This relation between principal components and FA is a matter of mathematics
only; conceptually, there is the essential difference that principal components is
not based on a statistical model; it is a data reduction technique.12

   “Principa] componentsis sometimes used in econometrics when the number of observations is
deficient and one wants to reduce the number of regressors. Kloek and Mennes (1960) and Amemiya
(1966)   explore this idea for simultaneous equations and propose using principal components of
predetermined variables.
Ch. 23: Lotent   Variable Models in Econometrics                                   1359

   Apart from the principal components case, the number k of underlying factors
is usually set at a (much) lower value than 1. There are two different approaches to
the normalization problem. In confirmatory factor analysis, the researcher has a
number of a priori restrictions on r, K or 0 at his disposal that derive from say,
the interpretation of the factors [like the implicit unit coefficient restriction in
equation (3.9) where the factors correspond to phenomena that are in principle
observable] or an extension of the model whereby the latent variables are, in turn,
regressed on other, observable variables (an example of which is to be discussed
below). These restrictions may serve to remove all indeterminacy in the parame-
 ters. In exploratory factor analysis, however, the researcher is unsure about the
meaning of the factors and would like to treat them in a symmetric way. The
usual approach then is to choose T such that T-‘K(T’)-       ’ is the unit matrix, i.e.
 the factors are uncorrelated. For f = I’T:

       ‘zzz = IT’    + 0.                                                       (4.19)

There is still some indeterminacy left, since the columns of r may be reweighted
with any orthonormal matrix without affecting Z:,,. This freedom may be used to
make i”W’f        a diagonal matrix, which is convenient in the course of ML
estimation of the parameters [Joreskog (1967)], or can be used at will to obtain
some desired pattern in IY Such a reweighting is called a rotation by factor
analysts, and a huge literature has evolved around the pros and cons of all
possible types of rotations. Shapiro (1982) has investigated the identification of
the exploratory FA model. He shows that it is identified (apart from the
indeterminacies in r) if and only if (1- k)* 2 I + k.
   Again, it should be stressed that the above treatment of FA is meant only to
show its relation to the measurement error problem and to show that “factor
analysis is just a generalization of the classical errors-in-the-variables model”
[Goldberger (1972a, p. 992)]..


4.3.    The MIMIC model and extensions

In this section we will consider models where identifying information is of the
form given in (4.4); the unobservable variable depends on other exogenous
variables.
   Recall (4.1), (4.2) and (4.4). By eliminating I, we obtain the reduced form:

       (w)=wdw+\C/,                                                             (4.20)

with

       +=(E+pfd,u+uj.                                                           (4.21)
1360                                                                  D. J. Aigner et al.

The variance-covariance   matrix .X++of # is:


                                                                                (4.22)


The reduced form coefficients are restricted in that there is a proportionality
restriction on the regression coefficients whenever 1, the dimension of a, exceeds
unity. For all 12 1, a and /3 are identified and hence also the parameters in Z,,.
So, an additional relation which “explains” the latent variable renders the model
identifiable.
   As a somewhat more general case, consider the case where an unspecified (r,
say) number of indicators of the latent variable c is available, i.e. (4.1) and (4.2)
are replaced by:

       Z=ty’+A,                                                                 (4.23)

with 2 and A being (n X r) matrices as in (4.6), and y is an (r X 1) vector of
regression coefficients. As with FA, 0, the variance-covariance    matrix of the
rows of A, is assumed to be diagonal.
   This model [i.e. (4.4) and (4.23)] is known as the Multiple Indicator-
Multiple Cause (MIMIC) model relating a single unobservable to a number of
indicators and a number of exogenous variables, and was introduced in the
econometrics literature by Goldberger (1972a). In reduced form, it reads:

       Z=Wuy’+A+uy’.                                                            (4.24)

The model has two kinds of restrictions on its parameters. First, the coefficient
matrix has rank unity, and the disturbances have a variance-covariance   matrix:

       2 = 0 + uuuyy’,                                                          (4.25)

which is the sum of a diagonal matrix and a matrix of unit rank.
   There is an indeterminacy in the coefficients a and y: the product cry’ remains
the same when a is multiplied by an arbitrary constant and y is divided by the
same constant. This indeterminacy can be removed, for example, by the normali-
zation a,, =l. Joreskog and Goldberger (1975) discuss ML estimation of the
MIMIC model, and Chen (1981) discusses iterative estimation via the EM
algorithm.
   The MIMIC model comprises several models as special cases. When no “cause”
relation is present, we have the one-factor FA model. If in (4.4) u = 0, i.e. the
latent variable is an exact linear function of a set of explanatory variables, we are
back to a model introduced by Zellner (1970). This model was inspired by the
Ch. 23: Lorent Variable Models in Econometrics                                   1361

we&known       problem of dealing with permanent income as an explanatory vari-
able. In this model, y denotes consumption, x observed income and < permanent
income. By expressing permanent income as a function of “such variables as
house value, educational attainment, age, etc.” [Zellner (1970, p. 442)], permanent
income can be removed from the relation altogether; but simultaneous estimation
of the complete reduced form of the model increases the precision of the
estimates.
   Zellner’s paper also contains a discussion of limited-information estimation
methods. Since full-information ML is now generally available (see Section 5.3),
there seems to be little use left for limited-information methods and we will not
attempt to present a summary of these methods. [See also Goldberger (1972b).]
   A restriction of the MIMIC model is the diagonality of 0, the variance-covari-
ante matrix of the rows of A. This means that the indicators satisfy the factor
analysis assumption that they are correlated only via the latent variable. This
assumption may be unduly strong, and we may consider an unrestricted 0 as an
alternative, as was the case in the original instrumental variables model. As is
apparent from (4.25), this introduces an indeterminacy since:

      @ + %uYY’=@+ $rr'+            b”, - dur                                 (4.26)

for any scalar +. This indeterminacy may be solved by fixing uUUat some
non-negative value, e.g. a,, = 0. This means that, in the case of 0 unrestricted, the
model is operationally equivalent to a model without an error in the cause
equation.
   The MIMIC model relates a single latent variable to a number of indicators
and a number of causes. The extension to a more general multiple equations
model is obvious. A very general formulation is the following one, proposed by
Robinson (1974):

      Z=ZT’+W,B,+W,B,+A,                                                      (4.27)
      z= W,A,      + W,A, + u,                                                (4.28)

with Z, Z and r defined as before; A and U are (n x 1) and (n x k) matrices of
disturbances, each row of which is taken to be normally, independently distrib-
uted with variance 0 and ‘k, respectively. No a priori restrictions are imposed on
these matrices. W,, W, and W, are (n X m,), i = 0,1,2, matrices of observable
exogenous variables, and A,, A,, B, and B, are conformable matrices of regres-
sion coefficients.
   This model allows for structuring elaborate causal chains between variables.
The indicators Z are determined not only by the latent variables 3 but also by a
set of exogenous variables. The latent variables in turn are determined by a set of
1362                                                                   D. J. Aigner et al.

exogenous variables, some of which (W,) may also occur in the indicator
equation. Note that there is no simultaneity in the model: the causal chain is in
one direction, the W’s determining Z directly and, after a detour, via z. For this
model, Robinson (1974) discusses identification and presents a (limited informa-
tion) estimation method. The problems involved are apparent from the reduced
form of (4.27) and (4.28):

       Z=W,A,T’+W,(A,r’+B,)+W,B,+A+UT,                                           (4.29)

where each row has variance-covariance matrix 0 + rJ/r’. The model has, just
like the MIMIC model, patterned coefficient matrices and a patterned
variance-covariance      matrix. Some of the coefficients are clearly underidentified.
After imposing appropriate restrictions, overidentification may result. Instead of
Robinson’s method, one might estimate the (appropriately restricted) model by
FIML, using (for instance) the LISREL computer program (see Section 5.3).
   What should be clear from the development in this section (especially this
subsection) is that an important convergence in methodology between psychomet-
rics, sociometrics and econometrics has taken place over the last decade. The
input into econometrics from the other two social sciences induced a breakthrough
in the measurement error problem; in return, econometrics can contribute rigor in
the fields of identification, estimation and hypothesis testing, areas where psycho-
logical and sociological researchers tend to be somewhat more casual than
econometricians.


5.     Simultaneous equations

Stripped to its bare essentials, the linear simultaneous equations model with latent
variables is the following. Let Z be an (n X L)-matrix of observations on an
(L x l)-vector with n data points. Let Z be generated by an unobservable, “true”
part Z of order (n X L) and an (n X L)-matrix U of measurement errors, each
row of which is independently N(0, 52) distributed, with D an (L X L)-matrix:

       Z=Z-tU.                                                                    (5.1)
The latent matrix Z is subject to R linear constraints, R I L:

       Zr=o,                                                                      (5.2)
with r an (L X R)-matrix of coefficients which has to be estimated. (The zero
restriction is for convenience only and can be relaxed at some notational cost.)
   When R = 1, (5.1) and (5.2) constitute the single-equation errors-in-variables
model, where all variables are treated in a symmetric way. If some row of u
Ch. 23: L.utent Vuriuble Models in Econometrics                                   1363

happens to be uncorrelated with the other rows of U, it may be interpreted as an
error-in-equation, and the usual one-equation errors-in-variables model arises.
For R > 1, (5.1) and (5.2) constitute a simultaneous errors-in-variables model.
   In the early days of econometrics, attention focused on the case where s2 is
known (or known up to a scalar factor) and there are no restrictions on the
coefficients apart from normalization. In Section 5.1 we will briefly dwell on this
case, mainly because of its historical interest. Then, in Section 5.2, we will pick up
the “mainstream” approach to dealing with simultaneity. Section 5.3 discusses the
LISREL computer program, which is well-suited to estimate linear equations
systems with latent variables.


5.1.   The case of s2 known

When s2 is known, r can be estimated by maximizing the likelihood of U subject
to Zr= 0. [See (5.1) and (5.2).] The main results are due to Tintner (1945),
extending results for the case R = 1 due to Van Uven (1930), which became well
known to econometricians mainly through the work of Koopmans (1937, ch. 5).
Also for R = 1, Malinvaud (1970, section 10.5) derives the variance-covariance
matrix of the asymptotic distribution of f.
   An important special case arises when only the first G columns of 2 are
unobservable, the last K = L - G being observable. Konijn (1962) discusses
identification and estimation of this model.
    Konijn’s work may be viewed as the culmination point of a research direction
that at present is dormant. Since the early 195Os, the emphasis in econometrics
has focused on identification based on a priori restrictions on r rather than on D
being known, as the empirical value of the latter case seems to be limited. Still, it
might be a fruitful research project to make the communalities and differences
 between the two approaches explicit, e.g. by translating restrictions on r into
restrictions on 52. An attempt to use the errors-in-variables approach for the
 simultaneous equations model was made by Keller (1975), for instance, who
demonstrates that several well-known limited information estimators correspond
 to the errors-in-variables estimator for particular choices of s2.


5.2.   Identification and estimation

In the non-simultaneous multiple-equations model, identification is achieved by
employing auxiliary relations linking the latent variables to observable variables.
The outstanding feature of the simultaneous equations model containing latent
variables is that identification may be achieved without such additional inforrna-
tion, because sometimes overidentifying information already present in the model
can be used to remedy the underidentifiability caused by measurement error. In
1364                                                                                D. J. Aigner et al.

this section we will discuss some equivalent ways of assessing the identifiability of
a simultaneous equations model containing latent variables. Complications arise
when there are latent variables which enter into more than one equation or when
the measurement error of latent variables in different equations is correlated.
Then, identification cannot be settled on an equation-by-equation basis anymore
and the structure of the total model has to be taken into consideration.
    When an exogenous variable is measured with error, its observed value is no
longer independent of the equation’s disturbance and may be considered as an
additional endogenous variable. Accordingly, we may expand the model by an
 additional relation. This approach is due to Chemoff and Rubin (1953) and is
 also used by Hausman (1977). As an example, consider the two-equation model of
 Section 1.4 (in vector notation):

       Yl + PI2 Y2 = Yllll                    + El,
                                                                                                (5.3)
       PZl Yl + Y2 =         Y2262 + Y23h + e2 3

where y1 and y, are (n X 1)-vectors of observations on the endogenous variables,
and <r, C2 and & are (n x 1)-vectors of observations on the exogenous variables;
er and e2 are (n X 1)-vectors of disturbances, independent for different observa-
tions, with zero expectations, variance alIZ,, and u22Znrrespectively, and covari-
ante ar2Z,. Let t1 be unobservable, and let n, be a proxy:

       x,=&+u,,                                                                                  (5.4)
with the measurement error or assumed to be distributed N(0, u[,,,Z,), indepen-
dent of et and e2.
   The translation of an unobservable into an additional endogenous variable can
be made as follows. Let the elements of II, t2 and t3 be jointly normally
distributed. Then the regression of [r on t2 and t3 can be written as:

                                                                                                 (5.5)
with ur distributed as N(0, uUUZn),independent of E2, [s, er, e2 and ur. Substitu-
tion of (5.5) into (5.4) and (5.4) into (5.3) yields the following three-equation
system:13
       Y, + PI2 K - yllxl = e1 - yllt+ T                                                         (5.6)
       P2r y1 + Y, = y2212 + y2& + e2 9
       x,=a2~,+a,E‘3+u~+u1.

   “Not only is it possible to transform a model with errors in variables into one without mismeasured
variables, one can also reformulate standard simultaneous equation models as functional models. For
reasons of space we do not give the relationship between both models, but refer to Anderson (1976)
instead. Among the results of exploring the link between functional and simultaneous models are
asymptotic approximations to the distributions of various estimators. See Anderson (1976.1980) and
Patefield (1976) for details.
Ch. 13: Latent Variable Models in Econometrics                                 1365

This reformulation of the system may be used to assess the state of identification.
Still, this is no standard problem, since the variance-covariance     matrix of the
disturbances (2, say) of the extended structural model (5.6) is restricted:

                51 + Yll%~    012      Yll%J

     z:=
                    a21       022         0        .                          (5.7)
                  Yll%         0     0”” + U”, I
            i

So, two elements of ,?? are restricted to be zero. Identification for this type of
restricted model was studied by Wegge (1965) and Hausman and Taylor (1983),
who present rank and order conditions for identification. Below, we will discuss
identification of the simultaneous model with latent variables using a somewhat
different approach.
   Two features of this extension of the model should be noted. First, in order for
(5.5) to make sense, the unobservable should be correlated with at least one other
exogenous variable, i.e. a2 or a[3 should be non-zero. Second, (5.5) fits in the
Zellner-Goldberger    approach of relating an unobservable to other, observable
“causes”. In the simultaneous equations context, such an additional relation
comes off quite naturally from the model.
   A direct approach to the assessment of the identification of the simultaneous
equations model with latent variables is the establishment of a rank condition
that generalizes the rank condition for the usual model without latent variables.
Let the model be:

      YB’ = ZT’ + U,                                                          (5 -8)
      X=E+V,                                                                  (5.9)

with Y and X being (n X G) and (n X K) matrices of observations, Z the
(n x K )-matrix of true values of X and I/ the (n X K )-matrix of measurement
errors, B and r (G X G) and (G X K) coefficient matrices and U an (n X G)
disturbance matrix; U and V are mutually independent and their rows are
independently normally distributed with variance-covariance matrices 2 and 52,
respectively.
   The covariance equations corresponding to (5.8) and (5.9) are, in obvious
notation:

      &r=        B-‘I’&&‘(B’)-‘+         B-'xZ(B')-l,                        (5.10)
      zux=       B-'EZ,,                                                     (5.11)
     E xx=lzz++.                                                             (5.12)
1366                                                                D. J. Aigner et al.

(When we have a structural model, ZEZ denotes the variance-covariance matrix
of a row of 5; when we have a functional model, it denotes lim(l/n)ZT.)
Rewrite (5.11) using (5.12):

       zrx = B-‘r(&,        - 52).                                             (5.13)

When B, r and 52 are known, (5.10) and (5.12) serve to identify 2 and ZEE; so
a priori information from (5.13) and identification of the full model is equivalent
to the identification of B, r and s2 (e.g. normalizations, exclusions, and symmetry
restrictions on fin).
   A necessary and sufficient rank condition for identification can now be devel-
oped as follows. Define a, = vec( B, r)‘, o = vet s2, and let a = (a;), w’)’ be the
vector of all parameters. Then the a priori information can be written as:

       Ra=r,                                                                  (5.14)

with R being an (m x (G(G + K)+ K*))-matrix and r an (m X 1)-vector of known
constants. Now, a is (locally) identifiable if and only if the Jacobian:


       J=d      vet{ B-‘r(Zxx   -                                             (5.15)
                          Ra


has rank G* + GK + K*, i.e. J has full column rank [and if a is locally
isolated-see,  for example, Fisher (1966)]. It remains to evaluate J. Using
standard matrix derivation methods, one readily obtains:


               - B-l@ (- .lfxv, &)   - B-‘lX3ZK
       J=                                                                     (5.16)
                                 R


This matrix has, of course, the same rank as:


                                                                              (5.17)


   As an example, consider the simple model (5.3). The a priori restrictions are
Pi1 = P22 = 1, Y12 = Y13 = Y21 = 0, and, when uncorrelated measurement error is
assumed, 52= 0 apart from Q,,. So, there are G(G + K)+ K* = 19 parameters on
the one hand and GK + m = 6+2+ 3+ 8 = 19 restrictions on them. Denoting
Ch. 23: Lotent       Variable       Models    in Econometrics                                               1367


non-zero elements by a “ + ” for the sake of transparency, then J is:

+    +       +       +   +            0       0       0   0       0   +   0   0   0   0   0   0   0   0
+    +       +       +   +            0       0       0   0       0   o+ooooooo
+    +       +       +   +            0       0       0   0       0   oo+oooooo
 0   0       0       0   0            +       +       +   +       +   ooo+oo+oo
 0   0       0       0   0            +       +       +   +       +   oooo+oo+o
 0   0       0       0   0            +       +       +   +       +   ooooo+oo+
+    0       0       0   0            0       0       0   0       0   0   0   0   0   0   0   0   0   0
0    0       0       +   0            0       0       0   0       0   0   0   0   0   0   0   0   0   0
 0   0       0       0   +            0       0       0   0       0   0   0   0   0   0   0   0   0   0
 0   0       0       0   0            0       +       0   0       0   0   0   0   0   0   0   0   0   0   (5.18)
 0   0       0       0   0            0       0       +   0       0   0   0   0   0   0   0   0   0   0

0    0       0       0   0            0       0       0   0       0   o+ooooooo
0    0       0       0   0            0       0       0   0       0   oo+oooooo
0    0       0       0   0            0       0       0   0       0   ooo+ooooo
0    0       0       0   0            0       0       0   0       0   oooo+oooo
0    0       0       0   0            0       0       0   0       0   0 0 0 0         0   +   0   0   0
0    0       0       0   0            0       0       0   0       0   oooooo+oo
0    0       0       0   0            0       0       0   0       0   ooooooo+o
0    0       0       0   0            0       0       0   0       0   oooooooo+

The rank of this matrix is easily assessed, as follows. The last 13 rows correspond
to normalizations and exclusions (i.e. it shows the incidence of zero and non-zero
elements in R); the columns in which non-zero elements occur are clearly linearly
independent. So, the rank of J equals 13 plus the rank of the matrix that remains
after deleting the rows and columns in which these non-zero elements occur:

         +       +              000                           +
         +       +              000                           0
         +       +              000                           0
                                                                                                          (5.19)
         0       0              +         +       +           0
         0       0              +         +       +           0
         0       0              +         +       +           0

This matrix generally has rank 6, so the rank of _?equals 19. The model is hence
identified.
   Now suppose that [z instead of II is unobservable. In terms of the scheme, this
means that, in the last column of (5.19), the “+” moves from the first to the fifth
position, introducing a linear dependence between the last four columns. Under
this new specification, the model is underidentified.
1368                                                                 D. J. Algner et al.

   This example serves to illustrate a few points. First, the identifiability of the
model does not only depend on the number of unobservable variables, but also on
their location. A measurement error in the first equation does not impair
identifiability, since this equation is overidentified when all exogenous variables
are measured accurately. This overidentification allows for identification of the
measurement error variance of ti. The second equation is just-identified and
hence becomes underidentified when one of its exogenous variables cannot be
observed.
   Second, each exogenous variable occurs in exactly one equation. This means
that the last column in the reduced “incidence” matrix in (5.19) contains just a
single non-zero element. In such a situation, identification can still be assessed
equation by equation. The situation becomes more complicated when a particular
unobservable occurs in more than one equation. Then the identifiability of the
equations sharing that unobservable becomes intertwined.
   Third, the identifiability of the model depends basically on the pattern of zero
and non-zero elements in J only. Further information as to their exact value is not
needed. (It is assumed that Z,, and Z,, have full rank and that the a priori
information is in the form of exclusions and normalizations.) Note that the
pattern of correlations between the 5’s does matter; if say [t is uncorrelated with
E2 and t3, (5.19) becomes:

       +   +       000             +
       +   0       000             0
       +   0       000             0
                                                                               (5.20)
       0   0       +     0   0     0
       0   0       +     +   +     0
       0   0       -t    +   +     0

where the second and sixth columns are proportional. So, the rank of J is reduced
by one. This problem has been noted already when discussing (5.5).
   On the basis of the Jacobian, rank and order conditions for identification, both
necessary and sufficient, can be derived, and a number of these results have been
reported in the literature. They pertain to identification of the complete system as
well as to identification of a single equation. Contrary to the situation with
simultaneous equations without measurement error, this distinction is not trivial:
a certain latent variable may enter into more than one equation, thereby tying
together the identification of these equations. This problem occurs even when
each latent variable enters into a single equation only, as soon as the measure-
ment errors have a non-zero correlation.
   In the first published paper on the problem, Hsiao (1976) presents a number of
sufficient conditions for identification of a single equation of the model when the
measurement errors are uncorrelated. For the correlated case, he derives on the
Ch. 23: Lorent   Variable   Models   in Econometrics                                                1369


basis   of the Jacobian, a necessary and sufficient rank condition for a single
equation, plus a derived necessary order condition. Geraci (1976) uses the
Jacobian to derive, for the uncorrelated measurement error case, an “assignment
condition” for identification of the complete model. This is a necessary condition,
which can be verified solely on the basis of knowledge about the location of the
latent variables and the number of overidentifying restrictions on each equation
in the case of no measurement error. These “conditional” overidentifying restric-
tions can be used to identify variances of measurement error of exogenous
variables in the equations where the restrictions apply. If it is possible to assign
each error variance to a particular equation, the assignment condition is verified.
In a recent paper, Geraci (1983) presents rank conditions for individual structural
relations, both for a general model, where U and V may be correlated and ti is
non-diagonal, and for the restricted model with s2 diagonal.
    Estimation of the simultaneous equations model with latent variables can be
done by means of a program for the analysis of covariance structures, like
LISREL (see Section 5.3). Under normality, LISREL delivers FIML estimates of
the model parameters. (The newer versions of LISREL also have a least-squares
option available.)
    With the development of LISREL, the scope for alternative estimation methods
 seems to be limited. There are a few papers that propose other estimators. Geraci
 (1977) proposes three estimators that are all asymptotically equivalent to FIML
 but are likely to be simpler to compute. These estimators are based on the GLS
 approach due to Browne (1974), which leads to a simpler optimization criterion.14
 Hsiao (1976) presents, for the case of uncorrelated measurement error, a FIML
 estimator based on a transformation of the model, and a single-equation estima-
 tor.


5.3.    The analysis of covariance structures

The breakthrough of latent variable modelling which has taken place in econo-
metrics over the last decade has been accompanied by the availability of succes-
sive versions of the computer program LISREL. LISREL is particularly well-suited
to deal with systems of linear structural multiple and simultaneous equations
(“structural” in the sense of modelling the causal process, not as the opposite of
functional!). This,section describes the model handled by LISREL and discusses
the importance for latent variable modelling in econometrics. For a full account,
see Joreskog and S&born (1977, 1981). LISREL (Linear Structural Relations-a
registered trademark, but we will use the name to denote both the program and
the model) is not the only program available, nor is it the most general linear

   14See Jiireskogand Goldberger(1972)         for a clear expositionof GLS vis-&vis ML in the context of
factor analysis.
                                                                     D. .I. Aigner et al.
1370


model; yet its general availability and user-friendliness has made it perhaps the
most important tool for handling latent variables at present.
   The idea behind LISREL and similar programs is to compare a sa.mple
covariance matrix with the parametric structure imposed on it by the hypothe-
sized model. Therefore, this type of analysis is frequently called the ‘analysis of
covariance structures’ [e.g. Joreskog (1970); see Bentler (1983) for an excellent
overview].
   The general format of the model to be analyzed by LISREL is as follows, using
the notation of the LISREL manual. Let 11and E be (m X 1) and (n X 1) vectors
of latent dependent and independent variables, respectively, satisfying a system of
linear structural relations:

       Br)=G+S,                                                                (5.21)

with B and r (m x m) and (m X n) coefficient matrices, B being non-singular,
and l an (m x 1)-vector of disturbances. It is assumed that t, 6 and { have zero
expectations, and that [ and { are uncorrelated. Instead of n and t, (p X 1) and
(q x 1)-vectors y and x are observed such that:



       Y=A_yrl+&                                                                (5.22)
and
       x=n,t+s,                                                                 (5.23)

with A, and A, (p X m) and (q X n) coefficient matrices, and E and 6 ( p X 1) and
(q x 1) vectors of measurement errors, uncorrelated with q, I, l and each other,
but possibly correlated among themselves. The vectors y and x are measured as
deviations from their means.
   Let @ and 9 be the covariance matrices of 6 and 3, respectively, and let 0, and
0, be true variance-covariance matrices of E and 6, respectively. Then it follows
from the above assumptions that the ( p + q)x( p + q) variance-covariance ma-
trix 2 of ( y’, 1’)’ is:

              A,.{ B-‘(P-W’+    ‘I’)( B’)-l}“;.   + 0,
       ‘TX=                                                                     (5.24)
                        A$T(B’)-‘A’,

The parameters occurring in ,Z (A),, A,, B, r, @, ‘k, O,, 0,) are estimated on the
basis of the (( p + q)X( p + q))-matrix S of second sample moments of x and y.
In order to render the model identified, restrictions on the parameters have to be
imposed. LISREL can handle two kinds of restrictions: first, parameters may be
Ch. 23: L.utent Vuriuble Models in Econometrics                                   1371

set equal to other parameters.  Given these restrictions and the structure that
(5.24) imposes on the data, LISREL computes estimates of the parameters. These
estimates are the FIML estimates when (y’, x’) is normally distributed, i.e. the
criterion:

     ln]z] + tr(SX’),                                                          (5.25)

 is minimized. (As mentioned above, newer versions have a least-squares option.)
    The identification of the parameters is checked numerically by LISREL. It
 evaluates the information matrix on the basis of the starting values for the
 parameters in the iterations; when it is not positive definite, this is an indication
 of underidentification.
    By imposing appropriate restrictions, the LISREL model reduces to any one of
 a number of well-known models. For instance, it is easy to see how (5.24) reduces
 to the FA model-one       simply has to impose sufficient restrictions to retain only
 the part T@r’+ 9 in the NW-corner. From (5.21), the reduction to simultaneous
 equations is apparent. For a reduction to an econometric model, it is desirable to
 take x fixed, i.e. the analysis takes place conditional on X. This is imposed by
 specifying A, = I, 0, = 0, and @ = SdYdY,   with S.Y.rthe sample covariance matrix of
 x. Measurement error in x is introduced by relaxing 0, = 0.
    Some limitations apply to the use of LISREL. It is limited to linear structures
 and it assumes independence of observations, rendering it unfit for the analysis of
dynamic models, except some simple ones [Joreskog (1978)]. The LISREL model
is restricted in several ways and many extensions can be thought of; see, for
example, Bentler and Weeks (1980) for a multi-level extension, Lee (1980) for a
model with inequality constraints, and Muthtn (1979) for an extension to probit
analysis. A minor caveat applies to the numerical assessment of the identifiability
of a particular model; an unfortunate choice of starting values may accidentally
reduce the rank of the information matrix, as computed on the basis of these
values (nothing can beat analytic insight, but the easy use of LISREL does not
stimulate this). When the program indicates underidentification, it may still be
difficult to indicate the troubled. part of the model. Moreover, care must be taken
in interpreting the goodness-of-fit of the model [Fornell (1983)]. Finally, the
assumed multinormality may be troublesome, although the results by Kapteyn
and Wansbeek (1981) suggest that the normality assumption regarding the latent
variables can be replaced by functional assumptions without changing the
asymptotic distribution of the estimators.
   The B. Hall MOMENTS program (1979) generalizes LISREL and is no doubt
more easily understood by economists, though it requires a more detailed specifi-
cation by the user. Several recent applications attest to its usefulness.
1372                                                                                     D. J. Aigner et al.


6.     Dynamic models

As discussed in previous sections, when variables are measured with error, an
otherwise identified contemporaneous model may become unidentified in the
sense that no consistent estimator of the parameter exists (see Section 2). But if a
model contains a dynamic structure, whether in the form of a description of
dynamic behavioral relations, or in the form of serially correlated exogenous
variables, measurement error need not affect the identifiability of a model.
   In this section we shall briefly illustrate how different dynamic assumptions
affect the identification and estimation of a model.
   We assume that all the variables are weakly stationary in the sense that the
covariance sequence Ey,y,_, = a,,,,(’ - s) depends only upon i - s and not upon
i.” Since most estimation methods use second order quantities, we shall consider
the problem of identification in terms of the covariances only.16 We assume that
the second-order moments of observables are estimable, thus, we shall assume
that they are known precisely and ask what additional restrictions are required in
order that the parameters of a model should be uniquely determined by these
covariances. More detailed analysis of different dynamic models is contained in
Engle (1974, 1980), Hannan (1963), Hsiao (1977,1979), Hsiao and Robinson
(1978), Maravall (1979), Maravall and Aigner (1977), and Nicholls, Pagan and
Terre11 (1975).



6.1.    Identification of single-equation models

We first consider the problem of identification of a univariate process. We use a
simple model to illustrate the effects of each one of the different dynamic
assumptions, and then state the theorem for the general case. For details of the
proof, see Maravall(1979) and Maravall and Aigner (1977).
   Consider the following dynamic model:




   15For a possible generalization of the results in this section to non-stationary cases, see, for example,
Hannan (1971) and Maravall(l979).
   t6As discussed before, when variables are normally distributed all the information is contained in
the first and second moments. When variables are not normally distributed, additional information
may be contained in higher moments, which can be used to identify and estimate unknown
parameters.
Ch. 23: L.atent Variable Models in Econometrics                                                    1373

where ti and ei are independent, and the roots of


                                                                                                 (6.2)

are greater than one in absolute value and the two sets have no roots in
common.17 The endogenous and exogenous variables, 4; and .$,, are assumed to be
measured with error, according to (2.2) and

      _Y,=?i+     ui,                                                                            (6.3)

where U, is white noise with mean zero and constant variance a,,.
  For simplicity, we shall for the moment assume that q and 5, are white noise.
Then:

      Y,+B,Y;-t+        .** + ~~Bpyi-p
                                     + YOXi + . . ’ + y4xj-4         = Wi,                       (6.4)

where

      W, = E, + U, + PlUi~l     + ’ . ’ + pp”,-p    + YOU,+ . ’ ’ + YYU,~~

will have the property:

      uW,(0)=var(wi)=o,,+o,,(l+/3~+                    **. +@;)+~7~~(yi+y:+

      e,,(l)    = cov(w,w;-1) = $,(P,         +&P* + . . * + #q-&J

                                          + U”“(Y,Y,+ . . . + Yq-lYq),

      u~~(2) G cov( wiwi-*) = ‘UU(PI?+ PI& + . ’ . + Pp-ZPp)                                     (6.5)

                                          + U”U(YoY2+ . ** + Yq-*Yq)*


      uWR,(s)= cov( w,w,_,) = 0,           for IsI> max( p, q) = 7.

As this is the covariance function of a 7th order moving average process, all
information about the unknown parameters is contained in the variance and first


  “For the generalization of results contained in this section to the non-stationary case, see Maravall
(1979).
 1374                                                                                  D. J. Aigner et a/.

T autocovariances  of WJ~.  Thus, by (6.4) we know that the distribution of y is
determined by the 0, 1,. . . , T + p, autocovariances of y and the O,l,. . . ,q, cross-
covariances between y and x.
   From (6.1) we know that these cross- and autocovariances satisfy:

        yfx(0)+ YoI %x(0)- %I = 07
                                 - %“I= 0,
        u,,(l) +P,u,,@)+ Yl[ %x(O)
                                                                                                   (6.6)
        uy,w+
            *.. +Ppuy,k - P)+Y,bxx(o)-~““l = 0;
        (a,,(0)-a,,)+P10,,(-1)+                     .*. + P)Jyy( - P >+ YoUxy(0) + Ylqry ( - 0
               + *.*     +Y,a,,t-4)=u,,9

        u,,(l)+P,[u,,(O)-o,,]+                .**    +PpJ-      P+~)+Y,u,,(~)+Y~u~~~(~)           (6.7)
               + *.. +y,o,,(-q+l)=O,


        ~,,(r>+P,u&-1)+                    .** +y,a,,(-q+7)=0;

and




                                                                                                  (6.8)


where u,,(i) = a,,( - j) = 0 fori -C0.
  The Jacobian of (6.6), (6.7), and (6.8) is of the form:

                   4
        J=        ‘Jz’. )
                                                                                                  (6.9)
                J; ‘:‘d
              i     .i

where 5t, 5*, and J3 are the partial derivatives of (6.6) (6.7), and (6.8) with respect
 to p’s, y’s and uUO,uUU,uEEand J1 and J2 have p + q i-4 columns while J3 has
just p.
Ch. 23: Latent Variable Models in Econometrics                                                                            1375


   Defininga(px(p+q+4))matrix(J,-        ’ T’)‘, it is easy to see that rank(J) = rank
    . It follows that the autoregressive parameters pi, &,..., /.I,, are identified.
(For details of the identification conditions relying on the rank of a Jacobian
matrix, see Chapter 4 in this Handbook by Hsiao.)
  The Jacobian ./i is of the form:

                   0                  0          % - O”,,    0                        0         -uo      0 0’
                 ovx(0)   ...         0            0      %x - ov,,                   0         -y,      0 0
      J, =                                                                                                 :
             o,,(q-1)     “’    o,,(q-p)                              ‘.’        ox,,-a,.,.     -v,      0 0


                                                                                                                    (6.10)

The Jacobian J2 is of the form:


     i o,,(-I)                  “.      G-P)           -J.,(O) -TLC-l)                         o,,(-q)         0   -1       -1

      o,,(O)-05,                “.     orr(-p+1)         0      a\I(O)                         01,(1-q)        0   -4        0
        Q,,(l)   I,,-%”         ‘.’    o,.I.(-p+2)       0       0          T,(O)              5,(2-q)         0   -Pz       0
 J>= o,,(p-1)                   ‘.’        o,v(O)-%”     0                                     ot,(P-q)        0   -sp       0



     Io,,(P+l)
       U,,(P)                                a,.,(1)     0       0           0                o,,(p+2-q)
                                                                                              o,,(P+l-q)       0    0        0


                                                                                                                        (6.11)


   If p = 1 and q i 1 by elementary row and column operations we have rank
(J) = q +4. The total number of parameters are q + 5, therefore the complete
model is not identifiable. On the other hand, if q 2 2 or p 2 2 and q 2 1, rank
(J) = p + q + 4. Model (6.1) is locally identified if and only if either (i) p 2 2 and
q21 or(ii)p>l      andql2.
   Generalizing this result to the model:
      9; + Pil;-1 + . . . + Ppv;-,

                                                                                                                    (6.12)

where xk, = &, + ski* and tki, uki, are mutually independent white noises, Mara-
vall (1979), Maravall and Aigner (1977) obtain the following result:
  If the (K + 1) integers, p, q 1,. . . , qK, are arranged in increasing order (ties are
immaterial), and qy denotes the one occupying thejth place in this new sequence,
1376                                                                                 D. J. Aigner et al.

(6.12) is locally identified if and only if qJ*2 j, for j = 1,2,. . . , K + 1.
   When the shocks &iare serially correlated, the above results on identification
will have to be modified. We first consider the case where E; is a s th order moving
average process, ei = a, + 8iai_i + . . - + 6sai_s, where 0, # 0 and ai is white noise
with mean zero and variance a,,.
   The j-lag autocovariances of ei will be equal to zero for j > s. In other words,
the s + 1 unknown parameters 8,, . . . , 13,,and a,, only appear in the variance and
first s-lag autocovariances of y. If other parameters of the model are identified, the
autocovariance functions of y can be rewritten in terms of 8’s and a,, as in the
case of standard s th order moving average process. Thus a unique solution for
them exists [for details, see Maravall(1979)J. However, if the variance and first s
autocovariance functions of y are used to identify this set of parameters, it means
that we have (S + 1) less equations to identify other parameters.” Assuming ei to
be a sth order moving average process (6.12) is locally identified if and only if
q,*>=j+s,j=1,2      ,..., K+l.
   Alternatively, suppose we assume that the shocks, ei, follow a stationary rth
order autoregressive process, E; = ~i~~_i + . * . + ~,Jz_~ + a;. As we can see from
(6.1), under this assumption the autocovariance functions of y alone can no longer
be used to identify p. However, /? can still be identified by the cross-covariance
functions:

                                                                                               (6.13)

for j > max( p, q) [or see (6.11)]. We also note that for j > max( p, q)+ r, the
autocovariance function of y is:




where




Once the /3’s are identified by (6.13), u,,(j) is identified also by (6.14). Therefore,
the p’s are identifiable by (6.15); hence u,,,. Thus, contrary to the case of white
noise shocks when a,, only appears in the O-lag autocovar-iance equations, now at,
can be identified through the j-lag autocovariance equations of y when j >
max(p, q). In a way, the autoregressive shocks help to identify a model by
reducing the number of unknowns by one. Assuming ei to be a stationary r th

  ‘*Note now that this parameter set no longer needs to include fleer,which can be identified from B’s
and a,,.
Ch. 23: Latent Variable Modelsin Econometrics                                      1311
order autoregressive process, model (6.12) is locally identified if and only if
q,*>j-1,     j=l,...,  K+l.
   Combining these two results we have the general result with regard to autocor-
related shocks. If the ri follow a stationary autoregressive moving average process
of order r and S, E, = pi&;-i + *. * + prqr + a, + 61a,_l + . . . + 8sai_s, we have
that model (6.12) is locally identified if and only if (a) when r > s, q,? 2 j - 1; (b)
whenrIs,q,*>j+s-rforj=l,...,               K+l.
   These results are based on the assumption that the exogenous variables are
serially and mutually uncorrelated. If they are correlated, additional information
will be available in the cross- and autocovariance functions of the y’s and x’s,
and hence conditions for identification may be relaxed.
   The main reason that a dynamic structure helps in identifying a model is
because of our strong assumption that measurement errors are uncorrelated. This
assumption means that cross- and autocovariances of the observed variables equal
the corresponding ones of the unobserved variables. When measurement errors
are autocorrelated, the problem becomes very complicated. For some examples,
see Maravall (1979) and Nowak (1977).


6.2.    IdentiJication of dynamic simultaneous equation models

We have seen how a dynamic structure may affect the identification of a single
equation model. The basic idea carries through to the dynamic simultaneous
equation model. However, the problem is complicated by the interrelationships
among variables, which means in general that stronger conditions are required
than in the single equation model to ensure the proper rank of the Jacobian. We
illustrate the problem by considering the following simple model:


       BOSi   +   B,r),- I+ rti =El   P
                                                                                (6.16)


where r) and < are (G x 1) and (K x 1) vectors of jointly dependent variables and
exogenous variables, respectively; e is a (G x 1) vector of disturbance terms with
covariance matrix 2:. We assume that B, is non-singular and that the roots of
B, + B,L = 0 lie outside the unit circle. We again assume that the exogenous
variables .$ are stationary and disturbance e is white noise. The 9 and [ are
unobservable. They are related to observable y and n by:


       y,=qi+u. 1)         with Eu,uf = A,      Euie; = 0,                      (6.17)


and (2.2).
1378                                                                              D. J. Aigner et al.

   Since the measurement errors are assumed to be serially uncorrelated, we know
that C,,,,(r) and CXX(r) satisfy:

       C,,y(0)
            = EY;$=       E(q + ui)(qi + q)‘=        C,,(O)+&
       C,,(O)=Ex,xj=E(&+~,)(~~+e,)‘=C~~(0)+52;                                              (6.18)

and

       C,,(~)=Eyiy:_.=Er)i~i-.,=C,,(7),
       C,,(r)   = Exixj_, = E&_,        = CEI( r),   for r # 0.

Thus, the second-order moments satisfy:

       B,C,,(l)+B,(C,,(O)-n)+rc,,(l)=O,                                                     (6.19)

       B,C,,(O)+B,C,,(-l)+r(C,,(O)-S2)=0;                                                   (6.20)

and

       B,C,,(T)+B,C,,(7-1)+TC~,,(7)=0,                     r=2,3      ,***,                 (6.21)
       B,C,,(7)+B,C,,(7-1)+rc~,(7)=0,                      7=1,2 )... .                     (6.22)

   We stack (B,,, B,, r) into a (1 X (2G2 + GK))-vector            A’ and assume that they
satisfy R linear restrictions:

       @A=O,                                                                                (6.23)

where @ is an (R x (2G2 + GK))-matrix with known elements. Let x’ and w’
denote the (1 x n) and (1 X I)vectors consisting of unknown elements of A and
s2. Letting (r’ = (A’, x’, w’), then a’ has to satisfy (6.19)-(6.23). Now we know that
the 1 x(2G2 + GK + n + I)parameter vector a’ is locally identified if and only if
the Jacobian

                           @J
                          .. .... ... . ... .... .    ..   ... .. .
                                                                              . 0 : 0
                                                                        . . . . . ., .
                               wKJw4                       WC&)               :H:O
                                      WC”,“(l)                  Z@C,,(2)   : 0 : 0
                                      wJc”.m                    Z,@C,,(3) I 0 ; 0
                                                                                    (6.24)
                                                                           . :
                          . . . . . . . . . . . . . . . . . . ;,ii..~~cOj_S2j.j.b.i
                                                                                 '1
                                 Z&qx( - 1)
                                  ZG@qtr(0)                k@CY,(l)           : 0.0
                                                                              . .
                                                                              :   :
Ch. 23: Latent Variable Models in Econometrics                                   1379

has rank (2G2 + GK + n + [) around its true value, where H is a (G2 X n) matrix
whose elements are either zero or elements of B,, and U is a (GK X 1) matrix
whose elements are either zero or elements of r.
  Unfortunately, this condition is usually difficult to check in practice. If we
know that the matrix




                                                                                (6.25)



       L


 has rank (G + K), the d independent columns of (B,, B,, r)’ will form a basis of
 the column kernel of the transposes of (6.21) and (6.22). Then by an argument
 similar to Fisher’s (1966) we can show that the usual order and rank conditions
 are necessary and sufficient to identify a’. However, because of the interrelation
 among G different variables, we need a stronger condition than the univariate
 case (Section 6.1) to ensure the rank of (6.25). Using the result of Hannan
 (1975,1976) we know that one such condition isi to assume that B, is non-singu-
 lar and that C,,(l) is non-singular, C,;(q) = 0 for some q 2 2.
    Under these assumptions, the matrix


                                                                                (6.26)


 has rank (G + K), where matrix (6.26) is a submatrix of (6.25). Therefore, we
 have a necessary and sufficient condition to locally identify the coefficients of
 (6.16) is that rank (M@‘) = G2, where M = (I,@&, Z,;@B,, Z,Sr).
    If instead of assuming E, to be serially uncorrelated, we assume that E, is
 stationary, then C,(r) for r ~1 no longer satisfies (6.19) and (6.21) and A is not
 identifiable. Now the parameter (A’, w’) is locally identified if and only if the rank




    “For other conditions, see Hsiao (1977).
1380                                                                 D. J. Aigner et al.

  Again, the rank of (6.27) is not easy to check. However,           under certain
conditions [Hsiao (1979)] the matrix



                                                                               (6.28)



has rank (G + K), and hence the usual order and rank condition is necessary and
sufficient to identify (6.16).


4.3.    Estimation of dynamic error-shock models

Most literature on dynamic error-shock models deals with the identification
problem only. Of course, if a model is identified, the unknown coefficients can be
consistently estimated by solving the cross- and autocovariance equations. How-
ever, such a method is not efficient. In fact, it appears that an efficient, yet
computationally simple estimation principle for a general error-shock model
remains to be worked out. We shall in this section sketch some approaches to
obtaining efficient estimates as background information for the development of
future numerical studies.
   We first consider the case where only dependent variables are observed with
error (i.e. a,, = 0, and x = I). As shown in Section 6.2 a dynamic model (6.1)
under certain assumptions can be rewritten as a dynamic model with a moving
average disturbance term (ARMAX). Many people have suggested methods for
estimating ARMAX models [e.g. see Box and Jenkins (1970) and Phillips (1966)
for time domain approaches and Hannan and Nicholls (1972) for a frequency
domain approach; also see Nicholls, Pagan and Terre11 (1975) for a survey].
However, such methods, although they remain consistent, are no longer efficient
because they ignore the restrictions in the composite disturbance term. An
efficient estimation method would have to take into account all prior restrictions.
Unfortunately, the prior restrictions in this case are very complex and difficult to
incorporate.
   We illustrate this point by considering a simple case of (6.1) where p = 1 and
q = 0. Now we have:

       77,+Pllj-1 + Y5izEj,                                                    (6.29)

       Y, = 17,+ u;                                                            (6.30)
and
       x, =[. ,’                                                               (6.31)
Ch. 23: Latent Variable Models in Econometrics                                                   1381

Rewriting (6.29) in terms of observables, we have:

     y; + fly,_i + yt, = Ej + U, + Bu,-i = wi*                                                (6.32)

Assuming ei to be white noise, the composite disturbance term w, has variance and
autocovariances:

      ~,,(0)=u,,+(1+~2)u”UU’
      %J) =Bu,,9                                                                               (6.33)
      u,,(j)   = 0,     forj 2 2.

Clearly, this has the property           of a first order MA process. Establishing                the
equivalences:

      W;=qJ;+l)~;_1=Ei+U;+/3Ui-1,                                                              (6.34)

we can solve for values of \cI,which are

                                                                                               (6.35)

where p = ~,,/a,,. We choose the root which is greater than unity as the solution.
    It is clear from this example that the restrictions are highly non-linear, and
arise as the solution of the roots of a polynomial. It is not an easy matter to
impose the requisite restrictions. Generally, it is impossible to derive an analytical
solution for models with composite disturbance terms. Pagan (1973) has, there-
fore, resorted to numerical alternatives in order to obtain efficient estimates.*’
   Let a denote the m x 1 unknown parameters. To obtain an estimated a, Pagan
(1973) adopts the Phillips/Box-Jenkins     methodology by minimizing &#            with
respect to a with the aid of the Gauss-Newton algorithm, leading to the following
iterative formula:


                                                                                              (6.36)



   20Bar-ShaJom (1972) has suggested a computationally simpler iterative scheme which involves
solving the likelihood function as a system of non-linear equations with the parameters and
unobservables n. The system of non-linear equations is then separated into two interconnected linear
problems, one for the 9, the other for the parameters. Besides the problem of the non-existence of the
MLE in his approach, it is dubious that his method will have good convergence properties, although
he did report so in his numerical examples.
1382                                                                  D. J. Aigner et al.

where   3 denotes the disturbance vector (it,. . . ,&,). Thus, the problem is shifted
to one of computing derivatives.
    Of course, to complete the algorithm we need to specify the process for
determining $ given a. One possibility would be to solve for the roots of the
covariance generating function. However, Pagan (1973) reports that this approach
revealed computational difficulties if the order of the moving average process was
high. Hence, Wilson’s (1969) method for factoring a covariance function into its
moving average form was adopted.
    The global minimum solution of the Pagan’s (1973) method is asymptotically
equivalent to that of the maximum likelihood method, and hence is consistent and
asymptotically normally distributed. However, there is no guarantee that the
convergent solution is a global minimum. Therefore it is advisable to start the
iteration from a consistent estimate and perform a number of experiments with
other starting values.
    When exogenous variables are also measured with error (i.e. x, = 5, + u, and
 ui # 0), Pagan’s (1973) method cannot be applied and neither can the iterative
 schemes suggested by Aoki and Yue (1970), Cox (1964), Levin (1964), Ljung
(1977) etc. The main problem appears to be the correlation between the mea-
 sured exogenous variables and the composite disturbance terms. If there is prior
 knowledge that measurement errors appear only at some frequencies [e.g. higher
 frequencies, Engle and Foley (1975)], or in other words that only a portion of the
 spectrum satisfies the model, Engle (1974, 1980) and Hannan (1963) have
 suggested a band spectrum approach. We illustrate their approach by considering
 model (6.29).
    The spectrum approach to estimating a involves first transforming the model
by the (n x n) unitary matrix A with thei, Ith element equal to:

                                                                                (6.37)

where I= J-1.     Ignoring the end-effects which are of order l/h,     we can write
the log-likelihood function of (6.29) as:

        L=-~10g2n-~Clogf,(t,)-tCf,(~j)-1~,(fj)
                                J                J

                + C log(1 + /3e”‘l),                                            (6.38)


where f,( rj) denotes the spectral density of w at frequency tJ:


                                                                                (6.39)
        Y(‘J>    =
Ch. 23: Lrrtent Vuriable Models in Econometrics                                                                  1383

and t denotes the complex conjugate of the transpose. Maximizing (6.38) with
respect to unknowns we obtain the (full) spectrum estimates.
   If only a subset of the full spectrum, say S, is assumed to satisfy the model, we
can maximize (6.38) with respect to this set of frequencies, which leads to the
estimator:
                                                                                                          -1

          B
          ?1=_
                                        I
                                                               fw(lj)
                                                                                               t   eSt/
                       ,;sfw(r,)p’          fy(rJ)-     1+2pcos1,+p2              &Xc I)
      [
                   i                                  fx,(~,)e+*~                      fx (t, >


                                                               fw(‘j)          ecu,
                                            Jv(‘j)-
               x        C    fw(t,)-’
                                                        1+2pcosr,       + p2               )                   (6.40)
                       jss
                   i                    I                  fx,v(‘j)                   1~


where f,,(t,)  denotes the cross-spectral density between y and x. Under the
assumption of smoothness of the spectral density, it can be shown that the band
spectrum estimate (6.40) is consistent if a consistent estimate of f, is available.
One way to obtain a consistent estimate of f, is by substituting a consistent
estimate of p into:

                                                                                                               (6.41)

   The band spectrum approach has the advantages that no explicit assumptions
about the autocovariance structure of the measurement error are needed, and that
it is somewhat easier computationally. However, the portion of the frequency
band with a small signal-to-noise ratio may be rather large, and so if all these
frequencies are omitted the resulting estimate may have a rather large variance. In
particular, we have been assuming that the measurement error has a uniform
spectrum (white noise) which may imply that there is no frequency for which the
signal-to-noise ratio is really large. Also, there may be a problem in knowing S. A
full spectrum method thus may be more desirable. Hannan (1963) has suggested
such an approach for the case where no measurement error appears in y (i.e.
y, = n; and ui = 0). His basic idea is to first estimate uuuby substituting consistent
estimates of /3 and y into the spectrum and cross spectrum of &, f, and fVXto
obtain an estimated spectrum of 5, then use an optimally weighting method to
estimate /3 and y. A generalization of Hannan’s (1963) method to the case when
both dependent and exogenous variables are observed with error in a single
equation model seems highly desirable.
   On the other hand, a full spectrum method can be applied to a simultaneous
equation model without much problem. If a simultaneous equation model is
1384                                                                 D. J. Aigner et al.

identified, this is equivalent to the existence of a sufficient set of instruments.
Hsiao and Robinson (1978) have made use of this idea to suggest a (full
spectrum) instrumental variable method for estimating the unknown parameters.
Their method may be summarized as follows.
   The Fourier transform of (6.16) is:

       B(fj)Y(‘j)+Tx(fj)            = w(zj>,                                   (6.42)

where

       B( r,) = B, + Bler’l,
       Wi=e,     +   BoUi + BlUj_l+ TU,,

       w(f,) = &             jJlwieTrji.
Since it is known that under fairly general conditions:

        lim Ew( t,)x( r,)+ =j,,,X( t,) = IX?,           f, +o,                 (6.43)
       n-03

we may rewrite (6.42) as:




where the coefficients of the gth equation are normalized to be unity. The
transformed model (6.44) possesses (asymptotically) the classical property of
orthogonality between the “exogenous variables” x( f,) and the “residual” ii)(t,).
   We now stack (6.44) as:

       y(t,) = Z(t,)L’a+           ti(t,),                                     (6.45)

where



                L,00
       Z~(f,)=(-[(l,ei’~)ey’(t,)oZ~],-~’(fi)~Z~,~~(r,)f,(f,)-‘~rj,




       L=      [ 0 1    0
                       L,
       a’ = (/3’, y’, 0’).
                              L3
                               0
                                    )
Ch. 23: Latent Variable Models in Econometrics                                          1385


The matrices L,, L,, and L, and vectors j?, y, and w, are obtained as follows.
Suppose there are G, zero constraints on B = [B, - Z,, B,]. Then the uncon-
strained parameters may be rewritten as j3 = L,vec( B), where L, is obtained
from Z2cz by eliminating the rows corresponding to zero elements. Likewise, if
there are G, zero constraints on r we write the unconstrained parameters as
y = L,vec(T), where L, is obtained from Z,, by eliminating the rows corre-
sponding to zero elements. Also, we write w = L,vec(G), where L, is the
((K - F)X K 2)-matrix obtained from ZKz by eliminating rows corresponding to
the off-diagonal elements and the F (0 I F I K) a priori zero diagonal elements
of s2.
   An instrumental variable method for (6.45) will be possible after we find an
appropriate instrument for r(f,), and a consistent estimate of f,,(t,) =
lim n --t,EiC( t,)_ti+(t,). A possible instrument for y( t,) would be A( t,)x( t,), where
A(t,) = j&f,)f;(t,)-‘.       A consistent estimate of f,+(r,) may be obtained from:

                                                                                      (6.46)

where &r,) is some consistent estimate of B(t,),                   which may be obtained by
solving the covariance equations.
  We may now define our estimates as:

       h= (LDL’)_‘Ld,                                                                 (6.47)

 where

      D=fFJ+“(f,)z(i,),
                   J


      ‘=   f   C       Wt(t~)Y(t~),

                   J

                             (l,eSf~)@A(tj)x(t,)@~~‘(tj)
      W’(r,)=

                       I   [z,-~~x-‘(rj)]x(fJ)@j,-‘(rJ)
                                      L(fj~x(f~)~p.L(~j)
                                                           1
                                                               .




If the spectrum is smooth, we can prove that (6.47) is consistent and asymptoti-
cally normally distributed. To obtain an efficient estimate it may be desirable to
iterate (6.47). If E is stationary then (6.47) is efficient in the sense that the limiting
covariance matrix is the same as that of maximum likelihood estimates based on
Gaussian %(t,) [Hsiao (1979)], and iteration produces no improvement in
efficiency. If E is a finite-order autoregressive moving average process, (6.47) is still
consistent but will not be fully efficient [e.g. see Espasa (1979) and Hannan and
Nicholls (1972)], and then iteration is probably desirable.
1386                                                                                  D. J. Aigner   et ul.


   As one can see from the above description, the computation of the estimates for
the dynamic error-shock model seems a formidable task, particularly if there is
iteration. Yet on many occasions we would like to estimate behavioural relation-
ships that are dynamic in character. It does seem desirable to devise some simple,
yet reasonably efficient computational algorithms.


References

Aigner,  D. J. (1974a) “An Appropriate Econometric Framework for Estimating a Labor-Supply
  Function from the SE0 File”, International Economic Review, 15, 59-68. Reprinted as Chapter 8 in
  D. J. Aigner and A. S. Goldberger, eds., L.utent Vuriuhles in Socio-Economic Models. Amsterdam:
  North-Holland Publishing Company.
Aigner, D. J. (1974b) “MSE Dominance of Least Squares with Errors of Observation”, Journal of
  Econometrics, 2, 365-72. Reprinted as Chapter 3 in D. J. Aigner and A. S. Goldberger, eds., Lutent
  Vuriuhles in Socio-Economic   Mode/s. Amsterdam: North-Holland Publishing Company.
Aigner, D. J. (1973) “Regression with a Binary Independent Variable Subject to Errors of Observa-
  tion”, Journul of Econometrics, 1, 49-59.
Aigner, D. J. and S. M. Goldfeld (January 1974) “Estimation and Prediction from Aggregate Data
  when Aggregates are Measured More Accurately than Their Components”, Econometricu, 42,
   113-34.
Amemiya, T. (1971) “The Estimation of the Variances in a Variance-Components          Model”,    Internu-
   tionul    Economic     Rmiew.   12, 1-13.
Amemiya, T. (1966) “On The Use of Principal Components of Independent Variables in Two-Stage
  Least-Squares Estimation”, lnternutionul   Economic Reoiew, 7, 282-303.
Anderson, T. W. (1976) “Estimation of Linear Functional Relationships: Approximate Distributions
  and Connections with Simultaneous Equations in Econometrics”, Journul of the Rqvul Stutisticul
  Society, Series B, 38, l-20.
Anderson, T. W. (1980) “Recent Results in the Estimation of a Linear Functional Relationship”, in
  P. R. Krishna& ed., Multiouriute Statistics, V. Amsterdam: North-Holland Publishing Company.
Anderson, T. W. and H. Rubin (1956) “Statistical Inference in Factor Analysis”, in J. Neyman, ed.,
  Proceedings of the Third Berkeley Symposium on Muthemuticul   Statistics and Prohuhilitv. 5. Berkeley:
  University of California Press.
Anderson, T. W. (1958) Multiouriute Stutisticul An&is.   New York: Wiley.
Aoki, M. and P. C. Yue (1970) “On Certain Convergence Questions in System Identification”, SIAM
  Journul     of Control,   8, 239-256.
Atttield, C. L. F. (July 1977) “Estimation of a Model Containing Unobservable Variables Using
  Grouped Observations: An Application to the Permanent Income Hypothesis”, Journul of Econo-
  metrics,    6, 51-63.
Aufm Kampe. H. (1979) Identifirierburkeit     in Multiruriuten Fehler-in-den- Vuriuhelen-Modellen (Iden-
  tification in Multivariate Errors-in-Variables Models), Unpublished Masters thesis, University of
  Bonn.
Avery, Robert B. (1979) “Modelling Monetary Policy as an Unobserved Variable”, Journal of
  Econometrics,   10, 291-311.
Bamett, V. D. (1967) “A Note on Linear Structural Relationships When Both Residual Variances are
  Known”, Biometriku, 54, 670-672.
Bamett, V. D. (1970) “Fitting Straight Lines. The Linear Functional Relationship with Replicated
  Observations”, Applied Statistics, 19, 135-144.
Barnow, Burt S. (August 1976) “The Use of Proxy Variables When One or Two Independent
  Variables are Measured with Error”, The Amerrcun Statistician, 30, 119-121.
Bar-Shalom, Y. (1972) “Optimal Simultaneous State Estimation and Parameter Identification in
  Linear Discrete-Time Systems”, IEEE Trunsuctions on Automatic Control, AC-17, 308-319.
Bartlett. M. S. (1949) “Fitting a Straight Line When Both Variables Arc Subject to Error”, Biometrics,
  5. 207-212.
Ch. 23: Latent   Variable   Models   in Econometrics                                                               1387

B~u, A. P. (1969) “On Some Tests            for Several Linear Relations”,       Journal     of the Royal    Statistical
  Society, Series B, 31, 65-71.
Bentler, P. M. (1982) “Linear Systems with Multiple Levels and Types of Latent Variables”, Chapter
  5 in K. G. Joreskog and H. Wold, eds., Systems Under Indirect Observations Causality, Structure,
  Predictron, Part I. Amsterdam: North-Holland Publishing Company, 101-130.
Bentler, P. M. (1983) “Simultaneous Equation Systems as Moment Structure Models, With an
  Introduction to Latent Variable Models”, Journal of Econometrics, 22, 13-42.
Bentler, P. M. and D. G. Weeks (September 1980) “Linear Structural Equations with Latent
  Variables”, Psychometrika, 45, 289-308.
Birch, M. W. (1964) “A Note on the Maximum Likelihood Estimation of a Linear Structural
  Relationship”, Journal of the American Statistical Association, 59, 1175-1178.
Blomqvist, A. G. (1972) “Approximating the Least-Squares Bias in Multiple Regression with Errors in
  Variables”, The Review of Economics and Statistics, 54, 202-204.
Bowden, R. (1973) “The Theory of Parametric Identification”, Econometnca, 41, 1069-1074.
Box, G. E. P. and G. M. Jenkins (1970) Time Series Analysis: Forecasting and Control. San Francisco:
  Holden-Day.
Brown, R. L. (1957) “Bivariate Structural Relation”, Biometrika, 44, 84-96.
Browne, M. W. (1974) “Generalized Least-Squares Estimators in the Analysis of Covariance Struc-
   tures”, South African Statistical Journal, 8, l-24. Reprinted as Chapter 13 in D. J. Aigner and A. S.
  Goldberger, eds., Latent Variables in Socio-Economic Models. Amsterdam: North-Holland Publish-
  ing Company, 143-161.
Casson, M. C. (1974) “Generalized Errors in Variables Regression”, Review of Economic Studies, 41,
  347-352.
Chamberlain, Gary (1978) “Omitted Variables Bias in Panel Data: Estimating the Returns to
  Schooling”, Annules de I’INSEE JO- 31, 49-82
Chamberlain, Gary (1977a) “Education, Income and Ability Revisited”, Chapter 10 in D. J. Aigner
  and A. S. Goldberger, eds., Lutent Variables in Socio-Economic Models. Amsterdam: North-Holland
  Publishing Company, 143-161.
Chamberlain, Gary (1977b) “An Instrumental Variable Interpretation             of Identification in
  Variance-Components and MIMIC Models”, Chapter 7 in P. Taubman, ed.. Kinometrtcs:               The
  Determinanets   of Socio-Economic Success Within and Between Families. Amsterdam: North-Holland
  Publishing Company.
Chamberlain, Gary and Zvi Griliches (1975) “ Unobservables with a Variance-Components Structure:
  Ability, Schooling and the Economic Success of Brothers”, International      Economic Revien,, 16,
  422-449.    Reprinted as Chapter 15 in D. J. Aigner and A. S. Goldberger. eds., Latent Vurruble.s tn
  Socio-Economic    Models. Amsterdam: North-Holland Publishing Company.
Chamberlain, Gary and Zvi Griliches (1977) “More on Brothers”, Chapter 4 in P. Taubman. ed..
  Kinometrics:   The Determrnants of Socro-Economic Success W/thin und Between Fumdies. Amsterdam:
  North-Holland Publishing Company.
Chen, C-F. (September 1981) “The EM Approach to the Multiple Indicators and Multiple Causes
  Model Via the Estimation of the Latent Variable”, Journal of the Americun Stutistrcul Associutton,
  76, 704-708.
Chemoff, Herman and Herman Rubin (1953) “Asymptotic Properties of Limited-Information Esti-
  mates under Generalized Conditions”, Chapter VII in W. C. Hood and T. C. Koopmans. eds.,
  Studies in Econometric Method. New York: John Wiley and Sons.
Cochran, W. G. (1968) “Errors of Measurement in Statistics”, Technometrics. 10, 637-666.
Cooper, R. V. and J. P. Newhouse (1972) “Further Results on the Errors in the Variables Problem”,
  mimeo, The Rand Corporation, Santa Monica, Ca.
Copas, J. B. (1972) “The Likelihood Surface in the Linear Functional Relationship Problem”, Journul
  of the Royul Statisticul Society, Series B, 34, 274-278.
Cox, H. (1964) “On the Estimation of State Variables and Parameters for Noisy Dynamic Systems”,
  IEEE Trunsuctions of Automuttc Control, AC-lo, 5-12.
COX, N. R. (1976) “The Linear Structural Relation for Several Groups of Data”, Btometriku,       63,
  231-237.
Cramer, H. (1946) Muthemuticul         Methods   of Stutistics.   Princeton: Princeton     University   press.
1388                                                                                    D. J. Aigner et al.

Creasy, M. (1956) “Confidence            Limits for the Gradient in the Linear Functional Relationship”.
  Journal of the Roval Slatisrical Society, Series B, 18, 65-69.
Davies, R. ‘B. and ‘B. Hutton (1975) “The Effect of Errors in the Independent Variables in Linear
  Regression”, Biometrika, 62, 383-391.
DeGracie, J. S. and W. A. Fuller (1972) “Estimation of the Slope and Analysis of Covariance When
  the Concomitant Variable is Measured with Error”, Journal of the American Statistical .4ssociation.
  67, 930-937.
Deistler, M. and H.-G. Seifert (1978) “Identifiability and Consistent Estimability in Econometric
  Models”, Econometrica, 46, 969-980.
Denton, F. T. and J. Kuiper (1965) “The Effect of Measurement Errors on Parameter Estimates and
  Forecasts: A Case Study Based on the Canadian Preliminary National Accounts”, The Reriew of
  Economics and Statistics,        47, 198-206.
Dolby, G. R. (1976a) “A Note on the Linear Structural Relation When Both Residual Variances are
  Known”, Journal of the American Statistical As&iation.  71, 352-353.
Dolby, G. R. (1976b) “The Ultrasttuctural Relation: A Synthesis of the Functional and Structural
  Relations”, Blomerrika, 63, 39-50.
Dolby, G. R. (1972) “Generalized Least Squares and Maximum Likelihood Estimation of Nonlinear
  Functional Relationships”, Journal of the Royal Stat&Cal Society, Series B. 34, 393-400.
Dolby, G. R. and T. G. Freeman (1975) “Functional Relationships Having Many Independent
  Variables and Errors with Multivariate Normal Distribution”, Journal of Multirarrare .4 na!vsis. 5,
  466-479.
Dolbv. G. R. and S. Lipton (1972) “Maximum Likelihood Estimation of the General Nonlinear
  Relationship with Replicated Observations and Correlated Errors”, Biometrrka. 59, 121-129.
Dorff. M. and J. Gurland (1961a) “Estimation of the Parameters of a Linear Functional Relation”,
  Jou>nal of the Royal Statistical iociety, Series B, 23, 160-170.
Dorff, M. and J. Gurland (1961b) “Small Sample Behavior of Slope Estimators in a Linear Functional
  Relation”, Biometrics, 17, 283-298.
Drion, E. F. (1951) “Estimation of the Parameters of a Straight Line and of the Variances of the
  Variables, if They Are Both Subject to Error”, Indagationes Mathematicae, 13. 256-260.
Egerton, M. F. and P. J. Laycock (1979) “Maximum Likelihood Estimation of Multivariate Non-Lin-
  ear Functional Relationships”, Mathematische Operationsjorschung und Statistik. 10. 273-280.
Engle, R. F. (1974) “Band Spectrum Regression”, International Economic Rerliew. 15. I- 11.
Engle. R. F. (1980) “Exact Maximum Likelihood Methods for Dynamic Regressions and Band
  Spectrum Regressions”, International Economic Reoiew, 21, 391-408.
Engle R. F. and D. K. Foley (1975) “An Asset Price Model of Aggregate Investment”. fnternatiorlul
  Economic Reuieua, 16, 625-47.
Elffers, H., J. G. Bethlehem and R. Gill (1978) “Indeterminacy Problems and the Interpretation of
  Factor Analysis Results”, Stutistica Neerlandica, 32, 181-199.
Espasa, A. (1979) The Spectral Maximum Likelihood Estimutron of Econometrrc Models with Stationan’
   Errors. Giittingen: Vandenhoeck und Ruprecht.
Fisher, F. M. (1966) The Identification Problem m Econometrics. New York: McGraw-Hill.
Florens, J.-P., M. Mouchart and J.-F. Richard (1974) “Bayesian Inference in Error-in-Variables
   Models”, Journal of Multioariote Anu!vsis, 4, 419-52.
Fornell, C. (1983) “Issues in the Application of Covariance Structure Analysis: A Comment”, Journal
  of Consumer Research,          9, 443-448.
Frisch, R. (1934) Smlisficul Confluence Analysis by Means of Complete Regressron Systems. Oslo:
   University Institute of Economics.
Frost, P. A. (1979) “Proxy Variables and Specification Bias”, The Reolew of Economics and SlaGstics.
  61, 323-325.
Fuller, W. A. (1980) “Properties of Some Estimators for the Errors-in-Variables Model”, The Annals
  of Sratislics,   8, 407-422.
Fuller, W. A. and M. A. Hidiroglou (1978) “Regression Estimation After Correcting for Attenuation”,
  Journul of the American SfaCstical Association, 73, 99-104.
Garber, S. and S. Klepper (Sept. 1980) “Extending the Classical Normal Errors-in-Variables Model”.
  Econometrica,     48, 1541-1546.
Geary. R. C. (1943) “Relations Between Statistics: The General and the Sampling Problem When the
  Samples are Large”, Proceedings of the Royal Irrsh Acudemv. A, 49, 177-196.
Ch. 13: Latent      Variable    Models   in Econometrics                                                               1389

Geary. R. C. (1942) “Inherent   Relations Between Random Variables”,       Proceeding   of the Royal Irrsh
  Academy. A. 41. 63-61.
Geraci.  Vincent, .I. (1976) “Identification   of Simultaneous    Equation   Models with Measurement
  Error”, Journal of Econometrics, 4, 263-283. Reprinted as Chapter II in D. J. Aigner and A. S.
  Goldberger,  eds., Latenr Variables in Socio-Economic    Models. Amsterdam:    North-Holland    Publish-
  ing Company.
Geraci, Vincent,         J. (1977) “Estimation     of Simultaneous     Equation    Models   with Measurement        Error”,
   Econometrica,        45, 1243-1255.
Geraci,      Vincent,    J. (1983) Errors    in Variables   and the Individual     Structural   Equation,     Inrernational
   Economrc       Review,    24. 217-236.
Giles, R. L. (1980) “Error of Omission and Measurement:       Estimating the Parameter of the Variable
   SubJect to Error”, Polytechnic of the South Bank, London.
Goldberger.   A. S. (1974) “Unobservable   Variables in Econometrics”,   Chapter 7 in P. Zarembka, ed.,
   Fronriers m Econometrics. New York: Academic Press.
Goldberger.    A. S. (November      1972a) “Structural  Equation    Methods    in the Social Sciences”,
   Econometrica.        40, 979-1001.
Goldberger,  A. S. (1972b) “Maximum-Likelihood        Estimation of Regressions Containing  Unobserva-
  ble Independent   Variables”, Infernational  Economic Reciew, 13. l-15. Reprinted as Chapter 6 in D.
  J. Aigner and A. S. Goldberger.     eds., Latent Variables m Socio-Economic   Models. North-Holland
  Publishing Company.
Goldberger,   A. S. (June 1971) “Econometrics       and Psychometrics:   A Survey of Communalities”.
   Ps,chomerrika,        36, 83-107.
Goldberger,   A. S. and 0. D. Duncan, eds. (1973) Structural Equation Models in the Sonal Sciences.
   New York: Seminar Press.
Gorsuch. S. A. (1974) Factor Anahsis. Philadelphia:      W. B. Saunders Company.
Griliches. Z. (January 1977) “Estimating     the Returns to Schooling: Some Econometric       Problems”,
   Econometrica.  45, l-22.
Griliches. Z. (1974) “Errors in Variables and Other Unobservables”,          Economen-ica, 42, 971-998.
   Reprinted as Chapter 1 in D. J. Aigner and A. S. Goldberger.      eds.. Lorent Variables in Socio-Go
   nonnc Models. Amsterdam:    North-Holland    Publishing Company.
Griliches, Z. and Vidar Ringstad (March 1970) “Error-in-the-Variables       Bias in Nonlinear Contexts”.
   Economernca.         38. 368-370.
Griliches,     Z. and W. M. Mason           (May   1972) “Education,     Income    and Ability”,    Journal    of Politrcal
   Economy,      80, 74-103.
Hall, Bronwyn (1979) user’s Guide to MOMENTS.      204 Juniper0                   Serra Blvd., Stanford. CA 94305.
Hannan,   E. J. (1963) “Regression for Time Series with Errors                    of Measurement”,      Bfometriku, 50.
  293-302.
Hannan,  E. J. (1971) “The Identification    Problem for Multiple Equation   Systems with Moving
  Average Errors”. Econometricu, 39, 751-765.
Hannan. E. J. (1975) “The Estimation    of ARMA Models”, The Annuls of Statistrcs, 3, 975-981.
Hannan, E. J. (1976) “The Identification and Parameterization of ARMAX and State Space Forms”,
   Economeirrcu,        44, 713-723.
Hatman. E. J. and D. F. Nicholls (1972) “The Estimation       of Mixed Regression,    Autoregression,
  Moving Average, and Distributed    Lag Models”, Economeirrcu, 40, 529-547.
Harman. H. H. (1967) Modern Factor Ana/jsis. Chicago: The University of Chicago Press.
Hausman. J. A. (1978) “Specification  Tests in Econometrics”, Economerricu,  46, 1251-1272.
Hausman, J. A. (May 1977) “Errors in Variables in Simultaneous       Equation Models”, Journal o/
   Econometrics,        5, 389-401.
Hausman. J. A. and W. E. Taylor (1983) “Identification       in Linear Simultaneous     Equations Models
  with Covariance Restrictions:     An Instrumental     Variables   Interpretation”,   Econometricu,     51%
  1527-1549.
Healy, J. D. (1980) “Maximum     Likelihood Estimation of a Multivariate      Linear Functional  Relation-
  ship”. Journal of Multirariate Analisis. 10. 243-251.
Heckman, J. J. and B. Singer (1982) “The Identification  Problem in Econometric      Models for Duration
  Data”, Chapter 2 in W. Hildenbrand,      ed., Advances rn Econometrics, Part II. Cambridge:        Cam-
  bridge University Press.
Heise, D. R. (1975) Causal Analysis. New York: Wiley.
1390                                                                                  D. J. Aigner   et al.

Hester,     Donald D. (July 1976) “A Note on Identification and Information Loss Through Aggregation”,
  Economefrrca,        44, 815-818.
Hodges, S. D. and P. G. Moore (1972) “Data Uncertainties and Least Squares Regression”,          Apphed
  StaWics,         21, 185-195.
Hoschel, H.-P. (1978) “Generalized Least Squares Estimators of Linear Functional Relations with
  Known Error-Covariance”, Mafhematische Operationsjorschung    und Statistlk. 9. 9-26.
Hsiao, C. (March 1979) “Measurement Error in a Dynamic Simultaneous Equation Model with
  Stationary Disturbances”, Econometrica. 47, 475-494.
Hsiao. C. (February 1977) “Identification for a Linear Dynamic Simultaneous Error-Shock Model”,
  International Economic Reoiew, 18, 181-194.
Hsiao, C. (June 1976) “Identification and Estimation of Simultaneous Equation Models with Mea-
  surement Error”, International  Economic Reoiew, 17, 319-339.
Hsiao, C. and P. M. Robinson (June 1978) “Efficient Estimation of a Dynamic Error-Shock Model”,
   International      Economic    Reoiew,   19, 467-480.
Johnston, J. (1972) Econometric Merhods. New York: McGraw-Hill.
Jbreskog, K. G. (1978) “An Econometric Model for Multivariate Panel Data”,        Annales   de /‘INSEE
   30-31.     355-366.
Joreskog, K. G. and D. S&born (1981) LISREL         V User’s Gurde. Chicago: National Educational
  Resources.
Joreskog, K. G. (1970) “A General Method for Analysis of Covariance Structures”, Biometrika. 57.
  239-251.   Reprinted as Chapter 12 in D. J. Aigner and A. S. Goldberger, eds., Latent Variables in
  Socio-Economic   Models. Amsterdam: North-Holland Publishing Company.
Joreskog, K. G. and A. S. Goldberger (1975) “Estimation of a Model-with Multiple Indicators and
   Multiple Causes of a Single Latent Variable”, Journal of the American Statistical Associatron, IO.
   631-639.
Joreskog. K. G. and Dag Sorbom (1977) “Statistical Models and Methods for Analysis of Longitudi-
   nal Data”, Chapter 16 in D. J. Aigner and A. S. Goldberger. eds., Latent Variables in Socio-Eco-
   nomic Models. Amsterdam: North-Holland Publishing Company, 285-325.
Joreskog, K. G. (1967) “Some Contributions to Maximum Likelihood Factor Analysis”, Psycho-
   metrika,    32. 443-482.
Joreskoe. K. G. and A. S. Goldberger (1972) “Factor Analysis
                                                        .    by_ Generalized Least Squares”,
   Psvch;merrika.        37, 243-260.           -
__..__../ ~__= B.. T. W. McGuire. P. R. Sandav and R. Staelin (1977) “Estimation of Environmental
Kadane. Joseuh
  EfTects on the Pattern of IQ Scores Over Time”, Chapter 17 in D. J. Aigner and A. S. Goldberger,
  eds., L.utenr Variables in Socio-Economic Models. Amsterdam: North-Holland Publishing Company,
  327-348.
 Kapteyn, A. and T. J. Wansbeek (1983) “Identification in the Linear Errors in Variables Model”.
   Economefrica,   51, 1847-1849.
 Kapteyn, A. and T. J. Wansbeek (1983) “Errors in Variables: Consistent Adjusted Least Squares
   (CALS) Estimation”, Netherlands Central Bureau of Statistics.
 Kapteyn, A. and T. J. Wansbeek (1981) “Structural Methods in Functional Models”, Modelling
   Research Group, University of Southern California.
 Keller, W. J. (1975) “A New Class of Limited-Information Estimators for Simultaneous Equation
   Systems”, Journal of Econometrics, 3, 11-92.
 Kendall, M. CT.and A. Stuart (1979) The Adoanced Theory of Stafisrics, Fourth Edition. New York:
   Macmillan.
 Kiefer, J. and J. Wolfowitz (1956) “Consistency of the Maximum Likelihood Estimator in the
   Presence of Infinitely Many Incidental Parameters”, Annals of Mathematical Statistics, 27, 887-906.
 Klepner, S. and E. E. Learner (1984) “Consistent Sets of Estimates for Regressions with Errors in All
   Variables”. Econometrica, 52, 163-183..
 Kloek. T. and L. B. M. Mennes (1960) “Simultaneous Eouations Estimation Based On Princinal         r
   Components of Predetermined V’ariabies”, Economerrica, i8, 45-61.
 Konijn, H. S. (1962) “Identification and Estimation in a Simultaneous Equations Model with Errors in
   the Variables”, Econometrica, 30, 79-81.
 Koopmans, T. C. (1937) Linear Regression Analysis oj Economic Time Series. Haarlem: Netherlands
   Economic Institute, De Erven F. Bohn N.V.
Ch. 23: L.utent     Vuriuhle     Models   in Econometrics                                        1391


Lawley, D. N. and A. E. Maxwell (1971) Fuctor Analysis us u Stutisticul Method. London: Butter-
  worths.
Learner, E. E. (1978a) “Least-Squares Versus Instrumental Variables Estimation in a Simple Errors in
  Variables Model”, Econometricu, 46, 961-968.
Learner, E. E. (1978b) SpeciJicution Seurches, Ad Hoc Inference with None.xperimentul    Dutu. New
  York: Wiley.
Lee, S-Y. (September 1980) “Estimation of Covariance Structure Models with Parameters Subject to
  Functional Constraints”, Psychometricu, 45, 309-324.
Levi, M. D. (1977) “Measurement Errors and Bounded OLS Estimates”, Journul of Econometrics, 6,
  165-171.
Levi, M. D. (1973) “Errors in the Variables Bias in the Presence of Correctly Measured Variables”,
  Econometricu,       41, 985-986.
Levin, M. J. (1964) “Estimation of a System Pulse Transfer Function in the Presence of Noise”, IEEE
  Trunsuctions      on Automatic      Control,     AC-9,   229-235.
Lindley, D. V. and G. M. El-Sayyad (1968) “The Bayesian Estimation of a Linear Functional
  Relationship”, Journul of the Royul Stutisticul Society, Series B, 30, 198-202.
Liviatan, N. (1963) “Tests of the Permanent-Income Hypothesis Based on a Reinterview Savings
  Survey”, in: C. F. Christ, ed., Measurement in Economics. Stanford: Stanford University Press.
Liviatan, N. (July 1961) “Errors in Variables and Engel Curve Analysis”, Econometricu. 29. 336-362.
Ljung, L. (1977) “Positive Real Transfer Functions and the Convergence of Some Recursive
  Schemes”, IEEE Trunsuctions of Automatic Control. AC-22. 539-551.
Madansky. A. (1976) Foundutions’of Econometrics. Amsterdam: North-Holland Publishing Company.
Madansky, A. (1959) “The Fitting of Straight Lines When Both Variables are Subject to Error”,
  Journal     of the Americun      Stutisticul    Association,   54, 173-205.
Malinvaud, E. (1970) Stutistlcul Methods of Econometrics, Second Revised Edition. Amsterdam:
 North-Holland Publishing Company.
Maravall, A. (1979) Identificution in Dynumic Shock-Error Models. Berlin: Springer-Verlag.
Maravall, A. and D. J. Aigner (1977) “Identification of the Dynamic Shock-Error Model: The Case
 of Dynamic Regression”, Chapter 18 in D. J. Aigner and A. S. Goldberger, eds.. Latent Vuriuhles in
 Socio-Economic    Models. Amsterdam: North-Holland Publishing Company, 349-363.
McCallum, B. T. (1977) “Relative Asymptotic Bias from Errors of Omission and Measurement”,
 Econometricu,    40, 757-758.    Reprinted as Chapter 2 in D. J. Aigner and A. S. Goldberger, eds..
 L,utent Vuriuhles in Socio-Economic     Models. Amsterdam: North-Holland Publishing Company.
Moberg, L. and R. Sundberg (1978) “Maximum Likelihood Estimation of a Linear Functional
 Relationship When One of the Departure Variances is Known”, Scundinuviun Journal of Statistics.
  5, 61-64.
Mouchart, M. (1977) “A Regression Model with an Explanatory Variable Which Is Both Binary and
 Subject to Errors”, Chapter 4 in D. J. Aigner and A. S. Goldberger. eds., Latent Vuriuhles m
 Socio-Economic   Models. Amsterdam: North-Holland Publishing Company, 48-66.
Mulaik, S. D. (1972) The Foundutions of Fuctor Anulysis. New York: McGraw-Hill.
Mundlak, Y. (1961) “Empirical Production Function Free of Management Bias”, Journal of Farm
  Economics,      43, 44-56.
Muthen, B. (December 1979) “A Structural Probit Model With Latent Variables”,         Journul   of the
  American      Stutisticul    Association.      74, 807-811.
Neyman, J. (1951) “Existence of Consistent Estimates of the Directional Parameter in a Linear
  Structural Relation Between Two Variables”, Annuls of Muthemuticul Stutistics, 22, 496-512.
Neyman, J. and Elizabeth L. Scott (1951) “On Certain Methods of Estimating the Linear Structural
  Relation”, Annuls of Muthemuticul Stutistics. 22, 352-361.
Neyman, J. and Elizabeth L. Scott (1948) “Consistent Estimates Based on Partially Consistent
  Observations”, Econometrica, 16, l-32.
Nicholls, D. F., A. R. Pagan and R. D. Terre11 (1975) “The Estimation and Use of Models with
  Moving Average Disturbance Terms: A Survey”, Internutionul  Economic Review. 16, 113-134.
Nowak, E. (1977) “An Identification Method for Stochastic Models of Time Series Analysis with
  Errors in the Variables”, paper presented to the European Meeting of the Econometric Society,
  Vienna.
Nussbaum, M. (1977) “Asymptotic Optimahty of Estimators of a Linear Functional Relation if the
1392                                                                                            D. J. Aigner     et al.

  Ratio of the Error Variances is Known”,                 Mathemattsche   Operationsforschung       und Statrstik.     8,
  173-198.
O’Neill, I., G. Sinclair and F. J. Smith (1969) “Polynomial Curve Fitting When Abscissas and
  Ordinates are Both Subject to Error”, Computer Journal, 12, 52-56.
Pagan, A. (1973) “Efficient Estimation of Models with Composite Disturbance Terms”, Journal of
  Econometrics, 1, 329-340.
Pakes, A. (1982) “On the Asymptotic Bias of the Wald-Type Estimators of a Straight Line when Both
  Variables are Subject to Error”, International Economic Review, 23, 491-497.
Pal, M. (1980) “Consistent Moment Estimators of Regression Coefficients in the Presence of Errors in
  Variables”, Journal of Econometrics, 14, 349-364.
Patefield, W. M. (1981) “Multivariate Linear Relationships: Maximum Likelihood Estimation and
  Regression Bounds”, Journal of the Royal Statistical Society, Series B, 43, 342-352.
Patefield, W. M. (1978) “The Unreplicated Ultrastructural Relation: Large Sample Properties”,
  Biometrika,      65, 535-540.
Patefield. W. M. (1977) “On the Information Matrix in the Linear Functional Relationship Problem”.
  Applied     Statistics,   26. 69-70.
Patefield. W. M. (1976) “On the Vafiditv of Anoroximate Distributions Arising in Fittine. a Linear
  Functional Relations’hip”, Journal of Statist&,& Computation and Simulation, < 43-60. -
Phillips, A. W. (1966) “The Estimation of Systems of Difference Equations with Moving Average
  Disturbances”, paper presented at the Econometric Society meeting, San Francisco.
Rao, C. R. (1966) “Characterization of the Distribution of Random Variables in Linear Structural
  Relations”, Sankhya, 28, 251-260.
Reiersal, Olav (1950) “Identifiability of a Linear Relation Between Variables Which are Subject to
  Error”, Econometrica, 18, 375-389.
Reiersal, Olav (1945) “Confluence Analysis by Means of Instrumental Sets of Variables”, Arkn fir
  Mathematik,        Astronomi     och Fysik,   32A, 1-119.
Richardson, D. H. and D.-M. Wu (1970) “Least Squares and Grouping Method Estimators in the
  Errors-in-Variables Model”, Journal of the American Statistical Assoctation, 65, 724-748.
Robertson, C. A. (1974) “Large Sample Theory for the Linear Structural Relation”, Biometrika. 61,
  353-359.
Robinson, P. M. (1977) “The Estimation of a Multivariate Linear Relation”,                Journal     of Muhtrariate
  Ana!rsis,     7, 409-423.
Robinson, P. M. (1974) “Identification, Estimation and Large-Sample Theory for Regressions
  Containing Unobservable Variables”, International     Economic Review, 15, 680-692. Reprinted as
  Chapter 7 in D. J. Aigner and A. S. Goldberger, eds., Latent Variables in Socio-Economtc Models.
  Amsterdam: North-Holland Publishing Company.
Robinson, P. M. and M. C. Ferrara (1977) “The Estimation of a Model for an Unobservable Variable
  with Endogenous Causes”, Chapter 9 in D. J. Aigner and A. S. Goldberger, eds., Latent Variables m
  Socio-Economic   Models. Amsterdam: North-Holland Publishing Company, 131-142.
Rothenberg, T. J. (1973a) “The Asymptotic Distribution of the Least-Squares Estimator in the
  Errors-in-Variables Model”, mimeo, University of California, Berkeley.
Rothenberg, T. J. (1973b) Efffcient Estimation with A Priori Information. New Haven: Yale University
  Press.
Rothenberg, T. J. (1971) “Identification in Parametric Models”, Econometrtra. 39, 577-592.
Sampson, A. R. (1974) “A Tale of Two Regressions”, Journal of the American Statistical Assocration,
  69.682-689.
Sargan, J. D. (July 1958) “The Estimation of Economic Relationships              Using Instrumental Variables”.
  Econometrica,   26, 393-415.
Schmidt, P. (1976) Econometrics. New York: Marcel Dekker.
Schneeweiss, H. (1982) “Note on Creasy’s Confidence Limits for the Gradient in the Linear
  Functional Relationship”, Journal of Multivariate Anahsrs. 12, 155-158.
Schneeweiss, H. (1976) “Consistent -Estimation of a Regression with Errors in the Variables”.
  Metnka, 23, 101-115.
Scott, E. L. (1950) “Note on Consistent Estimates of the Linear Structural Relation Between Two
  Variables”, Annals of Mathematical Statistics, 21, 284-288.
Shapiro, A. (1982) “Rank-Reducibility of a Symmetric Matrix and Sampling Theory of Minimum
  Trace Factor Analysis”, Psychometrika. 47, 187-199.
Ch. 23: Latent     Vartable    Models in Econometrics                                                 1393

Singleton, K. .I. (October 1980) “A Latent Time Series Model of the Cyclical Behavior of Interest
  Rates”, International   Economic Review, 21, 5599516.
Solari, M. E. (1969) “The ‘Maximum Likelihood Solution’ of the Problem of Estimating a Linear
  Functional Relationship”, Journal of the Royal Statistical Society, Series B, 31, 312-315.
Sprent, P. (1966) “A Generalized Least-Squares Approach to Linear Functional Relationships”,
  Journal of the Royal Statistical Society. Series B, 28, 218-291.
Sprent, P. (1970) “The Saddlepoint of the Likelihood Surface for a Linear Functional Relationship”,
  Journal of the Royal Statistical Society, Series B, 32, 432-434.
Theil. H. (1971) Principles of Econometrics. New York: Wiley.
Tintner, G. (1945) “A Note on Rank, Multicollinearity and Multiple Regression”, Anna/s of
   Mathematical       Statistics,   16, 304-308.
Van Uven, M. .I. (1930) “Adjustment of N Points (in n-Dimensional Space) to the Best Linear
  (n - l)-Dimensional Space”, Koninkltjke    Akademie clan Wetenschappen te Amsterdam,  Proceedings
  of the Section of Sciences, 33, 143-157, 301-326.
Villegas, C. (1961) “Maximum Likelihood Estimation of a Linear Functional Relationship”, Annals of
   Mathematical       Statistics,   32, 1040-1062.
Villegas, C. (1964) “Confidence Region for a Linear Relation”,   Annals   of Mathematical   Statistics,   35.
   780-788.
Wald, A. (1949) “Note on the Consistency of the Maximum Likelihood Estimate”,                   Anna/s     of
   Mathema~tical      Statistics,   20, 595-601.          _
Wald. A. (1948) “Estimation of a Parameter When the Number of Unknown Parameters Increases
 Indefinitely with Number of Observations”, Annals of Mathematical Statistics, 19. 220-221.
Wald, A. (1940) “The Fitting of Straight Lines if Both Variables Are Subject to Error”, Annals of
 Mathematical   Statistics, 11, 284-300.
Ware, J. H. (1972) “The Fitting of Straight Lines When Both Variables are Subject to Error and the
 Ranks of the Means Are Known”, Journal of the American Statistical Association. 61, 891-897.
Wegge. L. L. (1965) “Identifiability Criteria for a System of Equations as a Whole”, The Australian
   Journal    of Statistics.   7. 61-71.
Wickens. M. R. (1972) “A Note on the Use of Proxy Variables”, Econometrica, 40, 759-761.
Wilson. G. J. (1969) “Factorization of the Generating Function of a Pure Moving Average Process”,
 SIAM Journal of Numerical Analysts, 6, 1-l.
Willassen, Y. (1979) “Extension of Some Results by Reiersol to Multivariate Models”, Scandinaoian
   Journal    of Stattstics,   6, 89-91.
Wolfowitz, J. (1954) “Estimation of Structural Parameters When The Number of Incidental Parame-
 ters is Unbounded” (abstract), Annals of Mathematrcal Statistics, 25, 811.
Wolfowitz, J. (1952) “Consistent Estimators of the Parameters of a Linear Structural Relation”,
   Skandmaoisk       Aktuarietidskrift,    35, 132-151.
Wu, D.-M. (1973) “Alternative Tests of Independence Between Stochastic Regressors and Dis-
  turbances”, Econometrica, 41, 133-150.
Zellner, Arnold (1970) “Estimation of Regression Relationships Containing Unobservable Indepen-
  dent Variables”, International   Economic Revrew, 11, 441-454. Reprinted as Chapter 5 in D. J.
  Aigner and A. S. Goldberger, eds., Latent Variables in Socio-Economtc         Models. Amsterdam:
  North-Holland Publishing Company.
Zellner. Arnold (1971) An Introduction to Bayesian Inference tn Econometrics. New York: Wiley,



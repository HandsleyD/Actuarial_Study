---
normalized_id: shared-pdf-reference-limited-dependent-variables
exam_code: SHARED
material_scope: limited dependent variables.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Limited Dependent Variables.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-limited-dependent-variables

Chapter 27


LIMITED             DEPENDENT                          VARIABLES

PHOEBUS       J. DHRYMES

Columbia    University




Contents

0.   Introduction                                                                              1568
1.   Logit and probit                                                                          1568
     1 .l    Generalities                                                                      1568
     1.2.    Why a general linear model (GLM)                 formulation   is inappropriate   1570
     1.3.    A utility maximization          motivation                                        1572
     1.4.    Maximum         likelihood    estimation                                          1575
     1.5.    Goodness       of fit                                                             1579
2.   Truncated dependent variables                                                             1585
     2.1.    Generalities                                                                      1585
     2.2.    Why simple OLS procedures                 fail                                    1586
     2.3.    Estimation      of parameters       by ML methods                                 1589
     2.4.    An initial consistent        estimator                                            1590
     2.5.    Limiting     properties      and distribution    of the ML estimator              1595
     2.6.    Goodness       of tit                                                             1603
3.   Sample selectivity                                                                        1604
     3.1.    Generalities                                                                      1604
     3.2.    Inconsistency       of least squares procedures                                   1606
     3.3.    The LF and ML estimation                                                          1610
     3.4.    An initial consistent         estimator                                           1613
     3.5.    Limiting     distribution      of the ML estimator                                1619
     3.6.    A test for selectivity       bias                                                 1625
References                                                                                     1626




Handbook of Econometrics, Volume III, Edited by 2. Griliches and M.D. Intriligutor
c Elsevier Science Publishers BV, 1986
1568                                                                                     P. J. Dhtymes




0.     Introduction

This is intended          to be an account of certain salient themes of the Limited
 Dependent       Variable (LDV) literature. The object will be to acquaint the reader
with the nature of the basic problems and the major results rather than recount
just who did what when. An extended bibliography                       is given at the end, that
 attempts to list as many papers as have come to my attention - even if only by
 title.
     By LDV we will mean instances of (dependent)                 variables-i.e.      variables to be
 explained in terms of some economic model or rationalizing                     scheme for which (a)
 their range is intrinsically       a finite discrete set and any attempt to extend it to the
 real line (or the appropriate         multivariable   generalization)      not only does not lead
 to useful simplification,       but befouls any attempt to resolve the issues at hand; (b)
 even though their range may be the real (half) line (or the appropriate                     multivari-
 able generalization)       their behavior is conditioned       on another process(es).
     Examples of the first type are models of occupational                 choice, entry into labor
 force, entry into college upon high school graduation,                 utilization   of recreational
 facilities, utilization    of modes of transport, childbearing,          etc.
     Examples of the latter are models of housing prices and wages in terms of the
 relevant characteristics        of the housing unit or the individual-what              is commonly
 referred to as hedonic price determination.               Under this category we will also
 consider the case of truncated dependent observations.
     In examining       these issues we shall make an attempt to provide an economic
 rationalization      for the model considered, but our main objective will be to show
 why common procedures such as least squares fail to give acceptable results; how
 one approaches        these problems by maximum likelihood procedures and how one
 can handle problems of inference-chiefly               by determining         the limiting distribu-
 tions of the relevant estimators. An attempt will be made to handle all problems
 in a reasonably       uniform manner and by relatively elementary means.



1.     Logit and probit


1.1.     Generalities

Consider   first the problem faced by a youth completing     high school; or by a
married female who has attained the desired size of her family. In the instance of
the former the choice to be modelled is going to college or not; in the case of the
latter we need to model the choice of entering the labor force or not.
Ch. 27: Limited Dependent           Variables                                                  1569

   Suppose that as a result of a properly conducted survey we have observations
on T individuals, concerning their socioeconomic characteristics and the choices
they have made.
   In order to free ourselves from dependence on the terminology of a particular
subject when discussing these problems, let us note that, in either case, we are
dealing with binary choice; let us denote this by
   Alternative 1 Going to College or Entering Labor Force
   Alternative 2 Not Going to College or Not Entering Labor Force
Since the two alternatives are exhaustive we may make alternative 1 correspond to
an abstract event 8 and alternative 2 correspond to its complement 2. In this
context it will be correct to say that what we are interested in is the set of factors
affecting the occurrence or nonoccurrence of 8. What we have at our disposal is
some information about the attributes of these alternatives and the (socioeconomic)
attributes of the individual exercising choice. Of course we also observe the choices
of the individual agent in question. Let

      Yt =1           if individual t chooses in accordance with event 8,
         = 0           otherwise.

Let

      w= (w,,w*,...,w,),
be a vector of characteristics                  relative to the alternatives corresponding   to the
events 6 and 2; finally, let

      rt.=(rtl,...,       r ,m) ,

be the vector describing the socioeconomic characteristics                   of the tth individual
economic agent.
  We may be tempted to model this phenomenon as

      Yt = x,.P + Et,                t =1,2 ,..., T,

where

      x,.=    (w, r,.).
/3 is a vector of unknown constants and

      e,:t=1,2        ,..., T,

is a sequence of suitably defined error terms.
1570                                                                             P. J. Dhymes

  The formulation in (1) and subsequent estimation by least squares              procedures
was a common occurrence in the empirical research of the sixties.



1.2.     Why a general linear model (GLM) forwylation        is inappropriate

Although      the temptation        to think of LDV problems           in a GLM context is
enormous a close examination            will show that this is also fraught with considerable
problems. At an intuitive level, we seek to approximate             the dependent variable by
a linear function of some other observables;           the notion of approximation    is based
on ordinary Euclidean distance. That is quite sensible, in the usual GLM context,
since no appreciable        violence is done to the essence of the problem by thinking of
the dependent       variable as ranging without restriction over the real line-perhaps
after suitably centering it first.
    Since the linear function by which we approximate it is similarly unconstrained,
it is not unreasonable          to think of Euclidean distance as a suitable measure of
proximity.     Given these considerations        we proceed to construct a logically con-
sistent framework in which we can optimally apply various inferential procedures.
    In the present context, however, it is not clear whether the notion of Euclidean
distance     makes a great deal of sense as a proximity             measure. Notice that the
dependent      variable can only assume two possible values, while no comparable
restrictions    are placed on the first component            of the right hand side of (1).
Second, note that if we insist on putting this phenomenon              in the GLM mold, then
for observations      in which

       y,=l,

we must have


                                                                                           (2)
while for observations     in which

       y,=o,

we must have

       Et =    -   x,,p.                                                                  (3)

Thus, the error term can only assume two possible values, and we are immediately
led to consider an issue that is important to the proper conceptualization     of such
models, viz., that what we need is not a linear model “explaining”         the choices
Ch. 27: Limited Dependent       Variables                                               1571

individuals make, but rather a model of the probabilities corresponding to the
choices in question. Thus, if we ask ourselves: what is the expectation of E,, we
shall be forced to think of the probabilities attaching to the relations described in
(2) and (3) and thus conclude that

      &,=1-Q,

with probability           equal to

      P,l=   KY,      =a                                                                (4
and



with probability

      Pr*=~bt=o)=l-P,1.                                                                 (5)
What we really should be asking is: what determines the probability that the t th
economic agent chooses in accordance with event 8, and eq. (1) should be viewed
as a clumsy way of going about it. We see that putting




where f( .) is a suitable density function with known parameters, formalizes the
dependence of the probabilities of choice on the observable characteristics of the
individual and/or the alternatives.
   To complete the argumentation about why the GLM is inapplicable in the
present context we note further

      E(E1) = F(x,.P)(l-x,./3)+                [l-   F(x,.P)](   - x,.B) = F(O)-x,.P,
                                                                                        (8)
      Var(q)       = F(x,.P)[l-         F(x,.P)].                                       (9)

Hence, prima facie, least squares techniques are not appropriate, even if the
formulations in (1) made intuitive sense.
   We shall see that similar situations arise in other LDV contexts in which the
absurdity of least squares procedures is not as evident as it is here.
1572                                                                                P. J. Dhrymes

  Thus,     to recapitulate,       least squares    procedures   are inapplicable

 i. because    we should be interested    in estimating   the probability   of choice;
    however, we are using a linear function       to predict actual choices, without
    ensuring that the procedure will yield “predictions”     satisfying the conditions
    that probabilities ought to satisfy
ii. on a technical level the conditions on the error term that are compatible with
    the desirable properties of least squares estimators in the context of the GLM
    are patently false in the present case.



1.3.     A utility maximization        motivation

As before, consider an individual,       t, who is faced with the choice problem as in
the preceding    section but who is also hypothesized     to behave so as to maximize
his utility in choosing between the two alternatives.    In the preceding it is assumed
that the individual’s   utility contains a random component.     It involves little loss in
relevance to write the utility function as

        q=u(wJ,.;~)+EI,                  t =1,2 ,...,    T,

where

       u(w, rt.; e) = E(Ulw, q.),                  Et.=Ut-    u(w,r,.; e>.

For the moment       we shall dispense with the subscript    t referring to the tth
individual.
   If the individual  chooses according to event 8, his utility is (where now any
subscripts refer to alternatives),

        u, = u(w, r; el)+el.                                                                (10)

The justification    for the parameter vector 0 being subscripted  is that, since w is
constant    across alternatives,  8 must vary. While this may seem unnatural     to the
reader it is actually much more convenient,       as the following development     will
make clear.
   If the individual    chooses in accordance with 2, then

        u, = U( W, r; e,)+     +                                                            01)

Hence,     choice is in accordance         with event d if, say,
Ch. 2 7: Limited Dependent        Variables                                                   1573

But (12) implies
  Alternative 1 is chosen or choice is made in accordance with event 8 if

     E2-E11U(W,r;e1)-U(W,r;e2),                                                               03)

which makes it abundantly clear that we can speak unambiguously only about the
probabilities of choice. To “predict” choice we need an additional “rule” - such
as, for example,
   Alternative 1 is chosen when the probability attaching to event 8 is 0.5 or
higher.
   If the functions u( .) in (13) are linear, then the t th individual will choose
Alternative 1 if

     Et2   -   &,l 5 x,.P,                                                                    04)

where

     x,. = (WYq>,                     p=e,-e,.                                                0%
Hence, in the notation of the previous section

     P(y,=l)=P(q*-                      et1 I x,.P) = /+?,@)d6=
                                                                   -m
                                                                                  F,(xt.P),   (16)
where now f, is the density function of at2 - e,i.
  If



then we have a basis for estimating the parametric structure of our model. Before
we examine estimation issues, however, let us consider some possible distribution
for the errors, i.e. the random variables stl, E,~.
   Thus, suppose


     Et,. -    N(0, -q,                2=    [;::          p],           x>o,

and the E,.‘s are independent identically distributed (i.i.d.). We easily find that

     Et2 -     &,l   -   NO,   a2),              a2   =   lJ*2 -   2ai2 + (Ill.

Hence
1574                                                                                     P. J. Dhtymes

where




and F(p) is the c.d.f.’ of the unit normal. Notice that in this context it is not
possible to identify separately /I and u * by observing solely the choices individu-
als make; we can only identify /3/a.
   For reasons that we need not examine here, analysis based on the assumption
that errors in (10) and (11) are normally distributed    is called Probit Analysis.
   We shall now examine another specification        that is common in applied re-
search, which is based on the logistic distribution.  Thus, let q be an exponentially
distributed  random variable so that its density is

       dd=e-q               4 E w47                                                              (17)

and consider        the distribution   of

       u=ln(q)-‘=-lnq.                                                                           08)
The Jacobian        of this transformation      is

       J( r + q) = e-O.

Hence,     the density     of u is

        h(u)   = exp - uexp -e-”             uE(-co,co).                                         (19)

 If the &ti, i = 1,2 of (14) are mutually       independent   with density       as in (19), then the
joint density is

                                                                                                 (20)

   Put

        Ul+U2=&*,

        U2= El.                                                                                  (21)
The Jacobian        of this transformation     is 1; hence the joint   density    of the ui, i = 1,2,
is given by
Ck. 27: Limited Dependent    Variables                                      1575

Since

       v1=E2-Et,

the desired density is found as

                       exp-(v,+2v,)exp-(e-“Z+e-“1-“z)dv,.

To evaluate this put

       l+e-‘l=t,            s = tee”2

to obtain
                                               e-“1
       g( vr) = 5       /mSeCsdS =
                        0                  (1 +e-uq2   .

Hence, in this case the probability of choosing Alternative 1 is given by




       P(y, = 0) = 1-       F(x,J)       = 1 ;e;;.P.


This framework of binary or dichotomous choice easily generalizes to the case of
polytomous choice, without any appreciable complication - see, e.g. Dhrymes
(1978a).


1.4.    Maximum       likelihood estimation

Although alternative estimation procedures are available we shall examine only
the maximum likelihood (ML) estimator, which appears to be the most ap-
propriate, given the sorts of data typically available to economists.
   To recapitulate: we have the problem of estimating the parameters in a
dichotomous choice context, characterized by a density function f( -); we shall
deal with the case where f( .) is the unit normal and the logistic.
   As before we define

       Y, =L       if choice corresponds to event E
          = 0       if choice corresponds to event 2
1576                                                                                                     P. J. Dhrymes

The event 8 may correspond                           to entering          the labor force or going to college in the
examples considered earlier.

        P(Y, =I)         = F(x,.P),

where

       x,.= (V-J,
w is the s-element row vector describing the relevant attributes of the alternatives
and rr, is the m-element          row vector describing       the relevant socioeconomic
characteristics   of the t th individual.
   We recall that a likelihood function may be viewed in two ways: for purposes
of estimation    we take the sample as given (here the Yt’s and x,.‘s) and regard it as
a function of the unknown parameters (here the vector j3) with respect to which it
is to be maximized;      for purposes of deriving the limiting distribution     of estima-
tors it is appropriate   to think of it as a function of the dependent variable(s) - and
hence as one that encompasses         the probabilistic structure imposed on the model.
This dual view of the likelihood function (LF) will become evident below.
   The LF is easily determined       to be


       L*=        fi    P(xJqY’[l-                  F(X,.pp’.                                                    (22)
                 f=l

As usual,       we find it more convenient                         to operate    with its logarithm


       lnL*=L=               i     {Y,lnF(x,.P)+(I-Y,)ln[I-F(x,.P)I}.                                            (23)
                            r=1


For purposes of estimation,     this form is unduly complicated     by the presence of
the random variables,    Yt’s. Given the sample, we will know that some of the Y,‘s
assume   the value one and others assume the value zero. We can certainly
rearrange the observations    so that the first TI I T observations  correspond to

       y,=l,              t=1,2     ,...,     T,,

while the remaining                T, < T correspond                 to

       Yr,+r = 0,                t=1,2      ,...,    T2,

If we give effect to these statements                          the log likelihood      function   becomes


       L = 5           lnF(x,J)+              ‘i”          ln[l-     F(x,.P)],                                   (24)
               t=1                          t=T,+l
Ch. 27: Limited Dependent   Variables                                                1511

and as such it does not contain any random variables1 - even symbolically! Thus,
it is rather easy for a beginning scholar to become confused as to how, solving

      aL
      -= 0
      ap 9
will yield an estimator, say 8, with any probabilistic         properties.   At least the
analogous situation in the GLM
     y=xp+u,

using the standard notation yields

     s = (X’X)_‘X’y,

and y is recognized to be a random variable with a probabilistic structure
induced by our assumption on the structural error vector u.
   Thus, we shall consistently avoid the use of the form in (24) and use instead the
form in (23). As is well known, the ML estimator is found by solving

           f(xJ)
                 - - fkB’a) ]Xf=
      ~=,~l[y~F(x,.s)                   (1   yf) 1
                                                           f
                                                               0.                    (25)

   We note that, in general, (25) is a highly nonlinear function of the unknown
parameter j3 and, hence, can only be solved by iteration.
   Since by definition a ML estimator, 8, is one obeying

     L(b)    2 L(a),    foralladmissiblefi,                                         (26)

it is important to ensure that solving (25) does, indeed, yield a maximum in the
form of (26) and not merely a local stationary point - at least asymptotically.
   The assumptions under which the properties of the ML estimator may be
established are partly motivated by the reason stated above. These assumptions
are
Assumption   A.l.1.

The explanatory variables are uniformly bounded, i.e. x,, EH*, for all t, where H,
is a closed bounded subset of R s + m, i.e. the (s + m)-dimensional Euclidean space.

Assumption   A.1.2.

The (admissible) parameter space is, similarly, a closed bounded subset of R,+,,,,
say, P* such that P* 3 N(/3O), where N( /3’) is an open neighborhood of the true
parameter point PO.

 ‘For any sample, of course, the choice of TI is random.
1578                                                                                         P. J. Dhtymes

Remark     I

Assumption    (A.l.l.) is rather innocuous and merely states that the socioeconomic
variables of interest are bounded. Assumption         (A.1.2.) is similarly innocuous. The
technical import of these assumptions         is to ensure that, at least asymptotically,
the maximum     maximorum       of (24) is properly located by the calculus methods of
(25) and to also ensure that the equations in (25) are well defined by precluding a
singularity due to

       F(x,./3) = 0         or                l-F(x,.P)=O.

Moreover, these assumptions     also play a role in the argument demonstrating the
consistency   of the ML estimator.
   To the above we add another condition,        well known in the context of the
general linear model (GLM).

Assumption     A. 1.3.

5et

       x= (XJ            t =1,2 ,...,          T,

where the elements       of x,. are nonstochastic.                Then

                                        lim         X’X
       rank(X)=s+m,                                 -=M>O.
                                    T-cc              T



  With the aid of these assumptions    we can easily demonstrate                     (the proof will not
be given here) the validity of the following

Theorem I

Given assumption   A.l.l. through A.1.3. the log likelihood function,                       L of (24) is
concave in p, whether -F( .) is the unit normal or the logistic c.d.f..

Remark     2

The practical    implication  of Theorem 1 is that, at any sample size, if we can
satisfy ourselves that the LF of (24) does not attain its maximum on the boundary
of the parameter    space, then a solution to (25) say B, obeys


       L(b) 2 L(P)            for all admissible             p.

On the other     hand as the sample                 size tends to infinity   then with probability    one
the condition    above is satisfied.
1580                                                                   P. J. Dhtymes

Unfortunately, in the case of the discrete choice models under consideration we
do not have a statistic that fits all three characterizations above. We can, on the
other hand, define one that essentially performs the first two functions.
   In order to demonstrate these facts it will be convenient to represent the
maximized (log) LF more informatively. Assuming that the ML estimator corre-
sponds to an interior point of the admissible parameter space we can write




                  + third order terms.                                         (29)

The typical third order term involves




It is our contention     that

       plim +T = 0.                                                             (30)
       T+CO


Now,

           1   a3L
                    @*)=G,,,
       TpttT ap,ap,ap,

is a well defined, finite quantity, where




But then, (30) is obvious since it can be readily shown that

              1        a3L
       TpFz~3/=      apiapjap,
                            =Op

and moreover that
Ch. 27: Limited    Dependent     Variables                                      1581

are a.c. finite. Hence, for large samples, approximately




On the other hand, expanding aL               by Taylor series we find
                             JP

            aL
        --
             i
         J7;@ (PI - -[
                         o

                                    f-&(P”)]h(B-a”)_
Thus,




and, consequently,            for large samples




Hence


      2m3)-m”)I                    - -(B-P~$j-#“)(B               -PO>-x5+,.   (31)


Consider now the hypothesis

      Ho:         p=o,                                                         (32)

as against

      HI :        pie.

Under Ho


      L(PO)       = 5        { y,lnF(O)+(l-   y,)ln[l-   F(O)]}   = rln(+),
                    t=1

and

      2[L(B)-Tlnil- x?+~,
1582                                                                       P. J. Dhrymes

is a test statistic for testing the null hypothesis in (32). On the other hand, this is
not a useful basis for defining an R2 statistic, for it implicitly juxtaposes the
economically motivated model that defines the probability of choice as a function
of



and the model based on the principle of insuficient reason which states that the
probability to be assigned to choice corresponding to the event 6’ and that
corresponding to its complement C?are both $. It would be far more meaningful
to consider the null hypothesis to be




i.e. to follow for a nonzero constant term, much as we do in the case of the GLM.
The null hypothesis as above would correspond to assigning a probability to
choice corresponding to event 8 by

       J=F(flo)        or   B, = F-‘(J),

where




Thus, for some null hypothesis Ho, let

       QP)   = SUPW).
                  HO

By an argument analogous to that leading to (31) we conclude that


       wm- UB)] - -(S-p”)’ &(“.)(a-PO>
                  +(a-p”)‘ L(B”)(P
                             ~;;g -PO).                                            (33)

In fact, (33) represents a transform of the likelihood ratio (LR) and as such it is a
LR test statistic. We shall now show that in the case where


       Ho:   P&=0,
Ch. 2 7: Limited Dependent   Variables                                             1585

In the special case where



i.e. it is the constant term in the expression

       x,.P,

so that no bona fide explanatory variables “explain” the probability of choice, we
can define R2 by

       R”+$                                                                       (42)

The quantity in (42) has the property

 1. R2 E       [O,l)
 ii. the larger the contribution of the bona fide variables to the maximum of the
     LF the closer is R2 to 1
. ..
ul. R2 stands in a one-to-one relation to the &i-square statistic for testing the
     hypothesis that the coefficients of the bona fide variables are zero. In fact,
     under HO

               -X(&R2        - x:+,,-~.


It is desirable, in empirical practice, that a statistic like R2 be reported and that a
constant term be routinely included in the specification of the linear functional



Finally, we should also stress that R2 as in (42) does not have the interpretation
as the square of the correlation coefficient between “predicted” and “actual”
observations.


2.     Truncated dependent variables



2.1.    Generalities

Suppose we have a sample conveying information on consumer expenditures; in
particular, suppose we are interested in studying household expenditures on
consumer durables. In such a sample survey it would be routine that many
1586                                                                                      P. J. Dhtymes

households report zero expenditures on consumer durables. This was, in fact, the
situation faced by Tobin (1958) and he chose to model household expenditure on
consumer durables as

       _Y*=     Xt.P + l.4,’              if x,.p + 24,> 0
               = 0                                                                                 (43)
                                          otherwise        .

The same model was later studied by Amemiya (1973). We shall examine below
the inference and distributional problem posed by the manner in which the
model’s dependent variable is truncated.


2.2.       Why simple OLS procedures fail

Let us append to the model in (43) the standard assumptions that

(A.2.1.) The {u,: t=l,2                   ,... } is a sequence of i.i.d. random variables with

                         u, - NO, e2>,             a2 E (0,cCJ).

(A.2.2.) The elements of x,. are bounded for all t, i.e.

                         lx,il < ki,         for all t,        i=1,2 7.0.) n,

                are linearly independent and




         exists as a nonsingular nonstochastic matrix.
(A.2.3.) If the elements of x,. are stochastic, then x,., uI, are mutually indepen-
         dent for all t, t’, i.e. the error and data generating processes are mutually
         independent.
(A.2.4.) The parameter space, say H c Rn+2, is compact and it contains an open
         neighborhood of the true parameter point (PO’, $)I.

The first question that occurs is why not use the entire sample to estimate /3?
Thus, defining

       x=       (x,. 1,              t =I,2 ,..., T,

       u= (u442,...,4’,                          Y (l)= (Yl, Yz,...,   YJ,      y@‘= (O,...,O)‘,
       y   =    ( yw’,      y(V)‘,
Ch. 27: Limited Dependent Variables                                              1587

we may write

     y=xfi+u,
and estimate /3 by

     fi = ( XlX) -lx/y.                                                         (44
A little reflection will show, however, that this leads to serious and palpable
specification error since in (43) we do not assert that the zero observations are
generated by the same process that generates the positive observations. Indeed, a
little further reflection would convince us that it would be utterly inappropriate to
insist that the same process that generates the zero observations should also
generate the nonzero observations, since for the zero observations we should have
that

     u, = - x*.p,           t=T,+,,...,T,+T,,

and this would be inconsistent with assumption (A.l.l.).
  We next ask, why not confine our sample solely to the nonzero observations,

     Y(l) =   x,p+   yl),



and thus estimate p by

     #d= ( xix,) -lx;y(l).

This may appear quite reasonable at first, even though it is also apparent that we
are ignoring some (perhaps considerable) information. Deeper probing, however,
will disclose a much more serious problem. After all, ignoring some sample
elements would affect only the degrees of freedom and the t- and F-statistics
alone. If we already have a large sample, throwing out even a substantial part of it
will not affect matters much. But now it is in order to ask: What is the process by
which some dependent variables are assigned the value zero? A look at (43)
convinces us that it is a random process governed by the behavior of the error
process and the characteristics relevant to the economic agent, x,.. Conversely,
the manner in which the sample on the basis of which we shall estimate fi is
selected is governed by some aspects of the error process. In particular we note
that for us to observe a positive y,, according to

     Y, = x,.P + a,,                                                             (45)
1588                                                                         P. J. Dhrymes

the error process should satisfy

       u, > - x,.p.                                                                  (46)

Thus, for the positive observations we should be dealing with the truncated
distribution function of the error process. But, what is the mean of the truncated
distribution? We have, if f( .) is the density and F( .) the c.d.f. of U,
                                       1
       E( U,]U, > - x,.P) =                      O” 5f(Odk
                               l-F(-x,.P)     / -x,.B

If f( .) is the iV(0, u*) density the integral can be evaluated as

       f co>?
and, in addition, we also find

       I - F( - x,./3> = F(x,.P).

Moreover, if we denote by +(. ), G(e) the iV(0, 1) density and c.d.f., respectively,
and by

       y=- X*.P
        t   u ’
                                                                                     (47)

then

       E( u,Ju, > + x,./3) = u- &t>
                                   @(v,) =   a+t*
Since the mean of the error process in (45) is given by (48) we see that we are
committing a misspecification error by leaving out the “variable” +( v,)/@(v,)
[see Dhrymes (1978a)].
   Defining


                                                                                     (49)

we see that {u,: r=l,2,...}          is a sequence of independent    but non-identically
distributed     random variables, since

       Var(u,)=a2(1-v,$,--1C/:).                                                     (50)

Thus, there is no simple procedure by which we can obtain efficient and/or
consistent estimators by confining ourselves to the positive subsample; conse-
quently, we are forced to revert to the entire sample and employ ML methods.
Ch. 27: Limited Dependent             Variables                                  1589

2.3.    Estimation              of parameters     with ML methods

We are operating with the model in (43), subject to (A.2.1.) through (A.2.4.) and
the convention that the first Ti observations correspond to positive dependent
variables, while the remaining T2, (Tl + T2 = T), correspond to zero observations.
   Define

       c, =1               if yr > 0,
            = 0            otherwise,                                            (51)


and note that the (log) LF can be written as


       L=      5         ((1-c,)lnB(v,)-c,[+ln(2n)+flno2+-$(~~-x~.~)”]).
              t=l

                                                                                 (52)

Differentiating            with respect to y = (fi’, u2)‘, we have

       8L
                    -;      i      {(l-~~)~-,(y~-~~.pi)x,.=o,                    (53)
       ap=
                            r=1

        aL
       -=_-                 1
                               i {c~[l-~(~~-x~.8,‘1-(1-c~)~)               =O,
        au2               2e2 t=i

and these equations have to be solved in order to obtain the ML estimator. It is,
first, interesting to examine how the conditions in (53) differ from the equations
to be satisfied by simple OLS estimators applied to the positive component of the
sample. By simple rearrangement we obtain, using the convention alluded to
above,


       x;x,p = x;y(l) - u                   i     q(- v,)x;.,                    (54)
                                         r=T,+l


                                                                                 (55)


where

            +(v,>                                         445)
       SW = qv,>                  Y       c-5)      =   @(_vt).                  (56)


Since these expressions occur very frequently, we shall often employ the abbrevia-
15W                                                                     P. J. Dhrymes

ted notation

       #, = ~(V,>~               #T=IC,(-VA.
Thus, if in ‘some sense




is negligible, the ML estimator, say j?, could yield results that are quite similar,
from an applications point of view, to those obtained through the simple OLS
estimator, say fi, as applied to the positive component of the sample. From (54) it
is evident that if z$.. of (57) is small then




is also small. Hence, under these circumstances



which explains the experience occasionally encountered in empirical applications.
   The eqs. (53) or (54) and (55) are highly nonlinear and can only be solved by
iterative methods. In order to ensure that the root of

       aL
       -&=o,               Y=     (P’,a=)‘>
so located is the ML estimator it is necessary to show either that the equation
above has only one root-which is difficult-or that we begin the iteration with an
initial consistent estimator.


2.4.    An initial consistent estimator

Bearing in mind the development in the preceding section we can rewrite the
model describing the positive component of the sample as

       Yr=Xr_P+a~t+Ut=u(v,+~,)+u,,                                               (58)

such that

       {u,: t=1,2   )...    },
Ch. 27: Limited Dependent   Variables                                                        1591

is a sequence of mutually independent random variables with

     ECU,) = 0,            Va&)     = e2(I-    v,JI, - +:>,                                  (59)

and such that they are independent of the explanatory variables x,.
   The model in (58) cannot be estimated by simple means owing to the fact that
4, is not directly observable; thus, we are forced into nonstandard procedures.
   We shall present below a modification and simplification of a consistent
estimator due to Amemiya (1973). First we note that, confining our attention to
the positive component of the sample

     y:=u2(v,+~t)2+U:+2ut(vt+~r)a.                                                           (60)
Hence

     E( y:lxt., u, > - x,.p) = u2(v:+v,#,)+rJ2
                                    =x,.PE(ytlx,.,Ur> -x,.P)+u2.                             (61)
Defining

     Et =       y,2- E(Ytk., u, ’ - x,.b),                                                   (62)
we see that {Ed: t=l,2,...} is a sequence of independent                random variables with
mean zero and, furthermore, we can write

     w, = yt2=       x,.py,+ u*+Et,           t =1,2 ,..., T,.                               (63)

The problem, of course, is that JJ~ is correlated with E, and hence simple
regression will not produce a consistent estimator for p and u2.
   However, we can employ an instrumental variables (IV.) estimator3

      7 =       (x:x*)-‘X&w,            w=    (Wgv2,...,W~J’,                                (64)

  31t is here that the procedure differs from that suggested by Amemiya (1973). He defines


      j, =x,.    ( xpJ1x;y’“,

while we define

      ~,=+.a,

for nontrivial vector a.
1592                                                                                P. J. Dhrymes


where

       X, = (D,X,,e),                                                                       (65)

and

       jt = x,.a,           D~=diag(g,,~~,...,~,,),          Dy = (~1, Y,,...,   YT,),      (66)

for an arbitrary nontrivial vector a.
   It is clear that by substitution we find

                                                                                            (67)

We easily establish that




Clearly
       2, x =
         * *
                      XP&JX,
                            Y’X,
                                         XlV
                                         e’e   1.

Now


        gx;“,        =+       cr, x:.ut,
          1                 1 t=1


and

        {x;..,:     t=1,2    )... },

is a sequence of independent random variables with mean

       E(x;.u,)      = ax;.+,,                                                               (68)
and covariance matrix

        cov(x;.u,) = a*(1 - v,$br- ~,)x:.x,.          = O&.Xt.,                              (69)
Ch. 27: Limited Dependent Variables                                          1593

where

     w, = a2(1-     v,J/, - +:>,

is uniformly bounded by assumption (A.2.2) and (A.2.4). Hence, by (A.2.2)


         lim f;       w&.x,.,
        r, + 00 1 t=1

converges to a matrix with finite elements. Further and similar calculations will
show that




converges a.c. to a nonsingular matrix. Thus, we are reduced to examining the
limiting behavior of


                                                                             (70)


   But this is a sequence of independent nonidentically distributed random
variables with mean zero and uniformly bounded (in x,. and j3) moments to any
finite order. Now for any arbitrary (n + 2 x 1) vector (Y*consider


                                                                            (71)


where



and note that




is well defined where


     S$’ = z afVar( et).                                                    (72)
              r=1
1594                                                                                                             P. J. Dhrynes

Define,      further

                   se2
       g,=+,
                         1

and note that

       S; = T;/2ST,.

But then it is evident that Liapounov’s                           condition     is satisfied, i.e. with K a uniform
bound on Ela,.~,[~+’



                     t=1                                               Tl                           K
            lim                s*2+s
                                                  SK lim                         =    lim                        0.
        TI - cc                                         T+m     T1+s/2S;,+a          T,-tm     T;/2S2i8    =
                                 TI                              1



  By a theorem                     of Varadarajan,         see Dhrymes        (1970), we conclude         that


        &f:
        -                E-        N(0, H),

where




                                                                                                            1
                                        ;       (x,.a)2x:.xt.Var(Et)            5    (x,.a)x:.Var(&,)
                                                                               t=1
       H=          lim         1        ‘=‘r,
                                                                                                                         (73)
                  T-cc         Tl
                                                                                      5      Var(Et)             ’
                                                                                      t=1


Consequently                  we have shown that

        \IT,(?      - Y) - ~(0,                 Q-QQ-I),
where


        Q=lim
                         ( zcx*>
             a.c.                  Tl       .
                                                                                                                         (74)

Moreover          since
Ch. 27: Limited Dependent       Variables                                       1595

where 3 is an a.c. finite random vector it follows that




which shows that 7 converges a.c. to ya.
  We may summarize the development above in

Lemma         1
Consider the model in (43) subject to assumptions (A.2.1.) through (A.2.4.);
further consider the I.V. estimator of the parameter vector y in

       w, = (Xt.Y,J)Y          + &I,        w,= Y,‘,
given by

       4 = (X&X*)_lk;w,

where k,,         X, and w are as defined in (65) and (66). Then

       i.     7 converges to yO almost certainly,
       ii.     JT,(v    - ~a) - N(0, Q-lHQ,-l),

where Q and H are as defined in (74) and (73) respectively.


2.5.        Limiting properties        and distribution of the ML estimator

Returning now to eqs. (53) or (54) and (55) we observe that since the initial
estimator, say 9, is strongly consistent, at each step of the iterative procedure we
get a (strongly) consistent estimator. Hence, at convergence, the estimator so
determined, say p, is guaranteed to be (strongly) consistent.
   The perceptive reader may ask: Why did we not use the apparatus of Section
1.d. instead of going through the intermediate step of obtaining the initial
consistent estimator? The answer is, essentially, that Theorem 1 (of Section 1.d.)
does not hold in the current context. To see that, recall the (log) LF of our
problem and write it as


       L,(y)=+           f     ((1-c,)ln@(-v,)-c,
                         t=l



                                                                                (75)
Ch. 27: Limited Dependent        Variables                                                         1597

Proof

Consider the log LF of (75) and in particular its t th term


        Er= (l-c,)ln@(-Y,)-c,                  +l(2n)+       +no2+    -&,     - XJ?)” )
                                                                                       I
                                                                                t =1,2,...     .   (77)
For any x-realization

        {&: t =1,2,...},

is a sequence of independent random variables with uniformly bounded moments
in virtue of assumption (A.2.1) through (A.2.3). Thus, there exists a constant, say
k, such that

        V=(Sr) < k>              for all t.

Consequently,            by Kolmogorov’s criterion, for all admissible y,

        {   MY)-@T(Y)I}                  =<o.                                                  Q.E.D.


Remark          3
The device of beginning the iterative process for solving (76) with a consistent
estimator ensures that for sufficiently large T we will be locating the estimator,
say j$, satisfying

        G(%-)        = suP&-(Y).
                        Y
Lemma 2, can be shown to imply that

        L,(?,)       a-(u,Yo).                qu,YO)= suPqY,Y").
                                                       Y
Moreover, we can also show that

        7 = yo.

On the other hand, it is not possible to show routinely that fraz’yo.                      Essentially,
the problem is the term corresponding                    to a2 which contains expressions like

        c bt -
            *       Q)”
                    a2      .’
1598                                                                   P. J. Dhrymes

which cannot be (absolutely) bounded. This does not prevent us from showing
convergence a.c. of pr. to y”. By the iterative process we have shown that qT
converges to y” at least in probability. Convergence a.c. is shown easily once we
obtain the limiting distribution of PT -a task to which we now turn.
  Thus, as before, consider the expansion


                                                                                (78)

where y” is the true parameter point and

       1% - YOI 5 IY* - YOI.

We already have an explicit expression in eq. (53) for the derivative dL,/dy.     So
let us obtain the Hessian of the LF. We find




We may now define

                      m>                     x,.PO
       Elr=(l-c*)@(_vp) -cf
                                 i
                                     Yt -
                                            uo


                                                 I
                                                 ’                              (80)

       t2t=ct[l-(
             y~-;J”~]-(l-c,)~!~;)
and

       &l,=(l-c,)~r”(lClfo-vP)+CI,
                            + VP- vM”>9
       L = t21r= Cl- c,)J/tO(l                                                  (81)
       (2214(y+yO) +(1- Ct)V$#=O(l + v#T” - vP2),
Ch. 27: Limited Dependent          Variables                                1599

where, evidently,

                  d+P)                         x .PO       +(vP)
      q;O=      @(_vp)         9
                                         VP=*>         #Y=+p> *

With the help of the notation in (80) and (81) we find




                                               i I[]
        ~(,0)_!_~                       i
                                        t=1
                                                a.& tit
                                                   0

                                                       521 ’
                                                                           (8’4

and




where 52, r is a matrix all of whose elements are zero except the last diagonal
element, which is


      + ,$r $-&..

Thus, for every T we have

      E(ti*,)       =o.                                                    (84)

Consequently,            we are now ready to prove
Theorem 3
Consider the model of eq. (43) subject to assumption (A.2.1.) through (A.2.4.);
moreover, consider the ML estimator, SIT, obtained by iteration from an initial
consistent estimator as a solution of (76). Then

      JT(Pr-YO)             - N(O,&-‘),

where
Ch. 27: Limited Dependent    Variables                                        1601

From (79) we also verify that




converges in probability to the null matrix, element by element. But the elements
of




are seen to be sums of independent random variables with finite means and
bounded variances; hence, they obey a Kolmogorov criterion and thus




We easily verify that


     E(&lJ     = %f?        E(~12,)=E(52,,)=~(~~)[l-~~~T"+~P2]

               =W   121 = W21r3


     EG22t)    = W22t.



Hence




and, moreover,

     JT( f - yO) - N(O,40                                               (Q.E.D.)
Ch. 27: Limited Dependent   Variables                                         1603

However, it would be much preferable to estimate C as




with Gi ;, given as in (86) evaluated at PT.


2.6.    Goodness of $2

In the context of the truncated dependent variable model the question arises as to
what we would want to mean by a “goodness of fit” statistic.
   As analyzed in the Section on discrete choice models the usual R*, in the
context of the GLM, serves a multiplicity of purposes; when we complicate the
process in which we operate it is not always possible to define a single statistic
that would be meaningful in all contexts.
   Since the model is

       YI= X*.P + u,        if x,.p + U, > 0,
         = 0                if u,l - x~,@,

the fitted model may “describe well” the first statement but poorly the second or
vice versa. A useful statistic for the former would be the square of the simple
correlation coefficient between predicted and actual Y,. Thus, e.g. suppose we
follow our earlier convention about the numbering of observations; then for the
positive component of the sample we put

       3, = x,.B + &,           t =1,2 ,..., Tl.                              638)

An intuitively appealing statistic is




                                                                              (89)



where


       j=+      $Yt,         p+           &.                                  (90)
             1 t=1                      1 t=l
1604                                                                                   P. J. Dhtymes

As to how well it discriminates    between    the zero and positive (dependent
variable)   observations we may compute    @( - P() for all t; in the perfect dis-
crimination    case


        @(- fi,J’ @(- 4,),             t,=1,2   ,..., T,,      t2=Tl+1,...,T.                  (91)


The relative frequency    of the reversal of ranks would                be another     interesting
statistic, as would the average probability difference, i.e.




We have a “right”       to expect as a minimum          that

        d> 0.                                                                                  (93)




3.      Sample selectivity



3. I.    Generalities

This is another important       class of problems that relate specifically to the issue of
how observations      on a given economic phenomenon        are generated. More particu-
larly, we hypothesize     that whether a certain variable, say yz, is observed or not
depends on another variable, say y12    *. Thus, the observability of y,T depends on the
probability   structure of the stochastic process that generates y,;, as well as on that
of the stochastic process that governs the behavior of yzT. The variable y,; may be
inherently   unobservable    although we assert that we know the variables that enter
its “systematic    part.”
    To be precise, consider the model




                                                                            t =1,2 >..., T,    (94)




where x2 ., x;C2. are rl, r,-element      row vectors of observable      “exogenous”     variables
Ch. 27: Limited Dependent          Variables                                   1605

which may have elements in common. The vectors

     u::=(u;,ur,),                    t=1,2,...,

form a sequence of i.i.d. random variables with distribution

     uy- N(0, ix*),                    2*>0.

The variable yz is inherently unobservable, while y,T is observable if and only if




An example of such a model is due to Heckman (1979) where y,T is an observed
wage for the tth worker and y,; is his reservation wage. Evidently, y,; is the
“market valuation” of his skills and other pertinent attributes, represented by the
vector x2 ., while y$ represents, through the vector x; those personal and other
relevant attributes that lead him to seek employment at a certain wage or higher.
   Alternatively, in the market for housing y,T would represent the “market
valuation” of a given structure’s worth while yl; would represent the current
owner’s evaluation.
   Evidently a worker accepts a wage for employment or a structure changes
hands if and only if




If the covariance matrix, Z*, is diagonal, then there is no correlation between yz
and y;” and hence in view of the assumption regarding the error process

      {uf.‘: t=1,2    )...    },




we could treat the sample

      {(y&x;.):       t=1,2           ,...,    T},


as one of i.i.d. observations; consequently, we can estimate consistently the
parameter vector 8.: by OLS given the sample, irrespectively of the second
relation in (94).
   On the other hand, if the covariance matrix, Z*, is not diagonal, then the
situation is far more complicated, since now there does exist a stochastic link
between ytT and y$. The question then becomes: If we apply OLS to the first
equation in (94) do we suffer more than just the usual loss in efficiency?
1606                                                                                                                                         P. J. Dhtynes

3.2.         Inconsistency of least squares procedures

In the current context, it would be convenient to state the problem                                                                         in canonical
form before we attempt further analysis. Thus, define
                       *                                         *                               *
           Y,l = Yll 3                   Yt2 = Y,l -         Yt2 9            x,1.=x,1.,                     x,2.=       (x;.,x;.),

                                                             *                                                                                          (95)
           P.i=P.:,                      p.2=*p.                                   Utl=UX,                                 *_         *
                                                                                                             ut2     =   U,l      u,23

                                                     i
                                                          -a’:        i
                                                                          ’

with the understanding                              that if x;“l. and x2. have elements                                  in common,            say,

           x:1.=       (r,r,     r:,),                   x,*2. = (Z,i., &>,

then

                                                                               h-P”;2\


           x,2.=       ( zt+;P1.,z;.),                               P.2=                P((;l           9                                              (96)
                                                                               \     - P.*22         1



where /?.:i, /3.t2 are the coefficients of z,i in x;“l_ and xz                                                           respectively,         8;     is the
coefficient of zx. and p.;2 is the coefficient of zfrz.
   Hence, the model in (94) can be stated in the canonical                                                               form

                 Yt, = xt1.P.1           + u,17
                                                                                                                                                        (97)
           i Y,, = x,2         4.2        +   ut2    )


such that x,~ contains at least as many elements as x,~ .,

           (u:.=(url,u,,)‘:                         t=1,2        )... ),

is a sequence                of i.i.d. random                    variables         with distribution

           u;. - NO,            z>,                 z>o,

and        subject         to the condition                       that        ytl is observable                    (observed)             if and    only     if
Y,,    2    0.

   If we applied OLS methods to the first equation in (97) do we obtain, at least,
consistent  estimators  for its parameters?   The answer hinges on whether that
question obeys the standard assumptions     of the GLM.
   Clearly, and solely in terms of the system in (97)

           { u,i:      t =1,2,...},                                                                                                                     (98)

is a sequence                  of i.i.d. random                   variables         and if in (94) we are prepared                                 to assert
Ch. 27: Limited Dependent       Variables                                        1607

that the standard conditions of the typical GLM hold, nothing in the subsequent
discussion suggests a correlation between x,r. and u,~; hence, if any problem
should arise it ought to be related to the probability structure of the sequence in
(98) insofar as it is associated with observable ytI -a problem to which we now
turn. We note that the conditions hypothesized by the model imply that (poten-
tial) realizations of the process in (98) are conditioned on4

      u,2 2       -x,24.2.                                                      (99)

Or, perhaps more precisely, we should state that (implicit) realizations of the
process in (98) associated with observable realizations

      {Y*G t =1,2,...},

are conditional on (99). Therefore, in dealing with the error terms of (potential)
samples the marginal distribution properties of (98) are not relevant; what are
relevant are its conditional properties-as conditioned by (99).
   We have

Lemma         3

The distribution of realizations of the process in (98) as conditioned by (99) has
the following properties:
    i. The elements { u,r, ut2 } are mutually independent for t f t’.
   ii. The density of u,r, given that the corresponding y,, is observable (ob-
served) is


                                                                                000)

where

                                             1
              =- xt2.P.2          7rI =-               y,,+---u
                                                                  P12
        YI2          l/2   '               J/2                     l/2
                                                                         r1 )
                   022                             i              011      i
                                                                                001)
          2 =-     42
      P12                      a=l-         pt2,
                  ~11~22


and @( .) is the c.d.f. of a N(O,l).

  4Note     that in terms of the original     variables     (99) reads




We shall not use this fact in subsequent           discussion,     however.
1608                                                                                       P. J. Dhrynes

Proof

i. is quite evidently valid since by the standard assumptions of the GLM we assert
that (x:.,x,*.)    and uF=(u;,    u&) are mutually independent and that

        { 24;‘: 1=1,2,...},

is a sequence of i.i.d. random variables.
   As for part ii. we begin by noting that since the conditional density of url given
u,~ is given by




and since the restriction in (99) restricts us to the space

        u,2 2 -x,2./3.2,

the required density can be found as




Completing the square (in 5) and making the change in variable


        s= (5- f31)/(42cxY2,
we find

                                                                        1    7
        f(u,,lu,z~-x,2,~.2)=~1
                                                @( Yt2) \/2?ra,, exp- z”“.

To verify that this is, indeed, a density function we note that it is everywhere
nonnegative and

          O” f
        / -CC    (   51142   2   -   X,,.P.2M



                       1       O3~ 1                    4
                =-
                     @(Yr2) / _-oo\/j----&             _J&P-        $3~2         *exp- g-p,.
                                                  ii                         I
Ch. 27: Limited Dependent Variables                                                                                                         1609

Making the transformation


                                      f2   =   .1’25*          -       P,231,


the integral is reduced to




                   -exp-          f<zd{2 =l.                                                                                             Q.E.D.


Lemma        4

The k th moment of realizations of the process in (98) corresponding to observ-
able realizations { ytI: t =1,2, . . . } is given, for k even (k = 2,4,6,. . .), by

                                                                                                     (k    -2s       k     _   1

     I,.,    =   udk          -   Wc-2,,         -     011k’2~(k-2)‘2p:2y~21C,(y12)                        x0    [,,+,)(           *)’




                              [2( y-r)]!
                                                                                                                                          0021
                 *2+r(&p_,)!’



while for k odd (k = 3,5,7,. . . > it is given by




                       &--I
                                                                   ,                                                                      003)




where

                       +bt2>
     4(%*)
                  --
                  -    qvt2)          3         I,,,     =I,                    I,,,   =   d12P,24(V,2).                                  004)
1610                                                                                             P. J. Dhtymes

Remark 5
It is evident, from the preceding discussion, that the moments of the error process
corresponding to observable y,, are uniformly bounded in P.r, P. 2, urr, ur2, uz2,
xI1, and x12, -provided the parameter space is compact and the elements of
x,, ., x,~ are bounded.
Remark 6
It is also evident from the preceding that for (potential) observations from the
model

       Yt,   =x,14.1 + U,l,
we have that

                                                                                                        (105)

   We are now in a position to answer the question, raised earlier, whether OLS
methods applied to the first equation in (97) will yield at least consistent
estimators. In this connection we observe that the error terms of observations on
the first equation of (97) obey

       E(U,llUt2 2 - x,2. P.2)           =   11, =    4’Pl24+,2)~


       Vadu,llq2      2   -   x,2.P.2>       =   12t -   1:   =     ql-   ~w212~~2ICI(~,2)


                                                 -   %P:2+2h2)


                                             =   011 -   w:2~h,h2                  +   +(52)1.

   As is well known, the second equation shows the errors to be heteroskedastic -
whence we conclude that OLS estimators cannot be eficient. The first equation
above shows the errors to have a nonzero mean. As shown in Dhrymes (1978a) a
nonconstant (nonzero) mean implies misspecification due to left out variables and
hence inconsistency.
   Thus, OLS estimators are inconsistent; hence, we must look to other methods
for obtaining suitable estimators for p_r, uir, etc. On the other hand, if, in (105),
p12 = 0, then OLS estimators would be consistent but inefficient.


3.3.     The LF and ML estimation

We shall assume that in our sample we have entities for which y,r is observed and
entities for which it is not observed; if ytl is not observable, then we know that
Ch. 27: Limited Dependent    Variables                                                  1611

yt2 -c 0, hence      that

     u,z-c- xt2.P.2.

Consequently,        the probability attached to that event is



Evidently, the probability of observing ytr is @(vt2) and given that ytI is observed
the probability it will assume a value in some internal A is


                                                -+‘d.&
                                         exp-   %r

Hence, the unconditional          probability that ytI will assume a value in the interval A
is




Define

     c, =l           if y,, is observed,
         = 0         otherwise.

and note that the LF is given by


     L*= fi [~(Y12)f(Y~1-x,,.P.llu,22
                                   -Xt2.P.2)IC([~(-Y12)11-c,. (106)
               r=l


Thus, e.g. if for a given sample we have no observations on y,, the LF becomes




while, if all sample observations involve observable y,,‘s the LF becomes




Finally, if the sample contains entities for which y,, is observed as well as entities
1612                                                                                 P. J. Dhymes

for which it is not observed, then we have the situation in (106). We shall examine
the estimation problems posed by (106) in its general form.
Remark          7

It is evident that we can parametrize the problem in terms of /?.i, P. 2, utr, u22,a,,;
it is further evident that j3.2 and a,, appear only in the form (/I.2/u:2/2) - hence,
that a,, cannot be, separately, identified. We shall, thus, adopt the convention

          022 =
                    1.                                                                     (107)
A consequence             of (107) is that (105) reduces to
          KG?,.,          u,2   2   -   x,,.P.,>   =   x,1.P.1+       fJl244d.             008)


    The logarithm of the LF is given by

          L=        g    (l-c,)ln@(--v,,)
                  t=1

                         + c, - iln(27r)           - +lnu,,         2i
                                                                  - --$,1-x,1.&)“]
                             ]

                         +ln@[--$+2+~12(                    yrl-$$““))]}.                  (109)

Remark          8

We shall proceed to maximize (109) treating p.i, /3.2 as free parameters. As
pointed out in the discussion following eq. (95) the two vectors will, generally,
have elements in common. While we shall ignore this aspect here, for simplicity of
exposition, we can easily take account of it by considering as the vector of
unknown parameters y whose elements are the distinct elements of /3.1,j3.2 and
IJll,   PI20
    The        first order conditions yield


                                                                                           (110)

                                                                                           (111)
Ch. 27: Limited Dependent   Variables                                          1613

Putting




we see that the ML estimator, say ji, is defined by the condition


       g(p) =0.
  Evidently, this is a highly nonlinear set of relationships which can be solved
only by iteration, from an initial consistent estimator, say 7.


3.4.    An initial consistent estimator

To obtain an initial consistent estimator we look at the sample solely from the
point of view of whether information is available on y,i, i.e. whether ytl is
observed with respect to the economic entity in question. It is clear that this, at
best, will identify only /3.*, since absent any information on y,, we cannot
possibly hope to estimate p.i. Having estimated B. 2 by this procedure we proceed
to construct the variable


                                          t=1,2   ,...,   T.                 016)

Then, turning our attention to that part of the sample which contains observa-
tions on yti, we simply regress ytl on (x,i., 4,). In this fashion we obtain
estimators of


              %2)’
       6 = (PC12                                                             (117)

as well as of uii.
   Examining the sample from the point of view first set forth at the beginning of
this section we have the log likelihood function


       L,=   f     [c,ln~(v,,)+(l-c,)ln~(-v,,)],                             018)
             t=1

which is to be maximized with respect to the unknown vector /3.2. In Section 1.d.
we noted that L, is strictly concave with respect to p. 2; moreover, the matrix of
Ch. 27: Limited Dependent       Variables                                                           1615

It is our contention that the estimator in (125) is consistent for p.l and a,,; moreover
that it naturally implies a consistent estimator for oI1, thus yielding the initial
consistent estimator, say




which we require for obtaining the LA4 estimator.
  Formally, we will establish that


      fi(&&O)=
                         ( 1~-Yb.1-u12($- - NO, FL
                            q
                                                                     $41                          (130)

for suitable matrix F, thus showing that 8 converges to 6’ with probability one
(almost surely).
   In order that we may accomplish this task it is imperative that we must specify
more precisely the conditions under which we are to consider the model5 in (94),
as expressed in (97). We have:
(A.3.1.) The basic error process

                 {.:.: t=1,2 ,... },             u,.=(u,1,U,2),

           is one of i.i.d. random variables with



         and is independent of the process generating the exogenous variables
         x,1 ., x,2 .*
(A.3.2.) The admissible parameter space, say H c Rn+3, is closed and bounded
         and contains an open neighborhood of the true parameter point




(A.3.3.) The exogenous variables are nonstochastic and are bounded, i.e.

                 Ixt2il< ki,            i=0,1,2,...n

           for all t.6

    5A~ pointed out earlier,it may be more natural to state conditions in terms of the basic variables
x,:., X; ., U; and uZ; doing so, however, will disrupt the continuity of our discussion; for this reason
we state conditions  in terms of x,~., q., u,~. and u,q.
1616                                                                                        P. J. Dhtymes


(A.3.4.) The matrix

                 X, = (x0.)            t =1,2 ,..., T,

           is of rank n + 1 and moreover

                 lip   +x;x*
                          =           P,       P>O.



Remark     9

It is a consequence of the assumptions above that, for any x12, and admissible
P.2r there exists k such that

       - r I xt2 ,P.2 ~2r,          O-cr-ck,           k<oo,


so that, for example,

       44x,,&) WCk) ‘0,
       @(x,~.&) <@(k) ~1,                                                                           (131)
       @(xt2.P.~) >@(-+O.

Consequently,

                  +,dM                                 +,,.P.d
       v+J= @(Xt2.&) ’ J/*w=@(- x,,.p.,>’

are both bounded continuous functions of their argument.
   To show the validity of (130) we proceed by a sequence of Lemmata.

Lemma     5

The probability        limit of the matrix to be inverted in is given by

       plim +X1 *‘XI*= hm +Xta’XF=Q,,,                          Q,>O,
       T-CC                    T-+W


   6 We remind the reader that in the canonical representation   of (97), the vector xtl. is a subvector of
x,* .; hence the boundedness  assumptions   on q2 imply similar boundedness        conditions on xzl..
   Incidentally, note that B.t is not necessarily a subvector of /X0,, since the latter would contain
Pfl - /3.7! and in addition S.$, - a.*,“, , while the former will contain /?:y, 85,.
Ch. 27: Limited Dependent         Variables                                                  1617

where




Proof

We examine



     s,+x~px.pp]=’                                          0         XlG - J/O)
                                                                                           (132)
                                                  T[ (Jh”>‘x,       (it+~“>(G~“)   1   ’
and the problem is reduced to considering


                                                                                           (133)




                                    evaluated at /I.2 = p.‘, ,


     s* _ a2iG,h2)
      t-                                evaluated at /I.2 = /3.$,
             ad

     IP.$   -   PP,I   <   IP.2   -m.



It is evident that, when the expansion in (133) is incorporated in (132) quadratic
terms in (a. 2 - /X0,) will vanish with T.
   Hence we need be concerned only with the terms of the form




or of the form
1618                                                                          P. J. Dhynes

In either case we note that by assumption (A.3.4.) and Remark 9

                     T
        lim + C oyx:,.x,,.,
       T-+CC       r=l



has bounded elements; similarly, for




Consequently,        in view of (122) and (132) we conclude

        plim S, = 0,
       T+CC


which implies

        plim +X1*/X1* = Tlim, +Xi@XF = Q,.                                           (134)
       T--CC


Corollas       4
The limiting distribution of the left member of (130) is obtainable through

       J?;(8 - SO)- Q, lX;r+.l-al*(&40)],             u.l=(u11,~21...~Tl)'.

  Indeed, by standard argumentation we may establish
Theorem 4

Under assumption (A.3.1) through (A.3.4) the initial (consistent) estimator of this
section has the limiting distribution

       JT( 6 - 60) - N(0, I;),         F= Q,‘PQ,‘,

where
Ch. 27: Limited Dependent Variables                                             1619

Q, is defined in (134) and


       J+:,)        = (J11Wllt   =   011 [ I-   P%%;       - Po11$?] .


Corollary 5
The initial estimator above is strongly consistent.
Proof

From the theorem above




where 5 is an a.c. finite random vector.
  Thus




8 converges to 6’ a.c.
  Evidently, the parameter cril can be estimated (at least consistently) by


       all=    T
                l   [a;   +   6,,J$,2      + c$&:]     f




3.5.     Limiting distribution of the ML estimator

In the previous section we outlined a procedure for obtaining an initial estimator,
say



and have shown that it converges to the true parameter point, say y”, with
probability one (a.c.).
   We now investigate the properties of the ML estimator, say q, obtained by
solving
Ch. 27: Limited Dependent          Variables                                                                      1621

To this effect define




                  P12
                  &2
                             G2(d
                             @2(Tt)
                                           i
                                           p12v,2 +
                                                                 _
                                                                 $2
                                                                            )I’                                  (139)


                                                             1
            1              h)
     522r=;cr              @(#+             m
                                            @2(rt)                   +(1-ct)~*(%2)[+*(~,2)--y1217
                       [




                  I( )-_!k~~++~,
                                   2                                                                         2


     ,$,=C,       2        A!$
                           51                                *        611                   f        J!& i
                                                                                                    i 011



              I   d2

                   a
                          )I+2(d

                           @2(q)
                                       (
                                           Ufl

                                           u:1/2
                                                     2

                                                         ’
                                                                                     P. J. Dhrymes




                                                                                 .



   In the        expressions of (138)   and   (139)    we have     replaced,   for   reasons    of
notational       economy only,




          U?l
           l/2    .
      i-i011


Remark       10

The starred symbols, for example, t4:r, [;33r, &&, all correspond    to components
of the Hessian of the log LF having mean zero. Hence, such components        can be
ignored both in determining    the limiting distribution of the ML estimator and in
its numerical  derivation, given a sample. We can, then, represent the Hessian of
the log of the LF as




where 52: contains only zeros or elements             having   mean zero. It is also relatively
straightforward  to verify that




where the elements of A,, .$., and C2, have been evaluated at the true parameter
point y”.
    To determine  the limiting distribution  of the ML estimator (i.e. the converging
iterate beginning  with an initial consistent estimator) we need
Ch. 27: Limited Dependent     Variables                                           1623

Lemma 6

Let A,, E., be as defined in (139) and (138); then,




where


     C* = rhm, f         f A,Cov(E.,)A;   = rhm, f    $ E(Q,).                  041)
                        I-l                          t-1




Proof

The sequence

        {A,&:     t=1,2 )... },

is one of independent nonidentically distributed random vectors with mean zero
and uniformly bounded moments to any finite order; moreover, the sequence
obeys a Liapounov condition. Consequently


        +     E(YO)
                  - W,C*).                                                  (Q.E.D.)


  An explicit representation of 0, or C, is omitted here because of its notational
complexity. To complete the argument concerning the limiting distribution of the
ML estimator we obtain the limit of


        f-g(Y).               y E H.


   Again for the sake of brevity of exposition we shall only state the result without
proof

Lemma 7

Under assumptions (A.3.1) through (A.3.4)




uniformly in y.
Ch. 27: Limited    Dependent           Variables                                             1625

where { is a well defined a.c. finite random variable. Hence,




Corollary 7

The matrix in the expansion of (135) obeys

        1 a=L
        T J--Y&~*)               2.        lim   +[     &YO,].
                                       TdCO



Proof

Lemma 7 and Corollary 6.


3.6.    A test for selectivity bias

A test for selectivity bias is formally equivalent to the test of

       Ho:   p12   =   0              or         Y= (B33!2GhO)’

as against the alternative
   Hi: y unrestricted (except for the obvious conditions, uri > 0, pi2e[0, 11). From
the likelihood function in eq. (109) the (log) LF under Ho becomes


       L(YIH,)         = i            Cl-c,)ln@(- yt2)+4n@(vt2)
                           t=l    i

                                           [
                           - +ct ln(2~)+lna,,                +    &( y,,- x,,.~.,)’   Ii.   (142)


We note that (142) is separable in the parameters (/3!,, uri)’ and p.*. Indeed, the
ML estimator of /3.= is the “probit” estimator, p,=, obtained in connection with
eq. (118) in Section 3.d.; the ML estimator of (fi!i, (I&’ is the usual one obtained
by least squares except that uir is estimated with bias - as all maximum likelihood
procedures imply in the normal case. Denote the estimator of Y obtained under
Ho, by y. Denote by y the ML estimator whose limiting distribution was
obtained in the preceding section.
1626                                                                                           P. J. Dhrymes

   Thus

                                                                                                      (143)


is the usual likelihood rationtest statistic. It may be shown that

       -2x-x:.

Wt=.have thus proved
Theorem 6

In the context of the model of this section a test for the absence of selectivity bias
can be carried out by the likelihood ratio (LR) principle. The test statistic is

       -2x-x:,

where

       A = supL(y)-         supL(y).
             HO              Y



References

Aitchison,   J. and J. Bennett (1970) “Polychotomous         Quantal Response by Maximum            Indicant”,
  Biometrika, 57, 253-262.
Aitchison,   J. and S. Silvey (1957) “The Generalization      of Probit Analysis to the Case of Multiple
  Responses”,     Biometrika, 37, 131-140.
Amemiya,     T. (1973) “Regression     Analysis Whe_i the Dependent       Variable Is Truncated      Normal”,
  Econometrica, 41, 997-1016.
Amemiya,     T. (1974) “Bivariate    Probit Analysis:   Minimum C&-Square         Methods”,   Journal of the
  American Statistical Association, 69, 940-944.
Amemiya, T. (1974) “Multivariate       Regression and Simultaneous     Equation Models When the Depen-
  dent Variables Are Truncated Normal”, Econometrica, 42, 999-1012.
Amemiya, T. (1974) “A Note on the Fair and Jaffee Model”, Econometrica, 42, 759-762.
Amemiya, T. (1975) “Qualitative      Response Models”, Annals of Economic and Social Measurement, 4,
  363-372.
Amemiya,     T. (1976) “The Maximum         Likelihood,  the Minimum      Chi-Square,    and the Non-linear
   Weighted Least Squares Estimator in the General Qualitative Response Model”, JASA, 71.
Ameniya,    T. (1978) “The Estimation        of a Simultaneous     Equation    Generalized   Probit Model”,
   Econometrica, 46, 1193-1205.
Amemiya,      T. (1978) “On a Two-Step Estimation          of a Multivariate     Logit Model”,     Journal of
   Econometrics, 8, 13-21.
Amemiya, T. and F. Nold (1975) “A Modified Logit Model”, Review of Economics and Statistics, 57,
   255-257.
Anscombe,     E. J. (1956) “On Estimating Binomial Response Relations”,        Biometrika, 43, 461-464.
Ashford, J. R. and R. R. Sowden (1970) “Multivariate        Probit Analysis”, Biometrics, 26, 535-546.
Ashton, W. (1972) The Logit Transformation. New York: Hafner.
Ch. 27: Limited Dependent       Variables                                                                       1627

Bartlett,    M. S. (1935) “Contingent         Table Interactions”,    Supplement to the Journal of the Royal
   Statistical Sociev, 2, 248-252.
Berkson, J. (1949) “Application          of the Logistic Function      to Bioassay”,     Journal of the American
   Statistical Association, 39, 357-365.
Berkson, J. (1951) “Why I Prefer Logits to Probits”, Biometrika, 7, 327-339.
Berkson, J. (1953) “A StatisticaIly Precise and Relatively Simple Method of Estimating the Bio-Assay
   with Quantal       Response,    Based on the Logistic Function”,         Journal of the American Statistical
   Association, 48, 565-599.
Berkson, J. (1955) “Estimate of the Integrated Normal Curve by Minimum Normit Cl&Square with
   Particular    Reference to B&Assay”,         Journal of the American Statistical Association, 50, 529-549.
Berkson, J. (1955) “Maximum             Likelihood    and Minimum C&Square           Estimations    of the Logistic
   Function”,     Journal of the American Statistical Association, 50, 130-161.
Bishop, T., S. Feiberg and P. Hollan (1975) Discrete Multiuariate Analysis. Cambridge:                 MIT Press.
Block, H. and J. Marschak (1960) “Random               Orderings and Stochastic Theories of Response”, in: I.
   Olkin, ed., Contributions to Probability and Statistics. Stanford: Stanford University Press.
Bock, R. D. (1968) “Estimating          Multinomial    Response Relations”, in: Contributions to Statistics and
   Probability: Essays in Memory of S. N. Roy. Chapel Hill: University of North Carolina Press.
Bock, R. D. (1968) The Measurement and Prediction of Judgment and Choice. San Francisco:
   Holden-Day.
Boskin, M. (1974) “A Conditional               Logit Model of Occupational         Choice”,    Journal of Political
   Economy, 82, 389-398.
Boskin, M. (1975) “A Markov Model of Turnover in Aid to Families with Dependent                          Children”,
  Journal of Human Resources, 10, 467-481.
Chambers,       E. A. and D. R. Cox (1967) “Discrimination               between Alternative      Binary Response
   Models”, Biometrika, 54, 573-578.
Cosslett,     S. (1980) “Efficient     Estimators    of Discrete Choice Models”, in: C. Manski and D.
   McFadden,       eds., Structural Analysis of Discrete Data. Cambridge:        MIT Press.
Cox, D. (1970) Analysis of Binary Data. London: Methuen.
Cox, D. (1972) “The Analysis of Multivariate Binary Data”, Applied Statistics, 21, 113-120.
Cox, D. (1958) “The Regression Analysis of Binary Sequences”,                    Journal of the Royal Statistical
   Society, Series B, 20, 215-242.
Cox, D. (1966) “Some Procedures Connected with the Logistic Response Curve”, in: F. David, ed.,
   Research Papers in Statistics. New York: Wiley.
Cox, D. and E. Snell (1968) “A General Definition of Residuals”,                  Journal of the Royal Statistical
   Society, Series B, 30, 248-265.
Cragg, J. G. (1971) “Some Statistical Models for Limited Dependent Variables with Application                  to the
   Demand for Durable Goods”, Econometrica, 39, 829-844.
Cragg, J. and R. Uhler (1970) “The Demand for Automobiles”,                   Canadian Journal of Economics, 3,
   386-406.
Cripps, T. F. and R. J. Tarling (1974) “An Analysis of the Duration of Male Unemployment                    in Great
   Britain 1932-1973”,       The Economic Journal, 84, 289-316.
Daganzo, C. (1980) Multinomial Probit. New York: Academic Press.
Dagenais,      M. G. (1975) “Application       of a Threshold Regression Model to Household            Purchases of
   Automobiles”,       The Review of Economics and Statistics, 57, 275-285.
Debreu, G. (1960) “Review of R. D. Lute Individual Choice Behavior”, American Economic Review,
   50,186-188.
Dhrymes,      P. J. (1970) Econometrics: Statistical Foundations and Applications. Harper & Row, 1974,
   New York: Springer-Verlag.
Dhrymes, P. J. (1978a) Introductory Econometrics. New York: Springer-Verlag.
Dhrymes, P. J. (1978b) Mathematics for Econometrics. New York: Springer-Verlag.
Domencich,       T. and D. McFadden (1975) Urban Travel Demand: A Behavioral Analysis. Amsterdam:
   North-Holland.
Efron, B. (1975) “The Efficiency of Logistic Regression Compared to Normal Discriminant                   Analysis”,
   Journal of the American Statistical Association, 70, 892-898.
Fair, R. C. and D. M. JaKee (1972) “Methods                   of Estimation    for Markets in Disequilibrium”,
   Econometrica, 40, 497-514.
1628                                                                                                        P. J. Dhrymes

Finney, D. (1964) Statistical Method in Bio-Assay. London: Griffin.
Finney, D. (1971) Probit Analysis. New York: Cambridge University Press.
Gart, J. and J. Zweifel (1967) “On the Bias of Various Estimators of the Logit and Its Variance”.
   Biometrika, 54, 181-187.
Gillen, D. W. (1977) “Estimation                and Specification    of the Effects of Parking Costs on Urban
   Transport       Mode Choice”, Journal of Urban Economics, 4, 186-199.
Goldberger,        A. S. (1971) “Econometrics        and Psychometrics:     A Survey of Communahties”,              Psycho-
   metrika, 36, 83-107.
Goldberger,        A. S. (1973) “Correlations        Between Binary Outcomes and Probabilistic               Predictions”,
   Journal of American Statistical Association, 68, 84.
Goldfeld,      S. M. and R. E. Quandt (1972) Nonlinear Metho& on Econometrics. Amsterdam:                            North-
   Holland.
Goldfeld,      S. M. and R. E. Quandt (1973) “The Estimation                     of Structural    Shifts by Switching
   Regressions”,        Annals of Economic and Social Measurement, 2, 475-485.
Goldfeld, S. M. and R. E. Quandt (1976) “Techniques                  for Estimating Switching Regressions”,           in: S.
   Goldfeld and R. Quandt, eds., Studies in Non-Linear Estimation. Cambridge:                     Ballinger.
Goodman,        1. and W. H. Kruskai (1954) “Measures of Association for Cross Classifications”,                    Journal
   of the American Statistical Association, 49, 732-764.
Goodman,        I. and W. H. Kruskal(l954)          “Measures of Association for Cross Classification          II. Further
   Discussion and References”,           Journal of the American Statistical Association, 54, 123-163.
Goodman,        L. A. (1970) “The Multivariate Analysis of Qualitative Data: Interactions               Among Multiple
   Classifications”,       Journal of the American Statistical Association, 65, 226-256.
Goodman,        L. A. (1971) “The Analysis of Multidimensional            Contingency     Tables: Stepwise Procedures
   and Direct Estimation           Methods for Building Models for Multiple Classifications”,             l’echnometrics,
   13, 33-61.
Goodman,        L. A. (1972) “A Modified Multiple Regression Approach to the Analysis of Dichotomous
   Variables”,       American Sociological Review, 37, 28-46.
Goodman,          L. A. (1972) “A General Model for the Analysis of Surveys”,                     Americun Journal of
   Sociology, 77, 1035-1086.
Goodman,         L. A. (1973) “Causal Analysis of Panel Study Data and Other Rinds of Survey Data”,
   American Journal of Sociology, 78, 1135-1191.
Griliches,     Z., B. H. Hall and J. A. Hausman               (1978) “Missing Data and Self-Selection             in Large
   Panels”, Annals de I’lnsee, 30-31, 137-176.
Grizzle, J. (1962) “Asymptotic             Power of Tests of Linear Hypotheses           Using the Probit and Logit
   Transformations”,         Journal of the American Statistical Association, 57, 877-894.
Grizzle, J. (1971) “Multivariate          Logit Analysis”, Biometrics, 27, 1057-1062.
Gronau,     R. (1973) “The Effect of Children on the Housewife’s Value of Time”, Journal of Political
   Economy, 81, 168-199.
Gronau,      R. (1974) “Wage Comparisons:               A Selectivity Bias”, Journal of Pohticul Economy, 82,
   1119-1143.
Gurland,      J., I. Lee and P. Dabm (1960) “Polychotomous                Quanta1 Response in Biological Assay”,
   Biometrics, 16, 382-398.
Haberman,         S. (1974) The Analysis of Frequency Data. Chicago: University of Chicago Press.
Haldane,      J. (1955) “The Estimation and Significance of the Logarithm of a Ratio of Frequencies”,
   Annals of Human Genetics, 20, 309-311.
Harter, J. and A. Moore (1967) “Maximum                   Likelihood Estimation,     from Censored Samples, of the
   Parameters        of a Logistic Distribution”,    Journal of the American Statistical Association, 62, 615-683.
Hausman,        J. (1979) “Individual       Discount Rates and the Purchase and Utilization of Energy Using
   Durables”,        Bell Journal of Economics, 10, 33-54.
Hausman        J. A. and D. A. Wise (1976) “The Evaluation of Results from Truncated Samples: The New
   Jersey Negative Income Tax Experiment”,               Annals of Economic and Social Measurement. 5,421-445.
Hausman,         J. A. and D. A. Wise (1977) “Social Experimentation,                   Truncated    Distributions       and
   Efficient Estimation”,         Econometrica, 45, 319-339.
Hausman,       J. A. and D. A. Wise (1978) “A Conditional           Probit Model for Qualitative Choice: Discrete
   Decisions        Recognizing     Interdependence       and Heterogeneous        Preferences”,    Econometrica,         46,
   403-426.
Ch. 27: Limited Dependent         Variables                                                                             1629

Hausman,       J. A. and D. A. Wise (1980) “Stratification              on Endogenous Variables and Estimation:           The
   Gary Experiment”,           in: C. Manski and D. McFadden,                 eds., Structural Analysis of Discrete Dota.
   Cambridge:        MIT Press.
Heckman,       J. (1974) “Shadow Prices, Market Wages, and Labor Supply”, Econometrica, 42, 679-694.
Heckman,        J. (1976) “Simultaneous           Equations     Model with Continuous           and Discrete Endogenous
   Variables and Structural Shifts”, in: S. M. Goldfeld and E. M. Quandt, eds., Studies in Non-Linear
   Estimation. Cambridge:           Ballinger.
Heckman,       J. (1976) “The Common Structure of Statistical Models of Truncation,                         Sample Selection
   and Limited Dependent Variables and a Simple Estimation for Such Models”, Annals of Economic
   and Social Measurement, 5, 415-492.
Heckman, J. (1978) “Dummy Exogenous Variables in a Simultaneous Equation System”, Econometrica,
   46, 931-959.
Heckman,       J. (1978) “Simple Statistical Models for Discrete Panel Data Developed and Applied to
   Test the Hypothesis          of True State Dependence           Against the Hypothesis        of Spurious State Depen-
   dence”, Annals de I’lnsee, 30-31, 227-270.
Heckman,       J. (1979) “Sample Selection Bias as a Specification Error”, Econometrica, 47, 153-163.
Heckman,       J. (1980) “Statistical      Models for the Analysis of Discrete Panel Data”, in: C. Manski and
   D. McFadden,          eds., Structural Analysis of Discrete Data. Cambridge:              MIT Press.
Heckman,       J. (1980) “The Incidental Parameters               Problem and the Problem of Initial Conditions             in
   Estimating       a Discrete Stochastic Process and Some Monte Carlo Evidence on Their Practical
   Importance”,        in: C. Manski and D. McFadden,                eds., Structural Analysis of Discrete Data. Cam-
   bridge: MIT Press.
Heckman, J. and R. Willis (1975) “Estimation                 of a Stochastic Model of Reproduction:            An Economet-
   ric Approach”,        in: N. Terleckyj, ed., Household Production and Consumptron. New York: National
   Bureau of Economic Research.
Heckman, J. and R. Willis (1977) “A Beta Logistic Model for the Analysis of Sequential Labor Force
   Participation      of Married Women”, Journal of Political Economy, 85, 27-58.
Joreskog,     K. and A. S. Goldberger             (1975) “Estimation         of a Model with Multiple Indicators          and
   Multiple Causes of a Single Latent Variable Model”, Journal of the Amencan Statistical Assocration,
   70, 631-639.
Kiefer, N. (1978) “Discrete             Parameter      Variation:     Efficient Estimation     of a Switching Regression
   Model”, Econometrica, 46, 427-434.
Kiefer, N. (1979) “On the Value of Sample Separation Information”,                         Econometrica, 47, 997-1003.
Kiefer, N. and G. Neumann (1979) “An Empirical Job Search Model with a Test of the Constant
   Reservation       Wage Hypothesis”,          Journal of Political Economy, 87, 89-107.
Kohn, M., C. Manski and D. Mundel (1976), “An Empirical Investigation                                of Factors Influencing
   College Going Behavior”, Annals of Economic and Social Measurement, 5, 391-419.
Ladd, G. (1966) “Linear              Probability     Functions     and Discriminant        Functions”,     Econometrica, 34,
   873-885.
Lee, L. F. (1978) “Unionism            and Wage Rates: A Simultaneous Equation Model with Qualitative and
   Limited Dependent           Variables”, International Economic Review, 19, 415-433.
Lee, L. F. (1979) “Identification             and Estimation in Binary Choice Models with Limited (Censored)
   Dependent       Variables”,     Econometrica, 47, 917-996.                _
Lee. L. F. (1980) “Simultaneous                Eouations Models with Discrete and Censored Variables”, in: C.
   Manski and D: McFadden,               eds., Stmtural Analysis of Discrete Data. Cambridge:                MIT Press.
Lee, L. F. and R. P. Trost (1978) “Estimation                    of Some Limited Dependent            Variable Models with
   Applications       to Housing Demand”, Journal of Econometrics, 8, 357-382.
Lerman,      S. and C. Manski (1980) “On the Use of Simulated Frequencies                           to Approximate    Choice
   Probabilities”,       in: C. Manski and D. McFadden,                    eds., Structural Analysis of Discrete Data.
   Cambridge:        MIT Press.
Li, M. (1977) “A Logit Model of Home Ownership”,                        Econometrica, 45, 1081-1097.
Little, R. E. (1968) “A Note on Estimation for Quantal Response Data”, Biometrika, 55, 578-579.
Lute, R. D. (1959) Individual Choice Behavior: A Theoretical Analysis. New York: Wiley.
Lute, R. D. (1977) “The Choice Axiom After Twenty Years”, Journal of Mathematical Psychology, 15,
   215-233.
Lute, R. D. and P. Suppes (1965) “Preference,                   Utility, and Subjective Probability”,         in: R. Lute, R.
1630                                                                                                   P. J. Dhtymes

   Bush and E. Galanter, eds., Handbook of Mathematical Psychology III. New York: Wiley.
Maddala,     G. S. (1977) “Self-Selectivity       Problem in Econometric         Models”, in: P. Krishniah,        ed.,
   Applications of Statistics. Amsterdam:       North-Holland.
Maddala,     G. S. (1977) “Identification       and Estimation       Problems in Limited Dependent           Variable
   Models”, in: A. S. Blinder and P. Friedman,              eds., Natural Resources, Uncertainty and General
   Equilibrium Systems: Essays in Memory of Rafael Lusky. New York: Academic Press.
Maddala,     G. S. (1978) “Selectivity      Problems in Longitudinal        Data”, Annals de I’INSEE,          30-31,
   423-450.
Maddala,     G. S. and L. F. Lee (1976) “Recursive           Models with Qualitative       Endogenous     Variables”,
   Annals of Economic and Social Measurement, 5.
Maddala,     G. and F. Nelson (1974) “Maximum            Likelihood Methods for Markets in Disequilibrium”,
   Econometrica, 42, 1013-1030.
Maddala,     G. S. and R. Trost (1978) “Estimation         of Some Limited Dependent Variable Models with
   Application    to Housing Demand;‘, Journal of Econometrics, 8, 357-382.
Maddala.     G. S. and R. Trost (1980) “Asvmutotic              Covariance    Matrices of Two-Staae       Probit and
   Two-Stage Tobit Methods for‘Sim&ne&~Equations                     Models with Selectivity”, Econometrica, 48,
   491-503.
Manski, C. (1975) “Maximum           Score Estimation of the Stochastic Utility Model of Choice”, Journal of
   Econometrics, 3, 205-228.
Manski, C. (1977) “The Structure of Random Utility Models”, Theory and Decision, 8, 229-254.
Manski,     C. and S. Lerman (1977) “The Estimation                of Choice Probabilities      from Choice-Based
   Samples”,    Econometrica, 45; 1977-1988.
Manski, C. and D. McFadden (1980) “Alternative              Estimates and Sample Designs for Discrete Choice
   Analysis”, in: C. Manski and D. McFadden, eds., Structural Analysis of Discrete Data. Cambridge:
   MIT Press.
Marshak, J. “Binary-Choice        Constraints and Random Utility Indicators”,          in: K. Arrow, S. Karlin and
   P. Suppes, eds., Mathematical Methodr in the Social Sciences. Stanford University Press.
McFadden,      D. “Conditional      Logit Analysis of Qualitative Choice Behavior”, in: P. Zarembka,               ed.,
   Frontiers in Econometrics. New York: Academic Press.
McFadden,      D. (1976) “A Comment on Discriminant               Analysis ‘Versus’ Logit Analysis”,        Annals of
   Economics and Social Measurement, 5, 511-523.
McFadden,       D. (1976) “Quantal        Choice Analysis:       A Survey”, Annals of Economic and Social
   Measurement,     5, 363-390.
McFadden,      D. (1976) “The Revealed Preferences of a Public Bureaucracy”,                Bell Journal, 7, 55-72.
Miller, L. and R. Radner (1970) “Demand                 and Supply in U.S. Higher Education”,               American
   Economic Review, 60, 326-334.
Moore, D. H. (1973) “Evaluation         of Five Discrimination      Procedures for Binary Variables”, Journal of
   American Statistical Association, 68, 399-404.
Nelson, F. (1977) “Censored        Regression Models with Unobserved Stochastic Censoring Thresholds”,
   Journal of Econometrics, 6, 309-327.
Nelson, F. S. and L. Olsen (1978) “Specification           and Estimation of a Simultaneous         Equation Model
   with Limited Dependent Variables”, International Economic Review, 19, 695-710.
Nerlove, M. (1978) “Econometric           Analysis of Longitudinal       Data: Approaches,       Problems and Pro-
   spects”, Annales de I’lnsee, 30-31, 7-22.
Nerlove, M. and J. Press (1973) “Univariable            and Multivariable      Log-Linear   and Logistic Models”,
   RAND Report No. R-1306-EDA/NIH.
Oliveira, J. T. de (1958) “Extremal Distributions”,          Revista de Faculdada du Ciencia, Lisboa, Serie A,
  7, 215-227.
Olsen, R. J. (1978) “Comment           on ‘The Effect of Unions on Earnings and Earnings on Unions: A
  Mixed Logit Approach”‘,         International Economic Review, 259-261.
Plackett, R. L. (1974) The Analysis of Categorical Data. London: Charles Griffin.
Poirier, D. J. (1976) “The Determinants             of Home Buying in the New Jersey Graduated                   Work
  Incentive Experiment”,       in: H. W. Watts and A. Rees, eds., Impact of Experimental Payments on
  Expenditure,     Health and Social Behavior, and Studies on the Quality of the Evidence. New York:
  Academic Press.
Poirier, D. J. (1980) “A Switching Simultaneous           Equation Model of Physician Behavior in Ontario”,
Ch. 27: Limited     Dependent    Variables                                                                         1631

   in: D. McFadden          and C. Manski, eds., Structural Analysis of Discrete Data: With Econometric
   Applications. Cambridge:       MIT Press.
Pollakowski,     H. (1980) Residential Location and Urban Housing Markets. Lexington: Heath.
Quandt, R. (1956) “Probabilistic         Theory of Consumer Behavior”, Quarterly Journal of Economics, 70,
   501-536.
Quandt, R. (1970) The Demand for Travel. London: Heath.
Quandt, R. (1972) “A New Approach to Estimating Switching Regressions”,                      Journal of the American
   Statisiical Association, 67, 306-310.
Quandt, R. (1978) “Tests of the Equilibrium vs. Disequilibrium                Hypothesis”,    Internutional Economic
   Review, 19, 435-452.
Quandt, R. and W. Baumol(1966)             “The Demand for Abstract Travel Modes: Theory and Measure-
   ment”, Journal of Regional Science, 6, 13-26.
Quandt, R. E. and J. B. Ramsey (1978) “Estimating              Mixtures of Normal Distributions         and Switching
   Regressions”,     Journal of the American Statistical Association, 71, 730-752.
Quigley, J. M. (1976) “Housing            Demand in the Short-Run:          An Analysis of Polytomous         Choice”,
   Explorations in Economic Research, 3, 76-102.
Radner,      R. and L. Miller (1975) Demand and Supply in U.S. Higher Education. New York:
   McGraw-Hill.
Sattath, S. and A. Tversky (1977) “Additive Similarity Trees”, Psychometrika, 42, 319-345.
Shakotko; Robert A. and M. Grossman (1981) “Physical Disability and Post-Secondary                         Educational
   Choices”, in: V. R. Fuchs, ed., Economic Aspects of Health. National Bureau of Economic Research,
   Chicago: University of Chicago Press.
Sickles, R. C. and P. Schmidt (1978) “Simultaneous                 Equation Models with Truncated           Dependent
  Variables: A Simultaneous        Tobit Model”, Journal of Economics and Business, 31, 11-21.
Theil, H. (1969) “A Multinomial             Extension of the Linear Logit Model”, International Economic
  Review, 10, 251-259.
Theil, H. (1970) ‘I On the Estimation           of Relationships     Involving Qualitative     Variables”,   American
  Journal of Sociology, 76, 103-154.
Thurstone,     L. (1927) “A Law of Comparative          Judgement”,     Psychological Review, 34, 273-286.
Tobin, J. (1958) “Estimation        of Relationships     for Limited Dependent Variables”,          Econometrica, 26,
  24-36.
Tversky, A. (1972) “Choice by Elimination”,            Journal of Mathematical Psychology. 9, 341-367.
Tversky, A. (1972) “Elimination        by Aspects: A Theory of Choice”, Psychological Review, 79,281-299.
Walker, S. and D. Duncan (1967) “Estimation             of the Probability of an Event as a Function of Several
  Independent      Variables”,   Biometrika, 54, 167-179.
Westin, R. (1974) “Predictions        from Binary Choice Models”, Journal of Econometrics, 2, 1-16.
Westin, R. B. and D. W. Gillen (1978) “Parking               Location and Transit Demand: A Case Study of
  Endogenous       Attributes   in Disaggregate      Mode Choice Functions”,           Journal of Econometrics,        8,
  75-101.
Willis, R. and S. Rosen (1979) “Education              and Self-Selection”,     Journal of Political Economy, 87,
  507-536.
Yellot, J. (1977) “The Relationship         Between Lute’s Choice Axiom, Thurstone’s Theory of Compara-
  tive Judgment,     and the Double Exponential Distribution”,            Journal of Mathematical Psychology, 15,
  109-144.
Zellner,    A. and T. Lee (1965) “Joint Estimation               of Relationships     Involving Discrete Random
  Variables”,     Econometrica, 33, 382-394.



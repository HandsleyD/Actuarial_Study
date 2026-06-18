---
normalized_id: shared-pdf-reference-state-space-models
exam_code: SHARED
material_scope: state-space models.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/State-Space Models.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-state-space-models

Chapter 50


STATE-SPACE                       MODELS*

JAMES       D. HAMILTON

University of California, San Diego




Contents

Abstract                                                                                                         3041
1. The state-space representation                               of a linear dynamic                     system   3041
2. The Kalman filter                                                                                             3046
     2.1.    Overview      of the Kalman           filter                                                        3047
     2.2.    Derivation       of the Kalman          filter                                                      3048
     2.3.    Forecasting       with the Kalman              filter                                               3051
     2.4.    Smoothed         inference                                                                          3051
     2.5.    Interpretation       of the Kalman             filter with non-normal          disturbances         3052
     2.6.    Time-varying        coefficient      models                                                         3053
     2.7.    Other     extensions                                                                                3054
3.   Statistical inference                 about      unknown              parameters            using the
     Kalman filter                                                                                               3055
     3.1.    Maximum          likelihood      estimation                                                         3055
     3.2.    Identification                                                                                      3057
     3.3.    Asymptotic        properties       of maximum            likelihood     estimates                   3058
     3.4.    Confidence        intervals     for smoothed            estimates     and forecasts                 3060
     3.5.    Empirical     application         - an analysis         of the real interest        rate            3060
4.   Discrete-valued              state variables                                                                3062
     4.1.    Linear    state-space         representation        of the Markov-switching                model    3063
     4.2.    Optimal      filter when the state variable                follows a Markov           chain         3064
     4.3.    Extensions                                                                                          3067
     4.4.    Forecasting                                                                                         3068




   *I am grateful to Gongpil Choi, Robert Engle and an anonymous    referee for helpful comments, and
to the NSF for support under grant SES8920752.        Data and software used in this chapter can be
obtained at no charge by writing James D. Hamilton,      Department   of Economics 0508, UCSD, La
Jolla, CA 92093-0508, USA. Alternatively,     data and software can be obtained by writing ICPSR,
Institute for Social Research, P.O. Box 1248, Ann Arbor, MI 48106, USA.

Handbook of Econometrics, Volume 1 V, Edited by R.F. Engle and D.L. McFadden
0 1994 Elsevier Science B.V. All rights reserved
3040                                                                                                             J.D. Hamilton


       4.5.   Smoothed     probabilities                                                                                  3069
       4.6.   Maximum      likelihood      estimation                                                                     3070
       4.7.   Asymptotic     properties       of maximum     likelihood    estimates                                      3071
       4.8.   Empirical    application     - another    look at the real interest       rate                              3071
5.     Non-normal          and nonlinear            state-space          models                                          3073
       5.1.   Kitagawa’s    grid approximation          for nonlinear,     non-normal     state-space   models            3073
       5.2.   Extended     Kalman    filter                                                                               3076
       5.3.   Other   approaches     to nonlinear       state-space   models                                              3077
References                                                                                                              3077
Ch. 50: State-Space Models                                                            3041




Abstract

This chapter reviews the usefulness of the Kalman filter for parameter estimation
and inference about unobserved variables in linear dynamic systems. Applications
include exact maximum likelihood estimation       of regressions with ARMA distur-
bances, time-varying   parameters, missing observations,   forming an inference about
the public’s expectations     about inflation, and specification    of business cycle
dynamics. The chapter also reviews models of changes in regime and develops the
parallel between such models and linear state-space models. The chapter concludes
with a brief discussion of alternative approaches    to nonlinear  filtering.




1.   The state-space    representation     of a linear dynamic system

Many dynamic models can usefully be written in what is known as a state-space
form. The value of writing a model in this form can be appreciated by considering
a first-order autoregression


     Y,+1 =$Yr+st+r,                                                                  (1.1)

with E, N i.i.d. N(0, a’). Future values of y for this process depend on (Y,, y,_ 1,. . . )
only through the current value y,. This makes it extremely simple to analyze the
dynamics of the process, make forecasts or evaluate the likelihood function. For
example, equation (1.1) is easy to solve by recursive substitution,


     Yf+m = 4”y, + 4m-1Ey+l + 4m-2Et+2 + ...
              +q5l~~+~-~     +E~+~       for   m= 1,2,...,                            (1.2)
from which the optimal        m-period-ahead      forecast   is seen to be

      E(Y,+,lY,,Y,-,,...)=~mY,.                                                       (1.3)

The process is stable if 14 1< 1.
   The idea behind a state-space representation of a more complicated linear system
is to capture the dynamics of an observed (n x 1) vector Y, in terms of a possibly
unobserved (I x 1) vector 4, known as the state vector for the system. The dynamics
of the state vector are taken to be a vector generalization   of (1.1):

      5,+r =F&+n,+,.                                                                  (1.4)
3042                                                                                J.D. Hamilton


Here F denotes an (r x I) matrix and the (r x 1) vector II, is taken to be i.i.d. N(0, Q).
Result (1.2) generalizes to

       5t+m   =   F”& + F”-~I,+~       + Fm-2~t+2 + ...

                  + Fr~~+~-r   +v,+,      for   m= 1,2,...,                                 (1.5)

where F” denotes        the matrix     F multiplied   by itself m times. Hence




Future values of the state vector depend on ({,, 4, _ 1,. . .) only through the current
value 5,. The system is stable provided that the eigenvalues of F all lie inside the
unit circle.
   The observed variables are presumed to be related to the state vector through
the observation equation of the system,

       y, = A’.q + H’{, + w,.                                                                (1.6)
Here yt is an (n x 1) vector of variables that are observed at date t, H’ is an (n x r)
matrix of coefficients, and W, is an (n x 1) vector that could be described as
measurement       error; W, is assumed to be i.i.d. N(O,R) and independent              of g1 and
v, for t= 1,2,... . Equation         (1.6) also includes x,, a (k x 1) vector of observed
variables that are exogenous or predetermined             and which enter (1.6) through the
(n x k) matrix of coefficients A’. There is a choice as to whether a variable is defined
to be in the state vector 5, or in the exogenous vector xt, and there are advantages
if all dynamic variables are included in the state vector so that x, is deterministic.
However, many of the results below are also valid for nondeterministic                 x,, as long
as n, contains no information          about &+, or w,+, for m = 0, 1,2,. . . beyond that
containediny,_,,y,_,,...,         yr. For example, X, could include lagged values of y or
variables that are independent         of 4, and W, for all T.
    The state equation       (1.4) and observation       equation     (1.6) constitute    a linear
state-space repesentation for the dynamic behavior of y. The framework can be
further generalized       to allow for time-varying        coefficient matrices, non-normal
disturbances     and nonlinear      dynamics, as will be discussed later in this chapter.
For now, however, we just focus on a system characterized                 by (1.4) and (1.6).
   Note that when x, is deterministic,        the state vector 4, summarizes everything in
the past that is relevant for determining         future values of y,

       E(Yt+ml51,5r-l,...,Yt,Y1-1,...)
          =EC(A’x,+,+H’5,+,+w,+,)l5,,5,-,,...,y,,y,-l,...I
          =A’xy+,+H’E(5,+,151,&-1,...,~t,~*-l,...)
          = A'x~+~ + HlF"'&.                                                                (1.7)
Ch. 50: State-Space Models                                                                                         3043


  As a simple example of a system that can be written                           in state-space       form, consider
a pth-order autoregression

     (Y,+1     - 11)= 4l(Y, - 4 + #dYte 1 - PL)+ ... + 4p(Yt-p+l                              - 11)+ Et+12         (1.8)


     E, -    i.i.d. N(0, a2).

Note that (1.8) can equivalently                      be written   as


                                     41 42 ... 4p-1 4p
       Yt+1 -P                            1    0      ...    0      0          Yt - P                 Et+1




    1i !
     J&p+2
            Yz - P


                   -P
                               =     Ol...OO

                                    .o
                                      ..

                                       .
                                           ..
                                           0
                                            .
                                                      ...
                                                      ...
                                                             .
                                                             1
                                                             :
                                                                    011
                                                                              Yc-1 -P


                                                                            J&p+1




The first row of (1.9) simply reproduces (1.8) and other rows assert the identity
                                                                                  .


                                                                                    :
                                                                                         -P
                                                                                              !I:1
                                                                                                 +
                                                                                                       0
                                                                                                        .

                                                                                                        0
                                                                                                              .    (1.9)




Y,_j-p=Yy,_j-p      forj=O,l,...,  p - 2. Equation (1.9) is of the form of (1.4) with
r=p   and

      &=(yt-PL,Yt-1                -P~...#-p+l-P)I~                                                               (1.10)

      v 2+1- -(%+1,0,...,O)I,                                                                                     (1.11)




      F=           0      1        ...                                                                            (1.12)
                   ..     ..       . ..
                    .      .
              -0          0        .‘.

The observation           equation            is


     Yt = P + H’t,,                                                                                               (1.13)

where H’ is the first row of the (p x ,p) identity                        matrix.       The eigenvalues      of F can
be shown to satisfy

                                                                                                                  (1.14)

thus stability of a pth-order autoregression requires that any value 1 satisfying
(1.14) lies inside the unit circle.
   Let us now ask what kind of dynamic system would be described if H’ in (1.13)
3044                                                                                                             J.D. Hamilton


is replaced         with a general         (1 x p) vector,

       y,=/J+Cl           81 0,      “.    ~,-IK                                                                          (1.15)

where the 8’s represent arbitrary coefficients. Suppose that 4, continues                                           to evolve
in the manner specified for the state vector of an AR(p) process. Letting                                          tjt denote
the jth element of &, this would mean


       51,t+1



    I! 1
       r 2,t+




       r’ PJ+
                1




                1
                      =
                            41

                             1
                             0
                             ..

                             0
                              .
                                    42

                                     0
                                     1
                                     ..

                                     0
                                      .
                                            ...

                                            ...
                                            ...
                                            ...
                                            ...
                                                    4,-l

                                                       0
                                                           0


                                                           1
                                                                  4%

                                                                  0
                                                                  0


                                                                  0
                                                                                +
                                                                                1
                                                                                            E t+1

                                                                                              0
                                                                                              .

                                                                                              0:I
                                                                                                       .                  (1.16)




The jth row of this system for j = 2,3,. . . , p states that <j,l+ 1 = (j- l,f, implying

       5jt=Lj51,t+l                 for     j=1,2          ,..., p,                                                       (1.17)

for L the lag operator. The first row of (1.16) thus implies that the first element
of 4, can be viewed as an AR(p) process driven by the innovations sequence {E,}:

       (1-~l~-~2~2-~~~-~p~P)S1.1+l=~,+l.                                                                                  (1.18)

Equations           (1.15) and (1.17) then imply

       y,=p+(l            +B,L’+e2L2+...+ep-1LP-1)51r.                                                                    (1.19)

If we subtract   p from both sides of (1.19) and                                       operate         on both    sides    with
(1 - c$,L- q5,L2 - ... - 4,Lp), the result is

       (1 -&L-4,L2-                      ... -~pLP)(yt-p)=(l+~1L1+~2L2+‘~~+ep-1LP-1)

                                                                           x (1 - $,L-              f#),L2 - ... - f#),LP)&,

                                                                       =(1+8,L’+82L2+~~~+8p_,LP-1)E,


                                                                                                                          (1.20)

by virtue of(1.18). Thusequations(l.15)and    (1.16)constitute   a state-space represen-
tation for an ARMA(p,p - 1) process.
    The state-space framework can also be used in its own right as a parsimonious
time-series description of an observed vector of variables. The usefulness of forecasts
emerging from this approach has been demonstrated          by Harvey and Todd (1983),
Aoki (1987), and Harvey (1989).
Ch. 50: State-Space Models                                                             3045


   The state-space  form is particularly  convenient  for thinking    about sums of
stochastic processes or the consequences     of measurement     error. For example,
suppose we postulate the existence of an underlying “true” variable, &, that follows
an AR(l) process

                                                                                     (1.21)

with u, white noise. Suppose that 4, is not observed directly. Instead, the econometri-
cian has available data y, that differ from 5, by measurement        error w,:

     Y, = 5, + wt.                                                                   (1.22)

 If the measurement      error is white noise that is uncorrelated   with t+, then (1.21)
and (1.22) can immediately          be viewed as the state equation    and observation
equation of a state-space system, with I = n = 1. Fama and Gibbons (1982) used
just such a model to describe the ex ante real interest rate (the nominal interest
 rate i, minus the expected inflation rate 7~;). The ex ante real rate is presumed to
follow an AR( 1) process, but is unobserved by the econometrician       because people’s
expectation      7~: is unobserved.    The state vector for this application      is then
 <, = i, - rcr - /J where p is the average ex ante real interest rate. The observed ex
post real rate (y, = i, - n,) differs from the ex ante real rate by the error people
make in forecasting inflation,

     i, - x, = p + (i, - 7rcp
                           - p) + (7~;- 71J,

 which is an observation equation of the form of (1.6) with R = 1 and w, = (~1 - 7~~).
If people do not make systematic errors in forecasting inflation, then w, might
reasonably    be assumed to be white noise.
    In many.economic    models, the public’s expectations of the future have important
consequences.    These expectations are not observed directly, but if they are formed
rationally there are certain implications       for the time-series behavior of observed
series. Thus the rational-expectations       hypothesis lends itself quite naturally     to a
state-space representation;    sample applications      include Wall (1980), Burmeister
and Wall (1982), Watson (1989), and Imrohoroglu            (1993).
   In another interesting econometric       application   of a state-space representation,
Stock and Watson (1991) postulated          that the common dynamic behavior of an
(n x 1) vector of macroeconomic        variables yt could be explained in terms of an
unobserved scalar ct, which is viewed as the state of the business cycle. In addition,
each series y, is presumed to have an idiosyncratic         component     (denoted a,J that
is unrelated to movements in yjt for i #j. If each of the component         processes could
be described by an AR(l) process, then the [(n + 1) x l] state vector would be

     4=L a      113   Qtv . . . 2 a,,)                                               (1.23)
3046                                                                                                       J.D. Hamilton


with state equation

                                                                       C,              UC,,+1


       [$j=[j{ZGJ
                                                                       al,
                                                                       azr +  1:   v1,t+ 1
                                                                                   v2,t+l                         (1.24)




and observation            equation




       I=
        Yl,




       1:
        Y2t



        Y “t
                         P2
                          .

                          :I

                         P”1 1% 00
                                  +

                                        I
                                            yz.
                                              .
                                              .
                                                  O.
                                                   .
                                                   .
                                                       l.
                                                        .
                                                        .
                                                            ...
                                                            ...


                                                            ... 1
                                                                  0
                                                                   .
                                                                              c,
                                                                             al*

                                                                             a,,

                                                                             a:I
                                                                              m
                                                                                   1                              (1.25)




Thus yi is a parameter measuring the sensitivity of the ith series to the business
cycle. To allow for @h-order dynamics, Stock and Watson replaced c, and ai, in
(1.23) with the (1 xp) vectors (c,,c,_t ,..., c,-,,+r) and (~,,,a~,~_, ,..., ~_~+r)    so
that 4, is an [(n + 1)~ x l] vector. The scalars C#I~   in (1.24) are then replaced by
(p x p) matrices Fi with the structure of (1.12), and blocks of zeros are added in
between the columns of H’ in the observation     equation (1.25). A related theoretical
model was explored by Sargent (1989).
   State-space models have seen many other applications       in economics. For partial
surveys see Engle and Watson (1987), Harvey (1987), and Aoki (1987).


2.     The Kalman filter

For convenience, the general form of a constant-parameter                                   linear state-space   model
is reproduced   here as equations (2.1) and (2.2).

State equation

        51+1 =      J-5,     + v,+1                                                                                (2.1)
       (r x 1) (r x r)(r x 1) (r x 1)
       E(v,+~$+J=                Q
                               (r x 4
Observation         equation

         Yt =      .4’x,     +    WC&       + w,                                                                   (2.2)
       (n x 1) (n x k)(k x 1) (n x r)(r x 1) (n x 1)
       E(w,w;)      =     R .
                        (n x n)
Ch. 50: State-Space   Models                                                     3047


   Writing a model in state-space form means imposing certain values (such as
zero or one) on some of the elements of F, Q,A,H and R, and interpreting the
other elements as particular parameters of interest. Typically we will not know
the values of these other elements, but need to estimate them on the basis of
observation of {y,, y,, . . . , yT} and {x1,x2,. . . ,x,}.


2.1.   Overview of the Kalman Jilter

Before discussing estimation of parameters, it will be helpful first to assume that
the values of all of the elements of F, Q, A, H and R are known with certainty; the
question of estimation is postponed until Section 3. The filter named for the
contributions of Kalman (1960, 1963) can be described as an algorithm for
calculating an optimal forecast of the value of 4, on the basis of information
observed through date t - 1, assuming that the values of F, Q, A, H and R are all
known.
   This optimal forecast is derived from a well-known result for normal variables;
[see, for example, DeGroot (1970, p. 55)]. Let z1 and zZ denote (n, x 1) and (n2 x 1)
vectors respectively that have a joint normal distribution:




Then the distribution of zZ conditional on z1 is N(m,Z) where

       m=k      +%~;,‘(z, -II,),                                                (2.3)

       E=    .n,, - f2&2;;.(2,*.                                                (2.4)

Thus the optimal forecast of z2 conditional on having observed z1 is given by

       J%,Iz,)=lr,     +&l.n;,‘(z,   -P,),                                      (2.5)

with Z characterizing      the mean squared error of this forecast:

       EC& - Mz, - m)‘lz,l = f12, - f2,,R ;:f&.                                 (2.6)
   To apply this result, suppose that the initial value of the state vector (et) of a
state-space model is drawn from a normal distribution and that the disturbances
a, and w, are normal. Let the observed data obtained through date t - 1 be
summarized by the vector
3048                                                                                                         J.D. Hamilton


Then the distribution of 4, conditional on &_r turns out to be normal for
t = 2,3,,. . , T. The mean of this conditional distribution is represented by the (r x 1)
vector {,,,_ 1 and the variance of this conditional distribution is represented by the
(I x r) matrix PrIt_ r. The Kalman filter is simply the result of applying (2.5) and
(2.6) to each observation in the sample in succession. The input for step t of the
iteration is the mean &-, and variance P,,t_I that characterize the distribution
of 4, conditional on &- 1. The output for step t is the mean c$+,,, and variance
P t+ I,f of I&+1 conditional on 6,. Thus the output for step t is used as the input for
step t + 1.


2.2.     Derivation of the Kalman filter

The iteration is started by assuming that the initial value of the state vector gI is
drawn from a normal distribution with mean denoted G$,,,and variance denoted
PI,,. If the eigenvalues of F are all inside the unit circle, then the vector process
defined by (2.1) is stationary, and ~,,, would be the unconditional mean of this
process,

        &o= 09                                                                                                        (2.7)

while P,,, would be the unconditional                          variance

        PII, = E(44:).

   This unconditional              variance can be calculated from’

        vec(P,,,) = [I+ - (F@F)]-‘.vec(Q).                                                                            (2.f3)

Here Z,2 is the (r2 x r2) identity matrix, “0” denotes the Kronecker product and

   1The unconditional         variance   of 4 can be found by postmultiplying           (2.1) by its transpose   and taking
expectations:

       E(5,+,r;+,)=E(~5,+ol+,)(5:F’+~:+,)
                        = F.E(S,S;)~     + w,+   ,u;+ J.

If 4, is stationary,     then E({,+ ,S;+,)   = E(t,J;)     = P,,,,   and the above equation      becomes

       P,,, = FP,,,F’     + Q.

Applying the vet operator to this equation               and recalling   [e.g. Magnus     and Neudecker      (1988, p. 30)]
that vec(ABCJ = (C&I A).vec(B) produces

       WP,,,)    = (F@WWP,I,)             + ve4Q).
Ch. 50: State-Space Models                                                                             3049


vec(P,,,) is the (r2 x 1) vector formed by stacking the columns of Pi,,, one on top
of the other, ordered from left to right.
   For time-variant      or nonstationary    systems, s,,, could represent a guess as to
the value of {i based on prior information,          while Pi,, measures the uncertainty
associated     with this guess ~ the greater our prior uncertainty,            the larger the
diagonal elements of Pi,,. ’ This prior cannot be based on the data, since it is
assumed in the derivations        to follow that ut+i and W, are independent           of <i for
t= 1,2,..., T. The algorithm described below can also be adapted for the case of
a completely diffuse prior (the limiting case when Pi,,, becomes infinite); as described
by Ansley and Kohn (1985), Kohn and Ansley (1986) and De Jong (1988, 1989,
 1991).
   At this point we have described the values of & 1 and P+ 1 that characterize
the distribution   of 4, conditional   on a_ 1 for t = 1. Since a similar set of calculations
will be used for each date t in the sample, it is helpful to describe the next step
using notation appropriate         for an arbitrary date t. Thus let us assume that the
values of Et,,- l and P,,,_ 1 have been calculated for some t, and undertake the task
of using these to evaluate &+ ilt and P,+ Ilf. If the distribution       of 4, conditional   on
&_i is N(&,,_r, P,I,_l), then under the assumptions           about n,, this is the same as
the distribution   of 4, conditional    on &- l and x,. Since W, is independent       of X, and
&_ 1, the forecast of yt conditional       on I& 1 and X, can be inferred immediately
from (2.2):

      E(y,Ix,,r,-,)=A’x,+H’%,,-,.                                                                     (2.9)

From (2.2) and (2.9) the forecast error can be written


      Yt -     &,I   x,9   r,- 1)= (A’& + H’5, + 4 - (A’nt + H’a,,- 1)
                                = H’(4 - Et,,-
                                            1)+ wt.                                                 (2.10)

Since & _ 1 is a function of & _ 1, the term W, is independent                  of both 4, and $,,_ r.
Thus the conditional    variance of (2.10) is


      E(Cy,-E(y,lx,,r,-,)lCy,-E(y,Ix,,r,-l)l’lx,,r,-1}
               =H’.E{Cr,-~,,,-,1C51-~,1-ll’lrl-1}H+E(w,w:)
               = H’Pt,,_lH+ R.
Similarly,      the conditional     covariance     between     (2.10) and the error in forecasting

   *Meinhold    and Singpurwalla   (1983) gave a nice description   of the Kalman   filter from a Bayesian
perspective.
3050                                                                                         J.D. Hamilton


the state vector is




Thus the distribution           of the vector (y;, 4:)’ conditional     on X, and C,_ 1 is




It then follows from (2.3) and (2.4) that &I & = ~,Ix,,Y,,            <,- 1 is distributed    W&,     Ptit)
where

       &t = B,,-  1 +   p,,,-   l~(H’P,,,- ,H+ WYY,         - A’? -      et,,-l),                   (2.12)


       P,(,=P,,,_l-P,(,_lH(H’P,,,_lH+R)-’H’P,,,_l.                                                  (2.13)


  The final step is to calculate          a forecast   of &+ 1 conditional       on 5,. It is not hard
to see from (2.1) that 5, + 1I G - N& + l,f, P,+ I,t) where

       E+ 111
            = %>                                                                                    (2.14)

       P t+ l,t = FP,,,F’ + Q.                                                                      (2.15)

   Substituting    (2.12) into (2.14) and (2.13) into (2.15), we have


         = F~,,,-l+FP,,,-,H(H’P,,,-,~+R)-‘(y,-~’x,-H’~~,,-,),
       %+1/t                                              (2.16)

       P t+l,,= FPt,,_lF’-        FPt,,_lH(H’Pt,,_lH+        R)-‘H’Pt,,_lF’+Q.                      (2.17)

   To summarize,     the Kalman filter is an algorithm for calculating             the sequence
 {&+ &= 1 and P-T+ &= 1y         where  &  + 1 ,f denotes   the  optimal  forecast of 4, + 1 based
on observation     of (yt,yt_ i,.. .,yl,n,,x,_,      ,..., x1) and Pt+l,t denotes the mean
squared error of this forecast. The filter is implemented             by iterating on (2.16) and
(2.17) for t = 1,2,. . . ,T. If the eigenvalues      of F are all inside the unit circle and
there is no prior information     about the initial value of the state vector, this iteration
is started using equations (2.7) and (2.8).
   Note that the sequence {Pt+I,t}:=l is not a function of the data and can be
evaluated   without calculating      the forecasts {tt+ llt}T= 1. Because P,+ l,t is not a
function of the data, the conditional         expectation      of the squared forecast error is
Ch. 50: State-Space Models                                                                                           3051


the same as its unconditional                           expectation,




This equivalence  is a consequence                            of having      assumed    normal   distributions      with
constant variances for II, and w,.

2.3.    Forecasting            with the Kalman filter

An m-period-ahead                  forecast       of the state vector can be calculated              from (1.5):


       $+,,t = E(5,+,lu,,u,-                  l,...,Y1,Xt,X,-l,...,X1)=FrnSt,r.                                    (2.18)

The error of.this forecast                   can be found              by subtracting   (2.18) from (1.5),

                  = Fm(5A,,,,+Fm-1”r+l
       4t+m - $+l4,                 +Fm-2vt+2+... +F’u,+,_l                                                      +Ut+m,

from which it follows that the mean squared                                  error of the forecast    (2.18) is

       Pt+m,t = EC(&+,- %+,,,,G+,
                               - tt+d'l
                =FmPC,,(Fm)‘+Fm-‘Q(Fm-1)‘+Fm-2Q(Fm-2)’+~~~+FQF’+Q.                                                 (2.19)

   These results can also be used to describe m-period-ahead        forecasts of the
observed vector y! + ,,,, provided that {x,} is deterministic. Applying the law of
iterated expectations  to (1.7) results in

       9 t+mlr=E(yr+mIYt,Yt-1,...,Y1)=A’~,+,+H’F”$I,.                                                               (2.20)

The error of this forecast is

       Y t+m    -A+,I, = V’xt+m+ H’b+, + w,+,) - V’xt+m + H’F”&t)
                               = H’(5,+*- E+m,,)
                                             + Wt+m
with mean squared                  error


        EC(y,+m -9t+mlr)(Yt+m -9,+,1,)'1=                              H’Pt.,,,H+ R.                               (2.21)


2.4.    Smoothed           inference

Up to this point we have been concerned with a forecast of the value of the state
vector at date t based on information  available at date t - 1, denoted &,- 1, or
3052                                                                      J.D. Hamilton


with an inference about the value of the state vector at date t based on currently
available information, denoted &. In some applications the value of the state vector
is of interest in its own right. In the example of Fama and Gibbons, the state
vector tells us about the public’s expectations of inflation, while in the example of
Stock and Watson, it tells us about the overall condition of the economy. In such
cases it is desirable to use information through the end of the sample (date T) to
help improve the inference about the historical value that the state vector took
on at any particular date t in the middle of the sample. Such an inference is known
as a smoothed estimate, denoted    e,,  = E({,j c&). The mean squared error of this
estimate is denoted PtJT = E(g, - &T)(g, - &-)I.
   The smoothed estimates can be calculated as follows. First we run the data
through the Kalman filter, storing the sequences {Pt,,}T=i and {P+ ,}T=, as
calculated from (2.13) and (2.15) and storing the sequences ($,,}T= 1 and {$t,l_ ,>,‘=1
as calculated from (2.12) and (2.14). The terminal value for {&t}Z” i then gives the
smoothed estimate for the last date in the sample, I$=,~,and P,,, is its mean squared
error.
   The sequence of smoothed estimates {&T)TE1 is then calculated in reverse order
by iterating on



for t = T- 1, T- 2,. . . , 1, where J, = P,,,F’P;,‘,,,. The corresponding mean squared
errors are similarly found by iterating on

                                                                                 (2.23)

inreverseorderfort=T-l,T-2,...,           1; see for example Hamilton (1994, Section
13.6).


2.5.   Interpretation of the Kalman jilter with non-normal disturbances

In motivating the Kalman filter, the assumption was made that u, and w, were
normal. Under this assumption, &,_ 1 is the function of <,- 1 that minimizes

                  1NC- %,,-l)‘l>
       a-(4, - Et,,-                                                             (2.24)

in the sense that any other forecast has a mean squared error matrix that differs
from that of &,_ 1 by a positive semidefinite matrix. This optimal forecast turned
out to be a constant plus a linear function of L-;. The minimum value achieved
for (2.24) was denoted PIi,_ 1.
   If D, and w, are not normal, one can pose a related problem of choosing &, _ 1
to be a constant plus a linear function of &- i that minimizes (2.24). The solution
Ch. 50: State-Space Models                                                                3053


to this problem turns out to be given by the Kalman filter iteration (2.16) and its
unconditional    mean squared error is still given by (2.17). Similarly, when the
disturbances   are not normal, expression (2.20) can be interpreted      as the linear
projection of yt +m on 5, and a constant, with (2.21) its unconditional mean squared
error. Thus, while the Kalman filter forecasts need no longer be optimal for systems
that are not normal, no other forecast based on a linear function of & will have
a smaller mean squared error [see Anderson         and Moore (1979, pp. 92298) or
Hamilton (1994, Section 13.2)]. These results parallel the Gauss-Markov       theorem
for ordinary least squares regression.



2.6.     Time-varying coefficient models

The analysis above treated the coefficients of the matrices F, Q, A, H and R as
known constants. An interesting generalization obtains if these are known functions
of n,:




       yt = a(~,)+ CHbJ1’5,+ w,,                                                       (2.26)
       E(w,w:ln,, r,- 1) = W,).

Here F(.), Q(.), H(.) and R( .) denote matrix-valued      functions of x, and a(.) is an
(n x 1) vector-valued   function of x,. As before, we assume that, apart from the
possible conditional heteroskedasticity    allowed in (2.26), x, provides no information
about 4, or w, for any t beyond that contained in c,_ r.
   Even if u, and w, are normal, with x, stochastic the unconditional          distributions
of 4, and yt are no longer normal. However, the system is conditionally               normal
in the following sense.3 Suppose that the distribution       of 4, conditional     on &_ 1 is
taken to be N(&I,P,,t_,).       Then 4, conditional      on x, and &t has the same
distribution.  Moreover, conditional     on x,, all of the matrices can be treated as
deterministic.  Hence the derivation    of the Kalman filter goes through essentially
as before, with the recursions (2.16) and (2.17) replaced with

       s t+Iit= W&        - I + FW’,I, - 1H(xt)1CHWI’~,,,- ,H(x,)+ R(4) - ’
                  x {u, - 44 - CWx,)l’tt,,-J,                                          (2.27)

       P t+ I,( = F(x,)Pt,,- 1F(x,)l-   (F(-q)Pt,,- ~H(n,)CCWxt)l’f’t~t-
                                                                     ,4x,)   + R(xt)l-i
                 x CfWJl’f’+ - 1CF(41’) + QW                                           (2.28)

  3See Theorem 6.1 in Tjestheim     (1986) for further discussion.
3054                                                                         J.D.Hamilton


   It is worth noting three elements of the earlier discussion that change with
time-varying parameter matrices. First, the distribution calculated for the initial
state in (2.7) and (2.8) is only valid if F and Q are fixed matrices. Second,
m-period-ahead forecasts of y,,, or &,., for m > 1 are no longer simple to
calculate when F, H or A vary stochastically; Doan et al. (1984) suggested approxi-
mating W, + 2 Iyl,yt  - l,...,~l)with E(y,,21~,+t,~,,...,~l)  evaluated al yrir =
E(Y,+,~Y,,Y,-I,...,yl).Finally, if u, and W, are not normal, then the one-period-
ahead forecasts Et+Ilf and 9,+ Ilt no longer have the interpretation as linear
projections, since (2.27) is nonlinear in x,.
   An important application of a state-space representation with data-dependent
parameter matrices is the time-varying coefficient regression model

       Y, =   xi@,
                +w   f’
                                                                                   (2.29)

Here & is a vector of regression coefficients that is assumed to evolve over time
according to

       &+I-@=I;tSI-h+vt+v                                                          (2.30)

Assuming the eigenvalues of F are all inside the unit circle, fi has the interpretation
as the average or steady-state coefficient vector. Equation (2.30) will be recognized
as a state equation of the form of (2.1) with 4, = Vpt- $). Equation (2.29) can then
be written as

       Yt =   4 -I-x:5*+ w,,                                                       (2.31)

which is in the form of the observation equation (2.26) with a(%,)= X$ and
[L&J] = xi. Higher-order dynamics for /It are easily incorporated by, instead,
defining 4: = [(B - @,‘, (B,_ 1 - @)‘,. . . , c/pt_ p+ 1 - j?,‘] as in Nicholls and Pagan
(1985, p. 437).
   Excellent surveys of time-varying parameter regressions include Raj and Ullah
(1981), Chow (1984) and Nicholls and Pagan (1985). Applications to vector auto-
regressions have been explored by Sims (1982) and Doan et al. (1984).


2.7.    Other extensions

The derivations above assumed no correlation between II, and VU,,though this is
straightforward to generalize; see, for example, Anderson and Moore (1979, p. 108).
Predetermined or exogenous variables can also be added to the state equation with
few adjustments.
   The Kalman filter is a very convenient algorithm for handling missing
observations. If y, is unobserved for some date t, one can simply skip the updating
Ch. 50: State-Space    Models                                                       3055


equations (2.12) and (2.13) for that date and replace them with Et,*= &,_ 1 and
P,,, = P,,r_ r; see Jones (1980), Harvey and Pierse (1984) and Kohn and Ansley
(1986) for further discussion. Modifications of the Kalman filtering and smoothing
algorithms to allow for singular or infinite P,,, are described in De Jong (1989, 1991).


3.     Statistical    inference about unknown parameters using the Kalman filter

3.1.     Maximum       likelihood   estimation

The calculations described in Section 2 are implemented by computer, using the
known numerical values for the coefficients in the matrices F, Q, A, H and R.
When the values of the matrices are unknown we can proceed as follows. Collect
the unknown elements of these matrices in a vector 8. For example, to estimate
theARMA(p,p-l)process(1.15)-(1.16),8=($,,4,             ,..., 4p,01,02 ,..., Bp_rr~,~)‘.
Make an arbitrary initial guess as to the value of t9, denoted 0(O), and calculate
the sequences {&- r(@(‘))}T=1 and {Pt,t_,(B(o))}t’E1 that result from this value in
(2.16) and (2.17). Recall from (2.11) that if the data were really generated from the
model (2.1)-(2.2) with this value of 0, then

       _hbt,r14e(0) - w4oW, 409(o))),                                               (3.1)

where

       p,(e(O))= p(e(o))]k, + [H(e(O))]&_ 1(8(O)),                                  (3.2)

       qe(O)) = pz(e(o))]~p,,,_ ,(e(O))] [qe(O))] + R(e(O)).                        (3.3)

The value of the log likelihood is then


        f     logf(y,lx,,r,_,;e(O))=      -$i09(27+:$     iOglzt(e(0))l
        t=1


               -   f,flh - ~vWi~~w(o9i - lb, -)u,iw
                                                I.                                  (3.4)


which reflects how likely it would have been to have observed the data if 0(O)were
the true value for 8. We then make an alternative guess 0(l) so as to try to achieve
a bigger value of (3.4), and proceed to maximize (3.4) with respect to 8 by numerical
methods such as those described in Quandt (1983), Nash and Walker-Smith (1987)
or Hamilton (1994, Section 5.7).
   Many numerical optimization techniques require the gradient vector, or the
derivative of (3.4) with respect to 0. The derivative with respect to the ith element
of 8 could be calculated numerically by making a small change in the ith element
Ch. 50: State-Space     Models                                                                      3057


The vector of parameters     to be estimated is 8 = (B’, 19r,8,, a)‘. By making an
arbitrary guess4 at the value of 8, we can calculate the sequences {&_,(B)}T=,
and (ptlt- ,(W>T= r in (2.16) and (2.17). The starting     value for (2.16) is the
unconditional  mean of er,

                                    0
       s^,,,
          =E      EtY1
                    =
                 ; Et-2

while (2.17) is started
                            II-1    0
                                    0
                                         )




                                 with the unconditional         variance,



       P,,,=E    ; &,-I
                       Et


                      5 - 2
                              1
                              [E,       Et_1    Et_21 = : 0
                                                           a* 0

                                                           0
                                                               a2 0
                                                                0
                                                                     0


                                                                    i72
                                                                          1
From these sequences,               u(e)       and E,(0)   can be calculated   in (3.2) and (3.3), and
(3.4) then provides

       log f(YT,YT-l,...,YlIXT,XT-1,...,Xl;~).                                                      (3.7)

Note that this calculation   gives the exact log likelihood, not an approximation,
and is valid regardless of whether 8, and e2 are associated with an invertible
MA(2) representation.    The parameter estimates j, 8r, 8, and b are the values that
make (3.7) as large as possible.



3.2.    Identijication

The maximum likelihood estimation           procedure, just described, presupposes     that
the model is identified, that is, it assumes that a change in any of the parameters
would imply a different probability       distribution   for {y,},“, 1.
   One approach to checking for identification         is to rewrite the state-space model
in an alternative form that is better known to econometricians.         For example, since
the state-spacemode1(1.15)-(1.16)isjust        another way ofwritingan     ARMA(p,p - 1)
process, the unknown parameters (4r,. . . ,4p, O1,. . . ,8,_ 1, p, a) can be consistently
estimated    provided    that the roots of (1 + t9,z + 0,z2 + ... + 8,_ r.zp-r) = 0 are
normalized     to lie on or outside the unit circle, and are distinct from the roots of
(1 -C#J1z-CJS2z2- ... - 4,~“) = 0 (assuming these to lie outside the unit circle as
well). An illustration  of this general idea is provided in Hamilton (1985). As another

   4Numerical algorithms are usually much better behaved if an intelligent initial guess for 0”’ is used.
A good way to proceed in this instance is to use OLS estimates of (3.5) to calculate an initial guess
for /?, and use the estimated variance sz and autocorrelations          PI and p2 of the OLS residuals to
construct initial guesses for O,, O2 and c using the results in Box and Jenkins (1976, pp. 187 and 519).
3058                                                                                     J.D. Hamilton


example,      the time-varying      coefficient   regression   model (2.31) can be written

       Yt =   x:s+4,                                                                             (3.8)


where




If X, is deterministic, equation (3.8) describes a generalized least squares regression
model in which the varianceecovariance          matrix of the residuals can be inferred
from the state equation describing 4,. Thus, assuming that eigenvalues of F are all
inside the unit circle, p can be estimated consistently       as long as (l/T)CT= ix&
converges to a nonsingular      matrix; other parameters can be consistently estimated
if higher moments of x, satisfy certain conditions      [see Nicholls and Pagan (1985,
p. 431)].
    The question of identification      has also been extensively    investigated in the
literature on linear systems; see Gevers and Wertz (1984) and Wall (1987) for a
survey of some of the approaches, and Burmeister et al. (1986) for an illustration
of how these results can be applied.



3.3.    Asymptotic     properties    of maximum likelihood       estimates

Under suitable conditions,      the estimate 8 that maximizes (3.4) is consistent and
asymptotically   normal. Typical conditions        require 8 to be identified, eigenvalues
of F to be inside the unit circle, the exogenous variable x, to behave asymptotically
like a full rank linearly nondeterministic       covariance-stationary    process, and the
true value of 8 to not fall on the boudary of the allowable parameter space; see
Caines (1988, Chapter 7) for a thorough discussion. Pagan (1980, Theorem 4) and
Ghosh (1989) demonstrated        that for particular examples of state-space models


                                                                                                (3.9)


where $ZDST is the information    matrix           for a sample    of size T as calculated     from
second derivatives of the log likelihood            function:



       x 2D.T =                                                                                (3.10)


Engle and Watson          (1981) showed       that the row i, column         j element   of $2D.T is
Ch. 50: State-Space       Models                                                  3059


given by




                                                                                (3.11)


One option is to estimate (3.10) by (3.11) with the expectation operator dropped
from (3.11). Another common practice is to assume that the limit of $ZD,T as
T+ co is the same as the plim of

                 1 T a2w-(~,Ir,-,~-0)
      3-g                                                                       (3.12)
                                     aeaef
                                                       3

                      f   1                         e=ti

which can be calculated analytically or numerically by differentiating (3.4). Reported
standard errors for 8 are then square roots of diagonal elements of (l/T)(3)-‘.
   It was noted above that the Kalman filter can be motivated by linear projection
arguments even without normal distributions. It is thus of interest to consider as
in White (1982) what happens if we use as an estimate of 8 the value that maximizes
(3.4), even though the true distribution is not normal. Under certain conditions
such quasi-maximum likelihood estimates give consistent and asymptotically
normal estimates of the true value of 0, with


      Jm-            4) L          NO, C92d (p2,]      - ‘),                    (3.13)

where $2D is the plim of (3.12) when evaluated at the true value 0, and .YoP is
the limit of (l/T)CT, 1[s,(&,)] [s,(B,)]’ where


      mu = ai0gf(.hIr,-,~-0)
                 [  ae                       I 1.
                                             e=eo

   An important hypothesis test for which (3.9) clearly is not valid is testing the
constancy of regression coefficients [see Tanaka (1983) and Watson and Engle
(1985)]. One can think of the constant-coefficient model as being embedded as a
special case of (2.30) and (2.31) in which E(u,+ lu:+ J = 0 and /I1 = $. However,
such a specification violates two of the conditions for asymptotic normality
mentioned above. First, under the null hypothesis Q falls on the boundary of the
allowable parameter space. Second, the parameters of Fare unidentified under the
null. Watson and Engle (1985) proposed an appropriate test based on the general
procedure of Davies (1977). The results in Davies have recently been extended by
Hansen (1993). Given the computational demands of these tests, Nicholls and
3060                                                                         J.D. Hamilton


Pagan (1985, p. 429) recommended   Lagrange multiplier tests for heteroskedasticity
based on OLS estimation    of the constant-parameter   model as a useful practical
approach.  Other approaches    are described in Nabeya and Tanaka (1988) and
Leybourne  and McCabe (1989).


3.4.   Confidence    intervals for smoothed estimates and forecasts

Let &,(0,) denote the optimal inference about 4, conditional          on obervation     of
all data through date T assuming that 0, is known. Thus, for t d T, {,IT(OO) is the
smoothed inference (2.22) while for r > T, &,(O,,) is the forecast (2.18). If 0, were
known with certainty, the mean squared error of this inference, denoted PZIT(&,),
would be given by (2.23) for r d T and (2.19) for t > T.
   In the case where the true value of 0 is unknown,          this optimal inference is
approximated    by &,(o) for e^ the maximum likelihood estimate. To describe the
consequences    of this, it is convenient    to adopt the Bayesian perspective that 8
is a random variable. Conditional      on having observed all the data &-, the posterior
distribution  might be approximated       by

       elc,-   N(@(lIT)@-‘).                                                         (3.14)




where Etilr,(‘) denotes the expectation    of (.) with respect to the distribution     in
(3.14). Thus the mean squared error of an inference based on estimated parameters
is the sum of two terms. The first term can be written as E,,c,{P,,T(0)},   and might
be described as “filter uncertainty”.   A convenient    way to calculate this would
be to generate, say, 10,000 Monte Carlo draws of 8 from the distribution          (3.14),
run through the Kalman filter iterations      implied by each draw, and calculate
the average value of PrIT(0) across draws. The second term, which might be
described as “parameter uncertainty”,   could be estimated from the outer product of
[&.(ei) - &,(i!j)] with itself for the ith Monte Carlo draw, and again averaging
across Monte Carlo realizations.
   Similar corrections to (2.21) can be used to generate a mean squared error for
the forecast of y,,, in (2.20).


3.5.    Empirical   application - an analysis of the real interest rate

As an illustration   of these methods, consider Fama and Gibbons’s           (1982) real
interest rate example discussed in equations (1.21) and (1.22). Let y, = i, - 7c, denote
Ch. 50: State-Space Models                                                                              3061


           IO.0

            75

            50

            2.5
  w
            0.0

           -2.5
                                                                                                          I
                      60      63     66       69     72     75      78      81   84    87     90

          2.00
          1.75 -
          I.50 -
          1.25 -
          1.00 -
   a
          075         '!____________________------__-_______________________~'
          050     -
          025
          0.00
                  -
                                                                                                         I
                      60     63      66       69    72      75      78     Eli   84    87     90




   9        5.0

   z
   8
   is
           -2.5 -

           -5.0
                      60      63     66       69     72     75      78      81   84    87     90


Figure 1. Top panel. Ex post real interest rate for the United States, qua;terly from 1960:1 to_ 1992:III,
quoted at an annual rate. Middle panel. F$er_uncertainty.   Solid line: P,,,(e). Dashed line: PflT(B). Bottom
            panel. Smoothed inferences t,,(0) along with 95 percent confidence intervals.




the observed ex post real interest rate, where i, is the nominal interest rate on
3-month U.S. Treasury bills for the third month of quarter t (expressed at an
annual rate) and rr, is the inflation rate between the third month of quarter t and
the third month oft + 1, measured as 400 times the change in the natural logarithm
of the consumer price index. Quarterly data for y, are plotted in the top panel of
Figure 1 for t= 1960:1 to 1992:III.
   The maximum      likelihood estimates for the parameters    of this model are as
follows, with standard errors in parentheses,

        & = 0.9145,_ 1 + u,               8” = 0.977
           (0.041)                            (0.177)
        y,=1.43+r,+w,                     6, = 1.34 .
            (0.93)                            (0.14)
3062                                                                          J.D. Hamilton


Here the state variable 5, = i, - 71:-p has the interpretation       as the deviation of
the unobserved     ex ante real interest rate from its population   mean p.
   Even if the population      parameter    vector 8= (4, o,,~, g,J’ were known with
certainty, the econometrician     still would not know the value of the ex ante real
interest rate, since the market’s expected inflation 7~: is unobserved.    However, the
econometrician      can make an educated guess as to the value of 5, based on
observations    of the ex post real rate through date t, treating the maximum
likelihood estimate aas if known with certainty. This guess is the magnitude &,(a),
and its mean squared error P,,,(a) is plotted as the solid line in the middle panel
of Figure 1. The mean squared error quickly asymptotes to




which is a fixed constant owing to the stationarity   of the process.
   The middle panel of Figure. 1 also plots the mean squared error for the smoothed
inference, PrIT(a). For observations  in the middle of the sample this is essentially
the mean squared error (MSE) of the doubly-infinite     projection




The mean squared       error for the smoothed      inference  is slightly higher for
observations  near the beginning of the sample (for which the smoothed inference
is unable to exploit relevant data on y,,y_ I,. . .) and near the end of the sample
(for which knowledge of YT+ r, Y~+~, . . . would be useful).
   The bottom panel of Figure 1 plots the econometrician’s       best guess as to the
value of the ex ante real interest rate based on all of the data observed:




Ninety-five percent confidence intervals for this inference that take account of both
the filter uncertainty     P1,r(a) and parameter uncertainty      due to the random nature
of 8 are also plotted. Negative ex ante real interest rates during the 1970’s and
very high ex ante real interest rates during the early 1980’s both appear to be
statistically  significant.    Hamilton    (1985) obtained    similar results from a more
complicated     representation     for the ex ante real interest rate.



4.     Discrete-valued   state variables

The time-varying    coefficients model was advocated by Sims (1982) as a useful way
of dealing with changes occurring all the time in government  policy and economic
institutions. Often, however, these changes take the form of dramatic, discrete
events, such as major wars, financial panics or significant changes in the policy
Ch. 50: State-Space Models                                                                    3063


objectives of the central bank or taxing authority. It is thus of interest to consider
time-series models in which the coefficients change only occasionally       as a result
of such changes in regime.
   Consider an unobserved       scalar s, that can take on integer values 1,2,. . . , N
corresponding    to N different possible regimes. We can then think of a time-varying
coefficient regression model of the form of (2.29),

       Yt = x:Bs,
                + wt                                                                          (4.1)

for x, a (k x 1) vector of predetermined         or exogenous      variables and w, - i.i.d.
N(0, a’). Thus in the regime represented by s, = 1, the regression coefficients are
given by /?r, when s, = 2, the coefficients are f&, and so on. The variable s,
summarizes    the “state” of the system. The discrete analog to (2.1), the state
transition equation for a continuous-valued         state variable, is a Markov chain in
which the probability    distribution   of s, + 1 depends on past events only through
the value of s,. If, as before, observations     through date t are summarized      by the
vector




the assumption      is that

       Prob(s,+,=     jlst=i,st_l=il,st_Z=i2,...,&)=Prob(st+i=jls,=i)

                                                                 - pij.                       (4.2)

When this probability    does not depend on the previous state (pij = pu for all i, j,
and I), the system (4.1)-(4.2) is the switching regression model of Quandt (1958);
with general transition   probabilities it is the Markov-switching   regression model
developed by Goldfeld and Quandt (1973) and Cosslett and Lee (1985). When x,
includes lagged values of y, (4.1)-(4.2) describes the Markov-switching      time-series
model of Hamilton (1989).



4.1.    Linear state-space          representation   of the Markov-switching   model

The parallel between (4.2))(4.1) and (2.1))(2.2) is instructive.               Let F denote     an
(N x N) matrix whose row i, column j element is given by pji:

            r hl    P21       ...     PNll

       F=     P12   P22       “’      PN2
                                        .    .
                     .        ...       .


            1 PIN   P2N       “.      PNN]
3064                                                                              J.D. Hamilton


Let e, denote the ith column of the (N x N) identity matrix and construct an
(N x 1) vector 4, that is equal to e, when s, = i. Then the expectation of &+ 1 is an
(N x 1) vector whose ith element is the probability that s,, 1 = i. In particular, the
expectation of &+r conditional on knowing that s, = 1 is the first column of F.
More generally,

       E(5*+,l51,5r-l,...,51~a)=F5~.                                                      (4.4)

The Markov chain (4.2) thus implies the linear state equation

                                                                                          (4.5)

where u,, 1 is uncorrelated with past values of 4,y or x.
  The probability that s,, 2 = j given s, = i can be calculated from

       Probh.2    =jlSt   =   i) =   PilPlj   +   Pi2P2j   +   “’   +   PiNPNj


                                =    Pljpil   +   PZjPi2   +   “’   +   PNjPiNr



which will be recognized as the row j, column i element of F2. In general, the
probability that st+,,, = j given s, = i is given by the row j, column i element of F”,
and



  Moreover, the regression equation (4.1) can be written

       y, =   x:q + w,,                                                                   (4.7)

where B is a (k x N) matrix whose ith column is given by pi. Equation (4.7) will
be recognized as an observation equation of the form of (2.26) with [H(x,)]’ = x:B.
   Thus the model (4.1)-(4.2) can be represented by the linear state-space model
(2.1) and (2.26). However, the disturbance in the state equation u,, 1 can only take
on a set of N2 possible discrete values, and is thus no longer normal, so that the
Kalman filter applied to this system does not generate optimal forecasts or
evaluation of the likelihood function.


4.2.    OptimalJilter when the state variable follows a Markov chain

The Kalman filter was described above as an iterative algorithm for calculating
the distribution of the state vector 4, conditional on 5,-i. When 4, is a continuous
normal variable, this distribution is summarized by its mean and variance. When
the state variable is the discrete scalar s,, its conditional distribution is, instead,
Ch. 50: State-Space Models                                                                     3065


summarized       by

     Prob(s,=ilG_,)             for i=1,2   ,...,   N.                                        (4.8)

Expression (4.8) describes a set of N numbers which sum to unity. Hamilton (1989)
presented an algorithm for calculating            these numbers, which might be viewed as
a discrete version of the Kalman filter. This is an iterative algorithm whose input
at step t is the set of N numbers             {Prob(s, = iIT,_ ,)}y=, and whose output is
{Prob(s,+, = i 1&)}r= 1. In motivating         the Kalman filter, we initially assumed that
the values of F, Q, A, Hand R were known with certainty, but then showed how
the filter could be used to evaluate the likelihood function and estimate these
parameters.     Similarly, in describing the discrete analog, we will initially assume
that the values of j?l,j?Z,. . . ,&, CJ,and (pij}Tj= 1 are known with certainty, but will
then see how the filter facilitates maximum likelihood estimation of these parameters.
A key difference is that, whereas the Kalman filter produces forecasts that are
linear in the data, the discrete-state       algorithm, described below, is nonlinear.
   If the Markov chain is stationary            and ergodic, the iteration to evaluate (4.8)
can be started at date t = 1 with the unconditional          probabilities.  Let ni denote the
unconditional     probability     that s, = i and collect these in an (N x 1) vector a-
(XI,?,...,    7~~)).Noticing that scan be interpreted as E(&), this vector can be found
by taking expectations        of (4.5):

     n= Fx.                                                                                   (4.9)

Although this represents a system of N equations in N unknowns,           it cannot be
solved for n; the matrix (IN - F) is singular, since each of its columns sums to zero.
However, if the chain is stationary    and ergodic, the system of (N + 1) equations
represented by (4.9) along with the equation

     l’a=    1                                                                               (4.10)

can be solved uniquely for the ergodic probabilities  (here “1” denotes                an (N x 1)
vector, all of whose elements are unity). For N = 2, the solution is

     711 =   (1- P22Ml- Pll + 1 - PA                                                         (4.11)

     x2 = (1- Pl Ml            - Pll + 1- P22).                                              (4.12)

A general solution       for scan    be calculated       from the (N + 1)th column   of the matrix
(A’A)- ‘A’ where



                               1
                      Z, - F
       A    =
     ,N+*,xN [          1’      .
3066                                                                                    J.D. Hamilton


  The input for step t of the algorithm                 is (Prob(s, = i/T,_ r)}y=,, whose ith entry
under the assumption   of predetermined                  or exogenous x, is the same as

       Prob(s, = i/x,, G-r).                                                                   (4.13)

The assumption          in (4.1) was that



                                                                        1
                                  1                     - (Y, - $Bi)’
       f(~,ls,   = Otr G-i) = (2Zca2)1,2 exp                2oZ                                (4.14)
                                                    [

 For given i, xf,yt,/(, and C, the right-hand              side of (4.14) is a number that can be
calculated. This number can be multiplied                  by (4.13) to produce the likelihood of
jointly observing s, = i and y,:




Expression       (4.15) describes        a set of N numbers      (for i = 1,2,. . . , N) whose sum is
the density      of y, conditional        on x, and &_ 1:


       f(~,lx,~LJ=          f     f(Yt~st=ilxt~Ld                                              (4.16)
                           i=l



If each of the N numbers in (4.15) is divided by the magnitude in (4.16), the result
is the optimal inference about s, based on observation  of IJ,= {yt, xr, J, _ i}:

                         f(~,,s,=    il~t~~-l)
       Prob(s, = i) &) = -                                                                     (4.17)
                             f(YtIx,~L,)       .

  The output         for thejth      iteration   can then be calculated      from


       Prob(s,+,     = jl&)=        2 Prob(s,+,     =j,s,=il&)
                                   i=l



                                 = i$l Prob(s,+,    = j/s, = i, &),Prob(s,   = iI&)


                                 = itI Pij. Prob(s,= iI&).                                     (4.18)


   To summarize, let &- 1 denote an (N x 1) vector whose ith element represents
Prob(s, = iIT,- J and let fit denote an (N x 1) vector whose ith element is given by
(4.14). Then the sequence {&,_ , },‘=1 can be found by iterating on
Ch. 50: State-Space Models                                                                                           3067


                                                                                                                   (4.19)


where “0” denotes element-by-element        mu_ltiplication and 1 represents an (N x 1)
vector of ones. The iteration is started with Ljl,O= ICwhere 1cis given by the solution
to (4.9) and (4.10). The contemporaneous        inference G$ is given by (&,      0 ?,I*)/
V’(&l,-    10    %)I.


4.3.    Extensions


The assumption that y, depends only on the current value s, of a first-order Markov
chain is not really restrictive. For example, the model estimated in Hamilton (1989)
was

       Y,-Ps;=4(Yr-l-P*
                                         St- 1
                                                 )+~*(Y,-z-~,:_l)+...+~p(Yr_p-~,*
                                                                                                       f-P
                                                                                                             )++
                                                                                                                   (4.20)

where SF can take on the values 1 or 0, and follows a Markov chain with
Prob(s:+ 1 = jlsf = i) = p$. This can be written in the form of (4.1)-(4.2) by letting
N = 2p+ ’ and defining

        s, = 1             if       (ST = l,s:_,       = 1,. . . ,    and         ST_, = l),
        s, = 2             if       (ST = O,s:_‘, = 1,. . .,          and         s:_~ = l),
                                                                                                                   (4.21)
        s,=N-        1     if       (SF= l,s:_,        =O,...,        and         s*t_-p=O)’
        s, = N             if       (s:=O,s,*_,        =0 ,...,       and         s:_~=O).


For illustration,         the matrix          of transition       probabilities        when p = 2 is


                  -p:1           0       0         0      pT1        0       0         0
                    P:O          0       0         0      p&         0       0         0

                     0          p&       0         0        0        p&      0         0

                     0          PO*0     0         0        0        p&      0         0
         F=                                                                                                        (4.22)
       (8 x 8)       0          0       P:l        0        0        0      P;l        0
                     0          0       p:o        0        0        0      Pro        0
                     0          0        0        p&       0         0       0       p&

                     0          0        0        p&       0         0       0       p&
3068                                                                                    J.D. Hamilton


   There is also no difficulty in generalizing  the above method to (n x 1) vector
processesyt with changing coefficients or variances. Suppose that when the process
is in state s,,

       Yt ISt,1, - wQf        52,)                                                               (4.23)

where n;, for example, is an (n x k) matrix of regression               coefficients    appropriate
when s, = 1. Then we simply replace (4.14) with



                                                                                               1)
                                          1
       .f‘(~,ls,=i,x~,i-~)=(~~)“,~,~~,~,~exp          - $,   - qx,),n       ,: I(& - n;x,,
                                                  [
                                                                                                 (4.24)

with other details of the recursion identical.
   It is more difficult to incorporate changes in regime in a moving average process
such as y, = E, + Os.s,_ i. For such a process the distribution  of y, depends on the
completehistory(i,_,,y,_,        ,..., y,,s:,s:_,   ,... , ST),and N, in a representation   such
as (4.21), grows with the sample size T. Lam (1990) successfully estimated a related
model by truncating       the calculations     for negligible probabilities.   Approximations
to the optimal filter for a linear state-space model with changing coefficient matrices
have been proposed by Gordon and Smith (1990), Shumway and Stoffer (1991)
and Kim (1994).



4.4.    Forecasting

Applying the law of iterated expectations             to (4.6), the optimal      forecast     of &+,
based on data observed through date t is

       ~(5t+,lr,) = FrnE,r,                                                                     (4.25)

where I$, is the optimal inference calculated by the filter.
  As an example of using (4.25) to forecast yt, consider again the example                   in (4.20).
This can be written as


       Y, = Ps; + z,,                                                                           (4.26)


where z, = 4iz,-i  + &z,_~ + ... + 4pzt-p + E,. If {SF} were observed,                 an m-period-
ahead .forecast of the first term in (4.26) turns out to be


       E(~~~+_ls:)=~,+{~l+~“(s:-n,)}(~,-~,),                                                     (4.27)
Ch. 50: State-Space    Models                                                                       3069


where ;1= (- 1 + PT1 + p&J and rrI = (1 - p&,)/(1 - ~7~ + 1 - P&). If ~7~ and P&
are both greater than i, then 0 < ,I < 1 and there is a smooth decay toward the
steady-state probabilities. Similarly, the optimal forecast of z,+, based on its own
lagged values can be deduced from (1.9):

                                                                                                  (4.28)


where e; denotes the first row of the (p x p) identity matrix and @ denotes the
(p x p) matrix on the right-hand side of (1.12). Recalling that z, = y, - psz is known
if y, and ST are known,          we can substitute      (4.27) and (4.28) into (4.26) to conclude


       E(Yt+,l%       r,) = PO + 1%+ JrnK- “1Wl -PO)
                            + e;@Y(Y,      -P,:)     b-1     -P,:_l) ...       &J+1       - Ps;_p+lu.
                                                                                                  (4.29)

Since (4.29) is linear in (ST}, the forecast based solely on the observed                     variables
& can be found by applying the law of iterated expectations     to (4.29):


       E(y,+,IG)      = cl0 + {x1 + AmCProb(s: = 1 I&) - rrJ}(~,             - pO) + e;@“_F(,     (4.30)


where the ith element           of the (p x 1) vector j, is given by


       .Fit=Yt-i+l     - p. Prob(s,*_i+ r =Ol&)-pr           Prob($-i+r= 114).

   The ease of forecasting makes this class of models very convenient for rational-
expectations  analysis; for applications see Hamilton (1988), Cecchetti et al. (1990)
and Engel and Hamilton (1990).



4.5.     Smoothed     probabilities

We have assumed that the current value of s, contains all the information     in the
history of states through date t that is needed to describe the probability laws for
y and s:




       Prob(s,+,      =jls,=i)=Prob(s,+,           =j(sf=i,sf_-l    =it_l,...,sl      =il).

Under      these assumptions       we have, as in Kitagawa         (1987, p, 1033) and Kim (1994),
                                                                                              J.D. Hamilton
3070


that
       Prob(s,=j,s,+,=ilr,)=Prob(s,+,=ilrr)Prob(s,=jls,+,=i,r,)
                                         =Prob(s,+,=il&)Prob(s,=jls,+r=i,&)
                                                                    Prob(s, = j, s,, 1 = iI 4,)
                                         = Prob(s,+,       = iI&)
                                                                       Prob(s,+r = iI&)
                                                                    Prob(s,= jl<,)Prob(s,+ 1=ils, = j)
                                         = Prob(s,+, = il&)
                                                                              Prob(s,+, = iI&)                ’
                                                                                                      (4.31)

Sum (4.31) over i= l,..., N and collect the resulting equations for j = 1,. . . , N in
a vector EtIT,whose jth element is Prob(s, = jlcr):

                                                                                                      (4.32)

 where “( + ),, denotes element-by-element division. The smoothed probabilities are
 thus found by iterating on (4.32) backwards for t = T- 1, T- 2,. . . , 1.


4.6.    Maximum            likelihood   estimation

 For given numerical values of the transition probabilities in F and the regression
 parameters such as (ZI,, . . . , I&, 52,, . , . , L2,) in (4.24), the value of the log likelihood
 function of the observed data is CT’ 1log f(y,Ix,, &_ r) for f(y,Ix,, &_ J given by
 (4.16). This can be maximized numerically. Again, the EM elgorithm is often an
 efficient approach [see Baum et al. (1970), Kiefer (1980) and Hamilton (1990)]. For
 the model given in (4.24), the EM algorithm is implemented by making an arbitrary
 initial guess at the parameters and calculating the smoothed probabilities. OLS
 regression of y,,/Prob(s, = 1 I CT) on I,,,/ Prob(s, = 1 I&.) gives a new estimate of
 I7r and a new estimate of J2, is provided by the sample variance matrix of these
 OLS residuals. Smoothed probabilities for state 2 are used to estimate ZI, and
 SL,, and so on. New estimates for pij are inferred from


                5 Prob(s,=j,s,_,            =il&)
                                                     1
       Pi’=
          [f:
               t=2



                            Prob(s,_I =il&)]           ’
                     t=2



 with the probability of the initial state calculated from pi = Prob(s, = iI &.) rather
 than (4.9)-(4.10). These new parameter values are then used to recalculate the
 smoothed probabilities, and the procedure continues until convergence.
Ch. 50: State-Space   Models                                                                            3071


   When the variance depends on the state as in (4.24), there is an essential
singularity in the likelihood function at 0, = 0. This can be safely ignored without
consequences;   for further discussion, see Hamilton (199 1).



4.7.   Asymptotic      properties     of maximum        likelihood estimates

It is typically assumed that the usual asymptotic        distribution   theory motivating
(3.9) holds for this class of models, though we are aware of no formal demonstration
of this apart from Kiefer’s (1978) analysis of i.i.d. switching regressions. Hamilton
(1993) examined specification tests derived under the assumption that (3.9) holds.
   Two cases in which (3.9) is clearly invalid should be mentioned.                First, the
maximum       likelihood  estimate flij may well be at a boundary         of the allowable
parameter space (zero or one), in which case the information          matrix in (3.12) need
not even be positive definite. One approach in this case is to regard the value of
Pij as fixed at zero or one and calculate the information     matrix with respect to other
parameters.
   Another case in which standard asymptotic distribution theory cannot be invoked
is to test for the number of states. The parameter         plZ is unidentified     under the
null hypothesis that the distribution      under state one is the same as under state
two. A solution to this problem was provided by Hansen (1992). Testing the specifi-
cation with fewer states for evidence of omitted heteroskedasticity         affords a simple
alternative.



4.8.   Empirical      application ~ another look at the real interest rate

We illustrate these methods with a simplified version of Garcia and Perron’s (1993)
analysis of the real interest rate. Let y, denote the ex post real interest rate data
described in Section 3.5. Garcia and Perron concluded that a similar data set was
well described by N = 3 different states. Maximum likelihood estimates for our
data are as follows, with standard errors in parentheses:5

         Y,~s, = 1 - N( 5.69 , 3.72 ),
                          (0.41) (1.11)

         y,ls,=2-N(        1.58,     1.93),
                          (0.16) (0.32)

         y,ls, = 3 - N( - 1.58 , 2.83 ),
                               (0.30) (0.72)

   ‘Garcia and Perron also included     p = 2 autoregressive   terms as in (4.20), which were omitted   from
the analysis described here.
3072                                                                                                                         J.D. Hamilton


                -       0.950             0         0.036
                        (0.044)                     (0.030)

                        0.050        0.990               0
        F=              (0.044)     (0.010)

                           0         0.010          0.964
                                    (0.010)         (0.030).

The unrestricted    maximum     likelihood   estimates for the transition  probabilities
occur at the boundaries    with fir3 = Fiji = flS2 = 0. These values were then imposed
a priori and derivatives were taken with respect to the remaining free parameters
8= (~~,P~,~~,u:,cJ$,    ~~,p~~,p~~,p~J     to calculate standard errors.




         IO.0
          75    .-
                                                                                                      _   _         -
          5.0 -
          25-                                  --   _-              .                                                              _-
          0.0 -
                                                                           _        _     ___
         -2.5 -            VtiA
         -5.0       ’
                           60      63         66     69         72             7s           78      BI        84        87    90




                           60       63        66      69            72         75           78       81       El4       87    90




                           60       63        66      69            72         75           78       81       84        87    90




                           60       63        66      69            72         75           78       81       84        87    90


Figure 2. Top panel. Solid               line: ex post       real        interest       rate.    Dashed   line: pi6^i,,, where          Ji,, = I if
Prob(s, = i(&; 8) > 0.5           and c?~,,= 0 otherwise.       Second panel. Prob(_, = I 1I&; 6). Third                                    panel.
                                    Prob(s, = 21 CT; a). Fourth panel. Prob(s, = 3 1CT;0).
Ch. 50: State-Space Models                                                             3073


    Regime 1 is characterized    by average real interest rates in excess of 5 percent,
while regime 3 is characterized    by negative real interest rates. Regime 2 represents
the more typical experience of an average real interest rate of 1.58 percent.
    The bottom three panels of Figure 2 plot the smoothed probabilities        Prob(s, =
i( CT; 8) for i = 1,2 and 3, respectively. The high interest rate regime lasted from
1980:IV to 1986:11, while the negative real interest rate regime occurred during
1972:,3 to 1980:III.
    Regime 1 only occurred once during the sample, and yet the asymptotic standard
errors reported above suggest that the transition        probability  @ii has a standard
error of only 0.044. This is because there is in fact not just one observation      useful
for estimating pi 1, but, rather, 23 observations.   It is exceedingly unlikely that one
could have flipped a fair coin once each quarter from 1980:IV through 1986:11
and have it come up heads each time; thus the possibility that pii might be as
low as 0.5 can easily be dismissed.
    The means fli, & and f13 corresponding       to the imputed regime for each date
are plotted along with the actual data for y, in the top panel of Figure 2. Garcia
and Perron noted that the timing of the high real interest rate episode suggests
that fiscal policy may have been more important than monetary policy in producing
this unusual episode.



5.     Non-normal       and nonlinear state-space   models

A variety of approximating     techniques have been suggested for the case when the
disturbances   I+ and W, come from a general non-normal         distribution or when the
state or observation equations are nonlinear. This section reviews two approaches.
The first approximates   the optimal filter using a finite grid and the second is known
as the extended Kalman filter.



5.1.     Kitagawa’s grid approximation      for nonlinear,   non-normal
         state-space models

Kitagawa    (1987) suggested the following      general approach   for nonlinear   or
non-normal    filtering. Although the approach in principle can be applied to vector
systems, the notation and computations      are simplest when the observed variable
(y,) and the state variable (r,) are both scalars. Thus consider

       t If1     =dJ(5,)+~,+1~                                                        (5.1)

               Yt = 45,)+ wt.                                                         (5.2)

The disturbances         v, and w, are each i.i.d. and mutually     independent   and have
3074                                                                                   J.D. Hamilton


densities denoted q(u,) and r(wJ, respectively. These densities need not be normal,
but they are assumed to be of a known form; for example, we may postulate that
u, has a t distribution with v degrees of freedom:

       q(ut) =      c(1 + (u:/v))-(V+l)‘*,

where c is a normalizing  constant. Similarly               c$(.) and h(.) represent parametric
functions of some known form; for example,                  4(.) might be the logistic function,
in which case (5.1) would be

                               1
       5r+l=l+aexp(-_&)+u’+l’                                                                  (5.3)


   Step t of the Kalman filter accepted as input the distribution     of 5, conditional
on Li =(Y~-~,Y~-~,...,     yl)’ and produced     as output the distribution       of &+1
conditional   on 6,. Under the normality     assumption    the input distribution        was
completely summarized     by the mean &_ 1 and variance I’,,,_ 1. More generally,
we can imagine a recursion whose input is the density f(<, I&- 1) and whose output
is f(&+ 116,). These, in general, would be continuous      functions, though they can
be summarized    by their values at a finite grid of points, denoted t(O), t(l), . . . , ttN).
Thus the input for Kitagawa’s filter is the set of (N + 1) numbers


       KIr,-,)I,,=,(~)                    i=O,l,...,N                                          (5.4)

and the output is (5.4) with t replaced by t + 1.
   To derive the filter, first notice that under the assumed           structure,   5, summarizes
everything about the past that matters for y,:

       f(YtI5J       =f(Y,I5,~Ld

Thus

       f(Y*,5,lr,-l)=f(Y,I~,)f(5,Ir,-l)

                            = d-Y, -       ~(5,)l_f-(5,1
                                                     L 1)                                      (5.5)

and


       f(Ytlr,-1)       =      m f(Y,,      5,lL    AdL                                        (5.6)
                            s -Kl

Given the observed y, and the known form for I(.) and II(.), the joint density (5.5)
can be calculated for each 5, = t(‘), i = 0, 1,. . . , N, and these values can then be
Ch. 50: State-Space Models                                                                      3075


used to approximate          (5.6) by




The updated density          for 5, is obtained       by dividing   each of the N + 1 numbers     in
(5.5) by the constant        (5.7):

     fKlr,)=f(5tlYt~Ll)

               JYdtlL1)
                                                                                                (5.8)
                    f(Y,lL      1) .
  The joint    conditional      density       of 5,+ 1 and 5, is then


     f(rt+l,rtIrt)=f(5r+lI5t)f(51lT1)
                      = d5,+ 1 - 4(&)l.m,             I0                                        (5.9)

For any pair of values t(‘) and 5”’ equation (5.9) can be evaluated at 5, = 5”’ and
5, + 1 = 5”’ from (5.8) and the form df q( .) and 4( .). The recursion is completed by:


     f(5t+11Tl)l~t+,=p)= mf(5,+1,5,Ir,)I,,+,=,,j,d5,
                       s -02



                                        +f(t 1+lr51151)ls,+,=6(,,,6,=6ci~1,}3{5(i)-5(i-1)}.
                                                                                              (5.10)

  An approximation           to the log likelihood         can be calculated   from (5.6):


     logf(Yr~Yr-l~..*~         Yl) = i        h2f(Y,ILJ                                       (5.11)
                                        1=1

The maximum likelihood estimates of parameters such as a, b and v are then the
values for which (5.11) is greatest.
   Feyzioglu and Hassett (1991) provided an economic application of Kitagawa’s
approach to a nonlinear,   non-normal  state-space model.
3076                                                                                  J.D. Hamilton


5.2.    Extended      Kalman jilter

Consider        next a multidimensional    normal    state-space   model

       5*+1= 9(5,)+4+1,                                                                      (5.12)


           Yr = 44     + 45,) + WI,                                                          (5.13)

where I$: IR’-+lR’, a: Rk-+IR” and h: IR’+fR”, u,-i.i.d.                 N(O,Q) and IV,-i.i.d.
N(0, R). Suppose 4 (.) in (5.12) is replaced with a first-order         Taylor’s approximation
around 4, = &,

       5,+1=~,++,(5,-%,t)+u,+1,                                                              (5.14)

where


           4 = d&t)             @t-“$I                                                       (5.15)
       0.x 1)                 (r x r)      f &=F,,

For example, suppose          r = 1 and 4(.) is the logistic function      as in (5.3). Then (5.14)
would be given by

                      1
       5                               abexp(-b5,1J            (&-5;,1)+ur+I.                (5.16)
        f+1=1+aexp(-~~~,,)+[1+aexp(-~~~I,)]2

If the form of 4 and any parameters it depends on [such as a and b in (5.3)] are
known, then the inference &, can be constructed as a function of variables observed
at date t (&) through a recursion to be described in a moment. Thus & and 4$ in
(5.14) are directly observed at date t.
   Similarly the function h(.) in (5.13) can be linearized around I$- 1 to produce

       Yt = 44      + ht+ fq5t - Et,,-
                                    1)+ wt,                                                  (5.17)

where



        4 f h(&,,-1)
                                 Hi     =Wi)                                                 (5.18)
       (nx 1)                   (nxr)     a<:st=it,,-t
Again h, and H, are observed at date t - 1. The function a(.) in (5.13) need not be
liearized since X, is observed directly.
   The idea behind the extended Kalman filter is to treat (5.14) and (5.17) as if
they were the true model. These will be recognized as time-varying          coefficient
versions of a linear state-space model, in which the observed predetermined   variable
Ch. 50: State-Space    Models                                                                         3011


4, - @&, has been added to the state equation. Retracing the logic behind the
Kalman filter for this application, the input for step t of the iteration is again the
forecast Et,,_ 1 and mean squared error I’+ 1. Given these, the forecast of _v~is
found from (5.17):

       E(y,Ix,,r,-l)=a(x,)+h,
                        = a@,) + h(&-       1).                                                     (5.19)

The joint distribution  of 4, and y, conditional on X, and 4, _ 1 continues to be given
by (2.11), with (5.19) replacing the mean of yt and II, replacing H. The contem-
poraneous inference (2.12) goes through with the same minor modification:


       &, = &,,- 1+ J’,,,-,H,W:f’,,,- IH, + W- ‘br - 4x,) - 4$,,-                    Jl.            (5.20)

If (5.14) described      the true model,      then the optimal       forecast   of &+1 on the basis
of 6, would be




   To summarize,   step t of the extended Kalman filter uses &,, _ 1 and I’,,,_ 1 to
calculate H, from (5.18) and &, from (5.20). From these we can evaluate @t in
(5.15). The output for step t is then

       $+ 111= &,t),                                                                                (5.21)

       P~+II,=~~P,I,-,~:-(~~P,,~-,H,(H:P,,,-~H,+R)-'H:P,,~-,~:}+Q.
                                                                                                    (5.22)

The recursion   is started with &,,               and   P,,,   representing      the analyst’s      prior
information  about the initial state.


5.3.    Other approaches to nonlinear state-space models

A number of other approaches to nonlinear state-space models have been explored
in the literature. See Anderson and Moore (1979, Chapter 8) and Priestly (1980,
1988) for partial surveys.



References

Anderson, B.D.O. and J.B. Moore (1979) Optimal Filtering. Englewood Cliffs, New Jersey: Prentice-Hall,
  Inc.
Ansley, C.F. and R. Kohn (1985) “Estimation,     Filtering, and Smoothing       in State Space Models with
  Incompletely  Specified Initial Conditions”, Annah     of Statistics, 13, 1286-13 16.
3078                                                                                                     J.D. Hamilton


Aoki, M. (1987) State Space Modeling of Time Series. New York: Springer Verlag.
Baum, L.E., T. Petrie, G. Soules and N. Weiss (1970) “A Maximization                     Technique Occurring       in the
  Statistical Analysis of Probabilistic      Functions of Markov Chains”, Annals of Mathematical Statistics,
  41, 164-171.
Box, G.E.P. and G.M. Jenkins (1976) Time Series Analysis: Forecasting and Control, Second edition.
  San Francisco: Holden-Day.
Burmeister,     E. and K.D. Wall (1982) “Kalman                Filtering    Estimation       of Unobserved      Rational
  Expectations      with an Application        to the German Hyperinflation”,           Journal of Econometrics, 20,
  255-284.
Burmeister, E., K.D. Wall and J.D. Hamilton (1986) “Estimation                   of Unobserved        Expected Monthly
  Inflation Using Kalman Filtering”, Journal of Business and Economic Statistics, 4, 147-160.
Caines, P.E. (1988) Linear Stochastic Systems. New York: John Wiley and Sons, Inc.
Cecchetti, S.G., P.-S. Lam and N. Mark (1990) “Mean Reversion in Equilibrium Asset Prices”, American
  Economic Review, 80, 398-418.
Chow, G.C. (1984) “Random and Changing Coefficient Models”, in: Z. Griliches and M.D. Intriligator,
  eds., Handbook of Econometrics. Vol. 2. Amsterdam:              North-Holland.
Cosslett, S.R. and L.-F. Lee (1985) “Serial Correlation                in Discrete Variable Models”, Journal of
  Econometrics, 27, 79-97.
Davies, R.B. (1977) “Hypothesis         Testing When a Nuisance Parameter                 is Present Only Under the
  Alternative”, Biometrika, 64, 247-254.
DeGroot, M.H. (1970) Optima2 Statistical Decisions. New York: McGraw-Hill.
De Jong, P. (1988) “The Likelihood for a State Space Model”, Biometrika, 75, 165-169.
De Jong, P. (1989) “Smoothing and Interpolation          with the State-Space Model”, Journal of the American
  Statistical Association, 84, 1085-1088.
De Jong, P. (1991) “The Diffuse Kalman Filter”, Annals of Statistics, 19, 1073-1083.
Dempster, A.P., N.M. Laird and D.B. Rubin (1977) “Maximum                    Likelihood from Incomplete Data via
  the EM Algorithm”, Journal of the Royal Statistical Society, Series B, 39, l-38.
Doan, T., R.B. Litterman and C.A. Sims (1984) “Forecasting              and Conditional      Projection Using Realistic
  Prior Distributions”,      Econometric Reoiews, 3, l-100.
Engel, C. and J.D. Hamilton (1990) “Long Swings in the Dollar: Are They in the Data and Do Markets
  Know It?“, American Economic Reoiew, 80, 689-713.
Engle, R.F. and M.W. Watson (1981) “A One-Factor               Multivariate     Time Series Model of Metropolitan
  Wage Rates”, Journal of the American Statistical Association, 76, 774-781.
Engle, R.F. and M.W. Watson (1987) “The Kalman Filter: Applications                     to Forecasting     and Rational-
  Expectations      Models”, in: T.F. Bewley, ed., Advances in Econometrics. Fifth World Congress,
  Volume I. Cambridge,        England: Cambridge       University Press.
Fama. E.F. and M.R. Gibbons (1982) “Inflation. Real Returns. and Caoital Investment”.                         Journal of
  Monetary Economics, 9, 297-i23.            ’
Feyzioglu, T. and K. Hassett (1991), A Nonlinear Filtering Technique for Estimating the Timing and
  Importance      of Liquidity Constraints,      Mimeographed,      Georgetown       University.
Garcia, R. and P. Perron (1993), An Analysis of the Real Interest Rate Under Regime Shifts,
  Mimeographed,        University of Montreal.
Gevers, M. and V. Wertz (1984) “Uniquely Identifiable State-Space and ARMA Parameterizations                           for
  Multivariable     Linear Systems”, Automatica, 20, 333-347.
Ghosh, D. (1989) “Maximum          Likelihood Estimation of the Dynamic Shock-Error                   Model”, Journal of
  Econometrics, 41, 121-143.
Goldfeld, S.M. and R.M. Quandt (1973) “A Markov Model for Switching Regressions”,                             Journal of
  Econometrics, 1, 3-16.
Gordon, K. and A.F.M. Smith (1990) “Modeling and Monitoring                    Biomedical Time Series”, Journal of
  the American Statistical Association, 85, 328-337.
Hamilton, J.D. (1985) “Uncovering          Financial Market Expectations           of Inflation”, Journal of Political
  Economy, 93, 1224-1241.
Hamilton,    J.D. (1986) “A Standard        Error for the Estimated State Vector of a State-Space               Model”,
  Journal of Econometrics, 33, 387-397.
Hamilton,     J.D. (1988) “Rational-Expectations         Econometric        Analysis of Changes          in Regime: An
  Investigation    of the Term Structure of Interest Rates”, Journal of Economic Dynamics and Control,
  12, 385-423.
Ch. 50: State-Space Models                                                                                       3079


Hamilton, J.D. (1989) “A New Approach to the Economic Analysis of Nonstationary                        Time Series and
   the Business Cycle”, Econometrica, 57, 3577384.
Hamilton, J.D. (1990) “Analysis ofTime Series Subject to Changes in Regime”, Journal afEconometrics,
   45, 39-70.
Hamilton, J.D. (1991) “A Quasi-Bayesian            Approach to Estimating Parameters          for Mixtures of Normal
   Distributions”,     Journal of Business and Economic Statistics, 9, 27-39.
Hamilton, J.D. (1993) Specification Testing in Markov-Switching                 Time Series Models, Mimeographed,
   University of California, San Diego.
Hamilton, J.D. (1994) Time Series Analysis. Princeton, N.J.: Princeton University Press.
Hannan, E.J. (1971) “The Identification         Problem for Multiple Equation Systems with Moving Average
   Errors”, Econometrica, 39, 751-765.
Hansen, B.E. (1992) “The Likelihood Ratio Test Under Non-Standard                   Conditions: Testing the Markov
   Trend Model of GNP”, Journal of Applied Econometrics, 7, S61-S82.
Hansen, B.E. (1993) Inference When a Nuisance Parameter is Not Identified Under the Null Hypothesis,
   Mimeographed,        University of Rochester.
Harvey, A.C. (1987) “Applications            of the Kalman        Filter in Econometrics”,       in: T.F. Bewley, ed.,
   Advances in Econometrics,         Fifth World Congress,          Volume I. Cambridge,         England:    Cambridge
   University Press.
Harvey, A.C. (1989) Forecasting, Structural Time Series Models and the Kalman Filter. Cambridge,
   England: Cambridge        University Press.
Harvey, A.C. and G.D.A. Phillips (1979) “The Maximum Likelihood Estimation of Regression Models
   with Autoregressive-Moving         Average Disturbances”,         Biometrika, 66, 49-58.
Harvey, A.C. and R.G. Pierse (1984) “Estimating                Missing Observations      in Economic Time Series”,
   Journal of the American Statistical Association, 79, 125-131.
Harvey, A.C. and P.H.J. Todd (1983) “Forecasting                Economic Time Series with Structural          and Box-
   Jenkins Models: A Case Study”, Journal of Business and Economic Statistics, 1, 2999307.
Imrohoroglu,       S. (1993) “Testing for Sunspots in the German Hyperinflation”,                 Journal of Economic
   Dynamics and Control, 17, 289-317.
Jones, R.H. (1980) “Maximum            Likelihood     Fitting of ARMA Models to Time Series with Missing
   Observations”,      Technometrics, 22, 3899395.
Kalman, R.E. (1960) “A New Approach to Linear Filtering and Prediction Problems”, Journal of Basic
   Engineering, Transactions of the ASME, Series D, 82, 35545.
Kalman, R.E. (1963) “New Methods in Wiener Filtering Theory”, in: J.L. Bogdanoff and F. Kozin,
   eds., Proceedings of the First Symposium of Engineering Applications of Random Function Theory and
   Probability, pp. 270-388. New York: John Wiley & Sons, Inc.
Kiefer, N.M. (1978) “Discrete Parameter             Variation:    Efficient Estimation    of a Switching Regression
   Model”, Econometrica, 46, 4277434.
Kiefer, N.M. (1980) “A Note on Switching Regressions and Logistic Discrimination”,                        Econometrica,
   48, 1065-1069.
Kim, C.-J. (1994) “Dynamic Linear Models with Markov-Switching”,                  Journal ofEconometrics, 60, l-22.
Kitagawa, G. (1987) “Non-Gaussian            State-Space Modeling of Nonstationary           Time Series”, Journal of
   the American Statistical Association, 82, 1032-1041.
Kahn, R. and C.F. Ansley (1986) “Estimation,             Prediction, and Interpolation      for ARIMA Models with
   Missing Data”, Journal of the American Statistical Association, 81, 751-761.
Lam, P.-S. (1990) “The Hamilton Model with a General Autoregressive                    Component:      Estimation   and
  Comparison        with Other Models of Economic Time Series”, Journal of Monetary Economics, 26,
  409-432.
Leybourne, S.J. and B.P.M. McCabe (1989) “On the Distribution                  of Some Test Statistics for Coefficient
  Constancy”,       Biometrika, 76, 1699177.
Magnus, J.R. and H. Neudecker (1988) Matrix Differential Calculus with Applications in Statistics and
  Econometrics. New York: John Wiley & Sons, Inc.
Meinhold, R.J. and N.D. Singpurwalla (1983) “Understanding                 the Kalman Filter”, American Statistician,
  37, 123-127.
Naba,      S. and K. Tanaka (1988) “Asymptotic              Theory for the Constance      of Regression Coefficients
  Against the Random Walk Alternative”, Annals of Statistics, 16, 2188235.
Nash, J.C. and M. Walker-Smith            (1987) Nonlinear Parameter Estimation: An Integrated System in
  Basic. New York: Marcel Dekker.
3080                                                                                            J.D. Hamilton


Nicholls, D.F. and A.R. Pagan (1985) “Varying Coefficient Regression”, in: E.J. Hannan, P.R. Krishnaiah
   and M.M. Rao, eds., Handbook of Statistics.Vol. 5. Amsterdam:           North-Holland.
Pagan, A. (1980) “Some Identification   and Estimation Results for Regression Models with Stochastically
   Varying Coefficients”, Journal of Econometrics, 13, 341-363.
Priestly, M.B. (1980) “State-Dependent        Models: A General Approach         to Non-Linear    Time Series
   Analysis”, Journal of Time Series Analysis, 1, 47-71.
Priestly, M.B. (1988) “Current Developments       in Time-Series Modelling”, Journal of Econometrics, 37,
   67-86.
Quandt, R.E. (1958) “The Estimation of Parameters of Linear Regression System Obeying Two Separate
   Regimes”, /ournal of the American Statistical Association, 55, 873-880.
Quandt, R.E. (1983) “Computational       Problems and Methods”, in: Z. Griliches and M.D. Intriligator,
   eds., Handbook of Econometrics. Volume 1. Amsterdam:          North-Holland.
Raj, B. and A. Ullah (1981) Econometrics: A Varying Coeficients Approach. London: Groom-Helm.
Sargent, T.J. (1989) “Two Models of Measurements       and the Investment Accelerator”, Journal of Political
   Economy, 97,251-287.
Shumway, R.H. and D.S. Stolfer (1982) “An Approach             to Time Series Smoothing       and Forecasting
   Using the EM Algorithm”, Journal of Time Series Analysis, 3, 253-263.
Shumway, R.H. and D.S. Staffer (1991) “Dynamic            Linear Models with Switching”, Journal of the
   American Statistical Association, 86, 7633769.
Sims, C.A. (1982) “Policy Analysis with Econometric       Models”, Brookings Papers on Economic Activity,
    1, 1077152.
Stock, J.H. and M.W. Watson (1991) “A Probability          Model of the Coincident      Economic Indicators”,
   in: K. Lahiri and G.H. Moore, eds., Leading Economic Indicators: New Approaches and Forecasting
   Records, Cambridge,    England: Cambridge     University Press.
Tanaka, K. (1983) “Non-Normality       of the Lagrange Multiplier Statistic for Testing the Constancy         of
   Regression Coefficients”, Econometrica, 51, 1577-1582.
Tjostheim, D. (1986) “Some Doubly St&hastic Time Series Models”, Journal of Time Series Analysis,
   7, 51-72.
Wall, K.D. (1980) “Generalized     Expectations   Modeling in Macroeconometrics”,         Journal of Economic
   Dynamics and Control, 2, 161-184.
Wall, K.D. (1987) “Identification   Theory for Varying Coefficient Regression Models”, Journal of Time
   Series Analysis, 8, 3599371.
Watson, M.W. (1989) “Recursive Solution Methods for Dynamic Linear Rational Expectations             Models”,
  Journal of Econometrics, 41, 65-89.
Watson, M.W. and R.F. Engle (1983) “Alternative Algorithms for the Estimation of Dynamic Factor,
   MIMIC, and Varying Coefficient Regression Models”, Journal of Econometrics, 23, 385-400.
Watson, M.W. and R.F. Engle (1985) “Testing for Regression Coefficient Stability with a Stationary
  AR(l) Alternative”, Review of Economics and Statistics, 67, 341-346.
White, H. (1982) “Maximum Likelihood Estimation of Misspecified Models”, Econometrica, 50, l-25,



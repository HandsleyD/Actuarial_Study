---
normalized_id: shared-pdf-reference-random-and-changing-coefficient-models
exam_code: SHARED
material_scope: random and changing coefficient models.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Random and Changing Coefficient Models.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-random-and-changing-coefficient-models

Chupter     21


RANDOM AND CHANGING COEFFICIENT MODELS

GREGORY          C. CHOW*

Princeton    UnioersiQ




Contents

 1. Introduction                                                                            1214
 2. Derivation of fi,,, by recursive regression of fi, on y,, . .                           1215
 3. Derivations of /3,,, by regression of y,,. . . , _y,on xi,. . ., x,                     1220
 4. Maximum likelihood estimation of u 2, V and M                                           1222
 5. System of linear regressions with changing coefficients                                 1225
 6. System of linear simultaneous equations                                                 1228
 7. System of non-linear simultaneous equations                                             1233
 8. Model with stationary coefficients                                                      1234
 9. Identifiability of parameters                                                           1237
10. Testing constancy of regression coefficients                                            1239
11. Problems for research                                                                   1242
References                                                                                  1243




   *I would like to thank Zvi Griliches, Andrew Harvey, Michael Intriligator and Adrian Pagan for
providing helpful comments on an earlier draft and acknowledge financial support from the National
Science Foundation   in the preparation of this chapter.


Hundhook of Econometrics,   Volume II, Edidired ly Z. Gnliches   and M.D.   Intriligutor
0 Elseuier Science Puhhshers B V, 1984
1214                                                                           G. C. Chow




1.     Introduction

The standard linear regression model has been a very attractive model to use in
econometrics. If econometricians can uncover stable economic relations which
satisfy at least approximately the assumptions of this model, they deserve the
credit and the convenience of using it. Sometimes, however, econometricians are
not lucky or ingenious enough to specify a stable regression relationship, and the
relationship being studied is gradually changing. Under such circumstances, an
option is to specify a linear regression model with stochastically evolving coeffi-
cients. For the purpose of parameter estimation, this model takes into account the
possibility that the coefficients may be time-dependent and provides estimates of
these coefficients at different points of time. For the purpose of forecasting, this
model may have an advantage over the standard regression model in utilizing the
estimates of the most up-to-date coefficients. From the viewpoint of hypothesis
testing, this model serves as a viable alternative to the standard regression model
for the purpose of checking the constancy of the coefficients of the latter model.
   The basic linear regression model with a changing coefficient vector /3, is
represented by:

       y,=X,&+Er         (t=l,...,    T)                                            (1.1)
and
       P, = Mp,-, + 91       (t =l,...,T),                                         (1.2)
where x, is a row vector of k fixed explanatory variables, E, is normally and
independently distributed with mean 0 and variance s2, and q, is k-variate normal
and independent with mean zero and covariance matrix s 'P= V.When V = 0 and
M = I, this model is reduced to the standard normal regression model. We will be
concerned with the estimation and statistical testing of p, (t = 1,. . . , T), s2, I/ and
M using observations on (yr, x,). We are restricting our discussion to the case of
fixed x,. If x, were to include lagged dependent variables, the log-likelihood
function given at the beginning of Section 4 would no longer be valid since the
individual terms would no longer be normal and serially uncorrelated.
    Assuming tentatively that s 2, Y and M are known, one may consider the
problem of estimating ~3,using information Z, up to time s. Denote by E(/ItB,I      Z,) =
~3,,,the conditional expectation of /3, given Z,. The evaluation of /3,,, is known as
filtering. The evaluation of &(s > t) is called smoothing, and the evaluation of
&,,(s < t) is called prediction. In Section 2 we will derive the filtered and
smoothed estimates of /3, recursively for t = 1,2,. . . , by the use of a regression of
81V...7B~ on Y,, . . . ,y,. The basic results are due to Kalman (1960). Section 3
contains an alternative derivation of the same results using the method of
Ch. 21: Random and Changing Coe&ient             Models                               1215


Aitken’s generalized least squares applied to a regression of y,, . . . ,.Y,on x1,. . . ,x,
with & as the regression coefficient. This exposition is due to Sant (1977). We will
then study the problem of estimating s ‘, V and M by the method of maximum
likelihood in Section 4.
   In Section 5 we consider a system of linear regressions with changing coeffi-
cients. In Sections 6 and 7, respectively, we treat a system of linear and non-linear
simultaneous stochastic equations with changing parameters. Finally, in Section 8,
we modify (1.2) by introducing a mean vector p, thus replacing & and /3_ 1 in
(1.2) by & - B and &_, - B respectively and assuming the characteristic roots of
M to be smaller than one in absolute value. When M = 0, a random-coefficient
regression model results. Section 9 states some conditions for the identification of
the parameters.
   Besides estimation, an important problem is hypothesis testing especially using
the null hypothesis V= 0. Testing this null hypothesis is equivalent to testing the
stability of a set of regression coefficients through time, with the model (l.l)-(1.2)
serving as the alternative hypothesis. This topic is treated in Section 10. Section
 11 concludes this survey by suggesting some problems for further research.



2.   Derivation of &                 by recursive regression of & on yl,. . . ,.Y,

Consider the regression of & on y,, conditioned on y 1,... ,_Y-~. Denote (Y~,...,Y,)
by q. The regression of interest is by definition:

      E(M,,         Y-r) = E(B,I Y-r)+             K,[x -E(A        Y-,)1.           (2.1)
This regression is linear because & and q are jointly normal as a consequence of
the normality of E, and 7, in the model (l.l)-(1.2). Taking expectation of y, from
(1.1) conditioned on Yt_i, we have ~+r = E(y,l Y,_,) = x&r.         Equation (2.1)
can be written as:

     P,,, =&r-t          + KI[ YI- Xl&,,-11.                                         (2.2)

K, is a column vector or regression coefficients, originally derived by Kalman
(1960). If this vector is known, we can use (2.2) to update our estimate &r to
form P,,,.
   To derive K, we apply the well-known formula for a vector of regression
coefficients:

     K, = [EM -Pz,r-1)(X                    - J+i)‘]      [cc+,l   r,-,>I -l.        (2.3)
Denoting the covariance matrix cov(&l Y,_,) by Z,,,_t and using

     Yf-Ytlr-l=~,(~,-~rS,,,-l)+~,~
1216                                                                                         G. C. Chow

we can write (2.3) as:



  Xl,,_1 can be computed recursively as follows. First, by evaluating the covari-
ante matrix of each side of (1.2) conditioned on YtPl, we obtain:

       Z ,,,-I = Mz:,+_,M’+                        v.                                            (2.5)

Second, using (2.2) and (1.1) we write:

       P,-P,,,=P,-P,,,~1-K,[x,(P,-Pr,t-1)+El].                                                   (2.6)

Taking the expectation of the product of (2.6) and its transpose and using (2.4)
we obtain:

       z’,,, = x1,1- 1 - K,[x,B,,,-,x:+                     0’1 K,
                                                                          -1
               =x   /)I- 1
                             -2   t,t-   1x:   [ G,,-       14   +   o*   1    G’,,,P   1.       (2.7)


Equations (2.5) and (2.7) can be used to compute ,Xr,, (t = 1,2,. . . ) successively
given Z,,,,, without using the observations y, (t = 1,2,. . .). Having computed
,Zt,r_lr we can use (2.4) to compute K, and (2.2) to compute fi,,, where, on account
of (1.2):



Thus, /?,,, can be computed from /3Pi,,_1 using (2.8) and (2.2). The estimates /I,,,
so obtained are known as estimates by the Kalman filter.
    Although we have employed classical regression theory in deriving the Kalman
filter, one should note that it can be derived by Bayesian methods. Given the
prior density of p,-i to be normal with mean &i,,_ 1 and covariance matrix
2 fellI-l>  a prior density of & is found using (1.2), which has mean /3,,,_, =
Mb,_ I,t_l and covariance matrix ZrlrPl = MZ,_i,,_iM’+           V. The posterior den-
sity of /I, given yt is normal, with mean p,,, and covariance matrix Z,,, as given by
the Kalman filter. See Ho and Lee (1964).
    In order to utilize future observations Y~+~,y,+z,. . . ,y,+, for the estimation of
/3,, we first consider the regression of p, on _y,+r, conditioned on Y. Analogous to
(2.2) and (2.3) are:

       PIIt+    =Pt,t    +    Q,t+lh+1              -   x+1,0                                    (2.9)
and

       Q,t+i = [E(P,-B,,,)(vt+l-Y,+~,l)‘][cov(y,+,lY,)l-L.                                      (2.10)
Ch. 21: Rundom und Chungmg                    Coefficient Models                                                                      1217


Using (1.1) and (1.2), we write:

      Y,+1-      Y,+1j,     =    x,+lP,+l+E,+l-                            Xt+1P,+l,,

                            =x       ,+,wA          +     xt+PIt+1+5+1                        -x,+&Q,,,



which, in conjunction with (2.10) implies:

      D t,t+1 =~f,,~~~;+l[~,+l~f+l,,X;+l                                        +     ~‘1     -l


                 =   ~,,,~‘zA,A+1
                                                                                                                                    (2.11)

Equations (2.9) and (2.11) can be used to evaluate p,,,,,. With the aid of (2.11)
and (2.2), (2.9) can be rewritten as:

      Pr/l+l=Pr,,+~I,I~‘~;:l,l(Pr+l,,+l-~,+l,*).                                                                                    (2.12)

   The smoothing formula (2.12) will be generalized to

      P,I,+,, =Pt,t+.-1+                  KM+l,t+n                    -P,+l,r+“-l),
                                                                                                                                    (2.13)

where H, = Z,,,M’X,pIl,,. We will prove (2.13) by induction. Equation (2.13) holds
for n = 1. We now assume (2.13) to hold for n - 1, which implies:

      P,,t+n-1       =Pt,l+n-2            +    f4(P,+l,t+n~l                    -Pr+l,r+n-2)


                     =P,,r+n-2            +    4Hr+l(P,+,,t+n~l                              -Pr+*p-2)


                     =    P,,r+n-2        +    f&H,+,             ..-Hr+n~~(P,+n-l,r+n~l
                                                                                -                                Br+n-l,t+nd


                     =Pt,t+n-z+fW,+l...                                   Hl+n-dL~br+n-l-                          ~,+n~l,,+n-2).

                                                                                                                                    (2.14)

   Consider the regression of p, on y,, n_ 1, conditioned on Y,, “_ z. Analogous to
(2.9) an (2.10) are:

       P,,t+,4       =&,r+“-*             +    Dt,t+,-lb&-,                           -     Yt+“-l,,+nA                             (2.15)

and

                                        D r,r+n-1         =       E       &   -P,,r+n-2            NY,+npl   -   Yrcn-l,r+nJ]
                                                              [       (


       [covb,+n-11               L-d]               -‘=       WC+,              .-.HI+n-zKr+npl,                                    (2.16)

where the last equality sign results from comparing (2.14) and (2.15). Equation
1218                                                                                                               G. C. Chow


(2.16) implies:

       E(P,-Pr,r+n-2)(Yt+n-l- Yr+n-1,r+n-2)’
            = E(P,-B,,,+,-&L-1 -Pr+n~1,r+n-2)‘~;+.-1
            = H,H,+, . ..~.+,-2~,+“-l(Xr+n-l~t+n-l,r+n-2X:+1
                                                    +0’)
             = H,H,+, . ..H ,+n-2 2 ,+n--l,,+n-2X;+“-1’                                                               (2.17)

where (2.4) has been used.
  To prove (2.13), we need to find the regression of & on Y,+,,, conditioned                                              on
yI+,-1:

       P,,,+,I =P,,,+,-1 + D,,,+,(Y,+, - Y,+n,,+n-1).                                                                 (2.18)

To evaluate the vector of regression coefficients I+,+, we write, using (2.15):

       P, -P,,,+n-l   =P, -P,,,+n-2           -   q,+n-h+n-*                -    Y,+n-1,,+n-2)


                      =a-Pr,,+n-2-DI,,+.-~[X,+n-ltPr+n-l-Pt+n-~,,+~-2~

                                                                 +& ,+n-I
                                                                                I 3
                                                                                                                      (2.19)

and using (2.2):
       Y,+,I - Y,+nt,+n-l= x,+,$0+,-t                     -P,+,-I,,+n-l)+X,+n%+n                         +et+n
                            =X       ,+P[     l-t+,-,     -B,+n-I,,+“-2               -   &+,-I


                                 x    (Y,+A       - Y,+n--l,,+n--2)] + x,+nn,+n + e,+,
                            =x ,+,?[(I-                 K+n-lX,+n-lWL-l                           -P,+n-1,,+n-2)


                                              -   G--lE,+n--l]            +X,+.%+.                + E,+n-             (2.20)

Equations (2.19) and (2.20) imply:

   E(br-P,,t+n-1)(~r+n           - ~r+n,t+n-I)'
          = E@r-Pr,r+n-2>uL-1 -P,+n-l,,+n-2)‘(z-
                                              4+n-1c+n-1)~%
                     r+n-l~,+n-l,r+n-2~z-~:+n-l~~+n-1)-~2~;+,
            - D,,r+n-l[x
          = H,H,+,... Hl+n-~~,+n-1,r+n-1M’x:+n
          = fWr+l... H,+,1K,+n(xr+n~r+,,,+n-1~:+n
                                               +o*)v                                                                  (2.21)
Ch. _‘I: Random       and Changing       Coefficient    Models                                                      1219


where the second equality sign results from using (2.16) (2.17) and (2.7) and the
third equality sign is due to (2.4). Hence, the regression coefficient is:

     D 1p+ll
          = [E (Pt-p,,,+.~d(y,+.-
                                yf+n/,+n-~1)']~0~(~~+,l~+,,_,,l~'
                = HIK+~...fft+n-~Kt+n+                                                                           (2.22)

Equation (2.22) generalizes the coefficient given by (2.16). Substituting (2.22) into
(2.18) yields:

      Prl,+n =&A                  + H,H,+,...H,+,-,(P,+.,,+.                       -P,+n,,+n-I)
                = &,+,A           + Ht(P,+r,,+n - &+I,,+~-I),                                                    (2.23)

where the last step is due to the third equality sign of (2.14) with t replaced by
t + 1. Equation (2.23) completes the proof. Equations (2.23) and (2.18) provide
three alternative formulas to evaluate &,,+ ,,.
   To derive the covariance matrix Z,,,,,, we use (2.18) and (2.21):

      2 Ilr+n   =     wr- Lt,r+n>(a
                                 - pL,r+,I)’
                = E[P,- P,,t+n-I- D,,,+nb,+n- x+n,,+n-I)]
                  x [8,-l-t,,+“-1 - qr+“h+” - Yr+n,r+n-l)]’
                =2 rp+n-1 - Dr,r+.(~r+n~r+n,r+n-1~:+n
                                                  +u2)Ur;r+n.                                                    (2.24)

By (2.22), (2.4) and (2.7), the formula (2.24) can be written alternatively:

      2 11, +n =2 rlr+n-l -             Hr...Hr+“~lKr+“(X,cn~r+n,r+~-l~~+”
                                                               +0’)
                      x K,;,H,‘+,_,...H,’

                =2      ,1,+n-1     -   HI...H,+n-l~,+nl,+n-lx:+n(x,+n~,+~,,+~-lX:+n                         +   o’)-’



                      Xx,+.       ~,+n,,+n_1H,l+n-,...H,~


                =.Z     rp+n-1+         f4...f4+n-l(~,+“,,+n                 -4+n,,+n~1Pt;n-1     . ..H.‘.


                                                                                                                 (2.25)

Equations (2.24) and (2.25) provide the covariance matrix of the smoothed
estimate /I,,,+, of /?, given the data up to t + n. The estimates fi,,, and AX,,,of this
section require knowledge not only of the parameters u2, V and M, but also of the
Ch. _‘I: Random and Changing Coeficient    Models                                                    1223

where, by (2.5) and (2.7):

      R,=MR,_,[I-x;_l(x,_*R,_In:,+l)-l~,_lR,_l]M’+P
                                                                     (t=k+2        )...) T),       (4.4)

and, by (2.8), (2.2) and (2.4):

      &,,-I = M[ L,P2          + R,-lx:-l(x,-lR,-lx:-1          +I)-‘(X-1        -x,-J,-,,,-,)]
                                                                     (t=k+2,...,T)                  (4.5)

The initial conditions are:

      R k+l = o -2M2,,,M’+          P                                                              (4.6)
and

      P k+llk   = MPk,k   7                                                                        (4.7)

with zklk and Pklk given by (3.3) and (3.4). One would have to rely on a numerical
method to maximize (4.3) with respect to the unknown parameters in P and M, P
being symmetric, positive semidefinite. Garbade (1977) gives an example.
   An alternative expression of the likelihood function can be obtained by using
the normal regression model (3.1) for t = T, i.e.

      y=Z@+&-AT),                                                                                  (4.8)

where




                 I7 ‘>II I:1
                                                           El               772
                                                           E2               773
                          Z=                         E=     .   )    .vI=    .      9

                                                           ET               VT
                                    xT


p=PTandA=AT          as defined by the last coefficient matrix of (3.1) for t = T. The
log-likelihood function of this model is:

      logL=const-flogIe2zr1             -$loglQl--$(y-ZjS)‘Q-‘(y-Zfi)/a2,                          (4.9)

where

      Q = I, + A(Z,_,BP)A’.                                                                       (4.10)
1224                                                                                                   G. C. Chow

  Maximization                    of (4.9) with respect to a2 yields:

        -2
       u        =+(y-zp)‘pp’(y-zp).                                                                       (4.11)


Maximization                  of (4.9) with respect to p yields:

       B = ( z’Q~‘z)~lz’Q~‘y.                                                                             (4.12)

Differentiating                  (4.9) with respect         to the unknown        elements   p,, = P,~ of P, one
obtains

        AogL                                1aQ                                                           (4.13)
             JPl,        -( - tr Q-          dp,, i

To evaluate               aQP ‘/LIP,,, we differentiate                both sides of QQ- ’ := I with respect   to
p,, to get:


                                                                                                          (4.14)


Using the definition                     (4.10) for Q, we have:


       aQ=A( Z,_,@E,,)A’,                                                                                 (4.15)
        aP,J

where EIJ is an elementary k x k matrix with all zero elements except the i - j
andj - i elements which equal unity. Substituting (4.11) (4.12) (4.14) and (4.15)
into (4.13) gives:

        ai0gL
       -=                     -tr[QP1A(Z,_,8E,,)A’]
             aPIJ



                                                      -1

                             +        +y'N'e');            y'N'P-'A(       IT_l@E,JA’)Q-lNy,              (4.16)
                                  t


where N denotes Z- Z(Z’QQIZ))‘Z’Q-‘.              Equation     (4.16) is useful for the
maximization     of (4.19) when a numerical method requiring analytical first deriva-
tives is applied. Furthermore,     in econometric   applications    A4 is frequently    as-
sumed to be an identity matrix and P to be diagonal. In this important             special
case, the only unknown parameters in (4.9) are p 11.. .pkk. One can start with zero
as the initial value for eachp,, and increase its value if alogL/ap,;    as evaluated by
(4.16) is positive.
Ch. ?I: Rundom und Changing Coefficient         Models                             1225

   For the general case, numerical methods can be applied to maximize (4.9) after
the elimination of u* and /3 by (4.11) and (4.12), i.e. - ~~o~~(_JJ’N’Q-‘y)Ql, with
respect to the unknown parameters in P and M. For a discussion of conditions for
the identifiability of these parameters and the asymptotic distribution of the
maximum likelihood estimator, the reader is referred to Section 9 below.


5.   System of linear regressions with changing coefficients

A generalization of the regression model (l.l)-(1.2)         is a system of m linear
regressions with changing coefficients:

        Yl,


       [I
        Y'ml

        Pl,
                                                                                  (5.1)



      [I
       P,,                                               I   (t =l,...,T).        (5.2)

Here xj, is a row vector of k, explanatory variables. (pi,, . . . ,E,~) is m-variate
normal and independent with mean zero and covariance matrix S = (a,,). njl is
k,-variate normal and independent with mean 0 and covariance matrix 5 = a,,P,,
being independent of nj, for i # j. If a,, were zero for i # j, the m regression
models will be treated separately, each by the methods previously presented.
When a,, # 0, efficiency may be gained in the estimation of /?,[ by combining the
m regressions into a system.
   If we write (5.1)-(5.2) more compactly as:

      y.; = x,/l., + E.(             (t =l,...,T),                               (5.3)
     P.t=MP.,_i+n.,                     (f’=l ,...J),                            (5.4)

 the filtering and smoothing equations of Section 2 remain entirely valid for this
 model, with u, Vi,. .., V, and M treated as given. The derivations are the same as
 in Section 2, with the scalar y, replaced by the column vector y.‘(, the row vector x,
 by the m x (2,k,) matrix X,, and the variance u* by the covariance matrix 2 of
 the vector E,,. K, in (2.4) becomes a (Z;k,)X m matrix.
    For the estimation of Z, Vi,. . . , V, and M, we write the T observations on the
jth regression model with coefficient j3,r = pj in the notation of (4.8) as:

     yj=Z,Pj+&,-A          J
                               17
                                I’                                               (5.5)
1226                                                                                G. C. Chow

where the residual vector E, - A,q, has covariance matrix u,,Q,, with

       Q,=Z,+A,(Z,_,@P,)A;.                                                             (5.6)

Combining the m regression models, we have:


                                                                                        (5.7)



where the residual vector has covariance matrix:




                                                                                         (5.8)
with u’J denoting the i - j element of E-‘.
  The log-likelihood function for the model (5.7) is:


       logL=const-ilogj@I-4                  f         (_y-Z,&)‘Q-‘(y,-Z,&)u”
                                             i=l


               -   f     (Vi -   Z,P;)‘(v,         -   Z/b+‘.                           (5.9)
                   r<j

Observing that




and

                                                 =-2Tu,,           (u,,=u,,,i#j),


we differentiate (5.9) with respect to u” and uiJ to obtain:


       4, =   +(Y,
                 - Z,P,)'Q;'h                - Z,P,)                                   (5.10)
Ch. II: Random and Changing Coefficient Models                                               1221

and


      4,   =~(Y,-z;8;)'(Y,-z,~j)                        (i+   _i)                          (5.11)


Equation (5.10) is identical with (4.11) and shows that eii can be obtained from
the residuals Y, - Z,& of the i th regression only, if the parameters P, and M, are
known. Equation (5.11) shows that uij (i # j) is the sample covariance of the
residuals in the ith and jth regressions and is independent of P, and P,.
   Differentiating (5.9) with respect to /3, gives:


      F           =u"Z;Q,:'( y,- Z&)+              Z;    5 d’( y, - Zjpj) = 0.
             I                                          j+i


Combining the above equations for i = 1,. . . , m, we have:




                                                                                           (5.12)

                      Z;       u”“Q,‘y,,,   + c    u”jy,
                  _        i                 jfm



Differentiating (5.9) with respect to the i - j element pk.,,              of Pk yields:




                  = - ukkukktr[ QklAk( I,_l@I?jj)A;]

                       +(Yk - zkpk)‘QklAk(IT~l~E,,)A~Qkl(Yk                 -    ‘kfik)-   (5.13)

   The maximization of 1ogL with respect to Pk (k = 1,. . . ,m) can proceed
iteratively as follows. First consider the important case with M,, . . . ,M, given.
Starting with Pk = 0 for all k, which implies Qk = I,, solve (5.10)-(5.12) for 9,
1230                                                                        G. C. Chow

The linear approximation              of 9’ilis:


                                                                                 (6.7)


where the subscript zero indicates that the matrix &rJ,/&3; is evaluated            at
S,c’= 6,,,_,. To evaluate the matrix &r,t/a8:, we note:




or, with y. k, f denoting the k th column of c:


                                                                                 (6.8)




                                                   (y,kJ in ith row);




or, with j?.k,, denoting the k th column of B,:

              an’,
       -z.z
                         -   Z,yFJ.                                              (6.9)
        wk,          I




Hence, the matrix (an,,/%$‘), of (6.7) can be evaluated by (6.8) and (6.9) with 17,
replaced by IX?: and r,-’ replaced by r;“-’ = r,;?,. Similarly, approximating
 --alJ-‘by       alinear functionof E.[ and (yt,...ym,) about e.,=O and (yt,...y,,)
 = (ytrlr_t. ..y,,,,,,_l) yields - ~l,c;!r. Combining this result with (6.7) and denot-
ing x, r~Jyby ~~7,we can write the linearized version of (the transpose of) (6.2) as:
Ch. 21: Random      and Changrng    Coeficient   Models                          1231


or more compactly as:

                                                                              (6.11)

where thejth        row of W,’ is, by (6.8) and (6.9):

                 ar,*=-
      x.,    -
            i as; i
                            K *o
                              Yl,       % *) Y,lr-l.*.
                                              I’          (Y,*p   x,,)Y;L]


                                *o lj
                      =-                    *O mj
                            [ 3, Yrlt-l***ZmtYtlr-1        17                 (6.12)

with y,:” denoting a row vector composed of those elements of y.‘, = x ,IIp which
correspond to y,,.
   The linearized model (6.11) will replace (5.1) or (5.3) for the purpose of
deriving filtering equations. For the model (6.11)-(6.5), the derivations are exactly
the same as in Section 5 or Section 2, with Z= EE.&~, V, = Ev,,$~ (i =l,...,m),
and M, (i=l,...,   m) treated as given. From the linear model (6.11) one finds the
conditional expectation Y.‘,,,_~to be y.:‘. Repeating the derivations from (2.2) to
(2.8) one finds:


      a,,,
        =a,,,-1+ Kt[Y.', - Y&]                   >                            (6.13)

and, denoting E(6, - S,,,-,)(a, - a,,,-l)’ by I,,t-l,                 etc.:


      K, =                                           -l.
                 ~,,,-l~o’[w,02t,t_1~o’+I-,;,;;-iSI’&]                        (6.14)


Corresponding         to (2.5), (2.7) and (2.8) are, respectively,

      2 f,,-l=     M&,,,-,M’+             v,                                  (6.15)

M being the coefficient matrix of (6.5) and V being the covariance matrix of its
residual n; = (n;,. . . TJ;,):


      I,,, = zZ,,,-l - K,[w,“+lW,o’+                      r,;,-_‘lSr,,‘,]
                                                                     K:        (6.16)

and

      $-1        = M$-P                                                       (6.17)
1232                                                                          G. C. Chow

   An alternative way of estimating aTIT, given 2, y and M,, is to form a
regression model analogous to (3.1) using (6.11) for y,‘, (t = 1,. . . , T) and denoting
y.‘, - y.;’ + ~06r,,~ 1 by PC,:




                                            M-2           . . .


                                           FtYM-’ ..*
                                                                               . (6.18)
                                              0           . . .


                                              0           . . .




The covariance matrix of the residual vector of (6.18) has an i - j block:

                                  T-l
       6'I P-lsI]O-   + lye        c        M~(~-'+~)vM'-(I~J+~)~O',
                                                                                 (6.19)
            ’
                              r=max(l,j)



where IS,,is the Kronecker delta. Aitken’s generalized least squares can be applied
to estimate 6, once the coefficients W,” and rp of the linearized model (6.11) are
evaluated. One can choose an initial guess ST for a,,,, and the associated
8: = M-‘Tp’%~ (t =l,.. ., T). These initial values permit the evaluation of y”,
co, r.T = - x.~B~&~-’ and 6,,,_, = 6:. Equation (6.18) will be treated as a linear
regression model to estimate a,,,. The resulting estimate will be used to form a
new initial guess SF and the process continues iteratively.
   In order to estimate the unknown parameters in 2, V, (i = 1,. . . ,m) and M,
(i=l,.  ..,m), (6.18) can be used to form a likelihood function. However, unlike
the situation with truly constant coefficients 4’ and r:, the evaluation of the
likelihood function requires iterative solution of ST,, as described in the last
paragraph. The computational problem involved in maximizing the likelihood
function is hence more burdensome than in the case of a truly linear (in contrast
with a linearized) model. This problem deserves further study.
Ch. 21: Random und Chunging Coefficient Models                                  1233


7.   System of non-linear simultaneous           equations

Let the t th observation of a system of m non-linear simultaneous equations with
time-varying parameters be written as:

     y.‘, = @(Y+ x.J$)+s.*             (1 =l,...,T),                           (7.1)

where @ is a vector function of m components and

     6, = M6,_ 1+ qr         (2 =l,...,T),                                     (7.2)

which is identical with (6.5). Like the reduced-form (6.2) for a system of linear
structural equations, (7.1) is a non-linear function of the parameter vector 8,. The
approach to be adopted is similar to the one used in Section 6. It amounts to
linearizing the non-linear observation equation (7.1) about some S,r’ and the
associated y.: defined by:

     yp,l= @( yp,, x.,, 6:).

Given S,Oand x.,, y.: can be computed by the Gauss-Seidel     method, for example.
  Linearizing @ in (7.1) about i3p and y.!,, we have:


     Y.‘, = r9'+   (““) o(y~*-Y:~)+(~)o(s,-sp)+E,,
                     (yy.,




where, as in Section 6, the sub-script zero indicates that the matrix of partial
derivatives of @ is evaluated at y.!, and 8:. Solving for y:,, we get:




which replaces the linearized observation equation (6.11) of Section 6. The
treatment of the model (7.1)-(7.2) is the same as in Section 6. The computational
problem is only slightly more difficult because the linearization to achieve (7.3)
requires the evaluation of the partial derivatives (a@/8y.,)o      and (&D/&S,‘)o
whereas the linearization to obtain (6.11) requires matrix inversion only. These
partial derivatives can be evaluated numerically, and their evaluation is computa-
tionally much simpler than the maximization of the likelihood function for the
linearized model with respect to the parameters S, V, (i = 1,. . . , m) and M,
(i = 1,. _. , m) as discussed at the end of Section 6.
1234                                                                         G. C. Chow


8.     Model with stationary coefficients

An alternative specification to (1.1) and (1.2) is:

                                                                                  (8.1)

                                                                                  (8.4

where all characteristic roots of M are assumed to be smaller than one in absolute
value. In stochastic equilibrium p, will have mean fl and a covariance matrix r
satisfying:



where, as before, V is the covariance matrix of qr, In the special case with M = 0,
the model (8.1)-(8.2) becomes a linear regression model with random coefficients.
   The model (8.1)-(8.2) differs from (l.l)-(1.2) mainly by the introduction of the
parameter vector j?. However, it can be rewritten in the same form as (l.l)-(1.2),
so that our results in Section 2 are applicable here as well. Defining p,* = p, - fi
and B, = p for all t, we write (8.1)-(8.2) as:


                                                                                  (8.3)




which is a special case of (l.l)-(1.2). In most applications, not all components of
/I, in (8.2) are random. If only a sub-vector fi, of p, consisting of k, elements, say,
is random, (8.3) and (8.4) will become:


                                                                                 (8.5)




    Since the model (8.5)-(8.6) is a special case of the model (l.l)-(1.2), all the
filtering and smoothing equations of Section 2 and the log-likelihood functions
(4.1) and (4.3) are applicable to this model. However, the estimation problem for
this model deserves a special treatment. Because the roots of M are smaller than
Ch. II: Random and Changing Coefficient Models                                                1235

one in absolute value and the process generating b,* is covariance-stationary, one
may choose to estimate this model by assuming that the &* process starts in a
stochastic equilibrium, rather than assuming a fixed, but unknown, initial value
fi: in period one. The latter assumption was made in (3.1) where we used the
relation:




and treated fi: as fixed. In estimating the model (8.5)-(8.6) one may treat & as
random, with mean zero and covariance matrix r, satisfying:

     r, = Mr,M’+             v.                                                              (8.7)

The autocovariance matrix for the fit* process is:

     I” = E&$YX = MS& = PS                       (s 2 0; t 21).                              (8.8)

If & is regarded as fixed, instead of (8.7) and (8.8), the covariance matrix of j$
and &YS is:

     E( &       _ M’-‘&)(         jj&   - M’-“-‘&)’

            =E(n,+Mn,-i+                ... + M’-2n2)( Tjr_s+ M?j_$_* + . . . + M’-“-2712)
                 t-s-2
            =       c       M”+‘vM”          (srO;t21).                                      (8.9)
                   r=O

   The difference in the treatment of pi+ has implications for estimation. When p:
is regarded as fixed, all inferences are conditional on this assumption. When & is
regarded as a random drawing from a distribution with mean zero and covariance
matrix r. as specified by (8.7), the inferences are no longer conditional. Further-
more, to provide the initial estimates fiklk and Z,,, to start up Kalman filtering
equations for the evaluation of the log-likelihood functions (4.1) and (4.3), the
two assumptions lead to different procedures. In the case of fixed &, we regard
(8.5) as a special case of (1.1). Therefore, the number of initial observations
required to perform a generalized least squares regression equals the number of
elements in pt and &*, or k + k,, say. (3.3) and (3.4) are applied to these k + k,
observations, and the analysis proceeds as before.
   In the case of random &, (8.5) can be written as:

     y, = x$ + ( zt&           + Et)= XJ + 24,.                                         (8.10)
1236                                                                         G. C. Chow


The term in parentheses or u, is treated as a serially correlated residual satisfying:

       Eu,u;_, = Z,r,Z;p, + Sr,t-su2,                                           (8.11)

where r, is defined by (8.8) and a,,,_, is the Kronecker delta. Therefore, given
(8.11) only k initial observations are required to obtain a GLS estimate Bkklkof p
and its covariance matrix. Writing the first k observations of (8.10) as:

       y=xp+u,                                                                  (8.12)

where X is assumed to be a non-singular k by k matrix and Em’ = W is given by
(8.11), we have:

       s,,,= (xvlx)_'XT'y                    = x-ly,                            (8.13)

       cov(&k      -8)    = (x/w-lx)-‘=           x-‘WX’_‘.                     (8.14)

For & in equilibrium, we set its mean equal to zero and its covariance matrix to
r,, i.e.

       P,;, = 0;         cov(&~k*J=I&                                           (8.15)

The covariance of pkklk- p and @ - P,& is:




Equations (8.13)-(8.16) provide the components of Pklk and ZkJk to be used for
the evaluation of the log-likelihood functions (4.1) and (4.3). They are to be
contrasted with (3.3) and (3.4) for fixed /3: which would require k + k, initial
observations.
   Once the likelihood function (4.3) can be evaluated, a numerical method can be
applied to maximize it with respect to the unknown parameters in V = a2P and
M. The computations will be simplified when P and M are diagonal, being
diag( pi} and diag{ m,}, respectively. Equations (8.7) and (8.8) would become:


       y,;,, = Ep;r2 =    ?h-             (i=l   ,...,kJ,                       (8.17)
                          1-m:

       Xl,, = EPZP~,-,=       mfy,i,o (i=l ,...,kr),                            (8.18)
Ch. 21: Random and Changing Coeficient Models                                    1231

and E/3,:P;t,_, = 0 for i # j and for all s. Accordingly the matrix I” used in (8.11)
is a diagonal matrix with elements given by (8.17) and (8.18). As an alternative to
using the likelihood function (4.3), one can form a likelihood function using the
regression model (8.12) for all T observations, as it was done by using the model
(4.8) in Section 4.
   For further discussion of the stationary-coefficient regression model, the reader
is referred to Rosenberg (1973), Cooley and Prescott (1976), Harvey and Phillips
(1982) and Pagan (1980). The exposition of this section has drawn from Harvey
and Phillips (1982). For a survey of the random-coefficient model, the reader is
referred to Swamy (1971, 1974). Swamy and Tinsley (1980) generalize the model
(8.1)-(8.2) by replacing p by Bz,, z, being a vector of fixed variables. Kelejian
(1974) treats linear simultaneous-equation models with random parameters.


9.   Identifiability of parameters

Recently, Pagan (1980) has studied identifiability conditions for the parameters of
a regression model with stationary parameters. His model is:

     yt=X$+X,/3;*+E,=x,p+u,,                                                   (9.1)
     j3;“=/?,-j7=K1(L)e,,                                                      (9.2)

where A(L) is a ratio of polynomials of orders p and q in the lag operator L and
e, is normal, independent and identically distributed, so that &* follows an
ARMA( p, q) process. Since an ARMA process can be written as a first-order AR
process, as, for example




can be written as




or



the model (9.1)-(9.2) is formally identical with our model (8.5)-(8.6), with 2, in
(8.5) denoting (x, 0 0) in the above example. The parameters of (9.1)-(9.2)
1238                                                                         G. C. Chow

consist of fi, u2 = var E,, and all the parameters in the ARMA( p, q) process for
fl;“. By identification, Pagan means asymptotic local parametric identification, i.e.
the non-singularity of lirn,, mT-‘I( fl’), where I is the information matrix, under
certain regularity conditions. Pagan has provided two sets of sufficient conditions
for the identifiability of p and of all parameters, respectively.
    First, under the assumptions (Al) the ARMA( p, q) process generating /3: = fi,
 -p is stationary and obeys the identification conditions set out in Hannan
(1968); (A2) x, has an upper bound for all elements Vt, and (A3) lim,,,T-‘X’X
is positive definite, p is identifiable.
    To state the second set of sufficient conditions, let r/ denote E/3:/3:, as in
Section 8, and observe that if all 5 are known the parameters of the ARMA( p, q)
process (9.2) can be determined by the Yule-Walker equations. Let a subset of all
q. ( j E I/J)be sufficient to determine the parameters of (9.2) uniquely. Then, if 0 is
not in the set 4, i.e. if r. is not required to determine the parameters of (9.2) a set
of sufficient conditions for the identification of all parameters in (9.1)-(9.2)
consists of (Al), (A2), (A3) and (A4): the non-singularity of

       R, = lim T-l~xj_k~,_~@~~~,,
              T-CC       t


for all k E #.
   To motivate the condition (A4), recall that

       Eu,u,_~ = x,F~x;_~ + a,,,_,~~
                 = (x,_k@x,)vec(rk)+6t,,_,a2.                                     (9.3)

Thus, vec(F,) is a vector of coefficients in the regression of u,u,_~ on x,_~@x,.
TR, is the cross-product matrix of the explanatory variables in this regression. If
it is non-singular, the elements of F, can be consistently estimated, but the
knowledge of F, (k E $) is sufficient to identify the parameters of the model (9.2).
In the case that (9.2) is a first-order autoregressive process @ = MP:_, + nt with
diagonal M and V= Enr$, F, = (Y,~,~) is diagonal and

       EUtUt-k = CXjtXj,t-kY/I,k        (k> 0).

 The assumption (A4) in this case states that the matrix with

        lim T-lC(X;rXjtXi,,-kXj,t-k)
       T-rW          t


as its i - j element be non-singular. If r. is in the set of r, required to determine
Ch. II: Random and Changing Coefficient Models                                    1239

the parameters of (9.2), (A4) should be modified to include:

       lim T-'cw,w,'>0, where wI = [x,@x,,l].
      T-+X       I


    Pagan (1980) also shows that if (a) the model is locally asymptotically iden-
tified; (b) (i) x, is uniformly bounded from above and non-stochastic; (ii) the
model in state-space form is uniformly completely observable and uniformly
completely controllable; (iii) the characteristic roots of M are smaller than one in
absolute value, and (c) the true parameter vector 8’ is an interior point of the
permissible parameter space which is a subset of R",then the maximum likelihood
estimator of 8’ is consistent and has a limiting distribution which is normal with a
covariance matrix equal to the inverse of the information matrix. If the transition
matrix M is given, the conclusion holds for the maximum likelihood estimator of
the remaining parameters, with assumption (b) (iii) deleted.
    For the case of regression with non-stationary coefficients, i.e. M having
characteristic roots equal to unity, conditions for the identifiability of the parame-
ters remain to be further investigated. Hatanaka and Tanaka (1980) have studied
the identifiability conditions under the assumption that PO has a known normal
prior distribution.


10.    Testing constancy of regression coefficients

An important question in regression analysis is whether the coefficients for
different observations are identical. A test frequently employed is to divide the
observations into two groups and test the null hypothesis of the equality of the
entire set or a subset of coefficients in the two regressions using an F statistic. A
number of other tests have been suggested for the null hypothesis of constancy of
regression coefficients, partly depending on the alternative hypotheses to be
compared. A useful alternative hypothesis is that the vector & of k, regression
coefficients of interest is generated by the process:

                                                                               (10.1)

where nt is normally and independently distributed with mean zero and a
diagonal covariance matrix V. The null hypothesis states that V= 0. Several tests
of the null hypothesis have been suggested.
   First, by the asymptotic normality of the maximum likelihood estimator of the
elements of V, one can use a quadratic form in these elements weighted by the
inverse of their covariance matrix (obtained from the information matrix) and
approximate its distribution by a x2 distribution, but this approximation is crude.
                                                                          G. C. Chow

   The above brief review of several tests of the constancy of regression coeffi-
cients indicates that further research is required to obtain a uniformly most
powerful test statistic which has a known distribution in small samples and is also
computationally simple.



11. Problems for research

In concluding this survey of models with time-varying coefficients, I would like to
list several problems for research.
   First, computational problems require further attention for several of the
methods discussed in this paper: in the numerical maximization of the likelihood
functions of the basic regression model in Section 4, of the model of system of
linear regressions in Section 5, and of the models of linear and non-linear
simultaneous equations in Sections 6 and 7.
   Second, the identification problem remains to be further investigated for both
models with roots of unity in the transition matrix and models with stationary
coefficients, but especially the former. It would be desirable to find some useful
conditions for the identifiability of the parameters of the models of Sections 4, 5,
6 and 7.
   Third, the finite-sample distributions of many of the statistics used in the
regression model with changing coefficients can be further examined. If u2, V and
M are known, the estimate of /3, is a GLS estimate and is normal, best linear
unbiased. When maximum likelihood estimates of u2, V and possibly M are used,
not only their own sampling distributions but the sampling distributions of the
estimates of & based on them in finite samples are not sufficiently known. In
particular, the estimates of the diagonal elements of V are subject to non-negativ-
ity constraints and special attention needs to be given to their sampling distribu-
tions.
    Fourth, the problem of estimating simultaneous-equation models with changing
parameters deserves to be further studied. How good is the linearization approach
suggested in Sections 6 and 7? What are the sampling distributions of the
estimates obtained in finite samples? Other approaches than the linearization
approach should be considered, including, for example, the use of second-order
terms in the expansion of the model equations, the application of the method of
instrumental variables, and the search for limited-information methods of estima-
tion, as compared with the full-information method suggested.
    Fifth, as mentioned in Section 10, the problem of testing the constancy of
regression coefficients with the time-varying coefficient model serving as the
alternative is by no means completely resolved, although several useful solutions
have been suggested. Surely, the problem of testing the constancy of parameters
Ch. _‘I: Random and Changing Coefficient Models                                                  1243

in simultaneous-equation models, with the corresponding models with time-vary-
ing parameters serving as alternatives, is open.
   Finally, the applications of the models discussed in this paper to economic
problems will most likely continue. Applications to specific applied problems will
generate problems of their own. A number of applications have appeared, several
having been cited in LaMotte and McWhorter (1978, p. 816), for example. An
illustration of an applied problem having its special features which deserve special
treatment is the estimation of seasonal components in economic time-series, as
discussed in Pagan (1973, Engle (1978), and Chow (1978).



References

Arora, Swamjit S. (1973) “Error Components Regression Model and Their Applications”, Annals of
  Economic and Social Measurement,    2, 451-462.
Belsley, David A. (1973) “On the Determination of Systematic Parameter Variation in the Linear
  Regression Model”, Annals of Economic and Social Measurement, 2, 487-494.
Belsley, David A. (1973) “A Test for Systematic Variation in Regression Coefficients”, Annals of
  Economic and Social Measuremenr,    2, 495-500.
Belsley, David A. (1973) “The AppEcability of the Kalman Filter in the Determination of Systematic
  Parameter Variation”, Annals of Economic and Social Measurement, 2, 531-534.
Belsley, David A. and Kuh, Edwin (1973) “Time-varying Parameter Structures: An Overview”, Annals
  of Economic and Social Measuremem,    2, 375-380.
Breusch, T. S. and Pagan, A. R. (1979) “A Simple Test for Heteroscedasticity and Random Coefficient
  Variation”, Econometrica, 47, 1287-1294.
Brown, R. L., Durbin, J. and Evans J. M. (1975) “Techniques for Testing the Constancy of Regression
  Relationships Over Time, with Comments”, Journal of the Royal Statistical Society B-37, 149-192.
Chemoff, H. (1954) “On the Distribution of the Likelihood Ratio”, Anna/s of Mathematical Statistics,
  25, 573-578.
Chow, G. C. (1960) “Tests of Equality Between Sets of Coefficients in Two Linear Regressions”,
  Econometrica,   28, 591-605.
Chow, G. C. (1975) Analysis and Control of Dynamic Systems. New York: John Wiley and Sons, Inc.
Chow, G. C. (1978) “Comments on ‘A Time Series Analysis of Seasonality in Econometric Models’ by
  Charles Plosser”, in A. Zellner (ed.), Seasonal Analysis of Economic Time Series (U.S. Department of
  Commerce, Bureau of the Census, Economic Research Report ER-1, 398-401.
Chow, G. C. (1981) Econometric Analysis by Control Methoa!s. New York: John Wiley and Sons, Inc.
Cooley, T. F. and Prescott, E. (1973) “An Adaptive Regression Model”, International Economic
  Reoiew, 14, 364-371.
Cooley, T. F. and Prescott, E. (1973) “Tests of an Adaptive Regression Model”, Review of Economics
  and Statistics, 55, 248-256.
Cooley, T. F. and Prescott, E. (1973) “Varying Parameter Regression: A Theory and Some Applica-
  tions”, Annals of Economic and Social Measurement, 2, 463-474.
Cooley, T. F. and Prescott, E. (1976) “Estimation in the Presence of Stochastic Parameter Variation”,
  Economerrica, 44, 167-183.
Cooley, T. F., Rosenberg, B. and Wall, K. (1977) “A Note on Optimal Smoothing for Time-varying
  Coefficient Problems”, Annals of Economic and Social Measurement, 6, 453-456.
Cooper, J. P. (1973) “Time-varying Regression Coefficients: A Mixed Estimation Approach and
  Operational Limitations of the General Markov Structure”, Annals of Economic and Social Measure-
  ment, 2, 525-530.
Duncan, D. B. and Horn, S. D. (1972) “Linear Dynamic Recursive Estimation From the Viewpoint of
  Regression Analysis”, Journal of the American Statistical Association, 67, 815-821.
1244                                                                                    G. C. Chow

Engle, R. F. (1978) “Estimating Structural Models of Seasonality”, in A. Zellner (ed.), Seusonul
  An+is of Economic Time Series (U.S. Department of Commerce, Bureau of the Census, Economic
  Research Report ER-1). 281-297.
Garbade, K. (1977) “Two Methods for Examining the Stability of Regression Coefficients”, Journal of
  the Amertcon Stattstical Association, 72, H-63.
Goldfeld, S. M. and Quandt, R. E. (1973) “The Estimation of Structural Shifts by Switching
  Regressions”, Annuls of Economtc and Sociul Measurement, 2, 475-486.
Gourieroux, C., Holly, A. and Montfort, A. (1982) “Likelihood Ratio Test, Wald Test and Kuhn-
  Tucker Test in Linear Models with Inequality Constraints on the Regression Parameters”,
  Econometrica, SO, 63-80.
Hannan, E. J. (1968) “The Identification of Vector Mixed Autoregressive-Moving   Average Systems”,
  Biometrika, 56: 223-225.
Harvey, A. and Phillips, G. D. A. (1976) “The Maximum Likelihood Estimation of Autoregressive-
  Moving Average Models by Kalman Filtering”. University of Kent at Canterbury, Working Paper
  No. 3. S.S.R.S. SUDDOrted Proiect on Testine for Suecification Error in Econometric Models.
Harvey, A. and Co&r, P. (1977) “Testing fo; Functional Misspecification in Regression Analysis”,
 Journal of Econometrics, 6, 103-120.
Harvey, A. C. (1978) “The Estimation of Time-Varying Parameters from Panel Data”, Ann&s de
  I’INSEE, 30-31, 203-226.
Harvey, A. C. and Phillips, G. D. A. (1979) “Maximum Likelihood Estimation of Regression Models
  with Autoregressive-Moving Average Disturbances”, Biometriku, 66.
Harvey, A.C. and Phillips, G.D.A. (1982) “The Estimation of Regression Models with Time-Varying
  Parameters”, in: M. Deistler, E. First and G. Schwiidiauer, eds., Games, Economic Dvtamics und
  Time Series Anujpis. Cambridge, Mass.: Physica-Verlag.
Hatanaka, M. (1980) “A Note on the Applicability of the Kalman Filter to Regression Models with
  Some Parameters Time-Varying and Others Invarying”, Australian Journal of Statistics, 22,298-306.
Hatanaka, M. and Tanaka, K. (1980) “On the Estimability of the Covariance Matrix in the Random
  Walk Representing the Time-Changing Parameters of the Regression Models” Osaka University,
  Faculty of Economics, Discussion Paper No. 28.
Ho, Y. C. and Lee, R. C. K. (1964) “A Bayesian Approach to Problems in Stochastic Estimation and
  Control”, IEEE Transactions on Automatic Control, AC-9, 333-339.
Kalman, R. E. (1960) “A New Approach to Linear Filtering and Prediction Problems”, Transactions
  of ASME (American Society of Mechanical Engineers), Series D: Journal of Busic Engineering, 82,
  35-4s.
Kelejian, H. H. (1974) “Random Parameters in Simultaneous Equation Framework: Identification
  and Estimation”, Econometrica, 42, 517-527.
LaMotte, L. R. and McWhorter, A., Jr. (1978) “An Exact Test for the Presence of Random Walk
  Coefficients in a Linear Regression Model”, Journal of the American Statistical Association, 73,
  816-820.
Ljung, L. (1979) “Asymptotic Behavior of the Extended Kalman Filter as a Parameter Estimator for
  Linear Systems”, IEEE Transactions on Automatic Control, AC-24, 36-50.
Mehra, R. K. (1970) “On the Identification of Variances and Adaptive Kalman Filtering”, IEEE
  Transactions on Automatic Control, AC15     175-184.
Mehra, R. K. (1971) “Identification of Stochastic Linear Dynamic Systems Using Kalman Filter
 Representation”, AIAA Journal, 9, 28-31.
Mehra, R. K. “Kalman Filters and Their Applications to Forecasting”, in: TIMS Studies in the
 Management Sciences. Amsterdam: North-Holland, 75-94.
Moran, P. A. P. (1970) “On Asymptotically Optimal Tests of Composite Hypotheses”, Biometriku, 57,
  47-5s.
Pagan, A. R. (1975) “A Note on the Extraction of Components From Time Series”, Econometrica, 43,
  163-168.
Pagan, A. R. (1978) “A Unified Approach to Estimation and Inference for Stochastically Varying
  Coefficient Regression Models”, Center for Operations Research and Econometrics, Louvain-la-
  Neuve, CORE Discussion Paper 7814.
Pagan, A. R. (1980) “Some Identification and Estimation Results for Regression Models with
  Stochastically Varying Coefficients”, Journal of Econometrics, 13, 341-363.



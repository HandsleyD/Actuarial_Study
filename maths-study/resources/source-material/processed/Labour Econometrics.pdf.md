---
normalized_id: shared-pdf-reference-labour-econometrics
exam_code: SHARED
material_scope: labour econometrics.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Labour Econometrics.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-labour-econometrics

C‘hupter 32


LABOR              ECONOMETRICS*
JAMES         J. HECKMAN

Utliversity    of Chicago

THOMAS          E. MACURDY




Contents

0. Introduction                                                                                1918
1. The index function model                                                                    1920
       1.1.     Introduction                                                                   1920
       1.2.     Some definitions       and basic ideas                                         1921
       1.3.     Sampling       plans                                                           1926
2.    Estimation                                                                               1929
       2.1.     Regression      functions   characterizations                                  1930
       2.2.     Dummy        endogenous     variable    models                                 1945
3.    Applications of the index function model                                                 1952
       3.1.     Models with the reservation            wage property                           1952
       3.2.     Prototypical      dummy endogenous          variable   models                  1959
       3.3.     Hours   of work and labor supply                                               1963
4.  Summary                                                                                    1971
Appendix: The principal assumption                                                             1972
References                                                                                     1974




   *Heckman’s   research on this project was supported by National Science Foundation    Grant No.
SES-8107963 and NIH Grants ROl-HD16846 and ROl-HD19226.           MaCurdy’s research on this project
was supported  by National Science Foundation    Grant No. SES-8308664 and a grant from the Alfred
P. Sloan Foundation.    This paper has benefited greatly from comments generously given by Ricardo
Barros, Mark Gritz, Joe Hotz, and Frank Howland.

Hmdhook of Econometrics, Volume 111, Edited by Z. Griliches und M.D. Intriligutor
0 Elsevier Science Publishers BV, I986
1918                                                   J. J. Heckmun and T. E. MuCurdy




0.     Introduction

 In the past twenty years, the field of labor economics has been enriched by two
 developments: (a) the evolution of formal neoclassical models of the labor market
 and (b) the infusion of a variety of sources of microdata. This essay outlines the
econometric framework developed by labor economists who have built theoreti-
cally motivated models to explain the new data.
   The study of female labor supply stimulated early research in labor economet-
rics. In any microdata study of female labor supply, two facts are readily
apparent: that many women do not work, and that wages are often not available
for nonworking women. To account for the first fact in a theoretically coherent
framework, it is necessary to model corner solutions (choices at the extensive
margin) along with conventional interior solutions (choices at the intensive
margin) and to develop an econometrics sufficiently rich to account for both types
of choices by agents. Although there were precedents for the required type of
econometric model in work in consumer theory by Tobin (1958) and his students
[e.g. Rosett (1959)], it is fair to say that labor economists have substantially
improved the original Tobin framework and have extended it in various im-
portant ways to accommodate a variety of models and types of data. To account
for the second fact that wages are missing in a nonrandom fashion for nonwork-
ing women, it is necessary to develop models for censored random variables. The
research on censored regression models developed in labor economics had no
precedent in econometrics and was largely neglected by statisticians (See the essay
by Griliches in this volume).
   The econometric framework developed for the analysis of female labor supply
underlies more recent models of job search [Yoon (1981), Kiefer and Neumann
(1979), Flinn and Heckman (1982)], occupational choice [Roy (1951), Tinbergen
(1951), Siow (1984), Willis and Rosen (1979), Heckman and Sedlacek (1984)], job
turnover [Mincer and Jovanovic (1981) Borjas and Rosen (1981), Flinn (1984)],
migration [Robinson and Tomes (1982)], unionism [Lee (1978) Strauss and
Schmidt (1976), Robinson and Tomes (1984)] and training evaluation [Heckman
and Robb (1985)].
   All of the recent models presented in labor econometrics are special cases of an
index function model. The origins of this model can be traced to Karl Pearson’s
(1901) work on the mathematical theory of evolution. See D. J. Kevles (1985, p.
31) for one discussion of Pearson’s work. In Pearson’s framework, discrete and
censored random variables are the manifestations of underlying continuous
random variables subject to various sampling schemes. Discrete random variables
are indicators of whether or not certain latent continuous variables lie above or
Ch. 32: L.&or Econometrics                                                                         1919

below given thresholds. Censored random variables are direct observations                       on the
underlying       random variables given that certain selection criteria are met. Assum-
ing that the underlying            continuous     random variables are normally          distributed
leads to the theory of biserial and tetrachoric correlation. [See Kendall and Stuart
(1967, Vol. II), for a review of this theory.] Later work in mathematical                          psy-
 chology by Thurstone             (1927) and Bock and Jones (1968) utilized the index
 function     framework       to produce mathematical         models of choice among discrete
 alternatives     and stimulated a considerable         body of ongoing research in economics
 [See McFadden’s          paper in Volume II for a survey of this work and Lord and
Novick (1968) for an excellent discussion                  of index function      models used in
psychometrics].
    The index function            model cast in terms of underlying            continuous        latent
 variables provides the empirical counterpart              of many theoretical models in labor
 economics.       For example, it is both natural and analytically            convenient       to for-
 mulate labor supply or job search models in terms of unobserved                        reservation
wages which can often be plausibly modeled as continuous                      random variables.
When reservation            wages exceed market wages, people do not work. If the
 opposite occurs, people work and wages are observed. A variety of models that
 are special cases of the reservation wage framework will be presented below in
 Section 3.
    The great virtue of research in labor econometrics is that the problems and the
 solutions     in the field are the outgrowth            of research on well-posed         economic
 problems.      In this area, the economic problems lead and the proposed statistical
 solutions follow in response to specific theoretical and empirical challenges. This
 imparts a vitality and originality            to the field that is not found in many other
 branches of econometrics.
     One format for presenting            recent developments       in labor econometrics         is to
 chart the history of the subject, starting with the earliest models, and leading up
 to more recent developments.             This is the strategy we have pursued in previous
joint     work [Heckman            and MaCurdy         (1981); Heckman,       Killingsworth         and
 MaCurdy (1981)]. The disadvantage               of such a format is that basic statistical ideas
become intertwined             with specific economic        models, and general econometric
points are sometimes difficult to extract.
    This paper follows another format. We first state the basic statistical                         and
econometric        principles. We then apply them in a series of worked examples. This
 format has obvious pedagogical               advantages.     At the same time, it artihcially
 separates economic problems from econometric                  theory and does not convey the
flow of research problems that stimulated the econometric                  models.
    This paper is in three parts: Part 1 presents a general introduction               to the index
 function     framework;        Part 2 presents methods for estimating             index function
models; and Part 3 makes the discussion concrete by presenting a series of models
in labor economics that are special cases of the index function framework.
1920                                                                     J. J. Heckman and T. E. MaCurdy

1.     The index function model



1.1.    Introduction

The critical assumption at the heart of index function models is that unobserved
or partially observed continuous random variables generate observed discrete,
censored, and truncated random variables. The goal of econometric analysis
conducted for these models is to recover the parameters of the distributions of the
underlying continuous random variables.
   The notion that continuous latent variables generate observed discrete, censored
and truncated random variables is natural in many contexts. For example, in the
discrete choice literature surveyed by McFadden (1985), the difference between
the utility of one option and the utility of another is often naturally interpreted as
a continuous random variable, especially if, as is sometimes plausible, utility
depends on continuously distributed characteristics. When the difference of
utilities exceeds a threshold (zero in this example), the first option is selected. The
underlying utilities of choices are never directly observed.
   As another example, many models in labor economics are characterized by a
“reservation wage” property. Unemployed persons continue to search until their
reservation wage - a latent variable-is less their the offered wage. The difference
between reservation wages and offered wages is a continuous random variable if
some of the characteristics generating reservation wages are continuous random
variables. The decision to stop searching is characterized by a continuous latent
variable falling below a threshold (zero). Observed wages are censored random
variables with the censoring rule characterized by a continuous random variable
(the difference between reservation wages and market wages) crossing a threshold.
Further examples of index functions generated by economic models are presented
in Section 3.
   From the vantage point of context-free statistics, using continuous latent
variables to generate discrete, censored or truncated random variables introduces
unnecessary complications into the statistical analysis. Despite its ancient heri-
tage, the index function approach is no longer widely used or advocated in the
modern statistics literature. [See, e.g. Bishop, Fienberg and Holland (1975) or
Haberman (1978) Volumes I and II.]’ Given their disinterest in behavioral
models, many statisticians prefer direct parameterizations of discrete data and
censored data models that typically possess no behavioral interpretation. Some
statisticians have argued that econometric models that incorporate behavioral

  ‘Such models are still widely used in the psychometric   literature.    See Lord and Novick   (1968) or
Bock and Jones (1968).
Ch. 3.?: Lohor Econometr~ts                                                                                 1921

theory are needlessly complicated.   For this reason labor economics                           has been the
locus of recent research activity on index function models.



1.2.       Some dejnitions     and basic ideas

Index functions      are defined as continuously   distributed     random variables.     It is
helpful    to distinguish    two types of index functions:         those corresponding      to
continuous    random variables that are not directly observed in a given context (2)
and those corresponding         to continuous    random      variables   that are partially
observed (Y) in a sense to be made precise below. In the subsequent              discussion,
the set ti represents the support (or the domain of definition) of (Y, Z); the set 0
denotes the support of Z, and * is the support of Y; &? is the Cartesian product
of \k and 0.2

I .2.1.      Quan tal response models

We begin with the most elementary index function model. This model ignores the
existence of Y and focuses on discrete variables whose outcomes register the
occurrence  of various states of the world. Let 0, be a nontrivial subset of 0.
Although we do not directly observe Z, we know if




If this event occurs, we denote          it by setting an indicator             function   ai equal to one.
More formally,

                        if Z E O,,
                                                                                                       (1.2.1)
                        otherwise.

When 6; = 1, state i occurs. The distribution               of Z induces         a distribution     on the ai
because

          Pr(S, =l)   = Pr(Z   E Oi).                                                                  (1.2.2)

   The discrete choice models surveyed by McFadden          (1985) can be cast in this
framework.    Let Z be a J X 1 vector of utilities, Z = (V(l), . . . , V(J))‘. The event
that option i is selected is the event that V(i) is maximal in the set { V(j)}:=,.    In
the space of the distribution    of utilities, the event that V(i) is maximal corre-

  ‘a, 0 and * and all partitions     of these sets considered   in this paper    are assumed   to be Bore1 sets.
1922                                                             J. J. Heckman und T. E. MaC’ur<p

sponds to the subspace of 2 defined by the inequalities

         V(j)-V(i)      10,        j=l   ,..., J.

Then in this notation

         O,=                           J},
                {ZlV(j)-V(i)<O, j=l,...,

and

         Pr(ai=l)     =Pr(ZEO,).

   Introducing exogenous variables (X) into this model raises only minor concep-
tual issues3 The distribution of Z can be defined conditional on X, and the
regions of definition of 6, can also be allowed to depend on X (so 0; = Oi( X)).
The conditional probability that 8, =I given X is

         Pr(6,=1lX)     =Pr(ZE@JX).                                                      (1.2.3)

1.2.2.      Models involving endogenous discrete and continuous random variables

We now consider a selection mechanism which records observations on Y only if
(Y, Z) lies in some subspace of 0. More formally, we define the observed value of
Y as Y* with

         Y*=Y          if(Y,Z)EQ,,                                                       (1.2.4)

where fi, is a subspace of 0. We establish the convention that

         y*=o          if(Y,Z)@Q,.                                                       (1.2.5)

This convention is innocuous because the probability that Y = 0 is zero as a
consequence of the assumption that Y is an absolutely continuous random
variable.
   A special case of this selection mechanism produces truncated random vari-
ables. Y * is a truncated random variable if the event (Y, Z) E a, implies that Y
must lie in a strict subset of its support 9. Thus Y * is observed only in certain
ranges of values of Y. For example, negative income tax experiments sample only
low income persons. Letting Y be income, Y * is only observed in data from such
experiments if Y is below the cut off point for inclusion of observations into the
experiments.

   ‘Exogenous    random variables are always observed and have a marginal density that shares no
parameters    in common with the conditional   distribution of the endogenous variables given the
exogenous variables.
Ch. 32: I.uhor       Econometrics                                                               1923


   Observed   values of Y produced by the general selection mechanism               (1.2.4)
without restrictions  on the range of Y * are censored random variables. As an
example of a censored random variable, consider the analysis of Cain and Watts
(1973). Let Y be hours of work, Z, be wage rates, and Z, denote unearned
income, where the Z, are assumed to be unobserved             in this context. Negative
income tax experiments     observe Y only for low income people (i.e. people for
whom Z,Y + Z, is sufficiently low). While sampled hours of work - Y * -may
take on all values assumed by Y, the density of Y * may differ greatly from the
density of Y.
   A useful extension   of the selection mechanism        presented   in eq. (1.2.4) is a
multi-state model which defines observed values of Y for various states of the
world indexed by i, i = 1,. . . , I. For state i we define the observed value of Y as

       y.*=r                 if (Y,Z)     EGi,   i=l,...,           I,,                     (1.2.6)

where the Oi’s are subsets of 0, and I, ( 4 I) is the number of states in which Y
is observed. In the remaining states (I - Zi in number),   Y is not observed. We
define an indicator variable ai by

                 1           if(Y,Z)Ea,
      6; =                                       i=l        ,...,   Z.
               i 0           if(Y,Z)eQ,

To avoid uninteresting  complications,   it is assumed that U fclOi = 9, and that
the sets Qi and Qj are disjoint for i f j. Without any loss of generality, we may
set

       Y*=O              if ai=O.                                                           (1.2.7)

The variable     Y * = ~fl=,~*   equals Y if it is observed (i.e. if ai = 1 for some
i=l ,..., Ii), and Y * = 0 if any of the states i = Z, + 1,. _. , Z occur. In other words,
 Y is observed when cj’=i6, = 1.
    To obtain specifications   of various density functions        that are useful in the
econometrics    of labor supply, rationing and state contingent        demand theory, let
f( y, z) be the joint density of (Y, Z). Denote the conditional        support of Z when
 (Y, Z) E Qi as Oily which is defined so that, for any fixed Y = y E qlk,, the set of
 admissible   Y values in fii, the event Z E Oily necessarily implies Si = 1; the set
 Oilv in general depends on Y = y. In this notation, the density of y* conditional
 on 6, = 1 is

                             /&“,*f(YA4 dz
                                                       for y,* E qj
      gi(Y?>         =
                         i
                                    Pr(6, =l)                             i=l   ,...> Z1,   (1.2.8)
1924                                                                      J. J. Heckman and T. E. MaCurdy

with


       Pr(8, =l)      = Pr((Y, Z) E tii) = /of(y,           z)dydl,


where the notation Jo,,, and Jo denotes integration over the sets 0 given y and
9, respectively - i.e.




and




The function gi( .) is the conditional density of Y given that selection rule (1.2.6)
is satisfied. As a consequence of convention (1.2.7) the distribution of Yj* when
& = 0 has point mass at q* = 0 (i.e. Pr(q* = 016, = 0) = 1).
   The joint density of Y* and Si is

       gi(y,*,ai)     = [gi(y~)Pr(Gi=1)]“‘[J(y~)Pr(Si=0)]’-6’,                             i=l   ,***, 1,
                                                                                                      (l!2.9)

where J( yi*) = 1 if y: = 0 and J( y,*) = 0 otherwise, where Pr( i_$= 0) = 1 - Pr( ai
 = l), and where we adopt the convention that zero raised to the zero-th power
equals one (i.e. when ai = 0 and yr 4 ‘k; so gi( y:) = 0, then [ gi( yT)Pr(6; = l)]’
 = l)?
   From (1.2.9) the conditional density of Y * given that state i = 1,. . . , I, occurs
is



Y * is defined to be degenerate at zero if one of the other states i = I1 + 1,. . . , I
occurs. A compact expression for the conditional density of Y * is


       ~(y*l~1,...,     ST>= i&I [gi(Y*)ls87 if C’ ai=                                              (1.2.10)
                                                            i=l


   4 We use the term “density” in the sense of the product measure d [ yl + K, ( y, )] X d [ K, (z ) + Kl (z )]
on R’ x[O,l] where dy is Lebesgue measure on R’ and K,(z)          is the probability distribution that
assigns the point a in R’ unit mass.
Ch. 32: Labor Econometrics                                                                            1925

with Y * = 0 with probability one when 6; = 1 for some value of i = I, + 1,. . . , I.
The joint density of Y * and S,, . . . , 6, is the product of the conditional density of
Y* (1.2.10) and the joint probability of 6 ,,..., 6,; i.e.


      ~b*Jl,...,          =lfil
                        sf>              [gi(Y*)Pr(sz   =l>l   8’i=++l
                                                                     I
                                                                          [J(Y?)Pr(si=l)l         SC.
                                                                                                (1.2.11)

   In some problems the particular state of the world in which an observation
occurs is unknown (i.e. the ai’s are not separately observed); it is only known that
one of a subset of states has occurred. Given information on Y *, one can
determine whether or not one of the first Ii states has occurred-since         Y* # 0
indicates ai = 1 for some i 2 I, and Y * = 0 indicates 6, = 1 for some i > II -but it
may not be possible to determine the particular i for which Si = 1.
   For example, suppose that when Y * # 0, one only knows that either 8, =
C)=,S, = 1 or S, = C!\r-I,+ iSi = 1. Suppose further that when Y * = 0, it is only
known that & = c!_,_[ +iSi =l. The densities (1.2.10) and (1.2.11) cannot directly
be used as a basis for inference in this situation. (Unless, of course, 1, = 1, 1, = 2,
and I = 3.)
   The densities appropriate for analyzing data on Y * and the 8,‘s are obtained
by conditioning on the available knowledge about states. The desired densities are
derived by computing the expected value of (1.2.10) to eliminate the individual
8,‘s that are not observed. In particular, the marginal density of y* given 8, = 1 is
given by the law of iterated expectations as

      k(y*@,=l)         =E(h(y*16,,...,6,)@,=1)

                        = i           h(y*16i=1)Pr(6i=11;T1=l)
                            r=l



                        = 5 g,(Y*)Pr(G,=l)/Pr(&=l).
                            i=l


Analogously,       the density of Y * given & = 1 is


      k(y*lZ,=l)        =         ;      gi(y*)Pr(Si=1)/Pr(8,=1).5
                            i=I,+l


When 8, = 1, Y * is degenerate at zero. Thus the density of Y * conditional on the

   ‘These derivations use the fact that the sets D, are qmtually exclusive so Pr( 8, = 1) = Ez, Pr( 6, = 1)
and E( 13,)6, = 1J = Pr( 8, = 1 IS, = 1) = Pr( 8, = l)/Pr( 6, = l), with completely analogous results hold-
ing for 6, and 8,.
1926                                                             J. J. Heckman and T E. MaCur&

6,‘sis given by
                                                                        $1
        h(y*18,,$,,8,)    =       5    g,(y*)Pr(Si=1)/Pr(8i=1)
                              [ i=l                                 I




where Y* has point mass at zero when 8s = 1 (i.e. Pr( Y * = 01& = 1) = 1).
Multiplying   the conditional density (1.2.12) by the probability of the events 6i,


                                                              $1
&, 8, generates the joint density for Y* and the 6,‘s:


        h(y*,8,,8,,&)     =       i
                              [ i=l
                                       g,(y*)Pr(G,=l)

                                        II
                                                              1
                              ’        C     gi(Y*)Pr(Gi=l)                        =l)        “.
                                  [ i=I,+l                                                I
                                                                                      (1.2.13)


Densities  of the form (1.2.8)-(1.2.13)    appear repeatedly    in the models for the
analysis of labor supply presented in Section 3.3.
   All the densities    in the preceding   analysis can be modified to depend on
exogenous variables X, as can the support of the selection region (i.e. 9, = Q;(X)).
Writing f( y, z IX) to denote the appropriate       conditional  density, only obvious
notational  modifications   are required to introduce such variables.



I. 3.    Sampling plans

A variety of different sampling plans are used to collect the data available to
labor economists.     The econometric      implications   of data collected from such
sampling plans have received a great deal of attention in the discrete choice and
labor econometrics    literatures. In this subsection we define the concepts of simple
random samples, truncated random samples, censored random samples, stratified
random samples, and choice based samples. To this end we let h(X) denote the
population    density of the exogenous variables        X, so that the joint density of
(Y,S,X)    is

        f(YJ, X) =f(WX>h(X),                                                             (1.3.1)
                                                                                                      1927

with c.d.f.

      F(Y,6, Jo                                                                                  (1.3.2)


From the definition of exogeneity, the marginal density of X contains no
parameters in common with the conditional density of (Y, 8) given X.
   In the cases considered here, the underlying population is assumed to be
infinite and generated by probability density (1.3.1) and c.d.f. (1.3.2). If the
sampling is such that it produces a simple random sample, successive observations
must (a) be independent and (b) each observation must be a realization from a
common density (1.3.1). In this textbook case, the sample likelihood is the
product of terms of the form (1.3.1) with realized values of (Y, 6, X) substituted
in place of the random variables.
   Next suppose that from a simple random sample, observations on (Y, 6, X) are
retained only if these random variables lie in some open subset of the support of
(Y, 6, X). More precisely suppose that observations on (Y, S, X) are retained only
if

      w, J-1EAlCA,                                                                               (1.3.3)

where A is the support of random variables (Y, 6, X).
   In the classical statistical literature [See, e.g. Kendall and Stuart, Vol. II, (1967)]
no regressors are assumed to appear in the model. In this case, a sample is defined
to be censored if the number of observations not in A, is recorded (so S is known
for all observations). If this information is not retained, the sample is truncated.
When regressors are present, there are several ways to extend these definitions
allowing either S or X to be recorded when (Y, 8, X) P A,. In this paper we adopt
the following conventions. If information on (8, X) for all (Y, 6, X) e A, is
retained (but Y is not known), we call the sample censored. If information on
(8, X) is not retained for (Y, S, X) P A,, the sample is truncated. Note that in
these definitions A, can consist of disconnected sets of A.
   One operational difference between censored and truncated samples is that for
censored samples it is possible to consistently estimate the population probability
that (Y, 6, X) E A,, whereas for truncated samples these probabilities cannot be
consistently estimated as sample sizes become large. In neither sample is it
possible to directly estimate the conditional distribution of (Y, 6, X) given
(Y, 6, X) GEA, using an empirical c.d.f. for this subsample.

   ‘It is possible to estimate this conditional     distribution  using the subsample    generated  by the
rcguircmcnt   that (Y, 6, X) E A, for certain specific functional form assumptions   for F. Such forms for
F are termed “recoverable”    in the literature. See Heckman and Singer (1986) for further discussion of
this issue of recoverability.
1928                                                                 J. J. Heckman and T. E. MaCurdy

    In the special case in which the subset A, only restricts the support of X,
 (exogenous     truncated   and censored samples), the econometric              analysis can pro-
 ceed conditional     on X. In light of the assumed exogeneity of X, the only possible
 econometric     problem is a loss in efficiency of proposed estimators.
    Truncated     and censored samples are special cases of the more general notion of
 a strati$ed sample. In place of the special sampling rule (1.3.3), in a general
 stratified sample, the rule for selecting independent           observations    is such that even
 in an infinite sample the probability         that (Y, 8, X) E Ai c A does not equal the
.population     probability   that (Y, 6, X) E A, where U f,iAi = A, and A i and A j
 are disjoint for all i # j. It is helpful to further distinguish between exogenous&
 stratijied and endogenously strati$ed samples.
     In an exogenously      stratified sample, selection occurs solely on the X in the
 sense that the sample distribution          of X does not converge to the population
 distribution    of X even as the sample size is increased. This may occur because
 data are systematically      missing for X in certain regions of the support, or more
 generally because some subsets of the support of X are oversampled.                        However,
 conditional    on X, the sample distribution       of (Y, 6 ]X) converges to the population
 distribution.    By virtue of the assumed exogeneity of X, such a sampling scheme
 creates no special econometric problems.
     In an endogenously        stratified sample, selection occurs on (Y, 8) (and also
 possibly on the X), and the sampling rule is such that the sample distribution                    of
 (Y, S) does not converge to the population             distribution     F( Y, 8) (conditional     or
  unconditional     on X). This can occur because data are missing for certain values
  of Y or 6 (or both), or because some subsets of the support of these random
  variables are oversampled.        The special case of an endogenously           stratified sample
  in which, conditional      on (Y, S), the population         density of X characterizes         the
  data, i.e.



       h(X,Y,S)=fgfy),                                                                            (1.3.4)
                               7




 is termed choice based sampling in the literature. [See McFadden         in Volume II or
 the excellent survey article by Manski and McFadden             (1981).‘] In a general
 endogenously   stratified sample, (1.3.4) need not characterize       the density of the
 data produced by an infinite repetition of the sampling rule. Moreover, in both
 choice based and more general endogenously           stratified   samples, the sample
 distribution of X depends on the parameters       of the conditional       distribution of
 (Y, 8) given X so, as a consequence       of the sampling       rules, X is no longer


    ‘Strictly speaking, the choice based sampling literature focuses on a model in which   Y is integrated
 out of the model so that 6 and X are the relevant random variables.
Ch. 32: L&or Econometrics                                                                            1929

exogenous in such samples, and its distribution           is informative    on the structural
parameters     of the model.
   Truncated     and censored samples are special cases of a general stratified sample.
A truncated      sample is produced from a general stratified sample for which the
sampling     weight for the event (Y, S, X) 4 A, is identically          zero. In a censored
sample, the sampling weight for the event (Y, 6, X) GEA, is the same as the
population     probability    of the event.
   Note that in a truncated sample, observed Y may or may not be a truncated
random variable. For example, if A, only restricts 6, and 6 does not restrict the
support of Y, observed Y is a censored random variable. On the other hand, if A,
restricts the support of Y, observed Y is a truncated random variable. Similarly in
a censored sample, Y may or may not be censored. For example, if A, is defined
only by a restriction       on values that 6 can assume, and 6 does not restrict the
support of Y, observed Y is censored. If A, is defined by a restriction                on the
support of Y, observed Y is truncated even though the sample is censored. An
unfortunate     and sometimes confusing nomenclature          thus appears in the literature.
The concepts of censored and truncated             random variables are to be carefully
distinguished     from the concepts of censored and truncated random samples.
   Truncated     and censored sample selection rule (1.3.3) is essentially identical to
the selection rule (1.2.6) (augmented to include X in the manner suggested at the
end of subsection        1.2). Thus the econometric     analysis of models generated by
rules such as (1.2.6) can be applied without modification          to the analysis of models
estimated     on truncated      and censored samples. The same can be said of the
econometric     analysis of models fit on all stratified samples for which the sampling
rule can be expressed as some restriction on the support of (Y, Z, 6, X). In the
recent research in labor econometrics,       all of the sample selection rules considered
can be written in this form, and an analysis based on samples generated                     by
(augmented)      versions of (1.2.6) captures the essence of the recent literature.8




2.   Estimation

The conventional     approach to estimating the parameters of index function models
postulates   specific functional  forms for f( y, z) or f(y, z IX) and estimates the
parameters    of these densities by the method of maximum likelihood or by the
method     of moments.     Pearson (1901) invoked a normality       assumption    in his
original work on index function models and this assumption        is still often used in

   ‘We note, however, that it is possible to construct examples of stratified sample selection rules that
cannot be cast in this format. For example, selection rules that weight various strata in different
(nonzero) proportions  than the population    proportions  cannot be cast in the form of selection rule
(1.2.6).
1930                                                                 J. J. Heckman and T. E. MaCur&

recent work in labor econometrics.          The normality    assumption      has come under
attack in the recent literature because when implications         of it have been subject to
empirical test they have often been rejected.
    It is essential to separate conceptual ideas that are valid for any index function
model from results special to the normal model. Most of the conceptual                  frame-
work underlying         the normal index model is valid in a general nonnormal         setting.
In this section we focus on general ideas and refer the reader to specific papers in
the literature where relevant details of normal models are presented.
    For two reasons we do not discuss estimation of index function models by the
method of maximum likelihood. First, once the appropriate              densities are derived,
there is little to say about the method beyond what already appears in the
literature.    [See Amemiya (1985).] We devote attention          to the derivation     of the
appropriate      densities in Section 3. Second, it is our experience that the conditions
required     to secure identification    of an index function       model are more easily
understood       when stated in a regression        or method of moments          framework.
Discussions      of identifiability that appeal ‘.o the nonsingularity    of an information
matrix have no intuitive appeal and cften degenerate into empty tautologies. For
these reasons we focus attention         on regression and method of moments proce-
dures.




2.1.       Regression function characterizations

We begin by presenting a regression function characterization         of the econometric
problems encountered      in the analysis of data collected from truncated, censored
and stratified samples and models with truncated and censored random variables.
We start with a simple two equation           linear regression    specification    for the
underlying    index functions   and derive the conditional      expectations     of the ob-
served counterparts     of the index variables.     More elaborate       models are then
developed.    We next present several procedures for estimating the parameters           of
the regression specifications.


2. I. I.    A prototypical regression specijication

A special case of the index function framework set out in Section 1 writes Y and
Z as scalar random variables which are assumed to be linear functions        of a
common set of exogenous variables X and unobservables     U and V respectively.’


   ‘)By exogenous variables we mean that X is observed and is distributed independently   of (U, V) and
that the parameters      of the distribution of X are not functions of the parameters     (fi, y) or the
parameters   of the distribution  of (U, V).
                                                                                    1931




        y=xp+u,                                                                (2.14
     z=xy+v,                                                                   (2.1.2)

where (fi, y) is a pair of suitably dimensioned         parameter   vectors, and Y is
observed only if Z E O,, a proper subset of the support of Z. For expositional
convenience     we initially assume that the sample selection rule depends only on
the value of Z and not directly on Y. In terms of the notation of Section 1, we
begin by considering       a case in which Y is observed if (Y, Z) E L’i where s2, is a
subset of the support of (Y,Z) defined by fit= {(Y,Z)l-COIYICO,               ZE@~}.
For the moment, we also restrict attention to a two-state model. State 1 occurs if
Z E 0, and state 0 is observed if Z 65 0,. We later generalize the analysis to
consider    inclusion    rules that depend explicitly   on Y and we also consider
multi-state   models.
   The joint density of (U, V), denoted by f( U, o), depends on parameters      4 and
may depend on the exogenous variables X. Since elements of /3, y, and J/ may be
zero, there is no loss of generality in assuming that a common         X vector enters
(2.1.1), (2.1.2) and the density of (U, V).
   As in Section 1, we define the indicator function

                    if ZEOt;
                    otherwise.

In a censored regression model in which        Y is observed only if 8 = 1, we define
Y * = Y if S = 1 and use the convention         that Y * = 0 if S = 0. In shorthand
notation



  The conditional     expectation   of Y given 8 = 1 and X is

     E(YlS=l,X)=xp+M,                                                          (2.1.3)

where

     M=M(Xy,J,)=E(U16=1,X),

is the conditional   expectation of U given that X and Z E 0,. If the disturbance   U
is independent     of I’, M = 0. If the disturbances  are not independent,    M is in
general a nontrivial    function of X and the parameters of the model (y, 4).
   Note that since Y * = SY, by the law of iterated expectations

     E(Y*~X)=E(Y*~6=O,X)Pr(G=O~X)+E(Y*~6=1,X)Pr(G=lIX)
                  = (Xfi+M)Pr(S=llX).                                           (2.1.4)
1932                                                                      J. J. Heckmm und T. E. MaCurdy

   Applying         the analysis   of Section    1, the conditional         distribution   of U given         X
and 2~0~            is


                                   ~~Jh z - Xy)dz
        f(UlZEO,,         x) =                                                                      (2.1.5)
                                            Pl             ’

where     P, = Pr( Z E 0, IX) is the probability               that 6 = 1 given      X. P, is defined     as




           z

               sf,( Xy)dz,
               0,
                       z-                                                                           (2.1.6)


where f,,( .) denotes        the marginal   density    of V. Hence,


                                                                                                    (2.1.7)


A regression of Y on X using a sample of observations       restricted to have 6 = 1
omits the term M from the regression function (2.1.3), and familiar specification
bias error arguments    apply.
   For example, consider a variable X, that appears in both equations (so the jth
coefficients   of /3 and y are nonzero). A regression of Y on X fit on samples
restricted   to satisfy 6 = 1 that does not include M as a regressor produces
coefficients that do not converge to /3. Letting “ *” denote the OLS coefficient,




where L,, is the probability limit of the coefficient of Xj in a projection of M on
X.” Note t/hat if a variable X, that does not appear in (2.1.1) is introduced  into a
least squares equation that omits M, the least squares coefficient converges to

        plim Sk= LMxk,

so X, may proxy M.
  The essential feature of both examples is that in samples selected so that 6 = 1,
X is no longer exogenous with respect to the disturbance        term lJ* ( = SU)

  “‘It is not the case that L MX, = (aM/aX,),       although     the approximation    may be very close. See
Byron    and Rera (1983).
C/l. 37: Labor Econometrics                                                                              1933

although it is defined to be exogenous with respect to U. The distribution of U *
depends on X (see the expression for M below (2.1.3)). As X is varied, the mean
of the distribution of U * is changed. Estimated regression coefficients combine
the desired ceteris paribus effect of X on Y (holding U * fixed) with the effect of
changes in X on the mean of U *.
   Characterizing a sample as a subsample from a larger random sample gener-
ated by having Z E 0, encompasses two distinct ideas that are sometimes
confused in the literature. The first idea is that of self-selection. For example, in a
simple model of labor supply an individual chooses either to work or not to work.
An index function Z representing the difference between the utility of working
and of not working can be used to characterize this decision. From an initial
random sample, a sample of workers is not random since Z 2 0 for each worker.
The second idea is a more general concept-that             of sample selection- which
includes the first idea as a special case. From a simple random sample, some rule
is used to generate the sample used in an empirical analysis. These rules may or
may not be the consequences of choices made by the individuals being studied.
   Econometric solutions to the general sample selection bias problem and the
self-selection bias problem are identical. Both the early work on female labor
supply and the later analysis of “experimental data” generated from stratified
samples sought to eliminate the effects of sample selection bias on estimated
structural labor supply and earnings functions.
   It has been our experience that many statisticians and some econometricians
find these ideas quite alien. From the context-free view of mathematical statistics,
it seems odd to define a sample of workers as a selected sample if the object of
the empirical analysis is to estimate hours of work equations “After all,” the
argument is sometimes made, “nonworkers give us no information about the
determinants of working hours.”
   This view ignores the fact that meaningful behavioral theories postulate a
common decision process used by all agents (e.g. utility maximization). In
neoclassical labor supply theory all agents are assumed to possess preference
orderings over goods and leisure. Some agents choose not to work, but non-
workers still possess well-defined preference functions. Equations like (2.1.1) are
defined for all agents in the population and it is the estimation of the parameters
of the population distribution of preferences that is the goal of structural econo-
metric analysis. Estimating functions on samples selected on the basis of choices
biases the estimates of the parameters of the distribution of population prefer-
ences unless explicit account is taken of the sample selection rule in the estima-
tion procedure.”

   “Many    statisticians    implicitly adopt the extreme view that nonworkers           come from a different
population   than workers and that there is no commonality             of decision processes and/or parameter
values in the two populations.         In some contexts (e.g. in a single cross section) these two views are
empirically  indistinguishable.      See the discussion of recoverability   in Heckman and Singer (1986).
1934                                                     J. J. Heckman and T. E. MaCurdy

2.1.2.     SpeciJcation for selection corrections

In order to make the preceding theory empirically operational it is necessary to
know M (up to a vector of estimable parameters). One way to acquire this
information is to postulate a specific functional form for it directly. Doing so
makes clear that conventional regression corrections for sample selection bias
depend critically on assumptions about the correct functional form of the
underlying regression eq. (2.1.1) and the functional form of M.
   The second and more commonly utilized approach used to generate M pos-
tulates specific functional forms for the density of (U, V) and derives the
conditional expectation of (I given S and X. Since in practice this density is
usually unknown, it is not obvious that this route for selecting M is any less ad
hoc than the first.
   One commonly utilized assumption postulates a linear regression relationship
for the conditional expectation of U given V:

         E( CT1I/, x) = TV,                                                     (2.1.8)

where 7 is a regression coefficient. For example, (2.1.8) is generated if U and V
are bivariate normal random variables and X is exogenous with respect to U and
V. Many other joint densities for (U, V) also yield linear representation (2.1.8).
[See Kagan, Linnik and Rao (1973)].
   Equation (2.1.8) implies that the selection term M can be written as

         M = E(U)6 =I,    X) = nY(I’16 =l,    x).                               (2.1.9)

Knowledge of the marginal distribution of V determines the functional form of
the selection bias term.
   Letting f,,(u) denote the marginal density of V, it follows from the analysis of
Section 1 that


                              hy?!ub)d~
         E(V(6=1,X)=            p       )                                      (2.1.10)
                                    1

where the set r,=      {V: V+xy~@,},         and


         P,=Prob(ZtOllX)=Prob(V~~I]X)=~~f,,(U)dli.                             (2.1 .ll)


One commonly         used specification of 0, writes 0, = { Z: Z 2 0}, so r, = { I/:
                                                                                  1935

1/k - Xy}. In this case (2.1.10) and (2.1.11) become


      E(Vl6=1,X)=E(VIV2-Xy,X)=
                                                /OOxvufr,wu
                                                   p     )                   (2.1.12)
                                                        1


and


      P,=Prob(S=ljX)=/W$a)du=l-F,.(-xy),                                     (2.1.13)
                                Y

respectively, where F,( .) is the cumulative distribution function of I/. Since Z is
not directly observed, it is permissible to arbitrarily normalize the variance of the
disturbance of the selection rule equation because division by a positive constant
does not change the probability content of the inequality that defines F,. Thus,
E( Ul6 = 1, X) is the same if one replaces f,,(u) with f,,( ou)/u and reinterprets F,
as {aV: V+(Xy*)/aE@,}           using any u > 0 where y * = uy. The normalization
for E(V*) that we adopt depends on the particular distribution under consider-
ation.
   Numerous choices for h,(u) have been advanced in the literature yielding a
wide variety of functional forms for (2.1.12). Table 1 presents various specifica-
tions of f,(u) and the implied specifications for E(V16 = 1, X) = E(V’] 1/>
 - Xy, X) proposed in work by Heckman (1976b, 1979), Goldberger (1983) Lee
(1982), and Olson (1980). Substituting the formulae for the truncated means
presented in the third column of the table into relation (2.1.4) produces an array
of useful expressions for the sample selection term M. All of the functions
appearing in these formulae-including      the gamma, the incomplete gamma, and
the distribution functions - are available on most computers.
   Inserting any of these expressions for M into eqs. (2.1.3) or (2.1.4) yields an
explicit specification for the regression relation associated with Y (or Y *) given
the selection rule generating the data. In order to generate (2.1.9) one requires a
formula for the probability that 6 =l given X to complete the specification for
E( Y *). Formula (2.1.13) gives the specification of this probability in terms of the
cumulative distribution function of V.
   In place of the linear conditional expectation (2.1.8), Lee (1982) suggests a
more general nonlinear conditional expectation of U given I/. Drawing on
well-known results in the statistics literature, Lee suggests application of Edge-
worth-type expansions. For the bivariate Gram-Charlier           series expansion, the
conditional expectation of ZJ given V and exogenous X is


      E(U( v, x) = pv+ -B(V)                                                 (2.1.14)
                           A(V) ’
                                                                            Table 1
                                             Truncated     mean formulae   for selected zero-mean         distributions.

Distribution
  (Mean, Variance,                               Density                          Truncated mea&
 Sign of Skewne$                                  f”(U)                            E(uJu 2 - Xy)

Normal
(0,l.O)
Student’s       th




Chi-square’

(0,2n,     +)

                     for-niu<ce                                                                    ~)-nC(Z,~)]~[r(f)(l-F;(-Xv))]

Logistic                                                                                 for n 2 X,
                              e”                                                  _
                                                                                       [lnF,.(Xy)~XyF,(-XY)I/F,,(XY)
                     (1+ eu)2

Laplace                                                                           l-xy         for         xy 5 0
(0,2,0)              fe-W                                                         (1 + Xy)/(2eXY        - 1)    for Xy > 0

Uniform
                                                                                                                                                                     5
(O,f,O)              l/\/iz        for IuI Ifi                                    (0     - XY)/2         for         IXYI    IA
                                                                                                                                                                     4

Log-normaId
                     p-‘/Z(,w2)+                 U)-le-lln(e"*+u)l*/2                                                                                                2
(O,e’-e,+)
                                                                                  e1,2 @(1-ln(e"2-              XY))        _1
                     for u z - e1j2                                                                                                  for Xy 5 &I2
                                                                                                                                                                     P
                                                                                                                                                                     2
                                                                              .              @(-ln(e    1’2 - xy))                                                   2
                                                                                         [                                       1                                   Q.
                                                                                                                                                                     .Y
  a The function F,(a) = /” ,f, ( u) d u in these formulae is the cumulative distribution     function.                                                              .h
  ‘The parameter    n denotes degrees of freedom. For Student’s f, it is assumed that n > 2. The function                             T(a) = /Ty”mlem-‘dy   is the   3
gamma function.                                                                                                                                                      ci
  ‘The function G(a, b) = ffy”- ‘e-y dy is the incomplete gamma function.                                                                                             4
  d The function @( .) represents the standardized   normal cumulative distribution    function.                                                                     9
  ‘Skewness is defined as mean minus the median.
Ch. 32: Luhor Econometrics                                                                            1937

with

       0’)     =l+      [~034@‘)/61+               [PM -3I(L,(W2%

       W’)     = L-             w&W’)/~)+[P~                      -   w,041(~3(~)/6)~
where p is the correlation   coefficient of U and V, pij = E(U’V’)    are cross
moments of U and V, and the functions A,(V) = V2 - 1, A,(V) = V3 - 3V, and
A 4( V) = V4 - 6V2 + 3 are Hermite polynomials.    Assuming the event V2 - Xy
determines  whether or not Y is observed. the selection term is




       M=E(UIV2-Xy,X)=                                                                          (2.1.15)
                                                          1-F,(-xy)                  .

This expression does not have a simple analytical solution except in very special
cases. Lee (1982) invokes the assumption  that V is a standard normal random
variable, in which case A(V) =l (since p 03 = po4 - 3 = 0) and the conditional
mean is


       E(Ul   v>   =   J’-P +   (v’   -   lh2/2)      +     (v3   -   3v)(1113 - 3~)/6.         (2.1.16)

For this specification,          (2.1.15) reduces      to


                                                                                                (2.1.17)


where $I( .) and @( .) are, respectively, the density function and the cumulative
distribution functions associated with a standard normal distribution, and rt, r2,
and r3 are parameters.12

   ‘*The requirement    that V is normally distributed   is not as restrictive as it may first appear. In
particular, suppose that the distribution of V, F,( .) is not normal. Defining J( .) as the transforma-
tion W1 0 F,, , the random variable J(V) is normally distributed with mean zero and a variance equal
to one. Define a new unobserved dependent variable Z, by the equation

       z,=-J(-Xy)+J(V).                                                                                (*>
Since J( .) is monotonic,    the events Z, > 0 and Z 2 0 are equivalent. All the analysis in the text
continues   to apply if eq. (*) is substituted in place of eq. (2.1.2) and the quantities    Xy and V are
replaced everywhere     by - J( - Xy) and J(V), respectively.     Notice that expression (2.1.17) for M
obtained by replacing     Xy by - J( - X-r) does not arise by making a change of variables from V to
J(V) in performing       the integration   appearing in (2.1.15). Thus, (2.1.17) does not arise from a
Gram-Charlier     expansion of the bivariate density for U and nonnormal     V; instead, it is derived from
a Gram-Charlier     expansion applied to the bivariate density of U and normal J(V).
1938                                                                .I. J. Heckmun    and T. E. MaCurdy

   An obvious         generalization   of (2.1.8) or (2.1.16) assumes     that



                                                                                               (2.1.18)
                             k=l


where the gk( .)‘s are known             functions.   The   functional    form       implied    for the
selection term is



         M=E(U1b’--x)‘,x)=                 f    TkE(gkll/k-xY,x)
                                          k=l



           =   5     T,rnk(X).                                                                 (2.1.19)
               k=l


Specifying a particular functional form for the g,‘s and the marginal distribution
for V produces an entire class of sample selection corrections that includes Lee’s
procedure as a special case.
   Cosslett (1984) presents a more robust procedure that can be cast in the format
of eq. (2.1.19). With his methods it is possibie to consistently           estimate the
distribution  of V, the functions    mk, the parameters TV, and K the number of
terms in the expansion. In independent      work Gallant and Nychka (1984) present
a more robust procedure for correcting models for sample selection bias assuming
that the joint density of (U, V) is twice continuously    differentiable. Their analysis
does not require specifications   like (2.1.8), (2.1.14) or (2.1.18) or prior specifica-
tion of the distribution  of V.



2.1.3.      Multi-state generalizations

Among many possible generalizations          of the preceding analysis, one of the most
empirically fruitful considers the situation in which the dependent         variable Y is
generated by a different linear equation for each state of the world. This model
includes the “switching     regression” model of Quandt (1958, 1972). The occur-
rence of a particular   state of the world results from Z falling into one of the
mutually exclusive and exhaustive subsets of 0, O,, i = 0,. . . , I. The event Z E 0,
signals the occurrence   of the ith state of the world. We also suppose that Y is
observed in states i = 1,. . . , I and is not observed in state i = 0. In state i > 0, the
equation for Y is

         r=xp,+q,                                                                              (2.1.20)
Ch. .{7: Lcrhor Econometrics                                                         1939

where   the U,‘s are error terms with E(U,) = 0. Define U = (U,, . . . , U,), and let
f,,,(lJ, V) be  the joint density of U and the disturbance    V of the equation
determining   Z. The value of the discrete dependent variable

                      if Z E Oj,
                                                                                (2.1.21)
                      otherwise,

records whether or not state i occurs. In this notation      the equation   determining
the censored version of Y may be written as


        y*=    i:   6,(xp,+uJ,                                                  (2.1.22)


where we continue to adopt the convention          that Y * = 0 when Y is not observed
(i.e. when Z E 0,).
    It is useful to distinguish two cases of this model. In the first case all states of
the world are observed by the analyst, so that the values of the &‘s are known by
the econometrician       for all i. In the second case not all of the &‘s are known by
the econometrician.       The analysis of the first case closely parallels the analysis
presented     for the simple two-state model.
    For the first case, the regression function for observed Y given 8, = 1, X, and
i # 0, is

        E(Y16, =l,    x) = xpi+    M,,                                          (2.1.23)

with

                                    J    -mlB,Uifu,u(U,,Z-XXY)dZdUi
                                        (”
        M;-E(U,IZEOi,X)=                                             2          (2.1.24)
                                                    pi

where f,,,( . , -) denotes the joint density of U, and I’, and P, = Prob( Z E Oil X) is
the probability    that state i occurs.
   Paralleling   the analysis of Section 2.1.2, one can develop explicit specifications
for each selection bias correction      term M, by using formulae such as (2.1.9,
(2.1.14) or (2.1.18). With the convention      that Y* = 0 when 6, =l, the regression
functions (2.1.23) can be combined into a single relation


        E(Y*l6,A,...,&,X)          = f: &(XP,+M).                                (2.1.25)
                                        i=l



   In the second case considered here not all states of the world are observed by
the econometrician.  It often happens that it is known if Y is observed, and the
1940                                                                 J. .I. Heckmun und T. E. MaCurdy

value of Y is known if it is observed, but it is not kno;vn which of a number of
possible states has occurred. In such a case, one might observe whether 6, = 1 or
8, = 0 (i.e. whether cf_,6; = 0 or c:= ,S, = l), but not individual values of the 8,‘s
for i = 1,. . . , I. Examples of such situations are given in our discussion of labor
supply presented in Section 3.3.
   To determine the appropriate regression equation for Y in this second case, it is
necessary to compute the expected value of Y given by (2.1.22) conditional on
8, = 0 and X. This expectation is


       E(Yl6,=O,X)=           i      (xp;+M;)Pi/(l-P,),                                          (2.1.26)
                              i=l


where P,= Prob( Z E @ilX).‘3 Relation (2.1. 26) 1‘s the regression of Y on X for
the case in which Y is observed but the particular state occupied by an
observation is not observed.
   Using (2.1.22), and recalling that Y * = Y(l - 8,) is a censored random variable,
the regression of Y * on X is


       E(Y*lX)=         i (xp;+M,)P,.                                                            (2.1.27)
                       I=1

If Y is observed for all states of the world, then Y * = Y, 6, = 0, and (2.1.26) and
(2.1.27) are identical because the set 0, is the null set so that PO= 0 and
C~=,P,=l.i

2.1.4.   Generalization of the regression framework

Extensions of the basic framework presented above provide a rich structure for
analyzing a wide variety of problems in labor econometrics. We briefly consider
three useful generalizations.
   The first relaxes the linearity assumption maintained in the specification of the
equations determining the dependent variables Y and Z. In eqs. (2.1.1) and (2.1.2)
substitute h y( X, p) for Xp and h,( X, y) for Xy where h y(. , .) and

  131n order to obtain (2.1.26) we use the fact that the 0,‘s are nonintersecting sets so that



          ,~,+,=l,X)        =Prob(       &=l~&,=l,X)



                            =Prob
                                     (
h z(. , .) are known nonlinear         functions of exogenous variables and parameters.
Modifying      the preceding analysis and formulae to accommodate               this change in
specification    only requires replacing the quantities Xb and Xy everywhere by the
functions     h r and h,. A completely          analogous   modification    of the multi-state
model introduces       nonlinear specifications for the conditional       expectation of Y in
the various states.
   A second generalization        extends the preceding framework of Sections 2.1.1-2.1.3
by interpreting     Y, Z and the errors U and V as vectors. This extension enables the
analyst to consider a multiplicity of behavioral functions as well as a broad range
of sampling rules. No conceptual problems are raised by this generalization                 but
severe computational        problems must be faced. Now the sets 0, are multidimen-
sional. Tallis (1961) derives the conditional          means relevant for the linear multi-
variate normal       model, but it remains a challenge           to find other multivariate
specifications    that yield tractable analytical results. Moreover, work on estimating
the multivariate      normal model has just begun [e.g. see Catsiapsis and Robinson
(1982)]. A current        area of research is the development             of computationally
tractable specifications      for the means of the disturbance       vector lJ conditional    on
the occurrence of alternative states of the world.
   A third generalization        allows the sample selection rule to depend directly on
realized values of Y. For this case, the sets Oi are replaced by the sets Oi where
(Y, Z) E fij designates the occupation           of state i. The integrals in the preceding
formulae are now defined over the Oi. In place of the expression for the selection
term M in (2.1.7), use the more general formula



         ww, z>E 91, x>= /L&J- XP)fu,bPI
                                      - XP,z - Xy)dzdy
                                                                                    9




where


         P, = / 12,fuo(~
                      - W, z - Xy)dzd_v,

is the probability  that S, = 1 given X. This formula specializes to the expression
(2.1.7) for M when 9, = {(Y, Z): - CO5 Y< 60 and Z E O,}, i.e. when Z alone
determines   whether state 1 occurs.

2.1.5.     Methods for estimating the regression specifications

We next consider    estimating the regression    specifications  associated   with the
elementary two-state model (2.1.1) and (2.1.2). This simple specification is by far
the most widely used model encountered     in the literature. Estimation    procedures
1942                                                    J. J. Heckman and T. E. MaCur+

available for this two-state model can be directly generalized to more complicated
models.
   For the two-state model, expression (2.1.3) implies that the regression equation
for Y conditional on X and 6 = 1 is given by
       Y=Xp+M+e,

where e = U - E( U] S = 1, X) is a disturbance with E( e 1S = 1, X) = 0. Choosing
specification (2.1.9) (2.1.17) or one based on (2.1.19) for the selection term M
leads to
       M=mr          with   m=m(Xu,$>,                                        (2.1.28)
where the II, are unknown parameters of the density function for V. If, for
example, specification (2.1.9) is chosen, m( Xy, I/J) = E( VI V 2 - Xy) which can
be any one of the truncated mean formulae presented in Table 1. If, on the other
hand, specification (2.1.19) is chosen, r and m are to be interpreted as vectors
with r’= (ri,..., TV) and m = (m,, . . . , mK). The regression equation for Y is

       Y=Xp+mr+e.                                                            (2.1.29)
The implied regression equation for the censored dependent variable Y * = SY is

       Y*=(X~+mr)(l-~O(-Xy;~))+~,                                            (2.1.30)
where E is a disturbance with E(EIX) = 0 and we now make explicit the
dependence of F, on #.
   The appropriate procedure for estimating the parameters of regression eqs.
(2.1.29) and (2.1.30) depends on the sampling plan that generates the available
data. It is important to distinguish between two types of samples discussed in
Section 1: truncated samples which include data on Y and X only for observa-
tions for which the value of the dependent variable Y is actually known (i.e.
where Z 2 0 for the model under consideration here), and censored samples
which include data on Y * and X from a simple random sample of 6, X and Y *.
   For a truncated sample, nonlinear least squares applied to regression eq.
(2.1.29) can be used to estimate the coefficients of p and r and the parameters y
and # which enter this equation through the function m. More specifically,
defining the function g and the parameter vector 8 as g( X, 13)= XP + m( Xy, I/J)T
and 0’ = (p’, r’, y’, #‘), eq. (2.1.29) can be written as

       Y=g(X,d)+e.                                                           (2.1.31)

Since the disturbance e has a zero mean conditional on X and 6 = 1 and is
distributed independently across the observations in the truncated sample, under
standard conditions [see Amemiya (1985)] nonlinear least squares estimators of
the parameters of this equation are both consistent and asymptotically normally
distributed.
Ch. 32: Lahor Econometrics                                                                   1943

   In general, the disturbance        e is heteroscedastic,  and the functional  form of the
heteroscedasticity        is unknown     unless the joint density f,, is specified. As a
consequence,        when calculating     the large-sample    covariance   matrix of 8, it is
necessary to use methods proposed by Eicker (1963, 1967) and White (1981) to
consistently      estimate this covariance matrix in the presence of arbitrary hetero-
scedasticity.     The literature demonstrates       that the estimator  8 is approximately
normally      distributed    in large samples with the true value 8 as its mean and a
variance-covariance          matrix given by HP ‘RH-’ with


                                                                                        (2.1.32)


where N is the size of the truncated      sample, a6,/&3],   denotes the gradient
vector of g for the n th observation   evaluated at 8, and d, symbolizes the least
square residual for observation   n. Thus

     8 - N(B,     H-‘RH-‘).                                                             (2.1.33)


   For censored samples, two regression methods are available for estimating the
parameters      p, r, y, and 4. First, one can apply the nonlinear               least squares
procedure just described to estimate regression eq. (2.1.30). In particular, reinter-
preting the function         g as g( X, 8) = [X/3 + m( Xy, $)r](l-        F,( - Xy; $)), it is
straightforward      to write eq. (2.1.30) in the form of an equation analogous                 to
(2.1.31) with Y* and E replacing Y and e. Since the disturbance                   E has a zero
mean conditional        on X and is distributed      independently   across the observations
making up the censored sample, under standard regularity conditions                   nonlinear
least squares applied to this equation yields a consistent               estimator    8 with a
large-sample      normal distribution.       To account for potential       heteroscedasticity
compute the asymptotic          variance-covariance       matrix of 8 using the formula in
(2.1.33) with the matrices           H and R calculated         by summing      over the N *
observations     of the censored sample.
   A second type of regression             procedure    can be implemented        on censored
samples. A two-step procedure can be applied to estimate the equation for Y
given by (2.1.29). In the first step, obtain consistent estimates of the parameters y
and J/ from a discrete choice analysis which estimates the parameters of P,. From
these estimates it is possible to consistently          estimate m (or the variables in the
vector m). More specifically, define 0; = (y’, 1c/‘) as a parameter              vector which
uniquely    determines      m as a function     of X. The log likelihood function for the
independently      distributed   discrete variables S,, given X,,, n = 1,. . _, N * is


       E[6,ln(l-F,,(-X,y;J/))+(1-6,)ln(F,,(-X,y;~))l.
      il = 1
                                                                                        (2.1.34)
1944                                                                  J. J. Heckman und   T. E. MuCurdy

Under      general conditions        [See Amemiya       (1985) for one statement           of these
conditions],     maximum likelihood estimators of y and 1c/are consistent, and with
maximum        likelihood     estimates fiZ one can construct         Cz, = m( X,7,I/J)    for each
observation.       In step two of the proposed            estimation     procedure,    replace the
unobserved       variable m in regression eq. (2.1.29) by its constructed           counterpart   A
and apply linear least-squares          to the resulting equation using only data from the
subsample      in which Y and X are observed. Provided that the model is identified,
the second step produces estimators for the parameters S; = (p’, 7’) that are both
consistent    and asymptotically       normally distributed.
   When calculating          the appropriate     large-sample      covariance    matrix for least
squares estimator         8i, one must account for the fact that in general the dis-
turbances     of the regression equation are heteroscedastic           and that the variables fi
are estimated quantities.         A consistent estimator for the covariance matrix which
accounts for both of these features is given by


       C = Q?QzQi’+          Q?Q3Qz,Q;Q?,                                                      (2.1.35)


where Q4 is the covariance    matrix for I!& estimated                   by maximum     likelihood
[minus the inverse of the Hessian matrix of (2.1.34)],                  and the matrices Q,, Q2,
and Q, are defined by



       Q, =   5 wnw,‘,
              n= 1
                               Q2=      ;
                                       n=l
                                             w,,w,@-2, and             Qx= t w&I,;
                                                                              n=l

                                                                                               (2.1.36)


where the row vector wn = (X,, fi,)’ denotes the regressors for the n th observa-
tion, the variable   e”, symbolizes the least-squares  residual, and the row vector
de,,/&‘; ]e is the gradient of the function e, = Y,, - X,/3 - m,,a_with respect to y
and + evaluated at the maximum likelihood estimates 7 and 4 and at the least
squares estimates fl and 7”-i.e.




   14To derive the expression for the matrix C given by (2.1.35) we use the following result. Let
L,, = L( 8,. X,,) denote the n th observation  on the gradient of the likelihood function (2.1.34) with
respect to B,, with this gradient viewed as a function of the data and the true value of 8,; and let w,,
and eon be KJ,, and e, evaluated at the true parameter         values. Then E( w,J,,e,l,,Lk 18, = 1, X,) =
w,,,E(~,,,,I~,=~,X,)L’,(~,=~,X,)=O.
Ch. 32: I.uhor Econometrics                                                               1945

The large-sample        distribution    for the two-step   estimator   is thus

       8, 7 N&C).                                                                    (2.1.38)




2.2.       Dummy    endogenous      variable models

One specialization      of the general model presented in Section 2.1 is of special
importance     in labor economics. The multi-state equation system (2.1.20)-(2.1.22)
is at the heart of a variety of models of the impact of unions,                    training,
occupational     choice, schooling, the choice of region of residence and the choice of
industry   on wages. These models have attracted considerable           attention     in the
recent literature.
   This section considers certain aspects of model formulation          for this class of
models. Simple consistent estimators are presented for an empirically interesting
subclass of these models. These estimators require fewer assumptions               than are
required    for distribution    dependent   maximum     likelihood  methods or for the
sample selection bias corrections (M functions) discussed in Section 2.1.
   In order to focus on essential ideas, we consider a two-equation,              two-state
model with a single scalar dummy right-hand          side variable that can assume two
values. Y is assumed to be observed in both states so that we also abstract from
censoring.    Generalization     of this model to the vector case is performed              in
Heckman (1976a, 1978, Appendix), Schmidt (1981), and Lee (1981).

2.2. I.     Specification   of a two-equation   system

Two versions of the dummy endogenous           variable model are commonly confused
in the literature:   fixed coefficient models and random coefficient models. These
specifications   should be carefully distinguished     because different assumptions are
required to consistently    estimate the parameters of these two distinct models. The
fixed coefficient model requires fewer assumptions.
   In the fixed coefficient model

          r=xp+th+u,                                                                  (2.2.1)

          z=xy+v,                                                                     (2.2.2)

where

                       if Z20,
                       otherwise,
1946                                                                J. J. Necknmn   and T. E. MaCur&

U  and V are mean zero random disturbances, and X is exogenous with respect to
U. Simultaneous equation bias is present in (2.2.1) when lJ is correlated with S.
   In the random coefficient model the effect of 6 on Y (holding U fixed) varies in
the population. In place of (2.2.1) we write

       Y=xp+S(a+&)+U,                                                                        (2.2.3)

where E is a mean zero error term. l5 E q uation (2.2.2) is unchanged except now V
may be correlated with E as well as U. The response to 6 = 7 differs in the
population, with successively sampled observations assumed to be random draws
from a common distribution for (17, E, V). In this model X is assumed to be
exogenous with respect to (U, E). Regrouping terms, specification (2.2.3) may be
rewritten as

       Y=     xp+6a+(U+&).                                                                   (2.2.4)

   Unless 6 is uncorrelated with E (which occurs in some interesting economic
models - see Section 3.2) the expectation of the composite error term U + ~8 in
(2.2.4) is nonzero because E(b) # 0. This aspect of the random coefficient model
makes its econometric analysis fundamentally different from the econometric
analysis of the fixed coefficient model. Simultaneous equations bias is present in
the random coefficient model if the composite error term in (2.2.4) is correlated
with 6.
   Both the random coefficient model and the fixed coefficient model are special
cases of the multi-state “switching” model presented in Section 2.1.3. Rewriting
random coefficient specification (2.2.3) as

       Y=s(CY+Xp+U+&)+(1-8)(Xp+U),                                                           (2.2.5)

this equation is of the form of multi-state eq. (2.1.22). The equivalence of (2.2.5)
and (2.1.22) follows directly from specializing the multi-state framework so that:
(i) 6,~ 0 (so th at there is no censoring and Y = Y *); (ii) I = 2 (which along with
(i) implies that th ere are two states); (iii) 6 = 1 indicates the occurrence of state 1
and the events 6, = 1 and 6, = 0 (with 1 - 6 = 1 indicating the realization of state
2); and (iv) X& = Xfi, Vi = U, Xfi, = X/3+ a, and U, = U + E. In this notation eq.
(2.2.3) may be written as

       Y= xp,+~x(p,-p2)+u1+(ui-u2)8.                                                         (2.2.6)

   One empirically fruitful generalization of this model relaxes (iv) by letting both
slope and intercept coefficients differ in the two regimes. Equation (2.2.6) with

   “Individuals    may or may not know their own value of E. “Randomness”   as used here refers to the
cconometrician’s    ignorance of E.
C'h.31: L&or Econometrm                                                                                     1947

condition    (iv) modified so that PI and & are freely specified can also be used to
represent this generalization.
    Fixed coefficient specification     (2.2.1) specializes the random coefficient model
further by setting E = 0 so U, - U, = 0 in (2.2.6). In the fixed coefficient model,
 U, = lJ, so that the unobservables      in the state specific eqs. (2.1.20) are identical in
each state. Examples of economic models which produce this specification                   are
given below in Section 3.2.
    The random coefficient and the fixed coefficient models are sometimes confused
in the literature. For example, recent research on the union effects on wage rates
has been unclear about the distinction           [e.g. see Freeman (1984)]. Many of the
cross section estimates of the union impact on wage rates have been produced
from the random coefficient model [e.g. see Lee (1978)] whereas most of the recent
longitudinal     estimates are based on a fixed coefficient model, or a model that can
be transformed        into that format [e.g. see Chamberlain         (1982)]. Estimates from
these two data sources are not directly comparable               because they are based on
different model specifications.16
    Before we consider methods for estimating both models, we mention one aspect
of model formulation          that has led to considerable         confusion    in the recent
literature.   Consider     an extension    of equation     system (2.2.1)-(2.2.2)    in which
dummy variables appear on the right-hand             side of each equation

         Y=Xfi+a,&+U,                                                                                  (2.2.7a)

      2 = xy + Q1*8r+ V,                                                                               (2.2.7b)

where

                              if YTO,
                              otherwise,

and

                              if 22 0,
                              otherwise.

Without   imposing              further restrictions         on the support       of the random       variables
(U, V), this model              makes no statistical         sense unless

      ala2       =     0.                                                                               (2.2.8)

[See Heckman                (1978) or Schmidt         (1981)]. This assumption-        termed   the “principal

  “For       further    discussion   of this point,   see Heckman   and Robb (1985).
1948                                                     J. J. Heckman and T. E. MaCurdy

assumption” in the literature - rules out contradictions such as the possibility that
Y 2 0 but 6, = 0, or other such contradictions between the signs of the elements
of (Y, 2) and the values assumed by the elements of (a,, 6,).
   The principal assumption is a logical requirement that any well-formulated
behavioral model must satisfy. An apparent source of confusion on this point
arises from interpreting (2.2.7) as well-specified behavioral relationships. In the
absence of a precise specification determining the behavioral content of (2.2.7) it
is incomplete. The principal assumption forces the analyst to estimate a well-
specified behavioral and statistical model. This point is developed in the context
of a closely related model in an appendix to this paper.

2.2.2.   Estimation of the fixed coeficient model

In this subsection we consider methods for consistently estimating the fixed
coefficient dummy endogenous variable model and examine the identifiability
assumptions that must be invoked in order to recover the parameters of this
model. We do not discuss estimation of discrete choice eq. (2.2.2) and we focus
solely on estimating (2.2.1). An attractive feature of some of the estimators
discussed below is that the parameters of (2.2.1) can be identified even when no
regressor appears in (2.2.2) or when the conditions required to define (2.2.2) as a
conventional discrete choice model are not satisfied. It is sometimes possible to
decouple the estimation of these two equations.

2.2.2.1. Instrumental variable estimation. Equation (2.2.1) is a standard linear
simultaneous equation with S as an endogenous variable. A simple method for
estimating the parameters of this equation is a conventional instrumental variable
procedure. Since E(UIX) = 0, X and functions of X are valid instrumental
variables. If there is at least one variable in X with a nonzero y coefficient in
(2.2.2) such that the variable (or some known transformation of it) is linearly
independent of X included in (2.2.1), then this variable (or its transformation)
can be used as an instrumental variable for 6 in the estimation of (2.2.1).
   These conditions for identification are very weak. The functional forms of the
distributions of U or V need not be specified. The variables X (or more precisely
Xy) need not be distributed independently of V so that (2.2.2) is not required to
be a well-specified discrete choice model.
   If (2.2.2) is a well-specified discrete choice model, then the elements of X and a
consistent estimator of E( 6 1X) = P( 6 = 11X) constitute an optimal choice for the
instrumental variables according to well-known results in the analysis of nonlin-
ear two-stage least squares [e.g. see Amemiya (1985, Chapter S)]. Choosing X and
simple polynomials in X as instruments can often achieve comparable asymptotic
efficiency. Conventional formulae for the sampling error of instrumental variable
estimators fully apply in this context.
Ch. 32: Labor Econometrics                                                                   1949

2.2.2.2.  Conditioning on X. The M function regression estimators presented in
Section 2.1 are based on the conditional     expectation of Y given X and 8. It is
often possible to consistently   estimate the parameters of (2.2.1) using the condi-
tional expectation   of Y given only X.
   From the specification   of (2.2.1) we have


     E(YIX)      = Xp + aE(GIX).                                                         (2.2.9)

Notice   that (if X is distributed    independently     of V)


     E@(X)=l-F,(-Xy).                                                                   (2.2.10)


Given knowledge      of the functional  form of F,, one can estimate (2.2.9) by
nonlinear   least squares. The standard    errors for this procedure  are given by
(2.1.32) and (2.1.33) where g, in these formulae is defined as g, = Y, - X,*/3 - a(1
 - E;(- %Y)).
    One benefit of this direct estimation          procedure is that the estimator is con-
sistent even if 8 is measured with error because measurements                   on 6 are never
directly used in the estimation          procedure.     Notice that the procedure         requires
specification     of the distribution   of V (or at least its estimation).      Specification    of
the distribution      of U or the joint distribution     of U and V is not required.
2.2.2.3.     Invoking a distributional assumption about U. The coefficients of (2.2.1)
can be identified if some assumptions           are made about the distribution        of U. NO
assumption      need be made about the distribution         of V or its stochastic dependence
with U. It is not required to precisely specify discrete choice eq. (2.2.2) or to use
nonlinearities      or exclusion restrictions    involving exogenous variables which are
utilized in the two estimation strategies just presented. No exogenous variables
need appear in either equation.
    If U is normal, (Y and /3 are identified given standard rank conditions                even if
no regressor appears in the index function               equation   determining     the dummy
variable (2.2.2). Heckman and Robb (1985) establish that if E(U3) = E(U’) = 0,
which is implied by, but weaker than, assuming symmetry or normality of U, LY
and p are identified even if no regressor appears in the index function (2.2.2). It is
thus possible to estimate (2.2.1) without a regressor in the index function equation
determining      6 or without making any assumption           about the marginal distribution
of V provided         that stronger assumptions        are maintained      about the marginal
distribution     of U.
    In order to see how identification        is secured in this case, consider a simplified
version of (2.2.1) with only an intercept and dummy variable 6

      y=p,+sa+u.                                                                        (2.2.11)
1950                                                                 J. J. Heckman and T. E. MaCurdy

Assume E( U3) = 0 = E(U5). With observations indexed by n, the method of
moments estimator solves for 6 from the pair of moment equations that equate
sample moments to their population values:


         $ 5 [(Yn-r)-&(6n-8)]3=0,                                                           (2.2.12a)
            n=l

and


         ~n~lI(Y.e)-a(s.-s)]5=o.                                                            (2.2.12b)


where y and 8 are sample means of Y and 6 respectively. There is only one
consistent root that satisfies both equations. The inconsistent roots of (2.2.12a) do
not converge to the inconsistent roots of (2.2.12b). Choosing a value of a to
minimize a suitably weighted sum of squared discrepancies from (2.2.12a) and
(2.2.12b) (or choosing any other metric) solves the small sample problem that for
any finite N (2.2.12a) and (2.2.12b) cannot be simultaneously satisfied. For proof
of these assertions and discussion of alternative moment conditions on U to
secure identification of the fixed coefficient model, see Heckman and Robb
(1985).

2.2.3.      Estimation of the random coeficient model

Many of the robust consistent estimators for the fixed coefficient model are
inconsistent when applied to estimate (Yin the random coefficient model.17 The
reason this is so is that in general the composite error term of (2.2.4) does not
possess a zero conditional (on X) or unconditional mean. More precisely,
E(&jX)#      0 and E(&)#      0 even though E(UIX)=       0 and E(U)= 0.” The
instrumental variable estimator of Section 2.2.2.1 is inconsistent because E( U +
SE1X) # 0 and so X and functions of X are not valid instruments. The nonlinear
least squares estimator of Section 2.2.2.2 that conditions on X is also in general
inconsistent. Instead of (2.2.9) the conditional expectation of Y given X for eq.
(2.2.4) is

       E(YJX) = Xfi + cxE@IX)+             E(&IX).                                            (2.2.13)

   “In certain problems the coefficient of interest is a + E( E 18= 1). Reparameterizing (2.2.4) to make
this rather than (Yas the parameter of econometric interest effectively converts the random coefficient
model back into a fixed coefficient model when no regressors appear in index function (2.2.2).
   ‘*However,   some of the models presented in Section 3.2 have a zero unconditional      mean for 8~.
This can occur when E is unknown at the time an agent makes decisions about 8.
Ch. 32: L.&or Econometrics                                                                               1951

Inconsistency  of the nonlinear least squares estimator arises because the unob-
served omitted term E( 8~ 1X) is correlated with the regressors in eq. (2.2.9).

2.2.3.1.   Selectivity corrected regression estimators.   The analysis of Section 2.15
provides    two regression    methods for estimating    the parameters   of a random
coefficient model. From eq. (2.2.6), a general specification of this model is

        Y=s(xp,+v,)+(l-6)(xp,+u*).                                                                 (2.2.14)

Relation      (2.1.25) for the multi-state model                of Section       2.1 implies      that    the
regression     equation for Y on 6 and X is

        Y=8(X&+M,)+(l-S)(X&+M,)+e,                                                                 (2.2.15)

where   M, = E(Uil6 = 1, X),     M2 = E(U,l6 = 0, X),                          and     e = 6(U,       - M,)
+ (1 - a)(& - M2). Using selection specification (2.1.28),

      M, = mi7,           where         miEm,(XY,$),                 i=1,2,                        (2.2.16)

where the functional    forms of the elements of the row vectors m 1 and m 2 depend
on the particular    specification chosen from Section 2.1.2.19 Substituting (2.2.16)
into (2.2.15), the regression equation for Y becomes

        Y=X:P,+X2*P2+m:r1+m:r2+e,                                                                  (2.2.17)

where

      X:=6X,           X,*=(1--6)X,               m:=Sm,           and         rnz = (1-     fS)m,.

   Given familiar regularity conditions,     the nonlinear    least-squares estimator of
(2.2.17) is consistent and approximately    distributed   according to the large-sample
normal distribution    given by (2.1.33), where the matrices H and R are defined by
(2.1.32) with g, in these formulae given by




   A second approach adapts the two-step estimation scheme outlined in Section
2.1.5. Using maximum        likelihood estimates 8, of the parameter   vector 8, =
(y’, +‘)‘, construct estimates of Gin = mi( X,?, $), i = 1,2, for each observation.

   “Inspection     of eq. (2.2.2) and the process generating     6 reveals that the events 8 =l and 6 = 0
correspond     to the conditions V 2 - Xy Ad - V > Xy; and, consequently,         the functions Ml and M2
have forms completely        analogous to the selection correction   M whose specification     is the topic of
Section 2.1.2.
1952                                                       J. J. IIeckman   and T. E. MuCur&

Replacing    unobserved     ml and m2 in (2.2.17) by their observed counterparts      tii
and t?iZz,,the application   of linear least-squares to the resulting equation yields an
estimate f?, of the parameter vector 8i = (pi, pi, 7;, T;)‘. Given standard assump-
tions, the estimator     8, is consistent and approximately      normally distributed  in
large samples. The covariance matrix C in (2.1.38) in this case is given by (2.1.35),
and the matrices         Qi, Q2 and Q3 are as defined           by (2.1.36) with w, =
(X;C,, X& m,*,, fi;,)‘and      where



                                                                                    (2.2.18)




3.     Applications of the index function model

This section applies the index function framework to specific problems in labor
economics. These applications       give economic content to the statistical framework
presented above and demonstrate          that a wide range of behavioral models can be
represented    as index function models.
   Three prototypical      models are considered.      We first present models wit!r a
“reservation    wage” property. In a variety of models for the analysis of unemploy-
ment, job turnover and labor force participation,        an agent’s decision process can
be characterized      by the rule “stay in the current state until an offered wage
exceeds a reservation       wage.” The second prototype        we consider is a dummy
endogenous     variable model that has been used to estimate the impact of school-
ing, training,    occupational    choice, migration,   unionism    and job turnover   on
wages. The third model we discuss is one for labor force participation         and hours
of work in the presence of taxes and fixed costs of work.



3.1.    Models with the reservation wage property

Many models possess a reservation          wage property,  including    models for the
analysis of unemployment      spells [e.g. Kiefer and Neumann,     (1979), Yoon (1981,
1984), Flinn and Heckman (1982)], for labor force participation           episodes [e.g.
Heckman      and Willis (1977); Heckman (1381), Heckman and MaCurdy (1980)
Killingsworth    (1983)], for job histories [e.g. Johnson (1978), Jovanovic       (1979),
Miller (1984), Flinn (1984)] and for fertility and labor supply [Moffit (1984) Hotz
and Miller (1984)]. Agents continue in a state until an opportunity       arises (e.g. an
offered wage) that exceeds the reservation       wage for leaving the state currently
Ch. 32: Labor Economeirics                                                              1953

occupied. The index function        framework   has been used to formulate    and estimate
such models.

3.1.1.      A model of labor force participation

Agents at age t are assumed to possess a quasiconcave          twice differentiable    one
period utility function defined over goods (C(t)) and leisure (L(t)). Denote this
utility function   by U(C(t), L(t)). We define leisure hours so that 0 < L(t) 5 1.
An agent is assumed to be able to freely choose his hours of work at a parametric
wage W(t). There are no fixed costs of work or taxes. At each age agents receive
unearned income, R(t), assumed to be nonnegative.         Furthermore,     to simplify the
exposition,    we assume that there is no saving or borrowing,         and decisions are
taken in an environment      of certainty. Labor force participation      models without
lending and borrowing constraints have been estimated by Heckman and MaCurdy
(1980) and Moffitt (1984).
    In the simple model considered        here, an agent does not work if his or her
reservation    wage or value of time at home (the marginal rate of substitution
between goods and leisure evaluated at the no work position) exceeds the market
wage W(t). The reservation wage in the absence of savings is




where U,( .) and U,( -) denote partial derivatives.   The market wage              W(t) is
assumed to be known to the agent but it is observed by the econometrician           only if
the agent works.
   In terms of the index function apparatus presented in Section 1,

         z(t)    = w(t)-   w,(t).                                                   (3.1.1)

If Z(t) 2 0 the agent works, 8(t) = 1, and the wage rate W(t) is observed.            Thus
the observed wage is a censored random variable

         r*(t)    = W(t)8(t).                                                       (3.1.2)

 The analysis of Sections 1 and 2 can be directly applied to formulate likelihood
 functions     for this model and to estimate its parameters.
    For comparison       with other economic models possessing the reservation        wage
 property,     it is useful to consider the implications      of this simple labor force
 participation      model for the duration    of nonemployment.      A nonworking      spell
 begins at I, and ends at t, provided             that Z(t, - 1) > 0, Z(t, + j) I 0, for
j=O ,.**> t, - t, and Z(t, + 1) > 0. Reversing their direction,         these inequalities
 also characterize     an employment   spell that begins at t, and ends at t,. Assuming
1954                                                             J. J. Heckmun und T. 17. MaCurdy

that unobservables in the model are distributed independently of each other in
different time periods, the (conditional) probability that a spell that begins at t,
lasts t, - t, + 1 periods is


       [e      Pr(Z(t)   < O)*Pr(Z(t,    +l) > 0).                                       (3.1.3)
            1

Precisely the same sort of specification arises in econometric models of search
unemployment.
  As a specific example of a deterministic model of labor force participation,
assume that



Setting A(t) = exp{ X(t)/?, + e(t)}          wh ere e(t) is a mean zero disturbance,         the
reservation wage is

       lnW,(t)      = X(t)p,+ln(y/a)+(l-ar)lnR(t)+e(t).

The equation for log wage rates can be written as

       lnW(t)=X(t)&+U(t).

Define an index function for this example as Z(t) = In W(t)- In W,( t), so that

       Z(t)=      X(t)(kPI)-ln(v/a)-(I-a)lnR(t)+V(t),

where V(t) = U(t)-         e(t). Define another index function Y as

       Y(t)=lnW(t)=X(t)&+U(t),

and a censored random variable Y*(t) by

       Y*(t)=Y(t)G(t)=G(t)X(t)p,+S(t)u(t).

   Assuming that (X(t), R(t)) is distributed independently of V(t), and letting
IJ,”= Var(v(t)), the conditional probability that 8(t) = 1 given X(t) and R(t) is

                                                   X(t)(P1-&)+lny/a+(l-a)lnR(t)
       Pr(S(t)=lIX(t),R(t))=l-Go
                                               i                      au                        i:

where G, is the c.d.f. of V(t)/a,. If V(t) is distributed independently            across all t,
Ch. 32: Labor Econometrics                                                       1955

the probability that a spell of employment     begins at t = t, and ends at t = t,
conditional on t1 is
             r = tz

             ,G Ma(t) =11X(t),R(t)) Pr@(t,+l> =01X(b), R(t2)).
         [        1                     1

   Assuming a functional form for G,, under standard conditions it is possible to
use discrete choice methods to consistently estimate (& - &)/u” (except for the
intercept) and (1- a)/~,. Using the M function regression estimators discussed
in Section 2.1, under standard conditions it is possible to estimate & consistently.
Provided that there is one regressor in X with a nonzero & coefficient and with a
zero coefficient in fir, it is possible to estimate 0; and (Yfrom the discrete choice
analysis. Hence it is possible to consistently estimate pi. These exclusion restric-
tions provide one method for identifying the parameters of the model. In the
context of a one period model of labor supply, such exclusion restrictions are
plausible.
   In dynamic models of labor supply with savings such exclusion restrictions are
implausible. This is so because the equilibrium reservation wage function de-
termining labor force participation in any period depends on the wages received
in all periods in which agents work. Variables that determine wage rates in
working periods determine reservation wages in all periods. Conventional simulta-
neous equation exclusion restrictions cannot be used to secure identification in
this model. Identifiability can be achieved by exploiting the (nonlinear) restric-
tions produced by economic theory as embodied in particular functional forms.
Precisely the same problem arises in econometric models of search unemploy-
ment, a topic to which we turn next.

3.1.2.        A model of search unemployment

The index function model provides the framework required to give econometric
content to the conventional model of search unemployment. As in the labor force
participation example just presented, agents continue on in a state of search
unemployment until they receive an offered wage that exceeds their reservation
wage. Accepted wages are thus censored random variables. The only novelty in
the application of the index function to the unemployment problem is that a
different economic theory is used to produce the reservation wage.
   In the most elementary version of the search model, agents are income
maximizers. An unemployed agent’s decision problem is very simple. If cost c is
incurred in a period, the agent receives a job offer but the wage that comes with
the offer is unknown before the offer arrives. This uncertainty is fundamental to
the problem. Successive wage offers are assumed to independent realizations from
a known absolutely continuous wage distribution F(W) with E) WI -c co. Assum-
1956                                                               J. J. Heckman and T. E. MaCurdy

ing a positive real interest rate r, no search on the job, and jobs that last forever
(so there is no quitting from jobs), Lippman and McCall (1976) show that the
value of search at time t, V(t), is implicitly determined by the functional equation


       V(t)=max         O;-c+   &Emax[F;V(t+l)]},                                          (3.1.4)
                    i

where the expectation is computed with respect to the distribution of W.
   The decision process is quite simple. A searching agent spends c in period t
and faces two options in period t + 1: to accept a job which offers a per period
wage of W with present value W/r, or to continue searching, which option has
value V( t + 1). In period t, W is uncertain. Assuming that the nonmarket
alternative has a fixed nonstochastic value of 0, if V falls below 0, the agent
ceases to search. Lippman and McCall (1976) call the nonsearching state “out of
the labor force”.
   Under very general conditions (see Robbins (1970) for one statement of these
conditions), the solution to the agent’s decision making problem has a reservation
wage characterization: search until the value of the option currently in hand
(W/r) exceeds the value of continuing on in the state, V(t + 1). For a time
homogenous (stationary) environment, the solution to the search problem has a
reservation wage characterization.20
   Focusing on the time homogeneous case to simplify the exposition, note that
V(t) = V( t + 1) and that eq. (3.1.4) implies


       rV+(l+r)c=$$w-rV)dF(w)                              for    rV/20.                   (3.15)


The reservation wage is W, = rV. This function clearly depends on c, r and the
parameters of the wage offer distribution. Conventional exclusion restrictions of
the sort invoked in the labor force participation example presented in the
previous section cannot be invoked for this model.
   Solving (3.1.5) for W, = rV and inserting the function so obtained into eqs.
(3.1.1) and (3.1.2) produces a statistical model that is identical to the deterministic
labor force participation model.
   Except for special cases for F, closed form expressions for W, are not
available.21 Consequently, structural estimation of these models requires numeri-
cal evaluation of implicit functions (like V(t) in (3.1.4)) as input to evaluation of
sample likelihoods. To date, these computational problems have inhibited wide

   20The reservation wage property characterizes  other models   as well. See Lippman   and McCall
(1976).
   21See Yoon (1981) for an approximate closed form expression   of IV,.
Ch. 32: L.&or Economerrics                                                                        1951

scale use of structural models derived from dynamic optimizing theory and have
caused many analysts to adopt simplifying approximations.22
   The density of accepted wages is


                     f(w)
     dw*) = l-                         w* 2 w,,                                               (3.1.6)
                       F(W,) ’


which is truncated. Assuming that no serially correlated unobservables generate
the wage offer distribution, the probability that an unemployment spell lasts j - 1
periods and terminates in period j is


      [   Fw,)l’-l[l - mG)I.                                                                  (3.1.7)

The joint density of durations and accepted wages is the product of (3.1.6) and
(3.1.7), or


      h(w*, j) = [F(W,)]j-‘f(W*),                                                           (3.1.8a)

where

      w* 2 w,.                                                                              (3.1.8b)

   In general the distribution of wages, F(w), cannot be identified. While the
truncated distribution G(w*) is identified, F(w) cannot be recovered without
invoking some untestable assumption about F. If offered wages are normally
distributed, F is recoverable. If, on the other hand, offered wages are Pareto
random variables, F is not identified. Conditions under which F can be recovered
from G are presented in Heckman and Singer (1985).
   Even if F is recoverable, not all of the parameters of the simple search model
can be identified. From eq. (3.1.5) it should be clear that even if rV and F were
known exactly, an infinity of nonnegative values of r and c solve that equation.
From data on accepted wages and durations it is not possible to estimate both r
and c without further restrictions. 23 One normalization sets r at a known value.24

   **Coleman (1984) presents indirect reduced form estimation procedures       which offer a low cost
alternative to costly direct maximum likelihood procedures. Flinn and Heckman (19X2), Miller (1985),
Wolpin (1984), and Rust (1984) discuss explicit solutions to such dynamic problems.         Kiefer and
Neumann      (1979), Yoon (1981, 1984), and Hotz and Miller (1984) present approximate   solutions.
   23A potential source of such restrictions makes r and c known functions of exogenous variables.
   24 Kiefer and Neumann (1979) achieve identification   in this manner.
1958                                                                   J. J. Heckmun und T. E. MaCur&

Even if r is fixed, the parameter c can only be identified by exploiting inequality
(3.1.8b).25
   If a temporally   persistent heterogeneity  component   q is introduced   into the
model (say due to unobserved        components   of c or Y), the analysis becomes
somewhat    more difficult. To show this write W, as an explicit function of n,
W, = W,(q). In place of (3.1.8b) there is an implied restriction      on the support
of 71

                                                                                               (3.1.9)

i.e. n is now restricted to produce a nonnegative reservation                wage that is less than
(or equal to) the offered accepted wage. Modifying density                   (3.1.8a) to reflect this
dependence    and letting #(n) be the density of n leads to



         h(w’,j)=J(?jlo~w,(?j)~w*]           ~~~(w,(n))]i(w*)~(~)d~.
                                              t=1
                                                                                              (3.1.10)


Unless      restriction   (3.1.9) is utilized,   the model is not identified.26

3.1.3.      Models of job turnover

The index function       model can also be used to provide a precise econometric
framework     for models of on-the-job     learning and job turnover developed by
Johnson (1978), Jovanovic (1979), Flinn (1984) and Miller (1985). In this class of
models, agents learn about their true productivity    on a job by working at the job.
We consider       the most elementary    version of these models and assume that
workers are paid their realized marginal product, but that this product is due, in
part, to random factors beyond the control of the agent. Agents learn about their
true productivity     by a standard   Bayesian learning process. They have beliefs
about the value of their alternatives elsewhere. Ex ante all jobs look alike in the
simplest model and have value V,.
   The value of a job which currently pays wage W( t ) in the t th period on the job
is V( W( t)). An agent’s decision at the end of period t given W(t) is to decide
whether to stay on the job the next period or to go on to pursue an alternative
opportunity.    In this formulation, assuming no cost of mobility and a positive real
interest rate r,


         v(w(t))      = w(t)+     &max{
                                      E,V(Wt +I)); V,},                                       (3.1.11)


  25See Flinn and Heckman (1982) for further discussion of this point.
  26For further discussion of identification in this model, see Flinn and Heckman    (1982)
Ch. 32: I~hor Econonwtrkv                                                                                  1959

where the expectation is taken with respect to the distribution induced by the
information available in period t which may include the entire history of wage
payments on the job. If V, > E,V( IV(t + 1)) the agent changes jobs. Otherwise,
he continues on the job for one more period.
   This setup can be represented by an index function model. Wages are observed
at a job in period t + 1 if E,( V( W’(t + 1))) > V,.




is the index function characterizing job turnover behavior. If Z(t) 2 0, 6(t) = 1
and the agent stays on the current job. Otherwise, the agent leaves. Wages
observed at job duration t are censored random variables Y*(t) = W(t)6(t). As
in the model of search unemployment computation of sample likelihoods requires
numerical evaluation of functional equations like (3.1.11).27



3.2.     Prototypical dummy endogenous variable models

In this subsection we consider some examples of well posed economic models that
can be cast in terms of the dummy endogenous variable framework presented in
Section 2.2. We consider fixed and random coefficient versions of these models for
both certain and uncertain environments. We focus only on the simplest models
in order to convey essential ideas.

3.2.1.     The impact of training on earnings

Consider a model of the impact of training on earnings in which a trainee’s
decision to enroll is based on a comparison of the present value of earnings with
and without training in an environment of perfect foresight. Our analysis of this
model serves as a prototype for the analysis of the closely related problems of
assessing the impact of schooling, unions, and occupational choice on earnings.
   Let the annual earnings of an individual in year t be


                    x(t)p+6a+U(t),                   t>k
         W(t)   =                                                                                      (3.2.1)
                    X(t)6 + WY                       tsk.’


   In writing this equation, we suppose that all individuals have access to training
at only one period in their life (period k) and that anyone can participate in

  27Miller (1984) provides   a discussion   and an example   of estimation   of this class of models
1960                                                                    J. J. Heckman   and T. E. MuCurdy

training if he or she chooses to do so. However, once the opportunity to train has
passed, it never reoccurs. Training takes one period to complete.28
   Income maximizing agents are assumed to discount all earnings streams by a
common discount factor l/(1 + r). From (3.2.1) training raises earnings by an
amount (Y per period. While taking training, the individual receives subsidy S
which may be negative, (e.g. tuition payments). Income in period k is foregone
for trainees. To simplify the algebra we assume that people live forever.
   As of period k, the present value of earnings for an individual who does not
receive training is




The present value of earnings for a trainee is


       f’v(l)=S+         E($+++j)+,f$-q.
                        j=l

The present value maximizing enrollment rule has a person enroll in the program
if PV(1) > PV(0). Letting Z be the index function for enrollment,

       Z=PV(l)-PV(O)=S-W(k)+;,                                                                    (3.2.2)


and


                      if S-W(k)+:>0
                                                                                                  (3.2.3)
                      otherwise

Because W(k) is not observed for trainees, it is convenient to substitute for W(k)
in (3.2.2) using (3.2.1). In addition some components of subsidy S may not be
observed by the econometrician. Suppose

       S=Q#+v,                                                                                    (3.2.4)

where Q is observed by the econometrician                   and 11 is not. Collecting terms, we

   28The assumption    that enrollment decisions are made solely on the basis of an individual’s choice
process is clearly an abstraction.  More plausibly, the training decision is the joint outcome of decisions
taken by the prospective trainee, the training agency and other agents. See Heckman and Robb (1985)
for a discussion of more general models.
Ch. 32: Labor Econometrics                                                       1961

have


       (y=     l       ifQ#+F-X(k)fi+q-U(k)>0
                                                                              (3.2.5)
              i0       otherwise

In terms of the dummy endogenous variable framework presented in Section 2.2,
(3.2.1) corresponds to eq. (2.2.1), and (3.2.5) corresponds to (2.2.2).
   This framework can be modified to represent a variety of different choice
processes. For example, (Ymay represent the union-nonunion wage differential.
The variable S in this case may represent a membership bribe or enrollment fee.
In applying this model to the unionism problem an alternative selection mecha-
nism might be introduced since it is unlikely that income is foregone in any
period or that a person has only one opportunity in his or her lifetime to join a
union. In addition, it is implausible that membership is determined solely by the
prospective trainee’s decision if rents accrue to union membership.29
   As another example, this model can be applied to schooling choices. In this
application, (Yis the effect of schooling on earnings and it is likely that schooling
takes more than one period. Moreover, a vector S is more appropriate since
agents can choose among a variety of schooling levels.
   This framework can also be applied to analyze binary migration decisions,
occupational choice or industrial choice. In such applications, (Yis the per period
return that accrues to migration, choice of occupation or choice of industry
respectively. As in the schooling application noted above, it is often plausible that
6 is a vector. Furthermore, the content of the latent variable Z changes from
context to context; S should be altered to represent a cost of migration, or a cost
of movement among occupations or industries, and income may or may not be
foregone in a period of transition among states. In each of these applications, the
income maximizing framework can be replaced by a utility maximizing model.

3.2.2,       A random coejkient speci$cation

In place of eq. (3.2.1), a random coefficient earnings function is

         W(t)=X(t)p+qa+E)+U(t)
                =X(t)p+&x+U(t)+&S.                                            (3.2.6)

using the notation of eq. (2.2.3). This model captures the notion of a variable
effect of training (or unionism or migration or occupational choice, etc.) on
earnings.

  29See Abowd      and Farber   (1982) for a discussion   of this problem.
1962                                                              J. J. Heckman und T. E. MaCurdy

  If agents     know E when they make their decisions          about          S, the following
modification    to (3.2.5) characterizes the decision process:


                     if Q$+q-X(k)/?+q-U(k)fe/r>O
                                                                                          (3.2.7)
                     otherwise

The fact that E appears in the disturbance            terms in (3.2.6) and (3.2.7) creates
another     source of covariance       between 6 and the error term in the earnings
equation     that is not present in the fixed coefficient dummy endogenous           variable
model.
   The random coefficient model captures the key idea underlying               the model of
self selection introduced        by Roy (1951) that has been revived and extended in
recent work by Lee (1978) and Willis and Rosen (1979). In Roy’s model, it is
solely population      variation in X(k), E, and U(k) that determines 6 (so 9 = Q = 0
in (3.2.7)).30
   As noted in Section 2, the fixed coefficient and random coefficient dummy
endogenous       variable models are frequently        confused in the literature.     In the
context of studies of the union impact on wages, Robinson                 and Tomes (1984)
find that a sample selection bias correction (or M-function)          estimator of (Yand an
instrumental     variable estimator produce virtually the same estimate of the coeffi-
cient. As noted in Section 2.2.3, the instrumental        variable estimator is inconsistent
for the random coefficient model while the sample selection bias estimator is not.
Both are consistent       for cx in the fixed coefficient model. The fact that the same
estimate is obtained         from the two different procedures       indicates  that a fixed
coefficient    model of unionism        describes their data. (It is straightforward         to
develop a statistical       test that discriminates    between these two models that is
based on this principle.)

3.2.2.1.   Introducing uncertainty. In many applications       of the dummy endoge-
nous variable    model it is unlikely that prospective     trainees (union members,
migrants, etc.) know all components    of future earnings and the costs and benefits
of their contemplated    action at the time they decide whether or not to take the
action. More likely, decisions are made in an environment        of uncertainty.
   Ignoring risk aversion, the natural generalization    of decision rules (3.2.3) and
(3.2.5) assumes that prospective trainees (union members, migrants, etc.) compare
the expectation   of PV(0) evaluated at the end of period k - 1 with the expecta-
tion of PI/(l) evaluated at the same date. This leads to the formulation


                     if E,_,     S-W(k)+?]>0
                                                           9                              (3.2.8)
                     otherwise

  “For   further discussion of this model and its applications see Heckman and Sedlacek (1985)
Ch. 32: Labor Econometrics                                                                        1963

where E, _ , denotes the expectation          of the argument in brackets conditional        on
the information      available in period k - 1. “E” is a degenerate          constant in the
fixed coefficient dummy endogenous           variable model, but is not degenerate in the
general random coefficient specification.
   Introducing    uncertainty    can sometimes simplify the econometrics        of a problem.
(See Zellner, et al. (1966)). In the random coefficient model suppose that agents
do not know the value of E they will obtain when 6 = 1. For example, suppose
E,- 1( E) = 0. In this case trainees, union members,              etc. do not know their
idiosyncratic    gain to training, union membership,       etc., before participating    in the
activity. The random variable E does not appear in selection eq. (3.2.8) and is not
a source of covariation       between 6 and the composite disturbance         term in (3.2.6).
In this case earnings eq. (3.2.6) becomes a more conventional             random coefficient
model in which the random             coefficient is not correlated      with its associated
variable. (See Heckman and Robb (1985).)
   If an agent’s best guess of E is the population               mean in eq. (3.2.8) then
E( ~18 = 1) = 0 so E(E~) = 0 and the error component              ~8 creates no new econo-
metric problem not already present in the fixed coefficient framework. Consistent
estimators    for the fixed coefficient model also consistently        estimate (Y and j3 in
this version of the random coefficients model. In many contexts it is implausible
that E is known at the time decisions are taken, so that the more robust fixed
coefficient estimators may be applicable to random coefficient models.31



3.3.     Hours of work and labor supply

The index function framework has found wide application in the recent empirical
literature on labor supply. Because this work is surveyed elsewhere [Heckman and
MaCurdy     (1981) and Moffitt and Kehrer (1981)], our discussion of this topic is
not comprehensive.    We briefly review how recent models of labor supply dealing
with labor force participation,  fixed costs of work, and taxes can be fit within the
general index function framework.


3.3.1.    An elementary model of labor suppi$

We initially consider a simple model of hours of work and labor force participa-
tion that ignores fixed costs and taxes. Let W be the wage rate facing a consumer,
C is a Hick’s composite       commodity   of goods and L is a Hicks’ composite
commodity    of nonmarket    time. The consumer’s strictly quasi-concave preference

   311n the more general case in which future earnings are not known, the optimal forecasting rule for
W(k) depends on the time series process generating U(t). For an extensive discussion of more general
decision processes under uncertainty   see Heckman and Robb (1985). An uncertainty     model provides
yet another rationalization for the results reported in Robinson and Tomes (1984).
1964                                                      J. J. Heckmun nnd T. E. MuCurdy

function is U(C, L, v), where v is a “taste shifter.” For a population of con-
sumers, the density of W and v is written as k(w, v). The maximum amount of
leisure is T. Income in the absence of work is R, and is assumed to be exogenous
with respect to v and any unobservables generating W.
   A consumer works only if the best work alternative is better than the best
nonwork alternative (i.e. full leisure). In the simple model, this comparison can be
reduced to a local comparison between the marginal value of leisure at the no
work position (the slope of the consumer’s highest attainable indifference curve at
zero hours of work) and the wage rate.
   The marginal rate of substitution (MRS) along an equilibrium interior solution
hours of work path is obtained by solving the implicit equation

       MRS=    U,(R+MRSH,T-          H,v)
                                                                                 (3.3.1)
               U,(R+MRSH,T-          H,v)   ’

for MRS, where H is hours of work and C = R + MRS *H. In equilibrium the
wage equals MRS. The reservation wage is MRS( R, 0, v). The consumer works if

       MRS( R,O, v) < W;                                                         (3.3.2)

otherwise, he does not. If condition (3.3.2) is satisfied, the labor supply function is
determined by solving the equation MRS( R, H, v) = W for H to obtain

       H=H(R,W,v).                                                               (3.3.3)

   Consider a population of consumers who all face wage W and receive unearned
income R but who have different v’s The density k(vl W) is the conditional
density of “tastes for work” over the population with a given value of W. Letting
r, denote the subset of the support of v which satisfies MRS( R, 0, v) < W for a
given W, the fraction of the population that works is

                                                                                 (3.3.4)


The mean hours worked for those employed is

                                            &@,      W, v?k(vlW, R)dv
       E[H(MRS(R,O,v)      < W, W, R] =                                          (3.3.5)
                                                     P(W,R)                 ’

The mean hours worked in the entire population is

       E(H)   =/   H(R, W, v)k(vl W, R)dv,                                       (3.3.6)
                   G
Ch. 32: Labor Econometrics                                                                1965

[remember   H( R, W, v) = 0 for v P r,].
   The model of Heckman (1974) offers an example of this framework. Write the
marginal rate of substitution  function given by (3.3.1) in semilog form as


     lnMRS(     R, H, v) = a0 + a,R + cx2X2 + yH + v,                                 (3.3.7)


where v is a mean         zero, normally    distributed   error term. Market   wage rates are
written as


     lnW=Po+PIXl+v,                                                                   (3.3.8)


where n is a normally distributed error term with zero mean. Equating (3.3.7) and
(3.3.8) for equilibrium hours of work for those observations    satisfying In W >
MRS( R,O, v), one obtains


     H=$[lnW-lnMRS(R.O,v)]




        =~(P,-ao+&Xl-a,R-a,X,)+$(q-v).                                                (3.3.9)



   In terms of the conceptual apparatus of Sections 1 and 2, one can interpret this
labor supply model as a two-state model. State 0 corresponds to the state in which
the consumer    does not work which we signify by setting the indicator variable
6 = 0. When 6 = 1 a consumer works and state 1 occurs. Two index functions
characterize the model where Y’ = (Y,, Y,) is a two element vector with


     Y, = H         and        Y, = In W.


The consumer      works (6 = 1) when (Y,, Y,) E Q1 where Q2,= {(Y,, Y,)( Y, > 0,
 - 00 I Y, I co} is a subset of the support of (Y,, Y,). Note that the exogenous
variables  X include Xi, X, and R. The joint distribution     of the errors v and TJ
induces a joint distribution f(y,, y,]X) for Y via eqs. (3.3.8) and (3.3.9). Letting
 Y * = 6Y denote the observed value of Y, Yr* = H * represents         a consumer’s
actual hours of work and Y;C equals In W when the consumer works and equals
zero otherwise.
1966                                                                J. J. Heckman and T. E. MaCurdy

  By analogy with eq. (1.2.8) the joint density of hours and wages conditional on
X and working is given by


       g(y*p    =l, x) =
                                  f(YL Y,*lX)
                             l,J(Yl?    Y,lX)dY,dY,

                                                                                          (3.3.10)


From eq. (1.2.9), the distribution of Y* given X is

       g(y*,GIX)=       [f(y:,y,*(X]6[(1-Pr(S=11X))J(y:,Y,*)]1-6,                         (3.3.11)
where Pr(6 = 11X) denotes the probability that the consumer works given X, i.e.




                                                                                          (3.3.12)


and where J(Y:, Yz) = 1 if Y: = 0 = Y; and = 0 otherwise. When f(e) is a
bivariate normal density, the density g(y*, 6(X) is sometimes called a bivariate
Tobit model. Provided that one variable in X appears in (3.3.8) that does not
appear in (3.3.7) y can be consistently estimated by maximum likelihood using
the bivariate Tobit model.

3.3.2.    A general model of labor supply with fixed costs and taxes

In this section we extend the simple model presented above to incorporate fixed
costs of work (such as commuting costs) and regressive taxes. We present a
general methodology to analyze cases in which marginal comparisons do not fully
characterize labor supply behavior. We synthesize the suggestions of Burtless and
Hausman (1978), Hausman (1980), Wales and Woodland (1979), and Cogan
(1981).
   Fixed costs of work or regressive taxes produce a nonconvex budget constraint.
Figure 1 depicts the case considered here. 32 This figure represents a situation in
which a consumer must pay a fixed money cost equal to F in order to work. R, is
his nonlabor     income if he does not work. Marginal tax rate of t,

   32Generalization to more than two branches involves no new principle. Constraint  sets like R,SN
are alleged to be common in negative income tax experiments and in certain social programs.
Ch.   32:   I*rhor     Econometrics                                                                                                   1967

                     Consumption

                        I




                                      State 3         /                   \
                                                      I                       \
                        I                             Y                           \                              ,r       State 1
                       T                              HL                      1’
                                                                          State 2 ’ ,
                               Hours Worked
                                                                                         \
                                                                                             \
                                                                                                 \
                                                                                                     \
                                                                                                         \
                                                                                                             \
                                                                                                                 \
                                                                                                                     R3

                                                             Figure   1



applies to the branch R,S defined up to p hours, and a lower marginal rate t,
applies to branch NV.
   Assuming that no one would ever choose to work T or more hours, a consumer
facing this budget set may choose to be in one of three possible states of the
world: the no work position at kink point R, (which we define as state l), or an
interior equilibrium on either segment R,S or segment SN (defined as states 2
and 3, respectively).33 A consumer in state 1 receives initial after-tax income R,.
In state 2, a consumer receives unearned income R, and works at an after-tax
wage rate equal to W, = W(l- tA) where W is the gross wage. A consumer in
state 3 earns after-tax wage rate W, = W(l- te) and can be viewed as receiving
the equivalent of R, as unearned income. Initially we assume that W is exoge-
nous and known for each consumer.
   In the analysis of kinked-nonconvex budget constraints, a local comparison
between the reservation wage and the market wage does not adequately char-
acterize the work-no work decision as it did in the model of Section 3.3.1. Due to
the nonconvexity of the constraint set, existence of an interior solution on a
branch does not imply that equilibrium will occur on the branch. Thus in Figure
1, point B associated with indifference curve ZJ, is a possible interior equilibrium
on branch R,S that is clearly not the global optimum.

   33The kink at S is not treated               as a state of the world because       preferences            are assumed       to be twice
diff‘erentiable and quasiconcave.
1968                                                          J. J. IIeckmun und T. E. MuCur+

   A general approach for determining the portion of the budget constraint on
which a consumer locates is the following. Write the direct preference function as
U(C, L, v) where v represents taste shifters. Form the indirect preference func-
tion V( R, W, v). Using Roy’s identity for interior solutions, the labor supply
function may be written as


       H=F=H(R,w,v).
             R

While the arguments of the functions U(e), V( .), and H( .) may differ across
consumers, the functional forms are assumed to be the same for each consumer.
   If a consumer is at an interior equilibrium on either segment R,S or SN, then
the equilibrium is defined by a tangency of an indifference curve and the budget
constraint. Since this tangency indicates a point of maximum attainable utility,
the indifference curve at this point represents a level of utility given by V( R,, W,, v)
where Rj and W, are, respectively, the after-tax unearned income and wage rate
associated with segment i. Thus, hours of work for an interior equilibrium are
given by V,/V,       evaluated at R, and W,. For this candidate equilibrium to be
admissible, the implied hours of work must lie between the two endpoints of the
interval (i.e. equilibrium must occur on the budget segment). A consumer does
not work if utility at kink R,, U( R,, T, v), is greater than both V( R >, W,, v) and
V( R,, W,, v), provided that these latter utility values represent admissible solu-
tions located on the budget constraint.
   More specifically, define the labor supply functions Hcl), Hc2, and Hc3, as
Hcl, = 0 and

               V,(R,, %, v)                          i=2,3;                          (3.3.13)
       H(i)=V,( Ri, Wi, v) =H(Ri,W,>v),
and define the admissible utility levels 1/(r), I$,, and I$) as I$, ==U(R,, T, v),
assumed to be greater than zero, and
                                                -
               V(R,, w,,v)        if 0 c: Hczj I H
                                                                                     (3.3.14)
       V(Z)=
                   0              otherwise

and

               V/(R,,w,,v)        if a<   Hc3)< T
                                                                                     (3.3.15)
       Q, =
                   0              otherwise

We assume the E!/(.) is chosen so that V( .) > 0 for all C, L, and v. A consumer
C‘h. 32: Labor   Econometrics                                                                     1969

whose    v lies in the set




will not work and occupies           state 1. If Y lies in the set


      r2= {w$)>&)                   and       &2Q)L                                         (3.3.17)


a consumer    is at an mterior solution on segment R,S and occupies state 2.
Finally, a consumer is at equilibrium  in state 3 on segment SN if Y is an element
of the set


      r3= (4y3)ql)                  and       v,3,   ’ 52)   >.
                                                                                            (3.3.18)


The sets F,, F,, and F, do not intersect, and their union is the relevant subspace
of the support of v. These sets are thus mutually exclusive.34 The functions Hcij
determine   the hours of work for individuals     for whom v E c.
   Choosing    a specification  for the preference    function and a distribution     for
“ tastes” in the population,   G(V), produces a complete statistical characterization
of labor supply behavior. The probability      that a consumer is in state i is


      Pr(vEc)=_/.+(v)dv.                                                                    (3.3.19)


The expected        hours of work of a consumer              who is known   to be in state i is




                                                                                            (3.3.20)


The expected        hours of work for a randomly             chosen individual   is


      E(H)=         t     E(H(,,IVEF,)Pr(vEc.).                                             (3.3.21)
                    i=l


   We have thus far assumed: (i) that data on potential wage rates are available
for all individuals including nonworkers, and (ii) that wage rates are exogenous

   34 Certain values for Y may be excluded if they imply such phenomena as negative values of U or V
or nonconvex preferences.   In this case we use the conditional density of B excluding those values.
1970                                                                 J. J. Heckmun and T. E. Ma(‘ur&

variables. Relaxing  these assumptions   does not raise any major conceptual
problems and makes the analysis relevant to a wider array of empirical situations.
   Suppose that market wage rates are described by the function

        w= Wxll),                                                                           (3.3.22)

where X includes a consumer’s measured characteristics,                     and TJ is an error term
representing  unmeasured   characteristics.   Substituting                 W( X, TJ) for W in the
preceding discussion, the extended partitions


        FE     {(v~11)l~i)2v(j)
                                          for all j } ,                                     (3.3.23)

(recall that equality holds on a set of measure zero) replace the characterization of
the sets ri for known wages given by (3.3.16)-(3.3.18).      A consumer for whom
(Y, 7) E r; occupies state i. The probability  of such an event is




where $(v, 17) is the joint density of v and 9.
   The labor supply functions for each state are changed by substituting    W( X, 7)
for W in constructing    the arguments of the functions for states 2 and 3 given by
(3.3.13).35 In place of (3.3.21), the expression for expected hours of work becomes


                                                                                           (3.3.25)
                        i=l


where


                                                                                           (3.3.26)


   Using the expression      for E(H) given by (3.3.25) in a regression           analysis
permits wages to be endogenous          and does not require that wage offer data be
available   for all observations.     The parameters     of (3.3.25) or (3.3.26) can be
estimated using the nonlinear least-squares procedure described in Section 2.1. To
identify  all the parameters      of the model, the wage equation         must also be
estimated using data on workers appropriately        adjusting for sample selection bias.
An alternative   strategy is to jointly estimate hours and wage equations.

  35Note     that the arguments   W,, IV,, R, and R, each depend   on W.
Ch. 32: L.&or Econometrics                                                                1971

   Thus far we have assumed that hours of work and wages are not measured with
error. The needed modifications        required in the preceding analysis to accommo-
date measurement       error are presented in Heckman and MaCurdy (1981).
   To illustrate    the required modifications    when measurement        error is present,
suppose that we express the model in terms of u and n and that errors in the
variables plague the available data on hours of work. When H > 0, suppose that
measured     hours, which we denote by H+, are related to true hours by the
equation    H + = H + e where e is a measurement        error distributed    independently
of the explanatory     variables X. When such errors in variables are present, data on
hours of work (i.e. H+ when H > 0 and H when H = 0) do not allocate working
individuals    to the correct branch of the budget constraint.          Consequently,      the
states of the world a consumer occupies can no longer be directly observed.
   This model translates into a three index function model of the sort described in
Section 1.2. Two index functions,        Y’= (Y,, Yz) = (Hi, W) are observed in some
states, and one index function,          2 = v, is never directly observed.       Given an
assumption      about the joint distribution    of the random errors v, 11, and e, a
transformation     from these errors to the variables Y, W, and H+ using eq. (3.3.13)
and the relation H+ = H( R, W, Y)+ e produces a joint density function f( Y, Z).
There are three states of the world in this model (so I = 3 in the notation                 of
Section 1.2). The ith state occurs when S, = 1 which arises if (Y, Z) E 52; where




and




 Y is observed in the work states 2 and 3, but not when 6, = 1. Thus, adopting the
convention    of Section 1, the observed version of Y is given by Y * = (6, + 6,)Y.
In this notation,    the appropriate  density functions for this model are given by
formulae (1.2.12) and (1.2.13) with & = 6, + S,, 8, = 0, and & = S,.



4.    Summary

This paper presents and extends the index function model of Karl Pearson (1901)
that underlies     all recent models in labor econometrics.         In this framework,
censored, truncated and discrete random variables are interpreted        as the manifes-
tation of various sampling schemes for underlying          index function     models. A
unified derivation    of the densities and regression representations    for index func-
1972                                                       J. J. Heckmun and T. E. MaCurdy

tion models is presented. Methods of estimation are discussed with an emphasis
on regression and instrumental variable procedures.
   We demonstrate how a variety of substantive models in labor economics can be
given an econometric representation within the index function framework. Mod-
els for the analysis of unemployment, labor force participation, job turnover, the
impact of interventions on earnings (and other outcomes) and hours of work are
formulated as special cases of the general index function model. By casting these
diverse models in a common mold we demonstrate the essential commonalities in
the econometric approach required for their formulation and estimation.




Appendix:      The principal assumption

This appendix discusses the principal assumption           in the context     of a more
conventional discrete choice model. We write


       z, = xp, + s,cq+ v,,                                                        (A.la)

                                                                                  (A.lb)

       E(Vl)    = E(T/,) =O,      Var(Vr) =Var(V;)   =l.

       z, 2 0       iff 6, =l,

       z, < 0       iff 6, = 0,

       z, 2 0       iff 6, =I,

       z, < 0       iff S,=O.


In this model Z, and Z, are not observed. Unless

       (Yr(Y*
            = 0,                                                                    (A.2)

it is possible that Z, 2 0 but 6, = 0 or that Z, 2 0 but 6, = 0.
   An argument that is often made against this model is that condition (A.2) rules
out “true simultaneity” among outcomes. By analogy with the conventional
simultaneous equations literature, replacing 6, with Z, and 6, with Z, in eq.
(A.l) generates a statistically meaningful model without need to invoke condition
(A.2). Appealing to this literature, the principal assumption looks artificial.
Ch. 32: L.ubor Econometrics                                                       1973

   To examine   this issue more closely, we present a well-specified   model of
consumer choice in which condition (A.2) naturally emerges. Let X = 1 (so there
are no exogenous    variables in the model) and write the utility ordering over
outcomes as

                                                                                (A.3)

where (nl, nz, TJ~)is a vector of parameters and (I+, Q, cg) is a vector of mean zero
continuous  unobserved    random variables.
   The outcome 8, =l of the choice process arises if either U(l,l)        or U(l,O) is
maximal in the choice set (i.e. max(U(1, l), U(l, 0)) 2 max(U(0, l), U(O,O))). For
a separable model with no interactions     (v~ = 0 and es = 0), this condition can be
stated as

     Is,=1         iff 71~+ er 2 0.

Setting    ni = pr, (or = 0 and &I= V, produces   eq. (A.la).  Condition   (A.2) is
satisfied. By a parallel argument for S,, (A.lb) is produced. Condition     (A.2) is
satisfied because both (or = 0 and (Ye= 0.
   For a general nonseparable   choice problem (TJ~f 0 or eg f 0 or both) equation
system (A.l) still represents the choice process but once more (or = (Y*= 0. For
example, suppose that cg = 0. In this case

     6,=1          iff max(U(l,l),    U(l,O))   2 max(U(O,l),   U(O,O)).

For the case n3 > 0,

     S,=l          iff 7ji + E~1E2< -(v*+v,) ’ 0,                               (A.4)


or




or




where Xl, denotes the conditional      random variable X given Y = y. The probabil-
ity that 6, = 1 can be represented       by eq. (A.l) with (or = 0. In this model the
distribution of (Vi, V,) is of a different functional form than is the distribution of
(% E*).
1974                                                                      .I. J. Heckman and T. E. MaCur&

   In this example there is genuine interaction in the utility of outcomes and eqs.
(A.l) still characterize the choice process. The model satisfies condition (A.2).
Even if (hi = (Ye= 0, there is genuine simultaneity in choice.
   Unconditional representation (A.l) (with cyiZ 0 or CQf 0) sometimes char-
acterizes a choice process of interest and sometimes does not. Often partitions of
the support of (Vi, V,) required to define 6, and 6, are not rectangular and so the
unconditional representation of the choice process with CX~     # 0 or CY~# 0 is not
appropriate, but any well-posed simultaneous choice process can be represented
by equation system (A.l).
   An apparent source of confusion arises from interpreting (A.l) as a well-
specified behavioral relationship. Thus it might be assumed that the utility of
agent 1 depends on the actions of agent 2, and vice versa. In the absence of any
behavioral mechanism for determining the precise nature of the interaction
between two actors (such as (A.3)), the model is incomplete. Assuming that player
1 is dominant (so CQ= 0) is one way to supply the missing behavioral relationship.
(Dominance here means that player 1 temporally has the first move.) Another
way to complete the model is to postulate a dynamic sequence so that current
utilities depend on previous outcomes (so CY~      = (Ye= 0, see Heckman (1981)).
Bjorn and Vuong (1984) complete the model by suggesting a game theoretic
relationship between the players. In all of these completions of the model, (A.2) is
satisfied.

References

Abowd, .I. and H. Farber (1982) “Jobs Queues and the Union Status of Workers”,                  Industrial nnd
   Lcrhor Rehtions Review, 35, 354-367.
Amemiya, T. (1985) Aduanced Econometrics. Harvard University Press, forthcoming.
Bishop, Y., S. Fienberg and P. Holland (1975) Discrete Multivariate An&y.+. Cambridge:             MIT Press.
Bock and Jones (1968) The Measurement und Prediction of Judgment and Choice. San Francisco:
   Holden-Day.
Bojas,      G. and S. Rosen (1981) “Income            Prospects  and Job Mobility     of Younger   Men”, in:
   R. Ehrenburg,      ed., Research in I*rhor Economics. London: JAI Press, 3.
Burtless, G. and J. Hausman (1978) “The Etfect of Taxation on Labor Supply: Evaluating the Gary
   Negative Income Tax Experiment”,          Journal of Political Economy, 86(6), 1103-1131.
Byron, R. and A. K. Bera (1983) “Least Squares Approximations              to Unknown Regression Functions,
   A Comment”,        Internntional Economic Review, 24(l), 255-260.
Cain, G. and H. Watts, eds. (1973) Income Muintenunce and Labor Supp!v. Chicago: Markham.
Catsiapsis,     B. and C. Robinson (1982) “Sample Selection Bias with Multiple Selection Rules: An
   Application     to Student Aid Grants”, Journal of Econometrics, 18. 351-368.
Chamberlain,       G. (1982) “Multivariate    Regression Models for Panel Data”, Journnl of Econometrics,
   18, 5-46.
Cogan, J. (1981) “Fixed Costs and Labor Supply”, Econometrica, 49(4), 945-963.
Coleman,       T. (1981) “Dynamic        Models of Labor Supply”.        University of Chicago,   unpublished
   manuscript.
Coleman, T. (1984) “Two Essays on the Labor Market”. University of California, unpublished                Ph.D.
   dissertation.
Cosslett,     S. (1984) “Distribution-Free     Estimator    of Regression    Model with Sample Selectivity”.
   University of Florida, unpublished       manuscript.
Ch. 32: I&or     Eeonometric.s                                                                                    1975

Eicker, F. (1963) “Asymptotic              Normality     and Consistency     of the Least Squares Estimators         for
   Families of Linear Regressions”,            Annals of Mathematical Statistics, 34, 446-456.
Eicker. F. (1967) “Limit Theorems                 for Regressions     with Unequal and Dependent          Errors”, in:
   Proceedings of the Fifth Berkeley Symposium on Mathematical Statistics and Probability. Berkeley:
   University of California Press, 1, 59-82.
Flinn, C. (1984) “Behavioral            Models of Wage Growth and Job Change Over the Life Cycle”.
   University of Chicago, unpublished Ph.D. dissertation.
Flinn, C. and J. Heckman (1982) “New Methods for Analyzing Structural                         Models of Labor Force
   Dynamics”,        Journal of Econometrics, 18, 115-16X.
Freeman.       R. (1984) “Longitudinal          Analysis of the Effects of Trade Unions”,           Journal of Labor
   Economics, 2, l-26.
Gallant,     R. and D. Nychka (1984) “Consistent               Estimation    of the Censored Regression        Model”,
   unpublished        manuscript,  North Carolina State University.
Goldberger,       A. (1983) “Abnormal        Selection Bias”, in: S Karlin, T. Amemiya and L. Goodman, eds.,
   Studies in Econometrics, Time Series and Multivarrate Statistics. New York: Academic Press, 67-84.
Griliches, Z. (1986) “Economic           Data Issues”, in this volume.
Haberman,        S. (1978) Analysis of Qualitatioe Data, New York: Academic Press, I and II.
Hausman,        J. (1980) “The Effects of Wages, Taxes, and Fixed Costs on Women’s Labor Force
   Participation”,       Journal of Public Economics, 14, 161-194.
Heckman,        J. (1974) “Shadow          Prices, Market Wages and Labor Supply”,              Econometrica,     42(4),
   679-694.
Heckman,       J. (1976a) “Simultaneous          Equations   Models with Continuous       and Discrete Endogenous
   Variables       and Structural     Shifts”, in: S. Goldfeld       and R. Quandt.      eds.. Studies in Nonlinear
   Estimation. Cambridge:         Ballinger.
Heckman,       J. (1976b) “The Common Structure of Statistical Models of Truncation,                 Sample Selection
   and Limited Dependent           Variables and a Simple Estimator for Such Models”, Annals of Economic
   and Social Measurement, Fall, 5(4), 475-492.
Heckman,         J. (1978) “Dummy            Endogenous     Variables    in a Simultaneous      Equations     System”,
   Econometrica, 46, 931-961.
Heckman, J. (1979) “Sample Selection Bias as a Specification Error”, Econometrica, 47, 153.-162.
Heckman,       J. (1981) “Statistical     Models for Discrete Panel Data”, in: C. Manski and D. McFadden,
   eds., Structural Analysis of Discrete Data with Economic Applications. Cambridge:                 MIT Press.
Heckman, J., M. Killingsworth           and T. MaCurdy (1981) “Empirical Evidence on Static Labour Supply
   Models: A Survey of Recent Developments”,                 in: Z. Homstein,     J. Grice and A. Webb, eds., The
   Economics of the Labour Market. London: Her Majesty’s Stationery Office, 75-122.
Heckman,       J. and T. MaCurdy (1980) “A Life Cycle Model of Female Labor Supply”, Review of
   Economic Studies, 41, 47-74.
Heckman,       J. and T. MaCurdy (1981) “New Methods for Estimating                    Labor Supply Functions:        A
   Survey”, in: R. Ehrenberg, ed., Research in Labor Economics. London: JAI Press, 4.
Heckman,       J. and R. Robb (1985) “Alternative           Methods for Evaluating       the Impact of Training on
   Earnings”,       in: J. Heckman      and B. Singer, eds., Longitudinal Analysis of Labor Market Data.
   Cambridge:        Cambridge University Press.
Heckman,       J. and G. Sedlacek (1985) “Heterogeneity,           Aggregation    and Market Wage Functions: An
   Empirical       Model of Self Selection in the Labor Market”,                Journal of Political Economy, 93,
   December.
Heckman, J. and B. Singer (1986) “Econometric                Analysis of Longitudinal     Data”, in this volume.
Heckman,       J. and R. Willis (1977) “A Beta Logistic Model for Analysis of Sequential Labor Force
   Participation       by Married Women”, Journal of Political Economy, X5, 27-58.
Hotz, J. and R. Miller (1984) “A Dynamic Model of Fertility and Labor Supply”. Carnegie-Mellon
   University, unpublished        manuscript.
Johnson, W. (1978) “A Theory of Job Shopping”, Quartet+ Journal of Economics.
Jovanovic, B. (1979) “Firm Specific Capital and Turnover”,                 Journal of Political Economy, December,
   87(6), 1246-1260.
Kagan,      A., T. Linnik and C. R. Rao (1973) Some Characterization                     Theorems in Mathematical
   Statistics. New York: Wiley.
Kendall, M. and A. Stuart (1967) The Advanced Theory of Stutistics. London: Griffen, II.
1976                                                                             J. J. Ileckmun    und T. E. MuCurdv

Kcvles. D. J. (1985) In the Nume of Eugenics, New York: Knopf.
Kiefer. N. and G. Neumann (1979) “An Empirical Job Search Model with a Test of the Constant
   Reservation       Wage Hvnothesis”,       Journal of Political Economv. Februarv. X7(1 ). 89-108.
Killingsworth,       M. (1983) Labour Supply. Cambridge:             Cambridge University Press.
Lee, L. F. (1978) “Unionism           and Wage Rates: A Simultaneous Equations Model with Qualitative and
   Limited Dependent          Variables”,    Internuttonal Economic Review, 19, 415-433.
Lee, L. F. (1981) “Simultaneous              Equation Models with Discrete and Censored Variables”,                  in: C.
   Manski and D. McFadden,              eds., Structural Anu!vsis cd Discrete Data with Economic Applicutions.
   Cambridge:        MIT Press.
Lee, L. F. (1982) “Some Approaches                 to the Correction      of Selectivity Bias”, Reotew of Economic
   Studies, 49, 355-372.
Lippman,       S. and J. McCall (1976) “The Economics of Job Search: A Survey, Part I”, Economtt
   Inyuirv, 14, 155-189.
Lord, F. and M. Novick (1968) Statisticul Theories of Mental Test Scores. Reading: Audison-Wesley
   Publishing Company.
Manski, C. and D. McFadden (1981) “Alternative                   Estimates and Sample Designs for Discrete Choice
   Analysis”,       in: C. Manski and D. McFadden,                eds., Structural Analysts of Discrete Dutu with
   Econometric Applicutions. Cambridge:             MIT Press.
McFadden,        D. (1985) “Econometric         Analysis of Qualitative Response Models”, in: Z. Griliches and
   J. Intriligator,    eds., Hundbook of Econometrics. North-Holland,             II.
Miller, R. (1984) “An Estimate of a Job Matching Model”, Journul of Pohtical Economy, Vol. 92,
   December.
Mincer, J. and B. Jovanovic (1981) “Labor Mobility and Wages”, in: S. Rosen, ed., Studies in Lubor
   Murkets. Chicago: University of Chicago Press.
Moffitt, R. (1984) “Profiles of Fertility, Labor Supply and Wages of Married Women: A Complete
   Life-Cycle Model”, Review of Economic Studies, 51, 263-218.
Moffitt, R. and K. Kehrer (1981) “The Effect of Tax and Transfer Programs on Labor Supply: The
   Evidence from the Income Maintenance                 Experiments”,     in: R. Ehrenberg,      ed., Research in Lubor
   Economics. London: JAI Press, 4.
Olson, R. (1980) “A Least Squares Correction for Selectivity Bias”, Econometrica, 48, 1815-l 120.
Pearson, K. (1901) “Mathematical             Contributions     to the Theory of Evolution”,       Phtlosophicul T~nsuc-
   tions, 195, l-47.
Quandt, R. (1958) “The Estimation of the Parameters of a Linear Regression System Obeying Two
   Separate Regimes”, Journul of the American Statistical Assoctution, 53, 873-880.
Quandt, R. (1972) “A New Approach to Estimating Switching Regressions”,                         Journal of the Americun
   Statistical Association, 67, 306-310.
Robbins, H. (1970) “Optimal Stopping”, American Mathemutical Month/v, 11, 333-343.
Robinson,       C. and N. Tomes (1982) “Self Selection and Interprovi&ial                      Migration    in Canada”,
   Canudiun Joumul of Economics, 15(3), 474-502.
Robinson,      C. and N. Tomes (1984) “Union Wage Differentials in the Public and Private Sectors: A
   Simultaneous        Equations Specification”,      Journul of Labor Economics, 2(l), 106-127.
Rossett, R. (1959) “A Statistical Model of Friction in Economics”,                    Econometrica, 27(2), 263-267.
Roy, A. (1951) “Some Thoughts on the Distribution                       of Earnings”.     Oxford Economic Papers, 3,
   135-146.
Rust, J. (1984) “Maximum             Likelihood Estimation of Controlled           Discrete Choice Processes”. SSRI
   No. 8407, University of Wisconsin, May 1984.
Schmidt, P. (1981) “Constraints           on the Parameters in Simultaneous Tobit and Probit Models”, in: C.
   Manski, and D. McFadden, eds., Structurul Anulysis of Discrete Duta with Econometric Applicutions.
   Cambridge:        MIT Press.
Siow, A. (1984) “Occupational            Choice Under Uncertainty”,         Econometricu, 52(3), 631-646.
Strauss, R. and P. Schmidt (1976) “The Etfects of Unions on Earnings and Earnings on Unions: A
   Mixed Logit Approach”,           Internutionul Economic Review, 17(l), 204-212.
Tallis, G. M. (1961) “The Moment Generating Function of the Truncated Multivariate                         Distribution”,
   Journal of the Royul Stutistical Society, Series R, 23, 233-239.
Thurstone,      L. (1927) “A Law of Comparative            Judgment”,     Psychologtcul Reoiew, 37, 213-286.
Ch. 3:   Luhor Econometria                                                                             1971

Tinbcrgcn, J. (1951) “Some Remarks on the Distribution         of Labour Incomes”, Internattotul Econorn/c
   Pupers. 195-20-l.
Tobin, J. (1958) “Estimation    of Relationships    for Limited Dependent Variables”,       Gonometrrcu,26.
   24-36.
Wales, T. J. and A. D. Woodland (1979) “Labour Supply and Progrcssivc Taxes”, Reeve!+ of Ecotromic
   Studies, 46, 83-95.
White, H. (1981) “Consequences         and Detection      of Misspecifed    Nonlinear   Regression Models”,
  Journul of the American Stutistwd Assoaatron, 16, 419-433.
Willis, R. and S. Rosen (1979) “Education        and Self Selection”, Journul of Polrticcrl Econon!g, Xl.
   Sl-S36.
Wolpin,    K. (1984) “An Estimable Dynamic Stochastic           Model of Fertility and Child Mortality”,
  Journal of Politicrrl Ecc.onom,v,Vol. 92, August.
Yoon. B. (1981) “A Model of Unemployment             Duration with Variable Search Intensity”,     Reoiew o/
   Economic.v and Statistics, November, 63(4), 599-609.
Yoon, B. (19X4) “A Nonstationary       Hazard Model of Unemployment          Duration”.  New York: SUNY,
   Department    of Economics, unpublished     manuscript.
Zellner, A., J. Kmenta and J. Dreze (1966) “Specification      and Estimation of Cobb Douglas Production
   Function Models”, Econometrica, 34, 784-795.



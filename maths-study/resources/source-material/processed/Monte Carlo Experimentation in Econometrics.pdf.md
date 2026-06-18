---
normalized_id: shared-pdf-reference-monte-carlo-experimentation-in-econometrics
exam_code: SHARED
material_scope: monte carlo experimentation in econometrics.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Monte Carlo Experimentation in Econometrics.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-monte-carlo-experimentation-in-econometrics

Ch. 16: Monte Carlo Experimentation                                               939




1.     Monte Carlo experimentation



1.1.    Introduction

At the outset, it is useful to distinguish Monte Carlo methods from distribution
sampling even though their application in econometrics may seem rather similar.
The former is a general approach whereby mathematical problems of an analyti-
cal nature which prove technically intractable (or their solution involves prohibi-
tively expensive labour costs) can be “solved” by substituting an equivalent
stochastic problem and solving the latter. In contrast, distribution sampling is
used to evaluate features of a statistical distribution by representing it numerically
and drawing observations from that numerical distribution. This last has been
used in statistics from an early date and important examples of its application are
Student (1908), Yule (1926) and Orcutt and Cochrane (1949) inter alia. Thus, to
investigate the distribution of the mean of random samples of T observations
from a distribution which was uniform between zero and unity, one could simply
draw a large number of samples of that size from (say) a set of one million evenly
spaced numbers in the interval [O,l] and plot the resulting distribution. Such a
procedure (that is, numerically representing a known distribution and sampling
therefrom) is invariably part of a Monte Carlo experiment [the name deriving
from Metropolis and Ulam (1949)] but often only a small part. To illustrate a
Monte Carlo experiment, consider calculating:

        [‘f(X)dx=1 (say),
        Jo
                                                                                   (1)

for a complicated function f(x) whose integral is unknown. Introduce a random
variable YE [a, b] with a known density p( 0) and define 17= f(v)/p(v), then:


                                                                                   (2)

   Thus, calculating E(q) will also provide Z and a “solution” is achieved by
estimating E(q) [see Sobol’ (1974)], highlighting the switch from the initial
deterministic problem (evaluate I) to the stochastic equivalent (evaluate the mean
of a random variable). Quandt in Chapter 12 of this Handbook discusses the
numerical evaluation of integrals in general.
   Rather clearly, distribution sampling is involved in (2), but the example also
points up important aspects which will be present in later problems. Firstly, p( -)
Ch. 16: Monte Curlo Experimentation                                             941

    As before, analytical calculation of E(k) is presumed intractable for the
purposes of the illustration [but see, for example, Hurwicz (1950) Kendall (1954)
White (1961), Shenton and Johnson (1965), Phillips (1977a) and Sawa (1978)] so
that E(h) has to be estimated. Again, the choice of estimator of E(&) arises, with
some potential distribution of outcomes (imprecision); only estimating E(&) at a
few points in 0 x Fis referred to as a “pilot Monte Carlo Study” and can do
little more than provide a set of numbers of unknown generality (specificity).
Since E(&) depends on 8 and T, it must be re-estimated as 8 and T vary, but the
dependence can be expressed in a conditional expectations formula:

     Et&I@,
          T) = G,(B,T),                                                        (7)

and frequently, the aim of a Monte Carlo study is to evaluate G,(8, T) over
0 x 7. However, since E(b) need not vary with all the elements of (B, T), it is
important to note any invariance information; here, & is independent of us2which,
therefore, is fixed at unity without loss of generality. Also, asymptotic distribu-
tional results can help in estimating E(&) and in checking the experiments
conducted; conversely, estimation of E(h) checks the accuracy of the asymptotic
results for T E 7. Thus, we note:

                                                                               (8)

   It is important to clarify what Monte Carlo can, and cannot, contribute
towards evaluating G,(B, T) in (7).
   As perusal of recent finite sample distributional results will reveal (see, for
example, Phillips, Chapter 8 in this Handbook, and Rothenberg, Chapter 15 in
this Handbook), functions such as G,(B, T) tend to be extremely complicated
series of sub-functions of 8, T [for the model (3)-(6), see, for example, the
expansions in Shenton and Johnson (1965)]. There is a negligible probability of
simulation results establishing approximations to G,(8, T) which are accurate in
(say) a Taylor-series sense, such that if terms to O(T-“) are included, these
approximate the corresponding terms of G,( .), with the remainder being small
relative to retained terms [compare, for example, equations (68) and (69) below]:
see White (1980a) for a general analysis of functional form mis-specification.
Indeed, draconian simplifications and a large value of N may be necessary to
establish results to even 0( T-l), noting that many asymptotic results are accurate
to O(T-‘1’)    anyway. Rather, the objective of establishing “analogues” of G,( .)
[denoted by Hi(0, T)] is to obviate redoing a Monte Carlo for every new value of
(0, T) E 0 X 7 (which is an expensive approach) by substituting the inexpensive
computation of E(&]e, T) from HI(.). Consequently, one seeks functions H,( .)
such that over 0 X 7, the inaccuracy of predictions of E( &) are of the same order
942                                                                     D. F. Hendry

as errors arising from direct estimation of E(&) by distribution sampling for a
prespecificd desired accuracy dependent on N (see, for example, Table 6.1 below).
In practice, much of the inter-experiment variation observed in Monte Carlo can
be accounted for by asymptotic theory [see, for example, Hendry (1973)], and as
shown below, often ZZi(a) can be so formulated as to coincide with G,( .) for
sufficiently large T.
   The approach herein seeks to ensure simulation findings which are at least as
accurate as simply numerically evaluating the relevant asymptotic formulae. If the
coefficients of (0, T) in G,( -) are denoted by B, then by construction, ZZi(.)
depends on a (many + few) reparameterization y = h(p) defined by orthogonal-
ising excluded effects with respect to included ones, yet ensuring coincidence of
ZZi(*) and G,( *) for large enough T. For parsimonious specifications of y,
simulation based ZZi(-) can provide simple yet acceptably accurate formulae for
interpreting empirical econometric evidence. Similar considerations apply to other
moments, or functions of moments, of econometric techniques.


1.2.    Simulation experiments

While it is not a universally agreed terminology, it seems reasonable to describe
Monte Carlo experiments as “simulation” since they will be conducted by
simulating random processes using random numbers (with properties analogous to
those of the random processes). Thus, for calculating I, one needs random
numbers ui E [a, b] drawn from a distribution p( -) with ui = f( ui)/p( q). In the
second example, random numbers e, - ZN(O,l) and y,, - ~V(0,(1- a*)-‘) are
required (see Section 3.1 for a brief discussion of random number generators).
   The basic naive experiment (which will remain a major component of more
“sophisticated” approaches) proceeds as follows. Consider a random sample
(x 1. . . x,,,) drawn from the relevant distribution d(-) where &xi) = p and
E(x, - p)2 = a2; then:


       i=N-’    z xi     hasE(X)=p       and   E(z-p)‘=a2/N.                     (9)
               i-l



This well-known result is applied in many contexts in Monte Carlo, often for
{ xi } which are very complicated functions of the original random variables. Also,
for large N, X is approximately normally distributed around Z.L,and if


       6’=&i$t(~i-%)2,               thenE(d2)=a2.
Ch. 16: Monte Carlo Ercperimentation                                                943

Consequently, unknown E(v) can be estimated using means of simple random
samples, with an accuracy which is itself estimable (from N-b*) and which
decreases (in terms of the standard error of 3, which has the same units as the
{xi }) as fi increases, so that “reasonable” accuracy is easy to obtain, whereas
high precision is hard to achieve.
  Returning to the two examples, the relevant estimators are:


       ii=+    ,f    ui,    withS(ii)=E(n)=z,                                      01)
               r=l




                                                                                   (12)
where each d,. is based on an independent set of ( y,e, . . . er). Furthermore, letting
E(&-E(t))*   = V, then:


       jT=    &j~l(6i-6)2hasb(v)=Y                                                 (13)


and

       &(E-E(h))*          = V/N.                                                  (14

  Thus, the approximation Z ,5r,M(E(&), V/N) provides a basis for construct-
ing confidence intervals and hypothesis tests about E(h).
   In what follows, an experiment usually denotes an exercise at one point in the
space 8 x Y(generally replicated N times) with K experiments conducted in total.
However, where the context is clear, “an experiment” may also denote the set of
K sub-experiments investigating the properties of a single econometric method.


1.3.    Experimentation versus analysis

The arguments in favour of using experimental simulations for studying econo-
metric methods are simply that many problems are analytically intractable or
analysis thereof is too expensive, and that the relative price of capital to labour
has moved sharply and increasingly in favour of capital [see, for example,
Summers (1965)]. Generally speaking, compared to a mathematical analysis of a
complicated estimator or test procedure, results based on computer experiments
are inexpensive and easy to produce. As a consequence, a large number of studies
Ch. 16: Monte Carlo Experimentation                                                945


   There are several intermediate stages involved in achieving this objective.
Firstly, as complete an analysis as feasible of the econometric model should be
undertaken (see Section 2). Then, that model should be embedded in a Monte
Carlo Model which exploits all the information available to the experimenter, and
provides an appropriate design for the experiments to be undertaken (see Section
3). Thirdly, simulation specific methods of intra-experiment control should be
developed (see Section 4) and combined with covariance techniques for estimating
response surfaces between experiments (Section 5). The simple autoregressive
model in (3)-(6) is considered throughout as an illustration and in Section 6,
results are presented relating to biases, standard errors and power functions of
tests. Finally, in Section 7, various loose ends are briefly discussed including
applications of simulation techniques to studying estimated econometric systems
(see Fair, Chapter 33 in this Handbook) and to the evaluation of integrals [see
Quandt, Chapter 12 in this Handbook and Kloek and Van Dijk (1978)]. Three
useful background references on Monte Carlo are Goldfeld and Quandt (1972),
Kleijnen (1974) and Naylor (1971).


2.     The econometric model


2.1.    The data generation process

The class of processes chosen for investigation defines, and thereby automatically
restricts, the realm of applicability of the results. Clearly, the class for which the
analytical results are desired must be chosen for the simulation! For example, one
type of data generation process (DGP) which is often used is the class of
stationary, complete, linear, dynamic, simultaneous equations systems with (possi-
bly) autocorrelated errors, or special cases thereof. It is obvious that neither
experimentation nor analysis of such processes can produce results applicable to
(say) non-stationary or non-linear situations, and if the latter is desired, the DGP
must encompass this possibility. Moreover, either or both approaches may be
further restricted in the number of equations or parameters or regions of the
parameter space to which their results apply.
   Denote the parameters of the DGP by (0, T) (retaining a separate identity for
T because of its fundamental role in finite sample distributions) with the
parameter space 0 X 7. It is important to emphasize that by the nature of
computer experimentation, the DGP is fully known to the experimenter and in
particular the forms of the equations, the numerical values of their parameters
and the actual values of the random numbers are all known. The use of such
information in improving the efficiency of the experiments is discussed below, but
its immediate use is that the correct likelihood function for the DGP parameters
Ch. 16: Monte Carlo Experimentation                                              941

where the Gi( 0) are the conditional expectations functions which have to be
calculated (or the equivalent thereof for variances such as v, test powers, etc.).
From the above discussion limiting functional forms for G,( .) and qz( e) (i.e. for
large T) are given by /3r and T-l&!, respectively (and by T-‘V for V, etc.).
   Frequently, it will be feasible to establish that the +rl( 0) of relevance do not
depend on certain parameters in 8, which may thereby be fixed without loss of
generality but with a substantial saving in the cost of the experiments [see u,’ =l
in the example (3)-(6)]. Such results can be established either by analysis [see,
for example, Breusch (1979)] or by “pilot screening” as discussed below in
Section 4 when an invariance is anticipated; in both cases, reduction to canonical
form is important for clarifying the structure of the analysis [see, for example,
Mariano (1982) and Hendry (1979)]. Conversely, it can occur that, unexpectedly,
results are more general than claimed because of an invariance in an embedding
model [e.g. see King (1980)]. As stressed earlier, other assumptions (such as zero
intercepts) may be critical and care is required in establishing invariance, espe-
cially in dynamic models.


3.     The Monte Carlo model


3.1.     Random numbers

The data generation process of the Monte Carlo directly represents that desired
for the econometric theory with two important differences. Firstly, the parameters
(8, T) of the econometric DGP become design variables in the experiment and
hence the numerical values chosen should be determined by considerations of
simulation efficiency, an issue discussed in the following subsection. Secondly, as
noted above, the random processes are simulated by random numbers intended to
mimic the distributional properties of the former. This does not imply that the
random numbers must be generated by an analogue of the random process
[although physical devices have been used-see Tocher (1963)]. Rather, whatever
method is adopted, the numbers so produced should yield a valid answer for the
simulation (see the next subsection), the checking of which is one of the ad-
vantages of Monte Carlo over pure distribution sampling.
   Generally, the basic random numbers in computer experiments have been
uniformly distributed values in the unit interval (denoted ni - R(0, 1)) produced
by numerical algorithms such as Multiplicative Congruential Generators (for a
more extensive discussion of the numerical aspects of random number generation,
see Quandt, Chapter 12 in this Handbook):

       Z r+l   =   bz;   (mod r),     i=O,1   ,-*-, m,                         09)
948                                                                                 D. F. Hendry

with   n, = zr/r E [O,l]. The choices of b and r are important for avoiding
autocorrelation, maintaining uniformity and producing the maximum feasible
period m and if any study is likely to be dependent on the presence or absence of
some feature in the ( ni }, it is clearly essential to test this on the numbers used in
the experiment. The ( ni} from (19) are pseudo-random in that from knowing the
algorithm and the “seed” z,,, they are exactly reproducible but should not be
detectably non-random on a relevant series of tests. There is a very large literature
on the topic of random number generation, which I will not even attempt to
summarise, but useful discussions are provided by Hammersley and Handscomb
(1964) Kleijnen (1974), Naylor (1971) and Tocher (1963) inter alia; also, the
recent text by Kennedy and Gentle (1980) offers a clear and comprehensive
coverage of this issue and Sowey (1972) presents a chronological and classified
bibliography.
   Other distributions are obtainable from the uniform using the property that:

       Pr(niIk)=P(k)=kIl,                                                                  (20)

so that P(k) and k are interchangeable.
  To compute ei - q(e), if ‘k( *) is invertible then V’(ni)             suffices since:

       Pr(e,<k)=Pr(*(e,)l*(k))=Pr(ni~*(k))
                    = P( *k(k)) = q(k)       as required, if ni = P( e,).                  (21)

For the exponential distribution, say 9( 0) = 1 - exp( - pcle),then &i= - z.-‘ln(l -
ni) - ‘k( .). However, the Normal distribution does not have an analytical inverse
and the two usual methods for generating ei - 1.X(0,1) are:

       (Ei2nj -6) = e,      ( an a pp roximate central limit result),                      (22)

or, for bivariate ZJV(O, I), the Box-Muller         method:

       (ei,ei+i)   = hi(cos2ani+,,sin2ani+,),                                              (23)

whereh,=(-21nni)      ‘I2 . It is important to use a “good” generator (i.e. one which
is well tested and empirically satisfactory) for input to (23), especially if (n ;, ni+ i)
are successively generated by (19) [see, for example, Neave (1973) and Quandt,
Chapter 12 in this Handbook]. Golder (1976) and King (1981) discuss some
useful tests on the {n,}. Kennedy and Gentle (1980) consider the generation of
variates from many useful statistical distributions. Finally, Sylwestrowicz (1981)
discusses random number generation on parallel processing machines.
Ch. 16: Monte Carlo Experimentation                                                              949

3.2.    Ejicient simulation: Reliability and validity

A reliable experiment is one in which any claimed results are accurately repro-
ducible using a different set { ni} from the same (or an equivalent) generator; a
valid experiment is one where the claimed results are correct for all points in the
space 0 x T. An applicable experiment is one in which the assumed DGP is an
adequate representation of that required in the equivalent analytical derivation.
Reliability is the most easily checked and it is standard practice to quote
estimated standard errors of simulation statistics such as 4, to indicate the
degree of reliability being claimed for these. However, the final products of the
type of Monte Carlo being discussed herein are estimates of the conditional
expectations functions G,(a) as in (17) and (18) from Sri when the precise
functional forms of the Gi( .) are unknown. Consequently, response surfaces must
be postulated of the general form:

       lJTi=qerT)+vTi               (i =1,2),

where Hj( .) is an approximation* to G,( *) over 0 X 97 Thus, yri comprises two
components: a “measurement error”,




and variance, Vi(v,ri), estimable from the simulation; and an “approximation
error”,

       v2Ti = (Gi(e, T)-Hi(@v         T)),                                                     (26)
of unknown (but potentially estimable) magnitude. It seems reasonable to assume
that the components llTi and p2ri are independent, but yri need be neither
homoscedastic, nor purely random. The coefficients of the &( *) have to be
estimated and the net products of the simulation are numerical-analytical expres-
sions of the form @(e, T) [see Section 6; Section 7 briefly considers estimation of
W-N
   Obtaining &( 0) = Gi( 0) for all ((9, T) E 8 x .7would be an optimal outcome
since such results would be both reliable and valid, but to even approximate its
attainment requires fulfilling several intermediate steps:
   (a) Hi(*) must be a close approximation to Gi(-) over the relevant parameter
space so that the error v2ri must be of small magnitude, purely random and have

   ‘As discussed above, this is a shorthand for: H,( .) is the conjectured model of G,( .) and hence
constitutes that reparameterization of the latter which minimizes prediction mean square error over
the conducted experiments. Subject to known heteroscedasticity corrections, H,( .) usually will be a
least-squares approximation to G,( .).
Ch. 16: Monte Carlo Expetimentation                                              951

information comes from the econometric theory again and concerns invariance
and (limiting) distributional results; the former reduce the dimensionality of the
parameter space needing investigation without losing generality, and the latter
provide a useful guide to the formulation of the &(O, T) by restricting these to
coincide with the known form of the corresponding G,( .) for large T (see Section
5).
   Consequently, careful- and thorough embedding of the econometric model in
the Monte Carlo can yield improved efficiency [sometimes dramatically-see,     for
example, Hendry and Srba (1977)] and even closer interdependence will emerge in
the following sections thereby providing ways of investigating validity as well as
further improving reliability.



4.     Reducing imprecision: Variance reduction

Variance reduction in the present context entails intro-experiment control. The
most common techniques are: (a) reusing the known random numbers { n, }
(which economises on their generation as well as reducing variability) either
directly (4.1) or after transforming (4.2); and (b) developing control variates
which ensure variance reductions in pre-specifiable situations [see (4.3)]. Such
devices may be used in combination [see, for example, Mikhail (1972), Kleijnen
(1974) and Hylleberg (1977)].



4.1.    Common random numbers

Using the same set { ni } in two situations generally reduces the variability of the
difference between the estimates in the two situations (although not of the actual
estimates). For example, different estimation methods are almost invariably
applied to common data sets for comparisons. Less usual, but equally useful, the
same { n, } also can be used at different points in 8 and/or T for a single
estimator. Thus, “chopping-up” one long realization such as one set of T = 80,
into two of T = 40 and four of T = 20 reduces variability between sample size
comparisons.
   This type of device is generally invaluable in pre-experiment screening for
potential invariances. Thus, in examples (3)-(6), estimating & with the same { ni }
but two different u,’ values should yield identical results. Similarly, for fixed
regressors, identical values of (B - 8) would occur with the same { ni } used at
different /i, and so on. However, reusing ( nj } across experiments may create
non-random pITi.
952                                                                         D. F. Hendty

4.2.   Antithetic random numbers

Consider two unbiased estimators, 4 and J/’ for an unknown parameter 4 such
that the “pooled estimator” 4 = ~(I,!J+ 4’) has b(q) = \c, and variance V(q)
= f [ V( q) + V( $+) + 2 Cov( 4, $‘)I. In random replications, 6 and I/J’ are based on
independent sets {n;} so that Cov( .) = 0, V(4) = V( $‘) and I’( 4) = f I’( 4).
However, since the {n;} are known, it may be possible to select matching pairs
which ofiet each other’s variability (i.e. are antithetic) and base 6, J/’ on these [see
Hammersley and Handscomb (1964) and Kleijnen (1974)]. For example, {n,}
and (1 - n, } are perfectly negatively correlated as are { e, } - ZJV”(O,u,‘) and
{ - e, }. Basing 4 on one and J/’ on the other of an antithetic pair can induce a
negative covariance in many cases (see, for example, Mikhail (1972, 1975)
Hendry and Trivedi (1972) and Hylleberg (1977)]. In certain respects the effect is
equivalent to stratified sampling: {n;} and {1 - n, } corresponds to a partition of
R(O,l) into R(0, f) and R(+,l), while ensuring sampling from each segment, and
this idea generalizes to four-way partitions, etc. (with analogous results for
normal variates).
   Again, antithetic variates can form the basis for invariance determination [see
Kakwani (1967)] since if $ and JI’ are linear in {n, } and (1 - n, }, respectively,
 V( 4) = 0 independently of the number of paired replications. In dynamic models,
it has proved difficult to locate antithetic transformations which generate negative
covariances between estimators; in example (3)-(6), basing 4 and 4’ on (y,, {e,})
and (- y,, { - e,}) produces J, = 4’ and is, therefore, useless. Nevertheless, for
stochastic simulation studies of (say) estimated macro-econometric models, care-
fully chosen antithetic variates may be able to save a considerable expenditure of
computer time [see Mariano and Brown (1983) and Calzolari (1979)].
   Finally, little work has been done on creating functions of {n, } which improve
the efficiency with which moments other than the first are estimated so the next
technique seems more promising in econometrics (contrast the conclusions of
Kleijnen (1974)).


4.3.    Control variates

A control variate (CV) is any device designed to reduce intra-experiment varia-
tion, by forming a more tractable function of the random numbers than the
primary objective of the study. Thus, given $;, create from the same {n,} a #*
where a( 1c/*)is known and J, and #* are positively correlated. Then:
       $=$-$*+&(JI*)hasE($)=J,                                                     (27)
and
       V(q) =V($)+V(#*)-2Cov($,JI*)(V(\t),              if Cov(.))fV($*).          (28)
Ch. 16: Monte Carlo Experimentation                                                        953

In much Monte Carlo work, CVs like $* are ad hoc; but it is a major function of
the econometric model to supply estimators from which CVs can be constructed for
the Monte Carlo study. The estimator generating equation ql(&    I&‘) = 0 provides
the required solution, since (among other attributes) it defines the class of
estimators asymptotically equivalent to & (and hence highly correlated with it for
large T). Within the relevant class, choose the most tractable member /3:, seeking
a compromise between &’ behaving similarly to &, yet where E(B:) is compu-
table whereas E(&) is not (compare the analogous problem in choosing Instru-
mental Variables) [see Hendry and Srba (1977), and for the basis of a general
approach based on Edgeworth approximations, see Sargan (1976) and Phillips
(1977b)].
   For the example in (3)-(6), the DGP of the econometric model is such that
ql(a Iu,‘) = 0 is (asymptotically) equivalent to (cy,_ ie,) = 0 and an asymptoti-
cally efficient estimator is given by choosing a* such &= a* + 0,(1/T).    To this
order:

     a*=a+(1-         f?)Cy,_,&,/T,                                                       (29)

with \/7;( a* - a) - .X(0,(1       - a2)) and plimfi(&       - a*) = 0. Also:

     E( a*) = a      and    E( a* - a)’ = (1 - a2)/T,                                     (30)
so the first two moments are easily calculated. Clearly, a* requires knowledge of B
and so is operational on/y in a Monte Carlo setting, but is no less useful for that.
In effect, a benefit arises from using a* as an “intermediary” since:

     &=a*+(&-a*),                                                                         (31)
splitting the problem of estimating E(k) into a part which is known, [E(a*)], and
only simulating the remainder, which is 0,(1/T),    whereas & is O,(l/@).
  The mapping to the Monte Carlo model is obvious:

                                              and   q=a+(J-$*),                           (32)

so that:

     b($)=a+b($)-&‘($*)=b($)=E(&)                            (asrequired).                (33)
   Since (4 - $*) is O,(l/Tfi)       its behaviour is less dependent on the particular
random numbers sampled, and 4 is increasingly efficient with increasing T,
offsetting the rising costs of experimentation.3

  ‘More accurately, (4 - $*) is O,,(l/@T(l-    a’)): see equations (61) and (64) below.
954                                                                            D. F. Hendry

   Similar principles apply to estimating other moments, means of tests, etc. [see
M&hail (1972,1975) and Hendry and Harrison (1974)].
   Furthermore, the validity of the experiments now can be checked by testing that
the estimated moments of JI* do not differ significantly from their known
population values. Indeed, we have created a tight specification for determining
any J/, as illustrated for E(&) in Table 4.1, where g denotes “equal in expecta-

tion”, + means “helps determine”, and f                implies both g and -+ [see Hendry
and Srba (1977)J The only unknown is #, and all other features are checkable:
equivalent results hold for second moments, means of estimated variances or
tests, etc.
   On this basis, it seems possible to reliably and validly estimate I&-~(@)thus
achieving objective (b) of Section 3.2. Moreover, V($) and k’(6) will be useful in
Section 5 for checking the choice of I&( -).
   The final twist is to note that CVs provide asymptotic approximations to the
econometric estimators and have as their finite sample moments, the asymptotic
moments of the latter. Consequently CVs allow the analytical derivation of
moments of estimators which differ by terms of 0,(1/T)        from the econometric
estimators under study and so, even without a simulation experiment, throw
considerable light on the behaviour of the latter and the conditions under which
asymptotic theory provides an adequate characterisation of finite sample be-
haviour [see Hendry (1979) and for a correction to the formulae therein; see
Maasoumi and Phillips (1982) and Hendry (1982)]. CVs also can be obtained
from Nagar Expansions [see Nagar (1959), Hendry and Harrison (1974)], or
Taylor Series Expansions [see O’Brien (1979)], and if their exact distributions
were known, could help determine qr-( .) directly [see Sargan (1976)J.
   Moreover, interesting combinations using CV’s to accurately estimate moments
for Edgeworth approximations are possible for determining significance criteria of
tests in dynamic models [see Sargan (1978) and Tse (1979)J.
   Finally, in the statistics literature, variance reduction methods are often re-
ferred to as “swindles” [see, for example, Gross (1973)]. Providing that the costs
of the extra labour in deriving, programmin g, etc. any variance reduction tech-



                                           Table 4.1
                              Simulation                    Exact             Asymptotic

      Econometric estimator     $&              f         #=ya)        +-         a
                                  7                                               II
      Control variate            +*             =&            a        =          a
956                                                                       D. F. Hendry

with the term Z/T also included as a potential regressor by analogy with results
based on Nagar approximations [see Nagar (1959)] and because of its established
empirical usefulness [see Hendry and Harrison (1974)]. Let +,,r (j = 1,. . ., k,)
denote appropriate functions of the design variables in the set of experiments (e.g.
8,9/T, 8’, T-‘, T-‘, etc. in this scalar case), chosen on the best available basis,
then:




For y. =1 (which should be tested), both H,( .) and G,( .) + j3 as T -+ co. When
I = 0, the bias E(j3 - j3) is assumed to be at most O(T-‘) as in (say) Nagar
approximations. Note that, independently of how closely they represent G,(a),
response surfaces such as (34) (after transformation) also provide a useful
summarisation of the experimental findings; but as discussed in Section 5.3
below, their validity is open to investigation in any case. The “solutions” of
estimated regressions like (34) (for yoI = 1) yield expressions of the form:




as the numerical-analytical results approximating the finite sample outcome.
   As Nicholls et al. (1975) point out, however, direct estimation of the { y, 1} in,
for example, (34), will be inefficient and the estimated standard errors will be
biased unless appropriate heteroscedasticity corrections (such as those discussed
in Section 5.2) are used.




                                     Figure 5.1
Ch. 16: Monte Curlo Experimentation                                                              951

5.1.2.     Second moments

When analysing 1c/r2(.) (where a@,/ is referred to as the sampling standard
deviation, SSD), the asymptotic variance D often is computable to restrict the
limiting behaviour of H2( -). Moreover, a log,( = In) formulation ensures both
positive predictions of $r2 as well as identical results from &,, and SSD. Thus, an
“obvious” functional form is:



                                      + Y~,~/T+ c Yj+2,2+,,2/T,
         lnH,(k T) = %,,lnQ + y12T-‘lnQ                                                         (35)
                                                                 j=l




where the cp,,* may reflect such aspects as degrees of freedom, or the effective
sample size, etc. [see (68) below]. Again, for y0,2 = 1, H2( -) + G as T --j co. Similar
considerations apply to u 2 (the equation-error variance in the econometric model)
and ESE in correctly specified econometric models. In mis-specified econometric
models, however, the role of D in (35) is played by V or plims2 = up’ (say),
respectively (see Section 2.2 above). Variants of (35) have proved useful in a
number of response surface studies [see, for example, Naylor (1971, ch. 7),
Hendry and Srba (1977) and Hendry (1979)].

5. I. 3.   Test rejection frequencies

Consider a test Z of some hypothesis H,,: 8 = t3, such that on H,, Z ;; x2(1,0)
where x2( I, ‘p) denotes a non-central chi-square with 1 degrees of freedom and
non-centrality parameter cp. It is assumed that Z is consistent (will reject all fixed
false hypotheses with unit probability as T + 00). The nominal and large sample
significance level of the test is 6 = Pr(x2(I,0) 2 d,), where H, is true but is
rejected if Z 2 d,. Local alternatives of the form: 4




for fixed A, are considered, so that on HT, Z ;; x2(1, ‘p) where 9, is a scalar
function of 8, 0, and A, independent of T. The large sample power of the test is:


                                                                                               (37)

  4Note that H, varies with A and ti, as well as T, and the actual significance level may vary with 0
and T.
958                                                                                  D. F. Hendty

   The objective of the study is not just to estimate the test rejection frequency at
a few points in 8 x Abut to determine the power’ functions:

      P=Pr(Zrd,)=G,(e,h,T,6).                                                                (38)

The computation of an integral like P for a fixed value of (0, T, A, 6) is usually
based on the random replications estimator p defined as C&/N, where 4 = 1 if
and only if a reject outcome occurs (and is zero otherwise). Unfortunately, p is
usually inaccurate for P unless N is large since;

      v(F)    = P(l - P)/N.                                                                  (39)

To date, few variance reduction methods have proved useful for intra-experiment
control [but see Sargan (1976, 1978)]. However, P*( ‘) is often obtainable both
easily and cheaply and hence can be used as an inter-experiment control in a
response surface based on (say):


      (A)        = (&)n3+‘“‘rexp(                 g( $)).                                    w
As discussed in Mizon and Hendry (1980), (40) ensures P -+ P* as T-+ oo for
y,,=l,andalsoO~P~l.
   In the example, to test H,,: a = a0 when ]&] ( 1, let

      Z=T(ii-a,)2/(1-&2)               --x2(l,cp),                                           (41)


where the asymptotic approximation of Var(&) by (1 - G2)/T is used for exposi-
tory purposes [see Evans and Savin (1981)] and Q,= X2/(1- a’) with 6 =
Pr(x2(l,0) 2 d,). Since P*(a, q,, T, 6) = Pr(x’(l,~~) 2 d,) when HT is true, P*
could be computed directly from integrating the non-central x2. However [see
Kendall and Stuart (1961, ch. 24) and Mizon and Hendry (1980)], it is often
convenient to compute P*( 0) instead from a central x2 approximation with the
same first two moments:

      f’*(o) =jlmdx2(m.0).

where m = (1 + (~)~/(l+ 2~) and f = &J(l                  + cp). Using the formula in equation


  5Ektimation of test “power” requires prior calibration of d,(T, 8) to ensure finite sample sign&
cance levels of 6, and most studies simply report rejection frequencies. For the importance of
correcting significance levels see, for example, Evans and Savin (1982).
Ch. 16: Monte Carlo Experimentation                                               959

(42), P*( -) is inexpensive and easy to compute for a wide range of tests, by itself
provides considerable insight into factors determining power, is a useful analytical
approximation to P( *) for large T, and offers a convenient means of comparing
alternative tests [see Hendry (1977) and Mizon and Hendry (1980); also, compare
the notion of “approximate slope” comparisons of tests based on cp in Geweke,
Chapter 19 in this Handbook]. More accurate approximations to P than P*
could be obtained from Edgeworth expansions as, for example, in Davis (1971).


5-2.    Heteroscedasticity transformations

In each of the above cases the conjectured response surface functional forms have
to be both estimated and tested, and, interestingly, the heteroscedasticity transfor-
mations necessary to efficiently achieve the former help provide tests of Hi(-) =
Gi( -) over the sampled parameter space.
   Consider random sampling certain variates {xi } from a distribution with finite
momentsgivenby~~=E(xlk)fork=1,...,6.Letm;=N-’C1V,,xk,then[see,for
example, Kendall and Stuart (1958, ch. lo)]:


       E(m;)=&         and     Var(m;)=$(&-(Pi)*).                               (43)

For moments about means, however, exact results are not easily established and
instead we use the large sample result [see Cramer (1946, p. 365) and Kendall and
Stuart (1958, ch. lo)]:




where     {} is denoted by wi below, pk = E(x -E(x))“            with   no =l,   and
mk = [l/(N    -l)]C(x, - T$)~. In particular:




and




withu;=p4-     &. If the {xi} are normally distributed, then p3 = 0 and p4 = 3~;.
Note that the {xi} could refer to estimated regression coefficients [in which case
(43a) and (44a) relate to $n and #Tz] or to equation-error variances or estimated
standard errors, t-statistics, etc. In most cases, however, wi can be estimated
960                                                                                     D. F. Hendry

directly from the Monte Carlo, and hence (44) can be implemented by replacing
w: by i$. Examples are reported below in Section 6.
   Alternatively, even though the {xi } may be complicated functions of the basic
random numbers {n,}, often their large-T distributions can be derived and are
themselves normal. For example, (8) holds for the model in (3)-(6), and since
$,, = NP’&        using (8) and (43a) for pcLz
                                             = T-‘(l- (w2):

      m($,,         - $,,)/dg              - .&“(O,l)    (for large Tand largeN).6              (45)
                                           u

Similarly, for $,, using the asymptotic approximation               that wz = 2~; yields from
(44a):

      m(m2/p2 - 1) - JTO,l)     0
                                                                                              (Mb)
Thus, noting that (&,,(+,,      - 1) is O,( N-‘12), the further approximation that
( J/r2 - J/r2)/J/r2 = ln(#r2/#r2)     relates the functional form to (35). In fact, if
xi - X(&, p2) then Var(ln m2) is independent of I_L~      [see Rao (1952, p. 214)], and
from the limiting convergence of (xf - 1)/m         to X(0,1) [see Johnson and Kotz
(1970, ch. 17)], it can be established directly that (44b) holds for large T and large
N [see Campos (1980)].
    For equation-error variances, a,2, the {xi } must be interpreted as { I$: } so that
(43a) applies. However, using the large-T approximation that E(&:) = 3~2 (exact
when eI - X(0, a:)) then:

      m(       $ - u,‘)/u,’ - &-(0,l).                                                          (46)
                                    a

Thus, since 3: = N-‘C~=,$,              and ln(G:/u,‘) = (62/u,” - 1):

      ,/mln(        $/a:)    - X(0,1)
                             0
                                              (for large T and large N).                      (464
If Var(fie2) is estimated from the Monte Carlo, then:


                                                                                              (46b)

Note that if a control variate is used in estimating fie2:;‘,
                                                          then (46a) also must be
corrected for the efficiency gain.

  6For [al near unity, the continuous normalization used by Evans and Savin (1981) may be
preferable to dm,           but in practice hardly altered the response surface estimates computed in
Section 6 below.
Ch. 16: Monte Carlo Experimentation                                                961


   Similar considerations apply for estimated coefficient variances or ESE’s when
their simulation standard errors (SSE) have been computed, and equations like
(46b) are used below in the form:


                                                                                 (47)


where w         is l/n   times the plim of the estimated standard error (/( 1 - a2 )/T
in the illustration).
   Unfortunately, asymptotic approximations to the heteroscedasticity correction
factors for ESE are highly model dependent. For example, in a simple regression
model with a strongly exogenous, stationary regressor, following Goldberger
(1964, ch. 3.8) it can be established that SSE is O(T-‘N-‘/2),    whereas for ESE(&)
from (3) (for sufficiently large T):

      SSE =d=/T312fi.                                                            (48)

Then for (Y= 0, this is of 0(T-3/2N-1/2) but for (say) ((Y]= i and T large it is
close to (2Tfi))‘.    For small T, (48) itself is not a good approximation (although
closer approximations can be derived from Nagar expansions).
   Overall, the asymptotic correction factors have the virtue of simplicity and in
practice yield similar results to response surfaces based on 3,. However, they rely
on a “double-asymptotic”       requirement of large T and large N and require
modification by efficiency gain factors for application to results based on control
variate estimates. Moreover, as noted, no simple results hold for ESE’s and this
might also affect other statistics in more complicated data generation processes,
so there is a good case for using simulation-estimated wk. Nevertheless, as (44)
also shows for k 2 3, high order moments are imprecisely estimated. Conse-
quently, below we report various response surfaces based on both forms of
correction and also certain descriptive regressions relating the relevant Gi, to their
asymptotic counterparts [see equations (641, (66), (67) and (72)].
   Finally, for power functions based on P, where (39) applies, and a response
surface such as (40), after a log, transformation, is assumed, then [see Cox (1970,
ch. 6)], noting that the Jacobian of the mapping from P to Z( P) = ln( P/(1 - P))
is l/P(l-    P):

      J(qwqP))                - Jwm,                                              (49)
                               (I

where J = (NP(l - P))‘12 (which is estimable from the simulation). Thus, as
remarked at the start of this section, when the relevant Gi( .) is known, each
response surface can be formulated to have an anticipated residual variance of
unity.
962                                                                       D. F. Hendo

5.3.   Investigating validity

In addition to the points noted above, each of the conjectured response surfaces
entails also that yo, = 1 in order to reproduce Gi( a) in large samples and this is
potentially testable from the regression estimates. Also, under the null that the
error variance (u*) should be unity, the residual sum of squares will be distrib-
uted as x*(r,O) for r degrees of freedom in the relevant regression, since for
correct specifications, r&*/u * - x*(r,O). Confidence limits for a* for various r
have been tabulated [see, for example, Croxton, Cowden and Klein (1968, table
L)] but are easily calculated in any case.
   As with any regression analysis, the selected response surfaces can be tested by
a variety of Lagrange Multiplier based diagnostics (see, for example, Engle,
Chapter 13 in this Handbook) of which predictive tests are one of the more
important. If K experiments are conducted and K, used for selecting and
estimating the response surfaces, K - K, should be used to test the validity of the
results to ensure that some credibility beyond mere description attaches to the
finally chosen surrogates for G,( *) [see, for example, Chow (1960)].
    Inappropriate choices of Z-Z,(*) could induce either or both of autocorrelation
and heteroscedasticity in the residuals. These problems might be detectable
directly. The former can be tested by, for example, the Durbin-Watson test when
a suitable data ordering exists [as in Mizon and Hendry (1980) or Maasoumi and
Phillips (1982)]. A valuable diagnostic for the latter is the general test for
functional mis-specification in White (1980b) who also derives a robust estimator
of the estimated-parameter variances to support valid, if non-optimal, inference
despite heteroscedasticity; both of these statistics are reported below. Discrepan-
cies between the conventional and “robust” coefficient variances are indicative of
mis-specification and White (1980a) presents a test based on this notion. Further
 tests against specific alternatives can be derived following the procedures in Engle
 (1982).
    As noted above, the main advantages of estimated response surfaces over
tabulation are their ability to summarize large and non-memorizable quantities of
information in simple approximations which in practice do seem able to account
for the bulk of inter-experiment variation in simulation outcomes (especially for
inconsistent estimators) using formulae known to be correct for sufficiently large
values of T. A corresponding disadvantage is that the dependence of the ap-
proximation error on the invariants of the data generation process is unknown,
but in a well defined parameter space should be estimable for the purposes of
predicting outcomes at other points within the sampled set [i.e. for experiments
which could have been undertaken, but were not, as in Hendry and Harrison
(1974)]. Conversely, relative to analytical derivations, the advantages are the use
of less restrictive data generating processes than existing techniques can study
analytically as well as exploiting the falling relative price of capital to economise
Ch. 16: Monte Carlo E.xperimentaiion                                             963

on  scarce labour resources; whereas the disadvantages are the inherent inexacti-
tude of estimated response surfaces and the absence of a complete understanding
of the limitations of the experimentally determined numerical results. As analyti-
cal methods improve, the frontier at which simulation is substituted for analysis
will move outwards, but is unlikely to obviate any need for efficient Monte Carlo.
Equally, simulation based findings seems most helpful when they are tightly
circumscribed by analytical results, a point illustrated by the experimental evi-
dence reported in Section 6 [for further discussion, see Hendry (1982)].



6.      An application to a simple model



6. I.    Formulation of the experiments

To illustrate the application of the experimental approach, we consider the model
in (3)-(6) as this highlights the principles involved and indicates what can and
cannot be achieved by experimentation. The main objectives of the following
experiments-considered       as a substantive study-are to:
     (a) estimate and test response surfaces for qT1 = E(h), tiT2 = E(&-E(&))2,
fi = E( p( L?)“~) ( = ESE), and P = Pr(Z 2 3.84) basing these on the ideas
developed in Section 5;
     (b) investigate the efficiency gains from using the CVs o* for & and
O*2 = T-t&; _ T-‘x2(T,0)       for 6: [so that E(uz2) = u,’ and V(uz2) = 2uP/T];
 ’   (c) relate simulation estimates of wk to their asymptotic counterparts; and
     (d) evaluate the usefulness of asymptotic results as inter-experiment controls.
   To recapitulate, the main simulation estimators of the unknown #ri, etc. are
given by:



(I& are computed as for \t, but with a: replacing hi);

         $T2=(N-l)-1~(&i-$T1)2                  and
         J/r2 = Jr2 - I//;~ + T-‘(l-     a’),                                   (51)
        Ez=     N-‘C     ( P(iii)y2,                                            (52)
          Ce2= N-‘~6cf         and     c2
                                        t = cYe2
                                              - N-‘~IJ~~   + u,‘,               (53)
           P= N-‘XI;;,                                                          (54)
964                                                                        D. F. Hendry


where

                  if Z 2 3.84 (for testing H,: ff = 0),


   Direct estimation of the cumulative density function of &( !Pr(&)) was not an
objective of this set of experiments, although it is obviously a legitimate objective
in general [see, for example, Orcutt and Winokur (1969)J.
   The sampling variances of the various simulation estimators were also esti-
mated by the following formulae:

       p( $rr) = N-l$rz      and                                                  (55)

       ~(~,,)=N-~((N-l)-1~(~,-af-~r1+“)2),


from which the efficiency gain due to using (Y*is given by EG = v( 4,,)/      v( G,,).
Next:

       q4,2> = N-l@,- $42). wherep,=(N-1)-1X(&-&r-,)4,                            (56)

       P(ESE)=N-~((N-~)-‘E(~~(&)“~-ESE)~),                                        (57)

                                                                                  (58)
and




with the efficiency gain from a,*’ being SEG = v( $)/v( 5:). Finally, v(j)
follows from (39) but following Cox (1970, ch. 6) and Mizon and Hendry (1980)
(49) is formulated as:



when




for [ = (2N))’ and_L( P) is similar but replaces the second term by ln( P/(1 - P)).
Observations with P = 0 or 1 are automatically deleted from the regression. We
Ch. 16: Monte Curlo Experimeniution                                                           965

also deleted those for which (1 - P*) < lo- 5, for P* in (42) when using (40) to
approximate the unknown L(P) in (60).
   The properties of the experimental design are important for achieving the
objectives of the study, and “iterative” designs based on a pilot study followed by
intensive searches in regions of 8 where the relevant Gj( .) are least “well-behaved”
may be needed. For example, it is difficult to design a single experiment which is
“good” for estimating (say) both #ri( *) and P( -). Here, to “cover” the parameter
space, a full factorial design based on a = (0, f0.3, f0.6, kO.9) and T =
{10,20,30,40} was selected, yielding 28 experiments in all with u: = 1 and
N = 400 (so that P could be accurate to within 0.0025). It is important to note
that the parameter space is now { 1a 1I 0.9, u,’ = l} and that as q, = 0, X in (36) is
implicitly determined by \/Ta so that cp= Ta*/(l - a*). Six randomly chosen
experiments from the 28 were used for predictive testing.7
   Finally, first order autoregressive processes have been the subject of extensive
analysis and experimentation (see inter alia, Bartlett (1946), Hurwicz (1950)
Kendall (1954), White (1961), Shenton and Johnson (1965), Copas (1966) Orcutt
and Winokur (1969), Phillips (1977a) and Sawa (1978); also Kendall and Stuart
(1966, ch. 48) provide a convenient summary of many of the relevant analytical
results). Such known analytical results obviously “prejudice” the precise func-
tions chosen to characterise the G;(e), and where this has been an important
influence, it is noted below.


6.2.   Estimating    I!$& 1a, T)

Firstly, the CV a* yielded an average efficiency gain over distribution sampling of
6.4 for trivial extra computational cost. Also, for Ia I # 0, Ho: E( &) = a was
rejected in every experiment using $ri but on occasion was not for Ia I = 0.3 using
Jr,. The theoretical and simulation moments of a* matched well, checking the
validity of the random numbers used and correlation (&, a*) varied from 0.597 to
0.978 as (a, T) went from (-0.9,10) to (0.0,40). Thus, by T = 40, the asymptotic
theory worked fairly well for Ial I 0.6.
   Let T * = T(l - a*) denote the “effective sample size” [this concept is noted in
Sims (1974) and is based on the asymptotic approximations in Hendry (1979)],
then EG was described by:




                R*=0.93,        S=0.21,      ni(6)=1.6,      n2=1.1,                         (61)
  71 am grateful to Jan Podivinsky and Frank Srba for assistance in conducting and analysing these
experiments.
966                                                                     D. F. Hendry

where
   (. )= conventional standard errors,
    [ -I= heteroscedasticity-consistent standard errors [see White (1980b)],
      S = residual standard error,
q,(k)= heteroscedasticity/functional-form       m&-specification test based on RE
          in the auxiliary regression with k quadratic variables using the form:
          Ri(T- k - 1)/((1- Ri).k) for I regressors in, for example, (61), ap-
          proximately distributed as F(k,. T - k - I) under the null [see White
         (198041,
      q2=Chow (1960) test of parameter constancy, distributed as F(6,22- I)
         under the null. This is treated as a Lagrange Multiplier test, and so all
         regressions quoted are based on the 28 experiments.
   From (61), EG increases almost proportionately to T* (estimating separate
coefficients for In T and hr(1- a2) revealed these to be almost equal magnitude,
same sign). Consequently, in experiments with small T*, CVs like a* may not
yield useful efficiency gains, and conversely, large-T* is required for asymptotic
theory to “work well”.
   Next, the response surface estimates obtained for $,, and q,r were similar so
only the latter are reported. Using the simulation estimated standard errors from
(55) (denoted by Sl) yielded for the simplest bias function:




                      R2=0.97,     S=1.67,    ~~(1) =9.8,    q2 =0.4.          (62)

   While this accounts for 97% of the simulation variance in (& - cu)/Sl between
experiments, nr(1) rejects homoscedasticity, and the value of S is significantly in
excess of unity [27.S2 exceeds the 0.001 critical value of x2(27,0)]; this confirms
that the diagnostic tests can detect mis-specification. Adding the term a/T2
yields:

       (I& - a)/Sl = -


                      R2=0.985,    S=1.26,     qr(3)=1.3,    ~)~=0.8.         (63)

This is obviously a much better approximation (and is “close” to the theoretical
result to 0(T-2) of -2a(l/T    -2/T’)),  although S remains significantly larger
than unity at the 0.05 level.
Ch. 16: Monte    Carlo Experimentation                                                               961


   Very similar results were obtained on replacing Sl by ci = (T*. N.EG)-‘/2                        and
this is unsurprising given that:

      lnSl=-          0.96 lnJNT_-              0.58 lnEG-        1.3     /T+        1.0   a’/T*,

                     [::0o:i                  [k%{                [E1’           [%j

                  R2 = 0.991,         S = 0.048,     n,(S) = 1.1,        n2 = 1.5.                  (64)

Thus, while additional’ finite sample effects can be established, most of the
between-experiment variance in Sl is attributable to the asymptotic result [note
the dependence of EG on the other variables in (64) from (61); also these
equations together imply that SlapP O((NT*2)-'/2)as anticipated].
   Noting that T-' -2Tp2 = (T+2)-', an attempt was made to establish the
relevance of a3/T3 [based on Shenton and Johnson (1965)]:

      (~T1-a)/S1=              -    1 .84a/(T+2).Sl+          43 a3/T3.S1,

                                   [::oo:j                   ‘$

                               R2=0.989, S=1.09,             n1(2)=0.7,         q2 =0.9.            (65)

Since the experimental design actually induced an extremely high correlation
between successive odd powers of (Y,(65) seems a useful approximation to their
series expansion:


      E( 6   -   a) = -    ;;;l;;2; + 12a3+ 1@&+9;;5
                                             (T+5)13'

                       + 24(T+12)(T+10)(u7             + ... ,
                                    (T+13)[51

where T["]= T(T - 2). . . (T - 2n + 2). If a larger number of experiments had been
conducted, general response surfaces such as (65) might have been estimable
directly given (34). The results herein certainly suggest that it can be worthwhile
incorporating terms smaller than just O(T-').Finally, replacing Sl by t1 in (65)
yielded S = 1.20 and ~~(2) = 1.3, so the fit was poorer but not significantly bad,
and closely similar coefficient estimates resulted.
   Table 6.1 provides some illustrative comparisons of the various regression
predictions of biases together with both analytical results and the direct and CI/
simulation estimates, including one set of values for which experiments were not
conducted. Any of the results in (62)-(65) seems adequately accurate for practical
968                                                                                                D. F. Hendry

                                                   Table 6.1

        a     T       (62)     (63        (65)       (a)”        (b)         (4         &I          ST,
       0.6,   10     -0.092   -0.079     -0.083     -0.10      - 0.091     - 0.086    - 0.092     - 0.087
                                                                                       (0.013)     (0.007)
       0.9.   10     -0.139   -0.118     -0.107     -0.15      -0.119        -        - 0.102     -0.104
                                                                                       (0.011)     (0.008)
       0.6,   30     -0.031   - 0.034    ~ 0.034    - 0.038    ~ 0.037     - 0.036    - 0.038     - 0.040
                                                                                       (0.008)     (0.003)
       0.9,   30     -0.046   - 0.051    - 0.051    -0.056     - 0.053       -        ~ 0.049     - 0.052
                                                                                       (0.006)     (0.004)
       0.8,   10     -0.123   -0.105     -0.101     -0.133     -0.112      -0.105        -

        “(a) -2a/(     T + 2); (b) to 0( T- *)and (c) exact, both from Sawa (1978. Table la.).




purposes,           and the final numerical-analytical                       summary         is    given      by
E(&--a)=           -1.&x/(T+2)+43a3/T3.


6.3.     Estimating qTz(&)

Very similar estimates were produced by $,, and $rz, and since variances were
estimated only for the former, results are quoted just for these. Firstly, for fi4,
since SSD = &     :


       lnfi4=        3.8 lnSSD+          0.8 + 2.4 /T*,
                                        (0.2)  (0.3)
                   [:::j                [0.2]  [0.3]

                   R2=0.98,       S=O.18,          7)t(5)=1.1,          n2=0.2.                              (66)

  Thus, the approximation that pL4= 3 SSD4 has some support (note that In 3 =
1.09).
   However, letting S2 = /m       from (56):




                              R2 = 0.80,      S = 0.25,        ~~(1) =l.O,           Q = 0.8.

Consequently,          the asymptotic approximation              that V($,,)         = 2u:/N      is not very
Ch. 16: Monte Carlo Experimentation                                                                  969

accurate, and this is reflected in the regressions based on (44b):

       t21n( +,,/a,Z)     = - (h.i)[,/T+             (i.$t$‘/T*      - $3)~2a2/Tz(1-        a2),

                                   [0:3]             [0:6]                 PI
                           R’z0.94,         Sc1.26,          91(6)=1.5,         ~2~0.6,   [2=&P?.
                                                                                                    (68)

Although this regression accounts for much of the variance in $,, around u,’ (and
almost all of the variance in GT2 itself), S is significantly in excess of unity.
Replacing m       by &S2 reduced the response surface error variance to unity,
but induced so much collinearity between the transformed regressors that sensible
individual coefficient estimates could not be obtained. In no case was the
unrestricted coefficient of In u,’ significantly different from unity.
   By way of comparison, Kendall and Stuart (1966, ch. 48) quote an analytical
result which suggests (to 0( T2)):

       ln($,,/u,2)      - -2/T+8a2/T*            -48a2/T*T*.                                        (69)

Thus, both (68) and (69) reveal that \c/r2 = u,’ only for large T *, and the former
yields:




6.4.    Estimating      VT ( S)


The response surface based on (47) yielded:


       [sin                       0.09 t,(lnu,)/T+



                          R2=0.64,          S=1.86,          n,(3) =7.9,        ~*=1.2,             (70)

where 5s = u,/SSE. While this explained 99.996% of the variability in <,ln(ESE)
and the unrestricted coefficient of In u, was 1.002(0.002), both S and nr( .) reject
the null of correct functional form. Additional terms rectify this, but at the cost of
970                                                                                      D. F. Hendty

a cumbersome regression:




                         R*=0.90,           S=1.05,      ~)t(13)=0.6,         n2=1.6.           (71)

Variables in common with (68) have the same signs of coefficients and (when
expressed in terms of estimated variances) similar magnitudes.
  The heteroscedasticity correction in (48) was reasonably accurate and re-
gression yielded:
       lnSSE=-      1.4      lnT+     0.39 ln(l+Ta’)-               3.16 ,

                   [::Ej              fE{                       f:::;j
                 R2 = 0.987,        S = 0.087,        q,(5) =1.7,        n2 = 0.9.              (72)
(In@ = 3.0), but no response surfaces for ESE were based on the approximation
that fi . T- SSE = (T-l + (Y*)‘.~as suggested by (72).


6.5.    Estimating wef la, T)

All estimates based on $* had very small standard errors and were close to u,’ = 1.
The average efficiency gain, SEC, was over 25 (i.e. equivalent to the accuracy of
10,000 random replications) and was described by:

       lnm       = 0.19 + 0.46 lnT,
                   (0.10) (0.03)
                   [0.09] [0.03]
                  R*=0.89,          S=O.O86,          q1(2)=0.1,          q2=0.4,               (73)
so that SEG = T.
  Moreover, using (58):

       ln{m=         -      0.1 - 0.97 In{NT,
                           (0.1)  (0.03)
                           [O.l]  [0.03]
                    R* = 0.977,
                             S= 0.041, ~~(2) = 3.3,                          q2 = 0.5,          (74)
so that @‘(6*)= 2/NT and from (73), v(C:) = 2/NT*.
Ch. 16: Monte   Carlo Experimentation                                                          911


   These results are again consistent with CV theory, although nt( -) may indicate
an inappropriate functional form; note that a more stringent check of the
simulation could have been conducted by testing the within-experiment distribu-
tion of T-u:* against x*(T,O).


6.6.    Estimating P(Z(a, T,6)

The experimental design was such that $’ = 1 occurred in 13 experiments out of
the 28, but unlike the results in Mizon and Hendry (1980), there was no
systematic tendency for B to underestimate P* when P* > Q (consistent with their
conjecture that this was an artifact due to reusing the random numbers). A simple
response surface based on (60) yielded:

       (L*(P)-L(P*))=              $j#@T*,

                                   PI
                                   R* = 0.73,    S =1.57,       ~~(1) = 0.01,   n2(4,10) = 0.5,
                                                                                              (75)
where 5 = [N&l - P)/(l - IV-‘)]‘/*. The terms T-’ and L( P*)/T were insig-
nificant if added to (75), and the unrestricted coefficient of L(P*) was not
significantly different from unity. When a = 0, the rejection frequencies were:

          T           10                20             30              40            mean,
          P            0.053             0.058          0.048           0.045        0.051,

all of which are close to the nominal significance level of 6 = 0.05. Moreover,
(1 + I#J)accounted for over 99.9% of the between-experiment variance in the mean
of Z, consistent with E(x*(l, cp)) = 1 + +. Thus, although S in (75) is significantly
in excess of unity, a reasonable summary power function is:




   Finally, the rejection frequency i), for the true value of (Y[i.e. (Ye= (Yin (41) so
$I = 0] was investigated:

       Fo= 0.050 + 0.024 /T*,
           (0.003) (0.016)
           [0.003] [0.008]
           R*=0.08,          S=O.Oll,        &)=1.0,        n2=0.8,                           (77)
912                                                                        D. F. Hendry


so  that (Y,,= (r is indeed rejected around 5% of the time at all values of
a(\lP(l - P)/N    = 0.011 when P = 0.05, N = 400). Overall, the results in (61)-(77)
highlight what Monte Carlo can achieve (e.g. simple numerical-analytical for-
mulae) and what it cannot (e.g. provide little insight into what happens as (Y+ 1;
compare Phillips (1977a)). It is not a complete substitute for analysis, but may be
a helpful partner, and is often a cost-effective solution which need not entail high
consumption costs if adequate summarization is provided.




7.     Some loose ends


7.1.     Non-existent moments

There are many “respectable” estimators which have no finite moments in small
samples (e.g. LIML and FIML) yet which have been investigated by Monte Carlo
methods. Possible approaches to this “ tail area” problem are:
      (a) pre-define an “acceptable” region for B and discard outliers;
      (b) use non-parametric statistics [like medians, etc.; see Summers (1965)];
      (c) investigate the existence of moments by varying N (and possibly 0);
      (d) report only #r(e); and
      (e) only derive the CV, and do not do the simulation.
   Sargan (1982) has investigated the outcome which is likely to occur if conven-
tional simulation means are used to estimate non-existent moments (with and
without CVs) and found that N could be chosen as a function of T such that the
Monte Carlo provided reasonable estimates of the Nagar approximations to the
moments (which in turn help in understanding the Edgeworth Approximation to
the distribution function). Even so, some truncation bounds for deleting outliers
seemed better than using none, supporting (a); no bounds could produce rather
unreliable results, and non-parametric statistics (b) in effect operate by “dis-
counting” discrepant results. The natural alternative is direct estimation of &.( 0).
   In low-dimensional problems, numerical tabulation of qr.( .) for very large N
can be useful [see Orcutt and Winokur (1969)] but otherwise, the function has to
be estimated. Sargan (1976) considers using CVs to improve the accuracy of
estimating qr( .), but this requires that the exact distribution function of the CV
is known, and Basmann et al. (1974) test various hypotheses about forms of qr( .)
in specific models. Improved simulation methods in this area would be of great
value, but at present it is rarely feasible to attempt estimation of distribution
functions which depend on many parameters.
                                                                                 913
Ch. 16: Monte   Curlo Experimentation


7.2,   Evaluating integrals

CYs for test powers would be a useful advance [closely related to estimating
er( .)I. These can be derived in certain static models, but their use depends on
knowing qr(fl:),    not just its moments, and so test-power CVs are difficult to
obtain in dynamic models. Experiments in which significance levels rather than
local alternatives were changed also would be interesting and helpful in under-
standing the behaviour of tests.
   Returning to the example in equations (l), (2) and (ll), some cross-fertilization
of ideas may prove fruitful. Kloek and van Dijk (1978) discuss Monte Carlo
integration for economic estimation, and demonstrate its feasibility using impor-
tance functions. Also, Van Dijk and Kloek (1980) discuss the choice of impor-
tance function and implement nine-dimensional integration. However, on the one
hand, p(v) also might be of use in estimating integrals corresponding to test
powers even though the density function is unknown (e.g. by generating 0’s
which are exactly distributed as the importance function which in turn is chosen
to be the asymptotic distribution of the test). On the other hand, naive estimators
such as E in (11) surely could be improved upon by using some functions of the
 {v,} as a Ck’: e.g. calculating ii from u and f({ u;}) so as to correct for chance
departures of ij from E(v) = /,hxp( x)d x which will in general be known (although
this ad hoc suggestion may not guarantee efficiency gains).
   A further problem which is equivalent to computing an integral is estimating
the mean stochastic simulation path of a non-linear econometric system. Here,
antithetic variates switching {a,} - ZN( 0, Z ) to { - E, } and creating w, = KE,-
ZN(0, 2) from 2 = KK' seem to be of use. The efficiency gains depend on the
extent of the non-linearity and the relative “explanatory” power of the strongly
exogenous variables compared to the endogenous dynamics, varying from infinite
efficiency for linear, static systems to zero for closed, dynamic models with
squared errors [see Fair, Chapter 33 in this Handbook, and Mariano and Brown
(1983); and for an application, Calzolari (1979)].
   Much work remains to be done on determining factors which influence such
simulation efficiency (e.g. dependence of the data on such features as the sign
and/or scale of the errors) and hence on deriving appropriate antithetic selec-
tions. Recently, Calzolari and Sterbenz (1981) have derived control variates from
local linearization of non-linear systems and find very large efficiency gains over
straightforward random replications for the Klein-Goldberger model.
   Manifestly, other applications are legion since very many problems in econo-
metrics are equivalent to computing integrals which in turn can be estimated by
averages, and hence are susceptible to efficiency improvements.
   And notwithstanding all the above arguments, when only a couple of points in
0 X Yare believed to be of empirical relevance, naive simulation “pilot” studies
974                                                                                     D. E Hendry

remain an easy and inexpensive means of learning about finite sample properties
in complicated models or methods.




References
Bartlett, M. S. (1946) “On the Theoretical Specification and Sampling Properties of Autocorrelated
  Time Series”, Journal of the Royal Sfatistical Society, B, 8, 27-41.
Basmann, R. L., D. H. Richardson and R. J. Rohr (1974) “Finite Sample Distributions Associated
  with Stochastic Difference Equations-Some      Experimental Evidence”, Econometrica, 42. 825-840.
Breusch, T. S. (1980) “Useful Invariance Results for Generalised Regression Models”, Journal of
  Econometrics, 13, 321-340.
Calzolari, G. (1979) “Antithetic Variates to Estimate the Simulation Bias in Non-linear Models”,
  Economics Letters, 4, 323-328.
Calzolari, G. and F. Sterbenz (1981) “Efficient Computation of Reduced Form Variances in Nonlinear
  Econometric Models”, IBM, Pisa, mimeo.
Campos, J. (1980) “The Form of Response Surface for a Simulation Standard Error in Monte Carlo
  Studies”, unpublished paper, London School of Economics.
Chow, G. C. (1960) “Tests of Equality Between Sets of Coefficients in Two Linear Regressions”,
  Econometrica, 28, 591-605.
Cochran, W. G. and G. M. Cox (1957) Experimental Designs. New York: John Wiley and Sons.
Conlisk, J. (1974) “Optimal Response Surface Design in Monte Carlo Sampling Experiments”, Anna/s
  of Economic and Social Measurement, 3,463-473.
Copas, J. B. (1966) “Monte Carlo Results for Estimation in a Stable Markov Time Series”, Journal of
  the Royal Statistical Society, A, 129, 110-116.
Cox, D. R. (1970) Analysis of Binary Data. London: Chapman and Hall.
Cramer, H. (1946) Mathematical Methods of Statistics. Uppsala: Almqvist and Wicksells.
Croxton, F. E., D. J. Cowden and S. Klein (1968) Applied General Statistics. London: Sir Isaac Pitman
  and Sons Ltd., 3rd edn.
Davis, A. W. (1971) “Percentile Approximations for a Class of Likelihood Ration Criteria”, Bio-
  metrika, 58, 349-356.
Engle, R. F. (1982) “A General Approach to Lagrange Multiplier Model Diagnostics”, Journal of
  Econometrics, 20, 83-104.
Evans, G. B. A. and N. E. Savin (1981) “Testing for Unit Roots: I”, Econometrica, 49, 753-779.
Evans, G. B. A. and N. E. Savin (1982) “Conflict Among the Criteria Revisited; the W, LR and LM
  Tests”, Econometrica, 50, 131-748.
Goldberger, A. S. (1964) Econometric Theory. New York: John Wiley and Sons.
Golder, E. R. (1976) “Algorithm AS98: The Spectral Test for the Evaluation of Congruential
  Pseudo-Random Generators”, Applied Statistics, 25, 173-180.
Goldfeld, S. M. and R. E. Quandt (1972) Nonlinear Methods in Econometrics. Amsterdam: North-Hol-
  land.
Gross, A. M. (1973) “A Monte Carlo Swindle for Estimators of Location”, Journal of the Royal
  Slatisfical Society, C, 22, 347-353.
Hammersley, J. M. and D. C. Handscomb (1964) Monre Car/o Methods. London: Metheun.
Hendry, D. F. (1973) “On Asymptotic Theory and Finite Sample Experiments”, Economica, 160,
  210-217.
Hendry, D. F. (1976) “The Structure of Simultaneous Equations Estimators”, Journal of Econometrics,
  4, 51-88.
Hendry, D. F. (1977) “On the Time Series Approach to Econometric Model Building”, in: C. A. Sims,
  Ed., New Methd in Business Cycle Research. Federal Reserve Bank of Minneapolis, 183-208.
Hendry. D. F. (1979) “The Behaviour of Inconsistent Instrumental Variables Estimators in Dynamic
  Systems with Autocorrelated Errors”, Journal of Econometrics, 9, 295-314.
Ch. 16: Monte    Carlo Experimentation                                                              915


Hen&y,   D. F. (1982)    “A Reply to Professors Maasoumi and Phillips”, Journal of Econometrics,     19,
  203-213.
Hendry, D. F. and R. W. Harrison (1974) “Monte Carlo Methodology and the Finite Sample
  Behaviour of Ordinary and Two-Stage Least Squares”, Journal of Econometrics, 2, 151-174.
Hendry, D. F. and F. Srba (1977) “The Properties of Autoregressive Instrumental Variables
  Estimators in Dynamic Systems”, Econometrica, 45, 969-990.
Hendry, D. F. and P. K. Trivedi (1972) “Maximum Likelihood Estimation of Difference Equations
  with Moving Average Errors: A Simulation Study”, The Review of Economic Studies, 39, 117-145.
Hurwicz, L. (1950) “Least Squares Bias in Time Series”, in: T. C. Koopmans (Ed.): Statistical
  Inference in Dynamic Economic Models. Cowles Commission Monograph 10; New York: John Wiley
  and Sons, ch. 15.
Hylleberg, S. (1977) “A Comparative Study of Finite Sample Properties of Band Spectrum Regression
  Estimators”, Journal of Econometrics, 5, 167-182.
Johnson, N. L. and S. Katz (1970) Continuous Univariate Distributions-l;    Distributions in Stutistics.
  New York: John Wiley and Sons.
Kakwani, N. C. (1967) “The Unbiasedness of Zellner’s Seemingly Unrelated Regression Equations
  Estimator”, Journal of the American Statistical Association, 62, 141-142.
Kendall, M. G. (1954) “Note on Bias in the Estimation of Autocorrelation”, Biometrika, 41,403~404.
Kendall, M. G. and A. Stuart (1958, 1961, 1966) The Advanced Theory of Statistics. Vols. 1-3. New
  York: Charles Griffen.
Kennedy. W. J. Jr. and J. E. Gentle (1980) Statistical Computing. New York: Marcel Dekker, Inc.
King, M. L. (1980) “Small Sample Properties of Econometric Estimators and Tests Assuming
  Ellinticallv Svmmetric Disturbances”. Paner nresented to the Fourth World Congress of the
  Econometric Society, France.                  - _
King, M. L. “A Note on the Burroughs B6700 Pseudo-Random Number Generator”, New Zealund
  Statisticion (forthcoming).
Kleijnen, J. P. C. (1974) Statistical Techniques in Simulation. New York: Marcel Dekker Inc.
Kloek, T. and H. K. Van Dijk (1978) “Bayesian Estimates of Equation System Parameters: An
  Application of Integration by Monte Carlo”, Econometrica, 46, 1-19.
Maasoumi, E. and P. C. B. Phillips (1982) “On the Behaviour of Inconsistent Instrumental Variable
  Estimators”, Journal of Econometrics, 19, 183-201.
Mariano, R. S. (1982) “Analytical Small-Sample Distribution Theory in Econometrics: The Simulta-
  neous-Equations Case”, International     Economic Review, 23, 503-533.
Mariano, R. S. and B. W. Brown (1983) “Asymptotic Behaviour of Predictors in a Nonlinear
  Simultaneous System”, International     Economic Review, 24, 523-536.
Metropolis, N. and S. Ulam (1949) “The Monte Carlo Method”, Journal of the American Statistical
  Association,   44, 335-341.
M&hail, W. M. (1972) “Simulating the Small Sample Properties of Econometric Estimators”,        Journal
   of the American   Statistical   Association,   67, 620-624.
Mikhail, W. M. (1975) “A Comparative Monte Carlo Study of the Properties of Econometric
  Estimators”, Journal of the American Statistical Association, IO, 91-104.
Mizon, G. E. and D. F. Hendty (1980) “An Empirical Application and Monte Carlo Analvsis of Tests
  of Dynamic Specification”, Review of Economic Studies, 47, 21-45.
Myers, R. H. and S. J. Lahoda (1975) “A Generalisation of the Response Surface Mean Square Error
  Criterion with a Specific Application to the Slope”, Technometrics, 17, 481-486.
Nagar, A. L. (1959) “The Bias and Moment Matrix of the General k-Class Estimators of the
  Parameters in Simultaneous Eouations”. Econometrica. 27. 575-595.
Naylor, T. H. (1971) Computer Simulation'Experiments with models of Economic Systems. New York:
  John Wiley and Sons, 1971.
Neave, H. R. (1973) “On Using the Box-Miiller Transformation with Multiplicative Congruential
  Pseudo-Random Number Generators”, Applied Statistics, 22, 92-97.
Nicholls, D. F., A. R. Pagan and R. D. Terre11 (1975) “The Estimation and Use of Models with
  Moving Average Disturbance Terms: A Survey”, International       Economic Review, 16, 113-134.
O’Brien, R. J. (1979) “The Sensitivity of Econometric Estimators to Data Perturbations: II. Instru-
  mental Variables”, Unpublished Paper, Southampton University.
916                                                                                       D. F. Hendty


Orcutt, G. H. and D. Cochrane (1949) “A Sampling Study of the Merits of Autoregressive and
  Reduced Form Transformations in Regression Analysis”, Journal of the American Statistical
  Association,   44, 356-312.
Orcutt, G. H. and H. S. Winokur (1969) “First Order Autoregression: Inference Estimation and
  Prediction”, Econometrica, 31, 1-14.
Phillips, P. C. B. (1977) “Approximations to Some Finite Sample Distributions Associated with a First
  Order Stochastic Difference Equation”, Econometrica, 45, 463-485.
Phillips, P. C. B. (1977) “A General Theorem in the Theory of Asymptotic Expansions as Approxima-
  tions to Finite Sample Distributions of Econometric Estimators”, Econometrica, 45, 1517-1534.
Phillips, P. C. B. (1980) “Finite Sample Theory and the Distributions of Alternative Estimators of the
  Marginal Propensity to Consume”, The Review of Economic Studies, 47, 183-224.
Rao, C. R. (1952) Adnanced Statistical Methods in Biometric Research. New York: John Wiley and
  Sons.
Sargan, J. D. (1976) “Econometric Estimators and the Edgeworth Approximation”, Econometrica, 44,
  421-448.
Sargan, J. D. (1978) “ll~e Estimation of Edgeworth Approximations by Monte Carlo Methods”,
  Unpublished Paper, London School of Economics.
Sargan, J. D. (1982) “On Monte Carlo Estimates of Moments That are Infinite”, Adcunces in
  Econometrics, 1, 261-299.
Sawa, T. (1978) “The Exact Moments of the Least Squares Estimator for the Autoregressive Model”,
  Journul    of Econometrics,   8, 159-172.
Shenton, L. R. and W. L. Johnson (1965) “Moments of a Serial Correlation Coefficient”, Journul of
  the Royal Statistical Society, B, 27, 308-320.
Sims, C. A. (1974) “Distributed Lags”, in: M. D. Intriligator and D. A. Kendrick, eds., Frontiers of
  Quantitative  Economics, Vol. II. Amsterdam: North-Holland, ch. 5.
Smith. V. K. (1973) Monte Carlo Methods. London: D. C. Heath.
Sobof, I. M. (1974) The Monte Carlo Method. Popular Lectures in Mathematics, London: University
  of Chicago Press, Ltd.
Sowey, E. R. (1972) “A Chronological and Classified Bibliography on Random Number Generation
  and Testing”, International    Statisticul Reoiew, 40, 355-371.
Sowey, E. R. (1973) “A Classified Bibliography of Monte Carlo Studies in Econometrics”, Journul of
  Econometrics,   1, 371-395.
Student (1908) “On the Probable Error of a Mean”, Biometriku, 6, l-25.
Summers, R. (1965) “A Capital Intensive Approach to the Small Sample Properties of Various
  Simultaneous Equations Estimators”, Econometricu, 33, 1-41.
Sylwestrowicz, J. D. (1981) “Applications of the ICL Distributed Array Processor in Econometric
  Computations”, ICL Technical Journal, 280-286.
Teichroew, D. (1965) “A History of Distribution Sampling Prior to the Era of the Computer and Its
  Relevance to Simulation”, Journal of the American Stutisticul Association, 60, 27-49.
Tocher, K. D. (1963) The Art of Simulation. London: English Universities Press.
Tse. Y. K. (1979)
              .     I
                     “Finite Samnle Annroximations to the Distribution of the Autoreeressive Coeffi-
                                    L         &.



  cients in a First Order Stochastic Difference Equation with Exogenous Variables”,u Unpublished
  Paner. London School of Economics.
Van bijk, H. K. and T. Kloek (1980) “Further Experience in Bayesian Analysis using Monte Carlo
  Integration”, Journal of Econometrics, 14. 307-328.
White,-H. (1980) “Using Least Squares to Approximate Unknown Regression Functions”, Interna-
  tional Economic Review, 21, 149-170.
White, H. (1980) “A Heteroskedastic-Consistent Covariance Matrix Estimator and a Direct Test for
  Heteroskedasticity”, Econometrica, 48, 817-838.
White, J. S. (1961) “Asymptotic Expansions for the Mean and Variance of the Serial Correlation
  Coefficient”, Biometrika, 48, 85-95.
Yule, G. U. (1926) “Why Do We Sometimes Get Nonsense-Correlations Between Time-Series?-A
  Study in Sampling and the Nature of Time-Series”, Journal of the Royal Stutistical Society, 89, l-64.



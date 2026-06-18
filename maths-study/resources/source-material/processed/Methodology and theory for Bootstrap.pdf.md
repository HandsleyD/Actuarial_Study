---
normalized_id: shared-pdf-reference-methodology-and-theory-for-bootstrap
exam_code: SHARED
material_scope: methodology and theory for bootstrap.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Methodology and theory for Bootstrap.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-methodology-and-theory-for-bootstrap

2342                                                                                  P. Hall




Abstract

A brief account is given of the methodology             and theory for the bootstrap.
Methodology       is developed in the context of the “equation” approach, which allows
attention to be focussed on specific criteria for excellence, such as coverage error of
a confidence interval or expected value of a bias-corrected    estimator. This approach
utilizes a definition of the bootstrap in which the key component is replacing a true
distribution   function by its empirical estimator. Our theory is Edgeworth expansion
based, and is aimed specifically at elucidating properties of different methods for
constructing     bootstrap    confidence intervals in a variety of settings. The reader
interested   in more detail than can be provided here is referred to the recent
monograph      of Hall (1992).



1.     Introduction

A broad interpretation    of bootstrap     methods argues that they are defined by
replacing an unknown distribution      function, F, by its empirical estimator, p, in a
functional form for an unknown       quantity of interest. From this standpoint,    the
individual who first suggested that a population    mean,


       p =       xdF(x),
             s

could be estimated         by the sample mean,


       x = xdF(x),
             s

was using the bootstrap. We tend to favour this definition, although we appreciate
that there are alternative views.
    Perhaps the most common alternative         is to confer the name “bootstrap”         on
procedures that use Monte Carlo methods to effect a numerical approximation.
While we see that this does have its merits, we would argue against it on two
grounds.     First, it is sometimes  convenient    to draw a distinction      between the
essentially statistical argument that leads to the “substitution”    or “plug-in” method
described in the previous paragraph, and the essentially numerical argument that
employs a Monte Carlo approximation           to calculate a functional    of F^. There do
exist statistical procedures which marry the numerical simulation           and statistical
estimation     into one operation,  where the simulation     is regarded as primarily a
statistical feature. Monte Carlo testing is one such procedure;          see for example
Ch. 39: Methodoioyy and Theoryfor the Bootstrap                                                     2343


 Barnard (1963), Hope (I 968) and Marriott (1979). Our definition of the bootstrap
would not regard Monte Carlo testing as a bootstrap                      procedure. That may be
 seen as either an advantage or a disadvantage,             depending on one’s view.
    A second objection that one may have to defining the “bootstrap” strictly in terms
 of whether or not Monte Carlo methods are employed, is that the method of
 numerical computation          becomes intrinsic to the definition. TO cite an extreme case,
 one would not usually think of using Monte Carlo methods to compute a sample
 mean or variance, but nevertheless those quantities might reasonably be regarded
 as bootstrap estimators of the population            mean and variance, respectively. In a less
 obvious instance, estimators           of bootstrap     distribution     functions,    which would
 usually be candidates for approximation             by Monte Carlo methods, may sometimes
 be computed most effectively by exact, non-Monte                 Carlo methods. See for example
 Fisher and Hall (1991). In other settings, saddlepoint                methods provide excellent
 alternatives    to simulation;    see Davison and Hinkley (1988) and Reid (1988). Does
 a technique stop being a bootstrap method as soon as non-Monte                       Carlo methods
 are employed? To argue that it does seems unnecessarily                pedantic, but to deny that
 it does would cause some problems for a bootstrap definition based on the notion
 of simulation.
    The name “bootstrap” was introduced by Efron (1979), and it is appropriate                      here
 to emphasize the fundamental           contributions    that he made. As Efron was careful to
 point out, bootstrap methods (in the sense of replacing F by F) had been around
for many years before his seminal paper. But he was perhaps the first to perceive
 the enormous breadth of this class of methods. He saw too that the power of modern
computing machinery could be harnessed to allow functionals of F^to be computed
in very diverse circumstances.            The combination          of these two observations           is
extremely powerful, and its ultimate effect on Statistics will be revolutionary.
Necessarily, these two observations            go together; the vast range of applications            of
bootstrap methods would not be possible without a facility for extremely rapid
simulation. However, that fact does not imply that bootstrap methods are restricted
to situations where simulation is employed for calculation.
    Statistical scientists who thought along lines similar to Efron include Hartigan
(1969, 1971), who used resampled sub-samples                    to construct     point and interval
estimators,     and who stressed connections            with Mahalanobis’          “interpenetrating
samples” and the jackknife of Quenouille (1949, 1956) and Tukey (1958); and Simon
(1969, Chapters 23-25), who described a variety of Monte Carlo methods.
    Let us accept, for the sake of argument, that bootstrap methods are defined by
the “replace F by P’ rule, described above. Two challenges immediately emerge in
response to this definition. First, we must determine how to “focus” this concept,
SO as to make the bootstrap          responsive to statistical demands. That is, how do we
decide which functionals of F should be estimated? This requires a “principle” that
enables US to implement bootstrap methods in a range of circumstances.                    The second
challenge is that of calculating the values of those functionals in a practical setting.
The latter problem may be solved partly by providing simulation methods or related
2344                                                                                          P.Hall


devices, such as saddlepoint          arguments,     for numerical     approximation.          Space
limitations mean that a thorough account of these techniques is beyond the scope
of this chapter. However, a detailed account of efficient methods of bootstrap
simulation may be found in Appendix II of Hall (1992). A key part of the answer to
the first question is the development        of theory describing the relative performance
of different forms of the bootstrap, and that issue will be addressed at some length
here.
   Our answer to the first question is provided in Section 2, where we describe an
“equation approach” to focussing attention             on specific statistical questions. This
technique was discussed in more detail by Hall and Martin (1988), Martin (1989)
and Hall (1992, Chapter 1). It leads naturally              to bootstrap      iteration,    which is
discussed in Section 3. Section 4 presents theory that enables comparisons                      to be
made of different bootstrap approaches to inference about distributions.                  The reader
is referred to Hinkley (1988) and DiCiccio and Roman0 (1988) for excellent reviews
of bootstrap methods.
   Our discussion is necessarily kept brief and is essentially an abbreviated                form of
an account that may be found in Hall (1992). In undertaking                that abbreviation       we
have omitted discussion of a variety of different approaches                to the bootstrap. In
particular, we do not discuss various forms of bias correction, not because we do
not recommend it but because space does not permit an adequate survey. We readily
concede that the restricted account of bootstrap methods and theory presented here
is in need of a degree of bias correction itself!
   We do not address in any detail the bootstrap for dependent data, but pause here
to outline the main issues. There are two main approaches                  to implementing        the
bootstrap in dependent settings. The first is to model the dependent process as one
that is driven by independent       and identically distributed      disturbances        - examples
include autoregressions      and moving averages. We describe briefly here a technique
which may be used when no parametric                    assumptions      are made about the
distribution   of the disturbances.     First estimate the parameters          of the model, and
calculate the residuals (i.e. the estimated values of the independent                disturbances).
Then run the process over and over again, by Monte Carlo simulation,                             with
parameter values set equal to their estimated values and with the bootstrapped
independent     disturbances    obtained by resampling         randomly,       with replacement,
from the set of residuals. Each resampled process should be of the same length as
the original one, and bootstrap inference may be conducted by averaging over the
independent      Monte Carlo replications.    Bose (1988) addresses the efficacy of this
procedure in the context of autoregressive      models, and derives results that may be
viewed as analogues (in the case of autoregressive         processes) of some of those
discussed later in this chapter for independent     data.
   If the distribution  of disturbances  is assumed known then, rather than estimate
residuals and resample with replacement from those, the parameters of the assumed
distribution    may be estimated. The bootstrap disturbances     may now be derived by
resampling from the hypothesized distribution,       with parameters estimated.
Ch. 39: Methodology   and Throryfir   the Bootstrup                                        2345


   The major other way of bootstrapping        dependent processes is to divide the data
sequence into blocks, and resample the blocks rather than individual data values.
This approach has application      in spatial as well as “linear” or time series contexts,
and indeed was apparently first suggested for spatial data; see Hall (1985). Blocking
methods may involve either non-overlapping         blocks, as in the technique treated by
Carlstein (1986), or overlapping       blocks, as proposed      by Kiinsch (1989). (Both
methods were considered for spatial data by Hall (1985)) In sheer asymptotic terms
Kiinsch’s method has advantages         over Carlstein’s, but those advantages     are not
always apparent in practice. This matter has been addressed by Hall and Horowitz
(1993) in the context of estimating bias or variance, and there the matter of optimal
block width has been treated. The issue of distribution         estimation  using blocking
methods has been discussed by Gotze and Kiinsch (1990), Lahiri (1991, 1992) and
Davison and Hall (1993).



2.   A formal definition of the bootstrap principle

Much of statistical inference involves describing the relationship between a sample
and the population from which the sample was drawn. Formally, given a functional
f, from a class (f,:t~Y->, we wish to determine that value t, of r that solves an
equation such as

     W(Fcl?FJlFo) = 0,                                                                     (2.1)

where F = F, denotes the population           distribution  function and F = F, is the
distribution  function “of the sample”. An explicit definition of F, will be given
shortly. Conditioning     on F, in (2.1) serves to stress that the expectation  is taken
with respect to the distribution  F,. We call (2.1) the population equation because we
need properties of the population     if we are to solve this equation exactly.
   For example, let 8, = d(F,) denote a true parameter value, such as the rth power
of a mean,




Let e= B(F,) be our bootstrap           estimator     of 8,, such as the rth power of a sample
mean,




where 3 = F, is the empirical distribution function of the sample from which _? is
computed. Correcting gadditively for bias is equivalent to finding that value 1, that
2346                                                                                         P.Hall


solves (2.1) when

     fr(F,, Fl) = v-1) - W,) + t.                                                              (2.2)

Our bias-corrected estimator would be 8+ t,. On the other hand, to construct                      a
symmetric, 95% confidence interval for 8, we would solve (2.1) when


     jl(F,,   F,) = Z{B(F,) - t d B(F,) < B(F,) + t} - 0.95,                                   (2.3)

where the indicator function Z(&) is defined to equal 1 if event 6 holds and 0
otherwise. The confidence interval is (6 - to, 6 + to), where 8 = B(F,).
   To obtain an approximate    solution of the population      equation (2.1) we argue as
follows. Let F, denote the distribution       function of a sample drawn from F,
(conditional on F,). Replace the pair (F,, F,) in (1.1) by (F,, F,), thereby transforming
(2.1) to

                                                                                              (2.4)

We call this the sample equation because we know (or can find out) everything about
it once we know the sample distribution            function F,. In particular, its solution f,
is a function of the sample values.
    We call & and E{f,(F,, FJ F,} “the bootstrap estimators”                  of t, and E{f,(F,,
F,) 1F,}, respectively. They are obtained by replacing F0 by F, in formulae for to
and E{f,(F,, F,)I F,}. In the bias correction problem, where f, is given by (2.2), the
bootstrap version of our bias-corrected        estimator is I!+ &,. In the confidence interval
problem where (2.3) describes f,, our bootstrap confidence interval is (e - &,, 8 + f,).
The latter is commonly called a (symmetric) percentile-method                confidence interval
for 6,.
    The “bootstrap     principle” might be described in terms of this approach                    to
estimation of a population        equation.
    It is appropriate   now to give detailed definitions of F, and F,. There are two
approaches, suitable for nonparametric            and parametric problems respectively. In
both, inference is based on a sample X of n random (independent                   and identically
distributed) observations      of the population.    In the nonparametric       case, F, is simply
the empirical distribution       function of X; that is, the distribution         function of the
distribution    that assigns mass n-l to each point in X. The associated empirical
probability    measure assigns to a region B a value equal to the proportion                 of the
sample that lies within 2. Similarly, F, is the empirical distribution               function of a
sample drawn at random from the population                 with distribution    function F,; that
is, the empiric of a sample !Z* drawn randomly, with replacement,                   from 3. If we
denote the population by X0 then we have a nest of sampling operations: X is drawn
at random from X0 and !E* is drawn at random from X.
Ch. 39: Mrthodology        and Theoryfor     the Bootstrap                                       2341


   In the parametric case, F, is assumed completely known up to a finite vector i,
of unknown parameters. To indicate this dependence we write F, = F,*(,), an element
of a class {F,,,, k.~Aj of possible distributions. Let 1: be an estimator of I, computed
from J, often (but not necessarily) the maximum likelihood estimator. It will be a
function of sample values, so we may write it as h(X). Then F, = F,Q, the distribution
function obtained on replacing “true” parameter values by their sample estimates.
Let X* denote the sample drawn at random from the distribution            with distribution
function F,,, (not simply drawn from 3” with replacement),             and let fi* = A(F*)
denote the version of I computed for .Y* instead of .Y. Then F, = F,i*,.
   It is appropriate    now to discuss two examples that illustrate the bootstrap
principle.


Example 2.1.      Bias reduction

Here the function          f, is given by (2.2), and the sample equation    (2.4) assumes the form


     E{W,) - W,) + [IF,) = 0,
whose solution        is

     t = to= 8(F,) - E{O(F,)IF,}.

The bootstrap     bias-reduced             estimator    is thus


     6, = @+ t*,,= 8(F,) + 2, = 28(F,) - E{O(F,)IF,}.                                           (2.5)


Note that our basic estimator I!?= B(F,) is also a bootstrap          estimator since it is
obtained by substituting    F, for F, in the functional formula 8, = 8(F,).
   The expectation    E(B(F,)jF,}    may always be computed (or approximated)              by
Monte Carlo simulation,        as follows. Conditional        on F,, draw B resamples
{.Fz, 1 d b d B} independently    from the distribution    with distribution    function F,.
In the nonparametric     case, where F, is the empirical distribution        function of the
sample 3, let F,, denote the empirical distribution     function of .!!z. In the parametric
case, let iz = I’(%;) be that estimator of &, computed from resample Fz, and put
F,, = Fci*,. Define 6: = 8(F,,) and o^= H(F,). Then in both parametric              and non-
parametrPc    circumstances,



                                              h=l

converges to fi = E(O(F,)lF,}               = E(@*(X) (with probability    one, conditional   on F,)
as B+ncj.
2348                                                                                          P. Hull


Example     2.2.     Confidence   interval

A symmetric confidence interval for 8, = U(F,) may be constructed by applying the
resampling principle using the function f, given by (2.3). The sample equation then
assumes the form

       P{8(F,)     - t < 8(F,) < Q(F,) + t(F,} - 0.95 = 0.                                     (2.6)


In a nonparametric       context Q(F,), conditional     on F,, has a discrete distribution
and so it would seldom be possible to solve (2.6) exactly. However, any error in the
solution of (2.6) will usually be very small, since the size of even the largest atom of
the distribution    of B(F,) decreases exponentially        quickly with increasing II. The
largest atom is of size only 3.6 x 1O-4 when IZ= 10. We could remove this minor
difficulty by smoothing the distribution      function F,. In parametric cases, (2.6) may
usually be solved exactly for t.
   The interval (& f,, 8+ &J is a bootstrap            confidence interval for 8, = 8(F,),
usually called a (two-sided, symmetric) percentile interval since &, is a percentile of
the distribution   of le(F,) - Q(F,)I conditional    on F,. Other nominal 95% percentile
intervals   include the two-sided,     equal-tailed     interval (i?- f,,, 8 + fo2) and the
one-sided interval (- co, & + f,,), where f,,, fo2, and f,, solve

       P{@F,)      < B(F,) - tlF,}    - 0.025 = 0,

       P(B(F,)     < QF,) + tlF,}     - 0.975 = 0,

and

       P{e(F,)<e(F,)+         tlF,}   -0.95=0,


respectively. The former interval            is called equal-tailed because   it attempts   to place
equal probability  in each tail:

       P(8, d 8-      f,,) z I-‘(& > 8+ f,,) z 0.025.


The “ideal” form of this interval, obtained by solving the population equation rather
than the sample equation, does place equal probability     in each tail.
   Still other 95% percentile intervals are I^, = (e- fo2, 8+ f,,) and III = (- co,
8 + fo4), where too4is the solution of

       P{fI(F,) d Q(F,) - tlF,}       - 0.05 = 0.


These do not fit naturally into a systematic development    of bootstrap methods by
frequentist arguments,    and we find them a little contrived. They are sometimes
Ch. 3Y: Methodology    and Theoryfor    the Bootstrap                                            2349


motivated     as follows. Define e* = B(F,), I?(x) = P(8* < ~1%) and

       I?‘(C()=inf{x:t?(x)>a}.

Then

       r^, = [I?‘(0.025),&‘(0.975)]               and   fI = [-   co,I?‘(0.95)].

   All these intervals cover 8, with probability    approximately   0.95, which might be
called the nominal coverage. Coverage error is defined to be true coverage minus
nominal coverage; it generally converges to zero as sample size increases.
   We now treat in more detail the construction       of two-sided, symmetric percentile
intervals in parametric problems. There, provided the distribution      functions Fo, are
continuous,   equation (2.6) may be solved exactly. We focus attention on the cases
where 8, = Q(F,) is a population mean and the population is normal or exponential.
Our main aim is to bring out the virtues of pivoting, which usually amounts to
resealing so that the distribution of a statistic depends less on unknown parameters.
   If the population     is Normal N@,c?) and we use the maximum                likelihood
estimator x = (x, S2) to estimate 1, = (CL,a2), then the sample equation (2.6) may be
rewritten as

       P(ln - “%Nj < t 1F,) = 0.95,                                                              (2.7)

where N is Normal N(0, 1) independent       of F,. Therefore                the solution   of (2.6) is
    *
t = t, = xog5n -1’2B, where X, is defined by

       P(INI <x,)     = oz.

The bootstrap       confidence     interval   is therefore

       (X - n-“2X,,,,c?,X+ n-‘12xo.958)

with coverage       error

       P(r7- C2X (p&          d /.i d   x +n- 1’2xo.958)
                              = P{ (n”2(X - ,U)/Sl G x,.95} - 0.95.                              (2.8)

Ofcourse n”‘(X - p)/S does not have a Normal distribution, but a resealed Student’s
t distribution    with n - 1 degrees of freedom. Therefore           the coverage error is
essentially that which results from approximating          to Student’s t distribution by a
Normal distribution,      and so is O(n-‘). (See Kendall and Stuart (1977, p. 404).) That
is disappointing,   particularly   as classical methods lead so easily to an interval with
precisely known coverage in this important         special case.
2350                                                                                        P.Hull


   To appreciate why the percentile interval has this inadequate performance, let us
go back to our parametric example involving the Normal distribution.         The root
cause of the problem there is that 8, and not cr, appears on the right-hand     side in
(2.8). This happens because the sample equation       (2.6), equivalent  here to (2.7),
depends on 8. Put another way, the population     equation (2.1), equivalent to

       P{ l(V,)    - B(F,)I < t} = 0.95,

depends on cr’, the population         variance. This occurs because the distribution        of
le(F,) - 8(F,)I depends on the unknown CJ.We should try to eliminate, or at least
minimize, this dependence.
    A function T of both the data and an unknown parameter is said to be (exactly)
piootal if it has the same distribution           for all values of the unknowns.         It is
asymptotically   pivotal if, for sequences of known constants {a,} and {b,}, a,T+ b,
has a proper nondegenerate       limiting distribution    not depending on unknowns. We
may convert 8(F,) - 8(F,) into a pivotal statistic by correcting for scale, changing
it to T= {B(F,) - fl(F,)}/* r w h ere z*= r(F,) is an appropriate     scale estimator. In our
example about the mean there are usually many different choices for 2, e.g. the
sample standard deviation        {n-‘C(Xi - X) ’ } 1/Z, the square root of the unbiased
variance estimate, Gini’s mean difference and the interquartile              range. In more
complex problems, a jackknife standard deviation estimator is usually an option.
Note that exactly the same confidence interval will be obtained if t^ is replaced by
c?, for any given c # 0, and so it is inessential that z^be consistent for the asymptotic
standard deviation of f&F,). What is important          is piuotalness - exact pivotalness if
we are to obtain a confidence            interval with zero coverage error, asymptotic
pivotalness if exact pivotalness is unattainable.        If we change to a pivotal statistic
then the function f, alters from the form given in (2.3) to

     f,(F,,   F,) = 1(&F,)     - tr(F,) d B(F,) d B(F,) + tr(F,)}    - 0.95.                 (2.9)

   In the case of our parametric Normal model, any reasonable scale estimator t*will
give exact pivotalness.   We shall take z^= 8, where 8’ = a’(F,) = n-‘C(Xi - f)’
denotes sample variance. Then f, becomes

    ft(F,, F,) = 1(Q(F,) - m(~,) d e(F,) < e(F,) + ta(~,))           - 0.95.

Using this functional in place of that at (2.3), but otherwise      arguing    exactly as before,
equation (2.7) changes to

     P((n-        1)-1’21T~_1( dt(F,}   =0.95,                                             (2.10)

where T,_ I has Student’s         t distribution  with n - 1 degrees      of freedom and is
stochastically independent        of F,. (Therefore the conditioning       on F, in (2.10) is
Ch. 39: Methodology and Theory for the Bootstrap                                          2351


irrelevant.) Thus, the solution of the sample equation is f0 = (n - 1)) 1i2w0,95, where
w&= w,(n) is given by P(IT,_ 1 1< w,) = ct. The bootstrap       confidence  interval is
(X - &,,b,.% + 2,8), with perfect coverage accuracy,

     P{X -(n     - 1)-1’2w0,95 8 ,< p d X + (n - l)-“zw,,,,B)       = 0.95.

(Of course, the latter statement applies only to the parametric bootstrap under the
assumption    of a Normal model.)
   Such confidence intervals are usually called percentile-t intervals since f0 is a
percentile of the Student’s t-like statistic /0(F,) - 8(F,)1/r(F,).
   Perfect coverage accuracy of percentile-t intervals usually holds only in parametric
problems    where the underlying      statistic is exactly pivotal. More generally, if
symmetric percentile-t intervals are constructed      in parametric .and nonparametric
problems by solving the sample equation when f, is defined by (2.9), where z(F,) is
chosen so that T= {8(F,) - B(F,)}/z(F,) is asymptotically           pivotal, then coverage
error will usually be O(n-‘) rather than the O(n- ‘) associated               with ordinary
percentile intervals.
   We conclude this example with remarks on the computation                of critical points,
such as r?,, by uniform Monte Carlo simulation.           Further details, including        an
account of efficient Monte Carlo simulation, are given in Section 5.
   Assume we wish to compute the solution 0, of the equation

     PC{w-2) - W,)}Iz(F,) d 9, IF,] = LY,                                               (2.11)

or, to be more precise, the value

     4 = inf{x:PC{W,) - B(F,))/T(F,)d xIF, (3 M}.
Choose integers B > 1 and 1 d v 6 B such that v/(B + 1) = ~1.For example, if c1= 0.95
then we could take (v, B) = (9599) or (950,999). Conditonal       on F,, draw B resamples
(gz, 1 <b d B} independently      from the distribution     with distribution     function F,.
In the nonparametric    case, write F,,, for the empirical distribution       function of 3:.
In the parametric case, where the population       distribution    function is Fclo, and 1,
is a vector of unknown parameters, let i and @ denote the estimates of 1, computed
from the sample X and the resample %“t, respectively, and put F,,, = Fci.,. For both
                                                                                   b
parametric and nonparametric       cases, define




and write T* for a generic Tt. In this notation,   equation (2.11) is equivalent   to
P(T* d z$,(%“)= a. Let I&, denote the vth largest value of Tz. Then O,,, --f 8, with
probability   one, conditional on 3, as B+ co. The value O,,, is a Monte Carlo
approximation     to v^,.
2352                                                                                       P. Hall


3.     Iterating the principle

Recall that in Section 2, we suggested that statistical inference often involves
describing a relationship       between the sample and the population.          We argued that
this leads to a bootstrap principle, which may be enunciated in terms of finding an
empirical solution to a population equation, (2.1). The empirical solution is obtained
by solving a sample version, (2.4) of the population                  equation.    The notation
employed in those equations            includes taking F,, F, and F, to denote the true
population     distribution     function,    the empirical  distribution     function,    and the
resample version of the empiric, respectively.             The solution      of the population
equation is a functional of F,, say T(F,), and the solution of the sample equation
is the corresponding      functional of the empiric, T(F,). The population         equation may
then be represented as

        -W-W’,W,~ FJIFd = 0,

with approximate       solution

        -W’YFI)(FO~F,)IFI~
                        ~00.                                                                  (3.1)

   The solution of the sample equation represents an approximation            to the solution
of the population      equation. In many instances we would like to improve on this
approximation       ~ for example, to further reduce bias in a bias correction problem,
or to improve coverage accuracy in a confidence interval problem. Therefore we
introduce a correction term t to the functional       T, so that T(.) becomes U(., t) with
U( ., 0) E T( .). The adjustment may be multiplicative,    for example, U( ., t) E (1 + t)T( .).
Or it may be an additive correction, as in U(*, t) = T(.) + t. Or t might adjust some
particular feature of T, as in the level-error correction for confidence intervals, which
we shall discuss shortly. In all cases, the functional      U(.,t) should be smooth in t.
Our aim is to choose t so as to improve on the approximation           (3.1).
   Ideally, we would like to solve the equation

                                                                                              (3.2)

for t. If we write g,(F, G) =fac,_(F,     G), we see that (3.2) is equivalent     to

        J%(Fo>   FAIF,)    = 0,

which is of the same form as the population  equation          (2.1). Therefore   we obtain     an
approximation    by passing to the sample equation,
Ch. 39: Methodology   and TheoryJbr   the Bootstrap                                             2353


or equivalently,




This has solution &,oz= T,(F,), say, giving us a new approximate     equation of the
same form as the first approximation    (3.1), and being the result of iterating that
earlier approximation,




   Our hope is that the approximation        here is better than that in (3.1) so that in a
sense U(F,, T,(F,)] is a better estimate than T(F,) of the solution t, to equation
(2.1). Of course, this does not mean that U[F,, 7’,(F,)] is closer to t, than T(F,),
only that the left-hand side of (3.4) is closer to zero than the left-hand side of (3.1).
   If we revise notation and call U[F,, T,(F,)] the “new” T(F,), we may run through
the argument again, obtaining a third approximate           solution of (2.1). In principle,
these iterations may be repeated as often as desired.
   We have given two explicit methods, multiplicative         and additive, for modifying
our original estimate f, = T(F,) of the solution of (2.1) so as to obtain the adjustable
form U(F,, t). Those modifications       may be used in a wide range of circumstances.
In the special case of confidence intervals, an alternative approach is to modify the
nominal coverage probability      of the confidence interval. To explain the argument
we shall concentrate    on the special case of symmetric percentile-method         intervals
discussed in Example 2.1. Corrections for other types of intervals may be introduced
in like manner.
   An a-level symmetric      percentile-method      interval for Be = QF,) is given by
[B(F,) - &,, f?(F,) + &,I, where &, is chosen to solve the sample equation

     P{w-*) - t d WI) d 8(F,) + t/F,)                 -a     = 0.

(In our earlier examples, tl = 0.95.) This f,, is an estimator        of the solution   t, = T(F,)
of the population   equation

     PlW,) - t d W,) d B(F,) + tlF,}                  -    c1=   0,

that is. of

     P((B-8&t(F,)=cc,

where e= O(F,). Therefore        to is just the a-level quantile,     x,, of the distribution    of
6    &I,
2354                                                                                             P. Hall


Write x, as x(F,),, the quantile when F, is the true distribution                    function.   Then
E, = T(F,) is just x(F,),, and we might take U(., t) to be

       U(., t) = x(.),+ 1.

This is an alternative       to multiplicative    and additive   corrections,   which in the present
problem are

       U(.,t)-(1   +t)x(.),        and     U(.,t)=x(.),+t,

respectively. In general, each will give slightly different numerical results, although,
as we shall prove shortly, each provides the same order of correction.
   Concise definitions of Fj are different in parametric and nonparametric         cases. In
the former we work within a class {Fo,, d~l\} of distributions        that are completely
specified up to an unknown       vector 1 of parameters.      The “true” distribution      is
F, = Fcno), we estimate il, by I= L(X) where X = Xi is an n-sample drawn from
F,, and we take F, to be F,i,. To define Fj, let ij = L(Xj) denote the estimator i
computed for an n-sample Xj drawn from Fjm 1 and put Fj = F,ir The nonparametric
case is conceptually   simpler. There, Fj is the empirical distribution     of an n-sample
drawn randomly from Fj_ 1, with replacement.
   To explain how high-index Fis enter into computation           of bootstrap iterations,
we shall discuss calculation      of the solution     to equation    (3.3). That requires
calculation of U(F,, t), defined for example by


       U(F,, t) = (1 + t)T(F,).

And for this we must compute              T(F,). Now, f, = T(F,) is the solution         (in t) of the
sample equation




and so T(F,) is the solution          (in t) of the resample     equation


       ~tft(F,~F,)IF,)= 0.
Thus, to find the second bootstrap iterate, the solution of (3.3), we must construct
F,, F,, and F,. Calculation      of F, “by simulation”    typically involves order B
sampling    operations   (B resamples drawn from the original sample), whereas
calculation   of F, “by simulation”       involves order B2 sampling    operations   (B
resamples drawn from each of B resamples) if the same number of operations is used
at each level. Thus, i bootstrap iterations could require order B’ computations,   and
so complexity would increase rapidly with the number of iterations.
Ch. 39: Methodology   and Theory,for   the Bootstrap                                                   2355


   In regular cases, expansions     of the error in formulae such as (3.1) are usually
power series in n- i’* or n- r, often resulting from Edgeworth expansions of the type
that we shall discuss in Section 4. Each bootstrap       iteration reduces the order of
magnitude of error by a factor of at least n - liz . However, in many problems with
an element of symmetry, such as two-sided confidence intervals, expansions of error
are power seriesin IZ- ’ rather than n ‘I’, and each bootstrap iteration reduces error
by a factor of n-l, not just n- ‘I*.


Example 3.1.       Bias reduction

In this situation, each bootstrap iteration reduces the order of magnitude    of bias
by the factor n-l. (See Hall 1992, Section 1.5, for further details.) To investigate
further the effect of bootstrap iteration on bias, observe that, in the case of bias
reduction by an additive correction,

     .ft(FcbFl) = w-1) - QF,) + t.

Therefore    the sample equation,




has solution     t = T(F,) = QF,) - E{B(F,)IF,},              and so the once-iterated      estimate    is

      8, = @+ T(F,) = B(F,) + T(F,) = 2&F,) - E{B(F,)IF,).


See also (2.5). On iteration of this formula                we obtain   the following    formula   for a
general bootstrap estimator.


Theorem 3.1

If I!?~denotes   the jth iterate of 8, and if the adjustment            at each iteration   is additive,
then


                          E{B(Fi)(F,},           ja    1.


Example 3.2.       Confidence interval

Here, each iteration generally reduces the order of coverage error by the factor n-l
in the case of two-sided intervals, and by n- ‘I2 for one-sided intervals. To appreciate
the effect of iteration in more detail, let us consider the case of parametric, percentile
confidence intervals for a mean, assuming a Normal N(p, CJ*)population,         discussed
in Example 2.2. Let N denote a Normal N(0, 1) random variable. Estimate the
                                                                                                                                 P. Hall


parameter        i, = (p, 0”) by th e maximum                                  likelihood       estimator

     n^
      =(X, 62)= (up,), rJ2(Fl)),
where X = n- ’ CX, and 6’ = IZ- ‘x(X, - X)’ are sample mean and sample variance,
respectively. The functional ,f, is, in the case of a symmetric two-sided 95% percen-
tile confidence interval,

    f;(F,,F,)           = I{W,)                  - t d fI(F,) d B(F,) + t} - 0.95,


and the sample equation (2.4) has solution t = T(F,) = n-“2~,~,,o(F,),                                                      where x0,95
is given by P( 1N 1< x0.95) = 0.95. This gives the percentile interval

     (X - n- “2x,,,&                          x +n- l’2xo,958),
derived in Example 2.2. For the sake of definiteness                                                    we shall make the coverage
correction in the form

      U(F,,t)=n               - 1’2(%.95             + t)@,),


although        we would draw the same conclusion                                    with other forms of correction.            Thus,

     f “(F,,t)(hI’          Fl)         =   w2       lw,l)       -     ~(~,w(~,)            d   x0.95    +   t> -   0.95,

so that the sample equation                            (3.3) becomes

      P{n”2IU(F,)                  - B(F,)(/o(F,)                < x0.95 + tlF,}            - 0.95 = 0.                            (3.5)

   Observe           that

      W = nli2{d(F2)                        - B(F,)}/o(F,)


            =        nm1j2 i                (X*-X)               n-l      i    (X*-X)2              -“‘,
                i                 i=l                        H           i=l                    I



where conditional      on ?Z, XT,. . . , Xz are independent  and identically distributed
N(X, b2) random variables and X* = n ’ cX*. Therefore, conditional            on X, and
also unconditionally,      W is distributed     as {n/(n - 1)}“2T,_,    where T,- 1 has
Student’s t distribution   with n - 1 degrees of freedom. Therefore the solution E, of
equation (3.5) is f. = (~/(n - l)}‘i2wo,,5 - xo,95, where w, = w,(n) is defined by

      P(IT,-,/<w,)=sr.
Ch. 9:    Methodoloyy    und Thuory,fiv   the Bootstrap                               2357


The resulting     bootstrap      confidence      interval   is

                           + f,), NF,) + fl- 1’2~(~l)(%.95
         CW,) - n 1’24F1)(%95                          + Ml
           = [X - (?I- 1))“2W,,,,B,X              + (?I - 1))“2W,,,,6].

This is identical to the percentile-t (not the percentile) confidence interval derived
in Example 2.2 and has perfect coverage accuracy.
   The methodology     of bootstrap iteration was introduced     by Efron (1983), Hall
(1986), Beran (1987) and Loh (1987).



4.     Asymptotic       theory

4.1.     Summary

 We begin by describing circumstances       where Edgeworth expansions, in the usual
 rather than the bootstrap       sense, may be generated      under rigorous regularity
 conditions;   see Section 4.2, Major contributors    to this theory include Chibishov
(1972,1973a, 1973b), Sargan (1975, 1976) and Bhattacharya         and Ghosh (1978). Our
account is based on the latter paper. Following         that, in Section 4.3, we discuss
 bootstrap versions of those expansions and then describe the conclusions that may
 be drawn from those results. Our first conclusions,        about the efficacy of pivotal
 methods, are given towards the end of Section 4.3. Sections 4.4, 4.5, 4.6 and 4.7
 describe respectively     a variety of different confidence     intervals, properties  of
bootstrap estimates of critical points, properties of coverage error and the special
case of regression. The last case is of particular interest because, in the context of
 intervals for slope parameters, it admits bootstrap methods with unusually good
coverage accuracy.
    The main conclusions drawn in this section relate to the virtues of pivoting. That
subject was touched on in Section 2 but there we lacked the technical devices
necessary to provide a broad description of the relative performances of pivotal and
non-pivotal methods. The Edgeworth expansion techniques introduced in Section4.2
fill this gap. In particular, they enable us to show that pivotal methods generally
yield greater accuracy in the estimation of critical points (Section 4.5) and smaller
asymptotic order of coverage error of one-sided confidence intervals (Section 4.6).
Nevertheless,     it should be borne in mind that these results are asymptotic          in
character and that, while they provide a valuable guide, they do not tell the whole
story. For example, the performance of pivotal methods with small samples depends
in large part on the relative accuracy of the variance estimator and can be very poor
in cases where an accurate variance estimator is not available. Examples which
feature poor accuracy include interval estimation for the correlation coefficient and
for a ratio of means when the denominator        mean is close to zero.
2358                                                                                                            P. Hall


   Theory for the bootstrap, along the lines of that described here, was developed
by Bickel and Freedman (1980), Singh (1981), Beran (1982, 1987), Babu and Singh
(1983, 1984, 1985), Hall (1986, 1988a, 1988b), Efron (1987), Liu and Singh (1987)
and Robinson    (1987). Further work on the bootstrap       in regression models is
described by Bickel and Freedman (198 1, 1983), Freedman (198 l), Freedman and
Peters (1984) and Peters and Freedman (1984a, 1984b).


4.2.    Edgeworth            and Cornish-Fisher              expansions

We begin by describing a general model that allows Edgeworth and CornishhFisher
expansions to be established rigorously. Let @, 4 denote respectively the Standard
Normal distribution      and density functions. Let X, X,, X,, . . . be independent    and
identically distributed random column d-vectors with mean p, and put X = n ‘C Xi.
Let A: Rd --f R be a smooth function satisfying A(p) = 0. We have in mind a function
such as A(x) = {g(x) - g(~)}/h@), where 8, = g(p) is the (scalar) parameter estimated
by 6 = g(X) and g2 = h(/1)2 is the asymptotic variance of n”28; or A(x) = {g(x) -
g(p)}/h(x), where b2 = h(X) is an estimator of h(p). (Thus, we assume h is a known
function.)
   This “smooth function model” allows us to study problems where 8, is a mean,
or a variance, or a ratio of means or variances, or a difference of means or variances,
or a correlation coefficient, etc. For example, if { W,, . . . , W,,} were a random sample
from a univariate population      with mean m and variance fi2, and if we wished to
estimate 0, = m, then we would take d = 2, x = (X”‘, Xc2’)r = (W, W2)T, p = E(f),

         (1’,x(2’)     = x(“,                h(x”‘,X’2’)    =x(2’     _ (,(1’)2.
       &7(x

This would ensure that g(p) = m, g(x) = w (the sample mean), h(p) = b2, and


       h(X)=n-’         $lX~2’-(n~1i$lXj1’)2=n~1i$l(Wi-                                   W)‘=/P


(the sample variance). If instead our target were 8, = /II” then we would take d = 4,
X = (W, W2, W3, W4)*, /I = E(X),

       g(x”‘, . . )X(4’)= x(2’ - (x(l’)2,

       h(x(“,...,    x(4’)    =   x(4’   _    4x”‘x’3’     + fj(x”‘)2x’2’     _ 3(x”‘)4   _ [x”’   _ (,W)2]2.


In this case,

       Y(P)= B2> dx, = Bz,
       h(p) = E( W - m)” - fi4,
Ch. 39: Methodology and Theoryfor the Bootstrap                                          2359



      h(X) = rl-l i (Wi - W)2= B’.
                          i=l



(Note that E(W- m)” - /I” equals the asymptotic         variance of nri2/?.) The cases
where o0 is a correlation coefficient (a function of five means), or a variance ratio (a
function of four means), among others, may be treated similarly.
    The following result may be established under the model described above. We
first present a little notation. Put p = E(X), and let

      pi ,,,.i, = E{ (X - pp.           . .(X - pp},             j> 1,

      ai,...i,    =   (aj/axv..      .ax~q4(x)~,=,,




and




Note that c2 equals the asymptotic                    variance   of n’i2A(_%).


Theorem 4.1

Assume that the function A has j + 2 continuous        derivatives in a neighbourhood      of
p = E(X), that .4(p) = 0, that E( IIii! IJj’2) < co, and that the characteristic   function
x of X satisfies

      limsup Ix(t)1 < 1.                                                                (4.1)
        “E,,
          - %

Suppose          CJ> 0. Then for j 2 1,

      P{n”2A(@/o                d x) = e,(x) + n-“2pl(x)&)             + ...

                                       + n-j’2pj(X)4(X)      +   0(n-j’2)
                                                                                        (4.2)
2360                                                                                          P.Hall


uniformly in x, where pj is a polynomial   of degree at most 3j - 1, odd for even j and
even for odd j, with coefficients depending on moments of 2 up to order j + 2. In
particular,

      pl(x) = (‘4,o-’    + $42a-3(X2- l)}.

   See Bhattacharya       and Ghosh (1978) for a proof.
   Condition     (4.1) is a multivariate     form of Cramer’s continuity     condition.   It is
satisfied if the distribution     of z is nonsingular (i.e. has a nondegenerate    absolutely
continuous     component)      or if 2 = (W, W2,. , Wd)T where W is a random variable
with a nonsingular      distribution.
   Two versions of (4.2) are given by

       P{n1’2(g-f&)/a < x} = CD(x) + n-1’2pl(X)c/l(X)
                                                   +                       I.’



                                 +    n -“*pj(x)q5(x)+ o(n -j/2)                               (4.3)

and

              8,)/b d x} = @(x) + n-1’2ql(X)#(X)
       P{n1’2(O^-                                                     + ...
                                 +n -“2qj(X)~(X)              + O(n-j”),                       (4.4)

being Edgeworth expansions for non-Studentized         and Studentized statistics, respec-
tively. Here, pj and qj are polynomials    of degree at most 3j - 1 and are odd or even
functions according to whether j is even or odd. They are usually distinct.
    The Edgeworth expansion       in Theorem 4.1 is readily inverted so as to yield a
Cornish-Fisher    expansion of the critical point of a distribution.   To appreciate how,
first define w, = w,(n), the a-level quantile of the distribution    of S, = n1’2A(x), by

       w, = inf{x:P(S,   d x) 3 2).


Let z, be the a-level Standard        Normal   quantile,           given by @(z,) = a. We may write

       W,=Z,+n-“2p,l(Z,)+n-1p2,(z,)+               ..’        +n-“2pj&,)+        ..

and

      z, = w, + n -1’2p12(wa)
                           + n-‘p,,(w,)          +       “’    +   nP2pj2(Wm) +       .‘.)




where the functions pjl and pj2 are polynomials.  These expansions     are to be
interpreted as asymptotic series and in that sense are available   uniformly  in
ECU< 1 -sforanyO<.s<+.
Ch. 39: Methodology      and Theoryfor       the Bootstrap                                             2361


   The polynomials         pjI and pj2 are of degree at most j + 1, odd for even j and even
for odd j, and depend on cumulants            only up to order j + 2. They are completely
determined         by the pis in (4.2). In particular, it follows that pjI is determined by
p1 , . . . , pj. To derive formulae for p1 1 and p2 1, note that


      a= @(z,)+         ~~-“2Pl,(z,)+~-‘P2,(z,)~~(z,)-~~~~”2P11(Z,)~2Z,~(Z,)

              + n - 1’2cPl    mw           + n - “2PII(z,){P;(d             - z,Pl(z,)Hwl

              + n-‘p2(z,)4(z,)         + O(n_3’2)

        =a+n        ~“2{Pll(z,)+P,(z,)}~(z,)+~-‘CP2,(z,)-~z,P,,(z,)2

              + Pllk){PW               - Z,PIWI           + P2(Z,)laz)       + wp3’2).


From this we may conclude                  that

      Pllb)      = -   Pl(4



and

      P2164      = PlwP;(x)        -    +xPl(42       -    P2W


Formulae for the other polynomials     piI, and for the pi2’s, may be derived similarly,
however, they will not be needed in our work.
   CornishhFisher     expansions under explicit regularity conditions may be deduced
from results such as Theorem 4.1. For example, the following inversions of (4.3) and
(4.4) are valid uniformly in E < c1< 1 - E, under the conditions of that theorem:

      u, = z, + n -1’2p11(z,)           + nm’p2,(z,)         + .‘. + n-j’2pj,(Za)        + o(n-j’2),   (4.5)

and

      v, = z, + n ~“2q11(z,)+n~1q21(z,)+                         ‘.. +n-“2qjl(z,)+o(n-j’2).            (4.6)

Here z,, u,, v, are the solutions                 of the equations        @(z,) = LX,

      P{n”‘(&          &J/a <u,} = a,

      P{n”2(8- Q,)/8 < v,}= a,

respectively; p1 1 and p21 are given by the formulae displayed in the previous
paragraph,    with p1 and p2 defined as in (4.3); and qll and q21 are given by the
analogous formulae, with q1 and q2 from (4.4) replacing p1 and p2.
2362                                                                                      P. Hull


4.3.    Edgeworth   and Cornish-Fisher        expansions     of bootstrap distributions

We are now in a position to describe Edgeworth expansions                 of bootstrap distri-
butions. We shall emphasize the role played by pivotal methods, introduced                    in
Section 2. Recall that a statistic is (asymptotically)   pivotal if its limiting distribution
does not depend on unknown quantities. In several respects the bootstrap does a
better job of estimating    the distribution     of a pivotal statistic than it does for a
nonpivotal  statistic. The advantages       of pivoting can be explained very easily by
means of Edgeworth expansion, as follows. If a pivotal statistic T is asymptotically
Normally distributed, then in regular cases we may expand its distribution            function
as

       G(x) = P( T < x) = a(x)     + n “‘q(x)+(x)     + O(n- ‘),                           (4.7)


where q is an even quadratic polynomial.      See (4.2), for example. We might take
T= n”‘(t!?- 0)/c?, where i? is an estimator of an unknown parameter H,, and s2 is
an estimator of the asymptotic variance o2 of n ‘I28 . The bootstrap estimator of G
admits an analogous expansion,

       G(x) = P(T* d x(.5) = a(x)       + n-“2Q(x)~(x)       + O,(n-I),                    (4.8)

where T* is the bootstrap version of T, computed from a resample %* instead of
the sample ?Z”,and the polynomial       4 is obtained from q on replacing unknowns,
such as skewness, by bootstrap        estimates. (The notation      “O,(n- I)” denotes a
random variable that is order n- ’ “’m probability”. The distribution of T* conditional
on 3’ is called the bootstrap distribution    of T*.
   The estimators in the coefficients of 4 are typically distant O,(n ‘j2) from their
respective values in q, and so 4 -q = O,(n- ‘12). Therefore, subtracting        (4.7) and
(4.8), we conclude that

       P(T* <xl??“) - P(T6       x) = O,(n-‘).

That is, the bootstrap      approximation   to G is in error by only n-l. This is a
substantial   improvement     on the Normal approximation,   G N CD,which by (4.7) is
in error by n- 1’2.
   On the other hand, were we to use the bootstrap to approximate      the distribution
of a nonpivotal   statistic U, such as U = n”2(g- t3,), we would typically commit an
error of size n- ‘I2 rather than n ‘. To appreciate why, observe that the analogues
of (4.7) and (4.8) in this case are

       H(x) = P(U < x)

            = @(x/a)   +   n-“‘p(x/a)#(x/a)      + O(n-‘),
Ch. 39: Methodology   and Theory for the Bootstrap                                     2363


      B(x)= P(u*      d xl%)

           = 0 (x/c?) + n - “2~(x/&#o/s) + O,(n - ‘)

respectively, where p is a polynomial, 8 is obtained from p on replacing unknowns
by their bootstrap estimators, o2 equals the asymptotic      variance of U, d2 is the
bootstrap estimator of c2 and U* is the bootstrap      version of U. Again, @- p =
O,(n- “‘), and also 8 - G = O,(n- 1/2), whence

      B(x)- H(x) = @(x/B) - @(x/a) + O,(nP).                                          (4.9)

Now, the difference between 6 and (T is usually of precise order n- 1’2. Indeed,
n1i2(B - 0) typical1 y h as a limiting Normal N(0, c2) distribution,        for some i > 0.
Thus, @(x/6) - @(x/a) is generally of size n-1/2, not n-l. Hence by (4.9), the
bootstrap    approximation      to H is in error by terms of size n-*/*, not n-‘. This
relatively poor performance is due to the presence of cr in the limiting distribution
function @(x/a), i.e. to the fact that U is not pivotal.
   Expansions     such as (4.8) may be developed under the smooth function model,
and analogues of Theorem 4.1 are available in the bootstrap case. For example, let
us return to the notation        introduced just prior to that theorem, and introduce
additionally    the definitions     x* = n- ‘CXT, 8* = g(x*) and c?*~ = h(X*), where
%* = {XT,. . . ) x}    denotes a resample drawn randomly,         with replacement,   from
s = {Xl,. . .) X,,}, Then under the same conditions as in Theorem 4.1, except that the
moment condition should be strengthened         a little, we have the following analogues
of (4.3) and (4.4) respectively:

      P(n”2(f7*- e,lr3*< xp-} = @(x) + n-1’21j1(X)c#J(X)
                                                    + ...
                                          + n -“2gj(x)c#J(x)
                                                          + o,(n-j’2)                (4.10)

and

      P(n1’2(B*
              -6)/d* <x(2-} = aqx) + n-“2Q1(X)4(X)+ ...
                                          + n-“24j(x)q5(x)+ o,(n -ji2).              (4.11)

      Bootstrap Edgeworth expansions may be inverted in much the same way as
ordinary Edgeworth expansions, to obtain bootstrap Cornish-Fisher        expansions.
For example, the quantiles arising from inversion of the bootstrap expansions (4.10)
and (4.11) are

      a, = z, + n -“2B11(Z,)+n~1~21(Z,)+             “‘+fji2@j,(Z,)+     “’          (4.12)

and

      I?, = z, + n -1’2~11(z,)+n-‘~21(z,)+ ‘..           +n-“2Qjl(z,)+   ..‘.        (4.13)
2364                                                                                                      P.Ha//


Here, pjl and Qjl differ from pjI and q,r, appearing in (4.5) and (4.6), only in that F,
is replaced by F,; that is, population   moments are replaced by sample moments.
Of course, CornishhFisher     expansions   are to be interpreted  as asymptotic    series
and apply uniformly in values of z bounded away from zero and one. For example,

       .j/ 2     sup      Iti,-{z,+n       -r/2f111(Z,)+      .    +n-j/*   Bjl(za)}l+o
               r.<l<lLi



almost surely (and hence also in probability)    as II + co, for each 0 < e < $.
   A key assumption    underlying      these results is smoothness     of the sampling
distribution. For example, under the “smooth function model” introduced                 in
Section 4.2, the sampling    distribution    would typically be required       to satisfy
Cramer’s condition.



4.4.    DifSerent versions          of bootstrap      confidence     intervals

We begin with a little notation. Let F, denote the population         distribution    function,
Q(.) a functional of distribution   functions, and 8, = 8(F,) a true parameter value,
such as the rth power of a population         mean 8, = (JxdFo(x)}‘.        Write F, for the
distribution   function “of a sample” .% drawn from the population.           Interpretations
of F, differ for parametric and nonparametric         cases; see Section 2. The bootstrap
estimator of 8, is 8= O(F,). Define F, to be the distribution       function of a resample
X* drawn from the “population”      with distribution    function F,. Again, F, is different
in parametric and nonparametric       settings.
   A theoretical a-level percentile confidence interval for QO,

       I, =(-        co,H^+t,),

is obtained        by solving the population            equation      (2.1) for t = t,, using the function

       f;(F,, F,) = Z{W,) d B(F,) + t} - oz.

Thus, to is defined by

       P(8 < e + to) = cc.

The bootstrap    version of this interval is r^, = (- oc, e+ fo), where                          t = f, is the
solution of the sample equation (2.4). Equivalently,  & is given by

       P{fl(F,)     d B(F,) + f,] F,}          = a.

We call r^, a bootstrap           percentile     confidence   interval,     or simply a percentile   interval
Ch. 39: Methodology   and Theory for the Bootstrap                                            2365


   To construct a percentile-r   confidence interval for 8,, define a2(F,) to be the
asymptotic variance of n 1/28, and put b2 = a2(F,). A theoretical cc-level percentile-t
confidence interval is J, = (- co, 8 + to&), where on the present occasion t, is given
by

      lye, < f7+ to&) = ct.

This is equivalent    to solving the population      equation   (2.1) with

      .f,(F,, Fl) = I{@,) G w.1) + WFl)) - cc

The bootstrap interval is obtained by solving the corresponding              sample equation,
and is _?i = (- co, 8 + f,c?), where f, is now defined by

      P(8 < B(F,) + &#,)I         F,} = ct.

To simplify notation in future sections we shall often denote O(F,) and a@‘,) by t?*
and 8*, respectively.
   Exposition will be clearer if we represent t, and &, in terms of quantiles. Thus,
we define u,, v,, ri,, and 8, by




                                                                                          (4.14)

and


      PblVv,)         - e(Fl)jqa(F2)G D,IF,I = @.                                         (4.15)

Write (r = a(F,) and 6 = a@‘,). Then definitions          of I,, .I,, fI, and ii equivalent     to
those given earlier are

      I, =(-Co,8-n-“2aul_m),                  J, =(-co,e-n-1’28vl_a),

      I; =(-co,8-n-“26til_a),                 f1 =(-co,8-n-“2c?91_J,

All are confidence intervals for B,,, with coverage probabilities  approximately  equal
to a.
   In the nonparametric     case the statistic B(F,), conditional on F,, has a discrete
distribution.  This means that equations (4.14) and (4.15) will usually not have exact
solutions, although as we point out in Section 1.3 and Appendix I, the errors due
to discreteness are exponentially   small functions of n. The reader concerned by the
2366                                                                                     P. Hull


problem    of discreteness    might like to define li, and 0, by


       4 = inf{u:PCn1’2{B(F,)        - B(F,)}/~J(F,)   d u~F,] 3 CC}

and

       0, = inf{u:P[n1’2{8(F2)     - B(F,)}/@,)        G uIF,]   2 CZ},

   Two-sided, equal-tailed   confidence           intervals are constructed by forming     the
intersection of two one-sided intervals.          Two-sided analogues of I, and J, are




and

       J, = (& n- 1’2c?uC1
                         +aJ,2,&          n-“28uC, -&

respectively,     with bootstrap     versions




and




The intervals     I, and J, have equal probability         in each tail; for example,

       P(8, d 6 - n-112cw (l+a),Z) = P(6, > e-          II- %UC1 _a),2) = $1 - CC).

Intervals f2 and j2 have approximately    the same level of probability in each tail,
and are called two-sided, equal-tailed  confidence intervals. Two-sided symmetric
intervals were discussed in Section 2.
   All the intervals defined above have at least asymptotic coverage ~1,in the sense
that if 4 is any one of the intervals,




as n + co. As before, we call CIthe nominal coverage of the confidence interval 9.
The coverage error of 9 is the difference between true coverage and nominal
coverage,

       coverage    error = P(8,~4)      - CI.
Ch. 39: Methodology and Theoryfor              the Bootstrap                                              2361


4.5.       Order of correctness        of bootstrap approximations                 to critical points

The a-level quantiles of the distributions of S = n”‘(@- 0,)/a and T = n”‘(8-    d,)/c?
are u, and v,, respectively,      with bootstrap   estimates ti, and 6,. Subtracting
expansions (4.5) and (4.6) from (4.12) and (4.13) we deduce that

       4    -u,    = n-1’21MZ,)          -    PII       + ~-‘{a,,(d              - P21Wl    + ...       (4.16)

and

       U*,--U,=n-“2~~11(Z,)-qll(z,)}                    +n-‘CLi21(Z,)-q21(Z,)}             +    “..

Now, the polynomial jjl is obtained from pjl on replacing population      moments by
sample moments, and the latter are distant O,(n- iI’) from their population counter-
parts. Therefore fijl is distant O,(n- 1’2) from pjl. Thus, by (4.16),

       li, - u, = O,(C”%I              -1’2 + n-i)=        O&-i),

and similarly 0, - v, = O,(n - ‘).
   This establishes one of the important properties of bootstrap, or sample, critical
points: the bootstrap       estimates of U, and u, are in error by only order n-‘. In
comparison,     the traditional   Normal approximation   argues that u, and v, are both
close to z, and is in error by n-l”; for example,

       z, - u, = z, -          {za+ n -1’2p11(z,)+        . ..} = -n-“2pll(Z,)+O(n-‘).

Approximation     by Student’s t distribution    hardly improves on the Normal approx-
imation, since the g-level quantile t, of Student’s t distribution        with n - v degrees
of freedom (for any fixed v) is distant order n- ‘, not order n- ‘12, away from z,. Thus,
the bootstrap has definite advantages over traditional methods employed to approx-
imate critical points.
   This property of the bootstrap will only benefit us if we use bootstrap critical
points in the right way. To appreciate the importance           of this remark, go back to
the definitions of the confidence intervals I,, J,, fl, and j1 given in Section 4.4. Since
v*l_~=vl~~+O,(n~‘),theupperendpointoftheinterval~l=(-co,8-n~”2Bv*~_~)
differs from the upper endpoint of J, = (-co, 6 n-“28ul -,) by only 0,(n-3’2).
We say that i1 is second-order       correct for J, and that & n-‘/280, _a is second-
order correct for 8- n- 1128vl -a since the latter two quantities are in agreement up to
and including terms of order (n- 1’2)2 = n- ‘. In contrast, II1 = (- co, 8 - n- ‘1’ OUl-a)
                                                                                      **
is generally only first-order correct for I, = (- co, 8- n- 1/2~u1 _,) since the upper
endpoints agree only in terms of order n- lj2, not n- l,

       ((j_n-1/2A* fJU1-.) - (6              n-“2aul    -,) = n-‘/2(au1          _a - CM, _,)

                                                               = n- 1’2u1
                                                                        -@(a - 8) + 0,(n-3’2),
2368                                                                                       P.Hall


and (usually) n”‘(6 - a) is asymptotically   Normally distributed with zero mean and
nonzero variance. Likewise, r^, is usually only first-order correct for J, since terms
of order n-112 in Cornish-Fisher      expansions  of ti,_, and ulPa generally do not
agree,

       (Q-n-   “26ti,_.)-(8-n-“28u,_a)=n~‘128(v,~a-a,_.)

                                                =n +~{P,(z,)      - 41(z,)) + 0,(n-3’2).

However, there do exist circumstances        where pi and q1 are identical, in which case
it follows from the formula above that 1^i is first-order correct for J,. Estimation of
slope in regression provides an example and will be discussed in Section 4.7.
    As we shall show in Section 4.6, these “correctness” properties of critical points
have important      consequences      for coverage accuracy. The second-order        correct
confidence interval .Z, has coverage error of order n-‘, whereas the first-order
correct interval I, has coverage error of size np112.
   As noted in Section 4.4, the intervals I;, ii represent bootstrap versions of I,, .Z1,
respectively. Recall from Example 2.2 of Section 2 that percentile intervals such as I,
are based on the nonpivotal       statistic @- 8, and that it is this nonpivotalness     that
causes the asymptotic standard deviation r~ to appear in the definition of I,. That
is why r^, is not second-order      correct for I,, and so our problems may be traced
back to the issue of pivotalness raised in Section 2. The percentile-t interval 5^i is based
on the (asymptotically)    pivotal statistic (e- 0,)/8, hence its virtuous properties.
   If the asymptotic variance rr2 should be known then we may use it to standardize,
and construct confidence interv_als based on (e- 8,)/a (which is asymptotically
pivotal), instead of on either 0 - 8, or (O- 8,)/8. Application           of the principle
enunciated in Section 2 now produces the interval


     I;, =(-    c0,6-nn-“2alil_m),


which is second-order     correct for I, and has coverage error of order n- I.
    We should warn the reader not to read too much into the notion of “correctness
order” for confidence intervals. While it is true that second-order         correctness is a
desirable property, and that intervals that fail to exhibit it do not correct even for
the elementary skewness errors in Normal approximations,            it does not follow that
we should seek third- or fourth-order        correct confidence intervals. Indeed, such
intervals are usually unattainable    as the next paragraph will show. Techniques such
as bootstrap iteration, which reduce the order of coverage error, do not accomplish
this goal by achieving high orders of correction but rather by adjusting the error
of size n- 3’2 inherent to almost all sample-based     critical points.
   Recall from (4.6) that

     v1 _L1= z1 -a +.n -1’2qll(Z1_a)+II-~q21(Z1_a)+        ‘...
Ch. 39: Methodology and Theory for the Bootstrap                                         2369


Coefficients of the polynomial q1 I are usually unknown quantities. In view of results
such as the Cramer-Rao         lower bound (e.g. Cox and Hinkley 1974, pp. 254ff), the
coefficients cannot be estimated with an accuracy better than order n-l”.                This
means that u1 _a cannot be estimated with an accuracy better than order n- ‘, and
that the upper endpoint          of the confidence     interval J, =(-co,&        n-“28u, -,)
cannot be estimated with an accuracy better than order nP3j2. Therefore, except in
unusual circumstances,      any practical confidence interval i, that tries to emulate J,
will have an endpoint differing in a term of order ne3j2 from that of J,, and so will
not be third-order      correct. Exceptional     circumstances    are those where we have
enough parametric information           about the population    to know the coefficients of
qll. For example, in the case of estimating         a mean, qll vanishes if the underlying
population    is symmetric. If we know that the population            is symmetric, we may
construct    confidence    intervals    that are better than second-order       correct. For
example, we may resample in a way that ensures that the bootstrap distribution              is
symmetric, by sampling with replacement              from the collection    {+(X1 -X), . . . ,
 *(X,-X)}       rather than {X,-X,...,        X, - X}. But in most problems, both para-
metric and nonparametric,          second-order   correctness is the best we can hope to
achieve.



4.6.    Coverage    error of conjidence   intervals


In this section we show how to apply the Edgeworth and CornishhFisher         expansion
formulae developed in Sections 4.2 and 4.3, to develop expressions for coverage
accuracy of bootstrap       confidence intervals. It is convenient  to focus attention
initially on the case of one-sided intervals and to progress from there to the
two-sided case.
    A general one-sided confidence interval for BOmay be expressed as 9, = (- 00,
8 + f), where f is determined from the data. In most circumstances,   if 3i has nominal
coverage c1then f admits the representation

       f = n - “2d(z, + i?,),                                                          (4.17)

where e, is a random variable and converges to zero as n+ CO. For example, this
would typically be the case if T = n”2(8 - f3,,)/&had an asymptotic Standard Normal
distribution.  However, should the value 0’ of asymptotic variance be known, we
would most likely use an interval in which f had the form

       f = n li20(z, + c^,).

Intervals fl,J1, and j1 (defined in Section 4.4) are of the former type, with c*, in
(4.17) assuming the respective values - li, -a - z,, li, - z,, - vi _= - z,, -G1 _= - z,.
So also are the “Normal approximation   interval” (- co, 8 + n-i/*&z,) and “Student’s
2370                                                                                                P.Hull


t approximation     interval” (- co, 8 + n p1/28tm), where t, is the a-level quantile of
Student’s t distribution     with IZ- 1 degrees of freedom. Interval I, is of the latter
type. The main purpose of the correction term 2, is to adjust for skewness. To a
lesser extent it corrects for higher-order   departures from Normality.
   Suppose that f is of the form (4.17). Then coverage probability

       a i,n = P(B,E.Y,)       = P{B, < e+ n-“Q(Z,         + c*,)}

            = 1 - P{ni’2(8-        0,)K   l + e, < -za}.                                             (4.18)


We wish to develop an expansion            of this probability.        For that purpose    it is necessary
to have an Edgeworth expansion              of the distribution         function of

       ?I”‘(&     e,)B- l + e,,


or at least a good approximation       to it. In some circumstances, 6, is easy to work
with directly; for example ?, = 0 in the case of the Normal approximation       interval.
But for bootstrap     intervals, c^, is defined only implicitly as the solution of an
equation, and that makes it rather difficult to handle. So we first approximate      it by
a Cornish-Fisher    expansion.
   Suppose that

       t, = n-1’2.Gl(z,)   +    n-‘s*,(z,) + 0,(np3’2),                                              (4.19)

where s1 and s2 are polynomials      with coefficients equal to polynomials   in
population moments and gj is obtained from sj on replacing population  moments.
by sample moments. Then ij = sj + O,,(n- l/*) and


       P{n”*(B-      &JB-’ + t, d x} = P n”‘(Q- 8,)8-’ + n-‘i2{s*l - s,(z,)}
                                        [

                                           d x -   i
                                                   j=l
                                                         n-ji2sj(z,)
                                                                       1 + 0(nm3’*).                (4.20)


Here we have used the delta method.
   Therefore, to evaluate the coverage probability al,n at (4.18) up to a remainder
of order ne3j2, we need only derive an Edgeworth expansion of the distribution
function of

       S, = n”‘(&      8,)8-’ + n-‘A,,                                                               (4.21)

where A,, = n’i2{s*l(z,) - s,(z,)}. That is usually           simpler than finding        an Edgeworth
expansion for n l’*@- 8,)K l + c^,.
Ch. 3Y: Methodology          and Theory for the Bootstrap                                                                        2371


  Put T, = n”‘($-                8,-J/8 and A, = n’iz{$l(zJ             - sl(z,)},         and let a, denote             the real
number such that

     E(T,AJ        = E[n”‘(&            8,)8- ld’z{$l(za)             - s,(z,))]
                   =a,+O(n-1).                                                                                               (4.22)

If s, is an even polynomial     of degree 2, which would typically be the case, then
a, = n(z,), where rt is an even polynomial of degree 2 with coefficients not depending
on c(. Then it may be shown that

     P(S, <x) = P(T, <x) - np’a,x@(x)                             + 0(n-3’2).                                                (4.23)


   It is now a simple matter to obtain expansions of coverage probability       for our
general one-sided confidence interval Y1. Taking x = - z, in (4.20), and noting (4.18)
and (4.23), we conclude that if 6, is given by (4.19) then the confidence interval

     9,    =(-co,e+n-1~28(z,+C*,))

has coverage           probability




           = P
                   i
                        Q~‘~($-e,)p           > - z, -
                                                         j=l
                                                             i    cj12, sj(z,)
                                                                                 I
               - n-‘a,z,~(z,)           + O(n-y.

Assuming       the usual Edgeworth                expansion         for a Studentized              statistic,   i.e.

      P{?(B-              8,)/c? < x} = 0(x) + n- 1’2q1GM4                       +   fl-   1Y2mw            +   O(n    - 3’2),



putting   x=       -~~-x~=~,~n            -ji2sj(z,),    and Taylor-expanding,                     we finally obtain

     c( 19 =   a + n-1’2{s1k)
                            - 41(%))dw + n- 1cq2(z,)                                  +    sz(z,) - $z,s1(zJ2
               +       %(%){vI?l(%)       -    4;@)      -       a,zJ#&J + O(n-3’2).                                         (4.24)


(Remember that qj is an odd/even function for even/oddj,        respectively.)
   The function sr is generally an even polynomial      and s2 an odd polynomial.     This
follows from the Cornish-Fisher     expansion (4.19) of 2,. Since s1 is an even function,
then by the definition of a, at (4.23), this quantity equals an even polynomial      in z,.
Therefore the coefficient of n-‘$(z,)      in (4.24) is an odd polynomial      in z,. The
coefficient of n- “‘&z,) is clearly an even polynomial.
2372                                                                                                        P. Hall


   There is no difficulty developing the expansion (4.24) to an arbitrary number of
terms, obtaining a series in powers of n- ‘P where the coefficient of n-j”4(z,) equals
an odd or even polynomial      depending on whether j is even or odd. The following
proposition   summarizes that result.

Proposition     4.1

Consider     the confidence          interval

       91 =c~~(~)=(-m,6+n-‘128(z,+                           c*,)),

where

         = n-“2s*,(z,)
       ~2~                    + n-‘s*,(z,)      + ...,


where the 3j’s are obtained from polynomials sj on replacing                              population   moments
by sample moments and odd/even indexed s;s are even/odd                                   polynomials,   respec-
tively. Suppose

       P{n”‘(@-       0,)/s    <x)     = C@(x) + n-112q1(~)&~)             + n-‘q,(x)4(x)       + ...,


where odd/even        indexed polynomials                qj are even/odd    functions,     respectively.   Then


       P{8,~9,(cc)}      = CI+ n -‘i2rl(z,)4Yz,)            + n- lrAz,)@(z,)     + ...,                     (4.25)


where odd/even          indexed       polynomials          rj are even/odd      functions,      respectively.     In
particular,

       rl = s1 - q1

and

       r2(d = q2W + s2k) -$mW*                            + sl(z,){z,qlk) - 4;k)) - a,~,.
where a, is defined at (4.22).

   The coverage expansion (4.25) should of course be interpreted as an asymptotic
series. It is often not available    uniformly   in c(, but does hold uniformly     in
E < tl< 1 - Efor any 0 < E < i. However, if c^,is monotone increasing in CIthen (4.25)
will typically be available uniformly in 0 < c1< 1.
   An immediate consequence of (4.25) is that a necessary and su#icient condition for
our conjidence interval 9, to have coverage error of order n-l for all values of cI, is
that it be second-order correct relative to the interval J,, defined in Section 4.4. To
Ch. 39: Methodology and Theory for the Bootstrap                                                           2373


appreciate      why, go back to the definition               (4.19) of e,, which implies that

       Y, =(-&+n-“28(2,+&))

            =(-co,e+n-“~8{z,+n-“%,(z,)}+O,(n-~’2)).

Since q1 1 = -ql        (see Section 4.2) then,

       J,   =(-co,fLn-1’2hl_J
            =(-co,e-n-1’%[zl_~+ll-1’2qll(Zl-a)]+0,(n-3’2))

            =(-co,e+n-1’2~[z,+.-1’2ql(ZJ]+Op(n-3’2)).


The upper endpoint of this interval agrees with that of 9, in terms of order n- ‘,
for all CC,if and only if sl = ql, that is, if and only if the term of order n- l” vanishes
from (4.25). Therefore the second-order          correct interval jl has coverage error of
order n- ‘, but the interval I;, which is only first-order correct, has coverage error
of size IZ- 1’2 except in special circumstances.
   So far we have worked only with confidence intervals of the form (- co,6 + f)
where t*= n-‘i2B(z, + &) and C, is given by (4.19). Should the value a2 of asymptotic
variance be known then we would most likely construct confidence intervals using
t*= n-‘izo(z, + e,), again for 6, given by (4.19). This case may be treated by
reworking      arguments    above. We should change the symbol q to p at each
appearance, because we are now working with the Edgeworth expansion (4.3) rather
than (4.4). With this alteration, formula (4.24) for coverage probability continues to
apply,

         P{8,+oo,8+n-“2               4zm+ a)) = M + n- 1’2{%(%)               -       Pl(Z,)}~(Z,)

                                                             +   n-‘C~~(z,) + s2(z,) - +,s1(d2

                                                             + ~lk){ZaPlW          -    P;(%)>    -   %4
                                                             x &z,) + O(n- 3’2).

(Our    definition of a, at (4.22) is unaffected if 8-l is replaced by c-l,           since
 A-1   _
o      - o-  ’ + O&n- 1’2).) Likewise, as the analogue of Proposition    4.1 is valid, it is
necessary only to replace 8 by c in the definition           of Y, and qj by pj at all
appearances of the former. Therefore our conclusions in the case where C-Jis known
are similar to those when c is unknown: a necessary and sufficient condition for the
confidence interval (- co, 8 + n- ‘I2u(z, + 6,)) to have coverage error of order n-l
for all values of cxis that it be second-order  correct relative to I,.
   Similarly it may be proved that if 9, isjth-order     correct relative to a one-sided
confidence interval JJ;, meaning that the upper endpoints         agree in terms of size
n-j12 or larger, then Y, and zJ; have the same coverage probability         up to but not
2314                                                                                                      P. Hall


necessarily including terms of order n -j” The converse of this result is false for
j > 3. Indeed, there are many important      examples of confidence intervals whose
coverage errors differ by O(n -3/2) but which are not third-order correct relative to
one another.
   Coverage properties of two-sided confidence intervals are rather different from
those in the one-sided case. For two-sided intervals, parity properties of polynomials
in expansions such as (4.25) cause terms of order n -1’2 to cancel completely from
expansions of coverage error. Therefore coverage error is always of order n-l or
 smaller, even for the most basic Normal approximation         method. In the case of
 symmetric two-sided intervals constructed using the percentile-t bootstrap, coverage
error is of order nm 2. The remainder     of the present section will treat two-sided
equal-tailed  intervals.
   We begin by recalling our definition of the general one-sided interval 9, = S,(U)
 whose nominal coverage is a:




The equal-tailed          interval     based on this scheme and having nominal                coverage     c1is


       -02(4=au                  +~))\A(+(1        -4)


                  =(~+n-1'2+t~-gl,2               +c^(,-01),2),~+n-"28(z(l+.,,2        +tcl+aj,2)).       (4.26)


(Here Y\$ denotes the intersection     of set 9 with the complement     of set 2.) Apply
Proposition  4.1 with z = zcl +aJ,2 = - zcl -ai,2, noting particularly that rj is an odd
or even function accordingly    as j is even or odd, to obtain an expansion        of the
coverage probability  of Y,(M):


       M z,n=Wo~.~2(4~


            =     @(~)+n-~~~r~(z)~(z)+n-'r,(z)~(z)+                      ...


                  -{@(-z)+n-"2                 rl(-z)qb-z)+n~1r2(-z)~(-z)+~~~}

            = cI + 2n-‘r,(z)+(z)              + 2nm2r,(z)q5(z) + ...

            = a + 2n-‘[q,(z)            + s2(z) - +z~~(z)~ + sl(z){zql(z)         - 4;(z))   - ql     +aj,2~l
                  x 4(z) + O(n          “).                                                               (4.27)

   The property of second-order       correctness, which as we have seen is equivalent to
s1 = ql, has relatively little effect on the coverage probability in (4.27). This contrasts
with the case of one-sided confidence intervals.
Ch. 39: Methodology             and Theory@            the Bootstrap                                     2375


   For percentile               confidence            intervals,

       s1=       --P11 =Pl                                                                             (4.28)


and


       s*(x)= P21W= Plc4P;w - +vl(4z - P2(X),                                                          (4.29)


while for percentile-t                   intervals,


       s1=       -q11=41
                                                                                                       (4.30)


and


       s2(4 = 421(x) = ql(x)q;b) - &%(x)2- q2(4.                                                       (4.3 1)

There is no significant simplification of (4.27) when (4.28) and (4.29) are used to
express s1 and s2. However, in the percentile-t case we see from (4.27), (4.30) and
(4.3 1) that

       a 2,n =    a -      2~     ‘a(,     +a)/2~(1     +or~,24(z~1   +al,2)   +   0W2L



which represents a substantial     simplification.
  When the asymptotic         variance c2 is known, our formula for equal-tailed,
two-sided, cc-level confidence intervals should be changed from that in (4.26) to

       (e+ n- “%zo                -aji2 + c*(r-aj,2), @+ n- 1’2+o                    +a)i2 + kc1+&),

for a suitable random function c^,.If c*,is given by (4.19) then the coverage probability
of this interval is given by (4.27), except that q should be changed to p at each
appearance in that formula. The value of a(, +6j,2 is unchanged.



4.7.    Simple linear regression


In previous sections we drew attention to important properties of the bootstrap in
a wide range of statistical problems. We stressed the importance      of pivoting. For
example, the coverage error of a one-sided percentile-t confidence interval is of size
n - ‘, but the coverage error of an uncorrected one-sided percentile interval is of size
n- 11.7
   The good performance     of a percentile-t interval is available in problems where
the variance of a parameter estimate may be estimated accurately. Many regression
2316                                                                                      P.Hall


problems are of this type. Thus, we might expect the endearing            properties    of
percentile-t to go over without change to the regression case. In a sense, this is true;
one-sided percentile-t confidence intervals for regression mean, intercept or slope
all have coverage error at most 0(X ‘), whereas their percentile method counterparts
generally only have coverage error of size n - ‘I2 However, this generalization
conceals several very important    differences in the case of slope estimation.      One-
sided percentile-t confidence intervals for slope have coverage error O(n 312), not
O(n-‘); and the error is only O(n-‘) in the case of two-sided intervals.
    These exceptional properties apply only to estimates of slope, not to estimates of
intercept or means. However, slope parameters        are particularly  important   in the
study of regression, and our interpretation    of slope is quite general. For example,
in the polynomial    regression model


       Yi=c+xidl      + . ..+x”dm+Ei.              ldidn,                                 (4.32)

we regard each dj as a slope parameter. A one-sided percentile-t confidence interval
for dj has coverage error O(n- 3’2), although a one-sided percentile-t interval for c
or for


       E(Ylx=x,)=c+x,d,+...+x;;d,


has coverage error of size n-‘.
   The reason that slope parameters have this distinctive           property is that the design
points xi confer a significant amount of extra symmetry.            Note that we may rewrite
the model (4.32) as


       Yi = C’ + (Xi - 5l)dl   + ‘..   +   (X” - 5,)d, + ‘i’     l,<idn,


where<j=nm’Cxiandc’=c+tldl+...                        + &,,d,. The extra symmetry   arises from
the fact that


                                                                                          (4.j3)
       i=l



For example, (4.33) implies that random          variables    Ci(xi - tj)$ and CE: are
uncorrelated   for each triple (j,k, I) of nonnegative     integers, and this symmetry
property is enough to establish the claimed performance of percentile-t confidence
intervals.
   We shall deal only with the simple linear regression model. Multivariate    problems
are similar in many respects, and the reader is referred to Chapter 4 of Hall (1992)
for a more general account in that context.
Ch. 39: Methodology    and Theory forthe Bootstrap                                                    2311


  The simple linear model is

     Yi= c + xid + .zi,              Ibid&

where c, d, xi, Yi, &iare scalars, c and d are unknown constants representing intercept
and slope, respectively, the ENSare independent       and identically distributed random
variables with zero mean and variance o’, and the xi’s are fixed design points. Put
&= ri- r-(Xi-$&X=n-‘Cxi,


     62&p;,                       fJ; = n- l t (Xi - X)2.
                                                  i=l




Then 6’ estimates           o’, and in this notation,


     8=cq2n-’ i              (Xi_X)(Yi_           Y),   c*= r-22,
                      i=l



are the usual least-squares estimates of c and d. Since ahas                  variance   It- ‘0; ‘CT’then
n”‘(&    d)a,/8 is (asymptotically)  pivotal. Define


     r* = e+ x,2+ E?,                    16idn,

where the 6:‘s are generated       by resampling   randomly    from the residuals ii.
Furthermore,   ?*, c?*, and 6* have the same formulae as ~2,d, and 8, except that Yi is
replaced by YF at each appearance of the former.
   Quantiles u, and u, of the distributions  of


     n”‘(d^ - d)o,/o           and       n”‘(d^ - d)a,/c?

may be defined by

     f’{n”‘(&     d)o,/a        < urn}= P{n”‘(&           d)o,.B   d ua}

                                         = cc.

and their bootstrap          estimates     12,and 0, by


     P{n”‘(iP - d^)g,/B< 22,l~} = P{n”‘(J*                   - &7,/6*      d 0,1X}

                                              = CY,

where X denotes the sample of pairs {(xl, Y,), . . . ,(x,, Y,)}. In this notation,
one-sided percentile and percentile-r bootstrap confidence intervals for d are given
2378                                                                                                 P. Hull


by
       r^,=(-co,li-n-“2a,1Bal_.),
       .T1=(-co,&--“‘a;‘80,_,)
respectively; compare Section 4.4. Each of these confidence intervals has nominal
coverage c(.The percentile-t interval _?i is the bootstrap version of an “ideal” interval

       J, =(-G0,d^-n-“2a,1Bvl_a).

Of course, each of the intervals has a two-sided counterpart.
   Recall our definition that a one-confidence     interval is second-order correct relative
to another if the (finite) endpoints of the intervals agree up to and including terms
of order (n - 1/2)2 = n- ‘; see Section 4.3. It comes as no surprise to find that j1 is
second-order     correct for J,, given what was learned in Section 4.5 about bootstrap
confidence intervals in more conventional           problems.    However, on the present
occasion r^, is also second-order     correct for J,, and that property is quite unusual.
It ari_ses because Edgeworth expansions of the distributions          of n’/‘(d^- d)a,/a and
n’12(d - Lt)a /c? contain identical terms of size n- l/2, that is, Studentizing        has no
effect on thexfirst term in the expansion. This is a consequence of the extra symmetry
conferred by the presence of the design points xi, as we shall show in the next
paragraph.     The reason why second-order           correctness    follows from identical
formulae for the n- 1’2 terms in expansions was made clear in Section 4.5.
   Assume that 0.: is bounded away from zero as n---f co, and that maxi ~ iG ,,(xi - Xl
is bounded as n -+ co. (In refined versions of the proof below, this boundedness
condition may be replaced by a moment condition on the design points xi, such as
sup& ‘C(xi - x-)” < co.) Put C= n- ‘C.q, and observe that


       82=ne1i~l~f=np1                   i     (ei_c_(Xi-_x)(&d)}2
                                        i=l



                                  =g2+n-’         i$l(Ef- 02)+ O,(n - 1).

Therefore,       defining        S = n”‘(d^ - c&,/c,                 T = n1j2(a - d)a,/~?, and


       A =+n-1a-2            i     (6: - g2),
                            i=l



we have

       T= S(l - d) + O,(n-‘)                  = S + 0,(n-112).                                       (4.34)

By making          use of the fact that X(xi - X) = 0 (this is where the extra                   symmetry
Ch. 3Y: Methodology     and Theory fiw the Bootstrap                                                        2379


conferred     by the design comes in) and of the representation


       s = n-%;lo-l             t    (Xi - X)Ci,
                               i=l



we may easily prove that E{ S( 1 - A)}’ - E(S) = O(n ‘) forj = 1,2,3. Therefore, the
first three cumulants   of S and S(l - A) agree up to and including terms of order
n- ‘I’. Higher-order cumulants are of size n- ’ or smaller. It follows that Edgeworth
expansions of the distributions    of S and S(l - A) differ only in terms of order 6 ‘.
In view of (4.34), the same is true for S and T,

       P(S < w) = P(T6          w) + O(n_ ‘).

(This step uses the delta method.) Therefore,                  Studentizing      has no effect on the fist
term in the expansion, as had to be proved.



References

Babu, G.J. and Singh, K. (1983) “Inference on Means Using the Bootstrap”,               Annals ofStatistics, 11,
   999-1003.
Babu, G.J. and Singh, K. (1984) “On One Term Correction by Efron’s Bootstrap”, Sankhya, Series A 46,
  219-232.
Babu, G.J. and Singh, K. (1985) “Edgeworth Expansions for Sampling without Replacement from Finite
   Populations”,    Journal of Multivariate Analysis, 17, 261-278.
Barnard, G.A. (1963) “Contribution       to Discussion”, Journal of the Royal Statistical Society, Series B,
   25, 294.
Beran, R. (1982) “Estimated       Sampling Distributions:     The Bootstrap     and Competitors”,      Annals of
   Statistics, 10, 212-225.
Beran, R. (1987) “Prepivoting    to Reduce Level Error of Confidence Sets”, Biometrika, 74.457-468.
Bhattacharya,     R.N. and Ghosh, J.K. (1978) “On the Validity of the Formal Edgeworth              Expansion”,
   Annals of Statistics, 6,434&451.
Bickel, P.J. and Freedman, D.A. (1980) “On Edgeworth          Expansions and the Bootstrap”.       Unpublished
  manuscript.
Bickel, P.J. and Freedman,      D.A. (1981) “Some Asymptotic          Theory for the Bootstrap”,       Annals of
   Statistics, 9, 1196-1217.
Bickel, P.J. and Freedman, D.A. (1983) Bootstrapping         Regression Models with Many Parameters”            in
   P.J. Bickel, K.A. Doksum, and J.C. Hodges, Jr., eds. A Festschrift for Erich L. Lehmann. Belmont:
  Wadsworth,      28-48.
Bose, A. (1988) “Edgeworth      Correction    by Bootstrap    in Autoregressions”,     Annals of Statistics, 16,
   170991722.
Carlstein, E. (1986) “The Use of Subseries Methods for Estimating the Variance of a General Statistic
  from a Stationary Time Series”, Annals of Statistics, 14, 1171-l 179.
Chibishov, D.M. (1972) “An Asymptotic         Expansion    for the Distribution    of a Statistic Admitting an
  Asymptotic Expansion”,      Theory of Probability and its Applications, 17, 620-630.
Chibishov, D.M. (1973a) “An Asymptotic Expansion for a Class of Estimators Containing                 Maximum
  Likelihood Estimators”,     Theory of Probability and its Applications, 18, 295-303.
Chibishov, D.M. (1973b) “An Asymptotic         Expansion for the Distribution      of Sums of a Special Form
  with an Application to Minimum-Contrast         Estimates”, Theory ofProbability      and its Applications, 18,
  &19-661.
Cox, D.R. and Hinkley, D.V. (1974) Theoretical Statistics. London: Chapman and Hall,
2380                                                                                                                P. Hall


 Davison, AC. and Hall, P. (1993) “On Studentizing                 and Blocking Methods for Implementing                 the
    Bootstrap with Dependent Data”, Australian Journal ofStaristics,              35, 215-224.
 Davison, A.C. and Hinkley, D.V. (1988) “Saddlepoint                  Approximations      in Resampling        Methods”,
    Biometrika, 15, 411-431.
 DiCiccio, T.J. and Romano, J.P. (1988) “A Review of Bootstrap Confidence Intervals (With Discussion)“,
    Journal oj the Royal Statistical Society, Series B 50, 338-354.
 Efron, B. (1979) “Bootstrap       Methods: Another Look at the Jackknife”, Annals ofStatistics,             7, l-26.
 Efron, B. (1983) “Estimating       the Error Rate of a Prediction Rule: Improvement             on Cross-Validation”,
    Journal ofthe American Statistical Association, 78, 316-331.
 Efron, B. (1987) “Better Bootstrap         Confidence Intervals (With Discussion)“, Journal of the American
    Statistical Association, 82, 171L200.
 Fisher, N.I. and Hall, P. (1991) “Bootstrap Algorithms for Small Samples. Journal ofStatistical PIanniny
    and Inference”, 21, 151- 169.
 Freedman, D.A. (198 1) “Bootstrapping          Regression Models”, Annals ofStatistics, 9, 1218-1228.
 Freedman,       D.A. and Peters, S.C. (1984) “Bootstrapping             a Regression    Equation:      Some Empirical
    Results”, Journal oJthe American Statistical Association, 79, 97-106.
 G&e, F. and Kiinsch, H.R. (1990) “Blockwise Bootstrap for Dependent Observations:                        Higher Order
    Approximations       for Studentized Statistics (Abstract)“, Bull. Inst. Math. Statist.. 19,443.
 Hall, P. (1985) “Resampling       a Coverage Process”, Stoch. Proc. Appl., 19,259-269.
 Hall, P. (1986) “On the Bootstrap and Confidence Intervals”, Annals ofstatistics,                 14, 1431-1452.
 Hall, P. (1988a) “Theoretical Comparison          of Bootstrap Confidence Intervals (With Discussion)“, Annals
    of Statistics, 16, 927-985.
 Hall, P. (1988b) “Unusual         Properties   of Bootstrap    Confidence     Intervals in Regression        Problems”,
    Probab. Theory Rel. Fields, 81, 247-273.
 Hall, P. (1992) The Bootstrap and Edgeworth Expansion. New York: Springer.
 Hall, P. and Horowitz, J.L. (1993) Corrections          and Blocking Rules for the Bootstrap with Dependent
    Data. Research Report no. CMA-SRI l-93, Centre for Mathematics                  and its Applications,      Australian
    National University.
Hall, P. and Martin, M.A. (1988) “On Bootstrap Resampling and Iteration”, Biometriku, 75, 661-671.
Hartigan, J.A. (1969) “Using Subsample Values as Typical Values”, Journal of the American Statistical
    Association, 64, 1303-1317.
Hartigan, J.A. (1971) “Error Analysis by Replaced Samples”, Journal of the Royal Statistical Society,
    Series B 33, 98-l 10.
Hinkley, D.V. (1988) “Bootstrap         Methods (With Discussion)“, Journal ofthe Royal Statistical Society,
    Series B 50, 321-337
Hope, A.C.A. (1968) “A Simplified Monte Carlo Significance Test Procedure”,                       Journal qf the Royal
    Statistical Society, Series B 30, 582-598.
Kendall, M.G. and Stuart, A. (1977) The Advanced Theory of Statistics. Vol 1, 4th three-volume                          Ed.
    London: Griffin.
Kiinsch, H.R. (1989) “The Jackknife and the Bootstrap for General Stationary                    Observations”,     Annals
   ofStatistics,    17, 1217-1241.
Lahiri, S.N. (1991) “Second Order Optimality               of Stationary    Bootstrap”,    Statistics and Probability
   Letters, 11, 335-341.
Lahiri, S.N. (1992) “Edgeworth          Correction     by ‘Moving Block’ Bootstrap         for Stationary      and Non-
   stationary Data”, in: Exploring the Limits ofthe Bootstrap. R. Lepage and L. Billard, eds., New York:
   Wiley, pp 183-214.
Liu, R.Y. and Singh, K. (1987) “0 n a Partial Correction              by the Bootstrap”,      Annals of Statistics, 15,
    1713-1718.
Lob, W.-Y. (I 987) “Calibrating       Confidence Coefficients”, Journal of the American Statistical Association,
   82, 155-162.
Marriott, F.H.C. (1979) “Barnard’s Monte Carlo Tests: How Many Simulations?“,                     Applied Statistics, 28,
   75-77.
Martin, M.A. (1989) On the Bootstrap and Confidence Intervals. Unpublished                     PhD thesis, Australian
   National University.
Peters, SC. and Freedman,           D.A. (1984a) “Bootstrapping        an Econometric       Model: Some Empirical
   Results”, J. Bus. Econ. Studies, 2, 150-158.
Ch. 39: Methodology     und Theory,for    the Bootstrap                                                       2381


Peters, S.C. and Freedman, D.A. (1984b) “Some Notes on the Bootstrap              in Regression Problems”, J.
   Bus. Econ. Studies, 2, 406-409.
Quenouille,    M.H. (1949) “Approximate        Tests of Correlation    in Time-Series”,   Journal of the Royal
   Statistical Association, Series B 11. 68-84.
Quenouille, M.H. (1956) “Notes on Bias in Estimation”,         Biometrika, 43, 353-360.
Reid, N. (1988) “Saddlepoint      Methods and Statistical Inference (With Discussion)“,         Statistic. Sci., 3,
   213-238.
Robinson, J. (1987) “Nonparametric      Confidence Intervals in Regression: The Bootstrap and Randomiza-
   tion Methods”, in: M.L. Puri, J.P. Vilaplana, and W. Wertz, eds., New Perspectives in Theoretical and
   Applied Statistics. New York: Wiley, pp 2433256.
Sargan, J.D. (1975) “Gram-Charlier          Approximations    Applied to t Ratios of k-Class Estimators”,
   Econometrica, 43, 3277346.
Sargan, J.D. (1976) “Econometric       Estimators   and the Edgeworth     Approximation”,     Econometrica, 44,
   421-448.
Simon, J.L. (1969) Basic Research Methods in Social Science. New York: Random House.
Singh, K.(1981)“0n      the Asymptotic Accuracy ofEfron’s Bootstrap”, Annalsofstatistics,        9,1187-l 195.
Tukey, J.W. (1958) “Bias and Confidence in Not-Quite         Large Samples (Abstract)“, Ann. Math. Statist.,
   29, 614.



---
normalized_id: shared-pdf-reference-wald-likelihood-ratio-and-lagrange-multiplier-tests-in-econometrics
exam_code: SHARED
material_scope: wald,likelihood ratio and lagrange multiplier tests in econometrics.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Wald,Likelihood Ratio and Lagrange Multiplier Tests in Econometrics.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-wald-likelihood-ratio-and-lagrange-multiplier-tests-in-econometrics

Chapter      13



WALD. LIKELIHOOD RATIO, AND LAGRANGE
MULTiPLIER TESTS IN ECONOMETRICS
ROBERT F. ENGLE*
University        of California




  Contents
  1.      Introduction                                                                             776
  2.      Definitions and intuitions                                                               776
  3.      A general formulation of Wald, Likelihood Ratio, and Lagrange
          Multiplier tests                                                                         780
  4.      Two simple examples                                                                      785
  5.      The linear hypothesis in generalized least squares models                                788
          5.1. The problem                                                                         788
          5.2. The test statistics                                                                 790
          5.3. The inequality                                                                      792
          5.4. A numerical example                                                                 793
          5.5. Instrumental variables                                                              794
  6. Asymptotic equivalence and optimality of the test statistics                                  796
  7. The Lagrange Multiplier test as a diagnostic                                                  801
  8. Lagrange Multiplier tests for non-spherical disturbances                                      802
          8.1. Testing for heteroscedasticity                                                      803
          8.2.       Serial correlation                                                            805
  9. Testing the specification of the mean in several complex models                               808
          9.1. Testing for non-linearities                                                         809
          9.2. Testing for common factor dynamics                                                  811
          9.3. Testing for exogeneity                                                              812
          9.4.       Discrete choice and truncated distributions                                   817
 10. Alternative testing procedures                                                                819
 11. Non-standard situations                                                                       822
 12. Conclusion                                                                                    824
 References                                                                                        825


    *Research supported by NSF SOC 78-09476 and 80-08580.


Handbook of Econometrics,    Volume II, Edited         by Z. Griliches   and M.D.   Intriligator
0 Elseoier Science Publishers BV. 1984
776                                                                        R. F. Engle




1.    Introduction

If the confrontation of economic theories with observable phenomena is the
objective of empirical research, then hypothesis testing is the primary tool of
analysis. To receive empirical verification, all theories must eventually be reduced
to a testable hypothesis. In the past several decades, least squares based tests have
functioned admirably for this purpose. More recently, the use of increasingly
complex statistical models has led to heavy reliance on maximum likelihood
methods for both estimation and testing. In such a setting only asymptotic
properties can be expected for estimators or tests. Often there are asymptotically
equivalent procedures which differ substantially in computational difficulty and
finite sample performance. Econometricians have responded enthusiastically to
this research challenge by devising a wide variety of tests for these complex
models.
   Most of the tests used are based either on the Wald, Likelihood Ratio or
Lagrange Multiplier principle. These three general principles have a certain
symmetry which has revolutionized the teaching of hypothesis tests and the
development of new procedures. Essentially, the Lagrange Multiplier approach
starts at the null and asks whether movement toward the alternative would be an
improvement, while the Wald approach starts at the alternative and considers
movement toward the null. The Likelihood ratio method compares the two
hypotheses directly on an equal basis. This chapter provides a unified develop-
ment of the three principles beginning with the likelihood functions. The proper-
ties of the tests and the relations between them are developed and their forms in a
variety of common testing situations are explained. Because the Wald and
Likelihood Ratio tests are relatively well known in econometrics, major emphasis
will be put upon the cases where Lagrange Multiplier tests are particularly
attractive. At the conclusion of the chapter, three other principles will be
compared: Neyman’s (1959) C(a) test, Durbin’s (1970) test procedure, and
Hausman’s (1978) specification test.


2.    Definitions and intuitions

Hypothesis testing concerns the question of whether data appear to favor or
disfavor a particular description of nature. Testing is inherently concerned with
one particular hypothesis which will be called the null hypothesis. If the data fall
into a particular region of the sample space called the critical region then the test
is said to reject the null hypothesis, otherwise it accepts. As there are only two
possible outcomes, an hypothesis testing problem is inherently much simpler than
Ch. 13: Wald, Likelihood   Ratio, and Lagrange   Multiplier   Tests                111


an estimation problem where there are a continuum of possible outcomes. It is
important to notice that both of these outcomes refer only to the null hypothesis
-we either reject or accept it. To be even more careful in terminology, we either
reject or fail to reject the null hypothesis. This makes it clear that the data may
not contain evidence against the null simply because they contain very little
information at all concerning the question being asked.
   As there are only two possible outcomes, there are only two ways to make
incorrect inferences. Type Z errors are committed when the null hypothesis is
falsely rejected, and Type ZZerrors occur when it is incorrectly accepted. For any
test we call a the size of the test which is the probability of Type I errors and p is
the probability of Type II errors. The power of a test is the probability of rejecting
the null when it is false, which is therefore 1 - /3.
   In comparing tests, the standard notion of optimality is based upon the size
and power. Within a class of tests, one is said to be best if it has the maximum
power (minimum probability of Type II error) among all tests with size (probabil-
ity of Type I error) less than or equal to some particular level.
   To make such conditions operational, it is necessary to specify how the data are
generated when the null hypothesis is false. This is the alternative hypothesis and
it is through careful choice of this alternative that tests take on the behavior
desired by the investigator. By specifying an alternative, the critical region can be
tailored to look for deviations from the null in the direction of the alternative. It
should be emphasized here that rejection of the null does not require accepting
the alternative. In particular, suppose some third hypothesis is the true one. It
may be that the test would still have some power to reject the null even though it
was not the optimal test against the hypothesis actually operating. Another case
in point might be where the data would reject the null hypothesis as being
implausible, but the alternative could be even more unlikely.
   As an example of the role of the alternative, consider the diagnostic problem
which is discussed later in Section 7. The null hypothesis is that the model is
correctly specified while the alternative is a particular type of problem such as
serial correlation. In this case, rejection of the model does not mean that a serial
correlation correction is the proper solution. There may be an omitted variable or
incorrect functional form which is responsible for the rejection. Thus the serial
correlation test has some power against omitted variables even though it is not the
optimal test against that particular alternative.
   TO make these notions more precise and set the stage for large sample results,
let y be a T X 1 random vector drawn from the joint density f(y, 6) where 8 is a
k X 1 vector of unknown parameters and 8 E 0, the parameter space. Under the
null B E 0, C 0 and under the alternative 8 E 0, E 0 with @,n@, = 9. Fre-
quently 0, = 0 - @a. Then for a critical region C,, the size (or is given by:

      a,=Pr(yEC,IflEO,).                                                          (I)
778                                                                           R. F. Engle

The power of the test is:

      n,(8)=Pr(yECrl@),           foreE@i.                                           (2)

Notice that although the power will generally depend upon the unknown parame-
ter 8, the size usually does not. In most problems where the null hypothesis is
composite (includes more than one possible value of 8) the class of tests is
restricted to those where the size does not depend upon the particular value of
8 E S,,. Such tests are called similar tests.
   Frequently, there are no tests whose size is calculable exactly or whose size is
independent of the point chosen within the null parameter space. In these cases,
the investigator may resort to asymptotic criteria of optimality for tests. Such an
approach may produce tests which have good finite sample properties and in fact,
if there exist exact tests, the asymptotic approach will generally produce them. Let
C, be a sequence of critical regions perhaps defined by a sequence of vectors of
statistics sr( JJ) 2 cr, where cr is a sequence of constant vectors. Then the limiting
size and power of the test are simply

      (Y= lim ar;         r(e)=    lim +(e),     foreGO,.                            (3)
          T+CZ                    T-LX


A test is called consistent if a(/?) = 1 for all 0 E 0,. That is, a consistent test will
always reject the null when it is false; Type II errors are eliminated for large
samples if a test is consistent.
   As most hypothesis tests are consistent, it remains important to choose among
them. This is done by examining the rate at which the power function approaches
its limiting value. The most common limiting argument is to consider the power
of the test to distinguish alternatives which are very close to the null. As the
sample grows, alternatives ever closer to the null can be detected by the test. The
power against such local alternatives for tests of fixed asymptotic size provides the
major criterion for the optimality of asymptotic tests.
   The vast majority of all testing problems in econometrics can be formulated in
terms of a partition of the parameter space into two sub-vectors 8 = (e;, 0;)’
where the null hypothesis specifies values, $’ for 8,, but leaves 0, unconstrained.
In a normal testing problem, 8, might be the mean and e, the variance, or in a
regression context, 8, might be several of the parameters while 0, includes the rest,
the variance and the serial correlation coefficient, if the model has been estimated
by Cochrane-Orcutt. Thus 8i includes the parameters of interest in the test.
   In this context, the null hypothesis is simply:


      Ho: 8, =   ep,   d2 unrestricted.                                             (4)
Ch. 13: Wuld, Likelihood   Ratio, and Lagrange Multiplier   Tests                 179

A sequence of local alternatives can be formulated as:

     H,:   e:= e,0 + 6/T”2,              6, unrestricted,                         (5)

for some vector 6. Although this alternative is obviously rather peculiar, it serves
to focus attention on the portion of the power curve which is most sensitive to the
quality of the test. The choice of 6 determines in what direction the test will seek
departures from the null hypothesis. Frequently, the investigator will chose a test
which is equally good in all directions 6, called an invariant test.
   It is in this context that the optimality of the likelihood ratio test can be
established as is done in Section 6. It is asymptotically locally most powerful
among all invariant tests. Frequently in this chapter the term asymptotically
optimal will be used to refer to this characterization. Any tests which have the
property that asymptotically they always agree if the data are generated by the
null or by a local alternative, will be termed asymptotically equivalent. Two tests
Et and t2 with the same critical values will be asymptotically equivalent if
plim 1El- t21= 0 for the null and local alternatives.
   Frequently in testing problems non-linear hypotheses such as g(8) = 0 are
considered where g is a p X 1 vector of functions defined on 0. Letting the true
value of 0 under the null be 8’, then g(e’) = 0. Assuming g has continuous first
derivatives, expand this in a Taylor series:

      g(e)=g(e0)+G(8)(e-e”),

where I? lies between 0 and 8’ and G( .) is the first derivative matrix of g. For the
null and local alternatives, 8 approaches 8’ so G(8) + G(f3’) = G and the
restriction is simply this linear hypothesis:

      Ge = GBO.

For any linear hypothesis one can always reparameterize by a linear non-singular
matrix A -‘8 = + such that this null is Ho:+I= &, C#I* unrestricted. To do this let
A, have K - p columns in the orthogonal complement of G so that GA, = 0. The
remaining p columns of A say A,, span the row space of G so that GA is
non-singular. Then the null becomes:

      GeO= Ge = GA+ = GA,+, + GA,+, = GA,@,,

or C#Q = $7 with I& = (GA,)-'Go'.
   Thus, for local alternatives there is no loss of generality in considering only
linear hypotheses, and in particular, hypotheses which have preassigned values for
a subset of the parameter vector.
780                                                                       R. F. Engle

3. A general formulation of Wald, Likelihood Ratio, and Lagrange
Multiplier tests

In this section the basic forms of the three tests will be given and interpreted.
Most of this material is familiar in the econometrics literature in Breusch and
Pagan (1980) or Savin (1976) and Bemdt and Savin (1977). Some new results and
intuitions will be offered. Throughout it will be assumed that the likelihood
function satisfies standard regularity conditions which allow two term Taylor
series expansions and the interchange of integral and derivative. In addition, it
will be assumed that the information matrix is non-singular, so that the parame-
ters are (locally) identified.
   The simplest testing problem assumes that the data y are generated by a joint
density function f( y, 0’) under the null hypothesis and by f( y, 0) with 0 E Rk
under the alternative. This is a test of a simple null against a composite
alternative. The log-likelihood is defined as:

                                                                                 (6)
which is maximized at a value 8 satisfying:




Defining s( ~9,v) = dL( 0, ~)/a0 as the score, the MLE sets the score to zero. The
variance of 8 is easily calculated as the inverse of Fisher’s Information, or

      V( 4) = Y-1( t?)/T,

      f(e)   = a-$$-(e)p.

If 8 has a limiting normal distribution, and if Y(e) is consistently estimated by
Y(8), then

      s,=~(B-eo)‘~(8)(8-8~)                                                      (8)
will have a limiting X2 distribution with k degrees of freedom when the null
hypothesis is true. This is the Wald test based upon Wald’s elegant (1943) analysis
of the general asymptotic testing problem. It is the asymptotic approximation to
the very familiar t and F tests in econometrics.
   The likelihood ratio test is based upon the difference between the maximum of
the likelihood under the null and under the alternative hypotheses. Under general
conditions, the statistic,

                                                                                 (9)
Ch. 13: Wuld, Likelihood   Ratio, and Lugrunge    Multiplier   Tests             781


can be shown to have a limiting X2 distribution under the null. Perhaps Wilks
(1938) was the first to derive this general limiting distribution.
   The Lagrange Multiplier test is derived from a constrained maximization
principle. Maximizing the log-likelihood subject to the constraint that 8 = 0’
yields a set of Lagrange Multipliers which measure the shadow price of the
constraint. If the price is high, the constraint should be rejected as inconsistent
with the data. Letting H be the Lagrangian:

      H=L(O,y)-A’(&fl’),

the first-order conditions are:

       a=     A.
                       8 = e”,
       de
      -=
                   3
so h = s(8’, y). Thus the test based upon the Lagrange Multipliers by Aitcheson
and Silvey (1958) and Silvey (1959) is identical to that based upon the score as
originally proposed by Rao (1948). In each case the distribution of the score is
easily found under the null since it will have mean zero and variance 9(8’)T.
Assuming a central limit theorem applies to the scores:

      tLM = d(eo,~)‘.e(eo)~(eo, Y)/T,                                           (10)
will again have a limiting X2 distribution with k degrees of freedom under the
null.
   The three principles are based on different statistics which measure the distance
between Ho and HI. The Wald test is formulated in terms of 0’ - 8, the LR test in
terms of L( O”)- L(d), and the LM test in terms of s( 0’). A geometric interpreta-
tion of these differences is useful.
   With k = 1, Figure 3.1 plots the log-likelihood function against 8 for a particu-
lar realization y.


                               ‘t




                                                 Figure 3.1
782                                                                       R. F. Engle


   The MLE under the alternative is 4 and the hypothesized value is 8’. The Wald
test is based upon the horizontal difference between 8’ and 8, the LR test is based
upon the vertical difference, and the LM test is based on the slope of the
likelihood function at 8’. Each is a reasonable measure of the distance between
HO and Hi and it is not surprising that when L is a smooth curve well
approximated by a quadratic, they all give the same test. This is established in
Lemma 1.

Lemma I
If L = b - l/2(8 - 8)3(~9 - 8) where A is a symmetric positive definite matrix
which may depend upon the data and upon known parameters, b is a scalar and 8
is a function of the data, then the W, LR and LM tests are identical.
Proof


      ix/as=-(e-B)‘A=s(e),
      a2L/ae    ae f = - A = - T9.

Thus:

        r;,=(e”-e)‘A(60-B),

      tLM = @‘)‘A-‘~(8’)

           = (e”   - @‘A(O’-   8).

Finally, by direct substitution:

      c&,=(8’-@‘A(B’-8).             Q.E.D.

   Whenever the true value of 8 is equal or close to do, then the likelihood
function in the neighborhood of 8’ will be approximately quadratic for large
samples, with A depending only on 8’. This is the source of the asymptotic
equivalence of the tests for local alternatives and under the null which will be
discussed in more detail in Section 6.
   In the more common case where the null hypothesis is composite so that only a
subset of the parameters are fixed under the null, similar formulae for the test
statistics are available. Let 8 = (e;, 0;)’ and 8 = (&‘, 8;)’ where 0, is a k, x 1
vector of parameters specified under the null hypothesis to be 8:. The remaining
parameters f3, are unrestricted under both the null and the alternative. The
maximum likelihood estimate of 0, under the null is denoted 8, and 8 = (OF’, 6;)‘.
Ch. 13: Wald, Likelihood Ratio, and Lagrange Multiplier Tests                    183


Denote by Sii        the partitioned inverse of 9 so that:

        9 11-*
             = ,a,, - Y12.&y21.
Then the Wald test is simply:

        .$w = T( 8, - e$P-‘(       6, - ep>,                                    w

which has a limiting X2 distribution with k, degrees of freedom when HO is true.
The LR statistic,

        &_a= -2(U&Y)-N4Y)),                                                     02)
has the same limiting distribution.            The LM test is again derived from the
Lagrangian:

        H=L(O,y)-x(6,-B;),

which has first-order conditions:




Thus:



        tLM = s(& yp-‘(iQ@,            y)/T==s,(8,       y)‘Ps,(8,   y)/T,      (13)
is the LM statistic which will again have a limiting X2 distribution with k, degrees
of freedom under the null. In Lemma 2 it is shown that again for the quadratic
likelihood function, all three tests are identical.

Lemma      2
If the likelihood function is given as in Lemma 1 then the tests in (ll), (12), and
(13) are identical.
Proof

        5w=(eP-~1)‘~ii-1(e,0-81)
            = (ep - 8,)‘( A,, - A,,AglA,,)(        e,0 - 8,).
784                                                                        R. F. Engle


For the other two tests, 8, must be estimated. This is done simply by setting
Sz( 8, y) = 0:

                                      A,,(4 - 4)+4,(& - 4)
        Sl d&A(&B)=
      i s2i                         [ A,,(8,-8,)+‘4,,(8,-8,)    1=O.
So, S, = 0 implies:

      ez- 4, = - A&4&9i         - 6,).

The concentrated likelihood function becomes:

      L = b-   $(e, - b,)‘( A,, - A,*A,?4,,)(e,-   e,>,
and hence



Finally, the score is given by:

      s,(e)=A,,(eP_8,)+A,,(8,-8,)

             = (4,    - 424XJel”         - 4).

so
      tLM = (0; - 8,)‘( A,, -    A,,A,?4,,)( 0; - 8,). Q.E.D.
   Examination of the tests in (ll), (12), and (13) indicates that neither the test
statistic nor its limiting distribution under the null depends upon the value of the
nuisance parameters 0,. Thus the tests are (asymptotically) similar. It is apparent
from the form of the tests as well as the proof of the lemma, that an alternative
way to derive the tests is to first concentrate the likelihood function with respect
to 6, and then apply the test for a simple null directly. This approach makes clear
that by construction the tests will not depend upon the true value of the nuisance
parameters. If the parameter vector has a joint normal limiting distribution, then
the marginal distribution with respect to the parameters of interest will also be
normal and the critical region will not depend upon the nuisance parameters
either. Under general conditions therefore, the Wald, Likelihood Ratio and
Lagrange Multiplier tests will be (asymptotically) similar.
   As was described above, each of the tests can be thought of as depending on a
statistic which measures deviations between the null and alternative hypotheses,
Ch. 13: Wuld, Likelihood   Ratio. and Lagrange   Multiplier   Tests                  785


and its distribution when the null is true. For example, the LM test is based upon
the score whose limiting distribution is generally normal with variance (O’).T
under the null. However, it is frequently easier to obtain the limiting distribution
of the score in some other fashion and base the test on this. If a matrix V can be
found so that:

      T-“2s( do, y) : N(0, V)


under H,, then the test is simply:


      z&    = s’V- ‘s/T.


Under certain non-standard situations V may not equal 9 but in general it will.
This is the approach taken by Engle (1982) which gives some test statistics very
easily in complex problems.


4.   Two simple examples

In these two examples, exact tests are available for comparison with the asymp-
totic tests under consideration.
   Consider a set of T independent observations on a Bernoulli random variable
which takes on the values:

              1,    with probability 8,
      ’ =     0,    with probability 1 - 0.                                        (14)


The investigator wishes to test 8 = 8’ against 8 # 0’ for 8 E (0,l). The mean
j = cy,/T      is a sufficient statistic for this problem and will figure prominently in
 the solution.
   The log-likelihood function is given by:




with the maximum likelihood estimator, 8 = 7. The score is:


      0,     Y) =   e(llg)C(YtBe).
                          t
786                                                                                      R. F. Engle

Notice       that   y, -   8 is analogous      to the “residual” of the fit. The information is:



                                                                       1/
                           Te(1-8)+(1-2e)c(y,-e)                        T
         9(d) = E
                                      e*(i- e)’
                           1
                    = e(i-e>.

The Wald test is given by:

         tw = T( 80 - 7)*/j+ - Y).                                                             (16)
The LM test is:

         E     =        Q,-00)        *eO(i-e”)
          LM
                    I
                        eo(i- eo)1             T         ’


which is simply:

         cLM = T( e” -         j)*p”(i - e”).                                                  (17)

Both clearly have a limiting &i-square distribution with one degree of freedom.
They differ in that the LM test uses an estimate of the variance under the null
whereas the Wald uses an estimate under the alternative. When the null is true (or
a local alternative) these will have the same probability limit and thus for large
samples the tests will be equivalent. If the alternative is not close to the null, then
presumably both tests would reject with very high probability for large samples;
the asymptotic behavior of tests for non-local alternatives is usually not of
particular interest.
   The likelihood ratio test statistic is given by:

         tLR = 2T{ ji0gjyeO            + (I-       p)iog(i   - j)/(i   - eo)},                 08)
which has a less obvious limiting distribution and is slightly more awkward to
calculate. A two-term Taylor series expansion of the statistic about jj = B”
establishes that under the null the three will have the same distribution.
   In each case, the test statistic is based upon the sufficient statisticy. In fact, in
each case the test is a monotonic function of jj and therefore, the limiting chi
squared approximation is not necessary. For each test statistic, the exact critical
values can be calculated. Consequently, when the sizes of the tests are equal their
critical regions will be identical; they will each reject for large values of (J - do)*.
Ch. 13: Wald, Ltkelihood   Ratio, and Lugrange   Multiplier   Tests              781

The notion of how large it should be will be determined from the exact Binomial
tables.
   The second example is more useful to economists but has a similar result. In
the classical linear regression problem, the test statistics are different, however,
when corrected to have the same size they are identical for finite samples as well
as asymptotically.
   Let y* and x* be T x 1 and T X k matrices satisfying:

     Y* Ix* - N( x*p, dz),                                                      09)

and consider testing the hypothesis that R/3 = r where R is a k, x k matrix of
known constants and r is a k, X 1 vector of constants. If R has rank k,, then the
parameters and the data can always be rearranged so that the test is of omitted
variable form. That is, (19) can be reparameterized in the notation of (4) as:

     ylx -    N(xB, a2z),                                                       (20)
where the null hypothesis is 8, = 0 and y and x are linear combinations of y* and
x*. In this particular problem it is just as easy to use (19) as (20); however, in
others the latter form will be simpler. The intuitions are easier when the
parameters of R and r do not appear explicitly in the test statistics. Furthermore,
(20) is most often the way the test is calculated to take advantage of packaged
computer programs since it involves running regressions with and without the
variables xi.
   For the model in (20) the log-likelihood conditional on x is:


                                                                                (21)

where k is a constant. If u2 were known, Lemmas 1 and 2 would guarantee that
the W, LR, and LM tests would be identical. Hence, the important difference
between the test statistics will be the estimate of u*. The score and information
matrix corresponding to the parameters 8 are:

     #(e, y) = x~u/u*;              u= y-xc,

     ,a,,= x’x/u=T,                                                             (24
and the information matrix is block diagonal between t? and u*. Notice that the
score is proportional to the correlation coefficient between the residuals and the x
variables. This is of course zero at 4 but not at the estimates under the null, 8.
788                                                                          R. F. En&

     The three test statistics therefore are:


       &v=(eW,)‘(xix1 - x;xJ xix,) -‘x;x,)( ep- 8,)/b2,                           (23)

       tLM = ir’x,( &Xl - x;xz (x;x,)    %;x,)   ~ 1x$/62,                        (24)

       t& = Tlog( ii’fi/ii%),                                                     (25)

whereic=y-xB,ii=y-~e,and8~=~‘a/T,~’=-‘^                u u/T, and x is conforma-
bly partitioned as x = (xi, x2). From the linear algebra of projections, these can
be rewritten as:

       &    = T(i2’ii - ii’ic)/ir%,                                               (26)
       ELM= T( ii’& - ii’ii)/iYii.                                                (27)

This implies that:

       ~m=Tlodl+WT);                      = <w/(1+ (w/T)>
                                        CLM
and that (T - K)[,/TK,         will have an exact Fk,,T_k distribution under the null.
As all the test statistics are monotonic functions of the F statistic, then exact tests
for each would produce identical critical regions. If, however, the asymptotic
distribution is used to determine the critical values, then the tests will differ for
finite samples and there may be conflicts between their conclusions. Evans and
Savin (1980) calculate the probabilities of such conflicts for the test in (23)-(25)
as well as for those modified either by a degree of freedom correction or by an
Edgeworth expansion correction. In the latter case, the sizes are nearly correct
and the probability of conflict is nearly zero. It is not clear how these conclusions
generalize to models for which there are no exact results but similar conclusions
might be expected. See Rothenberg (1980) for some evidence for the equivalence
of the tests for Edgeworth expansions to powers of l/T.


5.     The linear hypothesis in generalized least squares models


5.1.       The problem

In the two preceding examples, there was no reason to appeal to asymptotic
approximations for test statistics. However, if the assumptions are relaxed slightly,
then the exact tests are no longer available. For example, if the variables were
Ch. 13: Wuld, Likelrhood Ratio, and Lugrunge Multiplier Tests                            189

simply assumed contemporaneously             uncorrelated with the disturbances as in:

     Y,Ix, - IN(x,P, a2),                                                            (28)

where IN means independent normal, then the likelihood would be identical but
the test statistics would not be proportional to an F distributed random variable.
Thus, inclusion of lagged dependent variables or other predetermined variables
would bring asymptotic criteria to the forefront in choosing a test statistic and
any of the three would be reasonable candidates as would the standard F
approximations. Similarly, if the distribution of y is not known to be normal, a
central limit theorem will be required to find the distribution of the test statistics
and therefore only asymptotic tests will be available.
   The important case to be discussed in this section is testing a linear hypothesis
when the model is a generalized least squares model with unknown parameters in
the covariance matrix. Suppose:

     ylx -   N(xfi,u2Q),           ii?=G(w),                                         (29)

where w is a finite estimable parameter vector. The model has been formulated so
that the hypothesis to be tested is Ha: fii = 0, where p = (pi, /3;)’ and x is
conformally partitioned as x = (xi, x2). The collection of parameters is now
e = (p;, p;, (72,w’)‘.
    A large number of econometric problems fit into this framework. In simple
linear regression the standard heteroscedasticity and serial correlation covariance
matrices have this form. More generally if ARMA processes are assumed for the
disturbances or they are fit with spectral methods assuming only a general
stationary structure as in Engle (1980), the same analysis will apply. From pooled
time series of cross sections, variance component structures often arise which have
this form. To an extent which is discussed below, instrumental variables estima-
 tion can be described in this framework. Letting X be the matrix of all
instruments, X( X’X))‘X’ has no unknown parameters but acts like a singular
covariance matrix. Because it is an idempotent matrix, its generalized inverse is
just the matrix itself, and therefore many of the same results will apply.
    For systems of equations, a similar structure is often available. By stacking the
dependent variables in a single dependent vector and conformably stacking the
independent variables and the coefficient vectors, the covariance matrix of a
 seemingly unrelated regression problem (SUR) will have a form satisfied by (29).
In terms of tensor products this covariance matrix is 52= z@Z, where 2 is the
contemporaneous covariance matrix. Of course more general structures are also
appropriate. The three stage least squares estimator also is closely related to this
analysis with a covariance matrix D = 2~3 X( X’X))‘X’.
790                                                                             R. F. Engle

52.    The test statistics

The likelihood function implied by (29) is given by:
                     T
    L(B,y)=k-~log~‘-jlog(S21-~(Y-xp)’S2-’(y-*B).                                     (30)

Under these assumptions it can be shown that the information matrix is block
diagonal between the parameters /3 and (a*, 0). Therefore attention can be
confined to the /3 components of the score and information. These are given by:

      S&(&Y) = x;fi-‘u/P*,               u=y-xp,                                     (31)
      _aba(fl) = xX-‘x/o*T.                                                          (32)
Penoie the maximum likelihood estimates of the parameters under HI by
13= (/I, 8*, &) and let 52= 52(&); denote the maximum likelihood estimates of the
same parameters under the null as # = (p, G2, 0) and let A?= a( ij). Further, let
2 = y - xfi and ii = y - x& be residuals under the alternative and the null.
  Then substituting into (ll), (12), and (13), the test statistics are simply:

      tw =&(x;S-lx,          -x;b-~x,(x;B~x2)-1X;O-1X,)~~/~*,                        (33)
      &a=   -2(L(&        Y)-wt       Y)),                                           (34)

      #$rM= a%-‘xt(x$-lx,           -x;ji-‘x2(x;h~‘x2)-1x;j2-~x,)-1x~~-~~/~*.

                                                                                     (35)
   The Wald statistic can be recognized as simply the F or squared t statistic
commonly computed by a GLS regression (except for finite sample degree of
freedom corrections). This illustrates that for testing one parameter, the square
root of these statistics with the appropriate sign would be the best statistic since it
would allow one tailed tests if these are desired.
   It is well known that the Wald test statistic can be calculated by running two
regressions just as in (26). Care must however be taken to use the same metric
(estimate of a) for both the restricted and the unrestricted regressions. The
residuals from the unrestricted regression using fi as the covariance matrix are the
ic, however, the residuals from the restricted regression using b are not ir. Let
them be denoted uol indicating the model under Ho with the covariance matrix
under Hr. Thus, uol = y - x2/?f1 is calculated assuming b is a known matrix. The
Wald statistic can equivalently be written as:

      <w = T(ua”ji-‘uo’       _ &‘fi-‘c)/f’jZ-‘fi.
                                                                                     (36)
Ch. 13: Wald, Likelihood Ratio, and Lagrange Multiplier Tests                                      791

  The LM statistic can also be written in several different forms some of which
may be particularly convenient. Three different versions will be given below.
  Because f’&‘x, = 0 by the definition of fi, the LM statistic is more simply
written as:




This can be interpreted as T times the R2 of a regression where ii is the dependent
variable, x is the set of independent variables and ~?5’is the covariance matrix of
the disturbances which is assumed known. From the formula it is clear that this
should be the R* calculated as the explained sum of squares over the total sum of
squares. This is in contrast to the more conventional measure where these sums of
squares are about the means. Furthermore, it is clear that the data should first be
transformed by a matrix P such that P'P= A?-',     and then the auxiliary regression
and R* calculated. As there may be ambiguities in the definition of R2 when 0 # Z
and when there is no intercept in the regression, let Rg represent the figure
implied by (37). Then:

       tLM=TR;.                                                                                   (38)

In most cases and for most computer packages Ri will be the conventionally
measured R*.In particular when Px includes an intercept under ZZ,, then Pic
will have a zero mean so that the centered and uncentered sums of squares will be
equal. Thus, if the software first transforms the data by P, the R* will be R&
   A second way to rewrite the LM statistic is available along the lines of (27). Let
ul’ be the residuals from a regression of y on the unrestricted model using fi as
the covariance matrix, so that alo = y - x/I lo . Then the LM statistic is simply:

       &,, = T( ii’&‘ii                 - ,lo~~-l,lo)/ii’ji-l~~                                   (39)

  A statistic which differs only slightly from the LM statistic comes naturally out
of the auxiliary regression. The squared t or F statistics associated with the
variables x1 in the auxillary regressions of ii on x using fi are of interest. Letting:

       A = x;D-lx,             - x;o-1x2(x;~-1x2)-‘x;nl,,,

then

       pl0   =   (x’fi-lx)~‘x’ji-lfi,




or the first elements /3i” = A-‘~$~‘ti.                           The F statistic aside from degree of
freedom corrections is given by:
       &   = @‘Afi;O/a2(‘0)
           = n,b~‘x,A~‘x;~-‘~/a2(‘0),                                            (40)
where crzoo) is the residual variance from this estimation. From (35) it is clear that
tLM = ctM if e2(lo) z fi2. The tests will differ when x1 explains some of 8, that is,
when Ho is not true. Hence, under the null and local alternatives, these two
variances will have the same probability limit and therefore the tests will have the
same limiting distribution. Furthermore, adding a linear combination of regres-
sors to both sides of a regression will not change the coefficients or the signifi-
cance of other regressors. In particular adding x2& to both sides of the auxiliary
regression converts the dependent variable to y and yet will not change [tM.
Hence, the t or F tests obtained from regressing y on x1 and x2 using fi will be
asymptotically equivalent to the LM test.


5.3.   The inequality

The relationship between the Wald and LM tests in this context is now clearly
visible in terms of the choice of 52 to use for the test. The Wald test uses b while
the LM test uses fi and the Likelihood Ratio test uses both. As the properties of
the tests differ only for finite samples, frequently computational considerations
will determine which to use. The primary computational differences stem from the
estimation of D which may require non-linear or other iterative procedures. It
may further require some specification search over a class of possible disturbance
specifications. The issue therefore hinges upon whether fi or fi is already
available from previous calculations. If the null hypothesis has already been
estimated and the investigator is trying to determine whether an additional
variable belongs in the model in the spirit of diagnostic testing, then ji is already
estimated and the LM test is easier. If on the other hand, the more general model
has been estimated, and the test is for a simplification or a test of a theory which
predicts the importance of some variable, then b is available and the Wald test is
easier. In rare cases will the LR test be computationally easier.
   The three test statistics differ for finite samples but are asymptotically equiva-
lent. When the critical regions are calculated from the limiting distributions, then
there may be conflicts in inference between the tests. The surprising character of
this conflict is pointed out by a numerical inequality among the test statistics. It
was originally established by Savin (1976) and Berndt and Savin (1977) for
special cases of (29) and then by Breusch (1979) in the general case of (29). For
any data set y, x, the three test statistics will satisfy the following inequality:

                                                                                 (41)
Ch. 13: Wald, Likehhood Ratio, und Lagrange Multiplier Tests                               193

   Therefore, whenever the LM test rejects, so will the others and whenever the W
fails to reject, so do the others. The inequality, however, has nothing to say about
the relative merits of the tests because it applies under the null as well. That is, if
the Wald test has a size of 58, then the LR and LM test will have a size less than
5%. Hence their apparently inferior power performance is simply a result of a
more conservative size. When the sizes are corrected to be the same, there is no
longer a simple inequality relationship on the powers. As mentioned earlier, both
Rothenberg (1979) and Evans and Savin (1982) present results that when the sizes
are approximately corrected, the powers are approximately the same.


5.4.    A numerical example

As an example, consider an equation presented in Engle (1978) which explains
employment in Boston’s textile industry as a function of the U.S. demand and
prices, the stock of fixed factors in Boston and the Boston wage rate. The
equation is a reduced form derived from a simple production model with capital
as a fixed factor and a constant price elasticity of demand. The variables are
specific combinations of logarithms of the original data. Denote the dependent
variable by y, and the independent variables by x1, x2 and a constant. The
hypothesis to be tested is whether a time trend should also be introduced to allow
technical progress in the sector. There is substantial serial correlation in the
disturbance and several methods of parameterizing it are given in the original
paper; however, it will here be assumed to follow a first-order autoregressive
process. There are 22 annual observations.
   The basic estimate of the relation is:

       jj = 4.4 + 0.165~~ + 0.669x, ;           p = 0.901,     R2 = 0.339.
           (0.92)    (2.45)       (3.11)


The estimate is not particularly good but it has the right signs and significant
t-statistics. Rho was estimated by searching over the unit interval and the estimate
is maximum likelihood.
   The residuals from this estimate were then regressed upon the expanded set of
regressors, to obtain:

       ii = 49.2 - 0.185~~ - 0.045~~ - 0.025 time;             p = 0.901,    R2 = 0.171.
            (1.90) (-1.61)    ( - 0.22) (1.93)


The same value of rho was imposed upon this estimate. The Lagrange Multiplier
statistic is (22) (0.171) = 3.76 which is slightly below the 95% level for X:(3.84)
but above the 90% level (2.71) so it rejects at 90% but not 95%. Notice that the
f-statistic on time is not significant at 95% but is at the 90% level.
Ch. 13: Wald, Likelihood   Ratio, and Lagrange Multiplier   Tests                  195


where B = (z’Gz)-‘z’Gy, ic = y - zb, 8* = ii’ii/T. This expression is identical to
that in (36) except that the estimates of a* are different. In (36) G2 = ti’Jz-‘i2/T
instead of ti’ii/T. Following the line of reasoning leading to (37) the numerator
can be rewritten in terms of the residuals from a restricted regression using the
same G matrix. Letting fi2 = (z;Gz,)-‘z;Gy and P = y - z2p2, the statistic can be
expressed as:

     &, = T(ii'Gii
               - i’Gir)/Ui.                                                      (44
Because G is idempotent, the two sums of squares in the numerator can be
calculated by regressing the corresponding residuals on X and looking at the
explained sums of squares. Their difference is also available as the difference
between the sums of squared residuals from the second stages of the relevant
2SLS regressions.
   As long as the instrument list is unchanged from the null to the alternative
hypothesis, there is no difficulty formulating this test. If the list does change then
the Wald test appropriately uses the list under the alternative. One might suspect
that a similar LM test would be available using the more limited set of instru-
ments, however, this is not the case at least in this simple form. When the
instruments are different, the LM test can be computed as given in Engle (1979a)
but does not have the desired simple form.
   In the more general case where (42) represents a stacked set of simultaneous
equations the covariance would in general be given by Z@Z, where 2 is the
contemporaneous covariance matrix. The instruments in the stacked system can
be formulated as I@ X and therefore letting 2 be the estimated covariance matrix
under the alternative, the 3SLS estimator can be written letting G =2@
X( X’X))‘X’ as:

     jl= (z'Gz)-'t'Gy.

Again, through the equivalence with FIML, the approximate Wald test is:

     [;, = &( z;Gz, - z;Gz, (z;Gz,)           - lz;Gzl)&,

which can be reformulated as:

         = T( C’Gii - 2Gii).

Notice that 8* has disappeared from the test statistic as it is incorporated in G
through 2. Again this difference is equal to the difference between the sums of
squared residuals in the restricted and unrestricted third stage of 3SLS.
196                                                                        R. F.Engle

6.    Asymptotic equivalence and optimal@ of the test statistics

In this section the asymptotic equivalence, the limiting distributions and the
asymptotic optimality of the three test statistic will be established under the
conditions of Crowder (1976). These rather weak conditions allow some depen-
dence of the observations and do not require that they be identically distributed.
Most econometric problems will be encompassed under these assumptions. Al-
though it is widely believed that these tests are optima1 in some sense, the
discussion in this section is designed to establish their properties under a set of
regularity conditions.
   The log likelihood function assumed by Crowder allows for general dependence
of the random variables and for some types of stochastic or deterministic
exogenous variables. Let Y,, Y,, ...,Y, be p x 1 vectors of random variables
which have known conditional probability density functions f,( YIq_ i; e), where
8 E 0 an open subset of Rk and .F_t is the u field generated by Y,,..., Y-t, the
“previous history”. The log-likelihood conditional on Ye is:

                    T

      L,(y;   e,= c l”gf,(y,I~-,&.                                              (45)
                   r=l


In this expression, non-stochastic variables enter through the time subscript on f
which allows each random vector to be distributed differently. Stochastic varia-
bles which appear in conditioning sets can also be included within this framework
if they satisfy the assumptions of weak exogeneity as defined by Engle, Hendry
and Richard (1983). Let Y,= (y,, x,), where the parameters of the conditional
distribution of y given x, g,( y,lx,, q_ t, 13) are of interest. Then expressing the
density of x as h,(x,l$_ i, (p) for some parameters +, the log-likelihood function
can be written as:




If + is irrelevant to the analysis, then x, is weakly exogenous. The information
matrix will clearly be block diagonal between 8 and + and the MLE of 0 will be
obtained just by maximizing the first sum with respect to 8. Therefore, if the
log-likelihood L, satisfies Crowder’s assumptions, then the conditional log-likeli-
hood,


      L*,b, x, 0) = i hdw,,           e-d),
                         t=1
Ch. 13: Wuld, Likelihood   Ratio, and Lagrange   Multiplier   Tests              797


also will. Notice that this result requires only that x be weakly exogenous; it need
not be strongly exogenous and can therefore depend upon past values of y.
   The GLS models of Section 5 can now also be written in this framework.
Letting P’P = 52-l for any value of o, rewrite the model with y* = Py, x* = Px
so that:

     y* 1x* -    N( x*p,dz)

The parameters of interest are now /?, a2 and w. If the x were fixed constants,
then so will be the x*. If the x were stochastic strongly exogenous variables as
implied by (29), then so will be x *. The density h(x, $) will become h*(x*, rp, o)
but unless there is some strong a priori structure on h, w will not enter h*. If the
covariance structure is due to serial correlation then rewriting the model condi-
tional on the past will transform it directly into the Crowder framework regard-
less of whether the model is already dynamic or not.
   Based on (45), the score, Hessian and information matrix are defined by:


       s,(yJ)      =   aL(ays.e)
                            )


      MY4          =   g&(y,B),

Notice that the information matrix depends upon the sample size because the y,“s
are not identically distributed.
   The essential conditions assumed by Crowder are:

   (a) the true 8,8*, is an interior point of 0;
   (b) the Hessian matrix is a continuous function of B in a neighborhood
       0f e*;
   (c) qe*)     is non-singular;
   (d) plim (Y;‘(e)H,(     y, tY)/r) = I for 8 in a neighborhood of 8*; and
   (e) a condition such that no term in yt dominates the sum to T.

   Suppose the hypothesis to be tested is He: 8 = 8’ while the alternative is Hi:
8 = OT where plim T1/*(OT- 0’) = 6 for some vector 6.
   Under these assumptions the maximum likelihood estimator of 8, fi exists and
is consistent with a limiting normal density given by:

      T1/29+/2(e*)(d        -e*)    3 ~(0, I)                                  (47)
798                                                                      R. F. Engle

Mean Value Taylor series expansions can be written as:

        L(B,y)=L(B,y)-~(B-B)/A,(B,B)(B-~),
      sr(e,y)=-TA,(e,8)(e-8),                                                 (48)

where T[A,(8,8)],,    = [ Hr(8)]i, and 8 E (0, e) possibly at different points for
different (i, j). From (48) the Likelihood Ratio test is simply:

      tLR = T(~O- ~)‘~,(e”,d)(eo        - $1,
and the Wald test is:

      tw = z-(e” - SpT(J)(eo        - 4).
Thus,

      slim ItLR-15,1=p~m(T(B”-B)‘(~,(e0,8)-~~(8))(e0-~)~.
The plim of the middle terms is zero for 8* = 8’ and for the sequence of local
alternatives since again plim or= 8’. The terms T’/*(s - 0’) will converge in
distribution under both Ho and HI and therefore the product converges in
probability to zero under Ho and Ht. Thus &a and [w have the same limiting
distributions. Similarly, from (48) and (10):

      tLM = n,(fc     .4’ww1~T(~O~V)
          = z-(eO - 8)‘A,(e0,B)~~(eo)-‘A,(eo,8)(e0          - 81,
and by the same argument plim (cLR - cLM( = 0 for Ho and local alternatives.
Thus we have the following theorem:

Theorem I
Under the assumptions in Crowder (1976), the Wald, Likelihood Ratio and
Lagrange Multiplier test statistics have the same limiting distribution when the
null hypothesis or local alternative are true.

  Another way to describe this result is to rewrite (48) as:



                                                                             (49)
Ch. 13: Wald, Likelihood Ratio, and Lagrange Multiplier Tests                       199

where O,(l) refers to the remainder terms which vanish in probability for ZZ, and
local alternatives. Thus, asymptotically the likelihood is exactly quadratic and
Lemmas 1 and 2 establish that the tests are all the same. Furthermore, (49)
establishes that 8 is asymptotically sufficient for 8. To see this more clearly,
rewrite the joint density of y as:




and notice that by the factorization theorem, 8 is sufficient for 8 as long as y does
not enter the exponent which will be true asymptotically.
   Finally, because 8 has a limiting normal distribution, with a known covariance
matrix Y(@)‘,       all the testing results for hypotheses on the mean vector of a
multivariate normal, now apply asymptotically by considering 4 as the data.
   To explore the nature of this optimality, suppose that the likelihood function in
(49) is exact without the O,(l) term. Then several results are immediately
apparent. If 8 is one dimensional, uniformly most powerful (UMP) tests will exist
against one sided alternatives and UMP unbiased (UMPU) tests will exist against
two sided alternatives.
   If 8 = (ei, 6,) where 8, is a scalar hypothesized to have value Z_$’
                                                                      under Ho but 0,
are unrestricted, then UMP similar or UMPU tests are available.
   When 8, is multivariate, an invariance criterion must be added. In testing the
hypothesis p = 0 in the canonical model V - N( CL,Z), there is a natural invariance
with respect to rotations of V. If v= DV, where D is an orthogonal matrix, then
the testing problem is unchanged so that a test should be invariant to whether I/
or v are given. Essentially, this invariance says that the test should not depend on
which order the V’s are in; it should be equally sensitive to deviations in all
directions. The maximally invariant statistic in this problem is cK* which means
that any test which is to be invariant can be based upon this statistic. Under the
assumptions of the model, this will be distributed as Xi(A) with non-centrality
parameter h = p’p. The Neyman-Pearson           lemma therefore establishes that the
uniformly most powerful invariant test would be based upon a critical region:

      c= (CLy>c}.

  To rewrite (49) in this form, let $r(i90))’          = P’P and V= P(8 - do). Then the
maximal invariant is

      ~(8 - e”pT(eo)@           - e”)

which is distributed as Xi(A) where A = TS’YT(~‘)S where 6 = 8l- 8O. The
non-centrality parameter depends upon the distance between the null and altema-
800                                                                        R. F. Engle


tive hypotheses in the metric _rtr( 0’).
   If the null hypothesis in the canonical model specifies merely H,: pt = 0, then
an additional invariance argument is invoked, namely &’ = V, + K, where K is an
arbitrary set of constants, and V’ = ( Vt’,V,‘). Then the maximal invariant is Vt’VI
which in (49) becomes:




The non-centrality   parameter becomes:




Thus, any test which is invariant can be based on this statistic and a uniformly
most powerful invariant test would have a critical region of the form:

      c= {(a}.

    This argument applies directly to the Wald, Likelihood Ratio and LM tests.
Asymptotically the remainder term in the likelihood function vanishes for the null
hypothesis and for local alternatives. Hence, these tests can be characterized as
asymptotically locally most powerful invariant tests. This is the general optimality
property of such tests which often will be simply called asymptotic optimality.
For further details on these arguments the reader is referred to Cox and Hinckley
(1974, chs. 5, 9), Lehmann (1959, chs. 4, 6, 7), and Fergurson (1967, chs. 4, 5).
    In finite samples many tests derived from these principles will have stronger
properties. For example, if a UMP test exists, a locally most powerful test will be
it. Because of the invariance properties of the likelihood function it will automati-
cally generate tests with most invariance properties and all tests will be functions
of sufficient statistics.
    One further property of Lagrange Multiplier tests is useful as it gives a general
optimality result for finite samples. For testing H,: 8 = B” against a local
alternative H,: 19= 8’ + 8 for 6 a vector of small numbers, the Neyman-Pearson
lemma shows that the likelihood ratio is a sufficient statistic for the test. The
likelihood ratio is:

      e$q@“,y)-L(eO+&Y)

        = s( 80, y)‘&


for small 6. The best test for local alternatives is therefore based on a critical
Ch. 13: Wuld, Likelihood   Ratio, and Lagrange   Multiplier   Tests                801


region:

      c= {s’bc}.

In this case 6 chooses a direction. However, if invariance is desired, then the test
would be based upon the scores in all directions:

     c= (s(e”)‘~,‘(e”)s(80)>c},

as established above. If an exact value of c can be obtained, the Lagrange
Multiplier test will be locally most powerful invariant for finite samples as well as
asymptotically. This argument highlights the focus upon the neighborhood of the
null hypothesis which is implicit in the LM procedure. Ring and Hillier (1980)
have used this argument to establish this property in a particular case of interest
where the exact critical value can be found.


7.   The Lagrange Multiplier test as a diagnostic

The most familiar application of hypothesis testing is the comparison of a theory
with the data. For some types of departure from the theory which might be of
concern the theory may be rejected. The existence of an alternative theory is thus,
very important.
   A second closely related application is in the comparison of a statistical model
with the data. Rarely do we know a priori the exact variables, functional forms
and distribution implicit in a particular theory. Thus, there is some requirement
for a specification search. At any stage in this search it may be desirable to
determine whether an adequate representation of the data has been achieved.
Hypothesis testing is a natural way to formulate such a question where the null
hypothesis is the statistical model being used and the alternative is a more general
specificiation which is being contemplated. A test statistic for this problem is
called a diagnostic as it checks whether the data are adequately represented by the
model. The exact significance of such a test is difficult to ascertain when it is one
of a sequence of tests, but it should still be a sufficient statistic for the required
inference and conditional on this point in the search, the size is known. In special
cases of nested sequential tests, exact asymptotic significance levels can be
calculated because the tests are asymptotically independent. For example see
Sargan (1980) and Anderson (1971).
   Frequently in applied research, the investigator will estimate several models but
may not undertake comprehensive testing of the adequacy of his preferred model.
Particular types of misspecification are consistently ignored. For example, the use
802                                                                        R. F. Engle

of static models for time series data with the familiar low Durbin-Watson was
tolerated for many years although now most applied workers make serial correla-
tion corrections.
   However, the next stage in generalization is to relax the “common factors”
restriction implicit in serial correlation assumptions [see Hendry and Mizon
(1980)] and estimate a dynamic model. Frequently, the economic implications will
be very different.
   This discussion argues for the presentation of a variety of diagnostics from each
regression. Overfitting the model in many different directions allows the investiga-
tor to immediately assess the quality and stability of his specification.
   The Lagrange Multiplier test is ideal for many of these tests as it is based upon
parameters fit under the null which are therefore already available. In particular,
the LM test can usually be written in terms of the residuals from the estimate
under the null. Thus, it provides a way of checking the residuals for non-random-
ness. Each alternative considered indicates the particular type of non-randomness
which might be expected.
   Look for a moment at the LM test for omitted variables described in (37). The
test is based upon the R* of the regression of the residuals on the included and
potentially excluded variables. Thus, the test is based upon the squared partial
correlation coefficient between the residuals and the omitted variables. This is a
very intuitive way to examine residuals for non-randomness.
   In the next sections, the LM test for a variety of types of n-&specification will
be presented. In Section 8, tests for non-spherical disturbances will be discussed
while Section 9 will examine tests for n-&specified mean functions including
non-linearities, endogeneity, truncation and several other cases.




8.    Lagrange Multiplier tests for non-spherical disturbances

A great deal of research has been directed at construction of LM tests for a
variety of non-spherical disturbances. In most cases, the null hypothesis is that
the disturbances are spherical; ‘however, tests have also been developed for one
type of covariance matrix against a more complicated one. In this section we will
first discuss tests against various forms of heteroscedasticity as in Breusch and
Pagan (1980), Engle (1982) and Godfrey (1978). Then tests against serial correla-
tion as given by Godfrey (1978b, 1979), Breusch (1979), and Breusch and Pagan
(1980) are discussed.
  ’ Test against other forms of non-spherical disturbances have also been discussed
in the literature. For example, Breusch and Pagan (1980) develop a test against
variance components structures and Breusch (1979) derives the tests for seemingly
unrelated regression models.
Ch. 13: Wuld, Likelthood   Ratio, and Lagrunge   Multiplier   Tests                803

8.1.    Testing for heteroscedasticity

Following Breusch and Pagan (1980) let the model be specified as:

       y,lx,, 2, - fN(x,P,     +,a))                                             (52)

where zI is a 1 x ( p + 1) vector function of x, or other variables legitimately taken
as given for this analysis. The function h is of known form with first and second
derivatives and depends upon an unknown p + 1 X 1 vector of parameters (Y.The
first element of z is constant with coefficient (Y,,so under Ha: (or= . . . = C-Q= 0,
the model is the classical normal regression model. The variance model includes
most types of heteroscedasticity as special cases. For example, when

       h(z,a) = erfa,

multiplicative forms are implied, while

       h(z,a)   = (z,c$

gives linear and quadratic cases for k = 1,2. Special case of this which might be of
interest would be:

       h(v) = bo + v,P>‘,
       h(z,d = exda, + v,P),
where the variance is related to the mean of yt.
   From applications of the formulae for the LM test given above, Breusch and
Pagan derive the LM test. Letting 8, = (a,,...,cu,) and ah/6’0,I,,=, = KZ, where K
is a scalar. the score is:

       S(do, y) = f 'ZK/d2,

                                                                                 (53)

where f, = tif/6: - 1, f and z are matrices with typical rows f, and z, and B and
d2 are the residuals and variance estimates under the null. This expression is
simply one-half the explained sum of squares of a regression of j on z. As pointed
out by Engle (1978), plimf’f/T    = 2 under the null and local alternatives, so an
asymptotically equivalent test statistic is TR2 from this regression. As long as z
has an intercept, adding 1 to both sides and multiplying by a constant k2 will not
change the R2, thus, the statistic can be computed by regressing ii2 on z and
calculating TR2 of this regression. Koenker (1981) shows that this form is more
robust to departures from normality.
   The remarkable result of this test however is that K has vanished. The test will
be the same regardless of the form of h. This happens because both the score and
the information matrix include only the derivative of h under H, and thus the
overall shape of h does not matter. As far as the LM test is concerned, the
alternative is:

     h = Z,(YK,

where K is a scalar which is obviously irrelevant. This illustrates quite clearly both
the strength and the weakness of local tests. One test is optimal for all h much as
in the UMP case, however it seems plausible that it suffers from a failure to use
the functional form of h.
   Does this criticism of the LM test apply to the W and LR tests? In both cases,
the parameters (Ymust be estimated by a maximum likelihood procedure and thus
the functional form of h will be important. However, the optimality of these tests
is only claimed for local alternatives. For non-local alternatives the power
function will generally go to one in any case and thus the shape of h is irrelevant
from an asymptotic point of view. It remains possible that the finite sample
non-local performance of the W and LR tests with the correct functional form for
h could be superior to the LM. Against this must be set the possible computa-
tional difficulties of W and LR tests which may face convergence problems for
some points in the sample space. Some Monte Carlo evidence that the LM test
performs well in this type of situation is contained in Godfrey (1981).
   Several special cases of this test procedure illustrate the power of the technique.
Consider’ the model h = exp(cY, + (~ix,p), where Ha: (or = 0. The score as calcu-
lated in (53) evaluates all parameters, including /?, under the null. Thus, x# = j,,
the fitted values under the null. The heteroscedasticity test can be shown to have
the same limiting distribution for x,/3 as for x$ and therefore it can easily be
constructed as TR2 from S: on a constant and j,. If the model were h = exp( a0 +
a,( x,P)~) then the regression would be on a constant and j12. Thus it is very easy
to construct tests for a wide range of, possibly complex, alternatives.
   Another interesting example is provided by the Autoregressive Conditional
Heteroscedasticity (ARCH) model of Engle (1982). In this case z, includes lagged
squared residuals as well as perhaps other variables. The conditional variance is
hypothesized to increase when the residuals increase. In the simplest case:

     h = a,, + a,C;_ 1 + . . . + api&,
       = z,a.

This is really much like that discussed above as ii,_ 1 = y,_ 1 - x,_ ,p and both yr_ 1

  ‘Adrian Pagan has suggested and used this model.
Ch. 13: Wuld, Likelihood       Rario, and Lugrunge      Multiplier   Tests                  805


and x,-i are legitimately taken as given in the conditional distribution. The test
naturally comes out to be a regression of ii: on i2:_i,. . . , iifpp and an intercept
with the statistic as TR’ of this regression.
   Once a heteroscedasticity correction has been made, it may be useful to test
whether it has adequately fixed the problem. Godfrey (1979) postulates the
model:




where g(0) = 0. The null hypothesis is therefore Ha: y = 0. Under the null,
estimates of & and ti = yt - x,p are obtained, 5, = h( z,&) and the derivative of h at
each point z,& can be calculated as hi. Of course, if h is linear, this is just a
constant. The test is simply again TR* of an auxiliary regression. In this case the
regression is of:

       -2         -2
       Ut   -at                h/Z               4t
                               11
            q            On      $2     and     ,2’




and the statistic will have the degrees of freedom of the number of parameters in
qt.
   White (1980a) proposes a test for very general forms of heteroscedasticity. His
test includes all the alternatives for which the least squares standard errors are
biased. The heteroscedastic model includes all the squares and crossproducts of
the data. That is, if the original model were y = & + &xi + &x2 + E, the White
test would consider xi, x2, x:,x; and xix2 as determinants of u2. The test is as
usual formulated as TR2 of a regression of u2 on these variables plus an intercept.
These are in fact just the regressors which would be used to test for random
coefficients as in Breusch and Pagan (1979).


8.2.    Serial correlation

There is now a vast literature on testing for and estimating models with serial
correlation. Tests based on the LM principles are the most recent addition to the
econometrician’s tool kit and as they are generally very simple, attention will be
confined to them.
  Suppose:

       Y,lXt -         ~(X#d)>
                                                                                           (55)
       a( L)u, = E,           u, = Y, - X,P?          a(L)=l-a,L-a2L2-       ... -cx*LP,
806                                                                           H. F. Engle

and E, is a white noise process. Then it may be of interest to test the hypothesis
Ha: (Yt= a.. = CQ= 0. Under H,, ordinary least squares is maximum likelihood
and thus the LM approach is attractive for its simplicity. An alternative formula-
tion of (55) which shows how it fits into Crowder’s framework is:



where #1_1 is the past information in both y and x. Thus, again under H, the
regression simplifies to OLS but under the alternative, there are non-linear
restrictions. The formulation (56) makes it clear that serial correlation can also be
viewed as a restricted model relative to the general dynamic model without the
non-linear restrictions. This is the common factor test which is discussed by
Hendry and Mizon (1980) and Sargan (1980) and for which Engle (1979a) gives
an LM test.
   The likelihood function is easily written in terms of (56) and the score is
simply:




where U has rows U, = (ii_ i, iir_ z, . . . , ii,_,).
   From the form of (57) it is clear that the LM test views C: as an omitted set of
variables from the original regression. Thus, as established more rigorously by
Godfrey (1978a) and Engle (1979a), the test can be computed by regressing ii, on
x,, U, and testing TR2 as a x i. The argument is essentially that because the score
has the form of (31), the test will look like (38). If x, includes no lagged
dependent variables, then plim x'U/T= 0 and the auxiliary regression will be
unaffected by leaving out the x’s, The test therefore is simply computed by
regressing ii, on ii,_ i, . . . , ii,_p and checking TR*.For p = 1, this test is clearly
asymptotically equivalent to the Durbin-Watson statistic.
   The observation that U'xwill have expected value zero when x is an exogenous
variable, suggests that in regression models with lagged dependent variables
perhaps such products should be set to their expected value which is zero. If this
is done systematically, the resulting test is Durbin’s (1970) h test, at least for the
first order case. Thus the h test uses the a priori structure to set some of the terms
of the LM test to zero. One might expect better finite sample performance from
this, however, the few Monte Carlo experiments do not show such a difference.
Instead, this test performs about equally well when it exists, however, for some
points in the sample space, it gives imaginary values. These apparently convey no
information about the validity of the null hypothesis and are a result of the
approximation of a positive definite matrix by one which is not always so.
Because of this fact and the difficulty of generalizing the Durbin test for higher
Ch. 13: Wald, Likelihood    Ratio, and Lagrange Multiplier   Tests                      807


order serial correlation and higher order lags of dependent variables, the LM test
is likely to be preferred at least for higher order problems. See Godfrey and
Tremayne (1979) for further details.
   It would seem attractive to construct a test against moving average dis-
turbances. Thus suppose the model has the form:

      Y,l-%- ~(x,P~e,2)~
      Yt-xlP=%,
       u, = E, - OLi&,_i- . . ’ - ap&,_p,                                              (58)

where E is again a white noise process. Then E, = y, - x,/I - qsI_i - . . . - LY~E,_~
so the log-likelihood function is proportional to:



      L=-           ;   (Yr--%P-V_i-             .** -‘XpE*_p)2/202.
                t=1


The score evaluated under the null that q = . . . = (Ye= 0 is simply:

      S( y, 8) = ii’U/u2,

which is identical to that in (57) for the AR(p) model. As the null hypothesis is
the same, the two tests will be the same. Again, the LM tests for different
alternatives turn out to be the same test. For local alternatives, the autoregressive
and moving average errors look the same and therefore one test will do for both.
   When a serial correlation process has been fit for a particular model, it may still
be of interest to test for higher order serial correlation. Godfrey (1978b) supposes
that a ( p, q) residual model has been fit and that (p + r, q) is to be taken as the
alternative not surprisingly, the test against ( p, q + r) is identical. Consider here
the simplest case where q = 0. Then the residuals under the null can be written as:

      fi,=r*-x,P,

      E, = ii, - p,n,_,      -   . . . - $$_p.


The test for (p + r,O) or (p, r) error process can be calculated as TR2 of the
regression of Et on it, cr_i ,..., iit_p, E,_i ,..., ‘&-r, where .Zr= x, - yix,_i - . . . -
$,x,_~. Just as in the heteroscedasticity case the regression is of transformed
residuals on transformed data and the omitted variables. Here the new ingredient
is the inclusion of ii,_,, . . . , ii_p in the regression to account for the optimization
over y under the null.
   This approach applies directly to diagnostic tests for time series models.
Godfrey (1979a), Poskitt and Tremayne (1980), Hosking (1980) and Newbold
808                                                                           R. F. Engle

(1980)
     have developed and analyzed tests for a wide range of alternatives. In each
case the score depends simply on the residual autocorrelations, however the tests
differ from the familiar Box-Pierce-Portmanteau          test in the calculation of the
critical region. Consequently, the LM tests will have superior properties at least
asymptotically for a finite parameterization of the alternative. If the number of
parameters under test becomes large with the sample size then the tests become
asymptotically equivalent. However, one might suspect that the power properties
of tests against low order alternatives might make them the most suitable general
purpose diagnostic tools.
   When LM tests for serial correlation are derived in a simultaneous equation
framework, the statistics are somewhat more complicated and in fact there are
several incorrect tests in the literature. The difficulty arises over the differences in
instrument lists under the null and alternative models. For a survey of this
material plus presentation of several tests, see Breusch and Godfrey (1980). In the
standard simultaneous equation model:

       Y,B+   X,r=u,,
                                                                                     (59)
       U, = RU,_, + E,,

where Y and U, are 1 X G, X, is 1 x K and R is a square G X G, matrix of
autoregressive coefficients, they seek to test Ha: R = 0 both in the FIML and
LIML context. They conclude that if G is the set of residuals estimated under the
assumption of no serial correlation, then the LM test can be approximated by any
standard significance test in the augmented model:

      Y,B+ X,T-Ri$_l=~,.                                                             (60)
  Thus comparing the likelihood achieved under (59) and (60) would provide an
asymptotically equivalent test to the LM test. As usual, this is just one of many
computational techniques.


9.    Testing the specification of the mean in several complex models

A common application of LM tests is in econometric situations where the
estimation requires iterative procedures to maximize the likelihood function. In
this section a variety of situations will be discussed where possibly complex
misspecifications of the mean function are tested. LM tests for non-linearities, for
common factor dynamics, for weak and strong exogeneity and for omitted vari-
ables in discrete choice and truncated dependent variable models are presented
below. These illustrate the simplicity of LM tests in complex models and suggest
countless other examples.
Ch. 13: Wald, Likelihood   Ratlo, and Lagrange   Multiplier   Tests                   809


9.1.    Testing for non-linearities

Frequently an empirical relationship derived from economic theory is highly
non-linear. This is typically approximated by a linear regression without any test
of the validity of the approximation. The LM test generally provides a simple test
of such restrictions because it uses estimates only under the null hypothesis. While
it is ideal for the case where the model is linear under the null and non-linear
under the alternative, the procedures also greatly simplify the calculation when
the null is non-linear. Three examples will be presented which show the usefulness
of this set of procedures.
   If the model is written as:




then the score under the null will have the form:




Thus the derivative of the non-linear relationship evaluated with parameter
estimated under the null, can be considered as an omitted variable. The test
would be given by the formulations in Section 5.
   As an example, consider testing for a liquidity trap in the demand for money.
Several studies have examined this hypothesis. Pifer (1969), White (1972) and
Eisner (1971) test for a liquidity trap in logarithmic or Box-Cox functional forms
while Konstas and Khouja (1969) (K-K) use a linear specification. Most studies
find maximum likelihood estimates of the interest rate floor to be about 2% but
they differ on whether this figure is significantly different from zero. Pifer says it is
not significant, Eisner corrects his likelihood ratio test and says it is, White
generalizes the form using a Box-Cox transformation and concludes that it is not
different from zero. Recently Breusch and Pagan (1977a) have re-examined the
Konstas and Khouja form and using a Lagrange Multiplier test, conclude that the
liquidity trap is significant.
   Except for minor footnotes in some of the studies, there is no mention of the
serial correlation which exists in the models. In re-estimating the Konstas-Khouja
model, the Durbin-Watson statistic was found to be 0.3 which is evidence of a
severe problem with the specification and that the distribution of all the test
statistics may be highly misleading.
   The model estimated by K-K is:

       M=yY+p(r-a)-‘+c,                                                             (61)
810                                                                      R. F. Engle

where M is real money demand, Y is real GNP and r is the interest rate. Perhaps
their best results are when Ml is used for M and the long-term government bond
rate is used for r. The null hypothesis to be tested is cy= 0. The normal score is
proportional to u’z where I, the omitted variable, is the derivative of the
right-hand side with respect to (Yevaluated under the null:




Therefore, the LM test is a test of whether l/r2 belongs in the regression along
with Y and l/r.
   Breusch and Pagan obtain the statistic [rM = 11.47 and therefore reject 1y= 0.
Including a constant term this becomes 5.92 which is still very significant in the
X2 table. However, correcting for serial correlation in the model under the null
changes the results dramatically. A second-order autoregressive model with
parameters 1.5295 and -0.5597 was required to whiten the residuals. These
parameters are used in an auxiliary regression of the transformed residual on the
three transformed right-hand side variables and a constant, to obtain an R2 =
0.01096. This is simply GLS where the covariance parameters are assumed
known. Thus, the LM statistic is 5rM = 0.515 which is distributed as X: if the null
is true. As can be seen it is very small suggesting that the liquidity trap is not
significantly different from zero.
   As a second example, consider testing the hypothesis that the elasticity of
substitution of a production function is equal to 1 against the alternative that is
constant but not unity. If y is output and x1 and x2 are factors of production, the
model under the alternative can be written as:

                                                                              (62)

If p = 0, the elasticity of substitution is one and the model becomes:




To test the hypothesis p = 0, it is sufficient to calculate ag/8pIps0     and test
whether this variable belongs in the regression. In this case

      ag                                2


      ap   +=
                +(1-s)
                             i
                                 log?
                                        1
which is simply the Kmenta (1967) approximation. Thus the Cobb-Douglas form
can be estimated with appropriate heteroscedasticity or serial correlation and the
Ch. 13: Wald, Likelihood   Ratio, and Lagrange   Multiplier   Tests                  811

unit elasticity assumption tested with power equal to a likelihood ratio test
without ever doing a non-linear regression.
   As a third example, Davidson, Hendry, Srba and Yeo (1978) estimate a
consumption function for the United Kingdom which pays particular attention to
the model dynamics. The equation finally chosen can be expressed as:

       &et = Pi&Y, + P,A,A,Y, + P,(c,-,                 - ~1-4)

               +PJ&+P&+PJlP,,                                                      (63)
where c, Y and p are the logs of real consumption, real personal disposable income
and the price level, and A, is the i th difference. In a subsequent paper Hendry and
Von Ungem-Stemberg (1979) argue that the income series is mismeasured in
periods of inflation. The income which accrues from the holdings of financial
assets should be measured by the real rate of interest rather than the nominal as is
now done. There is a capital loss of p times the asset which should be netted out
of income. The appropriate log income measure is Y: = log( Y, - apL,_ 1) where L
is liquid assets of the personal sector and (Yis a scale parameter to reflect the fact
that L is not all financial assets.
   The previous model corresponds to (Y= 0 and the argument for the respecifica-
tion of the model rests on the presumption that a # 0. The LM test can be easily
calculated whereas the likelihood ratio and Wald tests require non-linear estima-
tion if not respecification. The derivative of Y* with respect to (Yevaluated under
the null is simply - pL,_,/Y,.      Denote this by x,. The score is proportional to u’z,
where z = &A,x, + &A,A,x, - &x,_~,             and the betas are evaluated at their
estimates under the null. This is now a one degree of freedom test and can be
simply performed. The test is significant with a chi squared value of 5. As a one
tailed test it is significant at the 2.5% level.


9.2.    Testing for common factor dynamics

In a standard time series regression framework, there has been much attention
given to the testing and estimation of serial correlation patterns in the dis-
turbances. A typical model might have the form:

       YI = x,P + ?J
                   1’        PWU,       = E,,        E, - IN(0, a’),               (64)
where p(L) is an r th order lag polynomial and x, is a 1 x k row vector which for
the moment is assumed to include no lagged exogenous or endogenous variables.
   Sargan (1964, 1980) and Hendry and Mizon (1978) have suggested that this is
often a strong restriction on a general dynamic model. By multiplying through by
p(L) the equation can equivalently be written as:
812                                                                          R. F. Engle

This model includes a set of non-linear parameter restrictions which essentially
reduce the number of free parameters to k + r instead of the full (k + l)r which
would be free if the restriction were not imposed. A convenient parameterization
of the unrestricted alternative can be given in terms of another matrix of lag
polynomials e(L) which is a 1 x k row vector each element of which is an rth
order lag polynomial with zero order lag equal to zero. That is e(O) = 0. The
unrestricted model is given by:

       PWY,   = P(-Q,P     + W)x;+     e,,                                          (66)
which simplifies to the serial correlation case if all elements of 8 are zero. Thus,
the problem can be parameterized in terms of z = (x _ i, . . . , x_~) as a matrix of kr
omitted variables in a model estimated with GLS. The results of Section 5 apply
directly. The test is simply TR2 of E, on p(L)x,, zt and (a,_,,. . ., ii_,), or
equivalently, on xt, z1 (y-i,. . . , y-,).
   Now if x includes lags, the test must be very slightly modified. The matrix z
will, in this case, include variables which are already in the model and thus the
auxiliary regression will see a data set with perfect multicollinearity. The solution
is to eliminate the redundant elements of z as these are not testable in any case.
The test statistic will have a correspondingly reduced number of degrees of
freedom.
   A more complicated case occurs when it is desired to test that the correlation is
of order r against the alternative that it is of order r - 1. Here the standard test
procedure breaks down. See Engle (1979a) for a discussion and some suggestions.


9.3.    Testing for exogeneity

Tests for exogeneity are a source of controversy partly because of the variety of
definitions of exogeneity implicit in the formulation of the hypotheses. In this
paper the notions of weak and strong exogeneity as formulated by Engle et al.
(1983) will be used in the context of linear simultaneous equation systems. In this
case weak exogeneity is essentially that the equations defining weakly exogenous
variables can be ignored without a loss of information. In textbook cases weakly
exogenous variables are predetermined. Strong exogeneity implies, in addition,
that the variables in question cannot be forecast by past values of endogenous
variables which is the definition implicit in Granger (1969) “non-causality”.
   Consider a complete simultaneous equation system with G equations and K
predetermined variables so that Y, E, and V are T X G, X is T X K and the
coefficient matrices are conformable. The structural and reduced forms are:

       YB=xT+&,          Es;&, = s2,                                               (67)
       y=xII+v,                                                                    (68)
Ch. 13: Wald, Likelihood Ratio, and Lugrange Multiplrer Tests                  813

where E, are rows of E which are independent   and the x are weakly exogenous.
Partitioning this set of equations into the first and the remaining G - 1, the
structure becomes:


     Y, -   Y*P = XlY + El   3                                                (69)
      - y,(~’ + Y, B, = XJ,       + Q,                                        (70)


where X, may be the same as X and




   The hypothesis that Y, is weakly exogenous to the first equation in this full
information context is simply the condition for a recursive structure:


      Ho: a = 0,L’l2 = 0,                                                     (72)

which is a restriction of 2G -2 parameters.
   Several variations on this basic test are implicit in the structure. If the
coefficient matrix is known to be triangular, then (Y= 0 is part of the maintained
hypothesis and the test becomes simply a test for 52,, = 0. This test is also
constructed below; Holly (1979) generalized the result to let the entire B matrix
be assumed upper triangular and obtains a test of the diagonality of Sz and Engle
(1982a) has further generalized this to block recursive systems. If some of the
elements of j3 are known to be zero, then the testing problem remains the same.
In the special case where B, is upper triangular between the included and
excluded variables of Y, and the disturbances are uncorrelated with those of y,
and the included y2, then it is only necessary to test that the (Y’Sand L?‘s of the
included elements of y, are zero. In effect, the excluded y, now form a higher
level block of a recursive system and the problem can be defined a priori to
exclude them also from y,. Thus without loss of generality the test in (72) can be
used when some components of /3 take unknown values.
  To test (72) with (67) maintained, first construct the normal log likelihood L,
apart from some arbitrary constants:


     L = TloglBI     - ;logls2I     - $ i      ~&-‘e;.                        (73)
                                         1=1
814                                                                              R. F. Engle

Partitioning this as in (71) using the identity Is21= 1fi2,, 1)f&, - 9,,St;2’ti2,, I gives:




where the superscripts on D indicate the partitioned inverse. Differentiating with
respect to (Yand setting parameters to their values under the null gives the score:


       -=az.        - TB,',& + cfi22t?212;y,,,                                        (75)
       aao                       I




where tildes represent estimates under the null and 4, is the row vector of
residuals under the null. Recognizing that c,h22iJ2~~2,/T = I, this can be rewrit-
ten as:




where ji is the reduced form prediction of yi which is given in this case as
x,7 + X,i;,B;‘/!!. Clearly, under the null hypothesis, the score will have expected
value zero as it should. Using tensor notation this can be expressed as:

      s,=      (Zs(y,   + 8,))‘(ji;‘@Z)vec(02),                                       (77)
which is in the form of omitted variables from a stacked set of regressions with
covariance matrix fi,‘@Z. This is a GLS problem which allows calculation of a
test for a = 0 under the maintained hypothesis that s2,, = 0. Because of the
simultaneity, the procedure in Engle (1982a) should be followed.
   The other part of the test in (72) is obtained by differentiating with respect to
52,, and evaluating under the null. It is not hard to show that all terms in the
derivative vanish except the last. Because &?12/&2,2 lo = - tifi’&’ the score can
be written as:

      so,, =    c ii,,D,‘D,‘u*;,                                                      (78)
Ch. 13: Wald, Likelihood Ratio, and Lagrange Multiplier Tests                    815


which can be written in two equivalent forms:




Either would be appropriate for testing L?,, = 0 when a = 0 is part of the
maintained hypothesis. In (79) the test would be performed in the first equation
by considering U, as a set of G - 1 omitted variables. In (80) the test would be
performed in the other equations by stacking them and then considering IS ui as
the omitted set of variables. Clearly the former is easier in this case.
   To perform the joint test, the two scores must be jointly tested against zero.
Here (77) and (80) can easily be combined as they have just the same form. The
test becomes a test for two omitted variables, pi + fii and ii,, in each of the
remaining G - 1 equations. Equivalently, Ji and ii, can be considered as omitted
from these equations.
   Engle (1979) shows that this test can be computed as before. If the model is
unidentified the test would have no power and if the model is very weakly
identified, the test would be likely to have very low power.
   In the special case where G = 2, the test is especially easy to calculate because
both equations can be estimated by least squares under the null. Therefore
Section 5 can be applied directly.
   As an example, the Michigan model of the monetary sector was examined. The
equations are reported in Gardner and Hymans (1978). In this model, as in most
models of the money market it is assumed that a short term interest rate can be
taken as weakly exogenous in an equation for a long-term rate. However, most
portfolio theories would argue that all rates are set at the same time as economic
agents shift from one asset to another to clear the market.
   In this example a test is constructed for the weak exogeneity of the prime rate,
ZUAA, in the 35 year government bond rate equation, RG35. The model can be
written as:

     RG35 = PARAAA + x,y + q,
     ARAAA = aRG35 + x2y + Ed,                                                 (81)

where the estimates assume (Y= uiz = 0, and the x’s include a variety of presum-
ably predetermined variables including lagged interest rates. Testing the hypothe-
sis that (Y= 0 by considering RG35 as an omitted variable is not legitimate as it
will be correlated with Ed. If one does the test anyway, a cl&squared value of 35 is
obtained.
   The appropriate test of the weak exogeneity of RG35 is done by testing ui and
RG35 - Bii, as omitted from the second equation where 1, = ARAAA - x2y2.
816                                                                         R. F. Engie

This test was calculated by regressing P, on x2, 8, and RG35 - pii,. The resulting
TR* = 1.25 which is quite small, indicating that the data does not contain
evidence against the hypothesis. Careful examination of x1 and x2 in this case
shows that the identification of the model under the alternative is rather flimsy
and therefore the test probably has very little power.
  A second class of weak exogeneity tests can be formulated using the same
analysis. These might be called limited information tests because it is assumed
that there are no overidentifying restrictions available from the second block of
equations. In this case equation (70) can be replaced by:

      Y,=xn2+E2.                                                                  (82)

Now the definition of weak exogeneity is simply that Q2,,= 0 because (Y= 0
imposes no restrictions on the model. This situation would be expected to occur
when the second equation is only very roughly specified.
   A very similar situation occurs in the case where Y, is possibly measured with
error. Suppose Y2*is the true unobserved value of Y, but one observes Y, = Y2*+ n.
If the equation defining Y;Cis:

      Y;c = x*r* + &*,

where the assumption that Y2* belongs in the first equation implies EE;Q = 0, the
observable equations become:

      Y, = Y*P + XlY + El - VP,
      Y, = xzr* + &*+ 7.                                                          (83)
If there is no measurement error, then the covariance matrix of n will be zero, and
&, = 0. This set up is now just the same as that used by Wu (1973) to test for
weak exogeneity of Y, when it is known that (Y= 0.
   The procedure for this test has already been developed. The two forms of the
score are given in (79) and (80) and these can be used to test for the presence of
U, in the first equation. This test is Wu’s test and it is also the test derived by
Hausman (1979) for this problem. By showing that these are Lagrange Multiplier
tests, the asymptotic optimality of the procedures is established when the full set
of x2 is used. Neither Hausman nor Wu could establish this property.
   Finally, tests for strong exogeneity can be performed. By definition, strong
exogeneity requires weak exogeneity plus the non-predictability of Y, from past
values of y,. Partitioning x2 in (70) into ( yp, xg) where yp is a matrix with all the
relevant lags of y,, and similarly letting F, = (F20, F,,) the hypothesis of strong
exogeneity is:

      H,: a=o,       fir, = 0,    r,, = 0.                                       (84)
Ch. 13: Wald, Likelihood   Ratio, and Lagrange   Multiplier   Tests                817


This can clearly be jointly tested by letting ur, pi and yf be the omitted variables
from each of the equations. Clearly the weak exogeneity and the Granger
non-causality are very separate parts of the hypothesis and can be tested
separately. Most often however when Granger causality is being tested on its own,
the appropriate model is (82) as overidentifying restrictions are rarely available.


9.4.    Discrete choice and truncated distributions

In models with discrete or truncated dependent variables, non-linear maximum
likelihood estimation procedures are generally employed to estimate the parame-
ters. The estimation techniques are sufficiently complex that model diagnostics are
rarely computed and often only a limited number of specifications are tried. This
is therefore another case where the LM test is useful. Two examples will be
presented: a binary choice model and a self-selectivity model.
   In the binary choice model, the outcome is measured by a dependent variable,
y, which takes on the value 1 with probability p and 0 with probability 1 - p. For
each observation these probabilities are different either because of the nature of
the choice or of the chooser. Let pt = F(x#),      where the function F maps the
exogenous characteristics, x,, into the unit interval. A common source of such
functions are cumulative distribution functions such as the normal or the logistic.
The log-likelihood of this model is given by


       L=C(Y,logP,+(1-Y,)log(l-P,)),                            P, = F(Q).        (85)

Partitioning the parameter vector and x, vector conformably into /3 = (pi, &)‘,
the hypothesis to be tested is H,,: & = 0. The model has already been estimated
using only x2 as the exogenous variables and it is desired to test whether some
other variables were omitted. These estimates under the null will be denoted &
which implies a set of probabilities p,. The score and information matrix of this
model are given by:


                                                                                  (86)

                                                                                 (87)

where f is the derivative of F. Notice that the score is essentially a function of the
“residuals” y, - p,. Evaluating these test statistics under the null, the LM test
818                                                                                   R. E Engle


statistic is given by:




                                                                                            (88)
where

      fi, = (Y,- P,,)/(P,(l-    A))“‘?               %   =   Gf(~,,MPAl-   A,>)‘/‘,



and

      ii=   (i&..., P,)‘,i   = (2;   )...,   i;)‘.
 Because plimir’ti/T =l, the statistic is asymptotically equivalent to TR; of the
regression of ii on 2. In the special case of the logit where p, = l/(1 + ePXfa),
f = j,(l - j,) and the expressions simplify so that xI is multiplied by ($,(l - p,))‘/’
rather than being divided by it. For the probit model where F is the cumulative
normal, f = exp(x,,b,)    as the factor of proportionality cancels. This test is
 therefore extremely easy to compute based on estimates of the model under the
null.
    As a second example, take the self-selectivity model of Hausman and Wise
(1977). The sample is truncated based upon the dependent variable. The data
come from the negative income tax experiment and when the families reached a
sufficiently high income level, they are dropped from the sample. Thus the model
can be expressed as:

      Ylx- w%u2),
but we only have data for y 5 c. Thus, the likelihood function is given as the
probability density of y divided by the probability of observing this family. The
log-likelihood can be expressed in terms of I+ and @ which are the Gaussian
density and distribution functions respectively as:

      L=Clog~((y,-x,P)/a)-Clog~7(c-x,P)/a).                                                (89)
             I                                ,

The score is:



                                                                                          (90)
Ch. 13: Wald, Likelihood Ratio, and Lagrange Mulriplier Tests                     819

To estimate this model one sets the score to zero and solves for the parameters.
Notice that this implies including another term in the regression which is the ratio
of the normal density to its distribution. The inclusion of this ratio, called the
Mills ratio, is a distinctive feature of much of the work of self-selectivity. The
information matrix can be shown to be:




where +, = $((c - x,/3)/0) and similarly for @,.
   To test the hypothesis He: pi = 0, denote again the estimates under the nulJ by
fi,&&. Let t-F =l+(&/$~~)* +(&/a,)(~-x$/6)           and define fir = (y, -x&   +
&&/djl)/r,   and R, = x,r,. With ii and i being the corresponding vectors and
matrices, the LM test statistic is:




As before, plim ii’ti/T =1 so an asymptotically equivalent test statistic is TRE of
the regression of f on 2. Once again, the test is simply performed by a linear
regression on transformed data. All of the components of this transformation
such as the Mills ratio, are readily available from the preceding estimation. Thus a
variety of complicated model searches and diagnostic tests can easily be carried
out even in this complex maximum likelihood framework.


10. Alternative testing procedures

In this section three alternative closely related testing procedures will be briefly
explained and the relationship between these methods and ones discussed in this
chapter will be highlighted. The three alternatives are Neyman’s (1959) C(a) test,
Durbin’s (1970) general procedure, and Hausman’s (1978) specification test.
   Throughout this section the parameter vector will be partitioned as 8’ = (e;, 0;)
and the null hypothesis will be H,: @i= 0:. Neyman’s test, as exposited by
Breusch and Pagan (1980), is a direct generalization of the LM test which allows
consistent byt inefficie=nt estimgtion of the parameters e2 under the null. Let this
estimate be (3, and let B = (f7p, 0;)‘. Expanding the score evaluated at 8 around the
ML estimate 6 gives:


     %(8)=(wa4@9 + a2L/aelae;(Q(i2                              -13~)
             o
                                   )i
                   a*L/ae, ae;(Q(ii2                            - 6,) i ’
820                                                                         R. F. Engle


where ( 8L/ iM,)(
                6)= 0.Solving for the desired score:




                                                                                   (93)

The C(a) test is just the LM test using (93) for the score. This adjustment can be
viewed as one step of a Newton-Raphson iteration to find an efficient estimate of
8, based upon an initial consistent estimate. In some situations such as the one
discussed in Breusch and Pagan, this results in a substantial simplification.
   The Durbin (1970) procedure is also based on different estimates of the
parameters. He suggests calculating the maximum likelihood estimate of “r
assuming @,= &, the ML estimate under the null. Letting this new estimate be B,,
the test is=based upon the difference 8, - SF. Expanding the score with respect to
8, +bout 8r holding 0, = & and recognizing that the first term is zero by definition
of 0, the following relationship is found:


      J&(8)=- &(8)(8, - ep).                                                       (94)
                     1   ;



Because the Hessian is assumed to be non-singular, any test based upon 8, - 6’:
will have the same critical region as one based upon the score; thus the two tests
are equivalent. In implementation there are of course many asymptotically
equivalent forms of the tests, and it is the choice of the asymptotic form of the
test which gives rise to the differences between the LM test for serial correlation
and Durbin’s h test.
   The third principle is Hausman’s (1978) specification test. The spirit of this test
is somewhat different. The parameters of interest are not 8, but rather r3,. The
objective is to restrict the parameter space by setting 8, to some preassigned
values without destroying the consistency of the estimates of 0,. The test is based
upon the difference between the efficient estimates under the null, &, and a
consistent but possibly inefficient estimate und,er the alternative 8,. Hausman
makes few assumptions about the properties of &; Hausman and Taylor (1980),
however, modify the statement of the result somewhat to use the maximum
likelihood estimate under the alternative e2. For the moment, this interpretation
will be used here. Expanding the score around the maximum likelihood estimate
and evaluating it at t? gives:
Ch. 13: Wuld, Likelihood Rutio, and Lugrunge Multiplier Tests                      821




                                                                                 (95)



It was shown above that asymPtotically optimal tests could be based upon either
the score or the difference (0, - 0:). As these are related by a non-singular
transformation which asymptotically is Ya”, critical regions based on either
statistic will be the same. Hausman’s difference is based upon Xzl times the
score asymptotically. If this matrix is non-singular, then the tests will all be
asymptotically equivalent. The dimension of Y21 is q X p where p is the number
of restrictions and q = k - p is the number of remaining parameters. Thus a
necessary condition for this test to be asymptotically equivalent is that min( p, q)
 = p. A sufficient condition is that rank(.Y*‘) = p. The equivalence requires that
there be at least as many parameters unrestricted as restricted. However, parame-
ters which are asymptotically independent of the parameters under test will not
count. For example, in a classical linear regression model, the variance and any
serial correlation parameters will not count in the number of unrestricted parame-
ters. The reason for the difficulty is that the test is formulated to ignore all
information in $, - 0: even though it frequently would be available from the
calculation of i?*.
   Hausman and Taylor (1980) in responding to essentially this criticism from
Holly (1980) point out that in the case q < p, the specification test can be
interpreted as an asymptotically optimal test of a different hypothesis. They
propose the hypothesis H,*: 4;Y21(8,       - d,“) = 0 or simply YZ,,(r3,- 0,“) = 0. If
H,* is true, the bias in t$ from restricting 8, = 0: would asymptotically be zero.
The hypothesis H,* is explicitly a consistency hypothesis. The Hausman test is
one of many asymptotically equivalent ways to test this hypothesis. In fact, the
same Wald, LR and LM tests are available as pointed out by Riess (1982). The
investigator must however decide which hypothesis he wishes to test, Ho or H,*.
   In answering the question of which hypothesis is relevant, it is important to ask
why the test is being undertaken in the first place. As the parameters of interest
are e,, the main purpose of the test is to find a more parsimonious specification,
and the advantage of a parsimonious specification is that more efficient estimates
of the parameters of interest can be obtained. Thus if consistency were the only
concern of the investigator, he would not bother to restrict the model at all. The
objective is therefore to improve the efficiency of the estimation by testing and
then imposing some restrictions. These restrictions ought, however, to be grounded
in an economic hypothesis rather than purely data based as is likely to be the case
for H,* which simply asserts that the true parameters lie in the column null space
of Y2i.
822                                                                          R. F. Engle


   Finally, if an inefficient estimator i! is used in the test, it is unlikely that the
results will be as strong as described above. Except in special cases, one would
expect the test based upon the MLE to be more powerful than that based upon an
inefficient estimator. However, this is an easy problem to correct. Starting from
the inefficient estimate, one step of a Newton-Raphson            type algorithm will
produce asymptotically efficient parameter estimates.


11.   Non-standard situations

While many non-standard situations may arise in practice, two will be discussed
here. The first considers the properties of the Wald, LM and LR tests when the
likelihood function is misspecified. The second looks at the case where the
information matrix is singular under the null.
   White (1982) and Domowitz and White (1982) have recently examined the
problem of inference in maximum likelihood situations where the wrong likeli-
hood has been maximized. These quasi-maximum likelihood estimates may well
be consistent, however the standard errors derived from the information matrix
are not correct. For example, the disturbances may be assumed to be normally
distributed when in fact they are double exponentials. White has proposed
generalizations of the Wald and LM test principles which do have the right size
and which are asymptotically powerful when the density is correctly assumed.
These are derived from the fact that the two expressions for the information
matrix are no longer equivalent for QML estimates. The expectation of the outer
product of the scores does not equal minus the expectation of the Hessian.
Letting L, be the log-likelihood of the tth observation, White constructs the
matrices:

      A=   1 d2L .                                 and    C = A-‘BA-‘.
           T ae aef ’
Then the “quasi-scores”, measured as the derivative of the possibly incorrect
likelihood function evaluated under the null, will have a limiting distribution
based upon these matrices when the null is true. Letting A” be the first block of
the partitioned inverse of A, the limiting covariance of the quasi score is
(A”C~‘A”)-’    so the quasi-LM test is simply:

      [rM = sY”C,‘A”s.

Notice that if the distribution is correct, then A = - B so that C = A-’ and the
whole term becomes simply A” as usual. Thus the use of the quasi-LM statistic
corrects the size of the test when the distribution is false but gives the asymptoti-
cally optimal test when it is true. Except for possible finite sample and computa-
tional costs, it appears to be a sensible procedure. Exactly the same correction is
Ch. 13: Wald, Likelihood Ratio, and Lagrange Multiplier Tests                     823

made to the Wald test to obtain a quasi Wald test. Because it is the divergence
between A and B which creates the situation, White proposes an omnibus test for
differences between A and B.
   In some situations, an alternative to this approach would be to test for
normality directly as well as for other departures from the specification. Jarque
and Bera (1980, 1982) propose such a test by taking the Pearson density as the
alternative and simultaneously testing for serial correlation, functional form
misspecification and heteroscedasticity. This joint test decomposes into indepen-
dent LM tests because of the block diagonality of the information matrix for this
problem.
   A second non-standard situation which occurs periodically in practice is when
some of the parameters are estimable only when the null hypothesis is false. That
is, the information matrix under the null is singular. Two simple examples with
rather different conclusions are:

     ylx,; x2 -N(43x,+PX2dJ2),                   Ho:   p =o,


     ylx-    N(W,fJ2),            H,:j3=0.


In both cases, the likelihood function can be maximized under both the null and
alternative, but the limiting distribution of the likelihood ratio statistic is not
clear. Furthermore, conventional Wald and LM tests also have difficulties-the
LM will have a parameter which is unidentified under the null which appears in
the score, and the Wald will have an unknown limiting distribution. In the first
example, it is easy to see that by reparameterizing the model, the null hypothesis
becomes a two degree of freedom standard test. In the second example, however,
there is no simple solution. Unless the parameter (Yis given a priori, the tests will
have the above-mentioned problems. A solution proposed by Davies (1977) is to
obtain the LM test statistic for each value of the unidentified parameter and then
base the test on the maximum of these. Any one of these would be chi squared
with one degree of freedom, however, the maximum of a set of dependent chi
squares would not be chi squared in general. Davies finds a bound for the
distribution which gives a test with size less than or equal to the nominal value.
   As an example of this, Watson (1982) considers the problem of testing whether
a regression coefficient is constant or whether it follows a first order autoregres-
sive process. The model can be expressed as:
The null hypothesis is that at = 0; this however makes the parameter p unidenti-
fiable. The test is constructed by first searching over the possible values of p to
find the maximum LM test statistic, and then finding the limiting distribution of
the test to determine the critical value. A Monte Carlo evaluation of the test
showed it to work reasonably well except for values of p close to unity when the
limiting distribution was well approximated only for quite large samples.
   Several other applications of this result occur in econometrics. In factor
analytical models, the number of parameters varies with the number of factors so
testing the number of factors may involve such a problem. Testing a series for
white noise against an AR(l) plus noise again leads to this problem as the
parameter in the autoregression is not identified under the null. A closely related
problem occurred in testing for common factor dynamics as shown in Engle
(1979a). Several others could be illustrated.




12.   Conclusion

In a maximum likelihood framework, the Wald, Likelihood Ratio and Lagrange
Multiplier tests are a natural trio. They all share the property of being asymptoti-
cally locally most powerful invariant tests and in fact all are asymptotically
equivalent. However, in practice there are substantial differences in the way the
tests look at particular models. Frequently when one is very complex, another will
be much simpler. Furthermore, this formulation guides the intuition as to what is
testable and how best to formulate a model in order to test it. In terms of forming
diagnostic tests, the LM test is frequently computationally convenient as many of
the test statistics are already available from the estimation of the null.
   The application of these test principles and particularly the LM principle to a
wide range of econometric problems is a natural development of the field and it is
a development which is proceeding at a very rapid pace. Soon, most of the
interesting cases will have been touched in theoretical papers, however, applied
work is just beginning to incorporate these techniques and there is a rich future
there.




References
Aitcheson,J. and S. D. Silvey (1958), “MaximumLikelihood Estimation of Parameters Subject to
  Restraints”, Annals of Mathematical Statistics. 29:813-828.
Anderson, T. W. (1971j, The Statistical Analysis’of Time Series. New York: John Wiley and Sons.
Bera, A. K. and C. M. Jarque (1982), “Model Specification Tests: A Simultaneous Approach”,
  Journal of Econometrics, 20:59-82.
Bemdt, E. R. and N. E. Savin (1977), “Conflict Among Criteria for Testing Hypotheses in the
  Multivariate Linear Regression Model”, Econometrica, 45:1263-1278.
Ch. 13: Wald, Llkelrhood        Ratio. and Lagrange     Multiplier   Tests                       825


Breusch. T. S. (1978). “Testing for Autocorrelation in Dynamic Linear Models”, Au.vraliun   Economic
  Papers.   17:334-355.
Breusch, T. S. and A. R. Pagan (1979) “A Simple Test for Heteroskedasticity and Random Coefficient
  Variation”. Econometrica, 47:1287-1294.
Breusch, T. S. (1979). “Conflict Among Criteria for Testing Hypotheses: Extensions and Comments”.
  Econometrica,    47:203-207.
Breusch. T. S. and L. G. Godfrey (1980) “A Review of Recent Work on Testing for Autocorrelation
  in Dynamic Economic Models”, Discussion Paper *8017, University of Southampton.
Breusch, T. S. and A. R. Pagan (1980), “The Lagrange Multiplier Test and Its Applications to Model
  Specification in Econometrics”, Review of Economic Studies, 47~239-254.
Cox. D. R. and D. V. Hinckley (1974). Theoretical Statisrics. London: Chapman and Hall,
Crowder, M. J. (1976), “Maximum Likelihood Estimation for Dependent Observations”, Journul of
  rhe Rqval Statistical   Society,   Series B, 45-53.
Davidson, J. E. H., Hendry. D. F., Srba, F.. and S. Yeo (1978), “Econometric Modelling of the
  Aggregate Time-Series Relationship Between Consumers’ Expenditure and Income in the United
  Kingdom”, Economic Journal, 88:661-692.
Davies. R. B. (1977). “Hypothesis Testing When a Nuisance Parameter is Present Only Under the
  Alternative”, Biometrrka, 64:247-254.
Domowitz, I. and H. White (1982), “Misspecified Models with Dependent Observations”, Journal of
  Economeincs,     20:35-58.
Durbin. J. (1970), “Testing for Serial Correlation in Least Squares Regression When Some of the
   Regressors are Lagged Dependent Variables”, Econometrica. 38:410-421.
Eisner. !<. (1971). “Non-linear Estimates of the Liquidity Trap”, Econometrica, 39:861-X64.
Engle. K. F. (1979) “Estimation of the Price Elasticity of Demand Facing Metropolitan Producers”,
  Journal of Urban Economics, 6:42-64.
Engle, R. F. (1982) “Autoregression Conditional Heteroskedasticity with Estimates of the Variance of
   U.K. InRation”, Econometrica, 50:987-1007.
Engle, R. F. (1979a). “A General Approach to the Construction of Model Diagnostics Based on the
  Lagrange Multiplier Principle”, U.C.S.D. Discussion Paper 79-43.
Engle. R. F. (1982a). “A General Approach to Lagrange Multiplier Model Diagnostics”, Journul of
  Econometrics,    20:83-104.
Engle. R. F. (1980) “Hypothesis Testing in Spectral Regression: the Lagrange Multiplier as a
  Regression Diagnostic”, in: Kmenta and Ramsey, eds.. Crireriu /or Eruluutron oj Economerrrt
  Models. New York: Academic Press.
Engle, R. F., D. F. Hendry, and J. F. Richard (1983). “Exogeneity”, Econometncu. 50:227-304.
Evans, Cr. 8. A. and N. E. Savin (1982) “Conflict Among the Criteria Revisited: The W, LR and LM
  tests”. EconometrIca, 50:737-748.
Ferguson. T. S. (1967), Mathemurrcal Srutistrcs. New York: Academic Press,
Godfrey, L. G. (1978) “Testing for Multiplicative Heteroskedasticity”, Journul 01 Economerrrts,
  81227-236.
Godfrey. L. G. (lY78a), “Testing Against general Autoregressive and Moving Average Error Models
  When the Regressors Include Lagged Dependent Variables”, Economerrrca, 46:1293-1302.
Godfrey, L. G. (lY78b), “Testing for Higher Order Serial Correlation in Regression Equations when
  the Regressors Include Lagged Dependent Variables”, Economerrica, 46:1303-1310.
Godfrey, L. G. (1979) “A Diagnostic Check on the Variance Model in Regression Equations with
  Heteroskedastic Disturbances”, unpublished manuscript, University of York.
Godfrey, L. G. (197Ya), “Testing the Adequacy of a Time Series Model”, Biometrika, 66:67-72.
Godfrey, L. G. and A. R. Tremayne (1979). “A Note on Testing for Fourth Order Autocorrelation in
   Dynamic Quarterly Regression Equations”, unpublished manuscript, University of York,
Godfrey, L. Cr. (1980). “On the Invariance of the Lagrange Multiplier Test with Respect to Certain
  Changes in the Alternative Hypothesis”, Econometricu, 49:1443-1456.
Hausman, J. (1978), “Specification Tests in Econometrics”, Econometrica, 46:1251-1212.
Hausman, J. and D. Wise (1977) “Social Experimentation Truncated Distributions, and Eflicient
  Estimation”, Econometrica, 45:319-339.
Hausman, J. and W. Taylor (1980) “Comparing Specification Tests and Classical Tests”, unpublished
  manuscript.
Hendry. D. F. and T. von Ungem-Stemberg (1979), “Liquidity and Inflation Effects on Consumers’
826                                                                                          R. F Engle


  Expenditure”, in: Angus Deaton, ed., Festschrift for Richard Stone. Cambridge: Cambridge Univer-
  sity Press.
Hendry, D. F. and G. Mizon (1980) “An Empricial Application and Monte Carlo Analysis of Tests of
  Dynamic Specification”, Review of Economic Studies, 47:21-46.
Holly, A. (1982). “A Remark on Hausman’s Specification Test, ” Economefnca, v. 50: 749-759.
Hosking, J. R. M. (1980). “Lagrange Multiplier Tests of Time Series Models”, Journal of the Rqval
  Statistical   Society B, 42:170-181.
Jarque, C. and A. K. Bera (1980) “Efficient Tests for Normality, Homoscedasticity. and Serial
   Independence of Regression Residuals”, Economics Letters, 6:255-259.
King, M. L. and G. H. Hillier (1980). “A Small Sample Power Property of the Lagrange Multiplier
   Test”, Discussion Paper, Monash University.
Kmenta, .I. (1967). “On Estimation of the CES Production Function”, Internutional Economic Reoiew.
  8:180-189.
Koenker, R. (1981). “A Note on Studentizing a Test for Heteroscedasticity”,   Journal   of Economefrics,
  17:107-112.
Konstas, P. and M. Khouja (1969). “The Keynesian Demand-for-Money Function: Another Look and
  Some Additional”. Journal of Monet Credit and Banking. 1~765-777.
Lehmann, E. L. (1959). Testing Statishcal Hjyotheses. New York: John Wiley and Sons.
Neyman, J. (1959). “Optimal Asymptotic Tests of Composite Statistical Hypotheses”, in (U.
  Grenander, ed.) Probability and Statistics. Stockholm: Almquist and Wiksell, pp. 213-234.
Newbold, P. (1980), “The Equivalence of Two Tests of Time Series Model Adequacy”, Btometrica,
  671463-465.
Pifer, H. (1969) “A Non-linear Maximum Likelihood Estimate of the Liquidity trap,” Econome/ricu.
  371324-332.
Poskitt, D.S. and A.P. Tremayne (1980), “Testing the Specification of a Fitted ARMA Model”,
  Biometricu,    671359-363.
Rao, C. R. (1948) “Large Sample Tests of Statistical Hypothese Concerning Several Parameters with
  Application to Problems of Estimation”, Proceedings of the Cambridge Phllosophrcal Socie<lx,
  44150-57.
Reiss, P. (1982), “Alternative Interpretations of Hausman’s m Test”, manuscript Yale University.
Rothenberg, T. J. (1980) “Comparing Alternative Asymptotically Equivalent Tests”, invited paper
  presented at World Congress of the Econometric Society, Aix-en-Provence, 1980.
Sargan, J. D. (1964). “Wages and Prices in the United Kingdom: A Study in Econometric Methodol-
  ogy”, in (P.E. Hart, G. Mills, J.K. Whitaker, eds.) Econometric   Ana@sis for Nationul Economit
  Planning. London: Butterworths, 1964.
Sargan, J. D. (1980), “Some Tests of Dynamic Specification for a Single Equation”, Econometrica,
  481879-897.
Savin, N. E. (1976) “Conflicts Among Testing Procedures in a Linear Regression Model with
   Autoregressive Disturbances”, Econometrica, 44:1303-1313.
Silvey, D. S. (1959). “The Lagrangean Multiplier Test”, Annals of Murhemaricul Stutistics, 30:389-407.
Wald, A. (1943). “Tests of Statistical Hypotheses Concerning Several Parameters When the Number
   of Observations is Large”, Transacnons of the American Mathematical Sociey, 541426-482.
Watson, M. (1982). “A Test for Regression Coefficient Stability When a Parameter is Identified Only
   Under the Alternative”, Harvard Discussion Paper 906.
White, H. (1980). “A Heteroskedasticity Consistent Covariance Matrix Estimator and a Direct Test
   for Heteroskedasticity”, Econometrica, 48:817-838.
White, H. (1982). “Maximum Likelihood Estimation of M&specified Models”, Economerricu, 50:1-26.
White, K. (1972), “Estimation of the Liquidity Trap With a Generalized Functional Form”,
  Econometncu,      40:193-199.
Wilks, S. S. (1938), “The Large Sample Distribution of the Likelihood Ratio for Testing Composite
 Hypotheses”, Annals of Mathemurical Statistics, 9~60-62.



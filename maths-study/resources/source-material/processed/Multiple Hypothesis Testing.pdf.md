---
normalized_id: shared-pdf-reference-multiple-hypothesis-testing
exam_code: SHARED
material_scope: multiple hypothesis testing.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Multiple Hypothesis Testing.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-multiple-hypothesis-testing

Chapter     14



MULTIPLE HYPOTHESIS TESTING
N. E. SAVIN*
Triniq     College, Cumhridge




Contents

1.       Introduction                                                                                  828
2.       t and F tests                                                                                 830
         2.1. The model                                                                                830
         2.2. Tests                                                                                    831
         2.3.    Critical values-finite    induced test                                                833
         2.4. Acceptance regions                                                                       835
3.       Induced tests and simultaneous confidence intervals                                           843
         3.1. Separate hypotheses                                                                      843
         3.2.    Finite induced test-     4 of primary interest                                        844
         3.3. Infinite induced test-Scheffe test                                                       848
         3.4. Finite induced test- 4 of secondary interest                                             855
         3.5.    Simultaneous confidence intervals                                                     857
4.       The power of the Bonferroni and Scheffk tests                                                 860
         4.1.    Background                                                                            860
         4.2.    Power contours                                                                        861
         4.3.    Average powers                                                                        862
         4.4.    The problem of multicollinearity                                                      867
5.       Large sample induced tests                                                                    871
6.       Empirical examples                                                                            874
         6.1.    Textile example                                                                       874
         6.2.    Klein’s Model I example                                                               876
References                                                                                             877



  *This work was supported by National Science Foundation Grant SES 79-12965 at the Institute for
Mathematical Studies in the Social Sciences, Stanford University. The assistance of G. B. A. Evans is
gratefully acknowledged. I am also indebted to the following people for valuable comments: T. W.
Anderson, K. J. Arrow, R. W. Farebrother, P. J. Hammond, D. F. Hendry, D. W. Jorgenson, L. J.
Lau, B. J. McCormick, and J. Richmond.


 Hundhook of Econometrics,    Volume II, Edited           h_v Z. Griliches   and M.D.   Intriligutor
 0 Elsevier Science Publishers BV, 1984
828                                                                         N. E. Surin




1.    Introduction

The t and F tests are the most frequently used tests in econometrics. In regression
analysis there are two different procedures which can be used to test the
hypothesis that all the coefficients are zero. One procedure is to test each
coefficient separately with a t test and the other is to test all coefficients jointly
using an F test. The investigator usually performs both procedures when analyz-
ing the sample data. The obvious questions are what is the relation between the
two procedures and which procedure is better. Scheffe (1953) provided the key to
the answers when he proved that the F test is equivalent to carrying out a set of
simultaneous t tests. More than 25 years have passed since this result was
published and yet the full implications have barely penetrated the econometric
literature. Aside from a brief mention in Theil (1971) the Scheffe result has not
been discussed in the econometric textbooks; the exceptions appear to be Seber
(1977) and Dhrymes (1978). Hence, it is perhaps no surprise there are so few
applications of multiple hypothesis testing procedures in empirical econometric
research.
   This chapter presents a survey of multiple hypothesis testing procedures with
an emphasis on those procedures which can be applied in the context of the
classical linear regression model. Multiple hypothesis testing is the testing of two
or more separate hypotheses simultaneously. For example, suppose we wish to
test the hypothesis H: ,f3i= & = 0 where /?r and & are coefficients in a multiple
regression. In situations in which we only wish to test whether H is true or not we
can use the F test. It is more usual that when H is rejected we want to know
whether ,Bi or & or both are nonzero. In this situation we have a multiple
decision problem and the natural solution is to test the separate hypotheses H,:
PI = 0 and H2: /?, = 0 with a t test. Since H is true if and only if the separate
hypotheses H,: ,bl = 0 and HI: & = 0 are both true, this suggests accepting H if
and only if we accept HI and Hz. Testing the two hypotheses HI and H2 when
we are interested in whether & or & or both are different from zero induces a
multiple decision problem in which the four possible decisions are:

      do: HI and H, are both true,
      do’. . H 1 is true 9 H 2 is false,
      d”:   HI is false, H2 is true,
      d” : HI and H2 are both false.

Now suppose that a test of HI is defined by the acceptance region A, and the
rejection region R,, and similarly for H2. These two separate tests induce a
Ch. 14: Multiple   Hypothesis   Testing                                              829


decision procedure for the four decision problem, this induced procedure being
defined by assigning the decision d@’ to the intersection of A, and A,, do’ to the
intersection of A, and R, and so on. This induced procedure accepts H:
fll = & = 0 if and only if HI and H2 are accepted.
   More generally suppose that the hypothesis H is true if and only if the separate
hypotheses H,, Hz,. . . are true. The induced test accepts H if and only if all the
separate hypotheses are accepted. An induced test is either finite or infinite
depending on whether there are a finite or infinite number of separate hypotheses.
In the case of finite induced tests the exact sampling distributions of the test
statistics can be complicated, so that in practice the critical regions of the tests are
based on probability inequalities. On the other hand, infinite induced tests are
commonly constructed such that the correct critical value can be readily calcu-
lated.
    Induced tests were developed by Roy (1953), Roy and Bose (1953), Scheffe
(1953) and Tukey (1953). Roy referred to induced tests as union-intersection
tests. Procedures for constructing simultaneous confidence intervals are closely
associated with induced tests and such procedures are often called multiple
comparison procedures. Induced tests and their properties are discussed in two
papers by Lehmann (1957a, 1957b) and subsequently by Darroch and Silvey
(1963) and Seber (1964). A lucid presentation of the union-intersection principle
of test construction is given in Morrison (1976). I recommend Scheffe (1959) for a
discussion of the contributions of Scheffe and Tukey. A good reference for finite
induced tests is Krishnaiah (1979). Miller (1966, 1977) presents an excellent
survey of induced tests and simultaneous confidence interval procedures.
   The induced tests I will discuss in detail are the Bonferroni test and the Scheffe
test. These two induced tests employ the usual t statistics and can always be
applied to the classical linear regression model. The Bonferroni test is a finite
induced test where the critical value is computed using the well known Bonferroni
inequality. While there are inequalities which give a slightly more accurate
approximation, the Bonferroni inequality has the advantage that it is very simple
to apply. In addition, the Bonferroni test behaves very similarly to finite induced
tests based on more accurate approximations. I refer to the F test as the Scheffe
test when the F test is used as an infinite induced test. Associated with the
Bonferroni and Scheffe tests are the B and S simultaneous confidence intervals,
respectively. The Bonferroni test and the B intervals are discussed in Miller (1966)
and applications in econometrics are found in Jorgenson and Lau (1975)
Christensen, Jorgenson and Lau (1975) and Sargan (1976). The Scheffe test and
the S intervals are explained in Scheffe (1959) and the S method is reformulated
as the S procedure in Scheffe (1977a). Applications of the Scheffe test and the s
intervals in econometrics are given in Jorgenson (1971, 1974) and Jorgenson and
Lau (1982). Both the Bonferroni and Scheffe tests are also discussed in Savin
(1980).
830                                                                        N. E. Sovin

     The organizationof the chapter is the following. The relationship between t and
F tests is discussed in Section 2. In this section I present a detailed comparison of
the acceptance regions of the Bonferroni test and the F test for a special situation.
In Section 3 the notion of linear combinations of parameters of primary and
secondary interest is introduced. The Bonferroni test is first developed for linear
combinations of primary interest and then for linear combinations of secondary
interest. The Scheffe test is discussed and the lengths of the B and S intervals are
compared. The powers of the Bonferroni test and the Scheffe test are compared in
Section 4. The effect of multicollinearity on the power of the tests is also
examined. Large sample analogues of the Bonferroni and Scheffe tests can be
developed for more complicated models. In Section 5 large sample analogues are
derived for a nonlinear regression model. Section 6 presents two empirical
applications of the Bonferroni and Scheffe tests.


2.     t and F tests



2.1.     The model

Consider the regression model:

       y=xp+u,                                                                  (2.1)

where y is a T x 1 vector of observations on the dependent variable, X is a T x k
nonstochastic matrix of rank k, p is an unknown k X 1 parameter vector and u is
a T x 1 vector of random disturbances which is distributed as multivariate normal
with mean vector zero and covariance matrix a21 where e2 > 0 is unknown.
  Suppose we wish to test the hypothesis:

       H:   cpc=e=o,                                                            (2.2)
where C is a known q X k matrix of rank q _< k and c is a known q x 1 vector.
The minimum variance linear unbiased estimator of 8 is:

       z = Cb - c,                                                             (2.3)
where b = (X’X)-‘X’y       is the least squares estimator of /3. This estimator is
distributed as multivariate normal with mean vector 0 and covariance matrix u2V,
where V= C( X/X)-‘C’. An unbiased estimator of a2 is s2 where (T- k)s2 = (y
- Xb)‘(y - Xb).
  I will compare the acceptance regions of two tests of H. One test is the F test
and the other is a finite induced test based on t tests of the separate hypotheses.
Ch. 14: MultipleHypothesisTesting                                                   831

When H is rejected we usually want to know which individual restrictions are
responsible for rejection. Hence, I assume that the separate hypotheses are Hi:
0, = 0, i = 1,. . . , q. It is well known that the F test and the separate t tests can
produce conflicting inferences; for example, see Maddala (1977, pp. 122-124).
The purpose of comparing the acceptance regions of the two testing procedures is
to explain these conflicts.
   I first introduce the F test and the finite induced test. Next, I briefly review the
distributions and probability inequalities involved in calculating the critical value
and significance level of a finite induced test. Then the acceptance regions of the
two tests are compared for the case of two restrictions; the exact and Bonferroni
critical values are used to perform the finite induced test. Finally, I discuss the
effect of a nonsingular linear transformation of the hypothesis H on the accep-
tance regions of the F test and the finite induced test.


2.2.     Tests

2.2.1.       F test


The familiar F statistic is


       FE_
              zv lz
                                                                                 (2.4)
                 qs2   .

For an (Ylevel F test of H the acceptance region is:

       FsF,(q,T-k),                                                              (2.5)

where F,(q, T - k) is the upper (Ysignificance point of an F distribution with q
and T - k degrees of freedom. The F test of H is equivalent to one derived from
the confidence region:

       (z - e>‘v-l( z - e) 5 sv,                                                 (2.6)
where S2 = qF,(q, T - k). The inequality determines an ellipsoid in the Oi,. . . , dq
space with center at z. The probability that this random ellipsoid covers 8 is
1 - (Y.The F test of H accepts H if and only if the ellipsoid covers the origin.
   The F test has power against alternatives in all directions. Accordingly, 1
consider a finite induced test with the same property. It will become apparent the
acceptance region of the finite induced test is not the same as the acceptance
region of the F test.
832

2.2.2.       Finite induced test

Assume the finite induced test of H accepts H if and only if all the separate
hypotheses H,, . . . , H4 are accepted. The t statistic for testing the separate hy-
pothesis H,: &J,= 0 is:

         t[=&,               i=l,...,         q,                                     (2.7)



where y, is the i th diagonal element of V. The acceptance region of a 6 level
equal-tailed test of H, against the two-sided alternative H,*: 8, Z 0 is:

         It,11 f,,,(T- k),              i=l        ,*.*, 4,                         (2.8)

where t,,,(T - k) is the upper S/2 significance point of a t distribution with
T - k degrees of freedom.
   When all the equal-tailed t tests have the same significance level the acceptance
region for an (Ylevel finite induced test of H is:

         It,l I M,       i=l,...,q,                                                 (2.9)

where the critical value M is such that:

         P[max(/t,),...,It,l)(.MJH]                    =1-cw.                      (2.10)

In words, this finite induced test rejects H if the largest squared t statistic is
greater than the square of the critical value M. The significance level 6 of each
equal-tailed t test is given by:

         t,,,(T-     k) = M.                                                       (2.11)

The acceptance region of the (Ylevel finite induced test is the intersection of the
separate acceptance regions (2.9). For this reason Krishnaiah (1979) refers to the
above test as the finite intersection test. The acceptance region of the finite
induced test is a cube in the z r, . . . ,zq space with center at the origin and similarly
in the t 1,...,f, space.
   The finite Induced test of H is equivalent to one based on a confidence region.
The simultaneous confidence intervals associated with the finite induced test are
given by:

                                                                                   (2.12)
Ch. 14: Multiple Hypothesis Testmg                                                                 833


I call these intervals M intervals. The intersection of the M intervals is the finite
induced confidence region. This region is a cube in the 8,, . . . , f3, space with center
zt , . . . , zq. The probability that this random cube covers the true parameter point 8
is 1 - a. The (Ylevel finite induced test accepts H if and only if all the M intervals
cover zero, i.e. if and only if the finite induced confidence region covers the origin.


2.3.     Critical values -jinite      induced test

To perform an (Ylevel finite induced test we need to know the upper (Ypercentage
point of themax(It,I,...,   1t, I) distribution. The multivariate t and F distributions
are briefly reviewed since these distributions are used in the calculation of the
exact percentage points. The exact percentage points are difficult to compute
except in special cases. In practice inequalities are used to obtain a bound on the
probability integral of max((r,l,. .., It,\), when t,,.. ., t, have a central multi-
variate t distribution. Three such inequalities are discussed.

2.3.1.       Multivariate t and F distributions

Let x = (x1 , . . . , xp)’ be distributed as a multivariate normal with mean vector p
and covariance matrix ,I?= a2G where fi = (p,,) is the correlation matrix. Also, let
s2/02 be distributed independently of x as &i-square with n degrees of freedom.
In addition, let t, = x,fl,         i = 1, . . . ,p. Then the joint distribution of t,, . . . , t, is a
central or noncentral multivariate t distribution with n degrees according as p = 0
or CL# 0. The matrix s2 is referred to as the correlation matrix of the “accompany-
ing” multivariate normal. In the central case, the above distribution was derived
by Comish (1954) and by Dunnett and Sobel (1954) independently. Krishnaiah
and Armitage (1965a, 1966) gave the percentage points of the central multivariate
t distribution in the equicorrelated case p,, = p(i Z j). Tables of P[max(t,, t2) I a]
were computed by Krishnaiah, Armitage and Breiter (1969a). The tables are used
for a finite induced test against one-sided alternatives. Such a test is discussed in
Section 3.
   Krishnaiah (1963, 1964, 1965) has investigated the multivariate F distribution.
Let x, = (xlu,. . . ,x,,)‘, u = 1,. _. , m, be m independent random vectors which are
distributed as multivariate normal with mean vector p and covariance matrix
2 = (u,,). Also let:


       w,=     E x2  1”’
                           i=l     ,...,p.
              Ii=1


The joint distribution of w, , . . . , wp is a central or noncentral multivariate chi-square
834                                                                          N. E. Suvin

distribution with m degrees of freedom and with 2 as the covariance matrix of the
“accompanying” multivariate normal according as p = 0 or p Z 0. Let Fj =
nwjuoo/mwoaii and let wO/uoo be distributed independently of (wi,. . ., wp) as
&i-square with n degrees of freedom. Then the joint distribution of Fl, . . . , Fp is a
multivariate F distribution with m and n degrees of freedom with 52 as the
correlation matrix of the “accompanying” multivariate normal. When m = 1, the
multivariate F distribution is equivalent to the multivariate t2 distribution.
Krishna&      (1964) gave an exact expression for the density of the central
multivariate F distribution when _Z is nonsingular. Krishnaiah and Armitage
(1965b, 1970) computed the percentage points of the central multivariate F
distribution in the equicorrelated case when m = 1. Extensive tables of
P[max(( tll, (t21) _<c] have been prepared by Krishnaiah, Armitage and Breiter
(1969b). Hahn and Hendrickson (1971) gave the square roots of the percentage
points of the central multivariate F distribution with 1 and n degrees of freedom
in the equicorrelated case. For further details on the multivariate t and F
distributions see Johnson and Kotz (1972).

2.3.2.    Probability inequalities

The well known Bonferroni inequality states that:


      W ,,...,A,)        >l-      i P(A;),
                                 i=l
where A, is an event and AT its complement. Letting A, be the event 1tij I t3,2( n),
i=l , . . _,p, the Bonferroni inequality gives:

      P[max(lt,I,...,Ir,l)-<ts,,(n)]         21-6p,                             (2.13)

i.e. the probability that the point (tl,. . . , t,,) falls in the cube is 2 1 - 6p. The
probability is 2 1 - (Y when the significance level 6 is cx/p. Tables of the
percentage points of the Bonferroni t statistic have been prepared by Dunn (1961)
and are reproduced in Miller (1966). A more extensive set of tables has been
calculated by Bailey (1977).
   Sidak (1967) has proved a general inequality which can be specialized to give a
slight improvement over the Bonferroni inequality when both are applicable. The
Sidak inequality gives:

                                                                                (2.14)

In words, the probability that a multivariate t vector (tl,. . . , tp) with arbitrary
correlations falls inside a p-dimensional cube centered at the origin is always at
Ch. 14: Multiple Hypothesis Testing                                                        835

least as large as the corresponding probability for the case where the correlations
are zero, i.e. where xi,. . ., xp are independent. When the critical value c is t,,,(n)
the Sidak inequality gives:

       P[max(lr,l,...,It,l)~t,,,(n)]         2 (I-6)‘.                                  (2.15)

The probability is 2 1 - a when the significance level 6 is 1 - (1 - (Y)‘/P. The
Sidak inequality produces slightly sharper tests or intervals than the Bonferroni
inequality because (1- 8)P 2 1 - 6~. Games (1977) has prepared tables of the
percentage points of the Sidak t statistic. Charts by Moses (1976) may be used to
find the appropriate t critical value with either the Bonferroni or Sid&k inequality.
   In the special case where the correlations are zero, i.e. s2 = I, max( (t, ( , . . . , 1tpl)
has the studentized maximum modulus distribution with parameter p and n
degrees of freedom. The upper (Ypercentage point of this distribution is denoted
m( p, n). Using a result by Sidak (1967), Hochberg (1974) has proved that:

       P[max(Ir,I,...,       t,l)lm,(p,n)]     21-a,                                    (2.16)

where Q is an arbitrary correlation matrix, i.e. 52# I. Stoline and Ury (1979) have
shown that if 6 = 1 - (1 - LX) ‘lp, then ma(P, n) I t,,,( n ) with a strict inequality
holding when n = 00. This inequality produces a slight improvement over the
Sidak inequality. Hahn and Hendrickson (1971) gave tables of the upper per-
centage points of the studentized maximum modulus distribution. More extensive
tables have been prepared by Stoline and Ury (1979).
   A finite induced test with significance level exactly equal to (Yis called an exact
finite induced test and the corresponding critical value is called the exact critical
value. For a nominal (Ylevel test of p separate hypotheses the Bonferroni critical
value is t,,,(T-    k) with 6 = a/p, the Sidak critical value is t,,,(T-      k) with
6=1-(l-a)“P        and the studentized maximum modulus critical value is m,( p, T
- k). When the exact critical value is approximated by the Bonferroni critical
value the finite induced test is called the Bonferroni test. The Sidak test and the
studentized maximum modulus test are defined similarly. For the purpose of this
paper we use the Bonferroni test since the Bonferroni inequality is familiar and
simple to apply. However, the exposition would be essentially unchanged if the
Sidak test or the studentized. maximum modulus test were used instead of the
Bonferroni test.


2.4.     Acceptance regions

2.4.1.    Case of two restrictions

The acceptance regions of the F test, the Bonferroni test and the exact finite
induced test are now compared for the case of q = 2 restrictions. It is assumed
836                                                                         N. E. Sam


that a2 is known and that


      v=$-J _‘, -;],                Irl<l.                                     (2.17)


Christensen (1973) compared the powers of the F test and the Bonferroni test for
this case. I will discuss the power comparisons in Section 5.
   Since a* is assumed known the t statistics are distributed N(0, 1) under the null
hypothesis and the F statistic is replaced by the X2 statistic. These changes do not
change any important features of the tests, at least for the purpose of comparison.
   The covariance matrix a2V where V is given by (2.17) has a simple interpreta-
tion. Consider a model with K = 3 regressors:

      Y=[eqlp+u,                                                               (2.18)

where e is a T x 1 vector of ones, X, is T X 2 and P = (&, pi, p2)‘. Suppose the
hypothesis is H: /3t = p2 = 0. If both of the columns of Xi have mean zero and
length one, then a*V= u2( Xi’Xt))‘, where

      v-l=
             [       1
                 ‘, ; = x;x,,                                                  (2.19)

and where r is the correlation between the columns of Xi. In a model with K > 3
regressors (including an intercept) the covariance matrix of the least squares
estimates of the last two regression coefficients is given by u2V with V as in (2.17)
provided that the last two regressors have mean zero, length one and are
orthogonal to the remaining regressors.
   Consider the acceptance regions of the tests in the zi and z2 space. The
acceptance region of an (Ylevel X2 test is the elliptical region:

      z21 +2rz 12z + z22 I S2u2,                                              (2.20)

where S2 = X:(2) is the upper a! significant point of the X2 distribution with two
degrees of freedom. The acceptance region of a nominal a level Bonferroni test is
the square region:

                                                                              (2.21)


where B = t,,,( T - k) with 6 = a/2. This region is a square with sides
2Bu/49           and center at the origin. The length of the major axis of the
elliptical region (2.20) and the length of the sides of the square become infinite as
the absolute value of r tends to one.
Ch. 14: Multiple Hypothesis   Testing                                              837

    It will prove to be more convenient to study the acceptance regions of the tests
in the ti and t, space. The t statistic for testing the separate hypotheses H,: 8, = 0
is:

      t =Z,Ji7
                                 i=1,2,                                        (2.22)
       I
                  u      ’

where n/J3          is the standard deviation of zi and where t, and t, are N(O,l)
variates since u2 is known. Dividing both sides of (2.20) by the standard deviation
of z, the acceptance region of the x2 test becomes:

      tf + 2rt,t,     + 1-j < S2(1- r*),                                       (2.23)

which is an elliptical region in the t, and t, space. Rewriting the boundary of the
elliptical region (2.23) as:

      (t, + rtJ2 = ( s2 - tf)(l           -   r2),                             (2.24)

we see that the maximum absolute value of tl satisfying the equation of the ellipse
is S. By symmetry the same is true for the maximum absolute value of t,. Hence
the elliptical region (2.23) is bounded by a square region with sides 2S and center
at the origin. I refer to this region as the x2 box. Dividing (2.21) by the standard
deviation of z, the acceptance region of the Bonferroni test becomes:

      It,I 5 B,         i=1,2,                                                 (2.25)

which is a square region in the t, and t, space with sides 2B and center at the
origin. I call this region the Bonferroni box. In this special case B < S so that the
Bonferroni box is inside the x2 box. The acceptance region of the exact (Ylevel
finite induced test is a square region which 1 refer to as the exact box. The exact
box is inside the Bonferroni box. The dimensions of the ellipse and the exact box
are conditional on r. Since the dimensions of the x2 box and the Bonferroni box
are independent of r, the dimensions of the ellipse and the exact box remain
bounded as the absolute value of r tends to one.
   Savin (1980) gives an example of a 0.05 level test of H when r = 0. The
acceptance region of a 0.05 level x2 test of H is:

      t: + t; 5 s2 = 5.991.                                                    (2.26)

This region is a circle with radius S = 2,448 and center at the origin. The
acceptance region of a nominal 0.05 level Bonferroni test in the t, and t, space is
a square with sides 2B = 4.482 since 6 = 0.05/2 gives B = 2.241. Both the circle
838                                                                                      N. E. Satin


and the Bonferroni box are shown in Figure 2.1. When V= Z (and a2 is known)
the t statistics are independent, so the probability that both t tests accept when H
is true is (1- c?)~. If (1- S)2 = 0.95, then 6 = 0.0253. Hence, for an exact 0.05
level finite induced test the critical value is M = 2.236 and the exact box has sides
2M = 4.472. The difference between the sides of the Bonferroni and the exact box
is 0.005. The true significance level of the Bonferroni box is 1 - (0.975)2 = 0.0494,
which is quite close to 0.05.
   A comparison of the acceptance regions of the x2 test and the finite induced
test shows that there are six possible situations:

(1)   x2 and both t tests reject.
(2)   x2 and one but not both t tests reject.


                                             t
          A
                                                         / B




              k
              i-




                                                                           /
                                                                                               3
                                                                   2.236




      Figure 2.1 The acceptance regions of the Bonferroni and x2 tests where the correlation
                             r = 0 and the nominal size is a = 0.05.
Ch. 14: Multiple Hypothesis Testing                                               839


(3)   x2 test rejects but not the t tests.
(4)   Both t tests reject but not x2 test.
(5)   One, but not both t tests reject, nor x2 test.
(6)   Neither the t tests nor x2 test reject.

Cases 1 and 6 are cases of agreement while the remaining are cases of disagree-
ment. The x2 test and the finite induced test can produce conflicting inferences
since they use different acceptance regions. These six cases are discussed in the
context of the F test and the finite induced test by Gear-y and Leser (1968) and
Maddala (1977, pp. 122-124).
   From Figure 2.1 we see that H is accepted by the Bonferroni test and rejected
by the x2 when A is the point (tl, t2) and vice versa when B is the point (tl, t2).
Case 3 is illustrated by point A and Case 5 by point B. Maddala (1977) remarks
that Case 3 occurs often in econometric applications while Case 4 is not
commonly observed. Maddala refers to Case 3 as multicollinearity. Figure 2.1
illustrates that Case 3 can occur when r = 0, i.e. when the regressors are
orthogonal.
   Next consider the acceptance regions of the tests when r Z 0. The following
discussion is based on the work of Evans and Savin (1980). When r is different
from zero the acceptance region of the x2 test is an ellipse. The acceptance
regions of a 0.05 level x2 test in the t, and t, space are shown in Figure 2.2 for
r = 0.0 (0.2) 1.0. In Figure 2.2 the inner box is the nominal 0.05 level Bonferroni
box and the outer box is the x2 box. The ellipse collapses to a line as r increases
from zero to one.
   Observe that the case where both t tests reject and the x2 test accepts (Case 4)
cannot be illustrated in Figure 2.1. From Figure 2.2 we see that Case 4 can be
illustrated by point C. Clearly, r2 must be high for Case 4 to occur. Maddala
notes that this case is not commonly observed in econometric work.
   The true level of significance of the Bonferroni box decreases as r increases in
absolute value. The true significance level of a nominal (Ylevel Bonferroni box for
selected values of (Yand r are given in Table 2.1. When (Y= 0.05 the true levels are
roughly constant for r < 0.6. For r > 0.6, there is a noticeable decrease in the true
level. This suggests that the nominal 0.5 level Bonferroni box is a satisfactory
approximation to the exact box for r -e 0.6. The results are similar when the
nominal sizes are (Y= 0.10 and (Y= 0.01.
   As noted earlier the x2 test and the Bonferroni test can produce conflicting
inferences because the tests do not have the same acceptance regions. The
probability of conflict is one minus the probability that the tests agree. When H is
true the probability that the tests agree and that they conflict are given in Table
2.1 for selected values of (Yand r. For the case where the nominal size is (Y= 0.05,
although the probability of conflict increases as r increases (for r > 0), this
probability remains quite small, i.e. less than the significance level. This result
840                                                                                                    N. E. Smin

 3.0    c

                  ,
 2.5    -



 2.0    -



 1 .5



 1.0    -



 0 .5



 0.0



-0.5    -



-1.0    2



-1.5



-2.6



-2.5

                                                      /
            III       I/II        IIII    IlllillIl       III1
-3.0



        Figure 2.2           The acceptance regions of the Bonferroni and x2 tests in the r-ratio space for
                                     various correlations r and nominal size a = 0.05.



appears to be at variance with the widely held belief that conflict between the
Bonferroni and F tests is a common occurrence. Of course, this belief may simply
be due to a biased memory, i.e. agreement is easily forgotten, but conflict is
remembered. On the other hand, the small probability of conflict may be a special
feature of the two parameter case.
   Figure 2.2 shows a big decrease in the area of intersection of the two
acceptance regions as r increases and hence gives a misleading impression that
there is a big decrease in the probability that both tests accept as r increases. In
fact, the probability that both tests accept is remarkably constant. The results are
similar when the nominal sizes are (Y= 0.10 and cy= 0.01. As can be seen from
Ch. 14: MultipleH.vporhesis
                          Tesring                                                                             841

               Table        2.1   The    Probability   of Conflict      between  the    Chl   Square
                                        and Finite   Induced  Tests     and between
                                        the Chi Square and Bonferroni Tests.


           Nomlnal                      Finite   Induced   Test               Bonferroni Test
            Size        r                Agree      Conflict          Agree       Conflict     True    Size

             0.10      0.0               0.964       0.036            0.965        0.035        0.098
                       0.1               0.964       0.036            0.965        0.035        0.097
                       0.2               0.963       0.037            0.964        0.036        0.096
                       0.3               0.961       0.039            0.962        0.038        0.095
                       0.4               0.958       0.042            0.961        0.039        0.093
                       0.5               0.954        0.046           0.958        0.042        0.091
                       0.6               0.948        0.052           0.955        0.045        0.088
                       0.7               0.941        0.059           0.951        0.049        0.083
                       0.8               0.934        0.066           0.947        0.053        0.078
                       0.9               0.926        0.074           0.942        0.058        0.070
                       0.95              0.920        0.080           0.939        0.061        0.065
                       0.99              0.913        0.087           0.936        0.064        0.057
                       0.9999            0.909        0.091           0.934        0.066        0.051


              0.05     0.0               0.97%        0.022           0.978        0.022        0.049
                       0.1               0.978        0.022           0.978        0.022        0.049
                       0.2               0.977        0.023           0.978        0.022         0.049
                       0.3               0.976        0.024           0.977        0.023        0.048
                       0.4               0.975        0.025           0.976        0.024        0.048
                       0.5               0.973        0.027           0.975        0.025         0.046
                       0.6               0.971        0.029           0.974        0.026         0.045
                       0.7               0.967        0.033           0.972        0.028         0.043
                       0.8               0.963        0.037           0.970        0.030         0.040
                       0.Y               0.959        0.041           0.968        0.032         0.036
                       0.95              0.956        0.044           0.966        0.034         0.033
                       0.99              0.952        0.048           0.965        0.035         0.029
                       0.9999            0.950        0.050           0.964        0.036         0.025


              0.01     0.0               0.994        0.006           0.994        0.006         0.010
                       0.1               0.994        0.006           0.994        0.006         0.010
                       0.2               0.994        0.006           0.994        0.006         0.010
                       0.3               0.994        0.006           0.994        0.006         0.010
                       0.4               0.994        0.006           0.994        0.006         0.010
                       0.5               0.993        0.007           0.994        0.006         0.010
                       0.6               0.993        0.007           0.993        0.007         0.009
                       0.7               0.992        0.008           0.993        0.007         0.009
                       0.8               0.992        0.008           0.993        0.007         0.008
                       0.9               O.YYi        0.009           0.992        0.008         0.008
                       0.95              0.990        0.010           0.992        0.008         0.007
                       0.99              0.989        0.011           0.992        0.008         0.006
                       0.9999            0.989        0.011           0.992        0.008         0.005




Table 2.1 the results are also similar when the Bonferroni box is replaced by the
exact box.

2.4.2.   Equivalent hypotheses and invariance

In this section I discuss the effect of a nonsingular linear transformation of the
hypothesis H on the acceptance regions of the F test and the Bonferroni test.
Consider the hypothesis:
     H*: C*p-c*=#*=(),                                                      (2.27)
842                                                                        N. E. Saoin

where   C* is a known q* x k matrix of rank q* _<k and c* is a known q* X k
vector so that ST, @;, . . . ,/I$ are a set of q* linearly independent functions. The
hypotheses H* and H are equivalent when H* is true if and only if H is true.
Hence, H* and H are equivalent if the set of /3 for which 6 = 0 is the same as the
set for which 8* = 0.
   We now show that H and H* are equivalent if and only if there exists a
nonsingular q x q matrix A such that [ C*c*] = A[Cc] and hence q* = q. Our proof
follows Scheffe (1959, pp. 31-321. Suppose first that a q X q nonsingular matrix A
exists such that [C*c*] = A[Cc]. Then H* is true implies that 8* = C*/3 - c* =
A(@ - c) = 0. Thus, C/3 - c = 8 = 0 which implies that H is true. Similarly if His
true then H* is true.
   Suppose next that the equations C*/? = c* have the same solution space as the
equations CD = c. Then the rows of [C*c*] span the same space as the rows of
[Cc]. The q* rows of C* are linearly independent and so constitute a basis for this
space. Similarly, the q rows of C constitute a basis for the same space. Hence
q* = q and the q rows of C* must be linear combinations of the q rows of C.
Therefore [C*c*] = A[Cc], where A is nonsingular since rank C* = Rank C = q.
   If the hypotheses H* and H are equivalent, the F statistic for testing H* is the
same as the F statistic for testing H. Assume that H* and H are equivalent. The
numerator of the F statistic for testing H* is

        [C*b-c*]‘[C*(XW)-1c*~]-1[C*6-c*]

             =[c~-~]‘A’(A’)-‘[c(x’x)-‘c’]-‘A-~A[c~-~]

             =[cb-c][c(x’x)-‘c’]-l[cb-c].                                     (2.28)

This is the same as the numerator of the F statistic for testing H, the denominator
of the two test statistics being qs2. Hence the F tests of H* and H employ the
same acceptance region with the result that we accept H* if and only if we accept
H. This can be summarized by saying that the F test has the property that it is
invariant to a nonsingular transformation of the hypothesis.
   The finite induced test and hence the Bonferroni test does not possess this
invariance property. As an example consider the case where q = 2 and a2V = I
which is known. First suppose the hypothesis is H: 8, = 0, = 0. Then the accep-
tance region of the nominal 0.05 level Bonferroni test of H is the intersection of
the separate acceptance regions Jzl ) 5 2.24 and (z2J I 2.24. Now suppose the
hypothesis H* is 8: = 8, + 8, = 0 and 8; = 8, - 0, = 0. The acceptance region of
the nominal 0.05 level Bonferroni test of H* is the intersection of the separate
regions ]zi + z2] I (2)‘122.24 and ]zl - z2) I (2)‘122.24. The hypotheses H* and
H are equivalent, but the acceptance region for testing H* is not the same as the
region for testing H. Therefore, if the same sample is used to test both hypotheses,
H* may be accepted and H rejected and vice versa.
Ch. 14: Multiple     Hypothesis     Testing                                            843


   If all hypotheses equivalent to H are of equal interest we want to accept all
these hypotheses if and only if we accept H. In this situation the F test is the
natural test. However, hypotheses which are equivalent may not be of equal
interest. When this is the case the F test may no longer be an intuitively appealing
procedure. Testing linear combinations of the restrictions is discussed in detail in
the next section.


3.     Induced tests and simultaneous            confidence intervals


3.1.    Separate hypotheses

An important step in the construction of an induced test is the choice of the
separate hypotheses. So far, I have only considered separate hypotheses about
individual restrictions. In general, the separate hypotheses can be about linear
combinations of the restrictions as well as the individual restrictions. This means
that there can be many induced tests of H, each test being conditional on a
different set of separate hypotheses. The set of separate hypotheses chosen should
include those hypotheses which are of economic interest. Economic theory may
not be sufficient to determine a unique set of separate hypotheses and hence a
unique induced test of H.
   Let L be the set of linear combinations J/ such that every $ in L is of the form
J/ = a’8 where a is any known q X 1 non-null vector. In other words, L is the set of
all linear combinations of 8,, . . . ,O, (excluding the case of a = 0). The set L is
called a q-dimensional space of functions if the functions O,, . . . ,O, are linearly
independent, i.e. if rank C = q where C is defined in (2.2).
   The investigator may not have an equal interest in all the J, in L. For example,
in economic studies the individual regression coefficients are commonly of most
interest. Let G be the set of \cI of primary interest and the complement of G
relative to L, denoted by L - G, be the set of J, in L of secondary interest. It is
assumed that this twofold partition is fine enough that all JI in G are of equal
interest and similarly for all J, in L -G. Furthermore, it is assumed that G
contains q linearly independent combinations JI.
   The set G is either a finite or an infinite set. If G is infinite, then G is either a
proper subset of L or equal to L. In the latter case all the J, in L are of primary
interest. All told there are three possible situations: (i) G finite, L - G infinite; (ii)
G infinite, L - G infinite; (iii) G infinite, L - G finite. The induced test is referred
to as a finite or infinite induced test accordingly as G is finite or infinite.
   Let G be a finite set and let Gi, i =l,..., m, be the linear combinations in G.
The finite induced test of
       H(G):       ,j,1 = . . * =   I//,,, = 0
                                                                                    (3.1)
844                                                                              N. E. Saoin


accepts H(G) if and only if all the separate hypotheses,
       H,: 4, = 0,      i=l,...,m,                                                    (3.2)
are accepted and rejects H(G) otherwise. Since there are q linearly independent
combinations Jli, i = 1,. . . , q, in G, the hypotheses H(G) and H: I3= 0 are
equivalent and H(G) is true if and only if H is true. Hence, we accept H if all the
separate hypotheses H,, i = 1,. . . , m are accepted and reject H otherwise. This test
procedure is also referred to as the finite induced test of H. Similar remarks apply
when G is an infinite set. Since the induced test of H is conditional on the choice
of G, it is important that G be selected before analyzing the data.
   The set G may be thought of as the set of eligible voters. A linear combination
of primary interest votes for (against) H if the corresponding separate hypothesis
H(a) is accepted (rejected). A unanimous decision is required for H to be
accepted, i.e. all 4 in G must vote for H. Conversely, each 4 in G has the power to
veto H. If all J/ in L are of equal interest, then all II/in L are also in G so there is
universal suffrage. On the other hand, the set of eligible voters may have as few as
q members. The reason for restricting the right to vote is to prevent the veto
power from being exercised by 1c,in which we have only a secondary interest.
   Instead of having only one class of eligible voters it may be more desirable to
have several classes of eligible voters where the weight of each vote depends on
the class of the voter. Then the hypothesis H is accepted or rejected depending on
the size of the vote. However such voting schemes have not been developed in the
statistical literature. In this paper I only discuss the simple voting scheme
indicated above.
   It is worth remarking that when the number of 4 in G is greater than q the
induced test produces decisions which at first sight may appear puzzling. As an
example suppose q = 2 and that the J, in G are +I = ei, $+ = S,, and J/a = 8, + (3,.
Testing the three separate hypotheses H,: 4; = 0, i = 1,2,3, induces a decision
problem in which one of the eight possible decisions is:
       HI and H2 are both true,      H3 is false.                                     (3.3)
Clearly, when HI and H2 are both known to be true, then H3 is necessarily true.
On the other hand, when testing these three hypotheses it may be quite reasonable
to accept that HI and H, are both true and that H3 is false. In other words, there
is a difference between logical and statistical inference.


3.2.      Finite induced test - 4 of primary interest

3.2. I.    Exact test

Suppose that a finite number m of $ in L are of primary interest. In this case G is
a finite set. Let the Ic,in G be 4, = ai@, i = 1, . . . ,m. The t statistic for testing the
Ch. 14: Multiple   H.ypothesis   Testing                                            845


separate hypothesis H( a,): #, = Q = 0 is:
                                       ^
      r&J=         /&             =$              i=l,...,    m,                 (3.4)


where 4, = alz is the minimum variance unbiased estimator of #, and e$, = s2ujVu,
is an unbiased estimator of its variance where z and V are defined in Section 2.1.
For an equal-tailed 6 level test of H(ui) the acceptance region is:

       I&4l        5 b,,(T-         k),         i=l ,‘.., m.                     (3.5)

The finite induced test of H accepts H if and only if all the separate hypotheses
H(u,),. . . , H(u,) are accepted. When all the equal-tailed tests have the same
significance level the acceptance region for an (Ylevel finite induced test of H is:

       I4h)l~ M9                 i=l ,***, m,                                    (3.6)

where

      P[max(Ir,(q)l,...,              Ir&,)l)      I   MJH]    =l-   (Y.         (3.7)

The significance level of the separate tests is 6, where t,,,(T - k) = M. The
acceptance region of the finite induced test is the intersection of the separate
acceptance regions (3.6). This region is a polyhedron in the zr, . . . , zq space and a
cube in the r,,( a,), . . . , r,,( a,) space.
   Simultaneous confidence intervals can be constructed for all 1c/in G. The finite
induced procedure is based on the following result. The probability is 1 - (Ythat
simultaneously




I call these intervals M intervals. The intersection of the M intervals is a
polyhedron in the 6 space with center at z. The (Ylevel finite induced test accepts
H if and only if all the M intervals (3.8) cover zero, i.e. if and only if the finite
induced confidence region covers the origin.
   An estimate Ji of 4, is said to be significantly different from zero (s&z)
according to the M criterion if the M interval does not cover I/J,= 0, i.e. if
 $;I 2 MC?,&. Hence, H is rejected if and only if the estimate of at least one 4, in G
is sdfz according to the M criterion.
   The finite induced test can be tailored to provide high power against certain
alternatives. This can be achieved by using r tests which have unequal tails and
846                                                                           N. E. Savin

different significance levels. For example, a finite induced test can be used to test
against the alternative H **: 0 > 0. The acceptance region of a 6 level one-tailed t
test against H,**: ei > 0 is:

      t, < ts(T-     k),          i=i ,..., 4.                                     (3.9)

When all the one-tailed t tests have the same significance level the acceptance
region for an (Ylevel finite induced test of H is

      tixM,          i=l ,..., 43                                                (3.10)

where

      P[max(ti ,...,tq)          I MIH] =l-        (Y.                           (3.11)

The simultaneous confidence intervals associated with the above test procedure
are given by:

      P[z,-Mfi<8,;                   i=l,...,    q] =1-a.                        (3.12)

A finite induced test against the one-sided alternatives Hi* *: 8 -c 0, i = 1,. . . , q,
can also be developed. In the remainder of this chapter I only consider two-sided
alternatives.

3.2.2.   Bonferroni test

The Bonferroni test is obtained from the exact test by replacing the exact critical
value M by the critical value B given by the Bonferroni inequality. For a nominal
(Ylevel Bonferroni induced test of H the acceptance region is:

      It,(u,)I<    B,            i=i ,..., m,                                    (3.13)

where

      B = ta,Zm(T-         k).                                                   (3.14)

The significance level of the separate tests is 6 = a/m and the significance level of
the Bonferroni test is 5 a. The Bonferroni test consists of testing the separate
hypotheses using the acceptance region (3.13) where the critical value B is given
by (3.14). The acceptance region of the Bonferroni test in the zi,.. ., zq space is
referred to as the Bonferroni polyhedron and in the t,(a,), . . . , t,,(a,) space as the
Bonferroni box. The Bonferroni polyhedron contains the polyhedron of the exact
finite induced test and similarly for the Bonferroni box,
Ch. 14: Multiple   Hypothesis Testing                                             84-l

   The probability is r 1 - a that simultaneously

      1                      1


      J/;-B&+      <+iIrC/i+B’G,,          i=l ,..*, m,                       (3.15)


where these intervals are called B intervals. The B procedure consists in using
these B intervals. The Bonferroni test accepts H if and only if all the B intervals
cover zero, i.e. if and only if the Bonferroni confidence region covers the origin.
An estimate of si of #i is said to be so” according to the B criterion if the B
interval does not cover zero, i.e. I$,1 2 B~,J,.
   The Bonferroni test can be used to illustrate a finite induced test when m > q,
i.e. the number of separate hypotheses is greater than the number of linear
restrictions specified by H. Consider the case where m = 3, q = 2, and a2Y = I
which is known. Suppose that the three # in G are #r = I&, #z = 0,, and
J/3 = 8, + 0, and that tests of the three separate hypotheses Hi: J/i = 0, i =1,2,3,
are defined by the three separate acceptance regions:

      Izr ( I 2.39,         lz21 I 2.39,

      )zl + zzl 5 (2)“22.39 = 3.380,                                          (3.16)

respectively, where 2.39 is the upper 0.05/2(3) = 0.00833 significance point of a
N(0,1) distribution. The probability is 2 0.95 that the Bonferroni test accepts H
when H is true.
   The acceptance region of the Bonferroni test of H, which is the intersection of
the three separate acceptance regions, is shown in Figure 3.1. When A is the point
(zr, z2) the hypothesis H is rejected and the decision is that HI and H2 are both
true and H3 is false.
   For comparison consider the case where m = q = 2. The tests of the two
separate hypotheses #t = 8, = 0 and q2 = 0, = 0 are now defined by the two
acceptance regions :

      Izr I d 2.24,         lz21 I 2.24,                                      (3.17)

respectively, where 2.24 is the upper 0.05/2(2) = 0.0125 significance point of a
N(O,l) distribution. The acceptance region of this Bonferroni test of H is the
inner square region shown in Figure 3.1. With this region we accept H when A is
the point (zt, z2). When B is the point (zt, z2) the hypothesis H is accepted if &
is of primary interest and rejected if J/:, is of secondary interest. This comparison
shows that the Bonferroni test can accept H for one set of J, of primary interest
and reject H for another set.
848




                                                                                                           A
                                                                                                  -


                                                               .;



\                                                                                         ~


“\                                                                                        ’   I




                                                                                          I
      -3.38                                                                        2.24               39       3.38        5


                   \                                                                              \
                       ‘\




                                                                                          1

                                \\\
                                                       -3.38



                                                               \

         Figure 3.1         Acceptance regions of the Bonferroni test for the cases M = 2 and M = 3 when
                            q = 2 and (J’ V = I which is known. The nominal size is CI= 0.05.




3.3.          Injinite induced test - &he& test

3.3.1.         &he@ test

The Scheffk test is an infinite induced test where all 1c/in L are of primary interest.
This induced test accepts H if and only if the separate hypothesis,

        H(a):~=a’8=0,                                                                                                 (3.18)
Ch. 14: Multiple ffvporhesis Testing                                             849


is accepted for all non-null a. For a 6 level equal-tailed       test of H(a)   the
acceptance region is:
                                                                             (3.19)

where




When all the equal-tailed tests have the same significance level the acceptance
region for an (Ylevel infinite induced test of H is:

      I~&)l~       SY all non-null a,                                        (3.21)

where


        I0
      P maxIt,(a)l5SIH
                                  1=l-cy.                                    (3.22)

What is surprising is that the critical value S is given by the relatively simple
expression:

      s=JzGTT.                                                               (3.23)

The significance level 6 of the separate tests is given by t,,,( T - k) = S.
   The acceptance region is the intersection of the separate acceptance regions
(3.21) for all non-null a. A remarkable fact is that the acceptance region of an (Y
level Scheffe test of H is the same as the acceptance region of an (Ylevel F test of
H. As a consequence we start the Scheffe test with an F test of H. If the F test
rejects H the next step is to find the separate hypotheses responsible for rejection.
The test procedure consists of testing the separate hypotheses using the accep-
tance region (3.21) where the critical value S is given by (3.23).
   The Scheffe test assumes that all 4 in L are of equal interest, i.e. every 4 in L
has the power to veto H. When the Scheffe test is used in empirical econometrics
we are implicitly assuming that all J/ in L are of equal economic interest. In
practice, this assumption is seldom satisfied. As a consequence, if the Scheffe test
rejects, the linear combinations which are responsible for rejection may have no
economically meaningful interpretation. A solution to the interpretation problem
is to use the appropriate finite induced test.
   Simultaneous confidence intervals can be constructed for all 4 in L. The
probability is 1 - (Ythat simultaneously for all # in L:
850                                                                             N. E. Satin

where S is given by (3.23). These intervals are called S intervals. In words, the
probability is 1 - a! that simultaneously for all J, in L the S intervals cover J/. The
intersection of the S intervals for all J/ in L is the confidence region (2.6). This is
an ellipsoidal region in 8 space with center at z.
   An estimate 4 of 4 is said to be su” if the S interval does not cover $ = 0, i.e. if
 l$l> S$,. Hence, H is rejected if and only if the estimate of at least one \c,in L is
sdfi according to the S criterion.
   The Scheffe test and the S intervals are based on the following result:


                                 1   =1-a,                                          (3.25)


where t2(a) is the squared t ratio:


      t2(a)   =   (4    -   a2   =    Mz     -@I2                                  (3.26)
                        3;                 s2u’Vu’
and where S is given by (3.23). The result is proved in Scheffe (1959, pp. 69-70). I
will now give a simple proof.
   Observe that the result is proved by showing that the maximum squared z ratio
is distributed as qF(q, T - k). There is no loss in generality in maximizing t2(u)
subject to the normalization U’VU= 1 since t 2( a) is not affected by a change of
scale of the elements of a. Form the Lagrangian:

      L(u,X)=          [u’(z-e)/s]2-h(a’Va-1),                                     (3.27)

where h is the Lagrange multiplier. Setting the derivative of L(u, A) with respect
to a equal to zero gives:

      [(z-@(Z-@)‘-Mv]u=o.                                                          (3.28)

Premultiplying (3.28) by a’ and dividing by s2u’Vu shows that X = t2(u). Hence,
the determinantal equation:

      [(sv-‘(z-8)(z-B)‘-hz]                      =o,                               (3.29)

is solved for the greatest characteristic root A*. Since (3.29) has only one non-zero
root-the    matrix (z - 6)(z - 13)’has rank one-the greatest root is:

      h* = trace(s2V)-l(z             - S)(z - 8)‘= (z - S)‘(s’V))‘(z   - e),      (3.30)
Ch. 14: Multiple   Hypothesis   Testing                                           851


which is distributed as qF(q, T - k). The solutions to (3.28) i.e. the characteristic
vectors corresponding to A*, are proportional to (s2L’-‘(z - e) and the char-
acteristic vector satisfying the normalization a’Vu = 1 is a * = I/-‘(z - Q/\/sX*.
  The Scheffe induced test accepts H if and only if:

       maxti(u)       I S2,                                                    (3.31)


where t:(a) is t2(u) with 8 = 0. It follows from (3.30) that:

      t(+z,*) = zys2vyz,                                                       (3.32)

where a,* is the vector which maximizes t:(u). Since this t ratio is distributed as
qF( q, T - k) when H is true, the (Ylevel Scheffe test accepts H if and only if the (Y
level F test accepts H.
   When the F test rejects H we want to find which \i, are s&z. Since a,* can be
calculated from (3.30) we can always find at least one 4 which is sd’z, namely
5, = a,*‘~. Unfortunately, computer programs for regression analysis calculate the
F statistic, but do not calculate a$.
   When the hypothesis H is that all the slope coefficients are zero the components
of the a,* vector have a simple statistical interpretation. Suppose that the first
column of X is a column of ones and let D be the T x (k - 1) matrix of deviations
of the regressors (excluding unity) from their means. Since z is simply the least
squares estimator of the slope coefficients, z = (D’D)-‘D’y.            Hence a,* =
( D’D)z(s2qF)-    l/2 = D’y(s2qF)-‘/2  so that the components of a,* are propor-
tional to the sample covariances between the dependent variable and the regres-
sors. If the columns of D are orthogonal, then the components of a,* are
proportional to the least squares estimates of the slope coefficients, i.e. z. Thus, in
the orthogonal case $,, is proportional to the sum of the squares of the estimates
of the slope coefficients.
   For an example of the Scheffe test I again turn to the case where q = 2 and
a2V = Z which is known. When (Y= 0.05 the test of the separate hypothesis H(u)
is defined by the acceptance region:

       lt,,(u)l = lu’zl I 2.448,                                               (3.33)

where u’Vu = u’a = 1. Thus each separate hypothesis H(u) is tested at the 0.014
level to achieve a 0.05 level separate induced test of H. Geometrically the
acceptance region (3.33) is a strip in the zi and z2 space between two parallel lines
orthogonal to the vector a, the origin being midway between the lines. The
acceptance region or strip for testing the separate hypothesis H(u) is shown in
Figure 3.2. The intersection of the separate acceptance regions or strips for all
852                                                                                       N. E. Saoin




                                                 7‘




      Figure 3.2   Separate   acceptance regions or confidence intervals when q = 2 and 02V = I
                              which is known. The nominal size is (x = 0.05.




non-null a is the circular region in Figure 3.2. Recall that this circular region is
the acceptance region of a 0.05 level x2 test of H, i.e. the region shown in Figure
2.1. The square region in Figure 3.2 is the acceptance region of a 0.05 level
Bonferroni separate induced test of H when the only IJ in L of primary interest
are #r = 8, and G2 = t9,. As noted earlier these two acceptance regions can
produce conflicting inferences and hence the same is true for the Bonferroni and
Scheffe separate induced tests of H.
   The S interval for J, = a’0 is defined by the confidence region:

      lu’(t9 - z)I I 2.448,                                                                   (3.34)

which says that the point 8 lies in a strip of t?r and t9, space between two parallel
Ch. 14: Multiple Hypothesis Testing                                                   853


lines orthogonal to the vector a, the point (zi, z2) being midway between the
lines. The intersection of the S intervals for all 4 in L is the circular region in
Figure 3.2 when it is centered at (zi, z2) in the 8, and 0, space. The S procedure
accepts H if and only if all the S intervals cover zero, i.e. if and only if the circular
region in Figure 3.2 (interpreted as a 95% confidence region) covers zero.

3.3.2.     An extension

When the F test rejects, one or more t ratios for individual parameters may be
large enough to explain this rejection. As an extension of this result we want to
look at F statistics for subsets of the linear restrictions specified by H. If any of
these are sufficiently large then we would have found subsets of the restrictions
responsible for rejection. To carry out this extension of the S procedure we now
present a result due to Gabriel (1964, 1969).
   Consider testing the hypothesis:

      H,:C,/3-c,=t’,=O,                                                           (3.35)

where [C,c,] consists of any q* rows of [Cc] defined in (2.2). Let F, be the F
statistic for testing H* and let &a*) be the squared t ratio for testing:

      H&z,):         u;(C,p      - c*) = a;@, = 0,                                (3.36)

where c1* is q* x 1. With no loss of generality we may let [C*c,] consist of the
last q* rows of [Cc]. From the development (3.23) to (3.26) we find that

         maxti(u,)      = q*F,     = Ta:t,2(a),                                   (3.37)
          (1,

where I is the set of all non-null a vectors such that the first q - q* elements are
zero. Hence:

      q*F, 2 qF,                                                                  (3.38)

since the constrained maximum of t,‘(a) is less than or equal to the unconstrained
maximum. This establishes that when H is true the probability is 1 - (Ytha! the
inequality,

      qs+cF,I qF,(q,T- k) = S2,                                                   (3.39)

is simultaneously satisfied for all hypotheses H, defined in (3.35) where F, is the
F statistic for testing H,.
  The implication is that using acceptance region (3.39) we can test any number
of multivariate hypotheses H, with the assurance that all will be simultaneously
854                                                                          N. E. Savin


accepted with probability 1 - (r when the hypothesis H is true. The hypotheses
H, may be suggested by the data. When we begin the procedure with an (Ylevel F
test of H, this is a special case of H, when q * = q. For further discussion see
Scheffe (1977a).

3.3.3.   Conditional probability of coverage

The S intervals are usually not calculated when the F test accepts H since none is
considered interesting. In light of this practice Olshen (1973, 1977) has argued
that we should consider the conditional probability that the S intervals cover the
true values given rejection of H. Olshen (1973) has proved that:


      P[(b-P)‘X’X(b-P)         <s2,s21b’X’X’bxs2,S2]     <I---(y,                 (3.40)


for all /I and a2 provided S2 P 3(7’-- k) and (T- k) > 2. This means that under
certain mild conditions the conditional probability of coverage is always less than
the unconditional probability. Monte Carlo studies show that the conditional
probability can be substantially less than the unconditional probability.
   A simple example will serve to illustrate the difference between the conditional
and unconditional probability of coverage. Let x be an observation from N(p, 1).
The probability that the nominal 95% confidence interval for p covers p given
rejection of the hypothesis p = 0 by a 0.05 level standard normal test is P( Ix - ~1
 ~1.96~~x~~1.96).For~=lwehaveP(~x(~1.96)=0.1700andP(~x-~~~1.96,
 1x1 > 1.96) = 0.1435, so that the conditional probability            of coverage is
0.1435/0.1700 = 0.8441. For p = 4 the conditional probability is 0.95/0.9793 =
0.9701. In this example the conditional probability is < 0.95 when p < 3.92 and
 > 0.95 when p> 3.92.
   In general the S procedure is not satisfactory if one wants to control the
conditional probability of coverage since there is no guarantee that the condi-
tional probability is greater than or equal to the unconditional probability, the
latter being the only probability subject to control with the S procedure. Olshen’s
theorem shows that the unconditional probability can be a very misleading guide
to the conditional probability. The S intervals are often criticized for being too
wide, but they are two narrow if we want to make the conditional probability at
least as great as the unconditional. Thus, if like Olshen we are interested in
controlling the conditional probability, then we would want to replace the S
procedure with one which controls this probability; see Olshen (1973) for a
discussion of some developments along these lines.
    Suppose we decide before analyzing the data that we have a multiple decision
 problem. Then the unconditional probability of coverage is of interest. In this
 situation the F test is simply the first step in the S procedure. If the F test accepts
Ch. 14: Multiple   Hypothesis   Testing                                                855


H it is not customary to calculate the S intervals since it is known that they all
cover zero and if the F test rejects we do not actually calculate all the S intervals
since this is not feasible. On the other hand, suppose we do not decide before
conducting the F test that we have a multiple decision problem, but decide after
the F test rejects that we have such a problem. In this case the conditional
probability of coverage is relevant. Of course, we may be interested in both the
conditional and the unconditional probabilities. In this paper it has been assumed
that we decided to treat the testing problem as a multiple decision problem prior
to looking at the data, i.e. that the unconditional probabilities are the focus of
attention.



3.4.    Finite induced test - J, of secondary interest

Suppose after inspecting the data we wish to make inferences about linear
combinations of secondary interest. I now discuss how the finite induced test can
be generalized so that inferences can be made about all # in L. For this purpose I
adopt the general approach of Scheffe (1959, pp. 81-83). Following Scheffe the
discussion is in terms of simultaneous confidence intervals.
   Let G be a set of J, in L of primary interest and suppose we have a multiple
comparison procedure which gives for each \c,in G an interval:


       Ij - h+s I 1c,I 4 + h,s,                                                    (3.41)


where h, is a constant depending on the vector a but not the unknown 8. The
inequality (3.41), which may be written


       (a’(0 - z)I I h,s,                                                          (3.42)


can be interpreted geometrically to mean that the point 0 lies in a strip of the
q-dimensional space between two parallel planes orthogonal to the vector a, the
point z being midway between the planes. The intersection of these strips for all J,
in G determines a certain convex set C and (3.41) holds for all J/ in G if and only
if the point 8 lies in C. Thus, the problem of simultaneous confidence interval
construction can be approached by starting with a convex set C instead of a set G
of J, in L. For any convex set C we can derive simultaneous confidence intervals
for the infinite set of all J, in L by starting with the relation that the point 8 lies in
C if and only if it lies between every pair of parallel supporting planes of C.
856                                                                             N. E. Sarin

   Let L* be the set of Ic,in L for which a’Vu = 1 and G* be a set of m linear
combinations II,in L* of primary interest. This normalization is convenient since
the M intervals for all 4 in G* have length 2Ms and the S intervals for all 4 in L*
have length 2Ss. We now define the confidence set C of the M procedure to be the
intersection of the M intervals for all \cIin G* and the set C of the S procedure to
be the intersection of the S intervals for all $ in L*. In the M procedure C is a
polyhedron and in the S procedure C is the confidence ellipsoid defined by (2.6).
When 4 = 2 the region C is a polygonal region in the B procedure and an
elliptical region in the S procedure. In addition, if m = 2 and if a2V = 1, then C is
a square region in the M and B procedures and a circular region in the S
procedure, as depicted in Figure 2.1.
   Consider the case where the confidence region C is a square with sides 21%
Starting with a square we can derive simultaneous confidence intervals for all J, in
L*, not just for 8, and 0,. The square has four extreme points which are the four
corner points. There are only two pairs of parallel lines of support where each
supporting line contains two extreme points. These two pairs of lines define the M
intervals for the Ic,of primary interest, i.e. 13,and 0,, respectively, and contain all
the boundary points of the square. In addition to these two pairs of parallel lines
of support, there are an infinite number of pairs of parallel lines of support where
each line contains only one extreme point. One such pair is shown in Figure 3.2.
This pair defines a simultaneous confidence interval for some 4 of secondary
interest. We can derive a simultaneous confidence interval for every J, of
secondary interest by taking into account pairs of supporting lines where each
line contains only one extreme point.
   A general method for calculating simultaneous confidence intervals is given by
Richmond (1982). This method can be used to calculate M intervals for linear
combinations of secondary interest. I briefly review this method and present two
examples for the case of B intervals.
   Let G be a set of a finite number m of linear combinations of primary interest
and as before denote the linear combinations in G by 4, = a;0, i = 1,2,. . . ,m. Any
linear combination in L can be written as J, = clJll + c2G2 + . . . + c,\cI,, where
c = (cl,. . . , c,)‘, i.e. any 4 in L is a linear combination of the 4 in G. The method
is based on the following result. The probability is 1 - (Ythat simultaneously for
all 4 in L:




I also call these intervals M intervals. When c = (0,. . .,O, LO,. . . ,O)‘, the 1 occur-
ring in the ith place, the M interval is for #,, a # of primary interest.
Ch. 14: Mulrrple Hvpoihesis Testing                                                  851

   This result is a special case of Theorem 2 in Richmond (1982). The result (3.43)
is proved by showing that (3.43) is true if and only if:


       I&,- #,I I M~s*a;va:,          i=l   ,.‘.,   m.                            (3.44)


I will give a sketch of the proof. Suppose (3.44) holds. Multiply both sides of
(3.44) by Ic,l and sum over i=l,..., m. Then:


                                                                                  (3.45)


which is equivalent to (3.43). Conversely, suppose (3.43) holds for all $ in L. Take
c,=l and c,=O,j=l,...,     m,j#i.   Then


       I& - #,I 5 M/m,                i=l,...,q,                                  (3.46)


which completes the proof.
   For both examples I assume that q = 2 and u 2V = 1 which is known. In the first
exampl: suppose the m = 2 linear combinations in G are J,i = 8, and q2 = 9,.
Consider the B interval for 1c/= \/1/2(#, + q2) = \/1/2( 8, + 0,). When 6 = 0.05/2
the Bonferroni critical value is B = 2.24, so that the length of the B interval is
2(c, + c,)B = 2(2)m(2.24)        = 6.336. This is the case shown in Figure 3.2 when
the square region is centered at (zi, z2) in the 8, and 0, space, i.e. when the square
region is interpreted as a nominal 95% confidence region. In the second example
suppose m = 3 and J/ is of primary interest. When 6 = 0.05/3 the Bonferroni
critical value is B = 2.39 so that the length of the B interval for J/ is 2(2.39) = 4.78,
which is considerably less than when JI is of secondary interest. This shows that
the length of a B interval for a 4 in L can vary considerably depending on
whether J/ is of primary or secondary interest. In particular, the length of a B
interval for a 4 depends critically on the values of the c,‘s.


3.5.   Simultaneous confidence intervals

In this section I compare the lengths of the finite induced intervals and the S
intervals. The lengths are compared for the linear combinations of primary
interest and secondary interest. In many cases the B intervals are shorter for the J/
of primary interest. On the other hand, the S intervals are always shorter for at
least some 4 of secondary interest.
858                                                                        N. E. Savin

3.5.1.   J, of primary interest

Consider the set G of linear combinations of primary interest in the finite induced
test. The ratio of the length of the M intervals to the length of the S intervals for
Ic/in G is simply the ratio of A4 to S. For fixed q the values M and S satisfy the
relation:


      P yy    Ito      i MlH] = P[ max [to(a)1 i SIH],                        (3.47)
       I                            0

where Z is a set of m vectors. Since the restricted maximum is equal to or less than
the unrestricted, it follows that A4 5 S. Hence, the M intervals are shorter than
the S intervals for all q and m (m 2 q).
   The B intervals can be longer than the S intervals for all I+!J
                                                                 in G. Suppose G is
fixed. Then S is fixed and from the Bonferroni inequality (2.13) we see that B
increases without limit as m increases. Hence, for sufficiently large m the B
intervals are longer than the S intervals for all 4 in G. On the other hand,
numerical computations show that for sufficiently small m the B intervals are
shorter than the S intervals for all I/ in G. The above also holds for intervals
based on the Sidak or the studentized maximum modulus inequality. Games
(1977) has calculated the maximum number of J, of primary interest (the number
m) such that the intervals based on the Sidak inequality are shorter than the S
intervals for all 1c,in G.
   The effect of varying m (the number of \c,of primary interest) is illustrated by
the following examples. Suppose q = 2 and a2V=1 which is known. If G consists
of m = 4 linear combinations and if nominally LY         = 0.05, then applying the
Bonferroni inequality gives B = 2.50. Since S = 2.448 the S intervals are shorter
than the B intervals for all J, in G; the ratio of B to S is 1.02. The ratio of the
length of the exact finite induced intervals to the S intervals when m = 2 and
(Y= 0.05 is 0.913 since M = 2.236. If instead of calculating the exact 95% finite
induced confidence region we use the Bonferroni inequality, then B = 2.241 which
is also less than S. See Figures 4 and 5 in Miller (1966, pp. 15-16).
   In the case where m = q and (Y= 0.05 calculations by Christensen (1973) show
that the B intervals are shorter than the S intervals regardless of the size of q.
Similar results are reported by Morrison (1976, p. 136) for 95% Bonferroni and
Roy-Bose simultaneous confidence intervals on means. The Roy-Bose simulta-
neous confidence intervals are the same as S intervals in the case of the classical
linear normal regression model.
   Investigators object to the length of the S intervals. When the Scheffe test
rejects, the linear combinations responsible for rejection may be of no economic
interest. This may account for the fact that the Scheffe test and the S intervals are
not widely used. In theory the solution is to use a procedure where the set G is
Ch. 14: Multiple Hypothesis Testing                                                  859

suitably restricted. In practice it is difficult to construct such a procedure. One
approach is to use a finite induced test. The drawback is that to be operational we
have to apply approximations based on probability inequalities. As already noted,
when m is large relative to q the B intervals are longer than the S intervals and
similar results hold for intervals based on the Sidak or studentized maximum
modulus inequality. Another approach is to construct an infinite induced test
where G is a proper subset of L. No procedure analogous to the S procedure has
been developed for this case. It seems that there is no very satisfactory alternative
to the S intervals when m is sufficiently large.

3.5.2.   J/ of secondary interest

 When the B intervals are shorter for the J, of primary interest and the S intervals
 are shorter for some J/ of secondary interest there is a trade-off between the B
 procedure and the S procedure. It is instructive to compare the length of the
 simultaneous confidence intervals derived from the square region with sides
 2B = 4.482 with the intervals derived from the circular region with diameter
 2S = 4.895. The B procedure is the procedure which gives for each JI in L* an
 interval derived from the square region. The B intervals for 1c,in L* include the B
 intervals for 8, and r3,, which are the $ of primary interest. The length of the
 shortest B interval is equal to the length of the side of the square region and the
length of the longest B interval is equal to the length of the diagonal which is
 6.336. Since the length of the S intervals for all \c,in L* is 4.895 the S intervals are
 shorter than the B intervals for some J, in L*; in particular, the S interval is
shorter for J, = m(      13~+ t$), the B interval for this 4 being the one shown in
 Figure 3.2.
    When G is finite there are a few cases in the one-way lay-out of the analysis of
 variance where the exact significance level of the induced test of H can be easily
 calculated. In these cases it is also easy to calculate the probability that simulta-
 neously for all Ic/ in L the confidence intervals cover the true values. These cases
 include the generalized Tukey procedure [see Scheffe (1959, theorem 2, p. 74)]
 where the 1c, of primary interest are the pairwise comparisons (0, - e,), i,
j=l ,.*., q, i # j, and the “extended Dunnett procedure” developed by Schaffer
 (1977) where the 4 of primary interest are the differences (8, - 6,). i = 2,. . . , q.
 Schaffer (1977) found that the Tukey intervals are shorter than the S intervals for
 the J/ of primary interest in the generalized Tukey procedure and likewise that the
 Dunnett intervals are shorter than the S intervals for the $ of primary interest in
 the extended Dunnett procedure. On the other hand, the S procedure generally
 gives shorter intervals for the J, of secondary interest.
    Richmond (1982) obtained similar results when extending the Schaffer study to
include the case where the # of primary interest are taken to be the same as in the
extended Dunnett procedure and the intervals are calculated by applying the
860                                                                        N. E. Sam

Sidak inequality. For further comparisons between Tukey and S intervals see
Scheffe (1959, pp. 75-77) and Hochberg and Rodriquez (1977).


4.      The power of the Bonferroni and Scheffk tests


4. I.    Background

Since the power of the Scheffe test is the same as the power of the F test, it is
uniformly most powerful in certain situations. However, it is not uniformly more
powerful than the Bonferroni test. An attractive feature of the Bonferroni test is
that when it rejects, the linear combinations responsible for rejection are of
economic interest. This feature has to be weighed against the power of the test, i.e.
the probability that the test rejects H when H is false.
   Christensen (1973) and Evans and Savin (1980) have compared the power of
the x2 Bonferroni tests for the case where q = 2, a2 is known and V is defined as
in (2.17). The acceptance regions of both of these tests have been discussed in
Section 2.4. In this Section I review the power of the F test and the results of the
Christensen study.
   The power of the F test is a function of four parameters: the level of
significance 1y, the numerator and denominator degrees of freedom q and T - k,
and the noncentrality parameter h which is given by:


        h = e7-1e/02,                                                           (4.1)

when 0 is the true parameter vector. The power of the F test depends on 0 and
02V only through this single parameter. Therefore it has been feasible to table the
power of the F test; for selected cases it can be found from the Pearson and
Hartley (1972) charts or the Fox (1956) charts. In addition, the power can be
calculated for cases of interest using the procedures due to Imhof (1961) and Tiku
(1965). By contrast, little is known about the power of the Bonferroni test and it
has proved impracticable to construct tables of the power of the test.
   Christensen studied the powers of the 0.05 level x2 test and the nominal 0.05
level Bonferroni test along rays in the parameter space. Power calculations by
Chrsitensen show that neither test is more powerful against all alternatives. For
example, when r = 0 the Bonferroni test is more powerful against the alternative
8, = 8, = 1.5850. This is not surprising since neither of the acceptance regions
contain the other. Despite this, Christensen found that when the absolute value of
r was small the power of the two tests was approximately the same regardless of
the alternative. However, when the absolute value of r was high the Bonferroni
Ch. 14: Multiple Hypothesis Testing                                               861

test had very little power against any alternatives considered by Christensen. If
only 8t or @,is different from zero then the x2 test has good power regardless of
the value of r. When both 6, and 0, are different from zero the power of the x2
test is mixed. Against some alternatives the power is extremely good-increasing
with the absolute value of r. On the other hand, the power against other
alternatives decreases badly with increasing absolute value of r. One of the
potential explanations for the power of the Bonferroni test is that the actual level
of significance of the Bonferroni box decreases as the absolute value of r
increases. As noted earlier, for r = 0 the actual level is 0.0494 and as the absolute
value of r approaches one the actual level approaches 0.025.



4.2.   Power contours

The behavior of the power function is described by its contours in the parameter
space. A power contour is the set of all parameter points 8 at which the power is
constant. The power contours of the F test can be obtained from the expression
for the noncentrality parameter (4.1). This is because the power of the F test is the
same at parameter points fl with a given value of the noncentrality parameter. The
power of the F test is constant on the surfaces of ellipsoids in the 8 space, but
the general properties of the power contours of the Bonferroni test are unknown.
   Evans and Savin calculate the power contours of the 0.05 level x2 test and
nominal 0.05 level Bonferroni test in the (e,~~)/a               and ( e2J1-r’)/a
parameter space. The power contours for correlations r = 0.0, 0.9, 0.99 at power
levels 0.90, 0.95, 0.99 are shown in Figure 4.l(a-c). When r = 0.0 [Figure 4.1(a)]
the power contours of the x2 test are circles with center at the origin while the
contours of the Bonferroni test are nearly circular. At a given power level the x2
and the Bonferroni power contours are close together. Thus, both tests have
similar powers which confirms the results of Christensen. We also see that the
contours for a given power level cross so that neither test is uniformly more
powerful.
   When the correlation is r = 0.90 [Figure 4.1(b)] the power contours of the
Bonferroni test are not much changed whereas those of the x2 test have become
narrow ellipses. Hence for a given power level the contours of the two tests are no
longer close together. The x2 test is more powerful at parameter points in the
upper right hand and lower left hand parts of the space and the Bonferroni test at
points in the extreme upper left-hand and lower right-hand comers of the space.
For r = 0.99 [Figure 4.1(c)] we see that the power contours of the Bonferroni test
continue to remain much fatter than those of the x2 test even when the power is
quite close to one. In short, when the correlation Y is different from zero the x2
test has higher power than the Bonferroni test at most alternatives.
862                                                                                        N. E. Suvin

      5


      4


      3


      2


      1


      0


  -1
                                                                       x2 Test
 -2


 -3


 -4



 -5
       -5       -4         -3      -2       -1        0         1       2        3        4         5
                                                    (a)
       Figure 4.1    (a) The 90.95 and 99% power contours (in the transformed parameter space) of
                      the Bonferroni and x2 tests for r = 0.0 and nominal size a = 0.05.



4.3. Average powers

When neither test is uniformly more powerful the performance of the tests can be
compared on the basis of average power. Since V is a positive definite matrix
there exists a nonsingular matrix P such that P’VP = I and @*= P-‘8. Then the
noncentrality parameter can be written as:


          A = 8*‘8*/&                                                                           (4.2)
Ch. 14: Multiple Hypothesis Testing

      5L




 -1


 -2



-3


-4




      -5      -4        -3        -2       -1        0        1        2        3        4         5
                                                   (b)
       Figure 4.1   (b) The 90.95 and 99% power contours (in the transformed parameter space) of
                    the Bonferroni and x2 tests for r = 0.90 and nominal size a = 0.05.
Thus, the power of the F test is constant on the surface of spheres with center at
the origin in the 8* space. In other words, in the transformed space the power of
the F test is the same at all alternatives which are the same distance from the null
hypothesis (the origin). The F test maximizes the average power on every sphere
in the transformed space where the average power is defined with respect to a
uniform measure over spheres in this space; see Scheffe (1959, pp. 47-49). Hence
the F test is best when we have the same interest in all alternatives which are the
same distance from the null in the transformed parameter space.
   It may be more natural to suppose that we have an equal interest in all
alternatives which are equally distant from the null in the 8 parameter space. On
this assumption the best test is the one which maximizes the average power on
864                                                                                           N. E. Sacin

      5,
                                                                                       a - 0.05
                                                                                       r - 0.99
      a



      3



      2


      1


  0


 -1


 -2


-3


-a


-5
          -5       -4        -3      -2       -1         0        1       2        3        4          5

                                                       (4
           Figure 4.1   (c) The 90,95 and 99% power contours (in the transformed parameter space) of
                        the Bonferroni and x2 tests for r = 0.99 and nominal size LY
                                                                                   = 0.05.


every sphere in the 8 parameter space. Evans and Savin (1980) define the average
power with respect to a uniform measure over the sphere in the 8 space. Using
this definition Evans and Savin calculate the average power of an a level x2 test, a
nominal (Ylevel Bonferroni test and an exact (Ylevel finite induced test. The
results are reported in Table 4.1 for selected values of the radius R of the circle,
the correlation r and significance levels LX.
   When r = 0 the average power of both tests is very similar. This is because both
tests have very similar power contours in this case, namely circles for the x2 test
and nearly circles for the Bonferroni test. On the other hand, when r is near one
and the radius R of the circle is small the average power of the x2 test is markedly
Ch. 14: Multiple     Hypothesis       Testing                                                                                865

                                                             Table 4.1
                            Average       Powers     of    the     Bonferroni(B),Chi-Square(CS)
                                         and    Exact     Finite     Induced(E)   Tests.


                              kO.10                                                                        o=O.Ol




    r       A         B           CS                             8          CS        E              B        CS       E


  0.0     c.0      0.0975     0.1000       0.1000           0.0494      0.0500    0.0500      0.0100       0.0100   0.0100
          0.5      0.1249     0.1290       0.1278           0.0676      0.0693    0.0683      0.0158       0.0162   0.0158
          1.0      0.2088     0.2177       0.2127           0.1271      0.1327    0.1283      0.0381       0.0404   0.0381
          1.5      0.3468     0.3626       0.3516           0.2365      0.2495    0.2382      0.0897       0.0974   0.0898
          2.0      0.5203     0.5423       0.5254           0.3933      0.4154    0.3954      0.1857       0.2039   0.1858
          2.5      0.6944     0.7182       0.6989           0.5740      0.6028    0.5761      0.3306       0.3634   0.3308
          3.0      0.8347     0.8545       0.8379           0.7419      0.7707    0.7437      0.5081       0.5533   0.5084
          3.5      0.9252     0.93al       0.9270           0.8675      0.81199   0.8687      0.6845       0.7327   0.6847
          4.0      0.9721     0.9786       0.9729           0.9432      0.9567    0.9439      0.8265       0.8666   0.8267
          4.5      0.9915     0.9940       0.9918           0.9799      0.9862    0.9802      0.9194       0.9454   0.9195
          5.0      0.9979     0.9987       0.9980           0.9942      0.9965    0.9943      0.9687       0.9819   0.9687


   0.5    0.0      0.0907     0.1000       0.1000           0.0465      0.0500    0.0500          0.0096   0.0100   0.0100
          0.5      0.1177     0.1388       0.12116          0.0642      0.0761    0.0686          0.0153   0.0186   0.0159
           1.0     0.2011     0.2566       0.2159           0.1225      0.1637    0.1293          0.0371   0.0551   0.0382
          1.5      0.3403     0.4377       0.3594           0.2310      0.3204    0.2412          0.0878   0.1447   0.0900
          2.0      0.5183     0.6324       0.5390           0.3890      0.5172    0.4019          0.1826   0.3004   0.1863
          2.5      0.6978     0.7890       0.7159           0.5737      0.6993    0.5870          0.3271   0.4939   0.3322
          3.0      0.8401     0.8903       0.8525           0.7458      0.8313    0.7567          0.5064   0.6732   0.5121
          3.5      0.9285     0.9474       0.9352           0.8722      0.9127    0.8792          0.6862   0.8062   0.6914
          4.0      0.9724     0.9769       0.9753           0.9455      0.9583    0.9490          0.8305   0.8929   0.8343
          4.5      0.9905     0.9909       0.9916           0.9797      0.9819    0.9812          0.9225   0.9453   0.9246
          5.0      0.9970     0.9968       0.9974           0.9931      0.9930    0.9937          0.9694   0.9746   0.9703


   0.9    0.0      0.0704     0.1000       0.0995           0.0362      0.0500    0.0500          0.0076   0.0100   0.0100
          0.5      0.0998     0.2538       0.1365           0.0547      0.1640    0.0733          0.0133   0.0575   0.0170
           1.0     0.1855     0.5844       0.2393           0.1130       0.4869   0.1440          0.0344   0.3050   0.0425
          1.5      0.3262     0.7777       0.3978           0.2204       0.7188   0.2673          0.0838   0.5949   0.0997
          2.0      0.5104     0.8655       0.5915           0.3786       0.8250   0.4389          0.1768   0.7404   0.2031
          2.5      0.7055     0.9169       0.7765           0.5698       0.8869   0.6346          0.3198   0.8209   0.3560
          3.0      0.8564     0.9501       0.8962           0.7563       0.9281   0.8083          0.5002   0.8756   0.5417
          3.5      0.9353     0.9716       0.9533           0.8860       0.9563   0.9128          0.6882   0.9158   0.7273
          4.0      0.9714     0.9849       0.9798           0.9492       0.9751   0.9612          0.8429   0.9455   0.8687
          4.5      0.9881     0.9926       0.9918           0.9778       0.9868   0.9834          0.9305   0.9668   0.9421
          5.0      0.9954     0.9967       0.9970           0.9909       0.9936   0.9933          0.9693   0.9812   0.9745




higher than the average power of the Bonferroni test. This is because over a circle
of a given radius the average power of the x2 test increases as r increases and the
average power of the Bonferroni test is virtually constant for all r. As the radius R
of the circle increases the average power of the Bonferroni test approaches that of
the x2 test.
   The average power of the exact finite induced test is similar to the average
power of the Bonferroni test. For CI= 0.05 the maximum difference between the
average power of the exact test and the Bonferroni test occurs at r = 0.90 for a
circle of given radius. The average power of the exact test is about 0.065 (11.5%)
higher than the average power of the Bonferroni test when the radius is R = .25
and 0.027 (3%) high er when the radius is R = 3.5. The corresponding figures are
866                                                                                                            N. E. Saoir

       1.a
      a '3
      il.9
      a:
      a5

      a:
      an

      a 3
      a.:

      a I

      a.a




      I .a
      a ‘3

      a-3
      a.:

      a5

      a:
      a     A
      a     3
      a:
      a I              a = 0.05
                            l,I1I,,,,,,,,,,,,,,/,,,,,/,,,,,,,,,,,,,,,,1,,,,,,,,,,,,,
      aa
                a          1:                         38                         1;:   Isa   22:   :7a   3’:     :’




      I .a
      a ‘3

      as
      a 7

      a5
      a:
      ad
      a     :
      a:

      a 1




Figure 4.2           The power of the Bonferroni (broken lines) and the x2 (full lines) tests at radii
R = 2(0.5)5         as a function of the direction in degrees. The correlation is r = 0.9 and the nominal sizes
                                               are a = 0.10, 0.05 and 0.01.
Ch. 14: Multiple Hypothesis Testing                                                  867

somewhat    h&her   if (Y= 0.10 and lower if (Y= 0.01. As a consequence, when the
correlation r is near one the exact test is also a poor competitor of the X2 test over
smaller radius circles.
   Evans and Savin have plotted the behavior of the power over the circle for an (Y
level X2 test and a nominal a level Bonferroni test. The power over various circles
is shown in Figure 4.2 for the case r = 0.90 and (Y= 0.10, 0.05 and 0.01. The X2
test has excellent power at most points on each circle. The power dips sharply
only in the neighborhood of 135 and 315 degrees. The Bonferroni test has better
power than the X2 test only in the neighborhood of 135 and 315 degrees and even
here the power of the Bonferroni test is only marginally better than that of the X2
test. The Bonferroni test has more uniform, but substantially lower power over
the smaller radius circles. For larger radius circles the power of the Bonferroni
test is higher and hence compares more favorably to the X2 test. The picture for
the exact finite induced test is similar with slightly higher power than the
Bonferroni test at all points on the circle.
   When the finite induced intervals are shorter than the S intervals for the J/ of
primary interest it is common practice to conclude that the finite induced
procedure (test) is superior to the S procedure (Scheffe test), for example, see
Stoline and Ury (1979). Of course, if the finite induced intervals are shorter for all
J, in L, then the finite induced test is uniformly more powerful. However, the S
intervals are generally shorter for some J/ of secondary interest. When the S
intervals are shorter for some # of secondary interest the Scheffe test may have
higher average power. This is clearly demonstrated by the comparison of the
average powers of the X2 test and the Bonferroni test for the case of q = 2
parameters. Hence, it is misleading to conclude that the finite induced test is
superior because the finite induced intervals are shorter for the 4 of primary
interest. To our knowledge there is no evidence that any of the well known
competitors of the Scheffe test have higher average power.


4.4.    The problem of multicollinearity

The problem of multicollinearity arises when the explanatory variables are
correlated, i.e. the columns of the regressor matrix X are not orthogonal. In
discussions of the collinearity problem the individual regression coefficients are
taken to be the parameters of primary interest. This is a point of crucial
importance. A full rank regressor matrix can always be transformed so as to
eliminate multicollinearity, but the regression coefficients in the transformed
problem may no longer be of primary interest.
   Learner (1979) provides an excellent discussion of the collinearity problem from
a Bayesian point of view. He observes (pp. 71-72):
       . . . that there is a special problem caused by collinearity. This is the problem
       of interpreting multi-dimensional evidence. Briefly, collinear data provide
868                                                                          N. E. Satin


      relatively good information about linear combinations of coefficients. The
      interpretation problem is the problem of deciding how to allocate that
      information to individual coefficients. This depends on prior information. A
      solution to the interpretation problem thus involves formalizing and utilizing
      effectively all prior information. The weak-evidence problem however
      remains, even when the interpretation problem is solved. The solution to the
      weak-evidence problem is more and better data. Within the confines of the
      given data set there is nothing that can be done about weak-evidence.

   The interpretation problem can be interpreted as a multiple decision problem
where there are q separate hypotheses, each specifying that an individual regres-
sion coefficient is equal to zero. In classical inference the finite and infinite
induced tests are two approaches to solving the interpretation problem. The finite
induced test provides a guaranteed solution to the interpretation problem whereas
the infinite induced test has a probability of less than one of providing a solution.
Multicollinearity plays an important role because of its effect on the power of the
tests. Consider the Christensen two parameter case where the null hypothesis is
H: & = /3z = 0. The correlation r = 0 if the relevant two regressors are orthogonal.
The Bonferroni and Scheffe tests have similar average power for orthogonal or
nearly orthogonal data. As the correlation r increases the average power of the
Bonferroni test decreases compared with that of the Scheffe test. This means that
for multicollinear data the Bonferroni test solves the interpretation problem at a
cost; the cost is lower average power than for the Scheffe test. Hence there is a
trade-off between the probability of solving the interpretation problem and the
power of the test. The advantage of orthogonal data is that we can always decide
which individual regression coefficients are responsible for rejection at a very
small sacrifice of average power.
   What we want to know is the conditional probability that the Scheffe test solves
the interpretation problem given that it has rejected the null hypothesis. The
conditional probability that the Scheffe test rejects H,: /3t = 0 or HI: & = 0 or
both given that it has rejected H is the probability that the point (t,, tz) is outside
the x2 box divided by the probability that is outside the x2 ellipse. This
conditional probability is calculated for significance levels (Y= 0.10,0.05,0.01,
correlations r = 0.0,0.5,0.9 and radii R = 0.0(0.5)   4.50. In the (&~~)/o          and
(&~D)/IJ         parameter space a point can be described by the angle of a ray
from the origin to the point and the distance of the point along this ray. Because
of the symmetry of the problem the calculations were done for angles between 45
and 135 degrees inclusive. Selected results are reported in Tables 4.2 and 4.3.
   The results in Table 4.2 show that on small radius circles the average condi-
tional probability can decrease as the correlation r increases. For example, at
(Y= 0.05 and R = 1.0the average conditional probability is 0.637 when r = 0.0 and
only 0.234 when r = 0.9, the decrease being 63%. The decrease is 58.1% when
C-h. 14: Multiple Hypothesis               Testing                                                                                                        869

                                                                           Table 4.2

                Average      Conditional            Probabilities              of     rejecting            B,=O     ot-   B,=O     (OI.   both)
                             given        that     the      Chi-Square         Test        rejects.


                                kO.10                                                      a:O.05                                            rt-0.01




  r       R           ACP            AP              ACS                     ACP             AP              ACS                   ACP            AP     ACS


 0.0     0.0       0.6274       0.0627            0.1000                   0.5709       0.0285           0.0500                  0.4806      0.0048    0.0100
         0.5       0.6503       0.083')           0.1290                   0.5933       0.0411           0.0693                  0.5005      0.0081    0.0162
         1.0       0.6966       0.1517            0.2177                   0.6769       0.0845           0.1327                  0.5364      0.0217    0.0404
         1.5       0.7484       0.2715            0.3626                   0.6867       0.1713           0.2495                  0.5778      0.0563    0.0974
         2.0       0.8029       0.4354            0.5423                   0.7415       0.3OMl           0.4154                  0.6259      0.1276    0.2039
         2.5       0.8576       0.6159            0.7182                   0.7999       0.4822           0.6028                  0.6811      0.2475    0.3634
         3.0       0.9079       0.7756            0.8545                   0.8583       0.6615           0.7707                  0.7427      0.4110    0.5533
         3.5       0.94b3       0.8897            0.93bl                   0.9109       0.8106             0.88519               0.8080       0.5920   0.7327
         4.0       0.9757       0.9548            0.9786                   0.9519          0.9107          0.9567                0.8711       0.7549   0.8666
         4.5       0.9YO7       0.9848            0.9940                   0.97b4          0.9649          0.9862                0.9248       0.8743   0.9454
         5.0       O.YY71       0.9958            0.9987                   O.YY2 1         0.9b86          0.9965                0.9630       0.9455   0.9819


 0.5     0.0       0.5881        0.0588           0.1000                   0.5422          0.0271          0.0500                0.4672       0.0047   0.0100
         0.5       0.5767        0.0795           0.1390                   0.5240          0.0393          0.0761                0.4386       0.0079   0.0186
         1.0       0.5905        0.1461           0.2569                   0.5313          0.0817          0.1637                0.4380       0.0212   0.0551
          1:5       0.6373       0.2656           0.4379                   0.5700          0.1672          0.3204                0.4640       0.0552   0.1447
         2.0        0.7085       0.4319           0.6326                   0.6324          0.3036          0.5172                0.5081       0.1256   0.3004
          2.5       0.7954       0.6171           0.7891                   0.7158          0.4798          0.6993                0.5713       0.2445   0.4939
          7.0       0.8810       0.7807           0.8906                   0.8107          0.6632          0.8313                0.6559       0.4082   0.6732
          315       014442       0.8942           0.9476                   0.8964          0.8150          0.9127                0.7567       0.5916   0.8062
          4.0       0.9790       0.9566           0.9771                   0.9544          0.9143          0.9583                0.8553       0.7576   0.8929
          4.5       0.9934       0.9844           0.9911                   0.9835          0.9658          0.9819                0.9298       0.8780   0.9453
          5.0       0.9980       0.9948           0.9968                   0.9948          0.9879          0.9930                0.9722       0.9476   0.9746


  0.Y     0.0       0.4568       0.0457           0.1000                   0.4240          0.0212          0.0500                0.3734       0.0037   0.0100
          0.5       0.3074       0.0676            0.2538                  0.2581          0.0337          0.1640                0.1905       0.0069   0.0575
          1.0       0.2920       0.1346            0.5844                  0.2341          0.0755          0.4869                0.1636       0.0198   0.3050
          1.5       0.3708       0.2533            0.7777                   0.2675         0.1594          0.7188                0.1839       0.0528    0.5949
          2.0       0.5104       0.4214            0.8655                   0.3985         0.2943          0.8250                0.2414       0.1217    0.7404
          2.5       0.6801       0.6162            O.Yl69                   0.5528         0.4722          0.8869                0.3438       0.2389    0.8209
          3.0       0.8367       0.7943            0.1750                   0.7231         0.6651          0.9281                0.4883       0.4016    0.8756
          3.5       0.9318       0.9059            0.9716                   0.8670         0.8287          0.9563                0.6544       0.5879    0.9158
          4.0       0.9724       0.9580            O.vb4v                   0.9464         0.9233          0.9751                0.8108       0.7638    0.9455
          4.5       0.9891       O.Yb19            O.,Y926                  0.9787         0.9660          0.9860                0.9202       0.8898    0.9668
          5.0       0.9960       0.9927            0.9967                   0.9918         0.9855          0.9936                0.9696       0.9517    0.9812



         ACP       Average      Conditional              Probability           of     rejecting            B1=O     or    B,=O     (or    both)
                                          given      that      the     chi-square            test     reJects.


         AP        Average      Probability              of    rejecting            B,=O     or     B,=O     (or     both).


         ACS       Average      probability              that        the    Chi-Square            test      rejects.




(Y =0.10 and 69.4% when (Y= 0.01. On large radius circles the average conditional
probability increases as r increases from r = 0, eventually decreasing. Holding the
average power of the Scheffe test constant the average conditional probability
decreases as the correlation r increases. For instance, when (Y= 0.05 and the
average power is roughly 0.45 the average conditional probability falls from about
0.75 to 0.24 as r moves from r = 0.0 to r = 0.9. For higher power this fall is less
870                                                                       N. E. Sovin


                                        Table4.3
                   Conditional Probability(CP) of reJecting B1=O or
                  B,='i (or both). given that the Chi-Square(CS)
                   Pest   rejects.
                                        H=l.O      a10.05



                           r    Angle    CS          CP

                          0.0    45     0.1327      0.6150
                                 60     0.1327      0.6260
                                 75     0.1327      0.6479
                                 90     0.1327      0.6589
                                105     0.1327      0.6479
                                120     0.1327      0.6260
                                135     0.1327      0.6150


                          0.5    45     0.2255      0.3660
                                 60     0.2170      0.3852
                                 75     0.193Y      0.4401
                                 90     0.1629      0.5220
                                105     0.1327      0.6132
                                120     0.1112      0.6868
                                135     0.1036      0.7153


                          0.9    45     0.8154      0.1003
                                 60     0.7879      0.1048
                                 75     0.6957      0.1200
                                 90     0.5256      0.1544
                                105     0.3114      0.2357
                                120     0.1471      0.4269
                                 135    0.0917      0.6266



dramatic and for sufficiently high power it can reverse. The more detailed results
in Table 4.3 show that high power at a given alternative does not insure high
conditional probability at that alternative. When the correlation is fixed at r = 0.9
there is an inverse relation between the power and the conditional probability
even on large radius circles, namely, the higher the power, the lower the condi-
tional probability.
   The Bonferroni test solves the interpretation problem whatever the power of
the test. But the test is unsatisfactory when the power is low since in this case the
test is likely to be misleading. This suggests that we may want to trade off some
probability of solving the interpretation problem for some extra power. When the
average power of the Bonferroni test is high the average power of the Scheffe test
will also be high. In this case the Scheffe test will have a high average conditional
probability of solving the interpretation problem. When the Scheffe test has high
power but the Bonferroni test has low power, then the sacrifice of power due to
using Bonferroni test may be difficult to justify. Therefore the Scheffe test may be
more attractive than the Bonferroni test in the presence of multicollinear data.
When the average power of the Scheffe test is low then what is needed is more
and better data. The weak evidence problem and the low power problem are two
sides of the same coin.
Ch. 14: Multiple Hypothesis Testing                                              871

5.   Large sample induced tests

Large sample analogues of the finite induced tests and the Scheffe test can be
constructed for a variety of models. These include single equation and multi-
variate nonlinear models, linear and nonlinear simultaneous equations models,
time series models, and qualitative response models. As an illustration I will
briefly discuss large sample analogues of the tests in the context of the standard
nonlinear regression model:




where y, is a scalar endogenous variable, x, is a vector of exogenous variables, /?a
is a k x 1 vector of unknown parameters and the U,‘S are unobservable scalar
independently identically distributed random variables with mean zero and
variance ~0’.
   The nonlinear least squares estimator, denoted by B, is defined as the value of j3
that minimizes the sum of squared residuals:


     S,(P) = ,f       b,-f(x*J912~                                             64

where the fl that appears in (5.2) is the argument of the function f(x,, .). In
contrast, & is the true fixed value. The consistency and asymptotic normality of
the nonlinear least squares estimator is rigorously proved in Jennrich (1969).
Therefore, we have:




where

             1 a*s,
     plim-      -        =29                                                   (5.4)
             T I apapfI8.

is a k x k matrix and p* lies between ,!? and PO. For a discussion of the
assumptions needed to prove (5.3), see Chapter 6 by Amemiya in this Handbook.
   Amemiya points out that in the process of proving (5.3) we have in effect
shown that, asymptotically,

     j9- p, = (G/G)-'G'u,                                                      (5.5)
872                                                                           N. E. Satin


where G = (af/@‘),,       a T X k matrix. The practical consequence of the ap-
proximation (5.5) is that all the results for the linear regression model are
asymptotically valid for the nonlinear regression model if G is treated as regressor
matrix. In particular, the usual f and F statistics can be used asymptotically. Note
that (5.5) holds exactly in the linear case.
   As an example consider testing the linear hypothesis:

      H: Cj?-c=9=0,                                                                (54

where C and c are defined as in (2.2). Let:

      Z=C&C                                                                        (5.7)

and

      P= C(GYy’Cf,                                                                 (54

where d = (af/@‘)b.        Then we have asymptotically under the null hypothesis


      tl= L&      - t(T-       k)                                                  (5.9)


and

      FE__“‘-”        F(q,T-         k),                                          (5.10)
            P2

where s2 = S,(B)/(T      - k) and qj is the ith diagonal element of I?
   Suppose that a finite number m of Ic/in L are of primary interest. Let the J, in
G be J/, = a;O, i = 1,. . . , m. The usual t statistic for testing the separate hypothe-
sis H(a,): 4, = a;0 = 0 is:


      h)(a,)= /&,                    i=l,...,m.                                   (5.11)


The acceptance region of a 6 level equal-tailed test of H(a,)     is approximately:

      Idu,)l %,,(T-            k),         i=l   ,..-> m.                         (5.12)

The finite induced test accepts H if and only if all the separate hypotheses
H(u,), . . _, H(u,) are accepted. When all the equal-tailed t tests have the same
Ch. 14: Mulriple   Hypothesis Testing                                            873


significance level the acceptance region for an (Ylevel Bonferroni     test of H is
approximately:

      Itb,)l IB,                                                              (5.13)

where B = ta,Zm(T- k). The Sidak or studentized maximum modulus critical
value can also be used in large samples.
   A large sample analogue of the Scheffe test can be developed by using the fact
that the maximum of the squared t ratio:

      t2(a)=       Mz-Q12                                                    (5.14)
                      s’a?a        ’

is asymptotically distributed as qF( q, T - k). The proof is essentially the same as
the one presented in Section 3.3.1.
   Next, consider testing the nonlinear hypothesis:

      h(P) = 0,                                                              (5.15)

where h(p) is a q X 1 vector valued nonlinear function such that q < k. If /3 are
the parameters that characterize a concentrated likelihood function L(p), where
L may or may not be derived from the normal distribution, then the hypothesis
(5.15) can be tested using the Wald (W), likelihood ratio (LR), or Lagrange
multipler (LM) test. For a discussion of these tests, see Chapter 13 by Engle in
this Handbook.
   When the error vector u is assumed to be normal in the nonlinear regression
model (5.1) the three test statistics can be written as


                                                                             (5.16)

                                                                             (5.17)

                                                                             (5.18)


where b is the constrained maximum likelihood estimator obtained by maximiz-
ing L(p) subject to (5.15), and (? = (af/@‘)~.        When the hypothesis (5.15) is
true all three statistics (5.16) (5.17) and (5.18) are asymptotically distributed as
x2(q)  if u is normal. In fact, it can be shown that these statistics are asymptoti-
cally distributed as x2(q) even if u is not normal. Thus, these statistics can be
used to test a nonlinear hypothesis when u is non-normal.
874                                                                        N. E. Savin

   Recall that from any convex set we can derive simultaneous confidence
intervals for all J/ in L. This convex set can be the acceptance region of the W, LR
or LM tests in large samples. Starting with a finite set G of J, in L of primary
interest the convex set can be defined as the intersection of large sample t
intervals for all II/ in G. The t statistics can be based on either the W or the LM
principle of test construction. A large sample analogue of the S intervals can be
based on the W test of H.


6.     Empirical examples



6.1.    Textile example

Our first empirical illustration is based on the textile example of Theil (1971,
p. 103). This example considers an equation of the consumption of textiles in the
Netherlands 1923-1939:

                                                                                (6.1)
where y = logarithm of textile consumption per capita, x1 = logarithm of real per
capita income and x2 = logarithm of the relative price of textile goods. The
estimated equation is reported by Theil (p. 116) as:

       y = ;e:3; + 1.14x, - 0.83x,,                                             (6.2)
                   (0.16)   (0.04)


where the numbers in parentheses are standard errors.
   Theil tests the hypothesis that the income elasticity (fir) is unity, and that the
price elasticity (&) is minus unity. This hypothesis is:



                                                                                (6.3)

The 0.01 level F test rejects H since the value of the F ratio is 11.2 and the upper
1% significance point of an F(2,14) distribution is 6.51.
   Consider the Bonferroni test of H where the linear combinations of primary
interest are 13,and 13,.The t statistics for testing 8, and 8, are:


       I’=/& !=$. = 0.89
            -=
                                                                                (6.4)
Ch. 14: Multiple Hypothesis Testing                                                875


and

      12=-!L         = +$         = 4.28,                                       (6.5)
           \ISV,,           .

respectively. The nominal 0.01 level Bonferroni test rejects H since B = ts,f(14)
= 3.33 when 6 = 0.01/2 = 0.005. Clearly, the separate hypothesis p2 = - 1 is
responsible for the rejection of the Bonferroni test of H. The 0.01 level Scheffe
test of H also rejects H since the 0.01 level F test rejects H. In this example the
Bonferroni test has roughly the same power contour as the Scheffe test since the
correlation between the income and price variables is low, namely about 0.22.
   The next step is to calculate simultaneous confidence intervals for 8, and 8,.
The B interval for 8, is 0.1430 f 0.16(3.33) and for 8, is 0.1711+_ O.Oq3.33) so that
the B intervals are -0.39 I 8, I 0.68 and 0.04 I 6, I 0.30, respectively. The S
interval for 8, is 0.1430+0.16(3.61) and for 0, is 0.1771 ItO.O4(3.61) since S
 = )/w             = 3.61. H ence the S intervals are -0.43 I e1 I 0.72 and 0.03 I
0, I 0.32, respectively. Note that the S intervals are longer than the B intervals,
but not much longer. Both intervals for 8, cover zero and both intervals for 6,
cover only positive values. This suggests that the income elasticity & is unity and
that the price elasticity & is greater than minus one. In this example the
hypothesis p2 = - 1 is responsible for the rejection of the Scheffe as well as the
Bonferroni test of H. This result also follows from the fact that the absolute value
of the t statistic for t9, is larger than either B or S. i.e. 1t,] > B and )t,j > S.
   The final step is to calculate the normalized a, vector:

      a _ [c(x’x)-lc’]-l(cb-c)
       0-                                                                       (6.6)
                          f&F                 ’


where a~Vu, = 1. From Theil we have that:

      s2[c(x’x)-lc]-l=             ;;.;     8;;-;],                             (6.7)
                                  [ .
so that:

               1
      a’ = ~(4.733)      43’2
                         41.6     8%][      -::::;!I   = [,:::::I’              (6.8)
where s2 = 0.0001833. This confirms Theil’s conclusions (p. 145) that the specifi-
cation p2 = - 1 for the price elasticity is responsible for the F test (Scheffe test)
rejecting H, i.e. any linear combination with positive weights and a sufficiently
large weight on 0, is responsible for rejection.
876                                                                                    N. E. Snvin

   Suppose in the B procedure that J, = 8, - 0, is of secondary interest. The B
interval for J, is 0.3141*0.20(3.33) or -0.35 I 4 I 0.98. The S interval for $ is
0.3141 k 0.023(3.61) or 0.23 I J/ I 0.40 so that the S interval is shorter than the B
interval. Also notice that J/ = zi - z2 is sdfz according to the S criterion, but not
the B criterion. Hence the Scheffe induced test of H is rejected by the separate
hypothesis that the income and price elasticities are the same except for sign:
& = - &. Theil (p. 134) objects to the length of the S intervals for the J/ of
primary interest. In fact in the textile example the S intervals give interesting
results for both the JI of primary and secondary interest.


6.2.    Klein’s Model I example

Our second example is based on the unrestricted reduced form equation for
consumption expenditures from Klein’s Model I of the United States economy
1921-1941:

       y = p, +&x1        + p*x*+ &x3 +/-$x4 +&x5                          +&x7 + u,
                                                                      + P6X6                (6.9)

where y = consumption, xi = government wage bill, x2 = indirect taxes, xs =
government expenditures, xq = time (measured as year-1931) x5 = profits lagged
one year, xg = end of year capital stock lagged one year, and x, = private product
lagged one year. For the purpose of this example all regressors are treated as
nonstochastic. The data is taken from Theil (1971, p. 456). The estimated
equation is:

       y = 58.3 + 0.193x, -              0.366 x2 + 0.205x, + 0.701x,
             (1.90)    (0.079)         (-0.871)             (0.541)    (0.930)

           + 0.748~~ - 0.147 xg + 0.230x,,                                                (6.10)
              (1.49)         (-1.27)              (0.842)


where now the numbers in parentheses are t ratios. Our estimates of the /3’s agree
with those reported in Goldberger (1964, p. 325). (Note that Goldberger uses
xi - xs in place of xi so that his estimate of pi is 0.19327 - 0.20501= - 0.01174.)
   Consider testing the hypothesis that all the slope coefficients are zero:

       H: ,bi = 8, = 0,           i=1,2 ,**., 7.                                          (6.11)

The slope coefficients are multipliers so we are testing the hypothesis that all the
multipliers in the reduced form equation for consumption are zero. The 0.05 level
Scheffe test rejects H since the 0.05 level F test overwhelmingly rejects H. The F
ratio is 28.2 which is much larger than 2.83, the upper 0.05 significance point of
the F(7,13) distribution. Suppose that the linear combinations of primary interest
Ch. 14: Multiple     Hypothesis      Testing                                                             811


in the Bonferroni test are the slope coefficients: #i = 8,, i =1,2,...,7.  Then the
critical t value for a nominal 0.05 level Bonferroni separate induced test of H is
B = ts,z(13) = 3.19, where 6 = 0.05/7 = 0.00714. The t ratio with the largest
absolute value is the one for lagged profits (&). Since this is only 1.49 the
Bonferroni test overwhelmingly accepts H. Thus in this example the Scheffe and
Bonferroni tests of H produce conflicting inferences.
   We now apply the S procedure to find which linear combination of the
multipliers led to rejection of the Scheffe test of H. In this example none of the
individual multipliers are responsible for rejection since none of the t ratios have
an absolute value greater than S. The largest t ratio is 1.49 and S = \/m
 = 4.45. To find linear combinations of the multipliers which are responsible for
rejection I began by calculating the normalized vector a,. This vector has
components:
       a, = 5 82;                 a2 = 4.81;     a3 = 7.37;     a4 = 19.44;
       a5 =12.13;                 a6 = 14.33;     a, = 35.84,                                         (6.12)

where these are proportional to the sample covariances between the dependent
variable and the regressors. The linear combination (6.12) gives some positive
weight to all the multipliers and especially to the multiplier & for lagged private
product. Since (6.12) does not seem to have an interesting economic interpreta-
tion, I examined a number of other linear combinations. I could not find a linear
combination responsible for rejection which was also of economic interest.
   In this example the explanatory variables are highly correlated. As a conse-
quence the Bonferroni test can have low average power compared to the Scheffe
test. Hence the Bonferroni test may be very misleading. The Scheffe test gives
what appears to be a sensible result, but provides little help in deciding which
multipliers are nonzero. What is needed is more and better data for a satisfactory
solution to the interpretation problem.


References
Bailey, J. R. (1977) “Tables of the Bonferroni t Statistics”, Journul of Ihe Americun   Stuiisticul    Asso-
  ciation,   72:469-4X
Christensen, L. R. (1973), “Simultaneous Statistical Inference in the Normal Multiple Linear
  Regression Model”, Journal of the Americun Sratistical Association, 68:457-461.
Christensen, L. R., D. W. Jorgenson and L. J. Lau (1975), “Transcendental Logarithmic Utility
  Function”, American Economic Reoiew, 65:367-383.
Comish, E. A. (1954), “The Multivariate Small Sample r-Distribution Associated with a Set of
  Normal Sample Deviates”, Australian Journal of Physics, 7:531-542.
Darroch, J. N. and S. D. Silvey (1963), “On Testing More Than One Hypothesis”, Annals of
  Mathemarical      Statistics,    271555-567.
Dhrymes, P. J. (1978), Introducrory Econometrics. New York: Springer Verlag.
Dunn, 0. J. (1961), “Multiple Comparisons Among Means”, Journal of the American                 Siutisticul
  Associanon,      56152-64.
878                                                                                         N. E. Savin

Dunnett, C. W. (1955), “A Multiple Comparisons Procedure for Comparing Several Treatments with a
  Control”. I Journal of the Amerjcan Statisrical Association, 50:1096-l 121.
Dunnett, C. W. and M. Sobel, (1954), “A Bivariate Generalization of Student’s r-Distribution with
  Tables for Certain Cases”, Biometrika, 41:153-169.
Evans, G. B. A. and N. E. Savin (1980), “The Powers of the Bonferroni and Schefl? Tests in the Two
  Parameter Case”, Manuscript, Faculty of Economics and Politics, Cambridge.
Fox, M. (1956). “Charts of the Power df the F-Test”, Annals of Mathematrcal Statistics, 27:485-494.
Gabriel, K. R. (1964), “A Procedure for Testing the Homogeneity of All Sets of Means in the Analysis
  of Variance”, Biometrics, 40:459-417.
Gabriel, K. R. (1969), “Simultaneous Test Procedure-Some            Theory of Multiple Comparisons”,
  Annals of Mathematical Statistics, 40:224-250.
Games, P. A. (1977), “An Improved Table for Simultaneous Control on g Contrasts”, Journal of the
  American Statistical Association, 72:531-534.
Geary, R. C. and C. E. V. Leser (1968), “Significance Tests in Multiple Regression”, The American
  Statistican, 22120-21.
Goldberger, A. S. (1964). Econometric Theon,. New York: John Wiley & Sons.
Hahn, G. J. and R. W. Hendrickson (1971). “A Table of Percentage Points of The Largest Absolute
  Value of k Student [ Variates and Its Applications”, Biometrika, 58:323-332.
Hochberg, Y. (1974), “Some Generalization of the T-Method in Simultaneous Inference “, Journal of
   Multivariare Analysis, 4~224-234.
Hochberg, Y. and C. Rodriquez (1977), “Intermediate Simultaneous Inference Procedures”, Journal of
  the American Statistical Association, 121220-225.
Imhof, P. (1961). “Computing the Distribution of Quadratic Forms in Normal Variates”, Biomefrika,
  48:419-426.
Jenmich, R. I. (1969). “Asymptotic Properties of Non-linear Least Squares Estimation”, Annals of
   Mathematical Statistics, 401633-643.
Johnson, N. L. and S. Katz (1972), Distributions in Statistics: Conrinuous Multivariate Distributions.
   New York: John Wiley & Sons.
Jorgenson, D. W. (1971), “Econometric Studies of Investment Behavior: A Survey”, Journal of
   Economic Literature, 9:1111-1147.
Jorgenson, D. W. (1974), “Investment and Production: A Review”, Intriligator M. D. and D. A.
   Kendrick, Eds., Frontiers in Quantitative Economics, II. Amsterdam: North Holland.
Jorgenson, D. W. and L. J. Lau (1975), “The Structure of Consumer Preferences”, Annals of Social
  and Economic Measurement, 4:49-101.
Jorgenson, D. W. and L. J. Lau (1982), Transcendenral Logarithmic Production Functions. Amsterdam:
   North Holland.
Krishnaiah, P. R. (1963), Simultaneous Tests and the Efficiency of Generalized Incomplete Block
   Designs, ARL 63-174. Wright-Patterson Air Force Base, Ohio.
Krishna&      P. R. (1964), Multiple Comparisons Tests in Multivariate Case. ARL 64-124, Wright-
   Patterson Air Force Base, Ohio.
Krishna& P. R. (1965), “On the Simultaneous ANOVA and MANOVA Tests”, Ann. Insr. Statist.
   Math., 17:35-53.
Krishna& P. R. (1979), “Some Developments on Simultaneous Test Procedures”, Krishnaiah, P. R.
   (ed.), Developments in statistics, vol. 2, New York: Academic Press.
Krishna& P. R. and J. V. Armitage (1965a), Percentage Points of the Multivariate t Distribution.
   ARL 65-199. Wright-Patterson Air Force Base, Ohio.
Krishnaiah, P. R. and J. V. Armitage (1965b), Probability Integrals of the Multivariate F Distribution,
   With Tables and Applications. ARL 65-236, Wright-Patterson Air Force Base, Ohio.
Krishnaiah, P. R. and J. V. Armitage (1966), “Tables for Multivariate I Distribution”, Sankhya Ser. B.
   28:31-56.
Krishnaiah, P. R. and J. V. Armitage (1970), “On a Multivariate F Distribution”, in Essays in
   Probability and Statistics, R. C. Bose et al. eds., Chapel Hill: University of North Carolina Press.
Krishnaiah, P. R., J. V. Armitage and M. C. Breiter (1969a), Tables for the Probability Integrals of the
   Bivariate t Distribution. ARL 69-060. Wright-Patterson Air Force Base, Ohio.
Krishna& P. R., J. V. Armitage and M. C. Breiter (1%9b), Tables for the Bivariate 1t 1Distribution.
  ARL 69-0210. Wright-Patterson Air Force Base, Ohio.
Ch. 14: Multiple Hypothesis Testing                                                             819

Learner, E. E. (1979), Specification Searches. New York: Wiley 1979.
Lehmarm, E. L. (1957a), “A Theory of Some Multiple Decision Problems, I”, Annals of Mathematical
   Statistics, 28:1-25.
Lehmann, E. L. (1957b), “A Theory of Some Multiple Decision Problems, II”, Annuls of Mathematical
   Statistics, 28:547-572.
Miller, R. G., Jr. (1966), Simultaneous Statistical Inference. New York: McGraw-Hill 1966.
Miller, R. G., Jr. (1977), “Developments in Multiple Comparisons, 1966-1976”, Journal of the
   American Statistical Association, 12:179-188.
Morrison, D. F. (1976). Multivariate Statistical Methods, 2nd Edition, New York: McGraw-Hill.
Moses, L. E. (1976), “Charts for Finding Upper Percentage Points of Student’s t in the Range .Ol to
   .OOOl”,Technical Report No. 24 (5 Rol GM 21215.02), Stanford University.
Olshen, R. A. (1973) “The Conditional Level of the F Test”, Journal American Statistical Association,
   48:692-698.
Olshen, R. A. (1977), “A Note on a Reformulation of the S Method of Multiple Comparison-Com-
   ment”, Journal American Statistical Association, 72:144-146.
Pearson, E. S. and H. 0. Hartley (1972), Biometriko Tables for Statisticians, Combridge, England:
   Cambridge University Press.
Richmond, J. (1982) “A General Method for Constructing Simultaneous Confidence Intervals”,
   Journal of the Americun Statistical Associution, 11:455-460.
Roy, S. N. (1953), “On a Heuristic Method of Test Construction and Its Uses in Multivariate
   Analysis”, Annuls of Mathematical Statistics, 24~220-239.
Roy, S. N. and R. C. Bose, (1953), “Simultaneous Confidence Interval Estimation”, Annuls of
   Mathemuticul Statistics, 2:415-536.
Sargan, J. D. (1976), “The Consumer Price Equation in the Post Wur British Economy: An E.xercise in
   Equation Specification Testing”, mimeo, London School of Economics.
Savin, N. E. (1980), “The Bonferroni and ScheBe Multiple Comparison Procedures”, Review of
    Economic Studies, 41~255-213.
Schaffer, J. P. (1977), “Multiple Comparisons Emphasizing Selected Contrasts: An Extension and
   Generalization of Dunnet’s Procedure”, Biometrics, 33:293-303.
Scheffe, H. (1953) “A Method of Judging All Contrasts in the Analysis of Variance”, Biometrika,
   40:87-104.
Scheffe, H. (1950), The Andysis of Voriunce. New York: John Wiley & Sons.
Scheffe, H. (1977a). “A Note on a Reformulation of the S-Method of Multiple Comparison”, Journal
   of the Americun Stutisticul Association, 72:143-144.
 Schelfe, H. (1977b), “A Note on a Reformulation of the S-Method of Multiple Comparison-
    Rejoinder”, Journul of the American Statistical Association, 121146.
 Seber, G. A. F. (1964) “Linear Hypotheses and Induced Tests”, Biometrika, 51:41-47.
 Seber G. A. F. (1977) Linear Regression Analysis. New York: Wiley.
 Sidak Z. (1967). “Rectangular Confidence Regions for the Means of Multivariate Normal Distribu-
    tions”, Journul of the American Statistical Association, 62~626-633.
 Stoline, M. R. and N. K. Ury (1979) “Tables of the Studentized Maximum Modulus Distribution and
    an Application to Multiple Comparisons Among Means”, Technometrics, 21:87-93.
Theil, H. (1971). Principles of Econometrics. New York: John Wiley & Sons.
Tiku, M. (1965). “Laguerre Series Forms of Non-Central Chi-Squared and F Distributions”, Bio-
    metrika, 52~415-421.
Tukey, J. W. (1953) “The Problem of Multiple Comparisons”, Princeton University, mimeo.



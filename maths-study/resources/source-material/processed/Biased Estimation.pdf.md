---
normalized_id: shared-pdf-reference-biased-estimation
exam_code: SHARED
material_scope: biased estimation.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Biased Estimation.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-biased-estimation

Chapter IO


BIASED ESTIMATION
G. G. JUDGE       and M. E. BOCK*

University of Illinois and Purdue University




Contents
1.   Introduction                                                                                                      601
2.   Conventional statistical models, estimators, tests, and measures of
     estimator performance                                                                                             603
     2.1.    Conventional       estimators     and tests                                                               603
     2.2.    Measures      of performance                                                                              606
     2.3.    Bayes estimation                                                                                          607
3.   Some possibly biased alternatives                                                                                 608
     3.1.    Exact non-sample         information                                                                      609
     3.2.    Stochastic    non-sample        information                                                               610
     3.3.    Inequality     non-sample       information                                                               612
     3.4.    Parameter      distribution     information       (prior)                                                 615
     3.5.    Some remarks                                                                                              617
4.   Pre-test-variable               selection estimators                                                              617
     4.1.    Conventional       equality     pre-test     estimator                                                    618
     4.2.    Stochastic     hypothesis     pre-test     estimator                                                      621
     4.3.    Inequality     hypothesis     pre-test     estimator                                                      622
     4.4.    Bayesian     pre-test    estimators                                                                       625
     4.5.    Variable     selection   estimators                                                                       627
5.   Conventional estimator inadmissibility and the Stein-rule alternatives                                            627
     5.1. Estimation under squared error loss                                                                          628
     5.2.    Stein-like rules under weighted              squared     error loss                                       635
6.   Some biased estimator alternatives for the stochastic regressor case                                              639
7.   Biased estimation with nearly collinear data                                                                      641
     7.1.    A measure      of “near”      collinearity                                                                641
     7.2.    Ridge-type      estimators                                                                                642



   *This work was facilitated by National                   Science Foundation     Grants.   Useful   comments   by Arnold
Zellner are gratefully acknowledged.


Handbook of Econometrics, Volume I, Edited by Z. Griliches and M.D. Intriligator
0 North-Holland Publishing Company, 1983
600                                        G. G. Judge and M. E. Bock


      7.3. Minimax ridge-type estimators                         643
      7.4. Generalized ridge estimators                          644
      7.5. A summary comment                                     645
8.  Some final comments                                          645
References                                                       647
Ch. IO: Biased Estimation                                                         601




1.   Introduction

 Much of the literature concerned with estimation and inference from a sample of
 data deals with a situation when the statistical model is correctly specified.
 Consequently, in econometric practice it is customary to assume that the statisti-
 cal model employed for purposes of estimation and inference is consistent with
 the sampling process whereby the sample observations were generated. In this
happy event, statistical theory provides techniques for obtaining point and
interval estimates of the population parameters and for hypothesis testing.
    Under this scenario for the traditional linear statistical model with normal,
independent, and identically distributed errors it is conventional to make use of
 the maximum likelihood-least squares rule when estimating the unknown loca-
 tion parameters. From the sampling theory point of view this approach is justified
 since it leads to a minimum variance among linear unbiased estimators and under
 squared error loss, the least squares estimator is minimax. From the Bayesian
point of view, under a uniform-non-informative        prior for the coefficients, the
property of minimum posterior mean squared error is achieved. All in all this is a
fairly impressive set of credentials and doubtless this goes a long way toward
explaining the popularity of the least squares estimator, which is really best in a
class of one. These results also suggest that if improvement in estimator perfor-
mance is to be achieved, one must go outside of the traditional sampling theory
rules and consider a range of alternative estimators that are biased and possibly
nonlinear.
    Despite its popularity the statistical implications of remaining in the linear
unbiased family of rules may in many cases be rather severe. One indication of
the possibly questionable stature of the least squares rule occurred when Stein
(1955) showed, under conditions normally fulfilled in practice, that there were
other minimax estimators. Following Stein’s result, James and Stein (1961)
exhibited an estimator which under squared error loss dominates the least squares
estimator and thus demonstrates its inadmissibility. This result means that the
unbiased least squares rule may have an inferior mean square error when
compared to other biased estimators.
    Another trouble spot for the conventional least squares estimator arises in case
of a false statistical model. Just as few economic variables are free of measure-
ment error and few economic relations are non-stochastic, few statistical models
are correctly specified and many of these specification errors imply a biased
outcome when the least squares rule is used. For example, consider the problem
of an investigator who has a single data set and wants to estimate the parameters
of a linear model which are known to lie in a high dimensional parameter space
f3,. The researcher may suspect the relationship may be characterized by a lower
602                                                            G. G. Judge and M. E. Bock


dimensional parameter space 0, c 8,. Under this uncertainty if the 0, dimensional
parameter space is estimated by least squares the result, from the possibly
overspecified model, will be unbiased but have large variance and thus may make
a poor showing in terms of mean square error. Alternatively, the fz dimensional
parameter space may incorrectly specify the statistical model and thus if esti-
mated by least squares will be biased and this bias may or may not outweigh the
reduction in variance if evaluated in a mean square error context.
   Although uncertainty concerning the proper column dimension of the matrix of
explanatory variables is the rule, in many cases prior information exists about the
individual parameters and/or relationships among the unknown parameters.
Ignoring this information and using only sample information and the least
squares rule may lead to a loss of precision, while taking the information into
account may lead to a more precise though biased estimator. Intuitively it would
seem any estimator that does not take account of existing non-sample information
should lead to suboptimal rules.
   Furthermore, since most economic data are passively generated and thus do not
come from an experimental design situation where the investigator has a good
degree of control, the data may be nearly collinear and this means that approxi-
mate linear relations may hold among the columns of the explanatory variables
that appear in the design matrix X. When this happens the least squares estimates
are unstable, the X’X matrix is often nearly singular and small changes in the
observations may result in large changes in the estimates of the unknown
coefficients. Ridge and minimax general ridge estimators have been suggested as
alternatives to the least squares rule when handling data with these characteris-
tics.
   In the linear statistical model when the errors are long tailed and the conven-
tional normally distributed constant variance error specification is not ap-
propriate, the least squares rule loses some of its inferential reach. Under this
scenario it is necessary to consider biased alternatives which are conceptually
different from, for example the Stein and ridge approaches noted above. In this
chapter we do no more than identify the problem, since it will be discussed in full
elsewhere in this Handbook.
   To cope with some of the problems noted above and to avoid the statistical
consequences of remaining with the conventional estimator, researchers have
proposed and evaluated a range of alternatives to least squares. Useful summaries
of some of the results to date include papers by Dempster (1973), Mayer and
Willke (1973), Gunst and Mason (1977), and Draper and Van Nostrand (1979).
   In laying out the statistical implications of a range of biased alternatives to the
least squares rule the chapter is organized as follows: In Section 2 conventional
linear statistical models, estimators, and a hypothesis testing framework are
presented and the sampling theory and Bayes bases for gauging estimator
performance are specified. In Section 3 sampling theory and Bayes estimators
Ch. IO: Biased Estimation                                                       603

which permit sample information and various types of non-sample information to
be jointly considered, are specified and appropriately evaluated. In Section 4
testing frameworks are specified for evaluating the compatibility of the sample
information and the various types of non-sample information and the corre-
sponding pretest estimators are derived, compared, and evaluated. In Section 5
the inadmissibility of the least squares estimator is discussed and a range of
Stein-rule estimators are considered for alternative loss functions and design
matrices. In Section 6 alternatives to least squares are considered for the stochas-
tic regressor case. In Section 7 the problem of nearly collinear data is discussed
and the ridge-type and general minimax estimators which have been suggested to
cope with this age old problem, are compared and evaluated. Finally, in Section 8
some comments are made about the statistical implications of these biased
alternatives for econometric theory and practice.



2.  Conventional statistical models, estimators, tests, and measures of estimator
performance

We are concerned with the sampling performance of a family of biased estimators
for the following linear statistical model:

       y=Xf3+e,                                                               (2.1)
where y is a (T X 1) vector of observations, X is a known (T X K) design matrix
of rank K, /3 is a (K x 1) fixed vector of unknown parameters, e is a (T X 1)
vector of unobservable normal random variables with mean vector zero and finite
covariance matrix E[ee’] = a2+, with a2 unknown, and + is a known symmetric
positive definite matrix. We assume throughout that the random variables which
comprise e are independently and identically distributed, i.e. E [ee’] = u 21Tor can
be transformed to this specification since + is known. In almost all cases we will
assume e is a normal random vector.


2.1.    Conventional estimators and tests

Given that y is generated by the linear statistical model (2.1) the least squares
basis for estimating the unknown coefficients is given by the linear rule

       b = (X’X)_‘X’y,                                                        (24
which is best linear unbiased. If it is assumed that e is multivariate normal then
(2.2) is the maximum likelihood estimator and is a minimax estimator no longer
604                                                          G. G. Judge and M. E. Bock


limited to the class of linear estimators. Furthermore, if e is normal then b has
minimum risk E[(b - 8)‘(6 - fi)] among the unbiased (not necessarily linear)
estimators of /3.
   The assumption that y is a normally distributed vector implies that the random
vector (b - /3) is normally distributed with mean vector zero and covariance

                                                                                 (2.3)

Therefore, the quadratic form (b - /3)‘X’X(b - /3)/a* is distributed as a central
&i-square random variable with K degrees of freedom.
  A best quadratic unbiased estimator of the unknown scalar a* is given by

      8*=(y-Xb)‘(y-xb)/(T-K)=y’(I~-X(xtX)-’x~)y/(T-K)
            =y’My/(T-K)=e’Me/(T-K),                                              (2.4
where M is an idempotent matrix of rank (T - K). If we leave the class of
unbiased quadratic estimators of CT*,the minimum variance quadratic estimator,
with smallest mean square error, is 6* = y’My/( T - K + 2). Since e is a normally
distributed vector with mean vector zero and covariance a*I,, the quadratic form

      (T-     K)e*/a*    =e’Me/u*                                                (2.5)

is distributed as a central &i-square random variable with (T - K) degrees of
freedom.
   Let us represent the hypotheses we have about the K dimensional unknown
parameters in the form of the following linear hypotheses:

      B=r                                                                        (2.6)

or

      6=0,

where 6 = /3 - r is a (K X 1) vector representing specification errors and r is a K
dimensional known vector. Given this formulation it is conventional to use
likelihood ratio procedures to test the null hypothesis HO: j3 = r against the
alternative hypothesis HA : j3 * r, by using the test statistic

      u = (b - r)‘X’X(    b - r)/KB.                                             (2.7)

If the hypotheses are correct and indeed r = j3, the test statistic u is a central F
random variable with K and (T - K) degrees of freedom, i.e. u - FcK,T_Kj. If the
linear hypotheses are incorrect, u is distributed as a non-central F random
Ch. 10: Biased Estimation                                                           605


variable with K and (T - K) degrees of freedom and non-centrality       parameter

      h = (/3 - r)‘X’X(/3 - r)/2a2   = S’X’X6/2a2.                              (2.8)

The traditional test procedure for H,, against HA is to reject the linear hypotheses
Ho if the value of the test statistic u is greater than some specified value c. The
value of c is determined for a given significance level ~1by


      /c    d~K,.-K, = p[q,,,-K)>c]
           O3                   - =a.                                           (2.9

   The above test mechanism leads to an estimator that will be specified and
evaluated in Section 4.
   For some of the estimators to be discussed in the coming sections, it is
convenient for expository purposes to reparameterize the linear statistical model
(2.1) in one of the following two forms:

      y=Xf3+e=XS-‘/2        S’/“/3 + e = ze + e,                             (2.10a)

where S is a positive definite symmetric matrix with S’/2S1/2 = S = X’X, 8 =
S’/2/3, Z = XS- ‘12, and Z’Z = IK. Under this reparameterization a best linear
unbiased estimator of 0 is w = Z’y with covariance fW = a21K. Note also we may
write (2.10a) as

      Z’y = e + Z’e,                                                         (2.10b)

where z = Z’y has a K variate normal distribution with mean vector 8 and
covariance (721K. This formulation is equivalent to the K mean statistical model
usually analyzed in the statistical literature. Although (2.10b) is a convenient form
for analysis purposes we will remain in this chapter with the linear statistical
(regression) form since this is the one most commonly dealt with in econometrics.
The common nature of the two problems should be realized in interpreting the
results to be developed. Alternatively consider the following canonical form:

      y=XB+e=XTT-‘/3+e,                                                       (2.11)

where T is a non-singular matrix chosen so that the columns of XT are orthogo-
nal. One choice of T is to choose an orthogonal matrix P whose columns are
orthonormal characteristic vectors of X’X. Consequently, PP’ = I and

       y=Xp+e=XPP’j?+e=Ha+e.                                                   (2.12)

The columns of H are orthogonal since H’H = A, which is a diagonal matrix with
elements h, > h, > . . . > A,, that are the characteristic roots of X’X. The
606                                                           G.G.Judge and M. E. Bock

best linear unbiased estimator of a is 6 = A- “H’y, with covariance a*A- ‘. The
variance of ai,, i = 1, 2,..., K, is a*/h,.


2.2.    Measures of performance

Finally, let us consider the basis for gauging the performance of a range of
alternative estimators. We can, as we did with the estimators considered above,
require the property of unbiasedness, and in this context b is the only unbiased
estimate of fl based on sufficient statistics. But why the concept of unbiasedness?
If the information from sample observations is to be used for decision purposes
why not make use of statistical decision theory which is based on the analyses of
losses due to incorrect decisions? This is in fact the approach we use in this
chapter as a basis for comparing estimators as we go outside of traditional rules
and enter the family of non-linear biased estimators.
   Although there are many forms for representing the loss or risk functions we
will to a large extent be concerned with estimation alternatives under a squared
error loss measure. However, the estimators we consider are in general robust
under a range of loss functions.
   Assume that y is a (T X 1) random vector. If 6( y) is some estimator of the K
dimensional parameter vector 8, then the weighted squared error or weighted
quadratic loss function is

                                                                               (2.13)



       P(B, 8) = EC@ - P)‘Q@ - @I,                                             (2.14)

where Q is a known positive definite weight matrix. If Q = IK under this criterion,
the unbiased estimator with minimum risk is the unbiased estimator with mini-
mum variance. If we make use of the condition that 6( y) be both linear in y and
unbiased, this leads to the Gauss-Markoff criterion and the minimum risk or best
linear unbiased estimator is 6( y) = y if E[ y] = /3.
   Reparameterizing the statistical model and transforming from one parameter
space to another in many cases changes the measure of goodness used to judge
performance. For example, if interest centers on statistical model (2.1) and
sampling performance in the /3 space (estimation problem), specifying an un-
weighted loss function in the 0 space (2.10), results in a weighted function in the /3
space, i.e.

       (4 -/J)@-   8) = (siP/&    sV2/3)@V9      - 5%73)

                      = (/C@s(/-P)=           (&/3)~XPX(/!-/3).                (2.15)
Ch. IO: Biased Estimation                                                        607


   Therefore, while the reparametrized model (2.10) is appropriate for analyzing
the conditional mean forecasting problem of estimating X/3 by Xb, it is not
appropriate for analyzing the performance of b as an estimate of /.I unless one is
interested in the particular weight matrix (X’X).
   Alternatively, an unweighted squared error loss risk in the /I space results in a
weighted risk function in the 8 space, i.e.

       ~[(b-~)(b-~)]=~[(~-l’*8-~-~/*e)r(~-1’*~-~-1’*e)]
                     = E [(B- e)V( I - e)]
                     =E[(B-e)~(x~x)-‘(8-e)].                                 (2.16)

In some of the evaluations to follow it will be convenient or analytically more
tractable to consider the weighted risk function in the 0 space instead of the
unweighted counterpart in the /I space.
   Finally, let us note for the canonical form (2.12) that the orthogonal transfor-
mation preserves the distance measure, i.e.

       (d-a)‘(&-a)=(P’b-P;B)‘(P’b-P’j3)
                            =(b-/3)‘PP’(b-/3)=(b-/3)‘(b-/3).                 (2.17)

   The minimum mean square error criterion is another basis we will use for
comparing the sampling performance of estimators. This generalized mean square
error or risk measure for some estimator B of j3 may be defined as

       MSE[8,~l=E[(B-B)(B-8)‘1
              = (biasj)(biasb)‘+cov/?.                                       (2.18)

Under this measure the diagonal elements are mean square errors and the trace of
(2.18) is the squared error risk, when Q = IK. In using the mean square error
criterion an estimator b is equal or superior to another estimator b if, for all 8,

       A=E[(B-B>(B-8)‘]-E[(B-8)(8-8)‘]                                       (2.19)

is a positive semidefinite matrix. This implies I’Af 2 0 for any K dimensional real
vector 1.


2.3.    Bayes estimation

The assumption that the vector /3 is itself a random vector with a known
distribution leads, when combined with previously developed measures of perfor-
mance, to a well-defined estimator for /3. In this approach one chooses, optimally,
608                                                             G. G. Judge and M. E. Bock


a Bayes estimator, &, which minimizes for all B the expected value of p( /3, b),
where the expectation is taken over B with respect to its known distribution 7. The
Bayes risk for /? is

      JY[P(BJJ]      =inf~Wk48)1.                                                  (2.20)
                        i

In particular, for a weighted quadratic loss, such as (2.13),

                                                                                   (2.21)

the mean of the conditional distribution of /3 given the sample data.


3.    Some possibly biased alternatives

Under the standard linear normal statistical model and a sampling theory
framework, when only sample information is used, the least squares estimator
gives a minimum variance among unbiased estimators. In the Bayesian frame-
work for inference, if a non-informative-uniform        prior is used in conjunction
with the sample information, the minimum posterior mean square error property
is achieved via the least squares rule. One problem with least squares in either
framework is that it does not take into account the often existing prior informa-
tion or relationships among the coefficients. A Bayesian might even say that the
non-informative prior which leads to least squares should be replaced by a proper
distribution which reflects in a realistic way the existing non-sample information.
   To mitigate the impact of ignoring this non-sample information, and to patch
up their basis of estimation and inference so that it makes use of all of the
information at hand, sampling theorists have developed procedures for combining
sample and various types of non-sample information. When the non-sample
information is added and certain of these rules are used, although we gain in
precision, biased estimators result if the prior information specification is incor-
rect. In other cases biased estimators result even if the prior specification is
correct. Thus, we are led, in comparing the estimators, to a bias-variance
dichotomy for measuring performance and some of the sampling theory estima-
tors which make use of non-sample information show, for example, superior mean
square error over much of the relevant parameter space. Alternatively, there are
other conventionally used biased sampling theory alternatives for which this
result does not hold. In the remainder of this section we review the sampling
properties of these possibly biased estimators and evaluate their performance
under a squared error loss measure.
Ch. IO: Biased Estimation                                                       609

3. I.    Exact non -sample information

Let us assume that in addition to the sample information contained in (2.1) there
also exists information about the K dimensional unknown vector 8, in the form of
J independent linear equality restrictions or hypotheses, where J I K. This
information may be specified as

        Rj3=r,                                                                (3.1)

where R is a (J x K) known matrix of rank J which expresses the structure of the
outside information as it relates to the individual parameters or their linear
combinations and r is a (J X 1) vector of known elements. The restrictions may
also be written as S = 0, where S = R/3 - r and the (J X 1) vector S represents the
specification errors in the prior information. Under this scenario the maximum
likelihood estimator which includes this non-sample information is

        b*=b+S-‘R’[RS-‘R’]-‘(r-                Rb),                           (3.2)

and is the solution to the problem minimizing the quadratic form ( y - Xf3)’
( y - Xfl) subject to Rfl = r, where S = X’X. Thus, b* is multinormally distrib-
uted, with mean

        E[b*]=fl-S-‘R’[RS-‘R’]-‘(R/3-r)

                 =/3-   S-‘R’[RS-‘R’]-‘6,                                     (3.3)

covariance matrix

        E[(b*-     E[b*])@*-E[b*])‘]           =u2[S-I-C],                    (34

where C = S- ‘R’[ RS- 'R']- 'RS- ‘. The mean square error or risk matrix

        E[(~*_~)(~*-,j)‘]=~2[S-‘-C]+S-1R’[RS-1R’]-1

                                       X SS’[RS-‘R’]-‘RS-’                    (3.5)

and weighted quadratic risk is



                                     =~2tr(S-‘-C)Q+6’[RS-‘R’]-1RS-’

                                          x QS- ‘R’[ RS- ‘R’] - ‘6.           (34
610                                                                G. G. Judge and M. E. Bock


These results imply that if 6 = R/3 - r = 0, then b* is best linear unbiased within
the class of unbiased estimators which are linear functions of y and r. If 6 z 0,
then b* is biased (3.3) and has mean square or quadratic risk (3.5) and (3.6).
    Under the general mean square error or risk criterion, in comparing
the restricted and unrestricted maximum likelihood estimators 6* and b, Toro-
Vizcorrondo and Wallace (1968) show that E(b - /3)(b -/I>‘]- E[(b* - jl)(b* -
/I)‘] = A, where A is a positive semi-definite if and only if

       &(RS-‘R’)-‘6       <1        or   S’(RS-‘R’)-‘S         1
                                                         2-.                           (3.7)
               02                              2a2             2

Under the weighted quadratic risk criterion, b* has smaller risk than b, i.e.
E[b* - /l)‘Q(b* - /I)] 5 E[(b - /3)‘Q(b - fi)], if and only if ~-‘u-~~‘[RS-‘R’]-’
RS- ‘QS- ‘R’[ RS- 'R']-  ‘S I tr CQ2-‘. If the weight matrix under the quadratic
risk criterion is X’X, i.e. the conditional mean forecasting problem, then the
restricted maximum likelihood estimator has risk



and

       E[(b-/j)‘X’X(b-/I)]-E[(b*-B)‘X’X(b*-8)120

if

       G’[RS-‘R’]-‘6      I J
              2a 2             2’                                                      P-8)

Therefore, as the prior information errors grow, i.e. the length of the vector 6
increases, the risk of the restricted maximum likelihood estimator increases
without bound. Consequently, this biased estimator alternative permits us the
possibility of being precisely wrong.


3.2.    Stochastic non -sample information

Assume the following stochastic prior information exists about 8:

       r=RB+v,                                                                         (3.9)

where r and R are defined in conjunction with (3.1) and v is a (J X 1) unobserva-
ble, normally distributed random vector with mean 6 and covariance cr2@,with @
Ch. 10: Biased Estimation                                                            611

known. Following Theil and Goldberger (196 1) and Theil(1963) we may combine
the sample information (2.1) with the stochastic prior information (3.9) in the
linear statistical model


                                                                                 (3.10)

where (e’, v’)’is multivariate normal with mean (O’, S) and covariance

      ,,2IT

         [    0 a’
                 1 o




When a2 is known the mixed (Aitken) estimator for (3.10) is

     b** = (s+         R’@-‘R)_‘( X’y + IM-‘r)
              = [S-r - S-‘R’(RS-‘R’+      @)-‘RS-I](     X’y + R’@-‘r),          (3.11)

with mean

     E[b**]      =B+[S+       R’@-‘RI-‘R’@-‘8,                                   (3.12)

covariance

    E[(b**-E(6**))(b**-E(b**))‘]=a2[S+R’~-’R]-’~u2W-‘,                           (3.13)


and mean square error or risk matrix

     ~[@**+)(b**+)‘]               =a2W-‘+W-‘R’@-1S6’@-‘RW-‘.                    (3.14)

The difference between the covariance matrix of the unrestricted             maximum
likelihood estimator b and the stochastic restricted estimator 6** is




        = a2S-‘R’[RS-‘R’        + @I-‘RS-‘,                                     (3.15)

a positive semi-definite matrix. Furthermore,          the difference between the mean
square error matrices for b and 6** is

     MSE, - MSE,,.          = a2S-’ - a2W-’ - W-‘R’@-‘&&?I-‘RW-’

                            = W-‘R’@-‘[u2(RS-‘R’+        @)-&Y]@-‘RW-‘.          (3.16)
612                                                           G. G. Judge and M. E. Bock


This means that (3.16) is positive semi-definite if and only if a’( RS- ‘R’-k @) - 66’
is positive semi-definite. Consequently, under the generalized mean square error
criterion the stochastic restricted estimator 6** IS . superior to the least squares
estimator b in the part of the parameter space where

       &(RS-‘R’+       @)-‘a       1
                               <-.                                               (3.17)
                 2a2              2

In terms of quadratic risk [Judge and Bock (1978, pp. 41-43)], p(/3, ,**) I p(/3,6)
for those values of the parameter space where

       S’[RS-‘R’+      @]-‘RS-2R’[RS-‘R’+     @]-‘&T~

           -c tr([RS-‘R’+      @I-‘RSP2R’).                                      (3.18)

 Similar results are obtained for the X’X weighted risk function case.
    One weakness of the mixed estimator lies in assuming the random vector v,
representing the uncertainty of the prior information, has a zero mean vector, an
assumption necessary for the estimator to be unbiased. Since the frequency and
subjective interpretations of probability are different, the argument that prior
judgements are equivalent to prior unbiased estimates seems unsatisfactory. As
shown by Swamy and Mehta (1977) the estimator (3.11) may be less efficient than
 the least squares estimator based only on sample data if the stochastic prior
information (3.9) is n&specified. The requirement that the prior covariance
matrix @ be known must in most cases be unreasonably demanding. In addition,
the fixed /3 and random r and v in eq. (3.9) does not fit any Bayesian axiom
system and it would appear that no set of principles have been set down which
would justify this specification.


3.3.    Inequality non -sample information

Assume now the non-sample information about the unknown parameters exists in
the form of linear inequality constraints which may be represented as

       Rj32r                                                                    (3.19)

or
       RB+S=r,

where 6 is a (J X 1) unknown vector. The estimation problem which results from
combining both sample (3.1) and inequality constraint information (3.19) may be
specified as a quadratic programming problem for which a number of solution
algorithms exists.
Ch. IO: Biased Estimation                                                       613

   In order to give bias and risk evaluations we consider the orthonormal
statistical model y = Z8 + e (2.1Oa) and the case where the information design
matrix R has the form [IJ 01. In fact, without loss of generality, for expository
purposes we consider the problem of estimating the ith unknown parameter 8,
when non-sample information exists in the form 8 2 r, where r is a known scalar.
Since for any sample of data either the maximum likelihood estimator 6 violates
the constraint or it does not, the inequality restricted estimator may be expressed
as
      e+ = &X&r) 6%         + &CQ(@~
         = I(- m,S,a)((~    - eM+      + &,o,m)((~     - ev+

         = 8 + &x+,b)~            - ~~-oo,s,o)bb(J~                          (3.20)

where I(.,( 0) is an indicator function that takes on the value 1 if the argument
takes on a value within the subscripted interval and zero otherwise, w = (6 - 0)/a
is a standard normal random variable, and 6 = r - 0.

3.3.1.   Bias

Making use of (3.20) and corollaries 1 and 2 from Judge and Yancey (1978) the
mean of 8+ is, when S < 0 and the direction of the inequality is correct,




When r 2 8 and thus 6 2 0, the inequality is not correct and the mean of the r9+is

     E[e+]=e+S-(6/2)P(X:,,~62/u2)+(u/JZ;;)P(~~2,2S2/o2).
                                                                             (3.22)
These results imply that if the direction of non-sample information is correct, as
6 + - 00, then E[O+] + 8. As S + 0, then E[B+] + 0 + u/G.       If the direction of
the inequality is incorrect and as 6 + cc, the E[P] + 8 + 6 = r, the mean of the
restricted least squares estimator. The bias characteristics of the inequality
estimator are presented in Figure 3.1.

3.3.2.   Risk

The risk-mean square error of the inequality estimator 8+ is

     p(e,8+)     = E[(e+    - e)“]

                 =E[(~-~)2]+~[Z~-,,~,~,(~)S2]-~2[~~-m,s,o)(~)~2].
                                                                            (3.23)
614                                                                                    G. G. Judge and M. E. Bock


                                              Bias

                                              6 --
                        Inequality
                        Estimation

                        Pre-Test              5 --
           -.-.-
                        Estimation



                        Estimation




      -4           -3       -2         -1        0         1          2           3        4          5           6
                                               s/o
             Figure 3.1.   The mean of the inequality   restricted,   estimator   O+ as a function   of 6/n.


  Using corollary 3 from Judge and Yancey (1978) the risk function may be
expressed, when 6 < 0, as



and when 6 2 0, as

           p(e,e+)=s2+(              ~*,/2)P(x~~,rS2/02)-(S2/2)P(~:,,2S2/(r2).                                 (3.24b)

   These results imply that if the direction of the inequality is correct and 6 < 0,
then (i) as 6 + - 00 the ,o(e, 8’) + a2 and (ii) as 6 + 0 the p(B,B+) + a2/2.
Consequently, if 6 < 0 the inequality estimator is minimax. If the direction of the
inequality is not correct and 6 + co, then p( 8, P)- a2 + 0, where a2 is the risk of
the restricted least squares estimator. The risk characteristics of the inequality
restricted estimator are presented in Figure 3.2.
   When the linear statistical model is orthogonal and the information design
matrix R is diagonal these results generalize directly to the K mean or K
dimensional linear model problem. The results also hold for a general linear
statistical model and diagonal R under weighted squared error loss when X’X is
the weight matrix.
Ch. 10: Biased Estimation                                                                                  615




         0
             0         2          4           6          8          IO         12        14
                                                      g2/,2

       Figure 3.2.     Risks for the maximum likelihood i restricted 0*, inequality restricted   6’+ and
                     pre-test inequality restricted B++ estimators as a function of 6*/o*.




3.4.    Parameter distribution information (prior)

The assumption that the parameter vector /3 is stochastic and that its distribution,
r, called the prior distribution for 8, is known, leads within the context of an
appropriate loss function to the selection of a Bayes’ estimator & which may be
biased. As noted in Section 1, the least squares estimator b may be regarded as
the Bayes estimator with respect to a diffuse prior distribution and a quadratic
loss function and this particular Bayes estimator is unbiased.
   Alternatively, consider the use of an informative proper prior, such as the
specification of the natural conjugate prior distribution r for /3 which is normal
with mean Band covariance u 2A -’ . In the case of quadratic loss, this formulation
results in the following optimal point estimate which minimizes posterior ex-
616                                                         G. G. Judge and M. E. Bock


petted loss:

      /I7= (A + X’X)-‘(A/T+ X’y)
        = (A+    X’X)-‘(Afi+ X’Xb).                                            (3.25)

This Bayes estimator has sampling bias

      E[/9,]-/3= (A+X’X)-‘A(&j3).                                             (3.26)

   A comparison of the sampling properties of b and &, under the MSE (risk
matrix) criteria, has been made by Giles and Rayner (1979). In particular they
examine some of the conditions under which any linear combination of the
elements of the natural conjugate Bayes estimator of B has a smaller mean
squared error than has the corresponding linear combination of the elements of b.
Their principal result is given in the form of an inequality that involves the
sample observations, the prior parameters, and the unknown parameters of the
statistical model. It should be noted that under this measure of performance both
estimators are admissible.
   Zellner (1980) has proposed a prior for fi which is the same form as the natural
conjugate prior, where A = g( X’X) and g is a positive constant. The posterior
mean of this resulting Bayes estimation 1s is

      ~~=(b+g~)/(l+g)=b-g(b-B)/(l+g),                                         (3.27)

with sampling mean

                                                                             (3.27a)

and bias

                                                                             (3.27b)

which approaches zero as g + 0.
  Under a squared error loss measure Zellner notes that the Bayes estimator fig
has risk

      P(89fig)=mJ’( 1+ d2(8- /-VW- B)/&u2)0 + d’                              (3.28)

and average risk K,a2/( 1 + g), given u2, where K, = tr( XX))‘. The risk of /$
will be superior to that of b if (1+g2(~-~)‘(~-~)/Kou2)/(1+g)2<1.         Fu:-
thermore, there may be a considerable reduction in average risk if one uses &
Ch. 10: Biased Estimation                                                        611


instead of b. Therefore, the g prior may provide a useful Bayesian analysis of the
linear statistical model when there is information about the j? vector but little
information about the prior covariance.


3.5.    Some remarks

We have discussed in this section three sampling theory estimators that are biased
if the non-sample information is incorrect. Both the exact and stochastic re-
stricted estimators win in terms of precision, but may lose, possibly heavily, in
terms of bias. If we could be sure of the direction of the inequality non-sample
information, and in economics there are many cases when this may be true, the
inequality estimator, although biased, wins in terms of precision and mean
squared error and thus has appealing sampling properties.
   Rothenberg (1973) has studied inequality restrictions under very general as-
sumptions regarding the form of the inequalities and has suggested an alternative
class of estimators which are biased. In particular he has shown that in the case of
the linear regression model, if the true parameter vector p is known to be
constrained in a convex, proper subset of the parameter space:then the restricted
least squares estimator dominates the unconstrained least squares estimator under
a mean squared prediction error loss criterion. However, if the sample is not
normally distributed, the constrained estimator does not necessarily dominate its
unconstrained counterpart under a generalized mean square error loss criterion.


4.     F’re-test-variable selection estimators

The previous subsections are informative relative to the sampling performance of
the equality, stochastic, and inequality restricted least squares estimators. One
problem with these results is that the researcher is seldom certain about the
correctness of the non-sample information and thus may have only a vague
notion about 8 or the 6’6/2a2 specification error parameter space. Therefore, the
results are of little help in choosing between the restricted and unrestricted
estimators or, more to the point, choosing the biased estimator with a minimum
risk.
   Since there may be reasons to doubt the compatibility of the sample and
non-sample information or uncertainty about the dimensions of the design matrix
X or Z, some biased estimators result when the investigator performs a pre-
liminary test of significance (chooses a criterion) and on the basis of the test
(criterion) makes a choice between the unbiased estimator and a possibly biased
one. To see the possible significance of these biased alternatives let us consider
the equality and inequality pre-test estimators and one or more conventional
618                                                          G. G. Judge and M. E. Bock


variable selection procedures. For expository purposes we stay in the orthonormal
linear statistical model world where 2’2 = IK and continue to assume R = I,.


4.1.     Conventional equality by pre- test estimator

Using likelihood ratio test procedures we may test the null hypotheses IS,: 8 = r
against the hypothesis 8 * r, by using the test statistic

       24 =    (6 - r)‘(d - r)/KB*,                                              (4-l)
which is distributed as a central F random variable with K and (T - K) degrees
of freedom if the hypotheses (restrictions) are correct. Of course if the restrictions
are incorrect E [d - r] = (8 - r) = 6 f 0, and u (4.1) is distributed as a non-central
F with non-centrality parameter X = (0 - r)‘(e - r)/2a2          = 6’S/2a2. As a test
mechanism the null hypothesis is rejected if u 2 F(%,T_Kj = c, where c is de-
termined for a given level of the test (Yby /,” d FcK,T_Kj = P[ qK,T_K) 2 c] = (Y.
This means that by accepting the null hypothesis we use the restricted least
squares estimator 8* as our estimate of 8, and by rejecting the null hypothesis
8 - r = S = 0 we use the unrestricted least squares estimator 1. Thus, the estimate
that results is dependent upon a preliminary test of significance and this means
the estimator used by many applied workers is of the form


                                                                                 (4.2)

 Alternatively the estimator may be written as


       I = ~,,,,,(u)e*+        It c,m) W

         =B-r,,,.,(u)(B-e*)=I-             Z(O,.,W(~
                                                  29,                            (4.3)
This specification means that in a repeated sampling context the data, the linear
hypotheses, and the selected level of statistical significance all determine the
combination of the two estimators that is chosen.

4.1.1.        Bias

From (4.3) the mean of the pre-test estimator is

       ~[d]=0 - E[&,,,,,(u)(~
                           - r)],                                                (4.4)
Ch. 10: Biased Estimation                                                            619


which by theorem 3.1 in Judge and Bock (1978, p. 71) may be expressed as

       E[~l=~-SP[X:,+*,,,/X:,-,,~c
                               (4.
Consequently, if 6 = 0, the pre-test estimator is unbiased. This fortunate outcome
aside, the size of the bias is affected by the probability of a random variable with
a non-central F distribution being less than a constant, which is determined by
the level of the test, the number of hypotheses, and the degree of hypothesis error,
6 or A. Since the probability is always equal to or less than one, the bias of the
pre-test estimator is equal to or less than the bias of the restricted estimator (3.2).

4. I .2.   Sampling performance

Since this estimator is used in much applied work, let us turn to its sampling
performance under the squared error loss criterion. The risk function may be
written, using (4.3) and following Judge and Bock (1978, p. 70), as

       p(e,i)=E[@-e)‘(d-e)]

                =E[(d-e-I+,(u)(d-r))‘(d-e-Ic,,&)(d-r))]

                =~[(&e)pbe)]-E[I~,,,,(~)(B-~)@-~)]

                   + E[+3,&)]~‘~


                =a2K +(2&a-         a2K)P ' fK+2'h)
                                                  <&
                                         [ X&K)


                   - S’SP
                               X&+4, xj

                              [ X&-K)
                                              CK
                                          ‘T-K’
                                                    1                             (4.6)

or compactly as

       p(e,~)=a2K+(28’&02K)l(2)-6’S/(4),

where 1 > l(2) > l(4) > 0. From the risk function (4.6) the following results are
clear.
(1) If the restrictions are correct and _S= tj, the risk of the pre-test estimator is
u 2K [ 1 - l(2)], where 1 > (1 - l(2)) > 0 for 0 < c < cc. Therefore, the pre-test esti-
mator has a smaller risk than the least squares estimator at the origin and the
620                                                                                                                      G. G. Judge and M. E. Bock


decrease in risk depends on the level of significance (Yand correspondingly                                                                                 the
critical value of the test c.
(2) As the hypothesis error 6 or h grows, the risk of the pre-test estimator
increases, obtaines a maximum after exceeding the risk of the least squares
estimator, and then monotonically decreases to approach a2K, the risk of the
least squares estimator.
(3) As the hypothesis error 8 - r = 6, and thus 6’S/2a2 increases and ap-
proaches infinity, I(*) and 6’61( .) approach zero. Therefore, the risk of the
pre-test estimator approaches a2K, the risk of the unrestricted least squares
estimator.
(4) The pre-test estimator risk function crosses the risk function of the least
squares estimator in the 6’S/2a2 parameter space within the bounds K/4 5
S’S/2u2 I K/2.

   The sampling characteristics of the preliminary test estimator are summarized
in Figure 4.1 for various levels of CIor c.
   These results mean that the pre-test estimator does well relative to the least
squares estimator if the hypotheses are correctly specified. However, in the
X = S’6/2u2 parameter space representing the range of hypothesis errors, the
pre-test estimator is inferior to the least squares estimator over an infinite range


        800                                          I                                                      I


        600 -                             .._..-.-.w_,.. ...
                                     .’                        ‘..                     p(e,&,oL=      0.01
                                 ,/‘.                                “...,/
                               /”                p(e,&ct       = 0.05 “‘\.-.\
                              / ,.-.“,                                                    .‘.\ __
      2 400-                ./;‘-I___       .h_ ‘L.                                            “... ‘...,
                           _‘i;c,     ---._                    1.                                               .....,
                                                                      -.__                                               ‘.._
                         /’ p(e,&ol=o.l        ‘=.._                                   -.-_                                     .I___
                                                                                               -.-_
                     4                                                                                                                       Y
                                                                                                                                             P(P. b)
        200 -$

               $f
               I
          0                      I                    I                            I                        I
               0                 5                  10                            15                    20                              25             30
                                                                              x
                                                Hypothesis Error X = S’S/~CT*


       Figure 4.1.        Risk functions for the least squares and restricted least squares estimators                                           and
                          typical risk functions for the pre-test estimator for various levels.
Ch. 10: Biased Estimation                                                          621

of the parameter space. Also, there is a range of the parameter space where the
pre-test estimator has risk that is inferior to (greater than) both the unrestricted
and restricted least squares estimators. No one estimator in the e^, 8+, and 8
family dominates the other competitors. In addition, in applied problems we
seldom know the hypothesis errors nor the location of the correct h in the 6
parameter space. Consequently, the choice of the estimator and the 0ptimum.a
level are unresolved problems.


4.2.    Stochastic hypothesis pre -test estimator

Since the stochastic_prior and sample information provide two separate estimates
of R8, i.e. r and R8, Theil (1963) has proposed that we test the compatibility of
the two estimates by the test statistic


                                                                                 (4.8)

which, if a2 is known and 6 = 0, has a central &i-square distribution with J
degrees of freedom. If S G=0, then U, is distributed as a non-central &i-square
with non-centrality parameter A, = S’(RS-‘R’+    iI)-‘i3/2a2.
   If we use the above test statistic to test the compatibility of the prior and
sample information, the estimator chosen depends upon a preliminary test of
significance and thereby produces the following pre-test estimator using (3.11):


       ,-,* =   $3,c,(u,)~**+
                           &&4b,                                                 (4.9)

where the 1( .,( u,) are indicator functions and c is determined for a given level of
a by /P”f(Gd u I-- a, where f(ul) is the density function of u,, under the
assumption that S = 0.
   Since the stochastic linear statistical model can be reformulated in a restricted
linear model framework, many of the statistical implications of pre-testing
developed in Section 4.1 carry over for the stochastic restricted pre-test estimator
(4.8). The mean of b** is

       E[6**]=/3+1(2)S-‘R’(RS-‘R’+@-‘)-’a,                                     (4.10)


where l(2) < 1. Consequently, the bias is 1(2)S-‘R’( RS- ‘R’ + !D-‘)-‘6.
   In terms of estimator comparisons, following Judge and Bock (1978) the
stochastic restricted preliminary test estimator is better in a risk matrix or general
mean square error sense than the unrestricted least squares estimator if the
622                                                            G. G. Judge and M. E. Bock


stochastic restriction error in the form of the non centrality parameter is

      X,=6’[RS-‘R’+S2]-‘6/2a2<1/(2[2-c/(c+(T-K)/J)]),                             (4.11)

where l/4 might be considered the rough bound.
   Alternatively, if the squared error loss criterion is used, then the equality of the
risk of the stochastic restricted pre-test estimator and the least squares estimator
occurs for a value of X, = S’[RS- ‘R’+ 52]-‘6/2a2 within the following bounds:

      trA/(2d,[2-      1(4)/l(2)])   G A, G trA/(2&[2-   ~(4)/~(2)1)~             (4.12)

where A = (RF’R’+       L?)-‘RS-‘R’, I(i) = P(~tr+~,~,) Q c], with 0 < l(2) < l(4) < 1
and d, and d, are the smallest and largest characteristic roots of A, respectively.
   Since the results for both criteria depend on the critical value c or the level of
the test (Y, the risk or risk matrix approaches that of the stochastic restricted
estimator as (Y+ 0 and c --) co. Conversely, as cu+ 1 and c + 0 the risk or risk
matrix of the pre-test estimator approaches that of the least squares estimator.
Finally, for (Y< 1 the risk or risk matrix approaches that of the least squares
estimator as X, + co. As before the optimum level of the test is unresolved.


4.3. Inequality hypothesis pre -test estimator

In the context of (3.20) we continue to consider a single parameter            and the
following null and alternative hypotheses:

      H,:8>r;           H,:tlcr.                                                  (4.13)

   As a basis for checking the compatibility of the sample information and a
linear inequality hypothesis for 8, when a2 is known, consider the test statistic

      (4 - r)/a     = u2,                                                         (4.14)

which is distributed as a normal random variable with mean 6/a and variance 1.
If it is assumed 6 = 6 - I-,= 0, then u2 is a standard normal random variable and
the test structure may be formulated in terms of 6, with H,, : 6 2 0 and HA : 6 < 0.
Using test statistic (4.13), we use the following test mechanism or decision rule:
(i)   Reject the hypothesis H,, if (8 - r)/u = u2 < c2 G 0 and use the maximum
      likelihood estimator 8, where c2 is the critical value of the test from the
      standard normal table.
Ch. 10: Biased Estimation                                                           623

(ii)   Accept the hypothesis        I& if u2 = (8 - r)/a   > c2 and use the inequality
       restricted estimator




By accepting the hypothesis H,,, we take 8+ as the estimate of 8 and by rejecting
Ha the maximum likelihood estimate e is used. Consequently, when a preliminary
test of the inequality hypothesis is made and a decision is taken based on the data
at hand, the following pre-test estimator results:

       8 ++ = I                                +L,W]-
                           + I~ci,,,(u2)[zc-,,~,(~)r
                  (-m,C,)(U2)~                                                   (4.15)

Recalling that 6 = fI - r, and defining w = (8 - @)/o and d = c2 - 6/a, the pre-test
estimator (4.15) is

       8 ++ = fJ+ a[I(-,,,)(W)-~~-,,-G,o)(W)]W

              -[ r,-,,-*,.,(w>-4-,.d,(w)l~.                                      (4.16)


4.3.1.    Mean of the inequality pre-test estimator

When - 00 < 6 < 0 and 0 is less than r and thus in agreement with the hypothesis
HA, and if - 6/u > 0 and d > 0, if we apply the Judge-Yancey (1977) corollaries
1 and 2 of Section 3.3 to eq. (4.16), the mean of the inequality restricted pre-test
estimator is

       E[e++]=e-(u/JZ;;)[P(Xb,~S2/u2)-P(X~2~~d2)]
                    - W)[p(x& >S2/u2)-P(&>d2)].                                 (4.17a)

For any given critical value of c2 for c2 < 0, if r - 8 = 8 = 0, the E[B++] = 0 -
(a/&%)[ 1 - P(xt2, 2 ci)] and consequently has a negative bias. However, as
6 + - 00 the E[I~“] = 8 and the pre-test estimator approaches 0, since in the
limit the maximum likelihood estimator 4 will always be used. Furthermore if
c2 = 0 and 6 = 0, then E[ F+] = 8; if c +-MI       and 6=0, then E[8++]+8-
u/G;     if c2 + -cc and 6 + co, then E[8++] + 8.
   When 0 < 6/a and d < 0, the mean of the pre-test estimator is



                                                                                (4.17b)
624                                                             G. G. Judge and M. E. Bock

For a fixed c2 < 0 if 6 + - co, then E[fI++] + - 8. The unbiased outcome as
S + co follows since in the limit the hypothesis (inequality restriction) is rejected
all of the time and the maximum likelihood estimate is used for every sample.
   These results imply that for any c2 -C0 and any value of 6/a the bias of the
inequality pre-test estimator is equal to or less than that of the inequality
restricted estimator. For a given c2 -C0 the bias as a function of S/a is shown in
Figure 3.1.

4.3.2.   Risk of the inequality pre - test estimator

Given the test statistic and the test decision rule, the risk of the pre-test estimator
under squared error loss may be written, using eq. (4.16), as

      p(e++, e>               &m.-s,o~b9~2)
              =a2+E [ o2 ( I (_,_+)W2-
                    +E[~2(&,,-,,,)
                           w-&o,d+4)l~ (4.18a)
When - cc c c2 < 0 and - cc < 6 < 0 or c2 + - S/a > 0 and use is made of the
Judge and Yancey (1977) corollaries 2 and 3 used in Section 3.3, the risk of 0++
may be expressed as




   When S = 0, the p(8++, t9) = u2 -(a2/2)[P(&       z c,‘)- I], and the risk of the
pre-test estimator is equal to or less than that of the maximum likelihood
estimator. As the critical value c2 + 0, p(8++, f?) + u2, the maximum likelihood
risk. AS c2 -+ - UJ and 6 --) 0, ,c(B++, 8) + u2/2, the risk of the inequality re-
stricted estimator. Alternatively, with any fixed c2, and as 6 --) - cc, p(t9++, 0) --,
u2, the maximum likelihood risk.
   When 0 d 6 < cc and d = c2 - 6/u 6 0, the risk of the pre-test estimator may
be rewritten as




When 6=0 and -oo<c,$O             the p(e++,r3)=(u2/2)[1+P(&>c~)].              As c2+
0, p(e++, e) + u 2, the risk of the maximum likelihood estimator.
Ch. 10. Biased Estimution                                                                                                                      625

         2                 I A . .. r “.-L., ’ I                   1         ’        ’          ’    ’    ’      1     n    I     ’
                           /.’              ‘x..
                        /”                       ‘Y,
                                                               ‘i.. ‘, s>o
             -     i”          ,0---.,                                 “k.
                                                  \                        ‘-..
             - /:        ,/’                          ‘\                                  .. .
                                                                                                 ‘.-I.,
                                                                                                          ‘-__


                                                                        -..._             Inequality       Restricted

             _/’                                                        --        -       Exact Restricted
             _I

         0;         11            11         11               11             11              11            11           11         1      -
           0              2              4            6            8              10                 12          14          16           18
                                                                   62/02

        Figure 4.2. Risks for the maximum likelihood exact and inequality restricted pre-test
         estimators as a function of 8*/o*, wheq CT*is known and equal to one, (x = 0.05, and
                                             p(l9, e) = 1.




  For any fixed 6 as c2 + - 00,

       P@++,        @+~*[v2p(x:,y                          > s*/lJ’)]        -    (lY2/2)[P( &                   > 8*/e’)]        + 02.
                                                                                                                                       (4.18d)

    The risk functions for the inequality pre-test estimator at the (Y= 0.05 level of
significance are shown in Figure 4.2 and are compared with those of the
maximum likelihood, exact restricted, and inequality restricted least squares
estimators. A comparison of the inequality restricted pre-test estimator, 8++, and
the traditional pre-test estimator [Bock, Yancey and Judge (1973)] is given in
Figure 4.2 for each pre-test estimator. Note when 6 Q 0, (i) the risk of the
inequality pre-test estimator is less than the maximum likelihood estimator, and
(ii) the risk of the traditional equality restricted pre-test estimator is less than that
of the inequality pre-test estimator only over a small range of the parameter
space. When a2 is unknown, the inequality test statistic counterpart, (fi - r)/6 = t,
is distributed as a central t random variable with (T - K) degrees of freedom
when 6 = 0. With this test statistic, the results are in general the same as those
obtained for the standard normal test statistic.


4.4.    Bayesian pre -test estimators

Bayesian pre-test estimators can be used in situations where there is uncertainty
regarding the validity of different hypotheses. Within this context Zellner and
626                                                           G. G. Judge and M. E. Bock


Vandaele (1975) demonstrate such estimators for a variety of statistical models
where alternative hypotheses exist relative to the unknown coefficient vector. In
particular, from a Bayesian point of view, when uncertainty exists relative to the
model, we proceed by choosing a prior density and then develop a post-data
description of the uncertainty. In traditional Bayesian significance testing, as
discussed in Chapter 2 of this Handbook by Zellner, we usually compare the
posterior probability of the null hypothesis with that of the alternative hypothesis,
which may be of the nested variety. The ratio of the two alternative posterior
probabilities (the posterior odds ratio) forms the basis for the decision and the
null hypothesis is accepted if the ratio is larger than “some” limit. Zellner and
Vandaele (1975) formulate a Bayesian pre-test estimator with posterior expected
loss given by

      E[L(.)l=~o(rB-r)‘e(B-r)
                  +(~-P,)[(B-B>‘Q(B-B)+E[(B-B)‘Q(B-~)~],
                                                                                 (4.19)

and found a minimizing value of

      B=r+[1-(Ko/(1+K0))(8-r)l
       = (1- PO)@+
                 PO’,                                                            (4.20)

where p. is the posterior probability of the hypothesis Ho : /3 = r, Q is a positive
definite symmetric matrix, fi is the posterior mean of j3 under the hypothesis
H, : /3 * r, and K, = p. /( 1 - po) is the posterior odds ratio. In the usual Bayesian
sense this pre-test estimator is consistent, admissible, and minimizes average risk.
In contrast to the sampling theory pre-test estimator, B is a continuous function
of the observations.
   Learner (1974) has posed the question: “Is there an acceptable prior that
implies a post-data description of uncertainty that is essentially the same as that
provided by a conventional search estimator?‘, and has answered by pointing out
that a posterior mean is a weighted average of restricted and unrestricted
estimates with the weight being a function of test statistics when positive
probability is assigned to the null hypothesis. Learner and Chamberlain (1976),
building on the Zellner and Vandaele (1975) work, conclude that a conditional
posterior mean under the standard assumptions for the linear model is a weighted
average of the estimates resulting from all combinations of excluding and not
excluding variables or, in other words, the restricted and unrestricted least squares
estimates. Therefore a Bayesian by selecting a suitably defined prior may end, in
many instances, with a posterior summary of model uncertainty that is essentially
the same as a pre-testing sampling theorist.
Ch. IO: Biased Estimation                                                       621

4.5.    Variable selection estimators

The problem of model specification and choice is discussed in Chapter 5 of this
Handbook by Learner. Therefore, in this chapter we limit our discussion to a few
words about the omitted variable(s)-variable selection problem. In much applied
work there is uncertainty concerning the appropriate dimension of the design
matrix X = [X1, X,], where X, refers to the explanatory variables included in the
model and X, are the excluded variables or, in other words, the unselected
variables that appear with a zero coefficient. The problem concerns the dimension
of X, c X or, in other words, the subset of variables to be included. As we know,
if the investigator uses the complete set of variables X this collection may contain
extraneous variables and the estimates are unbiased but may have large variance.
Alternatively, estimates restricted to the nested model subset X1 have smaller
variance but possibly large bias.
   To aid in making a choice between the bias-precision extremes, a variety of
variable selection criteria have been suggested under such acronyms as c,,
[Mallows (1973)], PC [Amemiya (1976)], and AIC [Akaike (1974)]. These criteria
and others have been summarized and evaluated by Hocking (1976), Amemiya
(1976), and Judge et al. (1980). Although there is a certain intuitive appeal and
logic to many of these informal, ad hoc model selection rules, we should keep in
mind that they have a heuristic base, their sampling properties are unknown, and
their practical use is demonstrated by numerical examples. In addition, most of
the criteria involve unknown parameters and their operational counterparts vary
depending on the sample estimate used to substitute for the unknown parameters.
The criteria also involve, in one form or another, the residual error sum of squares
corresponding to each model. Thus, the criterion can be identified with a test
statistic and hence to various types of two or more stage pre-test estimators.
These variable selection procedures lead to search rules that are inadmissible
under a squared error measure and consequently have limited normative content
since superior estimators have been demonstrated. Learner (1978) has aptly
characterized the conventional model search activity as “ad hoc inference with
nonexperimental data”.
   When leaving the nested model case the statistical procedures for checking
separate families of models that were originally proposed by Cox (1961, 1962) are
relevant. Unfortunately, we know little about the small sample risk consequences
for the tests proposed and the statistical results in general appear even more
suspect than for the nested model case.


5.     Conventional estimator inadmissibility and the Stein-rule alternatives

For estimation under squared error loss, Stein (1956) demonstrated that there are,
in problems of more than two parameters, minimax estimators other than the
628                                                              G. G. Judge and M. E. Bock


maximum likelihood estimator. In 1961 James and Stein exhibited a minimax
estimator which dominated the maximum likelihood estimator and thus demon-
strated its inadmissibility. In this section we analyze the statistical implications of
this family of biased-shrink estimators for a range of statistical models and loss
functions.


5.1.     Estimation under squared error loss

In this section we consider a range of Stein-like estimators for the orthonormal
linear statistical model.

5.1.1.     The James and Stein estimator - orthonormal case

Within the context of the orthonormal or K mean statistical model, assume a2 is
known and therefore, without loss of generality, we may assume a2 = 1. Within
this context the estimator developed by James and Stein, which is a function of
the maximum likelihood estimator d, has the form

                                                                                     (5.1)

where 0 Q a G 2( K - 2). This rule makes the adjustment in the maximum likeli-
hood estimator a smooth function of the data. The mean of the James and Stein
estimator is

       E[e’] = E[d]-         E[(a/kd)8]

             = 0 - aE[1/x&+2.hj]ey                                                   64

wherex&+2, A) is a non-central &i-square random variable with non-centrality
parameter X = &r9/2, and a theorem given by Judge and Bock (1978, p. 321) is
used in the evaluation. Consequently, 8 is biased and has bias aE[ 1/xtK+2,h)]t9.
  The risk of the James and Stein estimator under a squared error loss measure is

       p(e,8) = E [(# - e)Q                 - e)]
                =E[(d-8)‘(d-8)]-2a+2aB’E[8/&8]+a2E[1/8’8]
                = K-~~E[x~R-~,~)/x:K--z.~)          ] +2dm   [ 1/x:K+2,hJ
                    + a2E[l/x&                 I
                =K-a[2(K-2)-a]E[l/x%,,,],                                             (5.3)
Ch. IO: Biased Estimation                                                           629


by theorems in Judge and Bock (1978, p. 322). Consequently, the risk of the
James and Stein estimator is less than or equal to that of the maximum likelihood
estimator if 0 d a < 2( K - 2) and the strict inequality holds for all finite 8’8, i.e.
for K 2 3 and 0 < a Q 2( K - 2), the p(0,8) < ~(0, I) for all 8. Given (5.3) the
value of a which provides the minimal risk for 4 is found when a = K - 2.
Therefore, the optimal minimal risk James and Stein estimator is

      #= (l-(K-2)/&8)8,                                                         (5.la)

and has risk

                                                                                (5.2a)

The risk for this estimator is smaller than that of the maximum likelihood
estimator for all B such that A = (&e/2) < cc. When 8 = 0 the risk of the James
and Stein estimator is 2, and increases to the risk of the maximum likelihood
estimator cp(e, I) = K) as 8’8 --, co. Thus, for values of 8 close to the origin the
gain in risk is considerable. These risk results taken in conjunction with the bias
results (5.2) imply that the trace of the covariance matrix (&) for the James and
Stein estimator is less than the trace of the covariance matrix (2;) for the
maximum likelihood alternative, i.e. tr Z; < tr ,Z; = K. As Stein (1962) and others
have noted, and as developed in Judge and Bock (1978, pp. 173-176), the James
and Stein estimator (5.1) arises in quite natural fashion as an empirical Bayes
estimator.
   The James and Stein estimator (5.1) shrinks the maximum likelihood estimates
toward a null mean vector. A more general formulation which introduces ex-
plicitly the arbitrary origin considers a mean vector 0, and an estimator of the
form

                                                                                (5.lb)

This estimator has bias and risk characteristics consistent with the more conven-
tional James and Stein estimator.
   If a2 is unknown, the optimal James and Stein estimator may be written as

      e,=[l-((K-2)/(T-K+2))(s/M)]&                                               (5 04)

and has risk


      P(b 2;8,)=K-((K-2)2(T-K))/(7’-K+2)E[l/~&,,,],                               (5.5)
630                                                                 G. G. Judge and M. E. Bock


where s/a * = (T - K)h*/a*     has a X$_~) distribution that is independent of 8.
Consequently, at the origin where 8 = 0 the risk is K - (T - K )( K - 2)/
(T - K + 2) and the risk increases to K, the maximum likelihood risk, as @‘8/a*
 -+ co. The evaluation of the mean and covariance of (5.4) may be developed as in
(5.2) and its generalization to an, pbitrary vector 0, proceeds as above. It is
perhaps instructive to note that &9/a* is distributed as a xTK,X) and thus the
optimal James and Stein estimator (5.4) may be rewritten as

         &= [l-((K-2)/(T-K+2))(s/&d)]8
           = [I-((T-         K)(K-2))/((T-        K+2)K)(l/u)]d,                        (5.6)

where u = &d/(Kc?*) is the likelihood ratio statistic which has an F distribution
with K and (T - K) degrees of freedom and non-centrality parameter A = 8’8/2a *.
Thus, the pull back of the maximum likelihood estimator is determined by the
data and the hypotheses vector e,, through the value of the test statistic. The larger
the value of the test statistic the smaller the adjustment made in the maximum
likelihood estimator.
   When u* is unknown the empirical Bayes counterpart is

         e,= [l-((K-2)/(T-K))(s/d’8)]8                                                  (5 -7)

and this estimator is dominated              by the James and Stein estimator (5.4) since
(K - 2)/(T       - K) f (K - 2)/( T - K + 2) the optimal value of the constant a.

5.1.2.      Positive Stein rule

Although the James and Stein rule is minimax, it is not admissible. Therefore,
other alternative superior rules exist and one such rule is the Baranchik (1964)
and Stein (1966) positive rule:

         fi+= [l-rnin(l,a/B’B)]~
            = Il,,,,(lll)[l-(a/l~l)]~,                                                  (5.8)

which uniformly improves on the James and Stein rule (5.1) and is minimax when
0 G a G 2(K -2). There is no one value of a for the positive rule estimator (5.8)
that is optimal. However, Efron and Morris (1973, p. 124) have shown that rules
with a in [(K - 2), 2( K - 2)] dominate the rules with a in [0, (K - 2)]. Bock (1975)
has shown that a general estimator of the form h(&e^)&l,where h is a measurable
real valued function, may be improved upon by its positive rule version
h(B’~)II,,,,(h(B’8))~.    Judge and Bock (1978, pp. 186-187) show there is a
family of positive rule estimators that dominate a spherically symmetric estima-
tor.
Ch. IO: Biased Estimation                                                         631


5.1.3.     A minimax - admissible rule

The James and Stein and the positive rule estimators are neither Bayes nor
admissible. Although every Bayes estimator of 8 is admissible, not all Bayes
estimators dominate the maximum likelihood rule. To fill this void Strawderman
(197 1) developed an admissible estimator that dominates the maximum likelihood
estimator and thus is minimax. In the case where a* is known the Bayes estima-
tor is K > 4


      tF=        l-((K+2-2a,)/8'8)
             [


                                                                               II
                                               -2a1)/2exp[ -(A - l)&fi/2] dX 1-’ 8.
                                                                                (5.9)

   This estimator belongs to the class of Baranchik estimators and is minimax and
it is admissible since it is Bayes. Strawderman also showed there were no proper
Bayes spherically symmetric minimax estimators for K = 3 or 4. In a Monte Carlo
result for K = 5 and a, = l/2, Judge and Bock (1978, pp. 220-221) found that the
Strawderman estimator has risk equal to or less than the positive rule alternatives
considered over a wide range of the parameter space and that the potential
relative risk loss over the remaining part of the parameter space is quite small.
   In the case that a, = 2, the prior distribution for B that results in this Bayes
estimator, has a measure of the form



It has been noted by Hinde (1978) that the estimator @,,=,, dominates             the
optimal James-Stein estimator (5.la).

5.1.4.     Inadmissibility of the conventional pre - test estimator

In Section 4 we developed and evaluated the risk function for the biased
conventional pre-test estimator 8 and noted that because of the discontinuous
nature of the estimating rule, the estimator was inadmissible. In their article,
Sclove, Morris and Radhakrishnan (1972) suggested another (pre-test) estimator
that demonstrated the inadmissibility of the pre-test estimator d. The reader may
remember that in Section 4.1 we defined the conventional pre-test estimator as

         6= I(,,,)(U)8, + I          (at                                       (5.10)
632                                                           G. G. Judge and M. E. Bock


where 0, is the restricted or hypothesis vector r = 0,. Given this pre-test rule,
Sclove et al. (1972) replaced the maximum likelihood estimator in (5.10) with the
James and Stein, or more exactly with the Stein positive-rule, estimator. They
then showed, under the squared error loss measure, that the estimator


      h+=ql,.,(e4 + &&P+               = Z(,,,,(U)8,+ Z[,,,)(U)
           x(zC
              .*&&)[l-        .*/4(~    - eJ+4l>
         = z[c,m)b)zb’,m~
                       (u)p-a*~ui(iUo)+eo                                        (5.11)


provides a minimax substitute for the conventional pre-test estimator, if the
critical value c in (5.11) is less than or equal to u *. When c > a*, the estimator is
no longer minimax but dominates the conventional estimator d for compa-
rable values of c. The proofs of these propositions are given in detail in Judge and
Bock (1978, pp. 191- 194). The importance of this result is that the non-optimality
of the conventional pre-test estimator is demonstrated. This means that the
unfavorable properties for the pre-test estimator that were discussed in Section
4.1 are only part of the problem.

5.1.5. Inadmissibility of the maximum likelihood inequality restricted und
corresponding pre -test estimator

Continue to consider the orthonormal statistical model with estimator perfor-
mance evaluated under a squared error loss measure. For expository purposes we
consider the case when the coefficient vector is of dimension K = 3, the variance
a* = 1, and non-sample information is available in the form of a single inequality
restriction or hypothesis, say, 8, >, r, = 0. Under this scenario and within the
context of Section 4.1 the inequality restricted maximum likelihood estimator,
when K = 3, may be written as




                                                                                 (5.12)



The sampling properties of this estimator were discussed in Section 3.
Ch. IO: Biased Estimation                                                           633


   As an alternative biased estimator, consider the following Stein-rule version of
the inequality restricted estimator:




where the maximum likelihood estimates of 0 are replaced by their corresponding
James and Stein estimates # = [l -(l/&d)]1     or their positive-rule counterpart.
With a little algebra (5.13) may be written as

     8’= e+- I,,,       m)   (d,)( l/&1)1,                                     (5.13a)

where 8+ is the conventional inequality restricted estimator (5.12).
  Alternatively, if we replace all of the maximum likelihood estimates in (5.12)
with their Stein-rule counterparts then the estimator becomes




and has E[tb] f 0. The risk of the Stein inequality estimator is

                                                                                (5.15)




   This means the risk of the Stein inequality estimator is less than or equal to the
risk of the conventional inequality estimator if the last two terms of (5.15) are
negative. Bock, Judge and Yancey (1980) show that this is indeed the case and
thus demonstrate an estimator that dominates the conventional inequality estima-
tor discussed in the literature. The risk characteristics of the alternative estimators
are noted in Figure 5.1. In a similar way the estimator (5.14) can be shown to
dominate the estimator (5.13) and the positive part version of (5.14) can be shown
to dominate the James and Stein inequality estimator (5.14). It should be noted
634                                                                               G. G. Judge and M. E. Bock


           5           I       I       I        /                I     I,:           I       I
                                                                      .'i
                                                                     /:
                                                                     ./
           4-                                                       .','
                                                                   'i
                                                                  .I'
                                                                    ;
                                                                  .','
                                                                 / .'
           3-
      Y
      .z
      cc
           2-



           l-    -'-' &'

                 -Lj

           0            I              I        I                I           IN      I       I
            -5         -4     -3      -2       -1       0        1           2       3       4       5

                                                     6,= r,-0,


      Figure 5. I,     Risk functions for the maximum likelihood, James and Stein, and alternative
                                       inequality restricted estimators.



that if we are sure of the direction of the inequality restriction, the Stein
inequality estimators have smaller risks than maximum likelihood and in fact
dominate the conventional James and Stein estimator (5.1).
   Another alternative inequality estimator results when Stein estimates replace
the maximum likelihood estimates in the argument of the indicator function in
estimator (5.14). Unfortunately, in this case the distribution of the James and
Stein rule are unknown and therefore the risk determinations cannot be analyti-
cally evaluated. Monte Carlo results suggest that the risk characteristics of
estimator (5.14) carry over to its completely Stein counterpart.
   Bock, Judge and Yancey (1980) have also shown that the following version of
the inequality restricted pre-test estimator,


                                                                                                     (5.16)



dominates under squared error loss the conventional inequality pre-test estimator,


                                                                                                     (5.17)



which was discussed in Section 4 and demonstrates its inadmissibility.
Ch. IO: Biased Estimation                                                        635


5.2.      Stein -like rules under weighted squared error loss

In economics many situations arise where interest centers on the estimation
problem and thus the sampling characteristics of the estimator in the /I space.
Alternatively, even if we remain in the t9 space we may wish to weigh certain
elements of the coefficient vector differently in the loss function. This means that
for the general linear statistical model y = X/3 + e of Section 2 we are concerned
with the estimator 6(b) of the unknown vector j3, under the risk

         P(8+J2;q= E[(6(b)-B)'Q(S(b)-8)l/u2,                                  (5.18)

when Q is some (K x K) positive definite matrix. Under the reparameterized
model of Section 2, where 8 = S - ‘12j3,we may also transform the problem to that
of evaluating the risk under

         P(~-J~;S~)
                 = E[(&(@-~)'((S"2)'QS"2)(6,(e)-e)l/(r2,                      (5.19)

where S(d) = S-‘/26(S-‘/2@.
    For weighted squared error loss reflected by (5.18), where b is a normally
distributed K dimensional random vector with mean /3 and covariance a2( X’X) - ‘,
Judge and Bock (1978, pp. 231-238) have shown that if Q’/2CQ’/2 and Q’/2BQ’/2
are positive definite matrices that commute with each other and with
Q’/2(  XlX) - IQ’/2 and s/u 2 has a &i-square distribution with (T - K) degrees of
freedom, then the estimator


         6(b,s)=[I,-h(y)+                                                     (5.20)


is minimax if certain conditions often fulfilled in practice are true. This means
there is a family of minimax estimators that are superior to the maximum
likelihood estimator under squared error loss. We now turn to some of the
estimators in this minimax class.

5.2.1.      A James and Stein-type     minimax   estimator

Out of the class of estimators defined by (5.16) if we let Q = C = I and B = X’X
we have the estimator

         /IS:= [ 1 - as/b’X’Xb]   b,                                          (5.21)

or its generalized counterpart which shrinks toward a known K dimensional
vector & instead of the conventional null vector. The mean of &, by a theorem
636                                                          G. G. Judge and M. E. Bock


in Judge and Bock (1978, pp. 321-322)      is

                                                                                (5.22)

where 2X = @‘X’Xfl/a *. As shown in Judge and Bock (1978, p. 242), p(j3,      a’; 8:)
G p(fl, o*; b) for all fi and a* if


        0 <a < 2(tr( X’X)-‘h,    -2)/(T-   K+2)                                (5.23)

and

        tr( X’X)-’ > 2A;‘,                                                     (5.24)

where hi’ is the largest characteristic root of (X’X) - ‘. Note that if X’X = I,, we
have the James and Stein estimator discussed in Section 5.1. If (tr( X’X) -IX,) G 2,
there is no value for a > 0 for which 8: dominates the least squares estimator.
This means that an ill-conditioned X’X matrix could affect whether or not
(tr( X’X)-‘/A,)   > 2 and that the appearance of three or more regressors no
longer assures that a minimax estimator of the form (5.21) exists. As Judge and
Bock (1978, pp. 245-248) show, a positive rule variant of the estimator (5.21)
exists and dominates it.

52.2.      An alternative estimator

An alternative to (5.21) is an estimator of the form

        /3;=   [IK-a(X’X)s/b’(X’X)6]b,                                         (5.25)

which has mean

                                                                               (5.26)

Judge and Bock evaluate the risk for (5.25) and show that if

        oBa<2(K-2)/(T-K+2)X,,                                                  (5.27)

where h, is the smallest root of (X’X), then pz dominates 6. This means that
compared to /37, this estimator does not have restrictive conditions on tr( X’X) - ’
and h, and thus will always be minimax if the condition on (I is maintained. As
before, a positive rule variant of (5.25) exists and dominates it.
Ch. IO: Biased Estimation                                                                        637

5.2.3.      Berger’s minimax estimator

Another estimator that is of the general form of the minimax estimator (5.20) has
been suggested by Berger (1976a) and may be defined as follows:

         #IT= [ IK - a( X’X)s/b’(        X’X)‘b]     b,                                     (5.28)

where 0 Q a d 2( K - 2)/(T - K + 2) and s/a2                   has a x$_ Kj distribution.        The
mean of j3: is

         E[ /3:] = j3 - aE [ X’Xs/b’(      X’X)2b]

                   = [I,-au2(T-K)E[(b’(X’X)26(X’X)~‘+oZ~~2~IK)~’]]~,

                                                                                            (5.29)

and /I? has risk


         P(B,a2;    /33*) = tr(X’X)-‘+      aa2(T-        K){a(T-   X+2)

                            -2(K-2)E[l/~(X~X)‘blj,                                          (5.30)

which is a minimum if a = (K - 2)/(T - K + 2). A corresponding positive rule
version of /3: exists and is given by Judge and Bock (1978, p. 252).

5.2.4.      Admissible minimax estimator

When b has a normal distribution with mean vector j3 and covariance u2( X’X) -I,
with known u2 = 1, the Bock version of the Strawderman estimator which is
minimax admissible, may be expressed as




               I    2cQ
         84*= l- 6( X’X)6
                                 1  l-
                                                            (jb’(X’X)b)‘”
                                         c,![exp(tb’(X’X)b)~~~‘(fb~X~X~)‘/j!]
                                                                                            11
                                                                                                 b’

                                                                                            (5.31)

where c, = (K/2) + 1 - a, is an integer and a, is chosen so that 3 - (K/2) -Ca, < 2
and tr( X’X) - ‘X, 2 c, + 2. The conditions for (5.3 1) to be minimax proper Bayes
are quite restrictive [Judge and Bock (1978)]. Fortunately, Berger (1976b) has
suggested the following minimax admissible estimator which does not require
638                                                                                G. G. Judge and M. E. Bock


restrictions on tr( X’X) - ‘AK:




                                                                                                                (5.32)

for (K/2) - 1 < cb Q K - 2, where A; I is the smallest root of ( X’X) - ’ and cb is an
integer. To be a proper Bayes estimator (K/2) < cb G K - 2, which implies K > 5.

5.2.5.     Some risk comparisons

In Section 5.2 we have discussed selected estimators from a family of estimators.
We still do not know how these estimators compare in terms of risk over the
parameter space. To get some idea of the relative sampling performances, one set
of Monte Carlo sampling results is reported from Judge and Bock (1978, PP.


             MLE Risk
  10.0 -                                                                           r-~.~.-.~.-.r-m.I_~.~r
                                                                                   -.-.-.-.-‘-.-‘-.-.-’




                   I    I   I    ,    I,       I    ,    I   ,    ,      ,     I    ,    I     ,     ,      ,
                  4         8        12       16        20       24           28        32          36           40

                                                   8’ D;le


         Figure 5.2.   Empirical risk bounds for S,( y), S,(y), 6,(y),       and 6,,( y) (maximum risk
                                                 bounds).
Ch. 10: Biused Estimation                                                        639


259-274). To obtain the empirical risks 300 five-parameter samples were drawn
from a multinormal distribution with mean vector 8 and non-diagonal covariance
matrix which had a characteristic root matrix:


                      2.5
      D=                    2.0                                               (5.33)
                                  1.5
                                        1.0

The estimators compared were the positive rule counterparts of /3T = 6,(y),
K = 4(Y), /Y = 6,(Y), and /3; = c?,~(y) and the empirical risk functions are
given in Figure 5.2. These results indicate the Berger minimax estimator /3? has
the smallest risk at the origin. However, the risk for this estimator quickly crosses
the Berger-Strawderman estimator & and the risk for j3: is superior to that of all
estimators compared over much of the parameter space. No one estimator is
superior over the whole parameter space. At least these limited results indicate
that the gains from having an admissible estimator are not large.


6.   Some biased estimator alternatives for the stochastic regressor case

In many cases the economist must work with passively generated non-experimen-
tal data where the values of the design matrix X are not fixed in repeated samples.
In this section we consider a sampling process where a sample of size T is drawn
from a K + 1 variate normal population with all parameters unknown. The t th
random vector has the form




where x, is a (K x 1) vector. Let the sample mean and covariance statistics based
on the T independent random vectors be denoted by




where the population mean p and covariance _Z are unknown, and the sample
correlation coefficient is R* = S~,Sx;‘Sx,/S,‘. If we assume yCT+,) is unknown and
we wish to predict yCr+,) from xCr+ ,) b y using a prediction function based on the
original sample, the maximum likelihood prediction function is

                                                                                (6.1)
640                                                                G. G. Judge   and M. E. Bock


where B = SX;‘S,, and &, = jj - Xl). In gauging estimator performance we use the
squared error loss measure

        +(k% 9) = +-               Y(r+,))*]/~*.                                         (6.2)
   Given this problem, Baranchik (1973) specified an alternative prediction esti-
mator toy, when K > 2, that is found among the class of minimax estimators in
the following theorem [Judge and Bock (1978, p. 278)], where h(u) = C/U, where
c is a constant and u = R*/(l - R*).
   A prediction estimator of the form

        jj=Y’-h(R*/(l-R2))(xtT+,)-n);6                                                   (6.3)

is minimax and dominates the maximum likelihood prediction function y’if
  (i)    O<uh(u)d2(K-2)/(T-K+2)foru>O;
 (ii)    the derivative of uh (u) is non-negative for u > 0; and
(iii)    h(u)d(T-3)/(K-l)foru~(K-l)/(T-K+2)whenthederivativeof
         uh (u) is positive.

If 1 - h(u) is negative the positive rule version of the Baranchik estimator

        ~,=max[0,1-t(K-2)(1-R2)/{R2(T-K+2)}](~~T+,~-X)~~+~,

                                                                                         (6.4)

where 0 < t Q 2, should be used.
   An alternative approach to determining a rule that is some function of the
maximum likelihood prediction equation is to consider prediction functions of the
form

        Ji==a(X(,+,)-X)‘B+Y,                                                             (6.5)

where a is any constant, and find the value of a that minimizes E[(ga - yCT+,,)*I.
King (1972, 1974) has investigated this problem and derived the following
estimator:

        pa= [(T-K+2)p*/{K+(T-2K-2)p*}](x~T+,)-~)tfi+p,                                   (6.6)

which unfortunately contains the unknown parameter p*, the population multiple
correlation coefficient. If, following King, the unknown parameter p* is replaced
by a sample estimate R*, (6.6), the estimator, is of the general form (6.3) and thus
dominates the maximum likelihood estimator when the condition 4 < K <
Ch. IO: Biased Estimation                                                         641

(T-   3)* + 1 on T and K is satisfied. Analytically evaluating the risk for this
estimator is a difficult task, but empirical risk functions developed by King (1974)
indicate that the estimator compares quite favorably with the Baranchik estimator
and its positive part for values of T and K normally found in practice.
   In many econometric problems based on the stochastic regressor model,
interest centers on the unknown parameter vector /3 and the performance of
alternative estimators under the risk measure E[( I- fi)‘( b - p)]. Fortunately the
theorems, lemmas, and risk derivations for the fixed regressor case given by Judge
and Bock (1978, pp. 229-258) carry over directly for the stochastic regressor case.


7.    Biased estimation with nearly collinear data

In the presence of a design matrix X that is nearly collinear, small changes in the
values of y, the vector of observations on the dependent variable, may result in
dramatic changes in the values for 6, the unbiased least squares estimator of /3.
Because of the negative inferential implications of this instability, estimators that
are not subject to such extreme dependence on the value of y are considered in
this section. In an attempt to mitigate the problem of imprecision we examine a
class of biased estimators, known as ridge-type estimators, for various specifica-
tions of the weight matrix Q in the quadratic loss function


                                                                               (7.1)

and compare them to the least squares estimator b. For a more complete
discussion of the identification and mitigation of the problem of multicollinearity
the reader is referred to Judge, Griffiths, Hill and Lee (1980, ch. 12). A general
survey of the literature devoted to ridge regression is given by Vinod (1978).


7.1. A measure of “near” collinearity

Certain biased estimators have arisen in attempts to solve problems of near
collinearity in the design matrix X. This occurs when one or more columns of X
are “nearly” equal to a linear combination of the other columns. One measure of
near collinearity is the condition number of the matrix X’X which is defined as
the ratio of the largest over the smallest characteristic roots of X’X, i.e.

      h/X,.                                                                    (7.2)
The condition      number does not change if all the independent      variables are
642                                                           G. G. Judge and M. E. Bock


multiplied by the same scalar. Since

       h,/X,   > 1,                                                               (7.3)
severe near collinearity is said to exist when the condition number, h,/A,, is very
large. In such cases the data contains.relatively little information about certain
directions in the parameter space as compared to other directions [Thisted
(1978a)]. As Thisted notes, if a direction is denoted by a K dimensional vector c
whose Euclidean norm ]]c]]is one, then the admissible unbiased estimate of c’/3
under squared error loss is c’b, the corresponding linear combination of the least
squared coefficients. Thus, if c, and c2 are directions and ]]c;X]] is considerably
smaller than ]]c;X]], the variance of c;b will be considerably larger than that of
c;b. The condition number by itself may not be adequate to define multicollinear-
ity. Instead, perhaps, as Silvey (1969) suggests, it may be preferable to look at all
of the characteristic roots and the spectral decomposition to see if mwlticollinear-
ity exists and if so its nature and extent. Building on Silvey’s suggestion Belsley,
Kuh and Welsch (1980, ch. 3) provide a set of condition indexes that identify one
or more near dependences and adapts the Silvey regression-variance decomposi-
tion so that it can be used with the indexes to (i) isolate those variates that are
involved and (ii) assess the degree to which the estimates are being distorted by
near linear dependencies. Other measures of collinearity are discussed in Chapter
5 of this Handbook by Learner.
   Under near singularity the imprecision that exists in estimating some of the
unknown parameters is reflected by the orthonormal statistical model (2.12). In
this case the best linear unbiased estimator of a is & = A- ‘X’y, with covariance
a*&’ and the variance of di is a2/hi, where Xi is the ith characteristic root of
X’X. Consequently, relatively precise estimation is possible for those parameters
corresponding to the large characteristic roots. Alternatively, relatively imprecise
estimation exists for those parameters corresponding to the small characteristic
roots.


7.2.    Ridge-type    estimators

As we have seen in previous sections of this chapter, the transformation of an
unbiased estimator often results in a biased estimator of the transformed parame-
ter. In this context and in the face of nearly collinear design matrices, Hoer1 and
Kennard (1970) suggest biased estimators called “ridge regression estimators”.
They note that the average squared length of the least squares estimator b is too
large, in the sense that E[b’b] > fi;S, and Marquardt and Snee (1975) show that

       E[b’b]=@‘/3+o*tr(X’X)-‘>/3’/3+a*/h,,                                       (7.4)

where X, is the smallest characteristic root of X’X. Hoer1 and Kennard use the
Ch. IO: Biased Estimation                                                          643


results as a motivation for the use of biased estimators where the “shrinkage”
factor is non-stochastic. They propose biased estimators of the form

       /$= [x’x+cz,]-‘X’y,                                                       (7.5)

where c is a constant. In this family of estimators the replacement matrix
[ X’X + cZ,], which replaces X’X in the least squares estimator, has a lower
condition number than X’X. These estimators have the property that their mean
squared error is less than that of b, the least squares estimator of p, for a properly
chosen c > 0. Unfortunately, the appropriate value of c depended on the un-
known parameters /3 and a*. For severe n&specification of c, & would have a
mean squared error larger than that of b and thus these estimators are not
minimax for Q = ZK. The estimator z$, though biased, does result in a more stable
estimator for positive values of c.
   The appropriate choice of c is no problem in the following Bayesian formula-
tion. It is assumed that the prior distributions of /3 are normal with mean vector 0
and covariance matrix r2ZK, where r* is a known positive constant. It is
appropriate to choose c = u*/r* under squared error loss. In that case fit would
be the Bayes estimator and preferable to b under the Bayes risk criterion. Lack of
knowledge of the appropriate value of c leads to various specifications which
depend on the value of y itself. In the remainder of this section we consider these
sorts of estimators.
   In passing we note that another way of characterizing the ridge estimator is
that of an estimator which results from using the least squares criterion subject to
the quadratic constraint /3’/3= r. Lacking analytical sampling theory results in
this area, many of the Monte Carlo experiments for ridge estimators have made
use of this type of formulation. The proper choice of r is of course a problem.
   The original specification of ridge regression estimators was eventually to lead
to the definition of “ridge-type” estimators: estimators of the form

       #&= PX’y,                                                                (7.6)
where the condition number of the matrix A is less than that of X’X. Conse-
quently, A may, as in the case of Stein-like estimators, be a stochastic matrix
dependent on y. Such estimators are more stable than the least squares estima-
tor b.


7.3.   Minimax ridge -type estimators

If a ridge-type estimator dominates the least squares estimator, it is minimax.
Such estimators exist only for K 2 3 and we will assume that K 2 3 for the
remainder of this section.
644                                                          G. G. Judge and M. E. Bock


   If the loss function weight matrix Q is the identity matrix, there are no known
minimax ordinary ridge regression estimators, of the type (7.5) with stochastic c,
for extremely unstable design matrixes X. Thisted (1978b) notes that such rules
have only been specified for design matrixes X in case that the minimaxity index,


                                                                                 V-7)

of X’X is greater than 2. If the condition number of X’X, (Al/AK), is large, this
inequality will not be satisfied. Work by Casella (1977) and Thisted (1977)
indicates that it is unlikely that such types of minimax ridge rules exist when the
minimaxity index of X’X is less than or equal to two and Q = IK. Thisted and
Morris (1980) show that many of the ordinary ridge estimators that have been
proposed in the literature are not minimax when the design matrix X is nearly
collinear.
   An example [Judge and Bock (1978)] of a minimax ridge-type estimator for
Q = IK is


                                                                                 (7.8)


where a, is a constant in the interval [0,2(T - K + 2) -‘(X’,c~= ,h; 2 - 2)]. Note
that the estimator reduces to b if the interval is empty, that is, unless the
minimaxity index of X’X is greater than 2. However, even if 6,( y) is distinct from
b, the amount of risk improvement of S,(y) over b diminishes as the condition
number of X’X grows large.


7.4.    Generalized ridge estimators

A generalized ridge estimator may be defined as

       b* = [ x’x+   C]_‘X’y,                                                    (7.9)

where C is a positive definite matrix such that (X’X)C = C( X’X). Note that C
and (X’X) are simultaneously diagonalizable. These are automatically known as
“positive shrinkage estimators”.
   These generalized ridge estimators are not necessarily ridge-type estimators
since under squared error loss, with Q = IK, they do not necessarily improve on
stability and may in fact make it worse. The Strawderman (1978) adaptive
generalized ridge estimator is an example of an estimator out of this class that is
Ch. IO: Biased Estimation                                                         645

minimax but the condition number for the replacement matrix is worse than that
of X’X in the least squares estimate 6.
   For a loss function weight matrix Q = ( X’X)m, Hill (1979) has noted that an
estimator of the form



      kh)=
                 I IK-%
                            s2(XpX)‘-m b
                                        I
                            b’( x’x)2 - “b
                                                                              (7.10)


has the ridge property and is minimax for all X’X provided m > 2 and a, is a
constant in the interval [0, (T - K + 2) -‘2( K - 2)]. For m = 1, we have Q = X’X
and the prediction loss function is implied. In this case S,,,is minimax but is not a
ridge-type estimator.



7.5. A summary comment

In conclusion, we can say that under the usual specification of Q = IK in the
quadratic loss, it does not appear to be possible to meet simultaneously the
requirements of ridge-type and minimaxity when the X matrix is of the ill-
conditioned form. In fact, Draper and Van Nostrand (1979) note that the amount
of risk improvement for ridge estimators is strongly affected by the ill-condition-
ing of the X’X matrix. No example of the simultaneous meeting of the require-
ments are known for Q = X’X. However, for Q = ( X’X)m and m > 2 there are
ridge-type estimators which dominate the least squares estimator for all specifica-
tions of (T x K) matrices X with rank K. Such loss functions heavily penalize
estimation errors in those component parameters which can be estimated rather
well. Finally, it should be noted that Smith and Campbell (1980) raise some
questions as to the foundations of the ridge technique and discuss critically some
current ridge practices. Discussions bv Thisted and others of the Smith and
Campbell article reflect in some sense the range of knowledge and practice in the
ridge area.



8.   Some final comments

Advances are made in theoretical econometrics by (i) changing the statistical
model, (ii) changing the amount of information used, and (iii) changing the
measure of performance. The specification and evaluation of the estimators
discussed in this chapter have involved, in various degrees, departures from
tradition in each of these areas.
646                                                           G. G. Judge and M. E. Bock


   Post data model evaluation procedures constitute, to a large degree, a rejection
of the concept of a true statistical model for which statistical theory provides a
basis for estimation and inference. In addition for the traditional regression
model, although the maximum likelihood-least squares rule is the only unbiased
estimator based on sufficient statistics it is plagued by the following problems: (i)
two decades ago Stein proved that in estimation under squared error loss there is
a better estimator, except in the case of one or two parameters, i.e. the estimator
is inadmissible; (ii) the least squares rule does not take into account the often
existing prior information or relationships among the coordinates; and (iii) when
near collinearity is present the least squares rule is unstable and small changes in
the observations result in very large changes in the estimates of the unknown
coefficients.
   Given these inferential pitfalls it seems natural to question the golden rule of
unbiasedness and look at biased estimators as a possibility for improving estima-
tor performance. We seek a rule which yields a “favorable” trade-off between
bias and variance and thus accomplishes everywhere in the parameter space an
overall reduction in mean square error. In the pursuit of this rule we have
considered a range of alternatives concerning variants of traditional sampling
theory estimators and the Stein and ridge families of estimators.
   Within a sampling theory framework the biased estimators that combine
sample information and non-sample information in the form of equality or
stochastic restrictions do not retain, under a squared error loss measure, the
minimax property. In addition, if we are uncertain of the prior information and
perform a preliminary test of the non-sample information, based on the data at
hand, the resulting estimators are inadmissible and are in fact inferior to the
maximum likelihood estimator over a large range of the specification error
parameter space. These pre-test estimators are commonly used in applied work,
although little or no basis exists for choosing the optimum level of the test.
   If non-sample information of an inequality form is used and the direction of the
inequality information is correct, the resulting biased estimator has risk less than
or equal to the conventional maximum likelihood estimator. Under the same
requirement, the Stein versions of the inequality restricted estimator also dominate
their conventional inequality, the James and Stein and the Stein positive-rule
counterparts. If the direction of the inequality information is incorrect, the
estimator is inferior to the maximum likelihood and Stein-rule risks over much of
the parameter space.
   The Stein-rule family of estimators which shrink the maximum likelihood
estimates toward zero or some predetermined coordinate, enjoy gooli properties
from both the sampling theory and Bayesian points of view. Since the operating
characteristics of the Stein rules depend on means and variances of the observa-
tions and the unknown coefficients, the estimators are robust relative to the
normality assumption. They also appear to be robust over a range of loss
Ch. 10: Biased Estimation                                                                                 641


functions. Although there are several known minimax admissible rules, none of
the rules analyzed herein dominate the positive Stein rule. The Stein family thus
provide rules that are simple, efficient, and robust.
   Ridge regression procedures which lead to biased estimators have been sug-
gested as one means of “improving the conditioning of the design matrix” and
coping with the multicollinearity problem. Strawderman (1978) and Judge and
Bock (1978) have demonstrated a link between the adaptive generalized ridge
estimator, the general minimax estimator, and the Stein estimators. To some this
might suggest that the ridge estimators should be used even in the absence of the
collinearity problems. However, as noted in Section 7, under conventional loss
functions the general minimax and ridge-type estimators are not the solution to
the multicollinearity problem and in general the mechanical application of
ridge-type procedures that seek some improvement in estimator performance
should be strongly questioned since ridge is not always better than its least
squares competitor.
   Finally, we should note that least squares and maximum likelihood estimation
of non-linear statistical models lead in general to biased estimators. Some of these
results are discussed elsewhere in this Handbook. Also, in general the Bayesian
criterion leads to biased estimators. The Bayesian basis for estimation and
inference is discussed in Sections 2.3, 3.4, and 4.4 of this chapter and in Chapter 2
of this Handbook by Zellner.


References
Akaike, H. (1974) “A New Look at the Statistical Identification           Model”, IEEE: Transactions on
  Automatic Control, 19, 716-723.
Amemiya, T. (1976) “Selection of Regressors”, Technical Report no. 225, Stanford University.
Baranchik, A. J. (1964) “Multiple Regression and Estimation of the Mean of a Multivariate              Normal
  Distribution”,   Technical Report No. 51, Department     of Statistics, Stanford University, California.
Baranchik,    A. J. (1973) “Inadmissibility   of Maximum      Likelihood    Estimators     in Some Multiple
  Regression Problems with Three or More Independent         Variables”, Annals of Statistics, 1, 312-321.
Belsley, D. A., E. Kuh. and R. E. Welsch (1980) Regression Diagnostics. New York: John Wiley &
   Sons.
Berger, J. (1976a) “Minimax Estimation of a Multivariate Normal Mean Unclear Arbitrary Quadratic
  Loss”, Journal of Multivariate Analysis, 6, 256-264.
Berger, J. (1976b) “Admissible    Minimax Estimation of a Multivariate       Normal Mean with Arbitrary
   Quadratic Loss”, Annals of Statistics, 4, 223-226.
Bock, M. E. (1975) “Minimax Estimators of the Mean of a Multivariate Normal Distribution”,              Annuls
  of Statistics, 3, 209-218.
Bock, M. E., G. G. Judge and T. A. Yancey (1980) “Inadmissibility        of the Inequality Estimator under
   Squared Error Loss”, Working Paper, University of Illinois.
Bock, M. E., T. A. Yancey and G. G. Judge (1973) “The Statistical Consequences            of Preliminary Test
   Estimators in Regression”, Journal of the American Statistical Association, 68, 109- 116.
Casella, G. ( 1977) “ Minimax Ridge Estimation”,    Unpublished     Ph.D. dissertation,    Purdue University.
Cox, D. R. (1961) “Test of Separate Families of Hypotheses”,        in: Proceedings of the Fourth Berkeley
   Symposium on Mathematical Statistics and Probability, Vol. 1. Berkeley: University of California
   Press.
648                                                                        G. G. Judge and M. E. Bock

COX,D. R. (1962) “Further Results on Tests of Separate Families of Hypothesis”, Journal of the Royal
  Statistical Society, Levis, B, 24, 406-424.
Dempster, A. P. (1973) “Alternatives to Least Squares in Multiple Regression”, in: Kabe and Gupta
  (eds.), Mtdtioariate Statistical Inference. Amsterdam: North-Holland Publishing, pp. 25-40.
Dempster, A. P., M. Schatzoff and N. Wermuth (1977) “A Simulation Study of Alternatives to
  Ordinary Least Squares”, Journal of the American Statistical Association, 72, 77-106.
Draper, N. R. and R. C. van Nostrand (1979) “Ridge Regression and James and Stein Estimation:
  Review and Comments”, Technometrics, 21, 45 l-466.
Efron, B. and C. Morris (1973) “Stein’s Estimation Rule and its Competitors-An        Empirical Bayes
  Approach”, Journal of the American Statistical Association, 68, 117- 130.
Giles, D. E. A. and A. C. Rayner (1979) “The Mean Squared Errors of the Maximum Likelihood and
  Natural-Conjugate Bayes Regression Estimators”, Journal of Econometrics, 11, 319-334.
Gunst, R. F. and R. L. Mason (1977) “Biased Estimation in Regression: An Evaluation Using Mean
  Square Error”, Technometrics, 72, 616-628.
Hill, R. C. (1979) “The Sampling Characteristics of General Minimax and Ridge Type Estimators
  Under Multicollinearity”, Research Paper, University of Georgia.
Hinde, R. (1978) “An Admissible Estimator Which Dominates the James-Stein Estimator”, Research
  Paper 167, School of Economic and Financial Studies, Macquoue University.
Hocking, R. R. (1976) “The Analysis and Selection of Variables in Linear Regression”, Biometrics, 32,
  l-49.
Hoer], A. E. and R. W. Kennard (1970) “Ridge Regression: Biased Estimation of Nonorthogonal
  Problems”, Technometrics, 12, 55-67.
James, W. and C. Stein (1961) “Estimation with Quadratic Loss”, in: Proceedings of the Fourth
  Berkeley Symposium Mathematical Statistics and Probability, vol. 1. Berkeley: University of Cali-
  fornia Press, pp. 36 I-379.
Judge, G. G. and M. E. Bock (1976) “A Comparison of Traditional and Stein Rule Estimators Under
  Weighted Squared Error Loss”, International Economic Review, 17, 234-240.
Judge, G. G. and M. E. Bock (1978) The Statistical Implications of Pre-Test and Stein-Rule Estimators
  in Econometrics. Amsterdam: North-Holland Publishing Co.
Judge, G. G. and T. A. Yancey (1978), “Inequality Restricted Estimation Under Squared Error Loss”,
  Working Paper Series, University of Georgia.
Judge, G. G., W. E. Griffiths, R. C. Hill and T. C. Lee (1980) The Theory and Practice oj Econometrics.
  New York: John Wiley & Sons.
King, N. (1972) “An Alternative for the Linear Regression Equation When the Predictor Variable is
  Uncontrolled and the Sample is Small”, Journal of the American Statistical Association, 67, 217-219.
King, N. (1974) “An Alternative for Multiple Regression when the Prediction Variables are Uncon-
  trolled and the Sample Size is not Too Small”, unpublished manuscript.
Learner, E. E. (1974) “Fales Models and Post Data Model Evaluation”, Journal of the American
  Statistical Association, 69, 122- 131.
Learner, E. E. (1978) Specification Searches. New York: John Wiley & Sons.
Learner, E. E. and G. Chamberlain (1976) “A Bayesian Interpretation of Pre-Testing”, Journal of the
  Royal Statistical Society, Ser. B, 38, 89-94.
Mallows, C. L. (1973) “Some Comments on Cp”, Technometrics, 15, 661-676.
Marquardt, D. W. and R. D. Snee (1975) “Rtdge Regression in Practice”, American Statistician, 29,
  3-19.
Mayer, L. S. and T. A. Willke (1973) “On Biased Estimations in Linear Models”, Technometrics,       15,
  497-508.
Rothenberg, T. J. (1973) Efficient Estimation with A Priori Information. New Haven: Yale University
   Press.
Sclove, S. L., C. Morris and R. Radhakrishnan (1972) “Non Optimality of Pre-Test Estimators for the
   Multinormal Mean”, Annals of Mathematical Statistics, 43, 1481- 1490.
Silvey, S. D. (1969) “Multicollinearity and Imprecise Estimation”, Journal of the Royal Statistical
   Society, B, 3 1, 539-552.
Smith, G. and F. Campbell (1980) “A Critique of Some Ridge Regression Methods,” Journal of the
  American   Statistical Association,   75, 74-103.
Stein, C. (1955) “Inadmissibility       of the Usual Estimator for the Mean of a Multivariate Normal
Ch. IO: Binsed Estimation                                                                                        649

   Distribution”,   in: Proceedings of the Third Berkeley Svmposium,             vol. 1. Berkeley: University      of
   California Press, pp. 197-206.
Stein, C. (1962) “Confidence        Sets for the Mean of the Multivariate Distribution”,        Journnl o/the Royal
   Stutisticul Sociefy, Series B, 24, 265-296.
Stein, C. (1966) “An Approach to Recovery of Interblock Information                in Incomplete Block Designs”,
   in: F. N. David (ed.), Reseurch Papers in Statistics, Festschrift for J. Neyman. New York: John
   Wiley & Sons, pp. 351-366.
Strawderman,      W. (1971) “Proper        Bayes Minimax Estimators         of the Multivariate     Normal Mean”,
   Annuls of Muthemrrticul Statistics, 42, 385-388.
Strawderman,      W. E. (1978) “Minimax Adaptive Generalized Ridge Regression Estimators”, Journul of
   the Americun Stcltisticul Association, 73, 623-627.
Swamv. P. A. V. B. and J. S. Mehta (1977) “Robustness              of Theil’s Mixed Regression Estimator”.        The
   Can>dian Journul of Statistics, 5, 93-109.
Theil, H. (1963) “On the Use of Incomplete Prior Information             in Regression Analysis”, Journal of the
   American Statistical Association, 58, 401-414.
Theil, H. and A. Goldberger (1961) “Pure and Mixed Statistical Estimation in Economics”,                     Interna-
   tionul Economic Review, 2,65-78.
Thisted, R. (1977) “Ridge Regression, Minimax Estimation and Empirical Bayes Methods”, Unpub-
   lished Ph.D. dissertation,     Stanford University.
Thisted, R. (1978a) “Multicollinearity,        Information,   and Ridge Regression”, Technical Report no. 66.
   Department     of Statistics, University of Chicago.
Thisted, R. (1978b)“On Generalized              Ridge Regressions”,    Technical Report no. 57, University of
    Chicago.
Thisted, R. and C. Morris (1980) “Theoretical               Results for Adaptive Ordinary         Ridge Regression
   Estimators”,    University of Chicago Technical Report no. 94.
Toro-Vizcorrondo,      C. and T. D. Wallace (1968) “A Test of the Mean Square Error Criterion for
    Restrictions in Linear Regression”, Journal of the American Statistical Association, 63, 558-572.
Vinod, H. D. (1978) “A Survey of Ridge Regression and Related Techniques for Improvements                        Over
   Ordinary Least Squares”, Review of Economics und Sfutistics, 60, 12 I- 13 1.
Zellner, A. (1980) “On Bayesian Regression Analysis with g-Prior Distributions”,                H. G. B. Alexander
    Research Foundation       Paper, University of Chicago.
Zellner. A. and W. Vandaele (1975) “Bayes-Stein             Estimators for k-Means”, in: S. E. Fienberg and A.
   Zellner (eds.), Studies in Buvesian Economerrics and Statistics. Amsterdam:            North-Holland     Publish-
   ing Co., pp. 627-653.



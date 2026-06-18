---
normalized_id: shared-pdf-reference-ch2probrev
exam_code: SHARED
material_scope: ch2probrev.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Ch2probrev.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-ch2probrev

          Introduction to Financial Econometrics
        Chapter 2 Review of Random Variables and
                 Probability Distributions
                               Eric Zivot
            Department of Economics, University of Washington
                                  January 18, 2000
                           This version: February 21, 2001


1       Random Variables
We start with a basic de&nition of a random variable

 De&nition 1 A Random variable X is a variable that can take on a given set of
    values, called the sample space and denoted SX , where the likelihood of the values
    in SX is determined by X s probability distribution function (pdf).

    For example, consider the price of Microsoft stock next month. Since the price
of Microsoft stock next month is not known with certainty today, we can consider
it a random variable. The price next month must be positive and realistically it
can t get too large. Therefore the sample space is the set of positive real numbers
bounded above by some large number. It is an open question as to what is the
best characterization of the probability distribution of stock prices. The log-normal
distribution is one possibility1 .
    As another example, consider a one month investment in Microsoft stock. That
is, we buy 1 share of Microsoft stock today and plan to sell it next month. Then
the return on this investment is a random variable since we do not know its value
today with certainty. In contrast to prices, returns can be positive or negative and are
bounded from below by -100%. The normal distribution is often a good approximation
to the distribution of simple monthly returns and is a better approximation to the
distribution of continuously compounded monthly returns.
    As a &nal example, consider a variable X de&ned to be equal to one if the monthly
price change on Microsoft stock is positive and is equal to zero if the price change
    1
    If P is a positive random variable such that ln P is normally distributed the P has a log-normal
distribution. We will discuss this distribution is later chapters.

                                                 1
is zero or negative. Here the sample space is trivially the set {0, 1}. If it is equally
likely that the monthly price change is positive or negative (including zero) then the
probability that X = 1 or X = 0 is 0.5.

1.1     Discrete Random Variables
Consider a random variable generically denoted X and its set of possible values or
sample space denoted SX .

De&nition 2 A discrete random variable X is one that can take on a &nite number
of n diﬀerent values x1 , x2 , . . . , xn or, at most, an in&nite number of diﬀerent values
x1 , x2 , . . . .

De&nition 3 The pdf of a discrete random variable, denoted p(x), is a function such
that p(x) = Pr(X = x). TheP pdf must satisfy (i) p(x) ≥ 0 for all x ∈ SX ; (ii) p(x) = 0
for all x ∈
          / SX ; and (iii) x∈SX p(x) = 1.

    As an example, let X denote the annual return on Microsoft stock over the next
year. We might hypothesize that the annual return will be in! uenced by the general
state of the economy. Consider &ve possible states of the economy: depression, reces-
sion, normal, mild boom and major boom. A stock analyst might forecast diﬀerent
values of the return for each possible state. Hence X is a discrete random variable
that can take on &ve diﬀerent values. The following table describes such a probability
distribution of the return.

                                   Table 1
             State of Economy SX = Sample Space p(x) = Pr(X = x)
                Depression          -0.30             0.05
                 Recession           0.0              0.20
                  Normal            0.10              0.50
                Mild Boom           0.20              0.20
               Major Boom           0.50              0.05

     A graphical representation of the probability distribution is presented in Figure
1.

1.1.1    The Bernoulli Distribution
Let X = 1 if the price next month of Microsoft stock goes up and X = 0 if the price
goes down (assuming it cannot stay the same). Then X is clearly a discrete random
variable with sample space SX = {0, 1}. If the probability of the stock going up or
down is the same then p(0) = p(1) = 1/2 and p(0) + p(1) = 1.


                                            2
    The probability distribution described above can be given an exact mathematical
representation known as the Bernoulli distribution. Consider two mutually exclusive
events generically called success and failure . For example, a success could be a
stock price going up or a coin landing heads and a failure could be a stock price going
down or a coin landing tails. In general, let X = 1 if success occurs and let X = 0
if failure occurs. Let Pr(X = 1) = π, where 0 < π < 1, denote the probability of
success. Clearly, Pr(X = 0) = 1 − π is the probability of failure. A mathematical
model for this set-up is
                     p(x) = Pr(X = x) = π x (1 − π)1−x , x = 0, 1.
When x = 0, p(0) = π 0 (1 − π)1−0 = 1 − π and when x = 1, p(1) = π 1 (1 − π)1−1 = π.
This distribution is presented graphically in Figure 2.

1.2     Continuous Random Variables
De&nition 4 A continuous random variable X is one that can take on any real value.
De&nition 5 The probability density function (pdf) of a continuous random variable
X is a nonnegative function p, de&ned on the real line, such that for any interval A
                                           Z
                             Pr(X ∈ A) =      p(x)dx.
                                               A

That is, Pr(X ∈ A) is the area under the R∞probability curve over the interval A”. The
pdf p must satisfy (i) p(x) ≥ 0; and (ii) −∞ p(x)dx = 1.
    A typical bell-shaped pdf is displayed in Figure 3. In that &gure the total area
under the curve must be 1, and the value of Pr(a ≤ X ≤ b) is equal to the area of
the shaded region. For a continuous random variable, p(x) 6= Pr(X = x) but rather
gives the height of the probability curve at x. In fact, Pr(X = x) = 0 for all values of
x. That is, probabilities are not de&ned over single points; they are only de&ned over
intervals.

1.2.1   The Uniform Distribution on an Interval
Let X denote the annual return on Microsoft stock and let a and b be two real
numbers such that a < b. Suppose that the annual return on Microsoft stock can
take on any value between a and b. That is, the sample space is restricted to the
interval SX = {x ∈ R : a ≤ x ≤ b}. Further suppose that the probability that X will
belong to any subinterval of SX is proportional to the length of the interval. In this
case, we say that X is uniformly distributed on the interval [a, b]. The p.d.f. of X has
the very simple mathematical form
                                      1
                                     b−a    for a ≤ x ≤ b
                            p(x) =
                                      0       otherwise

                                           3
and is presented graphically in Figure 4. Notice that the area under the curve over
the interval [a, b] integrates to 1 since
             Z b                   Z b
                 1        1                      1           1
                    dx =                 dx =       [x]ba =     [b − a] = 1.
              a b−a      b−a        a           b−a         b−a
   Suppose, for example, a = −1 and b = 1 so that b − a = 2. Consider computing
the probability that the return will be between -50% and 50%.We solve
                                 Z 0.5
                                       1      1          1                 1
       Pr(−50% < X < 50%) =              dx = [x]0.5
                                                  −0.5 =   [0.5 − (−0.5)] = .
                                  −0.5 2      2          2                 2

Next, consider computing the probability that the return will fall in the interval [0, δ]
where δ is some small number less than b = 1 :
                                         Z
                                       1 δ         1       1
                     Pr(0 ≤ X ≤ δ) =        dx = [x]δ0 = δ.
                                       2 0         2       2

As δ → 0, Pr(0 ≤ X ≤ δ) → Pr(X = 0). Using the above result we see that
                                                        1
                    lim Pr(0 ≤ X ≤ δ) = Pr(X = 0) = lim δ = 0.
                    δ→0                             δ→0 2

Hence, probabilities are de&ned on intervals but not at distinct points. As a result,
for a continuous random variable X we have

        Pr(a ≤ X ≤ b) = Pr(a ≤ X < b) = Pr(a < X ≤ b) = Pr(a < X < b).

1.2.2   The Standard Normal Distribution
The normal or Gaussian distribution is perhaps the most famous and most useful
continuous distribution in all of statistics. The shape of the normal distribution
is the familiar bell curve . As we shall see, it is also well suited to describe the
probabilistic behavior of stock returns.
    If a random variable X follows a standard normal distribution then we often write
X ∼ N (0, 1) as short-hand notation. This distribution is centered at zero and has
in! ection points at ±1. The pdf of a normal random variable is given by
                                 1     1 2
                         p(x) = √ · e− 2 x − ∞ ≤ x ≤ ∞.
                                 2π
It can be shown via the change of variables formula in calculus that the area under
the standard normal curve is one:
                             Z ∞
                                   1       1 2
                                  √ · e− 2 x dx = 1.
                              −∞    2π

                                            4
The standard normal distribution is graphed in Figure 5. Notice that the distribution
is symmetric about zero; i.e., the distribution has exactly the same form to the left
and right of zero.
    The normal distribution has the annoying feature that the area under the normal
curve cannot be evaluated analytically. That is
                                           Z b
                                                 1      1 2
                        Pr(a < X < b) =        √ · e− 2 x dx
                                             a   2π
does not have a closed form solution. The above integral must be computed by
numerical approximation. Areas under the normal curve, in one form or another, are
given in tables in almost every introductory statistics book and standard statistical
software can be used to &nd these areas. Some useful results from the normal tables
are
                            Pr(−1 < X < 1) ≈ 0.67,
                            Pr(−2 < X < 2) ≈ 0.95,
                            Pr(−3 < X < 3) ≈ 0.99.

Finding Areas Under the Normal Curve In the back of most introductory
statistics textbooks is a table giving information about areas under the standard
normal curve. Most spreadsheet and statistical software packages have functions for
&nding areas under the normal curve. Let X denote a standard normal random
variable. Some tables and functions give Pr(0 ≤ X < z) for various values of z > 0,
some give Pr(X ≥ z) and some give Pr(X ≤ z). Given that the total area under
the normal curve is one and the distribution is symmetric about zero the following
results hold:
   • Pr(X ≤ z) = 1 − Pr(X ≥ z) and Pr(X ≥ z) = 1 − Pr(X ≤ z)
   • Pr(X ≥ z) = Pr(X ≤ −z)
   • Pr(X ≥ 0) = Pr(X ≤ 0) = 0.5
   The following examples show how to compute various probabilities.
Example 6 Find Pr(X ≥ 2). We know that Pr(X ≥ 2) = Pr(X ≥ 0) − Pr(0 ≤ X ≤
2) = 0.5 − Pr(0 ≤ X ≤ 2). From the normal tables we have Pr(0 ≤ X ≤ 2) = 0.4772
and so Pr(X ≥ 2) = 0.5 − 0.4772 = 0.0228.
Example 7 Find Pr(X ≤ 2). We know that Pr(X ≤ 2) = 1 − Pr(X ≥ 2) and using
the result from the previous example we have Pr(X ≤ 2) = 1 − 0.0228 = 0.9772.
Example 8 Find Pr(−1 ≤ X ≤ 2). First, note that Pr(−1 ≤ X ≤ 2) = Pr(−1 ≤
X ≤ 0) + Pr(0 ≤ X ≤ 2). Using symmetry we have that Pr(−1 ≤ X ≤ 0) = Pr(0 ≤
X ≤ 1) = 0.3413 from the normal tables. Using the result from the &rst example we
get Pr(−1 ≤ X ≤ 2) = 0.3413 + 0.4772 = 0.8185.

                                         5
1.3    The Cumulative Distribution Function
De&nition 9 The cumulative distribution function (cdf), F, of a random variable X
(discrete or continuous) is simply the probability that X ≤ x :

                         F (x) = Pr(X ≤ x), − ∞ ≤ x ≤ ∞.

   The cdf has the following properties:

   • If x1 < x2 then F (x1 ) ≤ F (x2 )
   • F (−∞) = 0 and F (∞) = 1
   • Pr(X > x) = 1 − F (x)
   • Pr(x1 < X ≤ x2 ) = F (x2 ) − F (x1 )

    The cdf for the discrete distribution of Microsoft is given in Figure 6. Notice that
the cdf in this case is a discontinuous step function.
    The cdf for the uniform distribution over [a, b] can be determined analytically
since                                        Z x
                                         1               1          x−a
                F (x) = Pr(X < x) =              dt =       [t]xa =     .
                                       b−a a          b−a           b−a
Notice that for this example, we can determine the pdf of X directly from the cdf via
                                              d          1
                          p(x) = F 0 (x) =      F (x) =     .
                                             dx         b−a
    The cdf of the standard normal distribution is used so often in statistics that it
is given its own special symbol:
                                        Z x
                                              1          1
                    Φ(x) = P (X ≤ x) =       √ exp(− z 2 )dz,
                                         −∞    2π        2
where X is a standard normal random variable. The cdf Φ(x), however, does not
have an anaytic representation like the cdf of the uniform distribution and must be
approximated using numerical techniques.

1.4    Quantiles of the Distribution of a Random Variable
Consider a random variable X with CDF FX (x) = Pr(X ≤ x). The 100 · α% quantile
of the distribution for X is the value qα that satis&es

                              FX (qα ) = Pr(X ≤ qα ) = α

For example, the 5% quantile of X, q.05 , satis&es

                            FX (q.05 ) = Pr(X ≤ q.05 ) = .05.

                                             6
   The median of the distribution is 50% quantile. That is, the median satis&es

                       FX (median) = Pr(X ≤ median) = .5

The 5% quantile and the median are illustrated in Figure xxx using the CDF FX as
well as the pdf fX .
   If FX is invertible then qa may be determined as

                                    qa = FX−1 (α)

where FX−1 denotes the inverse function of FX . Hence, the 5% quantile and the median
may be determined as

                                  q.05 = FX−1 (.05)
                               median = FX−1 (.5)

Example 10 Let X˜U [a, b] where b > a. The cdf of X is given by
                                                x−a
                    α = Pr(X ≤ x) = FX (x) =        , a≤x≤b
                                                b−a
Given α, solving for x gives the inverse cdf

                      x = FX−1 (α) = α(b − a) + a, 0 ≤ α ≤ 1

Using the inverse cdf, the 5% quantile and median, for example, are given by

                   q.05 = FX−1 (.05) = .05(b − a) + a = .05b + .95a
                median = FX−1 (.5) = .5(b − a) + a = .5(a + b)

If a = 0 and b = 1 then q.05 = 0.05 and median = 0.5.

Example 11 Let X˜N(0, 1). The quantiles of the standard normal are determined
from
                              qα = Φ−1 (α)
where Φ−1 denotes the inverse of the cdf Φ. This inverse function must be approxi-
mated numerically. Using the numerical approximation to the inverse function, the
5% quantile and median are given by

                             q.05 = Φ−1 (.05) = −1.645
                          median = Φ−1 (.5) = 0




                                          7
1.5     Shape Characteristics of Probability Distributions
Very often we would like to know certain shape characteristics of a probability distri-
bution. For example, we might want to know where the distribution is centered and
how spread out the distribution is about the central value. We might want to know
if the distribution is symmetric about the center. For stock returns we might want to
know about the likelihood of observing extreme values for returns. This means that
we would like to know about the amount of probability in the extreme tails of the
distribution. In this section we discuss four shape characteristics of a pdf:

   • expected value or mean - center of mass of a distribution

   • variance and standard deviation - spread about the mean

   • skewness - measure of symmetry about the mean

   • kurtosis - measure of tail thickness

1.5.1   Expected Value
The expected value of a random variable X, denoted E[X] or µX , measures the center
of mass of the pdf For a discrete random variable X with sample space SX
                                        X
                          µX = E[X] =       x · Pr(X = x).
                                         x∈SX


Hence, E[X] is a probability weighted average of the possible values of X.

Example 12 Using the discrete distribution for the return on Microsoft stock in
Table 1, the expected return is

E[X] = (−0.3) · (0.05) + (0.0) · (0.20) + (0.1) · (0.5) + (0.2) · (0.2) + (0.5) · (0.05)
     = 0.10.

Example 13 Let X be a Bernoulli random variable with success probability π. Then

                            E[X] = 0 · (1 − π) + 1 · π = π

That is, the expected value of a Bernoulli random variable is its probability of success.

   For a continuous random variable X with pdf p(x)
                                       Z ∞
                         µX = E[X] =       x · p(x)dx.
                                               −∞




                                           8
Example 14 Suppose X has a uniform distribution over the interval [a, b]. Then
                                 Z b             ·      ¸b
                             1                1     1 2
                 E[X] =              xdx =           x
                           b−a a            b−a 2        a
                               1    £ 2     ¤
                       =             b − a2
                           2(b − a)
                           (b − a)(b + a)    b+a
                       =                  =       .
                              2(b − a)         2
Example 15 Suppose X has a standard normal distribution. Then it can be shown
that                        Z ∞
                                      1   1 2
                    E[X] =       x · √ e− 2 x dx = 0.
                              −∞      2π

1.5.2   Expectation of a Function of a Random Variable
The other shape characteristics of distributions are based on expectations of certain
functions of a random variable. Let g(X) denote some function of the random variable
X. If X is a discrete random variable with sample space SX then
                                      X
                          E[g(X)] =       g(x) · Pr(X = x),
                                     x∈SX

and if X is a continuous random variable with pdf p then
                                     Z ∞
                           E[g(X)] =      g(x) · p(x)dx.
                                         −∞


1.5.3   Variance and Standard Deviation
The variance of a random variable X, denoted var(X) or σ 2X , measures the spread of
the distribution about the origin using the function g(X) = (X − µX )2 . For a discrete
random variable X with sample space SX
                                               X
            σ 2X = var(X) = E[(X − µX )2 ] =       (x − µX )2 · Pr(X = x).
                                                x∈SX

Notice that the variance of a random variable is always nonnegative.

Example 16 Using the discrete distribution for the return on Microsoft stock in
Table 1 and the result that µX = 0.1, we have

    var(X) = (−0.3 − 0.1)2 · (0.05) + (0.0 − 0.1)2 · (0.20) + (0.1 − 0.1)2 · (0.5)
             +(0.2 − 0.1)2 · (0.2) + (0.5 − 0.1)2 · (0.05)
           = 0.020.

                                            9
Example 17 Let X be a Bernoulli random variable with success probability π. Given
that µX = π it follows that
                     var(X) =     (0 − π)2 · (1 − π) + (1 − π)2 · π
                            =     π2 (1 − π) + (1 − π 2 )π
                            =     π(1 − π) [π + (1 − π)]
                            =     π(1 − π).

    The standard deviation of X, denoted SD(X) or σ X , is just the square root of
the variance. Notice that SD(X) is in the same units of measurement as X whereas
var(X) is in squared units of measurement. For bell-shaped or normal looking
distributions the SD measures the typical size of a deviation from the mean value.
                                                                             √
Example 18 For the distribution in Table 1, we have SD(X) = σ X = 0.020 =
0.141. Given that the distribution is fairly bell-shaped we can say that typical values
deviate from the mean value of 10% by about 14.1%.

   For a continuous random variable X with pdf p(x)
                                            Z ∞
               2                       2
             σ X = var(X) = E[(X − µX ) ] =     (x − µX )2 · p(x)dx.
                                                  −∞

Example 19 Suppose X has a standard normal distribution so that µX = 0. Then
it can be shown that
                               Z ∞
                                         1   1 2
                     var (X) =     x2 · √ e− 2 x dx = 1,
                                −∞       2π
and so SD(X) = 1.

1.5.4   The General Normal Distribution
Recall, if X has a standard normal distribution then E[X] = 0, var(X) = 1. If X
has general normal distribution, denoted X ∼ N (µX , σ 2X ), then its pdf is given by
                             1      − 12 (x−µX )2
                    p(x) = p       e 2σ
                                        X         , − ∞ ≤ x ≤ ∞.
                            2πσ 2X
It can be shown that E[X] = µX and var(X) = σ 2X , although showing these results
analytically is a bit of work and is good calculus practice. As with the standard normal
distribution, areas under the general normal curve cannot be computed analytically.
Using numerical approximations, it can be shown that
                      Pr(µX − σ X < X < µX + σ X ) ≈ 0.67,
                     Pr(µX − 2σ X < X < µX + 2σ X ) ≈ 0.95,
                     Pr(µX − 3σ X < X < µX + 3σ X ) ≈ 0.99.

                                          10
Hence, for a general normal random variable about 95% of the time we expect to see
values within ± 2 standard deviations from its mean. Observations more than three
standard deviations from the mean are very unlikely.

                 (insert &gures showing diﬀerent normal distributions)

1.5.5   The Log-Normal distribution
A random variable Y is said to be log-normally distributed with parameters µ and
σ 2 if
                                ln Y ~ N (µ, σ 2 ).
Equivalently, let X ~ N(µ, σ 2 ) and de&ne

                                          Y = eX .

Then Y is log-normally distributed and is denoted Y ~ ln N (µ, σ 2 ).

                     (insert &gure showing lognormal distribution).

   It can be shown that
                                                     2
                            µY     = E[Y ] = eµ+σ /2
                                                         2   2
                            σ 2Y   = var(Y ) = e2µ+σ (eσ − 1)

Example 20 Let rt = ln(Pt /Pt−1 ) denote the continuously compounded monthly re-
turn on an asset and assume that rt ~ N (µ, σ 2 ). Let Rt = Pt −P
                                                                Pt
                                                                   t−1
                                                                       denote the simple
monthly return. The relationship between rt and Rt is given by rt = ln(1 + Rt ) and
1 +Rt = ert . Since rt is normally distributed 1+Rt is log-normally distributed. Notice
that the distribution of 1 + Rt is only de&ned for positive values of 1 + Rt . This is
appropriate since the smallest value that Rt can take on is −1.

1.5.6   Using standard deviation as a measure of risk
Consider the following investment problem. We can invest in two non-dividend paying
stocks A and B over the next month. Let RA denote monthly return on stock A and
RB denote the monthly return on stock B. These returns are to be treated as random
variables since the returns will not be realized until the end of the month. We assume
that RA ˜ N (µA , σ 2A ) and RB ˜ N (µB , σ 2B ). Hence, µi gives the expected return, E[Ri ],
on asset i and σ i gives the typical size of the deviation of the return on asset i from its
expected value. Figure xxx shows the pdfs for the two returns. Notice that µA > µB
but also that σ A > σ B . The return we expect on asset A is bigger than the return
we expect on asset B but the variability of the return on asset A is also greater than
the variability on asset B. The high return variability of asset A re! ects the risk
associated with investing in asset A. In contrast, if we invest in asset B we get a

                                             11
lower expected return but we also get less return variability or risk. This example
illustrates the fundamental no free lunch principle of economics and &nance: you
can t get something for nothing. In general, to get a higher return you must take on
extra risk.

1.5.7   Skewness
The skewness of a random variable X, denoted skew(X), measures the symmetry of
a distribution about its mean value using the function g(X) = (X − µX )3 /σ 3X , where
σ 3X is just SD(X) raised to the third power. For a discrete random variable X with
sample space SX
                                          P                 3
                         E[(X − µX )3 ]      x∈SX (x − µX ) · Pr(X = x)
              skew(X) =                 =                               .
                               σ 3X                     σ 3X

    If X has a symmetric distribution then skew(X) = 0 since positive and negative
values in the formula for skewness cancel out. If skew(X) > 0 then the distribution
of X has a long right tail and if skew(X) < 0 the distribution of X has a long
left tail . These cases are illustrated in Figure 6.

Example 21 Using the discrete distribution for the return on Microsoft stock in
Table 1, the results that µX = 0.1 and σ X = 0.141, we have

   skew(X) = [(−0.3 − 0.1)3 · (0.05) + (0.0 − 0.1)3 · (0.20) + (0.1 − 0.1)3 · (0.5)
             +(0.2 − 0.1)3 · (0.2) + (0.5 − 0.1)3 · (0.05)]/(0.141)3
           = 0.0

   For a continuous random variable X with pdf p(x)
                                           R∞
                          E[(X − µX )3 ]    −∞
                                               (x − µX )3 · p(x)dx
               skew(X) =                 =                         .
                               σ 3X                 σ 3X

Example 22 Suppose X has a general normal distribution with mean µX and vari-
ance σ 2X . Then it can be shown that
                            Z ∞
                                (x − µX )3     1      − 12 (x−µX )2
               skew(X) =              3
                                           · √      e  2σ
                                                          X         dx = 0.
                             −∞     σ X       2πσ 2


This result is expected since the normal distribution is symmetric about it s mean
value µX .




                                         12
1.5.8   Kurtosis
The kurtosis of a random variable X, denoted kurt(X), measures the thickness in the
tails of a distribution and is based on g(X) = (X − µX )4 /σ 4X . For a discrete random
variable X with sample space SX
                                           P                 2
                          E[(X − µX )4 ]     x∈SX (x − µX ) · Pr(X = x)
               kurt(X) =                 =                                 ,
                                σ 4X                    σ 4X
where σ 4X is just SD(X) raised to the fourth power. Since kurtosis is based on
deviations from the mean raised to the fourth power, large deviations get lots of
weight. Hence, distributions with large kurtosis values are ones where there is the
possibility of extreme values. In contrast, if the kurtosis is small then most of the
observations are tightly clustered around the mean and there is very little probability
of observing extreme values.

Example 23 Using the discrete distribution for the return on Microsoft stock in
Table 1, the results that µX = 0.1 and σ X = 0.141, we have
   kurt(X) = [(−0.3 − 0.1)4 · (0.05) + (0.0 − 0.1)4 · (0.20) + (0.1 − 0.1)4 · (0.5)
             +(0.2 − 0.1)4 · (0.2) + (0.5 − 0.1)4 · (0.05)]/(0.141)4
           = 6.5
   For a continuous random variable X with pdf p(x)
                                           R∞
                          E[(X − µX )4 ]    −∞
                                               (x − µX )4 · p(x)dx
               kurt(X) =                 =                         .
                               σ 4X                 σ 4X
Example 24 Suppose X has a general normal distribution mean µX and variance
σ 2X . Then it can be shown that
                            Z ∞
                                 (x − µX )4    1       1        2
                 kurt(X) =            4
                                            ·p      e− 2 (x−µX ) dx = 3.
                             −∞     σX            2
                                              2πσ X
Hence a kurtosis of 3 is a benchmark value for tail thickness of bell-shaped distribu-
tions. If a distribution has a kurtosis greater than 3 then the distribution has thicker
tails than the normal distribution and if a distribution has kurtosis less than 3 then
the distribution has thinner tails than the normal.
    Sometimes the kurtosis of a random variable is described relative to the kurtosis
of a normal random variable. This relative value of kurtosis is referred to as excess
kurtosis and is de&ned as
                           excess kurt(X) = kurt(X) − 3
If excess the excess kurtosis of a random variable is equal to zero then the random
variable has the same kurtosis as a normal random variable. If excess kurtosis is
greater than zero, then kurtosis is larger than that for a normal; if excess kurtosis is
less than zero, then kurtosis is less than that for a normal.

                                          13
1.6    Linear Functions of a Random Variable
Let X be a random variable either discrete or continuous with E[X] = µX , var(X) =
σ 2X and let a and b be known constants. De&ne a new random variable Y via the
linear function of X
                               Y = g(X) = aX + b.
Then the following results hold:
   • E[Y ] = aE[X] + b or µY = aµX + b.
   • var(Y ) = a2 var(X) or σ 2Y = a2 σ 2X .
   The &rst result shows that expectation is a linear operation. That is,
                                E[aX + b] = aE[X] + b.
In the second result notice that adding a constant to X does not aﬀect its variance
and that the eﬀect of multiplying X by the constant a increases the variance of X by
the square of a. These results will be used often enough that it useful to go through
the derivations, at least for the case that X is a discrete random variable.
    Proof. Consider the &rst result. By the de&nition of E[g(X)] with g(X) = b+aX
we have
                              X
                  E[Y ] =         (ax + b) · Pr(X = x)
                             x∈SX
                                X                         X
                         = a          x · Pr(X = x) + b          Pr(X = x)
                               x∈SX                       x∈SX
                         = aE[X] + b · 1
                         = aµX + b
                         = µY .
Next consider the second result. Since µY = aµX + b we have
               var(Y ) =     E[(Y − µy )2 ]
                       =     E[(aX + b − (aµX + b))2 ]
                       =     E[(a(X − µX ) + (b − b))2 ]
                       =     E[a2 (X − µX )2 ]
                       =     a2 E[(X − µX )2 ] (by the linearity of E[·])
                       =     a2 var(X)
                             a2 σ 2X .
Notice that our proof of the second result works for discrete and continuous random
variables.
    A normal random variable has the special property that a linear function of it is
also a normal random variable. The following proposition establishes the result.

                                               14
Proposition 25 Let X ∼ N (µX , σ 2X ) and let a and b be constants. Let Y = aX + b.
Then Y ∼ N(aµX + b, a2 σ 2X ).

    The above property is special to the normal distribution and may or may not hold
for a random variable with a distribution that is not normal.

1.6.1   Standardizing a Random Variable
Let X be a random variable with E[X] = µX and var(X) = σ 2X . De&ne a new random
variable Z as
                                X − µX     1      µ
                           Z=           =    X− X
                                  σX      σX      σX
which is a linear function aX + b where a = σ1X and b = − µσX
                                                            X
                                                              . This transformation is
called standardizing the random variable X since, using the results of the previous
section,
                             1       µ     1         µ
                     E[Z] =    E[X] − X =      µX − X = 0
                            σX       σX   σX         σX
                            µ ¶2             2
                               1          σ
                   var(Z) =       var(X) = X    = 1.
                              σX          σ 2X
Hence, standardization creates a new random variable with mean zero and variance
1. In addition, if X is normally distributed then so is Z.

Example 26 Let X ∼ N(2, 4) and suppose we want to &nd Pr(X > 5). Since X is
not standard normal we can t use the standard normal tables to evaluate Pr(X > 5)
directly. We solve the problem by standardizing X as follows:
                                          µ                ¶
                                            X −2      5−2
                       Pr (X > 5) = Pr        √ > √
                                                4        4
                                          µ         ¶
                                                  3
                                    = Pr Z >
                                                  2
                                                       ¡      ¢
where Z ∼ N (0, 1) is the standardized value of X. Pr Z > 32 can be found directly
from the standard normal tables.


    Standardizing a random variable is often done in the construction of test statistics.
For example, the so-called t-statistic or t-ratio used for testing simple hypotheses
on coeﬃcients in the linear regression model is constructed by the above standard-
ization process.
    A non-standard random variable X with mean µX and variance σ 2X can be created
from a standard random variable via the linear transformation

                                   X = µX + σ X Z.

                                           15
This result is useful for modeling purposes. For example, in Chapter 3 we will consider
the Constant Expected Return (CER) model of asset returns. Let R denote the
monthly continuously compounded return on an asset and let µ = E[R] and σ 2 =
var(R). A simpli&ed version of the CER model is

                                    R =µ+σ·ε

where ε is a random variable with mean zero and variance 1. The random variable ε
is often interpreted as representing the random news arriving in a given month that
makes the observed return diﬀer from the expected value µ. The fact that ε has mean
zero means that new, on average, is neutral. The value of σ represents the typical
size of a news shock.
    (Stuﬀ to add: General functions of a random variable and the change of variables
formula. Example with the log-normal distribution)

1.7    Value at Risk
To illustrate the concept of Value-at-Risk (VaR), consider an investment of $10,000
in Microsoft stock over the next month. Let R denote the monthly simple return on
Microsoft stock and assume that R ~N(0.05, (0.10)2 ). That is, E[R] = µ = 0.05 and
var(R) = σ 2 = (0.10)2 . Let W0 denote the investment value at the beginning of the
month and W1 denote the investment value at the end of the month. In this example,
W0 = $10, 000. Consider the following questions:

   • What is the probability distribution of end of month wealth, W1 ?

   • What is the probability that end of month wealth is less than $9, 000 and what
     must the return on Microsoft be for this to happen?

   • What is the monthly VaR on the $10, 000 investment in Microsoft stock with
     5% probability? That is, what is the loss that would occur if the return on
     Microsoft stock is equal to its 5% quantile, q.05 ?

   To answer the &rst question, note that end of month wealth W1 is related to initial
wealth W0 and the return on Microsoft stock R via the linear function

                          W1 = W0 (1 + R) = W0 + W0 R
                             = $10, 000 + $10, 000 · R.

Using the properties of linear functions of a random variable we have

                   E[W1 ] = W0 + W0 E[R]
                          = $10, 000 + $10, 000(0.05) = $10, 500


                                          16
and
                       var(W1 ) = (W0 )2 var(R)
                                = ($10, 000)2 (0.10)2 ,
                       SD(W1 ) = ($10, 000)(0.10) = $1, 000.
Further, since R is assumed to be normally distributed we have
                             W1 ~ N ($10, 500, ($1, 000)2 )
      To answer the second question, we use the above normal distribution for W1 to
get
                              Pr(W1 < $9, 000) = 0.067
To &nd the return that produces end of month wealth of $9, 000 or a loss of $10, 000 −
$9, 000 = $1, 000 we solve
                                  $9, 000 − $10, 000
                           R∗ =                      = −0.10.
                                       $10, 000
In other words, if the monthly return on Microsoft is −10% or less then end of
month wealth will be $9, 000 or less. Notice that −0.10 is the 6.7% quantile of the
distribution of R :
                             Pr(R < −0.10) = 0.067
   The third question can be answered in two equivalent ways. First, use R ~N (0.05, (0.10)2 )
and solve for the the 5% quantile of Microsoft Stock:
                                 R               R
                         Pr(R < q.05 ) = 0.05 ⇒ q.05 = −0.114.
That is, with 5% probability the return on Microsoft stock is −11.4% or less. Now,
if the return on Microsoft stock is −11.4% the loss in investment value is $10, 000 ·
(0.114) = $1, 144. Hence, $1, 144 is the 5% VaR over the next month on the $10, 000
                                                                                    R
investment in Microsoft stock. In general, if W0 represents the initial wealth and q.05
is the 5% quantile of distribution of R then the 5% VaR is
                                                  R
                                  5% VaR = |W0 · q.05 |.
   For the second method, use W1 ~N ($10, 500, ($1, 000)2 ) and solve for the 5%
quantile of end of month wealth:
                                 W1              W1
                        Pr(W1 < q.05 ) = 0.05 ⇒ q.05 = $8, 856
This corresponds to a loss of investment value of $10, 000 − $8, 856 = $1, 144. Hence,
                                         W1
if W0 represents the initial wealth and q.05 is the 5% quantile of the distribution of
W1 then the 5% VaR is
                                                   W1
                                5% VaR = W0 − q.05    .
         (insert VaR calculations based on continuously compounded returns)

                                           17
1.8      Log-Normal Distribution and Jensen s Inequality
(discuss Jensen s inequality: E[g(X)] < g(E[X]) for a convex function. Use this
to illustrate the diﬀerence between E[W0 exp(R)] and W0 exp(E[R]) where R is a
continuously compounded return.) Note, this is where the log-normal distribution
will come in handy.


2      Bivariate Distributions
So far we have only considered probability distributions for a single random variable.
In many situations we want to be able to characterize the probabilistic behavior of
two or more random variables simultaneously.

2.1      Discrete Random Variables

For example, let X denote the monthly return on Microsoft Stock and let Y denote
the monthly return on Apple computer. For simplicity suppose that the sample
spaces for X and Y are SX = {0, 1, 2, 3} and SY = {0, 1} so that the random
variables X and Y are discrete. The joint sample space is the two dimensional
grid SXY = {(0, 0), (0, 1), (1, 0), (1, 1), (2, 0), (2, 1), (3, 0), (3, 1)}. The likelihood that
X and Y takes values in the joint sample space is determined by the joint probability
distribution
                              p(x, y) = Pr(X = x, Y = y).
The function p(x, y) satis&es

    (i) p(x, y) > 0 for x, y ∈ SXY ;

                            / SXY ;
  (ii) p(x, y) = 0 for x, y ∈
       P                    P       P
 (iii)   x,y∈SXY p(x, y) =    x∈SX   y∈SY p(x, y) = 1.

     Table 2 illustrates the joint distribution for X and Y.

                                         Table 2
                                           Y
                                     %     0     1 Pr(X)
                                     0    1/8 0     1/8
                              X      1    2/8 1/8   3/8
                                     2    1/8 2/8   3/8
                                     3     0 1/8    1/8
                                   Pr(Y ) 4/8 4/8    1


                                              18
    For example, p(0, 0) = Pr(X = 0, Y = 0) = 1/8. Notice that sum of all the
entries in the table sum to unity. The bivariate distribution is illustrated graphically
in Figure xxx.


                                              Bivariate pdf



                     0.25




                      0.2




                      0.15

            p(x,y)


                       0.1




                      0.05




                             0                                                       1

                                 0                                                   y
                                         1                                       0
                                              x               2
                                                                      3




2.1.1   Marginal Distributions

What if we want to know only about the likelihood of X occurring? For example,
what is Pr(X = 0) regardless of the value of Y ? Now X can occur if Y = 0 or if
Y = 1 and since these two events are mutually exclusive we have that Pr(X = 0) =
Pr(X = 0, Y = 0) + Pr(X = 0, Y = 1) = 0 + 1/8 = 1/8. Notice that this probability
is equal to the horizontal (row) sum of the probabilities in the table at X = 0. The
probability Pr(X = x) is called the marginal probability of X and is given by
                                      X
                        Pr(X = x) =       Pr(X = x, Y = y).
                                       y∈SY

The marginal probabilities of X = x are given in the last column of Table 2. Notice
that the marginal probabilities sum to unity.

                                             19
    We can &nd the marginal probability of Y in a similar fashion. For example, using
the data in Table 2 Pr(Y = 1) = Pr(X = 0, Y = 1) + Pr(X = 1, Y = 1) + Pr(X =
2, Y = 1) + Pr(X = 3, Y = 1) = 0 + 1/8 + 2/8 + 1/8 = 4/8. This probability is the
vertical (column) sum of the probabilities in the table at Y = 1. Hence, the marginal
probability of Y = y is given by
                                      X
                        Pr(Y = y) =        Pr(X = x, Y = y).
                                     x∈SX

The marginal probabilities of Y = y are given in the last row of Table 2. Notice that
these probabilities sum to 1.
   For future reference we note that

                            E[X] = xx, var(X) = xx
                            E[Y ] = xx, var(Y ) = xx

2.2    Conditional Distributions
Suppose we know that the random variable Y takes on the value Y = 0. How does this
knowledge aﬀect the likelihood that X takes on the values 0, 1, 2 or 3? For example,
what is the probability that X = 0 given that we know Y = 0? To &nd this probability,
we use Bayes law and compute the conditional probability

                                    Pr(X = 0, Y = 0)   1/8
                Pr(X = 0|Y = 0) =                    =     = 1/4.
                                       Pr(Y = 0)       4/8

The notation Pr(X = 0|Y = 0) is read as the probability that X = 0 given that
Y = 0 . Notice that the conditional probability that X = 0 given that Y = 0 is
greater than the marginal probability that X = 0. That is, Pr(X = 0|Y = 0) =
1/4 > Pr(X = 0) = 1/8. Hence, knowledge that Y = 0 increases the likelihood that
X = 0. Clearly, X depends on Y.
   Now suppose that we know that X = 0. How does this knowledge aﬀect the
probability that Y = 0? To &nd out we compute

                                     Pr(X = 0, Y = 0)   1/8
                 Pr(Y = 0|X = 0) =                    =     = 1.
                                        Pr(X = 0)       1/8

Notice that Pr(Y = 0|X = 0) = 1 > Pr(Y = 0) = 1/2. That is, knowledge that
X = 0 makes it certain that Y = 0.
   In general, the conditional probability that X = x given that Y = y is given by

                                              Pr(X = x, Y = y)
                      Pr(X = x|Y = y) =
                                                 Pr(Y = y)


                                         20
and the conditional probability that Y = y given that X = x is given by
                                            Pr(X = x, Y = y)
                       Pr(Y = y|X = x) =                      .
                                               Pr(X = x)
    For the example in Table 2, the conditional probabilities along with marginal
probabilities are summarized in Tables 3 and 4. The conditional and marginal distri-
butions of X are graphically displayed in &gure xxx and the conditional and marginal
distribution of Y are displayed in &gure xxx. Notice that the marginal distribution of
X is centered at x = 3/2 whereas the conditional distribution of X|Y = 0 is centered
at x = 1 and the conditional distribution of X|Y = 1 is centered at x = 2.
                               Table 3
                x Pr(X = x) Pr(X|Y = 0) Pr(X|Y = 1)
                0     1/8         2/8           0
                1     3/8         4/8          2/8
                2     3/8         2/8          4/8
                3     1/8          0           2/8
                               Table 4
    y Pr(Y = y) Pr(Y |X = 0) Pr(Y |X = 1) Pr(Y |X = 2) Pr(Y |X = 3)
    0    1/2          1          2/3          1/3            0
    1    1/2          0          1/3          2/3            1

2.2.1   Conditional Expectation and Conditional Variance

Just as we de&ned shape characteristics of the marginal distributions of X and Y we
can also de&ne shape characteristics of the conditional distributions of X|Y = y and
Y |X = x. The most important shape characteristics are the conditional expectation
(conditional mean) and the conditional variance. The conditional mean of X|Y = y
is denoted by µX|Y =y = E[X|Y = y] and the conditional mean of Y |X = x is denoted
by µY |X=x = E[Y |X = x]. These means are computed as
                                            X
               µX|Y =y = E[X|Y = y] =           x · Pr(X = x|Y = y),
                                                x∈SX
                                                 X
                    µY |X=x = E[Y |X = x] =            y · Pr(Y = y|X = x).
                                                y∈SY

Similarly, the conditional variance of X|Y = y is denoted by σ 2X|Y =y = var(X|Y = y)
and the conditional variance of Y |X = x is denoted by σ 2Y |X=x = var(Y |X = x).
These variances are computed as
                                        X
        σ 2X|Y =y = var(X|Y = y) =         (x − µX|Y =y )2 · Pr(X = x|Y = y),
                                         x∈SX
                                         X
        σ 2Y |X=x    = var(Y |X = x) =          (y − µY |X=x )2 · Pr(Y = y|X = x).
                                         y∈SY



                                            21
Example 27 For the data in Table 2, we have
  E[X|Y    =    0] = 0 · 1/4 + 1 · 1/2 + 2 · 1/4 + 3 · 0 = 1
  E[X|Y    =    1] = 0 · 0 + 1 · 1/4 + 2 · 1/2 + 3 · 1/4 = 2
var(X|Y    =    0) = (0 − 1)2 · 1/4 + (1 − 1)2 · 1/2 + (2 − 1)2 · 1/2 + (3 − 1)2 · 0 = 1/2
var(X|Y    =    1) = (0 − 2)2 · 0 + (1 − 2)2 · 1/4 + (2 − 2)2 · 1/2 + (3 − 2)2 · 1/4 = 1/2.
Using similar calculations gives
    E[Y |X = 0] = 0, E[Y |X = 1] = 1/3, E[Y |X = 2] = 2/3, E[Y |X = 3] = 1
  var(Y |X = 0) = 0, var(Y |X = 1) = 0, var(Y |X = 2) = 0, var(Y |X = 3) = 0.

2.2.2   Conditional Expectation and the Regression Function
Consider the problem of predicting the value Y given that we know X = x. A natural
predictor to use is the conditional expectation E[Y |X = x]. In this prediction context,
the conditional expectation E[Y |X = x] is called the regression function. The graph
with E[Y |X = x] on the verticle axis and x on the horizontal axis gives the so-
called regression line. The relationship between Y and the regression function may
expressed using the trivial identity
                        Y   = E[Y |X = x] + Y − E[Y |X = x]
                            = E[Y |X = x] + ε
where ε = Y − E[Y |X] is called the regression error.
Example 28 For the data in Table 2, the regression line is plotted in &gure xxx.
Notice that there is a linear relationship between E[Y |X = x] and x. When such a
linear relationship exists we call the regression function a linear regression. It is
important to stress that linearity of the regression function is not guaranteed.

2.2.3   Law of Total Expectations
Notice that
              E[X] = E[X|Y = 0] · Pr(Y = 0) + E[X|Y = 1] · Pr(Y = 1)
                   = 1 · 1/2 + 2 · 1/2 = 3/2
and
E[Y ] = E[Y |X = 0] · Pr(X = 0) + E[Y |X = 1] · Pr(X = 1) + E[Y |X = 2] · Pr(X = 2) + E[Y |X = 3
      = 1/2
This result is known as the law of total expectations. In general, for two random
variables X and Y we have
                                 E[X] = E[E[X|Y ]]
                                 E[Y ] = E[E[Y |X]]

                                            22
2.3     Bivariate Distributions for Continuous Random Variables
Let X and Y be continuous random variables de&ned over the real line. We character-
ize the joint probability distribution of X and Y using the joint probability function
(pdf) p(x, y) such that p(x, y) ≥ 0 and
                                Z ∞Z ∞
                                         p(x, y)dxdy = 1.
                               −∞     −∞

For example, in Figure xxx we illustrate the pdf of X and Y as a bell-shaped surface
in two dimensions. To compute joint probabilities of x1 ≤ X ≤ x2 and y1 ≤ Y ≤ y2
we need to &nd the volume under the probability surface over the grid where the
intervals [x1 , x2 ] and [y1 , y2 ] overlap. To &nd this volume we must solve the double
integral                                               Z x2 Z y2
                  Pr(x1 ≤ X ≤ x2 , y1 ≤ Y ≤ y2 ) =               p(x, y)dxdy.
                                                       x1   y1

Example 29 A standard bivariate normal pdf for X and Y has the form
                                    1 − 1 (x2 +y2 )
                       p(x, y) =      e 2           , −∞ ≤ x, y ≤ ∞
                                   2π
and has the shape of a symmetric bell centered at x = 0 and y = 0 as illustrated in
Figure xxx (insert &gure here). To &nd Pr(−1 < X < 1, −1 < Y < 1) we must solve
                              Z 1Z 1
                                      1 − 1 (x2 +y2 )
                                        e 2           dxdy
                               −1 −1 2π

which, unfortunately, does not have an analytical solution. Numerical approximation
methods are required to evaluate the above integral.

2.3.1   Marginal and Conditional Distributions

The marginal pdf of X is found by integrating y out of the joint pdf p(x, y) and the
marginal pdf of Y is found by integrating x out of the joint pdf:
                                        Z ∞
                             p(x) =         p(x, y)dy,
                                         −∞
                                        Z ∞
                             p(y) =         p(x, y)dx.
                                            −∞

The conditional pdf of X given that Y = y, denoted p(x|y), is computed as

                                                 p(x, y)
                                     p(x|y) =
                                                  p(y)

                                            23
and the conditional pdf of Y given that X = x is computed as
                                              p(x, y)
                                   p(y|x) =           .
                                               p(x)
The conditional means are computed as
                                                   Z
                     µX|Y =y = E[X|Y = y] =               x · p(x|y)dx,
                                                   Z
                     µY |X=x = E[Y |X = x] =              y · p(y|x)dy

and the conditional variances are computed as
                                           Z
              σ X|Y =y = var(X|Y = y) = (x − µX|Y =y )2 p(x|y)dx,
                2

                                           Z
              σ Y |X=x = var(Y |X = x) = (y − µY |X=x )2 p(y|x)dy.
                2




2.4    Independence
Let X and Y be two random variables. Intuitively, X is independent of Y if knowledge
about Y does not in! uence the likelihood that X = x for all possible values of x ∈ SX
and y ∈ SY . Similarly, Y is independent of X if knowledge about X does not in! uence
the likelihood that Y = y for all values of y ∈ SY . We represent this intuition formally
for discrete random variables as follows.
De&nition 30 Let X and Y be discrete random variables with sample spaces SX and
SY , respectively. X and Y are independent random variables iﬀ
              Pr(X = x|Y = y) = Pr(X = x), for all x ∈ SX , y ∈ SY
              Pr(Y = y|X = x) = Pr(Y = y), for all x ∈ SX , y ∈ SY
Example 31 For the data in Table 2, we know that Pr(X = 0|Y = 0) = 1/4 6=
Pr(X = 0) = 1/8 so X and Y are not independent.
Proposition 32 Let X and Y be discrete random variables with sample spaces SX
and SY , respectively. If X and Y are independent then
        Pr(X = x, Y = y) = Pr(X = x) · Pr(Y = y), for all x ∈ SX , y ∈ SY
   For continuous random variables, we have the following de&nition of independence
De&nition 33 Let X and Y be continuous random variables. X and Y are indepen-
dent iﬀ
                        p(x|y) = p(x), for − ∞ < x, y < ∞
                        p(y|x) = p(y), for − ∞ < x, y < ∞

                                           24
Proposition 34 Let X and Y be continuous random variables . X and Y are inde-
pendent iﬀ
                            p(x, y) = p(x)p(y)

    The result in the proposition is extremely useful because it gives us an easy way
to compute the joint pdf for two independent random variables: we simple compute
the product of the marginal distributions.

Example 35 Let X ∼ N(0, 1), Y ∼ N (0, 1) and let X and Y be independent. Then
                                    1   1 2  1   1 2    1 − 1 (x2 +y2 )
              p(x, y) = p(x)p(y) = √ e− 2 x √ e− 2 y =    e 2           .
                                    2π       2π        2π
This result is a special case of the bivariate normal distribution.

    (stuﬀ to add: if X and Y are independent then f (X) and g(Y ) are independent
for any functions f (·) and g(·).)

2.5    Covariance and Correlation

Let X and Y be two discrete random variables. Figure xxx displays several bivariate
probability scatterplots (where equal probabilities are given on the dots).

                                    (insert &gure here)

    In panel (a) we see no linear relationship between X and Y. In panel (b) we see a
perfect positive linear relationship between X and Y and in panel (c) we see a perfect
negative linear relationship. In panel (d) we see a positive, but not perfect, linear
relationship. Finally, in panel (e) we see no systematic linear relationship but we see a
strong nonlinear (parabolic) relationship. The covariance between X and Y measures
the direction of linear relationship between the two random variables. The correlation
between X and Y measures the direction and strength of linear relationship between
the two random variables.
    Let X and Y be two random variables with E[X] = µX , var(X) = σ 2X , E[Y ] = µY
and var(Y ) = σ 2Y .

De&nition 36 The covariance between two random variables X and Y is given by

   σ XY   = cov(X, Y ) = E[(X − µX )(Y − µY )]
             X X
          =          (x − µX )(y − µY ) Pr(X = x, Y = y) for discrete X and Y
              x∈SX y∈SY
              Z ∞Z ∞
          =               (x − µX )(y − µY )p(x, y)dxdy   for continuous X and Y
               −∞   −∞


                                            25
De&nition 37 The correlation between two random variables X and Y is given by
                                             cov(X, Y )      σ XY
                    ρXY = corr(X, Y ) = p                 =
                                            var(X)var(Y )   σX σY

   Notice that the correlation coeﬃcient, ρXY , is just a scaled version of the covari-
ance.
   To see how covariance measures the direction of linear association, consider the
probability scatterplot in &gure xxx.


                                   (insert &gure here)

    In the plot the random variables X and Y are distributed such that µX = µY = 0.
The plot is separated into quadrants. In the &rst quandrant, the realized values satisfy
x < µX , y > µY so that the product (x − µX )(y − µY ) < 0. In the second quadrant,
the values satisfy x > µX and y > µY so that the product (x − µX )(y − µY ) > 0.
In the third quadrant, the values satisfy x > µX but y < µY so that the product
(x − µX )(y − µY ) < 0. Finally, in the fourth quandrant, x < µX and y < µY so that
the product (x − µX )(y − µY ) > 0. Covariance is then a probability weighted average
all of the product terms in the four quadrants. For the example data, this weighted
average turns out to be positive.

Example 38 For the data in Table 2, we have

σ XY    = cov(X, Y ) = (0 − 3/2)(0 − 1/2) · 1/8 + (0 − 3/2)(1 − 1/2) · 0 + · · · + (3 − 3/2)(1 − 1/2) · 1/8
                              1/4
ρXY     = corr(X, Y ) = p                = 0.577
                           (3/4) · (1/2)

2.5.1    Properties of Covariance and Correlation
Let X and Y be random variables and let a and b be constants. Some important
properties of cov(X, Y ) are

  1. cov(X, X) = var(X)
  2. cov(X, Y ) = cov(Y, X)

  3. cov(aX, bY ) = a · b · cov(X, Y )
  4. If X and Y are independent then cov(X, Y ) = 0 (no association =⇒ no linear
     association). However, if cov(X, Y ) = 0 then X and Y are not necessarily
     independent (no linear association ; no association).

  5. If X and Y are jointly normally distributed and cov(X, Y ) = 0, then X and Y
     are independent.

                                           26
    The third property above shows that the value of cov(X, Y ) depends on the scaling
of the random variables X and Y. By simply changing the scale of X or Y we can
make cov(X, Y ) equal to any value that we want. Consequently, the numerical value
of cov(X, Y ) is not informative about the strength of the linear association between
X and Y . However, the sign of cov(X, Y ) is informative about the direction of linear
association between X and Y. The fourth property should be intuitive. Independence
between the random variables X and Y means that there is no relationship, linear or
nonlinear, between X and Y. However, the lack of a linear relationship between X and
Y does not preclude a nonlinear relationship. The last result illustrates an important
property of the normal distribution: lack of covariance implies independence.
    Some important properties of corr(X, Y ) are

  1. −1 ≤ ρXY ≤ 1.

  2. If ρXY = 1 then X and Y are perfectly positively linearly related. That is,
     Y = aX + b where a > 0.

  3. If ρXY = −1 then X and Y are perfectly negatively linearly related. That is,
     Y = aX + b where a < 0.

  4. If ρXY = 0 then X and Y are not linearly related but may be nonlinearly
     related.

  5. corr(aX, bY ) = corr(X, Y ) if a > 0 and b > 0; corr(X, Y ) = −corr(X, Y ) if
     a > 0, b < 0 or a < 0, b > 0.

   (Stuﬀ to add: bivariate normal distribution)

2.5.2   Expectation and variance of the sum of two random variables
Let X and Y be two random variables with well de&ned means, variances and covari-
ance and let a and b be constants. Then the following results hold.

  1. E[aX + bY ] = aE[X] + bE[Y ] = aµX + bµY

  2. var(aX + bY ) = a2 var(X) + b2 var(Y ) + 2 · a · b · cov(X, Y ) = a2 σ 2X + b2 σ 2Y +
     2 · a · b · σ XY

    The &rst result states that the expected value of a linear combination of two
random variables is equal to a linear combination of the expected values of the random
variables. This result indicates that the expectation operator is a linear operator. In
other words, expectation is additive. The second result states that variance of a
linear combination of random variables is not a linear combination of the variances
of the random variables. In particular, notice that covariance comes up as a term
when computing the variance of the sum of two (not independent) random variables.

                                           27
Hence, the variance operator is not, in general, a linear operator. That is, variance,
in general, is not additive.
    It is worthwhile to go through the proofs of these results, at least for the case of
discrete random variables. Let X and Y be discrete random variables. Then,
                     X X
  E[aX + bY ] =              (ax + by) Pr(X = x, Y = y)
                    x∈SX y∈Sy
                    X X                                      X X
                =                 ax Pr(X = x, Y = y) +                    bx Pr(X = x, Y = y)
                    x∈SX y∈Sy                                x∈SX y∈Sy
                      X          X                             X          X
                = a          x          Pr(X = x, Y = y) + b          y          Pr(X = x, Y = y)
                      x∈SX       y∈Sy                          y∈Sy       x∈SX
                      X                           X
                = a          x Pr(X = x) + b            y Pr(Y = y)
                      x∈SX                       y∈Sy

                = aE[X] + bE[Y ] = aµX + bµY .
   Furthermore,


var(aX + bY ) =     E[(aX + bY − E[aX + bY ])2 ]
              =     E[(aX + bY − aµX − bµY )2 ]
              =     E[(a(X − µX ) + b(Y − µY ))2 ]
              =     a2 E[(X − µX )2 ] + b2 E[(Y − µY )2 ] + 2 · a · b · E[(X − µX )(Y − µY )]
              =     a2 var(X) + b2 var(Y ) + 2 · a · b · cov(X, Y ).




2.5.3   Linear Combination of two Normal random variables
The following proposition gives an important result concerning a linear combination
of normal random variables.

Proposition 39 Let X ∼ N (µX , σ 2X ), Y ∼ N(µY , σ 2Y ), σ XY = cov(X, Y ) and a and
b be constants. De&ne the new random variable Z as
                                          Z = aX + bY.
Then
                                         Z ∼ N(µZ , σ 2Z )
where
                             µZ = aµX + bµY
                             σ 2Z = a2 σ 2X + b2 σ 2Y + 2abσ XY

                                                28
   This important result states that a linear combination of two normally distributed
random variables is itself a normally distributed random variable. The proof of the
result relies on the change of variables theorem from calculus and is omitted. Not all
random variables have the property that their distributions are closed under addition.


3       Multivariate Distributions
The results for bivariate distributions generalize to the case of more than two random
variables. The details of the generalizations are not important for our purposes.
However, the following results will be used repeatedly.

3.1     Linear Combinations of N Random Variables
Let X1 , X2 , . . . , XN denote a collection of N random variables with means µi ,variances
σ 2i and covariances σ ij . De&ne the new random variable Z as a linear combination
                            Z = a1 X1 + a2 X2 + · · · + aN XN
where a1 , a2 , . . . , aN are constants. Then the following results hold


                 µZ = E[Z] = a1 E[X1 ] + a2 E[X2 ] + · · · + aN E[XN ]
                      XN             N
                                     X
                    =    ai E[Xi ] =    ai µi .
                          i=1              i=1



                    σ 2Z = var(Z) = a21 σ 21 + a22 σ 22 + · · · + a2N σ 2N
                           +2a1 a2 σ 12 + 2a1 a3 σ 13 + · · · + a1 aN σ 1N
                           +2a2 a3 σ 23 + 2a2 a4 σ 24 + · · · + a2 aN σ 2N
                           +··· +
                           +2aN−1 aN σ (N −1)N
   In addition, if all of the Xi are normally distributed then Z is normally distributed
with mean µZ and variance σ 2Z as described above.

3.1.1    Application: Distribution of Continuously Compounded Returns
Let Rt denote the continuously compounded monthly return on an asset at time t.
Assume that Rt ˜ iid N (µ, σ 2 ). The annual continuously compounded return is equal
the sum of twelve monthly continuously compounded returns. That is,
                                                 11
                                                 X
                                    Rt (12) =          Rt−j .
                                                 j=0


                                             29
Since each monthly return is normally distributed, the annual return is also normally
distributed. In addition,
                                " 11      #
                                 X
               E[Rt (12)] = E        Rt−j
                                         j=0
                                  11
                                  X
                              =          E[Rt−j ] (by linearity of expectation)
                                   j=0
                                  11
                                  X
                              =          µ (by identical distributions)
                                   j=0
                              = 12 · µ,
so that the expected annual return is equal to 12 times the expected monthly return.
Furthermore,
                                      Ã 11       !
                                        X
                var(Rt (12)) = var          Rt−j
                                                 j=0
                                         11
                                         X
                                   =           var(Rt−j ) (by independence)
                                         j=0

                                         X
                                         11
                                   =           σ 2 (by identical distributions)
                                         j=0

                                   = 12 · σ 2 ,
so that the annual variance is also equal to 12 times the monthly variance2 . For the
annual standard deviation, we have
                                               √
                                SD(Rt (12)) = 12σ.


4       Further Reading
Excellent intermediate level treatments of probability theory using calculus are given
in DeGroot (1986), Hoel, Port and Stone (1971) and Hoag and Craig (19xx). Inter-
mediate treatments with an emphasis towards applications in &nance include Ross
(1999) and Watsom and Parramore (1998). Intermediate textbooks with an emphasis
on econometrics include Amemiya (1994), Goldberger (1991), Ramanathan (1995).
Advanced treatments of probability theory applied to &nance are given in Neftci
(1996). Everything you ever wanted to know about probability distributions is given
Johnson and Kotz (19xx).
    2
    This result often causes some confusion. It is easy to make the mistake and say that the annual
variance is (12)2 = 144 time the monthly variance. This result would occur if RA = 12Rt , so that
var(RA ) = (12)2 var(Rt ) = 144var(Rt ).

                                                  30
5       Problems
Let W, X, Y, and Z be random variables describing next year s annual return on
Weyerhauser, Xerox, Yahoo! and Zymogenetics stock. The table below gives discrete
probability distributions for these random variables based on the state of the economy:
          State of Economy W p(w)            X p(x)      Y   p(y)     Z p(z)
             Depression    -0.3 0.05        -0.5 0.05   -0.5 0.15    -0.8 0.05
              Recession    0.0  0.2         -0.2 0.1    -0.2 0.5     0.0 0.2
               Normal       0.1 0.5          0   0.2     0    0.2    0.1 0.5
             Mild Boom     0.2  0.2         0.2 0.5     0.2 0.1      0.2 0.2
            Major Boom     0.5 0.05         0.5 0.15    0.5 0.05      1   0.05
      • Plot the distributions for each random variable (make a bar chart). Comment
        on any diﬀerences or similarities between the distributions.
      • For each random variable, compute the expected value, variance, standard de-
        viation, skewness, kurtosis and brie! y comment.
      Suppose X is a normally distributed random variable with mean 10 and variance
24.
      • Find Pr(X > 14)
      • Find Pr(8 < X < 20)
      • Find the probability that X takes a value that is at least 6 away from its mean.
      • Suppose y is a constant de&ned such that Pr(X > y) = 0.10. What is the value
        of y?
      • Determine the 1%, 5%, 10%, 25% and 50% quantiles of the distribution of X.
    Let X denote the monthly return on Microsoft stock and let Y denote the monthly
return on Starbucks stock. Suppose X˜N (0.05, (0.10)2 ) and Y ˜N(0.025, (0.05)2 ).
      • Plot the normal curves for X and Y
      • Comment on the risk-return trade-oﬀs for the two stocks
    Let R denote the monthly return on Microsoft stock and let W0 denote ini-
tial wealth to be invested in Microsoft stock over the next month. Assume that
R˜N (0.07, (0.12)2 ) and that W0 = $25, 000.
      • What is the distribution of end of month wealth W1 = W0 (1 + R)?
      • What is the probability that end of month wealth is less than $20,000?
      • What is the Value-at-Risk (VaR) on the investment in Microsoft stock over the
        next month with 5% probability?

                                            31
References
[1] Amemiya, T. (1994). Introduction to Statistics and Econometrics. Harvard Uni-
    versity Press, Cambridge, MA.

[2] Goldberger, A.S. (1991). A Course in Econometrics. Harvard University Press,
    Cambridge, MA.

[3] Hoel, P.G., Port, S.C. and Stone, C.J. (1971). Introduction to Probability Theory.
    Houghton Miﬄin, Boston, MA.

[4] Johnson, x, and Kotz, x. Probability Distributions, Wiley.

[5] Neftci, S.N. (1996). An Introduction to the Mathematics of Financial Derivatives.
    Academic Press, San Diego, CA.

[6] Ross, S. (1999). An Introduction to Mathematical Finance: Options and Other
    Topics. Cambridge University Press, Cambridge, UK.

[7] Watsham, T.J., and Parramore, K. (1998). Quantitative Methods in Finance.
    International Thompson Business Press, London, UK.




                                         32



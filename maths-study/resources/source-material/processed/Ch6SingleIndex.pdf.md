---
normalized_id: shared-pdf-reference-ch6singleindex
exam_code: SHARED
material_scope: ch6singleindex.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Ch6SingleIndex.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-ch6singleindex

    Introduction to Financial Econometrics
Chapter 6 The Single Index Model and Bivariate
                  Regression
                    Eric Zivot                             University of Washington
             Department of Economics
                                            March 1, 2001


1         The single index model
Sharpe s single index model, also know as the market model and the single factor
model, is a purely statistical model used to explain the behavior of asset returns.
It is a generalization of the constant expected return (CER) model to account for
systematic factors that may aﬀect an asset s return. It is not the same model as the
Capital Asset Pricing Model (CAPM), which is an economic model of equilibrium
returns, but is closely related to it as we shall see in the next chapter.
    The single index model has the form of a simple bivariate linear regression model

                       Rit = αi + β i,M RMt + εit , i = 1, . . . , N ; t = 1, . . . , T           (1)

where Rit is the continuously compounded return on asset i (i = 1, . . . , N) between
time periods t − 1 and t, and RMt is the continuously compounded return on a
market index portfolio between time periods t − 1 and t. The market index portfolio
is usually some well diversi&ed portfolio like the S&P 500 index, the Wilshire 5000
index or the CRSP1 equally or value weighted index. As we shall see, the coeﬃcient
β i,M multiplying RMt in (1) measures the contribution of asset i to the variance
(risk), σ 2M , of the market index portfolio. If β i,M = 1 then adding the security does
not change the variability, σ 2M , of the market index; if β i,M > 1 then adding the
security will increase the variability of the market index and if β i,M < 1 then adding
the security will decrease the variability of the market index.
     The intuition behind the single index model is as follows. The market index RMt
captures macro or market-wide systematic risk factors that aﬀect all returns in one
way or another. This type of risk, also called covariance risk, systematic risk and
    1
        CRSP refers to the Center for Research in Security Prices at the University of Chicago.


                                                      1
market risk, cannot be eliminated in a well diversi&ed portfolio. The random error
term εit has a similar interpretation as the error term in the CER model. In the single
index model, εit represents random news that arrives between time t − 1 and t that
captures micro or &rm-speci&c risk factors that aﬀect an individual asset s return
that are not related to macro events. For example, εit may capture the news eﬀects
of new product discoveries or the death of a CEO. This type of risk is often called
&rm speci&c risk, idiosyncratic risk, residual risk or non-market risk. This type of
risk can be eliminated in a well diversi&ed portfolio.
    The single index model can be expanded to capture multiple factors. The single
index model then takes the form a k−variable linear regression model

                      Rit = αi + β i,1 F1t + β i,2 F2t + · · · + β i,k Fkt + εit

where Fjt denotes the j th systematic factorm, β i,j denotes asset i0 s loading on the j th
factor and εit denotes the random component independent of all of the systematic
factors. The single index model results when F1t = RMt and β i,2 = · · · = β i,k = 0. In
the literature on multiple factor models the factors are usually variables that capture
speci&c characteristics of the economy that are thought to aﬀect returns - e.g. the
market index, GDP growth, unexpected in! ation etc., and &rm speci&c or industry
speci&c characteristics - &rm size, liquidity, industry concentration etc. Multiple
factor models will be discussed in chapter xxx.
    The single index model is heavily used in empirical &nance. It is used to estimate
expected returns, variances and covariances that are needed to implement portfolio
theory. It is used as a model to explain the normal or usual rate of return on an
asset for use in so-called event studies2 . Finally, the single index model is often used
the evaluate the performance of mutual fund and pension fund managers.

1.1     Statistical Properties of Asset Returns in the single in-
        dex model
The statistical assumptions underlying the single index model (1) are as follows:

   1. (Rit , RMt ) are jointly normally distributed for i = 1, . . . , N and t = 1, . . . , T .

   2. E[εit ] = 0 for i = 1, . . . , N and t = 1, . . . , T (news is neutral on average).

   3. var(εit ) = σ 2ε,i for i = 1, . . . , N (homoskedasticity).

   4. cov(εit , RMt ) = 0 for i = 1, . . . , N and t = 1, . . . , T .
   2
     The purpose of an event study is to measure the eﬀect of an economic event on the value of a &rm.
Examples of event studies include the analysis of mergers and acquisitions, earning announcements,
announcements of macroeconomic variables, eﬀects of regulatory change and damage assessments
in liability cases. An excellent overview of event studies is given in chapter 4 of Campbell, Lo and
MacKinlay (1997).

                                                  2
  5. cov(εit , εjs ) = 0 for all t, s and i 6= j
  6. εit is normally distributed
    The normality assumption is justi&ed on the observation that returns are fairly
well characterized by the normal distribution. The error term having mean zero
implies that &rm speci&c news is, on average, neutral and the constant variance
assumptions implies that the magnitude of typical news events is constant over time.
Assumption 4 states that &rm speci&c news is independent (since the random variables
are normally distributed) of macro news and assumption 5 states that news aﬀecting
asset i in time t is independent of news aﬀecting asset j in time s.
    That εit is unrelated to RMs and εjs implies that any correlation between asset i
and asset j is solely due to their common exposure to RMt throught the values of β i
and β j .

1.1.1   Unconditional Properties of Returns in the single index model
The unconditional properties of returns in the single index model are based on the
marginal distribution of returns: that is, the distribution of Rit without regard to any
information about RMt . These properties are summarized in the following proposition.
Proposition 1 Under assumptions 1 - 6
  1. E[Rit ] = µi = αi + β i,M E[RMt ] = αi + β i,M µM

  2. var(Rit ) = σ 2i = β 2i,M var(RMt ) + var(εit ) = β 2i,M σ 2M + σ 2ε,i
  3. cov(Rit , Rjt ) = σ ij = σ 2M β i β j
  4. Rit ~ iid N(µi , σ 2i ), RMt ~ iid N (µM , σ 2M )

  5. β i,M = cov(R it ,RMt )
               var(RM t )
                             = σσiM
                                 2
                                  M

   The proofs of these results are straightforward and utilize the properties of linear
combinations of random variables. Results 1 and 4 are trivial. For 2, note that
                 var(Rit ) = var(αi + β i,M RMt + εit )
                              = β 2i,M var(RMt ) + var(εit ) + 2cov(RMt , εit )
                              = β 2i,M σ 2M + σ 2ε,i
since, by assumption 4, cov(εit , RMt ) = 0. For 3, by the additivity property of
covariance and assumptions 4 and 5 we have
cov(Rit , Rjt ) =    cov(αi + β i,M RMt + εit , αj + β j,M RMt + εjt )
                =    cov(β i,M RMt + εit , β j,M RMt + εjt )
                =    cov(β i,M RMt , β j,M RMt ) + cov(β i,M RMt , εjt ) + cov(εit , β j,M RMt ) + cov(εit , εjt )
                =    β i,M β j,M cov(RMt , RMt ) = β i,M β j,M σ 2M

                                                   3
Last, for 5 note that

                   cov(Rit , RMt ) =   cov(αi + β i,M RMt + εit , RMt )
                                   =   cov(β i,M RMt , RMt )
                                   =   β i,M cov(RMt , RMt )
                                   =   β i,M var(RMt ),

which uses assumption 4. It follows that

                        cov(Rit , RMt )  β var(RMt )
                                        = i,M        = β i,M .
                          var(RMt )        var(RMt )


   Remarks:

  1. Notice that unconditional expected return on asset i, µi , is constant and con-
     sists of an intercept term αi , a term related to β i,M and the unconditional
     mean of the market index, µM . This relationship may be used to create pre-
     dictions of expected returns over some future period. For example, suppose
     αi = 0.01, β i,M = 0.5 and that a market analyst forecasts µM = 0.05. Then the
     forecast for the expected return on asset i is

                                b i = 0.01 + 0.5(0.05) = 0.026.
                                µ

  2. The unconditional variance of the return on asset i is constant and consists of
     variability due to the market index, β 2i,M σ 2M , and variability due to speci&c risk,
     σ 2ε,i .

  3. Since σ ij = σ 2M β i β j the direction of the covariance between asset i and asset j
     depends of the values of β i and β j . In particular

        • σ ij = 0 if β i = 0 or β j = 0 or both
        • σ ij > 0 if β i and β j are of the same sign
        • σ ij < 0 if β i and β j are of opposite signs.

  4. The expression for the expected return can be used to provide an unconditional
     interpretation of αi . Subtracting β i,M µM from both sides of the expression for
     µi gives
                                     αi = µi − β i,M µM .




                                            4
1.1.2   Decomposing Total Risk

The independence assumption between RMt and εit allows the unconditional vari-
ability of Rit , var(Rit ) = σ 2i , to be decomposed into the variability due to the market
index, β 2i,M σ 2M , plus the variability of the &rm speci&c component, σ 2ε,i . This decom-
position is often called analysis of variance (ANOVA). Given the ANOVA, it is useful
to de&ne the proportion of the variability of asset i that is due to the market index
and the proportion that is unrelated to the index. To determine these proportions,
divide both sides of σ 2i = β 2i,M σ 2M + σ 2ε,i to give

                         σ 2i β 2i,M σ 2M + σ 2ε,i   β 2i,M σ 2M   σ 2ε,i
                       1= 2 =                      =             +
                         σi            σ 2i               σ 2i     σ 2i
Then we can de&ne
                                  2   β 2i,M σ 2M         σ 2ε,i
                                 Ri =               =1−
                                           σ 2i           σ 2i
as the proportion of the total variability of Rit that is attributable to variability in
the market index. Similarly,
                                          2    σ 2ε,i
                                    1 − Ri = 2
                                               σi
is then the proportion of the variability of Rit that is due to &rm speci&c factors. We
can think of Ri2 as measuring the proportion of risk in asset i that cannot be diversi&ed
away when forming a portfolio and we can think of 1−Ri2 as the proportion of risk that
can be diversi&ed away. It is important not to confuse Ri2 with β i,M . The coeﬃcient
β i,M measures the overall magnitude of nondiversi&able risk whereas Ri2 measures the
proportion of this risk in the total risk of the asset.
     William Sharpe computed Ri2 for thousands of assets and found that for a typical
stock R2i ≈ 0.30. That is, 30% of the variability of the return on a typical is due
to variability in the overall market and 70% of the variability is due to non-market
factors.

1.1.3   Conditional Properties of Returns in the single index model
Here we refer to the properties of returns conditional on observing the value of the
market index random variable RMt . That is, suppose it is known that RMt = rMt . The
following proposition summarizes the properties of the single index model conditional
on RMt = rMt :

   1. E[Rit |RMt = rMt ] = µi|RM = αi + β i,M rMt

   2. var(Rit |RMt = rMt ) = var(εit ) = σ 2ε,i

   3. cov(Rit , Rjt |Rmt = rMt ) = 0

                                               5
    Property 1 states that the expected return on asset i conditional on RMt = rMt
is allowed to vary with the level of the market index. Property 2 says conditional
on the value of the market index, the variance of the return on asset is equal to the
variance of the random news component. Property 3 shows that once movements in
the market are controlled for, assets are uncorrelated.

1.2       Matrix Algebra Representation of the Single Index Model
The single index model for the entire set of N assets may be conveniently represented
using matrix algebra. De&nie the (N × 1) vectors Rt = (R1t , R2t , . . . , RNt )0 , α =
(α1 , α2 , . . . , αN )0 , β = (β 1 , β 2 , . . . , β N )0 and εt = (ε1t , ε2t , . . . , εNt )0 . Then the single
index model for all N assets may be represented as
                                                                      
                  R1t      α1       β1           ε1t
                  .                           
                  .  =  ..  +  ..  RMt +  ..  , t = 1, . . . , T
                  .     .   .             . 
                     RNt             αN               βN               εNt
or
                                 Rt = α + β · RMt + εt , t = 1, . . . , T.
    Since σ 2i = β 2i,M σ 2M + σ 2ε,i and σ ij = β i β j σ 2M the covariance matrix for the N
returns may be expressed as
                                                                                                                              
    σ 21             σ 12 · · · σ 1N       β 2i,M σ 2M β i β j σ 2M     · · · β i β j σ 2M     σ 2ε,1 0             ···     0
   σ                σ 22 · · · σ 2N     β β σ2        2      2
                                                                        · · · β i β j σ 2M          σ 2ε,2        ···            
   12                                   i j M β i,M σ M                                   0                            0      
Σ=
   ..                 .. . .           
                                  ..  =        ..          ..         ...         ..      
                                                                                           + ..        ..         ...     ..     
                                                                                                                                   
   .                   .      .   .            .           .                      .       .          .                  .     
                                   2                                            2
          σ 1N       · · · · · · σN        β i β j σ M β i β j σ 2M
                                                     2
                                                                        · · · β i,M σ M 2
                                                                                                0      0            · · · σ 2ε,N

The covariance matrix may be conveniently computes as

                                              Σ = σ 2M ββ 0 + ∆

where ∆ is a diagonal matrix with σ 2ε,i along the diagonal.

1.3       The Single Index Model and Portfolios
Suppose that the single index model (1) describes the returns on two assets. That is,

                                     R1t = α1 + β 1,M RMt + ε1t ,                                            (2)
                                     R2t = α2 + β 2,M RMt + ε2t .                                            (3)

Consider forming a portfolio of these two assets. Let x1 denote the share of wealth
in asset 1, x2 the share of wealth in asset 2 and suppose that x1 + x2 = 1. The return


                                                           6
on this portfolio using (2) and (3) is then

          Rpt =     x1 R1t + x2 R2t
              =     x1 (α1 + β 1,M RMt + ε1t ) + x2 (α2 + β 2,M RMt + ε2t )
              =     (x1 α1 + x2 α2 ) + (x1 β 1,M + x2 β 2,M )RMt + (x1 ε1t + x2 ε2t )
              =     αp + β p,M RMt + εpt

where αp = x1 α1 + x2 α2 , β p,M = x1 β 1,M + x2 β 2,M and εpt = x1 ε1t + x2 ε2t . Hence,
the single index model will hold for the return on the portfolio where the parameters
of the single index model are weighted averages of the parameters of the individual
assets in the portfolio. In particular, the beta of the portfolio is a weighted average
of the individual betas where the weights are the portfolio weights.

Example 2 To be completed

    The additivity result of the single index model above holds for portfolios of any
size. To illustrate, suppose the single index model holds for a collection of N assets:

                         Rit = αi + β i,M RMt + εit (i = 1, . . . , N)

Consider forming a portfolio of these N assets. Let xi denote the share of wealth
                                   P
invested in asset i and assume that Ni=1 = 1. Then the return on the portfolio is

                                   N
                                   X
                     Rpt =               xi (αi + β i,M RMt + εit )
                                   i=1
                                    N
                                                   ÃN             !          N
                                   X                X                        X
                           =             xi αi +            xi β i,M RMt +          xi εit
                                   i=1              i=1                       i=1
                           = αp + β p RMt + εpt
             PN                    ³P                   ´               PN
                                     N
where αp =     i=1 xi αi , β p =         i=1 xi β i,M       and εpt =    i=1 xi εit .


1.3.1   The Single Index Model and Large Portfolios
To be completed


2       Beta as a Measure of portfolio Risk
A key insight of portfolio theory is that, due to diversi&cation, the risk of an individual
asset should be based on how it aﬀects the risk of a well diversi&ed portfolio if it is
added to the portfolio. The preceding section illustrated that individual speci&c
risk, as measured by the asset s own variance, can be diversi&ed away in large well
diversi&ed portfolios whereas the covariances of the asset with the other assets in

                                                        7
the portfolio cannot be completely diversi&ed away. The so-called beta of an asset
captures this covariance contribution and so is a measure of the contribution of the
asset to overall portfolio variability.
    To illustrate, consider an equally weighted portfolio of 99 stocks and let R99 denote
the return on this portfolio and σ 299 denote the variance. Now consider adding one
stock, say IBM, to the portfolio. Let RIBM and σ 2IBM denote the return and variance
of IBM and let σ 99,IBM = cov(R99 , RIBM ). What is the contribution of IBM to the
risk, as measured by portfolio variance, of the portfolio? Will the addition of IBM
make the portfolio riskier (increase portfolio variance)? Less risky (decrease portfolio
variance)? Or have no eﬀect (not change portfolio variance)? To answer this question,
consider a new equally weighted portfolio of 100 stocks constructed as
                           R100 = (0.99) · R99 + (0.01) · RIBM .
The variance of this portfolio is
       σ 2100 = var(R100 ) = (0.99)2 σ 299 + (0.01)2 σ 2IBM + 2(0.99)(0.01)σ 99,IBM
              = (0.98)σ 299 + (0.0001)σ 2IBM + (0.02)σ 99,IBM
              ≈ (0.98)σ 299 + (0.02)σ 99,IBM .
   Now if
   • σ 2100 = σ 299 then adding IBM does not change the variability of the portfolio;
   • σ 2100 > σ 299 then adding IBM increases the variability of the portfolio;
   • σ 2100 < σ 299 then adding IBM decreases the variability of the portfolio.
   Consider the &rst case where σ 2100 = σ 299 . This implies (approximately) that
                              (0.98)σ 299 + (0.02)σ 99,IBM = σ 299
which upon rearranging gives the condition
                              σ 99,IBM   cov(R99 , RIBM )
                                       =                  =1
                                 σ 299      var(R99 )
De&ning
                                             cov(R99 , RIBM )
                                β 99,IBM =
                                                  var(R99 )
then adding IBM does not change the variability of the portfolio as long as β 99,IBM =
1. Similarly, it is easy to see that σ 2100 > σ 299 implies that β 99,IBM > 1 and σ 2100 < σ 299
implies that β 99,IBM < 1.
    In general, let Rp denote the return on a large diversi&ed portfolio and let Ri
denote the return on some asset i. Then
                                             cov(Rp , Ri )
                                    β p,i =
                                               var(Rp )
measures the contribution of asset i to the overall risk of the portfolio.

                                               8
2.1     The single index model and Portfolio Theory
To be completed

2.2     Estimation of the single index model by Least Squares
        Regression
Consider a sample of size T of observations on Rit and RMt . We use the lower case
variables rit and rMt to denote these observed values. The method of least squares
&nds the best &tting line to the scatter-plot of data as follows. For a given estimate
of the best &tting line

                                rbit = α    b
                                       bi + β i,M rMt , t = 1, . . . , T

create the T observed errors

                     b
                     εit = rit − rbit = rit − α    b
                                              bi − β i,M rMt , t = 1, . . . , T

Now some lines will &t better for some observations and some lines will &t better for
others. The least squares regression line is the one that minimizes the error sum of
squares (ESS)
                                          T
                                          X              T
                                                         X
                    SSR(α    b
                        b i, β                  ε2it =
                                                b                          b
                                                                      bi − β
                                                               (rit − α                2
                               i,M ) =                                       i,M rMt )
                                          t=1            t=1


The minimizing values of α         b
                           b i and β i,M are called the (ordinary) least squares (OLS) es-
timates of αi and β i,M . Notice that SSR(α       b
                                             b i, β                                        b
                                                                                      b i, β
                                                    i,M ) is a quadratic function in (α      i,M )
given the data and so the minimum values can be easily obtained using calculus. The
&rst order conditions for a minimum are
                              XT                            XT
                     ∂SSR                  b
             0 =                      bi − β
                          = −2 (rit − α      i,M rMt ) = −2     b
                                                                εit
                       bi
                      ∂α      t=1                           t=1
                                   XT                                  XT
                     ∂SSR                          b
             0 =              = −2     (rit − bi − β
                                              α      i,M rMt )rMt = −2     b
                                                                           εit rMt
                     ∂ βb i,M      t=1                                 t=1

which can be rearranged as
                                T
                                X                                 T
                                                                  X
                                      rit = T α    b
                                              bi + β                    rMt
                                                     i,M
                                t=1                               t=1
                          T
                          X                        T
                                                   X                     T
                                                                         X
                                          bi
                                rit rMt = α              rMt + βb i,M            2
                                                                                rMt
                          t=1                      t=1                    t=1




                                                    9
These are two linear equations in two unknowns and by straightforward substitution
the solution is
                                    α           b
                                    b i = r̄i − β i,M r̄M
                                              PT
                                               t=1 (rit − r̄i )(rMt − r̄M )
                               βb   i,M   =      PT                  2
                                                    t=1 (rMt − r̄M )

where
                                             T                 T
                                          1X                1X
                                    r̄i =       rit , r̄M =       rMt .
                                          T t=1             T t=1
   The equation for βb i,M can be rewritten slightly to show that βb i,M is a simple
function of variances and covariances. Divide the numerator and denominator of the
expression for βb i,M by T −1
                           1
                              to give
                                1 PT
                                      t=1 (rit − r̄i )(rMt − r̄M )   d it , RMt )
                                                                     cov(R
                 βb   i,M =
                              T −1
                                     1 PT                          =
                                           t=1 (rMt − r̄M )
                                                            2          d Mt )
                                                                       var(R
                                   T −1

which shows that βb i,M is the ratio of the estimated covariance between Rit and RMt
to the estimated variance of RMt .
    The least squares estimate of σ 2ε,i = var(εit ) is given by
                                     T                 T
                                1 X               1 X                b
                  σb 2ε,i =             eb2it =                 bi − β
                                                          (rt − α      i,M rMt )
                                                                                 2
                              T − 2 t=1         T − 2 t=1
The divisor T − 2 is used to make σb 2ε,i an unbiased estimator of σ 2ε,ι .
  The least squares estimate of R2 is given by
                                            2
                                    b 2  βb i,M σb 2M        σb 2ε,i
                                    Ri =              = 1−           ,
                                         d it )
                                         var(R             d it )
                                                           var(R
where
                                                          T
                                                     1 X
                                    d it ) =
                                    var(R                    (rit − r̄i )2 ,
                                                   T − 1 t=1
and gives a measure of the goodness of &t of the regression equation. Notice that
b 2 = 1 whenever σ
R                     b 2ε,i = 0 which occurs when bεit = 0 for all values of t. In other
  i
          b 2
words, Ri = 1 whenever the regression line has a perfect &t. Conversely, R        b2 = 0
                                                                                   i
         2
when σb ε,i = var(R
               d it ); that is, when the market does not explain any of the variability
of Rit . In this case, the regression has the worst possible &t.


3     Hypothesis Testing in the Single Index Model
3.1     A Review of Hypothesis Testing Concepts
To be completed.

                                                      10
3.2     Testing the Restriction α = 0.
Using the single index model regression,

                       Rt = α + βRMt + εt , t = 1, ..., T
                       εt ∼ iid N(0, σ 2ε ), εt is independent of RMt                               (4)

consider testing the null or maintained hypothesis α = 0 against the alternative that
α 6= 0
                              H0 : α = 0 vs. H1 : α 6= 0.
If H0 is true then the single index model regression becomes

                                          Rt = βRMt + εt

and E[Rt |RMt = rMt ] = βrMt . We will reject the null hypothesis, H0 : α = 0, if
the estimated value of α is either much larger than zero or much smaller than zero.
Assuming H0 : α = 0 is true, α̂ ∼ N (0, SE(α̂)2 ) and so is fairly unlikely that α̂ will
be more than 2 values of SE(α̂) from zero. To determine how big the estimated value
of α needs to be in order to reject the null hypothesis we use the t-statistic
                                                 αb −0
                                          tα=0 = d      ,
                                                 SE(αb)

where α                                           d α)
        b is the least squares estimate of α and SE( b is its estimated standard error.
The value of the t-statistic, tα=0 , gives the number of estimated standard errors that
b is from zero. If the absolute value of tα=0 is much larger than 2 then the data cast
α
considerable doubt on the null hypothesis α = 0 whereas if it is less than 2 the data
are in support of the null hypothesis3 . To determine how big | tα=0 | needs to be to
reject the null, we use the fact that under the statistical assumptions of the single
index model and assuming the null hypothesis is true

                     tα=0 ∼ Student − t with T − 2 degrees of freedom

If we set the signi&cance level (the probability that we reject the null given that the
null is true) of our test at, say, 5% then our decision rule is

                Reject H0 : α = 0 at the 5% level if |tα=0 | > |tT −2 (0.025)|

where tT −2 is the 2 12 % critical value (quantile) from a Student-t distribution with
T − 2 degrees of freedom.

Example 3 single index model Regression for IBM
   3
    This interpretation of the t-statistic relies on the fact that, assuming the null hypothesis is true
               b is normally distributed with mean 0 and estimated variance SE(b
so that α = 0, α                                                                  d α)2 .


                                                  11
   Consider the estimated MM regression equation for IBM using monthly data from
January 1978 through December 1982:
               b                                 2
                                                          b ε = 0.0524
               R IBM,t =−0.0002 + 0.3390 ·RMt , R = 0.20, σ
                          (0.0068)    (0.0888)


where the estimated standard errors are in parentheses. Here α      b = −0.0002, which is
                                                        d
very close to zero, and the estimated standard error, SE(α̂) = 0.0068, is much larger
than αb . The t-statistic for testing H0 : α = 0 vs. H1 : α 6= 0 is

                                      −0.0002 − 0
                             tα=0 =               = −0.0363
                                        0.0068
so that α b is only 0.0363 estimated standard errors from zero. Using a 5% signi&cance
level, |t58 (0.025)| ≈ 2 and
                                   |tα=0 | = 0.0363 < 2
so we do not reject H0 : α = 0 at the 5% level.

3.3     Testing Hypotheses about β
In the single index model regression β measures the contribution of an asset to the
variability of the market index portfolio. One hypothesis of interest is to test if the
asset has the same level of risk as the market index against the alternative that the
risk is diﬀerent from the market:

                                 H0 : β = 1 vs. H1 : β 6= 1.

The data cast doubt on this hypothesis if the estimated value of β is much diﬀerent
from one. This hypothesis can be tested using the t-statistic

                                              βb − 1
                                       tβ=1 = d b
                                              SE(β)

which measures how many estimated standard errors the least squares estimate of β
is from one. The null hypothesis is reject at the 5% level, say, if |tβ=1 | > |tT −2 (0.025)|.
Notice that this is a two-sided test.
     Alternatively, one might want to test the hypothesis that the risk of an asset is
strictly less than the risk of the market index against the alternative that the risk is
greater than or equal to that of the market:

                                 H0 : β = 1 vs. H1 : β ≥ 1.

Notice that this is a one-sided test. We will reject the null hypothesis only if the
estimated value of β much greater than one. The t-statistic for testing this null


                                                 12
hypothesis is the same as before but the decision rule is diﬀerent. Now we reject the
null at the 5% level if
                                 tβ=1 < −tT −2 (0.05)
where tT −2 (0.05) is the one-sided 5% critical value of the Student-t distribution with
T − 2 degrees of freedom.

Example 4 Single Index Regression for IBM cont d

   Continuing with the previous example, consider testing H0 : β = 1 vs. H1 : β 6= 1.
Notice that the estimated value of β is 0.3390, with an estimated standard error of
0.0888, and is fairly far from the hypothesized value β = 1. The t-statistic for testing
β = 1 is
                                     0.3390 − 1
                              tβ=1 =            = −7.444
                                       0.0888
which tells us that βb is more than 7 estimated standard errors below one. Since
t0.025,58 ≈ 2 we easily reject the hypothesis that β = 1.
     Now consider testing H0 : β = 1 vs. H1 : β ≥ 1. The t-statistic is still -7.444
but the critical value used for the test is now −t58 (0.05) ≈ −1.671. Clearly, tβ=1 =
−7.444 < −1.671 = −t58 (0.05) so we reject this hypothesis.


4    Estimation of the single index model: An Ex-
     tended Example
Now we illustrate the estimation of the single index model using monthly data on
returns over the ten year period January 1978 - December 1987. As our dependent
variable we use the return on IBM and as our market index proxy we use the CRSP
value weighted composite monthly return index based on transactions from the New
York Stock Exchange and the American Stock Exchange. Let rt denote the monthly
return on IBM and rMt denote the monthly return on the CRSP value weighted index.
Time plots of these data are given in &gure 1 below.




                                          13
                   Monthly Returns on IBM                                   Monthly Returns on Market Index
 0.2                                                        0.2


 0.1                                                        0.1


 0.0                                                        0.0


 -0.1                                                      -0.1


 -0.2                                                      -0.2


 -0.3                                                      -0.3
        78   79   80   81   82   83    84   85   86   87          78   79   80   81   82    83   84   85   86   87

                                 IBM                                                       MARKET




                                                      Figure 1

   Notice that the IBM and the market index have similar behavior over the sample
with the market index looking a little more volatile than IBM. Both returns dropped
sharply during the October 1987 crash but there were a few times that the market
dropped sharply whereas IBM did not. Sample descriptive statistics for the returns
are displayed in &gure 2.
   The mean monthly returns on IBM and the market index are 0.9617% and 1.3992%
per month and the sample standard deviations are 5.9024% and 6.8353% per month,
respectively.. Hence the market index on average had a higher monthly return and
more volatility than IBM.




                                                           14
                         Monthly Returns on IBM                                  Monthly Returns on Market Index

    12                                                               30


    10                                                               25


     8                                                               20


     6                                                               15

     4                                                               10


     2                                                                5


     0                                                                0
         -0.15   -0.10     -0.05    0.00      0.05    0.10   0.15         -0.2          -0.1           0.0         0.1

                   Series: IBM                                                     Series: MARKET
                   Sample 1978:01 1987:12                                          Sample 1978:01 1987:12
                   Observations 120                                                Observations 120

                   Mean                  0.009617                                  Mean                0.013992
                   Median                0.002000                                  Median              0.012000
                   Maximum               0.150000                                  Maximum             0.148000
                   Minimum              -0.187000                                  Minimum            -0.260000
                   Std. Dev.             0.059024                                  Std. Dev.           0.068353
                   Skewness             -0.036491                                  Skewness           -1.104576
                   Kurtosis              3.126664                                  Kurtosis            5.952204

                   Jarque-Bera             0.106851                                Jarque-Bera         67.97932
                   Probability             0.947976                                Probability         0.000000



                                                              Figure 2

   Notice that the histogram of returns on the market are heavily skewed left whereas
the histogram for IBM is much more sysingle index modeletric about the mean. Also,
the kurtosis for the market is much larger than 3 (the value for normally distributed
returns) and the kurtosis for IBM is just slightly larger than 3. The negative skewness
and large kurtosis of the market returns is caused by several large negative returns.
The Jarque-Bera statistic for the market returns is 67.97, with a p-value 0.0000, and
so we can easily reject the hypothesis that the market data are normally distributed.
However, the Jarque-Bera statistic for IBM is only 0.1068, with a p-value of 0.9479,
and we therefore cannot reject the hypothesis of normality.
   The single index model regression is

                                       Rt = α + βRMt + εt , t = 1, . . . , T

where it is assumed that εt ∼ iid N(0, σ 2 ) and is independent of RMt . We estimate
this regression using the &rst &ve years of data from January 1978 - December 1982.
In practice the single index model is seldom estimated using data covering more than
&ve years because it is felt that β may change through time. The computer printout
from Eviews is given in &gure 3 below




                                                                    15
                                       Figure 3

4.1    Explanation of Computer Output
The the items under the column labeled Variable are the variables in the estimated
regression model. The variable C refers to the intercept in the regression and
 MARKET refers to rMt . The least squares regression coeﬃcients are reported in
the column labeled Coeﬃcient and the estimated standard errors for the coeﬃcients
are in then next column. A standard way of reporting the estimated equation is

                             rbt =0.0053 + 0.3278 ·rMt
                                  (0.0069)        (0.0890)

where the estimated standard errors are reported underneath the estimated coeﬃ-
cients. The estimated intercept is close to zero at 0.0053, with a standard error of
           d α)),
0.0069 (= SE( b    and the estimated value of β is 0.3278, with an standard error of
           d   b
0.0890 (= SE(β)).   Notice that the estimated standard error of βb is much smaller
than the estimated coeﬃcient and indicates that β is estimated reasonably precisely.
The estimated regression equation is displayed graphically in &gure 4 below.




                                             16
                                       Market Model Regression
                0.2



                0.1
         IBM




                0.0



               -0.1



               -0.2
                      -0.3     -0.2       -0.1          0.0       0.1         0.2

                                                 MARKET

                                        Figure 4

     To evaluate the overall &t of the single index model regression we look at the R2 of
the regression, which measures the percentage of variability of Rt that is attributable
to the variability in RMt , and the estimated standard deviation of the residuals, σb ε .
From the table, R2 = 0.190 so the market index explains only 19% of the variability
of IBM and 81% of the variability is not explained by the market. In the single index
model regression, we can also interpret R2 as the proportion of market risk in IBM
and 1 − R2 as the proportion of &rm speci&c risk. The standard error (S.E.) of the
regression is the square root of the least squares estimate of σ 2ε = var(εt ). From the
above table, σb ε = 0.052. Recall, εt captures the &rm speci&c risk of IBM and so σb ε is
an estimate of the typical magnitude of the &rm speci&c risk. In order to interpret the
magnitude of σb ε it is useful to compare it to the estimate of the standard deviation
of Rt , which measures the total risk of IBM. This is reported in the table by the
standard deviation (S.D.) of the dependent variable which equals 0.057. Notice that
σb ε = 0.052 is only slightly smaller than 0.057 so that the &rm speci&c risk is a large
proportion of total risk (which is also reported by 1 − R2 ).
     Con&dence intervals for the regression parameters are easily computed using the
reported regression output. Since εt is assumed to be normally distributed 95%
con&dence intervals for α and β take the form

                                       α       d α
                                       b ± 2 · SE( b)
                                       b       d   b
                                       β ± 2 · SE(β)


                                           17
The 95% con&dence intervals are then

                      α : 0.0053 ± 2 · 0.0069 = [−.0085, 0.0191]
                      β : 0.3278 ± 2 · 0.0890 = [0.1498, 0.5058]

Our best guess of α is 0.0053 but we wouldn t be too surprised if it was as low as
-0.0085 or as high as 0.0191. Notice that there are both positive and negative values
in the con&dence interval. Similarly, our best guess of β is 0.3278 but it could be as
low as 0.1498 or as high as 0.5058. This is a fairly wide range given the interpretation
of β as a risk measure. The interpretation of these intervals are as follows. In
repeated samples, 95% of the time the estimated con&dence intervals will cover the
true parameter values.
    The t-statistic given in the computer output is calculated as
                                         estimated coeﬃcient − 0
                         t-statistic =
                                                std. error
and it measures how many estimated standard errors the estimated coeﬃcient is away
from zero. This t-statistic is often referred to as a basic signi&cance test because it
tests the null hypothesis that the value of the true coeﬃcient is zero. If an estimate is
several standard errors from zero, so that it s t-statistic is greater than 2, then it is a
good bet that the true coeﬃcient is not equal to zero. From the data in the table, the
                                   b = 0.0053 is 0.767 standard errors from zero. Hence
t-statistic for α is 0.767 so that α
it is quite likely that the true value of α equals zero. The t-statistic for β is 3.684,
βb is more than 3 standard errors from zero, and so it is very unlikely that β = 0.
The Prob Value (p-value of the t-statistic) in the table gives the likelihood (computed
from the Student-t curve) that, given the true value of the coeﬃcient is zero, the data
would generate the observed value of the t-statistic. The p-value for the t-statistic
testing α = 0 is 0.4465 so that it is quite likely that α = 0. Alternatively, the p-value
for the t-statistic testing β = 0 is 0.001 so it is very unlikely that β = 0.

4.2    Analysis of the Residuals
The single index model regression makes the assumption that εt ∼ iid N (0, σ 2ε ). That
is the errors are independent and identically distributed with mean zero, constant
variance σ 2ε and are normally distributed. It is always a good idea to check the
behavior of the estimated residuals, εbt , and see if they share the assumed properties
of the true residuals εt . The &gure below plots rt (the actual data), rbt = α     b
                                                                              b + βr Mt
(the &tted data) and εbt = rt − rbt (the estimated residual data).




                                             18
                              Market Model Regression for IBM
                                                                         0.2

                                                                         0.1

                                                                         0.0
          0.15
          0.10                                                           -0.1
          0.05
                                                                         -0.2
          0.00
         -0.05
         -0.10
         -0.15
                 1978      1979        1980          1981        1982

                            Residual            Actual          Fitted

                                        Figure 5

    Notice that the &tted values do not track the actual values very closely and that
the residuals are fairly large. This is due to low R2 of the regression. The residuals
appear to be fairly random by sight. We will develop explicit tests for randomness
later on. The histogram of the residuals, displayed below, can be used to investigate
the normality assumption. As a result of the least squares algorithm the residuals
have mean zero as long as a constant is included in the regression. The standard
deviation of the residuals is essentially equal to the standard error of the regression
- the diﬀerence being due to the fact that the formula for the standard error of the
regression uses T − 2 as a divisor for the error sum of squares and the standard
deviation of the residuals uses the divisor T − 1.




                                           19
                 Residuals from Market Model Regression for IBM
          8
                                                                     Series: Residuals
                                                                     Sample 1978:01 1982:12
                                                                     Observations 60
          6
                                                                     Mean           -2.31E-19
                                                                     Median         -0.000553
                                                                     Maximum         0.139584
          4
                                                                     Minimum        -0.104026
                                                                     Std. Dev.       0.051567
                                                                     Skewness        0.493494
          2                                                          Kurtosis        2.821260

                                                                     Jarque-Bera     2.515234
                                                                     Probability     0.284331
          0
              -0.10     -0.05     0.00       0.05      0.10

                                                 Figure 6

    The skewness of the residuals is slightly positive and the kurtosis is a little less
than 3. The hypothesis that the residuals are normally distributed can be tested
using the Jarque-Bera statistic. This statistic is a function of the estimated skewness
and kurtosis and is give by
                                                Ã                    !
                                         T                 c − 3)2
                                                          (K
                                    JB =            Sb2 +
                                         6                   4

where Sb denotes the estimated skewness and K   c denotes the estimated kurtosis. If
the residuals are normally distribued then Sb ≈ 0 and Kc ≈ 3 and JB ≈ 0. Therefore,
   b                                     c
if S is moderately diﬀerent from zero or K is much diﬀerent from 3 then JB will get
large and suggest that the data are not normally distributed. To determine how large
JB needs to be to be able to reject the normality assumption we use the result that
under the maintained hypothesis that the residuals are normally distributed JB has
a chi-square distribution with 2 degrees of freedom:
                                                JB ∼ χ22 .
For a test with signi&cance level 5%, the 5% right tail critical value of the chi-square
distribution with 2 degrees of freedom, χ22 (0.05), is 5.99 so we would reject the null
that the residuals are normally distributed if JB > 5.99. The Probability (p-value)
reported by Eviews is the probability that a chi-square random variable with 2 degrees
of freedom is greater than the observed value of JB :
                                         P (χ22 ≥ JB) = 0.2843.
For the IBM residuals this p-value is reasonably large and so there is not much data
evidence against the normality assumption. If the p-value was very small, e.g., 0.05 or
smaller, then the data would suggest that the residuals are not normally distributed.

                                                     20



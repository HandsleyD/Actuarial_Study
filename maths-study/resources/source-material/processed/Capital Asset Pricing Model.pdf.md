---
normalized_id: shared-pdf-reference-capital-asset-pricing-model
exam_code: SHARED
material_scope: capital asset pricing model.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Capital Asset Pricing Model.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-capital-asset-pricing-model

        Introduction to Financial Econometrics
           The Capital Asset Pricing Model
                               Eric Zivot
                        Department of Economics
                        University of Washington
                               March 2, 2000


1. The Capital Asset Pricing Model
The capital asset pricing model (CAPM) is an equilibrium model for expected
returns and relies on a set of rather strict assumptions.
   CAPM Assumptions

  1. Many investors who are all price takers
  2. All investors plan to invest over the same time horizon

  3. There are no taxes or transactions costs

  4. Investors can borrow and lend at the same risk-free rate over the planned
     investment horizon

  5. Investors only care about expected return and variance. Investors like ex-
     pected return but dislike variance. (A suﬃcient condition for this is that
     returns are all normally distributed)

  6. All investors have the same information and beliefs about the distribution
     of returns

  7. The market portfolio consists of all publicly traded assets

   The implications of these assumptions are as follows
  1. All investors use the Markowitz algorithm to determine the same set of
     eﬃcient portfolios. That is, the eﬃcient portfolios are combinations of the
     risk-free asset and the tangency portfolio and everyone’s determination of
     the tangency portfolio is the same.
  2. Risk averse investors put a majority of wealth in the risk-free asset (i.e. lend
     at the risk-free rate) whereas risk tolerant investors borrow at the risk-free
     rate and leverage their holdings of the tangency portfolio. In equilibrium
     total borrowing and lending must equalize so that the risk-free asset is in
     zero net supply when we aggregate across all investors.
  3. Since everyone holds the same tangency portfolio and the risk-free asset is
     in zero net supply in the aggregate, when we aggregate over all investors the
     aggregate demand for assets is simply the tangency portfolio. The supply
     of all assets is simply the market portfolio (where the weight of an asset
     in the market portfolio is just the market value of the asset divided by the
     total market value of all assets) and in equilibrium supply equal demand.
     Therefore, in equilibrium the tangency portfolio is the market portfolio.
  4. Since the market portfolio is the tangency portfolio and the tangency port-
     folio is (mean-variance) eﬃcient the market portfolio is also (mean-variance)
     eﬃcient.
  5. Since the market portfolio is eﬃcient and there is a risk-free asset the security
     market line (SML) pricing relationship holds for all assets (and portfolios)
                            E[Ri ] = rr + β i,M (E[RMt ] − rf )
     or
                                µi = rf + β i,M (µM − rf )
     where Ri denotes the return on any asset or portfolio i, RM denotes the
     return on the market portfolio and β i,M = cov(Ri , RM )/var(Rm ). The SML
     says that there is a linear relationship between the expected return on an
     asset and the “beta” of that asset with the market portfolio. Given a value
     for the market risk premium, E[Ri ]− rf > 0, the higher the beta on an asset
     the higher the expected return on the asset and vice-versa.
   The SML relationship can be rewritten in terms of risk premia by simply
subtracting rf from both side of the SML equation:
                         E[Ri ] − rf = β i,M (E[RMt ] − rf )

                                         2
or
                             µi − rf = β i,M (µM − rf )
and this linear relationship is illustrated graphically in figure 1. In terms of risk
premia, the SML intersects the vertical axis at zero and has slope equal to µM −rf ,
the risk premium on the market portfolio (which is assumed to be positive). Low
beta assets (less than 1) have risk premia less than the market and high beta
(greater than 1) assets have risk premia greater than the market.

1.1. Relationship Between the Market Model and the CAPM
The CAPM is encompassed within the market model in the following way. First,
consider the market model regression

                 Rit = αi + β i,M RMt + εit , t = 1, ..., T                     (1.1)
                 εit ∼ iid N (0, σ 2 ), εit is independent of RMt

where RMt denotes the return on the “Market portfolio”. Usually, the market
portfolio is proxied by some value-weighted index of stocks like the S&P 500
index. Let rf denote the risk-free rate (rate on T-bill). Now subtract rf from
both sides of (1.1) to give

                    Rit − rf = αi − rf + β i,M (RMt − rf ) + εit .              (1.2)

Next, add and subtract β M rf from the right-hand-side of (1.2) and re-arrange to
give

              Rit − rf = αi − rf (1 − β i,M ) + β i,M (RMt − rf ) + εit         (1.3)
                       = α∗i + β i,M (RMt − rf ) + εit

where
                              α∗i = αi − rf (1 − β i,M ).
Equation (1.3) gives the market model where the return on the asset and the return
on the market are expressed in excess of the risk-free rate rf . This re-expressed
market model is called the excess return market model.




                                          3
1.2. A Simple Regression Test of the CAPM
The SML relationship allows a test of the CAPM using a modified version of the
market model regression equation. To see this, consider the excess return market
model regression equation
              Rit − rf = α∗i + β i,M (RMt − rf ) + εit , t = 1, ..., T
                    εit ∼ iid N (0, σ 2 ), εit is independent of RMt           (1.4)
where Rt denotes the return on any asset or portfolio and RMt is the return on
some proxy for the market portfolio. Taking expectations of both sides of the
excess return market model regression gives
                      E[Rit ] − rf = α∗i + β i,M (E[RMt ] − rf )               (1.5)
and from the SML we see that the CAPM imposes the restriction
                                       α∗i = 0
for every asset or portfolio i. A simple testing strategy is as follows
   • Estimate the excess return market model for every asset trades
   • Test that α∗i = 0 in every regression
   The value of α∗i in the excess returns market model has an interesting inter-
pretation. Suppose that α∗i > 0. Then from (1.5) we have that
                   α∗i = (E[Rit ] − rf ) − β i,M (E[RMt ] − rf ) > 0
which indicates that the asset is yielding an excess expected return higher than the
CAPM predicts. One might think that this is a good stock to hold. The CAPM
would predict that this stock is underpriced (price is too low in the market)
because it’s expected excess return is higher than what the CAPM predicts. In
order for the expected return to fall, the current price of the stock needs to rise.

1.3. A Simple Prediction Test of the CAPM
Consider again the SML equation for the CAPM. The SML implies that there is a
simple positive linear relationship between expected returns on any asset and the
beta of that asset with the market portfolio. High beta assets have high expected
returns and low beta assets have low expected returns. This linear relationship
can be tested in the following way. Suppose we have a time series of returns on
i = 1, . . . , N assets (say 10 years of monthly data).

                                          4
   • Split a sample of time series data on returns into two equal sized subsamples.

   • Estimate β i,M for each asset in the sample using the first subsample of data.
     This gives N estimates of β i,M .

   • Using the second subsample of data, compute the average returns on the N
     assets (this is an estimate of E[Ri ] = µi ). This give N estimates of µi .

   • Plot the SML using the estimated betas and average returns and see if it
     intersects at zero on the vertical axis and has slope equal to the average risk
     premium on the market portfolio.

2. Testing the CAPM using the Excess Return Market Model
In this section, we illustrate how to carry out some simple hypothesis tests con-
cerning the parameters of the excess returns market model regression. Before we
begin, we review some basic concepts from the theory of hypothesis testing.

2.1. Testing the CAPM Restriction α∗i = 0.
Using the market model regression,

               Ri,t − rf = α∗i + β i,M (RMt − rf ) + εit , t = 1, ..., T
                      εit ∼ iid N(0, σ 2 ), εit is independent of RMt              (2.1)

consider testing the null or maintained hypothesis that the CAPM holds for an
asset against the alternative hypothesis that the CAPM does not hold. These
hypotheses can be formulated as the two-sided test

                             H0 : α∗i = 0 vs. H1 : α∗i 6= 0.

We will reject the null hypothesis, H0 : α∗i = 0, if the estimated value of α∗i is
either much larger than zero or much smaller than zero. To determine how big
the estimated value of α∗i needs to be in order to reject the CAPM we use the
t-statistic
                                        αb∗ − 0
                                tα=0 = di ∗ ,
                                        SE(α bi )

where α                                              d α
       b ∗i is the least squares estimate of α∗i and SE( b ∗i ) is its estimated standard
error. The value of the t-statistic, tα=0 , gives the number of estimated standard

                                           5
errors that α b ∗i is from zero. If the absolute value of tα=0 is much larger than 2
then the data cast considerable doubt on the null hypothesis α∗i = 0 whereas if it
is less than 2 the data are in support of the null hypothesis1 . To determine how
big | tα=0 | needs to be to reject the null, we use the fact that under the statistical
assumptions of the market model and assuming the null hypothesis is true
                  tα=0 ∼ Student − t with T − 2 degrees of freedom
If we set the significance level (the probability that we reject the null given that
the null is true) of our test at, say, 5% then our decision rule is
                Reject H0 : α∗i = 0 at the 5% level if |tα=0 | > t0.025,T −2
where t0.025,T −2 is the 2 12 % critical value from a Student-t distribution with T − 2
degrees of freedom.
Example 2.1. CAPM Regression for IBM
   To illustrate the testing of the CAPM using the excess returns market model
regression consider the regression output in figure 2




   1
    This interpretation of the t-statistic relies on the fact that, assuming the null hypothesis is
                    b is normally distributed with mean 0 and estimated variance SE(b
true so that α = 0, α                                                                 d α)2 .


                                                6
   The estimated regression equation using monthly data from January 1978
through December 1982 is
         d− r =−0.0002 + 0.3390 ·(R              2        b = 0.0524
      RIBM,t f                      M,t − rf ), R = 0.20, σ
                      (0.0068)     (0.0888)


where the estimated standard errors are in parentheses. Here α     b ∗IBM = −0.0002,
which is very close to zero, and the estimated standard error is 0.0068 is much
            b ∗IBM . The t-statistic for testing H0 : α∗IBM = 0 vs. H1 : α∗IBM 6= 0 is
larger than α
                                   −0.0002 − 0
                          tα=0 =               = −0.0363
                                     0.0068
so that αb ∗IBM is only 0.0363 estimated standard errors from zero. Using a 5%
significance level, t0.025,58 ≈ 2 and

                                 |tα=0 | = 0.0363 < 2

so we do not reject H0 : α∗IBM = 0 at the 5% level. Therefore, the CAPM appears
to hold for IBM.




                                              7



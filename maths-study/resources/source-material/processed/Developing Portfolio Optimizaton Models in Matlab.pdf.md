---
normalized_id: shared-pdf-reference-developing-portfolio-optimizaton-models-in-matlab
exam_code: SHARED
material_scope: developing portfolio optimizaton models in matlab.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Developing Portfolio Optimizaton Models in Matlab.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-developing-portfolio-optimizaton-models-in-matlab

Developing Portfolio
                                                                  Using the Dow Jones Industrial Average as
                                                                  a benchmark, we will implement a portfolio
                                                                  optimization methodology based on capital

  Optimization Models                                             asset pricing and mean-variance analysis.
                                                                  Our goals are to use consistent, repeatable
                                                                  steps and to construct realistic, optimal
                                                                  portfolios that are stable over time.
By Bob Taylor
                                                                  Estimating Asset
                                                                  Return Moments
Portfolio optimization was first developed in the 1950s, but      The mean and covariance of asset returns are
                                                                  primary inputs for portfolio optimization.
a number of practical and theoretical problems have limited       Estimating these moments involves three
                                                                  tasks: acquiring data, dealing with missing
its use by investment managers. For example, it is often          data, and setting up a suitable benchmark.
difficult to obtain sufficient high-quality historical data for   Acquiring Data

thorough analysis. In addition, the efficient frontier where      We use MATLAB and Datafeed Toolbox
                                                                  to obtain return data for stocks and mar-
optimal portfolios lie tends to shift over time, quickly making   ket indexes. In our example we acquire
                                                                  monthly total return data on 44 blue-chip
these portfolios suboptimal.                                      stocks and the Dow Jones Industrial Aver-
Modern data analysis tools, such as MATLAB® and                   age (DJIA) from Yahoo! Finance.

                                                                  Dealing with Missing Data
Financial Toolbox, can overcome these challenges.
                                                                  Unfortunately, historical financial data is often
                                                                  messy and incomplete. We use the Financial
                                                                  Toolbox function ecmnmle to deal with data
                                                                  sets that have missing values (represented as
                                                                  NaNs in MATLAB). This function uses all
                                                                  available data to obtain best estimates for asset
                                                                  return moments in the presence of NaNs—a
                                                                  nice alternative to the usual ad hoc approaches.

                                                                  Setting up a Benchmark
                                                                  We use a market index as our benchmark,
                                                                  since market return is the main driver of
                                                                  asset returns in capital asset pricing. By
                                                                  removing market returns from the data we
                                                                  can focus on non-market returns and risks.
                                                                  In our example we subtract the return of
                                                                  the DJIA from individual asset returns.

                                                                  Using Classic
                                                                  Mean-Variance Analysis
                                                                  In mean-variance analysis, expected return is
                                                                  plotted against risk (the standard deviation of
                                                                  asset returns) for a given portfolio. We gener-
Figure 1. The efficient frontier.                                 ate random combinations of portfolio weights
                                                                  to produce a scatter plot of the expected return
                                                                  and risk for each portfolio (Figure 1).
Each red dot represents the mean and                   return or risk and with consistently positive
standard deviation of a portfolio. The blue            expected returns relative to the market.
line is the efficient frontier. Portfolios on
                                                       Backtesting
the efficient frontier have maximum re-
                                                       Now that we have identified a set of portfolios
turn for a given level of risk or, alterna-
                                                       that are both efficient and stable, we can per-
tively, minimum risk for a given level of
                                                       form an ex post analysis, examining turnover,
return. Clearly, a rational investor will se-
                                                       drawdown, and realized average return to see
lect a portfolio on the efficient frontier.
                                                       how these portfolios actually performed.
 The portopt function in Financial Tool-
box lets us determine directly which                   Turnover
portfolios of assets lie along the efficient           Turnover refers to the change in portfolio
frontier given the means and covariances               holdings over time due to trading. A port-
of individual asset returns.                           folio with annual turnover of 25% will re-
                                                       place a quarter of its assets over a one-year       Figure 3. Average turnover for portfolio sequences in the
Finding a Stable Region                                                                                    stable region is around 25%.
Because the efficient frontier shifts over time,       period. Since trading is costly, low turnover
a once-efficient portfolio may be not be on            is a desirable feature of a portfolio strategy.
the efficient frontier in subsequent time pe-          Figure 3 shows the annual turnover for the
riods. In addition, it is not clear which port-        portfolio sequences on our efficient fron-
folio to select on the efficient frontier.             tiers, with the blue line representing the re-
One solution is to study the time evo­lution of        sults of the analysis after removing market
efficient frontiers and identify a sequence of         returns. Note that in the stable region, with
portfolios that remain relatively stable from          the first eight portfolio sequences, the an-
one efficient frontier to the next. We can use         nual turnover remains at 25% or less.
MATLAB to visualize this stable region.                Drawdown
Figure 2 shows efficient frontiers plotted as
                                                            Evaluating the maximum drawdown of a
a function of time. MATLAB has calculated
                                                            portfolio is a good way to measure ex post risk.
efficient frontiers with 40 portfolios on each
                                                            Maximum drawdown refers to the amount a
frontier at one-month intervals and plotted
                                                            portfolio declines in value relative to its peak
the results. Figure 2 underscores the value
                                                            value. It represents the worst possible perfor-
of taking the market out of the data: We can                                                                 Figure 4. Drawdown in the stable region is the same
                                                            mance over any time period.
identify sequences of portfolios—those in                                                                    as the DJIA.
                                                            In Figure 4, the green line represents the
the deep blue region­—with little variation of
                                                            maximum drawdown of the DJIA over
                                                                            our back-test period—roughly         Average Return
                                                                            20%. The flat part of the blue       One of the simplest performance measure-
                                                                            line represents the maximum          ments is to determine a portfolio’s average
                                                                            drawdown for the portfolio           mean and standard deviation of returns.
                                                                            sequences through the stable         We have already determined that the port-
                                                                            region and closely mirrors the       folio sequences in the stable region have
                                                                            maximum drawdown of the              reasonable levels of risk compared to the
                                                                            DJIA. Since our goal is to as-       benchmark. But do those same portfolios
                                                                            semble portfolios with risk and      deliver superior returns?
                                                                            return characteristics similar       We plot the average of ex post returns versus
                                                                            to the Dow Jones Average,            risk of a portfolio or index. In Figure 5, the
                                                                            this is a good result—it shows       red star represents the return and risk of the
                                                                            that the risk of these portfolio     DJIA benchmark over our backtest period.
                                                                            sequences is comparable to           Each blue circle corresponds to a portfolio
 Figure 2. Efficient frontiers at one-month intervals with market           our benchmark.
 returns removed.
                                                                                                                 sequence. The circles closest to



                                                                            Reprinted from TheMathWorks News&Notes |          October 2006 |      www.mathworks.com
                                                            Next Steps
                                                            By enabling analysts to acquire data, esti-         Portfolio Optimization
                                                            mate asset return moments, form optimized           Glossary
                                                            portfolios, visualize concepts, and backtest
                                                            results, MATLAB provides a platform that            Basis Point. A measure of return. One
                                                            facilitates financial analysis.                     basis point = 1/100 %.
                                                            The approach described here is a good starting      Capital Asset Pricing Model (CAPM).
                                                            point for a portfolio optimization model. An        A model in which the return for any
                                                            institutional investor using this model would       security or portfolio of securities equals
                                                            probably want to incorporate transaction costs      the riskless rate plus a risk premium
                                                            and trading constraints into the model. Never-      that is proportional to the excess mar-
                                                            theless, the potential to beat the market by an     ket return (market return minus the
Figure 5. Annual returns plotted against risk for portfo-
lio sequences.                                              average 150 basis points with low turnover is       riskless rate).
                                                            an encouraging first step. 7
                                                                                                                Efficient frontier. The combination of all
the star are portfolio sequences in the stable
                                                                                                                efficient portfolios (those that deliver
region—those with the lowest risk and the                   References
                                                                                                                the highest possible return for a given
highest annualized returns. In fact, some
                                                            Haugen, Robert and Nardin Baker,                    level of risk).
portfolios outperformed the DJIA by about
                                                            	“Dedicated Stock Portfolios,”
150 basis points with comparable risk and                                                                       Ex ante analysis. An analysis per-
                                                                  Journal of Portfolio Management,
less than 25% turnover per year.                                                                                formed before any action is taken.
                                                                  Summer 1990, pp. 17-22.
Finally, we evaluate performance relative
to the DJIA by plotting the net cumulative                                                                      Ex post analysis. An analysis per-
                                                            ———, “The Efficient Market Inefficiency
value of a dollar investment in the port-                                                                       formed after action is taken and results
                                                                 of Capitalization-Weighted Stock
folio sequences versus the DJIA. Over the                                                                       have been realized. An historical ex
                                                                 Portfolios,” Journal of Portfolio
backtest period, the portfolio sequences                                                                        post analysis of investment perfor-
                                                                 Management, Spring 1991, pp. 35-40.
along the stable region consistently outper-                                                                    mance is called a backtest.
formed the benchmark (represented by the
                                                            Markowitz, Harry, Portfolio Selection:              Maximum drawdown. The maximum
blue plane in Figure 6). Essentially, only the
                                                            	Efficient Diversification of Investments,         decline in total equity from peak to
sequences in the stable region were above
                                                                 John Wiley & Sons, Inc., 1959.                 subsequent trough.
the “water level” of the DJIA.
                                                                                                                Mean-variance analysis. A method to
                                                                                                                select optimal portfolios based on the
                                                                                                                mean and covariance of asset returns.

                                                                                                                Risk. The standard deviation of asset
                                                                                                                total returns.

                                                                                                                Turnover. A measure of how much the
                                                                                                                holdings in a portfolio change over a
                                                                                                                specific time period.




                                                                                                                Resources
                                                                                                              4Financial Modeling and Analysis
                                                                                                                 www.mathworks.com/res/fin_modeling
                                                                                                              4MATLAB Central: Using MATLAB to Develop Portfolio
                                                                                                                 Optimization Models
                                                                                                                 www.mathworks.com/res/mlcmodels
Figure 6. Cumulative relative returns for each portfolio sequence.
©1994-2006 by The MathWorks, Inc. MATLAB, Simulink, Stateflow, Handle Graphics, Real-Time Workshop, and xPC TargetBox are registered trademarks and SimBiology, SimEvents,
and SimHydraulics are trademarks of The MathWorks, Inc. Other product or brand names are trademarks or registered trademarks of their respective holders.

                                                                                                                                               91427v00 10/06



---
normalized_id: shared-pdf-reference-introduction-to-computational-finance-and-financial-econometrics-by-eric-zivot
exam_code: SHARED
material_scope: introduction to computational finance and financial econometrics by eric zivot.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Introduction to Computational Finance and Financial Econometrics by Eric Zivot.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-introduction-to-computational-finance-and-financial-econometrics-by-eric-zivot

 Introduction to Computational Finance and
           Financial Econometrics
    Chapter 1 Asset Return Calculations
                         Eric Zivot
      Department of Economics, University of Washington
                         December 31, 1998
                       Updated: January 7, 2002


1     The Time Value of Money

Consider an amount $V invested for n years at a simple interest rate of R
per annum (where R is expressed as a decimal). If compounding takes place
only at the end of the year the future value after n years is

                            F Vn = $V · (1 + R)n .

Example 1 Consider putting $1000 in an interest checking account that
pays a simple annual percentage rate of 3%. The future value after n = 1, 5
and 10 years is, respectively,

                     F V1 = $1000 · (1.03)1 = $1030
                     F V5 = $1000 · (1.03)5 = $1159.27
                    F V10 = $1000 · (1.03)10 = $1343.92.


    If interest is paid m time per year then the future value after n years is
                                       µ         ¶m·n
                                             R
                          F Vnm = $V · 1 +              .
                                             m

                                       1
R
m
  is often referred to as the periodic interest rate. As m, the frequency of
compounding, increases the rate becomes continuously compounded and it
can be shown that future value becomes
                                     µ              ¶m·n
                                        R
                 F Vnc = m→∞
                          lim $V ·   1+                    = $V · eR·n ,
                                        m

where e(·) is the exponential function and e1 = 2.71828.

Example 2 If the simple annual percentage rate is 10% then the value of
$1000 at the end of one year (n = 1) for diﬀerent values of m is given in the
table below.

    Compounding Frequency Value of $1000 at end of 1 year (R = 10%)
    Annually (m = 1)                         1100
    Quarterly (m = 4)                       1103.8
    Weekly (m = 52)                         1105.1
    Daily (m = 365)                        1105.515
    Continuously (m = ∞)                   1105.517

    We now consider the relationship between simple interest rates, periodic
rates, eﬀective annual rates and continuously compounded rates. Suppose
an investment pays a periodic interest rate of 2% each quarter. This gives
rise to a simple annual rate of 8% (2% ×4 quarters). At the end of the year,
$1000 invested accrues to
                             µ               ¶4·1
                                 0.08
                     $1000 · 1 +                    = $1082.40.
                                  4
The eﬀective annual rate, RA , on the investment is determined by the rela-
tionship
                       $1000 · (1 + RA ) = $1082.40,
which gives RA = 8.24%. The eﬀective annual rate is greater than the simple
annual rate due to the payment of interest on interest.
   The general relationship between the simple annual rate R with payments
m time per year and the eﬀective annual rate, RA , is
                                         µ            ¶m·1
                                         R
                         (1 + RA ) = 1 +                     .
                                         m


                                         2
Example 3 To determine the simple annual rate with quarterly payments
that produces an eﬀective annual rate of 12%, we solve
                                   µ        ¶
                                         R 4
                        1.12 =       1+       =⇒
                                   ³
                                         4       ´
                          R =       (1.12)1/4 − 1 · 4
                            =      0.0287 · 4
                            =      0.1148

    Suppose we wish to calculate a value for a continuously compounded rate,
Rc , when we know the m−period simple rate R. The relationship between
such rates is given by              µ        ¶
                              Rc          R m
                             e = 1+             .                        (1)
                                          m
Solving (1) for Rc gives
                                        µ        ¶
                                                R
                              Rc = m ln 1 +       ,                      (2)
                                                m
and solving (1) for R gives
                                    ³            ´
                              R = m eRc /m − 1 .                         (3)

Example 4 Suppose an investment pays a periodic interest rate of 5% every
six months (m = 2, R/2 = 0.05). In the market this would be quoted as
having an annual percentage rate of 10%. An investment of $100 yields
$100 · (1.05)2 = $110.25 after one year. The eﬀective annual rate is then
10.25%. Suppose we wish to convert the simple annual rate of R = 10% to
an equivalent continuously compounded rate. Using (2) with m = 2 gives

                        Rc = 2 · ln(1.05) = 0.09758.

That is, if interest is compounded continuously at an annual rate of 9.758%
then $100 invested today would grow to $100 · e0.09758 = $110.25.


2    Asset Return Calculations


                                        3
2.1     Simple Returns
Let Pt denote the price in month t of an asset that pays no dividends and
let Pt−1 denote the price in month t − 11 . Then the one month simple net
return on an investment in the asset between months t − 1 and t is defined
as
                               Pt − Pt−1
                          Rt =           = %∆Pt .                      (4)
                                  Pt−1
Writing PtP−P t−1
            t−1
                  = PPt−1
                       t
                          − 1, we can define the simple gross return as
                                         Pt
                                    1 + Rt = .                          (5)
                                        Pt−1
Notice that the one month gross return has the interpretation of the future
value of $1 invested in the asset for one month. Unless otherwise stated,
when we refer to returns we mean net returns.
   (mention that simple returns cannot be less than 1 (100%) since prices
cannot be negative)
Example 5 Consider a one month investment in Microsoft stock. Suppose
you buy the stock in month t − 1 at Pt−1 = $85 and sell the stock the next
month for Pt = $90. Further assume that Microsoft does not pay a dividend
between months t − 1 and t. The one month simple net and gross returns are
then
                     $90 − $85    $90
             Rt =              =      − 1 = 1.0588 − 1 = 0.0588,
                        $85       $85
         1 + Rt = 1.0588.
The one month investment in Microsoft yielded a 5.88% per month return.
Alternatively, $1 invested in Microsoft stock in month t − 1 grew to $1.0588
in month t.

2.2     Multi-period returns
The simple two-month return on an investment in an asset between months
t − 2 and t is defined as
                                 Pt − Pt−2    Pt
                        Rt (2) =           =      − 1.
                                    Pt−2     Pt−2
   1
    We make the convention that the default investment horizon is one month and that
the price is the closing price at the end of the month. This is completely arbitrary and is
used only to simplify calculations.

                                            4
Since PPt−2
         t
            = PPt−1
                 t
                    · PPt−1
                        t−2
                            the two-month return can be rewritten as

                                  Pt Pt−1
                        Rt (2) =      ·       −1
                                 Pt−1 Pt−2
                               = (1 + Rt )(1 + Rt−1 ) − 1.

Then the simple two-month gross return becomes

         1 + Rt (2) = (1 + Rt )(1 + Rt−1 ) = 1 + Rt−1 + Rt + Rt−1 Rt ,

which is a geometric (multiplicative) sum of the two simple one-month gross
returns and not the simple sum of the one month returns. If, however, Rt−1
and Rt are small then Rt−1 Rt ≈ 0 and 1 + Rt (2) ≈ 1 + Rt−1 + Rt so that
Rt (2) ≈ Rt−1 + Rt .
    In general, the k-month gross return is defined as the geometric average
of k one month gross returns

             1 + Rt (k) = (1 + Rt )(1 + Rt−1 ) · · · (1 + Rt−k+1 )
                               k−1
                               Y
                           =         (1 + Rt−j ).
                               j=0


Example 6 Continuing with the previous example, suppose that the price of
Microsoft stock in month t − 2 is $80 and no dividend is paid between months
t − 2 and t. The two month net return is
                      $90 − $80   $90
           Rt (2) =             =     − 1 = 1.1250 − 1 = 0.1250,
                         $80      $80
or 12.50% per two months. The two one month returns are

                           $85 − $80
                 Rt−1 =              = 1.0625 − 1 = 0.0625
                              $80
                           $90 − 85
                   Rt    =          = 1.0588 − 1 = 0.0588,
                             $85
and the geometric average of the two one month gross returns is

                   1 + Rt (2) = 1.0625 × 1.0588 = 1.1250.



                                           5
2.3    Annualizing returns
Very often returns over diﬀerent horizons are annualized, i.e. converted to
an annual return, to facilitate comparisons with other investments. The an-
nualization process depends on the holding period of the investment and an
implicit assumption about compounding. We illustrate with several exam-
ples.
    To start, if our investment horizon is one year then the annual gross and
net returns are just
                                Pt
   1 + RA = 1 + Rt (12) =            = (1 + Rt )(1 + Rt−1 ) · · · (1 + Rt−11 ),
                               Pt−12
                 Pt
       RA =           − 1 = (1 + Rt )(1 + Rt−1 ) · · · (1 + Rt−11 ) − 1.
                Pt−12
In this case, no compounding is required to create an annual return.
    Next, consider a one month investment in an asset with return Rt . What
is the annualized return on this investment? If we assume that we receive
the same return R = Rt every month for the year then the gross 12 month
or gross annual return is
                     1 + RA = 1 + Rt (12) = (1 + R)12 .
Notice that the annual gross return is defined as the monthly return com-
pounded for 12 months. The net annual return is then
                            RA = (1 + R)12 − 1.
Example 7 In the first example, the one month return, Rt , on Microsoft
stock was 5.88%. If we assume that we can get this return for 12 months then
the annualized return is
                RA = (1.0588)12 − 1 = 1.9850 − 1 = 0.9850
or 98.50% per year. Pretty good!

   Now, consider a two month investment with return Rt (2). If we assume
that we receive the same two month return R(2) = Rt (2) for the next 6 two
month periods then the gross and net annual returns are
                        1 + RA = (1 + R(2))6 ,
                            RA = (1 + R(2))6 − 1.

                                       6
Here the annual gross return is defined as the two month return compounded
for 6 months.

Example 8 In the second example, the two month return, Rt (2), on Mi-
crosoft stock was 12.5%. If we assume that we can get this two month return
for the next 6 two month periods then the annualized return is
                 RA = (1.1250)6 − 1 = 2.0273 − 1 = 1.0273
or 102.73% per year.

    To complicate matters, now suppose that our investment horizon is two
years. That is we start our investment at time t − 24 and cash out at time
                                                    Pt
t. The two year gross return is then 1 + Rt (24) = Pt−24 . What is the annual
return on this two year investment? To determine the annual return we solve
the following relationship for RA :
                      (1 + RA )2 = 1 + Rt (24) =⇒
                            RA = (1 + Rt (24))1/2 − 1.
In this case, the annual return is compounded twice to get the two year
return and the relationship is then solved for the annual return.

Example 9 Suppose that the price of Microsoft stock 24 months ago is
Pt−24 = $50 and the price today is Pt = $90. The two year gross return is
1+Rt (24) = $90
            $50
                = 1.8000 which yields a two year net return of Rt (24) = 80%.
The annual return for this investment is defined as
                 RA = (1.800)1/2 − 1 = 1.3416 − 1 = 0.3416
or 34.16% per year.

2.4    Adjusting for dividends
If an asset pays a dividend, Dt , sometime between months t − 1 and t, the
return calculation becomes
                         Pt + Dt − Pt−1   Pt − Pt−1    Dt
                  Rt =                  =           +
                              Pt−1           Pt−1     Pt−1
where PtP−P t−1
          t−1
                is referred as the capital gain and PDt−1
                                                       t
                                                          is referred to as the
dividend yield.

                                      7
3       Continuously Compounded Returns
3.1     One Period Returns

Let Rt denote the simple monthly return on an investment. The continuously
compounded monthly return, rt , is defined as
                                                    Ã     !
                                                  Pt
                           rt = ln(1 + Rt ) = ln                                   (6)
                                                 Pt−1

where ln(·) is the natural log function2 . To see why rt is called the con-
tinuously compounded return, take the exponential of both sides of (6) to
give
                                               Pt
                            ert = 1 + Rt =        .
                                            Pt−1
Rearranging we get
                                Pt = Pt−1 ert ,
so that rt is the continuously compounded growth rate in prices between
months t − 1 and t. This is to be contrasted with Rt which is the simple
growth rate in prices between
                      ³ ´     months t − 1 and t without any compounding.
Furthermore, since ln xy = ln(x) − ln(y) it follows that
                                        Ã       !
                                          Pt
                             rt   = ln
                                        Pt−1
                                  = ln(Pt ) − ln(Pt−1 )
                                  = pt − pt−1

where pt = ln(Pt ). Hence, the continuously compounded monthly return, rt ,
can be computed simply by taking the first diﬀerence of the natural loga-
rithms of monthly prices.

Example 10 Using the price and return data from example 1, the continu-
ously compounded monthly return on Microsoft stock can be computed in two
ways:
                       rt = ln(1.0588) = 0.0571
    2
    The continuously compounded return is always defined since asset prices, Pt , are
always non-negative. Properties of logarithms and exponentials are discussed in the ap-
pendix to this chapter.

                                            8
or
              rt = ln(90) − ln(85) = 4.4998 − 4.4427 = 0.0571.
Notice that rt is slightly smaller than Rt . Why?


    Given a monthly continuously compounded return rt , is straightforward
to solve back for the corresponding simple net return Rt :

                                  Rt = ert − 1

Hence, nothing is lost by considering continuously compounded returns in-
stead of simple returns.

Example 11 In the previous example, the continuously compounded monthly
return on Microsoft stock is rt = 5.71%. The implied simple net return is then

                           Rt = e.0571 − 1 = 0.0588.

    Continuously compounded returns are very similar to simple returns as
long as the return is relatively small, which it generally will be for monthly or
daily returns. For modeling and statistical purposes, however, it is much more
convenient to use continuously compounded returns due to the additivity
property of multiperiod continuously compounded returns and unless noted
otherwise from here on we will work with continuously compounded returns.

3.2    Multi-Period Returns
The computation of multi-period continuously compounded returns is con-
siderably easier than the computation of multi-period simple returns. To
illustrate, consider the two month continuously compounded return defined
as                                           Ã      !
                                                Pt
                rt (2) = ln(1 + Rt (2)) = ln          = pt − pt−2 .
                                               Pt−2
Taking exponentials of both sides shows that

                                Pt = Pt−2 ert (2)




                                       9
so that rt (2) is the continuously compounded growth rate of prices between
months t − 2 and t. Using PPt−2 t
                                   = PPt−1
                                        t
                                           · PPt−1
                                               t−2
                                                   and the fact that ln(x · y) =
ln(x) + ln(y) it follows that
                                   Ã                     !
                                     Pt Pt−1
                      rt (2) = ln          ·
                                    Pt−1 Pt−2
                                  Ã      !        Ã      !
                                     Pt             Pt−1
                             = ln            + ln
                                    Pt−1            Pt−2
                             = rt + rt−1 .

Hence the continuously compounded two month return is just the sum of the
two continuously compounded one month returns. Recall that with simple
returns the two month return is of a multiplicative form (geometric average).

Example 12 Using the data from example 2, the continuously compounded
two month return on Microsoft stock can be computed in two equivalent ways.
The first way uses the diﬀerence in the logs of Pt and Pt−2 :

            rt (2) = ln(90) − ln(80) = 4.4998 − 4.3820 = 0.1178.

The second way uses the sum of the two continuously compounded one month
returns. Here rt = ln(90) − ln(85) = 0.0571 and rt−1 = ln(85) − ln(80) =
0.0607 so that
                    rt (2) = 0.0571 + 0.0607 = 0.1178.
Notice that rt (2) = 0.1178 < Rt (2) = 0.1250.

   The continuously compounded k−month return is defined by
                                                Ã        !
                                             Pt
               rt (k) = ln(1 + Rt (k)) = ln                  = pt − pt−k .
                                            Pt−k
Using similar manipulations to the ones used for the continuously com-
pounded two month return we may express the continuously compounded
k−month return as the sum of k continuously compounded monthly returns:
                                          k−1
                                          X
                               rt (k) =         rt−j .
                                          j=0

The additivitity of continuously compounded returns to form multiperiod
returns is an important property for statistical modeling purposes.

                                       10
3.3    Annualizing Continuously Compounded Returns
Just as we annualized simple monthly returns, we can also annualize contin-
uously compounded monthly returns.
   To start, if our investment horizon is one year then the annual continu-
ously compounded return is simply the sum of the twelve monthly continu-
ously compounded returns
                   rA = rt (12) = rt + rt−1 + · · · + rt−11
                           11
                           X
                       =         rt−j .
                           j=0

Define the average continuously compounded monthly return to be
                                       11
                                    1 X
                              rm =        rt−j .
                                   12 j=0

Notice that
                                               11
                                               X
                              12 · rm =              rt−j
                                               j=0

so that we may alternatively express rA as
                                   rA = 12 · rm .
That is, the continuously compounded annual return is 12 times the average
of the continuously compounded monthly returns.
    Next, consider a one month investment in an asset with continuously
compounded return rt . What is the continuously compounded annual return
on this investment? If we assume that we receive the same return r = rt
every month for the year then rA = rt (12) = 12 · r .


4     Further Reading
This chapter describes basic asset return calculations with an emphasis on
equity calculations. Campbell, Lo and MacKinlay provide a nice treatment
of continuously compounded returns. A useful summary of a broad range
of return calculations is given in Watsham and Parramore (1998). A com-
prehensive treatment of fixed income return calculations is given in Stigum
(1981) and the oﬃcial source of fixed income calculations is “The Pink Book”.

                                          11
5      Appendix: Properties of exponentials and
       logarithms
The computation of continuously compounded returns requires the use of
natural logarithms. The natural logarithm function, ln(·), is the inverse of
the exponential function, e(·) = exp(·), where e1 = 2.718. That is, ln(x) is
defined such that x = ln(ex ). Figure xxx plots ex and ln(x). Notice that ex
is always positive and increasing in x. ln(x) is monotonically increasing in x
and is only defined for x > 0. Also note that ln(1) = 0 and ln(−∞) = 0. The
exponential and natural logarithm functions have the following properties

    1. ln(x · y) = ln(x) + ln(y), x, y > 0

    2. ln(x/y) = ln(x) − ln(y), x, y > 0

    3. ln(xy ) = y ln(x), x > 0

    4. d ln(x)
          dx
               = x1 , x > 0
       d                1 d
    5. ds ln(f (x)) = f (x) dx
                               f (x) (chain-rule)

    6. ex ey = ex+y

    7. ex e−y = ex−y

    8. (ex )y = exy

    9. eln(x) = x
      d x
 10. dx e = ex
      d f (x)           d
 11. dx e     = ef (x) dx f (x) (chain-rule)


6      Problems
Exercise 6.1 Excel exercises

   Go to http://finance.yahoo.com and download monthly data on Mi-
crosoft (ticker symbol msft) over the period December 1996 to December
2001. See the Project page on the class website for instructions on how to

                                          12
download data from Yahoo. Read the data into Excel and make sure to re-
order the data so that time runs forward. Do your analysis on the monthly
closing price data (which should be adjusted for dividends and stock splits).
Name the spreadsheet tab with the data “data”.

  1. Make a time plot (line plot in Excel) of the monthly price data over the
     period (end of December 1996 through (end of) December 2001. Please
     put informative titles and labels on the graph. Place this graph in a
     separate tab (spreadsheet) from the data. Name this tab “graphs”.
     Comment on what you see (eg. price trends, etc). If you invested
     $1,000 at the end of December 1996 what would your investment be
     worth at the end of December 2001? What is the annual rate of return
     over this five year period assuming annual compounding?

  2. Make a time plot of the natural logarithm of monthly price data over
     the period December 1986 through December 2000 and place it in the
     “graph” tab. Comment on what you see and compare with the plot of
     the raw price data. Why is a plot of the log of prices informative?

  3. Using the monthly price data over the period December 1996 through
     December 2001 in the “data” tab, compute simple (no compounding)
     monthly returns (Microsoft does not pay a dividend). When computing
     returns, use the convention that Pt is the end of month closing price.
     Make a time plot of the monthly returns, place it in the “graphs” tab
     and comment. Keep in mind that the returns are percent per month
     and that the annual return on a US T-bill is about 5%.

  4. Using the simple monthly returns in the “data” tab, compute simple
     annual returns for the years 1996 through 2001. Make a time plot of the
     annual returns, put them in the “graphs” tab and comment. Note: You
     may compute annual returns using overlapping data or non-overlapping
     data. With overlapping data you get a series of annual returns for every
     month (sounds weird, I know). That is, the first month annual return
     is from the end of December, 1996 to the end of December, 1997. Then
     second month annual return is from the end of January, 1997 to the
     end of January, 1998 etc. With non-overlapping data you get a series of
     5 annual returns for the 5 year period 1996-2001. That is, the annual
     return for 1997 is computed from the end of December 1996 through


                                     13
     the end of December 1997. The second annual return is computed from
     the end of December 1997 through the end of December 1998 etc.

  5. Using the monthly price data over the period December 1996 through
     December 2001, compute continuously compounded monthly returns
     and place then in the “data” tab. Make a time plot of the monthly
     returns, put them in the ”graphs” tab and comment. Briefly compare
     the continuously compounded returns to the simple returns.

  6. Using the continuously compounded monthly returns, compute contin-
     uously compounded annual returns for the years 1997 through 2001.
     Make a time plot of the annual returns and comment. Briefly compare
     the continuously compounded returns to the simple returns.

Exercise 6.2 Return calculations

   Consider the following (actual) monthly closing price data for Microsoft
stock over the period December 1999 through December 2000

              End of Month Price Data for Microsoft Stock
              December, 1999            $116.751
              January, 2000              $97.875
              February, 2000             $89.375
              March, 2000                $106.25
              April, 2000                $69.75
              May, 2000                 $62.5625
              June, 2000                   $80
              July, 2000                $69.8125
              August, 2000              $69.8125
              September, 2000           $60.3125
              October, 2000              $68.875
              November, 2000             $57.375
              December, 2000             $43.375

  1. Using the data in the table, what is the simple monthly return between
     December, 1999 and January 2000? If you invested $10,000 in Microsoft
     at the end of December 1999, how much would the investment be worth
     at the end of January 2000?


                                    14
    2. Using the data in the table, what is the continuously compounded
       monthly return between December, 1999 and January 2000? Convert
       this continuously compounded return to a simple return (you should
       get the same answer as in part a).

    3. Assuming that the simple monthly return you computed in part (1)
       is the same for 12 months, what is the annual return with monthly
       compounding?

    4. Assuming that the continuously compounded monthly return you com-
       puted in part (2) is the same for 12 months, what is the continuously
       compounded annual return?

    5. Using the data in the table, compute the actual simple annual return
       between December 1999 and December 2000. If you invested $10,000 in
       Microsoft at the end of December 1999, how much would the investment
       be worth at the end of December 2000? Compare with your result in
       part (3).

    6. Using the data in the table, compute the actual annual continuously
       compounded return between December 1999 and December 2000. Com-
       pare with your result in part (4). Convert this continuously com-
       pounded return to a simple return (you should get the same answer
       as in part 5).


7     References
References
[1] Campbell, J., A. Lo, and C. MacKinlay (1997), The Econometrics of
    Financial Markets, Princeton University Press.

[2] Handbook of U.W. Government and Federal Agency Securities and Re-
    lated Money Market Instruments, “The Pink Book”, 34th ed. (1990), The
    First Boston Corporation, Boston, MA.

[3] Stigum, M. (1981), Money Market Calculations: Yields, Break Evens and
    Arbitrage, Dow Jones Irwin.


                                     15
[4] Watsham, T.J. and Parramore, K. (1998), Quantitative Methods in Fi-
    nance, International Thomson Business Press, London, UK.




                                  16
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
    Introduction to Financial Econometrics
Chapter 3 The Constant Expected Return Model
                                      Eric Zivot
                               Department of Economics
                               University of Washington
                                   January 6, 2000
                            This version: January 23, 2001


1      The Constant Expected Return Model of Asset
       Returns
1.1      Assumptions

Let Rit denote the continuously compounded return on an asset i at time t. We
make the following assumptions regarding the probability distribution of Rit for i =
1, . . . , N assets over the time horizon t = 1, . . . , T.

    1. Normality of returns: Rit ∼ N (µi , σ 2i ) for i = 1, . . . , N and t = 1, . . . , T.
    2. Constant variances and covariances: cov(Rit , Rjt ) = σ ij for i = 1, . . . , N and
       t = 1, . . . , T.
    3. No serial correlation across assets over time: cov(Rit , Rjs ) = 0 for t 6= s and
       i, j = 1, . . . , N.

    Assumption 1 states that in every time period asset returns are normally dis-
tributed and that the mean and the variance of each asset return is constant over
time. In particular, we have for each asset i

                                E[Rit ] = µi for all values of t
                              var(Rit ) = σ 2i for all values of t

The second assumption states that the contemporaneous covariances between assets
are constant over time. Given assumption 1, assumption 2 implies that the contem-
poraneous correlations between assets are constant over time as well. That is, for all

                                                 1
assets
                           corr(Rit , Rjt ) = ρij for all values of t.
The third assumption stipulates that all of the asset returns are uncorrelated over
time1 . In particular, for a given asset i the returns on the asset are serially uncorre-
lated which implies that

                      corr(Rit , Ris ) = cov(Rit , Ris ) = 0 for all t 6= s.

Additionally, the returns on all possible pairs of assets i and j are serially uncorrelated
which implies that

                corr(Rit , Rjs ) = cov(Rit , Rjs ) = 0 for all i 6= j and t 6= s.

    Assumptions 1-3 indicate that all asset returns at a given point in time are jointly
(multivariate) normally distributed and that this joint distribution stays constant
over time. Clearly these are very strong assumptions. However, they allow us to de-
velopment a straightforward probabilistic model for asset returns as well as statistical
tools for estimating the parameters of the model and testing hypotheses about the
parameter values and assumptions.

1.2      Constant Expected Return Model Representation
A convenient mathematical representation or model of asset returns can be given
based on assumptions 1-3. This is the constant expected return (CER) model. For
assets i = 1, . . . , N and time periods t = 1, . . . , T the CER model is represented as

                                         Rit = µi + εit                                         (1)
                                         εit ∼ i.i.d. N(0, σ 2i )
                               cov(εit , εjt ) = σ ij                                           (2)

where µi is a constant and we assume that εit is independent of εjs for all time periods
t 6= s. The notation εit ∼ i.i.d. N (0, σ 2i ) stipulates that the random variable εit is
serially independent and identically distributed as a normal random variable with
mean zero and variance σ 2i . In particular, note that, E[εit ] = 0, var(εit ) = σ 2i and
cov(εit , εjs ) = 0 for i 6= j and t 6= s.
    Using the basic properties of expectation, variance and covariance discussed in
chapter 2, we can derive the following properties of returns. For expected returns we
have

                           E[Rit ] = E[µi + εit ] = µi + E[εit ] = µi ,
   1
    Since all assets are assumed to be normally distributed (assumption 1), uncorrelatedness implies
the stronger condition of independence.


                                                 2
since µi is constant and E[εit ] = 0. Regarding the variance of returns, we have

                        var(Rit ) = var(µi + εit ) = var(εit ) = σ 2i

which uses the fact that the variance of a constant (µi ) is zero. For covariances of
returns, we have

               cov(Rit , Rjt ) = cov(µi + εit , µj + εjt ) = cov(εit , εjt ) = σ ij

and
           cov(Rit , Rjs ) = cov(µi + εit , µj + εjs ) = cov(εit , εjs ) = 0, t 6= s,
 which use the fact that adding constants to two random variables does not aﬀect
the covariance between them. Given that covariances and variances of returns are
constant over time gives the result that correlations between returns over time are
also constant:
                                cov(Rit , Rjt )      σ ij
           corr(Rit , Rjt ) = q                   =       = ρij ,
                               var(Rit )var(Rjt )   σiσj
                                cov(Rit , Rjs )      0
           corr(Rit , Rjs ) = q                   =      = 0, i 6= j, t 6= s.
                               var(Rit )var(Rjs )   σiσj

Finally, since the random variable εit is independent and identically distributed (i.i.d.)
normal the asset return Rit will also be i.i.d. normal:

                                   Rit ∼ i.i.d. N (µi , σ 2i ).

Hence, the CER model (1) for Rit is equivalent to the model implied by assumptions
1-3.

1.3    Interpretation of the CER Model
The CER model has a very simple form and is identical to the measurement error
model in the statistics literature. In words, the model states that each asset return
is equal to a constant µi (the expected return) plus a normally distributed random
variable εit with mean zero and constant variance. The random variable εit can be
interpreted as representing the unexpected news concerning the value of the asset
that arrives between times t − 1 and time t. To see this, note that using (1) we can
write εit as

                                    εit = Rit − µi
                                        = Rit − E[Rit ]

so that εit is de&ned to be the deviation of the random return from its expected value.
If the news is good, then the realized value of εit is positive and the observed return is

                                                3
above its expected value µi . If the news is bad, then εjt is negative and the observed
return is less than expected. The assumption that E[εit ] = 0 means that news, on
average, is neutral; neither good nor bad. The assumption that var(εit ) = σ 2i can be
interpreted as saying that volatility of news arrival is constant over time. The random
news variable aﬀecting asset i, eit , is allowed to be contemporaneously correlated with
the random news variable aﬀecting asset j, εjt , to capture the idea that news about
one asset may spill over and aﬀect another asset. For example, let asset i be Microsoft
and asset j be Apple Computer. Then one interpretation of news in this context is
general news about the computer industry and technology. Good news should lead
to positive values of εit and εjt . Hence these variables will be positively correlated.
    The CER model with continuously compounded returns has the following nice
property with respect to the interpretation of εit as news. Consider the default case
where Rit is interpreted as the continuously compounded monthly return. Since mul-
tiperiod continuously compounded returns are additive we can interpret, for example,
Rit as the sum of 30 daily continuously compounded returns2 :
                                                 29
                                                 X
                                       Rit =          Rdit−k
                                               k=0

where Ritd denotes the continuously compounded daily return on asset i. If we assume
that daily returns are described by the CER model then

                                       Ritd = µdi + εdit ,
                                       εdit ∼ i.i.d N(0, (σ di )2 ),
                            cov(εdit , εdjt ) = σ dij ,
                            cov(εdit , εdjs ) = 0, i 6= j, t 6= s

and the monthly return may then be expressed as
                                           29
                                           X
                                 Rit =          (µdi + εdit−k )
                                           k=0
                                                         29
                                                         X
                                       = 30 · µdi +               εdit−k
                                                         k=0
                                       = µi + εit ,

where

                                       µi = 30 · µdi ,
                                                 29
                                                 X
                                      εit =            εdit−k .
                                                 k=0
  2
   For simplicity of exposition, we will ignore the fact that some assets do not trade over the
weekend.

                                                 4
Hence, the monthly expected return, µi , is simply 30 times the daily expected re-
turn. The interpretation of εit in the CER model when returns are continuously
compounded is the accumulation of news between months t − 1 and t. Notice that
                                              Ã 29                              !
                                               X
                         var(Rit ) = var                  (µdi + εdit−k )
                                                   k=0
                                        29
                                        X
                                   =          var(εdit−k )
                                        k=0
                                        X29 ³            ´2
                                   =              σ di
                                        k=0
                                              ³          ´2
                                   = 30 · σ di
and
                                               Ã 29                      29
                                                                                        !
                                                X                        X
                     cov(Rit , Rjt ) = cov                    εdit−k ,         εdjt−k
                                                    k=0                  k=0
                                        29
                                        X
                                    =          cov(εdit−k , εdjt−k )
                                        k=0
                                        X29
                                    =          σ dij
                                        k=0
                                    = 30 · σ dij ,
so that the monthly variance, σ 2i , is equal to 30 times the daily variance and the
monthly covariance, σ ij , is equal to 30 times the daily covariance.

1.4    The CER Model of Asset Returns and the Random Walk
       Model of Asset Prices
The CER model of asset returns (1) gives rise to the so-called random walk (RW)
model of the logarithm of asset prices. To see this, recall that the continuously
compounded return, Rit , is de&ned from asset prices via
                                    Ã          !
                                      Pit
                                  ln                 = Rit .
                                     Pit−1
Since the log of the ratio of prices is equal to the diﬀerence in the logs of prices we
may rewrite the above as
                               ln(Pit ) − ln(Pit−1 ) = Rit .
Letting pit = ln(Pit ) and using the representation of Rit in the CER model (1), we
may further rewrite the above as
                                pit − pit−1 = µi + εit .                                    (3)

                                              5
The representation in (3) is know as the RW model for the log of asset prices.
   In the RW model, µi represents the expected change in the log of asset prices
(continuously compounded return) between months t − 1 and t and εit represents the
unexpected change in prices. That is,
                       E[pit − pit−1 ] = E[Rit ] = µi ,
                                  εit = pit − pit−1 − E[pit − pit−1 ].
Further, in the RW model, the unexpected changes in asset prices, εit , are uncorrelated
over time (cov(εit , εis ) = 0 for t 6= s) so that future changes in asset prices cannot be
predicted from past changes in asset prices3 .
   The RW model gives the following interpretation for the evolution of asset prices.
Let pi0 denote the initial log price of asset i. The RW model says that the price at
time t = 1 is
                                       pi1 = pi0 + µi + εi1
where εi1 is the value of random news that arrives between times 0 and 1. Notice that
at time t = 0 the expected price at time t = 1 is
                            E[pi1 ] = pi0 + µi + E[εi1 ] = pi0 + µi
which is the initial price plus the expected return between time 0 and 1. Similarly,
the price at time t = 2 is
                              pi2 = pi1 + µi + εi2
                                  = pi0 + µi + µi + εi1 + εi2
                                                       2
                                                       X
                                   = pi0 + 2 · µi +           εit
                                                       t=1

which is equal to the initial price, pi0 , plus the two period expected return, 2 · µi , plus
                                                           P
the accumulated random news over the two periods, 2t=1 εit . By recursive substitu-
tion, the price at time t = T is
                                                        T
                                                        X
                                 piT = pi0 + T · µi +          εit .
                                                        t=1

At time t = 0 the expected price at time t = T is
                                    E[piT ] = pi0 + T · µi
The actual price, piT , deviates from the expected price by the accumulated random
news
                                                      T
                                                      X
                                    piT − E[piT ] =         εit .
                                                      t=1
       Figure xxx illustrates the random walk model of asset prices.
   3
    The notion that future changes in asset prices cannot be predicted from past changes in asset
prices is often referred to as the weak form of the eﬃcient markets hypothesis.

                                               6
                                                                     Simulated Random Walk


         12
                           E[p(t)]
                           p(t) - E[p(t)]
                           p(t)
         10


                                                                                      p(t)
         8




         6
                                                                                             E[p(t)]
    pt




         4




         2


                                                                                    p(t) - E[p(t)]

         0




                                                                                                                                               101
              1

                  5

                      9

                          13

                               17

                                    21

                                            25

                                                 29

                                                      33

                                                           37

                                                                41

                                                                     45

                                                                          49

                                                                               53

                                                                                     57

                                                                                          61

                                                                                                 65

                                                                                                       69

                                                                                                            73

                                                                                                                 77

                                                                                                                      81

                                                                                                                           85

                                                                                                                                89

                                                                                                                                     93

                                                                                                                                          97
         -2
                                                                          time, t




    The term random walk was originally used to describe the unpredictable move-
ments of a drunken sailor staggering down the street. The sailor starts at an initial
position, p0 , outside the bar. The sailor generally moves in the direction described
by µ but randomly deviates from this direction after each step t by an amount equal
                                                                      P
to εt . After T steps the sailor ends up at position pT = p0 + µ · T + Tt=1 εt .


2         Monte Carlo Simulation of the CER Model
A good way to understand the probabilistic behavior of a model is to use computer
simulation methods to create pseudo data from the model. The process of creating
such pseudo data is often called Monte Carlo simulation4 . To illustrate the use of
Monte Carlo simulation, consider the problem of creating pseudo return data from
the CER model (1) for one asset. In order to simulate pseudo return data, values for
the model parameters µ and σ must be selected. To mimic the monthly return data
on Microsoft, the values µ = 0.05 and σ = 0.10 are used. Also, the number N of
    4
        Monte Carlo referrs to the fameous city in Monaco where gambling is legal.


                                                                          7
simulated data points must be determined. Here, N = 100. Hence, the model to be
simulated is

                                                  Rt = 0.05 + εt , t = 1, . . . , 100
                                                       εt ~iid N (0, (0.10)2 )

The key to simulating data from the above model is to simulate N = 100 observations
of the random news variable εt ~iid N(0, (0.10)2 ). Computer algorithms exist which
can easily create such observations. Let {ε1 , . . . , ε100 } denote the 100 simulated values
of εt . The histogram of these values are given in &gure xxx below


                                                                 Histogram of Simulated Errors

              16.00%



              14.00%



              12.00%



              10.00%
  Frequency




              8.00%



              6.00%



              4.00%



              2.00%



              0.00%
                       -0.241



                                -0.208



                                         -0.175



                                                    -0.142



                                                             -0.109



                                                                      -0.076



                                                                                   -0.043



                                                                                            -0.010



                                                                                                     0.023



                                                                                                             0.056



                                                                                                                     0.089



                                                                                                                             0.122



                                                                                                                                     0.155



                                                                                                                                             0.188



                                                                                                                                                     0.221
                                                                                            e(t)



                                                       1   100                                  P
    The sample averageqof the simulated errors is 100      t=1 εt = −0.004 and the sample
                        1 P 100                     2
standard deviation is 99    t=1 (εt − (−0.004)) = 0.109. These values are very close
to the population values E[εt ] = 0 and SD(εt ) = 0.10, respectively.
    Once the simulated values of εt have been created, the simulated values of Rt are
constructed as Rt = 0.05 + εt , t = 1, . . . , 100. A time plot of the simulated values of
Rt is given in &gure xxx below


                                                                               8
                                                                Monte Carlo Simulation of CER Model
                                                                R(t) = 0.05 + e(t), e(t) ~ iid N(0, (0.10)^2)

             0.400



             0.300



             0.200



             0.100
    Return




             0.000



             -0.100



             -0.200



             -0.300




                                                                                                                                                                                        100
                      1
                          4
                              7
                                  10
                                       13
                                            16
                                                 19
                                                      22
                                                           25
                                                                28
                                                                     31
                                                                          34
                                                                               37
                                                                                    40
                                                                                         43
                                                                                              46
                                                                                                   49
                                                                                                        52
                                                                                                             55
                                                                                                                  58
                                                                                                                       61
                                                                                                                            64
                                                                                                                                 67
                                                                                                                                      70
                                                                                                                                           73
                                                                                                                                                76
                                                                                                                                                     79
                                                                                                                                                          82
                                                                                                                                                               85
                                                                                                                                                                    88
                                                                                                                                                                         91
                                                                                                                                                                              94
                                                                                                                                                                                   97
                                                                                                   time




   The simulated return data ! uctuates randomly about the expected return value
E[Rt ] = µ = 0.05. The typical size of the ! uctuation is approximately equal to
SE(εt ) = 0.10. Notice that the simulated return data looks remarkably like the
actual return data of Microsoft.
   Monte Carlo simulation of a model can be used as a &rst pass reality check of the
model. If simulated data from the model does not look like the data that the model is
supposed to describe then serious doubt is cast on the model. However, if simulated
data looks reasonably close to the data that the model is suppose to describe then
con&dence is instilled on the model.


3              Estimating the CER Model
3.1              The Random Sampling Environment

The CER model of asset returns gives us a rigorous way of interpreting the time
series behavior of asset returns. At the beginning of every month t, Rit is a random


                                                                                    9
variable representing the return to be realized at the end of the month. The CER
model states that Rit ∼ i.i.d. N (µi , σ 2i ). Our best guess for the return at the end of the
month    qis E[Rit ] = µi , our measure of uncertainty about our best guess is captured by
σ i = var(Rit ) and our measure of the direction of linear association between Rit and
Rjt is σ ij = cov(Rit , Rjt ). The CER model assumes that the economic environment
is constant over time so that the normal distribution characterizing monthly returns
is the same every month.
     Our life would be very easy if we knew the exact values of µi , σ 2i and σ ij , the
parameters of the CER model. In actuality, however, we do not know these values
with certainty. A key task in &nancial econometrics is estimating the values of µi , σ 2i
and σ ij from a history of observed data.
     Suppose we observe monthly returns on N diﬀerent assets over the horizon t =
1, . . . , T. Let ri1 , . . . , riT denote the observed history of T monthly returns on asset
i for i = 1, . . . , N. It is assumed that the observed returns are realizations of the
random variables Ri1 , . . . , RiT , where Rit is described by the CER model (1). We
call Ri1 , . . . , RiT a random sample from the CER model (1) and we call ri1 , . . . , riT
the realized values from the random sample. In this case, we can use the observed
returns to estimate the unknown parameters of the CER model

3.2     Estimation Theory
Before we describe the estimation of the CER model, it is useful to summarize some
concepts in estimation theory. Let θ denote some characteristic of the CER model
(1) we are interested in estimating. For example, if we are interested in the expected
return then θ = µi ; if we are interested in the variance of returns then θ = σ 2i . The
goal is to estimate θ based on the observed data ri1 , . . . , riT .
De&nition 1 An estimator of θ is a rule or algorithm for forming an estimate for
θ.
De&nition 2 An estimate of θ is simply the value of an estimator based on the
observed data.
      To establish some notation, let θ̂(Ri1 , . . . , RiT ) denote an estimator of θ treated as
a function of the random variables Ri1 , . . . , RiT . Clearly, θ̂(Ri1 , . . . , RiT ) is a random
variable. Let θ̂(ri1 , . . . , riT ) denote an estimate of θ based on the realized values
ri1 , . . . , riT . θ̂(ri1 , . . . , riT ) is simply an number. We will often use θ̂ as shorthand
notation to represent either an estimator of θ or an estimate of θ. The context will
determine how to interpret θ̂.

3.2.1    Properties of Estimators
Consider θ̂ = θ̂(Ri1 , . . . , RiT ) as a random variable. In general, the pdf of θ̂, p(θ̂),
depends on the pdf s of the random variables Ri1 , . . . , RiT . The exact form of p(θ̂) may

                                               10
       Introduction to Financial Econometrics
     Chapter 4 Introduction to Portfolio Theory
                                  Eric Zivot
                           Department of Economics
                           University of Washington
                              January 26, 2000
                       This version: February 20, 2001


1    Introduction to Portfolio Theory
Consider the following investment problem. We can invest in two non-dividend paying
stocks A and B over the next month. Let RA denote monthly return on stock A and
RB denote the monthly return on stock B. These returns are to be treated as random
variables since the returns will not be realized until the end of the month. We assume
that the returns RA and RB are jointly normally distributed and that we have the
following information about the means, variances and covariances of the probability
distribution of the two returns:

                           µA = E[RA ], σ 2A = V ar(RA ),
                           µB = E[RB ], σ 2B = V ar(RB ),
                          σ AB = Cov(RA , RB ).

We assume that these values are taken as given. We might wonder where such values
come from. One possibility is that they are estimated from historical return data for
the two stocks. Another possibility is that they are subjective guesses.
      The expected returns, µA and µB , are our best guesses for the monthly returns on
each of the stocks. However, since the investments are random we must recognize that
the realized returns may be diﬀerent from our expectations. The variances, σ 2A and
σ 2B , provide measures of the uncertainty associated with these monthly returns. We
can also think of the variances as measuring the risk associated with the investments.
Assets that have returns with high variability (or volatility) are often thought to
be risky and assets with low return volatility are often thought to be safe. The
covariance σ AB gives us information about the direction of any linear dependence
between returns. If σ AB > 0 then the returns on assets A and B tend to move in the

                                          1
same direction; if σ AB < 0 the returns tend to move in opposite directions; if σ AB = 0
then the returns tend to move independently. The strength of the dependence between
the returns is measured by the correlation coeﬃcient ρAB = σσAAB σB
                                                                     . If ρAB is close to
one in absolute value then returns mimic each other extremely closely whereas if ρAB
is close to zero then the returns may show very little relationship.

     The portfolio problem is set-up as follows. We have a given amount of wealth and
it is assumed that we will exhaust all of our wealth between investments in the two
stocks. The investor s problem is to decide how much wealth to put in asset A and
how much to put in asset B. Let xA denote the share of wealth invested in stock A
and xB denote the share of wealth invested in stock B. Since all wealth is put into
the two investments it follows that xA + xB = 1. (Aside: What does it mean for xA
or xB to be negative numbers?) The investor must choose the values of xA and xB .
     Our investment in the two stocks forms a portfolio and the shares xA and xB are
referred to as portfolio shares or weights. The return on the portfolio over the next
month is a random variable and is given by
                                  Rp = xA RA + xB RB ,                               (1)
which is just a simple linear combination or weighted average of the random return
variables RA and RB . Since RA and RB are assumed to be normally distributed, Rp
is also normally distributed.

1.1    Portfolio expected return and variance
The return on a portfolio is a random variable and has a probability distribution
that depends on the distributions of the assets in the portfolio. However, we can
easily deduce some of the properties of this distribution by using the following results
concerning linear combinations of random variables:


                    µp = E[Rp ] = xA µA + xB µB                                      (2)
                    σ 2p = var(Rp ) = x2A σ 2A + x2B σ 2B + 2xA xB σ AB              (3)
   These results are so important to portfolio theory that it is worthwhile to go
through the derivations. For the &rst result (2), we have
         E[Rp ] = E[xA RA + xB RB ] = xA E[RA ] + xB E[RB ] = xA µA + xB µB
by the linearity of the expectation operator. For the second result (3), we have
var(Rp ) =    var(xA RA + xB RB ) = E[(xA RA + xB RB ) − E[xA RA + xB RB ])2 ]
         =    E[(xA (RA − µA ) + xB (RB − µB ))2 ]
         =    E[x2A (RA − µA )2 + x2B (RB − µB )2 + 2xA xB (RA − µA )(RB − µB )]
         =    x2A E[(RA − µA )2 ] + x2B E[(RB − µB )2 ] + 2xA xB E[(RA − µA )(RB − µB )],

                                            2
and the result follows by the de&nitions of var(RA ), var(RB ) and cov(RA , RB )..
    Notice that the variance of the portfolio is a weighted average of the variances
of the individual assets plus two times the product of the portfolio weights times
the covariance between the assets. If the portfolio weights are both positive then a
positive covariance will tend to increase the portfolio variance, because both returns
tend to move in the same direction, and a negative covariance will tend to reduce the
portfolio variance. Thus &nding negatively correlated returns can be very bene&cial
when forming portfolios. What is surprising is that a positive covariance can also be
bene&cial to diversi&cation.

1.2    Eﬃcient portfolios with two risky assets
In this section we describe how mean-variance eﬃcient portfolios are constructed.
First we make some assumptions:
   Assumptions

   • Returns are jointly normally distributed. This implies that means, variances
     and covariances of returns completely characterize the joint distribution of re-
     turns.

   • Investors only care about portfolio expected return and portfolio variance. In-
     vestors like portfolios with high expected return but dislike portfolios with high
     return variance.

    Given the above assumptions we set out to characterize the set of portfolios that
have the highest expected return for a given level of risk as measured by portfolio
variance. These portfolios are called eﬃcient portfolios and are the portfolios that
investors are most interested in holding.
    For illustrative purposes we will show calculations using the data in the table
below.
                          Table 1: Example Data
            µA    µB         σ 2A
                               σ 2B  σA    σB     σ AB    ρAB
           0.175 0.055 0.067 0.013 0.258 0.115 -0.004875 -0.164

   The collection of all feasible portfolios (the investment possibilities set) in the
case of two assets is simply all possible portfolios that can be formed by varying
the portfolio weights xA and xB such that the weights sum to one (xA + xB = 1).
We summarize the expected return-risk (mean-variance) properties of the feasible
portfolios in a plot with portfolio expected return, µp , on the vertical axis and portfolio
standard-deviation, σ p , on the horizontal axis. The portfolio standard deviation is
used instead of variance because standard deviation is measured in the same units as
the expected value (recall, variance is the average squared deviation from the mean).


                                             3
                                                       Portfolio Frontier with 2 Risky Assets

                                           0.250


                                           0.200

               Portfolio expected return
                                           0.150


                                           0.100


                                           0.050


                                           0.000
                                               0.000            0.100        0.200             0.300   0.400
                                                                    Portfolio std. deviation


                                                                        Figure 1

    The investment possibilities set or portfolio frontier for the data in Table 1 is
illustrated in Figure 1. Here the portfolio weight on asset A, xA , is varied from
-0.4 to 1.4 in increments of 0.1 and, since xB = 1 − xA , the weight on asset is
then varies from 1.4 to -0.4. This gives us 18 portfolios with weights (xA , xB ) =
(−0.4, 1.4), (−0.3, 1.3), ..., (1.3, −0.3), (1.4, −0.4). For
                                                          q each of these portfolios we use
the formulas (2) and (3) to compute µp and σ p = σ 2p . We then plot these values1 .
    Notice that the plot in (µp , σ p ) space looks like a parabola turned on its side (in
fact it is one side of a hyperbola). Since investors desire portfolios with the highest
expected return for a given level of risk, combinations that are in the upper left corner
are the best portfolios and those in the lower right corner are the worst. Notice that
the portfolio at the bottom of the parabola has the property that it has the smallest
variance among all feasible portfolios. Accordingly, this portfolio is called the global
minimum variance portfolio.
    It is a simple exercise in calculus to &nd the global minimum variance portfolio.
We solve the constrained optimization problem

                                                       min σ 2p = x2A σ 2A + x2B σ 2B + 2xA xB σ AB
                                                       xA ,xB
                                                   s.t. xA + xB = 1.
   1
     The careful reader may notice that some of the portfolio weights are negative. A negative
portfolio weight indicates that the asset is sold short and the proceeds of the short sale are used to
buy more of the other asset. A short sale occurs when an investor borrows an asset and sells it in
the market. The short sale is closed out when the investor buys back the asset and then returns the
borrowed asset. If the asset price drops then the short sale produces and pro&t.




                                                                             4
Substituting xB = 1 − xA into the formula for σ 2p reduces the problem to

                 min σ 2p = x2A σ 2A + (1 − xA )2 σ 2B + 2xA (1 − xA )σ AB .
                 x  A


The &rst order conditions for a minimum, via the chain rule, are

                    dσ 2p
               0=         = 2xmin 2          min 2                 min
                              A σ A − 2(1 − xA )σ B + 2σ AB (1 − 2xA )
                    dxA
and straightforward calculations yield

                                    σ 2B − σ AB
                        xmin
                         A =                      , xmin = 1 − xmin
                                                                A .                  (4)
                               σ 2A + σ 2B − 2σ AB B

For our example, using the data in table 1, we get xmin                 min
                                                       A = 0.2 and xB = 0.8.
    Eﬃcient portfolios are those with the highest expected return for a given level
of risk. Ineﬃcient portfolios are then portfolios such that there is another feasible
portfolio that has the same risk (σ p ) but a higher expected return (µp ). From the
plot it is clear that the ineﬃcient portfolios are the feasible portfolios that lie below
the global minimum variance portfolio and the eﬃcient portfolios are those that lie
above the global minimum variance portfolio.
    The shape of the investment possibilities set is very sensitive to the correlation
between assets A and B. If ρAB is close to 1 then the investment set approaches a
straight line connecting the portfolio with all wealth invested in asset B, (xA , xB ) =
(0, 1), to the portfolio with all wealth invested in asset A, (xA , xB ) = (1, 0). This
case is illustrated in Figure 2. As ρAB approaches zero the set starts to bow toward
the µp axis and the power of diversi&cation starts to kick in. If ρAB = −1 then
the set actually touches the µp axis. What this means is that if assets A and B
are perfectly negatively correlated then there exists a portfolio of A and B that has
positive expected return and zero variance! To &nd the portfolio with σ 2p = 0 when
ρAB = −1 we use (4) and the fact that σ AB = ρAB σ A σ B to give
                                      σB
                           xmin
                            A =            , xmin = 1 − xA
                                    σA + σB B
The case with ρAB = −1 is also illustrated in Figure 2.




                                             5
                                                               Portfolio Frontier with 2 Risky Assets

                                                 0.250



                                                 0.200


               P ortfolio e x pe cte d re turn   0.150



                                                 0.100



                                                 0.050



                                                 0.000
                                                     0.000   0.050   0.100   0.150   0.200   0.250     0.300   0.350   0.400   0.450
                                                                               P ortfolio std. de via tion


                                                                       correlation=1               correlation=-1

                                                                                 Figure 2
   Given the eﬃcient set of portfolios, which portfolio will an investor choose? Of
the eﬃcient portfolios, investors will choose the one that accords with their risk
preferences. Very risk averse investors will choose a portfolio very close to the global
minimum variance portfolio and very risk tolerant investors will choose portfolios
with large amounts of asset A which may involve short-selling asset B.

1.3     Eﬃcient portfolios with a risk-free asset
In the preceding section we constructed the eﬃcient set of portfolios in the absence of
a risk-free asset. Now we consider what happens when we introduce a risk free asset.
In the present context, a risk free asset is equivalent to default-free pure discount bond
that matures at the end of the assumed investment horizon. The risk-free rate, rf , is
then the return on the bond, assuming no in! ation. For example, if the investment
horizon is one month then the risk-free asset is a 30-day Treasury bill (T-bill) and
the risk free rate is the nominal rate of return on the T-bill. If our holdings of the
risk free asset is positive then we are lending money at the risk-free rate and if our
holdings are negative then we are borrowing at the risk-free rate.

1.3.1   Eﬃcient portfolios with one risky asset and one risk free asset
Continuing with our example, consider an investment in asset B and the risk free
asset (henceforth referred to as a T-bill) and suppose that rf = 0.03. Since the risk
free rate is &xed over the investment horizon it has some special properties, namely
                                                                                µf = E[rf ] = rf

                                                                                      6
                                  var(rf ) = 0
                              cov(RB , rf ) = 0

Let xB denote the share of wealth in asset B and xf = 1 − xB denote the share of
wealth in T-bills. The portfolio expected return is

                              Rp = xB RB + (1 − xB )rf
                                 = xB (RB − rf ) + rf

The quantity RB − rf is called the excess return (over the return on T-bills) on asset
B. The portfolio expected return is then

                                 µp = xB (µB − rf ) + rt

where the quantity (µB − rf ) is called the expected excess return or risk premium
on asset B. We may express the risk premium on the portfolio in terms of the risk
premium on asset B:
                              µp − rf = xB (µB − rf )
The more we invest in asset B the higher the risk premium on the portfolio.
  The portfolio variance only depends on the variability of asset B and is given by

                                      σ 2p = x2B σ 2B .

The portfolio standard deviation is therefore proportional to the standard deviation
on asset B:
                                     σ p = xB σ B
which can use to solve for xB
                                                 σp
                                        xB =
                                                 σB
Using the last result, the feasible (and eﬃcient) set of portfolios follows the equation
                                             µB − rf
                                µp = rf +            · σp                             (5)
                                               σB
                                                                        µ −r
which is simply straight line in (µp , σ p ) with intercept rf and slope BσB f . The slope
of the combination line between T-bills and a risky asset is called the Sharpe ratio
or Sharpe s slope and it measures the risk premium on the asset per unit of risk (as
measured by the standard deviation of the asset).
    The portfolios which are combinations of asset A and T-bills and combinations of
asset B and T-bills using the data in Table 1 with rf = 0.03. is illustrated in Figure
4.



                                             7
                                                            Portfolio Frontier with 1 Risky Asset and T-Bill

                                                 0.200
                                                 0.180




               P ortfolio e x pe cte d re turn
                                                 0.160
                                                 0.140
                                                 0.120
                                                 0.100
                                                 0.080
                                                 0.060
                                                 0.040
                                                 0.020
                                                 0.000
                                                    0.000      0.050      0.100       0.150       0.200      0.250   0.300
                                                                             Portfolio std. deviation

                                                                       Asset B and T-Bill      Asset A and T-Bill


                                                                                  Figure 3

    Notice that expected return-risk trade oﬀ of these portfolios is linear. Also, notice
that the portfolios which are combinations of asset A and T-bills have expected
returns uniformly higher than the portfolios consisting of asset B and T-bills. This
occurs because the Sharpe s slope for asset A is higher than the slope for asset B:
         µA − rf   0.175 − 0.03          µ − rf   0.055 − 0.03
                 =              = 0.562, B      =              = 0.217.
           σA         0.258                σB        0.115
Hence, portfolios of asset A and T-bills are eﬃcient relative to portfolios of asset B
and T-bills.

1.3.2   Eﬃcient portfolios with two risky assets and a risk-free asset
Now we expand on the previous results by allowing our investor to form portfolios of
assets A, B and T-bills. The eﬃcient set in this case will still be a straight line in
(µp , σ p )− space with intercept rf . The slope of the eﬃcient set, the maximum Sharpe
ratio, is such that it is tangent to the eﬃcient set constructed just using the two risky
assets A and B. Figure 5 illustrates why this is so.




                                                                                       8
                                                 Portfolio Frontier with 2 Risky Assets and T-Bills


                                         0.350



             Portfolio expected return
                                         0.300
                                         0.250
                                         0.200
                                         0.150
                                         0.100
                                         0.050
                                         0.000
                                             0.000       0.100     0.200         0.300     0.400     0.500         0.600
                                                                     Portfolio std. deviation

                                           Assets A and B               Tangency and T-bills       Asset B and T-bills
                                           Asset A and t-bills          Tangency                   Asset B
                                           Asset A


                                                                        Figure 4
                                                                                                                         µ −r
    If we invest in only in asset B and T-bills then the Sharpe ratio is BσB f = 0.217
and the CAL intersects the parabola at point B. This is clearly not the eﬃcient set
of portfolios. For example, we could do uniformly better if we instead invest only
                                                           µ −r
in asset A and T-bills. This gives us a Sharpe ratio of AσA f = 0.562 and the new
CAL intersects the parabola at point A. However, we could do better still if we invest
in T-bills and some combination of assets A and B. Geometrically, it is easy to see
that the best we can do is obtained for the combination of assets A and B such that
the CAL is just tangent to the parabola. This point is marked T on the graph and
represents the tangency portfolio of assets A and B.
    We can determine the proportions of each asset in the tangency portfolio by &nding
the values of xA and xB that maximize the Sharpe ratio of a portfolio that is on the
envelope of the parabola. Formally, we solve
                                                                      µp − rf
                                                                 max              s.t.
                                                              A Bx ,x    σp
                                                      µp = xA µA + xB µB
                                                      σ 2p = x2A σ 2A + x2B σ 2B + 2xA xB σ AB
                                                       1 = xA + xB

After various substitutions, the above problem can be reduced to
                                                           xA (µA − rf ) + (1 − xA )(µB − rf )
                                          max
                                           x                                                                 1/2
                                                                                                                   .
                                            A
                                                   (x2A σ 2A + (1 − xA )2 σ 2B + 2xA (1 − xA )σ AB )

                                                                             9
This is a straightforward, albeit very tedious, calculus problem and the solution can
be shown to be
      T                  (µA − rf )σ 2B − (µB − rf )σ AB
    xA =               2                2
                                                                    , xTB = 1 − xTA .
           (µA − rf )σ B + (µB − rf )σ A − (µA − rf + µB − rf )σ AB
For the example data using rf = 0.03, we get xTA = 0.542 and xTB = 0.458. The
expected return on the tangency portfolio is
                     µT = xTA µA + xTB µB
                        = (0.542)(0.175) + (0.458)(0.055) = 0.110,
the variance of the tangency portfolio is
                 ³      ´2        ³       ´2
        σ 2T =    xTA        σ 2A + xTB        σ 2B + 2xTA xTB σ AB
             = (0.542)2 (0.067) + (0.458)2 (0.013) + 2(0.542)(0.458) = 0.015,
and the standard deviation of the tangency portfolio is
                                q       √
                          σ T = σ 2T = 0.015 = 0.124.
   The eﬃcient portfolios now are combinations of the tangency portfolio and the
T-bill. This important result is known as the mutual fund separation theorem. The
tangency portfolio can be considered as a mutual fund of the two risky assets, where
the shares of the two assets in the mutual fund are determined by the tangency
portfolio weights, and the T-bill can be considered as a mutual fund of risk free
assets. The expected return-risk trade-oﬀ of these portfolios is given by the line
connecting the risk-free rate to the tangency point on the eﬃcient frontier of risky
asset only portfolios. Which combination of the tangency portfolio and the T-bill
an investor will choose depends on the investor s risk preferences. If the investor is
very risk averse, then she will choose a combination with very little weight in the
tangency portfolio and a lot of weight in the T-bill. This will produce a portfolio
with an expected return close to the risk free rate and a variance that is close to zero.
   For example, a highly risk averse investor may choose to put 10% of her wealth in
the tangency portfolio and 90% in the T-bill. Then she will hold (10%) × (54.2%) =
5.42% of her wealth in asset A, (10%) × (45.8%) = 4.58% of her wealth in asset B
and 90% of her wealth in the T-bill. The expected return on this portfolio is
                                µp = rf + 0.10(µT − rf )
                                   = 0.03 + 0.10(0.110 − 0.03)
                                   = 0.038.
and the standard deviation is
                                          σ p = 0.10σ T
                                              = 0.10(0.124)
                                              = 0.012.

                                                      10
A very risk tolerant investor may actually borrow at the risk free rate and use these
funds to leverage her investment in the tangency portfolio. For example, suppose the
risk tolerant investor borrows 10% of her wealth at the risk free rate and uses the
proceed to purchase 110% of her wealth in the tangency portfolio. Then she would
hold (110%)×(54.2%) = 59.62% of her wealth in asset A, (110%)×(45.8%) = 50.38%
in asset B and she would owe 10% of her wealth to her lender. The expected return
and standard deviation on this portfolio is

                      µp = 0.03 + 1.1(0.110 − 0.03) = 0.118
                      σ p = 1.1(0.124) = 0.136.


2    Eﬃcient Portfolios and Value-at-Risk
As we have seen, eﬃcient portfolios are those portfolios that have the highest expected
return for a given level of risk as measured by portfolio standard deviation. For
portfolios with expected returns above the T-bill rate, eﬃcient portfolios can also be
characterized as those portfolios that have minimum risk (as measured by portfolio
standard deviation) for a given target expected return.




                                          11
                                                                             Efficient Portfolios

                 0.250




                                                                                              Efficient portfolios of T-
                                                                                              bills and assets A and B
                 0.200



                                                                                                                                    Asset A

                 0.150
                                                                 Tangency
  Portfolio ER




                                                                 Portfolio


                             0.103                                                            Combinations of tangency portfolio
                 0.100                                                                        and T-bills that has the same SD as
                                                                                              asset B



                  0.055                                                        Asset B
                 0.050
                                            Combinations of tangency
                 rf                         portfolio and T-bills that has
                                            same ER as asset B

                 0.000               0.039                         0.114
                     0.000              0.050              0.100                0.150                  0.200               0.250         0.300   0.350
                                                                                        Portfolio SD




                                                                               Figure 5

   To illustrate, consider &gure 5 which shows the portfolio frontier for two risky
assets and the eﬃcient frontier for two risky assets plus a risk-free asset. Suppose
an investor initially holds all of his wealth in asset A. The expected return on this
portfolio is µB = 0.055 and the standard deviation (risk) is σ B = 0.115. An eﬃcient
portfolio (combinations of the tangency portfolio and T-bills) that has the same
standard deviation (risk) as asset B is given by the portfolio on the eﬃcient frontier
that is directly above σ B = 0.115. To &nd the shares in the tangency portfolio and
T-bills in this portfolio recall from (xx) that the standard deviation of a portfolio with
xT invested in the tangency portfolio and 1 − xT invested in T-bills is σ p = xT σ T .
Since we want to &nd the eﬃcient portfolio with σ p = σ B = 0.115, we solve

                                                   σB   0.115
                                        xT =          =       = 0.917, xf = 1 − xT = 0.083.
                                                   σT   0.124
That is, if we invest 91.7% of our wealth in the tangency portfolio and 8.3% in T-bills
we will have a portfolio with the same standard deviation as asset B. Since this is an
eﬃcient portfolio, the expected return should be higher than the expected return on

                                                                                    12
asset B. Indeed it is since

                             µp = rf + xT (µT − rf )
                                = 0.03 + 0.917(0.110 − 0.03)
                                = 0.103

Notice that by diversifying our holding into assets A, B and T-bills we can obtain a
portfolio with the same risk as asset B but with almost twice the expected return!
    Next, consider &nding an eﬃcient portfolio that has the same expected return
as asset B. Visually, this involves &nding the combination of the tangency portfo-
lio and T-bills that corresponds with the intersection of a horizontal line with in-
tercept µB = 0.055 and the line representing eﬃcient combinations of T-bills and
the tangency portfolio. To &nd the shares in the tangency portfolio and T-bills in
this portfolio recall from (xx) that the expected return of a portfolio with xT in-
vested in the tangency portfolio and 1 − xT invested in T-bills has expected return
equal to µp = rf + xT (µT − rf ). Since we want to &nd the eﬃcient portfolio with
µp = µB = 0.055 we use the relation

                                    µp − rf = xT (µT − rF )

and solve for xT and xf = 1 − xT
                     µp − rf   0.055 − 0.03
              xT =           =              = 0.313, xf = 1 − xT = 0.687.
                     µT − rf   0.110 − 0.03

That is, if we invest 31.3% of wealth in the tangency portfolio and 68.7% of our
wealth in T-bills we have a portfolio with the same expected return as asset B. Since
this is an eﬃcient portfolio, the standard deviation (risk) of this portfolio should be
lower than the standard deviation on asset B. Indeed it is since

                                     σ p = xT σ T
                                         = 0.313(0.124)
                                         = 0.039.

Notice how large the risk reduction is by forming an eﬃcient portfolio. The standard
deviation on the eﬃcient portfolio is almost three times smaller than the standard
deviation of asset B!
   The above example illustrates two ways to interpret the bene&ts from forming
eﬃcient portfolios. Starting from some benchmark portfolio, we can &x standard de-
viation (risk) at the value for the benchmark and then determine the gain in expected
return from forming a diversi&ed portfolio2 . The gain in expected return has concrete
   2
    The gain in expected return by investing in an eﬃcient portfolio abstracts from the costs asso-
ciated with selling the benchmark portfolio and buying the eﬃcient portfolio.

                                                13
meaning. Alternatively, we can &x expected return at the value for the benchmark
and then determine the reduction in standard deviation (risk) from forming a diver-
si&ed portfolio. The meaning to an investor of the reduction in standard deviation
is not as clear as the meaning to an investor of the increase in expected return. It
would be helpful if the risk reduction bene&t can be translated into a number that is
more interpretable than the standard deviation. The concept of Value-at-Risk (VaR)
provides such a translation.
    Recall, the VaR of an investment is the expected loss in investment value over a
given horizon with a stated probability. For example, consider an investor who invests
W0 = $100, 000 in asset B over the next year. Assume that RB represents the annual
(continuously compounded) return on asset B and that RB ~N(0.055, (0.114)2 ). The
5% annual VaR of this investment is the loss that would occur if return on asset B is
equal to the 5% left tail quantile of the normal distribution of RB . The 5% quantile,
q0.05 is determined by solving

                                  Pr(RB ≤ q0.05 ) = 0.05.

Using the inverse cdf for a normal random variable with mean 0.055 and standard
deviation 0.114 it can be shown that q0.05 = −0.133.That is, with 5% probability the
return on asset B will be −13.3% or less. If RB = −0.133 then the loss in portfolio
value3 , which is the 5% VaR, is

loss in portfolio value = V aR = |W0 · (eq0.05 − 1)| = |$100, 000(e−0.133 − 1)| = $12, 413.

To reiterate, if the investor hold $100,000 in asset B over the next year then the 5%
VaR on the portfolio is $12, 413. This is the loss that would occur with 5% probability.
    Now suppose the investor chooses to hold an eﬃcient portfolio with the same
expected return as asset B. This portfolio consists of 31.3% in the tangency portfolio
and 68.7% in T-bills and has a standard deviation equal to 0.039. Let Rp denote the
annual return on this portfolio and assume that Rp ~N (0.055, 0.039). Using the inverse
cdf for this normal distribution, the 5% quantile can be shown to be q0.05 = −0.009.
That is, with 5% probability the return on the eﬃcient portfolio will be −0.9% or
less. This is considerably smaller than the 5% quantile of the distribution of asset B.
If Rp = −0.009 the loss in portfolio value (5% VaR) is

 loss in portfolio value = V aR = |W0 · (eq0.05 − 1)| = |$100, 000(e−0.009 − 1)| = $892.

Notice that the 5% VaR for the eﬃcient portfolio is almost &fteen times smaller than
the 5% VaR of the investment in asset B. Since VaR translates risk into a dollar &gure
it is more interpretable than standard deviation.
  3
    To compute the VaR we need to convert the continuous compounded return (quantile) to a
simple return (quantile). Recall, if Rct is a continuously compounded return and Rt is a somple
                                          c
return then Rct = ln(1 + Rt ) and Rt = eRt − 1.


                                              14
3     Further Reading
The classic text on portfolio optimization is Markowitz (1954). Good intermediate
level treatments are given in Benninga (2000), Bodie, Kane and Marcus (1999) and
Elton and Gruber (1995). An interesting recent treatment with an emphasis on
statistical properties is Michaud (1998). Many practical results can be found in the
Financial Analysts Journal and the Journal of Portfolio Management. An excellent
overview of value at risk is given in Jorian (1997).


4     Appendix Review of Optimization and Con-
      strained Optimization
Consider the function of a single variable

                                      y = f (x) = x2

which is illustrated in Figure xxx. Clearly the minimum of this function occurs at
the point x = 0. Using calculus, we &nd the minimum by solving

                                      min
                                       x
                                          y = x2 .

The &rst order (necessary) condition for a minimum is

                                     d          d 2
                               0=      f (x) =    x = 2x
                                    dx         dx
and solving for x gives x = 0. The second order condition for a minimum is

                                            d2
                                       0<      f (x)
                                            dx
and this condition is clearly satis&ed for f (x) = x2 .
   Next, consider the function of two variables

                                 y = f(x, z) = x2 + z 2                          (6)

which is illustrated in Figure xxx.




                                            15
                                                                                    y = x^2 + z^2




                    8


                    7


                    6


                    5


                   y 4


                        3


                        2

                                                                                                                                                            1.75
                        1                                                                                                                              1
                                                                                                                                                     0.25
                        0                                                                                                                                   z
                                                                                                                                                -0.5
                            -2
                                 -1.75
                                         -1.5




                                                                                                                                             -1.25
                                                -1.25
                                                        -1
                                                             -0.75
                                                                     -0.5
                                                                            -0.25
                                                                                    0
                                                                                        0.25
                                                                                               0.5




                                                                                                                                        -2
                                                                                                     0.75
                                                                                                            1
                                                                                                                1.25
                                                                                                                       1.5
                                                                                                                             1.75
                                                                                                                                    2
                                                                     x




                                                                      Figure 6
   This function looks like a salad bowl whose bottom is at x = 0 and z = 0. To &nd
the minimum of (6), we solve
                                   min  y = x2 + z 2
                                    x,z
and the &rst order necessary conditions are
                                        ∂y
                                    0=      = 2x
                                        ∂x
and
                                        ∂y
                                   0=       = 2z.
                                        ∂z
Solving these two equations gives x = 0 and z = 0.
   Now suppose we want to minimize (6) subject to the linear constraint
                                                                     x + z = 1.                                                                                    (7)
The minimization problem is now a constrained minimization
                             min
                             x,z
                                 y = x2 + z 2 subject to (s.t.)
                             x+z = 1

                                                                                16
and is illustrated in Figure xxx. Given the constraint x + z = 1, the function (6) is
no longer minimized at the point (x, z) = (0, 0) because this point does not satisfy
x + z = 1. The One simple way to solve this problem is to substitute the restriction
(7) into the function (6) and reduce the problem to a minimization over one variable.
To illustrate, use the restriction (7) to solve for z as

                                         z = 1 − x.                               (8)

Now substitute (7) into (6) giving

                     y = f(x, z) = f (x, 1 − x) = x2 + (1 − x)2 .                 (9)

The function (9) satis&es the restriction (7) by construction. The constrained mini-
mization problem now becomes

                                  min y = x2 + (1 − x)2 .
                                     x

The &rst order conditions for a minimum are
                        d 2
                  0=      (x + (1 − x)2 ) = 2x − 2(1 − x) = 4x − 2
                       dx
and solving for x gives x = 1/2. To solve for z, use (8) to give z = 1 − (1/2) = 1/2.
Hence, the solution to the constrained minimization problem is (x, z) = (1/2, 1/2).
   Another way to solve the constrained minimization is to use the method of La-
grange multipliers. This method augments the function to be minimized with a linear
function of the constraint in homogeneous form. The constraint (7) in homogenous
form is
                                    x+z−1=0
The augmented function to be minimized is called the Lagrangian and is given by

                          L(x, z, λ) = x2 + z 2 − λ(x + z − 1).

The coeﬃcient on the constraint in homogeneous form, λ, is called the Lagrange
multiplier. It measures the cost, or shadow price, of imposing the constraint relative
to the unconstrained problem. The constrained minimization problem to be solved
is now
                      min L(x, z, λ) = x2 + z 2 + λ(x + z − 1).
                       x,z,λ

The &rst order conditions for a minimum are
                                   ∂L(x, z, λ)
                               0 =             = 2x + λ
                                      ∂x
                                   ∂L(x, z, λ)
                               0 =             = 2z + λ
                                      ∂z
                                   ∂L(x, z, λ)
                               0 =             =x+z−1
                                      ∂λ
                                            17
The &rst order conditions give three linear equations in three unknowns. Notice that
the &rst order condition with respect to λ imposes the constraint. The &rst two
conditions give
                                   2x = 2z = −λ
or
                                       x = z.
Substituting x = z into the third condition gives
                                     2z − 1 = 0
or
                                      z = 1/2.
The &nal solution is (x, y, λ) = (1/2, 1/2, −1).
    The Lagrange multiplier, λ, measures the marginal cost, in terms of the value of
the objective function, of imposing the constraint. Here, λ = −1 which indicates
that imposing the constraint x + z = 1 reduces the objective function. To understand
the roll of the Lagrange multiplier better, consider imposing the constraint x + z =
0. Notice that the unconstrained minimum achieved at x = 0, z = 0 satis&es this
constraint. Hence, imposing x + z = 0 does not cost anything and so the Lagrange
multiplier associated with this constraint should be zero. To con&rm this, the we
solve the problem
                      min L(x, z, λ) = x2 + z 2 + λ(x + z − 0).
                      x,z,λ

The &rst order conditions for a minimum are
                                   ∂L(x, z, λ)
                            0 =                = 2x − λ
                                       ∂x
                                   ∂L(x, z, λ)
                            0 =                = 2z − λ
                                       ∂z
                                   ∂L(x, z, λ)
                            0 =                = x+z
                                       ∂λ
The &rst two conditions give
                                   2x = 2z = −λ
or
                                       x = z.
Substituting x = z into the third condition gives
                                       2z = 0
or
                                       z = 0.
The &nal solution is (x, y, λ) = (0, 0, 0). Notice that the Lagrange multiplier, λ, is
equal to zero in this case.

                                         18
5    Problems
Exercise 1 Consider the problem of investing in two risky assets A and B and a
risk-free asset (T-bill). The optimization problem to &nd the tangency portfolio may
be reduced to
                             xA (µA − rf ) + (1 − xA )(µB − rf )
                 max                                                    1/2
                  xA
                       (x2A σ 2A + (1 − xA )2 σ 2B + 2xA (1 − xA )σ AB )

where xA is the share of wealth in asset A in the tangency portfolio and xB = 1 − xA
is the share of wealth in asset B in the tangency portfolio. Using simple calculus,
show that
                               (µA − rf )σ 2B − (µB − rf )σ AB
           xA =                                                            .
                (µA − rf )σ 2B + (µB − rf )σ 2A − (µA − rf + µB − rf )σ AB

References
[1] Benninga, S. (2000), Financial Modeling, Second Edition. Cambridge, MA: MIT
    Press.

[2] Bodie, Kane and Marcus (199x), Investments, xxx Edition.

[3] Elton, E. and G. Gruber (1995). Modern Portfolio Theory and Investment Anal-
    ysis, Fifth Edition. New York: Wiley.

[4] Jorian, P. (1997). Value at Risk. New York: McGraw-Hill.

[5] Markowitz, H. (1987). Mean-Variance Analysis in Portfolio Choice and Capital
    Markets. Cambridge, MA: Basil Blackwell.

[6] Markowitz, H. (1991). Portfolio Selection: Eﬃcient Diversi&cation of Invest-
    ments. New York: Wiley, 1959; 2nd ed., Cambridge, MA: Basil Blackwell.

[7] Michaud, R.O. (1998). Eﬃcient Asset Management: A Practical Guide to
    Stock Portfolio Optimization and Asset Allocation. Boston, MA:Harvard Business
    School Press.




                                            19
          W?|hL_U|L? |L 6?@?U@* ,UL?L4i|hUt
           @T|ih D Ai @h!L|3 *}Lh|4
                                   ,hU ~L|
                            #iT@h|4i?| Lu ,UL?L4Ut
                            N?iht|) Lu `@t?}|L?
                              a@?@h) 2Sc 2fff
                       At ihtL?G 6iMh@h) bc 2fff


 ,Ui?| Lh|uL*Lt | Ahii +t!) tti|tG Ai
     @h!L|3 *}Lh|4
L?t_ih |i TLh|uL*L ThLM*i4 | |hii ht!) @tti|t _i?L|i_ c  @?_  wi| -
E ' cc   _i?L|i |i hi|h? L? @tti|  @?_ @tt4i |@|
                                       -  _  E> cj2
                                                                 

                            SJE- c -  ' j  

6Lh **t|h@|i ThTLtitc A@M*i  ThL_it i @4T*i _@|@ L? 4i@?tc @h@?Uit @?_
UL@h@?Uit
                                            A@M*i 
                      5|LU!       >        @h Ec j
                                            j 2                       

                               f22b fb2e Ec ffS
                               f H fHS2 Ec fDH2
                               ffD2 fD2H            Ec       f Db
    wi| % _i?L|i |i t@hi Lu i@*| ?it|i_ ? @tti|  @?_ @tt4i |@| @** i@*|
t ?it|i_ ? |i |hii @tti|t tL |@| % n % n % '  Ai TLh|uL*L hi|h?c -R c t
|i h@?_L4 @h@M*i
                            -Rc% ' % - n % - n % - 

Ai tMtUhT| R  ?_U@|it |@| |i TLh|uL*L t UL?t|hU|i_ t?} |i i}|t
% c % @?_ %  Ai i TiU|i_ hi|h? L? |i TLh|uL*L t


                       >Rc% ' . d-Rc% o ' % > n % > n % >                    E

                                                   
@?_ |i @h@?Ui Lu |i TLh|uL*L hi|h? t
  2
 jRc%   ' @oE-Rc% ' %2 j2 n %2 j2 n %2 j2 n2%% j n2% % j n2% % j  E2
L|Ui |@| @h@?Ui Lu |i TLh|uL*L hi|h? _iTi?_t L? |hii @h@?Ui |ih4t @?_ t
UL@h@?Ui |ih4t Oi?Uic | |hii @tti|t |ihi @hi |Ui @t 4@?) UL@h@?Ui |ih4t
|@? @h@?Ui |ih4t UL?|hM|?} |L TLh|uL*L @h@?Ui 6Lh i @4T*ic *i| % ' * 
Ai?
                                            
         >Rc%  ' E Ef22b n E Ef H n E EfD2H
                       ' fef
                2                                   
               j Rc%   ' E 2 Efb2e n E EfHS2 n E EfD2H
                                                               
                                                                            
                            n2E E EffS  n 2E E E fDH2 n 2E E E f Db
                       ' ffS2
    Ai ?it|4i?| LTTLh|?|) ti| t |i ti| Lu TLh|uL*L i TiU|i_ hi|h? @?_ TLh|uL*L
t|@?_@h_ _i@|L? @*it uLh @** TLttM*i TLh|uL*Lt tU |@| % n % n % '  t ?
|i |L ht!) @tti| U@tic |t ti| U@? Mi _itUhMi_ ? @ }h@T | >R L? |i ih|U@*
@ t @?_ j R L? |i Lh3L?|@* @ t N?*!i |i |L @tti| U@tic Liihc |i ?it|4i?|
LTTLh|?|) ti| U@??L| Mi t4T*) _itUhMi_ M) L?i t_i Lu @? )TihML*@ Ai }i?ih@*
t@Ti Lu |i ti| t UL4T*U@|i_ @?_ _iTi?_t UhU@**) L? |i UL@h@?Ui |ih4t j   t
i t@** tiic i _L ?L| @i |L u**) U@h@U|ih3i |i ?it|4i?| LTTLh|?|) ti| Wu
i @tt4i |@| ?it|Lht L?*) U@hi @ML| 4@ 43?} TLh|uL*L i TiU|i_ hi|h? @?_
4?43?} TLh|uL*L @h@?Ui ? _iU_?} |ih @tti| @**LU@|L? |i? i U@? t4T*u)
|i TLh|uL*L ThLM*i4 M) L?*) UL?Ui?|h@|?} L? |i UL4M?@|L? Lu iUi?| TLh|uL*Lt
Mi|ii? @tti|t c  @?_  At t |i uh@4iLh! Lh}?@**) _ii*LTi_ M) O@hh)
@h!L|3c |i u@|ih Lu TLh|uL*L |iLh) @?_ ??ih Lu |i LMi* h3i ? iUL?L4Ut
    `i @tt4i |@| |i ?it|Lh tit |L ?_ TLh|uL*Lt |@| @i |i Mit| i TiU|i_
hi|h?ht! |h@_iLg W? L|ih Lh_tc i @tt4i |@| |i ?it|Lh tii!t |L ?_ TLh|
uL*Lt |@| 4@ 43i TLh|uL*L i TiU|i_ hi|h? uLh @ }i? *ii* Lu ht! @t 4i@thi_
M) TLh|uL*L @h@?Ui wi| j 2Rcf _i?L|i @ |@h}i| *ii* Lu ht! Ai? |i ?it|Lh tii!t
|L tL*i |i UL?t|h@?i_ 4@ 43@|L? ThLM*i4
      4@
  % c% c%
                >   Rc% '       n % > n % > tMiU| |L Er|
                            % >                                                              E 
                j2Rcf ' j2Rc%
                      ' %2 j2 n %2 j 2 n %2 j 2 n 2% % j  n 2% % j  n 2% % j
                     ' % n % n %
At ThLM*i4 t **t|h@|i_ ? 6}hi        Ai TLh|uL*L | i}|t E% c % c % 
|@| t@|tit |i @MLi 4@ 43@|L? ThLM*i4 tc M) _i?|L?c @? iUi?| TLh|uL*L
Ai iUi?| TLh|uL*L uhL?|ih t }h@T Lu >R ihtt jR uLh |i ti| Lu iUi?| TLh|uL*Lt

                                                 2
}i?ih@|i_ M) tL*?} E  uLh @** TLttM*i |@h}i| ht! *ii*t j2Rcf at| @t ? |i |L @tti|
U@tic |i iUi?| uhL?|ih ? hiti4M*it L?i t_i Lu @? )TihML*@
    Ai ?it|Lh<t ThLM*i4 Lu 4@ 43?} TLh|uL*L i TiU|i_ hi|h? tMiU| |L @ |@h}i|
*ii* Lu ht! @t @? i^@*i?| _@* hiThiti?|@|L? ? U |i ?it|Lh 4?43it |i
ht! Lu |i TLh|uL*L E@t 4i@thi_ M) TLh|uL*L @h@?Ui tMiU| |L @ |@h}i| i TiU|i_
hi|h? *ii* wi| >Rcf _i?L|i @ |@h}i| i TiU|i_ hi|h? *ii* Ai? |i _@* ThLM*i4
t |i UL?t|h@?i_ 4?43@|L? ThLM*i4
                 4?
              % c% c%
                           j 2Rc%        '
                                              2    2   2   2     2
                                                n % j  n % j
                                             % j
                                                                     2
                                                                                                       Ee

                                             n2% % j n 2% % j n 2% % j        r|

                           >   Rcf       '      n % > n % >
                                             % >

                                        '   % n % n %


    AL ?_ iUi?| TLh|uL*Lt Lu ht!) @tti|t ? Th@U|Uic |i _@* ThLM*i4 Ee t 4Lt|
Lu|i? tL*i_ At t T@h|@**) _i |L UL4T|@|L?@* UL?i?i?Uit @?_ T@h|*) _i |L
?it|Lht Mi?} 4Lhi **?} |L tTiUu) |@h}i| i TiU|i_ hi|h?t h@|ih |@? |@h}i| ht!
*ii*t AL tL*i |i UL?t|h@?i_ 4?43@|L? ThLM*i4 Eec i uLh4 |i w@}h@?}@?
uE% c % c % c b c b2      '         %2 j 2 n %2 j 2 n %2 j2 n 2% % j  n 2% % j n 2% % j 
                                         nb E% > n % > n % >  >Rcf  n b2 E% n % n %  

Ai ht| Lh_ih UL?_|L?t uLh @ 4?44 @hi
                                Yu                 2
                  f '                    ' 2% j n 2% j  n 2% j  n b > n b2                   ED
                               Y%    
                               Yu          2
                  f    '           ' 2% j  n 2% j n 2% j n b > n b2
                               Y%
                               Yu          2
                  f    '           ' 2% j n 2% j  n 2% j  n b > n b2
                               Y%
                               Yu
                  f    '           ' % > n % > n % >  >Rcf
                               Yb
                               Yu
                  f '          Yb2
                                   ' % n % n %  
Aiti @hi i *?i@h i^@|L?t ? i ?!?L?t @?_ @ ?^i tL*|L? U@? Mi uL?_
@t *L?} @t |ihi @hi ?L *?i@h _iTi?_i?Uit @4L?} |i i^@|L?t Ai tL*|L? uLh
% c % @?_ % }it @? iUi?| TLh|uL*L | i TiU|i_ hi|h? >Rc% ' >Rcf c @h@?Ui
j2Rc% }i? M) E2 @?_ t|@?_@h_ _i@|L? jRc%  Ai T@h E>Rc% c j Rc%  T*L|t @t @ t?}*i
TL?| L? |i iUi?| uhL?|ih Lu TLh|uL*Lt Lu |hii ht!) @tti|t
     6Lh i @4T*ic t?} |i _@|@ ? A@M*i  @?_ @ |@h}i| i TiU|i_ hi|h? Lu >Rcf ' ff
|i tL*|L? uLh |i iUi?| TLh|uL*L U@? Mi tL? |L Mi % ' f bHc % ' f 
   4 Qrw doo wdujhw ulvn ohyhov duh ihdvleoh1 Wkh ihdvleoh ulvn ohyhov duh wkrvh wkdw duh juhdwhu wkdq ru

htxdo wr wkh joredo plqlpxp yduldqfh sruwirolr1
@?_ % ' fS. 6Lh u|hi hiuihi?Uic U@** |t TLh|uL*L R@tti| j L|Ui |@| @tti| 
t tL*_ tLh| ? |t TLh|uL*L Ai i TiU|i_ hi|h?c @h@?Ui @?_ t|@?_@h_ _i@|L?
Lu |t TLh|uL*L @hi
> Rc% ' >Rcf ' Ef bHEf22b n Ef Ef H n EfS.EfD2H
      ' ffD
  2
j Rc% ' Ef bH2 Efb2e n Ef EfHS2 n EfS.EfD2H
        n2Ef bHEf EffS  n 2Ef bHEfS.EfDH2 n 2Ef EfS.Ef Db

            s
      ' fSS
j Rc%   '       fSS ' f        


Ai T@h E>Rcf c jRc%  ' Effc f  t **t|h@|i_ ? }hi 
    AL }i| @?L|ih TL?| L? |i iUi?| uhL?|ih |i 4?43@|L? ThLM*i4 Ee ?ii_t
|L Mi tL*i_ t?} @?L|ih |@h}i| i TiU|i_ hi|h? @*i >Rc 9' >Rcf A@| tc i ?ii_
|L ?_ @ TLh|uL*L | i}|t + c + @?_ + |@| tL*it

                        +4?
                          c+ c+ jRc+
                                       2   2 2
                                                   '
                                                   2 2      2 2
                                            j n + j  n + j  n 2+ + j 
                                                       +                                   ES
                                          n2+ + j n 2+ + j  r|
                                   >Rc ' + > n + > n + >
                                       ' + n + n +
Ai tL*|L? uLh + c + @?_ + }it @? iUi?| TLh|uL*L | i TiU|i_ hi|h? >Rc+ '
>Rcc @h@?Ui j 2Rc+ }i? M) Eqq @?_ t|@?_@h_ _i@|L? j Rc+  Ai T@h E>Rc+ c j Rc+ 
T*L|t @t @ t?}*i TL?| _gihi?| uhL4 E>Rc% c j Rc+  L? |i iUi?| uhL?|ih Lu TLh|uL*Lt
    6Lh i @4T*ic t?} |i _@|@ ? A@M*i  @?_ @ |@h}i| i TiU|i_ hi|h? Lu >Rcf ' f2D
|i tL*|L? uLh |i iUi?| TLh|uL*L U@? Mi tL? |L Mi % ' fb.c % ' ffeD @?_
% ' f e2 6Lh u|hi hiuihi?Uic U@** |t TLh|uL*L R@tti| v L|Ui |@| @tti| 

t tL*_ tLh| ? |t TLh|uL*L Ai i TiU|i_ hi|h?c @h@?Ui @?_ t|@?_@h_ _i@|L?
Lu |t TLh|uL*L @hi
>Rc+ ' >Rc ' Efb.Ef22b n EffeDEf H n Efe2EfD2H
        ' f2D
 2
j Rc+   ' E fb.2Ef b2e n Ef feDEf HS2 n Ef e2Ef D2H
                                                                      

          n2E fb.Ef feDEf fS  n 2E fb.Ef e2Ef DH2 n 2Ef feDEf e2Ef Db
                                                                                         

        '  S
          s 

j Rc+   '        S ' e.
Ai T@h E>Rc c jRc+  ' Ef2Dc e. t **t|h@|i_ ? }hi 
   AL Uhi@|i |i i?|hi iUi?| uhL?|ih i UL*_ tL*i |i 4?43@|L? ThLM*i4
Ee uLh @** TLttM*i |@h}i| i TiU|i_ hi|h?t |? tL4i h@?}i At Mh|i uLhUi
@TThL@Uc *i **t|h@|ic t ?L| ih) Th@U|U@* UL4T|@|L?@**) 6Lh|?@|i*)c |ihi

                                                                   e
t @? i@tih @) |L UL4T|i |i i?|hi iUi?| uhL?|ih |@| L?*) hi^hit tL*?}
Ee uLh |L |@h}i| hi|h?t t i t@** tiic }i? @?) |L TLh|uL*Lt L? |i iUi?|
uhL?|ih @?L|ih TLh|uL*L L? |i iUi?| uhL?|ih t @ t4T*i UL?i UL4M?@|L? Lu
|iti |L TLh|uL*Lt Oi?Uic |i hit*|t uLh |i UL?t|hU|L? Lu iUi?| TLh|uL*Lt |
|L ht!) @tti|t U@? Mi ti_ |L UL4T|i iUi?| TLh|uL*Lt | @? @hM|h@h) ?4Mih
Lu ht!) @tti|t
    AL **t|h@|i |t hit*|c UL?t_ih |i |L iUi?| TLh|uL*Lt |@| @hi |i tL*|L?t
Lu Ee @?_ ES L UL?t_ih uLh4?} @ ?i TLh|uL*L |@| t @ UL?i UL4M?@|L?
Lu |iti |L TLh|uL*Lt wi| 5% _i?L|i |i t@hi Lu i@*| ?it|i_ ? @tti| j Eht|
iUi?| TLh|uL*L @?_ *i| 5+ _i?L|i |i t@hi Lu i@*| ?it|i_ ? @tti| v EtiUL?_
iUi?| TLh|uL*L @?_ 4TLti |i UL?t|h@?| 5% n 5+ '  Ai i TiU|i_ hi|h? @?_
@h@?Ui Lu |t TLh|uL*L t
                              > Rc5      '   5% >Rc% n 5+ >Rc+                          E.
                                  2
                              j Rc5      '   5% jRc% n 5+2j 2Rc+ n 25% 5+ j%+
                                              2 2
                                                                                        EH
ihi
                                          j%+ ' SJE-Rc% c -Rc+ 
@?_ -Rc% _i?L|it |i hi|h? L? @tti| j @?_ -Rc+ _i?L|it |i hi|h? L? @tti| v ?Ui
i UL4T|i j %+ |i? i U@? i@t*) |h@Ui L| |i iUi?| uhL?|ih
   AL UL4T|i j %+ i ht| ?L|i |@|
                                      -Rc% ' % - n % - n % -
@?_
                                      -Rc+ ' + - n + - n + - 
Ai?c M) |i @__||) Lu UL@h@?Uitc i @i
      j %+ ' SJE% - n % - n % - c + - n + - n + -                         Eb
           ' SJE% - c + -  n SJE% - c + -  n SJ E% - c + - 
              nSJE% - c + -  n SJE% - c + -  n SJ E% - c + - 
              nSJE% - c + -  n SJE% - c + -  n SJ E% - c + - 
            ' % + j2 n % + j2 n % + j 2
              nE% + n % + j n E% + n % + j  n E% + n % + j 
    AL **t|h@|i |iti hit*|tc UL?t_ih |i i @4T*i _@|@ | |i ThiLt*) UL4
T|i_ iUi?| TLh|uL*Lt _i?L|i_ @tti| j @?_ @tti| v L?t_ih uLh4?} @ TLh|uL*L Lu
|iti |L TLh|uL*Lt | |i i}|t 5% ' fD @?_ 5+ ' fD Ai? M) t|h@}|uLh@h_
U@*U*@|L?t i @i
         j %+    '    S

         >Rc5    ' EfDEff n EfDEf2D ' f f
          2
                 ' Ef D2E fSS n Ef D2E S n 2Ef DEf DE S  ' f fe
                   s
         j Rc5                                                               

         j Rc5   '    ffe ' fH

                                                           D
Lh|uL*L ~ t @? iUi?| TLh|uL*L @?_ |i T@h E>Rc5 c jRc5  ' Ef fc fH *it L?
|i iUi?| uhL?|ih At TL?| t **t|h@|i_ ? }hi            AL |h@Ui L| |i i?|hi
uhL?|ih i t4T*) @h) |i i}|t 5% @?_ 5+ Lih tL4i h@?}ic t@) E5% c 5+  ' Efc c
Efc fb c    c Ec fcUL4T|i E. @?_ EH @?_ T*L| >Rc5 @}@?t| jRc5  At t **t|h@|i_
? }hi         

 6?_?} |i B*LM@* ?44 V@h@?Ui Lh|uL*L
Ai }*LM@* 4?44 @h@?Ui TLh|uL*L 4 ' E6 c6 c6  uLh |i |hii @tti| U@ti
                                                                    



tL*it |i UL?t|h@?i_ 4?43@|L? ThLM*i4

              c6 c6 jRc6 ' 6 j  n 6 j  n 6 j 
                       2          2   2     2   2     2   2
            64?                                                                          Ef
                               n26 6 j  n 26 6 j n 26 6 j r|
                            ' 6 n 6 n 6 
Ai w@}h@?}@? uLh |t ThLM*i4 t
uE6c6 c6 cb ' 62j2 n 62 j2 n 62 j2 n 266 j n 266 j n 26 6 j
                  nbE6 n 6 n 6  c
@?_ |i ht| Lh_ih UL?_|L?t uLh @ 4?44 @hi
                     f '
                          Yu ' 26j2 n 26 j n 26 j n b
                         Y6                                                              E

                          Yu ' 26 j2 n 26 j n 26 j n b
                     f '
                         Y6        
                          Yu ' 26 j2 n 26j n 26 j n b
                     f '
                         Y6        
                         Yu ' 6 n 6 n 6  
                     f '
                         Yb
At }it uLh *?i@h i^@|L?t ? uLh ?!?L?t U U@? Mi tL*i_ |L ?_ |i
}*LM@* 4?44 @h@?Ui TLh|uL*L
   Nt?} |i _@|@ ? A@M*i c | U@? Mi tL? |@| |i }*LM@* 4?44 @h@?Ui
TLh|uL*L t 6 ' f fc 6 ' fbS @?_ 6 ' febD Ai i TiU|i_ hi|h?c @h@?Ui
@?_ t|@?_@h_ _i@|L? Lu |t TLh|uL*L @hi
>   Rc6 '    > Rc ' Ef fEf22b n EfbSEf H n EfebDEfD2H
          ' f2e
    2
j   Rc6   ' Ef f2 Efb2e n EfbSEfHS2 n EfebDEfD2H
                                                              
             n2Ef fEfbSEffS  n 2Ef fEfebDE fDH2 n 2EfbSEfebDE f Db  
      ' ff
        s
j Rc6 '   ff ' ff 
Ai T@h E>Rc6 c j Rc6  ' Effc ff  t **t|h@|i_ ? }hi       

                                                S
2 __?} @ +t!6hii tti|
L?t_ih @__?} @ ht!uhii @tti| EAM** | !?L? hi|h? os |L |i ?it|4i?|
ThLM*i4 6hL4 Lh @?@*)tt Lu TLh|uL*Lt Lu |L ht!) @tti|t @?_ @ ht!uhii @tti| i
!?L uhL4 |i 4|@* u?_ tiT@h@|L? |iLhi4 |@| |i iUi?| ti| Lu TLh|uL*Lt @hi
UL4M?@|L?t Lu |i ht!uhii @tti| @?_ |i tLU@**i_ |@?}i?U) TLh|uL*L Ai |@?}i?U)
TLh|uL*L t |i TLh|uL*L Lu ht!) @tti|t |@| @t |i *@h}it| 5@hTi<t t*LTi wi| | c |
@?_ | _i?L|i |i ThLTLh|L?t Lu @tti|t c  @?_  ? |i |@?}i?U) TLh|uL*L AL
?_ |i |@?}i?U) TLh|uL*L2 c i tL*i
                                                         >Rc|  os
                                                   4@
                                               |     
                                                    c|   c| j Rc|
ihi

               >Rc| ' | > n | > n | > c
               j2Rc| ' |2 j2 n |2 j2 n |2 j2 n 2| | j  n 2| | j  n 2| | j  
   Nt?} |i _@|@ uhL4 A@M*i  @?_ @tt4?} @ ht!uhii h@|i Lu os ' f2c | U@? Mi
tL? |@| |i |@?}i?U) TLh|uL*L t | ' fD 2c | ' fD @?_ | ' f D Ai
i TiU|i_ hi|h?c @h@?Ui @?_ t|@?_@h_ _i@|L? Lu |t TLh|uL*L @hi

>   Rc| ' EfD 2Ef22b n EfD Ef H n Ef DEfD2H
        ' fDb
    2
j Rc|      ' Ef D 22Ef b2e n Ef D Ef HS2 n Ef DEf D2H
                                                                 

             n2Ef D 2Ef D Ef fS  n 2Ef D 2Ef DEf DH2 n 2Ef D Ef DEf Db
                                                                                                

           ' f D
             s   

j Rc|      '         fD ' f b
Ai T@h E>Rc| c jRc|  ' EfDc f b t **t|h@|i_ ? }hi       
    Ai |@?}i?U) TLh|uL*L U@? @*tL Mi uL?_ @?@*)|U@**) t?} |i uLh4*@ uLh |i
|@?}i?U) TLh|uL*L ? |i U@ti Lu |L ht!) @tti|t W? Lh_ih |L ti |t uLh4*@c L
iihc |i |L ht!) @tti|t 4t| Mi iUi?| TLh|uL*Lt AL **t|h@|ic UL?t_ih |i |L
iUi?| TLh|uL*Ltc TLh|uL*Lt j @?_ vc |@| tL*i Ee @?_ ES Aiti TLh|uL*Lt @i
i TiU|i_ hi|h?t @?_ @h@?Uit >Rc% c >Rc+ c j 2Rc% @?_ j 2Rc+  W? @__|L?c |i UL@h@?Ui
Mi|ii? |i hi|h?t L? |iti |L TLh|uL*Lt t j%+  wi| |% _i?L|i |i t@hi Lu i@*|
? TLh|uL*L j @?_ |+ '   |% _i?L|i |i t@hi Lu i@*| ? TLh|uL*L v Ai?c t?}
|i @?@*)|U uLh4*@ uLh |i |L ht!) @tti| U@tic i @i
                              E>Rc%  os j2Rc+  E>Rc+  os j %+
    |% '                                                                          c |+ '   |%  E2
            E>Rc%  os j 2Rc+ n E>Rc+  os j 2Rc%  E>Rc%  os n >Rc+  os j%+

        5 Wklv lv d yhu| whglrxv fdofxoxv sureohp1 Krzhyhu/ lw lv hdvlo| vroyhg qxphulfdoo| xvlqj wkh Vroyhu

lq H[FHO1




                                                              .
Ai i TiU|i_ hi|h? @?_ @h@?Ui Lu |t TLh|uL*L @hi
                                   >Rc| ' |% >Rc% n |+ >Rc+ c
                                   j2Rc| ' |% 2 j2Rc% n |2+ j 2Rc+ n 2|% |+ j %+ 
   AL **t|h@|i |t hit*| t?} |i _@|@ ? A@M*i c hiU@** |@| >Rc% ' ffc >Rc+ '
f2Dc j 2Rc% ' fSSc j2Rc+ '  S @?_ j %+ ' S  5Mt|||?} |iti @*it ?|L
E2 }it |% ' f .H @?_ |+ ' fS22 Ai i TiU|i_ hi|h?c @h@?Ui @?_ t|@?_@h_
_i@|L? Lu |i |@?}i?U) TLh|uL*L @hi
      >Rc|    ' Ef .HEff n EfS22Ef2D ' fDbc
        2
      j Rc|   ' Ef .H2E fSS n Ef S22E S n 2Ef .HEf S22E S  ' f D
                                                                                                 c

      j Rc|   ' ff c
U @hi |i t@4i @t |Lti uL?_ @MLi Ai i}|t ? @tti|t c @?_  ? |i
|@?}i?U) TLh|uL*L @hi
               |   '    |% % n |+ + ' Ef .HE          f bH n Ef S22E fb. ' f D 2
                                                                                              

              |  '       %  n |+ + ' Ef .HEf  n EfS22EffeD ' fD c
                         | %

               | '      |% % n |+ + ' Ef  .HE fS. n Ef S22Ef e2 ' f Dc


U @hi _i?|U@* |L |Lti uL?_ @MLi


2 Lh|uL*L 4@| | 4@|h @*}iMh@
`i? Lh!?} | *@h}i TLh|uL*Ltc |i t4T*i @*}iMh@ Lu hiThiti?|?} TLh|uL*L 4i@?t
@?_ @h@?Uit MiUL4it U4MihtL4i Ai ti Lu 4@|h E*?i@h @*}iMh@ U@? }hi@|*)
t4T*u) 4@?) Lu |i UL4T|@|L?t @|h @*}iMh@ uLh4*@|L?t @hi @*tL ih) tiu*
i? | UL4it |4i |L _L @U|@* UL4T|@|L?t L? |i UL4T|ih LT*@h tThi@_tii|
ThL}h@4t *!i , Ui* @?_ wL|t 2 c U @hi |i Lh!Lhti ThL}h@4t Lu 4@?) 
?@?U@* Ltitc U@? @?_*i M@tU 4@|h U@*U*@|L?t U @*tL 4@!i | Lh|*i
|L MiUL4i u@4*@h | 4@|h |iU?^it 
    L?t_ih @}@? |i t4T*i |hii @tti| TLh|uL*L ThLM*i4 6ht|c i _i?i |i
uL**L?}   UL*4? iU|Lht UL?|@??} |i hi|h?t @?_ TLh|uL*L i}|t
                                           3- 4                        3% 4
                                                                         
                                      + ' EC - FD c                ' EC % FD   

                                             -                         %
W? 4@|h ?L|@|L? i U@? *4T 4*|T*i hi|h?t ? @ t?}*i iU|Lh U i _i?L|i
M) + 5?Ui i@U Lu |i i*i4i?|t ? + t @ h@?_L4 @h@M*i i U@** + @ h@?_L4 iU|Lh
  6   Wkh pdwul   { ixqfwlrqv dydlodeoh lq H{fho dqg Orwxv 456 duh yhu| olplwhg1 Vhulrxv dqdo|vlv vkrxog

eh grqh xvlqj pdwul{ surjudpplqj odqjxdjhv olnh Vsoxv/ Pdwode ru JDXVV1




                                                            H
`i U@? @*tL |@*! @ML| |i ThLM@M*|) _t|hM|L? Lu |i h@?_L4 iU|Lh + At t
t4T*) |i L?| _t|hM|L? Lu |i i*i4i?|t Lu + W? }i?ih@*c |i _t|hM|L? Lu +
t UL4T*U@|i_ M| u i @tt4i |@| @** hi|h?t @hi L?|*) ?Lh4@**) _t|hM|i_ |i?
@** i ?ii_ |L Lhh) @ML| t |i 4i@?tc @h@?Uit @?_ UL@h@?Uit Lu |i hi|h?t `i
U@? i@t*) t44@h3i |iti @*it t?} 4@|h ?L|@|L? @t uL**Lt 6ht|c i _i?i
|i   iU|Lh Lu TLh|uL*L i TiU|i_ @*it @t
                           53      46 3             4 3 4
                               -           . d -o         >
                . d+o ' . 7C - D8 ' C . d- o D ' C > F
                           9E      F :    E         F    E      D'
                               -           . d- o         >
@?_ |i     UL@h@?Ui 4@|h Lu hi|h?t @t
                              3 @oE-  SJE- c -  SJE- c -  4
                                                                
                              E
                    SJE+ ' C SJ E- c -    @oE-     SJE- c -  F
                                                                          D
                                SJE- c -  SJE- c -    @oE- 
                              3 j2 j j 4
                                       
                           ' EC j j2 j FD ' P
                                          j  j          j2
L|Ui |@| |i UL@h@?Ui 4@|h t t)44i|hU Ei*i4i?|t Lg |i _@}L?@* @hi i^@* tL
|@| P ' P c ihi P _i?L|it |i |h@?tTLti Lu P t?Ui SJE- c -  ' SJ E- c - c
                                 



SJ E- c -  ' SJ E- c -  @?_ SJ E- c -  ' SJ E- c -  Nt?} |i i @4T*i
_@|@ ? A@M*i  i @i
                                           3 4 3            4
                                             >       f 22b
                                       ' EC > FD'EC f H F
                                                                      

                                                            D                c

                                             >       f fD2
                                           3                        4
                                                                      

                                              f b2e  f fS    f DH2
                                      P ' EC f fS f HS2 f Db FD
                                                                                

                                                                                       

                                               f DH2 f Db
                                                                            fD2H

     Ai hi|h? L? |i TLh|uL*L t?} iU|Lh ?L|@|L? t
                                            3 4
                                            E - F
               -    Rc% ' +
                          
                            ' E %   C  D ' %  n   n  
                                  c % c %    -                              -       %   -       %   -   

                                              -
54*@h*)c |i i TiU|i_ hi|h? L? |i TLh|uL*L t
                                                  3> 4
                                                       F
 >   Rc% ' .   d +o ' . d+o '  ' E% c % c %  E
                                         
                                                  C  D ' %  n   n  
                                                    >                                        >   %   >       %   >   

                                                                              >


                                                             b
i |c |i @h@?Ui Lu |i TLh|uL*L t
                                                               3 2             43 4
                                                                 j  j  j      %
       2
      j Rc%   ' @oE + '                                    E
                                           P ' E% c % c %  C j           DE
                                                                     j 2 j  F C % F
                                                                                     D
                                                        j  j j2          %
              '    2 2      2 2      2 2
                  % j  n % j  n % j n 2% % j  n 2% % j n 2% % j 
6?@**)c |i UL?_|L? |@| |i TLh|uL*L i}|t t4 |L L?i U@? Mi i Thitti_ @t
                                                   3 4
                                                   E F
                           
                                ' E% c % c %  C  D ' % n % n % ' 
                                                           

                                                     
ihi  t @   iU|Lh | i@U i*i4i?| i^@* |L 
    L?t_ih @?L|ih TLh|uL*L | i}|t ) ' E+ c + c +   Ai hi|h? L? |t           



TLh|uL*L t
                        -Rc+ ' ) + ' + - n + - n + - 
                                               




W? |i uL**L?} i ** ?ii_ |L UL4T|i |i UL@h@?Ui Mi|ii? |i hi|h? L? TLh|
uL*L @?_ |i hi|h? L? TLh|uL*L )c SJE-Rc% c -Rc+  W| U@? Mi tL? |@|
      j %+ ' SJE-Rc% c -Rc+  ' SJE
                                            3+jc )2 +j j 4 3 + 4
                                                                      




                                                            
              '
                   
                       P) ' E% c % c %  E
                                            C j j2 j F
                                                            DE
                                                              C + F
                                                                   D
                                                               j  j                j2    +
              ' %   n    n   
                       +   j
                               2
                                   %   +   j
                                               2
                                                       %       +   j
                                                                       2

                  nE% + n % + j n E% + n % + j  n E% + n % + j 


2     6?_?} ,Ui?| Lh|uL*Lt

Ai UL?t|h@?i_ 4?43@|L? ThLM*i4 Ee |L ?_ @? iUi?| TLh|uL*L U@? Mi hi
i Thitti_ t?} 4@|h @*}iMh@ @t
                                           4? j2Rc%       '                   
                                                                                   P   r|


                                                       Rcf '                       
                                                                               
                                                   >

                                                            '                 
                                                                                   
ihi >Rcf t @ |@h}i| i TiU|i_ hi|h? @|h @*}iMh@ U@? @*tL Mi ti_ |L }i @?
@?@*)|U tL*|L? |L |i ht| Lh_ih UL?_|L?t uhL4 |i 4?43@|L? ThLM*i4 Ee
5?Ui |i ht| Lh_ih UL?_|L?t ED UL?tt| Lu i *?i@h i^@|L?t ? i ?!?L?t
E% c % c % c b c b2  i U@? hiThiti?| |i t)t|i4 ? 4@|h ?L|@|L? @t
                   3 2                      43 4 3             4
                        2j  2j 2j > 
                   EE 2j 2j2 2j >  F     E %         f
                    EE 2j 2j  2j2 >  F   F E
                                              E % F
                                                   F
                                                   F
                                                         E
                                                         E
                                                         E f FFF
                     EE               F
                                            F E
                                              E % F
                                                   F ' EEE f FFF
                                            F E    F
                      C > > > f f D C b D C >Rcf D
                                                                f       f           b2          

                                                                   f
Lh
                                                            3%' Mf
ihi
             3 2                     4        3 4                 3      4
                 2j 2j 2j  >             %                   f
             EE 2j 2j2 2j >  F  F        E
                                              E % F F            E
                                                                  E  f F
                                                                         F
        ' EEE 2j 2j 2j2 >  FFF 3% ' EEE % FFF @?_ Mf ' EEE f FFFF
              E                      F        E      F            E
                                
                                                                                c

              C > > > f f D                C b D              C >Rcf D
                                                     f           f                                    b2                           
Ai tL*|L? uLh 3% t |i?
                                                        3% '            3Mf               


Ai ht| |hii i*i4i?|t Lu 3% @hi |i TLh|uL*L i}|t ' E% c % c %  uLh |i                                                         



iUi?| TLh|uL*L | i TiU|i_ hi|h? >Rc% ' >Rcf @?_ t|@?_@h_ _i@|L? j Rc% 
   AL **t|h@|i UL?t_ih |i _@|@ ? A@M*i  @?_ |i |@h}i| i TiU|i_ hi|h? >Rcf '
ff Ai?
             3                                4
                   HeH  f 2S  Se f 22b 
             EE f 2S  .2e f .H f  H  F
                                                                                 

              EE  Se f .H  fDS f fD2  F
                                       
                                              F
                                              F
                                                                                   

         ' EE                                F
               C f 22b f  H f fD. f fD2 f F
                                                                                                          c

                                            D                                    

                                                                                     f            f
              3                                    4       3       4
                  f fbD f bS f f  S 22b f eSf             f
              EE f bS f efe f 2fH  b2 f e F
                                           

                                                   F       E
                                                           E
                                                            

                                                               f FFF
                                                                                                                 

               E                       
                                                   F       E    

      3 ' EEE f f f 2fH f f. D f .  . FFF Mf ' EEE f FFF
                                                          
                                                                                            

                                                                                            
                                                                                                             

                                                                                                                         c

               C S 22b  b2 D f . S D 2f 22 D
                                                         C f f D
                                                                                                                                   

                 f eSf f e  . 2f 22 2 D2
                                                                                                             


@?_
          3           4 3                                    43       4
               f bH        f fbD f bS f f  S 22b f eSf
          EE f  FF EE f bS f efe f 2fH  b2 f e F
                                       
                                                               E  f
                                                                      F                                                         

           EE  fS. FF EE f f f 2fH f f. D f .  . F
                                                          
                                                             F
                                                             F
                                                               E
                                                               E
                                                               E
                                                                   f F
                                                                   f F
                                                                      F                                                     

     3% ' E           F ' E                                  F E      F
            EC H DH FD EC S 22b  b2 D f . S D 2f 22 F DEC f f F
                                                                                                                         

                                                                   D                                                                

           2 b                      f eSf
                                                       f e                        .                    2f22        2 D2             

Oi?Uic |i iUi?| TLh|uL*L t                     ' Ef bH f                     c              c fS.  Ai i TiU|i_ hi|h? L?
                                                                                                                      



|t TLh|uL*L t

                                   '    
                                            
                                                                               3 f 22b 4
                         >Rc%



                                   ' Ef bH f      c   
                                                                               E       F
                                                                      fS.  C f  H D ' f f
                                                                        c   
                                                                                                         

                                                                                                                             

                                                                                                      ffD2

                                                                        
@?_ |i @h@?Ui t
 2
        '   
                P                                    3 f b2e                                         f DH2 4F 3E f bH 4F
j Rc%

                                                                                          ffS
        ' Ef bH f             c   
                                                     E
                                              fS. C f fS
                                            c              
                                                                         

                                                                                         fHS2
                                                                                                              

                                                                                                     f Db D C f  D '  fSS
                                                                                                                                  
                                                                                                                                       

                                                                                                                                                      

                                   f DH2               f D2H                            f Db                              fS.
     AL ?_ @?L|ih iUi?| TLh|uL*L ) ' E+ c + c +  i tL*i                                   




                             4?
                               )
                                   j 2Rc+ ' ) P)                                          
                                                                                                   r|


                                      Rc ' ) 
                                                                                          
                                                                    >

                                                                          ' )           




ihi >Rc t @ |@h}i| i TiU|i_ hi|h? _gihi?| uhL4 >Rcf  Ai tL*|L? @t |i uLh4
                                                                         3+ ' M
|                                                   3 4                 3      4
                                                          +
                                                       EE + F             E  f
                                                        E     F
                                                              F            E
                                                                           E  f FFF
                                                3+ ' EEE + FFF @?_ M ' EEE f FFF                                

                                                        C b D             C >Rc D
                                 b2                  
Ai ht| |hii i*i4i?|t Lu 3+ @hi |i TLh|uL*L i}|t ) ' E+ c + c +  uLh |i                                                        



iUi?| TLh|uL*L | i TiU|i_ hi|h? >Rc+ ' >Rc @?_ t|@?_@h_ _i@|L? j Rc+ 
  Nt?} |i _@|@ ? |@M*i  | |i |@h}i| i TiU|i_ hi|h? >Rc ' f2D i @i
          3            4 3                                      43       4
               fb.            f fbD  f bS f f S 22b f eSf
          EE f feD FF EE f bS f efe f 2fH  b2 f e F
                                                   
                                                                  E   f
                                                                         F                                              


           E        
                       F     E                                 F
                                                                F E
                                                                  E   f FF
                                                                                                                    

     3+ ' EEE f e2 FFF ' EEE f f f 2fH f f. D f .  . FF E
                                                                  E   f FF
            C 2f SS D C S 22b  b2 D f . S D 2f 22 F       DEC f 2D F
                                                                                                                  

                                                                       D                                                             

                2D                              f eSf                f e              .          2f22        2 D2
                                                                                                                                              
Oi?Uic |i tiUL?_ iUi?| TLh|uL*L t ) ' Efb.c ffeDc fe2  Ai i TiU|i_                                               



hi|h? L? |t TLh|uL*L t
                                            ' )    


                                                                      3        4
                                >Rc+

                                                                        f 22b
                                            ' E fb. f feD f e2  EC f  H FD ' f 2D
                                                                                                     

                                                               c               c                                   

                                                                                                    ffD2
@?_ |i @h@?Ui t
 2
        ' ) P)
            


                                  3
                                                                                                     f DH2 4F 3E  fb. 4F
j Rc+

                                    f b2e                                                 ffS
        ' E fb. f feD f e2  EC f fS
                                                                                                                                 

                           c          c                                               fHS2      f Db D C f feD D '  S
                                                                                                                                                    

                                                                    f DH2               f Db     f D2H       f e2               




                                                                                     2
22 6?_?} |i B*LM@* ?44 V@h@?Ui Lh|uL*L
Nt?} 4@|h ?L|@|L?c |i ThLM*i4 Ef 4@) Mi UL?Uti*) i Thitti_ @t

                                       4 jRc6 ' 4 P4 r|
                                          2                                
                                       4?


                                                          '              4
                                                                           
                                                                                   


Ai uLh *?i@h i^@|L? _itUhM?} |i ht| Lh_ih UL?_|L?t E @t |i 4@|h
hiThiti?|@|L?    3 2j2 2j 2j  4 3 6 4 3 f 4
                                             
                  EE 2j                 F E 6 F
                                            F E     F    E
                                                         E  f FFF
                   EC 2j 22jj 22jj
                               2
                                            F E     F '  E
                                        D C 6 D C f D
                                      2
                            
                                                                   f                    b            
Lh
                                                         36' M
ihi
               3 2j2 2j 2j  4                36 4            3f4
                                             
               E         2j 2 2j  F       E 6 F          E f FFF
          ' EEC 22jj
                      2j 2j  D
                                   2
                                       F
                                       F 36 ' E
                                              E
                                              C 6 D
                                                    F
                                                    F @?_ M ' E
                                                              E
                                                              CfD c                                                 


                                  f           b              
Ai tL*|L? uLh 36 t |i?
                                                     36 '     3M             


Ai ht| |hii i*i4i?|t Lu 36 @hi |i TLh|uL*L i}|t 4 ' E6 c6 c6  uLh |i                                       



}*LM@* 4?44 @h@?Ui TLh|uL*L | i TiU|i_ hi|h? >Rc6 '  @?_ @h@?Ui                                4   



j2Rc6 '  4 P4
          
               

     Nt?} |i _@|@ ? A@M*i c i @i
                        3  HeH f 2S  Se  4
                        E f 2S  .2e f .H  F
                                                                                         


                      ' E
                        EC  Se f .H  fDS  F F
                                                                                         
                      
                                                  D                                  
                                                                                                        c


                                              f
                         3 f       f 2e2 f fb f f 4
                         E f 2e2 f e f . f bS F
                                                                                             


                  3 ' EEC f fb f . f 2S2 f ebD F
                                                

                                                
                                                      F
                                                      D
                                                              

                                                                                      
                                                                                               

                                                                                                

                                        f f                fbS                 febD       f f2
                                                                                                    


@?_ tL
              3 f       f 2e2 f fb                                     f f      f
                                                                                           43 4 3
                                                                                            f f
                                                                                                                    4
              EE f 2e2 f e f .                                       fbS F E f F E fbS F
                                                                                 F E   F  E
                                                       


         36 ' E
                                                       
                                                                                 F E   F 'E
                                                                                                   F
                                                                                                   F
               C f fb f . f 2S2
                                                                       febD  D C f D  C febD D
                 f f        fbS                 febD                 ff2            ff2          
                                                              
Oi?Uic |i }*LM@* 4?44 @h@?Ui TLh|uL*L t                                        4 ' Ef f f bS f ebD
                                                                                                           c          c   
                                                                                                                                
                                                                                                                                       Ai
i TiU|i_ hi|h? L? |t TLh|uL*L t

                        Rc6   ' 4        


                                                    3 f 22b 4
                    >



                              ' Ef f f bS f ebD EC f  H FD ' f 2e
                                                                                        

                                                 c                  c                               

                                                                                       ffD2
@?_ |i @h@?Ui t
     2
     Rc6   ' 4 P4
               


                                3
                                                                                            f DH2 4F 3E f f 4F
 j

                                  f b2e                                        ffS
               
                                E
           ' Ef f f bS f ebD C f fS
                   c         c              
                                                              

                                                                              fHS2
                                                                                                                   

                                                                                            f Db D C f bS D ' f f
                                                                                                                                      

                                                      f DH2                  f Db       fD2H               febD

2         L4T|?} |i ,Ui?| 6hL?|ih
t 4i?|L?i_ ThiLt*)c |L UL4T|i |i iUi?| uhL?|ih Lh @h!L|3 M**i| L?i
L?*) ?ii_t |L ?_ |L iUi?| TLh|uL*Lt Ai hi4@??} iUi?| TLh|uL*Lt U@?
|i? Mi i Thitti_ @t UL?i UL4M?@|L?t Lu |iti |L TLh|uL*Lt Ai uL**L?}
ThLTLt|L? _itUhMit |i ThLUitt uLh |i |hii ht!) @tti| U@ti t?} 4@|h @*}iMh@

hLTLt|L?       wi|        ' E% % c %  @?_ ) ' E+ + c +  Mi @?) |L iUi?|
                                          c
                                                                  
                                                                                            c
                                                                                                        



TLh|uL*Lt A@| tc        tL*it

                                          4?         j 2Rc%  '                
                                                                                   P   r|


                                                          Rcf '                    
                                                                               
                                                      >

                                                             '                
                                                                                   
@?_ ) tL*it

                                          4?
                                              )
                                                      j2Rc+   ' ) P)           
                                                                                       r|


                                                          Rc ' ) 
                                                                               
                                                      >

                                                             ' )             




wi| k Mi @?) UL?t|@?| Ai? |i TLh|uL*L

                                      3       ' k3 n E  k  ) 4
                                                          

                                                   k% n E  k+
                                                 E
                                              ' C k% n E  k+ D
                                                                   F
                                                   k% n E  k+


                                                                          e
t @? iUi?| TLh|uL*L 6h|ih4Lhic
                            >Rc5         ' 3  ' k >Rc% n E  k  >Rc+
                                               
                                                                    

                            j 2Rc5       ' 3 P3 ' 2j2Rc% n E  k2j2Rc+ n 2kE  kj%+
                                               




ihi
                                                                        j 2Rc%  ' P              
                                                                                                             c


                                                                            Rc+ ' ) P)
                                                                            2                    
                                                                        j                                    c

                                                                            %+ '    P)           
                                                                        j                                    

   AL **t|h@|i |i Th@U|U@* @TT*U@|L? Lu |i ThLTLt|L?c i ** ti |i _@|@ ?
A@M*i  @?_ |i ThiLt*) UL4T|i_ iUi?| TLh|uL*Lt ' Ef bHc f c fS.                                                                                    



@?_ ) ' Efb.c ffeDc fe2  +iU@**c |@| >Rc% ' ffc j 2Rc% ' fSSc >Rc+ ' f2D
                                                                



@?_ j2Rc+ '  S 6ht|c i ?ii_ |L UL4T|i |i UL@h@?Ui Mi|ii? |i hi|h? L?
TLh|uL*L @?_ |i hi|h? L? TLh|uL*L ) G
j%+       '     
                    P)
                                                     3 f b2e
                                                     E                                          ffS                f DH2 4F 3E  fb. 4F
                                                                                                                                             

          ' Ef bH f          c           fS.  C f fS
                                           c                                                   fHS2               f Db D C f feD D '  S
                                                                                                                                                                   

                                                                        f DH2                  f Db               f D2H
                                                                                                                                 f e2          

i |c UL?t_ih UL?i UL4M?@|L?t Lu @?_ ) | |i UL?t|@?| k h@?}?} uhL4 f
|L  ? ?Uhi4i?|t Lu f 6Lh i @4T*ic i? k ' fD |i TLh|uL*L 3 MiUL4it
                                   3 ' k
                                                3n Ef bH
                                                         k  )
                                                            4     3  fb. 4
                                                E
                                         ' fDC f        FDnf D E
                                                                  C f feD F
                                                                        
                                                                            

                                                                            D                               
                                                                                                                         

                                                                                                                         

                                                      fS.          f e2
                                            3 Ef DEf bH 4 3 Ef DEf bH 4
                                                                                                                            



                                         ' EC Ef DEf  FD n EC Ef DEf  FD
                                                                                                                                      

                                                                                                                                  

                                               Ef DE fS.       Ef DE fS.
                                            3         4 3 4
                                                                                                                                  

                                              f eb             
                                         ' C f HH FD ' EC  FD
                                            E                                              5

                                                                                           5            

                                                      feS                                 5

Ai i TiU|i_ hi|h? @?_ @h@?Ui Lu |t TLh|uL*L t
 >Rc5 ' 3          


                                    3 f 22b 4
              ' Ef eb f HH f eS  EC f  H FD ' f  f
                                                                                

                              c          c                                                                 c

                                                                         ffD2
      2
              ' 3 P3


                                    3 f b2e                                                                          f DH2 4F 3E f eb 4F
 j Rc5

                                                                                                 ffS
              ' Ef eb f HH f eS  EC f fS
                                                                                                                                            

                              c          c                                                  fHS2               f Db D C f HH D ' f fe
                                                                                                                                                           

                                                                         f DH2                 f Db                  fD2H               feS

                                                                                            D
L|i |@| >Rc5 @?_ j 2Rc5 U@? @*tL Mi UL4T|i_ @t

        >Rc5 ' k>Rc% n E  k>Rc+
                ' EfDEff n EfDEf2D ' f c
         2
        j Rc5   ' 2j2Rc% n E  k2j2Rc+ n 2kE  k %+    j

                '
                        2               2
                    EfD EfSS n EfD E S n 2EfDEfDE S  ' f fe
                                                                                


Ai }h@T Lu >Rc5 @}@?t| j Rc5 uLh k 5 Efc  t i @U|*) |i t@4i @t |@| U@*U*@|i_ ?
tiU|L?    @?_ t **t|h@|i_ ? }hi       

2e L4T|?} |i A@?}i?U) Lh|uL*L
Ai |@?}i?U) TLh|uL*L tL*it
                                      4@
                                            |     os
                                        |   E|   P|   
                                                        2

*|ih?@|i*)c i U@? ti E2 | |L iUi?| TLh|uL*Lt         @?_ + |@| tL*i Ee @?_
ES


     ,Ui?| Lh|uL*Lt |  +t!) tti|t @?_ @
     +t! uhii tti| Nt?} @|h *}iMh@
AL Mi UL4T*i|i_




e ,t|4@|?} |i W?T|t |L |i Bi?ih@* Lh|uL*L
  hLM*i4
AL Mi UL4T*i|i_




e TT*U@|L?G B*LM@* @tti| @**LU@|L?
AL Mi UL4T*i|i_




D TTi?_  #}hittL? L? |i L@h@?Ui @
     |h
Ai UL@h@?Ui 4@|h Lu hi|h?tc Pc t44@h3it |i @h@?Uit @?_ UL@h@?Uit Lu
|i ?__@* hi|h?t ? |i hi|h? iU|Lh + W? }i?ih@*c |i UL@h@?Ui 4@|h Lu



                                            S
@ h@?_L4 iU|Lh + EtL4i|4it t4T*) U@**i_ |i @h@?Ui Lu iU|Lh + | 4i@?
iU|Lh  t _i?i_ @t
                                   SJ E   +        '   . dE+  E+   o ' P                     




Wu + @t  i*i4i?|t |i? P ** Mi @?    4@|h  6Lh |i U@ti  ' 2c i @i
                                           %#                                   $                                                        &
 . dE+  E+   o ' . --  >>  E-  > c -  > 
                       


                                     
                         %#                                           $&
                             E -   > 2       E-  > E-  > 
                     ' . E-  > E-  >  E-  > 2
                                                       
                       #                                                  $
                         . dE-  >  o2       .  dE-  > E-  > o
                     ' . dE-  > E-  > o . dE-  > 2o                           
                                      #                                                         $ # 2      $
                                               @o E-                                                    j
                               '               SJE- c - 
                                                                                    SJE- c - 
                                                                                    @oE- 
                                                                                                   '
                                                                                                      j
                                                                                                      j  j2
                                                                                                                 'P
   `i U@? ti |i uLh4@* _i?|L? Lu SJ E+ |L _ihi |i @h@?Ui Lu @ TLh|uL*L
L?t_ih @}@? |i |L @tti| U@ti Ai @h@?Ui Lu |i TLh|uL*L -R ' + t }i?                                                                 



M)
                @o E-R ' @oE                
                                                   + ' . dE +  2o ' . dE E+  2
                                                                                                                       
                                                                                                                                             o


t?Ui   + t @ tU@*@h L i ti @ |hU! uhL4 4@|h @*}iMh@ Wu 5 t @ tU@*@h E|?!
        



Lu 5 ' 2 |i? 5 5 ' 5 5 ' 5 2
                  
                           
                               
                                   5      E+   @?_ tL 5 5 ' E+  E+  
                                                wi|         '
                                                                        
                                                                                                             
                                                                                                                                                           
                                                                                                                                                                 

Ai?
                               @oE-R               ' . d52o ' . d5 5 o                     
                                                                                                 




                                                     ' . d E+  E+   o
                                                                                                            




                                                     ' . dE+  E+   o
                                                                                                            




                                                     ' SJE+ ' P 
                                                                                                




   i | UL?t_ih _i|ih4??} |i UL@h@?Ui Mi|ii? |i hi|h?t L? |L TLh|uL*Lt
  @?_ ) Ai hi|h?t L? |iti |L TLh|uL*Lt @hi Rc% ' + @?_ -Rc+ ' ) + 6hL4
                                                                                            -
                                                                                                                                                    
                                                                                                                                                         

|i _i?|L? Lu UL@h@?Ui i @i
                      SJ E-Rc% c -Rc+  ' . dE-Rc%                                  >Rc%E-Rc+  >Rc+ o
U 4@) Mi hih||i? ? 4@|h                          ?L|@|L? @t


                      SJE     
                                   +c ) + 
                                                         '      +  E) +  ) o
                                                                . dE                                                          




                                                         ' . d E+  ) E+  o
                                                                                                




                                                         ' . d E+  E+   )o
                                                                                                                    




                                                         ' . dE+  E+   o)
                                                                                                                    




                                                         ' P)      




                                                                        .
S hLM*i4t
. +iuihi?Uit




               H
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
41 Wkh Fdslwdo Dvvhw Sulflqj Prgho

Wkh fdslwdo dvvhw sulflqj prgho +FDSP, lv dq htxloleulxp prgho iru h{shfwhg
uhwxuqv dqg uholhv rq d vhw ri udwkhu vwulfw dvvxpswlrqv1
    FDSP Dvvxpswlrqv
   41 Pdq| lqyhvwruv zkr duh doo sulfh wdnhuv
   51 Doo lqyhvwruv sodq wr lqyhvw ryhu wkh vdph wlph krul}rq
   61 Wkhuh duh qr wd{hv ru wudqvdfwlrqv frvwv
   71 Lqyhvwruv fdq eruurz dqg ohqg dw wkh vdph ulvn0iuhh udwh ryhu wkh sodqqhg
      lqyhvwphqw krul}rq
   81 Lqyhvwruv rqo| fduh derxw h{shfwhg uhwxuq dqg yduldqfh1 Lqyhvwruv olnh h{0
      shfwhg uhwxuq exw glvolnh yduldqfh1 +D vx!flhqw frqglwlrq iru wklv lv wkdw
      uhwxuqv duh doo qrupdoo| glvwulexwhg,
   91 Doo lqyhvwruv kdyh wkh vdph lqirupdwlrq dqg eholhiv derxw wkh glvwulexwlrq
      ri uhwxuqv
   :1 Wkh pdunhw sruwirolr frqvlvwv ri doo sxeolfo| wudghg dvvhwv
    Wkh lpsolfdwlrqv ri wkhvh dvvxpswlrqv duh dv iroorzv
   41 Doo lqyhvwruv xvh wkh Pdunrzlw} dojrulwkp wr ghwhuplqh wkh vdph vhw ri
      h!flhqw sruwirolrv1 Wkdw lv/ wkh h!flhqw sruwirolrv duh frpelqdwlrqv ri wkh
      ulvn0iuhh dvvhw dqg wkh wdqjhqf| sruwirolr dqg hyhu|rqh*v ghwhuplqdwlrq ri
      wkh wdqjhqf| sruwirolr lv wkh vdph1
   51 Ulvn dyhuvh lqyhvwruv sxw d pdmrulw| ri zhdowk lq wkh ulvn0iuhh dvvhw +l1h1 ohqg
      dw wkh ulvn0iuhh udwh, zkhuhdv ulvn wrohudqw lqyhvwruv eruurz dw wkh ulvn0iuhh
      udwh dqg ohyhudjh wkhlu kroglqjv ri wkh wdqjhqf| sruwirolr1 Lq htxloleulxp
      wrwdo eruurzlqj dqg ohqglqj pxvw htxdol}h vr wkdw wkh ulvn0iuhh dvvhw lv lq
      }hur qhw vxsso| zkhq zh djjuhjdwh dfurvv doo lqyhvwruv1
   61 Vlqfh hyhu|rqh krogv wkh vdph wdqjhqf| sruwirolr dqg wkh ulvn0iuhh dvvhw lv
      lq }hur qhw vxsso| lq wkh djjuhjdwh/ zkhq zh djjuhjdwh ryhu doo lqyhvwruv wkh
      djjuhjdwh ghpdqg iru dvvhwv lv vlpso| wkh wdqjhqf| sruwirolr1 Wkh vxsso|
      ri doo dvvhwv lv vlpso| wkh pdunhw sruwirolr +zkhuh wkh zhljkw ri dq dvvhw
        lq wkh pdunhw sruwirolr lv mxvw wkh pdunhw ydoxh ri wkh dvvhw glylghg e| wkh
        wrwdo pdunhw ydoxh ri doo dvvhwv, dqg lq htxloleulxp vxsso| htxdo ghpdqg1
        Wkhuhiruh/ lq htxloleulxp wkh wdqjhqf| sruwirolr lv wkh pdunhw sruwirolr1


     71 Vlqfh wkh pdunhw sruwirolr lv wkh wdqjhqf| sruwirolr dqg wkh wdqjhqf| sruw0
        irolr lv +phdq0yduldqfh, h!flhqw wkh pdunhw sruwirolr lv dovr +phdq0yduldqfh,
        h!flhqw1
     81 Vlqfh wkh pdunhw sruwirolr lv h!flhqw dqg wkhuh lv d ulvn0iuhh dvvhw wkh vhfxulw|
        pdunhw olqh +VPO, sulflqj uhodwlrqvkls krogv iru doo dvvhwv +dqg sruwirolrv,
                                 . d- o ' o n qE. d- o  o 
                                                     o                |           s



        ru
                                          > ' o n qE>  o 
                                                     s                    s


        zkhuh - ghqrwhv wkh uhwxuq rq dq| dvvhw ru sruwirolr c - ghqrwhv wkh
        uhwxuq rq wkh pdunhw sruwirolr dqg q ' SJE- c - *@oE-6  Wkh VPO
        vd|v wkdw wkhuh lv d olqhdu uhodwlrqvkls ehwzhhq wkh h{shfwhg uhwxuq rq dq
        dvvhw dqg wkh ehwd ri wkdw dvvhw zlwk wkh pdunhw sruwirolr1 Jlyhq d ydoxh
        iru wkh pdunhw ulvn suhplxp/ . d-o oo : fc wkh kljkhu wkh ehwd rq dq dvvhw
        wkh kljkhu wkh h{shfwhg uhwxuq rq wkh dvvhw dqg ylfh0yhuvd1

   Wkh VPO uhodwlrqvkls fdq eh uhzulwwhq lq whupv ri ulvn suhpld e| vlpso|
vxewudfwlqj os iurp erwk vlgh ri wkh VPO htxdwlrq=

                             . d- o  o ' qE. d- o  o 
                                                 o               |            s



ru
                                 >  o ' q E>  o 
                                                 s                   s


dqg wklv olqhdu uhodwlrqvkls lv looxvwudwhg judsklfdoo| lq jxuh 41 Lq whupv ri ulvn
suhpld/ wkh VPO lqwhuvhfwv wkh yhuwlfdo d{lv dw }hur dqg kdv vorsh htxdo wr > os /
wkh ulvn suhplxp rq wkh pdunhw sruwirolr +zklfk lv dvvxphg wr eh srvlwlyh,1 Orz
ehwd dvvhwv +ohvv wkdq 4, kdyh ulvn suhpld ohvv wkdq wkh pdunhw dqg kljk ehwd
+juhdwhu wkdq 4, dvvhwv kdyh ulvn suhpld juhdwhu wkdq wkh pdunhw1




                                                          5
4141 D Vlpsoh Uhjuhvvlrq Whvw ri wkh FDSP

Wkh VPO uhodwlrqvkls doorzv d whvw ri wkh FDSP xvlqj d prglhg yhuvlrq ri wkh
pdunhw prgho uhjuhvvlrq htxdwlrq1 Wr vhh wklv/ frqvlghu wkh h{fhvv uhwxuq pdunhw
prgho uhjuhvvlrq htxdwlrq
            -  o ' k n qE-  o  n 0 c | ' c c A
                |    s                |           s       |

                  0  _  Efc j2c 0 lv lqghshqghqw ri -
                      |                            |                 |+414,
zkhuh - ghqrwhv wkh uhwxuq rq dq| dvvhw ru sruwirolr dqg - lv wkh uhwxuq rq
        |                                                           |

vrph sur{| iru wkh pdunhw sruwirolr1 Wdnlqj h{shfwdwlrqv ri erwk vlghv ri wkh
h{fhvv uhwxuq pdunhw prgho uhjuhvvlrq jlyhv
                          . d- o  o ' k n qE. d- o  o 
                             |    s                        |   s


dqg iurp wkh VPO zh vhh wkdw wkh FDSP lpsrvhv wkh uhvwulfwlrq
                                       k'f
iru hyhu| dvvhw ru sruwirolr1 D vlpsoh whvwlqj vwudwhj| lv dv iroorzv
     Hvwlpdwh wkh h{fhvv uhwxuq pdunhw prgho iru hyhu| dvvhw wudghv
    Whvw wkdw k ' f lq hyhu| uhjuhvvlrq
4151 D Vlpsoh Suhglfwlrq Whvw ri wkh FDSP

Frqvlghu djdlq wkh VPO htxdwlrq iru wkh FDSP1 Wkh VPO lpsolhv wkdw wkhuh lv d
vlpsoh srvlwlyh olqhdu uhodwlrqvkls ehwzhhq h{shfwhg uhwxuqv rq dq| dvvhw dqg wkh
ehwd ri wkdw dvvhw zlwk wkh pdunhw sruwirolr1 Kljk ehwd dvvhwv kdyh kljk h{shfwhg
uhwxuqv dqg orz ehwd dvvhwv kdyh orz h{shfwhg uhwxuqv1 Wklv olqhdu uhodwlrqvkls
fdq eh whvwhg lq wkh iroorzlqj zd|1 Vxssrvh zh kdyh d wlph vhulhv ri uhwxuqv rq
 dvvhwv +vd| 43 |hduv ri prqwko| gdwd,1
    Vsolw d vdpsoh ri wlph vhulhv gdwd rq uhwxuqv lqwr wzr htxdo vl}hg vxevdpsohv1
    Hvwlpdwh q iru hdfk dvvhw lq wkh vdpsoh xvlqj wkh uvw vxevdpsoh ri gdwd1
     Wklv jlyhv  hvwlpdwhv ri q 1
    Xvlqj wkh vhfrqg vxevdpsoh ri gdwd/ frpsxwh wkh dyhudjh uhwxuqv rq wkh 
     dvvhwv +wklv lv dq hvwlpdwh ri . d- o ' > 1 Wklv jlyh  hvwlpdwhv ri >
                                                      


    Sorw wkh VPO xvlqj wkh hvwlpdwhg ehwdv dqg dyhudjh uhwxuqv dqg vhh li lw
     lqwhuvhfwv dw }hur rq wkh yhuwlfdo d{lv dqg kdv vorsh htxdo wr wkh dyhudjh ulvn
     suhplxp rq wkh pdunhw sruwirolr1

                                               6
51 K|srw        khvlv Whvwlqj xvlqj wkh H{fhvv Uhwxuq Pdunhw Prgho
Lq wklv vhfwlrq/ zh looxvwudwh krz wr fduu| rxw vrph vlpsoh k|srwkhvlv whvwv frq0

fhuqlqj wkh sdudphwhuv ri wkh h{fhvv uhwxuqv pdunhw prgho uhjuhvvlrq1 Ehiruh zh

ehjlq/ zh uhylhz vrph edvlf frqfhswv iurp wkh wkhru| ri k|srwkhvlv whvwlqj1



5141 Whvwlqj wkh FDSP Uhvwulfwlrq                    k ' f1
Xvlqj wkh pdunhw prgho uhjuhvvlrq/


                   -|  os ' k n qE- |  os  n 0|c | ' c c A
                        0|  _  Efc j2c 0| lv lqghshqghqw ri -|                          +514,

frqvlghu whvwlqj wkh qxoo ru pdlqwdlqhg k|srwkhvlv wkdw wkh FDSP krogv iru dq
dvvhw djdlqvw wkh dowhuqdwlyh k|srwkhvlv wkdw wkh FDSP grhv qrw krog1 Wkhvh
k|srwkhvhv fdq eh irupxodwhg dv wkh wzr0vlghg whvw

                                  Mf G k ' f r M G k ' f  9
Zh zloo uhmhfw wkh qxoo k|srwkhvlv/ Mf G k ' f/ li wkh hvwlpdwhg ydoxh ri k lv
hlwkhu pxfk odujhu wkdq }hur ru pxfk vpdoohu wkdq }hur1 Wr ghwhuplqh krz elj
wkh hvwlpdwhg ydoxh ri k qhhgv wr eh lq rughu wr uhmhfw wkh FDSP zh xvh wkh
w0vwdwlvwlf
                                         |k'f '
                                                ke f  
                                                      c
                                                g Ek
                                                7. e
zkhuh k                                        g Ek
      e lv wkh ohdvw vtxduhv hvwlpdwh ri k dqg 7. e  lv lwv hvwlpdwhg vwdqgdug
huuru1 Wkh ydoxh ri wkh w0vwdwlvwlf/ |k'f/ jlyhv wkh qxpehu ri hvwlpdwhg vwdqgdug
            e lv iurp }hur1 Li wkh devroxwh ydoxh ri |k'f lv pxfk odujhu wkdq 5
huuruv wkdw k
wkhq wkh gdwd fdvw frqvlghudeoh grxew rq wkh qxoo k|srwkhvlv k ' f zkhuhdv li lw
lv ohvv wkdq 5 wkh gdwd duh lq vxssruw ri wkh qxoo k|srwkhvlv4 1 Wr ghwhuplqh krz
elj   m |k'fm qhhgv wr eh wr uhmhfw wkh qxoo/ zh xvh wkh idfw wkdw xqghu wkh vwdwlvwlfdo
dvvxpswlrqv ri wkh pdunhw prgho dqg dvvxplqj wkh qxoo k|srwkhvlv lv wuxh

                    | 'f  7|_e?|  | zlwk A  2 ghjuhhv ri iuhhgrp
                     k



Li zh vhw wkh vljqlfdqfh ohyho +wkh suredelolw| wkdw zh uhmhfw wkh qxoo jlyhq wkdw
wkh qxoo lv wuxh, ri rxu whvw dw/ vd|/ 8( wkhq rxu ghflvlrq uxoh lv
                  Uhmhfw Mf G k ' f dw wkh 8( ohyho li m| 'fm : |f f2D 32
                                                                  k          cA


   4 Wklv lqwhusuhwdwlrq ri wkh w0vwdwlvwlf uholhv rq wkh idfw wkdw/ dvvxplqj wkh qxoo k|srwkhvlv lv

wuxh vr wkdw                                                                        g+
                @ 3> e lv qrupdoo| glvwulexwhg zlwk phdq 3 dqg hvwlpdwhg yduldqfh VH e ,5 =

                                                 7
zkhuh |f f2D 32 lv wkh 5 2 I fulwlfdo ydoxh iurp d Vwxghqw0w glvwulexwlrq zlwk A  2
           cA

ghjuhhv ri iuhhgrp1

H{dpsoh 5141     FDSP Uhjuhvvlrq iru LEP
   Wr looxvwudwh wkh whvwlqj ri wkh FDSP xvlqj wkh h{fhvv uhwxuqv pdunhw prgho
uhjuhvvlrq frqvlghu wkh uhjuhvvlrq rxwsxw lq jxuh 5




   Wkh hvwlpdwhg uhjuhvvlrq htxdwlrq xvlqj prqwko| gdwd iurp Mdqxdu| 4<:;
wkurxjk Ghfhpehu 4<;5 lv
         g o 'ffff2 n f bf E-
      -Uc|                       c|  os c - ' f2fc je ' ffD2e
                                                           2
             s             
                     Ef ffSH          Ef fHHH


zkhuh wkh hvwlpdwhg vwdqgdug huuruv duh lq sduhqwkhvhv1 Khuh ke ' ffff2/ zklfk
lv yhu| forvh wr }hur/ dqg wkh hvwlpdwhg vwdqgdug huuru lv 31339; lv pxfk odujhu
wkdq ke 1 Wkh w0vwdwlvwlf iru whvwlqj Mf G k ' f yv1 M G k 9' f lv

                          |k        '
                                        ffff2  f ' ff S
                                          fffSH
                               'f




                                                   8
vr wkdw ke lv rqo| 313696 hvwlpdwhg vwdqgdug huuruv iurp }hur1 Xvlqj d 8( vljql0
fdqfh ohyho/ |ff2DcDH  2 dqg
                                m|k m ' ff S
                                  'f                   2

vr zh gr qrw uhmhfw Mf G k ' f dw wkh 8( ohyho1 Wkhuhiruh/ wkh FDSP dsshduv wr
krog iru LEP1

5151 Whvwlqj K|srwkhvhv derxw q

Lq wkh h{fhvv uhwxuqv pdunhw prgho uhjuhvvlrq q phdvxuhv wkh frqwulexwlrq ri dq
dvvhw wr wkh yduldelolw| ri wkh pdunhw lqgh{ sruwirolr1 Rqh k|srwkhvlv ri lqwhuhvw
lv wr whvw li wkh dvvhw kdv wkh vdph ohyho ri ulvn dv wkh pdunhw lqgh{ djdlqvw wkh
dowhuqdwlyh wkdw wkh ulvn lv glhuhqw iurp wkh pdunhw=
                            Mf G q '  r M G q '  9
Wkh gdwd fdvw grxew rq wklv k|srwkhvlv li wkh hvwlpdwhg ydoxh ri q lv pxfk glhuhqw
iurp rqh1 Wklv k|srwkhvlv fdq eh whvwhg xvlqj wkh w0vwdwlvwlf

                                  |q ' '
                                            q 
                                            e 
                                            7. e
                                            g Eq

zklfk phdvxuhv krz pdq| hvwlpdwhg vwdqgdug huuruv wkh ohdvw vtxduhv hvwlpdwh
ri q lv iurp rqh1 Wkh qxoo k|srwkhvlv lv uhmhfw dw wkh 8( ohyho/ vd|/ li m| ' m :
                                                                             q

|f f2D 321 Qrwlfh wkdw wklv lv d wzr0vlghg whvw1
    cA

     Dowhuqdwlyho|/ rqh pljkw zdqw wr whvw wkh k|srwkhvlv wkdw wkh ulvn ri dq dvvhw
lv vwulfwo| ohvv wkdq wkh ulvn ri wkh pdunhw lqgh{ djdlqvw wkh dowhuqdwlyh wkdw wkh
ulvn lv juhdwhu wkdq ru htxdo wr wkdw ri wkh pdunhw=
                            Mf G q      r M G q     
Qrwlfh wkdw wklv lv d rqh0vlghg whvw1 Zh zloo uhmhfw wkh qxoo k|srwkhvlv rqo| li wkh
hvwlpdwhg ydoxh ri q pxfk juhdwhu wkdq rqh1 Wkh w0vwdwlvwlf iru whvwlqj wklv qxoo
k|srwkhvlv lv wkh vdph dv ehiruh exw wkh ghflvlrq uxoh lv glhuhqw1 Qrz zh uhmhfw
wkh qxoo dw wkh 8( ohyho li
                                 | ' |f fD 32
                                  q              cA


zkhuh |f fD 32 lv wkh rqh0vlghg 8( fulwlfdo ydoxh ri wkh Vwxghqw0w glvwulexwlrq zlwk
A  2 ghjuhhv ri iuhhgrp1
             cA




                                          9
H{dpsoh 5151 FDSP Uhjuhvvlrq iru LEP frqw*g

     Frqwlqxlqj zlwk wkh suhylrxv h{dpsoh/ frqvlghu whvwlqj                                      Mf G q '  r M G
q 9'    Qrwlfh wkdw wkh hvwlpdwhg ydoxh ri                    q   lv 3166<3/ zlwk dq hvwlpdwhg vwdqgdug

huuru ri 313;;;/ dqg lv idluo| idu iurp wkh k|srwkhvl}hg ydoxh                                   q '       Wkh w0vwdwlvwlf

              q'
                                                bf  
iru whvwlqj          lv

                                    | ' ' f ffHHH
                                     q                 ' .eee

zklfk whoov xv wkdw       qe   lv pruh wkdq : hvwlpdwhg vwdqgdug huuruv ehorz rqh1 Vlqfh

|f f2D DH  2   zh hdvlo| uhmhfw wkh k|srwkhvlv wkdw             q '              1

                                    Mf G q              r M G q  
     c

     Qrz frqvlghu whvwlqj                                                                   Wkh w0vwdwlvwlf lv vwloo 0

:1777 exw wkh fulwlfdo ydoxh xvhg iru wkh whvw lv qrz                |f fD DH  S.                          1 Fohduo|/

| ' ' .eee S. ' |f fD DH
                                                                                            c


q                                               c   vr zh uhmhfw wklv k|srwkhvlv1



5161 Whvwlqj Mrlqw K|srwkhvhv derxw k dqg q

Riwhq lw lv ri lqwhuhvw wr irupxodwh k|srwkhvlv whvwv wkdw lqyroyh erwk k dqg q
Iru h{dpsoh/ frqvlghu wkh mrlqw k|srwkhvlv wkdw wkh FDSP krogv dqg wkdw dq
dvvhw kdv wkh vdph ulvn dv wkh pdunhw1 Wkh qxoo k|srwkhvlv lq wklv fdvh fdq eh
irupxodwhg dv
                               Mf G k ' f dqg q '  

Wkh qxoo zloo eh uhmhfwhg li hlwkhu wkh FDSP grhvq*w krog/ wkh dvvhw kdv ulvn
glhuhqw iurp wkh pdunhw lqgh{ ru erwk1 Wkxv wkh dowhuqdwlyh lv irupxodwhg dv
                     M G k 9' f c ru q 9'  ru k 9' f dqg q 9' 

Wklv w|sh ri mrlqw k|srwkhvlv lv hdvlo| whvwhg xvlqj d vr0fdoohg I0whvw1 Wkh lghd
ehklqg wkh I0whvw lv wr hvwlpdwh wkh prgho lpsrvlqj wkh uhvwulfwlrqv vshflhg
xqghu wkh qxoo k|srwkhvlv dqg frpsduh wkh w ri wkh uhvwulfwhg prgho wr wkh w ri
wkh prgho zlwk qr uhvwulfwlrqv lpsrvhg1
   Wkh w ri wkh xquhvwulfwhg +XU, h{fhvv uhwxuq pdunhw prgho lv phdvxuhg e|
wkh +xquhvwulfwhg, huuru vxp ri vtxduhv +HVV,

                  .77     L- '
                                  [A e2| [A |  s  e  e |  s 2
                                         0   '         E-       o        k       q E-             o    
                                  |'            |'
Uhfdoo/ wklv lv wkh txdqwlw| wkdw lv plqlpl}hg gxulqj wkh ohdvw vtxduhv dojrulwkp1
Qrz/ wkh h{fhvv uhwxuq pdunhw prgho lpsrvlqj wkh uhvwulfwlrqv xqghu Mf lv
                               -|      os       '           
                                                     f n  E- |               os  n 0|

                                                 '   - |          os n 0| 



                                                            :
Qrwlfh wkdw wkhuh duh qr sdudphwhuv wr eh hvwlpdwhg lq wklv prgho zklfk fdq eh
vhhq e| vxewudfwlqj -  o iurp erwk vlghv ri wkh uhvwulfwhg prgho wr jlyh
                                                                                  h
                               |         s



                                                    -|          - | ' 0|


Wkh w ri wkh uhvwulfwhg +U, prgho lv wkhq phdvxuhg e| wkh uhvwulfwhg huuru vxp
ri vtxduhv
                                    . 7 7- '
                                                   [ h2 [ 
                                                        A

                                                            0|   '
                                                                          A

                                                                              E-|         - |  
                                                                                                     2
                                                    | '              |'
    Qrz vlqfh wkh ohdvw vtxduhv dojrulwkp zrunv wr plqlpl}h . 7 7 / wkh uhvwulfwhg
huuru vxp ri vtxduhv/ . 7 7 c pxvw eh dw ohdvw dv elj dv wkh xquhvwulfwhg huuru
                                         -

vxp ri vtxduhv/ . 7 7  Li wkh uhvwulfwlrqv lpsrvhg xqghu wkh qxoo duh wuxh wkhq
         . 77 +zlwk . 7 7 dozd|v voljkwo| eljjhu wkdq . 7 7  exw li wkh
                               L-

.77  -                L-                      -                                                                       L-

uhvwulfwlrqv duh qrw wuxh wkhq . 7 7 zloo eh txlwh d elw eljjhu wkdq . 7 7  Wkh I0
                                                        -                                                                  L-

vwdwlvwlf phdvxuhv wkh +dgmxvwhg, shufhqwdjh glhuhqfh lq w ehwzhhq wkh uhvwulfwhg
dqg xquhvwulfwhg prghov dqg lv jlyhq e|
                                                                                                 
                                                                                                   e2
                               E. 7 7-            . 7 7L - *^                    E. 7 7-            . 7 7L - 
                      8    '
                                 . 7 7L - * EA               
                                                             &
                                                                          '
                                                                                              ^    jL -
                                                                                                                  c



zkhuh ^ htxdov wkh qxpehu ri uhvwulfwlrqv lpsrvhg xqghu wkh qxoo k|srwkhvlv/

             e
& ghqrwhv wkh qxpehu ri uhjuhvvlrq frh!flhqwv hvwlpdwhg xqghu wkh xquhvwulfwhg

prgho dqg j2 ghqrwhv wkh hvwlpdwhg yduldqfh ri 0 xqghu wkh xquhvwulfwhg prgho1
                 L-                                                                       |

Xqghu wkh dvvxpswlrq wkdw wkh qxoo k|srwkhvlv lv wuxh/ wkh I0vwdwlvwlf lv glvwulexwhg
dv dq I udqgrp yduldeoh zlwk ^ dqg A  2 ghjuhhv ri iuhhgrp=
                                                  8      E  8 ^c A            2    


Qrwlfh wkdw dq I udqgrp yduldeoh lv dozd|v srvlwlyh vlqfh . 7 7                                               -       : . 7 7L -   1 Wkh
qxoo k|srwkhvlv lv uhmhfwhg/ vd| dw wkh 8( vljqlfdqfh ohyho/ li
                                                  8 : 8     f bD E^c A  2
zkhuh 8f bD E^c A  2 lv wkh <8( txdqwloh ri wkh glvwulexwlrq ri 8 E^c A  2 Iru
         

wkh k|srwkhvlv Mf G k ' f dqg q '  wkhuh duh ^ ' 2 uhvwulfwlrqv xqghu wkh qxoo
dqg & ' 2 uhjuhvvlrq frh!flhqwv hvwlpdwhg xqghu wkh xquhvwulfwhg prgho1 Wkh
I0vwdwlvwlf lv wkhq
                                                            E. 7 7-              . 77L - *2
                                    8k   'f ' '
                                             cq
                                                                 . 77L - *EA               2
                                                                  ;
H{dpsoh 5161 FDSP Uhjuhvvlrq iru LEP frqw*g


   Frqvlghu whvwlqj wkh k|srwkhvlv Mf G k ' f dqg q '  iru wkh LEP gdwd1
Wkh xquhvwulfwhg huuru vxp ri vtxduhv/ . 7 7L- / lv rewdlqhg iurp wkh xquhvwulfwhg
uhjuhvvlrq rxwsxw lq jxuh 5 dqg lv fdoohg Vxp Vtxduh Uhvlg=
                                     .77     L- ' fDbHf

                                                 S
Wr irup wkh uhvwulfwhg vxp ri vtxduhg uhvlgxdov/ zh fuhdwh wkh qhz yduldeoh h0| '
-|  -    dqg irup wkh vxp ri vtxduhv . 77 ' ' h02 ' f e.S Qrwlfh wkdw
                                                              A


                      Wkh I0vwdwlvwlf lv wkhq
       |                                             -       |   |

. 7 7- : . 7 7L - 


                                                
                                     Ef e.S fDbHf*2
                      8k   'f ' '
                            cq
                                          fDbHf*DH
                                                          ' 2H e

Wkh <8( txdqwloh ri wkh I0glvwulexwlrq zlwk 5 dqg 8; ghjuhhv ri iuhhgrp lv derxw
61481 Vlqfh 'f ' ' 2H e D ' f bDE2 DH zh uhmhfw f G ' f dqg ' 
            8k                      :        8     c               M   k    q

dw wkh 8( ohyho1
                 cq




5171 Whvwlqj wkh Vwdelolw| ri     k dqg q ryhu wlph
Lq pdq| dssolfdwlrqv ri wkh FDSP/ q lv hvwlpdwhg xvlqj sdvw gdwd dqg wkh hv0
wlpdwhg ydoxh ri q lv dvvxphg wr krog ryhu vrph ixwxuh wlph shulrg1 Vlqfh wkh
fkdudfwhulvwlfv ri dvvhwv fkdqjh ryhu wlph lw lv ri lqwhuhvw wr nqrz li q fkdqjhv ryhu
wlph1 Wr looxvwudwh/ vxssrvh zh kdyh d whq |hdu vdpsoh ri prqwko| gdwd +A ' 2f
rq uhwxuqv wkdw zh vsolw lqwr wzr yh |hdu vxevdpsohv1 Ghqrwh wkh uvw yh |hduv
dv | ' c c A dqg wkh vhfrqg yh |hduv dv | ' A n c cA Wkh gdwh | ' A lv
wkh euhdn gdwh ri wkh vdpsoh dqg lw lv fkrvhq duelwudulo| lq wklv frqwh{w1 Vlqfh
wkh vdpsohv duh ri htxdo vl}h +dowkrxjk wkh| gr qrw kdyh wr eh, A  A ' A 
Wkh h{fhvv uhwxuqv pdunhw prgho uhjuhvvlrq zklfk dvvxphv wkdw erwk k dqg q duh
frqvwdqw ryhu wkh hqwluh vdpsoh lv

               -|  os ' k n qE-|  os  n 0|c | ' c   c A
                     0|  _  Efc j2 lqghshqghqw ri -|
Wkhuh duh wzr fdvhv ri lqwhuhvw= +4, q pd| glhu ryhu wkh wzr vxevdpsohv> +5, k
dqg q pd| glhu ryhu wkh wzr vxevdpsohv1



                                                 <
517141 Whvwlqj Vwuxfwxudo Fkdqjh lq            q rqo|
Li k lv wkh vdph exw q lv glhuhqw ryhu wkh vxevdpsohv wkhq zh uhdoo| kdyh wzr
h{fhvv uhwxuq pdunhw prgho uhjuhvvlrqv

              -|  os ' k n qE-|  os  n 0|c | ' c    c A
              -|  os ' k n q2E-|  os  n 0|c | ' Anc   c A
wkdw vkduh wkh vdph lqwhufhsw k exw kdyh glhuhqw vorshv q  9' q 2 1 Zh fdq fdswxuh
vxfk d prgho yhu| hdvlo| xvlqj d vwhs gxpp| yduldeoh ghqhg dv

                                 (| ' fc |  A
                                    ' c | : A

dqg uh0zulwlqj wkh uhjuhvvlrq prgho dv

                 -|  os ' k n qE-|  os  n (|E-|  os  n 0|
Wkh prgho iru wkh uvw vxevdpsoh zkhq (| ' f lv

                  -|  os ' k n q E-|  os  n 0|c | ' c   c A
dqg wkh prgho iru wkh vhfrqg vxevdpsoh zkhq (| '  lv

       -|  os ' k n qE-|  os  n BE-|  os  n 0|c | ' Anc    c A
                 ' k n Eq n B E-|  os  n 0| 

Qrwlfh wkdw wkh ehwd lq wkh uvw vdpsoh lv q  ' q dqg wkh ehwd lq wkh vhfrqg
vxevdpsoh lv q 2 ' q n B Li B f wkh vhfrqg vdpsoh ehwd lv vpdoohu wkdq wkh uvw
vdpsoh ehwd dqg li B : f wkh ehwd lv odujhu1
   Zh fdq whvw wkh frqvwdqf| ri ehwd ryhu wlph e| whvwlqj zkhwkhu B ' f=

Mf G Eehwd lv frqvwdqw ryhu wlph, B ' f yv1 M G Eehwd lv qrw frqvwdqw ryhu wlph, B 9' f
Wkh whvw vwdwlvwlf lv vlpso| wkh w0vwdwlvwlf

                                     B  f ' eB
                                     e
                              |B'f ' g
                                      7. EB
                                        e   g e   7. EB
dqg zh uhmhfw wkh k|srwkhvlv B ' f dw wkh 8( ohyho/ vd|/ li m| 'fm : |f f2D 3 1
                                                              B           cA




                                       43
H{dpsoh 5171 FDSP Uhjuhvvlrq iru LEP frqw*g

   Wkh Hylhzv rxwsxw iru wkh h{fhvv uhwxuqv pdunhw prgho uhjuhvvlrq dxjphqwhg
zlwk wkh vwuxfwxudo fkdqjh gxpp| lv jlyh lq jxuh 61




   dqg wkh hvwlpdwhg htxdwlrq lv jlyhq e|
       g o '           EffffeD
                              fff n f HH E c|  s n f DH   E c|  s 
   - Uc| s                             
                                     EffH .
                                                  -    o      
                                                        Ef SS
                                                                   (    -   o   c


                 2            e ' ffebS
             -       ' f c j
Wkh hvwlpdwhg ydoxh ri q lv f HH/ zlwk d vwdqgdug huuru ri ffH .c dqg wkh
hvwlpdwhg ydoxh ri B lv f DH/ zlwk d vwdqgdug huuru ri f SS Wkh w0vwdwlvwlf iru
whvwlqj B ' f lv jlyhq e|
                                              f DH
                                   |B   'f ' f SS ' 2 2
zklfk lv juhdwhu wkdq |f f2D . ' bH vr zh uhmhfw wkh qxoo k|srwkhvlv +dw wkh 8(
                              c

vljqlfdqfh ohyho, wkdw ehwd lv wkh vdph ryhu wkh wzr vxevdpsohv1
    Wkh hvwlpdwhg ydoxh ri ehwd ryhu wkh vhfrqg vxevdpsoh lv qe n Be ' f HH n
f DH ' fSDeS Wr jhw wkh hvwlpdwhg vwdqgdug huuru iru wklv hvwlpdwh zh qrwh
wkdw
                      g q
                      @oE e n eB ' @oE
                                     g q e n @oE
                                              g e           g qc
                                                   B n 2  SJE e e
                                                                   B

                                                44
dqg wkhvh qxpehuv fdq eh rewdlqhg iurp wkh hohphqwv ri je 2 Ej j  zkhuh j lv d
                                                                             3



A  pdwul{ zlwk hohphqwv Ec -|  os c (|  E- |  os  Hylhzv frpsxwhv wklv
fryduldqfh pdwul{ dqg lw lv glvsod|hg lq jxuh 71




   Iurp jxuh 7 zh vhh wkdw @oE
                            g q e ' fff.ffSc @oE
                                               g Be ' ffHSD dqg SJE
                                                                   g qc e e
                                                                          B '
fffSb. vr wkdw
          g q
          @oE e n B                                  
                   e ' fff.ffS n ffHSD n 2 E fffSb. ' ff..

dqg
                           g e       e
                                           s
                           7. Eq n B  '     ff.. ' ffH2


517151 Whvwlqj Vwuxfwxudo Fkdqjh lq k dqg q

Qrz frqvlghu wkh fdvh zkhuh erwk k dqg q duh doorzhg wr eh glhuhqw ryhu wkh
wzr vxevdpsohv=
                - |  os   '   k n q  E-|  os  n 0| c | ' c    c A
                - |  os   '   k2 n q 2 E-|  os  n 0| c | ' A n c    c A


Wkh gxpp| yduldeoh vshflfdwlrq lq wklv fdvh lv
  -   |  os ' k n q E-|  os  n B  (| n B 2  (| E-|  os  n 0| c | ' c    c A 
Zkhq (| ' f wkh prgho ehfrphv
                    - |  os ' k n q E-|  os  n 0|c | ' c    c A c


                                               45
vr wkdw k ' k dqg q  ' q / dqg zkhq (| '  wkh prgho lv
         -   |  os ' Ek n B  n Eq n B 2E-|  os  n 0| c | ' A nc    c A c
vr wkdw k2 ' k n B dqg q 2 ' q n B2  Wkh k|srwkhvlv ri qr vwuxfwxudo fkdqjh lv
qrz
     Mf G B  ' f   dqg B 2 ' f yv1 M G B  9' f ru B 2 9' f ru B  9' f dqg B2 9' f1
Wkh whvw vwdwlvwlf iru wklv mrlqw k|srwkhvlv lv wkh I0vwdwlvwlf
                                                 E. 7 7-        . 77L- *2
                                  B 'fcB2 'f '
                                                            L- *EA  e
                             8 
                                                   .77


vlqfh wkhuh duh wzr uhvwulfwlrqv dqg irxu uhjuhvvlrq sdudphwhuv hvwlpdwhg xqghu
wkh xquhvwulfwhg prgho1 Wkh xquhvwulfwhg +XU, prgho lv wkh gxpp| yduldeoh
uhjuhvvlrq wkdw doorzv wkh lqwhufhswv dqg vorshv wr glhu lq wkh wzr vxevdpsohv dqg
wkh uhvwulfwhg prgho +U, lv wkh uhjuhvvlrq zkhuh wkhvh sdudphwhuv duh frqvwudlqhg
wr eh wkh vdph lq wkh wzr vxevdpsohv1
    Wkh xquhvwulfwhg huuru vxp ri vtxduhv/ . 7 7L- / fdq eh frpsxwhg lq wzr zd|v1
Wkh uvw zd| lv edvhg rq wkh gxpp| yduldeoh uhjuhvvlrq1 Wkh vhfrqg lv edvhg
rq hvwlpdwlqj vhsdudwh uhjuhvvlrq htxdwlrqv iru wkh wzr vxevdpsohv dqg dgglqj
wrjhwkhu wkh uhvxowlqj huuru vxp ri vtxduhv1 Ohw . 7 7 dqg . 7 72 ghqrwh wkh huuru
vxp ri vtxduhv iurp vhsdudwh uhjuhvvlrqv1 Wkhq
                                    .77   L- ' . 7 7 n . 7 72
H{dpsoh 5181       FDSP uhjuhvv         lrq iru LEP frqw*g

   Wkh xquhvwulfwhg uhjuhvvlrq +Hylhzv rxwsxw qrw vkrzq, lv


                   g o '              EffffSD
                                             fff n f HH E |  s 
               - Uc| s                               
                                                    EffHeD
                                                                     -       o


                                       n f fff2  | n f DH  | E |  s 
                                                   (                   (   -        o   c
                                           Efffb2      Ef ..
                           2                e ' ffDfc . 7 7L- ' f2HH .bc
                         -         ' f c j

dqg wkh uhvwulfwhg uhjuhvvlrq lv


                     g o '             EffffeS
                                              fffD n f eDSH E |  s 
               -   Uc| s                              
                                                     EffS.D
                                                                     -        o   c


                              2              e ' ffDc . 7 7- ' f fDDH
                          -         ' f2.bc j

                                                   46
Wkh I0vwdwlvwlf iru whvwlqj Mf      G B  ' f dqg B 2 ' f lv

                                               
                                    Ef fDDH f2HH .b*2
                                                          ' 2SD
                    B 'f 2 'f '
                                         f2HH .b*S
                  8         cB




Wkh <8( txdqwloh/ 8f bD E2c S/ lv dssur{lpdwho| 613:1 Vlqfh 8  'f 2 'f ' 2SD
 f. ' 8f bDE2c S zh gr qrw uhmhfw Mf G B ' f dqg B2 ' f dw wkh 8( vljqlfdqfh
                                                                   B   cB




ohyho1 Lw lv lqwhuhvwlqj wr qrwh wkdw zkhq zh doorz erwk k dqg q wr glhu lq wkh wzr
           




vxevdpsohv zh fdqqrw uhmhfw wkh k|srwkhvlv wkdw wkhvh sdudphwhuv duh wkh vdph
ehwzhhq wzr vdpsohv exw li zh rqo| doorz q wr glhu ehwzhhq wkh wzr vdpsohv zh
fdq uhmhfw wkh k|srwkhvlv wkdw q lv wkh vdph1

5181 Rwkhu w|shv ri Vwuxfwxudo Fkdqjh lq               q
Dq lqwhuhvwlqj txhvwlrq uhjduglqj wkh ehwd ri dq dvvhw frqfhuqv wkh vwdelolw| ri ehwd
ryhu wkh pdunhw f|foh1 Iru h{dpsoh/ frqvlghu wkh iroorzlqj vlwxdwlrqv1 Vxssrvh
wkdw wkh ehwd ri dq dvvhw lv juhdwhu wkdq 4 li wkh pdunhw lv lq dq xs f|foh/
-|  os : fc dqg ohvv wkdq 4 lq d grzq f|foh/ -|  os f1 Wklv zrxog eh d
yhu| ghvludeoh dvvhw wr krog vlqfh lw dffhqwxdwhv srvlwlyh pdunhw pryhphqwv exw
grzq sod|v qhjdwlyh pdunhw pryhphqwv1 Zh fdq lqyhvwljdwh wklv k|srwkhvlv xvlqj
d gxpp| yduldeoh dv iroorzv1 Ghqh

                                  (|R ' c -|  os : f
                                       ' fc -|  os  f

Wkhq (|R glylghv wkh vdpsoh lqwr xs pdunhw pryhphqwv dqg grzq pdunhw
pryhphqwv1 Wkh uhjuhvvlrq wkdw doorzv ehwd wr glhu ghshqglqj rq wkh pdunhw
f|foh lv wkhq

             -|  os ' k n q E-|  os  n B(|R  E-|  os  n 0|
Lq wkh grzq f|foh/ zkhq (|R ' fc wkh prgho lv

                       -|  os ' k n q E-|  os  n 0|
dqg q fdswxuhv wkh grzq pdunhw ehwd/ dqg lq wkh xs pdunhw/ zkhq (|R ' c wkh
prgho lv
                            -|  os ' k n Eq n BE-|  os  n 0|

                                              47
vr wkdw q n B fdswxuh wkh xs pdunhw ehwd1 Wkh k|srwkhvlv wkdw q grhv qrw ydu|
ryhu wkh pdunhw f|foh lv

                           Mf G B ' f yv1 M G B 9' f                       +515,

dqg fdq eh whvwhg zlwk wkh vlpsoh w0vwdwlvwlf |B ' f eB3
                                                                     f
                                                    7. eB    'f
                                                                     E 
   Li wkh hvwlpdwhg ydoxh ri B lv irxqg wr eh vwdwlvwlfdoo| juhdwhu wkdq }hur zh
pljkw wkhq zdqw wr jr rq wr whvw wkh k|srwkhvlv wkdw wkh xs pdunhw ehwd lv
juhdwhu wkdq rqh1 Vlqfh wkh xs pdunhw ehwd lv htxdo wr q n B wklv fruuhvsrqgv wr
whvwlqj
                       Mf G q n B   yv1 M G q n B  
zklfk fdq eh whvwhg xvlqj wkh w0vwdwlvwlf

                                       |q B         qe n eB   
                                        n ' '
                                                    7.
                                                    g Eqe ne B
Vlqfh wklv lv d rqh0vlghg whvw zh zloo uhmhfw wkh qxoo k|srwkhvlv dw wkh 8( ohyho li
| n ' |f fD 3 1
q   B             cA



H{dpsoh 5191           FDSP uhjuhvvlrq iru LEP dqg GHF
    Iru LEP wkh FDSP uhjuhvvlrq doorzlqj q wr ydu| ryhu wkh pdunhw f|foh
+4<:;134 0 4<;5145, lv

        g
    -Uc|    s ' f ffb n f  S E |  s n f fDD2  |R  E |  s 
               o               
                            Ef f
                                          
                                         Ef e.S
                                                     -       o       
                                                                    Ef 2HSf
                                                                               (   -   o


              -
                   2
                        ' f2fc je ' ffD

Qrwlfh wkdw e
            B ' f fDD2 c zlwk d vwdqgdug huuru ri 315;93/ lv forvh wr }hur dqg qrw

hvwlpdwhg yhu| suhflvho|1 Frqvhtxhqwo|/ |B'f ' fffDD2
                                                   2HSf ' fb2b lv qrw vljqlfdqw
dw dq| uhdvrqdeoh vljqlfdqfh ohyho dqg zh wkhuhiruh uhmhfw wkh k|srwkhvlv wkdw
ehwd ydulhv ryhu wkh pdunhw f|foh1 Krzhyhu/ wkh uhvxowv duh yhu| glhuhqw iru GHF
+Gljlwdo Hohfwurqlfv,=
       g
    -(.c|    os ' Efff2eH
                        f e
                               n f SHb E-|  os n fH22. (|R  E-|  os 
                                 Ef..b             Ef eeS

              -2 ' feSfc j
                          e ' ffSe

Khuh eB ' fH22./ zlwk d vwdqgdug huuru ri 316779/ lv vwdwlvwlfdoo| glhuhqw iurp
}hur dw wkh 8( ohyho vlqfh |B'f ' 2 HH1 Wkh hvwlpdwh ri wkh grzq pdunhw ehwd

                                                    48
lv 3169;</ zklfk lv ohvv wkdq rqh/ dqg wkh xs pdunhw ehwd lv 3169;< . 31;55: @
414<49/ zklfk lv juhdwhu wkdq rqh1 Wkh hvwlpdwhg vwdqgdug huuru iru qe n Be uhtxluhv
wkh hvwlpdwhg yduldqfhv ri qe dqg Be dqg wkh hvwlpdwhg fryduldqfh ehwzhhq qe dqg
e
B +zklfk fdq eh rewdlqhg iurp Hylhzv, dqg lv jlyhq e|

              g q
              @oE e n eB ' @oE
                             g q e n @oE
                                      g e           
                                                  g qc
                                           B n 2 SJE e eB
                           ' ff S e n fHSDS n 2     
                                                         ffeH..
                        ' ffD2HDSc
              g  e   e
                          t
                                 e ne
                                               s
              7.Eq n B '   g q
                            @oE    B '         ffD2HDS ' f22bb

Wkhq |qnB' ' fbS3
                  22bb ' fH e zklfk lv ohvv wkdq |f fD D. ' SD vr zh gr qrw
                  
                                                           c

uhmhfw wkh k|srwkhvlv wkdw wkh xs pdunhw ehwd lv ohvv wkdq ru htxdo wr rqh1




                                        49
         Introduction to Financial Econometrics
         Hypothesis Testing in the Market Model
                                  Eric Zivot
                           Department of Economics
                           University of Washington
                                February 29, 2000


1     Hypothesis Testing in the Market Model
In this chapter, we illustrate how to carry out some simple hypothesis tests concerning
the parameters of the excess returns market model regression.

1.1    A Review of Hypothesis Testing Concepts
To be completed.

1.2    Testing the Restriction α = 0.
Using the market model regression,

                   Rt = α + βRMt + εt , t = 1, ..., T
                   εt ∼ iid N (0, σ 2ε ), εt is independent of RMt                  (1)

consider testing the null or maintained hypothesis α = 0 against the alternative that
α 6= 0
                              H0 : α = 0 vs. H1 : α 6= 0.
If H0 is true then the market model regression becomes

                                   Rt = βRMt + εt

and E[Rt |RMt = rMt ] = βrMt . We will reject the null hypothesis, H0 : α = 0, if
the estimated value of α is either much larger than zero or much smaller than zero.
Assuming H0 : α = 0 is true, α̂ ∼ N (0, SE(α̂)2 ) and so is fairly unlikely that α̂ will



                                           1
be more than 2 values of SE(α̂) from zero. To determine how big the estimated value
of α needs to be in order to reject the null hypothesis we use the t-statistic
                                                 αb −0
                                          tα=0 = d      ,
                                                 SE(αb)

where α                                           d α
        b is the least squares estimate of α and SE( b ) is its estimated standard error.
The value of the t-statistic, tα=0 , gives the number of estimated standard errors that
b is from zero. If the absolute value of tα=0 is much larger than 2 then the data cast
α
considerable doubt on the null hypothesis α = 0 whereas if it is less than 2 the data
are in support of the null hypothesis1 . To determine how big | tα=0 | needs to be to
reject the null, we use the fact that under the statistical assumptions of the market
model and assuming the null hypothesis is true

                     tα=0 ∼ Student − t with T − 2 degrees of freedom

If we set the significance level (the probability that we reject the null given that the
null is true) of our test at, say, 5% then our decision rule is

                 Reject H0 : α = 0 at the 5% level if |tα=0 | > tT −2 (0.025)

where tT −2 is the 2 12 % critical value from a Student-t distribution with T − 2 degrees
of freedom.

Example 1 Market Model Regression for IBM

   Consider the estimated MM regression equation for IBM using monthly data from
January 1978 through December 1982:
                b                                 2
                                                           b ε = 0.0524
                R IBM,t =−0.0002 + 0.3390 ·RMt , R = 0.20, σ
                             (0.0068)     (0.0888)


where the estimated standard errors are in parentheses. Here α      b = −0.0002, which is
                                                        d
very close to zero, and the estimated standard error, SE(α̂)    = 0.0068, is much larger
than αb . The t-statistic for testing H0 : α = 0 vs. H1 : α 6= 0 is

                                          −0.0002 − 0
                                tα=0 =                = −0.0363
                                            0.0068
so that αb is only 0.0363 estimated standard errors from zero. Using a 5% significance
level, t58 (0.025) ≈ 2 and
                                  |tα=0 | = 0.0363 < 2
so we do not reject H0 : α = 0 at the 5% level.
   1
    This interpretation of the t-statistic relies on the fact that, assuming the null hypothesis is true
               b is normally distributed with mean 0 and estimated variance SE(b
so that α = 0, α                                                                  d α)2 .


                                                     2
1.3    Testing Hypotheses about β
In the market model regression β measures the contribution of an asset to the vari-
ability of the market index portfolio. One hypothesis of interest is to test if the asset
has the same level of risk as the market index against the alternative that the risk is
diﬀerent from the market:

                               H0 : β = 1 vs. H1 : β 6= 1.
The data cast doubt on this hypothesis if the estimated value of β is much diﬀerent
from one. This hypothesis can be tested using the t-statistic

                                             βb − 1
                                      tβ=1 = d b
                                             SE(β)
which measures how many estimated standard errors the least squares estimate of β
is from one. The null hypothesis is reject at the 5% level, say, if |tβ=1 | > tT −2 (0.025).
Notice that this is a two-sided test.
     Alternatively, one might want to test the hypothesis that the risk of an asset is
strictly less than the risk of the market index against the alternative that the risk is
greater than or equal to that of the market:

                               H0 : β = 1 vs. H1 : β ≥ 1.

Notice that this is a one-sided test. We will reject the null hypothesis only if the
estimated value of β much greater than one. The t-statistic for testing this null
hypothesis is the same as before but the decision rule is diﬀerent. Now we reject the
null at the 5% level if
                                 tβ=1 < −tT −2 (0.05)
where tT −2 (0.05) is the one-sided 5% critical value of the Student-t distribution with
T − 2 degrees of freedom.

Example 2 MM Regression for IBM cont’d

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

                                             3
1.4    Testing Joint Hypotheses about α and β
Often it is of interest to formulate hypothesis tests that involve both α and β. For
example, consider the joint hypothesis that α = 0 and β = 1 :

                                H0 : α = 0 and β = 1.

The null will be rejected if either α 6= 0, β 6= 1 or both.. Thus the alternative is
formulated as
                      H1 : α 6= 0, or β 6= 1 or α 6= 0 and β 6= 1.
This type of joint hypothesis is easily tested using a so-called F-test. The idea behind
the F-test is to estimate the model imposing the restrictions specified under the null
hypothesis and compare the fit of the restricted model to the fit of the model with
no restrictions imposed.
   The fit of the unrestricted (UR) excess return market model is measured by the
(unrestricted) sum of squared residuals (RSS)
                                         T
                                         X             T
                                                       X
               SSRU R = SSR(α̂, β̂) =          ε2t =
                                               b                       b
                                                                   b − βR
                                                             (Rt − α         2
                                                                         Mt ) .
                                         t=1           t=1

Recall, this is the quantity that is minimized during the least squares algorithm. Now,
the market model imposing the restrictions under H0 is

                            Rt = 0 + 1 · (RMt − rf ) + εt
                               = RMt + εt .

Notice that there are no parameters to be estimated in this model which can be seen
by subtracting RMt from both sides of the restricted model to give

                                    Rt − RMt = eεt

The fit of the restricted (R) model is then measured by the restricted sum of squared
residuals
                                                  T
                                                  X             T
                                                                X
               SSRR = SSR(α = 0, β = 1) =               ε2t =
                                                        e             (Rt − RMt )2 .
                                                  t=1           t=1
   Now since the least squares algorithm works to minimize SSR, the restricted error
sum of squares, SSRR , must be at least as big as the unrestricted error sum of squares,
SSRU R . If the restrictions imposed under the null are true then SSRR ≈ SSRU R
(with SSRR always slightly bigger than SSRU R ) but if the restrictions are not true
then SSRR will be quite a bit bigger than SSRU R . The F-statistic measures the
(adjusted) percentage diﬀerence in fit between the restricted and unrestricted models
and is given by
                        (SSRR − SSRU R )/q   (SSRR − SSRU R )
                  F =                      =                   ,
                          SSRU R /(T − k)        q · σb 2ε,U R

                                           4
where q equals the number of restrictions imposed under the null hypothesis, k denotes
the number of regression coeﬃcients estimated under the unrestricted model and
σb 2ε,UR denotes the estimated variance of εt under the unrestricted model. Under the
assumption that the null hypothesis is true, the F-statistic is distributed as an F
random variable with q and T − 2 degrees of freedom:

                                      F ∼ Fq,T −2 .

Notice that an F random variable is always positive since SSRR > SSRUR . The null
hypothesis is rejected, say at the 5% significance level, if

                                   F > Fq,T −k (0.05)

where Fq,T −k (0.05) is the 95% quantile of the distribution of Fq,T −k .
    For the hypothesis H0 : α = 0 and β = 1 there are q = 2 restrictions under the
null and k = 2 regression coeﬃcients estimated under the unrestricted model. The
F-statistic is then
                                       (SSRR − SSRU R )/2
                            Fα=0,β=1 =
                                         SSRU R /(T − 2)

Example 3 MM Regression for IBM cont’d

   Consider testing the hypothesis H0 : α = 0 and β = 1 for the IBM data. The
unrestricted error sum of squares, SSRU R , is obtained from the unrestricted regression
output in figure 2 and is called Sum Square Resid:

                                  SSRU R = 0.159180.

To form the restricted sum of squared residuals, we create the new variable eεt =
                                                  P
Rt − RMt and form the sum of squares SSRR = Tt=1 eε2t = 0.31476. Notice that
SSRR > SSRU R . The F-statistic is then
                                  (0.31476 − 0.159180)/2
                     Fα=0,β=1 =                          = 28.34.
                                       0.159180/58

The 95% quantile of the F-distribution with 2 and 58 degrees of freedom is about
3.15. Since Fα=0,β=1 = 28.34 > 3.15 = F2,58 (0.05) we reject H0 : α = 0 and β = 1 at
the 5% level.

1.5    Testing the Stability of α and β over time
In many applications of the MM, α and β are estimated using past data and the
estimated values of α and β are used to make decision about asset allocation and risk
over some future time period. In order for this analysis to be useful, it is assumed that
the unknown values of α and β are constant over time. Since the risk characteristics of

                                           5
assets may change over time it is of interest to know if α and β change over time. To
illustrate, suppose we have a ten year sample of monthly data (T = 120) on returns
that we split into two five year subsamples. Denote the first five years as t = 1, ..., TB
and the second five years as t = TB+1 , ..., T. The date t = TB is the “break date” of
the sample and it is chosen arbitrarily in this context. Since the samples are of equal
size (although they do not have to be) T − TB = TB or T = 2 · TB . The market model
regression which assumes that both α and β are constant over the entire sample is

                       Rt = α + βRMt + εt , t = 1, . . . , T
                       εt ∼ iid N(0, σ 2 ) independent of RMt .

There are three main cases of interest: (1) β may diﬀer over the two subsamples; (2) α
may diﬀer over the two subsamples; (3) α and β may diﬀer over the two subsamples.

1.5.1   Testing Structural Change in β only
If α is the same but β is diﬀerent over the subsamples then we really have two market
model regressions

                       Rt = α + β 1 RMt + εt , t = 1, . . . , TB
                       Rt = α + β 2 RMt + εt , t = TB+1 , . . . , T

that share the same intercept α but have diﬀerent slopes β 1 6= β 2 . We can capture
such a model very easily using a step dummy variable defined as

                                   Dt = 0, t ≤ TB
                                      = 1, t > TB

and re-writing the MM regression as the multiple regression

                            Rt = α + βRMt + Dt RMt + εt .

The model for the first subsample when Dt = 0 is

                          Rt = α + βRMt + εt , t = 1, . . . , TB

and the model for the second subsample when Dt = 1 is

                   Rt = α + βRMt + δRMt + εt , t = TB+1 , . . . , T
                      = α + (β + δ)RMt + εt .

Notice that the “beta” in the first sample is β 1 = β and the beta in the second
subsample is β 2 = β + δ. If δ < 0 the second sample beta is smaller than the first
sample beta and if δ > 0 the beta is larger.

                                            6
   We can test the constancy of beta over time by testing δ = 0:

H0 : (beta is constant over two sub-samples) δ = 0 vs. H1 : (beta is not constant over two sub-samples

The test statistic is simply the t-statistic

                                       δb − 0   b
                                                δ
                                tδ=0 = d b = d b
                                       SE(δ)  SE(δ)

and we reject the hypothesis δ = 0 at the 5% level, say, if |tδ=0 | > tT −3 (0.025).

Example 4 MM regression for IBM cont’d

   Consider the estimated MM regression equation for IBM using ten years of monthly
data from January 1978 through December 1987. We want to know if the beta on
IBM is using the first five years of data (January 1978 - December 1982) is diﬀerent
from the beta on IBM using the second five years of data (January 1983 - December
1987). We define the step dummy variable

                            Dt = 1 if t > December 1982
                               = 0, otherwise

The estimated (unrestricted) model allowing for structural change in β is given by
                d
               RIBM,t = −0.0001 + 0.3388 ·RM,t + 0.3158 ·Dt · RM,t ,
                             (0.0045)   (0.0837)        (0.1366)

                   R2 = 0.311, σb ε = 0.0496.

The estimated value of β is 0.3388, with a standard error of 0.0837, and the estimated
value of δ is 0.3158, with a standard error of 0.1366. The t-statistic for testing δ = 0
is given by
                                        0.3158
                                 tδ=0 =        = 2.312
                                        0.1366
which is greater than t117 (0.025) = 1.98 so we reject the null hypothesis (at the
5% significance level) that beta is the same over the two subsamples. The implied
estimate of beta over the period January 1983 - December 1987 is

                           β̂ + δ̂ = 0.3388 + 0.3158 = 0.6546.

It appears that IBM has become more risky.




                                               7
1.5.2   Testing Structural Change in α and β
Now consider the case where both α and β are allowed to be diﬀerent over the two
subsamples:

                        Rt = α1 + β 1 RMt + εt , t = 1, . . . , TB
                        Rt = α2 + β 2 RMt + εt , t = TB+1 , . . . , T

The dummy variable specification in this case is

               Rt = α + βRMt + δ 1 · Dt + δ 2 · Dt RMt + εt , t = 1, . . . , T.

When Dt = 0 the model becomes

                           Rt = α + βRMt + εt , t = 1, . . . , TB ,

so that α1 = α and β 1 = β, and when Dt = 1 the model is

                  Rt = (α + δ 1 ) + (β + δ 2 )RMt + εt , t = TB+1 , . . . , T,

so that α2 = α + δ 1 and β 2 = β + δ 2 . The hypothesis of no structural change is now

        H0 : δ 1 = 0 and δ 2 = 0 vs. H1 : δ 1 6= 0 or δ 2 6= 0 or δ 1 6= 0 and δ 2 6= 0.

The test statistic for this joint hypothesis is the F-statistic

                                             (SSRR − SSRU R )/2
                            Fδ1 =0,δ2 =0 =
                                               SSRU R /(T − 4)

since there are two restrictions and four regression parameters estimated under the
unrestricted model. The unrestricted (UR) model is the dummy variable regression
that allows the intercepts and slopes to diﬀer in the two subsamples and the restricted
model (R) is the regression where these parameters are constrained to be the same
in the two subsamples.
    The unrestricted error sum of squares, SSRU R , can be computed in two ways.
The first way is based on the dummy variable regression. The second is based on
estimating separate regression equations for the two subsamples and adding together
the resulting error sum of squares. Let SSR1 and SSR2 denote the error sum of
squares from separate regressions. Then

                                 SSRU R = SSR1 + SSR2 .

Example 5 MM regression for IBM cont’d




                                               8
   The unrestricted regression is
                  d
                 RIBM,t = −0.0001 + 0.3388 ·RMt
                                  (0.0065)      (0.0845)

                                 + 0.0002 ·Dt + 0.3158 ·Dt · RMt ,
                                     (0.0092)        (0.1377)
                         2
                     R        = 0.311, σb ε = 0.050, SSRU R = 0.288379,

and the restricted regression is
                   d
                  RIBM,t = −0.0005 + 0.4568 ·RMt ,
                                   (0.0046)     (0.0675)
                          2
                      R       = 0.279, σb ε = 0.051, SSRR = 0.301558.

The F-statistic for testing H0 : δ 1 = 0 and δ 2 = 0 is
                                      (0.301558 − 0.288379)/2
                    Fδ1 =0,δ2 =0 =                            = 2.651
                                           0.288379/116
The 95% quantile, F2,116 (0.05), is approximately 3.07. Since Fδ1 =0,δ2 =0 = 2.651 <
3.07 = F2,116 (0.05) we do not reject H0 : δ1 = 0 and δ 2 = 0 at the 5% significance
level. It is interesting to note that when we allow both α and β to diﬀer in the
two subsamples we cannot reject the hypothesis that these parameters are the same
between two samples but if we only allow β to diﬀer between the two samples we can
reject the hypothesis that β is the same.

1.6    Other types of Structural Change in β
An interesting question regarding the beta of an asset concerns the stability of beta
over the market cycle. For example, consider the following situations. Suppose that
the beta of an asset is greater than 1 if the market is in an “up cycle”, RMt > 0,
and less than 1 in a “down cycle”, RMt < 0. This would be a very desirable asset to
hold since it accentuates positive market movements but down plays negative market
movements. We can investigate this hypothesis using a dummy variable as follows.
Define

                                     Dtup = 1, RMt > 0
                                          = 0, RMt ≤ 0.

Then Dtup divides the sample into “up market” movements and “down market” move-
ments. The regression that allows beta to diﬀer depending on the market cycle is
then
                         Rt = α + βRMt + δDtup · RMt + εt .
In the down cycle, when Dtup = 0, the model is

                                     Rt = α + βRMt + εt

                                                 9
and β captures the down market beta, and in the up market, when Dtup = 1, the
model is
                          Rt = α + (β + δ)RMt + εt
so that β + δ capture the up market beta. The hypothesis that β does not vary over
the market cycle is
                             H0 : δ = 0 vs. H1 : δ 6= 0                        (2)
                                                       bδ−0
and can be tested with the simple t-statistic tδ=0 = c       .
                                                      SE(bδ)
   If the estimated value of δ is found to be statistically greater than zero we might
then want to go on to test the hypothesis that the up market beta is greater than
one. Since the up market beta is equal to β + δ this corresponds to testing

                             H0 : β + δ = 1 vs. H1 : β + δ ≥ 1

which can be tested using the t-statistic

                                             βb + δb − 1
                                    tβ+δ=1 = d b b .
                                             SE(β + δ)

Since this is a one-sided test we will reject the null hypothesis at the 5% level if
tβ+δ=1 < −t0.05,T −3 .

Example 6 MM regression for IBM and DEC

    For IBM the CAPM regression allowing β to vary over the market cycle (1978.01
- 1982.12) is
               d
              RIBM,t = −0.0019 + 0.3163 ·RMt + 0.0552 ·Dtup · RMt
                               (0.0111)   (0.1476)         (0.2860)
                      2
                  R        = 0.201, σb = 0.053

Notice that bδ = 0.0552, with a standard error of 0.2860, is close to zero and not
estimated very precisely. Consequently, tδ=0 = 0.0552
                                                 0.2860
                                                        = 0.1929 is not significant at
any reasonable significance level and we therefore reject the hypothesis that beta
varies over the market cycle. However, the results are very diﬀerent for DEC (Digital
Electronics):
               d
              RDEC,t = −0.0248 + 0.3689 ·RMt + 0.8227 ·Dtup · RMt
                               (0.0134)   (0.1779)         (0.3446)
                       2
                   R       = 0.460, σb = 0.064.

Here δb = 0.8227, with a standard error of 0.3446, is statistically diﬀerent from zero
at the 5% level since tδ=0 = 2.388. The estimate of the down market beta is 0.3689,
which is less than one, and the up market beta is 0.3689 + 0.8227 = 1.1916, which

                                             10
is greater than one. The estimated standard error for βb + δb requires the estimated
variances of βb and bδ and the estimated covariance between βb and bδ and is given by

                d β
                var( b+b    d β)
                       δ) = var( b + var(
                                      d b          d β,
                                          δ) + 2 · cov( b δ)
                                                          b

                          = 0.031634 + 0.118656 + 2 · −0.048717
                          = 0.052856,
                            q               √
                d    b b
                SE(β + δ) =   d β
                              var( b + δ)
                                       b = 0.052856 = 0.2299


Then tβ+δ=1 = 1.1916−1
                0.2299
                       = 0.8334 which is less than t0.05,57 = 1.65 so we do not reject
the hypothesis that the up market beta is less than or equal to one.




                                         11
Chapter 1
The Constant Expected Return
Model

The first model of asset returns we consider is the very simple constant ex-
pected return (CER) model. This model assumes that an asset’s return over
time is normally distributed with a constant (time invariant) mean and vari-
ance The model also assumes that the correlations between asset returns
are constant over time. Although this model is very simple, it allows us to
discuss and develop several important econometric topics such as estimation,
hypothesis testing, forecasting and model evaluation.

1.0.1     Constant Expected Return Model Assumptions
Let Rit denote the continuously compounded return on an asset i at time t.
We make the following assumptions regarding the probability distribution of
Rit for i = 1, . . . , N assets over the time horizon t = 1, . . . , T.
  1. Normality of returns: Rit ∼ N(µi , σ 2i ) for i = 1, . . . , N and t = 1, . . . , T.
  2. Constant variances and covariances: cov(Rit , Rjt ) = σ ij for i = 1, . . . , N
     and t = 1, . . . , T.
  3. No serial correlation across assets over time: cov(Rit , Rjs ) = 0 for t 6= s
     and i, j = 1, . . . , N.
    Assumption 1 states that in every time period asset returns are normally
distributed and that the mean and the variance of each asset return is con-
stant over time. In particular, we have for each asset i and every time period

                                           1
2CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

t
                                     E[Rit ] = µi
                                   var(Rit ) = σ 2i
The second assumption states that the contemporaneous covariances between
assets are constant over time. Given assumption 1, assumption 2 implies that
the contemporaneous correlations between assets are constant over time as
well. That is, for all assets and time periods
                                 corr(Rit , Rjt ) = ρij
The third assumption stipulates that all of the asset returns are uncorrelated
over time1 . In particular, for a given asset i the returns on the asset are
serially uncorrelated which implies that
                 corr(Rit , Ris ) = cov(Rit , Ris ) = 0 for all t 6= s.
Additionally, the returns on all possible pairs of assets i and j are serially
uncorrelated which implies that
           corr(Rit , Rjs ) = cov(Rit , Rjs ) = 0 for all i 6= j and t 6= s.
    Assumptions 1-3 indicate that all asset returns at a given point in time
are jointly (multivariate) normally distributed and that this joint distribution
stays constant over time. Clearly these are very strong assumptions. How-
ever, they allow us to development a straightforward probabilistic model for
asset returns as well as statistical tools for estimating the parameters of the
model and testing hypotheses about the parameter values and assumptions.

1.0.2      Regression Model Representation
A convenient mathematical representation or model of asset returns can be
given based on assumptions 1-3. This is the constant expected return (CER)
regression model. For assets i = 1, . . . , N and time periods t = 1, . . . , T the
CER model is represented as
                                     Rit = µi + εit                                (1.1)
                                     εit ∼ iid. N(0, σ 2i )
                           cov(εit , εjt ) = σ ij                                  (1.2)
    1
    Since all assets are assumed to be normally distributed (assumption 1), uncorrelated-
ness implies the stronger condition of independence.
                                                                                     3

where µi is a constant and εit is a normally distributed random variable
with mean zero and variance σ 2i . Notice that the random error term εit is
independent of εjs for all time periods t 6= s. The notation εit ∼ iid. N(0, σ 2i )
stipulates that the random variable εit is serially independent and identically
distributed as a normal random variable with mean zero and variance σ 2i .
This implies that, E[εit ] = 0, var(εit ) = σ 2i and cov(εit , εjs ) = 0 for i 6= j and
t 6= s.
    Using the basic properties of expectation, variance and covariance dis-
cussed in chapter 2, we can derive the following properties of returns. For
expected returns we have

                     E[Rit ] = E[µi + εit ] = µi + E[εit ] = µi ,
since µi is constant and E[εit ] = 0. Regarding the variance of returns, we
have

                    var(Rit ) = var(µi + εit ) = var(εit ) = σ 2i
which uses the fact that the variance of a constant (µi ) is zero. For covari-
ances of returns, we have

           cov(Rit , Rjt ) = cov(µi + εit , µj + εjt ) = cov(εit , εjt ) = σ ij
and

       cov(Rit , Rjs ) = cov(µi + εit , µj + εjs ) = cov(εit , εjs ) = 0, t 6= s,

 which use the fact that adding constants to two random variables does not
aﬀect the covariance between them. Given that covariances and variances
of returns are constant over time gives the result that correlations between
returns over time are also constant:
                            cov(Rit , Rjt )      σ ij
       corr(Rit , Rjt ) = p                   =       = ρij ,
                           var(Rit )var(Rjt )   σiσj
                            cov(Rit , Rjs )       0
       corr(Rit , Rjs ) = p                   =       = 0, i 6= j, t 6= s.
                           var(Rit )var(Rjs )   σiσj

Finally, since the random variable εit is independent and identically distrib-
uted (i.i.d.) normal the asset return Rit will also be i.i.d. normal:

                               Rit ∼ i.i.d. N (µi , σ 2i ).
4CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

Hence, the CER model (1.1) for Rit is equivalent to the model implied by
assumptions 1-3.

1.0.3     Interpretation of the CER Regression Model
The CER model has a very simple form and is identical to the measurement
error model in the statistics literature. In words, the model states that each
asset return is equal to a constant µi (the expected return) plus a normally
distributed random variable εit with mean zero and constant variance. The
random variable εit can be interpreted as representing the unexpected news
concerning the value of the asset that arrives between times t − 1 and time
t. To see this, note that using (1.1) we can write εit as
                              εit = Rit − µi
                                  = Rit − E[Rit ]
so that εit is defined to be the deviation of the random return from its
expected value. If the news between times t − 1 and time t is good, then the
realized value of εit is positive and the observed return is above its expected
value µi . If the news is bad, then εjt is negative and the observed return is
less than expected. The assumption that E[εit ] = 0 means that news, on
average, is neutral; neither good nor bad. The assumption that var(εit ) =
σ 2i can be interpreted as saying that volatility of news arrival is constant
over time. The random news variable aﬀecting asset i, εit , is allowed to
be contemporaneously correlated with the random news variable aﬀecting
asset j, εjt , to capture the idea that news about one asset may spill over
and aﬀect another asset. For example, let asset i be Microsoft and asset
j be Apple Computer. Then one interpretation of news in this context is
general news about the computer industry and technology. Good news should
lead to positive values of εit and εjt . Hence these variables will be positively
correlated.

Time Aggregation and the CER Model
The CER model with continuously compounded returns has the following
nice property with respect to the interpretation of εit as news. Consider
the default case where Rit is interpreted as the continuously compounded
monthly return on asset i. Suppose we are interested in the annual contin-
uously compounded return RitA = Rit (12)?˙ Since multiperiod continuously
                                                                                          5

compounded returns are additive, Rit (12) is the sum of 12 monthly continu-
ously compounded returns2 :

                                  11
                                  X
             RitA = Rit (12) =          Rit−k = Rit + Rit−1 + · · · + Rit−11
                                  t=0


Using the CER model representation (1.1) for the monthly return Rit we may
express the annual return Rit (12) as

                                                11
                                                X
                               Rit (12) =          (µi + εit )
                                                 t=0
                                                           11
                                                           X
                                           = 12 · µi +           εit
                                                           t=0
                                           =    µA    A
                                                 i + εit


where µA
P        i = 12 · µi is the annual expected return on asset i and εit =
                                                                          A
  11
  k=0 εit−k is the annual random news component. Hence, the annual ex-
pected return, µAi , is simply 12 times the monthly expected return, µi . The
annual random news component, εA     it , is the accumulation of news over the
year. Using the results from chapter 2 about the variance of a sum of ran-
dom variables, the variance of the annual news component is just 12 time
the variance of the monthly new component:
                              Ã 11           !
                               X
         var(εA
              it ) = var              εit−k )
                                k=0
                        11
                        X
                    =         var(εit−k ) since εit is uncorrelated over time
                        k=0
                        X11
                    =         σ 2i since var(εit ) is constant over time
                        k=0
                    = 12 · σ 2i
                    = var(RitA )
   2
    For simplicity of exposition, we will ignore the fact that some assets do not trade over
the weekend.
6CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

Similarly, using results from chapter 2 about the additivity of covariances
we have that covariance between εA               A
                                         it and εjt is just 12 times the monthly
covariance:
                      Ã 11                  !
                       X           11
                                   X
cov(εA     A
     it , εjt ) = cov      εit−k ,    εjt−k
                        k=0        k=0
                11
                X
            =         cov(εit−k , εjt−k ) since εit and εjt are uncorrelated over time
                k=0
                X11
            =         σ ij since cov(εit , εjt ) is constant over time
                k=0
            = 12 · σ ij
            = cov(RitA , Rjt
                          A
                             )
The above results imply that the correlation between εA       A
                                                      it and εjt is the same
as the correlation between εit and εjt :
                                                 cov(εA     A
                                                      it , εjt )
                       corr(εA     A
                             it , εjt ) = q
                                               var(εA           A
                                                    it ) · var(εjt )

                                                12 · σ ij
                                         = q
                                               12σ 2i · 12σ 2j
                                            σ ij
                                         =       = ρij
                                           σi σj
                                         = corr(εit , εjt )

1.0.4     The CER Model of Asset Returns and the Ran-
          dom Walk Model of Asset Prices
The CER model of asset returns (1.1) gives rise to the so-called random walk
(RW) model of the logarithm of asset prices. To see this, recall that the
continuously compounded return, Rit , is defined from asset prices via
                                 µ       ¶
                                    Pit
                              ln           = Rit .
                                   Pit−1
Since the log of the ratio of prices is equal to the diﬀerence in the logs of
prices we may rewrite the above as
                              ln(Pit ) − ln(Pit−1 ) = Rit .
                                                                                      7

Letting pit = ln(Pit ) and using the representation of Rit in the CER model
(1.1), we may further rewrite the above as

                                pit − pit−1 = µi + εit .                          (1.3)

The representation in (1.3) is know as the RW model for the log of asset
prices.
    In the RW model, µi represents the expected change in the log of asset
prices (continuously compounded return) between months t − 1 and t and εit
represents the unexpected change in prices. That is,

                   E[pit − pit−1 ] = E[Rit ] = µi ,
                              εit = pit − pit−1 − E[pit − pit−1 ].

Further, in the RW model, the unexpected changes in asset prices, εit , are
uncorrelated over time (cov(εit , εis ) = 0 for t 6= s) so that future changes in
asset prices cannot be predicted from past changes in asset prices3 .
    The RW model gives the following interpretation for the evolution of asset
prices. Let pi0 denote the initial log price of asset i. The RW model says
that the price at time t = 1 is

                                 pi1 = pi0 + µi + εi1

where εi1 is the value of random news that arrives between times 0 and 1.
Notice that at time t = 0 the expected price at time t = 1 is

                       E[pi1 ] = pi0 + µi + E[εi1 ] = pi0 + µi

which is the initial price plus the expected return between time 0 and 1.
Similarly, the price at time t = 2 is

                          pi2 = pi1 + µi + εi2
                              = pi0 + µi + µi + εi1 + εi2
                                               2
                                               X
                              = pi0 + 2 · µi +    εit
                                                  t=1
   3
    The notion that future changes in asset prices cannot be predicted from past changes
in asset prices is often referred to as the weak form of the eﬃcient markets hypothesis.
8CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

which is equal to the initial price, pi0 , plus the two period expected
                                                                   P2 return,
2 · µi , plus the accumulated random news over the two periods, t=1 εit . By
recursive substitution, the price at time t = T is
                                                     T
                                                     X
                              piT = pi0 + T · µi +         εit .
                                                     t=1

At time t = 0 the expected price at time t = T is

                                  E[piT ] = pi0 + T · µi

The actual price, piT , deviates from the expected price by the accumulated
random news
                                            X
                                            T
                            piT − E[piT ] =   εit .
                                                  t=1

    Figure 1.1 illustrates the random walk model of asset prices based on the
CER model with µ = 0.05, σ = 0.10 and p0 = 1. The plot shows the log
price, P
       pt , the expected price E[pt ] = p0 + 0.05t and the accumulated random
news tt=1 εt .
    The term random walk was originally used to describe the unpredictable
movements of a drunken sailor staggering down the street. The sailor starts
at an initial position, p0 , outside the bar. The sailor generally moves in the
direction described by µ but randomly deviates from this direction after each
step t by an amount PTequal to εt . After T steps the sailor ends up at position
pT = p0 + µ · T + t=1 εt .


1.1        Monte Carlo Simulation of the CER Model
A good way to understand the probabilistic behavior of a model is to use
computer simulation methods to create pseudo data from the model. The
process of creating such pseudo data is often called Monte Carlo simulation4 .
To illustrate the use of Monte Carlo simulation, consider the problem of
creating pseudo return data from the CER model (1.1) for one asset. The
steps to create a Monte Carlo simulation from the CER model are:

      • Fix values for the CER model parameters µ and σ (or σ 2 )
  4
      Monte Carlo referrs to the fameous city in Monaco where gambling is legal.
1.1 MONTE CARLO SIMULATION OF THE CER MODEL                                      9



              6


                                p(t)
                                E[p(t)]
                                p(t)-E[p(t)]
              4
              2
              0




                  0        20                  40   60      80   100




          Figure 1.1: Simulated random walk model for log prices.

   • Determine the number of simulated values, T, to create.
   • Use a computer random number generator to simulate T iid values
     of εt from N(0, σ 2 ) distribution. Denote these simulated values are
     ε∗1 , . . . , ε∗T .
   • Create simulated return data Rt∗ = µ + ε∗t for t = 1, . . . , T

   To mimic the monthly return data on Microsoft, the values µ = 0.05 and
σ = 0.10 are used as the model’s parameters and T = 100 is the number of
simulated values (sample size). The key to simulating data from the above
model is to simulate T = 100 observations of the random news variable εt
~iid N(0, (0.10)2 ). Computer algorithms exist which can easily create such
observations..Let {ε∗1 , . . . , ε∗100 } denote the 100 simulated values of εt .The
simulated returns are then computed as

                         Rt∗ = 0.05 + ε∗t , t = 1, . . . , 100

   A time plot and histogram of the simulated Rt∗ values are given in figure
.The simulated return data fluctuates randomly about the expected return
10CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

                              Simulated returns from CER model                           Histogram of simulated returns




                                                                                   30
                   0.3




                                                                                   25
                   0.2




                                                                                   20
                   0.1




                                                                       frequency
          return




                                                                                   15
                   0.0




                                                                                   10
                   -0.1




                                                                                   5
                   -0.2




                                                                                   0
                          0        20    40            60   80   100                    -0.2   -0.1   0.0    0.1   0.2   0.3

                                              months                                                    return




Figure 1.2: Simulated returns from the CER model Rt = 0.05 + εt , εt ~iid
N(0, (0.10)2 )


value E[Rt ] = µ = 0.05. The typical size of the fluctuation is approximately
equal to SD(εt ) = 0.10. Notice that the simulated return data looks remark-
ably like the actual monthly return data for Microsoft.
                                                      1
                                                        P100 ∗
   The sample average of the simulated
                                 q P returns is 100 t=1 Rt = 0.0522 and
                                    1    100   ∗            2
the sample standard deviation is 99      t=1 (Rt − (0.0522)) = 0.0914. These
values are very close to the population values E[Rt ] = 0.05 and SD(Rt ) =
0.10, respectively.
   Monte Carlo simulation of a model can be used as a first pass reality
check of the model. If simulated data from the model does not look like the
data that the model is supposed to describe then serious doubt is cast on the
model. However, if simulated data looks reasonably close to the data that
the model is suppose to describe then confidence is instilled on the model.


1.1.1    Simulating End of Period Wealth
To be completed
1.2 ESTIMATING THE PARAMETERS OF THE CER MODEL11

   • insert example showing how to use Monte Carlo simulation to com-
     pute expected end of period wealth. compare computations where end
     of period wealth is based on the expected return over the period ver-
     sus computations based on simulating diﬀerent sample
                                                       PN paths and then
     taking the average. Essentially, compute E[W0 exp( t=1 Rt )] where Rt
     behaves according to the CER model and compare this to W0 exp(Nµ).


1.1.2      Simulating Returns on More than One Asset
To be completed


1.2      Estimating the Parameters of the CER
         Model
1.2.1      The Random Sampling Environment
The CER model of asset returns gives us a rigorous way of interpreting the
time series behavior of asset returns. At the beginning of every month t, Rit
is a random variable representing the return to be realized at the end of the
month. The CER model states that Rit ∼ i.i.d. N (µi , σ 2i ). Our best guess for
the return at the end of the month is E[Ritp        ] = µi , our measure of uncertainty
about our best guess is captured by σ i = var(Rit ) and our measure of the
direction of linear association between Rit and Rjt is σ ij = cov(Rit , Rjt ). The
CER model assumes that the economic environment is constant over time
so that the normal distribution characterizing monthly returns is the same
every month.
    Our life would be very easy if we knew the exact values of µi , σ 2i and σ ij ,
the parameters of the CER model. In actuality, however, we do not know
these values with certainty. A key task in financial econometrics is estimating
the values of µi , σ 2i and σ ij from a history of observed data.
    Suppose we observe monthly returns on N diﬀerent assets over the horizon
t = 1, . . . , T. Let {ri1 , . . . , riT } denote the observed history of T monthly
returns on asset i for i = 1, . . . , N. It is assumed that the observed returns
are realizations of the time series of random variables {Ri1 , . . . , RiT } , where
Rit is described by the CER model (1.1). We call {Ri1 , . . . , RiT } a random
sample from the CER model (1.1) and we call {ri1 , . . . , riT } the realized values
12CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

from the random sample. Under these assumptions, we can use the observed
returns to estimate the unknown parameters of the CER model

1.2.2      Statistical Estimation Theory
Before we describe the estimation of the CER model, it is useful to summarize
some concepts in the statistical theory of estimation. Let θ denote some
characteristic of the CER model (1.1) we are interested in estimating. For
example, if we are interested in the expected return then θ = µi ; if we are
interested in the variance of returns then θ = σ 2i . The goal is to estimate θ
based on the observed data {ri1 , . . . , riT }.

Definition 1 An estimator of θ is a rule or algorithm for forming an esti-
mate for θ based on the random sample {Ri1 , . . . , RiT }

Definition 2 An estimate of θ is simply the value of an estimator based on
the realized sample values {ri1 , . . . , riT }.
                                           P
Example 3 The sample average T1 Tt=1 Rit is an algorithm for computing
an estimate of the expected return µi . Before the sample is observed, the sam-
ple average is a simple linear function of the random variables {Ri1 , . . . , RiT }
and so is itself a random variable. After the sample
                                                 P    {ri1 , . . . , riT } is observed,
the sample average can be evaluated giving T1 Tt=1 rit , which is just a number.
For example, if the observed sample is {0.05, 0.03, −0.10} then the sample av-
erage estimate is 13 (0.05 + 0.03 − 0.10) = −0.02.

    To discuss the properties of estimators it is necessary to establish some
notation. Let θ̂(Ri1 , . . . , RiT ) denote an estimator of θ treated as a function
of the random variables {Ri1 , . . . , RiT }. Clearly, θ̂(Ri1 , . . . , RiT ) is a random
variable. Let θ̂(ri1 , . . . , riT ) denote an estimate of θ based on the realized
values {ri1 , . . . , riT }. θ̂(ri1 , . . . , riT ) is simply an number. We will often use θ̂
as shorthand notation to represent either an estimator of θ or an estimate of
θ. The context will determine how to interpret θ̂.

Example 4 Let R1 , . . . , RT denote a random sample of returns. An estima-
tor of the expected return, µ, is the sample average

                                                     1X
                                                       T
                              µ̂(R1 , . . . , RT ) =       Rt
                                                     T t=1
1.2 ESTIMATING THE PARAMETERS OF THE CER MODEL13

Suppose T = 5 and the realized values of the returns are r1 = 0.1, r2 =
0.05, r3 = 0.025, r4 = −0.1, r5 = −0.05. Then the estimate of the expected
return using the sample average is
                               1
       µ̂(0.1, . . . , −0.05) = (0.1 + 0.05 + 0.025 + −0.1 + −0.05) = 0.005
                               5

1.2.3      Properties of Estimators
Consider θ̂ = θ̂(Ri1 , . . . , RiT ) as a random variable. In general, the pdf
of θ̂, p(θ̂), depends on the pdf’s of the random variables Ri1 , . . . , RiT . The
exact form of p(θ̂) may be very complicated. For analysis purposes, we
often focus on certain characteristics of p(θ̂) like its expected value (center),
variance and standard deviation (spread about expected value). The expected
value of an estimator is related to the concept of estimator bias and the
variance/standard deviation of an estimator is related estimator precision.
Intuitively, a good estimator of θ is one that will produce an estimate θ̂ that
is close θ all of the time. That is, a good estimator will have small bias and
high precision.

Bias
Bias concerns the location or center of p(θ̂). If p(θ̂) is centered away from θ
then we say θ̂ is biased. If p(θ̂) is centered at θ then we say that θ̂ is unbiased.
Formally we have the following definitions:

Definition 5 The estimation error is diﬀerence between the estimator and
the parameter being estimated

                                  error = θ̂ − θ.

Definition 6 The bias of an estimator θ̂ of θ is given by

                              bias(θ̂, θ) = E[θ̂] − θ.

Definition 7 An estimator θ̂ of θ is unbiased if bias(θ̂, θ) = 0; i.e., if E[θ̂] =
θ or E[error] = 0.

    Unbiasedness is a desirable property of an estimator. It means that the
estimator produces the correct answer “on average”, where “on average”
14CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL


                              Pdfs of competing estimators

                  0.8

                  0.7

                  0.6

                  0.5
                                                                  pdf 1
            pdf




                  0.4
                                                                  pdf 2
                  0.3

                  0.2

                  0.1

                   0
                        -10    -5          0          5      10
                                    estimator value




          Figure 1.3: Pdf values for competing estimators of θ = 0.

means over many hypothetical samples. It is important to keep in mind that
an unbiased estimator for θ may not be very close to θ for a particular sample
and that a biased estimator may be actually be quite close to θ. For example,
consider the pdf of θ̂1 in figure 1.3. The center of the distribution is at the
true value θ = 0, E[θ̂ 1 ] = 0, but the distribution is very widely spread out
about θ = 0. That is, var(θ̂1 ) is large. On average (over many hypothetical
samples) the value of θ̂1 will be close to θ but in any given sample the value
of θ̂1 can be quite a bit above or below θ. Hence, unbiasedness by itself does
not guarantee a good estimator of θ. Now consider the pdf for θ̂2 . The center
of the pdf is slightly higher than θ = 0, bias(θ̂2 , θ) = 0.25, but the spread
of the distribution is small. Although the value of θ̂2 is not equal to 0 on
average we might prefer the estimator θ̂2 over θ̂1 because it is generally closer
to θ = 0 on average than θ̂1 .

Precision
An estimate is, hopefully, our best guess of the true (but unknown) value of
θ. Our guess most certainly will be wrong but we hope it will not be too far
1.2 ESTIMATING THE PARAMETERS OF THE CER MODEL15

oﬀ. A precise estimate, loosely speaking, is one that has a small estimation
error. The magnitude of the estimation error is usually captured by the mean
squared error:

Definition 8 The mean squared error of an estimator θ̂ of θ is given by

                     mse(θ̂, θ) = E[(θ̂ − θ)2 ] = E[error2 ]

    The mean squared error measures the expected squared deviation of θ̂
from θ. If this expected deviation is small, then we know that θ̂ will almost
always be close to θ. Alternatively, if the mean squared is large then it is pos-
sible to see samples for which θ̂ to be quite far from θ. A useful decomposition
of mse(θ̂, θ) is given in the following proposition
                                          ³         ´2
Proposition 9 mse(θ̂, θ) = E[(θ̂−E[θ̂]) ]+ E[θ̂] − θ = var(θ̂)+bias(θ̂, θ)2
                                            2



    The proof of this proposition is straightforward and is given in the appen-
dix. The proposition states that for any estimator θ̂ of θ, mse(θ̂, θ) can be
split into a variance component, var(θ̂), and a bias component, bias(θ̂, θ)2 .
Clearly, mse(θ̂, θ) will be small only if both components are small. If an es-
timator is unbiased then mse(θ̂, θ) = var(θ̂) = E[(θ̂ − θ)2 ] is just the squared
deviation of θ̂ about θ. Hence, an unbiased estimator θ̂ of θ is good if it has
a small variance.


1.2.4     Method of Moment Estimators for the Parame-
          ters of the CER Model
Let {Ri1 , . . . , RiT } denote a random sample from the CER model and let
{ri1 , . . . , riT } denote the realized values from the random sample. Consider
the problem of estimating the parameter µi in the CER model (1.1). As an
example, consider the observed monthly continuously compounded returns,
{r1 , . . . , r100 }, for Microsoft stock over the period July 1992 through October
2000. These data are illustrated in figure 1.4.Notice that the data seem to
fluctuate up and down about some central value near 0.03. The typical size of
a deviation about 0.03 is roughly 0.10. Intuitively, the parameter µi = E[Rit ]
in the CER model represents this central value and σ i represents the typical
size of a deviation about µi .
16CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL




                        0.2
                        0.1
                        0.0
              returns
                        -0.1
                        -0.2
                        -0.3
                        -0.4




                               Q3 Q1 Q3    Q1     Q3   Q1     Q3   Q1     Q3   Q1     Q3   Q1     Q3   Q1     Q3   Q1     Q3
                               1992 1993        1994        1995        1996        1997        1998        1999        2000




Figure 1.4: Monthly continuously compounded returns on Microsoft stock.

The method of moments estimate of µi
Let µ̂i denote a prospective estimate of µi 5 . The sample error or residual at
time t associated with this estimate is defined as

                                           ε̂it = rit − µ̂i , t = 1, . . . , T.

This is the estimated news component for month t based on the estimate µ̂i .
Now the CER model imposes the condition that the expected value of the
true error is zero
                               E[εit ] = 0
The method of moments estimator of µi is the value of µ̂i that makes the
average of the sample errors equal to the expected value of the population
errors. That is, the method of moments estimator solves

                                  1X
                                     T
                                               1X
                                                  T
                                        ε̂it =       (rit − µ̂i ) = E[εit ] = 0                                                (1.4)
                                  T t=1        T t=1
  5
      In this book, quantities with a “ˆ” denote an estimate.
1.2 ESTIMATING THE PARAMETERS OF THE CER MODEL17


                                                                       Returns on Microsoft


                    0.0
          returns

                    -0.4




                            Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4
                            1992     1993        1994        1995        1996            1997    1998        1999        2000


                                                                       Returns on Starbucks
                    0.0
          returns

                    -0.4




                            Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4
                            1992     1993        1994        1995        1996            1997    1998        1999        2000


                                                                       Returns on S&P 500
                    0.05
          returns

                    -0.15




                            Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4
                            1992     1993        1994        1995        1996            1997    1998        1999        2000




Figure 1.5: Monthly continuously compounded returns on Microsoft, Star-
bucks and the S&P 500 Index.


Solving (1.4) for µ̂i gives the method of moments estimate of µi :


                                                                     1X
                                                                             T
                                                         µ̂i =             rit = r̄.                                                (1.5)
                                                                     T t=1


Hence, the method of moments estimate of µi (i = 1, . . . , N) in the CER
model is simply the sample average of the observed returns for asset i.




Example 10 Consider the monthly continuously compounded returns on Mi-
crosoft, Starbucks and the S&P 500 index over the period July 1992 through
October 2000. The returns are shown in figure For the T = 100 monthly
18CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

continuously returns the estimates of E[Rit ] = µi are

                                  1 X
                                           100
                       µ̂msf t =         rmsf t,t = 0.0276
                                 100 t=1
                                  1 X
                                           100
                        µ̂sbux =         rsbux,t = 0.0278
                                 100 t=1
                                  1 X
                                           100
                       µ̂sp500 =         rsp500,t = 0.0125
                                 100 t=1

The mean returns for MSFT and SBUX are very similar at about 2.8%
per month whereas the mean return for SP500 is smaller at only 1.25% per
month.

The method of moments estimates of σ 2i , σ i , σ ij and ρij
The method of moments estimates of σ 2i , σ i , σ ij and ρij are defined analo-
gously to the method of moments estimator for µi . Without going into the
details, the method of moments estimates of σ 2i , σ i , σ ij and ρij are given by
the sample descriptive statistics

                               1 X
                                     T
                      σ̂ 2i=           (rit − r̄i )2 ,                      (1.6)
                             T − 1 t=1
                             q
                      σ̂ i = σ̂ 2i ,                                        (1.7)
                                 1 X
                                      T
                     σ̂ ij =             (rit − r̄i )(rjt − r̄j ),          (1.8)
                               T − 1 t=1
                                σ̂ ij
                      ρ̂ij =                                                (1.9)
                               σ̂ i σ̂ j
                P
where r̄i = T1 Tt=1 rit = µ̂i is the sample average of the returns on asset.i.
Notice that (1.6) is simply the sample variance of the observed returns for
asset i, (1.7) is the sample standard deviation, (1.8) is the sample covariance
of the observed returns on assets i and j and (1.9) is the sample correlation
of returns on assets i and j.
Example 11 Consider again the monthly continuously compounded returns
on Microsoft, Starbucks and the S&P 500 index over the period July 1992
1.2 ESTIMATING THE PARAMETERS OF THE CER MODEL19

                                                 -0.5   -0.3   -0.1    0.1   0.3

                                                                                                                            0.3


                                                                                                                            0.1


                                sbux                                                                                        -0.1


                                                                                                                            -0.3


                                                                                                                            -0.5

            0.3


            0.1

                                                                msft
           -0.1


           -0.3


           -0.5
                                                                                                                            0.10

                                                                                                                            0.05

                                                                                                                            0.00
                                                                                                 sp500
                                                                                                                            -0.05

                                                                                                                            -0.10

                                                                                                                            -0.15

                                                                                                                            -0.20
                  -0.5   -0.3   -0.1     0.1   0.3                             -0.20 -0.15 -0.10 -0.05 0.00   0.05   0.10




Figure 1.6: Scatterplot matrix of monthly returns on Microsoft, Starbucks
and S&P 500 index.

through October 2000. The estimates of the parameters σ 2i , σ i , using (1.6)
and (1.7) are

                                       σ̂ 2msf t = 0.0114, σ̂ msf t = 0.1068
                                    σ̂ 2sbux = 0.0185, σ̂ sbux = 0.1359
                                   σ̂ 2sp500 = 0.0014, σ̂ sp500 = 0.0379

SBUX has the most variable monthly returns and SP500 has the smallest.
The scatterplots of the returns are illustrated in figure 1.6. All returns appear
to be positively related. The pairs (MSFT,SP500) and (SBUX,SP500) appear
to be the most correlated.The estimates of σ ij and ρij using (1.8) and (1.9)
are

        σ̂ msf t,sbux = 0.0040, σ̂ msf t,sp500 = 0.0022, σ̂ sbux,sp500 = 0.0022
        ρ̂msf t,sbux = 0.2777, ρ̂msf t,sp500 = 0.5551, ρ̂sbux,sp500 = 0.4197

These estimates confirm the visual results from the scatterplot matrix.
20CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

1.3     Statistical Properties of Estimates
1.3.1     Statistical Properties of µ̂i
To determine the statistical properties of µ̂i in the CER model, we treat it
as a function of the random sample Ri1 , . . . , RiT :

                                                         1X
                                                            T
                      µ̂i = µ̂i (Ri1 , . . . , RiT ) =         Rit       (1.10)
                                                         T t=1

where Rit is assumed to be generated by the CER model (1.1).

Bias
In the CER model, the random variables Rit (t = 1, . . . , T ) are iid normal
with mean µi and variance σ 2i . Since the method of moments estimator
(1.10) is an average of these normal random variables it is also normally
distributed. That is, p(µ̂i ) is a normal density. ToPdetermine the mean of
                                                   −1  T
this distribution we must compute E[µ̂i ] = E[T        t=1 Rit ]. Using results
from chapter 2 about the expectation of a linear combination of random
variables it is straightforward to show (details are given in the appendix)
that
                                   E[µ̂i ] = µi
Hence, the mean of the distribution of µ̂i is equal to µi . In other words, µ̂i
an unbiased estimator for µi .

Precision
                                                                        P
To determine the variance of µ̂i we must compute var(µ̂i ) = var(T −1 Tt=1 Rit ).
Using the results from chapter 2 about the variance of a linear combination
of uncorrelated random variables it is easy to show (details in the appendix)
that
                                            σ2
                                 var(µ̂i ) = .                            (1.11)
                                            T
Notice that the variance of µ̂i is equal to the variance of Rit divided by the
sample size and is therefore much smaller than the variance of Rit .
    The standard deviation of µ̂i is just the square root of var(µ̂it )
                                    p             σi
                        SD(µ̂i ) = var(µ̂i ) = √ .                        (1.12)
                                                   T
1.3 STATISTICAL PROPERTIES OF ESTIMATES                                            21



                 0.8



                                                                       pdf 1
                                                                       pdf 2
                 0.6
                 0.4
           pdf
                 0.2
                 0.0




                       -3   -2           -1         0          1   2           3
                                              estimate value




Figure 1.7: Pdfs for µ̂i with small and large values of SE(µ̂i ). True value of
µi = 0.

The standard deviation of µ̂i is most often referred to as the standard error
of the estimate µ̂i :
                                                   σi
                           SE(µ̂i ) = SD(µ̂i ) = √ .                       (1.13)
                                                    T
SE(µ̂i ) is in the same units as µ̂i and measures the precision of µ̂i as an
estimate. If SE(µ̂i ) is small relative to µ̂i then µ̂i is a relatively precise of
µi because p(µ̂i ) will be tightly concentrated around µi ; if SE(µ̂i ) is large
relative to µi then µ̂i is a relatively imprecise estimate of µi because p(µ̂i )
will be spread out about µi . Figure 1.7 illustrates these relationships
    Unfortunately, SE(µ̂i ) is not a practically useful measure of the precision
of µ̂i because it depends on the unknown value of σ i . To get a practically
useful measure of precision for µ̂i we compute the estimated standard error
                                      p             bi
                                                    σ
                           c i ) = vd
                          SE(µ̂          ar(µ̂i ) = √                      (1.14)
                                                      T
which is just (1.13) withq
                         the unknown value of σ i replaced by the method of
                 bi =
moments estimate σ               b2i .
                                 σ
22CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

Example 12 For the Microsoft, Starbucks and S&P 500 return data, the
          c i ) are
values of SE(µ̂

                        c msf t ) = 0.1068
                       SE(µ̂        √      = 0.01068
                                       100
                        c sbux ) = 0.1359
                       SE(µ̂        √      = 0.01359
                                       100
                       c sp500 ) = 0.0379
                       SE(µ̂        √      = 0.003785
                                       100
Clearly, the mean return µi is estimated more precisely for the S&P 500 index
than it is for Microsoft and Starbucks.

Interpreting E[µ̂i ] and SE(µ̂i ) using Monte Carlo simulation
The statistical concepts E[µi ] = µi and SE(µi ) are a bit hard to grasp at first.
Strictly speaking, E[µ̂i ] = µi means that over an infinite number of repeated
samples the average of the µ̂i values computed over the infinite samples is
equal to the true value µi . Similarly, SE(µ̂i ) represents the standard deviation
of these µ̂i values. We may think of these hypothetical samples as Monte
Carlo simulations of the CER model. In this way we can approximate the
computations involved in evaluating E[µ̂i ] and SE(µ̂i ).
    To illustrate, consider the CER model

                          Rt = 0.05 + εit , t = 1, . . . , 50                 (1.15)
                               εit ~iid N (0, (0.10)2 )

and simulate N = 1000 samples of size T = 50 values from the above model
using the technique of Monte Carlo simulation. This gives j = 1, . . . , 1000
sample realizations {r1j∗ , . . . , r50
                                     j∗
                                        }. The first 10 of these sample realizations
are illustrated in figure 1.8.Notice that there is considerable variation in the
simulated samples but that all of the simulated samples fluctuates about
the true mean value of µ = 0.05. For each of the 1000 simulated samples the
estimate µ̂ is formed giving 1000 mean estimates {µ̂1 , . . . , µ̂1000 }. A histogram
of these 1000 mean values is illustrated in figure 1.9.The histogram of the
estimated means, µ̂j , can be thought of as an estimate of the underlying pdf,
p(µ̂), of the estimator µ̂ which we know is a Normal pdf centered at µ = 0.05
                   0.10
with SE(µ̂i ) = √    50
                        = 0.01414. Notice that the center of the histogram is
very close to the true mean value µ = 0.05. That is, on average over the
1.3 STATISTICAL PROPERTIES OF ESTIMATES                                            23



                      0.3
                      0.2
                      0.1
            returns
                      0.0
                      -0.1
                      -0.2




                             0   10         20      30        40    50




Figure 1.8: Ten simulated samples of size T = 50 from the CER model
Rt = 0.05 + εt , εt ~iid N(0.(0.10)2 )

1000 Monte Carlo samples the value of µ̂ is about 0.05. In some samples,
the estimate is too big and in some samples the estimate is too small but on
average the estimate is correct. In fact, the average value of {µ̂1 , . . . , µ̂1000 }
from the 1000 simulated samples is

                                       1 X j
                                           1000
                                               µ̂ = 0.05045
                                      1000 j=1

which is very close to the true value. If the number of simulated samples is
allowed to go to infinity then the sample average of µ̂j will be exactly equal
to µ :
                                    1 X j
                                       N
                               lim        µ̂ = µ
                              N→∞ N
                                      j=1

   The typical size of the spread about the center of the histogram represents
SE(µ̂i ) and gives an indication of the precision of µ̂i .The value of SE(µ̂i ) may
be approximated by computing the sample standard deviation of the 1000
24CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL




             250
             200
             150
             100
             50
             0




                   0.0       0.02     0.04            0.06   0.08   0.10
                                        Estimate of mean




Figure 1.9: Histogram of 1000 values of µ̂ from Monte Carlo simulation of
CER model.

µ̂j values               v
                         u
                         u 1 X 1000
                         t          (µ̂j − 0.05045)2 = 0.01383
                           999 j=1
                                                   0.10
Notice that this value is very close to SE(µ̂i ) = √ 50
                                                        = 0.01414. If the number
of simulated sample goes to infinity then
                      v
                      u
                      u 1 X       N
                                          1 X j 2
                                               N
                 lim  t                j
                                    (µ̂ −         µ̂ ) = SE(µ̂i )
                N →∞     N − 1 j=1        N j=1


The Sampling Distribution of µ̂i
                                                                              σ2
Using the results that pdf of µ̂i is normal with E[µ̂i ] = µi and var(µ̂i ) = Ti
we may write                           µ         ¶
                                            σ 2i
                            µ̂i ∼ N µi ,           .                       (1.16)
                                            T
1.3 STATISTICAL PROPERTIES OF ESTIMATES                                          25



                 2.5


                                                                  pdf T=1
                                                                  pdf T=10
                                                                  pdf T=50
                 2.0
                 1.5
           pdf
                 1.0
                 0.5
                 0.0




                       -3    -2     -1         0          1   2              3
                                         estimate value




                 Figure 1.10: N (0, √1T ) density for T = 1, 10 and 50.




The distribution for µ̂i is centered at the true value µi and the spread about
the average depends on the magnitude of σ 2i , the variability of Rit , and the
sample size. For a fixed sample size, T , the uncertainty in µ̂i is larger for
larger values of σ 2i . Notice that the variance of µ̂i is inversely related to
the sample size T. Given σ 2i , var(µ̂i ) is smaller for larger sample sizes than
for smaller sample sizes. This makes sense since we expect to have a more
precise estimator when we have more data. If the sample size is very large (as
T → ∞) then var(µ̂i ) will be approximately zero and the normal distribution
of µ̂i given by (1.16) will be essentially a spike at µi . In other words, if the
sample size is very large then we essentially know the true value of µi . In the
statistics language we say that µ̂i is a consistent estimator of µi .

    The distribution of µ̂i , with µi = 0 and σ 2i = 1 for various sample sizes is
illustrated in figure 1.10. Notice how fast the distribution collapses at µi = 0
as T increases. .
26CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

Confidence intervals for µi
The precision of µ̂i is best communicated by computing a confidence interval
for the unknown value of µi . A confidence interval is an interval estimate of
µi such that we can put an explicit probability statement about the likeli-
hood that the confidence interval covers µi . The construction of a confidence
interval for µi is based on the following statistical result (see the appendix
for details).
    Result: Let Ri1 , . . . , RiT denote a random sample from the CER model.
Then
                                   µ̂i − µi
                                            ∼ tT −1 ,
                                    c i)
                                   SE(µ̂
where tT −1 denotes a Student-t random variable with T − 1 degrees of free-
dom.
    The above result states that the standardized value of µ̂i has a Student-t
distribution with T −1 degrees of freedom6 . To compute a (1 −α)· 100% con-
fidence interval for µi we use (??) and the quantile (critical value) tT −1 (α/2)
to give         Ã                                       !
                                  µ̂i − µi
             Pr −tT −1 (α/2) ≤             ≤ tT −1 (α/2) = 1 − α,
                                   c i)
                                  SE(µ̂
which can be rearranged as
        ³                                                     ´
                             c i ) ≤ µi ≤ µ̂i + tT −1 · SE(µ̂
      Pr µ̂i − tT −1 (α/2) · SE(µ̂                      c i ) = 0.95.

Hence, the interval
                       c i ), µ̂i + tT −1 · SE(µ̂
  [µ̂i − tT −1 (α/2) · SE(µ̂                c i )] = µ̂i ± tT −1 (α/2) · SE(µ̂
                                                                         c i)

covers the true unknown value of µi with probability 1 − α.
     For example, suppose we want to compute 95% confidence intervals for
µi . In this case α = 0.05 and 1 − α = 0.95. Suppose further that T − 1 = 60
(five years of monthly return data) so that tT −1 (α/2) = t60 (0.025) = 2 and
t60 (0.005) = . Then the 95% confidence for µi is given by

                                            c i ).
                                  µ̂i ± 2 · SE(µ̂                                (1.17)
   6                                                                      d i ) is equal
    This resut follows from the fact that µ̂i is normally distributed and SE(µ̂
to the square root of a chi-square random variable divided by its degrees of freedom.
1.3 STATISTICAL PROPERTIES OF ESTIMATES                                          27

The above formula for a 95% confidence interval is often used as a rule of
thumb for computing an approximate 95% confidence interval for moderate
sample sizes. It is easy to remember and does not require the computation
of quantile tT −1 (α/2) from the Student-t distribution.


Example 13 Consider computing approximate 95% confidence intervals for
µi using (1.17) based on the estimated results for the Microsoft, Starbucks
and S&P 500 data. These confidence intervals are

             M SF T : 0.02756 ± 2 · 0.01068 = [0.0062, 0.0489]
             SBU X : 0.02777 ± 2 · 0.01359 = [0.0006, 0.0549]
             SP 500 : 0.01253 ± 2 · 0.003785 = [0.0050, 0.0201]

With probability .95, the above intervals will contain the true mean values
assuming the CER model is valid. The approximate 95% confidence inter-
vals for MSFT and SBUX are fairly wide. The widths are almost 5% with
lower limits near 0 and upper limits near 5%. In contrast, the 95% con-
fidence interval for SP500 is about half the width of the MSFT or SBUX
confidence interval. The lower limit is near .5% and the upper limit is near
2%. This clearly shows that the mean return for SP500 is estimated much
more precisely than the mean return for MSFT or SBUX.


1.3.2     Statistical properties of the method of moments
          estimators of σ 2i , σ i, σ ij and ρij .
To determine the statistical properties of σ̂ 2i and σ̂ 2i we need to treat them
as a functions of the random sample Ri1 , . . . , RiT :

                                                  1 X
                                                          T
               σ̂ 2i =  σ̂ 2i (Ri1 , . . . RiT ) =             (Rit − µ̂i )2 ,
                                                T − 1 t=1
                                                q
                σ̂ i = σ̂ i (Ri1 , . . . RiT ) = σ̂ 2i (Ri1 , . . . RiT ).

Note also that µ̂i is to be treated as a random variable. Similarly, to de-
termine the statistical properties of σ̂ ij and ρ̂ij we need to treat them as a
28CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

functions of Ri1 , . . . , RiT and Ri1 , . . . , RjT :

                                                               1 X
                                                                    T
  σ̂ ij = σ̂ ij (Ri1 , . . . , RiT ; Rj1 , . . . , RjT ) =             (Rit − µ̂i )(Rjt − µ̂j ),
                                                             T − 1 t=1
                                                              σ̂ ij (Ri1 , . . . , RiT ; Rj1 , . . . , RjT )
  ρ̂ij = σ̂ ij (Ri1 , . . . , RiT ; Rj1 , . . . , RjT ) =                                                      .
                                                             σ̂ i (Ri1 , . . . RiT ) · σ̂ j (Rj1 , . . . RjT )

Bias
Assuming that returns are generated by the CER model (1.1), the sample
variances and covariances are unbiased estimators,

                                            E[σ̂ 2i ] = σ 2i ,
                                            E[σ̂ ij ] = σ ij ,

but the sample standard deviations and correlations are biased estimators,

                                            E[σ̂ i ] 6= σ i ,
                                            E[ρ̂ij ] 6= ρij .

The proofs of these results are beyond the scope of this book. However, they
may be easily be evaluated using Monte Carlo methods.

Precision
The derivations of the variances of σ̂ 2i , σ̂ i , σ̂ ij and ρ̂ij are complicated and the
exact results are extremely messy and hard to work with. However, there are
simple approximate formulas for the variances of σ̂ 2i , σ̂ i and ρ̂ij that are valid
if the sample size, T, is reasonably large 7 . These large sample approximate
formulas are given by
                                                     σ2
                                      SE(σ̂ 2i ) ≈ p i ,                                                 (1.18)
                                                      T /2
                                                    σi
                                      SE(σ̂ i ) ≈ √ ,                                                    (1.19)
                                                     2T
                                                   (1 − ρ2ij )
                                      SE(ρij ) ≈      √        ,                                         (1.20)
                                                        T
   7
    The large sample approximate formula for the variance of σ̂ ij is too messy to work
with so we omit it here.
1.3 STATISTICAL PROPERTIES OF ESTIMATES                                            29

where “≈” denotes approximately equal. The approximations are such that
the approximation error goes to zero as the sample size T gets very large.
As with the formula for the standard error of the sample mean, the formulas
for the standard errors above are inversely related to the square root of the
sample size. Interestingly, SE(σ̂ i ) goes to zero the fastest and SE(σ̂ 2i ) goes to
zero the slowest. Hence, for a fixed sample size, it appears that σ i is generally
estimated more precisely than σ 2i and ρij , and ρij is estimated generally more
precisely than σ 2i .
    The above formulas are not practically useful, however, because they
depend on the unknown quantities σ 2i , σ i and ρij . Practically useful formulas
replace σ 2i , σ i and ρij by the estimates σ̂ 2i , σ̂ i and ρ̂ij and give rise to the
estimated standard errors
                                            2
                               c 2i ) ≈ pσ̂ i ,
                              SE(σ̂                                            (1.21)
                                           T /2
                               c i ) ≈ √σ̂ i ,
                              SE(σ̂                                            (1.22)
                                          2T
                                        (1 − ρ̂2ij )
                              c ij ) ≈
                              SE(ρ         √         .                         (1.23)
                                              T
Example 14 To be completed

Sampling distribution
To be completed

Confidence Intervals for σ 2i , σ i and ρij
Approximate 95% confidence intervals for σ 2i , σ i and ρij are give by
                                                            2
                                  c 2i ) = σ̂ 2i ± 2 · pσ̂ i ,
                      σ̂ 2i ± 2 · SE(σ̂
                                                         T /2
                                   c i ) = σ̂ i ± 2 · √σ̂ i
                       σ̂ i ± 2 · SE(σ̂
                                                        2T
                                                       (1 − ρ̂2 )
                                  c ij ) = ρ̂ij ± 2 · √ ij
                     ρ̂ij ± 2 · SE(ρ̂
                                                              T
Example 15 To be completed
30CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL




                                                                             200
              200




                                                                             150
              150




                                                                             100
              100




                                                                             50
              50
              0




                                                                             0
                    0.004   0.006   0.008   0.010   0.012    0.014   0.016         0.08             0.10               0.12

                                      Estimate of variance                                Estimate of std. deviation




Figure 1.11: Histograms of σ̂ 2 and σ̂ computed from N = 1000 Monte Carlo
samples from CER model.




Evaluating the Statistical Properties of σ̂ 2i , σ̂ i , σ̂ ij and ρ̂ij by Monte
Carlo simulation




We may evaluate the statistical properties of σ̂ 2i , σ̂ i , σ̂ ij and ρ̂ij by Monte
Carlo simulation in the same way that we evaluated the statistical properties
of µ̂i . Consider first the variability estimates σ̂ 2i and σ̂ i . We use the simulation
model (1.15) and N = 1000 simulated samples of size T = 50 to compute the
             ¡ ¢1         ¡ ¢1000
estimates { σ̂ 2 , . . . , σ̂ 2   } and {σ̂ 1 , . . . , σ̂ 1000 }. The histograms of these
values are displayed in figure 1.11.The histogram for the σ̂ 2 values is bell-
shaped and slightly right skewed but is centered very close to 0.010 = σ 2 . The
histogram for the σ̂ values is more symmetric and is centered near 0.10 = σ.
1.4 FURTHER READING                                                      31

The average values of σ 2 and σ from the 1000 simulations are


                           1 X 2
                                 1000
                                   σ̂ = 0.009952
                          1000 j=1

                            1 X
                                  1000
                                    σ̂ = 0.09928
                           1000 j=1



   The sample standard deviation values of the Monte Carlo estimates of σ 2
and σ give approximations to SE(σ̂ 2 ) and SE(σ̂). Using the formulas (1.18)
and (1.19) these values are


                             2    (0.10)2
                        SE(σ̂ ) = p        = 0.002
                                    50/2
                                   0.10
                         SE(σ̂) = √        = 0.010
                                    2 · 50




1.4     Further Reading

To be completed




1.5     Appendix

1.5.1     Proofs of Some Technical Results

Result: E[µ̂i ] = µi
32CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL
                                                   PT
  Proof. Using the fact that µ̂i = T −1               t=1 Rit and Rit = µi + εit we have
                  "           #
                    1X
                       T
      E[µ̂i ] = E         Rit
                    T t=1
                  "                 #
                    1X
                       T
              = E         (µ + εit )
                    T t=1 i

                1X
                   T
                         1X
                           T
              =      µ +      E[εit ] (by the linearity of E[·])
                T t=1 i T t=1

                1X
                        T
              =      µ (since E[εit ] = 0, t = 1, . . . , T )
                T t=1 i
                 1
              =      T · µi
                 T
              = µi .

                            σ2
 Result: var(µi ) = Ti .
                                        P
 Proof. Using the fact that µ̂i = T −1 Tt=1 Rit and Rit = µi + εit we have
                 Ã           !
                   1X
                      T
 var(µ̂i ) = var         Rit
                   T t=1
                 Ã                  !
                   1 XT
           = var         (µ + εit )   (in the CER model Rit = µi + εit )
                   T t=1 i
                 Ã           !
                   1X
                      T
           = var         εit   (since µi is a constant)
                   T t=1

            1 X
                  T
          = 2    var(εit ) (since εit is independent over time)
           T t=1

            1 X 2
                  T
          = 2   σ                (since var(εit ) = σ 2i , t = 1, . . . , T )
           T t=1 i
            1
          =  2
               T σ 2i
           T
           σ2
          = i.
            T
1.5 APPENDIX                                                                              33

1.5.2        Some Special Probability Distributions Used in
             Statistical Inference
The Chi-Square distribution with T degrees of freedom
Let Z1 , Z2 , . . . , ZT be independent standard normal random variables. That
is,
                           Zi ∼ i.i.d. N(0, 1), i = 1, . . . , T.
Define a new random variable X such that
                                                         T
                                                         X
                           X = Z12 + Z22 + · · · ZT2 =         Zi2 .
                                                         i=1

Then X is a chi-square random variable with T degrees of freedom. Such a
random variable is often denoted χ2T and we use the notation X ∼ χ2T . The
pdf of X is illustrated in Figure xxx for various values of T. Notice that X
is only allowed to take non-negative values. The pdf is highly right skewed
for small values of T and becomes symmetric as T gets large. Furthermore,
it can be shown that
                                  E[X] = T.
    The chi-square distribution is used often in statistical inference and prob-
abilities associated with chi-square random variables are needed. Critical
values, which are just quantiles of the chi-square distribution, are used in
typical calculations. To illustrate, suppose we wish to find the critical value
of the chi-square distribution with T degrees of freedom such that the prob-
ability to the right of the critical value is α. Let χ2T (α) denote this critical
value8 . Then
                             Pr(X > χ2T (α)) = α.
For example, if T = 5 and α = 0.05 then χ25 (0.05) = 11.07; if T = 100 then
χ2100 (0.05) = 124.34.

1.5.3        Student’s t distribution with T degrees of free-
             dom
Let Z be a standard normal random variable, Z ∼ N(0, 1), and let X be
a chi-square random variable with T degrees of freedom, X ∼ χ2T . Assume
  8
      Excel has functions for computing probabilities from the chi-square distribution.
34CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

that Z and X are independent. Define a new random variable t such that
                                      Z
                                t= p      .
                                      X/T

Then t is a Student’s t random variable with T degrees of freedom and we
use the notation t ∼ tT to indicate that t is distributed Student-t. Figure
xxx shows the pdf of t for various values of the degrees of freedom T. Notice
that the pdf is symmetric about zero and has a bell shape like the normal.
The tail thickness of the pdf is determined by the degrees of freedom. For
small values of T , the tails are quite spread out and are thicker than the
tails of the normal. As T gets large the tails shrink and become close to the
normal. In fact, as T → ∞ the pdf of the Student t converges to the pdf of
the normal.
    The Student-t distribution is used heavily in statistical inference and
critical values from the distribution are often needed. Let tT (α) denote the
critical value such that
                              Pr(t > tT (α)) = α.
For example, if T = 10 and α = 0.025 then t10 (0.025) = 2.228; if T = 100
then t60 (0.025) = 2.00. Since the Student-t distribution is symmetric about
zero, we have that

                     Pr(−tT (α) ≤ t ≤ tT (α)) = 1 − 2α.

For example, if T = 60 and α = 2 then t60 (0.025) = 2 and

 Pr(−t60 (0.025) ≤ t ≤ t60 (0.025)) = Pr(−2 ≤ t ≤ 2) = 1 − 2(0.025) = 0.95.


1.6     Problems
To be completed
Bibliography

[1] Campbell, Lo and MacKinley (1998). The Econometrics of Financial
    Markets, Princeton University Press, Princeton, NJ.




                                35
          Introduction to Financial Econometrics
            Appendix Matrix Algebra Review
                                    Eric Zivot
                             Department of Economics
                             University of Washington
                                 January 3, 2000
                          This version: February 6, 2001


1     Matrix Algebra Review
A matrix is just an array of numbers. The dimension of a matrix is determined by
the number of its rows and columns. For example, a matrix A with n rows and m
columns is illustrated below
                                                    
                                   a11 a12 . . . a1m
                                  a21 a22 . . . a2m 
                                                    
                             A =  ..    ..       .. 
                           (n×m)  .      . ... . 
                                   an1 an2 . . . anm

where aij denotes the ith row and j th column element of A.
   A vector is simply a matrix with 1 column. For example,
                                               
                                             x1
                                            x2 
                                               
                                      x =  .. 
                                   (n×1)    . 
                                             xn
is an n × 1 vector with elements x1 , x2 , . . . , xn . Vectors and matrices are often written
in bold type (or underlined) to distinguish them from scalars (single elements of
vectors or matrices).
    The transpose of an n × m matrix A is a new matrix with the rows and columns
of A interchanged and is denoted A0 or A| . For example,
                                                                    
                                 ·                ¸              1 4
                                   1 2 3
                         A =                        , A0 =  2 5 
                       (2×3)       4    5     6         (3×2)
                                                                 3 6

                                              1
                                     
                                    1                             £        ¤
                          x     =  2 ,                  x0 =        1 2 3 .
                      (3×1)                           (1×3)
                                    3

    A symmetric matrix A is such that A = A0 . Obviously this can only occur if A
is a square matrix; i.e., the number of rows of A is equal to the number of columns.
For example, consider the 2 × 2 matrix
                                         ·      ¸
                                           1 2
                                   A=             .
                                           2 1

Clearly,                                                  ·           ¸
                                            0                 1 2
                                    A =A=                                 .
                                                              2 1

1.1     Basic Matrix Operations
1.1.1      Addition and subtraction
Matrix addition and subtraction are element by element operations and only apply
to matrices of the same dimension. For example, let
                               ·      ¸       ·     ¸
                                 4 9            2 0
                          A=            , B=          .
                                 2 1            0 7

Then
                      ·         ¸       ·             ¸       ·                  ¸           ·         ¸
                          4 9                   2 0               4+2 9+0                        6 9
           A+B =                    +                     =                          =                     ,
                          2 1                   0 7               2+0 1+7                        2 8
                      ·         ¸       ·             ¸       ·                  ¸           ·             ¸
                          4 9                   2 0               4−2 9−0                        2 9
           A−B =                    −                     =                          =                         .
                          2 1                   0 7               2−0 1−7                        2 −6

1.1.2      Scalar Multiplication
Here we refer to the multiplication of a matrix by a scalar number. This is also an
element-by-element operation. For example, let c = 2 and
                                       ·        ¸
                                         3 −1
                                  A=              .
                                         0 5

Then                            ·                                 ¸       ·          ¸
                                     2 · 3 2 · (−1)                           6 −2
                      c·A=                                            =                  .
                                    2 · (0)  2·5                              0 10




                                                          2
1.1.3   Matrix Multiplication
Matrix multiplication only applies to conformable matrices. A and B are conformable
matrices of the number of columns in A is equal to the number of rows in B. For
example, if A is m× n and B is m × p then A and B are conformable. The mechanics
of matrix multiplication is best explained by example. Let
                             ·       ¸            ·         ¸
                                1 2                 1 2 1
                        A =             and B =               .
                      (2×2)     3 4         (2×3)   3 4 2

Then
                                     ·           ¸ ·       ¸
                                         1 2         1 2 1
              A · B          =                    ·
             (2×2)   (2×3)               3 4         3 4 2
                                     ·                              ¸
                                 1·1+2·3 1·2+2·4 1·1+2·2
                             =
                                 3·1+4·3 3·2+4·4 3·1+4·2
                               ·          ¸
                                 7 10 5
                             =              = C
                                 15 22 11                 (2×3)

The resulting matrix C has 2 rows and 3 columns. In general, if A is n × m and B
is m × p then C = A · B is n × p.
    As another example, let
                              ·      ¸           · ¸
                                1 2                 2
                          A = 3 4 and B = 6 .
                             (2×2)                       (2×1)

Then
                                                    ·      ¸ · ¸
                                                        1 2   5
                               A · B             =          ·
                             (2×2)       (2×1)          3 4   6
                                                   ·            ¸
                                                     1·5+2·6
                                                 =
                                                     3·5+4·6
                                                   ·    ¸
                                                     17
                                                 =        .
                                                     39

   As a &nal example, let
                                               
                                          1       4
                                              
                                     x = 2 , y = 5 .
                                          3       6

Then                                        
                      £     ¤    4
                x0 y = 1 2 3 ·  5  = 1 · 4 + 2 · 5 + 3 · 6 = 32
                                 6

                                                    3
1.2    The Identity Matrix
The identity matrix plays a similar role as the number 1. Multiplying any number by
1 gives back that number. In matrix algebra, pre or post multiplying a matrix A by
a conformable identity matrix gives back the matrix A. To illustrate, let
                                         ·       ¸
                                           1 0
                                    I=
                                           0 1

denote the 2 dimensional identity matrix and let
                                     ·           ¸
                                        a11 a12
                                 A=
                                        a21 a22

denote an arbitrary 2 × 2 matrix. Then
                                   ·     ¸ ·           ¸
                                     1 0       a11 a12
                         I·A =             ·
                                     0 1       a21 a22
                                   ·         ¸
                                     a11 a12
                               =               =A
                                     a21 a22

and
                                        ·                 ¸ ·     ¸
                                            a11 a12           1 0
                           A·I =                            ·
                                            a21 a22           0 1
                                        ·                 ¸
                                            a11       a12
                                   =                        = A.
                                            a21       a22

1.3    Inverse Matrix
To be completed.

1.4    Representing Summation Using Vector Notation
Consider the sum
                                 n
                                 X
                                       xk = x1 + · · · + xk.
                                 k=1

Let x = (x1 , . . . , xn )0 be an n × 1 vector and 1 = (1, . . . , 1)0 be an n × 1 vector of
ones. Then
                                            
                                             1                          Xn
                    0
                           £            ¤   . 
                                             .
                 x 1 = x1 . . . xn ·  .  = x1 + · · · + xk =              xk
                                             1                          k=1


                                                  4
and                                        
                                     x1                       Xn
                  0
                      £         ¤  . 
                 1 x = 1 . . . 1 ·  ..  = x1 + · · · + xn =     xk .
                                     xn                       k=1

    Next, consider the sum of squared x values
                                    n
                                    X
                                          x2k = x21 + · · · + x2n .
                                    k=1

This sum can be conveniently represented as
                                        
                                      x1                    Xn
              0
                   £             ¤  .     2           2
             x x = x1 . . . xn ·  ..  = x1 + · · · + xn =     x2k .
                                      xn                    k=1


    Last, consider the sum of cross products
                                  n
                                  X
                                        xk yk = x1 y1 + · · · xn yn .
                                  k=1

This sum can be compactly represented by
                                     
                                   y1                        Xn
            0
                 £            ¤  . 
                                    .
           x y = x1 . . . xn ·  .  = x1 y1 + · · · xn yn =     xk yk .
                                   yn                        k=1


Note that x0 y = y0 x.

1.5     Representing Systems of Linear Equations Using Matrix
        Algebra
Consider the system of two linear equations

                                            x+y = 1                                             (1)
                                           2x − y = 1                                           (2)

which is illustrated in Figure xxx. Equations (1) and (2) represent two straight lines
which intersect at the point x = 23 and y = 13 . This point of intersection is determined
by solving for the values of x and y such that x + y = 2x − y 1 .
   1
     Soving for x gives x = 2y. Substituting this value into the equation x + y = 1 gives 2y + y = 1
and solving for y gives y = 1/3. Solving for x then gives x = 2/3.


                                                   5
     The two linear equations can be written in matrix form as
                               ·       ¸· ¸ · ¸
                                 1 1       x       1
                                                =
                                 2 −1      y       1
or
                                                 A·z=b
where                          ·           ¸          ·       ¸                ·       ¸
                                   1 1                    x                        1
                       A=                      , z=               and b =                  .
                                   2 −1                   y                        1
    If there was a (2 × 2) matrix B, with elements bij , such that B · A = I, where I
is the (2 × 2) identity matrix, then we could solve for the elements in z as follows. In
the equation A · z = b, pre-multiply both sides by B to give

                                   B·A·z           = B·b
                                                  =⇒ I · z = B · b
                                                  =⇒ z = B · b

or                 ·       ¸       ·             ¸·       ¸       ·                            ¸
                       x               b11 b12        1               b11 · 1 + b12 · 1
                               =                              =
                       y               b21 b22        1               b21 · 1 + b22 · 1
    If such a matrix B exists it is called the inverse of A and is denoted A−1 . In-
tuitively, the inverse matrix A−1 plays a similar role as the inverse of a number.
Suppose a is a number; e.g., a = 2. Then we know that a1 · a = a−1 a = 1. Similarly,
in matrix algebra A−1 A = I where I is the identity matrix. Next, consider solving
the equation ax = 1. By simple division we have that x = a1 x = a−1 x. Similarly, in
matrix algebra if we want to solve the system of equation Ax = b we multiply by
A−1 and get x = A−1 b.
    Using B = A−1 , we may express the solution for z as

                                                 z = A−1 b.

As long as we can determine the elements in A−1 then we can solve for the values of
x and y in the vector z. Since the system of linear equations has a solution as long as
the two lines intersect, we can determine the elements in A−1 provided the two lines
are not parallel.
    There are general numerical algorithms for &nding the elements of A−1 and typical
spreadsheet programs like Excel have these algorithms available. However, if A is a
(2 × 2) matrix then there is a simple formula for A−1 . Let A be a (2 × 2) matrix such
that                                    ·          ¸
                                          a11 a12
                                  A=                 .
                                          a21 a22


                                                      6
Then                                                    ·                  ¸
                             −1             1                a22 −a12
                         A        =                                            .
                                    a11 a22 − a21 a12       −a21 a11
By brute force matrix multiplication we can verify this formula
                                       ·                  ¸·           ¸
          −1                 1             a22 −a12          a11 a12
        A A =
                    a11 a22 − a21 a12 −a21 a11               a21 a22
                                       ·                                            ¸
                             1             a22 a11 − a12 a21    a22 a12 − a12 a22
                =
                    a11 a22 − a21 a12 −a21 a11 + a11 a21 −a21 a12 + a11 a22
                                       ·                                          ¸
                             1            a22 a11 − a12 a21           0
                =
                    a11 a22 − a21 a12               0        −a21 a12 + a11 a22
                    · a22 a11 −a12 a21                   ¸
                      a11 a22 −a21 a12
                                                0
                =                      −a21 a12 +a11 a22
                              0         a11 a22 −a21 a12
                    ·         ¸
                      1 0
                =               .
                      0 1

   Let s apply the above rule to &nd the inverse of A in our example:
                                    ·          ¸ · 1 1 ¸
                      −1       1      −1 −1
                     A =                         = 32 −1  3   .
                            −1 − 2 −2 1              3    3

Notice that                          · 1        ¸·           ¸       ·         ¸
                                           1
                         −1            3   3
                                                     1 1                 1 0
                       A A=            2   −1                    =                 .
                                       3   3
                                                     2 −1                0 1
Our solution for z is then

                                         A−1 b ¸ · ¸
                                     z = ·
                                            1   1
                                            3   3
                                                     1
                                       =    2  −1
                                                     1
                                         · 32 ¸ 3 · ¸
                                            3
                                                   x
                                       =    1   =
                                            3
                                                   y

so that x = 23 and y = 13 .
    In general, if we have n linear equations in n unknown variables we may write the
system of equations as

                             a11 x1 + a12 x2 + · · · + a1n xn = b1
                             a21 x1 + a22 x2 + · · · + a2n xn = b2
                                                            ..    .
                                                             . = ..
                             an1 x1 + an2 x2 + · · · + ann xn = bn



                                                 7
which we may then express in matrix form as
                                                    
                      a11 a12 · · · a1n      x1       b1
                    a21 a22 · · · a2n   x2   b2 
                                                    
                    ..               ..   ..  =  .. 
                    .                 .    .      . 
                      an1 an2 · · · ann      xn       bn
or
                                  A · x = b.
                                 (n×n)   (n×1)   (n×1)

The solution to the system of equations is given by

                                    x = A−1 b

where A−1 A = I and I is the (n × n) identity matrix. If the number of equations is
greater than two, then we generally use numerical algorithms to &nd the elements in
A−1 .


2    Further Reading
Excellent treatments of portfolio theory using matrix algebra are given in Ingersol
(1987), Huang and Litzenberger (1988) and Campbell, Lo and MacKinlay (1996).


3    Problems
To be completed


References
[1] Campbell, J.Y., Lo, A.W., and MacKinlay, A.C. (1997). The Econometrics of
    Financial Markets. Priceton, New Jersey: Princeton University Press.

[2] Huang, C.-F., and Litzenbeger, R.H. (1988). Foundations for Financial Eco-
    nomics. New York: North-Holland.

[3] Ingersoll, J.E. (1987). Theory of Financial Decision Making. Totowa, New Jersey:
    Rowman & Little&eld.




                                          8
8QLYHUVLW\ RI :DVKLQJWRQ                                                                   :LQWHU 
'HSDUWPHQW RI (FRQRPLFV                                                                     (ULF =LYRW


                                              (FRQRPLFV 

                                                 )LQDO ([DP

7KLV LV D FORVHG ERRN DQG FORVHG QRWH H[DP +RZHYHU \RX DUH DOORZHG RQH SDJH RI KDQGZULWWHQ

QRWHV $QVZHU DOO TXHVWLRQV DQG ZULWH DOO DQVZHUV LQ D EOXH ERRN    7RWDO SRLQWV   



, 3RUWIROLR 7KHRU\  SRLQWV


 &RQVLGHU WKH SUREOHP RI DOORFDWLQJ ZHDOWK EHWZHHQ D FROOHFWLRQ RI     1 ULVN\ DVVHWV DQG D ULVNIUHH
DVVHW 7ELOO XQGHU WKH DVVXPSWLRQ WKDW LQYHVWRUV RQO\ FDUH DERXW PD[LPL]LQJ SRUWIROLR H[SHFWHG
UHWXUQ DQG PLQLPL]LQJ SRUWIROLR YDULDQFH 8VH WKH JUDSK EHORZ WR DQVZHU WKH IROORZLQJ TXHVWLRQV




D 0DUN RQ WKH JUDSK WKH VHW RI HIILFLHQW SRUWIROLRV IRU WKH ULVN\ DVVHWV RQO\ WUDQVIHU WKH JUDSK WR
\RXU EOXH ERRN  %ULHIO\ GHVFULEH KRZ \RX ZRXOG FRPSXWH WKLV VHW XVLQJ ([FHO  SWV


E 0DUN RQ WKH JUDSK WKH VHW RI HIILFLHQW SRUWIROLRV WKDW LQFOXGH ULVN\ DVVHWV DQG D VLQJOH ULVNIUHH
DVVHW WUDQVIHU WKH JUDSK WR \RXU EOXH ERRN  %ULHIO\ GHVFULEH KRZ \RX ZRXOG FRPSXWH WKLV VHW
XVLQJ ([FHO  SWV


,, &$30  SRLQWV


 &RQVLGHU WKH &$30 UHJUHVVLRQ


                5W  UI .   50W  UI  0  W 7
                                             W


                0 a LLG 1  1 0 DQG 50W LV LQGHSHQGHQW RI 0 IRU DOO W
                              
                 W                                            W




ZKHUH 5 GHQRWHV WKH UHWXUQ RQ DQ DVVHW RU SRUWIROLR 50W GHQRWHV WKH UHWXUQ RQ WKH PDUNHW
        W


SRUWIROLR SUR[\ DQG UI GHQRWHV WKH ULVNIUHH 7ELOO UDWH /HW  DQG 0 GHQRWH WKH H[SHFWHG UHWXUQV
                                                           
RQ WKH DVVHW DQG WKH PDUNHW UHVSHFWLYHO\ DQG OHW 1 DQG 10 GHQRWH WKH YDULDQFHV RI WKH DVVHW DQG

WKH PDUNHW UHVSHFWLYHO\ )LQDOO\ OHW   150 GHQRWH WKH FRYDULDQFH EHWZHHQ WKH DVVHW DQG WKH PDUNHW
D :KDW LV WKH LQWHUSUHWDWLRQ RI               . DQG  LQ WKH &$30 UHJUHVVLRQ" :KDW UHVWULFWLRQ GRHV WKH &$30
SODFH RQ WKH YDOXH RI ."                SWV


E :KDW LV WKH LQWHUSUHWDWLRQ RI 0W LQ WKH &$30 UHJUHVVLRQ"                           SWV


F 8VLQJ WKH &$30 UHJUHVVLRQ FRPSXWH (>                       5 @ DQG YDU 5   SWV
                                                                W              W




G 8VLQJ WKH H[SUHVVLRQ IRU YDU                5  ZKDW LV WKH SURSRUWLRQ RI WKH YDULDQFH RI WKH DVVHW GXH WR WKH
                                                 W


YDULDELOLW\ LQ WKH PDUNHW UHWXUQ DQG ZKDW LV WKH SURSRUWLRQ XQH[SODLQHG E\ YDULDELOLW\ LQ WKH
PDUNHW"  SWV


 7KH IROORZLQJ RXWSXW LV EDVHG RQ HVWLPDWLQJ WKH &$30 UHJUHVVLRQ IRU ,%0 DQG DQ HTXDOO\

ZHLJKWHG SRUWIROLR RI  VWRFNV XVLQJ PRQWKO\ UHWXUQ GDWD RYHU WKH SHULRG -DQXDU\  WR
'HFHPEHU 


                 5,%0  UI                        50  UI  5         YDU 0,%0       
                                                                                                                     

                                                


                 5  SRUW
                              U   I
                                                  50  UI  5         YDU 0SRUW    
                                                                                                                 

                                               


D )RU ,%0 DQG WKH SRUWIROLR RI  VWRFNV ZKDW DUH WKH HVWLPDWHG YDOXHV RI                            . DQG  DQG ZKDW DUH
WKH HVWLPDWHG VWDQGDUG HUURUV IRU WKHVH HVWLPDWHV"  SWV


E ,V WKH EHWD IRU WKH SRUWIROLR HVWLPDWHG PRUH SUHFLVHO\ WKDQ WKH EHWD IRU ,%0" :K\ RU ZK\ QRW"

 SWV


F   )RU HDFK UHJUHVVLRQ ZKDW LV WKH SURSRUWLRQ RI PDUNHW RU V\VWHPDWLF ULVN DQG ZKDW LV WKH

SURSRUWLRQ RI ILUP VSHFLILF RU XQV\VWHPDWLF ULVN" :K\ VKRXOG WKH SRUWIROLR KDYH D JUHDWHU
SURSRUWLRQ RI V\VWHPDWLF ULVN DQG VPDOOHU YDOXH RI 6' 0 WKDQ ,%0"  SWV


G %DVHG RQ WKH UHJUHVVLRQ HVWLPDWHV GRHV WKH &$30 DSSHDU WR KROG IRU ,%0 DQG WKH SRUWIROLR"

-XVWLI\ \RXU DQVZHU  SWV


,,, 5HWXUQ &DOFXODWLRQV  SRLQWV


 &RQVLGHU D SRUWIROLR RI  ULVN\ VWRFNV GHQRWHG E\ $ % DQG & VD\ $SSOH %RHLQJ DQG &RFD
&ROD  /HW   5$ 5% DQG 5& GHQRWH WKH PRQWKO\ UHWXUQV RQ WKHVH VWRFN DQG LW LV DVVXPHG WKDW WKHVH
UHWXUQV DUH MRLQWO\ QRUPDOO\ GLVWULEXWHG ZLWK PHDQV                   L
                                                                           L
                                                                                                       
                                                                                   $%&  YDULDQFHV 1 L L   $%& DQG
FRYDULDQFHV 1LM L          $%& DQG L         g M  &RQVLGHU IRUPLQJ D SRUWIROLR RI WKHVH VWRFNV ZKHUH [                L
                                                                                                                             VKDUH
RI ZHDOWK LQYHVWHG LQ DVVHW L VXFK WKDW [$  [%  [&                   

D :KDW LV WKH H[SHFWHG UHWXUQ RQ WKH SRUWIROLR"                     SWV
E :KDW LV WKH YDULDQFH RI WKH SRUWIROLR UHWXUQ"  SWV
F :KDW LV WKH SUREDELOLW\ GLVWULEXWLRQ IRU WKH SRUWIROLR UHWXUQ"  SWV
   7KURXJKRXW WKH FRXUVH ZH KDYH PDGH WKH DVVXPSWLRQ WKDW WKH FRQWLQXRXVO\ FRPSRXQGHG

UHWXUQV RQ ULVN\ DVVHWV HJ VWRFNV DUH QRUPDOO\ GLVWULEXWHG %DVHG RQ WKH GDWD DQDO\VLV ZH KDYH
GRQH LQ WKH ODEV DQG LQ FODVV LV WKLV D EHOLHYDEOH DVVXPSWLRQ" %ULHIO\ MXVWLI\ \RXU DQVZHU  SWV


   &RQVLGHU WKH IROORZLQJ PRQWKO\ GDWD IRU 0LFURVRIW VWRFN RYHU WKH SHULRG 'HFHPEHU 

WKURXJK 'HFHPEHU 




                           (QG RI 0RQWK 3ULFH 'DWD IRU 0LFURVRIW 6WRFN


 'HFHPEHU                                                           


 -DQXDU\                                                            


 )HEUXDU\                                                           


 0DUFK                                                              


 $SULO                                                              


 0D\                                                                


 -XQH                                                               


 -XO\                                                               


 $XJXVW                                                             


 6HSWHPEHU                                                          


 2FWREHU                                                            


 1RYHPEHU                                                           


 'HFHPEHU                                                           



D   8VLQJ WKH GDWD LQ WKH WDEOH ZKDW LV WKH FRQWLQXRXVO\ FRPSRXQGHG PRQWKO\ UHWXUQ EHWZHHQ

'HFHPEHU  DQG -DQXDU\ "  SWV


E $VVXPLQJ WKDW WKH FRQWLQXRXVO\ FRPSRXQGHG PRQWKO\ UHWXUQ \RX FRPSXWHG LQ SDUW D LV WKH
VDPH IRU  PRQWKV ZKDW LV WKH FRQWLQXRXVO\ FRPSRXQGHG DQQXDO UHWXUQ"  SWV


F 8VLQJ WKH GDWD LQ WKH WDEOH FRPSXWH WKH DFWXDO DQQXDO FRQWLQXRXVO\ FRPSRXQGHG UHWXUQ
EHWZHHQ 'HFHPEHU  DQG 'HFHPEHU  &RPSDUH ZLWK \RXU UHVXOW LQ SDUW E              SWV


,9 $UELWUDJH  SRLQWV


D :KDW LV DQ DUELWUDJH RSSRUWXQLW\"     SWV


E *LYH D VLPSOH H[DPSOH RI DQ DUELWUDJH RSSRUWXQLW\  SWV



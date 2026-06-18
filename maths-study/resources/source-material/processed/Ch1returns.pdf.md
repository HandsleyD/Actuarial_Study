---
normalized_id: shared-pdf-reference-ch1returns
exam_code: SHARED
material_scope: ch1returns.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Ch1returns.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-ch1returns

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



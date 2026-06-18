---
normalized_id: shared-pdf-reference-macroeconomics
exam_code: SHARED
material_scope: macroeconomics.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Macroeconomics.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-macroeconomics

       MACROECONOMICS




1880    1900   1920   1940    1960         1980          2000




                                 Matthias Doepke
                                 University of Chicago

                                     Andreas Lehnert
                             Board of Governors of the
                               Federal Reserve System

                             Andrew W. Sellgren
                             George Mason University
This book was typeset in Palatino and Computer Modern using LATEX.

Draft of 1 September 1999.

Chapters 5, 8, 9, and 11 Copyright c 1999, by Matthias Doepke.
Chapters 10, 12, 13, 14, 17, 18, and 19 Copyright c 1999, by Andreas Lehnert.
Chapters 1, 2, 3, 4, 6, and 15 Copyright c 1999, by Andrew W. Sellgren.

All rights reserved. No part of this work may be reproduced in any form by any electronic
or mechanical means (including, but not limited to, photocopying, recording, or informa-
tion storage and retrieval) without permission in writing from the copyright owner.

The authors permit faculty, students, and staff of the University of Chicago to copy and
distribute any part of this work for use in classes taught at the University of Chicago.
Preface

We have designed this book to be a supplement to Robert J. Barro’s Macroeconomics, which
is the textbook that is used in introductory macroeconomics courses at the University of
Chicago. In teaching these courses, we have found that Barro’s treatment of the subject
does not make use of the mathematical skills of our students. In particular, Barro relies
almost exclusively on economic intuition and graphs to elucidate his subject. Since our
students are familiar with calculus, we are able to work out formal models. This almost
always allows greater concreteness and concision.

We have attempted to align our chapters with those in Barro’s textbook. Sometimes our
chapters present mathematical versions of the models that Barro introduces in his corre-
sponding chapters (as in Chapters 2 and 19). Other times, our chapters contain material
that extends his work (as in Chapters 5 and 17). Throughout, we have tried to add value to
the treatment in Barro’s book and to minimize redundancy. For example, we have nothing
to add to Barro’s Chapters 7, 16, and 20, so we have not covered those chapters. Three
chapters deviate from this plan. Chapter 1 develops the mathematics of interest rates and
growth rates; Barro does not cover these topics, but they are behind the scenes in his Chap-
ter 1 and throughout his book. Chapter 10, which covers unemployment, is completely
unrelated to Barro’s Chapter 10. It is intended as a companion to the book Job Creation and
Destruction by Davis, Haltiwanger, and Schuh. Chapter 18 covers the relationship between
the government budget constraint and inﬂation along the lines of the “Unpleasant Mon-
etarist Arithmetic” of Sargent and Wallace. Although Barro has a sidebar on this topic in
his Chapter 14, we feel that it is important enough to merit a chapter of its own. We chose
Chapter 18 since it is a natural point between ﬁscal policy (Chapters 12, 13, and 14) and
monetary policy (Chapter 19). Barro’s Chapter 18 is a review of the empirical evidence on
the effect of monetary shocks on the real economy, and is well worth covering.

There are exercises after each chapter, and we have provided complete solutions at the
end of this book. We believe that exercises are essential for students to learn this material.
They give students a sense of what they ought to know, since these exercises have been
drawn from several years of exams. Also, we often use exercises to introduce extensions
to the material in the text. We have attempted to estimate the difﬁculty of these exercises,
labeling them as “Easy,” “Moderate”, or “Hard”. An exercise with a “Hard” rating may
require a lot of algebra, or it may use unfamiliar concepts. Most other questions are rated
iv                                                                                     Preface


as “Moderate”, unless they have one-line solutions, in which case we usually rated them
as “Easy”.

We teach this material in two ten-week courses. In the ﬁrst course we cover Chapters 1, 2,
3, 6, 4, 5, 7, 8, 9, and 11, in that order. This allows us to keep together all the material on
monetary economics (Chapters 4, 5, 7, and 8). In the second course, we cover Chapter 10
(unemployment); Chapters 12, 13, and 14 (ﬁscal policy); Chapters 15 and 16 (international
macro); and Chapters 17, 18 and 19 (money and banking). Since this is quite a lot to cover
in ten weeks, instructors of the second course have traditionally touched only brieﬂy on
unemployment and international macro and concentrated instead on monetary and ﬁscal
policy. The second course can beneﬁt substantially from outside readings, such as: Rational
Expectations and Inﬂation by Thomas Sargent; A Monetary History of the United States by Mil-
ton Friedman and Anna Schwartz; and Job Creation and Destruction by Davis, Haltiwanger,
and Schuh.

This book would not have been possible without the support of the Department of Eco-
nomics at the University of Chicago and the encouragement of Grace Tsiang. We would
also like to thank the many students and faculty who have helped us to develop this ma-
terial. A number of exercises in the ﬁrst half of the book were based on questions written
by Robert E. Lucas, Jr. The material in the second half of this book has beneﬁted from sev-
eral generations of instructors of Economics 203. In particular, Alexander Reyfman wrote
a series of lectures which were the genesis of Chapters 12 through 19. Reyfman’s teach-
ing assistant Bill Dupor, and Lehnert’s teaching assistants Jerry Cubbin and Tom Miles,
all contributed valuable suggestions. During Cubbin’s tenure as TA, he wrote most of the
solutions to the problem sets, and several of these have found their way into this book. All
students subjected to early drafts of this material contributed to the book’s current form;
Shannon Thaden, Ben Ruff, and Calvin Chan deserve special mention.

In spite of all the comments and suggestions we have received, this book inevitably con-
tains errors and omissions. We would be grateful if you would bring these to our attention.
The authors can be reached by e-mail at:

                                m-doepke@uchicago.edu

There is also a tear-out feedback form at the end of the book, along with a tear-out midterm-
evaluation form for Economics 202 and 203.

Finally, some of the material in this book involves policy prescriptions. At some level,
policy is a matter of opinion. The opinions expressed herein are not necessarily those of
the Board of Governors of the Federal Reserve System.

Chicago, Illinois
September 1999
Contents

Preface                                                                                             iii


1   Preliminaries                                                                                    1

    1.1   Compound Interest . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        1

    1.2   Growth Rates . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       3

          Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    5


2   Work Effort, Production, and Consumption                                                         9

    2.1   Crusoe’s Production Possibilities . . . . . . . . . . . . . . . . . . . . . . . . .        9

    2.2   Crusoe’s Preferences . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      11

    2.3   Crusoe’s Choices . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      12

    2.4   Income and Substitution Effects . . . . . . . . . . . . . . . . . . . . . . . . . .       17

          Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   18

          Appendix . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      19


3   The Behavior of Households with Markets for Commodities and Credit                              21

    3.1   The General Setup . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     21

    3.2   A Two-Period Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        23

    3.3   An Inﬁnite-Period Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       28
vi                                                                                            Contents


           Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   30


4    The Demand for Money                                                                            33

           Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   36


5    The Market-Clearing Model                                                                       39

     5.1   A General Pure-Exchange Economy . . . . . . . . . . . . . . . . . . . . . . .             39

     5.2   Normalization of Prices . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       41

     5.3   Walras’ Law . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     42

     5.4   The First Welfare Theorem . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       44

           Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   46


6    The Labor Market                                                                                47

     6.1   Equilibrium in the Labor Market . . . . . . . . . . . . . . . . . . . . . . . . .         47

     6.2   Intertemporal Labor Choice . . . . . . . . . . . . . . . . . . . . . . . . . . . .        50

           Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   52


8    Inﬂation                                                                                        57

     8.1   Money Supply and Demand . . . . . . . . . . . . . . . . . . . . . . . . . . . .           57

     8.2   The Quantity Theory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       59

     8.3   A Cash-in-Advance Economy . . . . . . . . . . . . . . . . . . . . . . . . . . .           61

           Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   68


9    Business Cycles                                                                                 69

     9.1   Shocks and Propagation Mechanisms . . . . . . . . . . . . . . . . . . . . . .             69

     9.2   A Real Business Cycle Model . . . . . . . . . . . . . . . . . . . . . . . . . . .         72

     9.3   Simulations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     77
Contents                                                                                          vii


        Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    81


10 Unemployment                                                                                    85

   10.1 Job Creation and Destruction: Notation . . . . . . . . . . . . . . . . . . . . .           86

   10.2 Job Creation and Destruction: Facts . . . . . . . . . . . . . . . . . . . . . . . .        91

        Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    92


11 Economic Growth                                                                                 95

   11.1 Growth Facts . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     96

   11.2 The Solow Growth Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . .           97

   11.3 Growth Accounting . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 102

   11.4 Fertility and Human Capital . . . . . . . . . . . . . . . . . . . . . . . . . . . . 103

        Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 108


12 The Effect of Government Purchases                                                             111

   12.1 Permanent Changes in Government Spending . . . . . . . . . . . . . . . . .                112

   12.2 Temporary Changes in Government Spending . . . . . . . . . . . . . . . . . 122

   12.3 Social Security . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 125

        Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 128


13 The Effect of Taxation                                                                         131

   13.1 General Analysis of Taxation . . . . . . . . . . . . . . . . . . . . . . . . . . . 132

   13.2 Taxation of Labor . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 137

   13.3 Taxation of Capital . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 142

   13.4 Redistribution and Taxation . . . . . . . . . . . . . . . . . . . . . . . . . . . . 146

        Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 148
viii                                                                                        Contents


14 The Optimal Path of Government Debt                                                             153

       14.1 The Government Budget Constraint . . . . . . . . . . . . . . . . . . . . . . . 154

       14.2 Barro-Ricardo Equivalence . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 157

       14.3 Preliminaries for the Ramsey Problem . . . . . . . . . . . . . . . . . . . . . . 161

       14.4 The Ramsey Optimal Tax Problem . . . . . . . . . . . . . . . . . . . . . . . . 165

            Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 170


15 Comparative Advantage and Trade                                                                 173

       15.1 Two Workers under Autarky . . . . . . . . . . . . . . . . . . . . . . . . . . . 174

       15.2 Two Workers Who Can Trade . . . . . . . . . . . . . . . . . . . . . . . . . . . 176

            Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 181


17 Financial Intermediation                                                                        183

       17.1 Banking Basics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 185

       17.2 A Model with Costly Audits . . . . . . . . . . . . . . . . . . . . . . . . . . . . 190

       17.3 A Model with Private Labor Effort . . . . . . . . . . . . . . . . . . . . . . . . 195

       17.4 A Model of Bank Runs . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 199

            Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 206


18 Fiscal and Monetary Policy                                                                      211

       18.1 Are Government Budget Deﬁcits Inﬂationary? . . . . . . . . . . . . . . . . . 212

       18.2 The Ends of Four Big Inﬂations . . . . . . . . . . . . . . . . . . . . . . . . . . 221

            Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 223


19 Optimal Monetary Policy                                                                         227

       19.1 The Model of Lucas (1972) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 229

       19.2 Monetary Policy and the Phillips Curve . . . . . . . . . . . . . . . . . . . . . 231
Contents                                                                                        ix


   19.3 Optimal Monetary Policy without Commitment: The Nash Problem . . . . 236

   19.4 Optimal Nominal Interest Rate Targets . . . . . . . . . . . . . . . . . . . . . . 237

        Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 239


   Solutions to Exercises                                                                      243
Chapter 1

Preliminaries

This chapter introduces interest rates and growth rates. The two topics are closely related,
so we treat them together. The concepts discussed here are not in Barro, but they will help
you understand the graphs and statistics that he uses throughout his book.



1.1 Compound Interest

We begin with some common terms and calculations from the realm of ﬁxed-income in-
vestments. The amount of the investment is called the principal. The “ﬁxed-income” from
the investments is called interest. The interest per unit of principal per unit of time is called
the interest rate. Most commonly, interest rates are quoted in dollars per year per dollar of
                                                =y
principal. These units can be written: $ ( $). The dollar units cancel, so this interest rate
has units of one over years. Similarly, if the interest rate is apples per day per apple bor-
rowed, the apple units will cancel, and the units of the interest rate will be one over days.
In general, the units of an interest rate are one over some unit of time.

When the unit of time is a year, we say that an interest rate is an annual interest rate. If the
unit of time is not mentioned, then it will almost always be an annual interest rate. Interest
rates that are quoted in some speciﬁc unit of time can be converted to any other unit of time
via a simple linear transformation. For example, a daily interest rate of x% corresponds to
an annual interest rate of (365)(x)%.1 (See Exercise 1.1 for an example.)

         P                                                                R
We use for the principal of a ﬁxed-income investment and for the annual interest rate.
Under simple interest the interest is earned on the amount of the principal only. In this case,
   1 You may be wondering about leap years. These are handled according to any of a number of conventions.

For example, some interest rates are quoted using 360 days as a year; others use 365; still others use 365.25.
2                                                                                Preliminaries


after n years the value of the investment will be:
(1.1)                                 Vs (n) = RPn + P:
For example, suppose you invest $5,000 at a 4.5% simple annual interest rate. After two
years the value of your investment will be:
                        Vs (2) = (0:045)($5; 000)(2) + $5; 000 = $5; 450:
It is much more common for interest to be compounded annually. In this case, at the end
of each year, that year’s interest will be added to the principal, so the investment will earn
interest on the interest. The ﬁrst year will be just like simple interest, since none of the
interest will yet be compounded. Accordingly, the the value after the ﬁrst year will be:
                                 Va (1) = RP + P = (1 + R)P:
After the second year, the value will be:
                  Va (2) = RVa(1) + Va (1) = R(1 + R)P + (1 + R)P = (1 + R)2P:
Similarly, after n years, the value will be:
(1.2)                                   Va (n) = (1 + R)nP:
Of course, this formula works only an integral numbers of years. For non-integral num-
                                                        n            V n
bers, you round down to the nearest integral year , compute a ( ), and use that in the
simple-interest formula (1.1) for the fraction of the last year. (See Exercise 1.6 for an exam-
ple.)

Let’s revisit our previous example. Once again, you invest $5,000 at a 4.5% annual interest
rate, but this time interest compounds annually. After two years the value of your invest-
ment will be:
                          Va (2) = (1 + 0:045)2($5; 000) = $5; 460:13:
(Here and throughout, dollar amounts are rounded to the nearest cent.) Notice that the
investment is worth less under simple interest than under compound interest, since under
compounding you earn about $10 of interest on the ﬁrst year’s interest.

The above reasoning for compounding annually applies to compounding more frequently.
The only catch is that the interest rate needs to be quoted in terms of the same time interval
                          R
as the compounding. If is an annual interest rate, and interest is to compound times   t
                                                  n
per year, then the value of an investment after years will be:
                                                    tn
                                    V n            R        P:
                                       t ( ) =   1 +
                                                    t
We return to our example again, this time supposing that interest compounds daily. After
two years, the value will be:
                               
                                     :045 (365)(2) ($5; 000) = $5; 470:84:
                     V365 (2) = 1 + 0365
1.2 Growth Rates                                                                         3


As we compound more and more frequently, we arrive at the expression for continuous
compounding:
                                            tn
                                 V n               R       P:
                           c ( ) =  lim
                                   t!1
                                         1 +
                                                   t
We can make this much more tractable by using the fact that:
                                                x
                                    e
                                  = lim 1 +
                                    x!1
                                               1
                                                  x ;
where   e is Euler’s constant. This gives us the following formula for continuous discount-
ing:
                             tn       "                 (t=R) Rn  #
           Vc (n) = tlim    R     P = (t=Rlim          1
                                                                     P = eRnP:
(1.3)
                     !1 1 + t               )!1
                                                  1+
                                                     (t=R)
We return to our example one last time, this time assuming continuous compounding.
After two years, the value of the investment will be:
                            V      e
                             c (2) =          ;
                                     (0:045)(2)
                                                           ;    : :
                                                ($5 000) = $5 470 87
Again, notice how throughout these examples the value of the investment is greater the
more often the interest compounds. Continuous compounding results in the highest value,
but the returns to more-frequent compounding fall off fairly quickly. For example, the
value is almost the same under daily versus continuous discounting.



1.2 Growth Rates

Economists are often interested in the growth rates of economic variables. You might read,
“Real Gross Domestic Product grew at a 2.3% annual rate this quarter” or “Inﬂation is 4%”
or “The world’s population is growing 20% every decade.” Each of these statements deals
with a growth rate.

An interest rate is just the growth rate of the value of an asset, and all the terminology
and formulae from the previous section apply to growth rates generally. For example, we
can calculate simple annual growth rates and annual growth rates that are compounded
annually or continuously.

Consider the following values for the Gross Domestic Product (GDP) of a hypothetical
country:

                                    Year       GDP
                                    1991    $100,000,000
                                    1992    $130,000,000
                                    1993    $135,000,000
4                                                                                        Preliminaries


The growth rate of GDP is just the interest rate that GDP would have had to earn if it were
a ﬁxed-income investment.

For example, the simple rate of growth of GDP between 1992 and 1993 is given by in                 R
                                   P                  V n       n
equation (1.1). Starting GDP is , ending GDP is s ( ), and is one year. Plugging all the
numbers in, we get:

                           $135K = (R)($130K )(1) + $130K; so:
                   R = $135K=$130K 1  1:03846154 1 = 3:846154%:
As another example, to calculate the annual rate of growth of GDP, compounded annually,
                                                                    P
between 1991 and 1993, we use equation (1.2). Starting GDP is , ending GDP is a ( ), and     V n
n is two years. This gives us:

                                K = (1 + R)2($100K ); so:
                                   $135
               R = ($135K=$100K )(0:5) 1  1:16189500 1 = 16:189500%:
As a ﬁnal example, we do the same calculation, but using continuous compounding. We
                              R                   P                     V n          n
just solve equation (1.3) for . Starting GDP is , ending GDP is c ( ), and is two years.

                                           K e        K;
                                     $135 = 2R ($100 ) so:
             R = [ln($135K )                K :       :                 :
                                   ln($100 )](0 5)  0 15005230 = 15 15005230%           :
Economists generally prefer to use continuous compounding, for two reasons. First, un-
der continuous compounding, computing the growth rate between two values of a series
requires nothing more than taking the difference of their natural logarithms, as above.

This property is useful when graphing series. For example, consider some series that is
         V n Ve
given by ( ) = 0 0:08n , which is depicted in Figure 1.1. By the equations above, we know
that this series grows at an 8% continuous rate. Figure 1.2 depicts the natural logarithm of
                         Vn            V    : n
the same series, i.e., ln[ ( )] = ln( 0 ) + 0 08 . From the equation, you can see that this new
                  n
series is linear in , and the slope (0.08) gives the growth rate. Whenever Barro labels the
vertical axis of a graph with “Proportionate scale”, he has graphed the natural logarithm
of the underlying series. For an example, see Barro’s Figure 1.1.

The second reason economists prefer continuous growth rates is that they have the follow-
ing desirable property: if you compute the year-by-year continuous growth rates of a series
and then take the average of those rates, the result is equal to the continuous growth rate
over the entire interval.

For example, consider the hypothetical GDP numbers from above: $100 , $130 , and     K        K
    K                                                                        K
$135 . The continuous growth rate between the ﬁrst two is: ln($130 ) ln($100 ). The           K
                                                                K                K
continuous growth rate between the second two is: ln($135 ) ln($130 ). The average of
these two is:
                   
                              K
                       ln($135 )            K 
                                    ln($130 ) + ln($130 )   K   ln($100 )   K :
                                              2
Exercises                                                                                        5


           8                                                2

           6




                                                 ln[V(n)]
    V(n)




           4                                                1

           2

           0                                                0
               0

                   5

                         10

                               15

                                     20

                                            25



                                                                0

                                                                    5

                                                                         10

                                                                               15

                                                                                     20

                                                                                            25
                         Year (n)                                        Year (n)


           Figure 1.1: Exponential Growth                   Figure 1.2: Log of Exp Growth



                   K
The two ln($130 ) terms cancel, leaving exactly the formula for the continuous growth
rate between the ﬁrst and third values, as we derived above.

If we carry out the same exercise under simple growth or annually compounded growth,
we will ﬁnd that the average of the individual growth rates will not equal the overall
growth rate. For example, if GDP grows by 8% this year and 4% next year, both calcu-
lated using annual compounding, then the two-year growth rate will not be 6%. (You
should verify that it will actually be 5.98%.) On the other hand, if the 8% and 4% numbers
were calculated using continuous compounding, then the continuous growth rate over the
two-year period would be 6%.



Exercises

Exercise 1.1 (Easy)
My credit card has an APR (annualized percentage rate) of 16.8%. What is the daily interest
rate?

Exercise 1.2 (Easy)
My loan shark is asking for $25 in interest for a one-week loan of $1,000. What is that, as
an annual interest rate? (Use 52 weeks per year.)

Exercise 1.3 (Moderate)
The Consumer Price Index (CPI) is a measure of the prices of goods that people buy. Bigger
numbers for the index mean that things are more expensive. Here are the CPI numbers for
four months of 1996 and 1997:
6                                                                                                    Preliminaries


                   Variable       Deﬁnition
                      P           Principal (amount invested)
                      R           Nominal interest rate
                       n          Number of years invested
                     Vs (n)                      n
                                  Value after years under simple interest
                     Va (n)                      n
                                  Value after years under annual compounding
                     Vt(n)                       n
                                  Value after years when compounded times per        t
                                  year
                     Vc (n)                      n
                                  Value after years under continuous compound-
                                  ing
                       V0         Initial value of the investment


                                     Table 1.1: Notation for Chapter 1


                                   Year       Mar       Jun        Sep       Dec
                                   1996      155.7     156.7      157.8     158.6
                                   1997      160.0     160.3      161.2     161.3


What is the growth rate of the CPI between June 1996 and September 1996? (Use a contin-
uous growth rate and annualize your answer.)

Exercise 1.4 (Moderate)
Use the CPI data from the previous exercise to compute the growth rates in the CPI in
the four quarters starting in March 1996 (i.e, Mar-Jun 1996, Jun-Sep 1996, etc.). (Use a
continuous growth rate but do not annualize your answer.) Show that the sum of these
four rates equals the (continuous) growth rate from March 1996 to March 1997.

Exercise 1.5 (Easy)
Real output of the United States will likely grow by about 2% over the ﬁrst half of the
next century. At that rate (of continuous growth), how long will it take for real output to
double? Compare your exact answer with the approximation given by the “Rule of 72.”2

Exercise 1.6 (Hard)
This morning you invest $10,000 at 6.5% interest that compounds annually. What is the
ﬁrst date on which you would have at least $15,000? (Quote the answer in terms of years +
days from today. Interest accrues each night, but compounds only annually.)

Exercise 1.7 (Easy)
Suppose that 4.6 percent of the earth’s forests are cleared each year. How long will it take
   2 The “Rule of 72” is as follows. If the interest rate on an investment is x percent, then it takes about 72=x years

for the value of the investment to double.
Exercises                                                                                 7


for half our current forests to be cleared? (Use annual compounding and solve for the
fewest number of whole years.)

Exercise 1.8 (Moderate)
World population was about 679 million in the year 1700 and about 954 million in 1800.

  1. What was the annual growth rate of population between 1700 and 1800? (Use con-
     tinuous compounding.)
  2. Suppose that the human race began with Adam and Eve and that the annual growth
     rate between 1700 and 1800 prevailed in all years prior to 1700. About when must it
     have been that Adam and Eve were evicted from the Garden of Eden? (Hint: What
     was the population in that year?)

Exercise 1.9 (Moderate)
According to ﬁgures compiled by the World Bank, per capita real income in the U.S. was
$15,400 in 1984, while the corresponding ﬁgure for Japan was $10,600. Between 1965 and
1984, per capita real income in the U.S. grew at an annual rate of 1.7 percent (using annual
compounding), while the corresponding ﬁgure for Japan was 4.7 percent.

  1. If these two growth rates remain constant at their 1965-84 levels, in what year will
     per capita real income be the same in these two countries? (Again, use annual com-
     pounding, and use hundredths of a year.)
  2. What will be the common per capita real income of these two countries at that date?
Chapter 2

Work Effort, Production, and
Consumption

Robinson Crusoe is alone on an island, so he is an economy unto himself. He has prefer-
ences over consumption and leisure and can produce consumption goods by using labor
and capital. We examine production ﬁrst. Then we turn to preferences. Putting these two
pieces together yields Crusoe’s optimal choices of labor, leisure, and consumption.



2.1 Crusoe’s Production Possibilities

                                                           y
Crusoe uses factors of production in order to make output . We can think of this output as
being coconuts. Two common factors of production, and those we consider here, are capital
k          l
 and labor . Capital might be coconut trees, and labor is the amount of time Crusoe works,
measured as a fraction of a day. How much Crusoe produces with given resources depends
                             A
on the type of technology that he employs. We formalize this production process via a
production function.

We often simplify our problems by assuming that the production function takes some par-
                                                                              y Af k; l
ticular functional form. As a ﬁrst step, we often assume that it can be written: =   ( ),
                     f                                 A
for some function (). This means that as technology increases, Crusoe can get more
                                                                     f
output for any given inputs. It is reasonable to require the function () to be increasing
                                                               k l
in each argument. This implies that increasing either input or will increase production.
                                                                           f ;l
Another common assumption is that output is zero if either input is zero: (0 ) = 0 and
f k;             k
  ( 0) = 0, for all and .l
One functional form that has these properties is the Cobb–Douglas function, for example:
10                                               Work Effort, Production, and Consumption


y = Ak1 l , for some       between zero and one. This particular Cobb-Douglas function
exhibits constant returns to scale, since (1   ) + ( ) = 1. Figure 2.1 is a three-dimensional
                                                   A
rendering of this function for particular values of and .




                                                                                         1


                                                                                        0.8




                                                                                              product (y)
                                                                                        0.6

                                                                                        0.4
        1




                                                                                        0.2
                0.8

                      0.6




capital (k)
                                                                                     0
                            0.4




                                                                                    1
                                                                          0.8
                                                                   0.6
                                    0.2




                                                           0.4
                                                    0.2
                                            00




                                                                         labor (l)

                            Figure 2.1: Cobb-Douglas Production




                                     k
We will not be dealing with capital until Chapter 9, so for now we assume that capital is
            k
ﬁxed, say, at = 1. This simpliﬁes the production function. With a slight abuse of notation,
            f                             y fl
we redeﬁne () and write production as = ( ). This is like what Barro uses in Chapter 2.

If the original production function was Cobb–Douglas, =   y Ak l  1
                                                                                        k
                                                                       , then under = 1 the
production function becomes: =    y Al   . The graph of this curve is just a slice through the
surface depicted in Figure 2.1. It looks like Barro’s Figure 2.1.

                                                                                l
As you know, the marginal product of some factor of production (e.g., labor ) is the addi-
tional output, or “product”, that results from increasing the input of that factor. Formally,
the marginal product of an input is the derivative of the production function with respect to
2.2 Crusoe’s Preferences                                                                                          11


that input. For example, the marginal product of labor is:               dy=dl f l
                                                                 = 0 ( ).1 Since the marginal
product is the derivative of the the production function, and the derivative gives the slope,
we can read the marginal product as the slope of the production function, as Barro does in
his Figure 2.1.

In the particular case where production is Cobb–Douglas (and capital is ﬁxed), the produc-
tion function is: = y Al , so the marginal product of labor is:    =        dy=dl A l
                                                                              1
                                                                                . This is always
                                                                    l
positive, as we require, and it decreases as we increase . Accordingly, this production func-
tion exhibits diminishing marginal product: the ﬁrst unit of labor is more productive than
the tenth unit of labor. Graphing this marginal product equation gives us something like
Barro’s Figure 2.2.

Barro talks about improvements in technology and argues how both the production func-
tion and the marginal-product schedule shift as a result. The effects of such a change in
technology are clearer when we examine a particular production function. For example,
consider our production function: =          y Al
                                             . The improvement in technology means that                           A
goes up. Accordingly, whatever production was before, it undergoes the same percentage
                                 A                       A
increase as the increase in . For example, if doubles, then output at each will be dou-          l
                                                  l
ble what it used to be. Notably, when is zero, output is zero just as before, since twice
zero is still zero. The result is that the production function undergoes a kind of upward
                                                          l
rotation, pivoting about the anchored origin, = 0. That is precisely what Barro depicts in
his Figure 2.3.

We can examine the marginal-product schedule as well. Under the particular functional
form we are using, the marginal product of labor (MPL) is:        =       1
                                                                            dy=dl A l
                                                                            . Accordingly,
                                     l
the marginal product at each undergoes the same percentage change as does . Since the                A
                                         l
MPL is higher at low levels of , the marginal-product curve shifts up more at those levels
   l
of . Refer to Barro’s Figure 2.4.



2.2 Crusoe’s Preferences

                                              c
Crusoe cares about his consumption and his leisure. Since we are measuring labor as the                   l
fraction of the day that Crusoe works, the remainder is leisure. Speciﬁcally, leisure is 1  .                     l
                                                                 u c; l
We represent his preferences with a utility function ( ). Take note, the second argument
is not a “good” good, since Crusoe does not enjoy working. Accordingly, it might have
been less confusing if Barro had written utility as ( 1         v c; l
                                                            ), for some utility function ().                 v
We assume that Crusoe’s preferences satisfy standard properties: they are increasing in
each “good” good, they are convex, etc.

We will often simplify the analysis by assuming a particular functional form for Crusoe’s
   1 Barro uses primes to denote shifted curves rather than derivatives. For example, when Barro shifts the f (l)

curve, he labels the new curve f (l)0 . This is not a derivative. Barro’s notation is unfortunate, but we are stuck
with it.
12                                                     Work Effort, Production, and Consumption


                                                  u c; l
preferences. For example, we might have: ( ) = ln( ) + ln(1         c            l
                                                                ). With such a function in
                                                                            u c; l
hand, we can trace out indifference curves. To do so, we set ( ) to some ﬁxed number ,       ū
                 c                  l
and solve for as a function of . Under these preferences, we get:

                                                c = 1e l :
                                                       ū


                 ū
As we change , we get different indifference curves, and the set of those looks like Barro’s
Figure 2.6. These should look strange to you because they are increasing as we move to the
                                                                            l
right. This is because we are graphing a “bad” good (labor ) on the horizontal axis. If we
graph leisure (1      l
                    ) instead, then we will get indifference curves that look like what you
saw in your microeconomics courses.



2.3 Crusoe’s Choices

When we put preferences and technology together, we get Crusoe’s optimal choices of
        l
labor , leisure 1     l                       c
                  , and consumption . Formally, Crusoe’s problem is:

(2.1)                                    max u(c; l); such that:
                                          c;l
(2.2)                                          c  y; and:
(2.3)                                            y = f (l ):
There are two elements of equation (2.1). First, under the max, we indicate the variables
                                                                c       l
that Crusoe gets to choose; in this case, he chooses and . Second, after the word “max”
we place the maximand, which is the thing that Crusoe is trying to maximize; in this case,
he cares about his utility.

Equation (2.2) says that Crusoe cannot consume more than he produces. We can use simple
deduction to prove that we can replace the “” symbol with “=”. Suppose Crusoe chooses
c       l
  and such that       c<y  . This cannot be optimal because he could increase the maximand a
                       c        u c; l                      c
little bit if he raised , since ( ) is increasing in . Simply put: it will never be optimal for
                            y
Crusoe to waste output , so we know that = .       c y
Finally, equation (2.3) simply codiﬁes the production technology that is available to Crusoe.

With all this in mind, we can simplify the way we write Crusoe’s problem as follows:

                                         u(c; l); such that:
                                         max
                                          c;l
                                           c = f (l ):
Here, we are making use of the fact that c = y , and we are substituting the second constraint
into the ﬁrst.
2.3 Crusoe’s Choices                                                                                         13


There are two principal ways to solve such a problem. The ﬁrst is to substitute any con-
straints into the objective. The second is to use Lagrange multipliers. We consider these
two methods in turn.



Substituting Constraints into the Objective

                                                                         c
In the maximization problem we are considering, we have in the objective, but we know
        c fl
that = ( ), so we can write the max problem as:

                                                    max
                                                     l
                                                          u[f (l); l]:
                          c
We no longer have in the maximand or in the constraints, so is no longer a choice c
                                 c fl                                    c
variable. Essentially, the = ( ) constraint tacks down , so it is not a free choice. We
exploit that fact when we substitute out.       c
At this point, we have a problem of maximizing some function with respect to one vari-
able, and we have no remaining constraints. To obtain the optimal choices, we take the
                                                                             l
derivative with respect to each choice variable, in this case alone, and set that derivative
equal to zero.2 When we take a derivative and set it equal to zero, we call the resulting
equation a ﬁrst-order condition, which we often abbreviate as “FOC”.

In our example, we get only one ﬁrst-order condition:

        l                d fu[f (l?); l?]g = u1[f (l?); l?]f 0(l?) + u2[f (l?); l?] = 0:
(FOC )
                         dl
(See the Appendix for an explanation of the notation for calculus, and note how we had to
                                                          l              l
use the chain rule for the ﬁrst part.) We use ? because the that satisﬁes this equation will
be Crusoe’s optimal choice of labor.3 We can then plug that choice back into = ( ) to get      c fl
                                          c      fl
Crusoe’s optimal consumption: ? = ( ? ). Obviously, his optimal choice of leisure will be
1   l?.

Under the particular functional forms for utility and consumption that we have been con-
sidering, we can get explicit answers for Crusoe’s optimal choices. Recall, we have been
         u c; l      c
using ( ) = ln( ) + ln(1            l
                              ) and = ( ) =     y f l Al
                                                   . When we plug these functions into the
ﬁrst-order condition in equation (FOC ), we get:  l
                                               
(2.4)
                                        Al
                                          1
                                         ( ?)
                                                    A (l?) 1 + 1 1l? = 0:
   2 The reason we set the derivative equal to zero is as follows. The maximand is some hump-shaped object. The

derivative of the maximand gives the slope of that hump at each point. At the top of the hump, the slope will be
zero, so we are solving for the point at which the slope is zero.
   3 Strictly speaking, we also need to check the second-order condition in order to make sure that we have

solved for a maximum instead of a minimum. In this text we will ignore second-order conditions because they
will always be satisﬁed in the sorts of problems we will be doing.
14                                                   Work Effort, Production, and Consumption


                                      u c; l         =c
The ﬁrst term in parentheses is from 1 ( ) = 1 , using the fact that =    c Al   . The second
                                                                f l               u c; l
term in parentheses is from the chain rule; it is the 0 ( ) term. The ﬁnal term is 2 ( ). We
can cancel terms in equation (2.4) and rearrange to get:


                                                         l? :
                                                     1
                                          l   ? =1

Cross multiplying and solving yields:

                                          l? = 1 + :
                             l      c fl
When we plug this value of ? into ? = ( ? ), we get:
                                                          
                                     c? = A 1 +                  :
These are Crusoe’s optimal choices of labor and consumption.



Using Lagrange Multipliers

In many problems, the technique of substituting the constraints into the objective is the
quickest and easiest method of carrying out the constrained maximization. However,
sometimes it is difﬁcult to solve the constraints for a particular variable. For example,
suppose you have a constraint like:

                                 c + ln(c) = 10 + l + ln(1 l):
You cannot solve for either c or l, so the solution method described above is not applicable.

Accordingly, we describe how to use Lagrange multipliers to tackle problems of constrain-
ed maximization when it is either difﬁcult or impossible to solve the constraints for indi-
vidual variables. At ﬁrst we treat the method as a cook-book recipe. After we are done, we
will try to develop intuition for why the technique works.

Recall, we are working with the following problem:

                                   max
                                    c;l
                                          u(c; l); such that:
                                            c = f (l ):
The ﬁrst step in using Lagrange multipliers is to solve the constraint so that everything is
on one side, leaving a zero on the other side. In that regard, we have either:

                                      f (l) c = 0; or:
                                         c f (l ) = 0 :
2.3 Crusoe’s Choices                                                                            15


Either of those two will work, but we want to choose the ﬁrst one, for reasons that are
described below. The general heuristic is to choose the one that has a minus sign in front
                                                                                   c
of the variable that makes the maximand larger. In this case, more makes utility higher,
so we want the equation with .     c
The second step is to write down a function called the Lagrangean, deﬁned as follows:

                                 L(c; l; ) = u(c; l) + [f (l) c]:
As you can see, the Lagrangean is deﬁned to be the original objective, ( ), plus some  u c; l
          
variable times our constraint. The Lagrangean is a function; in this case its arguments
                         cl            
are the three variables , , and . Sometimes we will write it simply as L, suppressing
                               
the arguments. The variable is called the Lagrange multiplier; it is just some number that
we will calculate. If there is more than one constraint, then each one is: (i) solved for
                                                                        
zero; (ii) multiplied by its own Lagrange multiplier, e.g., 1 , 2 , etc.; and (iii) added to the
Lagrangean. (See Chapter 3 for an example.)

Before we used calculus to maximize our objective directly. Now, we work instead with
the Lagrangean. The standard approach is to set to zero the derivatives of the Lagrangian
                                                                               
with respect to the choice variables and the Lagrange multiplier . The relevant ﬁrst-order
conditions are:

     c                     @ ? ? ?
                           @c [L(c ; l ;  )] = u1(c ; l ) +  [ 1] = 0;
(FOC )                                               ? ?      ?

(FOC l)
                       @ ? ? ?                             ? 0 ?
                       @l [L(c ; l ;  )] = u2(c ; l ) +  [f (l )] = 0; and:
                                                ? ?

(FOC )
                                @ ? ? ?
                               @ [L(c ; l ;  )] = f (l ) c = 0:
                                                         ?     ?

Again, we use starred variables in these ﬁrst-order conditions to denote that it is only for
                        cl         
the optimal values of , , and that these derivatives will be zero. Notice that differen-
                                             
tiating the Lagrangian with respect to simply gives us back our budget equation. Now
                                                       c l             
we have three equations in three unknowns ( ? , ? , and ? ) and can solve for a solution.
                                                        c                  l
Typically, the ﬁrst step is to use equations (FOC ) and (FOC ) to eliminate ? . From (FOC
c) we have:

                                            u1(c?; l?) = ? ;
                l
and from (FOC ) we have:

                                             u2(c?; l?) = ? :
                                              f 0 (l ? )
Combining the two gives us:

                                       u1(c?; l?) = u2f(c0(l;?l) ) :
                                                          ? ?
(2.5)
16                                                            Work Effort, Production, and Consumption


                                                                      u                f
When we are given particular functional forms for () and (), then equation (2.5) gives
                               c            l
us a relationship between ? and ? that we can plug into the budget equation and solve
                                   u c; l           c
further. For example, under ( ) = ln( ) + ln(1 ) and ( ) =        l           f l Al
                                                                , equation (2.5) becomes:
                                                                                
                                    1
                                    c
                                    ? =             1
                                                        1
                                                        l?        A l
                                                                        1
                                                                      ( ?)     1
                                                                                       ;
or equivalently:

                               c? = A (1 l?)(l?) 1:
Now we plug in the budget equation c = Al to get:

                             A(l?) = A (1 l?)(l?) 1:
After some canceling and algebraic manipulation, this reduces to:

                                         l? = 1 + :
Finally, we plug this answer for the optimal labor l? back into the budget equation to get:
                                                  
                                     c? = A 1 + :
Notice that these are the same answers for c? and l? that we derived in the previous sub-
section, when we plugged the constraint into the objective instead of using a Lagrange
multiplier.

Now let’s try to ﬁgure out why the technique of Lagrange multipliers works. First, we
want to understand better what the Lagrange multiplier is. Our ﬁrst-order condition
                c
with respect to gave us:

(2.6)                                           u1(c?; l?) = ? ;
                                            
This tells us that, at the optimum, ? is the marginal utility of an extra unit of consumption,
                                                                          
given by the left-hand side. It is this interpretation of that motivated our choice of ( )      fl
c = 0 rather than   c fl  ( ) = 0 when we attached the constraint term to the Lagrangean. If
we had used the latter version of the constraint, then the right-hand side of equation (2.6)
would have been        , which would have been minus the marginal utility of income.

Now look at the terms in the Lagrangian:

                                        L(c; l; ) = u(c; l) + [f (l) c]:
                           u
It contains our objective () and then the Lagrange multiplier times the constraint. Re-
         
member, is the marginal utility of an additional unit of consumption. Notice that if the
                                            fl c
budget equation is satisﬁed, then ( ) = , so the constraint term is zero, and the Lagrangian
                     u
L and the objective () are equal. Ceteris paribus, the Lagrangian will be big whenever the
objective is.
2.4 Income and Substitution Effects                                                         17


Now, think about the contributions from the constraint term. Suppose Crusoe is at some
          c           l
choice of and such that the budget is exactly met. If he wants to decrease labor by a   l
                                                                c
little bit, then he will have to cut back on his consumption . The constraint term in the
Lagrangean is: [ ( )  f l c
                           ]. The Lagrangean, our new objective, goes down by the required
      c           
cut in times , which is the marginal utility of consumption. Essentially, the Lagrangean
subtracts off the utility cost of reducing consumption to make up for shortfalls in budget
balance. That way, the Lagrangean is an objective that incorporates costs from failing to
meet the constraint.



2.4 Income and Substitution Effects

Barro uses graphs to examine how Crusoe’s optimal choices of consumption and labor
change when his production function shifts and rotates. He calls the changes in Crusoe’s
choices “wealth and substitution effects”. That discussion is vaguely reminiscent of your
study of income and substitution effects from microeconomics. In that context, you con-
sidered shifts and rotations of linear budget lines. Crusoe’s “budget line” is his production
function, which is not linear.

This difference turns out to make mathematical calculation of income and substitution ef-
fects impractical. Furthermore, the “wealth effects” that Barro considers violate our as-
                                                 l
sumption that production is zero when labor is zero. Such a wealth effect is depicted
as an upward shift of the production function in Barro’s Figure 2.8. This corresponds to
adding a constant to Crusoe’s production function, which means that production is not
zero when is. l
Barro’s Figure 2.10 depicts a pivot of the production about the origin. This type of change
to production is much more common in macroeconomics, since it is how we typically rep-
resent technological improvements. If Crusoe’s production function is =     y Al   , then an
              A                                                               u
increase in will look exactly like this. Given a speciﬁc functional form for () as well, it
                                                                     c          l
is straightforward to compute how Crusoe’s choices of consumption and labor change
                      A
for any given change in .

For example, suppose u(c; l) = ln(c) + ln(1 l) as before. Above we showed that:
                                                  
                                      c? = A 1 + :
Determining how c? changes when A changes is called comparative statics. The typical
exercise is to take the equation giving the optimal choice and to differentiate it with respect
to the variable that is to change. In this case, we have an equation for Crusoe’s optimal
          c                                                            A
choice of ? , and we are interested in how that choice will change as changes. That gives
us:
                                      @c  ?        
                                                       :
(2.7)
                                      @A   =
                                               1+
18                                                             Work Effort, Production, and Consumption


The derivative in equation (2.7) is positive, so Crusoe’s optimal choice of consumption will
                     A
increase when increases.

                                                                                 l
The comparative statics exercise for Crusoe’s optimal labor choice ? is even easier. Above
we derived:
                                                         l? = 1 + :
             A
There is no on the right-hand side, so when we take the partial derivative with respect
     A
to , the right-hand side is just a constant. Accordingly, ?            @l =@A
                                                                 = 0, i.e., Crusoe’s choice of
labor effort does not depend on his technology. This is precisely what Barro depicts in his
Figure 2.10.

                                                                 A
The intuition of this result is as follows. When goes up, the marginal product of labor
goes up, since the slope of the production function goes up. This encourages Crusoe to
                                                                  A
work harder. On the other hand, the increase in means that for any Crusoe has more     l
output, so he is wealthier. As a result, Crusoe will try to consume more of any normal
goods. To the extent that leisure 1                  l
                                           is a normal good, Crusoe will actually work less.
Under these preferences and this production function, these two effects happen to cancel
out precisely. In general, this will not be the case.

                     Variable            Deﬁnition
                          y              Income, in units of consumption
                          k              Capital
                           l             Labor, fraction of time spent on production
                         f (l )          Production function
                                         A parameter of the production function
                             A           Technology of production
                             c           Consumption
                         1       l       Leisure, fraction of time spent recreating
                         L()            Lagrangean function
                                        Lagrange multiplier


                                           Table 2.1: Notation for Chapter 2




Exercises

Exercise 2.1 (Easy)
An agent cares about consumption and leisure. Speciﬁcally, the agent’s preferences are:
U        c       l                   c                                  l
  = ln( ) + ln( ), where is the agent’s consumption, and is the number of hours the agent
Appendix: Calculus Notation                                                                   19


spends per day on leisure. When the agent isn’t enjoying leisure time, the agent works,
                                                     n
either for herself or for someone else. If she works s hours for herself, then she produces
y       n
  = 4 0s:5 units of consumption. For each hour that she works for someone else, she gets
                             w
paid a competitive wage , in units of consumption.

Write out the agent’s optimization problem.

Exercise 2.2 (Moderate)
                                                u c; l c
Suppose Crusoe’s preferences are given by: ( ) = (1              l
                                                                )1 , for some between zero
                                 y fl
and one. His technology is: = ( ) =        Al  , just like before. Solve for Crusoe’s optimal
                         c          l
choices of consumption and labor . (You can use either substitution or a Lagrangean, but
the former is easier in this sort of problem.)



Appendix: Calculus Notation

                                 y fx
Suppose we have a function: = ( ). We can think of differentiation as an operator that
acts on objects. Write dx                                                      x
                        d as the operator that differentiates with respect to . We can apply
the operator to both sides of any equation. Namely,
                                      d  d         
                                     dx y = dx f (x) :
                                     dy , and the right-hand side as
We often write the left-hand side as dx                                    f 0(x). These are just
notational conventions.

When we have functions of more than one variable, we are in the realm of multivariate
calculus and require more notation. Suppose we have = (        z f x; y). When we differenti-
ate such a function, we will take partial derivatives that tell us the change in the function
from changing only one of the arguments, while holding any other arguments ﬁxed. Par-
                                                           @
tial derivatives are denoted with curly dees (i.e., with ) to distinguish them from normal
derivatives. We can think of partial differentiation as an operator as before:
                                    @ z = @ f (x; y):
                                    @x     @x
The left-hand side is often written as @x                                 f x; y
                                       @z , and the right-hand side as ( ). The subscript
        f                                                                     f
                                                                       1
1 on indicates a partial derivative with respect to the ﬁrst argument of . The derivative
    f                                      y
of with respect to its second argument, , can similarly be written: 2 (   f x; y
                                                                          ).

The things to remember about this are:

     Primes (f 0) and straight dees (df ) are for functions of only one variable.
     Subscripts (f1 ) and curly dees (@f ) are for functions of more than one variable.
Chapter 3

The Behavior of Households with
Markets for Commodities and
Credit

In this chapter we move from the world in which Robinson Crusoe is alone on his island
to a world of many identical households that interact. To begin, we consider one particular
representative household. When we add together the behaviors of many households, we
get a macroeconomy.

Whereas in Chapter 2 we looked at Crusoe’s choices between consumption and leisure
at one point in time, now we consider households’ choices of consumption over multiple
periods, abstracting from the labor decisions of households. Section 3.1 introduces the
basic setup of the chapter. In Section 3.2 we work out a model in which households live for
only two periods. Households live indeﬁnitely in the model presented in Section 3.3. Both
these models follow Barro fairly closely, but of course in greater mathematical detail. The
primary difference is that Barro has households carry around money, while we do not.




3.1 The General Setup

                                                            c
The representative household cares about consumption t in each period. This is formal-
                              U c ;c ;c ;:::
ized by some utility function ( 1 2 3         ). Economists almost always simplify intertem-
poral problems by assuming that preferences are additively separable. Such preferences
           U c ;c ;c ;:::
look like: ( 1 2 3            uc      uc          uc                u
                            ) = ( 1 ) + ( 2 ) + 2 ( 3 ) +    . The () function is called the
period utility. It satisﬁes standard properties of utility functions. The variable is called
22                 The Behavior of Households with Markets for Commodities and Credit


the discount factor. It is just a number, say 0.95. The fact that it is less than 1 means that
the household cares a little more about current consumption than it cares about future
consumption.

                                          y
The household gets exogenous income t in each period. This income is in terms of con-
sumption goods. We say that it is exogenous because it is independent of anything that the
household does. Think of this income as some bequest from God or goods that fall from
the sky.

         t                                                              c       P
At time , the household can buy or sell consumption goods t at a price of per unit. (As
                        P
in Barro, the price level does not change over time.) For example, if the household sells 4
                                                                            P
units of consumption goods to someone else, then the seller receives $4 for those goods.

The household is able to save money by buying bonds that bear interest. We use t to      b
                                                                                t
denote the number of dollars of bonds that the household buys at period , for which it
                                               t
will collect principal and interest in period + 1. If the household invests $1 this period,
                                                       R
then next period it gets back its $1 of principal plus $ in interest. Hence, if the household
     b                                                                              b
buys t in bonds this period, then next period the principal plus interest will be t (1 + ).  R
The household comes into the world with no bonds, i.e., 0 = 0.  b
                                                   R                R
Since each $1 of investment in bonds pays $ of interest, is the simple rate of interest
                                   R
on the bonds. If the bonds pay “next period”, then whether the interest rate is daily,
monthly, annual, etc., is determined by what the length of a “period” is. If the “period” is
                             R
a year, then the interest rate is an annual rate.

The household can either borrow or lend, i.e., the household can issue or buy bonds, what-
                         b
ever makes it happier. If t is negative, then the household is a net borrower.

             t                                                      y
At period the household’s resources include its income t and any bonds that it carries
from last period, with interest. The dollar value of these resources is:

                                       Pyt + bt 1(1 + R):
             t
At period the household allocates its resources to its current consumption and to invest-
ment in bonds that it will carry forward to the next period. The dollar cost of these uses
is:

                                           Pct + bt:
                                                            t
Putting these together gives us the household’s period- budget equation:

                                 Pyt + bt 1(1 + R) = Pct + bt:
In a general setup, we would have one such budget equation for every period, and there
could be arbitrarily many periods. For example, if a period were a year, and the household
“lived” for 40 years, then we would have forty budget constraints. On the other hand, a
period could be a day, and then we would have many more budget constraints.
3.2 A Two-Period Model                                                                    23


3.2 A Two-Period Model

We begin this section with a discussion of the choices of a representative household. Then
we put a bunch of these households together and discuss the resulting macroeconomic
equilibrium.


Choices of the Representative Household

                                                        t      ;
In this model the household lives for two time periods, = 1 2. In this case, the household’s
preferences reduce to:
(3.1)                            U (c1; c2) = u(c1) + u(c2):
Given that the household will not be around to enjoy consumption in period 3, we know
that it will not be optimal for the household to buy any bonds in period 2, since those bonds
                                                c
would take away from period-2 consumption 2 and provide income only in period 3, at
                                                                    b
which time the household will no longer be around. Accordingly, 2 = 0. That leaves only
b1 in this model.

The household’s budget constraints simplify as well. In period 1 the household’s budget
equation is:
(3.2)                                 Py1 = Pc1 + b1;
              t
and in period = 2 it is:
(3.3)                              Py2 + b1(1 + R) = Pc2:
The household’s problem is to choose consumptions c1 and c2 and ﬁrst-period bond hold-
ings b1 so as to maximize utility (3.1) subject to the budget equations (3.2) and (3.3). The
household takes the price level P and the interest rate R as given.

We write out the household’s problem:
(3.4)                               uc uc ;
                              max f ( 1 ) + ( 2 )g subject to:
                             c1 ;c2 ;b1
(3.5)                              Py Pc b ;
                                         1 =     1 + 1 and:
(3.6)                              Py b R Pc :
                                        2 +  1 (1 + )= 2
We solve this problem by using the method of Lagrange multipliers. The Lagrangean is:
            L = u(c1) + u(c2 ) + 1 [Py1 Pc1 b1 ] + 2 [Py2 + b1 (1 + R) Pc2 ];
where 1 and 2 are our two Lagrange multipliers. The ﬁrst-order conditions are:
(FOC c1 )                         u0(c1?) + ?1 [ P ] = 0;
(FOC c2 )                       u0(c?2 ) + ?2 [ P ] = 0; and:
(FOC b1 )                      ?1 [ 1] + ?2 [(1 + R)] = 0:
24                      The Behavior of Households with Markets for Commodities and Credit


(Again, stars denote that only the optimal choices will satisfy these ﬁrst-order conditions.)
We leave off the ﬁrst-order conditions with respect to the Lagrange multipliers 1 and 2 ,                 
since we know that they will give us back the two budget constraints.

Rewriting the ﬁrst two FOCs gives us:

                                u0(c?1 ) = ? ;                 u0(c?2 ) = ?:
                                  P         1        and:
                                                                 P          2


We can plug these into the FOC with respect to 1 to get:    b
                                       u0(c?1 ) + u0(c?2 ) (1 + R) = 0;
                                         P         P
which we can rewrite as:
                                           u0(c1?) = (1 + R):
(3.7)
                                           u0(c2?)
Equation (3.7) is called an Euler equation (pronounced: OIL-er). It relates the marginal
                                                                                         u
utility of consumption in the two periods. Given a functional form for (), we can use this
equation and the two budget equations to solve for the household’s choices ?1 , ?2 , and ?1 .c c           b
It is possible to use the Euler equation to make deductions about these choices even without
                                                                                     u
knowing the particular functional form of the period utility function (), but this analysis is
                                                 u
much more tractable when the form of () is given. Accordingly, we assume ( t ) = ln( t ).       uc        c
         uc        =c
Then 0 ( t ) = 1 t , and equation (3.7) becomes:
                                             c?2 = (1 + R):
(3.8)
                                             c?1
                         c c       b
Before we solve for 1? , ?2 , and 1? , let us think about this equation. Recall, preferences are:
uc        uc
  ( 1 ) + ( 2 ). Intuitively, if goes up, then the household cares more about the future than
it used to, so we expect the household to consume more 2 and less 1 .   c            c
This is borne out graphically in Barro’s Figure 3.4. Larger corresponds to smaller slopes
in the household’s indifference curves, which rotate downward, counter-clockwise. Ac-
                                             c                                   c
cordingly, the household’s choice of 2 will go up and that of 1 will go down, like we
expect.

We can show the result mathematically as well. An increase in causes an increase in
                                                        c                            c
right-hand side of the Euler equation (3.8), so 2? goes up relative to ?1 , just like we expect.

                                                                        R
Now we consider changes on the budget side. Suppose goes up. Then the opportunity
                          c
cost of consumption 1 in the ﬁrst period goes up, since the household can forego 1 and                 c
earn a higher return on investing in bonds. By the same reasoning, the opportunity cost
     c                                                              c
of 2 goes down, since the household can forego less 1 to get a given amount of 2 . Ac-                c
               R
cordingly, if goes up, we expect the household to substitute away from 1 and toward          c
c2.
3.2 A Two-Period Model                                                                       25


                               R
Refer to Barro’s Figure 3.4. If goes up, then the budget line rotates clockwise, i.e., it gets
                                                            c               c
steeper. This indicates that the household chooses larger 2 and smaller 1 (subject to being
on any given indifference curve), just like our intuition suggests.

                                                                          R
Mathematically, we refer once again to the Euler equation. If goes up, then the right-hand
                    c =c
side is larger, so ?2 1? goes up, again conﬁrming our intuition.

Given u(ct ) = ln(ct ), we can actually solve for the household’s optimal choices. The Euler
equation and equations (3.2) and (3.3) give us three equations in the three unknowns, c1? ,
c2?, and b?1 . Solving yields:
                                        c1? = y(12 ++ y1)(1
                                                         (1 + R)
                                                            + R)
                                                                  ;
                                                                   
                                                        
                               c2 = y2 + y1(1 + R) 1 + ; and:
                                ?


                                  b?1 = Py1 P (1[y2++ y)(1   1 (1 + R)]
                                                                 + R)
                                                                        :
You can verify these if you like. Doing so is nothing more than an exercise in algebra.

                                                 R
If we tell the household what the interest rate is, the household performs its own maxi-
                             c c         b
mization to get its choices of 1 , 2 , and 1 , as above. We can write these choices as functions
  R       c R c R           b R
of , i.e., 1? ( ), ?2 ( ), and ?1 ( ), and we can ask what happens to these choices as the in-
           R
terest rate changes. Again, this exercise is called “comparative statics”. All we do is take
                                              R
the derivative of the choices with respect to . For example:

                                       @c2? = y1 > 0;
                                       @R 1 +
  c
so ?2 goes up as the interest rate goes up, like our intuition suggests.



Market Equilibrium

So far we have restricted attention to one household. A macroeconomy would be com-
posed of a number of these households, say      N of them, so we stick these households to-
gether and consider what happens. In this model, that turns out to be trivial, since all
households are identical, but the exercise will give you practice for more-difﬁcult settings
to come.

                                                                       R
The basic exercise is to close our model by having the interest rate determined endoge-
nously. Recall, we said that households can be either lenders or borrowers, depending on
         b
whether 1 is positive or negative, respectively. Well, the only borrowers and lenders in
this economy are the   N  households, and all of them are alike. If they all want to borrow,
there will be no one willing to lend, and there will be an excess demand for loans. On the
26                    The Behavior of Households with Markets for Commodities and Credit


other hand, if they all want to lend, there will be an excess supply of loans. More formally,
we can write the aggregate demand for bonds as:            Nb
                                                        ? . Market clearing requires:
                                                        1

(3.9)                                          Nb?1 = 0:
Of course, you can see that this requires that each household neither borrows nor lends,
since all households are alike.

Now we turn to a formal deﬁnition of equilibrium. In general, a competitive equilibrium is a
solution for all the variables of the economy such that: (i) all economic actors take prices as
given; (ii) subject to those prices, all economic actors behave rationally; and (iii) all markets
clear. When asked to deﬁne a competitive equilibrium for a speciﬁc economy, your task is
to translate these three conditions into the speciﬁcs of the problem.

For the economy we are considering here, there are two kinds of prices: the price of con-
             P                                R                                   N
sumption and the price of borrowing . The actors in the economy are the households.
There are two markets that must clear. First, in the goods market, we have:
(3.10)                                  Nyt = Nc?t; t = 1; 2:
Second, the bond market must clear, as given in equation (3.9) above. With all this written
down, we now turn to deﬁning a competitive equilibrium for this economy.

A competitive equilibrium in this setting is: a price of consumption      P ?; an interest rate R?;
                  c c           b
and values for ?1 , ?2 , and ?1 , such that:

      Taking P ? and R? as given, all N households choose c?1 , c?2 , and b1? according to the
         maximization problem given in equations (3.4)-(3.6);
      Given these choices of c?t , the goods market clears in each period, as given in equa-
         tion (3.10); and
      Given these choices of b1?, the bond market clears, as given in equation (3.9).
Economists are often pedantic about all the detail in their deﬁnitions of competitive equi-
libria, but providing the detail makes it very clear how the economy operates.

We now turn to computing the competitive equilibrium, starting with the credit market.
                            b                                      R
Recall, we can write ?1 as a function of the interest rate , since the lending decision of
each household hinges on the interest rate. We are interested in ﬁnding the interest rate
                                          R             b R
that clears the bond market, i.e., the ? such that 1? ( ? ) = 0. We had:

                              b?1 (R) = Py1 P (1[y2++ y)(1 1 (1 + R)]
                                                                + R)
                                                                      ;
so we set the left-hand side to zero and solve for R? :

                                   Py1 = P (1[y2++ y)(1
                                                     1 (1 + R )]
                                                               ?
(3.11)
                                                         +R ) ?    :
3.2 A Two-Period Model                                                                      27


After some algebra, we get:


(3.12)                                    R? = yy21     1   :

This equation makes clear that the equilibrium interest rate is determined by the incomes
y        y
( 1 and 2 ) of the households in each period and by how impatient the households are ( ).
We can perform comparative statics here just like anywhere else. For example:


                                       @R? = 1 > 0;
                                       @y2 y1
                                                  R
so if second-period income increases, then ? does too. Conversely, if second-period in-
                          R                                         y
come decreases, then ? does too. This makes intuitive sense. If 2 goes down, households
will try to invest ﬁrst-period income in bonds in order to smooth consumption between
the two periods. In equilibrium this cannot happen, since net bond holdings must be zero,
so the equilibrium interest rate must fall in order to provide a disincentive to investment,
exactly counteracting households’ desire to smooth consumption.

You can work through similar comparative statics and intuition to examine how the equi-
                                                                y
librium interest rate changes in response to changes in 1 and . (See Exercise 3.2.)

Take note that in this model and with these preferences, only relative incomes matter. For
                  y           y                       y =y
example, if both 1 and 2 shrink by 50%, then 2 1 does not change, so the equilibrium
interest rate does not change. This has testable implications. Namely, we can test the
reaction to a temporary versus a permanent decrease in income.

                                                                                y
For example, suppose there is a temporary shock to the economy such that 1 goes down
                      y
by 10% today but 2 is unchanged. The comparative statics indicate that the equilibrium
interest rate must increase. This means that temporary negative shocks to income induce a
higher interest rate. Now suppose that the negative shock is permanent. Then both 1 and y
y2 fall by 10%. This model implies that     R
                                           ? does not change. This means that permanent
shocks to not affect the interest rate.

                                                                    P
The other price that is a part of the competitive equilibrium is ? , the price of a unit of
consumption. It turns out that this price is not unique, since there is nothing in our econ-
                              P                   P
omy to pin down what ? is. The variable does not even appear in the equations for ?1        c
    c                                         b        P
and ?2 . It does appear in the equation for ?1 , but falls out when we impose the fact that
b?
 1 = 0 in equilibrium; see equation (3.11). The intuition is that raisingP    has counteracting
effects: it raises the value of a household’s income but it raises the price of its consumption
                                      P
in exactly the same way, so raising has no real effect. Since we cannot tack down ? ,       P
any number will work, and we have an inﬁnite number of competitive equilibria. This will
become clearer in Chapter 5.
28                 The Behavior of Households with Markets for Commodities and Credit


3.3 An Inﬁnite-Period Model

The version of the model in which the representative household lives for an inﬁnite number
of periods is similar to the two-period model from the previous section. The utility of the
household is now:
                         U (c1; c2; : : : ) = u(c1) + u(c2) + 2 u(c3) +    :
               t
In each period , the household faces a budget constraint:
                              Pyt + bt 1(1 + R) = Pct + bt:
Since the household lives for all t = 1; 2; : : : , there are inﬁnitely many of these budget
constraints. The household chooses ct and bt in each period, so there are inﬁnitely many
choice variables and inﬁnitely many ﬁrst-order conditions. This may seem disconcerting,
but don’t let it intimidate you. It all works out rather nicely. We write out the maximization
problem in condensed form as follows:
                                               1
                                               X
                                  max
                                fct ;bt g1
                                                           uc ;
                                                         t 1 ( ) such that:
                                                               t
                                         t=1
                                          t=1
                         Py b t + t 1 (1 + ) = R Pct + bt; 8 t 2 f1; 2; : : : g:
                                                                                           t
The “8” symbol means “for all”, so the last part of the constraint line reads as “for all in
the set of positive integers”.

To make the Lagrangean, we follow the rules outlined on page 15. In each time period ,         t
                                                                                   
the household has a budget constraint that gets a Lagrange multiplier t . The only trick is
that we use summation notation to handle all the constraints:
                        1
                        X                      1
                                               X
                   L=               uc
                              t 1 ( )+
                                    t                t [Pyt + bt 1(1 + R) Pct bt] :
                        t=1                    t=1
Now we are ready to take ﬁrst-order conditions. Since there are inﬁnitely many of them,
we have no hope of writing them all out one by one. Instead, we just write the FOCs for
          t              c
period- variables. The t FOC is pretty easy:

      c                             @L t 1 0 ? ?
(FOC t )
                                    @ct = u (ct ) + t [ P ] = 0:
Again, we use starred variables in ﬁrst-order conditions because these equations hold only
for the optimal values of these variables.

                                b
The ﬁrst-order condition for t is harder because there are two terms in the summation that
     b                         b                               t
have t in them. Consider 2 . It appears in the = 2 budget constraint as t , but it alsob
               t                                     b                        t
appears in the = 3 budget constraint as t 1 . This leads to the + 1 term below:

      b                          @L ?
                                 @bt = t [ 1] + t+1 [(1 + R)] = 0:
(FOC t )                                          ?
3.3 An Inﬁnite-Period Model                                                                 29


Simple manipulation of this equation leads to:
                                           ?t = 1 + R:
(3.13)
                                          ?t+1
                          c
Rewriting equation (FOC t ) gives us:
                                         t 1 0 ( ?) = ?
                                                uc         P:
(3.14)                                           t    t
                                                                    t   t
We can rotate this equation forward one period (i.e., replace with + 1) to get the version
for the next period:
                                         t 0( ? ) = ?
                                          uc               P:
(3.15)                                        t+1   t+1
Dividing equation (3.14) by equation (3.15) yields:

                                        uc
                                      t 1 0( ? )       P?
                                                       P;
                                                t        t
                                       uc
                                       t 0( ? ) = ?
                                            t+1         t+1
                                                              or:

                                        uc  0 ( ?t )       ?
                                                         :
                                                            t
                                        uc  0 ( ?t+1 ) = ?t+1
Finally, we multiply both sides by     and use equation (3.13) to get rid of the lambda terms
on the right-hand side:
                                        u0(c?t) = (1 + R):
(3.16)
                                       u0(c?t+1)
If you compare equation (3.16) to equation (3.7), you will ﬁnd the Euler equations are the
same in the two-period and inﬁnite-period models. This is because the intertemporal trade-
offs faced by the household are the same in the two models.

Just like in the previous model, we can analyze consumption patterns using the Euler equa-
                              =   R
tion. For example, if = 1 (1 + ), then the household’s impatience exactly cancels with
the incentives to invest, and consumption is constant over time. If the interest rate isR
relatively high, then the right-hand side of equation (3.16) will be greater than one, and
consumption will be rising over time.


A Present-Value Budget Constraint

Now we turn to a slightly different formulation of the model with the inﬁnitely-lived rep-
resentative household. Instead of forcing the household to balance its budget each period,
now the household must merely balance the present value of all its budgets. (See Barro’s
page 71 for a discussion of present values.) We compute the present value of all the house-
hold’s income:
                                         1
                                         X           Py
                                                     t
                                                      R
                                                (1 + )t 1
                                                            :
                                          t=1
30                  The Behavior of Households with Markets for Commodities and Credit


This gives us the amount of dollars that the household could get in period 1 if it sold the
rights to all its future income. On the other side, the present value of all the household’s
consumption is:
                                       1
                                       X      Pc
                                               R
                                                t
                                           (1 + )t 1
                                                        :
                                     t=1
Putting these two present values together gives us the household’s single present-value
budget constraint. The household’s maximization problem is:
                                     1
                                     X
                                max
                               fct g1
                                              uc ;
                                            t 1 ( ) such that:
                                                  t
                                    t=1 t=1
                                     1
                                     X    Py c
                                           ( t
                                            R
                                                 t)
                                         (1 + )t 1
                                                    =0      :
                                      t=1
We use   as the multiplier on the constraint, so the Lagrangean is:
                                                      "1               #
                               X1                       X P (yt ct )
                                       t 1 u(c ) + 
                           L=                                       t 1 :
                                                        t=1 (1 + R)
                                                 t
                                t=1
The ﬁrst-order condition with respect to ct is:
                                                   
(FOC ct )                       t 1 u0 (c? ) + ?      P ( 1)  = 0:
                                           t         (1 + R)t 1
Rotating this forward and dividing the ct FOC by the ct+1 FOC yields:
                                                        h        i
                                    t 1 u0 (c? ) ? (1+RP)t
                                     t u0 (c? ) = ? h P i ;
                                               t                1


                                             t+1       (1+R)t
which reduces to:
                                      u0(c?t) = (1 + R);
                                     u0(c?t+1)
so we get the same Euler equation once again. It turns out that the problem faced by
the household under the present-value budget constraint is equivalent to that in which
there is a constraint for each period. Hidden in the present-value version are implied bond
holdings. We could deduce these holdings by looking at the sequence of incomes t and y
                       c
chosen consumptions ?t .



Exercises

Exercise 3.1 (Hard)
Consider the two-period model from Section 3.2, and suppose the period utility is:

                                         u(ct) = ct :
                                                   1
                                                   2
Exercises                                                                                       31


                 Variable       Deﬁnition
                   U ( )       Overall utility
                    t           Time
                    ct          Consumption at period    t
                   u()         Period utility
                                Household’s discount factor
                    yt                                           t
                                Household’s income in period , in units of con-
                                sumption
                    P           Cost of a unit of consumption
                    R           Nominal interest rate
                    bt          Number of dollars of bonds bought at period         t
                    t          Lagrange multiplier in periodt
                    N           Number of households


                                  Table 3.1: Notation for Chapter 3


  1. Determine the Euler equation in this case.

                                                                          c c
  2. Determine the representative household’s optimal choices: 1? , 2? , and ?1 .       b
  3. Determine the equilibrium interest rate      R? .
                                                                     R
  4. Determine the effect on the equilibrium interest rate ? of a permanent negative
                                                                            y
     shock to the income of the representative household. (I.e., both 1 and 2 go down byy
                                                                          uc
     an equal amount.) How does this relate to the case in which ( t ) = ln( t )?       c
Exercise 3.2 (Easy)
Refer to equation (3.12), which gives the equilibrium interest rate         R? in the two-period
model.


  1. Suppose the representative household becomes more impatient. Determine the di-
     rection of the change in the equilibrium interest rate. (Patience is measured by . You
     should use calculus.)

  2. Suppose the representative household gets a temporary negative shock to its period-1
             y
     income 1 . Determine the direction of the change in the equilibrium interest rate.
     (Again, use calculus.)

Exercise 3.3 (Moderate)
Maxine lives for two periods. Each period, she receives an endowment of consumption
       e                    e
goods: 1 in the ﬁrst, 2 in the second. She doesn’t have to work for this output. Her pref-
                                                                 u c ;c         c
erences for consumption in the two periods are given by: ( 1 2 ) = ln( 1 ) + ln( 2 ), where c
32                  The Behavior of Households with Markets for Commodities and Credit


c1 and c2 are her consumptions in periods 1 and 2, respectively, and is some discount
factor between zero and one. She is able to save some of her endowment in period 1 for
consumption in period 2. Call the amount she saves s. Maxine’s savings get invaded by
rats, so if she saves s units of consumption in period 1, she will have only (1 Æ )s units of
consumption saved in period 2, where Æ is some number between zero and one.

     1. Write down Maxine’s maximization problem. (You should show her choice variables,
        her objective, and her constraints.)
     2. Solve Maxine’s maximization problem. (This will give you her choices for given val-
              e e            Æ
        ues of 1 , 2 , , and .)
     3. How do Maxine’s choices change if she ﬁnds a way reduce the damage done by the
        rats? (You should use calculus to do comparative statics for changes in .) Æ
Exercise 3.4 (Moderate)
An agent lives for ﬁve periods and has an edible tree. The agent comes into the world at
       t                                    x     c
time = 0, at which time the tree is of size 0 . Let t be the agent’s consumption at time .  t
                                        t       c x
If the agent eats the whole tree at time , then t = t and there will be nothing left to eat in
subsequent periods. If the agent does not eat the whole tree, then the remainder grows at
                                                       t                       s
the simple growth rate between periods. If at time the agent saves 100 t percent of the
                         x            sx
tree for the future, then t+1 = (1 + ) t t . All the agent cares about is consumption during
                                                                  P
                                                           U               c
the ﬁve periods. Speciﬁcally, the agent’s preferences are: = 4t=0 t ln( t ). The tree is the
only resource available to the agent.

Write out the agent’s optimization problem.
Chapter 4

The Demand for Money

This chapter seeks to explain one stark fact: the authors used to withdraw $20 when they
went to the ATM, whereas now they tend to withdraw $300. We are going to make a model
to examine this question. In our model, a consumer chooses how often to go to the bank
and how much money to withdraw once there.

    T
Let be the amount of time (in fractions of a year) between a consumer’s trips to the bank
                      T
to get money. If is 1/3, then the consumer goes to the bank every 4 months, or three
                                  T                               =T
times a year. For arbitrary , the consumer makes 1 trips to the bank in a year.

Going to the bank is a pain. It takes time and effort, and the bank may charge for each
withdrawal. We accumulate all such expenses into some dollar cost . We could derive
 by: (i) calculating the consumer’s opportunity cost of time; (ii) multiplying that by the
amount of time required to go to the bank; and (iii) adding any fees charged by the bank.

The cost per year of this consumer’s trips to the bank is just the number of trips times the
                                                                                     =T
cost per trip, so the consumer’s annual transactions costs are: (1 )( ). If all the prices
in the economy double, then these costs double, since both bank fees and the opportunity
cost of the consumer’s time double.1 Accordingly, in order to get the real impact on the
consumer of these annual costs, we need to adjust them by the price level , so the con-          P
                                                                          P
sumers real2 Here we see that if prices double, then both and double, and those extra
factors of two cancel, so real costs do not change, as we require.
   1 If all prices in the economy double, then the prices of anything the consumer produces double. Put differently,

the consumer’s wage doubles. Either of these implies that the opportunity cost of the consumer’s time doubles.
   2 The distinction between “real” and “nominal” values means the same thing here as in Barro’s discussion

about real versus nominal GDP. (See his Chapter 1.) “Nominal” values are actual dollars. “Real” dollars are
scaled so that their purchasing power is constant. In this model, a unit of consumption costs P dollars. This is the
observed or “nominal” price. If prices double, each dollar has half the purchasing power, so any nominal amount
of dollars goes down in value by a factor of two. In general, we convert from nominal dollar amounts to real
dollar amounts by dividing the nominal amounts by the price level P .
34                                                                 The Demand for Money


Now, going to the bank is costly, but the consumer still does it because the consumer needs
to withdraw money in order to buy things. Assume that our consumer spends        Pc dollars
on consumption each year, where this spending is smooth from day to day. (This gives the
          c
consumer real dollars of consumption each year.) In order to pay for all this consumption,
the consumer needs enough money on hand at any given instant to make the purchases.

We can calculate how much money the consumer spends between trips to the bank. (Recall,
T measures time between trips, in fractions of a year.) If T is 1, then the consumer spends
Pc. If T is 1/2, then the consumer spends (Pc)=2. In general, the consumer spends PcT
dollars between trips to the bank. That is the amount the consumer must withdraw on
each trip. The consumer can choose to go less often (T bigger), but only if the consumer is
willing to withdraw more on each trip.

Barro’s Figure 4.1 gives a graphical illustration of how the consumer’s money holdings
evolve over time. After going to the bank, the consumer’s money holdings decline linearly,
so the consumer’s average money holdings are:

                                         m = PcT
                                              2
                                                 :
(This uses the fact that the area of a triangle is one half the base times the height.) The
consumer’s average real money holdings are:
                                          m = cT :
                                          P 2
Notice that the consumer’s average money holdings are increasing in the amount of time
between bank visits, i.e., the longer between visits, the more money the consumer holds on
average.

Since there are transactions costs involved in each trip to the bank, we might wonder why
the consumer does not go once, withdraw a ton of money, and get it all over with. All the
money that the consumer holds onto between trips to the bank does not earn interest, but
money left in the bank does earn interest. This foregone interest is the opportunity cost of
                                                       R
holding money. If the annual nominal interest rate is , then each year the consumer loses
out on about:

                                        Rm = RPcT
                                              2
dollars of interest. Notice that higher average money holdings result in larger amounts of
foregone interest.

We can state this dollar amount of interest in real terms:
                                                       Rm = RcT :
                       real interest foregone annually =
                                                        P      2
We are now ready to put all this together. The consumer chooses T , the time between bank
visits. We have calculated the annual cost of the consumer’s bank visits and the annual
                                                                                           35


cost in foregone interest from the consumer’s money holdings, both in real terms. Adding
these two costs together gives us:
                                                                     RcT
(4.1)                      total annual real costs =
                                                                 PT + 2 :
This equation is graphed in Barro’s Figure 4.2.

We now use calculus to calculate the consumer’s optimal behavior. Namely, we want to
                                                                            T
derive the consumer’s cost-minimizing choice of the time between visits to the bank
to withdraw money. We are interested in the minimum costs, so we take the ﬁrst-order
condition of equation (4.1) with respect to :     T
                                     
                                @                  RcT ?  = 0; or :
                               @T PT ?           +
                                                        2
                                                            Rc        :
                                             PT
                                             ( ? )2
                                                    +
                                                      2
                                                        =0

                           T
Solving this expression for ? yields:
                                                      r
                                             T   ?=
                                                          PRc :
                                                            2



With this answer, we can now write down the algebraic expression for the consumer’s av-
erage holdings of real money   m=P
                                , which Barro calls (                 R; c; =P
                                                             ). The consumer’s average
money holdings are:
                                             m =  1  cT:
                                             P 2
                                         T
When we plug in our expression for ? , we get:
                                                        r                   r
                    (R; c; =P ) =       1
                                              cT   ?=       1
                                                                 c PRc
                                                                    2                 c:
                                                                                    2PR
(4.2)                                                                  =
                                         2                  2
We can do comparative statics to examine how these money holdings are affected by
changes in the underlying parameters. See the exercises for examples. The solutions to
these exercises provide the answer to question posed at the beginning of this chapter: Why
do the authors now withdraw $300 from the ATM, whereas they used to withdraw only
$20? Well, today they spend more money, the opportunity cost of their time is higher, the
transactions costs at the ATM are higher, and interest rates are lower.

Presumably, the consumer that underlies this model of money demand also makes a choice
                           c
of how much to consume each year. We now brieﬂy discuss whether it makes sense to
                           c     T
have the consumer choose and separately.

                                                                 c
When a consumer chooses how much to consume , she considers the price of the goods
she would be buying. Higher prices generally mean the consumer chooses to consume
36                                                                      The Demand for Money


less. Now, the costs of a good as rung up at the cash register are not the full costs to the
consumer of acquiring the good. The consumer might have to: expend effort to get to the
store; spend valuable time waiting in line; or spend time and money to have the cash on
hand to make the purchase. All of these things add to the cost that the consumer faces
when making a purchase decision. If those additional costs change, then the consumer’s
consumption will change. This implies that the same things that the consumer considers
                    T                                               c           c
when choosing will affect the consumer’s optimal choice of . Since was one of the
                                                T
things that went into our determination of ? , it is a shortcoming of our model that we
assumed that we could separate these decisions.

Think about the following example. Suppose ATM fees go up temporarily to $100 per
                                                             T
transaction. In our model, this implies that increases, so ? goes up, since people want to
                                                     c                          c
go to the bank less often. Our model assumes that is ﬁxed, but in reality will fall because
of the new ATM fees, since consumption is now more expensive (especially consumption
                                                                            T
of goods that have to be purchased with cash). Hence, our solution for ? (which assumes
         c
a ﬁxed ) is liable differ from that implied by a more sophisticated model. Since goes      c
down as goes up, and         ?@T =@c < T
                                      0, would go up by more in a model that took the
                            c T
relationship between and into account.

                 Variable     Deﬁnition
                        T     Time (in years) between trips to the bank
                              Opportunity cost of a trip to the bank
                     P        Price of consumption
                     c        Consumption per year
                     m̄       Consumer’s average money holdings
                     R        Nominal interest rate
                    ()      Real money demand


                                Table 4.1: Notation for Chapter 4




Exercises

Exercise 4.1 (Easy)
  1. Determine the effect of an increase in the interest rate    R on the consumer’s money
                
     demand (), as given by equation (4.2).
     2. Determine the effect of an increase in the consumer’s consumption           c on the con-
                                  
        sumer’s money demand (), as given by equation (4.2).
     3. Determine the effect of an increase in the consumer’s real transactions costs      =P on
                                          
        the consumer’s money demand (), as given by equation (4.2).
Exercises                                                                                37


(Use calculus for all three parts. The way you do the last one is to replace   =P with some
other variable, say , and differentiate with respect to the new variable.)
Chapter 5

The Market-Clearing Model

Most of the models that we use in this book build on two common assumptions. First, we
assume that there exist markets for all goods present in the economy, and that all markets
clear. Second, we assume that all agents behave competitively, which means that they
take prices as given. Models that satisfy these assumptions are called general equilibrium
models. There are a number of important results that apply to all general equilibrium
models, regardless of what kind of goods, agents, or technologies are used. In this chapter,
we will demonstrate three of these results within a general setting. Many of the models that
we use throughout the rest of the book will be special cases of the general model presented
here. Since we omit most of the simplifying assumptions that we make in other chapters,
the treatment is more formal and mathematical than usual.

Section 5.1 introduces our general equilibrium framework. In Section 5.2 we show that
within this framework the general price level is undetermined. This implies that prices can
be normalized without loss of generality. For example, in many models we set the price
of the consumption good to be one. In Section 5.3 we show that in a general equilibrium
model one market clearing constraint is redundant, a fact known as Walras’ Law. Section 5.4
presents the First Welfare Theorem, which states that under certain conditions equilibria in
a general equilibrium model are efﬁcient.




5.1 A General Pure-Exchange Economy

We will consider an economy with many different goods and consumers. Instead of hav-
ing a representative consumer, we allow for the possibility that each consumer has a dif-
ferent utility function. However, we make one simpliﬁcation: there is no production in the
economy. The consumers have endowments of goods and can trade their endowments in
40                                                                                       The Market-Clearing Model


markets, but there is no possibility of producing any goods in excess of the endowments.1

            N                                                                 N
There are different goods in the economy, where is any positive integer. For each good
                                                               n                    p
there is a market, and the price of good is denoted n . There are different consumers.         I
Each consumer has a utility function over her consumption of the goods in the economy.     N
                       n                                   i
Consumption of good by consumer is denoted as in , and the utility function for con- c
        i u c ;c ;::: ;c
sumer is i ( i1 i2       i ). Notice that the utility function is indexed by , so that it can be
                         N                                                                                 i
different for each consumer. The consumers also have endowments of the goods, where                            N
ei is the endowment of consumer of good .
 t                                               i                 n
All consumers meet at the beginning of time in a central marketplace. Here the consumers
can sell their endowments and buy consumption goods. If consumer sells all her endow-
                           PN
                                                                                                   i
  PN
                                             pe
ments, her total income is n=1 n in . Similarly, total expenditure on consumption goods
         pc                    i
is n=1 n in . Consumer maximizes utility subject to her budget constraint, which states
that total expenditure on consumption has to equal total income from selling the endow-
ment. Mathematically, the problem of consumer is:                 i
                                        max u (ci ; ci ; : : : ; ciN ) subject to:
                                       fci gN i 1 2
(5.1)
                                         n n=1
                                                     N
                                                     X                 N
                                                                       X
                                                           pc    i
                                                               n n=          pnein:
                                                     n=1               n=1
We will also need a market-clearing constraint for each of the goods. The market-clearing
condition for good is: n
                                                       I
                                                       X               I
                                                                       X
(5.2)                                                          cin =         ein:
                                                       i=1             i=1
Note that in the budget constraint we sum over all goods for one consumer, while in the
market-clearing conditions we sum over all consumers for one good. The only additional
assumptions that we will make throughout this chapter are: that and are positive inte-     I           N
                                   e
gers, that all endowments in are positive and that all utility functions are strictly increasing
in all arguments. The assumption of increasing utility functions is important because it im-
plies that all prices are positive in equilibrium. We will use this fact below. Notice that
we do not make any further assumptions like differentiability or concavity, and that we do
not restrict attention to speciﬁc functional forms for utility. The results in this chapter rest
solely on the general structure of the market-clearing model. We are now ready to deﬁne
an equilibrium for this economy along the lines developed in Chapter 3.

An allocation is a set of values for consumption for each good and each consumer. A compet-
itive equilibrium is an allocation f 1i 2i   c ;c ;::: ;c
                                               i gI and a set of prices f 1 2
                                               N i=1                               N g such            p ;p ;::: ;p
that:
   1 While this assumption may seem restrictive, in fact all results of this chapter can be shown for production

economies as well. However, notation and algebra are more complicated with production, so we concentrate on
the pure-exchange case.
5.2 Normalization of Prices                                                                                   41


     Taking prices as given, each consumer i chooses fci1 ; ci2 ; : : : ; ciN g as a solution to the
       maximization problem in equation (5.1); and
     Given the allocation, all market-clearing constraints in equation (5.2) are satisﬁed.
The model is far more general than it looks. For example, different goods could corre-
spond to different points of time. In that case, the budget constraint would be interpreted
as a present-value budget constraint, as introduced in Chapter 3. We can also incorpo-
rate uncertainty, in which case different goods would correspond to different states of the
world. Good 1 could be consumption of sun-tan lotion in case it rains tomorrow, while
good 2 could be sun-tan lotion in case it’s sunny. Presumably, the consumer would want to
consume different amounts of these goods, depending on the state of the world. By using
such time- and state-contingent goods, we can adapt the model to almost any situation.



5.2 Normalization of Prices

In our model, the general level of prices is undetermined. For example, given any equi-
librium, we can double all prices and get another equilibrium. We ﬁrst ran into this phe-
nomenon in the credit-market economy of Section 3.2, where it turned out that the price
      P
level was arbitrary. An important application is the possibility of normalizing prices.
Since it is possible to multiply prices by a positive constant and still have an equilibrium,
the constant can be chosen such that one price is set to one. For example, if we want to
normalize the price of the ﬁrst good, we can choose the constant to be 1 1 . Then, when    =p
we multiply all prices by this constant, the normalized price of the ﬁrst good becomes
p =p
( 1 )(1 1) = 1. If for every equilibrium there is another one in which the price of the ﬁrst
good is one, there is no loss in generality in assuming that the price is one right away.
Without always mentioning it explicitly, we make use of this fact in a number of places
throughout this book. Normally the price of the consumption good is set to one, so that all
prices can be interpreted in terms of the consumption good.2 The good whose price is set
to one is often called the numéraire.

In order to show that the price level is indeterminate, we are going to assume that we
have already found an allocation f i1 2i  c ;c ;::: ;c
                                                i gI and a price system f 1 2
                                                N i=1                                    p ;p ;::: ;p
                                                                                     N g that
satisfy all the conditions for an equilibrium. We now want to show that if we multiply
all prices by a constant          >
                                0 we will still have an equilibrium. That is, the allocation
 c ;c ;::: ;c
f i1 i2       i gI will still satisfy market-clearing, and the values for consumption will
              N i=1
still be optimal choices for the consumers given the new price system f 1       2         p ; p ;::: ; p
                                                                                         N g.
It is obvious that the market-clearing constraints will continue to hold, since we have
not changed the allocation and the prices do not enter in the market-clearing constraints.
Therefore we only need to show that the allocation will still be optimal, given the new price
   2 Examples are the labor market model in Section 6.1 and the business-cycle model in Chapter 9. In both cases,

the price of consumption is set to one.
42                                                                            The Market-Clearing Model


system. We know already that the allocation is an optimal choice for the consumers given
the old price system. If we can show that the new price system does not change the bud-
get constraint of the consumer, then the consumer’s problem with the new prices will be
equivalent to the original problem, so it will have the same solution. The budget constraint
with the new prices is:

                                     N
                                     X                    N
                                                          X
                                           (   pn)cin =         (   pn)ein:
                                     n=1                  n=1
We can pull the common       terms outside the summations, so we can divide each side by
to yield:

                                       N
                                       X                  N
                                                          X
                                               pc  i
                                                 n n=           pnein;
                                       n=1                n=1
which is equal to the budget constraint under the original price system. The consumer’s
problem does not change, so it still has the same solution. This shows that the allocation
 c ;c ;::: ;c
f i1 i2     i gI and prices f 1
            N i=1                   p ; p ;::: ; p
                                      2        N g form an equilibrium as well.
The basic idea is that only relative prices matter, not absolute prices. If all prices are multi-
plied by a constant, income from selling the endowment will increase in the same propor-
tion as the cost of consumption goods. As long as the relative prices are constant, such a
change will not inﬂuence the decisions of consumers. Note that we did not need to look
at any ﬁrst-order conditions to prove our point. The possibility of normalizing prices de-
rives from the basic structure of this market economy, not from speciﬁc assumptions about
utility or technology.



5.3 Walras’ Law

In a general equilibrium model, one market-clearing constraint is redundant. This means
that if each consumer’s budget constraint is satisﬁed and all but one market-clearing con-
ditions hold, then the last market-clearing condition is satisﬁed automatically. This fact is
of practical value, because it implies that we can omit one market-clearing constraint right
away when computing an equilibrium. Without mentioning it, we made already use of this
in Section 3.2. While the deﬁnition of equilibrium required the goods market to clear, the
market-clearing constraints for goods were not actually used afterwards. This was possi-
ble because they were implied by the budget constraints and the fact that the bond market
cleared. This feature of general equilibrium models is known as Walras’ Law.

To see that Walras’ law holds in our general pure-exchange economy, assume that the bud-
                                I
get constraints for each of the consumers and the market-clearing constraints for the ﬁrst
N    1 goods are satisﬁed. We want to show that the last market-clearing constraint for
5.3 Walras’ Law                                                                                          43


good    N is also satisﬁed. Summing the budget constraints over all consumers yields:
                                             I X
                                             X N                           I X
                                                                           X N
                                                             pncin =                    pnein:
                                              i=1 n=1                      i=1 n=1

Rearranging gives:

                                             N X
                                             X I                           N X
                                                                           X I
                                                             pc  i
                                                               n n=                     pnein;
                                             n=1 i=1                       n=1 i=1
                                             N
                                             X               I
                                                             X             N
                                                                           X            I
                                                                                        X
                                                    pn             cin =           pn         ein; or:
                                             n=1           i=1     n=1                  i=1
                                      " I                        #
                           N
                           X           X                 XI
(5.3)                            pn          cin               e
                                                               i =0
                                                               n               :
                           n=1         i=1               i=1

Inside the brackets we have the difference between the total consumption and the total
                       n                                              n
endowment of good . If the market for good clears, this difference is zero. Since we
assume that the ﬁrst   N1 markets clear, equation (5.3) becomes:
                                             "                                     #
                                                 I
                                                 X                  I
                                                                    X
                                       pN                ci
                                                          N                ei =0
                                                                            N           :
                                                   i=1              i=1

Since N p > 0, this implies:
                                        I
                                        X                    I
                                                             X
                                                 ciN                eiN = 0; or:
                                         i=1                  i=1
                                                 I
                                                 X                  I
                                                                    X
                                                         ciN =             eiN :
                                                   i=1              i=1

Thus the   N th market will clear as well.
The intuition behind this result is easiest to see when the number of markets is small. If
there is only one good, say apples, the budget constraints of the consumers imply that
each consumer eats as many apples as she is endowed with. Then the market-clearing con-
straint has to be satisﬁed as well, since it is already satisﬁed on the level of each consumer.
Now assume there is one more good, say oranges, and the market-clearing constraint for
apples is satisﬁed. That implies that total expenditures on apples equal total income from
selling apples to other consumers. Since each consumer balances spending with income,
expenditures have to equal income for oranges as well, so the market for oranges clears.
44                                                                                              The Market-Clearing Model


5.4 The First Welfare Theorem

The ﬁrst two features of general equilibrium models that we presented in this chapter were
technical. They are of some help in computing equilibria, but taken for themselves they do
not provide any deep new insights that could be applied to the real world. The situation
is different with the last feature that we are going to address, the efﬁciency of outcomes
in general equilibrium economies. This result has important implications for the welfare
properties of economic models, and it plays a key role in the theory of comparative eco-
nomic systems.

Before we can show that equilibria in our model are efﬁcient, we have to make precise
what exactly is meant by efﬁciency. In economics, we usually use the concept of Pareto
efﬁciency. Another term for Pareto efﬁciency is Pareto optimality, and we will use both
versions interchangeably. An allocation is Pareto efﬁcient if it satisﬁes the market-clearing
conditions and if there is no other allocation that: (1) also satisﬁes the market-clearing con-
ditions; and (2) makes everyone better off. In our model, an allocation f i1 i2         i gI is
                                                                                        N i=1           c ;c ;::: ;c
therefore Pareto efﬁcient if the market-clearing constraint in equation (5.2) holds for each of
      N
the goods and if there is no other allocation f 1i 2i                   c̄ ; c̄ ; : : : ; c̄
                                                                i gI that also satisﬁes market-
                                                                N i=1
clearing and such that:

                                       u(c̄1i ; c̄i2; : : : ; c̄iN ) > u(c1i ; ci2; : : : ; ciN )
                               i
for every consumer .3 Notice that the concept of Pareto optimality does not require us to
take any stand on the issue of distribution. For example, if utility functions are strictly in-
creasing, one Pareto-optimal allocation is to have one consumer consume all the resources
in the economy. Such an allocation is clearly feasible, and every alternative allocation
makes this one consumer worse off. A Pareto-efﬁcient allocation is therefore not neces-
sarily one that many people would consider “fair” or even “optimal”. On the other hand,
many people would agree that it is better to make everyone better off as long as it is pos-
sible to do so. Therefore we can interpret Pareto efﬁciency as a minimal standard for a
“good” allocation, rather than as a criterion for the “best” one.

We now want to show that any equilibrium allocation in our economy is necessarily Pareto
optimal. The equilibrium consists of an allocation f i1 i2                        c ;c ;::: ;c
                                                                    i gI and a price system
                                                                    N i=1
 p ;p ;::: ;p
f1 2          N g. Since market-clearing conditions hold for any equilibrium allocation, the
ﬁrst requirement for Pareto optimality is automatically satisﬁed. The second part takes
a little more work. We want to show that there is no other allocation that also satisﬁes
market-clearing and that makes everyone better off. We are going to prove this by contra-
diction. That is, we will assume that such a better allocation actually exists, and then we
will show that this leads us to a contradiction. Let us therefore assume that there is another
                c̄ ; c̄ ; : : : ; c̄
allocation f i1 i2       i gI that satisﬁes market-clearing and such that:
                         N i=1
                               ( 1i i2 u c̄ ; c̄ ; : : : ; c̄ > u c ; c ; : : : ; c
                                           i )
                                           N      ( 1i i2      i )
                                                               N
     3 A weaker notion of Pareto efﬁciency replaces the strict inequality with weak inequalities plus the requirement

that at least one person is strictly better off. The proof of the First Welfare Theorem still goes through with the
weaker version, but for simplicity we use strict inequalities.
5.4 The First Welfare Theorem                                                                                          45


                     i
for every consumer . We know that consumer                          i maximizes utility subject to the budget
constraint. Since the consumer chooses f i1 i2        c ; c ; : : : ;iciN g even though fc̄i1; c̄2i ; : : : ; c̄iN g yields
higher utility, it has to be the case that f i1 i2  c̄ ; c̄ ; : : : ; c̄N g violates the consumer’s budget con-
straint:


                                            N
                                            X                    N
                                                                 X
(5.4)                                              pnc̄in >              pnein:
                                            n=1                   n=1


Otherwise, the optimizing consumers would not have chosen the consumptions in the al-
          c ;c ;::: ;c
location f i1 i2    i gI in the ﬁrst place. Summing equation (5.4) over all consumers
                    N i=1
and rearranging yields:


                                            I X
                                            X N                          I X
                                                                         X N
                                                         pnc̄in >                   pnein;
                                            i=1 n=1                      i=1 n=1
                                            XN X I                       XN X I
                                                         pnc̄in >                   pnein;
                                             n=1 i=1                     n=1 i=1
                                            N
                                            X           I
                                                        X                N
                                                                         X          I
                                                                                    X
                                                   pn           c̄in >         pn         ein; so:
                                            n=1         i=1              n=1        i=1
                                    " I                          #
                         N
                         X           X              I
                                                    X
                               pn           c̄in           ein > 0:
                         n=1          i=1            i=1


We assumed that the allocation f i1 i2   c̄ ; c̄ ; : : : ; c̄
                                              i gI satisﬁed market-clearing. Therefore the
                                              N i=1
                                                                               >
terms inside the brackets are all zero. This implies 0 0, which is a contradiction. There-
                          c̄ ; c̄ ; : : : ; c̄
fore, no such allocation f 1i i2       i gI can exist, and the original equilibrium allocation
                                       N i=1
 c ;c ;::: ;c
f1 2
  i   i
             N gi=1 is Pareto optimal.
             i  I

Since any competitive equilibrium is Pareto optimal, there is no possibility of a redistribu-
tion of goods that makes everyone better off than before. Individual optimization together
with the existence of markets imply that all gains from trade are exploited.

There is also a partial converse to the result that we just proved, the “Second Welfare Theo-
rem”. While the First Welfare Theorem says that every competitive equilibrium is Pareto ef-
ﬁcient, the Second Welfare Theorem states that every Pareto optimum can be implemented
as a competitive equilibrium, as long as wealth can be redistributed in advance. The Sec-
ond Welfare Theorem rests on some extra assumptions and is harder to prove, so we omit
it here. In economies with a single consumer there are no distributional issues, and the two
theorems are equivalent.
46                                                              The Market-Clearing Model


              Variable   Deﬁnition
                 N       Number of goods
                 pn      Price of good n
                  I      Number of consumers
                 cin                            n
                         Consumption of good by consumer         i
                ui ()   Utility function of consumer i
                 ein                             n
                         Endowment with good of consumer          i
                         Arbitrary proportionality factor


                            Table 5.1: Notation for Chapter 5


Exercises

Exercise 5.1 (Easy)
Show that Walras’ law holds for the credit-market economy that we discussed in Chapter
3.2. That is, use the consumer’s budget constraints and the market-clearing conditions for
goods to derive the market-clearing condition for bonds in equation (3.9).

Exercise 5.2 (Hard)
Assume that the equilibrium price of one of the  N goods is zero. What is the economic
interpretation of this situation? Which of our assumptions ruled out that a price equals
zero? Why? Does Walras’ Law continue to hold? What about the First Welfare Theorem?
Chapter 6

The Labor Market

This chapter works out the details of two separate models. Section 6.1 contains a one-
period model in which households are both demanders and suppliers of labor. Market
clearing in the labor market determines the equilibrium wage rate. Section 6.2 further
develops the two-period model from Chapter 3. In this case, the households are permitted
to choose their labor supply in each period.



6.1 Equilibrium in the Labor Market

This economy consists of a large number of identical households. Each owns a farm on
which it employs labor to make consumption goods, and each has labor that can be sup-
plied to other farmers. For each unit of labor supplied to others, a household receives a
        w
wage , which is paid in consumption goods. Households take this wage as given. In
order to make the exposition clear, we prohibit a household from providing labor for its
own farm. (This has no bearing on the results of the model.)

The ﬁrst task of the representative household is to maximize the proﬁt of its farm. The
                                                       fl         l
output of the farm is given by a production function ( d ), where d is the labor demanded
(i.e., employed) by that farm. The only expense of the farm is its labor costs, so the proﬁt
               fl
of the farm is: = ( d )   wl d . The household that owns the farm chooses how much labor
l                                                  l
 d to hire. The ﬁrst-order condition with respect to d is:
                                 @ = f 0(l?) w = 0; so:
                                 @ld       d
(6.1)                                  w = f 0(ld?):
This implies that the household will continue to hire laborers until the marginal product
48                                                                                    The Labor Market


of additional labor has fallen to the market wage. Equation (6.1) pins down the optimal
                l
labor input d? . Plugging this into the proﬁt equation yields the maximized proﬁt of the
                 fl
household: ? = ( d?)     wl?
                           d.
After the proﬁt of the farm is maximized, the household must decide how much to work on
the farms of others and how much to consume. Its preferences are given by ( s ), where  u c; l          c
                                           l
is the household’s consumption, and s is the amount of labor that the household supplies
to the farms of other households. The household gets income ? from running its own
farm and labor income from working on the farms of others. Accordingly, the household’s
budget is:

                                               c = ? + wls;
so Lagrangean for the household’s problem is:

                                   L = u(c; ls ) + [? + wls c]:
The ﬁrst-order condition with respect to is:    c
(FOC )      c                         u1(c?; ls?) + ? [ 1] = 0;
                         l
and that with respect to s is:

(FOC s )    l                          u2(c?; ls?) + ? [w] = 0:
Solving each of these for     and setting them equal yields:
                                           u2(c?; ls?) = w;
(6.2)
                                           u1(c?; ls?)
so the household continues to supply labor until its marginal rate of substitution of labor
for consumption falls to the wage the household receives.

                                           u           f
Given particular functional forms for () and (), we can solve for the optimal choices d?          l
        l
and s? and compute the equilibrium wage. For example, assume:

                                   u(c; l) = ln(c) + ln(1 l); and:
                                              f (l) = Al :
Under these functional forms, equation (6.1) becomes:

                                        w = A (ld?) 1; so:
                                                  
                                         ld? = Aw
                                                               1

                                                        :
                                                           1
(6.3)

                               
This implies that the proﬁt ? of each household is:
                                               1                    1 1
                               ? = A Aw                   w Aw               :
6.1 Equilibrium in the Labor Market                                                                                                           49


After some factoring and algebraic manipulation, this becomes:
                                                                       
                                      ? = A(1   A  :                                   1
(6.4)
                                                  w                )

Under the given preferences, we have u1 (c; l) = 1=c and u2 (c; l) = 1=(1 l). Recall, the
budget equation implies c =  + wls . Plugging these into equation (6.2) gives us:
                                       ? + wls? = w;
                                         1 ls?
which reduces to:

                                                       ls? = 12 2w :
                                                                  ?


            
Plugging in ? from equation (6.4) yields:
                                                                                   
                              ls? = 12                                                   A 
                                                       w A(1                                                          ;
                                                       1                                                  1


                                                      2
                                                                                 )
                                                                                         w
which reduces to:
                                                                      
                                  ls? = 21                 1                     A           1
                                                                                                  1

                                                                                                          :
                                                               2                 w
Now we have determined the household’s optimal supply of labor s? as a function of the                                            l
                w
market wage , and we have calculated the household’s optimal choice of labor to hire d?                                                       l
for a given wage. Since all household’s are identical, equilibrium occurs where the house-
hold’s supply equals the household’s demand. Accordingly, we set s? = d? and call the                                                 l   l
resulting wage ? :  w
                                                     
                            1         1                        A      1
                                                                            1
                                                                                   A                        1
                                                                                                                  1

                                                                                                                          :
                            2             2                    w?                =
                                                                                   w?
We gather like terms to get:
                                                                      
                                  1                        1                     A               1
                                                                                                      1

                                                                                                              :
                                  2
                                    = 1+
                                                               2                 w?
Further algebraic manipulation yields:
                                                                               1
                                          w   ?=          A        1+
                                                                                              :
Finally, we plug this equilibrium wage back into our expressions for s? and d? , which were                                       l       l
           w
in terms of . For example, plugging the formula for ? into equation (6.3) gives us:      w
                                                          "                                 #1 1
                        l?        A      1
                                              1
                                                                       A                                                      :
                         d=       w?                  =
                                                               A       1+
                                                                                1                            =
                                                                                                                      1+
50                                                                        The Labor Market


                                            l
Of course, we get the same answer for s? , since supply must equal demand in equilibrium.

                            l l       w
Given these answers for s? , d? , and ? , we can perform comparative statics to determine
how the equilibrium values are inﬂuenced by changes in the underlying parameters. For
example, suppose the economy experiences a positive shock to its productivity. This could
                                        A
be represented by an increase in the parameter to the production function. We might be
interested in how that affects the equilibrium wage:

                                  @w? =  + 1 1 > 0;
                                  @A
                                                                               l       l
so the equilibrium wage will increase. Just by inspecting the formula for d? and s? , we
                                                                     A
know that labor supply and labor demand will be unchanged, since does not appear. The
intuition of this result is straightforward. With the new, higher productivity, households
will be more inclined to hire labor, but this is exactly offset by the fact that the new wage
is higher. On the other side, households are enticed to work more because of the higher
wage, but at the same time they are wealthier, so they want to enjoy more leisure, which is
a normal good. Under these preferences, the two effects cancel.

                 Variable   Deﬁnition
                    w       Wage in consumption goods per unit of labor
                    ld      Labor demanded by owner of farm
                  f (ld)    Output of farm
                           Proﬁt of farm
                     c      Consumption of household
                    ls      Labor supplied by household
                 u(c; ls)   Utility of household
                           Lagrange multiplier
                    L       Lagrangean
                    A       Parameter of the production function
                            Parameter of the production function


                              Table 6.1: Notation for Section 6.1



6.2 Intertemporal Labor Choice

The model in this section is a pure extension of that developed in Section 3.2. In that model
the representative household lived for two periods. Each period, the household got an
             e          e                                                  c       c
endowment, 1 and 2 . The household chose each period’s consumption, 1 and 2 , and the
                              b
number of dollars of bonds 1 to carry from period 1 to period 2.
6.2 Intertemporal Labor Choice                                                                    51


The model presented here is almost identical. The only difference is that the household
exerts labor effort in order to acquire goods instead of having them endowed exogenously.
                                                                     y    fl
In particular, the household has some production function: t = ( t ). The household
                               l        l               y
chooses each period’s labor, 1 and 2 . The income t takes the place of the endowment t            e
in the model from Chapter 3.

The household’s maximization problem is:
                                      u c ;l u c ;l ;
                             max f ( 1 1 ) + ( 2 2 )g subject to:
                         c1 ;c2 ;l1 ;l2 ;b1
                                     Pf l Pc b ;
                                             ( 1 ) = 1 + 1 and:
                                     Pf l b R Pc :
                                            ( 2 ) + 1 (1 + ) = 2
Refer to Chapter 3 for a discussion of: (i) the budget constraints, (ii) the meaning of the
           P                       R
price level and interest rate , and (iii) how the bonds work. The Lagrangean is:
       L = u(c1; l1 ) + u(c2 ; l2) + 1 [Pf (l1) Pc1 b1 ] + 2 [Pf (l2) + b1 (1 + R) Pc2 ]:
There are seven ﬁrst-order conditions:
     c
(FOC 1 )                          u1(c?1 ; l1?) + ?1 [ P ] = 0;
(FOC c2 )                          u1(c?2 ; l2?) + 2? [ P ] = 0;
(FOC l1 )                       u2(c?1 ; l1?) + ?1 [Pf 0(l1?)] = 0;
(FOC l2 )                     u2(c?2 ; l2?) + 2?[Pf 0(l2?)] = 0; and:
(FOC b1 )                         ?1 [ 1] + ?2 [(1 + R)] = 0:
We leave off the FOCs with respect to 1 and 2 because we know that they reproduce
the constraints. Solving equations (FOC c1 ) and (FOC c2 ) for the Lagrange multipliers and
plugging into equation (FOC b1 ) yields:
                                     u1(c?1 ; l1?) = (1 + R):
(6.5)
                                     u1(c?2 ; l2?)
This is the same Euler equation we saw in Chapter 3. Solving equations (FOC l1 ) and
(FOC l2 ) for the Lagrange multipliers and plugging into equation (FOC b1 ) yields:
                                 u2(c?1 ; l1?) = (1 + R)f 0(l1?) :
(6.6)
                                 u2(c?2 ; l2?)          f 0(l2?)
This is an Euler equation too, since it too relates marginal utilities in consecutive periods.
This time, it relates the marginal utilities of labor.

                                                                                    u
We could analyze equations (6.5) and (6.6) in terms of the abstract functions, () and (),   f
but it is much simpler to assume particular functional forms and then carry out the analy-
sis. Accordingly, assume:
                                   u(c; l) = ln(c) + ln(1 l); and:
                                              f (l) = Al :
52                                                                           The Labor Market


Plugging the utility function into equation (6.5) yields:
                                        c?2 = (1 + R);
                                        c?1
just like in Chapter 3. All the analysis from that chapter carries forward. For example, this
                                                    R
equation implies that a higher interest rate implies that the household consumes more
in period 2 relative to period 1. Equation (6.6) becomes:

                                  (1   l2?)(l2?)1             R:
(6.7)
                                  (1   l1?)(l1?)1       = (1 + )

Analysis of this equation is somewhat tricky. As a ﬁrst step, let   D(l) = (1 l)l1   be a helper
function. Then equation (6.7) can be written as:

                                    D(l1?) = (1 + R):
(6.8)
                                    D(l2?)
Now, let’s consider how D(l) changes when l changes:

                          D0(l) = (1 l)( 1)l 2 + l 1( 1)
                                = l 2(       l 1 + l l)
                                =l   2
                                       [ (1 l) 1]:

We know that lx > 0 for all x, so l 2 > 0. Further, (1 l) < 1, since l and are both
between zero and one. Putting these together, we ﬁnd that D0 (l) < 0, so increasing l causes
D(l) to decrease.
Now, think about what must happen to l1? and l2? in equation (6.8) if the interest rate R in-
creases. That means that the right-hand side increases, so the left-hand side must increase
in order to maintain the equality. There are two ways that the left-hand side can increase:
            Dl                  Dl
either (i) ( 2? ) increases, or (ii) ( 1? ) decreases (or some combination of both). We already
                       Dl   l                                                 l
determined that ( ) and move in opposite directions. Hence, either 2? decreases or 1?         l
                                                             l =l
increases (or some combination of both). Either way, 2? 1? decreases. The intuition of this
result is as follows. A higher interest rate means the household has better investment op-
portunities in period 1. In order to take advantage of those, the household works relatively
harder in period 1, so it earns more money to invest.



Exercises

Exercise 6.1 (Hard)
                                                                         a
This economy contains 1,100 households. Of these, 400 own type- farms, and the other
                   b
700 own type- farms. We use superscripts to denote which type of farm. A household of
        j   a; b                         l                                             d
type 2 f g demands (i.e., it hires) dj units of labor, measured in hours. (The “ ” is for
Exercises                                                                                              53


               Variable       Deﬁnition
                 U ( )       Overall utility
                  t           Time
                  ct          Consumption at period        t
                  lt          Labor at period      t
                 u()         Period utility
                              Household’s discount factor
                  yt                                                   t
                              Household’s income in period , in units of con-
                              sumption
                 f (lt)       Production function
                   P          Cost of a unit of consumption
                   R          Nominal interest rate
                   bt         Number of dollars of bonds bought at period              t
                  t          Lagrange multiplier in period        t
                     L        Lagrangean
                  N           Number of households
                 D (l )       Helper function, to simplify notation


                                Table 6.2: Notation for Section 6.2

                     j                         l                           s
demand.) The type- household supplies sj of labor. (The “ ” is for supply.) The household
need not use its own labor on its own farm. It can hire other laborers and can supply its
own labor for work on other farms. The wage per hour of work in this economy is . This            w
                                                                               w
is expressed in consumption units, i.e., households can eat . Every household takes the
      w
wage as given. Preferences are:

                                  u(cj ; lsj ) = ln(cj ) + ln(24 lsj );
      c
where j is the household’s consumption. Production on type- farms is given by:     a
                                              y = (lda)0:5;
                 b
and that on type- farms is:

                                             y = 2(ldb )0:5:
We are going to solve for the wage that clears the market. In order to do that, we need to
determine demand and supply of labor as a function of the wage.

                          a          l
If an owner of a type- farm hires da hours of labor at wage                w per hour, the farm owner will
make proﬁt:

                                          a = (lda)0:5 wlda :
54                                                                                      The Labor Market


                                               a
     1. Use calculus to solve for a type- farmer’s proﬁt-maximizing choice of labor da to hire           l
                                       w                                        l
        as a function of the wage . Call this amount of labor da? . It will be a function of .               w
                                           a                                    w
        Calculate the proﬁt of a type- farmer as a function of . Call this proﬁt a? .            
                                  b                        l
     2. If an owner of a type- farm hires db hours of labor at wage                  w per hour, the farm
        owner will make proﬁt:

                                             b = 2(ldb )0:5 wldb :
        Repeat part 1 but for type-b farmers. Call a type-b farmer’s proﬁt-maximizing choice
        of labor ldb? . Calculate the proﬁt of a type-b farmer as a function of w. Call this proﬁt
        b?.
     3. If a type-a farmer works lsa , then that farmer’s income will be:  a? + wlsa . Accordingly,
        the budget constraint for type-a farmers is:

                                               ca = a? + wlsa:
        A type-a household chooses its labor supply by maximizing its utility subject to its
        budget. Determine a type-a household’s optimal choice of labor to supply for any
        given wage w. Call this amount of labor lsa? .

     4. Repeat part 3 but for type-b households. Call this amount of labor lsb? .

     5. Aggregate labor demand is just the sum of the demands of all the farm owners. Cal-
        culate aggregate demand by adding up the labor demands of the 400 type- farmers              a
                          b
        and the 700 type- farmers. This will be an expression for hours of labor in terms of     l
                          w
        the market wage . Call the result d? .         l
     6. Aggregate labor supply is just the sum of the supplies of all the households. Calculate
        aggregate supply, and call it s? . l
                                                                                             w
     7. Use your results from parts 5 and 6 to solve for the equilibrium wage ? . (Set the two
        expressions equal and solve for .)     w
Exercise 6.2 (Hard)
Consider an economy with many identical households. Each household owns a business
                                                   k                l
that employs both capital (machinery) and labor d to produce output . (The “ ” is for    y               d
demand.) Production possibilities are represented by =
                                                            3
                                                            10 (
                                                                      7
                                                                            y Ak l
                                                                 d ) 10 . The stock of capital
that each household owns is ﬁxed. It may employ labor at the prevailing wage per unit                w
           l
of labor d . Each household takes the wage as given. The proﬁt of each household from
running its business is:

(6.9)                                  = y wld = Ak (ld)      3
                                                               10
                                                                     7
                                                                    10      wld :
     1. Determine the optimal amount of labor for each household to hire as a function of its
                              k                                         w
        capital endowment and the prevailing wage . Call this amount of labor d? .                   l
Exercises                                                                               55


            l
  2. Plug d? back into equation (6.9) to get the maximized proﬁt of the household. Call
     this proﬁt ? . 
                                                              c                  l
  3. Each household has preferences over its consumption and labor supply s . These
                                                         u c; l   c
                                                                  1
     preferences are represented by the utility function: ( s ) = 2 (1     l1
                                                                        s ) 2 . Each house-
     hold has an endowment of labor can be used in the household’s own business or
                                       w                               l
     rented to others at the wage . If the household supplies labor s , then it will earn
                        wl
     labor income s . Output, wages, and proﬁt are all quoted in terms of real goods, so
     they can be consumed directly. Set up the household’s problem for choosing its labor
                l
     supply s . Write it in the following form:

                             max fobjectiveg subject to: constraints
                             choices


                                                                                 l
  4. Carry out the maximization from part 3 to derive the optimal labor supply s? .
                                   w
  5. Determine the equilibrium wage ? in this economy.
  6. How does the equilibrium wage w? change with the amount of capital k owned by
     each household?
  7. What does this model imply about the wage differences between the U.S. and Mex-
     ico? What about immigration between the two countries?
Chapter 8

Inﬂation

This chapter examines the causes and consequences of inﬂation. Sections 8.1 and 8.2 relate
inﬂation to money supply and demand. Although the presentation differs somewhat from
that in Barro’s textbook, the results are similar. In Section 8.3 we extend Barro’s analysis
with a closer look at the real effects of inﬂation.




8.1 Money Supply and Demand

In most countries, the general level of prices tends to increase over time. This phenomenon
is known as inﬂation. In this section we will link inﬂation to changes in the quantity of
money in an economy.

The quantity of money is determined by money supply and demand. Before we can ﬁnd
out how supply and demand are determined, we have to make precise what exactly is
meant by money. Money is deﬁned as the medium of exchange in an economy. Currency
(bank notes and coins) is a medium of exchange, but there are other commodities that ful-
ﬁll this function as well. For example, deposits on checking accounts can be used as a
medium of exchange, since a consumer can write a check in exchange for goods. There are
other assets where it is not so clear whether they should be considered money or not. For
example, savings deposits can be used as a medium of exchange by making transfers or
withdrawals, but the main purpose of savings accounts is to serve as a store of value. In
order to deal with these ambiguities, economists work with a number of different deﬁni-
tions of money. These deﬁnitions are often referred to as monetary aggregates. One of the
most important monetary aggregates is called M1; this measure consists of the currency in
circulation plus checking deposits at banks. Broader aggregates like M2 and M3 also con-
58                                                                                                        Inﬂation


tain savings and time deposits.1 As a convention, in this chapter we will identify money
with M1, although most of the analysis would also work if we had broader aggregates in
mind.

Having deﬁned money, let us turn to money supply. Since we use M1 as our deﬁnition of
money, we have to ﬁnd the determinants of the supply of currency and checking deposits.
In most countries, the supply of currency is under control of the central bank. For example,
in the United States the Federal Reserve is responsible for supplying currency. If the central
bank decides to increase the supply of currency, all it needs to do is to print more bank
notes and hand them out, most of the time to private banks. Conversely, the central bank
can decrease the supply of currency by buying back its own money. The determination of
the supply of checking deposits is a more difﬁcult question. Even though the central bank
does not directly control checking deposits at private banks, a number of monetary-policy
instruments give the central bank indirect control over bank deposits. To explain exactly
how this works is beyond the scope of the chapter. We will come back to this question in
Chapter 17, which takes a closer look at central-bank policy and its relation to the banking
industry. For the purposes of this chapter, we will simply assume that both currency and
checking deposits are under direct control of the central bank. This approximation works
well enough for a ﬁrst analysis of inﬂation. From now on, we will use t to denote the            M
                                                                                     t
overall quantity of money supplied by the central bank in year . For convenience, we will
             M
measure t in dollars.

Let us now take a look at money demand. Money is demanded by households and ﬁrms.
Households need money in order to purchase consumption goods. Firms need money to
purchase inputs to production and to make change at cash registers. For a given year ,                          t
                 Y
we will use t to denote the total amount of purchases, measured in terms of consumption
                                                       Y
goods. For example, on Crusoe’s island t would be the number of coconuts consumed in
        t
year . If we are thinking about a whole country, we can interpret t as real GDP. Since t Y                      Y
                                                                                     P
is in terms of goods, we have to multiply it by the price level t to get the total amount
                                             PY
of purchases in terms of dollars, t t . Actual money demand is lower than t t , because              PY
money can be used more than once in a year. The velocity of money is deﬁned as the average
number of times a piece of money turns over in a year. The more often money turns over,
the less money is needed to carry out the planned purchases. Using t to denote velocity,     V
                                              P Y =V                           V
actual money demand is given by t t t . For example, if t = 1, then each unit of money
will be used only once. This corresponds to a situation in which all purchases are carried
                                PY
out at the same time, so t t dollars will be needed. On the other hand, if each month only
                                                  PY=
1/12 of all purchases are made, only t t 12 dollars will be required, and t will be 12.          V
                                         M                                  P Y =V
In equilibrium, money supply t and money demand t t t have to be equal. If we set
                                                  V
them equal and multiply by velocity t , we arrive at the quantity equation:

                                                      MtVt = Pt Yt:
                                                                       M
The quantity equation relates the quantity of money t to the price level t . Still, as of            P
now it does not provide an explanation for inﬂation, because we have not yet explained
     1 See Chapter 4 of Barro for precise deﬁnitions of these aggregates.
8.2 The Quantity Theory                                                                                  59


                V                                             Y
how velocity t and the the amount of purchases t are determined.



8.2 The Quantity Theory

Our task is to add theoretical underpinnings to the quantity equation in order to better un-
derstand inﬂation. The best way to proceed would be to write down a model that explains
                                                                           V
how the decisions of optimizing agents determine velocity t and output t . We will do        Y
that in the following section, but as a ﬁrst step we will start with a simpler approach. We
assume that velocity and output in each year are given constants that are determined inde-
                                       M                              P
pendently of the money supply t and the price level t . Further, we assume that velocity
does not change over time. Therefore we can drop the time subscript and use to denote            V
                                                              M                          P
velocity. The central bank controls money supply t , so the price level t is the only free
variable. Given these assumptions, the quantity equation implies that the central bank has
perfect control over the price level. If the central bank changes money supply, the price
level will change proportionally. We can see that by solving the quantity equation for t :           P
(8.1)                                           Pt = MtV=Yt:
Let us now see what this implies for inﬂation. The inﬂation rate t in a given year                  t is
deﬁned as the relative change in the price level from to + 1, or: t t
                                               t = Pt+1Pt Pt :
This can also be written as:

(8.2)                                                PPt+1t :
                                                1+ t =

Taking the ratio of equation (8.1) for two consecutive years, we get:
                                    Pt+1 = Mt+1V Yt :
                                     Pt MtV Yt+1
We know from equation (8.2) that Pt+1 =Pt equals 1 + t , and the V terms cancel, so we have:

                                   1 + t =
                                            Mt+1 Yt :
(8.3)
                                             Mt Yt+1
We now take logs of both sides and use an approximation: ln(1 + x)  x when x is not very
large. Accordingly, equation (8.3) becomes:

                              t  [ln Mt+1        ln   Mt]       Y
                                                              [ln t+1          Y :
                                                                          ln t ]

This says that the inﬂation rate approximately equals the difference between the growth
rate of money supply and the growth rate of output.2 If output grows while the money
  2 See Chapter 1 for a general discussion of growth rates.
60                                                                                              Inﬂation


supply is constant, prices will have to fall so that money demand t t          P Y =V
                                                                          also stays con-
stant. If money supply grows while output does not, prices will have to increase so that
money demand increases in line with supply. Since the theory emphasizes the role of the
quantity of money for the determination of inﬂation, it is known as the quantity theory of
money.

Across countries and over time in a given country, we usually observe much higher vari-
ation in the growth rate of the money supply than in the rate of output growth. This
indicates that variations in inﬂation are primarily attributable to variations in the rate of
money growth. Empirical data gives strong support to this hypothesis. For example, Fig-
ure 7.1 in Barro shows that the money growth rate is almost perfectly proportional to the
inﬂation rate in a sample of 80 countries.

While the quantity theory successfully explains the cause of inﬂation, it is not very helpful
if we want to determine the consequences of inﬂation. In deriving the quantity theory, we
assumed that money and prices were independent of all other variables in the economy.
In the real world, high inﬂation is generally considered to be undesirable. If we want
to understand why inﬂation might be bad, we have to determine the effects of inﬂation
on real variables like output and consumption. This cannot be done within the quantity
theory, since it assumed from the outset that such real effects did not exist. Instead, we
need to go beyond the simplifying assumptions of the quantity theory.

To some degree we already did that in the discussion of money demand in Chapter 4,
                                         T
where we derived the optimal time between a consumer’s trips to the bank to get money.
           T                                                                      V
That time between trips to get money was closely related to velocity . In fact, = 2 .3         V     =T
                                                T
In Chapter 4 we saw that the decision on depended on the planned consumption expen-
diture and the nominal interest rate. Therefore the assumption of a constant velocity                  V
that we made for the quantity theory was not correct. On the other hand, from an empiri-
cal point of view, the assumption of constant velocity seems to work relatively well as long
as inﬂation rates are moderate.

The other assumption that we made for the quantity theory was that output t was deter-     Y
mined independently of monetary policy and inﬂation. We need to relax this assumption if
we want to determine the real effects of inﬂation. In the next section, we will build a com-
plete general equilibrium model that allows us to derive the impact of inﬂation on output
and consumption.




  3 Velocity is given by V = P Y=M . In Chapter 4, we derived that the average money holdings of a consumer

were given by m̄ = P cT=2, where c was consumption. If we aggregate this over many consumers, the left-
hand side becomes the aggregate money stock M , and individual consumption c sums to total output Y , so
M = P Y T=2. Plugging this into the formula for velocity yields V = 2=T .
8.3 A Cash-in-Advance Economy                                                           61


8.3 A Cash-in-Advance Economy

In this section we derive the real effects of inﬂation. Unlike in the previous section, we
will use a complete equilibrium model with optimizing consumers, because we want to
understand how economic agents decide on consumption and output in the presence of
inﬂation. The model builds on the general equilibrium framework developed in earlier
chapters, but this model also contains a monetary sector.

This model is based on many identical consumers who live forever. In such a case, we say
that consumers are inﬁnitely lived. Since everyone is the same, it sufﬁces to examine the
choices of a single, representative consumer. The representative consumer has to decide
                 c                   l            s                            m
on consumption t , labor supply t , savings t+1 , and money holdings t+1 . The utility
function is:
                                1
                                X
(8.4)                                        c
                                         t [ln( ) + ln(1
                                                t          lt)];
                                 t=0
where is a discount factor between zero and one. There is only one good in the economy,
                                                                       y   l
and the consumer can produce the good with the technology t = t , i.e., output equals
labor input.

Monetary policy is conducted in a particularly simple way in this economy. There is no
banking sector that intermediates between the central bank and consumers. Instead, the
central bank hands out money directly to consumers. Monetary policy consists of printing
                                     
money and giving it as a transfer t to each consumer. When the central bank wants to
                                                                   
contract the money supply, it taxes each consumer by making t negative.

             R                                                      P
We will use t to denote the nominal interest rate on savings and t to denote the price of
                                 t           t
the consumption good in period . The time- budget constraint of the consumer is:

(8.5)                 mt+1 + st+1 = mt + (1 + Rt)st + Pt lt + t Ptct:
On the left-hand side are the amounts of money and savings that the consumer carries
                                                             t
into the next period. Therefore they are indexed by + 1. On the right-hand side are
all the receipts and payments during the period. The consumer enters the period with
        m                                        R s
money t and savings plus interest (1 + t ) t , both of which he carries over from the
day before. During the day, the consumer also receives income from selling produced
        Pl                
goods t t and the transfer t from the central bank. The only expenditures are purchases
                          Pc
of the consumption good, t t . All funds that are left after the household purchases the
                                                       s                            m
consumption good are either invested in savings t+1 or are carried forward as money t+1 .

So far, there is no explanation for why the consumer would want to hold money. After all,
savings earn interest, and money does not. In order to make money attractive, we assume
that cash is required for buying the consumption good. The consumer cannot consume his
own production and has to buy someone else’s production in the market with cash. This
introduces a new constraint faced by the consumer: expenditure on consumption goods
62                                                                                    Inﬂation


has to be less than or equal to money holdings:

(8.6)                                        Pt ct  mt:
Since money that is to be used for buying consumption goods has to be put aside one
period before it is spent, equation (8.6) is also called the cash-in-advance constraint, which
explains the name of the model. From here on we will assume that equation (8.6) holds
with equality. This will be the case as long as the nominal interest rate is positive, because
in that situation it is more proﬁtable to invest additional funds in savings instead of holding
them as cash.

In this economy consumption equals output, so the cash-in-advance constraint aggregates
up to be the quantity equation. This formulation implicitly assumes that velocity is one. A
more sophisticated model would incorporate some version of the money-demand model
of Chapter 4, allowing velocity to vary with inﬂation. However, such a model would be
more complicated without adding much to our explanation of the real effects of monetary
policy.

One way of understanding the cash-in-advance constraint is to think of the consumer as
a family consisting of two members, a worker and a shopper. Each morning, the worker
goes to his little factory, works, and sells the production to other consumers. Only late at
night does the worker come home, so the income cannot be used for buying consumption
goods that same day. The shopper also leaves each morning, taking the cash that was put
aside the night before to do that day’s shopping. Since the shopper does not see the worker
during the day, only money that was put aside in advance can be used to make purchases.

The problem of the representative consumer is to maximize utility subject to the cash-in-
advance constraint and the budget constraint:
                                       1
                                       X
                             max
                    fct ;lt ;st+1 ;mt+1 g1
                                                   c             l ;
                                                   t [ln( ) + ln(1
                                                          t        t )] subject to:
                                         t=0 t=0
                                        Pc m;    t t = t and:
                        m       s      m   R s Pl  Pc:
                             t+1 + t+1 = t + (1 + t ) t + t t + t          t t
In this model, the consumer’s problem is much easier to analyze once we have the market-
clearing conditions in place. Therefore we will complete the description of the economy
ﬁrst and derive the optimal decisions of the consumer later.

The next element of the model that needs to be speciﬁed is the monetary policy of the cen-
                                                                  M
tral bank. Instead of looking at aggregate money supply t , we will formulate monetary
                                              m
policy in terms of money per consumer t . This is merely a matter of convenience. We
                                                                          m
could recover the aggregate quantity of money by multiplying t by the number of con-
sumers. However, since we are using a representative consumer, it is easier to formulate
monetary policy on the level of individual consumers in the ﬁrst place. We will assume a
particularly simple policy: the central bank increases the money supply at a constant rate
g. If the central bank wants to increase the money supply, it gives new cash to consumers.
8.3 A Cash-in-Advance Economy                                                                       63


Money supply in the next period is the sum of money supply in the current period and the
                                                                        g
transfer to the consumer. The money supply will grow at rate if the transfer t is given    
    gm
by t =     t , so we have:

                                  mt+1 = mt + t = (1 + g)mt:
To close the model, we have to specify the three market-clearing conditions that must hold
              t
at each date . The constraint for clearing the goods market states that consumption has to
equal production:



                                             ct = lt:
Clearing the credit market requires that total borrowing be equal to total savings. Since
everyone is identical, there cannot be both borrowers and savers in the economy. In equi-
librium savings have to be zero. Therefore the market-clearing constraint is:

                                             st = 0:
In fact, we could omit savings from the model without changing the results. The only
reason that we include savings is that this allows us to determine the nominal interest rate,
which will play an important role in determining the real effects of monetary policy.

Finally, clearing the money market requires that the amount of cash demanded be the
household equals the money supplied by the central bank. Since we use the same sym-
    m
bol t to denote money demand and supply, this market-clearing constraint is already
incorporated in the formulation of the model.

An equilibrium for this economy is an allocation f t t t    c ; l ; s ; mt; tg1t=0 and a set of prices
 P ;R
f t t g1
       t=0 such that:

    Given the prices and transfers, fct ; lt ; st ; mt g1
                                                         t=0 is a solution to the household’s prob-
     lem; and

    All markets clear.
While this setup with inﬁnitely-lived consumers might look complicated, having people
live forever is actually a simpliﬁcation that makes it easy to solve the model. The special
feature of this framework is that the world looks the same in every period. The consumer
always has inﬁnitely many periods left, and the only thing that changes is the amount of
money the consumer brings into the period (savings do not change since they are zero
in equilibrium). The price level turns out to be proportional to the money stock, so the
consumer always buys the same amount of the consumption good. In equilibrium, con-
          c         l                                   R
sumption t , labor t , and the nominal interest rate t are constant. Therefore we will drop
64                                                                                        Inﬂation


                                                R
time subscripts and denote interest by and the optimal choices for consumption and la-
        c     l                                                               c l     R
bor by ? and ? . Of course, we still need to show formally that ? , ? , and are constant.
This result will follow from the ﬁrst-order conditions of the household’s problem. We will
plug in constants for consumption, labor, and interest, and we will be able to ﬁnd prices
such that the ﬁrst-order conditions are indeed satisﬁed. For now, we just assume that ? is    c
constant.

As a ﬁrst step in the analysis of the model, we examine the connection between monetary
policy and inﬂation. This can be done in the same fashion as in the section on the quantity
theory, without solving the consumer’s problem explicitly.

The cash-in-advance constraint with constant consumption ? is:            c
(8.7)                                 Ptc? = mt:
The inﬂation rate  is deﬁned by 1 +  = Pt+1 =Pt . Thus we can derive an equation for
inﬂation by taking the ratio of the equation (8.7) for two consecutive periods:


                                          1+     = PPt+1 = mmt+1 :
                                                       t        t

Now we can use the fact that the money stock grows at a constant rate:


                             1+    = mmt+1t = mtm+t t = (1 +mgt)mt = 1 + g:
Thus the inﬂation rate is equal to the growth rate of money supply. It is not surprising that
we get this result. As in the quantity theory, we assume that velocity is constant. Since the
cash-in-advance constraint is the quantity equation in this model, we had to come to the
same conclusions as the quantity theory.

                                                                              c
The main question that is left is how the level of consumption ? (and hence equilibrium
output) depends on inﬂation and monetary policy. To answer this question, we need to
solve the household’s problem.

We will use the Lagrangian method. The formulation of the Lagrangian differs from the
one we used in the inﬁnite-period model in Section 3.3, because here we multiply the La-
grange multipliers by the discount factor. This alternative formulation does not change re-
                                                                      
sults, and is mathematically more convenient. We use t t for the multiplier on the time-          t
                                                                                 t
cash-in-advance constraint and t t as the multiplier on the time- budget constraint. The
Lagrangian for the household’s problem is:

                       1
                       X
                  L=               c
                              t [ln( ) + ln(1
                                     t          lt) + t(mt Pt ct)
                       t=0
                             +t (mt + (1 + Rt )st + Pt lt + t Pt ct mt+1 st+1 )]:
8.3 A Cash-in-Advance Economy                                                                 65


The ﬁrst-order conditions with respect to t , t , t+1 andc l s              mt+1 are:
(FOC t ) c                                 t1
                                            c
                                            ?
                                                         t(   t + t )Pt = 0;
                                            t
     l
(FOC t )                                     t P
                                                1
                                                   ?+    l
                                                          t
                                                             t t = 0;
                                              1    t
(FOC st+1 )                               
                                      t + t+1
                                        t      R  t+1 (1 + t+1 ) = 0; and:
(FOC mt+1 )                                  
                                          t + t+1 (
                                            t           t+1 + t+1 ) = 0          :
We now guess that in equilibrium, consumption, labor, and interest are constants ? , ? ,    c l
        R
and . If this guess were wrong, we would run into a contradiction later. (Take our word
for it: this is not going to happen.) With consumption, labor, and interest being constants,
the ﬁrst-order conditions simplify to the following expressions:

(8.8)                                         P;
                                               1
                                                 c
                                               ? = ( t + t) t

                                           l P;
                                                  1
(8.9)
                                                1   ? = t t
(8.10)                                         R;
                                            t = t+1 (1 + ) and:
(8.11)                                 :   t = ( t+1 + t+1 )

If we now solve equation (8.9) for t and plug the result into equation (8.10), we get:


                                        l?)Pt = (1 l?)Pt+1 (1 + R); or:
                                       1                       1
                                 (1
                                              Pt+1 = (1 + R):
                                               Pt
The left-hand side equals one plus the inﬂation rate. We determined already that the inﬂa-
tion rate is equal to the growth rate of money supply in this economy. Therefore we can
express the nominal interest rate as:

(8.12)                                     1+    R = 1 +  = 1 + g:
This says that the nominal interest rate                 R
                                           moves in proportion to the growth rate            g of
money. Dividing the nominal interest rate by inﬂation yields the real interest rate :4  r
                                                     r        1+   R = 1:
                                             1+ =
                                                              1+   
This expression should look familiar. It is a version of the Euler equation (3.16) that we
derived for in the inﬁnite-period model of Chapter 3. In the model we are considering here,
consumption is constant, so the marginal utilities drop out. To interpret this equation, keep
  4 See Barro, Chapter 4 for a discussion of real versus nominal interest rates.
66                                                                                                   Inﬂation


in mind that there cannot be any borrowing in equilibrium because there is no one from
whom to borrow. If is low, then consumers are impatient. Therefore the interest rate has
to be high to keep consumers from borrowing.

We still have to trace out the effect of inﬂation on consumption. By using equations (8.8)
and (8.9), we can eliminate the multipliers from equation (8.11):


                                                      l?)Pt = c?Pt+1 :
                                                      1                 1
                                                (1
                                                                               c l
From the goods market-clearing constraint, we know that ? = ? . Therefore we get:
                                                     Pt+1 = 1 c? :
                                                      Pt     c?
The left-hand side is equal to the inﬂation rate (which itself equals the money growth rate).
We can use that fact to solve for ? :       c
                                                 1
                                                    g
                                                     ?        c;
                                       1+ =        ?        c
                                      ?+ ?=     c gc ? so:    c;
(8.13)                                             c? = 1 + g + :
This equation implies that consumption depends negatively on money growth, so con-
sumption and inﬂation move in opposite directions. The intuition for this result is that
inﬂation distorts the incentives to work. Income from labor cannot be used immediately
for purchases of consumption, since consumption goods are bought with cash that has
been put aside in advance. The labor income of today can be spent only tomorrow. When
inﬂation is high, cash loses value over night. The higher inﬂation, the higher are prices
tomorrow, and the fewer consumption goods can be bought for the same amount of labor.
This implies that high rates of inﬂation decrease the incentive to work. Since consumption
is equal to labor in equilibrium, consumption is low as well.

Given this relationship between consumption and inﬂation, which money growth rate
should the central bank choose? In equilibrium, labor and consumption are equal. We
can use this fact to ﬁnd the optimal consumption, and then go backwards to compute the
optimal money growth rate. The utility of consuming and working some constant =                         c l
forever is:5
                            1
                            X
                                        c
                                  t [ln( ) + ln(1         c)] = 1 1 [ln(c) + ln(1 c)]:
                            t=0
                 ĉ
We will use ? to denote the optimal consumption. The ﬁrst-order condition with respect
     c
to is:

                                                                       ĉ? :
                                                        1          1
                                                     0= ?
                                                          ĉ   1
     5 Here we are using the formula for the sum of an inﬁnite geometric series:
                                                                                   P1 a = 1=(1 a).
                                                                                           n
                                                                                     n=0
8.3 A Cash-in-Advance Economy                                                               67


           ĉ
Solving for ? yields:

(8.14)                                      ĉ? = 12 :
                                            ĉ                               g
Equation (8.13) gives us an expression for ? as a function of . Combining this with equa-
                                                                                        g
tion (8.14) yields an equation involving the optimal rate of growth of the money stock ? :

                                      1
                                        =
                                      2 1+ ?+    g               :
                    g
Solving this for ? gives us:

(8.15)                                  g? =             1   :
                                                                     g
Since is smaller than one, this equation tells us that ? is negative: the optimal monetary
policy exhibits shrinking money supply. Using equation (8.12) and our expression for ? ,    g
we can compute the optimal nominal interest rate:

                                R= 1+g = 1+(
                                        ?
                           1+
                                                                 1)
                                                                         =   =1   :
                R
This implies = 0, i.e., the nominal interest rate is zero. The intuition behind this result
is as follows. The inefﬁciency in the model originates with the cash-in-advance constraint.
The consumers are forced to hold an inferior asset, cash, for making purchases. If money
were not needed for buying consumption goods and nominal interest rates were positive,
everyone would save instead of holding cash. But if nominal interest rates were zero,
cash and savings would earn the same return. Because prices fall in the equilibrium we
calculated above, a consumer who holds money can buy more goods with this money
in the future than he can buy now. This implies that the real interest rate on money is
positive. Therefore incentives are not distorted if the nominal interest rate is zero. The
recommendation of setting nominal interest rates to zero is known as the Friedman rule,
after the Chicago economist Milton Friedman, who ﬁrst came up with it. In Section 19.4,
we will derive the Friedman rule once again within a different framework.

To summarize, the main outcomes of the cash-in-advance model are that: (1) the rate of
money growth equals the inﬂation rate; (2) nominal interest rates move in proportion to
inﬂation; and (3) output is negatively related to inﬂation. Empirical ﬁndings in the real
world are consistent with these ﬁndings. The correlation of money growth and inﬂation
was already addressed in the section on the quantity theory. Also, most of the variation in
interest rates across countries can be explained by differences in inﬂation, which supports
the second result. As to the third result, we observe that countries with very high inﬂation
tend to do worse economically than countries with moderate inﬂation. However, within a
set of countries with moderate inﬂation, the evidence is not conclusive.

There are a number of advanced issues concerning monetary policy and inﬂation that we
will pick up later in this book. Chapter 18 is concerned with the coordination of monetary
68                                                                                  Inﬂation


and ﬁscal policy, and in Chapter 19 we will return to the question of optimal monetary pol-
icy. While the prime emphasis of the cash-in-advance model is the inefﬁciency of holding
cash instead of interest-bearing assets, Chapter 19 turns to the issue of expected versus un-
expected inﬂation. You can think of the cash-in-advance model as describing the long-run
consequences of expected inﬂation, while Chapter 19 considers the short-run consequences
of a monetary policy that is not known in advance.

               Variable       Deﬁnition
                    Mt        Aggregate quantity of money or cash
                    Yt        Output
                    Pt        Price level
                    V         Velocity of money
                    t        Inﬂation rate
                              Discount factor of consumer
                    ct        Consumption of consumer
                    lt        Labor of consumer
                1        lt   Leisure of consumer
                    mt        Money or cash per consumer
                    st        Savings of consumer
                    t        Central bank transfer of money to consumer
                    Rt        Nominal interest rate
                    rt        Real interest rate
                    g         Growth rate of money supply


                                Table 8.1: Notation for Chapter 8



Exercises

Exercise 8.1 (Easy)
                                          V
Consider an economy where velocity equals 5, output grows at three percent a year, and
money supply grows at ﬁve percent a year. What is the annual inﬂation rate?

Exercise 8.2 (Hard)
In the quantity theory, we assumed that velocity was constant. In reality, the velocity of
money varies across countries. Would you expect countries with high inﬂation to have
higher or lower velocity than low-inﬂation countries? Justify your answer. (Hint: You
should draw both on Chapter 4 and Chapter 8 to answer this question.)
Chapter 9

Business Cycles

In this chapter we explore the causes of business cycles. Brieﬂy, business cycles are the
recurring ﬂuctuations that occur in real GDP over time. For further descriptions of business
cycles, refer to Barro’s Chapter 9. Here, we concentrate on explaining business cycles. We
begin with an overview of potential explanations. Then we work out a real business cycle
model in detail.

While there are many different theories of business cycles, they share some properties.
There is always a driving force behind economic ﬂuctuations, some sort of shock or distur-
bance that is the original cause of the cycle. In addition, most theories build on a propaga-
tion mechanism that ampliﬁes shocks. Unless the disturbances are already big enough by
themselves to account for the ﬂuctuations, there has to be some propagation mechanism
that translates small, short-lived shocks into large, persistent economic ﬂuctuations.

We will start our search for the cause of business cycles in Section 9.1 by listing a number
of possible shocks and propagation mechanisms. Competing theories of the business cycle
differ in which shocks and mechanisms they emphasize. In Section 9.2 we will concen-
trate on the real business cycle model, which is a straightforward extension of the market-
clearing models that we developed in earlier chapters. Section 9.3 presents simulations for
our real business cycle model and assesses the success of the model in matching real-world
ﬂuctuations.




9.1 Shocks and Propagation Mechanisms

Among the many shocks and disturbances that are present in an economy, only a few
have received special attention in research on business cycles. Here are some of the more
important candidates:
70                                                                           Business Cycles


      Technology shocks: Real-world production functions change over time. New tech-
       nologies like computers or robots alter the production process and raise overall pro-
       ductivity. Sometimes, production facilities break down or do not work as expected,
       so productivity falls. This technological change is not always smooth; it often comes
       in the form of shocks.
      Weather shocks and natural disasters: Many industries like agriculture or tourism
       are weather-dependent. Rainfall and sunshine inﬂuence the output of these sectors,
       so the weather is a a potential source of ﬂuctuations. This is also true for disasters
       like earthquakes or landslides. El Niño is a shock of this kind that received a lot of
       attention lately. We can regard these kinds of shocks as one type of technology shock.
       Weather changes the production function for wheat, and an earthquake that wiped
       out, say, Silicon Valley, would change the production function for computers.
      Monetary shocks: We saw in Chapter 8 on inﬂation that there are real effects of mon-
       etary policy. Therefore random changes to money supply or interest rates are a po-
       tential source of ﬂuctuations as well.
      Political shocks: The government inﬂuences the economy both directly through gov-
       ernment enterprises and indirectly through regulation. Changes in tax laws, antitrust
       regulation, government expenditure and so on are a potential source of disruption in
       the economy.
      Taste shocks: Finally, it is also conceivable that shifts in preferences cause ﬂuctua-
       tions. Fashion and fads change rapidly, and they may cause ﬂuctuations in areas like
       the apparel, music, or movie industries.

While the shocks just mentioned are present to some degree in every economy, they are
probably not large enough to serve as a direct explanation of business cycles. For example,
in the United States real GDP fell by 2.8% between October 1981 and 1982. It is hard to
imagine any shock that caused a direct output loss of almost 3% of GDP within only a year,
and if there was one, we would probably be aware of it. It appears more likely that there
are mechanisms present in the economy that amplify shocks and propagate them through
time. Here are some candidates:

      Intertemporal substitution: Shocks that have a negative impact on productivity
       lower the marginal return to labor and other factors of production. If marginal prod-
       ucts fall, consumer’s might prefer to work less and consume leisure instead. Labor
       input would fall, which ampliﬁes the negative impact on output. At the same time,
       since consumers prefer a smooth consumption proﬁle they might prefer to lower
       savings for some time when a shock hits. On an aggregate level, this leads to lower
       investment and a lower capital stock in the future. Therefore a short-lived shock may
       have an impact in the future as well.
      Sticky prices: Market economies react to changes with price adjustments. For exam-
       ple, a negative productivity shock lowers the marginal product of labor, so that the
9.1 Shocks and Propagation Mechanisms                                                                           71


       real wage would have to move downward to adjust labor demand and supply. But
       if wages are inﬂexible for some reason, the adjustment cannot take place. The result
       is unemployment and an output loss that is larger than the direct effect of the shock.
       Similar effects arise if goods prices are sticky.

     Frictions in ﬁnancial sector: Even small shocks can force the ﬁrms the are hit di-
       rectly into bankruptcy. This will affect other ﬁrms and banks that lent money to the
       now bankrupt ﬁrms. Often additional ﬁrms have to declare bankruptcy, and some-
       times even banks fail. Bank failures affect all creditors and debtors and therefore can
       have large economic consequences. Serious economic crises are often accompanied
       and ampliﬁed by series of bank failures. Examples are the great depression and the
       current Asian crisis.


Business cycle models can be broadly subdivided into two categories. Some theories re-
gard cycles as a failure of the economic system. Because of frictions or imperfections of
the market mechanism, the economy experiences depressions and fails to achieve the efﬁ-
cient level of output and employment. Models of this kind often rely on ﬁnancial frictions,
sticky prices, or other adjustment failures as the propagation mechanism. Both technology
shocks and monetary shocks are considered to be important sources of ﬂuctuations. The
Keynesian model of output determination1 falls into this category.

On the other hand, there is a class of models that regards business cycles as the optimal re-
action of the economy to unavoidable shocks. Shocks are propagated through intertempo-
ral substitution within an efﬁcient market mechanism. Technology shocks are considered
to be the main cause of economic ﬂuctuations. Models of this kind are often referred to as
real business cycle models.2

We can be fairly certain that there is some truth to both views of economic ﬂuctuations.
Major economic breakdowns like the great depression or the recent Asian crisis appear
to be closely connected to disruptions in the ﬁnancial sector. Bank failures and ﬁnancial
instability played an important role in both cases.

On the other hand, most business cycles are far less severe than the great depression or the
Asian crisis. In the entire post-war history of the United States and the Western European
countries there is not a single depression that caused an output loss similar to the one suf-
fered between 1929 and 1933. The question is whether normal business cycles are caused
by the same kind of frictions that caused the great depression. The Keynesian model with
its emphasis on slow adjustments and sticky prices supports this view. Real business cycle
theorists argue that breakdowns like the great depression are a phenomenon distinct from
usual business cycles, and that usual cycles can be explained as the optimal reaction of an
efﬁcient market system to economic shocks.

   1 See Barro, Chapter 20.
   2 The term derives from the fact that shocks in real business cycle theory are real, as opposed to monetary, and

that sluggish nominal adjustment does not play a role as a propagation mechanism.
72                                                                               Business Cycles


In this chapter, we will primarily look for explanations for normal-scale business cycles,
like those experienced in the United States since World War II. How can we determine
whether such cycles are small-scale failures of the economic system rather than simply the
markets’ efﬁcient reactions to shocks? A natural way to answer this question is to build a
number of model economies that include alternative propagation mechanisms, expose the
model economies to shocks, and see whether the outcomes look like real-world business
cycles. This is exactly the road that has been taken by real business cycle theorists. They
have taken standard equilibrium models as a point of departure and exposed them to pro-
ductivity shocks. As it turns out, models of this kind are quite successful at explaining
real-world business cycles. We will now take a closer look at such a real business cycle
model.




9.2 A Real Business Cycle Model

Real business cycle models are straightforward extensions of equilibrium models of the
kind that we use throughout this course. In most cases, the models feature inﬁnitely lived
consumers, and business cycles are generated by random disturbances to production pos-
sibilities. Unfortunately, solving that kind of model is difﬁcult. Often no explicit solution is
available, so numerical approximations have to be used. To keep the presentation tractable,
in this chapter we will use a simpler framework in which people live for two periods only.
The model does not ﬁt the facts as well as a full-scale real business cycle model, but it
serves its purpose as a simple illustration of the main ideas of real business cycle theory.

In the model world there is a sequence of overlapping generations. Each period a new gen-
eration of consumers is born, and each consumer lives for two periods. We will sometimes
refer to the periods as years, and for simplicity we assume that exactly one consumer is
born each year. People work in the ﬁrst period when they are young. In the second period
they are retired and live on savings. Throughout the model, superscripts refer to the year
                                                                                        c
when a person was born, while subscripts refer to the actual year. For example, tt is the
       t                                                                 t
period- consumption of a consumer who was born in year , so such a consumer would be
                  t           c
young in period . Similarly, tt+1 is the consumption of the same consumer in period + 1,    t
when he is old. The consumers do not care about leisure. A consumer born in year has        t
the following utility function:

                                  u(ctt; ctt+1) = ln(ctt) + ln(ctt+1):
We could introduce a discount factor, but for simplicity we assume that the consumers
value both periods equally. Note that at each point of time there are exactly two people
around: one who was just born and is young, and another who was born the year before
and is now retired. In each period the young person supplies one unit of labor and receives
              w
wage income t . The labor supply is ﬁxed, since consumers do not care about leisure. The
                                         k                                   c
wage income can be used as savings t and as consumption tt . The budget constraint of a
9.2 A Real Business Cycle Model                                                               73


young worker is:

                                               ctt + kt = wt;
                                                                                  t
i.e., consumption plus savings equals income from labor. In period + 1 the consumer born
  t                                                                      k
in is old and retired. The old consumer lends his savings t to the ﬁrm. The ﬁrm uses the
                                       r                                              Æ
savings as capital and pays return t+1 to the old consumer. A fraction of the capital wears
out while being used for production and is not returned to the consumer. is a number      Æ
between zero and one, and is referred to as the depreciation rate. The budget constraint for
the retirement period is:

                                       ctt+1 = (1 Æ + rt+1 )kt;
i.e., consumption equals the return from savings.

The household born in period       t maximizes utility subject to the budget constraints, and
takes prices as given:
                                            
                                max
                             ctt ;ctt+1 ;kt
                                               c
                                              c ;
                                              ln( tt ) + ln( tt+1 ) subject to:

                                         c k w; t+ =
                                                t      t      t and:
                                       c     Æ r k:
                                             t = (1
                                             t+1              + t+1 ) t

We can use the constraints to eliminate consumption and write this as:

                             max fln( t
                              kt
                                       w kt ) + ln((1 Æ + rt+1 )kt)g :
This is similar to the problem of the consumer in the two-period credit market economy
that we discussed in Section 3.2. From here on we will drop the practice of denoting opti-
mal choices by superscripted stars, since the notation is already complicated as it is. The
ﬁrst-order condition with respect to t is: k
                                               1           1     Æ + rt+1 :
                                0=
                                           wt kt     +
                                                         (1     Æ + rt+1 )kt
                k
Solving this for t yields:

(9.1)                                              kt = w2t :
Thus, regardless of the future return on capital, the young consumer will save half of his
labor income. Again, this derives from the fact that wealth and substitution effects cancel
under logarithmic preferences. This feature is is helpful in our setup. Since there will
                                                         r
be productivity shocks in our economy and t+1 depends on such shocks, the consumer
                 r
might not know t+1 in advance. Normally we would have to account for this uncertainty
explicitly, which is relatively hard to do. In the case of logarithmic utility, the consumer
                     r
does not care about t+1 anyway, so we do not have to account for uncertainty.
74                                                                          Business Cycles


Apart from the consumers, the economy contains a single competitive ﬁrm that produces
                     k                     l
output using capital t 1 and labor t . Labor is supplied by the young consumer, while the
supply of capital derives from the savings of the old consumer.The rental rate for capital is
r                                  w
 t , and the real wage is denoted t . The production function has constant returns to scale
and is of the Cobb-Douglas form:

                                 f (lt; kt 1 ) = Atlt kt1 1 :
Here is a constant between zero and one, while At is a productivity parameter. At is the
source of shocks in this economy. We will assume that At is subject to random variations
and trace out how the economy reacts to changes in At . The proﬁt-maximization problem
of the ﬁrm in year t is:
                                       n                          o
                             max
                            lt ;kt 1
                                       At lt kt1 1 wt lt rt kt 1 :
                                                kl
The ﬁrst-order conditions with respect to t and t 1 are:

     l
(FOC t )                         At lt 1kt1 1 wt = 0; and:
(FOC kt 1 )                       At (1 )lt kt 1 rt = 0:
                                                                             l
Using the fact that the young worker supplies exactly one unit of labor, t = 1, we can
use these ﬁrst-order conditions to solve for the wage and return on capital as a function of
        k
capital t 1 :

(9.2)                                      wt = At kt1 1 ; and:
(9.3)                                      rt = At(1 )kt 1:
Since the production function has constant returns, the ﬁrm does not make any proﬁts in
                                                                  w    r
equilibrium. We could verify that by plugging our results for t and t back into the ﬁrm’s
                                                                                 A
problem. Note that the wage is proportional to the productivity parameter t . Since t     A
                                                                                 A
is the source of shocks, we can conclude that wages are procyclical: when t receives a
positive shock, wages go up. Empirical evidence suggests that wages in the real world are
procyclical as well.

To close the model, we have to specify the market-clearing constraints for goods, labor, and
                t
capital. At time the constraint for clearing the goods market is:

                         ctt + ctt 1 + kt = Atlt kt1 1 + (1 Æ)kt 1:
On the left hand side are goods that are used: consumption ctt of the currently young
consumer, consumption ctt 1 of the retired consumer who was born in t 1, and savings
kt of the young consumer. On the right hand side are all goods that are available: current
production and what is left of the capital stock after depreciation.

                                                     l
The constraint for clearing the labor market is t = 1, since young consumers always supply
one unit of labor. To clear the capital market clearing we require that capital supplied by
9.2 A Real Business Cycle Model                                                                75


the old consumer be equal to the capital demanded by the ﬁrm. To save on notation, we
                      k
use the same symbol t 1 both for capital supplied and demanded. Therefore the market-
clearing for the capital market is already incorporated into the model and does not need to
be written down explicitly.

In summary, the economy is described by: the consumer’s problem, the ﬁrm’s problem,
market-clearing conditions, and a random sequence of productivity parameters f t g1 t=1 .  A
We assume that in the very ﬁrst period there is already an old person around, who some-
how fell from the sky and is endowed with some capital 0 .       k
Given a sequence of productivity parameters f t g1   At=1 , an equilibrium for this economy is
               c ;c ;k ;l
an allocation f tt tt 1 t 1 t g1
                               t=1 and a set of prices        r ;w
                                                       f t t g1 t=1 such that:

    Given prices, the allocation fctt; ctt 1 ; kt 1 ; lt g1
                                                           t=1 gives the optimal choices by con-
        sumers and ﬁrms; and

    All markets clear.
We now have all pieces together that are needed to analyze business cycles in this economy.
When we combine the optimal choice of savings of the young consumer (9.1) with the
expression for the wage rate in equation (9.2), we get:

(9.4)                                    kt = 21 At kt1 1 :
This equation shows how a shock is propagated through time in this economy. Shocks
   A                                 k
to t have a direct inﬂuence on t , the capital that is going to be used for production
in the next period. This implies that a shock that hits today will lead to lower output
in the future as well. The cause of this is that the young consumer divides his income
equally between consumption and savings. By lowering savings in response to a shock,
the consumer smoothes consumption. It is optimal for the consumer to distribute the effect
of a shock among both periods of his life. Therefore a single shock can cause a cycle that
extends over a number of periods.

Next, we want to look at how aggregate consumption and investment react to a shock. In
the real world, aggregate investment is much more volatile than aggregate consumption
(see Barro’s Figure 1.10). We want to check whether this is also true in our model. First, we
need to deﬁne what is meant by aggregate consumption and investment. We can rearrange
the market-clearing constraint for the goods market to get:

                           ctt + ctt 1 + kt   (1   Æ)kt 1 = Atlt kt1 1 :
                                               t                             Y
On the right-hand side is output in year , which we are going to call t . Output is the
                                                                                 C
sum of aggregate consumption and investment. Aggregate consumption t is the sum of
the consumption of the old and the young person, while aggregate investment t is the   I
76                                                                                                      Business Cycles


difference between the capital stock in the next period and the undepreciated capital in
this period3 :

                              ct + ct 1 + |kt
                              |t {z t }
                                                        (1
                                                             {z
                                                                Æ)kt }1 = |At lt{zkt1 1} :
                                 Ct +                        It         =       Yt :
Consumption can be computed as the difference between output and investment. Using
                         k
equation (9.4) for t yields:

                             Ct = Yt It = Atkt1 1 + (1 Æ)kt 1 kt
                                        = At kt1 1 + (1 Æ )kt 1   At kt1 1
                                                                1
                                                              2
(9.5)                                      =     1
                                                        1
                                                        2
                                                                     Atkt1 1 + (1 Æ)kt 1:
Aggregate investment can be computed as output minus aggregate consumption. Using
equation (9.5) for aggregate consumption yields:
                                                                          
                         It = Yt Ct = At kt1 1               1
                                                                      1
                                                                      2
                                                                               At kt1 1   (1   Æ)kt 1
(9.6)                                 =
                                          1
                                          2
                                           A kt1 1
                                            t                    (1       Æ)kt 1:
                                  C        I
We are interested in how t and t react to changes in the technology parameter t . We                            A
will look at relative changes ﬁrst. The elasticity of a variable with respect to another   x
             y                                                       x
variable is deﬁned the percentage change in in response to a one percent increase in .
                                                     y
                                                                                                                     y
Mathematically, elasticities can be computed as @x@y x . Using this formula, the elasticity of
consumption with respect to t is:     A
                                                                      
                              @Ct At                             1
                                                                          At kt1 1
                                                            Atkt1 1 + (1 Æ)kt 1 < 1;
                                                        1        2
                              @At Ct = 1            1
                                                    2
                                                        


and for investment we get:

                                  @It At =        2 At kt 1
                                                  1     1

                                  @At It 12 At kt1 1 (1 Æ)kt 1 > 1:
It turns out that the relative change in investment is larger. A one-percent increase in t                          A
leads to an increase of more than one percent in investment and less than one percent in
consumption. Investment is more volatile in response to technology shocks, just as real-
world investment is. Of course, to compare the exact size of the effects we would have to
                                            Æ
specify the parameters, like and , and to measure the other variables, like t .                           k
                   It in the model is gross investment, which includes replacement of depreciated capital. The net
     3 More precisely,

difference between capital tomorrow and today kt kt 1 is referred to as net investment.
9.3 Simulations                                                                                                   77


If we look at absolute changes instead of relative changes, the results are less satisfactory.
The absolute change is higher in consumption than in investment, while in the real world it
is the other way around. This failure of the model derives from the fact that people are too
short-lived. In real business cycle models, the smaller variations in consumption relative
to investment result from consumers trying to smooth their consumption. In our model,
the possibilities for smoothing are rather limited. The old person has no more time left
and therefore cannot smooth at all, while the young person has only one more year to go.
Therefore a comparatively large fraction of the shock shows up in consumption. In more-
advanced real business cycle models with inﬁnitely lived consumers, the absolute changes
in consumption are much smaller than the absolute changes in investment.



9.3 Simulations

We can get an even better impression of the business cycle in our model by simulating the
economy. This means that we specify all parameters, start at some initial capital stock, and
generate a series of random shocks. We can use the solutions to the model to compute
consumption, investment, output, and the capital stock in the economy for any number of
periods. Then we can compare the results to real-world business cycles.

There are only two parameters to be speciﬁed in the model, and . Our choices are          Æ
        :            Æ   :
   = 7 and = 05. The choice for matches the labor share in the economy to real
                                              Æ
world data4 , while the value for is an estimate of the actual average depreciation rate
                                                                       k
in an industrialized economy. The initial capital stock 1 was set to .22. The productivity
parameter was generated by:

                                                   At = Ā + t:
        Ā                                                             
Here is the average level of productivity, while the t are random shocks. We set       =                     Ā
                 
1. The t where generated by a computer to be independent over time and uniformly
                                        :;:
distributed on the interval [ 1 1]. Thus the shocks can change productivity by up to ten
percent upward or downward.

Figure 9.1 shows the reactions to a single productivity shock of ﬁve percent. That is, in
                         A                              A
the ﬁrst period t is equal to its average, 1 = 1. In the second period the shock hits,
A            :
  2 = 1 05. From then on,           A
                              t is back to one and stays there. We can see that even this
single shock has an impact that can be felt for a long period of time. Figure 9.1 shows
the absolute deviations of consumption, investment, and capital from their average values.
It takes about eight periods until all variables are back to their average. In the second
period, when the shock takes place, both consumption and investment are up. In period
3 the capital stock is higher because of the higher investment in period 2. At the same
time, investment falls. Consumption is higher than average because the capital stock is
     4 The labor share in an economy is deﬁned to be total wages as a fraction of output. See Chapter 11 to see why

    is equal to the labor share.
78                                                                                                    Business Cycles


higher, even though productivity is back to normal again. From then on, all variables
slowly return to their average values. Note that from period 4 on no one is alive anymore
who was present when the shock took place. The higher investment in the period of the
shock has increased the capital stock, and the effects of that can be felt for a long time.
Thus even a single shock has long-run effects, and investment goes through a full cycle in
response to this shock.

                                                       Response to a Single Shock

                                      0.025


                                       0.02
               Deviation from Trend




                                      0.015                                             Capital
                                                                                        Consumption
                                       0.01
                                                                                        Investment
                                      0.005


                                          0
                                               1   2     3    4     5    6     7    8
                                      -0.005


                                       -0.01

                                                              Periods



                       Figure 9.1: Response to a Five-Percent Productivity Shock



Figure 9.2 shows the same information as Figure 9.1, but variables are divided by their
mean so that we can see the relative changes. Investment is by far the most volatile series.
Compared to investment, the changes in capital and consumption are hardly visible.

By looking at a single shock, we were able to examine the propagation mechanism in iso-
lation and to get an impression of the relative volatility of consumption and investment.
But if we want to compare the model outcomes to real-world business cycles, we need
to generate a whole series of shocks. Figure 9.3 shows such a simulation for our model
economy. The combined effects of many shocks cause an outcome that looks similar to
real-world business cycles. There are booms and depressions, the cycles vary in length
within a certain interval, and investment is more volatile than consumption.

Our simple business cycle model is quite successful in emulating a number of business-
cycle facts. Shape, length, and amplitude of business cycles are comparable to real-world
data, investment is relatively more volatile than consumption, and the wage is procyclical.
More-advanced real business cycle models are even better in matching the facts. By in-
troducing variable labor supply we can generate procyclical employment. Using inﬁnitely
lived consumers would get the absolute changes in consumption and investment right.
9.3 Simulations                                                                                              79


                                                      Response to a Single Shock

                                        2.5



                                         2
                   Relative Deviation




                                        1.5
                                                                                       Capital
                                                                                       Consumption
                                                                                       Investment
                                         1



                                        0.5



                                         0
                                              1   2   3     4     5    6    7      8
                                                            Periods



                Figure 9.2: Relative Changes in Response to a Five-Percent Pro-
                ductivity Shock



State-of-the-art real business cycle models match most business cycle facts, and when fed
with measured productivity shocks, they generate cycles that explain about 70% of the size
of actual business cycles.

This success has led some researchers to the conclusion that business cycles are exactly
what standard economic theory predicts. In the presence of shocks to production possi-
bilities, optimal adjustments of households and ﬁrms within an efﬁcient market system
generate just the pattern of ﬂuctuations that is observed in the real world. From this per-
spective, business cycles are no miracle at all. We would be surprised if there were no
business cycles!

Even though technology shocks combined with efﬁcient markets appear to provide a con-
vincing explanation for business cycles, it cannot be ruled out that other shocks or propa-
gation mechanisms also play a role. After all, real business cycle theory does not account
for 100% of the amplitude of actual business cycles, so there have to be other factors as well.
Other types of shocks can be analyzed within the real business cycle framework. There are
also a number of models that emphasize other propagation mechanisms. The Keynesian
model of output determination is the most prominent example5 but models that combine
monetary shocks with frictions in the ﬁnancial sector have also received a lot of attention
lately. However, so far none of these models matches the ability of the real business cycle
model to mimic actual economic ﬂuctuations.

   5 See Barro’s Chapter 20 for a discussion of that model. For a critique of the real business cycle model from

a Keynesian perspective, try the following article: Mankiw, N. Gregory. 1989. “Real Business Cycles: A New
Keynesian Perspective”. Journal of Economic Perspectives 3(3): 79-90.
80                                                                                                                   Business Cycles


                                                             Many Shocks

                           2.5



                            2
      Relative Deviation




                                                                                                        Capital
                           1.5
                                                                                                        Consumption
                                                                                                        Investment
                            1



                           0.5



                            0
                                   1   2     3   4   5   6      7       8   9   10   11       12   13
                                                             Periods



     Figure 9.3: Capital, Consumption, and Investment with Many
     Shocks


      Variable                             Deﬁnition
           t
           t                c              Consumption of generation when young      t
         t
         t+1               c               Consumption of generation when old        t
          ( )             u               Utility function
                            kt                                      t
                                           Capital saved in and used in + 1               t
                             lt            Labor
                            wt             Wage
                            rt             Rental rate of capital
                           f ()           Production parameter
                            At             Productivity parameter
                                           Parameter in the production function
                           Æ               Depreciation rate
                           Ct              Aggregate consumption
                           It              Aggregate investment
                           Yt              Aggregate output
                                          Random shock


                                             Table 9.1: Notation for Chapter 9
Exercises                                                                                  81


Exercises

The following exercises make up a project that can be done in groups or individually.

Exercise 9.1 (Moderate)
As the word “cycle” indicates, for a long time economists thought of business cycles as reg-
ular, recurrent events. The length and severity of business cycles was thought to be mostly
constant. For example, the typical length of one full cycle (from boom through recession
back to boom) was supposed to be between four and seven years. In this question you will
examine the actual business cycles of a country of your choice and examine whether they
seem to follow a regular pattern.

The ﬁrst thing to do is to get the necessary data. Business cycles are roughly deﬁned as
deviations of real GDP from trend. Therefore you will need to acquire data on real GDP for
some country. A good source is the Penn World Tables, a set of standardized measures of
economic activity for most countries in the world. You can access the World Tables through
a website at the University of Toronto. The address is:


                    http://arcadia.chass.utoronto.ca/pwt/


Once you are there, select “Alphabetical List of Topics”, then “Real GDP per capita in con-
stant dollars using chain index”, then click on the country of your choice (not the United
States), then use the “Submit Query” button to get the data. Load the data into a spread-
sheet, and you are ready to go.

The ﬁrst step is to compute the trend component of GDP. Good methods for computing
the trend of a time series require a relatively high amount of complicated computations.
Therefore we will offer you an ad hoc, quick-and-dirty method of computing the trend.
Once we get to the business cycles, it turns out that this method works sufﬁciently well
                                                                    t
for our purposes. We will use GDPt to denote real GDP at time . The computation of the
trend proceeds in steps:


    Compute the growth rate of GDP for each year. In terms of your spreadsheet, let us
     assume that column A is year and column B is real GDP. The ﬁrst year is in row one.
     Now you can put the growth rates into column C. Put the growth rate from year 1 to
     2 into cell C1, and so on.

    From now on, we are going to apply a method called exponential smoothing to get
     smooth versions of our data. Assume you want to get a smooth version of a times
            x                                 x̂               x̂
     series t . Let us call the smooth version t . Basically, the t are computed as a forecast
                                      x             x̂                          x x̂
     based on past observations of t . The ﬁrst t is set equal to the ﬁrst t : 1 = 1 .     x
     From then on, the forecasts for the next period are computed as an average of the last
                                     x̂
     forecast and the actual value: t+1 =     x̂
                                               t + (1     x) t , where is a number between
82                                                                               Business Cycles


       zero and one. If you plug this formula recursively into itself, you will see that each
       x̂                              x
        t is a weighted average of past t .
                                                                    x̂       x
       Let us now put a smooth growth rate into column D. Since 1 = 1 , the ﬁrst smooth
       value is equal to the original value: D1=C1. For the next value, we apply the smooth-
       ing formula. We recommend that you set to .5: D2=.5*D1+.5*C1. In the same way,
       you can get the other smoothed growth rates. For future reference, We will call the
                            ĝ
       smooth growth rates t .

      In the next step, we are going to apply the same method to real GDP, but additionally
       we will use the smooth growth rates we just computed. This smooth real GDP is
       the trend we are looking for, and we will place it in column E. As before, in the ﬁrst
       year the smooth version is identical to the original one: Trend1 = GDP1 , thus E1=B1.
       From then on, we get the trend in the next period by averaging between the trend
       and the actual value (as before), but also applying the smooth growth rates we just
       computed. If we do not do that, our trend will always underestimate GDP. From year
       two on the formula is therefore:

                                            ĝ :              :
                            Trendt+1 = (1 + t )(0 5)Trendt + (0 5)GDPt   :
       In terms of the spreadsheet, this translates into E2=(1+D1)*(.5*E1+.5*B1), and so on.


This completes the computation of the trend. Plot a graph of GDP and its trend. If the
trend does not follow GDP closely, something is wrong. (Document your work, providing
spreadsheet formulas, etc.)

Exercise 9.2 (Moderate)
Now we want to see the cyclical component of GDP. This is simply the difference between
GDP and its trend. Because we are interested in relative changes, as opposed to absolute
changes, it is better to use log-differences instead of absolute differences. Compute the
cyclical component as ln(GDP) ln(Trend). Plot the cyclical component. You will see
the business cycles for which we have been looking. (Document your work, providing
spreadsheet formulas, etc.)

Exercise 9.3 (Easy)
Now we will examine the cycles more closely. Deﬁne “peak” by a year when the cyclical
component is higher than in the two preceding and following years. Deﬁne “cycle” as the
time between two peaks. How many cycles do you observe? What is the average length
of the cycle? How long do the shortest and the longest cycles last? Do the cycles look
similar in terms of severity (amplitude), duration, and general shape? (Document your
work, providing spreadsheet formulas, etc.)

Exercise 9.4 (Moderate)
Having seen a real cycle, the next step is to create one in a model world. It turns out that
doing so is relatively hard in a model with inﬁnitely lived agents. There we have to deal
with uncertainty, which is fun to do, but it is not that easy as far as the math is concerned.
Exercises                                                                                     83


Therefore our model world will have people living for only one period. In fact, there is just
one person each period, but this person has a child that is around in the next period, and
                                                                          c
so on. The person, let us call her Jill, cares about consumption t and the bequest of capital
kt+1 she makes to her child, also named Jill. The utility function is:

                                             c
                                          ln( t ) +   A ln(kt+1);
where   A> 0 is a parameter. Jill uses the capital she got from her mother to produce
              c                   i
consumption t and investment t , according to the resource constraint:
                                                      p
                                          ct + it = Bkt + t;
where   B>                            
            0 is a parameter, and t a random shock to the production function. The shock
                                                                
takes different values in different periods. Jill knows t once she is born, so for her it is just
a constant. The capital that is left to Jill the daughter is determined by:

                                          kt+1 = (1 Æ)kt + it;
                         Æ
where the parameter , the depreciation rate, is a number between zero and one. This just
means that capital tomorrow is what is left over today after depreciation, plus investment.

Compute Jill’s decision of consumption and investment as a function of the parameters t ,     k
    
and t .

Exercise 9.5 (Moderate)
If we want to examine the behavior of this model relative to the real world, the next step
would be to set the parameters in a way that matches certain features of the real world.
Since that is a complicated task, we will give some values to you.                B
                                                                      is a scale parameter
and does not affect the qualitative behavior of the model. Therefore we set it to     = 1.B :
Æ is the depreciation rate, for which a realistic value is = 05.    Æ :       A
                                                                   determines the relative
        c     k                                                       A
size of t and t in equilibrium. A rough approximation is = 4. Using these parameters,
                             c    i                       
compare the reactions of t and t to changes in t . (Use calculus.)

Exercise 9.6 (Moderate)
In the last step, you will simulate business cycles in the model economy. All you need to
                    k                                                             
know is the capital 1 at the beginning of time and the random shocks t . As a starting capi-
        k     :
tal, use 1 = 3 7. You can generate the random shocks with the random number generator in
your spreadsheet. In Excel, just type “=RAND()”, and you will get a uniformly distributed
random variable between zero and one. Generate 50 such random numbers, and use your
              c      i
formulas for t and t and the equation for capital in the next period, t+1 = (1        k   Æk i
                                                                                    ) t + t,
to simulate the economy. Plot consumption and investment (on a single graph). How does
the volatility of the two series compare? Plot a graph of GDP, that is, consumption plus in-
vestment. How do the business cycles you see compare with the ones you found in the real
world? You don’t need to compute the length of each cycle, but try to make some concrete
comparisons.
84                                                                          Business Cycles


Exercise 9.7 (Easy)
Read the following article: Plosser, Charles. 1989. “Understanding Real Business Cycles”.
Journal of Economic Perspectives 3(3): 51-78. Plosser is one of the pioneers of real business
cycle theory. What you have done in the previous exercises is very similar to what Plosser
does in his article. His economy is a little more realistic, and he gets his shocks from the
real world, instead of having the computer draw random numbers, but the basic idea is
the same.

Describe the real business cycle research program in no more than two paragraphs. What
question is the theory trying to answer? What is the approach to answering the question?

Exercise 9.8 (Moderate)
What does Plosser’s model imply for government policy? Speciﬁcally, can the government
inﬂuence the economy, and is government intervention called for?
Chapter 10

Unemployment

The study of unemployment is usually cast as the study of workers. Several theories seek
to explain why the labor market might not clear at a particular wage. Among these are
“search” models, in which unemployed people are in the process of looking for work. One
such model is presented in Chapter 10 of the Barro textbook. More-sophisticated theo-
ries attempt to explain unemployment as the breakdown in a matching process between
workers and jobs. Public discussions of unemployment often conﬂate the two.

In this chapter we will discuss some exciting new research on the statistical characteristics
of jobs and employment in the United States. We will not attempt to provide theoretical ex-
planations for the observed statistical patterns; rather, we will concentrate on the statistics
themselves. The primary source for the material in this chapter is Job Creation and Destruc-
tion, by Davis, Haltiwanger, and Schuh.1 Hereafter, we will refer to this book simply as
“DHS”. The book synthesizes research based on some important data sets regarding jobs
and employment. This chapter can provide only a very broad outline of the book, and the
interested reader is strongly encouraged to obtain his or her own copy. The book is short,
accessible, and every page contains something worth knowing.

The authors use two previously untapped sets of data regarding manufacturing employ-
ment in the United States. They present evidence that the main statistical regularities of
their data sets are also present in service industries and across countries. The data sets give
them the number of jobs (deﬁned as ﬁlled employment positions) at different establishments
(roughly, factories) over time. Most importantly, they are able to track gross job ﬂows over
time, i.e., how many jobs are created and how many are destroyed at each establishment.
Standard measures track only net job ﬂows, i.e., the difference between the number created
and the number destroyed. It turns out that net ﬂows conceal an enormous amount. For

  1 The complete citation is: Davis, Steven J., John C. Haltiwanger, and Scott Schuh. Job Creation and Destruction.

Cambridge, Mass.: MIT Press. 1996.
86                                                                             Unemployment


example, if we knew that the number of jobs in the U.S. grew 3% from 1998 to 1999, from
say 100 million to 103 million, we would know the net change in jobs, but nothing about
the gross changes in jobs. How many jobs were created? How many destroyed? Until
DHS, there were simply no good answers to those questions.

The authors ﬁnd that in a typical year 10% of jobs are created and that a roughly equal
number are destroyed. The authors are also able to track job creation and destruction over
the business cycle, and they ﬁnd that job creation falls slightly during recessions, whereas
job destruction grows strongly. Their data sets contain information about the nature of
the establishments, so they are able to track job creation and destruction by employer and
by factory characteristics. They convincingly explode one of the shibboleths of modern
American political discourse: the myth of small-business job creation. It turns out that
most jobs are created (and destroyed) by large, old plants and ﬁrms. This insight alone
makes the book worth reading.

We begin with a primer on the notation used in DHS and then turn to a brief overview of
the main conclusions of the book.




10.1 Job Creation and Destruction: Notation

Basic Notation

Variables in DHS can take up three subscripts. For example, the total number of ﬁlled
                                               X               e
employment positions at a plant is denoted est , where denotes the establishment (that is,
           s                                                               t
the plant), denotes the sector (for example, the garment industry) and denotes the time
period (usually a speciﬁc year). If you ﬁnd this notation confusing, ignore the differences
                                e     s
among the ﬁrst two subscripts and and just think of them as denoting the same thing:
establishments. Capital letters will denote levels and lower-case letters will denote rates.
The words “plant” and “establishment” mean the same thing. A job is deﬁned as a ﬁlled
employment position; no provision is made for considering unﬁlled positions.

Jobs are created when a plant increases the number of jobs from one period to the next,
while jobs are destroyed when a plant decreases the number of jobs from one period to the
next. Gross job creation is the sum of all new jobs at expanding and newly-born plants, while
gross job destruction is the sum of all the destroyed jobs at shrinking and dying plants. Let
X                                                     e            s   t         S
  est denote the number of jobs at establishment in sector at time , and let t+ be the set
of establishments that are growing (i.e., hiring more workers) between periods       t     t
                                                                                     1 and .
Then gross job creation is:
                                             X
                                     Cst =           Xest ;
                                             e2St+
10.1 Job Creation and Destruction: Notation                                                  87


where   is the difference operator:
                                  Xest  Xest Xes;t 1 :
In words, Cst is the total number of new jobs at expanding and newly born plants in sector
s between periods t 1 and t. Next we turn to job destruction. Let St be the set of
establishments that are shrinking between periods t 1 and t. Then gross job destruction
is:
                                                X
                                       Dst =          jXest j:
                                               e2St
          D
In words, st is the total number of all the jobs lost at shrinking and dying plants in sector
s between periods   t          t                                                  D
                       1 and . The absolute-value operator guarantees that st will be a
positive number.

Next, we need a measure for the size of a plant. DHS use the average number of jobs
                                                                         e
between the current period and the last. For some establishment in sector at time , s         t
                    Z
DHS deﬁne its size est as follows:

                                    Zest  12 Xest + Xes;t 1  :
Notice that the size in period     t contains employment information for both periods t and
t  1.

Suppose we discover that ten-thousand jobs were created in the mining sector in 1996. In
                                            C
our notation, we would write that as: m;1996 = 10,000, where         mis for “mining”. This
information would be more useful if compared with some measure of the number of jobs
already present in the mining sector, which is what we call a rate. Then we could say, for
example, that the gross rate of job creation in the mining sector was 10% in 1996.

The rate of employment growth at the plant level is deﬁned as:

(10.1)                                  gest = XZest :
                                                   est

Let Zst be the sum of all the plant sizes in sector s. Then the rate of job creation in a sector
is deﬁned as:

(10.2)                                      cst = CZstst :
The rate of job destruction is deﬁned similarly:

(10.3)                                    dst = DZstst :
Notice that if some plant i dies between t 1 and t (so that Xi;t 1 > 0 but Xit = 0), then
the growth rate of the plant will be git = 2, while if plant i is born in t (so that Xi;t 1 = 0
and Xit > 0), then the growth rate of the plant will be git = 2.
88                                                                                                  Unemployment


A Simple Example

                                                                                 P P
Consider an economy with only one sector and three plants, 1 , 2 , and 3 . The following        P
tables list the total employment ﬁgures for these three plants as well as: the gross levels
of job creation and destruction at the plant level, average plant size, and gross rates of job
creation and destruction.


                               Year   XP ;t XP ;t XP ;t
                                               1              2         3      Total
                               1991           200            100         0      300
                               1992             0            300       200      500



                                Plant     i            P1         P2    P3    Total
                                Z i;1992            100       200      100     400
                               X i;1992           -200       200      200     200
                                C i;1992               0      200      200     400
                                D i;1992            200         0        0     200
                                g i;1992            -2.0      1.0      2.0



                  P
Notice that plant 1 died between 1991 and 1992, so its growth rate was 2, the same as
                                                                       P
it would have been for any plant that died. Plant 3 was born between 1991 and 1992,
so its growth was 2, the same as it would have been for any plant that was born. This is
because of the somewhat non-standard deﬁnition of plant size chosen by DHS. (See equa-
tion (10.1).) The economy went from 300 jobs in 1991 to 500 jobs in 1992, so it added 200
net jobs. However, two plants expanded, adding 200 jobs each, while one plant contracted,
destroying 200 jobs. Thus gross job creation was 400 jobs, and gross job destruction was
200 jobs.

                  Z
In 1992 the sizes i;1992 of the three plants were 100, 200, and 100 jobs, respectively, so
                           Z                    +
the aggregate plant size 1992 was 400. Recall, 1992               S
                                                    is the set of plants that were growing
                              +
                               S                   ;
between 1991 and 1992, so 1992 = f2 3g. The rate of job creation 1992 for this economy  c
was:
                                              P
                                                             Xi;1992
                      c1992 = CZ1992               i2S1992                   200 + 200
                                                                                            :
                                                      +
                                1992
                                     =
                                                        Z1992           =
                                                                                400
                                                                                       =1


                 S
Now, recall that 1992 was the set of plants that were shrinking between 1991 and 1992.
Using the same formulation, we can calculate the economy-wide rate of job destruction as:
                                          P
                                               i2S1992 j     Xi;1992j j
                      d1992 = DZ 1992 =                 Z1992         =
                                                                                200j
                                                                               400
                                                                                     =05::
                                1992
10.1 Job Creation and Destruction: Notation                                                        89


Job Reallocation, Net Job Creation, and Persistence

    R
Let st be the sum of the number of jobs created and the number of jobs destroyed in sector
sbetween periods        t        t             R
                       1 and . We call st the level of job reallocation in sector at time .s       t
Formally:

                                            Rst = Cst + Dst :
            R
Note that st is an upper bound for the number of workers who have to switch jobs to
accommodate the redistribution of employment positions across plants.

We deﬁne the employment status of a citizen to be: “employed”, “unemployed”, or “not in
the workforce”. With that in mind, consider the previous example. For that one-sector
economy, 600 jobs were reallocated. Imagine that all of the 400 newly created positions
were ﬁlled with workers just entering the workforce and that none of the workers at the
200 destroyed jobs found employment. Then 600 workers changed employment status. Of
course, if some of the workers at the 200 destroyed jobs had been hired to ﬁll the newly
created jobs, then the number of workers changing employment status would have been
lower.

As before, we convert the level of job reallocation into a rate by dividing by our measure
                Z                                                         s        t
of plant size st . Formally, the rate of job reallocation in sector at time is deﬁned as:

                                rst  RZstst = CstZ+stDst = cst + dst :
Let NETst be the difference between the gross levels of job creation and destruction in
        s
sector at time :    t
                                        NETst = st C      Dst :
This is the net level of job creation. Note that when job destruction is greater than job
creation, NETst will be negative. In the simple example above, NET1992 = 200. Let netst be
                                        s           t
the net rate of job creation in sector at time . Formally:

                                            netst = cst dst :

Now we are interested in creating a measure of the persistence of the changes in employ-
ment levels at establishments. We will ﬁrst deﬁne a simple counting rule for determining
                                                                              j
how many of the new jobs created at a plant are still present after periods, where is an       j
integer greater than or equal to one. Consider some plant in year  i           t
                                                                         1 with i;t 1 = 100X
    X                       C
and it = 110. Thus it = 10, i.e., ten jobs were created (in gross) at plant in year .t i
Now consider the future year t + j . If employment Xi;t+j at plant i in the year t + j is 105,
we say that ﬁve of the new jobs created at plant i in the year t have survived for j periods.
If Xi;t+j  99, we say that zero of the new jobs have survived. If Xi;t+j  110, we say that
all ten of the new jobs have survived.
90                                                                                     Unemployment


  Æ j                                                           i            t
Let it ( ) be the number of new jobs created at plant in year that have survived to year
t j                                                                                    P j
  + , using the counting rule deﬁned above. The level of job persistence itc ( ) at plant                i
                 t      t j
between periods and + is deﬁned as the number of jobs created in year that exist in      t
                          t t j
all of the periods between and + . Formally:

                          Pitc (j ) = min fÆit(1); Æit(2); : : : ; Æit(j )g :
The rate of job persistence can be calculated by summing over all new and expanding
                       t                                                 t
establishments at time and dividing by gross job creation at . Using the fact that we have
        S
deﬁned t+ to be the set of growing plants, we formally deﬁne the rate of job persistence as
follows:

                                        p j
                                     c( ) =
                                            X c( )
                                                  it    P j:
                                     t
                                            i2St+ st
                                                         C
Now we work through an example in order to ﬁx ideas. The following chart gives employ-
                                                       X
ment levels for a ﬁrm between 1990 and 1995. t denotes the number of jobs at the plant
            t
in the year , where all other subscripts have been dropped for convenience, and 1991 ( )         Æ   j
gives the number of jobs created in 1991 that still exist in the period + .      t j
                     Year     Employment           Persistent jobs from 1991
                     1990     X1990 = 100                      —
                     1991     X1991 = 110                      —
                     1992     X1992 = 109                   Æ
                                                           1991 (1) = 9
                     1993     X1993 = 108                   Æ
                                                           1991 (2) = 8
                     1994     X1994 = 107                   Æ
                                                           1991 (3) = 7
                     1995     X1995 = 108                   Æ
                                                           1991 (4) = 8



We see that for this plant there were seven jobs that were created in 1991 and were also
present in all periods from 1991 to 1995. Accordingly, 1991         P
                                                          c (4) = 7. The subtle point is that
one of the jobs of the 108 in 1995 was not one of those created in 1991.


Worker Reallocation and Excess Job Reallocation

                                                                t
We deﬁne the level of worker reallocation WRt at time to be the number of workers who
change employment status or place of employment between periods                    t
                                                                         1 and . There       t
is no way to extract WRt precisely from the data, since the data concentrate on jobs, not
workers. However, we can provide upper and lower bounds on WRt from the data on
jobs.

                                R
Our job reallocation measure t may overstate the number of workers who change status
or position. Consider a worker whose job is destroyed and then ﬁnds employment later
within the sample period at a newly created job. This worker is counted twice in calculating
10.2 Job Creation and Destruction: Facts                                                     91


Rt. Only in the special case that all ﬁred workers fail to ﬁnd reemployment in the survey
period would WRt = Rt . Hence Rt provides an upper bound on WRt .

The minimum bound on WRt is maxfCt ; Dt g. That is, if 75 jobs were created economy-
wide and 50 were destroyed, we know that at least 75 workers had to change employment
status or place of employment. Imagine that all 50 workers whose jobs were destroyed
found employment at the newly created jobs. Then 25 other workers would have had
to be drawn in to ﬁll the remaining 25 new jobs. Hence the 50 ﬁred workers changed
place of employment and the 25 new workers changed employment status, moving from
unemployed to employed.




10.2 Job Creation and Destruction: Facts

In this section we sketch brieﬂy only the high points of the results in DHS. To answer the
exercises at the back of this chapter, you will need to consult the text directly.

Over the sample period 1973-1988, the net manufacturing job creation rate ( t    c dt ) aver-
aged -1.1%. This basic fact obscures the variation of job creation and destruction over the
business cycle, by industry and by plant characteristic. In this section, we hit some of the
high points.

                                             d
The average annual rate of job destruction t in manufacturing was 10.3%, and the average
                    c
rate of job creation t was slightly lower at 9.1%, so the average rate of job reallocation was
19.4%. The rate of job creation hit a peak of 13.3% in the recovery year of 1984, while the rate
of job destruction peaked at 14.5% and 15.6% in the recession years of 1982-83. This points
to the striking cyclical nature of job creation and destruction: in recessions job destruction
spikes well above its mean, while job creation does not fall that much. Moreover, most of
the job creation and destruction is concentrated in plants that open or close, rather than in
plants that change size.

When DHS look at gross job ﬂows across industries, they ﬁnd that rates of job reallocation
are uniformly high, i.e., all industries create and destroy lots of jobs. However, high-wage
industries tend to have smaller gross job ﬂows than low-wage industries. Finally, they ﬁnd
that the degree to which an industry faces competition from imports does not signiﬁcantly
affect job destruction. (For your information, imports make up less than 13% of the market
for 80% of U.S. industries.)

Examining gross job ﬂows by employer characteristics reveals that most jobs are not cre-
ated by small business but rather by large, old ﬁrms. The pervasive myth of small-business
job creation is fed by bureaucratic self-interest and by some elementary statistical errors.
Understanding these errors is an instructive exercise in its own right and one of the most
interesting parts of the DHS book.
92                                                                                            Unemployment


                Variable    Deﬁnition
                  Xest      Number of ﬁlled employment positions (jobs) at
                                      e     s
                            plant , sector , period   t
                   St+
                            Set of plants that grew between periods 1 and     t
                            t
                   St+      Set of plants that shrunk between periods      1      t
                            and   t
                  Cst       Gross job creation
                  Dst       Gross job destruction
                  Zest                                        e
                            Size of employment of plant , sector , period s               t
                  gest      Plant-level rate of employment growth
                  cst       Rate of job creation
                  dst       Rate of job destruction
                  Rst       Level of job reallocation
                  rst       Rate of job reallocation
                 NETst                                    s
                            Net jobs created in sector at time    t
                 netst                                                s
                            Net rate of creation of jobs in sector at time            t
                  P j
                  c
                  t( )                                                    t
                            The number of jobs created in period still pres-
                                  j
                            ent periods later
                  pct(j )   Rate of the persistence of job creation
                  WRt       Level of worker reallocation


                                Table 10.1: Notation for Chapter 10


Finally, we touch on one last insight. Well-diversiﬁed plants tend to be more likely to sur-
vive recessions than single-output plants. This makes sense, since by producing a portfolio
of products, a plant can spread the risk that a recession will completely stop demand for
all of its output.



Exercises

Exercise 10.1 (Moderate)
Answer: True, False, or Uncertain, and explain.


     1. “Did you know that America’s 22 million small businesses are the principal source
        of new jobs?” (Source: Web page of the Small Business Administration.)

     2. “In the next century, 20% of the population will sufﬁce to keep the world economy
Exercises                                                                                93


     going.... A ﬁfth of all job-seekers will be enough to produce all the commodities
     and to furnish the high-value services that world society will be able to afford” the
     remaining 80% will be kept paciﬁed by a diet of “Tittytainment”. (Source: Martin,
     Hans-Peter and Harald Schumann. The Global Trap. New York: St Martin’s Press.
     1996.)
Exercise 10.2 (Easy)
The plant-level rate of employment growth is deﬁned as:

                                         gest = X
                                                 Z ;
                                                   est
                                                     est
where:
                                   Xest = Xest Xes;t 1 :
That is, Xest is the change in employment at plant e in sector s from t 1 to t. Show that
gest = 2 for all plants that are born between t 1 and t, and show that gest = 2 for all
plants that die between t 1 and t.

Exercise 10.3 (Easy)
Show the following:
                                        X  est 
                                              Z gest ; and:
                               cst =           Zst
                                       e2S +

                                            X  Zest 
                                                       gest :
                                            e2S Zst
                                    netst =

   c                                                                s
Here st is the average rate of job creation of all plants in sector . What does the term
Z =Z
 est st mean?
Exercise 10.4 (Moderate)
For the purposes of this exercise, assume that you have data on annual national job creation
C                       D
  t and job destruction t for  N    years, so = 1t         : : :N
                                                        . Show that if annual national job
            R
reallocation t and net job creation NETt have a negative covariance, then the variance of
job destruction must be greater than the variance of job creation. Recall the deﬁnition of
                               X                               N
variance of a random variable for which you have observations, f i gN   x  i=1 :
                                                   N
                                                 1 X
                                       X
                                   var( ) =
                                               N i=1 (xi x̄) ;
                                                            2



       x̄               X
where is the mean of . Similarly, recall the deﬁnition of the covariance of two variables
X      Y               N
  and . If there are observations each, f i i gN x ;y
                                                i=1 , then:
                                                 N
                                                 X
                            cov(   X; Y ) = N1( i    x x̄ y ȳ :
                                                  )( i   )
                                          i=1
                                                           R
These deﬁnitions and the deﬁnitions of NETt and t provide all the information necessary
to answer this exercise.
94                                                                                    Unemployment


Exercise 10.5 (Easy)
Consider the employment statistics in chart below. Compute each of the following ﬁve
                                                                c
measures: (i) the economy-wide rate of job creation t ; (ii) the economy-wide rate of job
              d
destruction t ; (iii) the net rate of job creation nett ; (iv) the upper bound on the number of
workers who had to change employment status as a result of the gross job changes; and
(v) the lower bound on the number of workers who had to change employment status as a
result of the gross job changes for each each of the years 1991, 1992, 1993, 1994, and 1995.



                     Year   X 1;t   X 2;t   X   3;t   ct   dt       netst   UB   LB

                     1990   1000        0   500

                     1991    800     100    800

                     1992   1200     200    700

                     1993   1000     400    600

                     1994    800     800    500

                     1995    400    1200    600

                     1996    200    1400    600

                     1997       0   2000    500

Exercise 10.6 (Moderate)
For each of the following statements, determine if it is true, false or uncertain and why. If
possible, back your assertions with speciﬁc statistical evidence from DHS.

     1. Foreign competition is destroying American manufacturing jobs.
     2. Robots and other capital improvements are replacing workers in factories.
     3. Most job creation occurs at plants that grow about 10% and most job destruction
        occurs at plants that shrink about 10%.
     4. Diversiﬁed plants are better able to withstand cyclical downturns.
     5. Every year, high-wage manufacturing jobs are replaced by low-wage manufacturing
        jobs.
Chapter 11

Economic Growth

This chapter examines the determinants of economic growth. A startling fact about eco-
nomic growth is the large variation in the growth experience of different countries in re-
cent history. Some parts of the world, like the United States or Western Europe, experi-
enced sustained economic growth over a period of more than 100 years, so by historical
standards these countries are now enormously wealthy. This is not only true in absolute
terms (i.e., GDP), but also if we measure wealth as income per capita (i.e., GDP per person).
In contrast, there are countries where even today large parts of the population live close
to the subsistence level, much the same as Europeans and Americans did some hundreds
of years ago. Also, a group of countries that used to be relatively poor around the time of
World War II managed to achieve even higher growth rates than the western industrialized
countries, so their per capita incomes now approach those of western countries. Most of
the members of this group are located in East Asia, like Japan, Singapore, Hong Kong, and
so on.

It proves to be difﬁcult to explain these different growth experiences within a single model.
There are models that provide an explanation for the growth experience of the now indus-
trialized countries, but most of these models fail to explain why much of the world is still
poor. Models that seek to explain the difference between rich and poor countries are less
successful at reproducing the growth facts for industrialized countries. We will therefore
approach the topic of economic growth from a number of different angles. In Section 11.1
we present a number of facts about economic growth, facts that we will seek to explain
with our growth models. Section 11.2 introduces the Solow growth model, a classic in the
theory of economic growth. This model is quite successful at matching a number of facts
about growth in industrialized countries. Section 11.3 introduces growth accounting, an
empirical application of the Solow framework. This kind of accounting can be used to de-
termine the sources of growth for a given country. In Section 11.4 we turn to the question
why some countries are still poor today. A complete answer to this question is beyond the
scope of this book; in fact, it is fair to say that a satisfactory answer has not been found yet.
96                                                                         Economic Growth


Therefore we concentrate on only one important aspect of the growth experience of poor
countries: the relationship between fertility, human capital, and growth.




11.1 Growth Facts

If we look at the group of industrialized countries only, we can identify a number of empir-
ical regularities in the growth process. The British economist Nicholas Kaldor summarized
these regularities in a number of stylized facts. Although he did that more than 50 years
ago, the Kaldor facts still provide an accurate picture of growth in industrialized countries.
Kaldor’s ﬁrst observation was that both output per worker and capital per worker grow
over time. They also grow at similar rates, so the ratio of the aggregate capital stock to
output or GDP does not change much over time. The return to capital, i.e., the interest that
ﬁrms have to pay if they rent capital, is almost constant over time. Finally, the labor share
and capital share are almost constant. The labor share is the fraction of output that goes to
workers in the form of wages; it is computed as aggregate labor income divided by GDP.
Similarly, the capital share is given by aggregate payments to capital divided by GDP. No-
tice that the Kaldor facts hold even if we consider long periods of time. For example, the
capital-output ratio and the return to capital are not much different now from what they
were 100 years ago, even though output is much higher now and the goods produced and
the general technology have changed completely.

In addition to the Kaldor facts, another important fact about growth in the industrialized
world is the convergence of per capita GDP of different countries and regions over time.
For example, the relative difference in per capita GDP between the southern and northern
states in the United States has diminished greatly since the Civil War. Similarly, countries
like Germany and Japan that suffered greatly from World War II have grown fast since the
war, so today per capita income in the United States, Japan, and Germany are similar again.

There are no empirical regularities comparable to the Kaldor facts that apply to both indus-
trialized and developing countries. However, we can identify some factors that distinguish
countries that went through industrialization and have a high income today from countries
that remained relatively poor. An explanation of the role of such factors might be an im-
portant step toward understanding the large international differences in wealth. We are
going to focus on the relationship between growth and fertility. Every now industrialized
country has experienced a large drop in fertility rates, a process known as the demographic
transition. All industrialized countries have low rates of population growth. Without im-
migration countries like Germany and Japan would actually shrink. Two centuries ago,
fertility rates were much higher, as they are in most developing countries today. Today,
almost all of the growth in world population takes place in developing countries. We will
come back to these observations in the section on fertility and human capital, but ﬁrst we
present a model that accounts for the stylized facts about growth in developed countries.
11.2 The Solow Growth Model                                                                  97


11.2 The Solow Growth Model

A natural starting point for a theory of growth is the aggregate production function, which
relates the total output of a country to the country’s aggregate inputs of the factors of
production. Consider the neoclassical production function:

(11.1)                                Yt = (AtLt) Kt1 1 :
We used a production function of this form already in the chapter on business cycles. Out-
                                             L                                K
put depends on the aggregate labor input t , the aggregate capital input t 1 , and a pro-
                     A
ductivity parameter t . Of course, it is a simpliﬁcation to consider only three determinants
of output. We could include other factors like land or environmental quality, and our fac-
tors could be further subdivided, for example by distinguishing labor of different quality.
It turns out, however, that a production function of the simple form in equation (11.1) is
all we need to match the stylized facts of economic growth. The production function equa-
tion (11.1) exhibits constant returns to scale, which means that if we double both inputs,
output also doubles. Our choice of a constant-returns-to-scale production function is not
by accident: most results in this section hinge on this assumption.

                                                                         Y
Equation (11.1) indicates the potential sources of growth in output t . Either the inputs
L        K                                  A
  t and t 1 must grow, or productivity t must grow. If we want to explain economic
growth, we need a theory that explains how the population (i.e., labor), the capital stock,
and productivity change over time. The best approach would be to write down a model
where the decisions of ﬁrms and households determine the changes in all these variables.
The consumers would make decisions about savings and the number of children they want
to have, which would explain growth in capital and population. Firms would engage in
research and development, which would yield a theory of productivity growth. However,
doing all those things at the same time results in a rather complicated model.

The model that we are going to present takes a simpler approach. Growth in productivity
and population is assumed to be exogenous and constant. This allows us to concentrate
on the accumulation of capital over time. Moreover, instead of modeling the savings de-
cision explicitly, we assume that consumers invest a ﬁxed fraction of output every period.
Although these are quite radical simpliﬁcations, it turns out that the model is rather suc-
cessful in explaining the stylized facts of economic growth in industrialized countries. It
would be possible to write down a model with optimizing consumers that reaches the same
conclusions. In fact, we wrote down that model already: the real business cycle model that
we discussed in Chapter 9 used a neoclassical production function, and the optimal de-
cision of the consumers was to invest a ﬁxed fraction of their output in new capital. To
keep the presentation simple, we will not go through individual optimization problems;
instead, we will assume that it is optimal to save a ﬁxed fraction of output. There are a
number of names for the model. It is either referred to as the Solow model after its inventor
Robert Solow, or as the neoclassical growth model after the neoclassical production function
it uses, or as the exogenous growth model after the fact that there is no direct explanation for
productivity growth.
98                                                                         Economic Growth


The law of motion for a variable describes how the variable evolves over time. In the Solow
model, the law of motion for capital is:

(11.2)                               Kt = (1 Æ)Kt 1 + It ;
         I                   Æ
where t is investment and is the depreciation rate, which is between zero and one. We
assume that investment is a ﬁxed fraction 0 <s<1 of output:

                                It = sYt = s(AtLt) Kt1 1 :
Productivity and labor grow at ﬁxed rates  and :

                                  At+1 = (1 + )At; and:
                                  Lt+1 = (1 + )Lt:
We now have to ﬁnd out how the economy develops, starting from any initial level of
         K
capital 0 , and then check whether the model is in line with the stylized facts of economic
growth in industrialized countries.

We assume that there is a competitive ﬁrm operating the production technology. We can
check one of the stylized facts, constant labor and capital share, just by solving the ﬁrm’s
problem. The proﬁt maximization problem of the ﬁrm is:
                                 n                                o
                          max ( t t )
                         Lt ;Kt 1
                                     A L Kt1 1 wtLt rtKt 1 :
The ﬁrst-order conditions with respect to labor and capital yield formulas for wage and
interest:

(11.3)                           wt = At Lt 1Kt1 1 ; and:
(11.4)                            rt = (1 )(AtLt) Kt 1:
We can use these to compute the labor and capital shares in the economy:

                            wt Lt = At Lt 1Kt1 1 Lt = ; and:
                              Yt     (At Lt ) Kt1 1
                        rt Kt 1 = (1 )(AtLt) Kt 1Kt 1 = 1 ;
                           Yt         (At Lt ) Kt1 1

so the labor share is , and the capital share is 1   . Thus both the labor and capital shares
are indeed constant. This result is closely connected to the fact that the production function
exhibits constant returns to scale. Actually, the fact that the labor and capital shares are
about constant is one of the main arguments in favor of using production functions that
exhibit constant returns to scale.

To continue, we have to take a closer look at the dynamics of capital accumulation in the
model. It turns out that this is easiest to do if all variables are expressed in terms of units
11.2 The Solow Growth Model                                                                 99


                  AL                   AL
of effective labor t t . The product t t is referred to as effective labor because increases
    A                                                 A           L
in t make labor more productive. For example, t = 2 and t = 1 amounts to the same
                                A            L
quantity of effective labor as t = 1 and t = 2. When put in terms of units of effective
labor, all variables will be constant in the long run, which will simplify our analysis.

We will use lowercase letters for variables that are in terms of effective labor. That is,
yt = Yt=(AtLt), kt 1 = Kt 1=(AtLt), and it = It=(AtLt). Substituting Yt = ytAtLt and so on
into the production function, equation (11.1), yields:

                             ytAtLt = (At Lt) (kt 1At Lt)1 ; or:
(11.5)                                    yt = kt1 1 :
From the law of motion for capital, equation (11.2), we get the law of motion in terms of
effective labor:

                    kt (1 + )At(1 + )Lt = (1 Æ)kt 1 AtLt + itAtLt; or:
(11.6)                        kt(1 + )(1 + ) = (1 Æ)kt 1 + it:
Finally, investment is determined by:

(11.7)                                 it = syt = skt1 1 :
Plugging equation (11.7) into the law of motion in equation (11.6) yields:

                           kt (1 + )(1 + ) = (1 Æ)kt 1 + skt1 1 ; or:
                                    kt = (1 (1Æ+)kt )(11 ++sk)t 1 :
                                                               1
(11.8)

This last equation determines the development of the capital stock over time. Dividing by
kt 1 yields an expression for the growth rate of capital per unit of effective labor:

                                      kt = 1 Æ + skt 1 :
(11.9)
                                     kt 1 (1 + )(1 + )
                k =k
The expression t t 1 is called the gross growth rate of capital per unit of effective labor.
The gross growth rate equals one plus the net growth rate. The growth rates in Chapter 1
were net growth rates.

                       k
Since the exponent on t 1 in equation (11.9) is negative, the growth rate is inversely related
to the capital stock. When a country has a lower level of capital per unit of effective labor,
its capital and hence its output grow faster. Thus the model explains the convergence of
GDP of countries and regions over time.

                                                 k                         k
Since the growth rate of capital decreases in t 1 , there is some level of t 1 where capital
per unit of effective labor stops growing. We say that the economy reaches a steady state.
Once the economy arrives at this steady state, it stays there forever. Figure 11.1 is a graphi-
cal representation of the growth process in this economy. For simplicity, we assume for the
100                                                                         Economic Growth


moment that labor and productivity are constant,      =     = 0. In that case, equation (11.8)
simpliﬁes to:

                                  kt = (1 Æ)kt 1 + skt1 1 ; or:
                                   kt kt 1 = skt1 1 Ækt 1:
The change in capital per unit of effective labor is equal to the difference between invest-
ment and depreciation. Figure 11.1 shows the production function per unit of effective
      y k                    i sk                           Æk
labor t = t1 1 , investment t = t1 1 , and depreciation t 1 . Because the return to capi-
tal is diminishing, investment is a concave function of capital. For low values of capital, the
difference between investment and depreciation is large, so the capital stock grows quickly.
For larger values of capital, growth is smaller, and at the intersection of depreciation and
investment the capital stock does not grow at all. The level of capital per unit of effective
labor at which investment equals depreciation is the steady-state level of capital. In the
long run, the economy approaches the steady-state level of capital per unit of effective la-
bor, regardless of what the initial capital stock was. This is even true if the initial capital
stock exceeds the steady-state level: capital per unit of effective labor will shrink, until the
steady state is reached.

              0.25




               0.2




              0.15
                                                                           delta*k
                                                                           f(k)
                                                                           s*f(k)
               0.1




              0.05




                0
                     k                  0.37                0.77



              Figure 11.1: Output, Saving, and Depreciation in the Solow
              Model



                              k     k
At the steady state we have t = t 1 . Using equation (11.8), we see that the steady-state
                                               k̄
level of capital per unit of effective labor has to satisfy:

                              k̄(1 + )(1 + ) = (1 Æ)k̄ + sk̄1 ;
11.2 The Solow Growth Model                                                                    101


which yields:
                                                                     1=
(11.10)                                k̄ = Æ +  + +     s                   :
We can use this equation to compute output, investment, and growth in the steady state.
From equation (11.5), the steady-state level of output per effective labor unit is:
                                                                             1
                                  ȳ = k̄   1                  s                       :
                                                =
                                                        Æ++ +
The level of output depends positively on the saving rate. From equation (11.7), the steady-
state investment per unit of effective labor is:
                                                                     1
                                      ī = s Æ +  + +    s                       :
                                        + + :
The steady-state growth rate of capital is

                       Kt k̄(1 + )At (1 + )Lt = 1 +  + +  ;
                      Kt 1 =        k̄AtLt
and the growth rate of output equals  + +  as well. This implies that the long-run
growth rate of an economy is independent of the saving rate. With a higher saving rate,
the economy approaches a higher steady state, but the long-run growth rate is determined
by growth in labor and productivity only.

There are still a number of stylized facts left to be checked. First, we will verify that the
return to capital is constant. From equation (11.4), the return to capital is:
                                                                              
                        rt = (1             A L Kt 1 = (1       Kt 1  :
                                       )( t t )
                                                                AtLt      )

In the steady state, capital per unit of effective labor is a constant k̄ . Therefore the return to
capital in steady state is:

                                                r̄t = (1       )   k̄ ;
                          k̄
which is constant since is constant. On the other hand, the wage is growing in the steady
state, since the productivity of labor increases. The steady-state wage can be computed as:
                                                  1
                   wt = At Lt 1Kt1 1 = At K    t 1
                                             AtLt      = At k̄ 1 ; so:

                                  wt+1 = At+1 = 1 + ;
                                   wt At
which implies that the wage grows at the rate of technological progress.
102                                                                        Economic Growth


The capital-output ratio in steady state is:
                                     Kt 1 = k̄At Lt = k̄ ;
                                      Yt ȳAt Lt ȳ
which is a constant. This veriﬁes the last stylized fact of economic growth on our list.

The Solow model succeeds in explaining all stylized facts of economic growth in indus-
trialized countries. The key element of the model is the neoclassical constant-returns pro-
duction function. Since returns to capital alone are decreasing, economies grow faster at
lower levels of capital, until they approach the steady state, where units of effective labor
and capital grow at the same rate. The model also explains why different saving rates in
different industrialized countries do not translate into long-term differences in the growth
rate. The saving rate affects the level of the steady state, but it does not affect the steady-
state growth rate. The capital stock cannot grow faster than effective labor for a long time
because of decreasing returns to capital.

Since the Solow model does well at matching the facts of economic growth, it forms the
basis of many more-advanced models in macroeconomics. For example, our real business
cycle model of Chapter 9 is a Solow model enriched by optimizing consumers and pro-
ductivity shocks. On the other hand, the model works well only for countries that satisfy
the assumptions of constant rates of population growth and technological progress. These
assumptions are justiﬁed for industrialized countries, but they are not helpful for under-
standing the early stages of development of a country, which are usually accompanied by
the demographic transition, so exogenous and constant population growth is not a useful
assumption. We will look for possible explanations of fertility decisions below, but be-
fore that, we will introduce growth accounting, a method that allows us to decompose the
growth rate of a country into growth in population, capital, and productivity.



11.3 Growth Accounting

In this section we will use the general framework of the Solow model to compute a de-
composition of the rate of economic growth for a given country. Consider the neoclassical
production function:
(11.11)                              Yt = (AtLt) Kt1 1 :
                   Y          L                                K
We will interpret t as GDP, t as the number of workers, t 1 as the aggregate capital
           A
stock, and t as a measure of overall productivity. We will be concerned with measuring
                              A L          K
the relative contributions of t , t , and t 1 to growth in GDP. We assume that data for
GDP, the labor force, and the aggregate capital stock are available. The ﬁrst step is to
                                       A                                         A
compute the productivity parameter t . Solving the production function for t yields:

                                        At = Yt :
                                                  1




                                            LtKt 1
                                                  1
11.4 Fertility and Human Capital                                                         103


If                                                   A
     were known, we could compute the t right away. Luckily, we found out earlier that
  is equal to the labor share. Therefore we can use the average labor share as an estimate
of and compute the t .       A
              A                                           A L          K
Now that t is available, the growth rates in t , t and t 1 can be computed.1 We can see
how the growth rates in inputs and productivity affect the growth rate of GDP by taking
the natural log of the production function:

(11.12)                            Y
                                 ln t =       A
                                              L
                                            ln t +       ) ln Kt 1 :
                                                         ln t + (1

We are interested in growth between the years t and t + k , where k is some positive integer.
Subtracting equation (11.12) at time t from the same equation at time t + k yields:

  ln Yt+k ln Yt = (ln At+k ln At ) + (ln Lt+k ln Lt ) + (1         )(ln Kt+k 1 ln Kt 1 ):

Thus the growth rate in output (the left-hand side) is times the sum of growth in produc-
tivity and labor, plus 1   times growth in capital. Using this, we can compute the relative
contribution of the different factors. The fraction of output growth attributable to growth
of the labor force is:
                                                   L             L
                                                                Y :
                                                [ln t+k ln t ]
                                                   Y
                                                ln t+k ln t
The fraction due to growth in capital equals:

                                       (1          K
                                               )[ln t+k 1 ln         Kt 1] :
                                                   Y
                                                ln t+k ln t     Y
Finally, the remaining fraction is due to growth in productivity and can be computed as:

                                                   A             A
                                                                Y :
                                               [ln t+k ln t ]
                                                   Y
                                                ln t+k ln t
It is hard to determine the exact cause of productivity growth. The way we compute it, it is
merely a residual, the fraction of economic growth that cannot be explained by growth in
labor and capital. Nevertheless, measuring productivity growth this way gives us a rough
idea about the magnitude of technological progress in a country.



11.4 Fertility and Human Capital

In this section we will examine how people decide on the number of children they have.
Growth and industrialization are closely connected to falling fertility rates. This was true
for 19th century England, where industrialization once started, and it applies in the same
way to the Asian countries that only recently began to grow at high rates and catch up with
     1 See Chapter 1 for a discussion of growth rates and how to compute them.
104                                                                      Economic Growth


Western countries. Understanding these changes in fertility should help explain why some
economies start to grow, while others remain poor.

The ﬁrst economist to think in a systematic way about growth and fertility was Thomas
Malthus. Back in 1798, he published his “Essay on Population”, in which his basic thesis
was that fertility was checked only by the food supply. As long as there was enough to eat,
people would continue to produce children. Since this would lead to population growth
rates in excess of the growth in the food supply, people would be pushed down to the
subsistence level. According to Malthus’s theory, sustained growth in per capita incomes
was not possible; population growth would always catch up with increases in production
and push per capita incomes down. Of course, today we know that Malthus was wrong,
at least as far as the now industrialized countries are concerned. Still, his theory was an
accurate description of population dynamics before the industrial revolution, and in many
countries it seems to apply even today. Malthus lived in England just before the demo-
graphic transition took place. The very ﬁrst stages of industrialization were accompanied
by rapid population growth, and only with some lag did the fertility rates start to decline.
We will take Malthus’s theory as a point of departure in our quest for explanations for the
demographic transition.

Stated in modern terms, Malthus thought that children were a normal good. When income
went up, more children would be “consumed” by parents. We assume that parents have
children for their enjoyment only, that is, we abstract from issues like child labor. As a
                                                                c
simple example, consider a utility function over consumption t and number of children
n t of the form:
                                 u(ct; nt) = ln(ct) + ln(nt):
                                                                       w
We assume that the consumer supplies one unit of labor for real wage t and that the cost
                                      p
in terms of goods of raising a child is . Therefore the budget constraint is:
                                       ct + pnt = wt :
By substituting for consumption, we can write the utility maximization problem as:

                                nt
                                        w pnt) + ln(nt)g :
                               max fln( t

The ﬁrst-order condition with respect to nt is:

(FOC nt )
                                       p
                                  wt pnt + nt = 0; or:
                                                1


(11.13)                                  nt = w2pt :
Thus the higher the real wage, the more children are going to be produced.

                                                                                  n
If we assume that people live for one period, the number of children per adult t deter-
                                     L
mines the growth rate of population t :
                                         Lt+1 = nt:
                                          Lt
11.4 Fertility and Human Capital                                                          105


To close the model, we have to specify how the wage is determined. Malthus’s assumption
was that the food supply could not be increased in proportion with population growth.
In modern terms, he meant that there were decreasing returns to labor. As an example,
assume that the aggregate production function is:

                                         Yt = AtLt ;
with 0  < < 1. Also assume that the real wage is equal to the marginal product of labor:
(11.14)                             wt = At Lt 1:
We can combine equation (11.14) with the decision rule for the number of children in equa-
tion (11.13) to derive the law of motion for population:

                                    Lt+1 = At Lt 1 ; or:
                                     Lt      2p
(11.15)                             Lt+1 = 2tpLt :
                                           A

Notice that this last equation looks similar to the law of motion for capital in the Solow
model. The growth rate of population decreases as population increases. At some point,
                                                             L̄
the population stops growing and reaches a steady state . Using equation (11.15), the
steady-state level of population can be computed as:

                                       L̄ = A2tpL̄ ; or:
                                                   
                                       L̄ = 2p  A t1
                                                       1

                                                         :
In the steady state, we have Lt+1 =Lt = nt = 1. We can use this in equation (11.13) to compute
the wage w̄ in the steady state:
                                               w̄ ; or:
                                               2p
                                           1=

                                          w̄ = 2p:
Thus the wage in the steady state is independent of productivity At . An increase in At
causes a rise in the population, but only until the wage is driven back down to its steady-
state level. Even sustained growth in productivity will not raise per capita incomes. The
population size will catch up with technological progress and put downward pressure on
per capita incomes.

This Malthusian model successfully explains the relationship between population and out-
put for almost all of history, and it still applies to large parts of the world today. Most
developing countries have experienced large increases in overall output over the last 100
years. Unlike in Europe, however, this has resulted in large population increases rather
106                                                                        Economic Growth


than in increases in per capita incomes. Outside the European world, per capita incomes
stayed virtually constant from 1700 to about 1950, just as the Malthusian model predicts.

Something must have changed in Europe in the nineteenth century that made it attractive
to people to have less children, causing fertility rates to fall , so per capita incomes could
start to grow. While these changes are by no means fully understood, we can identify a
number of important factors. We will concentrate on two of them: the time-cost of raising
children, and a quality-quantity tradeoff in decisions on children.

Human capital is a key element of the model that we are going to propose. So far, we con-
sidered all labor to be of equal quality. That might be a reasonable assumption for earlier
times in history, but it certainly does not apply in our time, where special qualiﬁcations
and skills are important. In the model, human capital consists of two components. First,
there is innate human capital that is possessed by every worker, regardless of education.
                                                         H
We will denote this component of human capital by 0 . This basic human capital reﬂects
the fact that even a person with no special skill of any kind is able to carry out simple tasks
that require manual labor only. In addition to this basic endowment, people can acquire
                      H                                           H
extra human capital t through education by their parents. t reﬂects special skills that
have to be taught to a worker. The total endowment with human capital of a worker is
H H
  0 + t.

To come back to fertility decisions, we now assume that parents care both about the number
n                                                              H H
 t of their children and their “quality”, or human capital 0 + t+1 . Preferences take the
form:
                          u(ct; nt; Ht+1) = ln(ct) + ln(nt(H0 + Ht+1)):
The other new feature of this model is that parents must invest time, rather than goods, to
                                            p
raise children. In the Malthusian model, units of the consumption good were needed to
raise a child. We now assume that this cost in terms of goods is relatively small, so it can
                                                                                          h
be omitted for simplicity. Instead, children require attention. For each child, a fraction of
the total time available has to be used to raise the child. In addition, the parents can decide
                                                 e
to educate their children and spend fraction t of their time doing that. This implies that
only a fraction 1  hn e                         w
                      t t is left for work. If t is the wage per unit of human capital when
working all the time, the budget constraint is:
(11.16)                        ct = wt (H0 + Ht)(1 hnt et):
The right-hand side says that income is the wage multiplied by human capital and the
fraction of time worked. All this income is spent on consumption. We still have to specify
the determination of the human capital of the children. We assume that the extra human
                     H                                                H
capital of each child t+1 depends on: the acquired human capital t of that child’s parents,
             e
and the time t the parents spend teaching their children:
(11.17)                                  Ht+1 = etHt:
Here is a positive parameter. The interpretation of equation (11.17) is that parents who
are skilled themselves are better at teaching their children. A person who does not have
any skills is also unable to teach anything to his or her children.
11.4 Fertility and Human Capital                                                          107


We now want to determine how fertility is related to human capital in this model. If we
plug the constraints in equations (11.16) and (11.17) into the utility function, the utility
maximization problem becomes:

                nt ;et
                         w H0 + Ht)(1 hnt et)) + ln(nt(H0 + etHt))g :
                max fln( t (

                                               n    e
The ﬁrst-order conditions with respect to t and t are:

      n                                    h      1
(FOC t )
                                    1    hnt et + nt = 0; and:
      e                                  1           Ht = 0:
(FOC t )
                                1       hnt et H0 + etHt
                                              +

      n
(FOC t ) can be rewritten as:

                                        hnt = 1 hnt et; or:
(11.18)                                  et = 1 2hnt:
                                e
Using equation (11.18) in (FOC t ) allows us to compute the optimal fertility decision:

                    Ht(1 hnt        (1     2hnt)) = H0 + (1 2hnt) Ht; or:
                                           Hthnt = H0 + Ht 2 Hthnt; or:
                                         3 Ht hnt = H0 + Ht ; or:
                                                               
                                                     1 H0
(11.19)                                        nt = 3h Ht + 1 :
                                                                                     H
According to equation (11.19), the key determinant of fertility is human capital t . If it
is close to zero, the number of children is very high. If we added a cost of children in
                                                   H
terms of goods to this model, for low values of t the outcomes would be identical to the
                                                                   H
Malthusian model. However, things change dramatically when t is high. Fertility falls,
          H
and if t continues to rise, the number of children reaches the steady state:    n̄       = h
                                                                                   = 1 (3 ).
There are two reasons for this outcome. On the one hand, if human capital increases, the
value of time also increases. It becomes more and more costly to spend a lot of time raising
children, so parents decide to have less of them. The other reason is that people with high
human capital are better at teaching children. That makes it more attractive for them to
invest in the quality instead of the quantity of children.

The model sheds some light on the reasons why today fertility in industrialized countries is
so much lower than that in developing countries. The theory also has applications within a
given country. For example, in the United States teenagers are much more likely to become
pregnant if they are school dropouts. The model suggests that this is not by accident.
People with low education have a relatively low value of time, so spending time with
children is less expensive for them.

The question that the model does not answer is how the transition from the one state to
the other takes place. How did England manage to leave the Malthusian steady state?
108                                                                      Economic Growth


                                       H
In the model, only a sudden jump in t over some critical level could perform this task,
which is not a very convincing explanation for the demographic transition. Still, the model
is a signiﬁcant improvement over theories that assume that population growth rates are
exogenous and constant. More research on this and related questions will be needed before
we can hope to ﬁnd a complete explanation for the demographic transition and the wide
disparity in wealth around the world.

               Variable   Deﬁnition
                  Yt      Aggregate output
                  yt      Output per unit of effective labor
                  Lt      Aggregate labor input or population
                  Kt      Aggregate capital stock
                  kt      Capital per unit of effective labor
                  At      Productivity parameter
                  It      Aggregate investment
                  it      Investment per unit of effective labor
                  wt      Wage
                  rt      Return on capital
                  Æ       Depreciation rate
                          Parameter in the production function
                 u()     Utility function
                  ct      Consumption
                  nt      Number of children
                  p       Cost of raising a child, in terms of goods
                  h       Cost of raising a child, in terms of time
                  et      Time spent on educating children
                 H0       Innate human capital
                 Ht       Acquired human capital
                          Parameter in the production function for human
                          capital


                            Table 11.1: Notation for Chapter 11



Exercises

Exercise 11.1 (Easy)
                                                  Y     LK               L
Suppose the aggregate production technology is = 3 :7 :3 and that = 150. Both the
labor force and productivity are constant. Assume that the depreciation rate is 10% and that
Exercises                                                                                109


20% of output is saved and invested each year. What is the steady-state level of output?

Exercise 11.2 (Moderate)
Assume that the Solow model accurately describes the growth experience of Kuwait. As
a result of the Gulf war, much of the capital in Kuwait (oil extracting equipment, vehi-
cles, structures etc.) was destroyed. Answer the following questions, and provide brief
explanations.


    What will be the effect of this event on per capita income in Kuwait in the next ﬁve
      years?

    What will be the effect of this event on per capita income in Kuwait in the long run?
    What will be the effect of this event on the annual growth rate of per capita income
      in Kuwait in the next ﬁve years?

    What will be the effect of this event on the growth rate of per capita income in Kuwait
      in the long run?

    Will recovery in Kuwait occur faster if investment by foreigners is permitted, or if it
      is prohibited?

    Would Kuwaiti workers gain or lose by a prohibition of foreign investment? Would
      Kuwaiti capitalists gain or lose?

Exercise 11.3 (Moderate)
In this and the following two exercises, you will apply growth accounting to measure the
determinants of growth in output per worker in a country of your choice. To start, you
need to pick a country and retrieve data on real GDP per worker and capital per worker.
You can get the time series you need from the Penn World Tables. See Exercise 9.1 for
information about how to access this data set. You should use data for all years that are
available.

In Section 11.3, we introduced growth accounting for output growth, while in this exercise
we want to explain growth in output per worker. We therefore have to redo the analysis
of Section 11.3 in terms of output per worker. The ﬁrst step is to divide the production
                                                            L
function in equation (11.11) by the number of workers t , which yields:

                      t (At Lt ) Kt 1   A t Lt Kt 1
                                                                    1
                    Y             1              1
                                                               K
                                          Lt Lt1 = At Lt                :
                                                                 t 1
(11.20)
                    Lt =      Lt      =

Equation (11.20) relates output per worker Yt =Lt to capital per worker Kt 1 =Lt . If we use
lower case letters to denote per-worker values (yt = Yt =Lt , kt 1 = Kt 1 =Lt ), we can write
equation (11.20) as:

(11.21)                                   yt = At kt1 1 :
110                                                                     Economic Growth


                                            A
Use equation (11.21) to derive a formula for t and to derive a decomposition of growth in
output per worker into growth in capital per worker and productivity growth. You can do
that by following the same steps we took in Section 11.3.

Exercise 11.4 (Moderate)
                                      A
Compute the productivity parameter t for each year in your sample. For your computa-
tions, assume that 1      :
                        = 4. This is approximately equal to the capital share in the United
States, and we assume that all countries use the same production function. In fact, in most
countries measures for 1     are close to .4.

Exercise 11.5 (Moderate)
By using log-differences, compute the growth rate of GDP, productivity, and capital per
worker for each year in your sample. Also compute the average growth rate for these three
variables.

Exercise 11.6 (Moderate)
What percentage of average growth per worker is explained by growth in capital, and
what percentage by productivity growth? For the period from 1965 to 1992, the average
growth rate of output per worker was 2.7% in the United States, and productivity growth
averaged 2.3%. How do these numbers compare to your country? Does the neoclassi-
cal growth model offer an explanation of the performance of your country relative to the
United States? If not, how do you explain the differences?
Chapter 12

The Effect of Government
Purchases

In this chapter we consider how governmental purchases of goods and services affect the
economy. Governments tend to spend money on two things: wars and social services.
Barro’s Figure 12.2 shows that expenditures by the U.S. government have comprised a
generally increasing fraction of GNP since 1928, but even today that fraction is nowhere
near the peak it attained during WWII. This pattern is generally repeated across countries.
The taste for social services seems to increase with national wealth, so the governments of
richer countries tend to spend more, as a fraction of GDP, than the governments of poorer
countries, especially during peacetime. Of course, there are exceptions to this pattern.

We will examine government spending in three ways:

  1. We shall consider the effect of permanent changes in government spending in order
     to think about the secular peacetime increases in spending;
  2. We shall consider temporary changes in government spending in order to think about
     the effect of sudden spikes like wars;
  3. We shall begin an analysis of the effect of government social programs. Since govern-
     ment social programs (unemployment insurance, social security systems) are inextri-
     cably linked to tax systems, we will defer part of our analysis to the next chapter.

Since we have yet to fully discuss tax policy, for this chapter we will assume that the gov-
ernment levies a very special kind of tax: a lump-sum tax. That is, the government an-
nounces a spending plan and then simply removes that amount of money from the budget
of the representative household. As we shall see in the next chapter, this kind of tax system
does not distort the household’s choices.
112                                                               The Effect of Government Purchases


In the Barro textbook, the government budget constraint, in addition to lump sum taxes,
also contains ﬁat currency. In this chapter we will assume that the government does not
use the printing press to ﬁnance its purchases. In later chapters (especially Chapter 18) we
will examine this effect in much greater detail.



12.1 Permanent Changes in Government Spending

Assume that the government announces a permanent level of government spending, , to             G
be levied each period. What is the role of these government expenditures? The govern-
ment provides productive services, such as a court system for enforcing contracts and an
interstate highway system for quickly and cheaply transporting goods. The government
also provides consumption services such as public parks and entertainment spectacles such
as trips to the moon and congressional hearings. We focus on the ﬁrst role.

How should we model the productive services provided by the government? We shall
analyze a model under two assumptions:

  1. Government spending at some constant rate ,              
  2. The effect of government spending          G is augmented by the level of capital, Kt, so
                Y
     output increases by the amount           GKt .
                                                                                  
In the ﬁrst case, $100 of government spending increases output by 100 regardless of the
current level of capital, while in the second case, the same $100 boosts output much more
in nations with more capital.

The representative household lives forever and has preferences over consumption streams
fCt g1
     t=0 given by:
                                                    1
                                                    X
                                   V (fCtg1t=0) =             UC :
                                                              t ( )
                                                                  t
                                                     t=0
Where 0   U > 0 and 00U <  0. Here 0      < < 1 reﬂects impatience. In addition, to keep the
algebra nice, we will say that:


                                                         :
                                                     1
                                                =
                                                    1+
Here      is the discount factor and    the discount rate.
The household has access to a productive technology mapping capital               Kt into private out-
      Y
put tP of:

                                              YtP = Kt :
12.1 Permanent Changes in Government Spending                                             113


Total output (and hence income) of the household will be the sum of private output and
                                  Y
government-augmented output, tG . Government augmented output will take on one of
two values:

(12.1)                                   YtG = G; or:
(12.2)                                   YtG = GKt:
Equation (12.1) corresponds to the case of government spending affecting total output the
same amount no matter what the level of capital. Equation (12.2) corresponds to the case
of government spending affecting total output more when the level of capital is high. We
                           G
shall examine the effect of on capital accumulation, aggregate output and consumption
under both of these assumptions.

                                          Y Y         Y                       C
The household must split total income t = tP + tG into consumption t , investment t        I
                                   G
and payments to the government of . Recall that we assumed the government would sim-
ply levy lump-sum taxes. Now we are using that assumption. The household’s resource
constraint is thus:

(12.3)                                  Ct + It + G  Yt :
                                                          K                           Æ
Finally, there is a law of motion for the capital stock t . Each period, a proportion of the
                                                                                  Æ
capital stock vanishes due to physical depreciation, so only the remaining (1 ) proportion
survives into the next period. In addition, capital may be augmented by investment. Thus
capital evolves according to:

(12.4)                                Kt+1 = (1 Æ)Kt + It :
We assume that the representative household begins life with some initial stock of capital
K >
 0   0.

                            C
We are interested in writing t as a function of next period’s capital stock   Kt+1. Combining
equations (12.3) and (12.4) gives:

(BC1)                    Ct = Kt + (1 Æ)Kt Kt+1 G + G; or:
(BC2)                    Ct = Kt + (1 Æ)Kt Kt+1 G + GKt:
The differences between the two equations arises from which version of the government
technology we use, equation (12.1) or (12.2).



Analysis with Equation (BC1)

Let us begin our analysis with the ﬁrst version of the government spending technology,
equation (12.1). Thus we are using as the relevant budget constraint equation (BC1). The
114                                                                            The Effect of Government Purchases


household’s problem becomes:
                             1
                             X
                    max
                   fKt+1 g1
                                    t [  UK
                                        t + (1                Æ)Kt Kt+1                 (1   )G] :
                          t=0 t=0

We take ﬁrst-order conditions with respect to the choice of next period’s capital      Kj+1 in
                     j                         K
some typical period . Remember that j +1 appears in two periods, and + 1:  j j
                                                            h            i
                           j U 0 (C )[ 1] + j +1 U 0 (C ) K 1 + 1 Æ = 0:
                                   j                   j +1    j +1
For all j = 0; 1; : : : ; 1. Here Cj is given by equation (BC1) above. Simplifying produces:

(12.5)                             U 0(Cj ) = U 0(Cj+1 )[ Kj+1 1 + 1 Æ]:
For simplicity (and as in other chapters) we choose not to solve this for the transition path
                                    K                                               K
from the initial level of capital 0 to the steady state level SS , and instead focus on char-
acterizing the steady state. At a steady state, by deﬁnition the capital stock is constant:

                                           Kt = Kt+1 = K :                SS


As a result:

                                         Ct = Ct+1 = C ; and:   SS

                                         It = It+1 = I = ÆK :
                                                           SS                  SS


Equation (12.5) at the steady-state becomes:

                           U 0(C ) = U 0 (C )[ K 1 + 1 Æ]:
                                    SS               SS              SS


Simplifying, and using the deﬁnition of as 1=(1 + ) produces:

                                 1+= K        1
                                                 + 1 Æ:
                                                      SS


We now solve for the steady-state capital level:
                                                               1 1
                                         K = +Æ
                                           SS                                  :
Notice immediately that, under this formulation of government spending the steady state
capital level is independent of government spending. As we shall see in the next chapter,
this is a direct consequence of the lump-sum tax technology. If the government had to use
                     K
a distortionary tax, SS would be affected by .            G
       K
Given SS , it is easy to calculate the other variables that the household controls: steady-
                         Y                       C                                      I
state private income, SS P , consumption SS , and investment, SS . From the technology, we
           Y
know that P =    K   , so:

                                                Y P =K :
                                                SS              SS
12.1 Permanent Changes in Government Spending                                              115


Total output (GDP) is private output     Y P plus government output Y G, or:
                                         Y = K + G:
                                           SS        SS



Consumption is, in this case, determined by the budget constraint equation (BC1). At the
steady-state, then:

                           C =K
                            SS     SS   + (1     Æ )K     SS        KSS   (1     )G:
We can simplify this to produce:

                                 C =K
                                 SS       SS         ÆK   SS        (1    )G:
At the steady-state, the household must be investing just enough in new capital to offset
depreciation. Substituting into the law of motion for capital provides:

                                                I = ÆK :
                                                SS             SS



Now we are ready to determine the effect of government spending on total output, con-
sumption and the capital level. When we think about changing we are comparing two   G
different steady states. Thus there may be short-term ﬂuctuations immediately after the
government announces its new spending plan, but we are concerned here with the long-
run effects.

Notice immediately that:

                               dK = 0;
                                   SS
(12.6)
                                dG
                                dY      d P G
                                 dG = dG (Y + Y ) = ; and:
                                   SS
(12.7)
                                dC = (1 )G::
                                   SS
(12.8)
                                dG
That is, total output is increasing in G but consumption is decreasing in G if  < 1. Thus
 < 1 is an example of crowding out. Think of it this way: the government spends $1000 on
a new factory, which produces 1000 units of new output. The household pays the $1000
in taxes required to construct the new factory, does not alter its capital level and enjoys the
extra output of 1000 as consumption. If  < 1 the household has lost consumption. Thus
output has increased and consumption has decreased.

Why do we automatically assume that             <
                                               1? This is equivalent to saying that the gov-
ernment is worse at building factories than the private sector. The government may be
the only institution that can provide contract enforcement, police and national defense, but
long history has shown that it cannot in general produce ﬁnal goods as effectively as the
private sector.

One ﬁnal note before we turn our attention to the effect of production augmenting gov-
ernment spending. Government transfer payments, in which the government takes money
116                                                                 The Effect of Government Purchases


from one agent and gives it to another, ﬁt nicely into this category of expenditure. Trans-
fer payments have absolutely no productive effects, and the government institutions re-
quired to administer the transfer payments systems will prevent the perfect transmission
of money from one agent to another. Since we are working with a representative consumer,
transfer payments appear as taxes which are partially refunded.



Analysis with Equation (BC2)

Now let us consider the effect of government spending whose beneﬁts are proportional to
capital stock. We will use precisely the same analysis as before. except that now consump-
      C                                K         K
tion t as a function of capital t and t+1 and government spending will be given by       G
equation (BC2) above.

The household’s problem becomes:
                                1
                                X
                      max
                     fKt+1 g1
                                           UK
                                           t [
                                               t + (1          Æ + G)Kt Kt+1 G] :
                            t=0 t=0

We take ﬁrst-order conditions with respect to the choice of next period’s capital stock j +1        K
                            j                                                        K
in some typical period . Remember the trick with these problems: j +1 appears twice in
                                                                   j
the maximization problem, ﬁrst negatively in period and then positively in period + 1:          j
                                                           h                     i
                     j   U 0(Cj )[ 1] + j+1 U 0(Cj+1 ) Kj+1 1 + 1 Æ + G = 0:
          j
For all = 0 1 ; ; : : : ; 1. Cj is given by equation (BC2). Simplifying produces:
(12.9)                        U 0(Cj ) = U 0(Cj+1 )[ Kj+1 1 + 1 Æ + G]:
Compare this with the previous simpliﬁed ﬁrst-order condition, equation (12.5) above. No-
                                                                             G
tice that in equation (12.5) the government spending term does not appear. Here it does.
This should alert us immediately that something new is about to happen. As before, we
assume a steady state and characterize it. At the steady state:

                       U 0 (C ) = U 0 (C )[ K 1 + 1 Æ + G]:
                                  SS                 SS    SS



Using our deﬁnition of as 1=(1 + ) this becomes:

                              1+= K        1
                                              + 1 Æ + G:
                                                      SS



Hence the steady-state capital level is:
                                                                 1 1
                                       K =  + Æ G
                                            SS                           :
12.1 Permanent Changes in Government Spending                                                                             117


Notice immediately that, under this formulation of government spending the steady-state
capital level is increasing in government spending. If the government were forced to ﬁ-
nance its spending with a distortionary tax this result might not go through.

Given the steady-state capital level, it is easy to calculate the steady-state levels of total
          Y               C                                       I
output SS , consumption SS and investment, SS . Since the steady-state capital level, SS , is                         K
                  G                                 Y
now affected by , both public output G and private output P are in turn affected by                           Y
G. Given the production function, we see that:
                                          Y =K
                                           SS                SS       +   K G:        SS


From the budget constraint equation (BC2) above, we see that the steady state, consump-
tion is:
                              C =K
                                SS         SS            ÆK       SS              (1            K )G:   SS


As before, the household must be investing just enough to overcome depreciation, to keep
the capital level constant:
                                                    I = ÆK :
                                                        SS                    SS


Now we can reconsider the effect of government spending on total output, consumption
and the capital level. Some of these derivatives are going to be fairly involved, but if we
break them down into their constituent pieces they become quite manageable.

Begin by deﬁning:

                                           X   + Æ G :
Note that:
                                          dX =  X:
                                          dG  + Æ G
The steady-state capital stock is:

                                                    K =X ;
                                                    SS
                                                                          1
                                                                              1




so the derivative of the steady-state capital stock with respect to                                           G is:
                                      dK = 1 X
                                          SS                                      1
                                                                                            1   dX :
                                       dG 1                                                     dG
                                                                              1




Plugging in   dX=dG yields:
                              dK = 1 X                                                          
                                                                + Æ G X
                                                                  1
                                 SS                                           1
                               dG 1
                                                              1



                                                             
                                                         + Æ G X
                                                1                                                    1
                                      =                                                         1
                                          1
                                                             
                                                         + Æ G K :
                                                1
(12.10)                               =                                                         SS
                                          1
118                                                                                   The Effect of Government Purchases


Armed with this result we can tackle the other items of interest. First, consider the effect of
increased spending on aggregate output:


                 dY = d (Y P + Y G)
                  SS

                 dG dG                  SS           SS


                       d (K + GK )
                    =
                      dG                    SS             SS


                            1 dK        dK
                    = K
                               dG + G dG
                                                     SS               SS
                                  SS



                    = K
                                                         
                                    + Æ G K + G 1  + Æ G K
                            1   1                   1
                                  SS                                       SS                            SS
                              1
                        1        [ K + GK ]
                    =
                      1     + Æ G                                  SS              SS


                                  P G
                            + Æ G Y + Y :
                        1
(12.11)             =                                                SS    SS
                      1


Compare the effect of government spending on aggregate output here with the effect of
government spending on aggregate output when government spending simply augments
output directly, equation (12.7) above. Notice that while previously every dollar of govern-
                                                 
ment spending translated into dollars of extra output no matter what the output level,
now government spending is more productive in richer economies.

Finally, we turn our attention to consumption. Recall that before, for        1, consump-              <
tion decreased as government spending increased, that is, consumption was crowded out.
Now we shall see that, while consumption may be crowded out, it will not necessarily be
crowded out. In fact, in rich economies, increases in government spending may increase
consumption. Once again, this result will hinge to a certain extent on the assumption of a
perfect tax technology. Begin by writing consumption as:


(12.12)    C = K ÆK G + GK ; so:
            SS     SS                  SS                       SS

          dC = d (K + (G Æ)K G)
            SS

          dG dG              SS                           SS


                    1 dK            dK + K 1
             = K          + (G Æ )
                                            SS                        SS

                       dG
                        SS
                                     dG                                         SS



             = K    1   1           K  + (G Æ )
                                                    1       K + K
                      1
                        SS
                            + Æ G               1    + Æ G       SS                                  SS    SS   1
                        
                    + Æ G [ K + ( Æ)K ] + K 1:
                 1
             =                                            SS                    SS        SS
               1


The ﬁrst two terms are certainly positive. The question is, are they large enough to out-
weigh the 1? Even if         <                                            G
                          1, for large values of this may indeed be the case.
12.1 Permanent Changes in Government Spending                                                             119


Increasing Returns to Scale and Government Spending

Thus we have seen that the effect of government spending depends crucially on assump-
tions about how it is transformed into output. In the next chapter we will also see that it
depends on how the government raises the revenue it spends.

Our second assumption about technology, embodied in equation (BC2), generated some
exciting results about government spending. It seems that, if the world is indeed like
the model, there is a potential for governments to provide us with a free lunch. Take a
closer look at equation (12.2). If we assumed that the representative household controlled
G  directly (through representative government, for example) what level would it choose?
Ignore the dynamics for a moment and consider the household’s consumption a givenC
                                G K
that it has chosen some level of and :

                          C a  C (K; G) = K + GK ÆK G:
Now suppose the household doubles its inputs of K and G, so it is consuming some
amount C b :

                      C b  C (2K; 2G) = 2 K + 4GK 2ÆK 2G:
For sufﬁciently large values of G and K it is easy to see that:

                                        C b > 2C a :
In other words, by doubling G and K , the representative household could more than dou-
ble net consumption. This is the standard free lunch of increasing returns to scale, in this
case jointly in K and G. In the real world, are there increasing returns to scale jointly
in government spending and capital? In certain areas this is almost certainly true. For
example, by providing sewage and water-treatment services the government prevents epi-
demics and lowers the cost of clean water to consumers. This is a powerful direct beneﬁt.
This direct beneﬁt is increasing in the population concentration (a small village probably
would do ﬁne with an outhouse, while 19th-century Chicago was periodically decimated
by Cholera epidemics before the construction of the sanitary canal), and in turn encour-
ages greater capital accumulation. No one business or household in 18th century Chicago
would have found it worthwhile to build a sewage system, so it would have been difﬁ-
cult for private enterprise alone to have provided the improvements. Furthermore, since
the Chicago sewage system depends in large measure on the Sanitary Canal, which had to
be dug across previously-private land, it may have been impossible to build without the
power of eminent domain.1

Unfortunately, there are few such clear-cut cases of increasing returns to scale combined
with the requirement of government power. Why should a city government construct a
stadium to lure sports teams? To build it, the government has to tax citizens who may
experience no direct or indirect beneﬁt.
   1 For more information on Chicago’s sewer works, see Robin L. Einhorn, Property Rules: Political Economy in

Chicago, 1833-1872.
120                                                        The Effect of Government Purchases


Transitions in the Example Economies

We have so far ignored the problem of transitions in order to concentrate on steady-state
behavior. But transition dynamics, describing the path that capital, consumption and the
interest rate take as an economy transitions from low capital to the steady state capital
level can be extremely interesting. In this subsection we will study transition dynamics by
numerically simulating them on a computer.

                                                 G   :     :       : 
Consider an example economy in which = 0 4, = 0 1, = 0 25, = 0 075, = 0 1 and:    Æ    :
         =           
   = 1 (1 + ). Using the technology from equation (BC1), the steady-state capital level is
K            :
  SS = 1 6089, using the better technology from equation (BC2), the steady-state capital level

     K           :                 G     :
is SS = 2 2741. Notice that, since = 0 4, government spending as a fraction of output in
                              :              :
these example economies is 0 3436 and 0 3033, respectively.

What happens if we endow the representative consumer with an initial capital stock 0 =     K
 :
0 03, which is far below the eventual steady-state level? We know generally that there will
be growth to the steady-state, but little more.

The evolution of the capital stock under both assumptions about the government spend-
ing technology is plotted in Figure (12.1). The solid line gives the evolution with the high-
return government spending technology (that is, equation (BC2)), while the dotted line
gives the evolution with the low-return technology (that is, equation (BC1)). Notice that
the economy based on equation (BC2) is initially poorer and slower-growing than the other
economy. This is because, at low levels of capital, government spending is not very pro-
ductive and is a serious drag on the economy. As capital accumulates and the complemen-
tarities with government spending kick in, growth accelerates and the economy based on
equation (BC2) surpasses the economy based on equation (BC1).

In the same way, the time path of consumption is plotted in Figure (12.2). Finally, the real
interest rate in these economies is plotted in Figure (12.3). For more about how to calculate
the real interest rate in these models, please see the next section.


The Real Interest Rate

Now we turn our attention to the effect of permanent changes in government spending
on the equilibrium real interest rate in this model. Recall that in inﬁnite-horizon capital
accumulation models, like the one we are studying here, it usual to assume there is a closed
economy, so the representative household does not have access to a bond market. In this
setting, the equilibrium interest rate becomes the interest rate at which the household, if
offered the opportunity to use a bond market, would not do so. In other words, there is, as
usual, no net borrowing or lending in a closed economy. We will refer to this condition as
a market-clearing condition in the bond market, or simply market-clearing for short.

We shall see that, during the transition period while capital is still being accumulated, the
12.1 Permanent Changes in Government Spending                                                                                                         121


                                                                     Capital Stock
                                        2.5




                                            2




                                        1.5

                                     K(t)
                                            1




                                        0.5




                                            0
                                             0        5        10        15     20     25        30       35        40
                                                                              time t

                                 Figure 12.1: Evolution of capital stock.
                                 The solid line gives t assuming that            K
                                 government purchases affect output as in
                                 equation (BC2) and the dotted line as-
                                 suming they affect output as in equa-
                                 tion (BC1).


                     Consumption                                                                                         Interest rate
   0.7                                                                                  1.6


   0.6                                                                                  1.4


                                                                                        1.2
   0.5

                                                                                            1
   0.4
C(t)




                                                                                     r(t)




                                                                                        0.8
   0.3
                                                                                        0.6

   0.2
                                                                                        0.4

   0.1                                                                                  0.2


       0                                                                                    0
        0   5   10   15     20         25        30       35        40                       0        5        10        15       20   25   30   35    40
                          time t                                                                                              time t

Figure 12.2: Time path of consumption.                                               Figure 12.3: Time path of interest rates.
                                 C
The solid line gives t assuming that                                                 The solid line gives t assuming that gov-r
government purchases affect output as in                                             ernment purchases affect output as in
equation (BC2) and the dotted line as-                                               equation (BC2) and the dotted line as-
suming they affect output as in equa-                                                suming they affect output as in equa-
tion (BC1).                                                                          tion (BC1).


interest rate is decreasing in the capital stock. At the steady state, however, when consump-
122                                                              The Effect of Government Purchases


                                                                    
tion is constant, the equilibrium interest rate will just be , the discount rate. Because per-
manent changes in government spending lead eventually to a new steady-state, at which
consumption is constant, permanent changes in the level of government spending will not
affect the equilibrium interest rate at the steady state.

The easy way to see this is to notice that if the representative household has some endow-
              e
ment stream f t g1
                 t=0 , and the interest rate satisﬁes:

                                        r         1     U 0(Ct = et) ;
                                 1+ t =
                                                      U 0(Ct+1 = et+1)
then there will be no net borrowing or lending across periods. In our case the endowment
         e
stream f t g1
            t=0 is the result of a capital accumulation process which eventually reaches a
                      e e        e
steady state at which t = t+1 = SS . Hence at a steady-state:

                                r           1   U 0(C ) = 1 = 1 + ; so:
                                                       SS
                             1 + SS =
                                                U 0 (C )
                                                       SS

                                                     r = :
                                                      SS


No matter what the eventual steady-state level of capital, at the steady-state consumption
becomes smooth, which forces the equilibrium interest rate to the discount rate. If SS      r >
the household would wish to save on the bond market (consuming below endowment
and thus violating market-clearing) and if SS         r <
                                                  then then the household would wish to
borrow on the bond market (consuming above endowment and again violating market-
clearing).



12.2 Temporary Changes in Government Spending

Studying temporary changes in government spending requires studying the transition
path of an economy from one steady-state to another and then back again. Imagine an
economy of the type we studied in the previous section, in which the government is spend-
                                     G
ing some low but constant amount 0 each period. As time goes forward, the capital stock
and consumption converge to their steady-state levels and the real interest rate converges
to the discount rate. Suddenly the government must ﬁght an expensive war. Government
                                                G
spending shoots up to some high level 1 for a relatively short period of time. During the
war, the capital stock will begin to transition to the steady-state implied by the new spend-
         G
ing level 1 . Since wars tend to be short it may never get there. When the war is over,
                                                                           G
government spending drops to its accustomed pre-war level of 0 , and the capital stock
slowly returns from wherever it was when the war ended to the old steady-state.

Analytically determining the trajectories of capital, consumption and the interest rate un-
der temporary shifts in government spending is beyond the scope of this chapter. How-
ever, we can easily simulate them numerically, using precisely the same techniques we did
to study the growth experience of economies.
12.2 Temporary Changes in Government Spending                                               123


All of the ﬁgures that follow make the following assumptions: That in periods 1-5 the
economy is at its pre-war steady-state, that in periods 6-15 the economy is in a war, with
increased government spending, and in periods 16-30 the economy is back at peace. Dur-
ing the war the economy begins its transition to a war steady-state, but the relatively short
duration of the war prevents it from ever reaching that steady-state. After the war the econ-
omy transitions slowly back to its pre-war steady-state. We are also assuming that in the
last period of peace before the war (period 5) the population learns of the impending war,
and that in the last period of the war before peace begins again (period 15) the population
learns of the coming peace.

The parameters used here are exactly those used in the section on transitions in the example
                                                                                 G
economies (page 120) above. In addition, the peacetime spending level is 0 = 0 and the
                             G
wartime spending level is 1 = 0 4.   :
The evolution of the capital stock under both assumptions about the government spending
technology is plotted in Figure (12.4). The solid line gives the evolution with the high-
return government spending technology (that is, equation (BC2)), while the dotted line
gives the evolution with the low-return technology (that is, equation (BC1)).

                                              Capital Stock

                             2.2


                             2.1


                                 2
                          K(t)




                             1.9


                             1.8


                             1.7


                             1.6


                             1.5

                                     5   10        15     20   25   30
                                                 time t

                         Figure 12.4: Time path of the capital stock
                         before, during and after a war. The sol-
                                         K
                         id line gives t assuming that govern-
                         ment purchases affect output as in equa-
                         tion (BC2) and the dotted line assuming
                         they affect output as in equation (BC1).



In the same way, the time path of consumption is plotted in Figure (12.5). Finally, the
real interest rate in these economies is plotted in Figure (12.6). It is surprising to note that
sometimes the real interest rate is negative. From the section on the real interest rate (on
                                                                    C        C
page 120 above) we know that, given consumption decisions t and t+1 that t must        r
124                                                                        The Effect of Government Purchases


satisfy:



                                             rt = 1 UU0(C(Ct) )
                                                        0
                                                                           1   :
                                                            t+1


   C                                C            U C                                             U C
If t+1 is quite small relative to t , then 0 ( t+1 ) will be large relative to 0 ( t ) and t might               r
be negative. A negative real interest rate occurs in precisely those periods in which today’s
consumption must be high relative to tomorrow’s, as in the last period of peacetime before
the war, in order to prevent agents from carrying wealth forward into the next period. At
the ends of wars, when today’s consumption is low relative to tomorrow’s (think March,
1945), real interest rates are quite high, to dissuade borrowing.


                    Consumption                                                             Interest rate
                                                                     0.8
   1.1

                                                                     0.6
       1


                                                                     0.4
   0.9
C(t)




                                                              r(t)




   0.8                                                               0.2



   0.7                                                                0


   0.6
                                                                  −0.2


           5   10       15     20       25        30                               5   10       15      20       25   30
                      time t                                                                   time t

Figure 12.5: Time path of consumption                         Figure 12.6: Time path of the interest rate
before, during and after a war. The                           before, during and after a war. Note
                 C
solid line gives t assuming that govern-                      the very low interest rates prevalent in
ment purchases affect output as in equa-                      the last period before the war and the
tion (BC2) and the dotted line assuming                       generally higher interest rates during the
they affect output as in equation (BC1).                      war. The solid line gives t assuming           r
                                                              that government purchases affect output
                                                              as in equation (BC2) and the dotted line
                                                              assuming they affect output as in equa-
                                                              tion (BC1).



In general, Barro presents evidence that, during wartime, interest rates tend to increase.
That ﬁts well with the experience of the second model presented here, the one in which
government purchases affect output as in equation (BC2).
12.3 Social Security                                                                    125


12.3 Social Security

The Social Security system is one of the largest components of U.S. government spending.
There are some interesting theoretical issues associated with it that are worth examining.
Social Security is an old-age pension system, in which young workers pay into a general
fund with a payroll tax of about 7% of wages and old retirees receive payments from this
same general fund. Thus although it maintains the illusion of being a national savings
scheme (and many politicians and voters are convinced that it is exactly that) is in fact an
unfunded or pay-as-you-go pension scheme. In an unfunded pension system, payments to
retirees are paid for by taxes levied on the current young.

Other countries have adopted funded pension schemes, which are essentially forced savings
systems. In a funded pension system, young workers are taxed, with the proceeds going to
an individual account, invested in some securities (the precise type of investment mix, and
whether these investments are under the control of the government or the worker vary
from country to country). When workers become old and retire, they draw down their
accumulated stock of savings.

Consider a world in which there are two types of agents: Young workers who earn an
          y
amount in their working years, and old retirees who earn nothing. This is clearly a vast
simpliﬁcation over reality, since, in particular, the retirement date is exogenous. However,
even this simple model will help us think clearly about pension schemes. A generation
               t                                                       C
born in period will have preferences over consumption while young 0t and old 1t of:C
                                            q            q
                               U (C0t; C1t ) = 2 C0t + 2 C1t:

Where 0   < < 1 reﬂects a preference for consumption while young.
Each period t there are Nt new young workers born, each of whom produces y with cer-
tainty in their youth. The youth population Nt evolves as:


                                     Nt+1 = (1 + n)Nt:

                                                                               r
There is a bond market which pays a constant, riskless, real interest rate of  0, paid
“overnight” on savings. Where does this bond market come from? We will not say here,
leaving it simply outside of the scope of the model. If you are bothered by this, how-
ever, imagine that a certain portion of the population, instead of being workers, are en-
trepreneurs, who will accept funds from workers, use them as capital in a productive
process of some kind, and then use the output from that production to repay the work-
ers (now old) with interest. The interest rate gets set as the result of competition among
entrepreneurs for funds.
126                                                                  The Effect of Government Purchases


Funded Pension Systems

Begin with an analysis of a funded system. The government levies a tax rate of on young      
                 y            y                                                     y
workers’ income , taking . Since the young workers do not affect , this is equivalent to
a lump-sum tax. The government invests               y
                                             on behalf of the young workers, realizes the
                               r
common real rate of return on it, and returns it to the agents when they are retired. In
                                       t                               S
addition, workers of generation may save an amount t  0 in the bond market on their
                     
own. Assume that is small relative to the savings needs of agents. This will prevent them
                         S<
from attempting to set t 0, and will save us having to check corner conditions.

Given    and St, we can calculate an agent’s expected consumption path C0t; C1t :
(12.13)                             C0t = (1  )y St
(12.14)                             C1t = (1 + r)(y + St):
Because the government has taken y from the agent while young, he is left only with (1
 )y to split between consumption while young and own-savings, St. When old, the agent
gets the beneﬁt of both public (government forced) savings y and private (own) savings
St. Consumption while old is merely the total volume of savings times the prevailing gross
interest rate 1 + r.

We are now ready to ﬁnd St for this agent. The agent maximizes U (C0t ; C1t ) where C0t as
a function of St is given by equation (12.13) and C1t by equation (12.14). Thus the agent
solves:
                              n p                             p                  o
                         max 2
                          St
                                   (1        )y St + 2                r y + St) :
                                                                   (1 + )(

                                   S
Assuming that the constraint t  0 will not be binding, we take the derivative of this
                          S
function with respect to t and set it to zero to ﬁnd the optimal value of t . So:        S
                                                               p
                                   p
                                                1
                                                          +p
                                                                 r
                                                                1+
                                                                             :
                                    (1           )y St       y S
                                                                 + t
                                                                     =0

We cross-multiply to ﬁnd:
                   p              p                        p
                              r
                         (1 + )            )y St = y + St;
                                           (1
                         [ 2 (1 + r)][(1  )y St ] = y + St ;
                          [ 2 (1 + r)](1  )y y = [1 + 2 (1 + r)]St ; and:
                     2
                       (1 + r)y y [1 + 2 (1 + r)] = [1 + 2 (1 + r)]St :

Dividing both sides by 1 + 2 (1 + r) produces:

                                    St = 1 + (12(1+ +r)r) y y:
                                             2
(12.15)
12.3 Social Security                                                                         127


Substituting back into equations (12.13) and (12.14) gives us optimal consumption choices
in each period:

                                         C0t = 1 + 21(1 + r) y;
                                         C1t = 1 + (12 (1+ r+) r) y:
                                                  2           2



                                                                       
Notice that the government-forced public savings policy does not affect the agent’s choice
              
of savings. If increases, the agent will merely decrease his choice of t .   S
If the government sets      to exactly the agent’s desired savings rate, that is:
                                           = 1 + (12(1+ +r)r) ;
                                                 2



     S
then t = 0 and all saving is done by the government.


Unfunded Pension Systems

Now we turn our attention to unfunded pension systems (also known as pay as you go
systems), in which the government taxes the current young workers to pay the current
old retirees. The key insight will be that unfunded pension systems will dominate funded
pension systems if the population is growing quickly enough.

          t            N                            N
In period there are t young workers and t 1 old retirees who were born in period   1     t
and are now old. If the government taxes each young worker an amount it raises total 
revenue of:
                                               G = Nty:
If it distributes this equally among the old, each old agent will get      G=Nt 1 or:
                                   G  gt 1 = y Nt :
                                  Nt 1               Nt 1
Recall that the population is growing at a rate n so that Nt = (1 + n)Nt 1 . Hence:
                                     gt 1 = y(1 + n):
Notice that, since the population growth rate is constant at n, gt does not vary with time,
so we write merely g .

Consider again the agent’s budget constraints as a function of  and St , equations (12.13)
and (12.14) above, only now using the unfunded pension system:
                                 t   C
                                 0 = (1    )      y S;
                                                t and:
                                 1   C            rS
                                 t = (1 + ) + (1 + )
                                             t          n y:
128                                                       The Effect of Government Purchases


                                  S
We could solve this explicitly for t as a function of     ; y; n; r
                                                              in much the same way that
we did above (in fact, this is a good exercise to do on your own), but instead we are will
simply provide intuition for the agent’s choices.

  n r
If 6= then the agent is no longer indifferent between public and private savings. If       n<r
                                                                                           ,
                                                  
then public savings make the agent worse off. As increases more and more of the agent’s
wealth is being used in a relatively low-return activity. Agents would complain bitterly to
their government about this (apparent) waste of their money.

On the other hand, if  n>r     , then the agent would prefer to save entirely by using the
government pension system. Agents would demand that the system be increased until
their private savings (in the relatively inefﬁcient bond market) fell to zero.



Exercises

Exercise 12.1 (Easy)
For each of the following questions provide a brief answer.

  1. (True, False or Uncertain) All things being equal, there is more total savings under a
     funded than under an unfunded pension system.
  2. For the U.S., at the moment, is   n > r?
  3. Name three items in the Federal budget that account for more than 20% of all gov-
     ernment expenditures (each).

Exercise 12.2 (Easy)
Assume that every dollar spent by the government augments total output by , where 0           <
<                                                    Y
    1. Assume that total private output is ﬁxed at and that the government pays for its
expenditures with lump-sum taxes. What is the absolute maximum amount of government
          G
spending, ? At this level, how much does the household consume and invest?

Exercise 12.3 (Moderate)
For this exercise assume that the representative household lives for only two periods and
                                          C ;C
has preferences over consumption streams f 0 1 g given by:
                                  U (C0) + U (C1 );
where = 1=(1 + ) and  > 0. Here assume that U 0 > 0; U 00 < 0. The household has a
constant endowment stream fY; Y g which is not affected by government spending. Any
government spending must be paid for by lump-sum taxes on the representative house-
hold. There is no capital stock. This is a closed economy. Answer the following questions:

  1. Assume that the government spends the same amount                 G each period. What is the
                                   r
     market-clearing interest rate, 0 ?
Exercises                                                                                          129


    2. Assume that the government spends different amounts in each period, f              G0; G1 g and
            G >G
       that 0                                                      
                 1 . Now what is the market-clearing interest rate 0 ?    r
                          r   r
    3. Which is greater, 0 or 0 ? Does this ﬁt with your intuition about the effect of tempo-
       rary government spending?

Exercise 12.4 (Moderate)
                                                                  S
Consider again the model of Section 12.3 above. Calculate t explicitly when the return on
                  n                                        r              n r
public savings is and the return to private savings is . Assume 6= and is small.      
Exercise 12.5 (Moderate)
Grace lives for two periods. She has preferences over consumption streams 0           c ; c1 of:
                                  u(c0; c1 ) = ln(c0) + ln(c1);
where 0   <     1. Grace is endowed with one unit of time each period. In the ﬁrst period,
                                                                                  w
she can divide her time between working in a low-wage job at a wage of = 1 or attending
S hours of school. Grace earns nothing while in school, but she is augmenting her human
capital. In the second period of life, Grace spends all of her time at her high-wage job,
earning   AK 1 where  K1 is her human capital and    A> 1. Human capital is augmented by
                                   K S                                S
schooling by the simple formula 1 = , so given a choice for , Grace earns 1          while    S
young and   AS  while old. There is no bond market.

The government is interested in helping Grace go to school. It levies a lump-sum tax of        G
on Grace when she is young and uses it to augment her human capital so that 1 = +         K S G
where   >0. Answer the following questions:

    1. Assume   G = 0. Find Grace’s optimal schooling choice S and human capital K1.
    2. Assume G > 0. Find Grace’s optimal schooling choice S and human capital K1 .
       Remember that K1 is affected directly by G. Show that S is decreasing in G and that
       K1 is decreasing in G is  < 1.
    3. Now assume that the human capital augmentation is a a straight subsidy from the
       government, that is, the government has taxed someone else to pay for Grace’s
                                                                              S
       schooling, so she is not taxed at all while young. Now how do and 1 vary with   K
      G  ?
  Variable      Deﬁnition
     Bt                                                t
                Household savings at the end of period (if posi-
                tive), or household debt (if negative).
   C; Ct        Consumption by the household (in period ). t
  C a; C b      Speciﬁc consumption levels used in an example.
  fetg1t=0      Sequence of household endowments over time.
     G          Government spending (usually assumed to be
                constant).
      It        Household’s investment in the capital stock at
                time .t
  Kt; K0                                 t
                Capital stock in period (initial capital stock).
   YtP          Output from private productive processes.
   YtG          Output from government production which is re-
                funded to the household.
      Yt                                 t
                Total output in period , the sum of private and
                government output.
                Household discount factor, usually assumed to
                    =     
                be 1 (1 + ).
               Household discount rate.
     Æ          Depreciation rate of capital.
V (fCtg1t=0)    Household’s preferences over an entire stream of
                consumptions.
U (Ct); u(Ct)                                t
                Household utility in period from consumption
                                 C
                in that period of t .
   C0t ; C1t    Consumption of generation born in period       t
                while young and old.
     Nt                              t
                Population in period .
     n          Growth rate of population.
     r          Real interest rate.
               Income tax rate.
     y          Household income.
     St         Household gross private savings.
     G          The government’s realized revenue from taxes on
                young.
      gt        Government’s per-capita payments to the old,
                G=N             t
                     t , in period + 1.


                Table 12.1: Notation for Chapter 12
Chapter 13

The Effect of Taxation

Taxes affect household behavior via income and substitution effects. The income effect
is straightforward: as taxes go up, households are poorer and behave that way. For ex-
ample, if leisure is a normal good, then higher taxes will induce consumers to consume
less leisure. The substitution effect is trickier, but it can be much more interesting. Gov-
ernments levy taxes on observable and veriﬁable actions undertaken by households. For
example, governments often tax consumption of gasoline and proﬁts from sales of capital
assets, like houses. These taxes increase the costs to the households of undertaking the
taxed actions, and the households respond by adjusting the actions they undertake. This
can lead to outcomes that differ substantially from those intended by the government.

Since optimal tax policy is also a subject of study in microeconomics and public ﬁnance
courses, we shall concentrate here on the effect of taxation on labor supply and capital ac-
cumulation. When modeling labor supply decisions we are going to have a representative
agent deciding how to split her time between labor supply and leisure. Students might
object on two grounds: First, that the labor supply is quite inelastic (since everyone, more
or less, works, or tries to) and second, that everyone puts in the same number of hours per
week, and the variation in leisure comes not so much in time as in expenditure (so that
richer people take more elaborate vacations).

The representative household stands for the decisions of millions of underlying, very small,
households. There is, to name only one example, mounting evidence that households
change the timing of their retirement on the basis of tax policy. As taxes increase, more
and more households choose to retire. At the level of the representative household, this
appears as decreasing labor supply. As for the observation that everyone puts in either 40
hours a week or zero, this misses some crucial points. The fact is that jobs differ signiﬁ-
cantly in their characteristics. Consider the jobs available to Ph.D. economists: they range
from Wall Street ﬁnancial wizard, big-time university research professor, to small-time col-
lege instructor. The fact is that a Wall Street ﬁnancial wizard earns, on her ﬁrst day on
132                                                                     The Effect of Taxation


the job, two or three times as much as a small-time college instructor. Of course, college
teachers have a much more relaxed lifestyle than ﬁnanciers (their salary, for example, is
computed assuming that they only work nine months out of the year). The tax system
can easily distort a freshly-minted Ph.D.’s choices: Since she consumes only the after-tax
portion of her income, the Wall Street job may only be worth 50% more, after taxes, than
the college instructor’s job. The point is not that every new economics Ph.D. would plump
for the college instructor’s job, but that, as the tax on high-earners increased, an increasing
fraction would. Again, we can model this with a representative household choosing how
much leisure to consume.

We begin with a general overview of tax theory, discuss taxation of labor, then taxation of
capital and ﬁnally consider attempts to use the tax system to remedy income (or wealth)
inequality.




13.1 General Analysis of Taxation

In this section we will cast the problem of taxation in a very general framework. We will
use this general framework to make some deﬁnitions and get some initial results.




Notation

                                                          a A
Assume that the household take some observed action in (this discussion generalizes
                  a                                       a
to the case when is a vector of choices). For example, could be hours worked, number
of windows in one’s house, or the number of luxury yachts the household owns (or, if
a                                  A                                    a
  is a vector, all three). The set is the set of allowed values for , for example 0 to 80
hours per week, f0 1 2; ; ;::: ;
                              500g windows per house or 0 to ten luxury yachts (where we
are assuming that no house may have more than 500 windows and no household can use
more than 10 luxury yachts).

                                            a                       A
The government announces a tax policy H( ; ), where H( ) : ! R . That is, a tax policy
is a function mapping observed household choices into a tax bill which the household has
to pay (if positive), or takes as a subsidy to consumption (if negative). The term (which
may be a vector) is a set of parameters to the tax policy (for example, deductions). The
                                                 a
household is assumed to know the function H( ; ) and before it takes action .      a
An example of a tax policy H is the ﬂat income tax. In a ﬂat income tax, households pay
                                   a                           
a ﬁxed fraction of their income in taxes, so = , where is the ﬂat tax rate. A more
complex version of the ﬂat income tax allows for exemptions or deductions, which are simply
                                                                        E
a portion of income exempt from taxation. If the exempt income is , then the parameters
13.1 General Analysis of Taxation                                                                            133


to the tax system are         =f   E;  g and H(a; ) is:
                                               
                                     H(a; ) = 0 ;(a E ); aa  E:
                                                                E


Deﬁnitions

We can use our notation to make some useful deﬁnitions. The marginal tax rate is the tax
                                          a
paid on the next increment of . So if one’s house had 10 windows already and one were
considering installing an 11th window, the marginal tax rate would be the increase in one’s
tax bill arising from that 11th window. More formally, the marginal tax rate at is:              a
                                                   @ H ( a; ) :
                                                      @a
                                      a
Here we are assuming that is a scalar and smooth enough so that H( ; ) is at least           a
once continuously differentiable. Expanding the deﬁnition to cases in which H( ; ) is                    a
                 a
not smooth in (in certain regions) is straightforward, but for simplicity, we ignore that
possibility for now.

The average tax rate at     a is deﬁned as:
                                                    H(a; ) :
                                                        a
Note that a ﬂat tax with          E = 0 has a constant marginal tax rate of  , which is just equal to
the average tax rate.

             a
If we take to be income, then we say that a tax system is progressive if it exhibits an
increasing marginal tax rate, that is if H0 ( ; ) 0. In the same way, a tax system is said to
                                                    a       >
be regressive if H0 ( ; ) 0.
                     a        <

Household Behavior

Let us now turn our attention to the household. The household has some technology for
                                                                         a        a     a
producing income Y 1 that may be a function of the action , so Y ( ). If is hours worked,
                              a a                                                       a
then Y is increasing in , if is hours of leisure, then Y is decreasing in and if is house-           a
                                               a
windows then Y is not affected by . The household will have preferences directly over
       a                                       a        a
action and income net of taxation Y ( ) H( ; ). Thus preferences are:
                                              U [a; Y (a) H(a; )] :
There is an obvious maximization problem here, and one that will drive all of the analysis
                                                                              a
in this chapter. As the household considers various choices of (windows, hours, yachts),
  1 We use the notation   Y here to mean income to emphasize that income is now a function of choices a.
134                                                                     The Effect of Taxation


it takes into consideration both the direct effect ofa on utility and the indirect effect of a,
                              a      a
through the tax bill term Y ( ) H( ; ). Deﬁne:

                              V ( )  max
                                      a2A
                                          U [a; Y (a) H(a; )] :
For each value of , let   amax( ) be the choice of a which solves this maximization problem.
That is:

                       V ( ) = U [amax ( ); Y (amax( )] H [amax( ); )] :
Assume for the moment that U , Y and H satisfy regularity conditions so that for every
possible jpsi there is only one possible value for amax .

The government must take the household’s response amax ( ) as given. Given some tax
system H, how much revenue does the government raise? Clearly, just H [amax ( ); ]. As-
sume that the government is aware of the household’s best response, amax ( ), to the gov-
ernment’s choice of tax parameter . Let T ( ) be the revenue the government raises from
a choice of tax policy parameters :

(13.1)                              T ( ) = H [amax ( ); ] :
Notice that the government’s revenue is just the household’s tax bill.

                  a
The functions H( ; ) and T ( ) are closely related, but you should not be confused by
              a
them. H( ; ) is the tax system or tax policy: it is the legal structure which determines
what a household’s tax bill is, given that household’s behavior. Households choose a value
      a                                                                     a
for , but the tax policy must give the tax bill for all possible choices of , including those
that a household might never choose. Think of H as legislation passed by Congress. The
related function T ( ) gives the government’s actual revenues under the tax policy H( ; ) a
when households react optimally to the tax policy. Households choose the action which a
makes them happiest. The mapping from tax policy parameters to household choices is
          a
called max ( ). Thus the government’s actual revenue given a choice of parameter , T ( ),
                                                a
and the legislation passed by Congress, H( ; ), are related by equation (13.1) above.


The Laffer Curve

How does the function T ( ) behave? We shall spend quite a bit of time this chapter con-
sidering various possible forms for T ( ). One concept to which we shall return several
                                            a                  a
times is the Laffer curve. Assume that, if is ﬁxed, that H( ; ) is increasing in (for ex-
ample, could be the tax rate on house windows). Further, assume that if is ﬁxed, that
  a                       a
H( ; ) is increasing in . Our analysis would go through unchanged if we assumed just
the opposite, since these assumptions are simply naming conventions.

Given these assumptions, is T necessarily increasing in ? Consider the total derivative of
T with respect to . That is, compute the change in revenue of an increase in , taking in
13.1 General Analysis of Taxation                                                        135


to account the change in the household’s optimal behavior:


                   dT ( ) = @ H [amax ( ); ] @amax( ) + @ H [amax( ); ] :
(13.2)
                    d             @a           @              @
                                                                        a
The second term is positive by assumption. The ﬁrst term is positive if max is increasing in
     a
  . If max is decreasing in , and if the effect is large enough, then the government revenue
function may actually be decreasing in despite the assumptions on the tax system H. If
this happens, we say that there is a Laffer curve in the tax system.

A note on terms: the phrase “Laffer curve” has become associated with a bitter political
debate. We are using it here as a convenient shorthand for the cumbersome phrase, “A
tax system which exhibits decreasing revenue in a parameter which increases government
revenue holding household behavior constant because the household adjusts its behavior
in response”. Do tax systems exhibit Laffer curves? Absolutely. For example, a Victorian-
era policy which levied taxes on the number of windows (over some minimum number
designed to exempt the middle class) in a house, over a span of years, resulted in grand
houses with very few windows. As a result, the hoi polloi began building more modest
homes also without windows and windowlessness became something of a fashion. In-
creases in the window tax led, in the long term, to decreases in the revenue collected on the
window tax. The presence of a Laffer curve in the U.S. tax system is an empirical question
outside the scope of this chapter.

Finally, the presence of a Laffer curve in a tax system does not automatically mean that a
tax cut produces revenue growth. The parameter set must be in the downward-sloping
region of the government revenue curve for that to be the case. Thus the U.S. tax system
could indeed exhibit a Laffer curve, but only at very high average tax rates, in which case
tax cuts (given the current low level of taxation) would lead to decreases in revenue.




Lump-sum Taxes

Now consider the results if the government introduced a tax system with the special char-
acteristic that the tax bill did not depend on the household’s decisions. That is,


                                       @ H(a; ) = 0;
                                          @a
for all choices of . Notice that the household’s optimal decisions may still change with ,
                                                    a
but that the government’s revenue will not vary as max varies. Let us determine what hap-
136                                                                   The Effect of Taxation


pens to the derivative of the government revenue function T from equation (13.2) above:

                   dT ( ) = @ H [amax( ); ] @amax( ) + @ H [amax ( ); ]
                    d           
                                    @a  @                     @
                                  @amax ( )   @ H [amax ( ); ]
                          = (0)
                                     @      +
                                                    @
                            @ H [amax( ); ] :
                          =
                                   @
This is always greater than zero by assumption. Hence there is never a Laffer curve when
                                     @ =@a
the tax system has the property that H     = 0, that is, with lump-sum taxes.

Taxes which do not vary with household characteristics are known as poll taxes or lump-
sum taxes. Poll taxes are taxes that are levied uniformly on each person or “head” (hence
the name). Note that there is no requirement that lump sum taxes be uniform, merely
that household actions cannot affect the tax bill. A tax lottery would do just as well. In
modern history there have been relatively few examples of poll taxes. The most recent
use of poll taxes was in England, where they were used from 1990-1993 to ﬁnance local
governments. Each council (roughly equivalent to a county) divided its expenditure by
the number of adult residents and delivered tax bills for that amount. Your correspondent
was, at the time, an impoverished graduate student living in the Rotherhithe section of
London, and was presented with a bill for $350 (roughly $650 at the time). This policy was
deeply unpopular and led to the “Battle of Trafalgar Square”—the worst English riot of the
20th century. It is worth noting that this tax did not completely meet the requirements of
a lump sum tax since it did vary by local council, and, in theory, households could affect
the amount of tax they owed by moving to less proﬂigate councils, voting Conservative
or rioting. These choices, though, were more or less impossible to implement in the short-
term, and most households paid.

Lump-sum taxes, although something of a historical curiosity, are very important in eco-
nomic analysis. As we shall see in the next section, labor supply responds very differently
to lump-sum taxes than to income taxes.


The Deadweight Loss of Taxation

Lump sum taxes limit the amount of deadweight loss associated with taxation. Consider the
effect of an increase in taxes which causes an increase in government revenue: revenue
increases slightly and household income net of taxes decreases by slightly more than the
revenue increase. This difference is one form of deadweight loss, since it is revenue lost to
both the household and the government.

It is difﬁcult to characterize the deadweight loss of taxation with the general notation we
have established here (we will be much more precise in the next section). However, we
will be able to establish that the deadweight loss is increasing in the change of household
13.2 Taxation of Labor                                                                            137


behavior. That is, the more sensitive        amax ( ) is to , the larger the deadweight loss.
                                a
Consider a tax policy H( ; ) and two different parameter sets for the tax policy, 0 and
                                    a
 1 . Assume that, for ﬁxed , H( ; 0 )   a     < a
                                      H( ; 1 ). The household’s utility at each of the tax
parameters is:

                  V ( 0) = U (amax( 0); Y [amax ( 0)] H [amax( 0); 0]) ; and:
                  V ( 1) = U (amax( 1); Y [amax ( 1)] H [amax( 1); 1]) :
The claim is that the change in household net income exceeds the change in government
revenue, or:

(13.3)       a
         (Y [ max ( 0 )]       H [amax ( 0 ); 0 ]) (Y [amax ( 1 )] H [amax ( 1 ); 1])
                                                                                  > T ( 1 ) T ( 0 ):
                           a
Recall that T ( ) = H [ max ( ); ]. Equation (13.3) is true only if:

                                        Y [amax ( 0 )] > Y [amax ( 1 )]:
That is, the more household gross (that is, pre-tax) income falls in response to the tax,
the greater the deadweight loss. But since household gross income is completely under
                                                     a
the household’s control through choice of , this is tantamount to saying that the more                 a
changes, the greater the deadweight loss. This is a very general result in the analysis of
taxation: the more the household can escape taxation by altering its behavior, the greater
the deadweight loss of taxation.

                                                                                       a
If we further assume that there are no pure income effects in the choice of , then lump-
                                                             a
sum taxes will not affect the household’s choice of and there will be no deadweight loss to
taxation (a formal proof of this point is beyond the scope of this chapter). The assumption
of no income effects is relatively strong, but, as we shall see later, even without it lump-sum
taxes affect household behavior very differently than income taxes.



13.2 Taxation of Labor

In this section we shall assume that households choose only their effort level or labor sup-
    L
ply . We will assume that they have access to a technology for transforming labor into the
consumption good of        wL                w
                           . Think of as a wage rate. Although we will not clear a labor
                             w
market in this chapter, so is not an endogenous price, we can imagine that all households
have a backyard productive technology of this form.

Households will enjoy consumption and dislike effort, but will be unable to consume with-
out expending effort. They will balance these desires to arrive at a labor supply decision.
Government taxation will distort this choice and affect labor supply.
138                                                                     The Effect of Taxation


A Simple Example

As a ﬁrst step, consider a household with a utility function over consumption     C and effort
Lof the form:
                                                      p
                                     U (C; L) = 2 C L:
The household’s income takes the form:

                                          Y (L) = wL:
Assume that there is a simple ﬂat tax, so the tax policy is:

                                      H ( L;  ) =  Y ( L) :
Hence the household’s budget constraint becomes:

                       C = Y (L) H(L;  ) = wL wL = (1  )wL:
Substituting this budget constraint into the household’s utility function produces:
                                              n p                   o
                             V ( ) = max
                                       L
                                          2 (1  )wL L :

                                                                    
This function is just the household’s utility given a tax rate . We can solve the maximiza-
                       V
tion problem to ﬁnd ( ) directly. Take the derivative with respect to the single choice
                       L
variable, labor supply , and set it to zero to ﬁnd:
                                     r
                                         (1     )w             :
                                              L           1=0

Solving for   L produces:
                                    L( ) = (1  )w:
We can substitute the labor supply decision L( ) back into the government’s tax policy to
ﬁnd the government’s revenue function:

                        T ( ) = H [L( );  ] = wL( ) = w2  (1  ):
Does this system exhibit a Laffer curve? Indeed it does. Clearly, T ( ) in this case is simply
a parabola with a maximum at     = 0:5. (See Figure (13.1)).
The effect of the income tax was to drive a wedge between the productivity of the house-
                   w
hold (constant at ) and the payment the household received from its productive activity.
The household realized an effective wage rate of (1         w                    
                                                        ) . As the ﬂat tax rate moved to
unity, the effective wage rate of the household falls to zero and so does its labor supply.
Compare this tax structure with one in which the household realizes the full beneﬁt of its
effort, after paying its ﬁxed obligation. Thus we turn our attention next to a lump-sum tax.
13.2 Taxation of Labor                                                                                             139


                                                        Tax revenue when γ=0.5
                                0.25




                                    0.2




                                0.15


                             T(τ)
                                    0.1




                                0.05




                                     0
                                      0     0.1   0.2    0.3   0.4       0.5   0.6   0.7   0.8       0.9   1
                                                                         τ


                             Figure 13.1: A government revenue func-
                             tion that exhibits a Laffer curve.


A Lump-sum Tax

                                                                               
Now let us introduce a lump-sum tax of amount L .2 No matter what income the house-
                                                                                      
hold accumulates, it will be forced to pay the amount L . On the other hand, after paying
L , the household consumes all of its income. Previously, with the income tax, the house-
hold faced an effective wage rate of (1                        w
                                              ) , which decreased as increased. Now the                        
                                                  w
household’s effective wage will be (after the critical income of L is reached). Does this                  
                                                          
mean that effort will be unaffected by L ? Recall from the previous section that this will
only happen if there are no wealth effects. Examining the utility function reveals that it is
not homogeneous of degree 1 in wealth, hence we can expect labor supply to vary to with
L . In particular, since leisure is a normal good, we will expect that labor supply will be
                
increasing in L . The household’s budget constraint, with this tax policy, becomes:
                                                         C = wL L;
so the household’s maximization problem is:
                                                               n p                               o
                                          V (L) = max
                                                    L
                                                       2 wL L L :

The ﬁrst-order condition for optimality is:

                                                   pwLw                       1=0   :
                                                                     L
Solving for   L produces:
                                                        L(L) = w + wL :
   2 The notation  is meant to imply lump-sum tax: there is a surfeit of notation involving  and L in this
                    L
chapter. Please refer to the table at the end if you become confused.
140                                                                                 The Effect of Taxation


We see that labor supply is in fact increasing in the lump-sum tax amount L . The house-   
hold increases its labor supply by just enough to pay its poll tax obligation. What is the
government revenue function? It is, in this case, simply:
                                              T (L) = L :
So there is no Laffer curve with a lump-sum tax (of course).


General Labor Supply and Taxation

With the assumption of a square-root utility function, we were able to derive very inter-
esting closed-form solutions for labor supply and the government revenue function. Our
results, though, were hampered by being tied to one particular functional form. Now we
introduce a more general form of preferences (although maintaining the assumption of lin-
ear disutility of effort). We shall see that a Laffer curve is not at all a predestined outcome
of income taxes. In fact, when agents are very risk-averse, and when zero consumption is
catastrophic, we shall see that the Laffer curve vanishes from the income tax system.

Consider agents with preferences over consumption                     C and labor supply L of the form:
                                           C
                             U (C; L) =              L;              6 0;  1
                                                                     =
(13.4)
                                      C L;  ln( )                     = 0:
Notice the immediate difference when 0 <  1 and when  0. In the former case,
a consumption of zero produces merely zero utility, bad, but bearable; while in the latter
case, zero consumption produces a utility of negative inﬁnity, which is unbearable. Agents
will do anything in their power to avoid any possibility of zero consumption when  0.
                                                             :
Recall that in our previous example (when = 0 5) labor supply dropped to zero as the
income tax rate increased to unity. Something very different is going to happen here.

                                                
Given a distortionary income tax rate of , the household’s budget constraint becomes:
                                           C = (1  )wL;
as usual. The household’s choice problem then becomes:
                                                                             
                               V ( ) = max         [(1     )wL]            L :
                                         L
The ﬁrst-order necessary condition for maximization is:
                                     [(1     )w ] L 1           1=0     :
This in turn implies that:
                                     L1      = [(1         )w] ; so:
                                           L = [(1         )w ] :
                                                                 1
13.2 Taxation of Labor                                                                                                                         141


             < 0, then L is decreasing in w.
Notice that if

The government revenue function T ( ) is:

                          T ( ) = wL( ) =  (1  ) w :                                  1           1
                                                                                                           1




The question becomes, when does this tax system exhibit a Laffer curve? This is tanta-
mount to asking when, if ever, the government revenue function is decreasing in . We                                                       
begin by taking the derivative of T with respect to :                              
                                                                                                                              
                      T 0 ( ) = w   1
                                         1
                                              (1       )      1
                                                                               1
                                                                                                (1  )        1           1

                                                                                                                  
                             =   w   1
                                         1
                                             (1    )      1           1
                                                                               1                  1
                                                                                                               
                                                                                                       
                             =   w   1
                                         1
                                             (1    )      1           1
                                                                               1
                                                                                       1
                                                                                               1
                                                                                                        :
Notice immediately that the derivative T 0 ( ) has the same sign as the term:
                                                               
                                                                                  
                                                       1
                                                                   1
                                                                       1
                                                                                ;
since the term outside of the brackets is positive by the assumptions that                                                         w > 0 and < 1.
Thus T 0 ( ) will be negative only if:
         
                                              1
                                                       1
                                                           1
                                                                         0; or:
                                                                        1 :
                                    
The tax rate must satisfy 0   1. Thus we notice two things immediately: (1) If  0
there is no Laffer curve, and (2) If 0             < <
                                         1, then there is a Laffer curve, and the peak
          
occurs at = 1      .

What is the real-world signiﬁcance of this sharp break in behavior at = 0? Agents with
   0 are very risk-averse and are absolutely unwilling to countenance zero consumption
(the real world equivalent would be something like bankruptcy). In addition, their labor
                                                   w
supply is decreasing in the wage rate . In contrast, agents with     0 are less risk-averse                                >
(although by no means risk neutral), are perfectly willing to countenance bankruptcy and
have labor supply curves which are increasing in the wage rate . In a world with many                                  w
households, each of whom has a different value of , and a government which imposes a
                  
common tax rate , we would expect greater distortions among those households that are
less risk-averse and harder-working.

Finally, the reader may ﬁnd it an instructive exercise to repeat this analysis with a lump-
sum tax. Households will all respond to a lump-sum tax by increasing their labor effort by
                               =w
precisely the same amount, L , no matter what their value of .
142                                                                              The Effect of Taxation


13.3 Taxation of Capital

Now we turn our attention to the problem of a household which owns some capital stock
and a technology for transforming capital into output. We shall see that, if households are
allowed to deduct investment from their taxes (that is, if investment is tax-exempt), then
there will not be a Laffer curve in income taxes. If on the other hand investment is not
tax-deductible, or only a portion is, then there will be a Laffer curve in income taxation.

The household lives forever and has preferences over consumption streams f t g1
                                                                              t=0 of:      C
                                             1
                                             X
                                                     u Ct);
                                                    t (
                                              t=0
where          =    
            = 1 (1 + ). Here    > 0 is the discount rate.
The household begins life with an initial stock of capital           K0 > 0. In addition, the income of
                                Y
the household each period, t , is:

                                               Yt = Kt ;
        K                                                        t
where t is the household’s capital stock in period and is a production parameter
satisfying 0   < <
                1. The capital stock evolves according to the law of motion:

                                       Kt+1 = (1 Æ)Kt + It ;
        I
where t is investment in physical capital (a choice of the household) and               Æ is the depreci-
ation rate of capital. The economy is closed, so there is no bond market.

Assume that the government’s tax policy is a ﬂat tax on income from capital. We will
consider two forms: one in which investment is exempt and one in which it is not. Thus
                                       t
without the exemption, in period , the legislative tax code requires households to pay:

                                           Ht (Kt;  ) = Kt :
                                                                                    t
If investment is exempt, then the legislative tax code requires, in period , that households
pay:

                                      Ht (Kt;  ) =  (Kt      It ) :
                          K                               a
The household chooses t (so it plays the role of ) in response to changes in the tax code.
                                                                              K 
We will study the steady-state capital level as a function of taxes SS ( ). Thus the steady-
state revenue raised each period by the government is:

                                      T ss ( ) = Hss [K ( );  ] :
                                                          SS



This will vary depending on whether investment is deductible or not.
13.3 Taxation of Capital                                                                        143


The household’s budget constraint is:

                                   Ct + It + (tax bill)t = Yt:
Begin by assuming that investment is non-deductible. The tax bill then becomes the tax
                    Y
rate times income t , or:

                                       (tax bill)t =   Yt :
Hence the household’s budget constraint becomes:

(13.5)                                Ct = (1  )Yt It:
Now assume that investment is tax deductible. The government levies a tax at rate on        
every dollar earned above investment. This also sometimes called paying for investment with
pre-tax dollars. That is:

                                                  Y It):
                                    (tax bill)t = ( t

The household’s budget constraint now becomes:

(13.6)                               Ct = (1  )(Yt It):
We shall see that, because the tax system in equation (13.5) raises the implicit price of
investment, the steady-state level of capital will be distorted away from its ﬁrst-best level.
Thus as the tax rate increases, investment and the steady-state capital level fall, so there
is a Laffer curve lurking in the tax system. In contrast, the tax system in equation (13.6)
leaves the implicit price of investment in terms of output unaffected by the tax rate, hence
we shall see that the steady-state capital level will be unaffected by the tax rate. As a result,
the Laffer curve is banished from the system, and government revenues become linear in
             
the tax rate .


Analysis When Investment is Not Exempt

We want to collapse the budget constraint in equation (13.5) and the law of motion for
                                              C                   K       K
capital into one equation, giving consumption t as a function of t and t+1 , where in
         t                  K                       K
period the household takes t as given and chooses t+1 . Thus write consumption t as:      C
(13.7)                     Ct = (1  )Kt + (1 Æ)Kt Kt+1:
Here we have substituted in Kt for income Yt from the agent’s technology.

The household’s problem thus becomes:
                                              1
                                              X
                                      max
                                     fKt+1 g1
                                                       uC ;
                                                    t ( )
                                                        t
                                            t=0 t=0
144                                                                                                  The Effect of Taxation


         C
where t is given in equation (13.7). Take the derivative with respect to the capital choice
K                                     j
  j +1 for some arbitrary period (where we avoid taking derivatives with respect to capital
             T           t
in period because is the time index in the summation). Remember the trick to these
             K                               j           j
problems: j +1 will appear in period and period + 1. Hence optimality requires:
                        j u0 (C )[ 1] + j +1 u0 (C )[ (1  )K 1 + 1 Æ ] = 0:
                               j                  j +1       j +1
Divide by the common factor j . Now assume that a steady-state has been reached. At a
              K K            K       C C C
steady-state t = t+1 = SS and t = t+1 = SS . Hence:

                             u0(C ) = u0(C )[ (1  )K 1 + 1 Æ]:
                                 SS                 SS                      SS


Recall that      1
                   = 1 + . Divide both sides by u0 (C ) to ﬁnd:       SS



                                  1 +  = (1  )K      1
                                                         + 1 Æ:  SS


Hence:
                                                                                1 1
                                      K = (1  )
                                          SS
                                                         1
                                                             1

                                                                      +Æ                :
Notice immediately that the steady-state capital level is decreasing in the tax rate . Gross                      
income each period at the steady-state is:
                                                                                1
                                      Y = (1  )
                                          SS
                                                         1
                                                                     +Æ                :
         
Let T t ( ) be the tax revenue of the government each period when the tax rate is . At the                       
steady-state:
                                                                                       
                             T t ( ) = Y =  (1  )                                            :
                                                                                             1
(13.8)
                                                                                 +Æ
                                                                  1
                                               SS




Since 0  < <  1, T t is a parabola with a peak at                     =1               . Thus this tax system exhibits a
Laffer curve.


Analysis When Investment is Exempt

As before, we begin by collapsing the budget constraint (now equation (13.6)) and the law
of motion for capital into one equation. Thus write:

                               Ct = (1  )(Kt + (1 Æ)Kt Kt+1):
Notice the difference that exempting investment makes. The entire right-hand-side is now
multiplied by 1     
                    , so the household cannot escape taxation by altering its mix of invest-
ment and consumption.
13.3 Taxation of Capital                                                                                                             145


Once again, we choose sequences of capital to maximize:
                                                                 1
                                                                 X
                                                  max
                                                 fKt+1 g1
                                                                t ( )
                                                                    t       uC ;
                                                        t=0 t=0

       C
where t is given above. The derivative with respect to                                 Kj+1 is now:
                     j 0(
                u Cj )[ (1  )] + j+1 u0(Cj+1 )[(1                                  )( Kj+1 1 + 1 Æ)] = 0:
Divide the equation by the common factor (1  ) j . Notice that the tax rate has vanished.
Now assume a steady-state. Hence:

                                      u0(C ) = u0(C )[ K
                                            SS                  SS          SS
                                                                                   1
                                                                                       +1       Æ ]:
Solving for   K produces:
                SS


                                                                          1 1
                                                  K = +Æ
                                                      SS                               :
Notice that the steady-steady state capital level is unaffected by the tax rate . Gross income                 
                            Y
at the steady state is SS and is given by:

                                                           Y =K :
                                                           SS         SS



Again, this is not a function of .      
The government’s period-by-period revenue function T t ( ) is now simply:                   
                                                  T t ( ) =  (Y     SS         I );
                                                                                  SS



       I
where SS is the steady-state investment level (which is tax-exempt). We can ﬁnd                                                 I by
                                                                                                                                SS

solving the law of motion for capital:

                                                 Kt+1 = (1 Æ)Kt + It
for the steady-state level of capital:

                                             K = (1 Æ)K + I ; so:
                                                 SS                   SS         SS

                                                   I = ÆK :SS              SS



Hence T t becomes:
                                                                                "                            1 #
           T t ( ) =  (Y       I ) =  (K                ÆK ) =                                     Æ +Æ                :
                                                                                                1+                 1+

                            SS   SS              SS              SS
                                                                                      +Æ
Thus government revenue each period is just a linear function of the tax rate , and there                               
is no Laffer curve in this tax system.
146                                                                            The Effect of Taxation


13.4 Redistribution and Taxation

Now we turn our attention, as promised, to ﬁscal policies aimed at redistribution. We shall
write down a model with two agents. One agent will be low-productivity and the other
agent will be high-productivity. Without government intervention, there will be income
inequality in this model. Why is the government interested in redistributing income? For
now, let us simply take it as given that the ﬁscal authority will attempt to remedy income
equality by taxes and transfers. We might expect the government to address the underlying
causes of the agents’ productivity gap, but since they are likely the result of, in a best case,
different schooling histories, they are not likely to be remedied over the short-term.

Agents of type , =        i i a; b
                           have a common utility function over consumption             C i and labor
          L
effort i of the (familiar) form:

                                                 Ci          Li;
where             <
          1. There is a technology transforming labor effort into the consumption good of
the form:

                                                 Y i = w i Li ;
where =   i a; b. Assume that wa > wb so agents of type a are more productive than type b
agents.

                                     a                        
The government will tax type agents at a rate in order to make a lump-sum transfer to
      b                   v
type agents of . Hence agents face budget constraints of the form:

                                          C a = (1  )wa La; and:
                                          C b = wb Lb + v:
                          a
Agents of type face precisely the same problem that we solved in Section 13.2. Agents
              b                                          v
of type face a “negative lump sum tax” of . There is thus nothing unfamiliar about this
problem.

The government has a budget constraint which requires it to balance transfer payments              v
                                                  a
with tax revenue T a from agents of type . Assume that there are an equal number of type
a                     b
 and type agents, so the government budget constraint becomes:

                                            v = T a = wa La( ):
From our analysis in Section 13.2 above, we know that a ( ) is:       L 
                                          La( ) = [(1        )w a ] :
                                                                   1



Thus:

                                         T a ( ) =  (1  ) wa :
                                                              1        1
                                                                           1
13.4 Redistribution and Taxation                                                                               147


                b
Agents of type get a lump-sum subsidy of                    v = T a. Solving for their optimal labor supply
gives:

                                            Lb = w b
                                                                1            v:
                                                                             wb
                                                            1




                     b
Thus agents of type certainly decrease their effort as v increases.
We know that if     > 0 that agents of type a will also decrease their effort as  increases.
Hence if    > 0, redistribution will certainly lower both agent’s labor supply and total
national output.

If  <                                           a
       0, an increase in the tax on type agents will increase their labor supply. This effect
will, we shall see, never be large enough to overcome the decrease in type labor effort. As           b
a result, increases in redistribution will again lower national income. To see this, begin by
                         L         L
calculating the effect on a and b of an increase in :                            
                                                                  
                             @L a
                                     a w                    1
                                                                                 
                              @  =               (1   )      ( 1)
                                       1                 1
                                            1
                                                                                            
                                   =       (1   )      1           1
                                                                        w   a1
                                                                                         1

(13.9)                             La 1 1 1  :
                                   =

                             @La = wa La       La 
                              @   wb  1 + 1  
                                      wa
                                 = La b 1
                                                   :
(13.10)
                                      w     1   1 

Armed with these derivatives, we can consider the effect on total national output (GDP) of
       
an increase in :
                                                                                     
 dY dY dY  a     b     d      d                                                                           
                      d w L d w L                                                      w L    wL            :
                         a  a      b  b             1     a  a     a  a
 d d d
     =       +     =          +         =
                                             1    1
                                                                         1
                                                                            1     1
       wL                    dY=d <
We divide by a a , to ﬁnd that          0 if and only if:
                                                    
                                       1        < 0; or:
                                 1          1 
                                                    1
                             1           1
                                    1           1 < 0; or:
                                   1  1   1 
                                      +
                               1

                                                                              (1  ) < 1; or:
                                                                        1
                                                1               1

                                                                                1
                                                                                      < 1:
Since we are assuming here that            <
                                     0, this is always true. In this model of labor supply,
redistribution ﬁnanced by distortionary taxes leads to a decrease in total national income.
148                                                                         The Effect of Taxation


               Variable           Deﬁnition
                H(a; )            Tax policy or system: legal mapping from actions
                                                    a
                                  of household and parameters to tax liability
                                  of household.
                 T( )             Realized revenue of the government under tax
                                  policy H with parameters . The household is
                                                                              a
                                  assumed to be using its best response, max ( ).
                 a; A                                     a
                                  Action of household must lie in the set of possi-
                                  ble actions . A
                                  Vector of parameters in tax system or policy H.
                amax( )                                                      a
                                  Household’s optimal choice of action under tax
                                  policy H with parameters .
                 Y ( a)           Household’s gross (pre-tax) income as a function
                                  of household action choice .  a
          U [a; Y (a) H(a; )]                                           a
                                  Household’s utility over action and net (post-
                                  tax) income Y H.
                 V( )             Household’s indirect utility with parameters :
                                  Ua           ; a              a
                                    ( max ( ) Y ( max ( ) H [ max ( ); )]).
                 ; E             Parameters of a ﬂat tax system: the ﬂat tax rate
                                  and the exemption.


                        Table 13.1: General Tax Notation for Chapter 13.


Exercises

Exercise 13.1 (Hard)
Consider an economy with inﬁnitely many agents, each of whom is very very small. An
      i                                        c
agent has preferences over consumption i and labor effort i of:     `
                                      ui (ci; `i) = ci   `:
                                                         i i

                                                                                 ;
The preference parameter i is distributed uniformly on the interval [0 1]. So the fraction
                                                                        x
of agents with preference parameters less than some number is just , for 0   1.    x        x
For example, exactly half of the population have values of less than or equal to 0 5.     :
Agents may only choose whether or not to work, not how many hours to work. If an agent
chooses to work, she supplies exactly one unit of labor effort to the common backyard
                                                         y `
technology transforming labor effort into output as i = i . If an agent chooses not work,
her labor effort is zero, she produces nothing and consumes nothing. All agents have the
same backyard technology.

The government levies a ﬂat income tax at a rate 0         1. The tax rate  is common to all
Exercises                                                                                          149


                Variable           Deﬁnition
                 u(Ct)             One-period utility function when consumption is
                                   C t
                 Ct; ct            Aggregate consumption, household consump-
                                   tion.
                     It            Household investment in capital at time .   t
                     Kt                                 t
                                   Capital stock at time .
                     L             Representative household’s labor supply.
                     w             Wage rate on labor.
                     L            Lump sum tax amount.
                      ;Æ           Production parameters: the marginal product of
                                   capital and the depreciation rate.
                                   Preference parameter.
                wa ; wb                                            a
                                   Wage rates of agents of type and type .     b
                C a; C b                                               a
                                   Consumption of agents of type and type .        b
                La; Lb                                                 a
                                   Labor supply of agents of type and type .       b
                   v                                                   a
                                   Lump-sum transfer from type agents to type          b
                                   agents.


                               Table 13.2: Other Notation for Chapter 13


agents (that is, all agents face the same tax rate). Answer the following questions:

                               
  1. Given the tax rate , how much does an agent consume if she works? If she does not
     work?

                 i
  2. For agent , with preference parameter i , calculate the utility of working (so that
                           `
     labor supply is i = 1) and of not working (so that labor supply is i = 0). What       `
     determines whether or not an agent works?

            
  3. Given , ﬁnd the largest value of such that agents prefer to work, or are at least
     indifferent between working and not working. Call this critical value  ( ).              
            
  4. Given , multiply revenue per worker by the fraction of agents willing to work. Call
                                                                          
     this T ( ), the government revenue function. Draw T ( ) as a function of .                
  5. Is there a Laffer curve in the tax system?

Exercise 13.2 (Easy)
Suppose I ran the following regression:

                                            Gt = b0 + b1t + ut;
150                                                                     The Effect of Taxation


      t      ;
for = 1948 1949      ;::: ;               G
                      1997, and where t are real government receipts and t are some
measure of the marginal tax rates faced by a typical American for the indicated years.
                                         b
Suppose that my estimated coefﬁcient ˆ1 is negative and statistically signiﬁcant. Would
you conclude from this that there is a Laffer curve in the U.S. economy, and that we are on
its downward-sloping portion? Why or why not?

Exercise 13.3 (Moderate)
The representative household lives for one period and has preferences over consumption
C                      L
  and labor supply as follows:
                                                   p
                                  U (C; L) = 2 C L:
The government levies a ﬂat tax at rate  and a lump-sum tax of S . Money spent on the
lump-sum tax is exempt from the ﬂat tax (that is, the lump-sum tax is paid with pre-tax
dollars). The household can transform labor effort into the consumption good at a rate of
one-to-one (the wage rate is unity). Answer the following questions:


    1. What are the parameters of this tax system? What is the action chosen by the house-
       hold?

                                                   a
    2. Write down the tax system function H( ; ) in this case (replace      a with the house-
       hold’s action and with the parameters of the tax system).

                                               L
    3. If the household works some amount , write down its tax bill.

    4. Write down the household’s consumption as a function of      L;  and S .
    5. Solve the household’s problem. What is (    L ; S )?
    6. Find the government’s revenue function T ( ).

Exercise 13.4 (Easy)
Assume that a household lives for one period and has preferences over consumption and   c
                 `
labor supply as follows:

                                          4
                                              pc `:
The household earns a constant wage of     w = 1 for each unit worked. There is a ﬂat tax of
      
rate . Answer the following questions:


                                                           `
    1. Given that the household works an amount , ﬁnd the household’s tax bill, H( ; )      `
       and consumption, ( ).  c `; 
                                                               `
    2. Find the household’s optimal choice of labor effort, ( ).

    3. Find the government revenue function T ( ).     
Exercises                                                                                              151


                                                            =
    4. The government wishes to raise an amount 3 4 in tax revenue from this household.
       Which tax rate(s) can the government use. Assume that the government is benevolent
       (that is, nice). Which tax rate does the government use?

Exercise 13.5 (Hard)
                                                                                  `
Tammy lives for two periods. In the ﬁrst period of life she works hours at a wage of
w per hour. In the second period of life she is retired and supplies no labor. There is a
                                                                  b
perfect bond market on which Tammy saves an amount in the ﬁrst period of life, which
                              r                                         r
earns a net interest rate of = 0 (for a gross interest rate 1 + = 1), so Tammy’s savings
             rb b
pay off (1 + ) = in the second period of life. Tammy has preferences over consumption
             c ;c                 `
sequences f 1 2 g and effort as follows:

                          u(fc1; c2g; `) = pc1 + pc2 `:
The government taxes Tammy at a rate 1 on income earned in the ﬁrst period of life, w`.
Tammy owes no tax in the second period of life.


    1. Write down Tammy’s budget constraint in each period of her life, substitute out the
                        b
       savings term and show that Tammy’s present-value budget constraint is:

                                      c1 + 1 +1 r c2 = c1 + c2  (1 1 )w`:
    2. Calculate Tammy’s optimal choices of consumption, work, and savings:                   c1; c2; `, and
      b                                   
        , as a function of the tax rate 1 .

    3. How much revenue does the government raise as a function of the tax rate 1 , T ( 1 ).           
            
       Find 1 , the tax rate at which government revenue is maximized. What is the maxi-
       mum amount of revenue the government can raise (that is, what is T 1 ( 1 ))?      
    4. Is there a Laffer curve?

Exercise 13.6 (Hard)
Use the same preferences and technology as in Exercise (13.5) above, except that here we
                                                 
call the government tax rate 2 instead of 1 . The government will allow Tammy to exempt
                b                                                                     
her savings from taxes (as in a 401(k) plan), so she owes tax at a rate 2 in the ﬁrst period
only on the portion of her income that she does not save,            w` b
                                                                 . Tammy still owes no tax
                                                                 b
in the second period of life. If Tammy saves an amount she consumes (1          2 )(       w` b
                                                                                         ) in
                    b
period 1 and in period 2.


    1. Write down Tammy’s present-value budget constraint. How is it different from the
       one you calculated in part (1) of Exercise (13.5) above?

    2. Solve Tammy’s optimization problem. What are her optimal choices of consumption,
                            c ;c ;`           b
       work, and savings 1 2 , and as a function of the tax rate 2 ?          
152                                                                The Effect of Taxation


  3. Now how much revenue does the government raise as a function of the tax rate 2    
                                  
     (call the revenue function T 2 ( 2 )? What is the maximum amount of revenue the gov-
     ernment can raise?
  4. Is there a Laffer curve?
  5. How do your answers differ from those in Exercise (13.5)? Why?
Chapter 14

The Optimal Path of Government
Debt

Up to this point we have assumed that the government must pay for all its spending each
period. In reality, governments issue debt so as to spread their costs across several periods,
just like households do. The path of governmental debt over time very often corresponds
to events of major historical import, such as wars. For example, England has paid for her
wars by issuing debt, resulting in debt peaks during the Seven Years War, the Napoleonic
Wars, and especially World War I. Indeed, some economists argue that the sophistication
of England’s capital markets contributed to her eventual successes in the wars of the 17th
and 18th centuries.

The U.S. and several European countries have run persistent peacetime deﬁcits since about
1979. Quite a bit has been written in the popular press about the dire consequences of the
ever-mounting debt. In this chapter we will not consider that a large debt may be inher-
ently bad, instead we will treat the debt as a tool for use by a benevolent government. In
the previous two chapters we saw that government spending may crowd out consump-
tion and investment, and that government taxes may decrease labor supply and capital
accumulation, but in this chapter we will have nothing bad to say about debt. In Chap-
ter 18, however, we argue that under certain circumstances, large and persistent govern-
ment deﬁcits may be inﬂationary. In this chapter we will continue to ignore the price level
and the ability of the government to raise revenue by printing money, so we will not be
able to consider inﬂation directly.

We will begin by considering the government budget deﬁcit and deﬁning some terms. The
reader should be thoroughly familiar with the terms deﬁned there, as well as the historical
paths of the debt, deﬁcits, debt to GDP ratios and so on.

Next we will consider a very simple theory of the debt, that of Barro-Ricardo Equivalence.
154                                                   The Optimal Path of Government Debt


Barro-Ricardo Equivalence is named for Robert Barro, at Harvard, and David Ricardo, the
19th-century economist. In this theory, the timing of government taxes and spending (and
hence the path of the debt) do not matter. Only the present discounted value of these
objects is important. We shall see that Barro-Ricardo Equivalence requires some strong
assumptions. As we relax those assumptions, the timing of taxes begins to matter.

Requiring the government to use distortionary taxes is one way of breaking Barro-Ricardo
Equivalence. In the ﬁnal two sections of this chapter, we construct a fairly sophisticated
theory of government debt based on precisely this assumption. This is known as the Ram-
sey Optimal Tax problem (or simply the Ramsey problem, for short). In the Ramsey problem
the government has access only to a distortionary tax (in this case, an excise tax), and must
raise a speciﬁc amount of revenue in the least-distortionary manner. In this example, the
government will have to ﬁnance a war, modeled as a spike in planned government expen-
ditures, with a period-by-period excise tax. By ﬁnding the optimal path of tax revenues,
we can ﬁnd the optimal path of government deﬁcits and surpluses. This will provide us
with a theory of government debt and deﬁcits.

One of the features of the Ramsey model will be that both the government and the house-
hold will have access to a perfect loan market at a constant interest rate. This interest rate
will not vary with the amount actually borrowed or lent, nor will it vary across time for
other reasons. This is sometimes known as the “small open economy” equilibrium, but
truthfully we are simply abstracting from the question of equilibrium entirely. No markets
will clear in this example.



14.1 The Government Budget Constraint

                                                                    t G
Let T t be the real revenue raised by the government in period , let t be real government
                     t                                               B
spending in period (including all transfer payments) and let tg be the real outstanding
                                                t         B >
stock of government debt at the end of period . That is, tg 0 means that the government
                             t
is a net borrower in period , while tgB <     0 means that the government is a net lender in
          t                            r
period . There is a real interest rate of t that the government must pay on its debt.

Assuming that the government does not alter the money supply, the government’s budget
constraint becomes:

(14.1)                       Gt + rt 1Btg 1 = T t + (Btg Btg 1 ):
                                                                         t
The left hand side gives expenditures of the government in period . Notice that the gov-
                                                                    tG
ernment not only has to pay for its direct expenditures in period , t , it must also service the
                                     r B
debt by paying the interest charges t 1 tg 1 . Of course, if the government is a net lender,
      B
then tg is negative and it is collecting revenue from its holdings of other agents’ debt.

The right hand side of the government budget constraint gives revenues in period . The   t
government raises revenue directly from the household sector by collecting taxes T t . In
14.1 The Government Budget Constraint                                                              155


addition, it can raise revenue by issuing net new debt in the amount         Btg Btg 1.
Government debt is a stock while government deﬁcits are a ﬂow. Think of the debt as water
in a bathtub: tax revenue is the water ﬂowing out of drainhole and spending is water
running in from the tap. In addition, if left to itself, the water grows (reﬂecting the interest
rate). Each period, the level of water in the tub goes up or down (depending on t T t and     G;
r                  B
 t ) by the amount t
                     g   B g
                           t 1.
                                                                                G
Call the core deﬁcit the difference between real government purchases t and real govern-
ment tax revenue T t . In the same way, deﬁne the reported deﬁcit (or simply the deﬁcit) to be
                                                       G r B
the difference between all government spending, t + t 1 tg 1 and revenues from taxes
T t . Thus:
                               (core deﬁcit)t =Gt T t; and:
                          (reported deﬁcit)t = Gt T t + rt 1 Btg 1 :

The reported deﬁcit is what is reported in the media each year as the government wrangles
over the deﬁcit. The U.S. has been running a core surplus since about 1990.

We can convert the period-by-period budget constraint in equation (14.1) into a single,
inﬁnite-horizon, budget constraint. For the rest of this chapter we will assume that the
                                       r r                 t
real interest rate is constant, so that t = all periods . Assume further (again, purely for
simplicity) that the government does not start with a stock of debt or with any net wealth,
    B
so g 1 = 0. Thus for convenience rewrite equation (14.1) as:

                                  Gt + (1 + r)Btg 1 = T t + Btg :
The government’s period-by-period budget constraints, starting with period zero, will
therefore evolve as:

t
( = 0)                   G0 + (1 + r)  0 = T 0 + B0g ; so:
                                     B0g = G0 T 0 :
t
( = 1)                   G1 + (1 + r)B0g = T 1 + B1g ; so:
                                     B0g = 1 +1 r (T 1 G1 ) + 1 +1 r B1g :
t
( = 2)                   G2 + (1 + r)B1g = T 2 + B2g ; so:
                                     B1g = 1 +1 r (T 2 G2 ) + 1 +1 r B2g :
t
( = 3)                   G3 + (1 + r)B2g = T 3 + B3g ; so:
                                     B2g = 1 +1 r (T 3 G3 ) + 1 +1 r B3g :
                                              B
Now recursively substitute backwards for tg in each equation. That is, for the = 2 budget t
156                                                                             The Optimal Path of Government Debt


constraint, substitute out the          B2g term from the t = 3 budget constraint to form:
                        G2 + (1 + r)B1g = T 2 + 1 +1 r (T 3 G3 ) + 1 +1 r B3g ; so:
                                                                        2                                2
                   B1
                    g=      1
                           1+
                              (T 2
                                   r              G2) +         1
                                                               1+    r        (T 3       G3) +        1
                                                                                                     1+    r B3 :
                                                                                                              g


Eventually, this boils down to:
                                                    2                                  3                             3
       B0g = 1 +1 r (T 1 G1 ) + 1 +1 r                    (T 2       G2) + 1 +1 r              (T 3       G3 ) + 1 +1 r B3g :
Since we also know that        B0g = G0 T 0 we can rewrite this as:
                                                         2                                  3                             3
  G0     T 0 = 1 +1 (T 1
                   r      G1 ) +     r ( T 2 G2 ) +
                                                  1
                                                 1+         r (T 3 G3 ) +         r B3 :
                                                                                         g1
                                                                                         1+
                                                                                                                          1
                                                                                                                         1+

Collect all of the Gt terms on the left hand side and all of the T t terms on the right hand
side to produce:
                              2                         3
  G0 + 1 +1 r G1 + 1 +1 r G2 + 1 +1 r G3 =
                                                                                  2                     3                 3
                                        T 0 + 1 +1        rT 1 +
                                                              r T3+          r B3 :
                                                                               r T2+
                                                                          1        g                1                     1
                                                                         1+                        1+                    1+

In the same way, we can start solving backwards from any period j  0 to write the gov-
ernment’s budget constraint as:
                        j
                        X
                                            t           j
                                                          X
                                                                             t                     j

                                        r Gt = t=0                        r Tt+                     r Bj :
                                    1                                 1                        1       g
                                   1+                                1+                       1+
                         t=0
If we assume that:
                                                                        j

                                                                     r Bj = 0;
(14.2)                                             lim
                                                                1       g
                                                  j !1         1+

then we can continue to recursively substitute indeﬁnitely (that is, we can let                                           j grow arbi-
trarily large), to produce the single budget constraint:
                                       1
                                       X
                                                         t             1
                                                                         X
                                                                                         t

                                                       r Gt = t=0                        r T t:
                                                   1                                1
(14.3)
                                                  1+                               1+
                                       t=0
Notice that the left hand side is the present discounted value of government expenditures
while the right hand side is the present discounted value of government tax revenues. The
                               B
government debt terms, tg , have disappeared, since, at the limit all government borrowing
14.2 Barro-Ricardo Equivalence                                                                             157


must be repaid. The condition in equation (14.2), sometimes known as a transversality con-
dition, prohibits the government from always borrowing to pay its debt. At some point in
the future, all government expenditures must be backed by government tax revenues.

In future sections, we will mainly work with constraints of the form in equation (14.3) to
ﬁnd optimal sequences of tax revenue T t and then infer what the sequence of government
debt must be.



14.2 Barro-Ricardo Equivalence

Barro-Ricardo Equivalence is the statement that the timing of government taxes do not
matter, since households internalize the government budget constraint and save to pay the
expected future taxes. This is an old idea, ﬁrst formulated by David Ricardo in the 19th
century, that has returned to prominence with the 1974 paper “Are Government Bonds
Net Wealth?” by Robert Barro.1 In that paper, Barro argued that debt-ﬁnanced tax cuts
could not affect output, since households would use the increased net income to save for
the coming increased taxes. This argument was of particular interest during the early 1980s
when debt-ﬁnanced tax cuts were a centerpiece of the government’s economic strategy. In
this section we will examine the proposition in a simple two-period model and then again
in an inﬁnite horizon model.


Assumptions for Barro-Ricardo Equivalence

Since the time path of government debt is determined entirely by the difference between
spending and taxes, Barro-Ricardo equivalence says that the optimal path of government
debt is indeterminate: only the present discounted values of spending and taxes matter.
Barro-Ricardo equivalence rests on three key assumptions, and we will have to break at
least one of them to get a determinate theory of optimal government debt. Barro-Ricardo
equivalence holds if:

  1. There is a perfect capital market, on which the government and households can bor-
     row and lend as much as desired without affecting the (constant) real interest rate.
  2. Households either live forever or are altruistic towards their offspring.
  3. The government can use lump-sum taxes.

Since Barro-Ricardo Equivalence requires the government and households to completely
smooth out transitory spikes in spending or taxes, it is obvious why a perfect capital mar-
ket is important. If households were not altruistic towards their offspring, and did not
  1 Barro, Robert J. (1974) “Are Government Bonds Net Wealth?” Journal of Political Economy 82(6) pp1095-1117.
158                                                     The Optimal Path of Government Debt


live forever, then they would consume from a debt-ﬁnanced tax cut without saving and
bequeathing enough to their offspring to repay the debt. Finally, if the government cannot
use lump-sum taxes, then large taxes cause large distortions, encouraging the government
to use low taxes to spread the deadweight loss out over several periods. In the next section,
we force the government to use distortionary taxes, which breaks Barro-Ricardo Equiva-
lence.


A Two-Period Example

                                                                           G ;G
Consider a government which must make real expenditures of f 0 1 g. It levies lump-
                                 ;
sum taxes each period of fT 0 T 1 g. The household has a ﬁxed endowment stream of
 Y ;Y
f 0 1 g. Both the government and the household have access to a perfect bond market,
                                                                               r
and can borrow and lend any amount at the constant real interest rate . The government’s
                    B
initial stock of debt, g 1 = 0, and the government must repay all that it borrows by the end
          t
of period = 1.

The household has preferences over consumption streams f             C0; C1 g given by:
                         U (C0; C1) = u(C0) + u(C1);
where 0 < < 1. We assume that u0 > 0; u00 < 0. The government’s two-period (ﬂow)
budget constraints are:

 t
( = 0)                                  G0 = T 0 + B0g ; and:
(t = 1)                     G1 + (1 + r)B0g = T 1:
These can be collapsed (by substituting out the debt term B0g ) into a single budget con-
straint, expressed in terms of present discounted value:

(14.4)                          G0 + 1 +1 r G1 = T 0 + 1 +1 r T 1:
This is the form of the government’s budget constraint with which we will work. The
household’s two-period (ﬂow) budget constraints are:

 t
( = 0)                          C0 + T 0 + B0 = Y0; and:
(t = 1)                              C1 + T 1 = Y1 + (1 + r)B0:
                                                                           B
Here we are using Barro’s notation that, for private individuals, t denotes the stock of
                              t B >
savings at the end of period . If t 0 then the household is a net lender. Collapsing the
two one-period budget constraints into a single present-value budget constraint produces:

(14.5)                    C0 + 1 +1 r C1 = (Y0 T 0 ) + 1 +1 r (Y1 T 1):
Notice that the government’s lump sum taxes, T t , which form revenue for the government,
are a cost to the household.
14.2 Barro-Ricardo Equivalence                                                                    159


We will now use equation (14.4) to rewrite equation (14.5) without the tax terms. Notice
that equation (14.5) may be written as:
                                                                                
                      C0 + 1 +1 r C1 = Y0 + 1 +1 r Y1            T 0 + 1 +1 r T 1 :
But from the government’s present-value budget constraint equation (14.4) we know that:

                                  T 0 + 1 +1 r T 1 = G0 + 1 +1 r G1 :
Thus we can rewrite the household’s present-value budget constraint as:
                                                                                
                      C   0+
                              1
                             1+   rC Y1 = 0+
                                              1
                                             1+    r Y1          G 0+
                                                                       1
                                                                      1+      r G1 :
Notice that the household’s budget constraint no longer contains tax terms T t . Instead, the
household has internalized the government’s present-value budget constraint, and uses
the perfect bond market to work around any ﬂuctuations in net income caused by sudden
increases or decreases in taxes.



An Inﬁnite-Horizon Example

The inﬁnite horizon version is a very simple extension of the previous model. Now gov-
ernments will have a known, ﬁxed, sequence of real expenditures f t g1                 G
                                                                           t=0 that they will
have to ﬁnance with some sequence of lump-sum taxes fT t g1   t=0 . The household   has some
known endowment sequence f t g1   Y
                                  t=0 . Both the household and the   government  can  borrow
and lend freely on a perfect bond market at the constant interest rate .               r
The household lives forever and has preferences over sequences of consumption f t g1
                                                                                   t=0        C
of:
                                                       1
                                                       X
                                      U (fCtg1t=0) =         u Ct);
                                                             t (
                                                       t=0
where 0 < <     1. Here we again assume that           u0 > 0; u00 < 0. To make the notation in this
section simpler, deﬁne:
                    1  1 t
                    X                                                   1  1 t
                                                                        X
               G=          1+   r Gt                               T=           1+   r Tt
                    t=0                                                 t=0
                    1  1 t
                    X                                                   1  1 t
                                                                        X
               Y=          1+r
                               Yt                                  C=           1+   r Ct :
                    t=0                                                 t=0
160                                                          The Optimal Path of Government Debt


That is,  G                                                                     T
          is the present discounted value of government spending, is the present dis-
counted value of government revenue,               Y
                                          is the present discounted value of the house-
hold’s endowment stream and         C
                                  the present discounted value of the household’s con-
sumption stream.

The government’s present-value budget constraint, as in equation (14.3), may now be writ-
ten:

                                                    G = T:
The household’s present-value budget constraint, in the same way, may be written:

                                              C = Y T:
But since the government budget constraint requires               T = G, the household’s budget con-
straint becomes:

                                              C = Y G:
Once again, the timing of taxes ceases to matter. The household only cares about the
present discounted value of government spending.

As a ﬁnal step, we shall solve the household’s problem. For simplicity, assume that 1 + =        r
  1
    . The household’s Lagrangian is:
                                              1
                                              X
                       L(fCt g1
                              t=0 ; ) =               u Ct) + (Y G C):
                                                       t (
                                              t=0
To ﬁnd the optimal choices of consumption given the constraint, we maximize the La-
grangian with respect to consumption. The ﬁrst-order necessary conditions for maximiza-
tion are formed by taking the derivative with respect to consumption in some typical pe-
      j
riod , and from the constraint. Recall that:

                                          @C =  1 j :
                                          @Cj 1 + r
So the ﬁrst-order conditions are:
                                             j
                    j 0(
                     u Cj )          1
                                                   ;   j = 0; : : : ; 1; and:
                                     1+   r         = 0 for all

                                              C = Y G:
With the assumption that 1 + =r 1 , we ﬁnd that:
                             u0(Cj ) = ; for all j = 0; 1; : : : ; 1:
                    uC
But is constant, so 0 ( j ) must also be constant. We conclude that consumption is also
          C C                    j                                         C
constant, j = ? in all periods . If consumption is constant at ? , we can substitute back
14.3 Preliminaries for the Ramsey Problem                                                 161


into the budget constraint to ﬁnd   C ?, using the fact that Ct = C ? for all t:
                                                   1  1 t
                                                   X
                                 Y G=C=                        1+   r Ct
                                                   t=0
                                                   1
                                                   X
                                                                    t

                                                                    r C
                                                                1       ?
                                               =
                                                               1+
                                                   t=0
                                                           1  1 t
                                                           X
                                               =   C   ?
                                                                    1+   r
                                                           t=0
                                               C? 1 1 1
                                               =
                                                        1+r

                                             = C?
                                                   1 + r ; so:
                                                     r
                                         C ? = 1 +r r (Y G):
                                                                              Y
Thus household consumption is constant over time, increasing in and decreasing in .        G
Household consumption is utterly unaffected by the timing of the taxes T t used to ﬁnance
the government’s spending.




14.3 Preliminaries for the Ramsey Problem

Before we lay out the Ramsey model, we are going to need to deﬁne some terms. In partic-
ular, readers may be unfamiliar with excise taxes, which are used extensively in this chapter.
Also, we will deﬁne in general terms the structure of Ramsey problems. Finally, we will
deﬁne indirect utility, an important concept with which the reader may be unfamiliar.



Excise Taxes

An excise tax is a constant tariff levied on each unit of a good consumed. An example would
be a $1/gallon gasoline tax, or a $0.25/pack cigarette tax. These are not sales taxes. Sales
taxes are levied as a percentage of the total value of the goods purchased. Excise taxes are
                                                                              n    x
unaffected by the price of the taxed good. If there were a vector of goods f i gni=1 , with an
                             p                                            m
associated vector of prices f i gni=1 , and a consumer had total dollars to spend on these
goods, her budget constraint would be:

                                         n
                                         X
                                               pi xi  m:
                                         i=1
162                                                                                  The Optimal Path of Government Debt


Now the government levies an excise tax of i on each good                                                  i = 1 : : :n. The consumer’s
budget constraint becomes:
                                                      n
                                                      X
                                                               p  x
                                                               ( i + i) i               m;
                                                       i=1

                                                                               p 
where the price paid by the consumer is now i + i . What would a sales tax look like?2
                                                                       x
Think of excise taxes like this: for each good i the consumer buys, she pays i to the ﬁrm,                                  p
      
and i to the government.

Under an excise tax system the government’s revenue H( ) from the tax system, without           ;
taking into consideration the household’s reactions (see Chapter 13), is:
                                                                                           n
                                                                                           X
                                           H(x1 ; : : : ; xn ; 1 : : : ; n ) =                  i xi :
                                                                                            i=1
Households will adjust their choices of consumption i , = 1      in response to the taxes x i             : : :n
                                   a
(this plays the role of max from Chapter 13). Thus, taking into consideration the house-
hold’s best response, the government raises:
                                                                               n
                                                                               X
              T (1 : : : n ) = H(x1? ; : : : ; x?n ; 1 ; : : : ; n ) =               i x?i (p1; : : : ; pn; m; 1; : : : ; n):
                                                                                   i=1
          x
Here ?i (; ; ) is the household’s Marshallian demand for good . As you recall from interme-        i
diate microeconomic theory, the Marshallian demand by an agent for a product gives the
quantity of the product the agent would buy given prices and her income.



Structure of the Ramsey Problem

The government announces a sequence of excise tax rates f t g1 t=0 , which households take            
as given in making their decisions about consumption, borrowing and saving. This is
actually quite a strong assumption, when you stop to think about it. The government
has committed to a sequence of actions, when deviation might help it raise more revenue.
What mechanism does a sovereign government have to enforce its commitment? Policies
change, heads of state topple and constitutions are rewritten every year. Quite a bit of
extremely interesting research centers on how governments ought to behave when they
cannot credibly commit to a policy and all the agents in the model know it. See Chapter 19
   2 Okay, I’ll tell you. Let’s say the government levies a sales tax of t on each good i. Then the agent’s budget
                                                                          i
constraint becomes:
                                                        X (1 + t ) p x  m;
                                                         n

                                                                   i       i   i
                                                         i=1


where now the consumer owes ti pi xi on each good purchased.
14.3 Preliminaries for the Ramsey Problem                                                    163


for a discussion of commitment in the context of a Ramsey problem in monetary policy.
In that chapter we introduce the game-theoretic concepts required to model the strategic
interactions of the private sector and the government.

So our benevolent government will take the purchasing behavior of its citizens (in the form
                                                                           
a representative household) in response to its announced set of taxes f t g1
                                                                           t=0 as given. It will
seek to raise some exogenous, known, amount of money sufﬁcient, in present-value terms,
to pay for the stream of real government expenditures on goods and services, f t g1      G  t=0 .
These expenditures will not affect the representative household’s utility or output in a
meaningful way: they will be used to ﬁght a war, or, more succinctly, thrown into the
ocean. Many sequences of taxes will pay for the government’s stream of purchases. Our
government will choose among them by ﬁnding the tax sequence that maximizes the rep-
resentative household’s indirect utility.


Indirect Utility

The technical deﬁnition of indirect utility is the utility function with the choice variables
replaced by their optimal values. Consider for example the following two-good problem.
The utility function is:

(14.6)                            U (c1; c2) = ln(c1) + ln(c2);
where    > 0, and the budget constraint is:
                                     p1c1 + p2c2  m:
The Lagrangian is:

                      L(c1 ; c2 ; ) = ln(c1 ) + ln(c2) + (m p1 c1 p2 c2 ):
The ﬁrst-order conditions are thus:


                                        c1 p1 = 0;
                                        1


                                        c2 p2 = 0; and:
                                      p1c1 + p2c2 = m:
Combined with the budget constraint, these imply that:

                                    c2 =  p1 c1; so:
                                          p2
(14.7)                              c1 = 1 +1 pm1 ; and:
(14.8)                              c2 = 1 + pm2 :
164                                                             The Optimal Path of Government Debt


To ﬁnd the indirect utility function, we substitute the optimal policies in equations (14.7)
and (14.8) into the utility function in equation (14.6). Call the indirect utility function
V p ;p ;m
  ( 1 2 ). It is how much utility the household can achieve at prices 1 2 and at in-       p ;p
     m
come when it is optimizing. Thus, in this case:
                                                   
          V (p1; p2; m) = ln 1 +1 pm1 + ln 1 + pm2
(14.9)                  = (1 + ) ln(m) ln(p1 ) ln(p2 ) (1 + ) ln(1 + ) + ln( ):
So we can see immediately the effect on maximized utility of an increase in wealth , or of        m
                               p   p
an increase in the prices 1 and 2 . As we expect, optimized utility is increasing in wealth
and decreasing in the prices.


Annuities

In this chapter we will often characterize income streams in terms of an annuity. An an-
nuity is one of the oldest ﬁnancial instruments, and also one of the simplest. In essence
an annuity is a constant payment each period in perpetuity. Thus if one has an annuity of
$100, one can be assured of a payment of $100 each year for the rest of one’s life, and one
may also assign it to one’s heirs after death.

Risk averse agents with a known but ﬂuctuating income stream of f t g1             y
                                                                        t=0 may, depending
on the interest rate and their discount factor, want to convert it to an annuity, paying a
                  a
constant amount each period, of the same present discounted value. Given a constant
                   r                                        a                          a
net interest rate of , it is easy to determine what must be. We call the annuity value of
                       y
the income stream f t g1  t=0 .
We begin by calculating the present discounted value              Y of the income stream fytg1t=0:
                                             1
                                             X
                                                            t
                                       Y               1
                                                       1+   r yt :
                                             t=0
We know that the present discounted value of an annuity of                a is just:
                                   X1  1 t
                                    t=0 1 +            r a:
For the present discounted value of the income stream and the annuity to be equal,                a must
satisfy:
                        X1  1 t                    a                a       r;
                      Y
                      =
                                       r a
                                        =
                                                     = r
                                                      =
                                                        ( )(1 + )
                                                                  so:
                                                                          r
                        t=0 1 +           1 1 (1 + )
                                                   r
                                             a = 1 + r Y:
                           r
A reasonable value of is around 0.05, which means that               r=(1 + r) is 1=21.
14.4 The Ramsey Optimal Tax Problem                                                                                         165


14.4 The Ramsey Optimal Tax Problem

The Household’s Problem

Consider a household with a known endowment stream f t g1
                                                        t=0 . This household orders         y
inﬁnite sequences of consumption f t g1
                                      t=0 as:          c
                                                                   1
                                                                   X
(14.10)                                          U (fctg1t=0) =                   c ;
                                                                              t ln( )
                                                                                    t
                                                                   t=0
where 0       < <1. To get a nice closed form for consumption we are going to assume
logarithmic preferences.

There is a perfect bond market on which the household may borrow and lend at a constant
                     r
real interest rate which we assume satisﬁes 1 + =     1
                                                        .                r
The household faces a known sequence of excise taxes f t g1                             
                                                               t=0 levied by the government
(see the above discussion for a review of excise taxes). Since there is only one consumption
good in each period, we can safely take the within-period price of the consumption good
                                                   t
to be unity. Thus in some period , if the household consumes t , expenditures must be                  c
c c                                         c
 t + t t or more simply (1 + t ) t . Hence the present discounted value of expenditures
including the tax bill is:
                                      1
                                      X                      1
                                                             X                                  1
                                                                                                X
              PDVexpenditures =                    r c
                                            (1 + ) t t +                      r c
                                                                       (1 + ) t t t =                      r         c:
                                                                                                      (1 + ) t (1 + t ) t
                                      t=0                        t=0                            t=0
The household’s present discounted value of expenditures must equal the present dis-
counted value of the endowment stream. Hence its budget constraint is:
                               1
                               X                                       1
                                                                       X
(14.11)                                      r
                                      (1 + ) t (1 + t ) t  c                    r y
                                                                              (1 + ) t t             Y:
                                t=0                                     t=0
                                        Y
Here I have deﬁned the term to be the present discounted value of the income sequence
 y
f tg1
    t=0 . This is merely for convenience.
Hence the household’s Lagrangian is:
                                   1                                            1                              !
                                   X                                            X
(14.12)             L(fctg1 ; ) =
                          t=0
                                     t ln(c ) + 
                                           t                           Y                    r
                                                                                      (1 + ) t (1 + t ) t   c :
                                            t=0                                 t=0
The ﬁrst-order condition of equation (14.12) with respect to consumption in the arbitrary
period is:j
                           j
                          cj (1 + r) (1 + j ) = 0; for all j = 0; : : : ; 1:
                                      j
166                                                                The Optimal Path of Government Debt


                              =     r
With the assumption that 1 (1 + ) = , and with a certain amount of manipulation, we can
write this as:
(14.13)                        cj (1 + j ) = 1=; for all j = 0 : : : 1:
Notice that this last equation implies expenditures will be constant across all periods. In
periods with relatively higher excise tax rates, consumption will decrease exactly enough
to keep the dollar outlays exactly the same as in every other period. This is an artifact of
log preferences and not a general property of this problem. However, it does simplify our
job enormously.

The next step will be to substitute the optimal consumption plan in equation (14.13) into
the budget constraint in equation (14.11) to determine how much the household spends
each period. Substituting, we ﬁnd:
                                        1
                                        X
                                                      r 1 = Y:
                                               (1 + ) t
                                         t=0
Taking out the 1   = term (because it does not vary with t), we ﬁnd that:
                                   1
                                      = P1
                                              Y         W:
(14.14)
                                            (1 + r) t
                                               t=0
                    =
In other words, 1 is equal to the annuity value of the endowment stream (which I have
named     W
          for convenience). Of course from equation (14.13) we conclude that:

(14.15)                     c?t = 1 W
                                    + t
                                         ; for all t = 0; 1; : : : ; 1:
Here I denote the optimal consumption decision as c?t .


The Household’s Indirect Utility

We are now ready to calculate the household’s indirect utility function. Substituting the
optimal policy in equation (14.15) into the preferences in equation (14.10) produces:
                                               1
                                               X
                          V (ftg1t=0; W) =                    c
                                                        t ln( ? )
                                                              t
                                                t=0
                                               1
                                               X               
                                                                    W 
                                                        t ln
                                                                   1 + t
                                           =
                                                t=0
                                               1
                                               X
                                           =            t [ln(   W)              
                                                                          ln(1 + t )]
                                                t=0
                                                  1
                                                  X                              W) :
(14.16)                                    =                       t  
                                                          t ln(1 + ) + ln(
                                                                        1
                                                  t=0
14.4 The Ramsey Optimal Tax Problem                                                                   167


Here we are using some more convenient properties of the log function to simplify our
                    V ;                                              
result. Notice that ( ) is decreasing in tax rates t and increasing in the annuity value of
wealth, . W

The Government’s Problem

The government faces a known unchangeable stream of period real expenditures f t g1
                                                                                  t=0             G
and can borrow and lend at the same rate 1 + = 1
                                                                r
                                                 as the household. Deﬁne:
                                                     1
                                                     X
                                           G                       r G;
                                                            (1 + ) t t
                                                      t=0
i.e., let G
          denote the PDV of government expenditures. These government expenditures
do not affect the household’s utility or output in any meaningful way.

The government realizes revenue only from the excise tax it levies on the household. Hence
each period the tax system produces revenues of:
                                               Ht (ct ; t ) = t ct :
But of course consumption is itself a function of taxes. The government takes as given the
household’s decisions. From equation (14.15) we know we can rewrite this as:

                          T t (t ) = Ht [c?t (t ); t ] = t c?t (t ) = W 1 +t :
                                                                                    t
The government’s present-value budget constraint is:
                                               1
                                               X
                                                            r
                                                     (1 + ) t T t       G; or:
                                               t=0
                                   1
                                                r W 1 +t  G;
                                   X
                                         (1 + ) t
                                   t=0                    t

which we will ﬁnd it convenient to rewrite as:
                                       1
                                       X                          t  G :
(14.17)                                               r
                                               (1 + ) t
                                                                1 + t W
                                         t=0
We divide by    W merely to keep the algebra clean later.
The government maximizes the representative household’s indirect utility subject to its
present-value budget constraint by choice of sequences of excise taxes. Hence the govern-
ment’s Lagrangian is:
                                                                                                 !
                                1
                                X                                          1
                                                                    W) +  X           t       G
(14.18)       L(ftg1 ; ) =
                    t=0                               
                                         t ln(1 + ) + ln(
                                                  t
                                                       1
                                                                             (1 + r) t
                                                                                        1+ t   W :
                                 t=0                                          t=0
168                                                                     The Optimal Path of Government Debt


The government is choosing the sequence of tax rates f t g1                 
                                                          t=0 which makes the household
as happy as possible given that the government has to raise enough tax revenue to ﬁnance
               
the war. Here is the multiplier on the government’s budget constraint, the same way                      
was the multiplier on the household’s budget constraint previously. In some typical period
j         j
 , where = 0  ;::: ;
                   1, the ﬁrst-order condition with respect to the tax rate is as follows:
                                    
                   j                                  j  = 0; for all j = 0; 1; : : : ; 1:
                           r           1
                       + (1 + ) j
              1+ j                      1+ j  (1 + j )2
Recall that we are assuming that            = (1 + r) 1 . Hence we can manipulate this equation to
produce:
                                                            
                                                                          j  ;
                                                     1
                                  1    1
                                     =
                                        
                                 1+ j 1+ j                              1 + j
which reduces to:

                                                  j =         1   :
This equation implies that the tax rate should not vary across periods (since is constant).   
This is one very important implication of our model: the optimal tax rate is constant. Thus
we write:

                                            t =  ? ; for all t  0:
               
Now let’s ﬁnd ? by substituting into the government budget constraint in equation (14.17):
                             1
                          G =X                   1
                                            t = X               ? :
                                (1 + r) t            (1 + r) t
                          W t=0           1 + t
                                                 t=0           1 + ?

We can rewrite this as:

                                    W 1 +  ? = P1 (1G+ r) t :
                                          ?
(14.19)
                                                            t=0
Notice that this says that the amount of revenue collected by the government each period is
constant and equal to the annuity value of government expenditures. Thus the government
collects the same amount of revenue each period, running deﬁcits when it has unusually
high expenditures and surpluses when expenditures are low.


Implications for the Path of Debt.

Imagine a government that has to ﬁght a war in period 0, and makes no other expenditures
in all other periods. Let the cost of a war be unity. Thus government expenditures satisfy:
                                                   
                                            Gt =       1   ; t=0
                                                       0   ; t  1:
14.4 The Ramsey Optimal Tax Problem                                                                                         169


Hence the present discounted value of government expenditures is:
                           1
                           X                                               1
                                                                           X
                  G=                  r G                r
                                 (1 + ) t t = (1 + )0 (1) +                               r
                                                                                     (1 + ) t (0) = 1   :
                           t=0                                                 t=1
We know from equation (14.19) that the optimal tax rate ? satisﬁes:                  
                      W 1 +  ? = P1 (11 + r) t = 1 1 +1 r = 1 +r r ; so:
                            ?
                                    t=0
                                        ? = r 1 :
                                      1 + ? 1 + r W
For the sake of argument, say that the household has a constant endowment t = 1 all  0.                    y           t
In other words, the government has to ﬁght a war in the ﬁrst period that costs as much as
the total economy-wide wealth in that period. If this is the case then we can ﬁnd and :                         Y           W
                                      1
                                      X                                                   r
                           Y =1                    r
                                            (1 + ) t =
                                                             1
                                                                     1
                                                                          1
                                                                                =
                                                                                     1+
                                                                                         r :
                                      t=0                                1+r
                                                          1
                          W = P1 (1Y+ r) t = Y 1 +1 r+ r 1 = 1:
                                      t=0
                                                    Y
This makes sense: the annuity value of is just the inﬁnite ﬂow of constant payments that
       Y              Y
equals . But since is made up of the inﬁnite ﬂow of constant payments of t = 1 each                             y
period, then the annuity value must also be unity. Now we can ﬁnd ? from:                          
                                                  ? = r ;
                                                1 + ? 1 + r
                         r:
which means that ? = In other words, the optimal tax rate ? is simply the interest rate        
r. Government tax revenues each period are:

                                       T t = 1 +r r ; for all t  0:
The government is collecting this relatively small amount each period in our example.

Notice what this implies for the path of deﬁcits (and hence debt). In period = 0 the                                t
                      r=          r
government collects (1 + ) and pays out 1 to ﬁght its war. Hence the core deﬁcit in
       t
period = 0 is:

                                      G0 T 0 = 1                 r
                                                                     r = 1 + r:
                                                                                     1
                                                             1+
In all subsequent periods, the government spends nothing and collects the usual amount,
hence running core surpluses (or negative core deﬁcits) of:

                  Gt T t = 0                r            r ; for all t = 1; 2; : : : ; 1:
                                        1+      r   =
                                                        1+r
170                                                               The Optimal Path of Government Debt


From the government’s ﬂow budget constraint we know that:

                             Gt + (1 + r)Btg 1 = T t + Btg ; for all t  0:
Hence from period 1 onward, while the government is repaying its debt from period 0:

                             Btg =       r + (1 + r)Bg ; for all t  1:
                                        1+r          t 1

From this is it easy to see that the government debt, after the war, is constant at:

                                  Btg = 1 +1 r ; for all t = 1; 2; : : : ; 1:
Each period, the government raises just enough revenue to pay the interest cost on this
debt and roll it over for another period. Does this violate our transversality condition in
equation (14.2)? No, because the government debt is not exploding, it is merely constant.
Thus, from equation (14.2):
                           t                           t                                    t+1

                            r B                                                                                :
                        1        g                1               1                        1
             lim
            t!1        1+        t = tlim
                                      !1         1+   r          1+   r       = lim
                                                                                t!1       1+   r          =0

So the transversality condition is satisﬁed by the government’s optimal debt plan.



Exercises

Exercise 14.1 (Easy)
Supply the following facts. Most can be found in the Barro textbook.

  1. What was the ratio of nominal outstanding public debt to GNP for the U.S. in 1996?
  2. About what was the highest debt/GNP ratio experienced by the U.S. since 1900? In
     what year?
  3. According to Barro, about what was the highest marginal tax rate paid by the “aver-
     age” American since 1900? In what year?
  4. Illinois has a standard deduction of about $2000. Every dollar of income after that is
     taxed at a constant rate (a “ﬂat” tax). What is that rate?

Exercise 14.2 (Moderate)
                                            G
The government must raise a sum of from the representative household using only excise
taxes on the two goods in the economy. The household has preferences over the two goods
of:

                                         U (x1 ; x2) = ln(x1) + x2:
Exercises                                                                                 171


               Variable      Deﬁnition
                  Bt         Real end-of-period savings by the household sec-
                             tor.
                  Btg        Real par value of outstanding end-of-period gov-
                             ernment debt.
                 Bg 1                                          B
                             Initial stock of government debt, g 1 = 0.
                 Ct; ct      Aggregate (household) consumption at .   t
                  Gt         Real government spending at . t
                 Yt; yt      Aggregate (household) income at . t
                  rt         Real net return on end-of-period debt.
                  C          Present discounted value of consumption stream,
                              C
                             f t g1t=0 .
                  G          Present discounted value of government spend-
                                              G
                             ing stream, f t g1 t=0 .
                   T         Present discounted value of tax revenue stream,
                             fT t g1t=0 .
                  W                                             Y
                             Annuity value of income stream, f t g1 t=0 .
                  Y          Present discounted value of income stream,
                              Y
                             f t g1t=0 .
                H(a; )       Government tax policy mapping household ac-
                                  a
                             tion and a vector of tax parameters into a tax
                             bill (see Chapter 13).
                 T( )        Government revenue as a function of tax pol-
                             icy parameters when the household chooses its
                                              a
                             best response, max (see Chapter 13).
              U (fCtg1t=0)   Utility from a consumption stream.
                 u(Ct)                                                C
                             One-period utility from consumption of t in pe-
                                  t
                             riod .
              V (ftg1t=0)   Household’s indirect utility given a stream of ex-
                                          
                             cise taxes f t g1                            Y 1
                                              t=0 and an income stream f t gt=0
                             with annuity value . W
Table 14.1: Notation for Chapter 14. Note that, with the assumption that t =  Y Nt, variables
denoted as per-capita are also expressed as fractions of GDP.


The household has total wealth of     M to divide between expenditures on the two goods.
                             p        p                                              t
The two goods have prices 1 and 2 , and the government levies excise taxes of 1 and 2 .    t
The government purchases are thrown into the sea, and do not affect the household’s utility
                                                                   t ;t p ;p ;M
or decisions. Determine the government revenue function T ( 1 2 ; 1 2           ). Determine
                                                                          V p t ;p t ;M
the household’s indirect utility function in the presence of excise taxes, ( 1 + 1 2 + 2   ).
172                                                               The Optimal Path of Government Debt


Hence write down the problem to determine the distortion-minimizing set of excise taxes
t             t
1 and 2 . You do not have to ﬁnd the optimal tax rates.

Exercise 14.3 (Easy)
Assume that a household lives for two periods and has endowments in each period of
    y         ;y         r                                                  t
f 1 = 1 2 = 1 + g. The household can save from period = 1 to period = 2 on a bond     t
                                                     r
market at the constant net interest rate . If the household wishes to borrow to ﬁnance
                                   t                             t
consumption in period = 1 and repay in period = 2, it must pay a higher net interest
rate of 0     r >r
             . The household has preferences over consumption in period , t , of:     tc
                                            V (fc1; c2g) = u(c1) + u(c2):
Assume that           u0 > 0 and u00 < 0.
There is a government which levies lump sum taxes of T t on the household in each period,
t = 1; 2. The government can borrow and lend at the same interest rate, r. That is, the
government does not have to pay a premium interest rate to borrow. The government
must raise G = 1 in present value from the household. That is:

                                    T 1 + 1T+2r = G = 1:
Answer the following questions:

        1. Find the household’s consumption in each period if it does not borrow or lend.
                               >             >
        2. Assume that T 1 0 and T 2 0. Draw a set of axes. Put consumption in period = 2,      t
          c                                                             t
            2 , on the vertical axis and consumption in period = 1 on the horizontal axis. Draw
           the household’s budget set.
                                                          rG
        3. Now assume that T 1 = 0 and T 2 = (1 + ) . Draw another set of axes and repeat the
           previous exercise.
        4. Now assume that T 1 =         G and T 2 = 0. Draw another set of axes and repeat the
           previous exercise.
        5. What tax sequence would a benevolent government choose? Why?

Exercise 14.4 (Easy)
Assume that the government can only ﬁnance deﬁcits with debt (it cannot print money, as
in the chapter). Assume further that there is a constant real interest rate on government
                  r
debt of , and that the government faces a known sequence of real expenditures f t g1     t=0 .G
The government chooses a sequence of taxes that produces revenues of fT t g1  t=0 such that:
                                       T 0 = G0 1; and:
                                       T t = Gt ; for all t = 1; 2; : : : ; 1:
Find the path of government debt implied by this ﬁscal policy. Does it satisfy the transver-
sality condition? Why or why not?
Chapter 15

Comparative Advantage and Trade

Most people would rather have a job making computer chips rather than potato chips. This
may be rational, but the speed with which people state their preference belies a common
misconception. In fact, the one occupation is not necessarily more proﬁtable than the other.
Haitians, for example, can make more money per hour growing and harvesting peanuts
than they could make building computers. Economists use the terms absolute advantage
and comparative advantage in discussing such issues.

A worker (or a country of workers) has an absolute advantage in production of a particular
good if that worker (or country) can produce the good using fewer inputs than the com-
petition. For example, in producing a good that requires labor only, the worker who can
make a unit of the good in the least amount of time has an absolute advantage in the pro-
duction of that good. The United States has an absolute advantage in producing a number
of goods, since its work force is extremely productive and its economy is very well orga-
nized. Guatemala has an absolute advantage in the production of bananas, because of the
country’s climate. Kuwait has an absolute advantage in the production of crude oil, since
its plentiful reserves make it easier to extract oil.

The term comparative advantage dates back to Ricardo.1 Suppose a worker (or a country of
                                          x                  p
workers) can make some good and sell it for x dollars per unit on an open market. Ob-
                                                                              p     p
viously, the worker would like to sell the good for as high a price x as possible. If x is low
enough, the worker will switch to production of some other good. We say that the worker
                                                                  x
has a comparative advantage in the production of if the worker (or country) will ﬁnd it
                        x             p
proﬁtable to make at lower x than that at which the competition will ﬁnd it proﬁtable.
This will be made quite a bit clearer when we formalize the concept in Section 15.2.

For now, let’s think about the production of a particular good: the amount you learn in

  1 Ricardo, David. The Principles of Political Economy and Taxation. 1817.
174                                                         Comparative Advantage and Trade


your macroeconomics course. Suppose you have a truly gifted instructor. This instructor
could explain the textbook page by page, and teach that material better than the black and
white textbook, i.e., the instructor has an absolute advantage over the textbook when it
comes to expositing material linearly. Nonetheless, this would not be the best use of the
instructor’s time. He or she could be more productive by conducting in-class discussions
and answering your questions. The textbook is terrible at answering your questions; your
only hope is to look things up in the index and search through the text looking for an
answer. The key point is that the instructor’s time will be put to best use by doing the
activity that he or she is relatively better at. This is the activity in which the instructor has
a comparative advantage.




15.1 Two Workers under Autarky

We now move to a concrete model so as to be precise about the meaning of comparative
                                          P                 C                        w
advantage. There are two workers, Pat ( ) and Chris ( ), and two goods, wine ( ) and beer
b
( ). In this section we introduce the baseline case in which Pat and Chris live in autarky,
i.e., they are not permitted to trade with each other. In the next section, we allow them to
trade. It is the possibility of trade that raises the issue of comparative advantage.

                    H
Pat and Chris have hours to devote to production each day. Use P         n
                                                                    w to denote the number
of hours that Pat needs to make a jug of wine. Similarly, use P     n
                                                                b for the number of hours
                                                   P        C
that Pat needs to make a jug of beer. Replacing with gives us the time requirements of
Chris. (Throughout this chapter, superscripts will denote whether the variable pertains to
Pat or Chris, and subscripts will distinguish between variables for wine and beer.)

                U c ;c
Pat’s utility is: ( P  P      c
                              P     c
                                    P 1            Pc      P    c
                    w b ) = ( w ) ( b ) , where w and b are Pat’s consumption of wine
and beer, respectively, and is some number between zero and one. Let P           h    P
                                                                              w and b be     h
the number of hours per day that Pat spends on production of wine and beer, respectively.
That means that Pat will produce P   h =nP                                          P
                                      w w jugs of wine each day. (For example, if w = 4, n
                                                     P  h
then it takes Pat 4 hours to make a jug of wine. If w = 8, then Pat spends 8 hours on wine
production, so Pat makes 2 jugs of wine.)

Putting all this together, we get Pat’s maximization problem:
                                                P
                                  max    c c
                            cPw ;cPb ;hPw ;hPb
                                                 ;
                                                ( w) ( P
                                                       b)
                                                          1
                                                            such that:

                                        h h H;   P+ P =
                                                 w    b
                                        c nh ;
                                                      P
                                                P = w and:
                                                w     P
                                                      w
                                          c nh :
                                                         P
                                                   P = b
                                                   b     P
                                                         b
15.1 Two Workers under Autarky                                                                        175


Substituting all the constraints into the objective yields:

                                         (                                   )
                                              H hPb   hPb 1                    :
                                  max
                                  hPb          nPw      nPb

Taking the ﬁrst-order condition with respect to P             h              P?
                                                   b and solving yields: b = (1        ) .h           H
                                                       P
Plugging this back into the time constraint gives us: w =?            h           H
                                                               . (You should check to make
sure you know how to derive these.) These optimal time allocations do not hinge on P     w            n
and Pnb because Pat’s preferences are homothetic; it’s not a general result.
We assume that Chris has the same preferences as Pat. All the math is the same; we just
                          P             C
replace each instance of with . Chris’s optimal choices are: C?
                                                              b = (1      ) and C?w = h       H   h
 H , just like for Pat.

         H
Suppose = 12; each day Pat and Chris have 12 hours in which to work. Further, assume
     =
  = 1 3. This implies that P  h
                              ?     C?   h       P?     C?h               h
                             b = b = 8 and w = w = 4. Now suppose Pat can make
a jug of wine in 4 hours and a jug of beer in 6 hours. Chris can make a jug of wine in 3
hours and a jug of beer in 1 hour. Translating these values to our variables gives the values
in Table 15.1. Since Chris can make a jug of in fewer hours than Pat, Chris has an absolute
advantage in wine production. Chris also has an absolute advantage in beer production.


                                                      Hours per Jug
                                                      Wine    Beer
                                          Pat         n
                                                      P =4
                                                      w           n
                                                               P =6
                                                               b
                                         Chris        n
                                                      C =3
                                                      w
                                                              C =1
                                                              b   n
                                      Table 15.1: Time Requirements




Plugging these values into our formulae above, we get the consumptions of Pat and Chris.
Namely, Pc ?
          w = w  h =n             =
                 P ? P = 4 4 = 1, etc. Table 15.2 contains the rest of the consumption
                      w
values.

                                                    Consumption
                                                  Wine       Beer
                                       Pat        c
                                                  P? = 1
                                                  w               c
                                                           P? = 4 3
                                                           b                  =
                                      Chris   c  C? = 4 3
                                                 w        =  C? = 8
                                                             b        c
                          Table 15.2: Consumption under Autarky
176                                                             Comparative Advantage and Trade


15.2 Two Workers Who Can Trade

We now turn to a world in which Pat and Chris can trade with each other. The open-
                                          p     p
market prices of beer and wine are b and w , respectively. We assume that Pat and Chris
take these prices as given. There are two pieces to the maximization problem that they face.
First, given these prices, they want to choose a way to allocate their time to production of
the two goods so as to maximize their income. Second, for any given income, they want
to choose how to divide up their consumption between the two goods. Thankfully, we can
consider the problems separately. We address production ﬁrst.


Production under Trade

       n
Recall, Pw is the number of hours that Pat needs to make a jug of wine. This means that Pat
can make 1 P=n                                     P    n
               w jugs of wine per hour. Similarly, b is the number of hours for Pat to make
                                 =nP
a jug of beer, so Pat can make 1 b jugs of beer per hour.

If Pat chooses to make wine, Pat’s hourly wage will be the number of jugs times the price:
  =n p
(1 P                                                                       P   =n p
     w )( w ). Similarly, if Pat makes beer, Pat’s hourly wage will be: (1 b )( b ). Pat will
choose which to produce based solely on which wage is highest. Accordingly, Pat makes
wine if:
                                                         
                                      1
                                      n
                                      P   w   p > n p
                                                   1
                                                    P     b or:
                                      w             b
                                            w  p >n :
                                                    P
                                                    w
(15.1)
                                            b  p n  P
                                                    b
                                                                                 p
This makes sense. Pat is more inclined to make wine if the price of wine w is higher or
if Pat is able to make more wine per hour (i.e., P      n
                                                      w is smaller). Pat is less inclined to make
                          p
wine if the price of beer b is higher or if Pat is able to make more beer per hour (i.e., P n b is
smaller).

We get a similar relation for Chris, who makes wine if:
                                          w   p >n :
                                                 C
                                                 w
(15.2)
                                          b   p nC
                                                 b
To ﬁgure out the aggregate supply decisions of Pat and Chris, we conduct a thought ex-
                                                                   p =p
periment. First we suppose that the relative price of wine w b is very low. Then we ask
                                                        p =p
what happens as the relative price rises. When w b is very low, both will make beer be-
cause the return to making wine is low relative to the return to making beer. As the price
rises, eventually one of the two workers will ﬁnd it proﬁtable to switch to wine production.
Eventually the price will rise enough so that both will make wine.

The numbers on the right-hand sides of equations (15.1) and (15.2) are the relative efﬁcien-
cies of Pat and Chris at wine production, respectively. Whoever has the smaller number
15.2 Two Workers Who Can Trade                                                             177


on the right-hand side is said to have a comparative advantage in wine production. This
is because that worker will ﬁnd it proﬁtable to make wine even at low relative prices for
wine.

Using the numbers from the previous section, we see that Pat makes wine if:
                                            pw > 4 ;
                                            pb 6
and Chris makes wine if:
                                            pw > 3 :
                                            pb 1
       = <
Since 4 6     3, Pat has a comparative advantage in the production of wine. Recall, Chris
has an absolute advantage in the production of both wine and beer. The idea of compara-
tive advantage is that Chris has a more signiﬁcant absolute advantage in beer production.
There will be relative prices levels at which Chris will not make wine even though Chris
has an absolute advantage in that market, since it will be even more proﬁtable for Chris to
specialize in beer.

We could just as well have looked at production in terms of beer. This is just the ﬂip side
                                 w      b
of the wine market; the roles of and are just reversed. Pat makes beer if:

                                            pb > nPb ;
                                            pw nPw
and Chris makes beer if:
                                            pb > nCb :
                                            pw nCw
Be sure you understand how these equations relate to equations (15.1) and (15.2). It turns
out that in a market with two producers and two goods, if one producer has a comparative
advantage in one market, then the other will have a comparative advantage in the other
market. Using the example numbers above, Pat has a comparative advantage in wine
production, so Chris has a comparative advantage in beer production.

Using our example numbers, we can construct the aggregate supply curve for wine pro-
                                                                                    p =p
duced by Pat and Chris. On the vertical axis we put the relative price of wine: w b . On
the horizontal axis we put the quantity of wine supplied. See Figure 15.1.

When the relative price of wine is really low, neither Pat nor Chris produce wine, so the
                                                                      =
quantity supplied is zero. As the relative price of wine rises above 4 6, it suddenly becomes
                                                                  H
proﬁtable for Pat to make wine instead of beer. Since Pat works = 12 hours and can make
 =n
1 P      =                                                                           =
     w = 1 4 jugs per hour, Pat’s supply of wine is 3 jugs. (At a relative price of 4 6, Pat is
indifferent between producing wine and beer, so Pat’s wine production could be anything
                                                    =
between 0 jugs and 3 jugs.) At prices between 4 6 and 3, Pat makes three jugs, and Chris
still ﬁnds it proﬁtable to make beer only.
178                                                              Comparative Advantage and Trade



                        pw
                        pb   6
                                                         S
                         3



                         2



                         4
                         6



                                                                         -
                                         3               7        jugs
                Figure 15.1: The Supply of Wine by Pat and Chris Together



When the relative price rises to 3, Chris ﬁnds it proﬁtable to switch to beer production.
                       H =n
Since Chris can make ( )(1 C     w ) = 4 jugs per day, aggregate production jumps up to 7 jugs.
(At a relative price of 3, it is now Chris who is indifferent between producing wine and
beer, so Chris could produce anything from 0 to 4 jugs of wine, and aggregate production
could be anything from 3 to 7 jugs.) As the relative price continues to rise above 3, both Pat
and Chris reap higher proﬁts, but the quantity supplied does not change, since both have
already switched to produce wine exclusively.


Consumption under Trade

We can use the production numbers and prices from the previous section to calculate the
                                                 m           m
dollar incomes of both Pat and Chris. Let P and C be the incomes of Pat and Chris,
                                 p           p                   p =p
respectively. For example, if w = 2 and b = 1, then w b = 2, and Pat will make wine
                                                                                m
only. Since Pat can make 3 jugs of wine per day, Pat’s income will be: P = (2)(3) = 6.
Similarly, given our sample parameters, Chris makes beer only and earns an income of:
m C = 12.

In the general case, our task now is to determine the optimal choices of consumption for
                                             m       m
Pat and Chris when their incomes are P and C , respectively. This is just a standard
consumer-choice problem. Pat’s maximization problem is:
                                        
                                  P   P
                                       c c
                                 max ( P
                                 cw ;cb
                                             ;  P 1
                                           w) ( b )   such that:

                                       cp cp m:
                                          P + P = P
                                          w w     b b
15.2 Two Workers Who Can Trade                                                              179


Pat’s optimal choices are:

                                      cPw? = pmw ; and:
                                                 P
(15.3)

                                      cPb ? = (1 p )m :
                                                     P
(15.4)
                                                   b
(See Exercise 15.1 for the derivations.) The choices of Chris are analogous, with   C replacing
P .


Equilibrium under Trade

                                                                     p       p
We now have all the pieces to determine the equilibrium prices ?w and ?b . Given two
candidate values for these prices, we use equations (15.1) and (15.2) to determine which
goods Pat and Chris produce. Multiplying each worker’s production by the prices gives
each worker’s income. We then use equations (15.3) and (15.4), and the equivalent versions
for Chris, to determine what Pat and Chris will consume at those prices. If the sum of the
their production equals the sum of their consumption for each good, then these candidate
prices are an equilibrium.

Actually ﬁnding the correct candidate equilibrium prices is somewhat complicated. We
consider possible prices in regions dictated by the supply curve. Consider the supply curve
derived from the sample parameter values we have been using in this chapter. We might
                   p =p                        =
start by supposing w b is between 0 and 4 6. It turns out that this would make supply of
wine smaller than demand, so that can’t be an equilibrium. Then we might suppose that
p =p     =
 w b = 4 6. These prices too lead to excess demand.
                                              p =p                   p              p
It turns out that the equilibrium occurs at w b = 2. For example, ?w = 2 and ?b = 1 is an
equilibrium. At these prices: Pat makes 3 jugs of wine and no beer; and Chris makes 12
jugs of beer and no wine. Their optimal consumptions are in the Table 15.3. At these prices
aggregate consumption of each good equals aggregate production of each good, so this is
an equilibrium.

                                            Consumption
                                           Wine     Beer
                                   Pat    cP? = 1
                                           w         c
                                                   P? = 4
                                                   b
                                  Chris   cC? = 2
                                           w         c
                                                   C? = 8
                                                   b
                             Table 15.3: Consumption under Trade



When we compare Table 15.3 with Table 15.2 we see that there are gains from trade. Pat’s
consumption of wine and Chris’s consumption of beer are the same in each case, but un-
                                  =                                                     =
der trade, Pat gets to consume 2 3 extra units of wine, and Chris gets to consume 2 3 extra
180                                                           Comparative Advantage and Trade


units of wine. Accordingly, both Pat and Chris are made better off by trade. This is literally
the single most important result from the theory of international trade. Free trade allows
each worker (or country) to specialize in production of the good in which the worker (or
country) has a comparative advantage. As a result, free trade is generally Pareto improv-
ing.

There is open debate among economists about just how often trade is, or can be, Pareto
improving. The most difﬁcult aspect of analysis along these lines is that citizens of a given
country are not affected equally. Consider peanut exports from Haiti to the United States.
Free trade in peanuts almost certainly makes just about every Haitian better off. Similarly,
most consumers in the United States are made better off by free trade, because Haitian
peanuts cost less than those produced in the United States, but U.S. peanut producers are
almost certainly made worse off by unfettered imports of Haitian peanuts. Accordingly,
free trade in peanuts would not be Pareto improving. That said, almost all economists
agree that it could be made Pareto improving, simply by having U.S. consumers reimburse
U.S. peanut growers for their losses due to imports. Such a move can be made Pareto
improving because the beneﬁts to consumers because of cheaper peanuts far outweigh the
high proﬁts U.S. peanut growers receive from blocking Haitian imports.

There are other arguments about whether free trade is Pareto improving. For example,
many economists think that free trade can damage what are called “infant industries”. If
South Korean makers of automobiles had faced unfettered imports when they ﬁrst started
production, those auto makers might never have had enough time to learn how to make
competitive products. By shielding their producers from competition when they were just
getting started, South Korea may have allowed a productive and efﬁcient industry to de-
velop. Now that South Korea’s auto industry is no longer “infant”, free trade can almost
certainly be made Pareto improving, but that industry might never have existed without
some protection in the early years.


                Variable   Deﬁnition
                  P        Designates that a variable pertains to Pat
                  C        Designates that a variable pertains to Chris
                  w        Designates that a variable relates to wine
                   b       Designates that a variable relates to beer
                  nji                      j
                           Hours worker requires to make a jug of good        i
                  H        Total hours available for work in a day
                  hji                      j
                           Hours worker spends making good             i
                  pi       Price of a jug of good i
                  mjj      Dollar income of worker        j
                  ci                                  i
                           Consumption of good by worker           j
                            Table 15.4: Notation for Chapter 15
Exercises                                                                               181


Exercises

Exercise 15.1 (Moderate)
                         c c c
Derive the equations for P ? P ? C?      C?     c
                         w , b , w , and b from Section 15.2. See equations 15.3 and
15.4.

Exercise 15.2 (Moderate)
Pat and Chris work 8 hours each day. They each try to make as much money as possible in
this time. Pat can make a jug of wine in 2 hours and a jug of beer in 1 hour. Chris can make
a jug of wine in 6 hours and a jug of beer in 2 hours. Pat and Chris are the only producers
                                                     p                        p
of wine in this economy. The price of wine is w , and the price of beer is b . The daily
demand for wine is:
                                                         
                                   Q                  p
                                                      pb :
                                       D = 11           w
                                       w            2


  1. Graph the aggregate supply curve for wine.
  2. Graph the demand curve for wine (on the same graph).
                                                                          p =pb that causes
  3. Determine the equilibrium relative price of wine (i.e., the value of w
     supply to equal demand).
  4. Calculate the equilibrium values of: (i) the amount of wine made by Pat; (ii) the
     amount of beer made by Pat; (iii) the amount of wine made by Chris; and (iv) the
     amount of beer made by Chris.
  5. Does either Pat or Chris have an absolute advantage in wine production? If so, which
     does?
  6. Does either Pat or Chris have a comparative advantage in wine production? If so,
     which does?
Chapter 17

Financial Intermediation

In this chapter we consider the problem of how to transport capital from agents who do not
wish to use it directly in production to those who do. Some agents are relatively wealthy
and already have all of the productive capital they need. Others accumulate capital for
retirement, not production. In each case, the agents would want to lend their surplus
capital to other agents, who would then use it in production. In the real world this lending
takes the form of loans to individuals and businesses for the purpose of undertaking risky
ventures.

Capital transportation of this form is known as ﬁnancial intermediation. The institutions that
stand between savers (those with surplus capital) and borrowers (those with less capital than
they would like to use in their productive technology) are known as ﬁnancial intermedi-
aries. The most common ﬁnancial intermediary is the bank, so the study of intermediation
is sometimes also known as banking.

In this chapter we will examine how banks operate, starting from the bank’s balance sheet,
its role in matching lenders and borrowers and continuing on to its ability (or desire) to
make loans. We will study competitive equilibria in banking. And we will consider the
inherent instability built into many banking systems.

The balance sheet of a bank is a little unusual at ﬁrst sight. The key fact to remember is
that, for the bank, loans are assets, in exactly the same way that vault cash and government
bonds are, while deposits are liabilities. Every ﬁnancial instrument that is an asset on one
balance sheet must be a corresponding liability on another balance sheet. For example,
loans on a bank’s balance sheet are assets, while those same loans are liabilities on the
borrower’s balance sheet.

We will consider a completely worked-out model with a competitive equilibrium in bank-
ing. This model, originally due to Williamson, provides several important insights. First,
184                                                                 Financial Intermediation


banks will act as aggregators of deposits, bundling together several small deposits to make
one large loan, as we actually observe in practice. Second, some agents will be completely
unable to get loans in equilibrium because the bank ﬁnds it too expensive to make loans
to them. These agents are credit rationed, which acts something like a “credit crunch” in
reality. Third, banks will use a pure debt contract with default in dealing with borrowers.
                                                                               r
That is, the bank will loan a borrower an amount, say $100 at an interest rate , say 5%, and
expect to be repaid $105 at the end of the period no matter how the borrower’s ﬁnances
have changed in that period. Even if the borrower’s house burns down and employer goes
bankrupt, the bank wants its $105. The borrower’s only recourse is to declare bankruptcy,
hand over all assets and consume nothing (or some very low amount). This is known as
defaulting. The bank could have written a very different loan contract, something like, “Pay
me $110 if your house doesn’t burn down, but $10 if your house does burn down”. As-
suming that there is only a 5% chance that the borrower’s house will burn down, the bank
will in expected value get $105, and the borrower would vastly prefer such an insurance
contract. The absence of such contracts must be explained. The explanation we use here is
one of moral hazard. The bank has no way of knowing whether or not the borrower’s house
has really burned down without paying an audit cost. Thus the borrower always has an
incentive to lie (hence the term “moral” hazard) and claim misfortune.

Next we turn our attention another model with moral hazard. In this model there are no
audit costs, but agents will supply a secret amount of labor effort. Because labor effort is
secret, lenders will not be able to directly contract on it, and borrowers will supply lower-
than-optimal amounts of effort. Agents will also be of different wealth levels, which will
allow us to think about how credit is provided to rich people as opposed to poor people.
We will see that poorer agents will work less hard, pay a higher interest rate and default
more frequently than richer agents. This effect will be so strong that certain very poor
agents will be credit rationed. These very poor agents will save their meager assets.

Finally we will consider the celebrated model of bank runs by Diamond and Dybvig. Bank
runs refer to ﬁnancial panics in which depositors rush to their bank to liquidate their as-
sets, usually because they doubt their bank’s ability to make payments. The most famous
bank runs happened during the Great Depression and indeed, according to Diamond and
Dybvig, they might have greatly contributed to the economic collapse of that period. The
model has continuing appeal because, although the American banking system has been
somewhat insulated from panics, the banking systems of other countries continue to suc-
cumb to panics. It is an unfortunate fact of life that banking panics still plague us. In Dia-
mond and Dybvig’s model, agents will look out of their windows, see other agents running
to the bank and be immediately compelled to also run. The ﬁrst (luckier or ﬂeeter) agents
to the door of the bank withdraw all of their deposits, leaving nothing for the remaining
(slower) agents.
17.1 Banking Basics                                                                                   185


17.1 Banking Basics

In this section we brieﬂy review some important concepts in modern American banking.
We begin with a discussion of accounting for banks. We then turn to the fractional reserve
banking system, and examine how the government manipulates the money supply. We
conclude this section with a discussion of an important banking reform proposal, that of
narrow banking.




Assets and Liabilities of a Bank

Banks are businesses, and like all enterprises they incur liabilities and accumulate assets.
The confusing thing about banks is that by accepting a deposit, which is after all an inﬂow
of money to the institution, the bank has incurred a liability. Since a liability is an obligation
to pay, the bank has, by accepting the deposit, promised to pay the depositor the amount
of his deposit plus accumulated interest either on demand or at a particular time. In the
same way, by making a loan, which is an outﬂow of money from the bank, the bank has
accumulated an asset. An asset is a claim to payment, and by making the loan, the bank
has a claim on some repayment schedule of principal plus interest. Not all loans are repaid,
so the bank must estimate the expected value of loans that will not be repaid and count this
against its assets. Thus bank balance sheets have an item marked “Outstanding Loans net
of Loss Reserve”. This loss reserve is a polite term for the expected value of loan defaults.

A bank also holds, by law, a certain proportion of its deposits in zero-interest accounts with
the Federal reserve system. These are also assets, although pretty low-yield ones. Banks
hold a very small amount of “vault cash” which is currency (notes and coins) held at the
bank (usually in impressive safes). This is used to meet the cash needs of depositors day-
to-day. Banks also directly hold securities like U.S. Government debt (bonds). The nature
of these securities is limited by law, so in the U.S. banks are not big stock market players.
Banks also often directly own property, such as the bank building itself.

Like other business, banks make operating proﬁts or losses as the value of assets and liabil-
ities ﬂuctuate. If a bank makes a proﬁt, so that assets exceed liabilities, a residual liability
is added to balance assets and adjusted liabilities. Thus proﬁt is a liability. The opposite is
true for losses.1

In this chapter we are going to assume that banks are zero cost enterprises with no assets
other than loans and no liabilities other than deposits. We will assume that banks make
zero economic proﬁt in expectation, so the expected return on loans must cover the amount
owed to depositors.

   1 For more information on this and other oddities in banking, see Mathis Dewatripont and Jean Tirole The

Prudential Regulation of Banks, 1994, MIT PRess: Cambridge, MA.
186                                                                            Financial Intermediation


Fractional Reserve Banking and the Money Supply

In the U.S. today, banks are required to hold a certain fraction of their deposits in reserve,
that is, not lend them out (these reserves are held on deposit by the retail banks at Federal
Reserve member banks). Since the reserve requirement is not 100%, banks may lend out
the portion of their deposits not held on reserve. Reserve requirements are indexed by the
nature of deposits and loans, so banks have to hold extra reserves against riskier loans, but
let us suppose for a moment that they are constant at 10%. Imagine that the government
                                                     H
prints $100 and gives it to household 0, so 0 = 100. This household immediately places it
in the bank or spends it. Any amount spent must go as a payment to some other household,
which then faces the same choice: deposit or spending. And so on, until the banking
system has absorbed the entire $100 of cash.

In this way, the fractional reserve banking system can multiply an infusion of cash, aug-
menting the M1 money supply by more than the infusion. Reserves held at the Fed will
also affect the money supply in the same way. For this reason, cash and reserves held at
the Fed are often called base money or high-powered money. The sum of all cash and deposits
held at the Fed is called the monetary base.

Assume for simplicity that each household simply deposits the cash. Assume also that
there is only one common bank. Now since the reserve requirement is 10%, the bank places
$10 of its new deposits on reserve at the local Federal Reserve system member bank. The
remaining $90 it lends out again to some other household, household 1, so 1 = 90. This       H
household spends or deposits the money, as before, so a further $90 of deposits appear in
the bank. Now the bank sends $9 to the Federal Reserve, and lends out $81 to household 2,
    H
so 2 = 81. This process continues until the bank is lending out, to household an amount       i
H i:
                                           H
                                     i = $100(1 0 10)
                                                       i   : :
The amount of new money created is just the sum of all loans made to households as a result
of the original $100 transfer, plus that $100. That is:
                     1
                     X            1
                                  X                            1
                                                               X
            M0 M =         Hi =         100(1    :
                                                0 10)i = 100          :
                                                                     0 90i = 100
                                                                                   1
                                                                                       1
                                                                                        :
                                                                                       0 90
                                                                                            = 1000   :
                     i=0          i=0                          i=0
        M
Here 0 is the new stock of money and             M
                                             is old stock of money. Thus via the fractional
reserve banking system, the $100 initial cash transfer of the government grows to be $1000
worth of new deposits in the banking system, which can then be used for payments pur-
poses.


Targeting “The” Interest Rate

The U.S. government does not, as a rule, print money and then hand it out to agents (as we
shall see in Chapter 18, however, other governments do exactly that). Instead, monetary
17.1 Banking Basics                                                                           187


policy is controlled by the Federal Reserve system (known as the “Fed”). The speciﬁc
instrument of monetary policy most commonly used are open-market operations which the
Fed uses to target “the” interest rate. The level of “the” interest rate is closely watched by
industry and the media.

The interest rate that is at the center of all this fuss is called the “Fed funds rate”. It is
associated with a very speciﬁc and abstract credit contract that is executed only between
banks. No private individual has ever executed a Fed funds contract. Here is how the
Fed funds market works: Banks are constantly gaining and losing deposits as individuals
move, experience good or bad fortune or die. At the close of business each day, banks
must meet their reserve requirement at the Fed. Imagine that a bank, say Hyde Park Bank,
sees a sudden surge in deposits one day (say the ﬁrst day of classes at the University of
Chicago). Hyde Park Bank must place more funds on reserve at the Fed to meet its reserve
requirement. Since deposits at the Fed earn no interest, it is likely that Hyde Park Bank
does not have any excess reserves. Moreover, it takes time and money to make a deposit at
the Fed. To meet the sudden shortfall in required reserves, Hyde Park Bank turns to other
banks, who might have surplus reserves (caused by a sudden outﬂow of deposits). Thus
Hyde Park Bank borrows reserves held at the Fed from other banks. Reserves held at the
Fed are called Fed funds. The market for these reserves is called the Fed funds market.
The interest rate on Fed funds (the interest rate that Hyde Park Bank pays) is the Fed funds
rate. It is “the” interest rate.

Recall that deposits at a bank are liabilities. Thus Fed funds, an asset of banks, are a liability
of the government. However, they are not an onerous liability since the government does
not pay interest on these deposits. The Federal reserve system is the banker’s bank, and its
books must also balance.

The Fed does indeed announce a target for the Fed funds rate. However, it affects the rate
with more than just the moral suasion of an announced target: the Fed affects the supply
of Fed funds directly through open market operations (OMOs). In an OMO purchase the
Fed trades Fed funds for assets held at banks. Thus the Fed approaches a bank, say Hyde
Park Bank, which holds millions of dollars of U.S. Government debt (bonds) and offers to
buy a thousand dollars of these bonds. How will the Fed pay for these bonds? With “store
credit”, that is, by creating $1000 of new reserves held at the Fed in the name of Hyde Park
Bank. Hyde Park Bank is neither a net loser or a net gainer from this operation, since it
has traded $1000 of one safe asset (government bonds) for $1000 of another (Fed funds).
What will Hyde Park Bank do with the new Fed funds? It could in principal trade them
for cash. For this reason, we say that cash is a liability of the government in exactly the same
way that Fed funds are. However, Hyde Park Bank will probably just ﬂoat them on the
Fed funds market, driving down the Fed funds rate. Thus OMO purchases are associated
with decreased Fed funds rates and an increased money supply (since Hyde Park Bank can
trade its new Fed funds for cash). This is an expansionary monetary policy.

In the opposite way, an OMO sale tends to increase the Fed funds rate and decrease the
money supply. In an OMO sale, the Fed approaches Hyde Park Bank and offers to sell
it some government bonds which the Fed holds. The Fed accepts as payment Fed funds.
188                                                                         Financial Intermediation


Thus the stock of Fed funds decreases and the Fed funds rate increases. Since Hyde Park
Bank had to give up an asset that could be traded directly for cash (Fed funds), OMO sales
cause a decrease in the money supply. This is a contractionary monetary policy.



Narrow Banking

In modern America, the banking system has two jobs. Intermediation is one job (and the
primary focus of this chapter). The other job is acting as a payments system. That is, deposits
at banks can be accepted as legal payment for goods and services, often in the form of
checks (drafts on deposits). Although we are accustomed to thinking of these two jobs as
linked, there is absolutely no inherent reason why they should be. In fact, true banking
reform would institute so-called narrow banking, in which banks are not allowed to lend.
They would have to back deposits completely with a riskless asset (usually government
bonds). This is equivalent to a 100% reserve requirement. In this scenario, banks would
concentrate only on providing low-cost payments services like checks, smart cards, direct
deposit and direct withdrawal.

In a world of narrow banking, households seeking loans, for example a home mortgage,
would not approach banks. Neither would households seeking a greater return on their
investment than that provided by the narrow banks. Instead they would approach non-
bank ﬁnancial intermediaries. These intermediaries would be like mutual funds: savers
would own an equity share of the mutual fund, which would have some constantly quoted
price. Borrowers would negotiate with the mutual fund in much the same way that they
would with a bank. The key difference is that the value of the mutual fund would not be
ﬁxed, like the value of deposits at a bank. In good economic times the mutual fund will
perform better than in bad economic times. As we shall see in the section on bank runs
below, this kind of arrangement effectively prevents ﬁnancial panics.


Payments Systems

Before turning to models of intermediation, it is worth brieﬂy discussing the payments
system2 . The payments system is the infrastructure, law and custom governing our ability
to pay for goods and services. The most common methods of payment by households are
cash, check and credit card. Of these three methods, only cash requires no up-front invest-
ment by the household. To have a checking account costs (on average) $80 a year, and since
credit cards are a form of unsecured debt, households must frequently pay some minimum
amount each year to use one. Households too poor to afford either must use so-called “Cur-
rency Exchanges”, which are ubiquitous features of working-class neighborhoods. These
institutions will cash paychecks and welfare checks (for a fee), allow households to pay
  2 The numbers in this subsection are drawn from the paper “Retail Payments Instruments: Costs, Barriers,

and Future Use” by David Humphrey and Lawrence Pulley, presented at the Conference on Bank Structure and
Competition in Chicago, May 7, 1998.
17.1 Banking Basics                                                                        189


their utility bills in cash (for a fee) and write “money orders” (a form of check), again for
a fee. A year’s worth of transactions at one of these exchanges can easily cost much more
than $80, but the costs are directly contingent upon use, unlike checking accounts or credit
cards, and do not require anything in the way of legal documentation.

Although there is about $400 billion in U.S. currency (cash) outstanding, only 10%-15% of
this total cash (based on surveys of households) is used by households. Over 60% of total
cash is thought to be outside the U.S. In the U.S., roughly 70% of all transactions are settled
in cash, while the same ﬁgure is 78% in Holland, 83% in Finland, 86% in Germany and 90%
in the United Kingdom. The average value of these transactions is small, below $10.

In the U.S., of all non-cash transactions, 75% are settled by check, and the average check
is for $1,158. About 20% are settled by credit card, with an average value of $61. It is
interesting to note that although less than 0.5% of transactions are settled by wire transfer,
the average size of a wire transfer is over $4.2 million. The relatively large values of these
ﬁgures stems from the fact that they are used by the government and other institutions.
Households’ non-cash transactions average below $50.

The total cost of the U.S. payments system to payors, banks and payees is $204 billion a year
(about 3% of GDP) or roughly $1050 per adult. Each non-cash payment costs on average
$2.60.

Finally, although the check system is deeply entrenched in the U.S., the new electronic
payments means are substantially cheaper, costing a third to a half as much as checks.

Looking across countries, the average American made 326 non-cash transactions in 1996.
The corresponding ﬁgure for Canada is 151, for Europe it is 126 and for Japan a paltry 40.
Of these, checks accounted for 244 of the transactions in the U.S., 62 in Canada, 31 in Europe
and only two in Japan. Thus check clearing is much more common the U.S. than even in
Canada. These other countries rely more heavily on debit cards and other electronic means
(although the total number of non-cash transactions abroad is still well below the level in
the U.S.).

For most of the post-war period, the U.S. has led the world in payments system technology.
In other countries it is still quite common to pay even very large bills with cash. However,
the backbone of the domestic payments system, the check clearing system, is showing its
age. Other countries are already using sophisticated electronic systems such as debit cards
and electronic check presentation, that have yet to become common here. Although most
economists do not consider payments systems directly relevant to intermediation and the
conduct of monetary policy, there is no question that they have a large and direct impact
on all households in an economy.
190                                                                  Financial Intermediation


17.2 A Model with Costly Audits

In this section we will consider a model that replicates several of the important features of
ﬁnancial intermediation. This model is originally due to Williamson (1987). Intermediaries
will arise endogenously to evaluate the credit worthiness of borrowers, to bundle small
deposit together to make a large loan, to minimize the cost of monitoring borrowers and
to spread default risk across several lenders, so they are fully insured against default by
borrowers.

This model is exciting because we are, for the ﬁrst time, going to calculate a competitive
equilibrium in the capital market with heterogeneous agents. In addition, this capital mar-
ket is going to suffer from a realistic problem: audit costs. As a result, in equilibrium,
some agents will be unable to get loans no matter what interest rate they promise to pay,
so there will be credit rationing in equilibrium. Also, the audit costs are going to produce
very familiar credit contracts, the ﬁxed-obligation loan.


Agents

In this model there will be two kinds of agents. Type-1 agents, who form a proportion of
the population, will be workers. Type-2 agents, who form the remaining 1       proportion
of the population, will be entrepreneurs.

There will be two periods. In the ﬁrst period, type-1 agents work some amount, consume
and then save. Intermediaries accept these savings as deposits and use them to make loans
to type-2 agents. Type 2 agents will operate their risky technologies in the “morning” of
the second period, realize their outcomes and repay the intermediaries. The intermediaries
will then take these payments and repay their depositors. There is no way to store the
consumption good between periods.

Type-2 agents are born with a number stenciled on their foreheads. This gives their audit
cost. That is, if a type-2 agent is born with i on his forehead, it costs i for any other agent
to observe the outcome of his technology (more on that below). Note that the audit cost
                                                                             ;
  is public. These audit costs are distributed uniformly on the interval [0 1]. Thus 25% of
                                                           :
all type 2 agents will be born with audit costs below 0 25, and the remaining 75% of type-2
                                             :
agents will have audit costs greater than 0 25.


Preferences

Type-1 agents care about consumption in both periods. Their preferences over consump-
      c     c                                                  `
tion 0 and 1 and labor effort exerted in the ﬁrst period 0 are as follows:
(17.1)                           U 1(c0; `0; c1) = u(c0; `0) + c1:
17.2 A Model with Costly Audits                                                              191


Here   u1(; ) > 0, u2(; ) < 0 and u22 < 0.
Type-2 agents care only about consumption in the second period. Their preferences over
                  c
consumption 1 are simply:
(17.2)                                         U 2(c1) = c1:
So type-2 agents are risk neutral in consumption and supply no labor effort.


Technology

                                         h
Type-1 agents may work up to hours while young (in the ﬁrst period of life), where        h<   1.
Labor effort is transformed directly into the consumption good (so that the implicit “wage
                                                                                           r
rate” is just unity). The risk-free interest rate offered by the ﬁnancial intermediaries is , so
type-1 agents face budget constraints of the form:
(17.3)                                       c0 = `0 s; and:
(17.4)                                       c1 = (1 + r)s:
Where 0     `   h and s is the savings of a type-1 agent.
All type-2 agents have access to the same technology, no matter what their audit cost is
                                                                                    k
(that is, they differ only in their audit cost). In exchange for a capital input of = 1 while
                                                                                   y
young, type-2 agents will operate a risky technology that produces output of , where, for
                       i
a particular agent , output i is:y
                                                 yi = 1 + "i:
                                     "                                         ;
The idiosyncratic shock term i is distributed uniformly on the interval [0 1]. So the mean
                            :
or average shock is 0 5 and mean output is 1 + 0 5 = 1 5. :     :
Notice that type-2 agents have no intrinsic wealth of their own–they must get a loan of size
k = 1 to ﬁnance their projects. Since the absolute maximum that a type-1 agent can produce,
by working full-time (`0 = h) is h, which by assumption is less than unity, a type-2 agent’s
project can be ﬁnanced only by a loan from several type-1 agents. Thus intermediaries are
going to have to aggregate deposits from several savers to make a single productive loan,
which matches the real world experience well.

                        y
Finally, the output i of a particular type-2 agent’s technology is private to that agent. Only
         i                               y
agent may costlessly observe i . All other agents must pay the audit cost i stenciled on
         i
agent ’s forehead to observe i .     y

Intermediation

Although we will not explicitly model the industrial organization of banking in this pa-
per (that is, we will not write down how banks are formed, who owns them and so on),
192                                                                   Financial Intermediation


it is easy to see what the optimal banking structure will look like. Since the only cost to
forming a bank is auditing defaulting borrowers, any agent can declare himself a bank,
accept deposits and make loans. The larger the bank, the more insurance that depositors
                                                             n
will have against defaults. Imagine a bank that matched depositors, each of whom de-
                       =n
posits some amount 1 with exactly one borrower. There is no insurance at all for those
n                                                   n
   depositors. If the borrower defaults, then all depositors lose everything. Now imagine
that a second bank opens across the street from this ﬁrst bank. This bank seeks to match
 n
2 depositors with two borrowers. If one borrower defaults, depositors may still recover
something from the other borrower. The second bank will clearly attract more depositors
than the ﬁrst bank. In this way, larger and larger banks will form, until all the potential
depositors go to the same bank, which also makes all of the loans.

Now let us turn our attention to the question of optimal loan contracts. The bank advances
                          k                                            y
a type-2 agent a loan of = 1. The agent then experiences output , which is secret. The
bank is interested in minimizing the expected audit cost it will have to pay. One contract
would be for the borrower to report his output, and for the bank to take, say 10% of that
output as payment for the loan, and the bank never audits. The problem with this contract
                                                y
is that borrowers will always announce that = 1, the minimum possible output. Since the
bank is not auditing, there is no way for it to dispute this claim.

The bank wishes to minimize the cost of audits while at the same time ensuring that bor-
rowers tell the truth. It turns out that the best contract for this purpose is one in which the
                                                        X
bank announces some required repayment level . No matter what output is, the bank
                               X
insists on getting its amount . Any borrower who announces output              y<X   is declared
bankrupt and audited. Whatever output that agent had produced (no matter how large
or small) is seized by the bank. Borrowers with outcomes        y<X    have no incentive to an-
nounce anything other than the truth, while borrowers with outcomes            y>X   know they
must always pay    X                                              y
                       or be audited, so they merely announce , pay        X  and consume the
residual y X    .

It is interesting to note that is exactly the kind of debt contract that is actually written.
Lenders make loans at some interest rate, and expect to be repaid the loan amount plus
interest. If borrowers do not repay this amount, they are declared bankrupt and legal pro-
ceedings begin. Of course in our society bankrupt agents do not consume zero, and in fact
their minimum consumption varies from state to state, but the underlying principle is the
same. Risk averse agents would prefer more complicated credit contracts, ones that pro-
vided a certain amount of insurance along with the loan. For example, most homeowners
would be willing to pay above-market interest rates on their mortgages if their bank agreed
to cut their mortgage payments if something bad happened to the homeowner (loss of job,
injury etc). The reason such contracts are not more common is because output is largely
hidden. Lenders want to be assured of repayment without having to closely monitor their
borrowers (an expensive proposition).

Let us return to the problem of a ﬁnancial intermediary making a standard loan of size = 1k
                                                                           X
to a particular borrower with known audit cost , requiring repayment and auditing the
                                   X
borrower if output falls below . Write      X           x   x
                                               as 1 + , so is the net interest rate paid by
17.2 A Model with Costly Audits                                                                                  193


                                                         y
borrowers. In addition, recall that output is always between 1 and 2, depending on
                             "
the value of the shock term . The actual revenue of the intermediary conditional on the
                       x
repayment amount , the audit cost , and the shock term is:        "
                                            
                                                     1 + x;   "x
                             (x; ; ") =             1+"    ; "  x:
                                                 "
The bank knows that the output shock is distributed uniformly on the interval [0 1].                             ;
                       x
Assuming that 0   1, the expected revenue of the intermediary conditional only on                                  x
and is:
                                      Z 1
                           (x; ) =          (x; ; ") d"
                                       0
                                            Z x                               Z 1
                                    =1+              (   "       )   d" + x          d"
                                            
                                             0
                                                                 
                                                                               x
                                    =1+
                                                 x2             x + x(1 x)
                                                 2

                                    = 1 + (1                 )x
                                                                  x2 :
                                                                     2
It is easy to see that expected revenues (   x;
                                            ) as a function of are a parabola with a peakx
  x
at ? ( ) = 1       . No bank would ever charge a repayment amount greater than ? ( ),        x               x
                                x
since revenue is declining in beyond that point, and borrowers are worse off.

   
Let ? ( ) be the absolute maximum amount of revenue that the bank can accumulate as a
function of the audit cost, . That is:

                            ?( ) =  [x? ( ); ] = 1 + 12 (1                        )2   :
Thus for agents with = 1, the bank’s maximum revenue occurs when ? ( = 1) = 0 and                x
                                                             
the bank never audits, producing a revenue of ? ( = 1) = 1 with certainty. For agents with
  = 0, the maximum revenue that the bank can extract occurs when ? ( = 0) = 1 and the        x
                            
bank’s expected revenue is ? ( = 0) = 3 2.   =
Now let us turn our attention to the liabilities of the bank. The bank owes its depositors
               r
an amount 1 + on a unit loan. Thus for each borrower of audit cost , banks will pick the
                   x
lowest value of such that (  x;             r
                                  ) = 1 + . There will be some agents, with relatively high
values of , for which banks will never be able to realize an expected return of 1 + . That               r
                                            r
is, those agents with audit costs  ? ( ) such that:

                                       ?[ ?(r)] = 1 + r:
will be credit rationed. Banks will never make them a loan, they will be squeezed out of the
credit market and their projects will not be funded. It is easy to see that ? ( ) is given by:       r
                                                                 r
                                             r
                                           ?( ) = 1                  r:
                                                                     2
194                                                                            Financial Intermediation


            r                                                             r
Thus when = 0, ? = 1 and no agents are credit rationed. As increases, more agents are
                                                                     r
credit rationed, and at the astronomical interest rate of = 2, all agents are credit rationed.



Equilibrium

It is easy to see now how equilibrium in this economy will be achieved. There will be a
                                                  r
demand for capital, which is decreasing in , and a supply of capital, which is increasing in
r. The demand for capital is given by the number of agents who are not credit rationed at
                    r
the interest rate . That is, the proportion of type-2 agents (remember, they make up (1    )
                             r
of the total) with  ? ( ). Thus the aggregate demand for capital is given by:
                                                                        r 
                            K d(r) = (1           r
                                              ) ? ( ) = (1       ) 1
                                                                          r :
                                                                          2

    r
As decreases, more and more type-2 agents may ﬁnance their projects. Each type-2 agent
always wants exactly one unit of capital, so individual borrowing is constant but aggregate
borrowing increases.

The supply of capital comes from the saving schedules of type-1 agents. As increases,        r
type-1, or worker, agents each save more. Say that the savings schedule of workers is
         Sr
given by ( ). Thus the supply of capital is:

                                           K s (r ) = S (r ):
                                                                          r
Equilibrium in the capital market will occur at the interest rate ? at which:

                                          K s (r ? ) = K d (r ? ):
That is, where the supply of capital from type-1 agents’ savings equals the demand for
capital from intermediaries lending to type-2 agents, so they can ﬁnance their projects.



An Example

Imagine that type-1 agents had preferences over consumption while young 0 , labor effort c
                `
while young 0 , and consumption while old 1 given by: c
                        U 1(c0; `0; c1) = u(c0; `0) + c1 = 2pc0 + 2 h `0 + c1:
                                                                   p


Recall from the budget constraints, equations (17.3) and (17.4), that, by substituting in the
                s
savings term , this becomes:
                                          p              p
                            U 1(`0; s) = 2 `0 s + 2 h `0 + (1 + r)s:
17.3 A Model with Private Labor Effort                                                     195


                                       `            s
We take derivatives with respect to 0 and to ﬁnd the ﬁrst-order necessary conditions for
maximization:

                                 p` 1 s ph 1 ` = 0; and:
                                   0            0

                                   p` s + (1 + r) = 0:
                                      1
                                           0

We can solve these to ﬁnd the savings schedule of type-1 agents:

                                       s(r) = h             2
                                                             r :
                                                         (1 + )2

The aggregate supply of capital is thus:
                                                                   
                                   K s (r ) = h              2
                                                               r :
                                                          (1 + )2
                                       p
Notice that   K s(r0) = 0 where r0 =    2      =h   1.

For equilibrium to occur with this speciﬁcation of preferences, the interest rate at which
there is zero demand for capital must exceed the interest rate at which there is zero supply.
                                                                        r
The zero-demand interest rate we know from above to be = 2. The zero-supply interest
      r r
rate is = 0 . Thus for equilibrium:
                                                r

                                            h 1 < 2:
                                            2


It is easy to see that this means that h > 2=9. Indeed, as h gets closer and closer to 2=9, the
supply curve shifts upward. This in turn causes the equilibrium interest rate to rise and the
equilibrium supply and demand of capital to fall, decreasing the number of projects that
are undertaken.



17.3 A Model with Private Labor Effort

The model of the previous section was very useful in thinking about equilibrium in the
credit market. However, since in the real world we do not necessarily recognize “type-
1” and “type-2” agents from birth, and we do not readily observe different audit costs, it
makes sense to consider a different model. In this model all agents will be identical except
for their wealth level. Some agents will be richer, others poorer. There will be no audit cost,
and output will be public. However, agents are going to have to work to make the project
succeed, and the amount of their labor effort will be private (that is, hidden). It can never
be known (cannot be audited). This is another example of moral hazard.
196                                                                                         Financial Intermediation


Technology, Endowments, Preferences

All agents will have access to a common “back-yard” technology which will map capital                                    k
                 `
and labor effort into a probability that the project succeeds. If the project succeeds, output
            q                                             k
is high, at . If it fails, output is zero. Capital can take on only two values: = 0 or = 1.             k        k
    k
If = 1 then the probability of the high output is just given by the level of labor effort, . If                      `
k = 0 then the low output occurs with certainty, no matter what the effort level was.

                                                                      a
Agents are all endowed with some level of wealth . For a particular agent, if    1, then                    a<
that agent must get a loan of size 1             a
                                      to operate the technology. If    1, then the agent       a>
can ﬁnance the technology alone and lend the surplus     1.               a
                                                        c
Agents have preferences over consumption and labor effort given by:                   `
                                                      c q` :
                                                          2

                                                              2
Here 0   < < 1 and q is just the high output level.

Rich Agents

                                                                  r
Assume that there is some riskless rate of return on wealth. A rich agent, one with    1,                        a>
can ﬁnance the project from her own wealth and lend the remainder at this interest rate
r. How much effort does she supply? If the project fails and output is zero, she consumes
c          r a                                                                q
  = 0+(1+ )( 1). If the project succeeds and output is , she consumes = +(1+ )( 1).                 c q      r a
                                                 `
The project succeeds with probability , her labor effort. Thus her maximization problem
is:
                       
                 max       `[q + (1 + r)(a       1)] + (1         `)[(1 + r)(a        1)]
                                                                                             q `2  :
                  `                                                                             2

The ﬁrst-order condition for maximization with respect to is:                     `
                                                     q q ` = 0:
                     ` a           a
This implies that ? ( ) = for  1. That is, agents wealthy enough to ﬁnance the project
out of their own funds all supply the same labor effort, .

                                         `
Given that all rich agents supply = regardless of their wealth, we can easily calculate
their expected utility by plugging back in:

                                       q + (1 + r)(a 1) q 2 ; or:
                                                                          2


                                              q + (1 + r)(a 1):
                                             2
17.3 A Model with Private Labor Effort                                                     197


Thus the value from operating the technology is                q=
                                                        2, and the value from lending any
                      r a
excess capital is (1 + )(     1). The opportunity cost of the capital used in the productive
               r
process is (1 + )  1 (since production requires one unit of capital). Thus for any agent to
undertake the project, it must the case that:
                                                  q  1 + r:
                                                 2
                                                                           r
For the rest of this section we are going to assume that the interest rate is below   q=2 1,
so agents will want to use the productive technology.


Poor Agents

Now consider the much more interesting case of a poor agent, with wealth           a<  1, who
seeks a loan from a ﬁnancial intermediary of size 1                 a
                                                                in order to ﬁnance the project.
For now we will assume that the intermediary charges the borrower an amount          X   if the
project succeeds and zero if it fails. This is again the root of the moral hazard problem: the
borrower only repays the bank if her project succeeds. This decreases the incentive for the
borrower to work.

Now if the project succeeds, the agent consumes c = q X , that is, output q net of repayment
X . If the project fails, the agent consumes c = 0. Thus the agent is repaying only in the
state when the project succeeds. The agent’s choice of effort comes from the maximization
problem:
                                                               
                                       `(q X ) + (1 `)(0) q `2 :
                                                              2
                                max
                                 `
The ﬁrst-order necessary condition for maximization with respect to effort is: `
                                           (   q X ) q ` = 0:
            ` X
Solving for ? ( ) (effort as a function of repayment) produces:
                                                     
                                          ` X
                                          ?( ) =           X:
                                                       1
                                                           q
                            `                        ` X
Notice immediately that ? (0) = and that ? ( ) is decreasing in         X . Hence poor agents,
borrowers, will work less hard than rich agents, lenders.


Intermediaries

Now consider the problem of the intermediary raising deposits and making loans to poor
agents. If this intermediary makes a loan of size 1            a
                                                    , it must pay its depositors an amount
198                                                                       Financial Intermediation


      r
(1 + )(1  a ) on this loan. Thus its expected return on the loan must be equal to (1 + )(1  r
                                                                                            ),    a
                                                                               X
the risk-free cost of capital. If the project succeeds the bank makes , if it fails, the bank
                                          `
makes 0. The probability of success is , which cannot be observed or controlled directly
by the bank. The bank must take the agent’s effort choice as a function of repayment ? ( )      ` X
as given. So the bank’s zero proﬁt condition is:

                       `?(X )  X + [1 `?(X )]  0           r
                                                         (1 + )(1   a) = 0 :
                                                                                      ` X
Substituting the borrower’s choice of labor effort conditional on repayment, ? ( ), in from
above, the bank’s zero-proﬁt condition becomes:
                                  
                             X            X         r       a) = 0 :
                                      1
                                          q    (1 + )(1

This is a quadratic equation in X and may be written as:
                             X 2 qX + q (1 + r)(1 a) = 0:
                                        


Using the quadratic formula, we obtain two possible values for           X (a), that is, repayment as
a function of wealth:
                                          q       
                                      q  q2   4 q (1 + )(1  r      a)
                           X ( a) =                  2
Since competitive pressures will force intermediaries to charge the lowest possible value of
X , we concentrate on the lower branch. Notice that X (1) = 0.
Consider the term inside the radical in the deﬁnition of X (a) above:

                                   q2 4 q (1 + r)(1 a):
                                           


Notice that if a is small and r large, then this term might be negative. This means that, for
poor borrowers, there is no value of X for which the intermediary can recover the cost of
making the loan. Call this critical wealth a? (r). Notice that a? (r) satisﬁes:

                                     a?(r) = 1 4(1 +q r) :
                            a r
Agents with wealth below ? ( ) are credit rationed. What will these agents do? They will
become so-called poor savers and invest their meager funds in the economy-wide mutual
fund.

Thus there will be three classes of agents in this model: the poor, who wish to borrow but
cannot, and so save; the middle-class, who cannot self-ﬁnance but can borrow; and the
rich, who self-ﬁnance and save the remainder of their wealth. Thus the demand for loans
comes entirely from the middle-class, while the supply of funds comes from both the rich
and the very poor. Increases in the interest rate will help the rich and the poor, and hurt
the middle class.
17.4 A Model of Bank Runs                                                                      199


17.4 A Model of Bank Runs

Now we turn our attention to the celebrated model of bank runs from the paper “Bank
Runs, Deposit Insurance, and Liquidity” by Diamond and Dybvig. As Diamond and Dyb-
vig say:

      Bank runs are a common feature of the extreme crises that have played a promi-
      nent role in monetary history. During a bank run, depositors rush to withdraw
      their deposits because they expect the bank to fail. In fact, the sudden with-
      drawals can force the bank to liquidate many of its assets at a loss and to fail. In
      a panic with many bank failures, there is a disruption of the monetary system
      and a reduction in production.

This neatly sums up the important features of the discussion. Bank runs can be a self-
reinforcing phenomenon: if one agent sees others running for the bank, she must also join
the run or face the certain loss of her wealth if the bank should fail. This sudden demand
for cash (also called the demand for liquidity) causes the bank to sell (or liquidate) its assets
(loan portfolio) at a loss, so it may be unable to satisfy the demands of its depositors. The
real loss caused by premature liquidation is the fundamental reason why bank runs are
bad.

How can bank runs be stopped? The authors consider two possibilities. First, suspension of
convertibility, in which a bank temporarily refuses to cash out deposits. This is also known
as a bank holiday and was quite common in the ﬁnancial panics of the Great Depression.
We shall see that bank holidays will only work under special conditions. Second, the au-
thors consider deposit insurance, in which the government taxes all agents in order to honor
banks’ obligations. Deposit insurance will prevent bank runs even under very general con-
ditions, and so we conclude that they are a more robust way of preventing bank runs. The
authors do not consider the possibility of replacing the bank with a mutual fund, but, as we
shall see, this too would prevent bank runs.

In this section we will consider a very different reason for banks to exist than in the pre-
vious two sections. Earlier, we viewed banks as institutions for getting capital from rich
savers to poor borrowers (roughly speaking). In this section, all agents will have identical
wealth and productive opportunities, but they will differ in the timing of their demands
for consumption. Some agents will be content to consume later, while others will want to
consume immediately. Agents will not know their type when they invest. Think of it this
way: all agents are perfectly identical, except that some have cancer. Cancer diagnoses are
announced only after all agents have made their investment decisions. When they are diag-
nosed, the cancerous agents want to consume immediately, while the noncancerous agents
are content to wait until the following period to consume. The productive technology is (as
we shall see) illiquid, so the cancerous agents are forced to prematurely liquidate. Banks
will convert their illiquid assets into liquid liabilities. In doing so, the bank will leave itself
open to the possibility of a bank run. If there is a bank run, then all assets are prematurely
200                                                                 Financial Intermediation


liquidated and there is real economic harm done.

As in the previous two models that we have considered, there is an informational prob-
lem. Here, there will be no way for banks to distinguish agents who truly have urgent
consumption needs (our “cancerous” agents) and those who do not (the “noncancerous”
agents).



Technology, Endowments and Preferences

                            t   ; ;
There are three periods, = 0 1 2. There is a single homogeneous good, and agents are
                    t
endowed in period = 0 with one unit of this good. There is a common, riskless, technology
                                      t
which converts a unit invested in = 0 to       F>                   t
                                                  1 units in period = 2. If the technology is
                                      t
interrupted in the middle period, = 1, the salvage value is just the unit again. Think of this
as a “growing turnip” technology. All agents are endowed with a turnip at birth in period
t                                                                                 t
  = 0, which they plant. If they uproot the turnip in the second period of life, = 1, they
just get their original turnip back. If they leave the turnip in the ground all the way to the
                t
harvest date of = 2, it will have grown toF>       1 turnips.

Agents have no desire to consume in period t = 0. Let c1 be consumption in period t = 1
and c2 be consumption in period t = 2. Agents will have preferences of the form:
                                       
                        U (c1; c2; ) = ln( c1);         if  = 1
                                         Q ln(c1 + c2 ); if  = 2:
Here 1  Q > F 1 . The term Q is less than one. As a result, agents with  = 2 (non-
cancerous) have a lower marginal utility than agents with  = 1 (cancerous). So not only
do agents with  = 1 have to consume in period t = 1, they have a high marginal utility to
boot. This is sometimes known as being “urgent to consume”.

Agents of type  = 1 have no desire to consume in period t = 2 at all, while agents of type
 = 2 are indifferent between consumption in t = 1 and t = 2. An agent with  = 1 has
cancer and must consume while young while one with  = 2 does not have cancer and is
indifferent between consumption while young or old.

                                           
Assume that there is some probability of having                        
                                                       = 1 (that is, is the probability of
getting cancer). With probability 1       
                                       , = 2. Assume further that there is a continuum of
                        
agents, so a proportion will get cancer and the remaining 1     
                                                               will not.



Optimal Insurance Contracts

      c                                             i       t
Let it be the consumption of an agent of type in period . Without banks, because one’s
                                                                            
type is private, there can be no insurance contracts, so all agents with = 1 uproot their
17.4 A Model of Bank Runs                                                                                      201


          t                              c       ;c
turnip in = 1 and consume 11 = 1 12 = 0. All agents with                          = 2 leave the turnip in the
              t
ground until = 2 and consume 21 = 0 22 = .   c        ;c F
Since agents are risk averse, they would prefer to be assured of some consumption between
                                                       F     
the low level of 1 and the high level of . If were public (that is, commonly observed),
zero-cost insurance companies would provide agents with insurance contracts. Optimal
                                                                    c
insurance contracts would have the feature that 12 = 21 = 0 since agents withc         = 2 are         
content to wait. The budget constraint of the insurance company (equation 1c in Diamond
and Dybvig) is a little hard to understand at ﬁrst glance. Think of it like this: a proportion
                                    c
  of the population will get 11 . This leaves 1       1
                                                               c
                                                      1 in the ground between period = 1 and           t
t = 2, where it grows to (1      F 1
                                     ).  c
                                        This is then spread  between the remaining 1    of the             
                         c
                                   1
population. Thus 22 must satisfy:


                                                     c22  F 11 c1 :
                                                                        1




This is equivalent to:


                                                 c11 + (1 F)c2  1:
                                                               2
(17.5)

The insurance companies’ Lagrangian is:
                                                                             
              L c ; c ; ) =  c
                  ( 11       2
                                     ln( 11 ) + (1      )Q c
                                                            ln( 22 ) +       1 c
                                                                                 1   (1    )c22  :
                             2                                                   1
                                                                                          F
This has ﬁrst-order conditions of:

                                                         
                                                        c11  = 0;
                                             Q 1 c2   1 F  = 0; and:
                                                  2

                                                c11 + (1 F)c2 = 1:
                                                              2



                                                                       ?      ?
We can solve these equations for the optimal consumptions, call them 11 and 22 . We ﬁnd:  c       c
(17.6)                                        c11? =  + Q(11 ) ; and:
(17.7)                                        c22? =  + QQF
                                                           (1 )
                                                                 :
                                           1?
Note that by assumption              QF >
                              1, so 22
                                       ?
                                                       c >c
                                           1 . In a perfect insurance contract, type-2
                             
agents (agents with = 2) consume more than type-1 agents (unlucky agents with = 1).                        
202                                                                         Financial Intermediation


Demand Deposit Contracts

The optimal insurance contract can be recaptured by a demand deposit contract provided
                                                                 t
by banks. Banks will accept deposits from agents in period = 0. At period = 1, some        t
depositors will be of type 1, and will approach the bank to withdraw their deposits early.
Their turnips have not matured, but the bank will rip up other agents’ turnips to provide
                                                                                  t
type-1 agents with more than just their unit turnip in return. In period = 2, the remaining
(type-2) depositors will get whatever is left over.

The bank has no way of telling which agents are type 1 and which are type 2, so it structures
                                        t                                             r
contracts like this: Deposits placed at = 0 will earn an interest rate of 1 if withdrawn in
       t           r                         t                          r >
period = 1 and 2 if withdrawn in period = 2. Of course, since 1 0, it is technologically
                                                                r                      t
impossible for the bank to pay off all agents the amount 1 + 1 in period = 1, since at that
time no turnips have actually matured. However, the bank has a technical legal liability to
               r
pay off 1 + 1 to any depositor who appears at its door in period = 1.   t
The banking system as a whole faces a sequential service constraint. This constraint is fun-
damental to the operation of banks in this model. It requires that depositors be honored
in the order in which they show up at the bank. Even though the bank can look out the
window and see a line that clearly exceeds its capacity to pay, it must pay out 1 + 1 on a         r
ﬁrst-come, ﬁrst-served basis.

These demand deposit contracts will have two equilibria. The ﬁrst equilibrium will be
the “good” equilibrium and will not feature bank runs. The second will be the “bad”
equilibrium and will feature a bank run.

Begin with the ﬁrst equilibrium. Agents of type 1 (and only those agents) appear at the
                   t
bank in period = 1 requesting their deposits plus interest, withdrawing 1 + 1 each. In         r
       t
period = 2, the remaining agents split what is left (remember that all the turnips left in
                         t       t                                            F
the ground from period = 1 to = 2 will have grown by a factor of ). Thus 11 and 22 are     c           c
related by:

                                     c11 = 1 + r1 ; and:
                                     c22 = F 1 1(1 + r1 ) :
                                                                 r ;r
Notice that although the bank announces the interest rates f 1 2 g, they are not indepen-
                             r                           r
dent. Choosing a value of 1 automatically ﬁxes 2 . For the rest of this section we will not
           r
calculate 2 explicitly.

For this equilibrium to work, type-2 agents must not prefer the contract offered to type-
                                                                    t
1 agents. Since, for type-2 agents, consumption in periods = 1 and = 2 are perfect     t
substitutes, it must be the case that, for the banking equilibrium to work:

                                            c22  c11:
17.4 A Model of Bank Runs                                                                   203


Substituting in from above, this translates to:


                                       F 1 1(1 + r1 )  1 + r1:
We can rearrange this ﬁnd:


(17.8)                             (1 + r1 ) + (1 )(1
                                                    F
                                                        + r1 )
                                                                1:
Notice that this is exactly the same as equation (17.5) above, the budget constraint on the
optimal insurance contract.

                     r
How do banks set 1 ? They maximize the expected utility of their borrowers:
                                                                     
(17.9)                        ln(1 + r1 ) + (1 )Q ln F 1 1(1 + r1) :
But this is exactly the same objective function as we used above, in the optimal insurance
                     r
contract. Thus 1 + 1 will satisfy:

                                                     r c11?:
                                                   1+ 1 =
       ?
         c
Here 11 is from equation (17.6) above. Thus demand deposits can replicate perfectly the
optimal insurance contract.

                                                     t
If all type-2 agents stay at home in period = 1, everything works perfectly. Type-2 agents
                                                               t
will only be willing not to go to the bank in period = 1 if they are certain that no other
type-2 agent will be withdrawing in period = 1.          t
This is the key to the bad equilibrium in this model, the bank run. If type-2 agents suspect
                                                                       t
that other type-2 agents are withdrawing from the bank in period = 1, their consumption
             t
in period = 2 will diminish. If enough type-2 agents attempt to withdraw in period = 1, t
                                           t
there will be nothing left in period = 2. Thus if a type-2 agent believes that other type-2
                                                               t
agents are going to the bank to withdraw in period = 1, their optimal response is also to
                         t
withdraw in period = 1. In a bank run equilibrium, the entire population appears at the
                 t                             r
bank in period = 1 demanding 1 + 1 . Since 1 + 1             r >
                                                          1, and there is only one unit of the
consumption good present in the bank, the bank liquidates its entire stock of consumption
                             =     r
good to satisfy the ﬁrst 1 (1 + 1 ) proportion of agents in line. All other agents get nothing
  t
in = 1 and, of course, nothing in = 0. t
Notice that the bank run has a real economic cost: by liquidating the turnip crop in period
t = 1, none is left to grow in period t = 2 and total economy-wide output goes down.
Moreover, in a bank run, some agents lose the entire value of their endowment. Although
Diamond and Dybvig don’t model it, we would expect this outcome to lead to social unrest.
204                                                                 Financial Intermediation


Suspension of Convertibility

During the ﬁnancial panics of the of the Great Depression, banks would often close their
doors when faced with a bank run. Remember that in those days deposits were entirely
uninsured, so depositors were desperate to realize any part of their deposits. As more and
more banks refused to honor their deposits, the Federal government declared several bank
holidays, during which no banks (solvent or insolvent) could open their doors. The banks
were, in effect, suspending the ability of their depositors to convert their deposits to cash.

Diamond and Dybvig’s model provides us a way to think about how suspension of con-
vertibility works. It turns out to be an effective deterrent against bank runs only if is 
known in advance.

The complete derivation of this result is beyond the scope of this section, but we can sketch
                                 
it out here. Imagine that is known with certainty. The bank announces that only the ﬁrst      
                                     t
depositors in line in period = 1 will be served. A type-2 agent faces no penalty for staying
                           t
at home in period = 1 even if other type-2 agents are going to the bank. He is secure
that there will be no excessive liquidation, and that his deposits will mature as expected in
the next period. Indeed, it is to his beneﬁt to have other type-2 agents withdraw early, in
        t                                                          
period = 1, since the total number of withdrawals is capped at , the more type-2 agents
                                                                       t
who withdraw early, the fewer type-2 agents will be left in period = 2 to share the value
of the remaining deposits.

         
What if is not known with certainty? The ﬁrst thing to establish that, in principal, nothing
                                                                           
is different. Imagine that are two possible values of : high, with = 1 and low, with
                                                           
  = 0 . Say that the high- outcome occurs with probability .3 Then the expected utility of
                                 c           c
an agent who consumes 1 if type 1 and 2 if type 2, is:

                  1u(c1) + (1 1)Qu(c2) + (1  ) 0u(c1) + (1 0)Qu(c2) :
This can be rearranged as:

                  1 + (1  )0]u(c1) + [ (1 1) + (1  )(1 0)]Qu(c2):
                       [

Deﬁne ¯ to be the expected value of :

                                    ¯ = 1 + (1  )0 :
The expected utility may be rewritten using ¯ as:

                                   u
                                   ¯ (c1 ) + (1 ¯)Qu(c2 ):

When forming expectations, agents use the expected value of .

Imagine that 1 is quite high, approaching one. The bank cannot suspend convertibility at
any proportion below 1 , because it cannot know the true value of . In fact, no one in the
  3 The Greek letter    is called “zeta”.
17.4 A Model of Bank Runs                                                                   205


                                     
economy knows the true value of . Imagine the plight of a type-2 agent watching agents
in line in front of the bank. Is this a bank run? Are there type-2 agents in that line? Or
                                     
is it simply the case that the high- outcome has been realized? If there are type-2 agents
in that line, the optimal response for the type-2 agent is also to get in line, since there is a
                                 
probability that in fact the low- outcome has been realized, and real economic damage is
being done. This story bears a striking resemblance to what actually happened during the
ﬁnancial panics of the Great Depression: in the midst of confusion about the true state of
liquidity demand, banks kept their doors open, forcing other agents to run to the bank.



Deposit Insurance

                                                                     
Deposit insurance will completely cure bank runs, even if is not known. In this model,
deposit insurance is more than a promise by the government to honor all deposits. Since
the stock of turnips is limited, the government must also tax agents to honor deposits.
                                                         t
Deposit insurance works like this: in period = 1 a certain number of agents apply to
                                                 r
withdraw their deposits and realize 1 + 1 . If the banks can honor these deposits and still
                         t           t
invest enough between = 1 and = 2 to honor the remaining deposits, the government
does nothing. If there is excess demand for withdrawals, the government begins taxing de-
                                                     t
positors to honor all the demand deposits in = 1 and to ensure that deposits are honored
          t                                                                 t
in period = 2. Agents (of both types) who withdraw their deposits in = 1 will, if there
                                             r
is a bank run, consume less than 1 + 1 , because of the taxes used to ﬁnance the deposit
insurance.

From the point of view of a type-2 agent, even if other type-2 agents are running to with-
                t
draw in period = 1, he is assured that there will be enough invested to honor his deposit
          t
in period = 2. Thus there is no beneﬁt to joining in the run. Indeed, because of the excess
                                         t
demand for withdrawals in period = 1 precipitated by a bank run, all agents (type 1 and
                                                             t
type 2) who rush to cash out their deposits in period = 1 will realize less than the 1 + 1   r
they are owed because they are taxed by the government.



Mutual Funds

The multiple equilibria in this model of banking depend critically on the presence of the
sequential service constraint. By relaxing this constraint, we can overcome the bad equilib-
rium.

A sequential service constraint is an integral part of a banking system with ﬁxed-obligation
                                                                 r
deposit contracts. That is, if a bank is going to promise 1 + 1 to anyone who walks through
                    t
the door in period = 1, it is bound to serve its customers sequentially. Doing away with
the sequential service constraint means doing away with banking entirely.

As an alternate system, consider a mutual fund. This is exactly the kind of institution that
206                                                                                     Financial Intermediation


would replace banks in a narrow-banking system. All agents trade their turnips in period
t                                                                       t
   = 0 for a single share in the mutual fund. In period = 1 there will be a market for
shares in the mutual fund: agents will be able to cash them out at some price 1 for the               p
consumption good. If all agents decide to cash out their shares, this price will be unity. In
          t
period = 2, the remaining shareholders will split the remaining assets of the mutual fund.
If some proportion of the population wish to trade in their shares at some price 1 , the                  p
                                                                p
remaining proportion of population will consume 2 in period = 2, where 2 is given byt             p
the familiar equation:

                                                 p2 = F 11 p1 :
                             p        p
It must be the case that 2  1 or no agents (not even type-2 agents) will be willing to hold
                                            t
on to the mutual fund until period = 2. This can be rewritten as:

                                                p1 + (1 F )p1  1:
The competitive equilibrium in mutual fund shares will have the highest possible value for
p         p                                 p
 1 , but 2 will still be greater than 1 . As a result, only type-1 agents will sell out in period
t                                                               t
  = 1 and all type-2 agents will wait until period = 2 to consume. This arrangement is
                                                                            t
not susceptible to runs. Imagine a type-2 agent in period = 1 when other type-2 agents
are “running” (in this case, selling out early). Since there must always be a competitive
              p                  p                                  p
equilibrium, 1 falls, and 2 is always greater than 1 . As a result, our type-2 agent sees
                                                            t
no beneﬁt in joining the run, waits until period = 2 and consumes 2  1 . The key is          p   p
that the sequential service constraint has been replaced by a competitive market in shares.
                                                                    t
Unusually high demand for consumption in period = 1 is met by an unusually low price
                                 p                 p
for shares in that period, 1 . In all cases, 2  1 .    p
                  Variable       Deﬁnition
                   Hi            Cash loan or transfer to household .           i
                  M 0; M         The new stock of money, the old stock of money.


                                     Table 17.1: Notation for Chapter 17.




Exercises

Exercise 17.1 (Easy)
In the model of bank runs, explicitly calculate the interest rate on deposits held until period
t     r
  = 2, 2 , when the interest rate on deposits held until period = 1 is 1 .      t         r
Exercises                                                                                   207


Exercise 17.2 (Moderate)
For this problem, assume that there are only two types of potential borrowers: Safe (who
comprise of the population) and Risky (who comprise the remaining 1            of the popula-
tion). Banks cannot tell the difference between them, and with probability , a borrower is
safe and probability 1       a borrower is risky. Safe borrowers have access to safe projects,
                
which pay off S if they succeed and 0 if they fail. Safe projects succeed with probability
p                                                                      
  S . Risky borrowers have access to risky projects, which pay off R if they succeed and
                                                           p
zero if they fail. Risky projects succeed with probability R .

Risky and safe projects have the same expected payoff:

                                        pS S = pR R;
but the probability of success is lower for risky projects, so R p <p S , and the payoff from
succeeding is greater, so R  >  S . Both risky and safe projects have public failure, that is,
there is no need to audit agents who claim that their project failed.

To ﬁnance the projects borrowers need a unit of capital from a bank. The bank in turn
                                   x
announces a repayment amount in the event that the borrower’s project does not fail. If
the project fails, borrowers owe nothing (they declare bankruptcy). If the project succeeds,
                                            x
borrowers consume their output minus , if the project fails, borrowers consume zero.
Assume that borrowers are risk neutral so that their utility function is just their expected
consumption.

                                   r
There is a risk-free interest rate of that banks must pay to their depositors (thus they have
                        r
to realize at least 1 + in expected value on their loan to meet their deposit liability).

                                                         xrp          p
    1. Write down a bank’s balance sheet (in terms of , , S , and R ) assuming that, with
       probability the borrower is safe and with probability 1    the borrower is risky.
                                                                       x
    2. Assume that banks compete by offering the lowest value of that gives them non-
       negative proﬁts in expectation. Determine the equilibrium interest rate ? ( x r;
                                                                                   ) as a
                                   r
       function of the interest rate and the proportion of safe agents .
                                                                   V r
    3. Find the expected utility of a safe agent who borrows, S ( ), as a function of the
                    r       x
       interest rate when is given by ? (x r;  ). Repeat for a risky agent.
    4. Agents stop borrowing if the expected utility of being a borrower falls below zero.
       Show that if a safe agent decides to borrow, a risky agents will too. Find the critical
                    r
       interest rate ? at which safe agents stop borrowing. At interest rates greater than
                                       r r
       or equal to this critical value,  ? all safe agents leave the pool, so = 0. What
       happens to the equilibrium payment ?     x
Exercise 17.3 (Moderate)
Consider the model of costly audits again. Now suppose that intermediaries gain access to
a technology which allows them to extract more from each borrower (that is, for each value
                            x
of announced repayment and audit cost , suppose (          x;
                                                          ) shifts up). What happens to
208                                                                      Financial Intermediation


the demand schedule of capital? What happens to the supply schedule of capital? What
happens to the equilibrium interest rate? What happens to equilibrium economy-wide
output? Are agents made better off or worse off?

Exercise 17.4 (Moderate)
Yale University costs 1 dollars to attend. After graduation, Yalies (that is, graduates of Yale)
                                  w
either land good jobs paying or no job at all, paying nothing. The probability of landing
                             
the good job is where is hidden effort exerted by the Yalie. Yalies are born with wealth
a                                                     a<
   0, and those Yalies born with wealth 1 must have a loan of 1 to attend. Yalea
University will act as a lender to those students. Yale must borrow at the risk-free gross
interest rate r>  1 to ﬁnance the loans. Student borrowers who get the good job must
                                             x                      w
repay Yale University some amount out of their wages . Student borrowers who do
not land the good job pay nothing. All students have preferences over lifetime expected
               Ec
consumption ( ) and private labor effort of:          
                                      V (E (c); ) = E (c) w 2 :
                                                               2




Assume 0    < < 1.
                                   a > 1. Show that her optimal effort ? is .
    1. Start with a rich Yalie, with
    2. Now consider poor Yalies, with a < 1, who must borrow to ﬁnance their education.
       Calculate a borrower’s optimal effort  (x) as a function of x.
    3. Write down Yale University’s expected proﬁt on a loan to a student with wealth a < 1
       as a function of x, assuming that Yale University knows  (x) from Exercise (2).
    4. Assume that Yale University operates a “fair lending policy” in which borrowers of
               a
       wealth must repay an amount ( ) = (1      xa       r   a=
                                                      ) if they get the good job. What is
       “fair” about this lending policy? Given this policy and your answer to Exercise (2)
       above, calculate a borrower’s optimal effort as a function of their wealth. That is,
                        xa
       write down [ ( )], and call it ( ).a
    5. Show that, given Yale University’s “fair lending policy”, all Yalie borrowers exert less
       effort than rich Yalies, that is, for Yalies with wealth 0      a<             a <
                                                                        1, show that ( )      ?
                   a        ?
       and that ( = 1) = , where         ? is from Exercise (1) above.
    6. Finally, show that given its fair lending policy, that Yale loses money on student loans,
       and that the loss is increasing in loan size. Why does the fair lending policy cost Yale
       money?
  Variable        Deﬁnition
                  Proportion of population who are type-1 work-
                  ers.
       i          The audit cost of agent .    i
      c0          Consumption in the ﬁrst period of life (type-1
                  agents only).
      `0          Labor effort in the ﬁrst period of life (type-1
                  agents only).
      c1          Consumption in the second and last period of life
                  (both types of agent).
U 1(c0; `0; c1)   Preferences of type-1 agents.
   U 2(c1)        Preferences of type-2 agents (risk neutral).
      k           Capital input to type-2 agent’s project, can take
                                       k
                  on only two values, = 0 or = 1.  k
    yi; y                          i
                  Output of agent ’s project, or just output.
      "                                                       ;
                  Shock to output, distributed uniformly on [0 1].
      h           Maximum labor effort by a type-1 agent,   h<   1.
   s; S (r)       Savings of a type-1 agent, or of the representative
                  type-1 agent (aggregate supply of capital).
      r           Economy-wide equilibrium interest rate on capi-
                  tal.
    X; x          Repayment amount, = 1 + .X       x
  (x; ; ")       Revenue of bank on a loan (gross of the borrow-
                          r
                  ing cost ) to an agent with audit cost , when the
                                           x
                  repayment amount is and the production shock
                    "
                  is .
   (x; )         Expected revenue (gross of the borrowing cost )  r
                  on a loan to an agent with audit cost , when the
                                            x
                  repayment amount is . Expectation taken over
                  the production shock .   "
    ? ( )        The highest possible expected revenue (gross of
                                       r
                  the borrowing cost ) on a loan to an agent with
                  an audit cost of .
    x? ( )        The repayment amount that results in the highest
                  revenue to the bank on a loan to an agent of audit
                  cost .
      ?( )r       Largest value of the audit cost at which the bank
                  can make enough revenues to cover the cost of
                  borrowing, .r
   K d (r )       Aggregate demand for capital.


Table 17.2: Notation for the model of audit costs in Section 17.2
  Variable       Deﬁnition
      k          Capital input to productive technology, can take
                                       k
                 only two variables, = 0 or = 1.       k
      a          Wealth of agent.
      `          Private labor effort of agent.
      c          Consumption of agent.
      q          High output of technology (the low output is
                 zero).
                 Disutility of effort in agent’s preferences.
     r           Economy-wide risk-free rate on capital.
    X            Repayment amount.
   a?(r)         Threshold credit rationing wealth.


Table 17.3: Notation for model with moral hazard in Section 17.3




  Variable        Deﬁnition
     F            Technology parameter: growth of asset between
                          t        t
                  periods = 1 and = 2.
U (c1; c2 ; )    Utility function over consumption in period = 1,         t
                  t = 2 and shock term .   
    ;                       
                  Shock term: = 1 means that the agent is urgent
                  to consume (probability ).       
     Q            Preference parameter: marginal utility of type-2
                  agents,Q<     1.
   r1 ; r2        Interest rate promised by the bank on deposits
                                   t           r
                  held until period = 1 ( 1 ) or period = 2 ( 2 ). t   r
     ?
      cij         Consumption by agent to type in period . i           j
  c11 ; c22?      Optimal consumption in period = 1 by type-   t
                  1 agents and the optimal consumption in period
                  t = 2 by type-2 agents.


  Table 17.4: Notation for model of bank runs in Section 17.4
Chapter 18

Fiscal and Monetary Policy

In Chapter 14 we described how the government changes its outstanding debt over time
so as to match its revenues and expenditures. In that framework, there was nothing in-
trinsically harmful about government debt. Now we turn our attention to the inﬂationary
effects of persistent government budget deﬁcits. This will give us a theory about the inter-
play between ﬁscal and monetary policies.

Imagine a government comprised of two competing authorities: a ﬁscal authority (in the
U.S., the Congress and the President) and a monetary authority (in the U.S., the Federal
Reserve System). The ﬁscal authority wants to ﬁnance government spending, while the
monetary authority wants to keep inﬂation low. But inﬂation produces revenue for the
government through a process known as seigniorage. If the monetary authority is dominant,
it simply announces a sequence of inﬂation rates, which in turn implies a sequence of
seigniorage revenues, and the ﬁscal authority takes this as given when making spending
decisions. Completely dominant central banks are, however, extremely rare. Even the U.S.
Federal Reserve System is statutorily a creature of the Congress and the Executive, and
must, by law, balance the twin goals of ﬁghting inﬂation and targeting full employment.

The case of a central bank (i.e., a monetary authority) that is not fully dominant is much
more interesting. Note that this does not mean that the ﬁscal authority controls the money
supply absolutely, merely that the ﬁscal authority does not have to credibly commit to a
sequence of taxes sufﬁcient to ﬁnance, in present value, its spending. In particular, we
are going to assume that there is some limit on the debt-to-GDP ratio. That is, investors
will only accept government debt up to some ceiling, deﬁned in proportion to output.
The monetary authority will control the money supply until this ceiling is reached, and
thereafter it will fully accommodate government spending with seignorage revenue. This
is the fashion in which government deﬁcits are inﬂationary.

After presenting the theory, we will discuss the evidence. In a study of post-WWI hyperin-
212                                                                  Fiscal and Monetary Policy


ﬂations in Germany, Austria, Hungary and Poland titled “The Ends of Four Big Inﬂations”,
Thomas Sargent illustrates this effect clearly. More recent monetary disturbances in some
the successor states of the old Soviet empire can also be traced to persistent government
budget deﬁcits. This will provide us with a practical guide on how to end hyperinﬂations.



18.1 Are Government Budget Deﬁcits Inﬂationary?

The model for this section is taken from a paper by Thomas Sargent and Neil Wallace,
“Some Unpleasant Monetarist Arithmetic”. The interested reader is advised to read the
original paper, since it doesn’t require very much math and is, despite the title, actually
quite pleasant.



Government Budget Constraint

We will consider the problem of a government which must cover a sequence of real core
           D
deﬁcits f t g1
             t=0 :

                             Dt = Gt T t; for all t = 0; 1; : : : ; 1;
      G
where t is the real value of government expenditures and T t is the real value of govern-
                         t
ment revenues in period . Notice that interest payments on the debt are not included in
Dt (see Chapter 14 for more on the government budget constraint).
                                      B
The government has some amount tg 1 of real debt outstanding at the beginning of each
       t                                                                    rB
period . The government must pay its creditors a real amount (1 + ) tg 1 in period .         t
Hence the total real excess spending of the government on goods and services and debt
service, net of tax revenue, is:

                          borrowing demand =        Dt + (1 + r)Btg 1:
The government will ﬁnance this in two ways: (1) By issuing more bonds, dated end-
           t                   B
of-period (call these bonds tg ) and (2) By printing money and realizing the seigniorage
revenue (more on what that is in a second). Hence government borrowing is:

                          borrowing supply =       Btg + Mt PM
                                                             t
                                                               t 1
                                                                   :
      M
Here t is the end-of-period quantity of pieces of paper with the words “Federal Reserve
Note” and “In God We Trust” printed on them, also known as ﬁat currency. Take t to       M
be strictly high-powered money, or the monetary base, which is under the control of the
government.
18.1 Are Government Budget Deﬁcits Inﬂationary?                                       213


For the government’s books to balance it must borrow as much as it needs to, so:

(18.1)          Dt + (1 + r)Btg 1 = Btg + Mt PMt 1 ; for all t = 0; 1; : : : ; 1:
                                                 t
Another way to write this is:

             Dt + rBtg 1 = (Btg Btg 1) + Mt PM
                                             t
                                               t 1
                                                   ; for all t = 0; 1; : : : ; 1:
This form says that the government’s real deﬁcit plus the interest on the debt may be paid
                       B
for by net new bonds ( tg    Bg
                              t 1 ) or seigniorage.


Seigniorage

The government has a monopoly on issuing pieces of paper with the words “Federal Re-
serve Note” written them. People want this stuff for transactions purposes, so they hold
it even though it pays zero interest. As a result, the government can print more of the
stuff and trade it for goods and services. We will not model the precise way in which the
government does this. The effectiveness of this practice depends on how the general price
     P                              M
level t responds to an increase in t .

Although seigniorage revenue in developed countries like the United States is currently
very low, developing countries or countries in turmoil use it heavily. Internal bond mar-
kets and tax collection systems are often the ﬁrst instruments of state power to vanish in
turbulent times. Governments also often ﬁnd direct taxation to be unpalatable for domestic
political reasons, but are unable to sell bonds on international markets.

Consider the case of Zaire, an African country which is now called the Democratic Republic
of the Congo. This government practiced a very bald form of seigniorage in which it would
introduce a new denomination of the currency (the zaire), print up a bunch of notes and
pack some of the print run into suitcases which were then distributed among government
ministers. These ministers would then use the notes to purchase foreign currency on the
black market as well as domestic goods and services. In the waning days of the rule of
former president Mobuto Sese Seko, the government introduced the 500 zaire note and the
1000 zaire note. These were used, in part, to ﬁnance the president’s cancer treatments in
France. The population derisively termed the notes “prostates” and refused to accept them
as payment in any transaction. The government’s seigniorage revenue fell to zero and it
succumbed to the rebels shortly thereafter.

More formally, the value of the seigniorage revenue in our model is the real value of net
new notes:
                                              Mt Mt 1 :
                                  seigniorage =
                                                 Pt
Notice that we will have to take a stand on how Pt varies with Mt to fully determine the
seigniorage revenue.
214                                                                 Fiscal and Monetary Policy


Model Assumptions

To make this model work, we will have to specify a rule for output, population growth,
how the price level is determined and what limits there are on borrowing. I list all of the
model’s assumptions here for convenience:

                          y                 y                          N
   1. Output per capita t is constant and t = 1, but population t grows at the constant
          n     N         nN              N >
      rate , so t = (1 + ) t 1, where 0 0 is given. So total GDP each period t = t t   Y yN
      is just equal to population.
                                                                   r       r
   2. The real interest rate on government debt is constant at t = , and the government
      never defaults on its debt. This includes default by unexpected inﬂation when bonds
      are denominated in dollars. Thus we are dealing with inﬂation-indexed bonds. We
      also make the very important assumption that       r>n. Without this assumption, most
      of the “arithmetic” is not so “unpleasant”.
   3. A stark monetarist Quantity Theory of Money relation with a constant velocity,        v = 1:
      (18.2)                              PtYt = vMt:
      Combine this with the deﬁnition of Yt in Assumption (1) above to ﬁnd the price level
      in period t, Pt , is:

                                           Pt = MNt :
                                                  t


   4. There is an upper bound on per-capita bond holdings by the public of b̄. That is,
      Btg =Nt  b̄.
In addition, to make life easier, we will specify that the government’s ﬁscal policy, which
                           D
is a sequence of deﬁcits f t g1                                                d
                              t=0 , is simply a constant per-capita deﬁcit of . Thus:
                                    Dt = d; for all t = 0; 1; : : : ; 1:
                                    Nt
Deﬁne bt to be the level of per-capita bond-holdings bgt  Btg =Nt . Assumption 4 states that
           g
bgt  b̄ for some   b̄. Notice that with the assumption that the constant per-capita output level
is yt = 1, bgt is also the debt-to-GDP ratio. Also, Dt =Nt becomes the deﬁcit-to-GDP ratio.


Monetary Policy

The monetary authority (in the U.S., the Fed) produces a sequence of money stocks f t g1  M  t=0 .
These then feed through the quantity theory of money relation (18.2) to produce a sequence
of inﬂation rates. A monetary policy will be a choice for the growth rate of money. If the stock
18.1 Are Government Budget Deﬁcits Inﬂationary?                                               215


of debt is growing, eventually the bond ceiling will be reached and the Fed will no longer
be able to pick an inﬂation rate, it will be forced to provide enough seigniorage revenue
to cover the government’s reported deﬁcit. We call this the catastrophe. The catastrophe
                  T                                T
happens at date . The catastrophe date is itself as a function of choice made by the
government.

Given money supply growth, the gross inﬂation rate in period is:              t
                               Pt Mt Nt 1 1 Mt
                              Pt 1 = Nt Mt 1 = 1 + n Mt 1 :
The net inﬂation rate is deﬁned as Pt =Pt 1 1. For simplicity, assume (with Sargent and
Wallace) that the Fed picks a constant growth rate for money, , in the periods before the
catastrophe. Thus:

                                 Mt
                                 Mt 1 = 1 + ; for all t = 0; 1; : : : ; T:
This implies that inﬂation is:

                                  Pt = 1 +  ; for all t = 0; 1; : : : ; T:
                                 Pt 1 1 + n
For >n  , the net inﬂation rate will be strictly positive. If the Fed dislikes inﬂation, it will
                                                    M =M
seek to minimize the growth rate of money t t 1 by picking a low . Such a policy will 
                                                                       T
decrease seigniorage revenue in the short run (until period ), forcing the ﬁscal authority
to rely more on bond ﬁnance of deﬁcits, bringing closer the catastrophe date at which     T
b    b̄                                                          T
 g = and no more bonds may be sold. From period on, the money supply expands to
 T
produce enough revenue to satisfy the government budget constraint.



Analysis

Our goal is to determine the time path of per-capita bond holdings gt and to determineb
                            b̄
when (if ever) the limit of is reached. Table (18.1) lists all of the variables and their mean-
ings. In addition, let’s list again all of the equations we know about this model:
                                                                                       
                                             D B   g          rB
                                                           (1 + ) tg 1 +
                                                                              M  t Mt 1
                                                                                          :
(Gov. Budget Constraint)                        t= t
                                                                                   Pt
(Fiscal Policy Rule)                      Dt=Nt = d; for all t = 0; 1; : : :; 1:
(Monetary Policy Rule)                       Mt = (1 + )Mt 1; t = 0; 1; : : : ; T:
(Population Growth Rate)                     Nt = (1 + n)Nt 1:
(Quantity Theory of Money)                   Pt = Mt=Nt:
216                                                                                     Fiscal and Monetary Policy


Begin by dividing the government budget constraint (18.1) by                            Nt on both sides to produce:
                Dt = Btg              r BN          Mt Mt 1 ; for all t = 0; 1; : : : ; 1:
                                       g
                                (1 + ) t 1 +
                                             1
                Nt Nt                    t    t   N    Pt
Now, we use the fact that 1        =Pt = Nt=Mt to write this as:
                 d = bgt               Bg Nt 1 + 1 (M M ) Nt
                               (1 + r) t 1
                                      Nt 1 Nt Nt t t 1 Mt
                                1+r g       Mt Mt 1
                     b
                   = gt
                               1+n
                                     b t 1+
                                               Mt 
                                            
                                1+r g
                     b
                   = gt              b + 1 MMt t 1 ; for all t = 0; 1; : : : ; 1:
                               1+n t 1

            b
Solving for gt yields:
                                                
               b           r bg + d       M
                                           Mt ; for all t = 0; 1; : : : ; 1:
                 g = 1+                      t 1
(18.3)           t 1+      nt1        1

Notice that the evolution of per-capita borrowing bgt determined in equation (18.3) holds in
all periods, including those after the catastrophe period T . Before period T the monetary
policy speciﬁes a growth rate of money, Mt =Mt 1 = 1 + , so seigniorage is constant and
potentially low. The remaining borrowing is done by issuing bonds. After the catastrophe
date T , monetary policy must produce enough seigniorage revenue to completely meet the
government’s borrowing needs, and per-capita bonds are constant at bgT = bgT +1 =    = b̄.

After the catastrophe the evolution of the money supply is determined by the post catas-
trophe government budget constraint, so we replace gt with :              b        b̄
                                                     
                           b̄ = 11 ++ nr b̄ + d                  Mt 1  ; for all t  T + 1:
                                                     1
                                                                 Mt
We manipulate this equation to solve for the growth rate of money:

                     Mt =
                    Mt 1 1 d r1+nn  b̄ ; for all t  T + 1:
                                   1
(18.4)

Notice that after period T , money supply growth is increasing in the terms d and b̄. Not
only does the Fed have to pay for the deﬁcit d entirely out of seigniorage, it also has to pay
the carrying costs on the public debt b̄.

Thus the money stock must evolve as:
                           (
                 Mt             1+
                                
                                     ;                      
                                                                        t = 1; : : : ; T
(18.5)
                Mt 1 =           1     d b̄ 1+1+nr       1
                                                                  1
                                                                      ; t = T + 1; T + 2; : : : ; 1:
18.1 Are Government Budget Deﬁcits Inﬂationary?                                                                  217


Equation (18.5) gives us the evolution of the money supply in all periods, including those
after the catastrophe. Notice that the money supply growth rate after is not affected by        T
                 T
the value of . In other words, after the catastrophe hits, the inﬂation rate will be the same,
no matter when it hit.

How much seigniorage revenue does the government raise, given , each period prior to     
the catastrophe? That is, what happens when we substitute in the Fed’s monetary policy
into equation (18.3)? From equation (18.3):
                                       
            bgt = 11 ++ nr bgt 1 + d        Mt 1  ; for all t = 1; 2; : : : ; 1:
                                        1
                                             Mt
But in the periods before the catastrophe, money growth is simply , so:                 
                                                    
            bg = 1+    r bg + d              1               1+      r bg + d     ; for all: t = 1; 2; : : : ; T:
(18.6)       t 1+      nt1              1
                                            1+          =
                                                             1+      nt1        1+
                                                             T
Notice this interesting result: Before period , the government takes as seigniorage a frac-
       =       
tion (1 + ) of GDP. Any remaining portion of the per-capita deﬁcit must be raised by            d
net new bonds.

                              b                                  b
Finally, let’s calculate gt without reference to gt 1 . We can do this with recursive substitu-
tion from equation (18.6), using the assumption that g0 = 0:             b
                bg1 = 11 ++ nr bg0 + d 1 +  = d 1 +  :
                                                                  
                       1+r g                           1+r        
                b2 = 1 + n b 1 + d 1 +  = 1 + 1 + n d 1 +  :
                 g

                                               "                2 # 
                  g    1+r g                           1+r
                b3 = 1 + n b2 + d 1 +  = 1 + 1 + n + 1 + n    1+r
                                                                          d                       :
                                                                                                1+

And so on. The pattern should be clear from these ﬁrst terms. In general:
                                  
                          bgt = d        Xt 
                                                1+r
                                                     i 1
                                                          ; for all t = 0; : : : ; T:
                                       1+
                                           i=1 1 + n
(18.7)

Recall that     r > n, hence the summation term is explosive.
Equation (18.7) neatly captures the Fed’s dilemma in this model. By setting a low value
   
for , the Fed trades low inﬂation today for an earlier onset of the hyperinﬂationary catas-
trophe. On the other hand, by choosing a relatively high value for the Fed suffers high     
inﬂation today but staves off the catastrophe point. Indeed, if:
                                                           d;
                                                     1+   
then there will be no catastrophe.
218                                                                              Fiscal and Monetary Policy


Determining The Catastrophe Date T

Given the time path for debt in equation (18.7), we can determine roughly in which period
T  the catastrophe hits. I say “roughly” because to keep the algebra neat we are going to
                                                                        T   b
assume that, at the monetary policy , end-of-period debt gT is perfectly equal to . You                   b̄
                                                               b                           b̄
can see that it is easy to imagine cases in which gT is slightly less than , in which case in
         T
period + 1 a residual amount of borrowing is allowed. However if is large, this effect T
is unimportant. Thus at the end of period :       T
                                
                                 d      XT 
                                               1+r
                                                    i 1
                                                         = b̄:
                                      1+
                                          i=1 1 + n

For notational convenience, let       (1 + r)=(1 + n). Thus:
                                          TX1
                                                  j=       b̄ :
                                          j =0            d       1+


Recall that the sum on the left hand side of this equation is equal to (1                         =
                                                                                                T ) (1   ). Thus:

                                     1        T           b̄          J;
                                      1
                                                  =
                                                      d        
                                                               1+

where I have introduced    J to keep the notation down. Manipulation produces:
                                       T = 1 (1      )J:

Taking logarithms of both sides produces:

                                 T ln( ) = ln (1 (1 )J ) ; so:
(18.8)                         T (; b̄) = ln (1 ln((1 ) )J ) ; where:
                                                1+r
                                             =
                                                1+n
                                                       ; and:
                                             J = d b̄  :
                                                           1+


Notice that   T is increasing in  and b̄. Indeed, for T to be ﬁnite, we must have:
                                                < d;
                                             1+

so that the government must resort to bond ﬁnancing.
18.1 Are Government Budget Deﬁcits Inﬂationary?                                                                                                               219


Some Examples

                                                                                       b
In Figure (18.1) we present the time path of debt, gt , under two different values of , 1 =                                                              
 :                           :                                   n         : ;r
0 03 and 2 = 0 10. In this model = 0 02 = 0 05 = 0 10 and = 1 5. That is, the              : ;d            :             b̄        :
government is trying to ﬁnance a persistent core deﬁcit of 10% of GDP and the maximum
value of total debt is 150% of GDP. The government does not have to pay a very high real
interest rate on its debt, but output is growing at the relatively low rate of 2% a year. With
                                                         :
the tight monetary policy ( 1 = 0 03), the government hits the catastrophe 16 years into the
                                                                                          :
policy, while with the loose monetary policy ( 2 = 0 10), the catastrophe occurs 61 years in
the future.
           Time paths of bonds: bt when θ1=0.03, θ2=0.10                                            Time paths of inflation: π when θ =0.03, θ =0.10
                                                                                                                                        1            2
     1.5
                                                                                       0.16

                                                                                       0.14

                                                                                       0.12
      1
                                                                                           0.1
bt




                                                                                       t




                                                                                       0.08
                                                                                   π




                                                                                       0.06
     0.5

                                                                                       0.04

                                                                                       0.02

      0                                                                                        0
       0    10       20           30   40   50       60           70   80                       0    10        20   30        40   50       60           70    80
                                       t                                                                                       t


Figure 18.1: Evolution of the stock of per-                                        Figure 18.2: Evolution of the inﬂation rate
capita debt holdings t under two mone- b                                            t under two monetary policies: the solid
tary policies: the solid line under the tight                                      line under the tight money ( = 0 03) pol-                    :
                         :
money ( = 0 03) policy and the dotted                                              icy and the dotted line under the loose
line under the loose money ( = 0 10) pol-                    :                                      
                                                                                   money ( = 0 10) policy.     :
icy.


In Figure (18.2) we plot the inﬂation rates over time associated with the two monetary
                                                                       
policies. Notice that the inﬂation rate t does not quite equal the growth rate of money
since:
                                             Pt              Mt
                                                              
                                           Pt 1 = 1 + n Mt 1 :
                                                     1+ t 
                                                       1


Before the catastrophe date T , inﬂation is constant at  where:
                                   1+
                        1 +  =         ; for all t = 0; 1; : : : ; T:; so:
                                   1+n
                             = 11 ++ n 1 = 1 + nn :
220                                                                                Fiscal and Monetary Policy


                                                 d
Note that  will not vary with the deﬁcit or the maximum debt load . On the other               b̄
                               T
hand, the catastrophe date and the post-catastrophe inﬂation rate will vary with and                     d
b̄                                      d; b̄
 . After the catastrophe, inﬂation T ( ) will not vary with the pre-catastrophe monetary
                             d; b̄
policy . We can calculate T ( ) from the evolution of the money supply, equation (18.5).
Thus:

                  d; b̄) = 1 +1 n 1 d b̄1 1+r
             1 + T(
                                                      1
                                                              ;
                                                           so:
                                            1+n

                 T (d; b̄) = 1 + n 1 d b̄ 1+r
                                1         1
                                                          
                                                            rb̄ + d n(b̄ + 1 d) :
(18.9)
                                            1+n       1         d)(1 + n) b̄(r n)
                                                                  1=
                                                                          (1

The tight monetary policy is associated with very low inﬂation initially,  = 0:0098 but,           1
as noted above, the catastrophe happens relatively early. The loose monetary policy is
associated with a relatively high inﬂation rate initially,  = 0:0784 but the catastrophe is
staved off for over 60 years. After the catastrophe the inﬂation rate is T = 0:1455, or about
                                                                               2



twice the rate with the loose monetary policy.


Application: Optimal Inﬂationary Policies

In this section we consider the trade-off between two monetary policies: (1) A policy of
high inﬂation in which the catastrophe never occurs and (2) A low-inﬂation policy which
brings forward the catastrophe date.

Notice from equation (18.7) that if the government sets                    = ? , where:
                                            ?  1 d d ;
then each period’s seigniorage revenue is:

                                                ? = d:
                                              1 + ?
                                                                  
That is, with the money supply growth rule set to ? as deﬁned above, the government
raises enough seigniorage revenue to completely ﬁnance the real deﬁcit each period. As a
result the government never resorts to bond ﬁnance, so gt = 0 all = 0 1 2 b          t
                                                                              1 and the     ; ; ;::: ;
                                         
catastrophe never happens. When = ? inﬂation satisﬁes:

                                       ? = 1 + nn = 1
                                              ?
                                                                          ;
where =      d n nd                      d n=         n               
                  + . Notice that if = (1 + ) then ? = 0. That is, the government can
pay for the real deﬁcit entirely with seigniorage revenue and have zero inﬂation.

On the other hand, for any monetary policy            <
                                                   ? , the government must resort to per-
sistent debt ﬁnancing and eventually face the catastrophe. We know from equation (18.9)
18.2 The Ends of Four Big Inﬂations                                                            221


above that after the catastrophe, inﬂation is T (  d; b̄). By examination, we see that:
                                          T (d; b̄) > ? :
                                      T
Intuitively, by waiting until period to begin ﬁnancing excess government spending by
printing money the monetary authority has allowed the ﬁscal authority to borrow up to its
limit. The Fed then has to repay creditors out of seigniorage as well.

                                                                                          
If the Fed dislikes inﬂation, it has an unpleasant choice: suffer inﬂation of ? now or T at
                  T
some future date . As you can see, the Fed’s choice of which policy to pursue depends in
                   T
large part on how varies with .  
               Variable    Deﬁnition
                 Gt        Real government spending at           t
                  Tt       Real government tax revenues at                t
                 Dt        Real government core deﬁcit at             t
                  Yt                 tY N
                           GDP at , t = t
                 Nt        Population att
                  n        Constant population growth rate
                  r        Constant real net return on debt,               r>n
                 Mt        end-of-period stock of money at                t
                 Pt        exchange rate of money for goods at               t
                 Btg       real par value of outstanding end-of-period debt
                  bgt                         b B =N
                           per-capita debt, gt = tg t
                   b̄      maximum possible value of gt      b
                 Bg 1                             B
                           initial stock of debt g 1 = 0
                  T        “catastrophe date”–when gT =  b           b̄
                          Money supply growth rate before catastrophe
                  d        constant per-capita deﬁcit (ﬁscal policy)


Table 18.1: Notation for Chapter 18. Note that, with the assumption that t =     Y Nt, variables
denoted as per-capita are also expressed as fractions of GDP.



18.2 The Ends of Four Big Inﬂations

The most dramatic evidence of the validity of the Sargent-Wallace argument comes
from the post-WWI hyperinﬂations in Germany and the successor states to the Austro-
Hungarian Empire in a paper by Sargent, “The Ends of Four Big Inﬂations”. What makes
that case so special is that, not only was there a deﬁcit-driven hyperinﬂation, once the ﬁscal
222                                                             Fiscal and Monetary Policy


authorities had made credible commitments to back all government debt by tax revenues,
the inﬂation stopped (even though the printing presses were still running). These histories
are valuable also because the problems facing the four nations in question bear much in
common with those facing some of the successor states of the old Soviet empire.

The post-war central European inﬂations of 1919-1924 were a new, and deeply unpleas-
ant, experience for its citizens. It is a commonplace to ascribe modern Germany’s strong
commitment to low inﬂation to a national horror of repeating those days. Yet it was not
the abstract experience of seeing prices (and wages) climb to 1012 times their pre-war level
that was so traumatic, nor was it the mild “shoeleather cost” studied in Chapters 4 and 8.
As a result of the inﬂation, there were tremendous social dislocations as creditors were
impoverished, as enterprises failed, as speculation ﬂourished and as households hoarded
illiquid assets rather than trading them for a currency whose value was essentially un-
known. These were new phenomena at the time, but unfortunately since then they have
been consistent hallmarks of monetary crises to the present day.

Sargent identiﬁes four characteristics common to the hyperinﬂationary experiences in Po-
land, Hungary, Austria and Germany:


  1. All four countries ran very large budget deﬁcits.
  2. All four countries took very similar, very dramatic, monetary and ﬁscal steps to end
     the hyperinﬂations.
  3. In all cases, the inﬂation stopped very quickly.
  4. After the inﬂationary episodes, there was a large and persistent rise in the level of
     “high-powered” money.

Governments ran deﬁcits because, in the aftermath of the war, they made payments to the
large numbers of unemployed workers, because state monopolies (such as railroads) kept
prices artiﬁcially low and lost money, because governments subsidized basic necessities
such as food and housing, and, in certain cases, because they had been ordered to pay war
reparations of unknown amounts.

Sargent draws a clear distinction between government actions and government regimes. An
action takes the form of a one-period decision of the government (cutting the subsidy on
heating oil for one month, for example), with no credible assurance that the action will
be repeated. In contrast a regime is a credible commitment to a sequence of actions, for
example selling off the state railroad or making the central bank independent.

The solution to the hyperinﬂations, in all cases, was a switch in regime: governments aban-
doned deﬁcits and seigniorage ﬁnancing in favor of balanced budgets and independent
central banks. In many cases, at least part of the credibility of the new regimes derived
from international obligations. For example, in August of 1922 Austria signed agreements
with the League of Nations binding her to ﬁscal balance and monetary stability.
Exercises                                                                                  223


In Germany, where the inﬂation was most dramatic, the largest single ﬁscal liability was the
bill for war reparations. In the original treaty negotiations at Versailles, the Great Powers
had been unable to ﬁx a ﬁrm value on Germany’s war reparations. In theory all of Germany
was mortgaged for reparations, and indeed, in 1923 France occupied the Ruhr to drive
home this point. In October of that year Germany issued a new currency, the rentenmark,
whose initial value was 1012 reichsmarks.

Yet in 1924 the catastrophic German inﬂation stopped. Sargent reports several deliberate,
permanent actions that constituted a regime shift. Among these, the government ﬁred
25% of its workforce and cut employment in the state railroad system by about 180,000.
Germany also negotiated a ﬁxed, reasonable, value for its reparations bill with the treaty
powers.

In all of these inﬂations, at some point the central banks were called upon to purchase
almost all of the net new national debt issues. A common reform was to prohibit the cen-
tral bank from purchasing government debt. This was a statutory commitment to ﬁscal
discipline, and a good example of the difference between regimes and actions.

Once households were assured that the hyperinﬂationary regime was over, their holdings
of currency rebounded remarkably. Thus even after the inﬂations had ended, governments
continued to issue large quantities of new base money. This money was absorbed by house-
holds which had economized dramatically on their currency holdings during the hyperin-
ﬂation.

The parallel to present-day countries such as Ukraine and Russia is clear. These too are
new states without a history to guide investors, with bloated public sectors and inefﬁcient
systems of tax collection. In contrast with the earlier examples, they are committed, as
much as possible, to ﬁscal discipline, although in some cases this required defaulting on
some of the government’s obligations (for example, Russian government employees must
often wait months for paychecks). International organizations such as the IMF and for-
eign governments, just as in the 1920s, have acted as commitment devices to prevent the
Russian government from using the printing press to meet its obligations. However, until
either government spending obligations diminish or tax collections increase, there will be
a persistent possibility of hyperinﬂation, with its attendant social dislocations.




Exercises

Exercise 18.1 (Easy)
The answers to these exercises can be found in Friedman and Schwartz (1963) A Monetary
History of the United States, Chapter 7, entitled, “The Great Contraction”; the Barro textbook
Chapters 4 and 18 but especially Chapters 7, 8, and 17; the article by Richard D. Porter, “The
Location of U.S. Currency: How Much is Abroad?”; and Sargent Rational Expectations and
Inﬂation (either the 1st or 2nd edition), Chapter 3, entitled “The Ends of Four Big Inﬂations”,
224                                                              Fiscal and Monetary Policy


and Chapter 5, entitled, “Some Unpleasant Monetarist Arithmetic”.


    1. What was the path of the money stock in the U.S. from January 1929 to March 1933?
       How did household’s holdings of currency change over the same period?
    2. What was the path of real income in the U.S. from January 1929 to March 1933? How
       did prices change over the same period?
    3. In the period 1948-1991 have American real interest rates ever been negative? In the
       same period, has the U.S. inﬂation rate ever been negative? If so, when?
    4. What is the evidence that inﬂation, in Milton Friedman’s words, “is always and ev-
       erywhere a monetary phenomenon”? In the long run? In the short run?
    5. If you take the population of the U.S. to be 260 millions, roughly how many dollars
       of currency were in circulation for every U.S. citizen at the end of 1995? How much
       currency are you carrying right now? How do you account for this discrepancy?
    6. Why do people hold currency and keep part of their wealth in low interest bearing
       accounts (like the Hyde Park Bank’s zero interest checking account)?
    7. Explain how a rational expectations view of agent’s behavior (as deﬁned by Sargent)
       can explain why inﬂation seems to have momentum, while in fact it does not.
    8. What is seignorage? How much money did the U.S. raise via seignorage in 1991?
    9. What is the Quantity Theory of Money? Explain the sense in which it is “just” an
       accounting identity.
 10. What is a gold standard? True or false: Under a gold standard the quantity of money
     is ﬁxed.
Exercise 18.2 (Easy)
Evaluate this statement: Government austerity programs cause civil unrest.

Exercise 18.3 (Moderate)
                t                                            T
In each period the government raises real tax revenue of t and spends (in real terms)
G           D
  t . Let t  t G     T                             t
                      t be the real deﬁcit at time . At the suggestion of a revered elder
whose initials are M.F., the government is allowed to ﬁnance this deﬁcit only by issuing
ﬁat currency and obtaining the seignorage revenue. The government’s budget constraint
is thus:

                                     Dt = Mt PMt 1 ;
                                                t
       D                                  tM                            t     P
where t is the real government deﬁcit at , t is the stock of money at and t is the price
        t
level at . Prices are related to the money supply by the Quantity Theory of Money relation
                          v
with a constant velocity = 1:

                                        Pt Yt = Mt:
Exercises                                                                                  225


        Y           Y Nt, where Nt is population at t, and evolves according to:
Output t satisﬁes t =

                                    Nt = (1 + n)Nt 1;
with N0 = 1. The government runs a constant per capita real deﬁcit of d, so Dt = dNt for
all t. Answer the following questions:

  1. How must  Mt evolve given Mt 1 and d?
  2. For what value of d is the inﬂation rate zero? That is, for what value of d will Pt =
     Pt 1?
  3. A reasonable estimate for n is about 0.03. At this value, how large a deﬁcit, expressed
     as a fraction of GDP, can the government cover by printing money and still not cause
     inﬂation?
  4. Assume    d = 0. What happens to prices?
Exercise 18.4 (Fun)
Through a map-making error in 1992 the Absolutely Autonomous People’s Republic of
Kolyastan (hereafter known as Kolyastan) was created out of the more rubbishy bits of
neighboring successor states to the Soviet Union. The Kolyastani central bank is run part-
time by a popular local weatherman on the state-run television station. The market for
Kolyastan’s chief export, really really big statues of Lenin, seems to have collapsed. Most
of its citizens continue to work in the enormous state-run Lenin Memorial Lenin Memo-
rial factory, which is currently producing no revenue at all. The government subsidizes
consumption of bread and kirghiz light (the local liquor) by paying merchants to keep their
prices artiﬁcially low. The Kolyastani currency, the neoruble, is made up of old Soviet
rubles with the top left corner cut off. Inﬂation is currently running at 400% per month.
Although the Kolyastani government claims to be ﬁnancing most of its big budget deﬁcits
through bond sales, most of these bond sales, it turns out, are to the central bank. In desper-
ation the Kolyastani government have turned to you, a University of Chicago undergrad-
uate, for economic advice. Brieﬂy outline your plan for Kolyastan’s recovery. Be speciﬁc.
How can the Kolyastani people be certain that the reforms proposed by the government
will be maintained after you graduate?
Chapter 19

Optimal Monetary Policy

As we have discussed, expansionary monetary policies include decreases in the Fed funds
rate and unexpected growth in the money supply. In the U.S., such expansionary mone-
tary policies have tended to produce real expansions in output and increases in inﬂation.
Conversely, contractionary monetary policies have tended to produce real contractions in
output and decreases in inﬂation. In Chapter 18 Barro claims that these effects have been
quite moderate, but recent empirical work lends support to the opposite view, that mone-
tary shocks can have large effects on real variables in the short run.

Everyone agrees that expansionary monetary policies tend to lead to increases in inﬂation,
while contractionary policies produce decreases in inﬂation. At this broad level, monetary
policy would appear to be a matter of trading off inﬂation and output. Since unemploy-
ment tends to decrease as output increases, this is often cast a choice between inﬂation and
unemployment. The empirical relationship between the two is called the Phillips curve.

In the U.S., as in most countries, monetary policy is under the control of the government.
This immediately raises the question of how best to conduct monetary policy. As we shall
see, this not so much a question of when and how to time expansions and contractions of
the money supply, as economists used to think, as it is a question of what the private sector
predicts the government will do and how the government can inﬂuence those predictions.

Before we can think fruitfully about monetary policy, we will have to have a reasonable
model of how monetary shocks can inﬂuence the real economy. Our model will be a sim-
pliﬁcation of the seminal paper by Robert E. Lucas, Jr, “Expectations and the Neutrality
of Money”. In that model, the private sector is divided into different industries (called
“islands”) which observe only the price for their own product. This price is made up of
a general price level (unobserved) and an industry-speciﬁc shock (also unobserved). The
private sector has some forecast about inﬂation (never mind for the moment its origin) and
uses this to derive an estimate of the industry speciﬁc shock it faces. If the estimated shock
228                                                               Optimal Monetary Policy


is high, the private sector increases production. If it is low, the private sector decreases
production. The government chooses an inﬂation rate. An unexpected monetary expan-
sion will produce a temporary increase in output. Thus Lucas’s model highlights the role
of expectations in the conduct of monetary policy.

In Lucas’s model, only unanticipated changes in the price level have real effects. If a mon-
etary expansion is completely expected, it has no real effects. This points to something
quite important in the real conduct of monetary policy: only surprises matter. Moreover,
the private sector does not enjoy being surprised, even if the monetary surprise produced
a temporary boom. An older tradition in macroeconomics holds that governments should
try to manipulate the money supply to cushion supply and demand disruptions. The cen-
tral lesson from Lucas’s research is that governments should instead strive to minimize the
uncertainty surrounding monetary policy.

We then move away from the speciﬁc form of the Phillips curve derived from Lucas’s
model and start using a simple generalization in which inﬂation, inﬂationary expectations
and unemployment are all related by a very simple formula. The government will have
some preferences (and thus indifference curves) over unemployment and inﬂation (both
will be bad), and monetary policy, if we ignore how expectations are formed, can be seen
as a simple choice of unemployment and inﬂation.

Once we begin modeling the formation of expectations, we will see that the ability of the
government to commit credibly to a particular inﬂationary path is critical. We will model
explicitly a two-person game between the private sector and the government. With a so-
called commitment device, the government will be able to play the Ramsey strategy and
realize the Ramsey outcome. Recall the Ramsey optimal tax problem from Chapter 14. In that
chapter we assumed that the government could commit to a particular tax sequence, hence
the term “Ramsey”. We did not consider what would happen if the government could not
commit to a particular tax sequence. In this chapter we will see that without a commitment
device, the government and the private sector will play Nash strategies and achieve the Nash
outcome. The fundamental result of this chapter is that Ramsey is better than Nash. Both the
government and the private sector are better off in the Ramsey outcome than in the Nash
outcome. Indeed, under certain circumstances, the Nash outcome involves (temporarily)
high inﬂation and high unemployment, the so-called “stagﬂationary” episode of the 1970s.
At the time, stagﬂation was blamed on an oil price shock. We have to reconsider, and say
that possibly it was the result of a lack of credible commitment by the government.

The theory in this chapter will give us an explanation for the “pain” associated with ﬁght-
ing inﬂation. There is a powerful maintained assumption in the media that policies that are
anti-inﬂationary require some sacriﬁce of real output. As we shall see, when the private
sector has formed strong expectations about continued high inﬂation, confounding those
expectations with sudden, unexpected, low inﬂation can have a severe cost in terms of real
output. This is not a reason to oppose anti-inﬂationary policies, it is a reason to campaign
for a credible commitment to low inﬂation.

Finally, it is worth noting that, in this chapter, we will ignore the government budget con-
19.1 The Model of Lucas (1972)                                                               229


straint. In Chapter 18 we were very concerned about the relationship between persistent
government budget deﬁcits and inﬂation. In this chapter we will assume the government
budget is more or less in balance, and that the government does not particularly need the
seignorage revenue generated by high inﬂation. This is a safe assumption when thinking
about inﬂation in the U.S. In thinking about inﬂation across different countries, though, the
analysis of Chapter 18 is probably more appropriate in countries, like Brazil, that experi-
ence persistent inﬂation and large budget deﬁcits. The “pain” of ﬁghting inﬂation in those
countries is the pain of raising direct taxes and decreasing government spending.

Both this chapter and Chapter 18 highlight the importance of credible government policies.
In Chapter 18, to stop hyperinﬂations the government had to credibly commit to balancing
its ﬁscal books. In this chapter, to prevent milder inﬂations, the government will have to
credibly commit to keep its hands off of the monetary spigot. In both cases there is a role
for international institutions as commitment devices.



19.1 The Model of Lucas (1972)

In this section we consider a simpliﬁed version of the important model of Lucas. We are
going to get a relationship between the anticipated price level, the actual price level and
something that looks like unemployment. We will use this relationship to argue for a par-
ticular functional form for the Phillips curve. We will not derive precisely a Phillips curve
since our model is going to be static, to keep the exposition simple. The dynamic general-
ization is very elegant, and the interested reader is referred directly to the Lucas paper.

This model turns on the decisions made by many separated industries in the private sector.
These industries cannot communicate with one another about prices. They will hire labor
according to their estimate of the true state of demand for their product.

    Q                          i
Let i be output in industry . Assume that all industries use only one input, labor. Let i     L
                                              i
be the number of workers hired in industry . Assume that all industries have the common
production function:
                                             Qi = Li ;
where the technology parameter satisﬁes 0 < < 1. Assume that all workers are paid the
common wage of unity for their unit of labor supplied. To produce an output Qi therefore
requires labor input (and total costs) of Li . Thus the cost function in industry i is:
                                             1=


                                     Total Cost(Qi ) = Li :
                                                         1




In industry i there will be a price Pi for that industry’s output. It is known that this price is
made up of two parts: a general price level P , common to all industries, and a shock term
Zi speciﬁc to industry i. These terms are related by the price equation:
(19.1)                                      Pi = PZi:
230                                                                                                           Optimal Monetary Policy


                         Z
The shock term i gives the real price of output in industry . The general price level will          i                           P
not be revealed until the end of the period, since the industries are on islands and cannot
communicate during production.

All private-sector industries begin the period with a common forecast of                                             P , which we de-
             P                             i
note by e . Thus an industry ’s best estimate of its real price i is:                                   Z
(19.2)                                                           Zie = PPie :
                              i
Recall that industry only observes i .                  P
                                   i
Equilibrium in industry , assuming that it is competitive, requires that marginal cost equal
                              Z
estimated real price ie . Since we know the total cost curve, marginal cost must just be its
                                                    Q
derivative with respect to output i . That is, equilibrium requires:

                                                             1
                                                                 Qi 1 = Zie:
                                                                   1




We can solve this to produce the equilibrium demand for labor conditional on the estimated
         Z
shock ie :

(19.3)                                                      Li = ( Zie )   1
                                                                               1
                                                                                       :
As expected, industries will demand more labor if they estimate that demand for their
product is unusually strong (if ie is large).  Z
                               Z
The estimated shock ie is comprised of two parts: the known estimate of the price level e                                           P
                                                P
and industry-speciﬁc price level i , related by equation (19.2). Thus we can substitute from
that equation into equation (19.3) to ﬁnd the industry-speciﬁc demand for labor conditional
   P
on e and i :     P
                                                                  
                                                        Li =           Pi     1
                                                                                   1

                                                                                           :
                                                                       Pe
Now we take logarithms of both sides. From now on, let lower-case variables denote loga-
                     `        L
rithms. Thus i = ln( i ) is given by:
                                                
                             `i = 1    1            Pi  = 1                                       1
                                                                                                        p pe ) ;
                                           ln
                                                    Pe 1                   ln( ) +
                                                                                               1
                                                                                                        ( i


                 z p          p
substitute i + for i from equation (19.1) above, and let                                           A = [1=(1       )] ln( ) to produce:


(19.4)                       `i = A + 1 1 (zi + p pe ):
Equation (19.4) captures the log of labor demand as a function of the (log of the) shock, the
                              p
common price level and the common price forecast e .                                       p
19.2 Monetary Policy and the Phillips Curve                                                            231


         u
Deﬁne to be the “not employed rate” (not quite the unemployment rate, but something
             N                                      n
close).1 If is the total workforce, and = ln( ), then deﬁne as:      N                     u
                                                                     X
                                                u=n                       `i:
                                                                      i
Assume for a moment that there are only two industries. Now:

                          u=n         A 1 2 (pe p)
                                    2 +
                                                                                1
                                                                                    2
                                                                                        z z :
                                                                                        ( 1 + 2)

Deﬁne further:

                                     u? = n             2   A;
         u
where ? is something like the natural rate of not-employment,


                                          "=        1
                                                        2
                                                                     z z ;
                                                                 ( 1 + 2 ) and:

                                           =
                                                    1
                                                        2
                                                                 :
Now we can write the aggregate not-employment rate as:

(19.5)                                     u = u? + (pe p) + ":
We will use some version of this equation throughout this chapter.

From the point of view of the government, the common price level is a control variable.            p
                                            p
The government picks a level for with monetary policy. Notice what equation (19.5)
says about the relationship of unemployment (or not-employment), the price level and the
forecast price level: unemployment is decreasing in the price level but increasing in the          p
                      p
forecast price level e . From the point of view of private industry, if the actual price level
exceeds the forecast price level,     p>p
                                       e , the industry has produced too much and suffers
losses as a result. From the point of view of the government, if         e , it can stimulate ap>p
one-period boom in which unemployment is below its natural level.



19.2 Monetary Policy and the Phillips Curve

For the rest of this chapter we will be using a modiﬁed version of equation (19.5). Assume
that:

(19.6)                                       u = u? + (e ):
  1 The unemployment rate is 1   (1=N )
                                          P L which doesn’t translate well into logarithms.
                                            i   i
232                                                                                                                 Optimal Monetary Policy


      u                                                    u
Here is the unemployment rate, ? is the “natural rate” of unemployment, e is the ex-                                            
                       
pected inﬂation rate and is the actual inﬂation rate. The natural rate of unemployment is the
level of unemployment when inﬂation is perfectly anticipated, so no industries are fooled
into thinking that relative demand is unusually high or low. The slope of this Phillips curve
is     where we assume                        >
                              0 (monetary expansions reduce unemployment). If we think
that there is uncertainty about the state of the real economy, we can add a mean zero shock
      "
term, , to produce:


                                                           u = u? + (e ) + ":

For the most part we will assume that the monetary authority knows the state of the real
economy with certainty.

In Figure (19.1) we plot Phillips curves with two different values of expected inﬂation e ,                                             
a low value in which the expected inﬂation rate is zero, and a high value, in which the
expected inﬂation rate is 8.3%. The dotted line gives the natural rate of unemployment
      u                       :
(here ? = 5%), and = 0 3. Notice that when inﬂationary expectations are high, to achieve
any given unemployment rate requires a higher inﬂation rate, and to achieve zero inﬂation
requires an unemployment rate well above the natural rate.


                                                                         Phillips curves
                                          0.25




                                              0.2
                           Inflation rate π




                                          0.15




                                              0.1




                                          0.05




                                               0
                                                0   0.01       0.02     0.03   0.04       0.05       0.06   0.07   0.08
                                                                      Unemployment rate u


                           Figure 19.1: Phillips curves under two
                           different expectations about inﬂation.
                           The bottom curve assumes e = 0 and                                    
                           the top curve assumes e = 0 0833. The                                    :
                           dotted line gives the natural rate of un-
                           employment.
19.2 Monetary Policy and the Phillips Curve                                                233


Monetary Policy with Fixed Expectations

Assume that the government (or which ever arm of the government controls monetary
policy) has a utility function over unemployment and inﬂation of g ( V u; 
                                                                     ) given by:
                                    V u; 
                                      g(  )=   2
                                                  u :
                                                    2


That is, the government dislikes unemployment and inﬂation equally. We will assume this
         V
form for for the rest of the chapter, so it’s worth mentioning that the Federal Reserve
Board is, by law, supposed to balance the twin goals of full employment and price stability.
Thus this utility function seems to be written in law.

                   
If we assume that e is given exogenously and ﬁxed, we can substitute the Phillips curve
in equation (19.6) into the government’s utility function above to produce a maximization
problem. Thus if the private sector has ﬁxed expectations about the inﬂation rate given by
                                                       
  e , then the government’s optimal choice of inﬂation is given by:
                                  
                              max
                                
                                       u
                                      [ ?+ ( e      )]2   :
                                                           2


The ﬁrst-order condition with respect to inﬂation  is:
                                   2 [u? + ( e  )] 2 = 0:
We can solve this for  to get the optimal inﬂation choice when expected inﬂation is ﬁxed
at  e and the natural rate is u? (call it  ? ( e )):

                                    ?(e ) = 1 + 2 (u? + e):
We can plug  ? ( e ) into the Phillips curve in equation (19.6) to produce the associated
unemployment rate, u0 ( e ):

                                  u0(e ) = 1 +1 2 u? + 1 + 2 e :
Notice that if  e is “small” that u0 ( e ) will lie below u? . The government trades off some
inﬂation for a lower unemployment rate.

                                                                                         
We plot ? ( e ) in Figure (19.2) below. Notice that for low values of expected inﬂation, e ,
the government chooses inﬂation rates above expectations and for high values of e , the
government chooses inﬂation rates below expectations. At one unique expected inﬂation
rate, the government’s best response is to choose an actual inﬂation rate exactly equal to
the expected inﬂation rate. This will play a special role, as we shall see.


Two Stories About Inﬂationary Expectations

We are not yet ready to discuss the strategic interactions between the private sector and
the government that determine inﬂationary expectations. However, we can study the out-
comes under two different stories about inﬂationary expectations. These will help us to
234                                                                                                                                Optimal Monetary Policy


                                                                                                                   *    e
                                                                Government’s best inflation choice: π (π )
                                                   0.5

                                               0.45

                                                   0.4




                          Inflationary choice: π
                                               0.35

                                                   0.3

                                               0.25

                                                   0.2

                                               0.15

                                                   0.1

                                               0.05

                                                    0
                                                     0   0.05     0.1       0.15    0.2   0.25   0.3   0.35       0.4       0.45   0.5
                                                                                                              e
                                                                        Inflationary expectations: π


                          Figure 19.2: Government’s optimal choice
                          of inﬂation ? as a function of different      
                          expectations of the private sector (solid)
                          and the 45-degree line (dotted). Where
                          the two lines cross is the inﬂationary ex-
                          pectation at which the government’s best
                          response is to meet expected inﬂation. In
                          other words: the Nash inﬂation level.


think about the government’s problem. First, we will assume that expectations are ﬁxed,
but that the private sector knows the government’s maximization problem. If this is the
case, then the private sector will set expectations to a unique value such that the govern-
ment chooses to set inﬂation at exactly the same value the private sector anticipated. Sec-
ond, we will assume that expected inﬂation exactly equals actual inﬂation in all cases. The
private sector has a crystal ball (or a spy) which informs it precisely of the government’s
inﬂationary plan, no matter what the government picks.

Imagine for a moment that the private sector understands the government’s maximization
problem and correctly anticipates inﬂation. That is, assume that inﬂationary expectations
satisfy:
                                                                              e =  ? ( e ):
From Figure (19.2) below, we see that there is exactly one such expected inﬂation rate.
Expanding produces:

                                                                 e = 1 + 2 (u? + e ):
We can solve for this special value of e , call it                                     1, to get:
(19.7)                                                                             1 = u?;
19.2 Monetary Policy and the Phillips Curve                                              235


       
where 1 is unique inﬂation rate such that when expectations satisfy e =     1 , the govern-
                              
ment’s inﬂation target is also 1 . The associated unemployment rate is:
                                          u1 u ;
                                              = ?
                                                              u
since e = . Thus the unemployment rate is at the natural rate ? and inﬂation is relatively
      
high at 1 . This will be the Nash equilibrium in inﬂation (as we shall see below).

Now imagine that the government is forced by law to correctly announce its inﬂation target
                                                              
each period. The private sector anticipates this and sets e = . Thus the Phillips curve in
equation (19.6) becomes:
                                  u u
                                    = ?+ (      u:
                                                   )= ?
In other words, inﬂation does not affect output. If this is the case, the government chooses
an inﬂation rate of zero (since inﬂation is costly and now provides no beneﬁt), and the
unemployment rate again goes to the natural rate. This will turn out to be the Ramsey
equilibrium as we shall see below.

Contrast the Ramsey and the Nash equilibria. Both produced the natural rate of unemploy-
ment, but the Nash equilibrium also had a high inﬂation rate. Thus the government and
the population are better off if the government is able to announce the inﬂation rate and be
believed. As we shall see below, unfortunately, when the private sector expects inﬂation to
be low, there is a temptation for the government to inﬂate.


Ramsey Monetary Policy

This last example was the Ramsey problem. If the government can credibly commit to a
particular inﬂation rate, the private sector responds by setting inﬂationary expectations to
the announced inﬂation target. As a result, the government announces an inﬂation target
of zero, and the result is the natural rate of unemployment. What are some commitment
devices? By making the monetary authority completely independent of the ﬁscal authority
it can be insulated from political pressure. Further, if the central banker has a reputation
for being an unpleasant misanthrope who cares only about defeating inﬂation, the private
                                                                                
sector can become convinced over time that in fact the central bank will set = 0 for all
time.

Indeed, one reading of the deeply unpleasant recession in the early 1980s is that the private
sector had to be convinced of the new central banker’s commitment to low inﬂation. Paul
Volcker arrived as Chairman of Federal Reserve Board at a time of high inﬂation and high
unemployment. He announced that there would be low inﬂation in the future. The private
sector did not adjust its expectations, but Volcker followed through on his promise. The
result was the unusual case in which inﬂationary expectations exceeded actual inﬂation,
        >
that is e     . As a result, unemployment shot above its natural rate in one of the deeper
recessions of the century. After two years of this treatment, the private sector adjusted its
expectations, convinced that Mr. Volcker was committed to low inﬂation.
236                                                                 Optimal Monetary Policy


Other countries, without the beneﬁt of the tradition of anti-inﬂationary policies of the Fed
to reassure the private sector, will completely let go of the reins of monetary policy. In
Hong Kong, for example, the local currency is pegged to the U.S. dollar in an arrangement
known as a currency board. For every 7.8 Hong Kong dollars issued, one U.S. dollar must
be placed on deposit, so the currency is fully backed. The Hong Kong government cannot
print money. Thus the exchange rate is immutably ﬁxed, and there can be no depreciation
of the local currency against the U.S. dollar. Countries will go to great lengths to convince
the private sector that they are really committed to low inﬂation. They have to work so hard
at it, we shall see, precisely because, if expectations are low, there is always a temptation to
inﬂate.




19.3 Optimal Monetary Policy without Commitment: The
     Nash Problem

In this section we will explicitly model the strategic interaction between the private sector
and the government when forming inﬂationary expectations. We will force the government
to choose from only two possible inﬂation levels, and the private sector to pick from only
two possible inﬂationary expectations. The results we derive here generalize to the case in
which both choose from continuous distributions.

                                                   ;
Inﬂation can only take on one of two values: f0 1 g. That is, inﬂation can be zero or the
                                                                       
high level we derived in equation (19.7). The private sector expects e which can also only
                      ;
take on the values f0 1 g, since it wouldn’t make sense for the private sector to anticipate
inﬂation rates that the government can’t pick.

                                                                            ;
There are four possible combinations of expected and actual inﬂation, f e g. At each one
of these four combinations we will specify the payoff to the private sector and to the gov-
ernment. These payoffs will be known by both players. We will look for a Nash equilibrium,
which is simply a pair of choices (one for the private sector, one for the government) such
that, given the other player’s choice, no player can do better.

                                                                    V  ;
We now consider each of the four possible combinations. Let g ( e ) be the payoff to
                      V  ;
the government and p ( e ) be the payoff to the private sector at each possible f e g     ;
combination. We will assume that the private sector suffers a penalty of 1 if it does not
correctly forecast the inﬂation rate and gets a payoff of zero otherwise (this is just a nor-
malization). We assume that the baseline government payoff (at zero inﬂation and the
natural rate of unemployment) is 0, and that otherwise the government dislikes inﬂation
and unemployment. At each of the four possible outcomes, the payoffs of the two players
are:
19.4 Optimal Nominal Interest Rate Targets                                                 237




                  Private Sector                Government
                                   =0                 = 1
                  ee = 0          V gg = 0; V p =p 0 V gg = 1; V p = p 1
                   = 1           V = 1; V = 1 V = 0:5; V = 0

                                               ;
Notice that the government really dislikes f e = 1 = 0g; this corresponds to the Volcker
play of low inﬂation when expectations are high. The result is unemployment above the
natural rate. Also, the government dislikes (but not as much) f e = 1       ;   
                                                                            = 1 g; here
inﬂation is high, but unemployment is at the natural rate. The government would prefer
               ; 
to be at f e = 0 = 1 g; here inﬂation is unexpectedly high, so unemployment is below
the natural rate.

Now let us work through these payoffs to ﬁnd the Nash equilibrium. If the household
                                                             
plays e = 0, the best response of the government is to set = 1 . If the household plays
                                                           
  e = 1 , the best response of the government is to play = 1 . If the government plays
                                           
   = 0 the best response of the household is e = 0, but this is not a Nash equilibrium since,
                             
if the household does play e = 0, we saw that the government will want to deviate to
                                                                                    
   = 1 . If the government plays = 1 then the household’s best response is to play e = .
                                                                            
Since = 1 is the government’s best response to a household play of e = 1 , this is the
only Nash equilibrium in this example.

The Nash equilibrium then is unemployment at the natural rate combined with high in-
ﬂation. Compare this to the Ramsey outcome of unemployment at the natural rate and
inﬂation of zero.



19.4 Optimal Nominal Interest Rate Targets

In this section we will consider the government’s optimal choice of nominal interest rates.
We will consider the real cost of inﬂation, whereas previously we had simply taken it as
given that the government disliked inﬂation. We will use the simple inventory model
of cash holdings from Chapter 4 to show that households are best off when the nominal
interest rate is zero. This is a form of what is known as the Friedman rule. It appears
frequently in monetary economics.

                                       R                         r
Recall that the nominal interest rate , the real interest rate and the expected inﬂation
    
rate e are related by the Fisher formula:  R r 
                                              = + e . For this discussion we will take the
real interest rate as ﬁxed and beyond the control of the government. Furthermore, we will
assume that the government cannot directly manipulate inﬂationary expectations, and that
                                                            
the private sector correctly forecasts inﬂation. That is: e = . Thus the government inﬂu-
                                                                                       
ences the nominal interest rate only through its choice of the actual inﬂation rate, . The
238                                                                 Optimal Monetary Policy


intuition behind the Fisher formula is quite compelling: households demand a premium
  
of for holding assets denominated in money, which is losing value at the rate of inﬂation.

In our model there will be no production. Households own a stock of interest bearing as-
                                                R
sets, which earn a nominal rate of return of , and a stock of zero interest money. Money
                                                            
must be used for transactions. There is a ﬁxed cost of of converting the interest bear-
ing assets into money, which must be paid every time the household goes to the bank to
replenish its cash inventory. The household has real consumption at a rate per period    c
which it does not vary.

                                   x                               =x
The household goes to the bank times in one year, so it goes 1 of a year between trips to
the bank. To have enough cash on hand to meet its consumption requirement per period     c
              =x
over those 1 periods, the household has to withdraw a real amount               c=x
                                                                                at every trip.
                                                            c= x
Thus average real cash holdings over the entire year are (2 ). Those cash balances could
                                                                        R
have been invested in interest bearing assets earning an amount over the year. Thus the
                           Rc = x
foregone interest cost is: ( ) (2 ). Each time the household goes to the bank to replenish
                                                                               x
its cash inventory, it incurs a real cost of . Thus, transactions costs are: . Total costs for
                     x
a particular policy are:

                                           x + R 2cx :
The household minimizes total costs. The minimization problem has a ﬁrst order condition
of:
                                          cR 1 +  = 0:
                                           2 x2
Solving for   x produces Baumol and Tobin’s famous square-root rule for trips to the bank:
                                                s
                                           x = cR
                                               2
                                                  :
                                          x
We can plug the household’s decision back into its cost function to determine the house-
hold’s annual cash management costs, (     ! ; c; R
                                            ):
                                                    p
                                       !(; c; R) = 2cR:
                                                            
It is increasing in the ﬁxed charge of going to the bank, , the rate of consumption,         c and
the nominal interest rate .R
A benevolent government that wishes to minimize the household’s costs by choice of               R
would clearly choose to set    R = 0. At this interest rate, the household goes to the bank
only once in its lifetime and incurs no interest penalty for holding money. This is because
                                            r
money also earns in a real interest rate of . This can only be the case if inﬂation is negative.
From the Fisher formula    R r 
                             = + , we see that       R = 0 implies that =           r
                                                                                 . So if = 0,R
money is a perfect substitute for bonds. Holding a dollar isn’t so bad, because next year
the household will be able to purchase more with that dollar than it can now.
Exercises                                                                                  239


Although this model is quite limited, it points to one of the important real costs of inﬂation.
Inﬂation causes households to engage in privately useful but socially useless activities. In
times of high inﬂation, households ﬁnd it in their interest to spend time and real resources
economizing on cash balances. Notice that this is the ﬁrst indication we have had this
chapter that perfectly anticipated inﬂation is harmful.

If the idea of negative inﬂation rates seems outlandish, think of the Friedman rule instead
as advocating paying interest on money. It is difﬁcult (though not impossible) to pay in-
terest on cash holdings (C. A. E. Goodhart, an English central banker, suggested having a
lottery based on cash serial numbers), it is quite easy to pay interest on demand deposits.



Exercises

Exercise 19.1 (Easy)
True, False, or Uncertain (and explain):


  1. The Consumer Price Index overstates increases in the “true” cost-of-living index.

  2. Inﬂation is bad because to ﬁght it the Fed increases interest rates, which hurts Amer-
     icans.

Exercise 19.2 (Easy)
Do governments prefer Phillips curves that are relatively ﬂat (low value of ) or relatively
steep (high values of )?

Exercise 19.3 (Moderate)
Assume that the government has a payoff over inﬂation       and unemployment u of:
                                    V g (u; ) = u2 2:
Here  >                   
           0. The larger is, the nicer the central banker (that is, the more the central
banker cares about the unemployed. Assume that there is a Phillips curve of the form in
equation (19.6). Answer the following questions:


                                                           
  1. Assume that inﬂationary expectations are ﬁxed at e . Find the optimal inﬂation rate
                                  
     choice of the government, 0 ( ).

  2. For ﬁxed inﬂationary expectations, ﬁnd the corresponding choice of unemployment
            u 
     rate, 0 ( ).

  3. Now assume that the private sector is aware of the government’s maximization prob-
                                                          
     lem and knows perfectly. Find the inﬂation rate 1 at which expectations are met.
     What is the associated unemployment rate, 1 ?  u
240                                                              Optimal Monetary Policy


              Variable    Deﬁnition
               Qi; qi                                      i
                          Output (and its log) in industry .
               Li; `i     Employment (and its log) in industry . i
                          Production parameter common across industries.
                P; p      Common but unobserved general price level (and
                          its log).
               Pi ; pi    Observed price (and its log) in industry .  i
               Zi ; zi                                               i
                          Shock (and its log) speciﬁc to industry , also in-
                                 i
                          dustry ’s relative price.
               P ;p
                 e e      Common price forecast (and its log).
               Z ;z
                 e e
                 i i      Estimated industry-speciﬁc shock and its log.
                N; n      Population and its log.
                 A        Parameters (used to make notation neat).
                 u        In Lucas model: the “not-employment” rate, else-
                          where, the unemployment rate.
                 u?       The natural rate of unemployment, that is, the
                          rate of unemployment when all industries cor-
                          rectly estimate their speciﬁc shocks.
                          Slope of Phillips curve.
                         Actual inﬂation (chosen by government).
                 e       Expected inﬂation (chosen by private sector).
                ( e )
                ?         Government’s optimal choice of inﬂation when
                                                       
                          inﬂationary expectations are e .
              V u; )
                g(        Government’s preferences over unemployment
                          and inﬂation (it dislikes both equally).
                 Vp       Private sector payoff: industries dislike making
                          errors in estimating the inﬂation rate.
                 1       Inﬂation rate at which expected and chosen inﬂa-
                          tion coincide, the Nash equilibrium.
                 u1       Unemployment rate at Nash, just equal to ? .    u
                           Table 19.1: Notation for Chapter 19


  4. Would you prefer to live in a country whose government has a high value of    or a
                  
     low value of ?

Exercise 19.4 (Moderate)
For this exercise, we will consider what happens when the government and the private
sector repeatedly interact. Unemployment in period   tu                   
                                                     t , inﬂation t and inﬂationary ex-
Exercises                                                                                     241


            
pectations te are related by the simple Phillips curve:
                              u u
                               ?
                          t= t+ ( t
                                     e        ;
                                          t ) for all = 0 1  t       ; ; : : : ; 1:
The parameter is ﬁxed over time. The government knows about the Phillips curve, but
the private sector does not. The government has preferences over unemployment and
inﬂation in period of:   t
                        g    V  ;u
                       t ( t t) =  t
                                     2
                                      u  2
                                                ;
                                        t for all = 0 1      1   t       ; ;::: ; :
The private sector sets inﬂationary expectations based on last period’s inﬂation. This is
                                                
known as adaptive expectations. As a result, te is given by:
                               e    ;
                               t = t 1 for all = 1 2 t       ; ;::: ; :
                                                             1
                0
Assume that e = 0, that is, the private sector begins by believing that inﬂation will be zero.
Answer the following questions:

                                                                                      
    1. Assume that the government takes as given expectations in a period te and picks the
                                                                                t
       inﬂation rate t which gives it the highest payoff in period . Find the government’s
                      
       choice rule t? ( te ).
                                                
    2. If the government sets inﬂation t = ? ( te ), how do expectations evolve over time?
       Thus right down a law of motion for inﬂation, t ( t 1 ).   
    3. What do the trajectories of inﬂation and unemployment look like over time? Are they
       rising or falling? Do they settle down? If so, where?
    4. How would your answer have been different if, instead of the initial expected inﬂa-
       tion being zero, it had been some very large number instead?
    5. Now assume that the Phillips curve is augmented with a mean zero shock term, , so: "
                                      u u ?
                                     t= + ( t
                                                 e       
                                                     t) + t             ":
                                                                     "
      Assume that the government knows the value of t and reacts appropriately. Now
      what happens?

Exercise 19.5 (Easy)
To answer this exercise, you need to answer Exercise 19.4 above. Imagine that the pri-
vate sector has adaptive expectations about the government’s inﬂationary policy over time,
but that part of expected inﬂation is the government’s announced inﬂation target. This an-
nounced inﬂation target is merely an announcement and has nothing to do with reality. If
a                                        t
 t is the announced target for period- inﬂation, expectations satisfy:
                        e     Æ
                        t = t 1 + (1          Æ ;
                                          ) ta for all = 1 2     t
                                                                 1     ; ;::: ; :
Here 0  <Æ<    1 is a parameter indexing how much weight the private sector puts on the
government’s announced inﬂation rate target. Assume that the government lies constantly,
                     
and announces ta = 0 always. Assume that the government, as in Exercise 19.4, always
chooses the inﬂation rate that maximizes its one-period payoff. Find the steady-state levels
of inﬂation and unemployment.
Solutions to Exercises

Exercise 1.1
You may have noticed that this question glosses over the compounding issue. You were
intended to assume that the APR was quoted as a simple interest rate. Accordingly, the
daily interest rate is just:
                                       :8%  0:046027%:
                                R = 16365
Exercise 1.2
This exercise glossed over the compounding issue again. Assuming no compounding over
the week, the interest rate is:
                                                 
                             R = 1;25000 (52) = 1:3 = 130%:
Exercise 1.3
The key to this question is that the units you use to measure time in the exponent are the
                                                                                    n
same units of time for the resulting interest rate. For example, if you measure in years,
                 R                                                      n
then solving for gives you an annual interest rate. If you measure in “quarters”, then
R will be a quarterly interest rate.

Since this question asks you to annualize the answer, you want to measure      n in years. The
time interval is 3 months, which is 1/4 of a year. Accordingly:
                                              h          i
                                   :
                              157 8 =       e(R)(1=4) (156:7); so:
                 R = 4[ln(157:8)        ln(156:7)]  0:02798104 = 2:798104%:

Exercise 1.4
You do not want to annualize these interest rates, so you measure    n in quarters, i.e., n = 1:
            R          :               :          :          :
1st quarter: 1 = ln(156 7) ln(155 7)  0 00640207 = 0 640207%.
             R           :                :          :
2nd quarter: 2 = ln(157 8) ln(156 7)  0 00699526 = 0 699526%.  :
            R           :               :          :
3rd quarter: 3 = ln(158 6) ln(157 8)  0 00505690 = 0 505690%.:
            R           :               :          :
4th quarter: 4 = ln(160 0) ln(158 6)  0 00878851 = 0 878851%.:
244                                                                                           Solutions to Exercises


You can see that by adding these four lines together, all but two terms cancel, leaving:
R            :           :        :                       :
   = ln(160 0) ln(155 7)  0 02724274 = 2 724274%. And of course, this is precisely the
formula for the annual growth using a continuous interest rate.

Exercise 1.5

                                                   h                  i
                                  (2)(GDP) =   e(0:02)(n) (GDP); so:
                                       n = ln(2)
                                           0:02
                                                 = 34:66 years:

The Rule of 72 says that it should take about 72/2 = 36 years, which is pretty close (it is off
by about 3.9%). Of course, you are smart enough to look at:

                                                   n = ln(2)
                                                       0:02
and notice that a better rule would be the “Rule of 69”, but nobody is very good at dividing
into 69 in their head.

Exercise 1.6
The ﬁrst thing you need to do is calculate the number of whole (i.e., undivided) years this
investment will require. There is some number of years such that: n
                              :               ;           <
                        (1 + 0 065)n($10 000) $15 000 but where:      ;         ;
                                       :
                               (1 + 0 065)n+1($10 000) $15 000;           >         ;     :
This implies that   n = 6. After the 6th year, the investment has grown to:
                               (1 + 0:065)6($10; 000) = $14; 591:42:

That becomes the principal of the investment in the 7th year, since interest was able to
compound at the end of the 6th year. Now you need to ﬁgure out the number of days of
simple interest the investment will need in the 7th year. It is short of $15 000 by $408 58,       ;            :
and each day the investment earns:
                                             
                                       :
                                      0 065
                                                          ;       :
                                                  ($14 591 42) = $2 60              : :
                                       365

You use these facts to calculate the required number of days:

                                           $408 58    :                   : :
                                            $2 60 := 157 23

Since interest only accrues after a full day, the investment would not earn the interest from
         :
the last 0 23 days until 158 days had passed. All in all then, the investment would require
6 years and 158 days.
Exercises from Chapter 2                                                                 245


Exercise 1.7
   F
Let t be the acreage of forest in year . Then:  t
                                    Fn = F0 (1 0:046)n:
You are looking for the n such that Fn = (0:5)F0 . Plugging this into the equation and taking
logs of both sides yields: n  14:72, so half will be cleared in 15 years.

Exercise 1.8
  1. The relevant formula is:

                                                              e
                                                        679 100R = 954   :
       R  3:4  10 3.
       so
  2. Letting x be the number of years, the relevant formula is:

                                    2exR = 679; 000; 000:

     You use R from the previous part. Solving yields x  5777, so they would have left
       the Garden of Eden in about 4075 BCE. (Population growth was probably slower in
       the past, so this is likely not early enough.)

Exercise 1.9
  1. You are solving for  n in the following equation:
                                $10; 600(1:047)n = $15; 400(1:017)n:

       This implies that n  12:85 years, so the incomes would be the same sometime in
       1996. (Nb: They were not. Japan’s income was still less at that date.)
  2. Just plug in the value of :n
                                            ;             :
                                    $15 400(1 017)12:85  $19 124            ;   :
Exercise 2.1



                                c;l;ns
                                                    c
                                max fln( ) + ln( )g such that:    l ;
                                    c           n
                                     = 4 0s:5 + (24    s)           l n w:
Exercise 2.2
First, write out the maximization problem:
                                        
                                max
                                 c;l
                                            c (1 l)1 ; such that:
                                               c = y = Al :
246                                                                                          Solutions to Exercises


Plug the constraint into the objective to get an unconstrained maximization problem:
                                               
                                         max (
                                          l
                                                   Al ) (1 l)1                       :
There is only one ﬁrst-order condition:

(FOC )l             Al
                    [ ( ?) ]    1
                                    [   A (l?) 1](1 l)1                             Al
                                                                            = [ ( ? ) ] (1   )(1   l? ) :
After a bunch of canceling and rearranging, this reduces to:

                                             l? = 1                 +
                                                                            :
Plugging this back into the =  c y = f (l) constraint yields:
                                                                            
                                          c? = A 1                  +
                                                                                     :

Exercise 3.1
  1. The marginal period utility is:

                                                     u0(ct) = 12 ct :
                                                                                1
                                                                                2




      Plugging this into equation (3.7) yields:

                                               c
                                             1 ?
                                             2( 1)
                                                          1
                                                          2
                                                                            R;
                                                                  = (1 + ) or:
                                               c
                                             1 ?
                                             2( 2)
                                                          1
                                                          2

                                                ?  12
                                                    c2                              R:
                                                    c?1            = (1 + )


                                         c c                  b
  2. We have three unknowns: ?1 , ?2 , and 1? . The three equations relating them are: the
     Euler equation above and the two budget equations. Solving these is an unpleasant
     exercise in algebra. Solve the Euler equation for ?2 :       c
                                                   c?2 = 2(1 + R)2c?1 :
                          c
      Use this to remove 2? from the second-period budget:

                                    Py2 + b1?(1 + R) = P  2(1 + R)2c?1  :
                    c
      Solve this for 1? , and plug the result into the ﬁrst-period budget:
                                                                                        
                                        Py1 = P PyP2 +2(1b1 +(1R+)2R) + b1?:
                                                                        ?
Exercises from Chapter 3                                                                 247


       This looks awful, but it reduces to:

                                 b1? = Py1       P [y2 + y1(1 + R)] ;
                                              [1 +    2 (1 + R)](1 + R)

     which is the answer for the household’s choice of b1 . Plugging this back into the
     ﬁrst-period budget gives the optimal c1 :

                                     c?1 = [1 +y22+(1y+1(1R)](1
                                                           + R)
                                                                + R)
                                                                     :
     Finally, we plug the answer for c?1 into the second-period budget equation to get:

                                  c?2 = (1 +1R+)[y22(1++y1R(1) + R)] :
                                           2




  3. In equilibrium, b?1 = 0, so:

                                  Py1 = [1 +P [y22(1++y1R(1?)](1
                                                             + R? )]
                                                                 + R? )
                                                                        ;
     Solving for R? yields:
                                                        
                                          R = 2 y1
                                            ?       y2
                                                       1
                                                       2
                                                                1:

  4. From the above equation, we see that an equal percentage increase in y1 and y2 will
     have no effect on the equilibrium interest rate R? , just like under logarithmic prefer-
       ences.
Exercise 3.2
  1.
                                         @R? =       y2 < 0:
                                          @          2y
                                                        1

       Greater impatience means decreases (say, from 0.95 to 0.9), and      R? moves in the
       opposite direction, so the equilibrium interest rate increases.
  2.
                                          @R? = y2 < 0;
                                          @y1    y12
       so smaller ﬁrst-period income causes the equilibrium interest rate to increase.

Exercise 3.3
  1.

                                c1 ;c2 ;s
                                         c    c ;
                                max fln( 1 ) + ln( 2 )g    subject to:

                                         c s e;
                                          1+ = 1        and:
                                         c e    Æ s:
                                          2 = 2 + (1     )
248                                                                      Solutions to Exercises


  2. The Lagrangean for this problem is:
                  L = ln(c1 ) + ln(c2 ) + 1 [e1 c1 s] + 2 [e2 + (1 Æ)s c2 ]:
      The ﬁrst-order conditions are:

           c
      (FOC 1 )
                                                c1 1 = 0;
                                                 1


           c
      (FOC 2 )
                                             c2 2 = 0; and:
      (FOC s)                                 1 + 2 (1 Æ) = 0:
      We also have two ﬁrst-order conditions for the Lagrange multipliers, but we leave
      those off, since they just reproduce the constraints. We can quickly solve the above
      equations to remove the Lagrange multipliers, giving us:
                                                 c2 = (1 Æ):
                                                 c1
      We combine this with our two constraints to get:

                                         s = (1(1 ÆÆ)(1
                                                     )e1 e2
                                                        + )
                                                             ;
                                  c1 = e1 (1(1 ÆÆ)(1)e1 e2
                                                       + )
                                                            ; and:
                                      c2 = e2 + (1 1Æ+)e1 e2 :
  3. We just take the derivatives of the above answers with respect to :   Æ
                                      @c1 =  e2(1 + )
                                      @Æ (1 Æ)2(1 + )2 < 0;
                                       @c1 = e1 < 0; and:
                                        @Æ 1 +
                                      @s =   e2(1 + ) < 0:
                                      @Æ (1 Æ)2(1 + )2
                                                                                       Æ
      Here, Maxine has learned how to defend against rats, so we are interested in going
      down. The negative derivatives above imply that all the choices change in the oppo-
      site direction, so consumption in both periods and ﬁrst-period saving all increase.
Exercise 3.4

                                          ( 4              )
                                           X
                             max
                            s0 ;::: ;s4
                                                     c ; such that:
                                                 t ln( )
                                                       t
                                           t=0
                              ct = (1 st)xt ; for t = 0; : : : ; 4;
                          xt+1 = (1 + )sxt; for t = 0; : : : ; 4; and:
                                 x0 is some given constant.
Exercises from Chapter 4                                                                                                   249


Exercise 4.1
  1. Take the derivative of real money demand with respect to the interest rate                                    R:
                          @(R; c; =P ) =  1  c  2                1                      

                                                                                  PR2c < 0;
                                                                      2
                                                                                      2
                              @R            2      PRc
         so the interest rate and real money holdings move in opposite directions. An increase
         in the interest rate causes the consumer to hold less real money.
   2. Differentiate with respect to : c
                   @(R; c; =P ) =  1  c  1   2             1
                                                                  2
                                                                      
                                                                                  2
                                                                                                     
                                                                                                          2
                                                                                                                 12  
                                                                                                                     1
                       @c            2       2    PRc                         PRc         2
                                                                                                  +
                                                                                                          PRc        2
                                                12                              12  
                                 =
                                      1
                                      2
                                            2
                                            PRc
                                                              1
                                                              4
                                                                      c PRc
                                                                         2                        1
                                                                                                  c
                                                12

                                            PRc > 0;
                                      1     2
                                 =
                                      4
         so consumption and real money holdings move in the same direction. If the con-
         sumer consumes more, then the consumer will hold more real money.
   3. First, we replace    =P with , giving us:
                                                                        12
                                      (R; c; ) =        1
                                                         2
                                                              c Rc :
                                                                  2


         Taking the derivative with respect to     gives us:
                                                                                       
                          @(R; c; =P ) = 1 c 1                               1



                                                                                      Rc > 0;
                                                                  2           2
                                                                                          2
                              @           2   2                   Rc
         so real money holdings and real transactions costs move in the same direction. If
         the consumer faces higher real transactions costs, the consumer will hold more real
         money.

Exercise 5.1
The budget constraint for the ﬁrst period was given by:
(3.2)                                     Py1 = Pc1 + b1:
The condition for clearing the goods market in the ﬁrst period was:
(3.10)                                      Ny1 = Nc2:
This implies    y1 = c1. Plugging this into (3.2) gives:
                                        Pc1 = Pc1 + b1; or:
                                               b1 = 0;
which is the market-clearing constraint for bonds.
250                                                                                      Solutions to Exercises


Exercise 5.2
The price for a good can only be zero if all consumers are satiated with that good, that is,
if they cannot increase their utility by consuming more of it. In our model this is ruled
out because all utility functions are strictly increasing in all arguments. This implies that
the consumers always prefer to consume more of each good. If the price for a good were
zero, they would demand inﬁnite amounts, which would violate market-clearing. There-
fore, with strictly increasing utility functions, all prices are positive. If utility is not strictly
increasing, zero prices are possible. In that case, Walras’ Law might not hold, because
total demand by consumers can be less than the total endowment. The proof of Walras’
Law fails once we use the fact that the price of each good is positive. On the other hand,
the First Welfare Theorem still goes through, since it does not rest on the assumption of
positive prices.


Exercise 6.1
  1. The ﬁrst-order condition with respect to da is:        l
             l
      (FOC da )                                   : l
                                              (0 5)( da?) 0:5           w = 0:
                      l         l
      Solving for da? yields: da? = 4w1 2 . The farm’s proﬁt is:
                                                               0:5
                            l
                           ( da? )0:5    wlda? = 4w1 2                      w = 1 = a? :
                                                                           4w 2 4w
   2. The ﬁrst-order condition with respect to db is:       l
             l
      (FOC db )                               :         l
                                          (0 5)(2)( db?) 0:5               w = 0:
                      l         l
      Solving for db? yields: bd? = w12 . The farm’s proﬁt is:
                                                                   0:5
                                l         wl                                   w 1 b?
                                                                               w2 = w =  :
                                                                1
                            2( bd?)0:5         d?
                                               b =2         w2
   3. For economy, we will work this out for an unspeciﬁed j? , where is either or            j          a
      b. We’ll plug those in later. Substitute the constraint into to objective in order to
                  c
      eliminate j . This gives us:
                                          
                                    max ln(       wlsj + j? ) + ln(24 lsj ) :
                                     ljs

      We carry out the maximization:

             l                                w
                                                        lj? = 0; so:
                                                                    1
      (FOC sj )
                                         wl 
                                           j      +
                                           s + j? 24
                                          (24   j? l w wlsj? + j? :
                                                s ) =
Exercises from Chapter 6                                                                                251


                   l
       Solving for sj? yields:

                                               lsj? = 24w2w  :
                                                                  j?
       (S.8)

                                         
       For this exercise, we are using a? , so we plug that in to get:


                                       lsa? = 24w2w 4w = 12
                                                           1

                                                                                w2 :
                                                                                1
                                                                            8

  4. We can just re-use equation (S.8), but this time we plug in b? , yielding:        
                                        lsb? = 24w2w w = 12
                                                           1

                                                                               w2 :
                                                                               1
                                                                           2

  5.

                                 ld? = 400lda? + 700ldb? = 4400
                                                             w2 + w2 = w2 :
                                                                  700 800


  6.

                             ls? = 400lsa?+ 700lsb?                                          
                                                       1                                   1
                                 = (400) 12
                                                w2 + (700) 12
                                                   8                                   2   w2
                                 = (1; 100)(12)
                                                 w2 :
                                                400


                       l l
  7. We want to set d? = s? , or:


                                     w2 = (1; 100)(12) w2 ;
                                         800                               400


       which reduces to w2 = 1=11, or w  0:3015.

Exercise 6.2
  1. We take the ﬁrst-order condition of equation (6.9) with respect to d :                         l
               l                      @ =  7  Ak (l?)    3         3
                                                                                w=0
       (FOC d )
                                      @ld 10          d     10        10




                                  l
       When we solve that for d? , we get:
                                                       
                                               l?          7   A k
                                                                 10
                                                                 3

                                                d=         10  w
252                                                                                                               Solutions to Exercises


  2. The result is as follows:

                             ? = Ak (ld?)     3
                                               10
                                                             7
                                                            10       wld?
                                                   "                               # 107
                                 = Ak
                                             A                 7A
                                                                          10                                 10



                                             w k          w 10w k
                                               3            7              3                                 3
                                               10
                                                            10
                                                            
                                          7A                7A
                                                                      7                                 10

                                 = Ak            k     w          k
                                                                      3                                 3
                                               3                                   7

                                          10w              10w
                                               10                                 10


                                                        
                                       7A               7A
                                                                 7

                                 =k            A   w
                                                                 3


                                      10w               10w
                                             
                                     3A     7A
                                                                            7

                                                   k:
                                                                            3


                                            10w
                                 =
                                     10

  3.

                                       maxf 2 (1
                                       c;ls
                                                        c   1
                                                                     ls) g; subject to:
                                                                                  1
                                                                                  2



                                                                 c = ? + wls :
                                       
  4. To begin, we can leave the ? term in the Lagrangean:

                                      L = c (1 ls ) + [? + wls c]:
                                                    1
                                                    2
                                                                      1
                                                                      2



       Our ﬁrst-order conditions are:
                                
       (FOC )  c                  1
                                  2
                                           c
                                           ( ?)
                                                        1
                                                        2   (1       ls?) + ? [ 1] = 0; and:
                                                                              1
                                                                              2


                                            
       (FOC s )l                  c
                                 ( ?) 2
                                      1             1
                                                    2
                                                            (1       ls?)          1
                                                                                   2            w
                                                                                       ( 1) + ? [ ] = 0      :
                                   
       We leave off the FOC for . Combining the above FOCs to get rid of ? yields:                                     
       (S.9)                             c? = w(1 ls?):
       We plug this result and our expression for  ? into the budget equation  + wls = c,
       yielding:
                                 
                                      3A   7A  k = w(1 l?) wl?:   7
                                                                     3


                                      10    10w            s    s

                        l
       Solving this for s? gives us:
                                                            "                                      #
                                           l? 1                           3            7  A k :
                                                                                               10
                                                                                                3

                                            s=2 1                         7            10 w
Exercises from Chapter 7                                                                             253


                                   l
     When we plug this value of s? back into equation (S.9), we get the optimal consump-
          c
     tion ? :
                                              "                                    #
                                   c   ?=    w 1 + 3  7A  k :           10
                                                                          3


                                             2     7 10w

                  l l            w
  5. We just set s? = d? , solve for , and call the result ? :       w
                                        "                                                #
                                7A
                                        10

                                      k=2 1
                                        1
                                        3
                                                             3        7    A k :      10
                                                                                        3


                               10w?                          7       10 ?  w
     After a bunch of algebra, we get:
                                                                         !
                                       w? =        A  17k
                                                   7
                                                                     3
                                                                     10
                                                                               :
                                                   10            7

                                             w
  6. We are interested in the derivative if ? with respect to :  k
                  @w? =  7A   3   17k   17  =  51A   17k  :
                                                         7
                                                        10
                                                                                                 7
                                                                                                10


                   @k       10     10       7         7         100 7
     Since this derivative is positive, w? increases as k does.
  7. The U.S. has a much larger stock of capital (per capita) than Mexico does. According
     to this model, that difference alone causes wages to be higher in the U.S. From the
                                              w
     equation for the equilibrium wage ? , we see that increasing the per-capita capital
              k
     stock by a factor of two causes the wage to increase, but by less than a factor of
     two. Hence, wages between the two countries differ by less (in percentage terms)
     than their per-capita capital stocks.
     Of course, owners of capital try to export it to wherever labor is cheapest. In this
     case, the households in the U.S. try to send some of their capital to Mexico in order to
     take advantage of lower wages there. If this movement of capital is restricted, then
     the wage difference will persist, and there will be an incentive for workers to move
     to the country with more capital. In this case, Mexican workers will see higher wages
     across the border and will immigrate to the U.S. where they will earn more.

Exercise 8.1
According to the quantity theory, the inﬂation rate is approximately equal to the difference
between the growth rate of money supply and the growth rate of output. Since the question
assumes that velocity is constant, the quantity theory applies. The annual rate of inﬂation
is therefore two percent.

Exercise 8.2
In Chapter 8 we determined that velocity is inversely related to the time spent between
two trips to the bank. In Chapter 4 we saw that the time between two trips to the bank
254                                                                                                Solutions to Exercises


decreases when the nominal interest rate increases. Therefore velocity and the nominal
interest rate are positively related. In Section 8.3 we found out that inﬂation and nominal
interest rates are positively related. Therefore, a high inﬂation rate results in high nominal
interest rates and high velocity. This is also true in the real world: velocity is much higher
in countries with high inﬂation than in countries with moderate inﬂation. Intuitively, high
inﬂation means that money quickly loses value. It is therefore not attractive to hold a lot of
money, so money circulates quickly. In countries with hyperinﬂation, wages are often paid
daily, and workers usually spend wages the same day they receive them.


Exercise 9.1
Of course, the solution depends on the country you pick. As an example, Figure S.3 dis-
plays GDP and its trend for Germany. You can see that the trend does not look that much
smoother than the actual series. This shows that our method of computing the trend is not
especially good.

                               16000


                               14000


                               12000
              GDP per person




                               10000


                               8000

                                                                                                       GDP
                               6000
                                                                                                       Trend
                               4000


                               2000


                                  0
                                       1950   1955   1960   1965   1970    1975   1980   1985   1990

                                                                   Years


                                                     Figure S.3: GDP and Trend


Exercise 9.2
Figure S.4 shows the cyclical component for Germany. Your business cycle should look
similar, unless your country is a former member of the communist block. Those countries
either had radically different business cycles, or, more likely, they adjusted their statistics
in order to get nice, smooth ﬁgures.


Exercise 9.3
For Germany, there are ten peaks in the cyclical component. The duration of a full cycle
is between three and six years, with the average slightly above four years. The overall
Exercises from Chapter 9                                                                                  255


                0.06



                0.04



                0.02



                   0
                        1950    1955     1960   1965       1970        1975      1980       1985   1990


                -0.02



                -0.04



                -0.06



                                   Figure S.4: The Cyclical Component



amplitude of the cycles is relatively stable. Although there are some general similarities,
the cycles are of quite different shape. The process generating the cycles seems not to have
changed much, however. The cycles in the ﬁfties and sixties are not much different from
those in the eighties and nineties.


Exercise 9.4
By using the resource constraints, we can write the problem as:
                                         p
                               max ln(     Bkt + t it) + A ln((1 Æ)kt + it):
The ﬁrst-order condition is:

                                                                               A
                                   0=      pBk +1 
                                                t      t    it    +
                                                                      (1      Æ)kt + it :
            i
Solving for t , we get:
                                               p
                                        it = A[ Bkt +1+t]A (1 Æ)kt :
Using the resource constraint for the ﬁrst period, we can solve for t :                       c
                                               pBk +  + (1 Æ)k
                                          ct =    t t
                                                    1+A
                                                               t
                                                                 :
256                                                                     Solutions to Exercises


Exercise 9.5
The derivatives are:

                               @it A
                               @t = 1 + A = 0:8; and:
                                  @ct = 1 = 0:2:
                                  @t 1 + A
The numbers correspond to the value A = 4 that is used for the simulations. Investment
reacts much stronger to shocks than consumption does, just as we observe in real-world
data.

Exercise 9.6
Figure S.5 shows consumption and investment, and Figure S.6 is GDP. Investment is much
more volatile than consumption. The relative volatility of consumption and investment
is comparable to what we ﬁnd in real data. We simulated the economy over 43 periods,
because there were also 43 years of data for German GDP. In the simulation there are nine
peaks, which is close to the ten peaks we found in the data. The length of the cycle varies
from four to seven years. The average length is a little less than ﬁve periods, while the
German cycles lasted a little more than four years on average.


              1.4


              1.2


                1


              0.8
                                                                      Consumption
              0.6                                                     Investment

              0.4


              0.2


                0
                     1      6    11    16   21   26    31   36   41
              -0.2


              -0.4



                         Figure S.5: Simulated Consumption and Investment


Exercise 9.7
The aim of real business cycle research is to gain a better understanding of business cycles.
The theory differs from other approaches mainly by the methods that are applied. Real
business cycle models are fully speciﬁed stochastic equilibrium models. That means that
the microfoundations are laid out in detail. There are consumers with preferences, ﬁrms
Exercises from Chapter 10                                                             257


                    1.8

                    1.6

                    1.4

                    1.2

                     1
              GDP




                    0.8

                    0.6

                    0.4

                    0.2

                     0
                          1   6    11    16    21       26    31   36    41

                                              Periods


                                  Figure S.6: Simulated GDP



with technologies, and a market system that holds everything together. Real business cycle
theory takes the simplest models of this sort as a point of departure to explain business
cycles. Model testing is most often done with the “calibration” method. This means that
ﬁrst the model parameters are determined by making them consistent with empirical facts
other than the business cycle facts that are supposed to be explained. The parameterized
model is then simulated, and the outcomes are compared with real world data.

Exercise 9.8
Plosser’s model does not contain a government, and even if there were one, there would
be no need to stabilize the economy. There are no market frictions in the model; the out-
comes are competitive equilibria. By the First Welfare Theorem we know that equilibria
are efﬁcient, so there is nothing a government could do to improve economic outcomes. It
is possible to extend the model to allow for a government, and we could add frictions to
the model to make intervention beneﬁcial, without changing the general framework very
much. Also, any government is certainly able to produce additional shocks in the econ-
omy. Still, real business cycle theory works ﬁne without a government, both as a source of
disturbance and as a possible stabilizer.


Exercise 10.1
  1. This is the myth of small business job creation again. The SBA has every reason to
     tout the inﬂuence of small small businesses, but, as DHS point out, the dominant job
     market role if played by large, old ﬁrms and plants.

  2. This rather entertaining quote has several immediate and glaring errors, but it does
     contain an argument quite in vogue at the moment. There is a common idea that
258                                                                              Solutions to Exercises


      jobs are a scarce resource, and that the pool of jobs is shrinking under pressure from
      greedy company owners, slave labor factories abroad and so on. In reality, as we’ve
      seen in this chapter, the pool of jobs is churning all the time. Ten percent of all jobs are
      typically destroyed in a year, and ten percent are created. In the face of this turmoil,
      one or two high proﬁle plant closings is simply not important.

Exercise 10.2
          g
The term est is deﬁned as:

                                     gest = 0:5(XXes;tes;t +XXes;tes;t 1 1) :
For a new plant   Xes;t 1 = 0 and for a dying plant Xes;t = 0. Thus for a new plant:
                                   gest = 0:5(XXes;t +0 0) = 2:
                                                  es;t
And for a dying plant:
                                             0 Xes;t 1
                                    gest = 0:5(0 + Xes;t 1 )
                                                             = 2:

Exercise 10.3
The only thing tricky about this problem is remembering how to deal with absolute values.
  a b         a b a
If = , then j j = if is positive and j j =     a        b a
                                               if is negative. For shrinking plants,  es;t      X
is negative, so for shrinking plants:

                                    gest = X es;t
                                            Zest   =
                                                     jXes;t j :
                                                       Zest
Now we work through the algebra required to get the answer to the ﬁrst identity. We begin
                       c
with the deﬁnition of st :

           cst = CZstst = Z1st Xes;t = Z1st ZestZX
                              X             X                 1 X
                                                             Zst Zest gest:
                                                      es;t
                                                           =
                            e2S +                 est  e2S +                    e2S +
Turning to the next identity, we begin with the deﬁnition of netst :
                               Cst Dst ;
                       netst =
                                  Zst
                                1 X                1 X
                             =
                               Zst e2S X   es;t
                                                  Zst e2S jXes;t j;
                                           +


                                1 X                 1 X
                             =
                               Z       Z est gest
                                                   Z      Zest( gest);
                                    st e2S +                    st e2S +
                                    1 X
                             =
                                 Zst e2S Zest gest :
Exercises from Chapter 10                                                                             259


Exercise 10.4
This question really just boils down to plugging the deﬁnitions of t and NETst into the    R
deﬁnition of covariance. However, the algebra shouldn’t detract from an interesting statis-
tical regularity. Begin with the deﬁnition of covariance (supplied in the question):

                                                                              R ; NETt) < 0:
                                                                         cov( t
                                                N
                                              1 X
                                              N i=1 (Ri R)(NETi NET ) < 0:
                              N
                           1 X
                           N        C Di C D)(Ci Di C + D) < 0:
                                 ( i+
                             i=1
                     N
                   1 X                               
                   N i=1 (Ci C ) + (Di D) (Ci C ) (Di D) < 0:
                                           N                                  N
                                         1 X                                  X
                                         N i=1 C C ) N i=1 (Di D) < 0:
                                                    2 1          2
                                                 ( i


Using the deﬁnition deﬁnition of variance supplied in the question, this last inequality can
               C        D<                    C <                 D
be written var( ) var( ) 0, so var( ) var( ). That was a lot of algebra, but it was all
straightforward. Thus if periods of large net job loss coincide with periods of larger than
normal job reallocation, it must be the case that job destruction has a higher variance than
job creation.


Exercise 10.5
Here is the original chart, now augmented with the answers.


               Year    X1;t    X   2;t    X3;t            c   t          dt       netst   UB    LB

               1990   1000          0     500

               1991    800     100        800          0.250          0.125       0.125   600   200

               1992   1200     200        700          0.263          0.053       0.210   600   400

               1993   1000     400        600          0.098          0.146   -0.048      500   100

               1994    800     800        500          0.195          0.146       0.049   700   100

               1995    400     1200       600          0.233          0.186       0.047   900   100

               1996    200     1400       600          0.091          0.091          0    400     0

               1997        0   2000       500          0.255          0.128       0.127   900   300
260                                                                  Solutions to Exercises


Exercise 10.6
All of these statements referred to speciﬁc charts or graphs in DHS. This question was on
the Spring 1997 midterm exam in Econ 203.

  1. Most students were at least able to say that this hypothesis wasn’t exactly true, even
     if they couldn’t identify speciﬁcally why. Any two of the following facts were accept-
     able:
      (a) Even the industries in the highest important ratio quintile had an import pene-
          tration rate of about 13.1%, which is pretty low.
      (b) The relationship between import penetration quintile and net job growth and
          job destruction is not monotone.
      (c) For the highest import penetration quintile, net job growth averaged        :
                                                                                   2 8% an-
          nually.
  2. Robots replacing workers is another favorite canard (thankfully less common re-
     cently) of the chattering classes. The reality is reﬂected in DHS Table 3.6 showing
     gross job ﬂows by capital intensity decile. The most fascinating part of this table is
     the ﬁnal entry, showing an average annual net employment growth rate of 0.7% for
     plants in the highest capital intensity decile. Plants in the lowest capital intensity
     decile shed about 10% of their jobs, net, each year. That is, over the 15-year sample
     period, they must have become nearly extinct. Thus high capital plants (plants with
     lots and lots of robots, one presumes) have been steadily adding excellent jobs of the
     past 20 years.
  3. What we were looking for here was some version of Figure 2.2 in DHS, giving the
     distributions of plant-level job creation and destruction by employment growth .         g
                                                                                  g
     They have a distinctive “double hump” shape with the ﬁrst peak at about = 0 10.      :
     However, we accepted more general statements about how most destruction occurs
     at plants which are shutting down and so on.
  4. This question is drawn directly from Table 3.6, showing that highly specialized plants
     have high job creation and destruction rates, and a net growth rate of -2%. Because of
     their high job destruction rate, and the tendency of plants to close in recessions (the
     cyclical behavior of job destruction), highly specialized plants are indeed at risk of
     closing in recessions.
  5. For this question we wanted students to tell us about job creation and destruction
     rates by wage quintile (Table 3.4 in DHS). Any two of the following facts were ac-
     ceptable:
      (a) Job creation and destruction are falling by plant wage quintile.
      (b) Of all jobs destroyed each year, only about 18% are accounted for by the highest
          wage quintile, while about 26% are accounted for by the lowest wage quintile.
      (c) High wage jobs tend to be more durable (longer creation persistence).
Exercises from Chapter 12                                                                 261


Exercise 11.1
                                          Y      LK
The aggregate production technology is = 3 :7 :3 , and we have         L = 150, Æ = 0:1, and
s    :
 = 0 2. The law of motion for capital is given by:

                                   Kt = (1 Æ)Kt 1 + sYt :
Therefore the steady state level of capital K̄ has to satisfy:

                               K̄ = (1 Æ)K̄ + s(3L0:7 K̄ 0:3):
Plugging in the values for labor, depreciation, and the saving rate yields:

                             K̄ = 0:9K̄ + (0:6)(150)0:7 K̄ 0:3; or:
                               0:1K̄ = (0:6)(150)0:7 K̄ 0:3 ; or:
                                K̄ = (10)(0:6)(150)0:71=0:7 :
Evaluating this expression results in K̄  1940. Steady state output Ȳ is given by:

                                       Ȳ = 3L0:7 K̄ 0:3;
which gives us the solution Ȳ  970.

Exercise 11.2
In terms of the Solow model, the war temporarily reduced the capital stock in Kuwait.
Given the lower capital stock, per capita incomes will be lower in the next years. In the
long run, the economy reaches the steady state again, so the war does not affect per capita
income any more. Similarly, the effect on the growth rate of per capita income is also
temporary. In the short run, the growth rate will be higher, because the growth rate of
per capita income is inversely related to the capital stock. In the long run, the growth rate
of per capita income is determined by the rate of technological progress, so the war does
not have an effect on the long-run growth rate. Recovery will be faster if foreigners are
allowed to invest, because more investment implies that the economy returns faster to the
steady state level of capital. The gains and losses of workers and capitalists depend on
the reaction of wages and the return on capital to a higher capital stock due to foreign
investment. Our formulas for wage and interest, equations (11.3) and (11.4), indicate that
the wage is positively related to the capital stock, while the return to capital is negatively
related to the capital stock. Since a prohibition of foreign investment lowers the capital
stock, workers would lose, and capitalists would gain by a prohibition.

Exercise 12.1
  1. True. Under an unfunded pension system payments to the old are made by taxing the
     young, not by investing in the bond market. Hence the volume of physical savings
     between periods of life is higher under a funded than an unfunded pension system.
                                                                          n
    2. Check the Economic Report of the President to get a good sense of , and the back of
                                                           r
       the Economist magazine to get the latest value for . Unless something very odd is
                  n
       happening, is probably considerably lower than .   r
262                                                                     Solutions to Exercises


  3. From the Economic Report of the President we see that (among others) the U.S govern-
     ment spends more than 20% of its total outlays on interest payments on the Federal
     debt, social security and defense. We shall have quite a bit more to say about the
     Federal debt in Chapter 14 and Chapter 18.

Exercise 12.2
The household’s budget constraint is:

                                  C + I + G = Y P + Y G:
We are given that private output Y P is ﬁxed at Y and that government output Y G is G.
Thus government spending G must satisfy:

                                    G = Y + G C I; or:
                             (1 )G = Y C I:

Obviously, as G grows, C and I are going to have to shrink (although not one-for-one with
G). The maximum allowed level for government spending occurs when consumption and
investment are each zero, so C = I = 0. In that case:

                                        G = 1 Y :
The government can spend more than total private output since its spending is productive.
                                G             Y                                   G
As is closer to zero, the closer must be to . As is closer to unity, the larger may be
           Y
relative to .
Exercise 12.3
To calculate the market-clearing interest rate, we have to ﬁnd the interest rate that makes
the household want to consume precisely its endowment stream net of government taxes.
                                                     t             C Y G
Since in this question consumption in each period must just be t = t         t , we ﬁnd that:
                                            1 U 0 (Y G)
                                  1 + r0 =
                                              U 0(Y G) ; so:
                                      r0 = ; and:
                                            1 U 0 (Y G0 )
                                  1 + r0 =
                                              U 0 (Y G ) :
                                                       1

We cannot characterize r further without more information about Y; G and U , but we can
                G >G
                          0
say that, since 0        1 , the marginal utility in the ﬁrst period must be greater than the
                                             U Y G >U Y G
marginal utility in the second period, that is, 0 (       0)
                                                                 0(     1 ). Thus:

                                       U 0(Y G0) > 1:
                                       U 0(Y G1)
            r >r
As a result, 0   0 . This ﬁts well with the results of this chapter, which hold that temporary
increases in government spending increase the real interest rate.
Exercises from Chapter 12                                                                            263


Exercise 12.4
The household’s maximization problem becomes:
                         n p                              p                                  o
                    max 2 (1
                     St
                                       )y St + 2                   rS
                                                              (1 + ) t + (1 + )     n y :
The ﬁrst-order condition with respect to t is:    S
                                                                p
                         p
                                  1
                                                  +p
                                                                    1+   r               :
                                   )y St                  rS                n y
                                                                                    =0
                           (1                         (1 + ) t + (1 + )

            S
Solving for t produces:


                          St = 1 + (12 (1+ +r)r) y                   r
                                                            (1 + ) + 1+
                                                            2          n
                                                                             r y:
                                      2
                                                                     1+r
                                                           1 + 2 (1 + )

                                                                         
Notice that private savings is (as usual) decreasing in . Also notice that the larger is             n
        r
relative to , the greater this effect. When       n>r
                                                 , contributions to the social security system
supplant private savings at a greater rate than in a funded system. The reason is because,
when  n>r   , the social security system is more attractive than private savings.

Exercise 12.5
  1. Grace trades consumption today for consumption tomorrow via schooling                       S (since
     there is no bond market). Her maximization problem is:

                                      max fln(1
                                       S
                                                          S ) + ln(AS )g :
                    ab       a            b
     Recall that ln( ) = ln( ) + ln( ). Hence the ﬁrst-order condition is:


                                            S + S = 0:
                                                      1
                                                  1

     Solving for Grace’s optimal schooling provides S = =(1 + ). In this setup, K1 = S .

  2. Now Grace’s problem becomes:

                                max fln(1
                                 S
                                                  S G) + ln[A(S + G)]g :
     The ﬁrst-order condition for maximization is:


                                                  S G + S + G = 0:
                                                  1
                                              1

     Thus Grace’s optimal schooling choice becomes:

                                              S = 1+             +    G:
                                                                1+
264                                                                              Solutions to Exercises


      Grace’s schooling is certainly decreasing in            G
                                                   (thus investment is, to a certain ex-
      tent, being crowded out). Grace’s human capital is 1 = +         K       S G
                                                                    , so substituting in
      provides:

                                    K1 = 1 +        +(        1)   G1 + :
      Notice that if<   1, the government is less efﬁcient at providing schooling than the
      private sector, and Grace’s human capital decreases in .             G
  3. Now Grace’s maximization problem becomes:

                                 max fln(1
                                  S
                                                  S ) + ln[A(S + G)]g ;
      since Grace does not have to pay a lump-sum tax in the ﬁrst period. The ﬁrst order
      condition is now:


                                                  S + S + G = 0:
                                              1
                                          1

      Grace’s optimal schooling choice is:

                                       S = 1+                G 1 +1 ;
      and her human capital becomes:

                                          K1 = 1 + (1 + G):
      Notice that Grace’s schooling is still being crowded out, but that her human capital
                      G
      is increasing in no matter what the value of , as long as      0.       >
Exercise 13.1
                        c`
  1. If the agent works, i ( i = 1) = 1  , while if the agent does not work, ci (`i = 0) = 0.
  2. If the agent works, ui (`i = 1) = 1       i while if the agent does not work, ui (`i =
     0) = 0. An agent will work if the utility of working is greater than the utility of not
     working, or if 1        i  0.

  3. From our previous answer, it is easy to see that  ( ) = 1  .

  4. We know that the fraction of agents with less than or equal to some number, say  ,
     is just  if 0    1. Thus aggregate labor supply as a function of the tax rate is
          `       
     just ( ) =  ( ) = 1    
                            . On each agent who works, the government collects revenue
                 
       . Thus T ( ) = (1    
                           ). This is sketched in Figure (13.1).

  5. There is a Laffer curve in the tax system.
Exercises from Chapter 13                                                                 265


Exercise 13.2
Brieﬂy, although such a result might be evidence for a Laffer curve, the regression does not
control for changes in real income over time. There may not truly be a Laffer curve, but
it would look like there was one if real incomes were high when taxes were low and low
when taxes were high.

Exercise 13.3
The point of this simple problem was to clear up the difference between the tax system
  a
H( ; ) and the government’s revenue function T ( ). This problem should also give you
some practice in thinking about exemptions.


                                                                              
  1. The parameters of the tax system are the choices of the ﬂat tax rate and the lump-
              S                                          L
     sum tax . The household chooses an effort level in response. Thus = [         ; S
                                                                                   ] and
      a L
       = here.

                        a
  2. The tax system H( ; ) maps household actions       a and tax system parameters       into
     an amount of tax:

                                   H(L; [; S ]) = S +  (L S ):
                                                                  S
      Recall that income directed towards the lump-sum tax is exempt from the ﬂat tax.
                                    L                         S
      We do not consider (yet) that is itself a function of and .     
  3. A household’s tax bill is always the same as the tax system. In this case, if the house-
                             L      S L S
     hold works an amount it owes + (              ).

  4. The household’s income as a function of L is just L. Hence the household consumes
     L H(L; [; S ]) or:
                         C = L [S +  (L S )] = (1  )(L S ):
  5. Substituting in to the household’s utility function gives:
                                            p
                                 U (C; L) = 2 (1  )(L S ) L:
      The ﬁrst-order condition for maximization with respect to       L is:
                                            1 
                                            L S = 1:
      (Where did the 2 go?) Solving for  L produces:
                                        L(; S ) = S + 1 :
      This gives the household’s optimal response to the tax system H. In the chapter we
                  a
      called this max ( ).
266                                                                                 Solutions to Exercises


  6. The government revenue function is the tax system with the household’s action                      a
     optimized out. That is:

                                      T (psi) = H [amax ( ); ] :
      In this case, this produces:

                                      T ([; S ]) =  (1  ) + S:
      Notice that there is a Laffer curve (as expected) in the tax parameter .           
For further practice: Assume that income spent on the lump-sum tax is no longer exempt
from the ﬂat tax. How do your answers change? You should be able to show that the Laffer
           
curve in vanishes.
Exercise 13.4
                               `                                         `
  1. If the household works , it raises gross income of and must pay a tax bill of                  `. It
     consumes the residual, (1    ) .`
                 c `; 
  2. Substitute ( ) into the household’s utility function to ﬁnd utility purely as a func-
     tion of labor effort. The household’s maximization problem becomes:
                                               n p                       o
                                      max 4
                                       `
                                                       (1       )` ` :
      Taking the derivative with respect to         ` gives the ﬁrst order condition for maximiza-
      tion:
                                               r
                                                   1                :
                                          2
                                                       `       1=0

      We can solve this to ﬁnd the household’s optimal choice of labor effort given taxes,
      `
      ( ):

                                               `( ) = 4(1  ):
  3. That government’s tax revenue is:

                                      T ( ) = `( ) = 4 (1  ):
                                                               =
  4. The government wishes to raise revenue of 3 4. We are looking for the tax rate                  that
     satisﬁes:

                                                   T ( ) = 3=4; or:
                                           
                                          4 (1          ) = 3=4:
                                                                             =; =
      Inspection reveals that there are two such tax rates: f1 4 3 4g. Since the government
      is nice, it will choose the lower tax rate, at which the household consumes more.
Exercises from Chapter 13                                                                       267


Exercise 13.5
                                                              r
In the question, you were allowed to assume that = 0 and that Tammy had an implicit
discount factor of = 1. These solutions are a little more general. To check your solutions,
                    r
substitute = 1 and = 0.

  1. In the ﬁrst period of life, Tammy earns an income of =            y w`
                                                                    of which she must pay
     w`   in taxes. Thus  her  income net of taxes is  (1        w`
                                                                 ). She  
                                                                        splits this between
                                                   c                   b
         1                                                     1
     consumption in the ﬁrst period of life, 1 and savings, . Thus:

                                      c1 + b  (1 1 )w`; and:
                                          c2  (1 + r)b:
                 b c=        r
     Notice that = 2 (1 + ) so we can collapse the two one-period budget constraints
     into a single present-value budget constraint. Thus:

                                      c1 + 1 +1 r c2  (1 1 )w`:
  2. Tammy’s Lagrangian is:
                                                                                         
                 L(c ; c ; `) = pc + pc
                     1   2       1            2    ` +  (1 1 )w` c1              1
                                                                                  1+   r c2 :
     This has ﬁrst-order conditions with respect to 1         c ; c2, and ` of:
                                            2
                                              p1
                                            1 1
                                                   c       = 0;

                                      2
                                        p1 2 1 +1
                                          c              r  = 0; and:
                                        1+    w(1       1) = 0:
     Manipulating each of these equations produces the system:
                                                   2
                                      c1 = 14 1 ;
                                                    2
                                           1 (1 + r)
                                      c2 = 4           ; and:

                                       = (1 1)w:
                                      1

     We can further manipulate these three equations, by substituting out the multiplier         
     to ﬁnd the optimal choices of consumption:

                                     c1 = 41 (1 1)2w2 ; and:
                                     c2 = 41 ((1 + r) )2 (1 1 )2w2:
268                                                                               Solutions to Exercises


                                         `
      We can ﬁnd labor effort by substituting the optimal consumption decisions (calcu-
      lated above) into the budget constraint. This will tell us how many hours Tammy
                                                                                        c ;c
      must work in order to earn enough (after taxes) to afford to consume 1 2 . The bud-
      get constraint is:

                          w(1 1 )` = c1 + 1 +1 r c2
                                          w2 (1 1)2 1 + (1 + r)2 2 
                                                              (1 + r)
                                       =
                                               4

                                       =
                                          w (1 1) (1 + (1 + r) 2 ); so:
                                            2       2

                                               4
                                          w (1 1 )
                                     ` = 4 (1 + (1 + r) 2 ):
      Notice that Tammy’s effort is strictly decreasing in 1 and that at 1 = 1, ` = 0. In other
      words, if the government taxes Tammy to the limit, we expect her not to work at all.
      This will induce a Laffer curve.
      Once we’ve ﬁgured out how much Tammy works, it’s an easy matter to deduce how
      much revenue the government raises by taxing her. The government revenue func-
      tion here is:

                                                 w` w                     r   :
                                                 2
                              T 1 ( 1 ) = 1 = 1 (14 1 ) [1 + (1 + ) 2 ]
                  
      In terms of 1 , this is just the equation for a parabola:
                                         H1 (1 ) = 1 (1 1 )(constant term):
                     =
      Hence 1 = 1 2, and:
                                                                    
                          H 1 (  ) =       1
                                                 (constant term) =
                                                                   w 2                
                                                                          1 + (1 + r) 2 :
                                1
                                             4                           16
      Thus there is a strict limit on the amount of revenue that the government can squeeze
                                                  
      out of Tammy. As the tax rate 1 increases, Tammy works less, although if 1       1 2,     < =
      the government collects more revenue.
  3. There is indeed a Laffer curve in this problem. We should have expected it the instant
                                                         `
     we saw how Tammy’s hours worked, , responded to the tax rate.

Exercise 13.6
Now Tammy is allowed to deduct savings held over for retirement. This is also known
as being able to save in “pre-tax dollars.” Almost all employers feature some kind of tax-
sheltered savings plan.

  1. Tammy’s tax bill at the end of period 1 is                2(wn b). Tammy faces a sequence of
     budget constraints:
                                                 c1 = (1 2 )(w` b); and:
                                                 c2 = (1 + r)b:
Exercises from Chapter 13                                                                             269


     Once again, we use the trick of         b = c2=(1 + r), so that Tammy’s present-value budget
     constraint becomes:

                                                    c1 = (1 2 ) w` cR2 ; so:
                                                                      


                              c1 + (1   2 ) 1 +1 r c2 = (1 2 )w`
                     
     Note that as 2 ! 1, Tammy’s ability to consume in the ﬁrst period of life goes to
     zero, but her ability to consume in the second period of life is unchanged.
  2. Tammy’s Lagrangian is:
                                                               
                L(c ; c ; `) = pc + pc                ` +  (1 2)w` c1            (1   c :
                                                                                        2)
                     1   2          1         2
                                                                                     1+r   2


     The ﬁrst-order conditions with respect to 1               c ; c2 and ` are:
                                              2
                                                p1
                                              1 1
                                                       c            = 0;
                                                  = 0; and:
                                          p1 11 + 2
                                        2   2 c  r
                                      1 + (1 2 )w = 0:

     We can write c1 and c2 easily as a function of :

                                             c1 = 412 ; and:
                                                           
                                             c2 = 42
                                                       2
                                                                 1+  r 2 :
                                                                1   2
     So it’s an easy matter to substitute out for               and calculate optimal consumption c1; c2.
     Thus:

                                         c1 = 14 w2 (1 2 )2; and:
                                         c2 = ( (1 + r)) w2 :
                                                        2

                                                           4
                 c                                
     Notice that 2 does not depend on 2 . We can substitute in the optimal consumptions
     above into the budget constraint to determine how many hours Tammy has to work
     to be able to afford her optimal consumption plan:

                         (1     2)w` = c1 + (1 2 ) 1 +1 r c2
                                      =
                                        w2 (1 2)2 + (1 2 ) 2(1 + r)w2 ; so:
                                        w     4
                                    ` = [(1 2 ) + (1 + r) ]:  2
                                                                 4

                                         4
270                                                                                Solutions to Exercises


      Notice from the ﬁrst line above that:

                                                w` = 1 c1 2 + b:
      The trick here is to substitute back into the right budget constraint. The ﬁrst couple
      of times I did this I substituted back into the budget constraint from Exercise (13.5)
      and got all sorts of strange answers. Notice that Tammy always consumes a certain
                    c                      
      amount of 2 , no matter what 2 is, so she always works a certain amount. However
                                                                               c
      this may not overturn the Laffer curve since she is paying for 2 with pre-tax dollars.

  3. Once again, this is a bit tricky. Remember that Tammy’s tax bill is 2 (           w` b) and that
      b c=          r
      = 2 (1 + ). Thus:

                        T 2 (2 ) = 2 (w` b)
                                    
                                   2 w`        c2 
                                               1+r
                               =
                                    
                               =   2 w`
                                                2
                                                         r w2 
                                                    (1 + )
                                                     4
                                                                                         
                                 2 w w4 (1 2 ) + w4 2 (1 + r)                    r w4
                                                                                      2
                                                                         2
                               =                                             (1 + )
                                             2
                               = 2 (1 2 )
                                             w :
                                                    4

      This was a matter of remembering to substitute into the right revenue equation. Al-
      though Tammy always works at least enough to ﬁnance a certain amount of con-
      sumption while old, this amount of income is tax-deductible, so the government can’t
      get at it.
            
      As 2 ! 1, government revenue goes to zero, as before. The maximizing tax rate, 2 ,             
               :
      is 2 = 0 5 and the maximum amount of revenue that government can raise is:

                                                    T 2 (2 ) = w16 :
                                                                   2




                         < T 1(1).
      Notice that T 2 ( 2 )

  4. There is still a Laffer curve present. Unfortunately for the government, tax revenue
     is now lower.

  5. Our answers are indeed different. Because Tammy is able to shelter some of her
     income from the government, total tax revenue will be lower.


Exercise 14.1
  1. About $5.2 trillion/$7 trillion.

  2. About 1.07 in 1945 (Barro p.362).
Exercises from Chapter 14                                                                           271


  3. About 0.38 in 1981 (Barro p.341).

  4. 3%.

Exercise 14.2
The consumer’s problem is thus:

                                  x1 ;x2
                                        x           x ;
                                  max fln( 1 ) + 2 g subject to:

                                    p t x           p t x M:
                                   ( 1 + 1) 1 + ( 2 + 2) 2 =

The two ﬁrst-order conditions for this problem are:


                                        x1 = (p1 + t1); and:
                                         1

                                         1 = (p2 + t2 ):


These ﬁrst order conditions plus the budget constraint can be used to solve for the three
           x         x                                                    p p t t
unknowns , 1 , and 2 in terms of the givens in the problem, 1 , 2 , 1 , 2 , and . Solving:      M
                                             x1 = pp2 ++ tt2 :
                                                    1      1
                                                     M
                                             x2 = p + t 1:
                                                    2      2



The government’s revenue function can be calculated accordingly:

                T (t1 ; t2 ; p1 ; p2 ; M ) = t1 x1 + t2 x2 = t1p(p2++tt2 ) + pt2+Mt      t2 :
                                                               1    1        2       2

Substitute the above demand functions for           x1 and x2 into the objective function to obtain
the household’s indirect utility:
                                                               
                     V (p1 + t1; p2 + t2 ; M ) = ln pp21 ++ tt21 p2M+ t2 + 1:

So at this point, we have found the government’s revenue function which tells us how
much the government can raise from taxes given that consumers respond optimally to the
given tax rates. By deriving the consumer’s indirect utility function, we know how con-
sumers compare different tax rates and income levels in utility terms.

Potentially the government is faced with the need to raise a certain level of revenue, .            G
It can raise this revenue a number of different ways by taxing the two goods in different
amounts with the constraint that in the end, it must have raised in revenues.    G
272                                                                          Solutions to Exercises


                                                                                     t ;t
A benevolent government could decide to choose the combination of taxes ( 1 2 ) such that
consumer utility is maximized, subject to the constraint that it raises the necessary revenue
G . The government’s optimal-tax problem would then be:

                            max
                            t1 ;t2
                                     V (p1 + t1; p2 + t2; M ); subject to:
                                       T (t1 ; t2 ; p1 ; p2 ; M ) = G;
                     M
and some given . Make sure you understand the intuition of this problem. Both the
indirect utility function and the government revenue function account for the fact that
households respond optimally to the given tax policy. Before you ever write down the
optimal tax problem, you must know how consumers will respond to any possible tax
                     t ;t
policy given by ( 1 2 ). Implicit in the indirect utility function and government revenue
function is the fact that consumers are responding optimally to their environment.

Exercise 14.3
The key to this problem is realizing that the household’s budget set will be kinked at the
          y     ;y
point f 1 T 1 2 T 2 g. For points to the left of this kink, the household is saving, and
the budget set is relatively ﬂat. For points to the right of this kink, the household is bor-
rowing, and the budget set is relatively steep. The government’s optimal plan will be to
levy very low taxes initially and then high taxes later, in essence borrowing on behalf of
the household.


    1. If the household neither borrows nor lends, it consumes:

                                             c1 = y1 T 1; and:
                                             c2 = y2 T 2:
      This is the location of the kink in the budget constraint: to consume more in period
      t          y                                                               r
        = 1 than 1 T 1 , it will have to borrow at the relatively high rate 0 and the budget
                                      r
      set will have a slop of (1+ 0 ). The government will be able to move the kink around,
      increasing or decreasing the number of points in the household’s budget set.

    2. For convenience, all of the answers to the next three questions are placed on the same
       set of axes (below). The solid line gives the answer to the ﬁrst question.

    3. The dotted line gives the answer to this question. Notice that the household has more
       points to choose from.

    4. The dashed line gives the answer to this question. Notice that the household has
       fewer points to choose from.

    5. The government chooses T 1 = 0, in essence borrowing at the low interest rate          r on
       behalf of the household.
Exercises from Chapter 15                                                                               273


                                                     Budget Sets
                         1.4



                         1.2



                          1



                         0.8
                       c2


                         0.6



                         0.4



                         0.2



                          0
                           0   0.1   0.2       0.3   0.4    0.5   0.6     0.7   0.8       0.9   1
                                                            c1


Exercise 14.4
In this question the government runs a deﬁcit of unity in the ﬁrst period (period = 0),             t
because expenditures exceed revenues by exactly unity. In all subsequent periods, govern-
ment revenues just match direct expenditures in each period, but are not enough to repay
the interest cost of the initial debt. As a result, the government will have to continually
roll over its debt each period. Under the proposed plan, the government has not backed
the initial borrowing with any future revenues, so it does not ever intend to repay its debt.
From the government’s ﬂow budget constraint, assuming that g 1 = 0:                       B
                                           B0g = G0 T 0 = 1:
                                           B1g = 1 + r:
                                           B2g = (1 + r)2 :
                                             .. ..
                                              . .
                                           Bg = (1 + )t
                                            t               r :
So the government debt level is exploding. Substituting in to the transversality condition,
we get:

                        t!1
                                     r B
                         lim (1 + ) t tg = lim (1 + ) t (1 + )t = 1
                                           t!1
                                                                    r                 r         :
Since the limit does not equal zero, we see that the government’s debt plan does not meet
the transversality condition.


Exercise 15.1
The Lagrangean is:

                         L = (cPw ) (cPb )1          + [ P m           cPw pw + cPb pb]:
274                                                                             Solutions to Exercises


The ﬁrst-order conditions are:

(FOC Pc
     w)                     c
                           ( P       c
                               ? 1 P ? 1 + ?[
                             w ) ( b )            p  ;
                                                w ] = 0 and:
(FOC Pc
     b)                      c
                            ( P ?
                              w ) (1   )( P ?  c?   p :
                                          b ) + [ b] = 0
Combining these to get rid of ? yields:

                     (cPw ) (cb )
                         ? 1 P? 1          (cP ?
                                             w ) (1    )(cP ?
                                                          b ) ; or:
                             pw          =
                                                    pb
                                     pw = cb :  P ?
                                     p (1 )cP ?
                                         b              w
                c
Solving this for P ?
                 b and plugging back into the budget equation gives us:
                                                       ?
                             c pP ? + (1           pc
                                                  ) w P
                                                      w         pb = mP :
                                w w               pb
After some algebra, we get the ﬁrst result:

                                             cPw? = pmw :
                                                       P


                                                                            b
When we plug this back into the budget equation and solve for P ? , we get the other result:

                                     cPb ? = (1 pw)m :
                                                            P


Exercise 15.2
  1. See Figure S.7.

  2. See Figure S.7.

                                         p =p
  3. From the graph, we know that w b = 3. Suppose the relative price is less than
     3. Then only Pat will make wine, and supply will be 4 jugs. Plugging 4 jugs into
                                                            p =p
     the demand function gives a relative price of w b = 7 2, but 7 2       =     = >
                                                                            3, which is a
     contradiction, so the equilibrium relative price can’t be less than 3.
      By a similar argument, you can show that the equilibrium relative price can’t be more
      than 3.

  4. Pat makes (i) 4 jugs of wine and (ii) 0 jugs of beer. Chris makes (iii) 1 jug of wine and
     (iv) 1 jug of beer.

                                                             < 6.
  5. Pat has an absolute advantage in wine production, since 2

  6. Pat has a comparative advantage in wine production, since 2=1 < 6=2. Chris makes
      wine anyway, since the equilibrium price is so high.
Exercises from Chapter 17                                                               275



                        pw
                        pb   6         A
                        3               At
                                         A
                                                       QSw
                                          A
                                               A
                                                A
                                                 A
                        2                         A
                                                         A
                                                          A
                                                              A
                                                               A   QDw
                                                                          -
                                   4       5                  Q = # of jugs
                Figure S.7: The Supply of Wine by Pat and Chris Together



Exercise 17.1
We know that:


                                       r F 1 1(1 + r1 ) :
                                  1+ 2 =

We can manipulate this to produce:

                                  r2 = F                   Fr1 :
                                                         1 
                                                   1

                                               r
This is an interesting result. Essentially, 2 is the net return on turnips held until period
t= 2 (that is theF    1 term) minus a risk premium term that is increasing in 1 . r
Exercise 17.2
  1. The bank’s assets are the value of the loans outstanding net of loss reserve, in other
     words, the expected return on its loans. The bank’s liabilities are the amount it owes
     its depositors. Considering that the bank must raise a unit amount of deposits to
                                                                              r
     make a single loan, this means that the bank must pay 1 + to make a loan. Thus the
     bank’s expected proﬁts are:

                                    pS x + (1                px
                                                             ) R         r:
                                                                     (1 + )

      That is, the bank getsx only if the borrower does not default.
    2. Now we solve for the lowest value of x which generates non-negative expected prof-
276                                                                       Solutions to Exercises


      its. Setting expected proﬁts to zero produces:
                                 pS x + (1     px          r;
                                              ) R = (1 + ) so:

                                             x r;               r
                                                                    p :
                                             ?( ) =       1+
                                                       p
                                                       S (1
                                                         +     ) R
      Since safe borrowers repay more frequently than risky ones because:
                                              pS > pR ;
                          x
      the amount repaid, , is decreasing as the mix of agents becomes safer, that is, as
                                 x
      increases. As expected, is increasing in the interest rate .  r
  3. We assumed that agents are risk neutral. Thus if the project succeeds (with probabil-
          p
     ity S ), a safe agent consumes S        x r;                                           p
                                                 ? ( ) and a risky agent (with probability R )
     consumes R      x r;
                         ? (   ). If the project fails, agents consume nothing. Their expected
     utilities therefore are:
                                     V r p 
                                      S( ) = S[ S    x r; ;
                                                         ? ( )] and:
                                     V r p 
                                      R( ) = R[ R    x r; :
                                                         ? ( )]

     Where ? (x r;                                   x                        p p
                     ) is the equilibrium value of . Notice that since S S = R R and
      p >p
       S                            V
             R that we can write S and R as:V
                                   V r V r p p x r; :
                                     R( ) = S ( ) + ( S
                                                                ?
                                                             R) ( )
     Thus at any given interest rate r > 0, the expected utility of risky borrowers is greater
     than the expected utility of safe borrowers, VR (r) > VS (r).
  4. Since VR (r) > VS (r), it is easy to see that if VS (r) > 0 then VR (r) must also be greater
     than zero. Next we ﬁnd r? such that VS (r? ) = 0. Substituting:

             0 = VS (r? ) = pS [s x? (r? ; )] = pS S (1 + r? )
                                                                           pS
                                                                     pS + (1 )pR ; so:
                                      1 + r? = S + S (pS pR ):
     At interest rates above r? all safe agents stop borrowing to ﬁnance their projects.
     Realizing this, banks adjust their equilibrium payments to: x? (r; = 0), so (1 + r)=pR .

Exercise 17.3
If the revenue functions ( x;  ) all shift up by some amount, then, for any given interest
      r
rate , intermediaries can make loans to agents with higher audit costs. That is, ? ( )           r
also shifts up as a result. This shifts the demand for capital up and out, but leaves the
supply schedule untouched. As a result the equilibrium interest rate increases, as does the
equilibrium quantity of capital saved by type-1 (worker) agents. As a result, type-1 agents
work harder, accumulate more capital and more type-2 (entrepreneurial) agents’ projects
are funded so aggregate output goes up. Type-1 agents are made better off by the increase
in the interest rate because their consumption goes up (although they are working harder
too). Type-2 agents who had been credit rationed are made better off, but type-2 agents
who previously had not been credit rationed are made worse off because the interest rate
paid on their loans goes up.
Exercises from Chapter 17                                                              277


Exercise 17.4
This question uses slightly different notation from that used in this chapter. Most both-
                                 r
ersome is probably the fact that here denotes the gross interest rate, which elsewhere is
           r
denoted 1 + . This question is a reworking of the model of moral hazard from this chapter.
This question was taken directly from the Spring 1998 Econ 203 ﬁnal exam.

  1. A rich Yalie can ﬁnance the tuition cost of Yale from her own wealth (that is,a>   1).
     If she gets the good job, she consumes + (  w ra    1), if she does not, she consumes
     ra
      (    1). Hence her maximization problem is:
                            
                      max     [w + r (a    1)] + (1   )[r(a   1)]
                                                                       w 2  :
                                                                          2
     The ﬁrst-order condition with respect to  is:
                                          w w  = 0:
     We can easily solve this to ﬁnd that  = w.
  2. Poor Yalies are required to repay an amount x only if they land the good job. Hence
     if they land the good job, they consume w x, while if they go unemployed, they
     consume 0. Thus their optimization problem may be written as:
                                   
                             max       (w x) + (1 )  0       w 2  :
                                                                  2
                                                    is now:
     The ﬁrst-order condition with respect to effort

                                           w x w  = 0:
     We can solve this to ﬁnd the optimal effort as a function of repayment amount:

                                        (x) = 1 wx :
                                                     


     Notice that effort is decreasing in x.
  3. Yale University must also pay r to raise the funds to loan to its students. If it is
     making these loans out of its endowment, then it is paying an opportunity cost of r.
     A student of wealth a < 1 needs a loan of size 1 a, which costs Yale an amount
     r(a 1). Thus Yale’s proﬁt on this loan is:
                                 x(x) + 0  [1 (x)] r(a 1):
     But we know  (x) from the previous question, so:

                                     x 1 wx r(a 1):
                                               


     This is the usual quadratic in x.
278                                                                    Solutions to Exercises


  4. Yale’s “fair lending policy” guarantees that all borrowers pay the same interest rate,
                                            x                                  xa
     regardless of wealth. Since we know ( ) from above, and we are given ( ), it is an
                              a
     easy matter to calculate ( ):

                                       ( a) =       r
                                                     w (1 a):
                                        r                         a
      Notice that effort is decreasing in and increasing in wealth .

                                            a         
  5. Here we are supposed to show that ( )  ? from above, where ? = . If            1  a<
     then 1   a> 0, and  r>0 and    w>
                                    0 by assumption. It’s easy to see that this must be
     true.

  6. Now we are supposed to show that Yale’s proﬁts are negative on loans and that poor
     borrowers cost it more than richer borrowers. The fair lending policy charge all bor-
     rowers the same interest rate. Further, this interest rate guarantees Yale zero proﬁts
     assuming that they exert effort. Poor borrowers will exert less than effort, and so
     Yale will lose money. Return to Yale’s proﬁt function:

                                       (a)x(a) r(1 a):
                        a         xa
      Substituting in for ( ) and ( ) we get:
                              h     r (1 a)i  r(1 a)  r(1 a):
                                    w
      We can manipulate this to produce:

                                             [ (1r    a)]2 :
                                                     w
                                                                                     a
      All other terms canceled out. This is certainly negative, and increasing in . Thus
                                                           a
      Yale loses no money on “borrowers” of wealth = 1, and loses the most money on
                          a
      borrowers of wealth = 0.


Exercise 18.1
This question has been given on previous problem sets. In particular, we have amassed a
few years’ data on students currency holding habits.


  1. According to Friedman and Schwartz, the stock of money fell 33% from 1929 to 1933.
     Household holdings of currency increased over the period.

  2. Real income fell by 36% over the same period and prices decreased.

  3. From the Barro textbook: Real interest rates have been negative in the years 1950-51,
     1956-57 and 1973-79. Inﬂation was negative in 1949 and 1954.
Exercises from Chapter 18                                                               279


  4. From the Barro textbook: There is evidence in looking cross-sectionally at different
     countries that changes in money stocks are positively correlated with changes in
     prices, or inﬂation. Long run time-series evidence demonstrates a positive correla-
     tion between money growth and inﬂation as well.

  5. From the Porter article on the location of U.S. currency: The stock of Federal Reserve
     notes outside of banks (vault cash) at the end of 1995 was about $375 billion, or about
     $1440 per American. Nobody had quite this much cash on them, although some
     students were carrying over $100. I assume these students were well trained in self-
     defense. According to Porter, between $200 and $250 billion, that is, more than half,
     was abroad, primarily in the former Soviet Union and South America.

  6. Generally people keep their money in low interest assets because they are liquid and
     provide transactions services. It’s tough to buy lunch with shares of GM stock rather
     than Hyde Park bank checks.

  7. Sargent states that inﬂation can seem to have momentum if people have persistent
     expectations that the government will continue to pursue inﬂationary ﬁscal and mon-
     etary policies.

  8. Since currency is a debt of the government, whenever the government prints money,
     it is devaluing the value of its debt. This is a form of taxation and the value by
     which its debt is reduced is called seignorage. The government obtained $23 billion
     in seignorage in 1991.

  9. The quantity theory is the theory that the stock of money is directly related to the
     nominal value of output in the economy. It is usually written as the identity:

                                          M = PY=V
     where  M                      P                        Y
                is the money stock, is the price level, and is the real amount of output.
                                                                V
     It is an accounting identity in that the velocity of money, , is deﬁned residually as
     whatever it takes to make the above identity true.

 10. A gold standard is a monetary system where the government promises to exchange
     dollars for a given amount of gold. If the world quantity of gold changes (for exam-
     ple, gold is discovered in the Illinois high country) then the quantity of money also
     changes. Our current monetary system is a ﬁat system, where money isn’t backed by
     any other real asset. It is simply money by “ﬁat”.

Exercise 18.2
Government austerity programs involve reducing government expenditures and increas-
ing tax revenue. Both cause immediate and obvious dislocations. Governments typically
reduce spending by ﬁring lots of government workers, closing or privatizing loss-making
government-owned industries and reducing subsidies on staples like food and shelter.
Governments increase revenue by charging for previously-free services and pushing up
the tax rates. From the point of view of a typical household, expenses are likely to go up
280                                                                     Solutions to Exercises


while income is likely to fall. Thus austerity programs can indeed cause immediate civil
unrest.

On the other hand, we know that subsidies are a bad way to help the poor (since most of
the beneﬁt goes to middle-class and rich households), that state-owned businesses tend to
be poorly run, depressing the marginal product of workers and tying up valuable capital
and that bloated government bureaucracies are rarely beneﬁcial.

Leave all this to one side: the fact is that no government willingly embarks on an austerity
program. They only consider austerity when they are forced to choose between austerity
and hyperinﬂation. Like Germany in 1921, an austerity program has to be seen as better
than the alternative, hyperinﬂation. The central European countries in the early 1920s tried
both hyperinﬂation and austerity, and found austerity to be the lesser of the two evils. That
early experience has since been conﬁrmed by a host of different countries. Austerity may
indeed be painful, but it is necessary in the long run and better than hyperinﬂation.

Exercise 18.3
  1. We know that the money supply must evolve to completely cover the constant per-
                           d
     capita deﬁcit of . So we know that:
                                           Mt Mt 1 = Dt = dNt:
      (S.10)
                                              Pt
      We know from the Quantity Theory of Money given in the problem that:

      (S.11)                                  Pt = MYtt = M
                                                          Nt :
                                                            t

      Thus we can put equations (S.10) and (S.11) together to produce:

                                      dNt = Mt MM t
                                                    t 1
                                                        = Nt
                                                             Mt Mt 1 ; so:
                                                               Mt
                                                 Nt
                                        d = Mt MMt t 1 ; so:
                                     Mt 1 = d; and:
                               1
                                     Mt
                                     Mt
                                     Mt 1 = 1 d :
                                              1
      (S.12)

               M
      Thus t = [1 (1   =       d M
                          )] t 1 . This gives us an expression by how much the total stock
      of money must evolve to raise enough seignorage revenue to allow the government
                                                 d
      to run a constant per-capita deﬁcit of each period.
  2. To answer this question we will use the quantity-theoretic relation, equation (S.11)
                                   d
     above and the effect of on the evolution of money in equation (S.12) above to a ﬁnd
                   d                              P P
     a value for at which prices are stable, that is, at which t = t 1 . Notice that:
                    Pt = Mt=Nt = Nt 1 Mt = 1 Mt = 1 1 :
      (S.13)
                   Pt 1 Mt 1=Nt 1 Nt Mt 1 1 + n Mt 1 1 + n 1 d
Exercises from Chapter 19                                                                   281


        P =Pt 1 = 1 then, continuing from (S.13):
      If t


                                              n 1 d = 1; so:
                                          1         1
                                         1+
      (S.14)                                      d = 1 +n n :
                                                                                      n=
      By (S.14) we see that the government can run a constant per capita deﬁcit of (1 + )    n
                                                                   n
      by printing money and not cause any inﬂation, where is the growth rate of the
      economy/population (they are the same thing in this example).
         n                                                               n
   3. As ! 0, the non-inﬂationary deﬁcit also goes to zero. At = 1 (the economy
                                                                                      =
      doubles in size every period) the non-inﬂationary per-capita deﬁcit goes to 1 2. That
      is, the government can run a deﬁcit of 50% of GDP by printing money and not cause
                                                n       :                     d     : =:
      inﬂation. At the supplied estimate of = 0 03, the critical value of is 0 03 1 03 or
      about 0.029 or 2.9% of GDP.
   4. From equation (S.13) above, if   d = 0 then:
                                        Pt
                                       Pt 1 = 1 + n < 1; so:
                                                  1


                                          Pt = 1 +1 n Pt 1; and:
                                          Pt < Pt 1 :
      So there will be deﬂation over time—prices will fall at the rate .n
Exercise 18.4
Although we will accept a variety of answers, I will outline brieﬂy what we were looking
for. As with the central European countries in 1921-23, Kolyastan is politically unstable
and in economic turmoil. Many of the same policies that worked in those countries should
also work in Kolyastan. The government should move quickly to improve its tax collection
system and radically decrease spending. This will probably mean closing down state-run
factories and ending subsidies. The argument, often advanced, that such direct measures
will hurt the citizens ignores the fact that the people are already paying for them through
the inefﬁcient means of the inﬂation tax. With its ﬁscal house in order, the government
should reform the monetary sector by liberating the central bank, appointing a dour old
man to be its head and undertaking a currency reform. For these changes to be credible,
Kolyastan must somehow commit not to return to its bad old ways. It could do so by
signing treaty agreements with the IMF, World Bank or some other dispassionate outside
entity. Further, it should write the law creating the central bank in such a way that it is more
or less independent from transitory political pressures. The bank ought to be prohibited
from buying Kolyastani Treasury notes.

Exercise 19.1
  1. True: The CPI calculates the change in the price of a market-basket of goods over
     fairly short time periods. If one element of that basket were to increase in price dra-
282                                                                     Solutions to Exercises


      matically, even if they were compensated enough to buy the new market basket, con-
      sumers would choose one with less of the newly-expensive good (substituting away
      from it).
  2. Inﬂation is bad because it leads consumers to undertake a privately useful but so-
     cially wasteful activity (economizing on cash balances). The Fed cannot effectively
     ﬁght inﬂation with short-term actions, it must maintain a long-term low-inﬂation
     regime.

Exercise 19.2
The slope of the Phillips curve gives the relative price (technological tradeoff) between
inﬂation and unemployment. If inﬂationary expectations are ﬁxed, the government can
achieve a higher utility if it does not have to accept more inﬂation for lower unemployment.
In other words, if the Phillips curve is ﬂatter. It is interesting to note that a perfectly ﬂat
Phillips curve would mean that unemployment was purely a choice of the government and
did not affect inﬂation at all. If the government and the private sector engage in a Nash
game, the Nash outcomes inﬂation rate is directly proportional to , so low values of
mean lower Nash inﬂation.
Exercise 19.3
The point of this question was bested summed up by Goethe in Faust. His Mephistopheles
at one point describes himself: “That Power I serve / Which wills forever Evil / And does
forever good.” Or as Nick Lowe put: “You’ve got to be cruel to be kind.” The higher is     
the higher the inﬂation rate, but unemployment is only marginally lower (depending on
expectations).

  1. The government’s maximization problem is:
                                        
                                  max
                                   
                                            (u + e     )2  2 :
      We can solve this to ﬁnd:

                                  0 () = 1 + 2 u + 1 +  2 e:
                                                              2




      Thus the optimal inﬂation choice is increasing in . 
  2. The corresponding unemployment rate is:

                                  u0() = 1 +1 2 u + 1 +  2 e :
  3. Now we assume that government continues to take expectations as ﬁxed, but that
     the private sector adjusts its expectations so that they are perfectly met. Recall that,
                          
     given expectations e , the government’s optimal inﬂationary response is:

                                     = 1 + 2 u + 1 +  2 e :
                                                           2
Exercises from Chapter 19                                                                  283


     Now deﬁne     1 as:
                                    1 = 1 + 2 u + 1 +  2 1:
                                                            2




     We can solve this for   1 to ﬁnd:
                                               1 =  u:
     The associated unemployment rate is u1 = u , since  e =  in this case.
  4. Given that agents form expectations rationally, eventually  e will converge to  . If the
     government is playing Ramsey (because it has a commitment device), then  = 0 and
     u = u no matter what  is. If the      government is playing Nash, then unemployment
     is still at the natural rate, u = u , but inﬂation is  =  u . Thus the lower the value
     of , the lower the Nash inﬂation rate. The point of this question is that if  = 0, the
     Nash and Ramsey inﬂation rates coincide. Having  = 0 is an effective device with
     which to commit to low inﬂation.
Exercise 19.4
Think of the dynamics in this question as sliding along the government’s best response
curve, as depicted in Figure 19.2. Expectations will creep up, always lagging behind actual
inﬂation, until the gap between the two vanishes and the private sector expects the Nash
inﬂation, and the government (of course) delivers it.

               t                                    
  1. In period , given inﬂationary expectations te , the government solves:
                                       
                                 max
                                  t
                                           fu? + (te t )g2 t2 :
     The government’s optimal choice is:

                                   t? (te) = 1 + 2 u? + 1 + 2 e :
                                                             2




  2. Since expectations are just last period’s inﬂation rate, and since we know that the
                                                        
     government inﬂation policy rule is given by t? above, the dynamics of the system
     are given by the pair of equations:

                           t = A(u? + te); for all t = 0; 1; : : : ; 1; and:
                          te = t 1; for all t = 1; 2; : : : ; 1:
     Recall that initial inﬂationary expectations are 0e = 0. We can substitute out the
     expectations term to produce a single law of motion in inﬂation:

                          t = Au? + At 1; for all t = 1; 2; : : : ; 1:
     For notational convenience we have deﬁned A = =(1 + 2 ).
284                                                                           Solutions to Exercises


  3. Since expectations start at zero, the ﬁrst period’s inﬂation rate is:
                                             0 = Au?:
      Where is as deﬁned above. Thus in the ﬁrst few periods inﬂation evolves as:
         0 = Au?:
         1 = Au? + A0 = Au? + A2u? = Au?(1 + A):
         2 = Au? + A1 = Au? + (1 + A) A2u? = Au?(1 + A + ( A)2):
         3 = Au? + A2 = Au? + Au(1 + A + ( A)2) = Au?(1 + A + ( A)2 + ( A)3):
      The pattern ought to be pretty clear. In general, inﬂation in period t will be:
                                                     t
                                                     X
                                         t = Au?          (    A)i:
                                                     i=0
      So as time moves forward, we have:
                                                       1
                                                       X
                                      lim
                                     t!1
                                            t = Au?             (   A) i :
                                                           i=0
      We can solve the summation using the geometric series to get:

                                                      A u?:
                                         t!1 t 1
                                          lim =
                                                        A
      Recall that we deﬁned   A to be:
                                             A = 1 + 2:
      So we can further simplify to get:

                                            t!1 t
                                             lim =            u?:
      This is just the Nash inﬂation rate. Expectations are also converging to this level, so
      at the limit, unemployment will also be at the Nash level of the natural rate ? .    u
      Given that inﬂationary expectations were initially low, the government was able to
      surprise the private sector and push unemployment below its natural level. Over
      time the private adapted its expectations and as expected inﬂation rose, so did un-
      employment. Thus the time paths of inﬂation and unemployment are both rising
      over time, until they achieve the Nash level.
  4. The steady-state levels of inﬂation and unemployment are not sensitive to the initial
     expected inﬂation. If the private sector were instead anticipating very high inﬂation
     levels at the beginning of the trajectory, the government would consistently produce
     surprisingly low inﬂation levels (but still above the Nash level) and the unemploy-
     ment rate would be above its natural rate. Over time both inﬂation and unemploy-
     ment would fall to their Nash levels.
Exercises from Chapter 19                                                                                                     285


  5. The government’s optimal choice of inﬂation in period , t , now becomes:                         t
                              ?                     Au
                       t = ( + t 1 + t ) for all = 1 2             
                                                                   1         " ;            t         ; ;::: ; :
     Since the shock term is mean zero, over time we would expected the inﬂation rate
     to settle down in expectation to the same level as before, although each period the
     shock will push the inﬂation rate above or below the Nash level. In Figure (c19:fa3)
     we plot the mean and actual trajectories for inﬂation and unemployment.

                                                                   Inflation and Unemployment
                                0.4


                                0.3
                       inflation πt




                                0.2


                                0.1


                                      0
                                          0   20    40        60        80    100     120       140         160   180   200



                            0.1
          unemployment ut




                     0.05



                                  0
                                   0                     50                  100                      150               200
                                                                             time t


Figure S.8: The dotted line gives the actual time paths for inﬂation and unemployment
with adaptive expectations when there is a mean-zero i.i.d. Normal shock to the Phillips
curve, while the solid lines give the same thing with the shock turned off.


Exercise 19.5
As in the previous question, the dynamics of expectations and inﬂation are given by the
system:
                               ?    e          Au  ;
                       t = ( + t ) for all = 0 1 t ; ;::: ; ;
                                                         1 and:
                      t
                       e=
                             t 1 for all = 1 2 Æ ;   t
                                               ; ;::: ; :
                                                   1
Recall that initial inﬂationary expectations are deﬁned to be 0e = 0. Again, the term A is
deﬁned to be:
                                                                       A = 1 + 2:
286                                                                          Solutions to Exercises


We can substitute out the expectations term above to determine the law of motion for in-
ﬂation:

                         t = Au? + ÆA t 1 ; for all t = 1; 2; : : : ; 1:
                                                                                   
Eventually this will converge to a steady-state level of inﬂation, at which t+1 = t =          1.
Substituting in:

                                          1 = Au? + Æ A1 :
Solving for   1 produces:
                                          1 = 1 AÆ A u?:
The associated inﬂation rate,   u1, is:
                                          u1 = 11 Æ AA u?:
               Æ                                                  Æ
Notice that if = 1 this is just the normal Nash outcome. As moves closer to zero, so that
the private sector puts more and more weight on the government’s (utterly mendacious)
announcement, inﬂation and unemployment both fall.



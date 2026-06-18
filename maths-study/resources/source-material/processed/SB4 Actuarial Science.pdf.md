---
normalized_id: shared-pdf-reference-sb4-actuarial-science
exam_code: SHARED
material_scope: sb4 actuarial science.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/SB4 Actuarial Science.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-sb4-actuarial-science

      SB4
Actuarial Science

        Jethro Green
   Department of Statistics
    University of Oxford




          MT 2018
         version 7.1
                            SB4
                      Actuarial Science
                                    16 lectures MT 2018

Aims

This unit has been designed as an introduction to financial mathematics, to introduce
the concepts of risk, and to explain the foundations of insurance. The course extends
the concepts of expected present value to encompass expected utility theory. It provides
an introduction to the syllabus of the professional exams of the Institute & Faculty of
Actuaries.


Synopsis

Fundamental nature of actuarial work. Use of generalised cash flow model to describe
financial transactions. Time value of money using the concepts of compound interest and
discounting. Interest rate models. Present values and accumulated values of a stream
of equal or unequal payments using specified rates of interest. Interest rates in terms of
different time periods. Equation of value, rate of reunion of a cash flow, existence criteria.
Single decrement model. Present values and accumulated values of a stream of payments
taking into account the probability of the payments being made according to a single
decrement model. Annuity functions and assurance functions for a single decrement
model. Risk and premium calculation.
Liabilities under a simple assurance contract or annuity contract.
Theories of value, St Petersburg Paradox, statement of expected Utility Theory (EUT)
and Subjective Expected Utility (SEU) representation theorems.
Risk aversion, the Arrow-Pratt approximation, comparative risk aversion, classical utility
functions.
First and second order stochastic dominance, the Rothschild-Stiglitz Proposition. Mossin’s
Theorem, static portfolio choice.
Consumption and saving. Felicity function and prudence. Time consistency. Desynchro-
nisation.


Acknowledgements

This course is based on the material prepared for previous years’ BS4a and BS4b by
Matthias Winkel and Daniel Clarke, of the Department of Statistics, University of Oxford.
The responsibility for any errors or omissions remains my own.

Jethro Green, Oxford, 2018
Reading

  • J. J. McCutcheon and W. F. Scott: An Introduction to the Mathematics of Finance.
    Heinemann (1986)
  • S. Garrett: An Introduction to the Mathematics of Finance: A Deterministic
    Approach. Butterworth-Heinemann (2013). This is the second edition of McCutcheon
    and Scott.
  • L. Eeckhoudt, C. Gollier and H. Schlesinger: Economic and Financial Decisions
    under Risk. Princeton University Press (2005), especially Chapters 1 – 6.
  • C. Gollier: The Economics of Risk and Time. MIT Press (2001), especially Chapters
    1 – 4, 15 – 16.
  • P. Zima and R. P. Brown: Mathematics of Finance. McGraw-Hill Ryerson (1993)
  • N. L. Bowers et al : Actuarial Mathematics, 2nd edition , Society of Actuaries (1997)
  • H. Gerber: Life Insurance Mathematics, 3rd edition , Springer (1997)
  • J. Danthine and J. Donaldson: Intermediate Financial Theory. 2nd edition, Academic
    Press Advanced Finance (2005)
  • M. Milevsky: The Calculus of Retirement Income, Cambridge University Press
    (2006), especially Chapter 12
  • R. Vaitilingham, The Financial Times Guide to Using the Financial Pages. Financial
    Times/Prentice Hall (2010). A useful reference book to explain jargon, and more
    reliable than wikipedia.
  • CM1: Actuarial Mathematics Core Reading. Faculty & Institute of Actuaries,
    www.actuaries.org.uk
Contents

1 Cashflow modelling and compound interest                                                   2
  1.1   The generalised cash-flow model . . . . . . . . . . . . . . . . . . . . . . .        2
  1.2   Examples . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       3
  1.3   Simple versus compound interest . . . . . . . . . . . . . . . . . . . . . .          5
  1.4   Nominal and effective rates . . . . . . . . . . . . . . . . . . . . . . . . . .      7
  1.5   Discount factors and discount rates . . . . . . . . . . . . . . . . . . . . .        8

2 Valuing cash-flows                                                                         9
  2.1   Accumulating and discounting in the constant-i model . . . . . . . . . .             9
  2.2   Time-dependent interest rates . . . . . . . . . . . . . . . . . . . . . . . .       10
  2.3   Accumulation factors . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      10
  2.4   Time value of money . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       11
  2.5   Continuous cash-flows . . . . . . . . . . . . . . . . . . . . . . . . . . . .       12
  2.6   Example: withdrawal of interest as a cash-flow . . . . . . . . . . . . . . .        12

3 Annuities and fixed-interest securities                                                   14
  3.1   Annuity symbols . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       14
  3.2   Fixed-interest securities   . . . . . . . . . . . . . . . . . . . . . . . . . . .   16

4 The yield of a cash-flow                                                                  18
  4.1   Definition of the yield of a cash-flow . . . . . . . . . . . . . . . . . . . . .    18
  4.2   General results ensuring the existence of yields . . . . . . . . . . . . . . .      19
  4.3   Example: APR of a loan . . . . . . . . . . . . . . . . . . . . . . . . . . .        20
  4.4   Numerical calculation of yields . . . . . . . . . . . . . . . . . . . . . . . .     21
  4.5   Random cashflows . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        22
  4.6   Expected yield . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      23
  4.7   Gross redemption yield . . . . . . . . . . . . . . . . . . . . . . . . . . . .      24
                                             iv
CONTENTS                                                                                    v


5 Modelling future lifetimes                                                                27
  5.1   Introduction to life insurance . . . . . . . . . . . . . . . . . . . . . . . .      27
  5.2   Lives aged x . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    27
  5.3   Curtate lifetimes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     30
  5.4   Examples and Actuarial Notation . . . . . . . . . . . . . . . . . . . . . .         31
  5.5   Simple laws of mortality . . . . . . . . . . . . . . . . . . . . . . . . . . .      32
  5.6   The life-table . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    32
  5.7   Practical concerns . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    34

6 Evaluation of life insurance products                                                     35
  6.1   Life assurances . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     35
  6.2   Life annuities and premium conversion relations . . . . . . . . . . . . . .         36
  6.3   Continuous life assurance functions . . . . . . . . . . . . . . . . . . . . .       37
  6.4   More general types of life insurance . . . . . . . . . . . . . . . . . . . . .      37

7 Premiums                                                                                  39
  7.1   Different types of premiums . . . . . . . . . . . . . . . . . . . . . . . . .       39
  7.2   Net premiums . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      40
  7.3   Office premiums . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     41
  7.4   Prospective policy values . . . . . . . . . . . . . . . . . . . . . . . . . . .     41

8 Reserves and risk                                                                         44
  8.1   Reserves and random policy values . . . . . . . . . . . . . . . . . . . . .         44
  8.2   Risk pooling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    46

9 Theories of Value                                                                         48
  9.1   The St Petersburg Paradox       . . . . . . . . . . . . . . . . . . . . . . . . .   48
  9.2   Expected Utility Theory . . . . . . . . . . . . . . . . . . . . . . . . . . .       49
  9.3   Expected Utility Theorem . . . . . . . . . . . . . . . . . . . . . . . . . .        50
  9.4   Subjective Expected Utility (SEU) . . . . . . . . . . . . . . . . . . . . .         52

10 The Shape of the Utility Function                                                        53
  10.1 Risk Aversion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      54
  10.2 Mapping the Attitude to Risk . . . . . . . . . . . . . . . . . . . . . . . .         55
  10.3 Comparative Risk Aversion . . . . . . . . . . . . . . . . . . . . . . . . .          57
  10.4 How risk aversion changes with wealth . . . . . . . . . . . . . . . . . . .          60
  10.5 Some Classical Utility Functions . . . . . . . . . . . . . . . . . . . . . . .       61
vi                                                                               CONTENTS


11 Changes in Risk                                                                           62
     11.1 An Increase in Risk . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    62
     11.2 Second-Order Stochastic Dominance . . . . . . . . . . . . . . . . . . . .          62
     11.3 The Rothschild-Stiglitz Proposition . . . . . . . . . . . . . . . . . . . . .      63

12 Risk and Reward                                                                           67
     12.1 First-Order Stochastic Dominance . . . . . . . . . . . . . . . . . . . . . .       68

13 Insurance Decisions                                                                       69
     13.1 The Justification of Insurance . . . . . . . . . . . . . . . . . . . . . . . .     69
     13.2 Optimal Coinsurance (Mossin’s Theorem) . . . . . . . . . . . . . . . . .           70
     13.3 Optimality of Deductibles . . . . . . . . . . . . . . . . . . . . . . . . . .      73

14 Static Portfolio Choices                                                                  75
     14.1 Static Portfolio choices under CRRA . . . . . . . . . . . . . . . . . . . .        77
     14.2 Static Portfolio Choice with more than one risky asset       . . . . . . . . . .   77

15 Consumption and Saving                                                                    79
     15.1 Consumption over a lifetime . . . . . . . . . . . . . . . . . . . . . . . . .      79
     15.2 Lifetime consumption under certainty . . . . . . . . . . . . . . . . . . . .       80
     15.3 Extending the model to uncertainty . . . . . . . . . . . . . . . . . . . . .       83
     15.4 Time Consistency . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     85

16 The Utility of Annuitisation                                                              86
     16.1 Optimal consumption plan in the absence of life annuities . . . . . . . . .        86
     16.2 Optimal retirement strategy with life annuities . . . . . . . . . . . . . . .      87
Introduction

                                                   Reading: http://www.actuaries.org.uk



The actuarial profession
By actuarial science, we mean the application of mathematical and statistical methods
to assess risk, particularly in insurance and finance, but also and other industries and
contexts. Actuaries are professionals who are qualified in this field.
In the UK, the Institute & Faculty of Actuaries oversees a qualification based on a
series of exams, including mathematics, statistics, economics and finance, but also risk
management, reporting and communication skills. This programme takes normally at
least three or four years after a mathematical university degree, and there is also an
experience requirement. The Institute & Faculty also aims to maintain and promote
ethical and professional standards and promote the public good. Other actuarial bodies
exist around the world, but the UK profession maintains an international perspective,
and includes members working in many countries.
The Institute and Faculty of Actuaries was formed in 2010, from the merger of the
Institute of Actuaries (established in 1848) and the Faculty of Actuaries (establish in
Scotland in 1856). The roots of actuarial science go back further: the first life table
was created by Sir Edmund Halley in 1693, and it was in life insurance that actuaries
first worked. This was later extended to general insurance (health, home, property etc).
As typically large amounts of money, reserves, have to be maintained, this naturally
extended to investment strategies including the assessment of risk in financial markets.
Actuaries today still work in pensions and insurance, but also in investment, banking and
wider fields requiring risk assessment skills. The discipline has adopted the development
of probability and financial theory as it developed in the 20th century; computing power
and new communication technologies have pushed back the frontier of possible applica-
tions of actuarial science. The profession has a key role to play in current debates, in
both traditional fields such as the causes and consequences of changes in life expectancy,
and wider fields, such as responses to climate change.
This lecture course aims to set out the foundations of financial mathematics and eco-
nomics, with some applications and notation that have particular relevance to actuarial
practice.

                                            1
Lecture 1

Cashflow modelling and compound
interest

                                 Reading: Garrett, chapter 1, and sections 2.1 - 2.4, 4.1

Quite a few problems that we deal with in this course can be approached in an intuitive
way. However, the mathematical and more powerful approach to problem solving is to
set up a mathematical model in which the problem can be formalised and generalised.
The concept of cash-flows seen in the last lecture is one part of such a model. In this
lecture, we shall construct another part, the compound interest model in which interest
on capital investments, loans etc. can be computed. This model will play a crucial role
throughout the course.
In any mathematical model, reality is only partially represented. An important part of
mathematical modelling is the discussion of model assumptions and the interpretation of
the results of the model.


1.1     The generalised cash-flow model
The cash-flow model systematically captures payments either between different parties
or, as we shall focus on, in an inflow/outflow way from the perspective of one party. This
can be done at different levels of detail, depending on the purpose of an investigation,
the complexity of the situation, the availability of reliable data etc.
Example 1. Look at the transactions on a bank statement for September 2011.

                Date       Description           Money out     Money in
                01-09-11   Gas-Elec-Bill            £21.37
                04-09-11   Withdrawal              £100.00
                15-09-11   Telephone-Bill           £14.72
                16-09-11   Mortgage Payment        £396.12
                28-09-11   Withdrawal              £150.00
                30-09-11   Salary                              £1,022.54
                                            2
LECTURE 1. CASHFLOW MODELLING AND COMPOUND INTEREST                                     3


Extracting the mathematical structure of this example we define elementary cash-flows.
Definition 2. A cash-flow is a vector (tj , cj )1≤j≤m of times tj ∈ R and amounts cj ∈ R.
Positive amounts cj > 0 are called inflows. If cj < 0, then |cj | is called an outflow.
Example 3. The cash-flow of Example 1 is mathematically given by

                        j tj     cj             j tj       cj
                        1 1 −21.37              4 16 −396.12
                        2 4 −100.00             5 28 −150.00
                        3 15 −14.72             6 30 1,022.54

Often, the situation is not as clear as this, and there may be uncertainty about the
time/amount of a payment. This can be modelled stochastically.
Definition 4. A random cash-flow is a random vector (Tj , Cj )1≤j≤M of times Tj ∈ R and
amounts Cj ∈ R with a possibly random length M ∈ N.

Sometimes, the random structure is simple and the times or the amounts are determin-
istic, or even the only randomness is that a well specified payment may fail to happen
with a certain probability.
Example 5. Future transactions on a bank account (say for November 2011)

      j   Tj     Cj Description              j Tj          Cj   Description
      1    1 −21.37 Gas-Elec-Bill            4 16    −396.12    Mortgage payment
      2   T2     C2 Withdrawal?              5 T5          C5   Withdrawal?
      3   15     C3 Telephone-Bill           6 30    1,022.54   Salary

Here we assume a fixed Gas-Elec-Bill but a varying telephone bill. Mortgage payment
and salary are certain. Any withdrawals may take place. For a full specification of the
random cash-flow we would have to give the (joint!) distribution of the random variables.

This example shows that simple situations are not always easy to model. It is an impor-
tant part of an actuary’s work to simplify reality into tractable models. Sometimes, it is
worth dropping or generalising the time specification and just list approximate or quali-
tative (’big’, ’small’, etc.) amounts of income and outgo. cash-flows can be represented
in various ways as the following important examples illustrate.


1.2       Examples
Example 6 (Zero-coupon bond). Usually short-term investments with interest paid at
the end of the term, e.g. invest £99 for ninety days for a payoff of £100.

                                      j tj  cj
                                      1 0 −99
                                      2 90 100
4                                                                         1.2. EXAMPLES


Example 7 (Government bonds, fixed-interest securities). Usually long-term invest-
ments with annual or semi-annual coupon payments (interest), e.g. invest £10, 000 for
ten years at 5% per annum. The government uses these securities to borrow money
from investors, for its own spending, investment or refinance. It is common to treat the
government bonds of developed economies as ‘risk free’, i.e. we are treating timing and
amounts of payments as certain, but this is an assumption we could relax (see below).
          −£10, 000 +£500 +£500 +£500                        +£500 +£10, 500

                0         1        2         3                  9         10
Example 8 (Corporate bonds). The underlying cash-flow looks the same as for gov-
ernment bonds, but typically they are not as secure. Credit rating agencies assess the
insolvency risk. If a company goes bankrupt, invested money is often lost. One may
therefore wish to add probabilities to the cash-flow in the above figure. Typically, the
interest rate in corporate bonds is higher to allow for this extra risk of default that the
investor takes.
Example 9 (Equities). Shares in the ownership of a company that entitle to regular
dividend payments of amounts depending on the profit and strategy of the company.
Equities can be bought and sold on stock markets (via a stock broker) at fluctuating
market prices. In the above diagram (including payment probabilities) the inflow amounts
are not fixed, the term at the discretion of the shareholder and sales proceeds are not fixed.
There are advanced stochastic models for stock price evolution. A wealth of derivative
products is also available, e.g. forward contracts, options to sell or buy shares. We
will discuss some aspects of derivatives, otherwise refer to alternative Oxford courses on
Financial Derivatives.
Example 10 (Index-linked securities). Inflation-adjusted securities: coupons and re-
demption payment increase in line with inflation, by tracking an inflation index. The UK
and US government both issue index-linked securities, but these are less common in the
private sector.
Example 11 (Annuity-certain). Long term investments that provide a series of regular
annual (semi-annual or monthly) payments for an initial lump sum, e.g.
    −£10, 000 +£1, 400 +£1, 400 +£1, 400                        +£1, 400 +£1, 400

          0           1           2           3                       9          10
Here the term is n = 10 years. Perpetuities provide regular payment forever (n = ∞).
Example 12 (Loans). The cash flows may be modelled as equivalent to the bond
(interest-only loan) or annuity-certain (repayment loan), but the rights of the parties
may be different in some cases. A company may seek to borrow money either by issuing
bonds, or by seeking a loan - for example from a bank. There are costs associated with
the issuance, but the bond investor may be able to redeem or sell the bond early, making
it attractive to the lender and hence reducing the cost to the borrower. A bank or other
lender of a loan often has to obey stricter rules, to protect the borrower.
LECTURE 1. CASHFLOW MODELLING AND COMPOUND INTEREST                                     5


Example 13 (Life annuity). Life annuities are like annuities-certain, but do not termi-
nate at a fixed time but when the beneficiary dies. Risks due to age, health, profession
etc. when entering the annuity contract determine the payment level. They are a basic
form of a pension. Several modifications exist (minimal term, maximal term, etc.).

Example 14 (Life assurance). Pays a lump sum on death for monthly or annual premi-
ums that depend on age and health of the policy holder when the policy is underwritten.
The sum assured may be decreasing in accordance with an outstanding mortgage.

Example 15 (Property insurance). A class of general insurance (others are health, build-
ing, motor etc.). In return for regular premium payments, an insurance company replaces
or refunds any stolen or damaged items included on the policy.



1.3     Simple versus compound interest
We are familiar with the concept of interest in everyday banking: the bank pays interest
on positive balances on current accounts and savings accounts (not much, but some), and
it charges interest on loans and overdrawn current accounts. Reasons for this include that

   • people/institutions borrowing money are willing to pay a fee (in the future) for the
     use of this money now,

   • there is price inflation in that £100 lose purchasing power between the beginning
     and the end of a loan as prices increase,

   • there is often a risk that the borrower may not be able to repay the loan.

To develop a mathematical framework, consider an “interest rate h” per unit time, under
which an investment of C at time 0 will receive interest Ch by time 1, giving total value
C(1 + h):
                                C −→ C(1 + h),
e.g. for h = 4% we get C −→ 1.04C.
There are two natural ways to extend this to general times t:

Definition 16 (Simple interest). Invest C, receive C(1 + th) after t years. The simple
interest on C at rate h for time t is Cth.

Definition 17 (Compound interest). Invest C, receive C(1 + i)t after t years. The
compound interest on C at rate i for time t is C((1 + i)t − 1).

For integer t = n, this is as if a bank balance was updated at the end of each year

C −→ C(1 + i) −→ (C(1 + i))(1 + i) = C(1 + i)2 −→ (C(1 + i)n−1 )(1 + i) = C(1 + i)n .
6                                                   1.3. SIMPLE VERSUS COMPOUND INTEREST


Example 18. Given an interest rate of i = 6% per annum (p.a.), investing C = £1, 000
for t = 2 years yields

     Isimp = C2i = £120.00 and Icomp = C (1 + i)2 − 1 = C(2i + i2 ) = £123.60,
                                                      

where we can interpret Ci2 as interest on interest, i.e. interest for the second year paid
at rate i on the interet Ci for the first year.

Compound interest behaves well under term-splitting: for t = s + r

                         C −→ C(1 + i)s −→ (C(1 + i)s ) (1 + i)r = C(1 + i)t ,

i.e. investing C at rate i first for s years and then the resulting C(1 + i)s for a further r
years gives the same as directly investing C for t = s + r years. Under simple interest

          C −→ C(1 + hs) −→ C(1 + hs)(1 + hr) = C(1 + ht + srh2 ) > C(1 + ht),

(in the case C > 0, r > 0, s > 0). The difference Csrh2 = (Chs)hr is interest on the
interest Chs that was already paid at time s for the first s years.
Now we investigate what is the greatest return we can achieve by term-splitting under
simple interest? First, denote by St (C) = C(1 + th) the accumulated value under simple
interest at rate h for time t. We have seen that Sr ◦ Ss (C) > Sr+s (C).
Proposition 19. Fix t > 0 and h. Then

                 sup                    Srn ◦ Srn−1 ◦ · · · ◦ Sr1 (C) = lim St/n ◦ · · · ◦ St/n (C) = eth C.
    n∈N,r1 ,...,rn ∈R+ :r1 +···+rn =t                                  n→∞


Proof: For the second equality we first note that
                                                   n
                                                  t
                    St/n ◦ · · · ◦ St/n (C) = 1 + h C → eth C,
                                                 n
because
                 log((1 + th/n)n ) = n log(1 + th/n) = n(th/n + O(1/n2 )) → th.
For the first equality,
                                                          r2 h2
                                        erh = 1 + rh +          + · · · ≥ 1 + rh
                                                            2
so if r1 + · · · + rn = t, then

eth C = er1 h er2 h · · · ern h C ≥ (1 + r1 h)(1 + r2 h) · · · (1 + rn h)C = Srn ◦ Srn−1 ◦ · · · ◦ Sr1 (C).

                                                                                                               2

So, the optimal achievable is C −→ Ceth . If eth = (1 + i)t , i.e. eh = 1 + i or h = log(1 + i),
we recover the compound interest case.

               From now on, we will always consider compound interest.
LECTURE 1. CASHFLOW MODELLING AND COMPOUND INTEREST                                         7


Definition 20. Given an effective interest rate i per unit time and an initial capital C
at time 0, the accumulated value at time t under the compound interest model (with
constant rate) is given by
                                  C(1 + i)t = Ceδt ,
where
                                                  ∂
                               δ = log(1 + i) =      (1 + i)t     ,
                                                  ∂t          t=0

is called the force of interest.

The second expression for the force of interest means that it is the “instantaneous rate
of growth per unit capital per unit time”.


1.4      Nominal and effective rates
The effective annual rate is i such that C −→ C(1 + i) after one year. We have already
seen the force of interest δ = log(1 + i) as a way to describe the same interest rate model.
In practice, rates are often quoted in other ways still.

Definition 21. A nominal rate h convertible pthly (or compounded p times per year)
means that an accumulated value C(1 + h/p) is achieved after time 1/p.

By compounding, the accumulated value at time 1 is C(1 + h/p)p , and at time t is
C(1 + h/p)pt . This again describes the same model of accumulated values if (1 + h/p)p =
1 + i, i.e. if h = p((1 + i)1/p − 1. Actuarial notation for the nominal rate convertible pthly
associated with effective rate i is i(p) = p((1 + i)1/p − 1).

Example 22. An annual rate of 8% convertible quarterly, i.e. i(4) = 8% means that
i(4) /4 = 2% is credited each 3 months (and compounded) giving an annual effecive rate
i = (1 + i(4) /4)4 − 1 ≈ 8.24%.

The most common frequencies are for p = 2 (half-yearly, semi-annually), p = 4 (quar-
terly), p = 12 (monthly), p = 52 (weekly), although the latter used to be approximated
using
                             (1 + i)1/p − 1   ∂
              lim i(p) = lim                =    (1 + i)t     = log(1 + i) = δ;
             p→∞         p→∞      1/p         ∂t          t=0

the force of interest δ can be called the “nominal rate of interest convertible continuously”.

Example 23. Here are two genuine and one artificial options for a savings account.

 (1) 3.25% p.a. effective (i1 = 3.25%)
                                                     (12)
 (2) 3.20% p.a. nominal convertible monthly (i2             = 3.20%)

 (3) 3.20% p.a. nominal “convertible continuously” (δ3 = 3.20%)
8                                 1.5. DISCOUNT FACTORS AND DISCOUNT RATES


After one year, an initial capital of £10,000 accumulates to

    (1) 10, 000 × (1 + 3.25%) = 10, 325.00 = R1 ,

    (2) 10, 000 × (1 + 3.20%/12)12 = 10, 324.74 = R2 ,

    (3) 10, 000 × e3.20% = 10, 325.18 = R3 .

Although interest may be credited to the account differently, an investment into (j) just
consists of deposit and withdrawal, so the associated cash-flow is ((0, −10000), (1, Rj )),
and we can use Rj to decide between the options. We can also compare i2 ≈ 3.2474%
and i3 ≈ 3.2518% or calculate δ1 and δ2 to compare with δ3 etc.

Interest rates always refer to some time unit. The standard choice is one year, but it
sometimes eases calculations to choose six months, one month or one day. All definitions
we have made reflect the assumption that the interest rate does not vary with the initial
capital C nor with the term t. We refer to this model of accumulated values as the
constant-i model, or the constant-δ model.


1.5        Discount factors and discount rates
Before we more fully apply the constant-i model to cash-flows in Lecture 3, let us discuss
the notion of discount. We are used to discounts when shopping, usually a percentage
reduction in price, time being implicit. Actuaries use the notion of an effective rate of
discount d per time unit to represent a reduction of C to C(1 − d) if payment takes place
a time unit early.
This is consistent with the constant-i model, if the payment of C(1 − d) accumulates to
C = (C(1 − d))(1 + i) after one time unit, i.e. if
                                                             1
                            (1 − d)(1 + i) = 1 ⇐⇒ d = 1 −       .
                                                            1+i
A more prominent role will be played by the discount factor v = 1 − d, which answers
the question

                 How much will we have to invest now to have 1 at time 1?

Definition 24. In the constant-i model, we refer to v = 1/(1 + i) as the associated
discount factor and to d = 1 − v as the associated effective annual rate of discount.

Example 25. How much do we have to invest now to have 1 at time t? If we invest C,
this accumulates to C(1 + i)t after t years, hence we have to invest C = 1/(1 + i)t = v t .
Lecture 2

Valuing cash-flows

                                   Reading: Garrett, chapter 2 (especially sections 2.5 - 2.8)

In the previous lecture we set up the cash-flow model by assigning time-t values to
cash-flows. We then established the constant-i interest rate model and saw how a past
deposit accumulates and a future payment can be discounted. In this lecture, we combine
these concepts and introduce general (deterministic) time-dependent interest models, and
continuous cash-flows that model many small payments as infinitesimal payment streams.


2.1      Accumulating and discounting in the constant-i
         model
Given a cash-flow c = (cj , tj )1≤j≤m of payments cj at time tj and a time t with t ≥ tj
for all j, we can write the joint accumulated value of all payments by time t according
to the constant-i model as
                                           m
                                           X                               m
                                                                           X
                                                                t−tj
                       AValt (c) =               cj (1 + i)            =         cj eδ(t−tj ) ,
                                           j=1                             j=1


because each payment cj at time tj earns compound interest for t − tj time units. Note
that some cj may be negative, so the accumulated value could become negative. We
assume implicitly that the same interest rate applies to positive and negative balances.
Similarly, given a cash-flow c = (cj , tj )1≤j≤m of payments cj at time tj and a time t ≤ tj
for all j, we can write the joint discounted value at time t of all payments as
                            m
                            X                        m
                                                     X                                 m
                                                                                       X
                                         tj −t                          −(tj −t)
              DValt (c) =         cj v           =         cj (1 + i)              =         cj e−δ(tj −t) .
                            j=1                      j=1                               j=1


This discounted value is the amount we invest at time t to be able to spend cj at time tj
for all j.
                                                            9
10                                              2.2. TIME-DEPENDENT INTEREST RATES


2.2      Time-dependent interest rates
So far, we have assumed that interest rates are constant over time. Suppose, we now
let i = i(k) vary with time k ∈ N. We define the accumulated value at time n for an
investment of C at time 0 as

                    C(1 + i(1))(1 + i(2)) · · · (1 + i(n − 1)) · · · (1 + i(n)).

Example 26. A savings account pays interest at i(1) = 2% in the first year and i(2) = 5%
in the second year, with interest from the first year reinvested. Then the account balance
evolves as 1, 000 −→ 1, 000(1 + i(1)) = 1, 020 −→ 1, 000(1 + i(1))(1 + i(2)) = 1, 071.

When varying interest rates between non-integer times, it is often nicer to specify the
force of interest δ(t) which we saw to have a local meaning as the infinitesimal rate of
capital growth under compound interest:
                                        Z t       
                            C −→ C exp       δ(s)ds = R(t).
                                                      0

Note that now (under some right-continuity assumptions)

             ∂                                                           ∂
                R(t)     = δ(0)         and more generally                  R(t) = δ(t)R(t),
             ∂t      t=0                                                 ∂t

so that the interpretation of δ(t) as local rate of capital growth at time t still applies.

Example 27. If δ(·) is piecewise constant, say constant δj on (tj−1 , tj ], j = 1, . . . , n, then

                    C −→ Ceδ1 r1 eδ2 r2 · · · eδn rn ,          where rj = tj − tj−1 .

Definition 28. Given a time-dependent force of interest δ(t), t ∈ R+ , we define the
accumulated value at time t ≥ 0 of an initial capital C ∈ R under a force of interest δ(·)
as
                                            Z t        
                             R(t) = C exp         δ(s)ds .
                                                            0

Also, we may refer to I(t) = R(t) − C as the interest from time 0 to time t under δ(·).


2.3      Accumulation factors
Given a time-dependent interest model δ(·), let us define accumulation factors from s to
t                                   Z               t
                            A(s, t) = exp                 δ(r)dr ,      s < t.                 (1)
                                                  s
LECTURE 2. VALUING CASH-FLOWS                                                                           11


Just as C −→ R(t) = CA(0, t) for an investment of C at time 0 for a term t, we use A(s, t)
as a factor to turn an investment of C at time s into its accumulated value CA(s, t) at
time t. This behaves well under term-splitting, since
                                              Z s            Z t         
C −→ CA(0, s) −→ (CA(0, s))A(s, t) = C exp          δ(r)dr exp       δ(r)dr = CA(0, t).
                                                       0                      s

More generally, note the consistency property A(r, s)A(s, t) = A(r, t), and conversely:
Proposition 29. Suppose, A : {(s, t) : s ≤ t} → (0, ∞) satisfies the consistency property
and t 7→ A(s, t) is differentiable for all s, then there is a function δ(·) such that (1) holds.

Proof: Since consistency for r = s = t implies A(t, t) = 1, we can define as (right-hand)
derivative
                            A(t, t + h) − A(t, t)       A(0, t + h) − A(0, t)
               δ(t) = lim                         = lim                       ,
                      h↓0             h             h↓0        hA(0, t)
where we also applied consistency. With g(t) = A(0, t) and f (t) = log(A(0, t))
                                                                    Z t
                     g 0 (t)     0
              δ(t) =         = f (t) ⇒ log(A(0, t)) = f (t) =           δ(s)ds.
                      g(t)                                           0

Since consistency implies A(s, t) = A(0, t)/A(0, s), we obtain (1).                                     2

We included the apparently unrealistic A(s, t) < 1 (accumulated value less than the initial
capital) that leads to negative δ(·). This can be useful for some applications where δ(·)
is not pre-specified, but connected to investment performance where prices can go down
as well as up, or to inflation/deflation. Similarly, we allow any i ∈ (−1, ∞), so that the
associated 1-year accumulation factor 1 + i is positive, but possibly less than 1.


2.4      Time value of money
We have discussed accumulated and discounted values in the constant-i
                                                                Rt       model. In the
time-varying δ(·) model with accumulation factors A(s, t) = exp( s δ(r)dr), we obtain
                 m
                 X                                                 m
                                                                   X
   AValt (c) =         cj A(tj , t) if all tj ≤ t,   DValt (c) =         cj V (t, tj ) if all tj > t,
                 j=1                                               j=1
                                      Rt
where V (s, t) = 1/A(s, t) = exp(− s δ(r)dr) is the discount factor from time t back to
time s ≤ t. With v(t) = V (0, t), we get V (s, t) = v(t)/v(s). Notation v(t) is useful, as it
is often the present value, i.e. the discounted value at time 0, that is of interest, and we
then have                                m
                                        X
                           DVal0 (c) =     cj v(tj ), if all tj > 0,
                                             j=1

where each payment is discounted by v(tj ). Each future payment has a different present
value. Note that the formulas for AValt and DValt are identical, if we express A(s, t) and
V (s, t) in terms of δ(·).
12                                                         2.5. CONTINUOUS CASH-FLOWS


Definition 30. The time-t value of a cash-flow c is defined as

                              Valt (c) = AValt (c≤t ) + DValt (c>t ),

where c≤t and c>t denote restrictions of c to payments at times tj ≤ t resp. tj > t.
                                                                              v(s)
Proposition 31. For all s ≤ t we have Valt (c) = Vals (c)A(s, t) = Vals (c)        .
                                                                              v(t)

The proof is straightforward and left as an exercise. Note in particular, that if Valt (c) = 0
for some t, then Valt (c) = 0 for all t.

Remark 32.         1. A sum of money without time specification is meaningless.

     2. Do not add or directly compare values at different times.

     3. If values of two cash-flows are equal at one time, they are equal at all times.


2.5        Continuous cash-flows
If many small payments are spread evenly over time, it is natural to model them by a
continuous stream of payment.

Definition 33. A continuous cash-flow is a function c : R → R. The total net inflow
between times s and t is            Z t
                                                 c(r)dr,
                                             s
and this may combine periods of inflow and outflow.

As before, we can consider random c. We can also mix continuous and discrete parts.
Note that the net inflow “adds” values at different times ignoring the time-value of money.
More useful than the net inflow are accumulated and discounted values
            Z t                                   Z ∞                       Z ∞
                                                                         1
AValt (c) =     c(s)A(s, t)ds and DValt (c) =          c(s)V (t, s)ds =         c(s)v(s)ds.
             0                                     t                    v(t) t

Everything said in the previous section applies in an analogous way.


2.6        Example: withdrawal of interest as a cash-flow
Consider a savings account that does not credit interest to the savings account itself
(where it is further compounded), but triggers a cash-flow of interest payments.
                                                  R1
     1. In a δ(·)-model, 1 −→ 1 + I = exp( 0 δ(ds)). Consider the interest cash-flow
        (1, −I). Then Val1 ((0, 1), (1, −I)) = 1 is again the capital, at time 1.
LECTURE 2. VALUING CASH-FLOWS                                                                13


  2. In the constant-i model, recall the nominal rate i(p) = p((1 + i)1/p − 1). Interest on
     an initial capital 1 up to time 1/p is i(p) /p. After one or indeed k such pthly interest
     payments of i(p) /p, we have Valk/p ((0, 1), (1/p, −i(p) /p), . . . , (k/p, −i(p) /p)) = 1.

  3. In a δ(·)-model, continuous cash-flow c(s) = δ(s) has Valt ((0, 1), −c≤t ) = 1 for all t.

We leave as an exercise to check these directly from the definitions.
Note, in particular, that accumulation of interest itself does not correspond to events in
the cash-flow. Cash-flows describe external influences on the account. Although interest
is not credited continuously or at every withdrawal in practice, our mathematical model
does assign a balance=value that changes continuously between instances of external
cash-flow. We include the effect of interest in a cash-flow by withdrawal.
Lecture 3

Annuities and fixed-interest
securities

                                      Reading: Garrett, chapters 3 and 4, and section 7.1

In this chapter we introduce actuarial notation for discounted and accumulated values
of regular payment streams, so-called annuity symbols. These are useful not only in the
pricing of annuity products, but wherever regular payment streams occur. Our main
example here will be fixed-interest securities.


3.1     Annuity symbols
Annuity-certain. An annuity-certain of term n entitles the holder to a cash-flow

                       c = ((1, X), (2, X), . . . , (n − 1, X), (n, X)).

Take X = 1 for convenience. In the constant-i model, its Net Present Value is
                                                   n
                                                   X              1 − vn   1 − vn
             an| = an|i = NPV(i) = Val0 (c) =            vk = v          =        .
                                                   k=1
                                                                  1−v         i

The symbols an| and an|i are annuity symbols, pronounced “a angle n (at i)”.
The accumulated value at end of term is
                                                             (1 + i)n − 1
                   sn| = sn|i = Valn (c) = v −n Val0 (c) =                .
                                                                   i

pthly payable annuities. A pthly payable annuity spreads (nominal) payment of 1
per unit time equally into p payments of 1/p, leading to a cash-flow

                cp = ((1/p, 1/p), (2/p, 1/p), . . . , (n − 1/p, 1/p), (n, 1/p))
                                              14
LECTURE 3. ANNUITIES AND FIXED-INTEREST SECURITIES                                                                15


with                                                   np
                          (p)                      1 X k/p          1 − vn     1 − vn
                       an| = Val0 (cp ) =                v = v 1/p           =        ,
                                                   p k=1           1 − v 1/p     i(p)
where ip = p((1 + i)1/p − 1) is the nominal rate of interest convertible pthly associated
with i. This calculation hence the symbol is meaningful for n any integer multiple of 1/p.
We saw in Section 3.6 that, (now expressed in our new notation)
                                                                                                                   (p)
ian| = Val0 ((1, i), (2, i), . . . , (n, i)) = Val0 ((1/p, i(p) /p), (2/p, i(p) /p), . . . , (n, i(p) /p)) = i(p) an| ,
since both cash-flows correspond to the income up to time n on 1 unit invested at time
0, at effective rate i.
The accumulated value of cp at the end of term is
                                  (p)                                       (1 + i)n − 1
                                sn| = Valn (cp ) = v −n Val0 (cp ) =                     .
                                                                                i(p)

Perpetuities. As n → ∞, we obtain perpetuities that pay forever
                                                                         ∞
                                                                         X              v   1
                     a∞| = Val0 ((1, 1), (2, 1), (3, 1), . . .) =               vk =       = .
                                                                          k=1
                                                                                       1−v  i


Continuously payable annuities. As p → ∞, the cash-flow cp “tends to” the con-
tinuous cash-flow c(s) = 1, 0 ≤ s ≤ n, with
                       Z n            Z n        Z n
                                                               1 − e−δn   1 − vn
      an| = Val0 (c) =          s
                           c(s)v ds =      s
                                          v ds =     e−δs ds =          =        .
                        0              0          0               δ          δ
                                        (p)      1 − vn   1 − vn
Or an| = Val0 (c) = lim an| = lim                       =        . Similarly sn| = Valn (c) = v −n an| .
                          p→∞                 p→∞ i(p)       δ

Annuity-due. This simply means that the first payment is now
                                                 ((0, 1), . . . , (n − 1, 1))
with
                                                                        n−1
                                                                        X              1 − vn   1 − vn
              än| = Val0 ((0, 1), (1, 1), . . . , (n − 1, 1)) =                vk =          =
                                                                        k=0
                                                                                       1−v        d
and
                                                                                        (1 + i)n − 1
                 s̈n| = Valn ((0, 1), (1, 1), . . . , (n − 1, 1)) = v −n än| =                      .
                                                                                             d
Similarly
                            (p)
                          än| = Val0 ((0, 1/p), (1/p, 1/p), . . . , (n − 1/p, 1/p))
and
                          s̈n| = Valn ((0, 1/p), (1/p, 1/p), . . . , (n − 1/p, 1/p)).
              (p)
Also ä∞| , ä∞| , etc.
16                                                         3.2. FIXED-INTEREST SECURITIES


Deferred and increasing annuities. For m ∈ N, the prefix m| before an annuity
symbol indicates that the sequence of payments concerned is deferred by an amount of
time m. For example, the discounted present value (in the constant interest-rate model)
of a deferred annuity, with unit payments per unit time payable from m + 1 to m + n, is
denoted by m|an| . The corresponding symbols are
                                      (p)                      (p)
                      m |an| ,    m |an| ,    m |än| ,   m |än| ,   m |an| ,


The discounted present value of an increasing annuity with payments j at time j =
1, . . . , n is denoted by (Ia)n| . The corresponding symbols are

                    (Ia)n| ,     (Iä)n| ,   (Ia)n| ,     (Ia)n| ,    m |(Ia)n| etc.




3.2     Fixed-interest securities
Simple fixed-interest securities. A simple fixed-interest security entitles the holder
to a cash-flow

                  c = ((1, N j), (2, N j), . . . , (n − 1, N j), (n, N j + N )),

where j is the coupon rate, N is the nominal amount and n is the term. The value in the
constant-j model is
                                                          1 − (1 + j)−n
        NPV(j) = N jan|j + N (1 + j)−n = N j                            + N (1 + j)−n = N.
                                                                j
This is not a surprise: compare with point 2. of Section 3.6. The value in the constant-i
model is

                                 −n        1 − (1 + i)−n
NPV(i) = N jan|i + N (1 + i)          = Nj               + N (1 + i)−n = N j/i + N v n (1 − j/i).
                                                 i

More general fixed-interest securities. There are fixed-interest securities with pthly
payable coupons at a nominal coupon rate j and with a redemption price of R per unit
nominal

         c = ((1/p, N j/p), (2/p, N j/p), . . . , (n − 1/p, N j/p), (n, N j/p + N R)),

where we say that the security is redeemable at (resp. above or below) par if R = 1 (resp.
R > 1 or R < 1). We compute
                                                   (p)
                               NPV(i) = N jan| + N R(1 + i)−n .

If NPV(i) = N (resp. > N or < N ), we say that the security is valued or traded at (resp.
above or below) par. Redemption at par is standard. If redemption is not at par, this is
usually expressed as e.g. “redemption at 120%” meaning R = 1.2. If redemption is not
LECTURE 3. ANNUITIES AND FIXED-INTEREST SECURITIES                                         17


at par, we can calculate the coupon rate per unit redemption money as j 0 = j/R; with
N 0 = N R, the cash-flow of a pthly payable security of nominal amount N 0 with coupon
rate j 0 redeemable at par is identical.
Interest payments are always calculated from the nominal amount. Redemption at par
is the standard. In practice, a security is a piece of paper (with coupon strips to cash in
the interest) that can change owner (sometimes under some restrictions).


Fixed-interest securities as investments. Fixed-interest securities are issued by
Governments and are also called Government bonds as opposed to corporate bonds, which
are issued by companies. Corporate bonds are less secure than Government bonds since
(in either case, actually) bankruptcy can stop the payment stream. Since Government
typically issues large quantities of bonds, they form a very liquid/marketable form of
investment that is actively traded on bond markets.
Government bonds are either issued at a fixed price or by tender, in which case the
highest bidders get the bonds at a set issue date. Government bonds usually have a term
of several years. There are also shorter-term Government bills which have no coupons,
so they are just offered at a discount on their nominal value.

Example 34. Consider a fixed-interest security of N = 100 nominal, coupon rate j = 3%
payable annually and redeemable at par after a term of n = 2. If the security is currently
trading below par, with a purchase price of P = £97, the investment has a cash-flow

                               c = ((0, −97), (1, 3), (2, 103))

and we can calculate the yield by solving the equation of value

       −97 + 3(1 + i)−1 + 103(1 + i)−2 = 0 ⇐⇒ 97(1 + i)2 − 3(1 + i) − 103 = 0

to obtain 1 + i = 1.04604, i.e. i = 4.604% (the second solution of the quadradic is
1 + i = −1.01512, i.e. i = −2.01512, which is not in (−1, ∞); note that we knew already
by Proposition 40 that there can only be one admissible solution).
Here, we could solve the quadratic equation explicitly; for fixed-interest securities of
longer term, it is useful to note that the yield is composed of two effects, first the coupons
payable at rate j/R per unit redemption money (or at rate jN/P per unit purchasing
price) and then any capital gain/loss RN − P spread over n years. Here, these rough
considerations give

j/R+(R−P/N )/n = 4.5%,         or more precisely (j/R+jN/P )/2+(R−P/N )/n = 4.546%,

and often even rougher considerations give us an idea of the order of magnitude of a yield
that we can then use as good initial guesses for a numerical approximation.
Lecture 4

The yield of a cash-flow

                       Reading: Garrett, chapters 3 and 7, especially sections 3.2, 7.3, 7.6

Given a cash-flow representing an investment, its yield is the constant interest rate that
makes the cash-flow a fair deal. Yields allow to assess and compare the performance of
possibly quite different investment opportunities as well as mortgages and loans.


4.1      Definition of the yield of a cash-flow
In that follows, it does not make much difference whether a cash-flow c is discrete,
continuous or mixed, whether the time horizon of c is finite or infinite (like e.g. for
perpetuities). However, to keep statements and technical arguments simple, we assume:

     The time horizon of c is finite and payment rates of c are bounded.                        (H)

Since we will compare values of cash-flows under different interest rates, we need to adapt
our notation to reflect this:
                                   NPV(i) = i-Val0 (c)
denotes the Net Present Value of c discounted in the constant-i interest model, i.e. the
value of the cash-flow c at time 0, discounted using discount factors v(t) = v t = (1 + i)−t .
Lemma 35. Given a cash-flow c satisfying hypothesis (H), the function i 7→ NPV(i) is
continuous on (−1, ∞).
                                                                                   n
                                                                                   X
Proof: In the discrete case c = ((t1 , c1 ), . . . , (tn , cn )), we have NPV(i) =   ck (1 + i)−tk ,
                                                                                  k=1
and this is clearly continuous in i for all i > −1. For a continuous-time cash-flow c(s),
0 ≤ s ≤ t (and mixed cash-flows) we use the uniform continuity of i 7→ (1 + i)−s on
compact intervals s ∈ [0, t] for continuity to be maintained after integration
                                          Z t
                               NPV(i) =       c(s)(1 + i)−s ds.
                                              0
                                                                                                  2
                                                  18
LECTURE 4. THE YIELD OF A CASH-FLOW                                                          19


Corollary 36. Under hypothesis (H), i 7→ i-Valt (i) is continuous on (−1, ∞) for any t.

Often the situation is such that an investment deal is profitable (NPV(i) > 0) if the
interest rate i is below a certain level, but not above, or vice versa. By the intermediate
value theorem, this threshold is a zero of i 7→ NPV(i), and we define

Definition 37. Given a cash-flow c, if i 7→ NPV(i) has a unique root on (−1, ∞), we
define the yield y(c) to be this root. If i 7→ NPV(i) does not have a root in (−1, ∞) or
the root is not unique, we say that the yield is not well-defined.

The yield is also known as the “internal rate of return” or also just “rate of return”. We
can say that the yield is the fixed interest rate at which c is a “fair deal”. The equation
NPV(i) = 0 is called yield equation.

Example 38. Suppose that for an initial investment of £1,000 you obtain a payment
of £400 after one year and 770 after two years. What is the yield of this deal? Clearly
c = ((0, −1000), (1, 400), (2, 770). By definition, we are looking for roots i ∈ (−1, ∞) of

                     NPV(i) = −1, 000 + 400(1 + i)−1 + 800(1 + i)−2 = 0
                        ⇐⇒         1, 000(i + 1)2 − 400(i + 1) − 770 = 0

The solutions to this quadratic equation are i1 = −1.7 and i2 = 0.1. Since only the
second zero lies in (−1, ∞), the yield is y(c) = 0.1, i.e. 10%.
Sometimes, it is onvenient to solve for v = (1 + i)−1 , here 1, 000 − 400v − 770v 2 = 0 etc.
Note that i ∈ (−1, ∞) ⇐⇒ v ∈ (0, ∞).

Example 39. Consider the security of Example 7 in Lecture 1. The yield equation
NPV(i) = 0 can be written as
                                    10
                                    X
                      10, 000 = 500    (1 + i)−k + 10, 000(1 + i)−10 .
                                     k=1

We will introduce some short-hand actuarial notation in Lecture 5. Note, however, that
we already know a root of this equation, because the cash-flow is the same as for a bank
account with capital £10, 000 and a cash-flow of annual interest payments of £500, i.e.
at 5%, so i = 5% solves the yield equation. We will now see in much higher generality
that there is usually only one solution to the yield equation for investment opportunities.


4.2      General results ensuring the existence of yields
Since the yield does not always exist, it is useful to have sufficient existence criteria.

Proposition 40. If c has in- and outflows and all inflows of c precede all outflows of c
(or vice versa), then the yield y(c) exists.
20                                                    4.3. EXAMPLE: APR OF A LOAN


Remark 41. This includes the vast majority of projects that we will meet in this course.
Essentially, investment projects have outflows first, and inflows afterwards, while loan
schemes (from the borrower’s perspective) have inflows first and outflows afterwards.

Proof: By assumption, there is T such that all inflows are strictly before T and all
outflows are strictly after T . Then the accumulated value

                                      pi = i-ValT (c<T )

is positive strictly increasing in i with p−1 = 0 and the discounted value p∞ = ∞ (by
assumption there are inflows) and

                                      ni = i-ValT (c>T )

is negative strictly increasing with n−1 = −∞ (by assumption there are outflows) and
n∞ = 0. Therefore

                                  bi = pi + ni = i-ValT (c)

is strictly increasing from −∞ to ∞, continuous by Corollary 36; its unique root i0 is
also the unique root of i 7→ NPV(i) = (1 + i)−T (i-ValT (c)) by Corollary 31.
For the “vice versa” part, replace c by −c and use Val0 (c) = −Val0 (−c) etc.          2

Corollary 42. If all inflows precede all outflows, then

                                y(c) > i ⇐⇒ NPV(i) < 0.

If all outflows precede all inflows, then

                                y(c) > i ⇐⇒ NPV(i) > 0.

Proof: In the first setting assume y(c) > 0, we know by(c) = 0 and i 7→ bi increases with
i, so i < y(c) ⇐⇒ bi < 0, but bi = i-ValT (c) = (1 + i)T NPV(i).
The second setting is analogous (substitute −c for c).                                 2

As a useful example, consider i = 0, when NPV(0) is the sum of undiscounted payments.

Example 39 (continued) By Proposition 40, the yield exists and equals y(c) = 5%.


4.3      Example: APR of a loan
A yield that is widely quoted in practice, is the Annual Percentage Rate (APR) of a
loan. This is straightforward if the loan agreement is based on a constant interest rate
i. Particularly for mortgages (loans to buy a house), it is common, however, to have an
initial period of lower interest rates and lower monthly payments followed by a period of
higher interest rates and higher payments. The APR then gives a useful summary value:
LECTURE 4. THE YIELD OF A CASH-FLOW                                                               21


Definition 43. Given a cash-flow c representing a loan agreement (with inflows preceding
outflows), the yield y(c) rounded down to next lower 0.1% is called the Annual Percentage
Rate (APR) of the loan.
Example 44. Consider a mortgage of £85,000 with interest rates of 2.99% in year 1,
4.19% in year 2 and 5.95% for the remainder of a 20-year term. A Product Fee of £100 is
added to the loan amount, and a Funds Transfer Fee is deducted from the Net Amount
provided to the borrower. We will discuss in Lecture 6 how this leads to a cash flow of

      c = ((0, 84975), (1, −5715), (2, −6339), (3, −7271), (4, −7271), . . . , (20, −7271)),

and how the annual payments are further transformed into equivalent monthly payments.
Let us here calculate the APR, which exists by Proposition 40. Consider
                                                                                 20
                                                                                 X
                                            −1                     −2
          f (i) = 84, 975 − 5, 715(1 + i)        − 6, 339(1 + i)        − 7, 271    (1 + i)−k .
                                                                                 k=3

Solving the geometric progression, or otherwise, we find the root iteratively by evaluation

         f (5%) = −3, 310,     f (5.5%) = 396,        f (5.4%) = −326,          f (5.45%) = 36.

From the last two, we see that y(c) ≈ 5.4%, actually y(c) = 5.44503 . . . %. We can see
that APR=5.4% already from the middle two evaluations, since we always round down,
by definition of the APR.


4.4       Numerical calculation of yields
Suppose we know the yield exists, e.g. by Proposition 40. Remember that f (i) = NPV(i)
is continuous and (usually) takes values of different signs at the boundaries of (−1, ∞).
Interval splitting allows to trace the root of f : (l0 , r0 ) = (−1, ∞), make successive guesses
in ∈ (ln , rn ), calculate f (in ) and define

                      (ln+1 , rn+1 ) := (in , rn ) or (ln+1 , rn+1 ) = (ln , in )

such that the values at the boundaries f (ln+1 ) and f (rn+1 ) are still of different signs.
Stop when the desired accuracy is reached.
The challenge is to make good guesses. Bisection

                                          in = (ln + rn )/2

(once rn < ∞) is the ad hoc way, linear interpolation
                                          f (rn )               −f (ln )
                           in = ln                     + rn
                                     f (rn ) − f (ln )      f (rn ) − f (ln )
an efficient improvement. There are more efficient variations of this method using some
kind of convexity property of f , but that is beyond the scope of this course.
22                                                              4.5. RANDOM CASHFLOWS


Actually, the iterations are for computers to carry out. For assignment and examination
questions, you should make good guesses of l0 and r0 and carry out one linear interpola-
tion, then claiming an approximate yield.

Example 44 (continued) Good guesses are r0 = 6% and l0 = 5%, since i = 5.95% is
mostly used. [Better, but a priori less obvious guess would be r0 = 5.5%.] Then
                       
  f (5%) = −3, 310.48                         f (6%)              −f (5%)
                          ⇒ y(c) ≈ 5%                    + 6%                 = 5.46%.
  f (6%) = 3874.60                       f (6%) − f (5%)      f (6%) − f (5%)


4.5     Random cashflows
In this section we start to explore random cashflows, with examples based on common
financial securities. Our expected present value will be given by the following equation:
                                           " n                #
                                            X
                           E (NPV(i)) = E       Cm (1 + i)−Tm
                                                m=1

Note that we can take the expectation inside the summation (the expectation of a sum
is the sum of the expectations. If the times of C are deterministic Tm = tm and only the
amounts Cm random, the expected present value is
                                       n
                                       X
                                A=           E[Cm ](1 + i)−tm
                                       m=1

and depends only on the mean amounts, since the deterministic (1 + i)−tm can be taken
out of the expectation. Such a situation arises for share dividends.
Example 45 (Discounted Dividend Model). Consider a share which has just paid a
dividend of d0 . Suppose that each year, the dividend increases by an independent random
factor 1 + Gm , m ≥ 1, with G ∈ (−1, ∞) and E(Gm ) = g. Then the mth dividend will
be
Dm = d0 ×(1+G1 )×· · ·×(1+Gm ),         with E(Dm ) = d0 ×E(1+G1 )×· · ·×E(1+Gm ) = d0 (1+g)m
What is the net price for this share? We assume that annual dividends continue indefi-
nitely, so the random cash-flow is C = ((1, D1 ), (2, D2 ), . . .) = ((m, Dm ), m ≥ 1) with
                                     X
                       E(NPV(i)) =       E(Dm )(1 + i)−m
                                       m≥1
                                       X
                                   =         d0 (1 + g)m (1 + i)−m
                                       m≥1

                                       d0 (1 + g)    1
                                   =
                                          1+i 1−(1 + g)(1+i)−1
                                       d0 (1 + g)
                                   =
                                          i−g
provided that g < i, for the geometric series to converge.
LECTURE 4. THE YIELD OF A CASH-FLOW                                                                       23


Random cashflows with Bernoulli random variables Consider the special case
where Cm = cm with probability pm , and Cm = 0 with probability (1 − pm ). We can say
Cm = Bm cm , where Bm is a Bernoulli random variable with parameter pm , i.e.
                              
                                1 with probability pm ,
                       Bm =
                                0 with probability 1 − pm .

For the random cash-flow C = ((t1 , B1 c1 ), . . . , (tn , Bn cn )), we have
            n
            X                               n
                                            X                                  n
                                                                               X
                                 −tm                          −tm
      A=          E(Bm cm (1 + i)      )=         cm (1 + i)        E(Bm ) =         pm cm (1 + i)−tm .
            m=1                             m=1                                m=1

Note that we have not required the Bm to be independent (nor assumed anything at all
about their dependence structure).
Example 46. A corporate bond is of this form, with Bm = 1 if T > m for a default time
T . A life annuity is also of this form, again with Bm = 1 if T > m for a lifetime T .


Random times for cashflows We can also consider the special case where the amounts
of a random cash-flow are fixed Cj = cj and only the times Tj are random. In this case,
the net premium is
                              n
                              X                                n
                                                               X
                                                   −Tm
                         A=         cm E((1 + i)         )=          cm E(e−δTm ),
                              m=1                              m=1

where δ = log(1 + i). These expectations are generating functions of Tm .
Example 47. A ‘whole of life’ insurance payment is of this form (with n = 1), where a
single payment is made at the time of death.

In order to get expected values for the annuity or insurance, we would need a model of
a future lifetime. We turn to this in the next lecture.


4.6      Expected yield
For deterministic cash-flows that can be interpreted as investment deals (or loan schemes),
we defined the yield as an intrinsic rate of return. For a random cash-flow, this notion
gives a random yield which is usually difficult to use in practice. Instead, we define:
Definition 48. Let C be a random cash-flow. The expected yield of C is the interest
rate i ∈ (−1, ∞), if it exists and is unique such that

                                            E(NPV(i)) = 0,

where NVP(i) = i-Val0 (C) denotes the net present value of C at time 0 discounted at
interest rate i.
24                                                    4.7. GROSS REDEMPTION YIELD


This corresponds to the yield of the “average cash-flow”. Note that this terminology may
be misleading – this is not the expectation of the yield of C, even if that were to exist.

Example 49. An investment of £500, 000 provides

     • a continuous income stream of £50, 000 per year, starting at an unknown time S
       and ending in 6 years’ time;

     • a payment of unknown size A in 6 years’ time.

What is the expected yield under the following assumptions?

     • S is uniformly distributed between [2years, 3years] (time from now);

     • the mean of A is £700, 000.

We use units of £10, 000 and 1 year. The time-0 value at rate y is
                               Z 6
                        −50 +       5(1 + y)−s ds + (1 + y)−6 A.
                                   s=S

The expected time-0 value is
           Z 6
     −50 +      P(S < s)5(1 + y)−s ds + (1 + y)−6 E(A)
            s=2
                Z 3                        Z 6
                                    −s
       = −50 +      (s − 2)5(1 + y) ds +       5(1 + y)−s ds + (1 + y)−6 70 =: f (y).
                    s=2                         s=3

Set f (y) = 0 and find f (10.45%) = 0.1016 and f (10.55%) = −0.1502. So the expected
yield is 10.5% to 1d.p. (note that we only need to use the mean of A).

As a consequence of Proposition 52, we note:

Corollary 50. If T ∼ geom(p) and c is a cash-flow at integer times with yield y(c), then
the expected yield of C = c<T is p(1 + y(c)) − 1.

Proof: Note that NPVc (y(c)) = 0, and by Proposition 52, we have E(NPVC (i)) = 0, if
y(c) = (1 + i − p)/p, i.e. 1 + i = p(1 + y(c)), as required. Also, this is the unique solution
to the expected yield equation as otherwise the relationship 1 + i = p(1 + k) would give
more solutions to the yield equation.                                                        2


4.7       Gross redemption yield
Definition 51. The gross redemption yield is the yield on a bond, assuming that it is
held to maturity, and that all interest and principal payments are made as scheduled.
LECTURE 4. THE YIELD OF A CASH-FLOW                                                        25


Sometimes you will see a reference to the ‘yield’ on a bond, which actually means the
gross redemption yield, i.e. a yield which by convention, ignores the credit risk.
Let’s consider again the corporate bond of example 46, where we reflect credit risk with
the simplest model of a random default time T at which all payments stop: the actual
cash-flow is C = c<T .
                         " n                      #       n
                          X                               X
                                            −tm
                     E          Bm cm (1 + i)         =         pm cm (1 + i)−tm .
                          m=1                             m=1

More specifically, suppose there is an annual default probability of 1 − p (conditionally
given that default has not yet happened), in the sense that m years without default
happen with probability pm , so that T has a geometric distribution geom(p), i.e.

                           P(T = m + 1) = pm (1 − p),                m ≥ 0,

and a payment at time m will happen if and only if T > m, i.e. with probability
P(T > m) = pm . A potential payment (tm , cm ) is then modelled by a random cash-
flow (tm , Bm cm ), where P(Bm = 1) = pm and P(Bm = 0) = 1 − pm , so that also
E(Bm ) = pm . For an interest rate i, the expected discounted value of the cash-flow
C = ((t1 , B1 c1 ), . . . , (tn , Bn cn )) is
                             n
                                                   !   n                     n
                           X                           X                     X
                                               −tm                     −tm
E (NPVC (i)) = E                 Bm cm (1 + i)       =   E(Bm )cm (1+i)    =   pm cm (1+i)−m .
                    m=1                           m=1                                m=1

If we take k such that p(1 + i)−1 = (1 + k)−1 , we get
                                          n
                                          X
                       E (NPVC (i)) =           cm (1 + k)−m = NPVc (k).
                                          m=1

We have proved the following result:
Proposition 52. Let c be a discrete cash-flow with integer payment times and T ∼
geom(p), i.e. P(T = m) = pm−1 (1 − p), m ≥ 1. Let C = c<T . Then for any i > −1,

                                   E (NPVC (i)) = NPVc (k),

where k = (1 + i − p)/p.

Note that here if for some i, say i∗ we have E (NPVC (i∗ )) = 0 then i∗ is the expected yield
and k ∗ is then the gross redemption yield.

Market prices and expected present value The probability of future default is
not observable in the market, although it could be estimated based on historical data.
If we are given the yield k of a corporate bond (which is only achieved if default does
not occur!) and the yield i of a comparable default-free bond, there is an implied annual
default probability of 1 − p = 1 − (1 + i)/(1 + k) = (k − i)/(1 + k).
26                                                 4.7. GROSS REDEMPTION YIELD


In many cases, this seems to give an implausibly high probability of default - why? If we
substitute an estimated probability of default, then we can rephrase the question: why
do some bonds appear to trade at a price lower than their expected present value? In
the later part of the course we will demonstrate other factors that can affect the price of
the risky bond.
Lecture 5

Modelling future lifetimes

                                     Reading: Gerber Sections 2.1, 2.2, 2.4, 3.1, 3.2, 4.1

In this lecture we introduce and apply actuarial notation for lifetime distributions.


5.1     Introduction to life insurance
The lectures that follow are motivated by the following problems.

  1. An individual aged x would like to buy a life annuity (e.g. a pension) that pays
     him a fixed amount N p.a. for the rest of his life. How can a life insurer determine
     a fair price for this product?
  2. An individual aged x would like to buy a whole life insurance that pays a fixed
     amount S to his dependants upon his death. How can a life insurer determine a
     fair single or annual premium for this product?
  3. Other related products include pure endowments that pay an amount S at time n
     provided an individual is still alive, an endowment assurance that pays an amount
     S either upon an individual’s death or at time n whichever is earlier, and a term
     assurance that pays an amount S upon an individual’s death only if death occurs
     before time n.

The answer to these questions will depend on the chosen model of the future lifetime Tx
of the individual.


5.2     Lives aged x
For a continuously distributed random lifetime T , we write FT (t) = P(T ≤ t) for the
cumulative distribution function, fT (t) = FT0 (t) for the probability density function,
F T (t) = P(T > t) for the survival function and ωT = inf{t ≥ 0 : F T (t) = 0} for the
maximal possible lifetime.
                                            27
28                                                                               5.2. LIVES AGED X


Definition 53. The function
                                                fT (t)
                                     µT (t) =           ,    t ≥ 0,
                                                F T (t)

specifies the force of mortality or hazard rate at (time) t.
                                 1
Proposition 54. We have            P(T ≤ t + ε|T > t) → µT (t) as ε → 0.
                                 ε

Proof: We use the definitions of conditional probabilities and differentiation:

      1                      1 P(T > t, T ≤ t + ε)   1 P(T ≤ t + ε) − P(T ≤ t)
        P(T ≤ t + ε|T > t) =                       =
      ε                      ε       P(T > t)        ε          P(T > t)
                                                            0
                               1 FT (t + ε) − FT (t)      F (t)     fT (t)
                           =                         −→ T         =         = µT (t).
                             F T (t)        ε             F T (t)   F T (t)
                                                                                                   2

So, we can say informally that P(T ∈ (t, t + dt)|T > t) ≈ µT (t)dt, i.e. µT (t) represents
for each t ≥ 0 the current “rate of death” given survival up to t.

Example 55. The exponential distribution of rate µ is given by

                                                                             µe−µt
     FT (t) = 1 − e−µt ,   F T (t) = e−µt ,    fT (t) = µe−µt ,   µT (t) =         = µ constant.
                                                                              e−µt
                                Z t         
Lemma 56. We have F T (t) = exp −    µT (s)ds .
                                                        0



Proof: First note that F T (0) = P(T > 0) = 1. Also
                                                    0
                           d               F (t)     −fT (t)
                              log F T (t) = T      =         = −µT (t).
                           dt              F T (t)   F T (t)

So                                            Z t                       Z t
                                             d
               log F T (t) = log F T (0) +      log F T (s)ds = 0 +              −µT (s)ds.
                                           0 ds                              0
                                                                                                   2

Suppose now that T models the future lifetime of a new-born person. In life insur-
ance applications, we are often interested in the future lifetime of a person aged x, or
more precisely the residual lifetime T − x given {T > x}, i.e. given survival to age
x. For life annuities this determines the random number of annuity payments that are
payable. For a life assurance contract, this models the time of payment of the sum
LECTURE 5. MODELLING FUTURE LIFETIMES                                                              29


assured. In practice, insurance companies perform medical tests and/or collect employ-
ment/geographical/medical data that allow more accurate modelling. However, let us
here assume that no such other information is available. Then we have, for each x ∈ [0, ω),
                                            P(T > x + y)   F (x + y)
                  P(T − x > y|T > x) =                   =           ,                y ≥ 0,
                                              P(T > x)       F (x)
by the definition of conditional probabilities P(A|B) = P(A ∩ B)/P(B).
It is natural to directly model the residual lifetime Tx of an individual (a life) aged x as
                                           Z x+y                   Z y              
                          F (x + y)
   F x (y) = P(Tx > y) =            = exp −          µ(s)ds = exp −         µ(x + t)dt .
                            F (x)               x                        0

We can read off µx (t) = µTx (t) = µ(x + t), i.e. the force of mortality is still the same,
just shifted by x to reflect the fact that the individual aged x and dying at time Tx is
aged x + Tx at death. We can also express cumulative distribution functions
                                           F (x) − F (x + y)   F (x + y) − F (x)
                  Fx (y) = 1 − F x (y) =                     =                   ,
                                                 F (x)             1 − F (x)
and probability density functions
                          (
                                      f (x+y)
                            Fx0 (y) = 1−F  (x)
                                               = f F(x+y)
                                                      (x)
                                                          , 0 ≤ y ≤ ω − x,
                 fx (y) =
                            0,                              otherwise.
There is also actuarial lifetime notation, as follows
 t qx = Fx (t),    t px = 1 − t qx = F x (t),     qx = 1 qx ,       px = 1 px ,   µx = µ(x) = µx (0).
In this notation, we have the following consistency condition on lifetime distributions for
different ages:
Proposition 57. For all x ≥ 0, s ≥ 0 and t ≥ 0, we have
                                         s+t px = s px × t px+s .

By general reasoning, the probability that a life aged x survives for s + t years is the
same as the probability that it first survives for s years and then, aged x + s, survives
for another t years.
Proof: Formally, we calculate the right-hand side
                                        P(T > x + s) P(T > x + s + t)
s px × t px+s = P(Tx > s)P(Tx+s > t) =                                = P(Tx > s + t)
                                          P(T > x)    P(T > x + s)
              = s+t px .
                                                                                                    2
We can also express other formulas, which we have already established, in actuarial
notation:
                                        Z t                 Z t
        fx (t) = t px µx+t , t px = exp −    µx+s ds , t qx =     s px µx+s ds.
                                                    0                             0
The first one says that to die at t, life x must survive for time t and then die instanta-
neously.
30                                                                             5.3. CURTATE LIFETIMES


5.3           Curtate lifetimes
In practice, many cash-flows pay at discrete times, often at the end of each month. Let us
begin here by discretising continuous lifetimes to integer-valued lifetimes. This is often
done in practice, with interpolation being used for finer models.
Definition 58. Given a continuous lifetime random variable Tx , the random variable
Kx = [Tx ], where [·] denotes the integer part, is called the associated curtate lifetime.

Of course, one can also model curtate lifetimes directly. Note that, for continuously
distributed Tx

                P(Kx = k) = P(k ≤ Tx < k + 1) = P(k < Tx ≤ k + 1) = k px × qx+k .

Also, by Proposition 57,
                                                                k−1
                                                                Y
                                        P(Kx ≥ k) = k px =            px+j ,
                                                                j=0

i.e. Kx can be thought of as the number of successes before the first failure in a sequence
of independent Bernoulli trials with varying success probabilities px+j , j ≥ 0. Here,
success is the survival of a year, while failure is death during the year.
                                               [ω−x]
                                               X
Proposition 59. We have E(Kx ) =                       k px .
                                               k=1


Proof: By definition of the expectation of a discrete random variable,
     [ω−x]            [ω−x]                 [ω−x] [ω−x]
     X                X                     X X
             k px =           P(Kx ≥ k) =                 P(Kx = m)
     k=1              k=1                   k=1 m=k
                                            [ω−x] m                       [ω−x]
                                             XX                            X
                                        =                P(Kx = m) =                 mP(Kx = m) = E(Kx ).
                                            m=1 k=1                        m=0

                                                                                                            2

Example 60. If T is exponentially distributed with parameter µ ∈ (0, ∞), then K = [T ]
is geometrically distributed:

       P(K = k) = P(k ≤ T < k + 1) = e−kµ − e−(k+1)µ = (e−µ )k (1 − e−µ ),                        k ≥ 0.

We identify the parameter of the geometric distribution as e−µ . Note also that here
px = e−µ and qx = 1 − e−µ for all x.

In general, we get
                       k−1
                       Y                        Z k            k−1
                                                                  Y      Z x+j+1       
 P(Kx ≥ k) =                  px+j = k px = exp −    µ(x + t)dt =    exp −        µ(s)ds ,
                       j=0                           0                         j=0          x+j
LECTURE 5. MODELLING FUTURE LIFETIMES                                                                          31


so that we read off               Z x+1       
                         px = exp −      µ(s)ds ,                             x ≥ 0.
                                                 x

In practice, µ is often assumed constant between integer points (denoted µx+0.5 ) or con-
tinuous piecewise linear between integer points.


5.4      Examples and Actuarial Notation
Let us now return to our motivating problem.

Example 61 (Whole life insurance). Let Kx be a curtate future lifetime. A whole life
insurance pays one unit at the end of the year of death, i.e. at time Kx + 1. In the model
of a constant force of interest δ, the random discounted value at time 0 is Z = e−δ(Kx +1) ,
so the expected present value for this random cash-flow is
                                         ∞
                                         X                                     ∞
                                                                               X
    Ax = E(Z) = E(e−δ(Kx +1) ) =                e−δk P(Kx = k − 1) =                 (1 + i)−m−1 m px qx+m ,
                                          k=1                                  m=0


where i = eδ − 1.

Example 62 (Term assurance, pure endowment and endowment). The expected present
value of a term insurance is denoted by
                                                     n−1
                                                     X
                                        A1x:n| =           v k+1 kpx qx+k .
                                                     k=0

The superscript 1 above the x indicates that 1 is only paid in case of death within the
period of n years.
The expected present value of a pure endowment is denoted by Ax:n1 | = v n npx . Here the
superscript 1 indicates that 1 is only paid in case of survival of the period of n years.
The expected present value of an endowment is denoted by Ax:n| = A1x:n| + Ax:n1 | , where
we could have put a 1 above both x and n, but this is omitted being the default, like in
previous symbols.

Example 63 (Life annuities). Given a constant i interest model, the expected present
value of an ordinary (respectively temporary) life annuity for a life aged x is given by
                             ∞
                             X                                                n
                                                                              X
                                    k
                      ax =         v k px     respectively ax:n| =                  v k k px .
                             k=1                                              k=1

For an ordinary (respectively temporary) life annuity-due, an additional certain payment
at time 0 is made (and any payment at time n omitted):

                      äx = 1 + ax          respectively äx:n| = 1 + ax:n−1| .
32                                                5.5. SIMPLE LAWS OF MORTALITY


5.5       Simple laws of mortality
As we have seen, the theory is nicest for exponentially distributed lifetimes. However, the
exponential distribution is not actually a good distribution to model human lifetimes:

     • One reason that we have seen is that the curtate lifetime is geometric, i.e. each
       year given survival up to then, there is the same probability of dying in the next
       year. In practice, you would expect that this probability increases for higher ages.
     • There is clearly significantly positive probability to survive up to age 70 and zero
       probability to survive to age 140, and yet the exponential distribution suggests that

                         P(T > 140) = e−140µ = (e−70µ )2 = (P(T > 70))2 .

       Specifically, if we think there is at least 50% chance of a newborn to survive to age
       70, there would be at least 25% chance to survive to age 140; if we think that the
       average lifetime is more than 70, then µ < 1/70, so P(T > 140) > e−2 > 10%.
     • More formally, the exponential distribution has the lack of memory property, which
       here says that the distribution of Tx is still exponential with the same parameter,
       independent of x. This would mean that there is no ageing.

These observations give some ideas for more realistic models. Generally, we would favour
models with an eventually increasing force of mortality (in reliability theory such distri-
butions are called IFR distributions – increasing failure rate).

     1. Gompertz’ Law: µ(t) = Bct for some B > 0 and c > 1.
     2. Makeham’s Law: µ(t) = A + Bct for some A ≥ 0, B > 0 and c > 1 (or c > 0 to
        include DFR – decreasing failure rate cases).
     3. Weibull: µ(t) = ktβ for some k > 0 and β > 0.

Makeham’s Law actually gives a reasonable fit for ages 30-70.


5.6       The life-table
Suppose we have a population of newborn individuals (or individuals aged α > 0, some
lowest age in the table). Denote the size of the population by `α . Then let us observe
each year the number `x of individuals still alive, until the age when the last individual
dies reaching `ω = 0. Then out of `x individuals, `x+1 survived age x, and the proportion
`x+1 /`x can be seen as the probability for each individual to survive. So, if we set

                          px = `x+1 /`x     for all α ≤ x ≤ ω − 1.

we specify a curtate lifetime distribution. The function x 7→ `x is usually called the
life-table in the strict sense.
LECTURE 5. MODELLING FUTURE LIFETIMES                                                      33


Note that also vice versa, we can specify a life-table with any given curtate lifetime
distribution by choosing `0 = 100, 000, say, and setting `x = `0 × x p0 . In this case, we
should think of `x as the expected number of individuals alive at age x. Strictly speaking,
we should distinguish px and its estimate pbx = `x+1 /`x , but actuarial practice does not
tend to develop this idea.


5.6.1     Interpolation for non-integer ages x + u, x ∈ N, u ∈ (0, 1)
If a life table describes a distribution for Curtate Lifetimes, it is sometimes necessary to
extend this to deal with payments in continuous time. There are two popular models.


Model 1 Assume that the force of mortality µt is constant between each (x, x + 1),
x ∈ N. This implies
                  Z x+1      
        px = exp −       µt dt = exp (−µx+0.5 )   ⇒      µx+ 1 = − ln(px ).
                                                                      2
                         x

Also, for 0 ≤ u ≤ 1,
                                 Z x+u      
        P(T > x + u|T > x) = exp −      µt dt = exp {−uµx+0.5 } = (1 − qx )u ,
                                         x

and with notation T = K + S, where K = [T ] is the integer part and S = {T } =
T − [T ] = T − K the fractional part of T , this means that

                       P(x ≤ T ≤ x + u)/P(T > x)   1 − exp {−uµx+0.5 }
P(S ≤ u|K = x) =                                 =                     ,           0 ≤ u ≤ 1,
                       P(x ≤ T < x + 1)/P(T > x)    1 − exp {−µx+0.5 }

a distribution that is in fact the exponential distribution with parameter µx+0.5 , truncated
at ω = 1: for exponentially distributed E

                               P(E ≤ u)   1 − exp {−uµx+0.5 }
          P(E ≤ u|E ≤ 1) =              =                     ,           0 ≤ u ≤ 1.
                               P(E ≤ 1)    1 − exp {−µx+0.5 }

Since the parameter depends on x, S is not independent of K here.


Model 2 Assume that S and K are independent, and that S has a uniform distribu-
tion on [0, 1]. This is convenient, for example, when calculating variances of continuous
lifetimes. Mathematically speaking, these models are not compatible: in Model 2, we
have, instead, for 0 ≤ u ≤ 1,

          F̄Tx (u) = P(T > x + u|T > x)
                   = P(K ≥ x + 1|K ≥ x) + P(S > u|K = x)P(K = x|T > x)
                   = (1 − qx ) + (1 − u)qx = 1 − uqx .
34                                                                5.7. PRACTICAL CONCERNS


We then calculate the force of mortality at x + u as

                                             F̄T0 x (u)      qx
                                    µx+u = −            =
                                             F̄Tx (u)     1 − uqx

and this is increasing in u. Note that µ is discontinuous at (some if not all) integer times.1
If one of the two assumptions is satisfied, the above formulae allow to reconstruct the full
distribution of a lifetime T from the entries (qx )x∈N of a life-table: from the definition of
conditional probabilities
                                                       
                                                          1 − e−(t−[t])µx+0.5
                            P(K = [t], S ≤ t − [t])
                                                       
                                                                              in Model 1,
   P(S ≤ t − [t]|K = [t]) =                          =        1 − e−µx+0.5
                                  P(K = [t])           
                                                       
                                                           t − [t]             in Model 2,
                                                       

we deduce that

               P(T ≤ t) = P(K ≤ [t] − 1) + P(K = [t])P(S ≤ t − [t]|K = [t]),

and we have already expressed the distribution of K in terms of (qx )x∈N .


5.7       Practical concerns
     • Mortality depends on individual characteristics (wealth, lifestyle, genetic factors).
       Even in dealing with large populations, once we try to allow for these factors, there
       may be less data with which to calibrate life tables, especially at high ages. Models
       include scaling or shifting already existing tables as a function of the characteristics.

     • We need to estimate future mortality, which may not be the same as current or
       past mortality. To allow for mortality improvement, most life tables are now two-
       dimensional: a 60-year old in 2060 is likely to have a different mortality from a
       60-year old in 2010. A two-dimensional life-table should be indexed separately by
       calendar year of birth and age, or current calendar year and age.

     • Prediction of future mortality is a major actuarial problem. Extrapolating sub-
       stantially into the future is subject to considerable uncertainty, given the difficulty
       of predicting medical advances or the future pattern of disease.




     1
    The only exception is very artificial, as we require qx+1 = qx /(1 − qx ), and in order for this to not
                                                                      α
exceed 1 at some point, we need q0 = α = 1/n, and then qk = 1−kα         , k = 1, . . . , n − 1, with ω = n
maximal age. Usually, one accepts discontinuities.
Lecture 6

Evaluation of life insurance products

                                                           Reading: Gerber Sections 3.2 - 3.6, 4.2



6.1      Life assurances
Recall that the fair single premium for a whole life assurance is
                                                     ∞
                                                     X
                                        Kx +1
                             Ax = E(v           )=         v k+1 k px qx+k ,
                                                     k=0


where v = e−δ = (1 + i)−1 is the discount factor in the constant-i model. Note also
that higher moments of the present value are easily calculated. Specifically, the second
moment
                                 2
                                  Ax = E(v 2(Kx +1) ),
associated with discount factor v 2 , is the same as Ax calculated at a rate of interest
i0 = (1 + i)2 − 1, and hence
                                                             2
                 Var(v Kx +1 ) = E(v 2(Kx +1) ) − E(v Kx +1 ) = 2Ax − (Ax )2 .

Remember that the variance as expected squared deviation from the mean is a quadratic
quantity and mean and variance of a whole life assurance of sum assured S are

    E(Sv Kx +1 ) = SAx      and      Var(Sv Kx +1 ) = S 2 Var(v Kx +1 ) = S 2 ( 2Ax − (Ax )2 ).

Similarly for a term assurance,

   E Sv Kx +1 1{Kx <n} = SA1x:n|    and Var Sv Kx +1 1{Kx <n} = S 2            2 1
                                                                                Ax:n| − (A1x:n| )2
                                                                                                   


for a pure endowment

   E Sv n 1{Kx ≥n} = SAx:n1 | = Sv n npx   and Var(Sv n 1{Kx ≥n} ) = S 2        2
                                                                                 Ax:n1 | − (Ax:n1 | )2
                                                                                                        

                                                 35
36                 6.2. LIFE ANNUITIES AND PREMIUM CONVERSION RELATIONS


and for an endowment assurance

       E(Sv min(Kx +1,n) ) = SAx:n|             and Var(Sv min(Kx +1,n) ) = S 2             2
                                                                                               Ax:n| − (Ax:n| )2
                                                                                                                   

Note that

           S2   2
                   Ax:n| − (Ax:n| )2 6= S 2           2 1
                                                       Ax:n| − (A1x:n| )2       + S2   2
                                                                                       Ax:n1 | − (Ax:n1 | )2 ,
                                                                                                          

because term assurance and pure endowment are not independent, quite the contrary, the
product of their discounted values always vanishes, so that their covariance −S 2 A1x:n| Ax:n1 |
is maximally negative. In other notation, from the variance formula for sums of dependent
random variables,

     Var(Sv min(Kx +1,n) ) = Var(Sv Kx +1 1{Kx <n} + Sv n 1{Kx ≥n} )
       = Var(Sv Kx +1 1{Kx <n} ) + Var(Sv n 1{Kx ≥n} ) + 2Cov(Sv Kx +1 1{Kx <n} , Sv n 1{Kx ≥n} )
       = Var(Sv Kx +1 1{Kx <n} ) + Var(Sv n 1{Kx ≥n} ) − 2E(Sv Kx +1 1{Kx <n} )E(Sv n 1{Kx ≥n} )
       = S 2 2A1x:n| − (A1x:n| )2 + S 2 2Ax:n1 | − (Ax:n1 | )2 − S 2 A1x:n| Ax:n1 | .
                                                             



6.2       Life annuities and premium conversion relations
Recall present values of whole-life annuities, temporary annuities and their due versions
             ∞
             X                            n
                                          X
      ax =         v k k px ,   ax:n| =         v k k px ,         äx = 1 + ax    and äx:n| = 1 + ax:n−1| .
             k=1                          k=1

Also note the simple relationships (that are easily proved algebraically)

                                ax = vpx äx+1               and      ax:n| = vpx äx+1:n| .

By general reasoning, they can be justified by saying that the expected discounted value
of regular payments in arrears for up to n years contingent on a life x is the same as the
expected discounted value of up to n payments in advance contingent on a life x + 1,
discounted by a further year, and given survival of x for one year (which happens with
probability px ).
To calculate variances of discounted life annuity values, we use premium conversion re-
lations:

Proposition 64. Ax = 1 − däx and Ax:n| = 1 − däx:n| , where d = 1 − v.

Proof: The quickest proof is based on the formula än| = (1 − v n )/d from last term

                                   1 − v Kx +1     1 − E(v Kx +1 )
                                              
                                                                     1 − Ax
            äx = E(äKx +1| = E                 =                 =        .
                                       d                d               d

The other formula is similar, with Kx + 1 replaced by min(Kx + 1, n).                                                  2
LECTURE 6. EVALUATION OF LIFE INSURANCE PRODUCTS                                                                 37


Now for a whole life annuity,

                      1 − v Kx
                                      Kx +1 
                                        v          1                 1
                                                 = 2 Var(v Kx +1 ) = 2                          2
                                                                                                 Ax − (Ax )2 .
                                                                                                            
  Var(aKx | ) = Var              = Var
                         i                d       d                 d
For a whole life annuity-due,
                                                                1        2
                                                                         Ax − (Ax )2 .
                                                                                    
                      Var(äKx +1| ) = Var(1 + aKx | ) =
                                                                d2

Similarly,

                                            1 − v min(Kx ,n)
                                                            min(Kx +1,n+1) 
                                                                
                                                             v
             Var(amin(Kx ,n)| ) = Var               = Var
                                                   i               d
                                  1 2
                                = 2 Ax:n+1| − (Ax:n+1| )2
                                                          
                                  d
and                                                         1                  2
                                                                                     Ax:n| − (Ax:n| )2 .
                                                                                                      
             Var(ämin(Kx +1,n)| ) = Var 1 + amin(Kx ,n−1)| = 2
                                                             d


6.3      Continuous life assurance functions
A whole of life assurance with payment exactly at date of death has expected present
value                             Z ∞              Z ∞
                             Tx        t
                    Ax = E(v ) =      v fx (t)dt =     v t t px µx+t dt.
                                         0                           0
An annuity payable continuously until the time of death has expected present value
                                             Z ∞
                                   1 − v Tx
                                 
                          ax = E             =      v t t px dt.
                                       δ         0

Note also the premium conversion relation Ax = 1 − δax .
For a term assurance with payment exactly at the time of death, we obtain
                                                Z n
                         1        Tx
                       Ax:n| = E(v 1{Tx ≤n} ) =     v t t px µx+t dt.
                                                            0

Similarly, variances can be expressed, as before, e.g.
                                                        1                    1
                             Var(v Tx 1{Tx ≤n} ) = 2 Ax:n| − (Ax:n| )2 .


6.4      More general types of life insurance
In principle, we can find appropriate premiums for any cash-flow of benefits that depend
on Tx , by just taking expected discounted values. An example of this was on Assignment
38                                6.4. MORE GENERAL TYPES OF LIFE INSURANCE


4, where an increasing whole life assurance was considered that pays Kx + 1 at time
Kx + 1. The purpose of the exercise was to establish the premium conversion relation

                                      (IA)x = äx − d(Iä)x

that relates the premium (IA)x to the increasing life annuity-due that pays k + 1 at
time k for 0 ≤ k ≤ Kx . It is natural to combine such an assurance with a regular
savings plan and pay annual premiums. The principle that the total expected discounted
premium payments coincide with the total expected discounted benefits yield a level
annual premium (IP )x that satisfies

                                                                               (Iä)x
                (IP )x äx = (IA)x = äx − d(Iä)x      ⇒     (IP )x = 1 − d          .
                                                                                 äx
Similarly, there are decreasing life assurances. A regular decreasing life assurance is useful
to secure mortgage payments. The (simplest) standard case is where a payment of n−Kx
is due at time Kx + 1 provided Kx < n. This is a term assurance. We denote its single
premium by
                                          n−1
                                          X
                             (DA)1x:n| =      (n − k)v k+1 k px qx+k
                                            k=0

and note that

                (DA)1x:n| = A1x:n| + A1x:n−1| + · · · + A1x:1| = nA1x:n| − (IA)1x:n| ,

where (IA)1x:n| denotes the present value of an increasing term-assurance.
Lecture 7

Premiums

                                 Reading: Gerber Sections 5.1, 5.3, 6.2, 6.5, 10.1, 10.2


In this lecture we incorporate expenses into premium calculations. On average, such
expenses are to cover the insurer’s administration cost, contain some risk loading and a
profit margin for the insurer. We assume here that expenses are incurred for each policy
separately. In practice, actual expenses per policy also vary with the total number of
policies underwritten. There are also strategic variations due to market forces.



7.1     Different types of premiums
Consider the future benefits payable under an insurance contract, modelled by a random
cash-flow C. Recall that typically payment for the benefits are either made by a sin-
gle lump sum premium payment at the time the contract is effected (a single-premium
contract) or by a regular annual (or monthly) premium payments of a level amount for
a specified term (a regular premium contract). Note that we will be assuming that all
premiums are paid in advance, so the first payment is always due at the time the policy
is effected.

Definition 65.     • The net premium (or pure premium) is the premium amount re-
     quired to meet the expected benefits under a contract, given mortality and interest
     assumptions.

   • The office premium (or gross premium) is the premium required to meet all the costs
     under an insurance contract, usually including expected benefit cost, expenses and
     profit margin. This is the premium which the policy holder pays.

In this terminology, the net premium for a single premium contract is the expected cost
of benefits E(Val0 (C)). E.g., the net premium for a single premium whole life assurance
policy of sum assured 1 issued to a life aged x is Ax .
                                          39
40                                                                         7.2. NET PREMIUMS


In general, recall the principle that the expected present value of net premium payment
equals the expected present value of benefit payments. For office premiums, and later
premium reserves, it is more natural to write this from the insurer’s perspective as

expected present value of net premium income = expected present value of benefit outgo.

Then, we can say similarly

expected present value of office premium income
                           = expected present value of benefit outgo
                                    + expected present value of outgo on expenses
                                    + expected present value of required profit loading.

Definition 66. A (policy) basis is a set of assumptions regarding future mortality, in-
vestment returns, expenses etc.

The basis used for calculating premiums will usually be more cautious than the best
estimate for a number of reasons, including to allow for a contingency margin (the insurer
does not want to go bust) and to allow for uncertainty in the estimates themselves.


7.2      Net premiums
We will use the following notation for the regular net premium payable annually through-
out the duration of the contract:

                              Px:n|      for an endowment assurance
                               1
                              Px:n|      for a term assurance
                               Px        for a whole life assurance.

In each case, the understanding is that we apply a second principle which stipulates
that the premium payments end upon death, making the premium payment cash-flow a
random cash-flow. We also introduce

            n Px     as regular net premium payable for a maximum of n years.

To calculate net premiums, recall that premium payments form a life annuity (temporary
or whole-life), so we obtain net annual premiums from the first principle of equal expected
discounted values for premiums and benefits, e.g.

                                                                     Ax:n|
                           äx:n| Px:n| = Ax:n|      ⇒     Px:n| =          .
                                                                     äx:n|

            1
                     A1x:n|        Ax            Ax
Similarly, Px:n| =          , Px =     , n Px =        .
                     äx:n|        äx          äx:n|
LECTURE 7. PREMIUMS                                                                         41


7.3      Office premiums
For office premiums, the basis for their calculation is crucial. We are already used to
making assumptions about an interest rate model and about mortality. Expenses can be
set in a variety of ways, and often it is a combination of several expenses that are charged
differently. It is of little value to categorize expenses by producing a list of possibilities,
because whatever their form, they describe nothing else than a cash-flow, sometimes
involving the premium to be determined. Finding the premium is solving an equation of
value, which is usually a linear equation in the unknown. We give an example.
Example 67. Calculate the premium for a whole-life assurance for a sum assured of
£10,000 to a life aged 40, where we have
         Expenses:      £100 to set up the policy,
                        30% of the first premium as a commission,
                        1.5% of subsequent premiums as renewal commission,
                        £10 per annum maintenance expenses (after first year).
If we denote the gross premium by P , then the equation of value that sets expected
discounted premium payments equal to expected discounted benefits plus expected dis-
counted expenses is
                  P ä40 = 10, 000A40 + 100 + 0.3P + 0.015P a40 + 10a40 .
Therefore, we obtain
                                            10, 000A40 + 100 + 10a40
                       gross premium P =                             .
                                              ä40 − 0.3 − 0.015a40
In particular, we see that this exceeds the net premium
                                         10, 000A40
                                                    .
                                             ä40


7.4      Prospective policy values
Consider the benefit and premium payments under a life insurance contract. Given a
policy basis and given survival to time t, we can specify the expected present value of
the contract (for the insured) at a time t during the term of the contract as
       Prospective policy value = expected time-t value of future benefits
                                  − expected time-t value of future premiums.
We call net premium policy value the prospective policy value when no allowance is made
for future expenses and where the premium used in the calculation is a notional premium,
using the policy value basis. For the net premium policy values of the standard products
at time t we write
                                      1
                        t Vx:n| , t Vx:n| , t Vx , t V x:n| , tV x, etc.
42                                                        7.4. PROSPECTIVE POLICY VALUES


Example 68 (n-year endowment assurance). The contract has term max{Kx + 1, n}.
We assume annual level premiums. When we calculate the net premium policy value at
time k = 1, . . . , n − 1, this is for a life aged x + k, i.e. a life aged x at time 0 that survived
to time k. The residual term of the policy is up to n − k years, and premium payments
are still at rate Px:n| . Therefore,

                                 k Vx:n| = Ax−k:n−k| − Px:n| äx+k:n−k|

But from earlier calculations of premiums and associated premium conversion relations,
we have
                                 Ax:n|
                         Px:n| =        and Ay:m| = 1 − däy:m| ,
                                 äx:n|
so that the value of the endowment assurance contract at time k is
                                              äx+k:n−k|
              k Vx:n|   = Ax+k:n−k| − Ax:n|
                                                 äx:n|
                                                             äx+k:n−k|         äx+k:n−k|
                        = 1 − däx+k:n−k| − (1 − däx:n| )                =1−                ,
                                                               äx:n|             äx:n|
where we recall that this quantity refers to a surviving life, while the prospective value
for a non-surviving life is zero, since the contract will have ended.
As an aside, for a life aged x at time 0 that did not survive to time k, there are no future
premium or benefit payments, so the prospective value of such an (expired) policy at
such time k is zero. The insurer may have made a loss on this individual policy, such loss
is paid for by parts of premiums under other policy contracts (in the same portfolio).
Example 69 (Whole-life policies). Similarly, for whole-life policies with payment at the
end of the year of death, for k = 1, 2, . . .,
                                        Ax                                      äx+k     äx+k
  k Vx = Ax+k − Px äx+k = Ax+k −           äx+k = (1 − däx+k ) − (1 − däx )       =1−       ,
                                        äx                                       äx       äx
or with payment at death for any real t ≥ 0.

                                         Ax                                  ax+t     ax+t
     t V x = Ax+t − P x ax+t = Ax+t −       ax+t = (1 − δax+t ) − (1 − δax )      =1−      .
                                         ax                                   ax       ax

While for whole-life and endowment policies the prospective policy values are increasing
(because there will be a benefit payment at death, and death is more likely to happen
soon, as the policyholder ages), the behaviour is quite different for temporary assurances
(because it is also getting more and more likely that no benefit payment is made):
Example 70 (Term assurance policy). Consider a 40-year policy issued to a life aged
25 subject to A1967/70 mortality. For a sum assured of £100, 000 and i = 4%, the net
premium of this policy can best be worked out by a computer: £100, 000P25:40| = £310.53.
                                  1
The prospective policy values k V25:40| = A125+k,40−k| − P25:40|
                                                          1
                                                                 ä25+k:40−k| per unit sum assured
give policy values as in Figure 7.1, plotted against age, rising up to age 53, then falling.
LECTURE 7. PREMIUMS                                                                                                                                                                           43




                                              Temporary life assurance, x=25, n=40, S=£100,000
                               8000




                                                                                                                                               ++++
                                                                                                                                          ++          +
                                                                                                                                      +
                                                                                                                                  +                       +
                                                                                                                              +                               +
                                                                                                                          +
                                                                                                                      +                                           +
                                                                                                                  +
                               6000




                                                                                                              +                                                       +
                                                                                                          +
                                                                                                      +
                                                                                                                                                                          +
                                                                                                  +
                                                                                              +
                     reserve

                               4000




                                                                                          +                                                                                   +
                                                                                      +
                                                                                  +
                                                                              +                                                                                                   +
                                                                          +
                                                                      +
                               2000




                                                                  +
                                                              +                                                                                                                       +
                                                          +
                                                      +
                                                  +
                                              +
                                          +
                                      +                                                                                                                                                   +
                               0




                                                      30                                      40                                      50                          60

                                                                                                                  age


       Figure 7.1: Prospective policy values for a temporary assurance.
Lecture 8

Reserves and risk

                                                   Reading: Gerber Sections 6.1, 6.3, 6.11

In many long-term life insurance contracts the cost of benefits is increasing over the term
but premiums are level (or single). Therefore, the insurer needs to set aside part of early
premium payments to fund a shortfall in later years of contracts. In this lecture we
calculate such reserves.


8.1       Reserves and random policy values
Recall

         Prospective policy value = expected time-t value of future benefits
                                    − expected time-t value of future premiums.

If this prospective policy value is positive, the life office needs a reserve for that policy,
i.e. an amount of funds held by the life office at time t in respect of that policy. Apart
possibly from an initial reserve that the insurer provides for solvency reasons, such a
reserve typically consists of parts of earlier premium payments.
If the reserve exactly matches the prospective policy value and if experience is exactly as
expected in the policy basis then reserve plus future premiums will exactly meet future
liabilities. Note, however, that the mortality assumptions in the policy basis usually build
a stochastic model that for a single policy will produce some spread around expected
values. If life offices hold reserves for portfolios of policies, where premiums for each
policy are set to match expected values, randomness will mean that some policies will
generate surplus that is needed to pay for the shortfall of other policies.
When calculating present values of insurance policies and annuity contracts in the first
place, it was convenient to work with expectations of present values of random cashflows
depending on a lifetime random variable Tx or Kx = [Tx ]. We can formalise prospective
policy values in terms of an underlying stochastic lifetime model, and a constant-i (or
constant-δ) interest model. A life insurance contract issued to a life aged x gives rise to a
                                             44
LECTURE 8. RESERVES AND RISK                                                               45


random cash-flow C = C B − C P of benefit inflows C B and premium outflows −C P . The
associated prospective policy value is
                                                          B         P
                    E(Lt |Tx > t),      where Lt = Valt (C|(t,∞) − C|[t,∞) ),
where the subtlety of restricting to times (t, ∞) and [t, ∞), respectively, arises naturally
(and was implicit in calculations for Examples 68 and 69), because premiums are paid
in advance and benefits in arrears in the discrete model, so for t = k ∈ N, a premium
payment at time k is in advance (e.g. for the year (k, k + 1]), while a benefit payment at
time k is in arrears (e.g. for death in [k − 1, k)). Note, in particular, that if death occurs
during [k − 1, k), then Lk = 0 and Lk−1 = v − Px , where v = (1 + i)−1 .
Proposition 71 (Recursive calculation of policy values). For a whole-life assurance, we
have
                      (k Vx + Px )(1 + i) = qx+k + px+k k+1 Vx .
By general reasoning, the value of the policy at time k plus the annual premium for year
k payable in advance, all accumulated to time k + 1 will give the death benefit of 1 for
death in year k +1, i.e., given survival to time k, a payment with expected value qx+k and,
for survival, the policy value k+1 Vx at time k + 1, a value with expectation px+k k+1 Vx .
Proof: The most explicit actuarial proof exploits the relationships between both as-
surance and annuity values for consecutive ages (which are obtained by partitioning
according to one-year death and survival)
              Ax+k = vqx+k + vpx+k Ax+k+1        and äx+k = 1 + vpx+k äx+k+1 .
Now we obtain
             k V x + Px   =   Ax+k − Px äx+k + Px
                          =   vqx+k + vpx+k Ax+k+1 − (1 + vpx+k äx+k+1 )Px + Px
                          =   v(qx+k + px+k (Ax+k+1 − Px äx+k+1 )
                          =   v(qx+k + px+k k+1 Vx ).
                                                                                            2
An alternative proof can be obtained by exploiting the premium conversion relationship,
which reduces the recursive formula to äx+k = 1 + vpx+k äx+k+1 . However, such a proof
does not use insight into the cash-flows underlying the insurance policy.
A probabilistic proof can be obtained using the underlying stochastic model: by defini-
tion, k Vx = E(Lk |Tx > k), but we can split the cash-flow underlying Lk as
            B         P                                         B           P
           C|(k,∞) − C|[k,∞) = ((0, −Px ), (1, 1{k≤Tk <k+1} ), C|(k+1,∞) − C|[k+1,∞) ).
Taking Valk and E( · |Tx > k) then using E(1{k≤Tx <k+1} |Tx > k) = P(Tx < k + 1|Tk > k) =
qx+k , we get
          k Vx = −Px + vqx+k + vE(Lk+1 |Tx > k) = −Px + vqx+k + vpx+k k+1 Vx ,

where the last equality uses E(X|A) = P(B|A)E(X|A ∩ B) + P(B c |A)E(X|A ∩ B c ), the
partition theorem, where here X = Lk+1 = 0 on B c = {Tx < k + 1}.
There are similar recursive formulas for the other types of life insurance contracts.
46                                                                      8.2. RISK POOLING


8.2      Risk pooling

There are many contradictory and ambiguous definitions of risk; for our purposes, when
we talk of ‘a risk’, we mean an uncertain, variable, yet quantifiable, financial outcome.
The insurance industry takes on certain risks against premium payment, e.g. as fire
insurance or temporary life assurance. Mathematically, we can capture many of these
risks in stochastic models as events with small probability and large cost.
Consider a random variable X representing an expenditure without insurance. In order
for a policyholder to eliminate this risk, they could transfer this to an insurance company
in return for a deterministic premium payment P .
Why would an insurer want to take on the risk? First of all, we expect P > E(X). The
policyholder is willing to pay more than the net premium to eliminate the risk, and this
gives the insurer a positive expected return (ignoring costs). However, writing the policy
might expose the insurer to an unacceptably high level of risk. This can be overcome by
taking on many risks. Let us now formalise this pooling effect.
An insurer takes on many risks X1 , . . . , Xn , say. In the simplest case, these can be
assumed to be independent and identically distributed. This is a realistic assumption for
a portfolio of identical life assurance policies issued to a homogeneous population. This
is not a reasonable assumption for a flood insurance, because if one property is flooded
due to extreme weather then it is likely other properties will be similarly flooded.
The random total claim amount S = X1 + · · · + Xn must be met by premium payments
A = P1 + · · · + Pn , say. We set premiums so that the probability of a loss for the insurer
does not exceed ε > 0.


Proposition 72. Given a random variable X1 with mean µ and variance σ 2 , representing
the benefits from an insurance policy, we have

                                                   
                                             σ
                                  P X1 ≥ µ + √          ≤ ε,
                                               ε

                   √
and A1 (ε) = µ + σ/ ε is the premium to be charged to achieve a loss probability below
ε.
Given independent and identically distributed X1 , . . . , Xn from n independent policies,
we obtain
                              n                      !
                             X                 σ
                         P       Xj ≥ n µ + √               ≤ ε,
                             j=1
                                                nε

                    √
i.e. An (ε) = µ + σ/ nε suffices if the risk of n policies is pooled.
LECTURE 8. RESERVES AND RISK                                                             47


Proof. The statements follow as consequences of Tchebychev’s inequality:
                n                   !              n
                                                                       !
               X                 σ                1X               σ
           P       Xj ≥ n µ + √          ≤ P            Xj − µ ≥ √
               j=1
                                  nε              n j=1
                                                                    nε
                                                  P         
                                             Var n1 nj=1 Xj       σ2
                                         ≤             2     = σ2 = ε.
                                                    √σ           n nε
                                                         nε




The estimates used in this proposition are rather weak, and the premiums suggested
require some modifications in practice, but adding a multiple of the standard deviation is
one important method. This is because the variance, and hence the standard deviation,
can often be easily calculated. For large n, so-called safety loadings An (ε)−µ proportional
to n−1/2 are of the right order, e.g. for normally distributed risks, or in general by the
Central Limit Theorem for large n, when
                              
     X1 + · · · + Xn − nµ
 P           √             ≥ c ≈ P(Z > c),          with Z standard normally distributed.
                nσ 2

The important observation in these results is that the premiums An (ε) decrease with n.
This means, that the more policies an insurer can sell the smaller gets the (relative) risk,
allowing him to reduce the premium. The proposition indicates this for identical policies,
but in fact, this is a general rule about risks with sufficient independence and no unduly
large risks.
Lecture 9

Theories of Value

                                     Reading: Eeckhoudt-Gollier-Schlesinger section 1.1


So far, the course has dealt with situations where financial decisions, such as a choice
between investment projects or setting the price of an insurance policy, have been based
on the expected present value of the contract. In the remainder of the course we consider
the limitations of expected present value as a theory of value, and introduce a new con-
cept, Expected Utility Theory, which will provide a framework for evaluating investors’
financial decisions in the face of uncertainty, such as choosing an investment vehicle or
purchasing insurance.



9.1     The St Petersburg Paradox

In 1738 Daniel Bernoulli wrote a paper in St Petersburg to show how the value placed on
a risky contract, or lottery, could depend upon subjective factors, not just an objective
mathematical expectation. We would now call this subjectivity the ‘attitude to risk’ or
‘risk appetite’ of the parties to the contract
Consider a game in which a fair coin is tossed repeatedly until a head appears. If a head
appears on the first toss, the payout is one ducat. The payout doubles with each toss, so
if the head first appears on the kth toss, the payout is 2k−1 . The expected present value
is therefore:
                          ∞                    ∞  k
                         X
                                        k−1
                                              X     1
                             P(K = k)2      =            2k−1 = ∞
                         k=1                  k=1
                                                    2

We are interested in creating a model of (rational) decision-making. How much should
someone be prepared to pay to take part in such a game? Expected Present Value theory
appears to imply that a rational person would be prepared to stake any (finite) wealth
on the game - can that be right?
                                           48
LECTURE 9. THEORIES OF VALUE                                                                49


9.1.1     Sempronius and his ships
Bernoulli gave another example in the same paper:
      Sempronius owns goods at home worth a total of 4000 ducats and in addition
      possesses 8000 ducats worth of commodities in foreign countries from where
      they can only be transported by sea. However, our daily experience teaches
      us that of ten ships one perishes.
Let us describe Sempronius’s wealth as a lottery x̃, which takes on the value of 4,000
                        1                                                          9
ducats with probability 10  (if his ship sinks), or 12,000 ducats with probability 10 .
Now let us instead assume he splits his overseas wealth into two equal portions, and
transports them on two ships. Assuming their probabilities of sinking are independent,
we now have a new lottery:
                                        1          18            81
                                                                     
                          ỹ : 4,000, 100 ; 8,000, 100 ; 12,000, 100
Now we can see that
                               1          9
                       E[x̃] = 10 4,000 + 10 12,000 = 11,200
                                1          18          81
                       E[ỹ] = 100 4,000 + 100 8,000 + 100 12,000 = 11,200
                 hence E[x̃] = E[ỹ]
We can see that, although the expected present values of both lotteries are equal, our
intuition is that ỹ is preferable, because it ‘spreads the risk’. Just as in the St Petersburg
paradox, we can see that we need a more sophisticated theory of value to aid decisions
under uncertainty than expected present value.


9.2      Expected Utility Theory
The solution suggested by Bernoulli and developed by modern risk theory is that what
matters to an individual is not their wealth, but rather the ‘utility’ they derive from
the wealth. We create a ‘utility function’ u of wealth level x to define this relationship,
written as u(x). The theory is that a (rational) investor’s choices can be explained, or
predicted, on the basis that she chooses to √optimise not expected present value, but
expected utility. Let us assume that u(x) = x to show how this could resolve our two
previous problems. First, the St Petersburg paradox:
                                        X∞           √
                             E[u(x)] =      P(K = k) 2k−1
                                           k=1
                                           ∞  k
                                           X  1
                                       =                 2(k−1)/2
                                           k=1
                                                 2
                                                 ∞           k
                                         1 X             1
                                       =√                √
                                          2 k=1           2
                                            √
                                              2
                                       =1+
                                             2
50                                                     9.3. EXPECTED UTILITY THEOREM


Now let’s assume we have a (degenerate) lottery
                                              √ with only one outcome, certain payout e.
The expected utility of this lottery is u(e) = e. So our investor with this utility function
should  be indifferent between the game above and this wealth e iff E[u(x)] = u(e) i.e. iff
    √
      2    √                √
1 + 2 = e or e = 1.5 + 2 ≈ 2.91. This means that the individual would be willing
to pay up to 2.91 ducats to play the game - at higher prices, she just isn’t willing to risk
her stake, even though the reward is theoretically unlimited.
Now let’s tackle Sempronius and his ships:
                             1
                                p        9
                                            p
                 E[u(x̃)] = 10   4,000 + 10   12,000 = 104.91
                              1
                                p          18
                                              p         81
                                                           p
                  E[u(ỹ)] = 100 4,000 + 100 8,000 + 100    12,000 = 105.46
             so E[u(x̃)] < E[u(ỹ)]

Hence we would conclude that ỹ is preferred to x̃ because it has a higher expected utility;
this supports our intuition that we would prefer to spread our risk by splitting the wealth
across two ships.
Some economists might interpret ‘utility’ as an objective measure of happiness or wellbeing
- but this interpretation is not necessary. We do not need to believe in some objective
‘utility measure’; the utility function can be defined purely in terms of the preferences of
an individual. We will see this in the next section.



9.3        Expected Utility Theorem
We will now introduce the notation and formalise the axioms that will allow us to state
the Expected Utility Theorem.

     • X = {xs }s=1,...,N is a set of outcomes - typically these outcomes will be monetary
       outcomes, but could be multidimensional (e.g. an additional variable could repre-
       sent health). X is often assumed to be finite to make proofs simpler, although the
       theorem holds more generally.

     • ps ≥ 0 is the objective probability of occurrence of xs where N
                                                                      P
                                                                        s=1 ps = 1

     • A (simple) lottery L is described by a vector (x1 , p1 ; x2 , p2 ; . . . ; xN , pN )

     • A compound lottery is a lottery whose outcomes are simple lotteries. E.g. consider a
       lottery L0 which yields lottery La with probability α and lottery Lb with probability
       (1 − α). We write:

                        L0 = αLa + (1 − α)Lb
                           = x1 , αpa1 + (1 − α)pb1 ; . . . ; xN , αpaN + (1 − α)pbN
                                                                                     


       The simple lottery is its reduced form.
LECTURE 9. THEORIES OF VALUE                                                               51


Consequentialism. We assume that only the lottery over final outcomes matters for
decision making. How the lottery is ‘framed’ doesn’t matter, only the probabilities of the
outcomes.

Under consequentialism the agent has preference relation < on the set of simple lotteries
L on outcomes X.

                L = {(x1 , p1 ; x2 , p2 ; . . . ; xN , pN ) ∈ RN
                                                               + |p1 + · · · + pN = 1|}

 is the asymmetric part of the relation ‘strictly preferred to’, and ∼ is the symmetric
part ‘indifferent between’.
Completeness. The relation < is complete if for any pair La , Lb ∈ L, either La < Lb or
Lb < La .
Transitivity. The relation < is transitive if for any La , Lb , Lc ∈ L, such that La < Lb
and Lb < Lc , then La < Lc .
Axiom 1 (Rationality). The relation < is complete and transitive.
Axiom 2 (Continuity). The preference relation < on the space of lotteries L is such
that for all La , Lb , Lc ∈ L such that La < Lb < Lc there exists a scalar α ∈ [0, 1] such
that Lb ∼ αLa + (1 − α)Lc .
Axiom 3 (Independence). The preference relation < on the space of lotteries L is
such that for all La , Lb , Lc ∈ L and for all α ∈ [0, 1],

                   La < Lb ⇐⇒ αLa + (1 − α)Lc < αLb + (1 − α)Lc

We are now ready to state the Expected Utility Theorem.
Theorem (Expected Utility). Axioms 1 - 3 hold iff the preference relation < of the
space of simple lotteries L has an expected utility representation. That is, there exists a
scalar us associated to each outcome xs , s = 1, . . . , N , in such a manner that for any two
lotteries La = (x1 , pa1 ; . . . ; xN , paN ) and Lb = (x1 , pb1 ; . . . ; xN , pbN ), we have
                                                N
                                                X                 N
                                                                  X
                                a      b
                              L < L ⇐⇒                 pas us ≥         pbs us
                                                 s=1              s=1

In other words a lottery can be evaluated by its expected utility
                                                 N
                                                 X
                                    E[u(x)] =          p(xs )u(xs )
                                                 s=1


The proof of the Expected Utility Theorem is beyond the scope of this course. If you
wish to attempt it as an exercise, some authors add a fourth axiom (which can be derived
from the three above) to simplify the proof. Axiom 4 states that there exist best and
worst lotteries, denoted as L and L respectively, such that ∀L ∈ L, L 4 L 4 L.
52                                     9.4. SUBJECTIVE EXPECTED UTILITY (SEU)


9.3.1     Interpretation of the Expected Utility Theorem
What the Expected Utility Theorem is saying is that, provided individual’s preferences
conform to the axioms we have stated, those preference can be represented by a utility
function. It is not the case that a decision-maker prefers one risky choice over another
because it yields the higher expected utility. Rather, it yields higher expected utility
because it is preferred to the other.
We can see now that what is important is the ranking provided by the expected utility
function. For example, if E[u(x̃)] = 2E[u(ỹ)] it is wrong to think that our investor is
“twice as satisfied” with x̃ as ỹ.

Cardinality of Expected Utility. The utility function is cardinal; an increasing linear
transformation of u, v(·) = au(·) + b, a > 0, will not change the ranking of lotteries.

Proof. If w̃1 < w̃2 ,we have

                               E[v(w̃1 )] = E[au(w̃1 ) + b ]
                                          = aE[u(w̃1 )] + b
                                          ≥ aE[u(w̃2 )] + b
                                          = E[v(w̃2 )]

Where preferences are representable with a utility function, it will be convenient to
suggest a form of the function, and use it to infer choices of our decision-maker.


9.4      Subjective Expected Utility (SEU)
Savage (1954) extended the expected utility theorem to situations where the probabilities
are not objectively known (i.e. most real-life situations). He showed that:

      Under <a set of axioms> a decision maker behaves as though there exists a
      subjective probability measure P and real-valued utility function u such that
      the decision maker ranks various
                                 R       distributions of consequences ω by their
      subjective expected utility u(ωs )dFP (s).

Savage’s theorem doesn’t assume the existence of a probability measure. Instead it derives
it from preferences. This provides a justification for expected utility analysis even when
probabilities are not objectively known.
Lecture 10

The Shape of the Utility Function

                               Reading: Eeckhoudt-Gollier-Schlesinger sections 1.2 – 1.7

We saw in the previous lecture how a rational decision-maker’s preferences can be rep-
resented through a utility function. We note that this function is ‘subjective’ in the
sense that it is specific to each individual. Different investors may have different utility
functions. However, there are some basic properties of the function we can expect given
rational behaviour. We’ll first look at the special case where lottery outcomes are in one
dimension, and the outcome space X is measured in pounds for final wealth (i.e. we will
assume the individual consumes all their goods at the end of one period).

   • A lottery L is represented by a cumulative distribution function
     F : R → [0, 1], where F (x) is the probability of receiving less than or equal to
     x pounds.

We will often assume the following:
Non-Satiation. More wealth is always preferred to less: an incremental increase in
wealth has positive value, hence u0 > 0.
Decreasing Marginal Utility. The marginal utility of wealth is decreasing with wealth,
(we could say that each additional unit of wealth has incrementally less value, the richer
we get, the less we value a single additional ducat,) hence u00 < 0.

Bernouilli argued that the function u should be concave in wealth. We can see that this
is related to decreasing marginal utility:
Concavity. A function f is concave iff for all λ ∈ [0, 1] and all pairs (a, b) in the domain
of f the following condition holds:
                         λf (a) + (1 − λ)f (b) ≤ f (λa + (1 − λ)b)
Proposition 73. If function f is twice differentiable and has domain in R it is concave
iff f 00 ≤ 0.

The proof is beyond the scope of this course.


                                            53
54                                                                 10.1. RISK AVERSION


10.1      Risk Aversion
                                                         √
We saw in a previous lecture how the function u(w) = w would support our intuition
over Sempronius’s ships. And we can see it satisfies the conditions above, since u0 (w) > 0
and u00 (w) < 0, and is also concave. In the next section, we show how this whole family
of functions will do the same. First, we want to define our problem more precisely than
the example of the ships:
Risk Aversion. An agent is risk averse if she dislikes all zero-mean risks at all wealth
levels:
                    ∀w, ∀x̃ with E[x̃] = 0, E[u(w + x̃)] ≤ u(w)

This is equivalent to one written in terms of total wealth z̃ = w + x̃:

                                     E[u(z̃)] ≤ u(E[z̃])

This is telling us that the agent will reject a fair bet. Our working assumption is that
risk aversion is a fair representation of human behaviour, at least in the context of
the insurance and investment decisions we are most interested in. However, we should
remember that we might meet agents who prefer to accept the fair bet; these will be
called risk loving. Agents who are indifferent between the fair bet and its expectation
will be described as risk neutral. These possibilities are not exhaustive, because there
might also be agents with more complex preferences, who are (say) risk loving for part
of the domain and risk averse in other parts.
Proposition 74. An agent with utility function u is risk averse iff u is concave.

Proof. We prove for u twice differentiable (i.e. u00 ≤ 0) by Proposition 73. A second-order
Taylor expansion of u(w + x) around w + E[x̃] yields, for any x:
                                                             1
        u(w + x) = u(w + E[x̃]) + (x − E[x̃])u0 (w + E[x̃]) + (x − E[x̃])2 u00 (ξ(x))
                                                             2
for some ξ(x), x ≤ ξ(x) ≤ E[x̃]. Since this equation must hold for all x, we can allow x
to take the values of our lottery x̃ and take the expectation:
                                                                 1 
 E[u(w + x̃)] = E[u(w + E[x̃])] + E[(x̃ − E[x̃])]u0 (w + E[x̃]) + E (x̃ − E[x̃])2 u00 (ξ(x))
                                                                                            
                                                                 2

Now the second term on the right hand side is zero, since E[(x̃ − E[x̃])] = 0. The third
term is nonpositive since it is the expectation of a square times the nonpostive second
derivative (since it is concave). So it follows that:

                               E[u(w + x̃)] ≤ E[u(w + E[x̃])]

We can drop the expectation on the right hand side since this is already certain, and
replace with final wealth z̃ = w + x̃ to give:

                                     E[u(z̃)] ≤ u(E[z̃])
LECTURE 10. THE SHAPE OF THE UTILITY FUNCTION                                               55


So the expected utility of the lottery is less than or equal to the utility of the expectation,
and so the agent chooses the certain amount over the risky lottery. This shows that
concavity (of a twice differentiable function) implies risk aversion.
For the opposite direction we prove by contradiction. Suppose that u is not concave.
Then there must exist some w and some δ > 0 for which u00 (x) is positive in the interval
[w − δ, w + δ]. Choosing x̃ with support entirely in [w − δ, w + δ], and applying the same
Taylor expansion as above will show that E[u(w + x̃)] > u(w + E[x̃]) which would mean
the agent accepts the zero-mean lottery, and hence contradicts risk aversion.

Note that the above proposition is just Jensen’s inequality rewritten:

Jensen’s Inequality. E[f (x̃)] ≤ f (E[x̃]) for any real-valued random variable x̃ iff f is
concave.


10.2       Mapping the Attitude to Risk
Risk aversion says nothing about lotteries with a non-zero mean. This leaves open the
possibility that our agent will be willing to accept a risk for a suitable reward. Some
agents will take a lot of inducement to accept even small risks, whilst others might be
prepared to gamble if the odds are just slightly in their favour. It makes sense to think of
these agents as more or less risk averse than each other. In this lecture we explore how
we might compare the risk aversion of different decision-makers. The following definitions
will be very useful:

The (Arrow-Pratt) coefficient of absolute risk aversion. This is dependent on the
level of wealth w, and is given by

                                         u00 (w)     ∂ ln u0 (w)
                              A(w) = −           = −
                                         u0 (w)          ∂w

The (Arrow-Pratt) coefficient of relative risk aversion. Again, this depends on
the current level of wealth w and is given by:

                                                  u00 (w)
                                     R(w) = −w
                                                  u0 (w)

Risk Premium. The risk premium of a zero-mean risk x̃ for an agent with initial wealth
w and utility function u is the π(w, u, x̃) that satisfies:

                                  E[u(w + x̃)] = u(w − π)

Certainty Equivalent. The certainty equivalent of a risk x̃ for an agent with initial
wealth w and utility function u is the e(w, u, x̃) that satisfies:

                                  E[u(w + x̃)] = u(w + e)
56                                              10.2. MAPPING THE ATTITUDE TO RISK


Note that π is only defined for zero-mean risks. Where E[x̃] = 0 we will typically refer
to the risk premium π, and where E[x̃] 6= 0 we will refer to the certainty equivalent e.
The risk premium and certainty equivalent are measured in the same units as wealth.

The Arrow-Pratt approximation. If the utility function is differentiable, the risk
premium of a pure risk ỹ with variance σ 2 , is approximately 12 σ 2 A(w) where A(w) =
    00 (w)
− uu0 (w)  is the coefficient of absolute risk aversion.


Proof. Let ỹ = kx̃ for some pure risk x̃ such that E[x̃] = 0 and some constant k. Denote
the risk premium of ỹ, π(w, u, ỹ), as g(k). Then we take a second order Taylor expansion
of g(k) around k = 0.

                                                        1
                  π(w, u, ỹ) = g(k) = g(0) + kg 0 (0) + k 2 g 00 (0) + O(k 3 )
                                                        2
From the definition of the risk premium we have:

                                E[u(w + kx̃)] = u (w − g(k))

We can see that if k = 0 then g(0) = 0

Differentiating with respect to k gives:

                           E[x̃u0 (w + kx̃)] = −g 0 (k)u0 (w − g(k))

Setting k = 0 again this simplifies to

                                   E[x̃u0 (w)] = −g 0 (0)u0 (w)

The left hand side is u0 (w)E[x̃] = 0 since E[x̃] = 0 and hence g 0 (0) = 0.

Differentiating again with respect to k gives:
                                            2
              E[x̃2 u00 (w + kx̃)] = (g 0 (k)) u00 (w − g(k)) − g 00 (k)u0 (w − g(k))

Again, we set k = 0 and use g(0) = g 0 (0) = 0 to get

                                  E[x̃2 u00 (w)] = −g 00 (0)u0 (w)

Using E[x̃2 ] = σx2 and rearranging we have:

                                                        u00 (w)
                                      g 00 (0) = −σx2
                                                        u0 (w)
LECTURE 10. THE SHAPE OF THE UTILITY FUNCTION                                              57


Substituting our values of g(0), g 0 (0) and g 00 (0) back into the second order Taylor expan-
sion gives
                                                         1
                   π(w, u, ỹ) = g(k) = g(0) + kg 0 (0) + k 2 g 00 (0) + O(k 3 )
                                                         2
                                                      1 2 2 u00 (w)
                                      = 0 + k × 0 − k σx 0             + O(k 3 )
                                                      2     u (w)
                                        1 2
                                      ≃ σ A(w)
                                        2
                                                            00
since σ 2 = V ar(ỹ) = V ar(kx̃) = k 2 σx2 and A(w) = − uu0 (w)
                                                            (w)


Proposition 75. If the utility function is differentiable, the risk premium tends to zero
as the square of the size of the risk.

Proof. Consider the pure risk ỹ = kx̃, E[x̃] = 0, and interpret k as the size of the risk.
We have shown that for small k the risk premium is given by
                                                1
                                   π(w, u, ỹ) ≃ k 2 σx2 A(w)
                                                2
which tends to zero with k 2 .


10.3       Comparative Risk Aversion
We can see how the risk premium, certainty equivalent or coefficients of risk aversion
could be used to compare two different investors. However, we should also see that, in
general, each of these measures will depend upon the level of wealth. For the same risk
x̃, investor P might have a higher risk premium than investor Q at low levels of wealth,
but the situation might be reversed at high levels of wealth. To say that one agent is
more risk averse than another, we need a more strict definition.

Comparative risk aversion. Suppose that agents P and Q have the same initial wealth
w, which is arbitrary. Agent P is more risk-averse than agent Q if any risk that is
undesirable for Q is also undesirable for P . This must be true independent of their
common initial wealth w.

Proposition 76. Suppose that uP and uQ are twice differentiable. The following condi-
tions are equivalent:

   1. Agent P is more risk-averse than agent Q; namely P rejects all lotteries that Q
      rejects.

   2. The risk premium of any risk is larger for agent P than agent Q.

   3. uP is a concave transformation of uQ .
58                                                  10.3. COMPARATIVE RISK AVERSION


     4. AP is uniformly larger that AQ , so that AP (w) ≥ AQ (w), ∀w ∈ R where Ai is the
        coefficient of absolute risk aversion for agent i.

Proof. 1 ⇒ 4 This is equivalent to ¬4 ⇒ ¬1, so let us assume that AP (w) < AQ (w) for
some w. We then then create a lottery ỹ with mean µ and variance σ 2 such that agent
Q is only just prepared to reject it.

                                     uQ (w) = E[uQ (w + ỹ)]

Now we take a Taylor expansion of this

                     uQ (w) = E[uQ (w) + ỹ u0Q (w) + 21 ỹ 2 u00Q (w) + O(ỹ 3 )]

And so taking the expectation of the individual terms we get

                         0 = u0Q (w)µ + 12 u00Q (w)(σ 2 + µ2 ) + E[O(ỹ 3 )]

We divide through by u0Q (w) and rearrange to get

                                      µ ≈ 21 AQ (w)(σ 2 + µ2 )

Now we want to ask ourselves if P will accept or reject the lottery. So we take the same
expansion of uP (w + ỹ)

               uP (w + ỹ) = uP (w) + u0P (w)µ + 21 u00P (w)(σ 2 + µ2 ) + E[O(ỹ 3 )]

Now if we ignore the small terms, substitute the lone instance of µ with the previous
equation, and rearrange, we get

             uP (w + ỹ) = uP (w) + 21 u0P (w)(σ 2 + µ2 )(AQ (w) − AP (w))           (∗)

Since we assumed that, at least locally, AP (w) < AQ (w), the right hand side of (∗) must
be greater than uP (w), and hence P would accept a lottery that Q rejects. Therefore, if
P never accepts a lottery that Q rejects, he must have a uniformly greater Arrow-Pratt
measure of absolute risk aversion.

3 ⇒ 2 Let uP (w) = φ(uQ (w)) Now assume that 3 holds - i.e. that φ is a concave function.

              uP (w − π(w, uP , x̃)) = E[uP (w + x̃)]
                                     = E[φ(uQ (w + x̃))]
                                     ≤ φ (E[uQ (w + x̃)]) by Jensen’s inequality
                                     = φ (uQ (w − π(w, uQ , x̃)))
                                     = uP (w − π(w, uQ , x̃))

This shows that uP (w − πP ) ≤ uP (w − πQ ) and hence πP ≥ πQ since u is an increasing
function.
LECTURE 10. THE SHAPE OF THE UTILITY FUNCTION                                          59


4⇒3      Let uP (w) = φ(uQ (w)) once again. Differentiating with respect to w gives:

                                  u0P (w) = u0Q (w)φ0 (uQ (w))

Differentiating again we get:

                     u00P (w) = u00Q (w)φ0 (uQ (w)) + (u0Q (w))2 φ00 (uQ (w))

Dividing through by −u0P (w) gives:

                                u00Q (w)φ0 (uQ (w)) (u0Q (w))2 φ00 (uQ (w))
                   AP (w) = −                      −
                                       u0P (w)             u0P (w)

Substituting in the first derivative gives

                                                 (u0Q (w))2 00
                          AP (w) = AQ (w) −                φ (uQ (w))
                                                  u0P (w)

The first derivatives of the utility functions are positive. So this shows that if AP (w)
is universally greater than AQ (w) then the second derivative of the function φ must be
universally negative - which is equivalent (under the conditions we have chosen) to being
a concave function. Note that this formula shows the implication in reverse also - i.e. if
φ is a concave transformation of uQ to uP then the Arrow-Pratt measure of absolute risk
aversion must be universally higher for agent P than agent Q.

2 ⇒ 4 is straightforward - it follows immediately from the Arrow-Pratt approximation.
Now all that remains is to show that any one of 2, 3 or 4 implies 1 and our chain will be
complete. We choose
3 ⇒ 1 Let’s take an arbitrary wealth level w and lottery x̃ which Q rejects, and assume
that 3 holds.
                               uQ (w) ≥ E[uQ (w + x̃)]
Now since φ(u) = uP (u−1Q (u)) and uP and uQ are strictly increasing, φ is also strictly
increasing. So we can take the function on both sides of the equation.

                                φ(uQ (w)) ≥ φ(E[uQ (w + x̃)])

Now we use Jensen’s inequality

                     φ(uQ (w)) ≥ φ(E[uQ (w + x̃)]) ≥ E[φ(uQ (w + x̃))]

And then express in terms of uP

                             uP (w) ≥      ...   ≥ E[uP (w + x̃)]

Which shows that P will also reject the lottery.
60                          10.4. HOW RISK AVERSION CHANGES WITH WEALTH


10.4        How risk aversion changes with wealth
We have seen how it is plausible to represent the preferences of many decision-makers
using a utility function which is strictly increasing and also concave. A third condition we
may wish to represent is that, as investors become more wealthy, they are more willing to
accept a risk (measured in absolute terms). We formalise this using decreasing absolute
risk aversion.
Decreasing absolute risk aversion. Preferences exhibit decreasing absolute risk aver-
sion (DARA) if the risk premium associated with any risk is a decreasing function of
wealth: ∂π(w, u, x̃)/∂w ≤ 0 for any w, x̃.
Proposition 77. Suppose that u is three times differentiable. The following conditions
are equivalent:

     1. The risk premium is a decreasing function of wealth.
                                                                                        00
     2. The absolute risk aversion is decreasing with wealth, meaning that A(w) = − uu0 (w)
                                                                                        (w)

        is decreasing.

Proof. We prove for a risk averse utility function u. We start with the definition of the
risk premium:
                            E[u(w + x̃)] = u(w − π(w, u, x̃))
We differentiate with respect to w to give
                                                                        
                       0             0                      ∂π(w, u, x̃)
                    E[u (w + x̃)] = u (w − π(w, u, x̃)) 1 −
                                                               ∂w
Rearranging we get
                          ∂π(w, u, x̃)       E[u0 (w + x̃)]
                                       =1− 0
                               ∂w         u (w − π(w, u, x̃))
       0
Since u > 0 this is negative if
                             E[u0 (w + x̃)] ≥ u0 (w − π(w, u, x̃))
We define v = −u0 , and rewrite the above as
                              E[v(w + x̃)] ≤ v(w − π(w, u, x̃))
For this to hold for all w, x̃, it must be that v is more concave than u. We can interpret
v as a utility function of another individual. We have shown that for the risk premium to
be decreasing in wealth, we must have v = −u0 is a concave transformation of u. Using
Proposition 76 this will be the case if
                                             Av (w) ≥ Au (w)

                                     ∂ 2 (−u0 (w))
                                          ∂w2              u00 (w)
                                   − ∂(−u    0 (w))   ≥−
                                                           u0 (w)
                                           ∂w
                                            000
                                             u (w)       u00 (w)
                                         −           ≥ −
                                             u00 (w)     u0 (w)
LECTURE 10. THE SHAPE OF THE UTILITY FUNCTION                                                 61


Now differentiating Au (w) with respect to w gives

                                                             2
                                        u000 (w)
                                                      00
                                                      u (w)
                             A0u (w) = − 0       +
                                        u (w)         u0 (w)
                                              000
                                              u (w) u00 (w)
                                                             
                                    = Au (w)          − 0
                                              u00 (w)  u (w)

Since the decision maker is risk averse, Au (w) ≥ 0.Therefore the derivative is also negative
                                             000 (w)       00 (w)
(i.e Au (w) is decreasing in wealth) iff − uu00 (w)  ≥ − uu0 (w)  . This is the same condition we
had for the decreasing risk premium above.


10.5       Some Classical Utility Functions
We now consider some functional forms for the utility function that are commonly used.

Quadratic utility. u(w) = aw − 12 w2 ,       w≤a

The main advantage is that the expected utility depends only on the mean and vari-
ance of the final wealth distribution, and not any higher moments (sometimes called
mean-variance preferences). The main disadvantages are the limited range (since utility
                                                                                     1
decreases above a) and that it satisfies increasing absolute risk aversion. A(w) = a−w
which is increasing in w.

Constant Absolute Risk Aversion (CARA) utility.

                                              e−aw
                                   u(w) = −        ,    a>0
                                               a

The coefficient of absolute risk aversion A(w) = a, ∀w. This means it is constant, rather
than decreasing, which could be a disadvantage.

Constant Relative Risk Aversion (CRRA) utility.
                             1−γ
                               w
                                     for γ > 0, γ 6= 1,
                            
                            
                                 −
                            
                     u(w) =    1   γ
                            
                            
                               ln(w) for γ = 1
                            


The coefficient of absolute risk aversion is A(w) = γ/w, which is decreasing in w. The
coefficient of relative risk aversion is R(w) = γ, ∀w.
Lecture 11

Changes in Risk

                                                Reading: Eeckhoudt-Gollier-Schlesinger chapter 2

In the previous lectures we saw how risk aversion implies that investors would prefer their
certain wealth to that wealth plus any zero-mean risk. We also saw how, given a specific
utility function, an individual would choose between two different (zero-mean) risks. In
this section, we aim to show how certain characteristics of distributions of two risks would
lead to unanimous decisions amongst a group of investors - i.e. the decision would apply
to a whole class of utility functions. This is the theory of stochastic dominance.


11.1          An Increase in Risk
To begin with, we introduce some terminology. We will be considering random variables
x̃1 and x̃2 with the same mean, with support in some interval of the real line [a, b].1
An increase in risk can be defined in (at least) two ways:
Definition (Adding Noise) 1. x̃1 is obtained from x̃2 by adding zero-mean noise terms
to the possible outcomes of x̃2 .
                                                                                   2
                         x̃1 ∼ x̃2 + ε̃ where E[ε̃|x̃2 = x] = 0 for all x
Definition (Mean Preserving Spread) 2. x̃1 is a mean-preserving spread of x̃2 if
for some interval I ⊂ [a, b], x̃1 can be obtained (in distribution) from x̃2 by taking some
probability mass from I and distributing it outside of I. Or, more formally: E[x̃1 ] = E[x̃2 ],
and there exists an interval I such that ∀x ∈ I, f2 (x) ≥ f1 (x) and ∀x ∈/ I, f2 (x) ≤ f1 (x).


11.2          Second-Order Stochastic Dominance
If x̃1 is more risky (as formally defined above) than x̃2 , then we want to show that all
risk averse expected utility maximisers prefer x̃2 to x̃1 , i.e. that an increase in risk would
  1
      We limit our analysis to this interval to avoid problems of convergence of integrals.
  2
      ‘∼’ means ‘has the same distribution as’ in this context.

                                                     62
LECTURE 11. CHANGES IN RISK                                                                 63


be rejected by risk averse agents. This is known as second-order stochastic dominance.

Definition (Second-Order Stochastic Dominance) 3. x̃2 second-order stochastically
dominates x̃1 (x̃2 SSD x̃1 ) if all risk averse expected utility maximisers prefer x̃2 to x̃1 .
For all concave functions u, E[u(x̃1 )] ≤ E[u(x̃2 )].

We now begin our proof that an increase in risk as defined by ‘adding noise’ implies
second order stochastic dominance - i.e. 1 ⇒ 3.


Proof.

                 E[u(x̃1 )] = E[u(x̃2 + ε̃)]
                            = Ex̃2 [Eε̃ [u(x̃2 + ε̃)|x̃2 ]]
                            ≤ Ex̃2 [u(Eε̃ [(x̃2 + ε̃)|x̃2 ])] by Jensen’s inequality
                            = Ex̃2 [u(x̃2 + E[ε̃|x̃2 ])]
                            = E[u(x̃2 )] since E[ε̃|x̃2 = x] = 0 for all x




11.3       The Rothschild-Stiglitz Proposition
In the section above, we showed how an increase in risk (as defined by ‘adding noise’)
implies second order stochastic dominance - i.e. the increase would be rejected by all
risk-averse decision makers. Using the work of Rothschild and Stiglitz (1970), we can
make a much stronger statement.

Rothschild-Stiglitz Propostion. Consider two random variables x̃1 and x̃2 with the
same mean. The following four statements are equivalent:

   1. x̃1 is obtained from x̃2 by adding zero-mean noise.

   2. x̃1 is obtained from x̃2 by a sequence of mean-preserving spreads.

   3. x̃2 second-order stochastically dominates x̃1 .

   4. The Rothschild-Stiglitz condition
                              Z θ                 Z θ
                                    F1 (x) dx ≥         F2 (x) dx ∀θ ∈ [a, b]
                                a                  a


      is satisfied, and with an equality for θ = b.
64                                   11.3. THE ROTHSCHILD-STIGLITZ PROPOSITION


Proof. We have already proved 1 ⇒ 3. Here we prove 3 ⇐⇒ 4 only.
                     Z b
        E[u(x̃1 )] =     u(x)f1 (x) dx
                       a
                                        Z b
                                 x=b
                   = [u(x)F1 (x)]x=a −      u0 (x)F1 (x) dx (integrating by parts)
                                          a
                            Z b
                   = u(b) −     u0 (x)F1 (x) dx since F1 (b) = 1, F1 (a) = 0
                                 a


The analogous formula applies for x̃2 and so
                                            Z b
                  E[u(x̃1 )] − E[u(x̃2 )] =     u0 (x) (F2 (x) − F1 (x)) dx
                                                         a
                                                             Z b
                                               =−                  u0 (x)S 0 (x) dx
                                                              a
                          Rx
where we define S(x) =     a
                               (F1 (s)−F2 (s)) ds. We note that S(a) = S(b) = 0 and integrate
by parts again.

                                                   Z b
                E[u(x̃1 )] − E[u(x̃2 )] = −              u0 (x)S 0 (x) dx
                                                    a
                                                                              Z b
                                                    0 x=b
                                       = − [u (x)S(x)]x=a +                           u00 (x)S(x) dx
                                                                                a
                                           Z b
                                       =            u00 (x)S(x) dx
                                               a


This shows that x̃1 is preferred to x̃2 for all concave functions if S(x) is negative for all
values of x, and conversely x̃2 is preferred to x̃1 for all concave functions if S(x) is positive
for all values of x.
                                        Z x
                     S(x) ≥ 0 ⇐⇒             F1 (s) − F2 (s) ds ≥ 0
                                         a
                                        Z x               Z x
                                  ⇐⇒         F1 (s) ds −       F2 (s) ds ≥ 0
                                        Za x              Za x
                                  ⇐⇒         F1 (s) ds ≥       F2 (s) ds
                                           a                              a

This shows that if the Rothschild-Stiglitz condition holds, then ∀x S(x) ≥ 0, then x̃2 SSD
x̃1 , i.e. 4 ⇒ 3.
To prove 3 ⇒ 4 assume S(x) < 0 for some interval I ⊂ [a, b]. ConsiderR a00 utility function
that is linear for all x ∈
                         / I and strictly concave for all x ∈ I. Then u (x)S(x) dx > 0
and hence x̃1 is preferred to x̃2 , contradicting the SSD. This completes the proof of
3 ⇐⇒ 4.
LECTURE 11. CHANGES IN RISK                                                                 65


In order to prove 2 ⇒ 4 we just need to show that a mean-preserving spread implies the
condition that ∀x S(x) ≥ 0. Let x̃1 be a mean-preserving spread of x̃2 . Let the interval
I be bounded by α and β so a ≤ α ≤ β ≤ b. Using the definition of the mean-preserving
spread and the density function we have:
                                                   
                                                    ≥ 0 for a < x < α
                             00
                            S (x) = f1 (x) − f2 (x) ≤ 0 for α < x < β
                                                     ≥ 0 for β < x < b
                                                   

This can only hold (in combination with S(a) = S(b) = S 0 (a) = S 0 (b) = 0) if ∀x S(x) ≥
0. This is best explained through a diagram of the density functions and cumulative
distribution function.
First, note that F1 (a) = F2 (a) = 0 and F1 (b) = F2 (b) = 1, simply by the definitions of a
                                                                 Rb             Rb
and b and the cumulative distribution function. Furthermore, a F1 (x)dx = a F2 (x)dx.
We can see this by integrating by parts:


                              Z b                                Z b
                                      F1 (x)dx = [xF1 (x)]ba −         xf1 (x)dx
                                  a                               a
                                               = (bF1 (b) − aF1 (a)) − E[x̃1 ]
                                               = (bF2 (b) − aF2 (a)) − E[x̃2 ]
                                                              Z b
                                                          b
                                               = [xF2 (x)]a −     xf2 (x)dx
                                                               a
                                                 Z b
                                               =     F2 (x)dx
                                                   a


Because of the mean preserving spread, the probability density of x̃1 is initially greater,
then less, then greater again, than that of x̃2 . This means that the slope of the graph
of F1 is first steeper, then shallower, then steeper than F2 . This ensures that there can
only be a Rsingle crossing-point of the twoR graphs, since they both start at 0 and finish at
1, and so F1 dx must remain ahead of F2 dx, until they equal at b.


                                                                                   f1 (x)
                                                                                   f2 (x)
                f (x)




                        0
                              a            α                 β             b
                                                       x
66                   11.3. THE ROTHSCHILD-STIGLITZ PROPOSITION


             1                                F1 (x)
                                              F2 (x)

     F (x)



             0
                 a   α           β      b
                           x
Lecture 12

Risk and Reward

                                           Reading: Eeckhoudt-Gollier-Schlesinger chapter 2

In this lecture we continue to explore the implications of the Rothschild-Stiglitz propo-
sition, in the behaviour of the variance of a distribution in relation to second-order
stochastic dominance. We then go on to discuss more general changes in risk which do
not preserve the mean.


12.0.1      An increase in risk implies an increase in variance
We saw in the last lecture how the preference of an investor between two risks could
depend on higher moments than the mean and variance. Therefore an increase in variance
on its own does not imply an increase in risk. However, we can show that an increase in
risk does imply an increase in variance.
Proposition 78. For lotteries x̃ and ỹ such that E[x̃] = E[ỹ], ỹ SSD x̃ ⇒ V ar[ỹ] ≤ V ar[x̃]

Proof. From the above proof of the Rothschild-Stiglitz proposition, for any twice differ-
entiable concave u, we have
                                                Z b
                          E[u(x̃)] − E[u(ỹ)] =     u00 (t)S(t) dt
                                                          a
               Rt
where S(t) =    a
                    Fx (s) − Fy (s) ds
Now if ỹ SSD x̃ then this applies for all concave u, so will apply for u(x) = bx − 21 x2 .
Substituting this gives
                                                                     Z b
                     1 2           1 2       1     2    1     2
             E[bx − 2 x ] − E[by − 2 y ] = − 2 E[x̃ ] + 2 E[ỹ ] = −     S(t) dt
                                                                       a

We rearrange this to give                          Z b
                                   σx2 − σy2 = 2         S(t) dt ≥ 0
                                                    a
Since ∀t S(t) ≥ 0 (because ỹ SSD x̃) and E[ỹ] = E[x̃].
                                                   67
68                                    12.1. FIRST-ORDER STOCHASTIC DOMINANCE


12.1         First-Order Stochastic Dominance
In the previous section we relied upon the risk aversion of our agents. If we relax this
assumption, and consider all utility maximisers with non-decreasing utility functions,
then we obtain more demanding conditions to be sure one lottery is preferred to another.
This is known as first-order stochastic dominance.

Definition (First-Order Stochastic Dominance). x̃2 first-order stochastically dom-
inates x̃1 (x̃2 FSD x̃1 ) if all utility maximisers (with increasing utility functions) prefer
x̃2 to x̃1 . For all non-decreasing functions u, E[u(x̃1 )] ≤ E[u(x̃2 )].

Proposition 79. The following conditions are equivalent.

     1. x̃2 FSD x̃1 : E[u(x̃1 )] ≤ E[u(x̃2 )] for all non-decreasing functions u

     2. x̃1 is obtained from x̃2 by a transfer of probability mass from the high wealth states
        to lower wealth states: ∀x F1 (x) ≥ F2 (x)

     3. x̃2 is obtained from x̃1 by adding non-negative noise terms to the possible outcomes
        of x̃1 : x̃2 ∼ x̃1 + ε̃, where ε̃ ≥ 0 with probability one.

Proof. We prove 1 ⇐⇒ 2 only. As for the proof of the Rothschild-Stiglitz proposition,
integrating by parts once obtained:
                                             Z b
                   E[u(x̃2 )] − E[u(x̃1 )] =     u0 (x) (F1 (x) − F2 (x)) dx
                                               a

For 2 ⇒ 1 we can see that if ∀x F1 (x) ≥ F2 (x) and u0 (x) ≥ 0 then the expression must
be non-negative, and hence x̃2 is always preferred to x̃1 .
For 1 ⇒ 2 suppose that F1 (x) < F2 (x) for some interval I ⊂ [a, b]. Then consider the
utility function that is flat everywhere except in I. The right-hand side must be strictly
negative (since u0 (x) = 0 outside the interval, and so, for this function, x̃1 is preferred to
x̃2 . This means ¬2 ⇒ ¬1 and hence 1 ⇒ 2.


12.1.1        Risk and Reward
In the previous chapter we introduced the concept of second-order stochastic dominance
- a change in risk which preserved the mean. In this section we have introduced first-
order stochastic dominance, which can be thought of as an increase in the mean with no
effective increase in risk.
In general, we expect some sort of trade-off between risk and reward: an increase in risk
(say of an investment) should be associated with a higher expected return. Similarly,
when trying to reduce risk, such as by taking out insurance, we usually expect to pay
a loading to the premium, which will reduce our expected wealth. These decisions will
depend on the form of the investor’s utility function.
Lecture 13

Insurance Decisions

                                         Reading: Eeckhoudt-Gollier-Schlesinger chapter 3


13.1      The Justification of Insurance
In this section we explore how Expected Utility Theory can be used to evaluate insurance
decisions, and hence the justification for insurance. First, we introduce some notation.
Definition (Indemnity Insurance). An indemnity insurance contract is a pair (P, I(·))
where the premium P ≥ 0 is paid to the insurer, and the claim payment is I(x) ≥ 0
when the loss is x.
Definition (Loading). For a random non-negative loss x̃ and an indemnity insurance
contract which pays I(x) in each state x, and costs premium of P , the loading λ is defined
such that P = (1 + λ)E[I(x̃)]. The product is termed ‘actuarially fair’ (or just ‘fair’) if
λ = 0.

We expect most products to be ‘unfair’ in the sense that λ > 0 because an insurer has
to meet expenses and payments to providers of capital as well as covering the expected
claims.
We will consider the following environment.

   • Our decision-maker is strictly non-satiated and risk averse, with twice differentiable
     utility function u, so that u0 (x) > 0, u00 (x) < 0.
   • She has initial wealth of w0 subject to a risky loss of x̃, so final net wealth is w0 − x̃.
     We assume that x̃ is non-degenerate (i.e. it really is risky) and is nonnegative.
   • Indemnity insurance can be purchased which pays I(x) ≥ 0 when loss is x, and is
     priced with a loading of λ ≥ 0.
Example 80. Sempronius only has one available ship to transport his wealth home.
However, he is offered insurance against any √
                                             loss up to 5, 000 ducats with a loading of
0.2. Assuming he has utility function u(w) = w, would he buy the insurance?
                                              69
70                           13.2. OPTIMAL COINSURANCE (MOSSIN’S THEOREM)


                                                                               1       9
                                                                                            
     • We can describe this as w0 = 12 000, facing a risky loss of x̃ : 8 000, 10 ; 0, 10

     • I(x) = min(x, 5 000) and λ = 0.2
                                          1                      9
                                                                                 
     • So P = (1 + λ)E[I(x)] = 1.2 ×      10
                                             min(8 000, 5 000) + 10 min(0, 5 000)    = 600

     • Expected utility assuming no insurance is 104.91 (see section 9.2)

     • Expected utility assuming purchasing insurance is
                                  1p                                   9p
       E [w0 − P − x̃ + I(x̃)] =     (12 000 − 600 − 8 000 + 5 000) +    (12 000 − 600)
                                 10                                   10
                                  1√         9√
                               =     8 400 +     11 400
                                 10          10

                               = 105.26

This shows that Sempronius has higher expected utility with the insurance and so would
be willing to buy it.


13.2        Optimal Coinsurance (Mossin’s Theorem)
Suppose that the decision-maker must choose an optimal level of coinsurance β ∈ [0, 1]:

     • Iβ (x) = βx when the loss is x

     • Premium P (β) = (1 + λ)E[β x̃] = βP0 where P0 = (1 + λ)E[x̃]

     • Denote realised wealth ỹ = w0 − βP0 − x̃ + β x̃

Mossin’s Theorem. Full insurance (β ∗ = 1) is optimal at an actuarially fair price
(λ = 0), while partial coverage (β ∗ < 1) is optimal at an actuarially unfair price (λ > 0).

Proof. Let H(β) = E[u(ỹ)]. Our decision-maker will seek to maximise expected utility,
and therefore our optimisation problem is

                                   max[H(β)] s.t. β ∈ [0, 1]
                                     β




                           H(β)=E[u(ỹ)]=E[u(w0 − βP0 − x̃ + β x̃)]
                          H 0 (β)  =     E[(x̃ − P0 )u0 (ỹ)]
                          H 00 (β) =     E[(x̃ − P0 )2 u00 (ỹ)]

We can see that H 00 (β) < 0 and therefore there will be a unique maximum β ∗ . Note that
it might be that H 0 (β ∗ ) = 0 or it might be a corner solution so that β ∗ = 0 or β ∗ = 1.
LECTURE 13. INSURANCE DECISIONS                                                            71


First consider
                           H 0 (1) = E[(x̃ − P0 )u0 (w0 − P0 )]
                                   = u0 (w0 − P0 )(E[x̃] − P0 )
                                   = u0 (w0 − P0 )(E[x̃] − (1 + λ)E[x̃])
                                   = −λu0 (w0 − P0 )E[x̃]
This shows that if λ = 0 then H 0 (1) = 0, and so we have our unique solution at β ∗ = 1.
This should not surprise us: a risk averse decision-maker prefers to swap uncertain wealth
for certain wealth with the same expected value.
We can also see that if λ were permitted to be less than zero (e.g. perhaps some insurance
is subsidised or marketed as a ‘loss leader’) then H 0 (1) > 0. i.e. it is still increasing at
β = 1, the permitted maximum, which would be our solution.
Next consider
                 H 0 (0) = E[(x̃ − P0 )u0 (w0 − x̃)]
                         = E[(x̃ − E[x̃])u0 (w0 − x̃)] − E[(P0 − E[x̃])u0 (w0 − x̃)]
                         = cov(x̃, u0 (w0 − x̃)) − λE[x̃]E[u0 (w0 − x̃)]

Now if H 0 (0) ≤ 0 then that implies the corner solution β ∗ = 0 is optimal (higher values
of β will reduce expected utility, since H(β) is single peaked). This will occur when
                                             cov(x̃, u0 (w0 − x̃))
                                  λ ≥ λ∗ =
                                             E[x̃]E[u0 (w0 − x̃)]

Again, we should not be surprised that such a limit exists. As the insurance becomes
more expensive, eventually our risk averse agent will decline to take insurance at all,
because of the risk-reward trade-off.
For 0 < λ < λ∗ , H 0 (1) < 0 < H 0 (0). This shows there must be a solution to H 0 (β) = 0
between zero and one, so partial insurance is optimal: 0 < β ∗ < 1.

It helps interpreting these results if we remember that risk aversion is a second order
effect. As long as λ > 0 then the agent is trading-off risk against reward. And since,
for very small risks, our risk averse agent tends towards risk neutral, she will always be
willing to accept a little extra risk when reward is offered.


13.2.1     Impact of increasing risk aversion on the level of co-
           insurance
In this section we consider how we can compare the optimal level of coinsurance between
two agents.
Proposition 81. Consider two utility functions u and v that are increasing and concave,
and suppose that u is more risk averse than v (in the sense of Arrow-Pratt). Then, the
optimal coinsurance rate β ∗ is higher for u than v: βu∗ ≥ βv∗
72                           13.2. OPTIMAL COINSURANCE (MOSSIN’S THEOREM)


Proof. If λ = 0 then trivial: βu∗ = βv∗ = 1

If λ > 0 then suppose that u0 (w0 − P0 ) = v 0 (w0 − P0 ). (We can do this without loss
of generality since expected utility is cardinal; we can take a linear transformation of one
of the functions without affecting how it represents preferences.)
Because u is more concave than v it must be that:

                                  u0 (y) ≥ v 0 (y) ∀y < w0 − P0

                                  u0 (y) ≤ v 0 (y) ∀y > w0 − P0
And so

      (x − P0 )v 0 (w0 − (1 − βu∗ )x − βu∗ P0 ) ≤ (x − P0 )u0 (w0 − (1 − βu∗ )x − βu∗ P0 ) ∀x

Since for x > P0 both sides are positive and the right hand side is larger, and for x < P0
both sides are negative and the right hand is is less negative. Now we can take the
expectation on each side, which gives the evaluation of the H 0 (β) function at β = βu∗


     E[(x − P0 )v 0 (w0 − (1 − βu∗ )x − βu∗ P0 )] ≤ E[(x − P0 )u0 (w0 − (1 − βu∗ )x − βu∗ P0 )]
                                       Hv0 (βu∗ ) ≤ Hu0 (βu∗ ) = 0

We know that the final equality holds because βu∗ is the unique maximum for Hu . Fur-
thermore, we know that Hv is concave, and so if sloping downwards at βu∗ it has already
passed its own unique maximum, so it follows that βv∗ ≤ βu∗ .


13.2.2      Impact of increasing wealth on the level of coinsurance
In this section we consider how a change in the initial wealth will affect the level of
optimal coinsurance.

Proposition 82. If u exhibits decreasing absolute risk aversion then an increase in initial
wealth will decrease the optimal rate of coinsurance β ∗ .

Proof. Let β ∗ be optimal for w = w0 . Now consider


                   ∂H 0 (β)   ∂ 2 E[u(ỹ)]
                            =
                    ∂w          ∂β ∂w
                                ∂E[u0 (ỹ)]
                            =               (reversing the order of differentiation)
                                  ∂β
                   ∂H 0 (β)   ∂E[−u0 (ỹ)]
             ⇒−             =                 (∗)
                    ∂w           ∂β
LECTURE 13. INSURANCE DECISIONS                                                              73


We saw in the proof of Proposition 77 that we can treat v = −u0 as a utility function,
and where u is DARA, v is more concave than u. By Proposition 81 we know that the
optimal level of coinsurance for v = −u0 is higher than the level for u, since here v is
more risk averse in the sense of Arrow-Pratt. So the gradient of Hv (β) evaluated at β ∗
                                                                                       0
must be greater than zero, which corresponds to the right hand side of (∗). So ∂H∂w(β)
must be negative when evaluated at β = β ∗ . This means that an increase in w will take
H 0 (β) below zero, and so the new unique maximum must lie to the left, i.e. a lower level
of coinsurance.


13.3       Optimality of Deductibles
In this section we are interested in the ideal form of the insurance contract. The following
proposition is due to Arrow (1971).

Optimality of Deductibles (Arrow’s Theorem). Suppose a risk averse policy-holder
selects an insurance contract (P, I(·)) with P = (1 + λ)E[I(x̃)] and with I(x) non-
decreasing and I(x) ≥ 0 for all x. Then the optimal contract contains a straight de-
ductible D; that is I ∗ (x) = max(0, x − D) is optimal for some D.

Proof. We prove for a discrete loss distribution where px denotes P[x̃ = x] The realised
net wealth under the indemnity function I ∗ (x) is

                                w∗ (x) = w0 − P − min(x, D)

This has a minimum of w0 − P − D where x ≥ D.
Consider an alternative insurance policy (P, I(·)) with the same premium P . Since the
loading is the same we must have E[I(x)] = E[I ∗ (x)] and the net wealth is

                                 w(x) = w0 − P − x + I(x)

Now we consider the relationship between the two. We consider some xi such that
I(xi ) = I ∗ (xi ) + εi where εi > 0. Now because E[I(x)] = E[I ∗ (x)] then  P there must
                                                                                       P be
some other loss level(s) xj such that I(xj ) = I ∗ (xj ) − εj for εj > 0 and   p i εi = p j εj .
Since each I(xj ) ≥ 0 it must be that each I ∗ (xj ) > 0. This means that the optimal
policy is paying out in these states, so these must be states where the claim exceeds the
deductible, or equivalently, xj > D.
This leads to the following changes in final wealth:

                     at xi : w(xi ) = w∗ (xi ) + εi = w0 − P − min(xi , D) + εi
               at each xj : w(xj ) = w∗ (xj ) − εj = w0 − P − D − εj

This

   • increases net wealth in states with w∗ (x) ≥ w0 − P − D and
74                                             13.3. OPTIMALITY OF DEDUCTIBLES


     • decreases net wealth in states with w∗ (x) = w0 − P − D

Therefore w(x) can be obtained from w∗ (x) by a mean preserving spread around net
wealth of w0 − P − D. Therefore w∗ (x) SSD w(x).

Remember that the theorem depends on the insurance loading being constant. It means
that, given this budget constraint, the optimal insurance contract concentrates indemni-
fication on the worst outcomes, where the marginal utility of additional wealth is highest
(u0 (w) is highest when w is lowest if u is concave.) The implication is that we expect
investors to insure their ‘large risks’, e.g. their most expensive assets like a house or car,
and to ignore the small risks.
Lecture 14

Static Portfolio Choices

                                        Reading: Eeckhoudt-Gollier-Schlesinger chapter 4

So far we have been thinking about insurance decisions: in this lecture we will see how an
investor choosing a portfolio of assets faces equivalent problems with equivalent solutions.
We will consider the following environment:

   • The decision-maker is strictly non-satiated and risk averse with twice differentiable
     utility function u (u0 (x) > 0, u00 (x) < 0).

   • Initial wealth of w0 which can be invested in one risky asset (amount α and uncertain
     return x̃) and one risk-free asset (amount w0 − α with certain return r) .

   • The value of the realised portfolio is

                      (w0 − α)(1 + r) + α(1 + x̃) = w0 (1 + r) + α(x̃ − r)
                                                  = w + αỹ

     Where w = w0 (1 + r) is future wealth under the risk-free strategy and ỹ = x̃ − r,
     the excess return on the risky asset.

The problem of the investor is to choose α in order to maximise expected utility.

                               α∗ ∈ arg max E[u(w + αỹ)]
                                           α

The problem is formally equivalent to the optimal level of coinsurance. To see this, we
define:
                                                            P0 − x̃
                   w ≡ w 0 − P0     α ≡ (1 − β)P0      ỹ ≡
                                                              P0
Consequently
                                                                  
                                         0                  P0 − x̃
                E[u(w + αỹ)] = E u (w − P0 ) + (1 − β)P0
                                                               P0
                                      0
                              = E[u(w − βP0 − (1 − β)x̃)]
                                               75
76


We can interpret α = 0 as full insurance (zero risk), and so by increasing α (i.e. decreasing
the coinsurance level β) the investor accepts some risk in exchange for a higher expected
final wealth.
Note that here we have not yet imposed a constraint on the level of α or the mean of ỹ.
In general, we expect E[ỹ] > 0 as being equivalent to λ > 0 in the coinsurance model,
and if we restrict α/w0 to the range [0, 1] this is equivalent to the same restriction for β
in the coinsurance model.
                                                                           √
Example 83. Assume we have an investor with utility function u(w) = w, with initial
wealth of 1, 000, and access to:
     • a risk-free asset with an annual return of 5%
     • a risky asset with a random return x̃ : −5%, 12 ; 15.5%, 12
                                                                      

Assuming our investor wants to maximise her utility at the end of one year, how much
would she invest in each asset at the beginning of the year? (We do not permit any
changes to the initial allocation mid-year.) We want to maximise expected utility with
respect to α:
                                h                             1
                                                                i
                  E [u(w̃)] = E (1.05(1 000 − α) + (1 + x̃)α) 2
                                h                      1
                                                         i
                            = E (1 050 + (x̃ − 0.05)α) 2
                                 1                 1   1                    1
                               =   (1 050 − 0.10α) 2 + (1 050 + 0.105α) 2
                                 2                     2
                   ∂E [u(w̃)]         1                    1        1                   1
                               = −0.1 (1 050 − 0.10α)− 2 + 0.105 (1 050 + 0.105α)− 2
                       ∂α             4                             4
                          − 21                        − 12
         ⇒ (1 050 − 0.10α) = 1.05 (1 050 + 0.105α)           (setting line above to zero)
                                       2
           ⇒ 1 050 + 0.105α = ±1.05 (1 050 − 0.10α)
                        ⇒ α = 500
Our investor will chose to invest 500 in the risky asset and the remaining 500 in the
risk-free asset.1
Proposition 84. Consider the static portfolio choice problem, where ỹ is the return of
the asset over the risk-free rate, and α∗ is the optimal dollar investment in the risky asset.
Then the optimal investment in the risky asset is positive iff the expected excess return
is positive: α∗ = 0 if E[ỹ] = 0 and α∗ > 0 if E[ỹ] > 0. Moreover, when the expected
excess return is positive,
     • α∗ is reduced when the risk aversion of the investor is increased in the sense of
       Arrow and Pratt;
     • α∗ is increasing in wealth if absolute risk aversion is decreasing.

Proof. This follows immediately from the corresponding proofs for the optimal level of
coinsurance.
     1
     We can ignore the alternative solution because we were restricted to the positive domain of our
utility function.
LECTURE 14. STATIC PORTFOLIO CHOICES                                                      77


14.1       Static Portfolio choices under CRRA
We now consider an example of the static portfolio choice.

Proposition 85. Under constant relative risk aversion, the demand for the risky asset
is proportional to wealth: α∗ (w) = kw.

Proof. Suppose that u0 (x) = x−γ where γ is the coefficient of relative risk aversion. Under
this specification, the first order condition may be written as

                                    0 = E[ỹ u0 (w + α∗ ỹ)]
                                      = E[ỹ (w + α∗ ỹ)−γ ]
                                                   α∗ −γ
                                                           
                                  ⇒ 0 = E ỹ (1 + ỹ)
                                                   w
                   ∗
So as w changes αw must be constant, and so α∗ = kw for some k.


14.2       Static Portfolio Choice with more than one risky
           asset
We can also demonstrate that a static portfolio choice with more than one risky asset
is equivalent to the diversification between risks we saw in the earlier part of the course
- e.g. Sempronius and his two ships. We will look at the most simple case, where our
investor has a choice between two risky assets (with returns x̃1 and x̃2 ) which we assume
are independent and identically distributed. If she invests α in x̃1 then her final wealth
will be α(1 + x̃1 ) + (w0 − α)(1 + x̃2 ) and so we want to solve the following

                            max E[u(w0 + αx̃1 + (w0 − α)x̃2 )]
                              α

We expect the result as follows:

Proposition 86. A risk averse investor faced with an opportunity set of two independent
and identically distributed risky assets will optimally invest half her wealth in each asset.

Proof. We will prove that α∗ = 12 w0 SSD any other chosen value for α.
Observe that w0 + αx̃1 + (w0 − α)x̃2 can be rewritten as
                                                  
                                         x̃1 + x̃2
                                w0 1 +               + ε̃
                                             2

where
                                   ε̃ ≡ (α − 21 w0 )(x̃1 − x̃2 )
Now we need to check that the conditional mean of ε̃ is zero.
78 14.2. STATIC PORTFOLIO CHOICE WITH MORE THAN ONE RISKY ASSET



                                               
                                       x̃1 + x̃2
                     E ε̃ w0 1 +
                                           2
                                                                  
                               1                         x̃1 + x̃2
                   = E (α − 2 w0 )(x̃1 − x̃2 ) 1 +
                                                             2
                           1
                   = (α − 2 w0 )E[ x̃1 − x̃2 | x̃1 + x̃2 ]
                   = (α − 12 w0 ) (E[ x̃1 | x̃1 + x̃2 ] − E[ x̃2 | x̃1 + x̃2 ])
                   = 0 since x̃1 and x̃2 are identically distributed.

So we have shown that any other distribution can be obtained by adding zero-mean noise,
and therefore α∗ = 12 w0 SSD any alternative split between the two assets.
Lecture 15

Consumption and Saving

                                           Reading: Eeckhoudt-Gollier-Schlesinger chapter 6

Until now we have assumed that our decision-maker lives for one period and derives
utility from consuming ‘wealth’. In this chapter we extend the choice over multiple time
periods.


15.1       Consumption over a lifetime
Assume that a decision-maker lives for n periods and consumes ct in each period t =
1, ..., n. Furthermore, assume that the decision-maker derives a lifetime utility U (c1 , ..., cn )
from the consumption schedule (c1 , ..., cn ).
We assume that the utility function is a linear function of individual felicity functions,
of the following form
                                          X n
                                  U (c) =     βt u(ct )
                                                t=1
Where

   • u(ct ) is the felicity of consuming ct at time t
   • βt > 0 is the discount factor applied to felicity occurring at time t

This form of the model means that preferences over any consumption pair (ct1 , ct2 ) are
independent of all other ct , t 6= t1 , t2 , and that the shape of the felicity function remains
constant over time.

Interpretation of the felicity function Our usual assumption will be the felicity
function is concave, that is u0 > 0, u00 < 0. Note that this will then ensure that U is
concave, as a linear combination of concave functions.
The interpretation is that this gives us not just risk aversion, but a preference for smooth
consumption over time. How ‘smooth’ will be determined by βt .
                                                79
80                                    15.2. LIFETIME CONSUMPTION UNDER CERTAINTY


15.2      Lifetime consumption under certainty
To explore the consumption smoothing we first look at the position in the absence of
risk. Suppose that our decision-maker is endowed with a certain flow of income.
Let yt be a certain flow of income at time t, and let i be the risk-free rate of interest.
Note that we assume both borrowing and lending is available at i.
Let xt be the accumulated saving just after time t (just after, so that it records the
position after the consumption of ct at t).
We assume that our decision-maker starts with savings of z0 ≥ 0, and we include the
condition that zn ≥ 0. This prevents our decision-maker being in debt at the end of her
lifetime; we assume lenders won’t agree to lending if they won’t be repaid.
This gives us a dynamic budget constraint of the form
                            zt = (1 + i)zt−1 + yt − ct ,           t = 1, ..., n
We can now rewrite this


                  zt = (1 + i)zt−1 + yt − ct                          t = 1, ..., n
                                           X n
                ⇒ zn = (1 + i)n−t+1 zt−1 +     (1 + i)n−s (ys − cs ), t = 1, ..., n
                                                          s=t
                                    n
                                    X
                              n
                ⇒ zn = (1 + i) z0 +   (1 + i)n−s (ys − cs )
                                                 s=1
                                      n
                                      X
              ⇒ v n zn = z0 +               v s (ys − cs ) ≥ 0                      since zn ≥ 0
                                      s=1
              n
              X                       Xn
          ⇒         v t ct ≤ z0 +           v t yt = w0
              t=1                     t=1


This states that the present value of future consumption must not be more than the
present value of future income and
                               P initial wealth. So w0 can be thought of as the present
value of lifetime wealth, where nt=1 v t yt is called ‘human capital’, since it may be mod-
elled as an asset.


15.2.1     The maximisation problem under certainty
Our decision-maker’s maximisation problem is therefore

                                      n
                                      X                            n
                                                                   X
                          max               βt u(ct ) subject to         v t ct = w 0
                         c1 ,...,cn
                                      t=1                          t=1

We have replaced ‘≤’ with ‘=’ in the budget constraint since u0 > 0 and so optimally the
decision-maker will always consume the maximum amount left in the final period.
LECTURE 15. CONSUMPTION AND SAVING                                                        81


We may write the Lagrangian as

                                             n                           n
                                                                                      !
                                             X                           X
                                                                                t
                    L (c1 , ..., cn , λ) =         βt u(ct ) + λ w0 −          v ct
                                             t=1                         t=1

The objective function is a sum of concave functions, and the condition is linear, so
this is enough for the following first order conditions to be necessary and sufficient for
optimality:

                      ∂L
                          :     βt u0 (ct ) − λv t = 0 for all t = 1, ..., n
                      ∂ct

                                                   n
                                       ∂L          X
                                          :               v t ct = w 0
                                       ∂λ           t=1

This shows us that the shape of optimal consumption over a lifetime depends on the
income only through λ. The timing of income doesn’t affect optimal consumption except
through the net present value. The split of total wealth w0 between savings z0 and human
capital doesn’t affect the optimal consumption strategy.
Now we can rearrange the first order condition to get the ratio of successive marginal
utilities:

                                       u0 (ct )           βt+1
                                       0
                                                = (1 + i)
                                      u (ct+1 )            βt

We can also use the properties u0 > 0 and u00 < 0 to establish a relationship between
successive consumption states. For example:

                                                              βt
                              ct+1 = ct            ⇐⇒             =1+i
                                                             βt+1
or
                                                              βt
                              ct+1 > ct            ⇐⇒             <1+i
                                                             βt+1

What this says is that the ‘smoothness’ of consumption over a lifetime depends on the
relationship of the subjective discount rate compared to the rate of interest.


Example: exponential discounting Let’s assume that the felicity function has a
CRRA form, that is
                                       ct1−γ
                              u(ct ) =
                                       1−γ
And let
                                                        1
                                             βt =
                                                     (1 + δ)t
82                                     15.2. LIFETIME CONSUMPTION UNDER CERTAINTY


                                     ∂L
Then our first order conditions from ∂c t
                                          become
                                                                      t
                                                                 1+δ
                                                 c−γ
                                                  t  =λ
                                                                 1+i

This can be rewritten as
                                                                            1/γ
                                                   t                   1+i
                                       ct = c0 a       where a =
                                                                       1+δ

Here c0 is a constant chosen to satisfy the lifetime budget constraint. As above, we can
see that
                                  ct+1 > ct ⇐⇒ i > δ

                                                                                    i=δ
                                                                                    i<δ
                                                                                    i>δ
optimal consumption




                      20          40                    60                  80
                                           age


15.2.2                     The Fischer Separation Theorem
We have assumed above that y = (y1 , ..., yn ) is fixed. Now support that instead the
decision-maker can choose between different income profiles - e.g. an individual choosing
between different careers, or a firm choosing between competing projects.

Proposition 87. If financial markets are frictionless, then the decision-maker should
optimally choose the income profile that maximises the NPV of income.

Proof: Since the decision-maker can use financial markets to rearrange the income sched-
ule to achieve a desired
                   P consumption schedule, and this consumption schedule depends
on y only through nt=1 v t yt .                                                       2

Here ‘frictionless’ means that there are no transaction costs and no ‘wedge’ between the
cost of borrowing and the return on lending (both are at the risk-free rate).
LECTURE 15. CONSUMPTION AND SAVING                                                           83


15.3       Extending the model to uncertainty
There are three main ways where we can introduce risk into the model:

   • Saving may be possible through risky assets.

   • Labour income may be risky.

   • Future lifetime itself may be risky

We can also introduce other elements of choice in relation to the income pattern (for
example, over jobs, or retirement date). We can also introduce market frictions, for
example, by charging a higher rate of interest for borrowing than for risk-free saving.
In the next sub-section we show an example of a simple two-period consumption problem
with risk.


15.3.1      Precautionary saving under risk

We will introduce risk with an uncertain income y˜1 in the second period, and certain
income y0 in the first period. This risk does not depend on the consumer’s choice, so the
only choice is how much to save, which we denote as s (the remainder of y0 is consumed
in period 0. This saving is invested, at the risk-free rate r, and consumed in period 1.
Consumers select how much to save at date 0 in order to maximise their expected lifetime
utility:
                       max V (s) = u0 (y0 − s) + E [u1 ((1 + r)s + y˜1 )]
                         s

If we denote the optimal saving by s∗ , then for the first order condition is written as

                        u00 (y0 − s∗ ) = (1 + r)E [u01 ((1 + r)s∗ + y˜1 ) ]


We want to compare this with optimal saving in the absence of risk, when the income in
the second period is equal to E[y˜1 ] with certainty. In this case the maximisation problem
would be:
                       max V̂ (s) = u0 (y0 − s) + u1 ((1 + r)s + E [y˜1 ])
                         s

We denote the solution as ŝ.
There will be precautionary saving if s∗ > ŝ.
Now V̂ (s) has a negative second derivative. So if the first derivative of V̂ (s) evaluated
at s∗ is positive, then then ŝ must be further to the right, that is greater, than s∗ .
Conversely, if it is negative, then ŝ must be further to the left, that is less than, than s∗ .
84                               15.3. EXTENDING THE MODEL TO UNCERTAINTY




          V̂ 0 (s) = −u00 (y0 − s) + (1 + r)u01 ((1 + r)s + E [y˜1 ])
       ⇒ V̂ 0 (s∗ ) = −u00 (y0 − s∗ ) + (1 + r)u01 ((1 + r)s∗ + E [y˜1 ])
                    = −(1 + r)E [u01 ((1 + r)s∗ + y˜1 ) ] + (1 + r)u01 ((1 + r)s∗ + E [y˜1 ])
                    = (1 + r) (u01 ((1 + r)s∗ + E [y˜1 ]) − E [u01 ((1 + r)s∗ + y˜1 )])

       So V̂ 0 (s∗ ) ≤ 0 ⇐⇒ u01 ((1 + r)s∗ + E [y˜1 ]) ≤ E [u01 ((1 + r)s∗ + y˜1 )]


Now this holds, by Jensen’s inequality, if and only if u01 is a convex function. That is, if
u000
 1 is positive. This is referred to as prudence. Risk aversion on its own is not sufficient
to cause precautionary saving for all possible distributions of the future risk.


15.3.2     Risk Aversion and Prudence
Proposition 88. A decision-maker who exhibits decreasing absolute risk aversion is
prudent.

Proof: If the decision maker exhibits DARA then A0 (w) ≤ 0 ∀w.

                         −u00 (w)
                A(w) =
                          u0 (w)
                         −u000 (w) −u00 (w)u00 (w)
                A0 (w) =          −
                          u0 (w)       (u0 (w))2
                         −u00 (w) −u000 (w) u00 (w)
                                                      
                       = 0                    − 0
                          u (w)     −u00 (w)     u (w)
                                             000
                                                  
                                          −u (w)
                       = A(w) A(w) − 00
                                           u (w)
                                                                     −u000 (w)
                       = A(w) (A(w) − P (w))            where P (w) = 00
                                                                      u (w)


Now since under risk aversion A(w) is positive, u0 (w) is positive, and u0 (w) is negative,
then:
                     A0 (w) ≤ 0 ⇐⇒ P (w) ≥ A(w) ⇒ u000 (w) > 0
                                                                                                2

P (w) is known as the measure of absolute prudence. If we believe that DARA is intuitive
then this supports the idea that precautionary saving is too. Note that the implication
does not hold in reverse. It is possible to be prudent without exhibiting decreasing
absolute risk aversion. In fact, it is even possible to be prudent and risk-loving!
LECTURE 15. CONSUMPTION AND SAVING                                                                 85


15.4        Time Consistency
In the model above with only two consumption dates, decisions are made at t = 0 which
determine present and future consumption; at the second date, all remaining wealth is
consumed, and there is no scope for changing one’s mind. We now consider a model with
three (or more) consumption dates.
Let us consider the 3-period problem, with no uncertainty. At t = 0 the agent will choose
the optimum consumption
                 P2           schedule (c0 , c1 , c2 ) so as to maximise expected
                                                                           P2     (discounted)
                                                                                  t
lifetime utility, t=0 βt u(ct ) subject to a lifetime budget constraint, t=0 v ct = w0 .
Then, as above, we have first order conditions which can be rearranged to include:

                                             u0 (c1 )           β2
                                              0
                                                      = (1 + i)
                                             u (c2 )            β1

Now consider the agent’s position at t = 1 (just before consumption). She has the chance
to revisit the choice between consumption and saving, and will act to maximise expected
discounted utility again. She has remaining wealth w1 = w0 − (1 + r)c0 . Using the same
discounted utility function, but now discounting back to t = 1 not t = 0, this changes
our problem to:

                                 2
                                 X                               2
                                                                 X
                       max             βt−1 u(ct ) subject to              v t−1 ct = w1
                        c1 ,c2
                                 t=1                                 s=1

This has the first order condition
                                             u0 (c1 )           β1
                                              0
                                                      = (1 + i)
                                             u (c2 )            β0

This shows that the agent will be time consistent if and only if ββ10 = ββ21 , or more generally
iff ββt+1
       t
          = ββt+2
              t+1
                  , for the case where n ≥ 3.
We can see that this time-consistent βt will be of the form aβ t , which is the exponential
discounting example we showed above. The assumption is convenient. We might also
argue that it provides for a reasonable model of rational behaviour.
Time-inconsistent discounting, on the other hand, will lead to some very interesting
results, and may provide a model of some sorts of behaviour. For example, an agent who
is addicted to consumption might find it optimal to consume now and start saving in the
next period, but when the next period arrives, put saving off again. In such a model,
removing some choices from an agent might boost overall welfare. But this also leads to
interesting philosophical problems; if the perspective of the agent changes as to what is
‘best’ then how would we evaluate between competing perspectives?1

   1
    If you want to get into this, I suggest Derek Parfit’s Reasons and Persons (1984, Oxford University
Press).
Lecture 16

The Utility of Annuitisation

In this chapter we extend the concept of utility to the whole of a future lifetime at
retirement, and consider the implications of competing strategies.


16.1       Optimal consumption plan in the absence of life
           annuities
We will assume that our agent retires at t = 0 at age x with total net worth of w0 and
will live for a maximum of n periods. We can think of n as ω − x.
We will maintain our fixed interest model - so assume that savings earn an annual interest
at rate i. At this stage we have no randomness on the asset side; the unknown future
lifetime is the sole source of randomness.
A consumption strategy is a choice of ct for each time t ∈ 1, ..., n.
The decision maker discounts future consumption using annual rate δ and derives per-
                             c1−ρ −1
period felicity at time t of t1−ρ if she is alive at time t or zero otherwise.
Note that this means the felicity function takes CRRA form, and the agent gains no utility
from bequests. By ‘bequests’ we mean money left over on death - e.g. to a dependant.
We want to optimise lifetime utility, so the programme is:

                       n                                                  n
                       X      t px      c1−ρ
                                         t   −1                           X      ct
                 max                  t
                                                        subject to w0 =
                c1 ,...,cN
                           t=1
                               (1 + δ) 1 − ρ                              t=1
                                                                              (1 + i)t
We can see here that the constraint is that the total value of possible consumption is
equal to the starting wealth. The agent is having to choose her consumption pattern
now, but probability of survival only features in the utility function.
We can solve using the following Lagrangian

                                     n                              n
                                                                                         !
                                     X      t px  c1−ρ
                                                   t   −1          X      ct
           max L(c1 , ..., cN , λ) =            t
                                                          + λ w0 −
          c1 ,...,cN
                                     t=1
                                         (1 + δ) 1 − ρ             t=1
                                                                       (1 + i)t
                                                   86
LECTURE 16. THE UTILITY OF ANNUITISATION                                                   87


First order conditions are
                    ∂L        t px           λ
                        =          t
                                     c−ρ
                                      t −          = 0 for t = 1, ..., n
                    ∂ct    (1 + δ)        (1 + i)t
                                             n
                                  ∂L        X      ct
                                     = w0 −              =0
                                  ∂λ        t=1
                                                (1 + i)t

                                 ∂L       t px           λ
                                     =         t
                                                 c−ρ
                                                  t −          =0
                                 ∂ct   (1 + δ)        (1 + i)t
                                      λ(1 + δ)t
                             ⇒ c−ρ
                                t =                t
                                     t px (1 + i)

                                                     t 1/ρ
                                                     
                                        t px (1 + i)
                              ⇒ ct =
                                         λ(1 + δ)t
                                                      1/ρ
                              ct+1      t+1 px (1 + i)
                            ⇒      =
                               ct         t px (1 + δ)
                                                      1/ρ
                                                  1+i
                            ⇒ ct+1 = ct px+t
                                                  1+δ

If i = δ then ct+1 < ct because px+t < 1. When there was no uncertainty over future
lifetime, we saw that when i = δ we would have the optimal choice showing flat consump-
tion, that is ct+1 = ct . Now we see that when there is mortality, and life annuities are
not available, rational expected utility maximisers optimally consume less as they age.


16.2       Optimal retirement strategy with life annuities
At this stage we assume the presence of an actuarially fair life annuity market - that is
we are ignoring costs and expenses and other frictions. The optimisation programme, in
the presence of a complete market, changes the budged constraint so that the expected
present value of consumption is equal to the starting wealth. So the programme becomes:

                       n                                             n
                       X       t px    ct1−ρ − 1                     X      t p x ct
                 max                               subject to w0 =
                c1 ,...,cN
                           t=1
                               (1 + δ)t 1 − ρ                        t=1
                                                                           (1 + i)t
And then the Lagrangian becomes
                                      n                             n
                                                                                       !
                                      X     t px c1−ρ
                                                  t   −1           X    t p x ct
           max L(c1 , ..., cN , λ) =                     + λ w 0 −
          c1 ,...,cN
                                     t=1
                                         (1 + δ)t 1 − ρ            t=1
                                                                       (1 + i)t

The first order conditions are then:
                    ∂L        t px         λ t px
                        =          t
                                     c−ρ
                                      t −          = 0 for t = 1, ..., n
                    ∂ct    (1 + δ)        (1 + i)t
88              16.2. OPTIMAL RETIREMENT STRATEGY WITH LIFE ANNUITIES

                                             n
                                  ∂L        X    t p x ct
                                     = w0 −               t
                                                            =0
                                  ∂λ        t=1
                                                (1  +  i)
We can see that t px cancels in the first set of equations and we have
                                              t                       1/ρ
                           −1/ρ          1+δ          ct+1         1+i
                          ct    =λ                  ⇒      =
                                         1+i           ct          1+δ

So where i = δ the consumption will be smooth across time. This is the pattern for a
standard annuity.
Even where i 6= δ the slope of the optimal ct will be higher. It achieves this by relaxing
the budget constraint, allowing a higher present value of consumption.


Mortality credit One way of thinking about the benefit to pensioners from life annuities
is the following. Suppose you are aged x and want to invest for t periods.
If you invest 1 in the risk-free asset you receive (1 + i)t .
If you invest 1 in an actuarially fair survival benefit you receive:
            t
     • (1+i)
         t px
              ≥ (1 + i)t if you survive until t + 1.

     • 0 ≤ (1 + i)t otherwise.

You earn more than the risk free rate if you survive, but less if you don’t.
The additional return on survival t p1x > 1 is called a mortality credit, since this is the
extra amount by which savings are accumulated if the life survives. We can think of an
annuity has having a mortality credit of px1+j for each year j of the annuity.


Possible extensions of the model We can combine the idea of random future lifetime
with the ideas presented in the earlier lectures:

     • Expenses and profit margin of the life office act to move the annuity away from
       actuarially fair, and similarly, borrowing is likely to be more expensive than saving.

     • A risky asset may be available as well as the risk-free rate (we assume with a higher
       expected return).

     • Labour income may be risky – we would have a multi-period model of income
       throughout life.

This can get particularly interesting and complicated if we allow for choices around careers
and even retirement age. Different careers might give a different pattern of earnings
growth, different volatility, and different levels of correlation with the risky assets. Some
career choices will even change the mortality characteristics.
Desynchronisation and the Market
Economy

The Purpose of the Financial System
What is the primary purpose of the financial system? Why is such a large proportion of
our economy dedicated to financial services? Why are the pay and bonuses for bankers
so enormous? A decade on from the Financial Crisis, when much of the industry has
been described as “socially useless”, these questions have never been more relevant.
The aim of this course is to provide a prism through which to view the financial system,
and to start to answer these questions. We can argue that the primary purpose of the
financial system is to allow desynchronisation of the income and consumption streams
of agents. There are two dimensions to this desynchronisation: time and risk. Income
will be concentrated during working years and the ‘good times’: when you are healthy,
when the jobs market is good, when the harvest is good. But we need and want much
smoother consumption, to see us through our early years and retirement, and through
the ‘bad times’: ill-health, the flooded house, the bad harvest. This is what borrowing,
saving and insurance permit.

   • Banks are other financial institutions are intermediaries between individuals who
     want to borrow and individuals who want to lend. The supply and demand will
     determine the interest rate.

   • Insurance companies and pension funds can pool diversifiable risks, taking idiosyn-
     cratic risks away from individuals.

   • Asset markets (such as stock markets) can allow individuals to take on undiversi-
     fiable risks, according to their own risk and reward preferences.

In all these examples there will be costs to this intermediation - ultimately consumers of
financial services have to pay for the administration, pricing and managing of the risks -
which includes the costs of financial regulation.
We should be able to judge the financial system as ‘socially useful’ to the extent it
facilitates this desynchronisation - in terms of its availability, reliability and affordability.


                                               89



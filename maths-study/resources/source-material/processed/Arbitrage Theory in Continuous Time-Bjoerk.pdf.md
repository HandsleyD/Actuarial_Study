---
normalized_id: shared-pdf-reference-arbitrage-theory-in-continuous-time-bjoerk
exam_code: SHARED
material_scope: arbitrage theory in continuous time-bjoerk.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Arbitrage Theory in Continuous Time-Bjoerk.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-arbitrage-theory-in-continuous-time-bjoerk

Arbitrage Theory in
 Continuous Time
     Second Edition




           OXFORD
           UNIVERSITY PRESS
      LJ
                PREFACE TO THE SECOND EDITION

  One of the main ideas behind the first edition of this book was to provide
  a reasonably honest introduction to arbitrage theory without going into abstract
  measure and integration theory. This approach, however, had some clear draw-
  backs: some topics, like the change of numeraire theory and the recently
  developed LIBOR and swap market models, are very hard to discuss without
  using the language of measure theory, and an important concept like that of
  a martingale measure can be fully understood only within a measure theoretic
  framework.
,     For the second edition I have therefore decided to include some more advanced
  material, but, in order to keep the book accessible for the reader who does not
  want to study measure theory, I have organized the text as follows:
       The more advanced parts of the book are marked with a star *.
  1'   The main parts of the book are virtually unchanged and kept on an
       elementary level (i.e. not marked with a star).
  f    The reader who is looking for an elementary treatment can simply skip
  1'   the starred chapters and sections. The nonstarred sections thus constitute
       a self-contained course on arbitrage theory.
 The organization and contents of the new parts are as follows:
       I have added appendices on measure theory, probability theory, and mar-
       tingale theory. These appendices can be used for a lighthearted but honest
       introductory course on the corresponding topics, and they define the pre-
       requisites for the advanced parts of the main text. In the appendices there
       is an emphasis on building intuition for basic concepts, such as measur-
       ability, conditional expectation, and measure changes. Most results are
       given formal proofs but for some results the reader is referred to the
       literature.
  8    There is a new chapter on the martingale approach to arbitrage theory,
       where we discuss (in some detail) the First and Second Fundamental The-
       orems of mathematical finance, i.e. the connections between absence of
       arbitrage, the existence of martingale measures, and completeness of the
       market. The full proofs of these results are very technical but I have tried
       to provide a fairly detailed guided tour through the theory, including the




+
       Delbaen-Schachermayer proof of the First Fundamental Theorem.
  r    Following the chapter on the general martingale approach there is a s e p
       mate chapter on martingale representation theorems and Girsanov trans-
       formations in a Wiener framework. Full proofs are given and I have also
       added a section on maximum likelihood estimation for diffusion processes.
viii                 PREFACE TO THE SECOND EDITION


       As the obvious application of the machinery developed above, there is
       a chapter where the Black-Scholes model is discussed in detail from the
       martingale point of view. There is also an added chapter on the martingale
       approach to multidimensional models, where these are investigated in some
       detail. In particular we discuss stochastic discount factors and derive the
       Hansen-Jagannathan bounds.
       The old chapter on changes of numeraire always suffered from the restric-
       tion to a Markovian setting. It has now been rewritten and placed in its
       much more natural martingale setting.
       I have added a fairly extensive chapter on the LIBOR and swap market
       models which have become so important in interest rate theory.

Acknowledgements
Since the publication of the first edition I have received valuable comments
and help from a large number of people. In particular I am very grateful to
Raquel Medeiros Gaspar who, apart from pointing out errors and typos, has
done a splendid job in providing written solutions to a large number of the exer-
cises. I am also very grateful to Ake Gunnelin, Mia Hinnerich, Nuutti Kuosa,
Roger Lee, Trygve Nilsen, Ragnar Norberg, Philip Protter, Rolf Poulsen, Irina
Slinko, Ping Wu, and K.P. Garnage. It is a pleasure to express my deep grati-
tude to Andrew Schuller and Stuart Fowkes, both at OUP, for transforming
the manuscript into book form. Their importance for the final result cannot be
overestimated.
    Special thanks are due to Kjell Johansson and Andrew Sheppard for providing
important and essential input at crucial points.
                                                                   Tomas Bjork
Stockholm
30 April 2003

                                                                tibmm ,y
                                                    jrrd   pitoozq Ism03 a
                                                                         *
                                                                   ' .mtsrjJil
                                             & ra,             ws11 a ai -dl'    (I

                                       I   ' ii,M         ni) w m i b S ~ Rmsdw
                                             smjrif I ~ ~ i t s m ~ d j30a mm s ~ o
                                             B I ~ I30 93nshix9 siij q q p ~ $ i d m
                                             rrsdt ?o &oorq lkr3 9&T' . J ~ ~ L c I
                                             :, W e b y h M a sbivorq oJ
                                                     -8iXf7&Md&-llasdI9(1
                        I

                            W$3$TRI3'1




                    PREFACE TO THE FIRST EDITION

    The purpose of this book is to present arbitrage theory and its applications to
    pricing problems for financial derivatives. It is intended as a textbook for gradu-
    ate and advanced undergraduate students in finance, economics, mathematics,
    and statistics and I also hope that it will be useful for practitioners.
        Because of its intended audience, the book does not presuppose any previous
    knowledge of abstract measure theory. The only mathematical prerequisites are
    advanced calculus and a basic course in probability theory. No previous know-
    ledge in economics or finance is assumed.

  The book starts by contradicting its own title, in the sense that the second
  chapter is devoted to the binomial model. After that, the theory is exclusively
  developed in continuous time.
      The main mathematical tool used in the book is the theory of stochastic
  differential equations (SDEs), and instead of going into the technical details con-
  cerning the foundations of that theory I have focused on applications. The object
  is to give the reader, as quickly and painlessly as possible, a solid working know-
  ledge of the powerful mathematical tool known as It6 calculus. We treat basic
  SDE techniques, including Feynman-KaE representations and the Kolmogorov
  equations. Martingales are introduced at an early stage. Throughout the book
  there is a strong emphasis on concrete computations, and the exercises at the
  end of each chapter constitute an integral part of the text.
      The mathematics developed in the first part of the book is then applied to
  arbitrage pricing of financial derivatives. We cover the basic Black-Scholes the-
  ory, including delta hedging and "the greeks", and we extend it to the case
  of several underlying assets (including stochastic interest rates) as well as to
  dividend paying assets. Barrier options, as well as currency and quanto products,
  are given separate chapters. We also consider, in some detail, incomplete
  markets.
!     American contracts are treated only in passing. The reason for this is that
i the theory is complicated and that few analytical results are available. Instead
i I have included a chapter on stochastic optimal control and its applications to
                                                         i
  optimal portfolio selection.
1     Interest rate theory constitutes a large pfU3 of the book, and we cover the
, basic short rate theory, including inversion of the yield curve and affine term
  structures. The Heath-Jarrow-Morton theory is treated, both under the object-
  ive measure and under a martingale measure, and we also present the Musiela
  parametrization. The basic framework for most chapters is that of a multifactor
  model, and this allows us, despite the fact that we do not formally use measure
k
x                     PREFACE TO THE FIRST EDITION


theory, to give a fairly complete treatment of the general change of numeraire
technique which is so essential to modern interest rate theory. In particular
we treat forward neutral measures in some detail. This allows us to present
the Geman-El Karoui-Rochet formula for option pricing, and we apply it to
the general Gaussian forward rate model, as well as to a number of particular
cases.

Concerning the mathematical level, the book falls between the elementary text
by Hull (1997), and more advanced texts such as Duffie (1996) or Musiela
and Rutkowski (1997). These books are used as canonical references in the
present text.
    In order to facilitate using the book for shorter courses, the pedagogical
approach has been that of first presenting and analyzing a simple (typically
one-dimensional) model, and then to derive the theory in a more complicated
(multidime~sional)framework. The drawback of this approach is of course that
some arguments are being repeated, but this seems to be unavoidable, and I can
only apologize to the technically more advanced reader.
    Notes to the literature can be found at the end of most chapters. I have tried
to keep the reference list on a manageable scale, but any serious omission is
unintentional, and I will be happy to correct it. For more bibliographic informa-
tion the reader is referred to Duffie (1996) and to Musiela and Rutkowski (1997)
which both contain encyclopedic bibliographies.

On the more technical side the following facts can be mentioned. I have tried to
present a reasonably honest picture of SDE theory, including Feynman-Kat r e p
resentations, while avoiding the explicit use of abstract measure theory. Because
of the chosen technical level, the arguments concerning the construction of the
stochastic integral are thus forced to be more or less heuristic. Nevertheless I
have tried to be as precise as possible, so even the heuristic arguments are the
"correct" ones in the sense that they can beaompleted to formal proofs. In the
rest of the text I try to give full proofs of all mathematical statements, with
the exception that I have often left out the checking of various integrability
conditions.
     Since the Girsanov theory for absolutely continuous changes of measures
is outside the scope of this text, martingale measures are introduced by the
use of locally riskless portfolios, partial differential equations (PDEs) and the
Feynrnan-KaE representation theorem. Still, the approach to arbitrage theory
presented in the text is basically a probabilistic one, emphasizing the use of
martingale measures for the computation of prices.
     The integral representation theorem for martingales adapted to a Wiener
filtration is also outside the scope of the book. Thus we do not treat market
completeness in full generality, but restrict ourselves to a Markovian framework.
For most applications this is, however, general enough.
C                              PREFACE TO THE FIRST EDITION


          Acknowledgements
          Bertil Nblund, StafFan Viotti, Peter Jennergren and Ragnar Lindgren persuaded
          me to start studying financial economics, and they have constantly and
          generously shared their knowledge with me.
              Hans Biihlman, Paul Embrechts and Hans Gerber gave me the opportunity
          to give a series of lectures for a summer school at Monte Verita in Ascona 1995.
          This summer school was for me an extremely happy and fruitful time, as well
          as the start of a partially new career. The set of lecture notes produced for that
          occasion is the basis for the present book.
              Over the years of writing, I have received valuable comments and advice from
          a large number of people. My greatest debt is to Camilla Landen who has given
          me more good advice (and pointed out more errors) than I thought was humanly
          possible. I am also highly indebted to Flavio Angelini, Pia Berg, Nick Bingham,
          Samuel Cox, Darrell Duffie, Otto Elmgart, Malin Engstrom, Jan Ericsson, Damir
          FilipoviE, Andrea Gombani, Stefano Herzel, David Lando, Angus MacDonald,
          Alexander Matros, Ragnar Norberg, Joel Reneby, Wolfgang Runggaldier, Per
          Sjoberg, Patrik Siifvenblad, Nick Webber, and Anna Vorwerk.
              The main part of this book has been written while I have been at the Fin-
          ance Department of the Stockholm School of Economics. I am deeply indebted
          to the school, the department and the st& working there for support and

         Parts of the book were written while I was still at the mathematics depart-
      ment of KTH, Stockholm. It is a pleasure to acknowledge the support I got from
      the department and from the persons within it.
      I


         Finally I would like to express my deeply felt gratitude to Andrew Schuller,
    , James Martin, and Kim Roberts, all at Oxford University Press, and Neville
      Hankins,, Me freelance copy-editor who worked on the book. The help given
      (and patience shown) by these people has been remarkable and invaluable.
                                                                        Tomas Bjork
                             CONTENTS


1   Introduction
    1.1 Problem Formulation
2   The Binomial Model
    2.1 The One Period Model
        2.1.1 Model Description
        2.1.2 Portfolios and Arbitrage
        2.1.3 Contingent Claims
        2.1.4 Risk Neutral Valuation
    2.2 The Multiperiod Model
         2.2.1 Portfolios and Arbitrage
         2.2.2 Contingent Claims
    2.3 Exercises
    2.4 Notes
3   A More General One Period Model
    3.1 The Model
    3.2 Absence of Arbitrage
    3.3 Martingale Pricing
    3.4 Completeness
    3.5 Stochastic Discount Factors
    3.6 Exercises
4   Stochastic Integrals
    4.1 Introduction
    4.2 Information
    4.3 Stochastic Integrals
    4.4 Martingales
    4.5 Stochastic Calculus and the It8 Formula
    4.6 Examples
    4.7 The Multidimensional It6 Formula
    4.8 Correlated Wiener Processes
    4.9 Exercises
    4.10 Notes
5   Differential Equations
    5.1 Stochastic DifferentialEquations
    5.2 Geometric Brownian Motion
    5.3 The Linear SDE
    5.4 The Infinitesimal Operator
                                            CONTENTS                 xiii



                5.5   Partial Differential Equations                 68
                5.6   The Kolmogorov Equations
            1   5.7   Exercises
        Y       5.8   Notes
        6   Portfolio Dynamics
            6.1 Introduction
            6.2 Self-financing Portfolios
        -
        'p' 6.3 Dividends
            6.4 Exercise
                Arbitrage Pricing
                7.1 Introduction
                7.2 Contingent Claims and Arbitrage
                7.3 The Black-Scholes Equation
                7.4 Risk Neutral Valuation
                7.5 The Black-Scholes Formula
                7.6 Options on Futures
                     7.6.1 Forward Contracts
                     7.6.2 Futures Contracts and the Black Formula
                7.7 Volatility
                     7.7.1 Historic Volatility
                     7.7.2 Implied Volatility
                7.8 American options
                7.9 Exercises
                7.10 Notes
        8     Completeness a n d Hedging
              8.1 Introduction
              8.2 Completeness in the Black-Scholes Model
              8.3 Completeness-Absence of Arbitrage
            1 8.4 Exercises
              8.5 Notes
i       9       Parity Relations and Delta Hedging
    -   - 9.1 Parity Relations
          9.2         The Greeks
          9.3         Delta and Gamma Hedging
1
I
        E 9.4         Exercises
        10 The Martingale Approach t o Arbitrage Theory*
           10.1 The Case with Zero Interest Rate
           10.2 Absence of Arbitrage
                10.2.1 A Rough Sketch of the Proof
                10.2.2 Precise Results
                                                      4   6
    10.3   The General Case
    10.4   Completeness
    10.5   Martingale Pricing
    10.6   Stochastic Discount Factors
    10.7   Summary for the Working Economist
    10.8   Notes
11 T h e Mathematics of t h e Martingale Approach*
   11.1 Stochastic Integral Representations
   11.2 The Girsanov Theorem: Heuristics
   11.3 The Girsanov Theorem
   11.4 The Converse of the Girsanov Theorem
   11.5 Girsanov Transformations and Stochastic Differentials
   11.6 Maximum Likelihood Estimation
   11.7 Exercises
   11.8 Notes
12 Black-Scholes from a Martingale Point of View*
   12.1 Absence of Arbitrage
   12.2 Pricing
   12.3 Completeness
13 Multidimensional Models: Classical Approach
   13.1 Introduction
   13.2 Pricing
   13.3 Risk Neutral Valuation
   13.4 RRducing the State Space
   13.5 Hedging
   13.6 Exercises
14 Multidimensional Models: Martingale Approach*
     14.1 Absence of Arbitrage
     14.2 Completeness
     14.3 Hedging
     14.4 Pricing
     14.5 Markovian Models and PDEs
     14.6 Market Prices of Risk
     14.7 Stochastic Discount Factors
     14.8 The Hansen-Jagannathan Bounds
     14.9 Exercises
     14.10 Notes
15 Incomplete Markets
   15.1 Introduction
   15.2 A Scalar Nonpriced Underlying Asset
   15.3 The Multidimensional Case
                                CONTENTS


 I    15.4 A Stochastic Short Rate
      15.5 The Martingale Approach*
      15.6 Summing Up


16 Dividends
      16.1 Discrete Dividends
           16.1.1 Price Dynamics and Dividend Structm
           16.1.2 Pricing Contingent Claims
      16.2 Continuous Dividends
           16.2.1 Continuous Dividend Yield
           16.2.2 The General Case
      16.3 Exercises
17 Currency Derivatives
   17.1 Pure Currency Contracts
 , 17.2 Domestic and Foreign Equity Markets
 ! 17.3 Domestic and Foreign Market Prices of Risk




18 Barrier Options
, 18.1 Mathematical Background
  , 18.2 Out Contracts
         18.2.1 Down-and-out Contracts
         18.2.2 Upand-Out Contracts
         18.2.3 Examples


      18.5 Lookbacks
      18.6 Exercises

       Stochastic Optimal Control
       19.1 An Example
       19.2 The Formal Problem
       19.3 The Hamilton-Jacobi-Bellman Equation
       19.4 Handling the HJB Equation
     ' 19.5 The Linear Regulator
       19.6 Optimal Consumption and Investment
            19.6.1 A Generalization
            19.6.2 Optimal Consumption
       19.7 The Mutual Fund Theorems
            19.7.1 The Case with No Risk Free Asset
            19.7.2 The Case with a Risk Free Asset
                                        CONTENTS


            19.8 Exercises
            19.9 Notes
        20 Bonds and Interest Rates
           20.1 Zero Coupon Bonds
           20.2 Interest h t e s
                20.2.1 Definitions
                20.2.2 Relations between df (t,T), dp(t, T), and dr(t)
                20.2.3 An Alternative View of the Money Account
           20.3 Coupon Bonds, Swaps, and Yields
                20.3.1 Fixed Coupon Bonds
                20.3.2 Floating Rate Bonds
                20.3.3 Interest Rate Swaps
                20.3.4 Yield and Duration
           20.4 Exercises
           20.5 Notes
        21 Short Rate Models



I
           21.1 Generalities
           21.2 The Term Structure Equation
           21.3 Exercises
           21.4 Notes
I       22 Martingale Models for the Short Rate
           22.1 Q-dynamics
           22.2 Inversion of the Yield Curve
           22.3 Affine Term Structures
                22.3.1 Definition and Existence
                22.3.2 A Probabilistic Discussion
           22.4 Some Standard Models
                22.4.1 The VasiEek Model
                22.4.2 The Ho-Lee Model
                22.4.3 The CIR Model
                22.4.4 The Hull-White Model
           22.5 Exercises
    I      22.6 Notes
        23 Forward Rate Models
           23.1 The Heath-Jarrow-Morton Framework
           23.2 Martingale Modeling
           23.3 The Musiela Parameterization
           23.4 Exercises
           23.5 Notes
        24 Change of Numeraire*
           24.1 Introduction
                                        CONTENTS                       xvii



         !, 24.2 Generalities
         I 1 24.3 Changing the Nurneraire

                    24.4.1 Using the T-bond as Numeraire
1
                    24.4.2 An Expectation Hypothesis
             24.5   A General Option Pricing Formula
             24.6   The Hull-White Model
i        ,   24.7   The General Gaussian Model
         ,   24.8   Caps and Floors

             24.10 Notes
        25 LIBOR and Swap Market Models
            25.1 Caps: Definition and Market Practice
            25.2 The LIBOR Market Model
            25.3 Pricing Caps in the LIBOR Model
            25.4 Terminal Measure Dynamics and Existence
            25.5 Calibration and Simulation
          i 25.6 The Discrete Savings Account
            25.7 Swaps
            25.8 Swaptions: Definition and Market Practice
            25.9 The Swap Market Models
            25.10 Pricing Swaptions in the Swap Market Model
            25.11 Drift Conditions for the Regular Swap Market Model
            25.12 Concluding Comment
            25.13 Exercises
            25.14 Notes
    (   26 Forwards and Futures
           26.1 Forward Contracts
           26.2 Futures Contracts
           26.3 Exercises
           26.4 Notes
        A Measure and Integration*
             A.l Sets and Mappings
             A.2 Measures and Sigma Algebras
             A.3 Integration
             A.4 Sigma-Algebras and Partitions
             A.5 Sets of Measure Zero
             A.6 The LP Spaces
             A.7 Hilbert Spaces
             A.8 Sigma-Algebras and Generators
             A.9 Product measures
             A.10 The Lebesgue Integral
    xviii                            CONTENTS


            A.11 The Radon-Nikodyrn Theorem
            A.12 Exercises
            A.13 Notes
    B       Probability Theory*
            B.l Random Variables and Processes
            B.2 Partitions and Information
            B.3 Sigmaalgebras and Information
            B.4 Independence
            B.5 Conditional Expectations
            B.6 Equivalent Probability Measures
            B.7 Exercises
            B.8 Notes
I   C       Martingales and Stopping Times*
I           C.1 Martingales
            C.2 Discrete Stochastic Integrals
            C.3 Likelihood Processes
            C.4 Stopping Times
            C.5 Exercises
    References
    Index
t                                  INTRODUCTION

       1.1 Problem Formulation
       The main project in this book consists in studying theoretical pricing models for
       those financial assets which are known as financial derivatives. Before we give
       the formal definition of the concept of a financial derivative we will, however, by
    , means of a concrete example, introduce the single most important example: the
    1 European call option.
    i:      Let us thus consider the Swedish company C&H, which today (denoted by
    I t = 0) has signed a contract with an American counterpart ACME. The contract
       stipulates that ACME will deliver 1000 computer games to C&H exactly six
       months from now (denoted by t = T). Furthermore it is stipulated that C&H
       will pay 1000 US dollars per game to ACME at the time of delivery (i.e. at
       t = T). For the sake of the argument we assume that the present spot currency
       rate between the Swedish krona (SEK) arid the US dollar is 8.00 SEK/$.
            One of the problems with this contract from the point of view d C&H is
       that it involves a considerable currency risk. Since C&H does not know the
       currency rate prevailing six months from now, this means that it does not know
       how many SEK it will have to pay at t = T. If the currency rate at t = T is
       still 8.00 SEK/$ it will have to pay 8,000,000 SEK, but if the rate rises to, say,
    I 8.50 it will face a cost of 8,500,000 SEK. Thus C&H faces the problem of how
    "0     guard itself against this currency risk, and we now list a number of natural
       strategies.
            The most naive stratgey for C&H is perhaps that of buying $1,000,000
            today at the price of 8,000,000 SEK, and then keeping this money (in a
            Eurodollar account) for six months. The advantage of this procedure is
             f course that the currency risk is completely eliminated, but there are
            also some drawbacks. First of all the strategy above has the consequence
            of tying up a substantial amount of money for a long period of time, but
            an even more serious objection may be that C&H perhaps does not have
            access to 8,000,000 SEK today.
         2. A more sophisticated arrangement, which does not require any outlays at
            all today, is that C&H goes to the forward market and buys a forward
            contract for $1,000,000 with delivery six months from now. Such a con-
            tract may, for example, be negotiated with a commercial bank, and in the
            contract two things will be stipulated.
               The bank will, at t = T, deliver $1,000,000 to C&H.
               C@Hwill, at t = T, pay for this delivery at the rate of K SEK/$.
2                               INTRODUCTION


    The exchange rate K , which is called the forward price, (or forward
    exchange rate) at t = 0, for delivery at t = T, is determined at t = 0. By
    the definition of a forward contract, the cost of entering the contract equals
    zero, and the forward rate K is thus determined by supply and demand on
    the forward market. Observe, however, that even if the price of entering the
    forward contract (at t = 0) is zero, the contract may very well fetch a nonzero
    price during the interval [0, TI.
    Let us now assume that the forward rate today for delivery in six months
equals 8.10 SEK/$. If C&H enters the forward contract this simply means that
there are no outlays today, and that in six months it will get $1,000,000 at the
predetermined total price of 8,100,000SEK. Since the forward rate is determined
today, C&H has again completely eliminated the currency risk.
    However, the forward contract also has some drawbacks, which are related
to the fact that a forward contract is a binding contract. To see this let us look
at two scenarios.

      Suppose that the spot currency rate at t = T turns out to be 8.20. Then
      C&Hcan congratulate itself, because it can now buy dollars at the rate 8.10
      despite the fact that the market rate is 8.20. In terms of the million dollars
      at stake C&Hhas thereby made an indirect profit of 8,200,000-8,100,000 =
      100,000 SEK.
      Suppose on the other hand that the spot exchange rate at t = T turns out
      to be 7.90. Because of the forward contract this means that C&His forced
      to buy dollars at the rate of 8.10 despite the fact that the market rate is
      7.90, which implies an indirect loss of 8,100,000-7,900,000= 200,000 SEK.
    3. What C&H would like to have of course is a contract which guards it
       against a high spot rate at t = T, while still allowing it to take advantage
       of a low spot rate at t = T. Such contracts do in fact exist, and they
       are called European call options. We will now go on to give a formal
       definition of such an option.

Definition 1.1 A European call option on the amount of X US dollars, with
strike price (exercise price) K SEK/$ and exercise date T is a contract
written at t = 0 with the following properties.
      The holder of the contract has, exactly at the time t = T , the right to buy
      X US dollars at the price K SEK/$.
      The holder of the option has no obligation to buy the dollars.
   Concerning the. nomenclature, the contract is called an option precisely
because it gives the holder the option (as opposed to the obligation) of buy-
ing some underlying asset (in this case US dollars). A call option gives the
holder the right to buy, wheareas a put option gives the holder the right to sell
the underlying object at a prespecified price. The prefix European means that
        the option can only be exercised at exactly the date of expiration. There also
        exist American options, which give the holder the right to exercise the option
        at any time before the date of expiration.
            Options of the type above (and with many variations) are traded on options
        markets all over the world, and the underlying objects can be anything from
        foreign currencies to stocks, oranges, timber or pig stomachs. For a given under-
        lying object there are typically a large number of options with different dates of
        expiration and different strike prices.
            We now see that CtYHcan insure itself against the currency risk very elegantly
        by buying a European call option, expiring six months from now, on a million
        dollars with a strike price of, for example, 8.00 SEK/$. If the spot exchange rate
        at T exceeds the strike price, say that it is 8.20, then CtYH exercises the option
        and buys at 8.00 SEK/$. Should the spot exchange rate at T fall below the strike
        price, it simply abstains from exercising the option.
            Note, however, that in contrast to a forward contract, which by definition
        has the price zero at the time at which it is entered, an option will always
        have a nonnegative price, which is determined on the existing options market.
        This means that our friends in CBH will have the rather delicate problem of
        determining exactly which option they wish to buy, since a higher strike price
        (for a call option) will reduce the price of the option.
            One of the main problems in this book is to see what can be said from a
        theoretical point of view about the market price of an option like the one above.
        In this context, it is worth noting that the European call has some properties
        which turn out to be fundamental.

I        I
             r Since the value of the option (at T ) depends on the future level of the
             spot exchange rate, the holding of an option is equivalent to a future
             stochastic claim.
           r The option is a derivative asset in the sense that it is defined in terms
         ., of some upderlying financial asset.
           Since the value of the option is contingent on the evolution of the exchange
    I
        rate, the option is often called a contingent claim. Later on we will give a
        precise mathematical definition of this concept, but for the moment the informal
        definition above will do. An option is just one example of a financial derivative,
        and a far from complete list of commonly traded derivatives is given below:
               European calls and puts
               American options
             r Forward rate agreements
             r Convertibles
             r Futures
             r Bonds and bond options
             r Caps and floors
             r Interest rate swaps
    R
4                               INTRODUCTION


   Later on we will give precise definitions of (most of) these contracts, but at
the moment the main point is the fact that financial derivatives exist in a great
variety and are traded in huge volumes. We can now formulate the two main
problems which concern us in the rest of the book.
Main Problems: Take a fixed derivative as given.
     What is a "fair" price for the contract?
     Suppose that we have sold a derivative, such as a call option. Then we
     have exposed ourselves to a certain amount of financial risk at the date of
     expiration. How do we protect ("hedge") ourselves against this risk?
   Let us look more closely at the pricing question above. There exist two natural
and mutually contradictory answers.
Answer ,l: "Using standard principles of operations research, a reasonable price
for the derivative is obtained by computing the expected value of the discounted
future stochastic payoff."
Answer 2: "Using standard economic reasoning, the price of a contingent claim,
like the price of any other commodity, will be determined by market forces. In
particular, it will be determined by the supply and demand curves for the market
for derivatives. Supply and demand will in their turn be influenced by such factors
as aggregate risk aversion, liquidity preferences, etc., so it is impossible to say
anything concrete about the theoretical price of a derivative."
    The reason that there is such a thing as a theory for derivatives lies in the
following fact.
Main Result: Both answers above are incorrect! It is possible (given, of course,
some assumptions) to talk about the "correct" price of a derivative, and this price
is not computed by the method given i n Answer 1.
   In the succeeding chapters we will analyze these problems in detail, but we
can already state the basic philosophy here. The main ideas are as follows.

Main Ideas
    A financial derivative is defined in terms of some underlying asset which
    already exists on the market.
    The derivative cannot therefore be priced arbitrarily in relation to
    the underlying prices if we want to avoid mispricing between the
    derivative and the underlying price.
    We thus want to price the derivative in a way that is consistent with the
    underlying prices given by the market.
    We are not trying to compute the price of the derivative in some "absolute"
    sense. The idea instead is to determine the price of the derivative in terms
    of the market prices of the underlying assets.
                                                  2
                                  THE BINOMIAL MODEL

       In this chapter we will study, in some detail, the simplest possible nontrivial
I
       model of a financial market-the binomial model. This is a discrete time model,
a      but despite the fact that the main purpose of the book concerns continuous time
!: $   models, the binomial model is well worth studying. The model is very easy to
       understand, almost all important concepts which we will study later on already
       appear in the binomial case, the mathematics required to analyze it is at high
\      school level, and last but not least the binomial model is often used in practice.




I
       2.1 The One Period Model
       We start with the one period version of the model. In the next section we will
       (easily) extend the model to an arbitrary number of periods.

       2.1.1 Model Description
       Running time is denoted by the letter t, and by definition we have two points
       in time, t = 0 ("today") and t = 1 ("tomorrow"). In the model we have two
       assets: a bond and a stock. At time t the price of a bond is denoted by Bt,
       and the price of one share of the stock is denoted by St. Thus we have two price
       processes B and S.
           The bond price process is deterministic and given by
       C


                                            Bo = 1,
                                            B1=l+R.

          The constant R is the spot rate for the period, and we can also interpret the
       existence of the bond as the existence of a bank with R as its rate of interest.
          The stock price process is a stochastic process, and its dynarnical behavior is
       described as follows:


                                       s . u, with probability p,.
                                S1 =
                                       s . d, with probability pd.

           I,It is often convenient to write this as
                                    THE BINOMIAL MODEL




1                                   FIG. 2.1. Price dynamics
    \

        where Z is a stochastic variable defined as

                                       u, with probability p,.
                                 z = { d, with probability pd.

             We assume that today's stock price s is known, as are the positive constants
                                                                              +
        u , d, p, and pd. We assume that d < u , and we have of course p, pd = 1. We
        can illustrate the price dynamics using the tree structure in Fig. 2.1.

        2.1.2 Portfolios and Arbitrage
        We will study the behavior of various portfolios on the (B,S) market, and to
        this end we define a portfolio as a vector h = (x, y). The interpretation is that
        x is the number of bonds we hold in our portfolio, whereas y is the number of
        units of the stock held by us. Note that it is quite acceptable for x and y to
        be positive as well as negative. If, for example, x = 3, this means that we have
        bought three bonds at time t = 0.If on the other hand y = -2, this means that
        we have sold two shares of the stock at time t = 0.In financial jargon we have
        a long position in the bond and a short position in the stock. It is an important
        assumption of the model that short positions are allowed.

F       Assumption 2.1.1 W e assume the following institutional facts:
              Short positions, as well as fractional holdings, are allowed. I n mathematical
              terms this means that every h E R2 is an allowed portfolio.
              There is no bid-ask spread, i.e. the selling price is equal to the buying price
              of all assets.
              There are no transactions costs of trading.
              The market is completely liquid, i.e. it is always possible to buy and/or sell
              unlimited quantities on the market. In particular it is possible to borrow
              unlimited amounts from the bank (by selling bonds short).
                             THE ONE PERTOD MODEL                                    7
!
i     Consider now a fixed portfolio h = (x, y). This portfolio has a deterministic
    market value at t = 0 and a stochastic value at t = 1.
    Definition 2.1 The value process of the portfolio h is defined by



    or, in more detail,


                                V: = x(1+ R)     + ysZ.
       Everyone wants to make a profit by trading on the market, and in this context
    a so called arbitrage portfolio is a dream come true; this is one of the central
    concepts of the theory.
    Definition 2.2 A n arbitrage portfolio is a portfolio h with the properties



                             V: > 0,    with probability 1.
-.
        An arbitrage portfolio is thus basically a deterministic money making
    machine, and we interpret the existence of an arbitrage portfolio as equivalent to
    a serious case of mispricing on the market. It is now natural to investigate when a
    given market model is arbitrage free, i.e. when there are no arbitrage portfolios.
    Proposition 2.3 The model above is free of arbitrage if and only if the following
    conditions hold:
                                d<(l+R)<u.                                       (2.1)

    Proof The condition (2.1) has an easy economic interpretation. It simply says
    that the return on the stock is not allowed to dominate the return on the bond
    and vice versa. To show that absence of arbitrage implies (2.1), we assume that
    (2.1) does in fact not hold, and then we show that this implies an arbitrage oppor-
    tunity. Let us thus assume that one of the inequalities in (2.1) does not hold, so
                                                                            +
    that we have, say, the inequality s ( l + R) > su. Then we also have s ( l R) > sd
    so it is always more profitable to invest in the bond than in the stock. An arbit-
    rage strategy is now formed by the portfolio h = (s, -I), i.e. we sell the stock
    short and invest all the money in the bond. For this portfolio we obviously have
    Vt  = 0, and as for t = 1 we have




    which by assumption is positive.
        8                             THE BINOMIAL MODEL


           Now assume that (2.1) is satisfied. To show that this implies absence of
        arbitrage let us consider an arbitrary portfolio such that Voh= 0. We thus have
            +
        x ys = 0, i.e. x = -ys. Using this relation we can write the value of the
        portfolio at t = 1 as

                                h -  ys [u - (1+ R)] , if Z = u.
                                  - {ysid-(l+R)l, i f Z = d .
1
i
        Assume now that y > 0. Then h is an arbitrage strategy if and only if we have
        the inequalities




        but this is impossible because of the condition (2.1). The case y < 0 is treated
        similarly.
           At first glance this result is perhaps only moderately exciting, but we may
        write it in a more suggestive form. To say that (2.1) holds is equivalent to saying
                +
        that 1 R is a convex combination of u and d, i.e.



                     >
        where q,, qd 0 and q,    + qd = 1. In particular we see that the weights q, and
        qd can be interpreted as probabilities for a new probability measure Q with the
        property Q(Z = u) = q,, Q(Z = d) = qd. Denoting expectation w.r.t. this
        measure by EQ we now have the following easy calculation




            We thus have the relation




        which to an economist is a well-known relation. It is in fact a risk neutral
        valuation formula, in the sense that it gives today's stock price as the discounted
        expected value of tomorrow's stock price. Of course we do not assume that the
        agents in our market are risk neutral-what we have shown is only that if we
    i   use the Q-probabilities instead of the objective probabilities then we have in fact
    I

        a risk neutral valuation of the stock (given absence of arbitrage). A probability
        measure with this property is called a risk neutral measure, or alternatively
        a risk adjusted measure or a martingale measure. Martingale measures
        will play a dominant role in the sequel so we give a formal definition.
                                  THE ONE PERIOD MODEL                                    9


         Definition 2.4 A probability measure Q is called a martingale measure if
         the following condition holds:

                                           1
                                       so= - EQ [&I.
    B1                                       l+R

I           We may now state the condition of no arbitrage in the following way.

         Proposition 2.5 The market model is arbitrage free if and only if there exists
         a martingale measure Q.
            For the binomial model it is easy to calculate the martingale probabilities.
         The proof is left to the reader.
         Proposition 2.6 For the binomial model above, the martingale probabilities are
         given by
                                           (l+R)-d

                                              u-(l+R)
                                                u- d

         2.1.3 Contingent Claims
    I
         Let us now assume that the market in the preceding section is arbitrage free.
         We go on to study pricing problems for contingent claims.
         Definition 2.7 A contingent claim (financial derivative) is any stochastic
         variable X of the form X = @ ( Z ) , where Z is the stochastic variable driving the
         stock price process above.
             We interpret a given claim X as a contract which pays X SEK to the holder of
1        the contract at time t = 1. See Fig. 2.2, where the value of the claim at each node
         is given within the corresponding box. The function @ is called the contract
         function. A typical example would be a European call option on the stock with
         strike price K. For this option to be interesting we assume that sd < K < su. If
'        Sl> K then we use the option, pay K to get the stock and then sell the stock




                                  FIG. 2.2. Contingent claim
                                        THE BINOMIAL MODEL


            on the market for su, thus making a net profit of su - K. If S1< K then the
            option is obviously worthless. In this example we thus have




            and the contract function is given by




                Our main problem is now to determine the "fair" price, if such an object
            exists at all, for a given contingent claim X. If we denote the price of X at time
    1       t by n(t;X), then it can be seen that at time t = 1 the problem is easy to solve.
            In order to avoid arbitrage we must (why?) have



            and the hard part of the problem is to determine n(0;X). To attack this problem
            we make a slight detour.
        .      Since we have assumed absence of arbitrage we know that we cannot make
            money out of nothing, but it is interesting to study what we can achieve on the
            market.
            Definition 2.8 A given contingent claim X is said to be reachable i f there
            &ts  a portfolio h such that
                                                 v: = x,
i           with probability 1. In that case we say that the portfolio h is a hedging portfolio
            or a replicating portfolio. If all claims can be replicated we say that the market
            is complete.
                If a certain claim X is reachable with replicating portfolio h, then, from
        -   a financial point of view, there is no difference between holding the claim and
            holding the portfolio. No matter what happens on the stock market, the value
            of the claim at time t = 1 will be exactly equal to the value of the portfolio at
            t = 1. Thus the price of the claim should equal the market value of the portfolio,
            and we have the following basic pricing principle.
            Pricing principle 1 If a claim X is reachable with replicating portfolio h , then
1
            the only reasonable price process for X is given by



                The word "reasonable" above can be given a more precise meaning as in the
            following proposition. We leave the proof to the reader.
                             THE ONE PERIOD MODEL                                  11


    Proposition 2.9 Suppose that a claim X is reachable with replicating
    portfolio h. Then any price at t = 0 of the claim X , other than voh,will lead t o
    an arbitrage possibility.
        We see that in a complete market we can in fact price all contingent claims,
    so it is of great interest to investigate when a given market is complete. For the
    binomial model we have the following result.
    Proposition 2.10 Assume that the general binomial model is free of arbitrage.
    Then it is also complete.
    Proof We fix an arbitrary claim X with contract function @, and we want to
    show that there exists a portfolio h = (x, y) such that




    If we write this out in detail we want to find a solution (x, y) to the following
    system of equations

                                  +
                                (1 R)x    + s u y = @(u),
                                (1+ R)x   + sdy = @(d).
    Since by assumption u < d, this linear system has a unique solution, and a simple
    calculation shows that it is given by




    2.1.4 Risk Neutral Valuation
    Since the binomial model is shown to be complete we can now price any contin-
    gent claim. According to the pricing principle of the preceding section the price
    at t = 0 is given by
                                    n(oi  x) =v ,:
-
    and using the explicit formulas (2.2)-(2.3) we obtain, after some reshuffling
    of terms,
12                          THE BINOMIAL MODEL


    Here we recognize the martingale probabilities qu and qd of Proposition 2.6.
If we assume that the model is free of arbitrage, these are true probabilities (i.e.
they are nonnegative), so we can write the pricing formula above as




The right-hand side can now be interpreted as an expected value under the mar-
tingale probability measure Q, so we have proved the following basic pricing
result, where we also add our old results about hedging.
Proposition 2.11 If the binomial model is free of arbitrage, then the arbitrage
free price of a contingent claim X is given by




Here the martingale measure Q is uniquely determined by the relation




and the explicit expression for qu and qd are given in Proposition 2-6. Further-
more the claim can be replicated using the portfolio

                           x=-. 1       u @ ( d )- d@(u)
                                                                               (2.6)
                                1+R          u-d        '
                           y = - 1 . @(u>- @(dl
                                s      u- d     '                              (2.7)
    We see that the formula (2.4) is a "risk neutral" valuation formula, and that
the probabilities which are used are just those for which the stock itself admits
a risk neutral valuation. The main economic moral can now be summarized.

Moral
    The only role played by the objective probabilities is that they determine
    which events are possible and which are impossible. In more abstarct prob-
    abilistic terminology they thus determine the class of equivalent probability
    measures. See Chapter 10.
    When we compute the arbitrage free price of a financial derivative we carry
    out the computations as if we live in a risk neutral world.
    This does not mean that we de facto live (or believe that we live) in a risk
    neutral world.
    The valuation formula holds for all investors, regardless of their attitude
    towards risk, as long as they prefer more deterministic money to less.
                               THE ONE PERIOD MODEL                            13


'8    The formula above is therefore often referred to as a "preference free"
      valuation formula.
     We end by studying a concrete example.
Example 2.12 We set s = 100, u = 1.2, d = 0.8, p, = 0.6, pd = 0.4 and, for
computational simplicity, R = 0. By convention, the monetary unit is the US
dollar. Thus we have the price dynamics

                           so= 100,
                                  120, with probability 0.6.
                           s1={80, with probability 0.4.
If we compute the discounted expected value (under the objective probability
measure P) of tomorrow's price we get

                       1
              I   ,
                      - E ~     [Sl]= 1 - [I20 -0.6+ 80 0.41 = 104.
                      l+R

This is higher than the value of today's stock price of 100, so the market is risk
averse. Since condition (2.1) obviously is satisfied we know that the market is
arbitrage free. We consider a European call with strike price K = 110, so the
claim X is given by
                                x = { 10, if s1= 120,
                                       0, if S = 80.
   Using the method of computing the price as the discounted expected values
under the objective probabilities, i.e. "Answer 1" in Section 1.1, this would give


                                 1+0
                                                   +
                     II(0; X) = -[lo. 0.6 0 )0.4] = 6.

    Using the theory above it is easily seen that the martingale probabilities are
given by q, = qd = 0.5, thus giving us the theoretical price

                                       1
                           II(0; X) = -[lo - 0.5
                                      1+0
                                                   + 0 0.51 = 5.
    We thus see that the theoretical price differs from the naive approach above.
If our theory is correct we should also be able to replicate the option, and from
the proposition above the replicating portfolio is given by

                                  1.2 - 0- 0.8 10
                               2=                 = -20,
                                      1.2 - 0.8
                                    1     10- 0    1
                               y=-.              =-
                                  100 1.2 - 0.8    4'
                                THE BINOMIAL MODEL


    In everyday terms this means that the replicating portfolio is formed by
    borrowing $20 from the bank, and investing this money in a quarter of a share
I
I
    in the stock. Thus the net value of the portfolio at t = 0 is five dollars, and at
    t = 1 the value is given by
I




    so we see that we have indeed replicated the option. We also see that if anyone
    is foolish enough to buy the option from us for the price $6, then we can make
    a riskless profit. We sell the option, thereby obtaining six dollars. Out of these
    six we invest five in the replicating portfolio and invest the remaining one in the
    bank. At time t = 1 the claims of the buyer of the option are completely balanced
    by the value of the replicating portfolio, and we still have one dollar invested in
    the bank. We have thus made an arbitrage profit. If someone is willing to sell
    the option to us at a price lower than five dollars, we can also make an arbitrage
    profit by selling the portfolio short.
        We end this section by making some remarks.
         First of all we have seen that in a complete market, like the binomial model
    above, there is indeed a unique price for any contingent claim. The price is given
    by the value of the replicating portfolio, and a negative way of expressing this
    is as follows. There exists a theoretical price for the claim precisely because of
    the fact that, strictly speaking, the claim is superfluous-it can equally well be
    replaced by its hedging portfolio.
        Second, we see that the structural reason for the completeness of the bino-
    mial model is the fact that we have two financial instruments at our disposal
    (the bond and the stock) in order to solve two equations (one for each possible
    outcome in the sample space). This fact can be generalized. A model is com-
    plete (in the generic case) if the number of underlying assets (including the bank
    account) equals the number of outcomes in the sample space.
        If we would like to make a more realistic multiperiod model of the stock
    market, then the last remark above seems discouraging. If we make a (non-
    recombining) tree with 20 time steps this means that we have 220- lo6
    elementary outcomes, and this number exceeds by a large margin the number of
    assets on any existing stock market. It would therefore seem that it is impossible
    to construct an interesting complete model with a reasonably large number of
    time steps. Fortunately the situation is not at all as bad as that; in a multiperiod
    model we will also have the possibility of considering intermediary trading,
    i.e. we can allow for portfolios which are rebalanced over time. This will give
    us much more degrees of freedom, and in the next section we will in fact study
    a complete multiperiod model.
I
                            THE MULTIPERZOD MODEL


    2.2 The Multiperiod Model
    2.2.1 Portfolios and Arbitrage
    The multiperiod binomial model is a discrete time model with the time index t
    running from t = 0 to t = T, where the horizon T is fixed. As before we have two
    underlying assets, a bond with price process Bt and a stock with price process St.
        We assume a constant deterministic short rate of interest R, which is inter-
    preted as the simple period rate. This means that the bond price dynamics are
    given by




    The dynamics of the stock price are given by




    here Zo,. . . ,    are assumed to be i.i.d. (independent and identically distrib
    uted) stochastic variables, taking only the two values u and d with probabilities

                                   P(zn = u ) = PU,
                                   P(Zn= d) = pd.
    I
       We can illustrate the stock dynamics by means of a tree, as in Fig. 2.3.
    Note that the tree is recombining in the sense that an "upn-move followed by a
    "down"-move gives the same result as a "down"-move followed by an "up7'-move.
       We now go on to define the concept of a dynamic portfolio strategy.
    Definition 2.13 A portfolio strategy is a stochastic process

                              {ht=(xt,yt);     t=l,...,T)

    such that ht is a function of So,S1,. . . , St-1. For a given portfolio strategy h we
    set ho = hl by convention. The value process corresponding to the portfolio h
    is defined by
                                  &h = xt(1 + R ) +ytSt.

       The interpretation of the formal definition is that xt is the amount of money
    which we invest in the bank at time t - 1 and keep until time t. We interpret
    yt as the number of shares that we buy at time t - 1 and keep until time t.
    We allow the portfolio strategy to be a contingent strategy, i.e. the portfolio we
    buy at t is allowed to depend on all information we have collected by observing
    the evolution of the stock price up to time t. We are, however, not allowed to
                            THE BINOMIAL MODEL




                            FIG. 2.3. Price dynamics

look into the future. The entity Kh above is of course the market value of the
portfolio (xt, yt) (which has been held since t - 1) at time t.
     The portfolios which primarily interest us are the self-financing portfolios,
i.e. portfolios without any exogenous infusion or withdrawal of money. In prac-
tical terms this means that in a self-financing portfolio strategy the accession
of a new asset has to be financed through the sale of some other asset. The
mathematical definition is as follows.
Definition 2.14 A portfolio strategy h is said to be self-financing i f the
following condition holds for all t = 0 , . . . ,T- 1



   The condition above is simply a budget equation. It says that, at each time t ,
the market value of the "old" portfolio (xt, yt) (which was created at t - 1)equals
                                                         ) , is formed at t (and
the purchase value of the new portfolio (xt+l, ~ t + ~which
            +
held until t 1).
   We can now define the multiperiod version of an arbitrage possibility.
Definition 2.15 A n arbitrage possibility is a self-financing portfolio h with
the properties
                                     THE MULTIPERIOD MODEL                                    17


               We immediately have the following necessary condition for absence of
            arbitrage.
            Lemma 2.16 If the model is free of arbitrage then the following conditions
            necessarily must hold.
!                                     d<(l+R)<u.                                 (2.8)
                The condition above is in fact also sufficient for absence of arbitrage, but this
I           fact is a little harder to show, and we will prove it later. In any case we assume
            that the condition holds.
6
            Assumption 2.2.1 Henceforth we assume that d < u, and that the condition
            (2.8) holds.
              As in the one period model we will have use for "martingale probabilities"
            which are defined and computed exactly as before.



I           Definition 2.17 The martingale probabilities q, and qd are defined as the
            probabilities for which the relation




            holds.
            Proposition 2.18 The martingale probabilities are given




            2.2.2 Contingent Claims
            We now give the formal definition of a contingent claim in the model.
            Definition 2.19 A contingent claim is a stochastic variable X of the form



        & where the contract function @ is some given real valued function.
                The interpretation is that the holder of the contract receives the stochastic
        +   amount X at time t = T. Notice that we are only considering claims that are
            "simple", in the sense that the value of the claim only depends on the value ST
            of the stock price at the final time T. It is also possible to consider stochastic
    I
            payoffs which depend on the entire path of the price process during the interval
            [O,T],but then the theory becomes a little more complicated, and in particular
    /       the event tree will become nonrecombining.
                            THE BINOMIAL MODEL


   Our main problem is that of finding a "reasonable" price process



for a given claim X, and as in the one period case we attack this problem by
means of replicating portfolios.
Definition 2.20 A given contingent claim X is said to be reachable if there
exists a self-financing portfolio h such that



with probability 1. In that case we say that the portfolio h is a hedging portfolio
or a replicating portfolio. If all claims can be replicated we say that the market
is (dynamically) complete.
   Again we have a natural pricing principle for reachable claims.
Pricing principle 2 If a claim X is reachable with replicating (seIf-financing)
portfolio h , then the only reasonable price process for X is given by



    Let us go through the argument in some detail. Suppose that X is reachable
using the self-financing portfolio h. Fix t and suppose that at time t we have
access to the amount   Fh.  Then we can invest this money in the portfolio h,
and since the portfolio is self-financing we can rebalance it over time without
any extra cost so as to have the stochastic value V$ at time T. By definition
V - = X with probability 1, so regardless of the stochastic movements of the
stock price process the value of our portfolio will, at time T, be equal to the
value of the claim X. Thus, from a financial point of view, the portfolio h and
the claim X are equivalent so they should fetch the same price.
    The "reasonableness" of the pricing formula above can be expressed more
formally as follows. The proof is left to the reader.
Proposition 2.21 Suppose that X is reachable using the portfolio h. Suppose           1
furthermore that, at some time t , it is possible to buy X at a price cheaper than
(or to sell it at a price higher than) yh.Then it is possible to make an arbitrage
profit.
                                                                                      1
   We now turn to the completeness of the model.
Proposition 2.22 The multiperiod binomial model is complete, i.e. every clairiz
can be replicated by a self-financing portfolio.
   It is possible, and not very hard, to give a formal proof of the proposition,
using mathematical induction. The formal proof will, however, look rather messy
                                                                                      I1
with lots of indices, so instead we prove the proposition for a concrete example,     1
                             THE MULTIPERIOD MODEL                                 19


    using a binomial tree. This should (hopefully) convey the idea of the proof, and
    the mathematically inclined reader is then invited to formalize the argument.
    Example 2.23 We set T = 3, So = 80, u = 1.5, d = 0.5, p, = 0.6, pd = 0.4
    and, for computational simplicity, R = 0.
        The dynamics of the stock price can now be illustrated using the binomial
    tree in Fig. 2.4, where in each node we have written the value of the stock price.
        We now consider a particular contingent claim, namely a European call on
    the underlying stock. The date of expiration of the option is T = 3, and the
    strike price is chosen to be K = 80. Formally this claim can be described as

                                 X = max [ST- K, 01.

    We will now show that this particular claim can be replicated, and it will be
    obvious from the argument that the result can be generalized to any binomial
    model and any claim.
        The idea is to use induction on the time variable and to work backwards in
    the tree from the leaves at t = T to the root at t = 0. We start by computing the
    price of the option at the date of expiration. This is easily done since obviously
    (why?) we must have, for any claim X , the relation



    This result is illustrated in Fig. 2.5, where the boxed numbers indicate the price
    of the claim. Just to check, we see that if S3 = 90, then we exercise the option,




i
                               FIG. 2.4. Price dynamics
                            THE BINOMIAL MODEL




pay 80 to obtain the stock, and then immediately sell the stock at market price
90, thus making a profit of 10.
    Our problem is thus that of replicating the boxed payoff structure at t = 3.
Imagine for a moment that we are at some node at t = 2, e.g. at the node
Sz = 180. What we then see in front of us, from this particular node, is a simple
one period binomial model, given in Fig. 2.6, and it now follows directly from
the one period theory that the payoff structure in Fig. 2.6 can indeed be replic-
ated from the node S2 = 180. We can in fact compute the cost of this replicating
portfolio by risk neutral valuation, and since the martingale probabilities for this
example are given by q, = qd = 0.5 the cost of the replicating portfolio is




In the same way we can consider all the other nodes at t = 2, and compute the
cost of the corresponding replicating portfolios. The result is the set of boxed
numbers at t = 2 in Fig. 2.7.
                             THE MULTIPERIOD MODEL                                   21




                                       FIG. 2.7.




                               <I       FIG. 2.8.




        What we have done by this procedure is to show that if we can find a self-
    financing portfolio which replicates the boxed payoff structure at t = 2, then it is
    in fact possible to replicate the original claim at t = 3. We have thus reduced the
    problem in the time variable, and from now on we simply reproduce the construc-
    tion above, but this time at t = 1. Take, for example, the node S1 = 40. From
    the point of view of this node we have a one period model given by Fig. 2.8, and
    by risk neutral valuation we can replicate the payoff structure using a portfolio,
    which at the node & = 40 will cost

                              1
                              - [5 -0.5+ 0 e0.51 = 2.5.
                               1+0

       In this manner we fill the nodes at t = 1 with boxed portfolio costs, and then
    we carry out the same construction again at t = 0. The result is given in Fig. 2.9.
I
       We have thus proved that it is in fact possible to replicate the European call
    option at an initial cost of 27.5. To check this let us now follow a possible price
    path forward through the tree.
                            THE BINOMIAL MODEL




    We start at t = 0, and since we want to reproduce the boxed claim (52.5, 2.5)
at t = 1, we can use Proposition 2.4 to compute the hedging portfolio as
X I = - 22.5, yl = 518. The reader should check that the cost of this portfolio
is exactly 27.5.
    Suppose that the price now moves to S1 = 120. Then our portfolio is worth



Since we now are facing the claim (100, 5) at t = 2 we can again use Proposi-
tion 2.4 to calculate the hedging portfolio as 2 2 = -42.5, y2 = 951120, and the
reader should again check that the cost of this portfolio equals the value of our
old portfolio, i.e. 52.5. Thus it is really possible to rebalance the portfolio in
a self-financing manner.
    We now assume that the price falls to S 2 = 60. Then our portfolio is worth



Facing the claim (10, 0) at t = 3 we use Proposition 2.4 to calculate the hedging
portfolio as 2 3 = -5, y3 = 116, and again the cost of this portfolio equals the
value of our old portfolio.
    Now the price rises to S3= 90, and we see that the value of our portfolio is
given by
                                   + +
                            -5 (1 0)        .90 = 10,
which is exactly equal to the value of the option at that node in the tree. In
Fig. 2.10 we have computed the hedging portfolio at each node.
   If we think a bit about the computational effort we see that all the value
computations, i.e. all the boxed values, have to be calculated off-line. Having
                         THE MULTIPERIOD MODEL




done this we have of course not only computed the arbitrage free price at t = 0 for
the claim, but also computed the arbitrage free price, at every node in the tree.
    The dynamic replicating portfolio does not have to be computed off-line. As
in the example above, it can be computed on-line as the price process evolves
over time. In this way we only have to compute the portfolio for those nodes
that we actually visit.
    We now go on to give the general binomial algorithm. In order to do this we
need to introduce some more notation to help us keep track of the price evolu-
tion. It is clear from the construction that the value of the price process at time
t can be written as

                          St = ~ u ~, dk =~O ,...,
                                             - ~ t,

where lc denotes the number of upmoves that have occurred. Thus each node in
the binomial tree can be represented by a pair (t, k) with k = 0,. . . , t.


Proposition 2.24 (Binomial algorithm) Consider a T-claim X = @(ST).
Then this claim can be replicated using a self-financing portfolio. If &(k) denotes
Me value of the portfolio at the node (t, k) then &(k) can be computed recursively
by the scheme
      whem z%e martingale pmbabilitzes q, and qd am given by                             I




     With the notation as above, the hedging portfolio is given by




Il   I n particular, the arbitrage free price of the claim at t = 0 is given by Vo(0).
I
        From the algorithm above it is also clear that we can obtain a risk neutral
     valuation formula.
     Proposition 2.25 The arbitrage free price at t = 0 of a T-claim X is given by




     where Q denotes the martingale measure, or more explicitly




     Proof The first formula follows directly from the algorithm above. If we let Y
     denote the number of upmoves in the tree we can write



     and now the second formula follows from the fact that Y has a binomial
     distribution.
        We end this section by proving absence of arbitrage.
     Proposition 2.26 The condition



     is a necessary and suficient condition for absence of arbitrage.
     Proof The necessity follows from the corresponding one period result. Assume
     that the condition is satisfied. We want to prove absence of arbitrage, so let
                                      NOTES                                     25



  us assume that h (a potential arbitrage portfolio) is a self-financing portfolio
  satisfying the conditions

                                 P(V$ 2 0) = 1,
                                  P(V$ > 0) > 0.

  &om these conditions, and from the risk neutral valuation formula, it follows
                                   1
                                        . E~ [v-]
                                                > 0,
                             h (1 + R)T
                          V ~=
  which shows that h is not an arbitrage portfolio.                              0


  2.3 Exercises
  Exercise 2.1

m'(b)(a)   Prove Proposition 2.6.
           Show, in the one period binomial model, that if lI(1;X) # X with
           probability 1, then you can make a riskless profit.
  Exercise 2.2 Prove Proposition 2.21.
  Exercise 2.3 Consider the multiperiod example in the text. Suppose that at
  time t = 1 the stock price has gone up to 120, and that the market price of the
  option turns out to be 50.0. Show explictly how you can make an arbitrage profit.
  Exercise 2.4 Prove Proposition 2.24, by using induction on the time horizon T.


  For the origins of the binomial model, see Cox, Ross and Rubinstein (1979), and
  Rendleman and Bartter (1979). The book by Cox and Rubinstein (1985) has
  become a standard reference.
              I




                                           3
             A MORE GENERAL ONE PERIOD MODEL

In this chapter, we will investigate absence of arbitrage and compf&eness in
slightly more general terms than in the binomial model. To keep things simple we
will be content with a one period model, but the financial market and the under-
lying sample space will be more general than for the binomial model. The,point
of this investigation of a simple case is that it highlights some very basic and
important ideas, and our main results will in fact be valid for much more general
models.

3.1 The Model




                                           "
We consider a financial market with N different financial assets. These assets
could in principle be almost anything, like bonds, stocks, options or whatever
financial instrument that is traded on a liquid market. The market only exists
at the two points in time t = 0 and t = 1, and the price per unit of asset No. i
at time t will be denoted by St. We thus have a price vector process St, t = 0 , l
and we will view the price vector as a column vector, i.e.


                                  st = [   SF
                                                  ]




The randomness in the system is modeled by assuming that we hpve
                                                                    *=
sample space R = { w l ,. . . ,W M )and that the probabilities P ( w 4 , 1
are all strictly positive. The price vector So is assumed to be deterministic and
known to us, but the price vector at time t = 1 depends upon the outcome
w E R, and S:(wj) denotes the price per unit of asset No. i at time t = 1 if wj
has occurred.
   We may therefore define the matrix D by

                           S? ( ~ 1 ) s?( ~ 2 ) ' '   s:( W M )

                  D=   I   s?(wl)    sf(-)      '''   S?(WM)
                                  ABSENCE OF ARBITRAGE                               27


     We can also write D as



     where dl,. . . , dM are the columns of D.

     3.2 Absence of Arbitrage
     We now define a portfolio as an N-dimensional row vector h = [hl,.. . , h N]
     with the interpretation that hi is the number of units of asset No. i that we buy
     at time t = 0 and keep until time t = 1.
         Since we are buying the assets with deterministic prices at time t = 0 and
     selling them at time t = 1 at stochastic prices, the value process of our portfolio
     will be a stochastic process   v,~defined by




     .   ,
        There are various (more or less equivalent) variations of the concept of an
     arbitrage portfolio, and in the present setting the following will do nicely.
     Definition 3.1 The portfolio h is an arbitrage portfolio i f it satisfies the
     conditions

                                  v: < 0,
                                  V: 2 0,   with probability 1.

             With obvious notation we can write this as




             We now go on to investigate when the market model above is free of arbitr-
!I age possibilities, and the main technical tool for this investigation is the
     Farkas Lemma.
i'
     Lemma 3.2 (Farkas' Lemma) Suppose that do, dl,. . . , dM are column vec-
:    tors i n R N . Then exactly one of the two following problems possesses a solution:
     Problem 1: Find nonnegative numbers z l , . . . , ZM such that
    28                 A MORE GENERA'LONE PERIOD' MODEL



1   Problem 2: Find a row vector h E R~ such that

                                           hdo < 05
                                   hdj20,
                                               . jz= l ,...,M.
                                                     h , L   b'
                                                                         8 A



    Proof Let K be the set of all nonnegative linear combinations of dl,. . ., d ~ .
I
    It is easy to see that K is a convex cone containing the origin. Exactlfr*'oneof
I
    the following cases can hold:
i
           The vector 4 belongs to K. This means that Problem 1 above has
           a solution.
           The vector 4 does not belong to K. Then, by the separation theorem for
           contex sets, there exists a hyperplahe H such that do is strictly on one
           side of H whereas K is on the other side. Letting h be defined as a normal
           vector to H pointing in the direction where K lies, this means that Problem
           2 has a solution.                         - .


         We can now formulate our first result.
    Proposition 3.3 The market is arbitrage free if and only if there &t non-
    negative numbers 21,. . ., ZM such that the folloun'ng vector equality holds:

                                           M
                                    & = Czjfi(wj).
                                          j=1

    On component form this wads as             A .




                                   N
                            S, = X ~ S ~ ( W , ) :i*.        1, ...,N.


    Proof From the definition it follows that the market is arbitrage free if and
    only if the following system of ineq~     oes not possess a solution h E R ~ .




    where d l ,. . . , dM are the columns of the a r k d &b~ve.~fio'mthe Farkas Lemma
    (with 4 = So) we thus infer the e                of nonnegative numbers zl,.. ., z~
    such that                                                                    l   s , ,

                                               M
        I



                                          ABSENCE OF ARBITRAGE


                    We can now give an economic interpretation of this result by defining the
                 real nonnegative numbers ql, . . . , q~ by




                 /r
                    In this way we may interpret 91,. . . , q~ as a probability distribution on S1
                 by setting Q(w,) = qi, and we can reformulate our previous result.
                 Proposition 3.4 The market is arbitrage free if and only i f there exists a
                 probability dzstribution Q on 0 and a real constant P such that



                 Such a measure, or probability distribution Q is called a martingale measure,
                 or a risk neutral distribution, or a risk adjusted distribution.
                 '
                   A natural question is now whether there exists a natural economic inteiprkt-
               ation of the factor p above. In order to obtain such an interpretation, we now
               make the additional assumption that there exists a risk free investment altern-
               ative among the basic assets S 1 ,. . . , SN, and we assume that this is in fact asset
             1 No. 1. By a risk free investment we simply mean that the price at time t = 1 is
               deterministic, and by scaling we may thus assume that S: (wj) = 1, j = 1,.. ., M.
               In other words, S1 is a zero coupon bond with principal equal to one.
                   The first component of the equality (3.3) then becomes

                                                   s,'=p-1,
i                and we may thus write
                                                   p-'-    1
    I   '                                                 1 R'+
1 F ! where  r is the risk free interest rate. Plugging this into the general formula
i     (3.3) we have the following result, which in its far reaching generalizations is
I
            F known as "the first fundamental theorem of mathematical finance".
                 Proposition 3.5 (First Fundamental Theorem) Assume that there exists a
                 risk free asset, and denote the corresponding risk free interest rate bg R. Then
             1   the market is arbitrage free i f and only i f there exists a measure Q such that

                                                          1
                                              So = i = - q j , ~ ~ [ s ~ ] .                   (3.4)

                    The economic interpretation is thus that today's asset prices are obtained
                 as the expected value (under Q) of tomorrow's asset prices, discounted w i t h
30                 A MORE GENERAL ONE PERIOD MODEL


the risk free rateit The formula is also referred to as a 'lisk-neutral" pricing
formula. The terminology "martingale measure" stems from the fact that, for
every i = 1,..., N the process



is a sc~calledmartingale under the measure Q. We will come back later to
martingales in much more detail, but in the present setting it just means that




3.3 Martingale Pricing
In this section, we will study how to price financial derivatives or, in tech-
nical terms contingent claims. We take the previously studied market model
as given and we assume for simplicity that there exists a risk free asset. In
order to highlight the, role of the risk free asset, we denote its price process
by Bt and we may thus regard Bt as a bank account,$where our money (or
our debts) grow at the risk free rate. (In the previous section we thus had
B = S1.)                                                      I




Definition 3.6 A contingent claim is any random variable X , defined on 0.

    The interpretation is that a contingent claim X represents2a stochastic
amount of money which we will obtain at time t = 1. Our main problem is
now to determine a "reasonable" price TI(@X), at time t = 0 for a given claim
X , and in order to do this we must give a more precise meaning to the word
"reasonable" above.
    More precisely we would like to price the claim X consistently with the
underlying a priori given assets S1,.. .,S N , or put in other words, we would like
to price the claim X in such a way that there are no arbitrage opportunities
on the extended market consisting of TI, S 1 ,. . . , SN. This problem is, however,
easily solved. The extended market is arbitrage free if and only if there exists
some martingale measure Q such that

                                   1
                         n(o;x)= -EQ
                                 l+R
                                               [n(i;x)],
and


Thus, in particular, Q is a martingale measure for the sunderlying assets. At
time tb = 1 the value of the claim X is known, so in order to avoid arbitrage
                               COMPLETENESS                                     31



we must have n(1; X) = X. Plugging this into the equation above we have the
following result.
Proposition 3.7 Consider a given claim X . In onler to avoid arbitrage, X
must then be priced acconling to the formula




whew Q is a martingale measure for the underlying market.
   We see that this formula extends the corresponding risk neutral pricing
formula (3.4) for the underlying assets.
   The pricing formula (3.5) looks very nice, but there is a problem: if there exist
several different martingale measures then we will have several possible arbit-
rage free prices for a given claim X. This has to do with the (possible lack of)
completeness of the market.

3.4 Completeness
In this section, we will discuss how it is possible to generate payment streams at
t = 1 by forming portfolios in the underlying.
                                                        .
Assumption 3.4.1 W e assume that the market S 1 ,. . , S N is arbitrage free and
that there exists a risk free asset.
Definition 3.8 Consider a contingent claim X . If there exists a portfolio h,
based on the underlying assets, such that

                          !V = X,     with probability 1.                      (3.6)




then we say that X is replicated, or hedged by h. Such a portfolio h is called
a replicating, or hedging portfolio. If every contingent claim can be replicated, we
say that the market is complete.
    It is easy to characterize completeness in our market, and we have the
following result.
Proposition 3.9 The market is complete i f and only i f the rows of the matrix
D span R ~ i.e., if and only if D has rank M .
Proof For any portfolio h, we view the random variable V: as a row vector
       . . . , v ~ ( w ~and
[v,~(wI),                ) ] with this notation we have

                                    V: = hD.
32                A MORE GENERAL ONE PERIOD MODEL


The market is thm complete if and only if, for every random variable X , (viewed
as a row vector in RM) the equation



has a solution. But hD is exactly a linear combination of the rows of D with the
components of h as coefficients.

    The concept of a replicating portfolio gives rise to an alternative way of
pricing contingent claims. Assume namely that the claim X can be replicated by
the portfolio h. Then there is an obvious candidate as the price (at time t = 0)
for X , namely the market price, at t = 0, of the replicating portfolio. We thus
propose the natural pricing f o d a



Here there is a possibility that may get us into trouble. There may very well
exist two different hedging portfolios f and g, and it could in principle happen
that Vt # Vt. It is, however, easy to see that this would lead to an arbitrage
possibility (how?) so we may disregard that possibility.
   The pricing formula (3.8) can also be written in another way, so let us assume
that h replicates X. Then, by definition, we have



and from (3.8) we obtain


However, on our arbitrage free market we also have the pricing formula (3.4)

                                      1
                              so=i;4r?i~Q[~x].                            (3.11)
                       ,,i

Combining this with (3.9)-(3.10) we obtain the pricing formula




which is exactly the formula given by, Proposition 3.7. Thus the two pricing
approaches coincide on the set of hedgable claims.
   In Proposition 3.9 we obtained one characterization of complete markets.
There is another characterization which connects completeness to martingale
measures. This result, which we give below in our simple setting, is known as
"the second fundamental theorem of mathematical finance".
                                              COMPLETENESS


        Proposition 3.10 (Second Fundamental Theorem) Assume that the model
        is arbitrage free. Then the market is complete i f and only i f the martingale
1       measure is unique.
        Proof From Proposition 3.9 we know that the market is complete if and only
        if the rows of D span the whole of RM, i.e. if and only if

                                                   Im[D*] = R",
                                                             I




        where we view the transpose matrix D* as a mapping from R N to RM. On the
        other hand, from Proposition 3.3 and the assumption of absence of arbitrage we
        know that there exists a solution (even a nonnegative one) to the equation

                                                       so= Dz.
        This solution is unique if and only if the kernel (null spack) of'D is!trivial, i:e.
        if and only if
                                          Ker [Dl = 0.
        We now recall the following well known duality result:
    v                                       (I~[D*J)?, Ker[D].

        Thus Ker[D]= 0 if and only if Im[D*] = RM, i.e. the market is complete if and
        only if the martingale measure is unique. '   .           -$             ;

                 We may now summarize our findings.
        Proposition 3.11 The following hold:
                 ' a Themarket is arbitmge free i f and only i f there exists a martingale
             1     measure Q.
              1 .a7The market is complete i f and only i f the martingale measure is unique.
              ' For any claim X , the only prices which are consistent with absence of
                   arbitmge are of the form
                                                       .-
I rjv,
I            ti                                1   ,




                                           II(0; X) =
                                                         ' 1
                                                                 -
                                                                   97

                                                               E~ [XI ,
                                                       l + R > *,
                                                        c   ?.
                                                                       L ,




                    where Q is a martingale measure for the underlying market.
                                                                                        (3.13)


             1 a If the market is incomplete, then different choices of martingale measures
             I      Q i n the formula (3.13) will generically give rise to different prices.   ., .
                 a If X   is replicable then, even i n an incomplete market, the price i n (3.13)
I
             ,      will not depend upon the particular choice of martingale measure Q. If X
        4, .        is replicable, then
                                                             1
                                                   v,"-.---.-EQ[Aq,
        PC                                          l+R
        .           for d l martingale measures Q and for all replicating portfolios h.           r




                                                                                  -    p   p
34                A MORE GENERALSONEPEFlIOD MODEL


3.5 Stochastic Discount Factors
In the previous sections we have seen that we'can price finmcial derivatives by
using martingale measures and the formula




In some applications of the theory (in particular in asset pricing) it is common
to write this expected value directly under the objective probability measure P
instead of under Q.
    Recalling the notation pi = P(w,) and qi = Q(wi), i = 1,..., M, and the
assumption that pi > 0 for i = 1,.. . , M, we may define a new random
variable on R.
Definition 3.12 The random variable L on R is defined by




   Thus L gives us the likelihood mtio between the measures P and Q, and
in more general situations it is known as the Radon-Nikodym derivative of Q
w.r.t. P.
Definition 3.13 Assume absence of arbitrage, and fi a martingale measure Q .
With notations as above, the stochastic discount factor (or "state price
deflator") is the mndom variable A on 0 defined by




    We can now express our arbitrage free pricing formulas in a slightly
different way.
Proposition 3.14 The arbitrage free price of any claim X is given by the
formula
                        n(o;x)= E ~ [ A . x ] ,                   (3.15)
whem A is a stochastic discount factor,
                                                                           h

Proof Exercise for the reader:
                                "   1,'




    We see that there is a on+twone correspondence between stochastic discount
factors and martingale measures, and it is largely a matter of taste if you want
to work with A or with Q. The advantage of working with A is that you form-
ally stay with the objective measure P. The advantage with working under Q is
that the decomposition of A in (3.14) gives us important structural information,
                                                    EXERCISES                                   35


    tI i \ and in more complicated situations there exists a deep theory (see "Girsanov
    I F     z ,
                  transformations" later in the text) which allows us to have complete control over
    1         " the class of martingale measures.

            '1       FIom an economic point of view, the stochastic discount factor is precisely an
            ri Arrow-Debreu state price system, which gives the price A(w,) to the primitive
               claim Xi which pays 1 if wi occurs, and zero otherwise.

                  3.6 Exercises
                  Exercise 3.1 Prove that Q in Proposition 3.7 is a martingale measure also for
                  the price process n(t;X), i.e. show that
        i



                  where B is the risk free asset.
                  Exercise 3.2 Prove the last item in Proposition 3.11.
I
(                 Exercise 3.3 Prove Proposition 3.14.
                           STOCHASTIC INTEGRALS

4.1 Introduction
The purpose of this book is to study asset pricing on financial markets in
continuous time. We thus want to model asset prices as continuous time
stochastic processes, and the most complete and elegant theory is obtained if
we use diffusion processes and stochastic differential equations as our
building blocks. What, then, is a diffusion?
    Loosely speaking we say that a stochastic process X is a diffusion if its
local dynamics can be approximated by a stochastic difference equation of the
following type:

                X(t   + At) - X ( t ) = p (t,X ( t ) )At + u (t,X ( t ) )Z ( t ) .   (4.1)

Here Z ( t ) is a normally distributed disturbance term which is independent of
everything which has happened up to time t , while p and cr are given determ-
inistic functions. The intuitive content of (4.1) is that, over the time interval
   +
[t,t At],the X-process is driven by two separate terms.
       A locally deterministic velocity p (t,X ( t ) ) .
       A Gaussian disturbance term, amplified by the factor cr ( t , X ( t ) ) .
    The function p is called the (local) drift term of the process, whereas a is
called the diffusion term. In order to model the Gaussian disturbance terms we
need the concept of a Wiener process.
Definition 4.1 A stochastic process W is called a Wiener process if the
following conditions hold:
   1. W ( 0 )= 0.
   2. The process W has independent increments, i.e. if r < s I t < u then
      W ( u )- W ( t )and W ( s )- W ( r ) are independent stochastic variables.
   3. For s < t the stochastic variable W ( t ) -W ( s )has the Gaussian distribution
      N [0,   -1.
   4. W has continuous trajectories.
Remark 4.1.1 Note that we use a somewhat old fashioned notation, where
N [p,cr] denotes a Gaussian distribution with expected value ,u and standard
deviation a.
   In Fig. 4.1 a computer simulated Wiener trajectory is shown.
                                                            - ----




1                                           INTRODUCTION




                                                                                           t
             0     0.2       0.4      0.6    0.8     1     1.2     1.4'   1.6   1.8    2

                                   F I G . 4.1. A Wiener trajectory

       We may now use a Wiener process in order to write (4.1)as

                 X(t   + At) - X ( t ) = p ( t ,X ( t ) )At + a ( t ,X ( t ) )AW(t),           (4.2)

    where AW(t) is defined by

                   i
                                   AW(t) = W ( t    + At) - W ( t ) .
    Let us now try to make (4.2)a bit more precise. It is then tempting to divide
    the equation by At and let At tend to zero. Formally, we would obtain

                                 t )P ( t ,X ( t ) )+ a ( t ,X ( t ) )
                             ~ ( =                                                             (4.3)
                                           X ( O )= a,                                         (4.4)



                                                    dW
                                              u(t)= -
                                                     dt
    is the formal time derivative of the Wiener process W .
        If u were an ordinary (and well defined) process we would now in principle
    be able to solve (4.3) as a standard ordinary differential equation (ODE) for
38                            STOCHASTIC INTEGRALS


each v-trajectory. However, it can be shown that with probability 1 a Wiener
trajectory is nowhere differentiable (cf. Fig. 4.1), so the process v cannot even
be defined. Thus this is a dead end.
    Another possibility of making eqn (4.2) more precise is to let At tend to
zero without first dividing the equation by At. Formally we will then obtain the
exwession
                                              +
                    dX(t) = p (t, X(t)) dt u (t, X(t)) dW(t),
                    X(0) = a,
and it is now natural to interpret (4.5) as a shorthand version of the following
integral equation

              ~ ( t=) a   +   1
                              t
                                  p (s,X(s)) ds   +   1
                                                      t
                                                          0 (9, X(s)) dW(s).   (4.6)

In eqn (4.6) we may interpret the ds-integral as an ordinary Riemann integral.
The natural interpretation of the dW-integral is to view it as a Riemann-Stieltjes
integral for each W-trajectory, but unfortunately this is not possible since one
can show that the W-trajectories are of locally unbounded variation. Thus the
stochastic dW-integral cannot be defined in a naive way.
    As long as we insist on giving a precise meaning to eqn (4.2) for each
W-trajectory separately, we thus seem to be in a hopeless situation. If,
however, we relax our demand that the dW-integral in eqn (4.6) should be
defined trajectorywise we can still proceed. It is in fact possible to give a global
(L2-)definition of integrals of the form




for a large class of processes g. This new integral concept-the so called It6
integral-will then give rise to a very powerful type of stochastic differential
calculus-the It6 calculus. Our program for the future thus consists of the
following steps:
     1. Define integrals of the type




     2. Develop the corresponding differential calculus.
     3. Analyze stochastic differential equations of the type (4.5) using the
        stochastic calculus above.

4.2 Information
Let X be any given stochastic process. In the sequel it will be important to
define "the information generated by X" as time goes by. To do this in a rigorous
                                                INFORMATION                                       39


! fashion is outside the main scope of this book, but for most practical purposes
  the following heuristic definitions will do nicely. See the appendices for a precise
  treatment.
            Definition 4.2 The symbol 3: denotes "the information generated by X on the
            interval [0,t]", or alternatively "what has happened to X over the interval [0,t]".
            If, based upon observations of the trajectory { X ( s ) ; 0 5 s 5 t ) , it is possible to
E
:           decide whether a given event A has occurred or not, then we write this as



            or say that "A is 3: -measurable".
                If the value of a given stochastic variable Z can be completely determined
            given observations of the trajectory { X ( s ) ; 0 5 s 5 t ) , then we also write

                                                    z E .3:
        a
                  If Y is a stochastic process such that we have

                                                  Y (t)E 3
                                                         :

            for all t 2 0 then we say that Y is adapted to the filtration {F:),,~.
                                                                                -
               The above definition is only intended to have an intuitive content, since
            a precise definition would take us into the realm of abstract measure theory.
            Nevertheless it is usually extremely simple to use the definition, and we now
            give some fairly typical examples.
                                                             < 3.14, for all s 5 9) then we have
                  1. If we define the event A by A = { X ( s )
    t                AE3
                       .:
             e t2. For the event A = { X ( 1 0 ) > 8 ) we have A E 35. Note, however, that we
                     do not have A E 3$,since it is impossible to decide if A has occurred or
    B ik '           not on the basis of having observed the X-trajectory only over the interval
             "\      [0,9].
:                 3. For the stochastic variable 2, defined by

A
    I

                                                   z=   1     5
                                                                  X(s)ds,


I
                     we have Z E F:
                                  .
6                 4. If W is a Wiener process and if the process X is defined by

                                                   X (t)= sup W ( s ),
                                                              sst


                     then X is adapted to the W-filtration.
                             STOCHASTIC INTEGRALS


      5. With W as above, but with X defined as

                                     X(t) = sup W (s),
                                           s<t+l

        X is not adapted (to the W-filtration).

4.3   Stochastic Integrals
We now turn to the construction of the stochastic integral. For that purpose we
consider as given a Wiener process W, and another stochastic process g. In order
to guarantee the existence of the stochastic integral we have to impose some kind
of integrability conditions on g, and the class J2turns out to be natural.
Definition 4.3
        (i) We say that the process g belongs to the class E 2 [a, b] if the following
            conditions are satisfied.
                   J: E [(s)]~ds~< m.
                    The process g is adapted to the Fy -filtration.
      (22) We say that the process g belongs to the class E2 if g E E2 [O, t] for
            all t > 0.
   Our object is now to define the stochastic integral J
                                                       : g(s) dW(s), for a process
g E E 2 [a, b], and this is carried out in two steps.
   Suppose to begin with that the process g E E2 [a, b] is simple, i.e. that there
exist deterministic points in time a = to < tl <         < tn = b, such that g is
constant on each subinterval. In other words we assume that g(s) = g(tk) for
s E Itk,tk+l). Then we define the stochastic integral by the obvious formula




Remark 4.3.1 Note that in the definition of the stochastic integral we take
so called forward increments of the Wiener process. More specifically, in the
generic term g(tk) [W(tk+l)- W(tk)]of the sum the process g is evaluated at
the left end tk of the interval [tk,tk+l]over which we take the W-increment.
This is essential to the following theory both from a mathematical and (as we
shall see later) from an economical point of view.
   For a general process g E E 2 [a, b] which is not simple we may schematically
proceed as follows:
      1. Approximate g with a sequence of simple processes gn such that
                                  STOCHASTIC INTEGRALS                                  41


           2. For each n the integral J: gn(s) dW(s) is a well-defined stochastic variable
              Z,, and it is possible to prove that there exists a stochastic variable Z
              such that Zn + 2 (in L ~ as ) n + oo.
           3. We now define the stochastic integral by

                                                 = lim        gn(s)
                                                  ,,-m   Ja

             The most important properties of the stochastic integral are given by the
         following proposition. In particular we will use the property (4.12) over and
         over again.

         Proposition 4.4 Let g be a process satisfying the conditions




                               g is adapted to the Fy-filtmtion.                    (4.11)
    I Then the following relations hold:



                                                                      ds.




I        Proof A full proof is outside the scope of this book, but the general strategy
         is to start by proving all the assertions above in the case when g is simple. This
         is fairly easily done, and then it "only" remains to go to the limit in the sense
         of (4.9). We illustrate the technique by proving (4.12) in the case of a simple g.
         We obtain
                                      1       rn-1                          1




    il
                                           k=O
         Since g is adapted, the value g(tk) only depends on the behavior of the Wiener
         process on the interval [0, tk]. Now, by definition W has independent increments,
         so [W(tk+l)- W(tk)] (which is a forward increment) is independent of g(tk).
                               STOCHASTIC INTEGRALS




    Remark 4.3.2 It is possible to define the stochastic integral for a process g
    satisfying only the weak condition




    For such a general g we have no guarantee that the properties (4.12) and (4.13)
    hold. Property (4.14) is, however, still valid.


I   4.4 Martingales
    The theory of stochastic integration is intimately connected to the theory of mar-
    tingales, and the modern theory of financial derivatives is in fact based mainly on
    martingale theory. Martingale theory, however, requires some basic knowledge
    of abstract measure theory, and a formal treatment is thus outside the scope of
    the more elementary parts of this book.
        Because of its great importance for the field, however, it would be unreason-
    able to pass over this important topic entirely, and the object of this section is
    to (informally) introduce the martingale concept. The more advanced reader is
    referred to the appendices for details.
        Let us therefore consider a given filtration ("flow of information") {Ft}t20,
    where, as before, the reader can think of Ft as the information generated by all
    observed events up to time t. For any stochastic variable Y we now let the symbol



    denote the "expected value of Y , given the information available at time t".
    A precise definition of this object requires measure theory, so we have to be con-
    tent with this informal description. Note that for a fixed t, the object E [YlFt]
    is a stochastic variable. If, for example, the filtration is generated by a single
    observed process X , then the information available at time t will of course depend
    upon the behavior of X over the interval [0, t], so the conditional expectation
    E [YlFt] will in this case be a function of all past X-values {X(s): s 5 t). We
    will need the following two rules of calculation.
    Proposition 4.5
          lf Y and Z are stochastic variables, and Z is Ft-measurable, then
                                     Y ( F t ]= Z.E [ Y ( & ] .
                                 E [Z.
I                                            MARTINGALES                                 43


              If Y is a stochastic variable, and if s < t , then



  The first of these results should be obvious: in the expected value E [ Z . Y I Ft]we
1 condition  upon all information available time t. If now Z E Ft,this means that,
        given the information Ft,we know exactly the value of Z, so in the conditional
        expectation Z can be treated as a constant, and thus it can be taken outside the
        expectation. The second result is called the "law of iterated expectations", and
        it is basically a version of the law of total probability.
             We can now define the martingale concept.
        Definition 4.6 A stochastic process X is called an (Ft)-martingale i f the
        following conditions hold:
               X is adapted to the filtration {3t)t20.
               For all t
                                             E [ l X ( t ) I l < 00.
               For all s and t with s 5 t the following relation holds:



        A process satisfying, for all s and t with s 5 t , the inequality



        is called a supermartingale, and a process satisfying



        is called a submartingale.
           The first condition says that we can observe the value X ( t ) at time t, and the
        second condition is just a technical condition. The really important condition is
        the third one, which says that the expectation of a future value of X, given the
        information available today, equals today's observed value of X. Another way of
        putting this is to say that a martingale has no systematic drift.
           It is possible to prove the following extension of Proposition 4.4.
        Proposition 4.7 For any process g E E2 [s, t] the following hold:



    i   p-
             As a corollary we obtain the following important fact.
    1
44                          STOCHASTIC INTEGRALS


Corollary 4.8 For any process g E L2,the process X , defined by




is an (3tw)-martingale. In other words, modulo an integrability condition, every
stochastic integral is a martingale.

Proof Fix s and t with s < t . We have




The integral in the first expectation is, by Proposition 4.4, measurable w.r.t.
37, so by Proposition 4.5 we have
                                                                                    I
                      [I'                 I 3rI I'
                           g ( r )d W ( r )   =      g(7) d W ( r ) ,


Ftorn Proposition 4.4 we also see that E J~~                 1
                                           g ( r )d W ( r ) 3 ~= 0,
                                                                 ] so we obtain     I

     We have in fact the following stronger (and very useful) result.

Lemma 4.9 Within the framework above, and assuming enough integrability,
a stochastic process X (having a stochastic differential) is a martingale i f and
only if the stochastic differential has the form



i.e. X has no dt-term.

Proof We have already seen that if dX has no dt-term then X is a martingale.
The reverse implication is much harder to prove, and the reader is referred to
the literature cited in the notes below.                                    O 1
                    STOCHASTIC CALCULUS AND THE ITO FORMULA                             45


        4.5 Stochastic Calculus and the It6 Formula
        Let X be a stochastic process and suppose that there exists a real number xo
        and two adapted processes p and u such that the following relation holds for
        all t 2 0.



        where a is some given real number. As usual W is a Wiener process. To use a less
        cumbersome notation we will often write eqn (4.16) in the following form:




      In this case we say that X has a stochastic differential given by (4.17) with
      an initial condition given by (4.18). Note that the formal string dX(t) =
              +
      p ( t )dt u(t) dW(t) has no independent meaning. It is simply a shorthand ver-
      sion of the expression (4.16) above. From an intuitive point of view the stochastic
      differential is, however, a much more natural object to consider than the cor-
      responding integral expression. This is because the stochastic differential gives
      us the "infinitesimal dynamics" of the X-process, and as we have seen in Sec-
      tion 4.1, both the drift term p(s) and the diffusion term u(s) have a natural
      intuitive interpretation.
    k      Let us assume that X indeed has the stochastic differential above. Loosely
      speaking we thus see that the infinitesimal increment dX(t) consists of a loc-
      ally deterministic drift term p(t) dt plus an additive Gaussian noise term
      u(t) dW(t). Assume furthermore that we are given a C1'2-function



        and let us now define a new process Z by
I


P   1
                                       Z(t) = f (t, X(t)).

    I
       We may now ask what the local dynamics of the Z-process look like, and at first it
       seems fairly obvious that, except for the case when f is linear in x, Z will not have
       a stochastic differential. Consider, for example, a discrete time example where
       X satisfies a stochastic differenceequation with additive Gaussian noise in each
       step, and suppose that f (t, x) = e x. Then it is clear that Z will not be driven by
    ;- additive Gaussian noise-the noise will in fact be multiplicative and log-normal.
    i It is therefore extremely surprising that for continuous time models the stochastic
                                                                                               -
       differential structure with a drift term plus additive Gaussian noise will in fact be
       preserved even under nonlinear transformations. Thus the process Z will have
       a stochastic differential, and the form of dZ is given explicitly by the famous
t
                               STOCHASTIC INTEGRALS


    It6 formula below. Before turning to the It6 formula we have to take a closer
    look at some rather fine properties of the trajectories of the Wiener process.
        As we saw earlier the Wiener process is defined by a number of very simple
    probabilistic properties' It is therefore natural to assume that a typical Wiener
    trajectory is a fairly simple object, but this is not at all the case. On the
    contrary-one can show that, with probability 1, the Wiener trajectory will
    be a continuous function of time (see the definition above) which is nondifferen-
    tiable at every point. Thus a typical trajectory is a continuous curve consisting
    entirely of corners and it is of course quite impossible to draw a figure of such
    an object (it is in fact fairly hard to prove that such a curve actually exists).
    This lack of smoothness gives rise to an odd property of the quadratic variation
    of the Wiener trajectory, and since the entire theory to follow depends on this
    particular property we now take some time to study the Wiener increments a bit
    closer.
        Let us therefore fix two points in time, s and t with s < t, and let us use the
    handy notation




    Using well-known properties of the normal distribution it is fairly easy to obtain
    the following results, which we will use frequently

                                      E [AW] = 0,
                                   E[(Aw)~]= At,
                                     Var[AW] = At,                               (4.21)


    We see that the squared Wiener increment (Aw(t)12 has an expected value
    which equals the time increment At. The really important fact, however, is
    that, according to (4.22), the variance of [ A W ( ~ )is] negligible
                                                              ~          compared to its
    expected value. In other words, as At tends to zero [Aw(t)12will of course also
    tend to zero, but the variance will approach zero much faster than the expected
    value. Thus [Aw(t)12 will look more and more "deterministic" and we are led
    to believe that in the limit we have the purely formal equality

                                      [dw(t)12= dt.                              (4.23)

    The reasoning above is purely heuristic. It requires a lot of hard work to turn the
I   relation (4.23) into a mathematically precise statement, and it is of course even
    harder to prove it. We will not attempt either a precise formulation or a precise
    proof. In order to give the reader a flavor of the full theory we will, however,
    give another argument for the relation (4.23).
                STOCHASTIC CALCULUS AND THE ITO FORMULA                                 47



I equally
     Let us therefore fix a point in time t and subdivide the interval [0,t] into n
          large subintervals of the form [k;, (k + I):], where k = 0,1,. . . , n - 1.
   Given this subdivision, we now define the quadratic variation of the Wiener
                                      4




   and our goal is to see what happens to Sn as the subdivision becomes finer, i.e.
   as n -+ m. We immediately see that




                           =   C [ii- ( i -l)?]
                               n

                                             n
                                                =t.
                               i=l
 1 Using the fact that W has independent increments we also have



   Thus we see that E [Sn]= t whereas Var[S,] -t 0 as n -+ oo. In other words, as
   n -+ m we see that S, tends to the deterministic limit t. This motivates us
      write


      equivalently,
                                          [dw12= dt.                                 (4.26)
      Note again that all the reasoning above has been purely motivational. In this
   text we will have to be content with accepting (4.26) as a dogmatic truth, and
   now we can give the main result in the theory of stochastic calculus-the It6
Fj formula.
   Theorem 4.10 (Itb's formula) Assume that the process X has a stochastic
   diferential given by
 1                                             +
                               dX (t)= p(4) d t u(t)dW(t),                           (4.27)
   where p and a are adapted processes, and let f be a C192-function. Define the
   process Z by Z ( t ) = f (t,X ( t ) ) . Then Z has a stochastic differential given by
48                           STOCHASTIC INTEGMLS


R e m a r k 4.5.1 In the statement of the theorem above we have, for readability
reasons, suppressed a lot of variables. The term p df ldx, for example, is
shorthand notation for
                                    '(t)
                                           aaz
                                             f
                                               (t' X(t))
and correspondingly fqr the other terms.
Proof A full formal proof is outside the scope of this text, so we only give
a heuristic proof (see Remark 4.5.2). If we make a Taylor expansion including
second order terms we obtain

     d f = - daf    af- - ( d X ) 1d f
                                   2                     2
               t+-dX+                         2
                                                  + -1d
                                                     - ( d ft ) 2 + a 2 f d t d X .           (4.29) 1
              at     ax           2 ax2              2 at2                atax
By definition we have

                            dX(t) = p(t) d t      + o(t) dW(t),
so, at least formally, we obtain

                   (dx12 = p2 (dt12    + 2pu (dt)(dW) + u2 (dw12.
The term containing (dt)2 above is negligible compared to the dt-term in (4.27),
and it can also be shown that the (dt)(dW)-term is negligible compared to the
dt-term. Furthermore we have ( d ~=)dt ~from (4.23), and plugging in all this
into the Taylor expansion (4.29) gives us the result.
    It may be hard to remember the It6 formula, so for practical purposes it is
often easier to copy our "proof" above and make a second order Taylor expansion.
Proposition 4.11 (ItB's formula) With assumptions as in Theorem 4.10, df
is given by
                                                 2
                      df = -ddf t + -d fd ~ + --
                                              1a f (dx12           (4.30)
                            at      dx        2 dx 2
whew. we use the following formal multiplication table.

                                       (dt12= 0,
                                       dt . dW = 0,
                                       (dw12 = dt.
Remark 4.5.2 As we have pointed out, the "proof" of the It6 formula above
does not at all constitute a formal proof. We end this section by giving an outline
of the full proof. What we have to prove is that, for all t, the following relation
holds with probability one:



                                                                                              (4.31)


                                                                                      Bibliothek
                                                                                       Bielefeld
                          STOCHASTIC CALCULUS AND THE ITO FORMULA                                 49


          We therefore divide the interval [0, t] as 0 = to < tl < .           < t, = t into n equal
     j    subintervals. Then we have
                                               n-1
                 f (t, X(t)) - f (0, X(0)) = C f (tk+l, ~ ( t * + 1 )-) f (tk, X(tk)) .        (4.32)
                                                k=O
           Using Taylor's formula we obtain, with subscripts denoting partial derivatives

     i     and obvious notation,
                                  f (tk+l, X(tk+l)) - f (tk, X(tk))
                                     = ft (tk, X(tk)) At + fx (tkrX(tk)) Axk                   (4.33)
     )
                                       + i f x x (tk, X(tk)) AX^)^ + Q k ,
           where Qk is the remainder term. Furthermore, we have


           t
                     AXk = X(tk+l) - X(tk) =

                            = p(tk)At
                                                       l:+'
                                         + U(tk)AWk + S k ,
                                                             '(s) ds f    rk+'
                                                                          tk
                                                                                U(S)dW(8)
                                                                                               (4.34)


           where Skis a remainder term. From this we obtain

I              ( ~ x k=) p2(tk)
                          ~              +
                                ( ~ t )2p(tk)~(tk)AtAWk
                                        ~                             +
                                                        u2(tk) ( A W ~ ) p~k ,        +
           where Pkis a remainder term. If we now substitute (4.33)-(4.35) into (4.32) we
                                                                                               (4.35)


6        1 obtain, in shorthand notation,
6                   f (t,X(t)) - f (0, X(0)) = I1 + 1 2 4- 13 + 3 1 4 + $Ki + K2
                                                             I
                                                                                       + R,
L.
           where
f
                   I1 =   Ckft(tk)At,                   1 2 = C k fx(tk)~(tk)At,

P          k k 13 = Ck fx(tk)u(tk)AWk7                  14 = x k fxx(tk)u2(tk)(awk12       ,
                 Kl = Ckf ~ ~ ( t r ) p ~ ( t r ) , KZ= Ckfr~(tr)~(tr;)~(tle)AtAWk,
               : R=c~IQ~+~~+P~).
           Letting n + oo we have, more or less by definition,

                                                             -
I
I

                          I1 +       f' (s,X(s)) d.,    I2        f x (s, X(s)) P(S) ds,


I                         ~3 Is      fx (s, ~ ( s )~)( sd)~ ( s ) .

           Very much as when we proved earlier that C ( A W ~ -)r~ t, it is possible to
           show that
50                          STOCHASTIC INTEGRALS


and it is fairly easy to show that K1 and Kz converge to zero. The really hard
part is to show that the term R, which is a large sum of individual remainder
terms, also converges to zero. This can, however, also be done and the proof
is finished.

4.6   Examples
In order to illustrate the use of the It6 formula we now give some examples. All
these examples are quite simple, and the results could have been obtained as
well by using standard techniques from elementary probability theory. The full
force of the It6 calculus will be seen in the following chapters.
    The first two examples illustrate a useful technique for computing expec-
ted values in situations involving Wiener processes. Since arbitrage pricing to
a large extent consists of precisely the computation of certain expected values
this technique will be used repeatedly in the sequel.
    Suppose that we want to compute the expected value E [Y] where Y is some
stochastic variable. Schematically we will then proceed as follows:
      1. Try to write Y as Y = Z(to) where to is some point in time and Z is
         a stochastic process having an It6 differential.
      2. Use the It6 formula to compute d Z as, for example,




      3. Write this expression in integrated form as




      4. Take expected values. Using Proposition 4.4 we see that the dW-integral
         will vanish. For the ds-integral we may move the expectation oper-
         ator inbide the integral sign (an integral is "just" a sum), and we
         thus have
                                               rt




         Now two cases can occur:
         (a) We may, by skill or pure luck, be able to calculate the expected
             value E[p(s)] explicitly. Then we only have to compute an ordin-
             ary Riemann integral to obtain E [Z(t)],and thus to read off E [Y] =
             E [Z(to)l
         (b) If we cannot compute E [p(s)] directly we have a harder problem, but
             in some cases we may convert our problem to that of solving an ODE.
                                        EXAMPLES                                           51


     Example 4.12 Compute E [w4(t)].
     Solution: Define Z by Z(t) = W 4(t). Then we have Z(t) = f(t,X(t)) where
     X = W and f is given by f (t, x) = x 4. Thus the stochastic differential of X
     is trivial, namely d X = dW, which, in the notation of the It6 formula (4.28),
     means that p = 0 and a = 1. Furthermore we have a f / & = 0, a f / a x = 4x3,
     and d2f /ax2 = 12x2. Thus the It6 formula gives us

                          dZ(t) = 6w2(t)dt         + 4w3(t) dW(t),
                           Z(0) = 0.



I
     Written in integral form this reads
                                    t                           t
                                                    +
                     Z(t) = O + 6 l w 2 ( s ) d s 4 1 w3(s)dW(s).




I
I
     Now we take the expected values of both members of this expression. Then, by
     Proposition 4.4, the stochastic integral will vanish. Furthermore we may move
     the expectation operator inside the ds-integral, so we obtain

                              E (Z(t)]= 6      &   E [w2(s)] ds.

     Now we recall that E [w2(s)] = s, so in the end we have our desired result
                                                                t
                                              ) ]6 1 s d s = 3t 2.
                         E [w4(t)] = E [ ~ ( t=
                                                            0




     Example 4.13 Compute E [eaw(t)].
a1
r-   Solution: Define Z by Z(t) = eaW(t).The It6 formula gives us

I"                       dZ(t) = ia2eaW(t)dt        + aeaw(t)dW(t),
     so we see that Z satisfies the stochastic differential equation

                           dZ(t) = ;a22(t) dt       + aZ(t) dW(t),

E                           Z(0) ='I.

     In integral form this reads


k                             l
                              +
                    ~ ( t=) 1 -a2
                              2
                                     Jo   t
                                              ~(s)(ds) a+       Jo  t
                                                                        ~ ( sd)~ ( s ) .
52                         STOCHASTIC INTEGRALS


Taking expected values will make the stochastic integral vanish. After moving
the expectation within the integral sign in the ds-integral and defining m by
m(t) = E [Z(t)] we obtain the equation

                          m(t) = 1
                                       1 2
                                     + -a
                                       2
                                             l   m(s)(ds).

This is an integral equation, but if we take the t-derivative we obtain the ODE




Solving this standard equation gives us the answer

                     E [effw(t)]= E [Z(t)]= m(t) = eff2'I2.



    It is natural to ask whether one can "compute" (in some sense) the value of
a stochastic integral. This is a fairly vague question, but regardless of how it is
interpreted, the answer is generally no. There are just a few examples where the
stochastic integral can be computed in a fairly explicit way. Here is the most
famous one.
Example 4.14 Compute
                                   rt



Solution: A natural guess is perhaps that       W(s)dW(s) = W 2(t)/2. Since
It6 calculus does not coincide with ordinary calculus this guess cannot possibly
be true, but nevertheless it seems natural to start by investigating the process
Z(t) = W 2 (t). Using the It6 formula on the function f(t,x) = x 2 and with
X = W we get
                                        +
                           dZ(t) = dt 2W(t) dW(t).
In integrated form this reads



so we get our answer




     We end with a useful lemma.
                THE MULTIDIMENSIONAL ITO FORMULA                                  53


Lemma 4.15 Let a(t) be a given deterministic function of time and define

                           X(t) =     &   ~ ( s dW(s).
                                                )                              (4.36)

Then X(t) has a normal distribution with zero mean, and variance given by
                                                  t
                          var[x(t)l=                  02(s) ds.
                                              0

   This is of course an expected result because the integral is "just" a linear
combination of the normally distributed Wiener increments with deterministic
coefficients. See the exercises for a hint of the proof.

4.7 The Multidimensional It6 Formula
Let us now consider a vector process X = (XI,.. . , Xn)*, where the component
X, has a stochastic differential of the form
                                                  d
                    dXi (t) = p. (t) dt   +                oij (t) dW, ( t )
                                              j-1

and Wl, . . . , Wdare d independent Wiener processes.
   Defining the drift vector p by


                                 P = [:I],
                                       Pn
the d-dimensional vector Wiener process W by


                                W = ["',
                                           Wd

and the n x d-dimensional diffusion matrix o by

                               011

                       .=[?1 : :
we may write the X-dynamics as
                               ffnl
                                      012




                                      ffn2
                                                      .. -

                                                       0   .
                                                               ".I,
                                                               ffld




                                                               ffnd




                        dX(t) = p(t) dt       + u(t) dW(t).
54                          STOCHASTIC INTEGRALS


 Let us furthermore define the process Z b y



where f : R+ x Rn 4 R is a C112 mapping. Then, using arguments as above, it
can b e shown that the stochastic differential d f is given b y




with t h e extended multiplication rule (see the exercises)

                           ( d W i ) ( d W j )= 0,    for i # j .
Written out in full (see the exercises) this gives us the following result.
Theorem 4.16 (It6's formula) Let the n-dimensional process X have dynam-
ics given by
                                               +
                     d X ( t ) = p ( t ) dt n(t)d W ( t ) ,
with notation as above. Then the following hold:
      The process f (t,X ( t ) ) has a stochastic diflerential given by




      Here the row vector ui is the ith row of the matrix a , i.e.

                                     gi = [ail,.     .. g i d ] ,
      and the matrix C is defined by

                                            C = aa*,
      where * denotes transpose.
      Alternatively, the differential is given by the formula




      with the formal multiplication table

                              (dt)2= 0,
                              d t . d W = 0,
                              (dwi12= d t ,     i = 1,...,d ,
                              dWi . d W j = 0 , i # j.
                     CORRELATED WIENER PROCESSES                           55


Remark 4.7.1 (ItB's formula) The It6 formula can also be written as

                         af    1
          d f { + pz=1i + Xti r * H l


where H denotes the Hessian matrix

                                  H..- - @f
                                   a3 - axiaxj '


and tr denotes the trace of a matrix. The trace is defined, for any square
matrix A, as the sum of the diagonal elements, i.e.


                             -    t r =~  CA,.
                                           i

See the exercises for details.

4.8 Correlated Wiener Processes
Up to this point we have only considered independent Wiener processes, but
sometimes it is convenient to'build models based upon Wiener processes which
are correlated. In order to define such objects, let us therefore consider d
independent standard (i.e. unit variance) Wiener processes Wl, . . . , Wd. Let
furthermore a (deterministic and constant) matrix

                                  611    612   ...   bid
                           6=
                                  6n1 bn2 . -. 6nd

be given, and consider the n-dimensional processes W, defined by

                                       w = aw,


                                  w = [".
                                           Wn

                                 d
                          w,=C&wj, i = l , ...,n.
                                 j=1
56                          STOCHASTIC INTEGRALS


Let us now assume that the rows of 6 have unit length, i.e.

                              =        l i = 1 , ...,n,

where the Euclidean norm is defined as usual by
                                                                                           1
Then it is easy to see (how?) that each of the components W l ,. . ., W, separ-
ately are standard (i.e. unit variance) Wiener processes. Let us now define the
(instantaneous) correlation matrix p of W by



We then obtain




Definition 4.17 The process W , constructed as above, is called a vector of
correlated Wiener processes, with correlation matrix p.
   Using this definition we have the following It6 formula for correlated Wiener
processes.
Proposition 4.18 (ItB's formula) Take a vector Wiener process W =
(Wl,. . . , W,) with correlation matrix p as given, and assume that the vector pro-
cess X = (XI,.. . , Xk)* has a stochastic differential. Then the following hold:
      For any C1t2 function f , the stochastic diferential of the process f (t,X ( t ) )
      is given by
                           CORRELATED WIENER PROCESSES


            with the formal multiplication table

                                    (dt12 = 0,
                                    dt.dWi=O, i = l , ...,n,
                                    dWi. dWj = pijdt.

I           If, in particular, k = n and d X has the structure


            where pl, . . . , pn and u1,. . . , un are scalar processes, then the stochastic
    F       diferential of the process f (t, X(t)) is given by



                                              2,3=1

        We end this section by showing how it is possible to translate between the
    two formalisms above. Suppose therefore that the n-dimensional process X has
    a stochastic differential of the form
                                dX(t) = p(t) dt       + u(t) dW(t),
                                             d
                            = pi (t) dt   + C oij (t) dWi (t)
                                      j=1
    Thus the drift vector process p is given by




    and the diffusion matrix process u by




        W is assumed to be d-dimensional standard vector Wiener process (i.e. with
        indenendent com~onents)of the form
58                         STOCHASTIC INTEGRALS


The system (4.38) can also be written as                                             1
                         dXi(t)= pi ( t )dt    + ui (t)dW( t ) ,
where, as usual, ui is the ith row of the matrix u. Let us now define n new scalar
Wiener processes Wl, . . . , W,, by




We can then write the X-dynamics as




As is easily seen, each W iis a standard scalar Wiener process, but Wl, . . . , ~d
are of course correlated. The local correlation is easily calculated as


                                                                         dt.


Summing up we have the following result.

Proposition 4.19 The system

                                     d
               dXi (t)= f i (t)dt   +C   gij   (t)d Wi(t),


where Wl, .. . , Wd are independent, may equivalently be written as




where Wl, . . . , Wd have the local correlation matrix p. The connections
between (4.41) and (4.42) are given by the following expressions:
I                                    EXERCISES


    4.9 Exercises
    Exercise 4.1 Compute the stochastic differential d Z when


      (b) Z(t) =     g(s) dW(s), where g is an adapted stochastic process.

     , (d) Z(t) = eox(t), where X has the stochastic differential
                                   dX(t) = p d t       + adW(t)
           ( p and 0 are constants).
       (e) Z(t) = X 2 (t), where X has the stochastic differential

                              dX(t) = aX(t) dt         + aX(t) dW(t).
    Exercise 4.2 Compute the stochastic differential for Z when Z(t) = l/X(t)
    and X has the stochastic differential

                          d X(t) = cuX(t) dt   + uX(t) d W(t).
    By using the definition Z = X--l you can in fact express the right hand side of
    dZ entirely in terms of Z itself (rather than in terms of X). Thus Z satisfies
    a stochastic differential equation. Which one?
    Exercise 4.3 Let a(t) be a given deterministic function of time and define the

                                 X(t)=
                                         I'   a(s)dW(s).

    Use the technique described in Example 4.13 in order to show that the
                                                                               (4.43)


    characteristic function of X(t) (for a fixed t) is given by

                      [      1        { U2
                   E eiux(t) = exp -- l g 2 ( 4 d s ) >           I 4 E ~1     (4.44)

    thus showing that X(t) is normally distributed with zero mean and a variance
                                                   t
                                 VW[X(~)]
                                       =      J 02(s)ds.
                                               0
    Exercise 4.4 Suppose that X has the stochastic differential

                            dX(t) = aX(t) dt    + a(t) dW(t),
    where a is a real number whereas o(t) is any stochastic process. Use the technique
    in Example 4.13 in order to determine the function m(t) = E [X(t)].
60                          STOCHASTIC INTEGRALS


Exercise 4.5 Suppose that the process X has a stochastic differential

                           d X (t) = p(t) dt   + a(t) dW(t),
               >
and that p(t) 0 with probability one for all t. Show that this implies that X
is a submartingale.
Exercise 4.6 A function h(xl,. . . , x,) is said to be harmonic if it satisfies the
condition
                                       d2h
                                         C
                                         r=l
                                             e =o.
It is subharmonic if it satisfies the condition

                                         " d 2h
                                         C
                                         a=1
                                             @ 20.
Let Wl, . . . , W, be independent standard Wiener processes, and define the
process X by X(t) = h(Wl(t), . . . , Wn(t)). Show that X is a martingale (sub-
martingale) if h is harmonic (subharmonic).
Exercise 4.7 The. object of this exercise is to give an argument for the
formal identity
                             dWl . dW2 = 0,
when Wl and W2 are independent Wiener processes. Let us therefore fix a time
t, and divide the interval [0, t] into equidistant points 0 = to < tl < . . - < tn = t,
where ti =     t. We use the notation

                    A w i ( t k ) = W i ( t k ) - W i ( t k - l ) , 2=1,2.

Now define Q, by
                                     n
                           Qn =    C ~ w l ( t k.)Aw2(tk).
                                   k=l
Show that Qn -,0 in L2, i.e. show that

                                          E(Qn1= 0,
                                      Var[Qnl+ 0.

Exercise 4.8 Let X and Y be given as the solutions to the following system of
stochastic differential equations.

                        dX=aXdt-YdW,                   X(0) = x o ,
                        dY = a Y d t + X d W ,         Y(O)=yo.
                                            NOTES


    I Note that the initial values xo, yo are deterministic constants.
           (a) Prove that the process R defined by R(t) = X 2 (t)+Y 2 (t) is deterministic.
    "      (b) Compute E [X(t)].
      Exercise 4.9 For a n x n matrix-A, the trace of A is defined as




           (a) If B is n x d and C is d x n, then BC is n x n. Show that




    [ fi (b) With assumptions as above, show that


      !t
      & (c) Show that the It6 formula in Theorem 4.16 can be written as



               where H denotes the Hessian matrix




1     Exercise 4.10 Prove all claims in Section 4.8.

      4.10 Notes
      As a (far reaching) introduction to stochastic calculus and its applications,
      0ksendal (1995) and Steele (2001) can be recommended. Standard references
      on a more advanced level are Karatzas and Shreve (1988), and Revuz and Yor
      (1991). The theory of stochastic integration can be extended from the Wiener
      framework to allow for semimartingales as integrators, and a classic in this field
      is Meyer (1976). Standard references are Jacod and Shiryaev (1987), Elliott
      (1982), and Dellacherie and Meyer (1972). An alternative to the classic approach
      to semimartingale integration theory is presented in Protter (1990).
            P

    -       Exe
            .3iW
        /
                                                              5
                                   DIFFERENTIAL EQUATIONS

            5.1 Stochastic Differential Equations
            Let M(n, d) denote the class of n x d matrices, and consider as given the following
            objects.
                   A &dimensional (column-vector) Wiener process W.
                   A (column-vector valued) function p : R+ x R n + Rn.
                   A function a : R+ x R n + M(n, d).
                   A real (column) vector xo E Rn.
                We now want to investigate whether there exists a stochastic process X which
            satisfies the SDE

                                    dXt = p (t, Xt) dt            + a (t, Xt) dWt,
                                       xo = $0.
i           To be more precise we want to find a process X satisfying the integral equation

                   xt = xo +     lo (s, XI) ds + u (s, X,) dW,, for t 2
                                   p
                                                      Jo
                                                                                           all    0.   (5.3)

            The standard method for proving the existence of a solution to the SDE above
            is to construct an iteration scheme of Cauchy-Picard type. The idea is to define
            a sequence of processes XO,X1, X 2 ,. .. according to the recursive definition



                                          +
                           x":     = xo           p (s, X:)       ds   +   I   u (s, X):   dW,.

            Having done this one expects that the sequence {Xn)r=l will converge to some
            limiting process X , and that this X is a solution to the SDE. This construction
            can in fact be carried out, but as the proof requires some rather hard inequalities
            we only give the result.
            Proposition 5.1 Suppose that there exists a constant K such that the following
            conditions are satisfied for all x, y and t:
                                  GEOMETRIC BROWNIAN MOTION                                    63


    k       Then there exists a unique solution to the SDE (5.1)-(5.2). The solution has the
            following properties:
               1. X is FtW -adapted.
               2. X has continuous trajectories.
    1          3. X is a Markov process.
               4. There exists a constant C such that
f'
1                                        E [IlXtl12] 5 ceCt (1 + llxoIl2).                  (5.9)
kg               The fact that the solution X is 3y-adapted means that for each fixed t ,




I
            the process value Xt is a functional of the Wiener trajectory on the interval
            (0, t ], and in this way an SDE induces a transformation of the space C[O, oo)
            into itself, where a Wiener trajectory W.(w) is mapped to the corresponding
            solution trajectory X.(w). Generically this transformation, which takes a Wiener
            trajectory into the corresponding X-trajectory, is enormously complicated and it
Ph          is extremely rare that one can "solve" an SDE in some LLexplicit" manner. There
            are, however, a few nontrivial interesting cases where it is possible to solve an
t
            SDE, and the most important example for us is the equation below, describing
'I1     1   the so-called geometric Brownian motion (GBM).
2)
            5.2 Geometric Brownian Motion
Pn          Geometric Brownian motion will be one of our fundamental building blocks for
        i   the modeling of asset prices, and it also turns up naturally in many other places.
3)          The equation is one of two natural generalizations of the simplest linear ODE
            and looks as follows:
hre
            Geometric Brownian motion:
ne
                                        dXt = aXt dt   + o x t dWt,                        (5.10)
                                         XO= 20.                                           (5.11)

            Writing in a slightly sloppy form we can write the equation as

                                           xt= (a + owt) xt,
            where w is "white noise", i.e. the (formal) time derivative of the Wiener pro-
            cess. Thus we see that GBM can be viewed as a linear ODE, with a stochastic
            coefficient driven by white noise. See Fig. 5.1, for a computer simulation of GBM
                               .2 and X(0) = 1. The smooth line is the graph of the expected
                                 t] = 1 .eat. For small values of u, the trajectory will (at least
                                   close to the expected value function, whereas a large value
                                   large random deviations. This can clearly be seen when we
            compare the simulated trajectory in Fig. 5.1 to the three simulated trajectories
            in Fig. 5.2 where we have u = 0.4.
                   DIFFERENTIAL EQUATIONS




        I                                 I
                                                           I
 0    0.2    0.4   0.6   0.8   1   1.2   1.4   1.6   1.8   2

     FIG. 5.1. Geometric Brownian motion: a = 1, a = 0.2




01            I                                            I
 0   ' 0.2   0.4   0.6   0.8   1   1.2   1.4   1.6   1.8   2

     FIG. 5.2. Geometric Brownian motion: a = 1, a = 0.4
                          GEOMETRTC BROWNIAN MOTION                                 65
E
        Inspired by the fact that the solution to the correspondingdeterministic linear
    equation is an exponential function of time we are led to investigate the process
    2,defined by Zt = In Xt, where we assume that X is a solution and that X is
    strictly positive (see below). The It6 formula gives us
1




    Thus we have the equation




! This equation, however, is extremely simple: since the right-hand side does not
I contain Z it can be integrated directly to



    which means that X is given by

    ,-
      Strictly speaking there is a logical flaw in the reasoning above. In order for
; Z to be well defined we have to assume that there actually exists a solution X
  to eqn (5.10) and we also have to assume that the solution is positive. As for the
  existence, this is covered by Proposition 5.1, but the positivity seems to present
  a bigger problem. We may actually avoid both these problems by regarding the
  calculations above as purely heuristic. Instead, we define the process X by the
  formula (5.12). Then it is an easy exercise to show that X thus defined actually
  satisfies the SDE (5.10)-(5.11). Thus we really have proved the first part of the
  following result, which will be used repeatedly in the sequel. The result about
  the expected value is an easy exercise, which is left to the reader.
    Proposition 5.2 The solution to the equation




    is given by
                        X(t) = xo . exp { ( a- +a2)
                                                  t    + uw(t)).                 (5.15)
i The expected value is given by
                                    \ E [Xt]= xOePt.                             (5.16)
I       66                       DIFFERENTIAL EQUATIONS




I
i
        5.3   The Linear SDE
        In this section, we will study the linear SDE, which in the scalar case has the
        form
                                     dXt = aXtdt + udWt,
                                      xo = so.
                                                                                 (5.17)

        This equation turns up in various physical applications, and we will also meet it
        below in connection with interest rate theory.
           In order to get some feeling for how to solve this equation we recall that the

                                        dxt-
                                        -
                                         dt
                                             - axt   +ut,
    .   where u is a deterministic function of time, has the solution




1       If we, for a moment, reason heuristically, then it is tempting to formally divide
        eqn (5.17) by dt. This would (formally) give us



I       and, by analogy with the ODE above. one is led to coniecture the formal solution




           Generally speaking, tricks like this will not work, since the solution of the
        ODE is based on ordinary calculus, whereas we have to use It6 calculus when
        dealing with SDEs. In this case, however, we have a linear structure, which
        means that the second order term in the It6 formula does not come into play.
        Thus the solution of the linear SDE is indeed given by the heuristically derived
        formula above. We formulate the result for a slightly more general situation,
        where we allow X to be vector-valued.
        Proposition 5.3 Consider the n-dimensional linear SDE       -


        where A is an n x n matrix, b is an Rn-valued deterministic function (in column-
        vector form), a is a deterministic function taking values in M(n, d), and W a
        d-dimensional Wiener process. The solution of this eauation is aiven bu
                              THE INFINITESIMAL OPERATOR                              67


! Hew we have used the matrix exponential e , defined by
                                                     At




        Proof Defining the process X by (5.20) and using the It6 formula, it is easily
        seen that X satisfies the SDE (5.19). See the exercises for some details.
           In the exercises you will find results about the moments of Xt as well as
        details about the matrix exponential.

        5.4 The Infinitesimal Operator
        Consider, as in Section 5.1, the n-dimensional SDE
I
                              dXt = U
                                    , (t, Xt) dt   + u (t, Xt) dWt.               (5.21)

    t
        Through the It6 formula, the process above is closely connected to a partial
        differential operator A, defined below. The next two sections are devoted to
        investigating the connections between, on the one hand, the analytical properties
        of the operator A, and on the other hand the probabilistic properties of the
        process X above.
        Definition 5.4 Given the SDE in (5.21), the partial diferential operator A,
        referred to as the infinitesimal operator of X, is defined, for any function
              ) h Ec~(R~b
        h ( ~with               )y,




        where as before
                                    C(t, x) = u(t, x)u*(t, 5).
            This operator is also known as the Dynkin operator, the It6 operator,
        or the Kolmogorov backward operator. We note that, in terms of the
/
i
        infinitesimal generator, the It6 formula takes the form

                          df(t,Xt) =   {g+     df) dt     + [Vxf]udWt,
        where the gradient V, is defined for h E c'(R~) as
68                       DIFFERENTIAL EQUATIONS


5.5 Partial Differential Equations
In this section, we will explore the intimate connection which exists between
stochastic differential equations and certain parabolic partial differential equa-
tions. Consider for example the following so-called Cauchy problem.
    We are given three scalar functions p(t, x), a(t, x) and @(x).Our task is to
find a function F which satisfies the following boundary value problem on
[0, T]x R:




Now, instead of attacking this problem using purely analytical tools, we will pro-
duce a so called stochastic representation formula, which gives the solution
to (5.22)-(5.23) in terms of the solution to an SDE which is associated to (5.22)-
(5.23) in a natural way. Thus we assume that there actually exists a solution F
to (5.22)-(5.23). Let us now fix a point in time t and a point in space x. Having
fixed these we define the stochastic process X on the time interval [t, T ] as the
solution to the SDE




and the point is that the infinitesimal generator A for this process is given by




which is exactly the operator appearing in the PDE above. Thus we may write
the boundary value problem as




Applying the It6 formula to the process F (s, X(s)) g'lves us
                    PARTIAL DIFFERENTIAL EQUATIONS                                     69


Since, by assumption, F actually satisfies eqn (5.26), the time integral above will
vanish. If furthermore the process cr(s, X,)(aF/dx)(s, X,) is sufficiently integ-
rable and we take expected values, the stochastic integral will also vanish. The
initial value Xt = x and the boundary condition F(T, x) = @(x) will eventually
leave us with the formula

                             F(t, $1 = Et,, [@ ( X T ),~

where we have indexed the expectation operator in order to emphasize that the
expected value is to be taken given the initial value Xt = x. Thus we have
proved the following result, which is known as the Feynman-KaE stochastic
representation formula.
Proposition 5.5 (Feynman-KaE)           Assume that F is a solution to the bound-
ary value problem


              -(t,x)    +p(t,x)--
                                  aF + -u
                                       1 ,      d 2F
                                           (t,x)-(t,x)       = 0,
                                 ax      2           ax 2
                                                      F(T,x) = @(x).

Assume furthermore that the process

                                          dF
                                4.7   xs)z(s,     x8)

is in E2 (see Definition 4.3), where X is defined below. Then F has the

                             F ( t 72) = Et,, [@ (XT)]                            (5.29)
where X satisfies the SDE

                       dXs = / l ( ~Xs)
                                    , ds     +   U(S, Xs) dWs,                    (5.30)
                        Xt = X.                                                   (5.31)

   Note that we need the integrability assumption o ( s , ~ , ) g ( s , X , ) E L2 in
order to guarantee that the expected value of the stochastic integral in (5.28)
equals zero. In fact the generic situation is that a boundary value problem of the
type a b o v e a so-called parabolic problem-will have infinitely many solutions,
(see John 1982). It will, however, only have one "nice" solution, the others being
rather "wild", and the proposition above will only give us the "nice" solution.
   We may also consider the closely related boundary value problem

         -(t,x)   +p(t,x)-
                          dF
                           ax
                                + 1-02(t,x)-(t,x)
                                   2
                                            d2F
                                            ax 2
                                                         - rF(t,x) = 0,            (5.32)
                                                            F ( T , x ) = @ ( x ) , (5.33)
                                     DIFFERENTIAL EQUATIONS


where r is a given real number. Equations of this type appear over and over
again in the study of pricing problems for financial derivatives. Inspired by the
ODE technique of integrating factors we are led to multiply the entire eqn (5.32)
by the factor erS, and if we then consider the process Z(s) = e-'" F (s, X(s)),
where X as before is defined by (5.30)-(5.31), we obtain the following result.
Proposition 5.6 (Feynman-KaE) Assume that F is a solution to the bound-
ary value problem

         OF
         -(t,x)           +p(t,x)-
                                                      a2F
                                       aF + 1-u2(t,x)-(t,x)              - rF(t,x) = 0,
         at                            ax 2           ax2
                                                                           F(T,x) = cP(x).   (5.35)

Assume furthermore that the process a(s, x,)                           (s, X,) is in it2,where X is
defined below. Then F has the representation

                                    F(t, x) = e-r(T-t) E,,, [a(XT)],

where X satisfies the SDE

                                                         +
                                   dXs = p ( ~ , X , ) d s a(~,Xs)dWs,
                                    xt= x.
Example 5.7 Solve the PDE

                                     aF           1 ,d2F
                                     a ( t , ~ ) + - ~- i - ( t , ~ ) = O ,
                                                  2 6x
                                                         F(T, x) = x 2,

where a is a constant.
Solution: From Proposition 5.5 we immediately have

                                           F ( t ,2) = Et,, [X$]   7




where         .   [ # ,   ,:
                     Xttf
                      ,       .<          dX, =O.ds+udW,,
                          c                xt= x.
This equation can easily be solved, and we have
                   PARTIAL DIFFERENTIAL EQUATIONS


so XT has the distribution N [ x ,o m ] . Thus we have the solution

                  F ( t ,X ) = E [x$]                    +
                                    = Var [XT] { E [ x T ] } ~
                         = 0 2 (-~t )     +x . 2




   Up to now we have only treated the scalar case, but exactly the same
arguments as above will give us the following result.
Proposition 5.8 Take as given
     A (column-vector valued) function p : R+ x Rn + Rn.
     A function C : R+ x R n -t M ( n , n ) , which can be written in the form

                                 c(t,X ) = b(t,x ) ( T * (x~),,
     for some function u : R+ x Rn -t M ( n ,d).
     A real valued function @ : R" + R.
     A real number r .
Assume that F : R+ x Rn -t R is a solution to the boundary value problem

                   aF          1
-(t,~)+ E r ( t , ~ ) ~ ( t . x5
                               )+      C Cij(t.2)- a 2 (t,~ - T F ( ~ , =o,
                                                                       X)         X)
                                      i,j=l              ax,axj
                                                                            F ( T , x ) = @(x).

Assume furthermore that the process
                             n
                                           aF
                            C o j ( s ,xs)-(s,
                                          axi
                                                        xs)
                            i=l

is in f2 (see Definition 4.3), where X is defined below. Then F has the

                       F ( t , x ) = e-r(T-t)~t,, [a( X T ) ] ,                        (5.39)
where X satisfies the SDE

                     dXs = p(s, X s ) dt      +   U ( S , X s ) dWs,                   (5.40)
                       Xt= X .                                                         (5.41)

We end this section with a useful result. Given Lemma 4.9 the proof is easy and
left to the reader.
72                         DIFFERENTIAL EQUATIONS                                        1

Proposition 5.9 Consider as given a vector process X w ith gene!rator
a function F ( t ,x). Then, modulo some integrability COIrlditions, the
ing hold:
      The process F(t, X t ) is a martingale relative to the filtration F X if and
                                                                                         I
      onlu i f F satisfies the PDE




     The process F ( t , X t ) is a martingale relative to the
     only if, for every ( t , x ) and T 2 t, we have

                                 F ( t , 4 = Et,, [F(T,X T ) ~ .

5.6 The Kolmogorov Equations
We will now use the results of the previous section in order to derive some
classical results concerning the transition probabilities for the solution to an
SDE. The discussion has the nature of an overview, so we allow ourselves some
latitude as to technical details.
    Suppose that X is a solution to the equation

                         dXt = At,&) dt        + ~ ( xt)
                                                     t , dWt,               (5.42)
                                                                                     i
with infinitesimal generator d given by




where as usual
                              C(t,z)= a ( t , x ) u * ( t ,x).                       I
                                                                                     I
Now consider the boundary value problem

                  ($+ du) (s,ar) 0,     =        (8,   Y) E (0,T)x Rn,           II
                               ~(T,!/)=IB(Y), YERn,
where IB is the indicator fundion of the set B. From Proposition 5.8 we
immediately have

                 ~ ( 3Y ,) = E*,, [ I B ( ~ T =
                                              ) ]~   ( X ET B 1x8 = Y ),

where X is a solution of (5.42). This argument can also be turned around, and
we have thus (more or less) proved the following result.
                          THE KOLMOGOROV EQUATIONS                                73


Proposition 5.10 (Kolmogorov backward equation) Let X be a solu-
tion to eqn (5.42).     Then the transition probabilities P(s, y; t, B) =
P (Xt E B IX(s) = y) are given as the solution to the equation

                 (g+      M ) (3,Y;t, B)= 0,          (s, Y) E (0,t) x Rn,    (5.43)

                               P(t, Y;t, B)= IB(Y).                           (5.44)

Using basically the same reasoning one can also prove the following corresponding
result for transition densities.
Proposition 5.11 (Kolmogorov backward equation) Let X be a solution
to eqn (5.42). Assume that the measure P(s, y; t, dx) has a density p(s, y; t, x) dx.
Then we have

                  (2+     AP) (s, Y;t, x) = 0 ,       (s, r) E (0,t) x Rn,    (5.45)

                               p(s, y; t, x) -+ d,,   as s -t t.              (5.46)

    The reason that eqns (5.43) and (5.45) are called backward equations is that
the differential operator is working on the "backward variables" (s, y). We will
now derive a corresponding L'forward"equation, where the action of the differ-
ential operator is on the "forward" variables (t, x). For simplicity we consider
only the scalar case.
    We assume that X has a transition density. Let us then fix two points in time
s and T with s < T. Now consider an arbitrary "test function", i.e. an infinite
differentiable function h(t, x) with compact support in the set (s, T) x R. From
the It6 formula we have

[            , = h(s, xS)+
       h ( ~XT)                 J (%
                                   ah                   * ah
                                      + h)(t,x t ) dt + az(t9 x t ) dwt.
Applying the expectation operator E,,, 1.1, and using the fact that, because of
the compact support, h(T, x) = h(s, x) = 0, we obtain

                   JW
                    -00
                          lT p(s, y; t,X)   :( + A) h(t, dzdt 0.
                                                            X)      =

Partial integration with respect to t (for &) and with respect to x (for A) gives us

                        IT h(t,x)   (-: +A*) p(s,y;t,x) dxdt 0,       =

    where the adjoint operator A* is defined by
                               a                     1 a*
             (A*f ) (t, X) = --
                               ax C(t, x)f (t. x)l + 2 a [c2(t,x)f (t, 41-
    74                        DIFFERENTIAL EQUATIONS


    Since this equation holds for all test functions we have shown the follow-
    ing result.
    Proposition 5.12 (Kolmogorov forward equation) Assume that the solu-
    tion X of eqn (5.42) has a transition density p(s, y;t ,x). Then p will satisfy the
    Kolmogorov forward equation




      This equation is also known as the Fokker-Planck equation. The
    multidimensional version is readily obtained as

                             ap
                             ~ ( s;t., 5) = A*P(s,
                                                Y;t ,x ) ,

    where the adjoint operator A* is defined by




    Example 5.13 Let us consider a standard Wiener process with constant
    diffusion coefficient o, i.e. the SDE

                                      dXt = u dWt.
I
I

    The Fokker-Planck equation for this process is




    and it is easily checked that the solution is given by the Gaussian
    densitv



    Example 5.14 Consider the GBM process



    The Fokker-Planck equation for this process is
                                   EXERCISES




I
, A change of variables of the form x = ey reduces this equation to an equation
, with constant coefficients, which can be solved by Fourier methods. For us it is
  perhaps easier to get the transition density directly by solving the SDE above.
  See the exercises below.

   5.7 Exercises
b, Exercise 5.1 Show that the scalar SDE


    has the solution
                        X(t) = eat . xo   +a
                                               I'   ea(t-s) dWs,            (5.49)

    by differentiating X as defined by eqn (5.49) and showing that X so defined
    actually satisfies the SDE:
       Hint: Write eqn (5.49) as



    where




    and first compute the differentials dZ, dY and dR. Then use the multidimen-
                                                      +
    sional It6 formula on the function f (y, z, r ) = y z . r.
    Exercise 5.2 Let A be an n x n matrix, and define the matrix exponential eA
    by the series



 E This series can be shown to converge uniformly.
       (a) Show, by taking derivatives under the summation sign, that
76                         DIFFERENTIAL EQUATIONS


     (b) Show that
                                            eO = I,
         where 0 denotes the zero matrix, and I denotes the identity matrix.
     (c) Convince yourself that if A and B commute, i.e. AB = BA, then

                                 eA+B = eA . eB = eB . eA.

         Hint: Write the series expansion in detail.
     (d) Show that e A is invertible for every A, and that in fact

                                         [&I -'= .-A.
     (e) Show that for any A, t and s
                                     eA(t+8)   = eAt   . eAs
     (f) Show that
                                          (&)* = eA*
Exercise 5.3 Use the exercise above to complete the details of the proof of
Proposition 5.3.
Exercise 5.4 Consider again the linear SDE (5.19). Show that the
expected value function m(t) = E[X(t)], and the covariance matrix
C(t) = { C O V ( X , ( ~ ) , X ~ ( ~are    ~ , ~ by
                                     ) ) }given


                      m(t) = eAtzo   +
                                         l  eA(t-s)b(s) ds,

                      C(t) =
                                Lt                   ds,
                                 eA(t-8)u(s)u*(s)eA*(t-s)

where * denotes transpose.
  Hint: Use the explicit solution above, and the fact that

                                       - m(t)m*(t).
                          C(t) = E [XtX,*]

Geometric Brownian motion constitutes a class of processes which is closed under
a number of nice operations. Here are some examples.
Exercise 5.5 Suppose that X sati&ea the SDE

                             dXt = axtdt       + uXt dWt.
Now define Y by Yt =      x!,
                           where /3 is a real number. Then Y is also a GBM
process. Compute dY and find out which SDE Y satisfies.
                                    EXERCISES


Exercise 5.6 Suppose that X satisfies the SDE
                            dXt = axtdt        + axtdWt,
and Y satisfies
                               d& = y & d t + b & d % ,
where V is a Wiener process which is independent of W. Define Z by Z = X/Y
and derive an SDE for Z by computing d Z and substituting Z for X/Y in the
right hand side of dZ. If X is nominal income and Y describes inflation then Z
describes real income.
Exercise 5.7 Suppose that X satisfies the SDE
                            dXt = axtdt        + u X dWt,
                                                     ~
and Y satisfies
                               d& = 7&dt+6&dWt.
Note that now both X and Y are driven by the same Wiener process W. Define
Z by Z = X/Y and derive an SDE for Z.
Exercise 5.8 Suppose that X satisfies the SDE
                            dXt = axtdt        + axtdWt,
and Y satisfies
                            d& = y & d t + 6 x d & ,
where V is a Wiener process which is independent of W. Define Z by Z = X . Y
and derive an SDE for Z. If X describes the price process of, for example, IBM
in US$ and Y is the currency rate SEK/US$ then Z describes the dynamics of
the IBM stock expressed in SEK.
Exercise 5.9 Use a stochastic representation result in order to solve the
following boundary value problem in the domain [0, T] x R:
                       aF + px-aF + 1-&2-
                       -                         a2F=
                                                         0,
                       at         ax       2     ax2
                                               F(T, x) = ln(x2).
Here p and a are assumed to be known constants.
Exercise 5.10 Consider the following boundary value problem in the domain


                  aF
                  -+ p(t,x)-
                            aF + -a
                                 1 2      a2F
                                     (t,x)-+ k(t,x) = 0,
                  at         ax        2         ax2
                                                       F(T, x) = @(x).
Here p, a, k and @ are assumed to be known functions.
78                           DIFFERENTIAL EQUATIONS


     Prove that this problem has the stochastic representation formula




where as usual X has the dynamics
                                            +
                     F ( t ,2 ) = Et,, [@(XT)]
                                                 6'    Et,, [k(s,Xs)] ds,



                          d X , = p(s, X,) ds    +   U(S,   X,) dW,,
                            xt = x.
   Hint: Define X as above, assume that F actually solves the PDE and
consider the process Z, = F ( s ,X,).
Exercise 5.11 Use the result of the previous exercise in order to solve

                              aF + -x2-
                              -    1 a2F
                                         +x=o,
                              at     2    ax2
                                           F ( T , x ) = ln(x 2 ).
Exercise 5.12 Consider the following boundary value problem in the domain
[O,T]x R.

               aF         aF          1          a2F
               -+p(t,x)-+             - a 2 (t,x)-+ r ( t , x ) F = 0 ,
                at             ax     2          8x2
                                                     F ( T , x )= @ ( x ) .
Here p(t, x), a ( t, x ), r (t, x ) and @ ( x )are assumed to be known functions. Prove
that this problem has a stochastic representation formula of the form

                         ~ ( xt ),= E~~ F(xT)eJ:            r(8J*)*8]   ,
by considering the process Z, = F ( s , X,) x exP
interval [t,TI.
                                                               [cr(u,X u ) du] on the time
Exercise 5.13 Solve the boundary value problem

              aF
              at            + 21 ,d2F
              -(t, ~ , y ) -a - ( t , x , y )
                                   ax2
                                                    1 d2F
                                                  + -62-(t,x,y)
                                                    2 ay2
                                                                            = 0,

                                                                F ( T ,x , y ) = xy-
Exercise 5.14 Go through the details in the derivation of the Kolmogorov
forward equation.
Exercise 5.15 Consider the SDE

                                   dXt = a d t   + udWt,
                                       NOTES                                   79


  where a and a are constants.
   (a) Compute the transition density p(s, y ; t , x), by solving the SDE.
   (b) Write down the Fokker-Planck equation for the transition density and
       check the equation is indeed satisfied by your answer in (a).
  Exercise 5.16 Consider the standard GBM                                            i
                               dXt =    dt   + gXt dWt
  and use the representation

                 Xt = xsexp { [ a- $a2](t - s) + o [Wt- W,])
D in order to derive the transition density p(s, y ; t, x) of GBM. Check that this
  density satisfies the Fokker-Planck equation in Example 5.14.

  5.8 Notes
  All the results in this chapter are standard and can be found in, for example,
  Karatzas and Shreve (1988), Revw and Yor (1991), Bksendal (1995). For an
  encyclopedic treatment of the probabilistic approach to parabolic PDEs see
  Doob (1984).
                                            m C I I S I : Ape.!, ! i




                                              6
                           PORTFOLIO DYNAMICS

6.1 Introduction
Let us consider a financial market consisting of different assets such as stocks,
bonds with different maturities, or various kinds of financial derivatives. In this
chapter we will take the price dynamics of the various assets as given, and the
main objetive is that of deriving the dynamics of (the value of) a so-called self-
financing portfolio. In continuous time this turns out to be a fairly delicate task,
so we start by studying a model in discrete time. We will then let the length of
the time step tend to zero, thus obtaining the continuous time analogs. It is to
be stressed that this entire section is only motivating and heuristic. The formal
definitions and the corresponding theory will be given in the next section.
    Let us thus study a financial market, where time is divided into periods of
length At, and where trading only takes place at the discrete points in time
                                                                   +
n A t , n = 0,1,. . .. We consider a fixed period [t,t At). This period (where
of course t = nAt for some n ) is henceforth referred to as "period t". In the
sequel we will assume that all assets are stocks, but this is purely for linguistic
convenience.
Definition 6.1
         N = the number of different types of stocks.
      hi(t)= number of shares of type i held during the period [t,t             + At).
       h(t)= the portfolio [hl( t ) ., .. , h N ( t ) ]held during period t .
       c(t)= the amount of money spent on consumption per unit time
               during the period [t,t + At).
      Si(t)= the price of one share of type i during the period [t,t + At).
      V ( t )= the value of the portfolio h at time t.
   The information and the decisions in the model are structured as follows:
      At time t , i.e. at the start of period t , we bring with us an "old" portfolio
      h(t - At) = {hi(t- A t ) ,i = 1,. . . , N) from the previous period t - At.
      At time t we can observe the price vector S ( t )= ( S l ( t ).,. . , S N ( t ) ) .
      At time t , after having observed S ( t ) ,we choose a new portfolio h(t),to
      be held during period t . At the same time we also choose the consumption
      rate c(t) for the period t. Both h(t) and c(t) are assumed to be constant ,
      over the period t.
                                       INTRODUCTION                                81


    Remark 6.1.1 Note that, so far, we only consider nondividend paying assets.
    The case of dividend paying assets is slightly more complicated, and since it will
    only be used in Chapter 16, we omit it from our main discussion. See Section 6.3
    for details.
       We will only consider so called self-financing portfolio-xonsumption pairs
; (h,c), i.e. portfolios with no exogenous infusion or withdrawal of money (apart
    of course from the c-term). In other words, the purchase of a new portfolio, as
    well as all consumption, must be financed solely by selling assets already in the
    portfolio.
        To start the analysis we observe that our wealth V(t), i.e. the wealth at the
    start of period t, equals the value of the old portfolio h(t - At). Thus we have
                               N
                      V(t) =   C hi (t - At)Si(t) = h(t - At)S(t),               (6.1)
                               a=1


    where we have used the notation




    for the inner product in R N . Equation (6.1) simply says that at the beginning
    of period t our wealth equals what we get if we sell our old portfolio at today's
    prices. We may now use the proceeds of this sale for two purposes:
         Reinvest in a new portfolio h(t).

i        Consume at the rate c(t) over the period t.

G The cost of the new portfolio h(t), which has to be bought at today's prices, is
  given by
                                   N



    whereas the cost for the consumption rate c(t) is given by c(t)At. The budget
    equation for period t thus reads



    If we introduce the notation

                               AX(t) = X(t) - X ( t - At),

    for an arbitrary process X, we see that the budget equation (6.2) reads
82                          PORTFOLIO DYNAMICS


Since our goal is to obtain the budget equation in continuous time it is now
tempting to let At -+ 0 in eqn (6.3) to obtain the formal expression

                             S(t) dh(t)   + c(t) dt = 0.
This procedure is, however, not correct, and it is important to understand why
that is so. The reasons are as follows:
      All stochastic differentials are to be interpreted in the It6 sense.
      The It6 integral g(t) dW(t) was defined as the limit of sums of the type

                             C d t n ) [W(tn+~)- W(tn)l,
      where it was essential that the W-increments were forward differences.
      In eqn (6.3) we have a backward h-difference.
   In order to get It6 differentials we thus have to reformulate eqn (6.3). This is
done by adding and subtracting the term S(t - At)Ah(t) to the left-hand side,
and the budget equation now reads

                  S(t - At)Ah(t)     + AS(t)Ah(t)+ c(t)At = 0.
Now, at last, we may let At + 0 in the budget equation (6.4), giving us

                      S(t) dh(t)   + dh(t) dS(t) + c(t) dt = 0.
Letting At -+ 0 in eqn (6.1) gives us

                                   V(t>= h(t)S(t),

and if we take the It6 differential of this expression we get

                 dV(t) = h(t) dS(t)    + S(t) dh(t) + dS(t) dh(t).
To sum up, eqn (6.7) is the general equation for the dynamics of an arbitrary
portfolio, and eqn (6.5) is the budget equation which holds for all self-financing
portfolios. Substituting (6.5) into (6.7) thus gives us our desired object, namely
the dynamics of (the wealth of) a self-financing portfolio.

                           dV(t) = h(t) dS(t) - ~ ( tdt.
                                                      )

In particular we see that in a situation without any consumption we have the
following V-dynamics:
                              dV(t) = h(t) dS(t).
                         SELF-FINANCING PORTFOLIOS                               83


  Remark 6.1.2 The natural economic interpretation of eqn (6.9) is of course
  that in a model without any exogenous income, all change of wealth is due to
  changes in asset prices. Thus (6.8) and (6.9) seem to be rather self-evident, and
  one may think that our derivation was rather unneccesary. This is, however, not
' the case, which we realize if we recall that the stochastic differentials in (6.8)
  and (6.9) are to be interpreted in the It8 sense, where it is important that the
  integrator increment d S ( t ) is a forward increment. If we had chosen to define
  our stochastic integral in some other way, e.g. by using backward increments
                      e done), the formal appearance of (6.8)-(6.9) would have
                       The real content, on the other hand, would of course have


  6.2 Self-financing Portfolios
  Having gone through the derivations of the preceding section there are some
  natural questions.
     1. In which sense ( L ~P-as.,
                              ,    etc.) is the limiting procedure of letting At + 0
        to be interpreted?
     2. Equation (6.8) is supposed to be describing the dynamics of a self-financing
        portfolio in continuous time, but what is "continuous time trading"
        supposed to mean "in reality"?
  The answer to these questions is simply that the preceding reasoning has only
  been of a motivating nature. We now give a purely mathematical definition of
  the central concepts. The interpretations of the concepts are of course those of
  the preceding section.
  Definition 6.2 Let the N-dimensional price process { S ( t ) ;t 2 0 ) be given.
    1. A portfolio strategy (most often simply called a portfolio) is any 3:-
       adapted N-dimensional process { h ( t ) ;t 2 0 ) .
    2. The portfolio h is said to be Markovian if it is of the form

                                       h ( t ) = h ( t ,S ( t ) ) ,
        for some function h : R+ x R~ + RN.
     3. The value process vhwmsponding to the portfolio h is given by
                                                 N
                                   vh(t)= C h , ( t ) ~ , ( t ) .            (6.10)
                                                 i=l

     4. A consumption process is any 3:-adapted one-dimensional process

                   onsumption pair ( h ,c) is called self-financing if the value
        process vhsatisfies the condition
                                           N
                            d v h ( t )=   C h,(t) dS,(t) - e ( t )dt,       (6.11)
                                           i=l
84                            PORTFOLIO DYNAMICS


       i.e. if
                                d v h(t) = h(t) dS(t) - c(t) dt.
Remark 6.2.1 Note that, in general, the portfolio h(t) is allowed to depend
                                                        <
upon the entire past price trajectory {S(U);u t). In the sequel we will almost
exclusively be dealing with Markovian portfolios, i.e. those portfolios for which
the value at time t depends only on today's date t and today's value of the price
vector S(t).
    For computational purposes it is often convenient to describe a portfolio in
relative terms instead of in absolute terms as above. In other words, instead of
specifying the absolute number of shares held of a certain stock, we specify the
relative proportion of the total portfolio value which is invested in the stock.
Definition 6.3 For a given portfolio h the corresponding relative portfolio u
is given by


where we have
                                      N

                                     i=l
The self-financing condition can now easily be given in terms of the relative
portfolio.
Lemma 6.4 A portfolio-consumption pair (h, c) is self-financing if and only if

                      dvh(t) = v h ( t )   c
                                           N


                                           i=l
                                                 ui(t)%
                                                      si(t)
                                                            - c(t) dt.
                                                              .
In the future we will need the following slightly technical result which roughly
says that if a process looks as if it is the value process of a self-financing portfolio,
then it actually is such a value process.
Lemma 6.5 Let c be a consumption process, and assume that there exist a scalar
process Z and a vector process q = (ql, . . ., qN) such that




Now define a portfolio h by
                                                   DIVIDENDS                                  85


            Then the value process vhis given by vh= 2,the pair ( h ,c ) is self-financing,
            and the corresponding relative portfolio u is given by u = q.
            Proof By definition the value process vh is given by V h ( t ) = h ( t ) S ( t ) , so
            eqns (6.15) and (6.16) give us




            Inserting (6.17) into (6.16) we see that the relative portfolio u corresponding to
    '
            hisgivenby u=q.Inserting (6.17) and (6.16) into (6.14) weobtain


                                    d v h ( t )=   C
                                                   i=l
                                                       hi (t)dS*(t)- ~ ( dt t),


        I which shows that (h, c) is self-financing.

            6.3 Dividends
            This section is only needed for Chapter 16. We again consider the setup and
            notation of Section 6.1, with the addition that the assets now may pay dividends.
            Definition 6.6 W e take as given the processes Dl (t),. . . , D N ( ~ )where
                                                                                   ,     Di (t)
            denotes the cumulative dividends paid to the holder of one unit of asset i
            during the interval (0,t].If Di has the structure

                                              dD;( t ) = 6;(t)dt,
        1


            for some phcess hi, then we say that asset i pays a continuous dividend yield.
               The dividends paid to the holder of one unit of asset i during ( s ,t] are thus
            given by D i ( t ) - D i ( s ) , and in the case of a dividend yield we have


i                                            Di (t)=     1  t
                                                                6,( s ) ds.

    I       We assume that all the dividend processes have stochastic differentials.
               We now go on to derive the dynamics of a self-financing portfolio, and as
            usual we define the value process V by



            The difference between the present situation and the nondividend paying case
            is that the budget equation (6.2) now has to be modified. We have to take
86                             PORTFOLIO DYNAMICS


into account the fact that the money at our disposal at time t now consists of
two terms:
       The value of our old portfolio, as usual given by

                                         h(t - At)S(t).

       The dividends earned during the interval (t - At, t]. These are given by

                  N
                 C hi (t - At) [Di(t) - Di(t - At)] = h(t - At)AD(t).
                 i=l

The relevant budget equation is thus given by

              h(t - At)S(t)    + h(t - At)AD(t) = h(t)S(t) + c(t)At.
    Going through the same arguments as in Section 6.1 we end up with the
following dynamics for a self-financing portfolio:

                         N                           N
               dV(t) =         hi (t) dSi (t)   +         hi (t) dDi (t) - c(t) dt,
                         i=l                        i=l


and we write this as a formal definition.
Definition 6.7
     1. The value process vh is given by
        I



                                                     N
                                     vh(t) =        C hi(t)Si(t).
                                                    d=l


     2. The (vector valued) gain process G is defined by

                                       G(t) = S ( t )      + D(t).
     3. The portfolio-consumption pair (h, c) is called self-financing if

                                           N
                             dvh(t) =     C hi(t) dGi(t) - ~ ( tdt.)
                                          2=1



     With notation as above we have the following obvious result.
                                                           EXERCISE                                                                                                              87


Lemma 6.8 I n terms of the relative portfolio weights, the dynamics of
a self-financing portfolio can be expressed as

                                                             N
                             dvh(t)= V ( t ).                      %(t)             dC.0 - c ( t )dt.                                                                (6.22)
                                                            i=l                      Si(t)


6.4 Exercise
Exercise 6.1 Work out the details in the derivation of the dynamics of
a self-financing portfolio in the dividend paying case.




                                                                                                                                                                             I
                                                                                                                             1                 .                 c




                                                                 ~1oidi)'llqx:' ,I+ 1              "           '                                   7       'a




                                             *I

                                         I        .




                         i       '                                                       , I , r,,kj2 J. (?)'&Is
                             I           ,            (


                                                                                              , ,:ryi"$t & I            -.
                   .                                                            ,                      v,,&:'
                                                                                        i c;ris 4;hi;;'il                                          . .                   ,
                                                                                                                                                                .i
                             c                                                                                                                                                   I


                                                                                                                                                   ,
         ,       +.i',                                                      =       * j*v,*#rl:   r,q+r?,      ,f f."                ' , ' I

                                                          ', 3       -.:+       "*>, , t"                   2_L7"rb,:
                                                                                                                ,I4              .
         ?   I     "
                                                                                                                                                       I             $           ,.



                                     1
                          ARBITRAGE PRICING

7.1 Introduction
In this chapter, we will study a special case of the general model set out in the
previous chapter. We will basically follow the arguments of Merton (1973), which
only require the mathematical machinery presented in the previous chapters. For
the full story see Chapter 10.
    Let us therefore consider a financial market consisting of only two assets: a
risk free asset with price process B, and a stock with price process S. What,
then, is a risk free asset?
Definition 7.1 The price process B is the price of a risk free asset i f it has
the dynamics
                           d B ( t ) = r ( t ) B ( t )dt,                 (7.1)
where r is any adapted process.
  The defining property of a risk free asset is thus that it has no driving
dW-term. We see that we also can write the B-dynamics as




so the B-process is given by the expression




A natural interpretation of a riskless asset is that it corresponds to a bank with
the (possibly stochastic) short rate of interest r . An important special case
appears when r is a deterministic constant, in which case we can interpret B as
the price of a bond.
   We assume that the stock price S is given by

               d S ( t ) = S(t)cr(t,S(t))d t   + S ( t ) a(t,S ( t ) ) d W ( t ) ,   (7.2)

where w is a Wiener process and a and a are given deterministic functions. The
reason for the notation W , instead of the simpler W, will become clear below.
The function a is known as the volatility of S, while cr is the local mean rate
of return of S .
                    CONTINGENT CLAIMS AND ARBITRAGE                                  89


 Remark 7.1.1 Note the difference between the risky stock price B, as modeled
 above, and the riskless asset B. The rate of return of B is formally given by




  This object is locally deterministic in the sense that, at time t , we have
  complete knowledge of the return by simply observing the prevailing short rate
; r(t).Compare this to the rate of return on the stock S. This is formally given by




  and this is not observable at time t. It consists of the terms a (t,S ( t ) ) and
  a (t, S ( t ) ) , which both are observable at time t , plus the "white noise" term
  ( d ~ ( t ) / d t which
                     ),    is random. Thus, as opposed to the risk free asset, the stock
, has a stochastic rate of return, even on the infinitesimal scale.
    The most important special case of the above model occurs when r , a and a
 are deterministic constants. This is the famous Black-Scholes model.
 Definition 7.2 The Black-Scholes model consists of two assets with dynam-
 ics given bg
                                                              - 'i
                          d B ( t ) = r B ( t )d t ,
                           d S ( t ) = aS(t)d t + a S ( t )d ~ ( t ) ,

  where r , a, and a are deterministic constants.

 7.2 Contingent Claims and Arbitrage
 We take as given the model of a financial market given by eqns (7.1)-(7.2),
 and we now approach the main problem to be studied in this book, namely the
 pricing of financial derivatives. Later we will give a mathematical definition, but
 let us at once present the single most important derivative-the European call
 option.
 Definition 7.3 A European call option with exercise price (or strike price)
 K and time of maturity (exercise date) T o n the underlying asset S is a
 contract defined by the following clauses.
    .   The holder of the option has, at time T , the right to buy one share of the
        underlying stock at the price K SEK from the underwriter of the option.
        The holder of the option is in no way obliged to buy the underlying stock.
        The right to buy the underlying stock at the price K can only be exercised
        at the precise time T .
                 I




90                            ARBITRAGE PRICING


    Note that the exercise price K and the time of maturity T are determined
at the time when the option is written, which for us typically will be at t = 0.
A European p u t option is an option which in the same way gives the holder
the right to sell a share of the underlying asset at a predetermined strike price.
For an American call option the right to buy a share of the underlying asset
can be exercised at any time before the given time of maturity. The common
factor of all these contracts is that they all are completely defined in terms of the
underlying asset S, which makes it natural to call them derivative instruments
or contingent claims. We will now give the formal definition of a contingent
claim.

Definition 7.4 Consider a financial market with vector price process S .
A contingent claim with d a t e of maturity (exercise date) T , also called
a T-claim, is any stochastic variable X E 3;.A contingent claim X is called a
simple claim if it is of the form

         X = @(S(T)).
                    The function @ is called the contract function.

   The interpretation of this definition is that a contingent claim is a contract,
which stipulates that the holder of the contract will obtain X SEK (which can be
positive or negative) at the time of maturity T. The requirement that X E 3;
simply means that, at time T, it will actually be possible to determine the
amount of money to be paid out. We see that the European call is a simple
contingent claim, for which the contract function is given by

                               @(x) = max [x - K,01.

The graphs of the contract functions for European calls and puts can be seen in
Figs 7.1 and 7.2. It is obvious that a contingent claim, e.g. like a European call
option, is a financial asset which will fetch a price on the market. Exactly how
much the option is worth on the market will of course depend on the time t and
on the price S ( t ) of the underlying stock. Our main problem is to determine a
"fair" (in some sense) price for the claim, and we will use the standard notation

                                      w t ;XI,

for the price process of the claim X ,where we sometimes suppress the X.In the
case of a simple claim we will sometimes write n(t;a).
    If we start at time T the situation is simple. Let us first look at the particular
case of a European call
     1. If S(T) 2 K we can make a certain profit by exercising the option in order
        to buy one share of the underlying stock. This will cost us K SEK. Then
                     CONTINGENT CLAIMS AND ARBITRAGE




                F IG. 7.1. Contract function. European call, K = 100




                FIG. 7.2. Contract function. European put, K = 100

!         we immediately sell the asset on the stock exchange at the price S(T),
          thus giving us a net profit of S(T) - K SEK.
       2. If S(T) < K the option has no value whatsoever.

    Thus we see that the only reasonable price ll (T) for the option at time T is
    given by
                             ll (T) = m a .[S(T) - K , 01.                  (7.6)
    92                            ARBITRAGE PRICING


    Exactly the same way we see that for a more general contingent claim X, we
    have the relation
                                  n(T;X) = X,                             (7.7)
    and in the particular case of a simple claim



    For any time t < T it is, however, far from obvious what the correct price is for
    a claim X. On the contrary it seems to be obvious that there is no such thing
    as a "correct" or "fair" price. The price of an option, like the price of any other
    asset, is of course determined on the (option) market, and should therefore be
    an extremely complex aggregate of, for example, the various attitudes to risk
    on the market and expectations about the future stock prices. It is therefore an
    extremely surprising fact that, given some fairly mild assumptions, there is a
    formula (the BlackScholes formula) which gives the unique price of the option.
    The main assumption we will make is that the market is efficient in the sense
    that it is free of arbitrage possibilities. We now define this new and central
E   concept.
    Definition 7.5 A n arbitrage possibility on a financial market is a sev-financed
    portfolio h such that




    W e say that the market is arbitrage free if there are no arbitrage possibilities.

        An arbitrage possibility is thus essentially equivalent to the possibility of
    making a positive amount of money out of nothing without taking any risk. It
    is thus essentially a riskless money making machine or, if you will, a free lunch
    on the financial market. We interpet an arbitrage possibility as a serious case of
    mispricing in the market, and our main assumption is that the market is efficient
    in the sense that no arbitrage is possible.

    Assumption 7.2.1 W e assume that the price process IT(t) is such that there
    are no arbitrage possibilities on the market consisting of ( B ( t ) , S(t), II (t)).

       A natural question now is how we can identify an arbitrage possibility. The
    general answer to this question requires quite a lot of fairly heavy probabilistic
    machinery which the more advanced reader will find in Chapter 10. Happily
    enough there is a partial result which is sufficient for our present purposes.
                     CONTINGENT CLAIMS AND ARBITRAGE                                93


    Proposition 7.6 Suppose that there exists a self-financed portfolio h, such that
    the value process vh has the dynamics

                                d v h ( t )= k(t)vh(t)dt,                       (7.12)

    where k is an adapted process. Then it must hold that k(t) = r(t) for all t, or
    there exists an arbitrage possibility.
  Proof We sketch the argument, and assume for simplicity that k and r are
  constant and that k > r. Then we can borrow money from the bank at the
I rate r. This money is immediately invested in the portfolio strategy h where it
  will grow at the rate k with k > r. Thus the net investment at t = 0 is zero,
  whereas our wealth at any time t > 0 will be positive. In other words we have an
I arbitrage. If on the other hand r > k, we sell the portfolio h short and invest this
  money in the bank, and again there is an arbitrage. The cases with nonconstant
  and nondeterministic r and k are handled in the same way.
       The main point of the above is that if a portfolio has a value process whose
  dynamics contain no driving Wiener process, i.e. a locally riskless porfolio,
  then the rate of return of that portfolio must equal the short rate of interest.
  To put it in another way, the existence of a portfolio h is for practical purposes
  equivalent to the existence of a bank with k as its short rate of interest. We can
  then paraphrase the lemma above by saying that on an arbitrage free market
  there can only be one short rate of interest.
       We now return to the question of how the price process H(t; X) for a con-
  tingent claim X can behave, and the main idea is the following. Since the claim
  is defined entirely in terms of the underlying asset(s), we ought to be able to
  price it in terms of the price of the underlying asset(s) if arbitrage possibilities
  are to be avoided. Thus we are looking for a way to price the derivative in a way
  which is consistent with the price process of the underlying asset.
I      To take a simple example, it is quite obvious that for a European call we
i must have the relation ll (t) 5 S(t) in an arbitrage free market, because no
  one in their right mind will buy an option to buy a share at a later date at
  price K if the share itself can be bought cheaper than the option. For a more
  formal argument, suppose that at some time t we actually have the relation
  n ( t ) > S(t). Then we simply sell one option. A part of that money can be
  used for buying the underlying stock and the rest is invested in the bank (i.e.
  we buy the riskless asset). Then we sit down and do nothing until time T. In
  this way we have created a self-financed portfolio with zero net investment at
  time t. At time T we will owe max [S(T) - K, 0] to the holder of the option, but
  this money can be paid by selling the stock. Our net wealth at time T will thus
  be S(T) - max [S(T) - K, 01, which is positive, plus the money invested in the
  bank. Thus we have an arbitrage.
       It is thus clear that the requirement of an arbitrage free market will impose
  some restrictions on the behavior of the price process H(t; X). This in itself is not
        94                           ARBITRAGE PRICING


        terribly surprising. What is surprising is the fact that in the market specified by
        eqns (7.1)-(7.2) these restrictions are so strong as to completely specify, for any
        given claim X, the unique price process n(t; X) which is consistent with absence
        of arbitrage. For the case of simple contingent claims the formal argument will
        be given in the next section, but we will now give the general idea.
            To start with, it seems reasonable to assume that the price II(t; X) at time
I
        t in some way is determined by expectations about the future stock price S(T).
        Since S is a Markov process such expectations are in their turn based on the
        present value of the price process (rather than on the entire trajectory on [0, t]).
    I   We thus make the following assumption.
        Assumption 7.2.2 We assume that
          1. The derivative instrument in question can be bought and sold on a market.
          2. The market is free of arbitrage.
          3. The price process for the derivative asset is of the form


                where F is some smooth function.
            Our task is to determine what F might look like if the market consisting of
        S(t), B(t) and II(t; X) is arbitrage free. Schematically we will proceed in the
        following manner:
            1. Consider a, a, a, F, and r as exogenously given.
            2. Use the general results from Section 6.2 to describe the dynamics of the
               value of a hypothetical self-financed portfolio based on the derivative
               instrument and the underlying stock (nothing will actually be invested
               in or loaned by the bank).
            3. It turns out that, by a clever choice, we can form a self-financed portfo-
               lio whose value process has a stochastic differential without any driving
               Wiener process. It will thus be of the form (7.12) above.
            4. Since we have assumed absence of arbitrage we must have k = r.
            5. The condition k = r will in fact have the form of a partial differential
               equation with F as the unknown function. In order for the market to be
               efficient F must thus solve this PDE.
            6. The equation has a unique solution, thus giving us the unique pricing
               formula for the derivative, which is consistent with absence of arbitrage.

        7.3 The Black-Scholes Equation
        In this section we will carry through the schematic argument given in the previous
        section. We assume that the a priori given market consists of two assets with
        dynamics given by
                       dB(t) = rB(t) dt,                                            (7.14)
                       dS(t) = S(t)a (t, S(t)) dt   + S(t)u (t, S(t)) d ~ ( t ) ,   (7.15)
                            THE BLACK-SCHOLES EQUATION                                  95


      where the short rate of interest r is a deterministic constant. We consider a
      simple contingent claim of the form



      and we assume that this claim can be traded on a market and that its price
      process II (t) = II(t; @) has the form



      for some smooth function F. Our problem is to find out what F must look like
      in order for the market [S(t), B(t), II (t)] to be free of arbitrage possibilities.
 I
          We start by computing the price dynamics of the derivative asset, and the
      It8 formula applied to (7.17) and (7.15) g'ives us


 I
                         dII (t) = a, (t)II (t) dt   + a, (t)H (t) d ~ ( t ) ,       (7.18)
 ai   where the processes a,(t) and a,(t) are defined by




                                          -


      Here subscripts denote partial derivatives, and we have used a shorthand
      notation of the form




      and similarly for the other terms above.
          Let us now form a portfolio based on two assets: the underlying stock and
      the derivative asset. Denoting the relative portfolio by (us, u,) and using eqn
      (6.13) we obtain the following dynamics for the value V of the portfolio.

                     d~ = V{U, [ a d t + u d ~ +u,
                                               ]   [a,dt + a T d w ] )               (7.21)

/1    where we have suppressed t. We now collect dt- and d l - t e r m s to obtain

                      dV = V [u,a    + u,a,] dt + V [usu+ u,ur] d l .                (7.22)

      The point to notice here is that both brackets above are linear in the arguments
      us and u,. Recall furthermore that the only restriction on the relative portfolio
      is that we must have
                                        U, + u r = 1,
96                                ARBITRAGE PRICING


for all t. Let us thus define the relative portfolio by the linear system of equations

                                            us +u, = 1,
                                      u,u   + U,UT = 0.
Using this portfolio we see that by its very definition the driving dw-term in
the V-dynamics of eqn (7.22) vanishes completely, leaving us with the equation

                                 dV = V [u,a    + u,a,] dt.
Thus we have obtained a locally riskless portfolio, and because of the requirement
that the market is free of arbitrage, we may now use Proposition 7.6 to deduce
that we must have the relation

                                      usa   + u,a, = r.
This is thus the condition for absence of arbitrage, and we will now look more
closely at this equation.
    It is easily seen that the system (7.23)-(7.24) has the solution
                                                 0,
                                        us = -
                                             u, -a'
                                                -u
                                        u, = -,
                                             a, - a

which, using (7.20), gives us the portfolio more explicitly as

                                           S(t)Fs(t, SO))
                                 =
                                     S(t)F.(t, S(t)) - F(t, S(t)) '
                                            -F(t, S(t))
                           %(t) =
                                     S(t)Fs(t, S(t)) - F(t, S(t)) '
Now we substitute (7.19), (7.29) and (7.30) into the absence of arbitrage
condition (7.26). Then, after some calculations, we obtain the equation

Ft (t, S(t))   + rS(t)F' (t, S(t))+ ;a2 (t, S(t)) S 2 ( t ) ~ s(t,s S(t)) - rF (t, S(t)) = 0.
Furthermore, from the previous section we must have the relation

                                      II (T) = @(S(T)).
These two equations have to hold with probability 1 for each fixed t. Furthermore
it can be shown that under very weak assumptions (which trivially are satisfied
in the Black-Scholes model) the distribution of S(t) for every fixed t > 0 has
                             THE BLACK-SCHOLES EQUATION                               97


    support on the entire positive real line. Thus S(t) can take any value whatsoever,
    eo F has to satisfy the following (deterministic) PDE.

              Ft(t, s)   + rsF,(t, s) + !js2a2(t,s)F,,(t, s) - r F ( t ,s) = 0,
                                                                 F(T, s) = @(s).

        Summing up these results we have proved the following proposition, which is
    in fact one of the most central results in the book.
     Theorem 7.7 (Black-Scoles Equation) Assume that the market is specified
     by eqns(7.14)-(7.15) and that we want to price a contingent claim of the form
    (7.16). Then the only pricing function of the form (7.17) which is consistent
     with the absence of arbitrage is when F is the solution of the following boundary
     value problem in the domain [0,TI x R+.

              Ft(t,s)    + rsF,(t, s) + ;s2a2(t, s)F,,(t, s) - rF(t, s) = 0,       (7.31)
                                                                 F(T, s) = @(s).   (7.32)

        Before we go on to a closer study of the pricing equation (7.31) let us make
    a few comments.
        First, it is important to stress the fact that we have obtained the price of the
    claim X in the form ll(t; X) = F ( t , S(t)), i.e. the price of the claim is given as
    a function of the price of the underlying asset S. This is completely in line with
    the basic idea explained earlier, that the pricing of derivative assets is a question
    of pricing the derivative in a way which is consistent with the price of the
    underlying asset. We are thus not presenting an absolute pricing formula for
    X . On the contrary, derivative pricing is all about relative pricing, i.e. pricing
    the derivative asset in terms of the price of the underlying asset. In particular
    this means that in order to use the technique of arbitrage pricing at all we must
    have one or several underlying price processes given a priori.
        Second, a word of criticism. At a first glance our derivation of the pricing
    equation (7.31) seems to be fairly convincing, but in fact it contains some rather
    weak points. The logic of the argument was that we assumed that the price
    of the derivative was a function F of t and S(t). Using this assumption we
    then showed that in an arbitrage free market F had to satisfy the Black-Scholes
    equation. The question now is if we really have good reasons to assume that
    the price is of the form F ( t , S(t)). The Markovian argument given above sounds
    good, but it is not totally convincing.
        A much more serious objection is that we assume that there actually exists a
'   market for the derivative asset, and in particular that there exists a price process
I   for the derivative. This assumption of an existing market for the derivative is
    crucial for the argument since we are actually constructing a portfolio based on
    the derivative (and the underlying asset). If the derivative is not traded then the
98                            ARBITRAGE PRICING


portfolio cannot be formed and our argument breaks down. The assumption of
an existing price for the derivative is of course innocent enough in the case of a
standard derivative, like a European call option, which de facto is traded in large
volumes. If, however, we want to price an OTC ("over the counter") instrument,
i.e. an instrument which is not traded on a regular basis, then we seem to be in
big trouble.
     Happily enough there is an alternative argument for the derivation of the
pricing equation (7.31), and this argument (which will be given below) is not
open to the criticism above. The bottom line is that the reader can feel safe:
equation (7.31) really is the "correct" equation.
     Let us end by noting an extremely surprising fact about the pricing equa-
tion, namely that it does not contain the local mean rate of return a(t, s) of
the underlying asset. In particular this means that, when it comes to pricing
derivatives, the local rate of return of the underlying asset plays no role whatso-
ever. The only aspect of the underlying price process which is of any importance
is the volatility u(t, s). Thus, for a given volatility, the price of a fixed derivat-
ive (like a European call option) will be exactly the same regardless of whether
the underlying stock has a lo%, a 50%, or even a -50% rate of return. At a
first glance this sounds highly counter-intuitive and one is tempted to doubt the
whole procedure of arbitrage pricing. There is, however, a natural explanation
for this phenomenon, and we will come back to it later. At this point we can only
say that the phenomenon is closely connected to the fact that we are pricing the
derivative in terms of the price of the underlying asset.

7.4 Risk Neutral Valuation
Let us again consider a market given by the equations

                dB(t) = rB(t) dt,
                dS(t) = S(t)a (t, S(t)) dt   + S(t)a (t, S(t)) d ~ ( t ) ,
and a contingent claim of the form X = 3 ( S ( T ) ) .Then we know that the
arbitrage free price is given by ll(t; *) = F(t, S(t))where the function F is the
solution of the pricing equations (7.31)-(7.32). We now turn to the question of
actually solving the pricing equation and we notice that this equation is precisely
of the form which can be solved using a stochastic representation formula B la
Feynman-KG. Using the results from Section 5.5 we see that the solution is
given by
                         F(t, s) = e-r(T-t) E ~ ' [*(X(T))I
                                                  S
                                                            9


where the X process is defined by the dynamics

                  dX(u) = rX(u) du    + X(U)U(U,X(u)) dW(u),
                    X(t) = s,
                                     RISK NEUTRAL VALUATION                                      99



    I   where W is a Wiener process. The important point to note here is that the SDE
    I
        (7.36) is of precisely the same form as that of the price process S . The only, but
        important, change is that whereas S has the local rate of return a, the X-process
        has the short rate of interest r as its local rate of return.
            The X-process above is logically just a technical tool, defined for the moment,
1       and in particular we can name it as we please. In view of the resemblance between
1       X and S it is rather tempting to call it S instead of X . This is perfectly acceptable
        as long as we do not confuse the "real" S-process of (7.34) with the "new"
        S-process, and one way to achieve this goal is by the following procedure.
            Let us agree to denote the "objective" probability measure which governs our
        real model (7.33)-(7.34) by the letter P. Thus we say that the P-dynamics of
        the S-process are that of (7.34). We now define another probability measure Q
        under which the S-process has a different probability distribution. This is done
        by defining the Q-dynamics of S as

                              d S ( t ) = r S ( t )dt   + S ( t ) a(t,S ( t ) ) d W ( t ) ,   (7.38)

        where W is a Q-Wiener process. In order to distinguish the measure under which
        we take expectations we introduce some notational conventions.
        Notation convention 7.4.1 For the rest of the text, the following conventions

           a We identify the expectation operator by letting E denote expectations taken
              under the P-measure whereas EQ denotes expectations taken under the

                                                 w will denote a P-Wiener process,
           a We identify the Wiener process. T h w
              whereas W will denote a Q-Wiener process.
            The convention on W has the advantage that it is possible, at a glance, to
        decide under which measure a certain SDE is given. We will work much more
        often under Q than under P, and this is the reason why the Q-Wiener process
/       W has a simpler notation than the P-Wiener pricess W. Using this notation we
        may now state the following central result for derivative pricing.
        Theorem 7.8 (Risk Neutral Valuation) The arbitrage free price of the
        claim 9 ( S ( T ) )is given by n(t;9 ) = F ( t , S ( t ) ) , where F is given by the formula

                                   F (t, s) = e-r(T-t) E$ [@(S(T))],                          (7.39)

        where the Q-dynamics of S are those of (7.38).
            There is a natural economic interpretation of the formula (7.39). We see
        that the price of the derivative, given today's date t and today's stock price s,
        is computed by taking the expectation of the final payment E$ [ @ ( S ( T ) )and
                                                                                     ]
        then discounting this expected value to present value using the discount factor
        e-r(T-t). The important point to note is that when we take the expected value we
100                            ARBITRAGE PRICING


are n o t to do this using the objective probability measure P. Instead we shall
use the Q-measure defined in (7.38). This Q-measure is sometimes called the
risk adjusted measure but most often it is called the martingale measure,
and this will be our terminology. The reason for the name is that under Q the
normalized process ( S ( t ) / B ( t ) )turns out to be a Q-martingale. In the deeper
investigation of arbitrage pricing, which will be undertaken in Chapter 10, the
Q-measure is the fundamental object of study. We formulate the martingale
property as a separate result.
Proposition 7.9 (The Martingale Property) In the Black-Scholes model,
the price process II ( t ) for every traded asset, be it the underlying or derivative
asset, has the property that the normalized price process



is a martingale under the measure Q.
Proof    See the exercises.                                                        CI
    The formula (7.39) is sometimes referred to as the formula of risk neutral
valuation. Suppose that all agents are risk neutral. Then all assets will command
a rate of return equal to the short rate of interest, i.e. in a risk neutral world
the stock price will actually have the Q-dynamics above (more precisely, in this
case we will have Q = P). Furthermore, in a risk neutral world the present value
of a future stochastic payout will equal the expected value of the net payments
discounted to present value using the short rate of interest. Thus formula (7.39)
is precisely the kind of formula which would be used for valuing a contingent
claim in a risk neutral world. Observe, however, that we do not assume that
the agents in our model are risk neutral. The formula only says that the value
of the contingent claim can be calculated as if we live in a risk neutral world.
In particular the agents are allowed to have any attitude to risk whatsoever, as
long as they all prefer a larger amount of (certain) money to a lesser amount.
Thus the valuation formula above is preference free in the sense that it is valid
regardless of the specific form of the agents' preferences.

7.5 T h e Black-Scholes Formula
In this section we specialize the model of the previous section to the case of the
Black-Scholes model,
                         d B ( t ) = r B ( t )dt,                              (7.40)


where cr and a are constants. From the results of the previous section we know
that the arbitrage free price of a simple claim @ ( S ( T ) )is given by
                       THE BLACK-SCHOLES FORMULA


where the Q-dynamics of S are given by

                       dS(u) = rS(u) du     + oS(u) dW(u),                     (7.43)
                         S(t) = s.                                             (7.44)

In this SDE we recognize our old friend GBM from Section 5.2. Using the results
from Section 5.2 we can thus write S(T) explicitly as

              S(T)= sexp {(r - $a2)(T - t j + o (W(T) - W(t))) .               (7.45)

Thus we have the pricing formula

                                          J__ (seZ) f (2) dz,
                                            00

                     F(t, s) = e-r(T-t)          @                             (7.46)

where Z is a stochastic variable with the distribution

                         N [(r - f 02) (T - t), o     m    ],

and f is the corresponding density function.
    Formula (7.46) is an integral formula which, for a general choice of contract
function a, must be evaluated numerically. There are, however, a few particular
cases where we can evaluate (7.46) more or less analytically, and the best known
of these is the case of a European call option, where @ has the form @(x) =
max [x - K, 01. In this case we obtain


                                                     L(f)
                                                      00

;   E?~ [max [seZ - K, 0]] = 0 . Q (seZ 5 K ) +            (seZ- K ) f (z) dz. (7.47)

After some standard calculations we are left with the following famous result
which is known as the Black-Scholes formula.
Proposition 7.10 The price of a European call option with strike price K and
time of maturity T is given by the formula II (t) = F(t, S(t)), where

                  F(t, s) = s N [dl(t, s)] - e - r ( T - t ) ~[d2(t,
                                                                ~ s)].         (7.48)

Here N is the cumulative distribution function for the N [O,1] distribution and

              dl(t, 3) = o      m {ln   (a)+ +   (r     iu2)    (T - t)   ),   (7.49)

              d2(t,S) = dl(t, s).- o m .                                       (7.50)

   The graph of the Black-Scholes pricing function (the unit of time is chosen
to be one year) is shown in Fig. 7.3.
                             ARBITRAGE PRICING




              FIG. 7.3. The Black-Scholes price of a call option:
                        K = 100, a = 0.2, T - t = 0.25


7.6 Options on Futures
The purpose of this section is to derive the Black formulas for options written
on a futures contract. Our discussion here will be rather brief, and for more
institutional and technical information the reader is referred to Chapter 26 (and
the Notes), where the contracts are discussed in more detail.

7.6.1 Forward Contracts
Consider a standard Black-Scholes model, a simple T-claim X = @(ST),and
assume that we are standing at time t. A forward contract on X, made at t , is
a contract which stipulates that the holder of the contract pays the deterministic
amount K at the delivery date T, and receives the stochastic amount X at T.
Nothing is paid or received at the time t, when the contract is made. Note that
forward price K is determined already at time t. It is customary to use the
notation K = f (t; T, X), and our primary concern is to compute f (t;T, X).
    This is, however, easily done. We see that the entire forward contract is
a contingent T-claim Y of the form




and, by definition, the value of Y at the time t when the contract is made equals
zero. Thus we have
                                n ( t ;x - K ) = o,
which leads to
                               n(t;X) = n ( t ;K ) .        rcjY 8i (78
                                 OPTIONS ON FUTURES                                   103


    Using risk neutral valuation we immediately have II(t; K ) = e - T ( T - t ) ~and
i n(t; x)= e-~(T-t) x E?', [XI, so we have proved the first part of the following
    result. The second part is left as an exercise.
    Proposition 7.11 The forward price f (t; T, X), contracted at t, on the T-claim
    X is given by
                             f (t; T, X) = EfS[XI.                            (7.51)
    In particular, if X = ST the corresponding forward price, denoted b y f (t; T), is
    given by
                                  f (t; T ) = er(T-t)~t.                        (7.52)
    Remark 7.6.1 Note the difference between the forward price f (t; T, X) which
    is a sum to be paid at T, for a forward contract entered at time t, and the spot
    price of the entire forward contract. This latter price is zero at the time t when
    the contract is made, but at any subsequent time s > t it will typically have a
1   nonzero value.

    7.6.2 Futures Contracts and the Black Formula
    With the same setup as the previous section we will now discuss a futures
    contract on X. This contract is very close to the corresponding forward contract
    in the sense that it is still a contract for the delivery of X at T. The difference is
    that all the payments, from the holder of the contract to the underwriter, are no
    longer made at T. Let us denote the futures price by F(t; T, X); the payments
    are delivered continuously over time, such that the holder of the contract over
                           +
    the time interval [s,s As] receives the amount

                               F(s   + As; T, X) - F(s; T, X)
    from the underwriter. Finally the holder will receive X, and pay F(T; T, X), at
    the delivery date T. By definition, the (spot) price (at any time) of the entire
    futures contract equals zero. Thus the cost of entering or leaving a futures con-
    tract is zero, and the only contractual obligation is the payment stream described
    above. See Chapter 26 for more details, and for a proof of the following result.
    Proposition 7.12 If the short rate is deterministic, then the forward and the
    futures price processes coincide, and we have



        We will now study the problem of pricing a European call option, with exer-
    cise date T , and exercise price K , on an underlying futures contract. The futures
    contract is a future on S with delivery date TI, with T < TI. Options of this
    kind are traded frequently, and by definition the holder of this option will, at the
104                           ARBITRAGE PRICING


exercise time T, obtain a long position in the futures contract, plus the stochastic
amount
                            X = max[F(T;T I )- K, 01.
Since the spot price of the futures contract equals zero, we may, for pricing
purposes, forget about the long futures position embedded in the option, and
identify the option with the claim in (7.54).
   We now go on to price the futures option, and we start by using
Proposition 7.12 and eqn (7.52) in order to write

                     X = e'(Tl -TI          [ST- e-'(Tl     -TI K,   01.
Thus we see that the futures option consists of e'(Tl-T) call options on the
underlying asset S, with exercise date T and exercise price e-r(T1-T)~.Denoting
the price at T of the futures option by c, the stock price at t by s, and the futures
price F ( t ;T I ) by F , we thus have, from the Black-Scholes formula,

               ,=       -TI
                    e~(Tl     IS   [ d l ]- e-'(~-f Ie-'(T1 -TI KN [ d 2 ] ]

where dl and d2 are obtained from the Black-Scholes dl and dz by replacing k
with e-r(Tl-T)~. Finally we may substitute s = ~ e - ' ( ~ l - ~and
                                                                 ) , simplify, to
obtain the s*called "Black-76 formula".
Proposition 7.13 (Black's formula) The price, at t , of a European call
option, with exercise date T and exercise price K , on a futures contract (on
an underlying asset price S ) with delivery date TI is given by

                         C = e-r(T-t)   [ F N [ d l ]- K N [ d 2 ] ] ,

where F is the fiturns price F = F ( T ;T I ) , and

                                   ln (f)   + 3 a 2 (-~t )
                            dl =
                                            u   r   n
                                                              ,
                            d2 = dl - 0-.

7.7 Volatility
In order to be able to use the theory derived above in a concrete situation, we
need to have numerical estimates of all the input parameters. In the Black-
Scholes model the input data consists of the string s , r , T, t , and u.Out of these
five parameters, s, r, T, and t can be observed directly, which leaves us with the
problem of obtaining an estimate of the volatility u. Here there are two basic
approaches, namely to use "historic volatility" or "implied volatility".
                                      VOLATILITY




    Suppose that we want to value a European call with six months left to maturity.
'
    An obvious idea is to use historical stock price data in order to estimate u. Since,
    in real life, the volatility is not constant over time, one standard practice is to
    use historical data for a period of the same length as the time to maturity, which
    in our case means that we use data for the last six months.
        In order to obtain an estimate of u we assume that we have the stand-
    ard Black-Scholes GBM model (7.4) under the objective measure P. We
                                                       +
    sample (observe) the stock price process S at n 1discrete equidistant points
    to,tl, . . . , t,, where At denotes the length of the sampling interval, i.e. At =
    ti - ti-1.
        We thus observe S(to),. . . , S(t,), and in order to estimate u we use the fact
                                                                          .
    that S has a log-normal distribution. Let us therefore define € 1 . . . . E, bv




    Fkom (5.15) we see that 51,. . . ,En are independent, normally distributed random


                                  E [<,I = (a - i u 2 ) At,

                                 Var[<,]= u 2 ~ t .

    Usine: elementarv statistical theorv we see that an estimate of u is given bv




    where the sample variance S! is given by




    The standard deviation. D , of the estimate u* is a~~roximativelv
                                                                   given bv
106                           ARBITRAGE PRICING


7.7.2 Implied Volatility
Suppose again that we want to value a European call with six months left to
maturity. An argument against the use of historical volatility is that in real life
volatility is not constant, but changes over time, and thus we want an estimate
of the volatility for the coming six months. Using historical volatility we will,
however, only obtain an estimate for the volatility over the past six months. If,
furthermore, our objective is to price our option consistently with respect to
other assets which are already priced by the market, then we really should use
the market expectation of the volatility for the next six months.
    One way of finding the market expectation of the volatility is by getting mar-
ket price data for another six month "benchmark" option, written on the same
underlying stock as the option which we want to value. Denoting the price of
the benchmark option by p, the strike price by K , today's observed value of
the underlying stock by s, and writing the Black-Scholes pricing formula for
European calls by c(s, t, T, r, a, K), we then solve the following equation for a

                               p = C(S,t, T, r, a, K).

In other words, we try to find the value of a which the market has implicitly
used for valuing the benchmark option. Ths value of a is called the implied
volatility, and we then use the implied volatility for the benchmark in order to
price our original option. Put another way, we price the original option in terms
of the benchmark.
    We note that implied volatilities can be used to test (in a nonstandard way)
the Black-Scholes model. Suppose, e.g. that we observe the market prices of a
number of European calls with the same exercise date on a single underlying
stock. If the model is correct (with a constant volatility) then, if we plot implied
volatility as a function of the exercise price, we should obtain a horizontal straight
line. Contrary to this, it is often empirically observed that options far out of
the money or deep into the money are traded at higher implied volatilities than
options at the money. The graph of the observed implied volatility function thus
often looks like the smile of the Cheshire cat, and for this reason the implied
volatility curve is termed the volatility smile.
Remark 7.7.1 A call option is said to be "in the money" at time t if St > K ,
and "out of the money" if St < K. For put options the inequalities are reversed.
If St = K the option is said to be "at the money".

7.8 American options
Up to now we have assumed that a contract, like a call option, can only be
exercised exactly at the exercise time T. In real life a large number of options
can in fact be exercised at any time prior to T. The choice of exercise time is
thus left to the holder of the contract, and a contract with this feature is called
an American contract.
                              AMERICAN OPTIONS                                    107


    To put it more formally, let us fix a final exercise date T and a contract
function @. The European version of this contract will, as usual, pay the amount
@(ST)at time T to the holder of the contract. If the contract, on the other hand,
is of the American type, then the holder will obtain the amount @ ( S t )if heishe
chooses to exercise the contract at time t. The situation is complicated further by
the fact that the exercise time t does not have to be chosen a priori (i.e. at t = 0).
It can be chosen on the basis of the information generated by the stock price
process, and thus the holder will in fact choose a random exercise time r .
The exercise time (or rather exercise strategy) T has to be chosen such that the
decision on whether to exercise the contract at time t or not, depends only upon
the information generated by the price process up to time t. The mathematical
formulation of this property is in terms of so called "stopping times", but we
will not go further into this subject.
    American contracts are thus more complicated to analyze than their
European counterparts, since the holder of the contract has to decide on an
optimal exercise strategy. Mathematically this means that we have to solve
the "optimal stopping problem"

                             m u [EQ [e-"@(ST)]],

where T is allowed to vary over the class of stopping times. Problems of this kind
are quite hard to solve, and analytically they lead to so called "free boundary
value problems" (or variational inequalities) instead of the corresponding para-
bolic PDEs for the European counterparts. The mathematics of this lies outside
the scope of this book, but it may be of interest to know that for American
contracts practically no analytical formulas are at hand. See the Notes below for

    One situation, however, is very easy to analyze, even for American contracts,
and that is the case of an American call option on a nondividend paying under-
lying stock. Let us consider an American call option with final exercise date T
and exercise price K. We denote the pricing function for the American option
by C(t, s) and the pricing function for the corresponding European option (with
the same T and K) by c(t, s).
    First, we note that we have (why?) the trivial inequality

                                  C ( t ,s) L c(t, s).                         (7.56)

Second, we have, for all t < T, the less obvious inequality

                              c(t, s) 2 s - ~ e - ' ( ~ - ~ ) .                (7.57)

To see why this inequality holds it is sufficient to consider two portfolios, A
and B. A consists of a long position in the European option, whereas B consists
of a long position in the underlying stock and a loan expiring at T, with face
108                           AItBITRAGE PRICING


value K . Denoting the price of A and B at any time t by At and Bt respectively,
it is easily seen that AT 2 BT regardless of the value of ST (analyze the two
cases ST 2 K and ST < K). In order to avoid arbitrage possibilities we then
must have At 2 Bt for all t 5 T, which is precisely the content of (7.57).
    Furthermore, assuming a positive rate of interest, we have the trivial
inequality
                        s - ~ e - ' ( ~ ->
                                         ~ )s - K, Vt < T,
so we end up with the inequality
                             C(t, s) > s - K ,    W < T.
   On the left-hand side we have the value of the American option at time t,
whereas the right-hand side gives us the value of actually exercising the option at
time t. Since the value of the option is strictly greater than the value of exercising
the option, it can thus not be optimal to exercise the option at time t. Since this
holds for all t < T , we see that it is in fact never optimal to exercise the option
before T, and we have the following result.
Proposition 7.14 Assume that r > 0. For an American call option, written on
an underlying stock without dividends, the optimal exercise time I- is given by
I- = T. Thw the pnce of the Arnericczn option coincides with the price of the
corresponding European option.
   For American call options with discrete dividends, the argument above can
be extended to show that it can only be optimal to exercise the option either at
the final time T or at one of the dividend times. The American put option (even
without dividends) presents a hard problem without an analytical solution. See
the Notes below.

7.9 Exercises
Exercise 7.1 Consider the standard Blacl-Scholes model and a T-claim X of
the form X = 3(S(T)). Denote the corresponding arbitrage free price process
by II (t).
      (a) Show that, under the martingale measure Q, ll (t) has a local rate of
          return equal to the short rate of interest r . In other words show that
          ll (t) has a differential of the form
                             dII (t) = r . II (t) dt   + g(t) dW(t).
          Hint: Use the Q-dynamics of S together with the fact that F satisfies
          the pricing PDE.
      (b) Show that, under the martingale measure Q, the process Z(t) =
          (II (t) /B(t)) is a martingale. More precisely, show that the stochastic
          differential for Z has zero drift term, i.e. it is of the form
                                 dZ(t) = Z(t)uz(t)dW (t).
                                   EXERCISES                                    109


       Determine also the diffusion process az(t) (in terms of the pricing
       function F and its derivatives).
Exercise 7.2 Consider the standard Black-Scholes model. An innovative com-
pany, F&H I N C , has produced the derivative "the Golden Logarithm",
henceforth abbreviated as the GL. The holder of a GL with maturity time
T, denoted as GL(T), will, at time T, obtain the sum lnS(T). Note that if
S(T)< 1 this means that the holder has to pay a positive amount to F&H INC.
Determine the arbitrage free price process for the GL(T).
Exercise 7.3 Consider the standard Black-Scholes model. Derive the Black-
Scholes formula for the European call option.
Exercise 7.4 Consider the standard Black-Scholes model. Derive the arbitrage
free price process for the T-claim X where X is given by X = {s(T)}@. Here P
is a known constant.
    Hint: For this problem you may find Exercises 5.5 and 4.4 useful.
Exercise 7.5 A so called binary option is a claim which pays a certain amount
if the stock price at a certain date falls within some prespecified interval. Oth-
erwise nothing will be paid out. Consider a binary option which pays K SEK to
the holder at date T if the stock price at time T is in the inerval [a,PI. Determine
the arbitrage free price. The pricing formula will involve the standard Gaussian
cumulative distribution function N.
Exercise 7.6 Consider the standard Black-Scholes model. Derive the arbitrage
free price process for the claim X where X is given by X = (S(Tl)/S(To)). The
times To and TI are given and the claim is paid out at time TI.
Exercise 7.7 Consider the American corporation ACME INC. The price
process S for ACME is of course denoted in US$ and has the P-dynamics

                             d S= a S d t +aSdw1,

where a and a are known constants. The currency ratio SEK/US$ is denoted by
Y and Y has the dynamics

                             dY = PY dt   + 6Y dw2,
where w2 is independent of w1. The broker firm F&H has invented the deriv-
ative "Euler". The holder of a T-Euler will, at the time of maturity T, obtain

                                x = ln [{z(T)}~]
in SEK. Here Z(t) is the price at time t in SEK of the ACME stock.
    Compute the arbitrage free price (in SEK) at time t of a T-Euler, given
that the price (in SEK) of the ACME stock is z. The Swedish short rate is
                                            --




110                         ARBITRAGE PRICING


Exercise 7.8 Prove formula (7.52).
Exercise 7.9 Derive a formula for the value, at s, of a forward contract on the
T-claim X, where the forward contract is made at t, and t < s < T.

7.10 Notes
The classics in the field are Black and Scholes (1973), and Merton (1973). The
modern martingale approach to arbitrage pricing was developed in Harrison and
Kreps (1981), and Harrison and Pliska (1981). A deep study of the connections
between (various formulations of) absence of arbitrage and the existence of a
martingale measure can be found in Delbaen and Schachermeyer (1994).
    For a wealth of information on forward and futures contracts, see Hull (1997)
and DufFie (1989). Black's formula was derived in Black (1976). For American
options see Barone-Adesi and Elliott (1991), Geske and Johnson (1984) and
Musiela and Rutkowski (1997). The standard reference for optimal stopping           I
problems is Shiryayev (1978), and a very readable exposition can be found in
Bksendal (1995). Option pricing with stochastic volatility is discussed in Hull     ,
and White (1987), and Leland (1985) studies the consequences of introducing
transaction costs.
                                                                              "$4'   "




                                         8                                               c

                                                                                         Y
                   COMPLETENESS AND HEDGING

8.1 Introduction
In the previous chapter we noticed that our derivation of the pricing
equation (7.31) was somewhat unsatisfactory, and a major criticism was that
we were forced to assume that the derivative asset a priori possessed a price
process and actually was traded on the market. In this chapter we will look
at arbitrage pricing from a somewhat different point of view, and this altern-
ative approach will have two benefits. First it will allow us to dispose of the
annoying assumption above that the derivative is actually traded, and second it
will provide us with an explanation of the surprising fact that the simple claims
investigated earlier can be given a unique price. For a more detailed discussion
see Chapters 10, 12, and 15.
    We start with a fairly general situation by considering a financial market with
a price vector process S = (S1,. . . , S N ), governed by an objective probability
measure P. The process S is as usual interpreted as the price process of the
exogenously given underlying assets and we now want to price a contingent
T-claim X. We assume that all the underlying assets are traded on the market,
but we do not assume that there exists an a priori market (or a price process) for
the derivative. To avoid trivialities we also assume that the underlying market


Definition 8.1 We say that a T-claim X can be replicated, alternatively that
it is reachable or hedgeable, if there ezists a self-financing portfolio h such

                              v h ( ~=) X ,   P - a.s.                         (8.1)
In this case we say that h is a hedge against X. Alternatively, h is called a
replicating or hedging portfolio. If every contingent claim is reachable we say
that the market is complete.
Let us now consider a fixed T-claim X and let us assume that X can be replicated
by a portfolio h. Then we can make the following mental experiment:
I   1. Fix a point in time t with t 5 T.
    2. Suppose that we, at time t, possess v h ( t ) SEK.
    3. We can then use this money to buy the portfolio h(t). If furthermore we
       follow the portfolio strategy h on the time interval [t, T] this will cost us
       nothing, since h is self-financing. At time T the value of our portfolio will
       then be V h ( ~SEK.
                        )
112                      COMPLETENESS AND HEDGING


      4. By the replication assumption the value, at time T, of our portfolio will
         thus be exactly X SEK, regardless of the stochastic price movements over
         the interval [t, TI.
      5. From a purely financial point of view, holding the portfolio h is thus
         equivalent to the holding of the contract X.
      6. The "correct" price of X at time t is thus given by n(t; X) = vh(t).
For a hedgeable claim we thus have a natural price process, n ( t ; X) = V h (t),
and we may now ask if this has anything to do with absence of arbitrage.
Proposition 8.2 Suppose that the claim X can be hedged using the portfolio h.
Then the only price process n(t; X) which is consistent with no arbitrage is given
by n ( t ; X) = vh(t). Furthermore, if X can be hedged by g as well as by h then
Vg(t) = v h ( t ) holds for all t with probability 1.
Proof If at some time t we have n(t; X) < v h ( t ) then we can make an arbitrage
by selling the portfolio short and buying the claim, and vice versa if H(t; X) >
V h (t). A similar argument shows that we must have Vg(t) = vh(t).

8.2  Completeness i n t h e Black-Scholes Model
We will now investigate completeness for the generalized Black-Scholes model
given by

                 dB(t) = rB(t) dt,                                            (8-2)
                  dS(t) = S(t)a (t, S(t)) dt   + S(t)a (t, S(t)) dW(t),       (8.3)
where we assume that a (t, s) > 0 for all (t, s). The main result is the following.
Theorem 8.3 The model (8.2)-(8.3) is complete.
The proof of this theorem requires some fairly deep results from probability the-
ory and is thus outside the scope of this book. We will prove a weaker version of
the theorem, namely that every simple claim can be hedged. This is often quite
sufficient for practical purposes, and our proof of the restricted completeness
also has the advantage that it gives the replicating portfolio in explicit form. We
will use the notational convention h(t) = [ho(t), h*(t)] where h0 is the number
of bonds in the portfolio, whereas h* denotes the number of shares in the under-
lying stock. We thus fix a simple T-claim of the form X = (P(S(T)) and we now
want to show that this claim can be hedged. Since the formal proof is of the form
"consider the following odd construction", we will instead start by presenting a
purely heuristic (but good) argument. This argument is, from a formal point of
view, only of motivational nature and the logic of it is rather unclear. Since the
argument is only heuristic the logical flaws do not matter, since in the end we
will in fact present a rigorous statement and a rigorous proof. Before we start the
heuristics, let us make more precise what we are looking for. Using Lemma 6.5
we immediately have the following result.
              COMPLETENESS IN THE BLACK-SCHOLES MODEL                             113


Lemma 8.4 Suppose that there exists an adapted process V and an adapted
process u = [uO,u*] with
                          u0(t) u*(t) = 1,+                        (8.4)
such that
                              + u*(t)cw(t,S(t))) dt + V(t)u*(t)o(t,S(t)) d ~ ( t ) ,
       i
       dV(t) = V(t) {uo(t)r
       V(T) = @(S(T)).
                                                                         (8.5)
Then the claim X = @(S(T))can be replicated using u as the relative portfolio.
The corresponding value process is given by the process V and the absolute
portfolio h is given by

                                  hO(t)= uO(t)V(t)                               (8.6)
                                           B(t) '
i                                 h*(t) = u* (t)V(t)                             (8.7)
                                             S(t) -
(! '
   Our strategy now is to look for a process V and a process u satisfying the
conditions above.

Begin Heuristics
We assume what we want to prove, namely that X = @(S(T))is indeed r e p
licable, and then we ponder on what the hedging strategy u might look like.
Since the S-process and (trivially) the B-process are Markov processes it seems
reasonable to assume that the hedging portfolio is of the form h(t) = h(t, S(t))
where, with a slight misuse of notation, the h in the right member of the equality
is a deterministic function. Since, furthermore, the value process V (we suppress
                                                        +
the superscript h) is defined as V(t) = h O(t)B(t) h*(t)S(t) it will also be a
function of time and stock price as

                                   V(t>= F(t, S(t)),                             (8.8;
where F is some real valued deterministic function which we would like to knou
more about.
   Assume therefore that (8.8) actually holds. Then we may apply the Iti
formula to V in order to obtain the V-dynamics as
                              +
                 d V = {Ft aSFs        + ~ u ~ s ~ F ,dt, )+ aSF, dW,            (8.9'

where we have suppressed the fact that V and S axe to be evaluated at time t
whereas a, cr and F are to be evaluated at (t, S(t)). Now, in order to make (8.9
look more like (8.5) we rewrite (8.9) as

               dV = V
                        {Ft   + oSF, + if S2F.. } dt + v ycrdW.
                                                         SF,                    (8.10
                                      v
114                    COMPLETENESS AND HEDGING


Since we have assumed that X is replicated by V we see from (8.10) and (8.5)
that u* must be given by




(remember that we have assumed that V(t) = F(t, S(t)), and if we substitute
(8.11) into (8.10) we get




Comparing this expression to (8.5) we see that the natural choice for u0 is
given by
                              uo =
                                     Ft   + ;a2s2F,,
                                               7                       (8.13)
                                        rF
but we also have to satisfy the requirement u0+ u* = 1 of (8.4). Using (8.11)
and (8.13) this gives us the relation

                          Ft+ia2S2F,,-
                                     - F-SF,
                              rF         F '
which, after some manipulation, turns out to be the familiar Black-Scholes
equation
                          +       +
                    Ft rSF, $a2s2~,,       - rF = 0.                (8.15)
Furthermore, in order to satisfy the relation F(T, S(T)) = iP(S(T)) of (8.5)
(remember that we assume that V(t) = F(t, S(t))) we must have the boundary
value
                      F(T, s) = @(s), for all s E R+.                 (8.16)
End Heuristics
Since at this point the reader may well be somewhat confused as to the logic
of the reasoning, let us try to straighten things out. The logic of the reasoning
above is basically as follows:
      We assumed that the claim X was replicable.
      Using this and some further (reasonable) assumptions we showed that they
      implied that the value process of the replicating portfolio was given as
      V(t) = F(t, S(t)) where F is a solution of the Black-Scholes equation.
This is of course not at all what we wish to achieve. What we want to do is
to prove that X really can be replicated. In order to do this we put the entire
argument above within a logical parenthesis and formally disregard it. We then
have the following result.
             COMPLETENESS IN THE BLACK-SCHOLES MODEL                           115


Theorem 8.5 Consider the market (8.2)-(8.3), and a contingent claim of the
form X = @ ( S ( T ) ) Define
                       .      F as the solution to the boundary value problem

                      Ft + rsF, + ~ a 2 s 2 ~-, r, F = 0,
                     i
Then X can be replicated by the relative portfolio
                                                    F ( T ,s) = @(s).
                                                                            (8.17)




                      u O ( t ) = F ( t , S ( t ) )- S(t)FS(t,S ( t ) )7
                                                F ( t ,S ( t ) )
                      u*(t)= S(t)Fd(t,S ( t ) )
                                     F ( t ,S ( t ) ) .
The corresponding absolute portfolio is given by

                      hO(t)= F ( t , S ( t ) )- S(t)Fs(t,S ( t ) )7         (8.20)
                                               B(t)
                      h*(t)=         S(t)),                                 (8.21)

and the value process V h is given by

                                  v h ( t )= F ( t , S ( t ) ) .            (8.22)

Proof Applying the It6 formula to the process V ( t ) defined by (8.22) and
performing exactly the same calculations as in the heuristic argument above,
will show that we can apply Lemma 8.4.
    The result above gives us an explanation of the surprising facts that there
actually exists a unique price for a derivative asset in the Black-Scholes model
and that this price does not depend on any particular assumptions about indi-
vidual preferences. The arbitrage free price of a derivative asset is uniquely
determined simply because in this model the derivative is superfluous. It can
always be replaced by a corresponding "synthetic" derivative in terms of a
replicating portfolio.
   Since the replication is done with P-probability 1, we also see that if a con-
tingent claim X is replicated under P by a portfolio h and if P* is some other
probability measure such that P and P* assign probability 1 to exactly the same
events (such measures P and P * are said to be equivalent), then h will replicate
X also under the measure P*. Thus the pricing formula for a certain claim will
be exactly the same for all measures which are equivalent to P . It is a well known
fact (the Girsanov theorem) in the theory of SDEs that if we change the measure
from P to some other equivalent measure, this will change the drift in the SDE,
but the diffusion term will be unaffected. Thus the drift will play no part in the
116                    COMPLETENESS AND HEDGING


pricing equation, which explains why a does not appear in the Black-Scholes
equation.
    Let us now list some popular claims and see which of them will fall into the
framework above.

               X = max [S(T)- K, 0] (European call option)                   (8.23)
               X = S(T) - K (Forward contract)                               (8.24)

               X = max   ;1 1
                         L
                               T
                                   S(t) dt - K , 0
                                                  1
                                                  J
                                                       (Asian option)

               X = S(T)- inf S(t) (Lookback contract)                        (8.26)
                             OStlT

 We know from Theorem 8.3 that in fact all of the claims above can be replicated.
For general claims this is, however, only an abstract existence result and we
have no guarantee of obtaining the replicating portfolio in an explicit form. The
point of Theorem 8.5 is precisely that, by restricting ourselves to simple claims,
i.e. claims of the form X = @(S(T)), we obtain an explicit formula for the
hedging portfolio.
    It is clear that the European call as well as the forward contract above are
simple claims, and we may thus apply Theorem 8.5. The Asian option (also
called a mean value option) as well as the lookback present harder problems
since neither of these claims is simple. Instead of just being functions of the
value of S at time T we see that the claims depend on the entire S-trajectory
over the interval [0, TI. Thus, while we know that there exist hedging portfolios
for both these claims, we have presently no obvious way of determining the shape
of these portfolios.
    It is in fact quite hard to determine the hedging portfolio for the lookback,
but the Asian option belongs to a class of contracts for which we can give a
fairly explicit representation of the replicating portfolio, using very much the
same technique as in Theorem 8.5.
Proposition 8.6 Consider the model

               dB(t) = rB(t) dt,                                             (8.27)
                dS(t) = S(t)a (t, S(t)) dt   + S(t)a (t, S(t)) d ~ ( t ) ,   (8.28)

and let X be a T-claim of the fown



where the process Z is defined by
                       COMPLETENESS-ABSENCE OF ARBITRAGE                                   117


      for some choice of the deterninistic function g. Then X can be replicated using
      a relative portfolio given by




      where F is the solution to the boundary value problem

                         Ft +srF,    + i s 2 a 2 ~ ,+gFz
                                                    ,    - r F = 0,
                                                     F ( T , s, z ) = Q ( s ,z ) .
    ' The corresponding value process V is given by V ( t )= F ( t , S ( t ) ,Z ( t ) ) , and F
      has the stochastic representation



      where the Q-dynamics are given by




     Proof The proof is left as an exercise for the reader. Use the same technique
     as in the proof of Theorem 8.5.
         Again we see that the arbitrage free price of a contingent claim is given as
     the expected value of the claim discounted to the present time. Here, as before,
I    the expected value is to be calculated using the martingale measure Q instead
     of the objective probability measure P. As we have said before, this general
     structure of arbitrage free pricing holds in much more general situations, and as
     a rule of thumb one can view the martingale measure Q as being defined by the
     property that all traded underlying assets have r as the rate of return under Q.
     It is important to stress that it is only traded assets which will have sr as the
     rate of return under Q. For models with nontraded underlying objects we have
     a completely different situation, which we will encounter below.

     8.3 Completeness- Absence of Arbitrage
     In this section, we will give some general rules of thumb for quickly determining
     whether a certain model is complete and/or free of arbitrage. The arguments
     will be purely heuristic.
1
    118                      COMPLETENESS AND HEDGING


        Let us consider a model with M traded underlying assets plus the risk
                                 +
    free asset (i.e. totally M 1 assets). We assume that the price processes of
    the underlying assets are driven by R "random sources". We cannot give a precise
    definition of what constitutes a "random source" here, but the typical example
    is a driving Wiener process. If, e.g. we have five independent Wiener processes
    driving our prices, then R = 5. Another example of a random source would be
    a counting process such as a Poisson process. In this context it is important to
    note that if the prices are driven by a point process with different jump sizes
    then the appropriate number of random sources equals the number of different
I   jump sizes.
        When discussing completeness and absence of arbitrage it is important to
I
    realize that these concepts work in opposite directions. Let the number of ran-
    dom sources R be fixed. Then every new underlying asset added to the model
    (without increasing R) will of course give us a potential opportunity of creating
    an arbitrage portfolio, so in order to have an arbitrage free market the number
    M of underlying assets must be small in comparison to the number of random
    sources R.
        On the other hand we see that every new underlying asset added to the model
    gives us new possibilities of replicating a given contingent claim, so completeness
    requires M to be great in comparison to R.
        We cannot formulate and prove a precise result here, but the following rule
    of thumb, or "mett+theorem", is nevertheless extremely useful. In concrete cases
    it can in fact be given a precise formulation and a precise proof. See Chapters 10
    and 14. We will later use the meta-theorem when dealing with problems con-
    nected with nontraded underlying assets in general and interest rate theory in
    particular.

    Meta-theorem 8.3.1 Let M denote the number of underlying traded assets i n
    the model excluding the risk free asset, and let R denote the number of random
    sources. Generically we then have the following relations:
          1. ,The model is arbitrage free i f and only i f M 5 R.
          2. The model is complete if and only i f M 1 R.
          3. The model is complete and arbitrage free i f and only i f M = R.
        As an example we take the Black-Scholes model, where we have one under-
    lying asset S plus the risk free asset so M = 1. We have one driving Wiener
    process, giving us R = 1, so in fact M = R. Using the meta-theorem above we
    thus expect the Black-Scholes model to be arbitrage free as well as complete and
    this is indeed the case.

    8.4 Exercises
    Exercise 8.1 Consider a model for the stock market where the short rate of
    interest r is a deterministic constant. We focus on a particular stock with price
                                    EXERCISES                                 119


process S. Under the objective probability measure P we have the following
dynamics for the price process.

               dS(t) = aS(t) dt    + oS(t) dW(t) + 6S(t-) dN(t).
Here W is a standard Wiener process whereas N is a Poisson process with
intensity A. We assume that a, o , 6 and X are known to us. The d N term is to
be interpreted in the following way:
     Between the jump times of the Poisson process N, the S-process behaves
     just like ordinary geometric Brownian motion.
1    If N has a jump at time t this induces S to have a jump at time t. The
,    size of the S-jump is given by

                              S(t) - S(t-) = 8 . S(t-).

Discuss the following questions:
t (a) Is the model free of arbitrage?
F (b) Is the model complete?
  (c) Is there a unique arbitrage free price for, say, a European call option?
  (d) Suppose that you want to replicate a European call option maturing in
      January 1999. Is it posssible (theoretically) to replicate this asset by a
      portfolio consisting of bonds, the underlying stock and European call
      option maturing in December 2001?
Exercise 8.2 Use the Feynman-KaT: technique in order to derive a risk neutral
valuation formula in connection with Proposition 8.6.
Exercise 8.3 The fairly unknown company F&H INC. has blessed the market
with a new derivative, "the Mean". With "effective period" given by [TI,T2] the
holder of a Mean contract will, at the date of maturity T2,obtain the amount

                                1    T2
                             - S(u) du.
                             T2 - Tl   ,
   Determine the arbitrage free price, at time t, of the Mean contract. Assume
that you live in a standard Black-Scholes world, and that t < TI.
Exercise 8.4 Consider the standard Black-Scholes model, and n different
simple contingent claims with contract functions @ I , .. . ,a,. Let
                                       n
                               v=           hz(t)S.(t)
                                      i=l
denote the value process of a self-financing, Markovian (see Definition 6.2) port-
folio. Because of the Markovian assumption, V will be of the form V(t, S(t)).
Show that V satisfies the Black-Scholes equation.
                                                              COMPLETENESS AND HEDGING


8.5   Notes
Completeness is mathematically closely related to rather deep results about the
possibility of representing martingales as sums of stochastic integrals. Using
this connection, it can be shown that the market is complete if and only
if the martingale measure is unique. This is developed in some detail in
Chapters 10 and 14. See also Harrison and Pliska (1981) and Musiela and
Rutkowski (1997).




     i      --+$.      :,i;;L{[,j           ;,.      .!.,.2 ! .,:,.                     +,<I, ,

      .        I , ,     .         ' . .. .              ..
 t    (.,              .,.         .\:<!,         :J,.\::.          13.j,              l t x   ,        ., :;            ,;+>,      .;.id,                   ,,,. :
                                                                                                                                                   ,,, , : j <                           , :,                            .       I

                                                         i      ,.         !,: .
                                                                           ,           ,.          !   .. . . , ,-         8     , '.        /: ,;1:;        !, ,    .                   ;.                      I   :       i




          ~.           - . , / .
                                                  - ..
                                                   I'b
                                                              I:,     ,.           1    *(:        ':    >,   s3                 l~-,,>!,;;,:~:.'' !i,.,f :.,!,&<.::,
                                                                                                                                                        ,
                                                                                                                                                         ,
                                                                                                                                                             C

                                                                                                                                                                .-
                                                                                                                                                                 1   .
                                                                                                                                                                                '


                                                                                                                                                                                     ,
                                                                                                                                                                                                      ,   : ',       ?

                                              !~ , . ' t ,                             .is                         , >           it:: <.,,:.,.-;   . ,,
                                                                                                                                                  .!         5%'         ,.;>',?a,            8   '
                                               9
           PARITY RELATIONS AND DELTA HEDGING

 9.1 Parity Relations
 Consider the standard Black-Scholes model. As we know from general theory
 (Theorem 8.3) this model allows us to replicate any contingent claim using a
portfolio based on the underlying asset and the risk free asset. For a nontrivial
claim the structure of the hedging portfolio is typically quite complicated, and
in particular it is a portfolio which is continuously rebalanced. For practical
purposes this continuous rebalancing presents a problem because in real life
trading does have a cost. For managerial purposes it would be much nicer if we
could replicate a given claim with a portfolio which did not have to be rebalanced,
in other words a portfolio which is constant over time. Such a portfolio is known
as a buy-and-hold portfolio.
    If we insist on using only B and S in our replicating portfolio we cannot r e p
licate any interesting claims using constant portfolios, but if we allow ourselves
to include some derivative, like a European call option, in our hedging portfolio,
then life becomes much simpler, and the basic result we will use is the following
trivial linear property of pricing.
Proposition 9.1 Let iP and !     IJbe contract functions for the T-claims X =
cP(S(T))and Y = Q ( S ( T ) ) . Then for any real numbers a and P we have the
following price relation:

                       n ( t ;aiP   + p.Ji) = aII(t;iP) + PII(t;9 ) .               (9.1)

Proof This follows immediately from the risk neutral valuation formula (7.39)
and the linear property of mathematical expectation.

   To set notation let c ( t ,s; K, T, r, a ) and p(t, s;K, T, r, o) denote the price at
time t given S ( t ) = s of a European call option and a European put option
respectively. In both cases T denotes the time of maturity, K the strike price,
whereas r and a indicate the dependence on model parameters. From time to
time we will freely suppress one or more of the variables ( t , s , K, T, r , a ) . Let us
furthermore consider the following "basic" contract functions:

                                    @ s ( x )= x,                                   (9.2)
                                    iPB(x) 1 ,                                      (9.3)
                               i P C , K ( ~ )= max [ x - K, O] .                   (9.4)
122              PARITY RELATIONS AND DELTA HEDGING


The corresponding claims at the time of maturity give us one share of the stock,
$1, and one European call with strike price K respectively. For these claims the
prices are given by




   Let us now fix a time of maturity T and a T-claim X of the form X =
@(S(T)),i.e. a simple claim. It is now clear that if @ is a linear combination of
the basic contracts above, i.e. if we have




then we may price @ in terms the prices of the basic contracts as




Note also that in this case we may replicate the claim @ using a portfolio consist-
ing of basic contracts that is constant over time, i.e. a "buy-and hold" portfolio.
More precisely the replicating portfolio consists of
      a shares of the underlying stock,
         zero coupon T-bonds with face value $1,
      .yj European call options with strike price Ki, all maturing at T.

The result above is of course interesting only if there is a reasonably large class
of contracts which in fact can be written as linear combinations of the basic
contracts given by (9.2), (9.3), and (9.4). This is indeed the case, and as a first
example we consider the European put option with strike price K , for which the
contract function cPpSK is defined by

                            @ p , ~ ( x=) max [K - x, 01.                   (9.10)
                                                                $5
                                                               , h




It is now easy to see (draw a figure!) that




so we have the following secalled put-call parity relation.
r




                                               THE GREEKS                                      123


            Proposition 9.2 (Put- call parity) Consider a European call and a European
            put, both with strike price K and time of maturity T . Denoting the corresponding
            pricing functions by c ( t ,s) and p(t, s), we have the following relation:



        i In particular, the put option can be replicated with a constant (over time) port-
           folio consisting of a long position in a zero coupon T-bond with face value K , a
          long position in a European call option and a short position in one share of the
          underlying stock.
        I      It is now natural to pose the following more general question. Which contracts
            can be replicated in this way using a constant portfolio consisting of bonds, call
            options and the underlying stock? The answer is very pleasing.

            Proposition 9.3 Fix an arbitrary continuous contract function with compact
            support. Then the corresponding contract can be replicated with arbitrary pre-
            cision (in sup-norm) using a constant portfolio consisting only of bonds, call
            options and the underlying stock.

          Proof It is easily seen that any affine function can be written as a linear
          combination of the basic contract functions. The result now follows from the
        : fact that any continuous function with compact support can be approximated
          uniformly by a piecewise linear function.


            9.2 T h e Greeks
            Let P ( t , s ) denote the pricing function at time t for a portfolio based on a single
            underlying asset with price process St. The portfolio can thus consist of a pos-
            ition in the underlying asset itself, as well as positions in various options written
            on the underlying asset. For practical purposes it is often of vital importance to
            have a grip on the sensitivity of P with respect to the following.
               1. Price changes of the underlying asset.
               2. Changes in the model parameters.
            In case 1 above we want to obtain a measure of our risk exposure, i.e. how the
            value of our portfolio (consisting of stock and derivatives) will change given
            a certain change in the underlying price. At first glance case 2 seems self-
            contradictory, since a model parameter is by definition a given constant, and
            thus it cannot possibly change within the given model. This case is therefore not
    I
    t       one of risk exposure but rather one of sensitivity with respect to misspecifications
    !       of the model parameters.
               We introduce some standard notation.
                 PARITY RELATIONS AND DELTA HEDGING


Definition 9.4




                                    e = aP
                                        -
                                         at'


    All these sensitivity measures are known as "the greeks". This includes V,
which in this case is given the Anglo-Hellenic pronounciation "vega". A portfolio
which is insensitive w.r.t. small changes in one of the parameters above is said to
be neutral, and formally this means that the corresponding greek equals zero. A
portfolio with zero delta is said to be delta neutral, and correspondingly for the
other greeks. In the next section we will study various hedging schemes, based
upon the greeks, but first we present the basic formulas for the case of a call
option. See Figs 9.1-9.5 for graphs of the greeks as functions of the underlying
stock price.
Proposition 9.5 For a European call with strike price K and time of maturity
T we have the following relations, with notation as in the Black-Scholes formula.




                      FIG. 9.1. Delta for a European call
THE GREEKS
                   PARITY RELATIONS AND DELTA HEDGING




                         FIG. 9.4. Theta for a European call




               0    20     40   60   80   100 120 140 160 180 200

                         FIG. 9.5. Rho for a European call

Proof Use the Black-Scholes formula (7.48) and take derivatives. The (brave)
reader is invited to carry this out in detail. The calculations are sometimes quite
messy.

9.3 Delta and Gamma Hedging
As in the previous section, let us consider a given portfolio with pricing function
P(t,s). The object is to immunize this portfolio against small changes in the
                             DELTA AND GAMMA HEDGING


    underlying asset price s. If the portfolio already is delta neutral, i.e. if




1 then we are done, but what can we do in the more interesting case when Ap # O?
' One possibility is of course to sell the entire portfolio, and invest the sum thus
    obtained in the bank, but this is in most cases neither practically feasible, nor
    preferable.
       A more interesting idea is to add a derivative (e.g. an option or the underlying
    asset itself) to the portfolio. Since the price of a derivative is perfectly correlated
    with the underlying asset price, we should be able to balance the derivative
    against the portfolio in such a way that the adjusted portfolio becomes delta
    neutral. The reader will recognize this argument from the derivation of the Black-
    Scholes PDE, and the formal argument is as follows.
       We denote the pricing function of the chosen derivative by F ( t , s), and
    x denotes the number of units of the derivative which we will add to the a priori
    given portfoli~.The value V of the adjusted portfolio is then given by



/ In order to make this portfolio delta neutral we have to choose x such that
    aV/ds = 0, and this gives us the equation




5 which, with obvious notation, has the solution


  Example 9.6 Let us assume that we have sold a particular derivative with
  pricing function F(t, s), and that we wish to hedge it using the underlying asset
I itself. In (9.22) we now have P = -1 . F, whereas F is replaced by s, and we get
1 the equation
I
I

    with the solution


    We thus see that the delta of a derivative gives us the number of units of the
    underlying stock that is needed in order to hedge the derivative.
    It is important to note that a delta hedge only works well for small changes in
    the underlying price, and thus only for a short time. In Example 9.6, what we did
                      PARlTY RELATIONS AND DELTA HEDGING


             25


             20 -


             15 -


             10 -


              5   -


               FIG. 9.6. Linear apprcarimation of .a European call

was to approximate the pricing function F ( t , s) with its tangent, and in Fig. 9.6
this is illustrated for the case when F is the pricing function of a European call
option. AF equals the slope of the tangent.
    In Fig. 9.1 we have a graph of the delta of a European call, as a function of
the underlying stock price. As time goes by the value of s (and t) will change,
and thus we will be using an old, incorrect value of A. What is done in practice is
to perform a discrete rebalanced delta hedge, which for the example above
can be done dong the following lines:
      Sell one unit of the derivative at time t = 0 at the price F(0, s ) .
      Compute A and buy A shares. Use the income from the sale of the
      derivative, and if necessary borrow money from the bank.
      Wait one day (week, minute, second). The stock price has now changed
      and your old A is no longer correct.
      Compute the new value of A and adjust your stock holdings accordingly.
      Balance your account by borrowing from or lending to the bank.
      Repeat this procedure until the exercise time T.
      In this way the value of your stock and money holdings will approximately
      equal the value of the derivative.
It is in fact not hard to prove (see the exercises) the following asymptotic result.
Proposition 9.7 In a continuously rebalanced delta hedge, the value of the stock
and money holdings will replicate the value of the derivative.
In a (discrete) scheme of the kind above we face a dilemma concerning the
frequency of the rebalancing points in time. If we rebalance often, we will
                        DELTA AND GAMMA HEDGING                                 129


have a very good hedge, but we will also suffer from high transaction costs.
The reason why we have to rebalance is that delta changes as the underlying
price changes, and a measure of the sensitivity of A with respect to s is of course
given by r = aA/as = a2P/as2.See Fig. 9.2 for a graph of the gamma of
a European call. If gamma is high we have to rebalance often, whereas a low
gamma will allow us to keep the delta hedge for a longer period. It is thus prefer-
able to form a portfolio which, apart from being delta neutral, is also gamma
neutral.
    In order to analyze this in some generality, let us again consider an a priori
given portfolio with price function P(t, s). For future use we state the following
trivial but important facts.

Lemma 9.8 For the underlying stock, the delta and gamma are given by

                                      As = 1,
                                       rs = 0.
From the fact that the gamma of the underlying stock equals zero, it follows that
we cannot use the stock itself in order to change the gamma of the portfolio. Since
we want the adjusted portfolio to be both delta and gamma neutral, it is also
obvious that we need two different derivatives in the hedge. Let us thus ~IX two
derivatives, e.g. two call options with different exercise prices or different times
of maturity, with pricing functions F and G. We denote the number of units of
the derivatives by XF and XG respectively, and the value of the hedged portfolio
is now given by

                     V = P(t, S)   + XF . F(t, S)+ XG . G(t, s).
In order to make this portfolio both delta and gamma neutral we have to choose
XF and XG such that the equations


                                       av
                                       -=
                                        as
                                              0,

                                      a2v
                                      - -
                                      as2 - O,

are satisfied. With obvious notation we thus obtain the system

                          Ap+xF.AF+xG.AG=0,                                  (9.24)
                           F p + x F .rF+ x G . r G = 0 ,                    (9.25)

which can easily be solved.
130                PARITY RELATIONS AND DELTA HEDGING


   It is natural, and very tempting, to construct a delta and gamma neutral
hedge by the following two step procedure:
      1. Choose X F such that the portfolio consisting of P and F is delta neutral.
         This portfolio will generally not be gamma neutral.
      2. Now add the derivative G in order to make the portfolio gamma neutral.
The problem with this scheme is that the second step in general will destroy the
delta neutrality obtained by the first step. In this context we may, however, use
the fact that the stock itself has zero gamma and we can thus modify the scheme
as follows:
  1. Choose X F such that the portfolio consisting of P and F is gamma neutral.
     This ~~ortfolio
                   will generally not be delta neutral.
  2. Now add the underlying stock in order to make the portfolio delta neutral.
Formally the value of the hedged portfolio will now be given by



and, using the lemma above, we obtain the following system.




This system is triangular, and thus much simpler than the system (9.24)-(9.25).
The solution is given by




Using the technique described above one can easily derive hedging schemes in
order t o make a given portfolio neutral with respect to any of the greeks above.
This is, however, left to the reader.

9.4 Exercises
Exercise 9.1 Consider the standard Black-Scholes model. Fix the time of
maturity T and consider the following T-claim X:
                                       EXERCISES                                    131


    This contract can be replicated using a portfolio, consisting solely of bonds, stock
    and European call options, which is constant over time. Determine this portfolio
I   as well as the arbitrage free price of the contract.
    Exercise 9.2 The setup is the same as in the previous exercise. Here the
    contract is a secalled straddle, defined by




    Determine the constant replicating portfolio as well as the arbitrage free price
    of the contract.
    Exercise 9.3 The s e t u ~is the same as in the ~reviousexercises. We will now
           I SD   ?d "bull spread" (see Fpig. 9.7). with this cont      ! car1, to a

            ext    take advantage of an increase in the ma:  rket       rhile being
[   protected from a decrease. d he contract is defined by




    We have of course the relation A < B. Determine the constant replicating
    portfolio as well as the arbitrage free price of the contract.

I   Exercise 9.4 The setup and the problem are the same as in the previous
    exercises. The contract is defined by
         132              PARITY RELATIONS AND DELTA HEDGING


         By definition the point C divides the interval [ A , q in the middle, i.e B =
            +
         (A C)/2.
         Exercise 9.5 Suppose that you have a portfolio P with A p = 2 and rp = 3.
         You want to make this portfolio delta and gamma neutral by using two deriv-
         atives F and G, with AF = -1, rF= 2, AG = 5 and I'G = -2. Compute the
         hedge.
         Exercise 9.6 Consider the same situation as above, with the difference that now
         you want to use the underlying S instead of G. Construct the hedge according
    rJ
         to the two step scheme descibed in Section 9.3.
I        Exercise 9.7 Prove Proposition 9.7 by comparing the stock holdings in the
         continuously rebalanced portfolio to the replicating portfolio in Theorem 8.5 of
         the previous chapter.
         Exercise 9.8 Consider a self-financing Markovian portfolio (in continuous time)
         containing various derivatives of the single underlying asset in the Black-Scholes
         model. Denote the value (pricing function) of the portfolio by P(t, s). Show that
         the following relation must hold between the various greeks of P.



         Hint: Use Exercise 4.
         Exercise 9.9 Use the result in the previous exercise to show that if the portfolio
         is both delta and gamma neutral, then it replicates the risk free asset, i.e. it has
         a risk free rate of return which is equal to the short rate r.
         Exercise 9.10 Show that for a European put option the delta and gamma are
         given by




         Hint: Use put-all parity.
         Exercise 9.11 Take as given the usual portfolio P, and investigate how you can
         hedge it in order to make it both delta and vega neutral.
                                                   -


I
I




                                            10
                        THE MARTINGALE APPROACH
                          TO ARBITRAGE THEORY*

    In this chapter, we consider a market model consisting of N + 1 a priori given
    asset price processes So,SI,. . . , SN. Typically we specify the model by giving the
    dynamics of the asset price processes under the objective probability measure P,
    and the main problems are as follows.
    Fundamental Problems 10.1
       1. Under what conditions is the market arbitrage free?
       2. Under what conditions is the market complete?
        We attack the fundamental problems above by presenting the "martingale
    approach" to financial derivatives. This is, so far, the most general approach
    existing for arbitrage pricing, and it is also extremely efficient from a computa-
    tional point of view. The answers to the problems above are given by the famous
    so called First and Second Fundamental Theorems of Mathematical Fin-
    ance, which will be .treated below. However; while these results are extremely
    general and powerful, they are also quite deep, necessarily involving hard results
    from functional analysis, so at some points we only present the main structural
I
    ideas of the proofs. For full proofs the reader is directed to the references in the
    Notes. For the benefit of the reader who does not want to go deeply into the
    theory, we give a summary of the results in Section 10.7. That section can be
    read without reading the rest of the chapter.

    10.1 The Case with Zero Interest Rate
    We will start by considering the special case when one of the assets on the market
    is a risk free asset with zero rate of return. This may sound very restrictive, but
    we will later show how the general case easily can be reduced to this special case.
        As the basic setup we thus consider a financial market consisting of N exo-
    genously given risky traded assets, and the asset price vector is as usual


                                   S(t) =
                                                       ]   .
                                                                                 (10.1)


    We also assume that there exists a risk free asset with price process So(t). This
    will be our numeraire, and in this section we assume that in fact it is constant,
    i.e. it has zero rate of return.
134       THE MARTINGALE APPROACH TO ARBITRAGE THEORY


Assumption 10.1.1 W e assume that

                              So(t) = 1,    for all t 2 0.

The Soasset ean thus be interpreted as a money account in a bank with zero
short rate. In the most general version of the theory, the risky price processes are
allowed to be general semimartingales, but for our purposes it will be enough to
assume that all price processes possess stochastic differentials with a finite num-
ber of driving Wiener processes. Our fundamental problems are to find out under
what conditions the market described above is free of arbitrage possibilities, and
under what conditions it is complete.
    Before starting a formal discussion of this project we have to be a bit more
precise about the set of admissible portfolios. Let us on a preliminary basis define
a naive portfolio process as any adapted process h(t) = [ho(t),hl(t), . . . , h ~ ( t ) ] .
It then turns out that in order to construct a reasonable theory, the class of
naive self financing portfolios is simply too big, and we have in fact the following
strongly negative result.
Theorem 10.1 If at least one of the assets S1,. . , SN has a digusion term
which is nonzero at all times, and if naive portfolio strategies are admitted, then
the model admits arbitrage.
Proof The idea of the proof is based upon the so called "doubling strategy"
for the roulette. In this strategy you start by investing one dollar on black. If you
win you stop, having won one dollar. If you lose, you bet another two dollars,
and if you win in this bet your total gain is again one dollar. If you lose again
you bet another four dollars, etc. Thus, as soon as you win you stop, and as
long as you lose you double your bet. In this way, and as long as the roulette has
positive probability for black coming up (it does not have to be evenly balanced),
you will eventually (i.e. with probability one) win, and your net profit will be
one dollar.
    This is an arbitrage on the roulette, and the reason that this does not work
well in practice, like in Monte Carlo, is that it requires you to have unlimited
credit, since at some points in the game you will have lost an enormous amount
of money before eventually winning one dollar. Also, the time spent until you
win is a priori unbounded although it is finite with probability one. Thus the
probability is high that the sun (and you) has died until you get your dollar.
    In real life you do not have unlimited credit, but within our theoretical frarne-
work credit is unlimited, and it is in fact quite simple to use our market model
to imitate the Monte Carlo roulette wheel and the doubling strategy above in
finite time. If you want the play to be over at t = 1 you simply invest at the
discrete times 1 - lln; n = 1,2,. . . . You start by investing one dollar in the
risky asset, financing by a bank loan, and then you stop as soon as you gain on
the investment and you double your investment as long as you lose (all the time
financing by a bank loan). It is then easy to see that you can in fact repeat this
                       THE CASE WITH ZERO INTEREST RATE                                           135


arbitrage strategy an infinite number of times on any bounded interval, so with
probability one you will become infinitely rich.
    In order to have a reasonable theory we must thus restrict the class of admis
sible strategies to a smaller class where these doubling strategies are excluded.
There are many ways of doing this and a commonly used one is given below. In
order to have a compact notation we will use h s ( t ) as shorthand for the part of
the portfolio which is connected to the risky assets, i.e. h s ( t ) = [ h l ( t )., . . , h N ( t ) ] ,
and we can thus write the entire portfolio h as h = [ho,hs].
Definition 10.2
      For any process h = [ho,h s ] , its value process V ( t ;h ) is defined by




1     or i n compact form
P




C'    A n adapted process hs is called admissible i f there exists a nonnegative
      real number a (which may depend on the choice of h s ) such that


                           l o h s ( u ) d S ( u ) L -a, for all t     E [O, T ] .             (10.5)

      A process h ( t ) = [ho(t),h s ( t ) ] ,is called an admissible portfolio process
      i f h s is admissible.
      A n admissible portfolio is said to be self-financing, if




   Comparing with Definition 6.2, we note that formally the self financing
condition should be




the following result.
                                -
but since in our case So 1, we have dSo = 0 so the self financing condition
reduces to (10.7). This is a simple but important fact, which is highlighted by
136       THE MARTINGALE APPROACH TO ARBITRAGE THEORY


Lemma 10.3 For any adapted process h s satisfying the admissibility condition
(10.5)) and for any real number x, there exists a unique adapted process ho,
such that:
      The portfolio h defined by h = [ho,hs] is self financing.
      The value process is given by




In particular, the space KO of portfolio values, reachable at time T by means of
a self financing portfolio with zero initial cost is given by

                  ho=    { iT              1                  1
                               h s ( t ) dS(t) hs is admissible .

Proof Define ho by




Then, by t h e definition of the value process, we obviously have




and from this we obtain directly



which shows that h is self financing. The last item is now obvious.
    We stress the fact, that the simple characterization of the zero cost reachable
claims in (10.9) depends crucially on our assumption that So 1.     =
10.2 Absence of Arbitrage
We consider the market model (10.1) over the finite time interval [0, TI, still with
the assumption that So 1.=
   We now give the formal definition of a martingale measure.
Definition 10.4 A probability measure Q on .FT is called an equivalent mar-
tingale measure for the market model (10.1), the numeraire S 1 , and the time
interval [0, TI, i f it has the following properties:
      Q is equivalent to P on 3T.
      All price processes S O ,S1, . . . , SN are martingales under Q on the time
      interval [0,TI.
                            ABSENCE OF ARBITRAGE                                137


  An equzvalent martzngale measure will often be referred to as just "a martingale
  measure" or as "an EMM". If Q         P has the property that So,SI,. . . , SN are
  local martingales, then Q is called a local martingale measure.

1 We note that by our assumption above, Sois trivially always a martingale. From
 an informal point of view, the main result of the entire arbitrage theory is the
 following not very precisely formulated Theorem.

 Theorem 10.5 (The First Fundamental Theorem) The model is arbitrage
 free essentially if and only if there exists a (local) martingale measure Q.

     This widely quoted result has the nature of a "Folk Theorem" in the sense
 that it is known to everyone and that, apart from the diffuse term "essentially",
 it is correct. Below we will discuss exactly what we mean with "essentially" in
 the formulation above, and we will also give more exact formulations of it. A
 full proof of a precise version of the First Fundamental Theorem is very hard
 and technical, and thus to a large extent outside the scope of the book. The
 main ideas, however, are quite simple and straightforward. We will present these
 ideas and we will also point out where the technical problems appear. The reader
 interested in the full story is referred to the Notes.


 10.2.1 A Rough Sketch of the Proof
 In this section we will informally discuss the main ideas of the proof of the First
 Fundamental Theorem, and we will also point out the problems encountered.
 The proof consists of two parts:
       Existence of an EMM implies absence of arbitrage.
       Absence of arbitrage implies existence of an EMM.

 The first part is rather easy, whereas the second part is very hard.

 I: Existence of an EMM implies absence of arbitrage. This part is in
 fact surprisingly easy. To see this, let us assume that there does indeed exist a
 martingale measure Q. In our Wiener driven world this implies (see the Girsanov
 Theorem in Chapter 11) that all price processes have zero drift under Q, i.e. their
 Q dynamics are of the form

                    dSi(t) = ~ , ( t ) u , ( tdwQ(t),
                                              )       z = 1,. . . , N ,      (10.10)

 where WQ is some multidimensional Q-Wiener process and c, is some adapted
 row vector process.
    We now want to prove that there exist no arbitrage possibilities, so we assume
 that for some self financing process h, which we for the moment assume to be
138      THE MARTINGALE APPROACH TO ARBITRAGE THEORY


uniformly bounded, the corresponding value process satisfies the relations




We are thus viewing h as a potential arbitrage portfolio, and in order to prove
absence of arbitrage we thus want to show that V(0, h) > 0.
   Since Q P we see that we also have the relations
            N




Since h is self financing we have (remember that dSo = 0)




and thus (by the boundedness assumptions) we see that V(t; h) is a Q-martingale.
In particular we then have



However, (10.13)-(10.14) imply that EQ [V(T;h)] > 0, so V(0; h) > 0. We
have thus shown that (10.11)-(10.12) implies V(0; h) > 0, thereby proving the
nonexistence of a bounded arbitrage portfolio.
   For the case of a possibly unbounded, but of course still admissible, portfolio
we have to resort to more delicate arguments. One can then show that, since the
value process is bounded from below it is in fact a supermartingale. Thus

                           V(0; h) 2 E~ [V(T;h)] > 0,

and the proof of this part is finished.

11: Absence of arbitrage implies existence of an EMM. This is the really
difficult part of the first fundamental theorem. It requires several hard results
from functional analysis, but the basic ideas are as follows.
    In order to avoid integrability problems we assume that all asset price pro-
cesses are bounded and we interpret "arbitrage" as "bounded arbitrage". We
thus assume absence of arbitrage and we want to prove the existence of an
EMM, or in more technical terms we would like to prove the existence of a
Radon-Nikodym derivative L on 37-which will transform the P-measure into a
martingale measure Q. Inspired from the simple one period model discussed in
Chapter 3 it is natural to look for some sort of convex separation theorem, and to
                          ABSENCE OF ARBITRAGE                                 139


this end we need to put our problem within a more functional analytical setting.
Since the Radon-Nikodym derivative L should be in L1, it is natural to try to
utilize duality between L m and L1 so therefore we define the following sets, with
L1 denoting L1 (52,FT,  P) and Lm denoting Lm (R,FT,P). (Recall that ICo is
the space of all claims which can be reached by a self financed portfolio at zero


                 K : = K : ~ ~ L ~ ,                                       (10.15)
                L y = the nonnegative random variables in L*,              (10.16)
                  C = K:- L y .                                            (10.17)
The space K: thus consists of all bounded claims which are reachable by a self
financing portfolio at zero initial cost. The set C are those claims which are
dominated by the claims in IC, so every claim in C can be reached by self-financing
portfolio with zero initial cost if you also allow yourself to throw away money.
   Since we have assumed absence of arbitrage we deduce that
                                  c    n = (0).
                                            ~ ~                            (10.18)
Now, both C and L T are convex sets in Lm with only one point in common, so at
this point (which is the crucial point of the argument, see below) one would like
to refer to a convex separation theorem to guarantee the existence of a nonzero
random variable L E L1 such that
                       EP [LX] 2 0,     for all X E L+w,                   (10.19)
                       EP [LX] 5 0,     for all X G C.                     (10.20)
Assume for the moment that this part of the argument can be carried out. From
(10.19) we can then deduce that in fact L 2 0, and by scaling we can choose
L such that EP [L] = 1. We can thus use L as a Radon-Nikodym derivative
to define a new measure Q by dQ = L d P on FT,and Q is now our natural
candidate as a martingale measure.
   Although the main ideas above are good, there are two hard technical
problems which must be dealt with:
     Since L1 is not the dual of L" (in the norm topologies) we can not use a
     standard convex separation theorem. An application of a standard Banach
     space separation theorem would provide us with a linear functional L E
     (L m )* such that (X, L) 2 0 for all X E L T and (X, L) 5 0 for all X in C,
     but since L1 is strictly included in (LOO)* we have no guarantee that L can
     be represented by an element in L1. We thus need a stronger separation
     theorem than the standard one.
     Supposing that the duality problem above can be resolved, it remains to

     may only have Q << P but not Q P.    -
     prove that L is strictly positive (not only nonnegative), since otherwise we
140       THE MARTINGALE APPROACH TO ARBITRAGE THEORY


10.2.2 Precise Results
We now move on to a more formal discussion of the various versions of the First
Fundamental Theorem. For the main proof we follow Delbaen-Schachermayer
(1994). This will force us to use some results and concepts from functional ana-
lysis which are outside the present text, and the reader is referred to Rudin (1991)
for general information. The new ingredients of the full proof are as follows:
      We introduce a variation of the concept of no arbitrage, namely "No Free
      Lunch with Vanishing Risk".
      In order to obtain a duality between L1 and Lm we consider the weak*
      topologies instead of the norm topologies.
      We use the Kreps-Yan separation Theorem.
    As a first step, it turns out that the standard definition of absence of arbitrage
is a bit too restrictive to allow us to deduce the existence of an EMM, so we
need to modify this concept slightly.
Definition 10.6 With notation as i n the previous section, we say that the model
admits
      No Arbitrage (NA) i f
                                      CnL? = {O),
      No Free Lunch with Vanishing Risk (NFLVR) if



      where C denotes the closure of C i n L m .
    The no arbitrage condition is the same as before, whereas NFLVR is a slightly
wider concept. If NFLVR does not hold then there will exist a nonzero claim
X E L y and a sequence Xn E C such that (Xn- XI < l l n for all n, so in
particular X, > -1ln. Thus; for each n there exists a self financing (zero ini-
tial cost) portfolio generating a claim which is closer then l l n to the arbitrage
claim X, while the downside risk is less than l l n . This is almost an arbitrage.

    As a second step we consider the weak* topology on LM generated by L 1 .
It is well known (see Rudin (1991)) that with the weak* topology, the dual of
Loo is L1 so we are now in a nice position to apply a separation theorem. More
precisely we will need the following deep result.
Theorem 10.7 (Kreps-Yan Separation Theorem) If C is weak* closed,
and i f
                         CnLy={o),
then there exists a random variable L E L1 such that L is P almost surely strictly
positive, and
                         E~ [ L. X] 1 0, for all X E C.
                                  ABSENCE OF ARBITRAGE                                      141


     Proof    For a proof and references see Schachermayer (1994).
         We are now almost in business, and we see that in order for the Kreps-Yan
     Theorem to work we need to assume No Arbitrage and we also need assump
     tions which guarantee that C is weak* closed. Happily enough we have the
     following surprising result from Delbaen-Schachermayer (1994) which shows that
     the closedness of C in fact follows from NFLVR. The proof is very hard and
     therefore omitted.
I
     Proposition 10.8 If the asset price processes are uniformly bounded, then the
'
     condition NFLVR implies that C is weak* closed.
I       We can now state and prove the main result.
     Theorem 10.9 (First Fundamental Theorem) Assume that the asset price
/ process S is bounded. Then there exists an equivalent martingale measure if and
I only if the model satisfies NFLVR.
      Proof The only i f part is the easy one, and the proof is already given in
      Section 10.2.1. Before going on we recall the definitions of IC and C and from
      (10.15)-(10.17). For the i f part we assume NFLVR. This implies that C is weak*
    1 closed and it also (trivially) implies No Arbitrage, i.e. C n L y = ( 0 ) . We may
      thus apply the Kreps-Yan Separation to deduce the existence of a random
      variable L E L1 such that L is P almost surely strictly positive, and

                                E P [ L . X ] 1 0 , for all X E C.                      (10.23)

     By scaling we can choose L such that E P [L] = 1. We may thus use L as a
     Radon-Nikodym derivative to define a new measure Q by dQ = L d P on 3 ~ ,
     and Q is now our natural candidate as a martingale measure. It follows from
     (10.23) and the definition of IC that E~ [LX] 5 0 for all X E K. Since K: is a
     linear subspace this implies that in fact EQ [XI = EP [ L X ]= 0 for all X E IC. In
     order to prove the martingale property of Si for a fixed i, we choose fixed s and
               <
     t with s t , well as an arbitrary event A E 3,.Now consider the following
     self-financing portfolio strategy:
           Start with zero wealth and do nothing until time s.
           At time s buy IA units of asset No. i. Finance this by a loan in the bank.
           At time t sell the holdings of asset No. i and repay the loan. Put any
           surplus in the bank and keep it there until time T.
         Since the short rate equals zero, the initial loan (at time s ) in the bank is
     paid back (at time t ) by the same amount, so at time t the value of our portfolio
     is given by V ( t ;h) = IA [Si(t)- S i ( s ) ] .Since the short rate equals zero this will
     also be the value of our portfolio at time T. Thus we have I A ( S i ( t )- S i ( s ) ) E IC
     so we must have EQ [IA( S i ( t )- S i ( s ) ) ]= 0 , and since this holds for all s , t and
     A E 3, we have proved that Si is a Q martingale.
142       THE MARTINGALE APPROACH TO ARBITRAGE THEORY


    In most applications, the assumption of a bounded S process is far to restrict-
ive. The Delbaen-Schachermayer Theorem can however easily be extended to a
more general case.
Theorem 10.10 Assume that the asset price process S is locally bounded. Then
there exists an equivalent local martingale measure zf and only if the model
satisfies NFLVR.
Remark 10.2.1 We note that in particular the result above will hold if the
S process has continuous trajectories. It will also hold for an S process with
jumps as long as the jumps are bounded. The case of an S process which is
not locally bounded such as for example a process with lognormally distributed
jumps at exponentially distributed times is much more difficult, and in such
a case NFLVR is only equivalent to the existence of an equivalent measure Q
such that S becomes a so called "sigma-martingale" under Q. See the Notes for
references.

10.3 The General Case
We now relax the assumption that SoE 1, and go on to consider a market model
consisting of the price processes

                                  SO,~~,.-.,SN,
                     i
where we make the following assumption.
Assumption 10.3.1 We assume that So(t) > 0 P-a.8. for all t 2 0.
   The main problem is to give conditions for absence of arbitrage in this model,
and these are easily obtained by moving to the "normalized" economy where we
use Soas a numeraire.
   Thus: instead of looking at the price vector process S = [So,Sl,. . . , SN]we
look at the relative price vector process S(t)/So(t), where we have used Soas the
numeraire price. This object will be studied in more detail in Chapter 24.
Definition 10.11 The normalized economy (also referred to as the
"2-economy ") is defined by the price vector process 2, where

                                          -
                                  Z(t) = s ( t >
                                         S o (t) '
i.e.



   The point of this is that in the Z economy we have a risk free asset 20r 1,
with zero rate of return, so the simple idea is to apply the results from the
previous sections to the 2 economy.
   First, however, we have two price systems to keep track of: the S-system and
the 2-system, and before going on we have to clarify the relations between these
                                         THE GENERAL CASE                                     143


        systems. In particular, for any portfolio process h there will be associated two
        value processes, one in the S system and one in the Z system, and we thus need
        to introduce some notation.
        Definition 10.12
                                                                 +
                A portfolio strategy is any adapted ( n 1)-dimensional process

                                         h ( t ) = [ho(t),hl (t),. - hn (t)]
                                                                   - 7



        I       The S-value process        vs(t;h ) corresponding to the portfolio h is given
                                                           n
                                              h )= C h,(t)~,(t).
                                           vS(t;                                         (10.25)
                                                          i=O
        J       The Z-value process vZ(t;
                                       h ) corresponding to the portfolio h is given by




        p       A portfolio is said to be admissible i f it is admissible i n the sense of
    (   f.,
                Definition 10.2 as a Z portfolio.
                An admissible portfolio is said to be S-self-financing zf
    1
                                                           n
                                         d v s (t;h ) =   C hi (t)dSi (t).                (10.27)
                                                          i=O
        L       A n admissible portfolio is said to be Z-self-financing if
                                                           n
                                         d v Z (tih ) =   C h i ( t )dZi(t).              (10.28)
                                                          i=O
            We can also make the obvious definitions of a given T-claim being S-reachable
        and Z-reachable, respectively.
            The intuitive feeling is that the concept of a self-financing portfolio should
        not depend upon the particular choice of numeraire. That this is indeed the case
        is shown by the following "Invariance Lemma".
        Lemma 10.13 (Invariance lemma) With assumptions and notation as
        above, the following hold:
             (i) A portfolio h is S-self-financing i f and only i f it is 2-self-financing.
            (ii) The value processes vS and vZare connected by

I                                         vZ(t;   1 - vS(t;
                                             h) = -      h).
                                                          So (t)
144       THE MARTINGALE APPROACH TO ARBITRAGE THEORY


 (iii) A claim Y is S-reachable if and only if the claim




      is 2-reachable.
      The model is Z arbitrage free if and only zf it is S arbitrage free.

Proof Items (ii) and (iii) are obvious. Thus it only remains to prove the self
financing result, and for simplicity we assume that all processes possess stochastic
differentials driven by a finite number of Wiener processes. Assume therefore that
the portfolio h is S-self-financing. Denoting the scalar product between vectors
by the "scalar dot" ., using the notation P = So,and suppressing the t-variable,
we have from this assumption that
                                           1   I


                                       2 = P-~S,                             (10.29)
                                     vS = h . ~ ,                            (10.30)
                                     vZ= p-fvS,                              (10.31)
                                    dvS= h . d ~ .                           (10.32)

We now want to prove that in fact



Using the It6 formula on Z = P-'S, we thus want to prove that

                  d v Z = /3-'h.    dS   + h s dp-' + h - dSdp-l.            (10.33)

Now, from-(10.31) we have



Substituting (10.30) and (10.32) into this equation gives

                  d v Z = /3-'h    . d S + h - s dp-' + dp-'h . dS,
which is what we wanted to prove.

   We may now formulate and prove the main result concerning absence of
arbitrage.
Theorem 10.14 (The First Fundamental Theorem) Consider the market
model So,S1,.. . , SN where we assume that So(t) > 0, P-a.s. for all t 2 0.
                                       COMPLETENESS                                      145


'
        Assume furthermore that So,S1,. . , SNare locally bounded. Then the following
I       conditions are equivalent:
             The model satisfies NFLVR.
              There exists a measure Q P such that the processes
                                        N




                                            z o , z l , . .. , Z N ,
             defined through (lO.24), are local martingales under Q .
        Proof This follows directly from the Invariance Lemma and from
p       Theorem 10.10.
        Remark 10.3.1 From now on we will use the term "martingale measure" to
/ denote the (not necessarily unique) local martingale measure of Theorem 10.14.
; 10.4         Completeness
        In this section we assume absence of arbitrage, i.e. we assume that there exists a
        (local) martingale measure. We now turn to the possibility of replicating a given
        contingent claim in terms of a portfolio based on the underlying assets. This
        problem is most conveniently carried out in terms of normalized prices, and we
        have the following useful lemma, which shows that hedging is equivalent to the
        existence of a stochastic integral representation of the normalized claim.
b       Lemma 10.15 Consider a given T-claim X . Fix a martingale measure Q and
        assume that the normalized claim X/So(T) is integrable. If the Q-martingale M ,
        defined bu


        admits an integral representation of the form




        then X can be hedged i n the S-economy. Furthermore, the replicating portfolio
    , (ho,hl,. . . , h ~ lis) given by (10.35) for (hl,. . . , h K ) , whereas ho is given by
    : ho(t) = M(t) - c,N_I hi(t)Zi(t).
        Proof We want to hedge X in the S economy, i.e. we want to hedge X/So(T) in
        the Z economy. In terms of normalized prices, and using the Invariance Lemma,
        we are thus looking for a process h = (ho,hl, . . . , h ~ such
                                                                   ) that
146        THE MARTINGALE APPROACH TO ARBITRAGE THEORY


where the normalized value process is given by
                                                        N
                          h ) = ho(t) 1 + C h,(t)&(t).
                       vZ(t;
                                                    i=l


A reasonablk guess is that M = vZ,so we let M be defined by (10.34).
Furthermore we define ( h l ,. . . , h N ) by (10.35),and we define ho by
                                              N
                          ho(t) = M ( t ) -   C hs(t)Z*(t).
                                              r=l

Now, from (10.38) we obviously have M = vZ,and from (10.35) we get
                                                  N
                             dvZ= dM =            C h, dZ,,
                                                  i=l

which shows that the portfolio is self financing. Furthermore we have




which shows that X is replicated by h.
    We thus see that, modulo some integrability considerations, completeness is
equivalent to the existence of a martingale representation theorem for the dis-
counted price process. Thus we may draw on the deep results of Jacod (1979)
from semimartingale theory which connect martingale representation properties
for Z with the extremal points of the set of martingale measures.
Theorem 10.16 (Jacod) Let M denote the (convex) set of equivalent mar-
tingale measures. Then, for any f i e d Q € M , the following statements are
equivalent.
        Every Q local martingale M has dynamics of the form
                                              N
                                d M ( t )=   C hi (t)dZi(t).
                                             i=l
        Q is an extremal point of M .
      We then have the second fundamental theorem of mathematical finance.
Theorem 10.17 (The Second Fundamental Theorem) Assume that the
market is arbitrage free. Then the market is complete i f and only i f the martingale
measure is unique.
                                    MARTINGALE PRICING                                 147


        Proof If the martingale measure Q is unique then M is a singleton M = {Q)
        so Q is trivially an extremal point of M. Thus the Jacod Theorem provides
        us with a stochastic integral representation of every Q-martingale, and it then
        follows from Lemma 10.15 that the model is complete. The other implication
        follows easily from (10.56) of Proposition 10.25.

        Remark 10.4.1 The reader may find the proof given above rather abstract,
        and we provide two alternatives:
             A more functional analytic proof of the Second Fundamental Theorem
             would be roughly as follows: The market is unique if and only if the set C
    t        of reachable claims at zero initial cost has codimension one, i.e. if

                                             Lw = C $ R . Y

             for some Y E L m. This implies that the separating hyperplane implied
             by the Kreps-Yan Theorem (10.7) is ,unique and thus that the martingale
             measure is unique.
             In Section 14.3 we provide a self-contained and complete proof of the
             Second Fundamental Theorem for the special case of purely Wiener driven
I            models.

        10.5 Martingale Pricing
        We now turn to the pricing problem for contingent claims. In order to do this,
                                                    .
        we consider the "primary" market So,Sl, . . , SNas given a priori, and we fix a
        T-claim X . Our task is that of determining a "reasonable" price process II(t; X )
        for X, and we assume that the primary market is arbitrage free. There are two
        main approaches:
1            The derivative should be priced in a way that is consistent with the
             prices of the underlying assets. More precisely we should demand that the
             extended market II( ;X ), So, 4 , . . ., SNis free of arbitrage possibilities.
             If the claim is attainable, with hedging portfolio h, then the only
t
             reasonable price is given by n(t;X ) = V(t; h).
1
           In the first approach above, we thus demand that there should exist a martin-
        gale measure Q for the extended market II(X), So,Sl,. . . , SN.Letting Q denote
        such a measure, assuming enough integrability, and applying the definition of a
        martingale measure we obtain




        We thus have the following result.
    148       THE MARTINGALE APPROACH TO ARBITRAGE THEORY


    Theorem 10.18 (General Pricing Formula) The arbitrage free price pro-
    cess for the T-claim X is given by

                              n(t;X ) = S O ( ~ ) E-
                                                   ~
                                                     [ so?T) I  I.             (10.41)
    where Q is the (not necessarily unique) martingale measure for the a priori given
    market So,S 1 , .. . , S N , with So as the numemire .
       Note that different choices of Q will generically give rise to different price
    processes.
       In particular we note that if we assume that if SOis the money account



    where r is the shorturate,then (10.41) is reduced to the familiar "risk neutral
    valuation formula".
    Theorem 10.19 (Risk Neutral Valuation Formula) Assuming the ezist-
    ence of a short rate, the pricing formula takes the form

                          ,   n(t;X ) = EO [e-        r(s)   d s ~ IF~],       (10.42)

    where Q is a (not necessarily unique) martingale measure with the money account
    as the numemire.
        For the second approach to pricing let us assume that X can be replicated
    by h. Since the holding of the derivative contract and the holding of the replic-
    ating portfolio are equivalent from a financial point of view, we see that price of
    the derivative must be given by the formula

                                      n ( t ;X ) = V ( t ;h).                  (10.43)

    One problem here is what will happen   - - in a case when X can be replicated bv      1
    two different portfolios, and one would also like to know how this'formula is
    connected to (10.41).
        Defining n ( t ;X ) by (10.43) we see that n(t;X ) / S o ( t ) = V Z ( t ) and
    since, assuming enough integrability, vZis a &-martingale, we see that also
    ll(t;X) / S o ( t )is a Q-martingale. Thus we again obtain the formula (10.41) and
    for a attainable claim we have in particular the formula

                               V ( t ;h) = so(t)EQ
                                                     [          14,            (10.44)

    which will hold for any replicating portfolio and for any martingale measure Q.
    Thus we see that the two pricing approaches above do in fact coincide on the set
    of attainable claims. In Section 10.7 we will summarize our results.




v
                          STOCHASTIC DISCOUNT FACTORS                              149


I   10.6 Stochastic Discount Factors
I In the previous sections we have seen that we can price a contingent T-claim X
' by using the formula



1 where Q is a martingale measure with the money account as a numeraire. In some
  applications of the theory (in particular in asset pricing) it is common to write
  this expected value directly under the objective probability measure P instead
I of under Q. This can easily be obtained by using the likelihood process L, where
1 as usual L is defined on the interval [0,T ] through
I




    Using the Abstract Byes' Formula we can now write (10.45) as




    which naturally leads us to the following definition.
    Definition 10.20 Assume the existence of a short rate r . For any fixed martin-
    gale measure Q , let the likelihood process L be defined by (10.46). The stochastic
    discount factor (SDF) process A, corresponding to Q , is defined as



      We thus see that there is a one-to-one correspondence between martingale
    measures and SDFs. We have now more or less proved the following result.
    Proposition 10.21 Assume absence of arbitrage. With notation as above, the
    following hold:
         For any suficiently integrable T-claim X , the arbitrage free price is
         given by



         For any arbitrage free asset price process S(derivative or underlying) the
         process
                                          A(t>s(t)                          (10.49)
         is a (local) P-martingale.
150       THE MARTINGALE APPROACH TO ARBITRAGE THEORY


      The P-dynamics of A is given by




Proof    The remaining details of the proof are left to the reader.               0
    Although SDFs and martingale measures are logically equivalent, it is often
convenient to be able to switch from one to the other. The main advantage of
using the martingale measure formalism is that it provides us with a canonical
decomposition of the SDF as the (inverse) bank account multiplied by the like-
lihood process L, and we can then use the deep and well established theory for
likelihood processes (see Chapter 11).
    We may.,also, in the obvious way, define stochastic discount factors for other
choices of the numeraire then the money account.
    An alternative approach to SDFs is to define an SDF as any nonnegative ran-
dom process A possessing the property that S(t)A(t) is a (local) P-martingale for
every asset price process S. The First Fundamental Theorem can then be restated
as the equivalence between absence of arbitrage and the existence of an SDF.

10.7 Summary for t h e Working Economist
In this section we summarize the results for the martingale approach. We con-
sider a market model consisting of the asset price processes So,Sl,. . . , SN on
the time interval [O,T].The "numeraire process" So is assumed to be strictly
positive. Modulo some technicalities we then have the following results. The first
provides conditions for absence of arbitrage.
Theorem 10.22 (First Fundamental Theorem) The market model is f i e
of arbitrage if and only if there exists a martingale measure, i.e. a measure
Q P such that the processes
  N




are (local) martingales under Q.
   For the case when the numeraire is the money account we have an alternative
characterization of a martingale measure. The proof is a simple application of
the It6 formula.
Proposition 10.23 If the numeraire So is the money account, i.e.



where r is the (possibly stochastic) short rate, and if we assume that all processes
are Wiener driven, then a measure Q P is a martingale measure if and only
                                        N
                   SUMMARY FOR THE WORKING ECONOMIST                                               151


if all assets So, S I ,. . . , S N have the short rate as their local rates of return, i.e.
if the Q-dynamics are of the form

                      d S i ( t ) = S i ( t ) r ( t )d t   + S i ( t ) a i ( t )d w Q ( t ) ,   (10.51)

where W Qis a (multidimensional) Q - Wiener process.
      The second result gives us conditions for market completeness.
T h e o r e m 10.24 ( S e c o n d F u n d a m e n t a l T h e o r e m ) Assuming absence of
arbitrage, the market model is complete if and only if the martingale measure
Q is unique.
   As far as pricing o f qontingent claims is concerned the theory can be
summarized as fpllows.
Proposition 10.25
    , 1. In order to avoid arbitrage, X must be priced according to the formula

                                  n(t;x)= s o ( t ) ~-
                                                     Q
                                                                     [ so?T) I                  (10.52)

e:       where Q is a martingale measure for [So,&,. . . , S N ] , with So as the
         numeraire.
      2. In particular, we can choose the bank account B(t) as the numeraire. Then
         B has the dynamics
                                    d B ( t ) = r ( t ) B ( t )dt,          (10.53)
         where r is the (possibly stochastic) short rate process. In this case the
         pricing formula above reduces to

                                 n(t;X ) = EQ [ e - s : r ( s ) d s ~ IF ~. ]                   (10.54)

      3. Different choices of Q will generically give rise to diferent price processes
         for a jked claim X . However, if X is attainable then all choices of Q will
         produce the same price process, which then is given by

                                               H(t; X ) = V ( t ;h ) ,                          (10.55)
5
         where h is the hedging portfolio. Different choices of hedging portfolios (zf
         such exist) will produce the same price process.
      4. In particular, for every replicable claim X it holds that

                                     t ;= EQ [ e - J T r ( s ) d s ~~ I t . ]
                                 ~ ( h)
152         THE MARTINGALE APPROACH TO ARBITRAGE THEORY


    Summing up we see that in a complete market the price of any derivative
will be uniquely determined by the requirement of absence of arbitrage. The
price is unique precisely because the derivative is in a sense superfluous-it can
equally well be replaced by its replicating portfolio. In particular we see that the
price does not depend on any assumptions made about the risk-preferences of
the agents in the market. The agents can have any attitude towards risk, as long
as they prefer more (deterministic) money to less.
    In an incomplete market the requirement of no arbitrage is no longer suffi-
cient to determine a unique price for the derivative. We have several martingale
mevures, all of which can be used to price derivatives in a way consistent with
no arbitr~ge.The question which martingale measure one should use for pricing
has a very simple answer: The martingale measure is chosen by the market.
    Schematically speaking the price of a derivative is thus determined by two
major factors.
   1. We require that the derivative should be priced in such a way as to
      not introduce arbitrage possibilities into the market. This requirement is
      reflected by the fact that all derivatives must be priced by formula (10.52)
      where the same Q is used for all derivatives.
   2. In an incomplete market the price is also partly determined by aggregate
      supply and demand on the market. Supply and demand for a specific deriv-
      ative are in turn determined by the aggregate risk aversion on the market,
      as well as by liquidity considerations and other factors. All these aspects
      are aggregated into the particular martingale measure used by the market.
    Let us now assume that we have specified some model under the objective
probability measure P. This means that we have specified the P-dynamics of all
asset prices in the primary market. We may also have specified the P-dynamics of
some processes which are not price processes, like the inflation rate, the unem-
ployment rate, or the outside temperature (which influences the demand for
electric energy).
    In order to be able t o apply the theory developed above, it is then clear that
we need the following tools:
        We need to have full control of the class of equivalent measure transform-
        ations that can be made from a given objective measure P.
        Given an equivalent measure Q (a potential martingale measure), we must
        be able to write down the Q-dynamics of all processes under consideration.
        We need theorems which allow us to write certain stochastic variables ( t y p
        ically contingent claims) as stochastic integrals of some given processes
        (typically normalized asset prices).
   All these tools are in fact provided by the following mathematical results
which are the objects under study in the next chapter.
      a The Martingale Representation Theorem for Wiener processes.
        The Girsanov Theorem.
                                   NOTES


10.8 Notes
The martingale approach to arbitrage pricing was developed in Harrison
and Kreps (1979), Kreps (1981), and Harrison and Pliska (1981). It was
then extended by, among others, Duffie and Huang (1986), Delbaen (1992),
Schachermayer (1994), and Delbaen and Schachermayer (1994). In this chapter
we follow closely Delbaen and Schachermayer (1994) for the case of loc-
ally bounded price processes. The general case of unbounded price processes
and its connection to sigma-martingales was finally resolved in Delbaen and
Schachermayer (1998), which also contains further bibliographic information on
this subject. Rudin (1991) is a standard reference on functional analysis, which
is also treated in Royden (1988).
    Stochastic discount factors are treated in Duffie (2001), and in most modern
textbooks on asset pricing such as Cochrane (2001).

              5   I




                                                                                                                 . I
                                    i       '               I           11

                           %   B    i\+&+       t I f S ! < . f i        .,L3c {,it                               1
                                    r           .%>< .j         -1,i            +:      $<    &<.   ,
                                    3'            [,!'f,        { f ~ , - ( % 7 < s \        6 7    '   3   :1
                     THE MATHEMATICS O F THE
                      MARTINGALE APPROACH*

Iri this ,chapter, we will present the two main workhorses of the martingale
approach to arbitrage theory. These are:
     The Martingale Representation Theorem, which shows that in a Wiener
     world every martingale can be written as a stochastic integral w.r.t. the
     underlying Wiener process.
     The Girsanov Theorem, which gives us complete control of all absolutely
     continuous measure transformations in a Wiener world.

11.1 Stochastic Integral Representations
Let us consider a fixed time interval [O,T], a probability space ( M , F , P),
with some filtration {Ft't),,o,  and an adapted vector Wiener process W =
(WI,. . . , Wd)*. Now fix a vector process h = (hi,. . . , hd) which is "integrable
enough" (e.g. h E E2 is enough) and a real number xo. If we now define the
process M by




then we know that M is a martingale. In other words: under mild integrability
conditions, every stochastic integral w.r.t. a Wiener process is an Ft-martingale.
A very natural and important question is now whether the converse holds, i.e.
if every Ft-adapted martingale M can be written in the form (11.1). If this is
indeed the case, then we say that M has a stochastic integral representation
w.r.t. the Wiener process W.
    It is not hard to see that in the completely general case, there is no hope for
a stochastic integral representation w.r.t. W for a general martingale M. As a
counterexample, let W be scalar (i.e. d = 1) and consider, apart from W, also
a Poisson process N, with constant intensity A, where N is independent of W.
Now define the filtration by Ft =    3FN,     i.e. Ft contains all the information
generated by W and N over the interval [0, t].
    It is now very easy to see that the process M defined by


is an &-martingale. If we look at the trajectories of M , they consist of straight
lines with downward slope A, interrupted at exponentially distributed points
                      STOCHASTIC INTEGRAL REPRESENTATIONS                            155


I in time by positive jumps of unit size. From this it is obvious that M can
  possess no stochastic integral representation of the form (11.1), since any such
, representation implies that M has continuous trajectories. The intuitive reason
  is of course that since M is independent of W, we cannot use W in order to
  represent M.
      From this example it is clear that we can only hope for a stochastic integ-
  ral representation result in the case when {.Ft}t,o is the internal filtration
1 generated by the Wiener process W itself. We start with the following basic
1 representation for Wiener functionals, which in turn will give us our martingale
  representation result.
    Theorem 11.1 (Representation of Wiener Functionals) Let W be                       a
    d-dimensional Wiener process, and let X be a stochastic variable such that
             XEFF,
             E [ [ X I ]< m.
    Then there exist uniquely determined .Ftw-adapted processes hl, . . . , hd, such that
    X has the representation


                               X = E [XI +
                                             i=l
                                                   1
                                                   0
                                                       '   h, ( s )d Wi( s )


    Under the additional assumption


f

1   then hl, . . . , hd are i n E2

    Proof We only give the proof for the L2 case, where we present the main ideas
    of a particularly nice proof from Steele (2001). For notational simplicity we only
    consider the scalar case.
        We start by recalling that the GBM equation




    has the solution
                                     X - -+u2t+uwt
                                       t-e

    Writing the SDE on integral form as
156         THE MATHEMATICS OF THE MARTINGALE APPROACH


and plugging (11.3) into (11.4) we obtain, after some reshuffling of terms,




Using the same argument we easily obtain, for s 5 t,




where the important point is that the integral is only over the interval [s, t]. Thus
any stochastic variable Z of the form

                              Z = exp {a(Wt - W,))

will have a representation of the form




where h E 0 outside [s,t]. From this it follows easily (see the exercises) that any
variable Z of the form




                        .
where 0 5 to 5 tl 5 . . 5 t, 5 T, has a representation of the form




It is now fairly straightforward to see that also any variable of the form


                        z=   nn


                             k=l
                                   exp {iok (WT. - WT.-,)}   9                 (11.8)


where i is the imaginary unit, has a representation of the form (11.7). At this
point we may use Fourier techniques to see that the set of variables of the form
(11.8) is dense in the (complex) space L2(FT), and from this one can deduce
that in fact every Z E L2(FT) has a representation of the form (11.7). See Steele
(2001) for the details.

      From this result we now easily obtain the martingale representation theorem.
                STOCHASTIC INTEGRAL REPRESENTATIONS                               157


Theorem 11.2 (The Martingale Representation Theorem) Let W be a
d-dimensional Wiener process, and assume that the filtration % is defined as



Let M be any Ft-adapted martingale. Then there exist uniquely determined
Ft-adapted processes hl, . . . , hd such that M has the representation




If the martingale M is square integrable, then hl, . .. , hd are i n .H2.
Proof    From Theorem 11.1 we have




The result now follows by taking conditional expectations and using the fact
that M as well ai the stochastic integral is a martingale.
   It is worth noticing that the martingale representation theorem above is an
abstract existence result. It guarantees the existence of the processes hl, . . . , hd,
but it does not tell us what the h process looks like. In fact, in the general case
we know very little about what exact form of h. The most precise description
of h obtained so far is via the secalled Clarc-Ocone formula (see the Notes),
but that requires the use and language of Malliavin calculus so it is outside the
present text.
   In one special case, however, we have a rather explicit description of the integ-
rand h. Let us therefore assume that we have some a priori given n-dimensional
process X with dynamics of the form



where W is as above, whereas p and a are adapted processes taking values in Rn
and M(n, d), respectively. Let us now assume that the martingale M is of the
very particular form M ( t ) = f ( t ,X ( t ) ) for some deterministic smooth function
f (t, x). From the It6 formula we then have




where A is the usual Ito operator. Now; since f ( t , X t ) was assumed to be a
martingale, the drift must vanish, so in fact we have
158       THE MATHEMATICS OF THE MARTINGALE APPROACH


Written out in more detail this becomes




where ai is the ith row of a. In this particular case we thus have the explicit
description of the integrand h as

                               (t, X(t))ai(t), i = 1, . . . , d.



11.2 The Girsanov Theorem: Heuristics
We now start a discussion of the effect that an absolutely continuous measure
transformation will have upon a Wiener process. This discussion will lead us to
the Girsanov Theorem which is the central result of the next section.
                                               z)
    Assume therefore that our space (52, F,P, carries a scalar P-Wiener p r e
cess WP, and that for some fixed T we have changed to a new measure Q on
FT by choosing a nonnegative random variable LT E FT and defining Q by



This measure transformation will generate a likelihood process (see Section C.3)
{Lt; t 2 0) defined by
                              L~= -dQ on F ~ ,
                                   d P'
and from Proposition C.12 we know that L is a P-martingale.
   Since L is a nonnegative P-martingale, and since any (suitably integrable)
stochastic integral w.r.t. W is a martingale, it is natural to define L as the
solution of the SDE




for some choice of the process cp.
    It thus seems that we can generate a large class of natural measure
transformations from P to a new measure Q by the following prescription:
      Choose an arbitrary adapted process h.
      Define a likelihood process L by
b                          THE GIRSANOV THEOREM: HEURISTICS


           Define a new measure Q by setting



           on Ft for all t E [0, TI.
                       /

         By applying the It6 formula we easily see that we can express L as

                                  Lt --e J:~.d~;-t.f,t~:ds,

     so L is nonnegative,kvhich is necessary if it is going to act as a likelihood pro-
     cess. If cp is integrable enough (see the Novikov condition below) it is also clear
     (why?) that L is a martingale and the initial condition Lo = 1 guarantees that
     EP [Lt]= 1.
         To see what the dynamics of W P are under Q, let us first recall that if a
     process X has the dynamics



     then the drift p and (squared) diffusion a has the interpretation of being the con-
     ditional drift and quadratic variation processes respectively. A bit more precisely,
     but still heuristically, we have

                                       EP [dXtI 3 t ] =   dt,
                                  E~ [(dxt121K] = 02 dt,

     where we have the informal interpretation dXt = Xt+dt- Xt. Let us now define
     the process X by X = WP, i.e. we have p = 0 and a = 1 under P. Our task is
     to compute the drift and diffusion under Q and for that we will use the Abstract
     Bayes' Theorem (B.41). Using the fact that L is a P-martingale, and recalling
     that dXt E 3t+dt  (see definition above), we obtain




                                - E P [Lt dXt
                                -               +LtdLt dXt 1 Ft]
                                 ' [Lt dXt 1 h] E P ( dLt d x t 1 3 t I
                                -E                  +




                                          Lt                    Lt
    i Since L is adapted (so Lt E F t ) and X has zero drift under P, we have
160        THE MATHEMATICS OF THE MARTINGALE APPROACH


Furthermore we have

      dLt dXt = Ltcpt dW; (0. dt       + 1 - d ~ : ) = Ltcpt (dw;)'      = Ltpt dt.

Using this and the fact that Ltvt E Ft we get

                         EP [dLt dXtI3tl - Ltcpt
                                 Lt
                                             - -dt        = cpt dt.
                                                  Lt

   Using the fact that under P we have dX? = dt we can also easily compute
the quadratic variation of X under Q as


        EQ [ ( d ~ t , ' I3t] = EP [ ~ t + d.t (dxt12 I.Ft] - E [ ~ t + d.td t l ~ t ]
                                                                 P

                                           fit                         Lt



   Summing up we have thus obtained the formal relations

                                   EQ [dXtI 3 t ] = cpt dt,
                              EQ [(dxt)'l f i ] = 1 . dt,

or in other words:
     The process X = wPwas, under P, a standard Wiener process with unit
     diffusion term and zero drift.
   o Under the probability measure Q defined above, the drift process for X
     has changed from zero to cp, while the diffusion term remains the same as
     under P (i.e. unit diffusion).

11.3 The Girsanov Theorem
Rephrasing the results of the previous discussion, we thus see that we should be
able to write the P-Wiener process wPas



where W Q is a Q-Wiener process. This is precisely the content of the Girsanov
Theorem, which we now formulate.

Theorem 11.3 (The Girsanov Theorem) Let WP be a d-dimensional
standard P-Wiener process on (O,F,P,$) and let cp be any d-dimensional
                             THE GIRSANOV THEOREM                               161



j adapted column vector process. Choose a @ed T and define the process L on
  10, TI by
I




/ Assume that
                                      E~ [LT]= 1,
    and define the new probability measure Q on 3 T by




1 Then
[                               dw:    = cpt dt   + dw?,
    where WQ is a Q-Wiener process.
    Remark 11.3.1 An equivalent, but perhaps less suggestive, way of formulating
    the conclusion of the Girsanov Theorem is to say that the process WQ, defined by




    is a standard Q-Wiener process.

    Proof We only give the proof in the scalar case, the multidimensional case
    being a straightforward extension. Using the formulation in Remark 11.3.1 we
    thus have to show that, for s < t and under Q , the increment W? - W       : is
    independent of FS,  and normally distributed with zero mean and variance t - s.
    We start by considering the special case when s = 0 and we thus want ta show
    that, for any t , W? is normal with zero mean and variance t under Q. Using
    characteristic functions it is thus enough to show that for all t E R+ and u E R
    we have
                                    EQ [ e i ~ ~ =
                                                 F ]e- $ t 9




       To show this, let us choose any fixed u, and define the process Z by
        162       THE MATHEMATICS OF THE MARTINGALE APPROACH


        The dynamics of Z are given by

                      dzt = Lt . d(eiuwp)+ e i u w p d ~+t d(eiuw?) .                 (11.21)

        From the definitions we have

                                        dLt = ptLt dw,P,
                                      dw? = dw; - cpe dt,

        so, remembering that wP is P-Wiener, the It6 formula gives us




        Plugging this, and the L-dynamics above into (11.21), we obtain

                                             u2
               dZt = iuZt dw; - iuZtcpt dt - -Zt dt
                                              2
                                                           + ptZt d ~ +; iucptZt dt
                                               u2
                    = {iuZt   + cptZt) d w r - -
                                               2
                                                  Zt dt.


i
I
        Since wP is P-Wiener, standard technique gives us
                                                      us
                                         E~ [Zt]= e - ~ ' ~ ,

        which finishes the proof in the special case when s = 0.
           In the general case we want to prove that for any s 5 t



        and this is equivalent (why?) to proving that



        for every A E 3,.To prove (11.22) we define, for fixed s and A E FS,
                                                                           the process
        {zt;t L s) by
!                                                -
                                 Zt = Lt - IA eiu(w,Q- w.Q) ,
        and then we can proceed exactly as above.
        Remark 11.3.2 The process cp above will often be referred to as the Girsanov
    t   kernel of the measure transformation.
                           THE GIRSANOV THEOREM                                       163


Remark 11.3.3 In the formulation above we have used vector notation.
Written on component form, and with obvious notation, the L-dynamics will
have the form
                                             d
                           dL(t) = L(t)     C cp&) d ~ P ( t ) ,
                                            i=l

and explicit form of L will be given by


            ~ ( t =) exp   ( ~ 1
                            d     t
                                      vi(s) ~ W P ( S )-    /
                                                            0 ~
                                                                t d
                                                              j=l~ : ( s ) d s )



Since this process is so important it has a name of it's own:

Definition 11.4 For any Wiener process W and any kernel process cp, the
Doleans exponential process & is defined by


       & (cp * W) (t) = exp     {l    cp*(s) d ~ ( s-)   ;Jdf   llcp112(~)
                                                                         ds)       (11.23)


   With notation as above we thus have

                                 L(t) = E (cp * W) (t).                            (11.24)

Remark 11.3.4 Note that in the Girsanov Theorem we have to assume ad hoc
that h is such that E P [LT]= 1 or, in other words, that L is a martingale. The
problem is one of integrability on the process Lcp, since otherwise we have no
guarantee that L will be a true martingale and in the general case it could in fact
happen that EP [LT] < 1. A sufficient condition for E~ [LT]= 1 is of course that
the process L . cp is in E2 but it is not easy to give a general a priori condition
on cp only, which guarantees the martingale property of L. This problem used
to occupy a minor industry, and the most general result so far is the "Novikov
Condition" below.

Lemma 11.5 (The Novikov Condition) Assume that the Girsanov kernel cp

                                EP [e: :
                                       I    It** ll'dt] <                          (11.25)

Then L is a martingale and in particular E~ [LT]= 1.

There are counter examples which show that the exponent $ in the Novikov
condition cannot be improved.
        164       THE MATHEMATICS OF THE MARTINGALE APPROACH


        11.4 The Converse of the Girsanov Theorem
        If we start with a measure P and perform a Girsanov transformation, according
        to (11.16)-(11.20), to defme a new measure Q, then we know that Q << P.
        A natural question to ask is now whether all absolutely continuous meas-
        ure transformations are obtained in this way, i.e. by means of a Girsanov
        transformation.
            It is clear that in a completely general situation, this cannot possibly be
        true, since the Girsanov transformation above is completely defined in terms
        of the Wiener process W P whereas there could be many other processes living
        on (R,3,P,  z).   However, in the case where the filtration {3t}t>o is the one
        generated by the Wiener process itself, i.e. in the case when we have no other
    I
        sources of randomness apart from wP, then we have a converse result of the
    I   Girsanov Theorem.
        Theorem 11.6 (The Converse of the Girsanov Theorem) Let WP be a
        d-dimensional standard (i.e. zero drift and unit variance independent wmpon-
        ents) P-Wiener process on (R,3,P, 3) and assume that



        Assume that there exists a probability measure Q such that Q << P on FT.
        Then there exists an adapted process cp such that the likelihood process L has
        the dynamics




        Proof We know from Theorem C.12 that the likelihood process L is a
        P-martingale. Since the filtration is the one generated by W P we deduce from the
        Martingale Representation Theorem (11.2) that there exists a process g such that


        Now we simply define cp by
                                                1

        and the proof is basically finished. There remains a small problem, namely what
        happens when Lt = 0 but also this can be handled and we omit it.
          This converse result is very good news, since it implies that for the case of a
        Wiener filtration we have complete control of the class of absolutely continuous
        measure transformations.
i
I
I       11.5 Girsanov Transformations and Stochastic Differentials
I
1       We will now discuss the effect that a Girsanov transformation has on the dynam-
        ics of a more general It6 process. Suppose therefore that, under the original
                         MAXIMUM LIKELIHOOD ESTIMATION


     measure P, we have a process X with P-dynamics



   where w P is a (possible multidimensional) standard P-Wiener process, and
   where p and c are adapted and suitably integrable. Suppose furthermore that
 i we perform a Girsanov transformation with kernel process cp and transform from
   P to a new measure Q. The problem is to find out what the Q-dynamics of X
   look like.
      This problem is easily solved, since from the Girsanov Theorem we know that
 E we can write
                                                 +
                                 dw; = cpt d t dw,&,
     where W Qis Q-Wiener. We now simply plug this expression into the X-dynamics
     above, collect the dt-terms and obtain

                            dXt = {pt   + ctcpt) dt + ctdw,& dt.
'\   The moral of this is as follows:
     ,    The diffusion term is unchanged.
          The drift term is changed from p to p    + acp.
     11.6 Maximum Likelihood Estimation
     In this section we give a brief introduction to maximum likelihood (ML) estim-
     ation for It6 processes. It is a bit outside the main scope of the book, but since
     ML theory is such an important topic and we already have developed most of
     the necessary machinery, we include it.
         We need the concept of a statistical model.
     Definition 11.7 A dynamic statistical model over a finite time interval [0,T]
     consists of the following objects:
           A measurable space ( f l , 3 ) .
           A $ow of infornation on the space, formalized by a filtration T = {3t}t20.
           A n indexed family of probability measures {Pa; a E A ) , defined on the
           space ( R , F ) , where A is some index set and where all measures are
           assumed to be absolutely continuous on FTw.r.t. some base measure Pa,.
         In most concrete applications (see examples below) the parameter a will be
     a real number or a finite dimensional vector, i.e. A will be the real line or some
     finite dimensional Euclidian space. The filtration will typically be generated by
     some observation process X .
         The interpretation of all this is that the probability distribution is governed
     by some measure Pa, but we do not know which. We do have, however, access
     to a flow of information over time, and this is formalized by the filtration above,
166          THE MATHEMATICS OF THE MARTINGALE APPROACH


so at time t we have the information contained in Ft. Our problem is to try to
estimate a given this flow of observations, or more precisely: for every t we want
an estimate at of a, based upon the information contained in 3t,i.e. based on the
observations over the time interval [O,t].The last requirement is formalized by
requiring that the estimation process should be adapted to E, i.e. that at E Ft.
    One of the most common techniques used in this context is that of finding,
for each t, the ML estimate of a. Formally the procedure works as follows.
        Compute, for each a the corresponding Likelihood process L(a) defined by

                                          dPa
                                 Lt (a) = -, on 3 t .
                                          dPaa

        For each fixed t , find the value of a which maximizes the likelihood
        ratio Lt (a).
        The optimal a is denoted by Bt and is called the ML estimate of a based
        on the information gathered over [0,t].
   As the simplest possible example let us consider the problem of estimating
the constant but unknown drift of a scalar Wiener process. In elementary terms
we could naively formulate the model by saying that we can observe a process X
with dynamics given by

                                 dXt = a d t   + dWt,
                                  Xo = 0.

Here W is assumed to be Wiener under some given measure P and the drift a is
some unknown real number. Since this example is so simple, we do in fact have
an obvious candidate (why?) for the estimator process, namely




      In a naive formulation like this, we have a single underlying Wiener process,
W under a single given probability measure P, and we see that for different
choices of a we have different X-processes. In order to apply the ML techniques
we must reformulate our problem, so that we instead have a single X-process
and a family of measures. This is done as follows.
        Fix a process X which is Wiener under some probability measure Po. In
        other words: under Po,the process X has the dynamics



        where W0 is Po-Wiener.
                                       EXERCISES


         We assume that the information flow is the one generated by observations
         of X ,
            so we define the filtration by setting Ft = 3:. For every real number a,
         we then define a Girsanov transformation to a new measure Pa by defining
         the likelihood process L(a) through

                                    dLt ( a ) = a Lt (a) dXt,
                                     Lo(a) = 1.

         From Girsanov's Theorem it now follows immediately that we can write
                      +
         dWt = a dt dW,", where W" is a Pa Wiener process. Thus X will have
         the Pa dynamics
                                 dXt =adt+dW,"
II We now have a statistical model along the general lines above, and we notice
I   that, as opposed to the case in the naive formulation, we have a single process X ,
1   but the driving Wiener processes are different for different values of a.
       To obtain the ML estimation process for a, we need to compute the likelihood
    process explicitly, i.e. we have to solve (11.26)-(11.27). This is easily done and
    we have
                                   Lt (a) = e".x*-;ff2.t
    We may of course maximize In [Lt(a)] instead of maximize Lt ( a ) so our problem
    is to maximize (over a) the expression



    This trivial quadratic optimization problem can be solved by setting the
    a derivative equal to zero, and we obtain the optimal a as



    Thus we see that in this example the ML estimator actually coincides with our
    naive guess above. The point of using the ML technique is of course that in a
    more complicated situation (see the exercises) we may have no naive candidate,
    whereas the ML technique in principle is always applicable.

    11.7 Exercises
    Exercise 11.1 Complete an argument in the proof of Theorem 11.1 by proving
    that if X and Y are random variables of the form
                                              T
                                 x=xo+Jd          9sdWs7
                                              T
168       THE MATHEMATICS OF THE MARTINGALE APPROACH


and if g and h have disjoint support on the time axis, i.e. if

                         gtht=O,       P-a.s. O S t I T

then
                          = XOYO   +   1T
                                            1X.h. + Kg.] dWs.
Hint: Define the processes Xt and Yt by Xt= xo       + Sot g. dWs and correspond-
ingly for Y and use the It6 formula.
Exercise 11.2 Consider the following SDE:

                         dXt = af(Xt) dt     + a(&) dWt,
                          xo= 20.
Here f and a are known functions, whereas a is an unknown parameter. We
assume that the SDE possesses a unique solution for every fixed choice of a.
   Construct a dynamical statistical model for this problem and compute the
ML estimator process 6t for a,based upon observations of X .

11.8 Notes
The results in this chapter can be found in any textbook on stochastic analysis
such as Karatzas and Shreve (1988), Bksendal (1995), and Steele (2001).
                BLACK-SCHOLES FROM A MARTINGALE
                         POINT OF VIEW*

    In this chaper we will discuss the standard Black-Scholes model from the
    martingale point of view. We thus choose a probability space (R, F , P,E) car-
:   rying a P-Wiener proces W, where the filtration is the one generated by W ,
    i.e. Ft =Fy . On this space we define the model by
                                dSt = aSt dt   + US^ dWt,
                               dBt = rBt dt.

    Note that for ease of notation the P-Wiener process is denoted by w rather
    than by wP.
    12.1 Absence of Arbitrage
    We now want to see whether the model is arbitrage free on a finite interval [0,TI,
    and for that purpose we use the First Fundamental Theorem (10.22) which says
    that we have absence of arbitrage if and only if there exists a martingale measure    I
    Q for our model. We then use the Girsanov Theorem to look for a Girsanov kernel
    process h such that the induced measure Q is a martingale measure. Defining,
                                                                                          i
    as usual, the likelihood process L by                                                 i
                                                                                         ./

    and setting dQ = LT d P on FT,we know from Girsanov's Theorem that                   I

    where W is Q-Wiener. (For ease of notation we write W instead of the earlier
    wQ.)Inserting the above expression into the stock price dynamics we obtain,
    after a collection of terms, the Q-dynamics of S as



    In order for Q to be a martingale measure, we know from (10.51) that the local
    rate of return under Q must equal the short rate. Thus we want to determine
    the process h such that
                                        +
                                     a aht = T .                            (12.3)
170      BLACK-SCHOLES FROM A MARTINGALE POINT OF VIEW


This equation has the simple solution



and we see that the Girsanov kernel process h is in fact deterministic and
constant.
   Furthermore, h has an important economic interpretation: In the quotient
                                     a
                                     - -r
                                       c '
the numerator a - r , commonly known as the "risk premium" of the stock,
denotes the excess rate return of the stock over the risk free rate of return
on the market. In the denominator we have the volatility of the stock, so the
quotient above has an interpretation as "risk premium per unit volatility" or
"risk premium per unit risk". This important concept will be discussed in some
detail later on, and it is known in the literature a s "the market price of risk".
It is commonly denoted by A, so we have the following result.
Lemma 12.1 The Girsanov kernel h is given by

                                     h=- X

where the market price of risk X is defined by

                                   A=-. a - r
                                            u
   We have thus proved the existence of a martingale measure and from the First
Fundamental Theorem we then have the following basic result for the Black-
Scholes model.
Theorem 12.2 The Black-Scholes model above is arbitrage free.
   We note in passing that instead of the standard Black-Scholes model above
we could have considered a much more general model of the form

                           dSt = atStdt   + utSt dWt,
                           dBt = rtBt dt.

where a, a,and r are allowed to be arbitrary adapted (but suitably integrable)
processes with ut # 0 P-a.s. and for all t . The analysis of this more complicated
model would be completely parallel to the one carried out above, with the only
difference that the Girsanov kernel h would now be a stochastic process given
by the formula
                                                    --




                                    PRICING                                   171


As long as this h satisfies the Novikov condition, the market would still be

Remark 12.1.1 The formal reason for the condition ut # 0 is that otherwise
the quotient in (12.6) is undefined. Being a bit more precise, and going back to
the fundamental equation
                                 at+  htut = rt,
we see that we can in fact solve this equation (and thus guarantee absence of
arbitrage) as long as the condition

                              n t = Q =$ a t = r t .

is valid. The economic interpretation of this condition is that if at = 0,then the
stock price is locally riskless with dynamics dSt = Statdt, so in order to avoid
arbitrage with the money account B we must have at = rt.



Consider the standard Black-Scholes model and a fixed T-claim X. F'rom
Proposition 10.25 we immediately have the usual "risk-neutral" pricing formula

                                                 Ft],
                         II(t;X) = e-r(T-t) E~ [XI                          (12.7)

where the Q-dynamics of S are given as usual by

                            dSt = rSr dt   + uSt dWt.
For a general claim we can not say so much more, but for the case of a simple
claim of the form
                                   x
                                   = @(ST),
we can of course, write down the Kolmogorov backward equation for the
expectation and express the price as

                               q t ; X)= F(t, St),

where the pricing function F solves the Black-Scholes equation.

                    aF       aF     1      a2F
                    -+ rs- + -u2s2- - TF= 0,
                              as    2       as2   . .;                      (12.8)
                                              F(T, s) = @(s).

   The moral of all this is that the fundamental object is the risk neutral
valuation formula (12.7), which is valid for all possible claims, whereas the
Black-Scholes PDE is only valid for the case of simple claims.
172      BLACK-SCHOLES FROM A MARTINGALE POINT O F VIEW


12.3 Completeness
We now go on to investigate the completeness of the Black-Scholes model, and
to this end we will use the Second Fundamental Theorem (10.24) which says
that the market is complete if and only if the martingale measure is unique. We
have seen in the previous section that there exists a martingale measure and the
remaining question is whether this is the only martingale measure.
   In the present setting, where the filtration is the one generated by W we know
from Theorem 11.6 that every absoluteIy continuous measure transformation is
obtained from a Girsanov transformation, and since the basic equation (12.3)
has a unique solution, we see that the martingale measure is in fact unique. The
same argument is valid for the more general model above, and we have thus
proved the following result.
Theorem 12.3 The Black-Scholes model (12.1)-(12.2) zs complete. This also
holds for the more general model (12.4)-(12.5).
   J+om an abstract point of view, the theorem above settles the completeness
question, but since it is based on the second fundamental theorem, which in
turn relies on rather abstract martingale theory, the argument is perhaps not
overly instructive. We will therefore provide a more self contained completeness
proof, which more clearly shows the use and central importance of the Martingale
Representation Theorem 11.2.
   We will carry out the argument for the standard Black-Scholes model (12.1)-
(12.2), but the argument goes through with very small changes also for the
more general model above. We will use the technique in Lemma 10.15 and in
terms of the notation of that lemma we identify the numeraire So with the
money account B , and Sl with the stock price S. We then define the normalized
processes Zo and Z1by



Let Q be the (unique) martingale measure derived above, and consider an
arbitrarv T-claim X with


(For the standard Black-Scholes model we may of course take the factor l/B(T)
out of the expectation.) We then define the Q-martingale M by




and it now follows from Lemma 10.15 that the model is complete if we can find
a process hl ( t ) such that
                             dM(t) = hl (t) dZl ( t ) .                  (12.10)
                                    COMPLETENESS                                     173


    In order to prove the existence of such a process hl we use the Martingale

I   Representation Theorem 11.2 (under Q), which says that there exists a process
    g(t) such that
                                dM(t) = g(t) dW(t),                       (12.11)
    where W is the Q-Wiener process defined earlier. With the purpose of connecting
1 (12.11)-(12.10) we now use the Ito formula and the fact that Q is a martingale
    measure for the numeraire B to derive the Q-dynamics of Zl as

                                 dZl (t) = Zl (t)n dW(t).                        (12.12)

    We thus have
                                              1
                                 dW(t) = -         dZl (t),
                                           21(t).
    and plugging this into (12.11) we see that we in fact have (12.10) satisfied with hl
    defined by
                                     hl(t) = -  g(t)
                                              .Zl (t) '
    Again using Lemma 10.15, we have thus proved the following result.
    Theorem 12.4 In the Black-Scholes model (standard as well as extended),
    every T-claim X satisfying




    can be replicated. The replicating portfolio is given by




    where M is defined by (12.9) and g is defined by (12.11).
       This completeness result is much more general than the one derived in
    Chapter 8. The price that we have to pay for the increased generality is that
    we have to rely on the Martingale Representation Theorem which is an abstract
    existence result. Thus, for a general claim it is very hard (or virtually impossible)
    to compute the hedging portfolio in a reasonably explicit way. However, for the
    case of a simple claim of the form



    the situation is of course more manageable. In this case we have
174      BLACK-SCHOLES FROM A MARTINGALE POINT OF VIEW


and from the Kolmogorov backward equation (or from a Feynman-KaE
representation) we have M(t) = f (t, S(t)) where f solves the boundary value
problem




                                                 f (T, s) = e-rT@(s).
Itd's formula now gives us



so in terms of the notation above we have



which gives us the replicating portfolio h as




We have the interpretation f (t, S(t)) = V Z (t), i.e. f is the value of the nor-
malized hedging portfolio, but it is natural to express everything in terms of
the unnormalized value process V(t) rather than in terms of V Z . Therefore,
we define F(t, s) by F(t, s) = ert f (t, s) which gives us the following result which
we recognize from Chapter 8.
Proposition 12.5 Consider the Black-Scholes model and a T-claim of the form
X = @(S(T)). Then X can be replicated by the portfolio




where F solves the Black-Scholes equation
                      dF       dF    1      a2F
                     at + rs-
                    [-      as + -u2s2-as2 rF = 0,
                                     2
                                                  -



firthermore the value process for the replicating portfolio is given by
                                 V(t) = F(t, S(t)).
  9'
                       f



                                        13
                                                                                 irt,

           MULTIDIMENSIONAL MODELS: CLASSICAL                                     I LC)
                       APPROACH

13.1 Introduction
In this chapter, we will generalize the Black-Scholes model to the case where,
apart from the risk free asset, we have several underlying risky assets. In the
present chapter we will carry out the analysis using the "classical" delta-hedging
approach. In Chapter 14 we will then provide a more complete analysis using
the martingale methods of Chapter 10.
   We assume that we have n a priori given risky assets ("stocks") with price
processes Sl(t), . . . , S,(t). The entire asset price vector is denoted by S(t), and
in matrix notation we will write it as a column vector


                                so, =   [ 1;: ]    .


The main problems are those of pricing and hedging contingent claims of the form

                                  x = @(S(T)),
where T as usual is a fixed exercise time.
    In the first sections we will analyze this problem in some detail using the
"classical approach'' developed in Chapters 7 and 8. In Chapter 14 we will then
use the martingale machinery developed in Chapter 10 to extend the analysis
considerably. However, while from a formal point of view, all results obtained by
the elementary approach in the present chapter are special cases of the results of
Chapter 14, there is a substantial amount of economic intuition to be gathered
from the classical approach, so the present chapter is not redundant even for the
mathematically advanced reader.
    The first problem to be attacked is how to construct a "reasonable" math-
ematical model for the dynamics of the asset price vector S, and in this context
we have two demands. We of course want the model to be free of arbitrage pos-
sibilities, and we also want the model to be such that we have a unique arbitrage
free price process H(t; X) for any given claim X.
    From the meta-theorem 8.3.1 we know that we may generically expect absence
of arbitrage if we have at least as many sources of randomness as we have under-
lying assets, so it is natural to demand that the price vector S should be driven
by at least n independent Wiener processes.
176        MULTIDIMENSIONAL MODELS: CLASSICAL APPROACH


    If, on the other hand, we want a unique price process for every claim, then
we need a complete market model, and according to Meta-theorem 8.3.1 this will
only occur if we have at least as many assets as we have sources of randomness.
In order to obtain a nicely behaved model we are thus forced to model the stock
price dynamics using exactly n independent Wiener processes, and we now go
on to specify the formal model.
Assumption 13.1.1 We assume the following:
    Under the objective probability measure P, the S-dynamics are given by               1
                       dSi(t) = ajSi(t) dt   + Si(t) ) d w j (t),
                                                             ~ i j             (13.1)    I
      for i = 1,.. . , n. Here Wl, . . . , wn are independent P- Wiener processes.
       The coefficients ai and u,i above are assumed to be known constants.
                                                                                         4
       The volitility matrix                  -   --
                                           .    -,
                                                >V , J X ,


      is nonsingular.
       We have the standard risk free asset with price process B, where
                                    dB(t) = rB(t) dt.                          (13.2)
    The assumption that the coefficients are constants is made for ease of expos-
ition. Later on we will see that we may allow the coefficients to be functions of
current time and current stock prices, i.e. ai = ai (t, S(t)), uij = oij (t, S(t)).
    In the seauel we will let ~ ( t denote
                                     )     the column vector




and it will be convenient to define the row vector ui as the ith row of the volatility
matrix a, i.e.
                                 uj = [Uil,. . . ,Ujn].
With this notation we may write the stock price dynamics more compactly as
                       dSj(t) = aiSi(t) dt   + Si(t)ui dW(t).                  (13.3)
It is in fact possible to write the S-dynamics even more compactly. For any
n-vector x = (xl, . . . , x,) we let D [XI denote the diagonal matrix
                                        PRICING


    and we let a denote the column vector




1 Using this notation we can write the S-dynamics as

                         dS(t) = D[S(t)]a d t   + D[S(t)]udW(t).                (13.6)


    13.2 Pricing
    We take the market model above as given and we consider a fixed T-claim of
    the form
                                        @(S(T)).
,   The problem is to find the arbitrage free price process II(t; X) for X, and we will
'   do this by using a slight variation of the technique for the one-dimensional case.
    As before we start by assuming that there actually is a market price process for
    the claim, and that the price process is of the form




    for some deterministic function




        Our problem is to find out what F must look like, in order not to intro-
    duce any arbitrage possibilities, if we are allowed to trade in the derivative
    as well as in the underlying assets. More precisely, we want the market
    [Sl(t),. . . , Sn(t), n(t; X)] to be free of arbitrage, and the basic scheme is as
    follows:
         Take the model for the underlying assets, the contract function @, and the
         pricing function F as given.
         Form a self-financing portfolio, based on SI,. . ., Sn,B and F. Since we
                 +
         have n 2 assets, and the portfolio weights must add to unity, this will
                     +
         give us n 1 degrees of freedom in our choice of weights.
         Choose the portfolio weights such that the driving Wiener processes are
         cancelled in the portfolio, thus leaving us with portfolio dynamics of
    ,    the form
                                      dV(t) = V(t)k(t) dt.
178        MULTIDIMENSIONAL MODELS: CLASSICAL APPROACH


      Since we have n driving Wiener processes this will "use up" n degrees of
      freedom.
      Use the remaining degree of freedom in order to force the value dynamics
      to be of the form
                                            +
                              dV(t) = (r P) V(t) dt,
      where ,8 is some fixed nonzero real number. In the equation above we think
      of ,8 as being a positive real number, so we are in effect trying to "beat the
      risk free asset" B by constructing a synthetic risk free asset with higher
      rate of return than the money account. It turns out that this is technically
      possible if and only if a certain matrix is nonsingular.
      Since we assume that the market is free of arbitrage possibilities, it is
      impossible to beat the risk free asset in the way described above. Therefore,
      the matrix mentioned above has to be singular.
      The singularity condition of the matrix leads to a PDE for the pricing
      function F , and the solution of this PDE is thus the unique arbitrage free
      pricing function for the claim X.
    To put these ideas into action we start by computing the price dynamics of
the derivative. The multidimensional It6 formula gives us (see Remark 4.7.1),
after some reshuffling,

                          dF= ~ - a ~ d t + F . u ~ d ~ ,                    (13.7)

where




Here the arguments t and S(t) have been suppressed, and we have used the
notation




Note that Ft and Fi are scalar functions, whereas Fa, is an n x n matrix-valued
function.
                                    PRICING                                   179


   We now form a portfolio based on S1,. . ., Sn,B and F. For 5'1,. . . , Sn and F
we use the notation u1, . . . , un and UF for the corresponding portfolio weights,
which gives us the weight UB for the money account as




   The dynamics of, the value process for the corresponding self-financing
portfolio are given by'




and substituting the expression for UB above, as well as inserting the dynamics
of the processes involved, gives us




    We now try to choose the weights so that, first of all, the value process is
locally risk free, i.e. it has no driving Wiener process. This means that we want
to solve the equation
                               II




Supposing for the moment that this can be done, we now have value dynamics
of the form
                          rn                                1



and now we try to beat the market by choosing the weights such that we obtain
                                           +
a rate of return on the portfolio equaling r P. Mathematically this means that
we want to solve the equation




In order to see some structure, we now write these equations in matrix form as

                     ... a n - r a ~ - r
          [   a1-r
               u;    ...   4      4
                                                                          (13.10)
180        MULTIDIMENSIONAL MODELS: CLASSICAL APPROACH


(note that at is a column vector) where we have used the notation




    Let us now take a closer look at the coefficient matrix in eqn (13.10). Denoting
                                           +        +
this matrix by H , we see that it is an (n 1) x (n 1) matrix, and we have two
possibilities to consider, namely whether H is invertible or not.
    If H is invertible, then the system (13.10) has a unique solution for every
choice of p. In economic terms this means that we are able to form a self-financing
portfolio with the dynamics

                             dV(t) = (r   + P)V(t) dt,
which in turn means that we have constructed a "synthetic bank" with r /3 as +
its rate of interest. This will of course lead to arbitrage opportunities. We just
solve the system for, say, p = 0.10, then we borrow a (large) amount of money
from the bank and invest it in the portfolio. By this arrangement our net outlays
at t = 0 are zero, our debt to the bank will increase at the rate r , whereas the
value of our portfolio will increase at a rate which is 10% higher.
    Since we assume absence of arbitrage we thus see that H must be singular,
and in order to see the implications of this we choose, for readability reasons, to
study its transpose H*, given by




(recall that a, is a row vector). We can write this somewhat more compactly by
defining the n-dimensional column vector 1, as




With this notation we have



Since H* is singular this means that the columns are linearly dependent, and
since the matrix a was assumed to be nonsingular we draw the conclusion that
                                     PRICING                                    181


the first column of H* can be written as a linear combination of the other
                                              .
columns. Thus there exist real numbers XI, . . , An such that




where U F ~denotes the jth component of the row vector OF.
    There is an economic interpretation of the multipliers A1,. . . , An as secalled
 "market prices of risk" (cf. standard CAPM theory), and later on we will discuss
this in some detail. For the moment the main logical point is that eqn (13.14)
is the equation which will determine the derivative pricing function F. In order
to use this equation we need, however, to get hold of the A-vector, and as we
shall see, this vector is determined by the system (13.13).
    Writing (13.13) in vector form we see that the vector




is the solution of the n x n linear system



and since a by assumption is nonsingular we see that X is in fact uniquely
determined as
                            X = a" [a - rl,].                      (13.15)

   We now want to substitute this expression for X into (13.14), but first we
rewrite (13.14) in vector form as



and from the definition of UF in (13.9) we see that we may write UF more
compactly as
                              1
                        CF = - [SIFl,. . ., SnFn]U.                (13.17)
                                 F
Inserting (13.15) and (13.17) into (13.16) and using uo-' 3 I, we obtain the
relation
                              1
                    CYF         -
                       - T = . [SlFl,. .. , SnFn] [Q - rl,],
                                F
                                                                     (13.18)
           MULTIDIMENSIONAL MODELS: CLASSICAL APPROACH


and finally we insert the expression for a~ from (13.8) into (13.18) to obtain,
after some calculations,




    Note that this equation is a stochastic equation. For ease of reading we
have suppressed most of the arguments, but if we backtrack we will see that,
for example, the term rSiFi in the equation above is just shorthand for the
exmession



Thus eqn (13.19) must hold, at each t, with probability 1 for every possible value
of the price vector S(t). Now, in our model for the price process it can be shown
that the support (the set of possible values) for the vector S(t) is the entire set
R"+ and thus eqn (13.19) must also hold for each deterministic t and s. By a
standard argument we must also have F(T, S(T)) = @(S(T)),so we have proved
our main pricing result.
Theorem 13.1 Consider the contract X = %(S(T)).In order to avoid arbitrage
possibilities, the pricing function F(t, s) must solve the boundary value problem




Remark 13.2.1 To be more explicit we recall that we can write the quadratic
term above as




where
                                              ..
                                   Cij = [aa*].
                                             23

Remark 13.2.2 As in the onedimensional case we notice that the drift
vector a, of the price process, does not appear in the pricing equation. Again we
see that the only part of the underlying price process which influences the price of
a financial derivative is the diffusion matrix a.The reason for this phenomenon
is the same as in the scalar case and we refer the reader to our earlier discussion
on the subject. A deeper understanding involves the Girsanov Theorem. See next
chapter.
                         RISK NEUTRAL VALUATION                               183


Remark 13.2.3 In the derivation of the result above we have assumed that the
drift vector a and the volatility matrix a in the price dynamics eqn (13.1) are
constant. Going through the arguments it is, however, easily seen that we may
allow the coefficients to be functions of current time and current stock price,
i.e. they may be of the form

                                   = a(t,S(t)),
                                 (-Y


                                 a = a(t,S ( t ) ) .

If we assume that the volatility matrix a(t,s ) is invertible for each (t,s), then
Theorem 13.1 will still hold, the only difference being that the term



in the pricing equation is replaced by the term




13.3 Risk Neutral Valuation
As in the scalar case there is a natural economic interpretation of Theorem 13.1
in terms of risk neutral valuation. From the Feynman-KaE representation
theorem 5.8 we may immediately obtain a probabilistic formula for the solution
to the pricing equation.
Theorem 13.2 The pricing function F ( t ,s) of Theorem 13.1 has the following
representation.
                   F ( t , s) = e - r ( T - t ) ~t,sQ[3(S(T))1.
Here the expectation is to be taken with respect to the martingale measure Q ,
defined by the fact that the Q-dynamics of the price process S are given by



Adhering to the notational convention 7.4.1 the expression E$ [I indicates, as
wual, that the expectation shall be taken under Q , given the initial condition
S ( t )= s. B y the same convention, W is a Q- Wiener process.
   Again we see that the arbitrage free price of a derivative is given as the dis-
counted expected value of the future cash flow, and again the main moral is that
the expected value is not to be taken with respect to the objective probability
measure P. Instead we must use the martingale measure Q. This martingale
measure, or risk adjusted measure, is characterized by the following equivalent
facts. The proof is left as an exercise to the reader.
184          MULTIDIMENSIONAL MODELS: CLASSICAL APPROACH


Proposition 13.3 The martingale measure Q is characterized by any of the
following equivalent conditions:
    1. Under Q every price process II (t),be it underlying or derivative, has the
       risk neutral valuation property
                                      II (t)= e-r(T-t)~zb[II(T)].
      2. Under Q every price process JI (t),be it underlying or derivative, has the
         short rate of interest as its local mte of return, i.e. the Q-dynamics are of
         the form
                                                        +
                              dII(t) = rII(t) dt II(t) an(t)dW,
         where the volatility vector an is the same under Q as under P.
      3. Under Q every price process JI(t), be it underlying or derivative, has the
         property that the normalized price process



         is a martingale, i.e. it has a vanishing drift coeficient.
      As before we may summarize the moral as follows:
        When we compute arbitrage free prices of derivative assets, we can carry
        out the computations as if we live in a risk neutral world.
        This does not mean that we de facto live, or think that we live, in a risk
        neutral world.
        The formulas above hold regardless of the investor's preferences, and atti-
        tude towards risk, as long as he/she prefers more deterministic money
        to less.

13.4 Reducing the State Space
From Theorem 13.1 we see that in order to compute the price of a financial
derivative based on n underlying assets, we have to solve a PDE with n state
variables, and for a general case this has to be done by numerical methods.
Sometimes it is, however, possible to reduce the dimension of the state space, and
this can lead to a drastic simplification of the computational work, and in some
cases even to analytical formulas. We will now present a theory which will allow
us to obtain analytical pricing formulas for some nontrivial multidimensional
claims which quite often occur in practice. The theory presented here is based on
an analysis of the pricing PDE, but there also exists a corresponding probabilistic
theory. See Chapter 24.
    Let us assume that we have the model
                                               n
           d S i ( t ) = o & ( t ) d t + ~ , ( t ) x o , d ~ j ( t ) , i = l , ...,n.   (13.21)
                                              j=1
                                REDUCING THE STATE SPACE                             185


    j We consider a T-claim of the form X = @ ( S ( T ) ) ,and the crucial assumptions
    i are the following.

      Assumption 13.4.1
           For the rest of the section we assume that the contract function @ is
           homogeneous of degree 1, i.e. that

                                            @(t. s ) = t . @ ( s ) ,

           for allt > 0 and for all s E R n .
           The volatility matrix o is constant.
     For a homogeneous @ we see that, by choosing t = s;', we have the relation


                                                    (:
                           @ ( s l , .. . , sn) = sn@ -, . .. , ",
                                                                  sn
                                                                         1).

     This naturally gives us the idea that perhaps also the corresponding pricing
     function F has the same homogeneity property, so we try the ansatz


                                                      ( :: -)an
                                                                       sn-1
                           F ( t , s l , ... ,an) = snG t , -, ...,              (13.22)

     where G is some function

                                      G : R+ x R~-' + R .

     First of all, if there is a solution to the pricing PDE of the form (13.22), then it
     has to satisfy the boundary condition

                                      F ( T , s ) = + ( s ) , Vs,

     and translated into G this gives the boundary condition

                                      G(T,z)=\k(z), Vz,                          (13.23)

     where the function \k : Rn-l     + R is defined by


                             \k(zl,.. ., zn-1) = @ ( z l , .. ., zn-1, 1).       (13.24)




t
        The main problem is now to see whether there is a function G such that the
     ansatz (13.22) satisfies the pricing PDE. We therefore compute the various partial
     derivatives of F in terms of G , and substitute the result into the PDE. After some
186          MULTIDIMENSIONAL MODELS: CLASSICAL APPROACH


tedious calculations we have the following relations, where for brevity z denotes
the vector z = (sl/sn, . . . , Is,). Subscripts denotes partial derivatives.

              Ft(t, s) = snGt(t, z),
              Fi(t,s)=Gi(t,z),         i = 1 , ...,n - 1 ,




As in Remark 13.2.1 we write the pricing PDE as




Substituting the expressions above for the partial derivatives of F into
eqn (13.25) may look fairly forbidding, but in fact there will be many
cancellations, and we end up with the following PDE for G.




where
                            Oij = cij     + Cnn + Gin + cnj.
      We have thus proved the following result.
Proposition 13.4 Assume that the contract function            is homogeneous of
degree 1, and that the volatility matrix a is constant. Then the pricing function
F is given by


where G(t, 21,. . . , zn-l) solves the boundary value problem
                             REDUCING THE STATE SPACE


    Here the matrix D is defined in (13.27), where C is given by Remark 13.2.1.
    The function Q is defined in (13.24).
        The point of this result is that, instead of having to solve a PDE with n
    state variables (and one time variable), we have reduced the problem to that of
    solving a PDE with only n - 1 state variables.
    Remark 13.4.1 The crucial assumption in Proposition 13.4 is of course the
    homogeneity of the contract function, but one may wonder where we used
    the assumption of a constant volatility matrix. The point is that, with a state
    dependent u, the PDE (13.26) is no longer a PDE in only the n - 1 state vari-
    ables zl, . . . ,z,-1, because the matrix D now depends on the entire price vector
    31,.. . , S,.
        It is interesting to note that the PDE satisfied by G is of parabolic type.
    By inspection we see that it can in fact be interpreted as the pricing PDE, in
    a world with zero interest rate, for a claim of the form Y = Q(Z(T)), where the
, n - 1 underlying price processes satisfy an SDE of the form
I




  where the drift vector p is as usual of no importance, the process w is an
  (n - 1)-dimensional standard P-Wiener process, and the covariance matrix
: satisfies
                                   55* = D.
    Example 13.5 We illustrate the technique of state space reduction by a simple
    example of some practical importance. We consider a model with two underlying
    price processes Sl and S2,satisfying (under P) the following system of SDEs:




    As usual WI and W2 are independent, so in this model the price processes are
    also independent, but this is just for notational simplicity.
        The claim to be studied is an exchange option, which gives the holder the
    right, but not the obligation, to exchange one S2share for one S1share at time T.
    Formally this means that the claim is defined by X = max[Sl (T) - S2(T),01,
    and we see that we have indeed a contract function which is homogeneous of
    degree 1. A straightforward application of Theorem 13.1 would give us the PDE

          Ft + rsiFi   + rszF2 + ~ s ~ o f+~4 l s1; ~ :-~rF~=~0,
                                                 F(T, sl, s2) = max [sl - s2,01.
    I   Using Proposition 13.4 we can instead write
188         MULTIDIMENSIONAL MODELS: CLASSICAL APPROACH                               I

where G ( t ,z ) satisfies                                                            1
                   G t ( t ,z )   + i z 2 G z z(t,z )(o:+   0:) = 0,

                                                     G ( T ,x ) = max [ z- 1,0].
We see that this is the pricing equation, in a world with short rate r = 0, for
a European call option with strike price K = 1 written on a single stock with
volatility d-2".     Thus G can be obtained directly from the Black-Scholes
                                                                                      I
formula, and after some minor calculations we get


where z = 51/52.
              -.    N is as usual the cumulative distribution function for the
                    -
                                                                                      I
N [O,1] distribution and
                                                     I




            d2(t, z ) = dl (t,z ) - \/(o:       + oi)(T- t ) .
13.5 Hedging                                                                          1
When we introduced the model                                                              1




                                                                                      I
for the price vector process, one reason for the assumption of an invertible volat-
ility matrix was that we wanted a complete market, and the goal of this section
is to show that our model is in fact complete. From Chapter 8 we recall the
following definition.
Definition 13.6 W e say that a T-claim X can be replicated, alternatively
that it is reachable or hedgeable, if there exists a self financing portfolio h
such that
                             v h ( T ) = X, P-a.s.                      (13.30)
I n this case we say that h is a hedge against X, alternatively a replicating
portfolio for X. If every contingent claim is reachable we say that the market
is complete.
    Since we are not using the full probabilistic machinery in this chapter, we
will not be able to show that we can hedge every contingent T-claim X. As in
the scalar case, we will "only" be able to prove completeness for simple claims,
i.e. we will prove that every claim of the form


can be replicated. For the full story see next chapter.                                   1
                                             HEDGING                                          189


           Let us thus fix a date of delivery T, and a claim X = (S(T)). We denote
       portfolio weights by uO,ul,.. . ,u n , where ui is the weight on asset i for i =
      1,.. . , n, whereas u0 is the weight on the risk free asset. From Lemma 6.5 it is
    h l e a r that if we can find a process V, and weight processes u O, u l ,. . . , un such that




    1 then u , ul, ..., un is a replicating portfolio for X,and V is the corresponding
             O

      value process. For future use we note that eqns (13.32)-(13.33) can be written as




          The structure of the proof is that we will make an educated guess about
      the nature of the value process V, so we will make an ansatz. Given this
      ansatz we then compute the stochastic differential dV, and at last, compar-
      ing the expression thus obtained to (13.34), we identify the portfolio weights by
      inspection.
           We now go on to produce a natural candidate for the role as value process,
      and to this end we recall from Section 8.1 that, for a hedgeable claim, we should
      have the relation U(t; X) = V(t).
           Thus the obvious candidate as the value process for the replicating portfolio
      (if it exists at all) is the price process H(t; X) for the claim. On the other hand
      we have already computed the price process as




I     where F solves the pricing PDE of Theorem 13.1.
          Let us thus define F as the solution to the pricing PDE, and then define the
/     process V by V(t) = F (t, S(t)). Our task is to show that V in fact is the value
      process of a replicating portfolio, i.e. to show that the relation (13.31) is satisfied,
      and that the dynamics for V can be written in the form (13.34). Equation (13.31)
      is obviously (why?) satisfied, and using the identity (by definition) F = V, we
      obtain from (13.7)
190        MULTIDIMENSIONAL MODELS: CLASSICAL APPROACH


So, from (13.8)-(13.9)




Comparing the diffusionpart of (13.35) to that of (13.34) we see that the natural
candidates as ul, . . . , un are given by
                                    si Fi
                                                                                           I
                           ua(t) = -          i=1,...,n.
                                        F '
Substituting these expressions into (13.35) gives us                                   1


and, using the fact that F satisfies the pricing PDE, we obtain                        1




Again using the definition (13.36), this reduces to                                        I


which is exactly eqn (13.34). We have thus proved the second part of the following
theorem.
Theorem 13.7 Assume that the volatility matrix a is invertible. Then the
 following hold:
       The market is complete, i.e. every claim can be replicated.
       For a T-claim X of the form X = ( S ( T ) ) ,the weights i n the replicating
       portfolio are given b y




                         u0( t )= 1 -   E u' (t),
                                        i=l
      where F by definition is the solution of the pricing PDE i n Theorem 13.1.
    We have only proved that every simple contingent claim can be replicated, so
we have not proved the first item above in full generality. It can in fact be proved
that every (sufficiently integrable) claim can be replicated, but this requires the        ,


use of more advanced probabilistic tools (the martingale representation theorem
for Wiener filtrations) and is treated in the next section.
                                   EXERCISES                                   191


 13.6 Exercises
 Exercise 13.1 Prove Proposition 13.3.
1 Exercise 13.2 Check all calculations in the derivation of the PDE in
 Proposition 13.4.
 Exercise 13.3 Consider again the exchange option in Example 13.5. Now
 assume that w1and w2are no longer independent, but that the local correlation
 is given by dw1 dW2 = pdt. (We still assume that both Wiener processes have
 unit variance parameter, i.e. that dW; = dw; = dt.) HOW will this affect the
 Black-Scholes-type formula given in the example?
 Exercise 13.4 Consider the stock price model in Example 13.5. The T-contract
 X to be priced is defined by



 where a and b are given positive numbers. Thus, up to the scaling factors a and b,
 we obtain the maximum of the two stock prices at time T. Use Proposition 13.4
 and the Black-Scholes formula in order to derive a pricing formula for this
 contract. See Johnson (1987).
    Hint: You may find the following formula (for x > 0) useful.



 Exercise 13.5 Use the ideas in Section 13.4 to analyze the pricing PDE for a
 claim of the form X = cP(S(T)) where we now assume that is homogeneous of
 degree p, i.e.
                          cP(t.s)=tPcP(s), v t > o .
         MULTIDIMENSIONAL MODELS: MARTINGALE
                      APPROACH*

In this chapter, we will now change our point of view and use the martingale
machinery of Chapter 10 to analyze a multidimensional model which is more gen-
eral than the one discussed in the previous chapter. This will give more general
results than those obtained earlier and it will also provide us with an enhanced
understanding of the pricing and hedging problems for Wiener driven models.
In particular we will, for the special case of Wiener driven models, produce a
self-contained proof of the Second Fundamental Theorem.
    Let us thus consider a filtered probability space ( R , 3 , P, T ) carrying a
k-dimensional standard Wiener process W. The basic setup is as follows.
Assumption 14.0.1 W e assume the following:
      There are n risky asset S l , . . ., S , given a priori.
      Under the objective probability measure P, the S-dynamics are given by




     f o r i = 1, ...,n.
     The coeficients processes ai and uij above are assumed to be adapted.
     W e have the standard risk free asset with price process B, where

                                 dB(t) = r(t)B(t)dt.                       (14.2)

      The short rate is allowed to be a stochastic adapted process.
   With notation as above we can write this on compact form as



where D is the diagonal matrix defined in (13.4).
    Note that at this point we do not assume that we have the same number of
driving Wiener processes as the number of risky assets. Also note that the prob-
ability space is allowed to carry also other processes than the Wiener process W,
and thus that the filtration could be generated by other processes beside W.
For example, we make no assumptions about the distribution of the short rate
process r or of the processes ai and uij-we only assume that they are adapted.
                              ABSENCE OF ARBITRAGE                                 193


1   In particular this allows for models where these processes are path dependent
    upon the Wiener process, or that they are driven by some other "hidden" state
    variable processes. See below for a particular case.
    Remark 14.0.1 In many applications there are, beside S, other nonfinancial
    variables which may influence r , a , and IS or the claims under consideration.
    A common situation is when these nonfinancial variables are modeled through
    some (vector) process X with P-dynamics of the form


    Note that we assume that the same P-Wiener process W is driving both S
    and X. This is no serious restriction, since if, e.g. S is driven by w1 and X is
    driven by w2 then we define w as (W1, W 2 ). Note that it is important that
    we assume that the vector process X does not contain any price process. Any
    price component of X should instead be included in S.

    14.1 Absence of Arbitrage
    Our first task is to investigate when our model is free of arbitrage, and to this
    end we use the First Fundamental Theorem 10.22 and look for a martingale
    measure Q with B as the numeraire. Using the Girsanov Theorem 11.16 we
    define a prospective likelihood process L by
                               dL(t) = L(t)cp*(t)dW(t),                         (14.5)
                                 L(0) = 1,                                      (14.6)
    where cp is some adapted k-dimensional (column-vector) process, and we recall
    from (11.24) that L is given by the Doleans exponential as




    We now define our candidate martingale measure Q by setting dQ = L ( T ) d P
    on f i ,and from the Girsanov Theorem we know that we can write


    where W is a standard Q-Wiener process. Plugging (14.7) into the P-dynamics
    (14.3) we obtain the following Q-dynamics of S:

            dS(t) = D [S(t)][a(t)   + c(t)cp(t)] dt + D [S(t)]a(t) dW(t).       (14.8)
    From (10.51) we know that, disregarding integrability problems, Q is a
    martingale measure if and only if the local rate of return of each asset equals the
    short rate, i.e. if and only if the equality

                                        + IS(t)v(t) = r(t)                      (14.9)
194       MULTIDIMENSIONAL MODELS: MARTINGALE APPROACH


holds with probability one for each t , where r is defined by




In this equation, which we write as



a , a, and r are given a priori and we want to solve for cp. Thus, for each t , and
P-as., the n-dimensional vector r ( t )- a(t) must be in the image of the diffusion
matrix u(t) so we have the following result.
P r o p o s i t i o n 14.1 A necessary condition for the absence of arbitmge is that



with probability one for each t. A suficient condition for absence of arbitrage is
that there exists a process cp which solves (14.10) and such that E (cp* W )is a
martingale.
Note that it is not enough for cp to solve (14.10). We also need enough integ-
rability to ensure that L is a true martingale (and not just a local one). Hence
the following definition.
D e f i n i t i o n 14.2 A Girsanov kernel cp is said to be admissible i f it generates
a martingale measure, i. e. it solves (14.10) and E (cp *W ) is a martingale.
    The integrability problem for L will be discussed further below, as in
Proposition 14.10. However, the main focus will be on eqn (14.10) and we will
thus often carry out the arguments "modulo integrability problems".
    Proposition 14.1 is quite general, but it also covers "pathological" models,
such as those where all assets S l , . . . , Sn are identical. In order not to be dis-
tracted by silly models like that we make the following definition which will
guarantee that the concept of no arbitrage is structurally stable.
D e f i n i t i o n 14.3 The model above is said to be generically arbitrage free i f
it is arbitrage free for every (suficiently integrable) choice of a.
We then have the following central result.
P r o p o s i t i o n 14.4 Disregarding integrability problems the model is generically
arbitmge free i f and only if7 for each t 5 T and P-a.s., the mapping



is surjective, i.e. i f and only i f the volatility matrix u(t) has rank n.
                                    COMPLETENESS                                     195


    From this result it follows in particular that for absence of arbitrage we must
    in the generic case necessarily have n 5 k, i.e. we must have at least as many
    independent Wiener processes as we have risky assets. This is quite in accordance
    with the informal reasoning in the meta-theorem 8.3.1.
        We note that the martingale measure equation (14.10) only involves the
    S-dynamics, and not the dynamics of the extra factor process X (if the model
    includes such a factor). This is of course because the no arbitrage restrictions
    only concern prices of traded assets.
        If our (or the market's) choice of Q is generated by the Girsanov kernel cp, then
    the Q-dynamics of X are of course determined by this Girsanov transformation,
    so we have complete control of the distribution of X under Q. We summarize
    this as a separate result.
    Proposition 14.5 Assuming absence of arbitrage, consider a jhed martingale
    measure Q generated by cp, and denote the corresponding Q- Wiener process by W.
1   Then the following hold:
          The Q-dynamics of S are

                         dS(t) = r(t)D [S(t)] dt   + D [S(t)]u(t) dW(t).         (14.12)

    -    If the model contains an extra factor process X with P-dynamics given by
         (14.4), then the Q-dynamics of X are given by

                   dX(t) = {PX (t)   + ax (t)cp(t)} dt + u x (t) dW(t)           (14.13)

    14.2 Completeness
    We now go on to obtain conditions for the model to be complete, and in order
    to avoid pathological cases we assume that the model is generically arbitrage
    free. From the Second Fundamental Theorem 10.24, we know that the model is
    complete if and only if the martingale measure is unique, so it is tempting to
    draw the conclusion that we have completeness if and only if eqn (14.10) has a
    unique solution, i.e. if and only if the condition

                                     Ker[n(t)] = (01,                            (14.14)

    is satisfied for all t and with probability one. This is, however, not quite true
    and the reason is that, in case of a general filtered probability space, there is
    no guarantee that all equivalent measure transformations are of the Girsanov
    type above. In a general situation, where there are other sources of randomness
    beside the Wiener process W, like say an independent Poisson process N, the
    Girsanov transformation above will only change the measure for the Wiener
    process, but it will not affect the Poisson process. Thus; even if eqn (14.10) has
    a unique solution we do not have a unique martingale measure, since we have no
    restriction on how we are allowed to change the measure for the Poisson process.
196      MULTIDIMENSIONAL MODELS: MARTINGALE APPROACH


Put into more economic terms it is fairly obvious that if we consider a claim X
of the type X = @(N(T)),then it is impossible to hedge this claim if the asset
prices are driven by the Wiener process alone.
    In order to obtain sharp results we are therefore forced to make the assump
tion that all randomness in our model is generated by the Wiener process W .
We then have the following basic result.
Proposition 14.6 Assume that the model is generically arbitrage free and that
the filtration 3_ is defined by
                                3t =     FY.                          (14.15)
Then, disregarding integrability problems, the model is complete i f and only if
k = n and the volatility matrix a(t) is invertible P-a.s. for each t 5 T.
Proof Fkom the Converse of the Girsanov Theorem 11.6, we know that under
the assumption that the filtration is the one generated by the Wiener process,
every equivalent measure transformation is obtained by a Girsanov transforma-
tion of the type above. Hence the martingale measure is unique if and only if the
solution of the "martingale measure equation" (14.10) is unique, and this occurs
if and only if u(t) is injective, which implies k 5 n. Since we have assumed gen-
eric absence of arbitrage, we know that n 2 k and that a(t) is surjective. Thus
k = n and a(t) is invertible.

14.3 Hedging
In this section we will discuss the completeness question from the more concrete
perspective of actually producing hedging strategies for an arbitrary T-claim X.
This has independent interest and it will also provide us with a new proof
(within the framework of the present chapter) for the Second Fundamental
Theorem. The advantage of this alternative proof is that it is much more concrete
than the rather abstract one given in Section 10.4. The drawback is that we only
provide the proof for Wiener driven models, whereas the Second Fundamental
Theorem in fact holds in much more general situations.
    Let us thus again consider the model from (14.3)



Assumption 14.3.1 W e assume that the model is generically free of arbitrage,
i. e. that
                           Im [a(t)] = R n ,                         (14.17)
for all t and with probability one. W e also assume that the model is purely Wiener
driven, i.e. that Ft = 3tw.
Since we have assumed absence of arbitrage there exists some (not necessarily
unique) martingale measure and we choose a particular one, denote it by Q and
keep it fixed for the rest of the argument.
                                    HEDGING                                   197


   We then choose an arbitrary T-claim X in L1(Q), and the problem is to find
a hedging portfolio for X. From Lemma 10.15 we know that X can be hedged if
and only if the martingale M , defined by




admits dynamics of the form



where as usual Z = SIB, and where h is an adapted (row vector) process
in R n . Given our assumption of a purely Wiener driven system it follows from
the Martingale Representation Theorem 11.2 that there exists an adapted
k-dimensional (row vector) process g such that



On the other hand, since the Z process is a (local) martingale under Q, it follows
easily from It6 that the Q-dynamics are given by



Plugging (14.21) into (14.19) gives us



Comparing (14.22) with (14.20) we see that we can hedge X if and only if we
can solve (at each t and for every w ) the equation



or, alternatively the equation

                           a*(t)D [Z(t)]h*(t) = g*(t).                    (14.23)

In this equation, g is generated by the claim X and we want to solve the equation
for h. Since D [Z(t)] is nondegenerate diagonal, the equation can be solved if and
only if
                                 g*(t) E Im [a*(t)]
and we have the following result.
Proposition 14.7 Under Assumption 14.3.1 the model is complete if and only if

                                 Im [a*(t)] = R ~ .                        (14.24)
198      MULTIDIMENSIONAL MODELS: MARTINGALE APPROACH


If the model is complete then, using the notation of Chapter 10, the replicating
portfolio [ho,hs] is given by




Proof   Follows immediately from Lemma 10.15.
   Note that D-' [Z(t)] is just a diagonal matrix with Z;l(t), . . . , Z;l(t) on
the diagonal.
   We can now easily provide an alternative proof of a restricted version of the
Second Fundamental Theorem.
Theorem 14.8 ( T h e Second Fundamental Theorem) Under Assumption
14.3.1 the model is complete if and only if the martingale measure is unique.
Proof   Using Proposition 14.7 and the standard duality result

                           {Im [a*(t)]}' = Ker [ ~ ( t ) ]

we see that the model is complete if and only if

                                Ker [a(t)] = (0) .

This is, however, precisely the condition for the uniqueness of the martingale
measure obtained earlier.
   It is instructive to compare these duality arguments with those given in the
simple setting of Chapter 3, and in particular to the proof of Theorem 3.10,
to see how much of the structure is carried over from the simple one period
model to the present general setting. From the discussion above we see that the
"martingale measure equation" (14.10) and the "hedging equation" (14.23) are
adjoint equations. Thus absence of arbitrage and completeness are truly dual
concepts from a functional analytical point of view.

14.4 Pricing
Assuming absence of arbitrage, the general pricing formula is, as always, given
by the risk neutral valuation formula



where Q is some choice of martingale measure, where the Q-dynamics of S are
given by
                                         +
               dS(t) = D [S(t)]r(t) dt D [S(t)]a(t) d w Q(t),       (14.29)
and where WQ is Q-Wiener.
                       MARKOVIAN MODELS AND PDEs                              199


14.5 Markovian Models and PDEs
We now apply the martingale approach to the Markovian model discussed in
the previous chapter. Thus we again introduce Assumption 13.1.1, i.e. we assume
that k = n, that the vector of returns a as well as the volatility matrix a are
deterministic and constant over time, that a is invertible and that the filtration
is the one generated by the Wiener process. Thus S will be a Markov process.
The general pricing formula is, as always,

                            n(t; X ) = e - r ( T - t ) ~ Q[XI Ft],         (14.30)

where the Q-dynamics of S are given by



    If we now assume that X is a simple claim, i.e. of form X =      (S(T)), then,
since S is Markovian we have



and thus (exactly why?) the pricing process must be of the form n ( t ; X) =
F ( t , S(t)) for some pricing function F. We can then apply the Kolmogorov back-
ward equation to the expectation above and we immediately see that the pricing
function must solve the PDE




                                                              F(T,s) = @(s).
                                                                          (14.31)
We have thus recovered our old pricing result from Theorem 13.1.
   Turning to hedging, we know from the uniqueness of the martingale measure
that the market is complete, and thus that there exists a hedging portfolio h =
(ho,hl, . . . , hn). The value process dynamics are of course given by




but we also have V(t; h) = F ( t , S(t)) where F solves the PDE above. Applying
the It6 formula, this gives us
                        n
          dV(t; h) =   C Fi (t, S(t)) dS, (t) + (second-order terms) dt.
200      MULTIDIMENSIONAL MODELS: MARTINGALE APPROACH


Comparing these two equations we can identify hl, . . . , h, from the dSi terms
and we see that the hedging portfolio is given by

                        aF
               hj(t)=-(t,S(t)),               i = l , ...,n,
                        asi


If we express the portfolio in terms of relative weights, this will once again give
us the hedge of Theorem 13.7.

14.6 Market Prices of Risk
Going back to the general model of Section 14.1 let us assume that the model
is generically free of arbitrage possibilities, then we know that the "martingale
measure equation"
                               u(t)cp(t) = r(t) - 4 t ) ,
always possesses a (not necessarily unique) solution cp = (cpl,.. ., cpk)*, where
cp is the Girsanov kernel used in the transition from P to Q. If we now define
the vector process X by X = -9, then we can write (14.34) as

                                 a(t) - r(t) = a(t)X(t),

and on component form this becomes
                                       k
                  a i ( t ) - r ( t ) = C a , j ( t ) X j ( t ) , i = l ,...,n.
                                      i=l
As in the simpler setting of Section 13.2 we have an economic interpretation
of this equation. On the left-hand side we have the excess rate of return over
the risk free rate for asset No. i, and on the right-hand side we have a linear
combination of the volatilities o,j of asset No. i with respect to the individual
Wiener processes WI, . . . , ~ k Thus
                                  .   X j is the "factor loading" for the individual
risk factor Wj, and this object is often referred to as the "market price of risk
for risk factor No. j". Roughly speaking one can then say that Xj gives us a
measure of the aggregate risk aversion in the market towards risk factor No. j.
The main point to notice here is that the same X is used for all assets. We can
summarize the situation as follows:
      Under absence of arbitrage there will exist a market price of risk vector
      process X satisfying (14.35).
      The market price of risk X is related to the Girsanov kernel cp through

                                            cp(t) = -X(t).
                   THE HANSEN-JAGANNATHAN BOUNDS                                         201


   a In a complete market the market price of risk, or alternatively the
      martingale measure Q, is uniquely determined and there is thus a unique
      price for every derivative.
 1. a In an incomplete market there are several possible market prices of risk pro-
      cesses and several possible martingale measures, all of which are consistent
      with no arbitrage.
    a In an incomplete market, cp, A, and Q are thus not determined by absence
 '    of arbitrage alone. Instead they will be determined by supply and demand
kk    on the actual market, i.e. by the agents on the market.


14.7 Stochastic Discount Factors
Consider again the model in Section 14.1, assume absence of arbitrage, and
choose a fixed martingale measure Q with corresponding Girsanov kernel cp. In
Section 10.6 we defined the stochastic discount factor A by

                               A(t) = e- So' '('1 d s ~ ( t ) ,

where L is the likelihood process for the measure transformation from P to Q.
In the special case of a Wiener driven model we can compute L explicitly as

                   ) E (cp
              ~ ( t=         * W )(t) =          P* (3) dW(s1-   4 li 11~(8)112 ds

so in this model we have an explicit expression for A a s

                   ~ ( t=
                        )       ''(8)   dW(3)-   4 .fo'{II~(s)ll~+~(~))
                                                                  d8                 (14.37)

we can of course also express A in terms of the market price of risk process as

                  ~ ( t =) e- S. A*(s) dW(s)-i S~{ll~(~)llZ++(~))
                                                           ds.                       (14.38)


14.8 The Hansen-Jagannathan Bounds
Assume that we have generic absence of arbitrage, i.e. that a(t) is surjective, so
the martingale measure equation

                                            ) r(t) - 4th
                               u ( t ) ~ ( t=                                        (14.39)

always possesses a solution. As noted above, this is not enough to ensure absence
of arbitrage, since we must also have a guarantee that there exists an admissible
solution cp, i.e. a cp such that the induced likelihood process L = E(cp W) is       *
202        MULTIDIMENSIONAL MODELS: MARTINGALE APPROACH


a true martingale (and not just a local one). Recalling, from Lemma 11.5, the
Novikov condition



it is then natural to look for a solution cp to (14.39) with minimal Euclidian norm
at every t.
     We recall the following result from elementary linear algebra.
Proposition 14.9 Assume that the n x k matrix A is surjective as a mapping
A : R~ -+Rn. For any y E R n , consider the optimization problem




Then the following hold:                                                              'I
        A* is injective and A*A is invertible.
        The unique optimal solution of the minimum norm problem is given by

                                     2 = (A*A)-~A * ~ .                    (14.40)

Proof      Left to the reader as an exercise.
      From this we have the following obvious result.
Proposition 14.10 Assume that the volatility matrix o(t) is surjective P-a.s.
for all t . Then the process @ defined by
                                           1
                               @ = [u*u]- u * [ r - a ] ,                  (14.41)

has the property that,
                                   Il@(t)ll5 Il~(t)ll                       (14.42)
for all t and for every cp which satisfies (14.39). If i n      rlar 8 satisfies
Novikov condition, then the model is free of arbitrage.
We may of course use the correspondence X = -cp between the Girsanov kernel cp
and the market price of risk X to formulate a parallel result for market prices of
                                                                                           1
risk. we define the minimal market price of risk process as

                               i= [u*u]-'a* [a- r ] ,                       (14.43)

and we have the inequality
                                   Ili.(t>lls IlX(t)ll                                I
for all admissible A.                                                         .   ,
                      THE HANSEN-JAGANNATHAN BOUNDS                                203


       These simple facts are more or less the essence of what in discrete time
    asset pricing is known as the "Hansen-Jagannathan bounds" (see the Notes).
    To obtain these bounds we consider the price process ~ ( t of) any asset in the
    model (underlying or derivative), write its P-dynamics on the form

                        d.lr(t) = .lr(t)a,(t) dt   + .lr(t)u, (t) d ~ ( t )
    and define its Sharpe R a t i o process by the expression

                                        %(t> - r(t)
                                         Ilflr(t)ll '

    Denoting the P-variance by varP we have the informal interpretation

                                                           Ftl
                          llu,(t)1I2 dt = varP [d~(t)/.lr(t)l

    so the Sharpe Ratio gives us the conditional mean excess rate of return per unit
    of total volatility.
        We now have the following simple but interesting result.
    Proposition 14.11 (The Hansen-Jagannathan Bounds) Assume generic
    absence of arbitrage and define j\ by (14.43). Then the following holds for all
    assets, underlying or derivative, and for all admissible market prices of risk A.

                           1               1
                               a r l ~ ~ ,5 ~!li(t)ll
                                                ~ ~ 5) llA(t)ll-                (14.44)

    Proof The second inequality is already proved so we only have to prove the
    first. Fix any A generating a martingale measure. We then have

                                  o,(t)A(t> = a,(t> - r(t),


                           am(t) - r(t) =- or(t) A(t),
                             llun(t)ll     Ilur(t)ll
1   and from the Cauchy-Schwartz inequality in finite dimensional space we obtain

                            - r(t) 5
                         Il%(t) II
                                     1 1 1 ~ II 1 - 1
                                            0%(t)
                                                         llA(t)ll = llA(t)ll.

    Since this holds for every A, it holds in particular for i.
       We can now connect this result to the stochastic discount factor A by noting
    that, for our model class, the.dynamics of A are given by

                        dA(t) = -~(t)A(t)dt        + A(t)cp*(t)d ~ ( t ) ,      (14.45)
204      MULTIDIMENSIONAL MODELS: MAWINGALE APPROACH


or alternatively



A (and cp) also has the interpretation as the volatility vector of the stochastic
discount factor. The point of this from an economic perspective is that we can
either view the Hansen-Jagannathan bounds as a lower bound for the stochastic
discount factor volatility for a given (observed) Sharpe ratio, or as an upper
bound on the Sharpe ratio for a given (observed) stochastic discount factor
volatility.

14.9 Exercises
Exercise 14.1 Derive (14.46).
Exercise 14.2 Assume generic absence of arbitrage and prove that any market
price of risk process X generating a martingale measure must be of the form



where p(t) is orthogonal to the rows of u(t) for all t.

14.10 Notes
The results in this chapter are fairly standard. The Hansen-Jagannathan bounds
were first derived (in discrete time) in Hansen and Jagannathan (1991). They
have since then become the subject of a large literature. See the recent text-
book Cochrane (2001) for an exposition of (mostly discrete time) asset pricing,
including a detailed discussion of the discrete time HJ bounds, connections to
the "equity premium puzzle" and an extensive bibliography on the subject.
                                                                            i   8




                                                       15
                                INCOMPLETE MARKETS

        15.1 Introduction
        In this chapter we will investigate some aspects of derivative pricing in incomplete
        markets. We know from the mehtheorem that markets generically are incom-
        plete when there are more random sources than there are traded.assets, and
        this can occur in an infinite number of ways, so there is no "canonical" way
        of writing down a model of an incomplete market. We will confine ourselves to
        study a particular type of incomplete market, namely a "factor model", i.e. a
        market where there are some nontraded underlying objects. Before we go on to
        the formal description of the models let us briefly recall what we may expect in
        an incomplete model.
              Since, by assumption, the market is incomplete we will not be able to hedge
              a generic contingent claim.
              In particular there will not be a unique price for a generic derivative.

        15.2 A Scalar Nonpriced Underlying Asset
        We will start by studying the simplest possible incomplete market, namely a
        market where the only randomness comes from a scalar stochastic process which
        is not the price of a traded asset. We will then discuss the problems which arise
        when we want to price derivatives which are written in terms of the underlying
        object. The model is as follows.
        Assumption 15.2.1 The only objects which are a priori given are the

    ,        A n empirically observable stochastic process X , which is not assumed to
             be the price process of a traded asset, with P-dynamics given by
                               d X ( t ) = ,u( t , X ( t ) ) d t   + (t,X ( t ) ) d~ (t).
                                                                     (T                     (15.1)
              Here W is a standard scalar P- Wiener process.
              A risk free asset (money account) with the dynamics
                                                 d B ( t ) = r B ( t )dt,                   (15.2)

I            where r as usual is the deterministic short rate of interest.
          We now consider a given contingent claim, written in terms of the process X .
        More specifically we define the T-claim y by
206                          INCOMPLETE MARKETS


where @ is some given deterministic function, and our main problem is that of
studying the price process II(t; y ) for this claim.
    In order to give some substance to the discussion, and to understand the
difference between the present setting and that of the previous chapters, let us
consider a specific concrete, interpretation of the model. We may, for example,
interpret the process X as the temperature at some specific point on the earth,
say the end of the Palace Pier in Brighton. Thus X(t) is the temperature (in
centigrade) at time t at the Palace Pier. Suppose now that you want to go to
Brighton for a holiday, but that you fear that it will be unpleasantly cold at
the particular time T when you visit Brighton. Then it may be wise to buy
"holiday insurance", i.e. a contract which pays you a certain amount of money
if the weather is unpleasant at a grespecified time in a prespecified place. If the
monetary unit is the pound sterling, the contract function @ above may have
the form


In other words, if the temperature at time T is below 20°C (degrees centigrade)
you will obtain 100 pounds from the insurance company, whereas you will get
nothing if the temperature exceeds 20°C.
    The problem is now that of finding a "reasonable" price for the contract
above, and as usual we interpret the word "reasonable" in the sense that there
should be no arbitrage possibilities if we are allowed to trade the contract. This
last sentence contains a hidden assumption which we now formalize.
Assumption 15.2.2 There is a liquid market for every contingent claim.
If we compare this model with the standard Black-Scholes model, we see many
similarities. In both cases we have the money acco&t B, and in both cases
we have an a priori given underlying process. For the Black-Scholes model the
underlying process is the stock price S, whereas we now have the underlying
process X , and in both models the claim to be priced is a deterministic function
of the underlying process, evaluated at time T.
    In view of these similarities it is now natural to assume that the results from
the Black-Scholes analysis will carry over to the present case, i.e. we are (per-
haps) led to believe that the price process for the claim y is uniquely determined
by the P-dynamics of the underlying process X. It is, however, very important
to understand that this is, most emphatically, not the case, and the reasons are
as follows:
      1. If we consider the a priori given market, which only consists of the money
         account B, we see that the number R of random sources in this case
         equals one (one driving Wiener process), while the number M of traded
         assets (always excluding the money account B) equals zero. F'rom the
         meta-theorem it now follows that the market is incomplete. The incom-
         pleteness can also be seen from the obvious fact that in the a priori given
                    A SCALAR NONPRTCED UNDERLYING ASSET                             207


                here are no interesting ways of forming self-financing portfolios.
    -  The only strategy that is allowed is to invest all our money in the bank,
       and then we can only sit down and passively watch our money grow at
a
       the rate r . In particular we have no possibility to replicate any interesting
 L     derivative of the form @ (X(T)). We thus conclude that, since we cannot
       replicate our claim, we cannot expect to obtain a unique arbitrage free
       price process.
    '''
    2. One natural swategy to follow in order to obtain a unique price for
       the claim X is of course to imitate the scheme for the Black-Scholes
       model. We would assume that the price process II(t;y) is of the form
       n(t; y ) = F ( t , X(t)), and then we would form a portfolio based on the
       derivative F and the underlying X. Choosing the portfolio weights such
       that the portfolio has no driving Wiener process would give us a riskless
       asset, the rate of return on which would have to equal the short rate r ,
       and this last equality would finally have the form of a PDE for the pricing
       function F. This approach is, however, completely nonsensical, since in
       the present setting the process X is (by assumption) not the price of a
       traded asset, and thus it is meaningless to talk about a "portfolio based
?:'
"
       on X". In our concrete interpretation this is eminently clear. Obviously
       you can buy any number of insurance contracts and put them in your
." portfolio, but it is also obvious that you cannot meaningfully add, e.g.
       15OC to that portfolio.
We can summarize the situation as follows:
          The price of a particular derivative will not,be completely determined by
          the specification (15.1) of the X-dynamics and the requirement that the
          market [B(t),  II(t; y)]is free of arbitrage.
          The reason for this fact is that arbitrage pricing is always a case of pricing
          a derivative in terms of the price of some underlying assets. In our market
          we do not have sufficiently many underlying assets.
   Thus we will not obtain a unique price of a particular derivative. This fact
does not mean, however, that prices of various derivatives can take any form
whatsoever. From the discussion above we see that the reason for the incom-
pleteness is that we do not have enough underlying assets, so if we adjoin
one more asset to the market, without introducing any new Wiener processes,
then we expect the market to be complete. This idea can be expressed in the

Idea 15.2.1
          We cannot say anything about the price of any particular derivative.
          The requirement of an arbitrage free derivative market implies that prices
          of different derivatives (i.e. claims with different contract functions
          or different times of expiration) will have to satisfy certain internal
          consistency relations in order to avoid arbitrage possibilities on the
208                         INCOMPLETE MARKETS


      bond market. In terms of our concrete interpretation this means that even
      if we are unable to produce a unique price for a fixed weather insurance
      contract, say the "20°C contract"




      for the fixed date T, there must be internal consistency requirements
      between the price of this contract and the price of the following "25OC
      contract"


      with some expiration date T' (where of course we may have T = T').
      In particular, if we take the price of one particular "benchmark" derivative
      as a priori given, then the prices of all other derivatives will be uniquely
      determined by the price of the benchmark. This fact is in complete agree
      ment with the meta-theorem, since in an a priori given market consisting of
      one benchmark derivative plus the risk free asset we will have R = M = 1,
      thus guaranteeing completeness. In our concrete interpretation we expect
      that the prices of all insurance contracts should be determined by the price
      of any fmed benchmark contract. If, for example, we choose the 20°C con-
      tract above as our benchmark, and take its price as given, then we expect
      the 25°C contract to be priced uniquely in terms of the benchmark price.
   To put these ideas into action we now take as given two fixed T-claims, y
and 2, of the form




where @ and I' are given deterministic real valued functions. The project is to find
out how the prices of these two derivatives must be related to each other in order
to avoid arbitrage possibilities on the derivative market. As above we assume that
the contracts are traded on a frictionless market, and ad in the Black-Scholes
analysis we make an assumption about the structure of the price processes.
Assumption 15.2.3 W e assume that
      there is a liquid, frictionless market for each of the contingent claims y
      and 2.
      the market prices of the claims are of the form




      where F and G are smooth real valued functions.
                     A SCALAR NONPRICED UNDERLYING ASSET                           209



        We now proceed exactly as in the Black-Scholes case. We form a portfolio
    based on F and G, and choose the weights so as to make the portfolio locally
    riskless. The rate of return of this riskless portfolio has to equal the short rate
    of interest, and this relation will give us some kind of equation, which we then
    have to analyze in detail.
        From the assumption above, the It8 formula, and the X-dynamics we obtain
    the following price dynamics for the price processes F(t, X(t)) and G(t, X(t)).
                               d F= aFFdt      +UFF~W,                          (15.4)
                               dG = a G G d t + u G G d w .                     (15.5)
    Here the processes aF and UF are given by

                               a~ =
                                      Ft   + pFx + $a2Fxx,
                                                F
                               UF =   -
                                      UFX
                                       F '
    and correspondingly for a~ and UG. As usual we have suppressed most
    arguments, so in more detail we have, e.g.
                                                  dF
                             PFX   = ~ ( tX(t))az(t,
                                           .         X(t)).

       We now form a self-financing portfolio based on F and G, with portfolio
    weights denoted by UF and UG,respectively. According to (6.13), the portfolio
    dynamics are given by
                                              dF
                            dV=V
                                      {   UP.-+uG.-
                                              F          dGG) ,
    and using the expressions above we get
          ~ v = v { u ~ ~ c ~ F + u ~ ~ c ~ ~ ) ~ ~ + v { u(15.6)
                                                             ~ ~ u ~ + u ~
    In order to make this portfolio locally riskless we must choose UF and UG such
            -    +
    that UF OF UG . UG = 0, and we must also remember that they must add
    to unity. Thus we define UF and UG as the solution to the following system of



                                i  U~.UF+UG-U
    The solution to this system is given by
                                             UF+UG=~,

                                            = 0G.


                                               -uG

I
I
                                    { UF =

                                           =
                                                 - uGi
                                                uF
                                             uF - uG'
                         A SCALAR NONPRICED UNDERLYING ASSET                         209



    1      We now proceed exactly as in the Black-Scholes case. We form a portfolio
    / based on F and G, and choose the weights so as to make the portfolio locally
    C riskless. The rate of return of this riskless portfolio has to equal the short rate
    [ of interest, and this relation will give us some kind of equation, which we then
    ' have to analyze in detail.
           From the assumption above, the It6 formula, and the X-dynamics we obtain
        the following price dynamics for the price processes F(t, X(t)) and G(t, X(t)).




        Here the processes aF and UF are given by




        and correspondingly for a G and UG. As usual we have suppressed most
        arguments, so in more detail we have, e.g.



           We now form a self-financing portfolio based on F and G, with portfolio
        weights denoted by UF and UG, respectively. According to (6.13), the portfolio
        dynamics are given by




I       and using the expressions above we get


I in order to make this portfolio locally riskless we must choose      UF and UG such
                .    +
        that UF UF UG - UG = 0, and we must also remember that they must add
        to unity. Thus we define UF and UG a s the solution to the following system of
        equations.
                                   I          UF+UG=~,

                                   (uF.uF+u~.cT~=o.
1       The solution to this system is given by
210                             INCOMPLETE MARKETS


and inserting this into the portfolio dynamics equation (15.6) g'lves us

                          dV=V.
                                       (YG      -(YF

                                             U F - UG
                                                        'UG
                                                              } dt.
We have thus created a locally riskless asset, so using Proposition 7.6, absence
of arbitrage must imply the equation




      After some r e s h d i n g we can rewrite this equation as




The important fact to notice about this equation is that the left-hand side does
not depend on the choice of G, while the right-hand side does not depend upon
the choice of F. The common quotient will thus depend neither on the choice
of F nor on the choice of G, and we have proved the following central result.
Proposition 15.1 Assume that the market for derivatives is free of arbitrage.
Then there exists a universal process X(t) such that, with probability 1, and for
all t , we have


regardless of the specific choice of the derivative F .
There is a natural economic interpretation of this result, and of the process A.
In eqn (15.7) the numerator is given by (YF - r, and from (15.4) we recognize
( Y F as the local mean rate of return on the derivative F. The numerator (YF - r

is thus the local mean excess return on the derivative F over the riskless rate of
return r , i.e. the risk premium of F. In the denominator we find the volatility U F
of the F process, so we see that X has the dimension "risk premium per unit of
volatility". This is a concept well known from CAPM theory, so X is commonly
called "the market price of risk". Proposition 15.1 can now be formulated in the
following, slightly more flashy, form:
        In a no arbitrage market all derivatives will, regardless of the specific choice
        of contract function, have the same market price of risk.
    We can obtain more explicit information from eqn (15.7) by substituting our
earlier formulas for (YF and OF into it. After some algebraic manipulations we
then end up with the following PDE.

                        Ft   + { p - Xu) F, + ~ u ~ F-, ,TF = 0.
                A SCALAR NONPRICED UNDERLYING ASSET                              211


This is really shorthand notation for an equation which must hold with probab-
ility 1, for each t, when all terms are evaluated at the point (t, X(t)). Assuming
for the moment that the support of X is the entire real line, we can then draw
the conclusion that the equation must also hold identically when we evaluate it
at an arbitrary deterministic point (t, x). Furthermore it is clear that we must
have the boundary condition

                            F(T,x) = @(x), Vx E R,

so we finally end up with the following result.
Proposition 15.2 (Pricing equation) Assuming absence of arbitrage, the
pricing function F(t, x) of the T-claim Q(X(T)) solves the following boundary


            Ft(t,x)+dF(t,x)-rF(t,x)=O,              (t,x)c(O,T)xR,            (15.8)
                                    F(T,x) = @(x), x E R,                     (15.9)




    At first glance this result may seem to contradict the moral presented above.
We have stressed earlier the fact that, because of the incompleteness of the
market, there will be n o unique arbitrage free price for a particular derivative.
In Proposition 15.2, on the other hand, we seem to have arrived at a PDE
which, when solved, will give us precisely the unique pricing function for any
simple claim. The solution to this conundrum is that the pricing equation above
is indeed very nice, but in order to solve it we have to know the short rate of
interest r , as well as the functions p(t, x), u(t, x), @(x),and A(t, x). Of these,
only r , p(t, x), a(t, x), and cP(x) are specified exogenously. The market price of
risk A, on the contrary, is n o t specified within the model. We can now make
Idea 15.2.1 above more precise.
    Firstly we see that, even though we cannot determine a unique price for a
particular derivative, prices of different derivatives must satisfy internal consist-
ency requirements. This requirement is formulated precisely in Proposition 15.1,
which says that all derivatives must have the same market price of risk. Thus, if
we consider two different derivative assets with price processes F and G, these
may have completely different local mean rates of return ( a p and ac),and they
may also have completely diierent volatilities (UFand UG).The consistency rela-
tion which has to be satisfied in order to avoid arbitrage between the derivatives
is that, at all times, the quotient
                                      a ~ - T

                                         OF
212                         INCOMPLETE MARKETS


must equal



   Secondly, let us assume that we take the price process of one particular
derivative as given. To be concrete let us fix the "benchmark" claim I'(X(T))
above and assume that the pricing function G ( t ,x), for l?(X(T)), is specified
exogenously. Then we can compute the market price of risk by the formula




Let us then consider an arbitrary pricing function, say the function F for the
claim @(X(T)).Since the market price of risk is the same for all derivatives we
may now take the expression for X obtained from (15.10) and insert this into
the pricing equation (15.8)-(15.9) for the function F. Now everything in this
equation is well specified, so we can (in principle) solve it, in order to obtain F.
Thus we see that the price F of an arbitrary claim is indeed uniquely determined
by the price G of any exogenously specified benchmark claim.
    We can obtain more information from the pricing equation by applying the
Feynman-KaE representation. The result can be read off immediately and is as
follows.

Proposition 15.3 (Risk neutral valuation) Assuming absence of arbitrage,
the pricing function F(t, x) of the T-claim (P(X(T)) is given by the formula




where the dynamics of X under the martingale measure Q are given by



Hem W is a Q- Wiener process, and the subscripts t , x indicate as usual that
X(t) = x.

Again we have an "explicit" risk neutral valuation formula for the pricing func-
tion. The arbitrage free price of the claim is given as the discounted value of the
mathematical expectation of the future claim. As before the expectation is, how-
ever, not to be taken under the objective measure P, but under the martingale
("risk adjusted") measure Q. Note that there is a one-to-one correspondence
between the martingale measure and the market price of risk. Thus, choosing a
particular X is equivalent to choosing a particular Q. The characterization of Q
is just the same as in Proposition 13.3. The proof is left to the reader.
                         A SCALAR NONPRICED UNDERLYING ASSET                              213


        Proposition 15.4 The martingale measure Q is characterized by any of the
        following equivalent facts:
                The 2ocal mean rate of return of any derivative price process II(t) equals the
               short rate of interest, i.e. the II(t)-dynamics have the following structural
               form under Q
                                                    +
                                   dII(t) = rII(t) dt un(t)II(t)dW(t),
               where W is a Q- Wiener process, and a n is the same under Q as under P.
                With II as above, the process II(t)/B(t) is a Q-martingale, i.e. it has a
               zero drift term.
            As for the pricing equation above, we have to know X in order to compute
        the expected value in the risk neutral valuation formula. Thus, in the present
        context, and in contrast to the Black-Scholes case, the martingale measure Q is
        not (generically) determined within the model.
            It is instructive to see how the standard Black-Scholes model can be inter-
        preted within the present model. Let us therefore assume, in contrast to our
        earlier assumptions, that X is in fact the price of a stock in a BlajckScholes
        model. This of course means that the P-dynamics of X are given by


        for some constants a and u. Thus, in terms of the notation in (15.1), p(t, x) =
        x a and u(t, x) = X.U. Our project is still that of finding the arbitrage free price
        for the claim @(X(T)),and to this end we follow the arguments given above,
        which of course are still valid, and try to find a suitable benchmark claim I?. In
        the present setting we can make a particularly clever choice of l?(X(T)), and in
        fact we define the claim by


        This is the claim which at time T gives us exactly one share of the underlying
    I
    1
        stock, and the point is that the price process G(t, X(t)) for this claim is particu-
        larly simple. We have in fact G(t, X(t)) = X(t), the reason being that the claim
        can be trivially replicated using a buy-and-hold strategy which consists of one
        unit of the stock itself. Note that for this argument to hold we use critically our
        new assumption that X really is the price of a traded asset. Using the identity
        dG = d X we now trivially obtain the G-dynamics as
                                      dG = a ~ d+tU X ~ W .
        Thus, in terms of our earlier discussion we have aG(t,x) = a and uc(t, x) = a.
                                                              '
        We can now determine the market price of risk as




l       and the point to note is that, because of our tradability assumption, X is now
        determined within the model. We now go on to the pricing PDE, into which we
                                 INCOMPLETE MARKETS


    substitute A given as above. The critical part, AF, of the PDE now becomes
            AF(t, 2) = { ~ ( t2), - X(t, x)a(t, x)) Fx(t,x)   +     z)F,,(t, z)

                     ={ax-T.

                     = rxF,    +
                                   a-r
                                   1 2 2
                                   5x
                                           1 +
                                         a x F,

                                      u F,,,
                                                   ~x2u2~,,



    so we end up (as expected) with the Black-Scholes equation
                               + rxF, + $x2u2~,,- rF = 0,
                         iFt

                                                  F(T,2) = @(XI,
    and in the risk neutral valuation formula we will get the old Black-Scholes

                                    dX =rXdt+uXdW.



    15.3 The Multidimensional Case
    We will now go on to study pricing in a model with more than one nonpriced
    underlying asset. The model is as follows.
    Assumption 15.3.1 The only objects which are a priori given are the

          An empirically obsemrable k-dimensional stochastic process


          which is not assumed to be the price process of a traded asset, with
          P-dynamics given by

I             dXi(t) = pi (t,X(t)) dt   + 6i (t, X(t)) dW(t), i =1 . ., k,        (15.12)
          where w = (Wl, . . . , Wn)* is a standard n-dimensional P- Wiener process.
          A risk free asset (money account) with the dynamics
                                        dB(t) = rB(t) dt.                         (15.13)

I      The object is to find an arbitrage free price process for a T-claim y of the form


        Drawing on our experiences from the previous two sections we expect the
    following:
          We cannot say anything precise about the price process of any particular
          contingent claim.
          Different claims will, however, have to satisfy certain internal consistency
          requirements in order to avoid arbitrage on the derivative market.
                                 THE MULTIDIMENSIONAL CASE                             215


      I
             More precisely, since we now have n sources of randomness we can (gen-
      i      erically) specify the price processes of n different "benchmark" claims.
      F;     The price processes of all other claims will then be uniquely determined
             by the prices of the benchmarks.
         As usual we assume that there is a liquid market for all contingent claims,
      and in order to use the ideas above we fix exactly n claims yl,. . . , y, of the form

                                  yi=ai(t,X(T)),            i = 1 , ...,n.

      We furthermore assume that the price processes, [111(t), . . ., Iln(t)], for these
      claims exist, and that they are of the form

                                 lli(t) = Fi(t, ~ ( t ) ) , i = 1,. . ., n.

      Remark 15.3.1 Note that we use superscripts to distinguish between the vari-
    I ous pricing functions. This is done in order to allow us to use subscripts to denote
      partial derivatives.
           These claims are our "benchmarks", and we now study the claim




1     above, the price of which is assumed to have the form


      0
          Using the same notational conventions as in Section 13.2, the price dynamics
      of the various derivatives are given by

                             d F= aFFdt        +aFFdw,
                             dFi = a i F i d t + u i F i d w ,   z = l ,...,n,

      where
216                          INCOMPLETE MARKETS


    We can now follow the reasoning of Section 13.2 word-for-word. To
recapitulate, we form a self-financing portfolio based on the price processes
[B,F,F1,.. . , F n ]. We then choose the weights so as to make the portfolio locally
riskless, and finally we try to "beat the bank" by forcing the portfolio to have a
higher rate of return than the short rate r.
    The conclusion will once again be that, in order to have an arbitrage free
market, the matrix




must be singular (recall that ui is a row vector). Assuming that the n x n matrix




is invertible (with probability 1 for each t) we thus deduce the existence of
multiplier processes XI@, X(t)),. . . , Xn(t, X(t)) such that




and




       Since the claim @(X(T))was chosen arbitrarily we see that the risk premium,
QF - r, of any asset can be written as a linear combination of the volatility
components, u ~ j of , the asset, the important point being that the multipliers
are the same for all assets. The vector process X(t, X(t)) is (see Sections 13.2
and 15.2) known as the market price (vector) of risk (cf. CAPM), and we
see that the individual component Xj has the dimension "risk premium per unit
of j-type volatility".
    Using the notational conventions of Section 13.2, the A-vector is determined
by the equation


i.e.
                                  X = u-' [a - rl,].
                         THE MULTIDIMENSIONAL CASE                                217


1 This is precisely eqn (13.15), but in the present setting the volatility matrix a
 and the vector of returns cr are no longer given a priori, so X is not determined
 within the model. We can summarize this as follows:
    a If the derivatives are traded in a no arbitrage market, then there will exist
     a market price of risk vector which is the same for all assets.
 1 a The market price of risk is not determined within the a priori specified
     model.
   a If we exogenously specify the prices of any n assets such that the corres-
     ponding volatility matrix process a is nonsingular with probability 1 for
     all t, then the market price of risk will be uniquely determined by this spe-
     cification and by eqn (15.20). Thus all derivatives will be priced in t e r m s
     of the benchmark prices.
    Note that we can choose the (smooth) benchmark pricing functions above in
 any way whatsoever, subject only to the following conditions:
    a The boundary conditions FYT, x) = ai(x),i = 1,. . . , n are satisfied.
    a The volatility matrix a(t, x) is invertible for aJl (t, x).
 The first condition is obvious. The second is the mathematical formulation of the
 requirement that the family of benchmark derivatives is rich enough to span the
 entire space of derivatives.
     We can easily obtain a PDE for derivative pricing, by writing out eqn (15.19)
 in detail. Using (15.16)-(15.17) we obtain, after some simplification, the following
 result.
 Proposition 15.5 (Pricing equation) If the market is arbitrage free, then the
 arbitrage free price process II(t; a ) is given by n ( t ; a ) = F(t, X(t)), where F
 solves the boundary value problem




 where XI,. . . , An are universal in the sense that they do not depend on the specific
 choice of derivative.
    A standard application of the Feynman-KaE technique gives us a risk neutral
 valuation formula.
 Proposition 15.6 (Risk neutral valuation) If the market is arbitrage free,
 then there exists a martingale measure Q, such that the pricing function F in
 the proposition above can be represented as
218                           INCOMPLETE MARKETS


where the Q-dynamics of the process X are given by



where AI, . . . , A, are universal.
We have the usual characterization of the martingale measure Q .
Proposition 15.7 The martingale measure Q has the following properties.
      1. Under Q every price process II ( t ) , be it underlying or derivative, has the
         risk neutral valuation property

                                 II (t) = e-r(T-t)E?', [ll(T)].

      2. Under Q every price process II (t),be it underlying or derivative, has the
         short rate of interest as its local rate of return, i.e. the Q-dynamics are of
         the form
                             dII (t)= rII (t)d t f II (t)un( t )d W,
         where the volatility vector un is the same under Q as under P.
      3. Under Q every price process II(t),be it underlying or derivative, has the
         property that the normalized price process




         is a martingale, i.e. it has a vanishing drift coeficient.
Remark 15.3.2 The model formulation above also includes the case when
some, or all, of the X-components, say X I , . . . , X,, are traded assets (e.g. exo-
genously given stock prices), whereas the remaining components (if any) are
nontraded state variables. As a special case we see that if m = k = n, then we
are back in the case of a complete market treated in C h a ~ t e 13.
                                                                  r

15.4 A Stochastic Short Rate
In the theory derived above we have assumed a constant short rate of interest r.
Let us now assume that we have exactly the same situation as in Section 15.3
with the following difference.
Assumption 15.4.1 The short rate of interest is assumed to be a deterministic
function of the factors, i. e.
                               r ( t )= r ( X ( t ) ) .               (45.22)
Here we have used a slightly sloppy notation: the r on the left-hand side denotes
a stochastic process, whereas the r appearing on the right-hand side denotes a
                              THE MARTINGALE APPROACH*                              219


    deterministic function. We have thus assumed that the factor vector X com-
    pletely determines the short rate, and as a special case we can of course have
     ne of the factors equal to the short rate itself.
       For this model, we can now go through all our earlier arguments once again,
      d we will easily obtain the following version of Proposition 15.5.
    Proposition 15.8 (Pricing equation) The arbitrage free price process II(t; @)
    is given by II(t; @)= F(t, X(t)), where F solves the boundary value problem


                    $ F (pz -
                                 n
                                     6.AJ)
                                                 1
                                             Fz+ 5tr {6Fxx6}- r(x)F = 0,

                                                                F(T, x) = Wx),

    where XI, . . . , An are the same for all derivatives.
       Again a standard application of the Feynman-KG technique gives us a risk
    neutral valuation formula.
    Proposition 15.9 (Risk neutral valuation) There exists a martingale meas-
    ure Q, such that the pricing function F in the proposition above can be


                        F(t, x) = EFX[e- ltf' ( x ( u )d") - @(x(T))] ,          (15.23)

    where the Q-dynamics of the process X are given by

                        dX"     {pi - &A} dt    + bi dW, i =1,.
                                                            .
                                                               .. , k,
                                                                 h



    and X I , . . . , An are the same for all derivatives.


    15.5 The Martingale Approach*
    From the martingale point of view the setup and results of this entire chapter
                                                                          :
    are in fact already covered (in more generality) in Chapter 14 Let us however,
    briefly recollect some main points.
    ,       Since we have assumed that the only asset given a priori is B and that
            X is not the price vector of traded assets, the normalized price process Z
        ,   is one-dimensional with Z = Zo = BIB = 1. Now: the constant process
            Zo(t) r 1 is a martingale regardless of the choice of measure, so every
            equivalent measure Q will be a martingale measure
)           From Proposition 10.25 we always have the risk neutral valuation formula
220                           INCOMPLETE MARKETS


        for any T-claim y and any specification of the short rate process r. In
        particular, r does not have to be of the form r (t, X(t)).
        Denoting a fixed choice of martingale measure by Q, where cp is the cor-
        responding Girsanov kernel and X = -cp the market price of risk, the
        Q-dynamics of X are



      a In general, the market price of risk process X is just an adapted (possibly
        path dependent) process, so generically X will not be a Markov process
        under Q.
        If we assume that the market price of risk is of the form X(t, X(t)), then
        X will be Markovian under the corresponding Q. In this special case we
        can use the PDE methods discussed earlier in the chapter for pricing.

15.6 Summing U p
We may now sum up our experiences from the preceding sections.
Result 15.6.1
        In an arbitrage free market, regardless of whether the market is complete
        or incomplete, there will exist a market price of risk process, X(t), which is
        common to all assets in the market. More precisely, let Il(t) be any price
        process in the market, with P-dynamics



        Then the following holds, for all t, and P-a.s.



        In a complete market the price of any derivative will be uniquely determ-
        ined by the requirement of absence of arbitrage. In hedging terms this
        means that the price is unique because the derivative can equally well be
        replaced by its replicating portfolio. Phrased in terms of pricing PDEs and
        risk neutral valuation formulas, the price is unique because a complete
        market has the property that the martingale measure Q, or equivalently
        the market price of risk A, is uniquely determined within the model.
        In an incomplete market the requirement of no arbitrage is no longer suf-
        ficient to determine a unique price for the derivative. We have several
        possible martingale measures, and several market prices of risk. The reason
        that there are several possible martingale measures simply means that
        there are several different price systems for the derivatives, all of which are
        consistent with absence of arbitrage.
                                     SUMMING UP                                    221


        Schematically speaking the price of a derivative is thus determined by two

        a We require that the derivative should be priced in such a way so as to
          not introduce arbitrage possibilities into the market. This requirement is
          reflected by the fact that all derivatives must be priced by formula (15.11)
          where the same Q is used for all derivatives, or equivalently by the pricing
          PDE (15.8)-(15.9), where the same X is used for all derivatives.
          In an incomplete market the price is also partly determined, in a nontrivial
          way, by aggregate supply and demand on the market. Supply and demand
          for a specific derivative are in turn determined by the aggregate risk aver-
          sion on the market, as well as by liquidity considerations and other factors.
          All these aspects are aggregated into the particular martingale measure
          used by the market.
        When dealing with derivative pricing in an incomplete market we thus have
    to fix a specific martingale measure Q, or equivalently a A, and the question
    arises as to how this is to be done.



                  Who chooses the martingale measure?

    ,   From the discussions above the answer should by now be fairly clear.

I


                                     The market!
        The main implication of this message is that, within our framework, it is
    not the job of the theorist to determine the "correct" market price of risk. The
    market price of risk is determined on the market, by the agents in the market, and
    in particular this means that if we assume a particular structure of the market
    price of risk, then we have implicitly made an assumption about the preferences
    on the market. To take a simple example, suppose that in our computations we
    assume that X = 0.This means in fact that we have assumed that the market is
    risk neutral (why?).
        From this it immediately follows that if we have a concrete model, and we
    want to obtain information about the prevailing market price of risk, then we
    must go to the concrete market and get that information using empirical meth-
    ods. It would of course be nice if we were able to go to the market and ask
    the question "What is today's market price of risk?", or alternatively "Which
    martingale measure are you using?", but for obvious reasons this cannot be done
    in real life. The information that can be obtained from the market is price data,
    so a natural idea is to obtain implicit information about the market price of risk
222                         INCOMPLETE MARKETS


using the existing prices on the market. This method, sometimes called "calib-
rating the model to market data", "backing out the parameters", or LLcomputing
the implied parameter values", can schematically be described as follows.
    Let us take a concrete model as given, say the one defined by eqn (15.1). We
assume that we know the exact form of p and a. Our problem is that of pricing
a fixed claim @(X(T)),and in order to do this we need to know the market price
of risk X(t, x), and we have to consider two possible scenarios for the derivative
market, which we are trying to model.
    The first case occurs if there is no existing market for any derivative product
with X as its underlying object, i.e. no weather insurance contracts for Brighton
are traded. Then we are stuck. Since the market price of risk is determined by
the market, then if there is no market, there is no market price of risk.
    The second case occurs if some contracts are already traded. Let us thus
assume that there exists a market for the claims @((X(T)), i = 1 , .. . , n. Let
us furthermore assume that we want to choose our market price of risk from a
parameterized family of functions, i.e. we assume a priori that X is of the form



We have thus a priori specified the functional form of X but we do not know which
parameter vector p we should use. We then carry out the following scheme. We
are standing at time t = 0.
      Compute the theoretical pricing functions F1(t,x) for the claims
      al,. . , @., This is done by solving the pricing PDE for each contract,
      and the result will of course depend on the parameter P, so the pricing
      functions will be of the form



      In particular, by observing today's value of the underlying process, say
      X(0) = xo, we can compute today's theoretical prices of the contracts as

                                                  p).
                                 ni(o; p) = F~(O,ZO;

      We now go to the concrete market and observe the actually traded prices
      for the contracts, thus obtaining the observed prices



      where the superscript * indicates an observed value.
      We now choose the "implied" parameter vector P* in such a way that
      the theoretical prices are "as close as possible" to the observed prices, i.e.
      such that
                           ni*(0) x IIi(O; P*), i = 1, .. . , n.
                                       EXERCISES


         One way, out of many, of formalizing this step is to determine P* by solving
         the least squares minimization problem

                               min
                               P€Rk
                                      [k( R ( o ; ~ )
                                      i=l
                                                          )2] .
                                                   - ni*(0)

      In the theory of interest rates, this procedure is widely used under the name

I
1
  of "the inversion of the yield curve" and in that context we will study it in some
  detail.
      As we have repeatedly stressed, the problem of determining the market price
j of risk is not a theoretical one, but an empirical one. It should, however, be poin-
  ted out that the truth of this statement depends on our particular framework,
  where we have not specified individual preferences at all. An alternative frame-
  work is that of a general equilibrium model, where we have specified the utility
  functions of a number of individuals, and the production functions of a num-
  ber of firms. In such a model all prices, derivative or underlying, as well as the
  market price of risk, will be determined endogenously within the model, so we
  no longer have to go to the market to find A. The price we have to pay for a
t general equilibrium approach is that we must then specify the individual pref-
  erences, which in turn is essentially equivalent to a specification of the market
j price of risk.

    15.7 Exercises
    Exercise 15.1 Consider a claim @(X(T))with pricing function F(t, x). Prove
    Proposition 15.4, i.e. prove that d F under Q has the form



    where W is a Q-Wiener process.
       Hint: Use It6's formula on F, using the Q-dynamics of X. Then use the fact
    that F satisfies the pricing PDE.
    Exercise 15.2 Convince yourself, either in the scalar or in the multidimensional
    case, that the market price of risk process X really is of the form



    Exercise 15.3 Prove Proposition 15.7
    Exercise 15.4 Consider the scalar model in Section 15.2 and a fixed claim
    F ( X ( T ) ) . Take as given a pricing function G(t,x), for this claim, satisfying
    the boundary condition G(T,x) = I'(x), and assume that the corresponding
    volatility function aG(t,x) is nonzero. We now expect the market [B,G] to be
    complete. Show that this is indeed the case, i.e. show that every simple claim of
    the form @(X(T))can be replicated by a portfolio based on B and G.
224                          INCOMPLETE MARKETS


Exercise 15.5 Consider the multidimensional model in Section 15.3 and a fixed
family of claims ai( X ( T ),) i = 1,. . . , n. Take as given a family of pricing func-
tions F i (t,x), i = 1,.. . , n, for these claims, satisfying the boundary condition
                             ..
FYT, x) = ai(x), i = 1,. , n, and assume that the corresponding volatility
matrix u(t,x) is nonzero. Show that the market [B,F1,. . . , Fn] is complete,
i.e. show that every simple claim of the form @(X(T))can be replicated by a
portfolio based on [B,F1,.. . , Fn].
Exercise 15.6 Prove the propositions in Section 15.4.

15.8 Notes
As we have seen, in an incomplete market there is generically not a unique price
for a given claim, and it is impossible to hedge perfectly. A natural idea is then
to try to find an approximate hedge, and the obvious first choice is to use a
quadratic loss function. This line of ideas was &st investigated by Follmer and
Sondermann (1986) and then generalized in Schweizer (1988), Schweizer (1991)                     1
and many other papers. The quadratic hedging approach has subsequently been
the object of intensive research and has led to a large and deep literature. For a
                                                                                                 ,
recent overview with an extensive bibliography see Schweizer (2001). One p o s
sibility of pricing in an incomplete market is to choose, based on some given
principle, one particular member of the infinite set of possible martingale meas-
ures. In the quadratic hedging theory one thus ecounters the "minimal martingale
measure" as well as the "variance optimal measure". The "minimal entropy
measure" is another canonical choice of a martingale measure where an entropy
                                                                                                 1
                                                                                                 i
related distance between the objective measure and the martingale measure is
minimized. This approach was introduced by Miyahara (1997) and developed
by Frittelli in several papers such as Frittelli (2000). The "Esscher measure",
discussed in Gerber and Shiu (1994), is related to actuarial mathematics. For a
utility approach to pricing in incomplete markets see Davis (1997). For textbook
treatments of incomplete markets, see Bingham and Kiesel (1998) and Dana and
Jeanblanc (2003).




                                                          . .'        'C,

                                                                                 t;<
                                       '     ,'          "        i ,           L':,

                                                                                       3 ,
                                                    I I       t   I   <.$



                                  .        . ,    . ',       8,             *   ,<:jq,       5
I                                          DIVIDENDS
        F The object of the present chapter is to study pricing problems for contingent
         claims which are written on dividend paying underlying assets. In real life the
         vast majority of all traded options are written on stocks having at least one
         dividend left before the date of expiration of the option. Thus the study of
         dividends is important from a practical point of view. Furthermore, it turns out
         that the theory developed in this chapter will be of use in the study of currency
         derivatives and we will also need it in connection with future contracts.

1        16.1 Discrete Dividends
1   ,
         16.1.1 Price Dynamics and Dividend Stmctuw
         We consider an underlying asset ("the stock") with price process S, over a fixed
         time interval [0, TI. We take as given a number of deterministic points in time,
         TI, . . ,,,where



    ,    The interpretation is that at these points in time dividends are paid out to the
         holder of the stock. We now go on to construct a model for the stock price process
         as well as for the dividend structure, and we assume that, under the objective
         probability measure P, the stock price has the following dynamics, between
         dividends.
                                                    +
                                      d S = a S d t aSdW.                            (16.1)
         To be quite precise we assume that the S-process satisfies the SDE above on
         each half-open interval of the form [Ti+l,Ti), i = 1, . . . , n - 1, as well as on the
         intervals [0, Tn) and [TI,TI.
             The first conceptual issue that we have to deal with concerns the interpreta-
         tion of St as "the price of the stock at time t", and the problem to be handled
         is the following: do we regard St as the price immediately after, or immedi-
         ately before, the payment of a dividend? From a logical point of view we can
         choose any interpretation-nothing is affected in real terms, but our choice of
         interpretation will affect the notation below. We will in fact choose the first
         interpretation, i.e. we view the stock price as the price e x dividend. If we think
         of the model on an infinitesimal time scale we have the interpretation that, if t
         is a dividend point, dividends are paid out, not at the time point t, but rather
         at t - dt or, if you will, at t-.
             Next we go on to model the size of the dividends.
226                                 DMDENDS


Assumption 16.1.1 W e          assume    as   given   a deterministic continuous
function 6[s]
                                     6:R+R.
The dividend 6, at a dividend time t , is assumed to have the form



Note that the assumption above guarantees that the size of the dividend 6 at
a dividend time t is already determined at t- . The reason that we are using the
bracket notation 6[St-] instead of the more standard 6(St-) is that in this way
we avoid some hard-to-read formulas with repeated parenthesis signs later on.
    Our next problem concerns the behavior of the stock price at a dividend point
t, and an easy (but slightly heuristic) arbitrage argument (see the exercises) gives
us the following result.
Proposition 16.1 (Jump condition) In order to avoid arbitrage possibilities
the following jump condition must hold at every dividend point t :



      The stock price structure can now be summarized as follows:
        Between dividend points the stock price process satisfies the SDE



        Immediately before a dividend time t , i.e. at t - = t - d t , we observe the
        stock price St-.
        Given the stock price above, the size of the dividend is determined as 6[St-1.
        "Between" t - dt and t the dividend is paid out.
        At time t the stock price has a jump, determined by



16.1.2 Pricing Contingent Claims
As usual we consider a fixed contingent T-claim of the form



where @ is some given deterministic function, and our immediate problem is
to find the arbitrage free price process n(t;X ) for the claim X. We will solve
this problem by a recursive procedure where, starting at T and then working
backwards in time, we will compute n(t;X) for each intra-dividend interval
separately.
                           DISCRETE DMDENDS


TIItIT:
  We start by computing II(t; X) for t E [TI,TI. Since our interpretation of the
 stock price is ex dividend, this means that we are actually facing a problem
 without dividends over this interval. Thus, for TI 5 t 5 T, we have lI(t; X) =
  F(t, St) where F solves the usual Black-Scholes equation




                    I                         F(T, s) = *(s).

   In particular, the pricing function at TI is given by F(Tl,s).
T2 I t < TI:
   Now we go on to compute the price of the claim for T2 5 t I TI. We start by
   computing the pricing function F at the time immediately before TI, i.e. at
   t = Tl -. Suppose, therefore, that we are holding one unit of the contingent
   claim, and let us assume that the price at time TI- is STl- = S. This is the
   price cum dividend, and in the next infinitesimal interval the following will
   happen:
        The dividend 6[s] will be paid out to the shareholders.
        At time TI the stock price will have dropped to s - 6[s].
        We are now standing at time TI, holding a contract which is worth
        F(T1, s - 6[s]). The value of F at TI has, however, already been
        computed in the previous step, so we have the jump condition



   It now remains to compute F for T2 I t < TI, but this turns out to be quite
   easy. We are holding a contingent claim on an underlying asset which over
   the interval [T2,TI) is not paying dividends. Thus the standard Black-Scholes
   argument applies, which means that F has to solve the usual Black-Scholes
   equation
                         aF d F 1 d 2 F
                        at +        +
                         - rs- -s202-- rF = 0,
                                  as 2 as2
   over this interval. The boundary value is now given by the jump condition
   (16.3) above. Another way of putting this is to say that, over the half-open
   interval [T2,TI), we have F(t, s) = F1(t, s) where F1 solves the following
   boundary value problem over the closed interval [T2,TI].

                        aF1+ -s
                    + rs-    12 28 2 ~ 1
                                       - rF1 = 0,
                         as 2 0 - as2


   Thus we have determined F on [T2,TI).
                                    DIVIDENDS


T35t<T2:
  Now the story repeats itself. At T2 we will again have the jump condition



   and over the half-open interval [T3,T2)F has to satisfy the Black-Scholes
   equation.
   We may summarize our results as follows.
Proposition 16.2 (Pricing equation) The pricing function F ( t , s ) is deter-
mined by the following recursive procedure:
      On the interval [TI,TI F solves the boundary value problem



                       I                           F ( T , s ) = +(s).

      At each dividend point Ti, F has to satisfy the jump condition



      On every half-open interval of the form [Ti+1,Ti), i = 1,2,.. . , n - 1, as
      well as on the interval [0,T,), F solves the Black-Scholes equation

                           dF     dF 1 2 2 d F     2
                           -
                           6t
                              + rs-
                                  as
                                     + -s
                                       2
                                          a --rF=O.
                                            as2
    Another way of formulating this result in order to stress the recursive nature
of the procedure is as follows.
Proposition 16.3
      On the interval [ T I ,TI we have F ( t , s ) = F O ( ~ , s), where F0 solves the
      boundary value problem




      On each half-open interval [Ti+1,Ti) we have F ( t , s ) = Fi(t, s ) for i =
      1,2,. . ., where F i , over the closed interval [T+l,Ti], solves the boundary
      value problem

           { +        ,Fa
                    rs-
                       ds
                              1 2 2 d2Fi
                            + -s
                              2
                                 a -- rFi = 0,
                                     as2                                        (16.8)
                                         F i ( ~ iS ,) = Fi-'(Ti, s - 6[s]).
I                                DISCRETE DIVIDENDS                               229


         Throughout the entire section we have assumed the standard Black-Scholes
     price dynamics (16.1) between dividends. It is easy to see that we also have the
     following more general result.
     Proposition 16.4 Assume that the stock price dynamics between dividends are
     of the form
                                               +
                       dSt = Sta(t, St)dt Sta(t, St)dWt.                  (16.9)
     Assume furthermore that the dividend structure as before is given by



     Then the results of Propositions 16.2 and 16.9 still hold, provided that the
     constant u is replaced by the function u(t, s) i n the PDEs.
     We now turn to the possibility of obtaining a probabilistic "risk neutral valu-
     ation" formula for the contingent claim above, and as in the PDE approach this
     is done in a recursive manner.
         For Tl 5 t 5 T the situation is simple. Since we have no dividend points left
     we may use the old risk neutral valuation formula to obtain




r'   Here the Q-dynamics of the stock price are given by



     and we have used the notation F0 to emphasize that in this interval there are
     zero dividend points left. Note that the Q-dynamics of S above are only defined
     for the interval [TI,TI.
         For T2 5 t < TI the situation is slightly more complicated. From Proposition
     16.3 we know that the pricing function, which on this interval is denoted by F1,
     solves the PDE




     We may now apply the Feynman-KaE Theorem 5.6 to obtain the stochastic
     representation

                     F' (t, s) = e-r(T1-t)~t,,[F'(TI, XT, - ~ [ x T ~ ] ) ]

     where the process X , which at this point only acts as a computational dummy,
     is defined by
                                 dX = rXdt+oXdW.                             (16.12)
230                                 DIVIDENDS


Notice that the dummy process X is defined by (16.12) over the entire closed
interval [T2,TI] (whereas the pricing function F1is the relevant pricing function
only over the half-open interval [T2,TI)). This implies that X has continuous tra-
jectories over the closed interval [T2,TI],so in particular we see that XTl- = XT,.
We may thus rewrite (16.11) as

                                         , ~ XTl- - d [ ~ ~ ~ - ] ) ] ,
               F' (t, S) = e-T(T1-t)E ~[F'(T~,

still with the X-dynamics (16.12) on the closed interval [T2,TI].
     Let us now define the Q-dynamics for S over the closed interval [T2,Tl] by
writing
                             dS=~Sdt+uSdW,
for the half-open interval [T2,TI) and adding the jump condition

                               ST, = ST,- - ST,-].

In this notation we can now write (16.13) as

                      J'l (t, s) = e-'(Tl-t)~Qt , ~F0 T ST^)],
                                                    [ (


and, plugging in our old expression for FO,we obtain



Taking the discount factor out of the expectation, and using standard rules for
iterated conditional expectations, this formula can be reduced to

                         F' (t, s) = e-T(T-t) E:~ [@(ST)].

   We may now iterate this procedure for each intra-dividend interval to obtain
the following risk neutral valuation result, which we formulate in its more
general version.
Proposition 16.5 (Risk neutral valuation) Consider a T-claim of the fonn
@(ST)as above. Assume that the price dynamics between dividends are given by

                       dSt = a(t, St)& dt    + ~ ( t&)St
                                                     ,   dW,

and that the dividend size at a dividend point t is given by

                                     b = 6[St-I.

Then the arbitrage free pricing function F(t, s) has the representation

                          F(t, s) = e-'(T-t) E$ [@(ST)],
1                             CONTINUOUS DIVIDENDS


    where the Q-dynamics of S between dividends are given by

I                                          +
                              dSt = T Sdt~ ~ ( tSt)&
                                                 ,   dW,                      (16.15)
1
1 with the jump condition
                                   St =,St- - 6[St-]
                                              ..., Tn.
    at each dividend point, i.e. at t = TI, T2,
       We end Ythis section by specializing to the case when we have the standard
I   Black-Scholes dynamics
                                 d s= a S d t + a s d ~                    (16.17)
1
I


    between dividends, and the dividend structure has the particularly simple form



    where 6 on the right-hand side denotes a positive constant.
        As usual we consider the T-claim @(ST)and, in order to emphasize the role
    of the parameter 6, we let Fa(t,s) denote the pricing function for the claim a. In
/   particular we observe that Fo is our standard pricing function for in a model
    with no dividends at all. Using the risk neutral valuation formula above, it is
    not hard to prove the following result.
    Proposition 16.6 Assume that the P-dynamics of the stock price and the divi-
    dend structure are given by (1 6.17)-(16.18). Then the following relation holds:

                              Fa(t,S) = Fo(t, (1- 6)n . s),                   (16.19)

    where n is the number of dividend points in the interval (t, Tj.
    Proof See the exercises.
       The point of this result is of course that in the simple setting of (16:17)-
    (16.18) we may use our "old" formulas for no dividend models in order to price
    contingent claims in the presence of dividends. In particular we may use the
    standard Black-Scholes formula for European call options in order to price call
    options on a dividend paying stock. Note, however, that in order to obtain these
    nice results we must assume both (16.17) and (16.18).

    16.2 Continuous Dividends
    In this section we consider the case when dividends are paid out continuously
    in time. As usual St denotes the price of the stock at time t, and by D(t) we
    denote the cumulative dividends over the interval [0, t]. Put in differential form
                                                         +
    this means that over the infinitesimal interval (t, t dt] the holder of the stock
                                      +
    receives the amount dD(t) = D(t dt) - D(t).
16.2.1 Continuous Dividend Yield
We start by analyzing the simplest case of continuous dividends, which is when
we have a continuous dividend yield.
Assumption 16.2.1 The price dynamics, under the objective probability meas-
ure, are given by
                                          +
                  dSt = St . a(St) dt St. u(St) d ~ t .              (16.20)
The dividend structure is assumed to be of the form

                              dD(t) = St . 6[St]dt,                       (16.21)

where 6 is a wntinuous deterministic function.
    The most common special case is of course when the functions a and u above
are deterministic constants, and when the function 6 is a deterministic constant.
We note that, since we have no discrete dividends, we do not have to worry about
the interpretation of the stock price as being ex dividend or cum dividend.
    The problem to be solved is again that of determining the arbitrage free price
for a T-claim of the form @ ( S T ) .This turns out to be quite easy, and we can
in fact follow the strategy of Chapter 7. More precisely we recall the following
scheme:
   1. Assume that the pricing function is of the form F(t, St).
   2. Consider a, cr, @, F, 6, and r as exogenously given.
   3. Use the general results from Section 6.2 to describe the dynamics of the
      value of a hypothetical self-financed portfolio based on the derivative
      instrument and the underlying stock.
   4. Form a self-financed portfolio whose value process V has a stochastic
      differential without any driving Wiener process, i.e. it is of the form

                                  dV(t) = V(t)k(t) dt.

   5. Since we have assumed absence of arbitrage we must have k = r.
   6. The condition k = T will in fact have the form of a partial differential
      equation with F as the unknown function. In order for the market to be
      efficient F must thus solve this PDE.
   7. The equation has a unique solution, thus giving us the unique pricing
      formula for the derivative, which is consistent with absence of arbitrage.
We now carry out this scheme and, since the calculations are very close to those
in Chapter 7, we will be rather brief.
   Denoting the relative weights of the portfolio invested in the stock and in
the derivative by u s and UF, respectively we obtain (see Section 6.3) the value
process dynamics as
                             CONTINUOUS DIVIDENDS


where the gain differential dGs for the stock is given by

                                    dGs = d S    + dD,
i.e.
                            dGs = S(a 6) dt+         +a ~ d ~ .
From the It6 formula we have the usual expression for the derivative dynamics

                                d F= a F ~ d t + a F ~ d W ,

where



                             1      OF
                       bF = -
                             F
                                 '0s-.
                                     as

       Collecting terms in the value equation gives us

              dV = V - {us(a:   + 6) + uFffF) dt + V . {usQ + UFUF) dW,
and we now determine the portfolio weights in order to obtain a value process
without a driving Wiener process, i.e. we defme US and UF as the solution to
the system

                                    Us0   +   UFUF   = 0,
                                          uS+uF=l.
                                                                                4


This system has the solution                                                  rtj ,%


                                                QF
                                     us = -
                                          bF-u7                           rc~tI'I
                                                -0
                                     uF = -
                                          uF-a'                                h n RJ
                                                                                     ,
and leaves us with the value dyna;mics

                           dV = V {uS(a        + 6) + uFaF) dt.                     , I.

Absence of arbitrage now implies that we must have the equation
F""
      with probability 1, for all t, and, substituting the expressions for UF, us, OF,
      and OF into this equation, we get the equation




      The boundary value is obvious, so we have the following result.                     1

      Proposition 16.7 The pricing function F(t, s) of the claim @(ST)
                                                                     solves the
      boundary value problem




          Applying the Feynman-KaE representation theorem immediately gives us
      a risk neutral valuation formula.
      Proposition 16.8 (Pricing equation) The pricing function has the repres-
                                                                                              1
      entation
                           F(t, s) = e-'(T-t)~fs [@(ST)],              (16.23)
      where the Q-dynamics of S are given by

                           dSt = (r - 8[St])Stdt   + u(St)St dWt.               (16.24)   1
         In contrast with the case of discrete dividends we see that the appropriate
      martingale measure in the dividend case differs from that of the no dividend
      case. It is left as an exercise to prove the following result.
      Proposition 16.9 (Risk neutral valuation) Under the martingale measure.
      Q, the normalized gain process
                                                                                              !
                                                                                              !
                                                                                              1




      Note that this property is quite reasonable from an economic point of view:
      in a risk neutral world today's stock price should be the expected value of all
      future discounted earnings which arise from holding the stock. In other words,
      we expect that
                                      [l t
                          S(0) =             e-rr dD(r)   + e-"~(t)] ,          (16.25)

      and in the exercises the reader is invited to prove this "cost of carry" formula.           1
                                  CONTINUOUS DIVIDENDS                                 235


           As in the discrete case it is natural to analyze the pricing formulas for the
        special case when we have the standard Black-Scholes dynamics

                                     dS= aSdt     + uSdW,                          (16.26)

    , where a and a axe constants. We also assume that the dividend function 6 is
    I   a deterministic constant. This implies that the martingale dynamics are given by

                                   d S = (r - 6)Sdt   + oSdW,                      (16.27)

        i.e. S is GBM also under the risk adjusted probabilities. Again we denote the
        pricing function by Fain order to highlight the dependence upon the parameter 6.
        It is now easy t o prove the following result, which shows how to price derivatives
        for a dividend paying stock in terms of pricing functions for a nondividend case.
        Proposition 16.10 Assume that the functions o and 6 are constant. Then, with
        notation as above, we have

                                   F6(t, s) = Fo(t,se -6(T-t) 1.                   (16.28)

i
"6.2.2    The General Case
  We now consider a more general dividend structure, which we will need when
  dealing with future contracts in Chapter 26.
        Assumption 16.2.2 The price dynamics, under the objective probability meas-
        ure, are given by
1
                                        .         +
                          dSt = St (St) dt St ' u (St) d Wt.                 (16.29)
        The dividend structure is assumed to be of the form

                               dD(t) = St . d[St]dt   + St-#&]dWt,                 (16.30)

        where 6 and y are continuous deterministic functions.
        We again consider the pricing problem for a contingent T-claim of the form



        and the only difference from the continuous yield case is that now we have to
        assume that the pricing function for the claim is a function of D as well as S.
        We thus assume a claim price process of the form



        and then we carry out the standard program 1-7 of the previous section.
236                                 DIVIDENDS


   After a large number of simple, but messy and extremely boring, calculations
which (needless to say) are left as an exercise, we end up with the following result.
Proposition 16.11 (Pricing equation) The pricing function F(t, s, D ) for
the claim X = @(ST)solves the boundary value problem




where




Using the Feynman-KaE technique we have the following risk neutral valuation
result.
Proposition 16.12 (Risk neutral valuation) The pricing function has the
representation
                   F(t, s , D ) = e - r ( T - t ) ~t ,Q, , ~[@(ST)I,
where the Q-dynamics of S and D are given by




Remark 16.2.1 In the expressions of the propositions above we have s u p
pressed St and s in the functions a, a,6, y.
The role of the martingale measure is the same as in the previous section.
Proposition 16.13 The martingale measure Q is characterized by the follow-
ing facts:
        There exists a market price of risk process X such that the Q-dynamics are
        in the form

                                                + S o dW,
                              d S = S ( a - Xu) dt
                              dD = S(6 - Xy) dt + Sy dW.
                                                   EXERCISES



    I                 The normalized gains process Gz, defined by



                      is a Q-martingale.
                This result has extensions to multidimensional factor models. We will not go
                into details, but are content with stating the main result.
                Proposition 16.14 Consader a general factor model of the form i n Sections
                15.3-15.4. If the market is free of arbitrage, then there will exist universal market
                price of risk processes X = (XI,. . . , Xk)* such that
                      For any T-claim X the pricing finction F has the representation



I                                                               . . , xkare of the form
                      The Q-dynamics of the factor processes X1,.


1                     For any price process S (underlying or derivative) with dividend process
                      D, the normalized gains process
1           I




        1       16.3 Exercises
                Exercise 16.1 Prove Proposition 16.1. Assume that you are standing at t -
                and that the conclusion of the theorem does not hold. Show that by trading
        '
                at t- and t you can then create an arbitrage. This is mathematically slightly
                imprecise, and the advanced reader is invited to provide a precise proof based
                on the martingale approach of Chapter 10.
                Exercise 16.2 Prove the cost-of-carry formula (16.25).
                Exercise 16.3 Derive a cost-of-carry formula for the case of discrete dividends.
                Exercise 16.4 Prove Proposition 16.9.
                Exercise 16.5 Prove Proposition 16.10.
                Exercise 16.6 Consider the Black-Scholes model with a constant continuous
                dividend yield S. Prove the following put-call parity relation, where ca ( p a )
                denotes the price of a European call (put).
238                               DIVIDENDS


Exercise 16.7 Consider the Black-Scholes model with a constant discrete
dividend, as in eqns (16.17)-(16.18). Derive the relevant put-call parity for this
case, given that there are n remaining dividend points.
Exercise 16.8 Consider the Black-Scholes model with a constant continuous
dividend yield 6. The object of this exercise is to show that this model is com-
plete. Take, therefore, as given a contingent claim X = @(S(T)).Show that this
claim can be replicated by a self-financing portfolio based on B and S, and that
the portfolios weights are given by




where F is the solution of the pricing eqn (16.8).
   Hint: Copy the reasoning from Chapter 8, while using the self-financing
dynamics given in Section 6.3.
Exercise 16.9 Consider the Black-Scholes model with a constant continuous
dividend yield 6. Use the result from the previous exercise in order to compute
explicitly the replicating portfolio for the claim @(S(T))= S(T).
Exercise 16.10 Check that, when .y.= 0 in Section 16.2.2, all results degenerate
into those of Section 16.2.1.
Exercise 16.11 Prove Propositions 16.11-16.13.
                                        17
                       CURRENCY DERIVATIVES

In this chapter, we will study a model which incorporates not only the usual
domestic equity market, but also a market for the exchange rate between the
domestic currency and a fixed foreign currency, as well as a foreign equity market.
Financial derivatives defined in such situations are commonly known as quanto
products. We will start by studying derivatives written directly on the exchange
rate X, and then go on to study how to price (in the domestic currency) contracts
written on foreign equity.

17.1 P u r e Currency Contracts
Consider a situation where we have two currencies: the domestic currency (say
pounds sterling), and the foreign currency (say US dollars). The spot exchange
rate at time t is denoted by X(t), and by definition it is quoted as

                         units of the domestic currency
                          unit of the foreign currency
                                                        '

i.e. in our example it is quoted as pounds per dollar. We assume that the domestic
short rate r d , as well as the foreign short rate r f , are deterministic constants,
and we denote the corresponding riskless asset prices by Bd and B f , respect-
ively. Furthermore we assume that the exchange rate is modeled by geometric
Brownian motion. We can summarize this as follows.
Assumption 17.1.1 We take as given the following dynamics (under the
objective probability measure P):

                            dX = Xax dt + Xux d q                             (17.1)
                           dBd = rdBddt,                                      (17.2)
                           dBf = rfBf dt,                                     (17.3)

where ax,ux are deterministic constants, and w is a scalar Wiener process.
   Our problem is that of pricing a currency derivative, i.e. a T-claim 2 of the
form    ,
                                2 = @(X(T)),
where @ is some given deterministic function. To take a concrete and important
example, we can consider the case when 2 = max [X(T)- K, 01, i.e. we have a
240                         CURRENCY DERIVATIVES


European call which gives the owner the option to buy one unit of the foreign
currency at the price K (in the domestic currency).
    At &st glance it may perhaps seem that the problem of pricing the call
option above is solved by use of the standard Black-Scholes formula, where we
use domestic rate r d as the short rate of interest, and the stock price S is replaced
by the exchange rate X. It is, however, important to understand that this line
of argument is incorrect, and the reason is as follows. When we buy a stock
(without dividends), this means that we buy a piece of paper, which we keep
until we sell it. When we buy a foreign currency (say US dollars) we will, on
the contrary, not just keep the physical dollar bills until we sell them again.
Instead we will typically put the dollars into an account where they will grow at
a certain rate of interest. The obvious implication of this fact is that a foreign
currency plays very much the same role as a domestic stock with a continu-
ous dividend, and we will show below that this is indeed the case. First we
formalize the institutional assumptions.
Assumption 17.1.2 All markets are frictionless and liquid. All holdings of the
foreign currency are invested i n the foreign riskless asset, i.e. they will evolve
according to the dynamics
                                 dBf = rfBf dt.
Remark 17.1.1 Interpreted literally this means that, for example, US dollars
are invested in a US bank. In reality this does not have to be the c a s e U S dollars
bought in Europe will typically be placed in a European so called Eurodollar
account where they will command the Eurodollar rate of interest.
   Applying the standard theory of derivatives to the present situation we have
the usual risk neutral valuation formula
                         n(t; 2)= e-rdd(T-t)~Q
                                             t , , ~@(X(T))I,

and our only problem is to figure out what the martingale measure Q looks
like. To do this we use the result from Proposition 13.3, that Q is characterized
by the property that every domestic asset has the short rate r d as its local
rate of return under Q. In order to use this characterization we have to translate
the possibility of investing in the foreign riskless asset into domestic terms. Since
Bf (t) units of the foreign currency are worth Bf (t)-X(t)in the domestic currency
we immediately have the following result.
Lemma 17.1 The possibility of buying the foreign currency, and investing it at
the foreign short m t e of interest, is equivalent to the possibility of investing i n a
domestic asset with price process Bf, where
                                ~f   (t) = Bf ( t ). X(t).
The dynamics of Bf are given by
                        dBf = Bf (ax + r f ) d t + BfaxdW
                           PURECURRENCYCONTRACTS

f
       Summing up we see that our currency model is equivalent to a model of a
/ domestic market consisting of the assets Bd and Bf. It now follows directly from
    the general results that the martingale measure Q has the property that the
    Q-dynamics of Bf are given by



I   where W is a Q-Wiener process. Since by definition we have




    we can use Itb's formula, (17.2) and (17.4) to obtain the Q-dynamics of X as

                           d X = X (rd - rf) dt   + Xux dW.                   (17.6)

       The basic pricing result follows immediately.
    Proposition 17.2 (Pricing formulas) The arbitrage free price II(t; a ) for the
    T-claim 2 = @(X(T))is given by n(t;a ) = F ( t , X(t)), where



    and where the Q-dynamics of X are given by



    Alternatively F(t,x) can be obtained as the solution to the boundary value




    Proof The risk neutral valuation formula (17.7)-(17.8) follows from the stand-
    ard risk neutral valuation formula and (17.6). The PDE result then follows via
    Feynman-K&.
        Comparing (17.8) to (16.27) we see that our original guess was correct: a
    foreign currency is to be treated exactly as a stock with a continuous dividend.
    We may thus drab upon the results from Section 16.2 (see Proposition-16.10),
    which allows us to use pricing formulas for stock prices (without dividends) to
    price currency derivatives.
    Proposition 17.3 (Option pricing formula) Let Fo(t,x) be the pricing
    function for the claim 2 = @(X(T)), in a world where we interpret X as the
    price of an ordinary stock without dividends. Let F(t, x) be the pricing function
242                        CURRENCY DERIVATIVES


of the same claim when X is interpreted as an exchange rate. Then the following
relation holds
                           F(t, x) = Fo(t, xe-'f (T-t)).
In particular, the price of the European call, 2 =-max [X(T) - K, 01, on the
foreign currency, is given by the modified Black-Scholes formula


where




17.2 Domestic and Foreign Equity Markets
In this section we will model a market which, apart from the objects of the
previous section, also includes a domestic equity with (domestic) price Sd,and
a foreign equity with (foreign) price Sf. The restriction to a single domestic and
foreign equity is made for notational convenience, and in most practical cases it
is also sufficient.
    We model the equity dynamics as geometric Brownian motion, and since we
now have three risky assets we use a three-dimensional Wiener process in order
to obtain a complete market.
Assumption 17.2.1 The dynamic model of the entire economy, under the
objective measure P, is as follows:
                           d X = X a x dt   + Xux d w ,
                           dsd = Sd(Yddt i- S d a d d w ,

 , , ! j
   a
                           dSf = Sfafdt     + Sfaf dW,
                          dBd = rdBd dt,
                          dBf = rfBf dt,
where



is a three-dimensional Wiener process (as usual with independent components).
Furthermore, the (3 x 3)-dimensional matrix a, given by




is assumed to be invertible.
                 DOMESTIC AND FOREIGN EQUITY MARKETS                           243



Remark 17.2.1 The reason for the assumption about cr is that this is the
necessary and sufficient condition for completeness. See Proposition 17.4.
Remark 17.2.2 It is also possible, and in many situations convenient, to model
the market using three scalar correlated Wiener processes (one for each asset).
See Remark 17.2.4.
Typical T-contracts which we may wish to price (in terms of the domestic
currency) are given by the following list:
       A foreign equity call, struck i n foreign currency, i.e. an option to buy
       one unit of the foreign equity at the strike price of K units of the foreign
       currency. The value of this claim at the date of expiration is, expressed in
I
       the foreign currency, given by
I
 i
                                 2f = max [Sf(T) - K, 01.                  (17.16)
       Expressed in terms of the domestic currency the value of the claim at T is

I                            zd= X(T) max [Sf(T) - K, 01.                  (17.17)
       A foreign equity call, struck in domestic currency, i.e. a European
       option to buy one unit of the foreign equity at time T, by paying K units
       of the domestic currency. Expressed in domestic terms this claim is given
       by
                            zd= max [X(T). Sf(T) - K, 01.                (17.18)
       An exchange option which gives us the right to exchange one unit of
       the domestic equity for one unit of the foreign equity. The corresponding
       claim, expressed in terms of the domestic currency, is

                           zd= max [X(T). Sf(T) - Sd(T),01.                (17.19)
     More generally we will study pricing problems for T-claims of the form



where 2 is measured in the domestic currency. From the general theory of
Chapter 13 we know that the pricing function F(t, x, s d , s f ) is given by the
risk neutral valuation formula

                  F ( t , 2, sa, sf)=   e-Td(T-t)E2z,sd,8f
                                                     [@(x(T))],
so we only have to find the correct risk adjusted measure Q. We follow the
technique of the previous section and transform all foreign traded assets into
domestic terms. The foreign bank account has already been taken care of, and it
is obvious that one unit of the foreign stock, worth Sf(t) in the foreign currency,
is worth X(t) - Sf(t) in domestic terms. We thus have the following equivalent
domestic model, where the asset dynamics follow from the It8 formula.
244                        CURRENCY DERIVATIVES


Proposition 17.4 The original market (17.11)-(17.15) is equivalent to a
market consisting of the price processes Sd,S f , Bf,Bd, where

                                Bf (t) = X(t)Bf (t),
                                Sf(t) = X(t)Sf(t).
The P-dynamics of this equivalent model are given by

              dSd = S dad dt   + SduddW,                                   (17.21)
              dSf = Sf (af + a x + o f & ) dt   + sf(gf + a x ) dW,        (17.22)
                               +
             dBf = Bf ( a x r f ) dt   + Bfox d w ,                        (17.23)
             dBd = rdBddt.                                                 (17.24)

Here we have used * to denote transpose, so




Note that, because of Assumption 17.2.1, the volatility matrix above is invertible,
so the market is complete.
    Since S d , Sf,Bf can be interpreted as prices of domestically traded assets,
we can easily obtain the relevant &-dynamics.
Proposition 17.5 The Q-dynamics are as follows:




Proof Equations (17.25)-(17.27) follow from Proposition 13.3. The equation
for X follows from (17.27), the relation X = B f / ~ and
                                                     f It6's formula. A similar
computation applied to the relation Sf = Sf/X gives us (17.29).
    We can now immediately obtain the risk neutral valuation formula, and this
can in fact be done in two ways. We can either use (X, Sd,S f ) as state variables,
or use the equivalent (there is a one-to-one mapping) set (X, Sd,S f ) . Which set
to use is a matter of convenience, depending on the particular claim under study,
but in both cases the arbitrage free price is given by the discounted expected
value of the claim under the Q-dynamics. (It is of course quite possible to use
the set (Bf, Sd,S f ) also, but there seems to be no point in doing so.)
246                            CURRENCY DERIVATIVES


Remark 17.2.3 In many applications the claim under study is of the restricted
form



In this case all partial derivatives w.r.t. sd vanish from the PDEs above. A similar
reduction will of course also take place for a claim of the form




      We end this section by pricing the contracts (17.16) and (17.18) above.

Example 17.8 (Foreign call, struck in foreign currency) We recall that
the value of the claim, at time T, expressed in the foreign currency, is

                                   zf = max [Sf(T) - K, 01.
Let us denote the pricing function, again in the foreign currency, for this claim
at time t, by F f ( t , s f ) . (It will obviously not involve x.) Furthermore we
denote value of the claim at time t, expressed in the domestic currency, by
F d (t, x, sf). Now an elementary arbitrage argument (which?) immediately gives
us the relation




so it only remains to compute ~ f ( ts ,f ) This, however, is just the value of a
European call on a stock with volatility IIcf 11, in an economy with a short rate
equal to rf. Thys the value is given by the Black-Scholes formula, and the pricing
formula in domestic terms is as follows:




where
                          -3   ,




See also Remark 17.2.4 for another formalism.
    Example 17.9 (Foreign call, struck in domestic currency) The                                 claim,
    expressed in domestic terms, is given by

                                  zd= max [x(T) . sf(TI - K, oj
    which we write as
                              zd= m a x [ ~ f ( ~ )K,o].
                                                    -

    As we have seen above, the process sfcan be interpreted as the price process of
    a domestically traded asset, and from Proposition 17.5 we see that its volatility
                        +
    is given by [laf ax 11. Thus we may again use the Black-Scholes formula to
    obtain the pricing function F(t, I f ) as

                              F(t, I f ) = SfN[dl] - e - ' d ( T - t ) ~ ~ [ d 2 ] ,

    where

    '.
    B
        dl(t, I f ) = 10,   + 0x11-
                                                           1
                                             {ln($)+(rd+Zlluf+ux~~
                                                                                       2>         1
                                                                                            ( ~ - t ) ,
    8
                           , - llof
        d2(t, Sf) = d ~ ( tBf)          +u x l l f i .
    See also Remark 17.2.4 for another formalism.
    Remark 17.2.4 In practical applications it may be more convenient to model
    the market, and easier to read the formulas above, if we model the market using
    correlated Wiener processes (see Section 4.8). We can formulate our basic model
    (under Q) as

                                      d X = X a x dt  + X6x dvx,
                                     dsd = S d a d dt + Sd6d dVd,
                                     dSf = Sfafdt +Sfdf dVf,
                                     dBd = rdBddt,

e                                    dBf = rfBf dt,

    where the three processes Vx, Vd, Vf are one-dimensional correlated Wiener pro-
    cesses. We assume that bx, bd,6f are positive. The instantaneous correlation
    between Vx and Vf is denoted by pxf and correspondingly for the other pairs.
    We then have the following set of translation rules between the two formalisms
248                        CURRENCY DERIVATIVES


17.3 Domestic and Foreign Market Prices of Risk
This section constitutes a small digression in the sense that we will not derive
any new pricing formulas. Instead we will take a closer look at the various mar-
ket prices of risk. As will be shown below, we have to distinguish between the
domestic and the foreign market price of risk, and we will clarify the connection
between these two objects. As a by-product we will obtain a somewhat deeper
understanding of the concept of risk neutrality.
    Let us therefore again consider the international model X, Sd,Sf,Bd, B f ,
with dynamics under the objective measure P given by (17.11)-(17.15). As
before we transform the international model into the domestically traded assets
Sd,Sf,Bd, B~ with P-dynamics given by (17.21)-(17.24).
    In the previous section we used the general results from Chapter 13 to infer
the existence of a martingale measure Q, under which all domestically traded
assets command the domestic short rate r d as the local rate of return. Our
first observation is that, from a logical point of view, we could just as well
have chosen to transform (17.11)-(17.15) into equivalent assets traded on the
foreign market. Thus we should really denote our "old" martingale measure Q
by Qd in order to emphasize its dependence on the domestic point of view. If
we instead take a foreign investor's point of view we will end up with a "foreign
martingale measure," which we will denote by Qf, and an obvious project is to
investigate the relationship between these martingale measures. A natural guess
is perhaps that Qd = Qf, but as we shall see this is generically not the case. Since
there is a one-to-one correspondence between martingale measures and market
prices of risk, we will carry out the project above in terms of market prices
of risk.
    We start by taking the domestic point of view, and applying Result 15.6.1
to the domestic price processes (17.21)-(17.24), we infer the existence of the
domestic market price of risk process



                                Ad(t) =   [ ]Ad1 (t)
                                             *d1(t)
                                             Ad3(t)

with the property that if II is the price process of any domestically traded asset
in the model, with price dynamics under P of the form

                    dII(t) = II(t)an(t) dt   + lI(t)an(t) dW(t),
then, for all t and P-a.s., we have


                             ~ ( t-)r d = uII(t)Ad(t)-
           DOMESTIC AND FOREIGN MARKET PRICES OF RISK                          249



Applying this to (17.21)-(17.23) we get the following set of equations:




In passing we note that, since the coefficient matrix




is invertible by Assumption 17.2.1, Ad is uniquely determined (and in fact
constant). This uniqueness is of course equivalent to the completeness of the
model.
    We now go on to take the perspective of a foreign investor, and the first thing
to notice is that the model (17.11)-(17.15) of the international market does not
treat the foreign and the domestic points of view symmetrically. This is due to
the fact that the exchange rate X by definition is quoted as

                         units of the domestic currency
                                                        '
                          unit of the foreign currency

From the foreign point of view the exchange rate X should thus be replaced by
the exchange rate
                                          1
                                 Y (t) = -
                                         X(t>
which is then quoted as

                          unit of the foreign currency
                         units of the domestic currency'

and the dynamics for X, Sd,Sf,Bd, Bf should be replaced by the dynamics for
Y, Sd,Sf,Bd, Bf. In order to do this we only have to compute the dynamics of
Y, given those of X , and an easy application of It6's formula gives us

                            dY = Y a y dt   + Yay d ~ ,                    (17.35)

where
250                        CURRENCY DERIVATIVES


Following the arguments from the domestic analysis, we now transform the pro-
cesses Y, Sd,Sf,Bd, Bf into a set of asset prices on the foreign market, namely
Sf,Sd,Bd,where




If we want to obtain the P-dynamics of Sf,Sd,Bd we now only have to use
(17.21)-(17.24), substituting Y for X and d for f . Since we are not interested in
these dynamics per se, we will, however, not carry out these computations. The
object that we are primarily looking for is the foreign market price of risk Xf,
and we can easily obtain that by writing down the foreign version of the system
and substituting d for f and Y for X directly in (17.32)-(17.34). We get




and, inserting (17.36)-(17.37), we finally obtain




   After some simple algebraic manipulations, the two systems (17.32)-(17.34)
and (17.38)-(17.40) can be written as




      These equations can be written as
            DOMESTIC AND FOREIGN MARKET PRICES OF RISK                         25 1


where




so, since u is invertible,




Thus we have
                                   Ad - X f = ~ - ' ( 6 - v),
and since




we obtain
                     Ad   - X j = 0-'(6 - cp) = o-'ou;i = o;.
We have thus proved the following central result.
Proposition 17.10 The foreign market price of risk is uniquely determined by
the domestic market price of risk, and by the exchange rate volatility vector o x ,
through the formula
                                 X j = A d -0;.                           (17.41)
Remark 17.3.1 For the benefit of the probabilist we note that this res-
ult implies that the transition from Qd to Q f is effected via a Girsanov
transformation, for which the likelihood process L has the dynamics

                                        dL = Lox dW,
                                      L(0) = 1.

    Proposition 17.10 has immediate consequences for the existence of risk neut-
ral markets. If we focus on the domestic market we can say that the market is
(on the aggregate) risk neutral if the following valuation formula holds, where
IId is the price process for any domestically traded asset.

                          J'Jd   ( t ) = e-'d(T-t)~P   P"MT)1 file         (17.42)

In other words, the domestic market is risk neutral if and only if P = Qd. In
many scientific papers an assumption is made that the domestic market is in
fact risk neutral, and this is of course a behavioral assumption, typically made
252                         CURRENCY DERIVATIVES


in order to facilitate computations. In an international setting it then seems nat-
ural to assume that both the domestic market and the foreign market are risk
neutral, i.e. that, in addition to (17.42), the following formula also holds, where
I I f is the foreign price of any asset traded on the foreign market



This seems innocent enough, but taken together these assumptions imply that

                                   P=Qd=Qf.

Proposition 17.10 now tells us that (17.44) can never hold, unless ax = 0,
i.e. if and only if the exchange rate is deterministic.
     At first glance this seems highly counter-intuitive, since the assumption about
risk neutrality often is interpreted as an assumption about the (aggregate) atti-
tude towards risk as such. However, from (17.42), which is an equation for
objects measured in the domestic currency, it should be clear that risk neutral-
ity is a property which holds only relative to a specified numeraire. To put
it as a slogan, you may very well be risk neutral w.r.t. pounds sterling, and still
be risk averse w.r.t. US dollars.
     There is nothing very deep going on here: it is basically just the Jensen
inequality. To see this more clearly let us consider the following simplified situ-
ation. We assume that rd = r f = 0, and we assume that the domestic market
is risk neutral. This means in particular that the exchange rate itself has the
following risk neutral valuation formula

                                  X (0) = E[X(T)].

Looking at the exchange rate from the foreign perspective we see that if the
foreign market also is risk neutral, then it must hold that

                                  Y(O) = EIY(T)I,
with Y = 1/X. The Jensen inequality together with (17.45) gives us, however,




Thus (17.45) and (17.46) can never hold simultaneously with a stochastic
exchange rate.

17.4 Exercises
Exercise 17.1 Consider the European call on the exchange rate described at the
end of Section 17.1. Denote the price of the call by c ( t ,x), and denote the price of
the corresponding put option (with the same exercise price K and exercise date
                                      NOTES                                  253


T) by p(t, 2). Show that the put-call parity relation between p and c is given by
                       p = c - xe-'f(T-t)   + Ke-'d (T-t).


Exercise 17.2 Compute the pricing function (in the domestic currency) for a
binary option on the exchange rate. This option is a T-claim, 2, of the form

                                2 = l[a,b](X(T)),
i.e. if a I X(T) 5 b then you will obtain one unit of the domestic currency,
otherwise you get nothing.
Exercise 17.3 Derive the dynamics of the domestic stock price Sd under the
foreign martingale measure Qf .
Exercise 17.4 Compute a pricing formula for the exchange option in (17.19).
Use the ideas from Section 13.4 in order to reduce the complexity of the formula.
For simplicity you may assume that the processes Sd,Sf,and X are uncorrelated.
Exercise 17.5 Consider a model with the domestic short rate r d and two for-
eign currencies, the exchange rates of which (from the domestic perspective)
are denoted by XI, and X2, respectively. The foreign short rates are denoted by
rl and r2, respectively. We assume that the exchange rates have P-dynamics

                   dXi=X,aidt+X,a,dW,,          i=1,2,
where %, W 2 are P-Wiener processes with correlation p.
  (a) Derive the pricing PDE for contracts, quoted in the domestic currency,
      of the form 2 = @(XI(T), Xz (T)).
  (b) Derive the corresponding risk neutral valuation formula, and the
      Qd-dynamics of XIand X2.
  (c) Compute the price, in domestic terms, of the "binary quanto con-
      tract" 2, which gives, at time T, K units of foreign currency No. 1, if
      a 5 X2(T) 5 b, (where a and b are given numbers), and zero otherwise.
      If you want to facilitate computations you may assume that p = 0.
Exercise 17.6 Consider the model of the previous exercise. Compute the price,
in domestic terms, of a quanto exchange option, which at time T gives you the
option, but not the obligation, to exchange K units of currency No. 1 for 1 unit
of currency No. 2.
    Hint: It is possible to reduce the state space as in Section 13.4.


17.5 Notes
The classic in this field is Garman and Kohlhagen (1983). See also Reiner (1992).
A more technical treatment is given in Amin and Jarrow (1991).
                                                                                a


                                         18
                            BARRIER OPTIONS

The purpose of this chapter is to give a reasonably systematic overview of the
pricing theory for those financial derivatives which are, in some sense, connected
to the extremal values of the underlying price process. We focus on barrier
options, ladders and lookbacks, and we confine ourselves to the case of one
underlying asset.

18.1 Mathematical Background
In this chapter, we will give some probability distributions connected with barrier
problems. All the results are standard, see e.g. Borodin-Salminen (1997).
    To start with some notational conventions, let { X ( t ) ; 0 I t < oo) be any
process with continuous trajectories taking values on the real line.
Definition 18.1 For any y E R, the hitting time of y, r ( X , y), sometimes
denoted by ~ ( yor) rY,is defined by

                          ~ ( y=) inf { t 2 0 IX(t) = y).

The X-process absorbed at y is defined by

                                X y ( t )= X ( t A T ) ,

where we have used the notation a A p = min [a,PI.
    The running maximum and minimum processes, M x ( t ) and mx(t),are
defined by

                              M x ( t ) = sup X ( s ) ,
                                          o<s<t

                              mx (t)= inf X ( s ) ,
                                     ossst

where we sometimes suppress the subscript X .
We will be mainly concerned with barrier problems for Wiener processes, so
naturally the normal distribution will play a prominent role.
Definition 18.2 Let p ( x ; p, a ) denote the density of a normal distribution with
mean p and variance u 2 , i.e.
                                     1
                     v ( x ;P, a)= -
                                   a&
                          MATHEMATICAL BACKGROUND                                        255


The standardized density cp(x;O, 1) is denoted by cp(x), and the cumulative
distribution function of cp(x) is as usual denoted by N(x), i.e.




Let us now consider a Wiener process with (constant) drift p and (constant)
diffusion a, starting at a point a, i.e.             I   I ,




                                dX(t) = p d t   + adWt,                               (18.1)
                                X(0) = a.                                             (18.2)

    We are primarily interested in the onedimensional marginal distribution for
Xp(t), i.e. the distribution at time t of the X-process, absorbed at the point P.
The distribution of Xp(t) is of course a mixed distribution in the sense that it
has a point mass at x = ,8 (the probability that the process is absorbed prior
to time t) and a density. This density has its support on the interval (P, oo) if
a > p, whereas the support is the interval (-oo, P) if a < P. We now cite our
main result concerning absorption densities.

Proposition 18.3 The density fp(x;t, a ) of the absorbed process Xp(t), where
X is defined by (18.1)-(18.2), is given by


  fp(x;t, a ) = cp(x;pt   + a, a h ) - exp {-"(; I       ')}   ~ ( xpt; - n   + 2 ~o ,~ i ) .

The support of this density is the interval (P, oo) if a > >, and the interval
(-00,P) if f f < P.

We end this section by giving the distribution for the running maximum
(minimum) processes.

Proposition 18.4 Consider the process X defined by (18.1)-(18.2), and let M
(m) denote the running maximum (minimum) processes as in Definition 18.1.
Then the distribution functions for M(t) (m(t)) are given by the following
                                            <
expressions, which hold for x 2 a and x a respectively.

                     x-a-                                             x-a+pt
                               BARRIER OPTIONS


18.2 Out Contracts
In this section, we will undertake a systematic study of the relations between
a "standard" contingent claim and its different "barrier" versions. This will
provide us with some basic insights and will also give us a number of easy for-
mulas to use when pricing various barrier contracts. As usual we consider the
standard BlackScholes model

                              dS= aSdt     +a S d ~ ,
                              d B = r B dt,

with fixed parameters a, a, and r.
   We fix an exercise time T and we consider as usual a contingent claim 2 of
the form
                                2 = iP (S(T)).                          (18.3)
We denote the pricing function of 2 by F(t, s;T, a),often suppressing the par*
meter T. For mnem&echnical purposes we will also sometimes use the notation
8 ( t ,s), i.e. the pricing function (as opposed to the function defining the claim)
is given in bold.

18.2.1 Down-and-Out Contracts
Fix a real number L < S(O), which will act as the barrier, and consider the
following contract, which we denote by ZLO:
      If the stock price stays above the barrier L during the entire contract
      period, then the amount 2 is paid to the holder of the contract.
      If the stock price, at some time before the delivery time T, hits the barrier
      L, then the contract ceases to exist, and nothing is paid to the holder of
      the contract.
   The contract ZLOis called the "down-and-out" version of the contract 2
above, and our main problem is to price ZLo.More formally we can describe
ZLOas follows.
Definition 18.5 Take as given a T-contract 2 = @(S(T)).Then the T-contract
ZLOis defined by
                                    if ~ ( t>) L for all t E [ O , T ] ,
                                                                             (18.4)
                                    zf S(t) t) L for some t E [0, TI.

Concerning the notation, L as a subscript indicates a "down7'-type contract,
whereas the letter 0 indicates that we are considering an "out" claim. You may
also consider other types of barrier specifications and thus construct a "down-
and-in" version of the basic contract 2. A "down-and-in" contract starts to
exist the first time the stock price hits a lower barrier. Going on we may then
                               OUT CONTRACTS                                   257


consider upand-out as well as upand-in contracts. All these types will be given
precise definitions and studied in the following sections.
   In order to price ZLOwe will have use for the function QL, which is the
original contract function @ in (18.3) "chopped off" below L.

Definition 18.6 For a &ed function @ the function @L is defined by


                         @ L ( ~=)   { @(x), for
                                        0,
                                             for x > L,
                                                 x 5 L.

In other words, QL(x) = @(x). I{x > L), where I denotes the indicator function.
    For further use we note that the pricing functional F(t, S; @) is linear in the
@-argument,and that the "chopping" operation above is also linear.

Lemma 18.7 For all reals a and P, and all functions @ and Q, we have

                 F (t, s; a@+ PQ) = a F ( t , s; @)   + PF(t, s; Q),
                      (a@  + P!qL = a * +~~ Q L .
Proof For F the linearity follows immediately from the risk neutral valuation
formula together with the linearity of the expectation operator. The linearity of
the chopping operation is obvious.

    Our main result is the following theorem, which tells us that the pricing
problem for the down-and-out version of the contract @ is essentially reduced
to that of pricing the nonbarrier claim aL.Thus, if we can price a standard
(nonbarrier) claim with contract function cPL then we can also price the down-
and-out version of the contract @.

Theorem 18.8 (Pricing down-and-out contracts) Consider a &ed T-claim
2 = @ ( S ( T ) )Then
                 .    the pricing function, denoted by FLO,
                                                          of the corresponding
down-and-out contract ZLOis given, for s > L, by


                                                            (
            FLO(t,S;@) = F (t, S;@L) - ( ~ ) 2 i ' u ' F t,-;@L        ).    (18.6)


Here we have used the notation



Proof Without loss of generality we may set t = 0 in (18.6). Assume then
that S(0) = s > L, and recall that SL denotes the process S with (possible)
258                              BARRIER OPTIONS


absorption at L. Using risk neutral valuation we have




It remains to compute the last expectation, and we have




where h is the density function for the stochastic variable SL(T).
  From standard theory we have

                     S(T) = exp {Ins   + r'T + aW(T)) =
where the process X is defined by

                              dX(t) = r'dt   + udW(t),
                               X(0) = Ins.

Thus we have


so we may write




where f is the density of the stochastic variable XlnL(T). This
however, given by Proposition 18.3 as

      f (x) = q (x; r'T + lns, u&)
                                 OUT CONTRACTS


Thus we have




                   =G                  ) viT
                             O ~ ( e ~(x;      + ln s , o&)   dx



                        00


                   =   Lm                      +
                             mL(ex)q(x; i~ ~ns , o f i ) dx

                                2       00

                                             OL(ez),   (,; iT + ln   (c)
                                                                       , o f i ) dx.

Inspecting the last two lines we see that the density in the first integral is the
density of X ( T ) under the usual martingale measure Q, given the starting value
S(0) = s. The density in the second integral is, in the same way, the density
(under Q) of X ( T ) ,given the starting point S(0) = L2/s.Thus we have




which gives us the result.

   We again emphasize the point of this result.
The problem of computing the price for a down-and-out claim reduces to
the standard problem of computing the price of an ordinary (related) claim
without a barrier.

   For future use we also note the fact that down-and-out pricing is a linear
operation.

Corollary 18.9 For any contract functions CP and Q , and for any real numbers
cr and p, the following relation holds.




Proof The result follows immediately from Theorem 18.8 together with the
linearity of the ordinary pricing functional F and the linearity of the chopping
operation.
260                            BARRIER OPTIONS


18.2.2 Up-and-Out Contracts
We again consider a fixed T-contract of the form 2 = @ (S(T)), and we now
describe the upand-out version of 2 . This is the contract which at the time of
delivery, T , will pay 2 if the underlying price process during the entire contract
period has stayed below the barrier L. If, at some time during the contract
period, the price process exceeds L, then the contract is worthless. In formal
terms this reads as follows.

Definition 18.10 Take as given the T-wntmct 2 = @ (S(T)). Then the
T-contract ZLOzs defined b y

             2 L O = {@   (Sj')), yif sS(t)
                                        ( t ) < L for all t [O,Tl,
                                                               E
                                              2 L for some t E [0, TI.

The pricing functional for zLO    is denoted by F LO (t, s; a), or according to our
earlier notational convention, by      (t, s).

L as a superscript indicates an "upv-type contract, whereas the superscript 0
indicates that the contract is an "out" contract. As in the previous sections we
will relate the upand-out contract to an associated standard contract. To this
end we need to define, for a fixed contract function @, the function aL,which is
the function "chopped off" above L.

Definition 18.11 For a fied function @ the function aLis defined by

                          a L ( x ) = { a t ) , for x < L
                                                f o r x 2 L.

In other words, @=(x)= @(x) I{x < L).

The main result of this section is the following theorem, which is parallel to
Theorem 18.8. The proof is almost identical.

Theorem 18.12 (Pricing u p a n d - o u t contracts) Consider a f i e d T-claim
2 = @(S(T)). Then the pricing function, FLO, of the wwesponding up-and-out
contract zLOis given, for S < L, by


             F ~ O ( S~, a, ) = F (t, S, aL)-             y )
                                                (5)"'"' ( -,aL
                                                          F t,

where we have wed the notation
                                     -
                                    r=r--20.
                                                1   2
                                 OUT CONTRACTS                                  261



18.2.3 Examples
In this section we will use Theorems 18.8 and 18.12, together with the linearity
lemma 18.7, to give a systematic account of the pricing of a fairly wide class
of barrier derivatives, including barrier call and put options. Let us define the
following standard contracts, which will be the basic building blocks in the sequel.
Definition 18.13 Fix a delivery time T . For jixed parameters K and L define
the claims S T , B O , H , and C by




                            C ( x ;K ) = max [ x- K, O] .                    (18.13)

The contract S T ( S T for "stock") thus gives the owner (the price of) one unit of
the underlying stock at delivery time T, whereas BO is an ordinary zero coupon
bond paying one at maturity T. The H-contract ( H stands for the Heaviside
function) gives the owner one if the value of the underlying stock exceeds L at
delivery time T, otherwise nothing is paid out. The C-claim is of course the
ordinary European call with strike price K . We note in passing that H ( x ; L ) =
HL( 2 ) .
   We now list the pricing functions for the standard contracts above. The value
of ST at time t is of course equal to the value of the underlying stock at the
same time, whereas the value of B O at t is e-T(T-t). The value of C is given by
the Black-Scholes formula, and the value of H is easily calculated by using risk
neutral valuation. Thus we have the following result.
Lemma 18.14 The contracts (18.10)-(18.13) with delivery time T are priced
at time t as follows (with the pricing function in bold).




                 C ( t ,s; K ) = c(t,s; K ) ,

where c(t,s; K ) is the usual Black-Scholes formula.
We may now put this machinery to some use and start with the simple case
of valuing a down-and-out contract on a bond. This contract will thus pay out
1 dollar at time T if the stock price is above the level L during the entire contract
262                                     BARRIER OPTIONS


period, and nothing if the stock price at some time during the period is below
or equal to L.
    A direct application of Theorem 18.8 gives us the formula


             (t, S;BO) = F (t, S;BOL) -
           FLO

Obviously we have BOL(x) = H(x; L) for all x so we have the following result.

Lemma 18.15 The down-and-out bond with barrier L is priced, for s > L, by
the formula




where H(t, s; L ) is given by Lemma 18.14.

    We continue by pricing a down-and-out contract on the stock itself (no option
is involved). Thus we want to compute FLO(t,S;ST) and Theorem 18.8 gives us

                   , ., pr< I , '   .
         FLO(t,S;ST) = F(t, S ; STL) -
                                              (       )F (t,-;STL ) .       (18.15)


A quick look at a figure gives us the relation

                              STL(x) = L . H(x; L)   + C(X;L).
Substituting this into (18.15) and using linearity (Lemma 18.7) we get




      = F (t, s; LH(*, L)    + C(+,L)) - -                              +C(*;L)




        + ' F (t, s; C(*;L)) - (:)"I2 F (t,-;C(*;L)
                                            Ls
                                             '
                                                    ).
      Summarizing we have the following.
264                             BARRIER OPTIONS


Putting this relation into (18.16), and using the linear property of pricing, we
get (18.18).
    As we have seen, almost all results are fairly easy consequences of the linearity
of the pricing functional. In Section 9.1 we used this linearity to prove the stand-
ard put-call parity relation for standard European options, and we can now
derive the put-call parity result for down-and-out options.
                                                       +
    Drawing a figure we see that P(x;K ) = K - x C ( x ;K ) ,so, in terms of the
standard contracts, we have
                                                       +
                    P ( x ;K ) = K B O ( X )- S T ( x ) C ( x ;K ) .
Using Corollary 18.9 we immediately have the following result. Note that when
L = 0 we have the usual put-call parity.
Proposition 18.18 (Put-call parity) The down-and-out put price PLO,and
call price CLOYare related by the formula


Here BLO and STLo are given by Lemmas 18.15 and 18.16, whereas CLO is
given by Proposition 18.17.
   We end this section by computing the price of a European upand-out put
option with barrier L and strike price K .
Proposition 18.19 (Upand-out put) The price of an up-and-out European
put option is given by the following formulas.
If L > K , then for s < L:



If L > K , then for s < L:
      pLO(t,S ; K ) = P ( t ,S ; L) - (K- L)H(t,s;L)




Proof If L > K then pL(s;K ) = P(s;K ) , and then (18.20) follows
immediately from Proposition 18.12.
  If L < K then it is easily seen that

                                                                                  I

Linearity and Proposition 18.12 give us (18.21).                                      I7
                                 IN CONTRACTS                                    265


18.3 I n Contracts
In this section we study contracts which will start to exist if and only if the price
of the underlying stock hits a prespecified barrier level at some time during the
contract period. We thus fix a standard T-claim of the form 2 = 9 (S(T)),and
we also fix a barrier L. We start by studying the "down-and-in" version of 2 ,
which is defined as follows:
   a If the stock price stays above the barrier L during the entire contract
     period, then nothing is paid to the holder of the contract.
     If the stock price, at some time before the delivery time T, hits the barrier
     L, then the amount 2 is paid to the holder of the contract.
   We will write the down-and-in version of 2 as ZLI, and the formal definition

Definition 18.20 Take as given the T-contract 2 = 9 (S(T)). Then the
T-contract ZLI is defined by

                                if S(t) > L for all t E [0, TI,
                                                                             (18.22)
          2Lz =   {a ($T)),             <
                                if ~ ( t ) L for some t E [o,4.

The pricing function for ZLI is denoted by FLI(t, s; a ) , or sometimes by

   Concerning the notation, L as a subscript indicates a "down" contract,
whereas the subscript I denotes an "in" contract. Pricing a down-and-in con-
tract turns out to be fairly easy, since we can in fact price it in terms of the
corresponding down-and-out contract.
Lemma 18.21 (In- out parity)

                                                         ) , , VS.
                   FLI(t, S;9 ) = F(t, S; a ) - F L ~S;(a~
Proof If, at time t, you have a portfolio consisting of a down-and-out version of
2 as well as a down-and-in version of 2 (with the same barrier L) then obviously
you will receive exactly Z at time T. We thus have

                      F(t, S;9 ) = F ~ z ( tS;
                                             ,9)   + F ~ o ( tS;, a ) .

   We can now formulate the basic result.
Proposition 18.22 (Pricing down-and-in contracts) Consider a f i e d
T-contract 2 = 9 (S(T)). Then the price of the corresponding down-and-in
contract ZLI is given by

              FLl(t, S; 9 ) = ~ ( tS;,aL)+ -(t)"'"' ( y ).  F t, - ; a L
266                                   BARRIER OPTIONS


Proof Fkom the equality QI = @L                  + aLwe have

Now use this formula, the lemma above, and Theorem 18.8.                             17

   The treatment of "upand-in" contracts is of course parallel to down-and-in
contracts, so we only give the basic definitions and results. We denote the
upand-in version of 2 by ZL', and the definition of zL'is as follows:
        If the stock price stays below the barrier L during the entire contract
        period, then nothing is paid to the holder of the contract.
        If the stock price, at some time before the delivery time T , hits the barrier
        L, then the amount 2 is paid to the holder of the contract.
      Corresponding t o Lemma 18.21, we have

                     F='(~,s; a) = F(t, S ; a) - F ~ O ( s;
                                                         ~ QI),
                                                            ,             Vs,   (18.23)

and from this relation, together with the pricing formula for upand-out
contracts, we have an easy valuation formula.

Proposition 18.23 (Pricing up-and-in contracts) Consider a @ed T -
contract 2 = QI ( S ( T ) ) .Then the price of the corresponding up-and-in contract
zL'is given by



   We end this section by giving, as an example, the pricing formula for
a down-and-in European call with strike price K.

Proposition 18.24 (Down-and-in European call) For s > L the down-
and-in European call option is priced as follows:
For L < K :
                                                    2i;/02
                        CLI(t, S;K ) =       (:)             C   (t, K)
                                                                  ;:
F o r L > K:


                                                 (t, ?;K) + (L - K ) H
                                   2i;/u2
        C ~ l ( tS;, K ) =   ():            {C
                             - (L - K)H(t, S;L).
                                         LADDERS


, 18.4 Ladders
i Let us take as given
          A finite increasing sequence of real numbers
I

                                    0 = a o< a1 <       <a ~ .
          This sequence will be denoted by a .
i         Another finite increasing sequence of real numbers



II        This sequence will be denoted by a .
  Note that the number N is the same in both sequences. The interval [a,, a,+l)
1 will play an important role in the sequel, and we denote it by Dn, with DN
  defined as DN = [aN,    m). For a fixed delivery time T we will now consider
  a new type of contract, called the "(a,P)-ladder", which is defined as follows.
     Definition 18.25 The (a,P)-ladder with delivery time T is a T-claim 2 ,
     described by
                                   N         I                \




        In other. words, if the realized maximum of the underlying stock during the
     contract period falls within the interval D,, then the payout at T is P,. A typical
     ladder used in practice is the forward ladder call with strike price K. For this
     contract a is exogenously specified, and P is then defined as



     The a-sequence in this case acts as a sequence of barriers, and the ladder call
     allows you to buy (at time T ) the underlying asset at the strike price K , while
     selling it (at T ) at the highest barrier achieved by the stock price during the con-
     tract period. The ladder call is intimately connected to the lookback forward call
     (see the next section), to which it will converge as the a-partition is made finer.
         The general (a, P)-ladder is fairly easy to value analytically, although the
     actual expressions may look formidable. To see this let us define the following
     series of upand-in contracts.
     Definition 18.26 For a given pair (a, P), the series of contracts 20,. . . , ZN is
     defined by
                                   BARRIER OPTIONS


   The point of introducing the 2,-contracts is that we have the following
obvic,us relation
                                                    N                                  I
    Thus a ladder is simply a sum of a series of up-and-in contracts. We see that
in fact 2, is an upand-in contract on 3/, -/3n-l bonds, with barrier a,. Thus we
may use the results of the preceding sections to value 2,. The result is as follows.
Proposition 18.27 (Ladder pricing formula) Consider an ( a ,/3) -ladder
with delivery time T . Assume that S ( t ) = s and that Ms(t) E Dm.Then the
price, Il ( t ) , of the ladder is given by                                            1
                     n ( t )=   %
                                / TI    +               %Fan' ( t , s; B O ) ,
                                            n=m+l
                                                                                       1
where "I, = pn- /3n-1, and                                                             d



P r o o f Exercise for the reader.                                                     I

18.5 Lookbacks                                                                         3
Lookback options are contracts which at the delivery time T allow you to take
advantage of the realized maximum or minimum of the underlying price process
over the entire contract period. Typical examples are
                                                                                       I
                                                                                           I
                    S ( T ) - min S ( t )               lookback call,
                              t<T


                   % m   S ( t )- S ( T )               lookback put,


                             S ( t )- K , 0
                                                I       forward lookback call,



                                                I
                                       S ( t ) ,0   forward lookback put.

    We will confine ourselves to give a sketch of the pricing of a lookback put;
for further results see the Notes below.
                                       LOOKBACKS                                      269



       From general theory, the price of the lookback put at t = 0 is given by




                                        [dT        1
                           = e-rT E~ max S ( t ) - e - ' T ~ Q[ S ( T ) ] .

    With S(0) = s , the last term is easily obtained as



    and it remains to compute the term EQ [maxtsT S ( t ) ] .To this end we recall that
    S ( t ) is given by
                                          + +
                        S ( t ) = exp {Ins f t u W ( t ) )= ex(t),
    where




    Thus we see that
                                    M s ( T ) = eM x (TI,
    and the point is of course that the distribution for Mx(T) is known to us from
    Proposition 18.4. Using this proposition we obtain the distribution function, F,
    for Mx ( T )as

i      F ( ~=) N (x - Ins -
                      a 0
                                     - exp   { 2 f ( x- Ins) } N (- x -f;+fT)
                                                    02
                                                                                  9




    for all x 2 Ins. From this expression we may compute the density function
    f = F', and then the expected value is given by




    After a series of elementary, but extremely tedious, partial integrations we end
    up with the following result.
    Proposition 18.28 (Pricing formula for lookback p u t ) The price, at t = 0,
    of the lookback put is given by



    where
                              BARRIER OPTIONS


18.6 Exercises
In all exercises below we assume a standard Black-Scholes model.
Exercise 18.1 An "all-or-nothing" contract, with delivery date T, and strike
price K , will pay you the amount K , if the price of the underlying stock exceeds
the level L at some time during the interval [0, t]. Otherwise it will pay nothing.
Compute the price, at t < T, of the all-or-nothing contract. In order to avoid
trivialities, we assume that S(s)< L for all s 5 t.
Exercise 18.2 Consider a binary contract, i.e. a T-claim of the form

                                  x = I[a,b](ST),
where as usual I is the indicator function. Compute the price of the down-and-out
version of the binary contract above, for all possible values of the barrier L.
Exercise 18.3 Consider a general down-and-out contract, with contract func-
tion a, as descibed in Section 18.2.1. We now modifiy the contract by adding a
fixed "rebate" A, and the entire contract is specified as follows:
     If S(t) > L for all t 5 T then @(S(T))is paid to the holder.
     If S(t) 5 L for some t 5 T then the holder receives the fixed amount A.
Derive a pricing formula for this contract.
   Hint: Use Proposition 18.4.
Exercise 18.4 Use the exercise above to price a down-and-out European call
with rebate A.
Exercise 18.5 Derive a pricing formula for a down-and-out version of the T
contract X = iP(S(T)), when S has a continuous dividend yield 6. Specialize to
the case of a European call.

18.7 Notes
Most of the concrete results above are standard. The general Theorem 18.8 and
its extensions seem, however, to be new. For barrier options we refer to Rubin-
stein and Reiner (1991), and the survey in Carr (1995). Two standard papers on
lookbacks are Come and Viswanathan (1991), and Goldman et al. (1979). See
also Musiela and Rutkowski (1997).
I     19.1 An Example
                           STOCHASTIC OPTIMAL CONTROL


    1 Let us consider an economic agent over a fixed time interval [0, TI. At time
    I t = 0 the agent is endowed with initial wealth xo and his/her problem is how to
    1 allocate investments and consumption over the given time horizon. We assume
    ' that the agent's investment opportunities are the following:
                The agent can invest money in the bank at the deterministic short rate of
            ,   interest r , i.e. he/she has access to the risk free asset B with

                                                 d B = r B dt.                      (19.1)

                The agent can invest in a risky asset with price process St,where we assume
                that the S-dynamics are given by a standard Black-Scholes model

                                              dS= oSdt   + aSdW.                    (19.2)
        We denote the agent's relative portfolio weights at time t by u,O (for the riskless
        asset), and u! (for the risky asset) respectively. His/her consumption rate at
        time t is denoted by q.
            We restrict the consumer's investment-consumption strategies to be self-
        financing, and as usual we assume that we live in a world where continuous
        trading and unlimited short selling is possible. If we denote the wealth of the
        consumer at time t by Xt, it now follows from Lemma 6.4 that (after a slight
        rearrangement of terms) the X-dynamics are given by

        1
                                          +
                          dXt = Xt [uir uia] dt - q dt           + u i a x t dWt.   (19.3)

            The object of the agent is to choose a portfolio-consumption strategy in such
        a way as to maximize &/her total utility over [0,T ] , and we assume that this
        utility is given by

                                   I3   [I'   F ( t , G ) d t + @(xT)]
                                                                    ,               (19.4)

        where F is the instantaneous utility function for consumption, whereas @ is a
        4egacy" function which measures thp utility of having some money left at the
        end of the period.
           A natural constraint on consumption is the condition

                                          QLO,       Vt20,                          (19.5)
272                   STOCHASTIC OPTIMAL CONTROL


and we also have of course the constraint



Depending upon the actual situation we may be forced to impose other con-
straints (it may, say, be natural to demand that the consumer's wealth never
becomes negative), but we will not do this at the moment.
    We may now formally state the consumer's utility maximization problem as
follows:




    A problem of this kind is known as a stochastic optimal control problem.
In this context the process X is called the s t a t e process (or state variable),
the processes uO,ul, c are called control processes, and we have a number of
control constraints. In the next sections we will study a fairly general class
of stochastic optimal control problems. The method used is that of dynamic
programming, and at the end of the chapter we will solve a version of the
problem above.

19.2 T h e Formal Problem
We now go on to study a fairly general class of optimal control problems. To this
end, let p(t, x, u) and u(t, x, u) be given functions of the form




   For a given point xo. E R n we will consider the following controlled
stochastic differential equation:

                    dXt = C1 ( t ,Xt, ut) dt   + u (t, Xt, ut) dWt,        (19.12)
                     XO= 50.                                               (19.13)

    We view the n-dimensional process X as a s t a t e process, which we are trying
to "control" (or "steer"). We can (partly) control the state process X by choosing
the k-dimensional control process u in a suitable way. W is a d-dimensional
                                  THE FORMAL PROBLEM                                       273


     Wiener process, and we must now try to give a precise mathematical meaning
     to the formal expressions (19.12)-(19.13).
     Remark 19.2.1 In this chapter, where we will work under a fixed measure, all
     Wiener processes are denoted by the letter W.
        Our first modeling problem concerns the class of admissible control processes.
     In most concrete cases it is natural to require that the control process u is adapted
    to the X process. In other words, at time t the value ut of the control process is
    only allowed to "depend" on past observed values of the state process X . One
    natural way to obtain an adapted control process is by choosing a deterministic

                                    g   :   ~    +    ~    ~   n   +   ~   k   ,

    and then defining the control process u by

                                        ut = g (t, Xt).

    Such a function g is called a feedback control law, and in the sequel we will
    restrict ourselves to consider only feedback control laws. For mnemo-technical
    purposes we will often denote control laws by u(t, x), rather than g(t,x), and
    write ut = u(t, Xt). We use boldface in order to indicate that u is a function. In
    contrast to this we use the notation u (italics) to denote the value of a control
    at a certain time. Thus u denotes a mapping, whereas u denotes a point in R ~
       Suppose now that we have chosen a fixed control law u(t, x). Then we can
    insert u into (19.12) to obtain the standard SDE

              dXt = P (4 Xt, u(t, Xt)) dt       + (t, xt,~ ( tx ,t ) ) dwt.
                                                  0                                    (19.14)

       In most concrete cases we also have to satisfy some control constraints,
    and we model this by taking as given a fixed subset U C Rk and requiring that
    ut E U for each t. We can now define the class of admissible control laws.

    Definition 19.1 A control law u is called admissible if
         u(t,x) E U for all t E R+ and all x E R n .
         For any given initial point (t, x) the SDE

                   dXs = P ( 8 ,Xs, U(S,Xs))              + 0 (s, Xs, U(S, Xs)) dWs,
                    xt = x
         has a unique solution.
I   ;The class of admissible control laws is denoted by U.
        For a given control law u, the solution process X will of course depend on the
    initial value x, as well as on the chosen control law u. To be precise we should
274                    STOCHASTIC OPTIMAL CONTROL                                        I



therefore denote the process X by XZ*",but sometimes we will suppress x or u.
We note that eqn (19.14) looks rather messy, and since we will also have to deal
with the It8 formula in connection with (19.14) we need some more streamlined                i
notation.
Definition 19.2 Consider eqn (19.14), and let ' denote matrix transpose.
      For any fied vector u E R k , the functions p", uu, and C u are defined by




      For any control law u, the functions pU, a U , C U ( t , x ) , and F U ( t , x ) are
      defined by

                         pU(t,2 ) = At, 2 , u(t,x ) ) ,
                         f f U ( 5t l) = ~ ( 2t , ,~ ( XI),
                                                        t
                         C U ( t 2, ) = ~ ( 2t ,,~ ( xt ) ,) u ( t , x ,u(t,x))',



      defined by
                         F U ( t , x ) = F ( t , x , u(t,x ) ) .

      For any fied vector u E R k , the partial diffeerenticll operator A" is                1
      For any control law u, the partial differential operator d" is defined by                  I


   Given a control law u we will sometimes write eqn (19.14) in a convenient
shorthand notation as
                          dXy = bUd t uUdWt.      +                  (19.15)
    For a given control law u with a corresponding controlled process X U we                 1
will also often use the shorthand notation ut instead of the clumsier e:
  .   - .
   The reader should be aware of the fact that the existence assumption in
the definition above is not at all an innocent one. In many cases it is natural
to consider control laws which are "rapidly varying", i.e. feedback laws u(t,x)
which are very irregular as functions of the state variable x. Inserting such an
                   THE HAMILTON-JACOBI-BELLMAN EQUATION                         275


  irregular control law into the state dynamics will easily give us a very irregular
  drift function p (t, x, u(t, x)) (as a function of x), and we may find ourselves
  outside the nice Lipschitz situation in Proposition 5.1, thus leaving us with a
I highly nontrivial existence problem. The reader is referred to the literature for
  details.
      We now go on to the objective function of the control problem, and therefore
  we consider as given a pair of functions


    b
                               if?: Rn + R.
    b
        Now we define the value function of our problem as the function



    defined by




I
    where X u is the solution to (19.14) with the given initial condition Xo = xo.
        Our formal problem can thus be written as that of maximizing Jo(u) over
    all u E U ,and we define the optimal value       by

                                    30= Usup
                                          EU
                                             31(u).

    If there exists an admissible control law u with the property that



    then we say that u is an optimal control law for the given problem. Note that,
    as for any optimization problem, the optimal law may not exist. For a given
    concrete control problem our main objective is of course to find the optimal
    control law (if it exists), or at least to learn something about the qualitative
    behavior of the optimal law.

    19.3 T h e Hamilton- Jacobi- Bellman Equation
    Given an optimal control problem we have two natural questions to answer:
        (a) Does there exist an optimal control law?
        (b) Given that an optimal control exists, how do we find it?
    In this text we will mainly be concerned with problem (b) above, and the meth-
    odology used will be that of dynamic programming. The main idea is to
    embed our original problem into a much larger class of problems, and then to tie
276                     STOCHASTIC OPTIMAL CONTROL


all these problems together with a PDE known as the Hamilton-Jacobi-Bellman
equation. The control problem is then shown to be equivalent to the problem of
finding a solution to the HJB equation.
     We will now describe the embedding procedure, and for that purpose we
choose a fixed point t in time, with 0 5 t 5 T. We also choose a fixed point x in
the state space, i.e. x E R n . For this fixed pair (t,x) we now define the following
control problem.
Definition 19.3 The control problem P ( t , x ) is defined as the problem to
maximize
                       E,,,   [jTF(s, x:,       us)

given the dynamics

            dX," = p (8, X,U, U(S,X,")) ds       + u (8, X,: U(S, X:))   dWB,   (19.17)
             xt= x,
and the constmints

                         9) E U, V(s, Y) E [t,TI x R".
                        4%
    Observe that we use the notation s and y above because the letters t and x
are already used to denote the fixed chosen point (t,x).
    We note that in terms of the definition above, our original problem is the
problem P(0, xo). A somewhat drastic interpretation of the problem P(t, x) is
that you have fallen asleep at time zero. Suddenly you wake up, noticing that
the time now is t and that your state process while you were asleep has moved
to the point x. You now try to do as well as possible under the circumstances, so
you want to maximize your utility over the remaining time, given the fact that
you start at time t in the state x.
    We now define the value function and the optimal value function.
Definition 19.4
      The value function
                                 J:R+ xRn x U + R
      is defined by


                      J(t,., u) = E   [i    T
                                                F(s,

      given the dynamzcs (19.17)-(19.18).
      The optimal value function

                                      V:R+xRn+R
I                      THE HAMILTON-JACOBI-BELLMAN EQUATION


             is defined by
                                         V(t, x) = sup J(t, x, u).
                                                    u€U
    to ,
        Thus J(t, x, u) is the expected utility of using the control law u over the time
    interval [t, TI, given the fact that you start in state x at time t. The optimal value
    function gives you the optimal expected utility over [t, TI under the same initial
    conditions.
        The main object of interest for us is the optimal value function, and we
    now go on to derive a PDE for V. It should be noted that this derivation is
    largely heuristic. We make some rather strong regularity assumptions, and we
    disregard a number of technical problems. We will comment on these problems
    later, but to see exactly which problems we are ignoring we now make some basic
    assumptions.
     Assumption 19.3.1 We assume the following:
           1. There exists an optimal control law u.
           2. The optimal value function V is regular in the sense that V E C1t2.
           3. A number of limiting procedures in the following arguments can be justified.
    We now go on to derive the PDE, and to this end we fix (t, x) E (0, T) x Rn.
    Furthermore we choose a real number h (interpreted as a "small" time increment)
                   +
    such that t h < T. We choose a fixed but arbitrary control law u, and define
    the control law u* by

                                        4 3 , Y),            +
                                                 (s,9) E It, t hl x En,
                        u*(s,Y) =
                                    {                      +
                                              , (s, 9 ) E (t h, TI x Rn.
                                        ~ ( sY),

    In other words, if we use u* then we use the arbitrary control u during the time
                   +
    interval [t, t h], and then we switch to the optimal control law during the rest
    of the time period.
        The whole idea of dynamic programming actually boils down to the following
    procedure:
             First, given the point (t,x) as above, we consider the following two
             strategies over the time interval [t, TI:
             Strategy I. Use the optimal law Ez.
             Strategy 11. Use the control law u* defined above.
             We then compute the expected utilities obtained by the respective
             strategies.
             Finally, using the obvious fact that Strategy I by definition has to be at
             least as good as Strategy 11, and letting h tend to zero, we obtain our
             fundamental PDE.
           We now carry out this program.
278                     STOCHASTIC OPTIMAL CONTROL


Expected utility for strategy I: This is trivial, since by definition the utility
is the optimal one given by J(t, x, u) = V(t, x).
Expected utility for strategy 11: We divide the time interval [t,T] into two
                         +                +
parts, the intervals [t, t h] and (t h, TI, respectively.
                                                                                +
      The expected utility, using Strategy 11, for the interval [t, t h) is given by




                         +
                              E ~ ,[xf h      F(s,X,U,u,) ds .
                                                                I   +
      In the interval [t h,T] we observe that at time t h we will be in
      the (stochastic) state X,U+h.. Since, by definition, we will use the optimal
      strategy during the entire interval [t + h,T] we see that the remaining
                                    +                     +
      expected utility at time t h is given by V(t h, X,U+h).Thus the expected
                                    +
      utility over the interval [t h, TI, conditional on the fact that at time t we
      are in state x, is given by

                                     E t , [V(t + h, X,U,h)l.
Thus the total expected utility for Strategy I1 is


                 Et,-   [rh    F(s,X,U,u,) ds + V ( t     + h,X,U,,) .  I
Comparing the strategies: We now go on to compare the two strategies, and
since by definition Strategy I is the optimal one, we must have the inequality


        V(t.1) L Et,,   [i   t+h
                                   F(s,X,U,us) ds     + V(t + h,X:+h)
                                                                            I
We also note that the inequality sign is due to the fact that the arbitrarily chosen
                                                      +
control law u which we use on the interval [t, t h] need not be the optimal one.
In particular we have the following obvious fact.
Remark 19.3.1 We have equality in (19.20) if and only if the control law u is
an optimal law u. (Note that the optimal law does not have to be unique.)
Since, by assumption, V is smooth we now use the It6 formula to obtain (with
obvious notation)


       V(t   + h, Xr+h) = V(t, x) +       1 av x;) +
                                            t+h
                                                  {%(s,         duV(s,X):


                          +   1    t+h
                                         V,V(S, X,U)gudWs.
               THE HAMILTON-JACOBI-BELLMAN EQUATION                             279


If we apply the expectation operator Et,, to this equation, and assume enough
integrability, then the stochastic integral will vanish. We can then insert the res-
ulting equation into the inequality (19.20). The term V(t, x) will cancel, leaving
us with the inequality


    4,.   [Iih[i         x
                         ,:        us)   + av
                                                                1I
                                                  + dUV(s,X:) ds 5 0.
                                           =(a, C )                         (19.22)


Going to t h e limit: Now we divide by h, move h within the expectation and
let h tend to zero. Assuming enough regularity to allow us to take the limit
within the expectation, using the fundamental theorem of integral calculus, and
recalling that Xt = x, we get

                                           av
                         F(t,x,u)        + x(t,x) + dUV(t,x)< 0,            (19.23)

where u denotes the value of the law u evaluated at (t, x), i.e. u = u(t, x). Since
the control law u was arbitrary, this inequality will hold for all choices of u E U ,
and we will have equality if and only if u = G(t, x). We thus have the following

                  av
                  -(t,        x)   + sup {F(t, x,u) + duV(t,x)) = 0.
                  at                 uEU

During the discussion the point (t, x) was fixed, but since it was chosen as an
arbitrary point we see that the equation holds in fact for all (t, x) E (0, T) x Rn.
Thus we have a (nonstandard type of) PDE, and we obviously need some
boundary conditions. One such condition is easily obtained, since we obviously
(why?) have V(T, x) = @(x)for all x E Rn. We have now arrived at our goal,
              amilton-Jacobi-Bellman equation, (often referred to as the HJB



Theorem 19.5 (Hamilton-Jacobi-Bellman equation) Under Assumption
19.3.1, the following hold:
   1. V satisfies the Hamilton-Jacobi-Bellman equation


                                       V(t,x) E (0,T) x Rn
          ~(t,x)+sup{F(t,x,~)+d~V(t,x)}=O,
                         UEU
                                                  V(T,x) =@(x), V X E Rn.

   2. For each (t, x) E [0, TI x Rn the supremum in the HJB equation above is
      attained by u = G(t, x).
                       STOCHASTIC OPTIMAL CONTROL


Remark 19.3.2 By going through the arguments above, it is easily seen that
we may allow the constraint set U to be time- and state-dependent. If we thus
have control constraints of the form

                              u(t,x) E U(t,x),       W,x

then the HJB equation still holds with the obvious modification of the
supremum part.
    It is important to note that this theorem has the form of a necessary con-
dition. It says that if V is the optimal value function, and if ii is the optimal
control, then V satisfies the HJB equation, and Q(t,x) realizes the supremum
in the equation. We also note that Assumption 19.3.1 is an ad hoc assumption.
One would prefer to have conditions in terms of the initial data p, a,F, and
which would guarantee that Assumption 19.3.1 is satisfied. This can in fact be
done, but at a fairly high price in terms of technical complexity. The reader is
referred to the specialist literature.
    A gratifying, and perhaps surprising, fact is that the HJB equation also acts
as a sufficient condition for the optimal control problem. This result is known
as the verification theorem for dynamic programming, and we will use it
repeatedly below. Note that, as opposed t o the necessary conditions above, the
verification theorem is very easy to prove rigorously.
Theorem 19.6 (Verification theorem) Suppose that we have two functions
H ( t , i ) and g(t, x), such that
   a H is suficiently integrable (see Remark 19.3.4 below), and solves the HJB
      equation

       { ~ ( t , x ) + ~ ~ ~ { F ( t , x , u ) + d u ~ ( t ~ xv)(}t ,=xO),~ ( O , T ) x R ~

                                             H ( T , x ) = @ ( x ) , V X E Rn.

      The function g is an admissible control law.
   a For each jixed (t, x), the supremum in the expression

                               sup {F(t, x, u)
                               UEU
                                                 + d u H ( t ,2))
     is attained by the choice u = g(t, x).
Then the following hold:
   1. The optimal value function V to the control problem is given by

                                     V(t, x) = H(t, x).

   2. There exists an optimal control law u, and in fact u(t, x) = g(t, x).
                THE HAMILTON-JACOBI-BELLMAN EQUATION                          281


 Remark 19.3.3 Note that we have used the letter H (instead of V) in the HJB
 equation above. This is because the letter V by definition denotes the optimal
 value function.
 Proof Assume that H and g axe given as above. Now choose an arbitrary
 control law u E 24,and fix a point (t, x). We define the process X U on the time
 interval [t, T ] as the solution to the equation

                     dX,U = pu (s, X,U) ds   + uU(s,X,U) dW,,
                        xt= x.
 Inserting the process X U into the function H and using the It6 formula we obtain




1! Since H solves the HJB equation we see that


i for all u E U ,and thus we have, for each s and P-a.s, the inequality

                   gat( s , x):   + (AUH)(a, x:)   5 -FU(s, X:).

 From the boundary condition for the HJB equation we also have H(T, X;)         =
 @(X!j?),so we obtain the inequality




 Taking expectations, and assuming enough integrability, we make the stochastic
 integral vanish, leaving us with the inequality




 Since the control law u was arbitrarily chosen this gives us

                          H(t, x) 1 sup J(t, x, u ) = V(t, x).
                                     UEU
282                   STOCHASTIC OPTIMAL CONTROL


   To obtain the reverse inequality we choose the specific control law u(t, x) =
g(t,x). Going through the same calculations as above, and using the fact that
by assumption we have
                      aH
                      ,(t,x)       + F g (t,x) + d g H ( t , x) = 0,
we obtain the equality




On the other hand we have the trivial inequality

                                 V(t, x) 2 J ( t , 2, g),
so, using (19.24)-(19.26), we obtain

                     H(t, x) 2 V(t, x) 2 a t , 2, g ) = H(t, 2).
This shows that in fact

                           H(t,x) = V(t,x) = J ( t , 2, g),
which proves that H = V, and that gs is the optimal control law.
Remark 19.3.4 The assumption that H is "sufficiently integrable" in the the-
orem above is made in order for the stochastic integral in the proof to have
expected value zero. This will be the case if, for example, H satisifes the condition

                           V,H(s,X,U)aU(s, X4)E L2,

for all admissible control laws.
Remark 19.3.5 Sometimes, instead of a maximization problem, we consider a
minimization problem. Of course we now make the obvious definitions for the
value function and the optimal value function. It is then easily seen that all the
results above still hold if the expression

                           sup {F(t,x, u)
                           uEU
                                               + d V ( t , x))
                                                   U




in the HJB equation is replaced by the expression

                            i d (F(t, x, u)
                           uEU
                                              + A V(t, x)).
                                                   U




Remark 19.3.6 In the Verification Theorem we may allow the control con-
straint set U to be state and time dependent, i.e. of the form U (t, x).
                                   HANDLING THE HJB EQUATION


    19.4 Handling the HJB Equation
    In this section we will describe the actual handling of the HJB equation, and in
    the next section we will study a classical example-the linear quadratic regulator.
    We thus consider our standard optimal control problem with the corresponding



                          (   t   , x)   +g::        {F(t,x,u)   + duV(t,x)} = 0,         (19.27)
                                                                        V(T, x) = @(x).

    Schematically, we now proceed as follows:
               1. Consider the HJB equation as a PDE for an unknown function V.
/              2. Fix an arbitrary point (t, x) E [0, TI x Rn and solve, for this fixed choice
                  of (t, x), the static optimization problem

                                                max [F(t,x, u)
                                                uEU
                                                                   + AuV(t,x)]
                  Note that in this problem u is the only variable, whereas t and x are
                  considered to be fixed parameters. The functions F, p, u, and V are
                  considered as given.
               3. The optimal choice of u, denoted by G , will of course depend on our choice
                  of t and x, but it will also depend on the function V and its various
                  partial derivatives (which are hiding under the sign duV). To highlight
    I'
                  these dependencies we write ii as
    5

                                                         Q=Q(t,x;V).                      (19.28)

               4. The function 4 (t, x; V) is our candidate for the optimal control law, but
                  since we do not know V this description is incomplete. Therefore we sub-
                  stitute the expression for 4 in (19.28) into the PDE (19.27), giving us
                  the PDE
                                   av
                                   -(t,         x)   + ~ ' ( t ,x) + d ' ~ ( t ,x) = 0,   (19.29)
                                    at
                                                                        V(T,x) = @(x).    (19.30)
         I,'


               5. Now we solve the PDE above! (See the remark below.) Then we put the
                  solution V into expression (19.28). Using the verification theorem 19.6 we
                  can now identify V as the optimal value function, and 4 as the optimal
                  control law.
    Remark 19.4.1 The hard work of dynamic programming consists in solving the
    highly nonlinear PDE in step 5 above. There are of course no general analytic
284                      STOCHASTIC OPTIMAL CONTROL


methods available for this, so the number of known optimal control problems
with an analytic solution is very small indeed. In an actual case one usually tries
to guess a solution, i.e. we typically make an ansatz for V, parameterized by a
finite number of parameters, and then we use the PDE in order to identify the
parameters. The making of an ansatz is often helped by the intuitive observation
that if there is an analytical solution to the problem, then it seems likely that
V inherits some structural properties from the boundary function as well as
from the instantaneous utility function F.
    For a general problem there is thus very little hope of obtaining an analytic
solution, and it is worth pointing out that many of the known solved control
problems have, to some extent, been "rigged" in order to be analytically solvable.

19.5 The Linear Regulator
We now want to put the ideas from the previous section into action, and for this
purpose we study the most well known of all control problems, namely the linear
quadratic regulator problem. In this classical engineering example we wish to
minimize
                   E     [iT +
                            { x : ~ X t u:Rut} dt   + XhHXT ,
                                                             I
(where I denotes transpose) given the dynamics



One interpretation of this problem is that we want to control a vehicle in such
a way that it stays close to the origin (the terms xtQx and xlHx) while at the
same time keeping the "energy" utRu small.
   As usual Xt E R n and ut E R ~and   , we impose no control constraints on u.
The matrices Q, R, H , A, B, and C are assumed to be known. Without loss of
generality we may assume that Q, R, and H are symmetric, and we assume that
R is positive definite (and thus invertible).
   The HJB equation now becomes

           (g + (t, x)    inf {xtQx
                          u€Rk
                                      + ulRu + [V.V] (t, $) [Ax + Bu]}



   For each fixed choice of ( t ,x) we now have to solve the static unconstrained
optimization problem to minimize

                           utRu   + [V,V](t,x) [Az+ Bu] .
                            THE LINEAR REGULATOR                                  285


Since, by assumption, R > 0 we get the solution by setting the gradient equal
to zero, thus giving us the equation


which gives us the optimal u as


Here we see clearly (compare point 2 in the scheme above) that in order to
use this formula we need to know V, and we thus try to make an educated
guess about the structure of V. From the boundary value function xtHx and
the quadratic term xtQx in the instantaneous cost function it seems reasonable
to assume that V is a quadratic function. Consequently we make the following
ansatz:
                                                +
                                V(t, 2) = xfP(t)x q(t),
where we assume that P(t) is a deterministic symmetric matrix function of time,
whereas q ( t ) is a scalar deterministic function. It would of course also be natural
to include a linear term of the form L(t)x, but it turns out that this is not
necessary.
   With this trial solution we have, suppressing the t-variable and denoting time
derivatives by a dot,




Inserting these expressions into the HJB equation we get




We note that the last term above equals tr[C t PC], where t r denote the trace of
a matrix, and furthermore we see that 2xfPAx = xtAtPx + xtPAx (this is just
cosmetic). Collecting terms gives us



If this equation is to hold for all x and all t then firstly the bracket must vanish,
leaving us with the matrix ODE
                       P = PBR-'B'P       - A'P - P A - Q.
286                   STOCHASTIC OPTIMAL CONTROL


We are then left with the scalar equation



We now need some boundary values for P and q, but these follow immediately
from the boundary conditions of the HJB equation. We thus end up with the
foll~wingpairs of equations:

                         P = PBR-'B'P - A'P - P A - Q ,
                     P ( T )= H.




The matrix equation (19.32) is known as a Riccati equation, and there are
powerful algorithms available for solving it numerically. The equation for q can
then be integrated directly.
    Summing up we see that the optimal value function and the optimal control
law are given by the following formulas. Note that the optimal control is linear
in the state variable.




19.6   Optimal Consumption a n d Investment
19.6.1 A Generalization
In many concrete applications, in particular in economics, it is natural to consider
an optimal control problem, where the state variable is constrained to stay within
a prespecified domain. As an example it may be reasonable to demand that the
wealth of an investor is never allowed to become negative. We will now generalize
our class of optimal control problems to allow for such considerations.
   Let us therefore consider the following controlled SDE:




where as before we impose the control constraint ut E U.We also consider as
given a fixed time interval [0, TI, and a fixed domain D G [0,TI x R n , and the
basic idea is that when the state process hits the boundary d D of D, then the
activity is at an end. It is thus natural to define the stopping time T by

                        7 = inf {t 2 01(t, Xt ) E   aD)A T,
                         OPTIMAL CONSUMPTION AND INVESTMENT                                        287
i
    where x A y = min[x, y]. We consider as given an instantaneous utility function
                                                , i.e. a mapping @ : d D -t R. The
    F(t, x , u ) and a "bequest function" @ ( t x),
    control problem to be considered is that of maximizing




  In order for this problem to be interesting we have to demand that X o E D , and
  the interpretation is that when we hit the boundary aD,the game is over and
  we obtain the bequest @ (7,  X T ) . We see immediately that our earlier situation
  corresponds to the case when D = [O,T]x Rn and when @ is constant in the
i t-variable.
'
      In order to analyze our present problem we may proceed as in the previous
  sections, introducing the value function and the optimal value function exactly
  as before. The only new technical problem encountered is that of considering
  a stochastic integral with a stochastic limit of integration. Since this will take
  us outside the scope of the present text we will confine ourselves to giving the
  results. The proofs are (modulo the technicalities mentioned above) exactly as
  before.
    Theorem 19.7 (HJB equation) Assume that
         The optimal value function V is in
         An optimal law u exists.
    Then the following hold:
       1. V satisifies the HJB equation

            [   $(t,.)     + sup
                             UEU
                                 { F ( t , x , u )+ A u V ( t , x ) } = 0, V ( t , x ) E D,

             I                                          V ( t ,X ) = @(t,
                                                                       x ) , V ( t ,X ) E dD.
       2. For each ( t , x ) E D the supremum i n the HJB equation above is attained
          by 21 = a(t,X I .
    Theorem 19.8 (Verification theorem) Suppose that we have two functions
    H ( t , x ) and g(t, x ) , such that
         H is suficiently integrable, and solves the HJB equation

            {~(t,x)+~m;{F(t,x,u)+AuH(t,x)}=O,
                                         V(t x)€D,

                                                        H ( t , x ) = @(t,x ) , V ( t ,x ) E dD.

         The function g is an admissible control law.
288                     STOCHASTIC OPTIMAL CONTROL


        For each jixed (t, x), the supremum in the expression

                                sup {F(t,x, u)
                                uEU
                                                 + duH(t,x)}
        is attained by the choice u = g(t, 2).
Then the following hold:
      1. The optimal value function V to the control problem is given by



      2. There exists an optimal control law ii, and in fact u(t, x) = g(t, x).

19.6.2 Optimal Consumption
In order to illustrate the technique we will now go back to the optimal consump
tion problem at the beginning of the chapter. We thus consider the problem of
maximizing



given the wealth dynamics



As usual we impose the control constraints




    In a control problem of this kind it is important to be aware of the fact
that one may quite easily formulate a nonsensical problem. To take a simple
example, suppose that we have @ = 0, and suppose that F is increasing and
unbounded in the c-variable. Then the problem above degenerates completely. It
does not possess an optimal solution at all, and the reason is of course that the
consumer can increase his/her utility to any given level by simply consuming an
arbitrarily large amount at every t. The consequence of this hedonistic behavior
is of course the fact that the wealth process will, with very high probability,
become negative, but this is neither prohibited by the control constraints, nor
punished by any bequest function.
    An elegant way out of this dilemma is to choose the domain D of the preceding
section as D = [0,TI x { X ~ X> 0). With T defined as above this means, in concrete
terms, that
                            r=inf{t>O(Xt=O}AT.
                OPTIMAL CONSUMPTION AND INVESTMENT


A natural objective function in this case is thus given by




which automatically ensures that when the consumer has no wealth, then all
activity is terminated.
   We will now analyze this problem in some detail. Firstly we notice that we
                                +
can get rid of the constraint uf u: = 1 by defining a new control variable w as
w = ul, and then substituting 1 - w for uO.This gives us the state dynamics

          dXt = wt [or - r] Xt dt   + (rXt - ct) dt + wuxt dwt,         (19.42)

and the corresponding HJB equation is




   We now specialize our example to the case when F is of the form



where 0 < 7 < 1. The economic reasoning behind this is that we now have
an infinite marginal utility at c = 0. This will force the optimal consumption
plan to be positive throughout the planning period, a fact which will facilitate
the analytical treatment of the problem. In terms of Remark 19.4.1 we are thus
"rigging" the problem.
    The static optimization problem to be solved w.r.t. c and w is thus that of
maximizing

            e-6tc7   + wx(a - r)-av +         av I , ,,3
                                      (rx - c)- + -x w u
                                 ax            ax 2      ax2 '
and, assuming an interior solution, the first-order conditions are



                                w=-
                                        -Vx
                                              .-a - r
                                       2.   vzx   u2    '
where we have used subscripts to denote partial derivatives.
   We again see that in order t o implement the optimal consumption-investment
plan (19.43)-(19.44) we need to know the optimal value function V. We therefore
290                   STOCHASTIC OPTIMAL CONTROL


suggest a trial solution (see Remark 19.4.1), and in view of the shape of the
instantaneous utility function it is natural to try a V-function of the form



where, because of the boundary conditions, we must demand that

                                    h(T) = 0.                             (19.46)

Given a V of this form we have (using to denote the time derivative)




Inserting these expressions into (19.43)-(19.44) we get

                                           a- r
                            ~ ( tx), =
                                         a2(1- y ) '



This looks very promising: we see that the candidate optimal portfolio is constant
and that the candidate optimal consumption rule is linear in the wealth variable.
In order to use the verification theorem we now want to show that a V-function
of the form (19.45) actually solves the HJB equation. We therefore substitute the
expressions (19.47)-(19.51) into the HJB equation. This gives us the equation




where the constants A and B are given by




If this equation is to hold for all x and all t, then we see that h must solve
the ODE
                           THE MUTUAL FUND THEOREMS                                291


j An equation of this kind is known as a Bernoulli equation, and it can be
   solved explicitly (see the exercises).
 3     Summing up, we have shown that if we define V as in (19.45) with h defined as
 ! the solution to (19.52)-(19.53), and if we define w and 2 by (19.50)-(19.51), then
 I V satisfies the HJB equation, and dt, i: attain the supremum in the equation. The
I verification theorem then tells us that we have indeed found the optimal solution.



j 19.7 T h e M u t u a l Fund Theorems
    In this section we will briefly go through the "Merton mutual fund theorems",
    originally presented in Merton (1971).

1 19.7.1 The Case with No Risk h e Asset
    We consider a financial market with n asset prices S1, . . . , S,. To start with we
    do not assume the existence of a risk free asset, and we assume that the price
    vector process S(t) has the following dynamics under the objective measure P.



    Here W is a k-dimensional standard Wiener process, a is an n-vector, a is an
8   n x k matrix, and D(S) is the diagonal matrix

                                             . . ., S,].
                                D(S) = diag[S~,

    In more pedestrian terms this means that



    where oi is the ith row of the matrix a.
       We denote the investment strategy (relative portfolio) by w, and the con-
    sumption plan by c. If the pair (w, c) is self-financing, then it follows from the
    S-dynamics above, and from Lemma 6.4, that the dynamics of the wealth process
    X are given by
                                                  +
                           d X = Xw'a dt - cdt Xw'a dW.                         (19.55)
    We also take as given an instantaneous utility function F(t, c), and we basically
    want to maximize
                                   E   [iT F(t,G)dt] ,

    where T is some given time horizon. In order not to formulate a degenerate
    problem we also impose the condition that wealth is not allowed to become
    negative, and as before this is dealt with by introducing the stopping time
292                   STOCHASTIC OPTIMAL CONTROL


Our formal problem is then that of maximizing




given the dynamics (19.54)-(19.55), and subject to the control constraints




Instead of (19.56) it is convenient to write


where e is the vector in R n which has the number 1 in all components, i.e.
ef = (1,. .. , I ) .
    The HJB equation for this problem now becomes




    In the general case, when the parameters a and u are allowed t o be functions
of the price vector process S, the term AC~"V(t,x,       s) turns out to be rather
forbidding (see Merton's original paper). It will in fact involve partial derivatives
to the second order with respect to all the variables x, 81,. . . ,s,.
    If, however, we assume that a and u are deterministic and constant over
time, then we see by inspection that the wealth process X is a Markov process,
and since the price processes do not appear, neither in the objective function nor
in the definition of the stopping time, we draw the conclusion that in this case
X itself will act as the state process, and we may forget about the underlying
S-process completely.
    Under these assumptions we may thus write the optimal value function as
V(t, x), with no s-dependence, and after some easy calculations the term AclwV
turns out to be

                   dcyWV
                               , av
                       = xw a- - c-
                                          av + 1-x 2w,Cw-
                                                        a 2v
                             ax   ax             2          ax2 '

where the matrix C is given by


      We now summarize our assumptions.
                         THE MUTUAL FUND THEOREMS


Assumption 19.7.1 W e assume that
     the vector o is constant and deterministic,
     the matrix a is constant and deterministic,
     the matrix u has rank n, and i n particular the matrix C = out is positive
     definite and invertible.
   We note that, in terms of contingent claims analysis, the last assumption
means that the market is complete. Denoting partial derivatives by subscripts
we now have the following HJB equation

               sup       { ~ ( c)t ,+ (xw'o - c)VX(t,x) + !~x~w'cwv,~(~,
                                                                     5)) =0,
             w'e=l,c20




If we relax the constraint w'e = 1, the Lagrange function for the static
optimization problem is given by

      L = F(t,c) + (xw'a - c)Vx(t,x)       + ~ x 2 w ' ~ w ~ , , x)
                                                                 ( t ,+ X (1- w'e)

Assuming the problem to be regular enough for an interior solution we see that
the first order condition for c is




The first order condition for w is

                             xafVX   + X ~ V ~ , W ' C = Xe',
so we can solve for w in order to obtain




Using the relation e'w =1 this gives X as




and inserting this into (19.58) gives us, after some manipulation,
294                     STOCHASTIC OPTIMAL CONTROL


      To see more clearly what is going on we can write this expression as

                                 w(t) = g,+ Y(t)h,                           (19.60)

where the fixed vectors g and h are given by




whereas Y is given by
                             Y(t) =  Vx(t, X(t))
                                   X(t)Vxx(t, X(t)) '
Thus we see that the optimal portfolio is moving stochastically along the o n e
dimensional "optimal portfolio line"

                                      9   + sh,
in the ( n - 1)-dimensional "portfolio hyperplane" A, where



   We now make the obvious geometric observation that if we fix two points on
                                                  +                +
the optimal portfolio line, say the points wa = g ah and wb = g bh, then any
point w on the line can be written as an f i n e combination of the basis points
                                                       +
wa and wb. An easy calculation shows that if ws = g sh then we can write



where
                                     p=-S- b
                                         a- b'
The point of all this is that we now have an interesting economic interpretation of
the optimality results above. Let us thus fix wa and wb as above on the optimal
portfolio line. Since these points are in the portfolio plane A we can interpret
them as the relative portfolios of two fixed mutual funds. We may then write
(19.60) as
                                           +
                           w(t) = p(t)wa (1 - p(t))wb,                      (19.64)
with
                                      Y(t) - b
                               dt) = a -b *
Thus we see that the optimal portfolio w can be obtained as aUsuperportfolio"
where we allocate resources between two fixed mutual funds.
                         THE MUTUAL FUND THEOREMS


 'heorem 19.9 (Mutual fund theorem) Assume that the problem is regular
 nough to allow for an interior solution. Then there exists a one-dimensional
 urameterized family of mutual funds, given by wS = g + sh, where g and h are
 efined by (1 9.62)-(19.62), such that the following hold:
   1. For each fied s the relative portfolio wS stays fied over time.
   2. For any fied choice of a # b the optimal portfolio w(t) is, for all values
      of t, obtained by allocating a11 resources between the fied funds wa and
      wb, i.e.

                                      +(t) = pa(t)wa     + pb(t)~b,
                            pa(t)   + p (t) = 1.
                                         b


   3. The relative proportions (p a , p b) of the portfolio wealth allocated to wa and
      wb respectively are given by
                                               Y(t) - b
                                       pa(t) = -,
                                                  a- b
                                               a - Y (t)
                                       P ~ (=~ ) a -b 3

         where Y is given by (19.65').

19.7.2 The Case with a Risk flee Asset
Again we consider the model

                           d S = D(S)a dt    + D(S)a dW(t),
with the same assumptions as in the preceding section. We now also take as
given the standard risk free asset B with dynamics

                                      d B = r B dt.

Formally we can denote this as a new asset by subscript zero, i.e. B = So, and
then we can consider relative portfolios of the form w = (wO,w1,. . . , w,,)' where
of course Ct w, = 1. Since B will play such a special role it will, however, be
convenient to eliminate wo by the relation
                                               n
                                    W~=I-CW~,
                                               1

and then use the letter w to denote the portfolio weight vector for the risky
assets only. Thus we use the notation

                                    w = (wI,... ,wn)',
296                    STOCHASTIC OPTIMAL CONTROL


and we note that this truncated portfolio vector is allowed to take any value
in Rn.
    Given this notation it is easily seen that the dynamics of a self-financing port-
folio are given by




That is,



where as before e E Rn denotes the vector (1,1,.. . , I ) ' .
  The HJB equation now becomes

                   K(t,x)   + c>O,sup   { F ( t , c )+ d c 9 w V ( t , x )=0,
                                                                           )
                                   wERn

                                                              V ( T ,x ) = 0,
                                                               V(t,O)=0,
                                                                     *   ' ,    t

where

        dcV = xwl(a - re)Vx(t,x )       + ( r x - c)V,(t,x) + ~x2w1CwVx,(t,x ) .
The first order conditions for the static optimization problem are

                            8F
                                                                                        'I
                            -(t,
                             8c    c) = Vx(t,x ) ,

                                      + Vx ~ - l ( -n re),
                                    w=--
                                            xv,,
and again we have a geometrically obvious economic interpretation.

Theorem 19.10 (Mutual fund theorem) Given assumptions as above, the
following hold:
      1. The optimal portfolio consists of an allocation between two fied mutual
         funds w0 and w f .
      2. The fund w0 consists only of the risk free asset.
      3. The fund w f consists only of the risky assets, and is given by

                                                    - re).
                                       wf = ~ - ' ( a
                                        EXERCISES                                    297


   4. At each t the optimal relative allocation of wealth between the funds is
       given by

                                                   Vz(t, X(t))
                                 'f(t) =    - ~ ( t ) ~ , (~t (, t )' )
                                 /JO(t)= 1 - f' (t).

    Note that this result is not a corollary of the corresponding result from the
previous section. Firstly it was an essential ingredient in the previous results
that the volatility matrix of the price vector was invertible. In the case with a
riskless asset the volatility matrix for the entire price vector (B, S1,. . . , S,) is of
course degenerate, since its first row (having subscript zero) is identically equal
to zero. Secondly, even if one assumes the results from the previous section, i.e.
that the optimal portfolio is built up from two fixed portfolios, it is not at all
obvious that one of these basis portfolios can be chosen so as to consist of the
risk free asset alone.

19.8 Exercises



                      .[lT
Exercise 19.1 Solve the problem of maximizing logarithmic utility




given the usual wealth dynamics
                                 e-'.   In,,)      + , ( ., ,
                                                dt ) K
                                                                  I   ,


                  dXt = Xt [U:T       + u: a] dt - ct dt + u1U XdWt
                                                                ~ ,

and the usual control constraints

                                         ct 2 0,     vt 1 0 ,
                                 u;+u; =1,           Vt10.

Exercise 19.2 A Bernoulli equation is an ODE of the form

                                 xt   + Atxt + Btx," = 0,
where A and B are deterministic functions of time and a is a constant.
   If a = 1 this is a linear equation, and can thus easily be solved. Now consider
the case a # 1 and introduce the new variable y by

                                         yt = X:-?

Show that y satisfies the linear equation

                         $t   + (1- a)Atyt + (1 - a)Bt = 0.
298                     STOCHASTIC OPTIMAL CONTROL


Exercise 19.3 Use the previous exercise in order to solve (19.52)-(19.53)
explicitly.
Exercise 19.4 The following example is taken from Bjork et al. (1987). We
consider a consumption problem without risky investments, but with stochastic
prices for various consumption goods.

       N = the number of consumption goods,
  pi(t) = price, at t, of good i (measured as dollars per unit per unit time),


   ci(t) = rate of consumption of good i,
   c(t) = [el(t), . - . cN(t)ll,
                                                                    1       *
  X(t) = wealth process,                                                1
                                                                                     '
        r = short rate of interest,
       T = time horizon.
                                                                        .       3'




We assume that the consumption price processes satisfy



where Wl , . . . , W,, are independent. The X-dynamics become

                                   dX = r X d t - c'pdt,
and the objective is to maximize expected discounted utility, as measured by


                                   E   [lT ~ ( tQ), dt] ,

where T is the time of ruin, i.e.




      (a) Denote the optimal value function by V(t,x,p) and write down the
          relevant HJB equation (including boundary conditions for t = T and
          x = 0).
      (b) Assume that F is of the form
1                                        EXERCISES                                   299



I              where 6 > 0,O < ai < 1 and a = C? a+< 1. Show that the optimal
               value function and the optimal control-have the structure

                                   V(t,x,p) = e-st xa a-aG ( t , ~ ) ,
                                               x ai
                                   4,x,P) = - Pi a
                                                  - -A(p)'G(t, P),
    I

               where G solves the nonlinear equation




                If you find this too hard, then study the simpler case when N = 1.
            (c) Now assume that the price dynamics are given by GBM, i.e.
        k



               Try to solve the G-equation above by making the ansatz



               Warning: This becomes somewhat messy.
    Exercise 19.5 Consider as before state process dynamics



    and the usual restrictions for u. Our entire derivation of the HJB equation has
    so far been based on the fact that the objective function is of the form




    Sometimes it is natural to consider other criteria, like the expected exponential
    utility criterion




    For this case we define the optimal value function as the supremum of
300                     STOCHASTIC OPTIMAL CONTROL


Follow the reasoning in Section 19.3 in order to show that the HJB equation f o ~
the expected exponential utility criterion is given by

           {$(.,        + s, {V(t,x)F(t, x, u) + AUV(t,x)}= 0,
                                                        V(T, x) = e @ ( ~ ) .

Exercise 19.6 Solve the problem to minimize




given the scalar dynamics



where the control u is scalar and there are no control constraints.
  Hint: Make the ansatz



Exercise 19.7 Study the general linear-exponential-qudratic control problem
of minimizing




given the dynamics

                          dXt ={A&+ But) d t + C d W t .

Exercise 19.8 The object of this exercise is to connect optimal control to
martingale theory. Consider therefore a general control problem of minimizing




given the dynamics

                      dXt = P (t, Xt, ut) dt   + (t, Xt, ~ t dWt
                                                 0            ) ,               .i


and the constraints
                                     u(t, x) E U.
                                     NOTES


Now, for any control law u, define the total cost process C(t; u ) by




i.e.
                  C(t; U) =
                              6'F ( s ,X,U, us)ds   + J(t, X,U,u).
Use the HJB equation in order to prove the following claims:
   (a) If u is an arbitrary control law, then C is a submartingale.
   (b) If u is optimal, then C is a martingale.

19.9 Notes
Standard references on optimal control are Fleming and Rishel(1975) and Krylov
(1980). A very clear exposition can be found in Bksendal(1995). For more recent
work, using viscosity solutions, see Fleming and Soner (1993). The classical
papers on optimal consumption are Merton (1969) and Merton (1971). See also
Karatzas et al. (1987), and the survey paper DufEe (1994). For optimal trading
under constraints, and its relation to derivative pricing see Cvitanib (1997) and
references therein. See also the book by Korn (1997). There is also a "martingale
approach" to optimal investment problems. See Cox and Huang (1989) for the
complete market case. Basic papers on the incomplete market case are He and
Pearson (1991), Karatzas et al. (1991), and Krarnkov and Schachermayer (1999).
A very readable overview of the incomplete market case, containing an extensive
bibliography, is given in Schachermayer (2002).
                    BONDS AND INTEREST RATES

20.1 Zero Coupon Bonds
In this chapter, we will begin to study the particular problems which appear
when we try to apply arbitrage theory to the bond market. The primary objects
of investigation are zero coupon bonds, also known as p u r e discount bonds,
of various maturities. All payments are assumed to be made in a fixed currency
which, for convenience, we choose to be US dollars.
Definition 20.1 A zero coupon bond with maturity d a t e T, also called
a T-bond, is a contract which guarantees the holder 1 dollar to be paid on the
date T. The price at time t of a bond with maturity date T is denoted by p(t, T).
    The convention that the payment at the time of maturity, known as the
principal value or face value, equals one is made for computational con-
venience. Coupon bonds, which give the owner a payment stream during the
interval [0, T] are treated below. These instruments have the common property,
that they provide the owner with a deterministic cash flow, and for this reason
they are also known as fixed income instruments.
    We now make an assumption to guarantee the existence of a sufficiently rich
and regular bond market.
Assumption 20.1.1 We assume the following:
      There exists a (frtctionless) market for T-bonds for every T > 0.
      The relation p(t, t) = 1 holds for all t.
      For each f i e d t, the bond price p(t,T) is differentiable w.r.t. time of
      maturity T.
Note that the relation p(t, t) = 1 above is necessary in order to avoid arbitrage.
The bond price p(t, T ) is thus a stochastic object with two variables, t and T,
and, for each outcome in the underlying sample space, the dependence upon
these variables is very different.
      For a fked value of t, p(t, T) is a function of T. This function provides the
      prices, at the fixed time t, for bonds of all possible maturities. The graph
      of this function is called "the bond price curve at t", or "the term structure
      at t". Typically it will be a very smooth graph, i.e. for each t, p(t, T ) will
      be differentiable w.r.t. T. The smoothness property is in fact a part of our
      assumptions above, but this is mainly for convenience. All models to be
      considered below will automatically produce smooth bond price curves.
      For a fixed maturity T, p(t, T) (as a function oft) will be a scalar stochastic
      process. This process gives the prices, at different times, of the bond with
                                INTEREST RATES                                   303


      fixed maturity T, and the trajectory will typically be very irregular (like a
      Wiener process).
    We thus see that (our picture of) the bond market is different from any other
market that we have considered so far, in the sense that the bond market contains
an infinite number of assets (one bond type for each time of maturity). The basic
goal in interest rate theory is roughly that of investigating the relations between
all these different bonds. Somewhat more precisely we may pose the following
general problems, to be studied below:
      What is a reasonable model for the bond market above?
    a Which relations must hold between the price processes for bonds of different
      maturities, in order to guarantee an arbitrage free bond market?
    a Is it possible to derive arbitrage free bond prices from a specification of the
      dynamics of the short rate of interest?
      Given a model for the bond market, how do you compute prices of interest
      rate derivatives, such as a European call option on an underlying bond?

20.2 Interest R a t e s
20.2.1 Definitions
Given the bond market above, we may now define a number of interest rates,
and the basic construction is as follows. Suppose that we are standing at time t,
and let us ~IXtwo other points in time, S and T, with t < S < T. The immediate
project is to write a contract at time t which allows us to make an investment of
one (dollar) at time S, and to have a deterministic rate of return, determined
at the contract time t, over the interval [S,TI. This can easily be achieved as
follows:
    1. At time t we sell one S-bond. This will give us p(t, S ) dollars.
    2. We use this income to buy exactly p(t, S)/p(t,T) T-bonds. Thus our net
       investment at time t equals zero.
    3. At time S the S-bond matures, so we are obliged to pay out one dollar.
    4. At time T the T-bonds mature at one dollar a piece, so we will receive the
       amount p(t, S)/p(t, T ) dollars.
    5. The net effect of all this is that, based on a contract at t, an investment
       of one dollar at time S has yielded p(t, S)/p(t, T ) dollars at time T.
    6. Thus, at time t, we have made a contract guaranteeing a riskless rate of
       interest over the future interval [S,TI. Such an interest rate is called a
       forward rate.
    We now go on to compute the relevant interest rates implied by the con-
struction above. We will use two (out of many possible) ways of quoting forward
rates, namely as continuously compounded rates or as simple rates.
    The simple forward rate (or LIBOR rate) L, is the solution to the equation
304                      BONDS AND INTEREST RATES


                                                                                      '
whereas the continuously compounded forward rate R is the solution to the
eauation


The simple rate notation is the one used in the market, whereas the continuously
compounded notation is used in theoretical contexts. They are of course logically
equivalent, and the formal definitions are as follows.
Definition 20.2
      1. The simple forward rate for [S,TI contracted at t, henceforth referred
         to as the LIBOR forward mte, is defined as




      2. The simple spot rate for [S,T], henceforth referred to as the LIBOR
         spot rate, is defined as




      3. The continuously compounded forward rate for [S,TI contracted at t
         is defined as
                            R(t; S,T ) = - 1% P(t, T)- 1% P(t, S)
                                                   T- S
      4. The continuously compounded spot rate, R(S, T), for the period
         [S, TI is defined as
                                   R(S, T) = - 1% P(S, T )
                                                   T- S '
      5. The instantaneous forward rate with maturity T, contracted at t,
         is defined by


      6. The instantaneous short rate at time t is defined by.



     We note that spot rates are forward rates where the time of contracting
coincides with the start of the interval over which the interest rate is effective,
i.e. t = S. The instantaneous forward rate, which will be of great importance
below, is the limit of the continuously compounded forward rate when S + T.
rt can thus be interpreted as the riskless rate of interest, contracted at t , over
                                +
the infinitesimal interval [T,T dT].
     We now go on to define the money account process B.
                                   INTEREST RATES


    Definition 20.3 The money account process is defined by




                                  { d ~ ( t =r(t)B(t)
                                            )         dt,
                                     B(0) = 1.
        The interpretation of the money account is the same as before, i.e. you may
    think of it as describing a bank with a stochastic short rate of interest. It can
    also be shown (see below) that investing in the money account is equivalent to
I
    investing in a self-financing "rolling over" trading strategy, which at each time t
5                                                                                 +
    consists entirely of "just maturing" bonds, i.e. bonds which will mature at t dt.
I       As an immediate consequence of the definitions we have the following useful
    formulas.
    Lemma 20.4 For t 5 s 5 T we have




       If we wish to make a model for the bond market, it is obvious that this can
    be done in many different ways.
       a We may specify the dynamics of the short rate (and then perhaps try to
         derive bond prices using arbitrage arguments).
       a We may directly specify the dynamics of all possible bonds.
       a We may specify the dynamics of all possible forward rates, and then use
         Lemma 20.4 in order to obtain bond prices.
i       All these approaches are of course related to each other, and we now go on to
    present a small toolbox^' of results to facilitate the analysis below. These results
1   will not be used until Chapter 23, and the proofs are somewhat technical, so the
    next two subsections can be omitted at a first reading.

1   20.2.2 Relations between d f (t, T), dp(t, T), and dr(t)
    We will consider dynamics of the following form:
    Short rate dynamics
306                         BONDS AND INTEREST RATES


Bond price dynamics



Forward rate dynamics

                           df (t, T ) = a(t, T) dt   + a(t, T) dW(t).         (20.3)

     The Wiener process W is allowed to be vector valued, in which case the volat-
ilities v(t, T) and a(t, T) are row vectors. The processes a(t) and b(t) are scalar
adapted processes, whereas m(t, T), v(t, T), a(t, T), and u(t, T) are adapted
processes parameterized by time of maturity T. The interpretation of the bond
price equation (20.2) and the forward rate equation(20.3) is that these are scalar
stochastic differential equations (in the t-variable) for each fixed time of maturity
T. Thus (20.2) and (20.3) are both infinite dimensional systems of SDEs.
     We will study the formal relations which must hold between bond prices and
interest rates, and to this end we need a number of technical assumptions, which
we collect below in an "operational" manner.
Assumption 20.2.1
      1. For each fied w , t all the objects m(t,T), v(t,T), a(t,T) and u(t,T) are
         assumed to be wntinuously di.@erentiablein the T-variable. This partial
         T-derivative is sometimes denoted by mT(t, T), etc.
      2. All processes are assumed to be regular enough to allow us to differentiate
         under the integral sign as well as to interchange the order of integration.
    The main result is as follows. Note that the results below hold, regardless
of the measure under consideration, and in particular we do not assume that
markets are free of arbitrage.
Proposition 20.5
      1. If p(t, T) satisfies (20.2), then for the fonuard rate dynamics we have

                             df (t, T) = a(t, T) dt   + a(t, T) dW(t),
         where a and a are given by

                                               , . ~ ( tT)
                             a(t, T )= U T ( ~T)         , - mT(t, T),
                             u(t,T) = -vT(~,T).

      2. I f f (t, T) satisfies (20.3) then the short rate satisfies



         where
                                     a(t) = fT(t, t)   + ~ ( tt),,
                                     b(t) = o(t, t).
                                  INTEREST RATES


   3. If f (t, T ) satisfies (20.3) then p(t, T) satisfies

      dp(t, T)= p(t, T ) {r(t)   + A(t, T) + 4IIS(t, T)l12) dt + ~ ( tT)S(t,
                                                                       ,     T) dW(t),

      where 11   - 11 denotes the Euclidean norm, and
                                                        T
                                     A(t, T ) = -           a(t, s) ds,

                                 {    S(t,T)= - f u ( t , s)ds.
                                                                                               (20.6)


Proof The first part of the proposition is left to the reader (see the exercises).
  For the second part we integrate the forward rate dynamics to get

                  r(t) = f (0, t) +            t)       +   /d t
                                                                   ~ ( 8t), dW(s)-             (20.7)

Now we can write

                          a(s,t) = a ( s ,S)
                                              1"
                                               +        ~ T ( su)
                                                                , du,
                                                                                     r   ' I


                         U(S, t) = U(S, S)   +l         UT(S,u) du,

and, inserting this into (20.7), we have

              r(t) = f(0, t)   + [a(s,s)ds + [[cxT(s,u) duds
                       +&t     u(s,s)dWs+       Jot     lU~(s,u)dudWs.

Changing the order of integration and identifying terms we obtain the result.
   For the proof of the third part we give a slightly heuristic argument. The full
formal proof, see Heath et al. (1987), is an integrated version of the proof given
here, but the infinitesimal version below is (hopefully) easier to understand.
Using the definition of the forward rates we may write

                                   p(t, T ) = eY(t9T;!,                                    (20.8)

where Y is given by
                               Y(t,T) =    -1      T
                                                       f(t,s)ds.                           (20.9)

From the It6 formula we then obtain the bond dynamics as

                 dp(t, T) = ~ ( tT), dY(t, T) + +p(t,T) ( d ~ ( tT, ) ) ~ ,              (20.10)
    308                      BONDS AND INTEREST RATES



I
    and it remains to compute dY (t, T). We have




    and the problem is that in the integral the t-variable occurs in two places: as the
    lower limit of integration, and in the integrand f ( t ,s). This is a situation that is
    not covered by the standard It6 formula, but it is easy to guess the answer. The
    t appearing as the lower limit of integration should give rise to the term

                                   a
                                   at   (dT f(t,,)dS) dt.

    Furthermore, since the stochastic differential is a linear operation, we should be
    allowed to move it inside the integral, thus providing us with the term

                                        (lT d f (4 8) ds) -

    We have therefore arrived at                                                              1

    which, using the fundamental theorem of integral calculus, as well as the forward
    rate dynamics, gives us




    We now exchange dt and dWt with ds and recognize f (t, t) as the short rate r(t),
    thus obtaining
                       dY(t,T) = r(t)dt +A(t,T)dt        + S(t,T)dWt,
    with A and S as above. We therefore have

                                (d~(t,        = IIS(t, T)1I2dt,
    and, substituting all this into (20.10), we obtain our desired result.

    20.2.3 An Alternative View of the Money Account
    The object of this subsection is to show (heuristically) that the risk free asset B
    can in fact be replicated by a self-financing strategy, defined by "rolling over"
    just-maturing bonds. This is a "folklore" result, which is very easy to prove in
    discrete time, but surprisingly tricky in a continuous time framework.
tI;i                        COUPON BONDS, SWAPS, AND YIELDS                              309


    k
    4       Let us consider a self-financing portfolio which at each time t consists entirely
        of bonds maturing x units of time later (where we think of x as a small number).
                                                                                +
        At time t the portfolio thus consists only of bonds with maturity t x, so the
        value dynamics for this portfolio is given by




                                                                          +
        where the constant 1 indicates that the weight of the t x-bond in the portfolio
        equals one. We now want to study the behavior of this equation as x tends to
1       zero, and to this end we use Proposition 20.5 to obtain



I
j Letting x tend to zero, (20.6) gives us
                                                      1   .
                                        lim A(t,t + x) = 0 ,
                                        x+o
                                        lim S(t, t
                                        x-0
                                                     + x) = 0.
        Furthermore we have
                                                                 'C
                                        limp(t,t +x) = 1,
                                        x-0
        and, substituting all this into eqn (20.11), we obtain the value dynamics

                                       dV(t) = r(t)V(t) dt,                          (20.12)

  which we recognize as the dynamics of the money account.
      The argument thus presented is of course only hewistical, and it requires
  some hard work to make it precise. Note, for example, that the rolling over port-
  folio above does not fall into the general framework of self-financing portfolios,
  developed earlier. The problem is that, although at each time t , the portfolio
                                                                      +
  only consists of one particular bond (maturing at t x), over an arbitrary short
j time interval, the portfolio will use an infinite number of different bonds. In order
  to handle such a situation, we need to extend the portfolio concept to include
  measure valued portfolios. This is done in Bjork et al. (1997a), and in Bjork
  et al. (1997b) the argument above is made precise.

        20.3 Coupon Bonds, Swaps, and Yields
        In most bond markets, there are only a relative small number of zero coupon
        bonds traded actively. The maturities for these are generally short (typically
        between half a year and two years), whereas most bonds with a longer time to
        maturity are coupon bearing. Despite this empirical fact we will still assume the
        existence of a market for all possible pure discount bonds, and we now go on to
        introduce and price coupon bonds in terms of zero coupon bonds.
      310                      BONDS AND INTEREST RATES


     20.3.1 Fixed Coupon Bonds
     The simplest coupon bond is the fixed coupon bond. This is a bond which,
     at some intermediary points in time, will provide predetermined payments
     (coupons) to the holder of the bond. The formal description is as follows:
            Fix a number of dates, i.e. points in time, To,,..., Tn.Here To is interpreted
            as the emission date of the bond, whereas TI, . . . , Tnare the coupon dates.
            At time Ti, i = 1,.. . , n, the owner of the bond receives the deterministic
            coupon 4.
            At time Tn the owner receives the face value K.
         We now go on to compute the price of this bond, and it is obvious that the
     coupon bond can be replicated by holding a portfolio of zero coupon bonds with
     maturities Ti, i = 1,.. . , n. More precisely we will hold 4 zero coupon bonds of
                                           +
    maturity T,, i = 1,. . . , n - 1, and K c, bonds with maturity T,, so the price,
    p(t), a t a time t < TI, of the coupon bond is given by




        Very often the coupons are determined in terms of return, rather than in
    monetary (e.g. dollar) terms. The return for the ith coupon is typically quoted
    as a simple rate acting on the face value K , over the period [T,_l,Ti]. Thus, if,
    for example, the ith coupon has a return equal to ri, and the face value is K ,
    this means that
                                  ci = ri(T, - Ti-f)K.
    For a standardized coupon bond, the time intervals will be equally spaced, i.e.



    and the coupon rates rl, . . . , rn will be equal to a common coupon rate r. The
    price p(t) of such a bond will, for t 5 TI, be given by




    20.3.2 Floating Rate Bonds
    There are various coupon bonds for which the value of the coupon is not fixed
    at the time the bond is issued, but rather reset for every coupon period. Most
    often the resetting is determined by some financial benchmark, like a market
    interest rate, but there are also bonds for which the coupon is benchmarked
    against a nonfinancial index.
I
                    COUPON BONDS, SWAPS, AND YIELDS                               311


    As an example (to be used in the context of swaps below), we will confine
ourselves to discussing one of the simplest floating rate bonds , where the coupon
rate ri is set to the spot LIBOR rate L(Ti-1, Ti). Thus


and we note that L(Ti-1, Ti) is determined already at time Ti-l, but that ci is
not delivered until at time Ti. We now go on to compute the value of this bond
at some time t < To, in the case when the coupon dates are equally spaced,
with Ti - Ti-1 = 6, and to this end we study the individual coupon Q. Without
loss of generality we may assume that K = 1, and inserting the definition of the
LIBOR rate (Definition 20.2) we have



The value at t, of the term -1 (paid out at T,),is of course equal to

                                      -P@, Ti),
and it remains to compute the value of the term l l ~ ( T ~ _ ~ , T which
                                                                      i ) , is paid
out at Ti.
   This is, however, easily done through the following argument:
i a Buy, at time t, one T,-l-bond. This will cost p(t, Ti-1).
   a At time Ti-1 you will receive the amount 1.                              !
MJ
   a Invest this unit amount in Ti-bonds. This will give you exactly l/p(T,-l, Ti)
      bonds.
   a At T, the bonds will mature, each at the face value 1. Thus, at time Ti,
      you will obtain the amount
                                            1
                                       p(Ti-1, Ti) '
This argument shows that it is possible to replicate the cash flow above, using
a self-financing bond strategy, to the initial cost p(t, Ti-1). Thus the value at t,
of obtaining l l ~ ( T i _ ~ , at
                               T ~Ti,
                                   ) is given by p(t, Ti-1), and the value at t of the
coupon ci is
                                  ~ ( tTi-1)
                                        ,    - ~ ( tTi).
                                                     ,
    Summing up all the terms we finally obtain the following valuation formula
for the floating rate bond:




In particular we see that if t = To, then p(To) = 1. The reason for this (perhaps
surprisingly easy) formula is of course that the entire floating rate bond can be
replicated through a self-financing portfolio (see the exercises).
312                      BONDS AND INTEREST RATES


20.3.3 Interest Rate Swaps
In this section we will discuss the simplest of all interest rate derivatives, the
interest rate swap. This is basically a scheme where you exchange a payment
stream at a fixed rate of interest, known as the swap rate, for a payment
stream at a floating rate (typically a LIBOR rate).
    There are many versions of interest rate swaps, and we will study the forward
swap settled in arrears, which is defined as follows. We denote the principal
by K , and the swap rate by R. By assumption we have a number of equally
spaced dates To,. . . , Tn, and payment occurs at the dates TI,. . . , Tn (not at To).
If you swap a fixed rate for a floating rate (in this case the LIBOR spot rate),
then, at time Ti, you will receive the amount


which is exactly Kci, where q is the ith coupon for the floating rate bond in the
previous section. At Ti you will pay the amount
                                           KbR.
The net cash flow at Ti is thus given by

                                      [L(Ti-1, Ti) - R],
and using our results from the floating rate bond, we can compute the value at
t < To of this cash flow as
                                "k'    i   '   .,:
                         ~ p ( tT,-I)
                                 ,    - K ( 1 + 6 ~ ) p ( tT,).
                                                            ,
The total value ll (t), at t, of the swap is thus given by




and we can simplify this to obtain the following result.
Proposition 20.6 The price, for t < To, of the swap above is given by




where




    The remaining question is how the swap rate R is determined. By definition
it is chosen such that the value of the swap equals zero at the time when the
contract is made. We have the following easy result.
                    COUPON BONDS, SWAPS, AND YIELDS                              313


Proposition 20.7 If, by convention, we assume that the contract is written at
t = 0, the swap rate is given by



In the case that To= 0 this formula reduces to




20.3.4 Yield and Duration
Consider a zero coupon T-bond with market price p(t, T). We now look for the
bond's "internal rate of interest", i.e. the constant short rate of interest which
will give the same value to this bond as the value given by the market. Denoting
this value of the short rate by y, we thus want to solve the equation



where the factor 1 indicates the face value of the bond. We are thus led to the
following definition.
Definition 20.8 The continuously compounded zero coupon yield, y(t, T), is
given by


For a &ed t, the function T c--, y(t,T) is called the (zero coupon) yield curve.
    We note that the yield y(t, T ) is nothing more than the spot rate for the
interval [t,TI. Now let us consider a fixed coupon bond of the form discussed in
Section 20.3.1 where, for simplicity of notation, we include the face value in the
coupon c,. We denote its market value at t by p(t). In the same spirit as above
we now look for its internal rate of interest, i.e. the constant value of the short
rate, which will give the market value of the coupon bond.
Definition 20.9 The yield to maturity, y(t,T), of a &ed coupon bond at
time t , with market price p, and payments Q at Ti for i = 1,. . . , n, is defined as
the value of y which solves the equation




   An important concept in bond portfolio management is the "Macaulay
duration7'. Without loss of generality we may assume that t = 0.
314                      BONDS AND INTEREST RATES


Definition 20.10 For the @ed coupon bond above, with price p at t = 0, and
yield to maturity y, the duration, D, is defined as



    The duration is thus a weighted average of the coupon dates of the bond,
where the discounted values of the coupon payments are used as weights, and it
will in a sense provide you with the "mean time to coupon payment". As such it
is an important concept, and it also acts a measure of the sensitivity of the bond
price w.r.t. changes in the yield. This is shown by the following obvious result.
Proposition 20.11 With notation as above we have




    Thus we see that duration is essentially for bonds (w.r.t. yield) what delta (see
Section 9.2) is for derivatives (w.r.t. the underlying price). The bond equivalent
of the gamma is convexity, which is defined as




20.4 Exercises
Exercise 20.1 A forward r a t e agreement (FRA) is a contract, by convention
entered into at t = 0, where the parties (a lender and a borrower) agree to let
a certain interest rate, R*, act on a prespecified principal, K , over some future
period [S,TI. Assuming that the interest rate is continuously compounded, the
cash flow to the lender is, by definition, given as follows:
      At time S: - K.
      At time T: ~ e ~ * ( ~ - ~ ) .
The cash flow to the borrower is of course the negative of that to the lender.
      (a) Compute for any time t < S, the value, II (t), of the cash flow above in
          terms of zero coupon bond prices.
      (b) Show that in order for the value of the FRA to equal zero at t = 0, the
          rate R* has to equal the forward rate R(0; S, T) (compare this result to
          the discussion leading to the definition of forward rates).
Exercise 20.2 Prove the first part of Proposition 20.5.
   Hint: Apply the It6 formula to the process log p(t, T), write this in integrated
form and differentiate with respect to T.
Exercise 20.3 Consider a coupon bond, starting at To, with face value K,
coupon payments at TI, . . . , T, and a fixed coupon rate r. Determine the coupon
rate r, such that the price of the bond, at To, equals its face value.
                                          NOTES                                    315




I    Exercise 20.4 Derive the pricing formula (20.15) directly, by constructing a
     self-financing portfolio which replicates the cash flow of the floating rate bond.
     Exercise 20.5 Let {y(O,T); T 2 0) denote the zero coupon yield curve at
     t = 0. Assume that, apart from the zero coupon bonds, we also have exactly
     one fixed coupon bond for every maturity T. We make no particular assump
     tions about the coupon bonds, apart from the fact that all coupons are positive,
     and we denote the yield to maturity, again at time t = 0, for the coupon bond
     with maturity T, by yM(0, T). We now have three curves to consider: the for-
     ward rate curve f (0,T), the zero coupon yield curve y(0, T), and the coupon
                       T). The object of this exercise is to see how these curves are



                                                  , + T 7.
                                                        ~ Y ( O T)
                                                                ,
                                 f (0, T) = ~ ( 0T)
        (b) Assume that the zero coupon yield cuve is an increasing function of T
            Show that this implies the inequalities

                                YM (0, T) 5 y(O, T ) 5 f (0, T), VT,


I1
       iU   (with the opposite inequalities holding if the zero coupon yield curve i!
            decreasing). Give a verbal economic explanation of the inequalities.
     Exercise 20.6 Prove Proposition 20.11.
     Exercise 20.7 Consider a consol bond, i.e. a bond which will forever pay on1
     unit of cash at t = 1,2,.. . . Suppose that the market yield y is constant for al

        (a) Compute the price, at t = 0, of the consol.
        (b) Derive a formula (in terms of an infinite series) for the duration of t h

       ' (c) Use (a) and Proposition 20.11 in order to compute an analytical formul
            for the duration.
     4 (d) Compute the convexity of the consol.
                             J

                                         21
                          SHORT RATE MODELS

21.1 Generalities
In this chapter, we turn to the problem of how to model an arbitrage free family
of zero coupon bond price processes {p(.,T); T > 0).
    Since, at least intuitively, the price, p(t,T), should in some sense depend
upon the behavior of the short rate of interest over the interval [t,TI, a natural
starting point is to give an a priori specification of the dynamics of the short rate
of interest. This has in fact been the "classical" approach to interest rate theory,
so let us model the short rate, under the objective probability measure P, as the
solution of an SDE of the form



The short rate of interest is the only object given a priori, so the only exogenously
given asset is the money account, with price process B defined by the dynamics

                                 dB(t) = r(t)B(t) dt.                         (21.2)

As usual we interpret this as a model of a bank with the stochastic short rate
of interest r. The dynamics of B can then be interpreted as the dynamics of
the value of a bank account. To be quite clear let us formulate the above as a
formalized assumption.
Assumption 21.1.1 W e assume the existence of one exogenously given (locally
risk free) asset. The price, B, of this asset has dynamics given by eqn (21.2),
where the dynamics of r , under the objective probability measure P, are given by
eqn (21.1).
    As in the previous chapter, we make an assumption to guarantee the existence
of a sufficiently rich bond market.
Assumption 21.1.2 W e assume that there exists a market for zero coupon
T-bonds for every value of T .
   We thus assume that our market contains all possible bonds (plus, of course,
the risk free asset above). Consequently, it is a market containing an infinite
number of assets, but we again stress the fact that only the risk free asset is
exogenously given. In other words, in this model the risk free asset is considered
as the underlying asset whereas all bonds are regarded as derivatives of the
"underlying" short rate r . Our main goal is broadly to investigate the relationship
which must hold in an arbitrage free market between the price processes of bonds
                                GENERALITIES                                   317


with diierent maturities. As a second step we also want to obtain arbitrage free
prices for other interest rate derivatives such as bond options and interest rate
swaps.
    Since we view bonds as interest rate derivatives it is natural to ask whether
the bond prices are uniquely determined by the given T dynamics in (21.1) and
the condition that the bond market shall be free of arbitrage. This question, and
its answer, are fundamental.


                                 Quest ion:
    rx
              Are bond prices uniquely determined
d
R            by the P-dynamics of the short rate r?



L



                                 Na!1
                                  Answer:



    For the reader who has studied Chapter 15, this negative result should be
fairly obvious. The arguments below are parallel to those of Section 15.2, and
the results are in fact special cases of the general results in Section 15.4. If
you have already studied these sections you can thus browse quickly through
the text until the term structure equation (21.2). In order to keep this part of
the book self-contained, and since the discussion is so important, we will (with
some apologies) give the full argument.
    Let us start by viewing the bond market in the light of the meta-
theorem 8.3.1. We see that in the present situation the number M of exogenously
given traded assets excluding the risk free asset equals zero. The number R of
random sources on the other hand equals one (we have one driving Wiener pro-
cess). From the meta-theorem we may thus expect that the exogenously given
market is arbitrage free but not complete. The lack of completeness is quite clear:
since the only exogenously given asset is the risk free one we have no possibility
of forming interesting portfolios. The only thing we can do on the a priori given
market is simply to invest our initial capital in the bank and then sit down and
wait while the portfolio value evolves according to the dynamics (21.2). It is
thus impossible to replicate an interesting derivative, even such a simple one as
a T-bond.
    Another way of seeing this problem appears if we try to price a certain T-bond
using the technique used in Section 7.3. In order to imitate the old argument we
would assume that the price of a certain bond is of the form F(t, r(t)). Then we
                            ,,SHORT RATE MODELS


would like to form a risk free portfolio based on this bond and on the underlying
asset. The rate of return of this risk free portfolio would then, by an arbitrage
argument, have to equal the short rate of interest, thus giving us some kind
of equation for the determination of the function F. Now, in the Black-Scholes
model the underlying asset was the stock S, and at first glance this would corres-
pond to r in the present situation. Here, however, we have the major difference
between the Black-Scholes model and our present model. The short rate of
interest r is not the price of a traded asset, i.e. there is no asset on the market
whose price process is given by r. Thus it is meaningless to form a portfolio
"based on r". Since there sometimes is a lot of confusion on this point let us
elaborate somewhat. We observe then that the English word "price" can be used
in two related but different ways.
    The first way occurs in everyday (informal) speech, and in this context it
is not unusual (or unreasonable) to say that the short rate of interest reflects
the price of borrowing money in the bank. In particular we often say that it is
expensive to borrow money if the rate of interest is high, and cheap when the
rate of interest is low.
    The second (formalized) use of the word "price" occurs when we are dealing
with price systems in the context of, for example, general equilibrium theory. In
this setting the word "price" has a much more precise and technical meaning than
in everyday language. Firstly a price is now measured in a unit like, say, pounds
sterling. The short rate of interest, on the contrary, is measured in the unit
(time)-', though for numerical reasons it is sometimes given as a precentage.
Secondly the price of an asset tells you how many pounds sterling you have to
pay for one unit of the asset in question. If, say, the price of ACME INC. stock
is 230 pounds this means that if you pay 230 pounds then you will obtain one
share in ACME INC. If, on the other hand, the short rate of interest is 11%,
this does not mean that you can pay 11 (units of what?) in order to obtain one
unit of some asset (what would that be?).
    This does not at all imply that the everyday interpretation of the interest rate
as "the price of borrowing money" is wrong. This aspect of the short rate already
appears in fact in the equation, d B = r B dt, for the money account, where it is
obvious that if r is high, then our debt to the bank grows at a high rate.
    When we use the word "price" in this text it is exclusively as in the second
formalized meaning above, and a sloppy usage will easily lead to nonsense and
chaos.
    To sum up:

      The price of a particular bond will not be completely determined by the
      specification (21.1) of the r-dynamics and the requirement that the bond
      market is free of arbitrage.
      The reason for this fact is that arbitrage pricing is always a case of pricing
      a derivative in terms of the price of some underlying assets. In our market
      we do not have sufficiently many underlying assets.
                           THE TERM STRUCTURE EQUATION                                   319


    We thus fail to determine a unique price of a particular bond. Fortunately this
    (perhaps disappointing) fact does not mean that bond prices can take any form
    whatsoever. On the contrary we have the following basic intuition.
 Idea 21.1.1
       Prices of bonds with different maturities will have to satisfy certain
       internal consistency relations in order to avoid arbitrage possibilities
       on the bond market.
       If we take the price of o n e particular "benchmark" bond as given then
       the prices of all other bonds (with maturity prior to the benchmark) will
,.     be uniquely determined in t e r m s of the price of the benchmark bond (and
       the r-dynamics).
1:
    This fact is in complete agreement with the metetheorem, since in the a priori
 given market consisting of one benchmark bond plus the risk free asset we will
 have R = M = 1 thus guaranteeing completeness.
    21.2 T h e T e r m Structure Equation
    To make the ideas presented in the previous section more concrete we now begin
    our formal treatment.
    Assumption 21.2.1 W e assume that there is a market for T-bonds for every
    choice of Tand that the market is arbitrage free. W e assume jbrthermore that,
    for every T , the price of a T-bond has the form


    where F is a smooth function of three real variables.
        Conceptually it is perhaps easiest to think of F as a function of only two
    variables, namely r and t, whereas T is regarded as a parameter. Sometimes we
    will therefore write F T ( t , r ) instead of F ( t , r ;T ) . The main problem now is to
    find out what F T may look like on an arbitrage free market.
        Just as in the case of stock derivatives we have a simple boundary condition.
    At the time of maturity a T-bond is of course worth exactly 1 pound, so we have
    the relation
                                    F ( T , r ; T ) = 1, forallr.                      (21.4)
    Note that in the equation above the letter r denotes a real variable, while at
    the same time r is used as the name of the stochastic process for the short rate.
    To conform with our general notational principles we should really denote the
    stochastic process by a capital letter like R, and then denote an outcome of R
    by the letter r . Unfortunately the use of r as the name of the stochastic process
    seems to be so fixed that it cannot be changed. We will thus continue to use r
    a s a name both for the process and for a generic outcome of the process. This is
    somewhat sloppy, but we hope that the meaning will be clear from the context.
         In order to implement the ideas above we will now form a portfolio consisting
    of bonds having different times of maturity. We thus fix two times of maturity S
320                          SHORT RATE MODELS


and T. From Assumption 21.2.1 and the It6 formula we get the following price
dynamics for the T-bond, with corresponding equations for the S-bond.

                         dFT = F T a T dt   + FTnT dW,                     (21.5)
where, with subindices r and t denoting partial derivatives,




Denoting the relative portfolio by ( u s , uT)we have the following value dynamics
for our portfolio.


and inserting the differential from (21.5), as well as the corresponding equation
for the S-bond, gives us, after some reshuffling of terms,



Exactly as in Section 7.3 we now define our portfolio by the equations




With this portfolio the dw-term in (21.9) will vanish, so the value dynamics
reduce to
                                              +
                         dV = V { u T a ~ u s a s ) dt.               (21.12)
The system (21.10)-(21.11) can easily be solved as




and substituting this into (21.12) gives us




Using Proposition 7.6, the assumption of no arbitrage now implies that this
portfolio must have a rate of return equal to the short rate of interest. Thus we
have the condition
          aSaT - aTaS
                          = r ( t ) , for all t, with probability 1,
             UT - U S
or, written differently,




The interesting fact about eqn (21.17) is that on the left-hand side we have a
stochastic process which does not depend on the choice of T, whereas on the
right-hand side we have a process which does not depend on the choice of S.
The common quotient will thus not depend on the choice of either T or S, so we
have thus proved the following fundamental result.
Proposition 21.1 Assume that the bond market is free of arbitrage. Then there
exzsts a process X such that the relation



holds for all t and for every choice of maturity time T.
    Observe that the process X is universal in the sense that it is the same X
which occurs on the right-hand side of (21.18) regardless of the choice of T. Let
us now take a somewhat closer look at this process.
    In the numerator of (21.18) we have the term aT(t) - r(t). By eqn (21.5),
aT(t) is the local rate of return on the T-bond, whereas r is the rate of return
of the risk free asset. The difference crT(t) - r(t) is thus the risk premium of
the T-bond. It measures the excess rate of return for the risky T-bond over the
riskless rate of return which is required by the market in order to avoid arbitrage
possibilities. In the denominator of (21.18) we have uT( t ) ,i.e. the local volatility
of the T-bond.
    Thus we see that the process X has the dimension "risk premium per unit of
volatility". The process X is known as the market price of risk, and we can
paraphrase Proposition 21.1 by the following slogan:
      In a no arbitrage market all bonds will, regardless of maturity
      time, have the same market price of risk.
    Before we move on, a brief word of warning: the name "market price of risk" is
in some sense rather appealing and reasonable, but it is important to realize that
the market price of risk is not a price in the technical (general equilibrium) sense
reserved for the word "price" in the rest of this text. We do not measure X in
SEK, and X is not something which we pay in order to obtain some commodity.
Thus the usage of the word "price" in this context is that of informal everyday
language, and one should be careful not to overinterpret the words "market
price of risk" by assuming that properties holding for price processes in general
equilibrium theory also automatically hold for the process A.
    We may obtain even more information from eqn (21.18) by inserting our
earlier formulas (21.6)-(21.7) for a~ and UT. After some manipulation we then
obtain one of the most important equations in the theory of interest rates-the
    322                         SHORT RATE MODELS


    so called "term structure equation". Since this equation is so fundamental we
    formulate it as a separate result.
    Proposition 21.2 (Term structure equation) In an arbitrage free bond
    market, FT will satisfy the term structure equation

                        F             : + i u 2 F 2 -rFT = 0 ,
                        : + { p - Xu) F
                                                    F~(T,~
                                                         =)1.

        The term structure equation is obviously closely related to the Black-Scholes
    equation, but it is a more complicated object due to the appearance of the
i   market price of risk A. It follows from eqns (21.6), (21.7), and (21.18) that X is
    of the form X = A(t, r ) so the term structure equation is a standard PDE, but
I   the problem is that X is not determined within the model. In order to be able
    to solve the term structure equation we must specify X exogenously just as we
    have to specify p and a.
        Despite this problem it is not hard to obtain a Feynman-KaE representation
    of FT. This is done by fixing (t, r) and then using the process

                                { lsr(u)du) ~ ~ (r(s)).
                            exp -                   s ,

    If we apply the It6 formula to (21.20) and use the fact that F~satisfies the term
    structure equation then, by using exactly the same technique as in Section 5.5,
    we obtain the following stochastic representation formula.
    Proposition 21.3 (Risk neutral valuation) Bond prices are given by the
    formula p(t, T ) = F(t, r(t); T) where



    Here the martingale measure Q and the subscripts t, r denote that the expectation
    shall be taken given the following dynamics for the short rate:




I
,     The formula (21.21) has the usual natural economic interpretation, which is
    most easily seen if we write it as



~
I
    We see that the value of a T-bond at time t is given as the expected value of the
    final payoff of one pound, discounted to present value. The deflator used is the
                                  T
    natural one, namely exp{- S, r(s)ds), but we observe that the expectation is
                     THE TERM STRUCTURE EQUATION                              323


not to be taken using the underlying objective probability measure P. Instead we
must, as usual, use the martingale measure Q and we see that we have different
martingale measures for different choices of A.
    The main difference between the present situation and the Black-Scholes
setting is that in the Black-Scholes model the martingale measure is uniquely
determined. It can be shown (see Chapters 13 and 15) that the uniqueness of the
martingale measure is due to the fact that the Black-Scholes model is complete.
In the present case our exogenously given market is not complete, so bond prices
will not be uniquely determined by the given (P-)dynamics of the short rate r.
To express this fact more precisely, the various bond prices will be determined
partly by the P-dynamics of the short rate of interest, and partly by market
forces. The fact that there are different possible choices of X simply means that
there are different conceivable bond markets all of which are consistent with the
given r-dynamics. Precisely which set of bond price processes will be realized by
an actual market will depend on the relations between supply and demand for
bonds in this particular market, and these factors are in their turn determined by
such things as the forms of risk aversion possessed by the various agents on the
market. In particular this means that if we make an ad hoc choice of X (e.g. such
as X = 0) then we have implicitly made an assumption concerning the aggregate
risk aversion on the market.
    We can also turn the argument around and say that when the market has
determined the dynamics of one bond price process, say with maturity T, then
the market has indirectly specified X by eqn (21.18). When X is thus deter-
mined, all other bond prices will be determined by the term structure equation.
Expressed in another way: all bond prices will be determined in terms of the
basic T-bond and the short rate of interest. Again we see that arbitrage pricing
always is a case of determining prices of derivatives in terms of some a priori
given price processes.
    There remains one important and natural question, namely how we ought
to choose X in a concrete case. This question will be treated in some detail, in
Section 22.2, and the moral is that we must go to the actual market and, by
using market data, infer the market's choice of A.
    The bonds treated above are of course contingent claims of a particularly
simple type; they are deterministic. Let us close this section by looking at a
more general type of contingent T-claim of the form

                                  x = *(r(T)),                            (21.25)
where cP is some real valued function. Using the same type of arguments as above
it is easy to see that we have the following result.
Proposition 21.4 (General term structure equation) Let X be a contin-
gent T-claim of the form X = cP(r(T)). In an arbitrage free market the price
II(t; cP) will be given as
                           w ; @I = F(t, r(t)),                      (21.26)
324                            SHORT RATE MODELS


where F solves the boundary value problem




Furthermore F has the stochastic representation




where the martingale measure Q and the subscripts t, r denote that the expecta-
tion shall be taken using the following dynamics:
                           dr(s) = { p - Xu)ds     + crdW(s),             (21.29)
                             r(t) = r.                                    (21.30)

21.3 Exercises
Exercise 21.1 We take as given an interest rate model with the following
P-dynamics for the short rate.


Now consider a T-claim of the form X = @(r(T)) with corresponding price
process II (t).
   (a) Show that, under any martingale measure Q, the price process II (t) has
       a local rate of return equal to the short rate of interest. In other words,
       show that the stochastic differential of II (t) is of the form
                            dII (t) = r (t)II (t) dt   + anlI(t) dW(t).
      (b) Show that the normalized price process



          is a Q-martingale.
Exercise 21.2 The object of this exercise is to connect the forward rates defined
in Chapter 20 to the framework above.
    (a) Assuming that we are allowed to differentiate under the expectation sign,
        show that
                                 E:~,,, [.(TI exp         {-
                                                     JtT r(s) ds}]
                      f (t, T )=

      (b) Check that indeed r (t) = f (t, t).
                                     NOTES                                     325



Exercise 21.3 (Swap a fixed rate vs. a short rate) Consider the following
version of an interest rate swap. The contract is made between two parties, A
and B, and the payments are made as follows:
      A (hypothetically) invests the principal amount K at time 0 and lets it
      grow at a fixed rate of interest R (to be determined below) over the time
      interval [0, TI.
      At time T the principal will have grown to K A SEK. A will then subtract
      the principal amount and pay the surplus K - KA to B (at time T).
      B (hypothetically) invests the principal at the stochastic short rate of
      interest over the interval [0, TI.
      At time T the principal will have grown to KB SEK. B will then subtract
      the principal amount and pay the surplus K - Kg to A (at time T).
The swap rate for this contract is now defined as the value, R, of the fixed rate
which gives this contract the value zero at t = 0. Your task is to compute the
swap rate.
Exercise 21.4 (Forward contract) Consider a model with a stochastic rate
of interest. Fix a T-claim X of the form X = @(r(T)),    and fix a point in time t,
where t < T. From Proposition 21.4 we can in principle compute the arbitrage
free price for X if we pay at time t. We may also consider a forward contract
(see Section 7.6.1) on X contracted at t. This contract works as follows, where
we assume that you are the buyer of the contract.
       At time T you obtain the amount X SEK.
       At time T you pay the amount K SEK.
       The amount K is determined at t .
The forward price for X contracted at t is defined as the value of K which
gives the entire contract the value zero at time t. Give a formula for the forward
price.

21.4 Notes
The exposition in this chapter is standard. For further information, see the notes
at the end of the next chapter.
        MARTINGALE MODELS FOR THE SHORT RATE

22.1 &dynamics
Let us again study an interest rate model where the P-dynamics of the short
rate of interest are given by



As we saw in the previous chapter, the term structure (i.e. the family of bond
price processes) will, together with all other derivatives, be completely determ-
ined by the general term structure equation




as soon as we have specified the following objects:
   a The drift term p.
   a The diffusion term a.
   a The market price of risk A.

Consider for a moment a to be given a priori. Then it is clear from (22.2) that
it is irrelevant exactly how we specify p and X per se. The object, apart from u,
that really determines the term structure (and all other derivatives) is the term
p - Xu in eqn (22.2). Now, from Proposition 21.4 we recall that the term p - Xu is
precisely the drift term of the short rate of interest under the martingale measure
Q. This fact is so important that we stress it again.
Result 22.1.1 The term structure, as well as the prices of all other interest rate
derivatives, are completely determined by specifying the r-dynamics under the
martingale measure Q .
   Instead of specifying p and X under the objective probability measure P
we will henceforth specify the dynamics of the short rate r directly under the
martingale meaure Q. This procedure is known as martingale modeling, and
the typical assumption will thus be that r under Q has dynamics given by



where p and a are given functions. From now on the letter p will thus always
denote the drift term of the short rate of interest under the martingale measure Q.
                      INVERSION OF THE YIELD CURVE                             327


    In the literature there are a large number of proposals on how to specify
the Q-dynamics for r . We present a (far from complete) list of the most popular
models. If a parameter is time dependent this is written out explicitly. Otherwise
all parameters are constant.
    1. VasiEek
                           dr=(b-ar)dt+adW,           (a>O),                 (22.4)
    2. Cox-Ingersoll-Ross (CIR)


    3. Dothan
                                  d r = a r d t +urdW,
    4. Black-Derman-Toy


    5. Ho-Lee
                               d r = B(t)dt     + adW,                       (22.8)
'
I
    6. Hull-White (extended VasiEek)
                    d r = (8(t) - a(t)r) dt   + u(t) dW, (a(t) > O),         (22.9)
    7. Hull-White (extended CIR)



22.2 Inversion of the Yield Curve
Let us now address the question of how we will estimate the various model
parameters in the martingale models above. To take a specific case, assume
that we have decided to use the VasiEek model. Then we have to get values for
a, b, and a in some way, and a natural procedure would be to look in some
textbook dealing with parameter estimation for SDEs. This procedure, however,
is unfortunately completely nonsensical and the reason is as follows.
    We have chosen to model our r-process by giving the Q-dynamics, which
means that a, b, and a are the parameters which hold under the martingale
measure Q. When we make observations in the real world we are not observing r
under the martingale measure Q, but under the objective measure P. This means
that if we apply standard statistical procedures to our observed data we will not
get our Q-parameters. What we get instead is pure nonsense.
    This looks extremely disturbing but the situation is not hopeless. It is in fact
possible to show that the diffusion term is the same under P and under Q, so "in
principle" it may be possible to estimate diffusion parameters using P-data. (The
reader familiar with martingale theory will at this point recall that a Girsanov
transformation will only affect the drift term of a diffusion but not the diffusion
term.)
328            MARTINGALE MODELS FOR THE SHORT RATE


   When it comes to the estimation of parameters affecting the drift term of r
we have to use completely different methods.
   From Section 15.6 we recall the following moral:




              Who chooses the martingale measure?




                                The market!

     Thus, in order to obtain information about the Q-drift parameters we have
t o collect price information from the market, and the typical approach is that
of inverting the yield curve which works as follows: (See the more detailed
discussion in Section 15.6.)
      Choose a particular model involving one or several parameters. Let us
      denote the entire parameter vector by a. Thus we write the r-dynamics
      (under Q) as



      Solve, for every conceivable time of maturity T, the term structure equation




      In this way we have computed the theoretical term structure as

                                p(t, T; a ) , = FT(t,r;a ) .

      Note that the form of the term structure will depend upon our choice of
      parameter vector. We have not made this choice yet.
      Collect price data from the bond market. In particular we may today (i.e.
      at t = 0) observe p(0, T) for all values of T. Denote this empirical term
      structure by {p*(O,T); T 2 0).
      Now choose the parameter vector a in such a way that the theoretical curve
      {p(O, T; a ) ; T 2 0) fits the empirical curve {p*(O,T); T 2 0) as well as
      possible (according to some objective function). This gives us our estimated
      parameter vector a*.
                             AFFINE TERM STRUCTURES                               329


         Insert a*into p and a. Now we have pinned down exactly which martingale
         measure we are working with. Let us denote the result of inserting a* into
         p and a by p* and a* respectively.
         We have now pinned down our martingale measure Q, and we can go on
         to compute prices of interest rate derivatives, like, say, X = I'(r(T)). The
         price process is then given by Il(t; l?) = G(t, r(t)) where G solves the term
         structure equation




        If the above program is to be carried out within reasonable time limits it is
    of course of great importance that the PDEs involved are easy to solve. It turns
    out that some of the models above are much easier to deal with analytically than
    the others, and this leads us t o the subject of so called afFine term structures.

    22.3 Affine Term Structures
    22.3.1 Definition and Existence
    Definition 22.1 If the term structure {p(t,T); 0 5 t   < T, T > 0) has the form

    where F has the form


    and where A and B are deterministic functions, then the model is said to possess
    an affine term structure (ATS).
        The functions A and B above are functions of the two real variables t and T ,
[   but conceptually it is easier to think of A and B as being functions oft, while T
I
    serves as a parameter. It turns out that the existence of an d n e term structure
    is extremely pleasing from an analytical and a computational point of view, so
    it is of considerable interest to understand when such a structure appears. In
    particular we would like to answer the following question:
I          For which choices of p and a in the Q-dynamics for r do we get an affine
           term structure?
    We will try to give at least a partial answer to this question, and we start by
    investigating some of the implications of an d n e term structure. Assume then
    that we have the Q-dynamics


    and assume that this model actually possesses an ATS. In other words we assume
    that the bond prices have the form (22.15) above. Using (22.15) we may easily
    330             MARTINGALE MODELS FOR THE SHORT RATE


    compute the various partial derivatives of F, and since F must solve the term
    structure equation (21.19), we thus obtain

       At(t,T) - (1   + Bt(t,T))r - p(t,r)B(t,T)+ ; a 2 ( t , r ) B 2 ( t , ~=) 0.   (22.17)   '
                                                                                               I



    The boundary value F ( T ,r; T ) E 1 implies                                                   'I,


    Equation (22.17) gives us the relations which must hold between A, B, p, and a
    in order for an ATS to exist, and for a certain choice of p and a there may or may
    not exist functions A and B such that (22.17) is satisfied. Our immediate task is
    thus to give conditions on p and a which guarantee the existence of functions A
    and B solving (22.17). Generally speaking this is a fairly complex question, but
    we may give a very nice partial answer. We observe that if p and a2 are both
    affine (i.e. linear plus a constant) functions of r, with possibly time dependent
    coefficients, then eqn (22.17) becomes a separable differential equation for the
    unknown functions A and B.
        Assume thus that p and a have the form




~   Then, after collecting terms, (22.17) transforms into




    This equation holds for all t, T, and r, so let us consider it for a fixed choice of
    T and t. Since the equation holds for all values of r the coefficient of r must be
1   equal to zero. Thus we have the equation

                                 +                                         ~ )-1:
                       B ~ ( ~ , T )a ( t ) ~ ( t ,-~ ;). y ( t ) ~ 2 ( t ,=         (22.21)

    Since the r-term in (22.20) is zero we see that the other term must also vanish,
    giving us the equation

                          A t ( t , ~=
                                     ) p ( t ) ~ ( t ,-~ ;)b ( t ) ~ ~ ( t , ~ ) .   (22.22)

    We may thus formulate our main result.
                         AFFINE TERM STRUCTURES                                  331


Proposition 22.2 (Affine t e r m structure) Assume that p and a are of

                             ~ ( tr ), = 4 t h + P(t),
                                                                             (22.23)
                             u(t,r) = J-.
Then the model admits an ATS of the form (22.15), where A and B satisfy the

                  B&T) + (Y(~)B(~,T)
                                 - ; $ t ) ~ ~ ( t ,=~ -1,
                                                       )
                                                                             (22.24)
                                                   B(T, T) = 0.
                     At@,T) = P(t)B(t, T) - ;6(t)B2(t, TI,
                                                                             (22.25)

We note that eqn (22.24) is a Ricatti equation for the determination of B which
does not involve A. Having solved eqn (22.24) we may then insert the solution
B into eqn (22.25) and simply integrate in order to obtain A.
    An interesting question is if it is only for an affine choice of p and o2 that we
get an ATS. This is not generally the case, but it can fairly easily be shown that
if we demand that p and u 2 are time independent, then a necessary condition
for the existence of an ATS is that p and a 2 are atline. Looking at the list of
models in the previous section we see that all models except the Dothan and the
Black-Derman-Toy models have an ATS.

22.3.2 A Probabilistic Discussion
There are good probabilistic reasons why some of the models in our list are
easier to handle than others. We see that the models of VasiEek, Ho-Lee and
Hull-White (extended VasiEek) all describe the short rate using a linear SDE.
Such SDEs are easy to solve and the corresponding r-processes can be shown to
be normally distributed. Now, bond prices are given by expressions like


                                                                             (22.26)


and the normal property of r is inherited by the integral      r(s) ds (an integral
is just a sum). Thus we see that the computation of bond prices for a model with
a normally distributed short rate boils down to the easy problem of computing
the expected value of a log-normal stochastic variable. This purely probabilistic
program can in fact be carried out for all the linear models above (the interested
reader is invited to do this), but it turns out that from a computational point of
view it is easier to solve the system of equations (22.24)-(22.25).
    In contrast with the linear models above, consider for a moment the Dothan
model. This model for the short rate is the same as the Black-Scholes model for
the underlying stock, so one is easily led to believe that computationally this
I       332            MARTINGALE MODELS FOR THE SHORT RATE


        is the nicest model conceivable. This is, however, not the case. For the Dothan
        model the short rate will be log-normally distributed, which means that in order
        to compute band prices we are faced with determining the distribution of an
        integral fl   r(s) ds of log-normal stochastic variables. It is, however, a sad fact
        that a sum (or an integral) of log-normally distributed variables is a particularly
        nasty object, so this model leads to great computational problems. It also has
I       the unreasonable property that the expected value of the money account equals
        plus infinity.
I           As for the Cox-Ingersoll-Ross model and the Hull-White extension, these
        models for the short rate are roughly obtained by taking the square of the solution
i       of a linear SDE, and can thus be handled analytically (see the exercises for a
        simplified example). They are, however, quite a bit messier to deal with than
        the normally distributed models. See the notes.
            From a computational point of view there is thus a lot to be said in favor of a
        linear SDE describing the short rate. The price we have to pay for these models
        is again the Gaussian property. Since the short rate will be normally distributed
        this means that for every t there is a positive probability that r(t) is negative,
        and this is unreasonable from an economic point of view. For the Dothan model
        on the other hand, the short rate is log-normal and thus positive with probabil-
        ity 1. It is also possible to show that the Cox-Ingersoll-Ross model will produce
I
l       a strictly positive short rate process. See Rogers (1995) for a discussion on these
        problems.
            We end this section with a comment on the procedure of calibrating the model
        to data described in the previous section. If we want a complete fit between the
        theoretical and the observed bond prices this calibration procedure is formally
        that of solving the system of equations

    1                          p(0, T; a ) = p*(O, T) for all T > 0.                (22.27)

    I   We observe that this is an infinite dimensional system of equations (one equation
    I   for each T) with o as the unknown, so if we work with a model containing a
        finite parameter vector a (like the VasiEek model) there is no hope of obtaining a
    R   perfect fit. Now, one of the main goals of interest rate theory is to compute prices
        of various derivatives, like, for example, bond options, and it is well known that
        the price of a derivative can be very sensitive with respect to the price of the
        underlying asset. For bond options the underlying asset is a bond, and it is thus
        disturbing if we have a model for derivative pricing which is not even able to
    ~   correctly price the underlying asset.
            This leads to a natural demand for models which can be made to fit the
        observed bond data completely, and this is the reason why the Hull-White model
        has become so popular. In this model (and related ones), we introduce an infin-
        ite dimensional parameter vector a by letting some or all parameters be time
    I   dependent. Whether it is possible to actually solve the system (22.27) for a con-
        crete model such as the Hull-White extension of the VasiEek model, and how
                           SOME STANDARD MODELS                                  333


this is to be done in detail, is of course not clear a priori but has to be dealt
with in a deeper study. We carry out this study for the Hull-White model in the
next section.
    It should, however, be noted that the introduction of an infinite parameter, in
order to fit the entire initial term structure, has its dangers in terms of numerical
instability of the parameter estimates.
    There is also a completely different approach to the problem of obtaining a
perfect fit between today's theoretical bond prices and today's observed bond
prices. This is the Heath-Jarrow-Morton approach which roughly takes the
observed term structure as an initial condition for the forward rate curve, thus
automatically obtaining a perfect fit. This model will be studied in the next
chapter.

22.4 Some Standard Models
In this section we will apply the ATS theory above, in order to study the most
common afFine one factor models.

22.4.1 The VasiEek Model
To illustrate the technique we now compute the term structure for the VasiEek
model
                            dr = ( b - a r ) d t + a d W .            (22.28)
Before starting the computations we note that this model has the property of
being mean reverting (under Q) in the sense that it will tend to revert to the
mean level bla. Equations (22.24)-(22.25) become




Equation (22.29) is, for each fixed T, a simple linear ODE in the t-variable. It
can easily be solved as




Integrating eqn (22.30) we obtain




and, substituting the expression for B above, we obtain the following result.
334               MARTINGALE MODELS FOR THE SHORT RATE


P r o p o s i t i o n 22.3 (The VasiEek t e r m s t r u c t u r e ) In the VasiEek model, bond
prices are given by
                                p(t, T ) = eA(t,T)-B(t,T)'(t),
where



               A(t,T ) =
                              { B ( t ,T ) - 2'   + t ) (ab- ia2)- a 2B 2(t,T )
                                                  a2                         4a
   For the VasiEek model, there is also an explicit formula for European bond
options. See Proposition 22.9.

22.4.2 The Ho-Lee Model
For the Ho-Lee model the ATS equations become




                         At(t,T)= @ ( t ) B ( t , T -
                                                    ) ;U~B~(~,T),
                         A ( T ,T ) = 0.
These are easily solved as




It now remains to choose 8 such that the theoretical bond prices, at t = 0 , fit
the observed initial term structure {p*(O,T);T 2 0 ) . We thus want to find 8
such that p(0, T ) = p*(O, T ) for all T 2 0. This is left as an exercise, and the
solution is given by
                            @ ( t )= af^(0,t ) +
                                       aT
where f*(O,t ) denotes the observed forward rates. Plugging this expression into
the ATS gives us the following bond prices.
P r o p o s i t i o n 22.4 ( T h e Ho-Lee t e r m s t r u c t u r e ) For the Ho-Lee model, the
bond prices are given by
                                                                  'i




      p(t, T )=
                  P*(O, t )        {
                                                            u2
                                                                                     I
                                                              - t12- (T - t ) r ( t ) .
                              exp (T- t ) f * ( ~t ), - 5 t ( ~
                                                                       ,.,   .t
For completeness we also give the pricing formula for a European call on an
underlying bond. We will not derive this result by solving the pricing PDE (this
                                   SOME STANDARD MODELS                                      335


        is in fact very hard), but instead we refer the reader to Chapter 24 where we will
        present a rather general option pricing formula (Proposition 24.11). It is then an
        easy exercise to obtain the result below as a special case.
, P r o p o s i t i o n 22.5 ( B o n d o p t i o n s ) For the Ho-Lee model, the price at t , of a
  European call option with strike price K and exercise date T , on an underlying
i S-bond, we have the following p ~ c i n gformula:

1                     c(t,T , K, S ) = p(t, S ) N ( d )- p(t, T ) K . N ( d - a,),       (22.33)
C
        where




        22.4.3 The CIR Model
        The CIR model is much more difficult to handle than the VasiEek model, since
1       we have to solve a Riccati equation. We cite the following result.
        Proposition 22.6 (The C I R t e r m s t r u c t u r e ) The term structure for the
        CIR model is given by


I       where




j and
I


        It is possible to obtain closed form expressions for European call options on
        zero coupon bonds within the CIR framework. Since these formulas are rather
        complicated, we refer the reader to Cox-Ingersoll-Ross (19856).

  22.4.4 The Hull-White Model
    I
1 In this section we will make a fairly detailed study of a simplified version of the
i Hull-White extension of the VasiEek model. The Q-dynamics of the short rate
  are given by
                                                        +
                           d r = { Q ( t )- a r ) d t u d W ( t ) ,           (22.36)
        where a and o are constants while 8 is a deterministic function of time. In this
        model we typically choose a and a in order to obtain a nice volatility structure
336                MARTINGALE MODELS FOR THE SHORT RATE


whereas 8 is chosen in order to fit the theoretical bond prices {p(O,T); T > 0)
to the observed curve {p*(O,T); T > 0).
    We have an d n e structure so by Proposition 22.2 bond prices are given by



where A and B solve




      The solutions to these equations are given by




Now we want to fit the theoretical prices above to the observed prices and it
is convenient to do this using the forward rates. Since there is a one-to-one
correspondence (see Lemma 20.4) between forward rates and bond prices, we
may just as well fit the theoretical forward rate curve {f (0,T); T > 0) to the
observed curve {f * (0, T); T > 0) , where of course f * is defined by f*(t, T ) =
-(d logp*(t, T))/aT. In any affine model the forward rates are given by



which, after inserting (22.40)-(22.41), becomes




Given an observed forward rate structure f * our problem is to find a function 8
which solves the equation

                                                u2 (1 - e-aT)2,
                              +
      f*(O,T) = e - a T r ( ~ )e-a(T-s)8(s)ds - -
                                                2a2
                                                                VT > 0.
                                                                   (22.44)
One way of solving (22.44) is to write it as
                             SOME STANDARD MODELS


    where x and g are defined by




/ We now have


i   SO we have in fact proved the following result.

    Lemma 22.7 Fix an arbitrary bond curve W(O,T); T > 0), subject only to the
    condition that p*(O,T) is twice differentiable w.r.t. T. Choosing 8 according to
    (22.47) will then produce a term structure {p(O,T); T > 0) such that p(0, T ) =
    p*(O, T) for all T > 0.
1 By choosing C3 according to (22.47) we have, for a fixed choice of a and u,
1 determined our martingale measure. Now we would like to compute the theoret-
  ical bond prices under this martingale measure, and in order to do this we have
I to substitute our choice of 8 into eqn (22.41). Then we perform the integration
1 and substitute the result as well as eqn (22.40) into eqn (22.37). This leads to
1 some exceedingly boring calculations which (of course) are left to the reader.
' The result is as follows.
    Proposition 22.8 (The Hull-White term structure) Consider the Hull-
    White model with a and a jixed. Having inverted the yield curve by choosing O
    according to (22.47) we obtain the bond prices as




?   where B is given by (22.40).
    We end this section by giving, for the Hull-White, as well as for the VasiEek
    model, the pricing formula for a European call option with time of maturity T
    and strike price K on an S-bond, where of course T < S. We denote this price
    by c(t, T, K,S). At the present stage the reader is not encouraged to derive the
    formula below. In Chapter 24 we will instead present a technique which will
    greatly simplify computations of this kind, and the formula will be derived with
    relative ease in Section 24.6 (see Proposition 24.13). Note that the bond prices
    p(t, T ) and p(t, S ) below do not have to be computed at time t, since they can
    be observed directly on the market.
338            MARTINGALE MODELS FOR THE SHORT RATE


Proposition 22.9 (Bond options) Using notation as above we have, both for
the Hull-White and the VasiEek models, the following bond option formula:


where




22.5 Exercises
Exercise 22.1 Consider the VasiEek model, where we always assume that a > 0.
   (a) Solve the VasiEek SDE explicitly, and determine the distribution of r(t).
       Hint: The distribution is Gaussian (why?), so it is enough to compute
       the expected value and the variance.
   (b) As t -,oo, the distribution of r(t) tends to a limiting distribution. Show
       that this is the Gaussian distribution N[b/a, u/$%]. Thus we see that,
       in the limit, r will indeed oscillate around its mean reversion level bla.
   (c) Now assume that r(0) is a stochastic variable, independent of the Wiener
       process W, and by definition having the Gaussian distribution obtained
       in (b). Show that this implies that r(t) has the limit distribution in (b),
       for all values oft. Thus we have found the stationary distribution for the
       VasiEek model.
   (d) Check that the density function of the limit distribution solves the time
       invariant Fokker-Planck equation, i.e. the Fokker-Planck equation with
       the (dl%)-term equal to zero.
Exercise 22.2 Show directly that the VasiEek model has an &ne term struc-
ture without using the methodology of Proposition 22.2. Instead use the
characterization of p(t, T ) as an expected value, insert the solution of the SDE
for r, and look at the structure obtained.
Exercise 22.3 Try to carry out the program outlined above for the Dothan
model and convince yourself that you will only get a mess.
Exercise 22.4 Show that for the Dothan model you have EQ [B(t)]= oo.
Exercise 22.5 Consider the Ho-Lee model


Assume that the observed bond prices at t = 0 are given by {p*(O,T); t 2 0).
Assume furthermore that the constant cr is given. Show that this model can be
fitted exactly to today's observed bond prices with 8 as
                                      NOTES                                      339


where f* denotes the observed forward rates. (The observed bond price curve is
assumed to be smooth.)
    Hint: Use the afFine term structure, and fit forward rates rather than bond
prices (this is logically equivalent).
Exercise 22.6 Use the result of the previous exercise in order to derive the
bond price formula in Proposition 22.4.
Exercise 22.7 It is often considered reasonable to demand that a forward rate
curve always has an horizontal asymptote, i.e. that limT,, f (t, T) exists for all t.
(The limit will obviously depend upon t and ~ ( t ) .The
                                                      ) object of this exercise is
to show that the Ho-Lee model is not consistent with such a demand.
  (a) Compute the explicit formula for the forward rate curve f (t, T) for the
      Ho-Lee model (fitted to the initial term structure).
  (b) Now assume that the initial term structure indeed has a horizontal asymp
      tote, i.e. that limT,,    f*(O, T) exists. Show that this property is not
      respected by the Ho-Lee model, by fixing an arbitrary time t, and showing
      that f (t, T) will be asymptotically linear in T.
Exercise 22.8 The object of this exercise is to indicate why the CIR model is
connected to squares of linear diffusions. Let Y be given as the solution to the
following SDE:



Define the process Z by Z(t) =    m.It turns out that Z satisfies a stochastic
differential equation. Which?

22.6 Notes
Basic papers on short rate models are VasiEek (1977), Hull and White (1990),
Ho and Lee (1986), Cox et al. (1985b), Dothan (1978), and Black et al. (1990).
For extensions and notes on the afFine term structure theory, see Dufiie and Kan
(1996). An extensive analysis of the linear quadratic structure of the CIR model
can be found in Magshoodi (1996). The bond option formula for the VasiEek
model was first derived by Jamshidian (1989). For examples of two-factor models
see Brennan and Schwartz (1979, 1982), and Longstaff and Schwartz (1992).
Rogers (1997) shows how it is possible to generate a wide class of short rate
models by modeling the state price density directly under P and using resolvents.
A completely different approach to interest rate theory is given in Platen (1996)
where the short rate is derived as a consequence of an entropy related principle.
See also Platen and Rebolledo (1995). For an overview of interest rate theory see
Bjork (1997).
                           FORWARD RATE MODELS

    23.1 The Heath-Jarrow-Morton Framework
    Up to this point we have studied interest models where the short rate r is the only
    explanatory variable. The main advantages with such models are as follows:
          Specifying r as the solution of an SDE allows us to use Markov process
          theory, so we may work within a PDE framework.
          In particular it is often possible to obtain analytical formulas for bond
          prices and derivatives.
    The main drawbacks of short rate models are as follows:
          From an economic point of view it seems unreasonable to assume that the
          entire money market is governed by only one explanatory variable.
          It is hard to obtain a realistic volatility structure for the forward rates
          without introducing a very complicated short rate model.
          As the short rate model becomes more realistic, the inversion of the yield
          curve described above becomes increasingly more difficult.
    These, and other considerations, have led various authors to propose models
    which use more than one state variable. One obvious idea would, for example,
    be to present an a priori model for the short rate as well as for some long
    rate, and one could of course also model one or several intermediary interest
    rates. The method proposed by Heath-Jarrow-Morton (HJM) is at the far end
    of this spectrum-they choose the entire forward rate curve as their (infinite
    dimensional) state variable.
        We now turn to the specification of the HJM framework. We start by
    specifying everything under a given objective measure P.
    Assumption 23.1.1 We assume that, for every fied T > 0, the forward
    mte f(.,T) has a stochastic diflerential which under the objective measure P
    is given by




     where w  is a (d-dimensional) P- Wiener process whereas a(., T ) and u(.,T ) are
    adapted processes.
    Note that conceptually eqn (23.1) is one stochastic differential in the t-variable
    for each fixed choice of T. The index T thus only serves as a "mark" or "par&
    meter" in order to indicate which maturity we are looking at. Also note that we
C
                  THE HEATH-JARROW-MORTON FRAMEWORK                                    341


use the observed forward rated curve {f*(O,T); T 2 0) as the initial condition.
This will automatically give us a perfect fit between observed and theoretical
bond prices at t = 0, thus relieving us of the task of inverting the yield curve.
Remark 23.1.1 It is important to observe that the HJM approach to interest
rates is not a proposal of a specific model, like, for example, the VasiEek model.
It is instead a framework to be used for analyzing interest rate models. Every
short rate model can be equivalently formulated in forward rate terms, and for
every forward rate model, the arbitrage free price of a contingent T-claim X will
still be given by the pricing formula

                          n(0;),    = EQ [exp      {- 1'   r(.) ds}       x],
where the short rate as usual is given by r(s) = f (s, 3).
Suppose now that we have specified a , u and {f * (0, T); T L 0). Then we have
specified the entire forward rate structure and thus, by the relation


                                    TI = exP   {- iTf      (t, s) ds} 7              (23.3)

we have in fact specified the entire term structure {p(t,T); T > 0, 0 5 t _< T).
Since we have d sources of randomness (one for every Wiener process), and an
infinite number of traded assets (one bond for each maturity T), we run a clear
risk of having introduced arbitrage possibilities into the bond market. The first
question we pose is thus very natural: How must the processes a and a be related
in order that the induced system of bond prices admits no arbitrage possibilities?
The answer is given by the HJM drift condition below.
Theorem 23.1 (HJM drift condition) Assume that the family of forward
rates is given by (23.1) and that the induced bond market is arbitrage free. Then
there exists a d-dimensional column-vector process

                                     x(t) = [xl(t),    . xd(t)]'
with the property that for all T 2 0 and for all t 5 T, we have

                         a(t, T) = o(t, T)   1 T
                                                   u(t, s)' ds - o(t, T)A(~).        (23.4)

In these f o n u l a s    ' denotes transpose.
Proof      From Proposition 20.5 we have the bond dynamics

   dp(t, T)= PO, T ) {r(t)         + A(t, T ) + $ IlS(t, T)II~)dt + ~ ( tT)S(t,
                                                                          ,     T) dW(t),
                                                                                     (23.5)
342                        FORWARD RATE MODELS


where
                             A(t, T) = -   s ,a(t,
                                               ~ S)ds,
                             S(t,T) = - ~ ~ a ( t , s ) d s .
The risk premium for the T-bond is thus given by

                              A(t,T)   + ;lIS(t,~)11~,
and, applying Result 15.6.1, we conclude the existence of a d-dimensional
column-vector process X such that




Taking the T-derivative of this equation gives us eqn (23.4).

23.2 Martingale Modeling
We now turn to the question of martingale modeling, and thus assume that the
forward rates are specified directly under a martingale measure Q as

                      df (t, T) = a(t, T ) dt   + a(t, T ) dW(t),           (23.7)
                       f (0, T) = f*(O,T),                                  (23.8)

where W is a (d-dimensional) Q-Wiener process. Since a martingale measure
automatically provides arbitrage free prices, we no longer have a problem of
absence of arbitrage, but instead we have another problem. This is so because
we now have the fillowing two different formulas for bond prices




where the short rate r and the forward rates f are connected by r(t) = f (t, t). In
order for these formulas to hold simultaneously, we have to impose some sort of
consistency relation between a and a in the forward rate dynamics. The result
is the famous HJM drift condition.
Proposition 23.2 (HJM drift condition) Under the martingale measure Q,
the processes a and u must satisfy the following relation, for every t and
every T 3 t.
                         a(t, T) = g(t, T)      1
                                                rT
                                                     a(t, s)' ds.
                             MARTINGALE MODELING                             343


Proof A short and brave argument is to observe that if we start by modeling
directly under the martingale measure, then we may apply Proposition 23.1 with
X = 0. A more detailed argument is as follows.
   From Proposition 20.5 we again have the bond price dynamics



We also know that, under a martingale measure, the local rate of return has to
equal the short rate r . Thus we have the equation



which gives us the result.
The moral of Proposition 23.2 is that when we specify the forward rate dynamics
(under Q) we may freely specify the volatility structure. The drift parameters
are then uniquely determined. An "algorithm" for the use of an HJM model can
be written schematically as follows:
   1. Specify, by your own choice, the volatilities u(t, T).
   2. The drift parameters of the forward rates are now given by

                              a(t, T ) = ~ ( tT)
                                               ,   1
                                                   T
                                                       u(t, s)' ds.      (23.10)

   3. Go to the market and observe today's forward rate structure



   4. Integrate in order to get the forward rates as




   5. Compute bond prices using the formula




   6. Use the results above in order to compute prices for derivatives.
   To see at least how part of this machinery works we now study the simplest
example conceivable, which occurs when the process u is a deterministic constant.
With a slight abuse of notation let us thus write u(t, T) = u, where u > 0.
Equation (23.9) gives us the drift process as
344                        FORWARD RATE MODELS


so eqn (23.11) becomes




In particular we see that r is given as




so the short rate dynamics are

                                         +
                     dr(t) = { f ~ ( ~ , . t )u2t) dt   + u dW(t),       (23.17)

which is exactly the HeLee model, fitted to the initial term structure. Observe
in particular the ease with which we obtained a perfect fit to the initial
term structure.

23.3 The Musiela Parameterization
In many practical applications it is more natural to use time to maturity, rather
than time of maturity, to parameterize bonds and forward rates. If we denote
running time by t, time of maturity by T , and time to maturity by x, then we
have x = T - t, and in terms of x the forward rates are defined as follows.

Definition 23.3 For all x        2 0 the forward rates r(t, x) are defined by
the relation
                                r(t, x) = f (t, t   + x).                (23.18)
Suppose now that we have the standard HJM-type model for the forward rates
under a martingale measure Q



The question is to find the Q-dynamics for r(t, x), and we have the following
result, known as the Musiela equation.
Proposition 23.4 (The Musiela equation) Assume that the forward rate
dynamics under Q are given by (23.19). Then

               dr(t, x) = {Fr(t, x)   + D(t,x)) dt + uo(t, X)dW(t),      (23.20)
                                     EXERCISES


where

                        uo(t, x) = u(t, t   + x),
                                                   rx
                        D(t, x) = uo(t,x)
                                               10       uo(t,s)' ds,




Proof   Using a slight variation of the It6 formula we have




where the differential in the term df (t, t        + x) only operates on the first t. We
thus obtain
                                                              a
           dr(t, 2) = a(t, t   + X)dt + u(t, t + x) dW(t) + a-r(t,
                                                               x   z)dt,

and, using the HJM drift condition, we obtain our result.

    The point of the Musiela parameterization is that it highlights eqn (23.20)
as an infinite dimensional SDE. It has become an indispensible tool of modern
interest rate theory.

23.4 Exercises
Exercise 23.1 Show that for the Hull-White model

                           d r = (8( t )- ar) dt        + u dW,
the corresponding HJM formulation is given by

                      df (t, T).= a(t, T) dt       + ae-a(T-t) dW
Exercise 23.2 (Gaussian interest rates) Take as given an HJM model (under
the risk neutral measure Q) of the form

                      df (t, T ) = a ( t , T) dt   + o(t, T ) dW(t),
where the volatility u(t, T) is a deterministic function of t and T.
   (a) Show that all forward rates, as well as the short rate, are normally
       distributed.
   (b) Show that bond prices are log-normally distributed.
346                        FORWARD RATE MODELS


Exercise 23.3 Consider the domestic and a foreign bond market, with bond
prices being denoted by pd(t,T ) and pf (t, T ) respectively. Take as given a
standard HJM model for the domestic forward rates fd(t,T), of the form



where W is a multidimensional Wiener process under the domestic martingale
measure Q. The foreign forward rates are denoted by ff(t,T), and their
dynamics, still under the domestic martingale measure Q, are assumed to be
given by
                   dff(t,T) = a f ( t , T ) d t + a f ( t , T ) d W ( t ) .
Note that the same vector Wiener process is driving both the domestic and
the foreign bond market. The exchange rate X (denoted in units of domestic
currency per unit of foreign currency) has the Q dynamics



Under a foreign martingale measure, the coefficient processes for the foreign
forward rates will of course satisfy a standard HJM drift condition, but here
we have given the dynamics of ff under the domestic martingale measure Q.
Show that under this measure the foreign forward rates satisfy the modified
drift condition




Exercise 23.4 With notation as in the exercise above, we define the yield
spread g (t, T ) by
                              t , = ff (t, T) - fd(t,
                          ~ ( T)
Assume that you are given the dynamics for the exchange rate and the domestic
forward rates as above. You are also given the spread dynamics (again under the
domestic measure Q) as



Derive the appropriate drift condition for the coefficient process a, in terms of
u,, ud and ax (but not involving af).
Exercise 23.5 A consol bond is a bond which forever pays a constant con-
tinuous coupon. We normalize the coupon to unity, so over every interval with
length dt the consol pays l.dt. No face value is ever paid. The price C(t), at time
t, of the consol is the value of this infinite stream of income, and it is obviously
(why?) given by
                              C(t) =   irn p(t, s) ds.
I Now assume that bond price dynamics under a martingale measure Q are
1 given by
                       dP(t, T) = ~ ( tT)r(t)
                                        ,     dt   + ~ ( tT)v(t,
                                                           ,     T)dW(t),
     where W is a vector valued Q-Wiener process. Use the heuristic arguments given
     in the derivation of the HJM drift condition (see Section 20.2.2) in order to show
     that the consol dynamics are of the form

                          dC(t) = (C(t)r(t) - 1) d t   + uc(t) dW(t),
     where



      23.5 Notes
      The basic paper for this chapter is Heath et al. (1987). The Musiela paramet-
      erization was first systematically investigated in Musiela (1993), and developed
     further in Brace and Musiela (1994). Consistency problems for HJM models and
     families of forward rate curves were studied in Bjork and Christensen (1999),
     Filipovit: (1999), and FilipoviE (2001). The question of when the short rate in a
I    HJM model is in fact Markovian was first studied in Carverhill (1994) for the
     case of deterministic volatiliy, and for the case of a short rate depending volatility
     structure it was solved in Jeffrey (1995). The more general question when a given
I    HJM model admits a realization in terms of a finite dimensional Markovian diffu-


1I
     sion was, for various special cases, studied in Ritchken and Ssnkarasubramanian
     (1995), Cheyette(l996), Bhar and Chiarella (1997), Inui and Kijima (1998),
     Bjork and Gombani (1999), and Chiarella and Kwon (2001). The necessary and
     sufficient conditions for the existence of finite dimensional Markovian realisa-
     tions in the general case were first obtained, using methods from differential
     geometry, in Bjork and Svensson (2001). This theory has then been developed
     further in Bjork and Land& (2002), and Filipovid and Teichmann (2001). A
     survey is given in Bjork (2001). In Shirakawa (1991), Bjork (1995), Bjork et al.
I    (1997a,b), and Jarrow and Madan (1995) the HJM theory has been extended to
     more general driving noise processes. There is a growing literature on defaultable
     bonds. See Merton (1974), Duffie and Singleton (1994), Leland (1994), Jarrow
     et al. (1997) and Lando (1997). Concerning practical estimation of the yield
/    curve see Anderson et d. (1996).
                      CHANGE OF NUMERAIRE*

24.1 Introduction
Consider a given financial market (not necessarily a bond market) with the
usual locally risk free asset B, and a risk neutral martingale measure Q. As
noted in Chapter 10 a measure is a martingale measure only relative to some
chosen numeraire asset, and we recall that the risk neutral martingale measure,
with the money account B as numeraire, has the property of martingalizing all
processes of the form S(t)/B(t) where S is the arbitrage free price process of any
(nondividend paying) traded asset.
    In many concrete situations the computational work needed for the determ-
ination of arbitrage free prices can be drastically reduced by a clever change
of numeraire, and the purpose of the present chapter, which to a large extent
follows and is inspired by Geman et al. (1995), is to analyze such changes. See
the Notes for the more bibliographic information.
    To get some feeling for where we are heading, let us consider the pricing
problem for a contingent claim X, in a model with a stochastic short rate r.
Using the standard risk neutral valuation formula we know that the price at
t = 0 of X is given by



The problem with this formula from a computational point of view is that in
order to compute the expected value we have to get hold of the joint distribution
(under Q) of the two stochastic variables :J r(s) ds and X, and finally we have
to integrate with respect to that distribution. Thus we have to compute a double
integral, and in most cases this turns out to be rather hard work.
    Let us now make the (extremely unrealistic) assumption that r and X are
independent under Q. Then the expectation above splits, and we have the
formula
                      n(o; X) = EQ   [,-.far r ( s ) d s ] . EQ [XI,


which we may write as


   We now note that (24.2) is a much nicer formula than (24.1), since
    We only have to compute the single integral EQ [XI instead of the double
    integral EQ [exp    {- %r(s) ds}       XI.
                                    GENERALITIES                                 349


         The bond price p(0,T) in formula (24.2) does not have to be com-
         puted theoretically at all. We can observe it (at t = 0) directly on the
1 su     bond market.
       The drawback with the argument above is that, in most concrete cases, r and
    X are not independent under Q, and if X is a contingent claim on an underlying
    bond, this is of course obvious. What may be less obvious is that even if X is
    a claim on an underlying stock which is P-independent of r , it will still be the
    case that X and r will be dependent (generically) under Q. The reason is that
    under Q the stock will have r as its local rate of return, thus introducing a
    Q-dependence.
        This is the bad news. The good news is that there exists a general pricing
    formula (see Proposition 24.8), a special case of which reads as



'   Here E~ denotes expectation w.r.t. the so-called forward neutral measure QT,
    which we will discuss below. We will also discuss more general changes
    of numeraire.

    24.2 Generalities
    We now proceed to the formal discussion of numeraire changes, and we start by
I   setting the scene.
    Assumption 24.2.1 W e consider an arbitrage free market model with asset
    prices So, S 1 , .. . , S , where So is assumed to be strictly positive.
    Sometimes, but not always, we will need to assume that all prices are
    Wiener driven.
    Condition 24.2.1 Under P , the S-dynamics are of the form



    where the coeficient processes are adapted and W is a multidimensional standard
    P-Wiener process.
I Remark 24.2.1 We do not necessarily assume the existence of a short rate and
I   a money account. If the model admits a short rate and a money account they
I   will as usual be denoted by r and B, respectively.


r   From a mathematical point of view, most of the results concerning changes of
    numeraire are really special cases of the First Fundamental Theorem and the
    associated pricing formulas. Thus the difference between the present chapter
    and Chapter 10 is more one of perspective than one of essence. We now recall
I   some facts from Chapter 10 and start with the Invariance Lemma.
350                           CHANGE OF NUMERAIRE


L e m m a 24.1 (Invariance l e m m a ) Let P be any strictly positive It6 process,
and define the normalized process 2 with numeraire /3, by Z = SIP. Then h
is S-self-financing if and only if h is 2-self-financing, i.e. with notation as i n
Chapter 10 we have
                             d v s ( t ; h ) = h ( t )d S ( t )             (24.4)
i f and only i f
                                 d v Z ( t ;h ) = h ( t )d Z ( t ) .
P r o o f Follows immediately from the It6 formula.                                       0
    We make two remarks on the Invariance Lemma.
      A process /3 satisfying the assumptions above is sometimes called a
      "deflator process".
      We have assumed that S and p are It6 processes. This is not important, and
      the Invariance Lemma does in fact hold also in a general semimartingale
      setting.
      Observe that at this point we do not assume that the deflator process /3
      is the price process for a traded asset. The Invariance Lemma will hold for
      any positive process p satisfying the assumptions above.
   From Chapter 10 (see summary in Section 10.7) we now recall the First
Fundamental Theorem and the corresponding pricing formula.
T h e o r e m 24.2 Under the assumptions above, the following hold:
      The market model is free of arbitrage i f and only if there exists a
      m a r t i n g a l e m e a s u r e , Q0 P such that the processes
                                        N




       are (local) martingales under QO.
       I n order to avoid arbitrage, a T-claim X must be priced according to the
       formula


       where E0 denotes expectation under QO.
In most of our applications earlier in the book we have used the money
account B as the numeraire, but in many applications the choice of another
asset as the numeraire asset can greatly facilitate computations. A typical
example when this situation occurs is when dealing with derivatives defined
in terms of several underlying assets. Assume for example that we are given
two asset prices S1 and S 2 , and that the contract X to be priced is of the form
X = @(S1  ( T ) ,S 2 ( T ) ) ,where @ is a given linearly h o m o g e n o u s function. Using
                                     GENERALITIES                                351


    the standard machinery, and denoting the risk neutral martingale measure by
    Q0we would have to compute the price as



    which essentially amounts to the calculation of a triple integral. If we instead
    use S1 as numeraire, with martingale measure Q1, we have



    where cp(z) = @(l,z) and Zz(t) = Sz(t)/Sl(t). In this formula we note that the
i   factor Sl(t) is the price of the traded asset Sl at time t, so this quantity does
    not have to be computed-it can be directly observed on the market. Thus the
    computational work is reduced to computing a single integral. We also note the
    important fact that in the Z economy we have zero short rate.

    Example 24.3 As an example of the reasoning above, assume that, we have two
    stocks, S1and S2,with price processes of the following form under the objective
    probability measure P:

                         dS1(t) = a1SI(t) dt       + SI(t)ol dW(t),            (24.8)
                         dSz(t) = a z S 2 (t) dt   + SZ( ~ ) udW(t).
                                                              z                (24.9)


1
,
    Here al,a 2 E R and ul, 0 2 E R 2 are assumed to be deterministic, and W is
    assumed to be a two dimensional standard Wiener process under P. We assume
    absence of arbitrage.
        The T-claim to be priced is an exchange option, which gives the holder the
    right, but not the obligation, to exchange one Szshare for one S1share at time T.
I   Formally this means that the claim is given by Y = max [S2(T)- S1(T), 01, and
    we note that we have a linearly homogeneous contract function. It is thus natural
    to use one of the assets as the numeraire, and we choose S1.From Theorem 24.2,
    and using homogeneity, the price is given by



    with Z2(t) = Sz(t)/Sl(t) and with El denoting expectation under Q1. We are
    thus in fact valuing a European call option on Zz(T), with strike price K = 1 in
    a world with zero short rate.
       We now have to compute the Q1 dynamics of 2 2 , but this turns out to be
    very easy. From It8, the P-dynamics of Zz are of the form

                    dZ2(t) = Zz(t) (.. .) dt   +   2 2 (t) ( ~ -
                                                               2 ui ) dW(t)
     352                         CHANGE OF NUMERAIRE


     where we do not care about the precise form of the dt-terms. Under Q1 we know
     that Z2 is a martingale, and since the volatility terms do not change under a
     Girsanov transformation we obtain directly the Q1 dynamics as

                             dZ2(t) = 2 2 (t) {a2 - 01 1 d w l (t),              (24.10)

     where W1 is Q1-Wiener. We can write this as



     where W is a scalar Q1-Wiener process and



     Using the BlackScholes formula with zero short rate, unit strike price and
     volatility a, the price of the exchange option is thus given by the formula

                           II(t; X) = Si (t) {Zz(t)N[dil - N[d2l)                (24.11)
                                    = Sz(t)N[dlI - Si(t)N[dzI,                   (24.12)




     If, instead of using a two &mensional standard Wiener process, we model the
     stock price dynamics as

                           dSl (t) =     Sl(t) dt    + Si( t ) ~dwi
                                                                i (t),
                           dS2(t) = a 2 5 2 (t) dt   + S2(t)a2 diiTz (t),

     where w1 and w2are scalar P-Wiener with local correlation p, and thus a1 and
     0 2 are scalar constants, then it is easy to see that the relevant volatility to use
     in the formula above is given by




     Note that we made no assumption whatsoever about the dynamics of the short
I
1f
     rate. The result above thus holds for every possible specification of the short
     rate process.
                         CHANGING THE NUMERAIRE                                353


    We will give several other concrete examples below, but first we will investig-
ate how we change from one choice of numeraire to another, i.e. how we determine
the appropriate Girsanov transformation. This will be done in the next section.
Remark 24.2.2 Since there sometimes seems to be confusion around what is a
bona fide choice of numeraire, let us recall some points in the derivation of the
First Fundamental Theorem:
     In the basic version of the theorem (Theorem 10.9) we assumed that Sowas
     a risk free traded asset with zero rate of return. It was a crucial ingredient
     in the proof that we were allowed to invest in this risk free asset.
     For the general case we used the traded asset Soas the numeraire. In the
     normalized economy this provided us with a traded asset Zo which was
     risk free with zero rate of return. The Invariance Lemma then allowed us
     to use the basic version of Theorem 10.9 to complete the proof.
     The point of these comments is that the Invariance Lemma is true for any
     deflator process P, but when it comes to the existence of martingale meas-
     ures and pricing, we must use a numeraire which is the price process of a
     traded asset without dividends.
     In particular, if we want to use numeraires like
        a nonfinancial index,
        a forward or futures price process,
        the price process of a traded asset with dividends,
     then we must carry out a careful separate analysis, since in these cases
     we do not have access to a standard version of the First Fund*
     mental Theorem.

24.3 Changing the Numeraire
Suppose that for a specific numeraire Sowe have determined the corresponding
(not necessarily unique) martingale measure QO,and the associated dynamics
of the asset prices (and possibly also the dynamics of other factors within the
model). Suppose furthermore that we want to change the numeraire from Soto,
say, Sl. An immediate problem is then to find the appropriate Girsanov trans-
formation which will take us from Q0 to Q1, where Q1 is the martingale measure
corresponding to the numeraire Sl. This problem will for example turn up in
connection with the LIBOR market models treated later in the book.
    This problem is in fact quite easily solved, and to see this, let us use the
pricing part of Theorem 24.2 for an arbitrary choice of T-claim X. We then have




and also
                          II(0;X) = S1(0)E1                                 (24.14)
    354                       CHANGE OF NUMERAIRE


    Denoting by LA(T) the Radon-Nikodym derivative




    we can write (24.14) as




    and we thus have




    for all (sufficiently integrable) T-claims X. We thus deduce that




    so we obtain
I
    which is our candidate as a Radon-Nikodym derivative. The obvious choice of
    the induced likelihood process is of course given by




    This looks promising, since the process Sl(t)/So(t) is a Qo-martingale (why?),
    and we know that any likelihood process for the transition from Q0 to Q1 has
    to be a Qo-martingale. In more formal terms we have the following proposition.
    Proposition 24.4 Assume that Q0 is a martingale measure for the mmeraire
    So (on FT) and assume that S1 is a positive asset price process such that
    Sl(t)/So(t) is a true Qo-martingale (and not just a local one). Define Q1 on
    FT by the likelihood process



    Then Q1 is a martingale measure for Sl.
    Proof We have to show that for every (sdciently integrable) arbitrage free
    price process 11, the normalized process TI (t) /Sl(t) is a Q1-martingale. Now, if
                                 FORWARD MEASURES                                  355


I ll is an arbitrage free price process then we know that II/So is a Qu-martingale
    and for s 5 t we have the following calculation, where we use the Abstract
    Bayes' Formula:




       Since we have determined the relevant likelihood process, we can identify the
    Girsanov kernel.
    Proposition 24.5 Assume absence of arbitrage and that Condition 24.2.1
    is i n force. Denote the corresponding Q"-Wiener process by W " . 1'hen the
    Qo-d y namics of the likelihood process LA are given by

                         L;(t) = LA(t) {a1(t)- a o ( t ) ) d w " ( t ) .       (24.19)

    Thus the Girsanov kernel cpA for the transition from Q0 to Q1 is given by the
    volatility difference
                                cp;(t)= 0 1 (t)- ao(t).                   (24.20)

    Proof The result follows immediately from applying the It6 formula to
    (24.18).
I



i   24.4   Forward Measures
    In this section we specialize the theory developed in the previous section to the
    case when the new numeraire chosen is a bond maturing at time T. As can be
    expected this choice of numeraire is particularly useful when dealing with interest
    rate derivatives.

1   24.4.1 Using the T-bond as Numeraire
/   Suppose that we are given a specified bond market model with a fixed (money
    account) martingale measure Q. For a fixed time ot maturity T we now choose
    the zero coupon bond maturing at T as our new numeraire.
    Definition 24.6 For a fixed T, the T-forward measure QT is defined as the
    martingale measure for the numeraire process p(t,T ) .
356                        CHANGE OF NUMERAIRE


In interest rate theory we often have our models specified under the risk neutral
martingale measure Q with the money account B as the numeraire. We then
have the following explicit description Q T .

Proposition 24.7 If Q denotes the risk neutral martingale measure, then the
likelihood process



is given by



In particular, i f the Q-dynamics of the T-bond are Wiener driven, i.e. of the form



where W is a (possibly multidimensional) Q Wiener process, then the LT
dynamics are given by



i.e. the Girsanov kernel for the transition from Q to QT is given by the T-bond
volatility v ( t ,T ) .                    -
Proof The result follows immediately from Proposition 24.4 with QT = Q1
and Q0 = Q .

Observing that P ( T ,T ) = 1 we have the following useful pricing formula as an
immediate corollary of Proposition 24.2.

Proposition 24.8 For any T-claim X we have

                          n(t;X ) = p(t, T ) E T [ X I 5 1 ,               (24.24)

where E~ denotes integration w.r.t. Q T .

Note again that the price p ( t , T ) does not have to be computed. It can be
observed directly on the market at time t.
   A natural question to ask is when Q and Q T coincide.
Lemma 24.9 The relation Q = QT holds i f and only i f r is deterministic.

Proof Exercise for the reader.
                                    FORWARD MEASURES


1 24.4.2 An Expectation Hypothesis
  We now make a small digression to discuss the forward rate process f (t, T). The
  economic interpretation of f (t, T) is that this is the risk free rate of return which
  we may have on an investment over the infinitesimal interval [T,T dT] if the+
  contract is made at t. On the other hand, the short rate r(T) is the risk free rate
                                                       +
  of return over the infinitesimal interval [T,T dT], if the contract is made at
  T. Thus it is natural to view f (t, T) (which can be observed at t) as an estim-
  ate of the future short rate r(T). More explicitly it is sometimes argued that if
  the market expects the short rate at T to be high, then it seems reasonable to
  assume that the forward rate f (t, T ) is also high, since otherwise there would be
1
  profits to be made on the bond market.
i
1
      Our task now is to determine whether this reawning is correct in a more p r e
  cise sense, and to this end we study the most formalized version of the argument
I above, known as the "unbiased expectation hypothesis" for forward rates. This
I
  hypothesis then says that in an efficient market we must have
\




    i.e. the present forward rate is an unbiased estimator of the future spot rate. If
    we interpret the expression "an efficient market" as "an arbitrage free market"
    then we may use our general machinery to analyze the problem.
         First we notice that there is no probability measure indicated in (24.25), so
    we have to make a choice.
         Of course there is no reason at all to expect the hypothesis to be true under
    the objective measure P, but it is often claimed that it holds "in a risk neutral
    world". This more refined version of the hypothesis can then be formulated as




    where Q is the usual risk neutral martingale measure. In fact, also this ver-
    sion of the expectation hypothesis is in general incorrect, which is shown by the
    following result.

    Lemma 24.10 Assume that, for all T > 0 we have r(T)/B(T) E L1(Q). Then,
    for every jixed T, the process f (t, T ) is a QT-martingale for 0 5 t 5 T, and in
    particular we have
                                    f ( t , T ) = ET [r(T)IFt].                     (24.27)

    Proof Using Proposition 24.24 with X = r(T) we have

              II(t; X ) = EQ [ r ( ~ ) e :I
                                          - '('1   d'l F~]                    )/.
                                                        = p(t, T ) E ~ [ ~ ( TFt]
                            CHANGE OF NUMERAIRE


This gives us

                ET [r(T)I Ft] = -EQ [ r ( T ) ~ 1
                                 ~ ( tT)
                                       ,
                                                -: r ( s ) d s Ft
                                                                     I I
                                    1 a
                              = --
                                 ~ ( tT,)
                                          -EQ      [,-   .I:r(s)ds
                                                                     I 3tI
                           = ----- = f(t,T).                                 I3
                               ~ ( tT),
We thus see that the expectation hypothesis is false also under Q, but true
under QT. Note, however, that we have different Q~ for different choices of the
maturity date T.

24.5 A General Option Pricing Formula
The object of this section is to give a fairly general formula for the pricing of
European call options, and for the rest of the section we basically follow Geman
et al. (1995). Assume therefore that we are given a financial market with a
(possibly stochastic) short rate r , and a strictly positive asset price process S(t).
   The option under consideration is a European call on S with date of
maturity T and strike price K. We are thus considering the T-claim
                              X = max [S(T)- K, 01,                           (24.28)

and, for readability reasons, we confine ourselves to computing the option price
n(t; X) at time t = 0.
   The main reason for the existence of a large number of explicit option pricing
formulas is that the contract function for an option is piecewise linear. We can
capitalize on this fact by using a not so well-known trick with indicator functions.
Write the option as


where I is the indicator function, i.e.



Denoting the risk neutral martingale measure by Q,we obtain
                  A GENERAL OPTION PRICING FORMULA                             359



In the first term above, we use the measure Q~ having S as numeraire, and for
the second term we use the T-forward measure. From Theorem 24.2 and Pro-
position 24.8 we then obtain the following basic option pricing formula, which is
a substantial extension of the standard Black-Scholes formula.
Proposition 24.11 (General option pricing formula) Given the assump-
tions above, the option price is given by



Here QT denotes the T-forward measure, whereas QS denotes the martingale
measure for the numemire process S(t).
In order to use this formula in a real situation we have to be able to compute
the probabilities above, and the standard condition which ensures computabil-
ity turns out to be that volatilities should be deterministic. Hence we have the
following &sumption.
Assumption 24.5.1 Assume that the process Z S , ~defined by



has a stochastic differential of the form



                                         ) deterministic.
where the volatility process u S , ~ ( t is
   The crucial point here is of course the assumption that the row-vector process
o s , is
       ~ deterministic. Note that the volatility process as always is unaffected by
a change of measure, so we do not have to specify under which measure we check
the condition. It can be done under P as well as under Q.
   We start the computations by writing the probability in the second term of
(24.29) as




            is an asset price, normalized by the price of a T-bond, it is a Q~
Since Z S , ~
martingale, so its QT-dynamics are given by

                              T = ZS,T(~)Qs,T
                       ~ Z S ,(t)           (t) d w T (t).                 (24.33)
This is basically GBM, driven by a multidimensional Wiener process, and it is
easy to see that the solution is given by
    F
    !   360                         CHANGE OF NUMERAIRE


        In the exponent we have a stochastic integral and a deterministic time integral.
    r   Since the integrand in the stochastic integral is deterministic, an easy extension
    D
    F
    i
    f
        of Lemma 4.15 shows that the stochastic integral has a Gaussian distribution
        with zero mean and variance
                                                                                                  I
        The entire exponent is thus normally distributed, and we can write the
I
I       probability in the second term in (24.29) as
                                                                                                  1

    I
        where

                                                   q L:,T t1 )
        Since the first probability term in (24.29) is a Qs-probability, it is natural to write
        the event under consideration in terms of a quotient with S in the denominator.
                                                                                                  I
    I   Thus we write

               QS(s(T) 2 K) = Q      ('5 +) QS(YS,T(T) 5 F) ,
                                   s P(T TI
                                                           =
                                                                                1      (24.37)

        where YS,T is defined by




        Under QS the process YS,T has zero drift, so its Qs-dynamics are of the form

                                 dYs,~(t)= Y s , ~ ( t ) S s , ~ d( tw
                                                                     ) S (t).
        Since YS,T = z&, an easy application of I~B'S formula gives us asYT(t) =
        -us,~(t). Thus we have




        and again we have a normally distributed exponent. Thus, after some
        simplification,
                                       Q S ( S ( ~2
                                                  > K ) = N[dll,
                                                                                                  1
        where


              We have thus proved the following result.
                                                                                                  1
r




                                    THE HULL-WHITE MODEL


        Proposition 24.12 (Geman- El Karoui-Rochet) Under the conditions
        given in Assumption 24.5.1, the price of the call option defined in (24.28) is
        given by the formula



        Here dp and dl are given in (24.36) and (24.38), respectively, whereas C;,,(T)
        is defined by (24.35).

      24.6 T h e Hull- White Model
      As a concrete application of the option pricing formula of the previous sec-
    i
    I
      tion, we will now consider the case of interest rate options in the Hull-White
      model (extended VasiEek). To this end recall that in the Hull-White model the
      Q-dynamics of r are given by

                                    d r = {%(t)- ar) dt    + u dW.                      (24.40)
        From Section 22.3 we recall that we have an affine term structure



        where A and B are deterministic functions, and where B is given by



            The project is to price a European call option with exercise date TI and
        strike price K, on an underlying bond with date of maturity Tz,where TI < T p .
        In the notation of the general theory above this means that T = TI and that
        S(t) = p(t, T p ) . We start by checking Assumption 24.5.1, i.e. if the volatility, (T,,
    I   of the process
                                            Z(t) =-~ ( T2)
                                                         t                             (24.43)
                                                   ~ ( tTl)
                                                         ,
        is deterministic. (In terms of the notation in Section 24.5 Z corresponds to ZS,T
        and u, corresponds to
            Inserting (24.41) into (24.43) gives



        Applying the It6 formula to this expression, and using (24.40), we get the
        Q-dynamics
                              dZ(t) = Z(t) {- . ) dt   + Z(t) .   U, (t) dW,            (24.44)
        where
362                        CHANGE OF NUMERAIRE


Thus a, is in fact deterministic, so we may apply Proposition 24.12. We obtain
the following result, which also holds (why?) for the VasiEek model.
Proposition 24.13 (Hull- White bond option) I n the Hull-White model
(24.40) the price, at t = 0, of a European call with strike price K , and time
of maturity TI, o n a bond maturing at T2 is given by the formula



where




   We end the discussion of the Hull-White model, by studying the pricing
problem for a claim of the form



Using the T-bond as numeraire Proposition 24.8 gives us



so we must find the distribution of r(T) under QT, and to this end we will use
Theorem 24.5 (with Q as Q0 and QT as Q1). We thus need the volatility of the
T-bond, and from (24.41)-(24.42) we obtain bond prices (under Q) as



where the volatility v(t, T) is given by

                               v(t, T) = -aB(t, T).

Thus, using Theorem 24.5 and the fact that the money account B has zero
volatility, the Girsanov kernel for the transition from Q to QT is given by



The QT-dynamics of the short rate are thus given by



where wT is a QT-Wiener process.
                          THE GENERAL GAUSSIAN MODEL                              363


       We observe that, since v(t, T) and O(t) are deterministic, r is a Gaussian
    process, so the distribution of r(T) is completely determined by its mean and
    variance under QT. Solving the linear SDE (24.53) gives us




,      We can now compute the conditional QT-variance of r(T), a: (t, T), as




    Note that the QT-mean of r(T), m,(t,T) = E~ [r(T)(Ft],does not have to be
    computed at all. We obtain it directly from Lemma 24.10 as



    which can be observed directly from market data.
        Under Q T , the conditional distribution of r(T) is thus the normal distribu-
    tion N[f (t, T), ur(t, T)], and performing the integration in (24.50) we have the
    final result.
    Proposition 24.14 Given the assumptions above, the price of the claim X =
    @(r(T))is given by




    where o$(t, T)is given by (24.55).

    24.7 The General Gaussian Model
    In this section we extend our earlier results, by computing prices of bond options
    in a general Gaussian forward rate model. We specify the model (under Q) as



    where W is a d-dimensional Q-Wiener process.
    Assumption 24.7.1 We assume that the volatility vector function

                            4,T ) = [m(t,T), . ., ~ d ( tT)]
                                                          ,
    is a deterministic function of the variables t and T.
364                        CHANGE OF NUMERAIRE


Using Proposition 20.5 the bond price dynamics under Q are given by



where the volatility is given by




    We consider a European call option, with expiration date To and exercise
price K, on an underlying bond with maturity TI (where of course To < TI). In
order to compute the price of the bond, we use Proposition 24.12, which means
that we first have to find the volatility U T ~ , Tof~ the process

                                          ~ ( tTl)
                                   Z(t) = ---   ,
                                          P(t, To) '
An easy calculation shows that in fact




This is clearly deterministic, so Assumption 24.5.1 is satisfied. We now have the
following pricing formula.
Proposition 24.15 (Option prices for Gaussian forward rates) The price,
at t = 0, of the option

                           X = max [p(To,TI) - K, 0]
is given by
                  n(o; x ) = p(0, T I ) N [ ~-~ K
                                                I . P(O,T O > N [ ~ ~ I ,   (24.61)
where

                       dl =
                              1. (P(0, Tl)/KP(O, To))   + C$, ,To ,
                                           4%'

and UT,,T, is given by (24.60).

Proof    Follows immediately from Proposition 24.12.
                                       CAPS AND FLOORS


        24.8 Caps and Floors
        The object of this section is to present one of the most traded of all interest rate
        derivatives-the c a p a n d to show how it can be priced.
            An interest rate c a p is a financial insurance contract which protects you from
        having to pay more than a prespecified rate, the cap rate, even though you have
        a loan at a floating rate of interest. There are also floor contracts which guar-
I
        antee that the interest paid on a floating rate loan will never be below some
        predetermined floor rate. For simplicity we assume that we are standing at
        time t = 0, and that the cap is to be in force over the interval [0, TI. Technically
        speaking, a cap is the sum of a number of basic contracts, known as caplets,
        which are defined as follows:
             The interval [0, TI is subdivided by the equidistant points



             We use the notation 6 for the length of an elementary interval, i.e.
             6 = Ti - Ti-l. Typically, 6 is a quarter of a year, or half a year.
             The cap is working on some principal amount of money, denoted by K ,
             and the c a p rate is denoted by R.
             The floating rate of interest underlying the cap is not the short rate r ,
             but rather some market rate, and we will assume that over the interval
        *
             [Ti-l, Ti] it is the LIBOR spot rate L(T,-1, Ti) (see Section 20.2).
             Caplet i is now defined as the following contingent claim, paid at Ti,



            We now turn to the problem of pricing the caplet, and without loss of gener-
    ,   ality we may assume that K = 1. We will also use the notation x+ = max[x, 01,
        so the caplet can be written as



    IL Lwhere     = L(Ti-l,Ti). Denoting p(Ti-~,Ti) by p, and recalling that




        we have                                                                 .   +   .   XI
366                        CHANGE OF NUMERAIRE


                +
where R* = 1 6R. It is, however, easily seen (why?) that a payment of
(R*/p) ((l/R*) - p)f at time Ti is equivalent to a payment of R* ((l/R*) - p)+
at time Ti-l.
    Consequently we see that a caplet is equivalent to R* put options on an
underlying Ti-bond, where the exercise date of the option is at Ti-l and the
exercise price is 1/R*. An entire cap contract can thus be viewed as a portfolio
of put options, and we may use the earlier results of the chapter to compute the
theoretical price.
    A different approach to the pricing of caplets (and hence of caps) is to view
the caplet claim in (24.62) as a formal option directly on the LIBOR rate, and
noting that the LIBOR forward rate L(t; Ti, Ti+l) is a martingale under QT'+l.
This approach will be investigated in some detail in the chapter on LIBOR
market models below.

24.9 Exercises
Exercise 24.1 Derive a pricing formula for European bond options in the
HeLee model.                               7


Exercise 24.2 A Gaussian Interest Rate Model
Take as given a HJM model (under the risk neutral measure Q) of the form

        df (t, T) = a(t, T) dt   + u1 (T - t)dWl (t) + 0 2 e-a(T-t) dW2(t),
where a1 and 02 are constants.
   (a) Derive the bond price dynamics.
  (b) Compute the pricing formula for a European call option on an underlying
       bond.

Exercise 24.3 Prove that a payment of (lip) (A - p)+ at time Ti is equival-
ent to a payment of (A - p)+ at time Tiwl, where p = p(T,-1, Ti), and A is a
deterministic constant.
Exercise 24.4 Prove Lemma 24.9.
Exercise 24.5 Use the technique above in order to prove the pricing formula
of Proposition 22.5, for bond options in the HwLee model.

24.10 Notes
The first usage of a numeraire different from the risk free asset B was probably
in Merton (1973), where however the technique is not explicitly discussed. The
first to explicitly use a change of numeraire change was Margrabe (1978), who
(referring to a discussion with S. Ross) used an underlying stock as numeraire
in order to value an exchange option. The numeraire change is also used in
Harrison and Kreps (1979), Harrison and Pliska (1981) and basically in all later
                                   NOTES                                  367


works on the existence of martingale measures in order to reduce (as we did
in Chapter 10) the general case to the basic case of zero short rate. In these
papers, the numeraire change as such is however not put to systematic use as
an instrument for facilitating the computation of option prices in complicated
models. In the context of interest rate theory, changes of numeraire were then
used and discussed independently by Geman (1989) and (in a Gaussian frame-
work) Jamshidian (1989), who both used a bond maturing at a fixed time T as
numeraire. A systematic study of general changes of numeraire has been carried
out by Geman, El Karoui and h c h e t in a series of papers, and many of the
results above can be found in Geman et al. (1995). For further examples of the
change of numeraire technique, see Benninga et al. (2002).
    In the previous chapters we have concentrated on studying interest rate models
    based on infinitesimal interest rates like the instantaneous short rate and the
    instantaneous forward rates. While these objects are nice to handle from a math-
    ematical point of view, they have two main disadvantages:
          The instantaneous short and forward rates can never be observed in
          real life.
          If you would like to calibrate your model to c a p or swaption data, then
          this is typically very complicated from a numerical point of view if you use
          one of the "instantaneous" models.
    A further fact from real life, which has been somewhat disturbing from a
    theoretical point of view is the following:
          For a very long time, the market practice has been to value caps, floors, and
          swaptions by using a formal extension of the Black (1976) model. Such an
          extension is typically obtained by an approximation argument where the
          short rate at one point in the argument is assumed to be determinstic, while
          later on in the argument the LIBOR rate is assumed to be stochastic. This
          is of course logically inconsistent.
          Despite this, the market happily continues to use Black-76 for the pricing
          of caps, floors, and swaptions.
    In a situation like this, where market practice seems to be at odds with academic
I   work there are two possible attitudes for the theorist: you can join them (the
I
    market) or you can try to beat them, and since the fixed income market does
I
    not seem to collapse because of the use of Black-76, the more realistic alternative
    seems to be to join them.
        Thus there has appeared a natural demand for constructing logically consist-
I   ent (and arbitrage free!) models having the property that the theoretical prices
I
I
    for caps, floors and swaptions produced by the model are of the Black-76 form.
I   This project has in fact been carried out very successfully, starting with Miltersen
I   et al. (1997), Brace et al, (1997) and Jamshidian (1998). The basic structure of
    the models is as follows:
          In stead of modeling instantaneous interest rates, we model discrete mar-
          ket rates like LIBOR rates in the LIBOR market models, or forward swap
          rates in the swap market models.
          Under a suitable choice of numeraire(s), these market rates can in fact be
          modeled log normally.
               CAPS: DEFINITION AND MARKET PRACTICE                            369


     The market models will thus produce pricing formulas for caps and fioors
     (the LIBOR models), and swaptions (the swap market models) which are
y    of the Black-76 type and thus conforming with market practice.
F    By construction the market models are thus very easy to calibrate to mar-
:    ket data for caps/floors and swaptions respectively. They are then used to
     price more exotic products. For this later pricing part, however, we will
     typically have to resort to some numerical method, like Monte Carlo.

25.1 Caps: Definition and Market Practice
In this section we discuss LIBOR caps and the market practice for pricing and
quoting these intruments. To this end we consider a fixed set of increasing
maturities To, TI,.. . , TN and we define ai, by



The number cri is known as the tenor, and in a typical application we could for
example have all ai equal to a quarter of a year.
Definition 25.1 W e let pi(t) denote the zero coupon bond price p(t, T,) and let
Li(t)denote the LIBOR forward rate (see Section 20.2), contracted at t, for the
period [Ti-1, Ti], 2.e.




We recall that a cap with cap rate R and resettlement dates To,.. . , TN is
a contract which at time Ti gives the holder of the cap the amount



for each i = 1,. . . , N. The cap is thus a portfolio of the individual caplets
XI,.. . , XN. We note that the forward rate Li(Ti-1) above is in fact the spot rate
at time       for the period [Ti-1,Ti],and determined already at time          The
amount Xi is thus determined at Ti-1 but not payed out until at time Ti. We
also note that, formally speaking, the caplet Xiis a call option on the underlying
spot rate.
    The market practice is to use the Black-76 formula for the pricing of caplets.
Definition 25.2 (Black's Formula for Caplets) The Black-76 formula for
the caplet
                    Xi = ai - m a ~ [ L ( T i -T,)
                                               ~ , - R, 01,     (25.3)
is given by the expression
                      LIBOR AND SWAP MARKET MODELS


where




The constant ui is known as the B l a c k volatility for caplet No. i. In order to
make the dependence o n the Black volatility ai explicit we will sometimes write
the caplet price as ~ a ~ l f a,).
                              it;
It is implicit in the Black formula that the forward rates are lognormal (under
some probability measure), but until recently there was no firm theoretical
base for the use of the Black-76 formula for caplets. One of the main goals
of this chapter is precisely that of investigating whether it is possible to build
an arbitrage free model object which produces formulas of the Black type for
caplet prices.
    In the market, cap prices are not quoted in monetary terms but instead in
terms of i m p l i e d Black volatilities, and these volatilities can furthermore be
quoted as flat volatilities or as s p o t volatilities (also known as forward
volatilities) . They are defined as follows.
    Let us consider a fixed date t , the fixed set of dates To,TI,. . ., TN where
t <_ To, and a fixed cap rate R. We assume that, for each i = 1,. .. , N, there
is a traded cap with resettlement dates To,TI, . . . ,Ti, and we denote the corres-
ponding observed market price by C a p y . From this data we can easily compute
the market prices for the corresponding caplets as



with the convention C a p r ( t ) = 0. Alternatively, given market data for caplets
we can easily compute the corresponding market data for caps.
D e f i n i t i o n 25.3 Given market price data as above, the implied Black volatilities
are defined as follows.
         The implied flat volatilities a1,.. . , (TN are defined as the solutions of the
         equations
                                        i
                       C a p y ( t )= capl:(t; i i ) , i = 1,. . . , N .       (25.8)
                                k=l
        The implied forward or s p o t volatilities al,. . . ,*N are defined as solu-
        tion.~of the equations


A sequence of implied volatilities el,. . . , i 7 ~(Bat or spot) is called a volatility
t e r m s t r u c t u r e . Note that we use the same notation a, for flat as well as for
spot volatilities. I n applications this will be made clear by the context.
                          THE LIBOR MARKET MODEL                                  371


Summarizing the formal definition above, the flat volatility ai is volatility implied
by the Black formula if you use the same volatility for each caplet in the cap
with maturity Ti. The spot volatility oi is just the implied volatility from caplet
No. i. The difference between flat and forward volatilities is thus similar to the
difference between yields and forward rates. A typical shape of the volatility
term structure (flat or spot) for caps with, say, a three months tenor is that it
has an upward hump for maturities around two-three years, but that the long
end of the curve is downward sloping.

25.2 T h e LIBOR Market Model
We now turn from market practice to the construction of the so called LIBOR
market models. To motivate these models let us consider the theoretical arbitrage
free pricing of caps. The price q ( t ) of a caplet No. i is of course on the one hand
given by the standard risk neutral valuation formula

  Capli(t) = aiEQ e- J? TT.'(.)d" .
                      [               max[Li(Tj-1)-R,~]13t], i = l , ...,N,
but it is much more natural to use the Ti forward measure to obtain

                       [max [Li(Ti-1) - R, 011 Ft],
    Capli(t) = aipi(t)~Ti                                   i =1 . . . , N ,   (25.10)

where ~~i denotes expectation under the QT'. In order to have a more compact
notation we will from now on denote Q T 9 y Q i .
   The focal point of the LIBOR models is the following simple result.
Lemma 25.4 For every i = 1,.. . , N, the LIBOR process L, is a martingale
under the comsponding fornard measure QTj, on the internal [0, Ti-11.
Proof    We have
                                         pi-1 (t)
                              ai. Li(t) =-- 1.
                                          pi (t)
The process 1 is obviously a martingale under any measure. The process pi- 1 /pi
is the price of the      bond normalized by the numeraire pi. Since p, is the
numeraire for the martingale measure QTi, the process piPl/pi is thus trivially
a martingale on the interval [O, Ti-l]. Thus aiLi is a martingale and hence Li is
also a martingale.
The basic idea is now to define the LIBOR rates such that, for each i, Li(T)
will be lognormal under "its own" measure Q2, since then d l caplet prices in
(25.10) will be given by a Black type formula. In order to do this we consider
the following objects as given a priori
                                         .
      A set of resettlement dates To,. . , TN.
      An arbitrage free market bond with maturities To,.. ., TN.
                                    n e r WN.
      A k-dimensional ~ ~ - ~ i eprocess
    372                 LIBOR AND SWAP MARKET MODELS


4         For each i = 1,. . . , N a deterministic function of time ui(t).
          An initial nonnegative forward rate term structure L1(0),. . . , LN(O).
          For each i = 1,.. . , N, we define Wi as the k-dimensional Qi-Wiener
          process generated by W N under the Girsanov transformation Q N + Qi.
    Definition 25.5 If the LIBOR forward rates have the dynamics
                                                                                          I

                       dLi(t) = Li(t)oi(t)d w i (t),   i = 1,. . . , N ,

    where Wi is Q i - Wiener as described above, then we say that we have a discrete
    tenor LIBOR market model with volatilities 01, . . . , ON.
    From the definition above it is not obvious that, given a specification of
    01,.. . , ON, there exists a corresponding LIBOR market model. In order to arrive
    at the basic pricing formulas a quickly as possible we will temporarily ignore the
    existence problem, but we will come back to it below and thus provide the
    missing link.

    25.3 Pricing Caps in the LIBOR Model
    Given a LIBOR market model, the pricing of a caplet, and hence also a cap, is
    trivial. Since Li in (25.11) is just a GBM we obtain



    Since ui is assumed to be deterministic this implies that, conditional on Ft,
    Li(T) is lognormal, i.e. we can write



    where Y,(t, T) is normally distributed with expected value




    and variance
                                                                               (25.13)

    Using these results and (25.10), a simple calculation gives us the pricing formula
    for caps. Alternatively we see that the expectation Ei for the cap price in (25.10)
    is just the call price, within the Black-Scholes framework, in a world with zero
    short rate on an underlying traded asset with lognormal distribution as above.
    Proposition 25.6 In the LIBOR market model, the caplet prices are given by
             TERMINAL MEASURE DYNAMICS AND EXISTENCE                             373


where




with C, defined by (25.13).
   We thus see that each caplet price is given by a Black type formula.
Remark 25.3.1 Sometimes it is more convenient working with a LIBOR model
of the form
               dLi(t) = L i ( t ) ~ i ( tdwi(t),
                                         )       i = 1, . . . , N, (25.17)
where ui(t) is a scalar deterministic function, Wi is a scalar @-wiener process.
Then the formulas above still hold if we replace llu,112 by u:. We can also allow
for correlation betweep the various Wiener processes, but this will not affect the
pricing of caps and floors. Such a correlation will however affect the pricing of
more complicated products.

25.4 Terminal Measure Dynamics and Existence
We now turn to the question whether there always exists a LIBOR market model
for any given specification of the deterministic volatilities 01,. . . , UN. In order
                                                                        .
to even get started we first have to specify all LIBOR rates L1,. . , LN under
one common measure, and the canonical choice is the terminal measure Q N .
    Our problem is then basically that of carrying out a two stage program:
     Specify all LIBOR rates under Q N with dynamics of the form

        dLi(t)=L*(t)pi(t,L(t))dt+Li(t)ui(t)dwN(t),
                                              i = l , . . . , N , (25.18)

     where L(t) = [Ll(t), . . . , LN(t)]*, and p, is some deterministic function.
                                                       .
     Show that, for some suitable choice of p1, . . , p ~ the  , Q N dynamics in
     (25.18) will imply QZ dynamics of the form (25.11).
In order to carry out this program we need to see how wNis transformed into
Wi as we change measure from Q N to Qi. We do this inductively by studying
the effect of the Girsanov transformation from Q' to QZ-l.
Remark 25.4.1 We have a small but irritating notational problem. LIBOR
rates are typically denoted by the letter "L" , but this is also a standard notation
for a likelihood process. In order to avoid confusion we therefore introduce the
notational convention that, in this chapter only, likelihood processes will be
denoted by the letter q. In particular we introduce the notation
374                  LIBOR AND SWAP MARKET MODELS


In order to get some idea of how we should choose the Q N drifts of the LIBOR
rates in (25.18) we will now perform some informal calculations. We thus (inform-
ally) assume that the LIBOR dynamics are of the form (25.18) under Q N and
that they are also of the form (25.11) under their own martingale measure. From
Proposition 24.4 we know that the Radon-Nikodym derivative 4 is given by

                                       ~ i ( 0 .) p j o
                               4 (t) = -
                                           ~ j ( 0 ) ~ i ( t' )
and in particular

                    qj-l ( t )= a*. pi-l(t)
                                    -= ai (1                + aiLi(t)) ,
                                     pi 0 )
where ai = pi(O)/pi-l(0). From this formula we can now easily compute the q;-l
dynamics under Q" as
                            dq;-' (t) = aiai dLi (t).                  (25.22)
Assuming (still informally) that the Li-dynamics are as in (25.11), and using
(25.1) we then obtain

          dq;-l (t) = aiai Li (t)ui(t) dwi(t)                                   (25.23)




                    = qii-1 (t)aiair               -(t) - 1 u (t) d w i t )
                                                 ("-I                           (25.25)
                                      qi   (t)          pi(t)
Using (25.21) we finally obtain

                                                            ui (t) d w i (t).
                                                  a     2



Thus, the Girsanov kernel for qj-l is given by




so from the Girsanov Theorem, we have the relation

                    dwi(t) =
                                aiLi (t) ~ t ( tdt)             + dwi-'(t).     (25.28)
                                  +
                               1 aiLi(t)
Applying this inductively we obtain
                             I




              TERMINAL MEASURE DYNAMICS AND EXISTENCE                                       375


  and plugging this into (25.11) we can finally obtain the Q N dynamics of L,

     All this was done under the informal assumption that there actually existed
  a LIBOR model satisfying both (25.11) and (25.18). We can however easily turn
  the argument around and we have the following existence result.
  Proposition 25.7 Consider a given volatility structure 01, a ~where
                                                                    ,     each a,
  is assumed to be bounded, a probability measure Q N and a standard Q N - Wiener
  process W N . Define the processes L1,. . . , LN by


                                  +
                                 1 akLk(t)                  )
                                                ak(t)at(t) d t + ~ . ( t ) a i ( t ) d ~ ~ ( t ) ,

                                                                          (25.30)
  for i =1,.. . , N where we use the convention     c:(.
                                                  . .) = 0. Then the Q"-dynamics
  of L, are given by (25.11). Thus there exists a LIBOR model with the given
  volatility structure.
  Proof Given that (25.30) has a solution for i = 1,... , N, and that the Girsanov
  kernel in (25.27) satisfies the Novikov condition, the proof consists of exactly the
  calculations above. As for the existence of a solution of (25.30), this is trivial for
  i = N since then the equation reads

                            d L ~ ( t=
                                     ) L i ( t ) ~ ~ dwN(t),
                                                     (t)

  which is just GBM and since UN is bounded a solution does exist. Assume now
  that (25.30) admits a solution for k = i + 1, . . . , N. We can then write the ith
  component of (25.30) as



  where the point is that pi does only depend on Lk for k = i 1,.. . , N and +
  not on Li. Denoting the vector (Li+l, . . . , LN) by L:~ we thus have the explicit
  solution
                                      t
                                                             1
             Li(t) = ~ i ( 0exp{Jd
                             )            (Pi   L I N + ~ (-~ i)j]I I ~ ~ I IdS}
                                                                              ~(~))

                       x e x p { L /Ac [s, LG,(~)] ~wN(.)} 7

1 thus proving existence by induction. It also follows by induction that, given an
  initial positive LIBOR term structure, all LIBOR rate processes will be positive.
  From this we see that the Girsanov kernel in (25.27) is also bounded and thus it
  satisifies the Novikov condition.
376                   LIBOR AND SWAP MARKET MODELS


Remark 25.4.2 Sometimes it is more convenient working with a LIBOR model
of the form
               dLi(t) = Li(t)ui(t) dWi (t), i = 1, . . . , N,     (25.31)

where ui(t) is a scalar deterministic function, Wi is a scalar Qz-Wiener process,
and where we assume a given correlation structure dWi(t) dWj(t) = pij. This
can easily be obtained by a small variation of the arguments above, and eqn
(25.30) is then replaced by




                                                             (25.32)
where W? is the QN-wiener process generated by W, under the Girsanov
transformation Q' + Q N .

25.5   Calibration and Simulation
Suppose that we want to price some exotic (i.e. not a cap or a floor) interest
rate derivative, like a Bermudan swaption, performing this with a LIBOR model
means that we typically carry out the following two steps:
        Use implied Black volatilities in order to calibrate the model parameters
        to market data.
      a Use Monte Carlo (or some other numerical method) to price the exotic
        instrument.
In this section we mainly discuss the calibration part, and only comment briefly
on the numerical aspects. For numerics and simulation see the Notes.
    Let us thus assume that, for the resettlement dates To,.. ..,TN,we are given
an empirical term structure of implied forward volatilities, 81,. . . , 8~ i.e. the
implied Black volatilities for all caplets. For simplicity we assume that we are
standing at time t = 0.Comparing the Black formula (25.4) with (25.14) we see
that in order to calibrate the model we have to choose the deterministic LIBOR
volatilities ul (.), . . . , UN (.), such that




 Alternatively, if we use a scalar Wiener process for each LIBOR rate we must
choose the scalar function ui(.) such that
                          CALIBRATION AND SIMULATION                                        377


     This is obviously a highly underdetermined system, so in applications it is
  common to make some structural assumption about the shape of the volatility
  functions. Below is a short and incomplete list of popular specifications. We use
  the formalism with a scalar Wiener process for each forward rate, and we recall
  that Lilives on the time interval 0 5 t 5       We also introduce the temporary
  convention that T-1 = 0:
     1. For each i = 1, . . ., N, assume that the corresponding volatility is constant
        in time, i.e. that
                                           oj(t) = a,
        for 0 5 t
     2. For each i = 1,. . . , N, assume that oi is piecewise constant, i.e. that

                      o,(t)=oij,      forTj-1 < t I T , , j = O ,...,i - 1 .

     3. As in item 2, but with the requirement that the volatility only depends
        on the number of resettlement dates left to maturity, i.e. that

                       ~ i ~ = & , for?-1        < t L T j , j = O ,...,i - I , ,

        where    a,
                  . . . , ON are fixed numbers.
     4. As in item 2, with the further specification that

                       023. . = p., Y.~ , forTj-l<t<T', j = O ,..., 2-1,

        where pi and y, are fked numbers.
     5. Assume some simple functional parameterized form of the volatilities such
        as for example
                             oi(t) = qa(Ta-l - t)eP'(T*-'-t)
        where qa(.)is some polynomial and pi is a real number.
  Assuming that the model has been calibrated to market data, Monte Carlo
  simulation is the standard tool for computing prices of exotics. Since the SDEs
  (25.30) and (25.32) are too complicated to allow analytical solutions, we have to
  resort to simulation of discretized versions of the equations.
     The simplest way to discretize (25.30) is to introduce a grid of length h and
i use the following recursive Euler scheme:


               + 1)h) = L, (nh) - La(nh)
      L, ((n
                                            ("      ( I * ~ ~ o,(nh)o;(nh)
                                             k=i+l 1-k akLk(nh)
                                                                ( ~ ~ )
                                                                                    )   h

                        + ~ , ( n h ) a ~ ( n h ) { ~+~ 1)h)
                                                        ( ( n - w N ( n h ) ).      (25.35)
378                   LIBOR AND SWAP MARKET MODELS


   However, from the point of view of numerical stability it is preferable to use
a discretization of the SDE for ln(Li). Using It8 we easily obtain



                     C
                                              N
  d ln 4 ( t ) = -   -u:(t)   + ui(t)o;(t)
                                             k=i+l
                                                       ukLk(t)
                                                       +akLk(t) )+
                                                                dt     ui(t) dwN(t).


The point of this is that we now have a deterministic diffusion part, which leads
to improved convergence of the corresponding discrete scheme

                                                       N

                                    (
lnL,((n+ 1)h) = lnLi(nh) - h -ai (n )
                                                  +
                                                               ukLk(nh) u,(nh)u
                                                      k=i+l l + u k L k ( n h )

                     + ui(nh) {wN((n + 1)h) - wN(nh)).
25.6 The Discrete Savings Account
In the LIBOR models discussed above there exists a forward neutral martingale
measure Q" = QT*for each i = 1, . . . , N, but so far we have not seen any risk
neutral measure QB for the bank account B, (also known as the savings account)
and in fact we have not even seen a bank account process in the model. A natural
question is therefore to investigate whether the LIBOR model will automatically
imply a money account process B, as well as a corresponding risk neutral measure
QB.
   In this context it is, however, not quite clear what one would mean by a bank
account. Since we are working in continuous time, one possibility is to look for
a continuous bank account of the form we have seen earlier in the book, i.e. one
with dynamics
                                  dB(t) = r(t)B(t) dt,

where r is the continuously compounded short rate. However, since we have
modeled discrete forward rates it would be unnatural to mix those with a con-
tinuously compounded short rate, so the natural choice would be to look for a
bank account which is resettled at the points To,.. . , TN.
    In order to construct the bank account we recall that the essential property
is that it should be riskless on a local time scale, i.e. riskless between T, and
TN for each n. The obvious way to achieve this is by forming the discretely
rebalanced self financing portfolio specified by constantly rolling over the bond
of the shortest remaining maturity. More formally, suppose that we are standing
at To and consider the following portfolio strategy:
      1. At To invest one unit of money into the TI bond.
      2. At Tl sell the TI bond and invest everything in the T2 bond.
      3. Repeat this procedure recursively until TN.
                                          SWAPS                                   379


    Denoting the value of this self financing portfolio by B we immediately have




, and using the relation p(Tn, TN) = [1+ alvL(Tn,TN)]-' we obtain the discrete
    B dynamics as




    or, more explicitly
                                           n-1    '
                                                I1
                                           rI
                               B(Tn) = k=O ,Tk, Tk,,)
1 alternatively,
I                                   n-1
                          B(Tn) =         P + at+lL(Tk, Tk+l)].               (25.42)
                                    k=O
      We note that B is indeed locally risk free in the sense that B(TN) is known
  already at time Tn, i.e. as a discrete time process B is predictable in the sense of
  Appendix C.
/     We can now easily determine the martingle measure corresponding to the
1 discrete saving account.
I
    Proposition 25.8 The Radon-Nikodym derivative for the change from Q N to
    QB is given by



    Proof    From Proposition 24.4 we have (on 3 T N )




    and since P(TN,TN)= 1 and B(0) = 1 we have the result.


    25.7 Swaps
i   We now move from the LIBOR Market Models to the the Swap Market Models.
                                                        .
I
I
    Consider a fixed set of resettlement dates To,TI,.. , TN, with the usual notation
    a*= Ti - Ti-l. From Section 20.3.3 we recall that in an interest rate swap, a
    set of floating rate payments (the jloaiing leg) are exchanged for a set of fixed
    payments (the fixed leg). The terminology for swaps always refers to the fixed
11/111   380                     LIBOR AND SWAP MARKET MODELS



lli      leg, so the holder of a reciever swap with tenor TN - Tn will, at the dates
         Tn+1,. . , T N ,receive the fixed leg and pay the floating leg. For a payer swap
         the payments go in the other direction. For short we will refer to this swap as a
         Tn x (TN- Tn)swap. We now make this precise.
         Definition 25.9 The payments i n a Tnx (TN-Tn) payer swap are as follows:
              Payments will be made and received at Tn+1,Tn+2,. . . , TN.
           a For every elementary period [Ti,Ti+l],i = n, . . . , N - 1, the LIBOR rate
              Li+l(Ti)is set at time Ti and the floating leg

                                                a i + l . Li+l (Ti),               (25.44)
                   is received at Ti+l.
111            a   For the same period the jixed leg

                                                       ai+l . K                    (25.45)
               is payed at Ti+l.
            It is easy to see (exercise for the reader) that the arbitrage free value, at
         t < Tn,of the floating payment made at Ti is given by


         so the total value of the floating side at time t for t 5 Tn equals




         The total value at time t of the fixed side equals
                                 N-1                              N
                                  C
                                  i=n
                                      P(t,Ti+l)ai+tK = K C aiP,(t),
                                                        i=n+l
         so the net value PS:(t; K ) of the Tn x (TN- Tn)payer swap at time t < Tn is
         thus given by




               From Section 20.3.3 we recall the following definition.
         Definition 25.10 The par or forward swap rate ~ z ( tof) the Tnx (TN-Tn)
         swap is the value of K for which PS;(t; K ) = 0, i.e.
            SWAPTIONS: DEFINITION AND MARKET PRACTICE                          381


The first crucial observation to make at this point is that in the formula for the
                                                    N
par swap rate we can interpret the denominator xi=,+,      ajpi(t) as the value, at
t of a traded asset, namely as a buy-and-hold portfolio consisting, for each i, of
ai units of the zero coupon bond maturing at Ti. This object is so important
that we give it a separate name.
Definition 25.11 For each pair n, k with n < k, the process Sk(t) is defined by


                             sk(t) =    C nip@,Ti).
                                       i=n+l
                                                                           (25.48)


S: is referred to as the accrual factor or as t h e present value of a basis
point.
   With this terminology we can express the par swap rate as




    In the market there are no quoted prices for different swaps. Instead there
are market quotes for the par swap rates R z , and we see that from these we can
easily compute the arbitrage free price for a payer swap with swap rate K by
the formula
                       PS: (t; K ) = (R;(t) - K):S (t).                   (25.50)



25.8 Swaptions: Definition a n d Market Practice
The definition of a swaption (short for "swap option") is as follows.
Definition 25.12 A Tn x (TN - T,) payer swaption with swaption strike
K is a contract which at the exercise date T, gives the holder the right but not
the obligation to enter into a T, x (TN - T,) swap with the fied swap rate K .
   We thus see that the payer swaption is a contingent Tn-claim X
                                                                :       defined by

                          : = max [PS,N(T,; K );
                          X                          01 ,                   (25.51)

which, using (25.49), we can write as

                      XnN = max [R: (T,) - K ;   01 S: (T,).
Expressed in the numeraire Sf, the swaption is thus formally a call option on
R r with strike price K . The market practice is to compute swaption prices by
382                 LIBOR AND SWAP MARKET MODELS


using a formal extension of the Black-76 formula and to quote prices in terms of
the implied Black volatilities.
Definition 25.13 (Black's Formula for Swaptions) The Black-76 formula
for a T, x (TN- T,) payer swaption with strike K is defined as



where




The constant I J , , ~ is known as the Black volatility . Given a market price for
the swaption, the Black volatility implied by the Black formula is referred to as
the implied Black volatility.
As was the case with the Black formula for caps, the Black swaption formula
has been used by the market for a long time, without any explicit coherent
underlying model. Our task is thus to build an arbitrage free model with the
property that the theoretical prices derived within the model have the structure
of the Black-76 formula above.

25.9 The Swap Market Models
From (25.52) it is clear that the natural choice of numeraire for swaptions is the
accrual factorSr,   and since the accrual factor has an intepretation as the value
of a traded asset it is a bona fide choice of numeraire from the point of view of
martingale measures. We now have the following simple but important result.
Lemma 25.14 Denote the martingale measure for the numeraire S: by Q:.
Then the forward swap rate R: is a Q:-martingale.
Proof This follows immediately from the fact that R: is the value of a self
financing portfolio (a long T,, bond and a short Tk bond), divided by the value
of the self-financing portfolio Sk.
Thus the forward swap rate, like the LIBOR rates earlier, is a martingale under
a suitable choice of numeraire, and the accrual factor plays the same role for
swap market models as the bond prices did for the LIBOR models. The basic
idea in the swaption market model which we will discuss below is then simply to
model the forward swap rates Rr lognormally as GBM under the appropriate
measures.
Definition 25.15 Given the resettlement dates To,TI, T N ,consider a fixed sub-
set N of all positive integer pairs (n,k ) such that 0 I n < k I N . Consider
           PRICING SWAPTIONS IN THE SWAP MARKET MODEL                            383


furthermore, for each (n,k) E N , a deterministic function of time un,k(-). A
swap market model with the volatilities u,,k is then specified by assuming
that the par swap rates have dynamics of the form



where W: is (possibly multidimensional) Wiener under Qk.
Remark 25.9.1 Because of the interrelations between different par swap rates,
we cannot model all possible swap rates R: for 0 5 n < k 5 N simultaneously,
so in a concrete model we have to restrict ourselves to modeling only a subset
                                             +
N of all par swap rates. In a model with N 1 maturity dates we can only hope
to model N independent swap rates, and typical choices of N are given by the
following examples:
     A regular swap market model is specified by modeling, for a fixed N,
                               RY,.
     the par swap rates hN, . . , R: i.e.



     A reverse swap market model is specified by modeling, for a fixed N,
     the swap rates R;, Ri, . . . , hNi.e.



25.10 Pricing Swaptions i n t h e Swap Market Model
Given a swap market model, the pricing of a Tn x (TN- T,) swaption is surpris-
ingly trivial. Formula (24.6) immediately gives us the following pricing formula
for the payer swaption (regardless of the specific form of the model):

  P S N ~ (=~~) f ( t E
                      )     ~[max
                               ' [R?(T,)
                                  ~      - K;      01 I 3 t ] , 0 < t 5 T,.   (25.57)

Since R
      ,:   defined in (25.56), is just GBM we obtain



F'urthermore, since u, is assumed to be deterministic this implies that, condi-
tional on Ft, R:(T,)  is lognormal, i.e. we can write



where Y f l ( t ,T,) is normally distributed with expected value
384                 LIBOR AND SWAP MARKET MODELS


and variance
                            2
                           En7,   =   1
                                      T,
                                           ~ ~ " n , ~ds-
                                                       (~)~~2             (25.60)

As for the LIBOR mode1;a simple calculation easily gives us the swaption pricing
formula.
Proposition 25.16 In the swap market model (25.56), the Tn x (TN-Tn) payer
swaption price with strike K is given by



where




We thus see that each swaption price is given by a Black type formula.
Remark 25.10.1 Sometimes it is more convenient working with a swap market
model of the form
                  d~:(t) = R;(~)U~,N    (t) d ~ , ? ( t ) ,        (25.64)
where u n , ~ ( tis) a scalardeterministic function, W: is a scalar @-Wiener pro-
cess. Then the formulas above still hold if we replace ((un,~1I2  by u:,~. We can
also allow for correlation between the various Wiener processes, but this will not
affect the swaption prices. Such a correlation will however affect the pricing of
more complicated products.
    In this section, we have modeled each par swap rate R: as GBM under it's
own martingale measure Q:, and this led to the Black formula for swaptions. In
order to price more exotic products we will typically have to resort to numerical
methods like Monte Carlo, and then there is a need to specify the dynamics of
the relevant par swap rates under a single martingale measure. This will be done
in the next two sections.

25.11 Drift Conditions for the Regular Swap Market Model
In a regular swap market model, we model R : for a fixed N and 0 5 n 5 N - 1,
so the obvious choice of a common measure for all swap rates is Qg-,, which
is nothing else (why?) than the TN-forward measure QTN. Our problem is to
determine the various drift terms, and since this is somewhat messy it turns out
to be convenient to have TN+l as the last payment date rather than TN. We will
thus model G~+',.   . ., R+:' and our problem is to determine the drift terms of
these par swap rates under the terminal measure Q:+.'
     DRIFT CONDITIONS FOR THE REGULAR SWAP MARKET MODEL 385


   Since the diffusion term of Rf+l will be the same under Q+
                                                            :'          as under
Q;+l, the Q+:'   dynamics of RE+' are of the form



where w{+' is a Q:+l      Wiener process, and our problem is to determine the
drift term
    The determination of the par swap drifts involves solving a backward linear
difference equation, and for completeness' sake we now recall a general result for
such equations.
Proposition 25.17 The linear backward difference equation

                   xn = An+lxn+l+ bn+l,       n = 0,.. ., N - 1,          (25.66)

has the solution




                      N
with the convention nj=N+l a j = 1.
Proof Exercise for the reader.
We may now state and prove the drift condition.
Proposition 25.18 Under the terminal measure Q;+',           the Rf+l dynamics
are of the form



where the drift term is given by



where

                    j=n

and where Zn is defined by
                                                  1
                                       (1 + ~ J C R X
                                                    aj+lRj+l~;+l,
                                                      )
                                                                          (25.69)

                                   Zn=   -.Sn                           (25.70)
                                          PN+I
   Before going on with the proof we recall that we consider a regular swap
market model for hN+l, R;+' . . . , R:+,'                                +
                                            and since the super index N 1 will
be the same throughout the argument we henceforth suppress the superindex.
    386                 LIBOR AND SWAP MARKET MODELS


    Instead of R;+l, Q;+l, and &fl we will thus write h, Qn, and pn and
    similarly for all other terms.
~       For easy reference we also recall the following relations:




    where W, is Qn-Wiener.
    Proof We start by noticing that SN= p ~ + 1S,O QN is in fact the TN+l forward
    measure with numeraire p ~ + 1From
                                  .    Proposition 24.4 we know that, with




    we have
                                   Ln(t) = Tnzn (t),
    where
                                    Sn
                            Zn = -9 m=zil(o).
                                   PN+l
    Since Ln is a QN martingale it must have QN dynamics of the form



    so from (25.73), (25.65), and Girsanov's Theorem it follows that



    It thus remains to determine the process pn and to do this we must determine
    the Zn dynamics from (25.74). From (25.72) we have

                                SQ= s n + l + Un+lPn+l,

    so from (25.74) we have




    From (25.71) we have
                              Pn+l = Rn+lSn+l+ PN+I,
                              CONCLUDING COMMENT


    and plugging this into (25.77) gives us the recursion

                          zn = zn+1(1+%+I &+I)         +                  (25.78)

    From this formula, (25.65), and (25.75) we obtain the QN dynamics

     dZn = Zn+1(1+ an+l&+l)                    +           ~ W N ,(25.79)
                                    &+I ~ W NZn+lan+l~&+l~n+l

    where we have used the fact that, under Q N ,Zn has zero drift. We thus have

                  zn+l
        dZn = Zn-{(l+         an+l&+l) (~:+1+ an+lRn+lCJn+l) ~ W N , (25.80)
                   zn
    so from (25.75) we obtain the following recursion for 9,.




/ From Proposition 25.17 we obtain the solution
I




    where




I   A simple calculation gives us




    and we are done.


    25.12 Concluding Comment
    It can be shown that, given a swap market model, the LIBOR rates will not be
I
I
    lognormal. Thus LIBOR market models and swap market models are in general
    incompatible.
                    LIBOR AND! SWAP MARKET MODELS


25.13  Exercises
Exercise 25.1 Prove that the arbitrage free value at t 5 T , of the Ti+l claim



is given by
                                 t , - ~ ( Ti+l).
                             ~ ( Ti)       t ,
Exercise 25.2 Convince yourself that the swap measure        QE-, equals the
forward measure QTN .
Exercise 25.3 Show that the arbitrage free price for a payer swap with swap
rate K is given by the formula



Exercise 25.4 Prove Proposition 25.17.

25.14   Notes
The basic papers on the LIBOR and swap market models are Miltersen et al.
(1997), Brace et al. (1997),and Jamshidian (1997).Since these basic papers vere
published there has appeared a huge literature on the subject. Very readable
accounts can be found in Hunt and Kennedy (2000), Pelsser (2000) and the
almost encyclopedic Brigo and Mercurio (2001).
                                     %;ml
                         <
          i ' ' .'R~k)~.jl
                       ~~I,?TJ~~PW



                                                 26
                             FORWARDS AND FUTURES

    Consider a financial market of the type presented in the previous chapter, with
    an underlying factor process X , and with a (possibly stochastic) short rate r. (If
    r is stochastic we include it, for brevity of notation, as one component of X.) We
    assume that the market is arbitrage free, and that pricing is done under some
    fixed risk neutral martingale measure Q (with, as usual, B as numeraire).
        Let us now consider a fixed simple T-claim y, i.e. a claim of the form
    y = q(XT), and assume that we are standing at time t. If we buy Y and pay
    today, i.e. at time t, then we know that the arbitrage free price is given by

                                      n ( t ; y ) = G(t,Xt;T,y),                (26.1)

    where the pricing function G is given by


                      G(t, 2;T, Y ) = E$ [..eXP         {-~'rb)dS)]   ,         (26.2)

    and the payment streams are as follows:
       1. At time t we pay n ( t ; y ) to the underwriter of the contract.
1      2. At time T we receive y from the underwriter.
       There are two extremely common variations of this type of contract, namely
    forwards and futures. Both these contracts have the same claim y as their
    underlying object, but they differ from our standard contract above by the way
    in which payments are made.

    26.1 Forward Contracts
    We will start with the conceptually easiest contract, which is the forward con-
    tract. This is an agreement between two parties to buy or sell a certain underlying
    claim at a fixed time T in the future. The difference between a forward contract
    and our standard claims studied so far is that for a forward contract all payments
    are made at time T. To be more precise we give a definition.
    Definition 26.1 Let y be a contingent T-claim. A forward contract on y ,
    contracted at t, with time of delivery T, and with the forward price

1     .
    f (t; T, Y), is defined by the following payment scheme:
          The holder of the forward contract receives, at time T, the stochastic
          amount Y from the underwriter.
390                         FORWARDS AND FUTURES


        The holder of the contract pays, at time T, the amount f (t;T, y ) to the
        underwriter.
        The forward price f (t;T , y ) is determined at time t.
        The forward price f (t;T, 7 ) is determined i n such a way that the price of
        the forward contract equals zero, at the time t when the contract is made.
     Forward markets are typically not standardized, so forward contracts are
usually traded as OTC ("over the counter") instruments. Note that even if the
value of a specific forward contract equals zero at the time t of writing the
contract, it will typically have a nonzero market value which varies stochastically
in the time interval [t,TI.
     Our immediate project is to give a mathematical formalization of the defin-
ition above, and to derive a theoretical expression for the forward price process
 f (t;T, 7 ) . This turns out to be quite simple, since the forward contract itself is
a contingent T-claim <,defined by



We are thus led to the following mathematical definition of the forward price
process.

Definition 26.2 Let y be a contingent T-claim as above. By the forward price
process we mean a process f (t;T, Y) of the form f (t;T , Y) = f ( t ,Xt;T, y),
where f is some determinstic function, with the property that



Writing the forward price as f (t,Xt;T , Y) formalizes the fact that the forward         2(
price is determined at t , given the information that is available at that time.         A
    We now have the following basic formula for the forward price process.               as
                                                                                         ti
Proposition 26.3 The forward price process is given by any of the following              tl:
expressions:                                                                             tl:
                                                                                         D
                                                                                         w


where
                                    FUTURES CONTRACTS                                  391


I    Proof Using (26.3) and risk neutral valuation we immediately have the
, following identities, where we write f (t, x) instead of f (t, x; T, Y)



                                                                 . ex]



     %" = n ( t ; Y) - f (t, Xt)p(t, T).
     This immediately gives us (26.4)-(26.6). The relation (26.7) then follows
     from (26.6).
     Note that when dealing with forward contracts there is some risk of conceptual
                                                              time with t 5

        1. The forward price f (s; T, y ) which is paid to the underwriter at time T

ii         for a forward contract made at time s.
        2. The (spot) price, at time s, of a fixed forward contract, entered at time t,
           and with time T of delivery. This spot price is easily seen to be equal to

                                       =(s; Y) - ~ ( 8T)f
                                                       , (t; T, Y).

     26.2 Futures Contracts
     A futures contract is very much like a forward contract in the sense that it is an
     agreement between two parties to buy or sell a certain claim at a prespecified
                                                             the two contracts lies in
                                                            :ive a ver,bal defini.tion of
     the futures contract.
     Definition 26.4 Let y be a contingent T-claim. A futures contract on y,
     with time of delivery T, is a financial asset with the following properties:
       (i) At every point of time t with 0 <_ t <_ T , there k s t s in the market a quoted
           object F(t; T, y ) , lcnown as the futures price for Y at t, for delivery at T.
      (ii) At the time T of delivery, the holder of the contract pays F ( T ; T, y ) and
           receives the claim y .
     (iiz) During an arbitrary time interval (s, t] the holder of the contract receives
           the amount F(t; T, Y) - F(s; T, Y).
      (zv) The spot price, at any time t prior to delivery, of obtaining the futures
           contract, is by definition equal to zero.
392                         FORWARDS AND FUTURES


A rough way of thinking about a futures contract is to regard it as a forward con-
tract where the payments are made continuously in time in the way described
above, rather than all payments being made at time T. As the forward price               asr
increased, you would then get richer, and as the forward price decreased you             Dc
would lose money. The reason that this way of looking at the futures contract is         an
not entirely correct is the fact that if we start with a standard forward contract,
                                                                                         foi
with its associated forward price process f , and then introduce the above pay-
ment scheme over time, this will (through supply and demand) affect the original
forward price process, so generically we will expect the futures price process F
to be different from the forward price process f . The payment schedule above is
known as "marking to market"; it is organized in such a way that the holder of
a futures position, be it short or long, is required to keep a certain amount of
money with the broker as a safety margin against default.
    Futures contracts, as opposed to forward contracts, are traded in a stand-
ardized manner at an exchange. The volumes in which futures are traded over
the world are astronomical, and one of the reasons for this is that on many
markets it is difficult to trade (or hedge) directly in the underlying object. A
typical example is the commodity market, where you actually have to deliver
the traded object (tons of copper, timber, or ripening grapes), and thus are not
allowed to go short. In these markets, the futures contract is a convenient fin-
ancial instrument which does not force you to physically deliver the underlying
object, while still making it possible for you to hedge (or speculate) against the
underlying object.
    We now note some properties of the futures contract:
      a From (ii) and (iv) above it is clear that we must have




        Thus there is really no economic reason to actually deliver either the under-
        lying claim or the payment at time T. This is also an empirical fact; the
        vast majority of all futures contracts are closed before the time of delivery.
        If you enter a futures contract at time t with a corresponding futures price
        F(t; T, Y), this does not mean that you are obliged to deliver y at time
        T at the price F(t; T,y). The only contractual obligation is the payment
        stream defined above.
      a The name futures price is therefore somewhat unfortunate from a linguistic
        point of view. If today's futures price is given by F(t; T, y) (with t < T)
        this does not mean that anyone will ever pay the amount F(t; T, Y) in order
        to obtain some asset. It would perhaps be more clear to refer to F(t; T, y )
        as the futures quotation.
        Since, by definition, the spot price of a futures contract equals zero, there
        is no cost or gain of entering or closing a futures contract.
        If the reader thinks that a futures contract conceptually is a somewhat
        complicated object, then the author is inclined to agree.
1                                 FUTURES CONTRACTS                                     393
1

    ,
        We now turn to the mathematical formalization of the futures contract, and
    it should by now be clear that the natural model for a futures contract is an
    asset with dividends.
    Definition 26.5 The futures contract on an underlying T-claim y is a fin-
    ancial asset with a price process II ( t ) and a dividend process D ( t ) satisfying the
    following conditions:
                                    D ( t ) = F ( t ;T , y).                          (26.9)



    It now remains to investigate what the futures price process looks like. This turns
    out to be quite simple, and we can now prove the main result of the section.
    Proposition 26.6 Let y be a given contingent T-claim, and assume that market
    prices are obtained from the jixed risk neutral martingale measure Q. Then the
    following hold:
        a The futures price process is given by


                                       F ( t ;T ,y ) = E : ~
                                                           [Y].
                                                             ~                      (26.12)
        a   If the short rate is deterministic, then the forward and the futures price
            processes coincide, and we have

                                f (t;T, Y )= F ( t ;T,y) = E : ~[y].
                                                                  ~                 (26.13)
              L

    Proof     From Proposition 16.14, it follows that the discounted gains process




    has the representation
                                        ~ G , Z= ht dWt
    for some adapted process h. In our case we furthermore have II (t)= 0 for all t ,
    so we obtain the representation



1 Multiplying by Bt on both sides we get
                                  d F ( t ;T , y) = Btht dWt,
1 which implies that F ( t ;T , y) is a Q-martingale. Using the martingale property,
    the fact that we are in a Markovian framework (see Lemma 5.9), and (26.10),
: we obtain
                        F ( t ;T, Y )= q x t [ F ( T ;T ,Y ) ]= E:&   [Yl,
394                       FORWARDS AND FUTURES


which proves the first part of the assertion. The second part follows from the
fact that QT = Q when the short rate is deterministic (see Lemma 24.9).

26.3    Exercises
Exercise 26.1 Suppose that S is the price process of a nondividend paying
asset. Show that the forward price f (t, x;T, y) for the T-claim y = STis given by




Exercise 26.2 Suppose that S is the price process of a dividend paying asset
with dividend process D.
 (a) Show that the forward price f (t, x;T,ST) is given by the cost of carry
     formula




     Hint: Use the cost of carry formula for dividend paying assets.
 (b) Now assume that the short rate r is deterministic but possibly time-
     varying. Show that in this case the formula above can be written as


           f (t, X ;T, ST) = --

Exercise 26.3 Suppose that S is the price process of an asset in a standard
Black-Scholes model, with as the constant rate of interest, and fix a contingent
T-claim @(S(T)).We know that this claim can be replicated by a portfolio based
on the money account B, and on the underlying asset S. Show that it is also
possible to find a replicating portfolio, based on the money account and on
futures contracts for S(T).

26.4 Notes
For a wealth of information on forwards and futures, see Hull (1997) and
Duffie (1989).
                                Appendix A
                   MEASURE AND INTEGRATION*

The purpose of this appendix is to give an introduction to measure theory and
to the associated integration theory on general measure spaces.

A . l Sets and Mappings
Let X be an arbitrary set. We then say that X is finite if it contains only
finitely many elements. If X is not finite, we say that it is infinite. We will use
the notation f : X + Y to denote a function (or "mapping") f which takes
values in Y and which has domain X . If we apply the f to an element x E X ,
we denote the function value by f (x).
Definition A . l Let X and Y be sets and let

                                   f :X+Y

be a given mapping.
   1. The mapping f is injective i i for all x and z i n X it holds that

                                x#z     * f(x) #f(z).
   2. The mapping f is surjective i;f, for a l l y E Y, there exists an x E X such

                                       Y = fb).
            upping f is bijective i f it is both injective and surjective
   4. The image of X under f , is denoted by Im(f), and defined by

                                Im(f 1 = {f ( 4 ;   E XI.

   5. For any set B E Y , the inverse image or pullback of B under f , is
      denoted by f-l(B), and defined by

                               f-'(B)={x;      f(x)E B).

      W e also say that B is lifted to f ( B ) .
   6. In particular, for every y E Y we write

                                f -l(y) = (2; f (XI= Y) .
396                         MEASURE AND INTEGRATION


      7. For any set A    c X the direct image of B under f is denoted by f (A),
         and defined by
                                    f (A) = { f (2);2 E A) -
Note that the inverse image of a set always exists (although it could be the
empty set) even if the function f does not have an inverse. For our purposes
the inverse image concept is much more important than the direct image. The
following very useful result shows that the set algebraic operations are preserved
under the inverse image.
Proposition A.2 The following relations always hold:
      1. For any A, B   c Y we have
                              f-l ( A n B) = f - l ( ~ ) nf - ' ( ~ ) .

      2. For any A, B C_ Y we have



      3. For any B C_ Y we have

                                   f   -'(B ) = [f
                                           C
                                                       (B)]
         where denotes the complement.
      4. For any indexed collection {By),fr of sets i n Y we have




      5. For any indexed collection {By),Er of sets i n Y we have




Proof We leave the proof to the reader.
We define the set of natural numbers as the set N = {1,2,.. .), and the set of
integers 2 as Z = (0,f1,f2 , . . .). Using N we can give a name to the "smallest"
type of infinite set.
Definition A.3 A n infinite set X is countable i f there exists a bijection



If X is infinite but not countable, it is said to be uncountable.
                           MEASURES AND SIGMA ALGEBRAS                                  397


    Note that in our definition a countable set is always infinite. The intuitive inter-
    pretation of this is that a countable set has "as many" elements as N , whereas
    an uncountable set has "more" elements than N. If X is countable we may, for
    each n E N define x, E X by xn = f ( n ) . Since f is a bijection we can thus
    write X as
                                   x={ ~ 1 , ~ 2 , ~ 3 ,
                                                      . . a ) ,




    so we see that in this sense we can really count off the elements in X , one-by-one.
t
i       A countable set is thus an infinite set, but in a sense it is "almost finite", and
    thus very easy and nice to handle. In mathematics in general and in particular
    in probability theory, the difference between countable and uncountable sets is
    crucial, and therefore it is important to be able to tell if a set is countable or
    not. The following result is a good start in that direction.
    Proposition A.4 The set Q of rational numbers is countable.
    Proof It is enough to show that the set Q+ of positive rational numbers is
    countable, and we do this by first representing each rational number plq by the
    integer lattice point (p,q) E R2. We now prove that this set of integer lattice
    points is countable by simply presenting a scheme for counting them.
        The scheme begins with (1, l), (2, I), (1,2), (1,3), (2,2), (3, I), (4, I), (3,2),
    and if the reader draws a two-dimensional graph of this scheme, she will easily
    see how to continue.
    This simple idea can be extended considerably.
    Proposition A.5 Assume that we give a countable family               {xn)El
                                                                       of sets,
    where each set Xn is countable. Then the union UE1Xn is countable.
    Proof Because of the countability assumption, the set Xi can be written as
    {xil, xi2, xis, . . .), SO the set Xi can be bijectively mapped into the integer lattice
    points of the form (i,I), (i,2), (i,3), . . . . Thus the unionUE1  Xn can be mapped
    bijectively onto the entire set of positive integer lattice points in R 2 and we have
    already proved that this set is countable.
    The most important example of an uncountable set is the set of real numbers.
    Proposition A.6 The set R of real numbers is uncountable.
    Proof Omitted.

    A.2 Measures and Sigma Algebras
    Let X be a set and let us denote the class of all subsets of X by 2X. More
    formally we thus see that 2X , commonly known as the power set of X , is a
    set, the elements of which are subsets of X .
        We now want to formalize the idea of a mass distribution on X , and the
    reader may think of a large plate (the set X ) with mashed potatoes on it. For
398                     MEASURE AND INTEGRATION


every subset A X we would now like to define the nonnegative real number
p(A) as "the amount of mashed potatoes which lies on the set A" or "the measure
of A". However, when one tries to formalize this intuitively simple notion, one
encounters technical problems, and the main problem is the fact that in the
generic situation, there exist subsets A G X which axe so "nasty" that it is
mathematically impossible to define p(A). Typically we are therefore forced to
define the measure p(A) only for certain "nice" subsets A 2 X. These "nice7'
sets are called "measurable sets", and the technical concept needed is that of a
sigma-algebra (or o-algebra). In order to define this concept, let 3 be a family
of subsets of X , i.e.3 G 2X.
Definition A.7 A family 3 of subsets of X is a o-algebra i f the follow-
ing hold:
      1.
                                         0 E3 .
      2.
                                  AET     * AC€3.




Thus a a-algebra contains the empty set, and is closed under complement, count-
able unions, and countable intersections. In fact, it is only necessary to require
that F is closed under complements and countable unions (see the exercises).
Note that the conditions (3) and (4) only concern countable unions.
   Trivial examples of a-algebras are



Definition A.8 A pair ( X , 3 ) where X is a set and F is a a-algebra on X
is called a measurable space. The subsets of X which are in 3 are called
3-measurable sets.
We are now in a position to define the concept of a (nonnegative) measure.
Definition A.9 A finite measure p on a measurable space (X, p) is a mapping



such that
                                         INTEGRATION


       2.
                                                 p(0) = 0.
       3. I f A A , € 3 V n = 1 , 2,... a n d A i n A j = O f o r i # j , then




I
I The intuitive interpretation of (2) is obvious; there is no mass on the empty set.
j If A and B are disjoint set, it is also obvious that the mass on A U B equals
I the sums of the masses on A and B. The condition (3) above is an extension
    of this property to the case of an infinite collection of sets, and is known as the
    sigma-additivity of the measure.
        Generally speaking, it is a hard problem to construct nontrivial measures,
    and we will come back to this below. In our applications, we will typically be
    given a measure which is defined a priori.
    Definition A.10 A measure space is a triple (X, 3,p), where p is a measure
    on the measurable space (X, 3 ).

  A.3 Integration
1 Let (X,3,p) be a measure space, and let f : X t R be a given function.
I The object of the present section is to give a reasonable definition of the formal
  expression
                                                                                  (A.1)
    and we do this in a couple of simple steps.
    Definition A . l l For an arbitrary A               X the indicator function IAis



    If f = c IAwhere c is a real number and A is measurable, then there is a very
    natural definition of (A.l), namely

                       Jx   f (x) dp(x) =   Jx   c IA(x)dp(x) = c . d A ) ,       (A4



        the "area under the graph of f" = "the base" . "the height" = p(A) c.

    Observe that we must demand that A is F-measurable, since otherwise the right-
    hand side of (A.2) is not defined. This also gives us a natural definition of linear
    combinations of indicator functions.
400                         MEASURE AND INTEGRATION


D e f i n i t i o n A.12 A mapping f : X -+ R is s i m p l e i f it can be written as                  I


where Al, . . . , An are measurable and cl, . . . , c, are real numbers.
                                                                                                       I
D e f i n i t i o n A.13 For a simple function, as i n (A.31, the integral is defined by
                                                                                                       I

We now want to extend this integral concept to functions which are not simple.
Let us therefore consider an arbitrary nonnegative function. The intuitive idea
is now to carry out the following program:
      Approximate f from below by simple functions, i.e. find simple f,,     n=
                                    r
      1,2,.. ., such that f n ( x ) f ( x ) for all x.
      Define the integral of f as the limit of the integrals of the approximating
      simple functions, i.e.




The problem with this natural idea is the fact that not all functions can be
well approximated by simple functions, so we cannot define the integral for an
arbitrary function.
    Instead we have to be contented with defining the integral concept (A.l) for
those functions f which can be approximated by simple functions. This is the
class of m e a s u r a b l e functions, and the formal definition is as follows.
                                                                                                   1
D e f i n i t i o n A.14 A function f : X -+ R is 3 - m e a s u r a b l e if, for every interval
I g R it holds that f - l ( I ) E 3 , i.e. i f it holds that

                                  { x E X ; f ( x ) E I ) E 7,

for all intervals I . W e will often write this as f E 3.
When testing if a given function is measurable, the following result is often of
great use.
P r o p o s i t i o n A.15 The following properties are equivalent:
                                                                                                       1
                                         f is 3-measurable.

                               { x E X ; f ( x ) < a) E 3, Va E R.
                                    INTEGRATION



                              {x E X ; f (x) Ia ) E 7, V a E R.

                              { x E X ; f (x) > a ) E 3, V a E R.

                              {x E X ; f (x) 2 a ) E 7, V a E R.
Proof Use Proposition A.2.                                                     0
The following important result shows that measurability is preserved under the
most common operations.
Proposition A.16 Assume that f and g are measurable on a measurable space
( X ,3).Then the following hold:
   1. For all real numbers a and p the functions

                                           af+Pg,       f.9
      are measurable.
   2. If g ( x ) # 0 for all x, then
                                               f
                                               -
                                               9
      is measurable.
   3. If { f n ) r = , is a (countable) sequence of measurable functions, then the
      functions
                           sup fn, inf f,,   lim sup fn, lim inf fn,
                          n            n            n         n

      are measurable.
Proof The proof is omitted.
We can now go on to define the integral of a nonnegative function on a measure
space.
Definition A.17 Let f : X + R be nonnegative and measurable on the measure
space (X, 3,p). The integral o f f w.r.t. p over X is then defined by




where the supremum is over the class of simple functions cp such that 0 5 cp 5 f .
We now want to extend this definition to functions which are not necessarily
nonnegative. Let therefore f be an arbitrary measurable function. It then follows
from Proposition A.16 that also If 1 is measurable, since we can write
                             MEASURE AND INTEGRATION


    where
                          f+=max[f,O],        f-=ma[-f,o]
    Definition A.18 A measurable function f is integrable, which we will write
    as f E L1 (X,
                3,PI, if


    For an integrable function f , the integral over X is defined by


                  lx
                       f (x) dp(x) = Jx f +(XId ~ ( x-)   Ix
                                                           f-    dp(x).

    If A is any measurable set, the integral off over A is defined by




    W e will often write Jx f (x) dp(x) as Jx f (x)p(dx) or as Jx f dp. When the
    underlying measure space is unambiguous, we will write L' as shorthand for
    L1 (X, 3,PI.
    Example A.19 We now give a simple but important example of a measure
    space. Let X be the set of natural numbers and let 3 be the power set. On this
    space we now define the counting measure v by

                            v(A) = the number of points in A.                  (-4.5)

    In other words, the counting measure puts unit mass on every single natural
    number. We immediately see that on (N, 2 N , v), every real valued function will
    be measurable, and a function f is integrable if and only if


                                      2vul <
                                     n=l
                                                  0'3.



I   The integral of any f E L1 is easily seen to be given by
I




    Thus we see that our integration theory also allows us to treat ordinary sums
    as integrals.
        We now have some very natural properties of the integral. The proof is not
    trivial and is omitted.
                                           INTEGRATION


    Proposition A.20 The following relations hold:
       1. For any f , g E L1 ( X , T ,p) and any real numbers a and /3 it holds that




       2. If f ( x ) 5 g ( x ) for all x , then




       3. For any function i n L1 it holds that




       One of the most striking properties of the integral concept defined above is
    the surprising ease with which it handles convergence problems. The three basic
    results are as follows.
!
i   Theorem A.21 (The Fatou Lemma) Let {fn)r==l be a sequence of measur-
    able functions such that
                             fn 2 0 , n = l , 2 , ...
    and
                                   lim f n ( x ) = f ( x ) , V X E X ,
                                  n+w

    for some limit function f . Then




    Theorem A.22 (Monotone Convergence) Let {fn)r=l be a sequence of
    measurable functions such that
          1. The sequence is nonnegative, i.e.

                                            fn>O,         n = 1 , 2 , ...

          2. The sequence is increasing, i.e. for all x we have

                            f i ( z )l f i ( x ) l . . . I f n ( x ) l f n + l ( x )5 " ' .

    Then, defining the function f by

                                           f ( x ) = lim
                                                       n
                                                         fn(x),
    404                        MEASURE AND INTEGRATION


    it holds that
                             Jx   f ( x ) ~ P ( x=
                                                 )   Jx   fn(x)~P(x).

    Theorem A.23 (The Lebesgue Dominated Convergence Theorem) Let
          00
    { fn)n=l be a sequence of measurable functions such that



    for some limit function f . Suppose that there exists a nonnegative function g E L1
    such that,
                               Ifn(~)l5 g(x), V n , VX E X.
    Then



    A.4 Sigma-Algebras and Partitions
    The purpose of this section is to give some more intuition for the measurability
    concept for functions. We will do this by considering the simplest case of a
    sigma-algebra, namely when it is generated by a partition.
    Definition A.24 A partition P of the space X is a finite collection of sets
    {Al, A 2 , .. . , A,) such that
          1. The sets cover X , i. e.



          2. The sets are disjoint, i.e.



I
    The sets Al, . . . , A, are called the components of P , and the sigma-algebm
    consisting of all possible unions (including the empty set) of the components i n P
    is denoted by o ( P ) . This sigma-algebra is called the sigma-algebra generated
    by P .
    We now have a result which shows (in this restricted setting) what measurability
    for a function "really means".
    Proposition A.25 Let P be a given partition of X . A function f : X + R is
    o (P)-measurable i f and only i f f is constant on each component of P .
    Proof First assume that f is measurable, and consider a fixed but arbitrarily
    chosen real number y. Since f is measurable we know that f - l ( y ) is in o ( P )
    so it is a union of some of the components of P . If the union is nonempty this
                           SETS OF MEASURE ZERO                                 405


means precisely that f = y on that union, so in particular it takes the constant
value y on all components in the union. The converse is trivial.

The sigma-algebras that we are going to consider later on in the text, are in
general not generated by partitions. They are typically much more complic-
ated, so the proposition above is of little "practical" interest. The point of the
discussion concerning partitions is instead that when you informally think
about sigma-algebras, it is very fruitful to have this simple case at the back of
your head.
    As an example, we see directly from Proposition A.25 why we must restrict
ourselves to integrating measurable functions only. The problem with a nonmeas-
urable function is that the function is varying too wildly compared with the fine
structure of the sigma-algebra. In particular this implies that a nonmeasurable
function cannot be well approximated by simple functions.
    It is also very instructive to see exactly what goes wrong when we try to
integrate nonmeasurable functions. Even for a nonmeasurable function f we can
of course in principle define the integral by (A.4), but this integral will not have
the nice properties in Proposition A.20. See the exercises for concrete examples.

A.5    Sets of Measure Zero
Consider again a measure space (X,3,p). If N E 3 and p(N) = 0, we say that
N is a null set. If a certain property holds for all x E X except for on a null
set, then we say that the property holds almost everywhere (w.r.t. p), and in
shorthand we write "ya.e.". For example, if we write



this means that there exists a null set N such that f (x) 2 0 for all x E N C. It is
easy to see that if f and g are integrable, and f = g, almost everywhere, then
for every A E 3 we have


In fact, there is an important converse of this statement, which shows that you
can test whether two functions are equal almost everywhere or not, by testing
their integrals. We omit the proof.
Proposition A.26
      Assume that f and g are integrable and that




      for every A E 3, then f = g, p-a.e.
I
        406                      MEASURE AND INTEGRATION


                Assume that f and g are integrable and that

                                             hf   dP 2 h 9 d l " .

                for every A E F,then f 2 g, p-a.e.

        A.6 The L P Spaces
        Let p be a real number with 1 5 p < oo.We define the function class LP (X,
                                                                                 F ,p)
        as the class of measurable functions f such that



I




i       and for f E LP we define the LP-norm 11 flip by




I       For p = ca the norm is defined by

                         11f ]lo = ess sup I f 1 = inf {M E R; If 1 5 M,a.e.).
           The two main inequalities for LP spaces are the Minkowski and the Holder
        inequalities.
        Proposition A.27 The following hold for 1 5 p 5 oo.
i             1. The Minkowski inequality:



              2. The Holder inequality:




    I
                 where p and q are conjugate, i.e. l / p   + l / q = 1.
        From the Minkowski inequality it follows that if we identify functions which are
        equal almost everywhere, then LP is a normed vector space. If { fn) is a sequence
        of functions in LP and f is a function in LP such that

                                     f     n       f   asn-+oo,
                                 HILBERT SPACES


then we say that fn converges to f in LP and we write



Definition A.28 A sequence { f n ) , of functions i n LP is a Cauchy sequence
if, for all E < 0 there exists an integer N such that



for all n, m 2 N .
It is easy to see (prove this) that if fn converges to some f in LP then { fn), is
Cauchy. The converse is not necessarily true for generally normed spaces, but it
is in fact true for the LJ' spaces.
Proposition A.29 Every LP space, for 1 5 p 5 oo, is complete i n the sense
that every Cauchy sequence converges to some limit point. In other words, i f
{f,) is a Cauchy sequence i n LP, then there exists a (unique) element f E LP
such that fn+ f i n LP.
We will mainly be dealing with L1 and L 2, and for L2 there is furthermore an
inner product, which is the natural generalization of the scalar product on Rn.
Definition A.30 For any two elements f and g i n L2 we define the inner
product ( f , g) by


It is easy to see the inner product is bilinear (i.e. linear in each variable) and
that the inner product is related to the L2 norm by

                                   llf llo =   m-
The vector space structure, the inner product and the completeness of L2,
ensures that L2 is a Hilbert space.

A.7 Hilbert Spaces
Hilbert spaces are infinite dimensional vector spaces which generalize the finite
dimensional Euclidian spaces Rn.
Definition A.31 Consider a real vector space H A mapping (,) : H x H + R,
is called an inner product on H if it has the following properties:
      It is bilinear, i. e. for any a, P E R and f , g , h E H
408                        MEASURE AND INTEGRATION


      and
                              ( h , af   + Pg) = &(h,f )+ P(h,g).
      It is symmetric, i.e.



      It is positive definite, i.e.

             (f, f) 2 0,      for all f E H with equality i f and only iff = 0.

   The inner product generalizes the standard scalar product on R n and in
particular it induces a norm and the concept of orthogonality.
Definition A.32
      For any f E H the norm o f f is denoted by 11f 11 and defined by

                                           llf ll =   m.
      Two vectors f , g E H are said to be orthogonal if f , g = 0. W e write this
      as f I g .
      For any linear subspace M E H we define its orthogonal complement
      MIas
                              M ~ = { ~ E H    ~ I; M ) .
We interpret JJ f 11 as "the length of f", and the following result shows that the
norm concept really is a norm in the technical sense of satisfying the triangle
inequality.
Proposition A.33
      For all f,g E H the Cauchy-Schwartz inequality holds, i.e.
                                                                                      I   set
                                                                                          ex,


                                         Il(f,g)I 2 Ilf II 11911.

      The norm 11 . 11 satisfies the triangle inequality, i.e. for any f , g E H we
      have
                                    Ilf + 911 5 llf ll + 11g11.
Proof To prove the Cauchy-Schwartz inequality we note that for all f , g E H
and s E R we have (f - sg, f - sg) = 11 f - sg1I2 2 0. We thus have 11f /I2       +
                 >
((g(12 - 2 s ( f ,g) 0. Minimizing this over all real numbers s and plugging in the
optimal s in the inequality gives us the Cauchy inequality. To prove the triangle
                      +               +       +
inequality, write 11f g112 as (f g, f g) and expand using the bilinearity and
Cauchy-Schwartz.
                                HILBERT SPACES                                   409


A vector space with an inner product is called an inner product space, and on
such a space we may use the induced norm to define the concept of a Cauchy
sequence and of completeness (as for the LP spaces above).

Definition A.34 A Hilbert space is an inner product space which is complete
under the induced norm 11 . 11.

We note that L2 (X,3,p ) above is a Hilbert space and it is in fact the most
important example of a Hilbert space. The single most important result for
Hilbert spaces is probably the projection theorem. The proof is omitted.

Theorem A.35 Assume that M is a closed linear subspace of a Hilbert
space H.
      Assume that f is a jked vector i n H. Consider the optimization problem

                                      min Ilf - 911.
                                      sEM

      Then there ezists a unique solution ij and it is characterized by the condition
      that
                                      f-ijlM.
      W e have the decomposition of H as



      The direct sum sign @ means that H = M + M'         and that M nM'     = (0).

The optimal ij above is called the orthogonal projection of f onto M. We
see that the optimal "error vector" f - ij is perpendicular to the subspace M,
exactly like the situation in R n .

Definition A.36 A linear mapping F : H --+ R is called a linear functional.
For any f E H we sometimes write F f rather than F ( f ). A linear functional is
said to be bounded i f there exists a constant K such that



It is relatively easy to see that a linear functional is bounded if and only if it is
continuous. It is also easy to see that if we choose a fixed f E H and define the
mapping F : H + R by
                              Fg=(f,g),       V f EH,                          (A.6)
then F is a bounded linear functional. The next result, shows that all bounded
linear functionals on a Hilbert space are of this form.
410                      MEASURE AND INTEGRATION


Theorem A.37 (Riesz Representation Theorem)
Assume that
                           F:H+R                                                             C01

is a bounded linear functional. Then there exists a unique g E H such that                   PI
                                                                                             so:

Proof Define M by M = ker[F]= {f E H; F f = 0). The M is a closed
                                                  +
subspace and we can decompose H as H = M M'. From the definition of M
it is clear that F restricted to M' is linear with trivial kernel. It is thus a vector
space isomorphism between M I and R, so M' has to be one-dimensional and
we can write M' = Rgo for some go E M'. Now define g by




Then (go,g) = Fgo so by linearity we have Ff = (f,g) for all f E M'        and hence
(exactly why?) also for all f E H.
                                                                             O l
Note that we have to assume that the linear functional F is bounded, i.e. con-
tinuous. On a finite dimensional Euclidian space Rn, all linear functionals are
continuous, but on a Hilbert space there may exist linear functionals which
are not continuous. It is only for the continuous ones that we have the Riesz
representation above.
                                                                                             wl
A.8 Sigma-Algebras and Generators                                                        I   fol
As usual we consider some basic space X. Let S be some a priori given class of               an
subsets of X, i.e. S 5 2X, where S is not assumed to be a sigma-algebra. The
question is whether there is some natural way of extending S to a sigma-algebra.
We can of course always extend S to the power algebra 2X, but in most applica-
tions this is going too far, and instead we would like to extend S in some minimal
way to a sigma-algebra. This minimal extension can in fact always be achieved,
and intuitively one is easily led to something like the following argument:
      Assume, e.g. that S is not closed under complement formation. Then
      we extend S to S1 by adjoining to S all sets which can be written as
      complements of sets in S. Thus S1is closed under complements.
      If S is a sigma-algebra then we are finished. If it is not, then assume for
      example that it is not closed under countable unions. We then extend Sl to
      Szby adjoining to Sl all countable unions of sets in S1.Thus S2is closed
      under countable unions.
      It can now very well happen that S2is not closed under complement form-
      ation (or under countable intersections). In that case we extend Sz to S3
      by adjoining to S2all complements of sets in Sz.
      And thus we go on....
                    SIGMA-ALGEBRAS AND GENERATORS                              411


   In this way, it perhaps seems likely that "at last" we will obtain the (unique?)
minimal extension of S to a sigma-algebra. Unfortunately the method is not
constructive (unless of course X is finite) so we need a more indirect method.
Proposition A.38 Let { F a ; a E A} be an indexed family of sigma-algebras on
some basic set X , where A is some index set, i.e. for each a E A Fa is a
sigma-aZgebra. Define 3 by
                                  F=     n%.
                                        a €A
Then 3 is a sigma-algebra.
Proof The proof is left to the reader as an exercise.
We can now go back to our family S above.
Proposition A.39 Let S be an arbitrary family of subsets of X. Then there
exists a unique minimal extension of S to a sigma-algebra. More precisely, there
exists a 9 C 2X such that
      9 extends S , 2.e. S C 9.
         is a sigma-algebra on X .
      Q is minimal, i.e. if 7 is any sigma-algebra on X such that S C F , then
      9 c 3.
Proof Define 9 by
                                    Q=   n~,
where the intersection is taken over all sigma-algebras 3 such that S C 3. It
follows from Proposition A.38 that 9 is a sigma-algebra, it obviously extends S
and from the construction we easily see (why?) that it is minimal.
Definition A.40
     The sigma-algebra 9 i n the previous proposition is called the sigma-
     algebra generated by S, and we write


      The family S is called a generator system for 9.
      If (3,; y E I?} is an indexed family of sigma-algebras on X, we denote by




      the smallest sigma-algebra which contains each 3,.
      If {f,; y E I?) is an indexed family of real valued functions on X , we
      denote by
                                 G=ff{f,; y e q ,
      the smallest sigma-algebra 9 such that f , is measurable for each y E I'.
412                        MEASURE AND INTEGRATION


   It is important to understand that even if the elements in a generator system
S are "simple" (in some sense), the sigma-algebra generated by S can be very
complicated.
   We first give some rather trivial examples:
                                                                                        1

      1. If X is the interval [O,1] and S = {[O, 1/21} it is easy to see that a { S ) = '
         {X, 0,[O, 1/21?(1/2,11).
      2. If X = N and S is the class of all singleton sets of N, i.e.
         S = { { n ) ; n E N), then a { S ) = 2N.
      We now come to the single most important sigma-algebra.

Definition A.41 If the set X is given by X = R n then we define the Borel
algebra B(R n ) as the sigma-algebra which is generated by the class of open sets
o n R n . The elements on the Borel algebra are called Borel sets.

The Borel algebra is an extremely complicated object and the reader should be
aware of the following facts.

        There is no "constructive" definition of the Borel algebra. In other words,
        it is not possible to give anything like a concrete description of what "the
        typical Borel set" looks like.
        The Borel algebra is strictly included in the power algebra. Thus there
        exist subsets of Rn which are not Borel sets.
        However, all subsets of R n which ever turn up "in practice" are Borel sets.
        &formulating this, one can say that it is enormously hard to construct
        a set which is not a Borel set. The pedestrian can therefore, and without
        danger, informally regard a Borel set as "an arbitrary subset" of R n .
    There are a large number of alternative ways of generating the Borel algebra.
By recalling that a set is open if and only if its complement is closed it is easily
seen that the Borel algebra is also generated by the class of all closed sets. Below
is a list of some of the most common generator systems for the Borel algebra on
R. The extensions to Rn are obvious.

Proposition A.42 The Borel algebra B(R) can be defined i n any of the
following ways:

                        B(R) = a {open sets) ,
                        B(R) = o {closed sets) ,
                        B(R) = a {intervals of the type ( a , b ] ),
                        B(R) = a {intervals of the type ( a , b ) ),
                        B(R) = o {intervals of the type [a,b ] ),
                    SIGMA-ALGEBRAS AND GENERATORS


                   B(R) = u {intervals of the type [a, b ) ),
                    B(R) = u {intervals of the type (-m, b ) ),
                    B(R) = u {intervals of the type (-00, b]),
                   B(R) = u {intervals of the type [a, m)) ,
                    B(R) = u {intervals of the type (a, 00)),
                    B(R) = u {all intervals) .

At first glance it seems impossible to prove any results at all about the Borel
algebra, since we do not have a constructive definition of it. The reason that we
have any control over the class of Borel sets is the fact that it is the minimal
extension of the class of all intervals, and this can be seen in the following useful
alternative characterization of the class of measurable functions.
Proposition A.43 Let ( X , 3 ) be a measurable space and let f : X + R be a
given function. Then f is 3-measurable i f and only i f f-'(B) E F
                                                                 . for every
Borel set B G R.
Proof If f -'(B) E 7 for every Borel set B C R, then f is measurable since in
particular it lifts intervals back to measurable sets. Assume now that f is meas-
urable. We then have to show that f lifts arbitrary Borel sets to 3-measurable
sets. To do this, define the class G of subsets of R by



The class Q is thus the class of "good" subsets of R which do lift back to meas-
urable sets on X. We now want to prove that every Borel set is a good set, i.e.
that B Q. Now, using Proposition A.2 it is not hard to prove (do this!) that
CJ is a sigma-algebra. Since f was assumed to be measurable, it lifts intervals
back to measurable sets, so Q does in fact contain all intervals. Thus Q is a
sigma-algebra containing all intervals, but since the Borel algebra is the smallest
                                                                c
sigma-algebra containing all intervals it must hold that B Q which was what
we wanted to prove.
A particularly important example of a measurable space is (R, B(R)), and a real
valued function f : R -, R which is measurable w.r.t. B(R) is called Borel
measurable or a Borel function. The following result shows that there are
plenty of Borel functions.
Proposition A.44 Every continuous function f : Rn + R is Borel measurable.
Proof This follows immediately from the fact that a function is continuous if
and only if it lifts open sets to open sets.
From Proposition A.16 it follows that every function that we can construct,
by starting with continuous functions and then using the standard algebraic
    414                    MEASURE AND INTEGRATION


    operations and limiting procedures, will be a Borel function. It does in fact
    require a considerable amount of creativity to construct a function which is not
    a Borel function, so the reader can with very little danger interpret "a Borel
    function" as "an arbitrary function".
        As an important consequence of Proposition A.43 we see that measurability
    is preserved under composition with Borel functions.
    Proposition A.45 Assume that f : X 4 R is a 3-measurable mapping, and
    that g : R + R is a Borel function. Then the composite mapping h = g o f
    defined by h(x) = g ( f (x)) is 9-measurable.
    Proof Easy exercise for the reader.

    A.9 Product measures
    Let (X,3,p) and (Y, 8,v) be two measure spaces. We now want to construct a
    measure on the product space X x Y along the same lines as when we construct
I
    the area measure on R2 from the length measure on R.
I
I
    Definition A.46 A measurable rectangle is a set Z E X x Y of the form


    where A E 3 and B E G. the product sigma-algebra 9 8 6 is defined by
                          3 8 B = u {measurable rectangles) .
    There is now a natural definition of the measure of a measurable rectangle,
    namely X (A x B) = "the base times the heightn= p(A) - v(B). Thus we have
    defined a product measure on the class of measurable rectangles, and the follow-
    ing result shows that this measure can in fact be extended to the entire product
    sigma-algebra.
    Proposition A.47 There exists a unique measure X on { X x Y , 3 8 B )
    such that
                              X(A x B ) = p(A) v(B),
    for every measurable rectangle A x B. This measure is called the product
    measure and denoted by X = p x v.
       We end this section by formulating a very useful result which shows
    that instead of integrating w.r.t. the product measure we can perform iter-
    ated integrals.
    Theorem A.48 (The Fubini Theorem) Consider the product measure space
    { X x Y,3 188,p x V ) and let f : X x Y + R be a measurable mapping. Assume
    either that f is integrable over X x Y or that f is nonnegative. Then we have
                              THE LEBESGUE INTEGRAL                                415
1

I   Note that included in the F'ubini Theorem is the statement that the function




    is F-measurable, and correspondingly for the other integral.
        The F'ubini Theorem may of course be extended to any finite product space.

    A.10 T h e Lebesgue Integral
    On the class of intervals on R we have a natural length measure m defined by

                                    m ([a, b ] )= b - a.


!
I
    The obvious question is whether this length measure can be extended to a proper
    measure on the Borel algebra. That this is indeed the case is shown by the
    following highly nontrivial result.
I   Proposition A.49 On the measurable space (R, B) there exists a unique meas-
    ure m with the property that for any interval [a,b]

I                                   m ([a,b]) = b - a.

    This measure is called the (scalar) Lebesgue measure, and by taking products
    we can easily form the n-dimensional Lebesgue measure on R n .
        Equipped with the Lebesgue measure we can now start integrating real valued
    functions defined on the real line. We know that all continuous functions are Borel
    measurable, and at this point we could encounter a problem, since for continuous
    functions we also have the Riemann integral. If a function f is continuous and
    if A is a finite interval we can form two integrals, namely




    and
                                   f (5) dz, (Riemmn),
    and if we are unlucky these integral concepts could differ. Happily enough, it
    can be proved that whenever the Riemann integral is well defined, it will coin-
    cide with the Lebesgue integral. The advantage of using the Lebesgue integral
    instead of the Riemann integral is that the Lebesgue theory allows us to integ-
    rate all Borel functions, whereas the Riemann integral only allows us to integrate
    Riemann integrable functions (which is a much smaller class). Furthermore, a
    pointwise convergent sequence of nonnegative Riemann integrable functions may
    converge to a limit function for which the Riemann integral is not even defined,
    whereas the class of Borel functions is closed under pointwise convergence.
416                          MEASURE AND INTEGRATION


A.ll T h e Radon- Nikodym Theorem                                                           It
One of the big breakthroughs in arbitrage pricing came from the realization that    i
                                                                                    1
                                                                                            itic
absence of arbitrage is very closely connected to the existence of certain abso-            a1
lutely continuous measure transformations. The basic mathematical tool is the               mt
Radon-Nikodym Theorem which we will prove below, and although our prime                 I   COI
application will be in the context of probability theory, we present the theory             qu
for arbitrary finite measures.                                                              TI
Definition A.50 Consider a measurable space ( X , F ) on which there are                    spc
defined two separate measures p and v                                                       thc
        If, for all A E 3 , it holds that                                                   en



       then v is said to be absolutely continuous with respect to p on 3 and
       we write this as v << p.
       If we have both p << v and v << p, then p and v are said to be equivalent
       and we write p v. N


       If there exists two events, A and B such that
       * AnB=Q)
       * p(B) = 0 and v(A) = 0.
        Then p and v are said to be mutually singular, and we write p Iv.
      We now give some simple examples of these concepts.
Example A.51
        The simplest example of absolute continuity occurs when X is finite or at
        most countable, say X = N, and 3 = 2X = 2N. Every measure p on N
        is of course determined by its point masses p(n), n E N, and the relation
        v << p simply means that



        Let p be "Poisson(c)-measure", defined by its point masses on the natural
        numbers, as
                                                 cn
                                   p(n) = e-'-   n E N,
                                            n! '
        and let v be Lebesgue measure on the positive real line. Then, viewed as
        measures on (R,B(R)), we have p I v since p puts all its mass on N
        whereas v puts all its mass on R n N C.
    Consider a fixed measure space (X, F,p), and let f : X --+ R be a nonneg-
ative measurable mapping in L1(X, 7,p). We can then define a new measure v
on (X, F ) , by setting
                      THE RADON-NIKODYM THEOREM                                  417


It now follows fairly easily that v is a measure on ( X ,F , p) and from the defin-
ition it also follows directly that v << p on F . Thus, (A.8) provides us with
a way of constructing measures which are absolutely continuous w.r.t. the base
measure p, and a natural question is whether all measures which are absolutely
continuous w.r.t. p are obtained in this way. The affirmative answer to this
question is given by the following central result.
Theorem A.52 (The Radon-Nikodym Theorem) Consider the measure
space ( X ,F , p ) , where we assume that p is finite, i.e. that p ( X ) < oo. Assume
that there exists a measure v o n ( X ,F ) such that v << p on 7 . Then there
exists a nonnegative function f : X + R such that




                     v(A)=
                               J,f ( x ) d p ( x ) , f o r a l l A ~ F .      (A.ll)

The function f is called the Radon-Nikodym derivative of v w.r.t. p. It is
uniquely determined p-a.e. and we write




or alternatively,
                                 d v ( x )= f ( X I dp(x).
Proof We sketch a proof which is due to von Neumann. Define a new measure
                           +
X by setting X(A)= p ( A ) v(A),for all A E 3. For any g E L 2 ( A ) we can define
the linear mapping @ : X + R by




and by the triangle and Cauchy-Schwartz inequalities we have




Thus, from the Riesz Representation Theorem there exists an f E L 2 ( A ) such
that @(g)= ( g , f ) for all g E L 2 ( X ) , i.e.
418                       MEASURE AND INTEGRATION


By choosing g = IA for arbitrary A E 3 and using the fact that 0 5 v(A) 5 A(A)                  We r
we see that 0 5 f 5 1. We now write (A.14) as



                                                                                                so tl:
                                                                                                ity i
                                                                                                becc

Since this holds for all g E L2 (A) and in particular for all indicator functions, we
can write this on "differential form" (see the exercises for a justification of this) as        and
                                                                                                Con
                                  (1 - f ) d v = f dp.                                          uniq

It is now tempting to multiply through by (1 - f)-' to obtain
                                                                                                      I

                                                                                           '1   relal
                                                                                                "PI
                                                                                                exar

and thus to define the Radon-Nikodym derivative by f /(1 - f ), but the prob-
lem is of course what happens when f = 1. Define therefore A by A =
{x E X; f (x) = I), and set g = IA. From (A.15) we obtain                                       and


                                                                                                Her(
                                                                                                do 1
and (since f 2 0) this implies that p(A) = 0. We now use the assumption that
v << p to deduce that also v(A) = 0, so we can safely write




and we see that the Radon-Nikodyrn derivative is in fact given by                               (No

                                                                                                t inc
                                                                                                also

                                                                                                A.1
Example A.53 Going back to Example A.51 we consider the case when X = N,                        Exc
and 3 = 2 N , and we recall that the relation v << p means that
                                                                                                Ex1
                                                                                                 (an
Thus, given p and v with v << p, the problem of finding a Radon-Nikodym
                                                                                                f-'
derivative f will in this case boil down to the problem of finding an f such that               Ex1
                                                                                                Pro
                                                                                                Pro
                                       EXERCISES                                   419


    We see that for those n where p(n) # 0 we can solve (A.16) by defining f (n) as




    so the only problem occurs when p(n) = 0. However, from the absolute continu-
    ity it follows that v(n) = 0 whenever p(n) = 0, so for those n equation (A.16)
    becomes
                                      O = f(n).O
    and we see that for those n we can defhe f arbitrarily, say by putting f (n) = 17.
    Consequently f is not uniquely defined, but we see that the set where it is not
    uniquely defined (i.e. for those n where p(n) = 0) has p measure zero.
        It is important to realize that the concept of absolute continuity is defined
    relative to the given sigma-algebra. If, for example, 8 C 3 then it could well
    happen that p << v on G while it does not hold that p << v on 3. A trivial
    example is given by setting X = {1,2,3), and defining



    and


I   Here we obviously do not have v << p on 3,since p(2) = 0 while v(2) # 0. We
    do however, have v << p on G with () Radon-Nikodym derivative given by




    (Note in particular that f is 8-measurable.)
        We thus see that if we enlarge the sigma-algebra we may lose absolute con-
    tinuity, but if v << p on some measurable space (X, 7)and 8 & 7,then v << p
    also on 8.

    A.12 Exercises
    Exercise A . l Prove Proposition A.2.
    Exercise A.2 Which of the properties stated in Proposition A.2 are still valid
    (and which are not necessarily valid) if we replace f -l with f in expressions like
    f -l ( a U B) etc.?
    Exercise A.3 Show that in the definition of a sigma-algebra, the closedness
    property under countable intersections in fact follows from the other defining
    properties.
420                        MEASURE AND INTEGRATION


Exercise A.4 Let p be a measure. Show formally, using the axioms of a                  Exc
measure, that the following relations hold for all measurable sets A and B.
                                                                                       Exc
                                                                                       corn



Exercise A.5 Let X be a finite set X = {xl,. . . , xK) and define 3 as the
power algebra 2X. Let furthermore p be a measure on (X, 3 ) and define p, by
pn = p({x,)), i.e. pn denotes the mass on the point x,. Let f be any real valued       is a
nonnegative function, and show in detail, by using Definition A.17 that                Exc
                                                                                       gE



Exercise A.6 Define X by X = [O, 21 and define 3 by 3 = (0,Q, [0, I), [I,21).
Define a measure p by setting

                    p ( 0 , 1 ) = 1, p ([I, 21) = 1, p ([O, 21) = 2,
and define the functions f , g : X -+ R by f (x) = x and g(x) = 2 - X.
                                                                               i
                                                                                   I
      (a) Show that f and g are not measurable.
      (b) Despite the fact that neither f nor g is measurable we now define




         where the supremum is taken over all nonnegative measurable simple
         functions cp such that cp 5 g. We make the corresponding definition
         for g. Now compute and compare       Sx
                                           f dp,       lX
                                                   g d p and  (f g) dp.Sx +
Exercise A.7 The object of this exercise is to show that a measurable func-
tion can be well approximated by simple functions. Let therefore f : X -+ R
be a nonnegative measurable function on some measurable space (X, F ) , and
also assume that there exists some constant M such that 0 5 f(x)      M for<
all x E X. Show that for every n there exists a simple function f, such that
                <      +
f (x) 5 fn(x) f (x) 1/n for all x E X .
                                                       <
    Hint: Consider sets of the form {x E X ; kln f (x) 5 (k 1)In).     +
Exercise A.8 Continuing the exercise above, show that there exists an increas-
ing sequence of simple functions fn such that f,(x) t f (x) for all x E X.             A.1
Exercise A.9 Fill in the details in the proof of Proposition A.33.                     ROJ
                                                                                       and
Exercise A.10 Prove proposition A.38.
Exercise A . l l Describe the sigma-algebra on R which is generated by the class
of all singleton sets, i.e. of all sets of the form {x), where x E R.
                                         NOTES


Exercise A.12 Prove Proposition A.45 by using Proposition A.43.
Exercise A.13 Let (3,; n = 1 , 2 , .. .) be a sequence of sigma-algebras on some
common space X. Does it always hold that
                                               w
                                    pef       U3,
                                              2=1



is a sigma-algebra? What if the sequence is increasing?
Exercise A.14 Consider two measures p and v with v << p. For any functions
g E L1(v) and f E L1(p) we define the "differential equality"

                                    g d v = f dp,                        (A.17)

as being shorthand for


                   L    f (x) dv(x) =
                                         L    g(x) dp(x), VA E 3 .



                                         dv
                                  f=-      dv= fdp
                                  d~
   (b) Show that for any h E L1(gdv) it holds that

                              g d v = f d p =+ h g d v = h f d p

   (c) Assume that X << v << p and prove the "chain rule"

                                         -dX= - .d-X dv
                                         dp         dv dp'

   (d) Assuming v   N    p, prove that

                                                        -1
                                         d~
                                         s=($).
A.13 Notes
Royden (1988) gives a very clear and readable presentation of measure theory,
and also treats point set topology and basic functional analysis.
                                                                                 The

                                  Appendix B
                                                                                      1
                        PROBABILITY THEORY*
                                                                                 is in
                                                                                 and
A probability space is simply a measure space (R, 3,P) where the measure P
has the property that it has total mass equal to unity, i.e.

                                                                                 and
The underlying space R often is referred to as the sample space, and the
elements of the sigma-algebra 3 are called events.

B . l Random Variables and Processes
In this section we will discuss random variables and random processes.
Definition B . l A random variable X is a mapping



such that X is 3-measurable.
Remark B . l . l As the reader probably has observed, the letter X , which in
the previous chapter was used to designate a measure space, is now used as the
name of a random variable. This is an unfortunate clash of notation, but since
each use of the letter X is standard within its respective area of application
we will simply accept this. There is however no risk of confusion: from now on
the measure space will always be a probability space, and thus denoted by R.
The only use of X will be as a name for a random variable or a random process.
   The interpretation of a random variable is as follows:
      Somewhere, hidden from us, a point w E R in the sample space is
      "randomly" chosen by, say, the God of Chance.
      We are not allowed to observe w directly, but we are allowed to observe
      measurements on the sample space, i.e. we can observe the real number
      X(w), which gives us partial information about w.
Definition B.2 The distribution measure p x for a random variable X is a
measure on (R, B) defined by

                  ~ x ( B ) = P ( { w E R ;X ( W ) EB ) ) ,   BEB,
                        RANDOM VARIABLES AND PROCESSES                             423


     T h e (cumulative) distribution function of X i s denoted by Fx and defined by


I                           Fx (x) = P ({w E 0 ; X(w) 1 2)) .

          Note that since X is assumed to be measurable, the event {w E R; X(w) E B)
     is in 3so its P measure is well defined. We will often write this event as {X E B)
     and then the definition of the distribution measure becomes



     and the distribution function can be written as



        We now go on to introduce the measure theoretic definition of an expected
     value.

1t   Definition B.3 For a n y X E L' ( R , 3 , P ) its expected value, denoted by
     E[X], i s defined by

1

     For X E L2 the variance i s defined by




     We note that the definition above gives the expected value and the variance as
     integrals over the (abstract) sample space R. The following result connects these
     formulas to the standard elementary formulas where expectations and variances
     are computed as integrals over the real line.
     Proposition B.4 Let g : R -+ R be a Bore1 jiinction such that the composite
     random variable g(X) i s integrable. T h e n we have




     Proof    We leave the proof as an exercise. See the exercises for hints.

     We note that the first equality above holds by definition. The point of the result
     is thus the second equality. The careful reader notes (with satisfaction) that, by
     Proposition A.45, the measurability of g(X) is guaranteed.
         In order to convince the reader that the framework above really is of some
     value, we will now prove a useful result which shows that in some cases an
     expected value can be computed in terms of an ordinary Lebesgue integral.
424                       PROBABILITY THEORY


Proposition B.5 Let X be a nonnegative random variable. Then it holds that




Proof By using the Fubini Theorem we have




       =   J, [lW ~ {5t x(w)} - dt] dP(w) =   lm
                                               [L                       I
                                                        ~ {5t X(w)} dP(w) dt
                                                                                 Con
                                                                                 can
                                                                                 follc



where the event At = {X 2 t}. We thus have

                  4x1=    lo   P(At) dt =   lo   P (X > t) dt.



We now go on to the concept of a random process.
Definition B.6 A random process on the probability space (R,3, P) is a
mapping
                         X:R+xR+R,
such that for each t E R+ the mapping




We interpret X(t, w) as "the value at time t given the outcome w", and we will
also use the alternative notation Xt(w).
    Note the following:
      For each fixed t the mapping



      which we also denote by Xt, is a random variable.
      For each w E R the mapping
                       PARTITIONS AND INFORMATION                                        425


      is a deterministic function of time. This function, which we may draw
      as a graph, is called the realization or trajectory of X for the outcome
      w. When we observe a random process over time (like the evolution of a
      stock price) we thus see the trajectory of a single w.
    In the definition above we have defined processes only on the time interval
0 5 t < oo,but we can of course consider processes defined on just a subinterval
or on the integers (a "discrete time process").

B.2    Partitions a n d Information
Consider a sample space R and a given partition P = {Al,. . . , AK) of R. We
can now give an intuitive interpretation of P in information terms along the
following lines:
      Someone (the God of Chance?) chooses a point w in the sample space. We
      do not know exactly which point has been chosen.
      What we do get information about, is exactly which component of P that
      w belongs to. More formally one can think of this as an experiment where
      we are allowed to observe the random variable Y defined by


                                   Y(w) =        n . I*,, (w) .

      If we observe Y ( w )= n then we know with certainty that w lies in A,.
   We thus see that having access to a certain partition can be interpreted
as having access to a certain amount of information. We note that the trivial
partition P = {R) corresponds to "no information at all". The other extreme
case occurs when R is finite, say R = {wl, . . . , wN), and the partition is given
by T = {{wl) , {w2) ,. . . , { w ~ ) }This
                                      .    case corresponds to "full information".
   In some cases we may even compare the informational content in two separate
partitions. Consider, as an example, the space R = [O, 11 with two partitions



where

         A1 =   [O, ;) ,    A2 =   [f, 2) ,   A3 =     [;,    a)   ,   A4 =   [;,   11

and
                                 P 2 = {Bl, B2, B3),

where
                           [o,;), B 2 = [;,;),               B3=
426                            PROBABILITY THEORY


It is now natural to say that PI contains more information than P2since the                      PI
partition PI has been obtained by subdividing some of the components of P2into                   R
smaller pieces. There is thus a natural partial order relation between different                 f.
partitions of a given sample space, and in the example above we say that Pl is
finer than P2.                                                                                   PI
Definition B.7 For a given sample space 52, a partition S is said to be finer
than a partition P if every component in P is a union of components in S .                       B,
                                                                                                 Le
The interpretation of this is of course that "Scontains more information than P".                fol
    Consider again the sample space R and some given but otherwise arbitrary
mapping f : R + R. For simplicity we assume that f only takes finitely many
values, and we denote these values by X I , 2 2 , . . . , XK. The interpretation is that f
is a measurement on R and that we gain knowledge about the (unknown) sample
point w by observing the measurement f (w). We now note that f generates a
natural partition P ( f ) defined by



where
                   A n = { w e R ; f ( w ) = ~ n ) , n = 1 , 2 ,...,K.



It is then natural to interpret the partition P ( f ) as "the information generated
by f", since by observing f we can exactly tell in which component of P ( f ) that
w lies.                                                                                          As
    We also see that given the information in P ( f ) , i.e. given information about             we
in which components w lies, we can exactly determine the value f (w). The reason                 Frc
for this is of course that f is constant on each component on P ( f ) and we can                 to
easily generalize this observation to the following definition and lemma.                        t hf
Definition B.8 A given mapping f : R --+ R is called measurable w.r.t a                          t h2
partition P if and only if it is constant on the components of P.                                infi
                                                                                                 fra
Lemma B.9 Take as given a sample space R, a finite valued mapping f : R + R
                                                                                                 lon
and a partition P. Iff is P-measurable then the value off is completely determ-
                                                                                                 an(
ined by the information in P in the sense that if we know in which component
                                                                                                 the
of P it is located, then we know the function value f (w).
Consider again the sample space R and a finite valued mapping f : R + R.                     ; ter
                                                                                             2
If we also are given another mapping g : R 4 R and define h : R + R by
h(w) = g(f (w)), then it is obvious that h generates less information than f , i.e.
that P ( f ) is finer than P(h), which also can be expressed by saying that h is
constant on the components in P ( f ) , i.e. h is P(f)-measurable. There is also                 bet
a converse of this result which will have important generalizations later on in
the text.




                                                                                             -
                   SIGMA-ALGEBRAS AND INFORMATION                                 427


Proposition B.10 Consider a fied R and two finite valued mappings f : R +
R and h : R -t R. Assume that h is P(f)-measurable. Then there exists a
function g : R -,R such that h = g o f .
Proof Exercise for the reader.

B.3 Sigma-algebras and Information
Let us again consider the sample space 0 and a give partition P. We note the
following facts:
     The partition P generates a natural sigma-algebra, namely u {P).
     F'rom a {P) we can easily reconstruct the original partition P , since the
     components of P are precisely the atoms in u{P), i.e. the sets in u {P)
     which have no proper subsets (apart from 0) in u{P).
     If 3 and S are two partitions, then

                                  S is finer than P                      ..   j




                                    if and only if
                                        P c S.
     For any mapping f : R + R it holds that
                                    f is P-measurable
                                       if and only if
                                 f is 0 {PI-measurable.
As long as we are working with finite partitions it is thus logically equivalent if
we work with partitions or if we work with the corresponding sigma-algebras.
F'rom a technical point of view, however, the sigma-algebra formalism is superior
to the partition formalism, since a sigma-algebra is closed under the usual set
theoretic operations. Furthermore; our development of measure theory demands
that we have a sigma-algebra as the basic object. Thus, even if the intuitive
information concept is perhaps most natural to formulate within the partition
framework, it turns out that the sigma-algebra formalism is vastly superior in the
long run. It should also be emphasized that the equivalence between partitions
and sigma-algebras only holds when the partition is finite. In the general case,
there is simply no alternative to the sigma-algebra formalism.
    We will therefore, henceforth, formalize the intuitive information concept in
terms of sigma-algebras, and in particular we will interpret the relation



between two sigma-algebras G and 3 as

                      "G contains less information than 3."
428                         PROBABILITY THEORY
                                                                                     3
   Let us again take a sample space R as given, and consider a mapping R :
X -+ R. We recall an earlier definition:                                                      the

Definition B.ll The sigma-algebra a { X ) is defined as the smallest sigma-
algebra 3 such that X is 3-measurable.

We will refer to a { X ) as "the sigma-algebra generated by X".Technically speak-
ing it is the intersection of all sigma-algebras 6 such that X is 8-measurable,
but we can in fact give a more explicit representation.

Proposition B.12 W e have the representation

                        u { x ) = {x-'(B);   B E a(R)).                              :
                                                                                     ?   I
Proof Exercise for the reader.

Definition B.13 Let K be a n arbitrary family of mappings from R to R. Then
a { K ) is defined as the smallest sigma-algebra 6 such that X is B-measurable for
all X E K .

We now have a general result for sigma-algebras, which is parallel to
Proposition B.10 for partitions. The proof is not easy and therefore omitted.

Proposition B.14 Let X I , . . . , X N be given mappings X , : R -+ R, and assume
that a mapping Z : 52 -+ R is o { X I , .. . , XN)-measurable. Then there exists a
Borel function f : R~ --+ R such that for all w E R we have



This proposition thus formalizes the idea that if a random variable X is measur-
able w.r.t. a certain sigma-algebra then "the value of the variable is completely             A fi
                                                                                              tim
determined by the information contained in the sigm&algebra7'.
   We now pass on to random processes, and note that every random process
                                                                                         11
                                                                                              Dej
generates an entire family of interesting sigma-algebras.
                                                                                              spa1
Definition B.15 Let { X t ; t 2 0) be a random process, defined o n the probabil-             ada
ity space (R,3,P ) . W e then define the sigma-algebra generated by X over
the interval [0,t] by
                              3:=.{x,;      sst).
                                                                                     1        The
The intuitive interpretation is that "3: is the information generated by                      xt
observing X over the time interval [0,t]". There is in general no very expli-                 timc
cit description of 3?, but it is not hard to show that 3? is generated by all '               the
events of the form { X , E B} for all s 5 t and all Borel sets B.                             intt
                       SIGMA-ALGEBRAS AND INFORMATION                              429


I      If Z is a random variable then, based on the discussions above, we interpret
j
1 the statement


I         "Z is a function of the entire X-trajectory over the interval [0, t]."

       From the definition it is immediately clear that

                                  9rt    * 333:,
I
    so every random process X will in this way generate an increasing family of
    sigma-algebras. We now generalize this concept.

    Definition B.16 A filtration 3 = {3t)t20        o n the probability space (a,3,P )
    is a n indexed family of sigma-algebras o n R such that




    Given a filtration L as above, the sigma-algebra Fmis defined as




    A filtration thus formalizes the idea of an nondecreasing information flow over
    time. We now introduce one of the most basic concepts for stochastic processes.

    Definition B.17 Consider a given filtration L = {3t)t20 o n some probability
    space, and a random process X o n the same space. W e say that the process X is
    adapted t o the filtration if



    The interpretation of this definition is that "For every fixed t , the process value
    Xt is completely determined by the information 3t that we have access to at
    time t". Alternatively we can say that "an adapted process does not look into
    the future". We note in passing that the process X is always adapted to the
    internal filtration   32 generated by X.
    430                         PROBABILITY THEORY


    Example B.18 Let Z be any random process with continuous trajectories, and
    define the filtration 3 as the internal filtration Ft = 3.: The following processes
    are adapted:




I



    The processes




                                                                                          for
    are not adapted.
    In a typical financial application, the filtration is generated by the observed
    asset prices. A natural requirement for a portfolio strategy is that the port-
    folio decision, i.e. taken at time t , is only allowed to depend upon the public
    information that we have access to at time t (by observing asset prices). The
    formalization of this idea is to demand that the portfolio strategy should be
    adapted.

    B.4 Independence
    We consider again a given probability space (R,3, P ) , and recall the standard
    definition of independent events.
    Definition B.19 Two events A, B E 3 are independent if



    We now generalize this definition to sigma-algebras, random variables and
    processes.
    Definition B.20
          Two sigma-algebras (2, 'H E 3 are independent if



          for all G E B and all H E 'H.
                               INDEPENDENCE                                 431


     T w o random variables X and Y are independent if the sigma-algebras
     a { X ) and a {Y) are independent.
     T w o stochastic processes X and Y are independent if the sigma-algebras
     a {Xt ; t 2 0) and a {K; t 2 0) are independent.
     An indexed family {G?; y E I?) of sigma-algebras, where G7 E 3 for each
     y E I? are mutually independent if




     for every finite sub wllection G I , ... ,Gn where Gi E GTj and where
     ^/i # yj for i # j . T h e extension t o random variables and processes is
     the obvious one.
We note that two random variables X and Y are independent if and only if



for all Bore1 sets B1 and B2.
    We now formulate and sketch the proof of a very useful result.

Proposition B.21 Suppose that the random variables X and Y are independ-
ent. A s s u m e furthermore that X , Y , and X Y are in L 1 . T h e n we have



Proof   We do the proof in several steps.
   1. Choose arbitrary A E a {X) and B E a {Y). Then we have




      Thus the proposition holds for indicator functions.
   2. From the previous item and from the linearity of the integral it follows
      that (B.l) holds for all simple functions (check this in detail).
   3. In the general case we can WLOG (without loss of generality) assume
      that X and Y are nonnegative. In that case there exist (see the exercises)
      sequences {Xn) and {Yn) of simple random variables such that
    432                           PROBABILITY THEORY


             From item 2 above we have                                                    wh
                                                                                          int
                                                                                          ha7
                                                                                          vag
            Now we let n -+ oo and use the Monotone Convergence Theorem.
I   We also have the following simple but useful corollary.
    Corollary B.22 If X and Y are independent random variables, and i f f and
    g are Bore1 functions, t h e n f(X] and g(Y) are independent. I n particular, if      i.e.
    f (X), g(Y), and f (X)g(Y) are in L 1 , then                                          "PI

                                                                                          rar
                                                                                          Th
    Proof Exercise for the reader.                                                        tak
                                                                                          mu
    B.5 Conditional Expectations                                                          eq1
    Apart from the concept of independence, the most important concept in probab
    ility theory is that of conditional expectation. We will need to treat this concept
    in its most general (but also most useful) version, namely that of a conditional
    expectation given a sigma-algebra. We start, however with a more elementary           an(
    discussion in order to motivate the more abstract arguments later on.                 De
         Consider a fixed probability space (R, 3, P ) , and suppose that A and B are     Th
    events in 3 with P ( B ) # 0. We recall the elementary definition of conditional
    probability.
    Definition B.23 T h e probability of A, conditional o n B is defined by
                                                                                          We
                                                                                          titi
                                                                                          infc
                                                                                          knc
    The intuition behind this definition is as follows:                                   No
            The probability for any event A is the fraction of the total mass which is
            located on A, so


            When we condition on B, we know that B has happened. Thus the effect-
            ive sample space is now B rather than fl. This explains the normalizing
            factor in the nominator of (B.2).                                             Fro
            The only part of A that can occur if we know that B has occurred is 1         put
            precisely A n B.                                                              an
          What we are looking for is now a sensible definition of the object

                                                                                          TE




                                                                                          -
                       CONDITIONAL EXPECTATIONS                               433


where X is a random variable and G is a sigma-algebra included in 3. The
interpretation should be that E[X)GI is "the expectation of X given that we
have access to the information in g". It is not trivial to formalize this rather
vague notion, so we start with some heuristics.
    We therefore recall that the unconditional expected value is given by



i.e. E[X] is a weighted average of the values of X, where we have used the
"probabilities" P(&) as weights.
    Suppose now that we have obtained information about the outcome of the
random experiment, in the sense that we know that sample point w is in the set B.
The natural definition of the expected value of X given B is then obtained by
taking the weighted average of X over the new effective sample space B. We
must of course normalize the probability measure so that we have total mass
equal to unity on the new space B. Thus we normalize the probabilities as



and we may thus define the object E[XI B].
Definition B.24 Suppose B E 3 with P(B) > 0, and that X E L1 ( R , 3 , P ) .
Then "the conditional expectation of X given B" is defined by



We now consider a slightly more general case, where we are given a finite par-
tition P = {Al,. . . ,AK) with A, E 3 for n = 1,. . ., K. Having access to the
information contained in P is, according to our earlier discussion, equivalent to
knowing exactly in which of the components Al, . . . , AK that the outcome w lies.
Now consider the following schedule:
      Someone (the God of Chance?) chooses "randomly" a point w in the sample
      space. We do not know exactly which point has been chosen.
      We are informed about in exactly which component of the partition that
      w lies.
      As soon as we know in which component w lies, say for example in A,,
      then we can compute the conditional expectation of X given A, according
      to the formula above.
From this we see that exactly which conditional expectation that we will com-
pute, will depend in which component that w lies. We may therefore define
a mapping from R to the real line by


This leads us to the following definition.
    434                         PROBABILITY THEORY


    Definition B.25 With assumptions as above, and also assuming that P(A,) > 0
    for all n, we define E [ X ( P ] , " t h e conditional expectation of X given the
    information in P" by




    i.e.
                                  1
               E [ X (P](w) = -            X(w)DPP(w), when w E A,.               (B.4)

        We note that the object E [ X I P]is not a real number but a mapping from
    R to R, i.e. it is a random variable. We also note that, by definition, E [ X JPI
    is constant on each component of P , i.e. it is u {P)-measurable.
        We would now like to extend the definition above to the case when we con-
    dition on a general sigma-algebra, and not only on a finite partition. This is
    however not entirely straightforward, and a major problem with the definition
    above is that we had to assume that P(A,) > 0 for all n, since otherwise we
    divide by zero in(B.4). We therefore have to take a more indirect approach, and
    start by listing some important properties of the conditional expectation above.
    Proposition B.26 Assume that ( R , 3 , P ) , x, and P are as above. Define the
    sigma-algebra Q C 3 by Q = a ( P ) . Then the conditional expectation E [ X I PI
    is characterized as the unique random variable Z on ( 0 , 3 , P ) with the following
    properties:

     (i) Z is G measurable.
I
    (ii) For every E Q it holds that



I

I
I
    Proof    Exercise for the reader.

    The point of this result is that it characterizes the conditional expectation in
                                                                                           il   1   tl



    a way which does not require the components of P to have strictly positive
    probabilities. In fact, the conditions (i)-(ii) above can be formulated for any
    sigrntlalgebra Q even if Q is not generated by a finite partition. This is the
    starting point for our final definition of conditional expectations.
    Definition B.27 Let (R, 3 , P ) be a probability space and X a random variable
    i n L1( R , 3 , P ) . Let furthermom Q be a sigma-algebra such that G G 3. If Z is     ]
    a mndom variable with the properties that
    (i) Z is Q-measurable.
                                                                                                I
i
                            CONDITIONAL EXPECTATIONS


!   (ii) For every G E Q it holds that




       Then we say that Z is the conditional expectation of X given t h e sigma-
    algebra Q. In that case we denote Z by the symbol



    The price that we have to pay for this very general definition of conditional
    expectation is that we have a nontrivial existence problem, since it is not imme-
    diately clear that in the general case there will always exist a random variable Z
j   as above. We note that X itself will obviously always satisfy (ii), but in the
    general case it will not satisfy (i). We do however have an existence result, and
    the proof is a nice application of the Radon-Nikodym Theorem.
    Theorem B.28 Let (R,T, P ) , X , and Q be as i n Definition B.27. Then the
    following hold:
          There will always exist a random variable Z satisfying conditions (2)-(ii)
          above.
          The variable Z is unique, i.e. i f both Y and Z satisfy (2)-(ii) then Y = Z ,
          P-a.s.
    Proof    Define the measure v on (R, 9) by




    Trivially we then have v << P and we see directly by inspection that if we define Z
    by


    then Z will be Q-measurable and it will have the property that




    i.e


    for all G E 8.
    In passing we note that if B is the trivial sigma-algebra Q = {R,0) then it follows
    directly from the definition above (prove this!) that
436                         PROBABILITY THEORY


   We now have some natural and simple rules for calculating conditional                            SUP
expectations.                                                                                       inte
Proposition B.29 The following hold:                                                                t aim
                                                                                                    can
                                                                                                    the

             E[aX   + PYI S]= aE[XI S]+ PE[Y(S], V a , /3 E R.                  (B.7)   I           Prc
Proof The relation (B.6) follows more or less directly from Proposition A.26.
                                                         +
In order to prove (B.7) we define Z by Z = aE[XI 81 PE[YI GI. Then Z is
obviously S-measurable and we only have to show that for every G E S we have
                                                                                        I
                                                                                                    Pr<
Using the definition of the conditional expectation and linearity, the right-hand                   intc
side of the above becomes

                                                                                                    Ass
                                                                                                    defi

                                                                        .   ,                       De:
                                                 JG          JG '



One of the, most important and frequently used properties of conditioi
expectation is the rule of iterated expectations.                                               :   Sin
                                                                                                    t ior
Proposition B.30 Assume the setting above and also assume that the sigma-
algebra % satisfies % C 8 G 3. Then the following hold:

                          E[E[XI GI1 'FI] = E[XI XI,                            (B.8)
                                   E[X] = E[E[XI GI].                           (B.9)               inst
Proof We start by noting that (B.9) is a special case of (B.8) since E[X] =
E [ X (%] where 7-iis the trivial sigma-algebra. In order to prove (B.8) we define
Z by Z = E [ X (%I. We now have to show that Z is %-measurable and that for
all events H E % we have                                                                    I       whc
                                                                            (B.lO)

    The measurability is immediately clear (why?). As for (B.lO) we note that
since % S we have H E % + H E S so                                                          I       foll
                                                                                                    Pr,
                        CONDITIONAL EXPECTATIONS                               437


Suppose now that X is G-measurable. We have earlier said that the intuitive
interpretation of this is that X is uniquely determined by the information con-
tained in G. When we condition on G this should imply that we know X and thus
can treat it as deterministic (conditionally on G). This intuition is formalized by
the following result, where we leave the proof as an exercise.
Proposition B.31 I X is G-measurable and if X, Y , and XY are i n L1, then




There is a Jensen inequality also for conditional expectations.
Proposition B.32 Assume that f : R -r R is convex and that X and f (X) are
integrable. Then
                  f (E[XlG1)SE[f(X)IGl, P-a.s.
Assume that X and Y are defined on the same space (R, T ,P). Then we can
define the conditional expectation of Y, given X.
Definition B.33 For any integrable Y and for any X , we define



Since E[YI X] by this definition automatically is a {XI-measurable, Proposi-
tion B.14 guarantees that there exists a Bore1 function g such that



using this g we may now define conditional expectations on the distribution side
instead of on the R side.
Definition B.34 W e define the object ,E[YI X = x] by



where g is given by (B.13).
Fkom the law of iterated expectations and Proposition B.4 we obtain the
following result, which should be well known from elementary probability theory.
Proposition B.35 If px denotes the distribution measure for X then, for any
random variable Y :
438                         PROBABILITY THEORY


If X and 6 are independent, i.e. if u {X) and 6 are independent sigma-algebras,               In t
then it seems reasonable to expect that 9 does not contain any information about              ent
X. The technical formulation of this intuition is as follows.                                 ever
                                                                                              imp
Proposition B.36 Assume that X is integrable, and that X and 6 are
independent. Then
                                                                                              P(/
                                                                                              the
                          E [ YI X ] = E [ Y ] .                                          r   has
Proof Left as an exercise.
It is well known that E [ X ] is the optimal mean square deterministic predictor
of X. The corresponding result for conditional expectations is as follows.
Proposition B.37 Let ( R , 3 , P ) be a given probability space, let 6 be a sub-              for 2
sigma-algebra o f 3 and let X be a square integrable random variable.
   Consider the problem of minimizing




where Z is allowed to vary over the class of all square integrable 6-measurable
random variables. The optimal solution 2 is then given by



Proof Left to the reader. See the exercises for a hint.                        .

In geometrical terms this means that E[XI 61 is the orthogonal projection (in
L2 (R, 3 , P ) ) of X onto the closed subspace L2 (R, G , P). For square integrable           alge
random variables one may in fact use this as the definition of the conditional                L"
expectation. This definition can then be extended from L2 to L1 by continuity,                6-n:
since L~ is dense in L1.                                                                      Prc
                                                                                              Raa
B.6 Equivalent Probability Measures
In this section we discuss absolute continuity and equivalence for the particular
case of probability measures. The results in this section will be heavily used in             Prc
Chapter 10.                                                                                   and
    Let therefore P and Q be probability measures on (R,3). We immediately
have the following simple result.
Lemma B.38 For two probability measures P and Q, the relation P           Q on 3
holds if and only if

                    P(A) = 1 + Q(A) = 1,        for all A E 3.              (B.14)

Proof Exercise for the reader.
                                                                                      i       whe
                       EQUIVALENT PROBABILITY MEASURES                             439


    In the context of probability measures we thus notice that although two equival-
I
    ent measures P and Q may assign completely different probabilities to a fixed
    event A, but all events which axe impossible under P (i.e. P(A) = 0) are also
    impossible under Q. Equivalently, all events which are certain under P (i.e.
    P(A = I)), are also certain under Q. It also follows directly (prove this!) from
    the definition that if an event A has strictly positive P-probability, then it also
    has strictly positive Q-probability (and vice versa).
        From the Radon-Nikodym Theorem we know that Q << P on the probability
    space ( Q 3 ) if and only if there exists 3-measurable mapping L : R -+ R+
    such that
                               L  ~Q(W)=      J1~ ( wdp(w)
                                                       )                        (B.15)

    for all A E 3.Since Q is a probability measure L must also have the property that




    In other words, the Radon-Nikodym derivative L is a nonnegative random vari-
    able with E P [L]= 1, and it is often referred to as the likelihood ratio between
    Q and P. Written in terms of expected values, it follows from (B.15) that, for
    any random variable X E L1(Q) we have
                                   E Q [ x ]= E ~ [ - LX ] .                    (B.16)
       Suppose now that Q << P on 3 and that we also have a smaller sigma-
    algebra G E 3 . We then have two Radon-Nikodym derivatives; LF on 3 , and
    LB on 6, and these are typically not equal, since L7 will generically not be
    Q-measurable. The following result shows how they are related.
    Proposition B.39 Assume that Q << P o n 3 and that G C 3. T h e n the
    Radon- Nzkodym derivatives LF and LB are related by


    Proof We have to show that E P [ L F G]
                                         \ is G-measurable (which is obvious)
    and that, for any G E Q,



    This, however, follows immediately from the trivial calculation



    where we have used the fact that G E      b    F.
440                        PROBABILITY THEORY


Example B.40 To see an example of the result above let           = {1,2,3} and          Intc
define
                   3 = 2 " , 8 = {fl,@,{1},{2,3}}
and
                            4,
                       P(l) =      P(2) = ,g      P(3) = +,                             Thl
                       Q(l)=i,     Q(2)=3,        Q(3)=5.                               EP
We see directly that



and it is obvious that L7 is not 8-measurable. Since P({2,3}) = 314, and
Q({2,3}) = 213, the local scale factor on {2,3} is 918, so LP is given by



and we also have the simple calculation




    The formula (B.16) gives us expectations under Q in terms of expectations
under P, and a natural question is how conditional expected values under Q are
related to conditional expectations under P . The following very useful result,
known as the "Abstract Bayes' Formula" solves this problem.
Proposition B.41 (Bayes' Theorem) Assume that X is a random variable
on ( R , 3 , P ) , and let Q be another probability measure on (R, 3) with Radon-
Nikodvm derivative
                                                                                    I   Exc
                                                                                    i
Assume that X E L1(R, 3,Q) and that 6 is a sigma-algebra with 8 C 3. Then
                                                                                    i EExxcc
                                                                                        at01
                                                                                        aPP
Proof We start by proving that                                                          Exc



We show this by proving that for an arbitrary G E G the P-integral of both sides
coincide. The left-hand side becomes
                                                                                        Exc
                                                                                        Ass
                                        EXERCISES


    Integrating the right-hand side we obtain



1   Thus (B.19) holds P-as. and since Q << P also Q-a.s. It remains to show that
           I # 0 Q-a.s. but this follows from the calculation
    E ~ [ LQ]

               Q ( E ~ I LGII = 0) =   1
                                       {EPILIP]=O} dQ = i E p [ L I P ] = O )
                                                                                LdP

                                                     E ~ [ LQ]I d~ = 0.
                                   = iEp[LIP]=O]




    B.7 Exercises
    Exercise B . l Prove Proposition B.4 by carrying out the following steps:
         Prove the proposition in the case when g = IA where A is an arbitrary
         Bore1 set.
         Prove that the proposition holds when g is a simple function.
         You can WLOG assume that g is nonnegative (why?),so now approximate
         g by simple functions.
    Exercise B.2 Prove Proposition B.lO.
    Exercise B.3 Prove Proposition B.12.
    Exercise B.4 Prove Corollary B.22.
    Exercise B.5 Prove Proposition B.26.
    Exercise B.6 Prove (B.6) by using Proposition A.26.
    Exercise B.7 Prove Proposition B.31 by first proving it when X is an indic-
    ator function, then extend by linearity to simple functions and at last by
    approximating X with a sequence of simple functions.
    Exercise B.8 Prove Proposition B.31 by the following steps:
         Choose a fixed X.
         Show that for any A E a {X) you have E[IA1 Q] = E [ I A ] .
         Extend by linearity to simple a {XI-measurable functions and at last by
         approximating X with a sequence of simple functions.
                                                                    >
    Exercise B.9 Let h : R + R be a function such that h 0, h' 2 0 and h(0) =O.
    Assume that X is a nonnegative random variable. Prove that

                            ~ [ h ( x )=]   JW
                                            0
                                              h1(t)p(x t ) dt.
442                        PROBABILITY THEORY


Exercise B.10 Prove Proposition B.36 by starting with the case when X = IA
and then do the usual steps.
Exercise B . l l Prove Proposition B.37 by going along the following lines:
      Prove that the "estimation error" X - E [ X (Q]is orthogonal to L2(0, Q,P)
      in the sense that for any Z E L2(0, Q,P) we have

                                                                                       C.l
                                                                                       Let
      Now prove the proposition by writing                                             in (



      and use the result just proved.

B.8 Notes
For the mathematician, Durrett (1996) is a very good standard reference on prob-
ability theory. For the economist (and also for many mathematicians) the recent
text by Jacod and Protter (2000) is the perfect, and amazingly far reaching,
reference.
                                                                                       Not
                                                                                       In z
                                                                                       tim
                                                                                   1   so*
                                                                                       Pro
                                                                                       war
                                                                                       also
                                                                                       in a
                                                                                       SO 1
                                                                                       For
                                                                                       pro1
                                                                                       typi
                                                                                       in t


                                                                                       zerc

                                                                                       For
                                                                                       mar
                                                                                       Prc
                                                                                       is a
                   l     *   5   ;'~%,A'F~C@&




                                 Appendix C
             MARTINGALES AND STOPPING TIMES*

C . l Martingales
Let (R, F,P, E) be a filtered probability space, and let X be a random process
in continuous or discrete time.
Definition C.l The process X is an 3-martingale if
  1. X is 3-adapted.
  2. X t E L1 for each t.
  3. For every s and t with 0 5 s 5 t it holds that


If the equality sign is replaced by 5 (2) then x is said to be a submartingale
(supermartingale).

Note that the martingale property is always with respect to some given filtration.
In all honesty it should be mentioned that while martingale theory in discrete
time is a fairly straightforward activity, martingale theory in continuous time is
sometimes rather complicated and there are lots of highly nontrivial technical
problems. In order for the theory to work well in continuous time we typically
want our processes to have right continuous trajectories with left limits, and we
also need to assume that the filtration E has some regularity properties. However,
in almost all concrete situations these technical problems can be taken care of,
so with almost no danger the reader can safely forget about the technicalities.
For the rest of this book we simply ignore these problems. Below we only give
proofs for the discrete time case. The proofs for the continuous time results are
typically obtained by sampling the continuous time processes at discrete points
in time and then performing a limiting argument.
    It follows immediately from the definition, that a martingale is characterized
by the property that the conditional expectations of a forward increment equals
zero, i.e. that
                        E [ X t - XsI Fs]= 0, for all s 5 t.
For martingales in discrete time, it is in fact enough to demand that the
martingale property holds for one single time step.
Proposition C.2 A n adapted integrable discrete time process {X,; n = 0,1, . . .)
is a martingale w.r.t. the filtration {F,;n = 0,1,. . .) if and only if
I'   444
                            MARTINGALES AND STOPPING TIMES


     Proof       Easy exercise.
     Two of the most common types of martingales are the following.
     Example C.3 Let Y be any integrable random variable on the filtered space
     (Q,3,P,Z), and define the process X by



     Then it is an easy exercise to see that X is an 3t-martingale. In particular, this
     implies that on a compact interval [0, TI any given martingale M is always
     generated by its final value MT by the formula


                                                                                               an,
     Note that this only holds on a finite closed interval. The more complicated case
     of an infinite or open interval will be discussed below.                               I [O,
     Example C.4 If X is a process with independent increments on (Q,3,P,3),
     and if also E [Xt - X,] = 0, for all s , t , then X is a martingale.
     Example C.5 Let (2,; n = 1 , 2 , .. .} be a family of independent integrable
     random variables, and define the discrete time process X by




     then X is a martingale w.r.t. the filtration FX.
         There is a close connection between martingale theory, the theory of con-
     vex functions, and the theory of harmonic functions. The correspondence is as
     follows:
                                                                                              We
               Martingale theory       Convex theory      Harmonic theory                     De
               martingale              linear function    harmonic function                   con
               submartingale           convex function    subharmonic function
               supermartingale         concave function   superharmonic function

         We will not go deeper into this, but from convexity theory we recognize
     directly the structure of the following result.
                                                                                              Prc
     Proposition C.6 Let X be a process on (Q,3, P, E)
                                                                                              intt
           a   If X is a martingale and i f f : R -,R is a convex (concave) function such     by -
               that f (Xt) is integrable for all t, then the process Y defined by             the


                                                                                              Prc
               is a submartingale (supermartingale).                                          imp
                                       MARTINGALES                                      445



       a   If X is a submartingale and i f f : R -t R is a convex nondecreasing
           function such that f (Xt) is integrable for all t , then the process Y defined by



           is a submartingale.
    Proof     Jensen's inequality for conditional expectations.
    On every finite interval [0, TI, every martingale X is of the form



    and a natural question is if every martingale X also on the infinite interval
    [0, oo] has a representation of this form, i.e. if there always exists some random
    variable X, such that
                                     xt = E [ X w I 3 t l .                        ((3.4)
    In general the answer is no, and a symmetric random walk on the integers is
    a typical counter example. In order to have a representation of the form (C.4)
    one needs some further integrability of X. We will not prove the most general
    (and hard) version of the results but for completeness, sake we will cite the most
    general convergence theorem without proof.
    Theorem C.7 Suppose that X is a submartingale satisfying the condition

                                      sup E [x:]    < oo.
                                      t2o   '




    Then there exists a random variable Y such that Xt + Y , P-a.s.
    We now move to the more manageable quadratic case.
    Definition C.8 A martingale X is called square integrable i f there exists a
    constant M such that




1   We now have the following nice result.
    Proposition C.9 (Martingale Convergence) Assume that x is a square
    integrable martingale. Then there exists a random variable, which we denote
    by Xw, such that Xt -t X, i n L2 and P - a s . as t -t oo. Furthermore we have
    the representation


1
1
    Proof Since x      -   Xt=E[X,1,Ft],      foralltL0.                     (c.5)
                         x2 is convex, the process Xz is a submartingale, which
    implies that the mapping mt = E [x:] is nondecreasing. The assumption that
446                 MARTINGALES AND STOPPING TIMES


X is square integrable is thus equivalent to the existence of a real number c < oo
such that mt t c. We will now prove L2-convergence by showing that Xt is
Cauchy in L 2. We have



                            = E [E [x: - 2XaXt + x:] Fa]]
                            = E [X:] - 2E [XaE [Xt1 F a ] ] + E [x:]
                            = E [X:]   - E [x:] = mt - m,.

Since mt + c it follows that mt is Cauchy and thus that Xt is Cauchy in L 2.
Since L 2 is complete this implies the existence of a random variable Y E L2 such
that Xt + Y in L2. The almost sure convergence then follows from Theorem C.7
In order to prove (C.5), it is enough (why?) to show that for every s and every
A E 3. we have
                              J,X.~P=I,Y~P,
and this follows easily from the fact that for every t > s the martingale property
implies that                                                                             c.:
                                                                                         Ma
                                                                                         for]
                                                                                         an(
If now t + oo, it follows (how?) from the L2-convergence that, as t -+          oo,
we have



C.2     Discrete Stochastic Integrals
In this section, we discuss briefly the simplest type of stochastic integration,        anc
namely integration of discrete time processes. This will thus serve as an intro-
duction to the more complicated Wiener case later on, and it is also important
in its own right. The central concept here is that of a predictable process.            the

Definition C.10 Consider a filtered space ( R , F , P , z ) i n discrete time, i.e.
n = 0 , 1 , 2 ,....
        A random process X is 2-predictable zf, for each n, Xn is Fn-l
        measurable. Here we use the convention F-1 = FO.
      a For any random process X , the increment process AX is defined by

                                                                                      e Thf
                                                                                        atic
        with the convention X-1 = 0.                                                    usec
                             LIKELIHOOD PROCESSES                             447


         For any two processes X and Y , the discrete stochastic integral process
         X * Y is defined by




         Instead of (X * Y), we will sometimes write    X, dY,.
Note that a predictable process is "known one step ahead in time". The reason
why we define AX by "backward increments" is that in this way AX is adapted,
whenever X is.
   The main result for stochastic integrals is that when you integrate a
predictable process X w.r.t. a martingale M, the result is a new martingale.
Proposition C . l l Assume that the space ( f l , 3 , P,3) carries the processes X
and M where X is predictable, M is a martingale, and Xn(AM), is integrable
for each n. Then the stochastic integral X * M is a martingale.
Proof Left as an exercise to the reader.

C.3 Likelihood Processes
Martingale theory is closely connected with absolutely continuous measure trans-
formations and arbitrage theory. This will be discussed in detail in Chapter 10
and here we will only state some basic facts.
    We consider a filtered probability space (fl,3,P,  z) on a compact interval
[0, TI. Suppose now that LT is some nonnegative integrable random variable
in FT.We can then define a new measure Q on FTby setting



and if
                                    E~ [LT] = 1,
the new measure will also be a probability measure.
   From its definition, LT will be the Radon-Nikodym derivative of Q w.r.t. P
on FTso Q << P on FT.Hence we will also have Q << P on Ft for all t 5 T
and thus, by the Radon-Nikodym Theorem, there will exist a random process
{Lt; 0 5 t 5 T) defined by




The L process is known as the likelihood process for the measure transform-
ation from P to Q and it has the following fundamental property, which will be
used frequently.
448                MARTINGALES AND STOPPING TIMES


Proposition C.12 With assumptions as above, the likelihood process L, defined
by ((2.8) is a (P,.F)-martingale.

Proof The statement follows directly from Proposition B.39.

Using the likelihood process, we can also characterize a Q-martingale in terms
of the P measure.

Proposition C.13 A process M is a Q-martingale i f and only i f the process
L - M is a P-martingale.

Proof Exercise for the reader.                                                0
                                                                                       In
C.4 Stopping Times
Consider again a filtered space (a,F , P,.F) and a martingale X on the space.
                                                                                   1   oby
                                                                                       ba
                                                                                       thi
A natural question, which we will encounter in connection with American
                                                                                       fut
options, is whether the martingale property also holds when the deterministic
times are replaced by stochastic times, i.e. whether we always have the equality
                                                                                       we
                                                                                       t io.
                                                                                   t   '"
                                                                                       ter
where S and T are random times with S 5 T . It is rather clear that we cannot
expect a strong theory unless we restrict the study to those random times which
in some sense are adapted to the information flow given by the filtration. These
are the so called stopping times.

Definition C.14 A stopping time w.r.t. the filtration .F 2:s a nonnegative
random variable T such that



A stopping time is thus characterized by the fact that at any time t we can,           Prc
based upon the information available at t , decide whether T has occurred or           (0,
not. This definition may seem a bit abstract, but in most concrete situations it       cast
is very easy to see whether a random time is a stopping time or not. A typical         Del
example of a stopping time is obtained if X is an adapted discrete time process        ana
and we define T as a hitting time i.e. we define T by




where A C R is some Bore1 set. T is thus the first time when X enters into
the set A, and intuitively it is obvious that we can decide whether the event          Prc
{T 5 n) has occurred, based upon observations of X at the times O,1,2,. . . , n.       iten
                                 STOPPING TIMES                                     449


Thus T is a stopping time, and we obtain a formal proof by choosing a fixed n
and noting that
                                                               n
          {T(w)   < n) = {Xt(w) E A, for some t 5 n) = U{Xt E A).
                                                              t=O

Since X is adapted we have {Xt E A) E 3 t Tt Fn,so {T I n) E 3n.
   A typical example of a random time which is not a stopping time is given by

                           T(w) = sup{n 2 0; X, E A).

In this definition, T is thus the last time that X visits A, and it is again intuitively
obvious that in the generic case we cannot decide whether T has occurred or not
based upon the basis of observations upon Xo,XI,        . . . Xn since this would imply
that at time n we already know if X will visit A or not at some time in the
future.
    In order to be able to even formulate the equality (C.9) we must define what
we mean by the expression FT for a stopping time T. Intuitively the interpreta-
tion is of course that 3T   = "the information generated by the flow 3 up to the
random time T",but it is not obvious how to formalize this in mathematical
terms. The generally accepted definition is the following.

Definition C.15 Let T be an 3 stopping time. The sigma-algebra FT is defined
as the class of events satisfying




We now have some natural results.

Proposition C.16 Let S and t be stopping times on the filtered space
( R , 3 , P,.F), and let X be an adapted process, which i n the continuous time
case is assumed to have trajectories which are either left- or right-continuous.
Define V and A by x V y = max[x,y] and x A y = min [x, y] for any real number,
and define S V T by (SV T)(w) = S(w) V T(w). Then the following hold:
      If S 5 T , P-a.s. then FSC_ FT.
      S V T and X A T are stopping times.
      If T is P - a s . finite or i f X, is well defined i n Fm, then XT is
      FT-me~s~7mb1e.

Proof The first two items are left as easy exercises, and we prove the third
item only for the discrete time case. To show that XT is FT-measurable we have
450                  MARTINGALES AND STOPPING TIMES


to show that {XT E B ) E FT for every Bore1 set B , so we thus have to show
that for every n we have {XT E B ) n { T 5 n ) E Fn.We obtain


{ X T E B ) ~ { T< n ) = { X T E ~     )   U n{ ~ = k=
                                                     )  U({x*E B ) ~ { T =k ) ) .
                                           k=o         k=~              (C.13)

      Since X is adapted and T is a stopping time, {Xk E B ) and {T = k) are in
Fkwhich is included in Fn.
We now prove that the martingale property is stable under stopping.
Proposition C.17 Let X be a martingale and let T be a stopping time. Then
the stopped process xT,defined by

                                                                                        B3
                                                                                        us.
is a martingale.

Proof We only give the proof for the discrete time case. For this we define the
process h by hn = I { n 5 T ) , n = 0,1,2. . ., where I denotes the indicator of
the event within the bracket. Now, { n 5 T ) = { T < n)' = { T 5 n - 1)'. Since
T is a stopping time we thus see that h , E 3n-1 so h is predictable. Furthermore       C.
we have the obvious equality                                                        I   Er
                                                                                        spi




so from Proposition C.ll we see that xTis a martingale.
                                                                                        Eli
We finish by stating a fairly general version of the "optional sampling theorem"        utt
which shows that the martingale property is preserved under random sampling,            fur
but we only give the proof for a simple special case.
Theorem C.18 (The Optional Sampling Theorem) Assume that X is a
martingale satisfying
                                 sup E [x:]1 00
                                 t2o
Let S and T be stopping times such that S 5 T . Then


                                                                                    [   Ex
If X is a submartingale satisfying the same integrability condition then (C.15)         ind
holds with = replaced by 2 .
                                      EXERCISES                              451



Proof We will be content with proving the result in discrete time and for the
case when X is a martingale, the submartingale case being a bit harder. From
Proposition C.9 it follows that there exists an integrable random variable Y
such that
                        X n = E I Y I F n ] , n = 0 , 1 , ....         (C.16)
It is thus enough (why?) to show that for any stopping time T we have



i.e. we have to show that for every A E FTwe have




By writing A as A = Un (A n{T = n)), noting that A n {T = n) E Fn,and
using (C.16) we obtain




C.5 Exercises
Exercise C.l Show that for any integrable random variable Y on a filtered
space (a,3,P, E ) ,the process X defined by



is a martingale.
Exercise C.2 Let (2,) be a sequence of i.i.d. (independent identically distrib-
uted) random variables with finite exponential moments of all orders. D e h e the
function cp : R -t R by
                               cp(X) = E [eXZn],
and define the process X by

                               eASn                  n
                      xn= - where Sn=                     Zk.
                              [cp(X)ln'             k=l

Prove that X is an Fn-martingale, where Fn= o {Zi; i = 1,.. . , n).
Exercise C.3 Prove that, for any stopping time T, FT,defined by (C.lO) is
indeed a sigm&algebra.
Exercise C.4 Prove Proposition C.11.
452                  MARTINGALES AND STOPPING TIMES


Exercise C.5 Prove Proposition C.6.
Exercise C.6 Show that in discrete time, the defining property {T 5 t ) E 3 t
for a stopping time, can be replaced by the weaker condition
                             {T = n ) E Fn, for all n.
Exercise C.7 Prove the first two items in Proposition C.16.
Exercise C.8 A Wiener process W is a continuous time process with Wo = 0,
continuous trajectories, and Gaussian increments such that for s < t the incre
ment Wt - W, is normally distributed with mean zero and variance t - s.
Furthermore the increment Wt - W, is independent of 3,,where the filtration
is the internal one generated by W.
        (i) Show that W is a martingale.
       (ii) Show that W2 - t is a martingale.
      (iii) Show that for any real number X
                                     exp(XWt - At)
           is a martingale.
      (iv) For b < 0 < a we define the stopping time T as the first time that W
           hits one of the "barriers" a or b, i.e.


          Define pa and pb as
                pa = P (W hits the a barrier before hitting the b barrier,)
                pb = P (W hits the b barrier before hitting the a barrier,)
          SO pa = P(WT = a) and pa = P(WT = b). Use the fact that every
          stopped martingale is a martingale to infer that ,E[WT]= 0, and show
          that
                                      -b             a
                               p a = ~ P,b = -     a+b'
          You may, without proof, use the fact that P ( T < oo) = 1.
      (v) Use the technique above to show that


      (vi) Let T be as above and let b = -a. Use the Optional Sampling Theorem,
           Proposition C.17 and item (iii) above to show that the Laplace transform
           cp(X) of the distribution of T is given by


Exercise C.9 Prove Proposition C.13.
Hint: Use the Bayes7 Formula (B.18).
                             REFERENCES

Amin, K. & Jarrow, R. (1991). Pricing Foreign Currency Options under
  Stochastic Interest Rates. Journal of International Money and Finance 10,
  310-329.
Anderson, N., Breedon, F., Deacon, M., Derry, A. & Murphy, G . (1996).
  Estimating and Interpreting the Yield Curve. Wiley, Chichester.
Artzner, P. & Delbaen, F. (1989). Term Structure of Interest Rates: The
  Martingale Approach. Advances i n Applied Mathematics 10, 95-129.
Barone-Adesi, G. & Elliott, R. (1991). Approximations for the Values of
  American Options. Stochastic Analysis and Applications 9, 115-131.
Benninga, S., Bjork, T. & Wiener, Z. (2002). On the Use of Numeraires in
  Option Pricing. Journal of Derivatives 10(2), 43-58.
Bhar, R. & Chiarella, C. (1997). Transformation of Heath-Jarrow-Morton
  Models to Markovian Systems. European Journal of Finance 3(1), 1-26.
Bingham, N. & Kiesel, R. (1998). Risk-Neutral Valuation. Springer Verlag,
  Berlin.
Bjork, T. (1995). On the Term Structure of Discontinuous Interest Rates.
  Obozrenie Prikladnoi i Promyshlennoi Matematiki 2, 627-657 (in Russian).
Bjork, T. (1997). Interest Rate Theory. In W. Runggaldier (ed.), Financial
  Mathematics. Springer Lecture Notes in Mathematics, Vol. 1656. Springer
  Verlag, Berlin.
Bjork, T., di Masi, G., Kabanov, Y. & Runggaldier, W. (1997~).Towards a
  General Theory of Bond Markets. Finance and Stochastics 1, 141-174.
Bjork, T., Kabanov, Y. & Runggaldier, W. (1997b). Bond Market Structure in
  the Presence of Marked Point Processes. Mathematical Finance 7, 211-239.
Bjork, T. & Christensen, B.J. (1999). Interest Rate Dynamics and Consistent
  Forward Rate Curves. Mathematical Finance 9(4), 323-348.
Bjork, T. (2001). A Geometric View of Interest Rate Theory. In E. Jouini,
  J. Cvitanic and M. Musiela (eds), Option Pricing, Interest Rates and Risk
  Management. Cambridge University Press, Cambridge.
Bj&k, T. & Gombani, A. (1999). Minimal Realization of Interest Rate Models.
  Finance and Stochastics 3(4), 413432.
Bj&k, T. & Land&, C. (2002). On the Construction of Finite Dimensional Real-
  izations for Nonlinear Forward Rate Models. Finance and Stochastics 6(3),
  303-331.
Bjork, T. & Svensson, L. (2001). On the Existence of Finite Dimensional real-
  izations for Nonlinear Forward Rate Models. Mathematical Finance 11(2),
  205-243.
Bjork, T., Myhrman, J. & Persson, M. (1987). Optimal Consumption with
  Stochastic Prices in Continuous Time. Journal of Applied Probability 24,
  3547.
454                             REFERENCES


Black, F. (1976). The Pricing of Commodity Contracts. Journal of Financial
  Economics 3, 167-179.
Black, F., Derman, E. & Toy, W. (1990). A OnsFactor Model of Interest Rates
  and its Application to Treasury Bond Options. Financial Analysts Journal
  Jan.-Feb., 33-39.
Black, F. & Scholes, M. (1973). The Pricing of Options and Corporate Liabilities.
  Journal of Political Economy 81, 65W83.
Borodin, A. & Salminen, P. (1997). Handbook of Brownian Motion. Birkhauser
  Verlag, Basel.
Brace, A. & Musiela, M. (1994). A Multifactor Gauss Markov Implementation
  of Heath, Jarrow, and Morton. Mathematical Finance 4, 254-283.
Brace, A., Gatarek, D. & Musiela, M. (1997). The Market Model of Interest
  Rate Dynamics. Mathematical Finance 7, 127-154.
Brennan, M.J. & Schwartz, E.S. (1979). A Continuous Time Approach to Pricing
  Bonds. Journal of Banking and Finance July, 133-155.
Brockett, R.W. (1970). Finite Dimensional Linear Systems. Wiley.
Brockett, R.W. (1981). Nonlinear systems and nonlinear estimation theory. In
  M. Hazewinkel and J.C. Willems (eds), Stochastic Systems: The Mathematics
  of Filtering and Identification and Applications. Reidel.
Brennan, M.J. & Schwartz, E.S. (1982). An Equilibrium Model of Bond Pricing
  and a Test of Market Efficiency. Journal of Financial and Quantitative
  Analysis 17(3), 301-329.
Brigo, D. & Mercurio, F. (2001). Interest Rate Models. Springer Verlag, Berlin
  Heidelberg.
Carr, P. (1995). Two Extensions to Barrier Option Valuation. Applied Mathem-
  atical Finance 2, 173-209.
Carverhill, A. (1994). When is the spot rate Markovian? Mathematical Finance
  4, 305-312.
Cheyette, 0. (1996). Markov Representation of the Heath-Jarrow-Morton
  Model. Preprint. BARRA Inc.
Chiarella, C. & Kwon, K. (2001). Forward rate dependent Markovian trans-
  formations of the Heath-Jarrow-Morton term structure model. Finance and
  Stochastics 5 , 237-257.
Cochrane, J. (2001). Asset Pricing. Princeton University Press, Princeton, N.J.
Conze, A. & Viswanathan, R. (1991). Path Dependent Options: The Case of
  Lookback Options. Journal of Finance 46, 1893-1907.
Cox, J.C. & Huang, C.F. (1989). Optimal Consumption and Portfolio Choice
  when Asset Prices Follow a Diffusion Process. Journal of Economic Thwry
  49, 33-83.
Cox, J., Ingersoll, J. & Ross, S. (1981). A Rsexamination of Traditional Expect-
  ation Hypotheses about the Term Structure of Interest Rates. Journal of
  Finance 36, 769-799.
Cox, J.C., Ingersoll, J. & Ross, S. (1985~).An Intertemporal General Equili-
  brium Model of Asset Prices. Econometrics 53, 363-384.
                                REFERENCES                                  455


Cox, J., Ingersoll, J. & Ross, S. (1985b). A Theory of the Term Structure of
  Interest Rates. Econornetrica 53, 385-408.
Cox, J., Ross, S. & Rubinstein, M. (1979). Option Pricing: A Simplified
  Approach. Journal of Financial Economics 7 , 229-264.
Cox, J. & Rubinstein, M. (1985). Options Markets. Prentice Hall, Englewood
  Cliffs, N.J.
Cvitanib, J. (1997). Optimal Trading under Constraints. In W. Runggaldier
  (ed.), Financial Mathematics. Springer Lecture Notes in Mathematics,
  Vol. 1656. Springer Verlag, Berlin.
Dana, R. & Jeanblanc, M. (2003). Financial Markets i n Continuous Time.
  Springer Verlag, Berlin Heidelberg New York.
Da Prato, G. & Zabczyk, J. (1992). Stochastic Equations i n Infinite Dimensions.
  Cambridge University Press.
Davis, M.H.A. & Norman, A. (1990). Portfolio Selection with Transaction Costs.
  Mathematics of Operations Research 15, 676-713.
Davis, M.H.A. (1997). Option Pricing in Incomplete Markets. In
  M.A.H. Demptster and S. Pliska (eds), Mathematics of Derivative Securities.
  Cambridge University Press, Cambridge, pp. 216-226.
Delbaen, F. (1992). Representing Martingale Measures when Asset Prices are
  Continuous and Bounded. Mathematical Finance 2, 107-130.
Delbaen, F. & Schachermayer, W. (1994). A General Version of the Fundamental
  Theorem on Asset Pricing. Mathematishe Annalen 300, 463-520.
Delbaen, F. & Schachermayer, W. (1998). The Fundamental Theorem for
  Unbounded Processes. Mathematishe Annalen 312, 215-250.
Dellacherie, C. & Meyer, P.A. (1972). Probabilit6s et Potentiel. Hermann, Paris.
Doob, J.L. (1984). Classical Potential Theory and its Probabilistic Counterpart.
  Springer Verlag, New York.
Dothan, M. (1978). On the Term Structure of Interest Rates. Journal of
  Financial Economics 6, 59-69.
Duffie, D. (1989). Futures Markets. Prentice Hall, Englewood Cliffs, N.J.
Duffie, D. (1994). Martingales, Arbitrage and Portfolio Choice. First European
  Congress of Mathematics, Vol. 11, Birkhauser Verlag, Basel, pp. 3-21.
Duffie, D. (2001). Dynamic Asset Pricing (3rd edn). Princeton University Press,
  Princeton, N.J.
Duffie, D. & Huang, C. (1986). Multiperiod Security Markets with Differential
  Information. Journal of Mathematical Economics 15, 283-303.
Duffie, D. & Kan, R. (1996). A Yield Factor Model of Interest Rates.
   Mathematical Finance 6, 379-406.
Duffie, D. & Singleton, K. (1994). Modeling Term Structures for Defaultable
   Bonds. Graduate School of Business, Stanford University.
Durrett, R. (1996). Probability. Duxbury Press, Belmont.
Elliott, R.J. (1982). Stochastic Calculus and Applications. Springer Verlag,
  New York.
Fabozzi (1995). Bond Markets, Analysis and Strategies (3rd edn). Prentice Hall,
  Englewood Cliffs, N.J.
456                             REFERENCES


Filipovid, D. (1999) A Note on the Nelson-Siege1 Family. Mathematical Finance,
  9(4), 349-359.
Filipovid, D. (2001). Consistency Problems for Heath-Jam-ow-Morton Interest
   Rate Models. Springer Lecture Notes in Mathematics, Vol. 1760. Springer
  Verlag, Berlin Heidelberg.
Filipovid, D. & Teichrnann, J. (2001). Existence of Finite Dimensional Realiza-
  tions for Stochastic Equations. Journal of Functional Analysis (forthcoming).
Fleming, W. & Rishel, R. (1975). Deterministic and Stochastic Optimal Control.
  Springer Verlag, New York Heidelberg Berlin.
Fleming, W. & Soner, M. (1993). Controlled Markov Processes and Viscosity
   Solutions. Springer Verlag, New York.
Follmer, H. & Sondermann, D. (1986). Hedging of Non-Fkdundant Contingent
  Claims under Incomplete Information. In W. Hildenbrand and Mas-Cole11
  (eds), Contributions to Mathematical Economics. North-Holland, Amsterdam.
Frittelli, M. (2000). The Minimal Entropy Martingale Measure and the valuation
  Problem in Incomplete Markets. Mathematical Finance 10, 215-225.
Garman, M. & Kohlhagen, S. (1983). Foreign Currency Option Values. Journal
   of International Money and Finance 2, 231-237.
Geman, H. (1989). The Importance of the Forward Neutral Probability in a
  Stochastic Approach of Interest Rates. Working paper, ESSEC.
Geman, H., El Karoui, N. & Rochet, J.C. (1995). Changes of Numkraire,
  Changes of Probability Measure and Option Pricing. Journal of Applied
   Probability 32, 443-458.
Geske, R. (1979). The Valuation of Compound Options. Journal of Financial
   Economics 7 , 63-81.
Gerber, H. & Shiu, E. (1994). Option Pricing by Esscher Transforms. Bansac-
   tions of the Society of Actuaries 46, 51-92.
Geske, R. & Johnson, H. (1984). The American Put Option Valued Analytically.
   Journal of Finance 39, 1511-1524.
Goldman, M., Sosin, H. & Gatto, M. (1979). Path Dependent Options: "Buy at
  the High and Sell at the Low". Journal of Finance 34, 1111-1126.
Hansen, L. & Jagannathan, R. (1991). Implications of Security Market
  Data for Modles of Dynamic Economies. Journal of Political Economy 99,
  225-262.
Harrison, J. & Kreps, J. (1979). Martingales and Arbitrage in Multiperiod
  Securities Markets. Journal of Economic Theory 11, 418-443.
Harrison, J. & Pliska, S. (1981). Martingales and Stochastic Integrals in
  the Theory of Continuous Trading. Stochastic Processes 6 Applications 11,
  215-260.
Heath, D., Jarrow, R. & Morton, A. (1992). Bond Pricing and the Term
  Structure of Interest Rates. Ewnometrica 60(1), 77-106.
He, H. & Pearson, N.D. (1991). Consuption and Portfolio Policies with Incom-
   plete Markets and Short-Sale Constraints: The Finite Dimensional Case.
   Mathematical Finance 1(1), 1-10.
                                     REFERENCES                                  457


    Ho, T. & Lee, S. (1986). Term Structure Movements and Pricing Interest Rate
      Contingent Claims. Journal of Finance 41, 1011-1029.
    Huang, C.F. & Litzenberger, R. (1988). Foundations for Financial Economics.
      North-Holland, Amsterdam.
    Hull, J. (1997). Options, h t u r e s , and Other Derivatives (3rd edn). Prentice
      Hall, Englewood Cliffs, N.J.
    Hull, J. & White, A. (1987). The Pricing of Options on Assets with Stochastic
      Volatilities. Journal of Finance 42, 281-300.
    Hull, J. & White, A. (1990). Pricing Interest-Rate Derivative Securities. The
      Review of Financial Studies 3, 573-592.
    Hunt, P. & Kennedy, J. (2000). Financial Derivatives i n Theory and Practice.
      Wiley, Chichester.
    Ingersoll, J. (1987). Theory of Financial Decision Making. Rowman & Littlefield,
      Totowa, N.J.
    Inui, K. & Kijima, M. (1998). A markovian framework in multi-factor Heath-
      Jarrow-Morton models. JFQA 33(3), 423-440.
    Jacod, J. (1979). Calcul Stochastique et Probl2mes de Martingales. Springer
      Lecture Notes in Mathematics, Vol. 714. Springer Verlag, Berlin Heidelberg.
    Jacod, J. & Protter, P. (2000). Probability Essentials. Springer Verlag, Berlin
      Heidelberg.
    Jacod, J. & Shiryaev, A.N. (1987). Limit Theorems for Stochastic Processes.
I     Springer Verlag, Berlin Heidelberg.
I   Jamshidian, F. (1989). An Exact Bond Option Formula. Journal of Finance 44,
      205-209.
    Jamshidian, F. (1997). LIBOR and Swap Market Models and Measures. Finance
      and Stochastics 1, 293-330.
    Jarrow, R. & Madan, D. (1998). Valuing and Hedging Contingent Claims on
      Semimartingales. Finance and Stochastics 3, 111-134.
    Jarrow, R., Lando, D. & Turnbull, S. (1997). A Markov Model for the Term
      Structure of Credit Risk Spreads. Review of Financial Studies 10, 481-523.
    Jeffrey, A. (1995). Single factor Heath-Jarrow-Morton Term Structure Models
      Based on Markovian Spot Interest Rates. JFQA 30(4), 619-642.
    John, F. (1982). Partial Differential Equations. Springer Verlag, New York
      Heidelberg Berlin.
    Johnson, H. (1987). Options on the Maximum or the Minimum of Several Assets.
       Journal of Financial and Quantitative Analysis 22, 277-283.
    Karatzas, I. & Shreve, S. (1988). Brownian Motion and Stochastic Calculus.
      Springer Verlag, New York Heidelberg Berlin.
    Karatzas, I., Lehoczky, J., Shreve, S. & Xu, G.L. (1991). Martingale and Duality
      Methods for Utility Maximization in an Incomplete Market. SIAM Journal of
       Control and Optimization 29, 702-730.
    Karatzas, I., Lehoczky, J. & Shreve, S. (1987). Optimal Portfolio and Consump
      tion Decision for a "Small Investor" on a Finite Horizon. SIAM Journal of
       Control and Optimization 26, 1157-1186.
458                             REFERENCES


Korn, R. (1997). Optimal Portfolios. World Scientific, Singapore.
Kramkov, D. & Schachermayer, W. (1999). The Asymptotic Elasticity of Utility
  Functions and Optimal Investments in Incomplete Markets. Annals of Applied
  Probability 9(3), 904-950.
Kreps, D. (1981). Arbitrage and Equilibrium in Economies with Infinitely Many
  Commodities. Journal of Mathematical Economics 8, 15-35.
Krylov, R. (1980). Controlled Diffusion Processes. Springer Verlag, New York.
Lando, D. (1997). Modelling Bonds and Derivatives with Credit Risk. In
  M. Dempster and S. Pliska (eds), Mathematics of Derivative Securities.
  Cambridge University Press, Cambridge.
Leland, H. (1985). Option Pricing and Replication with Transaction Costs.
  Journal of Finance 47(4), 1283-1301.
Leland, H. (1994). Risky Debts, Bond Covenants and Optimal Capital Structure.
  Journal of Finance 49(4), 1213-1252.
Longstaff, F.A. & Schwartz, E.S. (1992). Interest Rate Volatility and the Term
  Structure. Journal of Finance 40, 1259-1282.
Magshoodi, Y. (1996). Solution of the Extended CIR Term Structure and Bond
  Option Valuation. Mathematical Finance 6, 89-109.
Margrabe, W. (1978). The Value of an Option to Exchange One Asset for
  Another. Journal of Finance 33, 177-186.
Merton, R. (1969). Lifetime Portfolio Selection under Uncertainty. The Continu-
  ous Time Case. Review of Economics and Statistics 51, 247-257.
Merton, R. (1971). Optimum Consumption and Portfolio Rules in a Continuous
  Time Model. Journal of Economic T h w r y 3, 373413.
Merton, R. (1973). The Theory of Rational Option Pricing. Bell Journal of
  Economics and Management Science 4, 141-183.
Merton, R. (1974). On the Pricing of Corporate Debt: The Risk Structure of
  Interest Rates. Journal Of Finance 29, 449-479.
Merton, R. (1976). Option Pricing When the Underlying Stock Returns are
  Discontinuous. Journal of Financial Economics 5, 125-144.
Merton, R. (1990). Continuous Time Finance. Blackwell, Oxford.
Meyer, P.A. (1976). Un Cours sur les Integrales Stochastiques. Seminaire de
  Probabilites X,Springer Verlag, Berlin Heidelberg New York.
Miltersen, K., Sandmann, K. & Sondermann, D. (1997). Closed Form Solutions
  for Term Structure Derivatives with Log-normal Interest Rates. Journal of
  Finance 52, 409-430.
Miyahara, Y. (1997). Canonical Martingale Measures of Incomplete Assets
  Markets. In Watanabe et al. (eds), Proceedings of the Seventh Japan-Russia
  Symposium. World Scientific, Singapore.
Musiela, M. (1993). Stochastic PDEs and Term Structure Models. Preprint.
Musiela, M. & Rutkowski, M. (1997). Martingale Methods i n Financial Modeling.
  Springer Verlag, Berlin Heidelberg New York.
                                REFERENCES                                  459


Myneni, R. (1992). The Pricing of American Options. Annals of Applied
  Probability 2, 1-23.
Bksendal, B. (1995). Stochastic Differential Equations (4th edn). Springer
  Verlag, Berlin Heidelberg.
Pelsser, A. (2000). Eficient Methods of Valuing Interest Rate Derivatives.
  Springer Verlag, Berlin Heidelberg.
Platen, E. (1996). Explaining Interest Rate Dynamics. Preprint. Centre for
  Financial Mathematics, Australian National University, Canberra.
Platen, E. & Rebolledo, R. (1995). Principles for Modelling Financial Markets.
  Journal of Applied Probability 33, 601-613.
Protter, Ph. (1990). Stochastic Integration and Differential Equations, Springer
  Verlag, New York.
Reiner, E. (1992). Quanto Mechanics. RISK, 5.
Rendleman, R. & Bartter, B. (1979). Two State Option Pricing. Journal of
  Finance 34, 1092-1110.
Revuz, D. & Yor, M. (1991). Continuous Martingales and Brownian Motion.
  Springer Verlag, Berlin Heidelberg.
Ritchken, P. & Sankarasubramanian, L. (1995). Volatility Structures of Forward
  Rates and the Dynamics of the Term Structure. Mathematical Finance 5,
  55-72.
Rogers, L.C.G. (1995). Which Model for Term-Structure of Interest Rates Should
  One Use? Mathematical Finance, IMA Vol. 65. Springer Verlag, New York,
  pp. 93-116.
Rogers, L.C.G. (1997). The Potential Approach to the Term Structure of Interest
  Rates and Foreign Exchange Rates. Mathematical Finance 7, 157-176.
Royden, D.L. (1988). Real Analysis. MacMillan, New York.
Rubinstein, M. & Reiner, E. (1991). Breaking Down the Barriers. RISK 4, 28-35.
Rudin, W. (1991). finctional Analysis. McGraw-Hill.
Schachermayer, W. (1994). Martingale Measures for Discrete Time Processes
  with Infinite Horizon. Mathematical Finance 4, 25-56.
Schachermayer, W. (2002). Optimal Investment in Incomplete Financial Mar-
  kets. In Geman et al. (eds), Mathematical Finance-Bachelier Congress 2000,
  427462.
Schweizer, M. (2001). A Guided Tour through Quadratic Hedging Approaches.
  In E. Jouini, J. Cvitanic and M. Musiela (eds), Option Pricing, Interest Rates
  and Risk Management. Cambridge University Press, Cambridge.
Schweizer, M. (1988). Hedging of Options in a General Semimartingale Model.
  Dissertation, ETH, Zurich.
Schweizer, M. (1991). Option Hedging for Semimartingales. Stochastic Processes
  and Their Applications 37, 339-363.
Shirakawa, H. (1991). Interest Rate Option Pricing with Poisson-Gaussian
  Forward Rate Curve Processes. Mathematical Finance 1, 77-94.
460                            REFERENCES


Shiryayev, A.N. (1978). Optimal Stopping Rules. Springer Verlag, Berlin
  Heidelberg.
Steele, J.M. (2001). Stochastic Calculus and Financial Applications. Springer
  Verlag, New York Berlin Heidelberg.
Sundaresan, S. (1997). Fixed Income Markets and Their Derivatives. South-
  Western College Publishing, Cincinnati Ohio.
VasiEek, 0. (1977). An Equilibrium Characterization of the Term Structure.
  Journal of Financial Ewnomics 5, 177-188.
                                                                   -------     fox
                                                                               br rrl

                                         INDEX


M, 67                                        Black-Scholes
A d * , 74                                     equation, 97, 171
AaaAu, 274                                     formula for European call options, 101
absolutely continuous measures, 416            model, 89, 169-174
absorbed process, 254                             absence of arbitrage in, 170
  density of, 255                                 completeness of, 112-117, 172
accrual factor, see interest rate swap            with dividends, see dividends
adapted, 39, 429                             bond options, see interest rate models
adjoint operator, 74                         bonds, 302-303, 315
ffine term structure, 329, 331                 bond price dynamics, 306
arbitrage, 7, 16, 27, 92                       consol, 315
ATS, see ffine term structure                  convexity, 314
                                               coupon bond, 302
backing out parameters, 222                    discount, 302
backward equation, see Kolmogorov              duration, 313
barrier contract, 254-267                      face value, 302
   down-and-in                                 fixed coupon, 310
      European call, 266                       floating rate, 311
     general pricing formula, 265              maturity, 302
   down-and-out, 256                           principal value, see face value
      bond, 262                                yield
      European call, 263                          to maturity, 313
     general pricing formula, 257                 zero coupon, 313
      put-call parity, 264                     zero coupon, 302
     stock, 263                              Bore1
   in-out-parity, 265                          algebra, 412
   ladder, 267-268                             set, 412
     definition of, 267                      bull spread, 131
     pricing, 268
   up-and-in                                 calibration, 222
     general pricing formula, 266            cap, 365
   upand-out                                 caplet, 369
     European put, 264                       Cauchy sequence, 407
     general pricing formula, 260            Cauchy-Schwartz inequality, 408
Bayes' theorem. 440                          change of numeraire, 34&367
bijective mappihg, 395                       complete market, 10, 18, 31, 111-120,
binomial algorithm, 23                              188, 238
binomial model, 5-25                           definiton of, 111
  multiperiod, 15-25                         conditional expectation, 432-438
     pricing, 24                             consol, see bonds
  single period, 5-14                        consumption process, 83
     pricing, 12                             contingent claim, 3, 9, 17, 30, 90
Black's formula                                hedgeable, 111
  for caplets, 369                             reachable, 10, 18, 111, 188
  for futures options, 104                     simple, 90
  for swaptions, 382                         contract function, 9, 17, 90
                                            INDEX


control process, see optimal control                Feynman-KaE formula, 69-71, 77, 78
convexity, see bonds                                filtration, 39, 429
cost of carry, 234, 394                             financial derivative, 9
countable set, 396                                  First Fundamental Theorem, 29, 137,
counting measure, 402                                        141, 144, 150
currency derivatives, 239-253                       fixed income instrument, 302
  including foreign equity, 242-248                 floor, 365
     pricing formula, 245                           flow of information, see filtration
  pure currency contracts, 23S242                   Fokker-Planck equation, 74
     option pricing, 241                            forward
     pricing formulas, 241                             contract, 1, 102, 325, 389
                                                       price, 2, 102, 389
deflator, 350                                             formula, 390
delta, 124                                                relation to futures price, 393
   for European call, 125                              price formula, 103
   for European put, 132                               price, relation to futures price, 103
   for underlying stock, 129                        forward equation, see Kolmogorov
   hedging, 126-130                                 forward measure, 349, 355
A, see delta                                        forward rate agreement, 314
delta neutral, see portfolio                        forward rate of interest, see interest rates
derivative, 3, 90                                   Fubini's theorem, 414
diffusion, 36                                       futures
diffusion term, 36                                     contract, 103, 391
dividends, 85-87, 225-238                              options on, 103                             in
   completeness, 238                                   price, 103, 391                             in
   continuous yield, 85, 232-235                          formula, 393                             in
      pricing equation, 234                               relation to forward price, 393           in
      risk neutral valuation, 234                      price formula, 103                          in,
   cumulative, 85                                      price, relation to forward price, 103       in
   discrete, 225-231                                FF,39, 428                                     in
      jump condition, 226
     pricing equation, 228                            gain process, 86, 234
     risk neutral valuation, 230                      gamma, 124
  general continuous, 235-237                           for European call, 125
     pricing equation, 236                              for European put, 132
     risk neutral valuation, 236                        for underlying stock, 129
     with stochastic short rate, 237                    hedging, 126130
drift term, 36                                      ,'I see gamma
duration, see bonds                                  gamma neutral, see portfolio
dynamic programming, see optimal                      GBM, see geometric Brownian motion
         control                                     geometric Brownian motion, 63-65
Dynkin operator, 67                                     expected value of, 65
                                                        explicit solution for, 65
EMM, 136, see martingale measure                      Girsanov
equivalent measures, 416                                kernel, 162
exchange rate, 239                                      theorem, 160
  Q-dynamics of, 241                                       converse of, 164
expectation hypothesis, 357                             transformation, 158-165
exponential utility, 299                             greeks, 123
eyfE IYl Ftl, 42
                                                    Holder inequality, 406
Farkas' Lemma, 27                                   Hamilton-Jacobi-Bellman equation, see
Fatou's Lemma, 403                                        optimal control
feedback control law, see optimal control           Hansen-Jagannathan bounds, 201
                                            INDEX


Heath-Jarrow-Morton (HJM), see                         forward swap, 312
       interest rate models                            forward swap rate, 380
heaviside, 261                                         par swap rate, 380
hedge, 111                                             pricing, 312
Hessian, 61                                            swap rate, 312
Hilbert space, 407-410                                 swap rate formula, 313
HJB, see Hamilton-Jacobi-Bellman                    interest rates, 303-305, 315
Ho-Lee,see interest rate models                        forward rate, 303, 324
homogeneous contract, 185                                 continuously compounded, 304
  pricing equation, 186                                  dynamics of, 306
Hull-White, see interest rate models                     expectation hypothesis, 357
                                                          instantaneous, 304
implied parameters, 222                                   LIBOR, 304
incomplete market, 205-224                                simple, 304
   multidimensional, 214-223                           LIBOR, 369
     pricing equation, 217                             short rate, 88, 304
     risk neutral valuation, 217                         dynamics of, 305, 316, 326
   scalar, 205                                         spot rate
     pricing equation, 211                                continuously compounded, 304
     risk neutral valuation, 212                          LIBOR, 304
   with stochastic interest rate, 218-219                simple, 304
     pricing equation, 219                          invariance lemma, 143, 350
     risk neutral valuation, 219                    inversion of the yield curve, 327
independence, 430                                   It6 operator, 67
indicator function, 399                             Itd's formula, 47, 48, 55, 61
infinitesimal operator, 67                             for correlated W, 56
information, 3 8 4 0                                   multidimensional, 54
injective mapping, 395
integral, 3 9 M 0 4                                 Kolmogorov
interest rate models                                  backward equation, 73
   Black-Derman-Toy, 327                              backward operator, 67
   CIR, 327, 339                                      forward equation, 74
     bond prices, 335                               Kreps-Yan Separation Theorem, 140
   Dothan, 327, 338
   Gaussian forward rates, 363-364
     bond options, 364
   HJM, 340                                         Lebesgue dominated convergence
     drift condition, 341, 342                              theorem, 404
     forward rate dynamics, 340                     Lebesgue integral, 415
   Ho-Lee, 327, 338, 344                            LIBOR, see interest rates
     bond options, 335                              likelihood process, 447
     bond prices, 334                               likelihood ratio, 439
   Hull-White, 327, 345, 361                        linear functional, 409
     bond options, 338, 362                         lookback contract, 268-270
     bond prices, 337                                  pricing a lookback put, 269
   LIBOR market model, 368-379                      L p space, 406
     definition of, 372
  swap market model, 382-387                        market price of risk, 181, 200, 210-214,
     definition of, 383                                   216, 22Ck223, 248-252, 321
   twefactor models, 339                             domestic, 248
   VasiEek, 327, 338                                 foreign, 250
     bond options, 338                              martingale, 43, 443-451
     bond prices, 334                                characterization of diffusion as, 44
interest rate swap, 312, 325, 379-381                connection to optimal control, 300
   accrual factor, 381                               convergence, 445
                                            INDEX


martingale (cont.)                                  ODE, 37
  definition of, 443                                optimal consumption-investment, 288-301
   harmonic characterization of, 60                    a single risky asset, 288-291
  integral representation of, 154-158                   mutual fund theorem
  optional sampling of, 450                               with a risk free asset, 296
   PDE characterization of, 72                            without a risk free asset, 295
  square integrable, 445                               several risky assets, 291-301
  stochastic integral as, 44                           stochastic consumption prices, 298
  stopped, 450                                      optimal control, 271-301
martingale measure, 8, 9, 29, 100, 136,                control constraint, 273
         183, 213, 218, 22@223, 234, 236,              control law
         322, 324                                         admissible, 273
martingale modeling, 326                                  feedback, 273
martingale probabilities, 17                           control process, 272
Maximum likelihood estimation, 165
                                                       dynamic programming, 275
maximum option, see option
                                                       Hamilton-Jacobi-Bellman equation,
measurable function, 400
                                                               279, 287
measurable set, 398
measure, 398                                           martingale characterization, 300
measure space, 399                                     optimal value function, 276
metatheorem, 118                                       state process, 272
Minkowski inequality, 406                              the linear regulator, 284
money account, 305                                     value function, 276
monotone convergence theorem, 403                      verification theorem, 280, 287
multidimensional model, 175-204                     option
  absence of arbitrage, 193                            American, 10G108
  completeness of, 190, 195                            American call, 90, 108
  hedging, 188-190, 196                                American put, 108
  market prices of risk, 200                           Asian, 116
  pricing equation, 182, 186, 199                      barrier, see barrier contract
  reducing dimension of, 184-188                       binary, 253
  risk neutral valuation, 198                          binary quanto, 253
  stochastic discount factor, 201                      European call, 2, 89
  with stochastic interest rate, 218-219                  pricing formula, 101
     pricing equation, 219                             exercise date, 2, 89
     risk neutral valuation, 219                       exercise price, 89
Musiela                                                general pricing formula, 359, 361
  equation, 344                                        lookback, 116, see lookback contract
  parameterization, 344                                on bonds, see interest rate models
mutual funds, see optimal                              on currency
         consumption-investment                          pricing formula, 241
Mx ( t ) ,254                                          on dividend paying asset, see dividends
m x ( t ) ,254                                        on foreign equity, 243
                                                         pricing formula, 246
NA, see No Arbitrage                                  on futures, 103
NFLVR, see No Free Lunch with                            pricing formula, 104
        Vanishing Risk                                on maximum of two assets, 191
no arbitrage, 140                                      time of maturity, 89
no free lunch with vanishing risk, 140                 to exchange assets, 187, 351
normalized economy, 142
                                                      to exchange currencies, 253
Novikov condition, 163
                                                    orthogonal projection, 409
numeraire
                                                    OTC instrument, 98
  change of, 348-367
     likelihood process for, 354
  choice of, 353                                    partial differential equation, 67-79
  process, 350                                      partition, 404
                                         INDEX


PDE, see partial differential equation           risk neutral
portfolio, 6, 15, 27, 80-87, 143                    measure, see martingale measure
  admissible, 135                                   valuation, 8, 11, 148, 322
  buy-and-hold, 122                              running maximum, 254
  delta neutral, 124                                density of, 255
  dynamics, 83, 84, 86, 87                       running minimum, 254
  gain process, 86                                  density of, 255
  gamma neutral, 129
  hedging, 10, 18, 111, 188                      SDE, see stochastic differential equation
  locally riskless, 93, 96                       SDF, see stochastic discount factor
  Markovian, 83                                  Second Fundamental Theorem, 33, 146,
  relative, 84, 87                                       151, 198
  replicating, 111, see hedging                  SEK, 1
  self-financing, 16, 81, 83, 135, 143           several underlying, see multidimensional
     with dividends, 86                                  model
  strategy, 83                                   short rate, 88
  value process, 83, 86, 143                     sigma-algebra, 398
portfolio-consumptionpair, 83                    simple function, 400
  self-financing, 83                             singular measures, 416
power set, 397                                   spot rate, see interest rates
probability                                      state process, see optimal control
  measure, 422                                   stochastic differential equation, 62
  space, 422                                        GBM, 63
product measure, 414-415                            linear, 66
projection theorem, 409                          stochastic discount factor, 34, 149, 201
      I
n[t;X ,90                                        stochastic integral, 4 M 2
put-all parity, 123                                 discrete, 447
  for currency options, 253                      stopping times, 44-51
                                                 straddle, 131
  for equity with dividends, 237
                                                 submartingale, 43,443
                                                    connection to optimal control, 300
Q ~349,                                             subharmonic characterization of, 60
quanto products, 239                             supermartingale, 43, 443
                                                 surjective mapping, 395
                                                 swaption
Radon-Nikodym                                       Black's formula for, 382
   derivative, 417                                  definition of, 381
   theorem, 417
random process, 424                              T-claim, 90
   realization of, 425                           term structure equation, 322, 323
   trajectory of, 425                            theta, 124
random source, 118                                  for European call, 125
random variable, 422                             8,see theta
   composite, 423                                trace of a matrix, 61
   distribution measure of, 422                  triangle inequality, 408
   expected value, 423                           two-factor models, see interest rate
rate of return, 89                                       models
rho, 124
   for European call, 125                        uncountable set, 396
p, see rho
Riccati equation, 286                            value process, 7, 135, 143
Riesz representation theorem, 410                VasiEek, see interest rate models
risk adjusted measure, 100, see                  vega, 124
        martingale measure                         for European call, 125
risk free asset, 88                              V, see vega
                              INDEX


verification theorem,                   smile, 106
        see optimal control             spot, 370
volatility, 88, 104-105
  Black, 370, 382
                                      Wiener process, 36
  flat, 370
                                       correlated, 55-59
  forward, 370
                                       correlation matrix, 56
  historic, 105
  implied, 106
  matrix, 176                         yield, see bonds



---
normalized_id: shared-pdf-reference-introduction-to-computational-finance-without-agonizing-pain
exam_code: SHARED
material_scope: introduction to computational finance without agonizing pain.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Introduction to Computational Finance without Agonizing pain.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-introduction-to-computational-finance-without-agonizing-pain

                     An Introduction to Computational Finance
                              Without Agonizing Pain


                                          c Peter Forsyth 2007
                                                    P.A. Forsyth∗
                                                February 12, 2007



Contents
1 The First Option Trade                                                                                               3

2 The Black-Scholes Equation                                                                                           3
  2.1 Background . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .           3
  2.2 Definitions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        4
  2.3 A Simple Example: The Two State Tree . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                 4
  2.4 A hedging strategy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .           5
  2.5 Brownian Motion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .            5
  2.6 Geometric Brownian motion with drift . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .               9
       2.6.1 Ito’s Lemma . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .            11
       2.6.2 Some uses of Ito’s Lemma . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .             12
       2.6.3 Some more uses of Ito’s Lemma . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .              12
  2.7 The Black-Scholes Analysis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .            14
  2.8 Hedging in Continuous Time . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .              15
  2.9 The option price . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .          16
  2.10 American early exercise . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .          16

3 The Risk Neutral World                                                                                              17

4 Monte Carlo Methods                                                                                      19
  4.1 Monte Carlo Error Estimators . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21
  4.2 Random Numbers and Monte Carlo . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21
  4.3 The Box-Muller Algorithm . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22
      4.3.1 An improved Box Muller . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24
  4.4 Speeding up Monte Carlo . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26
  4.5 Estimating the mean and variance . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 27
  4.6 Low Discrepancy Sequences . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 27
  4.7 Correlated Random Numbers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29
   ∗ School of Computer Science, University of Waterloo, Waterloo, Ontario, Canada, N2L 3G1, paforsyt@elora.uwaterloo.ca,

www.scicom.uwaterloo.ca/ paforsyt, tel: (519) 888-4567x4415, fax: (519) 885-1208



                                                           1
   4.8   Integration of Stochastic Differential Equations . . . . . . . . . . . . . . . . . . . . . . . . . .   30
         4.8.1 The Brownian Bridge . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      31
         4.8.2 Strong and Weak Convergence . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        32
   4.9   Matlab and Monte Carlo Simulation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      35

5 The Binomial Model                                                                                         37
  5.1 A No-arbitrage Lattice . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39

6 More on Ito’s Lemma                                                                                           41

7 Derivative Contracts on non-traded Assets and Real Options                                                 44
  7.1 Derivative Contracts . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 44
  7.2 A Forward Contract . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 47
      7.2.1 Convenience Yield . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48
      7.2.2 Volatility of Foward Prices . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 49

8 Discrete Hedging                                                                                            49
  8.1 Delta Hedging . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 49
  8.2 Gamma Hedging . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 52
  8.3 Vega Hedging . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 53

9 Jump Diffusion                                                                                            54
  9.1 The Poisson Process . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 55
  9.2 The Jump Diffusion Pricing Equation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 56
  9.3 An Alternate Derivation of the Pricing Equation for Jump Diffusion . . . . . . . . . . . . . . 59

10 Regime Switching                                                                                             62

11 Mean Variance Portfolio Optimization                                                                         64
   11.1 Special Cases . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 65
   11.2 The Portfolio Allocation Problem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 66
   11.3 Adding a Risk-free asset . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 69
   11.4 Criticism . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 70
   11.5 Individual Securities . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 71

12 Stocks for the Long Run?                                                                                     74

13 Further Reading                                                                                               75
   13.1 General Interest . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 75
   13.2 More Background . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 77
   13.3 More Technical . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 77




                                                        2
      “Men wanted for hazardous journey, small wages, bitter cold, long months of complete darkness,
      constant dangers, safe return doubtful. Honour and recognition in case of success.” Advertise-
      ment placed by Earnest Shackleton in 1914. He received 5000 replies. An example of extreme
      risk-seeking behaviour. Hedging with options is used to mitigate risk, and would not appeal to
      members of Shackleton’s expedition.


1     The First Option Trade
Many people think that options and futures are recent inventions. However, options have a long history,
going back to ancient Greece.
    As recorded by Aristotle in Politics, the fifth century BC philosopher Thales of Miletus took part in a
sophisticated trading strategy. The main point of this trade was to confirm that philosophers could become
rich if they so chose. This is perhaps the first rejoinder to the famous question “If you are so smart, why
aren’t you rich?” which has dogged academics throughout the ages.
    Thales observed that the weather was very favourable to a good olive crop, which would result in a bumper
harvest of olives. If there was an established Athens Board of Olives Exchange, Thales could have simply
sold olive futures short (a surplus of olives would cause the price of olives to go down). Since the exchange
did not exist, Thales put a deposit on all the olive presses surrounding Miletus. When the olive crop was
harvested, demand for olive presses reached enormous proportions (olives were not a storable commodity).
Thales then sublet the presses for a profit. Note that by placing a deposit on the presses, Thales was actually
manufacturing an option on the olive crop, i.e. the most he could lose was his deposit. If had sold short
olive futures, he would have been liable to an unlimited loss, in the event that the olive crop turned out bad,
and the price of olives went up. In other words, he had an option on a future of a non-storable commodity.


2     The Black-Scholes Equation
This is the basic PDE used in option pricing. We will derive this PDE for a simple case below. Things get
much more complicated for real contracts.

2.1    Background
Over the past few years derivative securities (options, futures, and forward contracts) have become essential
tools for corporations and investors alike. Derivatives facilitate the transfer of financial risks. As such, they
may be used to hedge risk exposures or to assume risks in the anticipation of profits. To take a simple yet
instructive example, a gold mining firm is exposed to fluctuations in the price of gold. The firm could use a
forward contract to fix the price of its future sales. This would protect the firm against a fall in the price of
gold, but it would also sacrifice the upside potential from a gold price increase. This could be preserved by
using options instead of a forward contract.
    Individual investors can also use derivatives as part of their investment strategies. This can be done
through direct trading on financial exchanges. In addition, it is quite common for financial products to include
some form of embedded derivative. Any insurance contract can be viewed as a put option. Consequently, any
investment which provides some kind of protection actually includes an option feature. Standard examples
include deposit insurance guarantees on savings accounts as well as the provision of being able to redeem a
savings bond at par at any time. These types of embedded options are becoming increasingly common and
increasingly complex. A prominent current example are investment guarantees being offered by insurance
companies (“segregated funds”) and mutual funds. In such contracts, the initial investment is guaranteed,
and gains can be locked-in (reset) a fixed number of times per year at the option of the contract holder. This
is actually a very complex put option, known as a shout option. How much should an investor be willing to
pay for this insurance? Determining the fair market value of these sorts of contracts is a problem in option
pricing.



                                                       3
                                                                 Stock Price = $22
                                                                 Option Price = $1




                                Stock Price = $20




                                                                 Stock Price = $18
                                                                 Option Price = $0




Figure 2.1: A simple case where the stock value can either be $22 or $18, with a European call option, K =
$21.

2.2    Definitions
Let’s consider some simple European put/call options. At some time T in the future (the expiry or exercise
date) the holder has the right, but not the obligation, to
   • Buy an asset at a prescribed price K (the exercise or strike price). This is a call option.
   • Sell the asset at a prescribed price K (the exercise or strike price). This is a put option.
At expiry time T , we know with certainty what the value of the option is, in terms of the price of the
underlying asset S,
                                    Payoff     = max(S − K, 0) for a call
                                    Payoff     = max(K − S, 0) for a put                                    (2.1)
Note that the payoff from an option is always non-negative, since the holder has a right but not an obligation.
This contrasts with a forward contract, where the holder must buy or sell at a prescribed price.

2.3    A Simple Example: The Two State Tree
This example is taken from Options, futures, and other derivatives, by John Hull. Suppose the value of a
stock is currently $20. It is known that at the end of three months, the stock price will be either $22 or $18.
We assume that the stock pays no dividends, and we would like to value a European call option to buy the
stock in three months for $21. This option can have only two possible values in three months: if the stock
price is $22, the option is worth $1, if the stock price is $18, the option is worth zero. This is illustrated in
Figure 2.1.
    In order to price this option, we can set up an imaginary portfolio consisting of the option and the stock,
in such a way that there is no uncertainty about the value of the portfolio at the end of three months. Since
the portfolio has no risk, the return earned by this portfolio must be the risk-free rate.
    Consider a portfolio consisting of a long (positive) position of δ shares of stock, and short (negative) one
call option. We will compute δ so that the portfolio is riskless. If the stock moves up to $22 or goes down
to $18, then the value of the portfolio is
                                       Value if stock goes up =     $22δ − 1
                                    Value if stock goes down    =   $18δ − 0                                (2.2)


                                                       4
So, if we choose δ = .25, then the value of the portfolio is

                                  Value if stock goes up = $22δ − 1 = $4.50
                                Value if stock goes down = $18δ − 0 = $4.50                                  (2.3)

So, regardless of whether the stock moves up or down, the value of the portfolio is $4.50. A risk-free portfolio
must earn the risk free rate. Suppose the current risk-free rate is 12%, then the value of the portfolio today
must be the present value of $4.50, or

                                          4.50 × e−.12×.25       =   4.367

The value of the stock today is $20. Let the value of the option be V . The value of the portfolio is

                                          20 × .25 − V       =   4.367
                                                     →           V = .633

2.4    A hedging strategy
So, if we sell the above option (we hold a short position in the option), then we can hedge this position in
the following way. Today, we sell the option for $.633, borrow $4.367 from the bank at the risk free rate (this
means that we have to pay the bank back $4.50 in three months), which gives us $5.00 in cash. Then, we
buy .25 shares at $20.00 (the current price of the stock). In three months time, one of two things happens

   • The stock goes up to $22, our stock holding is now worth $5.50, we pay the option holder $1.00, which
     leaves us with $4.50, just enough to pay off the bank loan.

   • The stock goes down to $18.00. The call option is worthless. The value of the stock holding is now
     $4.50, which is just enough to pay off the bank loan.

Consequently, in this simple situation, we see that the theoretical price of the option is the cost for the seller
to set up portfolio, which will precisely pay off the option holder and any bank loans required to set up the
hedge, at the expiry of the option. In other words, this is price which a hedger requires to ensure that there
is always just enough money at the end to net out at zero gain or loss. If the market price of the option
was higher than this value, the seller could sell at the higher price and lock in an instantaneous risk-free
gain. Alternatively, if the market price of the option was lower than the theoretical, or fair market value, it
would be possible to lock in a risk-free gain by selling the portfolio short. Any such arbitrage opportunities
are rapidly exploited in the market, so that for most investors, we can assume that such opportunities are
not possible (the no arbitrage condition), and therefore that the market price of the option should be the
theoretical price.
    Note that this hedge works regardless of whether or not the stock goes up or down. Once we set up this
hedge, we don’t have a care in the world. The value of the option is also independent of the probability that
the stock goes up to $22 or down to $18. This is somewhat counterintuitive.

2.5    Brownian Motion
Before we consider a model for stock price movements, let’s consider the idea of Brownian motion with drift.
Suppose X is a random variable, and in time t → t + dt, X → X + dX, where

                                             dX = αdt + σdZ                                                  (2.4)

where αdt is the drift term, σ is the volatility, and dZ is a random term. The dZ term has the form
                                                       √
                                                 dZ = φ dt                                                   (2.5)



                                                         5
where φ is a random variable drawn from a normal distribution with mean zero and variance one (φ ∼ N (0, 1),
i.e. φ is normally distributed).
    If E is the expectation operator, then

                                            E(φ) = 0             E(φ2 ) = 1 .                           (2.6)

   Now in a time interval dt, we have

                                        E(dX)      = E(αdt) + E(σdZ)
                                                   = αdt ,                                              (2.7)

and the variance of dX, denoted by V ar(dX) is

                                      V ar(dX)      = E([dX − E(dX)]2 )
                                                    = E([σdZ]2 )
                                                    = σ 2 dt .                                          (2.8)

    Let’s look at a discrete model to understand this process more completely. Suppose that we have a
discrete lattice of points. Let X = X0 at t = 0. Suppose that at t = ∆t,

                                 X0     →    X0 + ∆h ;            with probability p
                                 X0     →    X0 − ∆h ;            with probability q                    (2.9)

where p + q = 1. Assume that

   • X follows a Markov process, i.e. the probability distribution in the future depends only on where it is
     now.

   • The probability of an up or down move is independent of what happened in the past.

   • X can move only up or down ∆h.

At any lattice point X0 + i∆h, the probability of an up move is p, and the probability of a down move is q.
The probabilities of reaching any particular lattice point for the first three moves are shown in Figure 2.2.
Each move takes place in the time interval t → t + ∆t.
   Let ∆X be the change in X over the interval t → t + ∆t. Then

                                        E(∆X)          =    (p − q)∆h
                                              2
                                      E([∆X] )         = p(∆h)2 + q(−∆h)2
                                                       =    (∆h)2 ,                                    (2.10)

so that the variance of ∆X is (over t → t + ∆t)

                                  V ar(∆X)         = E([∆X]2 ) − [E(∆X)]2
                                                   =       (∆h)2 − (p − q)2 (∆h)2
                                                   =       4pq(∆h)2 .                                  (2.11)

  Now, suppose we consider the distribution of X after n moves, so that t = n∆t. The probability of j up
moves, and (n − j) down moves (P (n, j)) is

                                                                n!
                                        P (n, j)    =                  pj q n−j                        (2.12)
                                                            j!(n − j)!



                                                             6
                              X 0 + 3∆h                              p3

                                                           p2
                              X 0 + 2∆h

                                                 p
                               X 0 + ∆h                              3p2q


                                    X0                         2pq


                                X 0 - ∆h                             3pq2
                                                 q

                              X 0 - 2∆h
                                                          q2

                              X 0 - 3∆h                              q
                                                                      3




          Figure 2.2: Probabilities of reaching the discrete lattice points for the first three moves.


which is just a binomial distribution. Now, if Xn is the value of X after n steps on the lattice, then

                                           E(Xn − X0 )     = nE(∆X)
                                         V ar(Xn − X0 )    = nV ar(∆X) ,                                 (2.13)

which follows from the properties of a binomial distribution, (each up or down move is independent of
previous moves). Consequently, from equations (2.10, 2.11, 2.13) we obtain

                                           E(Xn − X0 )
                                                     = n(p − q)∆h
                                                        t
                                                     =    (p − q)∆h
                                                       ∆t
                                      V ar(Xn − X0 ) = n4pq(∆h)2
                                                        t
                                                     =    4pq(∆h)2                                       (2.14)
                                                       ∆t
    Now, we would like to take the limit at ∆t → 0 in such a way that the mean and variance of X, after a
finite time t is independent of ∆t, and we would like to recover

                                                 dX = αdt + σdZ
                                              E(dX) = αdt
                                            V ar(dX)      = σ 2 dt                                       (2.15)
                                                                            √
as ∆t → 0. Now, since 0 ≤ p, q ≤ 1, we need to choose ∆h = Const ∆t. Otherwise, from equation (2.14)
we get that V ar(Xn − X0 ) is either 0 or infinite after a finite time. (Stock variances do not have either of
these properties, so this is obviously not a very interesting case).




                                                          7
                      √
   Let’s choose ∆h = σ ∆t, which gives (from equation (2.14))
                                                                         σt
                                        E(Xn − X0 )           = (p − q) √
                                                                          ∆t
                                      V ar(Xn − X0 )          = t4pqσ 2                                 (2.16)
Now, for E(Xn − X0 ) to be independent of ∆t as ∆t → 0, we must have
                                                       √
                                     (p − q) = Const. ∆t                                                (2.17)
If we choose
                                                                  α√
                                                p−q       =          ∆t                                 (2.18)
                                                                  σ
we get
                                                         1      α√
                                            p    =         [1 +    ∆t]
                                                         2      σ
                                                         1      α√
                                            q    =         [1 −    ∆t]                                  (2.19)
                                                         2      σ
Now, putting together equations (2.16-2.19) gives
                                      E(Xn − X0 )         = αt
                                                                           α2
                                    V ar(Xn − X0 )        = tσ 2 (1 −         ∆t)
                                                                           σ2
                                                          = tσ 2        ; ∆t → 0 .                      (2.20)
Now, let’s imagine that X(tn ) − X(t0 ) = Xn − X0 is very small, so that Xn − X0 ≃ dX and tn − t0 ≃ dt, so
that equation (2.20) becomes
                                                E(dX)         = α dt
                                           V ar(dX)           = σ 2 dt .                                (2.21)
which agrees with equations (2.7-2.8). Hence, in the limit as ∆t → 0, we can interpret the random walk for
X on the lattice (with these parameters) as the solution to the stochastic differential equation (SDE)
                                           dX        = α dt + σ dZ
                                                              √
                                                       dZ = φ dt.                                       (2.22)
  Consider the case where α = 0, σ = 1, so that dX = dZ =≃ Z(ti ) − Z(ti−1 ) = Zi − Zi−1 = Xi − Xi−1 .
Now we can write
                           Z t               X
                               dZ = lim          (Zi+1 − Zi ) = (Zn − Z0 ) .                    (2.23)
                                0          ∆t→0
                                                     i

From equation (2.20) (α = 0, σ = 1) we have
                                            E(Zn − Z0 )            =0
                                          V ar(Zn − Z0 )           =      t.                            (2.24)
Now, if n is large (∆t → 0), recall that the binomial distribution (2.12) tends to a normal distribution. From
equation (2.24), we have that the mean of this distribution is zero, with variance t, so that
                                          (Zn − Z0 ) ∼ N (0, t)
                                                       Z t
                                                     =     dZ .                                         (2.25)
                                                                    0


                                                           8
                                      Rt
In other words, after a finite time t, 0 dZ is normally distributed with mean zero and variance t (the limit
of a binomial distribution is a normal distribution).
                                         √                                         √
    Recall that have that Zi − Zi−1 = ∆t with probability p and Zi − Zi−1 = − ∆t with probability q.
Note that (Zi − Zi−1 )2 = ∆t, with certainty, so that we can write

                                      (Zi − Zi−1 )2 ≃ (dZ)2 = ∆t .                                     (2.26)

   To summarize
   • We can interpret the SDE

                                                dX      = α dt + σ dZ
                                                                 √
                                                          dZ = φ dt.                                   (2.27)

      as the limit of a discrete random walk on a lattice as the timestep tends to zero.
   • V ar(dZ) = dt, otherwise, after any finite time, the V ar(Xn − X0 ) is either zero or infinite.
   • We can integrate the term dZ to obtain
                                          Z t
                                                   dZ     = Z(t) − Z(0)
                                               0
                                                          ∼ N (0, t) .                                 (2.28)

   Going back to our lattice example, note that the total distance traveled over any finite interval of time
becomes infinite,

                                               E(|∆X|)         =   ∆h                                  (2.29)

so that the the total distance traveled in n steps is
                                                                t
                                               n∆h      =          ∆h
                                                               ∆t
                                                                tσ
                                                        =      √                                       (2.30)
                                                                  ∆t
which goes to infinity as ∆t → 0. Similarly,
                                                ∆x
                                                        = ±∞ .                                         (2.31)
                                                ∆t
Consequently, Brownian motion is very jagged at every timescale. These paths are not differentiable, i.e. dx
                                                                                                          dt
does not exist, so we cannot speak of
                                                        dx
                                                   E(      )                                           (2.32)
                                                        dt
but we can possibly define
                                                   E(dx)
                                                         .                                             (2.33)
                                                    dt

2.6    Geometric Brownian motion with drift
Of course, the actual path followed by stock is more complex than the simple situation described above.
More realistically, we assume that the relative changes in stock prices (the returns) follow Brownian motion
with drift. We suppose that in an infinitesimal time dt, the stock price S changes to S + dS, where
                                               dS
                                                  = µdt + σdZ                                          (2.34)
                                                S

                                                          9
                       1000                                                                                    1000

                        900                                                                                     900
                                  Low Volatility Case                                                                     High Volatility Case
                                  σ = .20 per year                                                                        σ = .40 per year
                        800                                                                                     800

                        700                                                                                     700
     Asset Price ($)




                                                                                             Asset Price ($)
                        600                                                                                     600

                        500                                                                                     500

                        400                                                                                     400

                        300                                                 Risk Free                           300                                              Risk Free
                                                                            Return                                                                               Return
                        200                                                                                     200

                        100                                                                                     100

                          0                                                                                       0
                              0     2        4          6       8     10     12                                       0     2        4        6         8   10    12
                                                 Time (years)                                                                            Time (years)



Figure 2.3: Realizations of asset price following geometric Brownian motion. Left: low volatility case; right:
high volatility case. Risk-free rate of return r = .05.


where µ is the drift rate, σ is the volatility, and dZ is the increment of a Wiener process,
                                                             √
                                                  dZ = φ dt                                                                                                                  (2.35)

where φ ∼ N (0, 1). Equations (2.34) and (2.35) are called geometric Brownian motion with drift. So,
superimposed on the upward (relative) drift is a (relative) random walk. The degree of randomness is given
by the volatility σ. Figure 2.3 gives an illustration of ten realizations of this random process for two different
values of the volatility. In this case, we assume that the drift rate µ equals the risk free rate.
   Note that

                                                                     E(dS)        = E(σSdZ + µSdt)
                                                                                  = µSdt
                                                                                     since E(dZ) = 0                                                                         (2.36)

and that the variance of dS is

                                                                    V ar[dS]      = E(dS 2 ) − [E(dS)]2
                                                                                  = E(σ 2 S 2 dZ 2 )
                                                                                  = σ 2 S 2 dt                                                                               (2.37)

so that σ is a measure of the degree of randomness of the stock price movement.
    Equation (2.34) is a stochastic differential equation. The normal rules of calculus don’t apply, since for
example
                                                                       dZ          1
                                                                               = φ√
                                                                       dt           dt
                                                                                 → ∞ as dt → 0 .

The study of these sorts of equations uses results from stochastic calculus. However, for our purposes, we
need only one result, which is Ito’s Lemma (see Derivatives: the theory and practice of financial engineering,
by P. Wilmott). Suppose we have some function G = G(S, t), where S follows the stochastic process equation


                                                                                        10
(2.34), then, in small time increment dt, G → G + dG, where
                                          ∂G σ 2 S 2 ∂ 2 G ∂G
                                                               
                                                                          ∂G
                            dG =      µS     +           2 +      dt + σS    dZ                      (2.38)
                                          ∂S     2 ∂S        ∂t           ∂S
An informal derivation of this result is given in the following section.

2.6.1    Ito’s Lemma
We give an informal derivation of Ito’s lemma (2.38). Suppose we have a variable S which follows
                                            dS = a(S, t)dt + b(S, t)dZ                               (2.39)
where dZ is the increment of a Weiner process.
  Now since
                                                    dZ 2   = φ2 dt                                   (2.40)
where φ is a random variable drawn from a normal distribution with mean zero and unit variance, we have
that, if E is the expectation operator, then
                                               E(φ) = 0         E(φ2 ) = 1                           (2.41)
so that the expected value of dZ 2 is
                                                     E(dZ 2 ) = dt                                   (2.42)
                                                                                           2
Now, it can be shown (see Section 6) that in the limit as dt → 0, we have that φ dt becomes non-stochastic,
so that with probability one
                                           dZ 2 → dt as dt → 0                                       (2.43)
     Now, suppose we have some function G = G(S, t), then
                                                                       dS 2
                                        dG = GS dS + Gt dt + GSS            + ...                    (2.44)
                                                                        2
Now (from (2.39) )
                                       (dS)2    =    (adt + b dZ)2
                                         = a2 dt2 + ab dZdt + b2 dZ 2                                (2.45)
             √
Since dZ = O( dt) and dZ 2 → dt, equation (2.45) becomes
                                           (dS)2 = b2 dZ 2 + O((dt)3/2 )                             (2.46)
or
                                               (dS)2 → b2 dt as dt → 0                               (2.47)
Now, equations(2.39,2.44,2.47) give
                                                                     dS 2
                                 dG     = GS dS + Gt dt + GSS             + ...
                                                                      2
                                                                                    b2
                                        = GS (a dt + b dZ) + dt(Gt + GSS               )
                                                                                    2
                                                                        b2
                                        = GS b dZ + (aGS + GSS             + Gt )dt                  (2.48)
                                                                        2
     So, we have the result that if
                                            dS = a(S, t)dt + b(S, t)dZ                               (2.49)
and if G = G(S, t), then
                                                              b2
                                      dG = GS b dZ + (a GS + GSS + Gt )dt                            (2.50)
                                                              2
     Equation (2.38) can be deduced by setting a = µS and b = σS in equation (2.50).


                                                           11
2.6.2   Some uses of Ito’s Lemma
Suppose we have

                                             dS = µdt + σdZ .                                       (2.51)

If µ, σ = Const., then this can be integrated (from t = 0 to t = t) exactly to give

                                   S(t) = S(0) + µt + σ(Z(t) − Z(0))                                (2.52)

and from equation (2.28)

                                            Z(t) − Z(0) ∼ N (0, t)                                  (2.53)

   Note that when we say that we solve a stochastic differential equation exactly, this means that we have
an expression for the distribution of S(T ).
   Suppose instead we use the more usual geometric Brownian motion

                                            dS = µSdt + σSdZ                                        (2.54)

Let F (S) = log S, and use Ito’s Lemma

                                                                   σ2 S 2
                              dF    = FS SσdZ + (FS µS + FSS              + Ft )dt
                                                                     2
                                                σ2
                                    =    (µ −      )dt + σdZ ,                                      (2.55)
                                                2
so that we can integrate this to get

                                                     σ2
                              F (t) = F (0) + (µ −      )t + σ(Z(t) − Z(0))                         (2.56)
                                                     2
or, since S = eF ,

                                                     σ2
                             S(t) = S(0) exp[(µ −       )t + σ(Z(t) − Z(0))] .                      (2.57)
                                                     2
Unfortunately, these cases are about the only situations where we can exactly integrate the SDE (constant
σ, µ).

2.6.3   Some more uses of Ito’s Lemma
We can often use Ito’s Lemma and some algebraic tricks to determine some properties of distributions. Let

                                       dX    = a(X, t) dt + b(X, t) dZ ,                            (2.58)

then if G = G(X), then

                                                    b2
                                                       
                              dG   =      aGX + Gt + GXX dt + GX b dZ .                             (2.59)
                                                    2

If E[X] = X̄, then (b(X, t) and dZ are independent)

                                        E[dX]    = d E[S] = dX̄
                                                 = E[a dt] + E[b] E[dZ]
                                                 = E[a dt] ,                                        (2.60)


                                                       12
so that
                                                        d X̄
                                                             = E[a] = ā
                                                         dt
                                                Z t     
                                         X̄ = E      a dt .                                                     (2.61)
                                                           0

Let Ḡ = E[(X − X̄)2 ] = var(X), then
                    dḠ     = E [dG]
                            = E[2(X − X̄)a − 2(X − X̄)ā + b2 ] dt + E[2b(X − X̄)]E[dZ]
                            = E[b2 dt] + E[2(X − X̄)(a − ā) dt] ,                                              (2.62)
which means that
                                           Z t                      Z t                              
                                                       2
                     Ḡ = var(X) = E                  b dt + E                   2(a − ā)(X − X̄) dt       .   (2.63)
                                                  0                      0

In a particular case, we can sometimes get more useful expressions. If
                                                  dS        = µS dt + σS dZ                                     (2.64)
with µ, σ constant, then
                                              E[dS]              = dS̄ = E[µS] dt
                                                                 = µS̄ dt ,                                     (2.65)
so that
                                                           dS̄     = µS̄ dt
                                                            S̄     = S0 eµt .                                   (2.66)
Now, let G(S) = S 2 , so that E[G] = Ḡ = E[S 2 ], then (from Ito’s Lemma)
                                  d Ḡ   = E[2µS 2 + σ 2 S 2 ] dt + E[2S 2 σ]E[dZ]
                                         = E[2µS 2 + σ 2 S 2 ] dt
                                         =        (2µ + σ 2 )Ḡ dt ,                                            (2.67)
so that
                                                                         2
                                             Ḡ       = Ḡ0 e(2µ+σ )t
                                                                                       2
                                                            E[S 2 ] = S02 e(2µ+σ )t .                           (2.68)
From equations (2.66) and (2.68) we then have
                                             var(S)            = E[S 2 ] − (E[S])2
                                                               = E[S 2 ] − S̄ 2
                                                                                   2
                                                               = S02 e2µt (eσ t − 1)
                                                                             2
                                                               = S̄ 2 (eσ t − 1) .                              (2.69)
One can use the same ideas to compute the skewness, E[(S − S̄)3 ]. If G(S) = S 3 and Ḡ = E[G(S)] = E[S 3 ],
then
                           dḠ   = E[µS · 3S 2 + σ 2 S 2 /2 · 3 · 2S] dt + E[3S 2 σS]E[dZ]
                                 = E[3µS 3 + 3σ 2 S 3 ]
                                 =   3(µ + σ 2 )Ḡ ,                                                            (2.70)


                                                                    13
so that

                                                Ḡ     = E[S 3 ]
                                                                      2
                                                       = S03 e3(µ+σ )t .                                 (2.71)

We can then obtain the skewness from

                                E[(S − S̄)3 ]        = E[S 3 − 2S 2 S̄ − 2S S̄ 2 + S̄ 3 ]
                                                     = E[S 3 ] − 2S̄E[S 2 ] − S̄ 3 .                     (2.72)

Equations (2.66, 2.68, 2.71) can then be substituted into equation (2.72) to get the desired result.

2.7       The Black-Scholes Analysis
Assume
   • The stock price follows geometric Brownian motion, equation (2.34).
   • The risk-free rate of return is a constant r.
   • There are no arbitrage opportunities, i.e. all risk-free portfolios must earn the risk-free rate of return.
   • Short selling is permitted (i.e. we can own negative quantities of an asset).
   Suppose that we have an option whose value is given by V = V (S, t). Construct an imaginary portfolio,
consisting of one option, and a number of (−(αh )) of the underlying asset. (If (αh ) > 0, then we have sold
the asset short, i.e. we have borrowed an asset, sold it, and are obligated to give it back at some future
date).
   The value of this portfolio P is
                                              P = V − (αh )S                                          (2.73)
In a small time dt, P → P + dP ,
                                                 dP = dV − (αh )dS                                       (2.74)
                                                                  h
Note that in equation (2.74) we not included a term (α )S S. This is actually a rather subtle point, since
we shall see (later on) that (αh ) actually depends on S. However, if we think of a real situation, at any
instant in time, we must choose (αh ), and then we hold the portfolio while the asset moves randomly. So,
equation (2.74) is actually the change in the value of the portfolio, not a differential. If we were taking a
true differential then equation (2.74) would be

                                      dP = dV − (αh )dS − Sd(αh )

but we have to remember that (αh ) does not change over a small time interval, since we pick (αh ), and
then S changes randomly. We are not allowed to peek into the future, (otherwise, we could get rich without
risk, which is not permitted by the no-arbitrage condition) and hence (αh ) is not allowed to contain any
information about future asset price movements. The principle of no peeking into the future is why Ito
stochastic calculus is used. Other forms of stochastic calculus are used in Physics applications (i.e. turbulent
flow).
    Substituting equations (2.34) and (2.38) into equation (2.74) gives

                                                             σ2 S 2
                                                                                     
                      dP = σS VS − (αh ) dZ + µSVS +                VSS + Vt − µ(αh )S dt
                                          
                                                                                                          (2.75)
                                                               2

We can make this portfolio riskless over the time interval dt, by choosing (αh ) = VS in equation (2.75). This
eliminates the dZ term in equation (2.75). (This is the analogue of our choice of the amount of stock in the
riskless portfolio for the two state tree model.) So, letting

                                                         (αh ) = VS                                      (2.76)


                                                             14
then substituting equation (2.76) into equation (2.75) gives

                                                      σ2 S 2
                                                               
                                         dP = Vt +           VSS dt                                     (2.77)
                                                        2

Since P is now risk-free in the interval t → t + dt, then no-arbitrage says that

                                                   dP = rP dt                                           (2.78)

Therefore, equations (2.77) and (2.78) give

                                                              σ2 S 2
                                                                       
                                         rP dt =       Vt +          VSS dt                             (2.79)
                                                                2

Since
                                         P = V − (αh )S = V − VS S                                      (2.80)
then substituting equation (2.80) into equation (2.79) gives

                                             σ2 S 2
                                      Vt +          VSS + rSVS − rV = 0                                 (2.81)
                                               2
which is the Black-Scholes equation. Note the rather remarkable fact that equation (2.81) is independent of
the drift rate µ.
   Equation (2.81) is solved backwards in time from the option expiry time t = T to the present t = 0.

2.8     Hedging in Continuous Time
We can construct a hedging strategy based on the solution to the above equation. Suppose we sell an option
at price V at t = 0. Then we carry out the following

   • We sell one option worth V . (This gives us V in cash initially).

   • We borrow (S ∂V
                  ∂S − V ) from the bank.

   • We buy ∂V
            ∂S shares at price S.

    At every instant in time, we adjust the amount of stock we own so that we always have ∂V
                                                                                           ∂S shares. Note
that this is a dynamic hedge, since we have to continually rebalance the portfolio. Cash will flow into and
out of the bank account, in response to changes in S. If the amount in the bank is positive, we receive the
risk free rate of return. If negative, then we borrow at the risk free rate.
    So, our hedging portfolio will be

   • Short one option worth V .

   • Long ∂V
          ∂S shares at price S.

   • V − S ∂V
           ∂S cash in the bank account.

At any instant in time (including the terminal time), this portfolio can be liquidated and any obligations
implied by the short position in the option can be covered, at zero gain or loss, regardless of the value of S.
Note that given the receipt of the cash for the option, this strategy is self-financing.




                                                         15
2.9    The option price
So, we can see that the price of the option valued by the Black-Scholes equation is the market price of the
option at any time. If the price was higher then the Black-Scholes price, we could construct the hedging
portfolio, dynamically adjust the hedge, and end up with a positive amount at the end. Similarly, if the price
was lower than the Black-Scholes price, we could short the hedging portfolio, and end up with a positive
gain. By the no-arbitrage condition, this should not be possible.
    Note that we are not trying to predict the price movements of the underlying asset, which is a random
process. The value of the option is based on a hedging strategy which is dynamic, and must be continuously
rebalanced. The price is the cost of setting up the hedging portfolio. The Black-Scholes price is not the
expected payoff.
    The price given by the Black-Scholes price is not the value of the option to a speculator, who buys and
holds the option. A speculator is making bets about the underlying drift rate of the stock (note that the
drift rate does not appear in the Black-Scholes equation). For a speculator, the value of the option is given
by an equation similar to the Black-Scholes equation, except that the drift rate appears. In this case, the
price can be interpreted as the expected payoff based on the guess for the drift rate. But this is art, not
science!

2.10    American early exercise
Actually, most options traded are American options, which have the feature that they can be exercised at
any time. Consequently, an investor acting optimally, will always exercise the option if the value falls below
the payoff or exercise value. So, the value of an American option is given by the solution to equation (2.81)
with the additional constraint
                                               
                                                  max(S − K, 0) for a call
                                 V (S, t) ≥                                                              (2.82)
                                                  max(K − S, 0) for a put
Note that since we are working backwards in time, we know what the option is worth in future, and therefore
we can determine the optimal course of action.
   In order to write equation (2.81) in more conventional form, define τ = T − t, so that equation (2.81)
becomes
                                                  σ2 S 2
                                       Vτ    =           VSS + rSVS − rV
                                                  2
                                                     max(S − K, 0) for a call
                              V (S, τ = 0)   =
                                                     max(K − S, 0) for a put
                                   V (0, τ ) →    Vτ = −rV
                                                  
                                                     ≃ S for a call
                             V (S = ∞, τ ) →                                                            (2.83)
                                                     ≃0    for a put
If the option is American, then we also have the additional constraints
                                             
                                                max(S − K, 0) for a call
                                V (S, τ ) ≥                                                             (2.84)
                                                max(K − S, 0) for a put
   Define the operator
                                                 σ2 S 2
                                    LV ≡ Vτ − (         VSS + rSVS − rV )                               (2.85)
                                                   2
and let V (S, 0) = V ∗ . More formally, the American option pricing problem can be stated as
                                                      LV       ≥ 0
                                                           ∗
                                                  V −V         ≥ 0
                                             (V − V ∗ )LV      =   0                                    (2.86)


                                                      16
3      The Risk Neutral World
Suppose instead of valuing an option using the above no-arbitrage argument, we wanted to know the expected
value of the option. We can imagine that we are buying and holding the option, and not hedging. If we
are considering the value of risky cash flows in the future, then these cash flows should be discounted at an
appropriate discount rate, which we will call ρ (i.e. the riskier the cash flows, the higher ρ).
    Consequently the value of an option today can be considered to the be the discounted future value. This
is simply the old idea of net present value. Regard S today as known, and let V (S + dS, t + dt) be the value
of the option at some future time t + dt, which is uncertain, since S evolves randomly. Thus
                                                      1
                                  V (S, t)    =            E(V (S + dS, t + dt))                          (3.1)
                                                   1 + ρdt
where E(...) is the expectation operator, i.e. the expected value of V (S + dS, t + dt) given that V = V (S, t)
at t = t. We can rewrite equation (3.1) as (ignoring terms of o(dt), where o(dt) represents terms that go to
zero faster than dt )

                                 ρdtV (S, t) = E(V (S, t) + dV ) − V (S, t) .                             (3.2)

Since we regard V as the expected value, so that E[V (S, t)] = V (S, t), and then

                                   E(V (S, t) + dV ) − V (S, t)         = E(dV ) ,                        (3.3)

so that equation (3.2) becomes

                                             ρdtV (S, t) = E(dV ) .                                       (3.4)

Assume that
                                                  dS
                                                     = µdt + σdZ .                                        (3.5)
                                                   S
From Ito’s Lemma (2.38) we have that

                                          σ2 S 2
                                                          
                          dV =       Vt +        VSS + µSVS dt + σSVS dZ .                                (3.6)
                                            2
Noting that

                                                   E(dZ)        =   0                                     (3.7)

then
                                                           σ2 S 2
                                                                           
                                  E(dV )     =        Vt +        VSS + µSVS dt .                         (3.8)
                                                             2
Combining equations (3.4-3.8) gives

                                           σ2 S 2
                                    Vt +          VSS + µSVS − ρV = 0 .                                   (3.9)
                                             2
   Equation (3.9) is the PDE for the expected value of an option. If we are not hedging, maybe this is the
value that we are interested in, not the no-arbitrage value. However, if this is the case, we have to estimate
the drift rate µ, and the discount rate ρ. Estimating the appropriate discount rate is always a thorny issue.
   Now, note the interesting fact, if we set ρ = r and µ = r in equation (3.9) then we simply get the
Black-Scholes equation (2.81).
   This means that the no-arbitrage price of an option is identical to the expected value if ρ = r and µ = r.
In other words, we can determine the no-arbitrage price by pretending we are living in a world where all
assets drift at rate r, and all investments are discounted at rate r. This is the so-called risk neutral world.


                                                           17
    This result is the source of endless confusion. It is best to think of this as simply a mathematical fluke.
This does not have any reality. Investors would be very stupid to think that the drift rate of risky investments
is r. I’d rather just buy risk-free bonds in this case. There is in reality no such thing as a risk-neutral world.
Nevertheless, this result is useful for determining the no-arbitrage value of an option using a Monte Carlo
approach. Using this numerical method, we simply assume that

                                              dS = rSdt + σSdZ                                             (3.10)

and simulate a large number of random paths. If we know the option payoff as a function of S at t = T ,
then we compute

                                       V (S, 0) = e−rT EQ (V (S, T ))                                      (3.11)

which should be the no-arbitrage value.
   Note the EQ in the above equation. This makes it clear that we are taking the expectation in the risk
neutral world (the expectation in the Q measure). This contrasts with the real-world expectation (the P
measure).
   Suppose we want to know the expected value (in the real world) of an asset which pays V (S, t = T ) at
t = T in the future. Then, the expected value (today) is given by solving

                                               σ2 S 2
                                       Vt +           VSS + µSVS = 0 .                                     (3.12)
                                                 2
where we have dropped the discounting term. In particular, suppose we are going to receive V = S(t = T ),
i.e. just the asset at t = T . Assume that the solution to equation (3.12) is V = Const. A(t)S, and we find
that

                                           V     = Const. Seµ(T −t) .                                      (3.13)

Noting that we receive V = S at t = T means that

                                                 V    = Seµ(T −t) .                                        (3.14)

Today, we can acquire the asset for price S(t = 0). At t = T , the asset is worth S(t = T ). Equation (3.14)
then says that

                           E[V (S(t = 0), t = 0)]      =   E[S(t = 0)] = S(t = 0)eµ(T )                    (3.15)

In other words, if

                                            dS       = Sµ dt + Sσ dZ                                       (3.16)

then (setting t = T )

                                                 E[S] = Seµt .                                             (3.17)

Recall that the exact solution to equation (3.16) is (equation (2.57))

                                                       σ2
                              S(t) = S(0) exp[(µ −        )t + σ(Z(t) − Z(0))] .                           (3.18)
                                                       2
So that we have just shown that E[S] = Seµt by using a simple PDE argument and Ito’s Lemma. Isn’t this
easier than using brute force statistics? PDEs are much more elegant.




                                                           18
4     Monte Carlo Methods
This brings us to the simplest numerical method for computing the no-arbitrage value of an option. Suppose
that we assume that the underlying process is
                                             dS
                                                = rdt + σdZ                                                 (4.1)
                                              S
then we can simulate a path forward in time, starting at some price today S 0 , using a forward Euler
timestepping method (S i = S(ti ))
                                                               √
                                   S i+1 = S i + S i (r∆t + σφi ∆t)                             (4.2)

where ∆t is the finite timestep, and φi is a random number which is N (0, 1). Note that at each timestep,
we generate a new random number. After N steps, with T = N ∆t, we have a single realized path. Given
the payoff function of the option, the value for this path would be

                                         V alue =      P ayof f (S N ) .                                    (4.3)

For example, if the option was a European call, then

                                        V alue =      max(S N − K, 0)
                                                     K = Strike Price                                       (4.4)

   Suppose we run a series of trials, m = 1, ..., M , and denote the payoff after the m0 th trial as payof f (m).
Then, the no-arbitrage value of the option is

                               Option V alue     = e−rT E(payof f )
                                                              m=M
                                                            1 X
                                                 ≃ e−rT           payof f (m) .                             (4.5)
                                                            M m=1

Recall that these paths are not the real paths, but are the risk neutral paths.
   Now, we should remember that we are

    1. approximating the solution to the SDE by forward Euler, which has O(∆t) truncation error.

    2. approximating
           √         the expectation by the mean of many random paths. This Monte Carlo error is of size
       O(1/ M ), which is slowly converging.

There are thus two sources of error in the Monte Carlo approach: timestepping error and sampling error.
    The slow rate of convergence of Monte Carlo methods makes these techniques unattractive except when
the option is written on several (i.e. more than three) underlying assets. As well, since we are simulating
forward in time, we cannot know at a given point in the forward path if it is optimal to exercise or hold an
American style option. This is easy if we use a PDE method, since we solve the PDE backwards in time, so
we always know the continuation value and hence can act optimally. However, if we have more than three
factors, PDE methods become very expensive computationally. As well, if we want to determine the effects
of discrete hedging, for example, a Monte Carlo approach is very easy to implement.
    The error in the Monte Carlo method is then
                                                           
                                                         1
                             Error = O max(∆t, √ )
                                                         M
                                          ∆t = timestep
                                            M = number of Monte Carlo paths                                 (4.6)


                                                       19
Now, it doesn’t make sense to drive the Monte Carlo error down to zero if there is O(∆t) timestepping error.
We should seek to balance the timestepping error and the sampling error. In order to make these two errors
                                            1
the same order, we should choose M = O( (∆t)  2 ). This makes the total error O(∆t). We also have that

                                                       
                                                        M
                                  Complexity = O
                                                        ∆t
                                                             
                                                          1
                                                = O
                                                        (∆t)3
                                                                        
                                          ∆t = O (Complexity)−1/3                                      (4.7)

and hence
                                                                           
                                                               1
                                    Error    = O                                .                        (4.8)
                                                         ( Complexity)1/3
    In practice, the convergence in terms of timestep error is often not done. People just pick a timestep,
i.e. one day, and increase the number of Monte Carlo samples until they achieve convergence in terms of
sampling error, and ignore the timestep error. Sometimes this gives bad results!
    Note that the exact solution to Geometric Brownian motion (2.57) has the property that the asset value
S can never reach S = 0 if S(0) > 0, in any finite time. However, due to the approximate nature of our
Forward Euler method for solving the SDE, it is possible that a negative or zero S i can show up. We can
do one of three things here, in this case
   • Cut back the timestep at this point in the simulation so that S is positive.
   • Set S = 0 and continue. In this case, S remains zero for the rest of this particular simulation.
   • Use Ito’s Lemma, and determine the SDE for log S, i.e. if F = log S, then, from equation (2.55), we
     obtain (with µ = r)
                                                              σ2
                                            dF   =   (r −        )dt + σdZ ,                             (4.9)
                                                              2
     so that now, if F < 0, there is no problem, since S = eF , and if F < 0, this just means that S is very
     small. We can use this idea for any stochastic process where the variable should not go negative.
   Usually, most people set S = 0 and continue. As long as the timestep is not too large, this situation is
probably due to an event of low probability, hence any errors incurred will not affect the expected value very
much. If negative S values show up many times, this is a signal that the timestep is too large.
   In the case of simple Geometric Brownian motion, where r, σ are constants, then the SDE can be solved
exactly, and we can avoid timestepping errors (see Section 2.6.2). In this case
                                                       σ2         √
                                 S(T ) = S(0) exp[(r −    )T + σφ T ]                                 (4.10)
                                                       2
where φ ∼ N (0, 1). I’ll remind you that equation (4.10) is exact. For these simple cases, we should always
use equation (4.10). Unfortunately, this does not work in more realistic situations.
   Monte Carlo is popular because
   • It is simple to code. Easily handles complex path dependence.
   • Easily handles multiple assets.
   The disadvantages of Monte Carlo methods are
   • It is difficult to apply this idea to problems involving optimal decision making (e.g. American options).
   • It is hard to compute the Greeks (VS , VSS ), which are the hedging parameters, very accurately.
   • MC converges slowly.


                                                         20
4.1    Monte Carlo Error Estimators
The sampling error can be estimated via a statistical approach. If the estimated mean of the sample is
                                                     m=M
                                                e−rT X
                                       µ̂ =              payof f (m)                                 (4.11)
                                                 M m=1

and the standard deviation of the estimate is
                                             m=M
                                                                               !1/2
                                         1    X
                             ω   =               (e−rT payof f (m) − µ̂)2                            (4.12)
                                       M − 1 m=1

then the 95% confidence interval for the actual value V of the option is
                                           1.96ω            1.96ω
                                      µ̂ − √     < V < µ̂ + √                                        (4.13)
                                              M                M
Note that in order to reduce this error by a factor of 10, the number of simulations must be increased by
100.
    The timestep error can be estimated by running the problem with different size timesteps, comparing the
solutions.

4.2    Random Numbers and Monte Carlo
There are many good algorithms for generating random sequences which are uniformly distributed in [0, 1].
See for example, (Numerical Recipies in C++., Press et al, Cambridge University Press, 2002). As pointed
out in this book, often the system supplied random number generators, such as rand in the standard C
library, and the infamous RANDU IBM function, are extremely bad. The Matlab functions appear to be
quite good. For more details, please look at (Park and Miller, ACM Transactions on Mathematical Software,
31 (1988) 1192-1201). Another good generator is described in (Matsumoto and Nishimura, “The Mersenne
Twister: a 623 dimensionally equidistributed uniform pseudorandom number generator,” ACM Transactions
on Modelling and Computer Simulation, 8 (1998) 3-30.) Code can be downloaded from the authors Web
site.
    However, we need random numbers which are normally distributed on [−∞, +∞], with mean zero and
variance one (N (0, 1)).
    Suppose we have uniformly distributed numbers on [0, 1], i.e. the probability of obtaining a number
between x and x + dx is
                                       p(x)dx      = dx ; 0 ≤ x ≤ 1
                                                   =   0 ;         otherwise                         (4.14)
Let’s take a function of this random variable y(x). How is y(x) distributed? Let p̂(y) be the probability
distribution of obtaining y in [y, y + dy]. Consequently, we must have (recall the law of transformation of
probabilities)
                                           p(x)|dx| = p̂(y)|dy|
or
                                                                    dx
                                           p̂(y)      = p(x)           .                             (4.15)
                                                                    dy
Suppose we want p̂(y) to be normal,
                                                                   2
                                                                e−y /2
                                              p̂(y)    =         √     .                             (4.16)
                                                                   2π

                                                           21
If we start with a uniform distribution, p(x) = 1 on [0, 1], then from equations (4.15-4.16) we obtain
                                                                             2
                                                       dx           e−y /2
                                                              =      √     .                               (4.17)
                                                       dy              2π
Now, for x ∈ [0, 1], we have that the probability of obtaining a number in [0, x] is
                                               Z x
                                                   dx0 = x ,                                               (4.18)
                                                        0

but from equation (4.17) we have
                                                                       0 2
                                                   0              e−(y ) /2 0
                                             dx         =           √      dy .                            (4.19)
                                                                      2π
So, there exists a y such that the probability of getting a y 0 in [−∞, y] is equal to the probability of getting
x0 in [0, x],
                                       Z x                    Z y                 0 2
                                                                     e−(y ) /2 0
                                             dx0        =              √      dy ,                         (4.20)
                                         0                        −∞     2π
or
                                                            Z y          0 2
                                                                e−(y ) /2 0
                                             x =                  √      dy .                              (4.21)
                                                             −∞     2π

So, if we generate uniformly distributed numbers x on [0, 1], then to determine y which are N (0, 1), we do
the following

     • Generate x

     • Find y such that
                                                                   Z y
                                                             1                          0 2
                                             x =            √                    e−(y ) /2 dy 0 .          (4.22)
                                                              2π       −∞


We can write this last step as

                                                        y = F (x)                                          (4.23)

where F (x) is the inverse cumulative normal distribution.

4.3     The Box-Muller Algorithm
Starting from random numbers which are uniformly distributed on [0, 1], there is actually a simpler method
for obtaining random numbers which are normally distributed.
    If p(x) is the probability of finding x ∈ [x, x + dx] and if y = y(x), and p̂(y) is the probability of finding
y ∈ [y, y + dy], then, from equation (4.15) we have

                                              |p(x)dx| = |p̂(y)dy|                                         (4.24)

or
                                                                                 dx
                                              p̂(y)          = p(x)                 .                      (4.25)
                                                                                 dy


                                                                  22
   Now, suppose we have two original random variables x1 , x2 , and let p(xi , x2 ) be the probability of
obtaining (x1 , x2 ) in [x1 , x1 + dx1 ] × [x2 , x2 + dx2 ]. Then, if

                                                  y1       = y1 (x1 , x2 )
                                                  y2       = y2 (x1 , x2 )                                 (4.26)

and we have that
                                                                           ∂(x1 , x2 )
                                      p̂(y1 , y2 )     = p(x1 , x2 )                                       (4.27)
                                                                           ∂(y1 , y2 )

where the Jacobian of the transformation is defined as
                                                                        ∂x1     ∂x1
                                        ∂(x1 , x2 )                     ∂y1     ∂y2
                                                           = det        ∂x2     ∂x2                        (4.28)
                                        ∂(y1 , y2 )                     ∂y1     ∂y2

Recall that the Jacobian of the transformation can be regarded as the scaling factor which transforms dx1 dx2
to dy1 dy2 , i.e.

                                                             ∂(x1 , x2 )
                                      dx1 dx2         =                  dy1 dy2 .                         (4.29)
                                                             ∂(y1 , y2 )

   Now, suppose that we have x1 , x2 uniformly distributed on [0, 1] × [0, 1], i.e.

                                           p(x1 , x2 )       = U (x1 )U (x2 )                              (4.30)

where

                                          U (x)        =     1     ; 0≤x≤1
                                                       =     0 ;      otherwise .                          (4.31)

We denote this distribution as x1 ∼ U [0, 1] and x2 ∼ U [0, 1].
  If p(x1 , x2 ) is given by equation (4.30), then we have from equation (4.27) that

                                                                      ∂(x1 , x2 )
                                            p̂(y1 , y2 )     =                                             (4.32)
                                                                      ∂(y1 , y2 )

Now, we want to find a transformation y1 = y1 (x1 , x2 ), y2 = y2 (x1 , x2 ) which results in normal distributions
for y1 , y2 . Consider
                                               p
                                      y1 =         −2 log x1 cos 2πx2
                                               p
                                      y2 =         −2 log x1 sin 2πx2                                       (4.33)

or solving for (x2 , x2 )
                                                                        
                                                             −1 2     2
                                          x1      =     exp     (y + y2 )
                                                              2 1
                                                                  
                                                         1    −1 y2
                                          x2      =        tan        .                                    (4.34)
                                                        2π        y1

After some tedious algebra, we can see that (using equation (4.34))

                                    ∂(x1 , x2 )               1   2     1   2
                                                       =     √ e−y1 /2 √ e−y2 /2                           (4.35)
                                    ∂(y1 , y2 )               2π        2π

                                                                 23
Now, assuming that equation (4.30) holds, then from equations (4.32-4.35) we have
                                                          1   2     1   2
                                      p̂(y1 , y2 )   =   √ e−y1 /2 √ e−y2 /2                         (4.36)
                                                          2π        2π
so that (y1 , y2 ) are independent, normally distributed random variables, with mean zero and variance one,
or

                                          y1 ∼ N (0, 1)    ; y2 ∼ N (0, 1) .                         (4.37)

    This gives the following algorithm for generating normally distributed random numbers (given uniformly
distributed numbers):
                                              Box Muller Algorithm

        Repeat
             Generate u1 ∼ √  U (0, 1), u2 ∼ U (0, 1)
             θ = 2πu2 , ρ = −2 log u1
             z1 = ρ cos θ; z2 = ρ sin θ
        End Repeat

                                                                                                     (4.38)

This has the effect that Z1 ∼ N (0, 1) and Z2 ∼ N (0, 1).
   Note that we generate two draws from a normal distribution on each pass through the loop.

4.3.1    An improved Box Muller
The algorithm (4.38) can be expensive due to the trigonometric function evaluations. We can use the
following method to avoid these evaluations. Let

                                           U1 ∼ U [0, 1]   ; U2 ∼ U [0, 1]
                                          V1 = 2U1 − 1     ; V2 = 2U2 − 1                            (4.39)

which means that (V1 , V2 ) are uniformly distributed in [−1, 1] × [−1, 1]. Now, we carry out the following
procedure
                                                 Rejection Method

        Repeat
             If ( V12 + V22 < 1 )
                     Accept
             Else
                     Reject
             Endif
        End Repeat

                                                                                                     (4.40)

which means that if we define (V1 , V2 ) as in equation (4.39), and then process the pairs (V1 , V2 ) using
algorithm (4.40) we have that (V1 , V2 ) are uniformly distributed on the disk centered at the origin, with
radius one, in the (V1 , V2 ) plane. This is denoted by

                                                (V1 , V2 ) ∼ D(0, 1) .                               (4.41)


                                                           24
   If (V1 , V2 ) ∼ D(0, 1) and R2 = V12 + V22 , then the probability of finding R in [R, R + dR] is

                                                                  2πR dR
                                             p(R) dR      =
                                                                   π(1)2
                                                          =       2R dR .                                   (4.42)

From the fundamental law of transformation of probabilities, we have that

                                           p(R2 )d(R2 )       = p(R)dR
                                                              =       2R dR                                 (4.43)

so that
                                                                      2R
                                                p(R2 )    =       d(R2 )
                                                                   dR
                                                          =       1                                         (4.44)

so that R2 is uniformly distributed on [0, 1], (R2 ∼ U [0, 1]).
    As well, if θ = tan−1 (V2 /V1 ), i.e. θ is the angle between a line from the origin to the point (V1 , V2 ) and
the V1 axis, then θ ∼ U [0, 2π]. Note that

                                                                 V1
                                            cos θ     =   p
                                                               V1 + V22
                                                                 2

                                                                 V2
                                             sin θ    =   p                .                                (4.45)
                                                               V1 + V22
                                                                 2


Now in the original Box Muller algorithm (4.38),
                                       p
                                   ρ = −2 log U1              ; U1 ∼ U [0, 1]
                                             θ = 2ΠU2         ; U2 ∼ U [0, 1] ,                             (4.46)

but θ = tan−1 (V2 /V1 ) ∼ U [0, 2π], and R2 = U [0, 1]. Therefore, if we let W = R2 , then we can replace θ, ρ
in algorithm (4.38) by
                                                             
                                                              V2
                                             θ = tan−1
                                                              V1
                                                     p
                                             ρ =        −2 log W .                                     (4.47)

   Now, the last step in the Box Muller algorithm (4.38) is

                                                 Z1    = ρ cos θ
                                                 Z2    = ρ sin θ ,                                          (4.48)

but since W = R2 = V12 + V22 , then cos θ = V1 /R, sin θ = V2 /R, so that

                                                          V1
                                                Z1    = ρ√
                                                           W
                                                          V2
                                                Z2    = ρ√   .                                              (4.49)
                                                           W
   This leads to the following algorithm
                                         Polar form of Box Muller


                                                          25
      Repeat
           Generate U1 ∼ U [0, 1], U2 ∼ U [0, 1].
           Let
                                                       V1    =   2U1 − 1
                                                       V2    =   2U2 − 1
                                                       W     = V12 + V22
             If( W < 1) then

                                                                 p
                                                       Z1    = V1  −2 log W/W
                                                                 p
                                                       Z2    = V2 −2 log W/W                              (4.50)
           End If
      End Repeat

Consequently, (Z1 , Z2 ) are independent (uncorrelated), and Z1 ∼ N (0, 1), and Z2 ∼ N (0, 1). Because of the
rejection step (4.40), about (1 − π/4) of the random draws in [−1, +1] × [−1, +1] are rejected (about 21%),
but this method is still generally more efficient than brute force Box Muller.

4.4    Speeding up Monte Carlo
Monte Carlo methods are slow to converge, since the error is given by
                                                             1
                                              Error    = O( √ )
                                                             M
where M is the number of samples. There are many methods which can be used to try to speed up
convergence. These are usually termed Variance Reduction techniques.
   Perhaps the simplest idea is the Antithetic Variable method. Suppose we compute a random asset path
                                                               √
                                     S i+1 = S i µ∆t + S i σφi ∆t
where φi are N (0, 1). We store all the φi , i = 1, ..., for a given path. Call the estimate for the option price
from this sample path V + . Then compute a second sample path where (φi )0 = −φi , i = 1, ...,. Call this
estimate V − . Then compute the average
                                                        V++V−
                                              V̄   =          ,
                                                          2
and continue sampling in this way. Averaging over all the V̄ , slightly faster convergence is obtained. Intu-
itively, we can see that this symmetrizes the random paths.
    Let X + be the option values obtained from all the V + simulations, and X − be the estimates obtained
from all the V − simulations. Note that V ar(X + ) = V ar(X − ) (they have the same distribution). Then
                             X+ + X−         1             1             1
                     V ar(           )   =     V ar(X + ) + V ar(X − ) + Cov(X + , X − )
                                2            4             4             2
                                             1        +    1       +    −
                                         =     V ar(X ) + Cov(X , X )                                     (4.51)
                                             2             2
which will be smaller than V ar(X + ) if Cov(X + , X − ) is nonpositive. Warning: this is not always the case.
For example, if the payoff is not a monotonic function of S, the results may actually be worse than crude
Monte Carlo. For example, if the payoff is a capped call
                                    payoff    =    min(K2 , max(S − K1 , 0))
                                                   K2 > K1


                                                        26
then the antithetic method performs poorly.
   Note that this method can be used to estimate
                                          q      the mean. In the MC error estimator (4.13), compute the
                                                           +    −
standard deviation of the estimator as ω = V ar( X +X   2   ).
    However, if we want to estimate the distribution of option prices (i.e. a probability distribution), then
we should not average each V + and V − , since this changes the variance of the actual distribution.
    If we want to know the actual variance of the distribution (and not just the mean), then to compute the
variance of the distribution, we should just use the estimates V + , and compute the estimate of the variance
in the usual way. This should also be used if we want to plot a histogram of the distribution, or compute
the Value at Risk.

4.5       Estimating the mean and variance
An estimate of the mean x̄ and variance s2M of M numbers x1 , x2 , ..., xM is
                                                              M
                                                         1 X
                                           s2M     =             (xi − x̄)2
                                                       M − 1 i=1
                                                           M
                                                       1 X
                                            x̄ =             xi                                        (4.52)
                                                       M i=1

Alternatively, one can use
                                                       
                                                           M           M
                                                                                   !2 
                                               1          1
                                                           X           X
                                s2M    =              x2 −                    xi                      (4.53)
                                             M − 1 i=1 i   M           i=1

which has the advantage that the estimate of the mean and standard deviation can be computed in one loop.
    In order to avoid roundoff, the following method is suggested by Seydel (R. Seydel, Tools for Computa-
tional Finance, Springer, 2002). Set
                                                 α1 = x1 ; β1 = 0                                      (4.54)
then compute recursively
                                                     xi − αi−1
                                      αi    = αi−1 +
                                                          i
                                                     (i − 1)(xi − αi−1 )2
                                      βi    = βi−1 +                                                   (4.55)
                                                              i
so that
                                                     x̄ = αM
                                                           βM
                                                   s2M =                                               (4.56)
                                                          M −1

4.6       Low Discrepancy Sequences
In a effort to get around the √1M , (M = number of samples) behaviour of Monte Carlo methods, quasi-Monte
Carlo methods have been devised.
    These techniques use a deterministic sequence of numbers (low discrepancy sequences). The idea here
is that a Monte Carlo method does not fill the sample space very evenly (after all, its random). A low
discrepancy sequence tends to sample the space in a orderly fashion. If d is the dimension of the space, then
the worst case error bound for an LDS method is
                                                         (log M )d
                                                                  
                                          Error = O                                                    (4.57)
                                                             M

                                                           27
where M is the number of samples used. Clearly, if d is small, then this error bound is (at least asymptotically)
better than Monte Carlo.
   LDS methods generate numbers on [0, 1]. We cannot use the Box-Muller method in this case to produce
normally distributed numbers, since these numbers are deterministic. We have to invert the cumulative
normal distribution in order to get the numbers distributed with mean zero and standard deviation one on
[−∞, +∞]. So, if F (x) is the inverse cumulative normal distribution, then

                                  xLDS    =    uniformly distributed on [0, 1]
                                  yLDS    = F (xLDS ) is N (0, 1) .                                       (4.58)

   Another problem has to do with the fact that if we are stepping through time, i.e.
                                                                 √
                                 S n+1 = S n + S n (r∆t + φσ ∆t)
                                                 φ = N (0, 1)                                             (4.59)

with, say, N steps in total, then we need to think of this as a problem in N dimensional space. In other
words, the k − th timestep is sampled from the k − th coordinate in this N dimensional space. We are trying
to uniformly sample from this N dimensional space.
    Let x̂ be a vector of LDS numbers on [0, 1], in N dimensional space
                                                         
                                                       x1
                                                     x2 
                                               x̂ = 
                                                     |  .
                                                                                                    (4.60)
                                                      xN

   So, an LDS algorithm would proceed as follows, for the j 0 th trial
   • Generate x̂j (the j 0 th LDS number in an N dimensional space).
   • Generate the normally distributed vector ŷ j by inverting the cumulative normal distribution for each
     component
                                                        F (xj1 )
                                                                
                                                      F (xj ) 
                                              ŷ j =        2                                      (4.61)
                                                          |     
                                                        F (xjN )

   • Generate a complete sample path k = 0, ..., N − 1
                                                                    j
                                                                         √
                                       Sjk+1   = Sjk + Sjk (r∆t + ŷk+1 σ ∆t)
                                                                                                          (4.62)

   • Compute the payoff at S = SjN
The option value is the average of these trials.
   There are a variety of LDS numbers: Halton, Sobol, Niederrieter, etc. Our tests seem to indicate that
Sobol is the best.
   Note that the worst case error bound for the error is given by equation (4.57). If we use a reasonable
number of timesteps, say 50 − 100, then, d = 50 − 100, which gives a very bad error bound. For d large, the
numerator in equation (4.57) dominates. The denominator only dominates when

                                                  M    ≃ ed                                               (4.63)

which is a very large number of trials for d ≃ 100. Fortunately, at least for path-dependent options, we have
found that things are not quite this bad, and LDS seems to work if the number of timesteps is less than
100 − 200. However, once the dimensionality gets above a few hundred, convergence seems to slow down.


                                                       28
4.7     Correlated Random Numbers
In many cases involving multiple assets, we would like to generate correlated, normally distributed random
numbers. Suppose we have i = 1, ..., d assets, and each asset follows the simulated path
                                                                    √
                                  Sin+1 = Sin + Sin (r∆t + φni σi ∆t)
                                                                                                           (4.64)

where φni is N (0, 1) and

                                                  E(φni φnj )             = ρij                            (4.65)

where ρij is the correlation between asset i and asset j.
   Now, it is easy to generate a set of d uncorrelated N (0, 1) variables. Call these 1 , ..., d . So, how do we
produce correlated numbers? Let

                                                    [Ψ]ij = ρij                                            (4.66)

be the matrix of correlation coefficients. Assume that this matrix is SPD (if not, one of the random variables
is a linear combination of the others, hence this is a degenerate case). Assuming Ψ is SPD, we can Cholesky
factor Ψ = LLt , so that
                                                        X
                                              ρij =        Lik Ltkj                                     (4.67)
                                                                   k

Let φ̄ be the vector of correlated normally distributed random numbers (i.e. what we want to get), and let
¯ be the vector of uncorrelated N (0, 1) numbers (i.e. what we are given).
                                                                
                                                  φ1            1
                                                 φ2         2 
                                           φ̄ = 
                                                 |  ; ¯ =  | 
                                                                                                 (4.68)
                                                  φd            d

So, given ¯, we have

                                                   E(i j )          = δij


where

                                             δij        =       0 ; if i 6= j
                                                        =       1 ; if i = j .

since the i are uncorrelated. Now, let
                                                                  X
                                                   φi       =              Lij j                          (4.69)
                                                                   j

which gives
                                                            XX
                                          φi φk    =                       Lij Lkl l j
                                                            j         l
                                                            XX
                                                   =                       Lij l j Ltlk .                (4.70)
                                                            j         l



                                                                 29
Now,
                                                                     
                                                    XX
                                    E(φi φk )   = E   Lij l j Ltlk 
                                                           j    l
                                                    XX
                                                =              Lij E(l j )Ltlk
                                                     j     l
                                                    XX
                                                =              Lij δlj Ltlk
                                                     j     l
                                                    X
                                                =         Lil Ltlk
                                                     l
                                                = ρij                                                     (4.71)

So, in order to generate correlated N (0, 1) numbers:
   • Factor the correlation matrix Ψ = LLt
   • Generate uncorrelated N (0, 1) numbers i
   • Correlated numbers φi are given from

                                                         φ̄ = L¯
                                                               

4.8    Integration of Stochastic Differential Equations
Up to now, we have been fairly slack about defining what we mean by convergence when we use forward
Euler timestepping (4.2) to integrate

                                          dS = µS dt + σS dZ .                                            (4.72)

The forward Euler algorithm is simply
                                                                    √
                                        S i+1   = S i + S i (µh + φi h)                                   (4.73)

where h = ∆t is the finite timestep. For a good overview of these methods, check out (“An algorithmic
introduction to numerical simulation of stochastic differential equations,” by D. Higham, SIAM Review vol.
43 (2001) 525-546). This article also has some good tips on solving SDEs using Matlab, in particular, taking
full advantage of the vectorization of Matlab. Note that eliminating as many for loops as possible (i.e.
computing all the MC realizations for each timestep in a vector) can reduce computation time by orders of
magnitude.
    Before we start defining what we mean by convergence, let’s consider the following situation. Recall that
                                                      √
                                              dZ = φ dt                                               (4.74)

where φ is a random draw from a normal distribution with mean zero and variance one. Let’s imagine
generating a set of Z values at discrete times ti , e.g. Z(ti ) = Zi , by
                                                                √
                                           Zi+1 = Zi + φ ∆t .                                (4.75)

Now, these are all legitimate points along a Brownian motion path, since there is no timestepping error here,
in view of equation (2.53). So, this set of values {Z0 , Z1 , ..., } are valid points along a Brownian path. Now,
recall that the exact solution (for a given Brownian path) of equation (4.72) is given by equation (2.57)

                                                     σ2
                             S(T ) = S(0) exp[(µ −      )t + σ(Z(T ) − Z(0))]                             (4.76)
                                                     2

                                                         30
where T is the stopping time of the simulation.
    Now if we integrate equation (4.72) using forward Euler, with the discrete timesteps ∆t = ti+1 − ti , using
the realization of the Brownian path {Z0 , Z1 , ..., }, we will not get the exact solution (4.76). This is because
even though the Brownian path points are exact, time discretization errors are introduced in equation (4.73).
So, how can we systematically study convergence of algorithm (4.73)? We can simply take smaller timesteps.
However, we want to do this by filling in new Z values in the Brownian path, while keeping the old values
(since these are perfectly legitimate values). Let S(T )h represent the forward Euler solution (4.73) for a
fixed timestep h. Let S(T ) be the exact solution (4.76). As h → 0, we would expect S(T )h → S(T ), for a
given path.

4.8.1   The Brownian Bridge
So, given a set of valid Zk , how do we refine this path, keeping the existing points along this path? In
particular, suppose we have two points Zi , Zk , at (ti , tk ), and we would like to generate a point Zj at tj ,
with ti < tj < tk . How should we pick Zj ? What density function should we use when generating Zj , given
that Zk is known?
   Let x, y be two draws from a normal distribution with mean zero and variance one. Suppose we have the
point Z(ti ) = Zi and we generate Z(tj ) = Zj , Z(tk ) = Zk along the Wiener path,
                                                p
                                Zj = Zi + x tj − ti                                                      (4.77)
                                                 p
                                Zk = Zj + y tk − tj                                                      (4.78)
                                                       p             p
                                         Zk = Zi + x tj − ti + y tk − tj .                               (4.79)

So, given (x, y), and Zi , we can generate Zj , Zk . Suppose on the other hand, we have Zi , and we generate
Zk directly using
                                                          √
                                          Zk = Zi + z tk − ti ,                                       (4.80)

where z is N (0, 1). Then how do we generate Zj using equation (4.77)? Since we are now specifying that
we know Zk , this means that our method for generating Zj is constrained. For example, given z, we must
have that, from equations (4.79) and (4.80)
                                             √           √
                                            z tk − ti − x tj − ti
                                      y =         √               .                               (4.81)
                                                    tk − tj

   Now the probability density of drawing the pair (x, y) given z, denoted by p(x, y|z) is

                                                             p(x)p(y)
                                            p(x, y|z)   =                                                  (4.82)
                                                               p(z)

where p(..) is a standard normal distribution, and we have used the fact that successive increments of a
Brownian process are uncorrelated.
   From equation (4.81), we can write y = y(x, z), so that p(x, y|z) = p(x, y(x, z)|z)

                                                    p(x)p(y(x, z))
                              p(x, y(x, z)|z)   =
                                                         p(z)
                                                                       
                                                      1         1 2 2 2
                                                =   √ exp − (x + y − z )                                   (4.83)
                                                      2π        2




                                                        31
or (after some algebra, using equation (4.81))
                                                                   
                                               1         1    2   2
                                  p(x|z)    = √ exp − (x − αz) /β
                                               2π        2
                                                 r
                                                   tj − ti
                                              α=
                                                   tk − ti
                                                 r
                                                   tk − tj
                                              β=                                                        (4.84)
                                                   tk − ti
so that x is normally distributed with mean αz and variance β 2 . Since
                                                           Z − Zi
                                                 z   =     √k                                           (4.85)
                                                            tk − ti
we have that x has mean
                                                      √
                                                          tj − ti
                                        E(x)     =                (Zk − Zi )                            (4.86)
                                                         tk − ti
and variance
                                                                   tk − tj
                                           E[(x − E(x))2 ]     =                                        (4.87)
                                                                   tk − ti
   Now, let
                                             √                       r
                                               tj − ti                 tk − tj
                                   x =                 (Zk − Zi ) + φ                                   (4.88)
                                              tk − ti                  tk − ti
where φ is N (0, 1). Clearly, x satisfies equations (4.86) and (4.88). Substituting equation (4.88) into (4.77)
gives
                                                                 s
                                    tk − tj          tj − ti           (tj − ti )(tk − tj )
                        Zj =                  Zi +             Zk + φ                                    (4.89)
                                    tk − ti          tk − ti               (tk − ti )

where φ is N (0, 1). Equation (4.89) is known as the Brownian Bridge.
    Figure 4.1 shows different Brownian paths constructed for different timestep sizes. An initial coarse path
is constructed, then the fine timestep path is constructed from the coarse path using a Brownian Bridge. By
construction, the final timestep path will pass through the coarse timestep nodes.
    Figure 4.2 shows the asset paths integrated using the forward Euler algorithm (4.73) fed with the Brow-
nian paths in Figure 4.1. In this case, note that the fine timestep path does not coincide with the coarse
timestep nodes, due to the timestepping error.

4.8.2   Strong and Weak Convergence
Since we are dealing with a probabilistic situation here, it is not obvious how to define convergence. Given
a number of points along a Brownian path, we could imagine refining this path (using a Brownian Bridge),
and then seeing if the solution converged to exact solution. For the model SDE (4.72), we could ask that

                                    E |S(T ) − S h (T )| ≤ Const. hγ
                                                       
                                                                                                       (4.90)

where the expectation in equation (4.90) is over many Brownian paths, and h is the timestep size. Note
that S(T ) is the exact solution along a particular Brownian path; the same path used to compute S h (T ).
Criterion (4.90) is called strong convergence. A less strict criterion is

                                    |E [S(T )] − E S h (T ) | ≤ Const. hγ
                                                          
                                                                                                  (4.91)


                                                          32
                      0.5                                                                                                             0.5

                      0.4                                                                                                             0.4

                      0.3                                                                                                             0.3

                      0.2                                                                                                             0.2
     Brownian Path




                                                                                                                Brownian Path
                      0.1                                                                                                             0.1

                           0                                                                                                           0

                     -0.1                                                                                                        -0.1

                     -0.2                                                                                                        -0.2

                     -0.3                                                                                                        -0.3

                     -0.4                                                                                                        -0.4

                     -0.5                                                                                                        -0.5
                               0    0.1    0.2    0.3    0.4     0.5    0.6    0.7    0.8    0.9       1                                    0   0.1   0.2   0.3   0.4    0.5   0.6   0.7   0.8   0.9   1
                                                               Time                                                                                                     Time



Figure 4.1: Effect of adding more points to a Brownian path using a Brownian bridge. Note that the small
timestep points match the coarse timestep points. Left: each coarse timestep is divided into 16 substeps.
Right: each coarse timestep divided into 64 substeps.




                     120                                                                                                          120


                     115                                                                                                          115


                     110                                                                                                          110


                     105                                                                                                          105
       Asset Price




                                                                                                                        Asset Price




                     100                                                                                                          100


                      95                                                                                                              95


                      90                                                                                                              90


                      85                                                                                                              85


                      80                                                                                                              80
                           0       0.1    0.2    0.3    0.4     0.5    0.6    0.7    0.8    0.9    1                                        0   0.1   0.2   0.3   0.4    0.5   0.6   0.7   0.8   0.9   1
                                                               Time                                                                                                     Time



Figure 4.2: Brownian paths shown in Figure 4.1 used to determine asset price paths using forward Euler
timestepping (4.73). In this case, note that the asset paths for fine and coarse timestepping do not agree at
the final time (due to the timestepping error). Eventually, for small enough timesteps, the final asset value
will converge to the exact solution to the SDE. Left: each coarse timestep is divided into 16 substeps. Right:
each coarse timestep divided into 64substeps.




                                                                                                           33
                                                         T     .25
                                                         σ      .4
                                                         µ     .06
                                                         S0    100

                              Table 4.1: Data used in the convergence tests.


                           Timesteps      Strong Error (4.90)          Weak Error (4.91)
                              72                 .0269                      .00194
                              144                .0190                      .00174
                              288                .0135                      .00093
                              576                .0095                      .00047

                Table 4.2: Convergence results, 100,000 samples used. Data in Table 4.1.



It can be shown that using forward Euler results in weak convergence with γ = 1, and strong convergence
with γ = .5.
    Table 4.1 shows some test data used to integrate the SDE (4.72) using method (4.73). A series of Brownian
paths was constructed, beginning with a coarse timestep path. These paths were systematically refined using
the Brownian Bridge construction. Table 4.2 shows results where the strong and weak convergence errors
are estimated as
                                                       N
                                                    1 X
                                                          |S(T )i − S h (T )i |
                                                                               
                           Strong Error     =                                                          (4.92)
                                                    N i=1
                                                       N                 N
                                                    1 X               1 X h       
                            Weak Error      = |           [S(T )i ] −       S (T )i | ,                (4.93)
                                                    N i=1             N i=1

where S h (T )i is the solution obtained by forward Euler timestepping along the i0 th Brownian path, and
S(T )i is the exact solution along this same path, and N is the number of samples. Note that for equation
(4.72), we have the exact solution
                                                     N
                                            1 X
                                        lim       [S(T )i ]          = S0 eµT                          (4.94)
                                       N →∞ N
                                              i=1

but we do not replace the approximate sampled value of the limit in equation (4.93) by the theoretical limit
(4.94). If we use enough Monte Carlo samples, we could replace the approximate expression
                                                          N
                                                1 X
                                              lim     [S(T )i ]
                                           N →∞ N
                                                  i=1

by S0 eµT , but for normal parameters, the Monte Carlo sampling error is much larger than the timestepping
error, so we would have to use an enormous number of Monte Carlo samples. Estimating the weak error
using equation (4.93) will measure the timestepping error, as opposed to the Monte Carlo sampling error.
However, for normal parameters, even using equation (4.93) requires a large number of Monte Carlo samples
in order to ensure that the error is dominated by the timestepping√ error.
    In Table 4.1, we can see that the ratio of the errors is about 2 for the strong error, and about two for
the weak error. This is consistent with a convergence rate of γ = .5 for strong convergence, and γ = 1.0 for
weak convergence.


                                                              34
4.9   Matlab and Monte Carlo Simulation
A straightforward implementation of Monte Carlo timestepping for solving the SDE

                                         dS   = µS dt + σS dZ                                        (4.95)

in Matlab is shown in Algorithm (4.96). This code runs very slowly.

                                                Slow.m

           randn(’state’,100);
           T = 1.00;                    % expiry time
           sigma = 0.25;                % volatility
           mu = .10;                    % P measure drift
           S_init = 100;                % initial value
           N_sim = 10000;               %   number of simulations
           N = 100;                     %   number of timesteps
           delt = T/N;                  %   timestep

           drift = mu*delt;
           sigma_sqrt_delt = sigma*sqrt(delt);
           S_new = zeros(N_sim,1);

        for m=1:N_sim
         S = S_init;
         for i=1:N % timestep loop

            S = S + S*( drift + sigma_sqrt_delt*randn(1,1) );

            S = max(0.0, S );
                   % check to make sure that S_new cannot be < 0

         end % timestep loop
         S_new(m,1) = S;
        end % simulation loop

         n_bin = 200;
         hist(S_new, n_bin);

         stndrd_dev = std(S_new);
         disp(sprintf(’standard deviation:        %.5g\n’,stndrd_dev));

         mean_S = mean(S_new);
         disp(sprintf(’mean: %.5g\n’,stndrd_dev));

                                                                                            (4.96)

    Alternatively, we can use Matlab’s vectorization capabilities to interchange the timestep loop and the
simulation loop. The innermost simulation loop can be replaced by vector statements, as shown in Algorithm
(4.97). This runs much faster.




                                                   35
                                    Fast.m

 randn(’state’,100);
  %
  T = 1.00;                 % expiry time
  sigma = 0.25;             % volatility
  mu = .10;                 % P measure drift
  S_init = 100;             % initial value
  N_sim = 10000;            %   number of simulations
  N = 100;                  %   number of timesteps
  delt = T/N;               %   timestep

 drift = mu*delt;
 sigma_sqrt_delt = sigma*sqrt(delt);

 S_old = zeros(N_sim,1);
 S_new = zeros(N_sim,1);

 S_old(1:N_sim,1) = S_init;

for i=1:N % timestep loop

   % now, for each timestep, generate info for
   % all simulations

   S_new(:,1) = S_old(:,1) +...
        S_old(:,1).*( drift + sigma_sqrt_delt*randn(N_sim,1) );

   S_new(:,1) = max(0.0, S_new(:,1) );
         % check to make sure that S_new cannot be < 0

  S_old(:,1) = S_new(:,1);
    %
    % end of generation of all data for all simulations
    % for this timestep

end % timestep loop

n_bin = 200;
hist(S_new, n_bin);

stndrd_dev = std(S_new);
disp(sprintf(’standard deviation:    %.5g\n’,stndrd_dev));

mean_S = mean(S_new);
disp(sprintf(’mean: %.5g\n’,stndrd_dev));

                                                                  (4.97)




                                      36
5    The Binomial Model
We have seen that a problem with the Monte Carlo method is that it is difficult to use for valuing American
style options. Recall that the holder of an American option can exercise the option at any time and receive
the payoff. In order to determine whether or not it is worthwhile to hold the option, we have to compare the
value of continuing to hold the option (the continuation value) with the payoff. If the continuation value is
greater than the payoff, then we hold; otherwise, we exercise.
    At any point in time, the continuation value depends on what happens in the future. Clearly, if we
simulate forward in time, as in the Monte Carlo approach, we don’t know what happens in the future, and
hence we don’t know how to act optimally. This is actually a dynamic programming problem. These sorts
of problems are usually solved by proceeding from the end point backwards. We use the same idea here. We
have to start from the terminal time and work backwards.
    Recall that we can determine the no-arbitrage value of an option by pretending we live in a risk-neutral
world, where risky assets drift at r and are discounted at r. If we let X = log S, then the risk neutral process
for X is (from equation (2.55) )

                                                                 σ2
                                           dX       =     (r −      )dt + σdZ .                            (5.1)
                                                                 2
Now, we can construct a discrete approximation to this random walk using the lattice discussed in Section
                                                     2
2.5. In fact, all we have to do is let let α = r − σ2 , so that equation (5.1) is formally identical to equation
(2.4). In order to ensure that in√the limit as ∆t → 0, we get the process (5.1), we require that the sizes of
the random jumps are ∆X = σ ∆t and that the probabilities of up (p) and down (q) moves are
                                                        1      α√
                                          pr    =         [1 +     ∆t]
                                                        2      σ
                                                        1      r    σ√
                                                =         [1 +     −     ∆t]
                                                        2        σ   2
                                                        1      α√
                                          qr    =         [1 −     ∆t]
                                                        2      σ
                                                        1      r    σ√
                                                =         [1 −     −     ∆t] ,                             (5.2)
                                                        2        σ   2
where we have denoted the risk neutral probabilities by pr and q r to distinguish them from the real proba-
bilities p, q.
    Now, we will switch to a more common notation. If we are at node j, timestep n, we will    n
                                                                                                   denote this
node location by Xjn . Recall that X = log S, so that in terms of asset price, this is Sjn = eXj .
    Now, consider that at node (j, n), the asset can move up with probability pr and down with probability
 r
q . In other words
                                              n+1
                                   Sjn     → Sj+1 ;          with probability pr
                                   Sjn     → Sjn+1 ;         with probability q r
                                                                                                           (5.3)
                                                           √
Now, since in Section 2.5 we showed that ∆X = σ ∆t, so that (S = eX )
                                                                      √
                                                 n+1
                                                Sj+1       = Sjn eσ ∆t
                                                                       √
                                                Sjn+1      = Sjn e−σ ∆t                                    (5.4)

or
                                                                 √
                                    Sjn    = S00 e(2j−n)σ ∆t ; j = 0, .., n                                (5.5)

So, the first step in the process is to construct a tree of stock price values, as shown on Figure 5.


                                                               37
                                                                S 22

                                                      1
                                                    S1




                                      S 00                      S 21




                                                    S 10


                                                                S 20



                                   Figure 5.1: Lattice of stock price values


   Associated with each stock price on the lattice is the option value Vjn . We first set the value of the option
at T = N ∆t to the payoff. For example, if we are valuing a put option, then

                                   VjN       =   max(K − SjN , 0) ; j = 0, ..., N                           (5.6)

Then, we can use the risk neutral world idea to determine the no-arbitrage value of the option (it is the
expected value in the risk neutral world). We can do this by working backward through the lattice. The
value today is the discounted expected future value

                                         European Lattice Algorithm


                                     Vjn     = e−r∆t pr Vj+1
                                                          n+1
                                                              + q r Vjn+1
                                                                             

                                                  n = N − 1, ..., 0
                                                  j = 0, ..., n                                             (5.7)

Rolling back through the tree, we obtain the value at S00 today, which is V00 .
   If the option is an American put, we can determine if it is optimal to hold or exercise, since we know the
continuation value. In this case the rollback (5.7) becomes

                                         American Lattice Algorithm


                                  (Vjn )c    = e−r∆t pr Vj+1
                                                          n+1
                                                              + q r Vjn+1
                                                                             

                                     Vjn          max (Vjn )c , max(K − Sjn , 0)
                                                                                
                                             =
                                                  n = N − 1, ..., 0
                                                  j = 0, ..., n                                             (5.8)

which is illustrated in Figure 5.
   The binomial lattice method has the following advantages
   • It is very easy to code for simple cases.
   • It is easy to explain to managers.


                                                           38
                                                                    V nj++11


                                                     p



                                        V nj



                                                     q


                                                                         V n+1
                                                                           j




                                    Figure 5.2: Backward recursion step.


   • American options are easy to handle.

   However, the binomial lattice method has the following disadvantages

   • Except for simple cases, coding becomes complex. For example, if we want to handle simple barrier
     options, things become nightmarish.

   • This method is algebraically identical to an explicit finite difference solution of the Black-Scholes
     equation. Consequently, convergence is at an O(∆t) rate.

   • The probabilities pr , q r are not real probabilities, they are simply the coefficients in a particular dis-
     cretization of a PDE. Regarding them as probabilities leads to much fuzzy thinking, and complex
     wrong-headed arguments.

    If we are going to solve the Black-Scholes PDE, we might as well do it right, and not fool around with
lattices.

5.1    A No-arbitrage Lattice
We can also derive the lattice method directly from the discrete lattice model in Section 2.5. Suppose we
assume that

                                               dS = µSdt + σSdZ                                             (5.9)

and letting X = log S, we have that

                                                      σ2
                                        dX = (µ −        )dt + σdZ                                        (5.10)
                                                      2
                  2
so that α = µ − σ2 in equation (2.19). Now, let’s consider the usual hedging portfolio at t = n∆t, S = Sjn ,

                                           Pjn = Vjn − (αh )Sjn ,                                         (5.11)




                                                         39
where Vjn is the value of the option at t = n∆t, S = Sjn . At t = (n + 1)∆t,
                                                    n+1
                                      Sjn   →      Sj+1 ;               with probability p
                                      Sjn   →      Sjn+1        ;       with probability q
                                                                           √
                                                    n+1
                                                   Sj+1 = Sjn eσ ∆t
                                                                            √
                                                   Sjn+1 = Sjn e−σ ∆t

so that the value of the hedging portfolio at t = n + 1 is
                             n+1         n+1         n+1
                            Pj+1     = Vj+1  − (αh )Sj+1 ;                      with probability p          (5.12)
                            Pjn+1    = Vjn+1 − (αh )Sjn+1 ;                     with probability q .        (5.13)

Now, as in Section 2.3, we can determine (αh ) so that the value of the hedging portfolio is independent of
p, q. We do this by requiring that
                                                     n+1
                                                    Pj+1            = Pjn+1                                 (5.14)

so that
                                      n+1         n+1
                                    Vj+1  − (αh )Sj+1               = Vjn+1 − (αh )Sjn+1

which gives
                                                                  n+1
                                                                Vj+1  − Vjn+1
                                            (αh )           =        n+1              .                     (5.15)
                                                                    Sj+1 − Sjn+1

Since this portfolio is risk free, it must earn the risk free rate of return, so that

                                                Pjn         = e−r∆t Pj+1
                                                                     n+1


                                                            = e−r∆t Pjn+1 .                                 (5.16)
                                                    n+1
Now, substitute for Pjn from equation (5.11), with Pj+1 from equation (5.13), and (αh ) from equation (5.15)
gives

                                   Vjn = e−r∆t pr∗ Vj+1 n+1
                                                            + q r∗ Vjn+1
                                                                         
                                                                                 √
                                                       r∗       er∆t − e−σ ∆t
                                                   p        =       √             √
                                                       eσ ∆t − e−σ ∆t
                                                   q = 1 − pr∗ .
                                                    r∗
                                                                                                            (5.17)

Note that pr∗ , q r∗ do not depend on the real drift rate µ, which is expected. If we expand pr∗ , q r∗ in a Taylor
Series, and compare with the pr , q r in equations (5.2), we can show that

                                            pr∗        = pr + O((∆t)3/2 )
                                            q r∗       = q r + O((∆t)3/2 ) .                                (5.18)

After a bit more work, one can show that the value of the option at t = 0, V00 using either pr∗ , q r∗ or pr , q r
is the same to O(∆t), which is not surprising, since these methods can both be regarded as an explicit
finite difference approximation to the Black-Scholes equation, having truncation error O(∆t). The definition
pr∗ , q r∗ is the common definition in finance books, since the tree has no-arbitrage.



                                                                    40
   What is the meaning of a no-arbitrage tree? If we are sitting at node Sjn , and assuming that there are
only two possible future states
                                                    n+1
                                     Sjn   →       Sj+1 ;       with probability p
                                     Sjn   →       Sjn+1   ;    with probability q


then using (αh ) from equation (5.15) guarantees that the hedging portfolio has the same value in both future
states.
    But let’s be a bit more sensible here. Suppose we are hedging a portfolio of RIM stock. Let ∆t = one
day. Suppose the price of RIM stocks is $10 today. Do we actually believe that tomorrow there are only two
possible prices for Rim stock
                                                                      √
                                                   Sup     =    10eσ ∆t
                                                                          √
                                            Sdown          =    10e−σ ∆t ?
                                                                                                        (5.19)
Of course not. This is obviously a highly simplified model. The fact that there is no-arbitrage in the context
of the simplified model does not really have a lot of relevance to the real-world situation. The best that
can be said is that if the Black-Scholes model was perfect, then we have that the portfolio hedging ratios
computed using either pr , q r or pr∗ , q r∗ are both correct to O(∆t).


6     More on Ito’s Lemma
In Section 2.6.1, we mysteriously made the infamous comment
      ...it can be shown that dZ 2 → dt as dt → 0
   In this Section, we will give some justification this remark. For a lot more details here, we refer the
reader to Stochastic Differential Equations, by Bernt Oksendal, Springer, 1998.
   We have to go back here, and decide what the statement
                                                   dX    = αdt + cdZ                                     (6.1)
really means. The only sensible interpretation of this is
                                            Z t                Z t
                        X(t) − X(0) =           α(X(s), s)ds +     c(X(s), s)dZ(s) .                     (6.2)
                                                   0                           0

where we can interpret the integrals as the limit, as ∆t → 0 of a discrete sum. For example,
                              Z t                                          X−1
                                                                          j=N
                                    c(X(s), s)dZ(s)        =        lim             cj ∆Zj
                               0                                ∆t→0
                                                                              j=0
                                                                cj = c(X(Zj ), tj )
                                                                Zj = Z(tj )
                                                                ∆Zj = Z(tj+1 ) − Z(tj )
                                                                ∆t = tj+1 − tj
                                                                N = t/(∆t)                               (6.3)
    In particular, in order to derive Ito’s Lemma, we have to decide what
                                            Z t
                                                c(X(s), s) dZ(s)2                                        (6.4)
                                               0


                                                               41
means. Replace the integral by a sum,
                              Z t                                                 X−1
                                                                                 j=N
                                                             2
                                    c(X(s), s) dZ(s)             =        lim                      c(Xj , tj )∆Zj2 .    (6.5)
                               0                                      ∆t→0
                                                                                     j=0

Note that we have evaluated the integral using the left hand end point of each subinterval (the no peeking
into the future principle).
    From now on, we will use the notation

                                                             X         X−1
                                                                      j=N
                                                                 ≡                       .                              (6.6)
                                                             j             j=0

     Now, we claim that
                                      Z t                                       Z t
                                            c(X(s), s)dZ 2 (s)            =                  c(X(s), s)ds               (6.7)
                                       0                                             0
or
                                                         
                                                X                                              X
                                           lim   cj ∆Zj2  =                       lim                cj ∆t            (6.8)
                                       ∆t→0                                      ∆t→0
                                                         j                                         j


which is what we mean by equation (6.7). i.e. we can say that dZ 2 → dt as dt → 0.
   Now, let’s consider a finite ∆t, and consider the expression
                                                              2 
                                          X             X
                                     E      cj ∆Zj2 −   cj ∆t                                                       (6.9)
                                                                  
                                                         j                j


If equation (6.9) tends to zero as ∆t → 0, then we can say that (in the mean square limit)
                                                   
                                        X                      X
                                   lim     cj ∆Zj2  = lim        cj ∆t
                                      ∆t→0                                     ∆t→0
                                                     j                                         j
                                                                               Z t
                                                                      =                  c(X(s), s) ds                 (6.10)
                                                                                 0

so that in this sense
                                            Z t                                Z t
                                                                 2
                                                    c(X, s) dZ       =               c(X, s) ds                        (6.11)
                                                0                               0

and hence we can say that

                                                             dZ 2 → dt                                                 (6.12)

with probability one as ∆t → 0.
   Now, expanding equation (6.9) gives
                                        2 
                      X            X            X 
                         cj ∆Zj2 −               E cj (∆Zj2 − ∆t)ci (∆Zi2 − ∆t) .
                                                                               
                E                  cj ∆t  =                                                                        (6.13)
                                            
                          j                 j                             ij


     Now, note the following


                                                                     42
   • The increments
                   of Brownian
                               motion
                                                           Cov [∆Zi ∆Zj ] = 0, i 6= j, which means
                                       are uncorrelated, i.e.
     that Cov ∆Zi2 ∆Zj2 = 0, or E (∆Zj2 − ∆t)(∆Zi2 − ∆t) = 0, i 6= j.
   • ci = c(ti , X(Zi )), and ∆Zi are independent.
It then follows that for i < j

                  E cj (∆Zj2 − ∆t)ci (∆Zi2 − ∆t) = E[ci cj (∆Zi2 − ∆t)]E[(∆Zj2 − ∆t)]
                                               

                                                  = 0 .                                                      (6.14)

Similarly, if i > j

                      E cj (∆Zj2 − ∆t)ci (∆Zi2 − ∆t) = E[ci cj (∆Zj2 − ∆t)]E[(∆Zi2 − ∆t)]
                                                   

                                                      = 0 .                                                  (6.15)

So that in all cases

                            E cj (∆Zj2 − ∆t)ci (∆Zi2 − ∆t) = δij E c2i (∆Zi2 − ∆t)2 .
                                                                                
                                                                                                             (6.16)

It also follows from the above properties that

                                     E[c2j (∆Zj2 − ∆t)2 ]   = E[c2j ] E[(∆Zj2 − ∆t)2 ]                       (6.17)

since cj and (∆Zj2 − ∆t) are independent.
    Using equations (6.16-6.17), then equation (6.13) becomes
                  X                                        X
                      E cj (∆Zj2 − ∆t) ci (∆Zi2 − ∆t) =       E[c2i ] E (∆Zi2 − ∆t)2 .
                                                                                  
                                                                                                             (6.18)
                       ij                                                    i

Now,
               X                               X
                      E[c2i ] E (∆Zi2 − ∆t)2 =   E[c2i ] E ∆Zi4 − 2∆tE ∆Zi2 + (∆t)2 .
                                                                             
                                                                                                             (6.19)
                 i                                      i

Recall that (∆Z)2 is N (0, ∆t) ( normally distributed with mean zero and variance ∆t) so that

                                         E (∆Zi )2 = ∆t
                                                   

                                         E (∆Zi )4 = 3(∆t)2
                                                   
                                                                                                             (6.20)

so that equation (6.19) becomes

                                     E ∆Zi4 − 2∆tE ∆Zi2 + (∆t)2                              2(∆t)2
                                                    
                                                                                     =                       (6.21)

and
                                X                                            X
                                     E[c2i ] E (∆Zi2 − ∆t)2 =                        E[c2i ](∆t)2
                                                          
                                                                         2
                                 i                                               i
                                                                                                         !
                                                                                     X
                                                                     =   2∆t                 E[c2i ]∆t
                                                                                         i
                                                                     = O(∆t)                                 (6.22)

so that we have
                                                            2 
                                           X           X
                                      E    cj ∆Zj2 −   cj ∆t  = O(∆t)                                    (6.23)
                                                                
                                                            j



                                                                43
or
                                        "
                                             X                Z t                  2 #
                                lim E             cj ∆Zj2 −         c(s, X(s))ds          =   0      (6.24)
                                ∆t→0                           0


so that in this sense we can write

                                                dZ 2   →      dt ; dt → 0 .                          (6.25)


7      Derivative Contracts on non-traded Assets and Real Options
The hedging arguments used in previous sections use the underlying asset to construct a hedging portfolio.
What if the underlying asset cannot be bought and sold, or is non-storable? If the underlying variable is
an interest rate, we can’t store this. Or if the underlying asset is bandwidth, we can’t store this either.
However, we can get around this using the following approach.

7.1       Derivative Contracts
Let the underlying variable follow

                                             dS    = a(S, t)dt + b(S, t)dZ,                           (7.1)

and let F = F (S, t), so that from Ito’s Lemma

                                                 b2
                                                         
                                  dF =      aFS + FSS + Ft dt + bFS dZ,                               (7.2)
                                                 2

or in shorter form

                                           dF     = µdt + σ ∗ dZ
                                                                      b2
                                                       µ = aFS +         FSS + Ft
                                                                      2
                                                       σ ∗ = bFS .                                    (7.3)

   Now, instead of hedging with the underlying asset, we will hedge one contract with another. Suppose we
have two contracts F1 , F2 (they could have different maturities for example). Then

                                     dF1     = µ1 dt + σ1∗ dZ
                                     dF2     = µ2 dt + σ2∗ dZ
                                                                     b2
                                                  µi = a(Fi )S +        (Fi )SS + (Fi )t
                                                                      2
                                                  σi∗ = b(Fi )S     ; i = 1, 2 .                      (7.4)

     Consider the portfolio Π

                                                  Π = n 1 F1 + n 2 F2                                 (7.5)

so that

                                dΠ     = n1 dF1 + n2 dF2
                                       = n1 (µ1 dt + σ1∗ dZ) + n2 (µ2 dt + σ2∗ dZ)
                                       =   (n1 µ1 + n2 µ2 ) dt + (n1 σ1∗ + n2 σ2∗ ) dZ .              (7.6)


                                                              44
Now, to eliminate risk, choose

                                            (n1 σ1∗ + n2 σ2∗ ) = 0                                        (7.7)

which means that Π is riskless, hence

                                                dΠ      = rΠ dt ,                                         (7.8)

so that, using equations (7.6-7.8), we obtain

                                     (n1 µ1 + n2 µ2 )      = r(n1 F1 + n2 F2 ).                           (7.9)

Putting together equations (7.7) and (7.9) gives

                                    σ1∗        σ2∗
                                                          
                                                      n1      0
                                                           =     .                                      (7.10)
                                 µ1 − rF1 µ2 − rF2    n2      0

    Now, equation (7.10) only has a nonzero solution if the two rows of equation (7.10) are linearly dependent.
In other words, there must be a λS = λS (S, t) (independent of the type of contract) such that

                                             µ1 − rF1        = λS σ1∗
                                             µ2 − rF2        = λS σ2∗ .                                 (7.11)

Dropping the subscripts, we obtain
                                                µ − rF
                                                                 = λS                                   (7.12)
                                                  σ∗
Substituting µ, σ ∗ from equations (7.3) into equation (7.12) gives

                                        b2
                                 Ft +      FSS + (a − λS b)FS − rF = 0 .                                (7.13)
                                        2
Equation (7.13) is the PDE satisfied by a derivative contract on any asset S. Note that it does not matter
if we cannot trade S.
    Suppose that F2 = S is a traded asset. Then we can hedge with S, and from equation (7.11) we have

                                              µ2 − rS        = λS σ2∗                                   (7.14)

and from equations (7.1) and (7.3) we have

                                                     σ2∗    = b
                                                     µ2     = a                                         (7.15)

and so, using equations (7.11) and (7.15) , we have that
                                                                 a − rS
                                                λS      =                                               (7.16)
                                                                    b
and equation (7.13) reduces to

                                            b2
                                     Ft +      FSS + rSFS − rF = 0 .                                    (7.17)
                                            2
   Suppose

                                                   µ = F µ0
                                                  σ∗ = F σ0                                             (7.18)


                                                            45
so that we can write

                                              dF      = F µ0 dt + F σ 0 dZ                                  (7.19)

then using equation (7.18) in equation (7.12) gives

                                                   µ0     = r + λS σ 0                                      (7.20)

which has the convenient interpretation that the expected return on holding (not hedging) the derivative
contract F is the risk-free rate plus extra compensation due to the riskiness of holding F . The extra return
is λS σ 0 , where λS is the market price of risk of S (which should be the same for all contracts depending on
S) and σ 0 is the volatility of F . Note that the volatility and drift of F are not the volatility and drift of the
underlying asset S.
    If we believe that the Capital Asset Pricing Model holds, then a simple minded idea is to estimate

                                                   λS = ρSM λM                                              (7.21)

where λM is the price of risk of the market portfolio, and ρSM is the correlation of returns between S and
the returns of the market portfolio.
   Another idea is the following. Suppose we can find some companies whose main source of business is
based on S. Let qi be the price of this companies stock at t = ti . The return of the stock over ti − ti−1 is
                                                               qi − qi−1
                                                 Ri       =              .
                                                                  qi−1

Let RiM be the return of the market portfolio (i.e. a broad index) over the same period. We compute β as
the best fit linear regression to

                                                   Ri     = α + βRiM

which means that
                                                              Cov(R, RM )
                                               β      =                   .                                 (7.22)
                                                               V ar(RM )

   Now, from CAPM we have that

                                                    = r + β E(RM ) − r
                                                                      
                                          E(R)                                                              (7.23)

where E(...) is the expectation operator. We would like to determine the unlevered β, denoted by β u , which
is the β for an investment made using equity only. In other words, if the firm we used to compute the β
above has significant debt, its riskiness with respect to S is amplified. The unlevered β can be computed by
                                                                E
                                           βu       =                    β                                  (7.24)
                                                          E + (1 − Tc )D

where

                                     D    =        long term debt
                                     E    =        Total market capitalization
                                     Tc   =        Corporate Tax rate .                                     (7.25)

So, now the expected return from a pure equity investment based on S is

                                   E(Ru ) = r+ β u E(RM ) − r .
                                                                
                                                                                                            (7.26)


                                                               46
If we assume that F in equation (7.19) is the company stock, then

                                           µ0      = E(Ru )
                                                   = r + β u E(RM ) − r
                                                                       
                                                                                                         (7.27)

But equation (7.20) says that

                                                   µ0        = r + λS σ 0 .                              (7.28)

Combining equations (7.27-7.27) gives

                                          λS σ 0     = β u E(RM ) − r .
                                                                    
                                                                                                         (7.29)

Recall from equations (7.3) and (7.18) that

                                                        σ∗     = F σ0
                                                        σ∗     = bFS ,

or
                                                                     bFS
                                                        σ0     =         .                               (7.30)
                                                                      F
Combining equations (7.29-7.30) gives
                                                                           
                                                             β u E(RM ) − r
                                           λS       =                bFS
                                                                                .                        (7.31)
                                                                      F

     In principle, we can now compute λS , since

     • The unleveraged β u is computed as described above. This can be done using market data for a specific
       firm, whose main business is based on S, and the firms balance sheet.

     • b(S, t)/S is the volatility rate of S (equation (7.1)).

     • [E(RM ) − r] can be determined from historical data. For example, the expected return of the market
       index above the risk free rate is about 6% for the past 50 years of Canadian data.

     • The risk free rate r is simply the current T-bill rate.

     • FS can be estimated by computing a linear regression of the stock price of a firm which invests in
       S, and S. Now, this may have to be unlevered, to reduce the effect of debt. If we are going to now
       value the real option for a specific firm, we will have to make some assumption about how the firm will
       finance a new investment. If it is going to use pure equity, then we are done. If it is a mixture of debt
       and equity, we should relever the value of FS . At this point, we need to talk to a Finance Professor to
       get this right.

7.2     A Forward Contract
A forward contract is a special type of derivative contract. The holder of a forward contract agrees to buy or
sell the underlying asset at some delivery price K in the future. K is determined so that the cost of entering
into the forward contract is zero at its inception.
    The payoff of a (long) forward contract expiring at t = T is then

                                          V (S, τ = 0) =              S(T ) − K .                        (7.32)


                                                                47
Note that there is no optionality in a forward contract.
   The value of a forward contract is a contingent claim. and its value is given by equation (7.13)

                                         b2
                                  Vt +      VSS + (a − λS b)VS − rV = 0 .                                 (7.33)
                                         2
    Now we can also use a simple no-arbitrage argument to express the value of a forward contract in terms
of the original delivery price K, (which is set at the inception of the contract) and the current forward price
f (S, τ ). Suppose we are long a forward contract with delivery price K. At some time t > 0, (τ < T ), the
forward price is no longer K. Suppose the forward price is f (S, τ ), then the payoff of a long forward contract,
entered into at (τ ) is

                                          Payoff    =   S(T ) − f (S(τ ), τ ) .

Suppose we are long the forward contract struck at t = 0 with delivery price K. At some time t > 0, we
hedge this contract by going short a forward with the current delivery price f (S, τ ) (which costs us nothing
to enter into). The payoff of this portfolio is

                                          S − K − (S − f ) = f − K                                        (7.34)

Since f, K are known with certainty at (S, τ ), then the value of this portfolio today is

                                                  (f − K)e−rτ .                                           (7.35)

But if we hold a forward contract today, we can always construct the above hedge at no cost. Therefore,

                                           V (S, τ )    =   (f − K)e−rτ .                                 (7.36)

  Substituting equation (7.36) into equation (7.33), and noting that K is a constant, gives us the following
PDE for the forward price (the delivery price which makes the forward contract worth zero at inception)

                                                 b2
                                          fτ =      fSS + (a − λS b)fS                                    (7.37)
                                                 2
with terminal condition

                                                 f (S, τ = 0) = S                                         (7.38)

which can be interpreted as the fact that the forward price must equal the spot price at t = T .
   Suppose we can estimate a, b in equation (7.37), and there are a set of forward prices available. We can
then estimate λS by solving equation (7.37) and adjusting λS until we obtain a good fit for the observed
forward prices.

7.2.1   Convenience Yield
We can also write equation (7.37) as

                                                b2
                                         ft +      fSS + (r − δ)SfS = 0                                   (7.39)
                                                2
where δ is defined as
                                                        a − λS b
                                                δ=r−             .                                        (7.40)
                                                           S
In this case, we can interpret δ as the convenience yield for holding the asset. For example, there is a
convenience to holding supplies of natural gas in reserve.


                                                            48
7.2.2    Volatility of Foward Prices
From equation (7.37) we have that the forward price for a contract expiring at time T , at current time t,
spot price S(t) is given by

                                                f (S, t)     = E Q [S(T )]                               (7.41)

where S follows the risk neutral process

                                          dS     =        (a − λS b) dt + b dZ .                         (7.42)

In other words. the forward price is the risk neutral expected spot price at expiry.
   Now, using Ito’s Lemma and assuming the risk neutral spot process (7.42) gives
                                                b2                   
                               df   =    ft +      fSS + (a − λS b)fS dt + fS b dZ .                     (7.43)
                                                2
But since f satisfies equation (7.37), equation (7.43) becomes

                                                     df     = fS b dZ
                                                            = σ̂f dZ ,                                   (7.44)

where the effective volatility of the foward price is
                                                             fS b
                                                     σ̂ =         .                                      (7.45)
                                                              f
Note that from equation (7.44), the forward price has zero drift.


8       Discrete Hedging
In practice, we cannot hedge at infinitesimal time intervals. In fact, we would like to hedge as infrequently as
possible, since in real life, there are transaction costs (something which is ignored in the basic Black-Scholes
equation, but which can be taken into account and results in a nonlinear PDE).

8.1     Delta Hedging
Recall that the basic derivation of the Black-Scholes equation used a hedging portfolio where we hold VS
shares. In finance, VS is called the option delta, hence this strategy is called delta hedging.
   As an example, consider the hedging portfolio P (t) which is composed of
    • A short position in an option −V (t).
    • Long α(t)h S(t) shares
    • An amount in a risk-free bank account B(t).
Initially, we have

                                    P (0) = 0    = −V (0) + α(0)h S(0) + B(0)
                                                          α = VS
                                                          B(0) = V (0) − α(0)h S(0)

The hedge is rebalanced at discrete times ti . Defining

                                                  αih      = VS (Si , ti )
                                                   Vi      = V (Si , ti )


                                                               49
then, we have to update the hedge by purchasing αi − αi−1 shares at t = ti , so that updating our share
position requires
                                              S(ti )(αih − αi−1
                                                            h
                                                                )
in cash, which we borrow from the bank if (αih − αi−1
                                                  h
                                                      ) > 0. If (αih − αi−1
                                                                        h
                                                                            ) < 0, then we sell some shares and
deposit the proceeds in the bank account. If ∆t = ti − ti−1 , then the bank account balance is updated by
                                     Bi = er∆t Bi−1 − Si (αih − αi−1
                                                                 h
                                                                     )
At the instant after the rebalancing time ti , the value of the portfolio is
                                  P (ti ) = −V (ti ) + α(ti )h S(ti ) + B(ti )
Since we are hedging at discrete time intervals, the hedge is no longer risk free (it is risk free only in the
limit as the hedging interval goes to zero). We can determine the distribution of profit and loss ( P& L) by
carrying out a Monte Carlo simulation. Suppose we have precomputed the values of VS for all the likely (S, t)
values. Then, we simulate a series of random paths. For each random path, we determine the discounted
relative hedging error
                                                                 ∗
                                                          e−rT P (T ∗ )
                                            error    =                                                      (8.1)
                                                          V (S0 , t = 0)
After computing many sample paths, we can plot a histogram of relative hedging error, i.e. fraction of Monte
Carlo trials giving a hedging error between E and E +∆E. We can compute the variance of this distribution,
and also the value at risk (VAR). VAR is the worst case loss with a given probability. For example, a typical
VAR number reported is the maximum loss that would occur 95% of the time. In other words, find the value
of E along the x-axis such that the area under the histogram plot to the right of this point is .95× the total
area.
    As an example, consider the case of an American put option, T = .25, σ = .3, r = .06, K = S0 = 100. At
t = 0, S0 = 100. Since there are discrete hedging errors, the results in this case will depend on the stock drift
rate, which we set at µ = .08. The initial value of the American put, obtained by solving the Black-Scholes
linear complementarity problem, is $5.34. Figure 8.1 shows the results for no hedging, and hedging once
a month. The x-axis in these plots shows the relative P & L of this portfolio (i.e. P & L divided by the
Black-Scholes price), and the y-axis shows the relative frequency.
                                                                  Actual P& L
                                   Relative P& L      =                                                     (8.2)
                                                               Black-Scholes price
    Note that the no-hedging strategy actually has a high probability of ending up with a profit (from the
option writer’s point of view) since the drift rate of the stock is positive. In this case, the hedger does
nothing, but simply pockets the option premium. Note the sudden jump in the relative frequency at relative
P &L = 1. This is because the maximum the option writer stands to gain is the option premium, which
we assume is the Black-Scholes value. The writer makes this premium for any path which ends up S > K,
which is many paths, hence the sudden jump in probability. However, there is significant probability of a
loss as well. Figure 8.1 also shows the relative frequency of the P &L of hedging once a month (only three
times during the life of the option).
    In fact, there is a history of Ponzi-like hedge funds which simply write put options with essentially no
hedging. In this case, these funds will perform very well for several years, since markets tend to drift up on
average. However, then a sudden market drop occurs, and they will blow up. Blowing up is a technical term
for losing all your capital and being forced to get a real job. However, usually the owners of these hedge
funds walk away with large bonuses, and the shareholders take all the losses.
    Figure 8.2 shows the results for rebalancing the hedge once a week, and daily. We can see clearly here
that the mean is zero, and variance is getting smaller as the hedging interval is√reduced. In fact, one can
show that the standard deviation of the hedge error should be proportional to ∆t where ∆t is the hedge
rebalance frequency.


                                                          50
                         4                                                                                           4


                        3.5                                                                                         3.5


                         3                                                                                           3


                        2.5                                                                                         2.5
   Relative frequency




                                                                                               Relative frequency
                         2                                                                                           2


                        1.5                                                                                         1.5


                         1                                                                                           1


                        0.5                                                                                         0.5


                         0                                                                                           0
                              -3   -2.5   -2   -1.5           -1         -0.5   0   0.5   1                               -3   -2.5   -2   -1.5           -1         -0.5   0   0.5   1
                                                      Relative hedge error                                                                        Relative hedge error




Figure 8.1: Relative frequency (y-axis) versus relative P&L of delta hedging strategies. Left: no hedging,
right: rebalance hedge once a month. American put, T = .25, σ = .3, r = .06, µ = .08, K = S0 = 100. The
relative P&L is computed by dividing the actual P&L by the Black-Scholes price.




                         4                                                                                           4


                        3.5                                                                                         3.5


                         3                                                                                           3


                        2.5                                                                                         2.5
   Relative frequency




                                                                                               Relative frequency




                         2                                                                                           2


                        1.5                                                                                         1.5


                         1                                                                                           1


                        0.5                                                                                         0.5


                         0                                                                                           0
                              -3   -2.5   -2   -1.5           -1         -0.5   0   0.5   1                               -3   -2.5   -2   -1.5           -1         -0.5   0   0.5   1
                                                      Relative hedge error                                                                        Relative hedge error




Figure 8.2: Relative frequency (y-axis) versus relative P&L of delta hedging strategies. Left: rebalance hedge
once a week, right: rebalance hedge daily. American put, T = .25, σ = .3, r = .06, µ = .08, K = S0 = 100.
The relative P&L is computed by dividing the actual P&L by the Black-Scholes price.




                                                                                              51
8.2    Gamma Hedging
In an attempt to account for some the errors in delta hedging at finite hedging intervals, we can try to use
second derivative information. The second derivative of an option value VSS is called the option gamma,
hence this strategy is termed delta-gamma hedging.
   A gamma hedge consists of
   • A short option position −V (t).

   • Long αh S(t) shares

   • Long β another derivative security I.

   • An amount in a risk-free bank account B(t).
   Now, recall that we consider αh , β to be constant over the hedging interval (no peeking into the future),
so we can regard these as constants (for the duration of the hedging interval).
   The hedge portfolio P (t) is then

                                     P (t) = −V + αh S + βI + B(t)

Assuming that we buy and hold αh shares and β of the secondary instrument at the beginning of each
hedging interval, then we require that
                                          ∂P         ∂V           ∂I
                                                  = −    + αh + β    =0
                                          ∂S         ∂S           ∂S
                                         ∂2P         ∂2V      ∂2I
                                                  = − 2 +β 2 =0                                         (8.3)
                                         ∂S 2        ∂S      ∂S
Note that

   • If β = 0, then we get back the usual delta hedge.

   • In order for the gamma hedge to work, we need an instrument which has some gamma (the asset S has
     second derivative zero). Hence, traders often speak of being long (positive) or short (negative) gamma,
     and try to buy/sell things to get gamma neutral.

   So, at t = 0 we have

                                 P (0)     =     0 ⇒ B(0) = V (0) − α0h S0 − β0 I0

The amounts αih , βi are determined by requiring that equation (8.3) hold

                                          −(VS )i + αih + βi (IS )i     =   0
                                                −(VSS )i + βi (ISS )i   =   0                           (8.4)

The bank account balance is then updated at each hedging time ti by

                            Bi    = er∆t Bi−1 − Si (αih − αi−1
                                                           h
                                                               ) − Ii (βi − βi−1 )

    We will consider the same example as we used in the delta hedge example. For an additional instrument,
we will use a European put option written on the same underlying with the same strike price and a maturity
of T=.5 years.
    Figure 8.3 shows the results of gamma hedging, along with a comparison on delta hedging. In principle,
gamma hedging produces a smaller variance with less frequent hedging. However, we are exposed to more
model error in this case, since we need to be able to compute the second derivative of the theoretical price.




                                                           52
                        40                                                                                          40


                        35                                                                                          35


                        30                                                                                          30


                        25                                                                                          25
   Relative frequency




                                                                                               Relative frequency
                        20                                                                                          20


                        15                                                                                          15


                        10                                                                                          10


                         5                                                                                           5


                         0                                                                                           0
                             -3   -2.5   -2   -1.5           -1         -0.5   0    0.5   1                              -3   -2.5   -2   -1.5           -1         -0.5   0   0.5   1
                                                     Relative hedge error                                                                        Relative hedge error




Figure 8.3: Relative frequency (y-axis) versus relative P&L of gamma hedging strategies. Left: rebalance
hedge once a week, right: rebalance hedge daily. Dotted lines show the delta hedge for comparison. American
put, T = .25, σ = .3, r = .06, µ = .08, K = 100, S0 = 100. Secondary instrument: European put option,
same strike, T = .5 years. The relative P&L is computed by dividing the actual P&L by the Black-Scholes
price.


8.3                           Vega Hedging
The most important parameter in the option pricing is the volatility. What if we are not sure about the
value of the volatility? It is possible to assume that the volatility itself is stochastic, i.e.
                                                          √
                                         dS = µSdt + vSdZ1
                                                                  √
                                          dv = κ(θ − v)dt + σv vdZ2                                         (8.5)
                                                            √
where µ is the expected growth rate of the stock price, v is its instantaneous volatility, κ is a parameter
controlling how fast v reverts to its mean level of θ, σv is the “volatility of volatility” parameter, and Z1 , Z2
are Wiener processes with correlation parameter ρ.
   If we use the model in equation (8.5), the this will result in a two factor PDE to solve for the option price
and the hedging parameters. Since there are two sources of risk (dZ1 , dZ2 ), we will need to hedge with the
underlying asset and another option (Heston, A closed form solution for options with stochastic volatility
with applications to bond and currency options, Rev. Fin. Studies 6 (1993) 327-343).
   Another possibility is to assume that the volatility is uncertain, and to assume that

                                                                                   σmin ≤ σ ≤ σmax ,

and to hedge based on a worst case (from the hedger’s point of view). This results in an uncertain volatil-
ity model (Avellaneda, Levy, Paris, Pricing and Hedging Derivative Securities in Markets with Uncertain
Volatilities, Appl. Math. Fin. 2 (1995) 77-88). This is great if you can get someone to buy this option at
this price, because the hedger is always guaranteed to end up with a non-negative balance in the hedging
portfolio. But you may not be able to sell at this price, since the option price is expensive (after all, the
price you get has to cover the worst case scenario).
    An alternative, much simpler, approach (and therefore popular in industry), is to construct a vega hedge.
We assume that we know the volatility, and price the option in the usual way. Then, as with a gamma
hedge, we construct a portfolio
    • A short option position −V (t).

   • Long αh S(t) shares

   • Long β another derivative security I.


                                                                                              53
    • An amount in a risk-free bank account B(t).
    The hedge portfolio P (t) is then

                                       P (t) = −V + αh S + βI + B(t)

Assuming that we buy and hold αh shares and β of the secondary instrument at the beginning of each
hedging interval, then we require that
                                         ∂P        ∂V          ∂I
                                               = −    + αh + β    =0
                                         ∂S        ∂S          ∂S
                                         ∂P        ∂V    ∂I
                                               = −    +β     =0                                            (8.6)
                                         ∂σ        ∂σ    ∂σ
Note that if we assume that σ is constant when pricing the option, yet do not assume σ is constant when
we hedge, this is somewhat inconsistent. Nevertheless, we can determine the derivatives in equation (8.6)
numerically (solve the pricing equation for several different values of σ, and then finite difference the solu-
tions).
    In practice, we would sell the option priced using our best estimate of σ (today). This is usually based on
looking at the prices of traded options, and then backing out the volatility which gives back today’s traded
option price (this is the implied volatility). Then as time goes on, the implied volatility will likely change.
We use the current implied volatility to determine the current hedge parameters in equation (8.6). Since
this implied volatility has likely changed since we last rebalanced the hedge, there is some error in the hedge.
However, taking into account the change in the hedge portfolio through equations (8.6) should make up for
this error. This procedure is called delta-vega hedging.
    In fact, even if the underlying process is a stochastic volatility, the vega hedge computed using a constant
volatility model works surprisingly well (Hull and White, The pricing of options on assets with stochastic
volatilities, J. of Finance, 42 (1987) 281-300).


9     Jump Diffusion
Recall that if

                                              dS   = µSdt + σS dZ                                          (9.1)

then from Ito’s Lemma we have
                                                                σ2
                                        d[log S]   =   [µ −        ] dt + σ dZ.                            (9.2)
                                                                2
Now, suppose that we observe asset prices at discrete times ti , i.e. S(ti ) = Si , with ∆t = ti+1 − ti . Then
from equation (9.2) we have

                                                             Si+1
                                log Si+1 − log Si      =    log(   )
                                                              Si
                                                              σ2          √
                                                       ≃ [µ −    ] ∆t + σφ ∆t                              (9.3)
                                                              2
                                                                                        √
where φ is N (0, 1). Now, if ∆t is sufficiently small, then ∆t is much smaller than         ∆t, so that equation
(9.3) can be approximated by

                                       Si+1 − Si + Si                    Si+1 − Si
                                log(                  )    = log(1 +               )
                                             Si                             Si
                                                                √
                                                           ≃ σφ ∆t.                                        (9.4)


                                                           54
Define the return Ri in the period ti+1 − ti as

                                                                          Si+1 − Si
                                                           Ri      =                                         (9.5)
                                                                             Si

so that equation (9.4) becomes
                                                                   √
                                             log(1 + Ri ) ≃ Ri = σφ ∆t.

   Consequently, a plot of the discretely observed returns of S should be normally distributed, if the as-
sumption (9.1) is true. In Figure 9.1 we can see a histogram of monthly returns from the S&P 500 for the
period 1982 − 2002. The histogram has been scaled to zero mean and unit standard deviation. A standard
normal distribution is also shown. Note that for real data, there is a higher peak, and fatter tails than
the normal distribution. This means that there is higher probability of zero return, or a large gain or loss
compared to a normal distribution.



                             20




                             15




                             10




                              5




                              0
                                  −1.4    −1.2       −1    −0.8   −0.6   −0.4   −0.2   0   0.2   0.4   0.6




Figure 9.1: Probability density functions for the S&P 500 monthly returns 1982 − 2002, scaled to zero mean
and unit standard deviation and the standardized Normal distribution.

    As ∆t → 0, Geometric Brownian Motion (equation (9.1)) assumes    √ that the probability of a large return
also tends to zero. The amplitude of the return is proportional to ∆t, so that the tails of the distribution
become unimportant.
    But, in real life, we can sometimes see very large returns (positive or negative) in small time increments.
It therefore appears that Geometric Brownian Motion (GBM) is missing something important.

9.1    The Poisson Process
Consider a process where most of the time nothing happens (contrast this with Brownian motion, where
some changes occur at any time scale we look at), but on rare occasions, a jump occurs. The jump size does
not depend on the time interval, but the probability of the jump occurring does depend on the interval.
   More formally, consider the process dq where, in the interval [t, t + dt],

                                     dq          =        1 ;     with probability λdt
                                                 =        0 ;     with probability 1 − λdt.                  (9.6)

Note, once again, that size of the Poisson outcome does not depend on dt. Also, the probability of a jump
occurring in [t, t + dt] goes to zero as dt → 0, in contrast to Brownian motion, where some movement always


                                                                         55
takes place (the probability of movement is constant as dt → 0), but the size of the movement tends to zero
as dt → 0. For future reference, note that

                                        E[dq]     = λ dt · 1 + (1 − λ dt) · 0
                                                  = λ dt                                                (9.7)

and

                          V ar(dq)     = E[(dq − E[dq])2 ]
                                       = E[(dq − λ dt)2 ]
                                       = (1 − λ dt)2 · λ dt + (0 − λ dt)2 · (1 − λ dt)
                                       = λ dt + O((dt)2 ) .                                             (9.8)

   Now, suppose we assume that, along with the usual GBM, occasionally the asset jumps, i.e. S → JS,
where J is the size of a (proportional) jump. We will restrict J to be non-negative.
   Suppose a jump occurs in [t, t + dt], with probability λdt. Let’s write this jump process as an SDE, i.e.

                                            [dS]jump        = (J − 1)S dq

since, if a jump occurs

                            Saf ter jump     = Sbef ore jump + [dS]jump
                                             = Sbef ore jump + (J − 1)Sbef ore jump
                                             = JSbef ore jump                                           (9.9)

which is what we want to model. So, if we have a combination of GBM and a rare jump event, then

                                     dS    = µS dt + σS dZ + (J − 1)S dq                               (9.10)

Assume that the jump size has some known probability density g(J), i.e. given that a jump occurs, then the
probability of a jump in [J, J + dJ] is g(J) dJ, and
                                    Z +∞             Z ∞
                                           g(J) dJ =     g(J) dJ = 1                                (9.11)
                                       −∞                         0

since we assume that g(J) = 0 if J < 0. For future reference, if f = f (J), then the expected value of f is
                                             Z ∞
                                     E[f ] =      f (J)g(J) dJ .                                       (9.12)
                                                      0

   The process (9.10) is basically geometric Brownian motion (a continuous process) with rare discontinuous
jumps. Some example realizations of jump diffusion paths are shown in Figure 9.2.
   Figure 9.3 shows the price followed by a listed drug company. Note the extreme price changes over very
small periods of time.

9.2    The Jump Diffusion Pricing Equation
Now, form the usual hedging portfolio

                                                  P       = V − αS .                                   (9.13)

Now, consider

                                     [dP ]total   =       [dP ]Brownian + [dP ]jump                    (9.14)


                                                             56
                                          180


                                          160


                                          140
                            Asset Price
                                          120


                                          100


                                           80


                                           60


                                           40
                                             0   0.05   0.1        0.15   0.2   0.25
                                                         Time (years)


         Figure 9.2: Some realizations of a jump diffusion process which follows equation (9.10).




Figure 9.3: Actual price of a drug company stock. Compare with simulation of a jump diffusion in Figure
9.2.




                                                              57
where, from Ito’s Lemma

                                                       σ2 S 2
                       [dP ]Brownian      =    [Vt +          VSS ]dt + [VS − αS](µS dt + σS dZ)           (9.15)
                                                         2
and, noting that the jump is of finite size,

                              [dP ]jump    =    [V (JS, t) − V (S, t)] dq − α(J − 1)S dq .                 (9.16)

If we hedge the Brownian motion risk, by setting α = VS , then equations (9.14-9.16) give us

                                        σ2 S 2
                   dP     =     [Vt +          VSS ]dt + [V (JS, t) − V (S, t)]dq − VS (J − 1)S dq .       (9.17)
                                          2
So, we still have a random component (dq) which we have not hedged away. Let’s take the expected value
of this change in the portfolio, e.g.

                                      σ2 S 2
              E(dP )    =     [Vt +          VSS ]dt + E[V (JS, t) − V (S, t)]E[dq] − VS SE[J − 1]E[dq]    (9.18)
                                        2
where we have assumed that probability of the jump and the probability of the size of the jump are inde-
pendent. Defining E(J − 1) = κ, then we have that equation (9.18) becomes

                                          σ2 S 2
                  E(dP )      =   [Vt +          VSS ]dt + E[V (JS, t) − V (S, t)]λ dt − VS Sκλ dt .       (9.19)
                                            2
   Now, we make a rather interesting assumption. Assume that an investor holds a diversified portfolio of
these hedging portfolios, for many different stocks. If we make the rather dubious assumption that these
jumps for different stocks are uncorrelated, then the variance of this portfolio of portfolios is small, hence
there is little risk in this portfolio. Hence, the expected return should be

                                                   E[dP ]    = rP dt .                                     (9.20)

Now, equating equations (9.19 and (9.20) gives

                             σ2 S 2
                      Vt +          VSS + VS [rS − Sκλ] − (r + λ)V + E[V (JS, t)]λ = 0 .                   (9.21)
                               2
Using equation (9.12) in equation (9.21) gives
                                                                      Z ∞
                      σ2 S 2
               Vt +          VSS + VS [rS − Sκλ] − (r + λ)V + λ             g(J)V (JS, t) dJ = 0 .         (9.22)
                        2                                              0

Equation (9.22) is a Partial Integral Differential Equation (PIDE).
   A common assumption is to assume that g(J) is log normal,
                                                                2
                                                                   
                                               exp − (log(J)−µ̂)
                                                          2γ 2
                                       g(J) =        √               .                                     (9.23)
                                                       2πγJ
where, some algebra shows that

                                          E(J − 1) = κ = exp(µ̂ + γ 2 /2) − 1 .                            (9.24)

Now, what about our dubious assumption that jump risk was diversifiable? In practice, we can regard
σ, µ̂, γ, λ as parameters, and fit them to observed option prices. If we do this, (see L. Andersen and J.
Andreasen, Jump-Diffusion processes: Volatility smile fitting and numerical methods, Review of Derivatives
Research (2002), vol 4, pages 231-262), then we find that σ is close to historical volatility, but that the fitted


                                                             58
values of λ, µ̂ are at odds with the historical values. The fitted values seem to indicate that investors are
pricing in larger more frequent jumps than has been historically observed. In other words, actual prices seem
to indicate that investors do require some compensation for jump risk, which makes sense. In other words,
these parameters contain a market price of risk.
    Consequently, our assumption about jump risk being diversifiable is not really a problem if we fit the
jump parameters from market (as opposed to historical) data, since the market-fit parameters will contain
some effect due to risk preferences of investors.
    One can be more rigorous about this if you assume some utility function for investors. See (Alan Lewis,
Fear of jumps, Wilmott Magazine, December, 2002, pages 60-67) or (V. Naik, M. Lee, General equilibrium
pricing of options on the market portfolio with discontinuous returns, The Review of Financial Studies, vol
3 (1990) pages 493-521.)

9.3       An Alternate Derivation of the Pricing Equation for Jump Diffusion
We will give a pure hedging argument in this section, in order to derive the PIDE for jump diffusion. Initially,
we suppose that there is only one possible jump size J, i.e. after a jump, S → JS, where J is a known
constant. Suppose

                                dS     = a(S, t)dt + b(S, t)dZ + (J − 1)S dq,                            (9.25)

where dq is the Poisson process. Consider a contract on S, F (S, t), then

                                    b2
                                               
                    dF =      aFS + FSS + Ft dt + bFS dZ + [F (JS, t) − F (S, t)] dq,                    (9.26)
                                     2
or, in more compact notation

                                      dF    = µ dt + σ ∗ dZ + ∆F dq
                                                          b2
                                              µ = aFS + FSS + Ft
                                                          2
                                              σ ∗ = bFS
                                                 ∆F = [F (JS, t) − F (S, t)] .                           (9.27)

Now, instead of hedging with the underlying asset, we will hedge one contract with another. Suppose we
have three contracts F1 , F2 , F3 (they could have different maturities for example).
   Consider the portfolio Π

                                           Π = n 1 F1 + n 2 F2 + n 3 F3                                  (9.28)

so that

                                 dΠ    = n1 dF1 + n2 dF2 + n3 dF3
                                       = n1 (µ1 dt + σ1∗ dZ + ∆F1 dq)
                                             +n2 (µ2 dt + σ2∗ dZ + ∆F2 dq)
                                             +n3 (µ3 dt + σ3∗ dZ + ∆F3 dq)
                                       =     (n1 µ1 + n2 µ2 + n3 µ3 ) dt
                                             +(n1 σ1∗ + n2 σ2∗ + n3 σ3∗ ) dZ
                                             +(n1 ∆F1 + n2 ∆F2 + n3 ∆F3 ) dq .                           (9.29)

Eliminate the random terms by setting

                                      (n1 ∆F1 + n2 ∆F2 + n3 ∆F3 )          =   0
                                             (n1 σ1∗ + n2 σ2∗ + n3 σ3∗ )   =   0.                        (9.30)


                                                          59
This means that the portfolio is riskless, hence

                                                     dΠ   = rΠ dt ,                                        (9.31)

hence (using equations (9.29-9.31))

                               (n1 µ1 + n2 µ2 + n3 µ3 )    =       (n1 F1 + n2 F2 + n3 F3 )r .             (9.32)

Putting together equations (9.30) and (9.32), we obtain

                              σ1∗        σ2∗        σ3∗
                                                                
                                                            n1       0
                         ∆F1          ∆F2         ∆F3    n2  =  0  .                                 (9.33)
                          µ1 − rF1 µ2 − rF2 µ3 − rF3        n3       0

Equation (9.33) has a nonzero solution only if the rows are linearly dependent. There must be λB (S, t), λJ (S, t)
such that

                                         (µ1 − rF1 )      = λB σ1∗ − λJ ∆F1
                                         (µ2 − rF2 )      = λB σ2∗ − λJ ∆F2
                                         (µ3 − rF3 )      = λB σ3∗ − λJ ∆F3 .                              (9.34)

(We will show later on that λJ ≥ 0 to avoid arbitrage). Dropping subscripts, we have

                                           (µ − rF )      = λB σ ∗ − λJ ∆F                                 (9.35)

and substituting the definitions of µ, σ ∗ , ∆F , from equations (9.27), we obtain

                             b2
                     Ft +       FSS + (a − λB b)FS − rF + λJ [F (JS, t) − F (S, t)] = 0 .                  (9.36)
                             2
Note that λJ will not be the real world intensity of the Poisson process, but J will be the real world jump
size.
    In the event that, say, F3 = S is a traded asset, we note that in this case

                                                  σ3∗     = b
                                                  µ3      = a
                                                ∆F3       =    (J − 1)S .                                  (9.37)

From equation (9.34) we have that

                                         (µ3 − rF3 )      = λB σ3∗ − λJ ∆F3 ,                              (9.38)

or, using equation (9.37),

                                          a − λB b      = rS − λJ (J − 1)S .                               (9.39)

Substituting equation (9.39) into equation (9.36) gives

                        b2
                 Ft +      FSS + [r − λJ (J − 1)]SFS − rF + λJ [F (JS, t) − F (S, t)] = 0 .                (9.40)
                        2
Note that equation (9.36) is valid if the underlying asset cannot be used to hedge, while equation (9.40) is
valid only if the underlying asset can be used as part of the hedging portfolio.
    Let τ = T − t, and set a = 0, b = 0, r = 0 in equation (9.36), giving

                                          Fτ   = λJ [F (JS, t) − F (S, t)] .                               (9.41)


                                                              60
   Now, suppose that

                                        F (S, τ = 0) =           0 ;      if S ≥ K
                                                          =      1 ;      if S < K .                   (9.42)

Now, consider the asset value S ∗ > K, and let J = K/(2 ∗ S ∗ ). Imagine solving equation (9.41) to an
infinitesimal time τ =   1. We will obtain the following value for F ,

                                                F (S ∗ , ) ≃ λJ .                                    (9.43)

Since the payoff is nonnegative, we must have λJ ≥ 0 to avoid arbitrage.
   Now, suppose that there are a finite number of jump states, i.e. after a jump, the asset may jump to to
any state Ji S

                                           S    → Ji S ; i = 1, ..., n .                               (9.44)

Repeating the above arguments, now using n + 2 hedging instruments in the hedging portfolio
                                                         i=n+2
                                                          X
                                                Π=               n i Fi                                (9.45)
                                                          i=1

so that the diffusion and jumps are hedged perfectly, we obtain the following PDE
                                                       i=n
                          b2                           X
                   Ft +      FSS + (a − λB b)FS − rF +     λiJ [F (Ji S, t) − F (S, t)] = 0 .          (9.46)
                          2                            i=1

   If we can use the underlying to hedge, then we get the analogue of equation (9.40)
                                 i=n                         i=n
                  b2             X                           X
           Ft +      FSS + (rS −     λiJ S(Ji − 1))FS − rF +     λiJ [F (Ji S, t) − F (S, t)] = 0 .    (9.47)
                  2              i=1                         i=1

   Now, let
                                                                     λiJ
                                                p(Ji )    =        Pi=n  i
                                                                    i=1 λJ
                                                                 i=n
                                                                 X
                                                   λ∗     =          λiJ                               (9.48)
                                                                 i=1

then we can write equation (9.46) as
                                                                i=n
                      b2                              X
               Ft +      FSS + (a − λB b)FS − rF + λ∗     p(Ji )[F (Ji S, t) − F (S, t)] = 0 .         (9.49)
                      2                               i=1

Note that since λiJ ≥ 0, p(Ji ) ≥ 0, and λ∗ ≥ 0.
   Taking the limit as the number of jump states tends to infinity, then p(J) tends to a continuous distri-
bution, so that equation (9.49) becomes
                                                  Z ∞
                    b2
              Ft + FSS + (a − λB b)FS − rF + λ∗       p(J)[F (JS, t) − F (S, t)] dJ = 0 .           (9.50)
                    2                              0

It is convenient to rewrite equation (9.50) in a slightly different form. Suppose we redefine λB as follows
                                                                      E[J − 1]S
                                           λB    = λ0B + λ∗                                            (9.51)
                                                                          b

                                                              61
where
                                                    Z ∞
                                       E[J − 1] =         p(J)(J − 1) dJ .                                   (9.52)
                                                    0

Substituting equation (9.51) into equation (9.50) gives
                                                                 Z ∞
               b2
        Ft +      FSS + (a − λ0B b − λ∗ E[J − 1]S)FS − rF + λ∗         p(J)[F (JS, t) − F (S, t)] dJ = 0 .   (9.53)
               2                                                   0

Note that in the case that VSS = 0 (which would normally be the case for S → ∞), then equation (9.53)
reduces to
                                          b2
                                   Ft +      FSS + (a − λB b)FS − rF = 0 ,                                   (9.54)
                                          2
so that the term λ∗ E[J − 1]S in the drift term cancels the integral term, leaving the equation independent
of λ∗ . This is very convenient for applying numerical boundary conditions. The PIDE (9.53) can also be
written as
                                               Z ∞
              b2             0               ∗
        Ft + FSS + (a − λB b)FS − rF + λ           p[J][F (JS, t) − F (S, t) − (J − 1)SFS ] dJ = 0    (9.55)
              2                                 0

which is valid for infinite activity processes.
   In the case where we can hedge with the underlying asset S, we obtain
                                                      Z ∞
                b2               ∗                  ∗
          Ft + FSS + (r − λ E[J − 1])SFS − rF + λ          p(J)[F (JS, t) − F (S, t)] dJ = 0 .               (9.56)
                2                                      0

   Note that λ∗ and p(J) are not the real arrival rate and real jump size distributions, since they are based
on hedging arguments which eliminate the risk. Consequently, λ∗ , p(J) must be obtained by calibration to
market data.


10       Regime Switching
Of course, volatility is not constant in the real world. It is possible to combine jumps in the asset price with
jumps in volatility and stochastic volatility. This leads to a two factor pricing PIDE for the option price.
    A simpler approach is to assume that the volatility jumps between a number of regimes or volatility
states. Let the value of a contingent claim be given by F (σ, S, t), where we have allowed the volatility σ to
vary. Suppose

                                       dS   = a dt + b dZ + (JS − 1)S dq
                                       dσ   =   (Jσ − 1)σ dq ,                                               (10.1)

where dq is a Poisson process and dZ is the increment of a Weiner process. Note that the same dq drives
the jump in S and the jump in σ. Following the same steps as in deriving equation (9.27) we obtain

                                  dF    = µ dt + σ ∗ dZ + ∆F dq
                                                      b2
                                          µ = aFS + FSS + Ft
                                                      2
                                          σ ∗ = bFS
                                            ∆F = [F (Jσ σ, JS S, t) − F (σ, S, t)] .                         (10.2)

We follow the same steps as in the derivation of the jump diffusion PIDE in equations (9.29-9.36), i.e. we
construct a hedge portfolio with three contracts F1 , F2 , F3 , and we do not assume that we can trade in the


                                                           62
underlying. Eliminating the random terms gives rise to the analogue of equation (9.33) and hence a solution
exists only if one of the equations is a linear combination of the other equations, which results in

                                            (µ − rF )       = λB σ ∗ − λJ ∆F                                (10.3)

and substituting the definitions of σ ∗ , µ from equation (10.2) gives
                        b2
                 Ft +      FSS + (a − λB b)FS − rF + λJ [F (Jσ σ, JS S, t) − F (σ, S, t)] = 0 .             (10.4)
                        2
   In the event that, say, F3 = S is a traded asset, we note that in this case

                                                    σ3∗     = b
                                                   µ3       = a
                                                  ∆F3       = (JS − 1)S .                                   (10.5)

Substituting equation (10.5) into equation (10.3) gives

                                           a − λB b       = rS − λJ (JS − 1)S .                             (10.6)

Substituting equation (10.6) into equation (10.4) gives
                   b2
            Ft +      FSS + [r − λJ (JS − 1)]SFS − rF + λJ [F (Jσ σ, JS S, t) − F (σ, S, t)] = 0 .          (10.7)
                   2
Note that if JS = 1 (no jump in S, but a regime switch) then the term λJ (JS − 1) disappears in the drift
term.
    We can repeat the above arguments with jumps from a given regime with volatility σ to several possible
regimes Jσi σ, i = 1, . . . , p. Each possible transition σ → Jσi σ is driven by a Poisson process dq i . We assume
that dq i and dq j are independent. In this case, we have
                                                                       i=p
                                                                       X
                                      dS    = a dt + b dZ +                  (JSi − 1)S dq i
                                                                       i=1
                                                  i=p
                                                  X
                                      dσ    =           (Jσ − 1)σ dq i ,                                    (10.8)
                                                  i=1

Following the by now familiar steps, we obtain
                      b2                           X
               Ft +      FSS + (a − λB b)FS − rF +   λiJ [F (Jσi σ, JSi S, t) − F (σ, S, t)] = 0 .          (10.9)
                      2                            i

Note that in general λiJ = λiJ (σ, S), Jσi = Jσi (σ, S), JSi = JSi (σ, S), and λB = λB (σ, S). Now, suppose we
have only a finite number of possible regimes σk , k = 1, . . . , p. Let

                                                 λkB (σk , S)      = λkB (S))
                                                 F (σk , S, t)     = F k (S, t)
                                                λiJ (σk , S, t)    = λk→i
                                                                      J
                                                Jσi (σk , S, t)    = Jσk→i
                                                JSi (σk , S, t)    = JSk→i .                               (10.10)

Rewriting equation (10.9) using equation (10.10) gives
                     b2k k                               X
             Ftk +      FSS + (ak − λkB bk )FSk − rF k +   λk→i
                                                            J   [F i (JSk→i S, t) − F k (S, t)] = 0 .      (10.11)
                     2                                   i


                                                                  63
If we can hedge with the underlying, then the usual arguments give
                                                     X
                               ak − λkB bk = rS −       λk→i
                                                         J   (JSk→i − 1)S .                                (10.12)
                                                            i

Substituting equation (10.12) into equation (10.11) gives
             b2k k         X                                X
     Ftk +      FSS + (r −   λk→i
                              J   (JSk→i − 1))SFSk − rF k +   λk→i
                                                               J   [F i (JSk→i S, t) − F k (S, t)] = 0 .   (10.13)
             2             i                                i

If we have only a small number of regimes, we are effectively solving a small number of coupled 1-d PDEs.
In principle, the JSk→i , σk are P measure parameters, while the λk→i
                                                                  J   is a Q measure parameter. We can also
determine the σk , JSk→i , λk→i
                             J   by calibration to market prices.


11     Mean Variance Portfolio Optimization
An introduction to Computational Finance would not be complete without some discussion of Portfolio
Optimization. Consider a risky asset which follows Geometric Brownian Motion with drift
                                              dS
                                                     = µ dt + σ dZ ,                                        (11.1)
                                               S
                        √
where as usual dZ = φ dt and φ ∼ N (0, 1). Suppose we consider a fixed finite interval ∆t, then we can
write equation (11.1) as
                                               R     = µ0 + σ 0 φ
                                                             ∆S
                                                       R=
                                                              S
                                                       µ0 = µ∆t
                                                               √
                                                       σ 0 = σ ∆t ,                                         (11.2)
                                                                 0
where R is the actual return on the asset in [t, t + ∆t], µ is the expected return on the asset in [t, t + ∆t],
and σ 0 is the standard deviation of the return on the asset in [t, t + ∆t].
   Now consider a portfolio of N risky assets. Let Ri be the return on asset i in [t, t + ∆t], so that
                                                Ri    = µ0i + σi0 φi                                        (11.3)
Suppose that the correlation between asset i and asset j is given by ρij = E[φi φj ]. Suppose we buy xi of
each asset at t, to form the portfolio P
                                                          i=N
                                                          X
                                                P     =         xi Si .                                     (11.4)
                                                          i=1

Then, over the interval [t, t + ∆t]
                                                          i=N
                                                          X
                                         P + ∆P      =          xi Si (1 + Ri )
                                                          i=1
                                                          i=N
                                                          X
                                             ∆P      =          xi Si Ri
                                                          i=1
                                                          i=N
                                             ∆P           X
                                                     =          wi Ri
                                              P           i=1
                                                                 xi Si
                                                          wi = Pj=N                                         (11.5)
                                                                j=1 xj Sj


                                                          64
                                                    Pi=N
In other words, we divide up our total wealth W = i=1 xi Si into each asset with weight wi . Note that
Pi=N
  i=1 wi = 1.
   To summarize, given some initial wealth at t, we suppose that an investor allocates a fraction wi of this
wealth to each asset i. We assume that the total wealth is allocated to this risky portfolio P , so that
                                                 i=N
                                                 X
                                                       wi        =     1
                                                 i=1
                                                                       i=N
                                                                       X
                                                         P       =            xi Si
                                                                        i=1
                                                                       i=N
                                                    ∆P                 X
                                             Rp =                =            wi Ri .                   (11.6)
                                                     P                  i=1

The expected return on this portfolio Rp in [t, t + ∆t] is
                                                                 i=N
                                                                 X
                                                 Rp      =              wi µ0i ,                        (11.7)
                                                                 i=1

while the variance of Rp in [t, t + ∆t] is

                                                             X j=N
                                                             i=N X
                                     V ar(Rp )      =                      wi wj σi0 σj0 ρij .          (11.8)
                                                             i=1 j=1


11.1     Special Cases
Suppose the assets all have zero correlation with one another, i.e. ρij ≡ 0, ∀i 6= j (of course ρii = 1). Then
equation (11.8) becomes
                                                                 i=N
                                                                 X
                                         V ar(Rp )       =              (σi0 )2 (wi )2 .                (11.9)
                                                                  i=1

                                                                                                   0
Now, suppose we equally weight all the assets in the portfolio, i.e. wi = 1/N, ∀i. Let maxi σi0 = σmax , then
                                                                         i=N
                                                                      1 X 0 2
                                             V ar(Rp )       =               (σ )
                                                                     N 2 i=1 i
                                                                   0
                                                               N (σmax )2
                                                             ≤       2
                                                                 N 
                                                                   1
                                                             = O        ,                             (11.10)
                                                                   N
so that in this special case, if we diversify over a large number of assets, the standard deviation of the
portfolio tends to zero as N → ∞.
   Consider another case: all assets are perfectly correlated, ρij = 1, ∀i, j. In this case

                                                              X j=N
                                                              i=N X
                                       V ar(Rp )        =                     wi wj σi0 σj0
                                                                 i=1 j=1
                                                                                2
                                                                  j=N
                                                                  X
                                                        =                 wj σj0                    (11.11)
                                                                  j=1



                                                              65
                     p
so that if sd(R) =    V ar(R) is the standard deviation of R, then, in this case
                                                                       j=N
                                                                       X
                                                  sd(Rp )         =           wj σj0 ,                               (11.12)
                                                                        j=1

which means that in this case the standard deviation of the portfolio is simply the weighted average of the
individual asset standard deviations.
   In general, we can expect that 0 < |ρij | < 1, so that the standard deviation of a portfolio of assets will
be smaller than the weighted average of the individual asset standard deviation, but larger than zero.
   This means that diversification will be a good thing (as Martha Stewart would say) in terms of risk versus
reward. In fact, a portfolio of as little as 10 − 20 stocks tends to reap most of the benefits of diversification.

11.2      The Portfolio Allocation Problem
Different investors will choose different portfolios depending on how much risk they wish to take. However,
all investors like to achieve the highest possible expected return for a given amount of risk. We are assuming
that risk and standard deviation of portfolio return are synonymous.
     Let the covariance matrix C be defined as
                                                [C]ij = Cij = σi0 σj0 ρij                                            (11.13)
and define the vectors µ̄ = [µ01 , µ02 , ..., µ0N ]t , w̄ = [w1 , w2 , ..., wN ]t . In theory, the covariance matrix should be
symmetric positive semi-definite. However, measurement errors may result in C having a negative eigenvalue,
which should be fixed up somehow.
   The expected return on the portfolio is then
                                                          Rp = w̄t µ̄ ,                                              (11.14)
and the variance is
                                                  V ar(Rp )           = w̄t C w̄ .                                   (11.15)
   We can think of portfolio allocation problem as the following. Let α represent the degree with which
investors want to maximize return at the expense of assuming more risk. If α → 0, then investors want
to avoid as much risk as possible. On the other hand, if α → ∞, then investors seek only to maximize
expected return, and don’t care about risk. The portfolio allocation problem is then (for given α) find w̄
which satisfies
                                                  min w̄t C w̄ − αw̄t µ̄                                             (11.16)
                                                     w̄

subject to the constraints
                                          X
                                                wi        =   1                                                      (11.17)
                                            i
                                            Li ≤ wi           ≤ Ui ; i = 1, ..., N .                                 (11.18)
Constraint (11.17) is simply equation (11.6), while constraints (11.18) may arise due to the nature of the
portfolio. For example, most mutual funds can only hold long positions (wi ≥ 0), and they may also be
prohibited from having a large position in any one asset (e.g. wi ≤ .20). Long-short hedge funds will not
have these types of restrictions. For fixed α, equations (11.16-11.18) constitute a quadratic programming
problem.
   Let
                                        sd(Rp )      = standard deviation of Rp
                                                       q
                                                     =   V ar(Rp )                                                   (11.19)


                                                                  66
                                                  0.25



                                                 0.225



                                                   0.2




                               Expected Return
                                                           Efficient Frontier
                                                 0.175



                                                  0.15



                                                 0.125



                                                   0.1
                                                     0.2           0.3          0.4           0.5   0.6
                                                                         Standard Deviation



Figure 11.1: A typical efficient frontier. This curve shows, for each value of portfolio standard deviation
SD(Rp ), the maximum possible expected portfolio return Rp . Data in equation (11.20).


We can now trace out a curve on the (sd(Rp ), Rp ) plane. We pick various values of α, and then solve the
quadratic programming problem (11.16-11.18). Figure 11.1 shows a typical curve, which is also known as
the efficient frontier. The data used for this example is
                                                                      
                                        .15                .20  .05 −.01
                                µ̄ =  .20  ; C =  .05        .30 .015 
                                        .08               −.01 .015  .1
                                                           
                                          0               ∞
                                  L= 0  ; U = ∞                                               (11.20)
                                          0               ∞

    We have restricted this portfolio to be long only. For a given value of the standard deviation of the
portfolio return (sd(Rp )), then any point below the curve is not efficient, since there is another portfolio
with the same risk (standard deviation) and higher expected return. Only points on the curve are efficient
in this manner. In general, a linear combination of portfolios at two points along the efficient frontier will be
feasible, i.e. satisfy the constraints. This feasible region will be convex along the efficient frontier. Another
way of saying this is that a straight line joining any two points along the curve does not intersect the curve
except at the given two points. Why is this the case? If this was not true, then the efficient frontier would
not really be efficient. (see Portfolio Theory and Capital Markets, W. Sharpe, McGraw Hill, 1970, reprinted
in 2000).
    Figure 11.2 shows results if we allow the portfolio to hold up to .25 short positions in each asset. In other
words, the data is the same as in (11.20) except that
                                                            
                                                       −.25
                                               L =  −.25  .                                              (11.21)
                                                       −.25

 In general, long-short portfolios are more efficient than long-only portfolios. This is the advertised advantage
of long-short hedge funds.
     Since the feasible region is convex, we can actually proceed in a different manner when constructing the
efficient frontier. First of all, we can determine the maximum possible expected return (α = ∞ in equation


                                                                                67
                                                  0.25



                                                 0.225

                                                                             Long-Short
                                                   0.2




                               Expected Return
                                                                                             Long Only
                                                 0.175



                                                  0.15



                                                 0.125



                                                   0.1
                                                     0.2        0.3           0.4          0.5       0.6
                                                                      Standard Deviation



Figure 11.2: Efficient frontier, comparing results for long-only portfolio (11.20) and a long-short portfolio
(same data except that lower bound constraint is replaced by equation (11.21).


(11.16)),

                                                  min −w̄t µ̄
                                                    w̄
                                                                      X
                                                                            wi = 1
                                                                        i
                                                                      Li ≤ wi ≤ Ui ; i = 1, ..., N                               (11.22)

which is simply a linear programming problem. If the solution weight vector to this problem is (w̄)max , then
the maximum possible expected return is (Rp )max = w̄max
                                                      t
                                                          µ̄.
   Then determine the portfolio with the smallest possible risk, (α = 0 in equation (11.16) )

                                                 min w̄t C w̄
                                                  w̄
                                                                      X
                                                                            wi = 1
                                                                       i
                                                                      Li ≤ wi ≤ Ui ; i = 1, ..., N .                             (11.23)

If the solution weight vector to this quadratic program is given by w̄min , then the minimum possible portfolio
return is (Rp )min = w̄min
                       t
                             µ̄. We then divide up the range [(Rp )min , (Rp )max ] into a large number of discrete
portfolio returns (Rp )k ; k = 1, ..., Npts . Let e = [1, 1, ..., 1]t , and
                                                 t                            
                                                   µ̄             k       (Rp )k
                                          A=               ;   B    =                                       (11.24)
                                                   et                       1

then, for given (Rp )k we solve the quadratic program

                                           min w̄t C w̄
                                                  w̄
                                                                      Aw̄ = B k
                                                                      Li ≤ wi ≤ Ui ; i = 1, ..., N ,                             (11.25)
                                                                                                           p
with solution vector (w̄)k and hence portfolio standard deviation sd((Rp )k ) =                             (w̄)tk C(w̄)k . This gives us
a set of pairs (sd((Rp )k ), (Rp )k ), k = 1, ..., Npts .


                                                                              68
                                          0.25
                                                                            Capital Market
                                         0.225
                                                                                 Line

                                           0.2                      Borrowing

                                         0.175
                       Expected Return                                              Efficient Frontier
                                          0.15                                      All Risky Assets
                                         0.125       Lending                    Market
                                                                                Portfolio
                                           0.1

                                         0.075

                                          0.05
                                                       Risk Free
                                         0.025          Return
                                            0
                                                 0       0.1       0.2    0.3      0.4      0.5     0.6
                                                                   Standard Deviation


Figure 11.3: The efficient frontier from Figure 11.1 (all risky assets), and the efficient frontier with the same
assets as in Figure 11.1, except that we include a risk free asset. In this case, the efficient frontier becomes
a straight line, shown as the capital market line.


11.3     Adding a Risk-free asset
Up to now, we have assumed that each asset is risky, i.e. σi0 > 0, ∀i. However, what happens if we add a
risk free asset to our portfolio? This risk-free asset must earn the risk free rate r0 = r∆t, and its standard
deviation is zero. The data for this case is (the risk-free asset is added to the end of the weight vector, with
r0 = .03).
                                                                                
                                     .15                  .20    .05 −.01 0.0
                                    .20              .05      .30 .015 0.0 
                              µ̄ = 
                                    .08  ; C =  −.01 .015
                                                                                 
                                                                         .1    0.0 
                                     .03                  0.0    0.0    0.0 0.0
                                                          
                                     0                   ∞
                                   0                 ∞ 
                             L=   0  ; U = ∞ 
                                                                                                      (11.26)
                                    −∞                   ∞

where we have assumed that we can borrow any amount at the risk-free rate (a dubious assumption).
     If we compute the efficient frontier with a portfolio of risky assets and include one risk-free asset, we get
the result labeled capital market line in Figure 11.3. In other words, in this case the efficient frontier is a
straight line. Note that this straight line is always above the efficient frontier for the portfolio consisting of
all risky assets (as in Figure 11.1). In fact, given the efficient frontier from Figure 11.1, we can construct the
efficient frontier for a portfolio of the same risky assets plus a risk free asset in the following way. First of all,
we start at the point (0, r0 ) in the (sd(Rp ), Rp ) plane, corresponding to a portfolio which consists entirely
of the risk free asset. We then draw a straight line passing through (0, r0 ), which touches the all-risky-asset
efficient frontier at a single point (the straight line is tangent the all-risky-asset efficient frontier). Let the


                                                                          69
portfolio weights at this single point be denoted by w̄M . The portfolio corresponding to the weights w̄M
                                                 t
is termed the market portfolio. Let (Rp )M = w̄M   µ̄ be the expected return on this market portfolio, with
corresponding standard deviation sd((Rp )M ). Let wr be the fraction invested in the risk free asset. Then,
any point along the capital market line has

                                           Rp    = wr r0 + (1 − wr )(Rp )M
                                       sd(Rp )   =    (1 − wr ) sd((Rp )M ) .                             (11.27)

If wr ≥ 0, then we are lending at the risk-free rate. If wr < 0, we are borrowing at the risk-free rate.
    Consequently, given a portfolio of risky assets, and a risk-free asset, then all investors should divide their
assets between the risk-free asset and the market portfolio. Any other choice for the portfolio is not efficient.
Note that the actual fraction selected for investment in the market portfolio depends on the risk preferences
of the investor.
    The capital market line is so important, that the equation of this line is written as Rp = r0 +λM sd((Rp )),
where λM is the market price of risk. In other words, all diversified investors, at any particular point in
time, should have diversified portfolios which plot along the capital market line. All portfolios should have
the same Sharp ratio

                                                            Rp − r 0
                                                 λM    =             .                                    (11.28)
                                                            sd(Rp )

11.4     Criticism
Is mean-variance portfolio optimization the solution to all our problems? Not exactly. We have assumed
that µ0 , σ 0 are independent of time. This is not likely. Even if these parameters are reasonably constant,
they are difficult to estimate. In particular, µ0 is hard to determine if the time series of returns is not very
long. Remember that for short time series, the noise term (Brownian motion) will dominate. If we have a
long time series, we can get a better estimate for µ0 , but why do we think µ0 for a particular firm will be
constant for long periods? Probably, stock analysts should be estimating µ0 from company balance sheets,
sales data, etc. However, for the past few years, analysts have been too busy hyping stocks and going to
lunch to do any real work. So, there will be lots of different estimates of µ0 , C, and hence many different
optimal portfolios.
     In fact, some recent studies have suggested that if investors simply use the 1/N rule, whereby initial
wealth is allocated equally between N assets, that this does a pretty good job, assuming that there is
uncertainty in the estimates of µ0 , C.
     We have also assumed that risk is measured by standard deviation of portfolio return. Actually, if I am
long an asset, I like it when the asset goes up, and I don’t like it when the asset goes down. In other words,
volatility which makes the price increase is good. This suggests that perhaps it may be more appropriate to
minimize downside risk only (assuming a long position).
     Perhaps one of the most useful ideas that come from mean-variance portfolio optimization is that diver-
sified investors (at any point in time) expect that any optimal portfolio will produce a return

                                  Rp    = r0 + λM σp0
                                            Rp = Expected portfolio return
                                            r0 = risk-free return in period ∆t
                                            λM = market price of risk
                                            σp0 = Portfolio volatility ,                                  (11.29)

where different investors will choose portfolios with different σp0 (volatility), depending on their risk prefer-
ences, but λM is the same for all investors. Of course, we also have

                                             RM       = r 0 + λM σM
                                                                  0
                                                                    .                                     (11.30)


                                                           70
   Note: there is a whole field called Behavioural Finance, whose adherents don’t think much of mean-
variance portfolio optimization.
   Another recent approach is to compute the optimal portfolio weights using using many different perturbed
input data sets. The input data (expected returns, and covariances) are determined by resampling, i.e.
assuming that the observed values have some observational errors. In this way, we can get an some sort of
optimal portfolio weights which have some effect of data errors incorporated in the result. This gives us an
average efficient frontier, which, it is claimed, is less sensitive to data errors.

11.5    Individual Securities
Equation (11.30) refers to an efficient portfolio. What is the relationship between risk and reward for
individual securities? Consider the following portfolio: divide all wealth between the market portfolio, with
weight wM and security i, with weight wi . By definition

                                                             wM + wi    =   1 ,                        (11.31)

and we define

                                 RM        =        expected return on the market portfolio
                                   Ri      =        expected return on asset i
                                   0
                                  σM       =        s.d. of return on market portfolio
                                   σi0     =        s.d. of return on asset i
                                              0
                             Ci,M          = σM σi0 ρi,M
                                           = Covariance between i and M                                (11.32)

Now, the expected return on this portfolio is

                                           Rp = E[Rp ]          = wi Ri + wM RM
                                                                = wi Ri + (1 − wi )RM                  (11.33)

and the variance is

                        V ar(Rp )          =       (σp0 )2 = wi2 (σi0 )2 + 2wi wM Ci,M + wM
                                                                                          2   0 2
                                                                                            (σM )
                                           = wi2 (σi0 )2 + 2wi (1 − wi )Ci,M + (1 − wi )2 (σM
                                                                                            0 2
                                                                                              )        (11.34)

For a set of values {wi }, equations (11.33-11.34) will plot a curve in expected return-standard deviation
plane (Rp , σp0 ) (e.g. Figure 11.3). Let’s determine the slope of this curve when wi → 0, i.e. when this curve
intersects the capital market line at the market portfolio.

                                 ∂(σp0 )
                       2(σp0 )                 =     2wi (σi0 )2 + 2(1 − 2wi )Ci,M + 2(wi − 1)(σM
                                                                                                0 2
                                                                                                  )
                                  ∂wi
                                  ∂Rp
                                               = Ri − RM .                                             (11.35)
                                   ∂wi
Now,
                                                    ∂Rp
                            ∂Rp                     ∂wi
                                           =       ∂(σp0 )
                           ∂(σp0 )
                                                    ∂wi

                                                                   (Ri − RM )(σp0 )
                                           =                                               0 )2 .      (11.36)
                                                   wi (σi0 )2 + (1 − 2wi )Ci,M + (wi − 1)(σM


                                                                   71
Now, let wi → 0 in equation (11.36), then we obtain
                                                                         0
                                            ∂Rp              (Ri − RM )(σM   )
                                                      =                0                                 (11.37)
                                           ∂(σp0 )            Ci,M − (σM ) 2


But this curve should be tangent to the capital market line, equation (11.30) at the point where the capital
market line touches the efficient frontier. If this curve is not tangent to the capital market line, then this
implies that if we choose wi = ±, then the curve would be above the capital market line, which should not
be possible (the capital market line is the most efficient possible portfolio). This assumes that positions with
wi < 0 in asset i are possible.
   Assuming that the slope of the Rp portfolio is tangent to the capital market line gives (from equations
(11.30,11.37))

                                          RM − r 0                         0
                                                               (Ri − RM )(σM   )
                                             0 )        =                0   2
                                                                                                         (11.38)
                                           (σM                  Ci,M − (σM )
or

                                            Ri       = r0 + βi (RM − r0 )
                                                              Ci,M
                                                       βi = 0 2 .                                        (11.39)
                                                             (σM )
The coefficient βi in equation (11.39) has a nice intuitive definition. Suppose we have a time series of returns

                             (Ri )k   =     Return on asset i, in period k
                              M
                           (R )k      =     Return on market portfolio in period k .                     (11.40)

Typically, we assume that the market portfolio is a broad index, such as the TSX 300. Now, suppose we try
to obtain a least squares fit to the above data, using the equation

                                               Ri ≃ αi + bi RM .                                         (11.41)

Carrying out the usual least squares analysis (e.g. do a linear regression of Ri vs. RM ), we find that
                                                             Ci,M
                                                     bi =     0 )2                                       (11.42)
                                                            (σM
so that we can write

                                              Ri ≃ αi + βi RM .                                          (11.43)

This means that βi is the slope of the best fit straight line to a ((Ri )k , (RM )k ) scatter plot. An example is
shown in Figure 11.4. Now, from equation (11.39) we have that

                                            Ri       = r0 + βi (RM − r0 )                                (11.44)

which is consistent with equation (11.43) if

                                             Ri      = αi + βi RM + i
                                                            E[i ] = 0
                                                            αi = r0 (1 − βi )
                                                            E[i , RM ] = 0 ,                            (11.45)

since

                                          E[Ri ] = Ri         = αi + βi RM .                             (11.46)


                                                              72
                                                                              Rogers Wireless Communications


                                                  0.15




                                                   0.1




                                                  0.05




                               Return on stock
                                                    0




                                                 −0.05




                                                  −0.1



                                                    −0.08    −0.06        −0.04        −0.02            0          0.02       0.04
                                                                                     Return on market




Figure 11.4: Return on Rogers Wireless Communications versus return on TSE 300. Each point represents
pairs of daily returns. The vertical axis measures the daily return on the stock and the horizontal axis that
of the TSE300.

Equation (11.46) has the interpretation that the return on asset i can be decomposed into a drift component,
a part which is correlated to the market portfolio (the broad index), and a random part uncorrelated with
the index. Make the following assumptions
                                                                     E[i j ]     =       0 ; i 6= j
                                                                                   = e2i ; i = j                                      (11.47)
e.g. that returns on each each asset are correlated only through their correlation with the index. Consider
once again a portfolio where the wealth is divided amongst N assets, each asset receiving a fraction wi of
the initial wealth. In this case, the return on the portfolio is
                                                                           i=N
                                                                           X
                                                            Rp       =            wi Ri
                                                                           i=1
                                                                           i=N
                                                                           X                                i=N
                                                                                                            X
                                                            Rp       =            wi αi + RM                      wi βi               (11.48)
                                                                           i=1                              i=1

and
                                                              v
                                                                      X j=N
                                                                      i=N                 i=N
                                                              u
                                                              u           X               X
                             s.d.(Rp )                      = t  0
                                                               (σM )2       wi wj βi βj +     wi2 e2i
                                                                                    i=1 j=1                               i=1
                                                              v
                                                              u                        i=N
                                                                                                        !2         i=N
                                                              u                        X                           X
                                                                 0 )2
                                                            = t(σM                             wi βi           +          wi2 e2i .   (11.49)
                                                                                       i=1                         i=1

Now, if wi = O(1/N ), then
                                                                            i=N
                                                                            X
                                                                                   wi2 e2i                                            (11.50)
                                                                            i=1

is O(1/N ) as N becomes large, hence equation (11.49) becomes
                                                                                                i=N
                                                                                                X
                                                                         0
                                                            s.d.(Rp ) ≃ σM                              wi βi        .                (11.51)
                                                                                                 i=1


                                                                                       73
Note that if we write

                                                  Ri       = r0 + λi σi0                              (11.52)

then we also have that

                                             Ri     = r0 + βi (RM − r0 )                              (11.53)

so that the market price of risk of security i is

                                                             βi (RM − r0 )
                                               λi      =                                              (11.54)
                                                                  σi0
which is useful in real options analysis.


12     Stocks for the Long Run?
Conventional wisdom states that investment in a diversified portfolio of equities has a low risk for a long
term investor. However, in a recent article (”Irrational Optimism,” Fin. Anal. J. E. Simson, P.Marsh, M.
Staunton, vol 60 (January, 2004) 25-35) an extensive analysis of historical data of equity returns was carried
out. Projecting this information forward, the authors conclude that the probability of a negative real return
over a twenty year period, for a investor holding a diversified portfolio, is about 14 per cent. In fact, most
individuals in defined contribution pension plans have poorly diversified portfolios. Making more realistic
assumptions for defined contribution pension plans, the authors find that the probability of a negative real
return over twenty years is about 25 per cent.
   Let’s see if we can explain why there is this common misconception about the riskiness of long term
equity investing. Table 12.1 shows a typical table in a Mutual Fund advertisement. From this table, we are
supposed to conclude that
   • Long term equity investment is not very risky, with an annualized compound return about 3% higher
     than the current yield on government bonds.
   • If S is the value of the mutual fund, and B is the value of the government bond, then

                                                    B(T )      = B(0)erT
                                                             r = .03
                                                     S(T ) ≃ S(0)eαT
                                                                   α = .06,                             (12.1)

      for T large, which gives
                                            S(T =30)
                                              S(0)
                                            B(T =30)
                                                           = e1.8−.9 = e.9 ≃ 2.46,                      (12.2)
                                              B(0)

      indicating that you more than double your return by investing in equities compared to bonds (over the
      long term).
   A convenient way to measure the relative returns on these two investments (bonds and stocks) is to
compare the total compound return
                                                                   
                                                              S(T )
                          Compound return: stocks = log               = αT
                                                              S(0)
                                                                   
                                                              B(T )
                          Compound return: bonds = log                = rT ,                   (12.3)
                                                              B(0)

                                                             74
                 1 year   2 years   5 years      10 years    20 years   30 years   30 year bond
                                                                                       yield
                  -2%       -5%       10%          8%          7%          6%           3%

Table 12.1: Historical annualized compound return, XYZ Mutual Equity Funds. Also shown is the current
yield on a long term government bond.


or the annualized compound returns
                                                                                     
                                                                        1       S(T )
                        Annualized compound return: stocks          =     log           =α
                                                                        T       S(0)
                                                                                     
                                                                        1       B(T )
                        Annualized compound return: bonds           =     log           =r .            (12.4)
                                                                        T       B(0)
   If we assume that the value of the equity portfolio S follows a Geometric Brownian Motion
                                            dS    = µS dt + σS dZ                                       (12.5)
then from equation (2.56) we have that
                                                        σ2
                                           
                                      S(T )
                                log           ∼ N ((µ −    )T, σ 2 T ) ,                                (12.6)
                                      S(0)              2
                                                                              2
i.e. the compound return in is normally distributed with mean (µ − σ2 )T and variance σ 2 T , so that the
variance of the total compound return increases as T becomes large.
    Since var(aX) = a2 var(X), it follows that
                                                           σ2
                                              
                                1        S(T )
                                   log           ∼ N ((µ −    ), σ 2 /T ) ,                        (12.7)
                                T        S(0)              2
so that the the variance of the annualized return tends to zero at T becomes large.
    Of course, what we really care about is the total compound return (that’s how much we actually have at
t = T , relative to what we invested at t = 0) at the end of the investment horizon. This is why Table 12.1
is misleading. There is significent risk in equities, even over the long term (30 years would be long-term for
most investors).
    Figure 12.1 shows the results of 100, 000 simulations of asset prices assuming that the asset follows
equation (12.5), with µ = .08, σ = .2. The investment horizon is 5 years. The results are given in terms of
histograms of the annualized compound return (equation (12.4)) and the total compound return ((equation
(12.3)).
    Figure 12.2 shows similar results for an investment horizon of 30 years. Note how the variance of the
annualized return has decreased, while the variance of the total return has increased (verifying equations
(12.6-12.7)).
    Assuming long term bonds yield 3%, this gives a total compound return over 30 years of .90, for bonds.
Looking at the right hand panel of Figure 12.2 shows that there are many possible scenarios where the return
on equities will be less than risk free bonds after 30 years. The number of scenarios with return less than
risk free bonds is given by the area to the left of .9 in the histogram.


13     Further Reading
13.1    General Interest
   • Peter Bernstein, Capital Ideas: the improbable origins of modern Wall street, The Free Press, New
     York, 1992.


                                                        75
            4                                                                                 4                 Log Returns − 5 years
         x 10                 Annualized Returns − 5 years                                 x 10
                                                                                      2
    3

                                                                                     1.8


   2.5                                                                               1.6


                                                                                     1.4

    2
                                                                                     1.2


                                                                                      1
   1.5

                                                                                     0.8

    1
                                                                                     0.6


                                                                                     0.4
   0.5

                                                                                     0.2


    0                                                                                 0
   −0.8         −0.6   −0.4   −0.2          0           0.2   0.4   0.6   0.8         −3          −2   −1   0            1               2   3   4   5
                                     Ann. Returns ($)                                                              Log Returns ($)




Figure 12.1: Histogram of distribution of returns T = 5 years. µ = .08, σ = .2, 100, 000 simulations. Left:
annualized return 1/T log[S(T )/S(0)]. Right: return log[S(T )/S(0)].




            4                                                                                 4                 Log Returns − 30 years
         x 10                 Annualized Returns − 30 years                                x 10
                                                                                      2
    3

                                                                                     1.8


   2.5                                                                               1.6


                                                                                     1.4

    2
                                                                                     1.2


                                                                                      1
   1.5

                                                                                     0.8

    1
                                                                                     0.6


                                                                                     0.4
   0.5

                                                                                     0.2


    0                                                                                 0
   −0.8         −0.6   −0.4   −0.2          0           0.2   0.4   0.6   0.8         −3          −2   −1   0            1               2   3   4   5
                                     Ann. Returns ($)                                                              Log Returns ($)




Figure 12.2: Histogram of distribution of returns T = 30 years. µ = .08, σ = .2, 100, 000 simulations. Left:
annualized return 1/T log[S(T )/S(0)]. Right: return log[S(T )/S(0)],




                                                                                76
  • Peter Bernstein, Against the Gods: the remarkable story of risk, John Wiley, New York, 1998, ISBN
    0-471-29563-9.

  • Burton Malkeil, A random walk down Wall Street, W.W. Norton, New York, 1999, ISBN 0-393-32040-5.

  • N. Taleb, Fooled by Randomness, Texere, 2001, ISBN 1-58799-071-7.

13.2   More Background
  • A. Dixit and R. Pindyck, Investment under uncertainty, Princeton University Press, 1994.

  • John Hull, Options, futures and other derivatives, Prentice-Hall, 1997, ISBN 0-13-186479-3.

  • S. Ross, R. Westerfield, J. Jaffe, Corporate Finance, McGraw-Hill Irwin, 2002, ISBN 0-07-283137-5.

  • W. Sharpe, Portfolio Theory and Capital Markets, Wiley, 1970, reprinted in 2000, ISBN 0-07-135320-8.
    (Still a classic).

  • Lenos Triegeorgis, Real Options: Managerial Flexibility and Strategy for Resource Allocation, MIT
    Press, 1996, ISBN 0-262-20102-X.

13.3   More Technical
  • P. Brandimarte, Numerical Methods in Finance: A Matlab Introduction, Wiley, 2002, ISBN 0-471-
    39686-9.

  • Boyle, Broadie, Glassermman, Monte Carlo methods for security pricing, J. Econ. Dyn. Con., 21:1267-
    1321 (1997)

  • P. Glasserman, Monte Carlo Methods in Financial Engineering, Springer (2004) ISBN 0-387-00451-3.

  • D. Higham, An Introduction to Financial Option Valuation, Cambridge (2004) ISBN 0-521-83884-3.

  • P. Jackel, Monte Carlo Methods in Finance, Wiley, 2002, ISBN 0-471-49741-X.

  • Y.K. Kwok, Mathematical Models of Finance, Springer Singapore, 1998, ISBN 981-3083-565.

  • S. Neftci, An Introduction to the Mathematics of Financial Derivatives, Academic Press (2000) ISBN
    0-12-515392-9.

  • R. Seydel, Tools for Computational Finance, Springer, 2002, ISBN 3-540-43609-X.

  • D. Tavella and C. Randall, Pricing Financial Instruments: the Finite Difference Method, Wiley, 2000,
    ISBN 0-471-19760-2.

  • D. Tavella, Quantitative Methods in Derivatives Pricing: An Introduction to Computational Finance,
    Wiley (2002) ISBN 0-471-39447-5.

  • N. Taleb, Dynamic Hedging, Wiley, 1997, ISBN 0-471-15280-3.

  • P. Wilmott, S. Howison, J. Dewynne, The mathematics of financial derivatives: A student introduction,
    Cambridge, 1997, ISBN 0-521-49789-2.

  • Paul Wilmott, Paul Wilmott on Quantitative Finance, Wiley, 2000, ISBN 0-471-87438-8.

  pdflatex version




                                                  77



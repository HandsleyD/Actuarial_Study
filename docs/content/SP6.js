// SP6 Financial Derivatives Principles: flashcards and practice questions.
//
// Hand-edited. docs/content/README.md describes the format and its rules,
// above all that cards are append-only: a card's identity is its position.
// After editing, run: node scripts/build-catalog.mjs
registerContent("SP6", {
  modules: [
      {
          "id": "m01",
          "title": "Background to derivatives",
          "description": "What derivatives are, the markets they trade in (exchange and OTC), the participants (hedgers, speculators, arbitrageurs), basic payoffs, and the uses and risks of derivatives for institutions.",
          "cards": [
              {
                  "q": "What is a derivative?",
                  "a": "A contract whose value depends on the value of an underlying asset, rate or index.",
                  "explain": "Forwards, futures, swaps, options."
              },
              {
                  "q": "Name the three types of derivative market participant.",
                  "a": "Hedgers (reduce risk), speculators (take on risk for profit), arbitrageurs (exploit mispricing).",
                  "explain": "Arbitrageurs keep prices consistent."
              },
              {
                  "q": "What is the difference between exchange-traded and OTC derivatives?",
                  "a": "Exchange-traded are standardised, cleared centrally with margin; OTC are bilateral, customised, with counterparty risk (often collateralised or centrally cleared).",
                  "explain": "Trade-off: flexibility vs liquidity/security."
              },
              {
                  "q": "What is the payoff of a long European call at expiry?",
                  "a": "$\\max(S_T - K, 0)$.",
                  "explain": "Unlimited upside, premium lost if out of the money."
              },
              {
                  "q": "What is the payoff of a long European put at expiry?",
                  "a": "$\\max(K - S_T, 0)$.",
                  "explain": "Protects against falls."
              },
              {
                  "q": "What is a short position?",
                  "a": "Having sold a contract (or asset) — gains if the price falls.",
                  "explain": "Short options have unlimited or large potential losses."
              },
              {
                  "q": "Why do institutions use derivatives?",
                  "a": "To hedge risks, adjust exposures cheaply, gain leverage, create tailored payoffs, and reduce transaction costs.",
                  "explain": "Efficient portfolio management."
              },
              {
                  "q": "What is leverage in derivatives?",
                  "a": "Exposure to a large notional for a small initial outlay.",
                  "explain": "Magnifies gains and losses."
              },
              {
                  "q": "What is counterparty risk?",
                  "a": "The risk that the other party fails to perform.",
                  "explain": "Mitigated by collateral and clearing."
              },
              {
                  "q": "What is the law of one price?",
                  "a": "Assets with identical payoffs must have the same price, otherwise arbitrage exists.",
                  "explain": "Foundation of derivative pricing."
              },
              {
                  "q": "What is an arbitrage opportunity?",
                  "a": "A strategy with zero cost, no risk of loss and a positive probability of profit.",
                  "explain": "Assumed not to exist in pricing."
              },
              {
                  "q": "What are the main underlyings for derivatives?",
                  "a": "Equities, indices, interest rates, bonds, currencies, commodities, credit, inflation, weather/insurance.",
                  "explain": "Wide range."
              },
              {
                  "q": "Why did OTC reforms follow the 2008 crisis?",
                  "a": "Opaque bilateral exposures amplified contagion; reforms mandated central clearing, reporting and margin.",
                  "explain": "Systemic risk reduction."
              },
              {
                  "q": "What is notional principal?",
                  "a": "The reference amount used to calculate payments, not usually exchanged in swaps.",
                  "explain": "Overstates actual exposure."
              },
              {
                  "q": "What is a derivative's replicating portfolio?",
                  "a": "A portfolio of traded assets reproducing the derivative's payoff.",
                  "explain": "Basis for pricing."
              }
          ]
      },
      {
          "id": "m02",
          "title": "Forwards and futures",
          "description": "Pricing forwards and futures by no-arbitrage (cost of carry with income, storage and convenience yield), the difference between forward and futures prices, margining, basis risk, and hedging with futures including the optimal hedge ratio.",
          "cards": [
              {
                  "q": "What is the forward price of a non-income-paying asset?",
                  "a": "$F_0 = S_0 e^{rT}$.",
                  "explain": "Cash-and-carry arbitrage enforces it."
              },
              {
                  "q": "What is the forward price with a known continuous income yield $q$?",
                  "a": "$F_0 = S_0 e^{(r-q)T}$.",
                  "explain": "Dividends reduce the forward price."
              },
              {
                  "q": "What is the forward price with known cash income $I$ (PV)?",
                  "a": "$F_0 = (S_0 - I)e^{rT}$.",
                  "explain": "Subtract PV of income."
              },
              {
                  "q": "What is the forward exchange rate relationship?",
                  "a": "$F_0 = S_0 e^{(r - r_f)T}$ (interest rate parity).",
                  "explain": "Foreign rate acts like a yield."
              },
              {
                  "q": "What is convenience yield?",
                  "a": "The benefit of holding the physical commodity, reducing the forward price below full cost of carry.",
                  "explain": "Commodities."
              },
              {
                  "q": "How does a futures contract differ from a forward?",
                  "a": "Standardised, exchange-traded, daily settled (marked to market), minimal counterparty risk.",
                  "explain": "Daily settlement creates interim cash flows."
              },
              {
                  "q": "When do futures and forward prices differ?",
                  "a": "When interest rates are stochastic and correlated with the underlying price.",
                  "explain": "Usually small difference."
              },
              {
                  "q": "What is basis?",
                  "a": "Spot price minus futures price (or vice versa) of the hedged asset.",
                  "explain": "Basis risk from imperfect hedges."
              },
              {
                  "q": "What is the minimum-variance hedge ratio?",
                  "a": "$h^* = \\rho \\frac{\\sigma_S}{\\sigma_F}$.",
                  "explain": "Minimises variance of hedged position."
              },
              {
                  "q": "How many futures contracts are needed for a hedge?",
                  "a": "$N^* = h^* \\frac{Q_A}{Q_F}$ (exposure over contract size).",
                  "explain": "Adjust for tailing."
              },
              {
                  "q": "How can equity index futures change portfolio beta?",
                  "a": "Number of contracts $= (\\beta^* - \\beta)\\frac{P}{F}$.",
                  "explain": "Quick beta adjustment."
              },
              {
                  "q": "What is the value of an existing forward contract?",
                  "a": "$f = (F_0 - K)e^{-rT}$ for a long position.",
                  "explain": "Mark to market."
              },
              {
                  "q": "What is a short hedge?",
                  "a": "Selling futures to protect against a fall in the value of an asset held.",
                  "explain": "E.g. producer."
              },
              {
                  "q": "What is a long hedge?",
                  "a": "Buying futures to lock in the cost of a future purchase.",
                  "explain": "E.g. consumer."
              },
              {
                  "q": "What is rolling a hedge?",
                  "a": "Replacing expiring futures with longer-dated ones.",
                  "explain": "Roll risk."
              }
          ]
      },
      {
          "id": "m03",
          "title": "Traded derivatives contracts",
          "description": "Specifications and practicalities of exchange-traded derivatives: equity index and single-stock futures and options, interest rate futures (short-term and bond futures, cheapest-to-deliver), currency and commodity contracts, margin systems and clearing houses.",
          "cards": [
              {
                  "q": "What is a clearing house?",
                  "a": "An entity that becomes counterparty to both sides of exchange trades, guaranteeing performance.",
                  "explain": "Reduces counterparty risk."
              },
              {
                  "q": "What is initial margin?",
                  "a": "Collateral deposited when opening a futures position.",
                  "explain": "Covers potential losses."
              },
              {
                  "q": "What is variation margin?",
                  "a": "Daily settlement of gains and losses.",
                  "explain": "Marking to market."
              },
              {
                  "q": "What is a maintenance margin?",
                  "a": "Minimum balance; falling below triggers a margin call to restore initial margin.",
                  "explain": "Margin mechanics."
              },
              {
                  "q": "What is a short-term interest rate future?",
                  "a": "A future on a short-term rate, quoted as 100 minus the rate.",
                  "explain": "Hedges borrowing costs."
              },
              {
                  "q": "What is a bond future?",
                  "a": "A future on a notional government bond, settled by delivery of eligible bonds.",
                  "explain": "Conversion factors."
              },
              {
                  "q": "What is the cheapest-to-deliver bond?",
                  "a": "The deliverable bond minimising cost to the short (quoted price − futures price × conversion factor).",
                  "explain": "Drives futures price."
              },
              {
                  "q": "What is a conversion factor?",
                  "a": "A factor adjusting deliverable bond prices to the notional coupon.",
                  "explain": "Approximate equalisation."
              },
              {
                  "q": "What are equity index futures?",
                  "a": "Futures on an equity index, cash-settled.",
                  "explain": "Used for asset allocation."
              },
              {
                  "q": "What are traded options?",
                  "a": "Standardised exchange-listed options on shares, indices, futures.",
                  "explain": "Liquidity."
              },
              {
                  "q": "What is open interest?",
                  "a": "Number of outstanding contracts.",
                  "explain": "Liquidity measure."
              },
              {
                  "q": "Why are index futures cash-settled?",
                  "a": "Delivering all index constituents is impractical.",
                  "explain": "Cash settlement."
              },
              {
                  "q": "What are commodity futures features?",
                  "a": "Physical delivery options, storage, seasonality.",
                  "explain": "Convenience yield."
              },
              {
                  "q": "What is a position limit?",
                  "a": "Maximum contracts a trader can hold.",
                  "explain": "Market integrity."
              },
              {
                  "q": "What are currency futures?",
                  "a": "Standardised contracts to exchange currencies at a set rate.",
                  "explain": "Less used than OTC forwards."
              }
          ]
      },
      {
          "id": "m04",
          "title": "Binomial trees",
          "description": "Pricing derivatives with binomial trees: one-step replication and risk-neutral valuation, multi-step trees, choosing u and d from volatility, American options and early exercise, and options on assets with dividends, currencies and futures.",
          "cards": [
              {
                  "q": "What is the one-step risk-neutral probability?",
                  "a": "$q = \\frac{e^{r\\Delta t} - d}{u - d}$.",
                  "explain": "Requires $d \\lt e^{r\\Delta t} \\lt u$ for no arbitrage."
              },
              {
                  "q": "How is a derivative priced in one step?",
                  "a": "$V_0 = e^{-r\\Delta t}\\,[q V_u + (1-q) V_d]$.",
                  "explain": "Risk-neutral expectation discounted."
              },
              {
                  "q": "What is the replicating portfolio in a one-step tree?",
                  "a": "Hold $\\Delta = \\frac{V_u - V_d}{S_0(u-d)}$ shares plus a bond.",
                  "explain": "Delta hedge."
              },
              {
                  "q": "How are u and d often set?",
                  "a": "$u = e^{\\sigma\\sqrt{\\Delta t}}$, $d = 1/u$ (Cox-Ross-Rubinstein).",
                  "explain": "Matches volatility."
              },
              {
                  "q": "How are American options valued in a tree?",
                  "a": "At each node take the maximum of the continuation value and immediate exercise value.",
                  "explain": "Backward induction."
              },
              {
                  "q": "When is early exercise of an American call on a non-dividend stock optimal?",
                  "a": "Never — it is worth more alive.",
                  "explain": "Dividends can change this."
              },
              {
                  "q": "How are dividends handled in trees?",
                  "a": "Use $e^{(r-q)\\Delta t}$ in place of $e^{r\\Delta t}$ for a continuous yield, or adjust stock price for discrete dividends.",
                  "explain": "Recombination issues."
              },
              {
                  "q": "How do trees for currency options work?",
                  "a": "Replace $q$ by the foreign rate: $p = \\frac{e^{(r-r_f)\\Delta t}-d}{u-d}$.",
                  "explain": "Foreign interest as yield."
              },
              {
                  "q": "How do trees for futures options work?",
                  "a": "Risk-neutral probability $p = \\frac{1-d}{u-d}$.",
                  "explain": "Futures cost nothing to enter."
              },
              {
                  "q": "Why is risk-neutral valuation valid?",
                  "a": "Replication means the price doesn't depend on investors' risk preferences, so we can assume risk neutrality.",
                  "explain": "Key insight."
              },
              {
                  "q": "What happens as the number of steps increases?",
                  "a": "Binomial prices converge to Black-Scholes for European options.",
                  "explain": "Convergence."
              },
              {
                  "q": "Worked example: S=100, u=1.1, d=0.9, r=4% continuous, one year. Risk-neutral q?",
                  "a": "$q = (e^{0.04} - 0.9)/0.2 = 0.7040$.",
                  "explain": "Arithmetic: e^0.04 = 1.04081."
              },
              {
                  "q": "Using that tree, the price of a 1-year call with K=100?",
                  "a": "$e^{-0.04}\\times 0.7040 \\times 10 = 6.76$.",
                  "explain": "Down payoff is zero."
              },
              {
                  "q": "What is a recombining tree?",
                  "a": "Up-then-down equals down-then-up, keeping nodes manageable.",
                  "explain": "Efficient."
              },
              {
                  "q": "What are the limitations of binomial trees?",
                  "a": "Discrete approximation, many steps needed for accuracy, path-dependent options harder.",
                  "explain": "Numerical methods chapter."
              }
          ]
      },
      {
          "id": "m05",
          "title": "Stochastic calculus",
          "description": "Stochastic calculus for derivative pricing: Brownian motion and its properties, stochastic differential equations, Itô's lemma, geometric Brownian motion for share prices, and the lognormal distribution of prices.",
          "cards": [
              {
                  "q": "What are the properties of standard Brownian motion $W_t$?",
                  "a": "$W_0=0$; independent increments; $W_t - W_s \\sim N(0, t-s)$; continuous paths.",
                  "explain": "Nowhere differentiable."
              },
              {
                  "q": "What is geometric Brownian motion?",
                  "a": "$dS_t = \\mu S_t\\,dt + \\sigma S_t\\,dW_t$.",
                  "explain": "Standard share price model."
              },
              {
                  "q": "What is Itô's lemma?",
                  "a": "For $f(t,X_t)$ with $dX = a\\,dt + b\\,dW$: $df = \\left(f_t + a f_x + \\tfrac12 b^2 f_{xx}\\right)dt + b f_x\\,dW$.",
                  "explain": "Chain rule with a second-order term."
              },
              {
                  "q": "What is the solution of GBM?",
                  "a": "$S_t = S_0 \\exp\\left((\\mu - \\tfrac12\\sigma^2)t + \\sigma W_t\\right)$.",
                  "explain": "Lognormal prices."
              },
              {
                  "q": "What is the distribution of $\\ln S_T$ under GBM?",
                  "a": "$N\\left(\\ln S_0 + (\\mu - \\tfrac12\\sigma^2)T,\\ \\sigma^2 T\\right)$.",
                  "explain": "Lognormal."
              },
              {
                  "q": "What is the multiplication table for Itô calculus?",
                  "a": "$(dW)^2 = dt$, $dW\\,dt = 0$, $(dt)^2 = 0$.",
                  "explain": "Heuristic rules."
              },
              {
                  "q": "What is quadratic variation of Brownian motion?",
                  "a": "Over $[0,t]$ it equals $t$.",
                  "explain": "Why the extra Itô term."
              },
              {
                  "q": "What is an Itô integral?",
                  "a": "A stochastic integral with respect to Brownian motion, defined as a limit with left-endpoint evaluation.",
                  "explain": "Martingale property."
              },
              {
                  "q": "What is a martingale?",
                  "a": "A process with $E[X_t | \\mathcal{F}_s] = X_s$ for $s \\lt t$.",
                  "explain": "Fair game."
              },
              {
                  "q": "Why is the $-\tfrac12\\sigma^2$ term there?",
                  "a": "Itô correction: convexity of the log function.",
                  "explain": "Median vs mean."
              },
              {
                  "q": "What is an Ornstein-Uhlenbeck process?",
                  "a": "$dX = -\\alpha X\\,dt + \\sigma\\,dW$, mean-reverting.",
                  "explain": "Used in interest rate models (Vasicek)."
              },
              {
                  "q": "What is the expected value of $S_T$ under GBM?",
                  "a": "$S_0 e^{\\mu T}$.",
                  "explain": "Mean of lognormal."
              },
              {
                  "q": "What is a stochastic differential equation?",
                  "a": "An equation describing a process's evolution with deterministic drift and random diffusion terms.",
                  "explain": "SDE."
              },
              {
                  "q": "Why is Brownian motion used in finance?",
                  "a": "Models random, continuous price movements with independent increments.",
                  "explain": "Limit of random walks."
              },
              {
                  "q": "What are limitations of GBM for prices?",
                  "a": "Constant volatility, no jumps, lognormal tails too thin.",
                  "explain": "Empirical fat tails."
              }
          ]
      },
      {
          "id": "m06",
          "title": "Probability measures and risk-neutral pricing",
          "description": "Real-world versus risk-neutral probability measures, the martingale approach to pricing, Girsanov's theorem and change of drift, the market price of risk, and the risk-neutral valuation formula.",
          "cards": [
              {
                  "q": "What is the risk-neutral measure $Q$?",
                  "a": "A probability measure under which discounted asset prices are martingales.",
                  "explain": "Used for pricing."
              },
              {
                  "q": "What is the risk-neutral pricing formula?",
                  "a": "$V_0 = E_Q\\left[e^{-rT} V_T\\right]$.",
                  "explain": "Expectation under Q, discounted."
              },
              {
                  "q": "What does Girsanov's theorem do?",
                  "a": "Changes the drift of Brownian motion when changing measure: $\\tilde W_t = W_t + \\int_0^t \\gamma_s\\,ds$ is Brownian under the new measure.",
                  "explain": "Removes the risk premium from the drift."
              },
              {
                  "q": "What is the market price of risk?",
                  "a": "$\\gamma = (\\mu - r)/\\sigma$.",
                  "explain": "Excess return per unit volatility."
              },
              {
                  "q": "Under Q, what is the share price drift?",
                  "a": "$r$: $dS = rS\\,dt + \\sigma S\\,d\\tilde W$.",
                  "explain": "Growth at the risk-free rate."
              },
              {
                  "q": "What is the martingale representation theorem used for?",
                  "a": "Showing any claim can be replicated by trading the share and bond (completeness).",
                  "explain": "Justifies pricing."
              },
              {
                  "q": "What is a complete market?",
                  "a": "Every derivative can be replicated.",
                  "explain": "Unique prices."
              },
              {
                  "q": "Why is the real-world drift irrelevant for pricing?",
                  "a": "Replication removes dependence on investor preferences.",
                  "explain": "Hedging argument."
              },
              {
                  "q": "What is a numeraire?",
                  "a": "An asset in terms of which prices are measured; changing numeraire changes the measure.",
                  "explain": "E.g. forward measure."
              },
              {
                  "q": "What is the forward measure?",
                  "a": "Measure using a zero-coupon bond as numeraire, making forward prices martingales.",
                  "explain": "Interest rate derivatives."
              },
              {
                  "q": "What is the Radon-Nikodym derivative?",
                  "a": "The density relating two equivalent probability measures.",
                  "explain": "Change of measure."
              },
              {
                  "q": "What is the equivalence of measures?",
                  "a": "They agree on which events have zero probability.",
                  "explain": "Required for Girsanov."
              },
              {
                  "q": "How are real-world probabilities used?",
                  "a": "For risk management and projection, not pricing.",
                  "explain": "Two measures, two purposes."
              },
              {
                  "q": "What is the state-price deflator?",
                  "a": "A process that, multiplied by payoffs, gives prices under real-world expectation.",
                  "explain": "Equivalent approach."
              },
              {
                  "q": "Why do discounted prices need to be martingales?",
                  "a": "Otherwise arbitrage would exist (fundamental theorem of asset pricing).",
                  "explain": "No-arbitrage."
              }
          ]
      },
      {
          "id": "m07",
          "title": "Black-Scholes and the Greeks",
          "description": "The Black-Scholes PDE and formula for European options, extensions for dividends, currencies and futures (Black's model), implied volatility, and the Greeks (delta, gamma, vega, theta, rho) with their interpretation.",
          "cards": [
              {
                  "q": "What is the Black-Scholes price of a European call?",
                  "a": "$c = S_0 N(d_1) - Ke^{-rT} N(d_2)$, $d_{1,2} = \\frac{\\ln(S_0/K) + (r \\pm \\tfrac12\\sigma^2)T}{\\sigma\\sqrt T}$.",
                  "explain": "No dividends."
              },
              {
                  "q": "What is the Black-Scholes put price?",
                  "a": "$p = Ke^{-rT}N(-d_2) - S_0 N(-d_1)$.",
                  "explain": "Consistent with put-call parity."
              },
              {
                  "q": "What is the Black-Scholes PDE?",
                  "a": "$\\frac{\\partial V}{\\partial t} + rS\\frac{\\partial V}{\\partial S} + \\tfrac12\\sigma^2 S^2 \\frac{\\partial^2 V}{\\partial S^2} = rV$.",
                  "explain": "Derived by delta hedging."
              },
              {
                  "q": "How are dividends allowed for (continuous yield $q$)?",
                  "a": "Replace $S_0$ by $S_0 e^{-qT}$ (Garman-Kohlhagen for FX with $q=r_f$).",
                  "explain": "Merton's extension."
              },
              {
                  "q": "What is Black's model for futures options?",
                  "a": "$c = e^{-rT}[F_0 N(d_1) - K N(d_2)]$ with $d_1 = \\frac{\\ln(F_0/K) + \\tfrac12\\sigma^2T}{\\sigma\\sqrt T}$.",
                  "explain": "Used for interest rate options."
              },
              {
                  "q": "What is delta for a call?",
                  "a": "$N(d_1)$ (no dividends).",
                  "explain": "Sensitivity to share price."
              },
              {
                  "q": "What is gamma?",
                  "a": "$\\frac{N'(d_1)}{S_0\\sigma\\sqrt T}$ — rate of change of delta.",
                  "explain": "Same for call and put."
              },
              {
                  "q": "What is vega?",
                  "a": "$S_0\\sqrt T\\,N'(d_1)$ — sensitivity to volatility.",
                  "explain": "Always positive for long options."
              },
              {
                  "q": "What is theta?",
                  "a": "Rate of change of option value with time, usually negative for long options.",
                  "explain": "Time decay."
              },
              {
                  "q": "What is rho?",
                  "a": "Sensitivity to interest rate: $KTe^{-rT}N(d_2)$ for a call.",
                  "explain": "Small for short options."
              },
              {
                  "q": "What is implied volatility?",
                  "a": "The volatility that equates the Black-Scholes price with the market price.",
                  "explain": "Volatility smile shows model limits."
              },
              {
                  "q": "What is the volatility smile?",
                  "a": "Implied volatility varying with strike, contradicting constant-volatility assumptions.",
                  "explain": "Fat tails, skew."
              },
              {
                  "q": "Worked example: S=K=100, r=5%, σ=20%, T=1, d1=0.35, d2=0.15, N(d1)=0.6368, N(d2)=0.5596. Call price?",
                  "a": "$100(0.6368) - 100e^{-0.05}(0.5596) = 10.45$.",
                  "explain": "Arithmetic check: 100e^-0.05 = 95.123."
              },
              {
                  "q": "What is the relationship between theta, delta and gamma?",
                  "a": "$\\Theta + rS\\Delta + \\tfrac12\\sigma^2S^2\\Gamma = rV$.",
                  "explain": "From the PDE."
              },
              {
                  "q": "What are key Black-Scholes assumptions?",
                  "a": "Lognormal prices, constant r and σ, no transaction costs, continuous trading, no arbitrage.",
                  "explain": "Real markets violate these."
              }
          ]
      },
      {
          "id": "m08",
          "title": "Trading strategies and hedging",
          "description": "Option trading strategies (spreads, straddles, strangles, collars, covered calls, protective puts), delta, gamma and vega hedging, hedging costs and discrete rebalancing, and portfolio insurance.",
          "cards": [
              {
                  "q": "What is a bull spread?",
                  "a": "Buy a call at a lower strike and sell a call at a higher strike.",
                  "explain": "Limited profit and loss."
              },
              {
                  "q": "What is a bear spread?",
                  "a": "Buy a put at a higher strike, sell a put at a lower strike.",
                  "explain": "Profits from falls."
              },
              {
                  "q": "What is a straddle?",
                  "a": "Buy a call and put at the same strike and expiry.",
                  "explain": "Profits from large moves."
              },
              {
                  "q": "What is a strangle?",
                  "a": "Buy a call and put at different strikes (out of the money).",
                  "explain": "Cheaper than straddle."
              },
              {
                  "q": "What is a butterfly spread?",
                  "a": "Buy calls at low and high strikes, sell two at the middle strike.",
                  "explain": "Profits if price stays near middle."
              },
              {
                  "q": "What is a collar?",
                  "a": "Buy a put and sell a call to limit downside and upside.",
                  "explain": "Low or zero cost protection."
              },
              {
                  "q": "What is delta hedging?",
                  "a": "Holding −delta units of the underlying per option to neutralise small price moves.",
                  "explain": "Requires rebalancing."
              },
              {
                  "q": "What is gamma hedging?",
                  "a": "Using other options to make portfolio gamma zero, reducing rebalancing needs.",
                  "explain": "Then re-delta-hedge."
              },
              {
                  "q": "What is vega hedging?",
                  "a": "Using options to neutralise volatility exposure.",
                  "explain": "Needs traded options."
              },
              {
                  "q": "What are the costs of dynamic hedging?",
                  "a": "Transaction costs, discrete rebalancing errors, volatility misestimation.",
                  "explain": "Hedging is imperfect."
              },
              {
                  "q": "What is portfolio insurance?",
                  "a": "Strategies (buying puts or replicating them dynamically) to protect portfolio value below a floor.",
                  "explain": "1987 crash lessons."
              },
              {
                  "q": "What is a calendar spread?",
                  "a": "Options with same strike, different expiries.",
                  "explain": "Theta and vega exposure."
              },
              {
                  "q": "What is a covered call?",
                  "a": "Long stock, short call.",
                  "explain": "Income, capped upside."
              },
              {
                  "q": "What is a protective put?",
                  "a": "Long stock, long put.",
                  "explain": "Floor on losses."
              },
              {
                  "q": "Why is a delta-neutral portfolio still risky?",
                  "a": "Gamma and vega exposures mean large moves or volatility changes create P&L.",
                  "explain": "Higher-order risks."
              }
          ]
      },
      {
          "id": "m09",
          "title": "Exotic options",
          "description": "Exotic options — Asian, barrier, lookback, digital (binary), compound, chooser, basket and rainbow, forward-start and cliquet options — their payoffs, uses, pricing approaches and hedging difficulties.",
          "cards": [
              {
                  "q": "What is an Asian option?",
                  "a": "An option whose payoff depends on the average price of the underlying over a period.",
                  "explain": "Cheaper than vanilla; reduces manipulation risk."
              },
              {
                  "q": "What is a barrier option?",
                  "a": "An option that comes into existence (knock-in) or ceases (knock-out) if the underlying hits a barrier.",
                  "explain": "Cheaper than vanilla."
              },
              {
                  "q": "What is in-out parity for barriers?",
                  "a": "Knock-in + knock-out (same barrier) = vanilla option.",
                  "explain": "Useful identity."
              },
              {
                  "q": "What is a lookback option?",
                  "a": "Payoff depends on the maximum or minimum price over the life.",
                  "explain": "Expensive."
              },
              {
                  "q": "What is a digital (binary) option?",
                  "a": "Pays a fixed amount if the underlying ends above (or below) the strike.",
                  "explain": "Cash-or-nothing call worth $e^{-rT}N(d_2)$ per unit."
              },
              {
                  "q": "What is a compound option?",
                  "a": "An option on an option.",
                  "explain": "Used for contingent hedging."
              },
              {
                  "q": "What is a chooser option?",
                  "a": "Holder chooses at a future date whether it is a call or a put.",
                  "explain": "Value via put-call parity."
              },
              {
                  "q": "What is a basket option?",
                  "a": "An option on a weighted portfolio of assets.",
                  "explain": "Correlation matters."
              },
              {
                  "q": "What is a rainbow option?",
                  "a": "Payoff depends on best or worst of several assets.",
                  "explain": "Correlation sensitive."
              },
              {
                  "q": "What is a forward-start option?",
                  "a": "An option whose strike is set at a future date (e.g. at-the-money then).",
                  "explain": "Employee options, cliquets."
              },
              {
                  "q": "What is a cliquet (ratchet)?",
                  "a": "A series of forward-start options locking in gains periodically.",
                  "explain": "Guaranteed products."
              },
              {
                  "q": "Why are exotics harder to hedge?",
                  "a": "Discontinuities (barriers, digitals) create large gammas near triggers; path dependence.",
                  "explain": "Model risk."
              },
              {
                  "q": "How are exotics priced?",
                  "a": "Closed forms where available, otherwise Monte Carlo, trees or PDE methods.",
                  "explain": "Numerical methods chapter."
              },
              {
                  "q": "Why might an insurer embed exotic options?",
                  "a": "Guarantees in products (e.g. ratchets, averages) resemble exotic options.",
                  "explain": "Valuation and hedging needed."
              },
              {
                  "q": "What is a quanto option?",
                  "a": "Option on a foreign asset paid in domestic currency at a fixed exchange rate.",
                  "explain": "Correlation adjustment."
              }
          ]
      },
      {
          "id": "m10",
          "title": "Numerical methods",
          "description": "Numerical methods for pricing derivatives: Monte Carlo simulation and variance reduction, binomial and trinomial trees, finite difference methods for PDEs, and their suitability for path-dependent and American options.",
          "cards": [
              {
                  "q": "What is Monte Carlo pricing?",
                  "a": "Simulating many risk-neutral paths, computing payoffs, averaging and discounting.",
                  "explain": "Handles path dependence."
              },
              {
                  "q": "What is the standard error of a Monte Carlo estimate?",
                  "a": "$\\sigma/\\sqrt{n}$ — halving error needs four times the simulations.",
                  "explain": "Slow convergence."
              },
              {
                  "q": "Name two variance reduction techniques.",
                  "a": "Antithetic variates, control variates, importance sampling, stratified sampling, moment matching.",
                  "explain": "Improve accuracy."
              },
              {
                  "q": "What are antithetic variates?",
                  "a": "Using each random draw $Z$ and its negative $-Z$ to reduce variance.",
                  "explain": "Negatively correlated pairs."
              },
              {
                  "q": "What is a control variate?",
                  "a": "Using a similar derivative with known price to correct simulation error.",
                  "explain": "E.g. geometric Asian for arithmetic Asian."
              },
              {
                  "q": "Why is Monte Carlo hard for American options?",
                  "a": "Early exercise requires knowing continuation values at each point (backward information).",
                  "explain": "Least-squares Monte Carlo solves this."
              },
              {
                  "q": "What is least-squares Monte Carlo?",
                  "a": "Estimating continuation values by regression on simulated paths (Longstaff-Schwartz).",
                  "explain": "American options."
              },
              {
                  "q": "What are finite difference methods?",
                  "a": "Solving the pricing PDE on a grid of asset price and time.",
                  "explain": "Explicit, implicit, Crank-Nicolson."
              },
              {
                  "q": "What is the explicit method's weakness?",
                  "a": "Stability requires small time steps.",
                  "explain": "Implicit methods are unconditionally stable."
              },
              {
                  "q": "What is Crank-Nicolson?",
                  "a": "A finite difference scheme averaging explicit and implicit methods, second-order accurate.",
                  "explain": "Common choice."
              },
              {
                  "q": "When are trees preferred?",
                  "a": "For American options and simple path-independent payoffs.",
                  "explain": "Intuitive."
              },
              {
                  "q": "What is a trinomial tree?",
                  "a": "A tree with up, middle and down moves, equivalent to explicit finite differences.",
                  "explain": "More flexible."
              },
              {
                  "q": "How are Greeks estimated numerically?",
                  "a": "Finite differences of prices with bumped inputs, using common random numbers.",
                  "explain": "Pathwise methods too."
              },
              {
                  "q": "What is quasi-Monte Carlo?",
                  "a": "Using low-discrepancy sequences for faster convergence.",
                  "explain": "Sobol sequences."
              },
              {
                  "q": "What are the trade-offs among numerical methods?",
                  "a": "Accuracy, speed, handling of early exercise and path dependence, dimensionality.",
                  "explain": "Monte Carlo suits high dimensions."
              }
          ]
      },
      {
          "id": "m11",
          "title": "Interest rate markets",
          "description": "Interest rate markets: spot and forward rates, the yield curve and its theories, government and corporate bonds, money markets, reference rates (LIBOR transition to risk-free rates such as SONIA), repo, and duration and convexity.",
          "cards": [
              {
                  "q": "What is a spot rate?",
                  "a": "The yield on a zero-coupon bond for a given maturity.",
                  "explain": "Discounting."
              },
              {
                  "q": "What is a forward rate?",
                  "a": "Rate agreed now for a future period, implied by spot rates.",
                  "explain": "$(1+s_2)^2 = (1+s_1)(1+f_{1,2})$."
              },
              {
                  "q": "What are the theories of the yield curve?",
                  "a": "Expectations, liquidity preference, market segmentation (preferred habitat).",
                  "explain": "Explain shape."
              },
              {
                  "q": "What is LIBOR's replacement in sterling markets?",
                  "a": "SONIA, an overnight risk-free rate compounded in arrears.",
                  "explain": "LIBOR discontinued due to manipulation and thin markets."
              },
              {
                  "q": "What is a repo rate?",
                  "a": "The rate on secured borrowing via repurchase agreements.",
                  "explain": "Close to risk-free."
              },
              {
                  "q": "What is modified duration?",
                  "a": "$-\\frac{1}{P}\\frac{dP}{dy}$.",
                  "explain": "Price sensitivity."
              },
              {
                  "q": "What is convexity?",
                  "a": "$\\frac{1}{P}\\frac{d^2P}{dy^2}$.",
                  "explain": "Second-order."
              },
              {
                  "q": "What is a par yield?",
                  "a": "Coupon rate at which a bond prices at par.",
                  "explain": "Swap rates are par rates."
              },
              {
                  "q": "How are spot rates derived from coupon bonds?",
                  "a": "Bootstrapping.",
                  "explain": "Sequential solving."
              },
              {
                  "q": "What is the term premium?",
                  "a": "Extra yield for holding longer bonds.",
                  "explain": "Liquidity preference."
              },
              {
                  "q": "What is an inverted yield curve?",
                  "a": "Short rates exceed long rates.",
                  "explain": "Often precedes recession."
              },
              {
                  "q": "What is a swap rate?",
                  "a": "Fixed rate that makes an interest rate swap worth zero.",
                  "explain": "Swap curve."
              },
              {
                  "q": "What is credit spread?",
                  "a": "Yield over risk-free rate for credit risk.",
                  "explain": "Corporate bonds."
              },
              {
                  "q": "What is the OIS curve used for?",
                  "a": "Discounting collateralised derivatives.",
                  "explain": "Risk-free proxy."
              },
              {
                  "q": "What is key rate duration?",
                  "a": "Sensitivity to specific points on the yield curve.",
                  "explain": "Non-parallel shifts."
              }
          ]
      },
      {
          "id": "m12",
          "title": "Interest rate derivatives",
          "description": "Interest rate derivatives: FRAs, interest rate futures, swaps (valuation as bonds or FRAs), caps, floors and collars, swaptions, bond options, and their pricing with Black's model and uses in hedging.",
          "cards": [
              {
                  "q": "What is a forward rate agreement (FRA)?",
                  "a": "An agreement fixing the interest rate on a notional for a future period, settled in cash.",
                  "explain": "Hedges future borrowing costs."
              },
              {
                  "q": "How is an interest rate swap valued?",
                  "a": "Difference between a fixed-rate bond and a floating-rate bond, or as a portfolio of FRAs.",
                  "explain": "Worth zero at inception."
              },
              {
                  "q": "What is an interest rate cap?",
                  "a": "A series of caplets paying when the reference rate exceeds the cap rate.",
                  "explain": "Protects borrowers."
              },
              {
                  "q": "What is a floor?",
                  "a": "A series of floorlets paying when rate falls below the floor rate.",
                  "explain": "Protects lenders/investors."
              },
              {
                  "q": "What is a collar?",
                  "a": "Long cap and short floor.",
                  "explain": "Limits rate range."
              },
              {
                  "q": "How is a caplet priced with Black's model?",
                  "a": "As a call on the forward rate: $L\\,\\delta\\, P(0,t_{k+1})[F_k N(d_1) - R_K N(d_2)]$.",
                  "explain": "Market standard."
              },
              {
                  "q": "What is a swaption?",
                  "a": "An option to enter a swap at a fixed rate.",
                  "explain": "Payer or receiver."
              },
              {
                  "q": "How is a swaption priced?",
                  "a": "Black's model on the forward swap rate with an annuity factor.",
                  "explain": "Market convention."
              },
              {
                  "q": "How can insurers use receiver swaptions?",
                  "a": "Hedge guarantees that bite when rates fall (e.g. GARs).",
                  "explain": "Downside protection."
              },
              {
                  "q": "What is cap-floor parity?",
                  "a": "Cap − floor = swap (same strike).",
                  "explain": "Arbitrage relationship."
              },
              {
                  "q": "What is a bond option?",
                  "a": "Option on a bond price.",
                  "explain": "Black's model on forward bond price."
              },
              {
                  "q": "What is an amortising swap?",
                  "a": "Swap with a declining notional.",
                  "explain": "Matches amortising loans."
              },
              {
                  "q": "What is a basis swap?",
                  "a": "Exchanging two floating rates.",
                  "explain": "Basis risk management."
              },
              {
                  "q": "How do pension schemes use swaps?",
                  "a": "LDI hedging of interest rate and inflation risk.",
                  "explain": "Collateral needs."
              },
              {
                  "q": "What is the annuity factor in swap valuation?",
                  "a": "Sum of discount factors times accrual periods.",
                  "explain": "Swap PV01."
              }
          ]
      },
      {
          "id": "m13",
          "title": "Interest rate models",
          "description": "Term structure models for pricing interest rate derivatives: short-rate models (Vasicek, Cox-Ingersoll-Ross, Hull-White), equilibrium versus no-arbitrage models, the Heath-Jarrow-Morton framework and the LIBOR market model, and desirable model properties.",
          "cards": [
              {
                  "q": "What is the Vasicek model?",
                  "a": "$dr = a(b - r)dt + \\sigma dW$ — mean-reverting, normal rates.",
                  "explain": "Rates can go negative."
              },
              {
                  "q": "What is the CIR model?",
                  "a": "$dr = a(b - r)dt + \\sigma\\sqrt{r}\\,dW$.",
                  "explain": "Rates stay non-negative."
              },
              {
                  "q": "What is the Hull-White model?",
                  "a": "Vasicek with time-dependent mean: $dr = (\\theta(t) - ar)dt + \\sigma dW$.",
                  "explain": "Fits the initial curve."
              },
              {
                  "q": "What is the difference between equilibrium and no-arbitrage models?",
                  "a": "Equilibrium models derive the curve from parameters; no-arbitrage models fit the current curve exactly.",
                  "explain": "Pricing needs no-arbitrage."
              },
              {
                  "q": "What is the HJM framework?",
                  "a": "Models the evolution of the whole forward rate curve; drift is determined by volatility under no-arbitrage.",
                  "explain": "General framework."
              },
              {
                  "q": "What is the LIBOR market model?",
                  "a": "Models discrete forward rates as lognormal, consistent with Black's cap pricing.",
                  "explain": "Market model."
              },
              {
                  "q": "What properties should an interest rate model have?",
                  "a": "No-arbitrage, fit to current curve, realistic dynamics (mean reversion, positive rates if needed), tractability, calibration to volatilities.",
                  "explain": "Trade-offs."
              },
              {
                  "q": "What is mean reversion?",
                  "a": "Rates tend to move back towards a long-term level.",
                  "explain": "Parameter a."
              },
              {
                  "q": "What is a one-factor model's limitation?",
                  "a": "All rates perfectly correlated; can't capture twists.",
                  "explain": "Multi-factor models."
              },
              {
                  "q": "How are models calibrated?",
                  "a": "Fitting parameters to market prices of caps and swaptions.",
                  "explain": "Implied volatilities."
              },
              {
                  "q": "Why can negative rates matter?",
                  "a": "Some models (lognormal) can't produce them; recent markets had negative rates.",
                  "explain": "Shifted models."
              },
              {
                  "q": "What is the short rate?",
                  "a": "The instantaneous risk-free interest rate.",
                  "explain": "Short-rate models."
              },
              {
                  "q": "What is affine term structure?",
                  "a": "Bond prices of the form $P(t,T) = e^{A(t,T) - B(t,T)r_t}$.",
                  "explain": "Vasicek, CIR."
              },
              {
                  "q": "How are models used by insurers?",
                  "a": "Valuing guarantees and scenario generation.",
                  "explain": "Market-consistent valuation."
              },
              {
                  "q": "What is the Black-Karasinski model?",
                  "a": "Lognormal short rate model with mean reversion.",
                  "explain": "Positive rates."
              }
          ]
      },
      {
          "id": "m14",
          "title": "Structured derivatives",
          "description": "Structured derivatives and products: capital-protected notes, equity-linked and index-linked products, range accruals, credit-linked notes, their construction from bonds and options, pricing and the risks to issuers and investors.",
          "cards": [
              {
                  "q": "What is a structured product?",
                  "a": "A packaged investment combining a bond with derivatives to give a tailored payoff.",
                  "explain": "Retail and institutional."
              },
              {
                  "q": "How is a capital-protected note constructed?",
                  "a": "A zero-coupon bond guaranteeing principal plus call options for upside participation.",
                  "explain": "Participation rate depends on option cost."
              },
              {
                  "q": "What determines the participation rate?",
                  "a": "Funds left after buying the zero-coupon bond divided by option cost.",
                  "explain": "Lower rates → less participation."
              },
              {
                  "q": "What is a reverse convertible?",
                  "a": "A note paying a high coupon but repaying in shares if the price falls below a level.",
                  "explain": "Investor sells a put."
              },
              {
                  "q": "What is a range accrual?",
                  "a": "Pays coupons for days a reference rate stays within a range.",
                  "explain": "Embedded digitals."
              },
              {
                  "q": "What is a credit-linked note?",
                  "a": "A note whose repayment depends on credit events of a reference entity.",
                  "explain": "Embedded CDS."
              },
              {
                  "q": "What risks do investors in structured products face?",
                  "a": "Issuer credit risk, complexity, liquidity, hidden fees, market risk.",
                  "explain": "Mis-selling concerns."
              },
              {
                  "q": "What risks does the issuer face?",
                  "a": "Hedging risk, model risk, correlation and volatility exposures.",
                  "explain": "Dynamic hedging."
              },
              {
                  "q": "Why are structured products popular?",
                  "a": "Tailored risk/return, capital protection appeal.",
                  "explain": "Behavioural appeal."
              },
              {
                  "q": "How is fair value of a structured product assessed?",
                  "a": "Decomposing into components and pricing each.",
                  "explain": "Transparency."
              },
              {
                  "q": "What is an autocallable?",
                  "a": "A note that redeems early if the underlying is above a level on observation dates.",
                  "explain": "Popular retail product."
              },
              {
                  "q": "What is a CPPI strategy?",
                  "a": "Constant proportion portfolio insurance — dynamically allocating to risky assets based on cushion above floor.",
                  "explain": "Alternative to options."
              },
              {
                  "q": "What is gap risk in CPPI?",
                  "a": "Sudden falls breaching the floor before rebalancing.",
                  "explain": "Tail risk."
              },
              {
                  "q": "How do low rates affect capital protection?",
                  "a": "Zero-coupon bonds cost more, leaving less for options.",
                  "explain": "Lower participation."
              },
              {
                  "q": "What is secondary market risk?",
                  "a": "Difficulty selling before maturity at fair value.",
                  "explain": "Liquidity."
              }
          ]
      },
      {
          "id": "m15",
          "title": "Risk management",
          "description": "Managing derivative risks: market risk and Greeks-based limits, VaR and expected shortfall, stress testing, counterparty credit risk and CVA, collateral and netting, liquidity and model risk, and governance of derivative use.",
          "cards": [
              {
                  "q": "How can derivative portfolios' market risk be measured?",
                  "a": "Greeks, VaR, expected shortfall, stress tests.",
                  "explain": "Complementary."
              },
              {
                  "q": "What is VaR?",
                  "a": "Loss not exceeded with a given confidence over a period.",
                  "explain": "Doesn't capture tail severity."
              },
              {
                  "q": "What is expected shortfall?",
                  "a": "Average loss beyond VaR.",
                  "explain": "Coherent measure."
              },
              {
                  "q": "What are the methods for calculating VaR?",
                  "a": "Historical simulation, variance-covariance (parametric), Monte Carlo.",
                  "explain": "Pros and cons."
              },
              {
                  "q": "What is counterparty credit risk?",
                  "a": "Risk counterparty defaults when derivative has positive value.",
                  "explain": "Exposure changes over time."
              },
              {
                  "q": "What is CVA?",
                  "a": "Credit valuation adjustment — market value of counterparty credit risk.",
                  "explain": "Reduces derivative value."
              },
              {
                  "q": "How does netting reduce risk?",
                  "a": "Offsetting positive and negative values with the same counterparty on default.",
                  "explain": "ISDA master agreements."
              },
              {
                  "q": "How does collateral reduce risk?",
                  "a": "Posting margin covering exposure.",
                  "explain": "CSA agreements."
              },
              {
                  "q": "What is wrong-way risk?",
                  "a": "Exposure increasing when counterparty's credit worsens.",
                  "explain": "Correlation risk."
              },
              {
                  "q": "What is model risk?",
                  "a": "Losses due to model errors or mis-specification.",
                  "explain": "Validation."
              },
              {
                  "q": "What is liquidity risk in derivatives?",
                  "a": "Inability to meet collateral calls or unwind positions.",
                  "explain": "2022 LDI episode."
              },
              {
                  "q": "What is stress testing?",
                  "a": "Evaluating losses under extreme scenarios.",
                  "explain": "Beyond VaR."
              },
              {
                  "q": "What governance is needed for derivatives?",
                  "a": "Clear policies, limits, independent risk oversight, valuation controls, board understanding.",
                  "explain": "Regulatory expectations."
              },
              {
                  "q": "What is potential future exposure?",
                  "a": "A high percentile of future exposure to a counterparty.",
                  "explain": "Credit limits."
              },
              {
                  "q": "What are Greeks limits?",
                  "a": "Limits on delta, gamma, vega exposures.",
                  "explain": "Risk control."
              }
          ]
      },
      {
          "id": "m16",
          "title": "Credit derivatives",
          "description": "Credit derivatives: credit default swaps and their pricing from hazard rates and recovery, CDS indices, total return swaps, credit-linked notes, CDOs and correlation, and structural (Merton) and reduced-form credit models.",
          "cards": [
              {
                  "q": "How is a CDS priced?",
                  "a": "Set the spread so PV of premium payments equals PV of expected protection payments, using default probabilities and recovery.",
                  "explain": "Hazard rate model."
              },
              {
                  "q": "What is the credit triangle?",
                  "a": "Spread $\\approx \\lambda (1 - R)$ where $\\lambda$ is hazard rate and $R$ recovery.",
                  "explain": "Approximation."
              },
              {
                  "q": "What is the Merton model?",
                  "a": "Equity is a call option on firm assets; default when assets fall below debt at maturity.",
                  "explain": "Structural model."
              },
              {
                  "q": "What is a reduced-form credit model?",
                  "a": "Default modelled as a random event with a hazard rate, not tied to firm value.",
                  "explain": "Intensity models."
              },
              {
                  "q": "What is a CDS index?",
                  "a": "A standardised CDS on a basket of names (e.g. iTraxx, CDX).",
                  "explain": "Liquid credit exposure."
              },
              {
                  "q": "What is a total return swap?",
                  "a": "Exchanging total return on an asset for a floating rate.",
                  "explain": "Transfers credit and market risk."
              },
              {
                  "q": "What is a synthetic CDO?",
                  "a": "Tranches referencing a portfolio of CDS rather than cash bonds.",
                  "explain": "Correlation product."
              },
              {
                  "q": "What is default correlation?",
                  "a": "Tendency of defaults to occur together.",
                  "explain": "Key for tranches."
              },
              {
                  "q": "What is the Gaussian copula model?",
                  "a": "A model for joint default times using correlated normals.",
                  "explain": "Criticised after 2008."
              },
              {
                  "q": "What are risks of credit derivatives?",
                  "a": "Counterparty, correlation, model, liquidity, basis risks.",
                  "explain": "Complexity."
              },
              {
                  "q": "How do investors use CDS?",
                  "a": "Hedge credit exposure, gain synthetic exposure, relative value trades.",
                  "explain": "Flexibility."
              },
              {
                  "q": "What is recovery risk?",
                  "a": "Uncertainty in recovery rates affecting payouts.",
                  "explain": "Pricing sensitivity."
              },
              {
                  "q": "What is jump-to-default risk?",
                  "a": "Sudden loss on default not captured by spread sensitivity.",
                  "explain": "Tail risk."
              },
              {
                  "q": "What is a first-to-default basket?",
                  "a": "Pays on the first default in a basket.",
                  "explain": "Correlation sensitive."
              },
              {
                  "q": "How did credit derivatives contribute to 2008?",
                  "a": "Opaque exposures, mispriced correlation, counterparty concentration (e.g. AIG).",
                  "explain": "Reforms followed."
              }
          ]
      },
      {
          "id": "m17",
          "title": "Practical derivative management",
          "description": "Practical issues in using derivatives: documentation (ISDA, CSA), collateral management, valuation and accounting, operational processes, regulatory requirements (clearing, reporting, margin), and how pension schemes and insurers implement hedging programmes.",
          "cards": [
              {
                  "q": "What is an ISDA master agreement?",
                  "a": "Standard legal framework for OTC derivatives, including netting and default provisions.",
                  "explain": "Industry standard."
              },
              {
                  "q": "What is a CSA?",
                  "a": "Credit Support Annex setting collateral terms.",
                  "explain": "Eligible collateral, thresholds."
              },
              {
                  "q": "What does collateral management involve?",
                  "a": "Calculating exposures, making and receiving margin calls, eligible assets, disputes.",
                  "explain": "Operational."
              },
              {
                  "q": "What are EMIR/Dodd-Frank style requirements?",
                  "a": "Mandatory clearing, trade reporting, margin for uncleared trades.",
                  "explain": "Post-crisis reforms."
              },
              {
                  "q": "How are derivatives valued in practice?",
                  "a": "Mark-to-market using market prices or models with observable inputs.",
                  "explain": "Independent price verification."
              },
              {
                  "q": "What accounting issues arise?",
                  "a": "Fair value through P&L, hedge accounting to reduce volatility.",
                  "explain": "Documentation needed."
              },
              {
                  "q": "How do pension schemes implement hedging?",
                  "a": "Via LDI managers, pooled funds or segregated mandates with swaps and gilt repos.",
                  "explain": "Collateral buffers."
              },
              {
                  "q": "How do insurers implement hedging programmes?",
                  "a": "Dynamic hedging of guarantees, static hedges, governance frameworks.",
                  "explain": "Hedge effectiveness monitoring."
              },
              {
                  "q": "What is hedge effectiveness?",
                  "a": "How well a hedge offsets the hedged item's changes.",
                  "explain": "Monitoring."
              },
              {
                  "q": "What operational risks arise?",
                  "a": "Trade errors, settlement failures, collateral mismanagement.",
                  "explain": "Controls."
              },
              {
                  "q": "What is a liquidity waterfall?",
                  "a": "Ordering assets to meet collateral calls.",
                  "explain": "LDI practice."
              },
              {
                  "q": "Why is counterparty diversification important?",
                  "a": "Limits exposure to any one bank.",
                  "explain": "Concentration."
              },
              {
                  "q": "How should derivative use be governed?",
                  "a": "Board-approved policy, limits, reporting, expertise.",
                  "explain": "Oversight."
              },
              {
                  "q": "What are uncleared margin rules?",
                  "a": "Requirement to exchange initial and variation margin on non-cleared OTC trades.",
                  "explain": "Phased in."
              },
              {
                  "q": "What is novation?",
                  "a": "Transferring a derivative to a new counterparty.",
                  "explain": "Clearing, restructuring."
              }
          ]
      }
  ],
  questions: [
    {
      id: "sp6-q1",
      title: "Derivative markets and market participants",
      modules: "Modules 1, 3",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Distinguish",
          marks: 3,
          question:
            "Distinguish between hedgers, speculators and arbitrageurs as users of derivatives.",
          answer:
            "Hedgers use derivatives to reduce an existing risk exposure; speculators use derivatives to take on genuine new exposure in the hope of profiting from an anticipated market movement; arbitrageurs use derivatives to exploit genuine, temporary pricing discrepancies between related instruments, aiming for a risk-free profit.",
          note: "A complete answer distinguishes all three distinct motivations, not just names them.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a central counterparty clearing house (CCP) reduces counterparty risk in exchange-traded derivative markets.",
          answer:
            "A CCP interposes itself between the two original parties to a trade, becoming the genuine buyer to every seller and seller to every buyer, so each party's counterparty risk is against the CCP itself (typically very well-capitalised and margined) rather than against the original, potentially less creditworthy counterparty directly.",
          note: "A strong answer explicitly names the interposition mechanism, not just asserts that CCPs 'reduce risk'.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss the genuine trade-off between exchange-traded and over-the-counter (OTC) derivative contracts.",
          answer:
            "Exchange-traded contracts offer genuine standardisation, transparency, and reduced counterparty risk (via central clearing), while OTC contracts offer greater flexibility to tailor contract terms to specific needs, at the cost of typically greater counterparty risk and reduced price transparency. A party requiring a bespoke hedge (e.g. a specific maturity or notional not available on-exchange) may need to accept OTC's greater counterparty risk to achieve the precise exposure required.",
          note: "A strong answer names both sides of the trade-off and gives a genuine example of when OTC's flexibility might be worth its added risk.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why margining and settlement processes for exchange-traded futures are distinct from a contract's theoretical payoff structure.",
          answer:
            "Exchange-traded futures typically require posting and maintaining margin that is marked-to-market daily, with genuine cashflow implications for the holder distinct from the contract's eventual payoff at expiry, so understanding market mechanics is separate from understanding the contract's theoretical payoff.",
          note: "This connects directly to the mechanics-versus-payoff distinction developed in this course.",
        },
      ],
    },
    {
      id: "sp6-q2",
      title: "Forward pricing and hedging",
      modules: "Module 2",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A non-dividend-paying stock currently trades at £50. The continuously-compounded risk-free rate is 5% per annum. Calculate the fair forward price for delivery in 6 months.",
          answer:
            "$F = S_0 e^{rT} = 50 \\times e^{0.05 \\times 0.5} = 50 \\times e^{0.025} = £51.27$ (to the nearest penny).",
          note: "Arithmetic check: 50×e^(0.05×0.5)=51.2658. Full marks require setting up the no-arbitrage forward pricing formula explicitly.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why any forward price deviating from the figure calculated in part (i) would allow a risk-free arbitrage profit.",
          answer:
            "If the forward price were higher than $F = S_0 e^{rT}$, an arbitrageur could sell the forward, simultaneously buy the stock (financed by borrowing at the risk-free rate), and lock in a risk-free profit at maturity; if lower, the reverse strategy (buy the forward, short the stock, invest the proceeds) would achieve the same. Either way, this arbitrage activity would push the forward price back toward its no-arbitrage level.",
          note: "A strong answer explains the arbitrage mechanism in at least one direction explicitly, not just asserts that arbitrage 'would occur'.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why the payoff of the forward contract priced in part (i) is linear and symmetric, unlike an option's payoff.",
          answer:
            "The forward's payoff at maturity is $S_T - F$, a linear function of the underlying's price with unbounded upside <em>and</em> unbounded downside for the long holder, unlike an option's payoff of $\\max(S_T - K, 0)$ or $\\max(K - S_T, 0)$, which caps the holder's downside at the premium paid while retaining upside potential — a fundamentally different, asymmetric risk profile.",
          note: "A strong answer explicitly contrasts the mathematical payoff structures, not just asserts they are 'different'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on how an investor holding this stock could use a futures contract to hedge against a price fall over the next 6 months.",
          answer:
            "Selling (going short) a futures contract on the same underlying stock creates an offsetting position — if the stock's price falls, the loss on the physical holding is offset by the genuine gain on the short futures position, effectively locking in the stock's current value regardless of subsequent price movements.",
          note: "This connects directly to the hedging-with-futures material developed in this course.",
        },
      ],
    },
    {
      id: "sp6-q3",
      title: "Binomial option pricing",
      modules: "Module 4",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 6,
          question:
            "A non-dividend-paying stock currently trades at £100. Over the next year, its price will either rise to £110 (an 'up' move, $u = 1.1$) or fall to £90 (a 'down' move, $d = 0.9$). The continuously-compounded risk-free rate is 4% per annum. Using a one-step binomial model, calculate the risk-neutral probability of an up-move, and hence the fair price of a one-year European call option with strike price £100.",
          answer:
            "Risk-neutral probability $p = \\frac{e^{rT} - d}{u - d} = \\frac{e^{0.04} - 0.9}{1.1 - 0.9} = \\frac{1.0408 - 0.9}{0.2} = 0.7041$. Option payoffs: $C_u = \\max(110-100, 0) = £10$; $C_d = \\max(90-100, 0) = £0$. Fair price $= e^{-rT}(p \\times C_u + (1-p) \\times C_d) = e^{-0.04} \\times (0.7041 \\times 10 + 0.2959 \\times 0) = 0.9608 \\times 7.041 = £6.76$ (to the nearest penny).",
          note: "Arithmetic check: p=0.7041, C0=6.7645. Marks are typically split across the risk-neutral probability calculation, the payoff calculation, and the final discounted expected payoff.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the risk-neutral probability calculated in part (i) is used to price the option, rather than the market's genuine real-world assessment of the probability of an up-move.",
          answer:
            "Under the martingale (risk-neutral) probability measure, discounted asset prices behave as martingales, allowing the option's fair price to be calculated as the discounted expected payoff under this artificial measure, avoiding the need to know or estimate the underlying asset's true, real-world expected return — a powerful simplification since real-world probabilities are far harder to estimate reliably than risk-neutral ones, which are derived purely from observable market prices.",
          note: "A strong answer explains <em>why</em> risk-neutral pricing avoids needing the real-world probability, not just that it does.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 2,
          question:
            "Discuss what genuine replicating portfolio underlies the option price calculated in part (i).",
          answer:
            "A genuine replicating portfolio of the underlying stock and risk-free borrowing/lending can be constructed that exactly reproduces the option's payoff in both the up and down states; since this replicating portfolio and the option must therefore have the same genuine value today (otherwise a risk-free arbitrage would exist), the option's fair price equals the cost of constructing this replicating portfolio, which is exactly what the risk-neutral valuation formula calculates.",
          note: "This connects the numeric calculation directly to the replication-based pricing foundation developed in this course.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 1,
          question:
            "Comment on why extending this one-step model to many genuine time steps (a multi-step tree) would provide a more refined price estimate.",
          answer:
            "A multi-step tree captures a richer range of possible price paths and converges toward the continuous-time Black-Scholes result as the number of steps increases and each step's time interval shrinks, providing a more refined approximation than a single, coarse one-step model.",
          note: "This connects directly to the tree-as-multi-step-extension material developed in this course.",
        },
      ],
    },
    {
      id: "sp6-q4",
      title: "The Black-Scholes formula",
      modules: "Modules 5, 6, 7",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 6,
          question:
            "A non-dividend-paying stock trades at £100, with volatility 20% per annum. The risk-free rate is 5% per annum (continuously compounded). Using the Black-Scholes formula, calculate the price of a one-year European call option with strike price £100, given $d_1 = 0.3500$ and $d_2 = 0.1500$, and $N(d_1) = 0.6368$, $N(d_2) = 0.5596$.",
          answer:
            "$C = S_0 N(d_1) - Ke^{-rT}N(d_2) = 100 \\times 0.6368 - 100 \\times e^{-0.05} \\times 0.5596 = 63.68 - 95.12 \\times 0.5596 = 63.68 - 53.23 = £10.45$ (to the nearest penny).",
          note: "Arithmetic check: C=10.4506 (using the given d1/d2/N values). Full marks require correctly substituting into the Black-Scholes formula, not just stating the final figure.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question:
            "Using put-call parity, calculate the price of the equivalent European put option with the same strike and expiry.",
          answer:
            "Put-call parity: $P = C - S_0 + Ke^{-rT} = 10.4506 - 100 + 100 \\times e^{-0.05} = 10.4506 - 100 + 95.1229 = £5.57$ (to the nearest penny).",
          note: "Arithmetic check: P=5.5735.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 2,
          question:
            "Explain why $N(d_1)$ in part (i) can also be interpreted as the option's delta.",
          answer:
            "Delta measures how much the option's price changes per unit change in the underlying's price ($\\Delta = \\frac{\\partial C}{\\partial S}$); differentiating the Black-Scholes call formula with respect to $S_0$ shows this partial derivative equals exactly $N(d_1)$, so $N(d_1)$ serves the dual role of both a probability term in the pricing formula and the option's genuine hedge ratio.",
          note: "A strong answer connects the mathematical differentiation to the practical hedging interpretation.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 1,
          question:
            "Comment on why a genuine volatility smile in the market would mean the 20% volatility assumption used in part (i) may not be appropriate for options with different strike prices on the same stock.",
          answer:
            "The volatility smile describes the genuine empirical pattern where implied volatility varies systematically across different strike prices for the same underlying and expiry, directly contradicting Black-Scholes's assumption that volatility is a single, constant parameter applicable across all strikes.",
          note: "This connects directly to the volatility-smile-as-model-limitation theme developed in this course.",
        },
      ],
    },
    {
      id: "sp6-q5",
      title: "Numerical methods for derivative pricing",
      modules: "Module 10",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why Monte Carlo simulation is particularly well-suited to pricing an Asian option, but historically struggled with pricing American options.",
          answer:
            "Monte Carlo simulation naturally handles path-dependent payoffs like an Asian option's average-price payoff, since each simulation tracks a full price path, not just a final value. It historically struggled with American options because standard forward-simulation Monte Carlo only evaluates payoffs at final maturity, but American options require determining, at each point, whether immediate exercise is more valuable than continuing to hold — a different 'optimal stopping' problem forward simulation alone cannot directly solve.",
          note: "A strong answer explains both the genuine strength (path-dependency) and the genuine historical limitation (early exercise), not just one.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain how the Longstaff-Schwartz least-squares approach adapts Monte Carlo simulation to price American options.",
          answer:
            "The Longstaff-Schwartz approach uses regression at each simulated time step to estimate the genuine expected value of continuing to hold the option, comparing this against the value of exercising immediately at that point, allowing an informed, backward-looking optimal exercise decision to be estimated within an otherwise forward-simulating Monte Carlo framework.",
          note: "This connects directly to the Longstaff-Schwartz solution material developed in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss the genuine relative strengths of binomial/trinomial trees, Monte Carlo simulation, and finite difference methods for derivative pricing.",
          answer:
            "Trees are intuitive and handle American-style early exercise naturally through backward induction. Monte Carlo excels at high-dimensional and path-dependent problems but historically struggled with early exercise until adaptations like Longstaff-Schwartz. Finite difference methods directly solve the governing Black-Scholes-Merton PDE and handle certain boundary conditions well but can become computationally expensive in high dimensions. The choice of method should reflect the specific derivative's structural features (path-dependency, early exercise, dimensionality).",
          note: "A strong answer names a genuine relative strength/weakness for each of the three methods, not just describes what each method is.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why finite difference methods are directly linked to the Black-Scholes-Merton partial differential equation.",
          answer:
            "Finite difference methods numerically solve the Black-Scholes-Merton PDE directly, by discretising the underlying's price and time into a genuine grid and approximating the PDE's derivatives using differences between adjacent grid points, providing a numerical solution where a closed-form analytical solution is unavailable.",
          note: "This connects directly to the PDE-numerical-solution material developed in this course.",
        },
      ],
    },
    {
      id: "sp6-q6",
      title: "Interest rate derivatives and the Black model",
      modules: "Modules 11, 12",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain how an interest rate swap can be valued by treating it as the difference between a fixed-rate bond and a floating-rate bond.",
          answer:
            "An interest rate swap's value can be determined by treating it as the genuine difference between a fixed-rate bond (valuing the fixed leg) and a floating-rate bond (valuing the floating leg), each discounted using the appropriate zero-rate curve, with the swap's fair fixed rate set so the two legs have equal value at initiation.",
          note: "A strong answer explicitly names the bond-decomposition technique, not just asserts that swaps 'can be valued using discounting'.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain what the Black model is, and why it provides a practical framework for pricing interest rate derivatives despite genuine known limitations.",
          answer:
            "The Black model adapts the Black-Scholes framework's mathematical structure to price options on forward prices or rates, providing a practical, widely-used pricing approach for bond options, caps/floors and swaptions, even though its underlying lognormality assumption for interest rates is a genuine simplification not perfectly matching real interest rate behaviour.",
          note: "A strong answer explains both the practical value <em>and</em> acknowledges the genuine simplifying assumption's limitation.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss how a cap can be decomposed into individual caplets, and how this decomposition is used within the Black model to price the whole cap.",
          answer:
            "A cap protects the holder against rising interest rates by paying out if a reference rate exceeds a specified strike level at each of a series of future dates; a cap can be decomposed into a portfolio of individual caplets, each a simple interest-rate call option applying to a single future period. The Black model prices <em>each</em> caplet as an option on the relevant forward interest rate for its specific period, then sums these individual caplet values to obtain the whole cap's total price.",
          note: "A strong answer explains both the conceptual decomposition <em>and</em> how the Black model uses it practically, not just one or the other.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why an actuary applying the Black model should explicitly acknowledge its underlying assumptions, rather than applying it uncritically.",
          answer:
            "The Black model assumes the relevant forward rate is lognormally distributed with constant volatility, an assumption that, like Black-Scholes's own assumptions, may not perfectly hold in reality (e.g. genuine volatility smile effects), so a sound actuarial application should acknowledge these limitations rather than treating the model's output as unquestionably precise.",
          note: "This connects directly to the critical-model-awareness theme developed throughout this course.",
        },
      ],
    },
    {
      id: "sp6-q7",
      title: "Term structure models",
      modules: "Module 13",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Distinguish",
          marks: 3,
          question:
            "Distinguish between 'equilibrium' and 'no-arbitrage' term structure models, naming one example of each.",
          answer:
            "Equilibrium models (e.g. Vasicek) derive the term structure's shape from underlying economic assumptions about interest rate behaviour, potentially producing a model-implied curve that does not exactly match today's observed market curve. No-arbitrage models (e.g. Hull-White) are calibrated to exactly fit today's observed market curve by construction, prioritising consistency with current market prices.",
          note: "A complete answer distinguishes both categories <em>and</em> names a correct example of each.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain how the Cox-Ingersoll-Ross (CIR) model differs from the Vasicek model.",
          answer:
            "The CIR model's interest rate volatility depends on the current level of interest rates themselves (higher rates produce higher volatility), while Vasicek assumes constant volatility regardless of the rate level; CIR's structure also ensures interest rates cannot become negative, an advantage over Vasicek which theoretically permits negative rates.",
          note: "A strong answer names both distinguishing features (rate-dependent volatility and non-negativity), not just one.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss how the Heath-Jarrow-Morton (HJM) and LIBOR market models extend single-factor short-rate models like Hull-White, and one genuine problem with calibrating the LIBOR market model using Black's model.",
          answer:
            "HJM and LIBOR market models model the evolution of the whole forward rate curve (or a discrete set of forward LIBOR rates) simultaneously, rather than a single short-rate process, allowing richer, multi-factor modelling of how different parts of the yield curve can move independently. Calibrating the LIBOR market model using Black-implied volatilities (a practical market convention) can create genuine internal inconsistencies, since the LIBOR market model's own underlying dynamics don't necessarily support Black's simplifying lognormality assumption exactly.",
          note: "A strong answer explains both the genuine multi-factor extension <em>and</em> the genuine calibration tension, not just one.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why correlation plays a critical role in pricing a multi-name credit derivative (e.g. an nth-to-default basket) but not a single-name CDS.",
          answer:
            "A single-name CDS's payoff depends only on one reference entity's default, requiring no correlation assumption, while a multi-name basket's payoff depends on the <em>joint</em>, not just individual, default behaviour of multiple names, making the genuine correlation between different reference entities' default probabilities critically important for pricing.",
          note: "This connects directly to the correlation-critical-for-multi-name-instruments theme developed in this course.",
        },
      ],
    },
    {
      id: "sp6-q8",
      title: "Using derivatives and hedging with the Greeks",
      modules: "Module 8",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why an investor must assess how derivative use changes a portfolio's overall risk profile, rather than assessing each derivative position in isolation.",
          answer:
            "A derivative position's risk effect depends on how it interacts with the rest of the portfolio (e.g. a hedge reduces overall risk only if it offsets an existing exposure), so assessing derivative impact requires a portfolio-level view, not evaluating each derivative's standalone risk in isolation from everything else held.",
          note: "A strong answer explicitly explains why portfolio-level assessment is necessary, not just asserts that it should be done.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain what 'delta' measures, and why a delta-hedged position requires genuine ongoing rebalancing.",
          answer:
            "Delta ($\\Delta = \\frac{\\partial C}{\\partial S}$) quantifies how much the derivative's price changes per unit change in the underlying's price, so holding an offsetting position of $\\Delta$ units of the underlying creates a delta-neutral hedge; since delta itself changes as the underlying's price and time to expiry change, this hedge requires genuine ongoing rebalancing to remain effective (dynamic hedging).",
          note: "A strong answer explains both what delta measures <em>and</em> why the hedge requires rebalancing, not just one.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why exotic derivatives might require particular care when assessing their risk management characteristics, compared with standard vanilla options.",
          answer:
            "Exotic derivatives' more complex, sometimes discontinuous payoff structures (e.g. a barrier option's payoff jumping discontinuously when the barrier is touched) can produce Greeks that behave in unstable or non-intuitive ways near critical price levels, requiring particular care and more sophisticated risk management technique than a standard vanilla option's more smoothly-behaving Greeks.",
          note: "A strong answer connects the exotic payoff's structural complexity directly to the resulting Greeks-behaviour challenge.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why scenario analysis provides complementary insight to the Greeks when managing a portfolio of derivatives.",
          answer:
            "Scenario analysis projects a genuine portfolio's value under a range of specified future market conditions, revealing how the portfolio's Greeks-based sensitivities translate into genuine potential outcomes under realistic, combined market moves that a single Greek in isolation might not fully capture.",
          note: "This connects directly to the scenario-analysis-as-portfolio-level-complement theme developed in this course.",
        },
      ],
    },
    {
      id: "sp6-q9",
      title: "Risks in the use of derivatives",
      modules: "Modules 15, 17",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A £30,000,000 derivatives portfolio has a delta of 0.65 relative to its underlying, and the underlying has an annual return volatility of 18%. Using a delta-normal approach with a 99% confidence level (z-score of 2.326), calculate the portfolio's 1-year 99% Value at Risk.",
          answer:
            "VaR = &pound;30,000,000 &times; 0.65 &times; 18% &times; 2.326 = &pound;8,164,260 (to the nearest &pound;10). This means there is a 1% chance the portfolio loses more than approximately &pound;8.16 million over the year, based on this simplified delta-normal approximation.",
          note: "Arithmetic check: 30,000,000×0.65×0.18×2.326=8,164,260. This is a simplified delta-normal VaR approximation, treating the portfolio's exposure as linear via its delta, for illustrative purposes.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain one genuine weakness of the delta-normal VaR approach used in part (i) when applied to a portfolio containing options.",
          answer:
            "The delta-normal approach treats the portfolio's exposure as linear via its delta, but an options portfolio's true payoff is non-linear (the delta itself changes as the underlying moves), so this linear approximation can materially misstate genuine risk for large market moves, understating the portfolio's true tail risk compared with a method that properly captures this non-linearity (e.g. full Monte Carlo revaluation).",
          note: "A strong answer explicitly names the linear-approximation-versus-non-linear-payoff mismatch, not just asserts that VaR has 'limitations'.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss what 'basis risk' means in the context of a derivatives hedge, and why it could undermine this portfolio's risk management even after implementing a theoretically sound delta hedge.",
          answer:
            "Basis risk arises when the derivative used to hedge a specific exposure does not perfectly match that exposure, meaning the hedge's value may not move in perfect lockstep with the underlying exposure being hedged. Even a theoretically sound delta hedge calculated precisely (as in part (i)) could leave genuine residual risk if the actual hedging instrument's underlying doesn't perfectly correspond to the true exposure being managed.",
          note: "A strong answer explains why basis risk persists even given a technically correct delta calculation.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why ISDA agreements and collateral management address counterparty risk through different mechanisms.",
          answer:
            "ISDA agreements provide standardised legal documentation governing OTC derivative relationships, including provisions for netting offsetting exposures, while collateral management requires counterparties to post collateral reflecting their current mark-to-market exposure, reducing the genuine loss if a counterparty were to default — legal netting/standardisation versus genuine, tangible financial security.",
          note: "This connects directly to the complementary-counterparty-risk-mechanisms theme developed in this course.",
        },
      ],
    },
    {
      id: "sp6-q10",
      title: "Structured securities and special purpose vehicles",
      modules: "Modules 14, 16",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain what a Limited Price Indexation (LPI) swap is, and why it might provide a more precisely-matched hedge for a pension scheme than a simple, uncapped inflation swap.",
          answer:
            "An LPI swap exchanges cashflows linked to inflation subject to a cap and floor, matching many pension schemes' actual benefit increase structure (which is typically similarly capped and floored), providing a more precisely-matched hedge than a simple, uncapped inflation swap would, since the hedge's payoff structure directly mirrors the genuine liability structure being hedged.",
          note: "A strong answer explains <em>why</em> the capped/floored structure provides a better match, not just describes what an LPI swap is.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain how a special purpose vehicle (SPV) can be used as part of a risk transfer mechanism, and the genuine role a credit enhancement agency might play.",
          answer:
            "An SPV is a separate legal entity created specifically to hold and isolate certain assets or risks (e.g. issuing insurance-linked securities or securitised debt), ring-fencing this specific risk from the sponsoring institution's own broader balance sheet; a credit enhancement agency may provide additional genuine guarantees or support improving the SPV-issued securities' creditworthiness, making them more attractive to investors.",
          note: "A strong answer explains both the SPV's genuine risk-isolation role <em>and</em> the credit enhancement agency's role.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why a credit default swap (CDS) can be understood as functioning like an insurance contract, and how its fair premium (spread) is determined.",
          answer:
            "A CDS pays the protection buyer a genuine compensating payment if a specified reference entity experiences a credit event, in exchange for the buyer paying a regular premium (the CDS spread) to the protection seller — functioning like an insurance contract against credit risk. A single-name CDS is priced by setting its premium such that the expected present value of premium payments equals the expected present value of the contingent default payment, given assumed default probabilities and recovery rates, directly echoing the equivalence-principle pricing logic used across the actuarial curriculum.",
          note: "A strong answer explains both the insurance analogy <em>and</em> the genuine equivalence-principle-style pricing mechanism.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why an investor should not rely solely on external credit ratings when assessing counterparty risk on an OTC derivative position.",
          answer:
            "Credit ratings can be slow to reflect emerging changes in a counterparty's creditworthiness, and rating agencies' methodologies may not fully capture the specific counterparty risk profile relevant to a particular derivative exposure, so genuine independent assessment alongside rating agency output provides a more robust basis for managing counterparty risk.",
          note: "This connects directly to the credit-rating-agency-limitation theme developed elsewhere in this course.",
        },
      ],
    },
  ],
});

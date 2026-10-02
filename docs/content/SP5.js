// SP5 Investment and Finance Principles: flashcards and practice questions.
//
// Hand-edited. docs/content/README.md describes the format and its rules,
// above all that cards are append-only: a card's identity is its position.
// After editing, run: node scripts/build-catalog.mjs
registerContent("SP5", {
  modules: [
      {
          "id": "m01",
          "title": "Introduction to Subject SP5",
          "description": "SP5's aim and structure: the eight syllabus topics and their weightings, the link from CM2/CP1 to SA7, and the investment management control cycle that connects the course.",
          "cards": [
              {
                  "q": "What is the aim of SP5?",
                  "a": "To develop the ability to apply principles of investment management and financial theory to the needs of investors, including valuing investments, constructing and managing portfolios, and measuring performance.",
                  "explain": "Principles-based, like other SP subjects."
              },
              {
                  "q": "List SP5's syllabus topics.",
                  "a": "Economic, regulatory and legislative framework (10%); specialist investment products (15%); valuing investments (10%); monitoring and managing investment risks (10%); investor characteristics, behavioural finance and tax (10%); investment strategies (15%); portfolio management and risk control (15%); analysing performance (15%).",
                  "explain": "Weightings spread fairly evenly."
              },
              {
                  "q": "How does SP5 build on CM2?",
                  "a": "CM2 gives the financial economics theory (utility, portfolio theory, CAPM, derivatives pricing); SP5 applies it to practical investment management.",
                  "explain": "Theory plus practice."
              },
              {
                  "q": "How does SP5 relate to SA7?",
                  "a": "SA7 applies SP5 principles to complex investment and finance problems in practice.",
                  "explain": "SP→SA progression."
              },
              {
                  "q": "What are the main types of investor?",
                  "a": "Individuals, pension schemes, life insurers, general insurers, banks, charities, endowments, sovereign wealth funds, investment funds.",
                  "explain": "Each has different objectives and constraints."
              },
              {
                  "q": "What is the investment control cycle?",
                  "a": "Define objectives and constraints, set strategy, implement, monitor performance and risk, feed back.",
                  "explain": "Mirrors the actuarial control cycle."
              },
              {
                  "q": "Why do liabilities matter in investment?",
                  "a": "Institutional investors must invest to meet their liabilities, so strategy starts from liability characteristics.",
                  "explain": "Asset-liability approach."
              },
              {
                  "q": "What are the main investment objectives?",
                  "a": "Return, risk control, liquidity, meeting liabilities, and constraints like tax and regulation.",
                  "explain": "Balance return and risk."
              },
              {
                  "q": "What distinguishes strategic from tactical asset allocation?",
                  "a": "Strategic: long-term benchmark mix; tactical: short-term deviations to exploit opportunities.",
                  "explain": "Chapter 21–23."
              },
              {
                  "q": "Why is performance measurement important?",
                  "a": "To assess managers, strategies and value added.",
                  "explain": "Chapters 16–17."
              },
              {
                  "q": "What role do derivatives play in SP5?",
                  "a": "Hedging, efficient portfolio management, and gaining exposure.",
                  "explain": "Chapters 2, 3, 23."
              },
              {
                  "q": "What is meant by 'specialist asset classes'?",
                  "a": "Assets beyond traditional bonds/equities/property, e.g. hedge funds, private equity, infrastructure, ILS, structured products.",
                  "explain": "Chapters 4–5."
              },
              {
                  "q": "Why study behavioural finance?",
                  "a": "Investors' biases affect markets and decisions; understanding them improves advice and strategy.",
                  "explain": "Chapter 7."
              },
              {
                  "q": "What exam skills does SP5 need?",
                  "a": "Applying principles to investor scenarios, calculations of returns and values, and discussing pros and cons.",
                  "explain": "Application focus."
              },
              {
                  "q": "How is tax relevant in SP5?",
                  "a": "Taxation affects net returns and investor preferences for asset types.",
                  "explain": "Chapter 24."
              }
          ]
      },
      {
          "id": "m02",
          "title": "Derivatives (1)",
          "description": "The main types of derivative — forwards, futures, swaps and options — how they are traded (exchange versus OTC), their payoffs, margin and collateral, and the basic principles of pricing by no-arbitrage.",
          "cards": [
              {
                  "q": "What is a forward contract?",
                  "a": "An OTC agreement to buy or sell an asset at a fixed price on a future date.",
                  "explain": "Counterparty risk, customisable."
              },
              {
                  "q": "What is a futures contract?",
                  "a": "An exchange-traded standardised forward with daily margining through a clearing house.",
                  "explain": "Reduced counterparty risk."
              },
              {
                  "q": "What is margin in futures?",
                  "a": "Initial margin deposited and variation margin paid daily to reflect price changes.",
                  "explain": "Marking to market."
              },
              {
                  "q": "What is a swap?",
                  "a": "An agreement to exchange series of cash flows, e.g. fixed for floating interest.",
                  "explain": "Mostly OTC, often centrally cleared."
              },
              {
                  "q": "What is a call option?",
                  "a": "The right but not obligation to buy an asset at a strike price by/at expiry.",
                  "explain": "Payoff max(S − K, 0)."
              },
              {
                  "q": "What is a put option?",
                  "a": "The right to sell at the strike price.",
                  "explain": "Payoff max(K − S, 0)."
              },
              {
                  "q": "What is the difference between European and American options?",
                  "a": "European exercisable only at expiry; American any time up to expiry.",
                  "explain": "American worth at least as much."
              },
              {
                  "q": "What is the forward price of a non-income asset?",
                  "a": "$F = S_0 e^{rT}$ by no-arbitrage.",
                  "explain": "Cash-and-carry argument."
              },
              {
                  "q": "What is put-call parity?",
                  "a": "$c + Ke^{-rT} = p + S_0$ for European options on a non-dividend asset.",
                  "explain": "No-arbitrage relationship."
              },
              {
                  "q": "What is the advantage of exchange trading?",
                  "a": "Liquidity, transparency, reduced counterparty risk.",
                  "explain": "Standardisation limits flexibility."
              },
              {
                  "q": "What is the advantage of OTC trading?",
                  "a": "Tailored terms for specific needs.",
                  "explain": "Counterparty and liquidity risk; collateral agreements."
              },
              {
                  "q": "What is an interest rate swap used for?",
                  "a": "Changing exposure from fixed to floating rates or hedging liability duration.",
                  "explain": "LDI use."
              },
              {
                  "q": "What is a currency swap?",
                  "a": "Exchange of principal and interest in different currencies.",
                  "explain": "Hedging foreign debt."
              },
              {
                  "q": "What is a swaption?",
                  "a": "An option to enter a swap.",
                  "explain": "Used to hedge interest rate guarantees."
              },
              {
                  "q": "What is the payoff of a long forward?",
                  "a": "$S_T - F$.",
                  "explain": "Linear, symmetric."
              }
          ]
      },
      {
          "id": "m03",
          "title": "Derivatives (2)",
          "description": "Further derivatives: credit derivatives (CDS, CDOs), inflation and currency derivatives, exotic and structured features, the Black-Scholes framework and Greeks in outline, and how investment managers use derivatives for hedging, efficient portfolio management and exposure.",
          "cards": [
              {
                  "q": "What is a credit default swap (CDS)?",
                  "a": "A contract where the protection buyer pays a premium and receives compensation if a reference entity defaults.",
                  "explain": "Transfers credit risk."
              },
              {
                  "q": "What is a CDO?",
                  "a": "A structure pooling debt instruments and issuing tranches with different seniority to credit losses.",
                  "explain": "Tranching concentrates risk."
              },
              {
                  "q": "What is an inflation swap?",
                  "a": "Exchanging fixed payments for inflation-linked payments.",
                  "explain": "Hedges inflation-linked liabilities."
              },
              {
                  "q": "How can an investment manager use derivatives?",
                  "a": "Hedging risks, changing asset allocation quickly and cheaply, gaining exposure, enhancing income (e.g. covered calls), efficient portfolio management.",
                  "explain": "Syllabus 2.2."
              },
              {
                  "q": "What are the Greeks?",
                  "a": "Sensitivities of option values: delta (to underlying), gamma (delta's sensitivity), vega (volatility), theta (time), rho (interest rates).",
                  "explain": "Used for hedging."
              },
              {
                  "q": "What is delta hedging?",
                  "a": "Holding a position in the underlying to offset an option's delta.",
                  "explain": "Needs rebalancing."
              },
              {
                  "q": "What does Black-Scholes assume?",
                  "a": "Lognormal prices, constant volatility and interest rates, continuous trading, no transaction costs, no arbitrage.",
                  "explain": "Assumptions rarely hold exactly."
              },
              {
                  "q": "What is implied volatility?",
                  "a": "The volatility that equates the model price to the market price.",
                  "explain": "Market's volatility estimate."
              },
              {
                  "q": "What is a covered call strategy?",
                  "a": "Holding an asset and selling a call on it for premium income.",
                  "explain": "Caps upside."
              },
              {
                  "q": "What is a protective put?",
                  "a": "Holding an asset and buying a put to limit downside.",
                  "explain": "Insurance-like."
              },
              {
                  "q": "What are the risks of derivatives for investors?",
                  "a": "Counterparty, leverage, liquidity/collateral, basis, model and operational risks.",
                  "explain": "Governance needed."
              },
              {
                  "q": "What is a total return swap?",
                  "a": "Exchanging the total return on an asset for a floating rate.",
                  "explain": "Synthetic exposure."
              },
              {
                  "q": "What is a currency forward used for?",
                  "a": "Hedging foreign currency exposure.",
                  "explain": "Chapter 23."
              },
              {
                  "q": "What is basis risk?",
                  "a": "Hedge and hedged item not moving exactly together.",
                  "explain": "Imperfect hedge."
              },
              {
                  "q": "What is central clearing?",
                  "a": "OTC derivatives cleared through a central counterparty to reduce counterparty risk.",
                  "explain": "Regulatory reform after 2008."
              }
          ]
      },
      {
          "id": "m04",
          "title": "Specialist asset classes (1)",
          "description": "Specialist instruments part 1: short-term lending and borrowing instruments, corporate debt, private debt, asset-backed securities and securitisation, and credit derivatives — their characteristics and suitability for different investors.",
          "cards": [
              {
                  "q": "List short-term lending/borrowing instruments.",
                  "a": "Treasury bills, commercial paper, certificates of deposit, repos, money market deposits.",
                  "explain": "Liquidity management."
              },
              {
                  "q": "What is a repo?",
                  "a": "Sale of securities with agreement to repurchase, effectively a secured loan.",
                  "explain": "Used for leverage and liquidity."
              },
              {
                  "q": "What are the characteristics of corporate bonds?",
                  "a": "Higher yield than government bonds reflecting credit and liquidity risk; covenants; seniority.",
                  "explain": "Credit analysis needed."
              },
              {
                  "q": "What is private debt?",
                  "a": "Loans or bonds not publicly traded, e.g. direct lending to mid-sized companies.",
                  "explain": "Illiquidity premium."
              },
              {
                  "q": "What is securitisation?",
                  "a": "Pooling assets (e.g. mortgages) and issuing securities backed by their cash flows.",
                  "explain": "Transfers risk to investors."
              },
              {
                  "q": "What are asset-backed securities (ABS)?",
                  "a": "Securities backed by pools of loans or receivables.",
                  "explain": "Prepayment and credit risk."
              },
              {
                  "q": "What are the benefits of securitisation to the originator?",
                  "a": "Frees capital, provides funding, transfers risk.",
                  "explain": "Moral hazard risks."
              },
              {
                  "q": "What are risks to ABS investors?",
                  "a": "Credit risk of underlying pool, prepayment, complexity, liquidity, model risk.",
                  "explain": "2008 crisis lessons."
              },
              {
                  "q": "What is tranching?",
                  "a": "Dividing securities into seniority levels absorbing losses in order.",
                  "explain": "Senior tranches safer."
              },
              {
                  "q": "What is a covered bond?",
                  "a": "A bond secured on a pool of assets that remains on the issuer's balance sheet, with recourse to the issuer.",
                  "explain": "Dual recourse."
              },
              {
                  "q": "How are credit derivatives used by investors?",
                  "a": "To hedge credit exposure or gain credit exposure synthetically.",
                  "explain": "CDS."
              },
              {
                  "q": "What is a high-yield bond?",
                  "a": "A bond rated below investment grade.",
                  "explain": "Higher default risk."
              },
              {
                  "q": "Why might insurers like private debt?",
                  "a": "Illiquidity premium matches long-term illiquid liabilities.",
                  "explain": "Matching adjustment eligibility."
              },
              {
                  "q": "What is commercial paper?",
                  "a": "Short-term unsecured corporate debt.",
                  "explain": "Money market."
              },
              {
                  "q": "What is a floating rate note?",
                  "a": "A bond with coupons linked to a reference rate.",
                  "explain": "Low interest rate duration."
              }
          ]
      },
      {
          "id": "m05",
          "title": "Specialist asset classes (2)",
          "description": "Specialist instruments part 2: venture capital and private equity, hedge funds, currency, infrastructure, commodities, insurance-linked securities, structured products and new ways of investing in old asset classes (ETFs, smart beta).",
          "cards": [
              {
                  "q": "What is venture capital?",
                  "a": "Investment in early-stage unlisted companies with high growth potential.",
                  "explain": "High risk, illiquid."
              },
              {
                  "q": "What is private equity?",
                  "a": "Investment in unlisted companies, often via buyouts, through funds with long lock-ups.",
                  "explain": "J-curve returns."
              },
              {
                  "q": "What are hedge funds?",
                  "a": "Lightly regulated pooled funds using varied strategies (long/short, arbitrage, macro), often with leverage and performance fees.",
                  "explain": "Diversification claims vs fees."
              },
              {
                  "q": "Is currency an asset class?",
                  "a": "Currency can be managed for return (currency overlay) though it has no intrinsic long-term return.",
                  "explain": "Mostly a risk to hedge."
              },
              {
                  "q": "What are infrastructure investments?",
                  "a": "Long-term assets like utilities, toll roads, with stable, often inflation-linked cash flows.",
                  "explain": "Suits long-term investors."
              },
              {
                  "q": "How can investors gain commodity exposure?",
                  "a": "Futures, commodity funds, ETFs, equities of producers.",
                  "explain": "Roll yield matters."
              },
              {
                  "q": "What are insurance-linked securities (ILS)?",
                  "a": "Securities whose returns depend on insurance events, e.g. catastrophe bonds.",
                  "explain": "Low correlation with markets."
              },
              {
                  "q": "What is a catastrophe bond?",
                  "a": "A bond where principal is lost if a specified catastrophe occurs.",
                  "explain": "High yield for risk."
              },
              {
                  "q": "What are structured products?",
                  "a": "Packaged products combining bonds and derivatives to give tailored payoffs (e.g. capital protection with equity upside).",
                  "explain": "Complexity and counterparty risk."
              },
              {
                  "q": "What is an ETF?",
                  "a": "Exchange-traded fund tracking an index, traded like a share.",
                  "explain": "Low cost, liquid."
              },
              {
                  "q": "What is smart beta?",
                  "a": "Index strategies weighting by factors other than market cap (value, low volatility).",
                  "explain": "New way of investing in old assets."
              },
              {
                  "q": "What are the risks of hedge funds?",
                  "a": "Leverage, opacity, liquidity restrictions, fees, manager risk.",
                  "explain": "Due diligence."
              },
              {
                  "q": "What is the J-curve in private equity?",
                  "a": "Negative early returns (fees, investments) before later gains.",
                  "explain": "Timing."
              },
              {
                  "q": "Why might investors use listed alternatives?",
                  "a": "Liquidity and transparency while accessing alternative exposures.",
                  "explain": "Correlation with equities."
              },
              {
                  "q": "What suitability factors apply to specialist assets?",
                  "a": "Investor's liquidity needs, risk appetite, governance capacity, regulatory limits, fees.",
                  "explain": "Syllabus 2.1 — suitability."
              }
          ]
      },
      {
          "id": "m06",
          "title": "Economic influences",
          "description": "Influences on the commercial and economic environment for investment: central banks and monetary policy, fiscal and government policy, the main investor classes, and how economic variables drive asset returns.",
          "cards": [
              {
                  "q": "How do central banks influence markets?",
                  "a": "Setting interest rates, quantitative easing/tightening, forward guidance, and financial stability measures.",
                  "explain": "Syllabus 1.1."
              },
              {
                  "q": "What is quantitative easing?",
                  "a": "Central bank purchases of assets to lower long-term yields and increase liquidity.",
                  "explain": "Raises asset prices."
              },
              {
                  "q": "How does government fiscal policy affect markets?",
                  "a": "Borrowing affects bond supply and yields; tax and spending affect growth.",
                  "explain": "Crowding out."
              },
              {
                  "q": "Who are the main investor classes?",
                  "a": "Pension funds, insurers, investment funds, banks, sovereign wealth funds, retail investors, hedge funds.",
                  "explain": "Their behaviour moves markets."
              },
              {
                  "q": "How does inflation affect asset classes?",
                  "a": "Hurts fixed bonds; equities and real assets provide partial protection over the long term.",
                  "explain": "Index-linked bonds hedge."
              },
              {
                  "q": "How does economic growth affect equities?",
                  "a": "Higher growth increases corporate earnings and equity prices.",
                  "explain": "Cyclical sectors."
              },
              {
                  "q": "How do interest rates affect bond prices?",
                  "a": "Rising rates lower bond prices.",
                  "explain": "Duration."
              },
              {
                  "q": "How do exchange rates affect investments?",
                  "a": "Change domestic value of overseas assets and competitiveness of companies.",
                  "explain": "Currency risk."
              },
              {
                  "q": "What is the yield curve?",
                  "a": "Relationship between yields and maturities.",
                  "explain": "Reflects expectations and risk premiums."
              },
              {
                  "q": "How can government regulation affect markets?",
                  "a": "Capital rules for insurers/banks change demand for assets.",
                  "explain": "E.g. Solvency II and bonds."
              },
              {
                  "q": "What is the role of investor sentiment?",
                  "a": "Can drive prices away from fundamentals in the short term.",
                  "explain": "Behavioural finance."
              },
              {
                  "q": "How can demographic trends affect markets?",
                  "a": "Ageing increases demand for income assets and bonds.",
                  "explain": "Long-term influence."
              },
              {
                  "q": "What is the effect of central bank independence?",
                  "a": "Improves inflation credibility, lowers inflation risk premiums.",
                  "explain": "Anchored expectations."
              },
              {
                  "q": "How do commodity prices affect economies?",
                  "a": "Affect inflation and producers' growth.",
                  "explain": "Terms of trade."
              },
              {
                  "q": "How do political events affect markets?",
                  "a": "Increase uncertainty and risk premiums.",
                  "explain": "Political risk."
              }
          ]
      },
      {
          "id": "m07",
          "title": "The theory of finance",
          "description": "Financial theory applied to investment: efficient markets, CAPM and multifactor models in outline, the key findings of behavioural finance and how they apply to different investors, and the main steps in financial planning.",
          "cards": [
              {
                  "q": "What are the three forms of the efficient markets hypothesis?",
                  "a": "Weak (prices reflect past prices), semi-strong (all public information), strong (all information).",
                  "explain": "Implications for active management."
              },
              {
                  "q": "What does CAPM say?",
                  "a": "Expected return = risk-free rate + beta × market risk premium.",
                  "explain": "Only systematic risk is rewarded."
              },
              {
                  "q": "What is behavioural finance?",
                  "a": "The study of how psychological biases affect financial decisions and markets.",
                  "explain": "Syllabus 5.1."
              },
              {
                  "q": "Give four behavioural biases.",
                  "a": "Overconfidence, loss aversion, anchoring, herding, mental accounting, framing, confirmation bias, myopia.",
                  "explain": "Affect investors of all types."
              },
              {
                  "q": "How can loss aversion affect investors?",
                  "a": "They hold losing investments too long and avoid risk after losses.",
                  "explain": "Disposition effect."
              },
              {
                  "q": "How can herding affect markets?",
                  "a": "Causes bubbles and crashes as investors follow others.",
                  "explain": "Momentum."
              },
              {
                  "q": "How do biases apply to institutional investors?",
                  "a": "Career risk leads to herding and benchmark-hugging; short-termism.",
                  "explain": "Different from individuals."
              },
              {
                  "q": "What is prospect theory?",
                  "a": "People value gains and losses relative to a reference point, with losses weighing more.",
                  "explain": "Kahneman–Tversky."
              },
              {
                  "q": "List the main steps in financial planning.",
                  "a": "Establish relationship; gather data and objectives; analyse position; develop recommendations; implement; monitor and review.",
                  "explain": "Syllabus 5.2."
              },
              {
                  "q": "What is the arbitrage pricing theory?",
                  "a": "Returns driven by several systematic factors, priced by no-arbitrage.",
                  "explain": "Multifactor basis."
              },
              {
                  "q": "What evidence challenges EMH?",
                  "a": "Anomalies like momentum, value premium, small-cap effect, bubbles.",
                  "explain": "Debate continues."
              },
              {
                  "q": "What is mental accounting?",
                  "a": "Treating money differently depending on its source or intended use.",
                  "explain": "Suboptimal allocation."
              },
              {
                  "q": "How can advisers counter biases?",
                  "a": "Structured processes, default options, education, framing.",
                  "explain": "Nudges."
              },
              {
                  "q": "What is overconfidence?",
                  "a": "Overestimating one's knowledge or ability, leading to excessive trading.",
                  "explain": "Lower returns."
              },
              {
                  "q": "Why is myopic loss aversion relevant to pensions?",
                  "a": "Frequent evaluation makes investors avoid equities despite long horizons.",
                  "explain": "Affects DC members."
              }
          ]
      },
      {
          "id": "m08",
          "title": "Regulation of financial services",
          "description": "The legislative and regulatory framework for investment management and the securities industry: aims of regulation, regulators and approaches, provision of financial services, conduct rules, competition and fair trading, and monopolies regulation.",
          "cards": [
              {
                  "q": "What are the aims of financial regulation?",
                  "a": "Protect consumers, maintain market integrity, promote competition, ensure financial stability.",
                  "explain": "Syllabus 1.2."
              },
              {
                  "q": "What is prudential regulation?",
                  "a": "Ensuring firms are financially sound (capital, liquidity).",
                  "explain": "Protects against failure."
              },
              {
                  "q": "What is conduct regulation?",
                  "a": "Ensuring firms treat customers fairly and markets function properly.",
                  "explain": "Suitability, disclosure."
              },
              {
                  "q": "What is the role of competition regulation?",
                  "a": "Preventing anti-competitive practices and abuse of dominance.",
                  "explain": "Monopolies regulators."
              },
              {
                  "q": "What is market abuse?",
                  "a": "Insider dealing, market manipulation, misleading statements.",
                  "explain": "Criminal and civil sanctions."
              },
              {
                  "q": "How is the provision of financial services regulated?",
                  "a": "Authorisation of firms, approved persons, conduct rules, complaints handling, compensation schemes.",
                  "explain": "Syllabus 1.2."
              },
              {
                  "q": "What is suitability?",
                  "a": "Advice or products must be appropriate to the client's needs and risk profile.",
                  "explain": "Conduct requirement."
              },
              {
                  "q": "What is a compensation scheme?",
                  "a": "A scheme compensating investors if an authorised firm fails.",
                  "explain": "Consumer protection."
              },
              {
                  "q": "What is self-regulation?",
                  "a": "Industry bodies setting standards.",
                  "explain": "Complements statutory regulation."
              },
              {
                  "q": "What is the role of fair trading controls?",
                  "a": "Ensuring transparent, orderly trading and fair prices.",
                  "explain": "Best execution."
              },
              {
                  "q": "What is best execution?",
                  "a": "Obligation to obtain the best possible result for clients when executing orders.",
                  "explain": "Conduct rule."
              },
              {
                  "q": "Why regulate investment advisers?",
                  "a": "Information asymmetry between advisers and clients.",
                  "explain": "Consumer protection."
              },
              {
                  "q": "How does regulation affect costs?",
                  "a": "Compliance costs raise product costs.",
                  "explain": "Trade-off."
              },
              {
                  "q": "What is disclosure regulation?",
                  "a": "Requiring clear information on costs, risks and performance.",
                  "explain": "Informed decisions."
              },
              {
                  "q": "What is the risk of over-regulation?",
                  "a": "Reduced innovation and competition, higher costs.",
                  "explain": "Balance."
              }
          ]
      },
      {
          "id": "m09",
          "title": "Impact of the legislative and regulatory framework (1)",
          "description": "How legislation and regulation affect investment practice (part 1): corporate governance and stewardship, the listing authority and listing rules, investment restrictions in agreements, and institutional investment practices.",
          "cards": [
              {
                  "q": "What is corporate governance?",
                  "a": "The system by which companies are directed and controlled, balancing shareholder and stakeholder interests.",
                  "explain": "Syllabus 1.2."
              },
              {
                  "q": "What is the role of a listings authority?",
                  "a": "Approving securities for listing, setting listing rules on disclosure and governance.",
                  "explain": "Investor protection."
              },
              {
                  "q": "What are listing rules?",
                  "a": "Requirements on disclosure, governance and conduct for listed companies.",
                  "explain": "Transparency."
              },
              {
                  "q": "What is stewardship?",
                  "a": "Institutional investors' responsible allocation, management and oversight of capital, including engagement and voting.",
                  "explain": "Stewardship codes."
              },
              {
                  "q": "What are investment restrictions in investment agreements?",
                  "a": "Limits in mandates on asset classes, concentrations, derivatives use, credit quality.",
                  "explain": "Syllabus 1.2."
              },
              {
                  "q": "How do institutional practices develop under regulation?",
                  "a": "Rules shape asset allocation (e.g. insurers' capital charges), reporting and governance.",
                  "explain": "Institutional investment practices."
              },
              {
                  "q": "What is shareholder activism?",
                  "a": "Investors using voting and engagement to influence company management.",
                  "explain": "Governance tool."
              },
              {
                  "q": "Why do governance codes matter to investors?",
                  "a": "Well-governed companies may be less risky and more valuable.",
                  "explain": "ESG link."
              },
              {
                  "q": "What is a 'comply or explain' approach?",
                  "a": "Companies either comply with a code or explain why not.",
                  "explain": "Flexibility with transparency."
              },
              {
                  "q": "How do regulations restrict pension investments?",
                  "a": "Limits on employer-related investment, prudent person principle.",
                  "explain": "Pension-specific."
              },
              {
                  "q": "How do regulations affect insurer investments?",
                  "a": "Capital charges on risky assets, matching requirements.",
                  "explain": "Solvency II."
              },
              {
                  "q": "What is an investment management agreement?",
                  "a": "Contract setting the mandate, benchmark, restrictions and fees.",
                  "explain": "Governs the manager."
              },
              {
                  "q": "How do voting rights affect investors?",
                  "a": "Allow influence on major decisions.",
                  "explain": "Stewardship."
              },
              {
                  "q": "What is the role of proxy advisers?",
                  "a": "Advise institutional investors on voting.",
                  "explain": "Influence concerns."
              },
              {
                  "q": "How can regulation affect market liquidity?",
                  "a": "Capital rules may reduce dealers' market-making.",
                  "explain": "Unintended consequences."
              }
          ]
      },
      {
          "id": "m10",
          "title": "Impact of the legislative and regulatory framework (2)",
          "description": "How legislation and regulation affect investment (part 2): environmental, social and governance factors, ethical issues, sustainability disclosure, and the development of international accounting standards.",
          "cards": [
              {
                  "q": "What are ESG factors?",
                  "a": "Environmental, social and governance considerations affecting investment risk and return.",
                  "explain": "Syllabus 1.2."
              },
              {
                  "q": "Why might ESG be financially material?",
                  "a": "Climate, regulatory, reputational and governance risks can affect company value.",
                  "explain": "Risk management."
              },
              {
                  "q": "What approaches exist to ESG investing?",
                  "a": "Exclusion/screening, ESG integration, best-in-class, thematic/impact investing, engagement.",
                  "explain": "Different objectives."
              },
              {
                  "q": "What are ethical issues in investment?",
                  "a": "Investing in controversial sectors, conflicts of interest, fair treatment of clients.",
                  "explain": "Syllabus 1.2."
              },
              {
                  "q": "What is greenwashing?",
                  "a": "Overstating a product's sustainability credentials.",
                  "explain": "Regulatory focus."
              },
              {
                  "q": "What is sustainability disclosure regulation?",
                  "a": "Requirements to disclose how ESG risks are considered (e.g. TCFD, SFDR).",
                  "explain": "Transparency."
              },
              {
                  "q": "Why do international accounting standards matter to investors?",
                  "a": "Comparable financial statements improve analysis and valuation.",
                  "explain": "IFRS development."
              },
              {
                  "q": "How can accounting standards affect investment behaviour?",
                  "a": "Fair value accounting increases volatility; insurers and pensions may adjust strategies.",
                  "explain": "IFRS 9/17."
              },
              {
                  "q": "What is impact investing?",
                  "a": "Investing for measurable social or environmental impact alongside return.",
                  "explain": "Additionality."
              },
              {
                  "q": "How can engagement differ from divestment?",
                  "a": "Engagement seeks change as owner; divestment exits.",
                  "explain": "Debate."
              },
              {
                  "q": "What is climate transition risk?",
                  "a": "Loss from policy and technology changes in moving to low-carbon economy.",
                  "explain": "Stranded assets."
              },
              {
                  "q": "What is fiduciary duty in ESG context?",
                  "a": "Trustees must consider financially material ESG factors.",
                  "explain": "Legal interpretation."
              },
              {
                  "q": "How can ESG data limitations affect investors?",
                  "a": "Inconsistent ratings and data quality hamper analysis.",
                  "explain": "Challenge."
              },
              {
                  "q": "What is the role of IFRS?",
                  "a": "Common global accounting standards for listed companies.",
                  "explain": "Comparability."
              },
              {
                  "q": "How can ethical preferences be accommodated?",
                  "a": "Screened funds, member choice options.",
                  "explain": "Suitability."
              }
          ]
      },
      {
          "id": "m11",
          "title": "Fundamental analysis",
          "description": "Fundamental analysis of equities and bonds: factors affecting equity prices, company and financial statement analysis, ratio analysis, credit analysis of bonds, and the role and limitations of credit rating agencies.",
          "cards": [
              {
                  "q": "What is fundamental analysis?",
                  "a": "Estimating intrinsic value from economic, industry and company fundamentals.",
                  "explain": "Syllabus 3.1."
              },
              {
                  "q": "What factors affect equity prices?",
                  "a": "Earnings and dividend expectations, growth, risk, interest rates, sentiment, economic conditions.",
                  "explain": "Syllabus 3.1."
              },
              {
                  "q": "List key financial ratios in equity analysis.",
                  "a": "P/E ratio, dividend yield, price-to-book, EV/EBITDA, return on equity, gearing, interest cover.",
                  "explain": "Comparisons."
              },
              {
                  "q": "What is credit analysis?",
                  "a": "Assessing the issuer's ability and willingness to pay debt obligations.",
                  "explain": "Syllabus 3.1."
              },
              {
                  "q": "What factors are in credit analysis?",
                  "a": "Cash flow, leverage, interest cover, business risk, management, covenants, industry.",
                  "explain": "Qualitative and quantitative."
              },
              {
                  "q": "What is the role of credit rating agencies?",
                  "a": "Providing independent assessments of credit quality.",
                  "explain": "Syllabus 3.1."
              },
              {
                  "q": "What are criticisms of rating agencies?",
                  "a": "Conflicts (issuer pays), slow downgrades, mis-rating structured products.",
                  "explain": "2008 crisis."
              },
              {
                  "q": "What is top-down analysis?",
                  "a": "Starting from economy to sectors to companies.",
                  "explain": "Contrast bottom-up."
              },
              {
                  "q": "What is bottom-up analysis?",
                  "a": "Focusing on individual companies' fundamentals.",
                  "explain": "Stock-picking."
              },
              {
                  "q": "What is a P/E ratio?",
                  "a": "Share price divided by earnings per share.",
                  "explain": "Valuation multiple."
              },
              {
                  "q": "What is gearing?",
                  "a": "Debt relative to equity or capital.",
                  "explain": "Financial risk."
              },
              {
                  "q": "Why is cash flow analysis important?",
                  "a": "Earnings can be manipulated; cash flow shows ability to pay.",
                  "explain": "Quality of earnings."
              },
              {
                  "q": "What is a bond covenant?",
                  "a": "Contractual restrictions protecting bondholders.",
                  "explain": "Credit protection."
              },
              {
                  "q": "What is the credit spread?",
                  "a": "Yield difference between a corporate and government bond.",
                  "explain": "Default + liquidity + risk premium."
              },
              {
                  "q": "How can sector analysis help?",
                  "a": "Industries differ in cyclicality, growth and risk.",
                  "explain": "Industry classification (Chapter 14)."
              }
          ]
      },
      {
          "id": "m12",
          "title": "Valuation of investments (1)",
          "description": "Valuing individual investments: discounted cash flow valuation of bonds and equities, fixed income analytics (yields, duration, convexity), valuing interest rate swaps and futures, and arbitrage pricing and hedging.",
          "cards": [
              {
                  "q": "How is a bond valued by DCF?",
                  "a": "Present value of coupons and redemption at an appropriate discount rate or spot curve.",
                  "explain": "Syllabus 3.2."
              },
              {
                  "q": "What is yield to maturity?",
                  "a": "The discount rate equating the bond price with the present value of cash flows.",
                  "explain": "Internal rate of return."
              },
              {
                  "q": "What is duration?",
                  "a": "Weighted average time to cash flows (Macaulay) or price sensitivity to yield (modified).",
                  "explain": "Interest rate risk."
              },
              {
                  "q": "What is convexity?",
                  "a": "The curvature of the price-yield relationship.",
                  "explain": "Second-order sensitivity."
              },
              {
                  "q": "How is an equity valued by the dividend discount model?",
                  "a": "Present value of expected future dividends, e.g. $P = D_1/(r - g)$ for constant growth.",
                  "explain": "Gordon growth model."
              },
              {
                  "q": "How is an interest rate swap valued?",
                  "a": "As the difference between the value of a fixed-rate bond and a floating-rate bond.",
                  "explain": "Or as a series of forward contracts."
              },
              {
                  "q": "How are futures valued?",
                  "a": "At zero at inception; value changes with futures price, settled daily.",
                  "explain": "Pricing via cost of carry."
              },
              {
                  "q": "What is arbitrage pricing?",
                  "a": "Pricing an asset by constructing a replicating portfolio with the same payoffs.",
                  "explain": "Law of one price."
              },
              {
                  "q": "What is hedging?",
                  "a": "Taking offsetting positions to reduce risk.",
                  "explain": "Syllabus 3.2."
              },
              {
                  "q": "What is a spot rate?",
                  "a": "The yield on a zero-coupon bond of a given maturity.",
                  "explain": "Used for discounting."
              },
              {
                  "q": "What is a forward rate?",
                  "a": "The implied future rate between two dates from spot rates.",
                  "explain": "Term structure."
              },
              {
                  "q": "How does credit risk affect bond valuation?",
                  "a": "Higher discount rates or expected default losses reduce value.",
                  "explain": "Spread."
              },
              {
                  "q": "What is the effect of callable features on bond value?",
                  "a": "Reduces value to investor since issuer can redeem when favourable.",
                  "explain": "Negative convexity."
              },
              {
                  "q": "What is the price of a zero-coupon bond?",
                  "a": "Face value discounted at the spot rate for its maturity.",
                  "explain": "Simplest bond."
              },
              {
                  "q": "Why is DCF valuation sensitive?",
                  "a": "Small changes in discount rate or growth assumptions change value significantly.",
                  "explain": "Sensitivity analysis."
              }
          ]
      },
      {
          "id": "m13",
          "title": "Valuation of investments (2)",
          "description": "Further valuation topics: empirical characteristics of asset prices (fat tails, volatility clustering, mean reversion), fixed income option pricing, evaluating securitisations and credit derivatives, and valuing property and unquoted investments.",
          "cards": [
              {
                  "q": "What are empirical characteristics of asset prices?",
                  "a": "Fat tails, volatility clustering, skewness, mean reversion over long periods, momentum in short term, correlations rising in crises.",
                  "explain": "Syllabus 3.2."
              },
              {
                  "q": "Why do fat tails matter?",
                  "a": "Extreme losses are more likely than normal models suggest.",
                  "explain": "Risk management."
              },
              {
                  "q": "How are fixed income options priced?",
                  "a": "Using interest rate models (e.g. Black model, term structure models) calibrated to market.",
                  "explain": "Syllabus 3.2."
              },
              {
                  "q": "How is a securitisation evaluated?",
                  "a": "Analyse collateral quality, cash flow waterfall, credit enhancement, prepayment and default scenarios.",
                  "explain": "Syllabus 3.2."
              },
              {
                  "q": "How is a credit derivative evaluated?",
                  "a": "Using default probabilities and recovery rates to value protection payments versus premiums.",
                  "explain": "CDS pricing."
              },
              {
                  "q": "How is property valued?",
                  "a": "Using comparable transactions or DCF of rental income.",
                  "explain": "Appraisal-based."
              },
              {
                  "q": "How are unquoted shares valued?",
                  "a": "Using comparable multiples, DCF, or net assets, with illiquidity discounts.",
                  "explain": "Subjective."
              },
              {
                  "q": "What is the Black model?",
                  "a": "An adaptation of Black-Scholes for options on futures/forwards, used for caps and swaptions.",
                  "explain": "Market standard."
              },
              {
                  "q": "What is prepayment risk?",
                  "a": "Borrowers repaying early, altering cash flows of mortgage-backed securities.",
                  "explain": "Negative convexity."
              },
              {
                  "q": "What is credit enhancement?",
                  "a": "Features protecting senior investors, e.g. subordination, overcollateralisation.",
                  "explain": "Securitisation."
              },
              {
                  "q": "What is the recovery rate?",
                  "a": "Proportion of exposure recovered after default.",
                  "explain": "CDS pricing input."
              },
              {
                  "q": "What is volatility clustering?",
                  "a": "Periods of high volatility tend to follow each other.",
                  "explain": "GARCH models."
              },
              {
                  "q": "Why is mean reversion relevant?",
                  "a": "Suggests long-term investors can tolerate short-term volatility.",
                  "explain": "Debated."
              },
              {
                  "q": "What is a waterfall in securitisation?",
                  "a": "The order in which cash flows are allocated to tranches.",
                  "explain": "Senior first."
              },
              {
                  "q": "Why is valuation of illiquid assets uncertain?",
                  "a": "Infrequent transactions and appraisal smoothing.",
                  "explain": "Stale prices."
              }
          ]
      },
      {
          "id": "m14",
          "title": "Industry classification",
          "description": "Classifying companies into industries and sectors: the purpose of classification systems (e.g. GICS, ICB), how they are used in analysis, index construction and performance attribution, and their limitations.",
          "cards": [
              {
                  "q": "Why classify companies into industries?",
                  "a": "To group companies with similar economic characteristics for analysis, benchmarking, index construction and attribution.",
                  "explain": "Syllabus 8.2."
              },
              {
                  "q": "Name two industry classification systems.",
                  "a": "GICS (Global Industry Classification Standard) and ICB (Industry Classification Benchmark).",
                  "explain": "Hierarchical levels."
              },
              {
                  "q": "How are companies assigned to sectors?",
                  "a": "Mainly by principal business activity, usually by revenue source.",
                  "explain": "Conglomerates are hard."
              },
              {
                  "q": "How is classification used in performance attribution?",
                  "a": "Separating sector allocation from stock selection effects.",
                  "explain": "Chapter 16."
              },
              {
                  "q": "What are limitations of classification?",
                  "a": "Diversified companies, changing business models, subjective judgements, global differences.",
                  "explain": "Misclassification."
              },
              {
                  "q": "How does classification help risk control?",
                  "a": "Monitoring sector concentrations.",
                  "explain": "Diversification."
              },
              {
                  "q": "What are cyclical sectors?",
                  "a": "Sectors whose earnings are sensitive to economic cycles (e.g. industrials, consumer discretionary).",
                  "explain": "Rotation strategies."
              },
              {
                  "q": "What are defensive sectors?",
                  "a": "Sectors with stable demand (e.g. utilities, consumer staples, healthcare).",
                  "explain": "Lower beta."
              },
              {
                  "q": "How does classification support sector rotation?",
                  "a": "Managers shift between sectors according to economic outlook.",
                  "explain": "Active style."
              },
              {
                  "q": "Why must classification be stable?",
                  "a": "Frequent changes disrupt benchmarks and analysis.",
                  "explain": "Periodic review."
              },
              {
                  "q": "How is classification used in index construction?",
                  "a": "Creating sector indices and ensuring representative coverage.",
                  "explain": "Chapter 15."
              },
              {
                  "q": "What is a growth sector?",
                  "a": "Sectors with high expected earnings growth (e.g. technology).",
                  "explain": "Higher P/E."
              },
              {
                  "q": "How can technology blur classification?",
                  "a": "Tech companies span many industries (e.g. retail, media).",
                  "explain": "Reclassification events."
              },
              {
                  "q": "Why compare companies within sectors?",
                  "a": "Valuation multiples differ by sector.",
                  "explain": "Relative valuation."
              },
              {
                  "q": "What is the effect of reclassification on index funds?",
                  "a": "Forced trading as sector weights change.",
                  "explain": "Transaction costs."
              }
          ]
      },
      {
          "id": "m15",
          "title": "Investment indices",
          "description": "Construction and uses of investment indices: weighting methods, arithmetic versus geometric averages, main international equity and bond indices, problems with indices of unlisted or illiquid assets (property, private equity, hedge funds), and uses in benchmarking and passive investment.",
          "cards": [
              {
                  "q": "What are the uses of investment indices?",
                  "a": "Measuring market performance, benchmarking managers, basis for index funds and derivatives, economic indicators, asset allocation research.",
                  "explain": "Syllabus 8.2.3."
              },
              {
                  "q": "What weighting methods are used?",
                  "a": "Market capitalisation, free-float, price-weighting, equal weighting, fundamental weighting.",
                  "explain": "Market cap most common."
              },
              {
                  "q": "Why is free-float adjustment used?",
                  "a": "To reflect shares actually available to investors.",
                  "explain": "Investability."
              },
              {
                  "q": "What is the difference between arithmetic and geometric indices?",
                  "a": "Arithmetic averages price relatives; geometric takes the geometric mean, which is always lower and not replicable.",
                  "explain": "Arithmetic weighted indices replicable."
              },
              {
                  "q": "Name main international stock market indices.",
                  "a": "FTSE 100/All-Share, S&P 500, Dow Jones, Nikkei 225, MSCI World, Euro Stoxx 50.",
                  "explain": "Syllabus 8.2.1."
              },
              {
                  "q": "What problems arise with property indices?",
                  "a": "Valuation-based (appraisal smoothing), infrequent transactions, heterogeneity.",
                  "explain": "Syllabus 8.2.2."
              },
              {
                  "q": "What problems arise with hedge fund indices?",
                  "a": "Survivorship bias, backfill bias, self-selection of reporting.",
                  "explain": "Overstated returns."
              },
              {
                  "q": "What problems arise with private equity indices?",
                  "a": "Infrequent valuations, lags, selection bias.",
                  "explain": "Illiquidity."
              },
              {
                  "q": "What is survivorship bias?",
                  "a": "Excluding failed funds overstates average returns.",
                  "explain": "Index construction."
              },
              {
                  "q": "What is a total return index?",
                  "a": "An index including reinvested income.",
                  "explain": "Performance measurement."
              },
              {
                  "q": "What properties make a good benchmark index?",
                  "a": "Representative, investable, transparent, measurable in advance, appropriate to mandate.",
                  "explain": "Benchmark quality."
              },
              {
                  "q": "What is a bond index's construction challenge?",
                  "a": "Many issues, illiquidity, changing constituents as bonds mature.",
                  "explain": "Rebalancing."
              },
              {
                  "q": "How do index changes affect prices?",
                  "a": "Inclusion/exclusion causes demand shifts from index funds.",
                  "explain": "Index effect."
              },
              {
                  "q": "What is the price-weighted index weakness?",
                  "a": "High-priced stocks dominate regardless of company size.",
                  "explain": "Dow Jones."
              },
              {
                  "q": "What is a chain-linked index?",
                  "a": "Index calculated by linking period returns, allowing constituent changes.",
                  "explain": "Continuity."
              }
          ]
      },
      {
          "id": "m16",
          "title": "Performance measurement (1)",
          "description": "Measuring investment portfolio performance relative to a published index, a benchmark portfolio and peer groups: money-weighted and time-weighted returns, linked internal rate of return, attribution into sector (asset) allocation and stock selection, and risk-adjusted measures.",
          "cards": [
              {
                  "q": "What is the money-weighted rate of return (MWRR)?",
                  "a": "The internal rate of return equating initial value plus cash flows with final value.",
                  "explain": "Affected by timing of cash flows."
              },
              {
                  "q": "What is the time-weighted rate of return (TWRR)?",
                  "a": "Product of returns between cash flows, removing the effect of cash flow timing.",
                  "explain": "Best for assessing managers."
              },
              {
                  "q": "What is the linked internal rate of return?",
                  "a": "IRR calculated over subperiods and linked, approximating TWRR with less frequent valuations.",
                  "explain": "Practical compromise."
              },
              {
                  "q": "Why use TWRR to assess managers?",
                  "a": "Managers don't control the timing of cash flows into the fund.",
                  "explain": "Fair comparison."
              },
              {
                  "q": "What is performance attribution?",
                  "a": "Splitting relative return into sector (asset) allocation and stock selection contributions.",
                  "explain": "Syllabus 8.3.2."
              },
              {
                  "q": "How is the sector allocation effect calculated?",
                  "a": "Sum of (portfolio weight − benchmark weight) × (benchmark sector return − total benchmark return) — or a similar formulation.",
                  "explain": "Brinson-style."
              },
              {
                  "q": "How is the stock selection effect calculated?",
                  "a": "Sum of portfolio weight (or benchmark weight) × (portfolio sector return − benchmark sector return).",
                  "explain": "Interaction term in some methods."
              },
              {
                  "q": "What is peer group comparison?",
                  "a": "Comparing performance with other managers with similar mandates.",
                  "explain": "Survivorship and style differences."
              },
              {
                  "q": "What is the Sharpe ratio?",
                  "a": "(Portfolio return − risk-free rate) / standard deviation.",
                  "explain": "Risk-adjusted, total risk."
              },
              {
                  "q": "What is the Treynor ratio?",
                  "a": "(Portfolio return − risk-free rate) / beta.",
                  "explain": "Systematic risk."
              },
              {
                  "q": "What is Jensen's alpha?",
                  "a": "Actual return minus CAPM expected return.",
                  "explain": "Manager skill measure."
              },
              {
                  "q": "What is the information ratio?",
                  "a": "Active return / tracking error.",
                  "explain": "Consistency of outperformance."
              },
              {
                  "q": "What are limitations of performance measurement?",
                  "a": "Short periods, benchmark choice, risk not captured, survivorship, valuation issues.",
                  "explain": "Syllabus 8.3."
              },
              {
                  "q": "Why compare against a benchmark portfolio?",
                  "a": "Reflects the investor's strategy and liabilities.",
                  "explain": "Customised benchmark."
              },
              {
                  "q": "How can performance be compared with an index?",
                  "a": "Relative return versus the index, adjusted for costs and risk.",
                  "explain": "Index choice matters."
              }
          ]
      },
      {
          "id": "m17",
          "title": "Performance measurement (2)",
          "description": "Analysing investment performance using equity price, net present value, net asset value and return on capital measures, the limitations of each, and presenting performance to investors.",
          "cards": [
              {
                  "q": "How can equity price measure performance?",
                  "a": "Share price movements reflect market assessment of company performance.",
                  "explain": "Syllabus 8.1."
              },
              {
                  "q": "What is net present value as a performance measure?",
                  "a": "PV of future cash flows minus investment cost; positive NPV adds value.",
                  "explain": "Project appraisal."
              },
              {
                  "q": "What is net asset value (NAV)?",
                  "a": "Value of assets minus liabilities, often per share for funds.",
                  "explain": "Investment trusts."
              },
              {
                  "q": "What is return on capital?",
                  "a": "Profit relative to capital employed.",
                  "explain": "ROCE."
              },
              {
                  "q": "What is a discount to NAV?",
                  "a": "When an investment trust's share price is below its NAV.",
                  "explain": "Market sentiment."
              },
              {
                  "q": "What are limitations of accounting-based measures?",
                  "a": "Accounting conventions, manipulation, historic costs.",
                  "explain": "Use with market measures."
              },
              {
                  "q": "What is portfolio risk and return analysis?",
                  "a": "Measuring returns alongside volatility, drawdown and tracking error.",
                  "explain": "Syllabus 8.1."
              },
              {
                  "q": "What is maximum drawdown?",
                  "a": "Largest peak-to-trough decline.",
                  "explain": "Downside risk measure."
              },
              {
                  "q": "Why does NPV depend on discount rate?",
                  "a": "Higher rates reduce PV of future cash flows.",
                  "explain": "Sensitivity."
              },
              {
                  "q": "What is economic value added (EVA)?",
                  "a": "Profit after charging for the cost of capital.",
                  "explain": "Value creation."
              },
              {
                  "q": "How is performance presented to investors?",
                  "a": "Returns over periods versus benchmarks with risk measures and attribution.",
                  "explain": "Clear communication."
              },
              {
                  "q": "What is the GIPS standard?",
                  "a": "Global Investment Performance Standards for fair presentation.",
                  "explain": "Consistency."
              },
              {
                  "q": "How do fees affect performance measurement?",
                  "a": "Net-of-fee returns show investor experience.",
                  "explain": "Gross vs net."
              },
              {
                  "q": "What is annualisation?",
                  "a": "Converting multi-period returns to annual equivalents.",
                  "explain": "Geometric."
              },
              {
                  "q": "Why consider performance over multiple periods?",
                  "a": "Short-term results are noisy.",
                  "explain": "Luck vs skill."
              }
          ]
      },
      {
          "id": "m18",
          "title": "Overall risk control",
          "description": "Monitoring and controlling an institution's exposure to risk — asset/liability mismatch, market, credit and counterparty, operational, liquidity, relative performance and sustainability risks — and applying mean-variance portfolio theory (opportunity set, efficient frontier, indifference curves, optimum portfolio).",
          "cards": [
              {
                  "q": "List the risks in syllabus 4.1.",
                  "a": "Asset/liability mismatching; market; credit (incl. counterparty); operational; liquidity; relative performance; sustainability.",
                  "explain": "Monitoring and control."
              },
              {
                  "q": "How is mismatch risk controlled?",
                  "a": "Matching assets to liabilities, hedging, ALM limits.",
                  "explain": "Liability benchmark."
              },
              {
                  "q": "How is market risk controlled?",
                  "a": "Diversification, limits, hedging, VaR monitoring.",
                  "explain": "Risk budgets."
              },
              {
                  "q": "How is credit risk controlled?",
                  "a": "Credit limits, ratings, diversification, collateral, credit derivatives.",
                  "explain": "Counterparty management."
              },
              {
                  "q": "How is operational risk controlled?",
                  "a": "Processes, controls, segregation of duties, audit, custodians.",
                  "explain": "Operational due diligence."
              },
              {
                  "q": "How is liquidity risk controlled?",
                  "a": "Holding liquid assets, stress testing, limits on illiquid assets.",
                  "explain": "Collateral needs."
              },
              {
                  "q": "What is relative performance risk?",
                  "a": "Risk of underperforming peers or benchmarks.",
                  "explain": "Career risk for managers."
              },
              {
                  "q": "What is sustainability risk?",
                  "a": "ESG events that could cause material loss in value.",
                  "explain": "Syllabus 4.1."
              },
              {
                  "q": "What is the opportunity set?",
                  "a": "All achievable portfolio risk-return combinations.",
                  "explain": "Mean-variance."
              },
              {
                  "q": "What is the efficient frontier?",
                  "a": "Portfolios with highest expected return for each level of risk.",
                  "explain": "Dominates others."
              },
              {
                  "q": "What are indifference curves?",
                  "a": "Combinations of risk and return giving equal utility to an investor.",
                  "explain": "Risk preferences."
              },
              {
                  "q": "What is the optimum portfolio?",
                  "a": "Where the highest indifference curve touches the efficient frontier.",
                  "explain": "Syllabus 4.2."
              },
              {
                  "q": "What are limitations of mean-variance theory?",
                  "a": "Relies on estimates, assumes normal returns and quadratic utility, ignores liabilities unless adapted.",
                  "explain": "Estimation error."
              },
              {
                  "q": "How can mean-variance be adapted for liabilities?",
                  "a": "Use surplus (assets − liabilities) return and variance.",
                  "explain": "Surplus optimisation."
              },
              {
                  "q": "What is diversification benefit?",
                  "a": "Portfolio risk less than weighted average of individual risks when correlations < 1.",
                  "explain": "Core of MPT."
              }
          ]
      },
      {
          "id": "m19",
          "title": "Actuarial techniques (1)",
          "description": "Using actuarial techniques to develop investment strategy: asset pricing models, asset-liability modelling, liability hedging and liability benchmarks for institutional investors.",
          "cards": [
              {
                  "q": "How can asset pricing models help strategy?",
                  "a": "Provide expected returns and risk premiums for asset classes.",
                  "explain": "Syllabus 6.1."
              },
              {
                  "q": "What is asset-liability modelling?",
                  "a": "Projecting assets and liabilities under scenarios to evaluate strategies.",
                  "explain": "Syllabus 6.1."
              },
              {
                  "q": "What is liability hedging?",
                  "a": "Using assets or derivatives to match liability sensitivities (interest rate, inflation).",
                  "explain": "LDI."
              },
              {
                  "q": "What is a liability benchmark?",
                  "a": "A portfolio that best matches the liabilities, used as risk-free reference.",
                  "explain": "Dynamic liability benchmarks adjust over time."
              },
              {
                  "q": "What is a dynamic liability benchmark?",
                  "a": "A liability-matching portfolio that changes as liabilities evolve.",
                  "explain": "Syllabus 6.1."
              },
              {
                  "q": "Why start strategy from liabilities?",
                  "a": "Risk for institutions is relative to liabilities.",
                  "explain": "Surplus risk."
              },
              {
                  "q": "What outputs do ALM studies give?",
                  "a": "Distributions of funding level, surplus, contributions.",
                  "explain": "Compare strategies."
              },
              {
                  "q": "What is the role of an economic scenario generator?",
                  "a": "Produces consistent simulations of economic variables.",
                  "explain": "ALM input."
              },
              {
                  "q": "How is risk appetite reflected?",
                  "a": "Constraints on probability of shortfall or surplus volatility.",
                  "explain": "Strategy selection."
              },
              {
                  "q": "What is a hedge ratio?",
                  "a": "Proportion of liability sensitivity hedged.",
                  "explain": "LDI parameter."
              },
              {
                  "q": "What are limitations of ALM?",
                  "a": "Model and parameter risk, false precision.",
                  "explain": "Stress testing complements."
              },
              {
                  "q": "How do insurers use ALM?",
                  "a": "Match guaranteed liabilities, manage capital.",
                  "explain": "Regulatory capital."
              },
              {
                  "q": "How do pension schemes use ALM?",
                  "a": "Set strategy and contribution policy.",
                  "explain": "Journey plans."
              },
              {
                  "q": "What is surplus risk?",
                  "a": "Volatility of assets minus liabilities.",
                  "explain": "Key measure."
              },
              {
                  "q": "What is a growth vs matching portfolio split?",
                  "a": "Separating return-seeking and liability-hedging assets.",
                  "explain": "LDI framework."
              }
          ]
      },
      {
          "id": "m20",
          "title": "Actuarial techniques (2)",
          "description": "Further actuarial techniques for investment strategy: stochastic modelling and its calibration, Value at Risk and tail measures, stress and scenario testing, and choosing strategy for different investor types.",
          "cards": [
              {
                  "q": "Why use stochastic models for strategy?",
                  "a": "Capture uncertainty and distribution of outcomes.",
                  "explain": "Beyond deterministic."
              },
              {
                  "q": "How is an ESG calibrated?",
                  "a": "To historical data, market prices and expert views.",
                  "explain": "Real-world vs risk-neutral."
              },
              {
                  "q": "What is real-world vs risk-neutral calibration?",
                  "a": "Real-world reflects expected returns for projection; risk-neutral for pricing.",
                  "explain": "Purpose-specific."
              },
              {
                  "q": "What is Value at Risk?",
                  "a": "Loss not exceeded with a given probability over a period.",
                  "explain": "Tail risk measure."
              },
              {
                  "q": "What is Tail VaR?",
                  "a": "Expected loss given the VaR is exceeded.",
                  "explain": "Coherent measure."
              },
              {
                  "q": "What is stress testing?",
                  "a": "Assessing effect of severe but plausible scenarios.",
                  "explain": "Complements VaR."
              },
              {
                  "q": "How do strategies differ by investor type?",
                  "a": "Insurers: matching and capital; pensions: liability-relative; individuals: goals and risk tolerance; charities: spending needs.",
                  "explain": "Objectives."
              },
              {
                  "q": "What is reverse stress testing?",
                  "a": "Identifying scenarios that would cause failure.",
                  "explain": "Risk management."
              },
              {
                  "q": "How can tail dependence matter?",
                  "a": "Assets can fall together in crises.",
                  "explain": "Copulas."
              },
              {
                  "q": "What is model risk?",
                  "a": "Errors or inappropriate models leading to poor decisions.",
                  "explain": "Validation."
              },
              {
                  "q": "How is liquidity considered in strategy?",
                  "a": "Ensure ability to meet cash needs under stress.",
                  "explain": "Liquidity stress tests."
              },
              {
                  "q": "What is a risk budget?",
                  "a": "Allocating permitted risk across strategies or managers.",
                  "explain": "Chapter 22."
              },
              {
                  "q": "How can scenario analysis support communication?",
                  "a": "Concrete stories are easier to understand than distributions.",
                  "explain": "Stakeholder engagement."
              },
              {
                  "q": "What is expected shortfall?",
                  "a": "Same as TVaR.",
                  "explain": "Regulatory use."
              },
              {
                  "q": "What is backtesting?",
                  "a": "Comparing model predictions with actual outcomes.",
                  "explain": "Model validation."
              }
          ]
      },
      {
          "id": "m21",
          "title": "Portfolio management (1)",
          "description": "Principal portfolio management techniques: active versus passive management, active styles (value, growth, momentum, rotational), equity portfolio techniques, and bond portfolio techniques (immunisation, duration management, yield curve and credit strategies).",
          "cards": [
              {
                  "q": "What is passive management?",
                  "a": "Tracking an index with minimal active decisions.",
                  "explain": "Low cost."
              },
              {
                  "q": "What is active management?",
                  "a": "Seeking to outperform through security selection or allocation.",
                  "explain": "Higher cost."
              },
              {
                  "q": "What is value investing?",
                  "a": "Buying stocks that appear cheap relative to fundamentals.",
                  "explain": "Syllabus 7.1."
              },
              {
                  "q": "What is growth investing?",
                  "a": "Buying companies with high expected earnings growth.",
                  "explain": "Syllabus 7.1."
              },
              {
                  "q": "What is momentum investing?",
                  "a": "Buying recent winners and selling losers.",
                  "explain": "Syllabus 7.1."
              },
              {
                  "q": "What is rotational (sector rotation) investing?",
                  "a": "Shifting between sectors according to the economic cycle.",
                  "explain": "Syllabus 7.1."
              },
              {
                  "q": "List equity portfolio techniques.",
                  "a": "Indexing, enhanced indexing, stock picking, sector allocation, core-satellite, quantitative/factor strategies.",
                  "explain": "Syllabus 7.1."
              },
              {
                  "q": "List bond portfolio techniques.",
                  "a": "Immunisation, cash flow matching, duration management, yield curve positioning, credit selection, bond switching.",
                  "explain": "Syllabus 7.1."
              },
              {
                  "q": "What is immunisation?",
                  "a": "Matching duration and having greater convexity so small rate changes don't create losses.",
                  "explain": "Redington."
              },
              {
                  "q": "What is core-satellite?",
                  "a": "Passive core with active satellites.",
                  "explain": "Balances cost and alpha."
              },
              {
                  "q": "What is a bond switch?",
                  "a": "Exchanging one bond for another to exploit anomalies or change characteristics.",
                  "explain": "Anomaly/policy switches."
              },
              {
                  "q": "What is enhanced indexing?",
                  "a": "Small active tilts around an index.",
                  "explain": "Low tracking error."
              },
              {
                  "q": "What are riding the yield curve strategies?",
                  "a": "Buying bonds on a steep curve and selling as they roll down.",
                  "explain": "Yield curve strategy."
              },
              {
                  "q": "What is credit selection?",
                  "a": "Choosing bonds with favourable credit risk/return.",
                  "explain": "Credit analysis."
              },
              {
                  "q": "Why choose passive management?",
                  "a": "Market efficiency, low cost, predictable tracking.",
                  "explain": "Evidence on active underperformance."
              }
          ]
      },
      {
          "id": "m22",
          "title": "Portfolio management (2)",
          "description": "Portfolio construction and risk control: multifactor models in practical management, the custodian's roles and responsibilities, Value at Risk, tracking error and risk budgets, and measurement, comparison and attribution of risk.",
          "cards": [
              {
                  "q": "How are multifactor models used in practice?",
                  "a": "To estimate risk exposures, construct portfolios, attribute risk and return, and control tracking error.",
                  "explain": "Syllabus 7.3."
              },
              {
                  "q": "What types of factors are used?",
                  "a": "Macroeconomic, fundamental (value, size), statistical factors.",
                  "explain": "Model types."
              },
              {
                  "q": "What are the roles of a custodian?",
                  "a": "Safekeeping assets, settlement, income collection, corporate actions, record keeping, reporting, stock lending.",
                  "explain": "Syllabus 7.6."
              },
              {
                  "q": "What is tracking error?",
                  "a": "Standard deviation of active returns relative to a benchmark.",
                  "explain": "Syllabus 7.7."
              },
              {
                  "q": "How is VaR used in portfolio construction?",
                  "a": "Limiting potential losses at a confidence level.",
                  "explain": "Syllabus 7.7."
              },
              {
                  "q": "What is risk budgeting?",
                  "a": "Allocating total active risk across managers or decisions.",
                  "explain": "Syllabus 7.7."
              },
              {
                  "q": "What is risk attribution?",
                  "a": "Decomposing portfolio risk into sources (factors, sectors, stocks).",
                  "explain": "Syllabus 7.8."
              },
              {
                  "q": "How is ex-ante tracking error estimated?",
                  "a": "Using a factor model of active exposures.",
                  "explain": "Forward-looking."
              },
              {
                  "q": "What is ex-post tracking error?",
                  "a": "Measured from realised active returns.",
                  "explain": "Backward-looking."
              },
              {
                  "q": "How do custodians reduce operational risk?",
                  "a": "Segregating client assets from manager.",
                  "explain": "Safekeeping."
              },
              {
                  "q": "What is stock lending?",
                  "a": "Lending securities for a fee, with collateral.",
                  "explain": "Income with counterparty risk."
              },
              {
                  "q": "How can multifactor models control style drift?",
                  "a": "Monitoring factor exposures.",
                  "explain": "Mandate compliance."
              },
              {
                  "q": "How can risk be compared across portfolios?",
                  "a": "Common metrics like tracking error, VaR, beta.",
                  "explain": "Syllabus 7.8."
              },
              {
                  "q": "What are limitations of factor models?",
                  "a": "Model misspecification, unstable exposures.",
                  "explain": "Judgement."
              },
              {
                  "q": "What is the information ratio used for?",
                  "a": "Assessing active return per unit of active risk.",
                  "explain": "Manager selection."
              }
          ]
      },
      {
          "id": "m23",
          "title": "Portfolio management (3)",
          "description": "Using derivatives and implementing change: how and when institutions use futures, options, swaps and FX forwards, why significant reallocations are problematic, and transition management and overlay strategies to realign portfolios.",
          "cards": [
              {
                  "q": "How might an institution use futures?",
                  "a": "Quick, low-cost changes in asset allocation, hedging, equitising cash.",
                  "explain": "Syllabus 7.2."
              },
              {
                  "q": "How might options be used?",
                  "a": "Protecting downside (puts), income (covered calls), gaining leveraged exposure.",
                  "explain": "Syllabus 7.2."
              },
              {
                  "q": "How are interest rate swaps used?",
                  "a": "Hedging liability interest rate risk, changing duration.",
                  "explain": "Syllabus 7.2."
              },
              {
                  "q": "How are inflation swaps used?",
                  "a": "Hedging inflation-linked liabilities.",
                  "explain": "Syllabus 7.2."
              },
              {
                  "q": "How are currency forwards used?",
                  "a": "Hedging currency exposure of overseas investments.",
                  "explain": "Syllabus 7.2."
              },
              {
                  "q": "Why can large reallocations be problematic?",
                  "a": "Market impact costs, transaction costs, time out of market, operational risk, information leakage.",
                  "explain": "Syllabus 7.4."
              },
              {
                  "q": "What is transition management?",
                  "a": "Specialist management of moving assets between managers or strategies to minimise cost and risk.",
                  "explain": "Syllabus 7.5."
              },
              {
                  "q": "What is an overlay strategy?",
                  "a": "Using derivatives to adjust exposures without changing underlying holdings (e.g. currency overlay, beta overlay).",
                  "explain": "Syllabus 7.5."
              },
              {
                  "q": "What is equitisation of cash?",
                  "a": "Using futures to give equity exposure on cash holdings.",
                  "explain": "Reduces cash drag."
              },
              {
                  "q": "What are OTC contracts' advantages for institutions?",
                  "a": "Customised terms matching liabilities.",
                  "explain": "Counterparty risk."
              },
              {
                  "q": "How can transition risk be managed?",
                  "a": "Pre-trade analysis, hedging exposures during transition, crossing trades.",
                  "explain": "Transition managers."
              },
              {
                  "q": "What is implementation shortfall?",
                  "a": "Difference between paper portfolio returns and actual returns after costs.",
                  "explain": "Transition cost measure."
              },
              {
                  "q": "What is a currency overlay manager?",
                  "a": "A manager handling currency exposure separately from asset managers.",
                  "explain": "Specialisation."
              },
              {
                  "q": "What are the risks of derivative overlays?",
                  "a": "Collateral calls, basis risk, counterparty risk.",
                  "explain": "Liquidity planning."
              },
              {
                  "q": "When might a fund use a completion portfolio?",
                  "a": "To fill gaps between manager exposures and strategic benchmark.",
                  "explain": "Overlay approach."
              }
          ]
      },
      {
          "id": "m24",
          "title": "Taxation",
          "description": "Typical ways investment returns are taxed — income tax, capital gains tax, withholding taxes, corporation tax, tax-exempt investors — and how the taxation basis affects investor behaviour and asset choice.",
          "cards": [
              {
                  "q": "How are investment returns commonly taxed?",
                  "a": "Income tax on interest/dividends, capital gains tax on gains, withholding tax on overseas income, corporation tax for companies.",
                  "explain": "Syllabus 5.3."
              },
              {
                  "q": "How does tax affect investor behaviour?",
                  "a": "Investors favour assets whose returns are taxed lightly given their tax position.",
                  "explain": "Tax clientele."
              },
              {
                  "q": "Why might a high-rate taxpayer prefer capital gains?",
                  "a": "Gains may be taxed at lower rates or deferred.",
                  "explain": "Growth stocks."
              },
              {
                  "q": "How are tax-exempt investors affected?",
                  "a": "They prefer income-producing assets since they don't pay income tax.",
                  "explain": "Pension funds."
              },
              {
                  "q": "What is withholding tax?",
                  "a": "Tax deducted at source on overseas income, possibly reclaimable under treaties.",
                  "explain": "Affects international investment."
              },
              {
                  "q": "What is a double tax treaty?",
                  "a": "Agreement to avoid taxing the same income twice.",
                  "explain": "Reduces withholding."
              },
              {
                  "q": "How does tax affect bond choice?",
                  "a": "Low-coupon bonds may be preferred by those taxed more on income.",
                  "explain": "Tax efficiency."
              },
              {
                  "q": "How does tax affect insurers' investment?",
                  "a": "Tax on investment income affects net yields and asset choices.",
                  "explain": "Company tax basis."
              },
              {
                  "q": "What is tax deferral?",
                  "a": "Postponing tax liability, increasing effective return.",
                  "explain": "Pensions, ISAs."
              },
              {
                  "q": "What is the effect of indexation allowances?",
                  "a": "Reduces taxable gains for inflation.",
                  "explain": "Some regimes."
              },
              {
                  "q": "How can tax distort markets?",
                  "a": "Creates demand for tax-favoured assets irrespective of fundamentals.",
                  "explain": "Tax arbitrage."
              },
              {
                  "q": "What are tax-efficient wrappers?",
                  "a": "Accounts (ISAs, pensions) where returns are sheltered.",
                  "explain": "Individual investors."
              },
              {
                  "q": "How does stamp duty affect trading?",
                  "a": "Transaction taxes increase costs and discourage frequent trading.",
                  "explain": "Turnover."
              },
              {
                  "q": "How can tax affect dividend policy?",
                  "a": "Companies may prefer buybacks if dividends taxed more.",
                  "explain": "Clientele effect."
              },
              {
                  "q": "Why must tax be considered in performance?",
                  "a": "Net-of-tax returns matter to taxable investors.",
                  "explain": "After-tax measurement."
              }
          ]
      },
      {
          "id": "m25",
          "title": "Glossary",
          "description": "Key SP5 terminology — derivatives, specialist assets, valuation, performance and risk terms — as a recall deck.",
          "cards": [
              {
                  "q": "Define 'tracking error'.",
                  "a": "Standard deviation of active returns.",
                  "explain": "Active risk."
              },
              {
                  "q": "Define 'TWRR'.",
                  "a": "Time-weighted rate of return, removing cash flow timing effects.",
                  "explain": "Manager assessment."
              },
              {
                  "q": "Define 'duration'.",
                  "a": "Weighted average time to cash flows / interest rate sensitivity.",
                  "explain": "Bond risk."
              },
              {
                  "q": "Define 'securitisation'.",
                  "a": "Pooling assets and issuing securities backed by their cash flows.",
                  "explain": "ABS."
              },
              {
                  "q": "Define 'CDS'.",
                  "a": "Credit default swap transferring credit risk.",
                  "explain": "Credit derivative."
              },
              {
                  "q": "Define 'efficient frontier'.",
                  "a": "Portfolios with the best return for each risk level.",
                  "explain": "MPT."
              },
              {
                  "q": "Define 'information ratio'.",
                  "a": "Active return divided by tracking error.",
                  "explain": "Skill."
              },
              {
                  "q": "Define 'custodian'.",
                  "a": "Institution safeguarding assets and processing transactions.",
                  "explain": "Operational."
              },
              {
                  "q": "Define 'transition management'.",
                  "a": "Managing large portfolio changes to minimise cost and risk.",
                  "explain": "Implementation."
              },
              {
                  "q": "Define 'free float'.",
                  "a": "Shares available for public trading.",
                  "explain": "Index weighting."
              },
              {
                  "q": "Define 'catastrophe bond'.",
                  "a": "Bond losing principal on specified catastrophe.",
                  "explain": "ILS."
              },
              {
                  "q": "Define 'Jensen's alpha'.",
                  "a": "Excess return over CAPM expectation.",
                  "explain": "Performance."
              },
              {
                  "q": "Define 'overlay'.",
                  "a": "Derivative-based adjustment of exposures.",
                  "explain": "Portfolio management."
              },
              {
                  "q": "Define 'liability benchmark'.",
                  "a": "Portfolio best matching liabilities.",
                  "explain": "ALM."
              },
              {
                  "q": "Define 'withholding tax'.",
                  "a": "Tax deducted at source on overseas income.",
                  "explain": "Taxation."
              }
          ]
      }
  ],
  questions: [
    {
      id: "sp5-q1",
      title: "The economic and regulatory framework",
      modules: "Modules 6, 8, 9, 10",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why central bank actions can affect investment markets across multiple asset classes simultaneously, rather than a single, isolated effect.",
          answer:
            "Interest rate changes directly affect bond valuations (via discount rates), can influence equity valuations (via the relative attractiveness of bonds versus equities and via corporate borrowing costs), and affect currency values (via relative interest rate differentials), giving central bank policy a broad, cross-asset-class impact.",
          note: "A strong answer names the impact channel for at least two distinct asset classes, not just asserts that central banks 'matter'.",
        },
        {
          label: "(ii)",
          command: "List",
          marks: 3,
          question:
            "List six genuine considerations named in the official syllabus as part of the legislative and regulatory framework affecting investment management practice.",
          answer:
            "Any six of: corporate governance, role of the listings authority, environmental/social/governance (ESG) factors, ethical issues, competition and fair trading controls, monopolies regulators, investment restrictions in investment agreements, provision of financial services, institutional investment practices, development of international accounting standards.",
          note: "A complete answer names six distinct considerations from the official list.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why 'investment restrictions in investment agreements' represent a different layer of constraint from general securities market regulation.",
          answer:
            "These restrictions arise from the specific, negotiated terms of an individual investment mandate or agreement (e.g. permitted asset classes, concentration limits) rather than from broader, market-wide statutory regulation, representing a more bespoke, contract-specific layer of constraint an investment manager must operate within, on top of general market regulation which applies uniformly to all managers regardless of any specific client agreement.",
          note: "A strong answer explicitly distinguishes the <em>contractual</em>, client-specific nature of these restrictions from the <em>statutory</em>, market-wide nature of general regulation.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why ESG factors might be considered part of the genuine regulatory framework in some jurisdictions, rather than purely a voluntary investment consideration.",
          answer:
            "Many jurisdictions now impose genuine regulatory disclosure and conduct requirements around ESG considerations, making ESG a regulatory, not purely voluntary or values-based, consideration in at least some markets.",
          note: "This connects directly to the ESG-as-evolving-regulatory-consideration theme developed in this course.",
        },
      ],
    },
    {
      id: "sp5-q2",
      title: "Specialist investment products and derivatives",
      modules: "Modules 2, 3, 4, 5",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain what insurance-linked securities (ILS) are, and why they might offer investors valuable diversification.",
          answer:
            "ILS (e.g. catastrophe bonds) transfer insurance-related risk (e.g. natural catastrophe risk) to capital markets investors in exchange for a return, offering valuable diversification since insurance losses are typically driven by different underlying factors (weather, seismic activity) than traditional financial market risk factors.",
          note: "A strong answer explains <em>why</em> diversification benefit arises (different underlying risk drivers), not just that ILS exist.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain the genuine trade-off between exchange-traded and over-the-counter (OTC) derivative trading.",
          answer:
            "Exchange-traded derivatives offer genuine standardisation, transparency, and reduced counterparty risk (via central clearing), while OTC derivatives offer greater flexibility to tailor contract terms to a specific investor's precise needs, at the cost of typically greater counterparty risk and reduced price transparency.",
          note: "A strong answer names both sides of the genuine trade-off, not just describes one venue favourably.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss the genuine difference between using derivatives for hedging and for efficient portfolio management, with an example of each.",
          answer:
            "Hedging uses derivatives (e.g. put options, futures) to offset or reduce an existing, unwanted risk exposure in the underlying portfolio, achieving genuine risk reduction without disrupting core holdings — for example, buying put options to protect an existing equity holding against a market fall. Efficient portfolio management uses derivatives to gain or adjust market exposure quickly and cost-effectively — for example, using equity index futures to quickly increase market exposure ahead of executing underlying stock purchases, providing implementation efficiency rather than reducing existing risk.",
          note: "A strong answer gives a genuine, distinct example for each use case, not just describes both in the abstract.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why a structured product might require particularly careful analysis by an investor before purchase.",
          answer:
            "A structured product combines a traditional investment with a derivative overlay to create a customised risk/return payoff, but the genuine underlying risk and cost structure can be less transparent than a simple, standalone investment, potentially embedding fees or risks not immediately obvious to the investor.",
          note: "This connects directly to the customisation-versus-transparency trade-off theme developed in this course.",
        },
      ],
    },
    {
      id: "sp5-q3",
      title: "Valuing a bond investment",
      modules: "Modules 11, 12",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A bond has a face value of &pound;100,000, pays an annual coupon of &pound;5,000 at the end of each of the next 3 years, and redeems at par (&pound;100,000) at the end of year 3. Using a discount rate of 4% per annum, calculate the bond's present value.",
          answer:
            "PV = &pound;5,000/1.04 + &pound;5,000/1.04&sup2; + &pound;5,000/1.04&sup3; + &pound;100,000/1.04&sup3; = &pound;4,807.69 + &pound;4,622.78 + &pound;4,445.94 + &pound;88,899.64 = &pound;102,775.09 (to the nearest penny).",
          note: "Arithmetic check: PV=102,775.09. Marks are typically split across correctly discounting the coupons and the redemption value.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why this bond's present value exceeds its face value, given the coupon rate (5%) is higher than the discount rate used (4%).",
          answer:
            "Since the bond's coupon rate (5%) exceeds the discount rate applied to value it (4%), the bond pays more income than the market currently requires for a bond of this risk, making it more valuable than its face value — this relationship between coupon rate and discount/yield rate directly determines whether a bond trades above or below par.",
          note: "A strong answer explicitly connects the coupon-versus-discount-rate relationship to the premium-versus-par pricing outcome.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why an investor might not rely solely on an external credit rating agency's assessment of this bond's issuer before investing.",
          answer:
            "While rating agencies provide a useful standardised assessment, an investor may conduct independent credit analysis since rating agencies can be slow to reflect emerging changes in issuer creditworthiness, and different investors may have different views on appropriate risk assessment given their own specific circumstances and risk tolerance.",
          note: "A strong answer treats rating agency output as useful but not sufficient, not as either fully reliable or worthless.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why understanding the empirical characteristics of asset prices matters when valuing bonds and other investments, beyond applying theoretical pricing models alone.",
          answer:
            "Real-world asset prices can deviate from theoretical model predictions, so genuine practical valuation and risk assessment should be informed by how asset prices actually behave empirically, not solely by how theoretical models predict they should behave.",
          note: "This connects directly to the empirical-versus-theoretical caution developed in this course.",
        },
      ],
    },
    {
      id: "sp5-q4",
      title: "Monitoring risk and mean-variance portfolio theory",
      modules: "Module 18",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "A two-asset portfolio invests 60% in Asset A (expected return 8%, standard deviation 15%) and 40% in Asset B (expected return 5%, standard deviation 8%), with a correlation of 0.3 between the two assets. Calculate the portfolio's expected return and standard deviation.",
          answer:
            "Expected return = (0.6 &times; 8%) + (0.4 &times; 5%) = 4.8% + 2.0% = 6.8%. Variance = (0.6&sup2; &times; 0.15&sup2;) + (0.4&sup2; &times; 0.08&sup2;) + (2 &times; 0.6 &times; 0.4 &times; 0.15 &times; 0.08 &times; 0.3) = 0.0081 + 0.001024 + 0.001728 = 0.010852. Standard deviation = &radic;0.010852 &asymp; 10.42%.",
          note: "Arithmetic check: expected return=6.80%; variance=0.010852; sd≈10.42%. Marks are typically split across the expected return, variance, and standard deviation calculations.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the portfolio's standard deviation calculated in part (i) is lower than a simple weighted average of the two assets' individual standard deviations (which would be 0.6×15%+0.4×8%=12.2%).",
          answer:
            "Since the two assets are not perfectly correlated (correlation of 0.3, less than 1), combining them provides a genuine diversification benefit — the portfolio's actual risk is lower than the weighted average of individual risks because the assets' returns do not move perfectly together, so some of each asset's individual volatility is offset by the other's movements.",
          note: "A strong answer explicitly connects the diversification benefit to the correlation being less than 1, not just asserts that 'diversification reduces risk'.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 2,
          question:
            "Discuss what the 'efficient frontier' represents, and how this portfolio might relate to it.",
          answer:
            "The efficient frontier consists of the portfolios offering the highest expected return for each given level of risk, excluding all other achievable portfolios that are dominated by a more efficient alternative. This specific 60/40 portfolio may or may not lie on the efficient frontier — it lies on the frontier only if no other combination of these two assets (or other available assets) offers a higher return for the same 10.42% risk level, or the same 6.8% return for lower risk.",
          note: "A strong answer explains what would need to be true for this specific portfolio to lie ON the frontier, not just defines the frontier generically.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why 'sustainability risk' might be considered a distinct risk category for this portfolio, beyond the market and credit risk already reflected in the standard deviation calculation.",
          answer:
            "Sustainability risk concerns the genuine risk that environmental, social or governance factors materially affect an investment's value or the wider portfolio's risk profile in ways not necessarily captured by historical volatility and correlation figures alone, representing a forward-looking risk dimension beyond backward-looking statistical risk measures.",
          note: "This connects directly to the sustainability-risk-as-distinct-category theme developed in this course.",
        },
      ],
    },
    {
      id: "sp5-q5",
      title: "Investor characteristics and behavioural finance",
      modules: "Modules 7, 24",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain what 'loss aversion' is, and how it might lead an investor to make suboptimal decisions.",
          answer:
            "Loss aversion describes the genuine tendency for investors to feel the pain of a loss more intensely than the pleasure of an equivalent gain, which can lead to suboptimal behaviour such as holding onto losing investments too long (hoping to avoid crystallising the loss) or selling winning investments too early.",
          note: "A strong answer explains both the psychological mechanism <em>and</em> a concrete behavioural consequence.",
        },
        {
          label: "(ii)",
          command: "List",
          marks: 3,
          question:
            "List the genuine steps involved in financial planning for an individual investor, per the official syllabus.",
          answer:
            "Establishing the investor's genuine objectives and constraints, assessing their current financial position, developing an appropriate strategy to meet their objectives, implementing that strategy, and monitoring and reviewing progress over time.",
          note: "A complete answer names all five steps in a sequential order.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why the taxation of investment returns affects investor behaviour, beyond simply reducing net returns, and give one example.",
          answer:
            "Different tax treatments of income versus capital gains, or different tax-favoured account wrappers, can incentivise investors to prefer certain asset types, holding periods, or account structures purely for tax efficiency reasons, meaning genuine investor behaviour is directly shaped by tax rules, not solely by underlying investment merit. For example, an investor might hold a growth-oriented (low-dividend) investment in a taxable account and an income-oriented (high-dividend) investment in a tax-favoured account specifically to minimise their overall tax liability, even if this is not the allocation that would otherwise best reflect their genuine investment preferences alone.",
          note: "A strong answer explains the general principle <em>and</em> provides a concrete example of tax-driven behaviour.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why an investor's time horizon, liquidity needs, behavioural tendencies, and tax position should all be understood together before recommending an investment strategy.",
          answer:
            "These characteristics interact — a behaviourally loss-averse investor with a short time horizon may need a materially more conservative strategy than the same behavioural profile paired with a long time horizon, so a sound recommendation must integrate all of an investor's genuine characteristics together, not consider any single dimension in isolation.",
          note: "This connects directly to the holistic-investor-characterisation theme developed in this course.",
        },
      ],
    },
    {
      id: "sp5-q6",
      title: "Actuarial techniques for investment strategy",
      modules: "Modules 19, 20",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "List",
          marks: 3,
          question:
            "List the four genuine actuarial techniques named in the official syllabus for developing an appropriate investment strategy.",
          answer:
            "Asset pricing models, asset/liability modelling, liability hedging, and dynamic liability benchmarks.",
          note: "A complete answer names all four techniques precisely.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain what asset/liability modelling achieves for an investor with genuine liability obligations, echoing CM2's material.",
          answer:
            "Asset/liability modelling projects how a specific investor's assets and liabilities would jointly evolve under a range of future scenarios, revealing whether a proposed investment strategy is likely to meet the investor's specific liability obligations with acceptable risk, directly applying CM2's matching principles in a forward-looking, scenario-based way.",
          note: "This connects directly to CM2's ALM material applied to a genuine strategy-development context.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why a dynamic liability benchmark might be more useful than a static, fixed benchmark for an investor with evolving liability obligations.",
          answer:
            "A dynamic liability benchmark adjusts over time to reflect the genuine, evolving characteristics of the investor's actual liabilities (e.g. as they mature or their duration changes), providing a more relevant ongoing performance comparison than a static benchmark that might quickly become misaligned with the investor's real, evolving liability profile. A static benchmark set at one point in time could become misleading as a comparison point precisely because the investor's own liabilities have moved on, while the benchmark has not.",
          note: "A strong answer explains <em>why</em> a static benchmark becomes misleading over time, not just asserts that dynamic benchmarks are 'better'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on how liability hedging directly addresses the asset/liability mismatching risk named in Module 18's risk-monitoring material.",
          answer:
            "Liability hedging deliberately structures a portion of the investment portfolio to closely track the genuine movements of specified liabilities, directly reducing the asset/liability mismatching risk identified as a genuine risk category to be monitored and managed.",
          note: "This connects directly to the risk-monitoring-to-strategy-response theme developed in this course.",
        },
      ],
    },
    {
      id: "sp5-q7",
      title: "Portfolio management styles and institutional derivative use",
      modules: "Modules 21, 23",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Distinguish",
          marks: 4,
          question:
            "Distinguish between 'value' and 'momentum' active management styles, including the genuine underlying belief each rests on.",
          answer:
            "Value investing seeks securities trading below their genuine intrinsic or fundamental worth, resting on the belief that market prices can temporarily diverge from true fundamental value and will eventually converge back toward it. Momentum investing buys securities that have recently performed well (and sells those performing poorly), resting on the belief that recent price trends tend to persist for some period — a philosophically opposite approach, since value seeks underperformers relative to fundamentals while momentum seeks recent outperformers.",
          note: "A strong answer explicitly identifies these as philosophically <em>opposite</em> approaches, not just describes each independently.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a pension scheme might use forward foreign exchange contracts specifically for currency hedging.",
          answer:
            "A scheme holding overseas assets to fund domestic-currency liabilities faces genuine currency risk, since asset value in domestic-currency terms can fall purely due to exchange rate movements, unrelated to the underlying asset's own performance, so forward FX contracts can hedge this specific currency mismatch, directly applying the general asset-liability matching principle to currency exposure specifically.",
          note: "This connects directly to CM2's and SA4's ALM material applied to a genuine currency-hedging context.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why 'transition management' is important when a large institutional investor makes a significant change to its portfolio allocation.",
          answer:
            "Transition management is the specialist process of executing a large-scale change in a portfolio's asset allocation efficiently, minimising genuine transaction costs and market impact; without careful management, a large, poorly-executed transition could incur significant hidden costs from market impact and prolonged exposure to unintended interim risk during the transition period, potentially undermining even a well-justified strategic reallocation decision.",
          note: "A strong answer explains <em>why</em> poor execution could undermine an otherwise sound strategic decision, not just that transitions should be 'managed carefully'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why a multifactor model provides richer insight than a single-factor asset pricing model when constructing a portfolio.",
          answer:
            "A multifactor model explains genuine asset returns using multiple systematic risk factors simultaneously, rather than a single risk-return relationship, providing a richer, more nuanced framework for understanding what drives returns and for revealing a portfolio's genuine exposure to specific risk factors that a single-factor model would not show.",
          note: "This connects directly to the multifactor-model-extension theme developed in this course.",
        },
      ],
    },
    {
      id: "sp5-q8",
      title: "Portfolio risk measurement and Value at Risk",
      modules: "Module 22",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "An &pound;80,000,000 institutional portfolio has an annual return volatility of 10%. Assuming returns are normally distributed, calculate the 1-year 95% Value at Risk (VaR), using a z-score of 1.645 for the 95% confidence level.",
          answer:
            "VaR = &pound;80,000,000 &times; 10% &times; 1.645 = &pound;13,160,000. This means there is a 5% chance the portfolio loses more than approximately &pound;13.16 million over the year.",
          note: "Arithmetic check: 80,000,000×0.10×1.645=13,160,000. Full marks require both the calculation and a correct statement of what the resulting VaR figure represents.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain what a 'risk budget' is, and how it might be used alongside the VaR figure calculated in part (i).",
          answer:
            "A risk budget allocates a genuine, explicit amount of acceptable risk (e.g. measured via VaR or tracking error) across different components of a portfolio or investment decisions, ensuring the total portfolio's aggregate risk remains within an intended overall limit. The &pound;13,160,000 VaR figure could be checked against the scheme's overall risk budget to confirm the portfolio remains within its intended aggregate risk tolerance, and could be further decomposed to check individual position-level risk budgets.",
          note: "A strong answer connects the numeric VaR result directly to the risk-budget governance concept.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why tracking error would provide complementary insight to the VaR figure calculated in part (i) for an actively-managed portfolio.",
          answer:
            "VaR measures genuine absolute downside risk in monetary terms, while tracking error measures genuine relative risk against a benchmark; using both together provides a more complete risk picture, since a portfolio could have low tracking error (closely following its benchmark) while the benchmark itself carries significant absolute VaR, or vice versa, so neither measure alone gives a fully complete risk picture.",
          note: "A strong answer explains the genuine difference between absolute and relative risk, not just asserts both measures are 'useful'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why risk attribution is a valuable additional step beyond simply calculating the portfolio's total VaR figure.",
          answer:
            "Risk attribution decomposes where the portfolio's genuine risk actually comes from (e.g. which specific positions or factor exposures contribute most), revealing important concentration insights that a single aggregate VaR number alone would not show, since correlated or highly volatile positions can dominate overall risk even while representing a modest proportion of total portfolio value.",
          note: "This connects the numeric VaR calculation directly to the risk-attribution material developed in this course.",
        },
      ],
    },
    {
      id: "sp5-q9",
      title: "Performance attribution analysis",
      modules: "Modules 16, 17",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A portfolio returned 9.1% over a year, against a benchmark return of 7.2%. Attribution analysis identifies a sector allocation effect of 1.2%. Calculate the total active return and the resulting stock selection effect.",
          answer:
            "Total active return = 9.1% &minus; 7.2% = 1.9%. Stock selection effect = 1.9% &minus; 1.2% (allocation effect) = 0.7%.",
          note: "Arithmetic check: 9.1%-7.2%=1.9%; 1.9%-1.2%=0.7%.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why sector allocation and stock selection should be assessed as separate skills, rather than combined into the single 1.9% active return figure calculated in part (i).",
          answer:
            "Sector allocation and stock selection are separate skills that can offset each other — being right about which sectors to favour doesn't guarantee genuine skill in choosing the best individual stocks within those correctly-favoured sectors, so overall performance depends on both skills together, and only decomposing them reveals which specific skill drove the result.",
          note: "A strong answer explains why the two skills are distinct and can diverge, not just asserts that decomposition is 'more detailed'.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why this portfolio's performance might look different when compared against a peer group of similar managers rather than against the market index used in part (i).",
          answer:
            "The whole peer group could outperform or underperform the broad market together (e.g. due to a shared style tilt that happened to be in or out of favour), meaning this manager could beat the market index while still underperforming their peer group, or vice versa, since these two comparisons answer different relative-performance questions.",
          note: "A strong answer explicitly explains why the two comparisons can diverge, not just asserts they are 'different'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why a risk-adjusted performance measure should be considered alongside the raw 1.9% active return figure calculated in part (i).",
          answer:
            "A risk-adjusted measure assesses whether this genuine outperformance reflects genuine skill or simply reflects taking on more risk than the mandate intended; a manager achieving a higher raw return by accepting materially more risk has not necessarily demonstrated genuine skill superior to one achieving a slightly lower return with materially less risk.",
          note: "This connects the numeric attribution result directly to the risk-adjusted-performance theme developed in this course.",
        },
      ],
    },
    {
      id: "sp5-q10",
      title: "Investment indices and their construction",
      modules: "Modules 14, 15",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why NAV (net asset value) might be a more appropriate performance measure than a market-price-based measure for a fund holding illiquid assets.",
          answer:
            "NAV directly reflects the genuine underlying value of a fund's holdings (assets minus liabilities), providing a meaningful valuation even where no continuous, liquid market price exists for the fund itself, unlike a market-price-based approach which would require an observable trading price that illiquid asset funds often lack.",
          note: "A strong answer explains <em>why</em> NAV solves the illiquid-asset valuation problem, not just defines NAV.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why constructing a representative index for unlisted or illiquid assets is materially more difficult than for listed equities.",
          answer:
            "Unlisted or illiquid assets lack continuously observable market prices, so an index tracking them must rely on periodic appraisals or modelled valuations rather than genuine, real-time transaction prices, introducing genuine valuation lag and smoothing effects that can distort the index's apparent volatility and correlation with other, more liquid asset classes.",
          note: "This connects directly to the illiquid-asset-valuation-challenge theme developed in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss the genuine limitations of performance measurement techniques that an actuary should bear in mind when interpreting a fund's reported performance figures.",
          answer:
            "Performance measures can be distorted by the timing of cashflows into and out of a portfolio, can depend heavily on the specific period chosen for measurement (a different period could tell a materially different story), and may not fully capture genuine risk taken to achieve the reported return, meaning raw performance figures require careful, critical interpretation rather than being taken at face value.",
          note: "A strong answer names multiple genuine limitations, not just one, demonstrating critical awareness rather than uncritical acceptance of reported figures.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why the same investment index might serve different purposes depending on whether it is used as a performance benchmark or as the basis for an index-tracking product.",
          answer:
            "As a benchmark, an index provides a genuine, independent comparison point for assessing active manager performance; as the basis for a tracking product, the same index instead becomes the genuine, direct investment target itself, meaning index construction methodology decisions can matter differently depending on which of these two purposes is primary.",
          note: "This connects directly to the dual-purpose-of-indices theme developed in this course.",
        },
      ],
    },
  ],
});

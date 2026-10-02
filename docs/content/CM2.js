// CM2 Financial Engineering and Loss Reserving: flashcards and practice questions.
//
// Hand-edited. docs/content/README.md describes the format and its rules,
// above all that cards are append-only: a card's identity is its position.
// After editing, run: node scripts/build-catalog.mjs
registerContent("CM2", {
  modules: [
    {
        "id": "m01",
        "title": "The Efficient Markets Hypothesis",
        "description": "Introduces the EMH's three forms (weak, semi-strong, strong) and what each implies about whether investors can beat the market using different types of information.",
        "cards": [
            {
                "q": "What are the three forms of the Efficient Markets Hypothesis?",
                "a": "Weak form, semi-strong form, and strong form.",
                "explain": "These three forms are nested, each a strictly stronger claim than the last — think of them as concentric circles: strong form implies semi-strong form implies weak form (but not the reverse), since each adds a wider category of information that prices must already reflect."
            },
            {
                "q": "What does the weak form of EMH state?",
                "a": "Current prices reflect all information contained in the historical price series — technical analysis cannot generate abnormal returns.",
                "explain": "This is the narrowest, most defensible form of the hypothesis — it only rules out <em>one</em> specific strategy (technical analysis based on past prices), leaving open the possibility that fundamental analysis or inside information could still beat the market, which is exactly what the stronger forms address."
            },
            {
                "q": "What does the semi-strong form of EMH state?",
                "a": "Current prices reflect all publicly available information, not just historical prices — fundamental analysis of public information cannot generate abnormal returns.",
                "explain": "This is the version most often tested empirically and most relevant to everyday investing — it directly rules out beating the market using company accounts, news, economic data, or any other information a member of the public could access."
            },
            {
                "q": "What does the strong form of EMH state?",
                "a": "Current prices reflect all information, public and private (inside) — even insider information cannot generate abnormal returns.",
                "explain": "This is the most extreme, least empirically supported form — the existence of insider trading laws (and the fact regulators actively prosecute it) is itself informal evidence that markets are generally <em>not</em> strong-form efficient, since insiders can and do profit from private information."
            },
            {
                "q": "If markets are semi-strong form efficient, can an investor profit from insider information?",
                "a": "Yes — semi-strong form only covers publicly available information, so private/inside information could still generate abnormal returns.",
                "explain": "This tests whether you understand the nesting structure from the opening card precisely — semi-strong form is a <em>weaker</em> claim than strong form, so it explicitly leaves room for exactly this possibility; only strong-form efficiency would rule out profiting from inside information."
            },
            {
                "q": "What is one piece of evidence often cited against weak form efficiency?",
                "a": "Momentum or mean-reversion patterns found in some studies of historical stock returns.",
                "explain": "If historical price patterns predict future returns (even weakly), that directly contradicts weak-form efficiency's claim that past prices carry no exploitable information — worth noting these findings remain debated and don't necessarily survive transaction costs."
            },
            {
                "q": "What is one piece of evidence often cited against semi-strong form efficiency?",
                "a": "Anomalies such as the small-firm effect or post-earnings-announcement drift, where returns following public announcements are partly predictable.",
                "explain": "'Post-earnings-announcement drift' is a particularly striking anomaly worth remembering by name — if prices were truly semi-strong efficient, they'd jump to the new correct level immediately on an earnings announcement, not continue drifting in the same direction for weeks afterward as observed."
            },
            {
                "q": "What is the 'rational expectations' hypothesis?",
                "a": "The idea that market participants form expectations optimally, using all available information, without systematic bias.",
                "explain": "This is a closely related but distinct idea from EMH itself — rational expectations is about <em>how</em> individuals form beliefs (unbiased, using all information), while EMH is a claim about the resulting <em>prices</em>; EMH is often built on rational-expectations-style reasoning about investor behaviour."
            },
            {
                "q": "What is 'technical analysis'?",
                "a": "Using patterns in historical prices/volumes to try to predict future price movements.",
                "explain": "This is precisely the strategy weak-form efficiency claims is futile — recognising this direct link (weak form specifically addresses technical analysis) is worth having automatic, since it's the most commonly tested pairing in this module."
            },
            {
                "q": "What is 'fundamental analysis'?",
                "a": "Using publicly available information (accounts, economic data, etc.) to estimate an asset's intrinsic value.",
                "explain": "This is the strategy semi-strong form efficiency claims is futile — the direct pairing to remember is: weak form rules out technical analysis, semi-strong form additionally rules out fundamental analysis, strong form additionally rules out even inside information."
            },
            {
                "q": "Why is testing for strong form efficiency inherently difficult?",
                "a": "It requires observing outcomes from genuine inside information, which is hard to identify and often illegal to trade on.",
                "explain": "This is a practical research problem, not just a theoretical one — you'd need to find cases where someone traded on verified private information and measure whether they profited, but such trading is illegal and deliberately concealed, making clean empirical evidence scarce."
            },
            {
                "q": "What does the 'joint hypothesis problem' refer to in testing market efficiency?",
                "a": "Any test of market efficiency is also a test of the asset pricing model used to define 'abnormal' returns, so a rejection could mean either is wrong.",
                "explain": "This is a subtle and important methodological point worth understanding carefully — you can never test EMH in complete isolation, because 'abnormal return' only has meaning relative to <em>some</em> model of expected return (like CAPM, Module 6); if a study finds abnormal returns, it's ambiguous whether markets are inefficient or the pricing model used to judge 'normal' was simply wrong."
            },
            {
                "q": "If a market is EMH-efficient, what happens to prices when new information arrives?",
                "a": "Prices adjust quickly and accurately to reflect the new information.",
                "explain": "This is the intuitive, mechanistic picture behind all three forms of the hypothesis — efficiency isn't really about prices being 'correct' at any instant so much as about them incorporating new information rapidly, with no persistent lag or systematic mispricing left to exploit."
            },
            {
                "q": "Give one implication of weak form efficiency for investment strategy.",
                "a": "There's no value in trying to predict future prices purely from past price patterns (technical analysis is futile).",
                "explain": "This restates the technical-analysis link from earlier in this module as a direct practical takeaway — worth having ready as a one-line answer to 'what does this mean for an investor', since exam questions often ask for the <em>practical</em> implication, not just the bookwork definition."
            },
            {
                "q": "Why is understanding EMH important for actuaries pricing financial guarantees?",
                "a": "It underpins assumptions about how quickly and accurately markets price risk, which affects valuation and hedging assumptions.",
                "explain": "This closes the module with the professional 'why does this matter' — the whole risk-neutral pricing framework covered later in this module list (Modules 12-14) implicitly assumes markets are efficient enough that no-arbitrage arguments hold, so EMH is the philosophical foundation the rest of the derivatives-pricing syllabus quietly rests on."
            }
        ]
    },
    {
        "id": "m02",
        "title": "Utility theory",
        "description": "Introduces utility functions as a way to model investor preferences and risk attitudes, the expected utility theorem, and common utility function forms.",
        "cards": [
            {
                "q": "What is a 'utility function'?",
                "a": "A mathematical function representing an investor's preferences over different levels of wealth or outcomes.",
                "explain": "This module gives formal mathematical shape to the informal 'risk-averse investor pays for insurance' intuition — everything in this module (concavity, the Arrow-Pratt measures, specific functional forms) exists to make that everyday intuition precise and calculable."
            },
            {
                "q": "What is the expected utility theorem?",
                "a": "Under certain axioms of rational choice, an investor's preferences over uncertain outcomes can be represented by maximising expected utility.",
                "explain": "This is the theoretical justification for why 'maximise expected utility' is a sensible decision rule at all — rather than just assuming it, the theorem shows that a small set of intuitively reasonable axioms about rational preference (transitivity, continuity, independence) together <em>imply</em> that behaviour must take this expected-utility-maximising form."
            },
            {
                "q": "What does 'non-satiation' mean for a utility function?",
                "a": "More wealth is always preferred to less — the utility function is increasing (positive marginal utility).",
                "explain": "This is a minimal, almost universally assumed condition (few investors prefer less money) — note it says nothing about risk attitude at all, which is entirely determined by the function's <em>curvature</em>, covered in the very next cards."
            },
            {
                "q": "How is risk aversion characterised in terms of a utility function's shape?",
                "a": "A risk-averse investor has a concave utility function (diminishing marginal utility of wealth).",
                "explain": "The intuition: if each extra pound of wealth adds progressively <em>less</em> satisfaction (concavity/diminishing marginal utility), then the pain of losing a pound outweighs the pleasure of gaining one — which is exactly why a risk-averse investor prefers a certain outcome over a risky one with the same expected value."
            },
            {
                "q": "What distinguishes risk aversion, risk neutrality, and risk seeking in terms of utility function curvature?",
                "a": "Risk aversion is concave, risk neutrality is linear, and risk seeking is convex.",
                "explain": "This three-way classification is worth being able to sketch instantly — a linear (risk-neutral) utility function means an investor cares only about <em>expected</em> wealth, indifferent to risk entirely, while convex (risk-seeking) is the mirror image of concave, actually preferring the riskier gamble over a certain amount of the same expected value."
            },
            {
                "q": "What does it mean for an investor to display 'declining absolute risk aversion'?",
                "a": "They become less risk-averse (in absolute monetary terms) as their wealth increases.",
                "explain": "This matches common intuition well: a billionaire is less troubled by the prospect of losing a fixed £1,000 than someone with modest savings, even though both might have the <em>same</em> relative (proportional) risk aversion — this distinction between absolute and relative risk aversion is exactly what the next two cards formalise."
            },
            {
                "q": "How is the Arrow-Pratt measure of absolute risk aversion defined?",
                "a": "$A(w) = -\\frac{u''(w)}{u'(w)}$",
                "explain": "The intuition behind this specific ratio: $u''(w)$ (negative for a risk-averse concave function) captures the <em>degree</em> of concavity, while dividing by $u'(w)$ removes the effect of simply rescaling the utility function (multiplying $u$ by a constant doesn't change an investor's actual preferences, but it would change $u''$ alone) — the negative sign makes $A(w)$ come out positive for risk-averse investors."
            },
            {
                "q": "How is relative risk aversion defined?",
                "a": "$R(w) = -\\frac{w\\,u''(w)}{u'(w)} = w\\,A(w)$",
                "explain": "This is simply absolute risk aversion scaled by wealth itself — relative risk aversion measures sensitivity to <em>proportional</em> changes in wealth (e.g. losing 10% of wealth) rather than fixed monetary amounts, which is often the more stable, realistic way to describe how risk attitude changes as someone gets richer."
            },
            {
                "q": "What is a 'state-dependent' utility function?",
                "a": "A utility function that depends not just on wealth but also on which state of the world has occurred.",
                "explain": "This relaxes the usual simplifying assumption that only the <em>number</em> (wealth level) matters — a realistic example: £10,000 might be worth more to you in a state where you're also badly injured (needing care) than in an otherwise-identical state where you're healthy, even at the same wealth level."
            },
            {
                "q": "Give one commonly used utility function with constant relative risk aversion.",
                "a": "The power utility function (isoelastic utility).",
                "explain": "'Isoelastic' signals exactly what 'constant relative risk aversion' means mathematically — the elasticity of marginal utility with respect to wealth stays constant, which is why $R(w)$ works out to a fixed number rather than varying with $w$, unlike the general case."
            },
            {
                "q": "Give one commonly used utility function with constant absolute risk aversion.",
                "a": "The exponential utility function.",
                "explain": "Constant absolute risk aversion (CARA) is a strong assumption — it implies an investor would pay exactly the same absolute risk premium to avoid a given gamble regardless of whether they're already rich or poor, which is why exponential utility, despite its mathematical convenience, is often seen as less realistic than power utility for describing real investors."
            },
            {
                "q": "How can utility theory be used to analyse a simple insurance problem?",
                "a": "By comparing the expected utility of wealth with and without insurance, to see whether purchasing insurance increases expected utility.",
                "explain": "This is the module's central practical application — the technique is always the same: compute $E[u(\\text{wealth without insurance})]$ against $E[u(\\text{wealth with insurance, net of premium})]$, and a risk-averse investor should buy insurance whenever the latter is higher, even though insurance costs <em>more</em> than the expected claim on average."
            },
            {
                "q": "Why might a risk-averse individual pay a premium for insurance greater than the expected loss?",
                "a": "The certainty of a smaller, known loss gives higher expected utility than an uncertain, potentially large loss, even at a premium above the expected claim cost.",
                "explain": "This is the concave-utility-function intuition from earlier in this module made fully concrete — it's precisely <em>why</em> insurance is a mutually beneficial trade at all: the insurer (large, diversified, closer to risk-neutral by pooling many risks) can profitably charge more than the expected loss, while the individual policyholder (concave utility, exposed to the <em>full</em> risk alone) is still better off paying it."
            },
            {
                "q": "What is quadratic utility, and what is one criticism of it?",
                "a": "$u(w) = w - bw^2$; it implies increasing absolute risk aversion and has a maximum, beyond which more wealth reduces utility — unrealistic.",
                "explain": "'Increasing absolute risk aversion' directly contradicts the declining-absolute-risk-aversion intuition from earlier in this module (getting richer makes you <em>more</em> risk-averse under quadratic utility, the opposite of common sense) — despite this and the even stranger 'more wealth is bad beyond some point' property, quadratic utility remains popular because it connects neatly to mean-variance portfolio theory (Module 4)."
            },
            {
                "q": "How does log utility ($u(w) = \\ln w$) behave in terms of risk aversion?",
                "a": "It displays constant relative risk aversion equal to 1, a special case of the power utility family.",
                "explain": "This closes the module by tying log utility back to the power/isoelastic family from earlier — worth verifying directly: $u'(w)=1/w$, $u''(w)=-1/w^2$, so $R(w)=-w\\cdot(-1/w^2)/(1/w)=1$, a clean constant, confirming log utility is exactly the isoelastic family's special case where the constant relative risk aversion parameter equals 1."
            }
        ]
    },
    {
        "id": "m03",
        "title": "Measures of investment risk",
        "description": "Covers different ways to quantify investment risk beyond simple variance — semi-variance, shortfall probabilities, Value at Risk, TailVaR — and how insurers help mitigate risk.",
        "cards": [
            {
                "q": "What is the 'variance of return' as a risk measure?",
                "a": "The expected squared deviation of the return from its mean, treating upside and downside deviations symmetrically.",
                "explain": "This module surveys alternatives to variance precisely because 'symmetric' is often the wrong assumption — Module 2's utility theory shows investors are fundamentally concerned with <em>downside</em> outcomes, so a risk measure that penalises a lucky upside surprise exactly as much as an equally-sized loss doesn't really match how risk-averse investors actually think."
            },
            {
                "q": "What is 'downside semi-variance'?",
                "a": "A risk measure only counting deviations below the mean (or a target return), ignoring upside variability.",
                "explain": "This is the direct fix for variance's symmetry problem flagged above — by construction it can never exceed ordinary variance, and it's arguably a more honest reflection of what a risk-averse investor actually dislikes: falling short, not doing better than expected."
            },
            {
                "q": "What is a 'shortfall probability'?",
                "a": "The probability that returns fall below some specified target or threshold level.",
                "explain": "This is an even simpler downside-focused measure than semi-variance — it only asks 'how <em>likely</em> is a bad outcome', saying nothing about how severe that bad outcome might be, which is precisely the gap VaR and TailVaR (below) are designed to address in different ways."
            },
            {
                "q": "What is 'Value at Risk' (VaR)?",
                "a": "The loss amount that will not be exceeded with a given confidence level over a specified time horizon.",
                "explain": "VaR answers a specific, practical question: 'how bad could things get, 95% (or 99%) of the time' — but note it says nothing about the <em>other</em> 5%, which is exactly the weakness the next couple of cards raise, and which TailVaR is built to fix."
            },
            {
                "q": "What is 'TailVaR' (also called Expected Shortfall)?",
                "a": "The expected loss, given that the loss exceeds the VaR threshold — the average of the losses in the worst tail of the distribution.",
                "explain": "This directly answers VaR's blind spot: rather than just marking <em>where</em> the bad 5% tail begins, TailVaR averages over what actually happens <em>within</em> that tail — two portfolios can share an identical VaR while having very different TailVaR, if one has a much longer, fatter tail of extreme losses beyond the threshold."
            },
            {
                "q": "Give one criticism of VaR as a risk measure.",
                "a": "It doesn't indicate how large losses could be beyond the threshold, and it isn't always sub-additive across a diversified portfolio.",
                "explain": "The sub-additivity point is worth understanding concretely: a sensible risk measure should never say a <em>combined</em> portfolio is riskier than the sum of its parts (diversification should help, or at worst do nothing) — but VaR can occasionally violate this, giving a perverse incentive to split up a portfolio rather than diversify it."
            },
            {
                "q": "Why is TailVaR generally considered a better risk measure than VaR?",
                "a": "It captures the severity of losses in the tail beyond the threshold, and satisfies coherent risk measure properties including sub-additivity.",
                "explain": "'Coherent' is a specific technical term worth knowing — a coherent risk measure satisfies a short list of sensible mathematical axioms (including sub-additivity from the card above), and TailVaR is coherent while VaR generally is not, which is the formal version of 'TailVaR behaves better'."
            },
            {
                "q": "How does the choice of risk measure relate to an investor's utility function?",
                "a": "Risk measures implicitly assume something about what an investor cares about, which should be consistent with the shape of their utility function.",
                "explain": "This connects the whole module back to Module 2 — variance implicitly assumes a quadratic-utility-style symmetric concern for risk, while semi-variance/shortfall-probability/VaR/TailVaR each implicitly assume a more asymmetric, downside-focused concern, closer to how most concave utility functions actually behave."
            },
            {
                "q": "Why might variance be a poor risk measure for a skewed return distribution?",
                "a": "It treats upside and downside deviations symmetrically, but investors typically care more about downside risk for skewed distributions.",
                "explain": "This restates the module's opening motivation with 'skewed' made explicit — for a <em>symmetric</em> distribution, variance and semi-variance actually rank risks fairly similarly (semi-variance is roughly half of variance either way), but for a skewed distribution the two measures can disagree meaningfully, exactly when the distinction matters most."
            },
            {
                "q": "How does the thickness of a return distribution's tails affect risk assessment?",
                "a": "Fat-tailed distributions have a higher chance of extreme outcomes than the normal distribution suggests, understating true tail risk if ignored.",
                "explain": "This is a direct preview of Module 9's empirical evidence against the log-normal model (fat tails, excess kurtosis) — a risk measure calculated assuming normality can meaningfully understate real tail risk, which is exactly why understanding a distribution's actual tail behaviour matters before trusting any risk measure derived from it."
            },
            {
                "q": "How can insurance companies help reduce or remove risk for policyholders?",
                "a": "By pooling many independent risks, diversifying away idiosyncratic risk, and charging a premium to cover expected cost plus a margin.",
                "explain": "This is Module 5's diversifiable/systematic risk distinction previewed in an insurance context — pooling works precisely because individual policyholders' claim risks are largely independent (idiosyncratic), so the <em>law of large numbers</em> shrinks the insurer's relative uncertainty about the total, even though each individual policyholder's own risk remains fully undiversified."
            },
            {
                "q": "What is 'moral hazard'?",
                "a": "The tendency for a party to take on more risk (or behave less carefully) once they are insured against the consequences of that risk.",
                "explain": "This is a genuine practical limitation of the insurance-pooling story above — insurance changes <em>behaviour</em>, not just who bears a fixed risk, and insurers must price and design contracts (excesses, no-claims discounts) to manage this incentive problem rather than assuming risk stays constant once cover is in place."
            },
            {
                "q": "What is 'adverse selection'?",
                "a": "The tendency for those most likely to claim (highest risk) to be more likely to seek insurance, if the insurer cannot fully distinguish risk levels.",
                "explain": "This is a different problem from moral hazard, worth keeping distinct — moral hazard is about behaviour changing <em>after</em> buying insurance; adverse selection is about <em>who</em> chooses to buy insurance in the first place, driven by asymmetric information the insurer doesn't have but the applicant does."
            },
            {
                "q": "How might an insurer mitigate adverse selection?",
                "a": "Through underwriting (using available information to price risk accurately) or by requiring evidence of insurability.",
                "explain": "This is the direct practical fix for the information asymmetry underlying adverse selection above — the more accurately an insurer can classify applicants by their true risk (via underwriting questions, medical evidence, etc.), the less scope there is for high-risk applicants to hide among a pool priced for average risk."
            },
            {
                "q": "How would you compare two investment opportunities using multiple risk measures at once?",
                "a": "Calculate each measure for both opportunities and compare — different measures can give different rankings.",
                "explain": "This closes the module with an important practical caution — since every risk measure covered here implicitly emphasises a different aspect of risk (symmetric spread, downside-only, tail severity), two investments can rank differently depending which measure you use, so a robust comparison should check several, not rely on just one."
            }
        ]
    },
    {
        "id": "m04",
        "title": "Portfolio theory",
        "description": "Covers mean-variance portfolio theory — how combining risky assets can reduce risk through diversification, and how to construct an optimal portfolio.",
        "cards": [
            {
                "q": "What are the key assumptions of mean-variance portfolio theory?",
                "a": "Investors care only about the expected return and variance of returns, and choose portfolios to maximise return for a given variance (or minimise variance for a given return).",
                "explain": "This is the direct link back to Module 2's quadratic utility function — assuming investors care <em>only</em> about mean and variance is equivalent to assuming (or approximating) a quadratic-style utility function, which is exactly why that unrealistic-looking utility form kept appearing throughout Module 2: it's the theoretical foundation this whole module builds on."
            },
            {
                "q": "How is the expected return of a portfolio of two assets calculated?",
                "a": "As the weighted average of the individual assets' expected returns, weighted by their portfolio proportions.",
                "explain": "Expected return is straightforwardly linear in the weights — this simple additivity is what makes the <em>variance</em> formula (next card) comparatively more interesting, since variance does <em>not</em> behave the same simple linear way once you account for how the two assets move together."
            },
            {
                "q": "How is the variance of a two-asset portfolio calculated?",
                "a": "$\\sigma_p^2 = w_1^2\\sigma_1^2 + w_2^2\\sigma_2^2 + 2w_1w_2\\,\\text{Cov}(R_1,R_2)$",
                "explain": "This is exactly CS1 Module 4's variance-of-a-linear-combination formula, applied here to portfolio returns — the crucial third term (the covariance cross-term) is precisely what creates the possibility of diversification benefit, since it can be negative even when both individual variances are positive."
            },
            {
                "q": "What is the 'efficient frontier'?",
                "a": "The set of portfolios offering the highest expected return for each level of risk (variance/standard deviation).",
                "explain": "This is the module's central geometric object, and it's worth picturing directly: plot every achievable portfolio's risk and return, and the efficient frontier is the upper-left boundary of that whole feasible region — any portfolio not on this boundary is 'dominated' (see the dedicated card below) by one that offers more return for the same risk."
            },
            {
                "q": "What benefit does diversification provide, according to mean-variance theory?",
                "a": "Combining assets that aren't perfectly positively correlated reduces overall portfolio variance below the weighted average of individual variances.",
                "explain": "This is the direct payoff of the covariance cross-term in the variance formula above — as long as correlation is below +1, that cross-term contributes <em>less</em> than it would if the assets moved in perfect lockstep, pulling total portfolio variance below the naive weighted-average figure."
            },
            {
                "q": "What happens to the potential diversification benefit as the correlation between two assets decreases?",
                "a": "The diversification benefit increases — lower (especially negative) correlation gives greater risk reduction for a given expected return.",
                "explain": "This follows directly from the variance formula: the covariance term $2w_1w_2\\text{Cov}(R_1,R_2)$ shrinks (and can go negative) as correlation falls, pulling total portfolio variance down further — negatively correlated assets are the most powerful diversifiers, since one tends to rise exactly when the other falls."
            },
            {
                "q": "When does mean-variance portfolio theory lead to a unique 'optimum' portfolio for an investor?",
                "a": "When combined with the investor's specific indifference curves (from their utility function/risk aversion), which pick a single point on the efficient frontier.",
                "explain": "This is the module's genuine synthesis point, tying Modules 2 and 4 together explicitly — the efficient frontier alone only narrows down the <em>sensible</em> choices; it takes an individual investor's own risk-aversion-derived indifference curves (Module 2) to pin down exactly <em>where</em> on that frontier they personally should sit."
            },
            {
                "q": "What is the 'minimum variance portfolio'?",
                "a": "The portfolio on the efficient frontier (or feasible set) with the lowest possible variance, regardless of expected return.",
                "explain": "This is the single specific point at the very leftmost tip of the efficient frontier — it's the natural choice for an <em>extremely</em> risk-averse investor, and it also serves as the boundary point separating the efficient frontier (above it) from the inefficient lower portion of the feasible set (below it, which no rational investor would choose)."
            },
            {
                "q": "Why can adding a poorly-performing asset to a portfolio sometimes still be beneficial?",
                "a": "If its returns are weakly or negatively correlated with the rest of the portfolio, it can reduce overall variance more than it reduces expected return.",
                "explain": "This is a counterintuitive result worth internalising — an asset judged 'bad' purely by looking at its own expected return in isolation can still <em>improve</em> a portfolio's risk-return trade-off overall, precisely because diversification benefit (from the covariance cards above) is a property of the <em>whole</em> portfolio, not of any single asset viewed alone."
            },
            {
                "q": "How does mean-variance theory extend from two assets to $n$ assets?",
                "a": "Portfolio variance depends on all pairwise covariances between assets, requiring a full covariance matrix.",
                "explain": "This is the same two-asset variance formula generalised — with $n$ assets there are $n$ variance terms plus $\\binom{n}{2}$ distinct pairwise covariance terms, all of which must be estimated to compute portfolio variance, which is exactly why real-world implementations need a full $n\\times n$ covariance matrix rather than just $n$ individual variance figures."
            },
            {
                "q": "What is a key limitation of mean-variance portfolio theory?",
                "a": "It assumes returns are adequately described by mean and variance alone, ignoring skewness/kurtosis and other risk aspects.",
                "explain": "This is exactly Module 3's critique of variance as a risk measure, now applied specifically to the portfolio-optimisation context — if real returns are skewed or fat-tailed (as Module 9 shows empirically), optimising purely for mean and variance can lead to portfolios that look efficient on paper but carry meaningfully more downside risk than the two-moment summary suggests."
            },
            {
                "q": "What does it mean for a portfolio to be 'dominated' in mean-variance space?",
                "a": "There exists another portfolio with at least as high expected return and no higher variance — a rational investor would never choose the dominated one.",
                "explain": "This is the formal definition underlying the efficient frontier's construction — the frontier is, by definition, exactly the set of <em>non</em>-dominated portfolios; every portfolio below or to the right of it is dominated by some portfolio on the frontier, which is why no rational mean-variance investor would ever choose one."
            },
            {
                "q": "Why might mean-variance theory be less appropriate for assets with highly skewed or fat-tailed return distributions?",
                "a": "Two moments (mean and variance) don't fully capture risk when distributions are skewed or have fat tails.",
                "explain": "This restates the earlier limitation card with the specific mechanism named — mean and variance are only the first two moments of a distribution; skewness (the third moment) and kurtosis (the fourth) can matter a great deal for risk-averse decision-making, and a two-moment framework is blind to both by construction."
            },
            {
                "q": "Give one practical benefit of mean-variance theory for investors, despite its simplifying assumptions.",
                "a": "It provides a tractable, quantifiable framework for balancing risk and return, and demonstrates the benefit of diversification clearly.",
                "explain": "This closes the module by weighing its known limitations against its enduring practical value — despite every critique raised in this module (ignoring skewness/kurtosis, assuming only two moments matter), mean-variance theory remains the standard <em>starting</em> framework in real portfolio management, precisely because it's tractable enough to actually implement with real data, unlike some more theoretically complete alternatives."
            },
            {
                "q": "If two assets are perfectly positively correlated, what happens to the diversification benefit of combining them?",
                "a": "There is none — portfolio risk is simply the weighted average of the individual risks.",
                "explain": "This is the limiting case at the opposite extreme from the earlier 'lower correlation increases benefit' card — plug correlation $=+1$ into the two-asset variance formula and the covariance term becomes exactly $2w_1w_2\\sigma_1\\sigma_2$, making the whole expression a perfect square that simplifies to $(w_1\\sigma_1+w_2\\sigma_2)^2$, i.e. portfolio standard deviation is exactly the weighted average with zero diversification benefit."
            }
        ]
    },
    {
        "id": "m05",
        "title": "Models of asset returns",
        "description": "Introduces multifactor models for explaining and predicting asset returns — macroeconomic, fundamental, and statistical factor models — and the single-index model.",
        "cards": [
            {
                "q": "What is a 'multifactor model' of asset returns?",
                "a": "A model expressing an asset's return as a linear function of several underlying risk factors, plus an asset-specific (idiosyncratic) term.",
                "explain": "This is the <em>source</em> side of the covariance structure Module 4's portfolio theory needs — rather than estimating every pairwise covariance directly (a huge number for many assets), a factor model explains co-movement between assets through their <em>shared</em> exposure to a smaller number of common factors, which is far more tractable, as later cards make explicit."
            },
            {
                "q": "What is a 'macroeconomic factor model'?",
                "a": "A multifactor model where the factors are observable macroeconomic variables, such as GDP growth, inflation, or interest rates.",
                "explain": "This is CS1's regression toolkit (Module 12 there) applied directly to finance — the factors here are external, economy-wide variables that plausibly drive many assets' returns simultaneously, which is exactly what makes them useful for explaining <em>systematic</em> co-movement across a portfolio."
            },
            {
                "q": "What is a 'fundamental factor model'?",
                "a": "A multifactor model where the factors are company/security-specific characteristics, such as size, dividend yield, or industry.",
                "explain": "Unlike macroeconomic factors (external to any one company), fundamental factors are properties OF the securities themselves — this is a different philosophy: rather than asking 'what's happening in the economy', it asks 'what <em>kind</em> of company is this, and do similar companies move together'."
            },
            {
                "q": "What is a 'statistical factor model'?",
                "a": "A multifactor model where the factors are derived statistically from the historical covariance structure of returns, without being pre-specified as economic variables.",
                "explain": "This is CS1's principal components analysis (Module 1 there) applied directly to returns data — rather than choosing factors based on economic theory beforehand, this approach lets the <em>data</em> itself reveal whatever common patterns of co-movement exist, at the cost of the interpretability problem raised in a card below."
            },
            {
                "q": "What is the 'single-index model' of asset returns?",
                "a": "A simplified model where an asset's return depends on a single common factor (often the market return) plus an idiosyncratic term.",
                "explain": "This is the simplest possible multifactor model — just <em>one</em> factor, almost always the overall market return — and it's the direct bridge into Module 6's CAPM, which builds its entire theory of expected returns around exactly this single-factor structure."
            },
            {
                "q": "In the single-index model, what does 'beta' represent?",
                "a": "The sensitivity of an asset's return to the common (market) factor.",
                "explain": "This is precisely the same beta that reappears as the centrepiece of Module 6's CAPM formula — recognising it here first, as simply a regression slope coefficient measuring market sensitivity, demystifies what can otherwise feel like an arbitrary parameter suddenly introduced in the CAPM."
            },
            {
                "q": "What is 'diversifiable' (or idiosyncratic) risk?",
                "a": "Risk specific to an individual asset that can be reduced or eliminated by holding a diversified portfolio.",
                "explain": "This is precisely the 'asset-specific term' from the multifactor-model definition at the top of this module — it's the part of an asset's return <em>not</em> explained by the common factor(s), and Module 4's diversification logic is exactly why holding many such assets together averages this idiosyncratic component down toward zero."
            },
            {
                "q": "What is 'non-diversifiable' (or systematic) risk?",
                "a": "Risk common to all assets, which cannot be eliminated through diversification.",
                "explain": "This is the part of return variability driven by the shared factor(s) — since <em>every</em> asset in the model responds (to varying degrees) to the same underlying factor, no amount of combining different assets together can cancel this component out, which is exactly why CAPM (Module 6) argues only <em>this</em> risk should be compensated with extra expected return."
            },
            {
                "q": "Why does diversification reduce idiosyncratic risk but not systematic risk?",
                "a": "Idiosyncratic shocks are (assumed) uncorrelated and average out across a large portfolio; systematic risk affects all assets simultaneously.",
                "explain": "This is the precise mechanical reason behind the diversifiable/non-diversifiable split — idiosyncratic shocks are (by construction) independent across assets, so combining many of them is exactly the law-of-large-numbers averaging effect that shrinks their combined impact, while systematic risk moves every asset the <em>same</em> way, so no amount of combining assets can offset it."
            },
            {
                "q": "How is the variance of an asset's return decomposed in a single-index model?",
                "a": "Into systematic variance (from the common factor) plus idiosyncratic (specific) variance.",
                "explain": "This is CS1's variance-of-a-sum formula (Module 4 there) applied to the single-index model's structure — since the common-factor component and the idiosyncratic term are assumed uncorrelated by construction, the two variance pieces simply <em>add</em>, with no covariance cross-term to complicate things."
            },
            {
                "q": "What is one advantage of a fundamental factor model over a macroeconomic factor model?",
                "a": "Fundamental factors can often explain a larger share of return variation and are directly observable at the security level.",
                "explain": "This is a practical, empirical claim worth remembering as the standard trade-off point in this module — macroeconomic factors are conceptually clean but often weakly linked to any <em>specific</em> stock's return, while fundamental factors (size, industry, valuation ratios) tend to have a more direct, measurable relationship to individual security returns."
            },
            {
                "q": "What is one disadvantage of a statistical factor model?",
                "a": "The derived statistical factors often lack a clear economic interpretation, making the model's outputs harder to explain.",
                "explain": "This is the direct cost of the statistical approach's main strength (letting data reveal patterns without imposing economic theory) — a factor extracted purely from historical covariances might explain returns well, but if nobody can say <em>what</em> that factor represents economically, it's hard to communicate the model's implications or trust it out-of-sample."
            },
            {
                "q": "How would you use a multifactor model to estimate a portfolio's exposure to a particular risk factor?",
                "a": "Sum the (weighted) factor sensitivities (loadings) of each asset in the portfolio for that factor.",
                "explain": "This is exactly analogous to how a portfolio's overall beta (Module 6) is the weighted average of its constituent assets' individual betas — the same additive logic extends naturally from a single-factor model to a full multifactor model, just with one weighted sum per factor instead of one overall figure."
            },
            {
                "q": "Why might an investment manager prefer a multifactor model over a single-index model?",
                "a": "A multifactor model can capture multiple distinct sources of systematic risk, giving a richer description of return drivers.",
                "explain": "The single-index model (earlier in this module) forces <em>all</em> systematic risk into one dimension (market sensitivity alone) — a genuine investment manager might want to separately understand, say, exposure to interest-rate risk versus exposure to inflation risk versus exposure to a specific industry, which only a multi-factor structure can distinguish."
            },
            {
                "q": "What data would you need to estimate the parameters of a macroeconomic factor model?",
                "a": "Historical time series of both the security returns and the chosen macroeconomic variables, estimating sensitivities via regression.",
                "explain": "This closes the module by making the estimation process concrete — it's CS1's multiple linear regression (Module 12 there) applied directly: security returns as the response variable, the chosen macroeconomic series as explanatory variables, with the resulting regression coefficients serving as the factor sensitivities (loadings) this whole module has been building toward."
            }
        ]
    },
    {
        "id": "m06",
        "title": "Asset pricing models",
        "description": "Introduces the Capital Asset Pricing Model (CAPM) — its assumptions, main results, uses, and limitations.",
        "cards": [
            {
                "q": "What is the Capital Asset Pricing Model (CAPM) used for?",
                "a": "To determine the expected/required return on an asset, given its systematic risk (beta) relative to the market portfolio.",
                "explain": "This module is the single-index model (Module 5) taken one step further, from <em>describing</em> how returns move together to <em>prescribing</em> what expected return an asset ought to offer — CAPM is really the equilibrium theory that explains why beta (a purely statistical quantity in Module 5) should matter economically at all."
            },
            {
                "q": "What is the CAPM formula for expected return?",
                "a": "$E[R_i] = R_f + \\beta_i\\,(E[R_m]-R_f)$",
                "explain": "Worth reading this formula as a story: start from the risk-free rate (baseline compensation for time), then add a risk premium equal to beta <em>times</em> the market's own risk premium — an asset's required extra return scales exactly with how much systematic (market) risk it carries, and nothing else."
            },
            {
                "q": "What does beta ($\\beta_i$) measure in the CAPM?",
                "a": "The sensitivity of an asset's excess return to the excess return of the market portfolio.",
                "explain": "This is precisely the same beta introduced in Module 5's single-index model — CAPM doesn't invent a new quantity, it takes that existing statistical sensitivity measure and gives it an economic justification: it's the <em>only</em> thing that should determine an asset's required return, according to the theory."
            },
            {
                "q": "Name one key assumption of the basic CAPM.",
                "a": "All investors have homogeneous expectations about returns, risk and correlations; investors can borrow/lend unlimited amounts at a risk-free rate.",
                "explain": "These assumptions are worth having ready as a checklist, since the limitations card below and real-world critiques of CAPM are essentially about which of these assumptions breaks down in practice — homogeneous expectations in particular is a strong claim, since real investors clearly disagree about future returns."
            },
            {
                "q": "What is the 'market portfolio' in CAPM?",
                "a": "A portfolio containing all risky assets in the market, weighted by their market values.",
                "explain": "This is a theoretical ideal that's hard to observe in practice (see the estimation-issues card below) — 'all risky assets' technically means every stock, bond, property, and even human capital worldwide, which is why real applications substitute a broad stock index as an imperfect proxy."
            },
            {
                "q": "What is the 'security market line' (SML)?",
                "a": "A graphical representation of the CAPM, plotting expected return against beta — all correctly priced assets should lie on this line.",
                "explain": "This is CAPM's formula from earlier in this module drawn as a straight line: the y-intercept is the risk-free rate, and the slope is the market risk premium $(E[R_m]-R_f)$ — any asset plotting exactly on this line is priced consistently with CAPM, and any deviation (see the next card) signals apparent mispricing."
            },
            {
                "q": "What does it mean for an asset to plot above the security market line?",
                "a": "It's offering a higher expected return than CAPM predicts for its level of systematic risk — it appears undervalued.",
                "explain": "This is worth connecting to Module 1's EMH material — under a truly efficient market with CAPM holding exactly, no asset should persistently plot off the line at all; a genuine, sustained deviation would represent exactly the kind of abnormal-return opportunity EMH claims shouldn't exist, tying these two modules together."
            },
            {
                "q": "Give one limitation of the basic CAPM.",
                "a": "Its assumptions are unrealistic, and empirical tests often find beta alone doesn't fully explain observed returns.",
                "explain": "This is the module's central honest self-critique — real data consistently shows that factors <em>beyond</em> beta (size, value, momentum) have historically helped explain returns, which is precisely the empirical gap that motivated the multifactor extensions covered in the next card."
            },
            {
                "q": "How have researchers tried to extend/develop CAPM to address its limitations?",
                "a": "By relaxing assumptions, or developing multifactor extensions like the Arbitrage Pricing Theory (APT).",
                "explain": "This closes the loop back to Module 5's multifactor models — APT generalises CAPM's single-factor (beta-only) story into a framework allowing <em>several</em> priced risk factors, addressing the 'beta alone doesn't fully explain returns' critique directly, at the cost of needing to identify which factors actually matter."
            },
            {
                "q": "What is a major issue in estimating parameters for CAPM in practice?",
                "a": "Identifying and measuring the true 'market portfolio', and estimating beta reliably from limited historical data.",
                "explain": "This is the practical bite of the market-portfolio card above — since the <em>true</em> market portfolio (all assets worldwide) can't actually be observed, every empirical CAPM test is really testing a <em>joint</em> hypothesis (CAPM plus 'this index is a good market proxy'), an issue closely related to EMH's joint-hypothesis problem from Module 1."
            },
            {
                "q": "According to CAPM, should investors be compensated for holding idiosyncratic (diversifiable) risk?",
                "a": "No — only systematic risk (beta) is rewarded, since idiosyncratic risk can be diversified away at no cost.",
                "explain": "This is CAPM's core economic argument, drawing directly on Module 5's diversifiable/systematic split — since a rational investor <em>can</em> eliminate idiosyncratic risk for free simply by diversifying, the market has no reason to compensate anyone for bearing it; only the risk that can't be diversified away (systematic risk, measured by beta) deserves a reward."
            },
            {
                "q": "What is the risk-free rate's role in the CAPM formula?",
                "a": "It represents the baseline return available with no risk, against which the market risk premium (scaled by beta) is added.",
                "explain": "This is the same risk-free-rate concept threading through the whole CM2 syllabus (it also anchors the forward-pricing and derivatives formulas in Modules 10-14) — here it's simply the floor: any asset, however low its systematic risk, should offer at least this much, since taking on zero risk still requires forgoing the time value of money."
            },
            {
                "q": "If an asset has a beta of zero, what does CAPM predict its expected return should be?",
                "a": "Equal to the risk-free rate, since it has no systematic risk exposure.",
                "explain": "This is a direct substitution into the CAPM formula ($\\beta=0$ makes the whole risk-premium term vanish) — worth using as a quick sanity check on the formula: even an asset with <em>some</em> variance can have zero systematic risk if that variance is entirely idiosyncratic, and CAPM says it should still only earn the risk-free rate."
            },
            {
                "q": "If an asset has a beta greater than 1, what does that imply?",
                "a": "The asset's returns are more volatile than (amplify) the market's returns — more systematic risk than the market portfolio.",
                "explain": "A useful mental benchmark: the market <em>portfolio itself</em> has beta exactly 1 by definition (it's perfectly correlated with itself, scaled 1:1) — an individual asset with beta above 1 is a 'high-beta' or aggressive asset, amplifying market moves in both directions, while beta below 1 is a defensive asset that dampens them."
            },
            {
                "q": "How is beta typically estimated in practice?",
                "a": "By regressing an asset's historical excess returns against the market portfolio's historical excess returns; the slope is the estimated beta.",
                "explain": "This closes the module by making the theoretical parameter fully concrete — it's CS1's simple linear regression (Module 12 there) directly applied: market excess return as the explanatory variable, asset excess return as the response, and the fitted slope $\\hat\\beta$ is exactly the beta this whole module's formula depends on."
            }
        ]
    },
    {
        "id": "m07",
        "title": "Brownian motion and martingales",
        "description": "Introduces standard Brownian motion (the Wiener process) and its defining properties, plus the concept of a martingale — foundations for modelling security prices continuously through time.",
        "cards": [
            {
                "q": "What are the defining properties of standard Brownian motion $W_t$?",
                "a": "$W_0 = 0$; independent increments; increments $W_t - W_s \\sim N(0, t-s)$ for $t>s$; and continuous paths.",
                "explain": "This module marks a genuine gear-change in CM2 — from Modules 1-6's largely single-period, algebraic finance (utility, portfolios, CAPM) into continuous-<em>time</em> stochastic processes, which is the mathematical machinery Modules 8-14 need to price derivatives properly. These four properties are the axioms everything later builds from."
            },
            {
                "q": "What is the distribution of $W_t$ for a standard Brownian motion?",
                "a": "$W_t \\sim N(0, t)$",
                "explain": "This follows directly from the defining properties above: since $W_0=0$, the value at time $t$ is just the single increment $W_t-W_0$, which by definition is $N(0,t-0)=N(0,t)$ — worth noting the <em>variance</em> grows linearly with time, so the process spreads out (gets less predictable) the further into the future you look."
            },
            {
                "q": "What does it mean for Brownian motion to have 'independent increments'?",
                "a": "The change in the process over any time interval is independent of the change over any other non-overlapping time interval.",
                "explain": "This is the direct continuous-time analogue of CS1's i.i.d. sampling assumption (Module 7 there) — it's precisely what makes Brownian motion 'memoryless' in a movement sense: knowing how the process moved yesterday tells you nothing about how it will move tomorrow, which is the mathematical embodiment of Module 1's weak-form market efficiency."
            },
            {
                "q": "Why are the paths of Brownian motion described as continuous but 'nowhere differentiable'?",
                "a": "The process moves continuously (no jumps) but is so erratic at every point that it has no well-defined instantaneous slope.",
                "explain": "This is a strange and important property worth sitting with — 'continuous' just means no sudden jumps, but 'nowhere differentiable' means the path is so jagged that <em>zooming in</em> at any point never reveals a smooth, straight-line-like slope, however far you magnify; this single fact is exactly why ordinary calculus breaks down and Ito calculus (Module 8) is needed instead."
            },
            {
                "q": "What is a 'martingale'?",
                "a": "A stochastic process where the expected future value, given all information up to now, equals the current value: $E[X_t \\mid \\mathcal{F}_s] = X_s$ for $t>s$.",
                "explain": "This is the formal, precise version of a 'fair game' — no matter what's happened so far, your best guess for the future is always simply 'wherever you are right now', with no predictable drift up or down, which is exactly why it's the natural mathematical description of an efficient market's discounted prices."
            },
            {
                "q": "Is standard Brownian motion a martingale?",
                "a": "Yes — its expected future value, given current information, equals its current value (zero drift).",
                "explain": "This follows immediately from the independent-increments property: $E[W_t|\\mathcal{F}_s] = W_s + E[W_t-W_s|\\mathcal{F}_s] = W_s + 0$, since the future increment is independent of the past (hence its conditional mean is just its unconditional mean, zero) — Brownian motion is, in a sense, the <em>simplest</em> possible martingale."
            },
            {
                "q": "What role does the martingale property play in 'fair game' pricing intuition?",
                "a": "A martingale reflects no predictable drift, consistent with discounted asset prices not being systematically predictable under the risk-neutral measure.",
                "explain": "This is the deep connection between this module and the whole derivatives-pricing framework of Modules 12-14 — the entire risk-neutral valuation approach is built on the requirement that <em>discounted</em> asset prices be martingales under the risk-neutral measure, which is precisely why this module's abstract definition matters so much later."
            },
            {
                "q": "What is meant by a 'filtration' $\\mathcal{F}_t$ in this context?",
                "a": "The information available up to time $t$, representing the history of the process observed so far.",
                "explain": "This is the formal notation for 'everything you know so far' that appears in the martingale definition above — it's worth reading $E[X_t|\\mathcal{F}_s]$ literally as 'the expected value of $X_t$, given everything observable up to time $s$', which is exactly the conditional expectation concept from CS1 Module 5, just applied to an entire evolving history rather than a single random variable."
            },
            {
                "q": "What is the variance of the increment $W_t - W_s$ for standard Brownian motion?",
                "a": "$t - s$",
                "explain": "This is exactly the defining property restated — worth noting it depends <em>only</em> on the <em>length</em> of the time interval ($t-s$), not on where that interval sits in time or what happened before it, a 'stationary increments' property that combines with independence to make Brownian motion remarkably tractable mathematically."
            },
            {
                "q": "How does Brownian motion relate to a random walk?",
                "a": "Brownian motion is the limit of a discrete-time random walk as time steps become infinitesimally small and numerous, appropriately scaled.",
                "explain": "This is CS1's Central Limit Theorem (Module 6 there) at work in a continuous-time setting — a random walk is a sum of many small independent steps, and just as the CLT shows sums of i.i.d. variables become normal, Brownian motion emerges as what a random walk looks like when you let the step size shrink to zero while the number of steps grows to infinity."
            },
            {
                "q": "What is a key reason Brownian motion is used to model asset price randomness?",
                "a": "Its independent, normally-distributed increments provide a tractable way to model continuous, unpredictable price movements.",
                "explain": "'Tractable' is the operative word — Brownian motion isn't chosen because it's a perfect description of real markets (Module 9 covers evidence against exact log-normality), but because its clean mathematical properties (Gaussian increments, the martingale property, well-developed calculus tools) make derivative pricing problems solvable."
            },
            {
                "q": "Give one property that would disqualify a process from being a martingale.",
                "a": "Having a non-zero expected drift given current information, i.e. $E[X_t \\mid \\mathcal{F}_s] \\neq X_s$.",
                "explain": "This is worth connecting directly to Module 8's Ito processes — a general Ito process $dX_t=\\mu\\,dt+\\sigma\\,dW_t$ has a non-zero drift term $\\mu$ (unless $\\mu=0$), and it's exactly that drift which prevents it from being a martingale in general; only the driving Brownian motion piece itself, or a process specifically engineered to have zero drift, qualifies."
            },
            {
                "q": "What does 'quadratic variation' of Brownian motion over $[0,t]$ equal?",
                "a": "$t$ — a distinctive feature exploited in stochastic calculus (e.g. Ito's Lemma)."
                ,"explain": "This is the deep mathematical fact underlying why Ito's Lemma (Module 8) needs an extra term beyond the ordinary chain rule — for a normal, smooth function, quadratic variation would be exactly zero; the fact that Brownian motion's quadratic variation is non-zero (and in fact accumulates at rate exactly 1 per unit time) is the mathematical signature of its nowhere-differentiable, infinitely jagged paths."
            },
            {
                "q": "Why can't standard calculus techniques be applied directly to functions of Brownian motion?",
                "a": "Because Brownian motion is nowhere differentiable and has non-zero quadratic variation — stochastic (Ito) calculus is needed instead.",
                "explain": "This closes the loop between the two properties emphasised throughout this module (nowhere differentiable, non-zero quadratic variation) and directly motivates the entire next module — Module 8's Ito's Lemma exists specifically to handle functions of a process with exactly these two awkward features, which ordinary calculus was never designed for."
            },
            {
                "q": "What is the covariance $\\text{Cov}(W_s, W_t)$ for standard Brownian motion, with $s\\lt t$?",
                "a": "$\\min(s,t) = s$",
                "explain": "This closes the module with a useful derivable fact, not one to simply memorise — write $W_t=W_s+(W_t-W_s)$, note the two pieces are independent (increments property), so $\\text{Cov}(W_s,W_t)=\\text{Cov}(W_s,W_s)+\\text{Cov}(W_s,W_t-W_s)=\\text{Var}(W_s)+0=s$, confirming the min$(s,t)$ result directly from the module's opening axioms."
            }
        ]
    },
    {
        "id": "m08",
        "title": "Stochastic calculus and Ito processes",
        "description": "Introduces stochastic differential equations, the Ito integral, Ito's Lemma, and key example processes — geometric Brownian motion and the Ornstein-Uhlenbeck process.",
        "cards": [
            {
                "q": "What is a 'stochastic differential equation' (SDE)?",
                "a": "An equation describing how a process evolves over time, involving a deterministic (drift) term and a random (diffusion) term driven by Brownian motion.",
                "explain": "This is Module 7's Brownian motion put to direct use as a modelling <em>building block</em>, rather than studied for its own sake — an SDE describes any process as 'ordinary, predictable change <em>plus</em> Brownian-motion-driven randomness', which is the template every specific model in this module (GBM, Ornstein-Uhlenbeck) follows."
            },
            {
                "q": "What is the general form of an Ito process SDE?",
                "a": "$dX_t = \\mu(X_t,t)\\,dt + \\sigma(X_t,t)\\,dW_t$",
                "explain": "Note both $\\mu$ and $\\sigma$ can depend on the <em>current</em> value $X_t$ and time $t$ — this generality is what makes an Ito process flexible enough to describe very different behaviours (constant proportional growth for GBM, pull-back-to-a-mean for Ornstein-Uhlenbeck) just by choosing different functional forms for these two terms."
            },
            {
                "q": "What does the 'drift' term in an SDE represent?",
                "a": "The deterministic (expected, per unit time) rate of change of the process.",
                "explain": "This is the part of the SDE that would be there even <em>without</em> any randomness — set $\\sigma=0$ and you're left with an ordinary differential equation describing the process's average trajectory, which is a useful way to build intuition for what the drift term alone is doing before adding the noise back in."
            },
            {
                "q": "What does the 'diffusion' term in an SDE represent?",
                "a": "The magnitude/scale of the random fluctuations driven by Brownian motion.",
                "explain": "This is where Module 7's Brownian motion enters directly — the $\\sigma\\,dW_t$ term scales the random 'noise' $dW_t$ by whatever $\\sigma$ is at that point, which is exactly why GBM's diffusion term $\\sigma S_t$ makes fluctuations proportionally larger for a higher stock price, while Ornstein-Uhlenbeck's constant $\\sigma$ keeps fluctuation size fixed regardless of level."
            },
            {
                "q": "What is Ito's Lemma used for?",
                "a": "Finding the SDE satisfied by a (twice-differentiable) function of an Ito process — the stochastic calculus analogue of the chain rule.",
                "explain": "This is the single most important tool in this module — it's what lets you derive, for instance, the SDE that $\\ln S_t$ satisfies <em>given</em> the SDE that $S_t$ itself satisfies, which is exactly the technique behind solving GBM explicitly (see the solved-form card below)."
            },
            {
                "q": "What is the key extra term in Ito's Lemma compared with the ordinary chain rule?",
                "a": "A second-order term $\\frac{1}{2}\\frac{\\partial^2 f}{\\partial x^2}\\sigma^2\\,dt$, arising from the non-zero quadratic variation of Brownian motion.",
                "explain": "This is precisely Module 7's quadratic-variation property earning its keep — an ordinary function's chain rule only needs the <em>first</em> derivative, but because Brownian motion's $(dW_t)^2$ effectively behaves like $dt$ (non-zero quadratic variation) rather than vanishing like it would for a smooth process, a second-order correction term survives that ordinary calculus would drop as negligible."
            },
            {
                "q": "What is the SDE for geometric Brownian motion (GBM)?",
                "a": "$dS_t = \\mu S_t\\,dt + \\sigma S_t\\,dW_t$",
                "explain": "This is the Ito process from earlier in this module with a specific choice: both drift and diffusion are <em>proportional</em> to the current price $S_t$ — this proportionality is exactly what guarantees prices stay positive (a zero price can't generate further percentage moves) and gives log returns constant volatility, the two features the next card highlights."
            },
            {
                "q": "Why is GBM commonly used to model security prices?",
                "a": "It ensures prices stay positive and gives log-normally distributed prices, broadly consistent with observed return behaviour.",
                "explain": "This is the direct bridge into Module 9's whole topic — the log-normal model of security prices is <em>exactly</em> GBM, just examined from the price-distribution angle rather than the SDE angle; the two modules describe precisely the same underlying model."
            },
            {
                "q": "What is a 'mean-reverting' process?",
                "a": "A process whose drift pulls it back towards a long-run mean level whenever it deviates from that level.",
                "explain": "This is a fundamentally different <em>behaviour</em> from GBM — GBM has no 'home' level it's drawn back to (it can drift arbitrarily far in either direction over the long run), while a mean-reverting process is specifically constructed to resist drifting too far, which is exactly why it suits variables like interest rates (see the closing card of this module)."
            },
            {
                "q": "What is the SDE for the Ornstein-Uhlenbeck process?",
                "a": "$dX_t = \\alpha(\\mu - X_t)\\,dt + \\sigma\\,dW_t$, where the drift pulls $X_t$ back towards the long-run mean $\\mu$.",
                "explain": "Look at the drift term's sign logic: when $X_t>\\mu$ (above the long-run mean), $(\\mu-X_t)$ is negative, so the drift pulls <em>downward</em>; when $X_t\\lt \\mu$, the drift pulls <em>upward</em> — this self-correcting mechanism is precisely what 'mean-reverting' means mathematically, and it's this exact SDE that resurfaces as the Vasicek short-rate model in Module 15."
            },
            {
                "q": "What does the parameter $\\alpha$ represent in the Ornstein-Uhlenbeck process?",
                "a": "The speed of mean reversion — how quickly the process is pulled back towards its long-run mean.",
                "explain": "A large $\\alpha$ means a strong, fast pull back toward $\\mu$ (the process rarely strays far); a small $\\alpha$ means a weak, slow pull (the process can wander further before being reined in) — this single parameter controls how 'sticky' the mean-reversion behaviour actually is."
            },
            {
                "q": "What is the 'Ito integral'?",
                "a": "A way of defining integrals with respect to Brownian motion (e.g. $\\int_0^t \\sigma_s\\,dW_s$), needed since Brownian motion isn't differentiable in the ordinary sense.",
                "explain": "This is the rigorous mathematical machinery underlying an SDE's compact notation — 'writing $dX_t=\\mu\\,dt+\\sigma\\,dW_t$' is really shorthand for an integral equation involving exactly this Ito integral, needed precisely because Module 7 established that $dW_t$ can't be handled with ordinary (Riemann) integration."
            },
            {
                "q": "Solve the GBM SDE to express $S_t$ in terms of $S_0$.",
                "a": "$S_t = S_0 \\exp\\left[\\left(\\mu - \\tfrac{1}{2}\\sigma^2\\right)t + \\sigma W_t\\right]$",
                "explain": "This is Ito's Lemma applied directly (to $f(S_t)=\\ln S_t$), and it's the single most-used result from this whole module — every later card involving GBM's exact solution, including the log-normal distribution of prices in Module 9, is built from this formula."
            },
            {
                "q": "Why does GBM's solution feature a $-\\frac{1}{2}\\sigma^2 t$ adjustment relative to the naive exponential of the drift?",
                "a": "It arises from applying Ito's Lemma to $\\ln S_t$, correcting for the extra second-order term in stochastic calculus.",
                "explain": "This is exactly Ito's Lemma's extra second-order term from earlier in this module, appearing concretely for the first time — a naive (ordinary-calculus) guess would predict $S_t=S_0e^{\\mu t+\\sigma W_t}$, but Ito's correction subtracts $\\frac12\\sigma^2 t$ from the exponent, a surprising result that trips up anyone applying ordinary calculus intuition to a stochastic process."
            },
            {
                "q": "Why might a mean-reverting process (like Ornstein-Uhlenbeck) be more appropriate than GBM for modelling short-term interest rates?",
                "a": "Interest rates fluctuate around a long-run economic equilibrium rather than drifting indefinitely, which mean reversion captures but GBM does not.",
                "explain": "This closes the module with the practical justification for <em>why</em> two different process types exist at all — a stock price can (and does) drift to arbitrarily high or low levels over decades, which GBM captures well, but an interest rate is economically anchored (central bank policy, inflation expectations) and tends to hover in a range, which is exactly what mean reversion is built to represent, foreshadowing Module 15's short-rate models."
            }
        ]
    },
    {
        "id": "m09",
        "title": "Stochastic models of security prices",
        "description": "Focuses on the continuous-time log-normal model of security prices — its structure, implications, and the empirical evidence for and against it.",
        "cards": [
            {
                "q": "What does the continuous-time log-normal model assume about security prices?",
                "a": "That prices follow geometric Brownian motion, so log returns over any period are normally distributed.",
                "explain": "This module is Module 8's GBM viewed from the price-distribution angle rather than the SDE angle — same underlying model, examined here for what it implies about the actual <em>distribution</em> of future prices, and then tested against real market data."
            },
            {
                "q": "If $S_t$ follows the log-normal model, what is the distribution of $\\ln(S_t/S_0)$?",
                "a": "Normal, with mean $(\\mu - \\tfrac12\\sigma^2)t$ and variance $\\sigma^2 t$.",
                "explain": "This is a direct restatement of Module 8's solved GBM formula — taking logs of $S_t=S_0\\exp[(\\mu-\\tfrac12\\sigma^2)t+\\sigma W_t]$ and rearranging gives exactly this, since $\\sigma W_t$ is normal with mean 0 and variance $\\sigma^2t$ (Module 7's $W_t\\sim N(0,t)$ scaled by $\\sigma$)."
            },
            {
                "q": "What does the log-normal model imply about the possible range of future prices?",
                "a": "Prices remain strictly positive (can never go negative), consistent with limited liability of shares.",
                "explain": "This is a genuine modelling virtue worth appreciating — since $S_t=S_0\\exp[\\cdot]$ is an exponential of a normal random variable, it's mathematically guaranteed to stay positive regardless of how extreme the exponent gets, which correctly matches the real-world fact that a shareholder can never owe more than they invested (limited liability)."
            },
            {
                "q": "Give one piece of empirical evidence against the log-normal model.",
                "a": "Observed asset returns often show 'fat tails' (more extreme moves than a normal distribution predicts) and negative skewness.",
                "explain": "This opens the module's second half — a run of cards testing the theoretical model from Module 8 against real data — worth remembering 'fat tails' and 'negative skewness' as the two specific, named empirical departures that recur throughout, rather than just a vague 'the model isn't perfect'."
            },
            {
                "q": "What is 'volatility clustering,' and how does it challenge the log-normal model?",
                "a": "Periods of high volatility tend to cluster together; the simple log-normal model assumes constant volatility, which doesn't capture this.",
                "explain": "This directly challenges the <em>constant</em> $\\sigma$ assumption baked into GBM's SDE (Module 8) — real markets show calm periods and turbulent periods that persist for a while, not the uniform, unchanging volatility GBM assumes throughout, which is exactly the gap stochastic-volatility models (mentioned later in this module) are built to fill."
            },
            {
                "q": "What does 'skewness' in observed return distributions typically show, compared to the log-normal model assumption?",
                "a": "Many equity return distributions show negative skewness (large downward moves more common/severe), unlike the symmetric assumption.",
                "explain": "This is an important asymmetry worth internalising: markets tend to fall fast (crashes) but rise more gradually, giving real returns a longer, heavier <em>left</em> tail — the log-normal model's underlying normal distribution for log returns is perfectly symmetric, missing this real-world pattern entirely."
            },
            {
                "q": "What is 'kurtosis,' and why is it relevant when testing the log-normal model?",
                "a": "A measure of the 'fatness' of a distribution's tails; observed returns typically have higher kurtosis than the normal distribution predicts.",
                "explain": "This is CS1's fourth-moment concept (Module 3 there, via generating functions) put to direct empirical use — higher-than-normal kurtosis means extreme moves (both up and down) happen more often in real markets than a normal distribution would predict, which directly undermines risk measures calculated assuming normality."
            },
            {
                "q": "Why might the log-normal model still be widely used despite its known limitations?",
                "a": "It is mathematically tractable, provides a reasonable first approximation, and underlies foundational results such as Black-Scholes.",
                "explain": "This is the same trade-off theme running through the whole CM2 syllabus (mean-variance theory in Module 4, CAPM in Module 6) — a model doesn't need to be perfectly realistic to be useful; it needs to be tractable enough to actually compute with, and 'good enough' as a first approximation, which the log-normal model clearly is given how much of derivatives theory (Module 13) is built on it."
            },
            {
                "q": "What alternative models have been proposed to address fat tails not captured by the log-normal model?",
                "a": "Models incorporating jumps (jump-diffusion models) or stochastic volatility.",
                "explain": "Jump-diffusion models add sudden discontinuous price moves on top of GBM's continuous diffusion (directly addressing fat tails from sudden news/shocks), while stochastic volatility models let $\\sigma$ itself be random rather than constant (directly addressing the volatility-clustering card above) — two different, complementary fixes for two different observed gaps."
            },
            {
                "q": "How would you test whether historical returns are consistent with the log-normal model?",
                "a": "Statistically test whether log returns are normally distributed (e.g. skewness/kurtosis tests), and check for constant volatility over time.",
                "explain": "This is CS1's hypothesis-testing framework (Module 10 there) applied directly to this specific question — the two checks named here map exactly onto the two empirical critiques raised earlier in this module: a skewness/kurtosis test targets the shape assumption, and checking for constant volatility over time targets the volatility-clustering assumption."
            },
            {
                "q": "What does the log-normal model assume about the independence of returns over non-overlapping periods?",
                "a": "That they are independent (and identically distributed), consistent with the independent increments of the underlying Brownian motion.",
                "explain": "This is Module 7's independent-increments property carried through directly — and it's precisely the assumption that Module 1's EMH (weak form specifically) is philosophically claiming holds in real markets: if past returns don't predict future returns, then successive returns really should behave independently, as this model assumes."
            },
            {
                "q": "Why is independence of returns a strong (and often violated) assumption?",
                "a": "Empirical evidence shows some serial correlation and volatility clustering in real markets.",
                "explain": "This is the empirical counterpart to Module 1's evidence <em>against</em> weak-form efficiency (momentum/mean-reversion patterns) — both modules are pointing at the same underlying finding from different angles: real returns show some predictability from their own past, contradicting the clean independence this model assumes."
            },
            {
                "q": "What would 'excess kurtosis' of zero indicate about a return distribution?",
                "a": "The distribution's tails match those of a normal distribution.",
                "explain": "'Excess' kurtosis is measured relative to the normal distribution's own kurtosis (conventionally set as the zero baseline) — a positive excess kurtosis is exactly the 'fat tails' finding from earlier in this module, so zero excess kurtosis would mean, for once, the log-normal model's tail behaviour actually matches reality."
            },
            {
                "q": "Why is the log-normal model considered a 'continuous-time' model?",
                "a": "Prices are modelled as evolving continuously through time (via a diffusion process), rather than only at discrete intervals.",
                "explain": "This distinguishes it from discrete-time models (like the binomial model, Module 12) which only specify prices at a finite set of time points — GBM (Module 8) describes the price at <em>every</em> instant, a different mathematical object even though the binomial model converges to it as the number of steps grows (Module 12's closing card)."
            },
            {
                "q": "What is one practical consequence of using the log-normal model when real markets exhibit fat tails?",
                "a": "Risk measures (e.g. VaR) based on the log-normal assumption can understate the true probability/severity of extreme losses.",
                "explain": "This closes the module by connecting directly back to Module 3's risk measures — this is an important practical warning: a VaR figure calculated under a normal/log-normal assumption will systematically <em>understate</em> how often extreme losses really occur, precisely because real markets have fatter tails than the model assumes, a gap that mattered greatly in real financial crises."
            }
        ]
    },
    {
        "id": "m10",
        "title": "Characteristics of derivative securities",
        "description": "Covers the basic building blocks of derivatives pricing — arbitrage, complete markets, forward contracts, and model-independent bounds and relationships for options.",
        "cards": [
            {
                "q": "What is 'arbitrage'?",
                "a": "A trading strategy that guarantees a profit with no risk and no net initial investment.",
                "explain": "This module marks the pivot from <em>modelling</em> how prices evolve (Modules 7-9) to actually <em>pricing</em> derivatives — and the no-arbitrage principle is the single foundational idea the entire rest of CM2's derivatives content rests on: every bound and formula in this module holds purely because its violation would create a risk-free money-making machine, which can't persist in a functioning market."
            },
            {
                "q": "What is a 'complete market'?",
                "a": "A market in which every contingent claim (payoff pattern) can be replicated using a combination of the available traded assets.",
                "explain": "'Completeness' is what makes unique, well-defined derivative pricing possible at all — if a payoff <em>can</em> be replicated exactly using tradeable assets, then by no-arbitrage the derivative must cost exactly what the replicating portfolio costs, which is the core logic behind risk-neutral valuation (Module 12) and the whole Black-Scholes framework (Module 13)."
            },
            {
                "q": "How is the fair (no-arbitrage) forward price of an asset with no income derived?",
                "a": "$F_0 = S_0\\,e^{rT}$, the spot price accumulated at the risk-free rate to the forward's maturity.",
                "explain": "The no-arbitrage logic worth internalising: buying the asset now and holding it to maturity should cost exactly the same as agreeing today to buy it at the forward price later (financed at the risk-free rate) — if these two routes to owning the asset at time $T$ ever priced differently, you could arbitrage the gap risk-free."
            },
            {
                "q": "How does the forward price formula change if the underlying asset pays a continuous dividend yield $q$?",
                "a": "$F_0 = S_0\\,e^{(r-q)T}$",
                "explain": "The dividend yield effectively <em>reduces</em> the cost of carrying the asset, since holding it earns you income along the way — this exact same $r-q$ adjustment pattern reappears in Module 13's Black-Scholes dividend adjustment, so it's worth recognising as a recurring theme, not a one-off formula."
            },
            {
                "q": "What are the general upper and lower bounds for a European call option's price (no dividends)?",
                "a": "Lower bound: $\\max(S_0 - Ke^{-rT}, 0)$; upper bound: $S_0$.",
                "explain": "These bounds hold for <em>any</em> pricing model whatsoever, purely from no-arbitrage arguments — the upper bound ($S_0$) makes sense since a call can never be worth more than the stock itself (you'd never pay more for the <em>right</em> to buy something than for the thing outright), while the lower bound comes from comparing the option to a specific replicating portfolio."
            },
            {
                "q": "What is 'put-call parity' for European options (no dividends)?",
                "a": "$C - P = S_0 - Ke^{-rT}$, linking the prices of a call and put with the same strike and maturity.",
                "explain": "This is arguably the single most useful model-independent relationship in the whole options syllabus — given <em>any</em> three of $C$, $P$, $S_0$, $Ke^{-rT}$, you can solve for the fourth, and it's exactly the identity used to derive the Black-Scholes put formula from the call formula in Module 13."
            },
            {
                "q": "Why does put-call parity hold without needing any specific pricing model?",
                "a": "It follows purely from a no-arbitrage argument comparing two portfolios with identical payoffs at maturity.",
                "explain": "The standard proof: a portfolio of (long call + cash of $Ke^{-rT}$) and a portfolio of (long put + long stock) both pay off exactly $\\max(S_T,K)$ at maturity, whatever $S_T$ turns out to be — since two portfolios with <em>identical</em> payoffs in every future scenario must cost the same today (or arbitrage exists), the parity relationship follows immediately, with no need to assume GBM, constant volatility, or anything else."
            },
            {
                "q": "What is the key difference between a European and an American option?",
                "a": "A European option can only be exercised at maturity; an American option can be exercised at any time up to and including maturity.",
                "explain": "This extra flexibility means an American option can never be worth <em>less</em> than the corresponding European option (more choice is never a disadvantage) — but the very next card shows this extra right is sometimes worthless in practice, a counterintuitive result worth understanding properly."
            },
            {
                "q": "Why is it (generally) never optimal to exercise an American call option early on a non-dividend-paying stock?",
                "a": "Holding the option (with its time value and deferred payment of the strike) is worth at least as much as exercising early.",
                "explain": "This is a surprising result worth being able to justify: exercising early gets you the stock now, but <em>gives up</em> the option's remaining time value <em>and</em> requires paying the strike price immediately rather than at maturity — both of these costs mean early exercise is (weakly) dominated by simply holding, at least when there are no dividends to capture."
            },
            {
                "q": "How does an upper bound for an American put option compare with a European put?",
                "a": "An American put's upper bound is the strike price $K$ itself, since it can be exercised early.",
                "explain": "This is where the early-exercise story differs between calls and puts — unlike the call case above, early exercise <em>can</em> be optimal for a put (e.g. if the stock price falls to near zero, exercising now to lock in close to the full strike $K$ beats waiting, since a put's payoff is capped at $K$ regardless of how low the price falls further)."
            },
            {
                "q": "What does 'factors that affect option prices' typically include?",
                "a": "The underlying asset price, strike price, time to maturity, volatility, risk-free interest rate, and any dividends.",
                "explain": "This six-item checklist is worth having automatic — it's precisely the list of inputs the Black-Scholes formula (Module 13) requires, and every one of the 'Greeks' (Module 11) measures sensitivity to exactly one of these six factors."
            },
            {
                "q": "How does higher volatility of the underlying asset affect both call and put option prices, all else equal?",
                "a": "It increases both, since greater uncertainty increases the value of the option's asymmetric (limited downside) payoff.",
                "explain": "This is worth understanding via the option's asymmetric payoff shape: an option holder benefits from large favourable moves but is protected (payoff floored at zero) from large unfavourable ones — <em>more</em> volatility means bigger potential favourable moves without any extra downside cost, so both call and put values rise together, unlike a symmetric position where volatility alone wouldn't obviously help."
            },
            {
                "q": "What is meant by 'long' and 'short' positions in a forward contract?",
                "a": "The long position agrees to buy the underlying at the forward price at maturity; the short position agrees to sell.",
                "explain": "This long/short terminology is used consistently throughout derivatives (and reappears for options too) — 'long' always means the buying/upside-benefiting side of a contract, 'short' the selling/downside-benefiting side, a convention worth having completely automatic before tackling the Greeks and hedging material ahead."
            },
            {
                "q": "What is the payoff to the holder of a European call option at maturity?",
                "a": "$\\max(S_T - K, 0)$",
                "explain": "This payoff function is the starting point for literally every pricing formula in Modules 12-13 — worth picturing its shape directly: flat at zero for $S_T\\lt K$ (worthless, walk away), then rising one-for-one with the stock price above $K$ (exercise and profit), the classic 'hockey stick' option payoff diagram."
            },
            {
                "q": "What is the payoff to the holder of a European put option at maturity?",
                "a": "$\\max(K - S_T, 0)$",
                "explain": "This closes the module with the mirror-image payoff to the call above — a put pays off when the stock finishes <em>below</em> the strike, and together the call and put payoffs are exactly what put-call parity (earlier in this module) links algebraically: $\\max(S_T-K,0) - \\max(K-S_T,0) = S_T - K$ always, which is the payoff-level intuition behind that whole identity."
            }
        ]
    },
    {
        "id": "m11",
        "title": "The Greeks",
        "description": "Introduces the standard sensitivity measures ('the Greeks') describing how an option's price changes with respect to underlying market variables.",
        "cards": [
            {
                "q": "What does 'Delta' ($\\Delta$) measure?",
                "a": "The sensitivity of an option's price to a small change in the price of the underlying asset: $\\Delta = \\frac{\\partial V}{\\partial S}$",
                "explain": "This module takes the 'factors that affect option prices' list from Module 10 and gives each factor its own precise sensitivity measure — Delta specifically answers 'how much does the option's price move for a small move in the underlying', making it the most fundamental and most heavily used Greek in practice."
            },
            {
                "q": "What does 'Gamma' ($\\Gamma$) measure?",
                "a": "The rate of change of Delta with respect to the underlying asset price: $\\Gamma = \\frac{\\partial^2 V}{\\partial S^2}$",
                "explain": "Gamma is Delta's <em>own</em> sensitivity — it's a second derivative, exactly analogous to how acceleration is the rate of change of velocity in physics: Delta tells you the option's current 'speed' of price change, Gamma tells you how quickly that speed itself is changing as the underlying moves."
            },
            {
                "q": "What does 'Vega' measure?",
                "a": "The sensitivity of an option's price to a small change in the volatility of the underlying asset.",
                "explain": "This directly answers Module 10's 'higher volatility increases both call and put prices' card, but with a precise sensitivity <em>number</em> rather than just a direction — Vega tells you exactly how much value changes per unit change in $\\sigma$, which matters enormously since (per Module 9) real-world volatility isn't actually constant the way Black-Scholes assumes."
            },
            {
                "q": "What does 'Theta' ($\\Theta$) measure?",
                "a": "The sensitivity of an option's price to the passage of time (time decay), holding other factors constant.",
                "explain": "Theta answers 'how does the option lose value simply from time passing, with nothing else changing' — this is worth distinguishing carefully from a change in the underlying price itself, since Theta isolates the pure erosion of <em>time value</em> alone."
            },
            {
                "q": "What does 'Rho' ($\\rho$) measure?",
                "a": "The sensitivity of an option's price to a small change in the risk-free interest rate.",
                "explain": "Rho is typically the <em>least</em> important Greek for short-dated options in practice, since interest-rate moves are usually small relative to underlying-price moves over short horizons — but it becomes significant for long-dated options, where the discounting effect from Module 10's forward-price formula compounds over a much longer time."
            },
            {
                "q": "What is the range of Delta for a European call option?",
                "a": "Between 0 and 1.",
                "explain": "The boundaries are worth understanding directly: a deep out-of-the-money call barely moves as the stock moves (Delta near 0, since exercise looks unlikely regardless), while a deep in-the-money call moves almost one-for-one with the stock (Delta near 1, since it behaves almost like owning the stock outright)."
            },
            {
                "q": "What is the range of Delta for a European put option?",
                "a": "Between -1 and 0.",
                "explain": "The negative sign makes sense given the put's payoff shape from Module 10 ($\\max(K-S_T,0)$, decreasing in $S$) — as the stock price <em>rises</em>, a put's value <em>falls</em>, so its price sensitivity to the underlying is naturally negative, the mirror image of the call's positive Delta."
            },
            {
                "q": "Why is Theta typically negative for a long option position?",
                "a": "As time passes, there's less time for the underlying to move favourably, so the option's time value erodes.",
                "explain": "This 'time decay' is one of the most practically important facts for any option holder to internalise — an option is a wasting asset, and even if the underlying price doesn't move at all, a long option position steadily loses value simply from the clock ticking down, which is exactly why option sellers can profit from time decay alone."
            },
            {
                "q": "What does it mean to 'delta-hedge' a derivative position?",
                "a": "Holding an offsetting position in the underlying asset (equal to Delta) so the combined portfolio is insensitive to small moves in the underlying.",
                "explain": "This is the practical, risk-management payoff of the whole Greeks framework — by holding exactly $-\\Delta$ shares of the underlying against a long option position (or $+\\Delta$ against a short one), small moves in the stock price no longer affect the combined portfolio's value at all, at least locally."
            },
            {
                "q": "Why does a delta-hedged position need to be rebalanced over time?",
                "a": "Delta itself changes as the underlying price and time to maturity change (this rate is Gamma), needing periodic adjustment.",
                "explain": "This is exactly why Gamma matters so much in practice — a delta-hedge is only <em>perfect</em> for an infinitesimally small move; once the underlying actually moves, Delta shifts (governed by Gamma), so the hedge ratio that was correct a moment ago is now slightly wrong, requiring rebalancing to stay properly hedged."
            },
            {
                "q": "Why is Gamma particularly important for assessing hedging risk?",
                "a": "High Gamma means Delta can change rapidly, so a delta-hedge can quickly become outdated, requiring more frequent rebalancing.",
                "explain": "This restates the rebalancing card above from the trader's practical risk-management perspective — a high-Gamma position (typically options near the money, close to expiry) needs almost continuous rebalancing to stay properly hedged, incurring real transaction costs, while a low-Gamma position can be rebalanced much less frequently at lower cost."
            },
            {
                "q": "For a European call option (no dividends), how does Delta relate to the risk-neutral probability the option finishes in the money?",
                "a": "They're closely related — in the Black-Scholes model, call Delta equals $N(d_1)$.",
                "explain": "This is a direct preview of Module 13's Black-Scholes formula — note the subtlety worth remembering: $N(d_1)$ (Delta) is closely related to but <em>not</em> exactly the same as $N(d_2)$ (the actual risk-neutral probability the call finishes in the money) — the two coincide in interpretation but differ in the precise quantity, a common point of confusion worth being precise about."
            },
            {
                "q": "How does an option's Vega typically behave as the option approaches maturity?",
                "a": "It tends to decrease towards zero — there's less time remaining for volatility to have an effect.",
                "explain": "This makes intuitive sense: volatility matters because it measures how much the underlying <em>might</em> move before expiry — with very little time left, there's very little scope left for volatility to make a meaningful difference to the outcome, so the option's sensitivity to volatility naturally shrinks toward zero."
            },
            {
                "q": "What second-order derivative measures the sensitivity of Vega to changes in volatility?",
                "a": "'Vomma' (or volga) — a more advanced Greek beyond the basic set.",
                "explain": "This is exactly analogous to Gamma being Delta's own sensitivity — Vomma is Vega's own sensitivity, a 'Greek of a Greek' in the same pattern, worth recognising the structural analogy rather than treating it as a completely separate new concept to memorise from scratch."
            },
            {
                "q": "Why might a trader want a portfolio that is both 'delta-neutral' and 'gamma-neutral'?",
                "a": "To be protected against both small and larger moves in the underlying price, reducing the need for frequent rebalancing.",
                "explain": "This closes the module by combining everything covered — delta-neutral alone only protects against <em>infinitesimally</em> small moves (since Delta itself shifts as the price moves, per the rebalancing cards above); adding gamma-neutrality protects the hedge's accuracy over a <em>wider</em> range of price moves too, which is exactly why sophisticated hedging books target both simultaneously."
            }
        ]
    },
    {
        "id": "m12",
        "title": "The binomial model",
        "description": "Introduces binomial trees for option pricing, the risk-neutral probability measure, and the equivalent state-price deflator approach.",
        "cards": [
            {
                "q": "What is the basic structure of a one-step binomial model?",
                "a": "The underlying asset price can move to one of two possible values (up or down) over one time step, from a known starting price.",
                "explain": "This module deliberately simplifies Module 9's continuous-time log-normal model down to the simplest possible discrete setting — just two outcomes, one time step — precisely so that every idea from Module 10's no-arbitrage principles can be made completely concrete and calculable, before scaling up to the full continuous-time machinery in Module 13."
            },
            {
                "q": "What is the 'risk-neutral probability' in a binomial model?",
                "a": "The (hypothetical) probability of an up-move under which the discounted expected value of the asset (and any derivative) equals its current price.",
                "explain": "This is Module 7's martingale concept made fully concrete for the first time — the risk-neutral probability $p$ is defined <em>specifically</em> and <em>only</em> to make the discounted stock price a martingale under it, which is exactly the property risk-neutral pricing throughout Modules 12-14 depends on."
            },
            {
                "q": "How is the risk-neutral up-probability $p$ derived in a simple one-step binomial model?",
                "a": "$p = \\frac{e^{r\\Delta t} - d}{u - d}$, from the no-arbitrage condition that the stock's expected return under $p$ equals the risk-free rate.",
                "explain": "This formula falls directly out of setting $E^p[S_{\\Delta t}]/S_0 = e^{r\\Delta t}$ (the martingale condition from the card above) and solving for $p$ — it's worth deriving this once from first principles rather than memorising it, since the same logic (find $p$ that makes discounted expected value equal current price) generalises to every other risk-neutral pricing problem in this module list."
            },
            {
                "q": "How is a derivative's price found using risk-neutral valuation in the binomial model?",
                "a": "Discount the expected payoff of the derivative, calculated using the risk-neutral probabilities, at the risk-free rate.",
                "explain": "This is the module's central payoff — having found $p$ purely from the <em>stock</em>'s no-arbitrage condition, that same $p$ is then applied to price <em>any</em> derivative on that stock, which is exactly what makes risk-neutral valuation so powerful: one probability measure prices every derivative on the same underlying consistently."
            },
            {
                "q": "Why is the risk-neutral measure described as 'a computational tool' rather than the real-world probability?",
                "a": "It doesn't represent investors' actual beliefs — it's a mathematical device making discounted prices martingales, simplifying valuation.",
                "explain": "This is an important conceptual point worth being precise about — $p$ is <em>not</em> asking 'how likely do investors think an up-move actually is'; a risk-averse investor might think the up-move is much less likely than $p$ suggests, yet the derivative still prices correctly using $p$, precisely because risk preferences are already implicitly baked into the <em>stock</em>'s observed current price."
            },
            {
                "q": "What is the key advantage of using risk-neutral valuation?",
                "a": "It allows derivatives to be priced without needing to know investors' risk preferences or the real-world probability of price movements.",
                "explain": "This is the direct practical payoff of the conceptual point above — instead of needing to somehow measure real-world subjective probabilities and every investor's risk aversion (Module 2's utility functions), you only need the <em>observable</em> stock price, $u$, $d$, and $r$, all directly measurable quantities."
            },
            {
                "q": "How does a multi-step binomial 'lattice' extend the one-step model?",
                "a": "By chaining together many one-step up/down moves over successive time intervals, building a tree of possible price paths to expiry.",
                "explain": "This is exactly Module 7's random-walk-to-Brownian-motion story, run in the <em>opposite</em> direction — rather than taking a limit to continuous time, the lattice deliberately <em>keeps</em> the discrete structure but chains many small steps together, and (per a card below) it's precisely this chaining, taken to its limit, that converges back to the continuous-time GBM model of Module 8."
            },
            {
                "q": "What is a 'state-price deflator'?",
                "a": "A stochastic process used to convert real-world expected payoffs into current prices by discounting with state-dependent factors.",
                "explain": "This is an alternative route to exactly the same destination as risk-neutral valuation — rather than adjusting the <em>probabilities</em> (risk-neutral approach) to make expected discounted value work out, the deflator approach keeps the <em>real-world</em> probabilities but adjusts the <em>discount factor</em> itself, state by state, to achieve the same result."
            },
            {
                "q": "How does the state-price deflator approach relate to the risk-neutral approach?",
                "a": "They are equivalent — the deflator re-weights real-world probabilities in exactly the way the risk-neutral measure does, giving the same prices.",
                "explain": "This is worth appreciating as a genuine 'two routes, one destination' result — whether you adjust probabilities (risk-neutral measure) or adjust discount factors (state-price deflator), you arrive at <em>identical</em> derivative prices, since mathematically the deflator IS just the risk-neutral probabilities divided by the real-world probabilities, appropriately discounted."
            },
            {
                "q": "What no-arbitrage condition must the up and down factors ($u, d$) satisfy relative to the risk-free rate?",
                "a": "$d \\lt  e^{r\\Delta t} \\lt  u$, for the risk-neutral probability to lie strictly between 0 and 1.",
                "explain": "This condition makes intuitive sense: if $e^{r\\Delta t}\\geq u$ (the risk-free return beats even the <em>best</em> possible stock outcome), everyone would sell the stock and invest risk-free, an arbitrage; if $e^{r\\Delta t}\\leq d$ (risk-free return is worse than even the <em>worst</em> stock outcome), everyone would borrow risk-free to buy the stock, also an arbitrage — the condition rules out both degenerate cases."
            },
            {
                "q": "How would you value an American option within a binomial tree?",
                "a": "Work backwards through the tree, at each node taking the greater of the discounted continuation value and the immediate exercise value.",
                "explain": "This is a direct extension of the multi-step lattice, and it's the most natural way to handle Module 10's American-option early-exercise question numerically — since the tree explicitly represents every possible future state, you can literally check at each node whether exercising now beats waiting, which a continuous-time closed-form formula (like Black-Scholes) generally cannot do as directly."
            },
            {
                "q": "Why does increasing the number of steps in a binomial tree improve pricing accuracy?",
                "a": "It better approximates continuous-time price movements, converging towards continuous-time models like Black-Scholes.",
                "explain": "This is the precise mathematical link between this module and Module 13 — as the number of steps $\\to\\infty$ (and each step's size shrinks correspondingly), the discrete binomial tree converges to exactly the continuous-time GBM process from Module 8, and correspondingly binomial option prices converge to the Black-Scholes formula."
            },
            {
                "q": "What determines a security's price under the state-price deflator approach?",
                "a": "The expected value, under the real-world measure, of the state-price deflator multiplied by the security's future payoff.",
                "explain": "This restates the deflator concept from earlier in this module in its full pricing-formula form — note it uses the <em>real-world</em> probabilities (unlike risk-neutral valuation), with all the risk-adjustment instead folded into the deflator itself, which is precisely why the two approaches, despite looking structurally different, give identical prices."
            },
            {
                "q": "How is delta hedging naturally derived from a one-step binomial model?",
                "a": "By solving for the number of shares (combined with risk-free borrowing/lending) needed to exactly replicate the derivative's payoff in both states.",
                "explain": "This is Module 11's Delta concept derived from <em>first principles</em> for the first time, rather than just defined as a partial derivative — with only two possible future states, you can solve two simultaneous equations (matching the hedge portfolio's value to the derivative's payoff in the up-state and the down-state) directly for the exact replicating share count."
            },
            {
                "q": "Why is the binomial model considered pedagogically useful, despite being an approximation?",
                "a": "It illustrates no-arbitrage pricing, risk-neutral valuation and replication in a simple, discrete setting that generalises to continuous-time models.",
                "explain": "This closes the module by explaining its role in the whole CM2 syllabus — every core idea used in the more mathematically demanding Black-Scholes derivation (Module 13) — replication, no-arbitrage, risk-neutral probabilities, delta hedging — appears here first in a setting simple enough to work through by hand, which is exactly why this module comes before, not after, Black-Scholes."
            }
        ]
    },
    {
        "id": "m13",
        "title": "The Black-Scholes option pricing formula",
        "description": "Covers the Black-Scholes partial differential equation and formula, the martingale (risk-neutral) approach to pricing, and the model's underlying assumptions.",
        "cards": [
            {
                "q": "What is the Black-Scholes formula for a European call option price?",
                "a": "$C = S_0 N(d_1) - Ke^{-rT}N(d_2)$, where $N(\\cdot)$ is the standard normal CDF.",
                "explain": "This is the module's centrepiece result, and it's worth reading as a story, not just memorising: it's the continuous-time, exact version of the risk-neutral discounted-expected-payoff idea from Module 12, applied to GBM (Module 8) — $S_0N(d_1)$ can be read as the present value of receiving the stock conditional on exercise, minus $Ke^{-rT}N(d_2)$, the present value of paying the strike conditional on exercise."
            },
            {
                "q": "What are $d_1$ and $d_2$ in the Black-Scholes formula?",
                "a": "$d_1 = \\frac{\\ln(S_0/K) + (r+\\tfrac12\\sigma^2)T}{\\sigma\\sqrt{T}}$, and $d_2 = d_1 - \\sigma\\sqrt{T}$",
                "explain": "$d_2$ specifically has a clean interpretation worth remembering: it's (up to sign convention) the standardised distance between $\\ln S_T$'s risk-neutral mean and $\\ln K$, so $N(d_2)$ is literally the risk-neutral <em>probability</em> the option finishes in the money — directly connecting to Module 11's card about Delta and in-the-money probability."
            },
            {
                "q": "What is the Black-Scholes partial differential equation?",
                "a": "$\\frac{\\partial V}{\\partial t} + rS\\frac{\\partial V}{\\partial S} + \\tfrac12\\sigma^2 S^2\\frac{\\partial^2 V}{\\partial S^2} = rV$",
                "explain": "This PDE is derived by applying Ito's Lemma (Module 8) to a delta-hedged portfolio and invoking no-arbitrage (Module 10) — note it holds for <em>any</em> derivative on the underlying stock, not just a call or put specifically; the option-specific formula from the card above is simply this general PDE solved subject to a call option's particular boundary/payoff condition."
            },
            {
                "q": "What is the 'Garman-Kohlhagen' form of the Black-Scholes model used for?",
                "a": "Pricing options on foreign currencies, adjusting for a continuous dividend-like yield equal to the foreign risk-free rate.",
                "explain": "This is Module 10's dividend-yield forward-pricing adjustment ($F_0=S_0e^{(r-q)T}$) applied directly to Black-Scholes — holding foreign currency naturally earns the <em>foreign</em> risk-free rate, which plays exactly the same mathematical role in the formula as a continuous dividend yield does for a stock."
            },
            {
                "q": "What is the 'martingale approach' to derivative pricing?",
                "a": "Pricing a derivative as the discounted expected payoff under the risk-neutral measure, since discounted asset prices are martingales under that measure.",
                "explain": "This is the continuous-time generalisation of Module 12's binomial risk-neutral valuation — same fundamental idea (discount expected payoff under a specially-constructed measure), just now applied to GBM's continuous price paths rather than a discrete tree, and it's this approach (not solving the PDE directly) that most directly derives the Black-Scholes formula in the card above."
            },
            {
                "q": "List two key assumptions underlying the basic Black-Scholes model.",
                "a": "Constant volatility and constant risk-free rate (also: no dividends, frictionless markets, continuous trading, log-normal price dynamics).",
                "explain": "Worth having this full list ready as a checklist, since it's exactly the list of assumptions Module 9's empirical evidence (fat tails, volatility clustering) and Module 15's more sophisticated interest-rate models are built to relax — every 'extension beyond basic Black-Scholes' in this syllabus is really about dropping one specific item from this list."
            },
            {
                "q": "Why is the assumption of constant volatility considered unrealistic in practice?",
                "a": "Observed volatility varies over time and differs by strike/maturity (the volatility smile/skew), unlike the model's single constant parameter.",
                "explain": "This is Module 9's volatility-clustering critique landing directly on the Black-Scholes formula — the 'volatility smile' is the standard, heavily-documented empirical finding that market-implied volatility (backed out from real option prices) varies systematically by strike, which a model assuming one single constant $\\sigma$ simply cannot reproduce."
            },
            {
                "q": "How would you use the Black-Scholes model to hedge a written call option?",
                "a": "Continuously hold Delta shares of the underlying asset (delta-hedging), financed at the risk-free rate, rebalancing as Delta changes.",
                "explain": "This is Module 11's delta-hedging concept, now made fully rigorous — in the idealised Black-Scholes world (continuous trading, no transaction costs), continuously rebalancing exactly to $\\Delta=N(d_1)$ shares <em>perfectly</em> replicates the option's payoff, which is precisely the theoretical argument that justifies the formula's price as the unique no-arbitrage value."
            },
            {
                "q": "What does it mean for a market to be 'frictionless' in the Black-Scholes assumptions?",
                "a": "No transaction costs, no taxes, and assets are infinitely divisible and can be traded continuously.",
                "explain": "This assumption is what makes the <em>continuous</em> delta-hedging story above actually work in the model's idealised world — real markets have transaction costs and discrete trading, so real-world delta-hedging is necessarily an imperfect <em>approximation</em> to the model's theoretically perfect, frictionless replication."
            },
            {
                "q": "How does the Black-Scholes formula for a put option relate to the call formula?",
                "a": "Via put-call parity: $P = Ke^{-rT}N(-d_2) - S_0N(-d_1)$",
                "explain": "This is Module 10's model-independent put-call parity identity applied directly — rather than solving the Black-Scholes PDE separately for a put, simply substitute the call formula into $P=C-S_0+Ke^{-rT}$ and simplify (using $N(x)+N(-x)=1$) to get this result, showing put-call parity and Black-Scholes are fully consistent with each other."
            },
            {
                "q": "What does the martingale representation theorem provide, conceptually?",
                "a": "A justification that, under the risk-neutral measure, any attainable payoff can be replicated by a self-financing trading strategy.",
                "explain": "This is the deep theoretical justification for Module 10's market-completeness concept, made rigorous for the continuous-time GBM setting — it's what guarantees the delta-hedging replication strategy above works for <em>any</em> payoff, not just the specific call/put payoffs this module happens to focus on."
            },
            {
                "q": "What happens to a European call's Black-Scholes price as time to maturity $T$ approaches zero?",
                "a": "It converges to the option's intrinsic value, $\\max(S_0 - K, 0)$.",
                "explain": "This is a sensible boundary-condition check worth verifying mentally — with no time left, there's no more scope for the stock to move further (Module 11's Vega correctly predicts this converges toward zero too), so all that remains is the payoff you'd get from exercising (or not) right now, exactly matching Module 10's call payoff formula."
            },
            {
                "q": "How does the Black-Scholes formula need to be adjusted for an underlying paying a continuous dividend yield $q$?",
                "a": "Replace $S_0$ with $S_0e^{-qT}$ in the formula (and correspondingly in $d_1$).",
                "explain": "This is exactly the same $r-q$ adjustment pattern from Module 10's dividend-adjusted forward price and this module's own Garman-Kohlhagen currency-option card — recognising this as <em>one</em> recurring adjustment applied in three different contexts (forwards, FX options, dividend-paying stock options) is far more efficient than memorising three separate formulas."
            },
            {
                "q": "Why is validity of the Black-Scholes assumptions important to consider when applying the model in practice?",
                "a": "If assumptions like constant volatility or frictionless markets are significantly violated, the model's prices/hedges can be materially inaccurate.",
                "explain": "This closes the module's assumptions thread with the practical bottom line — the formula gives an exact, elegant answer <em>within</em> its idealised assumptions, but a practitioner must always ask whether those assumptions (especially constant volatility, given the well-documented smile from earlier in this module) are close enough to reality for the specific option being priced."
            },
            {
                "q": "What connects the Black-Scholes PDE approach and the martingale (risk-neutral expectation) approach?",
                "a": "The Feynman-Kac theorem — the PDE's solution can be represented as a discounted risk-neutral expectation.",
                "explain": "This closes the module by formally tying together its two parallel threads — the PDE approach (differential equation from no-arbitrage/hedging arguments) and the martingale approach (discounted risk-neutral expectation) look like completely different techniques, but the Feynman-Kac theorem proves they're mathematically guaranteed to give the <em>same</em> answer, which is why either route derives the identical Black-Scholes formula."
            }
        ]
    },
    {
        "id": "m14",
        "title": "The 5-step method",
        "description": "Introduces a systematic risk-neutral valuation procedure — the '5-step method' — for pricing derivatives using a general change-of-measure/numeraire approach.",
        "cards": [
            {
                "q": "What is the general purpose of the '5-step method'?",
                "a": "To provide a systematic procedure for pricing a derivative by risk-neutral valuation, choosing a convenient numeraire and change of measure.",
                "explain": "This module generalises Module 13's Black-Scholes approach (which implicitly always used cash/the money-market account as its reference point) into a fully flexible framework — the new idea is that the <em>choice</em> of reference asset (numeraire) is itself a modelling decision that can dramatically simplify an otherwise hard pricing problem."
            },
            {
                "q": "What is a 'numeraire'?",
                "a": "A reference asset used to express the prices of all other assets in relative terms — chosen so the pricing calculation becomes simpler.",
                "explain": "Every price you've seen so far in CM2 has implicitly been expressed 'in cash terms' (pounds, dollars) — a numeraire is simply a deliberate choice to instead measure value relative to some <em>other</em> asset (e.g. 'how many units of asset B is asset A worth'), which turns out to be a useful trick for certain payoffs."
            },
            {
                "q": "Why might a different numeraire (rather than the cash/money-market account) sometimes simplify a pricing problem?",
                "a": "Expressing payoffs relative to a well-chosen numeraire can turn a complex expectation into a much simpler one.",
                "explain": "The concrete example worth remembering is the exchange-option card below — a payoff that depends on the <em>difference</em> or <em>ratio</em> between two risky assets can become a much simpler one-dimensional problem once you express everything in units of one of those assets, effectively eliminating that asset's own randomness from the calculation."
            },
            {
                "q": "What is the first general step in the 5-step method (in broad terms)?",
                "a": "Express the derivative's payoff in terms of the chosen numeraire.",
                "explain": "This is the deliberate, upfront choice that determines how much easier (or harder) the rest of the calculation will be — choosing well here is the 'art' of applying this method, since a poorly chosen numeraire leaves you no better off than the standard cash-numeraire approach from Module 13."
            },
            {
                "q": "What does 'changing measure' (via Girsanov's theorem, conceptually) achieve in this method?",
                "a": "It adjusts the probability measure so that asset prices expressed in the new numeraire become martingales.",
                "explain": "This is Module 12's risk-neutral-measure idea generalised — just as the standard risk-neutral measure was defined <em>specifically</em> to make cash-denominated discounted prices martingales, each new numeraire choice here needs its <em>own</em> corresponding measure, chosen precisely so that numeraire-denominated prices become martingales under it."
            },
            {
                "q": "Why is the risk-neutral measure associated with the money-market account often the most common numeraire choice?",
                "a": "It's a natural, intuitive default, directly giving the standard discounted-expected-payoff pricing formula.",
                "explain": "This is the reassuring special case that connects this whole module back to everything already familiar — choosing the money-market account (cash) as the numeraire recovers <em>exactly</em> Module 13's standard Black-Scholes-style formula, confirming this module's general framework doesn't replace what you already know, it contains it as one particular choice."
            },
            {
                "q": "What must be true of the process for an asset price expressed in units of the chosen numeraire?",
                "a": "It must be a martingale, under the corresponding measure.",
                "explain": "This is the module's core technical requirement, restating the changing-measure card above as a precise condition — the whole point of the 5-step procedure is to engineer a measure under which <em>this</em> martingale property holds for the numeraire-denominated price, since that's exactly what makes discounted-expectation pricing valid."
            },
            {
                "q": "How does the 5-step method relate to the standard risk-neutral pricing formula used with the money-market account?",
                "a": "The standard formula is a special case of the 5-step method, using the money-market account as the numeraire.",
                "explain": "This restates the earlier 'common default' card as an explicit hierarchy — Module 13's whole approach is not a separate, different technique from this module's; it's literally <em>one</em> instance of the general 5-step procedure, with the numeraire choice fixed in advance to cash rather than left open."
            },
            {
                "q": "Give an example of an alternative numeraire that might be useful for pricing an exchange option.",
                "a": "Using one of the two underlying assets itself as the numeraire, rather than cash.",
                "explain": "An exchange option (the right to swap one risky asset for another) depends on <em>two</em> sources of randomness when priced in cash terms — but expressed in units of one of the two assets, the problem often collapses to depending on just <em>one</em> random quantity (their relative ratio), a genuine simplification this technique enables that Module 13's cash-only approach cannot achieve as directly."
            },
            {
                "q": "What is the final step of the 5-step method typically concerned with?",
                "a": "Evaluating the resulting expectation (often reducing to a standard distributional calculation) to obtain the price.",
                "explain": "This closes the procedure by returning to concrete numbers — after the clever measure-and-numeraire setup, the actual final calculation often reduces to something recognisable, like a normal-distribution-based expectation similar in spirit to evaluating $N(d_1)$ and $N(d_2)$ in Black-Scholes."
            },
            {
                "q": "Why can choosing a well-suited numeraire reduce the dimensionality or complexity of a pricing problem?",
                "a": "It can eliminate one source of randomness, simplifying the remaining expectation.",
                "explain": "This is the precise mechanical reason the exchange-option trick above works — by re-denominating in units of one risky asset, that asset's <em>own</em> randomness is effectively absorbed into the numeraire itself, leaving only the (simpler) randomness of how the <em>other</em> asset behaves relative to it."
            },
            {
                "q": "What mathematical tool underlies the change of numeraire/measure technique?",
                "a": "The Radon-Nikodym derivative, which relates probabilities under one measure to probabilities under another.",
                "explain": "This is the precise mathematical machinery behind the 'changing measure' card earlier in this module — it's the formal tool that lets you rigorously convert an expectation calculated under one probability measure into an equivalent expectation under a different one, which is exactly what switching numeraires requires under the hood."
            },
            {
                "q": "Why is the 5-step method described as a general procedure rather than a single formula?",
                "a": "It's a systematic approach applicable to a wide range of payoffs and numeraire choices, not a single closed-form result like Black-Scholes.",
                "explain": "This is the key contrast with Module 13 worth holding onto — Black-Scholes is <em>one</em> formula for <em>one</em> specific type of payoff (a plain vanilla call/put); the 5-step method is a reusable <em>process</em> you apply fresh to each new, potentially unfamiliar payoff structure, choosing whatever numeraire best suits that particular problem."
            },
            {
                "q": "How does the 5-step method help when a derivative's payoff depends on more than one underlying asset?",
                "a": "By choosing a numeraire that simplifies the relationship between the assets, reducing a multi-asset problem to a simpler one.",
                "explain": "This restates the exchange-option example as a general principle — multi-asset payoffs are exactly where Module 13's single-asset Black-Scholes framework runs out of road, and exactly where this module's numeraire flexibility earns its keep."
            },
            {
                "q": "Why is understanding the 5-step method valuable beyond just memorising the Black-Scholes formula?",
                "a": "It provides a flexible, general framework applicable to a much wider range of derivative pricing problems.",
                "explain": "This closes the module with its overarching justification — real derivatives markets contain far more exotic payoff structures than plain calls and puts, and this general procedure (rather than a growing list of memorised special-case formulas) is what equips you to approach a novel pricing problem systematically."
            }
        ]
    },
    {
        "id": "m15",
        "title": "The term structure of interest rates",
        "description": "Covers models describing how interest rates vary by term — desirable characteristics, risk-neutral bond pricing, and the Vasicek, Cox-Ingersoll-Ross and Hull-White models.",
        "cards": [
            {
                "q": "What does a 'model of the term structure of interest rates' attempt to describe?",
                "a": "How interest rates (or bond prices/yields) of different maturities are related and evolve over time, typically via a short-rate model.",
                "explain": "This module applies the SDE/Ito-process machinery from Modules 7-8 to a different underlying variable — instead of modelling a <em>stock</em> price with GBM, these models describe the <em>interest rate</em> itself as a stochastic process, from which a whole yield curve of bond prices can then be derived."
            },
            {
                "q": "Give one desirable characteristic of a good term structure model.",
                "a": "Non-negative interest rates, mean reversion, and analytical tractability for bond/derivative pricing.",
                "explain": "This is a useful checklist for comparing the three named models in this module — as the cards below show, <em>each</em> of Vasicek, CIR, and Hull-White satisfies some but not necessarily all of these properties, and understanding the trade-offs between them is exactly what this module tests."
            },
            {
                "q": "What is the 'risk-neutral approach' to pricing a zero-coupon bond?",
                "a": "The bond price equals the risk-neutral expectation of the discounted (at the stochastic short rate) payoff of $1$ at maturity.",
                "explain": "This is Module 12's risk-neutral valuation principle applied to a bond instead of a stock option — the new complication is that the <em>discount rate</em> itself is now random (since the short rate $r_t$ is stochastic), so you must take an expectation over the whole random discounting path, not just the random payoff."
            },
            {
                "q": "What is the SDE for the short rate under the Vasicek model?",
                "a": "$dr_t = a(b - r_t)\\,dt + \\sigma\\,dW_t$ — an Ornstein-Uhlenbeck (mean-reverting) process.",
                "explain": "This is literally Module 8's Ornstein-Uhlenbeck process, renamed and reapplied — recognising this instantly (rather than treating it as a new formula) means you already know its key behaviour: mean reversion toward $b$ at speed $a$, exactly as covered when Ornstein-Uhlenbeck was first introduced."
            },
            {
                "q": "What is a key limitation of the Vasicek model?",
                "a": "It allows the short rate to become negative with positive probability.",
                "explain": "This is a direct consequence of the model's <em>constant</em> diffusion term $\\sigma$ — since the random component doesn't shrink as $r_t$ approaches zero, there's always some chance of the process being pushed below zero, which was historically considered unrealistic (though less so since real-world negative rates occurred, per a card below)."
            },
            {
                "q": "What is the SDE for the short rate under the Cox-Ingersoll-Ross (CIR) model?",
                "a": "$dr_t = a(b - r_t)\\,dt + \\sigma\\sqrt{r_t}\\,dW_t$ — mean-reverting, with volatility proportional to $\\sqrt{r_t}$.",
                "explain": "Notice the drift term is <em>identical</em> to Vasicek's — CIR keeps exactly the same mean-reversion structure, and only modifies the diffusion term, replacing the constant $\\sigma$ with $\\sigma\\sqrt{r_t}$; this single, targeted change is precisely what fixes Vasicek's negative-rate problem, as the next card explains."
            },
            {
                "q": "How does the CIR model address the Vasicek model's main limitation?",
                "a": "The $\\sqrt{r_t}$ term means volatility shrinks to zero as rates approach zero, keeping rates non-negative under suitable conditions.",
                "explain": "The intuition: as $r_t\\to0$, the diffusion term $\\sigma\\sqrt{r_t}\\to0$ too, so the random 'push' that could otherwise drive rates negative weakens exactly when rates get close to zero — combined with the (still-present) mean-reverting drift pulling back toward $b>0$, this keeps the process non-negative under suitable parameter conditions."
            },
            {
                "q": "What distinguishes the Hull-White model from the Vasicek model?",
                "a": "Hull-White allows the mean-reversion level (and potentially other parameters) to be time-dependent, exactly fitting the current yield curve.",
                "explain": "This is a different kind of improvement from CIR's fix — rather than changing the diffusion term's <em>form</em>, Hull-White keeps Vasicek's basic structure but lets the parameters vary with time, specifically so the model can be calibrated to match <em>today</em>'s actual observed yield curve exactly, which plain Vasicek generally cannot do."
            },
            {
                "q": "Why is exactly fitting the current yield curve (as Hull-White allows) often desirable in practice?",
                "a": "It ensures the model's bond prices match observed market prices today, important for consistent pricing and hedging.",
                "explain": "This connects to Module 1's EMH and market-efficiency themes — if a model's own bond prices don't match today's observable market prices, you'd have an immediate, embarrassing arbitrage-style inconsistency between the model and reality; Hull-White's time-dependent calibration is specifically designed to rule this out by construction."
            },
            {
                "q": "What is a 'one-factor' model of the term structure?",
                "a": "A model where all interest rates of different maturities are driven by a single source of randomness (typically the short rate).",
                "explain": "This is Module 7's Brownian motion $W_t$ playing exactly one role, driving every maturity's rate simultaneously — all three named models (Vasicek, CIR, Hull-White) are one-factor models in this sense, sharing the limitation covered in the very next card."
            },
            {
                "q": "What is a limitation of one-factor short-rate models generally?",
                "a": "They imply all points on the yield curve are perfectly (or near-perfectly) correlated, unlike real yield curve movements.",
                "explain": "This restates the one-factor structure's cost explicitly — real yield curves can twist and change <em>shape</em> (short rates rising while long rates fall, say), a pattern a single common source of randomness structurally cannot produce; capturing this would need a multi-factor model, an extension beyond this module's scope."
            },
            {
                "q": "How would you use a term structure model to price an interest-rate derivative?",
                "a": "Use the risk-neutral dynamics of the short rate to compute the discounted expected payoff of the derivative.",
                "explain": "This is exactly Module 13's Black-Scholes logic (risk-neutral expected discounted payoff), just with the short-rate SDE (Vasicek, CIR, or Hull-White) standing in for GBM as the underlying stochastic driver — the general <em>principle</em> of risk-neutral pricing doesn't change between asset classes, only the specific process being modelled."
            },
            {
                "q": "What are 'principal concepts and terms' typically covered when introducing term structure models?",
                "a": "Concepts such as the short rate, the yield curve, forward rates, and the risk-neutral valuation framework linking them.",
                "explain": "This directly connects back to CM1's Module 11 (spot rates, forward rates, yield curve shape) — CM1 introduced these concepts in a purely deterministic, interest-theory setting, while this module adds genuine <em>randomness</em> to the short rate, requiring the stochastic-process machinery this whole second half of CM2 has built up."
            },
            {
                "q": "Why might the Vasicek model still be used in practice despite allowing negative rates?",
                "a": "It's analytically tractable (closed-form bond prices), and negative rates became less of a concern once real rates occasionally went negative.",
                "explain": "This is the same 'tractability trumps realism' theme running through the whole CM2 syllabus (mean-variance theory, CAPM, log-normal pricing) — Vasicek's simplicity yields clean, closed-form bond price formulas that CIR's more realistic square-root diffusion complicates significantly, a genuine trade-off worth weighing rather than assuming the 'more realistic' model is automatically the better practical choice."
            },
            {
                "q": "What role does mean reversion play in all three models (Vasicek, CIR, Hull-White)?",
                "a": "It reflects the empirical observation that rates fluctuate around a long-run level rather than drifting off indefinitely.",
                "explain": "This closes the module by tying all three models back to Module 8's original justification for mean reversion (interest rates fluctuate around an economic equilibrium, unlike stock prices) — despite their differences in diffusion structure and time-dependence, all three share this one core economically-motivated feature, which is precisely why it's worth treating as the module's unifying theme."
            }
        ]
    },
    {
        "id": "m16",
        "title": "Credit risk",
        "description": "Introduces simple models for credit risk — credit events, recovery rates, structural models (like Merton's), and reduced-form/intensity-based models.",
        "cards": [
            {
                "q": "What is a 'credit event'?",
                "a": "An event (default, bankruptcy, failure to pay) that triggers a loss or change in status for a debt obligation.",
                "explain": "This module adds a new dimension of risk beyond everything covered so far — Modules 7-15 assumed away the possibility that the bond/counterparty itself might simply fail to pay; credit risk is specifically about modelling <em>that</em> possibility, on top of ordinary market-price risk."
            },
            {
                "q": "What is the 'recovery rate'?",
                "a": "The proportion of a debt's face value that is recovered by creditors following a credit event (default).",
                "explain": "Default doesn't usually mean a total loss — creditors typically recover <em>something</em> through bankruptcy proceedings, asset sales, or restructuring, and the recovery rate is exactly the fraction that survives; a higher recovery rate directly softens the financial impact of any given default, as a later card makes explicit."
            },
            {
                "q": "What are the two broad approaches to modelling credit risk?",
                "a": "Structural models (based on the firm's asset value) and reduced-form (intensity-based) models (based on a statistical default intensity).",
                "explain": "This is the module's organising split, and every remaining card falls into one camp or the other — structural models try to explain <em>why</em> default happens (an economic story about the firm), while reduced-form models simply describe <em>how often</em> it happens statistically, without needing an underlying economic story at all."
            },
            {
                "q": "What is the core idea of the Merton (structural) model?",
                "a": "A firm defaults if the value of its assets falls below the face value of its debt at maturity; equity is modelled as a call option on the firm's assets.",
                "explain": "This is an elegant reuse of Module 13's whole option-pricing toolkit — rather than inventing new mathematics for credit risk, Merton recognised that a leveraged firm's equity holders behave exactly like call-option holders on the firm's total assets, letting Black-Scholes-style machinery price credit risk directly."
            },
            {
                "q": "In the Merton model, what financial instrument is a firm's equity analogous to?",
                "a": "A European call option on the firm's assets, with strike price equal to the face value of the debt.",
                "explain": "The intuition: if the firm's assets are worth more than the debt at maturity, shareholders keep the excess after paying off debtholders (exactly a call option's payoff, $\\max(V_A-K,0)$ with $K$ the debt); if assets are worth <em>less</em> than the debt, shareholders walk away with nothing (limited liability) rather than making up the shortfall — again exactly matching a call option's floor at zero."
            },
            {
                "q": "What does the Merton model imply about the firm's debt value?",
                "a": "It's equivalent to a risk-free bond minus a put option on the firm's assets.",
                "explain": "This follows directly from Module 10's put-call parity, applied to the firm's whole capital structure — total firm value (assets) splits into equity (a call) plus debt, and since assets themselves are the 'underlying', debt must be whatever's left over, which works out to a risk-free bond minus a put (the put representing the risk that shareholders default and hand over less than the debt's full value)."
            },
            {
                "q": "What is a key input needed to apply the Merton model?",
                "a": "The current value and volatility of the firm's assets (often estimated indirectly from observable equity value and volatility).",
                "explain": "This is a genuine practical challenge worth understanding — a firm's <em>total</em> asset value and volatility aren't directly observable in the market (only its equity, the tradeable shares, is) — practitioners typically have to back these out indirectly, using the equity-as-a-call-option relationship from above run in reverse."
            },
            {
                "q": "What is a 'reduced-form' (intensity-based) credit risk model?",
                "a": "A model where default occurs according to a statistical hazard rate/intensity process, without explicitly modelling the firm's asset value.",
                "explain": "This is a completely different philosophy from Merton's structural approach — rather than asking <em>why</em> a firm defaults (asset value falling below debt), it simply models default as a random <em>event</em> occurring at some rate, exactly analogous to CS1's survival-analysis-style hazard rate concept, applied here to corporate default instead of mortality."
            },
            {
                "q": "What is the 'two-state model' for credit rating with constant transition intensity?",
                "a": "A simple model where a bond/issuer is in one of two states (non-default or default), moving to default at a constant intensity $\\lambda$.",
                "explain": "This is the simplest possible reduced-form model — just two states and one constant transition rate — and it's structurally identical to CM1 Module 12's constant-force-of-mortality idea, just relabelled: 'default' plays the role of 'death', and $\\lambda$ plays the role of the mortality force $\\mu$."
            },
            {
                "q": "Under the two-state model with constant intensity $\\lambda$, what is the probability of surviving (no default) to time $t$?",
                "a": "$e^{-\\lambda t}$",
                "explain": "This is exactly the same exponential-survival formula from Modules 12 and 17 (ruin theory's Poisson process) — a constant intensity/hazard rate always produces this same $e^{-\\lambda t}$ survival shape, a mathematical pattern worth recognising as recurring across mortality, ruin theory, and credit risk alike."
            },
            {
                "q": "What is one advantage of reduced-form models over structural models?",
                "a": "They don't require modelling the firm's underlying asset value, and can be calibrated directly to observed credit spreads/bond prices.",
                "explain": "This directly addresses the practical challenge flagged in the Merton-model-inputs card above — since reduced-form models skip modelling asset value entirely, they sidestep the whole 'how do I estimate unobservable asset value and volatility' problem, instead calibrating $\\lambda$ directly to whatever credit spread the market is already charging."
            },
            {
                "q": "What is one advantage of structural models over reduced-form models?",
                "a": "They provide an economic explanation for why default occurs, giving more intuitive insight into default drivers.",
                "explain": "This is the direct trade-off against the reduced-form advantage above — a reduced-form model can fit observed spreads beautifully while telling you nothing about <em>why</em> a firm might default (rising leverage? falling asset value? industry downturn?), whereas Merton's structural story gives genuine, interpretable economic insight into the default mechanism itself."
            },
            {
                "q": "How does a higher recovery rate affect the expected loss from a credit event, all else equal?",
                "a": "It reduces the expected loss, since a larger fraction of the debt's value is recovered.",
                "explain": "This restates the recovery-rate concept from earlier in this module as a direct calculation input — expected loss is typically computed as (probability of default) $\\times$ (1 $-$ recovery rate) $\\times$ (exposure), so recovery rate and expected loss move in strictly opposite directions holding everything else fixed."
            },
            {
                "q": "Why might credit spreads on corporate bonds be higher than what expected default losses alone would suggest?",
                "a": "Additional compensation for illiquidity, uncertainty in recovery rates, and risk premia demanded by investors.",
                "explain": "This is an important real-world observation worth remembering — the observed credit spread isn't <em>purely</em> compensation for expected default loss; it also bundles in compensation for the uncertainty <em>around</em> that loss estimate and for how easily the bond can be traded, which is why naive expected-loss calculations often underpredict actual market spreads."
            },
            {
                "q": "How could the two-state constant-intensity model be extended to reflect changing credit quality over time?",
                "a": "By using a multi-state model with several credit rating states and transition intensities between them.",
                "explain": "This closes the module by connecting directly back to CM1 Module 22's multiple-state/multiple-decrement framework — rather than a single jump from 'fine' to 'default', a multi-state credit model can track gradual credit deterioration (AAA to AA to A, etc.) before default, using exactly the same multi-state machinery introduced for mortality and pension decrements in CM1."
            }
        ]
    },
    {
        "id": "m17",
        "title": "Ruin theory",
        "description": "Models an insurer's aggregate claims and cashflow process to assess the probability of ruin — using the Poisson process, the adjustment coefficient, Lundberg's inequality, and the effect of reinsurance.",
        "cards": [
            {
                "q": "What does 'ruin' mean in ruin theory?",
                "a": "The insurer's surplus (assets minus liabilities, broadly) falling below zero at some point.",
                "explain": "This module pivots CM2 from investment/derivatives theory to an insurance-specific application — it's the natural quantitative sequel to Module 3's insurance-risk-pooling discussion, now modelling the insurer's whole financial position as a stochastic process over time and asking how likely it is to fail."
            },
            {
                "q": "What is the 'aggregate claim process'?",
                "a": "The cumulative total of claim amounts paid by an insurer up to time $t$, as a stochastic process.",
                "explain": "This is the key random <em>input</em> driving the whole module — the insurer's surplus at any time is (initial surplus) plus (premiums collected so far) minus (this aggregate claim process), so everything in this module ultimately comes down to understanding how this one process behaves."
            },
            {
                "q": "What is a Poisson process used to model in this context?",
                "a": "The number of claim events occurring over time, assuming events occur independently at a constant average rate.",
                "explain": "This is exactly the same Poisson process concept CS1 introduced (Module 2 there) and CM1's mortality/decrement modules echo — here it specifically counts <em>claim events</em> arriving over time, providing the 'how many claims' half of the aggregate claim process, with claim <em>size</em> (the next card's compound-process idea) providing the other half."
            },
            {
                "q": "What is the distribution of the number of events of a Poisson process with rate $\\lambda$ in an interval of length $t$?",
                "a": "Poisson with mean $\\lambda t$.",
                "explain": "This restates CS1's Poisson-process-to-Poisson-distribution link directly in the ruin-theory context — worth having automatic recall of, since it's the starting point for computing expected claim numbers, and ultimately expected aggregate claims, over any period of interest."
            },
            {
                "q": "What is the distribution of the waiting time between events in a Poisson process?",
                "a": "Exponential with rate $\\lambda$ (mean $1/\\lambda$).",
                "explain": "This is CS1's memoryless-exponential-distribution concept applied to claim <em>arrival times</em> specifically — a useful mental model: claims arrive completely unpredictably, with no 'building up' toward the next claim, exactly matching the memorylessness property from CS1 Module 2."
            },
            {
                "q": "What is a 'compound Poisson process,' as used to model aggregate claims?",
                "a": "A process where the number of claims follows a Poisson process, and each claim has a random size, giving a total that's the sum of a Poisson-distributed number of claim sizes.",
                "explain": "This is CS1's conditional-expectation/compound-distribution technique (Module 5 there: 'condition on the number of claims $N$, then take the expectation over $N$') made fully concrete as the module's central model — the <em>aggregate</em> claim process is exactly this compound Poisson construction, running continuously through time."
            },
            {
                "q": "What is the 'probability of ruin'?",
                "a": "The probability that the insurer's surplus falls below zero at some point, either within a finite time horizon or ever (infinite time).",
                "explain": "This is the module's central quantity of interest, and note the two versions (finite vs infinite time) are different questions worth keeping distinct — the next card gives the precise relationship between them."
            },
            {
                "q": "How does the probability of ruin in finite time relate to the probability of ruin in infinite time?",
                "a": "The infinite-time ruin probability is always at least as large as the probability within any finite time horizon.",
                "explain": "This makes logical sense once stated plainly: 'ruin ever happens' is a <em>weaker</em> (easier to satisfy) condition than 'ruin happens within the next 10 years specifically' — every path that causes ruin within a finite horizon also counts toward ruin happening eventually, but not vice versa, so the infinite-time probability can only be larger or equal."
            },
            {
                "q": "What is the 'adjustment coefficient' (Lundberg's coefficient)?",
                "a": "A parameter $R>0$ appearing in bounds/approximations for the probability of ruin, determined by the premium loading and claim size distribution.",
                "explain": "This single parameter is worth thinking of as a compact summary of 'how safe' the insurer's overall risk position is — it's derived from balancing the insurer's premium income advantage (the loading above pure expected cost) against how variable/heavy-tailed the claim size distribution is, and it drives the key inequality in the next card."
            },
            {
                "q": "What does Lundberg's inequality state?",
                "a": "The probability of ultimate ruin is bounded above by $e^{-Ru}$, where $u$ is the initial surplus and $R$ is the adjustment coefficient.",
                "explain": "This is the module's headline theoretical result — worth noting it's a <em>bound</em>, not an exact formula (the true ruin probability is generally hard to compute exactly), giving a guaranteed worst-case ceiling on ruin risk that's much easier to calculate than the exact probability itself."
            },
            {
                "q": "How does increasing initial surplus $u$ affect the (Lundberg) bound on the probability of ruin?",
                "a": "It decreases the bound, since $e^{-Ru}$ falls as $u$ increases.",
                "explain": "This matches obvious intuition (more starting capital should mean safer), but Lundberg's inequality makes it <em>precise</em> — the ruin-probability bound falls off <em>exponentially</em> in $u$, meaning even modest increases in held surplus can produce a dramatic reduction in the worst-case ruin risk."
            },
            {
                "q": "How does proportional reinsurance typically affect the adjustment coefficient (and hence the probability of ruin)?",
                "a": "It can increase the adjustment coefficient (reducing ruin probability) by reducing retained claims variability, though it also reduces retained premium income.",
                "explain": "This is a genuine trade-off worth understanding both directions of — reinsurance reduces the insurer's exposure to large/variable claims (helping $R$ and lowering ruin risk), but it also means ceding away a share of premium income to the reinsurer (hurting the insurer's own premium loading), so more reinsurance isn't automatically better without limit."
            },
            {
                "q": "How can the probability of ruin be estimated when no closed-form solution is available?",
                "a": "By simulation — repeatedly simulating the claims and premium process and estimating the proportion of paths resulting in ruin.",
                "explain": "This is worth recognising as the same general fallback technique used throughout actuarial modelling whenever exact formulas become intractable — much like Module 9's simulation-based testing of the log-normal model, or CS1's bootstrap method, when the maths gets too hard to solve in closed form, simulating many possible paths and counting outcomes empirically is the standard practical alternative."
            },
            {
                "q": "What is the effect of excess of loss reinsurance on an insurer's aggregate claims variability?",
                "a": "It caps exposure to very large individual claims, reducing the variability (and tail risk) of retained aggregate claims.",
                "explain": "This is a different reinsurance structure from the proportional reinsurance card above, worth keeping distinct — proportional reinsurance shares <em>every</em> claim in a fixed proportion, while excess of loss only kicks in for the <em>largest</em> claims above a threshold, making it a more targeted tool specifically for controlling tail risk rather than overall claim size."
            },
            {
                "q": "Why might an insurer choose a level of reinsurance that maximises the adjustment coefficient?",
                "a": "A higher adjustment coefficient corresponds to a lower bound on the probability of ruin, a natural way to manage solvency risk against reinsurance cost.",
                "explain": "This closes the module by tying every reinsurance decision back to Lundberg's inequality from earlier — maximising $R$ gives the tightest (lowest) possible bound on ruin probability for a given premium/reinsurance structure, providing a single, well-defined optimisation target for balancing solvency protection against the real cost of buying reinsurance."
            }
        ]
    },
    {
        "id": "m18",
        "title": "Run-off triangles",
        "description": "Covers actuarial reserving techniques for estimating outstanding general insurance claims — the chain ladder method, average cost per claim, and the Bornhuetter-Ferguson method.",
        "cards": [
            {
                "q": "What is a 'run-off triangle' (or 'delay triangle')?",
                "a": "A table showing claims data by origin year and development year, used to project how claims for each origin year will develop to their ultimate value.",
                "explain": "This final module shifts CM2 into general insurance <em>reserving</em> — a different, more data-driven flavour than the theoretical investment/derivatives content of Modules 1-17, though it shares the same underlying goal as Module 17's ruin theory: understanding an insurer's true financial position, here by working out how much is still owed on claims already incurred but not yet fully paid."
            },
            {
                "q": "What is a 'development factor' in the chain ladder method?",
                "a": "A ratio, estimated from historical data, used to project cumulative claims from one development period to the next.",
                "explain": "This is the single building block the whole chain ladder method is constructed from — one development factor per column-to-column transition in the triangle, each capturing 'how much bigger do cumulative claims typically get, going from this development year to the next'."
            },
            {
                "q": "How is a development factor typically estimated from a run-off triangle?",
                "a": "As the ratio of the sum of cumulative claims at one development year to the sum at the previous development year, across origin years with data for both.",
                "explain": "Note this uses the <em>sum</em> across all available origin years, not an average of individual ratios — this weighting gives more influence to origin years with larger claims volumes, which is generally considered the more standard and statistically sensible approach."
            },
            {
                "q": "What is the basic chain ladder method used for?",
                "a": "Projecting the future development of a run-off triangle, using development factors, to estimate ultimate claims for each origin year.",
                "explain": "The mechanical process worth having clear: multiply each origin year's latest known cumulative claims figure by the remaining chain of development factors needed to reach the final development year, projecting each partially-developed diagonal forward to its estimated ultimate value."
            },
            {
                "q": "What key assumption underlies the basic chain ladder method?",
                "a": "That development patterns are consistent across all origin years.",
                "explain": "This is the method's single load-bearing assumption, worth stating explicitly whenever discussing its validity — the whole technique only works if <em>older</em> origin years' development patterns (used to estimate the factors) predict how <em>newer</em>, still-developing origin years will behave, which the closing cards of this module show isn't always safe to assume."
            },
            {
                "q": "How can the basic chain ladder method be adjusted to allow explicitly for inflation?",
                "a": "By separating out an assumed inflation index from the development factors, so projected future claims incorporate an explicit inflation assumption.",
                "explain": "This addresses a genuine weakness in the plain method — ordinary development factors implicitly blend together <em>two</em> effects (claims naturally maturing/developing, and general claims inflation over calendar time), and separating them out lets you apply a more considered, explicit inflation assumption rather than just extrapolating historical inflation blindly forward."
            },
            {
                "q": "What is the 'average cost per claim' method for estimating outstanding claims?",
                "a": "Estimating outstanding claims as the projected number of outstanding claims multiplied by an assumed average cost per claim.",
                "explain": "This is a different technique from the chain ladder's pure amounts-based approach — it explicitly separates the <em>frequency</em> question (how many claims are still outstanding) from the <em>severity</em> question (how much does each cost on average), which can be more informative when frequency and severity trends are moving differently."
            },
            {
                "q": "What is the 'Bornhuetter-Ferguson' method used for?",
                "a": "Estimating outstanding claims by combining a prior estimate of ultimate claims with the chain-ladder-implied proportion of claims still to emerge.",
                "explain": "This is worth connecting to CS1's Bayesian credibility theory (Modules 14-16 there) — Bornhuetter-Ferguson is structurally a credibility-weighted blend, just like the credibility premium formula, combining an independent <em>prior</em> view of ultimate claims with what the <em>data</em> (the chain ladder pattern) suggests."
            },
            {
                "q": "How does the Bornhuetter-Ferguson method differ in philosophy from the pure chain ladder method?",
                "a": "It blends an independent prior view of ultimate claims with the observed data pattern, rather than relying entirely on the chain ladder projection.",
                "explain": "This restates the credibility-theory parallel from the card above explicitly — pure chain ladder is like setting the credibility factor $Z=1$ (100% weight on the data alone), while Bornhuetter-Ferguson deliberately keeps some weight on prior/external information, exactly the kind of blending CS1's credibility theory formalises."
            },
            {
                "q": "Why might Bornhuetter-Ferguson be preferred over pure chain ladder for the most recent origin year?",
                "a": "The most recent year has little data, so a pure chain ladder projection can be very sensitive to random fluctuation — blending stabilises the estimate.",
                "explain": "This is exactly CS1's credibility-theory logic again — sparse individual data (here, a very immature, recently-started origin year) should be given <em>less</em> weight relative to the more stable, external prior estimate, precisely the same 'more data increases $Z$' principle covered for insurance pricing credibility."
            },
            {
                "q": "What is a 'statistical model' underlying run-off triangle methods generally used for?",
                "a": "To provide a probabilistic framework justifying and generalising the deterministic chain-ladder-type calculations, and allowing uncertainty to be quantified.",
                "explain": "This connects the whole reserving topic back to CS1's regression/GLM framework (Modules 12-13 there) — a statistical model version of chain ladder can be fitted much like a GLM, which crucially also delivers a measure of <em>estimation uncertainty</em> around the reserve figure, something the purely deterministic factor-based calculation cannot provide on its own."
            },
            {
                "q": "Name one assumption underlying the basic chain ladder method (beyond consistent development patterns).",
                "a": "That there are no changes in the claims process (legal environment, claims handling) over time that would invalidate using historical patterns.",
                "explain": "This is a second, equally important assumption worth naming alongside 'consistent development patterns' — even if development patterns <em>were</em> historically consistent, a change partway through (new claims-handling software, a legal ruling affecting settlement amounts) can break that consistency going forward, exactly the scenario the next card asks you to reason about."
            },
            {
                "q": "How would a change in claims handling processes partway through the historical data affect chain ladder projections?",
                "a": "It could distort the development pattern, potentially requiring an adjustment or a different approach for affected years.",
                "explain": "This is the practical consequence of the assumption-violation card above — a good reserving actuary doesn't just mechanically apply chain ladder formulas; they investigate <em>why</em> a triangle's pattern looks unusual, and a known process change is exactly the kind of finding that should prompt adjusting the method rather than trusting the raw historical factors blindly."
            },
            {
                "q": "What is 'delay' (development) year, in the context of a run-off triangle?",
                "a": "The number of years (or periods) since the origin (accident/underwriting) year, tracking how claims for that origin year have developed.",
                "explain": "This is the triangle's <em>second</em> axis (alongside origin year), and it's worth being completely clear about the distinction — origin year identifies <em>when</em> the underlying claims-generating event happened, while development year identifies <em>how long after</em> that event a given claims figure is being measured."
            },
            {
                "q": "Why is estimating outstanding claims important for a general insurer?",
                "a": "To hold adequate reserves for claims that have occurred but are not yet fully paid/settled, ensuring it can meet future obligations.",
                "explain": "This closes both the module and the whole CM2 syllabus with the same fundamental theme running through Module 17's ruin theory — an insurer's solvency depends on correctly recognising what it <em>truly</em> owes, and unpaid, unsettled claims are every bit as real a liability as claims already paid, even though (unlike Module 17's stochastic surplus process) this module's methods are the practical, data-driven tools used to actually estimate that liability in real reserving work."
            }
        ]
    }
  ],
  questions: [
    {
      id: "cm2-q1",
      title: "Market efficiency and an insurance decision under exponential utility",
      modules: "Modules 1, 2",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "State the three forms of the Efficient Markets Hypothesis, and which of them is contradicted if a fund manager can consistently earn abnormal returns using only published company accounts.",
          answer:
            "The three forms are weak, semi-strong, and strong. Consistently earning abnormal returns from published accounts (public information) would contradict semi-strong form efficiency &mdash; and, since semi-strong form implies weak form, it would also mean weak form claims about technical analysis are not being tested by this evidence either way.",
          note: "Candidates should recognise that fundamental analysis of public accounts is specifically a semi-strong form question, not a weak form one (which concerns only historical price patterns).",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "An individual's preferences are described by the exponential utility function $u(w) = 1 - e^{-aw}$ with $a=0.1$ (wealth in &pound;'000s). Their current wealth is &pound;50,000, and they face a 20% chance of a &pound;10,000 loss. Calculate their expected utility if they do not insure against this risk.",
          answer:
            "$u(50) = 1-e^{-5} = 0.9933$. $u(40) = 1-e^{-4} = 0.9817$. $E[u] = 0.8(0.9933) + 0.2(0.9817) = 0.9909$",
          note: "Wealth must be substituted in the <em>same</em> units as $a$ is calibrated to (here, &pound;'000s) &mdash; mixing units (e.g. using $w=50{,}000$ directly with $a=0.1$) gives a meaningless, saturated result.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "An insurer offers to fully remove this risk for a fixed premium of &pound;2,500. Calculate the individual's expected utility if they buy this insurance, and state whether they should.",
          answer:
            "With insurance, wealth is certain at $50-2.5=47.5$ (in &pound;'000s). $E[u] = u(47.5) = 1-e^{-4.75} = 0.9913$. Since $0.9913 > 0.9909$ (the uninsured expected utility from part (ii)), the individual should buy the insurance.",
          note: "The comparison must be made against the exact value from part (ii), not a rounded approximation &mdash; the two expected utilities are close enough that excessive rounding could flip the conclusion.",
        },
        {
          label: "(iv)",
          command: "Calculate",
          marks: 3,
          question: "Calculate the certainty equivalent wealth of the uninsured position from part (ii), and use it to explain your conclusion in part (iii) without directly comparing utility values.",
          answer:
            "$CE = -\\dfrac{1}{a}\\ln(1-E[u]) = -\\dfrac{1}{0.1}\\ln(1-0.9909) = -10\\ln(0.0091) = 47.05$ (&pound;'000s). Since the certainty equivalent (&pound;47,050) is less than the guaranteed wealth after insurance (&pound;47,500), the individual is better off accepting the insurer's guaranteed outcome than facing the risky uninsured prospect, confirming insurance should be bought.",
          note: "The certainty equivalent is the guaranteed wealth level giving the <em>same</em> expected utility as the risky prospect &mdash; comparing it directly to the insured wealth level is a cleaner, more intuitive way to reach the same conclusion as part (iii) without needing to interpret raw utility numbers.",
        },
      ],
    },
    {
      id: "cm2-q2",
      title: "Value at Risk and TailVaR for a portfolio loss distribution",
      modules: "Module 3",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define Value at Risk (VaR) and TailVaR (Expected Shortfall) at confidence level $\\alpha$.",
          answer:
            "VaR at confidence level $\\alpha$ is the loss amount that will not be exceeded with probability $\\alpha$ over the specified horizon. TailVaR is the expected loss, given that the loss exceeds the VaR threshold &mdash; the average of the losses in the worst $(1-\\alpha)$ tail of the distribution.",
          note: "Both definitions should reference a specific confidence level explicitly, since part (ii) and (iii) apply them at a stated 95% level.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "A portfolio's one-year loss $L$ is assumed to be normally distributed with mean &pound;100,000 and standard deviation &pound;40,000. Calculate the 95% VaR (using $z_{0.95}=1.645$).",
          answer: "$VaR_{95\\%} = \\mu + z_{0.95}\\,\\sigma = 100{,}000 + 1.645(40{,}000) = \\pounds165{,}800$",
          note: "This is a direct normal-quantile calculation &mdash; candidates should be comfortable that VaR here is a quantile of the <em>loss</em> distribution, not of a return distribution, so no sign-flip is needed.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question:
            "Calculate the 95% TailVaR for the same loss distribution, using $TailVaR_\\alpha = \\mu + \\sigma\\,\\dfrac{\\phi(z_\\alpha)}{1-\\alpha}$, where $\\phi$ is the standard normal density function.",
          answer:
            "$\\phi(1.645) = \\dfrac{1}{\\sqrt{2\\pi}}e^{-1.645^2/2} = 0.1031$. $TailVaR_{95\\%} = 100{,}000 + 40{,}000\\times\\dfrac{0.1031}{0.05} = 100{,}000+82{,}490 = \\pounds182{,}490$",
          note: "The division by $(1-\\alpha)=0.05$, not by $\\alpha=0.95$, is the most common slip here &mdash; candidates should double check they've used the correct tail probability.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why TailVaR exceeds VaR in this example, and explain one advantage TailVaR has over VaR for a general insurer's capital-setting purposes.",
          answer:
            "TailVaR averages over <em>all</em> losses beyond the VaR threshold, including the most extreme ones, while VaR only marks where that tail begins &mdash; since the tail necessarily contains losses larger than the VaR threshold itself, TailVaR must exceed VaR. TailVaR is a coherent risk measure (satisfying sub-additivity, among other properties) and better reflects the severity of losses in the tail, making it more appropriate than VaR for setting capital to withstand extreme outcomes.",
          note: "The coherence/sub-additivity point is the key technical advantage worth naming specifically, not just 'TailVaR captures more information' in vague terms.",
        },
      ],
    },
    {
      id: "cm2-q3",
      title: "Two-asset portfolio theory and the minimum variance portfolio",
      modules: "Module 4",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the formula for the variance of a two-asset portfolio in terms of the asset weights, variances, and covariance.",
          answer: "$\\sigma_p^2 = w_1^2\\sigma_1^2 + w_2^2\\sigma_2^2 + 2w_1w_2\\,\\text{Cov}(R_1,R_2)$",
          note: "This is the foundation formula for the whole question &mdash; candidates should have it available without derivation, since parts (ii) and (iii) apply it directly.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "Asset 1 has expected return 8% and standard deviation 20%; Asset 2 has expected return 12% and standard deviation 30%. The correlation between them is $-0.2$. Calculate the expected return and standard deviation of a portfolio with 60% in Asset 1 and 40% in Asset 2.",
          answer:
            "Expected return $= 0.6(8\\%)+0.4(12\\%) = 9.6\\%$. $\\text{Cov} = (-0.2)(0.20)(0.30) = -0.012$. $\\sigma_p^2 = 0.6^2(0.20)^2+0.4^2(0.30)^2+2(0.6)(0.4)(-0.012) = 0.0144+0.0144-0.00576=0.02304$. $\\sigma_p = 15.18\\%$",
          note: "Note the portfolio standard deviation (15.18%) is below the <em>simple</em> weighted average of the individual standard deviations (0.6(20%)+0.4(30%)=24%) &mdash; this gap is the diversification benefit, worth flagging explicitly.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "Calculate the weights of the minimum variance portfolio for these two assets.",
          answer:
            "$w_1^{MV} = \\dfrac{\\sigma_2^2-\\text{Cov}}{\\sigma_1^2+\\sigma_2^2-2\\,\\text{Cov}} = \\dfrac{0.09-(-0.012)}{0.04+0.09-2(-0.012)} = \\dfrac{0.102}{0.154}=0.662$, so $w_2^{MV}=0.338$. This gives $\\sigma_p^{MV}=14.98\\%$.",
          note: "Candidates should quote the minimum-variance-weight formula explicitly before substituting &mdash; a bare numerical answer with no formula shown risks losing method marks.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why the minimum variance portfolio's standard deviation (14.98%) is lower than that of the 60/40 portfolio (15.18%) found in part (ii), referencing the correlation between the two assets.",
          answer:
            "Because the correlation is negative ($\\rho=-0.2$), the two assets' returns tend to partially offset each other, and there exists a <em>specific</em> weighting (the minimum variance weights) that maximises this offsetting effect. The 60/40 split in part (ii) is a reasonable but not optimal mix for risk minimisation; the minimum variance weights (66.2%/33.8%) are specifically chosen to minimise portfolio variance, so by construction no other weighting (including 60/40) can achieve a lower variance.",
          note: "The key insight is that diversification benefit exists across a <em>range</em> of weightings, but is only <em>maximised</em> at one specific point (the minimum variance portfolio) &mdash; candidates should avoid implying 60/40 was a poor choice, just that it isn't the variance-minimising one.",
        },
      ],
    },
    {
      id: "cm2-q4",
      title: "CAPM and the security market line",
      modules: "Modules 5, 6",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the CAPM formula for the expected return on an asset, and define beta.",
          answer: "$E[R_i]=R_f+\\beta_i(E[R_m]-R_f)$. Beta measures the sensitivity of an asset's excess return to the excess return of the market portfolio.",
          note: "Both the formula and the definition of beta are needed, since part (ii) requires substituting into the formula and part (iii) requires interpreting the resulting comparison.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question: "A stock has a beta of 1.4. The risk-free rate is 3% and the expected return on the market portfolio is 9%. Calculate the CAPM-required expected return on the stock.",
          answer: "$E[R_i] = 3\\% + 1.4(9\\%-3\\%) = 3\\%+1.4(6\\%) = 3\\%+8.4\\% = 11.4\\%$",
          note: "A direct substitution into the CAPM formula &mdash; the market risk premium ($9\\%-3\\%=6\\%$) should be calculated as an intermediate step, not skipped.",
        },
        {
          label: "(iii)",
          command: "Comment",
          marks: 3,
          question: "Analysts forecast the stock's actual expected return at 11%. State whether the stock plots above or below the security market line, and what this implies.",
          answer:
            "Since the forecast return (11%) is below the CAPM-required return (11.4%) from part (ii), the stock plots <em>below</em> the security market line. This implies the stock appears overvalued for its level of systematic risk &mdash; it is not offering sufficient expected return to compensate for its beta, and CAPM would predict its price should fall (raising its expected return) until it is correctly priced on the line.",
          note: "Candidates commonly reverse this comparison &mdash; below the line means <em>lower</em> than required return, implying overvaluation (you're paying too much for too little expected compensation), not the reverse.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question: "Explain how a single-index model's decomposition of the stock's return variance differs from CAPM's central claim about which risk is rewarded.",
          answer:
            "The single-index model decomposes total return variance into systematic variance (from the common market factor) plus idiosyncratic variance &mdash; this is a purely statistical, descriptive decomposition. CAPM makes the stronger <em>economic</em> claim that only the systematic portion should be compensated with extra expected return, since idiosyncratic risk can be diversified away at no cost; the single-index model alone does not assert this economic conclusion, it merely describes the variance split.",
          note: "The key distinction is 'descriptive statistical decomposition' (single-index model) versus 'normative economic claim about pricing' (CAPM) &mdash; candidates who treat the two as interchangeable miss this important conceptual difference.",
        },
      ],
    },
    {
      id: "cm2-q5",
      title: "Brownian motion, Ito's Lemma and the log-normal model",
      modules: "Modules 7, 8, 9",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the defining properties of standard Brownian motion $W_t$, and explain why it is a martingale.",
          answer:
            "$W_0=0$; independent increments; $W_t-W_s\\sim N(0,t-s)$ for $t>s$; continuous paths. It is a martingale because, by independent increments, $E[W_t|\\mathcal{F}_s]=W_s+E[W_t-W_s|\\mathcal{F}_s]=W_s+0=W_s$, i.e. zero expected drift given current information.",
          note: "The martingale justification should reference independent increments explicitly, not just assert the zero-drift property without derivation.",
        },
        {
          label: "(ii)",
          command: "State",
          marks: 2,
          question: "State the key extra term Ito's Lemma includes compared with the ordinary calculus chain rule, and briefly explain why it is needed.",
          answer:
            "The extra term is $\\frac{1}{2}\\frac{\\partial^2 f}{\\partial x^2}\\sigma^2\\,dt$. It is needed because Brownian motion has non-zero quadratic variation (equal to $t$ over $[0,t]$), unlike a smooth, ordinarily differentiable function, so the second-order term that ordinary calculus discards as negligible does not vanish here.",
          note: "Candidates should connect the extra term specifically to quadratic variation, not just state 'Brownian motion is different' without the precise mathematical reason.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 5,
          question:
            "A stock price follows geometric Brownian motion with drift $\\mu=0.08$ and volatility $\\sigma=0.25$. Using the solved form of the GBM SDE, calculate the probability that the stock price after 1 year exceeds its initial value, i.e. $P(S_1>S_0)$.",
          answer:
            "$\\ln(S_1/S_0) \\sim N\\left((\\mu-\\tfrac12\\sigma^2)(1),\\ \\sigma^2(1)\\right) = N(0.04875,\\ 0.0625)$, so standard deviation $=0.25$. $P(S_1>S_0)=P(\\ln(S_1/S_0)>0)=P\\left(Z>\\dfrac{-0.04875}{0.25}\\right)=P(Z>-0.195)=\\Phi(0.195)=0.577$",
          note: "The full method (standardise, use symmetry of the normal distribution) should be shown &mdash; this connects Module 8's solved GBM formula directly to a normal-probability calculation, testing whether candidates can combine the two techniques.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question:
            "Comment on why this probability (57.7%) is greater than 50% despite the $-\\tfrac12\\sigma^2$ adjustment term reducing the drift in the exponent, and give one piece of empirical evidence that might make this log-normal model an imperfect description of real stock price behaviour.",
          answer:
            "The mean of $\\ln(S_1/S_0)$, though reduced by the $-\\tfrac12\\sigma^2$ adjustment (from 0.08 to 0.04875), remains positive, so the balance of probability still favours $S_1>S_0$ &mdash; the drift effect outweighs the variance adjustment here. Empirically, the log-normal model is imperfect because real returns often show fat tails (more extreme moves than normal predicts) and negative skewness (larger, more frequent downward moves), unlike the model's symmetric normal-distribution assumption for log returns.",
          note: "Both parts of the answer are needed for full marks: the numerical/algebraic explanation for why the probability still exceeds 50%, and a specific named empirical critique (fat tails and/or skewness) from Module 9.",
        },
      ],
    },
    {
      id: "cm2-q6",
      title: "Put-call parity, forward pricing and the Greeks",
      modules: "Modules 10, 11",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the no-arbitrage forward price formula for a non-dividend-paying asset, and put-call parity for European options.",
          answer: "$F_0 = S_0e^{rT}$. Put-call parity: $C-P = S_0-Ke^{-rT}$",
          note: "Both formulas are used directly in parts (ii) and (iii) &mdash; candidates should have them immediately available.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question: "A non-dividend-paying stock trades at &pound;80. The continuously-compounded risk-free rate is 5% per annum. Calculate the 6-month forward price.",
          answer: "$F_0 = 80\\,e^{0.05(0.5)} = 80\\,e^{0.025} = \\pounds82.03$",
          note: "A direct application of the forward price formula &mdash; candidates should use $T=0.5$ years, not 6 (months) directly.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "A 6-month European call option on this stock with strike &pound;75 trades at &pound;9.50. Using put-call parity, calculate the price of the corresponding European put.",
          answer: "$P = C-S_0+Ke^{-rT} = 9.50-80+75e^{-0.025} = 9.50-80+73.15 = \\pounds2.65$",
          note: "Candidates should discount $K$, not $S_0$, by $e^{-rT}$ &mdash; a common error is discounting the wrong term in the parity rearrangement.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 4,
          question:
            "A trader delta-hedges a short position of 2,000 of these call options, where the call's Delta is 0.65. State how many shares the trader must hold and in what direction, and explain why this hedge will need rebalancing if the stock price moves, referencing Gamma.",
          answer:
            "The trader must hold $0.65\\times2{,}000 = 1{,}300$ shares <em>long</em>, offsetting the negative Delta exposure created by being short the calls. This hedge will need rebalancing because Delta itself changes as the stock price moves (the rate of change of Delta is Gamma); once the stock price moves, the option's actual Delta will differ from 0.65, so 1,300 shares will no longer exactly offset the position, requiring the share holding to be adjusted (rebalanced) to match the new Delta.",
          note: "Both the direction (long shares to offset a short call position) and the Gamma-based rebalancing explanation are needed for full marks &mdash; stating only the share count without the rebalancing rationale is an incomplete answer.",
        },
      ],
    },
    {
      id: "cm2-q7",
      title: "Pricing a call option in a one-step binomial model",
      modules: "Module 12",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the formula for the risk-neutral up-probability $p$ in a one-step binomial model, and the no-arbitrage condition the up and down factors $u,d$ must satisfy.",
          answer: "$p=\\dfrac{e^{r\\Delta t}-d}{u-d}$, requiring $d\\lt e^{r\\Delta t}\\lt u$ for $p$ to lie strictly between 0 and 1.",
          note: "Both the formula and the no-arbitrage condition should be stated, since part (ii) requires checking the given $u,d,r$ satisfy this condition implicitly by producing a valid $p\\in(0,1)$.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "A stock priced at &pound;100 can move up by 15% or down by 10% over one year. The continuously-compounded risk-free rate is 4% per annum. Calculate the risk-neutral probability of an up-move.",
          answer: "$u=1.15$, $d=0.90$. $p = \\dfrac{e^{0.04}-0.90}{1.15-0.90} = \\dfrac{1.0408-0.90}{0.25} = \\dfrac{0.1408}{0.25} = 0.563$",
          note: "$e^{0.04}$ should be evaluated precisely (1.0408), not approximated as $1+0.04$, to avoid a small but avoidable error in the final answer.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "A European call option with strike &pound;100 matures in one year. Calculate its price using risk-neutral valuation.",
          answer:
            "$S_u=115$, $S_d=90$. Payoff$_u=\\max(115-100,0)=15$; Payoff$_d=\\max(90-100,0)=0$. Price $= e^{-0.04}[0.563(15)+0.437(0)] = e^{-0.04}(8.45) = 0.9608(8.45) = \\pounds8.12$",
          note: "The expected payoff must be discounted at the <em>risk-free</em> rate using the risk-neutral probabilities, not the real-world probabilities (which aren't given, and aren't needed).",
        },
        {
          label: "(iv)",
          command: "Calculate",
          marks: 3,
          question: "Calculate the option's Delta implied by this one-step tree, and explain how it would be used to construct a replicating portfolio for the option today.",
          answer:
            "$\\Delta = \\dfrac{\\text{Payoff}_u-\\text{Payoff}_d}{S_u-S_d} = \\dfrac{15-0}{115-90} = \\dfrac{15}{25} = 0.60$. The replicating portfolio holds 0.60 shares of the stock, partly financed by borrowing at the risk-free rate, structured so that its value exactly matches the option's payoff (15 or 0) in both the up and down states; today, this portfolio's cost should equal the option price of &pound;8.12 found in part (iii).",
          note: "Delta here is calculated directly from the tree's payoffs (a discrete slope), not via a formula requiring $N(d_1)$ &mdash; that Black-Scholes-specific version comes later in the syllabus.",
        },
      ],
    },
    {
      id: "cm2-q8",
      title: "The Black-Scholes formula and the 5-step method",
      modules: "Modules 13, 14",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the Black-Scholes formula for a European call option, and define $d_1$.",
          answer: "$C=S_0N(d_1)-Ke^{-rT}N(d_2)$, where $d_1=\\dfrac{\\ln(S_0/K)+(r+\\tfrac12\\sigma^2)T}{\\sigma\\sqrt{T}}$",
          note: "Candidates should also be ready to state $d_2=d_1-\\sigma\\sqrt{T}$, needed for part (ii).",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 5,
          question:
            "A non-dividend-paying stock trades at &pound;50. A European call has strike &pound;48, time to maturity 9 months, volatility 25% per annum, and the continuously-compounded risk-free rate is 3% per annum. Calculate the Black-Scholes price of the call.",
          answer:
            "$d_1 = \\dfrac{\\ln(50/48)+(0.03+0.03125)(0.75)}{0.25\\sqrt{0.75}} = \\dfrac{0.0408+0.0459}{0.2165} = 0.401$. $d_2 = 0.401-0.2165 = 0.184$. $N(d_1)=0.656$, $N(d_2)=0.573$. $C = 50(0.656) - 48e^{-0.03(0.75)}(0.573) = 32.80 - 46.93(0.573) = 32.80-26.90=\\pounds5.89$",
          note: "Marks are typically split across the correct calculation of $d_1$, $d_2$, looking up/calculating both normal CDF values, and the final substitution &mdash; showing each intermediate value earns partial credit even if the final figure has a small error.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 2,
          question: "Explain what $N(d_2)$ represents, and comment on whether this option is likely to finish in the money.",
          answer:
            "$N(d_2)$ is (approximately) the risk-neutral probability that the option finishes in the money. Since $N(d_2)=0.573>0.5$ here, the option is more likely than not to finish in the money under the risk-neutral measure, consistent with the stock price (&pound;50) already exceeding the strike (&pound;48) at the outset.",
          note: "The word 'approximately' or a similar qualifier is worth including, since $N(d_2)$ is the <em>exact</em> risk-neutral in-the-money probability, but it's easy to conflate with $N(d_1)$ (Delta) if not careful.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question:
            "Explain, in general terms (no calculation required), how the 5-step method's numeraire choice could simplify pricing an option to exchange one risky asset for another, compared with a standard Black-Scholes-style approach.",
          answer:
            "Priced directly in cash terms, an exchange option depends on <em>two</em> sources of randomness (the movements of both underlying assets). By choosing one of the two assets itself as the numeraire, that asset's own randomness is effectively absorbed into the reference unit, reducing the problem to depending on only the <em>relative</em> movement between the two assets &mdash; a simpler, one-dimensional problem that can then often be solved using Black-Scholes-style machinery under the new measure.",
          note: "This tests conceptual understanding of the numeraire's role, not a memorised exchange-option formula &mdash; a strong answer explains the dimensionality reduction specifically, not just 'it makes it easier' in vague terms.",
        },
      ],
    },
    {
      id: "cm2-q9",
      title: "Term structure models and credit risk",
      modules: "Modules 15, 16",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the SDE for the short rate under the Vasicek model, and identify its main limitation.",
          answer: "$dr_t=a(b-r_t)\\,dt+\\sigma\\,dW_t$. Its main limitation is that it allows the short rate to become negative with positive probability.",
          note: "Candidates should recognise this as an Ornstein-Uhlenbeck process (Module 8) with $r_t$ in place of the general $X_t$.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain how the Cox-Ingersoll-Ross (CIR) model addresses this limitation, and how the Hull-White model differs in its own approach to improving on Vasicek.",
          answer:
            "CIR replaces the constant diffusion term with $\\sigma\\sqrt{r_t}$, so volatility shrinks toward zero as $r_t$ approaches zero, keeping rates non-negative under suitable conditions. Hull-White instead keeps Vasicek's basic structure but allows the mean-reversion level (and potentially other parameters) to be time-dependent, so the model can be calibrated to exactly fit the current observed yield curve &mdash; a different kind of improvement, addressing yield-curve consistency rather than the negative-rate problem directly.",
          note: "Both models 'improve on' Vasicek in different ways &mdash; candidates should not conflate CIR's negative-rate fix with Hull-White's yield-curve-fitting fix, since they address different limitations.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 4,
          question:
            "A corporate bond's default risk is modelled using a two-state model with constant default intensity $\\lambda=0.02$ per annum. The exposure is &pound;1,000,000 and the recovery rate on default is 40%. Calculate the probability of default within 5 years, and the resulting expected loss over that period.",
          answer:
            "Survival probability to 5 years $=e^{-\\lambda t}=e^{-0.02(5)}=e^{-0.1}=0.9048$. Default probability $=1-0.9048=0.0952$. Expected loss $=0.0952\\times(1-0.40)\\times\\pounds1{,}000{,}000 = 0.0952\\times0.60\\times1{,}000{,}000=\\pounds57{,}098$",
          note: "Expected loss requires all three factors multiplied together: default probability, loss-given-default (1 minus recovery rate), and exposure &mdash; omitting the $(1-\\text{recovery rate})$ adjustment is a common error.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question: "Explain how the Merton (structural) model would instead assess this firm's default risk, and give one advantage this approach has over the intensity-based calculation in part (iii).",
          answer:
            "The Merton model treats the firm's equity as a European call option on the firm's total assets, with strike equal to the face value of its debt; default occurs if asset value falls below the debt's face value at maturity, letting Black-Scholes-style option pricing techniques estimate the default probability from the firm's asset value and volatility. Its advantage over the reduced-form calculation in part (iii) is that it provides an economic <em>explanation</em> for why default might occur (declining or volatile asset value relative to leverage), rather than simply assuming a constant statistical default intensity with no underlying economic story.",
          note: "The key contrast to draw out is 'explains why' (structural/Merton) versus 'describes how often, statistically' (reduced-form, as used in part (iii)) &mdash; both are valid, but for different purposes.",
        },
      ],
    },
    {
      id: "cm2-q10",
      title: "Ruin theory and a chain ladder reserve estimate",
      modules: "Modules 17, 18",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State Lundberg's inequality, defining each symbol used.",
          answer:
            "The probability of ultimate ruin $\\psi(u) \\leq e^{-Ru}$, where $u$ is the insurer's initial surplus and $R>0$ is the adjustment coefficient, determined by the premium loading and the claim size distribution.",
          note: "Candidates should note this is an upper <em>bound</em>, not an exact formula for the ruin probability.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question:
            "An insurer's claims are exponentially distributed with mean &pound;500, and premiums include a loading of 20% above the pure expected cost (i.e. $\\theta=0.20$). For exponential claims, the adjustment coefficient is $R=\\dfrac{\\theta\\beta}{1+\\theta}$, where $\\beta$ is the reciprocal of the mean claim size. Calculate $R$, and the Lundberg upper bound on the probability of ultimate ruin given an initial surplus of &pound;2,000.",
          answer:
            "$\\beta = 1/500 = 0.002$. $R = \\dfrac{0.20(0.002)}{1.20} = 0.000333$. Lundberg bound $= e^{-Ru} = e^{-0.000333(2{,}000)} = e^{-0.667} = 0.513$",
          note: "This shows the bound (51.3%) is not a tight or reassuring figure on its own &mdash; part (iii) explores what the insurer could do to improve it.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain two distinct ways the insurer could reduce this bound on the probability of ruin, referencing the formula used in part (ii).",
          answer:
            "(1) Increase initial surplus $u$: since the bound is $e^{-Ru}$, a larger $u$ directly and exponentially reduces the bound, without needing to change anything about the claims process itself. (2) Increase the premium loading $\\theta$ (e.g. by raising premiums) or purchase reinsurance to reduce claims variability: either raises the adjustment coefficient $R$, which also reduces the bound $e^{-Ru}$, though a higher $\\theta$ may reduce competitiveness and reinsurance carries its own cost.",
          note: "Both routes (increasing $u$ directly, or increasing $R$ via the premium loading/claims variability) should be identified as distinct levers, each with a real-world trade-off worth mentioning.",
        },
        {
          label: "(iv)",
          command: "Calculate",
          marks: 4,
          question:
            "A run-off triangle shows cumulative claims (&pound;'000s) as follows: Origin year 1: 100, 150, 165 (development years 1, 2, 3). Origin year 2: 120, 175 (development years 1, 2). Origin year 3: 130 (development year 1). Using the basic chain ladder method, calculate the total outstanding claims across origin years 2 and 3.",
          answer:
            "Development factor $f_{1\\to2} = \\dfrac{150+175}{100+120} = \\dfrac{325}{220} = 1.477$. Development factor $f_{2\\to3} = \\dfrac{165}{150} = 1.100$. Origin year 2 ultimate $= 175\\times1.100 = 192.50$; outstanding $=192.50-175=17.50$. Origin year 3 projected to dev. year 2 $=130\\times1.477=192.05$; ultimate $=192.05\\times1.100=211.25$; outstanding $=211.25-130=81.25$. Total outstanding $=17.50+81.25=\\pounds98.75$ ('000s), i.e. &pound;98,750.",
          note: "Origin year 3 needs <em>two</em> development factors applied in sequence (dev. year 1 to 2, then 2 to 3) since it only has one data point so far, while origin year 2 only needs one (dev. year 2 to 3) &mdash; applying the wrong number of factors to each origin year is the most common error in this style of question.",
        },
      ],
    },
  ],
});

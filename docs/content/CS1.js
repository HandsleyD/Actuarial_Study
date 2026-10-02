// CS1 Actuarial Statistics: flashcards and practice questions.
//
// Hand-edited. docs/content/README.md describes the format and its rules,
// above all that cards are append-only: a card's identity is its position.
// After editing, run: node scripts/build-catalog.mjs
registerContent("CS1", {
  modules: [
    {
        "id": "m01",
        "title": "Data analysis",
        "description": "Covers the purpose of data analysis (descriptive, inferential, predictive), sources and characteristics of data, reproducible research, exploratory data analysis, and correlation/PCA techniques.",
        "cards": [
            {
                "q": "What are the three main aims of a data analysis?",
                "a": "Descriptive (summarising data), inferential (drawing conclusions about a population), and predictive (forecasting future/unseen outcomes).",
                "explain": "This three-way split is a useful lens for the whole of CS1: Modules 2-6 build the probability toolkit, Modules 7-11 are squarely inferential (estimation, testing), and Modules 12-16 (regression, GLMs, credibility) lean predictive — recognising which aim a technique serves helps place it within the syllabus."
            },
            {
                "q": "What is 'reproducible research'?",
                "a": "Research where the analysis can be independently repeated and verified by others, given the same data and code/methods.",
                "explain": "This matters professionally, not just academically — an actuarial reserving or pricing analysis often needs to be defensible and repeatable years later (e.g. under audit or regulatory review), so reproducibility is a working requirement, not an abstract ideal."
            },
            {
                "q": "Name one element required to ensure a data analysis is reproducible.",
                "a": "Documented, shareable code/scripts, and access to the same data and software versions.",
                "explain": "Worth noting all three pieces matter together — sharing code without the exact data (or vice versa) still leaves a result that can't be verified, and even the same code/data can behave differently across software versions with different default settings or bug fixes."
            },
            {
                "q": "What does 'Pearson's correlation coefficient' measure?",
                "a": "The strength and direction of the linear relationship between two variables.",
                "explain": "This is introduced here as a data-exploration tool but gets a full module to itself later (Module 11), including formal inference on it — for now, the key limitation to remember is 'linear' specifically, which sets up the contrast with Spearman's and Kendall's below."
            },
            {
                "q": "What does 'Spearman's rank correlation' measure, and how does it differ from Pearson's?",
                "a": "The strength of a monotonic (not necessarily linear) relationship, calculated using the ranks of the data rather than raw values.",
                "explain": "'Monotonic' is the key upgrade over Pearson's 'linear' — a relationship that consistently increases but curves (rather than forming a straight line) can score highly on Spearman's while understating on Pearson's, since converting to ranks strips away the specific shape and just asks 'does higher X consistently mean higher Y'."
            },
            {
                "q": "What does 'Kendall's tau' measure?",
                "a": "The association between two variables based on the number of concordant versus discordant pairs of observations.",
                "explain": "This is a third, differently-constructed way of capturing the same broad idea as Spearman's (monotonic association) — worth knowing it's built directly from pairwise comparisons rather than ranks, which is why it can behave differently from Spearman's on the same data even though both are non-parametric alternatives to Pearson's."
            },
            {
                "q": "Why might Spearman's or Kendall's correlation be preferred over Pearson's for some data sets?",
                "a": "They don't assume a linear relationship and are less sensitive to outliers, since they use ranks rather than raw values.",
                "explain": "The outlier-robustness point is worth understanding mechanically: a single extreme value can only ever become the highest or lowest <em>rank</em> (a bounded effect), whereas in Pearson's raw-value calculation an extreme value can dominate the covariance term arbitrarily, giving it outsized influence."
            },
            {
                "q": "What is 'principal components analysis' (PCA) used for?",
                "a": "Reducing the dimensionality of a complex data set by finding a smaller number of uncorrelated components that capture most of the variation.",
                "explain": "PCA is worth connecting to Module 4's covariance concept — it works by analysing the covariance structure between variables and finding new axes (linear combinations of the originals) along which the data varies the most, which is exactly what lets it compress many correlated variables into fewer, uncorrelated ones."
            },
            {
                "q": "What are 'extremely large data sets' likely to present as a data source challenge?",
                "a": "Issues of storage, processing power, and potentially messier/less structured data requiring more preprocessing.",
                "explain": "This is a practical, professional concern rather than a purely statistical one — modern actuarial work increasingly involves large claims/policy datasets, and CS1 flags these operational challenges early since they affect every technique covered later in the syllabus, not just this module."
            },
            {
                "q": "Give one example of an appropriate data visualisation for exploring a single continuous variable.",
                "a": "A histogram or box plot.",
                "explain": "Worth having a mental map of visualisation-to-variable-type: histograms/box plots for one continuous variable, bar charts for one categorical variable, and scatter plots for two continuous variables (previewing the correlation/regression modules) — matching the right plot to the data type is itself an examinable skill."
            },
            {
                "q": "What summary statistics might you calculate as part of exploratory data analysis?",
                "a": "Measures of central tendency (mean, median) and spread (variance, standard deviation, interquartile range).",
                "explain": "Note the pairing: every measure of <em>centre</em> (mean, median) is naturally paired with a measure of <em>spread</em> (variance/sd, IQR) — reporting one without the other gives an incomplete picture, since two datasets can share the same mean while having very different variability."
            },
            {
                "q": "Why is exploratory data analysis typically performed before formal statistical modelling?",
                "a": "To understand the data's structure, spot anomalies/outliers, and inform appropriate modelling choices.",
                "explain": "This is the module's central justification for existing before the more formal inference modules (7 onward) — fitting a sophisticated model to data you haven't first looked at risks building elaborate conclusions on top of an undetected data problem (miscoded values, a skewed distribution the model doesn't suit, etc.)."
            },
            {
                "q": "What might cause you to question the reliability of a data source?",
                "a": "Inconsistent recording methods, missing data, known biases in collection, or an unclear/undocumented provenance.",
                "explain": "Worth treating this as a checklist to run through before trusting any dataset — 'undocumented provenance' in particular connects directly back to the reproducibility card at the top of this module, since data you can't trace back to its source can't be independently verified either."
            },
            {
                "q": "How can principal components analysis help before fitting a predictive model?",
                "a": "By reducing many correlated explanatory variables to a smaller set of uncorrelated components, simplifying the model and reducing overfitting risk.",
                "explain": "This previews the multicollinearity problem flagged later in Module 12's regression content — PCA is one standard fix for having too many correlated predictors, since it replaces them with a smaller set of independent (uncorrelated) components before the predictive model is even fitted."
            },
            {
                "q": "What is the difference between descriptive and inferential data analysis aims?",
                "a": "Descriptive analysis summarises the data itself; inferential analysis uses the data to draw conclusions about a broader population.",
                "explain": "This closes the module by returning to its opening three-way split — descriptive analysis stays entirely within the sample you have; inferential analysis (the subject of Modules 7-10) makes a claim about something <em>beyond</em> the sample, which is a fundamentally bigger and more assumption-laden step."
            }
        ]
    },
    {
        "id": "m02",
        "title": "Probability distributions",
        "description": "Covers the standard discrete and continuous probability distributions used in actuarial work, their properties, and how to generate random samples from them.",
        "cards": [
            {
                "q": "What is the probability function of a Binomial($n,p$) distribution?",
                "a": "$P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$ for $k=0,1,\\dots,n$",
                "explain": "This module is a reference catalogue of distributions used throughout CS1 and beyond — the binomial is the natural starting point since it's built from the simplest possible random process (n independent yes/no trials), and every other discrete distribution here is a variation or limiting case of this same idea."
            },
            {
                "q": "What is the mean and variance of a Poisson($\\lambda$) distribution?",
                "a": "Mean $=\\lambda$, variance $=\\lambda$",
                "explain": "The mean exactly equalling the variance is the Poisson's defining fingerprint — it's why real claim-count data with variance noticeably larger than its mean ('overdispersion') is a signal that a plain Poisson model doesn't fit well, motivating the negative binomial alternative in the next couple of cards."
            },
            {
                "q": "What is the relationship between the Poisson process and the Poisson distribution?",
                "a": "The number of events of a Poisson process in a fixed time interval follows a Poisson distribution with mean equal to the rate times the interval length.",
                "explain": "This connects a <em>continuous-time</em> process (events happening at random moments) to a <em>discrete</em> distribution (a count) — it's the standard actuarial model for claim arrivals, and this exact relationship is what justifies using a Poisson distribution to model 'how many claims in a year' given an assumed claims rate."
            },
            {
                "q": "What is a 'negative binomial' distribution typically used to model?",
                "a": "The number of failures before a fixed number of successes in a sequence of independent trials (or an over-dispersed alternative to the Poisson).",
                "explain": "The 'or' here signals two different uses worth keeping separate — the classical failures-before-successes interpretation, and its very common actuarial role as a Poisson replacement whenever real claims data shows more variance than a Poisson (mean=variance) can accommodate."
            },
            {
                "q": "What is the key difference between the binomial and hypergeometric distributions?",
                "a": "The binomial assumes sampling with replacement; the hypergeometric assumes sampling without replacement from a finite population.",
                "explain": "This distinction matters for whether trials stay independent — with replacement, each draw is identical and independent (binomial); without replacement, each draw changes the remaining population slightly, making trials dependent (hypergeometric), though the two converge when the population is very large relative to the sample."
            },
            {
                "q": "What distribution results from summing the squares of $k$ independent standard normal random variables?",
                "a": "The chi-square distribution with $k$ degrees of freedom.",
                "explain": "This construction is worth remembering directly, since it's exactly what shows up later in Module 7's sampling-distribution results (e.g. $(n-1)S^2/\\sigma^2$ being chi-square) and in Module 10's chi-square tests — the chi-square distribution isn't an arbitrary addition to the syllabus, it emerges naturally from squared normal variables."
            },
            {
                "q": "What is the relationship between the normal and log-normal distributions?",
                "a": "If $X$ is normally distributed, then $Y = e^X$ is log-normally distributed.",
                "explain": "This is a useful modelling trick worth internalising: whenever a positive-only quantity (like an asset price or a claim amount) is naturally modelled as growing multiplicatively rather than additively, taking logs turns it back into something normally distributed, letting you reuse the whole normal-distribution toolkit."
            },
            {
                "q": "What is the 'inverse transform method' used for?",
                "a": "Generating a random sample from a distribution by applying the inverse of its CDF to a uniform(0,1) random variable.",
                "explain": "The logic: a CDF maps any value to a probability between 0 and 1; running that map <em>backwards</em> from a random uniform(0,1) number recovers a value distributed exactly according to the original CDF — this is the standard general-purpose recipe for simulating from almost any distribution whose inverse CDF can be found or approximated."
            },
            {
                "q": "What is the $t$-distribution typically used for?",
                "a": "Inference about a normal population's mean when the population variance is unknown and estimated from the sample.",
                "explain": "This is only a preview here — the full justification (why estimating variance from the same sample requires a heavier-tailed distribution than normal) is developed properly in Module 7, but it's worth flagging now as one of the 'inference-focused' distributions this module introduces alongside the more general-purpose ones."
            },
            {
                "q": "What is the $F$-distribution typically used for?",
                "a": "Comparing the ratio of two sample variances from independent normal samples.",
                "explain": "Like the $t$-distribution, this gets its full treatment in Module 7 — worth noting now that it's built from a <em>ratio</em> of two chi-square distributions (each themselves built from squared normals, per the earlier card), which is why comparing two variances naturally leads to an F-distributed test statistic."
            },
            {
                "q": "Why is the exponential distribution described as 'memoryless'?",
                "a": "The probability of waiting an additional time $t$ given no event has occurred yet is the same as waiting $t$ from the start.",
                "explain": "This is a distinctive, almost counterintuitive property — worth testing your understanding with a concrete example: if claims arrive with exponentially-distributed waiting times, having already waited 5 years with no claim gives you NO extra information about how much longer you'll wait, which is a strong (and not always realistic) modelling assumption worth being aware of."
            },
            {
                "q": "How would you generate a sample from an exponential distribution using the inverse transform method?",
                "a": "$x = -\\frac{1}{\\lambda}\\ln(1-u)$, setting $u$ equal to the CDF and solving for $x$.",
                "explain": "This is a direct worked application of the inverse transform method described earlier in this module — the exponential's CDF, $F(x)=1-e^{-\\lambda x}$, is one of the few with a clean, easily-invertible closed form, which is exactly why it's the standard textbook example for teaching the technique."
            },
            {
                "q": "What is the beta distribution commonly used to model?",
                "a": "A random variable restricted to the interval $[0,1]$, such as a probability or proportion.",
                "explain": "This bounded-support property is what makes the beta distribution the natural conjugate prior for a binomial probability in Bayesian statistics (Module 14) — since a probability itself must lie in $[0,1]$, a distribution that's <em>also</em> naturally confined to that interval is the obvious choice for representing uncertainty about it."
            },
            {
                "q": "What is the gamma distribution, and what is one common actuarial use?",
                "a": "A flexible continuous distribution for positive values, often used to model claim sizes or waiting times; generalises the exponential and chi-square.",
                "explain": "'Generalises' is the key word — both the exponential (a special case with one shape parameter fixed) and the chi-square (another special case) are gamma distributions in disguise, which is why the gamma is worth thinking of as a flexible family rather than yet another unrelated distribution to memorise separately."
            },
            {
                "q": "How would statistical software typically be used to generate samples from these distributions?",
                "a": "Using built-in random number generator functions for each distribution, implementing efficient/exact sampling algorithms internally.",
                "explain": "This closes the module with a practical note: while the inverse transform method (covered above) is the general <em>principle</em>, real software often uses more specialised, computationally efficient algorithms for common distributions — worth knowing the underlying principle exists even though you'd rarely hand-code it in practice."
            }
        ]
    },
    {
        "id": "m03",
        "title": "Generating functions",
        "description": "Introduces moment generating functions and cumulant generating functions, and how to use them to derive moments of a distribution.",
        "cards": [
            {
                "q": "What is the moment generating function (MGF) of a random variable $X$?",
                "a": "$M_X(t) = E[e^{tX}]$",
                "explain": "Think of the MGF as a single function that packages up <em>every</em> moment of a distribution ($E[X]$, $E[X^2]$, $E[X^3]$, ...) at once — the payoff for this slightly abstract-looking definition comes in the next few cards, where differentiating it becomes a mechanical way to extract any moment you want."
            },
            {
                "q": "How do you find the mean of $X$ from its MGF?",
                "a": "$E[X] = M_X'(0)$, the first derivative of the MGF evaluated at $t=0$.",
                "explain": "This works because differentiating $E[e^{tX}]$ with respect to $t$ (and swapping the order of differentiation and expectation) brings down a factor of $X$ each time, so the first derivative evaluated at $t=0$ isolates exactly $E[X]$ — this is the mechanical trick that makes the whole MGF approach useful."
            },
            {
                "q": "How do you find $E[X^2]$ from the MGF?",
                "a": "$E[X^2] = M_X''(0)$, the second derivative of the MGF evaluated at $t=0$.",
                "explain": "Same trick as the mean, one more derivative deep — each additional derivative brings down another factor of $X$, so the $n$-th derivative at $t=0$ gives $E[X^n]$ in general, which is exactly the pattern the series-expansion card later in this module makes fully explicit."
            },
            {
                "q": "What is the cumulant generating function (CGF)?",
                "a": "$K_X(t) = \\ln M_X(t)$, the natural log of the moment generating function.",
                "explain": "Taking a log might look like an arbitrary extra step, but it has a useful payoff: it converts the MGF's <em>product</em> property for independent sums (below) into a <em>sum</em> property, which is generally easier to work with, and its derivatives give variance directly rather than needing a separate mean-squared correction."
            },
            {
                "q": "How is the variance of $X$ obtained from the CGF?",
                "a": "$\\text{Var}(X) = K_X''(0)$, the second derivative of the CGF evaluated at $t=0$.",
                "explain": "This is the CGF's headline advantage over the MGF: getting variance from the MGF needs <em>two</em> derivatives plus a subtraction ($M_X''(0)-[M_X'(0)]^2$), while the CGF gets there in one step — the log transform has effectively pre-done that subtraction for you."
            },
            {
                "q": "What is a key property of MGFs for sums of independent random variables?",
                "a": "The MGF of a sum of independent random variables equals the product of their individual MGFs.",
                "explain": "This follows directly from independence: $E[e^{t(X+Y)}]=E[e^{tX}e^{tY}]=E[e^{tX}]E[e^{tY}]$ (the last step using independence to split the expectation of a product) — this single property is what makes MGFs such a powerful tool for combining independent risks, as the Poisson-sum card below demonstrates."
            },
            {
                "q": "What is the corresponding property of CGFs for sums of independent random variables?",
                "a": "The CGF of a sum of independent random variables equals the sum of their individual CGFs.",
                "explain": "This is just the MGF's product property from the card above, translated through the CGF's log transform ($\\ln$ of a product is a sum of logs) — it's precisely why the CGF is often more convenient for problems involving sums of several independent risks."
            },
            {
                "q": "What is the MGF of a Poisson($\\lambda$) distribution?",
                "a": "$M_X(t) = \\exp[\\lambda(e^t-1)]$",
                "explain": "Worth having this exact form memorised, since it's used directly in the 'sum of independent Poissons' card below — note it's already in the form $\\exp[\\text{something}]$, so its CGF (the log of this) is simply $\\lambda(e^t-1)$, a clean linear-in-$\\lambda$ expression."
            },
            {
                "q": "How can generating functions help identify a distribution?",
                "a": "If two random variables have the same MGF (where it exists), they have the same distribution.",
                "explain": "This 'uniqueness' property is what makes the Poisson-sum trick below work as a genuine <em>proof</em>, not just a plausibility argument — showing a sum's MGF matches a known Poisson MGF is enough to conclude the sum IS Poisson-distributed, without needing to derive its distribution any other way."
            },
            {
                "q": "How would you find moments of a distribution using a series expansion of the MGF?",
                "a": "Expand $M_X(t)$ as a power series in $t$; the coefficient of $\\frac{t^n}{n!}$ gives $E[X^n]$.",
                "explain": "This generalises the derivative-based cards earlier in this module into a single unified statement — $M_X(t)=\\sum_{n=0}^\\infty E[X^n]\\frac{t^n}{n!}$, so reading off the coefficient of each power of $t$ hands you every moment at once, without differentiating term by term."
            },
            {
                "q": "Why might the CGF be more convenient than the MGF for finding variance?",
                "a": "Its second derivative directly gives the variance, without separately computing and combining the first and second moments.",
                "explain": "Restates the module's earlier variance card as a general design principle — the CGF was specifically constructed (via the log transform) so that its low-order derivatives give <em>cumulants</em> directly (mean, then variance, then a skewness-related quantity), each already 'centred', unlike the MGF's raw moments which need extra combination."
            },
            {
                "q": "What does it mean if a distribution's MGF doesn't exist for any $t\\neq 0$?",
                "a": "The distribution's moments may not all be finite (e.g. heavy-tailed distributions), so the MGF approach can't be used.",
                "explain": "This is a genuine limitation worth knowing, not just a technicality — some real-world claim-severity distributions have such heavy tails that even the mean can be infinite (let alone higher moments), and for those, generating-function techniques simply aren't available; other tools (e.g. direct integration, or working with the characteristic function instead) are needed."
            },
            {
                "q": "How can generating functions derive the distribution of a sum of independent Poisson random variables?",
                "a": "Multiply their MGFs (or add their CGFs); the result matches a Poisson MGF/CGF with the summed rate.",
                "explain": "A concrete worked instance of the whole module's machinery: multiplying $\\exp[\\lambda_1(e^t-1)]\\times\\exp[\\lambda_2(e^t-1)]=\\exp[(\\lambda_1+\\lambda_2)(e^t-1)]$ — recognisable as the MGF of a Poisson($\\lambda_1+\\lambda_2$) — which by the uniqueness property above proves the sum of independent Poissons is itself Poisson."
            },
            {
                "q": "What is the third derivative of the CGF at zero related to?",
                "a": "The third central moment (related to skewness) of the distribution.",
                "explain": "This continues the pattern established by the mean (first derivative) and variance (second derivative) cards — cumulants keep going: the third cumulant relates to skewness, the fourth to kurtosis, giving a systematic way to characterise a distribution's shape well beyond just its centre and spread."
            },
            {
                "q": "Why are generating functions particularly useful in actuarial applications like aggregate claims modelling?",
                "a": "They provide a convenient way to combine distributions and extract moments without complex direct integration/summation.",
                "explain": "This closes the module with its central practical payoff — aggregate claims (total claims from many individual policies) are naturally a <em>sum</em> of many random variables, and the product/sum properties for independent MGFs/CGFs turn what would otherwise be a hard convolution problem into straightforward algebra."
            }
        ]
    },
    {
        "id": "m04",
        "title": "Joint distributions",
        "description": "Covers the properties of jointly distributed random variables — marginal and conditional distributions, independence, covariance and correlation, and combining random variables.",
        "cards": [
            {
                "q": "What is a 'marginal distribution'?",
                "a": "The probability distribution of one variable from a joint distribution, obtained by summing/integrating out the other variable(s).",
                "explain": "This module moves from single-variable distributions (Module 2) to describing how <em>two</em> variables behave together — the marginal distribution is what you get if you 'ignore' the other variable entirely, recovering the single-variable view as a special case buried inside the fuller joint picture."
            },
            {
                "q": "What is a 'conditional distribution'?",
                "a": "The probability distribution of one variable given a specific (fixed) value of another variable.",
                "explain": "This is the direct bridge into Module 5's whole topic — conditional distributions here are a snapshot at one fixed value of the conditioning variable, while Module 5's conditional expectation treats the conditioning variable as still random, building a function of it rather than a single number."
            },
            {
                "q": "What condition must hold for two random variables $X$ and $Y$ to be independent?",
                "a": "$f_{X,Y}(x,y) = f_X(x)f_Y(y)$ for all $x,y$ — the joint function factorises as the product of marginals.",
                "explain": "This factorisation condition is the formal, precise version of the everyday idea 'knowing X tells you nothing about Y' — it must hold for <em>every</em> pair of values $(x,y)$, not just on average, which is a stronger requirement than the zero-covariance condition covered later in this module."
            },
            {
                "q": "How is the covariance of two random variables defined?",
                "a": "$\\text{Cov}(X,Y) = E[XY] - E[X]E[Y]$",
                "explain": "This formula is worth deriving intuitively: it measures whether $X$ and $Y$ tend to be simultaneously above (or simultaneously below) their own means — if they do, $E[XY]$ tends to exceed $E[X]E[Y]$, giving positive covariance; if one tends to be above its mean when the other is below, covariance is negative."
            },
            {
                "q": "How is the correlation coefficient related to covariance?",
                "a": "$\\rho = \\frac{\\text{Cov}(X,Y)}{\\sqrt{\\text{Var}(X)\\text{Var}(Y)}}$, a standardised (unit-free) version of covariance.",
                "explain": "Dividing by the standard deviations rescales covariance into a fixed range (between $-1$ and $+1$, per Module 11), which is what makes correlation comparable <em>across</em> different pairs of variables measured in different units — raw covariance alone can't be compared this way, since its size depends on the variables' own scales."
            },
            {
                "q": "If $X$ and $Y$ are independent, what is $\\text{Cov}(X,Y)$?",
                "a": "Zero.",
                "explain": "This follows directly from the independence factorisation above: independence gives $E[XY]=E[X]E[Y]$ (a standard result for independent variables), which makes the covariance formula's two terms cancel exactly to zero."
            },
            {
                "q": "Does zero covariance imply independence?",
                "a": "No — zero covariance means no linear relationship, but there could still be non-linear dependence.",
                "explain": "This is one of the most important 'gotchas' in the whole syllabus, worth being able to state confidently: independence is a <em>stronger</em> condition than zero covariance — independence implies zero covariance (previous card), but the reverse implication fails, exactly as the worked counterexample later in this module demonstrates."
            },
            {
                "q": "What is the formula for the variance of a linear combination $aX+bY$?",
                "a": "$\\text{Var}(aX+bY) = a^2\\text{Var}(X) + b^2\\text{Var}(Y) + 2ab\\,\\text{Cov}(X,Y)$",
                "explain": "This is one of the single most-used formulas in the whole CS1/CS2 syllabus — it's worth being able to derive it (expand $\\text{Var}(aX+bY)=E[(aX+bY)^2]-(E[aX+bY])^2$ and simplify) rather than just memorising it, since variants of it reappear constantly in portfolio/aggregate-risk calculations."
            },
            {
                "q": "How does the formula for $\\text{Var}(aX+bY)$ simplify if $X$ and $Y$ are independent?",
                "a": "The covariance term drops out: $\\text{Var}(aX+bY) = a^2\\text{Var}(X) + b^2\\text{Var}(Y)$",
                "explain": "This is the special case examiners test most often, since it directly justifies 'variance of a sum of independent risks equals the sum of their variances' (with $a=b=1$) — an assumption that underlies a huge amount of aggregate-risk and portfolio-diversification reasoning throughout actuarial work."
            },
            {
                "q": "How would you find the marginal distribution of $X$ from a joint discrete distribution?",
                "a": "Sum the joint probabilities over all values of $Y$, for each value of $X$.",
                "explain": "This is the discrete-case mechanics behind the marginal-distribution definition at the top of this module — for continuous joint distributions the same idea applies with an integral instead of a sum, integrating the joint density over all values of $Y$ at each fixed $x$."
            },
            {
                "q": "How would you find the conditional probability function of $Y$ given $X=x$?",
                "a": "$f_{Y|X}(y|x) = \\frac{f_{X,Y}(x,y)}{f_X(x)}$",
                "explain": "This is the everyday conditional-probability formula $P(A|B)=P(A\\cap B)/P(B)$ translated into distribution notation — the marginal $f_X(x)$ in the denominator is exactly what the earlier marginal-distribution card teaches you to compute, so these two cards feed directly into each other."
            },
            {
                "q": "What is $E[XY]$ used for in calculating covariance?",
                "a": "It's the expected value of the product of the two random variables, needed alongside the means to compute covariance.",
                "explain": "Calculating $E[XY]$ itself requires the joint distribution (summing/integrating $xy$ weighted by the joint probability/density) — this is precisely why covariance is a <em>joint</em>-distribution quantity, not something derivable from the two marginal distributions alone."
            },
            {
                "q": "Give an example of two random variables that are dependent but have zero correlation.",
                "a": "$X$ uniform on $[-1,1]$ and $Y=X^2$ — dependent, but correlation is zero due to the symmetric, non-linear relationship.",
                "explain": "This is the concrete worked counterexample for the 'zero covariance doesn't imply independence' card above — $Y$ is completely <em>determined</em> by $X$ (about as dependent as two variables can be), yet the symmetric U-shaped relationship means positive and negative values of $X$ contribute cancelling terms to the covariance, driving it to exactly zero."
            },
            {
                "q": "How is the expected value of a function of two jointly distributed random variables calculated?",
                "a": "By summing/integrating the function's value at each point, weighted by the joint probability/density.",
                "explain": "This is the general 'law of the unconscious statistician' extended to two variables — it's the same principle used to derive $E[XY]$ above, just stated for an arbitrary function $g(X,Y)$ rather than specifically the product function, making it the general template every joint-distribution expectation calculation follows."
            },
            {
                "q": "Why is understanding joint distributions important for actuarial applications like reinsurance or portfolio risk?",
                "a": "Many real quantities depend on the joint behaviour of several random variables, not just their individual behaviour.",
                "explain": "This closes the module with its practical justification — a reinsurer's total exposure across several policies, or a portfolio's overall risk, depends critically on whether the underlying risks move together (positive covariance, compounding risk) or independently/oppositely (diversification benefit), which is exactly what this module's tools are built to quantify."
            }
        ]
    },
    {
        "id": "m05",
        "title": "Conditional expectation",
        "description": "Covers conditional expectation of one random variable given another, and how to use the 'tower property' to find unconditional means and variances via conditioning.",
        "cards": [
            {
                "q": "What is $E[Y|X=x]$?",
                "a": "The expected value of $Y$, calculated using the conditional distribution of $Y$ given that $X$ takes the specific value $x$.",
                "explain": "This is Module 4's conditional distribution taken one step further — instead of describing the whole shape of $Y$ given $X=x$, this collapses it down to a single summary number (its mean), giving you one value of $E[Y|X=x]$ for each possible value of $x$."
            },
            {
                "q": "What is the 'tower property' (law of total expectation)?",
                "a": "$E[Y] = E[E[Y|X]]$ — the overall mean equals the expectation, over $X$, of the conditional mean of $Y$ given $X$.",
                "explain": "This is arguably the single most useful identity introduced in this whole module — read the inner $E[Y|X]$ as 'the conditional mean, viewed as a function of the random $X$' (see the dedicated card on this below), then the outer $E[\\cdot]$ averages that function over $X$'s own distribution, recovering the plain unconditional mean of $Y$."
            },
            {
                "q": "What is the 'law of total variance' (conditional variance formula)?",
                "a": "$\\text{Var}(Y) = E[\\text{Var}(Y|X)] + \\text{Var}(E[Y|X])$",
                "explain": "This is the variance-level counterpart to the tower property above, and it's the single most important formula for credibility theory later in the syllabus (Modules 15-16) — the two cards immediately below unpack exactly what each of its two terms means."
            },
            {
                "q": "What does the first term, $E[\\text{Var}(Y|X)]$, in the law of total variance represent?",
                "a": "The average 'within-group' variance — variability in $Y$ remaining after accounting for $X$.",
                "explain": "Picture $X$ as identifying which 'group' or 'risk' you're looking at — this term averages the leftover randomness <em>within</em> each group (e.g. how much an individual policyholder's claims vary year to year, even once you know exactly which policyholder they are)."
            },
            {
                "q": "What does the second term, $\\text{Var}(E[Y|X])$, in the law of total variance represent?",
                "a": "The 'between-group' variance — variability in the conditional means as $X$ varies.",
                "explain": "This term instead measures how much the <em>group averages</em> themselves differ from each other (e.g. how much different policyholders' typical claim levels vary from one policyholder to the next) — together with the within-group term above, these two pieces are exactly what credibility theory weighs against each other."
            },
            {
                "q": "Why is the law of total variance useful in actuarial applications like credibility theory?",
                "a": "It decomposes total variability into within-risk and between-risk components, central to how credibility weights are derived.",
                "explain": "This is the direct link forward to Modules 15-16 — the credibility factor $Z$ is built from exactly the ratio of these two variance components: high between-risk variance (relative to within-risk) means individual experience is highly informative, pushing $Z$ toward 1, and vice versa."
            },
            {
                "q": "If $Y$ and $X$ are independent, what does $E[Y|X=x]$ equal?",
                "a": "$E[Y]$ — the conditional mean doesn't depend on $x$.",
                "explain": "This makes intuitive sense given Module 4's independence definition — if knowing $X$'s value tells you nothing about $Y$'s distribution at all, then the conditional mean must be the <em>same</em> number regardless of which value $x$ you condition on, i.e. it collapses back to the plain unconditional mean."
            },
            {
                "q": "How would you use conditioning to find the unconditional mean of a compound distribution?",
                "a": "Condition on the number of claims $N$, find the expected total given $N$, then take the expectation over $N$ using the tower property.",
                "explain": "This is the standard actuarial technique for aggregate claims: total claims $S = X_1+\\dots+X_N$ is hard to analyse directly since even the <em>number</em> of terms is random — conditioning on $N$ first (giving $E[S|N]=N\\cdot E[X]$ for i.i.d. claim sizes) turns it into a manageable two-step calculation via the tower property."
            },
            {
                "q": "What is $E[Y|X]$ as a random variable (rather than $E[Y|X=x]$ as a number)?",
                "a": "A function of the random variable $X$ itself — its value depends on the (random) outcome of $X$.",
                "explain": "This distinction is subtle and worth sitting with: $E[Y|X=x]$ is a <em>number</em> once $x$ is fixed, but $E[Y|X]$ (no equals sign, no fixed value) is a <em>random variable</em> — it takes whatever value $E[Y|X=x]$ would be, for whichever $x$ actually gets realised, which is exactly why it can itself have an expectation and variance, as the tower property and law of total variance use."
            },
            {
                "q": "Give an example of a practical actuarial scenario where conditional expectation would naturally be used.",
                "a": "Finding the expected total claim amount for a risk, conditioning on an unknown/random underlying claim frequency or severity parameter.",
                "explain": "This is exactly the Bayesian credibility setup from Module 14 previewed here — the 'true' claim frequency or severity parameter for a given risk is itself treated as uncertain (random), and conditional expectation is the tool for combining that parameter uncertainty with the claims process it governs."
            },
            {
                "q": "How does the tower property help simplify calculating $E[XY]$?",
                "a": "You can write $E[XY] = E[X \\cdot E[Y|X]]$, replacing $Y$ with its conditional mean given $X$.",
                "explain": "This is a useful computational shortcut: since $X$ is already known/fixed once you're conditioning on it, it can be pulled outside the inner conditional expectation ($E[XY|X]=X\\cdot E[Y|X]$), then the tower property finishes the job by averaging over $X$ — often much easier than working with the full joint distribution directly."
            },
            {
                "q": "Why might conditioning on a variable simplify an otherwise complex expectation calculation?",
                "a": "Breaking a calculation into simpler conditional pieces can be much easier than working with the full joint distribution directly.",
                "explain": "This is the general design philosophy behind every technique in this module — rather than tackling a hard joint-distribution problem head-on, 'condition first, then average' repeatedly turns two-variable problems into a sequence of one-variable problems, each individually more tractable."
            },
            {
                "q": "What is meant by 'iterated expectation'?",
                "a": "Another name for the tower property — taking an expectation of a conditional expectation gives back the overall (unconditional) expectation.",
                "explain": "Just a naming note worth having ready — 'tower property', 'law of total expectation' and 'iterated expectation' all refer to the exact same identity ($E[Y]=E[E[Y|X]]$), so don't be thrown if a question uses a different one of these three names."
            },
            {
                "q": "How would you verify the law of total variance using a simple two-group example?",
                "a": "Calculate the overall variance directly, then separately the within-group and between-group variance of the group means, and check they sum correctly.",
                "explain": "This is a good self-check exercise: pick two small groups with different means and variances, compute the pooled overall variance by brute force, then compute it again via the two-term decomposition — confirming they match builds real confidence in the formula beyond just memorising it."
            },
            {
                "q": "Why is conditional expectation described as itself a random variable when written as $E[Y|X]$?",
                "a": "Because its value changes depending on the (random) value that $X$ takes, so it inherits randomness from $X$.",
                "explain": "This closes the module by restating its most conceptually tricky point one more time — internalising that $E[Y|X]$ is random (not a fixed number) is the single biggest conceptual hurdle in this module, and it's exactly what makes expressions like $\\text{Var}(E[Y|X])$ in the law of total variance meaningful in the first place (you can't take the variance of a plain number)."
            }
        ]
    },
    {
        "id": "m06",
        "title": "Central Limit Theorem",
        "description": "States the Central Limit Theorem for sums/means of independent, identically distributed random variables, and compares simulated sample distributions with the normal approximation.",
        "cards": [
            {
                "q": "What does the Central Limit Theorem (CLT) state?",
                "a": "For i.i.d. random variables with finite mean and variance, the standardised sample mean converges in distribution to standard normal as sample size increases.",
                "explain": "This module is arguably the hinge of the whole CS1 syllabus — everything before it (Modules 2-5) builds probability machinery, and almost everything after it (Modules 7-13, inference and regression) leans on this one remarkable result to justify treating sample means/estimators as approximately normal, regardless of what the underlying data actually looks like."
            },
            {
                "q": "What is the approximate distribution of the sample mean $\\bar{X}$ for large $n$?",
                "a": "Approximately $N(\\mu, \\sigma^2/n)$",
                "explain": "The mean $\\mu$ matches the underlying population exactly (no surprise there), but note the variance shrinks with $n$ — this single fact (variance $\\sigma^2/n$, not $\\sigma^2$) is what drives confidence intervals narrowing and hypothesis tests becoming more powerful as sample size grows, throughout the rest of the syllabus."
            },
            {
                "q": "Does the CLT require the underlying distribution to be normal?",
                "a": "No — it applies to almost any distribution with finite mean and variance.",
                "explain": "This is the whole point of the theorem, and worth stating explicitly since it's easy to misread — the CLT doesn't <em>assume</em> normality, it <em>produces</em> approximate normality (for the mean specifically) out of almost any starting distribution, which is precisely why it's such a powerful, general-purpose tool."
            },
            {
                "q": "How does the accuracy of the normal approximation from the CLT typically depend on sample size?",
                "a": "It generally improves as sample size increases; smaller samples need the underlying distribution closer to normal for a good approximation.",
                "explain": "This is an important practical caveat to the theorem's power — the CLT is a statement about the <em>limit</em> as $n\\to\\infty$, so for any finite, real sample size, how good the approximation actually is depends on how far the underlying distribution is from normal to begin with (see the skewness card next)."
            },
            {
                "q": "Why might the CLT approximation be poor for small samples from a highly skewed distribution?",
                "a": "Skewness takes a larger sample size to 'average out' via the CLT, so small samples can still show noticeable skewness.",
                "explain": "A useful rule of thumb worth having: a roughly symmetric underlying distribution needs a relatively small $n$ for the normal approximation to look good, while a heavily skewed one (e.g. many actuarial claim-size distributions) may need a much larger $n$ before the sample mean's own distribution looks convincingly normal."
            },
            {
                "q": "How is the CLT used to justify approximating a Binomial distribution with a Normal distribution?",
                "a": "A binomial is a sum of many independent Bernoulli trials, so for large $n$ the CLT justifies a normal approximation with matching mean and variance.",
                "explain": "This is a direct, concrete application connecting back to Module 2's binomial distribution — recognising a Binomial($n,p$) as literally a <em>sum</em> of $n$ i.i.d. Bernoulli($p$) trials is what lets the CLT (a statement about sums/means) apply to it at all."
            },
            {
                "q": "What continuity correction is often applied when approximating a discrete distribution with a normal distribution?",
                "a": "Adjusting the boundary by $0.5$ to account for the discrete-to-continuous approximation.",
                "explain": "This fixes a genuine mismatch: a discrete distribution puts probability mass only on integer values, while the normal distribution spreads probability continuously — the $\\pm0.5$ adjustment (e.g. approximating $P(X\\le k)$ with the normal CDF at $k+0.5$) accounts for this by treating each integer as if it occupies a unit-width interval."
            },
            {
                "q": "How would you use simulation to check the CLT's accuracy for a given sample size and distribution?",
                "a": "Simulate many samples, compute the sample mean for each, and compare the empirical distribution to the theoretical normal approximation.",
                "explain": "This uses Module 2's simulation techniques (inverse transform method, etc.) as a practical verification tool — rather than trusting the theorem blindly for a specific (possibly small or unusual) sample size, simulation lets you empirically check whether the normal approximation is actually trustworthy in your specific situation."
            },
            {
                "q": "Why is the CLT considered foundational for much of classical statistical inference?",
                "a": "Many inference procedures rely on the approximate normality of sample means/estimators, which the CLT justifies even when the underlying data isn't normal.",
                "explain": "This is the module's central 'why does this matter' answer — Module 9's confidence intervals and Module 10's hypothesis tests both routinely assume approximate normality of a statistic, and the CLT is precisely what makes that assumption reasonable even when you know almost nothing about the shape of the original population."
            },
            {
                "q": "What happens to the variance of the sample mean as sample size $n$ increases?",
                "a": "It decreases, proportionally to $1/n$.",
                "explain": "Restates the $\\sigma^2/n$ result from earlier in this module as a standalone fact worth its own card — the $1/n$ (not, say, $1/\\sqrt{n}$) rate for <em>variance</em> is exactly why the <em>standard deviation</em> of the sample mean shrinks at the slower rate $1/\\sqrt{n}$, a distinction that trips candidates up when converting between the two."
            },
            {
                "q": "Does the CLT say anything about the distribution of individual observations, or only about sums/means?",
                "a": "Only about sums/means (and similar aggregated statistics) — individual observations retain their original distribution.",
                "explain": "This is a common and important misconception to guard against — the CLT says nothing at all about a <em>single</em> observation's distribution, which can be as skewed or unusual as the population itself; it's specifically the process of averaging many observations together that produces the approximate normality."
            },
            {
                "q": "How does the CLT apply to the distribution of a sum (rather than a mean) of i.i.d. random variables?",
                "a": "The sum is also approximately normal for large $n$, with mean $n\\mu$ and variance $n\\sigma^2$.",
                "explain": "This is really the same theorem stated in different units — a sum is just $n$ times the mean, so if $\\bar X \\approx N(\\mu,\\sigma^2/n)$ then $n\\bar X$ (the sum) is approximately $N(n\\mu, n^2\\cdot\\sigma^2/n)=N(n\\mu,n\\sigma^2)$, exactly matching this card's stated result."
            },
            {
                "q": "What condition on the underlying distribution is required for the CLT to apply?",
                "a": "The distribution must have a finite mean and finite variance.",
                "explain": "This is the <em>one</em> genuine restriction on an otherwise extremely general theorem — no assumption of normality, no assumption of a particular shape, just these two finiteness conditions, which is exactly why the exception in the next card (infinite variance) is worth knowing specifically."
            },
            {
                "q": "Give an example of a distribution for which the CLT would not apply in its standard form.",
                "a": "A distribution with infinite variance, such as a Cauchy distribution.",
                "explain": "The Cauchy distribution is the standard textbook counterexample precisely because its variance is infinite (its tails are so heavy the defining integral diverges) — averaging more Cauchy-distributed observations together doesn't concentrate around the mean the way the CLT would predict for a finite-variance distribution."
            },
            {
                "q": "Why is comparing simulated sample means to the normal distribution a useful practical check?",
                "a": "It helps assess how large a sample size is actually needed in practice for the normal approximation to be adequate.",
                "explain": "This closes the module by restating the simulation card's purpose as a general principle — since the theorem itself gives no guarantee about <em>how large</em> $n$ needs to be for a given underlying distribution, empirical simulation is often the most practical way to answer that question for any specific real-world application."
            }
        ]
    },
    {
        "id": "m07",
        "title": "Sampling and statistical inference",
        "description": "Covers random sampling from a population, sampling distributions of statistics, and the key sampling distributions used for inference about a normal population's mean and variance.",
        "cards": [
            {
                "q": "What is a 'random sample'?",
                "a": "A set of observations drawn such that each is independent and identically distributed according to the population distribution.",
                "explain": "The 'i.i.d.' assumption embedded in this definition is exactly the condition the CLT (Module 6) needs to apply — this module is where that theoretical machinery gets put to direct use, building the specific sampling distributions that underpin confidence intervals and hypothesis tests."
            },
            {
                "q": "What is a 'sampling distribution'?",
                "a": "The probability distribution of a statistic (e.g. the sample mean), across all possible samples of a given size from the population.",
                "explain": "This is an important conceptual shift worth pausing on: the <em>raw data</em> has a distribution (the population distribution), but a <em>statistic</em> calculated from a sample (like $\\bar X$) has its <em>own</em>, different distribution — one that's typically much less variable than the original data, since averaging smooths out individual randomness."
            },
            {
                "q": "What is the mean of the sampling distribution of the sample mean $\\bar{X}$?",
                "a": "Equal to the population mean $\\mu$.",
                "explain": "This confirms $\\bar X$ is an unbiased estimator of $\\mu$ (a concept formalised fully in Module 8) — on average, across many hypothetical repeated samples, the sample mean neither systematically over- nor under-estimates the true population mean."
            },
            {
                "q": "What is the variance of the sampling distribution of the sample mean $\\bar{X}$, for a sample of size $n$?",
                "a": "$\\sigma^2/n$, where $\\sigma^2$ is the population variance.",
                "explain": "This is exactly the CLT's variance result from Module 6, restated here as the starting building block for this whole module — every sampling-distribution result for the mean, from the exact normal case below to the $t$-distribution case, builds on this same $\\sigma^2/n$ figure."
            },
            {
                "q": "What is the mean of the sampling distribution of the sample variance $S^2$?",
                "a": "Equal to the population variance $\\sigma^2$.",
                "explain": "This confirms $S^2$ (using the $n-1$ divisor, not $n$) is an unbiased estimator of $\\sigma^2$ — this is precisely <em>why</em> the sample variance formula divides by $n-1$ rather than the seemingly more natural $n$, a choice that's often just asserted without explanation elsewhere but is directly justified by this unbiasedness property."
            },
            {
                "q": "For a random sample from a Normal distribution, what is the exact distribution of the sample mean $\\bar{X}$?",
                "a": "Exactly normal, $N(\\mu, \\sigma^2/n)$ — not just approximately.",
                "explain": "This is an important upgrade from the CLT's <em>approximate</em> result to an <em>exact</em> one — when the underlying population is itself normal, there's no need to invoke a large-sample approximation at all, since sums of normal random variables are exactly normal for any sample size, even $n=2$."
            },
            {
                "q": "For a random sample of size $n$ from $N(\\mu,\\sigma^2)$, what is the distribution of $\\frac{(n-1)S^2}{\\sigma^2}$?",
                "a": "Chi-square with $n-1$ degrees of freedom.",
                "explain": "This connects directly back to Module 2's chi-square construction (sum of squared standard normals) — this specific result is the foundation for constructing confidence intervals for a variance (Module 9) and is one of the two building blocks (alongside the exact-normal $\\bar X$ result above) needed for the $t$-distribution result in the next card."
            },
            {
                "q": "For a random sample from a normal distribution with unknown variance, what distribution does the standardised sample mean follow?",
                "a": "The $t$-distribution with $n-1$ degrees of freedom.",
                "explain": "This is the single most-used sampling-distribution result in this module for practical inference (Modules 9-10), since real-world problems almost never have a known population variance — the $t$-distribution is constructed by combining the exact-normal $\\bar X$ result with the chi-square $S^2$ result above, which is why its degrees of freedom match the chi-square's ($n-1$)."
            },
            {
                "q": "Why is the $t$-distribution used instead of the normal distribution when the population variance is unknown?",
                "a": "Estimating the variance from the sample introduces extra uncertainty, which the heavier-tailed $t$-distribution accounts for.",
                "explain": "This is the intuitive justification for the previous card's technical result — using an <em>estimated</em> variance ($S^2$) instead of the true $\\sigma^2$ adds an extra layer of randomness on top of the sample mean's own variability, and the $t$-distribution's heavier tails (compared to normal) correctly widen confidence intervals/critical values to reflect that extra uncertainty."
            },
            {
                "q": "What happens to the $t$-distribution as the degrees of freedom increase?",
                "a": "It converges to the standard normal distribution.",
                "explain": "This makes intuitive sense given the reasoning above: with a very large sample, the estimated variance $S^2$ becomes an extremely precise estimate of $\\sigma^2$, so the 'extra uncertainty' the $t$-distribution accounts for shrinks toward nothing, and the $t$-distribution converges to the normal distribution it approximates."
            },
            {
                "q": "What is the $F$-distribution used for, in terms of two independent samples?",
                "a": "Comparing the ratio of two independent sample variances, used e.g. to test equality of variances.",
                "explain": "This is built from <em>two</em> independent chi-square distributions (one from each sample's variance, per the chi-square card above) — an F-distributed ratio is what lets you formally test whether two groups have different variability, not just different means."
            },
            {
                "q": "Are the sample mean and sample variance independent for a random sample from a normal distribution?",
                "a": "Yes — a special property that holds for normal samples.",
                "explain": "This is a surprising and important result worth flagging as <em>special</em> to the normal case — it's precisely what allows the $t$-distribution construction above to be valid (combining $\\bar X$ and $S^2$ cleanly requires their independence), and it does <em>not</em> generally hold for samples from other distributions."
            },
            {
                "q": "What is meant by 'degrees of freedom' for the sample variance's chi-square distribution?",
                "a": "$n-1$ — one degree of freedom is 'used up' estimating the mean from the same sample.",
                "explain": "This is the intuitive explanation for why it's $n-1$ and not $n$: since $S^2$ is calculated using the <em>sample</em> mean $\\bar X$ (not the unknown true $\\mu$), one piece of information from the data has already been 'spent' estimating $\\bar X$, leaving only $n-1$ independent pieces of information to estimate the spread."
            },
            {
                "q": "Why is understanding the sampling distribution of a statistic essential for statistical inference?",
                "a": "It tells us how much a statistic varies from sample to sample, underpinning confidence intervals and hypothesis tests.",
                "explain": "This is the module's central justification for existing — every confidence interval (Module 9) and every hypothesis test (Module 10) is built by asking 'given what we know about how this statistic varies from sample to sample, what range of true parameter values is consistent with what we actually observed?', which requires exactly the sampling distributions this module derives."
            },
            {
                "q": "If you take repeated samples of the same size and calculate the sample mean each time, what pattern would you expect?",
                "a": "The sample means would vary, following the sampling distribution of the mean (approximately normal, centred on the population mean).",
                "explain": "This closes the module with a concrete, intuitive picture worth holding onto throughout the rest of CS1 — every abstract sampling-distribution formula in this module describes exactly this thought experiment: imagine repeating your study many times, and ask how the resulting statistic would scatter across those hypothetical repetitions."
            }
        ]
    },
    {
        "id": "m08",
        "title": "Point estimation",
        "description": "Covers methods for constructing estimators — method of moments and maximum likelihood — and criteria for assessing estimator quality such as bias, efficiency, consistency, and mean square error.",
        "cards": [
            {
                "q": "What is the 'method of moments' for constructing an estimator?",
                "a": "Setting sample moments equal to the corresponding theoretical population moments, and solving for the unknown parameter(s).",
                "explain": "This module shifts focus from <em>describing</em> sampling distributions (Module 7) to actually <em>constructing</em> good estimators in the first place — method of moments is the simpler of the two main techniques covered, directly using Module 3's moment concept (just matching sample versions to theoretical ones) rather than anything more sophisticated."
            },
            {
                "q": "What is the 'method of maximum likelihood' for constructing an estimator?",
                "a": "Choosing the parameter value(s) that maximise the likelihood of observing the actual sample data.",
                "explain": "This is generally the more powerful and more heavily examined of the two methods — the intuition is simple despite the technical machinery: out of all possible parameter values, pick the one that makes the data you <em>actually</em> observed look most probable/plausible."
            },
            {
                "q": "What does it mean for an estimator to be 'unbiased'?",
                "a": "$E[\\hat\\theta] = \\theta$ — its expected value equals the true population parameter.",
                "explain": "This is one of three key desirable-estimator properties this module covers (alongside efficiency and consistency below) — note it's a statement about the <em>average</em> across many hypothetical repeated samples, not a guarantee that any single estimate is exactly right; an unbiased estimator can still be wildly off in any one particular sample."
            },
            {
                "q": "What is the 'mean square error' (MSE) of an estimator?",
                "a": "$\\text{MSE}(\\hat\\theta) = E[(\\hat\\theta-\\theta)^2] = \\text{Var}(\\hat\\theta) + \\text{Bias}(\\hat\\theta)^2$",
                "explain": "This formula is worth being able to derive (expand $(\\hat\\theta-\\theta)^2$ and take expectations) rather than just quoting — it's the single most useful summary of an estimator's overall quality, since it combines both bias and variance into one number, exactly what the biased-but-lower-MSE card below exploits."
            },
            {
                "q": "What does it mean for an estimator to be 'efficient'?",
                "a": "Among a class of estimators, it has the smallest variance.",
                "explain": "Note this definition is usually applied specifically among <em>unbiased</em> estimators — comparing variance alone only makes sense as a fairness criterion once bias is controlled for, otherwise a heavily biased estimator that always returns the same wrong constant would trivially have zero variance."
            },
            {
                "q": "What does it mean for an estimator to be 'consistent'?",
                "a": "As sample size increases, the estimator converges (in probability) to the true parameter value.",
                "explain": "This is a large-sample (asymptotic) property, distinct from unbiasedness which can hold or fail at any fixed sample size — an estimator can be biased for small $n$ but still consistent (bias vanishing as $n\\to\\infty$), which is exactly the situation with several standard MLEs."
            },
            {
                "q": "How can an estimator be biased but still have a lower MSE than an unbiased estimator?",
                "a": "If its variance is sufficiently smaller, the reduction in variance can outweigh the squared bias in the MSE formula.",
                "explain": "This is an important, slightly counterintuitive result directly following from the MSE formula above — it shows why 'unbiased' isn't automatically 'best': a small, deliberate bias can sometimes buy a large enough variance reduction to leave the <em>estimator</em> closer to the truth on average, even though it's wrong on average in a narrow technical sense."
            },
            {
                "q": "What is the 'asymptotic distribution' of a maximum likelihood estimator, for large samples?",
                "a": "Approximately normal, centred on the true value, with variance given by the inverse of the Fisher information.",
                "explain": "This is another instance of the CLT-style 'approximately normal for large samples' pattern that runs throughout this whole part of the syllabus — the Fisher information measures how much 'information' about the parameter the likelihood function carries, so <em>more</em> information gives a <em>smaller</em> (more precise) asymptotic variance, an intuitive inverse relationship worth remembering."
            },
            {
                "q": "Why are maximum likelihood estimators often preferred despite sometimes being biased in small samples?",
                "a": "They are asymptotically efficient and consistent, with well-understood large-sample properties.",
                "explain": "This is the practical justification for why MLE is the default go-to method in most of the syllabus (Module 13's GLMs are fitted by maximum likelihood, for instance) — its small-sample imperfections are outweighed by strong, well-understood large-sample guarantees that method of moments generally can't match."
            },
            {
                "q": "What is the 'bootstrap method' used for in estimating an estimator's properties?",
                "a": "Resampling (with replacement) from the observed sample to empirically approximate the sampling distribution of an estimator.",
                "explain": "This is a computational alternative to the theoretical sampling-distribution derivations of Module 7 — instead of deriving a formula analytically, you simulate 'many alternate samples' by repeatedly resampling from the one dataset you actually have, useful whenever the true sampling distribution has no clean closed form."
            },
            {
                "q": "How would you compare two competing estimators of the same parameter?",
                "a": "Compare their bias, variance, and/or mean square error — the estimator with the smaller MSE is generally preferred.",
                "explain": "This is the module's practical decision rule, drawing together every concept covered above — MSE is usually the deciding criterion precisely because it balances bias and variance together (per the MSE formula card), rather than needing to weigh two separate, potentially conflicting measures."
            },
            {
                "q": "What is a potential drawback of the method of moments compared to maximum likelihood?",
                "a": "It can be less statistically efficient (higher variance), especially where moments don't fully capture the information in the data.",
                "explain": "This is the direct trade-off for method of moments' simplicity — it only uses a small number of summary statistics (the sample moments), potentially throwing away information present elsewhere in the full likelihood, which is exactly the extra information maximum likelihood exploits."
            },
            {
                "q": "How would you find the maximum likelihood estimator in practice?",
                "a": "Write the log-likelihood function, differentiate with respect to the parameter(s), set equal to zero, and solve.",
                "explain": "This is the standard mechanical recipe worth being fluent with: likelihood $\\to$ log-likelihood $\\to$ differentiate $\\to$ set to zero $\\to$ solve — the same four-step process applies whether there's one unknown parameter or several, just with partial derivatives and simultaneous equations in the multi-parameter case."
            },
            {
                "q": "Why is the log-likelihood function typically used instead of the likelihood function directly when finding MLEs?",
                "a": "Taking logs turns products into sums, easier to differentiate, with the maximum at the same parameter value.",
                "explain": "This directly mirrors Module 3's CGF trick (log of the MGF turning products into sums for independent variables) — likelihoods for independent observations are <em>products</em> of individual densities/probabilities, and logs are exactly what turns that unwieldy product into a much more manageable sum before differentiating."
            },
            {
                "q": "If an estimator's bias tends to zero as sample size increases, does that guarantee it is consistent?",
                "a": "Not necessarily alone — consistency also typically requires the variance to shrink appropriately.",
                "explain": "This is a subtle but testable point — vanishing bias alone isn't quite the full definition of consistency (convergence in probability to the true value); if the estimator's variance stayed large even as bias vanished, it could still fail to concentrate around the true parameter, so both bias and variance behaviour matter for the full consistency property."
            }
        ]
    },
    {
        "id": "m09",
        "title": "Confidence intervals and prediction intervals",
        "description": "Covers how to construct confidence intervals for unknown parameters and prediction intervals for future observations, including standard cases and the bootstrap method.",
        "cards": [
            {
                "q": "What is a 'confidence interval'?",
                "a": "A range of plausible values for an unknown population parameter, containing the true parameter in a specified proportion of repeated samples.",
                "explain": "This module is the first practical <em>payoff</em> of Module 7's sampling distributions — a confidence interval is built by taking a sampling distribution result (e.g. the standardised sample mean's distribution) and algebraically rearranging it into a range around the observed statistic."
            },
            {
                "q": "What is a 'prediction interval'?",
                "a": "A range of plausible values for a single future observation, based on a fitted model, rather than for a population parameter.",
                "explain": "Keep this conceptually distinct from a confidence interval, since they answer different questions — a confidence interval brackets an unknown <em>parameter</em> (a fixed but unknown number, like the true mean); a prediction interval brackets a future <em>individual observation</em> (which has its own randomness on top of the parameter uncertainty), which is exactly why it comes out wider (see the dedicated card below)."
            },
            {
                "q": "What is the general form of a 95% confidence interval for a normal population mean with known variance?",
                "a": "$\\bar{x} \\pm 1.96\\frac{\\sigma}{\\sqrt{n}}$",
                "explain": "This is Module 7's exact result $\\bar X\\sim N(\\mu,\\sigma^2/n)$ rearranged directly — since 95% of a normal distribution lies within 1.96 standard deviations of its mean, this interval is constructed to have a 95% chance (across repeated sampling) of containing the true $\\mu$."
            },
            {
                "q": "How does the confidence interval formula change if the population variance is unknown?",
                "a": "Replace the normal quantile with a $t$-distribution quantile ($n-1$ df), and use the sample standard deviation in place of $\\sigma$.",
                "explain": "This is a direct application of Module 7's $t$-distribution result — since estimating $\\sigma$ from the sample adds extra uncertainty, the wider-tailed $t$ quantile (instead of 1.96) correctly makes the interval a bit wider than the known-variance case, to compensate for that additional source of imprecision."
            },
            {
                "q": "How would you construct a confidence interval for a binomial proportion using the normal approximation?",
                "a": "$\\hat{p} \\pm z\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$",
                "explain": "This leans on Module 6's CLT-justified normal approximation to the binomial — the term under the square root is just the estimated standard error of $\\hat p$, following the same pattern as every interval in this module: point estimate, plus or minus a quantile times a standard error."
            },
            {
                "q": "How would you construct a confidence interval for a Poisson mean using the normal approximation?",
                "a": "Using the sample mean's approximate normal sampling distribution, e.g. $\\bar{x} \\pm z\\sqrt{\\bar{x}/n}$",
                "explain": "Same underlying template again — this time exploiting the Poisson's distinctive property that its variance equals its mean (Module 2), so $\\bar x$ itself is plugged in as the variance estimate under the square root, rather than needing a separately-calculated sample variance."
            },
            {
                "q": "What is different about a two-sample confidence interval compared with a one-sample interval?",
                "a": "It's for the difference between two population parameters, requiring the variance of the difference of the two sample statistics.",
                "explain": "This needs Module 4's variance-of-a-linear-combination formula, specifically the independent case: $\\text{Var}(\\bar X_1-\\bar X_2)=\\text{Var}(\\bar X_1)+\\text{Var}(\\bar X_2)$ (assuming the two samples are independent) — the two individual sampling variances simply add, giving the combined standard error needed for the two-sample interval."
            },
            {
                "q": "How would you construct a confidence interval for the difference between two means from paired data?",
                "a": "Treat the paired differences as a single sample, and construct a standard one-sample interval for the mean of the differences.",
                "explain": "This is a useful simplification worth recognising: paired data (e.g. before/after measurements on the same subjects) reduces a seemingly two-sample problem back to a <em>one</em>-sample problem, by working directly with the differences — this often gives a narrower, more powerful interval than treating the two groups as independent."
            },
            {
                "q": "How does the bootstrap method construct a confidence interval?",
                "a": "By resampling from the data many times and using the empirical distribution of the resulting bootstrap statistics (e.g. its percentiles).",
                "explain": "This is Module 8's bootstrap technique applied specifically to interval construction — rather than relying on a known theoretical sampling distribution, you build one empirically from resampled data, then simply read off (for example) the 2.5th and 97.5th percentiles for a 95% interval."
            },
            {
                "q": "Why is a prediction interval generally wider than a confidence interval for the mean, at the same confidence level?",
                "a": "It accounts for both the uncertainty in estimating the mean and the additional individual variability of a single future observation.",
                "explain": "This restates the module's earlier confidence/prediction interval distinction with the mechanism made explicit — a prediction interval's variance formula has <em>two</em> terms added together (estimation uncertainty in $\\bar X$, plus the individual observation's own variance $\\sigma^2$), while a confidence interval for the mean has only the first, which is exactly why the prediction interval comes out wider."
            },
            {
                "q": "What happens to the width of a confidence interval as sample size $n$ increases, all else equal?",
                "a": "It narrows, since the standard error decreases as $n$ increases.",
                "explain": "This is Module 7's $\\sigma^2/n$ result driving the practical behaviour of every interval in this module — more data means a smaller standard error, which directly shrinks the 'plus or minus' margin, giving a more precise (narrower) range of plausible parameter values."
            },
            {
                "q": "What happens to the width of a confidence interval as the confidence level increases?",
                "a": "It widens, since a higher confidence level requires a larger quantile/multiplier.",
                "explain": "This is the fundamental trade-off underlying every confidence interval: wanting to be <em>more</em> certain of capturing the true parameter (e.g. 99% instead of 95%) necessarily means casting a <em>wider</em> net, since a larger quantile (e.g. 2.576 instead of 1.96 for the normal case) is needed to capture more of the distribution's probability."
            },
            {
                "q": "Why might you use the bootstrap method rather than a standard formula for a confidence interval?",
                "a": "When the underlying distribution is unknown or complex, or no simple closed-form formula exists.",
                "explain": "This restates the bootstrap's core motivation from Module 8 in this module's specific context — every <em>other</em> interval technique in this module relies on knowing (or approximating via the CLT) the sampling distribution's shape; the bootstrap is the fallback for when that theoretical shortcut simply isn't available."
            },
            {
                "q": "What confidence interval formula would you use for the variance of a normal population?",
                "a": "One based on the chi-square distribution of $\\frac{(n-1)S^2}{\\sigma^2}$.",
                "explain": "This directly reuses Module 7's chi-square sampling-distribution result — note the resulting interval is <em>not</em> symmetric around $S^2$ the way a mean's interval is around $\\bar X$, since the chi-square distribution itself is skewed, a subtlety worth being aware of when constructing or interpreting this specific interval."
            },
            {
                "q": "Why is it important to interpret a 95% confidence interval correctly?",
                "a": "The true parameter is fixed (not random); the 95% refers to the long-run proportion of such intervals that would contain the true value.",
                "explain": "This closes the module with its most commonly misunderstood point, worth stating precisely: it is <em>wrong</em> to say 'there's a 95% probability the true parameter lies in this specific interval' (the parameter isn't random, so it either is or isn't in there) — the correct interpretation is about the <em>procedure</em>: 95% of intervals constructed this way, across many repeated samples, would contain the true value."
            }
        ]
    },
    {
        "id": "m10",
        "title": "Hypothesis testing",
        "description": "Covers the framework of hypothesis testing — null/alternative hypotheses, type I/II errors, test statistics, and standard tests including chi-square goodness-of-fit and tests of independence.",
        "cards": [
            {
                "q": "What is a 'null hypothesis'?",
                "a": "A default or baseline statement (often of 'no effect') that is tested against an alternative hypothesis.",
                "explain": "This module is the second great practical payoff of Module 7's sampling distributions, alongside Module 9's confidence intervals — in fact confidence intervals and hypothesis tests are two sides of the same coin, and a value falling outside a 95% confidence interval corresponds exactly to rejecting the matching null hypothesis at the 5% significance level."
            },
            {
                "q": "What is a 'Type I error'?",
                "a": "Rejecting the null hypothesis when it is actually true (a 'false positive').",
                "explain": "A useful mnemonic: Type I is the error of 'crying wolf' — concluding there's an effect/difference when really there isn't one. This is the error the significance level (below) directly controls the probability of."
            },
            {
                "q": "What is a 'Type II error'?",
                "a": "Failing to reject the null hypothesis when it is actually false (a 'false negative')."
                ,"explain": "The mirror-image error to Type I — missing a genuine effect that's really there. Unlike Type I (fixed by the chosen significance level), the Type II error rate depends on the true (unknown) effect size and sample size, which is exactly why 'power' (below) needs its own dedicated concept."
            },
            {
                "q": "What is the 'significance level' of a test?",
                "a": "The probability of making a Type I error, chosen in advance (commonly 5% or 1%)."
                ,"explain": "Choosing this <em>before</em> seeing the data is an important methodological point — picking a significance level after peeking at results (to get the answer you want) undermines the whole logic of the test, since the error-rate guarantee only holds for a threshold fixed in advance."
            },
            {
                "q": "What is the 'power' of a test?",
                "a": "The probability of correctly rejecting the null hypothesis when it is false."
                ,"explain": "Power is exactly $1 - P(\\text{Type II error})$ — a high-power test is good at <em>detecting</em> real effects when they exist, and power generally increases with sample size (more data makes small true effects easier to distinguish from pure chance), tying this concept directly back to Module 7's sampling-distribution variance shrinking with $n$."
            },
            {
                "q": "What is a 'p-value'?",
                "a": "The probability, assuming the null hypothesis is true, of obtaining a test statistic at least as extreme as the one observed."
                ,"explain": "This precise, conditional definition ('<em>assuming</em> the null is true') is worth memorising exactly, since a p-value is one of the most commonly misinterpreted quantities in statistics — it is <em>not</em> the probability the null hypothesis is true, a distinction worth being able to state clearly if asked."
            },
            {
                "q": "What decision rule is typically used with a p-value?",
                "a": "Reject the null hypothesis if the p-value is less than the chosen significance level."
                ,"explain": "This is the practical, everyday version of hypothesis testing most software and papers actually report — a small p-value means the observed data would be quite <em>surprising</em> if the null hypothesis were really true, which is the intuitive justification for rejecting it below the chosen threshold."
            },
            {
                "q": "What is the 'critical region' of a test?",
                "a": "The set of values of the test statistic for which the null hypothesis would be rejected."
                ,"explain": "This is the classical, pre-computer alternative to the p-value approach — rather than calculating an exact probability, you check whether your test statistic falls inside a predetermined rejection zone, calibrated in advance so the Type I error rate equals the chosen significance level; the two approaches (p-value vs critical region) always give the same reject/don't-reject conclusion."
            },
            {
                "q": "What is the difference between a 'simple' and a 'composite' hypothesis?",
                "a": "A simple hypothesis fully specifies the distribution; a composite hypothesis allows a range of possible parameter values."
                ,"explain": "A useful example: 'the mean is exactly 5' is simple; 'the mean is greater than 5' is composite (it doesn't pin down one specific value) — most <em>real</em> alternative hypotheses are composite, since you rarely know the exact true parameter value even if you suspect the null is wrong."
            },
            {
                "q": "What does the 'likelihood ratio' compare, in hypothesis testing?",
                "a": "The likelihood of the data under the null hypothesis versus under the alternative hypothesis."
                ,"explain": "This connects directly to Module 8's maximum likelihood machinery — a likelihood ratio test asks 'how much <em>more</em> plausible does the data become under the alternative than under the null', and this ratio-based approach underlies the deviance-comparison technique used for GLMs in Module 13."
            },
            {
                "q": "What are 'sensitivity' and 'specificity' in the context of a diagnostic/statistical test?",
                "a": "Sensitivity is the probability of correctly identifying a true positive; specificity of correctly identifying a true negative."
                ,"explain": "These map directly onto the Type I/II error framework: sensitivity is $1-P(\\text{Type II error})$ (equivalent to power), and specificity is $1-P(\\text{Type I error})$ — the same underlying trade-off (catching real effects vs avoiding false alarms) just relabelled in diagnostic-testing language."
            },
            {
                "q": "What is the chi-square goodness-of-fit test used for?",
                "a": "Testing whether observed data is consistent with coming from a specified probability distribution."
                ,"explain": "This directly reuses Module 2's chi-square distribution — the test statistic (roughly, a sum of squared standardised discrepancies between observed and expected counts) is constructed so that, under the null hypothesis of a correct fit, it follows a chi-square distribution, letting you judge whether the observed mismatch is more than chance would explain."
            },
            {
                "q": "How does the chi-square test's degrees of freedom change if parameters are estimated from the data?",
                "a": "The degrees of freedom are reduced by one for each parameter estimated from the data."
                ,"explain": "This is the same 'degrees of freedom get used up by estimation' logic from Module 7's $n-1$ result for sample variance — if you had to estimate, say, a Poisson mean from the same data you're testing the fit against, that estimation step costs one degree of freedom from the resulting chi-square test statistic."
            },
            {
                "q": "What is a 'contingency table' used for?",
                "a": "Summarising the joint frequency distribution of two categorical variables, often to test independence using a chi-square test."
                ,"explain": "This is Module 4's independence concept made testable with real data — rather than checking a theoretical factorisation condition, a chi-square test of independence compares the table's actual observed cell counts against what independence would predict, again using the chi-square goodness-of-fit logic from above."
            },
            {
                "q": "What is the 'permutation approach' to a non-parametric hypothesis test?",
                "a": "Comparing the observed test statistic to the distribution obtained by randomly permuting the data labels, without a specific parametric assumption."
                ,"explain": "This closes the module with a different philosophy from every other test covered — rather than relying on a <em>known</em> theoretical sampling distribution (like chi-square, $t$, or normal), permutation tests build their own reference distribution empirically by reshuffling the data itself, useful whenever the standard parametric assumptions feel shaky."
            }
        ]
    },
    {
        "id": "m11",
        "title": "Correlation",
        "description": "Covers exploratory analysis and inference for measures of association between two variables — Pearson's, Spearman's, and Kendall's correlation coefficients.",
        "cards": [
            {
                "q": "What does a Pearson correlation coefficient of $+1$ indicate?",
                "a": "A perfect positive linear relationship between the two variables.",
                "explain": "This module returns to Module 1's opening preview of correlation measures, now with the formal statistical machinery (Module 4's covariance, Module 7's sampling distributions) needed for genuine inference on them, not just description."
            },
            {
                "q": "What does a Pearson correlation coefficient of $0$ indicate?",
                "a": "No linear relationship between the two variables (though there could still be a non-linear relationship).",
                "explain": "This is exactly Module 4's zero-covariance-doesn't-imply-independence point, restated for the standardised correlation coefficient rather than raw covariance — the same $X$-uniform/$Y=X^2$ counterexample from that module applies equally well here."
            },
            {
                "q": "How is the sample Pearson correlation coefficient calculated?",
                "a": "The sample covariance of the two variables, divided by the product of their sample standard deviations.",
                "explain": "This is the sample-based (data-driven) version of Module 4's theoretical formula $\\rho=\\text{Cov}(X,Y)/\\sqrt{\\text{Var}(X)\\text{Var}(Y)}$ — swap the true covariance/variances for their sample estimates, and you get the sample correlation coefficient actually computed from real data."
            },
            {
                "q": "How would you test whether a population correlation coefficient is significantly different from zero?",
                "a": "Using a $t$-test based on the sample correlation coefficient and sample size (assuming bivariate normality).",
                "explain": "This is Module 10's hypothesis-testing framework applied specifically to correlation — the null hypothesis is $\\rho=0$ (no linear relationship), and under bivariate normality the appropriately transformed sample correlation follows a known $t$-distribution, letting you formally judge whether an observed non-zero sample correlation is more than chance."
            },
            {
                "q": "What is Spearman's rank correlation coefficient based on?",
                "a": "The Pearson correlation coefficient applied to the ranks of the data, rather than the raw values.",
                "explain": "This restates Module 1's introduction with the exact mechanism spelled out — replace each data point with its <em>rank</em> within its own variable, then run the ordinary Pearson formula on those ranks; this single substitution is what converts a linear-relationship measure into a monotonic-relationship measure."
            },
            {
                "q": "Why might Spearman's correlation be more robust to outliers than Pearson's?",
                "a": "Because it uses ranks, an extreme value only affects its rank position, not the magnitude of its influence.",
                "explain": "Worth picturing concretely: an outlier that's merely the largest value contributes exactly the same rank (e.g. 'rank 20 out of 20') whether it's slightly larger or a thousand times larger than the next value — Pearson's raw-value calculation, by contrast, would be dragged much further by the more extreme version."
            },
            {
                "q": "What does Kendall's tau measure conceptually?",
                "a": "The tendency for pairs of observations to be 'concordant' versus 'discordant'.",
                "explain": "This restates Module 1's introduction — the concordant/discordant framing (defined precisely in the next card) is a different construction from either Pearson's (linear) or Spearman's (rank-based) approach, built entirely from pairwise orderings rather than the values or ranks themselves."
            },
            {
                "q": "How is a pair of observations classified as 'concordant' under Kendall's tau?",
                "a": "If the observation with the higher value of $X$ also has the higher value of $Y$.",
                "explain": "This is the precise mechanical definition underlying Kendall's tau — with $n$ observations there are $\\binom{n}{2}$ possible pairs to classify, and tau is essentially built from the (concordant count minus discordant count), normalised so it falls between $-1$ and $+1$ like the other two measures."
            },
            {
                "q": "Can Pearson's correlation be misleading for data with a strong non-linear (but monotonic) relationship?",
                "a": "Yes — it can understate the strength of association since it only captures the linear component.",
                "explain": "This is exactly the scenario Spearman's/Kendall's are designed to handle better — a perfectly monotonic but curved relationship (e.g. $Y=X^3$) can score close to 1 on Spearman's/Kendall's while scoring noticeably below 1 on Pearson's, since Pearson's is specifically measuring how well a <em>straight line</em> fits, not how consistently one variable rises with the other."
            },
            {
                "q": "What assumption does the standard significance test for Pearson's correlation coefficient typically rely on?",
                "a": "That the underlying data follows a bivariate normal distribution.",
                "explain": "This is worth flagging as a genuine limitation of the standard $t$-test approach from earlier in this module — if the bivariate normality assumption looks doubtful, Spearman's or Kendall's (or a permutation-based approach, from Module 10) may give more trustworthy significance testing than the standard Pearson $t$-test."
            },
            {
                "q": "How does sample size affect the significance of an observed correlation coefficient?",
                "a": "Larger samples make smaller correlation coefficients statistically significant, since the standard error decreases.",
                "explain": "This is an important practical caution: with a very large sample, even a tiny, practically meaningless correlation (say, 0.03) can come out 'statistically significant' — a useful reminder that statistical significance and practical/economic significance are different questions, and a large sample only answers the first one more sharply."
            },
            {
                "q": "What could cause two variables to show a high correlation despite having no causal relationship?",
                "a": "A confounding third variable influencing both, or pure coincidence (spurious correlation).",
                "explain": "This is the single most important caution in the whole correlation topic, worth having ready for any 'interpret this correlation' question — correlation coefficients, whichever of the three you use, measure <em>association</em> only; establishing causation needs additional evidence (a designed experiment, or careful control for confounders) that correlation alone can never provide."
            },
            {
                "q": "Why might you calculate Pearson's, Spearman's, and Kendall's correlations all together for the same pair of variables?",
                "a": "To compare linear versus monotonic association, and check robustness to outliers or non-linearity.",
                "explain": "This closes the loop on why the syllabus covers all three: a large gap between Pearson's and the other two (as in the final card of this module) is itself diagnostically useful information, flagging non-linearity or outlier sensitivity that a single correlation number alone would hide."
            },
            {
                "q": "What range of values can any of these three correlation coefficients take?",
                "a": "Between $-1$ and $+1$ inclusive.",
                "explain": "All three measures share this range by deliberate construction (each involves a normalisation step — dividing by standard deviations for Pearson's, or by the total number of pairs for Kendall's) — this shared scale is exactly what makes it meaningful to directly compare their values against each other, as the previous card suggests doing."
            },
            {
                "q": "How would you interpret a Kendall's tau close to zero, alongside a high Pearson's correlation?",
                "a": "Unusual and worth investigating, but generally a low Kendall's tau suggests little consistent ordering association despite a linear trend driven by a few points.",
                "explain": "This closes the module with a tricky diagnostic scenario — it suggests the apparent Pearson correlation may be an artefact of a small number of influential points rather than a broad, consistent pattern across the whole dataset, exactly the kind of outlier-sensitivity issue the robust measures earlier in this module are designed to expose."
            }
        ]
    },
    {
        "id": "m12",
        "title": "Linear regression",
        "description": "Covers simple and multiple linear regression models — fitting, inference on parameters, measures of goodness of fit, prediction, and using residuals to check model validity.",
        "cards": [
            {
                "q": "What is the simple linear regression model?",
                "a": "$Y_i = \\alpha + \\beta x_i + \\epsilon_i$, with independent error terms usually assumed $N(0,\\sigma^2)$.",
                "explain": "This module turns Module 11's correlation (a symmetric measure of association) into a predictive/explanatory model — regression singles out one variable as the <em>response</em> and treats the other as an <em>explanatory</em> variable, letting you predict/explain $Y$ from $x$, which correlation alone never claimed to do."
            },
            {
                "q": "What method is typically used to estimate the slope and intercept in linear regression?",
                "a": "Least squares — minimising the sum of squared residuals.",
                "explain": "The 'squared' is deliberate, not incidental — squaring makes the optimisation mathematically tractable (differentiable everywhere, with a unique closed-form minimum) and penalises large errors disproportionately more than small ones, which is exactly the intuition behind the slope formula in the next card."
            },
            {
                "q": "What is the least squares estimate of the slope $\\beta$ in simple linear regression?",
                "a": "$\\hat\\beta = \\frac{\\sum(x_i-\\bar{x})(y_i-\\bar{y})}{\\sum(x_i-\\bar{x})^2}$",
                "explain": "Notice the numerator is essentially the sample covariance between $x$ and $y$ (Module 4), and the denominator is the sample variance of $x$ — the regression slope is literally 'how much $Y$ and $X$ move together, scaled by how much $X$ itself varies', which is a useful way to remember this formula rather than memorising it as a standalone fact."
            },
            {
                "q": "What is $R^2$ (the coefficient of determination) a measure of?",
                "a": "The proportion of the total variability in the response explained by the fitted regression model.",
                "explain": "For simple linear regression, $R^2$ is exactly the <em>square</em> of the Pearson correlation coefficient from Module 11 — this is a useful identity to know, since it directly connects this module's goodness-of-fit measure back to the correlation concept the whole regression topic builds on."
            },
            {
                "q": "How would you perform statistical inference on the slope parameter $\\beta$?",
                "a": "Using a $t$-test (or confidence interval) based on the estimated slope, its standard error, and the $t$-distribution with $n-2$ df.",
                "explain": "This is Module 9/10's inference machinery reapplied to a regression coefficient — the $n-2$ degrees of freedom (rather than $n-1$) reflects that estimating <em>two</em> parameters (both slope and intercept) from the same data 'uses up' two degrees of freedom, one more than the single-mean case from Module 7."
            },
            {
                "q": "What is a 'residual' in regression?",
                "a": "The difference between an observed value and the value predicted by the model, $e_i = y_i - \\hat{y}_i$",
                "explain": "Residuals are the <em>sample</em>, observable stand-in for the model's unobservable true error terms $\\epsilon_i$ — since you can never see the true errors directly, checking whether the residuals behave the way $\\epsilon_i\\sim N(0,\\sigma^2)$ predicts (constant spread, no pattern, roughly normal) is the practical way to assess whether the model's assumptions actually hold."
            },
            {
                "q": "How can residuals be used to check the validity of a linear regression model?",
                "a": "By plotting them against fitted values or explanatory variables to check for patterns violating model assumptions.",
                "explain": "This is the module's central diagnostic technique, and it's worth having a clear mental image: a <em>good</em> residual plot looks like a random, structureless scatter around zero; any visible pattern (a curve, a funnel shape, a trend) signals a specific assumption violation, exactly as the next card demonstrates for one common pattern."
            },
            {
                "q": "What pattern in a residual plot would suggest non-constant error variance (heteroscedasticity)?",
                "a": "A 'funnel' or fan shape, where the spread of residuals changes systematically with the fitted values.",
                "explain": "This directly violates the model's assumed constant $\\sigma^2$ across all observations — a classic real-world example is spending data, where high-income households' spending varies far more in absolute terms than low-income households', producing exactly this widening 'funnel' shape in a residual plot."
            },
            {
                "q": "What is the difference between a confidence interval for a 'mean response' and a prediction interval for an 'individual response'?",
                "a": "The mean response interval only reflects estimation uncertainty; the prediction interval also includes individual variability, so it's wider.",
                "explain": "This is Module 9's confidence-vs-prediction-interval distinction reapplied here — a mean-response interval brackets where the <em>average</em> $Y$ sits for a given $x$ (only parameter-estimation uncertainty), while a prediction interval brackets where one <em>new</em> individual observation might land (adding the model's own residual variance $\\sigma^2$ on top)."
            },
            {
                "q": "How does multiple linear regression differ from simple linear regression?",
                "a": "It includes more than one explanatory variable, modelling the response as a linear combination of several predictors.",
                "explain": "The underlying least-squares fitting principle doesn't change at all — what changes is that you're now finding the best-fitting hyperplane through a higher-dimensional space rather than the best-fitting line through a 2D scatter, which introduces the multicollinearity concern covered in the next card."
            },
            {
                "q": "What issue can arise in multiple regression if explanatory variables are highly correlated with each other?",
                "a": "Multicollinearity, which can make individual coefficient estimates unstable and hard to interpret.",
                "explain": "This connects directly back to Module 1's PCA card — if two explanatory variables are highly correlated, the model struggles to disentangle which one is 'really' driving the response, producing unstable, hard-to-interpret coefficients; PCA (reducing correlated predictors to uncorrelated components first) is one standard fix for exactly this problem."
            },
            {
                "q": "What is an 'interaction term' in a regression model?",
                "a": "A term (typically the product of two explanatory variables) allowing one variable's effect to depend on the level of another.",
                "explain": "Without an interaction term, a regression model assumes each predictor's effect is the same regardless of the other predictors' values (a strong, often unrealistic assumption) — an interaction term relaxes this, letting (for example) the effect of age on claim cost differ depending on whether the policyholder is male or female."
            },
            {
                "q": "How would you use measures of model fit to select an appropriate set of explanatory variables?",
                "a": "Compare models using criteria like adjusted $R^2$, AIC, or significance tests, favouring good fit without unnecessary complexity.",
                "explain": "The word 'adjusted' matters — plain $R^2$ can only ever increase as you add more variables (even useless ones), so adjusted $R^2$ and AIC both explicitly penalise model complexity, addressing the same overfitting concern flagged in Module 1's PCA card and echoed again in Module 13's GLM model-selection material."
            },
            {
                "q": "What does it mean for an explanatory variable to be a 'factor' (as opposed to continuous)?",
                "a": "It takes categorical values, typically represented using indicator/dummy variables for each level.",
                "explain": "This is worth understanding mechanically: a categorical variable with, say, three levels (e.g. region: North/South/East) gets converted into two 0/1 indicator variables before it can enter a linear regression equation at all, since the raw category labels themselves have no meaningful numeric scale to multiply by a coefficient."
            },
            {
                "q": "Why is checking residuals important even if $R^2$ is high?",
                "a": "A high $R^2$ doesn't guarantee the model's assumptions are valid — residual analysis can reveal issues a summary statistic would miss.",
                "explain": "This closes the module with an important caution, sometimes illustrated with 'Anscombe's quartet' (four wildly different-looking datasets sharing nearly identical summary statistics, including $R^2$) — a single number can never substitute for actually looking at the data and its residuals, which is exactly why this module pairs numerical fit measures with visual residual diagnostics."
            }
        ]
    },
    {
        "id": "m13",
        "title": "Generalised linear models",
        "description": "Extends linear regression to the exponential family of distributions via generalised linear models (GLMs) — link functions, deviance, and model selection.",
        "cards": [
            {
                "q": "What is a 'generalised linear model' (GLM)?",
                "a": "A regression model where the response follows an exponential family distribution, related to a linear predictor via a link function.",
                "explain": "This module is Module 12's linear regression <em>generalised</em> (hence the name) to handle response types ordinary linear regression can't — claim counts (non-negative integers), binary outcomes (yes/no), and skewed positive amounts (claim sizes) all violate the plain normal-errors assumption, and GLMs extend the framework to handle them properly."
            },
            {
                "q": "What is the 'linear predictor' in a GLM?",
                "a": "The linear combination of explanatory variables and coefficients that, via the link function, determines the mean of the response.",
                "explain": "This is exactly the $\\alpha+\\beta x$ (or its multi-variable extension) from Module 12's linear regression, carried over unchanged — the new idea in a GLM is that this linear combination no longer directly <em>equals</em> the mean of $Y$; instead it's connected to it through a link function, covered next."
            },
            {
                "q": "What is the 'link function'?",
                "a": "A function relating the mean of the response distribution to the linear predictor: $g(\\mu) = \\eta$",
                "explain": "This is the single idea that makes GLMs work: rather than forcing $\\mu$ (the mean, which might be constrained, e.g. always positive for a Poisson) to equal an unconstrained linear predictor directly, the link function $g$ sits between them, letting $\\eta$ range freely over all real numbers while $g^{-1}(\\eta)=\\mu$ stays within its natural constraints."
            },
            {
                "q": "What is the 'canonical link function'?",
                "a": "The link function naturally associated with a given exponential family distribution (e.g. log link for Poisson, logit for binomial).",
                "explain": "The log link for Poisson is worth understanding concretely: since $\\log(\\mu)=\\eta$ means $\\mu=e^\\eta$, and $e^\\eta$ is <em>always</em> positive regardless of what real-number value $\\eta$ takes, this link automatically guarantees a sensible (positive) predicted count — exactly why it's the natural default pairing for Poisson-distributed claim counts."
            },
            {
                "q": "Give two distributions that are members of the exponential family, used as GLM response distributions.",
                "a": "Binomial and Poisson (also: exponential, gamma, and normal).",
                "explain": "Note ordinary linear regression's normal-errors model is actually a <em>special case</em> of a GLM (normal distribution, identity link) — this is a useful way to see the whole framework: Module 12 wasn't a separate topic from this one, it was always the simplest possible member of this broader GLM family."
            },
            {
                "q": "What is the 'variance function' in a GLM?",
                "a": "A function describing how the variance of the response depends on its mean, specific to the chosen distribution.",
                "explain": "This directly reflects each distribution's own mean-variance relationship from Module 2 — for a Poisson, variance equals the mean exactly (so the variance function is just $V(\\mu)=\\mu$); for a normal, variance is constant regardless of the mean (a flat variance function), and this distribution-specific relationship feeds directly into how the model estimates uncertainty."
            },
            {
                "q": "What is 'deviance' in a GLM?",
                "a": "A measure of discrepancy between the fitted model and a 'saturated' model, used to assess goodness of fit.",
                "explain": "A 'saturated' model is the (unrealistic, over-fitted) model that predicts each observation perfectly — deviance measures how much <em>worse</em> your actual, more parsimonious fitted model does compared to that impossible ideal, playing a very similar role to the residual sum of squares in ordinary linear regression."
            },
            {
                "q": "What is 'scaled deviance'?",
                "a": "The deviance divided by the dispersion (scale) parameter, used in significance testing and model comparison.",
                "explain": "This adjustment matters because some GLM distributions (like the normal or gamma) have a separate dispersion parameter controlling spread beyond just the mean, while others (like the Poisson, where variance always equals the mean exactly) don't — scaling puts deviance onto a comparable footing for the chi-square-based tests covered in the next card."
            },
            {
                "q": "How is deviance used to compare two nested GLMs?",
                "a": "The difference in (scaled) deviance approximately follows a chi-square distribution, testing whether extra terms significantly improve fit.",
                "explain": "This is Module 10's likelihood-ratio-test idea made concrete for GLMs specifically — 'nested' means one model is a simplified special case of the other (fewer explanatory variables), and the deviance difference between them is exactly a likelihood ratio in disguise, hence the chi-square reference distribution."
            },
            {
                "q": "What are 'Pearson residuals' in a GLM?",
                "a": "Residuals standardised by the estimated standard deviation implied by the model's variance function.",
                "explain": "This adapts Module 12's residual concept to the GLM setting, where (unlike ordinary linear regression) the variance <em>isn't</em> constant across observations — dividing each raw residual by its own predicted standard deviation (from the variance function above) puts residuals for high-mean and low-mean predictions on a comparable, standardised scale."
            },
            {
                "q": "What are 'deviance residuals'?",
                "a": "Residuals based on each observation's individual contribution to the total deviance.",
                "explain": "This is an alternative to Pearson residuals, built directly from the deviance concept rather than the variance function — since total deviance is a sum of individual contributions (much like a sum of squared residuals), each observation's own piece of that sum, appropriately signed, gives its deviance residual."
            },
            {
                "q": "What is the purpose of the 'likelihood-ratio test' in the context of GLMs?",
                "a": "To formally test whether adding/removing explanatory variables significantly improves fit, based on the change in deviance.",
                "explain": "This restates the nested-model comparison card above in more general hypothesis-testing language — it's the GLM-specific instance of the general likelihood-ratio testing concept introduced back in Module 10, applied here via the deviance-difference chi-square approximation."
            },
            {
                "q": "How would you fit a Poisson GLM with a log link function, conceptually?",
                "a": "Model the log of the expected count as a linear function of the explanatory variables, estimating coefficients via maximum likelihood.",
                "explain": "This is Module 8's maximum likelihood technique reapplied here — rather than a closed-form least-squares solution (as in ordinary linear regression), GLM coefficients are generally found by maximising the likelihood numerically/iteratively, exploiting the exponential-family structure to make that optimisation efficient."
            },
            {
                "q": "Why might a Poisson GLM be a natural choice for modelling claim counts in general insurance?",
                "a": "Claim counts are non-negative integers, and a log-link Poisson model naturally ensures positive predicted means.",
                "explain": "This is the module's headline real-world application, connecting directly back to Module 2's original Poisson card — GLMs are what let an insurer move beyond a single overall claim-frequency assumption to one that varies systematically by policyholder characteristics (age, location, vehicle type, etc.), which is the practical foundation of modern general insurance pricing."
            },
            {
                "q": "How would you use an analysis of deviance to choose a suitable GLM?",
                "a": "Compare the reduction in deviance from adding each variable against its degrees of freedom, retaining significant improvements.",
                "explain": "This closes the module by restating its model-selection logic in the same spirit as Module 12's adjusted-$R^2$/AIC discussion — the goal throughout is the same balance between fit and complexity, just measured via deviance reduction rather than $R^2$ increase, since deviance (not $R^2$) is the natural fit measure for a GLM."
            }
        ]
    },
    {
        "id": "m14",
        "title": "Bayesian statistics",
        "description": "Introduces the Bayesian approach to statistical inference — using Bayes' theorem to combine prior beliefs with observed data to obtain a posterior distribution, and Bayesian point/interval estimation.",
        "cards": [
            {
                "q": "What is Bayes' theorem, in terms of a parameter $\\theta$ and data $x$?",
                "a": "$f(\\theta|x) \\propto f(x|\\theta)\\,f(\\theta)$ — posterior is proportional to likelihood times prior.",
                "explain": "This module introduces a different <em>philosophy</em> of inference from Modules 7-10's classical (frequentist) approach — rather than treating the parameter as a fixed unknown constant, Bayesian statistics treats it as itself having a probability distribution, updated by data via exactly this formula."
            },
            {
                "q": "What is the 'prior distribution'?",
                "a": "A probability distribution representing beliefs about a parameter before observing the data.",
                "explain": "This is the single most distinctive feature of the Bayesian approach, and the source of most classical-statistics objections to it — the prior is necessarily somewhat subjective (a judgement call before seeing data), which is precisely the trade-off for gaining the ability to formally incorporate existing knowledge or expert judgement into the analysis."
            },
            {
                "q": "What is the 'posterior distribution'?",
                "a": "The updated distribution of the parameter after combining the prior with the observed data via Bayes' theorem.",
                "explain": "This is the end product every Bayesian analysis is working toward — everything downstream in this module (point estimates, credible intervals) is derived <em>from</em> the posterior distribution, so correctly computing it (prior times likelihood, appropriately normalised) is the central technical task."
            },
            {
                "q": "What is a 'conjugate prior'?",
                "a": "A prior that, when combined with a given likelihood, produces a posterior from the same family as the prior.",
                "explain": "This is a hugely convenient special case worth appreciating — without conjugacy, computing a posterior distribution can require difficult numerical integration; with a conjugate prior, the posterior's <em>family</em> is already known, and updating just means recalculating a couple of that family's parameters using simple formulas."
            },
            {
                "q": "Give an example of a conjugate prior/likelihood pair commonly used in actuarial applications.",
                "a": "A Gamma prior for a Poisson mean (giving a Gamma posterior), or a Beta prior for a binomial probability (giving a Beta posterior).",
                "explain": "Both pairings connect directly back to Module 2's distribution catalogue — the Beta distribution's natural home on $[0,1]$ makes it the obvious prior for a probability parameter, and the Gamma's flexibility for positive values makes it the natural prior for a Poisson rate; these two pairings are the most heavily examined conjugate cases in the syllabus."
            },
            {
                "q": "How is a Bayesian point estimate typically derived from the posterior distribution?",
                "a": "By minimising the expected value of a chosen loss function under the posterior — e.g. the posterior mean minimises squared-error loss.",
                "explain": "This is a different way of justifying a point estimate than classical statistics' bias/efficiency criteria (Module 8) — rather than asking 'which estimator behaves well across hypothetical repeated samples', Bayesian decision theory asks 'given what I now believe about $\\theta$ (the posterior), which single number minimises my expected loss if I'm wrong'."
            },
            {
                "q": "What loss function leads to the posterior median as the optimal Bayesian point estimate?",
                "a": "Absolute error loss.",
                "explain": "Worth noting the parallel to classical descriptive statistics: squared-error loss favours the mean (penalising large errors disproportionately), while absolute-error loss favours the median (penalising all errors proportionally to their size) — the <em>same</em> mean-vs-median trade-off that shows up whenever you're deciding how to summarise a skewed distribution."
            },
            {
                "q": "What loss function leads to the posterior mode as the optimal Bayesian point estimate?",
                "a": "The 'zero-one' (all-or-nothing) loss function.",
                "explain": "This is the most extreme loss function of the three — 'zero-one' means you're only penalised if your estimate is <em>wrong</em> at all (any deviation, however small, counts as a full loss), so the optimal strategy is to bet everything on the single most probable value, which is exactly the definition of the mode."
            },
            {
                "q": "What is a 'credible interval'?",
                "a": "A Bayesian interval, derived from the posterior distribution, within which the parameter lies with a specified posterior probability.",
                "explain": "This is the Bayesian analogue of Module 9's confidence interval, but constructed completely differently — rather than relying on a sampling distribution across hypothetical repeated samples, a credible interval is simply read directly off the posterior distribution (e.g. its 2.5th and 97.5th percentiles for a 95% interval)."
            },
            {
                "q": "How does a credible interval's interpretation differ from a classical confidence interval's?",
                "a": "A credible interval directly states 'the probability the parameter lies here is X%', unlike a confidence interval's long-run frequency interpretation.",
                "explain": "This is exactly the intuitive statement Module 9 warned you <em>not</em> to make about a confidence interval — a credible interval earns that more natural-sounding interpretation, precisely because Bayesian statistics treats the parameter itself as having a probability distribution, unlike the classical framework where the parameter is a fixed (non-random) unknown."
            },
            {
                "q": "What is the 'credibility premium formula'?",
                "a": "$\\text{Premium} = Z \\times (\\text{own experience}) + (1-Z) \\times (\\text{prior mean})$",
                "explain": "This is where the whole Bayesian apparatus of this module lands its main actuarial application — it's a weighted average between what the <em>risk's</em> <em>own data</em> suggests and what the <em>prior</em> (collective/portfolio) belief suggests, with $Z$ (developed fully in Module 15) controlling exactly how much weight each side gets."
            },
            {
                "q": "What role does the credibility factor $Z$ play?",
                "a": "It determines how much weight is given to the individual risk's own data versus the wider prior/collective information.",
                "explain": "Note $Z=0$ recovers pure reliance on the prior (ignoring individual data entirely) and $Z=1$ recovers pure reliance on individual experience (ignoring the prior entirely) — the credibility formula elegantly interpolates between these two extremes, which is exactly why it's such a natural and widely-used actuarial pricing tool."
            },
            {
                "q": "How does the Bayesian approach to credibility theory derive the credibility premium?",
                "a": "As the posterior mean, combining a prior distribution for the risk parameter with the observed individual experience.",
                "explain": "This ties the credibility premium formula directly back to the posterior-mean point-estimate card earlier in this module — for conjugate prior/likelihood pairs specifically, the posterior mean turns out to take <em>exactly</em> the linear credibility-weighted form, which is the 'exact credibility' result explored further in Module 15."
            },
            {
                "q": "What happens to the credibility factor $Z$ as the amount of individual data increases?",
                "a": "It increases towards 1, giving more weight to the individual's own experience.",
                "explain": "This makes intuitive sense given Module 7's sampling-distribution results — more individual data makes the individual's own experience a more <em>precise</em> (lower-variance) estimate of their own risk, so it becomes increasingly informative relative to the prior, earning it progressively more weight in the blended premium."
            },
            {
                "q": "Why is Bayesian credibility theory particularly relevant to actuarial pricing?",
                "a": "It provides a principled way to blend an individual risk's own experience with wider portfolio experience, especially when individual data is sparse.",
                "explain": "This closes the module with its central practical justification, directly previewing Modules 15-16 — a new or small commercial policyholder has very little claims history of their own, and rather than ignoring that thin data (or over-relying on it), credibility theory gives a mathematically principled way to combine it sensibly with the much larger, more stable portfolio-wide experience."
            }
        ]
    },
    {
        "id": "m15",
        "title": "Credibility theory",
        "description": "Covers the Bayesian and classical approaches to credibility theory, and the role of the credibility factor in blending individual and collective experience.",
        "cards": [
            {
                "q": "What is the fundamental idea behind credibility theory?",
                "a": "Combining an individual risk's own claims experience with wider (collective) experience, weighted by how credible/reliable the individual data is.",
                "explain": "This module gives full formal treatment to the idea Module 14 previewed via the Bayesian route — the <em>same</em> underlying goal (blend individual and collective information) can be approached either through full Bayesian machinery (Module 14) or through the more direct 'classical' variance-component approach this module develops, and the two often agree exactly for conjugate cases."
            },
            {
                "q": "What is the 'credibility factor' $Z$ constrained to?",
                "a": "A value between 0 and 1.",
                "explain": "This bounded range is what makes $Z$ interpretable as a genuine <em>weight</em> in a weighted average — the credibility premium formula from Module 14 only makes sense as a sensible blend if $Z$ stays within $[0,1]$, since anything outside that range would mean over- or under-weighting one source relative to a simple average."
            },
            {
                "q": "What happens to the estimated premium if $Z=0$?",
                "a": "The premium equals the collective (prior/overall) mean entirely, ignoring the individual's own experience.",
                "explain": "This is the extreme case where a risk's individual data is judged completely uninformative (e.g. essentially no claims history at all) — the credibility formula gracefully degrades to 'just use the portfolio average', which is exactly the sensible default when there's nothing else reliable to go on."
            },
            {
                "q": "What happens to the estimated premium if $Z=1$?",
                "a": "The premium equals the individual's own observed experience entirely, ignoring the wider collective information.",
                "explain": "This is the opposite extreme, appropriate only when a risk's own data is judged fully sufficient on its own — in practice $Z=1$ is rare, since even substantial individual claims history usually still benefits from at least some smoothing toward the collective mean to guard against random noise."
            },
            {
                "q": "What factors typically increase the credibility factor $Z$ for a given risk?",
                "a": "More individual data, and lower variability in the individual's own claims relative to variability between different risks.",
                "explain": "Both factors trace back to Module 5's law of total variance — more data reduces the <em>sampling</em> variance of the individual's own experience (Module 7's $\\sigma^2/n$ shrinking), and a favourable within/between variance ratio means the individual differs meaningfully from the average, both pushing more weight toward the individual's own experience."
            },
            {
                "q": "How does 'between-risk' variance affect the credibility factor, relative to 'within-risk' variance?",
                "a": "Higher between-risk variance increases $Z$, since individual experience is then more informative relative to the average.",
                "explain": "This is exactly Module 5's law of total variance terms put to direct use — if risks differ a lot from one another (high between-risk variance), an individual risk's own data tells you a lot about where <em>they</em> specifically sit; if all risks are quite similar (low between-risk variance), individual data adds little beyond what the collective average already tells you."
            },
            {
                "q": "How does the Bayesian approach to credibility theory determine $Z$?",
                "a": "Implicitly, through the shape of the posterior distribution derived from the prior and likelihood of the observed data.",
                "explain": "This is the direct contrast with the classical approach in this module — Module 14's Bayesian route never explicitly <em>solves</em> for a $Z$ value; a specific credibility weight only emerges as a <em>by-product</em> once you compute the posterior mean for a specific conjugate prior/likelihood pair, which is exactly what the 'exact credibility' card below describes."
            },
            {
                "q": "What does it mean for the Bayesian credibility premium to be 'exact' in certain cases?",
                "a": "For specific conjugate prior/likelihood pairs, the posterior mean takes exactly the linear credibility-weighted form.",
                "explain": "This is the reassuring result that ties Module 14's Bayesian approach and this module's classical approach together — for the standard conjugate pairs (Gamma/Poisson, Beta/Binomial), the two different derivation <em>routes</em> arrive at the identical final formula, confirming credibility theory isn't just a convenient approximation but a mathematically well-justified result."
            },
            {
                "q": "Why is credibility theory particularly useful for pricing risks with limited individual claims history?",
                "a": "It avoids over-relying on sparse, noisy individual data by blending it with more stable collective experience.",
                "explain": "This restates the module's central motivation directly — pricing purely off a small commercial policyholder's own thin claims history would be dangerously noisy (a single unlucky year could swing the estimate wildly), while credibility theory's blending mechanism automatically tempers that noise using the far more stable collective data."
            },
            {
                "q": "What is a practical example of using credibility theory in insurance pricing?",
                "a": "Setting a commercial policyholder's renewal premium by blending their own claims history with the insurer's overall experience.",
                "explain": "This is the standard textbook illustration worth having ready — a commercial fleet or business policy typically has enough individual history to be somewhat informative (unlike, say, a single new personal motor policy), making it a natural candidate for an intermediate credibility factor rather than either extreme."
            },
            {
                "q": "How does credibility theory relate to the law of total variance covered under conditional expectation?",
                "a": "The within-risk and between-risk variance components directly determine the credibility factor in classical credibility theory.",
                "explain": "This closes the loop explicitly back to Module 5 — everything in this module's credibility-factor formulas is really just the law of total variance's two components (within-risk and between-risk) combined into a specific ratio, confirming Module 5 wasn't abstract probability theory for its own sake but the direct mathematical foundation for this module."
            },
            {
                "q": "What would happen to premiums across a portfolio if $Z$ were set too high for all risks?",
                "a": "Premiums would be too heavily influenced by random fluctuations in individual experience, becoming more volatile than appropriate.",
                "explain": "This is the practical risk of over-trusting noisy individual data — a policyholder who happened to have one unusually bad (or good) year would see their premium swing dramatically, even if that year was mostly just random chance rather than a genuine change in their underlying risk."
            },
            {
                "q": "What would happen to premiums across a portfolio if $Z$ were set too low for all risks?",
                "a": "Premiums would fail to reflect genuine differences between risks, becoming too similar across dissimilar policyholders.",
                "explain": "This is the opposite failure mode — different risks (a careful driver vs a risky one, say) would end up paying nearly the same premium, which isn't just inaccurate but can create adverse-selection problems (low-risk customers overpaying relative to their true risk may leave for a competitor who prices more accurately)."
            },
            {
                "q": "How does increasing the volume of individual exposure/data typically affect $Z$ in classical credibility formulas?",
                "a": "It increases $Z$, since $Z$ is typically an increasing function of the amount of individual data/exposure.",
                "explain": "This restates the earlier 'more data increases Z' card as a formula-level fact — in the standard classical credibility formulas, $Z$ is typically written as something like $\\frac{n}{n+k}$ for exposure $n$ and a constant $k$, which explicitly increases toward 1 as $n$ grows, directly matching this intuition."
            },
            {
                "q": "Why might an actuary need to justify their choice of credibility approach for a given pricing problem?",
                "a": "The methods rest on different assumptions and can give different results, so the choice should suit the data and context available.",
                "explain": "This closes the module with an important professional point — credibility theory isn't a single formula but a family of related techniques (full Bayesian, classical, and empirical Bayes in Module 16), each with different data requirements and assumptions, so choosing (and being able to defend) the appropriate one for the situation at hand is itself part of the actuarial judgement being tested."
            }
        ]
    },
    {
        "id": "m16",
        "title": "Empirical Bayes credibility theory",
        "description": "Covers the empirical Bayes approach to credibility theory, which estimates the credibility parameters directly from the observed data rather than assuming a fully specified prior.",
        "cards": [
            {
                "q": "What is the key difference between the (fully) Bayesian and empirical Bayes approaches to credibility theory?",
                "a": "Empirical Bayes estimates the prior's parameters from the observed data itself, rather than assuming a fully specified prior in advance.",
                "explain": "This is the final resolution of a tension that's run through both this and the previous two modules — Module 14's full Bayesian approach needs a prior specified in advance (potentially subjective), while this module's empirical Bayes approach removes that subjectivity by letting the portfolio's <em>own</em> data determine the prior's parameters."
            },
            {
                "q": "What does 'Empirical Bayes Credibility Theory Model 1' typically assume about the risks in a portfolio?",
                "a": "Each risk has the same number of years of data/exposure (a balanced data structure).",
                "explain": "This 'balanced' simplification makes the variance-component estimation (covered below) considerably cleaner algebraically — with every risk contributing the same amount of data, the within-risk and between-risk variance formulas don't need to weight different risks differently, unlike the more general Model 2 covered next."
            },
            {
                "q": "What does 'Empirical Bayes Credibility Theory Model 2' allow for, that Model 1 does not?",
                "a": "Different risks having different (unequal) amounts of exposure/data.",
                "explain": "This is the realistic generalisation most real insurance portfolios actually need — a portfolio of commercial policies naturally has some clients with long histories and others newly onboarded, and Model 2's more complex formulas correctly give more informative (longer-history) risks proportionally more influence on the estimated variance components."
            },
            {
                "q": "How are the within-risk and between-risk variance components estimated in empirical Bayes credibility theory?",
                "a": "Using sample variance-type estimators calculated directly from the observed claims data across the risks.",
                "explain": "This is Module 8's point-estimation ideas (unbiasedness in particular) applied specifically to the two variance components from Module 5's law of total variance — rather than being told or assuming these variances, empirical Bayes constructs specific formulas (analogous to a sample variance) to estimate them directly from the portfolio's claims history."
            },
            {
                "q": "Why is it called 'empirical' Bayes?",
                "a": "Because the prior's parameters are estimated empirically from the data, rather than specified from external judgement or theory.",
                "explain": "This restates the module's opening distinction as a plain naming explanation — 'empirical' signals the departure from Module 14's fully-specified-in-advance prior, replacing subjective judgement with objective, data-driven estimation of the same underlying quantities."
            },
            {
                "q": "What is a practical advantage of the empirical Bayes approach over the full Bayesian approach?",
                "a": "It doesn't require specifying a full prior distribution in advance — the observed portfolio data determines the credibility weighting.",
                "explain": "This is the module's central selling point for actuarial practice — a working actuary often has ample <em>portfolio</em> data (many similar risks) but no natural, agreed-upon prior distribution to assume; empirical Bayes sidesteps that problem entirely by letting the portfolio effectively construct its own prior."
            },
            {
                "q": "What data structure issue does 'Model 2' specifically address that 'Model 1' cannot handle well?",
                "a": "Risks with differing volumes of exposure, since the credibility factor formula needs to reflect each risk's different information.",
                "explain": "Restates the Model 1 vs Model 2 distinction from earlier in this module as a diagnostic question — before applying either model to a real dataset, checking whether exposure is balanced across risks is the deciding factor for which of the two to use."
            },
            {
                "q": "How does the credibility factor formula typically depend on exposure/data volume in empirical Bayes models?",
                "a": "It increases with an individual risk's exposure/data volume relative to the estimated variance components.",
                "explain": "This is Module 15's 'more data increases $Z$' result, now made concrete with the estimated (rather than assumed) variance components from earlier in this module plugged into the formula — the underlying logic is unchanged, only the <em>source</em> of the variance estimates has shifted from assumption to direct estimation."
            },
            {
                "q": "Why might estimating variance components from limited data be a practical challenge in empirical Bayes credibility theory?",
                "a": "With few risks or little data per risk, the estimated variances can themselves be noisy/unreliable.",
                "explain": "This is a genuine, important limitation worth flagging — empirical Bayes trades away the subjectivity of a specified prior (Module 14) for a new form of uncertainty: the <em>estimated</em> variance components are themselves subject to sampling error, and with a small portfolio that estimation error can meaningfully undermine the resulting credibility factors."
            },
            {
                "q": "What assumption is generally made about the risk parameters of different risks within a portfolio?",
                "a": "That they are drawn independently from some common (but not fully specified) underlying distribution across the portfolio.",
                "explain": "This is the key structural assumption that makes 'estimating the prior from data' a coherent idea at all — treating each risk's true underlying parameter as an independent draw from a shared portfolio-wide distribution is what lets you pool information across <em>different</em> risks to estimate that shared distribution's properties."
            },
            {
                "q": "How does empirical Bayes credibility theory relate to conditional expectation and the law of total variance?",
                "a": "It applies the same within/between variance decomposition, but estimates those components directly from data.",
                "explain": "This closes the loop all the way back to Module 5 one final time — every credibility module in this trio (14, 15, 16) is really the same core idea (the law of total variance's two components) approached from a different angle: fully Bayesian, classical/theoretical, and now empirically estimated from data."
            },
            {
                "q": "What would you check before applying 'Model 1' (equal exposure) rather than 'Model 2' to a data set?",
                "a": "Whether all the risks have the same amount of exposure — if not, Model 2's unequal-exposure approach is more appropriate.",
                "explain": "Worth treating this as a mandatory first check before running any empirical Bayes calculation — using Model 1's simpler formulas on unbalanced data would give a biased or misleading result, since the simplifying 'equal exposure' assumption underlying Model 1 wouldn't actually hold."
            },
            {
                "q": "Why is empirical Bayes credibility theory particularly useful in general insurance ratemaking?",
                "a": "Real portfolios often have many risks with varying claims histories and no natural, fully specified prior — empirical Bayes lets data calibrate the weighting.",
                "explain": "This closes the module (and the whole credibility trio) with the practical bottom line — a general insurer typically has exactly the ingredients empirical Bayes needs (many risks, no obvious prior) and exactly the problem it solves (blending sparse individual experience with the wider book sensibly), making it one of the most directly applicable techniques in the entire CS1 syllabus."
            },
            {
                "q": "What happens to the empirical Bayes credibility factor for a risk with an unusually large amount of exposure?",
                "a": "It tends to be higher, giving that risk's own experience more relative weight in its premium estimate.",
                "explain": "A direct, concrete instance of the earlier 'Z increases with exposure' card — a large commercial fleet policy with years of substantial claims history would typically earn a high $Z$, close to relying almost entirely on its own experience, unlike a small, newly-written policy which would lean much more heavily on the collective portfolio average."
            },
            {
                "q": "How would you interpret an estimated between-risk variance of (approximately) zero in an empirical Bayes analysis?",
                "a": "Risks in the portfolio are quite homogeneous, so credibility factors would tend to be low, favouring the collective mean.",
                "explain": "This closes the module with an intuitive final result — if the <em>estimated</em> between-risk variance comes out near zero, it's telling you the portfolio's risks don't actually differ much from each other underneath the noise, so there's little genuine signal in any individual risk's own experience worth weighting heavily against the stable, shared collective average."
            }
        ]
    }
  ],
  questions: [
    {
      id: "cs1-q1",
      title: "Generating functions for a Poisson claim count",
      modules: "Modules 2, 3",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define the moment generating function (MGF) of a random variable $X$, and state how $E[X]$ can be obtained from it.",
          answer: "$M_X(t) = E[e^{tX}]$. The mean is obtained as $E[X] = M_X'(0)$, the first derivative of the MGF evaluated at $t=0$.",
          note: "Both the definition and the derivative rule are needed for full marks &mdash; the rest of this question depends on being able to apply this mechanically.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question: "The MGF of a Poisson($\\lambda$) distribution is $M(t)=\\exp[\\lambda(e^t-1)]$. Find $M'(t)$ and hence confirm that $E[X]=\\lambda$.",
          answer: "$M'(t) = \\lambda e^t \\exp[\\lambda(e^t-1)] = \\lambda e^t M(t)$. At $t=0$: $M'(0) = \\lambda(1)(1) = \\lambda$, confirming $E[X]=\\lambda$.",
          note: "Candidates should apply the chain rule correctly (differentiating the exponent $\\lambda(e^t-1)$ gives $\\lambda e^t$, multiplied by $M(t)$ itself) rather than attempting to expand the exponential as a series.",
        },
        {
          label: "(iii)",
          command: "Derive",
          marks: 4,
          question:
            "Find the cumulant generating function (CGF) $K(t)$ of the Poisson($\\lambda$) distribution, and use it to derive $\\text{Var}(X)=\\lambda$ directly. Comment on why this route is more direct than working via the MGF.",
          answer:
            "$K(t) = \\ln M(t) = \\lambda(e^t-1)$. $K'(t) = \\lambda e^t$, so $K'(0)=\\lambda$ (confirming the mean again). $K''(t) = \\lambda e^t$, so $K''(0) = \\lambda = \\text{Var}(X)$. This is more direct than the MGF route because the CGF's second derivative gives the variance in a single step, without needing to separately compute $E[X^2]=M''(0)$ and then subtract $(E[X])^2$.",
          note: "Full marks require both the correct CGF derivation and the explicit comparison to the MGF route &mdash; simply stating the variance without the 'why more direct' comparison loses the final mark.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question:
            "Two independent portfolios have annual claim counts $N_1\\sim\\text{Poisson}(30)$ and $N_2\\sim\\text{Poisson}(45)$. Using generating functions, state the distribution of the combined claim count $N_1+N_2$, and briefly justify your answer.",
          answer:
            "The MGF of the sum of independent random variables is the product of their individual MGFs: $M_{N_1+N_2}(t) = \\exp[30(e^t-1)]\\times\\exp[45(e^t-1)] = \\exp[75(e^t-1)]$, which is exactly the MGF of a Poisson(75) distribution. Since two random variables sharing the same MGF must have the same distribution, $N_1+N_2 \\sim \\text{Poisson}(75)$.",
          note: "The justification must explicitly invoke the MGF-uniqueness property, not just assert the result &mdash; recognising the product as matching a known Poisson MGF is the key step examiners look for.",
        },
      ],
    },
    {
      id: "cs1-q2",
      title: "A joint distribution: covariance and conditional expectation",
      modules: "Modules 4, 5",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 3,
          question:
            "Two discrete random variables $X,Y \\in \\{1,2\\}$ have joint probabilities $f(1,1)=0.1$, $f(1,2)=0.3$, $f(2,1)=0.3$, $f(2,2)=0.3$. Determine the marginal distributions of $X$ and $Y$, and state, with justification, whether $X$ and $Y$ are independent.",
          answer:
            "$P(X=1)=0.1+0.3=0.4$, $P(X=2)=0.3+0.3=0.6$. $P(Y=1)=0.1+0.3=0.4$, $P(Y=2)=0.3+0.3=0.6$. $X$ and $Y$ are <em>not</em> independent: if they were, $f(1,1)$ would equal $P(X=1)P(Y=1) = 0.4\\times0.4 = 0.16$, but the actual value is $f(1,1)=0.1 \\neq 0.16$.",
          note: "Checking independence requires testing the factorisation condition at (at least) one specific point and finding it fails &mdash; simply asserting dependence without a numerical check loses marks.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question: "Calculate $\\text{Cov}(X,Y)$ for the joint distribution given in part (i).",
          answer:
            "$E[X] = 1(0.4)+2(0.6) = 1.6$. $E[Y]=1.6$ (by the symmetry of the marginals). $E[XY] = (1)(1)(0.1)+(1)(2)(0.3)+(2)(1)(0.3)+(2)(2)(0.3) = 0.1+0.6+0.6+1.2 = 2.5$. $\\text{Cov}(X,Y) = E[XY]-E[X]E[Y] = 2.5 - (1.6)(1.6) = -0.06$.",
          note: "Marks are typically split across correctly finding $E[X]$, $E[Y]$, $E[XY]$ and the final subtraction &mdash; an arithmetic slip in any one component should still earn partial credit if the method is shown.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "Calculate $E[Y|X=1]$ and $E[Y|X=2]$, and use these to verify the tower property $E[Y]=E[E[Y|X]]$.",
          answer:
            "$f_{Y|X}(y|1) = f(1,y)/P(X=1)$: $f(1|1)=0.1/0.4=0.25$, $f(2|1)=0.3/0.4=0.75$, so $E[Y|X=1]=1(0.25)+2(0.75)=1.75$. Similarly $E[Y|X=2] = 1(0.5)+2(0.5)=1.5$. Tower property: $E[E[Y|X]] = P(X=1)(1.75)+P(X=2)(1.5) = 0.4(1.75)+0.6(1.5) = 0.7+0.9 = 1.6 = E[Y]$, confirming the identity.",
          note: "The explicit numerical verification at the end (showing the weighted average of the two conditional means equals $E[Y]$ from part (ii)) is what the command word is testing &mdash; stopping after calculating the two conditional means loses the verification mark.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question: "Comment on what the negative covariance found in part (ii), combined with the dependence found in part (i), suggests about the relationship between $X$ and $Y$.",
          answer:
            "The correlation coefficient is $\\rho = -0.06/\\sqrt{0.24\\times0.24} = -0.25$ (using $\\text{Var}(X)=\\text{Var}(Y)=0.24$), indicating a weak negative linear association: $X$ and $Y$ have a mild tendency to move in opposite directions, consistent with the dependence detected in part (i), but the relationship is not strong.",
          note: "A strong answer converts the raw covariance into the more interpretable correlation coefficient before commenting on strength, rather than trying to judge -0.06 in isolation without a sense of scale.",
        },
      ],
    },
    {
      id: "cs1-q3",
      title: "The Central Limit Theorem and a confidence interval for claim size",
      modules: "Modules 6, 7, 9",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the Central Limit Theorem for a sequence of i.i.d. random variables.",
          answer:
            "For i.i.d. random variables with finite mean $\\mu$ and finite variance $\\sigma^2$, the standardised sample mean $\\frac{\\bar{X}-\\mu}{\\sigma/\\sqrt{n}}$ converges in distribution to the standard normal distribution as the sample size $n$ increases.",
          note: "Candidates should state the finite mean/variance condition explicitly, since part (iii) later tests whether they understand when this approximation is exact rather than needed at all.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "Individual claim amounts on a portfolio have population mean &pound;800 and population standard deviation &pound;250. For a random sample of 100 claims, use the CLT to calculate the approximate probability that the sample mean claim amount exceeds &pound;850.",
          answer:
            "By the CLT, $\\bar{X} \\approx N(800, 250^2/100) = N(800, 625)$, so the standard error is $250/\\sqrt{100}=25$. $z = \\frac{850-800}{25} = 2.0$. $P(\\bar{X}>850) = P(Z>2.0) = 1-0.9772 = 0.0228$.",
          note: "The standard error must use $\\sigma/\\sqrt{n}$ (25), not $\\sigma$ itself (250) &mdash; using the raw population standard deviation instead of the sample mean's standard error is a common and significant error here.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain what would change about your approach in part (ii) if you were instead told that individual claim amounts are known to be exactly normally distributed, rather than of unspecified shape.",
          answer:
            "The numerical answer would be unchanged, since with $n=100$ the CLT approximation is already very accurate. However, the calculation would no longer be an <em>approximation</em> at all: if the underlying claim amounts are exactly normal, the sample mean's distribution is exactly $N(\\mu,\\sigma^2/n)$ for any sample size, not just approximately so for large $n$.",
          note: "The key distinction examiners want is 'exact vs approximate', not just 'the answer would be the same' &mdash; candidates should explicitly reference Module 7's exact-normality result for samples from a normal population.",
        },
        {
          label: "(iv)",
          command: "Calculate",
          marks: 3,
          question:
            "The insurer instead wants a 95% confidence interval for the true mean claim amount, based on a sample of 100 claims with sample mean &pound;820 and sample standard deviation &pound;240 (population variance unknown). Calculate the interval.",
          answer:
            "With $n=100$ large, the $t$-distribution with 99 df is very close to standard normal, so $z\\approx1.96$ is used. Standard error $= 240/\\sqrt{100}=24$. Margin $=1.96\\times24=47.04$. 95% CI $= 820 \\pm 47.04 = [\\pounds772.96, \\pounds867.04]$.",
          note: "Candidates should note <em>why</em> the normal quantile is an acceptable substitute for the $t$ quantile here specifically (large $n$, so $t_{99}\\approx z$) rather than using it without justification.",
        },
      ],
    },
    {
      id: "cs1-q4",
      title: "Method of moments and maximum likelihood for exponential waiting times",
      modules: "Module 8",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define the method of moments estimator in general terms, and state how it relates to the MLE for an exponential distribution.",
          answer:
            "The method of moments estimator is found by setting sample moments equal to the corresponding theoretical population moments and solving for the unknown parameter. For the exponential distribution, the method of moments estimator and the maximum likelihood estimator coincide exactly.",
          note: "The coincidence for the exponential case is a useful fact to flag explicitly, since part (iii) derives the same numerical answer via a completely different route (differentiating the log-likelihood).",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question: "A sample of 8 policy waiting times (assumed exponential($\\lambda$)) has a total sum of 40. Calculate the method of moments estimate of $\\lambda$.",
          answer: "$\\bar{x} = 40/8 = 5$. For the exponential distribution, $E[X]=1/\\lambda$, so setting $\\bar{x}=1/\\hat\\lambda$ gives $\\hat\\lambda = 1/\\bar{x} = 1/5 = 0.2$.",
          note: "Candidates must correctly invert the mean-parameter relationship ($E[X]=1/\\lambda$, not $\\lambda$) &mdash; a common error is stating $\\hat\\lambda=\\bar{x}$ directly.",
        },
        {
          label: "(iii)",
          command: "Derive",
          marks: 4,
          question: "Derive the maximum likelihood estimator of $\\lambda$ for a random sample of size $n$ from an exponential($\\lambda$) distribution, from first principles, and confirm it matches part (ii).",
          answer:
            "Likelihood: $L(\\lambda)=\\lambda^n e^{-\\lambda\\sum x_i}$. Log-likelihood: $\\ell(\\lambda)=n\\ln\\lambda - \\lambda\\sum x_i$. Differentiating: $\\ell'(\\lambda) = \\frac{n}{\\lambda}-\\sum x_i = 0 \\Rightarrow \\hat\\lambda_{MLE} = \\frac{n}{\\sum x_i} = \\frac{1}{\\bar{x}}$. With $n=8$, $\\sum x_i=40$: $\\hat\\lambda_{MLE}=8/40=0.2$, matching part (ii).",
          note: "The full four-step recipe (likelihood, log-likelihood, differentiate, solve) should be shown explicitly for full marks &mdash; jumping straight to the answer without the differentiation step loses the method marks even if the final number is correct.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "State whether this MLE is unbiased for $\\lambda$ in finite samples, and comment briefly on its large-sample properties.",
          answer:
            "The MLE $\\hat\\lambda=1/\\bar{X}$ is biased for finite $n$ (its expectation is slightly above the true $\\lambda$, since $E[1/\\bar X]\\neq 1/E[\\bar X]$ in general). However, it is asymptotically unbiased and consistent, converging to the true $\\lambda$ as $n\\to\\infty$, and it is asymptotically normally distributed, consistent with the general large-sample properties of MLEs.",
          note: "This tests whether candidates understand that 'MLE' does not automatically mean 'unbiased' &mdash; the reciprocal-of-a-mean structure here is a classic case where finite-sample bias exists despite excellent large-sample behaviour.",
        },
      ],
    },
    {
      id: "cs1-q5",
      title: "A chi-square goodness-of-fit test",
      modules: "Module 10",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the null and alternative hypotheses for a chi-square goodness-of-fit test in general terms.",
          answer: "$H_0$: the data come from the specified probability distribution. $H_1$: the data do not come from the specified distribution.",
          note: "Both hypotheses should be stated relative to a specific claimed distribution, not just 'there is a difference' in vague terms.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "Observed frequencies across 5 categories are 18, 22, 25, 20, 15, against expected frequencies of 20 in each category under $H_0$. Calculate the chi-square test statistic.",
          answer:
            "$\\chi^2 = \\sum\\frac{(O-E)^2}{E} = \\frac{(18-20)^2}{20}+\\frac{(22-20)^2}{20}+\\frac{(25-20)^2}{20}+\\frac{(20-20)^2}{20}+\\frac{(15-20)^2}{20} = \\frac{4+4+25+0+25}{20} = \\frac{58}{20} = 2.90$",
          note: "Each of the five terms should be shown individually before summing &mdash; a bare final answer with no working shown risks losing marks even if correct, since this is a 'calculate' question with several components.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "State the degrees of freedom for this test, compare the statistic to the 5% critical value of 9.488, and state your conclusion.",
          answer:
            "Degrees of freedom $= 5-1 = 4$ (5 categories, no parameters estimated from the data). Since $\\chi^2=2.90 \\lt  9.488$, there is insufficient evidence to reject $H_0$ at the 5% level &mdash; the data are consistent with the specified distribution.",
          note: "The conclusion must be phrased as 'insufficient evidence to reject' rather than 'accept $H_0$' &mdash; a hypothesis test never proves the null hypothesis true, only that the data don't contradict it.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question:
            "Explain how the degrees of freedom in part (iii) would change if the expected frequencies had instead been calculated using a Poisson distribution whose mean was estimated from the same data, and why.",
          answer:
            "The degrees of freedom would reduce to $5-1-1=3$. This is because estimating the Poisson mean from the same data being tested uses up one additional degree of freedom &mdash; the general rule is that the degrees of freedom reduce by one for each parameter estimated from the data, on top of the usual '$k-1$' baseline for $k$ categories.",
          note: "This connects directly to the same 'degrees of freedom get used up by estimation' logic as the $n-1$ divisor for sample variance &mdash; candidates who can draw that parallel demonstrate a deeper understanding than one who just quotes the rule.",
        },
      ],
    },
    {
      id: "cs1-q6",
      title: "Correlation between claims experience and a rating factor",
      modules: "Module 11",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define the sample Pearson correlation coefficient $r$ in terms of sample covariance and sample standard deviations.",
          answer: "$r = \\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}$, where $S_{xy}=\\sum(x_i-\\bar{x})(y_i-\\bar{y})$, $S_{xx}=\\sum(x_i-\\bar{x})^2$, and $S_{yy}=\\sum(y_i-\\bar{y})^2$.",
          note: "This is the sample-data version of Module 4's theoretical correlation formula &mdash; candidates should recognise the parallel rather than treating it as an unrelated new formula.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question: "Paired data are: $x = (2,4,6,8,10,12)$, $y=(3,5,4,9,8,11)$. Calculate the sample correlation coefficient $r$.",
          answer:
            "$\\bar{x}=7$, $\\bar{y}=6.667$. $S_{xy}=54$, $S_{xx}=70$, $S_{yy}=49.33$. $r = \\dfrac{54}{\\sqrt{70\\times49.33}} = \\dfrac{54}{58.77} = 0.919$",
          note: "Candidates should show the intermediate sums ($S_{xy}$, $S_{xx}$, $S_{yy}$) rather than jumping to the final ratio, both for method marks and to make an arithmetic error easier to spot and partially credit.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "Test, at the 5% significance level, whether the population correlation coefficient is significantly different from zero.",
          answer:
            "$H_0: \\rho=0$ vs $H_1: \\rho\\neq0$. Test statistic: $t = r\\sqrt{\\frac{n-2}{1-r^2}} = 0.919\\sqrt{\\frac{4}{1-0.845}} = 4.66$, with $n-2=4$ degrees of freedom. Since $|4.66| > 2.776$ (the 5% two-sided critical value for $t_4$), reject $H_0$: there is significant evidence of a non-zero population correlation.",
          note: "Both hypotheses and the explicit comparison to the critical value are needed for full marks &mdash; quoting only the $t$-statistic without a stated conclusion against the critical value is an incomplete answer.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question:
            "The data appear to follow a consistently increasing but slightly curved (not perfectly straight-line) pattern. Explain how you would check whether Spearman's rank correlation supports the same conclusion, and what result you would expect if the relationship is strongly monotonic despite the curve.",
          answer:
            "Recalculate the correlation using the <em>ranks</em> of $x$ and $y$ in place of their raw values (Spearman's is exactly Pearson's formula applied to ranks). Since a strongly monotonic relationship preserves the ordering of observations almost perfectly even when curved, Spearman's rank correlation would be expected to come out very high &mdash; likely even higher than the Pearson value found in part (ii), since rank correlation isn't penalised by the curvature the way Pearson's linear measure is.",
          note: "The key insight examiners want is the specific prediction (Spearman's $\\geq$ Pearson's here) with a stated reason (rank correlation is insensitive to curvature as long as monotonicity holds), not just 'calculate Spearman's too'.",
        },
      ],
    },
    {
      id: "cs1-q7",
      title: "Fitting a simple linear regression model",
      modules: "Module 12",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the simple linear regression model, and the criterion used to estimate its parameters.",
          answer: "$Y_i = \\alpha+\\beta x_i+\\epsilon_i$, with $\\epsilon_i$ independent, usually assumed $N(0,\\sigma^2)$. Parameters are estimated by least squares: minimising the sum of squared residuals $\\sum(y_i-\\hat{y}_i)^2$.",
          note: "Both the model equation and the fitting criterion should be stated for full marks &mdash; the criterion is what part (ii) directly applies.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question: "Data are: $x=(1,2,3,4,5)$, $y=(3,5,4,6,8)$. Calculate the least squares estimates of the slope $\\hat\\beta$ and intercept $\\hat\\alpha$.",
          answer: "$\\bar{x}=3$, $\\bar{y}=5.2$. $S_{xy}=11$, $S_{xx}=10$. $\\hat\\beta = 11/10 = 1.1$. $\\hat\\alpha = \\bar{y}-\\hat\\beta\\bar{x} = 5.2-(1.1)(3) = 1.9$.",
          note: "The intercept must be found using the fitted slope and the sample means (the fitted line always passes through $(\\bar x,\\bar y)$) &mdash; attempting to derive it independently is unnecessary extra work.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "Calculate $R^2$ for the fitted model, and interpret its value.",
          answer:
            "Fitted values: 3.0, 4.1, 5.2, 6.3, 7.4. $SS_{res}=\\sum(y_i-\\hat y_i)^2 = 2.70$. $SS_{tot}=\\sum(y_i-\\bar y)^2=14.80$. $R^2 = 1-\\frac{2.70}{14.80} = 0.818$. This means approximately 81.8% of the variability in $y$ is explained by the fitted linear relationship with $x$.",
          note: "The interpretation sentence (what the number actually <em>means</em>, not just its value) is what the 'interpret' instruction is asking for &mdash; a bare numerical answer without interpretation loses part of the available credit.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Use the fitted model to predict the response at $x=6$, and comment on a limitation of using the model for this prediction.",
          answer:
            "$\\hat{y} = 1.9+1.1(6) = 8.5$. This is an extrapolation: $x=6$ lies outside the range of the observed data (1 to 5) used to fit the model, so there is no evidence the linear relationship continues to hold there &mdash; predictions outside the observed range carry additional risk beyond the model's stated precision.",
          note: "Recognising and naming the extrapolation issue specifically (not just 'the model might be wrong') is the key point being tested &mdash; this is a standard, frequently-examined limitation of regression prediction.",
        },
      ],
    },
    {
      id: "cs1-q8",
      title: "A Poisson GLM for claim counts",
      modules: "Module 13",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define a generalised linear model in terms of the response distribution, linear predictor and link function.",
          answer:
            "A GLM assumes the response follows a distribution from the exponential family, with its mean $\\mu$ related to a linear predictor $\\eta$ (a linear combination of explanatory variables) via a link function $g$, such that $g(\\mu)=\\eta$.",
          note: "All three components (exponential family response, linear predictor, link function) should be named explicitly for full marks.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "An actuary models annual claim counts using a Poisson GLM with a log link, with a single explanatory factor 'driver age band' (3 levels). Write down the general form of the linear predictor, and explain what the log link ensures about the model's predicted claim counts.",
          answer:
            "Linear predictor: $\\eta = \\beta_0 + \\beta_1 I_1 + \\beta_2 I_2$, where $I_1, I_2$ are indicator variables for two of the three age bands (the third is the baseline). Since the log link gives $\\mu=e^\\eta$, and $e^\\eta$ is positive for any real value of $\\eta$, the log link guarantees the model's predicted mean claim count is always positive, regardless of the fitted coefficients.",
          note: "The indicator-variable structure for a 3-level factor (2 indicators, one baseline level) connects to Module 12's factor-variable card &mdash; candidates should recognise this rather than trying to include a separate indicator for all 3 levels, which would be over-parameterised.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 4,
          question:
            "Model A (age band only) has deviance 340 on 296 degrees of freedom. Model B (age band plus vehicle type, adding 2 further parameters) has deviance 322 on 294 degrees of freedom. Test whether vehicle type significantly improves the fit.",
          answer:
            "Deviance difference $=340-322=18$, on $296-294=2$ degrees of freedom. Comparing to the chi-square critical value $\\chi^2_{0.05,2}=5.991$: since $18 > 5.991$, the improvement in fit from adding vehicle type is statistically significant at the 5% level, so vehicle type should be retained in the model.",
          note: "Candidates must correctly identify the degrees of freedom for the comparison as the <em>difference</em> in parameters (2), not either model's own degrees of freedom, and state a clear retain/reject conclusion.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 3,
          question: "Explain one practical reason an actuary might still choose not to include vehicle type in the final pricing model, despite the statistically significant result in part (iii).",
          answer:
            "Some vehicle-type categories may have very few observations (sparse data), making the estimated coefficients for those levels unstable or unreliable despite the overall test being significant &mdash; alternatively, vehicle type might be highly correlated with another factor already in the model (e.g. engine size), causing multicollinearity concerns, or there may be regulatory or commercial constraints on using that particular rating factor.",
          note: "Any one well-explained practical concern (data sparsity, multicollinearity, or regulatory/commercial constraints) earns full marks &mdash; the point is recognising that statistical significance alone doesn't automatically settle a real pricing-model decision.",
        },
      ],
    },
    {
      id: "cs1-q9",
      title: "Bayesian updating and exact credibility for a Gamma-Poisson model",
      modules: "Modules 14, 15",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State Bayes' theorem in the form 'posterior is proportional to likelihood times prior', and state why the Gamma distribution is a conjugate prior for a Poisson mean.",
          answer:
            "$f(\\theta|x) \\propto f(x|\\theta)f(\\theta)$. The Gamma distribution is conjugate for a Poisson mean because combining a Gamma prior with Poisson-distributed data always produces a posterior that is itself a Gamma distribution, just with updated parameters.",
          note: "Naming the specific conjugate pairing (Gamma/Poisson) rather than describing conjugacy only in the abstract is what part (ii) then directly applies.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "An insurer assumes a Gamma(shape $=4$, rate $=2$) prior for a risk's claim frequency $\\lambda$. Given 10 years of data with total observed claims $=38$, derive the posterior distribution of $\\lambda$ and its mean.",
          answer:
            "For a Gamma(shape $\\alpha_0$, rate $\\beta_0$) prior and Poisson likelihood with $n$ years of data and total claims $S$, the posterior is Gamma($\\alpha_0+S$, $\\beta_0+n$). Here: Gamma($4+38$, $2+10$) $=$ Gamma($42$, $12$). Posterior mean $= 42/12 = 3.5$.",
          note: "The updating rule (add total claims to shape, add years of exposure to rate) should be stated explicitly, not just the final numbers &mdash; this is the standard conjugate-update formula worth memorising exactly.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question:
            "Calculate the Bühlmann-style credibility factor $Z=\\frac{n}{n+\\beta_0}$ for this prior, and the resulting credibility premium, confirming it matches the posterior mean found in part (ii).",
          answer:
            "$Z = \\dfrac{10}{10+2} = 0.8333$. Sample mean $=38/10=3.8$. Prior mean $=4/2=2.0$. Credibility premium $= 0.8333(3.8)+0.1667(2.0) = 3.167+0.333 = 3.5$, exactly matching the posterior mean from part (ii).",
          note: "The explicit numerical confirmation that both routes give 3.5 is the point of this part &mdash; simply computing $Z$ without completing the credibility-weighted average and comparing it to part (ii) leaves the question incomplete.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question: "Explain why this exact match between the Bayesian posterior mean and the linear credibility formula is a special property of this particular prior/likelihood pairing, rather than a general result.",
          answer:
            "This is the 'exact credibility' property specific to conjugate prior/likelihood pairs such as Gamma/Poisson (and Beta/Binomial) &mdash; for these particular families, the posterior mean happens to reduce algebraically to exactly the linear credibility-weighted form. For other, non-conjugate prior/likelihood combinations, the true Bayesian posterior mean generally does <em>not</em> simplify to a simple linear formula, and a classical credibility premium would then only be an approximation to the full Bayesian answer, not an exact match.",
          note: "The key distinction examiners want is 'special to conjugate pairs, not universal' &mdash; a common error is implying the Bayesian and classical credibility approaches always agree exactly, which is only true for these specific conjugate cases.",
        },
      ],
    },
    {
      id: "cs1-q10",
      title: "Empirical Bayes Credibility Theory Model 1",
      modules: "Module 16",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the key assumption 'Empirical Bayes Credibility Theory Model 1' makes about the risks in a portfolio.",
          answer: "Model 1 assumes each risk in the portfolio has the same number of years of data/exposure (a balanced data structure).",
          note: "This assumption should be explicitly checked against any given data before applying Model 1's formulas, as the next parts require.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "Three risks each have 4 years of claims data: Risk 1: 10, 14, 8, 12. Risk 2: 20, 18, 22, 24. Risk 3: 15, 13, 17, 11. Calculate the estimate of the process (within-risk) variance, $s^2$.",
          answer:
            "Risk means: $\\bar X_1=11$, $\\bar X_2=21$, $\\bar X_3=14$. Sum of squared within-risk deviations: Risk 1: $1+9+9+1=20$; Risk 2: $1+9+1+9=20$; Risk 3: $1+1+9+9=20$; total $=60$. $s^2 = \\dfrac{60}{r(n-1)} = \\dfrac{60}{3(3)} = 6.667$",
          note: "The divisor is $r(n-1)$ &mdash; number of risks times (years per risk minus 1) &mdash; not simply the total number of observations; each risk's own mean is used to measure that risk's own within-risk deviations.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 4,
          question: "Calculate the estimate of the variance of hypothetical means (between-risk variance), and hence the credibility factor $Z$ (common to all risks under Model 1).",
          answer:
            "Overall mean $= (11+21+14)/3 = 15.333$. Sum of squared deviations of risk means from overall mean: $(11-15.333)^2+(21-15.333)^2+(14-15.333)^2 = 18.78+32.11+1.78 = 52.67$. $\\hat{a} = \\dfrac{52.67}{r-1} - \\dfrac{s^2}{n} = \\dfrac{52.67}{2}-\\dfrac{6.667}{4} = 26.33-1.67=24.67$. $K = s^2/\\hat{a} = 6.667/24.67 = 0.270$. $Z = \\dfrac{n}{n+K} = \\dfrac{4}{4+0.270} = 0.937$",
          note: "The between-risk variance formula subtracts $s^2/n$ from the raw between-risk sum of squares &mdash; omitting this correction term is a common error that overstates the between-risk variance and hence $Z$.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question: "Calculate the credibility premium for Risk 1 (own mean 11), and comment on why it is close to that risk's own observed mean.",
          answer:
            "Credibility premium $= Z\\bar X_1 + (1-Z)\\bar X = 0.937(11)+0.063(15.333) = 10.31+0.97 = 11.27$. This is close to Risk 1's own mean of 11 because $Z$ is very high (0.937): the estimated between-risk variance is large relative to the process variance, meaning risks in this portfolio differ a lot from one another, so each risk's own experience is treated as highly informative and given correspondingly heavy weight.",
          note: "The comment should connect the numerical closeness to the underlying reason (high $Z$ because between-risk variance dominates process variance), not just restate that the numbers happen to be close.",
        },
      ],
    },
  ],
});

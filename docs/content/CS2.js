// CS2 Risk Modelling and Survival Analysis: flashcards and practice questions.
//
// Hand-edited. docs/content/README.md describes the format and its rules,
// above all that cards are append-only: a card's identity is its position.
// After editing, run: node scripts/build-catalog.mjs
registerContent("CS2", {
  modules: [
    {
        "id": "m01",
        "title": "Stochastic processes",
        "description": "Introduces the general concept of a stochastic process, classifying processes by state space and time (discrete/continuous), and the Markov property.",
        "cards": [
            {
                "q": "What is a 'stochastic process'?",
                "a": "A collection of random variables indexed by time (or another parameter), representing how a system evolves under uncertainty.",
                "explain": "This module lays the conceptual groundwork for the <em>entire</em> first third of CS2 — every model in Modules 2-14 (Markov chains, Markov jump processes, survival models, time series) is a specific <em>type</em> of stochastic process, classified along exactly the two dimensions (state space and time) this module introduces."
            },
            {
                "q": "What is a 'counting process'?",
                "a": "A stochastic process that counts the number of events that have occurred by time $t$, non-decreasing and integer-valued.",
                "explain": "This is a specific, important example worth recognising immediately when it recurs — CM2's Poisson process (Module 7 there, and Module 17's ruin theory) is precisely a counting process, and Module 3's Poisson model in <em>this</em> subject reuses exactly the same idea for claim/event arrivals."
            },
            {
                "q": "What does it mean for a process to have a 'discrete state space'?",
                "a": "The process can only take values from a countable set of possible states.",
                "explain": "This is the property that makes Markov <em>chains</em> (Module 2) and Markov <em>jump processes</em> (Modules 4-5) tractable — a discrete state space means you can describe the whole process using a finite (or countable) list of transition probabilities/intensities between named states, rather than needing a continuum of possible values."
            },
            {
                "q": "What does it mean for a process to have a 'continuous state space'?",
                "a": "The process can take any value within a continuous range.",
                "explain": "This is the CM2 side of the classification — GBM (CM2 Module 8) and interest-rate models (CM2 Module 15) both have continuous state spaces, since a stock price or interest rate can take any real value, not just discrete named states."
            },
            {
                "q": "What does it mean for a process to operate in 'discrete time'?",
                "a": "The process is only observed/defined at a countable sequence of time points.",
                "explain": "Module 2's Markov chains are the canonical discrete-time example — a policyholder's no-claims-discount category is only meaningfully updated once a year, not continuously, making annual time steps the natural unit."
            },
            {
                "q": "What does it mean for a process to operate in 'continuous time'?",
                "a": "The process is defined at every point in time within an interval.",
                "explain": "Modules 3-5's Markov jump processes are the continuous-time analogue of Module 2's Markov chains — a health state (say) can change at <em>any</em> instant, not just at predetermined annual checkpoints, which needs the continuous-time machinery those modules develop."
            },
            {
                "q": "What is a 'mixed type' process, in terms of state space and time?",
                "a": "A process combining aspects of discrete and continuous state spaces or time (e.g. continuous time but a discrete state space).",
                "explain": "This is precisely the category Markov <em>jump</em> processes fall into (Modules 3-5) — continuous <em>time</em> (transitions can happen at any instant) combined with a discrete <em>state space</em> (a finite list of named states like alive/dead, or healthy/sick/dead), which is exactly the classification this whole module's two-dimensional framework is designed to capture."
            },
            {
                "q": "What is the 'Markov property'?",
                "a": "The future evolution of the process, given its present state, is independent of its past history.",
                "explain": "This is the single most important simplifying assumption running through this whole first third of CS2 — it's the direct generalisation of CS1's independence concept (Module 4 there) and CM1's mortality-modelling assumption (constant force between integer ages) to a fully dynamic, evolving-over-time setting."
            },
            {
                "q": "How is the Markov property expressed in terms of a filtration $\\mathcal{F}_t$?",
                "a": "$P(X_{t+s} = j \\mid \\mathcal{F}_t) = P(X_{t+s} = j \\mid X_t)$",
                "explain": "This is CM2 Module 7's filtration concept reused directly — the equation says precisely that conditioning on the <em>full</em> history $\\mathcal{F}_t$ gives exactly the same answer as conditioning on just the <em>current</em> state $X_t$ alone; everything else in the history is provably irrelevant once you know where you are right now."
            },
            {
                "q": "Give an example of a discrete-time, discrete-state stochastic process.",
                "a": "A Markov chain, e.g. modelling a policyholder's no-claims-discount category year by year.",
                "explain": "This directly previews Module 2's central worked example — worth having this concrete NCD illustration ready whenever a question asks for an example of this specific classification, since it's the standard actuarial application examiners return to repeatedly."
            },
            {
                "q": "Give an example of a continuous-time, discrete-state stochastic process.",
                "a": "A Markov jump process, e.g. modelling an individual's health state over continuous time.",
                "explain": "This directly previews Modules 3-5's central topic — the health-state example (healthy/sick/dead) recurs throughout those modules as the standard illustration of why continuous-time transitions between discrete states matter for realistic sickness/income-protection modelling."
            },
            {
                "q": "Why is the Markov property a useful simplifying assumption in actuarial modelling?",
                "a": "It greatly simplifies calculations, since only the current state (not the full history) is needed to determine future probabilities.",
                "explain": "This is the practical payoff that justifies assuming Markov behaviour even when it's not perfectly realistic — without it, you'd need to track and condition on an ever-growing history for every individual, which becomes computationally and mathematically intractable at any real scale."
            },
            {
                "q": "What is a 'filtration'?",
                "a": "An increasing sequence of information sets over time, representing everything known/observable up to each point in time.",
                "explain": "This is exactly the same filtration concept CM2 Module 7 introduced for Brownian motion — recognising it as the <em>same</em> underlying idea (just applied here to discrete-state processes rather than continuous ones) saves re-learning it as something new."
            },
            {
                "q": "Give an example of a real-world process that is <em>not</em> well-approximated by the Markov property.",
                "a": "A no-claims-discount system with memory of multiple past years, or a process where recent trend affects future behaviour.",
                "explain": "This is an important counter-example worth remembering, since it's the direct set-up for Module 5's duration-dependent extension — real NCD systems and sickness recovery rates often DO depend on more than just the current state, which is exactly why an expanded, duration-including state space (Module 5) is sometimes needed to restore Markov behaviour."
            },
            {
                "q": "Why might insurance/actuarial models often use 'mixed type' processes?",
                "a": "Real-world events (e.g. claims) often occur at random continuous times, but affect a discrete state (e.g. a claims category)."
                ,"explain": "This closes the module by tying the mixed-type classification directly to real insurance mechanics — a claim can happen at any instant (continuous time), but it moves a policyholder between a finite set of NCD categories (discrete state space), which is exactly the mixed structure this module flags as common in practice."
            }
        ]
    },
    {
        "id": "m02",
        "title": "Markov chains",
        "description": "Covers discrete-time Markov chains — transition matrices, the Chapman-Kolmogorov equations, stationary distributions, and applications like no-claims-discount systems.",
        "cards": [
            {
                "q": "What is a 'transition matrix' for a Markov chain?",
                "a": "A matrix whose $(i,j)$ entry gives the probability of moving from state $i$ to state $j$ in one time step.",
                "explain": "This is the single object that fully characterises a time-homogeneous Markov chain — since the Markov property (Module 1) means only the <em>current</em> state matters, and transition probabilities don't change over time, one matrix captures everything needed to describe every future probability, as the Chapman-Kolmogorov equations below make explicit."
            },
            {
                "q": "What must each row of a transition matrix sum to?",
                "a": "1, since the chain must move to some state, including possibly staying in the same state.",
                "explain": "This is a useful arithmetic check worth running on any transition matrix you construct or are given — if a row doesn't sum to exactly 1, either a transition probability is missing, or one has been double-counted, and the matrix can't represent a valid Markov chain."
            },
            {
                "q": "What are the Chapman-Kolmogorov equations?",
                "a": "Equations expressing $n$-step transition probabilities as the matrix product of one-step transition probabilities: $P^{(n)} = P^n$",
                "explain": "This elegant result follows directly from the Markov property applied repeatedly — moving $n$ steps is just moving 1 step, $n$ times in a row, and each step's transition depends only on the current state (not how you got there), which is exactly what allows the probabilities to simply multiply together as matrices."
            },
            {
                "q": "What is a 'stationary distribution' of a Markov chain?",
                "a": "A probability distribution $\\pi$ over the states such that $\\pi P = \\pi$.",
                "explain": "This is the chain's long-run 'equilibrium' — if the distribution of states is <em>already</em> $\\pi$, applying the transition matrix leaves it unchanged, meaning the proportion of the population in each state stabilises over time even though <em>individuals</em> keep moving between states."
            },
            {
                "q": "Under what condition does a Markov chain have a unique stationary distribution that it converges to?",
                "a": "If the chain is irreducible and aperiodic (with a finite state space).",
                "explain": "Both conditions matter and are worth understanding why — irreducibility (below) ensures there's <em>one</em> connected system to converge within, not several disconnected sub-systems each with their own equilibrium; aperiodicity (below) ensures the chain doesn't cycle forever without settling."
            },
            {
                "q": "What does it mean for a Markov chain to be 'irreducible'?",
                "a": "Every state can be reached from every other state with positive probability.",
                "explain": "Without this, the chain could get permanently trapped in a subset of states depending on where it started, meaning there'd be no <em>single</em> stationary distribution the whole chain converges to regardless of starting point — different starting states could lead to different long-run behaviours."
            },
            {
                "q": "What does it mean for a state in a Markov chain to be 'periodic'?",
                "a": "The chain can only return to that state at multiples of some period greater than 1.",
                "explain": "A simple example worth picturing: a chain that alternates strictly between two states (A, B, A, B, ...) has period 2 — it can only return to state A at even time steps, never settling into a stable single distribution even though it's perfectly predictable, which is exactly why periodicity blocks convergence to a stationary distribution."
            },
            {
                "q": "How would you calculate the stationary distribution of a Markov chain in a simple case?",
                "a": "Solve $\\pi P = \\pi$ together with the constraint that the probabilities in $\\pi$ sum to 1.",
                "explain": "Note the sum-to-1 constraint is essential, not optional — $\\pi P=\\pi$ alone is a system of linear equations with infinitely many solutions (any scalar multiple of a valid $\\pi$ also satisfies it), and it's the normalisation constraint that pins down the unique, genuine probability distribution."
            },
            {
                "q": "What is a 'no-claims-discount' (NCD) system, modelled as a Markov chain?",
                "a": "A system where a policyholder's premium discount category changes each year based on claims, following fixed transition probabilities.",
                "explain": "This is the module's central real-world application, already previewed in Module 1 — a driver's NCD category (e.g. 0%, 20%, 40%, 60% discount) is the <em>state</em>, a year is the <em>time step</em>, and whether/how many claims occur that year determines the <em>transition</em>, making this a natural, heavily-examined worked example throughout this module."
            },
            {
                "q": "How would frequency-based experience rating be modelled using a Markov chain?",
                "a": "Each policyholder's rating category is a state, and claims experience each period determines transition probabilities between categories.",
                "explain": "This generalises the NCD example above to any experience-rating system, not just motor insurance discounts — the same Markov-chain machinery (transition matrix, stationary distribution, Chapman-Kolmogorov) applies wherever a policyholder moves between discrete pricing tiers based on periodic claims experience."
            },
            {
                "q": "What is a 'time-inhomogeneous' Markov chain?",
                "a": "A Markov chain where the transition probabilities can change over time, not just depend on the current state.",
                "explain": "This directly previews the time-homogeneous vs time-inhomogeneous distinction that Modules 4-5 develop fully for the continuous-time case — the <em>same</em> underlying idea (allowing rates/probabilities to vary with calendar time or age) applies equally in discrete time here."
            },
            {
                "q": "How would you simulate a Markov chain?",
                "a": "At each step, generate a random number to determine the next state according to the probabilities in the current state's row of the transition matrix.",
                "explain": "This is CS1's inverse transform method (Module 2 there) applied directly to a discrete distribution — at each step you're simply drawing from the categorical distribution given by the current state's row, using a uniform random number to pick which 'slice' of cumulative probability you land in."
            },
            {
                "q": "What information is lost when only the one-step transition matrix is retained?",
                "a": "Any information about how the chain arrived at its current state, which is irrelevant to future transitions under the Markov property.",
                "explain": "This is worth appreciating as a genuine <em>feature</em> of the Markov property, not a limitation — precisely <em>because</em> the past is irrelevant to the future given the present state, the one-step matrix does capture everything needed, with no loss of predictive power despite discarding the full history."
            },
            {
                "q": "How would the $n$-step transition matrix be used to find the probability of being in state $j$ after $n$ steps, starting in state $i$?",
                "a": "Take the $(i,j)$ entry of the matrix $P^n$.",
                "explain": "This is a direct application of the Chapman-Kolmogorov equations from earlier in this module — computing $P^n$ once (via repeated matrix multiplication) lets you read off the probability of <em>any</em> starting-state-to-ending-state transition over $n$ steps, all from a single matrix power calculation."
            },
            {
                "q": "Why might an actuary use a Markov chain model for a no-claims-discount system rather than tracking full claims history?",
                "a": "It's a tractable simplification that captures the essential dynamics without needing the full history.",
                "explain": "This closes the module by restating its overall justification — the Markov chain deliberately trades away some realism (real NCD outcomes might depend on more than just the current discount category) for enormous mathematical tractability, a trade-off worth weighing consciously rather than assuming automatically the right one."
            }
        ]
    },
    {
        "id": "m03",
        "title": "The two-state Markov model and the Poisson model",
        "description": "Covers the simplest continuous-time Markov models — a two-state (alive/dead) model with constant transition intensity, and the Poisson process, including inter-event time distributions.",
        "cards": [
            {
                "q": "What are the two states in the basic two-state Markov model of mortality?",
                "a": "'Alive' and 'Dead.'",
                "explain": "This module is the bridge between Module 2's discrete-time chains and Modules 4-5's general continuous-time jump processes — the two-state model is the <em>simplest</em> possible continuous-time Markov jump process, with just one absorbing transition, making it the natural place to introduce continuous-time ideas before generalising."
            },
            {
                "q": "What is the transition intensity $\\mu$ in the two-state model?",
                "a": "The instantaneous rate (force of mortality) of transitioning from alive to dead.",
                "explain": "This is exactly CM1's force of mortality $\\mu_x$ (Module 12 there) renamed and reframed in continuous-time Markov language — recognising them as the same underlying quantity, just viewed through two different conceptual lenses (deterministic survival model vs stochastic process), is useful for both subjects."
            },
            {
                "q": "How does the two-state Markov model relate to the random lifetime model?",
                "a": "It's an alternative formulation giving equivalent results for a single decrement — mortality only, no competing risks.",
                "explain": "This is worth appreciating as a genuine 'same destination, different route' result — CM1's survival-function approach and this module's Markov-process approach produce <em>identical</em> numerical answers for simple single-decrement mortality, but the Markov framework generalises far more naturally to multiple states and competing risks (Modules 4-5), which is exactly why CS2 introduces this alternative formulation."
            },
            {
                "q": "What is the probability of remaining in the 'alive' state for $t$ years, under a constant transition intensity $\\mu$?",
                "a": "$e^{-\\mu t}$",
                "explain": "This is exactly CM1's $_tp_x=\\exp(-\\int_0^t\\mu_{x+s}ds)$ collapsed to the constant-intensity special case, and it's precisely the same $e^{-\\lambda t}$ survival formula that recurs throughout CS2 (Poisson processes below, and CM2's ruin theory/credit risk) — a single mathematical pattern appearing across every 'constant hazard' context."
            },
            {
                "q": "What is a 'Poisson process'?",
                "a": "A counting process where events occur independently over time at a constant average rate $\\lambda$, with the number of events in any interval Poisson distributed.",
                "explain": "This is precisely CM2 Module 7's Poisson process, reused here — worth recognising it as the <em>same</em> construction studied from two angles: CM2 uses it to model claim arrivals for ruin theory, while this module connects it directly to the two-state mortality model, as the very next few cards make explicit."
            },
            {
                "q": "What is the distribution of the number of events of a Poisson process in an interval of length $t$?",
                "a": "Poisson with mean $\\lambda t$.",
                "explain": "This restates CS1 Module 2's Poisson-process-to-Poisson-distribution link directly in this module's context — the same relationship recurs across CS1, CM2 and CS2 precisely because the Poisson process is one of the most universally useful building blocks in actuarial modelling."
            },
            {
                "q": "What is the distribution of the time between consecutive events (inter-event times) of a Poisson process?",
                "a": "Exponential with rate $\\lambda$.",
                "explain": "This is the <em>same</em> exponential-holding-time result that underlies the two-state model's constant-intensity survival formula above — a Poisson process's inter-event gaps and a two-state model's time until the alive-to-dead transition are mathematically identical objects, both exponentially distributed with rate equal to the constant intensity."
            },
            {
                "q": "What is the distribution of the waiting time until the $k$-th event of a Poisson process?",
                "a": "Gamma (Erlang) distribution with shape $k$ and rate $\\lambda$.",
                "explain": "This connects directly to CS1 Module 2's gamma distribution card, which specifically flagged the gamma as 'generalising the exponential' — waiting for the <em>first</em> event is exponential (per the card above), and waiting for the $k$-th event is exactly $k$ independent exponential waits summed together, which is precisely what a gamma distribution with integer shape $k$ represents."
            },
            {
                "q": "What key property do the increments of a Poisson process have?",
                "a": "Independent increments — the number of events in non-overlapping intervals are independent of each other.",
                "explain": "This is exactly the same independent-increments property that defines Brownian motion in CM2 Module 7 — both are 'independent increment processes', just one counts discrete events (Poisson) and the other models continuous fluctuation (Brownian motion), a useful structural parallel across the two subjects."
            },
            {
                "q": "How is the Poisson process related to the Poisson model of mortality?",
                "a": "Deaths under a constant-intensity two-state model can be viewed as a Poisson process with rate equal to the transition intensity.",
                "explain": "This makes the connection flagged throughout this module fully explicit — for a <em>group</em> of lives each transitioning alive-to-dead at the same constant intensity $\\mu$, the resulting stream of death events across the group behaves exactly like a Poisson process with rate related to $\\mu$ and the group size, unifying the individual-level survival model and the group-level event-counting model."
            },
            {
                "q": "What is the key assumption of 'constant transition intensity' in these simple models?",
                "a": "The rate of transitioning between states doesn't change over time (or age), giving exponential holding times.",
                "explain": "This is the module's headline simplifying assumption, worth flagging as the <em>direct set-up</em> for Module 5's whole existence — real mortality varies with age (a point CM1 makes repeatedly), so this constant-intensity assumption is a deliberate first approximation that Module 5's time-inhomogeneous extension exists specifically to relax."
            },
            {
                "q": "How would you derive the maximum likelihood estimator of $\\mu$ in the two-state model?",
                "a": "$\\hat\\mu = \\frac{\\text{number of deaths observed}}{\\text{total waiting time (central exposed to risk) observed}}$",
                "explain": "This is exactly CM1's mortality estimation formula (from the earlier CM1 study material) derived here from first principles via the Poisson-process likelihood — it directly previews Module 9's 'exposed to risk' topic, which develops this exact estimator (and its underlying principle of correspondence) in much greater depth."
            },
            {
                "q": "What is the asymptotic distribution of the maximum likelihood estimator of a constant transition intensity?",
                "a": "Approximately normal, with variance related to the inverse of the total exposure/information observed.",
                "explain": "This is CS1 Module 8's general MLE large-sample-normality result, applied specifically to this transition-intensity estimator — more exposure (more waiting time observed) gives a more precise estimate, exactly the same 'more data reduces variance' pattern seen throughout CS1's estimation theory."
            },
            {
                "q": "Why is the two-state model considered a special/simple case of the general Markov jump process framework?",
                "a": "It has only two states and a single constant intensity, whereas general Markov jump processes can have many states and time-varying intensities.",
                "explain": "This closes the module by explicitly positioning it within the bigger CS2 picture — everything covered here (the two-state model, its survival formula, its MLE) is a special case of Module 4's general time-homogeneous framework, with the number of states set to 2 and only one possible transition direction (alive to dead, no return)."
            },
            {
                "q": "How would the Poisson process be used to model claim arrivals in general insurance?",
                "a": "Treating each claim as an event of a Poisson process with a given claim frequency rate.",
                "explain": "This closes the module with the direct link forward to Module 19's compound Poisson risk models, and back to CM2 Module 17's ruin theory — the <em>same</em> Poisson-process claim-arrival assumption underlies both this module's mortality application and the general-insurance risk-modelling topics later in this subject."
            }
        ]
    },
    {
        "id": "m04",
        "title": "Time-homogeneous Markov jump processes",
        "description": "Extends the two-state model to multi-state continuous-time Markov processes with constant (time-independent) transition intensities, using the Kolmogorov equations.",
        "cards": [
            {
                "q": "What is a 'Markov jump process'?",
                "a": "A continuous-time stochastic process that moves between a discrete set of states, with the Markov property, changing state at random jump times.",
                "explain": "This module generalises Module 3's two-state model to <em>any</em> number of states — the two-state alive/dead model is exactly a Markov jump process with the state space restricted to 2 states and only one possible transition, and everything developed here applies to that special case too."
            },
            {
                "q": "What does 'time-homogeneous' mean for a Markov jump process?",
                "a": "The transition intensities between states don't depend on the current time — only on the states involved.",
                "explain": "This is the same simplifying assumption Module 3 made for the two-state model, now stated as a general property this module's whole framework relies on — Module 5's entire purpose is relaxing exactly this assumption, so recognising it clearly here sets up that contrast."
            },
            {
                "q": "What is the 'transition intensity' $\\mu_{ij}$ between states $i$ and $j$?",
                "a": "The instantaneous rate of transitioning directly from state $i$ to state $j$, given currently in state $i$.",
                "explain": "This generalises Module 3's single intensity $\\mu$ (alive to dead only) into a whole <em>matrix</em> of intensities, one for every possible pair of states — a 3-state sickness model (healthy/sick/dead, per a card below) needs several such $\\mu_{ij}$ values to fully specify all the possible transitions."
            },
            {
                "q": "What are the (forward) Kolmogorov equations used for?",
                "a": "Describing how the transition probabilities of a Markov jump process evolve over time via a system of differential equations.",
                "explain": "This is the multi-state generalisation of Module 3's simple exponential survival formula $e^{-\\mu t}$ — with more than two states, there's no single clean closed-form formula for every transition probability in general, so a system of differential equations (solved directly or numerically) is needed instead."
            },
            {
                "q": "What is the general form of the Kolmogorov forward equations?",
                "a": "$\\frac{d}{dt}p_{ij}(t) = \\sum_{k \\neq j} p_{ik}(t)\\mu_{kj} - p_{ij}(t)\\mu_j$, where $\\mu_j$ is the total rate of leaving state $j$.",
                "explain": "Read this as a rate-of-change balance: the probability of being in state $j$ at time $t$ increases from <em>flows in</em> (the first term, arriving from every other state $k$) and decreases from <em>flows out</em> (the second term, leaving state $j$ at its total exit rate) — an intuitive 'inflow minus outflow' structure once you see it this way."
            },
            {
                "q": "How would you use the Kolmogorov equations in a simple case?",
                "a": "Set up and solve the system of differential equations directly, or use known closed-form solutions for standard small models.",
                "explain": "For small state spaces (2 or 3 states) with simple structures, these differential equations often DO have clean closed-form solutions worth memorising for standard exam scenarios — but for anything more complex, numerical solution is the practical fallback, foreshadowing the simulation techniques covered later in this module."
            },
            {
                "q": "What does it mean for transition intensities to be 'time-independent' in this context?",
                "a": "They remain constant regardless of elapsed or calendar time, depending only on current/destination state.",
                "explain": "This restates the time-homogeneous definition from earlier in this module, emphasising the specific <em>phrasing</em> worth using precisely — 'time-independent' means the intensities don't change with calendar time OR with how long someone has been in their current state, both conditions Module 5 will separately relax."
            },
            {
                "q": "Give an example of a multi-state model that could be a time-homogeneous Markov jump process.",
                "a": "A simple sickness model with 'healthy,' 'sick,' and 'dead' states, with constant transition rates between them.",
                "explain": "This is the standard worked example throughout this module and the next — worth noting it has richer structure than Module 3's two-state model: it allows <em>recovery</em> (sick back to healthy), a transition direction the pure mortality model doesn't have, making it a proper multi-state (not just multi-decrement) illustration."
            },
            {
                "q": "How would you simulate a Markov jump process?",
                "a": "Simulate an exponential holding time (using the total exit rate) before jumping, then choose the destination state proportional to each transition intensity.",
                "explain": "This two-step recipe is worth understanding precisely: first, <em>when</em> does the next jump happen (an exponential draw using the total exit rate, per the holding-time card below); second, <em>where</em> does it jump to (a categorical draw where each destination's probability is proportional to its own intensity relative to the total) — this is the standard 'Gillespie algorithm' style simulation approach."
            },
            {
                "q": "What is the total 'exit rate' from a state $i$ in a Markov jump process?",
                "a": "The sum of all transition intensities out of state $i$ to every other reachable state.",
                "explain": "This single number ($\\mu_i=\\sum_{j\\neq i}\\mu_{ij}$) is exactly the $\\mu_j$ appearing in the Kolmogorov equations above, and it's precisely the rate parameter used for the exponential holding-time simulation step described in the card above."
            },
            {
                "q": "How is the holding time in a given state distributed, under time-homogeneous intensities?",
                "a": "Exponentially distributed, with rate equal to the total exit rate from that state.",
                "explain": "This directly generalises Module 3's alive-to-dead holding time (exponential with rate $\\mu$) to a multi-state setting — the holding time in <em>any</em> given state is exponential with rate equal to that state's <em>total</em> exit rate, summing all the ways of leaving, not just one single destination."
            },
            {
                "q": "Why is the exponential holding time a natural consequence of the Markov property?",
                "a": "The memoryless property of the exponential distribution matches the requirement that future transitions don't depend on elapsed time in the current state.",
                "explain": "This is a deep connection worth appreciating — the Markov property (future depends only on current state, not how long you've been there) and the exponential distribution's memorylessness (CS1 Module 2) are really the <em>same</em> statement in two different mathematical languages; a time-homogeneous Markov jump process is <em>forced</em> to have exponential holding times precisely because of this equivalence."
            },
            {
                "q": "What data would you need to estimate the transition intensities of a time-homogeneous Markov jump process?",
                "a": "The number of observed transitions between each pair of states, and the total waiting time individuals spent exposed in each state.",
                "explain": "This directly previews Module 9's 'exposed to risk' topic, extending Module 3's simple two-state MLE formula to the multi-state case — each intensity $\\mu_{ij}$ gets its own MLE, using the observed count of $i\\to j$ transitions divided by total time individuals spent exposed while in state $i$."
            },
            {
                "q": "How does a time-homogeneous multi-state model generalise the simple two-state (alive/dead) model?",
                "a": "It allows more than two states and more complex transition patterns (e.g. recovery, multiple causes of exit).",
                "explain": "This restates the module's relationship to Module 3 explicitly — everything from that simpler module (exponential holding times, MLE via exposure, the Poisson-process connection) carries over unchanged in spirit, just applied to a richer web of possible states and transitions rather than a single alive-to-dead decrement."
            },
            {
                "q": "Why might 'time-homogeneous' be an unrealistic assumption for modelling mortality across a wide age range?",
                "a": "Mortality rates change with age, so a constant intensity would poorly approximate this.",
                "explain": "This closes the module by directly motivating Module 5 — a time-homogeneous model might be a reasonable approximation over a <em>narrow</em> age band, but stretched across a wide range it clashes with CM1's own life-table evidence that mortality changes substantially and systematically with age, exactly the gap Module 5's time-inhomogeneous framework exists to close."
            }
        ]
    },
    {
        "id": "m05",
        "title": "Time-inhomogeneous Markov jump processes",
        "description": "Extends the Markov jump process framework to allow transition intensities that depend on time (e.g. age) and, more generally, on duration in a state.",
        "cards": [
            {
                "q": "What does 'time-inhomogeneous' mean for a Markov jump process?",
                "a": "The transition intensities can depend on the current time (e.g. age), not just the states involved.",
                "explain": "This module is precisely the relaxation of Module 4's time-homogeneous assumption flagged as unrealistic at the end of that module — everything about the <em>state-space</em> structure (Kolmogorov equations, exit rates) carries over, only now every intensity can change as time/age progresses."
            },
            {
                "q": "How do the Kolmogorov equations change for a time-inhomogeneous process?",
                "a": "The transition intensities $\\mu_{ij}(t)$ become functions of time $t$, giving differential equations with time-varying coefficients.",
                "explain": "This is a direct, minimal-looking notational change to Module 4's forward equations (each $\\mu_{ij}$ simply gains a $(t)$), but it has a substantial mathematical consequence flagged in a later card: constant-coefficient differential equations generally have clean closed-form solutions, while time-varying-coefficient ones usually don't."
            },
            {
                "q": "Why is a time-inhomogeneous model more realistic for modelling human mortality across ages?",
                "a": "Mortality rates vary systematically with age, which a constant-intensity model cannot capture.",
                "explain": "This directly resolves Module 4's closing critique — a time-inhomogeneous force of mortality $\\mu_x$ that increases with age (following, say, CM1's Gompertz or Makeham laws) is exactly what's needed to properly represent real human mortality across a full lifespan, rather than pretending it's constant."
            },
            {
                "q": "What is a 'duration-dependent' Markov process?",
                "a": "A process where transition intensities depend on how long the individual has already spent in their current state, not just age/time.",
                "explain": "This is a <em>different</em> kind of dependence from time-inhomogeneity — 'time-inhomogeneous' means intensities depend on <em>calendar</em> time/age (the same for everyone at that age), while 'duration-dependent' means they depend on how long <em>this specific individual</em> has been in their current state, which can differ between two people of the same age."
            },
            {
                "q": "Give an example of a real-world scenario where duration dependence matters.",
                "a": "A sickness model, where recovery probability might depend on how long someone has already been sick.",
                "explain": "This is the module's central worked application — someone who's been sick for one week has a different (usually higher) recovery chance than someone who's been sick for a year, a pattern age alone cannot capture, which is exactly why this needs duration as a <em>separate</em> dimension from age."
            },
            {
                "q": "How can duration dependence be incorporated into a Markov model while retaining a Markov structure?",
                "a": "By expanding the state space to include duration as part of the state, restoring the Markov property.",
                "explain": "This is a clever technical trick worth understanding — rather than abandoning the Markov property (which would break the whole framework), you redefine what counts as a 'state' to include <em>both</em> the health status <em>and</em> the elapsed duration, so that 'current state' alone (in this expanded sense) again fully determines future behaviour."
            },
            {
                "q": "What is a 'marriage model,' as an example of a Markov process application?",
                "a": "A model tracking transitions between single, married, widowed, and divorced states, used e.g. in pension valuations.",
                "explain": "This is an important real actuarial application worth remembering by name — pension schemes often need to value spouse's/dependant's benefits (echoing CM1 Module 20's reversionary annuities), and a marriage model provides the multi-state machinery for estimating the probability a member has an eligible spouse at each future age."
            },
            {
                "q": "How would you write the Kolmogorov equations for a model where intensities depend on both age and duration?",
                "a": "Include both age $t$ and duration $z$ as arguments, e.g. $\\mu_{ij}(t,z)$, within the differential equation framework.",
                "explain": "This is the fully general notation combining both extensions from this module — $t$ tracks calendar-time/age dependence, $z$ tracks duration-in-state dependence, and both can operate simultaneously, exactly the expanded state space described in the card above made mathematically explicit."
            },
            {
                "q": "Why might sickness models need duration-dependent intensities specifically for the 'recovery' transition?",
                "a": "Recovery chance often changes systematically the longer someone has already been ill.",
                "explain": "This restates the sickness example above as a specific, testable claim worth having ready for exam scenarios — typically recovery probability is <em>highest</em> shortly after falling sick and declines the longer illness persists (a pattern real income-protection claims data consistently shows), which is precisely why duration matters most for <em>this</em> particular transition."
            },
            {
                "q": "How would you simulate a time-inhomogeneous Markov jump process?",
                "a": "Simulate holding times using the time-varying intensities applicable at each point, since exact exponential holding times only apply under time-homogeneity.",
                "explain": "This is a genuine complication compared with Module 4's simulation recipe — since intensities keep changing as time passes, you can no longer draw <em>one</em> clean exponential holding time for the whole stay in a state; instead, the simulation must repeatedly re-evaluate the <em>current</em> intensities as time moves forward within that stay."
            },
            {
                "q": "What complicates solving the Kolmogorov equations for time-inhomogeneous models?",
                "a": "The equations no longer have simple constant-coefficient closed-form solutions in general, often requiring numerical methods.",
                "explain": "This is the direct mathematical cost of the flexibility this module introduces — Module 4's constant-intensity equations often solve neatly by hand; once intensities become functions of time, numerical integration (or simulation, per the card above) usually becomes the only practical route to actual numbers."
            },
            {
                "q": "How does mortality projection relate to time-inhomogeneous Markov modelling?",
                "a": "Mortality projection explicitly models how mortality intensities change over calendar time, an application of time-inhomogeneous ideas.",
                "explain": "This directly previews Module 12's whole topic — mortality projection specifically studies how $\\mu_x(t)$ changes not just with <em>age</em> but with <em>calendar year</em> (mortality improvement over time), which is a further, distinct layer of time-dependence beyond even what this module introduces."
            },
            {
                "q": "What data challenge arises when estimating duration-dependent transition intensities?",
                "a": "You need data broken down by both age/time and duration in state, requiring more granular (and often sparser) data.",
                "explain": "This is the direct practical cost of the expanded-state-space trick from earlier in this module — splitting data by <em>two</em> dimensions (age and duration) instead of one inevitably means fewer observations in each individual cell, which is exactly the kind of data-sparsity challenge Module 9's exposed-to-risk material and CS1's estimation theory both warn about."
            },
            {
                "q": "Why is understanding age- and duration-dependence important for health/income protection insurance?",
                "a": "Both age and time already spent claiming affect recovery probability, affecting reserving and pricing.",
                "explain": "This closes the module with its central practical justification — an income protection insurer needs <em>both</em> dimensions to reserve accurately: an older claimant recovers differently from a younger one (age effect), and someone who's been claiming for years recovers differently from someone in their first month (duration effect), and ignoring either would materially mis-price or under-reserve the product."
            },
            {
                "q": "How would a Markov jump process model be simulated as a tool for modelling more generally?",
                "a": "By repeatedly simulating individual paths according to the model's intensities, and aggregating results across many simulated paths.",
                "explain": "This closes the module by generalising the simulation technique to its broadest actuarial use — rather than solving Kolmogorov equations analytically (often impossible for realistic time- and duration-dependent models), simulating thousands of individual member/policyholder paths and averaging the results is the standard practical approach used in real pension and health insurance modelling work."
            }
        ]
    },
    {
        "id": "m06",
        "title": "Survival models",
        "description": "Introduces the mathematical framework for modelling time until an event (e.g. death) as a random variable — survival function, force of mortality, and key relationships including Gompertz and Makeham's laws.",
        "cards": [
            {
                "q": "What is the survival function $_tp_x$ for a life aged $x$?",
                "a": "The probability that the life survives at least $t$ further years.",
                "explain": "This module returns to CM1's life-table world (Module 12 there), but rebuilds it from first principles as a formal <em>random variable</em> framework — the same $_tp_x$ notation you already know, now developed with full mathematical rigour (survival functions, hazard rates, expectation/variance) rather than just the life-table ratios CM1 used."
            },
            {
                "q": "What is the force of mortality $\\mu_x$?",
                "a": "The instantaneous rate of mortality at exact age $x$, defined so that $\\mu_x = -\\frac{d}{dx}\\ln S(x)$.",
                "explain": "This is exactly the two-state model's transition intensity from Module 3, restated in survival-function language — the formula shows precisely <em>how</em> $\\mu_x$ relates to the survival function $S(x)$: it's the (negative) logarithmic derivative, capturing the instantaneous proportional rate of decline in survival probability at each age."
            },
            {
                "q": "How is the survival function related to the force of mortality via an integral?",
                "a": "$_tp_x = \\exp\\left(-\\int_0^t \\mu_{x+s}\\,ds\\right)$",
                "explain": "This is the integrated version of the force-of-mortality definition above, and it's exactly Module 5's time-inhomogeneous survival formula applied to age-dependent mortality specifically — worth recognising it collapses to Module 3's simple $e^{-\\mu t}$ exactly when $\\mu$ happens to be constant across the whole interval."
            },
            {
                "q": "What is the 'consistency condition' for random lifetime models across different starting ages?",
                "a": "$_{t+s}p_x = {_tp_x}\\cdot{_sp_{x+t}}$",
                "explain": "This is precisely the Chapman-Kolmogorov equations from Module 2, restated for the two-state survival model — surviving $t+s$ years from age $x$ is equivalent to surviving $t$ years to age $x+t$, <em>then</em> surviving a further $s$ years from there, and the Markov property is exactly what guarantees these two routes multiply together consistently."
            },
            {
                "q": "What does Gompertz's law of mortality state?",
                "a": "The force of mortality increases exponentially with age: $\\mu_x = Bc^x$",
                "explain": "This is a specific, testable functional form for $\\mu_x$ worth remembering exactly — it's a parametric model with just two parameters ($B$, $c$) capturing the empirical observation that mortality rises roughly exponentially through middle and old age, and it directly previews Module 11's parametric-formula graduation method."
            },
            {
                "q": "What does Makeham's law of mortality state?",
                "a": "$\\mu_x = A + Bc^x$ — a constant background component plus an exponentially increasing component.",
                "explain": "This is Gompertz's law with one extra parameter ($A$) added — the closing card of this module explains exactly why that addition matters: it lets the model represent a genuine background hazard (accidents, non-age-related causes) that doesn't vanish even at young ages, where pure Gompertz tends to fit poorly."
            },
            {
                "q": "What is the 'curtate future lifetime' $K_x$?",
                "a": "The integer number of complete future years lived by a life aged $x$ before death.",
                "explain": "This is exactly CM1 Module 15's $K_x$ random variable, rebuilt here with the full probability-function and expectation/variance machinery CS2 develops — recognising it as the same object studied in CM1 means the intuition (it's what makes $Z=v^{K_x+1}$ meaningful for assurance pricing) carries straight across."
            },
            {
                "q": "What is the probability function of the curtate future lifetime $K_x$?",
                "a": "$P(K_x = k) = {_kp_x}\\cdot q_{x+k}$",
                "explain": "This says precisely: to have $K_x=k$, the life must survive $k$ full years (probability $_kp_x$) and then die within the following year (probability $q_{x+k}$) — the product of these two events, since they must both happen for $K_x$ to take exactly that value."
            },
            {
                "q": "What does $e_x$ (the 'curtate expectation of life') represent?",
                "a": "The expected number of complete future years lived by a life aged $x$.",
                "explain": "This is simply $E[K_x]$, computed from the probability function above using the standard expectation formula $\\sum_k k\\cdot P(K_x=k)$ — a direct application of CS1's expectation machinery to this specific discrete random variable."
            },
            {
                "q": "What does $\\overset{\\circ}{e}_x$ (the 'complete expectation of life') represent?",
                "a": "The expected complete future lifetime (not restricted to whole years) of a life aged $x$.",
                "explain": "This is the <em>continuous</em> analogue of $e_x$ — while $K_x$ only counts whole completed years, the true future lifetime $T_x$ can end at any fractional point within a year, and $\\overset{\\circ}{e}_x=E[T_x]$ captures that finer-grained expectation, which is naturally somewhat larger than $e_x$, per the next card."
            },
            {
                "q": "What is the approximate relationship between $e_x$ and $\\overset{\\circ}{e}_x$?",
                "a": "$\\overset{\\circ}{e}_x \\approx e_x + 0.5$",
                "explain": "The intuition: $K_x$ always rounds <em>down</em> the true (continuous) future lifetime to a whole number of completed years, systematically understating it — assuming deaths are spread roughly uniformly through each year of age (a UDD-style assumption, echoing CM1 Module 12), the average 'lost' fraction from rounding down is about half a year."
            },
            {
                "q": "What is the 'two-state model of a single decrement', and how does it compare to the random lifetime model?",
                "a": "A continuous-time Markov model with 'alive' and 'dead' states, mathematically equivalent to the random future lifetime model.",
                "explain": "This closes the loop back to Module 3 explicitly — this whole module has been building the <em>same</em> survival-probability machinery from a random-variable perspective that Module 3 built from a Markov-process perspective, and this card confirms the two are mathematically interchangeable, just different lenses on identical content."
            },
            {
                "q": "How would you derive the variance of the curtate future lifetime $K_x$?",
                "a": "$\\text{Var}(K_x) = E[K_x^2] - (E[K_x])^2$, calculated from the probability function of $K_x$.",
                "explain": "This is CS1's standard variance formula (Module 2 there) applied directly here — you need $E[K_x^2]=\\sum_k k^2\\cdot P(K_x=k)$ computed from the same probability function used to find $e_x=E[K_x]$ above, then combined via this standard identity."
            },
            {
                "q": "Why is the force of mortality a more fundamental quantity than $q_x$ for continuous-time modelling?",
                "a": "It's defined instantaneously and directly links to the survival function via integration.",
                "explain": "This is worth appreciating as a genuine hierarchy: $q_x$ (a one-year discrete probability) can always be <em>derived</em> from $\\mu_x$ via integration (per the formula earlier in this module), but the reverse generally requires an extra distributional assumption (like UDD) to interpolate — $\\mu_x$ carries strictly more information, which is exactly why continuous-time models (this whole subject) build from it directly."
            },
            {
                "q": "What advantage does Makeham's law have over Gompertz's law?",
                "a": "The added constant term $A$ better captures a background level of mortality risk, improving fit especially at younger ages.",
                "explain": "This closes the module by explaining precisely <em>why</em> Makeham added that one extra parameter — pure Gompertz ($\\mu_x=Bc^x$) predicts mortality shrinking toward zero at very young ages, which is unrealistic (accidents and other non-senescent causes create a real floor), and Makeham's constant $A$ fixes exactly this by never letting $\\mu_x$ fall below $A$, however small the exponential term becomes."
            }
        ]
    },
    {
        "id": "m07",
        "title": "Estimating the lifetime distribution",
        "description": "Covers non-parametric estimation of survival functions from censored data — the Kaplan-Meier and Nelson-Aalen estimators.",
        "cards": [
            {
                "q": "What is 'censoring' in survival data?",
                "a": "When the exact event time is not observed for some individuals, only that it occurred after (or before) a certain point.",
                "explain": "This module tackles a practical problem Module 6's theoretical framework glossed over — real mortality studies rarely observe every individual's death; many are still alive when the study ends, or leave for unrelated reasons, and this module's whole toolkit exists to estimate survival correctly despite this incomplete information."
            },
            {
                "q": "What is 'right censoring'?",
                "a": "When an individual is known to have survived to a certain point, but their exact time of death beyond that is unknown.",
                "explain": "This is by far the most common censoring type in actuarial mortality studies — someone still alive when a study concludes, or who withdraws from an investigation, contributes <em>known</em> information (they survived at least this long) even though their exact death time remains unobserved, and simply ignoring them would waste this partial information."
            },
            {
                "q": "Why can't the empirical survival function simply be estimated by the proportion still alive, when censoring is present?",
                "a": "Censored individuals' true event times are unknown, so excluding or misclassifying them would bias the estimate.",
                "explain": "This is the module's central motivating problem — naively excluding censored individuals throws away real information they <em>did</em> contribute (surviving up to their censoring point), while naively treating them as 'still alive forever' or 'died at censoring' both introduce systematic bias, which is exactly why the Kaplan-Meier estimator's more careful construction is needed."
            },
            {
                "q": "What is the Kaplan-Meier (product-limit) estimator used for?",
                "a": "Estimating the survival function non-parametrically from censored data.",
                "explain": "'Non-parametric' is the key word — unlike Module 6's Gompertz/Makeham laws (which assume a specific functional form), Kaplan-Meier makes no assumption about the <em>shape</em> of the survival curve at all, estimating it directly and flexibly from the observed data, censoring properly accounted for."
            },
            {
                "q": "What is the general form of the Kaplan-Meier estimator?",
                "a": "$\\hat{S}(t) = \\prod_{t_i \\le t} \\left(1 - \\frac{d_i}{n_i}\\right)$",
                "explain": "The intuition worth holding onto: this is a <em>product</em> of one-step survival factors, one for each observed death time up to $t$ — it's exactly the consistency-condition idea from Module 6 ($_{t+s}p_x={_tp_x}\\cdot{_sp_{x+t}}$) applied empirically, chaining together small observed survival probabilities rather than assuming a smooth formula."
            },
            {
                "q": "What does $d_i$ represent in the Kaplan-Meier formula?",
                "a": "The number of deaths observed at time $t_i$.",
                "explain": "This is exactly the same $d_x$ concept from CM1's life table (Module 12 there), just tracked at each <em>observed</em> death time in the actual sample rather than at fixed integer ages in a published table."
            },
            {
                "q": "What does $n_i$ represent in the Kaplan-Meier formula?",
                "a": "The number of individuals still 'at risk' just before time $t_i$.",
                "explain": "This is the crucial quantity that correctly accounts for censoring — $n_i$ shrinks not only from deaths but also from earlier censoring events, so individuals who were censored before $t_i$ are correctly <em>excluded</em> from the risk set at $t_i$, having already contributed their information up to their own censoring point."
            },
            {
                "q": "What is the Nelson-Aalen estimator used for?",
                "a": "Estimating the cumulative hazard function non-parametrically from censored data.",
                "explain": "This is a close cousin of Kaplan-Meier, targeting a slightly different quantity — rather than estimating survival probability directly, it estimates the <em>cumulative hazard</em> $H(t)$ (roughly, $\\int_0^t\\mu_s\\,ds$ from Module 6), and the next two cards show precisely how the two estimators relate."
            },
            {
                "q": "What is the general form of the Nelson-Aalen estimator?",
                "a": "$\\hat{H}(t) = \\sum_{t_i \\le t} \\frac{d_i}{n_i}$",
                "explain": "Compare this directly to Kaplan-Meier above — same $d_i/n_i$ building block at each death time, but <em>summed</em> here rather than combined as $(1-d_i/n_i)$ and multiplied, reflecting that cumulative hazard adds up additively while survival probability compounds multiplicatively."
            },
            {
                "q": "How is the Nelson-Aalen estimator related to an alternative survival function estimate?",
                "a": "$\\hat{S}(t) = e^{-\\hat{H}(t)}$",
                "explain": "This is exactly Module 6's formula $_tp_x=\\exp(-\\int_0^t\\mu_{x+s}\\,ds)$, with the Nelson-Aalen cumulative hazard estimate plugged in for the integral — this gives a <em>second</em>, slightly different way to estimate the survival function from the same censored data, worth comparing against Kaplan-Meier's direct product formula."
            },
            {
                "q": "How is the variance of the Kaplan-Meier estimator typically estimated?",
                "a": "Using Greenwood's formula, summing contributions from each observed death time.",
                "explain": "This is worth connecting to CS1's estimator-variance concepts (Module 8 there) — Greenwood's formula gives a way to construct confidence intervals <em>around</em> the Kaplan-Meier survival curve, not just a single point estimate, letting you express genuine statistical uncertainty about the estimated survival probabilities."
            },
            {
                "q": "What happens to confidence in the Kaplan-Meier estimate as time increases beyond the range of most of the data?",
                "a": "It becomes less reliable (wider confidence intervals), since fewer individuals remain at risk.",
                "explain": "This directly follows from Greenwood's formula above — as $n_i$ (the risk set) shrinks toward the tail of the study (fewer people still being followed, more having died or been censored already), each remaining term contributes more uncertainty, widening the confidence interval exactly where the estimate is least trustworthy."
            },
            {
                "q": "What do 'proportional hazards models' (like the Cox model) add beyond Kaplan-Meier/Nelson-Aalen?",
                "a": "They allow the hazard to depend on covariates, rather than just estimating a single overall survival curve.",
                "explain": "This directly previews Module 8's whole topic — Kaplan-Meier and Nelson-Aalen give you <em>one</em> survival curve for the whole sample (or one per group if you split it manually); the Cox model instead lets covariates (age, smoking status, policy type, etc.) continuously adjust the hazard, a richer modelling framework."
            },
            {
                "q": "What is the Cox proportional hazards model's key structural assumption?",
                "a": "The hazard is the baseline hazard multiplied by a factor depending on covariates, constant (proportional) over time.",
                "explain": "This is worth previewing carefully since Module 8 develops it fully — 'proportional' is the crucial word: whatever the <em>shape</em> of the baseline hazard over time (left completely unspecified, non-parametric like this module's estimators), covariates only scale it up or down by a constant factor, never changing its shape."
            },
            {
                "q": "Why is partial likelihood used to estimate the Cox model's coefficients, rather than full likelihood?",
                "a": "It allows estimation of covariate effects without needing to specify the unknown baseline hazard function.",
                "explain": "This closes the module by explaining the clever trick behind the Cox model's practicality — a full likelihood would require modelling the baseline hazard's exact shape (defeating the whole 'non-parametric flexibility' point of this module's approach), while partial likelihood cleverly sidesteps that by only using the <em>order</em> of events, letting the baseline hazard cancel out of the maths entirely."
            }
        ]
    },
    {
        "id": "m08",
        "title": "Proportional hazards models",
        "description": "Covers the Cox proportional hazards model for incorporating covariates into survival analysis, including partial likelihood estimation.",
        "cards": [
            {
                "q": "What is the general form of the Cox proportional hazards model?",
                "a": "$h_i(t) = h_0(t)\\exp(\\beta^T z_i)$, where $h_0(t)$ is the baseline hazard and $z_i$ are covariates.",
                "explain": "This is CS1's GLM framework (Module 13 there) reused in a survival-analysis context — the $\\exp(\\beta^Tz_i)$ multiplier is exactly a log-link linear predictor, ensuring the covariate adjustment is always positive, just as the Poisson GLM's log link guaranteed positive predicted counts."
            },
            {
                "q": "What does 'proportional hazards' mean?",
                "a": "The ratio of hazards between any two individuals with different covariates is constant over time.",
                "explain": "This is worth verifying directly from the formula: the ratio $h_i(t)/h_j(t) = \\exp(\\beta^T(z_i-z_j))$ has the baseline hazard $h_0(t)$ <em>cancel out</em> completely, leaving a constant that doesn't depend on $t$ at all — this cancellation is precisely what 'proportional' means, and it's also exactly the property partial likelihood exploits."
            },
            {
                "q": "Why is the Cox model described as 'semi-parametric'?",
                "a": "Covariate effects are modelled parametrically, but the baseline hazard $h_0(t)$ is left unspecified.",
                "explain": "This positions the Cox model precisely <em>between</em> Module 6's fully parametric approach (Gompertz/Makeham, a specific formula for the whole hazard) and Module 7's fully non-parametric approach (Kaplan-Meier, no formula at all) — it takes a parametric form for covariate <em>effects</em> while keeping the baseline shape completely flexible."
            },
            {
                "q": "What is the 'partial likelihood' in the Cox model?",
                "a": "A likelihood based only on the order of events (and who was at risk), allowing estimation of $\\beta$ without specifying $h_0(t)$.",
                "explain": "This is precisely the trick previewed at the end of Module 7 — because $h_0(t)$ cancels out of the hazard <em>ratio</em> (per the proportional-hazards card above), a likelihood built purely from 'who failed first, among who was still at risk' never needs to know what $h_0(t)$ actually looks like."
            },
            {
                "q": "What are 'ties' in the context of the Cox model's partial likelihood?",
                "a": "When two or more individuals experience the event at exactly the same observed time.",
                "explain": "Ties are a genuine practical complication for partial likelihood, since the clean 'who failed <em>first</em>' ordering logic breaks down when two failures are recorded simultaneously — various approximation methods exist to handle this in practice, a detail worth knowing exists even without memorising each specific method."
            },
            {
                "q": "What is the asymptotic distribution of the Cox model's partial likelihood estimator $\\hat\\beta$?",
                "a": "Approximately normal, for large samples, allowing standard hypothesis tests and confidence intervals.",
                "explain": "This is CS1's general MLE asymptotic-normality result (Module 8 there) applied to partial likelihood specifically — even though partial likelihood isn't a <em>full</em> likelihood, it behaves like one asymptotically, which is exactly why standard $z$-tests and confidence intervals for $\\hat\\beta$ remain valid."
            },
            {
                "q": "How would you interpret a positive coefficient $\\beta_j$ for a covariate in the Cox model?",
                "a": "An increase in that covariate is associated with a higher hazard, holding other covariates constant.",
                "explain": "This is the same 'holding other covariates constant' interpretation used throughout CS1's regression content (Module 12 there) — a positive $\\beta_j$ means, all else equal, higher values of that covariate are associated with a <em>worse</em> (higher-hazard, shorter-survival) outcome."
            },
            {
                "q": "How would you interpret $e^{\\beta_j}$ in the Cox model?",
                "a": "The 'hazard ratio' — the multiplicative change in hazard for a one-unit increase in $z_j$.",
                "explain": "This is directly analogous to CS1's GLM 'relative risk' interpretation for a Poisson model's exponentiated coefficient — a hazard ratio of, say, 1.5 for smoking status means a smoker's hazard is 50% higher than a non-smoker's at every point in time, an intuitive way to communicate a covariate's effect."
            },
            {
                "q": "What is a key assumption of the Cox model that should be checked in practice?",
                "a": "That the proportional hazards assumption actually holds — covariate effects don't change over time.",
                "explain": "This is worth treating as a genuine, checkable model assumption, not just taken on faith — just as CS1's linear regression needs residual diagnostics (Module 12 there), the Cox model's proportionality assumption can and should be tested against the data before trusting the fitted hazard ratios."
            },
            {
                "q": "How could a time-varying covariate effect be incorporated into an extended Cox model?",
                "a": "By including a time-dependent covariate or interaction term (covariate times a function of time).",
                "explain": "This is the direct fix for the proportional-hazards assumption failing — if a covariate's effect strengthens or weakens over time (e.g. a treatment's benefit fading), allowing $\\beta$ itself to depend on $t$ (via an interaction term) relaxes the strict proportionality this module otherwise assumes."
            },
            {
                "q": "What is the role of covariates in a proportional hazards model, compared with the basic survival model?",
                "a": "They allow the hazard to vary by individual characteristics, rather than assuming everyone shares the same survival distribution.",
                "explain": "This restates the module's core upgrade over Module 6/7's single-population survival curves — real populations are heterogeneous (smokers vs non-smokers, different policy types), and the Cox model lets that heterogeneity be modelled explicitly rather than averaged away into one curve."
            },
            {
                "q": "Why might the Cox model be preferred over fitting a fully parametric survival model with covariates?",
                "a": "It avoids needing to correctly specify the baseline hazard's functional form.",
                "explain": "This restates the semi-parametric advantage from earlier in this module as a practical justification — if you're not confident the baseline hazard follows a clean Gompertz/Makeham-style shape (Module 6), the Cox model sidesteps that risk entirely by never requiring you to specify it."
            },
            {
                "q": "What data would you need to fit a Cox proportional hazards model?",
                "a": "Event/censoring times, censoring indicators, and covariate values for each individual.",
                "explain": "This is exactly Module 7's censored-data requirements (event/censoring times, censoring indicators) with covariate values added on top — the Cox model doesn't need <em>new</em> kinds of data collection, just the same survival data <em>plus</em> whatever risk factors you want to model."
            },
            {
                "q": "How does the Cox model use 'risk sets' in its partial likelihood construction?",
                "a": "At each event time, the risk set is used to compute the probability that the specific individual who failed did so, given everyone at risk.",
                "explain": "This is exactly Kaplan-Meier's risk-set concept ($n_i$ from Module 7) reused here — at each observed event, the partial likelihood asks 'given this whole risk set, what's the probability <em>this</em> particular individual (rather than any other) was the one who failed', weighted by each individual's relative hazard from their covariates."
            },
            {
                "q": "Why is understanding proportional hazards models valuable for pricing life or health insurance?",
                "a": "They allow risk factors to be incorporated directly into mortality/morbidity risk assessment, improving pricing accuracy.",
                "explain": "This closes the module with its clear professional payoff — rather than pricing every policyholder off one generic mortality table (Module 6), a Cox model lets an insurer directly quantify how much <em>extra</em> (or reduced) risk specific factors (smoking, occupation, medical history) represent, informing risk-adjusted premiums."
            }
        ]
    },
    {
        "id": "m09",
        "title": "Exposed to risk",
        "description": "Covers how to estimate transition intensities from observed data using maximum likelihood, and the concept of 'central exposed to risk.'",
        "cards": [
            {
                "q": "What is the 'central exposed to risk'?",
                "a": "The total time individuals in a study were observed while in a particular state, used as the denominator in estimating transition rates.",
                "explain": "This module develops in full detail the estimation technique Modules 3-5 kept previewing — central exposed to risk is exactly the 'total waiting time observed' that appeared in every MLE formula for a transition intensity throughout this subject, now given its own dedicated, practical treatment."
            },
            {
                "q": "How is the maximum likelihood estimator of a constant transition intensity $\\mu$ calculated?",
                "a": "$\\hat\\mu = \\frac{\\text{observed number of transitions}}{\\text{total central exposed to risk}}$",
                "explain": "This is exactly the formula from Module 3 (and generalised in Module 4), restated as this module's central result — worth recognising this as the <em>same</em> Poisson-process-style MLE seen repeatedly across CS1, CM1 and CS2: count the events, divide by the total exposure time, and you have the maximum likelihood rate estimate."
            },
            {
                "q": "What is the 'principle of correspondence'?",
                "a": "The requirement that the definition of exposure (denominator) must exactly match the definition of the events being counted (numerator)."
                ,"explain": "This is the module's single most important conceptual rule, worth being able to state and apply precisely — it's a subtle but critical requirement: if you're counting deaths defined by 'age nearest birthday', your exposure denominator must <em>also</em> be measured on an 'age nearest birthday' basis, not 'age last birthday', or the resulting rate is silently biased."
            },
            {
                "q": "Why is the principle of correspondence fundamentally important in exposed-to-risk calculations?",
                "a": "Mismatches between exposure and event definitions lead to systematically biased estimates."
                ,"explain": "This restates the principle above as a direct warning about consequences — a mismatch doesn't just add random noise, it introduces a <em>systematic</em> bias in a predictable direction, which is exactly why exam questions on this topic often present a scenario with a subtle definitional mismatch and ask you to spot it."
            },
            {
                "q": "What is meant by 'dividing the data into homogeneous classes'?",
                "a": "Splitting the population into groups (e.g. by age, sex) believed to have similar transition intensities.",
                "explain": "This is exactly Module 4's time-homogeneous assumption applied practically — since a <em>single</em> constant intensity is only realistic within a similar sub-group, real investigations split the whole population into classes narrow enough that assuming constant $\\mu$ within each class is a reasonable approximation."
            },
            {
                "q": "What is the 'rate interval'?",
                "a": "The interval of time (typically one year) over which the transition intensity is assumed constant.",
                "explain": "This is the <em>time</em>-axis counterpart to the homogeneous-classes idea above — rather than assuming $\\mu$ is constant across <em>all</em> ages (unrealistic, per Module 5), it's assumed constant just within one narrow rate interval (usually a single year of age), a much more defensible approximation."
            },
            {
                "q": "What is the 'census approximation' method of estimating exposed to risk?",
                "a": "Approximating central exposed to risk using snapshot counts of the population at specific census points.",
                "explain": "This is a practical compromise worth understanding — exact entry/exit dates (the next card's ideal) aren't always available, so this method instead uses periodic headcounts (e.g. at each year-end) and interpolates, trading some precision for much simpler, cheaper data collection."
            },
            {
                "q": "What assumptions underlie the census approximation of waiting times?",
                "a": "That entries and exits are, on average, spread evenly over the period.",
                "explain": "This is the same 'uniform distribution' style assumption as CM1's UDD (Module 12 there) applied to entries/exits into observation rather than deaths — if the assumption is violated (e.g. entries cluster at the start of a policy year), the census approximation can introduce a systematic bias worth being alert to."
            },
            {
                "q": "How would you calculate a central exposed to risk given exact entry and exit dates?",
                "a": "Sum, for each individual, the exact amount of time they were observed within the relevant age/state band.",
                "explain": "This is the gold-standard, most precise method, worth contrasting directly with the census approximation above — given exact dates, no approximating assumption about how entries/exits are spread is needed at all, since each individual's true contribution to the exposure can be calculated directly."
            },
            {
                "q": "What is the difference between 'exact age' and 'age nearest/last birthday' in exposure calculations?",
                "a": "Exact age uses precise age at any moment; age nearest/last birthday groups individuals into whole-year bands by convention.",
                "explain": "This distinction is precisely what the principle of correspondence, from earlier in this module, is guarding against getting mismatched — whichever age convention is used for the numerator (counting deaths), the exposure denominator must use the exact <em>same</em> convention, or the resulting rate estimate is biased."
            },
            {
                "q": "What is the asymptotic distribution of the maximum likelihood estimator of a transition intensity?",
                "a": "Approximately normal, with variance approximately inversely proportional to the total exposure.",
                "explain": "This is CS1's general MLE asymptotic normality (Module 8 there) applied to this specific estimator, and it directly justifies the next card's practical claim — since variance shrinks as exposure grows, larger central exposed to risk figures translate directly into more statistically reliable rate estimates."
            },
            {
                "q": "How does the amount of central exposed to risk affect the precision of an estimated transition intensity?",
                "a": "More exposure gives a more precise (lower variance) estimate.",
                "explain": "This restates the asymptotic-distribution card above as a plain-English practical takeaway — it's precisely why insurers seek <em>large</em> mortality investigations rather than small ones, since more accumulated exposure time directly translates into a more statistically trustworthy estimated rate."
            },
            {
                "q": "Why might subdividing data by age and sex reduce bias in transition intensity estimates?",
                "a": "Rates vary by age and sex, so pooling without subdivision distorts estimates for individual subgroups.",
                "explain": "This is the same homogeneous-classes logic from earlier in this module, restated with the specific consequence of <em>not</em> subdividing made explicit — pooling a young and old cohort together and estimating one shared rate would produce a rate too high for the young group and too low for the old group, a genuine bias, not just imprecision."
            },
            {
                "q": "What data would be needed to calculate an exact central exposed to risk for a mortality investigation?",
                "a": "Exact dates of entry into and exit from observation (and reason for exit) for each individual.",
                "explain": "This restates the exact-calculation card's data requirements explicitly — note 'reason for exit' matters too (death vs withdrawal vs study end), since it directly determines whether that individual contributes to the <em>numerator</em> (an observed transition) as well as the denominator (exposure)."
            },
            {
                "q": "Why is the 'waiting time' statistic important in the maximum likelihood framework for Markov jump processes?",
                "a": "It directly forms the denominator (central exposed to risk) in the maximum likelihood estimator of a transition intensity.",
                "explain": "This closes the module by tying everything back to Module 4's original MLE formula one final time — 'waiting time' and 'central exposed to risk' are simply two names for the same underlying quantity, confirming this whole module has been a detailed practical treatment of one piece of a formula introduced much earlier in the subject."
            }
        ]
    },
    {
        "id": "m10",
        "title": "Graduation and statistical tests",
        "description": "Covers statistical tests used to compare a set of crude mortality/transition estimates against a standard table, checking overall fit, bias, and smoothness.",
        "cards": [
            {
                "q": "What is 'graduation' of mortality estimates?",
                "a": "The process of smoothing crude (statistically noisy) estimates of mortality/transition rates.",
                "explain": "This module picks up directly where Module 9 leaves off — Module 9 gave you the tools to estimate a <em>crude</em> rate for each individual age/class; this module addresses the fact that those crude estimates, taken one age at a time, will bounce around noisily due to sampling variation, and graduation is the systematic process of smoothing that noise out."
            },
            {
                "q": "Why is graduation performed, rather than just using crude estimates directly?",
                "a": "Crude estimates from limited data are noisy; graduation produces smoother, more stable and plausible estimates.",
                "explain": "This is worth connecting to CS1's bias-variance framing (Module 8/Module 21 there) — a crude rate at each single age is roughly <em>unbiased</em> but has high variance (based on relatively few observations at that exact age); graduation deliberately introduces a small amount of bias (smoothing) in exchange for a large reduction in variance, generally improving overall accuracy."
            },
            {
                "q": "What does a chi-square test for 'overall fit' of graduated rates to crude data test?",
                "a": "Whether differences between crude and graduated rates are consistent with random sampling variation.",
                "explain": "This is CS1's chi-square goodness-of-fit test (Module 10 there) applied directly to graduated mortality rates — the null hypothesis is that the <em>smoothed</em> (graduated) curve is a good description of the underlying true rates, with the observed crude-vs-graduated differences being just random noise around it."
            },
            {
                "q": "What does a 'test for the presence of consistent bias' (e.g. the signs test) check?",
                "a": "Whether graduated rates are systematically too high or too low compared to the crude data.",
                "explain": "This is a different kind of check from the overall-fit test above — even if the <em>overall</em> chi-square statistic looks fine, a graduation could still be systematically biased in one direction (e.g. slightly too high at every age), and this test specifically targets that failure mode which an aggregate fit statistic might miss."
            },
            {
                "q": "What is the 'signs test' used for?",
                "a": "Testing whether there's an unusually large or small number of positive/negative deviations, as a check for bias.",
                "explain": "This is CS1's non-parametric hypothesis-testing spirit (Module 10's permutation approach there) applied here — under the null hypothesis of no systematic bias, positive and negative deviations should each occur roughly 50% of the time (like independent coin flips), and this test checks whether the observed split is consistent with that."
            },
            {
                "q": "What does a 'test for individual ages where the fit is poor' check?",
                "a": "Whether any specific ages show a standardised deviation large enough to suggest a poor fit at that age.",
                "explain": "This is a <em>localised</em> check, distinct from the overall and bias tests above — a graduation could fit beautifully on average and show no systematic bias, yet still fit badly at one or two <em>specific</em> ages (perhaps due to a genuine anomaly in the underlying population there), and this test is designed to catch exactly that."
            },
            {
                "q": "What does the 'cumulative deviations test' check?",
                "a": "Whether deviations tend to accumulate in one direction rather than fluctuating randomly around zero.",
                "explain": "This is a different flavour of bias check from the signs test above — rather than counting how many deviations are positive vs negative, it tracks the <em>running sum</em> of deviations, which can catch a bias pattern (e.g. small positive deviations gradually accumulating) that a simple sign-count might miss."
            },
            {
                "q": "What does the 'grouping of signs test' (runs test) check?",
                "a": "Whether the pattern of positive/negative deviations shows too few or too many 'runs.'",
                "explain": "A 'run' is a consecutive sequence of same-signed deviations — too <em>few</em> runs (long unbroken streaks) suggests the graduation isn't tracking genuine local trends in the data closely enough; too <em>many</em> runs (rapid alternation) can suggest over-fitting to noise, making this test a useful complement to the other bias checks."
            },
            {
                "q": "What does 'the consistency of the shape' of crude estimates and a standard table refer to?",
                "a": "Whether the graduated curve follows the same overall pattern with age as the crude data, not just matching on average.",
                "explain": "This connects the whole set of tests back to the goal from the top of this module — passing every statistical test above still isn't sufficient if the graduated curve's overall <em>shape</em> (e.g. where it rises steeply vs plateaus) diverges from what the underlying crude data suggests, which is exactly the qualitative check this criterion targets."
            },
            {
                "q": "What is a 'desirable property' of a set of graduated estimates, beyond just fitting the data well?",
                "a": "Smoothness — the rates should progress steadily with age, without implausible jumps.",
                "explain": "This is the <em>other half</em> of the fit-vs-smoothness trade-off that defines graduation as a whole — a graduation that fits the crude data perfectly (essentially reproducing every noisy bump) wouldn't be smooth at all, so a good graduation deliberately sacrifices a little fit for a lot more smoothness, echoing the bias-variance trade-off from earlier in this module."
            },
            {
                "q": "How would you test for 'smoothness' of a set of graduated estimates?",
                "a": "Examine higher-order differences of the graduated rates — a smooth progression should show small, steadily varying differences.",
                "explain": "The intuition: for a smooth curve, <em>third</em> differences (differences of differences of differences) should be small and gently varying, without erratic jumps — a large or wildly fluctuating third difference at some age is a red flag that the graduation isn't as smooth as it should be there."
            },
            {
                "q": "How should tests for fit be amended when comparing crude estimates to a graduation of the same data?",
                "a": "Adjust degrees of freedom to account for the number of parameters used in the graduation.",
                "explain": "This is exactly CS1's chi-square degrees-of-freedom-reduction rule (Module 10 there: 'reduce by one per estimated parameter') applied directly here — a graduation with more free parameters can fit the crude data more closely almost by construction, so the degrees of freedom must be reduced correspondingly, or the test would unfairly favour more flexible graduations."
            },
            {
                "q": "How should statistical tests be adjusted to allow for the presence of duplicate policies in the data?",
                "a": "Inflate the variance of the test statistic to reflect the reduced effective sample size.",
                "explain": "This addresses a genuine data-quality issue worth knowing exists — if the same individual accidentally appears multiple times in a mortality investigation (duplicate policies), the data isn't as informative as the raw record count suggests, so naively treating each record as independent would understate the true variance and overstate confidence in the graduation."
            },
            {
                "q": "Why is a hypothesis test's distribution important to specify correctly for these graduation tests?",
                "a": "An incorrect distributional assumption gives an inaccurate critical value/p-value, leading to wrong conclusions.",
                "explain": "This is CS1's general hypothesis-testing caution (Module 10 there) restated in this specific context — every test in this module (chi-square, signs, cumulative deviations, runs) relies on a correctly-specified reference distribution under the null hypothesis, and getting that distribution wrong (e.g. ignoring duplicate-policy effects from the card above) undermines the whole test's validity."
            },
            {
                "q": "Why would an actuary compare crude estimates against both a standard table and a graduated version?",
                "a": "To assess both how well an in-house smoothed model fits and how the population compares to an external benchmark.",
                "explain": "This closes the module by connecting its two natural comparison targets — comparing against a <em>standard table</em> answers 'how does this population differ from a recognised external benchmark' (useful context and sanity-checking), while comparing against one's <em>own</em> graduation answers 'did the smoothing process itself do a good job', two different and complementary questions."
            }
        ]
    },
    {
        "id": "m11",
        "title": "Methods of graduation",
        "description": "Covers practical methods for graduating (smoothing) crude mortality/transition estimates — parametric formulae, reference to a standard table, and spline functions.",
        "cards": [
            {
                "q": "What is 'graduation by parametric formula'?",
                "a": "Fitting a mathematical formula (e.g. Gompertz or Makeham) with a small number of parameters to the crude data.",
                "explain": "This module surveys the practical <em>methods</em> for producing the smoothed curve Module 10's tests then check — parametric formula graduation directly reuses Module 6's Gompertz/Makeham laws, now fitted to a specific investigation's crude data rather than assumed as a theoretical model."
            },
            {
                "q": "Give one advantage of graduation by parametric formula.",
                "a": "A smooth, compact representation requiring few parameters, extrapolable beyond the data range.",
                "explain": "The 'few parameters' point connects directly to Module 10's degrees-of-freedom card — a 2-3 parameter formula (like Makeham's $A,B,c$) 'costs' very little in terms of degrees of freedom lost from subsequent fit tests, unlike more flexible methods covered later in this module."
            },
            {
                "q": "Give one disadvantage of graduation by parametric formula.",
                "a": "It might not be flexible enough to capture the true pattern across all ages.",
                "explain": "This is the direct trade-off against the compactness advantage above — a rigid, low-parameter formula simply <em>cannot</em> bend to match unusual local features in the data (e.g. a genuine bump in mortality at a specific age range), however good its overall fit looks."
            },
            {
                "q": "What is 'graduation by reference to a standard table'?",
                "a": "Adjusting a recognised standard mortality table (e.g. by a multiplicative factor) to fit the crude data.",
                "explain": "This is a different philosophy from the parametric-formula approach above — rather than fitting an abstract mathematical function, you borrow an <em>already</em>-smooth, externally-published table's shape and just rescale it (e.g. multiply every rate by a constant factor) to match your population's overall level."
            },
            {
                "q": "Give one advantage of graduation by reference to a standard table.",
                "a": "It leverages a well-established, smooth external table, requiring less data to calibrate.",
                "explain": "Since you only need to estimate a small adjustment (e.g. a single multiplicative factor) rather than a whole curve's shape from scratch, this method can work reasonably well even with a <em>smaller</em> investigation than the other two methods would need, borrowing the standard table's smoothness for free."
            },
            {
                "q": "Give one disadvantage of graduation by reference to a standard table.",
                "a": "The standard table's shape may not match the true pattern of the population being studied.",
                "explain": "This is the direct cost of borrowing an external shape — if your population's mortality rises <em>faster</em> or <em>slower</em> with age than the standard table (not just at a different overall level), a simple multiplicative adjustment can't correct for that mismatched shape, however well-calibrated the overall level is."
            },
            {
                "q": "What is 'graduation using spline functions'?",
                "a": "Fitting piecewise polynomial functions, smoothly joined together, to the crude data.",
                "explain": "This is CS1's spline concept (touched on in the regression/GLM modules there) applied to mortality graduation — 'piecewise' is the key word: rather than one single formula covering every age (parametric formula) or one borrowed external shape (standard table), splines stitch together several local polynomial pieces, each free to bend to its own local region of the data."
            },
            {
                "q": "Give one advantage of graduation by spline functions.",
                "a": "More flexibility to capture the true shape of the data than a single global formula.",
                "explain": "This is the direct answer to parametric formula's main weakness above — because each piece only needs to fit its own local region, splines can capture genuine local irregularities in the true underlying pattern that a single rigid global formula (like Makeham's law) simply cannot bend to accommodate."
            },
            {
                "q": "Give one disadvantage of graduation by spline functions.",
                "a": "More complex, requiring more parameters, and may extrapolate poorly beyond the data range.",
                "explain": "This is exactly the flexibility-vs-parsimony trade-off from Module 10 landing on this specific method — more parameters means more degrees of freedom lost from fit tests (per Module 10's adjustment rule), and a curve fitted purely to match local data patterns often has no sensible behaviour once you step outside the range that data actually covers."
            },
            {
                "q": "Are candidates typically required to carry out a full graduation calculation in the exam?",
                "a": "No — the syllabus notes candidates are not required to carry out a graduation, but should understand the methods.",
                "explain": "This is a useful piece of practical exam guidance worth remembering directly — the syllabus expects <em>conceptual</em> understanding (advantages, disadvantages, when to use which method) rather than the ability to mechanically execute a full graduation calculation by hand, which shapes how deeply to study this module."
            },
            {
                "q": "How would you choose between these three graduation methods for a given data set?",
                "a": "Consider data volume/quality, whether a suitable standard table exists, and the robustness-vs-flexibility trade-off.",
                "explain": "This is the module's central practical decision framework, worth having as a mental checklist — little data and a well-matched existing standard table favours the standard-table method; abundant, well-behaved data with a smooth expected shape favours a parametric formula; irregular local patterns favour splines."
            },
            {
                "q": "Why might combining approaches (e.g. standard table plus a smooth adjustment) sometimes be used?",
                "a": "To get robustness from the standard table while still reflecting genuine differences in the specific population.",
                "explain": "This is a practical hybrid worth knowing exists — rather than choosing purely one method, blending a standard table's overall shape with a smaller adjustment (perhaps itself graduated by a simple formula or spline) can combine the robustness of borrowing an established shape with enough flexibility to reflect real population-specific differences."
            },
            {
                "q": "How does the number of parameters used in a graduation method affect subsequent statistical tests?",
                "a": "More parameters typically reduces the effective degrees of freedom in goodness-of-fit tests.",
                "explain": "This restates Module 10's degrees-of-freedom adjustment rule as a direct consequence of the <em>method</em> chosen here — parametric formula (few parameters) costs little in degrees of freedom; splines (many parameters) cost much more, which needs to be correctly accounted for before trusting any subsequent fit test's p-value."
            },
            {
                "q": "Why might an actuary prefer a graduation method with fewer parameters, all else equal?",
                "a": "Less prone to overfitting the noise in the crude data, and more parsimonious/interpretable.",
                "explain": "This is precisely the bias-variance principle from Module 10 stated as a general preference — a simpler graduation is less likely to mistake random noise in the crude data for a genuine pattern, and it's also easier to explain, communicate, and justify to a non-technical audience or regulator."
            },
            {
                "q": "How does the balance between 'smoothness' and 'fit to the data' inform the choice of graduation method?",
                "a": "Too flexible risks overfitting noise; too rigid risks poor fit — the method should balance both.",
                "explain": "This closes the module by restating its central tension, running through parametric formula (rigid), standard table (borrowed rigidity), and splines (flexible) — no single method is universally 'best'; the right choice always depends on where a specific dataset and situation should sit on this fit-versus-smoothness spectrum."
            }
        ]
    },
    {
        "id": "m12",
        "title": "Mortality projection",
        "description": "Covers approaches to forecasting future mortality rates, including extrapolative, explanatory, and expectation-based approaches, and specific models like Lee-Carter.",
        "cards": [
            {
                "q": "What are the three broad approaches to forecasting future mortality mentioned in the syllabus?",
                "a": "Extrapolation, explanation (modelling underlying causes), and expectation (expert judgement).",
                "explain": "This module shifts the whole subject's focus from <em>estimating</em> current mortality (Modules 6-11) to <em>forecasting</em> how it will change over calendar time — a different, harder problem, since it requires projecting into a future for which no data exists yet at all."
            },
            {
                "q": "What is an 'extrapolative' approach to mortality forecasting?",
                "a": "Projecting observed historical trends in mortality rates forward into the future.",
                "explain": "This is conceptually the simplest of the three approaches, and it's the one the rest of this module focuses on almost entirely (via Lee-Carter) — the working assumption is that whatever pattern of improvement mortality has followed historically will broadly continue, at least in the near term."
            },
            {
                "q": "Give one advantage of extrapolative mortality forecasting methods.",
                "a": "Relatively simple, objective, and directly grounded in observed historical data.",
                "explain": "Unlike the explanation-based approach (which requires understanding and correctly modelling <em>why</em> mortality changes), extrapolation sidesteps needing any causal theory at all — it simply asks 'what pattern has the data followed', a more tractable and less subjective question."
            },
            {
                "q": "Give one disadvantage of extrapolative mortality forecasting methods.",
                "a": "They assume past trends continue, which may not hold given structural changes.",
                "explain": "This is the direct cost of extrapolation's simplicity — a <em>new</em> medical breakthrough, public health crisis, or lifestyle shift can break a historical trend abruptly, and a purely extrapolative method has no way to anticipate such a structural break before it actually shows up in the data."
            },
            {
                "q": "What is the Lee-Carter model?",
                "a": "A statistical model decomposing log mortality into an age-specific pattern, a time-varying mortality index, and age-specific sensitivity to that index.",
                "explain": "This is the module's central worked model, and it's worth reading the decomposition intuitively: $a_x$ captures the <em>fixed</em> overall age pattern (mortality rising with age, per Module 6's Gompertz-style shape), while $k_t$ captures how mortality <em>levels</em> shift over calendar time, with $b_x$ letting different ages respond to that shift by different amounts."
            },
            {
                "q": "What is the general structure of the Lee-Carter model?",
                "a": "$\\ln(m_{x,t}) = a_x + b_x k_t + \\epsilon_{x,t}$",
                "explain": "Taking <em>logs</em> here (rather than modelling $m_{x,t}$ directly) is a deliberate choice worth noting — it guarantees the resulting fitted mortality rates stay positive (exactly the same log-link logic as CS1's Poisson GLM, Module 13 there), and it turns a potentially multiplicative relationship into this convenient additive form."
            },
            {
                "q": "How is the Lee-Carter model typically used for forecasting?",
                "a": "The time index $k_t$ is projected forward (often via a simple time series model), combined with fixed age effects.",
                "explain": "This is the direct bridge into Modules 13-14's time series content — having fitted $a_x$, $b_x$ and historical $k_t$ values, the model reduces the whole multi-dimensional forecasting problem down to forecasting just <em>one</em> single time series ($k_t$ forward), typically using an ARIMA-style model (Module 13), which is a huge simplification."
            },
            {
                "q": "What is an 'age-period-cohort' model, as an extension beyond Lee-Carter?",
                "a": "A model that also allows for a cohort (year of birth) effect, capturing generation-specific mortality patterns.",
                "explain": "This addresses a genuine limitation of plain Lee-Carter — some mortality patterns are best explained by which <em>generation</em> someone belongs to (shared early-life experiences, smoking habits typical of a birth cohort) rather than purely by their current age or the current calendar year, which Lee-Carter alone cannot capture."
            },
            {
                "q": "What is a '$p$-spline regression model' used for in mortality projection?",
                "a": "Smoothing and forecasting mortality surfaces using penalized spline techniques.",
                "explain": "This connects directly to Module 11's spline-graduation method — a penalized spline extends that idea from smoothing a single age-based curve to smoothing a whole two-dimensional <em>age-by-time</em> 'mortality surface', with the penalty term controlling how much flexibility is allowed, echoing the fit-vs-smoothness trade-off from Module 10."
            },
            {
                "q": "What software-related skill does the syllabus specify for mortality projection models?",
                "a": "The ability to use an appropriate computer package to apply models like Lee-Carter to a real mortality data set.",
                "explain": "This is a practical, hands-on syllabus requirement worth being aware of — unlike Module 11's graduation methods (which the syllabus explicitly does <em>not</em> require candidates to compute by hand), mortality projection models like Lee-Carter are expected to be applied using statistical software, reflecting how this work is actually done professionally."
            },
            {
                "q": "What is a major source of error in mortality forecasts?",
                "a": "Uncertainty in extrapolating trends that may not continue, and unforeseen future shocks or medical advances.",
                "explain": "This restates the extrapolative-approach disadvantage from earlier in this module as the module's central risk warning — mortality projections used for pricing/reserving carry genuine, irreducible uncertainty that grows the further into the future you project, a point worth emphasising in any 'discuss the risks' style question."
            },
            {
                "q": "Why is mortality projection important for pricing and reserving in annuity and pension business?",
                "a": "Future mortality improvements mean annuitants are expected to live longer, increasing the expected cost.",
                "explain": "This is the module's central professional 'why does this matter' — note the direction of the risk here is the <em>opposite</em> of ordinary life assurance: for annuities and pensions, <em>under</em>-estimating future mortality improvement (i.e. assuming people won't live as long as they actually do) is the dangerous mistake, since it understates how long benefits must be paid."
            },
            {
                "q": "What does 'explanation-based' mortality forecasting attempt to do, distinct from extrapolation?",
                "a": "Model the underlying causes/drivers of mortality change to forecast future rates based on those drivers.",
                "explain": "This restates the second of the module's three broad approaches from the opening card — rather than assuming past patterns continue mechanically, this approach tries to model <em>why</em> mortality has been improving (medical advances, smoking reduction, etc.) and forecasts based on how those specific drivers are themselves expected to evolve."
            },
            {
                "q": "Why might different mortality forecasting approaches give materially different projections?",
                "a": "They rely on different assumptions, and mortality trends are inherently uncertain over longer horizons.",
                "explain": "This is worth pairing directly with the earlier 'major source of error' card — since extrapolation, explanation, and expert judgement each rest on fundamentally different assumptions about what drives future mortality, it's entirely expected (not a sign of error) that reputable actuaries using different approaches can reach different, defensible projections."
            },
            {
                "q": "What would cause an insurer/actuary to revise a Lee-Carter-based mortality forecast?",
                "a": "New data suggesting a change in the time index trend, or evidence of a structural break.",
                "explain": "This closes the module by connecting back to the model's core structure — since the whole Lee-Carter forecast ultimately reduces to forecasting the single index $k_t$, any evidence that $k_t$'s historical trend is shifting (not just random year-to-year noise) is exactly the trigger that should prompt a full model revision."
            }
        ]
    },
    {
        "id": "m13",
        "title": "Time Series 1",
        "description": "Introduces core concepts of time series modelling — stationarity, the backwards shift/difference operators, and the basic AR, MA, ARMA and ARIMA model families.",
        "cards": [
            {
                "q": "What does it mean for a time series to be 'stationary'?",
                "a": "Its statistical properties (mean, variance, autocovariance structure) don't change over time.",
                "explain": "This module shifts CS2 into a different toolkit — Modules 1-12 modelled how individuals/populations move between states or die; this module and the next model how a single numerical <em>series</em> (an interest rate, an inflation index, a mortality time index like Module 12's $k_t$) evolves over time, and stationarity is the foundational property that makes almost every technique here work."
            },
            {
                "q": "What is meant by a series being '$I(0)$'?",
                "a": "The series is already stationary (integrated of order zero).",
                "explain": "The 'integrated of order $d$' notation is worth understanding as 'needs differencing $d$ times to become stationary' — $I(0)$ means zero differencing needed, i.e. the series is already well-behaved and ready for ARMA-style modelling without any preprocessing."
            },
            {
                "q": "What is meant by a series being '$I(1)$'?",
                "a": "The series becomes stationary after taking first differences.",
                "explain": "This is the single most common case for real economic/financial series — a stock price or interest rate <em>level</em> is typically non-stationary (it can drift arbitrarily far over time, echoing CM2's random walk discussion), but its period-to-period <em>change</em> often behaves much more like a stable, stationary series."
            },
            {
                "q": "What is the 'backwards shift operator' $B$?",
                "a": "An operator such that $BX_t = X_{t-1}$, shifting the series back by one period.",
                "explain": "This is purely a notational convenience worth getting comfortable with quickly, since it makes writing and manipulating time series models far more compact — an AR model, for instance, can be written cleanly as a polynomial in $B$ acting on $X_t$, rather than a long explicit sum of lagged terms."
            },
            {
                "q": "What is the 'backwards difference operator'?",
                "a": "$\\nabla X_t = X_t - X_{t-1} = (1-B)X_t$",
                "explain": "This is precisely the operation that converts an $I(1)$ series into an $I(0)$ one — applying $\\nabla$ once corresponds to 'differencing once', and the notation $(1-B)X_t$ shows exactly how the difference operator is built directly from the backward shift operator above."
            },
            {
                "q": "What is an autoregressive (AR) model?",
                "a": "A model expressing the current value as a linear function of its own past values, plus a random error term.",
                "explain": "This is the time-series analogue of CS1's linear regression (Module 12 there) — instead of regressing $Y$ on separate explanatory variables $X$, an AR model regresses the series on <em>its own</em> past values, capturing the idea that recent history predicts the near future (a form of persistence or momentum)."
            },
            {
                "q": "What is a moving average (MA) model?",
                "a": "A model expressing the current value as a linear function of current and past random error (white noise) terms.",
                "explain": "Despite the similar name, this is <em>not</em> the same as the simple 'moving average smoothing' technique from Module 14 — an MA <em>model</em> expresses the series as a weighted combination of unobserved random <em>shocks</em> (not raw past observations), capturing how a single shock's effect can linger and gradually fade over subsequent periods."
            },
            {
                "q": "What is an ARMA model?",
                "a": "A model combining both autoregressive and moving average components to describe a stationary time series.",
                "explain": "This is simply the AR and MA cards above combined into one model — worth noting it's specifically for <em>stationary</em> series; a non-stationary series needs differencing first (the $I(1)$ card above) before ARMA can be applied, which is exactly what the next card's ARIMA extension handles automatically."
            },
            {
                "q": "What is an ARIMA model?",
                "a": "An ARMA model applied to a differenced series, used to model non-stationary series that become stationary after differencing.",
                "explain": "The 'I' stands for 'integrated', directly referencing the $I(0)$/$I(1)$ notation from earlier in this module — an ARIMA(p,d,q) model is simply 'difference $d$ times to achieve stationarity, then fit an ARMA(p,q) model', unifying the differencing and ARMA-fitting steps into one combined framework."
            },
            {
                "q": "What are the 'roots of the characteristic equation' used for in time series analysis?",
                "a": "Determining whether an AR (or ARMA) process is stationary — stationary if all roots lie outside the unit circle.",
                "explain": "This is the precise mathematical <em>test</em> for stationarity, worth connecting to the random-walk card below as a worked example — a random walk's characteristic equation has a root exactly ON the unit circle (a 'unit root'), which is precisely why it sits right on the boundary between stationary and non-stationary, and indeed is non-stationary."
            },
            {
                "q": "What is a 'random walk'?",
                "a": "A time series where each value equals the previous value plus a random error term: $X_t = X_{t-1} + \\epsilon_t$",
                "explain": "This is exactly CM2's discrete-time analogue of Brownian motion (Module 7 there) — it's the simplest possible AR(1) model with its coefficient set to exactly 1, which is precisely the 'unit root' case flagged in the card above, and it's the standard model for a weak-form-efficient asset price (CM2 Module 1)."
            },
            {
                "q": "What is a 'random walk with drift'?",
                "a": "A random walk with an added constant term, giving a systematic trend: $X_t = X_{t-1} + c + \\epsilon_t$",
                "explain": "This is the random walk above with one small but important addition — the constant $c$ gives the series a genuine systematic direction (upward if $c>0$) on top of its purely random fluctuations, which is a more realistic model for, say, a stock index expected to grow on average over the long run."
            },
            {
                "q": "Is a random walk stationary?",
                "a": "No — its variance grows over time, though its first differences are stationary.",
                "explain": "This confirms directly why a random walk is exactly the $I(1)$ example from earlier in this module — its own level isn't stationary (variance $=t\\sigma^2$ growing without bound, exactly like Brownian motion's variance in CM2), but its first difference $X_t-X_{t-1}=\\epsilon_t$ is just white noise, perfectly stationary by construction."
            },
            {
                "q": "What is a 'multivariate autoregressive model'?",
                "a": "An extension of the AR model to several time series simultaneously, where each depends on past values of itself and the others.",
                "explain": "This is worth connecting to CS2 Module 1's classification framework — a multivariate AR model is just a single (vector-valued) Markov process in disguise, where the 'state' at each time step is the whole vector of current series values, and the Markov property lets you predict the next vector from just the current one."
            },
            {
                "q": "What does it mean for two (or more) time series to be 'cointegrated'?",
                "a": "Each is individually non-stationary, but a particular linear combination of them is stationary.",
                "explain": "This closes the module with a subtle and important idea worth sitting with — think of two related but individually wandering series (say, a company's revenue and its costs) that stay roughly proportional to each other over time; <em>neither</em> series alone is stationary, but their <em>difference</em> (or another specific combination) can be, capturing a stable long-run equilibrium relationship between two individually unpredictable series."
            }
        ]
    },
    {
        "id": "m14",
        "title": "Time Series 2",
        "description": "Covers applying time series models in practice — identification, estimation and diagnosis, forecasting, and applications to security prices and economic variables.",
        "cards": [
            {
                "q": "What does 'identification' mean in the Box-Jenkins approach to time series modelling?",
                "a": "Selecting an appropriate model structure based on the observed data's characteristics.",
                "explain": "This module takes Module 13's model <em>family</em> (AR, MA, ARMA, ARIMA) and develops the practical, three-stage <em>process</em> for actually fitting one to real data — identification is the crucial first step, using tools like the autocorrelation structure of the data to decide which specific model (and how many AR/MA terms) is appropriate before any fitting happens."
            },
            {
                "q": "What does 'estimation' mean in this context?",
                "a": "Fitting the chosen model's parameters to the observed data, typically via maximum likelihood or least squares.",
                "explain": "This is CS1's MLE machinery (Module 8 there) reapplied once again — having <em>identified</em> a candidate model structure, estimation is simply the standard parameter-fitting step, no different in spirit from fitting any other statistical model once its form has been chosen."
            },
            {
                "q": "What does 'diagnosis' (diagnostic checking) mean in this context?",
                "a": "Checking whether the fitted model's residuals behave like white noise, validating model adequacy.",
                "explain": "This is CS1's regression-residual-checking philosophy (Module 12 there) applied to time series — if the fitted model has captured all the predictable structure in the data, what's <em>left over</em> (the residuals) should look like pure random noise with no remaining pattern, exactly analogous to checking a regression's residual plot for hidden structure."
            },
            {
                "q": "What criteria might be used to choose between candidate time series models?",
                "a": "Information criteria (AIC, BIC), goodness of fit, and parsimony.",
                "explain": "This is CS1's model-selection toolkit (from both the regression and GLM modules there) reused directly — the same fit-versus-complexity trade-off runs throughout this whole syllabus, whether choosing regression predictors, GLM terms, or here, the number of AR/MA terms in a time series model."
            },
            {
                "q": "What diagnostic tests might be applied to the residuals of a fitted time series model?",
                "a": "Tests for autocorrelation in the residuals, e.g. the Ljung-Box test.",
                "explain": "This is the concrete, formal version of the diagnosis step above — rather than just eyeballing whether residuals 'look random', the Ljung-Box test formally checks whether the residuals' own autocorrelations are consistent with pure white noise, giving an objective statistical basis for accepting or rejecting the fitted model."
            },
            {
                "q": "Give an example of a 'non-stationary, non-linear' time series model beyond the standard ARIMA family.",
                "a": "A GARCH model, allowing time-varying volatility, or a threshold/regime-switching model.",
                "explain": "GARCH is worth knowing by name — it directly addresses CM2 Module 9's 'volatility clustering' critique of GBM, letting <em>volatility</em> itself (not just the level) follow its own time-varying process, an important extension beyond the constant-parameter ARIMA family this module otherwise focuses on."
            },
            {
                "q": "How would a random walk model be applied to security prices?",
                "a": "Modelling the log price as a random walk, consistent with weak-form market efficiency.",
                "explain": "This directly connects Module 13's random walk concept to CM2 Module 1's EMH — 'log prices follow a random walk' is precisely the time-series-modelling statement of weak-form efficiency: if past prices contained exploitable information, the price series wouldn't behave like a pure random walk at all."
            },
            {
                "q": "How would an autoregressive model be applied to an economic variable like inflation?",
                "a": "Modelling current inflation as depending on its own recent past values, capturing persistence.",
                "explain": "This is a realistic modelling choice worth understanding why — inflation tends to be 'sticky' or persistent (high inflation this quarter tends to be followed by still-elevated, if gradually falling, inflation next quarter), which is exactly the kind of self-dependence an AR model is built to capture."
            },
            {
                "q": "What is a 'deterministic forecast' using simple extrapolation?",
                "a": "A forecast projecting an identified pattern forward without incorporating the model's inherent random uncertainty.",
                "explain": "This is worth contrasting with a proper <em>stochastic</em> (probabilistic) forecast from a fitted ARIMA-type model — a deterministic extrapolation gives you a single central-estimate path, while the fully-specified model can also give you a genuine confidence interval around that path, reflecting the real uncertainty a pure extrapolation ignores."
            },
            {
                "q": "What is a 'moving average' forecasting/smoothing technique, distinct from the MA model?",
                "a": "Averaging recent observations to smooth out short-term fluctuations and estimate an underlying trend.",
                "explain": "This is an important naming clash worth being alert to, flagged explicitly by the question itself — a 'moving average' as a <em>smoothing</em> technique (averaging recent raw observations) is a completely different concept from an 'MA model' (Module 13's model of unobserved error terms), despite sharing almost identical names."
            },
            {
                "q": "What is 'seasonal adjustment,' and why might it be applied before analysis?",
                "a": "Removing a regular repeating seasonal pattern, so underlying trend/cyclical behaviour can be seen more clearly.",
                "explain": "This is a practical preprocessing step worth knowing exists — many real series (retail sales, certain claim types) have strong, predictable within-year seasonal patterns that can obscure the more interesting underlying <em>trend</em> or <em>cycle</em>; stripping the seasonal component out first makes the remaining signal much easier to model and interpret."
            },
            {
                "q": "How would you check whether a cointegrated model is appropriate for two economic time series?",
                "a": "Test each series for non-stationarity, then test whether a linear combination of them is stationary.",
                "explain": "This is a direct two-step procedure applying Module 13's cointegration definition — first confirm both series <em>are</em> individually non-stationary (otherwise cointegration isn't even the relevant question), then test whether some specific combination of them achieves the stationarity neither series has alone."
            },
            {
                "q": "Why might cointegrated models be useful for modelling pairs of related economic/financial series?",
                "a": "They capture a stable long-run equilibrium relationship even though each series individually wanders.",
                "explain": "This restates Module 13's cointegration motivation directly in this module's applied context — for related series (like a company's costs and revenues, or a currency pair under a managed peg), a cointegrated model can meaningfully forecast their <em>relationship</em> even when forecasting either series alone would be hopeless."
            },
            {
                "q": "How might a univariate time series with the Markov property be rearranged as a multivariate Markov model?",
                "a": "By including enough lagged values as additional 'state' variables.",
                "explain": "This connects directly back to CS2 Module 1's Markov-property framework — an AR($p$) model isn't Markov in the usual one-lag sense (it depends on $p$ past values, not just the most recent one), but bundling the last $p$ values together into a single <em>vector</em> 'state' restores the Markov property, exactly the same expanded-state-space trick Module 5 used for duration dependence."
            },
            {
                "q": "Why is diagnostic checking an essential final step in the time series modelling process?",
                "a": "A model with structured (non-white-noise) residuals suggests genuine patterns weren't captured, undermining forecasts.",
                "explain": "This closes the module by restating the identification-estimation-diagnosis cycle's purpose — if diagnostic checking reveals the residuals <em>aren't</em> white noise, that's a signal to go back and revise the identification step (perhaps adding more AR or MA terms), making this three-stage process iterative rather than strictly linear."
            }
        ]
    },
    {
        "id": "m15",
        "title": "Loss distributions",
        "description": "Covers statistical distributions suitable for modelling individual and aggregate insurance losses, the effect of excesses/deductibles and reinsurance, and parameter estimation and goodness of fit.",
        "cards": [
            {
                "q": "What properties make a distribution suitable for modelling individual insurance losses?",
                "a": "Non-negative support, and typically a right-skewed shape — e.g. lognormal, gamma, or Pareto.",
                "explain": "This module marks a genuine shift into general insurance modelling — after 14 modules on stochastic processes, mortality and time series, this and the remaining modules (16-20) build the classical actuarial toolkit for pricing and reserving general insurance risk, starting with the individual claim <em>severity</em> distribution."
            },
            {
                "q": "What is an 'excess' (or 'deductible')?",
                "a": "An amount the policyholder bears themselves before the insurer pays anything on a claim.",
                "explain": "This is the policyholder-facing version of a retention — worth noting it changes what the <em>insurer</em> actually observes and pays, which is exactly the source of the truncation/estimation complications developed later in this module."
            },
            {
                "q": "What is a 'retention limit'?",
                "a": "The maximum amount an insurer (or reinsurer) retains/pays, with any excess passed on.",
                "explain": "This is precisely the same concept as an excess, just applied one layer further up the risk chain (insurer retaining vs reinsurer paying, rather than policyholder retaining vs insurer paying) — recognising both as the <em>same</em> mathematical structure (a threshold splitting a loss into two pieces) makes the whole reinsurance material in this and later modules far more tractable."
            },
            {
                "q": "How does an excess of $d$ affect the distribution of amounts actually paid by the insurer?",
                "a": "The insurer pays the loss amount minus $d$, so the paid amount is truncated/shifted, conditional on the loss exceeding $d$.",
                "explain": "This is worth picturing precisely: for a loss $X\\lt d$, the insurer pays nothing (and typically never even hears about it); for $X>d$, the insurer pays $X-d$ — this <em>shift</em>-and-<em>truncate</em> transformation of the underlying ground-up loss distribution is exactly what makes estimating the true parameters from observed insurer-level data non-trivial, as later cards explore."
            },
            {
                "q": "What is 'proportional reinsurance'?",
                "a": "A reinsurance arrangement where the reinsurer pays a fixed proportion of every claim, and receives the same proportion of premium.",
                "explain": "This is exactly CM2 Module 17's proportional reinsurance concept reused here — recognising it as the same idea across both subjects saves re-deriving it: <em>Every</em> claim (large or small) is shared in the same fixed ratio, unlike excess of loss below, which only kicks in above a threshold."
            },
            {
                "q": "What is 'excess of loss reinsurance'?",
                "a": "A reinsurance arrangement where the reinsurer pays the amount of any claim exceeding a specified retention level.",
                "explain": "This is exactly CM2 Module 17's excess of loss concept, and it's structurally <em>identical</em> to the policyholder excess described earlier in this module, just with the insurer and reinsurer playing the roles the policyholder and insurer played there."
            },
            {
                "q": "How would you calculate the distribution of claim amounts paid by the insurer under excess of loss reinsurance with retention $M$?",
                "a": "The insurer pays $\\min(X, M)$ for each claim of size $X$.",
                "explain": "This is the direct mirror image of the excess formula above ($X-d$ for the insurer paying above an excess) — here the <em>insurer</em> is the one being capped, retaining the smaller of the actual loss or the retention limit, while the reinsurer picks up whatever exceeds $M$."
            },
            {
                "q": "How would you estimate parameters of a loss distribution using maximum likelihood, when data is incomplete (censored/truncated)?",
                "a": "Adjust the likelihood function to reflect the actual observation scheme, then maximise as usual.",
                "explain": "This is CS2 Module 7's censoring/truncation adjustment (developed for survival data) applied here to loss severity data — the general principle is identical: the likelihood contribution for each observation must correctly reflect exactly <em>what</em> was actually observed (e.g. a truncated loss above an excess), not the full ground-up distribution as if nothing were missing."
            },
            {
                "q": "What is the 'method of moments' applied to loss distribution parameter estimation?",
                "a": "Equating sample moments of the observed losses to theoretical moments of the assumed distribution, solving for parameters.",
                "explain": "This is CS1's method of moments (Module 8 there) applied directly to loss severity data — worth remembering CS1's caution alongside this: method of moments is simpler than MLE but can be less statistically efficient, a trade-off that applies just as much here as in any other estimation context."
            },
            {
                "q": "How would you assess 'goodness of fit' of a fitted loss distribution to a data set?",
                "a": "Using tests like chi-square goodness of fit, or graphical methods (comparing empirical and fitted CDFs).",
                "explain": "This is CS1's goodness-of-fit toolkit (Module 10 there) reapplied to loss distributions specifically — worth noting the graphical route (comparing fitted vs empirical CDFs, or a Q-Q plot style comparison) is often especially informative for loss data, since it visually reveals <em>where</em> the fit is poor (e.g. in the tail), not just whether an overall test statistic is significant."
            },
            {
                "q": "Why might the choice of loss distribution matter significantly for reinsurance pricing?",
                "a": "Reinsurance often covers the tail, so assumed tail behaviour strongly affects the reinsurer's required premium.",
                "explain": "This is the module's central practical warning, directly previewing Module 16's extreme value theory — since excess of loss reinsurance specifically covers the <em>extreme</em> upper tail of the loss distribution, two distributions that look almost identical in their bulk (near the mean) can imply wildly different reinsurance prices if their tail behaviour differs."
            },
            {
                "q": "What is 'left truncation' of loss data, in the context of an excess?",
                "a": "Only losses exceeding the excess are recorded/observed at all, truncating the observable data from below.",
                "explain": "This is an important distinction from ordinary censoring (Module 7) worth being precise about — a <em>censored</em> observation is still recorded, just with incomplete information (e.g. 'this life survived at least to here'); a <em>truncated</em> observation isn't recorded <em>at all</em> if it falls below the threshold, which is exactly the situation for losses below an excess that the insurer never even learns about."
            },
            {
                "q": "How does the presence of an excess complicate estimating the parameters of the ground-up loss distribution?",
                "a": "Only losses above the excess are observed, so estimation must account for truncation to recover the true parameters.",
                "explain": "This restates the left-truncation concept above as its direct estimation consequence — naively fitting a distribution to the <em>observed</em> (already-truncated) losses, ignoring that smaller losses below the excess exist but are simply invisible, would give systematically biased parameter estimates for the true, full ground-up distribution."
            },
            {
                "q": "What is the effect of applying both an excess and a reinsurance retention limit to a claim?",
                "a": "The insurer pays the claim amount between the excess and the retention limit.",
                "explain": "This combines the two transformations from earlier in this module into one: the policyholder bears everything up to the excess $d$; the insurer bears the layer <em>between</em> $d$ and the retention $M$; and the reinsurer bears everything above $M$ — a three-way split of the same underlying loss, worth being able to draw as a simple diagram."
            },
            {
                "q": "Why might an actuary calculate both mean and variance of insurer/reinsurer loss distributions under a reinsurance arrangement?",
                "a": "To understand not just expected cost, but also variability/risk each party bears, informing pricing.",
                "explain": "This closes the module by connecting back to CM2 Module 3's risk-measures theme — the <em>mean</em> alone tells you the expected cost each party bears, but the <em>variance</em> (and higher moments, developed further in Modules 19-20) tells you how <em>risky</em> each party's position is, which matters just as much for setting an appropriate reinsurance price as the expected cost does."
            }
        ]
    },
    {
        "id": "m16",
        "title": "Extreme value theory",
        "description": "Introduces distributions and measures suitable for modelling the extreme tail (severity) of loss distributions, and how to compare their tail weight.",
        "cards": [
            {
                "q": "What is 'extreme value theory' (EVT) used for in an actuarial context?",
                "a": "Modelling the behaviour of extreme (very large) losses in the tail of a distribution.",
                "explain": "This module directly answers Module 15's closing warning — that reinsurance pricing depends heavily on <em>tail</em> behaviour — by providing the specialised statistical machinery for modelling exactly that tail, rather than trying to force a single distribution to fit both the everyday bulk of losses and their rare extremes equally well."
            },
            {
                "q": "What is the 'generalised extreme value' (GEV) distribution?",
                "a": "A family of distributions describing the limiting distribution of the maximum of a large number of i.i.d. random variables.",
                "explain": "This is EVT's analogue of the Central Limit Theorem — just as the CLT (CS1 Module 4) says sums of i.i.d. variables converge to a normal distribution regardless of the underlying distribution, the Fisher-Tippett theorem underlying GEV says MAXIMA of i.i.d. variables converge to one of only three possible shapes, giving a similarly universal justification for using GEV to model extremes."
            },
            {
                "q": "What is the 'generalised Pareto distribution' (GPD) used for in EVT?",
                "a": "Modelling the distribution of exceedances over a high threshold — the 'peaks over threshold' approach.",
                "explain": "This is EVT's second major tool, complementing GEV — where GEV models the maximum of <em>blocks</em> of data (e.g. the worst loss each year), GPD instead models every individual <em>exceedance</em> above a threshold, generally using the data more efficiently since it doesn't discard all-but-one observation per block."
            },
            {
                "q": "What are the three types (domains of attraction) within the GEV family?",
                "a": "Gumbel, Fréchet, and (reversed) Weibull, corresponding to light-tailed, heavy-tailed, and bounded-tailed distributions.",
                "explain": "Worth anchoring each to a familiar parent distribution: Gumbel is the limit for light-tailed distributions like the normal or exponential; Fréchet is the limit for heavy-tailed distributions like the Pareto (the actuarially important case, covered next); and the reversed Weibull is the limit for distributions with a finite upper endpoint (like the uniform)."
            },
            {
                "q": "What is meant by a 'heavy-tailed' distribution?",
                "a": "A distribution where extreme values are relatively more likely compared to a light-tailed distribution.",
                "explain": "This informal definition is made precise by the rest of this module's cards — a heavy tail can be characterised rigorously via a <em>decreasing</em> hazard rate, via the ratio of higher to lower moments, or via membership in the Fréchet domain of attraction above; the various measures are different lenses on the same underlying phenomenon."
            },
            {
                "q": "Give an example of a heavy-tailed distribution commonly used for modelling large losses.",
                "a": "The Pareto distribution.",
                "explain": "The Pareto distribution recurs constantly in general insurance precisely because its <em>power-law</em> tail decays slowly enough to realistically capture the possibility of catastrophic losses, unlike the exponential or normal (whose tails decay exponentially/faster and would badly understate extreme-event risk)."
            },
            {
                "q": "What is a common measure of 'tail weight' used to compare distributions?",
                "a": "The ratio of higher to lower moments, or examining the hazard rate's behaviour as $x \\to \\infty$.",
                "explain": "The hazard rate here is CS2 Module 6's force of mortality concept ($\\mu_x$), reused as a general 'failure rate' idea outside a mortality context — for loss distributions it answers 'given a loss has already exceeded $x$, how likely is an immediate further increase', and its long-run trend as $x\\to\\infty$ is exactly what separates light- from heavy-tailed behaviour."
            },
            {
                "q": "How does a decreasing hazard rate (as $x$ increases) relate to tail weight?",
                "a": "Associated with a heavier tail — large values remain relatively likely.",
                "explain": "Intuitively, a decreasing hazard rate means that the <em>further</em> into the tail you already are, the less additional 'resistance' there is to going even further — this self-reinforcing behaviour is exactly what produces the slowly-decaying power-law tails characteristic of the Pareto distribution above."
            },
            {
                "q": "How does an increasing hazard rate (as $x$ increases) relate to tail weight?",
                "a": "Associated with a lighter tail — extreme values become rarer more quickly.",
                "explain": "This is the direct opposite of the decreasing-hazard-rate case above, and it's the pattern typical of the normal or gamma distributions — extreme values become progressively harder to exceed the further out you go, which is exactly why these distributions are poor choices for modelling catastrophic losses."
            },
            {
                "q": "Why is comparing tail weight important when choosing a distribution for reinsurance pricing?",
                "a": "Underestimating tail weight could significantly understate the true risk for high-layer reinsurance.",
                "explain": "This directly restates Module 15's closing warning in this module's own vocabulary — excess of loss reinsurance at a high retention $M$ (Module 15) is priced almost entirely off the distribution's tail behaviour, so getting the tail weight wrong (e.g. fitting a light-tailed distribution to heavy-tailed data) could leave the reinsurer dangerously under-priced for exactly the losses it's meant to cover."
            },
            {
                "q": "What is the 'peaks over threshold' approach in extreme value theory?",
                "a": "Modelling only exceedances above a chosen high threshold using the generalised Pareto distribution.",
                "explain": "This is the practical, data-driven counterpart to the GPD definition given earlier — worth noting the direct structural parallel with Module 15's excess-of-loss framework: both involve conditioning on 'the loss exceeded a threshold $d$' and modelling only the excess above it, just for different purposes (reinsurance pricing there, tail-shape estimation here)."
            },
            {
                "q": "What practical challenge arises from having limited historical data on extreme events?",
                "a": "Extreme events are rare, so little data is available to reliably estimate tail behaviour, leading to estimation uncertainty.",
                "explain": "This is the fundamental tension EVT exists to manage: by definition, the events actuaries most need to understand (catastrophic losses) are the ones with the fewest historical observations, so EVT's theoretical justification (the limiting GEV/GPD results) has to substitute for the empirical data that simply isn't available in sufficient quantity."
            },
            {
                "q": "How might you use extreme value theory to estimate a high quantile beyond the range of observed data?",
                "a": "Fit an appropriate extreme value distribution to the tail, then extrapolate using the fitted model.",
                "explain": "This is EVT's key practical payoff — rather than extrapolating blindly beyond the observed data range (which the empirical distribution simply cannot do), fitting a GEV or GPD to the <em>observed</em> tail behaviour gives a theoretically-grounded way to estimate quantiles or return periods for losses more extreme than anything actually seen yet."
            },
            {
                "q": "Why is extreme value theory particularly relevant for catastrophe risk modelling?",
                "a": "Catastrophic losses are by nature in the extreme tail, critical for solvency and reinsurance decisions.",
                "explain": "This connects the whole module back to real-world practice: catastrophe models (for events like hurricanes or earthquakes) are exactly the domain where EVT's quantile-extrapolation trick from the previous card is indispensable, since regulators and reinsurers need estimates of losses at return periods (e.g. 1-in-200-year events) far beyond the length of any available historical record."
            },
            {
                "q": "How does the choice of threshold in the peaks-over-threshold approach affect the resulting model?",
                "a": "Too low violates the theoretical justification; too high leaves too little data — a bias-variance trade-off.",
                "explain": "This is a specific instance of a bias-variance trade-off recurring throughout the whole curriculum (compare Module 15's excess/truncation choices, or the graduation smoothing trade-offs of Module 10) — too low a threshold includes data that isn't 'extreme' (violating the asymptotic theory the GPD relies on, i.e. bias), while too high a threshold leaves so few exceedances that the fitted parameters become highly unstable (i.e. variance)."
            }
        ]
    },
    {
        "id": "m17",
        "title": "Copulas",
        "description": "Introduces copulas as a way of modelling the dependence structure between random variables separately from their marginal distributions, including the Gaussian copula and the Archimedean family.",
        "cards": [
            {
                "q": "What is a 'copula'?",
                "a": "A multivariate distribution function on $[0,1]^n$ that captures the dependence structure between random variables, separate from their marginals.",
                "explain": "This module addresses a gap left open by everything before it — Modules 15-16 developed rich tools for modelling a <em>single</em> loss distribution's shape and tail, but real insurers hold many correlated risks simultaneously, and a copula is the tool for capturing <em>how</em> those risks move together, independently of what each individual risk's own distribution looks like."
            },
            {
                "q": "What does Sklar's theorem state (conceptually)?",
                "a": "Any multivariate joint distribution can be decomposed into its marginal distributions and a copula describing dependence between them.",
                "explain": "This is the theoretical foundation that makes copulas useful in the first place — it guarantees that <em>any</em> joint distribution, however complex, can always be split cleanly into 'what each variable looks like on its own' (the marginals, e.g. fitted with Module 15's severity distributions) and 'how they move together' (the copula), with no loss of generality."
            },
            {
                "q": "Why is it useful to model dependence via a copula, separately from the marginals?",
                "a": "It allows flexible combination of any chosen marginals with any chosen dependence structure.",
                "explain": "This is the direct practical payoff of Sklar's theorem above — an actuary can fit a Pareto to one line of business's losses (Module 16) and a lognormal to another, then bolt on a <em>separately</em>-chosen copula to model their joint dependence, rather than being forced to find one exotic bivariate distribution that does both jobs at once."
            },
            {
                "q": "What is 'concordance' between two random variables, loosely speaking?",
                "a": "A tendency for large values of one variable to be associated with large values of the other.",
                "explain": "This is a more general notion of 'moving together' than ordinary linear correlation — worth noting copulas are often summarised using rank-based concordance measures (like Kendall's tau or Spearman's rho) rather than Pearson correlation, precisely because concordance depends only on the dependence structure, not on the (arbitrary) marginal distributions."
            },
            {
                "q": "What is 'tail dependence'?",
                "a": "The tendency for extreme values of two variables to occur together, more or less than average dependence would suggest.",
                "explain": "This connects directly back to Module 16's extreme value theory — just as that module asked 'how likely are extreme values for <em>one</em> risk', this asks 'how likely are extreme values for <em>two</em> risks <em>at the same time</em>', which is exactly the aggregate-risk question that matters for solvency under stress."
            },
            {
                "q": "What is 'upper tail dependence'?",
                "a": "The tendency for both variables to take extremely high values simultaneously.",
                "explain": "For insurance losses (where 'high' means 'bad'), <em>upper</em> tail dependence is usually the direction actuaries worry about most — it captures whether a catastrophic loss on one risk tends to coincide with a catastrophic loss on another, which is exactly the correlated-tail-risk scenario a naive independence assumption would miss."
            },
            {
                "q": "What is 'lower tail dependence'?",
                "a": "The tendency for both variables to take extremely low values simultaneously.",
                "explain": "This is the mirror image of upper tail dependence, for the <em>low</em>-value end of each distribution — less central to loss modelling specifically, but it completes the general concept and matters more directly in contexts like asset returns (CM2's territory), where a simultaneous market crash is a lower-tail event."
            },
            {
                "q": "Why is tail dependence particularly important for actuarial risk modelling?",
                "a": "It captures whether extreme losses in different risks tend to occur together, critical for aggregate risk under stress.",
                "explain": "This is the module's central practical point, echoing Module 16's own warning about tail weight — an insurer that assumes independence (or uses a copula with weak tail dependence, like Gaussian below) when the true risks share a common trigger could badly understate its capital requirement for the exact stress scenario that threatens solvency."
            },
            {
                "q": "What is the Gaussian copula?",
                "a": "A copula derived from the multivariate normal distribution, characterised by a correlation matrix, with zero tail dependence.",
                "explain": "Worth being precise about what 'zero tail dependence' means here: even with a <em>high</em> overall correlation coefficient, the Gaussian copula still implies that jointly extreme events become vanishingly unlikely relative to what's typically observed in real financial/insurance data — a subtle but important limitation, explored in the next card."
            },
            {
                "q": "What is a key limitation of the Gaussian copula for modelling financial/insurance risk?",
                "a": "Its lack of tail dependence can understate simultaneous extreme events, implicated in the 2008 financial crisis.",
                "explain": "This is a well-known real-world cautionary tale worth remembering as a concrete anchor for the abstract theory — the Gaussian copula was widely used to price correlated mortgage default risk (CDOs) before 2008, and its zero tail dependence meant the models badly understated the true probability of <em>many</em> mortgages defaulting simultaneously in a systemic downturn."
            },
            {
                "q": "What is the 'Archimedean' family of copulas?",
                "a": "A class constructed from a generator function, including the Gumbel, Clayton, and Frank copulas, with varying tail dependence.",
                "explain": "These provide the flexibility the Gaussian copula lacks — by choosing a different generator function, an actuary can select a copula whose tail dependence properties match the risk being modelled, rather than being stuck with the Gaussian's structurally zero tail dependence regardless of the correlation parameter chosen."
            },
            {
                "q": "How does the Clayton copula typically behave in terms of tail dependence?",
                "a": "It exhibits lower tail dependence but no upper tail dependence.",
                "explain": "This makes the Clayton copula a poor default choice for modelling jointly catastrophic <em>insurance</em> losses (which is an upper-tail concern), but a natural fit wherever the risk of concern is a simultaneous <em>downside</em>, such as jointly poor asset returns — worth contrasting directly with the Gumbel copula in the next card, which has the opposite asymmetry."
            },
            {
                "q": "How does the Gumbel copula typically behave in terms of tail dependence?",
                "a": "It exhibits upper tail dependence but no lower tail dependence.",
                "explain": "This is the mirror image of the Clayton copula above, and it's the more natural choice for modelling jointly <em>extreme</em> insurance losses (an upper-tail phenomenon) — the two copulas' complementary asymmetries illustrate why the choice of copula family, not just its correlation parameter, materially changes what kind of joint extreme behaviour a model can capture."
            },
            {
                "q": "How would you select a copula suitable for modelling a particular pair of risks?",
                "a": "Consider the type of tail dependence expected, and choose a family whose properties match that expectation.",
                "explain": "This card ties together the whole module — having established that different copula families imply structurally different tail behaviour (Gaussian: none; Clayton: lower only; Gumbel: upper only), the practical modelling task is to match the <em>chosen</em> copula's tail properties to the actual risk being represented, informed by data and by understanding the underlying causal drivers of joint extreme events."
            },
            {
                "q": "Why might an insurer model the dependence between two lines of business using a copula?",
                "a": "Losses across lines are often correlated (e.g. a common event), and independence would understate aggregate risk.",
                "explain": "This closes the module on its central practical motivation — property and business-interruption losses from the same storm, for instance, are far from independent, and modelling them with an independence assumption (rather than an appropriately tail-dependent copula) would systematically understate the insurer's true aggregate exposure to a single large event."
            }
        ]
    },
    {
        "id": "m18",
        "title": "Reinsurance",
        "description": "Covers the main forms of reinsurance — proportional and excess of loss — and how they affect the distribution of claims retained by the insurer and ceded to the reinsurer.",
        "cards": [
            {
                "q": "What is 'reinsurance'?",
                "a": "Insurance purchased by an insurer to transfer part of its risk to another party (the reinsurer).",
                "explain": "This module formalises and extends the reinsurance concepts already introduced in passing in Module 15 (excess of loss) and used to motivate Module 17's copulas (dependence between lines of business) — it's worth seeing this as the natural next step: 'insurance for insurers', with the <em>same</em> risk-transfer logic as ordinary insurance, just one layer up."
            },
            {
                "q": "What is 'proportional reinsurance'?",
                "a": "An arrangement where the reinsurer receives a fixed proportion of premium and pays the same proportion of every claim.",
                "explain": "This is the same definition already given in Module 15 and referenced in CM2 Module 17 — worth noting here that this module now develops <em>two</em> specific varieties of it (quota share and surplus, next two cards), rather than treating 'proportional reinsurance' as a single monolithic concept."
            },
            {
                "q": "What is 'quota share' reinsurance?",
                "a": "A form of proportional reinsurance where the same fixed proportion applies to every policy in a defined portfolio.",
                "explain": "This is the simplest possible proportional arrangement — a single fixed percentage $\\alpha$ applied uniformly across an entire portfolio, regardless of any individual policy's size or risk characteristics, which is straightforward to administer but doesn't let the insurer fine-tune protection by risk size the way surplus reinsurance (next card) can."
            },
            {
                "q": "What is 'surplus' reinsurance?",
                "a": "A form of proportional reinsurance where the proportion ceded varies by policy, often based on risk size relative to the insurer's retention.",
                "explain": "This refines quota share by letting the ceded proportion vary policy-by-policy — typically the insurer sets a fixed monetary retention line per policy and cedes whatever proportion of <em>that</em> policy's sum insured lies above it, so large, risky policies get proportionally more reinsurance protection than small ones."
            },
            {
                "q": "What is 'excess of loss' (non-proportional) reinsurance?",
                "a": "An arrangement where the reinsurer pays the amount by which a claim exceeds a specified retention level.",
                "explain": "This is the same excess of loss concept from Module 15 and CM2 Module 17, now placed alongside proportional reinsurance as the second of the two fundamental reinsurance categories — the key contrast to hold onto: proportional shares <em>every</em> claim by a fixed ratio, while excess of loss only responds to the <em>largest</em> claims, above the retention."
            },
            {
                "q": "What is 'aggregate excess of loss' reinsurance?",
                "a": "A form of excess of loss reinsurance where the retention applies to total aggregate claims over a period.",
                "explain": "This shifts the threshold from an <em>individual</em> claim (as in ordinary excess of loss) to the <em>total</em> of all claims over a period — connecting directly to Module 19's compound distribution $S$, since aggregate excess of loss effectively caps the insurer's exposure to the whole random variable $S$, not just to any single large claim within it."
            },
            {
                "q": "How does excess of loss reinsurance affect the insurer's retained claim amount for a claim of size $X$, with retention $M$?",
                "a": "The insurer retains $\\min(X,M)$; the reinsurer pays $\\max(X-M,0)$.",
                "explain": "This is precisely Module 15's excess-of-loss transformation restated with explicit min/max notation — worth noting $\\min(X,M)+\\max(X-M,0)=X$ always, confirming the split is exhaustive: whatever the reinsurer doesn't pay, the insurer retains, and the two amounts always sum back to the original claim."
            },
            {
                "q": "How does proportional reinsurance (retained proportion $\\alpha$) affect the insurer's retained claim amount?",
                "a": "The insurer retains $\\alpha X$; the reinsurer pays $(1-\\alpha)X$.",
                "explain": "This is the proportional analogue of the min/max split in the previous card — much simpler algebraically, since it's just a linear scaling of $X$ rather than a piecewise function, which is exactly why proportional reinsurance's effect on moments (mean, variance) is so much easier to compute than excess of loss's."
            },
            {
                "q": "What is the effect of excess of loss reinsurance on the skewness of the insurer's retained aggregate claims?",
                "a": "It reduces skewness (and variance), removing the largest, most extreme individual claims.",
                "explain": "This is exactly the mechanism Module 16's extreme value theory was built to characterise — by capping every individual claim at $M$, excess of loss reinsurance directly truncates the <em>right tail</em> of the severity distribution feeding into the compound aggregate claims model (Module 19), which mechanically pulls in the extreme upper values driving both variance and (especially) skewness."
            },
            {
                "q": "Why might an insurer choose excess of loss reinsurance over proportional reinsurance?",
                "a": "To specifically protect against large individual claims (tail risk), while retaining more premium/profit from smaller claims.",
                "explain": "This is the key strategic trade-off between the two reinsurance categories — proportional reinsurance shares profit and risk uniformly on <em>every</em> claim (small and large alike), while excess of loss lets the insurer keep the (usually profitable) bulk of small claims entirely, paying reinsurance premium only for protection against the rare, large claims that actually threaten solvency."
            },
            {
                "q": "How would you calculate the moments of claims paid by the insurer versus the reinsurer?",
                "a": "Apply the reinsurance transformation to the underlying claim distribution, and calculate the relevant moments.",
                "explain": "This is a direct, general statement of the technique implicit in the two transformation cards above ($\\min(X,M)$/$\\max(X-M,0)$ for excess of loss, $\\alpha X$/$(1-\\alpha)X$ for proportional) — once you have the transformed random variable, ordinary moment calculations (mean, variance) proceed exactly as for any other transformed distribution."
            },
            {
                "q": "How does excess of loss reinsurance interact with a compound distribution model of aggregate claims?",
                "a": "It's applied at the individual claim severity level before aggregating, changing the severity feeding into the compound model.",
                "explain": "This directly previews Module 19's compound distribution framework $S=X_1+\\dots+X_N$ — reinsurance modifies each individual $X_i$ <em>before</em> the sum is formed, so the insurer's retained aggregate claims become a compound distribution built from the <em>truncated</em> severity $\\min(X_i,M)$, not the original ground-up severity."
            },
            {
                "q": "What is the effect on the reinsurer's claims of a very high retention level $M$?",
                "a": "Fewer claims exceed the retention, so the reinsurer pays out less frequently.",
                "explain": "This is intuitive from the $\\max(X-M,0)$ formula above — as $M$ grows, fewer individual claims $X$ exceed it at all, so the reinsurer's claim <em>frequency</em> falls even as, conditional on a claim occurring, its size (whatever exceeds the now-higher $M$) may still be large — a frequency/severity trade-off worth being explicit about."
            },
            {
                "q": "Why might an insurer use a combination of both proportional and excess of loss reinsurance?",
                "a": "To get proportional risk/profit sharing plus specific protection against very large individual claims.",
                "explain": "This closes the loop between the two reinsurance categories developed in this module — layering excess of loss <em>on top</em> of a quota share arrangement, say, lets an insurer share ordinary claims volatility broadly with the reinsurer (via the proportional layer) while still buying targeted catastrophe protection against extreme individual losses (via the excess of loss layer), combining both cards' benefits."
            },
            {
                "q": "How does reinsurance reduce an insurer's regulatory capital requirements, broadly speaking?",
                "a": "By transferring some of the variability/tail risk of claims, reducing the capital needed to support retained risk.",
                "explain": "This closes the module by connecting reinsurance to the risk-based capital theme that will recur through Module 19's aggregate claims variance and Module 20's ruin theory — since capital requirements are typically set to cover claims variability at some confidence level, and reinsurance mechanically reduces that variability (shown two cards up), it directly reduces the capital an insurer needs to hold against its retained risk."
            }
        ]
    },
    {
        "id": "m19",
        "title": "Risk models 1",
        "description": "Introduces models for the number of claims (frequency) and total claim amounts (aggregate/compound distributions) arising from a portfolio of insurance risks.",
        "cards": [
            {
                "q": "What is the 'individual risk model' for total claims?",
                "a": "A model treating total claims as the sum of a fixed number of individual policies' claim amounts (each possibly zero).",
                "explain": "This module now assembles severity (Module 15's loss distributions) and reinsurance (Module 18) into a full model of an insurer's <em>total</em> claims — the individual risk model is the more literal of the two frameworks: a known, fixed number $n$ of policies, each contributing its own (possibly zero) claim amount."
            },
            {
                "q": "What is the 'collective risk model' for total claims?",
                "a": "A model treating total claims as the sum of a random number of claims, each of random size — a compound distribution.",
                "explain": "This is the more commonly used and mathematically tractable alternative to the individual risk model — rather than tracking each of $n$ policies individually, it just asks 'how many claims occur' and 'how big is each one', which turns out to be both easier to work with and closer to how frequency/severity data is actually collected in practice."
            },
            {
                "q": "What is a 'compound distribution'?",
                "a": "The distribution of $S = X_1 + X_2 + \\dots + X_N$, where $N$ (claim count) and each $X_i$ (claim size) are random, typically independent.",
                "explain": "This is the precise mathematical formalisation of the collective risk model just introduced — a <em>random sum</em>, where both the number of terms ($N$) and each term's value ($X_i$) are themselves random, distinguishing it from an ordinary sum of a fixed number of random variables and requiring the specialised mean/variance formulas developed in the cards that follow."
            },
            {
                "q": "What is a 'compound Poisson distribution'?",
                "a": "A compound distribution where the number of claims $N$ follows a Poisson distribution.",
                "explain": "The Poisson choice for $N$ links directly back to CS2 Module 3's Poisson process for the two-state Markov model — claims arriving as a Poisson process over time is exactly the assumption that makes the total <em>number</em> of claims in a fixed period Poisson-distributed, providing the natural frequency half of this compound model."
            },
            {
                "q": "What key result holds for the sum of independent compound Poisson random variables?",
                "a": "The sum is itself compound Poisson, with rate parameters and severity distributions combined appropriately.",
                "explain": "This closure property is exactly why compound Poisson is so useful for combining separate lines of business or risk sources — an insurer can model each line's aggregate claims separately and then simply combine them into one overall compound Poisson model, without needing an entirely new derivation."
            },
            {
                "q": "How is the mean of a compound distribution $S$ calculated (in terms of $N$ and $X$)?",
                "a": "$E[S] = E[N]\\cdot E[X]$",
                "explain": "This is essentially the law of total expectation applied to a random sum: conditioning on $N=n$ gives $E[S|N=n]=n\\cdot E[X]$, and then averaging over the distribution of $N$ gives $E[N]\\cdot E[X]$ — worth recognising this as the same 'condition then average' technique used throughout probability theory, not a special new formula."
            },
            {
                "q": "How is the variance of a compound distribution $S$ calculated?",
                "a": "$\\text{Var}(S) = E[N]\\text{Var}(X) + \\text{Var}(N)(E[X])^2$",
                "explain": "This is the law of total variance applied to the same random sum — the first term reflects variability in claim <em>severity</em> (weighted by expected claim count), and the second reflects variability in claim <em>frequency</em> (weighted by squared mean severity); both sources of randomness contribute, which is why aggregate claims are riskier than either frequency or severity variability alone would suggest."
            },
            {
                "q": "What is the formula for the variance of a compound Poisson distribution, specifically?",
                "a": "$\\text{Var}(S) = \\lambda E[X^2]$",
                "explain": "This simplifies the general compound-variance formula above using the Poisson's defining property that $E[N]=\\text{Var}(N)=\\lambda$ — substituting into $E[N]\\text{Var}(X)+\\text{Var}(N)(E[X])^2$ and simplifying algebraically collapses neatly to $\\lambda E[X^2]$, one of the reasons compound Poisson is so mathematically convenient (as the later card notes)."
            },
            {
                "q": "What is the coefficient of skewness used to describe about a compound distribution?",
                "a": "The asymmetry of the distribution — actuarial claim distributions are typically positively (right) skewed.",
                "explain": "This positive skewness is exactly the practical consequence of Module 16's heavy-tailed severity distributions (like the Pareto) feeding into the compound sum — it's also precisely why Module 20's normal approximation to $S$ (which is symmetric by construction) tends to perform poorly, motivating the translated gamma and simulation alternatives developed there."
            },
            {
                "q": "What are the major simplifying assumptions typically underlying compound distribution models?",
                "a": "Individual claim amounts are i.i.d. and independent of the number of claims.",
                "explain": "These are the assumptions that make the mean/variance formulas above valid — worth flagging as assumptions to scrutinise in practice: claim <em>sizes</em> might not be independent of claim <em>count</em> (e.g. a catastrophic event driving both many claims and unusually large ones simultaneously), which is exactly the kind of dependence Module 17's copulas exist to model when it matters."
            },
            {
                "q": "What is a 'compound binomial' distribution?",
                "a": "A compound distribution where the number of claims $N$ follows a binomial distribution.",
                "explain": "This is the natural compound-distribution counterpart to the individual risk model's fixed-$n$-policies setup: if each of $n$ known policies independently has a fixed probability of generating exactly one claim, the total claim <em>count</em> is binomial, giving a middle ground between the fully deterministic individual risk model and the fully random Poisson count of the collective model."
            },
            {
                "q": "What is a 'compound negative binomial' distribution, and why might it be used instead of compound Poisson?",
                "a": "$N$ follows a negative binomial; often used to model claim frequency showing overdispersion beyond what Poisson allows.",
                "explain": "This is CS1's overdispersion concern (relevant to Poisson GLMs there too) reapplied to claim counts — for the Poisson, mean and variance are forced to be equal ($E[N]=\\text{Var}(N)=\\lambda$), but real claims data often shows variance exceeding the mean (e.g. because the true claim rate itself varies across policyholders), which the negative binomial's extra parameter can accommodate."
            },
            {
                "q": "How would excess of loss reinsurance be incorporated into a compound distribution model?",
                "a": "Apply the reinsurance transformation to the individual claim severity distribution before combining with the claim count distribution.",
                "explain": "This is exactly the connection previewed at the end of Module 18 — the reinsurance transformation ($\\min(X,M)$ for the insurer's retained amount) is applied to each $X_i$ <em>before</em> summing, so the insurer's retained compound distribution $S_{\\text{ret}}$ uses the truncated severity distribution while frequency $N$ is typically left unchanged (since reinsurance affects claim <em>size</em>, not how many claims occur)."
            },
            {
                "q": "Why is the compound Poisson distribution particularly mathematically convenient for actuarial applications?",
                "a": "Its additive property under independent sums and tractable moment formulas make combining risks/reinsurance easy.",
                "explain": "This card summarises exactly why compound Poisson dominates practical use, tying together the two properties already established in this module: the closure-under-summation result (letting separate risks/lines be combined cleanly) and the simple $\\lambda E[X^2]$ variance formula (letting moments be computed directly without needing the full distribution of $S$)."
            },
            {
                "q": "How would you calculate the probability that aggregate claims $S$ exceed a certain amount, in general?",
                "a": "Using the (often approximated, e.g. via simulation or recursion) distribution of $S$ derived from frequency and severity.",
                "explain": "This closing card is a deliberate admission that, beyond mean and variance, the <em>exact</em> distribution of $S$ is usually intractable analytically — this directly motivates Module 20's whole toolkit of approximation methods (normal approximation, translated gamma, simulation), which exist precisely to answer this kind of tail-probability question in practice."
            }
        ]
    },
    {
        "id": "m20",
        "title": "Risk models 2",
        "description": "Extends risk model theory further — approximating aggregate claims distributions, and applying compound distribution results to reinsurance and portfolio risk assessment.",
        "cards": [
            {
                "q": "What is one common method for approximating the distribution of aggregate claims $S$ when an exact formula is intractable?",
                "a": "A normal approximation using the mean and variance of $S$, or simulation.",
                "explain": "This module opens by directly answering Module 19's closing question — since the exact distribution of $S$ is usually intractable, the normal approximation is the simplest fallback, needing only the mean and variance formulas already derived in Module 19, though (as the next card explains) it's often a poor fit for actuarial data specifically."
            },
            {
                "q": "Why might a normal approximation be poor for aggregate claims from a small or highly skewed portfolio?",
                "a": "Aggregate claims are often positively skewed, so a symmetric normal approximation can be inaccurate, especially in the tails.",
                "explain": "This directly follows from Module 19's card on compound-distribution skewness — a right-skewed true distribution being approximated by a symmetric normal will systematically misjudge the tail, which is precisely the part of the distribution that matters most for setting capital requirements or pricing high-layer reinsurance."
            },
            {
                "q": "What is a translated gamma approximation used for?",
                "a": "A more accurate approximation to a skewed aggregate claims distribution than normal, matching the first three moments.",
                "explain": "This directly fixes the shortcoming of the normal approximation identified in the previous card — by matching not just mean and variance but also <em>skewness</em> (the gamma distribution's natural asymmetry, then shifted/'translated' to match the target mean), it captures the right-skewed shape typical of aggregate claims that a normal approximation structurally cannot."
            },
            {
                "q": "How would simulation be used to estimate the distribution of aggregate claims?",
                "a": "Repeatedly simulate claim numbers and sizes, sum to get simulated aggregate claims, and use the empirical distribution.",
                "explain": "This is the most flexible of the three approximation methods in this module, and it directly recreates the compound-distribution definition from Module 19 ($S=X_1+\\dots+X_N$) as a literal random-number-generation procedure — its main advantage is not needing any distributional-shape assumption at all, at the cost of computational effort and simulation (Monte Carlo) error."
            },
            {
                "q": "How does reinsurance affect the mean and variance of an insurer's retained aggregate claims?",
                "a": "It typically reduces both, since reinsurance removes some claim amount from the insurer's exposure.",
                "explain": "This brings Module 18's reinsurance transformations back into the aggregate-claims context established in Module 19 — since reinsurance caps or scales down each individual claim severity $X_i$ before the compound sum is formed, both the mean and variance of the resulting retained $S$ shrink correspondingly."
            },
            {
                "q": "How would you calculate the reinsurer's expected aggregate claims under excess of loss reinsurance with retention $M$?",
                "a": "Apply $\\max(X-M,0)$ to the individual claim severity distribution, then combine with the claim frequency distribution.",
                "explain": "This is exactly Module 19's reinsurance-incorporation technique applied specifically to the <em>reinsurer</em>'s side rather than the insurer's — worth noting this is the exact mirror image of the insurer's retained amount $\\min(X,M)$, and the two must always sum back to the original claim $X$, consistent with Module 18's min/max identity."
            },
            {
                "q": "What effect does increasing the retention level $M$ have on the insurer's retained variance?",
                "a": "It increases the insurer's retained variance, though it also reduces the reinsurance premium cost.",
                "explain": "This is the central actuarial trade-off in setting retention levels — a higher $M$ means the insurer keeps more of the risk (and therefore more of the <em>variance</em>) itself, but correspondingly pays a smaller reinsurance premium, since the reinsurer is now covering fewer, less-frequent large claims (per Module 18's card on high-retention effects)."
            },
            {
                "q": "How might an insurer decide on an appropriate retention level for excess of loss reinsurance?",
                "a": "Balancing reinsurance premium cost against reduced retained risk/capital, informed by risk appetite.",
                "explain": "This directly resolves the trade-off identified in the previous card — since a higher retention means lower reinsurance cost but higher retained variance (and hence a higher required capital buffer, per Module 18's capital-requirement link), the optimal choice depends on how the insurer weighs cost savings against its own risk appetite and available capital."
            },
            {
                "q": "Why is understanding both frequency and severity distributions separately important, rather than just modelling aggregate claims?",
                "a": "Different risk mitigation tools act on severity (reinsurance) versus frequency (underwriting).",
                "explain": "This is an important practical distinction — excess of loss reinsurance (Module 18) targets <em>severity</em> (capping individual claim size), while underwriting decisions (which risks to accept, at what price) primarily influence <em>frequency</em> (how many claims arise); modelling only the combined aggregate $S$ would obscure which lever actually needs pulling to address a given risk concern."
            },
            {
                "q": "How would a change in claim frequency affect the aggregate claims distribution, holding severity fixed?",
                "a": "It shifts the mean and variance of $N$, correspondingly changing the mean and variance of $S$.",
                "explain": "This follows directly from Module 19's compound mean/variance formulas ($E[S]=E[N]E[X]$, and the two-term variance formula) — since both formulas involve $N$'s own mean and variance as factors, any change in the frequency distribution propagates mechanically through to $S$, even with the severity distribution completely unchanged."
            },
            {
                "q": "What role does correlation between different risks/policies play in aggregate portfolio risk?",
                "a": "Positive correlation (e.g. from a common catastrophic event) increases variance beyond independent-claims assumptions.",
                "explain": "This is exactly why Module 19's independence assumption matters, and it directly connects to Module 17's copula material — a common shock (e.g. a storm affecting many policies simultaneously) breaks independence and inflates the true portfolio variance above what the naive compound-Poisson formulas (which assume independence) would suggest."
            },
            {
                "q": "How might copulas be combined with risk models to assess portfolio-level risk?",
                "a": "By modelling dependence between lines of business, then combining with each line's aggregate claims distribution.",
                "explain": "This is the module's most direct cross-reference back to Module 17 — each line of business gets its own compound aggregate claims distribution $S_i$ (as its marginal), and a copula (Gaussian, Clayton, Gumbel, etc.) then captures how those lines' outcomes move together, letting the insurer assess <em>total</em> portfolio risk honestly rather than under an unrealistic independence assumption."
            },
            {
                "q": "Why might an insurer calculate risk measures like VaR or TailVaR on the aggregate claims distribution?",
                "a": "To quantify capital needed to withstand adverse claims experience at a given confidence level.",
                "explain": "This is CM2 Module 3's VaR/TailVaR risk measures reapplied here to the aggregate claims distribution $S$ rather than to investment losses — the same formulas apply, just with $S$'s (usually right-skewed) distribution in place of a normal loss distribution, which is exactly why the approximation methods earlier in this module (translated gamma, simulation) matter for getting these tail-based capital figures right."
            },
            {
                "q": "How does the choice of severity distribution affect the accuracy of a normal approximation to aggregate claims?",
                "a": "A heavier-tailed severity makes aggregate claims more skewed, worsening the normal approximation.",
                "explain": "This ties Module 16's tail-weight concept directly to this module's approximation-accuracy theme — a heavy-tailed severity (like Pareto) contributes disproportionately to $S$'s skewness (via the $E[X^2]$ term in the compound-Poisson variance and higher moments), making the symmetric normal approximation progressively worse the heavier the underlying severity tail is."
            },
            {
                "q": "Why is risk model theory foundational to general insurance pricing and reserving work?",
                "a": "It provides the mathematical framework for quantifying claims cost and variability, underlying premiums, reserving and capital.",
                "explain": "This closes Modules 19-20 by stating their overall purpose plainly — everything from setting a fair premium (needs $E[S]$), to holding adequate reserves and capital (needs the tail/variance of $S$, via the approximation methods here), to designing reinsurance programmes (Module 18), ultimately rests on this compound-distribution framework for aggregate claims."
            }
        ]
    },
    {
        "id": "m21",
        "title": "Machine learning",
        "description": "Introduces elementary machine learning principles relevant to actuarial work — the bias-variance trade-off, cross-validation, regularisation, supervised/unsupervised learning, and evaluation metrics.",
        "cards": [
            {
                "q": "What is the 'bias-variance trade-off'?",
                "a": "The tension between a model's bias and variance — increasing complexity typically reduces bias but increases variance.",
                "explain": "This closing module steps back from specific actuarial models (survival, time series, loss distributions) to the general statistical-learning principles underlying all of them — the bias-variance trade-off is the same tension already implicit in Module 10's graduation smoothing (too rigid a graduation is biased, too flexible one is noisy) and Module 16's EVT threshold choice, now named and generalised explicitly."
            },
            {
                "q": "How does model complexity typically relate to overfitting?",
                "a": "More complex/flexible models are more prone to overfitting — fitting noise rather than the true underlying pattern.",
                "explain": "This is the practical symptom of the high-variance end of the bias-variance trade-off above — an overfitted model captures random idiosyncrasies of the specific training data (e.g. a graduation with too little smoothing, or an over-parameterised time series model from Module 13-14) rather than the genuine underlying pattern, and so performs poorly on new data."
            },
            {
                "q": "What is 'cross-validation' used for?",
                "a": "Evaluating a model's performance on unseen data (and tuning hyperparameters) by repeatedly splitting into training/validation sets.",
                "explain": "This is the practical antidote to the overfitting risk described above — by holding back some data purely for <em>validation</em> rather than fitting, cross-validation gives an honest estimate of how a model performs on data it hasn't seen, directly analogous to how Module 10's statistical graduation tests check a graduated table against the raw data it wasn't smoothed to match exactly."
            },
            {
                "q": "How does k-fold cross-validation work?",
                "a": "Split into $k$ parts; train on $k-1$, validate on the remaining one, repeated $k$ times, then average results.",
                "explain": "This is the standard practical implementation of the cross-validation idea above — repeating the train/validate split $k$ times (each time holding out a different fold) and averaging makes efficient use of all the data for both training and validation, rather than wasting a large chunk of data on a single validation split."
            },
            {
                "q": "What is 'regularisation' used for?",
                "a": "Reducing overfitting in highly parameterised models by penalising model complexity within the fitting process.",
                "explain": "This offers a direct alternative (or complement) to cross-validation for managing the overfitting risk — rather than just <em>measuring</em> overfitting after the fact via a validation set, regularisation builds a complexity <em>penalty</em> directly into the fitting objective, nudging the model itself away from unnecessarily complex, noise-fitting solutions."
            },
            {
                "q": "Give two common types of regularisation.",
                "a": "Ridge regression (L2 penalty) and Lasso (L1 penalty, which can shrink some coefficients to exactly zero).",
                "explain": "This extends CS1's regression material (Modules 11-13 there) with two specific complexity-penalty techniques — worth remembering the key practical distinction: ridge shrinks all coefficients smoothly toward zero without eliminating any, while Lasso's L1 penalty can force some coefficients to exactly zero, effectively performing automatic variable selection alongside the shrinkage."
            },
            {
                "q": "What is 'supervised learning'?",
                "a": "Machine learning where models are trained on data with known outcomes (labels), to predict outcomes for new data.",
                "explain": "Worth recognising that almost everything covered elsewhere in CS1 and CS2 is a form of supervised learning under this broader umbrella — GLMs (CS1), survival models (Module 6), and time series forecasting (Modules 13-14) all train on data with a known outcome to predict new cases, just using more classical statistical machinery than typical machine-learning algorithms."
            },
            {
                "q": "What is 'unsupervised learning'?",
                "a": "Machine learning where models find structure/patterns in data without pre-labelled outcomes, e.g. clustering.",
                "explain": "This is the natural counterpart to supervised learning above, and it directly connects to CS1's PCA (Module 14 there) — both PCA and clustering search for structure or patterns <em>within</em> the data itself, with no target outcome variable to predict, unlike every regression or survival model built elsewhere in the curriculum."
            },
            {
                "q": "What is 'precision' in evaluating a binary classifier?",
                "a": "Of the cases predicted positive, the proportion that are actually positive.",
                "explain": "This and the next few cards develop classifier-evaluation metrics that generalise CS1's hypothesis-testing error-rate concepts (Type I/II errors) into a more flexible vocabulary — precision specifically answers 'when the model says yes, how often is it right', which is the natural business question when a false positive is costly (e.g. flagging a genuine claim as fraudulent)."
            },
            {
                "q": "What is 'recall' (sensitivity) in evaluating a binary classifier?",
                "a": "Of the actual positive cases, the proportion correctly predicted as positive.",
                "explain": "This is precision's natural counterpart, and it maps directly onto CS1's Type II error / statistical power concept — recall answers 'of all the positive cases, how many did the model actually catch', which matters most when a <em>missed</em> positive is costly (e.g. failing to flag a fraudulent claim)."
            },
            {
                "q": "What is the '$F_1$ score'?",
                "a": "The harmonic mean of precision and recall, providing a single combined measure.",
                "explain": "Since precision and recall above typically trade off against each other (a model that flags everything as positive gets perfect recall but poor precision, and vice versa), the $F_1$ score condenses both into one number — the harmonic mean specifically penalises a large imbalance between the two more heavily than a simple average would."
            },
            {
                "q": "What is a 'ROC curve' used for?",
                "a": "Visualising a classifier's performance across thresholds, plotting true positive rate against false positive rate.",
                "explain": "This generalises the precision/recall trade-off above across every possible classification threshold at once, rather than fixing one threshold and computing a single precision/recall pair — the area under the ROC curve gives a threshold-independent summary of a classifier's overall discriminatory power."
            },
            {
                "q": "What is a 'confusion matrix'?",
                "a": "A table summarising a classifier's predictions versus actual outcomes.",
                "explain": "This is the raw data underlying every metric introduced above — precision, recall and $F_1$ are all just different ratios computed from the four cells of a confusion matrix (true positives, false positives, true negatives, false negatives), so it's worth thinking of it as the single source from which all those summary statistics are derived."
            },
            {
                "q": "What is 'K-means clustering'?",
                "a": "An unsupervised technique partitioning data into $K$ groups by minimising within-cluster variation.",
                "explain": "This is a concrete example of the unsupervised learning category introduced earlier in this module — an actuarial use case worth keeping in mind is segmenting policyholders into risk groups based on multiple behavioural or claims variables simultaneously, without needing to pre-specify what defines a 'good' or 'bad' risk group in advance."
            },
            {
                "q": "How does principal component analysis (PCA) relate to its earlier mention in Data Analysis (CS1)?",
                "a": "Same underlying technique — reducing dimensionality by finding uncorrelated components — applied here for identifying latent structure or anomalies.",
                "explain": "This closes the whole of CS2 by explicitly tying its final card back to CS1, making the point that machine learning as a subject isn't a wholly separate toolkit — many of its techniques (PCA, regression-based supervised learning, cross-validation as an extension of ordinary model validation) are direct extensions or relabellings of statistical tools already built across CS1 and the rest of CS2."
            }
        ]
    }
  ],
  questions: [
    {
      id: "cs2-q1",
      title: "A two-state Markov chain model of policyholder status",
      modules: "Modules 1, 2",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define the Markov property for a discrete-time stochastic process, and explain what it means for a chain to be time-homogeneous.",
          answer:
            "The Markov property states that, given the present state, the future evolution of the process is independent of its past states: $P(X_{n+1}=j \\mid X_n=i, X_{n-1}, \\dots, X_0) = P(X_{n+1}=j \\mid X_n=i)$. A chain is time-homogeneous if this one-step transition probability does not depend on $n$ &mdash; the same transition matrix applies at every step.",
          note: "Candidates should state the conditional independence precisely (conditioning on the <em>full</em> history collapsing to conditioning on just the current state), not just say 'the future depends only on the present' without the formal statement.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "A no-claims-discount-style model of policyholder status has two states, Active (A) and Suspended (S), with one-step transition matrix $P=\\begin{pmatrix}0.9 & 0.1\\\\0.4 & 0.6\\end{pmatrix}$ (rows: from A, from S; columns: to A, to S). Calculate the two-step transition matrix $P^2$.",
          answer:
            "$P^2 = P \\times P = \\begin{pmatrix}0.9(0.9)+0.1(0.4) & 0.9(0.1)+0.1(0.6)\\\\0.4(0.9)+0.6(0.4) & 0.4(0.1)+0.6(0.6)\\end{pmatrix} = \\begin{pmatrix}0.85 & 0.15\\\\0.60 & 0.40\\end{pmatrix}$",
          note: "Each entry of $P^2$ is a row-by-column dot product with $P$ itself &mdash; candidates should keep the row (from-state) and column (to-state) convention consistent throughout, since transposing it silently gives a different, wrong matrix.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "Calculate the stationary distribution $(\\pi_A, \\pi_S)$ of this chain.",
          answer:
            "Solve $\\pi P = \\pi$ with $\\pi_A+\\pi_S=1$: $0.9\\pi_A+0.4\\pi_S=\\pi_A \\Rightarrow 0.4\\pi_S=0.1\\pi_A \\Rightarrow \\pi_S=0.25\\pi_A$. Substituting: $\\pi_A+0.25\\pi_A=1 \\Rightarrow \\pi_A=0.8$, $\\pi_S=0.2$.",
          note: "It's worth checking the answer by substituting back into $\\pi P=\\pi$: $0.8(0.9)+0.2(0.4)=0.8$ and $0.8(0.1)+0.2(0.6)=0.2$, confirming the solution.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on how the stationary distribution found in part (iii) should be interpreted, and on one limitation of this model for representing real policyholder behaviour.",
          answer:
            "The stationary distribution represents the long-run proportion of time the chain spends in each state (or, across a large population started from any mix of states, the long-run proportion Active/Suspended), regardless of the starting distribution &mdash; here, 80% Active and 20% Suspended in the long run. A key limitation is the time-homogeneity assumption: real transition probabilities (e.g. probability of suspension) likely change with policy duration, claims experience, or calendar time, none of which this simple constant-matrix model captures.",
          note: "Candidates should distinguish the stationary distribution's <em>two</em> valid interpretations (long-run time average for one chain, or long-run population proportions for many independent chains) rather than conflating them carelessly, and should give a concrete, specific limitation rather than a vague 'the model is too simple'.",
        },
      ],
    },
    {
      id: "cs2-q2",
      title: "The two-state sickness-health model and a Poisson claims process",
      modules: "Module 3",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define the transition intensities $\\sigma$ and $\\rho$ in the two-state (Healthy/Sick) Markov model, and state the defining property of a Poisson process.",
          answer:
            "$\\sigma$ is the force of sickness (instantaneous rate of transition from Healthy to Sick) and $\\rho$ is the force of recovery (instantaneous rate of transition from Sick to Healthy), both assumed constant. A Poisson process with rate $\\lambda$ has independent increments, and the number of events in any interval of length $t$ follows a Poisson distribution with mean $\\lambda t$.",
          note: "Both definitions should be given in terms of instantaneous, continuous-time rates, not discrete-time transition probabilities, since this module works in continuous time throughout.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "For the two-state model with constant intensities $\\sigma=0.1$ and $\\rho=0.3$, the probability of being Healthy at time $t$ given Healthy at time 0 is $p_{HH}(t) = \\dfrac{\\rho}{\\sigma+\\rho} + \\dfrac{\\sigma}{\\sigma+\\rho}e^{-(\\sigma+\\rho)t}$. Calculate $p_{HH}(2)$.",
          answer:
            "$\\sigma+\\rho=0.4$. $p_{HH}(2) = \\dfrac{0.3}{0.4} + \\dfrac{0.1}{0.4}e^{-0.4(2)} = 0.75 + 0.25\\,e^{-0.8} = 0.75+0.25(0.4493) = 0.8623$",
          note: "As $t\\to\\infty$, $p_{HH}(t)\\to\\rho/(\\sigma+\\rho)=0.75$, which is exactly this model's stationary probability of being Healthy &mdash; candidates should notice $p_{HH}(2)=0.8623$ is already fairly close to this limit.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "Independently, sickness claims on a separate policy arrive as a Poisson process with rate $\\lambda=4$ per year. Calculate the probability of exactly 2 claims arising in a 6-month period.",
          answer:
            "$\\lambda t = 4(0.5) = 2$. $P(N=2) = \\dfrac{e^{-2}2^2}{2!} = \\dfrac{e^{-2}(4)}{2} = 2e^{-2} = 0.2707$",
          note: "The Poisson mean must be rescaled to the 6-month window ($\\lambda t=2$), not left at the annual rate $\\lambda=4$ &mdash; using the wrong mean is the most common error in this type of calculation.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on the relationship between the two-state Markov model of part (ii) and the Poisson process of part (iii), and on a situation where a two-state model with constant intensities would be a poor representation of sickness experience.",
          answer:
            "Both models are built from the same underlying assumption of constant instantaneous transition/event rates and the Markov (memoryless) property &mdash; indeed, the number of Healthy-to-Sick transitions for an individual who stays Healthy for a long period behaves like a Poisson process with rate $\\sigma$. A two-state model with constant intensities would be a poor fit where sickness risk depends on duration already sick (e.g. recovery becoming less likely the longer an illness persists), which violates the memoryless assumption underlying constant $\\sigma$ and $\\rho$.",
          note: "The strongest answers identify the shared memoryless/exponential-holding-time structure explicitly, and give a concrete duration-dependence example (rather than a generic 'sickness is complicated') for why the constant-intensity assumption can fail.",
        },
      ],
    },
    {
      id: "cs2-q3",
      title: "Markov jump processes: constant and age-dependent transition intensities",
      modules: "Modules 4, 5",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the Kolmogorov forward equations for a time-inhomogeneous Markov jump process with generator matrix $A(t)$, and explain what distinguishes a time-inhomogeneous process from a time-homogeneous one.",
          answer:
            "The Kolmogorov forward equations are $\\dfrac{d}{dt}P(s,t) = P(s,t)A(t)$, where $P(s,t)$ is the matrix of transition probabilities from time $s$ to time $t$. In a time-homogeneous process, the generator (transition intensity) matrix $A$ is constant, so transition probabilities depend only on the elapsed time $t-s$; in a time-inhomogeneous process, $A(t)$ varies with $t$ itself (e.g. with age), so transition probabilities depend on the specific times $s$ and $t$, not just their difference.",
          note: "Candidates should note the equation holds with $A(t)$ evaluated at the <em>later</em> time $t$, post-multiplying $P(s,t)$ &mdash; this is the forward equation convention, distinct from the backward equations.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 5,
          question:
            "A time-inhomogeneous force of mortality follows Gompertz's law, $\\mu_x = Bc^x$ with $B=0.0001$ and $c=1.1$. Using $_tp_x = \\exp\\left(-\\displaystyle\\int_0^t \\mu_{x+s}\\,ds\\right)$ and $\\displaystyle\\int_0^t Bc^{x+s}\\,ds = \\dfrac{Bc^x(c^t-1)}{\\ln c}$, calculate $_{10}p_{50}$.",
          answer:
            "$\\displaystyle\\int_0^{10}\\mu_{50+s}\\,ds = \\dfrac{0.0001(1.1^{50})(1.1^{10}-1)}{\\ln 1.1} = \\dfrac{0.0001(117.391)(1.5937-1)}{0.09531} = \\dfrac{0.0001(117.391)(0.5937)}{0.09531} = 0.19630$. $_{10}p_{50} = e^{-0.19630} = 0.8218$",
          note: "This is exactly the time-inhomogeneous analogue of the constant-force survival formula $_tp_x=e^{-\\mu t}$ from earlier CM1/CS2 material &mdash; the only difference is that the constant $\\mu t$ in the exponent is replaced by the <em>integral</em> of the age-varying $\\mu_{x+s}$ over the period, using the given closed-form result for a Gompertz force.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain why a time-homogeneous Markov jump process would be an inappropriate model for human mortality over a wide age range, in light of part (ii).",
          answer:
            "A time-homogeneous model assumes a constant transition intensity (force of mortality) regardless of age, implying survival probabilities depend only on elapsed time, not on the age at which that time is spent. Part (ii)'s Gompertz law shows mortality rises exponentially with age in reality, so a 10-year survival probability starting at age 50 should differ substantially from one starting at, say, age 80 &mdash; a feature only a time-inhomogeneous model (with $\\mu_x$ varying by age) can represent.",
          note: "The key point to make explicit is that a constant-intensity model forces $_tp_x$ to depend only on $t$, not on $x$ &mdash; which is exactly the feature Gompertz's law (and mortality in general) violates.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 2,
          question: "Discuss briefly why a time-homogeneous Markov jump process remains a useful modelling simplification despite the limitation identified in part (iii).",
          answer:
            "Over a sufficiently short age range or short projection horizon, transition intensities change relatively little, so a time-homogeneous approximation can be adequate and is far more mathematically tractable (e.g. yielding simple closed-form results like $_tp_x=e^{-\\mu t}$, and simpler estimation), making it a reasonable working simplification for short-term or narrow-age-band applications.",
          note: "The point to convey is a trade-off between tractability and realism, not that time-homogeneity is simply 'wrong' &mdash; it remains a defensible approximation in the right circumstances.",
        },
      ],
    },
    {
      id: "cs2-q4",
      title: "Estimating a survival function from censored data",
      modules: "Modules 6, 7",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define right-censoring and explain why the Kaplan-Meier estimator, rather than a simple empirical proportion, is used to estimate a survival function from censored data.",
          answer:
            "A right-censored observation is one where the individual's true event (e.g. death) time is only known to exceed some observed value &mdash; e.g. because the individual is still alive when the study ends, or withdraws early. A simple empirical proportion of survivors would treat censored individuals as if their status at censoring were their final outcome, discarding the partial survival information they do provide; the Kaplan-Meier estimator instead uses each individual's observed period at risk, correctly incorporating that information without assuming an event occurred.",
          note: "The key point is that censored individuals are <em>not</em> discarded entirely and are <em>not</em> treated as deaths &mdash; they contribute exposure up to their censoring time, then leave the risk set, which is exactly what the Kaplan-Meier construction in part (ii) reflects.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 6,
          question:
            "A study of 5 individuals records the following times (in months) since entry: 2 (death), 3 (death), 5 (censored), 6 (death), 8 (death). Calculate the Kaplan-Meier estimate of the survival function $S(t)$ at each death time.",
          answer:
            "$t=2$: at risk $n=5$, 1 death, $S(2)=1\\times(1-1/5)=0.800$. $t=3$: at risk $n=4$, 1 death, $S(3)=0.800\\times(1-1/4)=0.600$. $t=5$: censored, removed from the risk set (no change to $S$); at risk falls to $n=2$ for the next death. $t=6$: at risk $n=2$, 1 death, $S(6)=0.600\\times(1-1/2)=0.300$. $t=8$: at risk $n=1$, 1 death, $S(8)=0.300\\times(1-1/1)=0.000$.",
          note: "The risk set size must be reduced by the censored individual at $t=5$ even though $S(t)$ itself is unchanged at that point &mdash; forgetting to remove the censored individual from the at-risk count before the next death (giving $n=3$ instead of $n=2$ at $t=6$) is the most common error.",
        },
        {
          label: "(iii)",
          command: "Comment",
          marks: 2,
          question: "Comment on why $S(8)=0$ in part (ii), and whether this should be interpreted as meaning no individual could survive beyond 8 months.",
          answer:
            "$S(8)=0$ simply because every individual in this small sample who was not censored had died by $t=8$ &mdash; it is an artefact of the specific (small) sample observed, not evidence that survival beyond 8 months is impossible in the underlying population. With only 5 individuals, the Kaplan-Meier estimate is subject to considerable sampling variability, especially in the tail.",
          note: "Candidates should recognise this as a small-sample estimation artefact rather than a substantive finding about the true survival distribution.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 2,
          question: "Explain what would happen to the Kaplan-Meier estimate at $t=6$ and $t=8$ if the individual censored at $t=5$ had instead died at $t=5$.",
          answer:
            "The death at $t=5$ would itself produce a drop in $S$: $S(5)=0.600\\times(1-1/3)=0.400$ (at risk $n=3$ at that point). The subsequent risk set at $t=6$ would still be $n=2$ (unchanged from the original calculation, since the individual leaves the risk set either way), so $S(6)=0.400\\times(1-1/2)=0.200$ and $S(8)=0.200\\times(1-1/1)=0.000$ &mdash; lower throughout from $t=5$ onward than in part (ii), since this extra death removes probability mass that censoring alone would not have.",
          note: "The at-risk counts from $t=6$ onward are unaffected by whether the $t=5$ individual died or was censored (either way, they leave the risk set) &mdash; only the survival function level itself drops further, because a death (unlike censoring) directly reduces $S$.",
        },
      ],
    },
    {
      id: "cs2-q5",
      title: "Proportional hazards and estimating exposure to risk",
      modules: "Modules 8, 9",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define the proportional hazards assumption underlying the Cox model, and explain the interpretation of a fitted coefficient $\\beta$ for a binary covariate.",
          answer:
            "The Cox proportional hazards model assumes each individual's hazard is a fixed multiple of a common baseline hazard: $h(t\\mid \\mathbf{z}) = h_0(t)e^{\\boldsymbol{\\beta}^T\\mathbf{z}}$, so the ratio of hazards between any two individuals is constant over time, regardless of the (unspecified) baseline hazard's shape. For a binary covariate $z$ (e.g. smoker=1, non-smoker=0) with coefficient $\\beta$, $e^{\\beta}$ is the hazard ratio &mdash; the multiplicative factor by which the hazard changes for $z=1$ relative to $z=0$.",
          note: "The 'proportional' in proportional hazards refers specifically to the hazard <em>ratio</em> being constant over time, not to the hazard itself being constant &mdash; the baseline hazard $h_0(t)$ is left completely unspecified and can vary with $t$ in any shape.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 2,
          question: "A Cox model fitted to lapse data gives a coefficient of $\\beta=0.5$ for a covariate indicating whether a policyholder pays annually rather than monthly. Calculate the hazard ratio, and state which payment frequency is associated with higher lapse risk.",
          answer:
            "Hazard ratio $=e^{0.5}=1.6487$. Annual payers have a lapse hazard 1.65 times that of monthly payers (holding other covariates fixed), so annual payment is associated with higher lapse risk.",
          note: "Since $\\beta>0$, the hazard ratio $e^\\beta>1$ confirms higher risk for the covariate's indicated group &mdash; a negative $\\beta$ would instead give a hazard ratio below 1, indicating lower risk.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 5,
          question:
            "A mortality investigation covers exact age 50 to exact age 51, over calendar year 2020. Life A turns exact age 50 on 1 March 2020 and survives the full period. Life B is already exact age 50 at 1 January 2020 and dies on 1 July 2020 (exact age 50.5). Life C is exact age 50 at 1 January 2020 and withdraws from observation on 1 October 2020 (exact age 50.75). Calculate the total central exposed to risk (in years) across all three lives.",
          answer:
            "Life A: observed from 1 March to 31 December 2020, i.e. 10 months $=10/12=0.8333$ years. Life B: observed from 1 January to death on 1 July, i.e. 6 months $=0.5$ years. Life C: observed from 1 January to withdrawal on 1 October, i.e. 9 months $=0.75$ years. Total central exposed to risk $=0.8333+0.5+0.75=2.0833$ years.",
          note: "Each life's exposure runs only over the period they are actually both alive <em>and</em> under observation within the age 50-51 rate interval &mdash; Life A only enters the interval on 1 March (turning 50), while Lives B and C are already in it from 1 January, and each life's exposure ends at death, withdrawal, or the period end, whichever comes first.",
        },
        {
          label: "(iv)",
          command: "Calculate",
          marks: 3,
          question: "Using the total exposure from part (iii) and the single death observed (Life B), calculate the central mortality rate $m_{50}$, and comment on the reliability of this estimate.",
          answer:
            "$m_{50} = \\dfrac{\\text{deaths}}{\\text{central exposed to risk}} = \\dfrac{1}{2.0833} = 0.480$. This estimate is based on only 3 lives and 1 death, so it is subject to very high sampling variability and should not be treated as a reliable estimate of the true underlying mortality rate &mdash; a credible estimate would require a far larger exposed-to-risk investigation.",
          note: "The formula divides the observed death <em>count</em> by the exposure in years, giving units of 'deaths per life-year' &mdash; candidates should flag the tiny sample size explicitly rather than just quoting the number without comment.",
        },
      ],
    },
    {
      id: "cs2-q6",
      title: "Testing and constructing a graduated mortality table",
      modules: "Modules 10, 11",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "State two distinct purposes served by applying statistical tests to a graduated mortality table.",
          answer:
            "(1) To check overall goodness of fit &mdash; whether the graduated rates are, in aggregate, consistent with the crude (observed) data (e.g. via a chi-square test). (2) To check for the presence of systematic features not captured by the graduation, such as bias in a particular direction across ages (e.g. via the signs test or cumulative deviations test) or dependence between adjacent ages' deviations (e.g. via the serial correlations test).",
          note: "The two purposes are distinct: an overall chi-square test can pass even while a systematic pattern (e.g. consistent over-estimation at younger ages, under-estimation at older ages) goes undetected, which is exactly why the additional tests exist.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "A graduation is tested against 5 age groups with actual deaths $O$ and graduated (expected) deaths $E$: $O=(40,55,30,45,50)$, $E=(35,50,34,48,53)$. Calculate the chi-square test statistic $\\chi^2=\\sum\\dfrac{(O-E)^2}{E}$.",
          answer:
            "$\\dfrac{(40-35)^2}{35}+\\dfrac{(55-50)^2}{50}+\\dfrac{(30-34)^2}{34}+\\dfrac{(45-48)^2}{48}+\\dfrac{(50-53)^2}{53} = 0.714+0.500+0.471+0.188+0.170 = 2.042$",
          note: "It's worth checking $\\sum O = \\sum E = 220$ before computing &mdash; a mismatch here would indicate a data entry error, since a graduation is normally constructed to preserve the total number of deaths.",
        },
        {
          label: "(iii)",
          command: "Comment",
          marks: 2,
          question: "Comment on the conclusion from the chi-square statistic in part (ii), given a 5% critical value of 9.488 on 4 degrees of freedom.",
          answer:
            "Since $\\chi^2=2.042 \\lt  9.488$, there is no evidence to reject the null hypothesis that the graduated rates are consistent with the crude data &mdash; the graduation passes this overall goodness-of-fit test.",
          note: "Degrees of freedom here is (number of age groups) $-1$; candidates should be able to identify why 1 degree of freedom is lost (the graduation is typically constrained to reproduce the total observed deaths, as noted in part (ii)).",
        },
        {
          label: "(iv)",
          command: "Calculate",
          marks: 4,
          question:
            "A separate graduation by mathematical formula uses Makeham's law $\\mu_x=A+Bc^x$ with fitted parameters $A=0.0002$, $B=0.00005$, $c=1.09$. Calculate the graduated force of mortality $\\mu_{60}$.",
          answer:
            "$\\mu_{60} = 0.0002 + 0.00005(1.09^{60}) = 0.0002 + 0.00005(180.0) = 0.0002+0.00900 = 0.00920$",
          note: "$1.09^{60}$ grows very large ($\\approx180$) &mdash; candidates should compute this power carefully (e.g. via repeated squaring or logarithms) rather than approximating it loosely, since the whole answer is dominated by this term.",
        },
      ],
    },
    {
      id: "cs2-q7",
      title: "Projecting future mortality and an AR(1) time series model",
      modules: "Modules 12, 13, 14",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define the 'reduction factor' approach to mortality projection.",
          answer:
            "The reduction factor approach projects future mortality rates by applying a multiplicative annual improvement factor to a base-year mortality rate: $q_x^{(t)} = q_x^{(0)}\\times RF(x,t)$, where $RF(x,t)$ (often of the form $(1-r_x)^t$ for an age-specific annual reduction rate $r_x$) declines below 1 as $t$ increases, reflecting assumed continuing mortality improvement.",
          note: "The reduction factor is applied <em>multiplicatively</em> to the base rate, and typically compounds year-on-year (i.e. raised to the power of the number of years projected), not simply subtracted once.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question: "A base mortality rate is $q_{65}^{2000}=0.012$, with an assumed constant annual reduction factor of 1.5%. Calculate the projected rate $q_{65}^{2030}$.",
          answer:
            "$q_{65}^{2030} = 0.012\\times(1-0.015)^{30} = 0.012\\times(0.985)^{30} = 0.012\\times0.6354 = 0.007625$",
          note: "The exponent is the number of <em>years</em> projected (30, from 2000 to 2030), applied to the single-year reduction factor $(1-0.015)$ &mdash; using 0.015 directly as a one-off percentage reduction, rather than compounding it over 30 years, is a common error.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 4,
          question: "A time series of annual mortality improvement rates is modelled as a stationary AR(1) process $X_t=\\phi X_{t-1}+\\varepsilon_t$ with $\\phi=0.7$ and $\\text{Var}(\\varepsilon_t)=4$. Calculate the unconditional variance of $X_t$, and the autocorrelations $\\rho(1)$ and $\\rho(2)$.",
          answer:
            "$\\text{Var}(X_t) = \\dfrac{\\sigma_\\varepsilon^2}{1-\\phi^2} = \\dfrac{4}{1-0.49} = \\dfrac{4}{0.51} = 7.843$. For an AR(1), $\\rho(k)=\\phi^k$, so $\\rho(1)=0.7$ and $\\rho(2)=0.7^2=0.49$.",
          note: "The unconditional variance formula $\\sigma_\\varepsilon^2/(1-\\phi^2)$ is only valid because $|\\phi|=0.7\\lt 1$, which is exactly the stationarity condition for an AR(1) process &mdash; the formula would be meaningless (negative or undefined) for $|\\phi|\\geq1$.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 3,
          question: "Discuss briefly why the stationarity condition $|\\phi|\\lt 1$ matters for using this AR(1) model to project future mortality improvement rates.",
          answer:
            "Stationarity ensures the process has a constant, finite unconditional mean and variance, and that shocks $\\varepsilon_t$ have a diminishing (rather than ever-growing) effect on future values as $\\phi^k\\to0$ &mdash; this means projections revert toward a stable long-run mean rather than diverging or drifting without bound, which is essential for a mortality improvement model to give sensible, bounded long-term projections rather than explosive or non-mean-reverting ones.",
          note: "The key mechanism to name explicitly is that $\\phi^k\\to0$ as $k\\to\\infty$ only when $|\\phi|\\lt 1$, which is exactly what causes both the autocorrelations (part iii) and the influence of past shocks to decay over time, underpinning stable long-run projections.",
        },
      ],
    },
    {
      id: "cs2-q8",
      title: "A Pareto severity model and excess of loss reinsurance",
      modules: "Modules 15, 16",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Explain, in terms of the hazard rate, why the Pareto distribution is described as 'heavy-tailed', and why this makes it a common choice for modelling large general insurance losses.",
          answer:
            "The Pareto distribution has a decreasing hazard rate as $x\\to\\infty$, meaning that, conditional on a loss already being large, the 'resistance' to it becoming even larger diminishes rather than increases &mdash; this produces a slowly-decaying, power-law tail. This makes it a natural choice for modelling large losses, since it does not understate the probability of extreme, catastrophic claims the way a lighter-tailed distribution (e.g. exponential or normal) would.",
          note: "The defining feature to state explicitly is the <em>decreasing</em> hazard rate (linking back to the general tail-weight measures of EVT), not simply 'it has a long tail', which is imprecise.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question: "Claim sizes $X$ follow a Pareto distribution with survival function $P(X>x) = \\left(\\dfrac{\\lambda}{\\lambda+x}\\right)^\\alpha$, with $\\alpha=3$ and $\\lambda=2{,}000$ (&pound;). Calculate the probability that a claim exceeds &pound;5,000.",
          answer:
            "$P(X>5{,}000) = \\left(\\dfrac{2{,}000}{2{,}000+5{,}000}\\right)^3 = \\left(\\dfrac{2{,}000}{7{,}000}\\right)^3 = (0.2857)^3 = 0.02332$",
          note: "This is a direct substitution into the given survival function &mdash; candidates should keep $\\lambda$ and $x$ in the same monetary units throughout (both in &pound; here) to avoid a scaling error.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 5,
          question:
            "For this Pareto distribution ($\\alpha=3$, $\\lambda=2{,}000$), the mean is $E[X]=\\dfrac{\\lambda}{\\alpha-1}$ and the expected amount retained by the insurer under excess of loss reinsurance with retention $M$ is $E[\\min(X,M)] = \\dfrac{\\lambda}{\\alpha-1}\\left[1-\\left(\\dfrac{\\lambda}{\\lambda+M}\\right)^{\\alpha-1}\\right]$. Calculate $E[X]$ and, for a retention of $M=\\pounds3{,}000$, the reinsurer's expected payout per claim.",
          answer:
            "$E[X] = \\dfrac{2{,}000}{3-1} = \\pounds1{,}000$. $E[\\min(X,3{,}000)] = \\dfrac{2{,}000}{2}\\left[1-\\left(\\dfrac{2{,}000}{5{,}000}\\right)^{2}\\right] = 1{,}000\\left[1-(0.4)^2\\right] = 1{,}000(1-0.16) = \\pounds840$. Reinsurer's expected payout $= E[X]-E[\\min(X,M)] = 1{,}000-840 = \\pounds160$ per claim.",
          note: "The exponent in $E[\\min(X,M)]$ is $\\alpha-1=2$, <em>not</em> $\\alpha=3$ &mdash; using the wrong exponent (matching the survival function's exponent from part (ii) instead) is the most common error here.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question: "Comment on how the reinsurer's expected payout found in part (iii) would change if the severity distribution instead had a lighter tail than Pareto, with the same overall mean claim size of &pound;1,000.",
          answer:
            "With a lighter-tailed severity distribution but the same mean, less probability mass would sit in the extreme right tail above the retention $M=\\pounds3{,}000$, so the reinsurer's expected payout would typically be lower than the &pound;160 found for the heavy-tailed Pareto &mdash; illustrating that excess of loss reinsurance pricing depends critically on tail weight, not just on the mean claim size.",
          note: "This connects directly back to the module's opening point (part (i)): two severity distributions can share the same mean yet imply very different reinsurance costs, purely because of differing tail weight.",
        },
      ],
    },
    {
      id: "cs2-q9",
      title: "Dependence between lines of business: copulas and reinsurance",
      modules: "Modules 17, 18",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "State Sklar's theorem, and explain what is meant by 'upper tail dependence' between two risks.",
          answer:
            "Sklar's theorem states that any joint distribution can be decomposed into its marginal distributions together with a copula function describing the dependence structure between them, independently of what those marginals are. Upper tail dependence is the tendency for both risks to take extremely high (bad, for losses) values simultaneously, more than an assumption of independence (or a dependence structure like the Gaussian copula) would suggest.",
          note: "Candidates should be precise that Sklar's theorem allows the marginals and the dependence structure to be specified <em>separately</em> and then combined &mdash; it doesn't say marginals and dependence are unrelated in general, just that they can always be decomposed this way.",
        },
        {
          label: "(ii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss why using a Gaussian copula to model the dependence between an insurer's property and business-interruption claims (both of which can be triggered by the same storm event) could understate the insurer's true aggregate risk.",
          answer:
            "The Gaussian copula has zero tail dependence by construction, regardless of its correlation parameter &mdash; even with a high overall correlation, it implies that jointly extreme losses on both lines become vanishingly unlikely relative to what physically correlated risks (like storm-driven property and business-interruption claims) would actually produce. An Archimedean copula with genuine upper tail dependence (e.g. Gumbel) would better reflect the real risk of both lines producing extreme losses from the same catastrophic event simultaneously, and would imply a higher, more realistic aggregate capital requirement.",
          note: "The key technical point is that the Gaussian copula's flaw is structural (zero tail dependence at <em>any</em> correlation level), not simply that its correlation parameter might be mis-estimated &mdash; this is the same limitation historically implicated in underestimating correlated risk in the 2008 financial crisis.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 4,
          question: "A line of business has individual claim mean &pound;1,000 and variance &pound;4,000,000. The insurer cedes 30% of every claim under a quota share treaty (retaining $\\alpha=0.7$). Calculate the insurer's retained mean and variance per claim.",
          answer:
            "Retained mean $=\\alpha E[X] = 0.7(1{,}000) = \\pounds700$. Retained variance $=\\alpha^2\\text{Var}(X) = 0.7^2(4{,}000{,}000) = 0.49(4{,}000{,}000) = \\pounds1{,}960{,}000$ (retained SD $\\approx\\pounds1{,}400$).",
          note: "Variance scales with $\\alpha^2$, not $\\alpha$ &mdash; a common error is to apply the same linear scaling to variance as to the mean, giving $0.7(4{,}000{,}000)$ instead of the correct $0.7^2(4{,}000{,}000)$.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on how quota share reinsurance (part (iii)) and the choice of copula (part (ii)) address different aspects of the insurer's overall risk.",
          answer:
            "Quota share reinsurance reduces the insurer's retained mean and variance on <em>each</em> individual line proportionally, regardless of how that line relates to any other; it does nothing, by itself, to address dependence <em>between</em> lines. The copula, by contrast, governs how extreme outcomes on different lines co-occur, and matters specifically for assessing and managing <em>aggregate</em> risk across the whole portfolio &mdash; an insurer could reduce each line's individual variance via proportional reinsurance and still be badly exposed to a correlated catastrophic event across both lines if the dependence structure between them is misspecified.",
          note: "The distinction to draw out clearly is per-line risk reduction (reinsurance) versus cross-line dependence modelling (copulas) &mdash; both matter for overall capital adequacy, but neither substitutes for the other.",
        },
      ],
    },
    {
      id: "cs2-q10",
      title: "Aggregate claims for a compound Poisson portfolio, and evaluating a fraud classifier",
      modules: "Modules 19, 20, 21",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A portfolio generates claims as a compound Poisson process with annual claim frequency $\\lambda=50$ and individual claim sizes exponentially distributed with mean &pound;800 (so $E[X^2]=2(800)^2$ for an exponential distribution). Calculate $E[S]$ and $\\text{Var}(S)$ for annual aggregate claims $S$.",
          answer:
            "$E[S] = \\lambda E[X] = 50(800) = \\pounds40{,}000$. $E[X^2] = 2(800)^2 = 1{,}280{,}000$. $\\text{Var}(S) = \\lambda E[X^2] = 50(1{,}280{,}000) = \\pounds^2\\,64{,}000{,}000$ (SD $=\\pounds8{,}000$).",
          note: "The compound Poisson variance formula $\\text{Var}(S)=\\lambda E[X^2]$ uses the <em>second moment</em> of the severity distribution, not its variance alone &mdash; for the exponential distribution, $E[X^2]=2(\\text{mean})^2$, which is easy to substitute incorrectly as just $(\\text{mean})^2$.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 2,
          question: "Using a normal approximation to $S$ with the mean and standard deviation from part (i), calculate the approximate 95th percentile of annual aggregate claims (using $z_{0.95}=1.645$).",
          answer:
            "95th percentile $\\approx E[S] + z_{0.95}\\,SD(S) = 40{,}000 + 1.645(8{,}000) = 40{,}000+13{,}160 = \\pounds53{,}160$",
          note: "Since aggregate claims are typically right-skewed (as covered in Risk models 2), this normal approximation likely understates the true 95th percentile somewhat &mdash; a translated gamma approximation or simulation would generally be preferred for a more accurate capital-setting figure.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 4,
          question:
            "A machine learning model is used to flag potentially fraudulent claims. Tested against 1,000 claims with known outcomes, it produces: 80 true positives, 20 false positives, 30 false negatives, and 870 true negatives. Calculate the model's precision, recall, and $F_1$ score.",
          answer:
            "Precision $=\\dfrac{TP}{TP+FP}=\\dfrac{80}{100}=0.800$. Recall $=\\dfrac{TP}{TP+FN}=\\dfrac{80}{110}=0.7273$. $F_1 = \\dfrac{2\\times\\text{Precision}\\times\\text{Recall}}{\\text{Precision}+\\text{Recall}} = \\dfrac{2(0.800)(0.7273)}{0.800+0.7273} = \\dfrac{1.1636}{1.5273} = 0.7619$",
          note: "Precision's denominator is <em>all</em> predicted positives ($TP+FP=100$), while recall's denominator is <em>all</em> actual positives ($TP+FN=110$) &mdash; mixing these two denominators up is the most common error in this type of calculation.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 2,
          question: "Discuss why recall might be prioritised over precision when tuning this fraud-detection classifier's threshold, despite the resulting increase in false positives.",
          answer:
            "A missed fraudulent claim (a false negative) directly costs the insurer the full fraudulent payout, whereas a false positive (a genuine claim incorrectly flagged) typically only costs the resource of a manual review before being paid correctly &mdash; given this asymmetry in the cost of the two error types, prioritising recall (catching more true fraud, even at the cost of more false alarms) can be the more economically sensible choice, provided the manual review capacity can absorb the extra false positives.",
          note: "The strongest answers explicitly weigh the asymmetric <em>costs</em> of the two error types for this specific business context, rather than asserting recall is 'just better' in general &mdash; the right threshold choice is a business trade-off, not a universal rule.",
        },
      ],
    },
  ],
});

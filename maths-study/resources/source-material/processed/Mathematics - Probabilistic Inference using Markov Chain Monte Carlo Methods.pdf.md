---
normalized_id: shared-pdf-reference-mathematics-probabilistic-inference-using-markov-chain-monte-carlo-methods
exam_code: SHARED
material_scope: mathematics - probabilistic inference using markov chain monte carlo methods.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Mathematics - Probabilistic Inference using Markov Chain Monte Carlo Methods.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-mathematics-probabilistic-inference-using-markov-chain-monte-carlo-methods

   Probabilistic Inference Using
Markov Chain Monte Carlo Methods
             Radford M. Neal
       Technical Report CRG-TR-93-1
       Department of Computer Science
            University of Toronto
       E-mail: radford@cs.toronto.edu
            25 September 1993




     c Copyright 1993 by Radford M. Neal
                                    Abstract
Probabilistic inference is an attractive approach to uncertain reasoning and em-
pirical learning in arti cial intelligence. Computational diculties arise, however,
because probabilistic models with the necessary realism and exibility lead to com-
plex distributions over high-dimensional spaces.
Related problems in other elds have been tackled using Monte Carlo methods based
on sampling using Markov chains, providing a rich array of techniques that can be
applied to problems in arti cial intelligence. The \Metropolis algorithm" has been
used to solve dicult problems in statistical physics for over forty years, and, in the
last few years, the related method of \Gibbs sampling" has been applied to problems
of statistical inference. Concurrently, an alternative method for solving problems
in statistical physics by means of dynamical simulation has been developed as well,
and has recently been uni ed with the Metropolis algorithm to produce the \hybrid
Monte Carlo" method. In computer science, Markov chain sampling is the basis
of the heuristic optimization technique of \simulated annealing", and has recently
been used in randomized algorithms for approximate counting of large sets.
In this review, I outline the role of probabilistic inference in arti cial intelligence,
present the theory of Markov chains, and describe various Markov chain Monte
Carlo algorithms, along with a number of supporting techniques. I try to present a
comprehensive picture of the range of methods that have been developed, including
techniques from the varied literature that have not yet seen wide application in
arti cial intelligence, but which appear relevant. As illustrative examples, I use the
problems of probabilistic inference in expert systems, discovery of latent classes from
data, and Bayesian learning for neural networks.



                           Acknowledgements
I thank David MacKay, Richard Mann, Chris Williams, and the members of my
Ph.D committee, Geo rey Hinton, Rudi Mathon, Demetri Terzopoulos, and Rob
Tibshirani, for their helpful comments on this review. This work was supported
by the Natural Sciences and Engineering Research Council of Canada and by the
Ontario Information Technology Research Centre.
                                         Contents
1. Introduction                                                                                  1
2. Probabilistic Inference for Arti cial Intelligence                                            4
   2.1   Probabilistic inference with a fully-speci ed model : : : : : : : : : : : : : : : 5
   2.2   Statistical inference for model parameters : : : : : : : : : : : : : : : : : : : : 13
   2.3   Bayesian model comparison : : : : : : : : : : : : : : : : : : : : : : : : : : : : 23
   2.4   Statistical physics : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : 25

3. Background on the Problem and its Solution                                                   30
   3.1 De nition of the problem : : : : : : : : : : : : : : : : : : : : : : : : : : : : : 30
   3.2 Approaches to solving the problem : : : : : : : : : : : : : : : : : : : : : : : : 32
   3.3 Theory of Markov chains : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : 36

4. The Metropolis and Gibbs Sampling Algorithms                                                 47
   4.1   Gibbs sampling : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : 47
   4.2   The Metropolis algorithm : : : : : : : : : : : : : : : : : : : : : : : : : : : : : 54
   4.3   Variations on the Metropolis algorithm : : : : : : : : : : : : : : : : : : : : : : 59
   4.4   Analysis of the Metropolis and Gibbs sampling algorithms : : : : : : : : : : : 64

5. The Dynamical and Hybrid Monte Carlo Methods                                                 70
   5.1   The stochastic dynamics method : : : : : : : : : : : : : : : : : : : : : : : : : 70
   5.2   The hybrid Monte Carlo algorithm : : : : : : : : : : : : : : : : : : : : : : : : 77
   5.3   Other dynamical methods : : : : : : : : : : : : : : : : : : : : : : : : : : : : : 81
   5.4   Analysis of the hybrid Monte Carlo algorithm : : : : : : : : : : : : : : : : : : 83

6. Extensions and Re nements                                                                    87
   6.1   Simulated annealing : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : 87
   6.2   Free energy estimation : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : 94
   6.3   Error assessment and reduction : : : : : : : : : : : : : : : : : : : : : : : : : : 102
   6.4   Parallel implementation : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : 114

7. Directions for Research                                                                    116
   7.1 Improvements in the algorithms : : : : : : : : : : : : : : : : : : : : : : : : : : 116
   7.2 Scope for applications : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : 118

8. Annotated Bibliography                                                                     121
                                  Index to Examples
                         De -      Statistical      Gibbs   Metropolis Stochastic Hybrid
Type of model            nition    Inference       Sampling Algorithm Dynamics Monte Carlo
Gaussian distribution      9         15, 19                64                      83, 84
Latent class model        10           21            51         POS          POS            POS
Belief network            10            *            50         POS          NA             NA
Multi-layer perceptron    12      16, 19, 22, 35    INF          58           77            81
2D Ising model            26           NA            49          57          NA             NA
Lennard-Jonesium          27           NA           INF          57           76            POS
      NA { Not applicable, INF { Probably infeasible, POS { Possible, but not discussed
       Statistical inference for the parameters of belief networks is quite possible, but this
        review deals only with inference for the values of discrete variables in the network.
                                         1. Introduction
Probability is a well-understood method of representing uncertain knowledge and reasoning
to uncertain conclusions. It is applicable to low-level tasks such as perception, and to high-
level tasks such as planning. In the Bayesian framework, learning the probabilistic models
needed for such tasks from empirical data is also considered a problem of probabilistic in-
ference, in a larger space that encompasses various possible models and their parameter
values. To tackle the complex problems that arise in arti cial intelligence, exible meth-
ods for formulating models are needed. Techniques that have been found useful include
the speci cation of dependencies using \belief networks", approximation of functions using
\neural networks", the introduction of unobservable \latent variables", and the hierarchical
formulation of models using \hyperparameters".
Such exible models come with a price however. The probability distributions they give rise
to can be very complex, with probabilities varying greatly over a high-dimensional space.
There may be no way to usefully characterize such distributions analytically. Often, however,
a sample of points drawn from such a distribution can provide a satisfactory picture of it.
In particular, from such a sample we can obtain Monte Carlo estimates for the expectations
of various functions of the variables. Suppose X = fX1; . . . ; Xn g is the set of random
variables that characterize the situation being modeled, taking on values usually written as
x1; . . . ; xn, or some typographical variation thereon. These variables might, for example,
represent parameters of the model, hidden features of the objects modeled, or features of
objects that may be observed in the future. The expectation of a function a(X1 ; . . . ; Xn )
| it's average value with respect to the distribution over X | can be approximated by
                            X        X
                     hai =         a(~x1 ; . . . ; x~n) P (X1 = x~1; . . . ; Xn = x~n) (1.1)
                             x~1         x~n
                            NX1
                         N1 a(x(1t); . . . ; x(nt))                                             (1.2)
                                   t=0
where x(1t) ; . . . ; x(nt) are the values for the t-th point in a sample of size N . (As above, I will
often distinguish variables in summations using tildes.) Problems of prediction and decision
can generally be formulated in terms of nding such expectations.
Generating samples from the complex distributions encountered in arti cial intelligence
applications is often not easy, however. Typically, most of the probability is concentrated
in regions whose volume is a tiny fraction of the total. To generate points drawn from
the distribution with reasonable eciency, the sampling procedure must search for these
relevant regions. It must do so, moreover, in a fashion that does not bias the results.
Sampling methods based on Markov chains incorporate the required search aspect in a
framework where it can be proved that the correct distribution is generated, at least in
the limit as the length of the chain grows. Writing X (t) = fX1(t) ; . . . ; Xn(t) g for the set of
variables at step t, the chain is de ned by giving an initial distribution for X (0) and the
transition probabilities for X (t) given the value for X (t 1). These probabilities are chosen
so that the distribution of X (t) converges to that for X as t increases, and so that the
Markov chain can feasibly be simulated by sampling from the initial distribution and then,
in succession, from the conditional transition distributions. For a suciently long chain,
equation (1.2) can then be used to estimate expectations.


                                                  1
                                        1.. Introduction

Typically, the Markov chain explores the space in a \local" fashion. In some methods,
for example, x(t) di ers from x(t 1) in only one component of the state | e.g.. it may
di er with respect to xi , for some i, but have x(jt) = x(jt 1) for j =    6 i. Other methods
may change all components at once, but usually by only a small amount. Locality is often
crucial to the feasibility of these methods. In the Markov chain framework, it is possible to
guarantee that such step-by-step local methods eventually produce a sample of points from
the globally-correct distribution.
My purpose in this review is to present the various realizations of this basic concept that
have been developed, and to relate these methods to problems of probabilistic reasoning and
empirical learning in arti cial intelligence. I will be particularly concerned with the potential
for Markov chain Monte Carlo methods to provide computationally feasible implementations
of Bayesian inference and learning. In my view, the Bayesian approach provides a exible
framework for representing the intricate nature of the world and our knowledge of it, and
the Monte Carlo methods I will discuss provide a correspondingly exible mechanism for
inference within this framework.
Historical development. Sampling methods based on Markov chains were rst devel-
oped for applications in statistical physics. Two threads of development were begun forty
years ago. The paper of Metropolis, et al (4:1953) introduced what is now known as the
Metropolis algorithm, in which the next state in the Markov chain is chosen by consider-
ing a (usually small) change to the state, and accepting or rejecting this change based on
how the probability of the altered state compares to that of the current state. Around the
same time, Alder and Wainwright (5:1959) developed the \molecular dynamics" method,
in which new states are found by simulating the dynamical evolution of the system. I will
refer to this technique as the dynamical method, since it can in fact be used to sample from
any di erentiable probability distribution, not just distributions for systems of molecules.
Recently, these two threads have been united in the hybrid Monte Carlo method of Duane,
Kennedy, Pendleton, and Roweth (5:1987), and several other promising approaches have
also been explored.
A technique based on the Metropolis algorithm known as simulated annealing has been
widely applied to optimization problems since a paper of Kirkpatrick, Gelatt, and Vecchi
(6:1983). Work in this area is of some relevance to the sampling problems discussed in this
review. It also relates to one approach to solving the dicult statistical physics problem
of free energy estimation, which is equivalent to the problem of comparing di erent models
in the Bayesian framework. The Metropolis algorithm has also been used in algorithms for
approximate counting of large sets (see (Aldous, 7:1993) for a review), a problem that can
also be seen as a special case of free energy estimation.
Interest in Markov chain sampling methods for applications in probability and statistics
has recently become widespread. A paper by Geman and Geman (4:1984) applying such
methods to image restoration has been in uential. More recently, a paper by Gelfand and
Smith (4:1990) has sparked numerous applications to Bayesian statistical inference. Work
in these areas has up to now relied almost exclusively on the method of Gibbs sampling , but
other methods from the physics literature should be applicable as well.
Probability has been applied to problems in arti cial intelligence from time to time over
the years, and underlies much related work in pattern recognition (see, for example, (Duda
and Hart, 2:1973)). Only recently, however, has probabilistic inference become prominent, a
development illustrated by the books of Pearl (2:1988), concentrating on methods applicable
to expert systems and other high-level reasoning tasks, and of Szelisksi (2:1989), on low-

                                               2
                                       1.. Introduction

level vision. Much of the recent work on \neural networks", such as that described by
Rumelhart, McClelland, and the PDP Research Group (2:1986), can also be regarded as
statistical inference for probabilistic models.
Applications in arti cial intelligence of Markov chain Monte Carlo methods could be said to
have begun with the work on optimization using simulated annealing. This was followed by
the work on computer vision of Geman and Geman (4:1984) mentioned above, along with
work on the \Boltzmann machine" neural network of Ackley, Hinton, and Sejnowski (2:1985).
In the Boltzmann machine, the Gibbs sampling procedure is used to make inferences re-
lating to a particular situation, and also when learning appropriate network parameters
from empirical data, within the maximum likelihood framework. Pearl (4:1987) introduced
Gibbs sampling for \belief networks", which are used to represent expert knowledge of a
probabilistic form. I have applied Gibbs sampling to maximum likelihood learning of belief
networks (Neal, 2:1992b).
True Bayesian approaches to learning in an arti cial intelligence context have been investi-
gated only recently. Spiegelhalter and Lauritzen (2:1990), Hanson, Stutz, and Cheeseman
(2:1991), MacKay (2:1991, 2:1992b), Buntine and Weigend (2:1991), and Buntine (2:1992)
have done interesting work using methods other than Monte Carlo. I have applied Markov
chain Monte Carlo methods to some of the same problems (Neal, 2:1992a, 2:1992c, 2:1993a).
Though these applications to problems in arti cial intelligence are still in their infancy, I
believe the Markov chain Monte Carlo approach has great potential as a widely applicable
computational strategy, which is particularly relevant when problems are formulated in the
Bayesian framework.
Outline of this review. In Section 2, which follows, I discuss probabilistic inference
and its applications in arti cial intelligence. This topic can be divided into inference using
a speci ed model, and statistical inference concerning the model itself. In both areas,
I indicate where computational problems arise for which Monte Carlo methods may be
appropriate. I also present some basic concepts of statistical physics which are needed to
understand the algorithms drawn from that eld. This section also introduces a number of
running examples that will be used to illustrate the concepts and algorithms.
In Section 3, I de ne more precisely the class of problems for which use of Monte Carlo
methods based on Markov chains is appropriate, and discuss why these problems are dicult
to solve by other methods. I also present the basics of the theory of Markov chains, and
discuss recently developed theoretical techniques that may allow useful analytical results to
be derived for the complex chains encountered in practical work.
Section 4 begins the discussion of the algorithms themselves by presenting the Metropolis,
Gibbs sampling, and related algorithms. These most directly implement the idea of sam-
pling using Markov chains, and are applicable to the widest variety of systems. Section 5
then discusses the dynamical and hybrid Monte Carlo algorithms, which are applicable to
continuous systems in which appropriate derivatives can be calculated. Section 6 reviews
simulated annealing, free energy estimation, techniques for assessing and improving the ac-
curacy of estimates, and the potential for parallel implementations. These topics apply to
all the algorithms discussed.
I conclude in Section 7 by discussing possibilities for future research concerning Markov chain
Monte Carlo algorithms and their applications. Finally, I have included a comprehensive,
though hardly exhaustive, bibliography of work in the area.

                                              3
   2. Probabilistic Inference for Arti cial Intelligence
Probability and statistics provide a basis for addressing two crucial problems in arti cial
intelligence | how to reason in the presense of uncertainty, and how to learn from experi-
ence.
This statement is, of course, controversial. Many workers in arti cial intelligence have argued
that probability is an inappropriate, or at least an incomplete, mechanism for representing
the sort of uncertainty encountered in everyday life. Much work in machine learning is
based on non-statistical approaches. Some of the arguments concerning these issues may be
seen in a paper by Cheeseman (2:1988) and the accompanying discussion. A book by Pearl
(2:1988) is a detailed development and defence of the use of probability as a representation
of uncertainty. In this review, I will take it as given that the application of probability and
statistics to problems in arti cial intelligence is of sucient interest to warrant investigating
the computational problems that these applications entail.
The role of probabilistic inference in arti cial intelligence relates to long-standing contro-
versies concerning the interpretation of probability and the proper approach to statistical
inference. (Barnett (9:1982) gives a balanced presentation of the various views.) In the
frequency interpretation, a probability represents the long-run frequency of an event in a
repeatable experiment. It is meaningless with this interpretation to use probabilities in ref-
erence to unique events. We cannot, for example, ask what is the probability that Alexander
the Great played the ute, or that grandmother would enjoy receiving a cribbage set as a gift.
Such questions do make sense if we adopt the degree of belief interpretation, under which a
probability represents the degree to which we believe that the given evidence, together with
our prior opinions as to what is reasonable, warrant belief in the proposition in question.
This interpretation of probability is natural for applications in arti cial intelligence.
Linked to these di erent views of probability are di erent views on how to nd probabilistic
models from empirical data | in arti cial intelligence terms, how to learn from experience.
As a simple example, suppose that we have ipped a coin ten times, and observed that eight
of these times it landed head-up. How can we use this data to develop a probabilistic model
of how the coin lands? The frequency interpretation of probability views the parameters
of the model | in this case, just the \true" probability that the coin will land head-up |
as xed constants, about which it makes no sense to speak in terms of probability. These
constants can be estimated by various frequentist statistical procedures. We might, for
example, employ a procedure that estimates the probability of heads to be the observed
frequency, 8=10 in the case at hand, though this is by no means the only possible, or
reasonable, procedure.
The degree of belief interpretation of probability leads instead to a Bayesian approach to
statistical inference. In this framework, uncertainty concerning the parameters of the model
is expressed by means of a probability distribution over the possible parameter values. This
distribution is updated using Bayes' rule as new information arrives. Mathematically, this
is a process of probabilistic inference similar to that used to deal with a particular case
using a fully speci ed model, a fact which we will see is very convenient computationally.
In the coin-tossing example above, a typical Bayesian inference procedure would produce a
probability distribution for the \true probability of heads" in which values around 8=10 are
more likely than those around, say, 1=10.
In this review, I will be primarily concerned with models where probability is interpreted as
a degree of belief, and with statistical inference for such models using the Bayesian approach,

                                               4
                  2.1 Probabilistic inference with a fully-speci ed model

                      x1               x2              x3 P (x1; x2; x3)
                    CLEAR            RISING           DRY     0.40
                    CLEAR            RISING           WET     0.07
                    CLEAR            FALLING          DRY     0.08
                    CLEAR            FALLING          WET     0.10
                    CLOUDY           RISING           DRY     0.09
                    CLOUDY           RISING           WET     0.11
                    CLOUDY           FALLING          DRY     0.03
                    CLOUDY           FALLING          WET     0.12
                    X1 = Sky clear or cloudy in the morning
                    X2 = Barometer rising or falling in the morning
                    X3 = Dry or wet in the afternoon
              Figure 2.1: The joint distribution for a model of the day's weather.

but the algorithms described are also applicable to many problems that can be formulated
in frequentist terms. A number of texts on probability and statistics adopt the Bayesian
approach; I will here mention only the introductory books of Schmitt (9:1969) and Press
(9:1989), and the more advanced works of DeGroot (9:1970), Box and Tiao (9:1973), and
Berger (9:1985). Unfortunately, none of these are ideal as an introduction to the subject for
workers in arti cial intelligence. Pearl (2:1988) discusses Bayesian probabilistic inference
from this viewpoint, but has little material on statistical inference or empirical learning.
2.1 Probabilistic inference with a fully-speci ed model
The least controversial applications of probability are to situations where we have accurate
estimates of all relevant probabilities based on numerous observations of closely parallel
cases. The frequency interpretation of probability is then clearly applicable. The degree
of belief interpretation is not excluded, but for reasonable people the degree of belief in an
event's occurrence will be very close to its previously-observed frequency.
In this section, I discuss how such probabilistic models are formulated, and how they are
used for inference. Mathematically, this material applies also to models for unrepeatable
situations where the probabilities are derived entirely from subjective assessments | the
crucial point is that however the model was obtained, it is considered here to be speci ed
fully and with certainty.
Joint, marginal, and conditional probabilities. A fully-speci ed probabilistic model
gives the joint probability for every conceivable combination of values for the variables used
to characterize some situation of interest. Let these random variables be X1 ; . . . ; Xn, and,
for the moment, assume that each takes on values from some discrete set. The model is
then speci ed by the values of the joint probabilities, P (X1 = x1; . . . ; Xn = xn ), for every
possible assignment of values, x1 ; . . . ; xn, to the variables. I will generally abbreviate such
notation to P (x1; . . . ; xn) when the random variables involved are clear from the names of
the arguments. Figure 2.1 gives the joint distribution for a model of the day's weather.
From these joint probabilities, marginal probabilities for subsets of the variables can be found
by summing over all possible combinations of values for the other variables. For example,

                                                5
                  2.1 Probabilistic inference with a fully-speci ed model

if only the variables X1 ; . . . ; Xm are relevant to our problem, we would be interested in the
marginal probabilities
                                         X         X
                 P (x1; . . . ; xm ) =           P (x1; . . . ; xm; x~m+1 ; . . . ; x~n) (2.1)
                                      x~m+1      x~n
I will often use notation in which the above formula can be written instead as follows, where
A = f1; . . . ; mg and B = fm + 1; . . . ; ng:
                                             X
                  P (fxi : i 2 Ag) =           P (fxi : i 2 Ag; fx~j : j 2 Bg)           (2.2)
                                       fx~j : j 2Bg
That is, when \fxi : i 2 Ag" occurs in a probability statement, it is equivalent to listing
all the xi for i 2 A, and when such an expression occurs in a summation, it represents a
multiple summation over all possible combinations of values for these variables.
From the joint distribution of Figure 2.1 we can calculate that P (CLEAR; RISING) = 0:47
and P (CLOUDY) = 0:35.
Conditional probabilities for one subset of variables, Xi for i 2 A, given values for another
(disjoint) subset, Xj for j 2 B, are de ned as ratios of marginal probabilities:
             P (fxi : i 2 Ag j fxj : j 2 Bg) = P (fxi P: i(f2xAg: ;jf2xjBg: )j 2 Bg)    (2.3)
                                                                 j
For the example of Figure 2.1, we can calculate that
       P (DRY j CLEAR; RISING) = P (DRY         ; CLEAR; RISING)
                                            P (CLEAR; RISING) = 0:47  0:85
                                                                             0:40

Seen as a statement about long-run frequencies, this says that of all those mornings with
clear sky and rising barometer, the proportion which were followed by a dry afternoon was
about 0.85. Interpreted in terms of degree of belief, it says that if we know that the sky
is clear and the barometer is rising in the morning, and we know nothing else of relevance,
then the degree of belief we should have that the weather will be dry in the afternoon is
about 0.85.
The expected value or expectation of a function of a random variable is its average value
with respect to the probability distribution in question. The expectation of a(X ), written
as hai or E [a(X )], is de ned as
                                                  X
                           hai = E [a(X )] =          a(~x)P (~x)                       (2.4)
                                                       x~
One can also talk about the expectation of a function conditional on certain variables taking
on certain values, in which case P (~x) above is replaced by the appropriate conditional
probability.
In this review, I will usually use h  i to denote expectation for variables that we are really
interested in, and E [  ] to denote expectation for variables that are part of a Monte Carlo
procedure for estimating the interesting expectations.
Probability for continuous variables. Models in which the variables take on continuous
values are common as well. The model is then speci ed by giving the joint probability
density function for all the variables, which I will write using the same notation as for
probabilities, trusting context to make clear my meaning. The probability density function

                                                  6
                  2.1 Probabilistic inference with a fully-speci ed model
                                          R
for X is de ned to be such that A P (x) dx is the probability that X lies in the region A.
Marginal densities are obtained as in equation (2.2), but with the summations replaced by
integrations. Conditional densities are de ned as in equation (2.3). Expectations are also
de ned as for discrete variables, but with integrals replacing summations.
A model may contain both discrete variables are continuous variables. In such cases, I will
again use the notation P (x1; . . . ; xn), referring in this case to numbers that are hybrids of
probabilities and probability densities.
Not all distributions on continuous spaces can be speci ed using probability densities of the
usual sort, because some distributions put a non-zero probability mass in an in nitesimal
region of the space, which would correspond to an in nite probability density. In this
review, I will handle cases of this sort using the delta function,  (x; y), which is de ned for
real arguments by the property that for any continuous function, f (  ):
                Z +1                            Z +1
                       f (~x)  (~x; y) dx~ =            f (~x)  (y; x~) dx~ = f (y)     (2.5)
                   1                                 1
Clearly, no actual real-valued function has these properties, and hence expressions containing
delta functions must be manipulated with care to avoid fallacies | to be valid, they must
be true when  (x; y) is regarded as the limit of actual real-valued functions that are ever
more peaked about the line x = y and zero away from it.
As an example, if a variable, X , with range (0; 1) has the probability density given by
P (x) = (1=2) + (1=2) (1=3; x), then its distribution has half of the total probability spread
uniformly over (0; 1) and half concentrated at the point 1=3.
For discrete x and y, it will be convenient to de ne  (x; y) to be zero if x =  6 y and one
if x = y. This allows some formulas to be written that apply regardless of whether the
variables are continuous or discrete. The following analogue of equation (2.5) holds:
                     X                      X
                         f (~x)  (~x; y) =     f (~x)  (y; x~) = f (y)                   (2.6)
                       x~                       x~
Conditioning on observed data. Typically, we are interested in conditioning with re-
spect to the variables whose values we know from observation, a process that can be viewed
as updating our beliefs in the light of new information. We can then use these conditional
probabilities in making decisions.
The model is generally speci ed in such a way that calculation of the full joint probabilities
is feasible, except perhaps for an unknown normalizing factor required to make them sum
to one. If we could calculate marginal probabilities easily (even up to an unknown factor)
we could use equation (2.3) to calculate conditional probabilities (with any unknown factor
cancelling out). Alternatively, from the conditional probabilities for all combinations of
values for the unobserved variables, given the observed values, we could nd the conditional
probabilities for just the variables we are interested in by summing over the others, as
follows:
                P (fxi : i 2 Ag j fxj : j 2 Bg)
                           X
                  =             P (fxi : i 2 Ag; fx~k : k 2 Cg j fxj : j 2 Bg)          (2.7)
                            fx~k : k2Cg
In the weather example, suppose that we observe the sky to be cloudy in the morning, but
that we have no barometer. We wish to calculate the probability that it will be wet in the

                                                     7
                     2.1 Probabilistic inference with a fully-speci ed model

afternoon, and intend to go on a picnic if this probability is no more than 0.3. Here, we
must sum over the possible values for X2 , the barometer reading. The calculation may be
made as follows:
 P (WET j CLOUDY) = P (WET; RISING j CLOUDY) + P (WET; FALLING j CLOUDY)
                        = 0:11=0:35 + 0:12=0:35  0:66
We decide not to go for a picnic.
Unfortunately, neither the calculation of a marginal probability using equation (2.2) nor
the calculation for a conditional probability of equation (2.7) are feasible in more complex
situations, since they require time exponential in the number of variables summed over.
Such sums (or integrals) can, however, be estimated by Monte Carlo methods. Another way
to express the conditional probability of equations (2.3) and (2.7) is
    P (fxi : i 2 Ag j fxj : j 2 Bg) =
           X         X                                                     Y
                          P (fx~i : i 2 Ag; fx~k : k 2 Cg j fxj : j 2 Bg)   (xi; x~i) (2.8)
         fx~i : i2Ag fx~k : k2Cg                                               i2A
This expression has the form of an expectation with respect to the distribution for the Xi
and Xk conditional on the known values of the Xj . For discrete Xi , it can be evaluated
using the Monte Carlo estimation formula of equation (1.2), provided we can obtain a sample
from this conditional distribution. This procedure amounts to simply counting how often
the particular combination of Xi values that we are interested in appears in the sample, and
using this observed frequency as our estimate of the corresponding conditional probability.
Here is yet another expression for the conditional probability:
P (fxi : i 2 Ag j fxj : j 2 Bg) =
     X
          P (fx~k : k 2 Cg j fxj : j 2 Bg) P (fxi : i 2 Ag j fx~k : k 2 Cg; fxj : j 2 B) (2.9)
  fx~k : k2Cg
This, too, has the form of an expectation with respect to the distribution conditional on
the known values of the Xj . In Monte Carlo estimation based on this formula, rather than
count how often the values for Xi we are interested in show up, we average the conditional
probabilities, or probability densities, for those Xi . This method still works for real-valued
Xi , for which we would generally never see an exact match with any particular xi .
Typically, we will wish to estimate these conditional probabilities to within some absolute
error tolerance. In the picnicking example, for instance, we may wish to know the probability
of rain to within 0:01. If we are interested in rare but important events, however, a relative
error tolerance will be more appropriate. For example, in computing the probability of
a nuclear reactor meltdown, the di erence between the probabilities 0:3 and 0:4 is not
signi cant, since neither is acceptable, but the di erence between a probability of 10 5 and
one of 10 6 may be quite important.
Model speci cation. When the number of variables characterizing a situation is at all
large, describing their joint distribution by explicitly giving the probability for each com-
bination of values is infeasible, due to the large number of parameters required. In some
simple cases a more parsimonious speci cation is easily found. For variables that are inde-
pendent, for example, P (x1; . . . ; xn) = P (x1)    P (xn) and the distribution can be speci ed

                                                8
                   2.1 Probabilistic inference with a fully-speci ed model

by giving the values of P (xi ) for all i and xi.
In more complex cases, it can be a challenge to nd a model that captures the structure of
the problem in a compact and computationally tractable form. Latent (or hidden) variables
are often useful in this regard (see, for example, (Everitt, 9:1984)). These variables are not
directly observable, and perhaps do not even represent objectively identi able attributes of
the situation, but they do permit the probabilities for the observable (or visible ) variables
to be easily speci ed as a marginal distribution, with the latent variables summed over. In
addition to their practical utility, these models have interest for arti cial intelligence because
the latent variables can sometimes be viewed as abstract features or concepts.
Models are often characterized as either parametric or non-parametric. These terms are
to some degree misnomers, since all models have parameters of some sort or other. The
distinguishing characteristic of a \non-parametric" model is that these parameters are suf-
 ciently numerous, and employed in a suciently exible fashion, that they can be used to
approximate any of a wide class of distributions. The parameters also do not necessarily
represent any meaningful aspects of reality. In contrast, a parametric model will generally
be capable of representing only a narrow class of distributions, and its parameters will often
have physical interpretations.
By their nature, non-parametric models are virtually never speci ed in detail by hand. They
are instead learned more or less automatically from training data. In contrast, a parametric
model with physically meaningful parameters might sometimes be speci ed in full by a
knowledgeable expert.
We can also distinguish between models that de ne a joint probability distribution for
all observable variables and those that de ne only the conditional distributions for some
variables given values for some other variables (or even just some characteristics of these
conditional distributions, such as the expected value). The latter are sometimes referred to
as regression or classi cation models, depending on whether the variables whose conditional
distributions they model are continuous or discrete.
Example: Gaussian distributions. The Gaussian or Normal distribution is the archetype of
a parametric probability distribution on a continuous space. It is extremely popular, and
will be used later as a model system for demonstrating the characteristics of Markov chain
Monte Carlo algorithms.
The univariate Gaussian distribution for a real variable, X , has the following probability
density function:
                            P (x) = p 1 exp (x )2 22
                                                                    
                                                                                             (2.10)
                                           2
Here,  and 2 are the parameters of the distribution, with  being the mean of the distri-
bution, equal to hxi, and 2 being the variance, equal to h(x hxi)2 i. The square root of
the variance is the standard deviation, given by .
The multivariate generalization of the Gaussian distribution, for a vector X , of dimension-
ality n, has probability density
                                                                                  
                P (x) = (2) n=2(det ) 1=2 exp 21 (x )T  1 (x )                          (2.11)
The mean of the distribution is given by the vector , while the variance is generalized to
the covariance matrix, , which is symmetric, and equal to h(x )(x )T i.


                                                9
                  2.1 Probabilistic inference with a fully-speci ed model

In low dimensions, the family of Gaussian distributions is too simple to be of much intrinsic
interest from the point of view of arti cial intelligence. As the dimensionality, n, increases,
however, the number of parameters required to specify an arbitrary Gaussian distribution
grows as n2, and more parsimonious representations become attractive. Factor analysis
involves searching for such representations in terms of latent variables (see (Everitt, 9:1984)).
Example: Latent class models. The simplest latent variable models express correlations
among the observable variables by using a single latent class variable that takes on values
from a discrete (and often small) set. The observable variables are assumed to be indepen-
dent given knowledge of this class variable. Such models are commonly used in exploratory
data analysis for the social sciences. Responses to a survey of opinions on public policy
issues might, for example, be modeled using a latent class variable with three values that
could be interpreted as \conservative", \liberal", and \apolitical". Latent class models have
been used in arti cial intelligence contexts by Cheeseman, et al (2:1988), Hanson, Stutz,
and Cheeseman (2:1991), Neal (2:1992c), and Anderson and Matessa (2:1992), though not
always under this name.
Due to the independence assumption, the joint distribution for the class variable, C , and
the visible variables, V1 ; . . . ; Vn, can be written as
                                                                    n
                                                                    Y
                           P (c; v1; . . . ; vn) = P (c)                   P (vj j c)              (2.12)
                                                                    j =1
The model is speci ed by giving the probabilities on the right of this expression explicitly,
or in some simple parametric form. For example, if there are two classes (0 and 1), and the
Vi are binary variables (also taking values 0 and 1), we need only specify = P (C = 1) and
the `j = P (Vj = 1 j C = `). The joint probabilities can then be expressed as
                                                                    n
                                                                    Y
                                            c (1             )1 c           vj
                  P (c; v1; . . . ; vn) =                                   cj (1       cj )1 vj   (2.13)
                                                                    j =1
The above speci cation requires only 2n + 1 numbers, many fewer than the 2n 1 numbers
needed to specify an arbitrary joint distribution for the observable variables. Such a reduc-
tion is typical when a parametric model is used, and is highly desirable if we in fact have good
reason to believe that the distribution is expressible in this restricted form. A latent class
model with many more than just two classes could be employed as a non-parametric model,
since as the number of classes increases, any distribution can be approximated arbitrarily
closely.
The marginal distribution for the observable variables in a latent class model is given by
                                                X
                           P (v1; . . . ; vn) =    P (~c; v1; . . . ; vn)                  (2.14)
                                                        c~
Since only one latent variable is involved, these marginal probabilities can easily be computed
(assuming the number of classes is manageable). In fact, conditional probabilities for any
set of observable variables given the values for any other set can also be calculated without
diculty. There is thus no need to use Monte Carlo methods for probabilistic inference
when the model is of this simple sort, provided it is fully speci ed.
Example: Belief networks. More complex latent variable models can be constructed using
belief networks , which can also be used for models where all variables are observable. These
networks, which are also referred to as Bayesian networks, causal networks, in uence di-

                                                   10
                   2.1 Probabilistic inference with a fully-speci ed model

                  poor sanitation     trac accident        gunshot wound        


          pneumonia            cholera              brain injury          brain tumor    


                      fever              diarrhea                  coma          
Figure 2.2: A fragment of a hypothetical belief network for medical diagnosis. The full network
would contain many more variables and many more connections than are shown here.

agrams, and relevance diagrams, have been developed for expert systems applications by
Pearl (2:1988) and others (see (Oliver and Smith, 2:1990)). For a tutorial on their use
in such applications, see (Charniak, 2:1991). They can also be viewed as non-parametric
models to be learned from empirical data (Neal, 2:1992b).
A belief network expresses the joint probability distribution for a set of variables, with an
ordering, X1 ; . . . ; Xn , as the product of the conditional distributions for each variable given
the values of variables earlier in the ordering. Only a subset of the variables preceding Xi ,
its parents, Pi , are relevant in specifying this conditional distribution. The joint probability
can therefore be written as                       n
                                                  Y
                             P (x1; . . . ; xn) =    P (xi j fxj : j 2 Pi g)                 (2.15)
                                              i=1
Note that some variables will have no parents (i.e. Pi will be empty), in which case the
conditional probability above will be just the marginal probability for that variable. The
latent class model of equation (2.12) can be regarded as a simple belief network in which
the class variable has no parents, and is the only parent of all the visible variables.
When a variable has many parents, various ways of economically specifying its conditional
probability have been employed, giving rise to various types of belief network. For example,
conditional distributions for binary variables can be speci ed by the \noisy-OR" method
(Pearl, 2:1988) or the \logistic" (or \sigmoid") method (Spiegelhalter and Lauritzen, 2:1990,
Neal, 2:1992b)). For the latter, the probabilities are as follows:
                                                            P         
                        P (Xi = 1 j fxj : j 2 Pi g) =          wij xj                  (2.16)
                                                                j 2Pi
where (z ) = 1=(1 + exp( z )), and the wij are parameters of the model. Of course, not all
conditional distributions can be put in this form.
The structure of a belief network can be represented as a directed acyclic graph, with
arrows drawn from parents to children. Figure 2.2 shows the representation of a fragment
of a hypothetical belief network intended as a parametric model for medical diagnosis. The
variables here are all binary, representing the presence or absence of the stated condition,
and are ordered from top to bottom (with no connections within a layer). Arrows out of
\trac accident" and \gunshot wound" indicate that these are relevant in specifying the
conditional probability of \brain injury". The lack of an arrow from \poor sanitation" to

                                                11
                   2.1 Probabilistic inference with a fully-speci ed model

\brain injury" indicates that the former is not relevant when specifying the conditional
probability of \brain injury" given the variables preceding it. For the model to be fully
speci ed, this graphical structure must, of course, be accompanied by actual numerical
values for the relevant conditional probabilities, or for parameters that determine these.
The diseases in the middle layer of this belief network are mostly latent variables, invented
by physicians to explain patterns of symptoms they have observed in patients. The symp-
toms in the bottom layer and the underlying causes in the top layer would generally be
considered observable. Neither classi cation is unambiguous | one might consider micro-
scopic observation of a pathogenic microorganism as a direct observation of a disease, and,
on the other hand, \fever" could be considered a latent variable invented to explain why
some patients have consistently high thermometer readings.
In any case, many of the variables in such a network will not, in fact, have been observed,
and inference will require a summation over all possible combinations of values for these
unobserved variables, as in equation (2.7). To nd the probability that a patient with
certain symptoms has cholera, for example, we must sum over all possible combinations of
other diseases the patient may have as well, and over all possible combinations of underlying
causes. For a complex network, the number of such combinations will be enormous. For
some networks with sparse connectivity, exact numerical methods are nevertheless feasible
(Pearl, 2:1988, Lauritzen and Spiegelhalter, 2:1988). For general networks, Markov chain
Monte Carlo methods are an attractive approach to handling the computational diculties
(Pearl, 4:1987).
Example: Multi-layer perceptrons. The most widely-used class of \neural networks" are the
multi-layer perceptron (or backpropagation) networks (Rumelhart, Hinton, and Williams,
2:1986). These networks can be viewed as modeling the conditional distributions for an
output vector, Y , given the various possible values of an input vector, X . The marginal
distribution of X is not modeled, so these networks are suitable only for regression or classi-
  cation applications, not (directly, at least) for applications where the full joint distribution
of the observed variables is required. Multi-layer perceptrons have been applied to a great
variety of problems. Perhaps the most typical sorts of application take as input sensory infor-
mation of some type and from that predict some characteristic of what is sensed. (Thodberg
(2:1993), for example, predicts the fat content of meat from spectral information.)
Multi-layer perceptrons are almost always viewed as non-parametric models. They can have
a variety of architectures, in which \input", \output", and \hidden" units are arranged
and connected in various fashions, with the particular architecture (or several candidate
architectures) being chosen by the designer to t the characteristics of the problem. A
simple and common arrangement is to have a layer of input units, which connect to a layer
of hidden units, which in turn connect to a layer of output units. Such a network is shown
in Figure 2.3. Architectures with more layers, selective connectivity, shared weights on
connections, or other elaborations are also used.
The network of Figure 2.3 operates as follows. First, the input units are set to their observed
values, x = fx1; . . . ; xmg. Values for the hidden units, h = fh1; . . . ; hpg, and for the output
units, o = fo1 ; . . . ; ong, are then computed as functions of x as follows:
                                                       P        
                                    hk (x) = f uk0 + ukj xj                                   (2.17)
                                                       j
                                                     P               
                                 ol (x) = g vl0 +          vlk hk (x)                        (2.18)
                                                      k


                                                12
                        2.2 Statistical inference for model parameters

                                                                       Output Units
                                       
                                                                       Hidden Units
                                       
                                                                       Input Units

Figure 2.3: A multi-layer perceptron with one layer of hidden units. The input units at the bottom
are xed to their values for a particular case. The values of the hidden units are then computed,
followed by the values of the output units. The value of a unit is a function of the the weighted
sum of values received from other units connected to it via arrows.

Here, ukj is the weight on the connection from input unit j to hidden unit k, with uk0 being
a \bias" weight for hidden unit k. Similarly, the vlk are the weights on connections into the
output units. The functions f and g are used to compute the activity of a hidden or output
unit from the weighted sum over its connections. Generally, the hidden unit function, f ,
and perhaps g as well, are non-linear, with f (z ) = tanh(z ) being a common choice. This
non-linearity allows the hidden units to represent \features" of the input that are useful in
computing the appropriate outputs. The hidden units thus resemble latent variables, with
the di erence that their values can be found with certainty from the inputs (in this sense,
they are not \hidden" after all).
The conditional distribution for Y = fY1 ; . . . ; Yn g given x = fx1; . . . ; xm g is de ned in terms
of the values of the output units computed by the network when the input units are set to
x. If the Yl are real-valued, for example, independent Gaussian distributions with means of
ol (x) and some predetermined \noise" variance, 2 , might be appropriate. The conditional
distribution would then be             n                                 2
                                           p 1 exp (ol (x2)2 yl )
                                      Y
                        P (y j x) =                                                              (2.19)
                                      l=1 2
Note that the computations required for the above can be performed easily in time propor-
tional to the number of connections in the network. There is hence no need to use Monte
Carlo methods with these networks once their weights have been determined.

2.2 Statistical inference for model parameters
The models described above are fully speci ed only when the values of certain model param-
eters are xed | examples are the parameters and `j for the latent class model, and the
weights ukj and vlk for a multi-layer perceptron. Determining these parameters from em-
pirical data is a task for statistical inference, and corresponds to one concept of learning in
arti cial intelligence. The frequentist approach to statistics addresses this task by attempt-
ing to nd procedures for estimating the parameters that can be shown to probably produce
\good" results, regardless of what the true parameters are. Note that this does not imply
that the values actually found in any particular instance are probably good | indeed, such
a statement is generally meaningless in this framework. In contrast, the Bayesian approach
reduces statistical inference to probabilistic inference by de ning a joint distribution for
both the parameters and the observable data. Conditional on the data actually observed,

                                                  13
                            2.2 Statistical inference for model parameters

posterior probability distributions for the parameters and for future observations can then
be obtained.
Statistical inference is applicable only when the potentially observable variables come in
groups of similar structure | each applying to a particular case | with the distributions
of the variables in di erent cases being related in some way. The values seen for the cases
that have been observed | the training cases, in machine learning terminology | can then
tell us something about the distribution for the unseen cases. The simplest assumption,
made for all the examples in this review, is that, given the values of the model parameters,
the observable (and latent) variables for one case are independent of the variables for the
other cases, and the distributions of these variables are the same for all cases. On this
assumption, if Xi = fXi1 ; . . . ; Xing are the variables for case i, and  = f1 ; . . . ; p g are the
model parameters, we can write the distribution of the variables for all cases as
                                     Y                  Y
          P (x1; x2; . . . j ) =       P (xi j ) =        P (xi1; . . . ; xin j 1 ; . . . ; p ) (2.20)
                                          i                      i
with P (xi1; . . . ; xin j 1 ; . . . ; p ) being a function only of the model parameters and of the
values xij , not of i itself. The number of cases is considered inde nite, though in any
particular instance we will be concerned only with whatever number of cases have been
observed, plus whatever number of unobserved cases we would like to make predictions for.
(Note that the variables used to express the models of the preceding section will in this
section acquire an additional index, to distinguish the di erent cases. Also, while in the
previous section the model parameters were considered xed, and hence were not explicitly
noted in the formulas, in this section the distribution for the data will be shown explicitly
to depend on the parameter values.1)
I will use coin tossing as a simple illustrative problem of statistical inference. In this example,
each case, Xi , consists of just one value, representing the result of tossing a particular coin
for the i-th time, with Xi = 1 representing heads, and Xi = 0 representing tails. We model
the coin as having a \true" probability of landing heads given by a single real number, ,
in the interval [0; 1]. The probability of a particular series of tosses, x1 ; . . . ; xC , is then
                                                 Y
               P (x1; . . . ; xC j ) =             xi (1 )1 xi = C1 (1 )C0                   (2.21)
                                               i
                 P
where C1 = i xi , i.e. the number of the xi that are one (heads), and C0 = C C1, i.e. the
number that are zero (tails).
The machine learning literature distinguishes between supervised and unsupervised learning.
Supervised learning can be seen as statistical inference for a regression or classi cation
model, in which only the conditional distributions of certain variables are modeled, whereas
unsupervised learning can (on one interpretation, at least) be seen as statistical inference
for a model that de nes the joint probability of all observable variables.
Maximum likelihood inference. The probability that a model with particular param-
eters values assigns to the data that has actually been observed (with any unobserved
variables being summed over) is called the likelihood. For example, if cases X1 ; . . . ; XC have
been observed in their entirety (and nothing else has been observed), then the likelihood is
1   I show this dependence by writing the parameter as if it were a variable on whose value we are conditioning.
    This is ne for Bayesians. Others may object on philosophical grounds, but will likely not be confused.



                                                       14
                            2.2 Statistical inference for model parameters
                                                                         C
                                                                         Y
                  L( j x1 ; . . . ; xC ) = P (x1; . . . ; xC j ) =           P (xi j )              (2.22)
                                                                         i=1
The likelihood is regarded as a function of the model parameters, with given data, and is
considered signi cant only up to multiplication by an arbitrary factor. It encapsulates the
relative abilities of the various parameter values to \explain" the observed data, which may
be considered a measure of how plausible the parameter values are in light of the data. In
itself, it does not de ne a probability distribution over parameter values, however | for
that, one would need to introduce some measure on the parameter space as well.2
The widely used maximum likelihood procedure estimates the parameters of the model to
be those that maximize the likelihood given the observed data. In practice, the equivalent
procedure of maximizing the log of the likelihood is usually found to be more convenient.
For the coin tossing example, the log likelihood function given data on C ips, obtained
from equation (2.21), is
                          log L( j x1; . . . ; xC ) = C1 log() + C0 log(1 )           (2.23)
The maximum likelihood estimate for the \true" probability of heads is easily found to be
^ = C1=C , i.e. the frequency of heads in the observed ips.
For a large class of models, the maximum likelihood procedure has the frequentist justi ca-
tion that it converges to the true parameter values in the limit as the number of observed
cases goes to in nity. This is not always the case, however, and even when it is, the quality
of such estimates when based on small amounts of data may be poor. One way to address
such problems is to choose instead the parameters that maximize the log likelihood plus
a penalty term, which is intended to bias the result away from \over tted" solutions that
model the noise in the data rather the true regularities. This is the maximum penalized
likelihood method. The magnitude of the penalty can be set by hand, or by the method of
cross validation (for example, see (Efron, 9:1979)).
Naively, at least, predictions for unobserved cases in this framework are done using the single
estimate of the parameters found by maximizing the likelihood (or penalized likelihood).
This is not always very reasonable. For the coin tossing example, if we ip the coin three
times, and each time it lands heads, the maximum likelihood estimate for the probability of
heads is one, but the resulting prediction that on the next toss the coin is certain to land
head-up is clearly not warranted.
Example: Univariate Gaussian. Suppose that X1 ; . . . ; XC are independent, and that each
has a univariate Gaussian distribution with the same parameters,  and , with  being
known, but  not known. We can estimate  by maximum likelihood. From equation (2.10),
the likelihood function can be found:
                                     C                   C
                                                            p 1 exp (xi )2 22 (2.24)
                                    Y                   Y
       L( j x1 ; . . . ; xC ) =        P (xi j ) =
                                    i=1                 i=1 2
Taking the logarithm, for convenience, and discarding terms that do not involve , we get:
2   The de nition of likelihood given here is that used by careful writers concerned with foundational issues.
    Unfortunately, some Bayesians have taken to using \likelihood" as a synonym for \probability", to be
    used only when referring to observed data. This has little practical import within the Bayesian school, but
    erases a distinction important to those of some other schools who are happy to talk about the \likelihood
    that  = 0", but who would never talk about the \probability that  = 0".


                                                       15
                          2.2 Statistical inference for model parameters

                                                               1 X  C
                           log L( j x1; . . . ; xC ) =       22 i=1 (xi )
                                                                                     2                    (2.25)
The value of  that maximizes this is the arithmetic average of the observed values:
                                                       C
                                        ^ = C1
                                                      X
                                                          xi = x                                         (2.26)
                                                      i=1
One virtue of this estimate, from the frequentist perspective, is that it is unbiased | for
any true value of , the expected value of the estimate, ^, is equal to the true value, the
expectation being taken with respect to the distribution that  de nes for X1 ; . . . ; XC .
Example: Multi-layer perceptrons. The log of the likelihood for the parameters of the multi-
layer perceptron of Figure 2.3 (i.e. for the weight matrices u and v), given the training cases
(x1; y1 ); . . . ; (xC ; yC ), is
           log L(u; v j (x1 ; y1); . . . ; (xC ; yC )) = log P (y1 ; . . . ; yC j x1 ; . . . ; xC ; u; v) (2.27)
                                                             XC X n (o (x ) y )2
                                                         =                  l i        il                 (2.28)
                                                             i=1 l=1           2  2

where terms that do not depend on u or v have been omitted, as they are not signi cant.
Note that the functions ol (  ) do depend on u and v (see equations (2.17) and (2.18)).
The above expression does not quite have the form of (2.22) because the network does not
attempt to model the marginal distribution of the Xi .
The objective of conventional neural network training is to minimize an \error" function
which is proportional to the negative of the above log likelihood. Such training can thus
be viewed as maximum likelihood estimation. Since the focus is solely on the conditional
distribution for the Yi , this is an example of supervised learning.
A local maximum of the likelihood of equation (2.28) can be found by gradient-based meth-
ods, using derivatives of log L with respect to the ukj and vlk obtained by the \backpropaga-
tion" method, an application of the chain rule (Rumelhart, Hinton, and Williams, 2:1986).
The likelihood is typically a very complex function of the weights, with many local max-
ima, and an enormous magnitude of variation. Perhaps surprisingly, simple gradient-based
methods are nevertheless capable of nding good sets of weights in which the hidden units
often compute non-obvious features of the input.
Multi-layer perceptrons are sometimes trained using \weight decay". This method can be
viewed as maximum penalized likelihood estimation, with a penalty term proportional to
minus the sum of the squares of the weights. This penalty encourages estimates in which
the weights are small, and is found empirically to reduce over tting.
Bayesian inference. Bayesian statistical inference requires an additional input not needed
by frequentist procedures such as maximum likelihood | a prior probability distribution
for the parameters, P (1 ; . . . ; p ), which embodies our judgement, before seeing any data, of
how plausible it is that the parameters could have values in the various regions of parameter
space. The introduction of a prior is the crucial element that converts statistical inference
into an application of probabilistic inference.
The need for a prior is also, however, one of the principal reasons that some reject the use of
the Bayesian framework. Partly, this is because the prior can usually be interpreted only as

                                                      16
                           2.2 Statistical inference for model parameters

an expression of degrees of belief, though in uncommon instances it could be derived from ob-
served frequencies (in which case, use of the Bayesian apparatus would be uncontroversial).
It may also be maintained that the choice of prior is subjective, and therefore objectionable,
at least when the problem appears super cially to be wholely objective. (There may be less
objection if a subjective prior is based on expert opinion, or otherwise introduces relevant
new information.) Bayesians divide into two schools on this last point. Some seek ways of
producing \objective" priors that represent complete ignorance about the parameters. Oth-
ers, while nding such priors useful on occasion, regard the quest for complete objectivity
as both unnecessary and unattainable. There will be no need to resolve this debate here.
When we combine a prior distribution for the parameters with the conditional distribution
for the observed data, we get a joint distribution for all quantities related to the problem:
            P (1 ; . . . ; p ; x1; x2; . . .) = P (1 ; . . . ; p ) P (x1; x2; . . . j 1 ; . . . ; p ) (2.29)
                                                         Y
                                                = P () P (xij )                                           (2.30)
                                                            i
From this, we can derive Bayes' rule for the posterior distribution of the parameters, given
observed values for X1 ; . . . ; XC :
                                                                                QC
          P ( j x1; . . . ; xC ) = PP(;(xx;1.; .. .. ;. x; xC) ) = R P (~) QCi=1 P (xi j ~) ~ (2.31)
                                                 1           C         P () i=1 P (xi j  ) d
The posterior can also be expressed as a proportionality in terms of the likelihood:
                            P ( j x1; . . . ; xC ) / P () L( j x1; . . . ; xC )                (2.32)
This shows how the introduction of a prior converts the expressions of relative plausibility
contained in the likelihood into an actual probability distribution over parameter space.
A simple prior density for the coin tossing example is P () = 1, i.e. the uniform distribution
on the interval [0; 1]. The corresponding posterior after observing C ips can be obtained
by substituting equation (2.21) into (2.31):
                                              C1           C0
        P ( j x1; . . . ; xC ) = R 1 ~C1 (1 ~)C0 ~ = (CC +                1)! C1 (1 )C0      (2.33)
                                        0  (1 ) d                    0 ! C1 !
                                                                R
Here, I have used the well-known \beta" integral: 01 xa(1 x)b dx = a!b!=(a + b +1)!. As C
grows large, this posterior distribution becomes highly concentrated around the maximum
likelihood estimate, ^ = C1=C .
The Bayesian framework can provide a predictive distribution for an unobserved case, XC +1 ,
given the values observed for X1 ; . . . ; XC :
                                               Z
               P (xC +1 j x1; . . . ; xC ) = P (xC +1 j ~) P (~ j x1 ; . . . ; xC ) d~ (2.34)
Such distributions, or similar conditional distributions in which some of the variables for
case C + 1 are also known, are what are generally needed when making decisions relating to
new cases. Note that the Bayesian predictive distribution is not based on a single estimate
for the parameters, but is instead an average of the predictions using all possible values of
the parameters, with each prediction weighted by the probability of the parameters having
those values. This reasonable idea of averaging predictions leads almost inevitably to the
Bayesian approach, since it requires that a measure be de ned on the parameter space,
which can then be interpreted as a Bayesian prior distribution.

                                                       17
                       2.2 Statistical inference for model parameters

For the coin tossing example, the predictive probability of heads on ip number C +1, given
data on the rst C ips, is                      Z 1
             P (XC +1 = 1 j x1; . . . ; xC ) =     ~  (CC + 1)! ~C1 (1 ~)C0 d~
                                                            !C !                    (2.35)
                                                     0                0   1

                                            = (CC +     C
                                                         1)!  C0 ! (C1 + 1)!
                                                                  (C + 2)!                   (2.36)
                                                     0 1!
                                                      !
                                            = CC1 ++ 21                                      (2.37)
Note that this predictive distribution never assigns zero probability to either heads or tails,
re ecting the fact that values of  that assign non-zero probability to both results cannot
be completely ruled out with any nite amount of data (unless they were ruled out from the
start by the prior). Di erent priors for  will, of course, give di erent predictive distributions,
whose form will not in general be as simple as that above.
A Bayesian using the above approach to prediction will in theory almost never be working
with a fully-speci ed model derived from empirical data, of the sort discussed in the Sec-
tion 2.1 | there will instead always be some degree of uncertainty in the parameter values.
In practice, if the posterior distribution is very strongly peaked, the predictive distribution
of equation (2.34) can be replaced by the prediction made using the values of the parameters
at the peak, with a negligible loss of accuracy, and a considerable reduction in computation.
Situations where the amount of training data is not sucient to produce such a strong peak
are by no means uncommon, however. It is in such situations that one might expect the
Bayesian predictions to be better than the predictions obtained using any single estimate
for the model parameters.
Evaluation of the integrals over parameter space in equations (2.31) and (2.34) can be
very demanding. Note that the predictive distribution of equation (2.34) can be viewed
as the expectation of P (xC +1 j ) with respect to the posterior distribution for . The
Monte Carlo estimation formula of equation (1.2) thus applies. For problems of interest
in arti cial intelligence, the parameter space often has very high dimensionality, and the
posterior distribution is very complex. Obtaining a Monte Carlo estimate may then require
use of Markov chain sampling methods. As we will see, these methods require only that we
be able to calculate probability densities for parameter values up to an unknown constant
factor; we therefore need not evaluate the integral in the denominator of equation (2.31).
Monte Carlo techniques can also be used to evaluate whether the prior distribution chosen
re ects our actual prior beliefs. Even before any data has been observed, we can nd the
prior predictive distribution for a set of data items, X1 ; . . . ; XC :
                                                 Z              C
                                                                Y
                         P (x1; . . . ; xC ) =       P (~)          P (xi j ~) d~       (2.38)
                                                                i=1
If we have a sample of data sets generated according to this distribution, we can examine
them to determine whether they are representative of what our prior beliefs lead us to
expect. If they are not, then the prior distribution, or perhaps the entire model, is in need
of revision.
Generating a value from the prior predictive distribution can be done by rst generating a
value, , from the prior parameter distribution, and then generating values for X1 ; . . . ; XC
from their distribution conditional on . Even for quite complex models, these are often

                                                 18
                      2.2 Statistical inference for model parameters

easy operations. When this is not the case, however, Markov chain sampling can be useful
for this task (as is illustrated in (Szeliski, 2:1989, Chapter 4)).
Example: Univariate Gaussian. Suppose that X1 ; . . . ; XC are independent Gaussian vari-
ables with the same unknown mean, , but known variance, 2 . Let the prior distribution
for  be Gaussian with mean 0 and variance 02 . Using equations (2.32) and (2.10), the
posterior distribution for  given values for the Xi can be found as follows:
                                            C
                                            Y
          P ( j x1; . . . ; xC ) / P ()         P (xi j )                              (2.39)
                                            i=1
                                                               C
                                                               Y
                               / exp( ( 0 )2 =202)                exp( (xi )2 =22)   (2.40)
                                                               i=1
                               / exp( ( 1 )2 =212)                                   (2.41)
where 1=12 = 1=02 + C=2 and 1 = (0 =02 + C x=2)=12 , with x = C       1P
                                                                               i xi . Thus the
posterior distribution for  is a univariate Gaussian with a variance that decreases as the
amount of data increases, and with a mean that combines information from the data with
information from the prior, eventually converging on the maximum likelihood estimate of
equation (2.26).
The predictive distribution for a new data item, XC +1 , can be obtained by applying equa-
tion (2.34). The result is a Gaussian distribution with mean 1 and variance 12 + 2 .
As with the coin-tossing example, the analytical tractability seen here results from a con-
venient choice of prior distribution, which will not always be a reasonable representation of
actual prior beliefs.
Example: Multi-layer perceptrons. To perform Bayesian inference for a multi-layer percep-
tron, we must decide on a prior for the parameters u and v. A simple candidate is
                             p 1 exp u2kj =2u2           p 1 exp vlk2 =2v2  (2.42)
                        Y                               Y
          P (u; v) =
                        k; j 2u                       l; k 2v
i.e. independent Gaussian distributions for each weight, with variance u2 for the input-
hidden weights, and v2 for the hidden-output weights. This prior makes small weights more
likely than large weights, with the degree of bias depending on the values of u and v .
In this respect, it resembles the penalized likelihood method of \weight decay" described
previously.
We can evaluate whether this prior captures our beliefs in respect of some particular problem
by generating a sample from the distribution over functions de ned by this distribution over
weights. (This is essentially the prior predictive distribution if the outputs are assumed to
be observed without noise.) Figure 2.4 shows two such samples, with di erent values of
u, for a problem with one real-valued input and one real-valued output. As can be seen,
the value of u controls the smoothness of the functions. Note in this respect that as the
number of hidden units in the network increases, it becomes possible for the function de ned
by the network to be very ragged, but typical functions generated using this prior do not
become more and more ragged. (However, as the number of hidden units increases, v must
decrease in proportion to the square root of this number to maintain the output scale.) I
discuss this point further in (Neal, 2:1993b).


                                                   19
                       2.2 Statistical inference for model parameters

+1
                                                      +2




                                                      +1


 0


                                                       0




                                                      -1
-1

     -3   -2     -1     0     +1     +2     +3             -3   -2   -1    0     +1     +2    +3
                       (a)                                                (b)
Figure 2.4: Samples from the prior distribution over functions implied by the prior of equa-
tion (2.42), (a) with u = 1, (b) with u = 10. Two functions generated from each prior are
shown, with the one-dimensional input, x, plotted on the horizontal axis, and the single output,
o(x), plotted on the vertical axis. The hidden unit activation function was tanh; the output unit
activation
     p function was the identity. Networks with 1000 hidden units were used, and v was set
to 1= 1000.

When the prior is combined with the multi-layer perceptron's typically complex likelihood
function (equation (2.28)) a correspondingly complex posterior distribution for the weights
results. It is thus appropriate to consider Markov chain Monte Carlo methods as a means
of performing Bayesian inference for these networks (Neal, 2:1992a, 2:1993a), though other
approaches are also possible, as is discussed in Section 3.2.
Statistical inference with unobserved and latent variables. In the previous sec-
tion, I have assumed that when case i is seen, we nd out the values of all the variables,
Xi1 ; . . . ; Xin, that relate to it. This will not always be so, certainly not when some of these
are latent variables. Theoretically, at least, this is not a problem in the Bayesian and maxi-
mum likelihood frameworks | one need only work with marginal probabilities obtained by
summing over the possible values of these unknown variables.
Maximum likelihood or maximum penalized likelihood learning procedures for models with
latent variables can be found in (Ackley, Hinton, and Sejnowski, 2:1985), for \Boltzmann
machines", in (Cheeseman, et al, 2:1988), for latent class models, and in (Neal, 2:1992b), for
belief networks. The procedures for Boltzmann machines and belief networks use Markov
chain Monte Carlo methods to estimate the gradient of the log likelihood. The procedure
of Cheeseman, et al for latent class models is based on the EM algorithm (Dempster, Laird,
and Rubin, 9:1977), which is widely applicable to problems of maximum likelihood inference
with latent or other unobserved variables.
Bayesian inference is again based on the posterior distribution, which, generalizing equa-
tion (2.31), can be written as


                                                 20
                        2.2 Statistical inference for model parameters
                                                                      C
                                                                      Q        P
                                                            P ( )                    P (xi1; . . . ; xin j )
                                                                     i=1 fxij :j2=Ki g
P ( j fxij : i 2 f1; . . . ; C g; j 2 Ki g) =          R            QC     P
                                                                                                                     (2.43)
                                                            P (~)                   P (xi1; . . . ; xin j ~) d~
                                                                     i=1 fxij :j2= Ki g
where Ki is the set of indices of variables for case i whose values are known from observation.
(I have here had to depart from my conventional placement of tildes over the unknown xij .)
Computationally, when this posterior is used to make predictions, the required summations
over the unobserved variables can be done as part of the same Monte Carlo simulation that is
used to evaluate the integrals over parameter space. This convenient lack of any fundamental
distinction between the variables applying to a particular case and the parameters of the
model is a consequence of statistical inference being reduced to probabilistic inference in
the Bayesian framework.
For some models, the predictive distribution given by the integral of equation (2.34) can
be found analytically, or the model might be speci ed directly in terms of this distribution,
with no mention of any underlying parameters. If all the variables in the training cases have
known values, nding the predictive distribution for a new case will then be easy. If there
are latent or other unobserved variables, however, computing the predictive distribution will
require a summation or integration over the possible values these variables could take on
in all the training cases where they were not observed. Monte Carlo methods may then be
required.
Example: Latent class models. Since a latent class model de nes the joint distribution of all
observable variables, statistical inference for such a model can be seen as an unsupervised
learning procedure. Bayesian inference for latent class models is discussed by Hanson, Stutz,
and Cheeseman (2:1991) and by myself (Neal, 2:1992c). I will use the two-class model for
binary data of equation (2.13) to illustrate the concepts. At least three computational
approaches are possible with this model, in which di erent sets of variables are integrated
or summed over analytically.
Assuming we use a prior distribution in which and the `j are all independent, the joint
distribution for the parameters of this model and all the variables relating to C cases can
be written as
                              Y                   C 
                                                  Y                               n
                                                                                  Y                              
                                                             ci (1        )1 ci           vij
P ( ; ; c; v) = P ( )               P ( `j )                                            ci j (1   ci j )1 vij (2.44)
                              `; j                i=1                             j =1
From this joint distribution, the conditional distribution given the observed values of the
Vi , could be obtained, and sampled from by Markov chain techniques. The predictive
distribution for a new case could then be found by Monte Carlo methods, as an expectation
with respect to this distribution.
For this particular model it is possible instead to analytically integrate out the parameters,
provided the priors on and the `j are of a certain form | in particular, this is possible
when the priors are uniform on [0; 1], i.e. P ( ) = 1 and P ( `j ) = 1. Using the \beta"
integral, as in equation (2.33), we can obtain the marginal distribution for just the observable
and class variables for the various cases, as follows:
                                                    1 n
                           P (c; v) = (Cr0!+r1)!
                                               1! Y Y s`j 0 ! s`j 1 !                     (2.45)
                                                   `=0 j =1 (r` + 1)!

                                                        21
                          2.2 Statistical inference for model parameters
              P                                  P
where r` = Ci=1  (`; ci) and s`jb = Ci=1  (`; ci ) (b; vij ). Sampling from the distribution
for the Ci given values for the Vi can again be done using Markov chain methods, and the
results used to nd the predictive distribution for a new case.
Alternatively, we can sum over the possible values for each of the class variables (which are
independent given the values of the parameters) obtaining the marginal distribution for the
parameters and the observable variables alone:
                            Y                   C X
                                                Y 1                               n
                                                                                  Y v                              
P ( ; ; v) = P ( )                P ( `j )                      c~i (1   )1 c~i        ij               )1 vij
                                                                                       c~i j (1   c~i j            (2.46)
                            `; j                i=1 c~i =0                        j =1
From this, one can obtain a posterior parameter distribution, which Hanson, et al (2:1991)
approximate and then use to make predictions for new cases using equation (2.34). One
could also try sampling from this posterior using Markov chain methods.
Expressing priors using hyperparameters. Just as latent variables are sometimes a
useful tool for expressing the distribution of observable variables for a particular case, so too
can the prior distribution for the parameters of a model sometimes be most conveniently
expressed using additional hyperparameters. For example, the prior for a set of parameters
1 ; . . . ; p might be represented as a marginal distribution using a hyperparameter, , as
follows:                            Z                             Z
             P (1 ; . . . ; p ) =   P (~; 1; . . . ; p ) d ~ = P (1 ; . . . ; p j ~) P (~ ) d ~ (2.47)
This technique can be extended to any number of levels; the result is sometimes referred to as
a hierarchical model. The dependency relationships amongst hyperparameters, parameters,
latent variables, and observed variables, can often be conveniently expressed in the belief
network formalism, as is done by Thomas, Spiegelhalter, and Gilks (4:1992).
To give a simple example, suppose the observable variables are the weights of various dogs,
each classi ed according to breed, and that k is the mean weight for breed k, used to
specify a Gaussian distribution for weights of dogs of that breed. Rather than using the
same prior for each k , independently, we could instead give each a Gaussian prior with a
mean of , and then give itself a prior as well. The e ect of this hierarchical structure can
be seen by imagining that we have observed dogs of several breeds and found them all to
be surprisingly heavy. Rather than stubbornly persisting with our underestimates for every
new breed we encounter, we will instead adjust our idea of how heavy dogs are in general
by changing our view of the likely value of the hyperparameter . We will then start to
expect even dogs of breeds that we have never seen before to be heavier than we would have
expected at the beginning.
Models speci ed using hyperparameters can easily be accommodated by Monte Carlo meth-
ods, provided only that the probabilities P ( j ) can be easily calculated, at least up to a
factor that does not depend on either  or .
Example: Multi-layer perceptrons. Often, we will have diculty deciding on good values for
u and v in the prior over networks weights of equation (2.42) | either because we are
ignorant about the nature of the function underlying the data, or because we have diculty
visualizing the e ects of these parameters with high-dimensional inputs and outputs. It is
then sensible to treat u and v as hyperparameters, with rather broad prior distributions.
If the problem turns out to require a function that is smooth only on a small scale, a large
value of u will be found, permitting large input-hidden weights, while, for some other

                                                             22
                                 2.3 Bayesian model comparison

problem, the same hierarchical model might lead to a small value for u, appropriate for a
much smoother function. Similarly, when v is a hyperparameter, the model can adapt to
the overall scale of the outputs. This topic is discussed in more detail by MacKay (2:1991,
2:1992b).

2.3 Bayesian model comparison
Section 2.1 dealt with probabilistic inference given a model in which the parameters were
fully speci ed. Section 2.2 discussed inference when the parameters of the model were
unknown, but could be inferred on the basis of the information in a set of training cases. I
will now consider inference when even the form of the model is uncertain. This is a rather
open-ended problem, since generally we, or a learning program, will be able to come up
with any number of possible models, often of an increasingly elaborate nature | we can,
for example, contemplate modeling data using multi-layer perceptron networks with various
numbers of hidden layers, arranged in a variety of architectures.
I will assume here, however, that we have reduced the problem to that of comparing a fairly
small number of models, all of which we regard a priori as having a reasonable chance of
being the truth, or at least of being a useful approximation to the truth. For simplicity, I will
deal with only two models, MA and MB , with prior probabilities P (MA ) and P (MB ) (which
sum to one). Presumably these prior probabilities will be roughly equal, since we wouldn't
bother to even consider a model that we felt was highly implausible to start with. This is
true regardless of whether one model is more elaborate than the other (i.e. is speci ed using
a larger number of parameters). \Occam's razor" | the principle of avoiding unnecessary
complexity | is implicitly embodied in the Bayesian framework through the e ect of each
model's prior on its parameters, so there is generally no need to incorporate a further bias
toward simplicity using the priors on the models themselves. See (MacKay, 2:1991, 2:1992a)
and (Je reys and Berger, 9:1992) for discussion of this point.
Suppose that model MA has parameters  = f1 ; . . . ; p g, with prior distribution P ( j MA ),
while model MB has a di erent set of parameters,  = f1 ; . . . ; q g, with prior P ( j MB ).
For each model, the parameters determine the probabilities for the observable variables in
each case, as P (xi j ; MA ), and P (xi j ; MB ). The probability of the entire training set
under each model is given by
                                            Z               C
                                                            Y
                P (x1; . . . ; xC j MA ) =      P (~ j MA ) P (xi j ~; MA ) d~          (2.48)
                                                                  i=1
                                               Z                   C
                                                                   Y
                 P (x1; . . . ; xC j MB ) =        P (~ j MB )         P (xi j ~; MB ) d~      (2.49)
                                                                  i=1
The posterior model probabilities can then be found by Bayes' rule:
P (MA j x1; . . . ; xC ) = P (M ) P (x ; . .P. ;(xMAj) M  P (x1; . . . ; xC j MA )                 (2.50)
                                  A        1        C       A ) + P (MB ) P (x1; . . . ; xC j MB )
and similarly for P (MB j x1; . . . ; xC ).
The predictive probability for a new case is the mixture of the predictions of the two models,
weighted by their posterior probabilities:
   P (xC +1 j x1 ; . . . ; xC ) = P (xC +1 j x1 ; . . . ; xC ; MA) P (MA j x1 ; . . . ; xC )
                                      + P (xC +1 j x1; . . . ; xC ; MB ) P (MB j x1; . . . ; xC ) (2.51)

                                                   23
                              2.3 Bayesian model comparison

The predictive probabilities given each model are obtained as in equation (2.34). Often, the
information in the training data is sucient to make the posterior probability for one model
be very much greater than that for the other. We can then simply ignore the predictions of
the improbable model, accepting the overwhelmingly more probable one as being \true".
For the coin ipping example, we could contemplate a very simple model, MA , with no
parameters, that simply states that the probability of the coin landing head-up is one-half,
and a more complex model, MB , that has a parameter for the \true" probability of heads,
which is given a uniform prior. When examining a coin of somewhat disreputable prove-
nance, it may be reasonable to assign these two models roughly equal prior probabilities,
say P (MA ) = P (MB ) = 1=2. This choice of models and of the prior over models embodies
a belief that it is plausible that the probabilities of heads and tails might be exactly equal
(or equal for all practical purposes), while we have no particular reason to think that the
coin might be biased so as to land heads, say, 37:2% of the time.
After we have ipped the coin C times, with results x1 ; . . . ; xC , we can compare how probable
these two models are in light of this data. Suppose that of these ips, C1 landed heads and
C0 landed tails. The probability of the observed data under the two models will then be as
follows:
                               P (x1; . . . ; xC j MA ) = 2 C                              (2.52)
                               P (x1; . . . ; xC j MB ) = (CC0+ ! C1 !
                                                                   1)!                     (2.53)
where the probability under MB is found by integrating equation (2.21) with respect to .
For ten ips, with C1 = 6 and C0 = 4, equation (2.50) gives the result P (MA ) = 0:693,
showing that the simpler model can be favoured even when the data could be \explained"
better by the more complex model, if its parameter were set appropriately. With C1 = 8
and C0 = 2, however, we nd that P (MA ) = 0:326, showing that the more complex model
can be favoured when the evidence for it is strong.
In this simple example, the integrations required to calculate the probability of the training
data under each model could be done analytically, but for more complex models, this will
generally not be the case. Note that the required probabilities (in equations (2.48) and
(2.49)) correspond to the denominator of equation (2.31), whose evaluation was not required
for inference with respect to a single model. Typically, these probabilities will be extremely
small, since any particular data set of signi cant size will have low probability, even under the
correct model. We are interested in the relative magnitude of these very small probabilities,
as given by the two models being compared. In Section 6.2, techniques for nding such
ratios are discussed. We will see that even though such calculations involve more than
simply nding a Monte Carlo estimate for an expectation, they are nevertheless possible
using a series of Monte Carlo simulations.
The Bayesian model comparison framework is used by MacKay (2:1991, 2:1992a, 2:1992b),
to compare di erent interpolation models and di erent architectures for multi-layer percep-
trons, and by Hanson, Stutz, and Cheeseman (2:1991), to compare latent class models with
di erent numbers of classes, and di erent hierarchical structure.




                                               24
                                   2.4 Statistical physics

2.4 Statistical physics
Historically, Monte Carlo methods based on Markov chains were rst developed for per-
forming calculations in statistical physics, and interesting methods of general applicability
continue to be developed in by workers in this area. Techniques from statistical physics of
a theoretical nature have also been applied to analogous problems in statistical inference.
Here, I will brie y outline the essential concepts and vocabulary required to understand the
literature in this area. This material is covered in innumerable texts on statistical physics,
such as that of Thompson (9:1988).
Microstates and their distributions. A complete microscopic description of a physical
system speci es its state (more precisely, its microstate) in complete detail. For example, the
microstate of a quantity of some substance would include a speci cation of the position and
velocity of every molecule of which it is composed. In contrast, a macroscopic description
speci es only the system's macrostate, which is sucient to determine its macroscopically
observable properties. In the above example, the macrostate might be speci ed by the
temperature, volume, and mass of the substance. Whereas the macroscopic state is easily
observed, the exact microstate is essentially unknowable, and hence must be treated in
terms of probabilities. One of the goals of statistical physics is to relate these two levels of
description.
Every possible microstate, s, of the system has some de nite energy, E (s), which may also
be a function of the external environment (for instance, the applied magnetic eld). If the
system is isolated, then this energy is xed, say at E0, and the assumption is generally made
that all microstates with that energy are equally likely (and all those with a di erent energy
are impossible). For a system with a continuous state, we thus have P (s) = Z 1  (E0; E (s)),
for some normalization constant Z . This uniform distribution over states of a given energy
is known as the microcanonical distribution.
We can also consider systems that are not isolated, but instead exchange energy with a
much larger reservoir that maintains the system at a constant temperature. The system's
energy can then uctuate, and it is assumed that the probability of the system being in
microstate s, given that the temperature is T , is
                                 P (s) = Z1 exp E (s)=T
                                                               
                                                                                         (2.54)
                                                       P
(using suitable units for temperature). Here, Z = s~ exp( E (~s)=T ) is the normalization
constant needed to make the distribution sum (or integrate) to one. This distribution is
known as the canonical (or Gibbs, or Boltzmann) distribution over microstates. It is with
such distributions that we will primarily be concerned.
The physical systems commonly studied can be of arbitrary size | in microscopic terms,
the dimension of the state variable, s, can be made arbitrarily large, with the energy, E (s),
being de ned for any size of system. An intensive quantity is one whose value is independent
of system size, such as temperature. Extensive quantities, such as energy, grow with system
size. If the system's interactions are local, this growth will be linear for large systems, and
the values of extensive quantities per unit of system size will reach limiting values.
The characteristics of the system in this thermodynamic limit of macroscopic size are of
the most interest in statistical physics. Most macroscopic properties of a system, such as
the energy per unit of system size, can be expressed as expectations with respect to the
canonical distribution. In the thermodynamic limit, the uctuations in these quantities

                                              25
                                   2.4 Statistical physics




                     (a)                                            (b)
Figure 2.5: A two-dimensional Ising system. Spin variables are shown as circles, with lines con-
necting neighboring spins. A typical high-temperature state is shown in (a), while (b) shows a
lower-temperature state, in which there are large clusters of like spins.

become negligible, allowing their average values to be identi ed with the apparently stable
values obtained from macroscopic observations.
Example: The 2D Ising model. The Ising model of ferromagnetism is a much-studied system
with a discrete microstate (see (Cipra, 9:1987) for a tutorial). A two-dimensional Ising
system consists of a 2D array of \spin" variables, Si , taking on values of +1 or 1, as
illustrated in Figure 2.5. The system's energy is given by
                                          X              X
                            E (s) =           Jsi sj         Hsi                     (2.55)
                                          (i;j )2N           i
where N is the set of pairs of indexes for nearest vertical and horizontal neighbors in the
2D array. The constant J controls how strong a tendency there is for neighboring spins to
be the same. H gives the strength of an external magnetic eld that biases the spins in one
direction or the other. The overall \magnetization" of the system is
                                                X
                                     M (s) =        si                               (2.56)
                                                     i
Only systems of nite size can be simulated on a computer (a toroidal topology is generally
used, to avoid boundaries), but it is the extrapolation of the results to the thermodynamic
limit that is of interest. These system exhibits a phase transition at a critical temperature.
Above this temperature, there are local regions of matched spins, but no long-range order,
and hence there is zero magnetization when the external eld is zero; below the critical tem-
perature, over half the spins in the entire system acquire a consistent orientation, producing
a non-zero magnetization even when the external eld is zero.
The 2D Ising model happens to be the same as the simplest of the image models investigated
by Geman and Geman (4:1984) and others. Here, the \spins" are interpreted as pixels of
a black and white image; their interaction in the energy function models the tendency of
images to contain large black and large white areas. Generalized to allow J and H to vary

                                               26
                                            2.4 Statistical physics

from spin to spin, and to allow interactions between any two spins, the Ising model becomes
the \Boltzmann machine" of Ackley, Hinton, and Sejnowski (2:1985).
Example: Lennard-Jonesium. A simple model of molecular interactions based on the Lennard-
Jones potential has also been the subject of numerous computer investigations, starting in
the early days of the Monte Carlo method (Wood and Parker, 4:1957). The state of this
system is composed of position vectors, qi , and momentum vectors, pi, for some number
of molecules of a hypothetical substance sometimes dubbed \Lennard-Jonesium", which
resembles argon. As is typical in statistical physics, interest centres on systems with very
large numbers of molecules, though only much smaller systems can actually be simulated.
The energy for the system, denoted by H in this context, is
                                  "          12              6 #
                           X                                          X jpij2
            H (q; p) =          4" jq q j             jqi qj j       +                (2.57)
                           i6=j        i    j                            i 2
where ", , and  are arbitrary positive constants. The rst term in the expression for H is
known as the potential energy; it depends only on the positions of the molecules, and will be
denoted by E (q). The second term is the kinetic energy; it depends only on the momenta of
the molecules, and will be denoted by K (p). The form of the potential energy is designed so
that nearby molecules will be attracted to each other, under the in uence of the 6-th power
term, but will not be able to approach too closely, due to the 12-th power term. Distant
molecules have little e ect on each other.
The canonical distribution for the complete state, (q; p), will be
               P (q; p) = Z1 exp H (q; p)=T
                                                   
                                                                                      (2.58)
                                        H
                                                                                         
                               1 exp E (q)=T   1 exp K (p)=T 
                               =                                                              (2.59)
                              ZE                          ZK
The distributions for q and for p are thus independent. That for p is simply a multivariate
Gaussian, and can be dealt with analytically. Consequently, Monte Carlo simulation is often
used only to sample from the distribution for q, determined by the potential energy, E (q).
Eliminating aspects of the problem that can be solved analytically is a generally useful
technique. Interestingly, though, we will see later that it can also be computationally useful
to introduce extra variables such as p.
Free energy and phase transitions. The normalization factor, Z , for the canonical
distribution of equation (2.54) is known as the partition function. (As written, it appears
to be a constant, but it becomes a function if one considers varying T , or the environmental
variables that enter implicitly into E (s).) The free energy of the system is de ned as
F = T log(Z ). The following relationship is easily derived:
                                     F = hE i TS                                              (2.60)
                                                             P
where hE i is the expectation of the energy, and S =           s~ P (~s) log(P (~s)) is the entropy.
The free energy and entropy are extensive quantities.3
3   I am here ignoring certain distinctions that would be important for physical applications. For example,
    one clearly gets di erent \free energies" for Lennard-Jonesium depending on whether one looks at the
    space of both position and momentum coordinates, and uses the total energy, H (q; p), or instead looks
    only at the position coordinates, and uses only the potential energy, E (q). Additional complications arise
    from the fact that the molecules are not distinguishable.


                                                       27
                                      2.4 Statistical physics

These closely related quantities play important roles in statistical physics. In particular,
phase transitions such as melting and boiling, which occur as the temperature or other
environmental variables change, can be identi ed by discontinuities in the derivatives of
the free energy per unit of system size, in the thermodynamic limit. Much e ort has been
devoted to overcoming the unfortunate fact that it is the behaviour in the vicinity of such
phase transitions that is both of the greatest scienti c interest and also the most dicult to
elucidate using Monte Carlo simulations. In particular, calculation of the free energy is not
straightforward, and usually requires a whole series of Monte Carlo runs.
Correspondence with probabilistic inference. To relate the formalism of statistical
physics to problems of probabilistic inference, one need only regard the joint values of the
random variables in a probabilistic inference problem as possible microstates of an imaginary
physical system. Note that any probability distribution over these variables that is nowhere
zero can be considered a canonical distribution (equation (2.54)) with respect to an energy
function E (s) = T log(P (s)) T log(Z ), for any convenient choice of Z and T . States with
zero probability can be accommodated if the energy is allowed to be in nite. Usually, we
set T = 1, and drop it from the equations.
In particular, Bayesian inference for model parameters can be represented by an imaginary
physical system in which the microstate corresponds to the set of unknown parameters,
1 ; . . . ; p . Given a training set of complete observations, x1 ; . . . ; xC , the following energy
function is generally easy to compute:
                                                                                                    
                                                                                  C
                                                                                  Q
        EC () =        log (P () P (x1; . . . ; xC j )) =          log P ()         P (xi j )       (2.61)
                                                                                  i=1
Taking T = 1, the partition function will then be
                Z
                               
                                            Z            C
                                                         Y
     ZC =           exp EC (~) d~ =           P (~)         P (xi j ~) d~ = P (x1; . . . ; xC ) (2.62)
                                                         i=1
The canonical distribution for this system (equation (2.54)) is identical to the posterior
parameter distribution (equation (2.31)):
                                                   QC
             P ( j x1; . . . ; xC ) =     P (  )  i=1 P (xi j ) = 1 exp E ()         (2.63)
                                               P (x1; . . . ; xC )               ZC
Predicting future observations by calculating expectations with respect to this posterior (as
in equation (2.34)) is thus reduced to nding expectations for functions of the microstate of
this imaginary physical system.
The value of the partition function, ZC , is the probability of the training data given the
model being considered. This is the crucial quantity needed for Bayesian model compar-
ison using equation (2.50). The problem of model comparison is thus reduced to that of
calculating the partition function for a physical system, or equivalently, the free energy or
the entropy. The partition function can also be used to express predictive probabilities, as
follows:
               P (xC +1 j x1; . . . ; xC ) = P (xP1(; x. . ;. ;. x. .C; ;xxC)+1) = ZZC +1 (2.64)
                                                            1             C           C
Calculating predictive probabilities this way, using the methods for estimating ZC +1 =ZC
described in Section 6.2, will be preferable to straightforward Monte Carlo estimation of
hP (xC +1 j )iC whenever the value xC +1 is most likely to occur in conjunction with values of

                                                  28
                                  2.4 Statistical physics

 that have low probability, and hence would seldom be visited during a standard simulation.
This will sometimes be the case for rare events.
The connections between probabilistic inference and statistical physics have been noted by
several authors. They motivated Ackley, Hinton, and Sejnowski (2:1985) to give the name
\Boltzmann machine" to the probabilistic neural network they developed. More recently,
methods from statistical physics have been used to analyse the generalization capabilities
of neural networks (for a review, see (Watkin, Rau, and Biehl, 2:1993)). For this work, it
is useful to de ne statistical problems of inde nitely large \size" in a way that leads to an
appropriate \thermodynamic limit" as the size increases. This can be done by letting both
the number of cases in the training set and the number of variables in the model increase
in tandem with system size. Empirical work using Markov chain Monte Carlo methods has
been a useful adjunct to the theoretical work done in this framework (see, for example,
(Seung, Sompolinsky, and Tishby, 2:1992)).




                                             29
      3. Background on the Problem and its Solution
Three tasks involving complex distributions were described in the preceding section: proba-
bilistic inference for unobserved variables using a fully-speci ed model, Bayesian statistical
inference for unknown model parameters based on training data, and simulation of physical
systems with a given energy function. In this section, I more explicitly characterize prob-
lems of this sort, and discuss why simple approaches to solving them are not adequate. I
also present the essential theory of Markov chains needed for the development of the Monte
Carlo methods that we hope will be able to solve these problems.
3.1 De nition of the problem
The problems that we will principally address take the form of nding the expectation
of some function with respect to a probability distribution on some discrete or continu-
ous space. Examples include the computation of conditional probabilities as expressed in
equations (2.8) and (2.9), and of predictive probabilities given by equation (2.34).
The problem of calculating an expectation. To formalize this class of problems,
suppose we have a state variable, X = fX1 ; . . . ; Xn g, whose components may be discrete,
or continuous, or a mixture of both. The dimensionality, n, is often large | problems
with a few hundred dimensions are typical, and those with a few million dimensions may
be contemplated. Suppose that the probability distribution for this variable is given by an
unnormalized probability mass/density function f (x). Our goal is to nd the expectation
of a(X ) with respect to this probability distribution. For the discrete case:
                                X        X
                       hai =           a(~x1; . . . ; x~n) P (~x1; . . . ; x~n)     (3.1)
                                  x~1         x~n
                                 P          P
                                           a(~x1; . . . ; x~n) f (~x1 ; . . . ; x~n)
                             =    x~1        x~n
                                             P                                             (3.2)
                                                    P f (~x1 ; . . . ; x~n)
                                              x~1      x~n
If the components of X are continuous, the sums above will be replaced by integrals; if some
components are continuous and some discrete, we will have a mixture of sums and integrals.
We assume that both f (x) and a(x) can feasibly be evaluated for any given value of x.
For some of the algorithms discussed, we also assume that f 0 (x) exists and can be com-
puted. In many applications, however, evaluating f (x) or f 0 (x) takes a signi cant amount
of time, so we will wish to minimize the number of such evaluations. When X is multidimen-
sional, f (x1 ; . . . ; xn) sometimes has a \local" structure that allows its value to be quickly
re-computed after a change to only one of the xi.
Problems of varying diculty. For the problems we wish to address, f (x) varies greatly,
with most of the probability being concentrated in regions of the state space that occupy
a tiny fraction of the whole, and whose location is not known a priori. This crucial char-
acteristic means that any method of solution must somehow search for regions of high
probability. The shape of the relevant regions is also important | a convoluted shape will
require continual search, in order to nd all its nooks and crannies.
Typically, we will require an estimate of hai that satis es an absolute error bound, i.e. that is
likely to be within " of the true value, for some " that does not depend on the magnitude of
hai. We will also assume that hai is dominated by contributions from a(x)P (x) in the region
where P (x) is large; this allows us to obtain a reasonable estimate of hai by sampling from

                                                     30
                                3.1 De nition of the problem




           (a)                               (b)                              (c)
Figure R3.1: Three types
                       R of estimation problem. In each case, we wish to estimate the value of
hai = a(~x)f (~x) dx~ f (~x) dx~, where a(x) is given by the solid line, and f (x) by the dotted
line. The required accuracy is indicated by the divisions to the right of each graph. In case (a),
the probability is substantial over much of the domain, and a(x) does not vary much in relation
to the absolute error tolerance. The expectation could be adequately estimated by Monte Carlo
integration using points drawn uniformly from the domain. This method would be inecient for
case (b), where the probability varies greatly. Estimation could in this case be done using points
drawn from the distribution de ned by f (x). This would not work well for case (c), however, where
the error tolerance is relative to the expectation value, and the dominant contribution comes from
regions of low probability.

the distribution P (x). In fact, the same sample can be used to estimate the expectation of
a number of functions satisfying this requirement.
Problems of Bayesian model comparison and of computing the probabilities of rare events
are of a di erent nature. In these cases, we require an estimate satisfying a relative error
bound, and the variation in a(x)P (x) may be dominated by regions where P (x) is small.
These problems are formally similar to that of estimating the free energy of a physical
system; they are discussed in Section 6.2.
Figure 3.1 illustrates this range of estimation problems. In (a), the probability varies little
across the domain, making a search for high-probability regions unnecessary. This problem
is too easy to arouse our interest here. A problem more typical of those we are interested in
is shown in (b) | though real problems would likely have more dimensions and exhibit more
extreme variations. Monte Carlo methods based on a sample from the distribution de ned
by f (x) will work well here. In (c), the primary contribution to hai comes from regions
where f (x) is small. Using a sample from the distribution given by f (x) would still be
adequate for this problem if the error tolerance were as in (b). Here, however, the tolerance
is relative to the value of hai. When most of the probability is in regions where a(x) is
nearly zero, this tolerance can become arbitrarily small, and the methods of Section 6.2 will
be required.
For many problems of the sort shown in Figure 3.1(b) it is not possible to obtain a sample
of independent points from the distribution de ned by f (x) | the most one can hope
for is to obtain a sample of dependent points from a distribution that is close to that
de ned by f (x), using Markov chain methods. In some cases, theoretical bounds on the
convergence rate of the Markov chain may be obtainable | if not now, then with further
research | and these could be used to guarantee that estimates found in this way will be

                                               31
                         3.2 Approaches to solving the problem

approximately correct, with high probability. For the most challenging problems, involving
elements of dicult combinatorial search, such guarantees will probably not be available.
The probability distribution de ned by f (x) may in these cases not only be concentrated in
a tiny volume of the parameter space, of unknown location, but also be distributed across
this space in a complex pattern, perhaps as a huge number of separate peaks or ridges. This
is a common situation in statistical physics. It is also seen when doing Bayesian statistical
inference for a latent class model with many classes, for the multi-layer perceptron, and
generally for any model that attempts to divine complex structure in the data, with many
alternative structures working reasonably well.
A single realization of reasonable length of a Markov chain designed to sample from such
a complex distribution may not cover anywhere near the entire region of high probabil-
ity. To make inferences about hai based on such a sample, we must implicitly rely on an
assumption that a(x) does not vary much from one \typical" region to another \typical"
region, and hence a sample drawn from only one such region will be adequate. Reliance
on this assumption can be eliminated by generating a number of independent realizations
of the Markov chain, assuming that these chains truly do reach (or closely approach) the
equilibrium distribution in the allotted time. Unfortunately, when dependencies within a
single chain are high, it will generally also be dicult to con rm that equilibrium has been
reached. These issues are discussed further in Section 6.3.

3.2 Approaches to solving the problem
Insight into the diculty of these problems can be gained by considering various approaches
to solving them. A number of methods for performing Bayesian statistical computations are
reviewed by Smith (9:1991). Also of interest is the collection edited by Flournoy and Tsu-
takawa (9:1991) and the book by Tanner (9:1991). Many common computational methods
are applicable only to easier problems than are addressed here, however, such as when the
parameter space is of low dimension.
One way of classifying the methods to be considered is by the degree of search they employ
| from no searching, to a single search at the beginning, to a continual search in the case
of the Markov chain methods. I start with the rst category.
Numerical methods. Perhaps the most obvious approach to solving the problem is direct
numerical calculation. In particular, when the state space is nite, we could in theory
perform the summations of equation (3.2) explicitly. For the problems we are interested
in, however, this is computationally infeasible, since it would require time exponential in
the dimensionality of X . When the state space is continuous, numerical evaluation of the
corresponding integrals using a simple product rule would be similarly infeasible.
The method of numerical integration in high dimensional spaces recently developed by
Wozniakowski (9:1991) also appears to be inapplicable. This method is good in an average
sense, on the assumption that the functions to be integrated are drawn from a particular
distribution. It appears that this distribution is not a good model for the class of problems
discussed here, in which the integrand is close to zero over much of the space, but very much
larger in a small region of unknown location.
Rejection sampling. We could estimate hai of equation (3.2) by the Monte Carlo formula
of equation (1.2) if we could only sample from the distribution de ned by f (x). Though we
assume that this is not possible by direct methods, for some problems it may be possible

                                             32
                          3.2 Approaches to solving the problem

to use the technique of rejection sampling (see, for example, (Ripley, 1:1987, Section 3.2)
or (Devroye, 9:1986, Section II.3)) to produce a sample of independent points drawn from
f (x) by generating points from another, more tractable distribution, and then \rejecting"
some points in order to produce a sample from f (x).
To apply this method, we must be able to generate points from a distribution with density
proportional to some function, g(x), such that for some constant, c, we can guarantee that
f (x)  cg(x) for all x. To generate a point from the distribution de ned by f (x), we
generate a point, x , from g(x), and \accept" x as our generated point with probability
f (x)=cg(x). If we do not accept x , then we generate another such point from g(x), repeating
the procedure until a point is nally accepted.
One can prove that this procedure does indeed sample from exactly the distribution de ned
by f (x). The eciency of the procedure depends on how often points are rejected, which
in turn depends on how well g(x) approximates f (x) | in the extreme case, if we had
g(x) = f (x), we could use c = 1 and never have to reject a point. For easy problems, we
might hope to do only a small factor worse than this, but for complex problems, it may
be impossible to nd an appropriate function g(x) and constant c for which we can prove
that f (x)  cg(x), except perhaps by chosing g(x) to be very di use and c to be very large,
which would lead to a very low acceptance rate.
Rejection sampling is therefore not a feasible method for the dicult problems treated in
this review. However, \adaptive rejection sampling" can be a useful component of a Markov
chain method, as is discussed in Section 4.1.
Simple importance sampling. Importance sampling is a another fundamental technique
in Monte Carlo estimation, which we will later see has applications in connection with
Markov chain sampling methods. However, simple importance sampling methods that do
not incorporate any search for high probability regions also fail when applied to the problems
addressed here.
To estimate an expectation using importance sampling, we rst choose some probability
mass/density function, g(x), not necessarily normalized, from which we can easily sample,
and which we hope approximates the distribution of interest. Unlike the case with rejection
sampling, there are no absolute requirements for how well g(x) approximates f (x), except
that g(x) must not be zero anywhere f (x) is non-zero. We can then express the expecta-
tion of a(X ) with respect to the distribution de ned by f (x), denoted by hai, in terms of
expectations with respect to g(x), denoted by Eg [  ], as follows:
                                  X                   .X
                        hai =           a(~x)f (~x)         f (~x)                       (3.3)
                                   x~                  x~
                                        a(~x) fg(~
                                                (~x) g(~x) . X f (~x) g(~x)
                                  X
                              =                  x)            g(~x)                     (3.4)
                                   x~                          x~
                              = Eg a(X ) fg((X
                                             X ) i . E h f (X ) i
                                  h
                                               )      g g(X )                            (3.5)
Monte Carlo estimation of the expectations with respect to g gives the following (as in
(Hastings, 4:1970)):
                               NX1           f ( x (t) ) . NX1 f (x(t) )
                      hai             ( t )
                                    a(x ) g(x(t) )                                (3.6)
                                                                   (t)
                                t=0                         t=0 g(x )

                                                33
                           3.2 Approaches to solving the problem

where x(0); . . . ; x(N 1) are drawn from the distribution de ned by g. The method averages
the values of a at the sample points, weighting each value according to how the sampling
distribution departs from the desired distribution at that point.
If g = f , equation (3.6) reduces to the simple Monte Carlo estimation formula of equation
(1.2), but we assume that this choice is not available. If g is a good approximation to f ,
equation (1.2) will still yield a good estimate of hai. For the problems of interest, however,
guessing such an approximation a priori is very dicult. If g is not close to f , the result will
be poor, since it is then likely that only a few of the points selected will be in regions where
f is large. The value of the weighting factor, f (x(t) )=g(x(t) ), for these points will be much
larger than for the other points, e ectively reducing the size of the sample to just these few
points. Even worse, it could be that none of the points selected lie in regions where f is
large. In this case, not only might the estimate of equation (3.6) be very inaccurate, the
data themselves might provide no warning of the magnitude of the error.
Methods based on nding the mode. Clearly, any e ective method of solving these
problems must in some way search for the high-probability states. Perhaps the most straight-
forward way of doing this is to search once for a point where the probability is at least locally
maximized, and then use some approximation around this mode to evaluate expectations of
functions with respect to the original distribution.
One method used for continuous spaces approximates the distribution by a multivariate
Gaussian centred on the mode found. This is equivalent to using a quadratic approxima-
tion for the log of the probability density, and hence requires that we evaluate the second
derivatives of the log probability density at the mode (the Hessian matrix). At least for
problems where the dimensionality of the space is only moderately high (a few hundred,
say), the amount of computation required for this will often be tolerable.
Having found the Gaussian that approximates the distribution, we need then to evaluate
the expectations of whatever functions are of interest. For functions that are approximately
linear in the region where the probability density is signi cant, the expectation can be
approximated as the value of the function at the mode. The distribution of the function
value will be Gaussian, with a variance that can be calculated from the Hessian and the
gradient of the function at the mode. The expectation of a non-linear function with respect
to the approximating Gaussian can be evaluated by simple Monte Carlo methods, or by
numerical integration.
Rather than simply accept whatever error is introduced by the Gaussian approximation, one
can instead obtain unbiased estimates via importance sampling, as described above, using
the approximating Gaussian density as the sampling distribution, g, of equation (3.5). An
approximating distribution other than a Gaussian could also be used. In particular, the
heavier tails of a Student t distribution may be bene cial.
There is no doubt that these methods are often useful. A theoretical reason for expecting this
to be so is that for many statistical inference problems the posterior parameter distribution
approaches a Gaussian distribution asymptotically, as the size of the training set increases.
Nevertheless, methods based on nding the mode are not universally applicable.
One obvious diculty is that the distribution of interest may have more than one mode. It is
also quite possible that the mode or modes are not at all representative of the distribution
as a whole. This is well illustrated by statistical physics. The lowest energy, maximum
probability, molecular con guration for a substance is generally a perfect crystal. This

                                               34
                          3.2 Approaches to solving the problem

is not, however, a good starting point for determining the properties of the substance at
a temperature above its melting point, where an enormous number of more disordered
con gurations of somewhat higher energy overwhelm the in uence of the few highly-ordered
con gurations. Analogous e ects are often important in Bayesian inference.
The asymptotically Gaussian form of the posterior parameter distribution for a particular
model is also perhaps not as relevant as might appear. If we wish to obtain the maximum
bene t from a large data set, we should not stick to simple models, where this Gaussian form
may have been reached, but should consider more complex models as well, up to the point
where increasing the complexity gives no further return with the amount of data available.
At this point, the Gaussian approximation is unlikely to be adequate, and the posterior
distribution may well have a shape that can be adequately explored only by Monte Carlo
methods based on Markov chains.
On the other hand, the methods discussed in this section have the considerable advantage
that the \free energy" needed for model comparison can be computed with no more e ort
than is needed to nd expectations, in sharp contrast to the Markov chain methods.
Example: Multi-layer perceptrons. MacKay (2:1991, 2:1992b) has developed an approach to
Bayesian learning for multi-layer perceptrons based on Gaussian approximations, which has
been further extended and applied to practical problems by Thodberg (2:1993) and MacKay
(2:1993). Buntine and Weigend (2:1991) discuss a related approach.
One problem with using a Gaussian approximation for this task is that the posterior distri-
bution for the network weights usually has a large number of modes. MacKay handles this
situation by nding many (though nowhere near all) modes, using many runs of the opti-
mization procedure, and then selecting the best of these by treating the region of parameter
space in the vicinity of each mode as a separate \model".
The hyperparameters controlling the distribution of the weights (u and v in equation
(2.42)) present a di erent problem | the posterior distribution of the weights together with
these hyperparameters is not close to being Gaussian. MacKay therefore employs the Gaus-
sian approximation only for the distribution of the weights conditional on xed values of
the hyperparameters. Di erent hyperparameter values are treated much as di erent models
would be, with those hyperparameter values being selected that lead to the highest probabil-
ity for the training data, after integrating over the weight space. (This is a slight departure
from the true Bayesian solution, in which the hyperparameters would be integrated over as
well.)
It is interesting how MacKay compensates for the weaknesses of the Gaussian approximation
method by exploiting its strength in model comparison. It is certainly not clear that this is
always possible, however.
More sophisticated methods. We have seen that it can be hopeless to try to evaluate
expectations with respect to a complex distribution without searching for regions of high
probability, and that methods based on searching once for a mode and then approximating
the distribution in its vicinity have limitations. Monte Carlo methods based on Markov
chains can be viewed as combining sampling with a continual search for large regions of
high probability, in a framework that is guaranteed to produce the correct distribution in
the limit as the length of the chain increases.
Other approaches involving a more sophisticated search have been tried. For example,
Evans (9:1991) describes an adaptive version of importance sampling. In this method, a

                                              35
                                     3.3 Theory of Markov chains

class of importance sampling functions thought to contain one appropriate for the problem
is de ned, and an initial function from within the class is chosen. Various characteristics
of the true distribution that can be expressed as expectations are then estimated using this
importance sampler, and a new importance sampler from within the class is chosen that
matches these characteristics. This procedure is iterated until it stabilizes, and the nal
importance sampler is then used to estimate the expectations of interest.
If the initial importance sampler is suciently bad, this adaptive procedure may not work.
To handle this, Evans proposes \chaining" through a series of problems. To start, it is
assumed that a good importance sampler can be found for an easy problem. This easy
problem is then transformed into the problem of interest in small steps. At each step, a good
importance sampler is found by the adaptive method, using the importance sampler found
for the previous step as the starting point. This technique resembles simulated annealing
(see Section 6.1) and some methods used in free energy estimation (see Section 6.2).
It seems likely that adaptive methods of this sort will perform better than Markov chain
methods on at least some problems of moderate diculty. My principal focus in this review
is on the most dicult problems, for which, I believe, the methods based on Markov chains
are at present the only feasible approach.

3.3 Theory of Markov chains
I present here the essential theory required in developing Monte Carlo methods based on
Markov chains. The most fundamental result, which is here given a simple proof, is that
certain Markov chains converge to a unique invariant distribution, and can be used to
estimate expectations with respect to this distribution.
The theory of Markov chains is well developed; references to a few of the books in the area
may be found in Section 3 of the bibliography. Much of the elaboration of the theory can be
avoided for our purposes, however, since we are not interested in discovering the properties
of some arbitrary given Markov chain, but rather in constructing a Markov chain having
the properties we desire.
Basic de nitions. A Markov chain is a series of random variables, X (0) ; X (1); X (2) ; . . ., in
which the in uence of the values of X (0) ; . . . ; X (n) on the distribution of X (n+1) is mediated
entirely by the value of X (n) . More formally,
                     P (x(n+1) j x(n); fx(t) : t 2 Eg) = P (x(n+1) j x(n))                     (3.7)
where E is any subset of f0; . . . ; n 1g. The indexes, t = 0; 1; 2; . . ., are often viewed as
representing successive \times". The X (t) have a common range, the state space of the
Markov chain. I will for the moment assume that the state space is nite, but countably
in nite and continuous state spaces will be discussed later.4
A Markov chain can be speci ed by giving the marginal distribution for X (0) | the initial
probabilities of the various states | and the conditional distributions for X (n+1) given the
possible values for X (n) | the transition probabilities for one state to follow another state.
I will write the initial probability of state x as p0 (x), and the transition probability for state
4   A continuous \time" parameter is accommodated by the more general notion of a Markov process. Here, in
    common with many others, I use the term \Markov chain" to refer to a Markov process with a discrete time
    parameter, a nomenclature that makes good metaphorical sense. Unfortunately, there are other authors
    who use the term to refer to a Markov process with a discrete state space, and still others who use it to
    refer to what is generally known as a \homogeneous" Markov chain (see below).

                                                      36
                               3.3 Theory of Markov chains

x0 at time n + 1 to follow state x at time n as Tn (x; x0). If the transition probabilities do
not depend on the time, the Markov chain is said to be homogeneous (or stationary) and
the transition probabilities will be written simply as T (x; x0).
Using the transition probabilities, one can nd the probability of state x occurring at time
n + 1, denoted by pn+1 (x), from the corresponding probabilities at time n, as follows:
                                              X
                              pn+1(x) =          pn(~x) Tn (~x; x)                       (3.8)
                                                  x~
Given the initial probabilities, p0 , this determines the behaviour of the chain at all times.
The probabilities at time n can also be regarded as a row vector, pn , and the transition
probabilities at time n as a matrix, Tn , or just T, if the chain is homogeneous. (Such
matrices, in which all elements are non-negative, and rows sum to one, are call stochastic
matrices.) Equation (3.8) can then be written as pn+1 = pnTn . For a homogeneous chain,
Tk (the k-th power of the matrix T) gives the \k-step" transition probabilities, which will
also be written T k (x; x0), and we will have pn = p0Tn .
Invariant distributions. An invariant (or stationary) distribution over the states of a
Markov chain is one that persists forever once it is reached. More formally, the distribution
given by the probabilities (x) is invariant with respect to the Markov chain with transition
probabilities Tn (x; x0) if, for all n,
                                              X
                                    (x) =        (~x) Tn (~x; x)                         (3.9)
                                             x~
Equivalently, the vector  represents an invariant distribution if and only if  =  Tn for
all n. For a homogeneous chain, of course, we have just the single condition that  =  T.
A Markov chain can have more than one invariant distribution. If T is the identity matrix,
for example, then any distribution is invariant. A nite Markov chain always has at least
one invariant distribution.
We are interested in constructing Markov chains for which the distribution we wish to sample
from, given by , is invariant. Often, we will use time reversible homogeneous Markov chains
that satisfy the more restrictive condition of detailed balance | that if a transition occurs
from a state picked according to the probabilities given by , then the probability of that
transition being from state x to state x0 is the same as the probability of it being from state
x0 to state x. In other words, for all x,
                                (x) T (x; x0) = (x0) T (x0 ; x)                        (3.10)
This implies that  is an invariant distribution, since
        X                       X                           X
             (~x) T (~x; x) =      (x) T (x; x~) = (x) T (x; x~) = (x)               (3.11)
         x~                     x~                           x~
It is possible for a distribution to be invariant without detailed balance holding. For ex-
ample, the uniform distribution on the state space f0; 1; 2g is invariant with respect to the
homogeneous Markov chain with transition probabilities T (0; 1) = T (1; 2) = T (2; 0) = 1
and all others zero, but detailed balance does not hold.
Ergodic Markov chains. For our purposes, it is not enough merely to nd a Markov
chain with respect to which the distribution we wish to sample from is invariant. We also
require that the Markov chain be ergodic | that the probabilities at time n, pn (x), converge

                                              37
                                    3.3 Theory of Markov chains

to this invariant distribution as n ! 1, regardless of the choice of initial probabilities p0(x).
Clearly, an ergodic Markov chain can have only one invariant distribution, which is also
referred to as its equilibrium distribution. Some Markov chains \converge" not to a single
distribution, but rather to a cycle of distributions. These periodic chains are not ergodic by
this de nition.5
The question of when a Markov chain is ergodic has been asked and answered in many
di erent ways in the literature, with most ways employing a fair amount of theoretical
apparatus. I give here a simple proof that a large class of Markov chains are ergodic. (An
elementary proof of a similar result can also be found in (Kemeny and Snell, 3:1960, Theorem
4.1.4.))
Fundamental Theorem. If a homogeneous Markov chain on a nite state space with
transition probabilities T (x; x0) has  as an invariant distribution and
                            = min        min T (x; x0)=(x0 ) > 0
                                    x x0 :(x0 )>0
                                                                                           (3.12)
then the Markov chain is ergodic, i.e., regardless of the initial probabilities, p0(x)
                                    lim p (x) = (x)
                                   n!1 n
                                                                                                      (3.13)
for all x. A bound on the rate of convergence is given by
                                j(x) pn(x)j  (1  )n                                  (3.14)
Furthermore, if a(x) is any real-valued function of the state, then the expectation of a with
respect to the distribution pn, written En[a], converges to its expectation with respect to ,
written hai, with
                        jhai En[a]j  (1  )n max   x; x0
                                                          ja(x) a(x0)j                  (3.15)

Proof. The basis of the proof is a demonstration that the distribution at time n can be
expressed as a \mixture" of the invariant distribution and another arbitrary distribution,
with the invariant distribution's proportion of the mixture approaching one as n approaches
in nity. This growth occurs because the invariant portion can never shrink, while the non-
invariant portion keeps producing extra invariant bits, due to condition (3.12).
Speci cally, we will see that the distribution at time n can be written as
                       pn (x) = [1 (1  )n] (x) + (1  )n rn (x)                     (3.16)
with rn being a valid probability distribution. Note that   1, since we cannot have
(x0 ) < T (x; x0) for all x0 . The above formula can be satis ed for n = 0 | just set
r0(x) = p0(x). If it holds for n = n , then
                 X
  pn +1 (x) =        pn (~x) T (~x; x)                                              (3.17)
                    x~
                                    X                                   X
              = [1 (1  )n ]            (~x) T (~x; x) + (1  )n           rn (~x) T (~x; x)       (3.18)
                                       x~                                 x~
5 The reader should be warned that various de nitions of the term \ergodic" and its quali ed forms are
  current. To some authors, the de ning property is that the initial state is eventually forgotten. To others,
  it is that long time averages converge independently of the initial state. Above, I have required that
  the distribution at a single time converge independently of the initial state. In general, none of these are
  equivalent. Some de nitions also exclude chains having \transient" states with zero equilibrium probability.


                                                     38
                                3.3 Theory of Markov chains
                                                      X                                   
             = [1 (1  )n ] (x) + (1  )n              rn (~x) T (~x; x) (x) + (x) (3.19)
                                                     x~
             = [1 (1        )n ] (x) + (1       n
                                                   
                                                 )  (x)
                                       X                            
                          + (1  )n        rn (~x) T (~x; x) (x)                           (3.20)
                                       x~
                                                              rn (~x) T (~x; x1) (x)
                                                          X
             = [1 (1  )n+1 ] (x) + (1  )n+1                                               (3.21)
                                                          x~
              = [1 (1  )n+1 ] (x) + (1            n
                                                      +1
                                                   ) rn+1 (x)                            (3.22)
                   P
where rn+1 (x) = x~ rn (~x) [T (~x; x) (xP   )]=(1  ). From (3.12), we nd that rn+1 (x)  0
for all x. One can also easily show that x rn+1 (x) = 1. The rn+1 (x) therefore de ne a
probability distribution, establishing (3.16) for n = n + 1, and, by induction, for all n.
Using (3.16), we can now show that (3.14) holds:
             j(x) pn (x)j = j (x) [1 (1  )n] (x) (1  )n rn(x) j                       (3.23)
                                              n
                               = j (1  ) (x) (1  ) rn (x) j   n                         (3.24)
                               = (1  )n j(x) rn (x)j                                     (3.25)
                                (1  )      n                                             (3.26)
We can show (3.15) similarly:
                jhai En[a]j = Px~ a(~x) (~x) Px~ a(~x) pn (~x)                            (3.27)
                                        P                   n                 n
                                =         x~ a(~x) [(1  ) (~x)     (1  ) rn(~x)]        (3.28)
                                                  P                 P
                                = (1  )n x~ a(~x) (~x)               x~ a(~x) rn(~x)     (3.29)
                                 (1  ) max   n                  0
                                                        ja(x) a(x )j                       (3.30)
                                                  x; x0
This completes the proof.
As phrased, the above theorem applies only to homogeneous Markov chains. Many of the
algorithms we will discuss are based on Markov chains that are not homogeneous. They are,
however, of a simple cyclic type, in which the transition matrices repeat after some period,
d, with Tn = Tn+d . If we look at the state only at times that are multiples of d, we will
thus see a homogeneous Markov chain, with transition matrix T0 T1    Td 1 . We can then
try to show that this chain converges to the desired distribution. If the desired distribution
is also invariant with respect to all the Tn individually, we can use states from any of the
times in computing Monte Carlo estimates.
Similarly, it may be that for a homogeneous Markov chain, condition (3.12) does not hold for
the one-step transition probabilities, T , but does hold for the k-step transition probabilities,
T k . This is sucient to guarantee convergence, at a rate bounded as in (3.14) and (3.15),
but with the exponent n replaced by bn=kc.
The theorem as stated guarantees only that at large times the distribution will be close to
the invariant distribution. It does not say how dependent the states at di erent times might
be, and hence does not guarantee that the average value of a function over a long period of
time converges to the function's expected value. In fact, however, the state of an ergodic
Markov chain at time m will be nearly independent of the state at time n when m  n. To

                                                39
                               3.3 Theory of Markov chains

see this, imagine restarting the chain at time n from each of the possible states. Since the
chain is ergodic, we will in each case have nearly reached the invariant distribution by time
m, showing that the distribution at time m is (almost) independent of whatever state the
chain was in at time n. It is therefore valid to use a Monte Carlo estimation formula such
as equation (1.2) with a series of values taken from a single realization of an ergodic Markov
chain with the desired invariant distribution. For a detailed proof of a similar result, see
(Kemeny and Snell, 3:1960, Theorem 4.2.1).
The amount of computational e ort required to produce a good Monte Carlo estimate using
the states generated by a Markov chain will depend on three factors: rst, the amount of
computation required to simulate each transition; second, the time for the chain to converge
to the equilibrium distribution, which gives the number of states that must be discarded
from the beginning of the chain; third, the number of transitions needed to move from one
state drawn from the equilibrium distribution to another state that is almost independent,
which determines the number of states taken from the chain at equilibrium that are needed
to produce an estimate of a given accuracy. The latter two factors are related | as we
have just seen, fast convergence to the equilibrium distribution from any state guarantees
fast movement from one state to an independent state. In practice, though, we chose the
initial state from some particular distribution, so it is possible for the time required to
reach equilibrium to be less than the time required to move about the distribution once
equilibrium is reached; the reverse situation is also possible. These issues are discussed
further in Section 6.3.
Unfortunately, while it will often be easy to show that a Markov chain we are interested in is
ergodic by showing that  in equation (3.12) is greater than zero, the readily obtainable lower
bounds on  are generally so small that the guarantees on the the rates of convergence given
by (3.14) and (3.15) will be of no practical use. More sophisticated theoretical analysis,
or, failing that, empirical testing, are therefore essential in applications of Markov chain
sampling.
Analysing convergence using eigenvalues. Convergence results similar to that proved
above can be shown in a number of other ways as well. Here, I will brie y describe a method
using the eigenvalues of the transition matrix that is often seen in the literature. Further
details on this and other classical approaches can be found in (Iosifescu, 3:1980).
A (left) eigenvector of a matrix, M, is a non-zero row vector, v, that satis es vM = v,
for some (possibly complex) number, , the eigenvalue associated with v. The vector of
probabilities,  , for an invariant distribution of a homogeneous Markov chain is clearly an
eigenvector of its transition matrix, T, with eigenvalue one, since  T =  .
For most stochastic matrices, one can nd a complete set of linearly independent eigenvec-
tors. (In this informal presentation, I will ignore the exceptions, matrices that are \defec-
tive".) These eigenvectors can be chosen so that they fall into three classes, as follows:
      1) One or more eigenvectors with elements that are real, positive, and sum to one,
         associated with the eigenvalue one.
      2) Eigenvectors other than the above that are associated with eigenvalues of magnitude
         one.
      3) Eigenvectors with elements that sum to zero that are associated with eigenvalues of
         magnitude less than one.


                                              40
                                3.3 Theory of Markov chains

The subspace spanned by the eigenvectors in class (1) contains the invariant distributions.
We are interested in the case where there is only one invariant distribution, and hence
only one such eigenvector. When eigenvectors in class (2) are present, the Markov chain is
periodic. We wish to exclude these chains as well.
We are left with the case of a single eigenvector with eigenvalue one, giving the probabilities
for the invariant distribution, and a number of eigenvectors with eigenvalues of magnitude
less than one. We can order the eigenvalues as 1 > j2j  j3j    , with the associated
eigenvectors being ; v2 ; v3; . . . Using these eigenvectors as a basis, we can write the vector
representing the initial probability distribution for the Markov chain as
                              p0 =  + a2 v2 + a3 v3 +                                  (3.31)
The distribution over states after the n-th step of the Markov chain will then be
                  pn = p0Tn = Tn + a2v2 Tn + a3v3 Tn +                                 (3.32)
                                       =  + 2 a2v2 + 3 a3 v3 +   
                                                  n           n                            (3.33)
As n increases, pn will therefore converge to  , with the asymptotic rate of convergence
being determined by the magnitude of the second-largest eigenvalue, 2 .
The eigenvalues of the transition matrix of a reversible Markov chain are guaranteed to be
real. For this case, a non-asymptotic bound on the time required for convergence, indepen-
dently of the initial distribution, has been given by Sinclair (1:1993, Proposition 2.1):
                              max     jpn(x) (x)j  j2j                                  (3.34)
                                 x         (x)            min
                                                            x
                                                                 ( x )
If T (x; x)  1=2 for all x, the eigenvalues will all be non-negative, and 2 will be just the
largest eigenvalue less than one.
Recent work on analysing convergence. Recently, methods for bounding the conver-
gence rate of a Markov chain have been developed that allow useful convergence guarantees
to be proved for some of the complex Markov chains that arise in practical sampling prob-
lems.
The work of Sinclair and Jerrum (7:1989) is representative; references to other recent work
along the same lines may be found in Section 3 of the bibliography. Sinclair and Jerrum
de ne the conductance of a homogeneous, reversible Markov chain with equilibrium state
probabilities, (x), that are nowhere zero 2to be                         3

                        = S : 0<min      4
                                               1    X
                                                            (x) T (x; x0)5           (3.35)
                                   (S )1=2 (S )
                                                  x2S; x0 2=S
                P
where (S ) = x2S (x). The quantity in brackets is just the probability of the chain
exiting S in one step if it is started in a state picked from S according to the equilibrium
probabilities. Sinclair and Jerrum then show, by bounding the magnitude of the second-
largest eigenvalue of the transition matrix, that regardless of the initial distribution for the
chain, its convergence rate is bounded as follows:
                                                          1 2 =2 n
                                                                  
                            max  j p n ( x )   ( x ) j  min (x)                        (3.36)
                              x           (x)             x
provided that T (x; x)  1=2 for all x. (Any chain can easily be modi ed to satisfy this

                                               41
                                3.3 Theory of Markov chains

requirement, by at each step having it repeat the current state with probability 1=2, and
otherwise do whatever it normally would.)
To obtain from this a useful bound on the convergence rate of a Markov chain with complex
structure, one must be able to bound the conductance of the chain. Jerrum and Sinclair
(4:1989) show how this can sometimes be done for chains of practical interest by de ning
\canonical paths" connecting every pair of states, with the path from x to x0 being given a
\weight" of (x)(x0). Suppose that these paths can be de ned in such a fashion that for
any x and x0, the total weight of paths that include a transition from x to x0 is no more the
b(x)T (x; x0), for some constant b. It is not hard to show that in this case the conductance
of the Markov chain is at least 1=2b | for any set of states, S , with (S )  1=2, the total
weight of paths from states in S to states not in S must be at least (S )=2; since this cannot
exceed b times the sum of (x)T (x; x0) for x 2 S and x0 2= S , the latter must be at least
(S )=2b, giving the bound of 1=2b on the conductance.
Markov chains with in nite state spaces. In many applications we will need to sample
from distributions over countably in nite or continuous spaces, and hence will wish to
construct Markov chains having these as state spaces. New phenomena are possible in such
cases | for example, there are Markov chains on in nite state spaces that have no invariant
distribution. The analysis may be more dicult, and care must be taken to avoid fallacies.
When the state space is countably in nite, the de nition given for a Markov chain can
remain unchanged, as can the detailed balance condition that can be used to show the
invariance of a distribution. The fundamental theorem proved above remains valid, after
changing \maximum" and \minimum" to \least upper bound" and \greatest lower bound",
and adding the condition that the function a(x) be bounded.
When the state space is continuous, we can interpret p0(x) as the probability density for
the initial state at x, and T (x; x0) as the probability density for a transition to state x0 from
a given state x. The state distributions at successive times can still be found as in equation
(3.8), with the obvious replacement of the summation by an integral, and the detailed
balance condition of equation (3.10) remains valid. The k-step transition probabilities can
be found by a continuous generalization of a matrix multiply, as follows:
                                            Z
                           T k (x; x0) =        T (x; x~) T k 1(~x; x0) dx~                (3.37)
Even with the amendments of the previous paragraph, however, the fundamental theorem
does not quite hold as stated, because the transition in the proof from equation (3.25) to
(3.26) relies on the fact that probabilities are never greater than one, whereas probability
densities can be greater than one. Fortunately, the expectations of bounded functions
still converge as given by equation (3.15), justifying the use of the chain for Monte Carlo
estimation.
Complications can arise, however. Often, when we deal with continuous spaces, we will use
Markov chains whose initial state distributions and transition probability densities must be
expressed using delta functions. For example, we might always start in the same state, x0.
The initial probability density would then be given by p0(x) =  (x0; x). For some methods,
the transition probabilities include the possibility of \rejecting" a candidate move, in which
case the old state is retained. This corresponds to a transition distribution with a non-zero
probability mass concentrated at the old state. When dealing with such transition prob-
abilities de ned using delta functions, the detailed balance condition must be interpreted
with care, since delta functions do not have real numerical values, and cannot be compared

                                                42
                                3.3 Theory of Markov chains

as if they did. Detailed balance must in these cases be veri ed by showing that for any two
regions A and B ,
                Z Z                                 Z Z
                        (x) Tn (x; x0) dx0 dx =          (x0 ) Tn (x0 ; x) dx dx0       (3.38)
                  A B                               B A
i.e. that the probability of a transition from somewhere in A to somewhere in B is the same
as that of a reverse transition.
Finally, one should note that there are Markov chains on in nite state spaces, some of which
are useful, that converge to an invariant distribution, but for which the fundamental theorem
stated above does not apply ( in condition (3.12) being zero), and for which, indeed, no
bound on the time required for convergence can be given that is independent of the initial
state distribution. For example, consider the Markov chain with state space f0; 1; 2; . . .g
and with T (0; 0) = 1, T (x; x 1) = 1 for x > 0, and all other transition probabilities zero.
This chain clearly converges to an invariant distribution with (0) = 1, but one can say
nothing of how long this might take unless some constraint is placed on the distribution for
the initial state.
Random walks. The properties of simple Markov chains that perform random walks shed
light on the behaviour of the more complex Markov chains that will be discussed later in this
review. As a simple example, consider a homogeneous Markov chain that has the integers
as its state space, starts in state 0, and uses the following transition probabilities:
                                               8
                                               >  1       0
                                               < 2 if x = x
                               T (x; x0) = > 14 if x0 = x  1                              (3.39)
                                               : 0 otherwise

In each time step, this chain stays at its currently position with probability one half, and
otherwise moves one step to the left or one step to the right, with the two directions being
equally likely.
After n steps, what can we say about the state of the chain, Xn ? From symmetry, it is clear
that E [Xn] = 0 | the random walk is equally likely to have taken us some distance to the
right as it is to have taken us the same distance to the left | but how far from state 0 are
we likely to be? We can get an indication of this by computing E [Xn2 ], as follows:
                  X                  X                                                  
    E [Xn2 ] =       x~2 pn(~x) =        x~2 21 pn 1(~x) + 14 pn 1(~x 1) + 41 pn 1(~x +1) (3.40)
                 x~                  x~
                                    1
                               = 2 E [Xn2 1] + 41 E [(Xn 1 + 1)2] + 14 E [(Xn 1 1)2] (3.41)
                               = E [Xn2 1] + 12                                         (3.42)
Since E [X02 ] = 0, we see that E [Xn2 ] = n=2. Thus, although after n iterations we are likely
                               p of around n=2, we nevertheless are likely at that time to
to have travelled a total distance
be a distance of only around n=2 from the starting point. This comes about because the
direction at each step is chosen independently at random, with the result that many of the
steps end up cancelling each other. This \square root" phenomenon occurs generally with
random walks, including random walks over continuous state spaces, of any dimensionality.
Uncon ned random walks such as the one just considered are not of interest for sampling,
since they do not have invariant distributions (as is clear from the fact that E [Xn2 ] goes
to in nity as n increases). However, chains resembling random walks can have invariant
distributions if they are biased appropriately or are con ned to a nite state space. Many of

                                               43
                                  3.3 Theory of Markov chains

 0.18
 0.16
 0.14
 0.12
 0.10
 0.08
 0.06
 0.04
 0.02
 0.00
        -5 -4 -3 -2 -1       0 +1 +2 +3 +4 +5          -5 -4 -3 -2 -1         0 +1 +2 +3 +4 +5
                            (a)                                              (b)
Figure 3.2: A random walk on the state space f 5; 4; . . . ; +4; +5g, with transition probabilities
as in equation (3.39), except that the state stays the same whenever it would otherwise move out
of bounds. The plots show the distribution of states (a) at time t = 10, and (b) at t = 100. The
probabilities in (b) are almost uniform, ranging from a high of 0:0938 at 0 to a low of 0:0881 at 5.

the Markov chain sampling methods described later operate in random walk fashion when
exploring a region of state space where the probability is almost uniform; they may also
move in a random walk in certain directions, where the probability varies only slowly, even
while being tightly con ned in other directions.
Because moving a distance L via a random walk takes a number of iterations proportional
to L2 , the performance of random walk sampling procedures will be worse than one might
naively expect. Figure 3.2 illustrates this with respect to a random walk with the same
transitions as equation (3.39), but with the modi cation that whenever the chain attempts
to move outside the range 5 to +5, it instead stays in the current state. It is easy to
verify that the uniform distribution over f 5; 4; . . . ; +4; +5g is invariant with respect to
this random walk, and that the random walk is ergodic. We should therefore be able to
sample from the uniform distribution by simulating the random walk for some suciently
large number of iterations. One might think that around 10 iterations would be sucient
to approach this equilibrium distribution, since the random walk has a probability of 1=2
of making a move in each iteration, and it can reach any position in the state space in
only 5 steps, starting from the initial state of 0. As shown in Figure 3.2(a), however, the
state distribution after 10 iterations is actually far from uniform. We should expect this
from the general \square root rule" for distance travelled in a random walk | the uniform
distribution should be approached only once the random walk has gone on long enough
that any point in the state space is within the distance range that is likely to have been
reached by that time. For this example, this suggests that around 102 = 100 iterations will
be needed. Figure 3.2(b) shows that the state distribution at that time is indeed close
to uniform. A similar amount of time is required for the chain to move from one state at
equilibrium to another independent state.
Constructing Markov chains. In a sampling application, our goal is to nd an ergodic
Markov chain that converges to a desired invariant distribution, at as fast a rate as possible.
It is often convenient to construct the transition probabilities for such a chain from a set
of base transition probabilities, given by B1 ; . . . ; Bs , each of which leaves the desired distri-
bution invariant, but which may not be ergodic individually. For example, each Bk might

                                                 44
                                3.3 Theory of Markov chains

change only some subset of the variables making up the state.
One approach is to build a homogeneous Markov chain in which the transition probabilities
are
P
    mixtures of the base transitions, with proportions given by k , where k > 0 and
  k k = 1:                                 X
                              T (x; x0) =        k Bk (x; x0)                     (3.43)
                                                 k
It is easy to show that if a distribution over states is invariant with respect to each of the Bk ,
then it is also invariant with respect to T . Furthermore, if each of the Bk satisfy detailed
balance (equation (3.10)), T will as well.
An alternative is to construct a nonhomogeneous Markov chain by applying each of the
transitions in turn. That is, for every a  0, and each k with 1  k  s:
                                  Tas+k 1 (x; x0) = Bk (x; x0)                              (3.44)
Clearly, a distribution invariant with respect to each Bk is also invariant with respect to all
the Tn. Another way of looking at this construction is that it de nes a homogeneous Markov
chain with transition matrix T = B1    Bs. Again, if a distribution is invariant with respect
to all the Bk , it is also invariant with respect to T. Unlike the case with mixtures, though,
even when all the Bk satisfy detailed balance, T generally does not. This fact is usually of
no particular importance, but there are some methods of theoretical analysis that apply only
to reversible Markov chains (those satisfying detailed balance). For this reason one might
sometimes wish to use the chain with transition matrix T = B1    Bs 1Bs BsBs 1    B1,
which does satisfy detailed balance if each of the Bk do.
One might expect the Markov chain of equation (3.44) to perform better than that of
equation (3.43), since the former ensures that each Bk is applied equally often. Consider
the (common) case where component Xk can be changed only by Bk . If each iteration
applies a Bk selected at random, a particular Xk might, by chance, be neglected for a fairly
long time. On the other hand, applying the Bk in order can sometimes result in a chain
that is not ergodic. Mezie (4:1981) has proposed an intermediate strategy, in which the Bk
are applied in an order that is randomly selected at the start of each cycle. These issues are
discussed further in Section 4.4.
One reason to combine a number of Bk is to produce a chain that is ergodic | this is clearly
necessary, for example, if each Bk changes only some of the variables. Ergodicity may be
veri ed by con rming that condition (3.12) holds, in which case a bound on the rate of
convergence is obtained as well. For nite, homogeneous chains, a sucient condition for
obtaining a bound using the fundamental theorem is that for some k, T k (x; x0) > 0 for all
x and x0 . The Markov chain is then said to be regular.
A weaker condition is that for all x and x0, there is a k such that T k (x; x0) > 0. A
Markov chain satisfying this is said to be irreducible. Irreducibility is not sucient to
guarantee ergodicity, as de ned here, since it does not exclude the possibility that the chain
is periodic. This possibility is ruled out if at every step there is a non-zero probability of the
chain remaining in its current state, which can easily be ensured by mixing the transitions
with the identity. (In fact, a weaker condition is sucient | that at least one state have a
non-zero probability of being repeated.)
Even if an ergodic chain has been constructed, it may still be desirable to combine it with
other Bk , since these may help speed convergence. It is easy to see that if at least one of
the Bk is ergodic, then the mixture, T , of equation (3.43) is ergodic as well. This is true

                                                45
                              3.3 Theory of Markov chains

also for the chain of equation (3.44), in which the Bk are applied in sequence, provided
each Bk has a non-zero probability of leaving the state unchanged. (Without this last
condition, counterexamples exist in which B1 and B2 are both ergodic, with the same
invariant distribution, but T = B1B2 is not ergodic.)
In Sections 4 and 5, which follow, a number of base transitions will be described, and will
be combined in various standard ways. The reader should keep in mind that more elaborate
combinations of these methods are quite possible, and may well be necessary when tackling
practical problems.




                                            46
   4. The Metropolis and Gibbs Sampling Algorithms
In this section, I describe two classes of Markov chain Monte Carlo algorithms that are
applicable to both discrete and continuous systems. These methods also form the basis for
the hybrid Monte Carlo algorithm described in Section 5.
4.1 Gibbs sampling
The Gibbs sampler , also known as the heatbath algorithm, is conceptually the simplest of
the Markov chain sampling methods, but has come into prominence only recently, with the
work of Geman and Geman (4:1984) and Gelfand and Smith (4:1990). It is widely applicable
to problems where the variables take on values from a small nite set, or have conditional
distributions of a parametric form that can easily be sampled from.
The Gibbs sampling algorithm. Suppose we wish to sample from the joint distribution
for X = fX1 ; . . . ; Xng given by P (x1; . . . ; xn), where the range of the Xi may be either
continuous or discrete. The Gibbs sampler does this by repeatedly replacing each component
with a value picked from its distribution conditional on the current values of all other
components. This process can be seen as generating a realization of a Markov chain that is
built from a set of base transition probabilities Bk , for k = 1; . . . ; n, with
                                                              Y
                     Bk (x; x0) = P (x0k j fxi : i =6 kg)   (xi ; x0i)              (4.1)
                                                                 i6=k
I.e. Bk leaves all the components except xk unchanged, and draws a new xk from its distri-
bution conditional on the current values of all the other components. This is assumed to be
a feasible operation.
These base transitions are usually applied in sequence, as in equation (3.44), though at
each step we could instead pick a Bk at random from some pre-speci ed distribution, as in
equation (3.43). To complete the de nition of the Markov chain, we also must specify some
initial distribution, p0(x), but the hope is that this choice will not be critical.
When the Bk are applied in sequence, the algorithm can be described as simulating a
homogeneous Markov chain, X (0) ; X (1) ; X (2) ; . . ., with transition matrix T = B1 B2    Bn .
The procedure for generating X (t) from X (t 1) can be expressed as follows:
       Pick X1(t) from the distribution for X1 given x(2t 1); x(3t 1); . . . ; x(nt 1).
       Pick X2(t) from the distribution for X2 given x(1t); x(3t 1); . . . ; x(nt 1).
                                             ..
                                              .
       Pick Xi(t) from the distribution for Xi given x(1t); . . . ; x(it)1; x(i+1
                                                                                t 1); . . . ; x(t 1).
                                                                                               n
                                              ..
                                               .
       Pick Xn(t) from the distribution for Xn given x(1t); x(2t) ; . . . ; x(nt) 1.
Note that the new value for Xi 1 is used immediately when picking the next value for Xi .
To show that the Gibbs sampling algorithm works, we must rst verify that all the Bk leave
the desired distribution invariant. Intuitively, this is clear. Since Bk leaves the components
         6 k unchanged, the desired marginal distribution for these components is certainly
xi for i =
invariant. Furthermore, the conditional distribution for xk in the new state given the other
components is de ned to be that which is desired. Together, these ensure that if we started
from the desired distribution, the joint distribution for all the Xi after Bk is applied must

                                                 47
                                      4.1 Gibbs sampling

also be the desired distribution.
This can be seen more formally as follows, for discrete Xi :
 X                        X
     P (~x) Bk (~x; x) =      P (~xk j fx~i : i =
                                                6 kg) P (fx~i : i 6= kg)
 x~                         x~                               Y
                                  P (xk j fx~i : i 6= kg)           (~xi ; xi)                        (4.2)
                                                             i6=k
                                                                          X
                      = P (xk j fxi : i 6= kg) P (fxi : i 6= kg)                 P (~xk j fxi : i 6= kg) (4.3)
                                                                           x~k
                       = P (x)                                                             (4.4)
Here, use has been made of equation (2.6). The proof for continuous Xi is analogous. One
can also prove invariance by showing that detailed balance (equation (3.10)) holds.
We must also show that the Markov chain built from the Bk is ergodic. This will be so,
regardless of whether we apply the Bk in sequence or select one at random, provided that
all the conditional probabilities used to de ne the Bk in equation (4.1) are non-zero. This
guarantees that there is a non-zero probability (or probability density) for the chain to move
from any state to any other state in n steps (one full iteration), with each step changing
one component. The chain is thus irreducible, and, since it has a non-zero probability of
remaining in the current state, it is also ergodic. If some of the conditional probabilities
in (4.1) are zero, however, a Markov chain built from these transitions may or may not be
ergodic. These cases must be analysed on an individual basis.
Under suitable conditions, therefore, the state of the Markov chain used in Gibbs sampling
will at long times have the desired distribution. By simulating this chain we can thus
produce a sample of values for use in a Monte Carlo estimation procedure. A number of
questions remain, however. Should we sample states from a single, long realization of the
chain, or from many, shorter realizations? How can we judge the accuracy of the estimates
obtained? What initial state distribution should we use? Such questions will be deferred to
Section 6.3, as they apply equally to the other methods that will be discussed.
Random variate generation for Gibbs sampling. The basic operation used in the
Gibbs sampling algorithm is the generation of a random value for some component of the
state, Xi , from its conditional distribution given the current values of all the other compo-
                  6 i. The speed of the algorithm depends crucially on whether this operation
nents, Xj , for j =
can be done quickly.
For discrete components that take on values from a small set, the usual approach is to
simply calculate the joint probabilities (perhaps up to an unknown common factor) of all
the states in which Xi takes on its various possible values, while the other Xj remain xed
at their current values. The conditional distribution for Xi is then found by normalizing
these probabilities so they sum to one, and a new value for Xi is picked from this distri-
bution. (That the calculation of joint probabilities required for this is feasible is one of the
assumptions made in Section 3.1, where the class of problems being addressed was de ned.)
For components taking on values from an in nite set, additional structure is clearly required
if a feasible generation procedure is to be found. One possibility is that the conditional
distribution for Xi has a standard parametric form for which a good method of generating
random variates has been developed. Before applying such a procedure, of course, the actual
values of the distribution parameters will have to be computed; these will depend on the

                                                 48
                                    4.1 Gibbs sampling

current values of Xj for j 6= i. (Devroye, 9:1986) is a comprehensive reference on methods of
generating values from standard distributions. The techniques employed in these methods
are many and varied, and may well be applicable even if the form of the distribution is
non-standard. Developing such a customized procedure could involve considerable e ort,
however.
A \black box" generation procedure based on rejection sampling that is applicable to a
large class of continuous univariate distributions is described by Gilks and Wild (9:1992).
It requires only that the log of the probability density be a concave function, and that the
density and its derivative can be calculated at any given point (perhaps up to an unknown
factor). Gilks and Wild argue that for Bayesian hierarchical models these conditions will
often be satis ed. They also report that, for a particular example, an average of only three
evaluations of the density and its derivative were required in order to generate a value from
the conditional distributions required for Gibbs sampling. Gilks (9:1992) has modi ed this
method to permit its use when the derivative of the log probability density is unavailable.
Another technique of random variate generation that has wide applicability is the generalized
ratio-of-uniforms method, described by Wake eld, Gelfand, and Smith (9:1991).
Note that a component that is updated in one step of the Gibbs sampler need not consist
of a single discrete or real value. Indeed, it is generally desirable to group many values into
a single component, provided that an ecient procedure is available for generating values
from the distribution of this multivariate component conditional on the rest of the state.
Applications of Gibbs sampling. Not all problems can reasonably be tackled using
Gibbs sampling. Of the examples used in this review, the simulation of Lennard-Jonesium
and Bayesian learning for multi-layer perceptrons both seem inappropriate for Gibbs sam-
pling, as the conditional distributions they give rise to are complex and multimodal. For
these problems, the Metropolis algorithm of the next section is more appropriate.
Gibbs sampling can be used for a great many problems, however. As seen above, it may be
particularly appropriate for systems of discrete variables that take on values from a small
set, and for systems of continuous variables where the required conditional distributions
are of standard forms for which good sampling methods have been developed. Even in
such favourable cases, some of the methods to be described later may explore the state
space faster than Gibbs sampling does, but the Gibbs sampler certainly has an attractive
simplicity.
Example: The 2D Ising model. The two-dimensional Ising model provides a simple example
of Gibbs sampling. To simulate this system, we rst select values for the spins, Si , according
to some initial distribution. A natural choice is to set each spin to +1 or 1 with equal
probability, independently. We then visit the various spins repeatedly, either in some pre-
de ned order, or by picking a spin at random each time. When spin Si is visited, a new
value for it is chosen from the conditional distribution de ned by the other spins.
This conditional distribution is derived from the canonical distribution (equation (2.54))
with respect to the Ising energy function of equation (2.55). It can be written as
                                                                          
                                                          exp E (s+ )=T
            P (Si = +1 j fsj : j =6 ig) = exp E (s+ )=T + exp E (s )=T                   (4.5)
                                                        X             . 
                                        =  2 H+                  Jsj     T              (4.6)
                                                       j : (i;j )2N

                                              49
                                    4.1 Gibbs sampling

where (z ) = 1=(1 + exp( z )) and s+ has si = +1 (and other sj as currently set) while s
has si = 1. Since each spin has only four neighbors, the above probability can easily be
calculated, in time that is independent of the total number of spins. The choice for Si can
then be made by drawing a random number uniformly from the interval [0; 1) and setting
Si to +1 if this number is less than the calculated probability, and to 1 otherwise.
It is informative to compute a bound on the rate of convergence of the Gibbs sampler for this
model. For simplicity, let us take H to be zero and T to be one. If the spins are visited in
order, we can view the algorithm as simulating a homogeneous Markov chain, in which each
transition corresponds to a full sweep that visits each spin once. The transition probabilities
for this chain can be found from equation (4.6), as follows, noting that 1 (x) = ( x):
                                          Y           X            
                             T (s; s0 ) =       2s0i        Js(ji)                      (4.7)
                                           i        j : (i;j )2N
where s(ji) equals s0j for j < i and sj for j > i. Each factor in the above expression must be
at least ( 8J ), since each spin has only four neighbors, and (z ) increases monotonically
with z . This gives a lower bound on T (s; s0 ) of [( 8J )]K , where K is the number of spins.
To get a lower bound for  of equation (3.12), we need an upper bound on the equilibrium
state probabilities as well. It is easy to see that the states of highest probability are the
two where all the Si are equal, which have energy 2KJ . However, to nd the absolute
probability of these states under the canonical distribution, we would need to know the value
of the normalization constant, Z , in equation (2.54), which is not easily found. Of course,
the probability of the most probable state cannot exceed one, so we do get the bound
 > [( 8J )]K , showing that the fundamental theorem applies, and that convergence is
therefore guaranteed in the limit. The upper bound this gives on the number of steps
needed to reach a good approximation to the canonical distribution grows exponentially
with K , however, and is too large to be of practical use in realistic cases.
It is of course possible that a more sophisticated analysis might yield a better bound.
Typically, however, systems such as this are simulated without any formal guarantees that
they will converge within the allotted time. Empirical tests such as those discussed in
Section 6.3 are used to gain con dence in the accuracy of the results.
Example: Belief networks. Another application of Gibbs sampling that has received con-
siderable attention is that of inference in belief networks. This application was introduced
by Pearl (4:1987), and is reviewed by York (4:1992). In this problem, we assume that the
parameters of the belief network have been fully speci ed, either by an expert, or as a result
of a previous learning phase. Furthermore, some of the variables described by the belief net-
work have been now been observed. Our task is to sample from the conditional distribution
for the remaining variables.
We start the Gibbs sampling procedure by xing the observed variables to their known
values, and setting the unobserved variables arbitrarily. We then repeatedly visit each
unobserved variable in turn, each time randomly selecting a new value for the variable from
its conditional distribution given the current values of the other variables. From the joint
distribution of equation (2.15), we see that the conditional distribution for Xk is as follows:
                                                        Q
                            P (xk j fxi : i 2 Pk g) P (xj j xk ; fxi : i 2 Pj fkgg)
                                                    j : k2Pj
P (xk j fxi : i =
                6 kg) = X                                 Q                               (4.8)
                               P (~xk j fxi : i 2 Pk g) P (xj j x~k ; fxi : i 2 Pj fkgg)
                           x~k                       j : k2Pj


                                               50
                                      4.1 Gibbs sampling

(The denominator in this expression is simply the factor required to normalize these prob-
abilities, and is computed naturally as the numerator is computed for the various possible
xk .) The conditional probabilities in equation (4.8) are assumed to be known explicitly, or
to be computable from some parametric formula, such as equation (2.16).
For a belief network with binary variables, we might be interested in the probability that
a particular unobserved variable is 1, given the values of the observed variables. One way
of estimating this probability is to simply compute the average value of this binary variable
as the Gibbs sampling procedure is run (ignoring the initial passes, prior to when the equi-
librium distribution is thought to have been approached). This corresponds to expressing
the probability as an expectation in the form of equation (2.8). As pointed out by Pearl
(4:1987), however, more accurate results for a given size sample are obtained by expressing
this probability as an expectation in the form of equation (2.9) | that is, by averaging the
probability that the value is one at each iteration (obtainable using equation (4.8)), rather
than the value itself. This general technique is discussed further in Section 6.3.
In many applications of belief networks, some of the conditional probabilities used in Gibbs
sampling will be zero, re ecting the presence of deterministic constraints. For example, a
belief network used for medical diagnosis might specify that it is simply impossible for a
male patient to be pregnant. These zero probabilities sometimes render the Markov chain
de ned by the Gibbs sampling procedure non-ergodic, a problem discussed by York (4:1992).
Dagum and Luby (2:1993) have shown that in general the problem of probabilistic inference
for belief networks is computationally intractable, in the sense that the worst case computa-
tion time must increase more than polynomially in the size of the network, assuming certain
widely-believed conjectures to be true. One therefore cannot hope to in all cases obtain re-
sults of assured reliability using the Gibbs sampler. However, Dagum and Chavez (2:1993)
have used the methods of Sinclair and Jerrum (7:1989) to demonstrate that Gibbs sampling
can form the basis for a polynomial-time approximation algorithm for belief networks that
have a limited degree of \dependence" | a measure how much the forward conditional
probabilities for variables in the network can change depending on the values of the parent
variables.
Example: Latent class models. In (Neal, 2:1992c), I have shown how Gibbs sampling can be
used for Bayesian inference with latent class models, such as that de ned by equation (2.13).
Lavine and West (2:1992) handle a related model for real-valued data by using Gibbs sam-
pling as well, but in a somewhat di erent fashion, which will also be illustrated here using
the model of equation (2.13), with uniform prior distributions for the parameters and .
Recall that in this model, for each case, i, there are n visible variables, Vi1; . . . ; Vin, and a
latent class variable Ci. Assume that the values of the visible variables have been observed
for C 1 cases, V1 ; . . . ; VC 1, and that some of the visible variables have been observed for
a further case, C . The task is to predict the values of the unobserved variables in case C .
(I must apologize that my notational conventions lead to \C " being used here with two
entirely unrelated meanings!)
The most direct approach to applying Gibbs sampling to this problem, which is used by
Lavine and West (2:1992), is to simulate the distribution for all the unknown variables
and parameters, using conditional distributions derived from the joint distribution of equa-
tion (2.44). For given values of the parameters, the variables for one case are independent of
those for other cases, and for given values of the variables in all cases, the parameters are all
independent of each other. Noting these and some other independence relations, the relevant

                                                51
                                              4.1 Gibbs sampling

conditional distributions are seen to be determined by the following proportionalities:
                                               Y v
            P (ci j ; ; v) / ci (1 )1 ci             ij
                                                   ci j (1 ci j )
                                                                  1 vij                 (4.9)
                                                                j
                                          vij
               P (vij j ; c) /            ci j (1        c j )1 vij
                                                          i                                        (4.10)
                                       Y
                      P ( j c) /                 ci (1        )1 ci = r1 (1       )r0              (4.11)
                                          i
                                      Y         vij                       s`j1
               P ( `j j c; v) /                 `j (1         `j )1 vij = `j (1         `j )s`j0   (4.12)
                                    i : ci =`
             C
             P                            PC
where r` =          (`; ci) and s`jb =          (`; ci) (b; vij ).
             i=1                          i=1
Generating values from the conditional distributions for the Ci and Vij given above is
straightforward, as these variables have only two possible values, whose relative probabili-
ties are easily obtained from the formulas. The conditional distributions for the real-valued
parameters and cj are both of the standard \Beta" form, for which ecient random
variate generation procedures are known (Devroye, 9:1986). The Gibbs sampling procedure
can thus be feasibly implemented.
The conditional distribution for the Vij shown above can be used to sample values for
the unobserved variables in case C , which we are trying to predict. This direct approach
to prediction is conceptually simple, but as noted above for belief networks, it is better to
obtain a predictive distribution by averaging the conditional distributions for these variables.
It also turns out that any unknown variables in the training cases can simply be ignored
when computing conditional distributions for the ci and `j , eliminating any need to pick
particular values for them.
In (Neal, 2:1992c), I have applied Gibbs sampling to this model using the joint distribution
for the visible and class variables alone given by equation (2.45), which was obtained by
analytically integrating over the parameters of the model (again, assuming uniform priors).
In this scheme, the conditional distributions required are as follows:
                                                 6 kg) / rCck ++11  scrkjvkj++1 1
                                                                            Y
                             P (ck j v; fci : i =                                         (4.13)
                                                                            j ck

         P (vkj j ck ; fci : i =6 kg; fvij : i =6 kg) / scrkjvkj++1 1                   (4.14)
                                                                     ck
                   P                              P
where here r` =          (`; ci ) and s`jb =       (`; ci ) (b; vij ).
                    i : i6=k                        i : i6=k
The comments above regarding the need to actually sample values for the unknown Vij apply
here as well. It is plausible to think that the elimination of the model parameters in this
scheme gives it an advantage over the preceding scheme in terms of the speed of convergence
to the equilibrium distribution and the degree of dependence between the states sampled.
The joint distribution for just the parameters and visible variables of this model (equa-
tion (2.46)), obtained by summing over the possible values of the class variables, does not
lead to a feasible scheme for Gibbs sampling, as sampling from the conditional distributions
for the parameters is quite intractable.


                                                              52
                                    4.1 Gibbs sampling

Variations on Gibbs sampling. Due to the simple nature of the Gibbs sampling algo-
rithm, most options in its implementation involve the general issues of Markov chain Monte
Carlo estimation discussed in Section 6.3, the methods used to generate values from the
conditional distributions discussed above, or issues speci c to a particular application. Two
variations on the generic Gibbs sampling algorithm are worth mentioning here, however,
along with the somewhat hard to classify \hit-and-run" scheme. An \approximate" form
of Gibbs sampling is described as a variation on the Metropolis algorithm in Section 4.3.
The \over-relaxed" method of Adler (4:1981) could also be regarded as a variation on Gibbs
sampling.
Gelfand and Smith (4:1990) point out that convergence of the Gibbs sampler may be im-
proved by exploiting conditional distributions involving less than the full set of variables.
For example, let X = fX1 ; X2; X3 g, and assume that we can feasibly sample from the dis-
tribution for each Xi given values for the other Xj . We could therefore implement the usual
Gibbs sampling algorithm, in which we pick new values for each component in turn, given
the values for the others. If we assume that we can also feasibly sample from the distribution
for X2 given X1 alone, however, we could instead proceed as follows: pick a new x1 given
the current x2 and x3, pick a new x2 from the distribution conditional on just x1, pick a
new x3 given the current x1 and x2, repeat until convergence. Gelfand and Smith found
that exploiting reduced conditional distributions in this fashion speeds convergence, though
not dramatically so for the problems they tried.
Tanner and Wong (4:1987) introduced a \data augmentation" algorithm that is essentially a
special case of the Gibbs sampler, in which X consists of only two components, X1 and X2 .
This paper made a valuable contribution in pointing out the utility of Monte Carlo methods
of this sort for Bayesian inference, but the particular algorithm they describe is sub-optimal.
Though phrased di erently in the paper, it may be expressed as follows. Each iteration of
the algorithm will produce a pool of m values for X1 , which, for the nal iteration, will
be used as the basis for Monte Carlo estimates. To generate this pool of values we rst
generate m values for X2 by, in each case, randomly selecting one of the X1 values from
the pool of the previous iteration, independently, with replacement, and picking from the
distribution for X2 given that value for X1 . We then generate the new pool of m values for
X1 by picking from the conditional distributions for X1 given each of these m values for X2 .
It may seem that this procedure is merging information in the pool in a desirable way, but
this is an illusion. In fact, the path by which each nal value is computed is determined
independently of the results of the computation, and hence is no di erent from a Gibbs
sampling run. Furthermore, in each iteration, a fraction of approximately 1=e of the X1
values in the pool will not be selected for use in picking any X2 , and hence will have no
e ect on subsequent iterations. Their computation is therefore a waste of e ort. It is better
to simply perform m independent runs of the Gibbs sampler.
The hit-and-run algorithm, described by Belisle, Romeijn, and Smith, (4:1993), can be seen
as a form of Gibbs sampling in which the coordinate system used to represent the state in
terms of components is chosen at random for each iteration. The state space is assumed
to be contained in an Euclidean space of some dimension. At each iteration, a direction in
this space is chosen at random from some xed distribution, and a new state is chosen from
among those that can be reached by travelling in this direction, or the reverse direction,
starting from the current point, with the probability of chosing a particular such state being
proportional to the desired equilibrium probability for that state. This choice of a new state
is the same as would be made by ordinary Gibbs sampling if the direction in question were

                                              53
                                 4.2 The Metropolis algorithm

one of the coordinate axes.
This scheme results in detailed balance being satis ed for any distribution of directions,
though not all distributions will lead to an ergodic Markov chain. With a uniform distribu-
tion for the directions, the scheme is referred to as the \Hypersphere directions algorithm",
and is ergodic whenever the region of non-zero probability density is bounded. When the
directions are con ned to those along the coordinate axes | the \Coordinate directions
method" | the algorithm is equivalent to ordinary Gibbs sampling, and may not be er-
godic if the region with non-zero probability density is not connected.
For the hit-and-run method to be feasible, it must be possible to sample from the distribu-
tions along all the possible directions. One application where this can be done is that of
sampling uniformly from the interior of a polyhedron. In many cases, however, sampling
along arbitrary directions is not easy, and the ordinary Gibbs sampling algorithm will be
preferable.
Goodman and Sokal (4:1989, Section VII) discuss a more general concept of \partial resam-
pling", of which the hit-and-run algorithm may be seen as a special case.

4.2 The Metropolis algorithm
The classic paper of Metropolis, Rosenbluth, Rosenbluth, Teller, and Teller (4:1953) was
the rst to employ Markov chain sampling, in the form now known as the Metropolis algo-
rithm. This algorithm has since been applied extensively to problems in statistical physics;
indeed, in this literature, the \Monte Carlo method" is almost synonymous with use of the
Metropolis algorithm.
The Metropolis algorithm shares many of the characteristics of the Gibbs sampler, but is
more generally applicable, as it avoids any need to sample from dicult distributions. It
can be applied to problems where the state is either continuous or discrete, as long as it is
possible to compute the ratio of the probabilities, or probability densities, of two states.
The Metropolis algorithm. Suppose that we wish to sample from the joint distribution
for X = fX1 ; . . . ; Xng. The Metropolis algorithm does this by repeatedly considering
randomly generated changes to the components of X , accepting or rejecting these changes
based on how they a ect the probability of the state. This process can be seen as the
operation of a Markov chain built from a set of base transition probabilities, Bk , for k =
1; . . . ; n. The way transition Bk operates to generate a new state, x0, from the current state,
x, can be described as follows:
        1) Select a candidate state , x , in which all components other than the k'th are the
             same as in x, while xk is picked at random from a proposal distribution, which may
             depend on x, given by the probabilities Sk (x; xk ).
        2) Accept this candidate state with probability A(x; x); otherwise, reject it, and retain
             the current state. In detail, this can be done by generating a random number, u,
             from the uniform distribution on [0; 1), and then setting the next state as follows:
                                               
                                       0
                                     x =         x if u < A(x; x )                            (4.15)
                                                 x otherwise
The probabilities P    for the proposal distribution, Sk (x; xk ), must, of course, be non-negative,
and must satisfy x~k Sk (x; x~k) = 1. For the moment, we will also require that Sk satisfy a

                                                 54
                                4.2 The Metropolis algorithm

the following symmetry condition:
                 Sk (x; xk) = Sk (x ; xk); whenever xi = xi for all i 6= k            (4.16)
In many applications, Sk (x; xk) depends only on xk , not on xi for i 6= k, but proposal
distributions of the more general form are permissible.
The acceptance probability, A(x; x), can have various forms, one of which is de ned below.
Note that when the candidate state is rejected, the current state becomes the new state,
and is included again in any time averages that are being computed.
More formally (but perhaps less intelligibly), the transition probabilities are as follows:
             Bk (x; x0) = Sk (x; x0k ) A(x; x0)  (xi ; x0i)
                                                  Q
                                                 i6=k
                                               P                             Q                     
                               +  (x; x0) 1          Sk (x; x~k ) A(x; x~)           (xi ; x~i)       (4.17)
                                                 x~                           i6=k
The rst term is the probability of proposing a change in component k from xk to x0k ,
and then accepting the proposed change. The second term accounts for the possibility of
rejecting the candidate state, and therefore remaining in the current state. When Xk is a
continuous variable, the sum in this term will be replaced by an integral. Note that there
is no need to actually compute the value of this term.
For the moment, only the following Metropolis acceptance function will be used:
                                                                    
                                A(x; x0) = min 1; P (x0)=P (x)                              (4.18)
When P (x) is de ned as the canonical distribution with respect to some energy function,
E (x), as in equation (2.54), this acceptance function can be written as:
                                                                           
                         A(x; x0) = min 1; exp (E (x0 ) E (x))=T                            (4.19)
Note that evaluating the acceptance probability does not require knowledge of the partition
function, Z .
As was the case with the Gibbs sampler, we may apply the base transitions, Bk , in sequence,
or we may at each step pick one at random. We again need to choose some distribution,
p0 (x), for the initial state in the chain.
We can prove that P (x) is an invariant distribution for the Markov chain used in the
Metropolis algorithm by showing that detailed balance (equation (3.10)) holds for each of
the Bk , with respect to any two states, x and x0 . If xi =6 x0i for some i =6 k, detailed balance
certainly holds, since the transition probabilities are both zero. If x = x0, detailed balance
also holds trivially. Otherwise, detailed balance can be veri ed as follows, for symmetric
Sk , and the Metropolis acceptance function (equation (4.18)):
                        P (x) Bk (x; x0) = P (x) Sk (x; x0k) A(x; x0)                       (4.20)
                                                     0                   0  
                                          = Sk (x; xk) min P (x); P (x )                    (4.21)
                                                                             
                                          = Sk (x0; xk ) min P (x0); P (x)                  (4.22)
                                                0        0         0
                                          = P (x ) Sk (x ; xk ) A(x ; x)                    (4.23)
                                          = P (x0) Bk (x0; x)                               (4.24)



                                               55
                              4.2 The Metropolis algorithm

The Markov chain will be ergodic as long as Sk (x; x0k) is non-zero for all x0k (including
x0k = xk ), and P (x) is non-zero for all x. This guarantees that any new value for Xk has
a non-zero probability of being proposed, and then accepted. In n steps, there is thus a
non-zero probability of moving from any state to any other state. The Metropolis algorithm
is often used when these criteria are not satis ed, however. Ergodicity must then be shown
by somewhat more speci c arguments.
Choice of state representation and proposal distribution. The distributions used to
propose candidate states will clearly have a large e ect on how well the Metropolis algorithm
operates. Prior to choosing these proposal distributions, an even more fundamental decision
must be made concerning how the full state, x, is to be represented in terms of components,
x1; . . . ; xn.
One option is to not divide the state into components at all, giving what I will call a global
Metropolis algorithm. All transitions in the Markov chain are then of the same type; in
each, a candidate for the next state is proposed according to the probabilities given by a
single function, S (x; x0).
As assumed in the presentation above, however, it is more common to divide the state
into components, with each component, Xk , corresponding to a base transition, Bk , of the
Markov chain, which updates only Xk . I will refer to schemes of this sort as local Metropolis
algorithms. The components may themselves be multidimensional, as is illustrated below
in the case of Lennard-Jonesium. Often, the components will all be of similar type, and it
will be appropriate to use the same form of proposal distribution for all of them.
When possible, it is desirable to use a decomposition of the state for which a ratio of the
form P (x0)=P (x) in which x and x0 di er in only one component can be computed in much
less time than can P (x) for an arbitrary x. This ratio is needed to calculate the acceptance
probability, A(x; x0). It may also be desirable to choose a decomposition in which the
components of the state are nearly independent. Dependencies amongst components tend
to slow exploration of state space, since major changes to the state may be possible only
via a long series of local changes, each of which respects the dependencies. In a system of
independent variables, state space may be explored very rapidly, as long as the proposal
distribution for each component individually provides rapid exploration of that component's
states.
For components where the set of possible values is nite, a proposal distribution that gives
equal probabilities to all possible values is the obvious choice. Another commonly-chosen
option is a uniform distribution over all possible values except the current one. The latter
choice sometimes leads to faster exploration of state space, but if the Bk are applied in
order systematically, it can sometimes produce slower convergence instead, or even cause
the Markov chain to be non-ergodic. These issues are discussed further in Section 4.4.
For real-valued components, many forms for the proposal distribution for component k,
Sk (x; x0k), are reasonable. A Gaussian distribution centred on the current xk is one obvious
choice. A Cauchy distribution, advocated by Szu and Hartley (6:1987), is similar, but with
the possible advantage that its heavy tails allow large changes to be tried on occasion. Both
these choices satisfy the symmetry condition (4.16). Both also have a non-zero probability of
proposing any change to the component, and hence produce a chain that is ergodic, as long
as the desired equilibrium distribution, P (x), is never zero. A uniform distribution on some
interval centred on xk is another possibility. It, too, satis es the symmetry requirement, but
it does not give non-zero probability to all new values for the component. It nevertheless

                                             56
                               4.2 The Metropolis algorithm

leads to a Markov chain that is ergodic, as long as P (x) is never zero, since any value can
still be reached eventually. For continuous multi-dimensional components, the analogous
possibilities are multivariate Gaussian or Cauchy distributions, and distributions that are
uniform over a hypercube or hypersphere. All these proposal distributions have width
parameters which will have to be set either on the basis of a priori knowledge of the problem
or by trial and error (see also Sections 4.4 and 7.1).
For some problems, as in (Kirkpatrick, Gelatt, and Vecchi, 6:1983), the state may have more
structure than just a set of component values, and there may be constraints on allowable
states, leading to proposal distributions that are speci c to the problem. Constraints on
valid states can also be imposed by considering states violating the constraints to have zero
probability (in nite energy). Any attempted move to an invalid state will then be rejected
(at which point the old state must be counted again in forming estimates, as with any other
rejection).
Applications of the Metropolis algorithm. The Metropolis algorithm has proved to
be a exible tool that is applicable to a wide range of problems. However, when the required
conditional distributions can be sampled from easily, the Gibbs sampler may be preferred,
and when it is dicult to decompose the state into local components that are not too
dependent, the dynamical algorithms of the next section may be more attractive.
Example: The 2D Ising model. The Metropolis algorithm has been extensively applied to
the simulation of the 2D Ising model. It is natural for this problem to treat each spin as a
separate component. Usually, the proposal distribution for a change to spin i is Si (s; s0i ) =
 ( si ; s0i) | i.e. the candidate state is always obtained by ipping spin i to its opposite
value. The probability of accepting this s0 is found from equations (4.19) and (2.55):
                                               X                  . 
                     A(s; s0 ) = min 1; exp 2s0i          Jsj + H T                     (4.25)
                                                   j : (i;j )2N
Computing this acceptance probability requires looking only at the four spins that are
neighbors of spin i. If the decomposition of the state into individual spins did not permit
this local computation, the method would be much less attractive. Note, however, that
for low values of T , neighboring spins become very dependent, forming large clusters with
identical orientation. This has prompted attempts to nd a better representation for the
state of this system, as in the Swendsen-Wang algorithm described in Section 4.3 below.
Whether the Metropolis algorithm or the Gibbs sampler is better for simulating the Ising
system is discussed in Section 4.4.
Example: Lennard-Jonesium. The Metropolis algorithm is also widely used to simulate
systems of molecules with energy functions such as the Lennard-Jones potential of equa-
tion (2.57). Typically, the goal is to sample from the distribution for the position coordinates
of the molecules, with the independently-varying momenta handled separately by analytical
methods. This distribution is de ned by the potential energy, E (q):
                                          "         12              6 #
                     E (q) =
                                  X
                                       4"                                               (4.26)
                                 i6=j      jqi qj j               jqi qj j
with qi = fqi1; qi2; qi3g being the position vector for the i'th molecule.
The three coordinates for one molecule are usually treated as a single component. A new
candidate value for such a component might typically be selected from the uniform distri-

                                              57
                              4.2 The Metropolis algorithm

bution over the inside of a sphere of some radius, centred on the molecule's current position.
The radius of this sphere is adjusted by trial and error to be as large as possible while
keeping the rejection rate for moves reasonably low.
Computing the exact change in energy produced by a candidate move (needed to nd
the acceptance probability) is not a local operation with this model, since every molecule
interacts with every other in equation (4.26). Since the in uence of distant molecules is very
small, however, a cut-o is sometimes introduced to allow local recomputation. Also, if the
substance being simulated is in a liquid or gaseous phase, the distributions of molecules in
distant regions will be almost independent, and hence their interactions will not slow the
approach of the system to equilibrium. When these two locality properties hold, the time
required to simulate such a system grows only linearly with its volume.
It is illuminating to consider alternative ways of applying the Metropolis algorithm to this
system. One possibility would be to treat the coordinates of each molecule as separate
components of the state. Each coordinate would then be updated independently, perhaps
using a proposal distribution that was uniform over some interval centred on the current
coordinate value. However, since the potential energy function is rotationally symmetric,
this division into coordinates will be arbitrary, and hence one would not expect to gain
anything by operating on this ner scale. In particular, to maintain an acceptably low
rejection rate, the width of the interval from which candidate states are selected in this
scheme will have to be similar to the diameter of the sphere used to select candidate states
in the usual scheme. This ner division of the state will therefore not lead an appreciably
faster exploration of state space.
In the other direction, one could consider treating the entire state as a single component,
updating the positions of all the molecules at every step. However, if reasonable rejection
rates are to be maintained with this scheme, the amount by which each molecule is moved
will have to be much smaller than the amount each would be able to move if their positions
were updated independently. Indeed, the size of the proposed changes will have to become
ever smaller as the volume of the system being simulated increases. The reasons for this are
discussed in Section 4.4.
Example: Multi-layer perceptrons. Gibbs sampling is not a feasible means of implementing
Bayesian inference for complex multi-layer perceptron networks, because it is extremely
dicult to sample from the distribution for one weight conditional on the current values of
the other weights (and the training data). It is possible to apply the Metropolis algorithm
to this problem, however, though it can be rather slow.
When using the Metropolis algorithm to sample from the posterior distribution for the
weights of a neural network, it is natural to treat each weight as a separate component of
the state. This decomposition will be most e ective if the change in the probability of a
state when just one weight is changed can be computed \locally" at little cost. It would
also be nice if the weights were largely independent, as this would lead to rapid convergence
if the width of each weight's proposal distribution were appropriately set. These desirable
characteristics are sometimes partially present, especially with simple networks, but they
are largely absent in large, complex networks.
Some pairs of weights will be independent | for example, two weights on connections
into di erent output units make independent contributions to the likelihood (and will be
independent with respect to a simple prior as well). However, two weights into the same unit,
as well as any two weights into hidden units, are likely to be highly dependent. Accordingly,

                                             58
                         4.3 Variations on the Metropolis algorithm

even with carefully selected proposal distributions the rate of convergence will be slowed by
these dependencies.
Regardless of whether the weights are independent, a gain in computation time will be
possible if the change in likelihood when a single weight is updated can be found using
only local computations. For a simple network with the architecture shown in Figure 2.3
this can indeed be done, by saving, for each training case, the total input into each hidden
and output unit, using the current values for the weights. Before a weight is updated, the
contribution that its connection makes to the unit it feeds into can be subtracted from this
saved sum; after the change, the new contribution can be added. In this way, the new
value for the unit can be found with a constant amount of e ort, regardless of how many
other connections feed into it. If the weight updated is one into a hidden unit, the e ect of
the hidden unit's new value on the output units can be found in similar fashion, requiring
further time proportional to the number of output units.
In a network with several hidden layers, however, this scheme helps only for the two layers
following the connection whose weight was changed. Changing a weight on a connection
into a hidden unit has an e ect on all units in the layer after that hidden unit, so from there
on, a full re-computation is required. Accordingly, we can expect to see only modest gains
from local computation when applying the Metropolis algorithm to Bayesian learning for a
general multi-layer perceptron network.

4.3 Variations on the Metropolis algorithm
Quite a few variations on the basic Metropolis algorithm have been proposed. Those varia-
tions that make use of the derivative of the energy function are discussed in Section 5. Here,
I describe other variations that may be generally applicable.
Other acceptance functions. Functions other than that of equation (4.18) can be used
for the probability of accepting a candidate state in the Metropolis algorithm. A whole
family of acceptance functions for which detailed balance holds is given by Hastings (4:1970).
The only such alternative that appears to have found wide use is the following, which I will
call the Boltzmann acceptance function:
                                                  
                               A(x; x0) = P (x0) (P (x) + P (x0))                          (4.27)
For distributions de ned in terms of an energy function, this is
                                                                                 
           A(x; x0) = exp E (x0 )=T            exp E (x)=T + exp E (x0 )=T                 (4.28)
                                            0               
                       = 1 1 + exp (E (x ) E (x))=T                                        (4.29)
Use of this acceptance function is equivalent to forgetting which of x and x0 is the current
state, and then selecting between them at random, according to their relative probabilities
(Boltzmann probabilities, when the distribution is de ned by an energy function).
We can verify that detailed balance holds when this acceptance function is used in conjunc-
tion with a symmetrical proposal distribution. For the nontrivial case where xk =      6 x0k , but
       0      6 k, we have:
xi = xi for i =
                                                                    
             P (x) Sk (x; x0k ) A(x; x0) = Sk (x; x0k) P (x)P (x0) (P (x) + P (x0))        (4.30)
                                                                     
                                         = Sk (x0; xk ) P (x0)P (x) (P (x0 ) + P (x))      (4.31)
                                               0        0          0
                                         = P (x ) Sk (x ; xk ) A(x ; x)                    (4.32)

                                               59
                           4.3 Variations on the Metropolis algorithm

The Boltzmann acceptance function was known to be valid from the earliest days of the
Metropolis algorithm (Wood, 1:1985), but was regarded as inferior to the standard Metropo-
lis acceptance function, since it leads to fewer changes being accepted. In fact, as discussed
in Section 4.4, neither of these acceptance functions is superior to the other in all contexts.
When the components of the state have only two possible values, as with the Ising model, use
of the Boltzmann acceptance function of equation (4.27) makes the Metropolis algorithm
identical to Gibbs sampling, assuming that candidate states are selected by ipping the
value of one component.
Generalization to non-symmetric proposal distributions. Hastings (4:1970) gen-
eralized the Metropolis algorithm to allow its use with proposal distributions that do not
satisfy the symmetry condition (4.16). Detailed balance is preserved by altering the ac-
ceptance function to compensate for the bias the asymmetry introduces. The Metropolis
acceptance function (equation (4.18)) can be modi ed as follows:
                                                                                         
                     Ak (x; x0) = min 1; P (x0)Sk (x0 ; xk ) P (x)Sk (x; x0k)                         (4.33)
The acceptance probability may now depend on k, since the proposal distribution may.
Detailed balance can be veri ed to hold as follows (for the nontrivial case where xk =                6 x0k ,
            0
but xi = xi for i = 6 k):
                                                                                               
              P (x) Sk (x; x0k) Ak (x; x0) = min P (x)Sk (x; x0k ); P (x0)Sk (x0 ; xk)                (4.34)
                                                               0      0                     0  
                                                = min P (x )Sk (x ; xk); P (x)Sk (x; xk)              (4.35)
                                                        0         0         0
                                                = P (x ) Sk (x ; xk ) Ak (x ; x)                      (4.36)
Other acceptance functions, such as that of equation (4.27), may also be modi ed to work
with non-symmetric proposal distributions. Note that to use a non-symmetric proposal
distribution, it is necessary in general that one be able to calculate the numerical value of
the probability of the particular candidate state chosen having been proposed. This is not
necessary when the proposal distribution is symmetric.
The Gibbs sampling algorithm can be viewed as a special case of this generalized Metropo-
lis algorithm, in which the proposal distribution for component k is just its conditional
distribution given the current values of the other components | that is, Sk (x; x0k) =
P (x0k j fxi : i =6 kg). Noting that P (x) = P (xk j fxi : i =6 kg) P (fxi : i =6 kg), and
that Ak (x; x0) is used only when xi = x0i for i =         6 k, the acceptance probability from equa-
tion (4.33) is seen to be
                             0      0 =
 Ak (x; x0) = min 1; PP ((xxk jj ffxxi :: ii =6 kg) P (fx0i : i =6 kg) P (xk j fx0i : i =6 kg)  = 1 (4.37)
                              k      i       6 kg) P (fxi : i =6 kg) P (x0k j fxi : i =6 kg)
Hence the new \candidate" state is always accepted, giving the usual Gibbs sampling pro-
cedure.
Taking this view, Tierney (1:1991a) suggests an approximate form of Gibbs sampling that
produces exactly unbiased results. (Ritter and Tanner (4:1992) described an approximate
version of Gibbs sampling that is not exact.) In this method, one uses some proposal
distribution, Sk (x; x0k ), that may be only an approximation to P (x0k j fxi : i =           6 kg), in con-
junction with the acceptance function of equation (4.33). The better the approximation
used, the lower the rejection rate will be, but exact results will be obtained (eventually)
even with poor approximations.


                                                     60
                       4.3 Variations on the Metropolis algorithm

The \rejectionless" method. In some applications of the Metropolis algorithm, the
frequency with which candidate states are accepted is very low. The time spent in generating
these rejected states can sometimes be eliminated by drawing from the distribution for the
next accepted state, and from the distribution for how many rejections would occur before
such an acceptance. Algorithms based on this idea are described by Bortz, Kalos, and
Lebowitz (4:1975) and by Greene and Supowit (4:1986).
This rejectionless method applies only to global Metropolis algorithms. Note, however, that
a local Metropolis algorithm in which the component to be updated is chosen at random can
be viewed as a global Metropolis algorithm, with a proposal distribution that changes a ran-
domly selected component. I will assume here that the state space is nite; generalizations
to in nite state spaces are probably not of practical use.
For a global Metropolis algorithm, the probability that we will accept a transition from the
current state, x, to a new state, x0, is
                                  w(x0) = S (x; x0)A(x; x0)                            (4.38)
where S (x; x0) is the probability of proposing x0 as a candidate state, and A(x; x0) is the
probabilityPof accepting this candidate. The total probability of accepting a move from state
x is W = x0 w(x0). The distribution for the number of iterations, n, that x remains the
current state is therefore as follows:
                                   P (n) = W (1 W )n 1                                 (4.39)
Rather than actually simulate these rejections, we can simply generate a random integer
from the above distribution, and consider the current state to be repeated that many times.
Alternatively, if the only motive is to nd the time average of some function of state, the
current state can simply be given a weight in this average equal to the expected number of
repetitions, which is 1=W .
Having decided how many times the current state is repeated, we pick a new state, chosing
x0 with probability w(x0)=W .
The usefulness of this method depends on whether these operations can be performed ef-
  ciently for the system being simulated. Bortz, Kalos, and Lebowitz (4:1975) give an al-
gorithm for the Ising system, with a proposal distribution that generates a candidate state
by ipping a spin chosen at random. In this case, the number of possible candidate states
is quite large, but there are only ten possible values of w(x0), resulting from two possible
states of the ipped spin, and ve possible environments of neighboring spins. This allows
the algorithm to be eciently implemented. They report that it is much faster than the
standard Metropolis algorithm at low temperatures.
Greene and Supowit (4:1986) deal with systems where the number of possible values of
w(x0) may be larger, but in which the number of possible candidate moves is relatively
small. They use an incrementally-maintained tree structure to speed the selection of a new
state.
Even when the rejectionless method can be implemented eciently, however, it will not
necessarily be e ective in speeding up exploration. It is possible to imagine systems in
which signi cant changes in state are rare, but in which there are always trivial moves
that have a high probability of acceptance. Unless the latter can be identi ed and handled
separately, they will render use of the rejectionless method pointless.


                                             61
                        4.3 Variations on the Metropolis algorithm

The generalized Swendsen-Wang algorithm. Swendsen and Wang (4:1987) developed
a specialized algorithm for simulating Ising systems that is a spectacular improvement on
previous methods, especially for simulations near the point of a phase transition. Here, I will
describe a generalization of this algorithm due to Edwards and Sokal (4:1988). Formally,
this generalization can be applied to a wide variety of systems, though the result is not
always of practical use.
Assume that the distribution of interest over the state variable X can be expressed as follows:
                                                   B
                                   P (x) = Z1
                                                  Y
                                                      Wb (x)                             (4.40)
                                                  b=1
where Z is the appropriate normalization constant, and each of the factors is bounded,
with 0  Wb (x)  1. This formulation is equivalent to expressing the distribution using an
energy function that is the sum of B terms, each of which is non-negative.
Edwards and Sokal express this model using auxiliary variables, Y1 ; . . . ; YB , which take
values in the interval [0; 1]. The joint probability for the original state and these new
variables is de ned to be                      B
                             P (x; y) = Z1
                                              Y                  
                                                    Wb (x) yb                           (4.41)
                                              b=1
where (z ) is one for z  0 and zero for z < 0. The marginal distribution for X in this
model is then
     Z 1 Z 1
                1 YB                               1 YB Z1                 
            Z  Wb (x) yb dyB    dy1 = Z                Wb (x) yb dyb (4.42)
      0       0   b=1                                 b=1 0
                                                             B
                                                       = Z1
                                                            Y
                                                                Wb (x)                  (4.43)
                                                            b=1
which is the same as the distribution for X in the original formulation of the model in
equation (4.40).
Any scheme for sampling from the joint distribution of X and Y de ned by equation (4.41)
will therefore solve the original problem. In particular, we can try Gibbs sampling, alter-
nately choosing new values for the auxiliary variables, Yb , given the current x, and choosing
a new value for X given the current yb . Conditional on the current x, the Yb are independent,
with distributions
                                      
                      P (yb j x) =        1=Wb(x) if 0  yb < Wb (x)                    (4.44)
                                          0          otherwise
This is easily sampled from, assuming Wb (x) can be computed. Whether it is easy to sample
from the conditional distribution for X given the yb depends on the details of the model.
To see how large gains are possible with this approach, consider the Ising model with no
external eld, which can be described with the following energy function, obtained from the
energy of equation (2.55) by adding a constant (which does not a ect the resulting canonical
distribution):
                                             X
                                 E (s) =          J (1 si sj )                          (4.45)
                                            (i;j )2N


                                              62
                        4.3 Variations on the Metropolis algorithm

The corresponding canonical distribution can be written as
                                                      
       P (s) = Z1            Wij (s); where Wij (s) = 1exp( 2J ) ifif ssi = sj
                       Y
                                                                          6
                                                                          = sj           (4.46)
                    (i;j )2N                                            i

Now introduce auxiliary variables, Yij , taking values in [0; 1], with the joint distribution
              P (s; y) = Z1
                                  Y                     
                                         Wij (s) yij                                     (4.47)
                               (i;j )2N
                            1    Y  1                  if s i = s j
                                                                     
                          = Z                         
                                        exp( 2J ) yij if si 6= sj                       (4.48)
                              (i;j )2N
All we really need to known
                              about the Yij are the values of the binary variables Dij =
1  exp( 2J ) Yij . A value of one for Dij can be seen as a \bond" between spins i
and j . The conditional distributions for the Dij needed for Gibbs sampling can be found as
in equation (4.44):                                   
                                                         1 exp( 2J ) if si = sj
    P (Dij = 1 j s) = P (Yij > exp( 2J ) j s) =          0              if s 6= s     (4.49)
                                                                               i    j
Gibbs sampling for the Dij thus consists of independently placing bonds between adjacent
matching spins with probability 1 exp( 2J ), and omitting bonds between adjacent spins
that di er in value.
The conditional distribution for the spin values, S , given the bond variables, Dij , is
                                            
                                      Y       1 if si = sj or dij = 0 
                     P (s j d) /              0 if s   6 = s   and d    = 1              (4.50)
                                   (i;j )2N          i       j       ij
Sampling from this distribution takes the form of a \percolation" problem, in which spins
are grouped into clusters based on which bonds are present. The spins in each cluster are
then all assigned the same new value, with +1 and 1 being equally likely. This choice of
spin value is done independently for each cluster.
This procedure can be eciently implemented, and is capable of ipping large clusters of
spins in a single iteration. This is especially advantageous when simulating the Ising system
at a temperature near the point of its phase transition, when large clusters of identical
spins are present, but the system has not yet acquired a dominant orientation. Algorithms
that pick new values for each spin locally take a long time to explore con gurations in this
situation, as the boundaries between clusters drift only slowly, via a random walk.
The success of this approach with the Ising and related models naturally encourages one to
try applying it in other contexts. It appears applicable to certain image models that are
closely related to the Ising system, as are some discussed by Geman and Geman (4:1984).
Whether it will be useful for other statistical problems remains to be seen (see (Besag and
Green, 1:1993) for some discussion).
Other variations of the Metropolis algorithm. Other variations on the Metropolis
algorithm may be found in the papers in Section 4 of the bibliography. I will brie y describe
two here.
Kennedy and Kulti (4:1985) and Bhanot and Kennedy (4:1985) have attempted to make
use of \noisy" acceptance probabilities. This approach is potentially useful when such noisy

                                              63
              4.4 Analysis of the Metropolis and Gibbs sampling algorithms

approximations are easier to compute than the exact acceptance probabilities. For Bayesian
inference problems, fast approximations can be computed based on the log likelihood for a
randomly selected subset of the training cases (scaled up to give an estimate of what the
full likelihood would be). Unfortunately, it appears dicult to fully control the potential
error introduced by these techniques.
Goodman and Sokal (4:1989) provide a comprehensive review of multigrid methods. This
class of algorithms is applicable to problems where the variables have a geometric structure,
in which one can move between coarse-grained and ne-grained representations. Szeliski
(2:1989) applies such methods to computer vision.

4.4 Analysis of the Metropolis and Gibbs sampling algorithms
In this section, I discuss and compare the performance of Gibbs sampling and of various
forms of the Metropolis algorithm. These algorithms can be analysed from several points of
view. I start with a largely intuitive look at sampling from a system of continuous variables
with a Gaussian distribution. Following this, I discuss how the e ort required to obtain
an adequate sample scales with \system size". I then brie y review work concerning the
\optimal" choice of acceptance function.
The Metropolis and Gibbs sampling algorithms for a multivariate Gaussian.
The multivariate Gaussian distribution provides a simple model for problems with a contin-
uous state space, in which the computational characteristics of the algorithms can easily be
analysed and visualized. This analysis provides a guide to how rapidly the region around
a local maximum in many continuous distributions will be explored, as such local maxima
are often approximately Gaussian (i.e. the log of the probability density is approximately
quadratic).
I will consider three algorithms here:
        Gibbs sampling, with components of the state updated systematically in turn.
        The local Metropolis algorithm, in which components of the state are updated sys-
         tematically in turn, using some pre-de ned proposal distribution centred on the
         current value, whose width may be di erent for each component.
        The global Metropolis algorithm, in which all components are updated simultane-
         ously, using some pre-de ned spherically-symmetric proposal distribution centred
         on the current state.
The n-dimensional state space will of course be represented in some coordinate system. By
a \component", above, is meant either a single such coordinate, or perhaps a small group
of related coordinates.
The operation of each of these algorithms is sensitive to some coordinate transformations,
and insensitive to others. Gibbs sampling is invariant under translation and scaling of the
coordinate system, but is sensitive to rotation. The local Metropolis algorithm is invariant
under translation, but is sensitive to scaling and rotation. The global Metropolis algorithm is
invariant under translation and rotation, but sensitive to scaling. Which algorithm is better
can therefore depend on whether a good coordinate system can be found; for the Metropolis
algorithm, this choice must be coordinated with the choice of proposal distribution.
For systems with local interactions, it is natural to use a separate set of coordinates to

                                              64
              4.4 Analysis of the Metropolis and Gibbs sampling algorithms

describe each sub-system. As discussed in Section 4.2 with respect to Lennard-Jonesium,
this may lead to some components of the state being almost independent. Gibbs sampling is
then an attractive method, provided, of course, that the required conditional distributions
can be eciently sampled from. Indeed, if the components were completely independent,
every pass of the Gibbs sampling algorithm would produce an independent state. The local
Metropolis algorithm also performs well in this situation, provided the proposal distributions
are tailored to the scale of changes likely to be accepted for each component.
For a multivariate Gaussian, there is always a rotation of the coordinate system that results
in the di erent coordinates of the state being independent. However, in a high-dimensional
problem, nding this transformation may not be at all easy. (For further discussion of
this topic, see Section 7.1.) Accordingly, for some problems we may have to live with a
coordinate system that is far from ideal. This may be the case for Bayesian learning of
multi-layer perceptrons, for example, as discussed in Section 4.2.
This situation is illustrated in Figure 4.1, for a bivariate Gaussian. The probability density
is in this case given by equation (2.11) with the covariance matrix
                                                 2             
                                   =         1     1  2                           (4.51)
                                                 1 2     22
where 1 and 2 are the standard deviations of the marginal distributions for X1 and
X2 , and  is the correlation between X1 and X2 . In the illustration, 1 = 2 = 1 and
 = 0:99. Without loss of generality, we can take the mean, , to be zero. Note that
if the coordinate system were rotated by =4, the correlation would disappear; the two
components would then have independent Gaussian distributions with standard deviations
&1 = 0:10 and &2 = 1:41. We assume that we do not know enough to do this, however.
Figure 4.1(a) shows the performance of Gibbs sampling in this situation. The conditional
distribution for X1 given the current value of X2 , which p      is needed for Gibbs sampling, is
Gaussian with mean (1 =2)x2 and standard deviation 1 1 2  0:14. The conditional
distribution for X2 given the current value of x1 is analogous. The amount by which the
state changes in a single Gibbs sampling pass is thus usually rather small | of the same
order as the standard deviation in the most con ned direction (&1 = 0:10). Movement in the
less con ned direction (for which the standard deviation is &2 = 1:41) is therefore fairly slow.
Many more iterations will be needed to move from one point to another point that is largely
independent than would be required if X1 and X2 were nearly independent. Furthermore,
in the initial stages of the simulation, a large number of moves will be needed to reach the
equilibrium distribution, if the initial state is far from the mean.
The local Metropolis algorithm behaves similarly with proposal distributions that are cen-
tred on the current value and are narrow enough that the acceptance probability is reason-
ably large. When the correlation is high, one might just as well use the global Metropolis
algorithm, changing all the coordinates at once. To keep the acceptance rate reasonably
high, the size of a global change must be limited to roughly the standard deviation in the
most con ned direction. The behaviour of the global Metropolis algorithm using such a
proposal distribution, with an acceptance rate of about 56%, is illustrated in Figure 4.1(b).
It is roughly similar to the behaviour with Gibbs sampling, though the occasional rejections
slow the search somewhat.
Notice that in this example both Gibbs sampling and the Metropolis algorithm explore the
less con ned direction by a random walk. This further slows the rate at which independent
states are visited. If the simulation takes steps of size about &1 , one might expect that

                                               65
               4.4 Analysis of the Metropolis and Gibbs sampling algorithms




                         (a)                                                 (b)
Figure 4.1: Sampling from a bivariate Gaussian distribution, (a) using Gibbs sampling, with one
iteration choosing new values for rst the horizontal and then the vertical coordinate, (b) using
the global Metropolis algorithm, with a symmetric Gaussian proposal distribution with standard
deviation 0.15, centred on the current state. The path followed by twenty iterations is shown in each
case (note that for some iterations of the Metropolis algorithm the candidate state was rejected).
The ellipses show the one standard deviation contour of the distribution, for which 1 = 2 = 1,
and  = 0:99.

to move anywhere along the less con ned direction, which extends a distance of about &2,
would take about &2 =&1 iterations. In pfact, however, in k iterations, the simulation will
usually move only around a distance &1 k, as a consequence of the random walk nature of
the moves. One must simulate about (&2=&1 )2 iterations in order to reach a state that is
largely independent of the starting point; in the example of Figure 4.1, this is about 200
iterations.
This analysis gives a valid picture of the performance of these algorithms in high-dimensional
problems. For two-dimensional problems such as that of Figure 4.1, however, one can do
much better with the global Metropolis algorithm by using a proposal distribution that
considers large changes to the state, of the order of the standard deviation in the less
con ned direction. In two dimensions, the probability that a jump in a random direction
from a region of high probability will end up in another region of high probability, and
hence be accepted, is inversely proportional to the size of the jump. On the other hand,
the distance moved is directly proportional to the size. These two factors cancel, with the
result that the total distance travelled in a given number of steps is roughly independent of
the size of changes proposed, for any size between &1 and &2. If the distance is travelled in a
random walk with many small steps, however, the net distance moved is usually much less
than if only a few large steps were taken. It is therefore best to make large changes, despite
the very low acceptance rate that results. However, in higher-dimensional problems where
there is more than one orthogonal direction in which the standard deviation is small, the
acceptance probability goes down at a higher rate as the size of a jump increases, and the
strategy of taking large jumps no longer works well. This illustrates the danger of relying
too much on low-dimensional examples for guidance in high-dimensional problems.

                                                 66
              4.4 Analysis of the Metropolis and Gibbs sampling algorithms

Scaling with system size. Since we are interested in using the Metropolis and Gibbs
sampling methods to sample from distributions over high-dimensional spaces, we would like
to know how their behaviour scales as the number of dimensions increases. As a model
for this, we can ask how they behave when applied to a composite system that consists of
many independent replicas of some simple system. Suppose the simple system has state
variable X0 and energy function E0 (x0). The composite system consisting of N replicas of
this system will have state variable X = fX1 ; . . . ; XN g, with all the Xi being identical in
form to X0 , and energy function E (x) = E0(x1) +    + E0 (xN ).
Of course, we would not bother to simulate the composite system if we knew that it had
this structure, since the system's properties can be found more easily by simulating just the
simple system. However, studying this case may provide insight into less trivial systems
where the Xi are only weakly dependent. Furthermore, a system of interest might take
this form, with the Xi nearly independent, only if its state were to be decomposed into
components using some coordinate system other than the natural one. In high dimensional
problems, it may not be easy to nd this good coordinate system.
Consider simulating the composite system using Gibbs sampling or a local Metropolis
method, in which the changes in state a ect only one of the Xi (or part of one Xi ), with
each Xi being visited in turn. Each of the Xi will then evolve completely independently,
in exactly the same way as they would in a simulation of a single instance of the simple
system. As the size of the composite system increases, the computation time required bring
the simulation to equilibrium, and, once it has reached equilibrium, the computation time
needed to move from one point to a nearly independent point, will both simply be propor-
tional to N , re ecting the fact that each full iteration of the simulation must update each
of the N replicas.
This linear scaling is obtained using knowledge of how to decompose the state into inde-
pendent components. If we don't know enough to do this, it may be more appropriate to
use a global Metropolis algorithm, in which the candidate state proposed, x , di ers in all
components. Let us also assume that the proposed changes in each component are inde-
pendent and identically distributed. We can then ask how the probability of accepting a
move scales as N increases, while the proposal distributions remain xed. This acceptance
probability depends on the di erence in energy between the current state and the candidate
state. The expected value of this di erence once the simulation has reached equilibrium can
be expressed in terms of the expected di erence in energy when using the same proposal
distribution with the simple system, as follows:
                               X
          E (x ) E (x) =           E0(xi ) E0(xi ) = N E0(x0 ) E0(x0 ) 0              (4.52)
                               i
Thus the average magnitude of the change in energy gets larger in direct proportion to
system size. Furthermore, from the Law of Large Numbers, we know that the distribution
will become concentrated in the vicinity of this average. If E0(x0 ) E0(x0) 0 is positive,
the acceptance probability will therefore decline exponentially as N increases.
But might E0(x0 ) E0(x0 ) 0 be negative? If so, the acceptance probability would in-
stead approach one as N increases. Unfortunately, this is not possible, as is shown by
Creutz (5:1988). To see this, rst note that the following relation holds at equilibrium when
candidate states are generated using a symmetrical proposal distribution, S (x; x ):
     P (x) = X P (~x) X S (~x; x~ ) P (~x) = X P (~x) X S (~x ; x~) = 1 (4.53)
           

      P (x)         x~       x~          P (~x)       x~         x~

                                              67
              4.4 Analysis of the Metropolis and Gibbs sampling algorithms

Applying this to the simple system de ned by E0, we get
                                                                          
              1 = P0(x0 ) P0(x0 ) 0 = exp E0(x0 ) E0 (x0) T 0                          (4.54)
                                                                             
                                           exp         E0(x0 ) E0 (x0) 0 T              (4.55)
The last step uses Jensen's Inequality, and the fact that exp is a concave function. By taking
the log of both sides, we can now conclude that E0(x0 ) E0(x0) 0  0. Equality will hold
only in trivial cases.
The time required to sample using the global Metropolis algorithm will therefore grow
exponentially with system size if we use a xed proposal distribution. Of course, this is not
the best strategy. Instead, we can change the proposal distribution as N increases so as
to keep the expected change in energy constant. Often, for example, the candidate state is
obtained from a proposal distribution centred on the current state. In this case, reducing the
width of the proposal distribution will result in smaller changes in state, and hence smaller
changes in energy, assuming that the energy is a smooth function. Reducing the size of
the proposed changes will increase the number of accepted moves required to move to an
independent point, however. According, the time required to generate an adequate sample
will increase more than linearly with system size. The form of this scaling will depend on
the details of the problem and of the sampling method.
Choice of acceptance function. A number of papers have addressed the question of
whether the standard \Metropolis" acceptance function of equation (4.18) or the alternative
\Boltzmann" acceptance function of equation (4.27) is better. For systems whose compo-
nents have only two states, such as the Ising system, the latter choice is equivalent to Gibbs
sampling.
This question might appear to have been answered by Peskun (4:1973), who showed that,
for any xed proposal distribution, the Metropolis acceptance function is optimal amongst
all acceptance functions in a large class. This result applies to forms of the Metropolis
algorithm that can be expressed in terms of a single proposal distribution, which potentially
may change any part of the state. This includes what I have called \global" Metropolis
algorithms, in which the candidate state generally di ers in all components, and also those
\local" Metropolis algorithms in which the component to be updated is selected at random,
since these can be rephrased in terms of a single proposal distribution. The performance
criterion used by Peskun is the \asymptotic variance" of a Monte Carlo estimate of the
expectation of some function based on states generated by the Markov chain, de ned as the
limit of N times the variance of the estimate after N iterations, as N goes to in nity. The
results of Peskun (4:1973, 4:1981) also imply that it is best to use a proposal distribution
that gives zero probability to the current state.
Peskun's results do not really settle the issue, however, for two reasons. First, asymptotic
variance is an appropriate criterion for assessing performance only if very precise estimates
are desired. This is often not the case. In many problems, even a single state drawn from
the equilibrium distribution would be highly informative, and much of the uncertainty in
the results may be due to doubts about whether the Markov chain has truly converged to
this equilibrium distribution, rather than to the variance in the estimator that arises from
use of a nite sample.
Perhaps more importantly, the result simply does not apply to the most commonly used
method | the local Metropolis algorithm with components updated in a xed order. Indeed,
in this context, using the standard Metropolis acceptance function along with a proposal

                                              68
                  4.4 Analysis of the Metropolis and Gibbs sampling algorithms

distribution that gives zero probability to the current state can produce a chain that is not
even ergodic.
To see this, consider a system of binary variables in which all states have the same probabil-
ity. Suppose that the Bk are applied in order systematically, and that Sk gives probability
one to the candidate in which the value of the k-th variable is ipped. Since all states
have equal probability, all the candidate moves will be accepted when using the Metropolis
acceptance function. A single pass over the variables will thus change them all; the next
pass will change them all back to their original values. Other states are never seen.6 The
problem remains in the less trivial system of three binary variables where all states have
the same probability except for (0; 1; 0) and (1; 0; 1), whose probabilities may be arbitrary.
For a real-life example of the problem, see (Friedberg and Cameron, 4:1970).
For most problems, using the Metropolis acceptance function with systematic updating
does produce an ergodic chain, but the asymptotic variance may still be higher than is
obtained using the same method with the Boltzmann acceptance function. This is found
empirically to be the case for an Ising system by Cunningham and Meijer (4:1976), and
also by Peskun (4:1981). Further theoretical results bearing on these questions have been
obtained by Frigessi, di Stefano, Hwang, and Sheu (4:1993). The issues still remain unclear,
though it appears that common opinion favours using the Metropolis acceptance function
in most circumstances.




6   In fact, for this system, the Metropolis acceptance function produces a non-ergodic chain even if the
    component to update is chosen at random | the number of components having the value 1 will always
    be even at even iterations and odd at odd iterations. Time averages turn out correctly however, and the
    problem does not persist in the less trivial example mentioned next.

                                                     69
 5. The Dynamical and Hybrid Monte Carlo Methods
In this section, I describe Markov chain sampling methods that derive from the \molecular
dynamics" approach (Alder and Wainwright, 5:1959), which was developed concurrently
with the Metropolis algorithm as a means of simulating physical systems. These methods
are widely applicable to problems with continuous state variables, provided appropriate
derivatives can be calculated. (If discrete variables are present as well, one could use a
Markov chain that combines these methods with those of the previous section.)
Dynamical sampling is based on a physical analogy. The gradient of the potential energy
for a physical system with respect to its con guration coordinates de nes the \force" that
acts to change this con guration, via its e ect on the system's momentum. When a physical
system is in contact with a heat reservoir, it also experiences in uences that can be modeled
as being random. These dynamical and stochastic e ects together result in the system
visiting states with a frequency given by its canonical distribution.
Simulating the dynamics of such a physical system therefore provides a way of sampling
from the canonical distribution. Dynamical simulation also allows one to observe in detail
how the system behaves as it visits states with this distribution. Through much of the
literature, the latter motive for dynamical simulation has been dominant, the general view
apparently being that when the only purpose is to sample from the canonical distribution,
methods based on the Metropolis algorithm are to be preferred.
Recently, however, it has become clear that, at least for some problems, the dynamical
method can be faster than a direct approach using the Metropolis algorithm, largely because
the dynamical method avoids the random walk behaviour inherent in simple forms of the
Metropolis algorithm. Indeed, it can be advantageous to invent an arti cial dynamics for
problems that have no connection with any real physical system. It is convenient to retain
the physical terminology even in such cases, however. Accordingly, in this section I will
talk only of canonical distributions de ned by an energy function, as in equation (2.54).
Any distribution that is nowhere zero can be put in this form, so this is largely a matter of
representation.
5.1 The stochastic dynamics method
I will rst discuss methods that straightforwardly implement dynamical simulation along
with a connection to a heat reservoir. The dynamical aspect derives from the early work on
\molecular dynamics" (Alder and Wainwright, 5:1959). On its own, dynamical simulation
samples from the microcanonical distribution for states at a given total energy. Rather
surprisingly, it was apparently not until much later, with the work of Andersen (5:1980), that
the idea of introducing a stochastic element in order to instead sample from the canonical
distribution was thought of. (This delay may perhaps be explained by the fact that for many
applications in statistical physics either distribution may be used, since they are equivalent
in the thermodynamic limit.)
Phase space. Suppose that we wish to sample from the canonical distribution for a set
of real variables, Q = fQ1; . . . ; Qng, with respect to the potential energy function, E (q),
assumed to be di erentiable with respect to the qi. Taking the temperature to be one, for
convenience, this canonical distribution is
                                P (q) = Z1 exp E (q)
                                                         
                                                                                   (5.1)
                                            E


                                             70
                           5.1 The stochastic dynamics method

where ZE is a constant such that the distribution integrates to one. For a real molecular
dynamics problem, the Qi might be the position coordinates for the molecules being simu-
lated (three coordinates for each particle). For a problem in Bayesian statistical inference,
the Qi might be the unknown model parameters. I will refer to the Qi as the \position"
variables even when such usage is strictly metaphorical.
We introduce another set of real variables,
                                   P          P = fP1; . . . ; Png, one Pi for each Qi, with a
kinetic energy function, K (p) = 21 i p2i . The canonical distribution for these variables is
                P (p) = Z1 exp K (p) = (2) n=2 exp 12 p2i
                                                                     P 
                                                                                         (5.2)
                             K                                         i
I.e. the Pi are independent, and have Gaussian distributions with zero mean and unit vari-
ance. For a molecular dynamics problem, the Pi have real signi cance | they are the
components of the momentum for the various particles. For other problems, the Pi are
introduced solely to allow the problem to be given a dynamical formulation. They will
nevertheless be referred to as the \momentum" variables.
The combination of the position and momentum variables is known as phase space. The
total energy function for points in phase space, known as the Hamiltonian, is
                                                                  P
                     H (q; p) = E (q) + K (p) = E (q) + 21 p2i                           (5.3)
                                                                 i
The canonical distribution over phase space de ned by this energy function is
                  P (q; p) = Z1 exp H (q; p)
                                                  
                                                                                        (5.4)
                                 H
                                                                     
                           = Z1 exp E (q)  Z1 exp K (p)
                                                                     
                                                                                        (5.5)
                                  E                     K
                           = P (q) P (p)                                                (5.6)
The distribution for Q from which we wish to to sample, given by equation (5.1), is therefore
just the marginal distribution for Q with respect to the canonical distribution over phase
space. If we can nd some way of sampling from this distribution over phase space, we can
obtain a sample of values for Q by just ignoring the values we obtained for P .
Hamiltonian dynamics. We can use the Hamiltonian function to de ne a dynamics on
phase space, in which the qi and pi are regarded as functions of a \time" parameter,  ,
satisfying the following dynamical equations:
                                  dqi = + @H = p                                       (5.7)
                                  d         @pi       i
                                  dpi = @H = @E                                        (5.8)
                                  d         @qi         @qi
For a real physical system,  will represent actual physical time. In statistical problems,
the \time" is entirely arti cial. This continuous time parameter, written as  , should be
distinguished from the discrete time parameter of a Markov chain, written as t.
The value of H (the total energy) is conserved as qi and pi evolve through time according
to the above dynamics. This is easily seen as follows:
                                                                      
      dH = X @H dqi + @H dpi = X @H @H                           @H @H = 0             (5.9)
       d         i @qi d        @pi d         i @qi @pi       @pi @qi

                                             71
                            5.1 The stochastic dynamics method

The dynamics also preserves the volumes of regions of phase space | i.e. if we follow how
the points in some region of volume V move according to the dynamical equations, we nd
that the region where these points end up after some given period of time also has volume
V . We can see this by looking at the divergence of the motion in phase space:
                                           X  @H                
          X      @ dqi + @ dpi               =                     @H       = 0          (5.10)
            i @qi d          @pi d              i @qi @pi @pi @qi
This result is known as Liouville's theorem.
Finally, the dynamics can be followed backward in time, with a result that is the inverse of
following the dynamics forward in time for the same duration.
Together, these properties imply that the canonical distribution of equation (5.4) is invariant
with respect to any transformation that consists of following Hamiltonian dynamics for some
pre-speci ed period of time. To see this, consider any small region in phase space, of volume
V , where the total energy, H , is H0 . The probability of being in this region after the
transformation is just the probability of being at some point that maps to this region before
the transformation. Due to Liouville's theorem and the invertibility of the transformation,
the region containing such points also has volume V , and due to energy conservation, points
in this region also have total energy H0. It follows that if the probability density before the
transformation is given by the canonical distribution, which depends only on H , then the
transformed points will also have a canonical distribution.
Clearly, however, following Hamiltonian dynamics does not sample points from the canonical
distribution ergodically, since the total energy remains constant. At most, it may sample
from the microcanonical distribution for a given energy. Later we will see how to introduce
stochastic transitions that can move the system to states of di erent total energy.
The \leapfrog" discretization. In practice, we cannot follow the dynamics de ned by
equations (5.7) and (5.8) exactly, but must instead discretize these equations using some
non-zero time step, inevitably introducing some error. It is, however, both possible and
desirable to use a discretization for which Liouville's theorem still holds exactly. This
ensures that the discretization errors will not lead to such qualitatively wrong behaviours
as convergence of all points to an attracting point. Preserving phase space volume will also
be crucial for the hybrid Monte Carlo method of Section 5.2.
The leapfrog discretization is a commonly used scheme that preserves phase space volume
and is also time reversible (which will also prove important for the hybrid Monte Carlo
method). A single leapfrog iteration calculates approximations to the position and momen-
tum, q^ and p^, at time  +  from q^ and p^ at time  as follows:
                         p^i ( + 2 ) = p^i( ) 2 @E
                                                                   
                                                        @qi q^( )                           (5.11)
                           q^i ( + ) = q^i( ) +  p^i ( + 2 )                           (5.12)
                          p^i ( + ) = p^i( + 2 ) 2 @E
                                                                               
                                                            @qi    q
                                                                   ^ (  +  )               (5.13)
This consists of a half-step for the pi , a full step for the qi, and another half-step for the qi.
(One can instead do a half-step for the qi, a full step for the pi, and another half-step for
the qi, but this is usually slightly less convenient.) To follow the dynamics for some period
of time,  , a value of  that is thought to be small enough to give acceptable error is

                                                72
                            5.1 The stochastic dynamics method

chosen, and equations (5.11) to (5.13) are applied for = iterations in order to reach the
target time. When this is done, the last half-step for pi in one iteration will be immediately
followed by the rst half-step for pi in the next iteration. All but the very rst and very
last such half-steps can therefore be merged into full steps starting at times  + k + =2,
which \leapfrog" over the steps for the qi that start at times  + k.
For smooth energy functions, as  approaches zero, the error in following the dynamics for a
time  using the leapfrog method approaches zero (while the number of iterations required
to do this approaches in nity). The magnitude of the error in the coordinates at the end of
the trajectory is O(2 ).
To see informally why the error should be of this order, consider rst the local error in a
half-step for p that starts with exact values for p( ) and q( ). This is
                                                                R                 
          p^  + 2 p  + 2 = p( ) 2 F ( )                 p( ) 0+ 2 F ( +  ) d   (5.14)
                                                     R +                
                                          2 F ( ) + 0
                                 =                        2 F ( ) + O( ) d             (5.15)
                                                                    2
                                 =        2 F ( ) + 2 F ( ) + O( )                     (5.16)
                                 = O( ) 2                                                (5.17)
where F ( ) = E 0(q( )). The error in a full step for p that starts with exact values is of
smaller order:
                                                              R                 
     p^  +  p  +  = p( ) F  + 2                     p( ) +22 F  + 2 +  d (5.18)
                                              
                           =        F  + 2                                              (5.19)
                                          R +             
                                                                  0      
                                                                                2  
                                       + 2 F  + 2 + F  + 2 + O( ) d (5.20)
                                              2
                                                               
                            =       F  + 2 + F  + 2 + O(3)                          (5.21)
                            = O(3 )                                                       (5.22)
A full step for q starting with exact values for q( ) and p( + 2 ) also gives an error that is
O(3).
Of course, we are really interested in the global error that takes into account the fact that
all but the rst half-step of the trajectory starts with the inexact values for p and q from the
previous step. Simulating the dynamics for a time  using a stepsize of  requires O(1=)
full steps. As one would informally expect, the errors in each step accumulate additively,
giving a total error that is O(2) for the whole series of full steps for q and p. Adding in the
O(2) error from the half steps at the beginning and end of the trajectory leaves the total
error at O(2).
Actually, the error in the trajectory is, in itself, of no signi cance for sampling applications.
What does matter is the error in the value of the total energy, H , and this will generally be
of the same order. Hence, whereas for the true dynamics, H remains constant, it will not
be exactly constant when the dynamics are simulated using the leapfrog method, except in
the limit as  approaches zero. This will introduce some systematic error into the sampling.
It is, however, easy to see that the leapfrog method is exactly time-reversible | i.e. that
applying it with a negative value of  undoes the e ect of applying it with the corresponding
positive  | and that it preserves phase space volume. In fact, each of steps (5.11) to
(5.13) preserves phase space volume individually, since they each increment or decrement

                                               73
                            5.1 The stochastic dynamics method


            y                                             y0




                                 x                                             x0
Figure 5.1: Illustraton of volume conservation by a shear transformation. The region on the left is
transformed according to x0 = x, y0 = y + f (x), for some function f (). That this transformation
preserves the volume can be seen by visualizing what happens to a narrow vertical strip of the
original region | it may be shifted vertically, but its length and width remain the same, and it
does not end up overlapping other such strips.

one of the qi or pi by an amount that depends only on the other coordinates, producing
a \shear" transformation that does not alter a region's volume. (This property of shear
transformations is illustrated in Figure 5.1.) Note that this relies on the Hamiltonian being
the sum of a potential energy term, which is a function only of position coordinates, and a
kinetic energy term, which is a function only of momentum coordinates. For Hamiltonians
where the position and momentum interact, Liouville's theorem still holds for the true
dynamics, but not for the leapfrog discretization (except in the limit as the stepsize goes to
zero).
I have assumed above that the arithmetic in equations (5.11) to (5.13) is exact. When
  oating-point arithmetic is used, the leapfrog method will generally not be exactly time
reversible, since the identity (a + b) b = a does not hold in oating-point arithmetic. Exact
time-reversibility can be achieved by representing the qi and pi as xed-point numbers, and
performing the increments and decrements of equations (5.11) to (5.13) using xed-point
arithmetic. Exact conservation of phase space volume is then ensured by the fact that each
discretized, xed-point state corresponds to the same volume in real-valued state-space.
The advantages of a xed-point representation are discussed by Earn and Tremaine (5:1992).
For our purposes, however, the e ects of oating-point round-o errors may be minor, as
they are probably overwhelmed by the stochastic transitions that will be discussed next.
Stochastic dynamics. If we ignore the changes in H caused by discretization errors,
simulating Hamiltonian dynamics for some pre-de ned period of time, using the leapfrog
discretization with some pre-de ned stepsize, leaves the canonical distribution over phase
space invariant. Such deterministic transitions can be alternated with stochastic transitions
that are capable of changing H , and that also leave the canonical distribution invariant, in
order to produce an ergodic Markov chain that samples from the canonical distribution.
It is convenient to use stochastic transitions that change only the Pi , as then E (q) need not
be re-evaluated. The simplest choice is to just replace all the Pi by values picked from their
distribution conditional on the current qi. (This can be seen as a Gibbs sampling step.)
Since the Pi and Qi are independent in the canonical distribution of equation (5.4), the
conditional distribution for the Pi is just their marginal distribution (equation (5.2)), which
is Gaussian, and easy to sample from. This is similar to the approach of Andersen (5:1980),

                                                74
                           5.1 The stochastic dynamics method

except that he replaces only one of the Pi, which being chosen at random.
In physical terms, a stochastic transition can be viewed as representing the e ect on the
system of contact with a heat reservoir. Such contact can be of varying strength, suggesting
that we might also try controlling how large an e ect the stochastic transitions have relative
to that of the dynamical transitions. For stochastic transitions that completely replace
the Pi with newly chosen values, such control can be exercised by adjusting the duration
of the dynamical trajectories simulated between stochastic transitions. An alternative is
to simulate only short trajectories (perhaps just a single leapfrog iteration), but to use
stochastic transitions of the following form:
                                 p0i = pi + (1 2)1=2ni                                   (5.23)
where ni is drawn from a Gaussian distribution with zero mean and unit variance. Here, is
a parameter that controls how much e ect the stochastic transitions have, with 0  < 1.
One can easily show that the canonical distribution is invariant under the above transition.
Setting to zero in equation (5.23) gives the previous method of just replacing the momenta.
If this is done after every leapfrog iteration, there is a large random walk aspect to the
motion, which is generally undesirable. When is set to a value only slightly less than
one, the momenta are only slightly altered in each stochastic transition, much reducing this
e ect. These issues will be discussed further later. Use of a weak connection to the heat
reservoir also relates to the technique of simulated annealing discussed in Section 6.1.
In addition to allowing points in phase space with di erent total energies to be visited,
stochastic transitions also help ensure that all points of a given energy are accessible, i.e.
that the Markov chain is ergodic. Cases where the chain is still not ergodic do exist, however
(see Section 5.4).
Other discretization schemes. The leapfrog discretization is not the only one that
preserves phase-space volume. A number of other \canonical" or \symplectic" discretiza-
tions having this property (in fact, strong properties) have been identi ed in recent years.
References to this work may be found in Section 5 of the bibliography. Some of these dis-
cretizations are accurate to a higher order than the leapfrog method, though they require
more evaluations of the energy gradient for each iteration.
It is also possible to construct composite discretizations by applying a series of leapfrog
steps (or steps of other symplectic methods), each of which operates on a subset of the state
variables, or is based on a subset of the terms in the energy function.
Sexton and Weingarten (5:1992) discuss such a scheme, applicable when the potential energy
can be written as E (q) = E0 (q) + E1(q), where the derivatives of E0 can be calculated
much more quickly than those of E1. These characteristics can be exploited by using an
elaboration of the leapfrog discretization in which each iteration consists of the following
series of updates to q and p:
                         p      p (=2) @E1 =@q
                                         8
                                         >
                                         <
                                             p      p (=2n) @E0=@q
                         Repeat n times: > q        q + (=n) p                        (5.24)
                                         :
                                             p      p (=2n) @E0=@q
                         p      p (=2) @E1 =@q

                                              75
                             5.1 The stochastic dynamics method

With n = 1, this is equivalent to the usual leapfrog method. Using a larger value for
n reduces the discretization error associated with E0, without signi cantly increasing the
computation time (since @E0 =@q is assumed to be easy to calculate). This scheme might be
useful when sampling from a Bayesian posterior distribution, with E0 being minus the log
of the prior (usually a simple function), and E1 minus the log of the likelihood.
Many workers in the neural network eld favour \on-line" learning methods, in which pa-
rameters are updated on the basis of each training case in turn, rather than on the basis
of the entire training set. They argue that most training sets contain considerable redun-
dancy, with many training cases contributing only a small increment of information about
the parameters. In such circumstances, computing the likelihood for each iteration using all
the training cases seems wasteful.
In the context of dynamical simulation, this philosophy might lead us to write the potential
energy for a Bayesian inference problem in the following form:
                                  C h                                C
                  E (q) = C1         P0(q) + CLi (q) = C1 Ei (q)
                                 X                   i             X
                                                                                                 (5.25)
                                 i=1                                i=1
where P0 is minus the log of the prior, and Li is minus the log of the likelihood for training
case i. We can now use a composite discretization for the dynamics in which each full
iteration is composed of leapfrog iterations for E1 ; . . . ; EC ; EC ; . . . ; E1 in succession. Note
that this combination preserves time reversibility, which will be important for the hybrid
Monte Carlo method. If the training set were completely redundant, so that all the Ei were
actually identical, and equal to the full E , we could use the same stepsize for each of these
component iterations as we could in the ordinary leapfrog method. We would then be able
to move a given distance while using only a fraction 1=C of the computing time required
with the usual method (assuming that the computation is dominated by the time required
to evaluate the Li ). In practice, we would likely have to use a somewhat smaller stepsize,
but a large gain might still be possible.
For problems with a \local" structure, it may be interesting to consider composite discretiza-
tions in which each component step changes only a subset of the variables. This could be
useful if recomputation after a change of state con ned to variables in such a subset can be
done locally at much less cost than is required to recompute after a change to all variables.
Applications of the stochastic dynamics method. Dynamical methods have histori-
cally been applied primarily to the simulation of classical physical systems, perhaps because
in these applications the dynamics has a direct interpretation. Recently, there have been
important applications to quantum chromodynamics, using a dynamics that is arti cial.
Other applications outside the traditional domain, such as to statistical inference, may be
equally attractive.
Example: Lennard-Jonesium. The archetypal application of these methods is to the \molec-
ular dynamics" simulation of real or hypothetical substances | Lennard-Jonesium being
an example of the latter. The partial derivatives of the energy of equation (2.57) with re-
spect to the position coordinates of the molecules are straightforward to obtain, allowing
the dynamics to be simulated by the leapfrog or other methods. As with the applications
of the Metropolis algorithm to this system, the very small e ects of distant molecules are
often ignored, in which case the computations are \local", and the computation time scales
linearly with the size of the system, assuming that the time to settle to equilibrium and the
signi cance of the error introduced by a nite discretization are independent of system size.

                                                  76
                          5.2 The hybrid Monte Carlo algorithm

It appears that most such simulations are done without any stochastic element, and hence
sample from the microcanonical distribution at the original total energy. However, it was
systems such as this that motivated Andersen (5:1980) to develop the stochastic dynamics
method for sampling from the canonical distribution.
Example: Multi-layer perceptrons. In (Neal, 2:1993a), I report experiments with applying
the stochastic dynamics method to Bayesian learning for multi-layer perceptrons. The
backpropagation algorithm readily provides the derivatives of the log likelihood of equa-
tion (2.28), to which are added the easily-obtained derivatives of the log prior probability of
equation (2.42), giving the derivatives of the energy needed to perform the dynamical simu-
lations. In these experiments, the prior weight variances, u2 and v2 , and the noise variance
in the likelihood, 2, were considered unknown, which introduces some extra complexity
which will not be described here. (Automatic determination of these variances is, however,
one of the main advantages of Bayesian over conventional learning in this application.)
When the stochastic transitions of equation (5.23) are used, the algorithm is similar to
the batch version of the standard \backprop with momentum" method of neural network
training, except that the latter lacks the stochastic element. A value of very close to one
(0.999) appears to be desirable in order to avoid random walk behaviour. The experiments
in (Neal, 2:1993a) show that, with a careful choice of stepsize, this method can produce a
good approximation to the true Bayesian result in a reasonable amount of time. Further
work is needed to explore the potential of the stochastic dynamics method and compare its
merits for this problem with those of the hybrid Monte Carlo method described in the next
section.

5.2 The hybrid Monte Carlo algorithm
A Markov chain based on stochastic dynamics will sample from the correct distribution
only in the limit as the stepsize used in discretizing the dynamics goes to zero. The bias
introduced by using a non-zero stepsize is eliminated in the hybrid Monte Carlo method of
Duane, Kennedy, Pendleton, and Roweth (5:1987), which can also be seen as a form of the
Metropolis algorithm.
The hybrid Monte Carlo algorithm. Like the stochastic dynamics method, the hybrid
Monte Carlo algorithm samples points in phase space by means of a Markov chain in which
stochastic and dynamical transitions alternate. The stochastic transitions can be any of
the types used for the stochastic dynamics method, such as the update of equation (5.23).
Typically, the momenta are replaced with new values via Gibbs sampling (equivalently, by
using equation (5.23) with = 0); this form of stochastic transition will be assumed for
the hybrid Monte Carlo method unless otherwise stated. The dynamical transitions in the
hybrid Monte Carlo method are also similar to those in the stochastic dynamics method,
but with two changes | rst, a random decision is made for each transition whether to
simulate the dynamics forward in time or backward in time; second, the point reached by
following the dynamics is only a candidate for the new state, to be accepted or rejected
based on the change in total energy, as in the Metropolis algorithm. If the dynamics were
simulated exactly, the change in H would always be zero, and the new point would always
be accepted. When the dynamics is simulated with a non-zero stepsize, H may change, and
moves will occasionally be rejected. These rejections exactly eliminate the bias introduced
by inexact simulation.
In detail, given values for the magnitude of the leapfrog stepsize, 0 , and the number of

                                              77
                           5.2 The hybrid Monte Carlo algorithm

leapfrog steps, L, the dynamical transitions of the hybrid Monte Carlo algorithm operate
as follows:
     1) Randomly choose a direction, , for the trajectory, with the two values  = +1,
         representing a forward trajectory, and  = 1, representing a backward trajectory,
         being equally likely.
     2) Starting from the current state, (q; p) = (^q(0); p^(0)), perform L leapfrog steps with
         a stepsize of  = 0 , resulting in the state (^q(L); p^(L)) = (q ; p).
     3) Regard (q ; p) as a candidate for the next state, as in the Metropolis algorithm, ac- 
         cepting it with probability A((q; p); (q ; p )) = min 1; exp( (H (q ; p) H (q; p))) ,
         and otherwise letting the new state be the same as the old state.
The values used for 0 and for L may be chosen at random from some xed distribution.
Indeed, as discussed in Section 5.4, choosing at least one of them at random may sometimes
be necessary in order to ensure that the chain is ergodic. Generally, it is good for the number
of leapfrog steps, L, to be reasonably large, as this reduces the random walk aspect of the
motion.
To prove that the hybrid Monte Carlo method leaves the canonical distribution over phase
space invariant, we could proceed by showing that the distribution used to propose candidate
states in the above procedure satis es the the general symmetry condition required for the
Metropolis algorithm to be valid. However, it seems more illuminating to show directly that
detailed balance holds between any two small regions of phase space, R and R0 , where R0 is
the image of R under the mapping produced by L forward leapfrog steps, with stepsize +0.
Due to time reversibility, R is the image of R0 under the mapping produced by L backward
leapfrog steps, with stepsize 0 . Since the leapfrog steps conserve phase space volume, if
the volume of R is V , the volume of R0 is V as well. We assume that R is small enough
that at all points within it the total energy can be considered to have the same value, H (R),
and similarly for R0 .
The probability of a transition from R to R0 occurring, when the starting point has the
canonical distribution, is therefore
               1 exp H (R) V  1  min 1; exp (H (R0 ) H (R))                          (5.26)
              ZH                         2
The rst factor above is the probability of starting at a point in R. The second factor, 21 , is
the probability of deciding to simulate the dynamics forward in time, leading to a point in
R0. The third factor is the probability of accepting that move. Similarly, the probability of
a transition from R0 to R is
               1 exp H (R0 ) V  1  min 1; exp (H (R) H (R0 ))                        (5.27)
              ZH                         2
The two probabilities are readily seen to be equal, showing that detailed balance holds.
(Here, I have assumed that the image of R under the forward mapping does not overlap its
image under the backward mapping, but taking this possibility into account would not alter
the result.)
As pointed out by Duane, et al (5:1987), it is not necessary for the Hamiltonian used in
simulating the dynamics to be the same as that which de nes the canonical distribution from
which we wish to sample. The algorithm remains valid as long as the correct Hamiltonian
is used when deciding whether to accept a candidate state. Of course, generating candidate

                                               78
                          5.2 The hybrid Monte Carlo algorithm

states by following trajectories based on a drastically wrong Hamiltonian will lead to a very
low acceptance rate. One might, however, deliberately use a slightly \wrong" Hamiltonian
in an attempt to improve the acceptance rate by compensating for the inexact simulation
of the dynamics.
Variations on the hybrid Monte Carlo algorithm. Two variations on the basic hybrid
Monte Carlo algorithm have recently been developed.
Horowitz (5:1991) introduced a modi ed form of the algorithm in which the momenta are
not completely replaced in the stochastic transitions, but are instead perturbed only slightly,
using the update of equation (5.23) with close to one. This is coupled with the use of very
short trajectories, perhaps consisting of only a single leapfrog step.
In the formulation of hybrid Monte Carlo I have given above, this procedure would be valid,
but rather pointless | in my description, the direction in which a trajectory is simulated
(i.e. the sign of the stepsize) is chosen at random each time, so keeping the old momenta
largely intact will not prevent the algorithm from undertaking a random walk between
trajectories (which, up to a point, is less desirable than persevering in the same direction).
However, Horowitz modi es the dynamical transitions to operate as follows. First, simulate
a dynamical trajectory with positive stepsize, then negate the momenta, then accept or
reject the resulting state in the usual Metropolis fashion. Second, unconditionally negate
the momenta. It is easy to see that both the rst and second of these steps satisfy detailed
balance, so the procedure is valid.
The purpose of the two (possible) negations of the momenta is to achieve the nal e ect that
the momenta are negated only when a trajectory is rejected. The whole procedure would be
pointless if it were combined with the usual stochastic transitions, in which the old momenta
are completely forgotten anyway. When the momenta are only slightly perturbed, however,
the modi ed procedure ensures that random walk behaviour occurs only as a consequence
of rejections, which one may hope to keep to a low level.
This modi ed algorithm will probably not perform vastly better than the standard algo-
rithm. When using trajectories with only a single leapfrog step, the rejection rate will be
determined by the O(3 ) local error of the leapfrog method, rather than by the O(2) global
error that applies to the standard algorithm (with long trajectories). However, to achieve
an e ect equivalent to a single long trajectory of the standard algorithm, the modi ed al-
gorithm must proceed the same distance without a rejection occurring. This will require a
number of steps proportional to 1=, so the probability of a rejection being avoided during
the process will be O(2 ), just as for the standard algorithm. However, this argument does
not exclude the possibility that the modi ed algorithm might be a modest improvement
over the standard algorithm in some circumstances. For a multivariate Gaussian, the mod-
i ed method may be most appropriate when max =min is not too large. This ratio controls
the number of leapfrog iterations in a trajectory of optimal length; as it becomes larger,
producing the e ect of a long trajectory with the modi ed method will necessitate use of a
smaller stepsize than for the standard method, in order to ensure that reversals in direction
do not occur more frequently than is optimal.
I have developed a \windowed" form of the hybrid Monte Carlo algorithm (Neal, 5:1993).
One motivation for this variation is the observation that the usual hybrid Monte Carlo algo-
rithm appears somewhat wasteful, in that of the L new states visited along the trajectory,
only the one state at the end has any chance of being chosen as the next state in the chain.
If additional states along the trajectory could be considered as candidate states, one might

                                              79
                           5.2 The hybrid Monte Carlo algorithm

expect that the probability of a new state being accepted would increase.
The windowed algorithm achieves this by employing an \accept window", consisting of the
last W states in the trajectory, and a \reject window" consisting of the rst W states, with
1  W  L + 1. Whereas the standard algorithm decides whether to accept or reject a
move to the single state at the end of the trajectory, based on the ratio of the probabilities
of this new state and of the current state, the windowed algorithm decides instead whether
to move to the accept window or to remain in the reject window, based on the ratio of the
sum of the probabilities of all states in the accept window to the sum of the probabilities
of all states in the reject window. Having in this way decided from which window the next
state will come, a particular state from among those in that window is then chosen based
on their relative probabilities.
In order to ensure that detailed balance still holds when this procedure is used, it is necessary
that the current state be positioned at random within the reject window. This is arranged
by performing from zero to W 1 of the L leapfrog steps in the opposite of the primary
direction of the trajectory, starting from the current state. The remaining leapfrog steps
are performed as usual, also starting from the current state.
The use of accept and reject windows reduces the e ect of variations in H along the trajec-
tory, and is seen empirically to increase the probability of acceptance for a given stepsize.
As will be discussed in Section 6.3, it also becomes possible to utilize all the states in both
windows when estimating the expectation of a function of the state. When W  (L + 1)=2,
all states along the trajectory will be in at least one of these windows, and all will then
contribute to the estimate. On the other hand, use of windows requires that time be spent
computing parts of the trajectory in the reject window that precede the current state, as
well as parts of the trajectory in the accept window that turn out to extend past the state
that is accepted. One must also evaluate the energy for all states in both windows, rather
than for just the single state at the end of the trajectory.
Applications of the hybrid Monte Carlo method. The hybrid Monte Carlo algorithm
was devised for use in simulations of quantum chromodynamics. The algorithm has a wide
range of other potential applications, however, including to physical simulations of other
sorts, and to problems of probabilistic reasoning and statistical inference. These include
inference for belief networks in which the variables are continuous, and Bayesian learning of
latent class models using the formulation of equation (2.46), in which the discrete variables
are summed over. However, as yet, the only application to Bayesian inference that has been
published is for multi-layer perceptrons, as described below.
For problems where the hybrid Monte Carlo algorithm is appropriate, use of the stochastic
dynamics method will usually be reasonable as well. In comparing these options, the hybrid
Monte Carlo method o ers the assurance that the results are (asymptotically) unbiased.
Using too large a stepsize with hybrid Monte Carlo produces the easily diagnosed problem
of too high a rejection rate. With the stochastic dynamics method, the same mistake might
introduce a degree of bias that is unacceptable, but which goes unnoticed.
As pointed out by Toussaint (1:1989), two other factors in choosing between the algorithms
are the degree of accuracy required and the size of the system. As the required accuracy
increases, the stochastic dynamics method must be run with an increasingly small stepsize
in order to reduce bias. In contrast, once the rejection rate for the hybrid Monte Carlo
method is acceptably low, there is no reason to reduce the stepsize any further, regardless of
accuracy requirements. On the other hand, as the size of the system increases, the stepsize

                                               80
                              5.3 Other dynamical methods

for the stochastic dynamics method can generally stay unchanged, but, as discussed further
below, the stepsize for the hybrid Monte Carlo method will have to decrease with increasing
system size in order to maintain a low rejection rate. The tradeo between these factors
will depend on the particular application.
Example: Multi-layer perceptrons. I have experimented with applying the hybrid Monte
Carlo method to Bayesian learning for a multi-layer perceptron with the architecture of
Figure 2.3 (Neal, 2:1992a, 2:1993a). As described for the stochastic dynamics method,
the derivatives required to compute the dynamical transitions for the hybrid Monte Carlo
method are readily obtained by backpropagation. The performance of the algorithm is
fairly sensitive to the choice of stepsize, with the optimal stepsize being not much below a
value at which the rejection rate becomes unacceptably high. Quite long trajectories (1000
leapfrog steps) were found to be desirable. A number of variations on the basic technique
are described in the references, including use of re-parameterizations in which the prior is
  at, and of simulated annealing. A clear picture of which techniques give the best results
has not yet been attained, but it is clear that use of the hybrid Monte Carlo method for
this application is feasible for problems of moderate size.

5.3 Other dynamical methods
Here, I will discuss other Markov chain methods that are \dynamical" in the sense that
they make use of the derivative of the energy function (the \force").
The Langevin Monte Carlo method. In the hybrid Monte Carlo method, after picking
new values for the momentum variables from the canonical distribution, one can choose
to select a candidate state by following the dynamics for only a single leapfrog iteration
(equations (5.11) to (5.13)), accepting or rejecting the resulting state based on the change
in the total energy. This procedure is known as the Langevin Monte Carlo method (from the
relationship to the \Langevin equation", described below). As is the case with the hybrid
Monte Carlo method in general, it produces exactly unbiased results.
Though in a sense it is a special case of hybrid Monte Carlo, the Langevin Monte Carlo
method has rather di erent performance characteristics. Consider the family of Langevin
Monte Carlo methods obtained by varying the stepsize, , and the family of hybrid Monte
Carlo methods obtained by varying  while keeping the length of the trajectory xed (varying
the number of leapfrog steps to compensate for the change in ). The error in the total energy
that results when a single leapfrog step is used to nd a candidate state in the Langevin
Monte Carlo method will depend on the local error of the leapfrog method, which is O(3 )
(see Section 5.1). In contrast, the error in the total energy in the hybrid Monte Carlo method
with xed trajectory length is determined by the global error, which is O(2). Accordingly,
for a given limit on the rejection rate, the Langevin Monte Carlo method can be used with a
larger stepsize than can the hybrid Monte Carlo method. On the other hand, the Langevin
Monte Carlo method has the disadvantage that, unlike the hybrid Monte Carlo method,
it must explore the state space via a random walk. This di erence is illustrated below in
Section 5.4.
The smart Monte Carlo method of Rossky, Doll, and Friedman (5:1978) is equivalent to the
Langevin Monte Carlo method, though it is expressed in somewhat di erent fashion.
The uncorrected Langevin method. We can consider omitting the acceptance test
in the Langevin Monte Carlo method, simply accepting all the proposed moves. In this

                                             81
                                        5.3 Other dynamical methods

case, it is not necessary to compute the nal values of the momentum variables at the end
of the leapfrog step, since they will immediately be replaced by new values chosen from
the canonical distribution at the start of the next iteration. In fact, there is no reason to
explicitly represent the momenta at all. The e ects on the position coordinates of picking
new momenta and then applying one leapfrog step can simply be expressed by the following
form of the Langevin equation:
                                               2
                                qi0 = qi 2 @E
                                                      
                                                 @qi q + ni                            (5.28)
where the ni are independently chosen from a Gaussian distribution of mean zero and
variance one.
From the Langevin equation, it is clear that moving a given distance under the in uence
of the \force", @E=@q, will require a number of iterations proportional to  2 . Moving a
given distance as a result of the random term in the equation (e.g. when exploring a region
of constant energy) will require a number of iterations that is also of that p order, as in N
iterations, the distance travelled by the random walk will be only about  N , not N , due
to the continual randomization of direction.
Use of the Langevin equation without an acceptance test may appear to be a special case of
the uncorrected stochastic dynamics method, but this is not really so. Stochastic dynamics
is justi ed on the basis that it produces the correct distribution in the limit as the step-
size approaches zero, while the length of the trajectories remains xed. In the uncorrected
Langevin method, the length of the trajectory is equal to the stepsize, so the justi cation
does not apply. Indeed, for some discretizations other than the leapfrog method, that are
valid for stochastic dynamics, the corresponding \Langevin" method is invalid.7
However, one can see that simulating a Markov chain using the transitions of equation (5.28)
results in a Boltzmann distribution for the qi , in the limit of small , by considering the
e ect that reducing  would have in an application of the corresponding Langevin Monte
Carlo method. As seen above, for a Langevin simulation to move a given distance in state
space, the number of iterations will have to grow as  2 as the stepsize decreases, while the
rejection rate for the Langevin Monte Carlo method will decrease as 3. The total number
of rejections expected as the Langevin Monte Carlo method explores the entire state space
will therefore be proportional to . For a small enough , the probability of any moves being
rejected will be negligible, and hence omitting the rejection test will be unlikely to a ect
the results.
Other approaches. The force bias method of Rao, Pangali, and Berne (5:1979) is similar
to the Langevin Monte Carlo method, in that it uses the derivative of the energy at the
current point (the \force") to generate a candidate state for the Metropolis algorithm.
Unlike the Langevin Monte Carlo method, however, the state is not found by a procedure
involving momentum variables. Instead a candidate state is chosen from within some region
around the current state, with a bias toward states that lie in the direction of the force, as
evaluated at the current state. This state is then accepted or rejected using the acceptance
function of equation (4.33), which accounts for the fact that such a proposal distribution is
not necessarily symmetrical. The behaviour of this method should be similar to that of the
Langevin Monte Carlo method.
7   Consider the discretization q^i ( + ) = q^i ( ) + p^( ), p^i ( + ) = p^i ( ) (@E=@qi)(^qi( )), for which
    the corresponding \Langevin" method is qi0 = qi + ni | i.e. we simply add noise to the qi , ignoring the
    energy function entirely!


                                                          82
                     5.4 Analysis of the hybrid Monte Carlo algorithm

Nose dynamics (Nose, 5:1984) is a method for sampling from the canonical distribution with-
out introducing a stochastic element. In this approach, the system of interest is extended
with additional position and momentum variables. A Hamiltonian for this extended system
is then de ned, and the system simulated using some discretization of Hamiltonian dynam-
ics. Assuming ergodicity, this procedure will sample from (close to) the microcanonical
distribution for the extended system. The extended system is designed so that the marginal
distribution of the original variables with respect to this microcanonical distribution is the
original canonical distribution, from which we wished to sample.

5.4 Analysis of the hybrid Monte Carlo algorithm
Work on analysing the performance of the hybrid Monte Carlo algorithm has concentrated
on explicating its behaviour when sampling from a Gaussian distribution. Typically, the
hybrid Monte Carlo algorithm is applied to more complex problems, but performance on
Gaussian distributions may be indicative of general performance, at least in the negative
sense that a method slow to sample from a Gaussian distribution will be slow to explore
locally Gaussian regions of a more complex distribution.
The hybrid Monte Carlo algorithm for a univariate Gaussian. A univariate Gaus-
sian distribution with mean zero and variance 2 can be represented as the marginal distri-
bution for a \position" variable Q with respect to the canonical distribution given by the
following Hamiltonian:
                               H (q; p) = 21 2 q2 + 12 p2                          (5.29)
A single iteration of the leapfrog method (equations (5.11) to (5.13)) applied with this
Hamiltonian produces a linear mapping from the point in phase space at time  to the point
at time  + , which can be written in matrix form as follows:
              "            #       "                                        #"        #
                 q( + )                 1 2=22                            q ( )
                              =                                                             (5.30)
                 p( + )              (=2 )(1 2=42 ) 1 2=22             p( )
When  > 2, repeated application of this transformation results in rapid divergence of q,
p, and H . When  < 2, however, the leapfrog method is stable, and the transformation
matrix above can be written as M = S 1 RS , where
       "      p                  #        "                                 p             #
           1 1 2=42 0                           1 2=22            (=) 1 2=42
  S=                               ; R=               p                                     (5.31)
                   0           1               (=) 1 2 =42             1 2 =22
The matrix S represents a rescaling of q; the matrix R can be recognized as a rotation
through an angle of arccos(1 2=22). The e ect of each leapfrog iteration in this case
is therefore to move some distance around an ellipse in phase space. This is illustrated in
Figure 5.2.
Several conclusions may be drawn from this analysis. First, when the hybrid Monte Carlo
method is used with long trajectories, consisting of many leapfrog iterations, it is essential
that the stepsize be small enough to ensure stability, as otherwise the value of H will rapidly
diverge, and the probability of acceptance will be extremely low. Second, as long as the
stepsize is in the stable region, the error in H , at least for this example, does not grow larger
and larger as the number of leapfrog iterations is increased. Instead, H oscillates as the
current point moves around the ellipse, as seen in Figure 5.2. Of course, in this univariate
example, simulating a long trajectory that goes around this ellipse many times would simply

                                               83
                     5.4 Analysis of the hybrid Monte Carlo algorithm



    +1




     0




    -1
     p


             q      -2              -1                     0        +1              +2

Figure 5.2: Phase space depiction of the operation of the leapfrog method applied to the Hamiltonian
of equation (5.29), with  = 1. Fifty leapfrog steps with  = 1:8 are shown, starting at the point
marked in the lower left quadrant. The circle on which the true trajectory lies is shown as well.
Note that the value of H at any point in this diagram is simply half the square of the distance from
the origin.

be a waste of time, but we will see below that long trajectories are useful in multivariate
problems.
Mackenzie (5:1989) has pointed out that the hybrid Monte Carlo method can fail to be
ergodic for problems of this sort. This will occur if the stepsize and the number of leapfrog
iterations used are such that the trajectory returns exactly to its starting point. Note that
whether this happens does not depend on the value randomly chosen for the momentum
before each trajectory. If the trajectory returns close to its starting point, but not exactly
so, the method will be ergodic, but may take a very long time to reach equilibrium. These
phenomena do not occur with the Langevin Monte Carlo method, in which each trajectory
consists of only a single leapfrog iteration. Indeed, it is easy to see that the randomization
of the momentum in the Langevin Monte Carlo method is sucient to guarantee ergodicity
for any Hamiltonian.
As Mackenzie notes, this potential problem with the hybrid Monte Carlo method can easily
be avoided by chosing the stepsize at random from from within some small range.
The hybrid Monte Carlo algorithm for a multivariate Gaussian. The system
studied above, with the Hamiltonian of equation (5.29), can be generalized to a system with
several position variables (and the same number of momentum variables), with the following
Hamiltonian:
                                           X 1             X1
                             H (q; p) =              q 2 +        2
                                              i 2 2   i
                                                       i       2 pi
                                                               i
                                                                                        (5.32)
In the canonical distribution this de nes, the marginal distribution for Q is a multivariate

                                                  84
                    5.4 Analysis of the hybrid Monte Carlo algorithm

Gaussian in which the components are independent, with component Qi having mean zero
and standard deviation i . Since the operation of the hybrid Monte Carlo algorithm is
invariant with respect to translations and rotations of the coordinate system, its behaviour
when applied to the above system will also tell us its behaviour when it is used to sample
from any multivariate Gaussian distribution, in which the means may not be zero, and the
components may be correlated.
When the leapfrog method is used with the Hamiltonian of equation (5.32), there is no
interaction between the di erent pairs of position and momentum variables. Each such
pair, (qi ; pi), evolves independently of the other pairs, since the value of @E=@qi does not
depend on qj for j =   6 i. Once the end of the trajectory is reached, however, a decision to
accept or reject the nal state is made based on the total error in H , which is the sum of
the errors due to the inaccuracies in the simulation with respect to each pair of variables.
A large error resulting from inaccurate simulation with respect to any of these coordinate
pairs will likely lead to the trajectory being rejected.
The total error in H is dominated by the error relating to those qi for which i small.
Certainly, if each trajectory consists of many leapfrog iterations, we must be sure to use
a stepsize less than 2min , where min = min i, in order to ensure stability; the optimal
stepsize will be somewhat smaller than this. The same advise applies when the hybrid
Monte Carlo algorithm is used to sample from a general multivariate Gaussian distribution,
except that min is in this case the smallest standard deviation in any direction, which in
general is less than the standard deviation along any of the coordinate axes.
The need to limit the stepsize to approximately min slows the rate at which the algorithm
can explore the distribution in other directions. For the least con ned direction, where
the standard deviation is max , roughly max =min leapfrog iterations will be needed to
move across the region of high probability. This ratio is thus a measure of how dicult the
problem is.
Figure 5.3 illustrates the operation of the hybrid Monte Carlo algorithm on a bivariate
Gaussian distribution. In this example, min = 0:10 and max = 1:41. The stepsize used
was  = 0:15, which gives a reasonable acceptance rate. In Figure 5.3(a), a single trajectory
consisting of twenty leapfrog iterations is shown. Note that the path taken does not resemble
a random walk. Instead, the trajectory proceeds one way along the less con ned direction,
until it is \re ected" at one end. (The point where this re ection occurs depends on the
magnitude of the momentum in that direction, which was chosen at random before the start
of the trajectory.)
Figure 5.3(b) shows twenty successive trajectories that each consist of a single leapfrog
iteration, as are used in the Langevin Monte Carlo method. Between each leapfrog step,
new values for the momentum variables are chosen at random. Consequently, the less
con ned direction is in this case explored via a random walk.
This illustrates the crucial role that long trajectories play in the hybrid Monte Carlo method.
A trajectory consisting of around max =min leapfrog iterations, with a stepsize around min ,
will produce a candidate state for the hybrid Monte Carlo method which is almost indepen-
dent of the start state, and which has a good chance of being accepted. In contrast, to reach
an independent state via a random walk using the Langevin Monte Carlo method, in which
trajectories consist of a single leapfrog iteration, will require approximately (max =min )2
iterations. For dicult problems, where max =min is large, this di erence will be more
important than the ability of the Langevin Monte Carlo method to use a somewhat larger

                                              85
                     5.4 Analysis of the hybrid Monte Carlo algorithm




                        (a)                                                (b)
Figure 5.3: Sampling from a bivariate Gaussian distribution, (a) using the hybrid Monte Carlo
method with a trajectory consisting of twenty leapfrog iterations, (b) using the Langevin Monte
Carlo method (i.e. hybrid Monte Carlo with a trajectory consisting of just one leapfrog iteration).
One trajectory is shown in (a), twenty in (b) (except some rejected trajectories are not shown),
representing the same number of function evaluations. In both cases, the leapfrog method was used
with a stepsize of 0.15. The distribution sampled from is the same as that of Figure 4.1. Note that
only the course of the position variables is depicted; the momentum variables are not shown.

stepsize (resulting from the di erence between the local and the global discretization errors
of the leapfrog method).
Scaling with system size. The manner in which the performance of the Langevin Monte
Carlo and hybrid Monte Carlo methods scales with system size has been investigated using
general arguments by several authors (e.g. Creutz, 5:1988), and analysed in detail for the
multivariate Gaussian by Kennedy and Pendleton (5:1991). As in Section 4.4, we are here
concerned with performance on a system consisting of N independent replicas of a sub-
system.
The conclusion of these studies is that for the Langevin Monte Carlo algorithm | that is,
for hybrid Monte Carlo used with trajectories consisting of a single leapfrog iteration | the
computational e ort required to move from one state at equilibrium to an approximately
independent state is proportional to N 4=3. This is accomplished using a stepsize proportional
to N 1=6. When the Hybrid Monte Carlo algorithm is instead used with trajectories long
enough that the end point is approximately independent of the start point, the scaling
behaviour improves to N 5=4, with the stepsize used in this case being proportional to N 1=4.
In contrast, the e ort required with uncorrected stochastic dynamics simply grows as N ,
though when the sub-systems are not truly independent, one might sometimes wonder
whether the bias grows as well. The scaling of the hybrid Monte Carlo method can be
made closer to linear by using discretization schemes of higher order than the leapfrog
method, but since the associated constant factor may be larger, this will not necessarily be
advantageous in practice.


                                                86
                    6. Extensions and Re nements
This section covers several topics that apply generally to all or most of the methods de-
scribed in the preceding sections. I discuss ways of reaching equilibrium more rapidly using
simulated annealing, of estimating free energy di erences using a series of simulations, of
assessing and reducing the error in Monte Carlo estimates, and of exploiting parallel hard-
ware.
6.1 Simulated annealing
Markov chain sampling methods of all types may fail to converge to their equilibrium distri-
bution within a reasonable time if movement through state space is inhibited by regions of
high energy (low probability). The simulation may instead remain in a region of relatively
high energy and/or small volume, because movement to a region of lower energy and/or
larger volume can take place only via passage through states of very high energy, an event
that is unlikely to occur in a simulation run of limited length.
This problem can sometimes be overcome using simulated annealing. This method was
introduced for optimization problems by Kirkpatrick, Gelatt, and Vecchi (6:1983) and by
C erny (6:1985). In such applications, the goal is to sample from the canonical distribution
for a system at a temperature of zero, in which the probability is concentrated on the state
or states of minimal energy. For applications to probabilistic inference, we wish instead to
sample from a canonical distribution that reproduces some distribution of interest, usually
de ned using an energy function that gives the desired distribution at T = 1. Annealing has
occasionally been used to more easily reach equilibrium at a non-zero temperature in physical
simulations, and its use for this purpose is standard practice with the \Boltzmann machine"
of Ackley, Hinton, and Sejnowski (2:1985). However, most of the literature on annealing
assumes that the goal is to nd a minimum energy state by cooling to a temperature of
zero. Results pertaining to such optimization applications do not always apply when the
  nal temperature is non-zero.
The concept of annealing. Simulated annealing is inspired by an analogy with metal-
lurgy, in which slow cooling (annealing) is used to produce metal that is tougher than that
which results from rapid cooling (quenching). When a Markov chain simulation is used to
sample from the canonical distribution given some energy function (equation (2.54)), the
analogous procedure is to gradually reduce the temperature, T , from a high initial value
to the value at which we wish to sample. The high initial temperature reduces the e ect
of energy barriers, allowing free movement through state space. The hope is that as the
temperature is then reduced, the simulation will end up on the right side of the energy
barriers, that is, on the side where it is more likely to be under the canonical distribution
at the nal temperature.
Annealing cannot perform miracles, however. When applied to complex optimization prob-
lems, it is generally too much to expect that a practical annealing procedure will converge
to precisely the global energy minimum | the hope is merely that a state of close to mini-
mal energy will be found. Similarly, in cases where reaching equilibrium at some non-zero
temperature is dicult, one can hope that annealing will increase the chances of reaching
a region that is typical of the equilibrium distribution, but one generally cannot guarantee
this.
These hopes are based on the idea that the distribution at higher temperatures is a good
guide to the distribution at lower temperatures. This may often be the case, but it will not

                                             87
                                    6.1 Simulated annealing




     Energy




                                                  State
Figure 6.1: A problem for which annealing does not work well. The state here is one-dimensional,
with the energy of a state as shown. At low temperatures an energy barrier con nes the simulation
for long periods of time to either the small region on the left or the larger region on the right. The
small region contains the global minimum, but annealing will likely direct the simulation to the
larger region, since the tiny region in the vicinity of the global minimum has negligible in uence
on the distribution at the high temperatures where the energy barrier can easily be traversed.

always be. Figure 6.1 shows a problem where this assumption fails. The distribution at
high temperatures is here dominated by the size of the two low-energy regions, not by the
depths of their lowest points. Since the global minimum happens to be in the smaller region,
annealing will in this case direct the simulation away from the region where the equilibrium
distribution will be concentrated at very low temperatures.
Such examples are cause for caution in evaluating the prospects of success using annealing,
but they should not be taken as discouraging its general use, as no realistic procedure can
guarantee good results in all cases.
Note that annealing can be used with all Markov Chain sampling procedures, even those,
such as Gibbs sampling, that are not normally expressed in terms of energy. To sample
at a temperature of T , one simply alters the probabilities (or probability densities) of all
states by raising them to the power 1=T . (They must then be re-normalized to again sum
or integrate to one.)
Annealing schedules. The success of simulated annealing depends crucially on the sched-
ule of temperatures used in the simulation. The temperature used in generating the state
at iteration t will be denoted Tt . Discussion is usually con ned to schedules in which the
temperature is non-increasing, i.e. for which Tt+1  Tt .
The initial temperature, T1 , is generally chosen to be high enough that the canonical distri-
bution is close to uniform. When the Metropolis algorithm is used with a xed distribution
for candidate moves, a related criterion is that the temperature be high enough that the
rejection rate is very low.
Many people use schedules in which the temperature stays xed for a number of iterations,
in the apparent belief that it is necessary, or at least desirable, to approach equilibrium
at the present temperature before lowering it further. In my view, this re ects an incor-

                                                 88
                                 6.1 Simulated annealing

rect intuition. Instead, one should usually adopt the strategy of decreasing the temperature
slightly after every iteration. With such smaller temperature reductions, the degree to which
the system is no longer in equilibrium after a reduction will be lessened, which should at
least compensate for the fact that only one iteration is done at each temperature. Further-
more, the basic assumption behind the use of annealing is that the distribution at a higher
temperature is a good guide to the distribution at a lower temperature. This assumption is
more likely to be true for small changes in temperature than for large changes.
A number of pre-determined annealing schedules have been proposed, in which the schedule
of temperatures is xed before the simulation is begun. Geman and Geman (4:1984) analyse
the following logarithmic schedule:
                                 Tt = T1 = log(t); for t > 1                             (6.1)
They prove that, under certain conditions, there is a value for T1 such that use of this
schedule guarantees that the distribution will eventually be concentrated on the set of points
where the energy reaches its global minimum.
It is instructive to see informally why this should be so. Consider the case where the system
is simulated using the Metropolis algorithm and the state is decomposed into n components,
with each iteration of the algorithm visiting these components in turn, selecting a candidate
change to the component from a uniform distribution. Suppose that the maximum di erence
in energy between states is E . Then the probability of moving to any state in iteration t
when using the schedule of equation (6.1) will be at least
                            Yn 1
                                m   exp( E=Tt ) = t nE=T1 =M                           (6.2)
                            k=1   k
                                                                           Q
where mk is the number of possible values for component k, and M = k mk . The total
number of times any particular
                            P
                                  state is visited as the number of iterations goes to in nity
will therefore be at least t t nE=T1 =M , which is in nite if T1 is chosen to be at least
nE . Accordingly, with such a choice for T1 it is not possible for the system to be trapped
forever in a bad local minimum. As the temperature approaches zero, moreover, the system
will spend an increasing fraction of its time at the global minimum (or minima). Hajeck
(6:1988) gives a similar result with a better constant. The argument can also be used to
show asymptotic convergence with a logarithmic schedule for a variety of other simulation
schemes.
It should be clear from this explanation that these results are of no practical interest.
Essentially, they say that simulated annealing with a logarithmic annealing schedule retains
enough traces of exhaustive search to guarantee asymptotic convergence, but if exhaustive
search were a realistic option, we would not be using simulated annealing anyway. In
optimization applications, these logarithmic schedules are often rejected on the grounds
that they require too many iterations to reach a temperature near zero. Even if this were
not so, however, asymptotic convergence provides no reason to think that the simulation
will be near the global minimum after some reasonable nite number of iterations, even if
the temperature has at that time declined to an appropriate level. The irrelevance of these
results is even more clear for applications where the goal is not to nd the global minimum,
but rather to sample from the equilibrium distribution at some non-zero temperature
It is more common in practice to use a geometric annealing schedule, of the form
                                         Tt+1 = Tt                                       (6.3)

                                             89
                                  6.1 Simulated annealing

with 0 < < 1. T1 and are generally set by intuition or trial and error.
Adaptive annealing schedules base the temperature for the next iteration on characteristics
of the system observed in earlier iterations. The aim is to spend more time at what turn
out to be the critical temperatures, when the fundamental features of the low-temperature
state are being established. In physical systems, these are the temperatures where phase
transitions occur.
One heuristic with this motivation is to aim for a constant rate of entropy reduction. This
method was apparently rst used by Otten and van Ginneken (6:1984). Recall that the
entropy of a distribution is S = h log P (s)i. For a canonical distribution (equation (2.54)),
the entropy will be a function of temperature, and one can show that dS=dT = C=T ,
where the heat capacity, C , is de ned as C = dhE i=dT . One can also show that C =
(hE 2 i hE i2 ) = T 2. An approximately constant rate of entropy reduction can thus be
achieved using an annealing schedule of the following form:
                                                                        
                        Tt Tt+1 / T = C = Tt3 hE 2it hE i2t                               (6.4)
where h  it denotes expectation with respect to the canonical distribution at temperature
Tt . The need to estimate these expectations might provide a reason to keep the system at
a xed temperature for a number of iterations (despite the arguments to the contrary given
above).
Another heuristic has been proposed by Salamon, Nulton, Harland, Pedersen, Ruppeiner,
and Liao (6:1988). They argue in favour of using an annealing schedule that results in
\constant thermodynamic speed" | one in which the system stays the same distance from
true equilibrium at every stage. They interpret distance from equilibrium in terms of the
degree to which the mean energy departs from its mean in the equilibrium distribution
(though it is quite possible for a system to have reached the equilibrium energy distribution
but still be far from equilibrium in other respects). On this basis, they nd that the annealing
schedule should be of the following form:
                                                       p 
                                   Tt Tt+1 / T  C                                        (6.5)
where C is as above, and  is a time constant describing how rapidly the equilibrium
energy is approached, which can also be estimated from the data. From their empirical
tests, Salamon, et al, conclude that annealing schedules incorporating a factor of  1, as
above, generally perform better than those without this factor. Unfortunately, the schedule
of equation (6.4) was not included in their comparison, though they mention it in their
discussion, so the relative merits of these two heuristics are unclear.
Annealing with the Metropolis algorithm. When annealing a system of real-valued
variables simulated using the Metropolis algorithm, it seems reasonable that as the tempera-
ture is reduced, the width of the proposal distribution used to select candidate states should
be reduced as well, since at low temperatures the increase in energy that can be tolerated
while keeping the rejection rate acceptably low is smaller than at high temperatures.
To nd a reasonable approach to scaling with temperature, let us assume that most moves
are rejected because in one or more directions the current state is near the bottom of a
locally-quadratic bowl in the energy function. Large changes to the state in these directions
will move the state up the sides of such a bowl, increasing the energy, and likely leading to
rejection. For example, suppose there is just one component to the state, and the energy
is given by E (x) = x2=2. The canonical distribution at temperature T with this energy

                                              90
                                       6.1 Simulated annealing

function is P (x) / exp( x2 =2T ), which is a Gaussian with standard deviation T 1=2. Once
the state distribution has approached equilibrium, we are therefore likely to be about a dis-
tance of T 1=2 from the center of this bowl. From this starting point, changes of a magnitude
around T 1=2 have a good chance of moving to a lower energy state, and of therefore being
accepted. Changes of more than a few times this magnitude are likely to greatly increase
the energy, and therefore be rejected.
Accordingly, it makes sense to scale the magnitude of the candidate changes by T 1=2,
if one wishes to keep the acceptance rate approximately constant. As discussed in Sec-
tion 4.4, maintaining a reasonably high acceptance rate is expected to be good policy in
high-dimensional problems, though not always in lower dimensional problems.
The candidate moves for the Metropolis algorithm might change only a single component at
a time, or they might change all components at once. In either case, a Gaussian distribution
centred at the current state with a standard deviation proportional to T 1=2 is an obvious
choice for the proposal distribution that scales in the fashion recommended above. For an
optimization application, one can show that with this distribution the logarithmic annealing
schedule of equation (6.1) is guaranteed to eventually settle to the set of global minima.
Szu and Hartley (6:1987) advocate a \fast" simulated annealing method, in candidate states
di er from the current state in all components, with the o set, x, from the current state
drawn from a multi-dimensional Cauchy distribution. This distribution has the following
density:
                         P (x) / W n 1 + (jxj=W )2 (n+1)=2
                                                             
                                                                                           (6.6)
where W is a width parameter, and n is the dimensionality of the state space. Ecient
methods for generating values from this distribution are known.8 Szu and Hartley show
that with this choice for the candidate selection distribution, asymptotic convergence to the
set of global minima is guaranteed if the width of the distribution at iteration t is decreased
according to the following schedule (while the temperature also goes to zero):
                                        Wt = W1 = t                                        (6.7)
This result comes about because the tails of the Cauchy distribution drop o polynomially
with distance from the origin, rather than exponentially, as for the Gaussian distribution.
This introduces a greater element of exhaustive search into the algorithm.
Ingber (6:1989) advocates a \very fast" simulated annealing method, in which changes to the
components are drawn independently (but then applied together), from a distribution whose
tails drop o as jxij 1. (For this distribution to be proper, the range of the state must
be con ned to a bounded interval.) He shows that asymptotic convergence is guaranteed if
the width of these distributions decreases according to the schedule
                                    Wt = K exp( ct1=n )                                    (6.8)
where K and c are positive constants and n is the dimensionality of the state space.
It appears that both Szu and Hartley and Ingber envision that the temperature used in
deciding whether to accept a move may decrease according to a schedule that is not tied to
the above schedules for reducing the width parameter, Wt. This contrasts with the argument
I give above for setting Wt / Tt1=2. At least in part, this di erence may be due to the focus
8   One method is to generate independent Gaussian variables Y1 ; . . . ; Yn , with zero mean and standard
    deviation W , and another independent Gaussian variable, S , with zero mean and unit variance, and then
    let Xi = Yi =S . See also (Devroye, 9:1986, Chapter 11, Section 1.1).

                                                     91
                                         6.1 Simulated annealing

of these authors on optimization problems.9
It is important to realize that the terms \fast" and \very fast" used to describe these meth-
ods refer properly only to the schedule by which the width of the proposal distribution (and
perhaps the temperature) is reduced. There is no guarantee that these methods actually
converge to the global minimum or its vicinity any faster than other methods. As discussed
above, results on asymptotic convergence are of no practical interest. Accordingly, even
when the associated proposal distributions are used, such results do not constitute a good
justi cation for using the \fast" and \very fast" schedules in preference to others. Never-
theless, the idea of using a heavy-tailed proposal distribution seems reasonable, if it is done
in such a way as to sacri ce only a modest constant factor in local exploration in return for
the possibility of a substantial gain from large moves.
In this respect, one should note that there is a signi cant di erence between the \fast" and
\very fast" algorithms with respect to the dependency between the changes proposed to
di erent components of the state. With the multi-dimensional Cauchy distribution used in
the \fast" algorithm, the changes to di erent components are not independent | a large
change in one component is usually accompanied by large changes in other components,
likewise, when one component changes only slightly, other components also are likely to
change only slightly. This property ensures that there is a signi cant probability of con-
sidering changes that are entirely local (i.e. that involve small changes in all components),
while at the same time permitting occasional large changes to the entire state. In contrast,
the \very fast" algorithm selects changes independently for each component. This produces
a signi cantly di erent e ect in high-dimensional problems. If the selection distribution
for each component gives signi cant probability to a large change, then every move will be
very likely to involve a large change to at least one component, e ectively eliminating any
element of local search from the algorithm. If the probability of making a large change to a
component is reduced to avoid this, then almost all the large changes considered will a ect
only one or a few components. Which of these methods is better presumably depends on
the problem.
Annealing with dynamical methods. Annealing can be implemented in conjunction
with dynamical methods of simulation by explicitly scaling the potential energy function,
or by explicitly varying the distribution of the momenta used in the stochastic transitions.
However, annealing can also very naturally be added to the stochastic dynamics method in
an implicit way if the stochastic transitions of equation (5.23) are being used. All that is
required is to use a value for that is close to one, and to choose initial values for each of
the momentum variables from a Gaussian distribution of mean zero and variance T0 , where
T0 is, roughly, the desired initial temperature.
If the momentum variables did not interact with the position variables, the variance of the
momentum variables would gradually decline until it reached a value of one, corresponding
to a temperature of one, as this is the equilibrium distribution for the transitions of equa-
tion (5.23). The momentum does interact with the position variables, of course, and its
e ect is to impose a temperature on the rest of the system equal to its present variance.
The gradual \cooling" of the momentum variables leads to the entire system being annealed,
though not necessarily at the same rate as if the momentum variables were isolated, as the
9   Note that these authors use the word \temperature" to refer both to the width of the proposal distribution,
    and to the parameter controlling move acceptance probability (with occasional disambiguating quali ca-
    tions). In particular, the schedules of equations (6.7) and (6.8) are referred to as \annealing" schedules,
    and W as a \temperature" parameter. I feel this usage has the potential to introduce confusion into the
    literature, and should therefore be avoided.

                                                       92
                                   6.1 Simulated annealing

interactions allow potential energy to be converted into kinetic energy. From analogies with
statistical physics, one can see that the annealing schedule implicitly being pursued is that
of constant entropy reduction (until such time as the temperature approaches T = 1).
A system initialized to a temperature of T0 in this way will often get hotter initially, due to
the initial state of the position variables having a higher potential energy than the equilib-
rium value at T0 . It is also possible that the temperature might instead drop rapidly in the
  rst few iterations, if the initial state of the position variables had atypically low energy. To
avoid such possibilities, one can re-initialize the momentum variables after a few preliminary
iterations, thereby re-establishing the desired initial temperature.
This scheme can be used with the hybrid Monte Carlo method as well, but an additional
elaboration is needed in order for the current temperature to have the proper e ect on the
probability of accepting a trajectory. Details may be found in (Neal, 4:1992a).
Applying annealing to Bayesian inference. In Bayesian inference problems, the en-
ergy function will contain some terms representing the prior and other terms representing
the likelihood. Straightforward application of annealing will lead to the simulation initially
exploring regions of parameters space with little regard to either the prior or the likelihood,
as the e ects of terms of both kinds will be scaled down by the high temperature. This
seems undesirable, since if the prior truly represents prior beliefs about where the parameter
values are likely to lie, it should be used to guide the search even in its initial stages. (An
exception would arise if the prior itself introduced barriers to free movement through the
parameter space, but this would be unusual.)
Exempting the prior from the e ect of temperature is easily accomplished when annealing
is done explicitly | just use the modi ed canonical distribution
                             P (s) = Z1 exp EP (s) EL(s)=T
                                                                     
                                                                                           (6.9)
where EP (s) is the portion of the energy derived from the prior, and EL(s) is the portion
derived from the likelihood.
When annealing is done implicitly using a dynamical method, as described above, it is not
so clear how to prevent annealing from a ecting the prior. However, an equivalent e ect is
achieved in (Neal, 2:1992a) by transforming to a parameterization in which the prior is at.
This is always possible, though not always convenient. A at prior contributes nothing to
the energy, and hence cannot be a ected by the current temperature.
Other techniques related to annealing. Several techniques for speeding the approach
to equilibrium have recently been developed that, like simulated annealing, involve the
system being simulated at several temperatures. Unlike annealing, however, these methods
do not impose a monotonically decreasing schedule of temperatures. Instead, they either
allow the system to move between temperatures in a random walk, or simultaneously perform
simulations at a range of temperatures.
In the simulated tempering method of Marinari and Parisi (6:1992), a variable is added to
the state whose values index a set of possible temperatures, including the one of interest and
others that are higher. This variable is updated in Metropolis fashion during the simula-
tion, with changes accepted or rejected according to an \energy" function that includes the
scaling e ect of the temperature, and also contains an arti cial weighting term, intended to
approximately equalize the time spent at each temperature. (These weights might be set
on the basis of preliminary simulations.) The temperature thus moves in a random walk,

                                               93
                                6.2 Free energy estimation

occasionally taking on the value for which samples are desired, while at other times moving
to higher values at which energy barriers can be surmounted.
Rather than explicitly represent the temperature index in the simulated tempering algo-
rithm, one could instead represent only the usual system state, but perform the simulation
using the marginal probabilities of states found by summing the simulated tempering prob-
abilities for all the possible temperature indexes. The result would be essentially the same
as an algorithm of Berg and Celik (6:1992). Considered more directly, their method samples
from a multicanonical distribution, in which states of equal energy have equal probability,
and the relative probability of states with di erent energies is adjusted so as to produce an
approximately uniform distribution of energies over some range. (As with simulated tem-
pering, suitable factors for this adjustment could be found from preliminary simulations.)
When this system is simulated, it performs a random walk over states with various energies,
avoiding being trapped in local low-energy minima. By regarding the multicanonical distri-
bution as an importance sampler, estimates of expectations with respect to some canonical
distribution of interest may be obtained by applying equation (3.5).
Wang and Swedsen (6:1988) investigate a di erent approach to combining high-temperature
and low-temperature simulations. In their replica Monte Carlo method , a number of copies of
an Ising system at various temperatures are simultaneously simulated, using both standard
Metropolis moves that a ect only one of the replicas, and additional moves that transfer
information between replicas at nearby temperatures. These latter moves allow states found
in the free exploration done in the high temperature replicas to move down to the low
temperature replicas. The method Wang and Swendsen describe is speci c to the Ising
model, but similar ideas may well be applicable to other systems. Geyer (6:1991) describes
a similar method, involving multiple \Metropolis-coupled" chains, and Frantz and Freeman
(6:1990) describe a related technique.
All these algorithms have close connections with the methods of free energy estimation
discussed in the next section.

6.2 Free energy estimation
As discussed in Section 2.4, the free energy of a system is of great interest in statistical
physics. In computing science, algorithms for approximate counting of large sets require
that similar computations be carried out. Section 8 of the bibliography contains a number of
papers on the problem drawn from these elds. Methods for free energy estimation can also
be applied to Bayesian model comparison and to the estimation of rare event probabilities.
Such applications are not yet widespread, but the importance of this topic, especially for
Bayesian inference, seems clear.
Recall that the free energy of a systemR with energy function E (s), at temperature T , is
de ned as F = T log(Z ), where Z = exp( E (s)=T ) ds is the partition function. All the
methods discussed here in fact calculate only the di erence in the free energy of two systems
with the same state space but di erent energy functions, E0(s) and E1(s), or of the same
system at two di erent temperatures, T0 and T1 , or of two systems di ering in both energy
function and temperature. The partition functions for the two systems will in all cases be
denoted by Z0 and Z1 .
The free energy di erence is what is required for Bayesian model comparison, where each
system corresponds to a di erent model for the data, since from this di erence one can
easily calculate the ratio of the probabilities of the observed data under the two models.

                                             94
                                 6.2 Free energy estimation

Multiplying this by the ratio of the prior probabilities for the models gives the desired ratio
of posterior probabilities. The requirement that the state spaces of the two systems be the
same can often be accommodated by introducing dummy parameters into one of the models.
In some cases, however, it will be easiest to compare models by calculating the absolute free
energy of each, which can be done by calculating the di erence in free energy from some
reference system whose free energy can be obtained analytically.
Actually, rather than directly computing the free energy, we will instead focus on computing
the di erence log(Z1 ) log(Z0 ), or, equivalently, the ratio Z1 =Z0. Knowing log(Z1 ) log(Z0 ),
we can easily compute the free energy di erence for systems at the same temperature, though
not for systems at di erent temperatures, unless we also know the absolute free energy for
one of the systems. This last point is not important in a statistical context, where the
interesting systems all have T = 1.
Estimating the free energy using simple importance sampling. Before beginning
the general discussion, I will rst show how the free energy of a system can be estimated when
a good importance sampling function is available. Recall from Section 3.2 that in simple
importance sampling we nd expectations with respect to a distribution proportional to
f (x) by sampling from a distribution proportional to g(x). For good results, the distribution
de ned by g(x) must be close to that de ned by f (x). Using such an importance sampling
function, the ratio of the partition functions for f (x) and g(x) may be expressed as follows:
                               Zf = X f (~x) . X g(~x)                                   (6.10)
                               Zg        x~           x~
                                        X f (~ x) g(~x) . X g(~x)
                                    =                                                    (6.11)
                                         x~ g(~x)           x~
                                                       
                                       = Eg f (X )=g(X )                                (6.12)
Accurate results can be obtained by estimating the above expectation using simple Monte
Carlo methods only if the ratio f (x)=g(x) does not exhibit extreme variations. If such a
well-matched importance sampler can be found, and if the value of Zg for it can be calculated
analytically, then one can nd the absolute value of Zf .
For the problems with which this review is primarily concerned, such good importance
sampling functions cannot be found a priori. However, this method of calculating the
free energy may be applied in connection with Markov chain methods, particularly Gibbs
sampling, by constructing an importance sampler from points obtained from one or more
simulations of a Markov chain that converges to the distribution de ned by f (x). If these
points are x(0); . . . ; x(N 1), we can use the importance sampling distribution given by
                                               NX1 1
                                     g(x) =           T (x(t) ; x)                      (6.13)
                                                t=0 N
where T (x; x0) is the transition probability function for the Markov chain. While simulating
the chain requires only that one be able to sample from this transition distribution, to use the
above importance sampler one must also be able to calculate the probability of choosing a
particular point. This is possible at least in some applications of Gibbs sampling. When it is
not possible, one could try replacing T (x(t); x) in equation (6.13) by some other distribution
centred on the sample point.
This method will give good results only if the points x(0); . . . ; x(N 1), completely \cover" the

                                               95
                                 6.2 Free energy estimation

distribution de ned by f (x). Informally, every region of high probability under f (x) must
be only one transition away from a point in the sample. This will not be possible for very
high dimensional problems with a sample of any reasonable size (unless a single iteration
is nearly sucient to move anywhere in the distribution), but it may be true for some
problems of only moderate dimensionality for which Markov chain methods are nevertheless
appropriate.
This method is related to the \Gibbs stopper" convergence diagnostic of Ritter and Tanner
(4:1992), discussed in Section 6.3.
The need for intermediate systems. Returning to the problem of nding free energy
di erences for general systems, one could try calculating Z1 =Z0 directly via Monte Carlo
simulation by expressing it as follows:
                Z1 = 1 Z exp E (s)=T E (s)=T  exp E (s)=T  ds                        (6.14)
                                      0     0     1    1           0      0
                Z0        Z0
                                      
                     = exp (s) 0                                                      (6.15)
where (s) = E1(s)=T1 E0 (s)=T0 and h  i0 denotes expectation with respect to the canon-
ical distribution for system 0, de ned by the energy E0 and temperature T0 . (This formula
is actually the same as equation (6.12), but in a di erent guise.) One could also use an
analogous expression involving an expectation with respect to system 1.
Unfortunately, this method works only if the energy functions and temperatures of the
two systems are nearly the same. Otherwise, exp( (s)) may take on very large values
in regions that have very low probability under the canonical distribution for system 0.
A Monte Carlo estimate of the expectation in equation (6.15) will in such a case be very
inaccurate.
We will see that there may be better ways of estimating Z1 =Z0 than by using equation (6.15),
but virtually all such methods are likewise feasible only for systems that are suciently
similar. To nd Z1 =Z0 for two arbitrary systems, we can build a path between them via a
series of intermediate systems, labeled by the numbers 0 = 0 < 1 <    < n 1 < n = 1.
We can then express Z1 =Z0 as follows:
                             Z1         Z1 Z n 1    Z 2 Z 1
                             Z = Z
                             0          n 1   Z    n 2  Z Z
                                                          1    0
                                                                                       (6.16)
Provided that system i is in each case suciently similar to system i+1, each of the above
factors can be found by Monte Carlo methods, using the analog of equation (6.15), or one
of the other methods described below.
The series of intermediate systems needed can be constructed in various ways. If systems 0
and 1 di er only in their energy functions, for example, system could be given the energy
function
                             E (s) = (1 )E0(s) + E1(s)                                 (6.17)
If the systems instead di er in temperature, a series of systems at intermediate temperatures
can be constructed similarly.
For statistical problems, system 1 could be de ned to have as its canonical distribution
the posterior distribution for the model parameters given a set of training cases, as in
equation (2.63). System for < 1 could then be de ned in like fashion, but using only
a fraction of the full training set, with system 0 corresponding to the prior distribution.

                                              96
                                   6.2 Free energy estimation

Typically, Z0 will be easy to nd analytically, allowing an absolute value for the probability
of the data under the model to be found. (For the system of equation (2.63), Z0 = 1.)
Other paths connecting the posterior distribution with a tractable reference system, such
as to one at in nite temperature, may be possible as well. One could also attempt a direct
comparison of two models with the same parameter space using the intermediate systems
of equation (6.17).
Data from each of the intermediate systems needed to compute the ratios in equation (6.16)
must be obtained via Monte Carlo simulations. Performing each such simulation indepen-
dently may be wasteful, however. It will generally be better to start at one end of the path
(at either system 0 or system 1), and then proceed step-by-step to the other end, using
the nal state from each simulation as the initial state for the next simulation. When the
systems di er only in their temperature, and we start at the high temperature end, this
procedure is identical to simulated annealing, which we saw in Section 6.1 may be desirable
in any case. Note, however, that for the purposes of free energy estimation, we must take
care to remain close to the equilibrium distribution at all times, a matter that is of less
concern when annealing is used simply to speed convergence.
The reference system, and the series of intermediate systems linking the reference system
to the system of interest, need not be de ned a priori , before any data has been collected.
Instead, one can use a sample of states from the system of interest to select a simpler system
that is assured of being close enough to the current system to permit accurate estimation
of the corresponding free energy di erence. The process is then repeated for this simpler
system, and so on, terminating in a system simple enough that its free energy may be
calculated directly.
This method, which goes back at least to Jerrum, Valiant, and Vazirani (7:1986), is used
by Dagum and Chavez (2:1993) to estimate the probability of rare events modelled using a
belief network; similar methods should be applicable to other models. Suppose we wish to
  nd the conditional probability that a binary variable X has the value 1, given the observed
values for other variables, Z , and given that Y1 ; . . . ; Yk are also unobserved. If we are
content with a reasonable absolute error bound for this estimate, a single Gibbs sampling
simulation will give an adequate estimate. If we require the estimated probability to have a
small relative error, however, we must employ the methods of this section, since the required
absolute accuracy may then be very high if the probability of X being 1 is very low.
One approach would be to de ne intermediate systems in which Y1 ; . . . ; Yk were successively
set to predetermined values, say to 0 in each case. We could then express the probability
that X = 1 in conjunction with the observed data as follows:
 P (X = 1; z ) = P (XP =(X1;=Y 1;=z )0; z )  P (XP =(X1;=Y 1;=Y10;=Y 0;=z )0; z )   
                              1                            1         2
                   P (X = 1; Y1 = 0; . . . ; Yk 1 = 0; z )  P (X = 1; Y = 0; . . . ; Y = 0; z ) (6.18)
                    P (X = 1; Y1 = 0; . . . ; Yk = 0; z )                      1         k
Each of the ratios above would be estimated using data from a Gibbs sampling simulation
of the less constrained system; the nal factor, in which all the variables have xed values,
is directly computable. We could estimate P (z ) in the same way, and from the ratio of the
two, obtain P (X = 1 j z ).
This will fail, however, if P (X = 1; Y1 = 0; . . . ; Yi = 0 j X = 1; Y1 = 0; . . . ; Yi 1 = 0)
turns out to be very small, for some i. The frequency with which Yi takes on the value 0 in

                                                  97
                                  6.2 Free energy estimation

                  System 0:             System 1:              Overlap:




                       (a)                                                (b)
Figure 6.2: Estimating a free energy di erence by distribution overlap, for systems where the energy
of a state is either zero or in nity. The true answer is given by Z1 =Z0 = A(System1)=A(System0),
where A(System0) is the area of state space accessible under system 0, and similarly for A(System1).
The Monte Carlo estimate based on equation (6.15) will be approximately A(Overlap)=A(System0),
where A(Overlap) is the area of the region accessible to both systems. This is accurate when, as in
(a), the region accessible to system 1 is a subset of that accessible to system 0. When this is not
so, as in (b), estimating Z1 =Z0 as (A(Overlap)=A(System0)) = (A(Overlap)=A(System1)) is better.

a Gibbs sampling simulation with variables up to Yi 1 xed to 0 will then provide a very
poor estimate of the corresponding ratio. This problem can be avoided by deciding on the
value to which Yi will be xed only after data from the simulation is available; we then just
choose the value that has shown up more often, ensuring that we have adequate data for
estimating the corresponding ratio.
The acceptance ratio method. Accurate Monte Carlo estimation of the expectation in
equation (6.15) requires that the canonical distribution for system 0, given by P0 (s), assign
reasonably high probability to all the regions where exp( (s))P0 (s) is large, which are
just those regions that have high probability under the canonical distribution for system 1.
This is most easily visualized for systems where the energy of a state is always either zero or
in nity, giving canonical distributions that are uniform over some subset of the whole state
space. The condition for a Monte Carlo estimate based on equation (6.15) to be accurate is
then just that the region of non-zero probability under system 1 be a subset of that under
system 0, as illustrated in Figure 6.2(a). If system 1 can move to regions where system 0
cannot, as in Figure 6.2(b), no amount of sampling from the distribution for system 0 will
give an accurate estimate. For systems with energies that are never actually in nite, an
estimate based on equation (6.15) will always converge eventually, but only very slowly if
some regions with high probability under system 1 have low probability under system 0.
When the space visited by system 1 is not contained in that visited by system 0, a better
estimate than that of equation (6.15) can be obtained by sampling from both systems, rather
than from system 0 alone. For the systems of Figure 6.2(b), this allows us to estimate both
the fraction of the region accessible to system 0 that is also accessible to system 1, and the
fraction of the region accessible to system 1 that is also accessible to system 0. From these
quantities, we can then nd Z1 =Z0, which in this case is just the ratio of the sizes of the

                                                98
                                 6.2 Free energy estimation

regions accessible to the two systems. This method of estimation will be accurate as long
as the two regions overlap signi cantly.
The acceptance ratio method of Bennett (7:1976) extends this concept to general systems.
It can be visualized by considering an extended system with state space (S; W ), where S
represents the state variables of systems 0 and 1, and W is an additional state variable that
takes on the value 0 or 1. The energy function for this extended system is de ned to be
                                          (
                                             E0(s)=T0       if w = 0
                         E(s; w) =                                                    (6.19)
                                             E1(s)=T1 C if w = 1
where C is a constant whose role will be made clear in a moment. The temperature of the
extended system is taken to be one.
We could simulate the canonical distribution for this extended system, using the same
transitions to alter S as we would have used for a simulation of system 0 or 1, and picking
new values for W using Gibbs sampling. The conditional distributions needed for Gibbs
sampling are
      P (W = 1 j s) = exp( E exp(           E (s; 1))          =     ( s ) + C
                                                                                  
                                                                                       (6.20)
                                    (s; 0)) + exp( E (s; 1))
                                                       
       P (W = 0 j s) = exp( E exp(            E (s; 0))               =     + ( s ) C
                                                                                         
                                                                                            (6.21)
                                      (s; 0)) + exp( E (s; 1))
where (z ) = 1=(1 + exp( z )) and, as before, (s) = E1 (s)=T1 E0(s)=T0 . While this
simulation runs, we could observe the proportion of time the extended system spends in
states with W = 1, versus W = 0. This would let us estimate
                                   R                             
      P (W = 1) exp( C ) = exp                E  ( s ) =T  +  C    Z ds
      P (W = 0)
                                       R
                                                1         1             exp( C ) = ZZ1 (6.22)
                                         exp E0 (s)=T0 Z ds                              0
Of course, this only works if both P (W = 1) and P(W = 0) are appreciably greater than
zero, as otherwise the simulation might never sample one or the other of these, giving an
estimate for Z1 =Z0 of either zero or in nity. This can always be arranged by adjusting the
constant C . Furthermore, for the simulation to produce a useful sample in a reasonable
amount of time, the distributions of S for the two systems must overlap appreciably, as only
in the overlap region will changes in W have a signi cant probability of occurring.
Rather than actually simulating such an extended system, Bennett instead proposes that
systems 0 and 1 each be simulated, and data gathered on what the probability would be
of a transition from W = 0 to W = 1, and vice versa, if the extended system were to
be simulated. As a consequence of detailed balance holding, the ratio of these transition
probabilities also gives the ratio P (W = 1)=P(W = 0), allowing Z1 =Z0 to be estimated as
                                                             
                             Z1 =  (s) + C  0 exp( C )                                   (6.23)
                             Z0            + (s) C 1
The data required for making such an estimate can easily be gathered for various values of
C during a single pair of runs, after which a value for this constant can be selected that
results in both transition probabilities being non-negligible. Of course, if the distributions
for the two systems have no signi cant overlap, no value of C will give a good estimate, and
one or more intermediate systems will have to be introduced.
Voter (7:1984) generalizes the acceptance ratio method by considering Metropolis moves that

                                               99
                                 6.2 Free energy estimation

not only change W (thereby switching energy functions), but also simultaneously change
S by adding or subtracting a displacement vector. This allows the free energy di erence
between a pair of dissimilar systems to be computed with a single application of the accep-
tance ratio method, with no intermediate systems, provided that the distribution for each
system is fairly concentrated, with the o set between the areas of concentration known in
advance, or obtainable from preliminary runs.
Thermodynamic integration. An alternative to the use of estimation formulas based
on distribution overlap such as (6.15) or (6.23) is to nd the derivative of log(Z ) at a number
of points along a path between systems 0 and 1, and then apply some numerical integration
procedure to nd log(Z1 ) log(Z0 ). This method of thermodynamic integration corresponds
to the way free energy di erences for actual physical systems are measured experimentally.
If the systems di er only in their energy functions (their temperatures being the same), the
required derivatives can be estimated as follows:
            d log(Z ) = 1 dZ = 1 d Z exp E (s)=T  ds                                     (6.24)
                d            Z d           Z d
                                              Z
                                      =          1 dE (s)  1 exp E (s)=T  ds (6.25)
                                                 T d              Z
                                                           
                                      = T1 dEd (s)                                        (6.26)
If the intermediate systems are de ned by the energy function of equation (6.17), we will
have dE (s)=d = E1(s) E0(s). For this and other typical choices, the derivative does
not vary greatly with s, and hence Monte Carlo estimation of the expectation in equation
(6.26) is feasible.
We can proceed similarly when the systems di er in temperature instead. De ning = 1=T ,
we can compute the following at various points from 0 to 1 :
                 d log(Z ) = 1 dZ = 1 d Z exp E (s) ds                                   (6.27)
                     d          Z d             Z d
                                                  Z
                                                     E (s)  Z1 exp E (s) ds
                                                                                  
                                          =                                               (6.28)
                                          =        E (s)                                  (6.29)
For each intermediate system, with parameter i or i , the expectation of equation (6.26)
or (6.29) is computed by averaging over the states found by continuing the Markov chain
with this new parameter for some number of steps. The slow growth method, described
by Basho, Singh, Langridge, and Kollman (7:1987) is a limiting case of this, in which the
number of intermediate systems is very large, but only one step of the Markov chain is done
for each system. Integrating the derivative of equation (6.26), estimating each expectation
using the single state generated at each value of , gives the following formula:
                                           nX1 1
                    log(Z1 ) log(Z0 )                E        ( s (i) ) E (s(i) )       (6.30)
                                                          i +1             i
                                            i=0 T
where s(i) is the state found by performing one transition in the Markov chain designed
to converge to the canonical distribution for E i , starting from the state produced for the

                                              100
                                 6.2 Free energy estimation

previous system, s(i 1) . The i must be spaced suciently closely that performing a single
transition at each value is sucient to maintain the chain near equilibrium. The slow growth
method can be applied similarly for systems di ering in temperature.
As with the acceptance ratio method, computation of free energy di erences using ther-
modynamic integration requires, in general, that a whole series of Monte Carlo simulations
be performed. Unlike the acceptance ratio method, however, the number of intermediate
simulations needed is not obviously related to the overlap in the distributions they sample.
Instead, for an accurate estimate, it is necessary only that the points where the derivative
is evaluated adequately represent the curve being integrated. If one is willing to make some
assumptions concerning how smooth the derivatives are as a function of or , the number
of simulations required may be many fewer than are needed to estimate the free energy by
the acceptance ratio method. In particular, one would not expect the number of points
required for thermodynamic integration with a simulated physical system to grow with sys-
tem size, whereas the number of points needed does grow for the acceptance ratio method,
since the energies of a state in the two systems, and hence also the di erence in energies,
are extensive quantities.
Other methods. The acceptance ratio and thermodynamic integration methods are rep-
resentative of two general approaches to free energy estimation. Many other methods have
been investigated, including a number that are particular to certain types of physical sys-
tems. Here, I will brie y describe two that are generally applicable.
As mentioned above, the thermodynamic integration method can sometimes give good re-
sults using fewer intermediate systems than the acceptance ratio method, provided an as-
sumption of smoothness is justi ed. Bennett (7:1976) has proposed an interpolation method
which, like the acceptance ratio method, is based on measuring the overlap in the canonical
distributions for the two systems being compared, but which, by utilizing a smoothness
assumption, can allow computation of free energy di erences even when the actual data
collected does not exhibit any overlap.
Like the acceptance ratio method, the interpolation method utilizes data from Monte Carlo
simulations of both of the systems being compared. During each simulation, a histogram of
values for (s) is accumulated. If both simulations record a signi cant number of counts
in some overlap region, Z1 =Z0 can be estimated by comparing the distributions where they
overlap (the acceptance ratio formula (6.23) can be seen as one implementation of this). If
there is no signi cant region of overlap, a value can still be obtained by projecting both
distributions into the gap. This projection is more in the nature of interpolation than
extrapolation, because the projections are not independent, but are rather related in a form
that is xed up to the value of Z1 =Z0, which is being estimated. Each projection is thus
constrained by the data on both sides.
The umbrella sampling method of Torrie and Valleau (7:1977) is another approach to im-
proving the eciency of free energy estimation using distribution overlap. It is based on
the expression for Z1 =Z0 given by equation (6.15), but estimates the expectation in this
formula using importance sampling, rather than by simulating the canonical distribution
for system 0 itself. The importance sampling distribution used, P (s), has the form
                          P (s) = Z1 W (s) exp E0 (s)=T0
                                                                    
                                                                                          (6.31)
                                        
where W (  ) is a weighting function that is chosen by trial and error, on the basis of prelim-
inary simulations, so as to produce a distribution that covers the ranges of (s) that would

                                              101
                            6.3 Error assessment and reduction

be seen in the canonical distributions of both system 0 and system 1. Intermediate values
for (s) must also be covered, if the simulation is to reach equilibrium and produce an
adequate sample in a reasonable period of time. Mezei (7:1987) gives a heuristic procedure
for determining a good weighting function automatically.
Applying the importance sampling formula (3.5) to equation (6.15), we get
                                                              
                  Z1 = exp (s) = exp (s) P0(s)=P (s)                              (6.32)
                  Z0                      0             P0 (s)=P (s) 
                                                                        
                                                   exp (s) = W (s) 
                                             =                                        (6.33)
                                                        1 = W (s) 
Use of intermediate systems may still be convenient, although, in theory, an appropriate
weighting function could allow the free energy for even quite dissimilar systems to be de-
termined from a single simulation run. One cannot escape the inherent diculties of the
problem in this way, however, as this single umbrella sampling simulation would still have
to sample from regions of state space intermediate between those typical of the two sys-
tems. The time required to gather adequate statistics in a single such simulation run could
therefore be comparable to that needed for the whole series of simulation runs used by the
other methods.
Umbrella sampling and other importance sampling schemes have also been used for other
estimation problems where the canonical distribution does not adequately sample the regions
of interest. It is related to the multicanonical method discussed at the end of Section 6.1.

6.3 Error assessment and reduction
In this section, I discuss the problem of assessing the error of a Monte Carlo estimate
obtained from data generated by Markov chain methods. I also discuss techniques for
reducing this error, and the choice of an overall strategy for obtaining good estimates with
realistic error indications. A variety of techniques for reducing the error of Monte Carlo
estimates may also be found in the texts by Hammersley and Handscomb (1:1964), Kalos
and Whitlock (1:1986), and Ripley (1:1987).
Somewhat ironically, the error assessment procedures described here are nearly all frequen-
tist in nature | they say how frequently the Monte Carlo procedure will produce an estimate
close to the true value, not how probable it is that the true value in a particular instance is
close to the estimate that has been obtained. The possibility of using Bayesian procedures
instead is discussed in Section 7.1.
Assessing error in simple Monte Carlo estimates. Recall the basic Monte Carlo
estimation formula:Z                        NX1                  NX1
          hai = a(~x) P (~x) dx~  N1 a(x(t)) = N1 a(t) = a                             (6.34)
                                            t=0                  t=0
where the x(t) each have marginal distributions given by P (  ). The above average, a, is an
unbiased estimate of hai | i.e. E [a] = hai, where E [] denotes expectation with respect to
the possible realizations of the Monte Carlo procedure.
If the x(t) are independent, the Law of Large Numbers guarantees that a converges almost
certainly to hai as N increases, whenever hai exists. More can be said when the variance,

                                             102
                                   6.3 Error assessment and reduction

2 = (a hai)2 also exists. In this case, the variance of the estimate a, found using N
independent points, will be
                Var[a] = E [(a E [a])2] = E [(a hai)2 ] = 2 = N                    (6.35)
Furthermore, the Central Limit Theorem guarantees that, asymptotically, the distribution of
a is Gaussian. From equation (6.35), one can see that the amount of e ort required to obtain
a Monte Carlo estimate of a given accuracy is not directly related to the dimensionality
of the space, in contrast
                       p to standard numerical pintegration procedures. However, since
the standard error, Var[a], goes down only as N , obtaining very precise estimates is
laborious. Fortunately, typical applications in statistics and arti cial intelligence do not
require high precision.
In practice, equation (6.35) does not allow one to assess the variance of a because 2 is not
known. The usual frequentist estimate for 2 is
                                            NX1
                             2  N 1 1
                                                          
                                                  a(t) a 2                             (6.36)
                                             t=0
By substituting this estimate for 2 into equation (6.35), one can obtain an estimate of the
variance of the Monte Carlo estimate of hai:
                                                  NX1
                           Var[a]  N (N1 1)
                                                                 
                                                         a(t) a 2                         (6.37)
                                                   t=0
This formula is sometimes naively regarded as providing a complete solution to the error
assessment problem. This is not the case, as without further information, one can give no
bound on the error in the estimate of 2 given by equation (6.36). When this estimate is
seriously in error, it is possible that equation (6.37) will give a wildly optimistic impression
of the accuracy of a as an estimate for hai. This will likely occur, for example, if a(x) takes
on extremely large values in a region of very low probability. If no points from this region
are included in the sample used to compute a, this estimate could be very far from the true
value of hai without equation (6.37) providing any indication of this fact.
Assessing the error of an importance sampling estimate found using equation (3.6) is more
dicult. Hastings (4:1970) gives an approximate formula for the variance of this estimator.
As with equation (6.37), any estimate of the error based only on the data points can in some
circumstances seriously overstate the accuracy of the result obtained. Such misleading error
assessments will often occur when the importance sampling distribution used is very poor.
Assessing error in Markov Chain Monte Carlo estimates. Markov chain sampling
will produce a series of dependent values, x(0); . . . ; x(N 1). In these circumstances, a from
equation (6.34) is still an unbiased estimate of hai, provided we discard the states generated
by the early part of the chain, before the equilibrium distribution has been reached.10
However, the variance of this estimate is not given by equation (6.35) | typically, the true
variance will be larger, though the reverse is possible as well. The problem of estimating this
variance has been discussed by many authors, in many elds (see the references in Section 8
of the bibliography).
10   However, as discussed in (Diggle, 8:1990, Section 3.6), a is not always the best unbiased estimate of hai.
     Due to the dependencies, points near the two ends of the series contain more information than points in
     the middle. Consequently, an average that weights the points near the end more heavily can have lower
     variance than a. As this e ect is quite small, however, I will not consider estimators other than a here.


                                                       103
                            6.3 Error assessment and reduction

Batching is a simple, intuitive way of obtaining a better assessment of the variance of a.
The N sample points are divided into k \batches", each consisting of m = N=k consecutive
sample points. (I will here assume that N is a multiple of k.) Estimates of hai are found
using the data in each batch, with the estimate from batch i being
                                             imX
                                               +m 1
                                  a = 1
                                    i          m t=ima(t)                           (6.38)
If m is large enough, these estimates will be nearly independent, as most of the sample
points contributing to each will be distant from each other in the Markov chain, and hence,
assuming ergodicity, nearly independent. The estimate of hai based on the entire data set
(equation (6.34)) can be expressed as the average of the batch estimates:
                                                    kX1
                                         a = k1         ai                             (6.39)
                                                     i=0
If the batch estimates, ai , are indeed independent, then the variance of a can be estimated
as in equation (6.37):
                                                   kX1
                              Var[a]  k(k1 1)
                                                                
                                                          ai a 2                       (6.40)
                                                    i=0
The worth of this estimate depends crucially on the choice of batch size, m. If m is too
small, so that the ai are not really independent, then the variance estimate will likely be
too small, leading to an unjusti ed con dence in the accuracy of a as an estimate of hai.
On the other hand, if m is set larger than is necessary to make the ai (almost) independent,
the smaller value for k that results leads to a larger variance in the estimate of the variance
itself. For small k, this will be cause for signi cant doubt concerning whether a is accurate
even if the estimated variance from equation (6.40) is small.
One way to cope with this problem of choosing an appropriate batch size is to plot the
estimated variance of a as calculated from equation (6.40) for a series of increasing batch
sizes, m. If it weren't for the noise in the variance estimates, which increases with large
m (small k), these estimates would approach the true value in the limit as m increased.
From the plot, one may be able to visually pick out an approximation to this limiting value
despite the noise. This is essentially the method used by Friedberg and Cameron (4:1970)
(see also (Morales and Nuevo, 8:1990)).
A perhaps more sophisticated approach to estimating the accuracy of a is to use methods
from time series analysis (for a readable introduction, see (Diggle, 8:1990)). The variance of
                                                                                             
a can be expressed in terms of the autocovariance function for the time series a(t) = a x(t) ,
which is de ned as follows:
                                                                 
                              (s) = E a(t) hai a(t+s) hai                                (6.41)
The autocorrelation function is de ned as (s) = (s)=2 . The de nition for (s) given
here assumes, as before, that E [a(t)] = hai. The de nition is independent of the choice of t
provided that the time series is stationary | that it looks the same from any starting point.
This will be the case when the x(t) come from an ergodic Markov chain from which we have
discarded the initial portion, prior to when the equilibrium distribution was reached.
Note that (0) = 2, (s) = ( s), and 2  (s)  +2 . If the x(t), and hence the a(t),
are independent, we have (s) = 0 for s =     6 0.

                                             104
                           6.3 Error assessment and reduction

The variance of a can be expressed in terms of the autocovariance as follows:
                                            h NP1
         Var[a] = E (a hai)2 = E N1
                                                             2 i
                                                      a(t) hai                         (6.42)
                                                  t=0
                                              NX1 
                                       = N12        E a(t) hai a(t0 ) hai
                                                                         
                                                                                       (6.43)
                                             t;t0=0
                                              NX1
                                       = N12         (t0 t)                            (6.44)
                                                0
                                             t;t =0
                                       = N1
                                               X
                                                     (1 jsj=N ) (s)                    (6.45)
                                             N<s<N
If the a(t) are independent, this reduces to equation (6.35). For dependent sample points,
it is possible for (s) to be negative, in which case the variance can be less than with a
sample of independent points. Though it is sometimes possible to arrange for short-range
correlations to be negative when using Markov chain sampling, long-range correlations are
typically positive, and for dicult problems contribute the most to the variance.
For large N, the variance from equation (6.45) can be written as follows:
                                               1              2
                       Var[a] = N1 2 + 2
                                      h       X      i
                                                  (s) = N=                         (6.46)
                                              s=1
where  = 1 + 2 1
                 P
                   1 (s) can be seen as the number of dependent sample points from the
Markov chain are needed to give the equivalent of one independent point. (Note that it is
possible, though not typical, for  to be less than one.)
An estimate for the variance of a can be obtained from equation (6.45) by substituting
estimates for (s). Hannan proposed the following (see (Ripley, 1:1987, Chapter 6)):
    Var[a]  (N L)(N    N              X 
                                                1   jsj   1 X a(t)a(t+s) a2  (6.47)
                               L + 1) L<s<L         N N jsj t
where L is chosen so that (s)  0 for s  L. Making a sensible choice for L on this basis
is essential; too large a value for L introduces a large amount of noise, as the estimates for
the autocovariances for large lags are based on little data. Other estimates of this general
type are also possible, in which the estimates of (s) for di erent s are weighted in various
ways. Straatsma, Berendsen, and Stam (8:1986) use all the autocovariances, but estimate
those at longer lags by tting an exponential, rather than by noisy individual estimates.
Rather than work directly with the autocovariance function, we can instead work with the
spectrum of the time series, de ned as
                          +1
                          X                        h        1
                                                            X                i
              f (!) =           (s) cos(s!) =      2 + 2         (s) cos(s!)          (6.48)
                         s= 1                               s=1
From equation (6.46), we see that for large N
                                    Var[a] = fN(0)                                 (6.49)
From an estimate of the spectrum, f (!), we can thus obtain an estimate of Var[a]. Note,

                                             105
                            6.3 Error assessment and reduction

however, that since f (!) = f ( !), a minimum or maximum will be located at f (0) (unless
the spectrum is at, as it is when the points are independent). Standard methods for
smoothing an estimate of the spectrum tend to atten such peaks or troughs, and hence are
not good when the focus is speci cally on f (0). Heidelberger and Welch (8:1981) avoid this
problem by instead tting a polynomial to the log of the spectrum in the vicinity of f (0).
One can also proceed by tting a parametric model to the time series, such as an auto-
regressive model of some order. Once the parameters of such a model have been estimated,
equation (6.46) can typically be evaluated analytically to obtain a corresponding estimate
for Var[a]. Of course, the accuracy of this estimate will depend on whether the model used
is adequate.
All the time series methods can be applied to a series of batch means, ai , rather than to the
values a(t) themselves. In this context, the batches need not be large enough for the ai to be
approximately independent, as dependence will be handled by whatever time series method
is used. The motive is instead to reduce the amount of storage and computation required.
The volume of data can also be reduced simply by looking at only every mth iteration. This
discards useful information, but avoids the need to calculate a(x(t)) for every sample point.
It may therefore be desirable when this calculation is expensive.
The methods described above can be adapted to handle estimation from R independent
realizations of the chain, each assumed to start from the equilibrium distribution, and
which for simplicity I will here assume are all of the same length. The estimate of hai in
this case is simply the average of a(x) for all sample points. Expressed
                                                                       P another way, if  ar is
the average from the rth run, then the grand estimate is a = (1=R) r ar .
The batch method for evaluating the variance of an estimate is easily adapted to handle
multiple runs | one simply pools the batches from all the runs, and applies equation (6.40).
It is possible to treat the data from each run as a single batch, and this certainly guarantees
that the batches are independent (assuming each run did indeed reach equilibrium before
the data was taken). This may not be the best way to proceed, however, as the variance
estimate may then be based on a smaller number of batches than it might have been.
For the time series methods, data from all the runs can be used to estimate the autocovari-
ance function or the spectrum, and from this one can estimate Var[ar ], which is the same
for all r, given that all runs are the same length. The variance of the grand estimate can
then be estimated using the fact that Var[a] = (1=R)Var[ar ].
Typically, we are interested in estimating the expectation of more than one function of
state, perhaps quite a large number if we wish to plot posterior or predictive distributions
for various variables. In the literature, each such estimation problem is generally considered
independently. Note that it is quite possible for the series of values of one function at suc-
cessive iterations to be highly dependent, while the values of another function at successive
iterations are almost independent. Estimating the expectation of the rst function will then
be harder than estimating the expectation of the second function. However, when there are
long-range dependencies in the value of one function of state, it would be prudent not to
conclude too hastily that some other function of state has no long-range dependencies, even
if that is how the data concerning that function alone might otherwise be interpreted.
Diagnosing convergence. The methods of the previous section all assume that we have
discarded an initial portion of each run, of sucient length that the states in the remain-
ing portion all come from the desired equilibrium distribution, or, more realistically, from

                                              106
                               6.3 Error assessment and reduction

distributions that are suciently good approximations to the desired distribution. In this
section, I will discuss methods of choosing how much of each chain to delete in order to
accomplish this | i.e. how to decide when the chain has (approximately) converged to the
equilibrium distribution.
Technically speaking, convergence is a property of the Markov chain, regarded as a se-
quence of random variables, not of any particular realization of the chain. A Markov chain,
X (0) ; X (1) ; X (2) ; . . 0., has converged by time t if the marginal distribution of X (t) is the same
as that for all X (t ) with t0 > t, this distribution being, of course, the equilibrium distri-
bution that the chain was designed to sample from. The chain has \almost" converged at
time t if the distribution of X (t) and all subsequent states is \close" to the equilibrium
distribution in some relevant sense.
In practice, however, one often speaks of a particular realization of a chain having \con-
verged" by time t, while perhaps also saying that at time t another realization of the same
chain has not converged. This makes no sense according to the above de nition, but it is
nevertheless a reasonable statement, even if imprecisely phrased.
As an example, consider sampling from a distribution with two modes, with the function
a being close to 0 near one mode and close to 1 near the other. Assume that the region
around the mode where a is close to 1 contains almost all of the probability, but that the
chain starts at the mode where a is close to 0. Assume also that the Markov chain only
rarely jumps between the regions around these modes. In a typical run, a will start out
close to 0, and stay close to 0 for a rather long time. When a jump to the vicinity of the
main mode nally occurs, a will change to a value close to 1, and probably remain close
to 1 for a very long time, perhaps the rest of the run. In calculating the expectation of a,
we would like to discard the early portion as not being representative of the value of a in
the equilibrium distribution. Suppose we have determined theoretically that by t = 1000,
a realization of the chain is very likely to have reached the main mode. We might decide
to discard this amount from the chain. However, if, in an actual realization, the transition
to the main mode occurs at t = 500, it seems wasteful to discard the 500 following states,
waiting for the occurrence of an event that we know has already occurred. Conversely, in
the unlikely event that the realization stays in the minor mode past t = 1000, it seems bad
to blindly include these atypical values in the average.
Accordingly we will generally attempt to diagnose \convergence" for a particular realization
of a chain (or for a set of realizations). The notion that convergence should be conditional
on the observed realization could perhaps be formalized by the concept of a \convergence
diagnostic" | a series of integer functions, Dn (x(0) ; . . . ; x(n 1)), such that
           P (X (t0) = x(t0) j Dn (X (0) ; . . . ; X (n 1)) = t)  (x(t0 ) ); for all t0  t (6.50)
where (x) is the equilibrium distribution. Having observed the realization x(0); . . . ; x(n 1),
we would use Dn to determine how much of the realization to discard, con dent that if the
diagnostic satis ed equation (6.50) the resulting estimates will be nearly unbiased. This
de nition of a convergence diagnostic could be extended to handle sets of realizations. No
such formal concept is employed with the methods described below, however.
Since the state, x, is typically of high dimension, and hence hard to examine directly, most
methods for diagnosing convergence are based on monitoring one or a few scalar functions of
the state, such as the functions whose expectation we are interested in estimating. Perhaps
the most commonly-employed method is to simply plot these functions for increasing values
of t, and visually judge when equilibrium behaviour has been reached.

                                                  107
                              6.3 Error assessment and reduction


  (a)




  (b)




  (c)



        0                  25                    50                    75                   100
Figure 6.3: Realizations of three hypothetical Markov chains. Each of (a), (b), and (c) plot a scalar
function of state versus time for three simulation runs, for di erent Markov chains. In (a), the
runs have apparently all converged by about iteration 40. In (b), the runs at rst appear to have
converged after about iteration 25, but around iteration 50 this is seen to have been illusory; true
convergence may, perhaps, have occurred around iteration 75. In (c), there is no evidence that any
of the runs have converged within the rst 100 iterations.

Figure 6.3 shows three hypothetical plots of this sort for a single function of state, for three
realizations each of three di erent Markov chains. The behaviour seen is Figure 6.3(a) is
what one hopes for | the runs show signs of all having converged after about 25 iterations.
However, without some theoretical analysis, which is generally not available, there is no
absolute guarantee that this apparent convergence is real. Figure 6.3(b) illustrates this
possibility. If only 50 iterations had been simulated in each run, we might well have thought
that the runs in (b) had all converged at about iteration 25, and that we should estimate the
expectation by the average over iterations 25 to 50. With data from 100 iterations available,
it is clear that this would have been a mistake, as it appears that the runs do not reach
convergence until at least iteration 75. Figure 6.3(c) shows a case where the data give no
reason to believe that any of the runs have converged within the duration of the simulations.
(Note, however, that we cannot say with certainty that the runs in Figure 6.3(c) have not
converged. Each could be sampling from the true equilibrium distribution, but moving
about the state space so slowly that they appear to be sampling from di erent distributions
when viewed over only 100 iterations.)
If only one of the runs in Figure 6.3(c) had been simulated, however, we might well have
thought it had converged by iteration 50, or even before. This illustrates the added power
of multiple runs in revealing when apparent evidence for convergence from a single run is
in fact illusory. A single run from Figure 6.3(b) would also provide less information than
is apparent from multiple runs, as one cannot tell from one run whether the change in
function value after iteration 50 indicates that equilibrium had not been reached before
then, or simply that there is a high degree of dependence between successive states. From
the fact that all the runs in the gure behave similarly, however, one can conclude that

                                                108
                             6.3 Error assessment and reduction

equilibrium cannot have been reached before iteration 75 (or, rather, that would be a safe
conclusion if it were based on somewhat more than three runs).
When more than one realization of the chain has been simulated, some authors recommend
plotting the value of the function averaged across realizations versus time, looking for the
point where this average appears to have stabilized. This approach would work satisfactorily
for cases (a) and (b) in Figure 6.3, but in case (c) averaging across realizations would discard
highly relevant data. While it is clear from the plots of individual runs in case (c) that we
should not consider any of them to have converged, a plot of the average across runs would
give every appearance of convergence by around iteration 50.
If we are monitoring two functions of state, a(x) and b(x), it may be that the distribution
of a, say, appears to have converged even though that of b shows no signs of having reached
an equilibrium. We might in this situation decide that we are in a position to estimate
hai, using the values of a from the time of apparent convergence on. However, unless
we understand why a should have converged even when b apparently has not, this may be
dangerous, as if b has not converged, the states being visited are still not fully representative
of the equilibrium distribution, and hence could well possess atypical values of a. In order
to reveal such situations, it may be useful to monitor certain functions of state that are of
fundamental signi cant to the process (such as the energy), even when the values of these
functions are of no interest in themselves.
Hypothesis tests have been proposed by a number of authors for determining whether con-
vergence has really been attained after some speci ed number of iterations. Ripley (1:1987,
Section 6.1) reviews several that are based on values averaged over a number of runs. Geweke
(8:1992) gives one based on the time average over an initial portion of the supposedly
converged sequence versus a nal portion. These approaches leave to the user's informal
judgement the guess of a time at which the chain may have converged, addressing only
the question of whether this guess was correct. It is not clear how such a guess is to be
made, however, except perhaps on the basis of preliminary runs | basing the guess on the
same data as is used to test it is not valid. It is also not clear that the hypothesis testing
framework is appropriate for this task, in which the goal is not to reject the hypothesis, but
rather to accept it.
A method of diagnosing convergence, known as the \Gibbs stopper", that is based on the
entire state has been proposed by Ritter and Tanner (4:1992) (see also the comments by Cui,
Tanner, Sinha, and Hall and by Gelfand following (Gelman and Rubin, 8:1993) and (Geyer,
8:1993)). Suppose that a large number, M , of independent realizations of the chain are
simulated concurrently. This is the context in which the method was originally proposed,
though it can also be applied using many samples from a single run. Denote the state
variables from these runs at iteration t by x(i;t), for i = 1; . . . ; M . We can use these points
to construct an approximation, ^(t) , to the equilibrium distribution, as follows:
                                                    M
                                ^ (t) (x) = M1
                                                  X
                                                       T (x(i;t); x)                        (6.51)
                                                   i=1
where T gives the transition probabilities for the Markov chain. When the points from
the next iteration, x(i;t+1), have been selected, we can compute the ratios between their
unnormalized probabilities, given by f (x), as used to derive the Markov chain, and their
probability under ^ (t) :                          
                              wi = f (x(i;t+1) ) ^ (t) (x(i;t+1))                          (6.52)


                                               109
                             6.3 Error assessment and reduction

If the chain has converged by iteration t, we expect that the approximation (t) will be
good, and that the wi will all be approximately equal. If f (x) is the normalized probability
under the desired distribution, all the wi should in fact be close to 1, and if this is so, one
can be sure that no areas of signi cant probability have been missed. Unfortunately, f (x)
is not normalized in typical applications, and this additional check is hence unavailable.
For this diagnostic to be of practical use, it must be feasible to calculate the transition
probabilities, T (x; x0). Recall that these transition probabilities are usually built using a set
of basic transitions. If each such transition changes a single component of x, and they are
applied in a deterministic sequence, then the probability for moving from x to x0 is just the
product of the required basic transition probabilities. For Gibbs sampling, these will often
be computable without great diculty.
Use of this diagnostic also requires that it be possible to \cover" the entire distribution
with a reasonable number of points. Otherwise, the wi will not be nearly equal even once
convergence has occurred. Whether it is possible to cover the distribution will depend
both on the volume of the region of signi cant probability and on the characteristics of the
Markov chain whose transition probabilities are used in equation (6.51) (which typically is
the same as is used for the simulation). Unfortunately, for the hardest problems, where a
good convergence diagnostic would be most useful, it is unlikely that this condition will be
satis ed.
Choosing a good initial state distribution. The time required for convergence to the
equilibrium distribution will often be greatly a ected by the distribution used to select the
initial state of the Markov chain. The initial distribution used may also a ect how useful
multiple realizations of the Markov chain are in diagnosing convergence | for this purpose,
initial distributions concentrated at a single point appear less desirable.
The ideal initial distribution is the distribution we wish to sample from itself | except that
if picking an initial state from this distribution were feasible, we would generally not be
using a Markov chain method anyway. However, in some problems of moderate diculty,
it may be possible to generate values from the desired distribution, but only at a large
computational cost, perhaps by using the rejection method (see Section 3.2). It might then
make sense to generate a few such values and use them as as starting states for realizations
of a Markov chain under which the desired distribution is invariant, thereby obtaining more
information from each expensively-generated initial point. In this scheme, convergence of
the Markov chain is immediate, so there is no need to discard an initial segment of the
chain. It is also not essential that the Markov chain be ergodic.
For a Bayesian inference problem, where states consist of values for the model parameters
and the desired equilibrium distribution is the posterior, one possible initial distribution is
the prior distribution for the parameters, which presumably re ects our best guess as to
what the parameters might be, given that we have as yet made no sense of the observed
data. Prior distributions typically have simple, standard forms, from which it is easy to
generate random values. Another possibility along the same lines is to always start at the
parameter values with maximum prior probability density.
Alternatively, one might start with the parameters that have maximum posterior probabil-
ity density, though nding such \MAP" parameter values may require a signi cant amount
of work. One could also try to approximate the posterior distribution based on informa-
tion available using the MAP parameters, such as the second derivatives of the probability
density at that point, and then pick an initial value for the Markov chain from this approx-

                                               110
                                     6.3 Error assessment and reduction

imation to the posterior. Gelman and Rubin (8:1993) advocate drawing the initial state
from an \overdispersed" approximation to the distribution found in this way. Note that
these methods break down when there are many modes, or when the mode is not represen-
tative of the full distribution. Both of these situations are common for problems in arti cial
intelligence and statistical physics.
A more elaborate scheme for constructing an approximation for use as an initial distribution
is advocated by Goutsias (8:1991), in the context of image restoration. The model in this
case resembles the 2D Ising system, in which the distribution is determined by interactions
between pairs of nearby variables. This distribution can be approximated by one in which
the interactions are expressed in terms of conditional probabilities for \later" variables given
\earlier" variables, as in a belief network. Unlike the original distribution, sampling from
this belief network approximation is easy. Goutsias selects such an approximation that
minimizes the error as measured by \relative entropy". Alexandrowicz (9:1971) constructs
similar approximations (for a di erent purpose) based on a dual measure of error.
Finally, simulated annealing may be viewed as a procedure for nding a good initial state
for the Markov chain at the desired nal temperature.
Choosing a good estimator of the expectation. The same quantity can often be
expressed as an expectation in various ways, as in equations (2.8) and (2.9). The variances
of such alternative Monte Carlo estimates may di er.
Kalos and Whitlock (1:1986, section 4.2) show that for Monte Carlo estimation using in-
dependent points, forms such as (2.9) are always better. Similar points have been made
by other authors as well (e.g. Pearl (4:1987), Gelfand and Smith (4:1990)). As a spe-
ci c example, suppose that the state is decomposed into components X1 and X2 , and
that we are interested in the expectation of some function a(x1; x2). De ne the function
b(x1) = ha(x1 ; X2)i | i.e. the expectation over the second argument of a with the rst
argument xed at x1 . Clearly hbi = hai. One can show, however, that the variance of b is
less than the variance of a (or equal, in degenerates cases). Equation (6.35) relates these
variances directly to the variance of the corresponding Monte Carlo estimate for a sample of
independent points. Therefore, rather than evaluate hai by averaging the values a(x(1t) ; x(2t)),
it is better to instead average the values b(x(1t) ) | provided, of course, that b(x1 ) can be
calculated eciently.
If the estimates are based on a sample generated using a Markov chain, with the x(t) being
dependent, it is possible to construct examples in which the estimate using b is worse than
the estimate using a.11 Nevertheless, it seems likely that in practice calculating part of the
expectation analytically will generally improve the result.
Kalos and Whitlock also show how this idea can be used to improve the estimates produced
using the Metropolis algorithm. Rather than taking an average over the current state at
each step, one can instead take a weighted average of the current and candidate state at
each step, using as weighting factors the probability of their being the next state in the
chain. For the generalized hybrid Monte Carlo algorithm using windows of states (Neal,
11   Consider a system with three binary variables, x1 ; x2 ; x3 , with all state probabilities equal. Let the
     probabilities for the transitions 000 $ 001, 010 $ 011, 100 $ 110, and 101 $ 111 be 0.999; the other
     possible transitions split the remaining probability. Let a(x1 ; x2 ; x3 ) have the value +1 in states 000, 100,
     010, and 101, and the value 1 in the other states; let b(x2; x3 ) = ha(X1 ; x2 ; x3 )i. Suppose we wish to
     estimate hai from a sample of two consecutive states from the equilibrium distribution of this chain. The
     estimate obtained by averaging the values of a in the two states is very likely to be the correct value of
     zero; that obtained by averaging the values of b is very likely to be 1=2.

                                                         111
                            6.3 Error assessment and reduction

5:1993), this idea can be extended to allow all states in the accept and reject windows of
each trajectory to contribute to the estimate.
Strategies for Markov chain Monte Carlo. I will conclude this section by discussing
how the issues dealt with above a ect the choice of a strategy for allocating computation
time between simulation runs and for making use of the results. The papers of Gelman
and Rubin (8:1993) and of Geyer (8:1993) and the accompanying discussion provide a view
of the spectrum of recent opinion on these issues amongst statisticians using Markov chain
sampling for Bayesian inference.
In my view, no single strategy is best for all problems, but one can identify a set of \typical"
problems for arti cial intelligence applications for which one particular strategy seems better
than the others. The following problem characteristics appear relevant to choosing an
appropriate strategy; in each case I have indicated what I will consider the \typical" case:
     1) What form is the distribution being sampled from expected to take? How many
        modes may there be | just one? a few? a huge number? Will most of the probability
        mass be in the vicinity of these modes? I take the presence of numerous modes to be
        typical, and assume that the dominant probability mass may not be in the vicinity
        of these modes.
     2) Is there signi cant doubt concerning whether the Markov chain will reach its equi-
        librium distribution in a reasonable length of time? Or, on the other hand, are the
        initial distribution and the transition probabilities so good that quite rapid conver-
        gence is expected? I assume that in typical situations there is signi cant uncertainty
        concerning how long it will take for the simulation to converge.
     3) How does the anticipated time to reach equilibrium compare to the anticipated time
        to move from one point drawn from the equilibrium distribution to another nearly
        independent point? I assume that typically the time to reach convergence is at least
        as long as the time to move about the distribution once convergence is reached.
     4) Is it feasible to \cover" the entire distribution with a reasonable number of sample
        points? Here, a distribution is \covered" if the areas \near" to sample points contain
        almost all the probability mass, where \near" is de ned in terms of the transitions
        of the chain. I assume that typically one cannot cover the region.
     5) What is the purpose of the analysis | interpretation for scienti c insight? Pre-
        diction with the need for an accurate indication of uncertainty? A \best guess"
        point prediction? I assume that we typically will wish to make a prediction with
        an indication of uncertainty, but might settle for a \best guess" if that is all that is
        reasonably available.
The \typical" situation described above for arti cial intelligence problems is also reasonably
typical of statistical physics problems, but not of all problems in statistical applications.
The following basic strategies can be distinguished:
     a) Simulate one very long realization of the Markov chain. This method is advocated
        by Geyer (8:1993).
     b) Simulate a small number of relatively long chains. This is advocated by Gelman
        and Rubin (8:1993).


                                              112
                            6.3 Error assessment and reduction

      c) Simulate a large number of relatively short chains. This is the method used by
         Gelfand and Smith (4:1990).
Strategy (b) fades smoothly into strategy (c) as the number of runs increases. I assume that
in strategy (b) the number of runs is on the order of ten | enough that it is unlikely that
the runs seen are all atypical.
Strategy (a) will be appropriate when there is substantial doubt that equilibrium can be
reached in a shorter run, and, as is typical, there is no sure way of verifying that a shorter
run that super cially appears to have reached equilibrium has actually done so. The best
bet may then be to devote all the computation time to simulating a single chain, in order
to maximize the chances of reaching the true equilibrium distribution. (This assumes that
the initial distribution is poor, so that it is unlikely that equilibrium could be more quickly
reached from some other initial state.) This situation could arise either because the problem
being tackled is extraordinarily dicult | often the case in statistical physics | or because
the time allowed for the computation is very limited | as might be the case, for example,
in a real-time image-processing application. Of course, in these circumstances, one may not
be able to obtain a good indication of how inaccurate the result might be.
Strategy (a) might also be appropriate when there is very little doubt that equilibrium can
be reached in a time much shorter than the total allotted. If the time to reach equilibrium is
at least as long as the time required to move to a nearly independent point in the equilibrium
distribution, then a single run will be the most ecient method.
Strategy (c) might be appropriate when rapid convergence to equilibrium is either guaran-
teed on theoretical grounds, or can be veri ed to have occurred to a satisfactory degree of
certainty (the ability to \cover" the distribution might be helpful here). This strategy would
be especially advantageous if the time for convergence was less than the time required to
move from one point of the equilibrium distribution to an independent point. This situation
could arise if the initial state distribution used were very good, but the distribution being
sampled from was multimodal, with movement from the area around one mode to that
around another being infrequent. Practical examples of this nature do not spring to mind,
however.
The most extreme form of strategy (c) is to use only the nal state of each run in making
estimates. In virtually all cases, however, it will be better to use at least a few states from
the end of the run, unless calculating the functions of state we are interested in is very
expensive.
For the typical problem I outline above, as well as many statistical problems, I feel that
strategy (b) is most appropriate. As discussed earlier, the information from multiple runs
is useful in determining when the runs have convergenced. In typical problems, it will be
prudent to base this decision on as much information as possible. Note in this regard that
though information from multiple runs is also available when using strategy (c), diagnos-
tics for convergence based solely on the observed data not infallible, and accordingly it is
generally not prudent to perform only short runs on the assumption that any convergence
diculties will be detectable in this way. In comparison with strategy (a), the multiple runs
of strategy (b) may be somewhat less ecient, since one must discard an initial portion
of all of them, but the increased assurance that the true equilibrium distribution has been
reached seems worth the cost for most applications.
Gelman and Rubin (8:1993) provide a detailed recipe for estimation using strategy (b).
They focus, however, on relatively easy problems, for which a good initial distribution can

                                             113
                                6.4 Parallel implementation

be found. In more dicult problems, more informal methods may be appropriate. Simply
comparing the estimates obtained from di erent runs together with their estimated standard
errors can reveal convergence problems. It is worth emphasizing again, however, that it is
possible for such estimates from di erent runs to be consistent even when all the runs are
far from equilibrium.
What should we do when using strategy (b) if the diagnostics do not con rm that equilibrium
has been reached? (One may, of course, simply extend each run further, hoping the problem
will go away, but an end must be declared sometime.) Two situations are possible:
      1) Some or all runs have not reached regions typical of the true equilibrium distribution,
         though they may have reached \local" equilibrium.
      2) The runs have reached the equilibrium distribution, but the rate at which they move
         about this distribution is so slow that this fact cannot be diagnosed. (Each run has
         sampled from only a limited region, and hence appears di erent from the others.)
Situations (1) and (2) generally cannot be distinguished from the data. Accordingly, good
results of known reliability cannot be expected, but an estimate could be obtained by dis-
carding the portion of each run prior to when local equilibrium appears to have been reached,
and then pooling the remaining samples. The result will be a valid estimate for situation (2),
but of course one will not know this to be the case. In many statistical contexts, this proce-
dure would not be considered acceptable (though perhaps there will be no alternative), but
expectations are realistically lower in some arti cial intelligence applications.

6.4 Parallel implementation
Many of the applications of Markov chain Monte Carlo methods are of the open-ended sort
in which arbitrarily large amounts of computer power can be usefully employed. It is thus
natural to explore the possibility of using multiple processors in parallel for these problems.
Unfortunately, sampling using Markov chains appears to be inherently serial in nature | in
general, one must have the state at time t before the state at time t + 1 can be computed.
Typically, however, there is substantial potential for using parallelism in ways that skirt this
basic fact. I will outline some such ways here, but only brie y, and with few references, as
much of the work in this area is speci c to particular problems or machine architectures.
Easy ways to exploit parallelism. Two areas in which parallelism can often be easily
employed are in performing multiple simulations of independent Markov chains, and in
computing the transitions in a single Markov chain.
As was discussed in Section 6.3, multiple runs are often advisable in order to verify that the
number of iterations used is sucient to reach the equilibrium distribution of the Markov
chain. In Section 6.2, we saw that the free energy di erence between dissimilar systems may
have to be estimated as the sum of free energy di erences between members of a series of
intermediate systems. In both cases, the multiple runs required can trivially be performed
simultaneously on multiple processors, though in the case of free energy estimation, one
would have to forgo the potential gain from using the nal state of the simulation for one
intermediate system as the initial state for the simulation of the next.
Gains from parallelism may also be possible when calculating the energy of a state, needed to
make accept/reject decisions with the Metropolis algorithm, or the derivative of the energy,
needed for dynamical simulations. In Bayesian inference problems, the energy calculation

                                              114
                                6.4 Parallel implementation

will often be dominated by the calculation of the likelihood (equation (2.22)), in which the
probability of each training case enters independently, allowing these contributions to be
computed in parallel. The energy function for the Lennard-Jones system (equation (2.57))
is also the sum of a number of independent terms (one for each pair of molecules), providing
considerable scope for parallelism.
The conditional distributions needed for Gibbs sampling in a system of discrete variables
are often computed from the relative joint probabilities of the states in which the variable in
question takes on its various possible values. This provides scope for parallelism regardless
of whether the computation of the joint probability of a state can itself be parallelized.
Parallel updates in systems with local interactions. As seen in many of the exam-
ples in this review, the state of a system is often decomposed into components, and the
transition matrix into a product of base transitions, one for each component. When these
base transitions are locally determined, it is possible to perform large subsets of them in
parallel, as the new value for one component in the subset does not e ect the transitions
for other components in the subset.
The 2D Ising model provides a simple example, which is discussed by Heermann and Burkitt
(1:1992). Imagine the array of spins as a checkerboard, with \black" and \white" spins
alternating both horizontally and vertically. When the system is simulated with either
Gibbs sampling or the Metropolis algorithm, the distribution from which the new value of
a spin is chosen depends only on the values of its four neighbors, which are of the opposite
colour. It is therefore possible to pick new values for all the spins of one colour in parallel,
with exactly the same result as if they were picked in sequence. The spins of the opposite
colour can then be chosen in the same fashion. In this way, a full transition of the Markov
chain can be performed in time independent of the size of the system, assuming sucient
processors are available. This approach to parallelism is appropriate when many processors
with appropriate communication links are available.
A more coarse-grained approach, which also exploits the locality of the problem, is to divide
the 2D array into large contiguous areas, one per processor. Transitions within each area
can be computed independently of other areas, except for the need to communicate the
states of spins at the boundaries between areas. These boundary spins make up a relatively
small fraction of the total.
Gibbs sampling for a belief network may also permit some degree of parallelism, the amount
depending on how sparsely connected the network is. Pearl (4:1987, 2:1988, Section 4.4.3)
describes a distributed algorithm for nding and exploiting this parallelism. Each variable
in the network is assumed to be associated with a separate processor, which communicates
directly only with the processors for \nearby" variables, as determined by the connections
present in the network. Using such local communication, it is possible for the processors to
coordinate in such a way that a number of processors can simultaneously select new values
for the variables they control, while being assured that the other variables on which this
selection is based are not being updated simultaneously.




                                              115
                        7. Directions for Research
Despite the long history of Markov chain Monte Carlo methods, the eld has by no means
become static. Indeed, there is currently a resurgence of activity, spurred by new applica-
tions in statistics, arti cial intelligence, and quantum eld theory. Here, I will touch on some
areas of research that I believe are most promising, most interesting, or most challenging.
In the course of this review, the reader will undoubtably have noticed various other areas
in which work remains to be done as well.
7.1 Improvements in the algorithms
Following their development in the 1950's, the basic algorithms were applied for a number of
years with relatively few changes. Recently, a new vitality has been evident, illustrated by
the development of new methods for free energy estimation, the Swendsen-Wang algorithm
for Ising systems, and the hybrid Monte Carlo method. However, there is still scope for
improvement with respect to several fundamental aspects of the algorithms, some of which
I will brie y indicate here.
Adapting parameters of the algorithms. A simple problem, which may super cially
appear rather easy, is that of adapting the parameters of the algorithms to match the
problem being solved. For example, it would be nice to adjust the proposal distribution
in the Metropolis algorithm so as to make moves that are as large as is possible while
maintaining a reasonable acceptance rate. For the hybrid Monte Carlo algorithm, this
would take the form of adapting the stepsize for the dynamical simulations.
It is easy enough to keep track of the acceptance rate for recent moves, and it would
not be hard to use this information to adjust the stepsize so that it converges to near
the optimal value. Unfortunately, doing so undermines the proofs of correctness for the
algorithms. Indeed, situations where such adaptation results in incorrect sampling can
easily be constructed.
Currently, we have several choices, none of which are entirely satisfactory. We can try to
guess a good stepsize a priori, but a bad choice might be very inecient. We can randomly
choose a new stepsize from some xed distribution at every move, and thereby be sure
of sometimes using a good stepsize, at the cost of often using a bad one. We can do a
preliminary run to nd a good stepsize, and then x the stepsize at that value for the nal
run, but this works only if the same stepsize is good throughout the course of the simulation.
Finally, we can adapt the stepsize, and hope that the error introduced by this adaptation
is not too large.
How else might this problem be tackled? One possibility for the hybrid Monte Carlo method
is to choose the stepsize at random, but terminate trajectories with bad stepsizes early,
before they have cost much in computation time. As I mention in (Neal, 5:1993), this can
be valid if done properly. Perhaps other such loopholes exist.
Choosing a coordinate system. The performance of many of the algorithms discussed
in this review can depend strongly on the coordinate system used. For example, Gibbs
sampling converges in one iteration if all the components of the state are independent, but
can take much longer, for the same distribution, if the state is instead represented using
components that are highly correlated, as may be the case if the coordinate system is rotated.
The Gibbs sampler is, however, invariant under translation (except, inevitably, for the e ect
of the initial state distribution). For the dynamical algorithms, eciency (with the optimal

                                             116
                            7.1 Improvements in the algorithms

stepsize) is greatest when the second derivative of the energy is of similar magnitude in
all directions. This property is independent of translation and rotation, but changes if the
coordinates are rescaled by di erent amounts in di erent directions.
For some problems, an appropriate coordinate system can be chosen a priori. For example,
in a molecular simulation where each molecule interacts with only a few others in its vicinity,
it seems reasonable to use the positions and momenta of the molecules as coordinates, since
many of these will be essentially independent. In other problems, the choice of coordinate
system is more dicult. For example, the weights on di erent connections in a multi-layer
perceptron can be highly dependent, raising doubts as to whether the obvious coordinate
system is in this case the best. The best coordinate system may also be di erent for di erent
parts of the state space.
Bennett (5:1975) describes a way of nding a good coordinate system for dynamical simu-
lations (by the equivalent means of nding a good form for the kinetic energy). His method
can be applied adaptively, as the simulation runs, but one must then deal with the general
problems of adaptation mentioned above. One potential source of ideas for nding a good
coordinate system is the literature on optimization, in which similar problems are addressed.
Skilling (9:1992) has pursued this approach with respect to conjugate gradient methods; the
stochastic multigrid methods reviewed by Goodman and Sokal (4:1989) can also be viewed
in this light.
Eliminating random walks. We have seen that the hybrid Monte Carlo method, used
with long trajectories, avoids much of the random walk behaviour characteristic of simpler
versions of the Metropolis algorithm. Consequently, with N energy gradient evaluations,
the hybrid Monte Carlo algorithm can move a distance proportional to Np, while a random
walk algorithm will likely have traversed only a distance proportional to N .
It is natural to ask whether other ways of achieving this result might be possible. For
example, is the introduction of \momentum" variables essential? A method that could be
applied to systems with discrete variables would be particularly interesting, as there the
hybrid Monte Carlo method is not applicable.
Is there a better approach? There are at least two respects in which any Monte Carlo
method based on Markov chain sampling will be sub-optimal.
From the point of view of search, basing the next state on only the current state, as a Markov
chain does, can clearly lead to a bad choice, such as one of the states already visited. The
ineciencies of the random walks that many of the Markov chain methods engage in can
be seen as one manifestation of this problem. It seems quite conceivable that a better way
of choosing states could be found.
The Monte Carlo estimation procedure itself is also fundamentally sub-optimal. According
to Bayesian theory, the conclusion one draws from given information, such as the results of
evaluating a function with various arguments, should not depend on why that information
was gathered, but only on the information itself. The Monte Carlo estimation formula of
equation (2) violates this dictum, as it depends crucially on the states used having been
chosen at random.
Can we therefore hope to nd some entirely di erent method that can handle, better, the
same problems that can be tackled by Markov chain Monte methods? I believe so, but
the problem is not trivial. An \improved" search procedure will not be bene cial if it
requires much more time to choose a state, and this state turns out to usually be only

                                             117
                                 7.2 Scope for applications

slightly better than one chosen at random. Replacing frequentist Monte Carlo estimates
with Bayesian inferences runs the risk of an in nite regress, if the resulting problem of
Bayesian computation is as dicult as that which we set out to solve originally.
The potential bene ts of a new approach are substantial, however. As well as perhaps
producing a faster algorithm, a careful Bayesian analysis might also reveal exactly what
assumptions we are implicitly making when we decide that some Markov chain Monte Carlo
method will likely be able to solve a given problem, even though we lack a rigorous proof
of rapid convergence, or when we decide that a particular Monte Carlo run has actually
produced a reasonable estimate.

7.2 Scope for applications
Markov chain Monte Carlo methods have long been a standard tool in statistical physics.
In recent years, applications to quantum chromodynamics and to the simulation of proteins
and nucleic acids have been particularly prominent. Markov chain methods are now also
becoming standard tools for performing probabilistic inference in statistical applications,
and they should be even more relevant for the complex probabilistic models that are, in my
opinion, the most promising approach to tackling many problems in arti cial intelligence.
More speculatively, it is interesting to ask whether any operations in the brain, or other
biological systems, can usefully be viewed as Monte Carlo implementations of probabilistic
inference.
Applications to statistical inference. Gibbs sampling has proved to be a exible tool
for Bayesian inference. For some problems, it has allowed realistic models to be used when
these would previously not have been feasible, or could have been made feasible only by the
expenditure of considerable e ort to develop specialized analytical or numerical techniques.
One promising avenue for future research in this area is to apply the other Markov chain
sampling methods described in this review to statistical problems. Another is to further
exploit the capabilities provided by the Markov chain methods by developing and applying
new models that would previously have been dismissed as impractical. One challenge is to
 nd ways of expressing prior beliefs in complex domains.
To illustrate the possibilities in this respect, consider the common practice of restricting
attention to models whose number of parameters is small in relation to the amount of data
available. While this is certainly necessary if good results are to be obtained with procedures
such as maximum likelihood, the practice makes no sense from a Bayesian perspective |
the choice of which model or models to consider is a matter of prior belief, and should not
depend on how much data is later collected. There are two diculties with using a complex
model to analyse a small data set, however. First, one must be careful to use a prior for
the parameters of the model that accurately re ects prior beliefs, including in some form
the same biases that might otherwise have lead one use a simple model of a particular type.
Second, one must be able to deal computationally with a complex model when the amount
of data is not sucient to produce a posterior that is approximately Gaussian, a problem
for which Monte Carlo methods are relevant. If these two diculties can be addressed, use
of a complex model to analyse a small data set would potentially be able to bring out the
maximum amount of information in the data, and, perhaps more importantly, fully indicate
the degree of uncertainty in the conclusions drawn.
Applications to arti cial intelligence. The most straightforward applications of Markov
chain methods in arti cial intelligence are to inference for a particular situation using a spec-

                                              118
                                7.2 Scope for applications

i ed probabilistic model. For models expressed using belief networks, based on information
obtained from experts, Markov chain methods have been reasonably well developed, at least
as a research area.
Probabilistic models that are formally and computationally similar to these may also be able
to provide a sound basis for more speculative work in arti cial intelligence. The \Copycat"
system of Mitchell and Hofstadter (2:1990) provides an example of work that might be
improved by a probabilistic formulation. Copycat is intended to model high-level perception
and analogy-making, within an idealized microworld. When presented with a situation
requiring interpretation, Copycat attempts to build perceptual structures that bring out
the deep similarities between super cially dissimilar objects, allowing it to then make an
analogy. These structures are built by the interaction of competing and cooperating local
agents, whose actions are in part stochastic. While its design is based on certain general
principles, the speci cs of Copycat's implementation are rather ad hoc, making it dicult to
determine which aspects of the system are essential, and to what extent the same ideas would
be expected to work in other domains. It seems possible that a more transparent system
of similar capabilities might be built in which the situation presented is modeled using a
belief network. Higher levels in this network would contain latent variables representing the
deep aspects of the situation that are common to all its components. Lower levels would
express how these aspects are realized in each object. Since such a network would be highly
interconnected, inference would likely require the use of Markov chain methods.
A further advantage of representing knowledge in probabilistic form is that we can then
envision learning such representations from empirical data, using Bayesian, maximum like-
lihood, or other statistical procedures. In particular, models with latent variables where
relationships are expressed via belief networks appear capable of representing the structure
of many domains, from vision to natural language. I believe that Bayesian inference using
Monte Carlo methods is a promising approach to learning such structures.
A model for biological processes? Finally, we can ask whether it might be useful to
view neural or other biological systems as implementations of probabilistic inference using
Markov chain Monte Carlo methods.
In some respects, this seems quite plausible. Organisms certainly need some way of coping
with an uncertain environment if they are to survive and reproduce, and the world is cer-
tainly complex enough that models for which Markov chain methods would be appropriate
might be necessary. It is easy to envision how a biological system could use replicated
sub-systems to produce the moderate number of sample points required to form a Monte
Carlo estimate. (This is probably more reasonable than using time averages.) Replication
is an ubiquitous feature of biological systems, and might be necessary in any case to ensure
fault-tolerance.
In other respects, however, envisioning biological implementations of Markov chain methods
is more dicult. The generation of random variates required for Gibbs sampling and the
consideration and possible rejection of candidate moves for the Metropolis algorithm both
require types of computation that are perhaps far-fetched in a biological context. Methods
based on stochastic dynamics seem more natural, however. The Langevin method seems
particularly promising, as it does not require the representation of momentum variables.
A conceptual problem with viewing biological learning in Bayesian terms is that the Bayesian
posterior distribution is based on the entirety of a given training set. Even if one assumes
that a set of training cases is stored in episodic memory, it seems implausible that they

                                            119
                                7.2 Scope for applications

are all attended to simultaneously during learning. It appears necessary to instead consider
some form of \on-line" learning, in which the learning procedure sees only a single training
case at each step. One idea for reconciling this with the requirements of Bayesian inference
by Markov chain sampling is to make the amount of noise in the gradient of the log likelihood
that results from using only a single training case match the amount that would need to be
introduced in any case to supply the stochastic element in the dynamics.




                                            120
                         8. Annotated Bibliography
Works are referred to by author, section, and year; for example, (Metropolis, et al , 4:1953)
is found in Section 4 below. I have included a number of works of interest that are not
referenced in the text. I have had to refrain from including many of the large number
of papers that merely detail particular applications in statistical physics and in statistical
inference.

                     1. General Works on Monte Carlo Methods
Included here are reviews, monographs, texts, compilations, and historical accounts con-
cerning Monte Carlo methods, particularly those based on Markov chains.
Abraham, F. F. (1986) \Computational statistical mechanics: Methodology, applications and su-
   percomputing", Advances in Physics, vol. 35, pp. 1-111.
   Reviews the Metropolis and dynamical methods of simulation, and contains extensive material
   on their applications in statistical physics.
Besag, J. and Green, P. J. (1993) \Spatial statistics and Bayesian computation" (with discussion),
   Journal of the Royal Statistical Society B, vol. 55, pp. 25-37 (discussion, pp. 53-102).
   Reviews progress in Markov chain Monte Carlo methods, including discussion of antithetic
   methods, and the use of auxiliary variables, as in the Swendsen-Wang algorithm.
Binder, K. (1979) \Introduction: Theory and `technical' aspects of Monte Carlo simulations", in
   K. Binder (editor) Monte Carlo Methods in Statistical Physics, Berlin: Springer-Verlag.
   A general introduction to the use of Monte Carlo methods based on the the Metropolis algorithm
   in statistical physics. Discussions of the \rejectionless" method and of error estimation are of
   particular interest.
Ciccotti, G., Frenkel, D., McDonald, I. R. (1987) Simulation of Liquids and Solids: Molecular
   Dynamics and Monte Carlo Methods in Statistical Mechanics, Amsterdam: North-Holland.
   An annotated collection of reprints of original papers, including (Metropolis, et al , 4:1953),
   (Bennett, 7:1976), and (Torrie and Valleau, 7:1977).
Gelman, A. (1993) \Iterative and non-iterative simulation algorithms", to appear in Computing
   Science and Statistics: Proceedings of the 24th Symposium on the Interface.
   Reviews rejection sampling, importance sampling, the Metropolis algorithm, and Gibbs sam-
   pling, pointing out how the rst two as well as the latter two can be viewed as iterative in
   nature.
Gordon, R. (1980) \Monte Carlo methods for cooperative ISING models", in G. Karreman (editor)
   Cooperative Phenomena in Biology, New York: Pergamon Press.
   Discusses the Metropolis algorithm as applied to discrete systems. Several variations are de-
   scribed, including the \rejectionless" method, which avoids the problem of long runs of the same
   state. Describes applications in chemistry and biology.
Hammersley, J. M. and Handscomb, D. C. (1964) Monte Carlo Methods, London: Chapman and
   Hall.
   A classic text covering Monte Carlo methods, including the Metropolis algorithm.
Heermann, D. W. (1990) Computer Simulation Methods in Theoretical Physics, 2nd edition, Berlin:

                                               121
                                8. Annotated Bibliography (1)

   Springer-Verlag.
   An introductory treatment of both molecular dynamics and Monte Carlo methods, and their
   applications in statistical physics.
Heermann, D. W. and Burkitt, A. N. (1992) \Parallel algorithms for statistical physics problems",
   in K. Binder (editor) The Monte Carlo Method in Condensed Matter Physics, Berlin: Springer-
   Verlag.
   Reviews methods for exploiting parallel hardware in statistical physics computations, primarily
   those based on Markov Chain Monte Carlo methods, both those of the Metropolis type, and
   those based on dynamical simulation.
Kalos, M. H. and Whitlock, P. A. (1986) Monte Carlo Methods, Volume I: Basics, New York: John
   Wiley.
   An introduction to Monte Carlo sampling methods, including the Metropolis algorithm, and
   their uses in numerical integration and the solution of integral equations.
Kennedy, A. D. (1990) \The theory of hybrid stochastic algorithms", in P. H. Damgaard, et al
   (editors) Probabilistic Methods in Quantum Field Theory and Quantum Gravity, New York:
   Plenum Press.
   Reviews the basics of Monte Carlo integration using Markov chains, and of the Metropolis
   algorithm in particular, and then discusses \hybrid" algorithms that employ dynamical methods,
   reviewing attempts to analyse their performance for the simple case of a multivariate Gaussian
   distribution.
Ripley, B. D. (1987) Stochastic Simulation, New York: John Wiley.
   Discusses simulation methods, including the Metropolis algorithm. Has material on random
   number generation, methods for reducing variance, and assessing error in estimates.
Sheykhet I. I. and Simkin, B. Y. (1990) \Monte Carlo method in the theory of solutions", Computer
   Physics Reports, vol. 12, pp. 67-133.
   Reviews the Metropolis Monte Carlo algorithm and its variants, including the \force bias"
   and \smart Monte Carlo" methods, techniques for free energy estimation, and the problems of
   applying these methods to the simulation of liquids.
Sinclair, A. (1993) Algorithms for Random Generation and Counting: A Markov Chain Approach,
   Boston: Birkhauser.
   Develops randomized algorithms for the approximate counting of large sets, using methods
   related to those used for free energy estimation, implemented using sampling via Markov chains.
   Covers the same work as (Sinclair and Jerrum, 7:1989) and (Jerrum and Sinclair, 4:1989).
   Includes an appendix reviewing more recent work.
Smith, A. F. M. and Roberts, G. O. (1993) \Bayesian computation via the Gibbs sampler and
   related Markov chain Monte Carlo methods" (with discussion), Journal of the Royal Statistical
   Society B, vol. 55, pp. 3-23 (discussion, pp. 53-102).
   Discusses recent developments in Gibbs sampling and the Metropolis algorithm, and their ap-
   plication to statistical problems.
Swendsen, R. H., Wang, J-S., and Ferrenberg, A. M. (1992) \New Monte Carlo methods for im-
   proved eciency of computer simulations in statistical mechanics", in K. Binder (editor) The
   Monte Carlo Method in Condensed Matter Physics, Berlin: Springer-Verlag.
   Reviews several recent improvements in Metropolis type Monte Carlo methods, including the


                                               122
                                 8. Annotated Bibliography (2)

   Swendsen-Wang algorithm and the replica Monte Carlo method, and discusses \histogram"
   techniques for making use of data from one or several simulations.
Tierney, L. (1991a) \Markov chains for exploring posterior distributions", Technical Report No. 560,
   School of Statistics, University of Minnesota.
   Presents methods related to the Metropolis algorithm and Gibbs sampler, reviews applicable
   results from the theory of Markov Chains, and discusses implementation issues, all from the
   viewpoint of applying Markov chain sampling to Bayesian inference for statistical problems.
Tierney, L. (1991b) \Exploring posterior distributions using Markov chains", in E. M. Keramidas
   (editor), Computing Science and Statistics: Proceedings of the 23rd Symposium on the Interface,
   pp. 563-570, Interface Foundation.
   Similar to (Tierney, 1:1991a), but shorter.
Toussaint, D. (1989) \Introduction to algorithms for Monte Carlo simulations and their application
   to QCD", Computer Physics Communications, vol. 56, pp. 69-92.
   Reviews the Metropolis, molecular dynamics, and hybrid Monte Carlo methods, and discusses
   their application to quantum chromodynamics.
Valleau, J. P. and Torrie, G. M. (1977) \A guide to Monte Carlo for statistical mechanics: 2. By-
   ways", in B. J. Berne (editor) Statistical Mechanics, Part A: Equilibrium Techniques (Modern
   Theoretical Chemistry, Volume 5), New York: Plenum Press.
   Includes a review of methods for estimating free energy di erences, and of applications of Monte
   Carlo methods to quantum mechanical calculations.
Valleau, J. P. and Whittington, S. G. (1977) \A guide to Monte Carlo for statistical mechanics:
   1. Highways", in B. J. Berne (editor) Statistical Mechanics, Part A: Equilibrium Techniques
   (Modern Theoretical Chemistry, Volume 5), New York: Plenum Press.
   An introduction to the Metropolis Monte Carlo method, including a discussion of the best choice
   of transition matrix and of rate of convergence.
Wood, W. W. (1985) \Early history of computer simulations in statistical mechanics", in Molecular-
   Dynamics Simulation of Statistical-Mechanical Systems (Proceedings of the International School
   of Physics \Enrico Fermi", Course 97), Amsterdam: North-Holland.
   Recounts the early history of attempts to simulate statistical mechanical systems using the
   Monte Carlo and molecular dynamics methods.

                2. Probabilistic Inference for Arti cial Intelligence
I list here works on applications of probabilistic inference to problems that may be regarded
as being in the domain of arti cial intelligence. See also (Geman and Geman, 4:1984) and
(Pearl, 4:1987).
Ackley, D. H., Hinton, G. E., and Sejnowski, T. J. (1985) A learning algorithm for Boltzmann
   machines, Cognitive Science, vol. 9, pp. 147-169.
   Uses Gibbs sampling with simulated annealing to sample probability distributions represented
   by a neural network with symmetric connections. Maximum likelihood estimates for the weights
   on connections are found using \positive" and \negative" phase simulations.
Anderson, J. R. and Matessa, J. R. (1992) \Explorations of an incremental, Bayesian algorithm for


                                                123
                                 8. Annotated Bibliography (2)

   categorization", Machine Learning, vol. 9, pp. 275-308.
   Describes an incremental algorithm for latent class analysis based on Bayesian methods, and
   explores its uses in machine learning and in psychological modeling.
Buntine, W. (1992) \Learning classi cation trees", Statistics and Computing, vol. 2, pp. 63-73.
   Presents Bayesian methods for inferring classi cation trees from data. Includes a Bayesian
   derivation of a common tree growing heuristic, and computational methods for averaging over
   all possible prunings of a tree, as well as over di erent tree structures.
Buntine, W. L. and Weigend, A. S. (1991) \Bayesian back-propagation", Complex Systems, vol. 5,
   pp. 603-643.
   Discusses Bayesian forms of backpropagation learning for multi-layer perceptron networks using
   the Gaussian approximation method.
Charniak, E. (1991) \Bayesian networks without tears", AI Magazine, vol. 12, pp.50-63.
   A tutorial introduction to the use of belief networks to express probabilistic knowledge.
Cheeseman, P. (1988) \An inquiry into computer understanding" (with discussion), Computational
   Intelligence, vol. 4, pp. 57-142. Further discussion appears in vol. 6, pp. 179-192.
   Advocates the use of probability and Bayesian statistical inference for uncertain reasoning and
   learning in arti cial intelligence. Includes numerous replies by other workers of varied opinions.
Cheeseman, P., Kelly, J., Self, M., Stutz, J., Taylor, W., and Freeman, D. (1988) AutoClass: A
   Bayesian classi cation system, Proceedings of the Fifth International Conference on Machine
   Learning.
   Uses latent class models in a machine learning context, estimating their parameters by max-
   imum penalized likelihood (which the authors view as a \maximum a posteriori probability"
   approximation to Bayesian inference).
Dagum, P. and Luby, M. (1993) \Approximating probabilistic inference in Bayesian belief networks
   is NP-hard", Arti cial Intelligence, vol. 60, pp. 141-153.
   Shows, assuming certain widely-believed conjectures in complexity theory, that one cannot,
   in the worst case, approximate the conditional distribution for one variable in a belief network
   conditioned on a value for another variable in an amount of time that is bounded by a polynomial
   in the size of the network and the reciprocal of the approximation error. This still applies if one
   allows randomized algorithms that deliver such an approximation with high probability.
Duda, R. O. and Hart, P. E. (1973) Pattern Classi cation and Scene Analysis, New York: John
   Wiley.
   A frequently referenced work that presents the basics of decision theory for classi cation models,
   and discusses learning such models by maximum likelihood and Bayesian methods, in supervised
   and unsupervised contexts.
Hanson, R., Stutz, J., and Cheeseman, P. (1991) \Bayesian classi cation with correlation and
   inheritance", presented at the 12th International Joint Conference on Arti cial Intelligence,
   Sydney, Australia, August 1991.
   Applies the Gaussian approximation method to Bayesian inference for latent class models.
Lauritzen, S. L. and Spiegelhalter, D. J. (1988) Local computations with probabilities on graphi-
   cal structures and their application to expert systems (with discussion), Journal of the Royal
   Statistical Society B, vol. 50, pp. 157-224.


                                                124
                                8. Annotated Bibliography (2)

   Presents exact, deterministic methods of computing conditional probabilities in belief networks
   that are feasible for networks with sparse connectivity.
Lavine, M. and West, M. (1992) \A Bayesian method for classi cation and discrimination", Cana-
   dian Journal of Statistics, vol. 20, pp. 451-461.
   Describes how Gibbs sampling may be used to perform Bayesian inference for normal-mixture
   models, such as in latent class modeling of real-valued data (though this application is not the
   principle motivation of the authors).
MacKay, D. J. C. (1991) Bayesian Methods for Adaptive Models, Ph.D thesis, California Institute
   of Technology.
   Develops Bayesian methods for interpolation and classi cation, particularly using multi-layer
   perceptrons as models. Emphasizes the Bayesian approach to selecting which model (e.g. which
   network architecture) best ts the data.
MacKay, D. J. C. (1992a) \Bayesian interpolation", Neural Computation, vol. 4, pp. 415-447.
   Illustrates Bayesian inference in the context of interpolation, with emphasis on the Bayesian
   approach to model selection.
MacKay, D. J. C. (1992b) \A practical Bayesian framework for backpropagation networks", Neural
   Computation, vol. 4, pp. 448-472.
   Applies the Gaussian approximation method to Bayesian inference for neural networks, including
   the comparison of di erent network architectures.
MacKay, D. J. C. (1993) \Bayesian non-linear modeling for the energy prediction competition",
   preprint.
   Applies the techniques of (Mackay, 2:1992b) to two prediction problems relating to energy usage
   in buildings.
Mitchell, M. and Hofstadter, D. R. (1990) \The emergence of understanding in a computer model
   of concepts and analogy-making", Physica D, vol. 42, pp. 322-334.
   Presents a computational model for high-level perception and analogy in which local agents com-
   pete and cooperate in constructing a representation of a situation. The model is implemented
   in an idealized microworld.
Neal, R. M. (1992a) \Bayesian training of backpropagation networks by the hybrid Monte Carlo
   method", Technical Report CRG-TR-02-1, Dept. of Computer Science, University of Toronto.
   Applies the hybrid Monte Carlo algorithm with simulated annealing to problems of inference
   and prediction in a Bayesian formulation of neural network learning.
Neal, R. M. (1992b) \Connectionist learning of belief networks", Arti cial Intelligence, vol. 56,
   pp. 71-113.
   Develops maximum likelihood learning procedures using Gibbs sampling for two types of belief
   network, and compares the learning performance of these networks with that of Boltzmann
   machines.
Neal, R. M. (1992c) \Bayesian mixture modeling", in C. R. Smith, G. J. Erickson, and P. O. Neu-
   dorfer (editors) Maximum Entropy and Bayesian Methods: Proceedings of the 11th International
   Workshop on Maximum Entropy and Bayesian Methods of Statistical Analysis, Seattle, 1991,
   Dordrecht: Kluwer Academic Publishers.
   Applies Gibbs sampling to Bayesian inference for latent class models, including models with a
   countably in nite number of latent classes.

                                               125
                                 8. Annotated Bibliography (2)

Neal, R. M. (1993a) \Bayesian learning via stochastic dynamics", in C. L. Giles, S. J. Hanson, and
   J. D. Cowan (editors) Advances in Neural Information Processing Systems 5, pp. 475-482, San
   Mateo, California: Morgan Kaufmann.
   Compares stochastic dynamics and hybrid Monte Carlo implementations of Bayesian learning
   for multi-layer perceptrons with traditional learning methods. Shows that the Bayesian methods
   can nd good values for \weight decay" constants without the need for a \validation" set.
Neal, R. M. (1993b) \Priors for in nite networks", in preparation.
   Shows how to de ne prior distributions over the weights in a neural network in such a fashion
   that as the number of hidden units goes to in nity the distribution over functions computed by
   the network reaches a sensible limit.
Oliver, R. M. and Smith, J. Q., editors (1990) In uence Diagrams, Belief Nets and Decision Analysis
   (proceedings of a conference entitled `In uence diagrams for decision analysis, inference, and
   prediction', Berkeley, USA, 1988), Chichester, England: John Wiley.
   A collection of papers on methods for expressing probability distributions using belief networks,
   and the extension of this idea to networks with nodes representing decisions.
Pearl, J. (1988) Probabilistic Reasoning in Intelligent Systems: Networks of Plausible Inference,
   San Mateo, California: Morgan Kaufmann.
   A wide-ranging book on the philosophy of probabilistic reasoning, formalisms for specifying
   probabilistic models, and algorithms for performing probabilistic inference. Contains extensive
   material on graphical structures, including \belief networks", that can represent a set of in-
   dependence relations between variables, and, with the addition of numerical parameters, their
   joint distribution.
Rumelhart, D. E., Hinton, G. E., and Williams, R. J. (1986) \Learning representations by back-
   propagating errors, Nature, vol. 323, pp. 533-536.
   Describes the \backpropagation" algorithm for neural network learning, one of whose advantages
   is the ability to discover features in the input, represented by the values of \hidden units".
Rumelhart, D. E., McClelland, J. L., and the PDP Research Group (1986) Parallel Distributed Pro-
   cessing: Explorations in the Microstructure of Cognition, Volume 1: Foundations, Cambridge,
   Massachusetts: MIT Press.
   Describes in uential early work in the \parallel distributed processing" framework, now more
   commonly referred to as \connectionism" or \neural networks". Includes papers on \backprop-
   agation" and \Boltzmann machines".
Seung, H. S., Sompolinsky, H., and Tishby, N. (1992) \Statistical mechanics of learning from
   examples", Physical Review A, vol. 45, pp. 6056-6091.
   Investigates the generalization properties of neural networks using the analytical tools of statis-
   tical mechanics, supplemented by numerical simulations using the Metropolis algorithm.
Spiegelhalter, D. J. and Lauritzen, S. L. (1990) \Sequential updating of conditional probabilities
   on directed graphical structures", Networks, vol. 20, pp. 579-605.
   Discusses Bayesian learning of the parameters in a belief network. The methods discussed
   are exact when the priors satisfy certain independence requirements and the training cases are
   completely observed. Approximations are proposed to handle more general problems.
Szeliski, R. (1989) Bayesian Modeling of Uncertainty in Low-level Vision, Boston: Kluwer.
   Applies Bayesian methods to modeling surfaces that have been observed using noisy sensors,


                                                126
                                 8. Annotated Bibliography (3)

   using prior distributions favouring some degree of smoothness. Implementation of such mod-
   els using Gibbs sampling is discussed, including use of the multigrid method. The Bayesian
   approach to estimating the degree of smoothness is discussed as well.
Thodberg, H. H. (1993) \Ace of Bayes: Application of neural networks with pruning", submitted
   to IEEE Transactions on Neural Networks.
   Reviews and extends the method for Bayesian learning of neural networks of MacKay (2:1992b),
   and applies it to a practical problem.
Watkin, T. L. H., Rau, A., and Biehl, M. (1993) \The statistical mechanics of learning a rule", to
   appear in Reviews of Modern Physics.
   Reviews work on applying the formalism of statistical mechanics to problems of learning.

                              3. Theory of Markov Chains
A number of reviews and monographs in Section 1 also cover the theory of Markov chains
(e.g. Kennedy, 1:1990, Sinclair, 1:1993, Tierney, 1:1991a). See also (Sinclair and Jerrum,
7:1989).
Diaconis, P. and Stroock, D. (1991) \Geometric bounds for eigenvalues of Markov chains", Annals
    of Applied Probability, vol. 1, pp.36-61.
    Develops bounds on the second largest eigenvalue of the transition matrix of a reversible Markov
    chain, and relates these to bounds on the convergence rate of the chain.
Feller, W. (1968) An Introduction to Probability Theory and Its Applications, Third Edition, New
    York: John Wiley.
    Includes a section that is a classic reference on Markov chains.
Fill, J. A. (1991) \Eigenvalue bounds on convergence to stationarity for nonreversible Markov
    chains, with an application to the exclusion process", Annals of Applied Probability, vol. 1,
    pp. 62-87.
    Discusses, extends, and applies a number of bounds on the convergence rate of Markov chains,
    including non-reversible chains.
Iosifescu, M. (1980) Finite Markov Processes and Their Applications, Chichester: John Wiley.
    A fairly readable treatment of nite Markov chains, including their analysis using eigenvalues
    of the transition matrix, the \fundamental matrix", and \ergodic coecients".
Kemeny, J. G. and Snell, J. L. (1960) Finite Markov Chains, (reprinted, 1976), New York: Springer-
    Verlag.
    A readable exposition of the theory of nite, homogeneous Markov chains.
Lawler, G. F. and Sokal, A. D. (1988) \Bounds on the L2 spectrum for Markov chains and Markov
    processes: A generalization of Cheeger's inequality", Transactions of the American Mathemat-
    ical Society, vol. 309, pp. 557-580.
    Gives bounds on the second largest eigenvalue of a Markov chain transition matrix, for both
    reversible and non-reversible chains, using a concept related to the \conductance" of Sinclair
    and Jerrum (7:1989).
Mihail, M. (1989) \Conductance and convergence of Markov chains | A combinatorial treatment

                                                127
                                  8. Annotated Bibliography (4)

   of expanders", 30th Annual Symposium on Foundations of Computer Science, 1989, IEEE.
   Gives bounds on the convergence rates of Markov chains in terms of \conductance" that apply
   to non-reversible chains. The results are proved without reference to eigenvalues.

                 4. The Metropolis and Gibbs Sampling Algorithms
These methods and their applications are also discussed in many of the reviews of Section 1,
of which (Toussaint, 1:1989), (Sheykhet and Simkin, 1:1990), and (Tierney, 1:1991a,b) are
recent accounts covering a variety of viewpoints.
Adler, S. L. (1981) \Over-relaxation method for the Monte Carlo evaluation of the partition function
    for multiquadratic actions", Physical Review D, vol. 23, pp. 2901-2904.
    Describes a Markov chain Monte Carlo algorithm inspired by \over-relaxed" optimization meth-
    ods that is applicable to systems in which all the conditional distributions for one variable given
    values for the others are Gaussian. (Despite the title, the method is not directly aimed at
    evaluating the paritition function, but rather at sampling from the corresponding canonical
    distribution.)
Belisle, C. J. P., Romeijn, H. E., and Smith, R. L. (1993) \Hit-and-run algorithms for generating
    multivariate distributions", Mathematics of Operations Research, vol. 18, pp. 255-266.
    Describes an algorithm for sampling from a bounded distribution over Euclidean space using
    a Markov chain that chooses new states from those along a randomly-chosen direction. Shows
    that the Markov chain satis es the detailed balance condition, and gives conditions for it to be
    ergodic.
Bhanot, G. and Kennedy, A. D. (1985) \Bosonic lattice gauge theory with noise", Physics Letters B,
    vol. 157, pp. 70-76.
    Applies the method of Kennedy and Kulti (4:1985), showing how unbiased estimates can often
    be obtained via Taylor series expansions.
Boender, C. G. E., Caron, R. J., McDonald, J. F., Rinnooy Kan, A. H. G., Romeijn, H. E., Smith,
    R. L., Telgen, J., and Vorst, A. C. F. (1991) \Shake-and-bake algorithms for generating uniform
    points on the boundary of bounded polyhedra", Operations Research, vol. 39, pp. 945-954.
    Applies what are in fact variations on the Metropolis algorithm to the problem of generating
    points uniformly distributed over the surface of a polyhedron.
Bortz, A. B., Kalos, M. H., and Lebowitz, J. L. (1975) \A new algorithm for Monte Carlo simulation
    of Ising spin systems", Journal of Computational Physics, vol. 17, pp. 10-18.
    Describes a simulation method for dynamical or equilibrium studies in which time spent in
    generating rejected transitions is avoided by sampling directly from the distribution for the
    next accepted transition. The method is applied to the Ising system.
Cunningham, G. W. and Meijer, P. H. E. (1976) \A comparison of two Monte Carlo methods for
    computations in statistical mechanics", Journal of Computational Physics, vol. 20, pp. 50-63.
    Compares the performance of the Metropolis algorithm using the standard Metropolis accep-
    tance function of equation (4.18) with that using the Boltzmann acceptance function of equa-
    tion (4.27).
Edwards, R. G. and Sokal, A. D. (1988) \Generalization of the Fortuin-Kasteleyn-Swendsen-Wang
    representation and Monte Carlo algorithm", Physical Review D, vol. 38, pp. 2009.

                                                 128
                                 8. Annotated Bibliography (4)

    Generalizes the algorithm of Swendsen and Wang (4:1987) for Ising models to any model in
    which the unnormalized probability of a state can be expressed as the product of a number of
    bounded functions of the state. Auxiliary variables are introduced for each such factor, and
    the algorithm proceeds by alternately chosing new values for the auxiliary and for the original
    variables.
Goodman, J. and Sokal, A. D. (1989) \Multigrid Monte Carlo method. Conceptual foundations",
    Physical Review D, vol. 40, pp. 2035-2071.
    Reviews Markov chain sampling methods in which updates are performed on both ne-grained
    and coarse-grained representations of the state.
Friedberg, R. and Cameron, J. E. (1970) \Test of the Monte Carlo method: Fast simulation of a
    small Ising lattice", Journal of Chemical Physics, vol. 52, pp. 6049-6058.
    Investigates possible sources of error in the Monte Carlo simulation of a 4  4 Ising system using
    a vectorized version of the Metropolis algorithm.
Frigessi, A., di Stefano, P., Hwang, C-R., and Sheu, S-J. (1993) \Convergence rates of the Gibbs
    sampler, the Metropolis algorithm, and other single-site updating dynamics", Journal of the
    Royal Statistical Society, vol. 55, pp. 205-219.
    Analyses the asymptotic rate of convergence of the Metropolis and Gibbs sampling algorithms,
    especially as applied to the Ising model.
Gelfand, A. E. and Smith, A. F. M. (1990) \Sampling-based approaches to calculating marginal
    densities", Journal of the American Statistical Association, vol. 85, pp. 398-409.
    Discusses applications to Bayesian statistical inference of the Gibbs sampler and two other
    Monte Carlo algorithms. The methods are illustrated using a variety of models with standard
    parametric forms, most with small to moderate numbers of parameters.
Geman, S. and Geman, D. (1984) \Stochastic relaxation, Gibbs distributions and the Bayesian
    restoration of images", IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 6,
    pp. 721-741.
    Develops \Markov random elds" as image models, and shows how, for given observed data,
    Gibbs sampling can be used to generate a sample of images from the posterior distribution
    produced by the model, or, in conjunction with simulated annealing, to nd the most probable
    image.
Greene, J. W. and Supowit, K. J. (1986) \Simulated annealing without rejected moves", IEEE
    Transactions on Computer-Aided Design, vol. 5, pp. 221-228.
    Describes a simulation method in which time spent on rejected moves is avoided by sampling
    from the distribution for the next accepted move, along with an implementation appropriate
    when the total number of possible moves is relatively small.
Hastings, W. K. (1970) \Monte Carlo sampling methods using Markov chains and their applica-
    tions", Biometrika, vol. 57, pp. 97-109.
    Generalizes the Metropolis algorithm, and discusses its use for statistical problems. Includes
    discussion of error estimation, and of the use of a Markov chain method as an importance
    sampler.
Hills, S. E. and Smith, A. F. M. (1992) \Parameterization issues in Bayesian inference" (with
    discussion), in J. M. Bernardo, J. O. Berger, A. P. Dawid, and A. F. M. Smith (editors),
    Bayesian Statistics 4, pp. 227-246, Oxford University Press.
    Discusses techniques for reparameterizing problems to aid computation, including reparame-

                                                 129
                                 8. Annotated Bibliography (4)

    terizations that remove dependencies between variables that slow the convergence of Gibbs
    sampling.
Jerrum, M. and Sinclair, A. (1989) \Approximating the permanent", SIAM Journal of Computing,
    vol. 18, pp. 1149-1178.
    Applies the technique for analysing the convergence rate of a Markov chain of (Sinclair and
    Jerrum, 7:1989) to show that a method based on the Metropolis algorithm can be used to
    approximate the \permanent" of a dense 0-1 matrix in polynomial time.
Kennedy, A. D. and Kuti, J. (1985) \Noise without noise: A new Monte Carlo Method", Physical
    Review Letters, vol. 54, pp. 2473-2476.
    Describes an adaptation of the Metropolis algorithm that, in some cases, allows unbiased results
    to be obtained using only an unbiased estimate of the ratio of the probabilities of two states,
    rather than the exact value.
Metropolis, N., Rosenbluth, A. W., Rosenbluth, M. N., Teller, A. H., and Teller, E. (1953) \Equa-
    tion of state calculations by fast computing machines", Journal of Chemical Physics, vol. 21,
    pp. 1087-1092.
    The classic paper on Monte Carlo sampling using Markov chains, introducing what is now known
    as the \Metropolis algorithm", and applying it to a problem in statistical physics.
Mezei, M. (1981) \On the selection of the particle to be perturbed in the Monte Carlo method",
    Journal of Computational Physics, vol. 39, pp. 128-136.
    Proposes a form of the Metropolis method in which components of the state are updated in an
    order chosen randomly for each cycle, and compares it to updating the components in a xed
    order, and to updating components chosen at random indepedently. The proof of ergodicity
    for the method (Theorem 1) is awed | a system in which all states have equal probabilities
    provides a counterexample.
Pearl, J. (1987) \Evidential reasoning using stochastic simulation of causal models, Arti cial Intel-
    ligence, vol. 32, pp. 245-257.
    Gives a simulation method (which is, in fact, Gibbs sampling) for inference in \belief networks",
    used to express probabilistic knowledge in expert systems. A parallel version of the algorithm
    is described as well.
Peskun, P. H. (1973) \Optimum Monte-Carlo sampling using Markov chains", Biometrika, vol. 60,
    pp. 607-612.
    Shows that in constructing Markov chains using the method of Hastings (4:1970), the standard
    Metropolis acceptance criterion is optimal from the point of view of maximizing the asymptotic
    precision of the estimates.
Peskun, P. H. (1981) \Guidelines for chosing the transition matrix in Monte Carlo methods using
    Markov chains", Journal of Computational Physics, vol. 40, pp. 327-344.
    Discusses the choice of transition matrix for Markov chains constructed using Hastings' method
    in order to maximize asymptotic precision, proposes approximate guidelines, and gives some
    empirical results.
Ritter, C. and Tanner, M. A. (1992) \Facilitating the Gibbs sampler: The Gibbs stopper and the
    Griddy-Gibbs sampler", Journal of the American Statistical Association, vol. 87, pp. 861-868.
    Proposes a method for diagnosing convergence of the Gibbs sampler, and a technique for doing
    approximate Gibbs sampling when the conditional distributions are dicult to sample from
    exactly.

                                                130
                                  8. Annotated Bibliography (5)

Swendsen, R. H. and Wang, J-S. (1987) \Nonuniversal critical dynamics in Monte Carlo simula-
   tions", Physical Review Letters, vol. 58, pp. 86-88.
   Presents a method of simulating Ising systems (and their generalizations) that exploits a map-
   ping to a percolation model. The new method is much faster than standard single-spin methods
   near a phase transition.
Tanner, M. A. and Wong, W. H. (1987) \The calculation of posterior distributions by data augmen-
   tation" (with discussion), Journal of the American Statistical Association, vol. 82, pp. 528-550.
   Describes an early method for simulating posterior distributions derived from partially observed
   data that is essentially a special case of Gibbs sampling.
Thomas, A., Spiegelhalter, D. J., and Gilks, W. R. (1992) \BUGS: A program to perform Bayesian
   inference using Gibbs sampling", in J. M. Bernardo, J. O. Berger, A. P. Dawid, and A. F. M.
   Smith (editors), Bayesian Statistics 4, pp. 837-842, Oxford University Press.
   Describes a program for general Bayesian inference using Gibbs sampling in which the model is
   expressed using the belief network formalism.
Wood, W. W. and Parker, F. R. (1957) \Monte Carlo equation of state of molecules interact-
   ing with the Lennard-Jones potential. I. A supercritical isotherm at about twice the critical
   temperature", Journal of Chemical Physics, vol. 27, pp. 720-733.
   Applies the Metropolis algorithm to the simulation of a system of Lennard-Jones molecules.
York, J. (1992) \Use of the Gibbs sampler in expert systems", Arti cial Intelligence, vol. 56,
   pp. 115-130.
   Discusses the application of Gibbs sampling to distributions de ned by belief networks. Proposes
   several methods of dealing with networks where some states have very low, or zero, probability.

               5. The Dynamical and Hybrid Monte Carlo Methods
These methods are also discussed in many of the reviews of Section 1, particularly (Toussaint,
1:1989) and (Kennedy, 1:1990).
Alder, B. J. and Wainwright, T. E. (1959) \Studies in molecular dynamics. I. General method",
   Journal of Chemical Physics, vol. 31, pp. 459-466.
   A classic early paper on use of the molecular dynamics method in statistical physics.
Andersen, H. C. (1980) \Molecular dynamics simulations at constant pressure and/or temperature",
   Journal of Chemical Physics, vol. 72, pp. 2384-2393.
   Shows how the molecular dynamics method can be extended to sample from other than the
   microcanonical ensemble. In particular, the total energy is allowed to vary by introducing simu-
   lated collisions in which the momentum of a particle is refreshed from the canonical distribution.
Bennett, C. H. (1975) \Mass tensor molecular dynamics", Journal of Computational Physics,
   vol. 19, pp. 267-279.
   Discusses dynamical simulations in which the kinetic energy is given the form 21 pT M 1 p, of
   which the usual 12 pT p is a special case. This e ectively rescales the coordinates, and, for a well
   chosen M , can improve the speed at which state space is explored.
Berendsen, H. J. C. and van Gunsteren W. F. (1986) \Practical algorithms for dynamic simula-
   tion", in Molecular-Dynamics Simulation of Statistical-Mechanical Systems (Proceedings of the

                                                 131
                                8. Annotated Bibliography (5)

   International School of Physics \Enrico Fermi", Course 97), Amsterdam: North-Holland.
   Discusses methods for integrating dynamical equations, concluding that the \leapfrog" method
   is often best, though other methods can be more accurate.
Creutz, M. (1988) \Global Monte Carlo algorithms for many-fermion systems", Physical Review D,
   vol. 38, pp. 1228-1238.
   Investigates the properties of the hybrid Monte Carlo and Langevin Monte Carlo methods.
Creutz, M. and Gocksch, A. (1989) \Higher-order hybrid Monte Carlo algorithms", Physical Review
   Letters, vol. 63, pp. 9-12.
   Develops integration methods accurate to arbitrarily high order that preserve phase space vol-
   ume, and applies them to the hybrid Monte Carlo method.
Duane, S. and Kogut, J. B. (1985) \Hybrid stochastic di erential equations applied to quantum
   chromodynamics", Physical Review Letters, vol. 55, pp. 2774-2777.
   Applies a combination of the molecular dynamics and Langevin methods to calculations in
   quantum chromodynamics.
Duane, S., Kennedy, A. D., Pendleton, B. J., and Roweth, D. (1987) \Hybrid Monte Carlo", Physics
   Letters B, vol. 195, pp. 216-222.
   The original paper showing how the dynamical and Metropolis methods can be combined to
   eliminate the bias due to the use of a nite stepsize in the dynamical simulations.
Earn, D. J. D. and Tremaine, S. (1992) \Exact numerical studies of Hamiltonian maps: Iterating
   without roundo error", Physica D, vol. 56, pp. 1-22.
   Discusses the advantages of simulating the dynamics of a Hamiltonian system with xed-point
   arithmetic, which allows reversibility and phase space volume to be preserved exactly even when
   round-o error is accounted for.
Horowitz, A. M. (1991) \A generalized guided Monte Carlo algorithm", Physics Letters B, vol. 268,
   pp. 247-252.
   Introduces a variation on the Hybrid Monte Carlo algorithm in which the momenta are not
   completely replaced after each dynamical trajectory.
Kennedy, A. D. and Pendleton, B. (1991) \Acceptances and autocorrelations in hybrid Monte
   Carlo", Nuclear Physics B (Proc. Suppl.), vol. 20, pp. 118-121.
   Gives a detailed theoretical analysis of the behaviour of the hybrid Monte Carlo algorithm
   applied to a multivariate Gaussian distribution.
Mackenzie, P. B. (1989) \An improved hybrid Monte Carlo method", Physics Letters B, vol. 226,
   pp. 369-371.
   Points out the desirability of varying the trajectory length in the hybrid Monte Carlo algorithm
   in order to avoid situations where a xed length matches the period of some oscillation in the
   system.
Neal, R. M. (1993) \An improved acceptance procedure for the hybrid Monte Carlo algorithm", to
   appear in the Journal of Computational Physics.
   Presents a generalization of the hybrid Monte Carlo algorithm in which the acceptance prob-
   ability is increased by considering transitions to be between windows of several states at the
   beginning and end of the trajectory, rather than between single states.


                                               132
                                  8. Annotated Bibliography (6)

Nose, S. (1984) \A uni ed formulation of the constant temperature molecular dynamics methods",
   Journal of Chemical Physics, vol. 81, pp. 511-519.
   Describes a class of deterministic dynamical algorithms that sample from a system's canonical
   distribution by sampling from the microcanonical distribution for an extended system.
Rao, M., Pangali, C., and Berne, B. J. (1979) \On the force bias Monte Carlo simulation of wa-
   ter: methodology, optimization and comparison with molecular dynamics", Molecular Physics,
   vol. 37, pp.1773-1798.
   Discusses a form of the Metropolis algorithm in which the candidate states proposed are o set
   from the current state according to a distribution biased in the direction of the force, as evaluated
   at the current state. This candidate state is then accepted or rejected according to a criterion
   that takes into account the non-symmetrical form of this proposal distribution.
Rossky, P. J., Doll, J. D., and Friedman, H. L. (1978) \Brownian dynamics as smart Monte Carlo
   simulation", Journal of Chemical Physics, vol. 69, pp. 4628-4633.
   Uses Langevin dynamics to generate candidate states for the Metropolis algorithm, which are
   then accepted or rejected by a criterion that accounts for the non-symmetrical form of this
   proposal distribution.
Ruth, R. D. (1983) \A canonical integration technique", IEEE Transactions on Nuclear Science,
   vol. NS-30, pp. 2669-2671.
   Develops high order \canonical" or \symplectic" integration methods, which preserve phase
   space volume.
Sanz-Serna, J. M. (1992) \Symplectic integrators for Hamiltonian problems: An overview", Acta
   Numerica 1992, pp. 243-286.
   Reviews numerical methods for simulating Hamiltonian systems that respect the \symplectic"
   character of the dynamics, which (among other things) ensures that phase space volume is
   preserved.
Sexton, J. C. and Weingarten, D. H. (1992) \Hamiltonian evolution for the hybrid Monte Carlo
   algorithm", Nuclear Physics B, vol. 380, pp. 665-677.
   Discusses methods of simulating Hamiltonian dynamics which, as required by hybrid Monte
   Carlo, are reversible and preserve phase space volume. In particular, it discusses ways of
   exploiting situations where some terms in the potential energy are more easily calculated than
   others, as well as methods that are accurate to higher order than the leapfrog method.

                   6. Simulated Annealing and Related Techniques
Papers on the use of simulated annealing in optimization are very numerous. Here, I mostly
include only works that are relevant to the use of simulated annealing in speeding the
approach to equilibrium at a nite temperature. Annealing is also discussed in (Geman and
Geman, 4:1984).
Berg, B. A. and Celik, T. (1992) \New approach to spin-glass simulations", Physical Review Letters,
   vol. 69, pp. 2292-2295.
   Shows that simulations that sample from a \multicanonical" distribution, in which all energies
   in some range are of roughly equal probability, can reach the equilibrium distribution of a
   dicult system more quickly than can a direct simulation of the canonical distribution.


                                                 133
                                 8. Annotated Bibliography (6)

Bertsimas, D. and Tsitsiklis, J. (1993) \Simulated annealing", Statistical Science, vol. 8, pp. 10-15.
    Reviews work on simulated annealing, including convergence results and their relevance (or lack
    thereof), work on computational complexity, and empirical evaluations.
Cerny, V. (1985) \Thermodynamical approach to the travelling salesman problem: An ecient
    simulation algorithm", Journal of Optimization Theory and Applications, vol. 45, pp. 41-51.
    Applies the concept of annealing using the Metropolis algorithm to the problem of nding good
    solutions to the travelling salesman problem.
Frantz, D. D. and Freeman, D. L. (1990) \Reducing quasi-ergodic behavior in Monte Carlo sim-
    ulations by J-walking: Applications to atomic clusters", Journal of Chemical Physics, vol. 93,
    pp. 2769-2784.
    Presents a method of speeding convergence and reducing correlations in a Markov chain sim-
    ulation by occasionally attempting moves to a state sampled from a higher-temperature dis-
    tribution. Discusses methods of minimizing the systematic error that is introduced when the
    points from the higher-temperature distribution are not independent, as when they come from
    another Markov chain simulation.
Grieg, D. M., Porteous, B. T., and Seheult, A. H. (1989) \Exact maximum a posteriori estimation
    for binary images", Journal of the Royal Statistical Society B, vol. 51, pp. 271-279.
    Compares the exact maximum a posteriori estimates for a simple image reconstruction problem
    with those found using simulated annealing, showing that the latter are sometimes far from the
    exact estimate, and that the exact estimate is sometimes undesirable in any case.
Hajek, B. (1988) \Cooling schedules for optimal annealing", Mathematics of Operations Research,
    vol. 13, pp. 311-329.
    Proves that simulated annealing converges asymptotically to the set of global optima when a
    logarithmic annealing schedule is used, with a constant given by the greatest depth of a local
    minimum.
Ingber, L. (1989) \Very fast simulated re-annealing", Mathematical and Computer Modelling,
    vol. 12, pp. 967-973.
    Advocates a particular form of distribution for selecting candidate moves in the simulated
    annealing algorithm as applied to optimization, and the use of re-annealing with new parameters
    determined by the situation at the current minimum value.
Geyer, C. J. (1991) \Markov chain Monte Carlo maximum likelihood", in E. M. Keramidas (editor),
    Computing Science and Statistics: Proceedings of the 23rd Symposium on the Interface, pp. 156-
    163, Interface Foundation.
    Discusses various aspects of Markov chain Monte Carlo estimation. Of particular interest is the
    description of \Metropolis-coupled Markov chains" in Section 3, a technique related to simulated
    annealing.
Kirkpatrick, S., Gelatt, C. D., and Vecchi, M. P. (1983) \Optimization by simulated annealing",
    Science, vol. 220, pp. 671-680.
    The in uential paper that introduced the idea of using the Metropolis algorithm in conjunction
    with simulated annealing to nd good solutions to dicult optimization problems.
Marinari, E. and Parisi, G. (1992) \Simulated tempering: A new Monte Carlo Scheme", Europhysics
    Letters, vol. 19, pp. 451-458.
    Describes a scheme for sampling in systems where equilibrium is dicult to reach, in which the


                                                134
                                 8. Annotated Bibliography (7)

   temperature is made part of the state, allowing the system to surmount energy barriers at times
   when the temperature is high.
Szu, H. and Hartley, R. (1987) \Fast simulated annealing", Physics Letters A, vol. 122, pp. 157-162.
   Advocates use of a multivariate Cauchy distribution to select candidate moves in the simulated
   annealing algorithm as applied to optimization.
Salamon, P., Nulton, J. D., Harland, J. R., Pedersen, J., Ruppeiner, G. and Liao, L. (1988) \Sim-
   ulated annealing with constant thermodynamic speed", Computer Physics Communications,
   vol. 49, pp. 423-428.
   Advocates using an adaptive annealing schedule in which the simulation stays a constant dis-
   tance from the equilibrium distribution at the current temperature.
Otten, R. H. J. M. and van Ginneken, L. P. P. P. (1984) \Floorplan design using simulated anneal-
   ing", IEEE International Conference on Computer-Aided Design (ICCAD-84).
   A concise exposition of simulated annealing, its implementation with a particular cooling strat-
   egy, and its application to a problem in computer-aided design.
Wang, J-S. and Swendsen, R. H. (1988) \Low-temperature properties of the J Ising spin glass in
   two dimensions", Physical Review B, vol. 38, pp. 4840-4844.
   Describes a technique for reaching the equilibrium distribution of an Ising system at low temper-
   ature by simultaneously simulating a number of replicas of the system at various temperatures
   and introducing Metropolis moves that transfer information between the replicas.

                                7. Free Energy Estimation
For reviews of free energy estimation methods, see also (Valleau and Torrie, 1:1977) and
(Sheykhet and Simkin, 1:1990). The book by Sinclair (1:1993) is also relevant to this topic.
Aldous, D. (1993) \Approximate counting via Markov chains", Statistical Science, vol. 8, pp. 16-19.
   Reviews work on approximate counting of large sets using methods based on uniform sampling
   via Markov chains. This problem is a special case of free energy estimation, and the solutions
   discussed are related to methods developed for that problem.
Bash, P. A., Singh, U. C., Langridge, R., and Kollman, P. A. (1987), \Free energy calculations by
   computer simulation", Science, vol. 236, pp. 564-568.
   Discusses methods of free energy computation, including the \slow growth" method, and applies
   them to the calculation of the free energy of solvation for various organic molecules.
Bennett, C. H. (1976) \Ecient estimation of free energy di erences from Monte Carlo data",
   Journal of Computational Physics, vol. 22, pp. 245-268.
   An in-depth treatment of the problem of estimating free energy di erences from Monte Carlo
   data. Derives the acceptance ratio method, discusses allocation of simulation time between the
   systems, and presents an interpolation method for handling systems whose distributions do not
   overlap.
Frenkel, D. (1986) \Free-energy computation and rst-order phase transitions", in Molecular-
   Dynamics Simulation of Statistical-Mechanical Systems (Proceedings of the International School
   of Physics \Enrico Fermi", Course 97), Amsterdam: North-Holland.
   Reviews many techniques used in free energy estimation, including methods based on particle

                                                135
                                 8. Annotated Bibliography (8)

    insertion, on overlap in distributions, and on thermodynamic integration.
Jerrum, M. R., Valiant, L. G., and Vazirani, V. V. (1986) \Random generation of combinatorial
    structures from a uniform distribution", Theoretical Computer Science, vol. 43, pp. 169-188.
    Gives reductions between the problems of generating structures uniformly from a family of sets,
    and approximately counting the size of such sets.
Mezei, M. (1987) \Adaptive umbrella sampling: Self-consistent determination of the non-Boltzmann
    bias", Journal of Computational Physics, vol. 68, pp. 237-248.
    Presents a heuristic procedure for automatically determining the weighting function required
    for the umbrella sampling method of free energy estimation.
Sinclair, A. and Jerrum, M. (1989) \Approximate counting, uniform generation, and rapidly mixing
    Markov chains", Information and Computation, vol. 82, pp. 93-133.
    A paper of interest for two reasons. It discusses how algorithms for approximate counting of
    sets of structures that are \self-reducible" can be used to sample almost uniformly from such
    sets, and, conversely, that algorithms for sampling almost uniformly from such sets can be used
    to approximately count them. This work is related to methods for free energy estimation. The
    paper also presents a technique for showing that complex Markov chains are \rapidly mixing"
    | i.e. that they converge in a time that is small in relation to the size of the problem.
Torrie, G. M. and Valleau, J. P. (1977) \Nonphysical sampling distributions in Monte Carlo free-
    energy estimation: Umbrella sampling\, Journal of Computational Physics, vol. 23, pp. 187-199.
    Shows how to estimate the di erence in free energy of two systems using data from a single
    simulation run that has been designed to sample from a distribution that overlaps the canonical
    distributions for both systems.
Voter, A. F. (1985) \A Monte Carlo method for determining free-energy di erences and transition
    state theory rate constants", Journal of Chemical Physics, vol. 82, pp. 1890-1899.
    Extends the \acceptance ratio" method of Bennett (7:1976) by considering moves that translate
    the state vector at the same time as they switch energy functions, thereby allowing the free
    energy di erence for some pairs of systems to be found directly, without the need for intermediate
    systems.

                          8. Error Assessment and Reduction
These references concern strategies for performing Markov chain Monte Carlo sampling and
for assessing the accuracy of the resulting estimates. This topic is also discussed in a number
of the reviews in Section 1, particularly (Ripley, 1:1987, Chapter 6).
Diggle, P. J. (1990) Time Series: A Biostatistical Introduction, Oxford: Clarendon Press.
   A readable introduction to theory and algorithms for analysing time series. Section 3.6 discusses
   the application of these methods to assessing the error in an estimate of the mean of a stationary
   time series.
Gelman, A. and Rubin, D. B. (1993) \Inference from iterative simulation using multiple sequences"
   (with discussion), Statistical Science, vol. 7, pp. 457-511
   Advocates use of multiple runs in order to properly assess errors in iterative simulations, and
   proposes a detailed implementation of this strategy, based on the construction of an \overdis-
   persed" approximation to the distribution for use as an initial distribution for the Markov chain.

                                                 136
                                8. Annotated Bibliography (9)

Geweke, J. (1992) \Evaluating the accuracy of sampling-based approaches to the calculation of
   posterior moments" (with discussion), in J. M. Bernardo, J. O. Berger, A. P. Dawid, and A. F.
   M. Smith (editors), Bayesian Statistics 4, pp. 169-193, Oxford University Press.
   Applies spectral analysis to diagnosing convergence and assessing error in Gibbs sampling runs.
Geyer, C. J. (1993) \Practical Markov chain Monte Carlo" (with discussion), Statistical Science,
   vol. 7, pp. 473-511.
   Advocates use of a single long run in forming estimates from Markov chain Monte Carlo simu-
   lation and in assessing their accuracy.
Goutsias, J. (1991) \Unilateral approximation of Gibbs random eld images", CVGIP: Graphical
   Models and Image Processing, vol. 53, pp. 240-257.
   Shows how a Gibbs random eld can be approximated by a \mutually-compatible" Gibbs ran-
   dom eld (which may be viewed as a belief network). The approximation can be used to initialize
   a Gibbs sampling simulation used to sample from the original Gibbs random eld model.
Heidelberger, P. and Welch, P. D. (1981) \A spectral method for con dence interval generation and
   run length control in simulations", Communications of the ACM, vol. 24, pp. 233-245.
   Presents a method for assessing error in estimates derived from simulation data based on esti-
   mating the spectral density at zero frequency, using methods tailored to that task.
Law, A. M. (1983) \Statistical analysis of simulation output data", Operations Research, vol. 31,
   pp. 983-1029.
   Discusses the assessment of error in estimates obtained via simulation in an operations research
   context. The methods presented for \steady state" simulations are relevant to Markov chain
   Monte Carlo methods.
Morales, J. J., Nuevo M. J., and Rull, L. F. (1990) \Statistical error methods in computer simula-
   tions", Journal of Computational Physics, vol. 89, pp. 432-438.
   Compares a batch method of assessing error with a method based on estimating the autocorre-
   lation function.
Straatsma, T. P., Berendsen, J. J. C., and Stam, A. J. (1986) \Estimation of statistical errors in
   molecular simulation calculations", Molecular Physics, vol. 57, pp. 89-95.
   Presents a method of assessing error in estimates derived from correlated series, based on esti-
   mating the autocorrelation function, and advocates its use in preference to batching methods.
Roberts, G. O. (1992) \Convergence diagnostics of the Gibbs sampler", in J. M. Bernardo, J. O.
   Berger, A. P. Dawid, and A. F. M. Smith (editors), Bayesian Statistics 4, pp. 775-782, Oxford
   University Press.
   Proposes a method of diagnosing convergence of a single run of a reversible Markov chain, as
   measured by a particular metric for judging closeness to the equilibrium distribution.

                                9. Background References
This section lists works on statistical inference, computatonal statistics, statistical physics,
random variate generation, and other miscellaneous topics.
Alexandrowicz, Z. (1971) \Stochastic models for the statistical description of lattice systems",
   Journal of Chemical Physics, vol. 55, pp. 2765-2779.


                                               137
                                 8. Annotated Bibliography (9)

   Presents an approach to statistical physics problems in which the system is approximated by a
   probabilistic model for which sampling can easily be performed, without the need for methods
   based on Markov chains.
Barnett, V. (1982) Comparative Statistical Inference, Second Edition, New York: John Wiley.
   Presents and compares the conceptual bases of frequentist and Bayesian statistical inference
   and of decision theory.
Berger, J. O. (1985) Statistical Decision Theory and Bayesian Analysis, New York: Springer-Verlag.
   A comprehensive treatment of Bayesian statistics and decision theory, including discussion of
   foundational issues, as well as technical development. Discusses hierarchical priors speci ed
   using hyperparameters, but has little on non-parametric models.
Box, G. E. P. and Tiao, G. C. (1973) Bayesian Inference in Statistical Analysis, New York: John
   Wiley.
   A good exposition of Bayesian theory and practice, though mostly con ned to traditional sorts
   of statistical problems.
Cipra, B. A. (1987) \An introduction to the Ising Model", American Mathematical Monthly, vol. 94,
   pp. 937-959.
   A tutorial introduction to the Ising model of ferromagnetism, concentrating on its mathematical,
   and particularly combinatorial, aspects.
DeGroot, M. H. (1970) Optimal Statistical Decisions, New York: McGraw-Hill.
   An exposition of Bayesian statistics and decision theory at an intermediate level of diculty,
   including discussion of the conceptual basis of probability and utility, and with extensive dis-
   cussion of decision problems, but concentrating on simple parametric distributions.
Dempster, A. P., Laird, N. M., and Rubin, D. B. (1977) \Maximum likelihood from incomplete
   data via the EM algorithm" (with discussion), Journal of the Royal Statistical Society B, vol. 39,
   pp. 1-38.
   Presents a uni ed view of a class of algorithms for nding maximum likelihood estimates for
   models with latent variables, or in other situations where some variables were not observed.
Devroye, L. (1986) Non-uniform Random Variate Generation, New York: Springer-Verlag.
   A comprehensive reference on methods of generating random numbers drawn from standard
   distributions.
Efron, B. (1979) \Computers and the theory of statistics: Thinking the unthinkable", SIAM Review ,
   vol. 21, pp. 460-480.
   Discusses a number of computer-intensive methods for statistical analysis, including the jacknife,
   the bootstrap, and cross-validation.
Evans, M. (1991) \Adaptive importance sampling and chaining", in N. Flournoy and R. K. Tsu-
   takawa, Statistical Multiple Integration: Proceeding of a Joint Summer Research Conference
   Held at Humboldt University, June 17-23, 1989, Series in Contemporary Mathematics, no. 115,
   Providence, Rhode Island: American Mathematical Society.
   Describes how, starting from a poor, but not completely unacceptable importance sampler, one
   can nd successively better importance samplers, and how an acceptable initial importance
   sampler can found by \chaining" from an easier problem.
Everitt, B. S. (1984) An Introduction to Latent Variable Models, London: Chapman and Hall.

                                                138
                                  8. Annotated Bibliography (9)

    Discusses latent variable models of several sorts, including factor analysis, where both the latent
    and the observable variables are continuous, and latent class / latent pro le analysis, where the
    latent variable is discrete.
Flournoy, N. and Tsutakawa, R. K. (1991) Statistical Multiple Integration: Proceeding of a Joint
    Summer Research Conference Held at Humboldt University, June 17-23, 1989, Series in Con-
    temporary Mathematics, no. 115, Providence, Rhode Island: American Mathematical Society.
    A collection of papers on methods of performing integrations over high-dimensional spaces, such
    as those required for performing Bayesian inference.
Gilks, W. R. (1992) \Derivative-free adaptive rejection sampling for Gibbs sampling", in J. M.
    Bernardo, J. O. Berger, A. P. Dawid, and A. F. M. Smith (editors), Bayesian Statistics 4,
    pp. 641-649, Oxford University Press.
    Modi es the method of Gilks and Wild (4:1992) to permit its use when the log of the probability
    density can be calculated, but not its derivative.
Gilks, W. R. and Wild, P. (1992) \Adaptive rejection sampling for Gibbs sampling", Applied
    Statistics, vol. 41, pp. 337-348.
    Describes a \black box" method for generating a random value from a continuous univariate
    distribution for which the log probability density function is concave, and it and its derivative
    can be calculated. Argues that this method will often be applicable to Gibbs sampling for
    hierarchical Bayesian models.
Je reys, W. H. and Berger, J. O. (1992) \Ockham's razor and Bayesian analysis", American Sci-
    entist, vol. 80, pp. 64-72. See also the discussion in vol. 80, pp. 212-214.
    Explains the automatic Ockham's razor e ects of Bayesian inference, with reference to a scien-
    ti c hypothesis testing situation.
Press, S. J. (1989) Bayesian Statistics: Principles, Models, and Applications, New York: John
    Wiley.
    An introduction to the concepts, implementation, applications, and history of Bayesian infer-
    ence.
Schmitt, S. A. (1969) Measuring Uncertainty: An Elementary Introduction to Bayesian Statistics,
    Reading, Massachussets: Addison-Wesley.
    A readable introduction to Bayesian statistics and decision theory, concentrating on simple
    parametric models and traditional statistical applications, and avoiding sophisticated mathe-
    matics.
Skilling, J. (1992) \Bayesian numerical analysis", to appear in W. T. Grandy and P. Milonni
    (editors) Physics and Probability, Cambridge University Press.
    Develops deterministic and Monte Carlo methods for performing Bayesian calculations, centred
    around use of the conjugate gradient method.
Smith, A. F. M. (1991) \Bayesian computational methods", Philosophical Transactions of the Royal
    Society of London A, vol. 337, pp. 369-386.
    Surveys methods for performing the high-dimensional integrations required for Bayesian sta-
    tistical inference, including analytic approximations, numerical integration, and Monte Carlo
    integration using importance sampling and Gibbs sampling.
Tanner, M. A. (1991) Tools for Statistical Inference: Observed Data and Data Augmentation Meth-
    ods, Lecture Notes in Statistics, vol. 67, New York: Springer-Verlag.


                                                 139
                                 8. Annotated Bibliography (9)

   Discusses computational methods for maximum likelihood and Bayesian inference, including
   inference for models with latent or other unobserved variables.
Thompson, C. J. (1988) Classical Equilibrium Statistical Mechanics, Oxford: Clarendon Press.
   An introductory, though rather fast-paced, text with a relatively high proportion of material
   that may be of interest to non-physicists. Topics covered include the elements of macroscopic
   thermodynamics, microscopic descriptions using the canonical and other ensembles, the rela-
   tionship between microscopic and macroscopic descriptions, and phase transitions.
Wake eld, J. C., Gelfand, A. E., and Smith, A. F. M. (1991) \Ecient generation of random
   variates via the ratio-of-uniforms method", Statistics and Computing, vol. 1, pp. 129-133.
   Describes a generalization of the \ratio-of-uniforms" method for random generation from uni-
   variate and multivariate distributions, and discusses optimal translations to improve the accep-
   tance probability of the method.
Wozniakowski (1991) \Average case complexity of multivariate integration", Bulletin of the Amer-
   ican Mathematical Society, vol. 24, pp. 185-194.
   Gives a way of deterministically choosing points for integrating a function in a high-dimensional
   space that, like Monte Carlo methods, avoids the exponential growth with dimension that would
   result from using a simple grid. The accuracy bound in only achieved on average, however, for
   a particular distribution over functions.




                                                140



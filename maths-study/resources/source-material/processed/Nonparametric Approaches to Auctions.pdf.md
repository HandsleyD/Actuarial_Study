---
normalized_id: shared-pdf-reference-nonparametric-approaches-to-auctions
exam_code: SHARED
material_scope: nonparametric approaches to auctions.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Nonparametric Approaches to Auctions.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-nonparametric-approaches-to-auctions

                         Nonparametric Approaches to Auctions∗
                              Susan Athey                                Philip A. Haile
                     Stanford University and NBER                Yale University and NBER

                                                 June 22, 2005




Contents
1 Introduction                                                                                                    5

2 Theoretical Framework                                                                                           9
       2.1   Demand and Information Structures . . . . . . . . . . . . . . . . . . . . . . . . . . .              9
       2.2   Equilibrium Bidding . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12
             2.2.1    First-Price Auctions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12
             2.2.2    Ascending Auctions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16

3 First-Price Auctions with Private Values: Basic Results                                                       17
       3.1   Identification . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17
       3.2   Estimation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19
             3.2.1    Symmetric Bidders . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20
             3.2.2    Asymmetric Bidders . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22
       3.3   Incomplete Bid Data and Dutch Auctions . . . . . . . . . . . . . . . . . . . . . . . . 24
             3.3.1    Independent Private Values . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24
             3.3.2    Aﬃliated Private Values . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26
   ∗
    We have benefited from the input of Jaap Abbring, Estelle Cantillon, Ali Hortaçsu, Elena Krasnokutskaya,
Jonathan Levin, Harry Paarsch, Isabelle Perrigne, Martin Pesendorfer, Joris Pinkse, Rob Porter, Unjy Song, Elie
Tamer, an anonymous referee, and students at Stanford, University College London, and Yale. Dan Quint and
Gustavo Soares provided capable research assistance. Research support from the National Science Foundation (grants
SES-0112047 and SES-0351500) and the Alfred P. Sloan Foundation is gratefully acknowledged. Any conclusions,
findings, or opinions are those of the authors and do not necessarily reflect the views of any funding organization.




                                                         1
4 Ascending Auctions with Private Values: Basic Results                                               28
  4.1   Identification . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28
  4.2   Estimation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30
  4.3   An Alternative, Incomplete Model of Ascending Auctions . . . . . . . . . . . . . . . 32
        4.3.1   Bounding the Distribution of Bidder Valuations . . . . . . . . . . . . . . . . . 33
        4.3.2   Bounding the Optimal Reserve Price . . . . . . . . . . . . . . . . . . . . . . . 35
        4.3.3   Asymmetric and Aﬃliated Private Values . . . . . . . . . . . . . . . . . . . . 38

5 Specification Testing                                                                               38
  5.1   Theoretical Restrictions in First-Price Auction Models . . . . . . . . . . . . . . . . . 39
  5.2   Testing Monotonicity of Bid Functions and Boundary Conditions . . . . . . . . . . . 42
  5.3   Multi-Sample Tests with Exogenous Variation in Participation . . . . . . . . . . . . 43
  5.4   Multi-Sample Tests with Multiple Order Statistics . . . . . . . . . . . . . . . . . . . 44
  5.5   Direct Tests of Exchangeability or Independence . . . . . . . . . . . . . . . . . . . . 44

6 Extensions of the Basic Results                                                                     46
  6.1   Auction Heterogeneity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 46
        6.1.1   Observed Auction Heterogeneity . . . . . . . . . . . . . . . . . . . . . . . . . 46
        6.1.2   Unobserved Auction Heterogeneity . . . . . . . . . . . . . . . . . . . . . . . . 49
  6.2   Bidder Heterogeneity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 57
        6.2.1   Observed Bidder Heterogeneity . . . . . . . . . . . . . . . . . . . . . . . . . . 57
        6.2.2   Unobserved Bidder Heterogeneity . . . . . . . . . . . . . . . . . . . . . . . . . 59
  6.3   Endogenous Participation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61
        6.3.1   Binding Reserve Prices . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61
        6.3.2   Costly Signal Acquisition . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 66
        6.3.3   Bidder Uncertainty About the Competition . . . . . . . . . . . . . . . . . . . 68
        6.3.4   Internet Auctions and Unobserved Participation . . . . . . . . . . . . . . . . 70
  6.4   Risk Aversion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 74
        6.4.1   Symmetric Preferences . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 75
        6.4.2   Asymmetric Preferences . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 78

7 Common Values Auctions                                                                              81
  7.1   Limits of Identification with a Fixed Number of Bidders . . . . . . . . . . . . . . . . 83
  7.2   Pure Common Values . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 86
        7.2.1   Identification with Additional Structure: The Mineral Rights Model . . . . . 86
        7.2.2   Identification and Testing when Ex Post Values are Observable . . . . . . . . 87


                                                   2
8 Private versus Common Values: Testing                                                            93
  8.1   Testing in First-Price Auctions when All Bids are Observed        . . . . . . . . . . . . . 95
  8.2   Testing with Endogenous Participation . . . . . . . . . . . . . . . . . . . . . . . . . . 98
  8.3   Testing with Incomplete Bid Data . . . . . . . . . . . . . . . . . . . . . . . . . . . . 100
  8.4   Testing with a Binding Reserve Price . . . . . . . . . . . . . . . . . . . . . . . . . . . 102

9 Dynamics                                                                                       103

10 Multi-Unit and Multi-Object Auctions                                                          107
  10.1 Auctions of Perfect Substitutes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 107
  10.2 Auctions of Imperfect Substitutes and Complements . . . . . . . . . . . . . . . . . . 110

11 Concluding Remarks                                                                            114




                                                 3
Abstract

This chapter discusses structural econometric approaches to auctions. Remarkably, much of what
can be learned from auction data can be learned without restrictions beyond those derived from the
relevant economic model. This enables us to take a nonparametric perspective in discussing how the
structure of auction models can be combined with observables to uncover (or test hypotheses about)
primitives of interest in auction markets. We focus on first-price sealed-bid and ascending auctions,
including extensions to Dutch auctions, Internet auctions, multi-unit auctions, and multi-object
auctions. We consider a wide range of underlying structures of bidder demand and information, as
well as a variety of types of data one may encounter in applications. We discuss identification and
testable restrictions of these models and present a variety of estimation approaches.

Keywords: auctions, identification, estimation, testing.
JEL Classifications: C5, C14, D44




                                                 4
1        Introduction
Auctions provide opportunities for economists to examine field data from markets that can involve
rich strategic interaction and asymmetric information while nonetheless being simple enough that
the salient forces can be convincingly captured by a tractable economic model. The primitives
of any strategic model include the set of players, the information structure, the rules of play, and
players’ objectives. In auction markets, one can often describe these key elements with an unusually
high degree of confidence. Consequently, auctions have been at the center of eﬀorts to combine
economic theory with econometric analysis to understand behavior and inform policy.
        Early work by Hendricks and Porter (1988) and others played an important role in demonstrat-
ing the empirical relevance of private information and the ability of strategic models to predict
behavior. More recently, there has been a great deal of attention to econometric approaches to auc-
tions that incorporate restrictions from economic theory as assumptions of an econometric model.1
The goal of this structural approach is to address questions that can only be answered with knowl-
edge concerning the distribution functions that characterize the underlying demand and information
structure. Structural empirical work on auctions has examined, for example, the division of rents
in auctions of public resources, whether reserve prices in government auctions are adequate, the
eﬀects of mergers on procurement costs, whether changes in auction rules would produce greater
revenues, whether bundling of procurement contracts is eﬃcient, the value of seller reputations, the
eﬀect of information acquisition costs on bidder participation and profits, whether bidders’ private
information introduces adverse selection, and whether firms act as if they are risk averse.
        Many of these questions have important implications well beyond the scope of auctions them-
selves. In all of economics there is a tradeoﬀ between the assumptions one relies on and the
questions one can address.             Because an auction is a market institution that is particularly easy
to capture with a theoretical model, one may have more confidence than usual that imposing sig-
nificant structure from economic theory in interpreting data can be useful.                       Combined with the
fact that private information and strategic behavior are paramount in auctions, this suggests that
auctions may enable economists to get at questions of importance to many other types of markets.
        Remarkably, much of what can be learned from auction data can be learned without restrictions
beyond those derived from economic theory. In particular, identification often does not depend on
unverifiable parametric distributional assumptions.                 This is important: although economics can
determine or at least shape the specification of many components of an empirical model, it rarely
provides guidance on distribution functions governing unobservables.
        Our focus in this chapter is on structural econometric approaches to auctions, with an emphasis
    1
        A seminal paper in this literature is Paarsch (1992a), which builds on insights in Smiley (1979) and Thiel (1988).



                                                              5
on nonparametric identification.           This focus should not be confused with a presumption that
nonparametric estimation methods are always preferred. Approximation methods are virtually
always needed for estimation in finite sample, and parametric estimators will be most appropriate
in some applications.         However, as emphasized at least since Koopmans (1945), the question
of what the observables and the assumed underlying structure are capable of revealing (i.e., the
identification question) is fundamentally distinct from the choice of statistical methods used in
practice for estimation. When identification holds nonparametrically, one can be confident that
estimates have valid interpretations as finite sample approximations and are not merely artifacts of
unverifiable maintained assumptions. Equally important for our purpose, because a discussion of
nonparametric identification makes clear how the structure of a model and the observables enable
(or, in some important cases, fail to enable) estimation, it also provides an ideal perspective for
discussing recent developments in empirical approaches to auctions. Our goals are to describe key
insights from a wide range of recent work in this area in a unified framework, to present several
new results, and to point out areas ripe for exploration.
       We focus on two auction formats that are dominant in practice: first-price sealed-bid auctions
and ascending (or “English”) auctions. First-price auctions are particularly prevalent in govern-
ment procurement–a common source of data in applied work. Our discussion of first-price auctions
will include the closely related Dutch auction. Ascending auctions, in several variations, are the
most frequently observed in practice. They are widely used in sales of antiques, art, timber, and
in Internet auctions.2 As we will see below, each type of auction presents diﬀerent economet-
ric challenges. We will also examine extensions to other environments, including multi-unit and
multi-object auctions. We consider a wide range of underlying structures of bidder demand and
information, as well as a range of types of data one may encounter in applications.                      We discuss
identification, testable restrictions, and a variety of parametric, semi-parametric, and nonpara-
metric estimation approaches.          Much of the recent innovation in the literature has been on the
identification question. In many cases this is because standard statistical methods can be applied
for estimation and testing once identification results are obtained. This is not always the case,
however, and in some cases the development of methods for estimation has lagged development of
identification results. Here and elsewhere, our discussion will point to a number of opportunities
   2
    Among the auction forms commonly discussed in the theoretical literature, we exclude the second-price sealed-
bid (“Vickrey”) auction, which is closely related to the ascending auction but uncommon in practice. Some Internet
auctions, like those on the eBay site, use a system of proxy bidding that has the flavor of a second-price sealed bid
auction, although in practice bidders usually have the ability to observe and respond to the bids of at least some of
their opponents, as in an ascending auction (see Lucking-Reily (2000) for more stylized facts about Internet auctions).
Alternative models of Internet auctions are oﬀered by Bajari and Hortaçsu (2003a), Ockenfels and Roth (2004) and
Song (2003). We will discuss a structural empirical model based on the last of these in Section 6.3.4.




                                                          6
for additional work.
   Before proceeding, we first make precise what is meant by identification in this context. Let G
denote the set of all joint distributions over a specified set of observable random variables. Define
a model as a pair (F, Γ), where F is a set of joint distributions over a specified set of latent random
variables and Γ is a collection of mappings γ : F → G. In this chapter, F will typically be the set
of joint distributions of bidder valuations and information (“types”) satisfying certain statistical
properties (e.g., independence, symmetry, etc.) while Γ will consist of a single mapping from the
true distribution of types to a distribution of bids implied by the assumption of Bayesian Nash
equilibrium. Implicit in the specification of a model is the assumption that it contains the true
structure (F, γ) generating the observables. A model is said to be identified (or identifiable) if the
observables uniquely determine the true structure within (F, Γ).

Definition 1.1 A model (F, Γ) is identified if for every (F, F̃) ∈ F2 and (γ, γ̃) ∈ Γ2 , γ(F) = γ̃(F̃)
implies (F, γ) = (F̃, γ̃).

   In some cases, useful inferences can be made even when a model is not identified. In partially
identified models one may be able to identify some components of interest, or place bounds on
components of interest (see, e.g., Manski (1995)). A separate question is whether a model places
refutable restrictions on observables; i.e., whether the model is testable. A model is testable if some
joint distributions in G cannot be generated by the model.
                                                S
Definition 1.2 A model (F, Γ) is testable if      γ∈Γ,F∈F γ(F) is a strict subset of   G.

   With these definitions in hand, we can preview some of the themes that emerge in what follows.
First, a remarkable number of positive nonparametric identification results can be obtained by
exploiting the relationships between observables and the primitives of interest that are implied by
economic theory. Richer statistical structures (e.g., arbitrary correlation) for bidders’ information
and/or more limited sets of observables (e.g., only the winning bid) create greater challenges, but
even here a number of positive results can be obtained.      There are limits to the positive results,
however. For example, identification of models with common values, risk aversion, or unobserved
heterogeneity can be obtained only with strong a priori restrictions. This is particularly the case
in ascending auctions, where theory provides less guidance on the appropriate interpretation of the
observed bids.
   A second major theme is the need to make modeling choices and the importance of testing these
choices when possible. Often a particular set of assumptions (e.g., independent private values, risk
neutral bidders) is postulated for particular application based on characteristics of the relevant


                                                    7
market. Modeling choices can have important implications for the conclusions one reaches. Ide-
ally, researchers would like to combine economic justifications for modeling choices with statistical
evidence supporting these choices and/or an analysis of the range of outcomes possible under alter-
native assumptions. We discuss a number of results that clarify when this will be possible. In many
cases some assumptions can be tested while maintaining others. In general this possibility depends
on the auction format (e.g., ascending versus first-price) and the data configuration (e.g., whether
all bids are observed or just the winning bid, or whether particular types of exogenous variation
are present and observable). For example, an assumption of private values is testable under some
data configurations but not others (Section 8).             Another example arises when the econometrician
must make modeling choice regarding the source of observed correlation among bids: this may
result from correlation of bidders’ private information or from common knowledge among bidders
of auction-specific factors aﬀecting all bidders’ valuations.              These alternative models often have
diﬀerent implications for counterfactuals, but it is diﬃcult to distinguish between them empirically
(Section 6.1.2). Other examples include choices of how participation is modeled (Section 6.3), and
of bidders’ risk preferences (Section 6.4). Typically, some modeling choices will be testable (par-
ticularly in data configurations that include some type of exogenous variation in the environment
– e.g., in the number of bidders or bidder covariates), while others will not.
       Our focus in this chapter unavoidably leads us to ignore many interesting and important issues
given attention in the empirical auctions literature. Fortunately, there are now several excellent
surveys, each with a somewhat diﬀerent focus, that provide useful complements to our chapter.
Laﬀont (1997) and Hendricks and Paarsch (1995) provide early surveys reviewing empirical studies
of the implications of equilibrium bidding in auctions as well as approaches to estimation of the
primitives of auction models. Perrigne and Vuong (1999) survey methods for structural analysis of
first-price auctions, including a synthesis of their own extensive contributions (with several coau-
thors) to nonparametric identification and estimation of these models.                    Hong and Shum (2000)
provide an introduction to parametric structural approaches. Kagel (1995) surveys the extensive
work on auctions in the experimental economics literature. Finally, Hendricks and Porter (forth-
coming) provide a recent and extensive review of the large empirical literature on auctions, covering
a wide range of economic questions and econometric approaches.3
       The structure of the chapter can be described as follows. Section 2 describes the underlying
theoretical framework for our initial focus and provides the characterizations of equilibrium bidding
behavior that underlie the econometric approaches that follow.4 In Sections 3 and 4 we then discuss
   3
       Reiss and Wolak (in this volume) include a discussion of auctions among several examples of the structural
empirial approach in industrial organization.
  4
    For additional detail, Krishna (2002) provides an excellent synthesis of a large theoretical literature on auctions.



                                                           8
first-price and ascending auctions in the simplest and most widely considered case of private values,
assuming that there is no binding reserve price and that the data available consist of bids from
independent auctions of identical goods.         These results provide many of the key building blocks
for considering richer private values specifications, specification testing, endogenous participation,
risk aversion, as well as other types of data in Sections 5 and 6. In Section 7 we take up the case
of common values models, where identification is more diﬃcult and often fails.                   This provides
one motivation for a discussion of testing for common values in Section 8. We conclude with two
sections on important topics that have been the subject of very recent work. Section 9 addresses
dynamics. Section 10 discusses work in progress on multi-unit and multi-object auctions.


2     Theoretical Framework
2.1    Demand and Information Structures

Throughout we denote random variables in upper case and their realizations in lower case. We use
boldface to indicate vectors. To emphasize the distinction between latent variables and observables,
we adopt the convention of denoting the cumulative distribution function (CDF) of a latent random
variable Y by FY (·) and the CDF of an observable random variable Y by GY (·). Much of the
discussion will involve order statistics. We let Y (k:n) denote the kth order statistic from the sample
                         (k:n)
(Y1 , . . . Yn ) , with FY       (·) denoting the corresponding marginal CDF. We follow the standard
convention of indexing order statistics lowest to highest so that, e.g., Y (n:n) is the maximum.
    For most of the chapter, the underlying theoretical framework involves the sale of a single
indivisible good to one of n ∈ {n, . . . , n} risk neutral bidders, with n ≥ n ≥ 2.5 Later, when we
consider auctions with reserve prices or participation costs, these n bidders will be referred to as
“potential bidders.” We consider risk aversion, sequential auctions, multi-unit auctions, and multi-
object auctions separately below. We let N denote the set of bidders, although when bidders are
symmetric, n = |N | will be a suﬃcient statistic. We let N−i denote the set of competitors faced
by bidder i. The utility bidder i ∈ {1, . . . , n} would receive from the good is Ui , which we assume
to have common support (denoted suppFUi (·) or suppUi ) for all i. Often Ui is referred to as i’s
“valuation.” We let U = (U1 , . . . , Un ) .
    Bidder i’s private information (his “type”) consists of a scalar signal Xi . We let X = (X1 , . . . , Xn ),
McAfee and McMillan (1987a) provides a shorter introduction to much of the relevant theory. Milgrom and Weber
(1982) is a central paper in the early theoretical literature that covers many of the models we consider. Milgrom
(2004) treats some of the newer literature on combinatorial auctions.
   5
     Translation to procurement settings, where bidders compete to sell, is straightforward.




                                                       9
xi = inf suppXi , and x̄i = sup suppXi . Signals are informative in the sense that the expectation

                                            E [Ui |Xi = xi , X−i = x−i ]

strictly increases in xi for all realizations x−i of i’s opponents’ signals. Note that because signals
play a purely informational role and any monotonic transformation θ (Xi ) contains this same in-
formation as Xi itself, the marginal distribution of Xi is irrelevant; i.e., without a normalization
on Xi , the theoretical model is over-parameterized. It is therefore desirable (and without loss of
generality) to impose a normalization such as6

                                                  Xi = E [Ui |Xi ] .

We will see below that diﬀerent normalizations will sometimes turn out be be more convenient.
       Except where otherwise stated, we assume that the set of bidders and the joint distribution
FX,U (·; N ) of bidders’ signals and valuations are common knowledge. While these are standard
assumptions in the theoretical literature on auctions, in a few cases (e.g., an ascending auction with
private values) these assumptions are inconsequential. In a first-price auction, these assumptions
can be relaxed somewhat; for example, we consider the possibility that N is unknown in Section
6.3.3.
       This framework is a generalization of that studied in Milgrom and Weber’s (1982) influential
theoretical exploration of auctions and nests a wide range of special cases, each involving diﬀerent
assumptions about bidders’ private information. One key distinction is that between private values
(PV) and common values (CV) models.

Definition 2.1 Bidders have private values if E[Ui |X1 = x1 , . . . , Xn = xn ] = E[Ui |X1 = x1 ]
for all x1, . . . , xn and all i; bidders have common values if E[Ui |X1 = x1 , . . . , Xn = xn ] strictly
increases in xj for all i, j, and xj .7

       In private values models, bidders do not have private information about the valuations of their
opponents.      For the settings we will consider, this is equivalent to assuming bidders know their
own valuations (Xi = Ui ). In a common values model, by contrast, each bidder i would update
her beliefs about her valuation Ui if she learned an opponent’s signal Xj in addition to her own
   6
     It is important to avoid confusing this extra degree of freedom in the usual specification of the theoretical model
with issues concerning econometric identification. Since the marginal distribution of Xi is irrelevant in the theoretical
model, it is not a primitive whose identification should even be considered.
   7
     Alternatively, one might define private and common values in terms of the conditional distributions
FUi (Ui |X1 , . . . , Xn ) and FUi (Ui |X1 ). For our purposes a definition in terms of conditional expectations is ade-
quate. Note that for simplicity of exposition our definition of common values rules out cases where the winner’s
curse arises for some realizations of types but not others.


                                                           10
signal Xi . Even in a private values auction a bidder would like to know her competitors’ private
information for strategic reasons. However, in a common values auction, knowledge of opponents’
signals would alter her expectation of her own valuation. This is the characteristic of common
values auctions that leads to the “winner’s curse.” Roughly speaking, winning a common values
auction reveals (in equilibrium) to the winner that her signal was more optimistic than those of her
opponents. Rational bidders anticipate this information when forming expectations of the utility
they would receive by winning.8 Note that common values models incorporate a wide range of
structures in which information about the value of the good is dispersed among bidders, not just
the special case in which the value of the object is identical for all bidders (defined as pure common
values below).9
       A second way in which this general framework can be specialized is through restrictions on
the joint distribution of signals.      Common assumptions are independence or aﬃliation.10                   Note
that dependence (or aﬃliation) of signals is neither necessary nor suﬃcient for common val-
ues. Finally, a common restriction in the literature is symmetry, i.e., that the joint distribution
FX,U (X1 , . . . , Xn , U1 , . . . , Un ; N ) is exchangeable in the bidder indices. For clarity, we will often
explicitly refer to models as “symmetric” or “asymmetric.” Combining these types of restrictions
leads to a number of special cases that have been considered in the literature, including:

       • Independent Private Values (IPV): private values with Ui independent

       • Symmetric Independent Private Values: private values with Ui i.i.d.

       • Aﬃliated Private Values (APV): private values with (U1 , . . . , Un ) aﬃliated

       • Pure Common Values: common values with Ui = U0 ∀i

       • Mineral Rights: pure common values with signals i.i.d. conditional on U0
   8
     Note that the presence of the winner’s curse does not imply that winners regret winning; rather, the winner’s
curse refers to the “bad news” (Milgrom, 1981) about the object’s value contained the information that one has won
the auction. Rational bidders anticipate this.
   9
     While our terminology follows, e.g., Klemperer (1999), Athey and Haile (2002), and Haile, Hong and Shum (2003),
there is some variation in the terminology used in the auction literature. Early on, the term “common values” was
sometimes used in the way we use it but sometimes used to refer to the special case we call “pure common values.”
Similarly, “aﬃliated values” was sometimes used for the class of models we call “common values,” despite the fact
that purely private values can be aﬃliated (see below). Recently some authors (e.g., Krishna (2002)) have used the
term “interdependent values” to refer to a framework allowing both private and common values.
  10
     The random variables Y = (Y1 , . . . , Yn ) with joint density fY (·) are aﬃliated if for all y and y0 ,
fY (y ∨ y0 ) fY (y ∧ y0 ) ≥ fY (y) fY (y0 ), where ∨ denotes the component-wise maximum, and ∧ the component-
wise minimum. See Milgrom and Weber (1982) for additional discussion. Note that aﬃliation allows independence
as a special case.




                                                        11
    Finally, for a few results we will make an additional assumption of exogenous variation in the
number of bidders, which holds when variation in the set of bidders is independent of the joint
distribution of bidders’ valuations and signals.

Definition 2.2 A bidding environment has exogenous variation in the number of bidders if
n > n and, for all N , N 0 such that N ⊂ N 0 ⊆ {1, . . . , n}, FX,U (·; N ) is identical to the marginal
distribution of {(Ui , Xi )}i∈N obtained from FX,U (·; N 0 ).


2.2     Equilibrium Bidding

We restrict attention to econometric approaches that exploit the structure of equilibrium bidding
to obtain identification or testable restrictions. Hence we must first provide the necessary char-
acterizations of equilibrium. Following the literature, we generally restrict attention to (perfect)
Bayesian Nash equilibria in weakly undominated strategies. We focus on equilibrium in pure bid-
ding strategies β i (·; N ), i = 1, . . . , n, mapping each bidder’s signal (and, implicitly, any public
information) into a bid.      When bidders are ex ante symmetric we further restrict attention to
symmetric equilibria, so that β i (·) = β (·) ∀i. Below we discuss conditions under which there are
other equilibria in first-price auctions. We will denote a bidder i’s equilibrium bid by Bi , with
B = {B1 , . . . , Bn }. We let inf[supp[Bi ]] = bi and sup[supp[Bi ]] = b̄i .

2.2.1    First-Price Auctions

In a first-price sealed-bid auction bidders submit bids simultaneously, and the good is awarded to
the high bidder at a price equal to his bid. If there is a reserve price, r, the seller has commit-
ted to consider only bids of at least r. For first-price auctions we make the following additional
assumptions:
Assumption 2.1. (First-Price Auction Assumptions) (i) For all i, Ui has compact, convex support
denoted suppFUi (·) = [u, ū]. (ii) The signals X are aﬃliated, with suppFX (·) =×Ii=1 suppFXi (·) .
(iii) FX (·) has an associated joint density fX (·) that is strictly positive on the interior of suppFX (·).


    The following result summarizes existence and uniqueness results for this model. This will
enable us to then proceed to the key characterization results used for empirical work.

Theorem 2.1 Consider the first-price auction.
(i) (Existence in Strictly Increasing Strategies) An equilibrium exists in pure, nondecreasing
strategies, where for each i, supp[Bi ] ⊆supp[maxj∈N \i Bj ]. In addition, a pure strategy equilibrium
in strictly increasing strategies exists in all models except in the CV model with asymmetric bidders


                                                      12
and signals that are not independent; in the latter case, strategies are strictly increasing except that
at most one bidder may bid inf[supp[B (n:n) ]] with positive probability.11
(ii) (Uniqueness) In a PV model with either (a) independence (IPV), or (b) symmetry, if fX (·)
is continuously diﬀerentiable there is a unique equilibrium.                 This equilibrium is in pure, strictly
increasing, and diﬀerentiable strategies.12
(iii) (Uniqueness in Monotone Class for Symmetric Models) If we restrict attention to
pure strategy equilibria in nondecreasing strategies, then when bidders are symmetric and fX (·) is
continuously diﬀerentiable there is a unique equilibrium, which is in symmetric, strictly increasing,
and diﬀerentiable strategies.13

       All of our positive identification results for common values models rely on symmetry, so in
our discussions of CV auctions we will proceed under the assumption that strategies are strictly
increasing. For the first-price auction models for which uniqueness has not been established, we
will also assume that all observations in a given data set are derived from the same equilibrium.
       As shown by Milgrom and Weber (1982), a bidder i participates if and only if his signal exceeds
a threshold value                            ½                                    ¾
                            x∗i (N ) = inf    xi : E[Ui |Xi = xi , max Bj ≤ r] ≥ r .                                 (2.1)
                                                                     j∈N−i

When there is no reserve price, let x∗i (N ) = xi . Here, expectations over others’ bids represent
equilibrium expectations. A bidder i who has observed signal Xi = xi > x∗i (N ) solves
                      µ                                 ¶
                max    E[Ui |Xi = xi , max Bj ≤ b̃] − b̃ Pr( max Bj ≤ b̃|Xi = xi )                                   (2.2)
                      b̃                       j∈N−i                       j∈N−i

  11
      See Athey (2001) and Reny and Zamir (2004) for existence of equilibrium in nondecreasing strategies, and Milgrom
and Weber (1982), McAdams (2003) and Lizzeri and Persico (2000) for the characterization. McAdams (2003) argues
that in any monotone equilibrium, strategies are strictly increasing except that at most one bidder may, with positive
probability, choose the lowest bid that wins with strictly positive probability, if such a bid exists. In PV auctions it
is possible to rule out mass points at the reserve price, if it binds, or at the bottom of the value distribution if the
reserve price does not bind.
   12
      In the IPV case, all equilibria are in monotone strategies; see Lebrun (1999), Bajari (2001), and Maskin and
Riley (2003) for uniqueness results. Milgrom and Weber (1982) show existence of the equilibrium for APV auctions.
McAdams (2003) shows that for a non-monotone equilibrium to exist, both independence of signals and private values
must be relaxed. He shows that with private values or independent signals, all equilibria are outcome-equivalent to
a monotone equilibrium; i.e., bidding strategies are identical to those in a monotone equilibrium except possibly
for subsets of types whose equilibrium bids win with probability zero. McAdams (2004b) shows that if bidders are
symmetric, there is a unique equilibrium within the monotone class. So together, these results imply that for the
symmetric PV model, there is a unique equilibrium.
   13
      See footnote 12 for a discussion of when non-monotone equilibria can exist. McAdams (2004b) proves uniqueness
within the monotone class. For characterizations, see Milgrom and Weber (1982). See also Lizzeri and Persico (2000),
who show that when the density of the value distribution is C 1 , in two-bidder first-price auctions with a binding reserve
price, among monotone pure strategy equilibria there exists a unique equilibrium in strictly increasing, diﬀerentiable
strategies, except that one bidder may choose the reserve price with positive probability.



                                                            13
where we adopt the convention that Bj < r for any bidder j who does not participate.
       Define
                                 ṽi (xi , mi ; N ) = E[Ui | Xi = xi , max Bj = mi ].
                                                                           j∈N−i

This is bidder i’s expectation of his valuation conditional on his own signal and the highest com-
peting bid.      This highest competing bid is informative because, in equilibrium, bids are strictly
increasing in signals. In particular, if we let

                               vi (xi , yi ; N ) = E[Ui | Xi = xi , max Bj = β i (yi ; N )]                            (2.3)
                                                                        j∈N−i


then
                                        vi (xi , yi ; N ) = ṽi (xi , β i (yi ; N ) ; N ).

       The expectation vi (xi , xi ; N ) will play an important role below.                    This expectation is taken
conditioning both on i’s own private information and on the event that i’s equilibrium bid is
“pivotal,” i.e., that infinitesimal deviations from his equilibrium bid would change the outcome of
the auction.
       Let
                                GMi |Bi (mi |bi ; N ) = Pr(max Bj ≤ mi |Bi = bi , N )
                                                                 j6=i
denote the distribution of the maximum equilibrium bid among i’s opponents conditional on i’s
own equilibrium bid and the set of bidders N . Let gMi |Bi (mi |bi ; N ) denote the corresponding
conditional density, which exists and is positive for all bi and almost every mi in the support of
Bi under the assumptions outlined above. Note that with strictly increasing equilibrium bidding,
conditioning on {Bi = b} is equivalent to conditioning on {Xi = β −1
                                                                  i (b; N )}. Bidder i’s bidding
problem (2.2) can then be rewritten
                        Z b̃ h                       i
                  max         ṽi (xi , mi ; N ) − b̃ gMi |Bi (mi |β i (xi ; N ) ; N ) dmi .
                          b̃     −∞

This objective function is diﬀerentiable almost everywhere. Diﬀerentiating with respect to b̃, we
see that for almost every signal xi of bidder i, a necessary condition for bi to be an optimal bid
(i.e., for β i (xi ; N ) = bi ) is
                                                           GMi |Bi (bi |bi ; N )
                                vi (xi , xi ; N ) = bi +                         ≡ ξ i (bi ; N ).                      (2.4)
                                                           gMi |Bi (bi |bi ; N )
       Equation (2.4) characterizes an equilibrium bid as equal to the bidder’s expectation of his
                                                                                              G         (bi |bi ;N )
valuation (conditional on being pivotal) less a strategic “markdown” g Mi |Bi(bi |bi ;N ) .14 This first-
                                                                                               Mi |Bi
order condition does not always lead to an analytic solution for equilibrium bidding strategies.
  14
     This is analogous to the markdown of an oligopsonist, which bases its price on the equilibrium elasticity of its
residual supply curve; in the auction model, GMi |Bi (bi |bi ; N ) plays the role of the residual supply curve.


                                                               14
With ex ante symmetric bidders, however, we can write
                                                   ∙                   ¸
                     vi (x, x; N ) = v(x, x; n) = E Ui |Xi = max Xj = x
                                                                                     j6=i

and x∗i (N ) = x∗ (n)∀i. In that case, Milgrom and Weber (1982) have shown that the equilibrium
bid function has the form
                                                                    Z x
                           β (x; n) = r L (x∗ (n) |x; n) +                    v(t, t; n) dL (t|x; n)                        (2.5)
                                                                     x∗ (n)

for x ≥ x∗ , where                                  µ Z x                ¶
                                                          f1 (z|z; n)
                                     L(t|x; n) ≡ exp −                dz
                                                       t F1 (z|z; n)

and F1 (·|x; n) is the distribution of the maximum signal among a bidder’s opponents conditional
on on the number of bidders and on his own signal being x.
      Before proceeding, we pause to make two observations about the support of the equilibrium bid
distribution.15

Theorem 2.2 In the IPV model of the first-price auction, supp[Bi ] is the same for all i.

      Proof. With independence, the inverse bid function for bidder i can be written
                                                                          1
                                         ξ i (bi ; N ) = bi + P            gBk (bi )
                                                                                        .
                                                                    k∈N \i GB (bi )
                                                                                 k


If there are two bidders, the result is immediate given that the value distributions have the same
support. Now suppose n > 2 and b̄i < b̄j . We know that ξ j (bj ; N ) must be continuous at b̄i :
otherwise (given strictly monotone strategies) we would contradict our assumption that valuations
are drawn from a convex set. Then, note that
                                                 1                                     1
               ū = ξ i (b̄i ; N ) = b̄i + P      gBk (b̄i )
                                                               < b̄i + P                 gBk (b̄i )
                                                                                                      = ξ j (b̄i ; N ).
                                           k∈N \i GB (b̄i )                   k∈N \{i,j} GB (b̄i )
                                                    k                                        k


But ξ j (b̄i ; N ) > ū contradicts the assumption that Ui has the same support for all i. Given the
properties established in Theorem 2.1, standard arguments then show that supp[Bi ] = [u,b̄] ∀ i.
                                                                                                                          Q.E.D.

      Outside of the IPV model, it is not known in general whether bid distributions have the same
support for all bidders when bidders are asymmetric. We do know that if we relax the assumption
 15
      See Lebrun (1999) for an alternative proof.



                                                               15
that valuations have common support, the bids may or may not have the same support.16
       Note that the theory also implies that the upper bound of the bid distribution is closely related
to features of the distribution of valuations. In the symmetric IPV model,

                                                                   GB (Bi ; n)
                                                Ui = Bi +
                                                                (n − 1)gB (Bi ; n)
so                                                      Z b̄
                                            1                                   n−2            1
                        E[Ui ] = E [Bi ] +                     GB (b; n)db =        E [Bi ] +     b̄.
                                           n−1           b                      n−1           n−1
Thus, the mean valuation is a linear function of the mean bid and b̄. When n = 2, this yields
E [Ui ] = b̄. The average “markdown” for a bidder in the symmetric IPV model is given by
                                                                  1 ¡           ¢
                                            E [Ui − Bi ] =           b̄ − E[Bi ] .
                                                                 n−1
Although it seems that these kinds of relationships might be useful, they have not to our knowledge
been explored in the econometric analysis of auctions.

2.2.2       Ascending Auctions

The standard model of an ascending auction is the so-called “clock auction” or “button auction”
model of Milgrom and Weber (1982), where the price rises continuously and exogenously. Bidders
indicate their willingness to continue bidding continuously as well, for example by raising their hands
or depressing a button as the price rises.                   As the auction proceeds, bidders exit observably and
irreversibly (by lowering their hands, releasing their buttons, etc.) until only one bidder remains.
This final bidder obtains the good at the price at which his last opponent exited; i.e., the auction
ends at a price equal to the second highest exit price (“bid”) b(n−1:n) .
       The participation rule for an ascending auction is identical to that for a first-price auction.
An equilibrium bidding strategy specifies a price at which to exit, conditional on one’s own signal
and on any information revealed by previous exits by opponents. With strictly increasing bidding
strategies, the price at which a bidder exits reveals his signal to others. So in a common values
auction, an exit causes the remaining bidders to update their beliefs about their valuations; hence,
the prices at which bidders plan to exit change as the auction proceeds.                                   In a private values
  16
       In Section 5.1 we give an example where valuations have diﬀerent supports but bids have identical supports. To
see an example where bid distributions have diﬀerent supports,        suppose √that there are three
                                                                                                   2 bidders. FU1 (u1 ) =
8      16 2                                                       1
                                                                                   s
                                                                                                 2
  u
5 1
    −    u
       25 1
            for u1 ∈ [0, 5/4], while for i ∈ {2, 3}, FUi (ui ) = 100
                                                                      4 + 2ui −   2  8 − 7ui + 2ui    for ui ∈ [0, 3/2] and
FUi (ui ) = 19 u2i for ui ∈ [3/2, 3]. For this example, GB1 (b1 ) = 2b1 −b21 for b1 ∈ [0, 1], while for i ∈ {2, 3}, GBi (bi ) = b2i /4
for bi ∈ [0, 2].




                                                                  16
auction there is no such updating, and each bidder has a weakly dominant strategy to bid up to
his valuation, i.e.,
                                β i (xi ; N ) = E[Ui | Xi = xi ] = xi ≡ ui .                     (2.6)

    In common values auctions there are multiple equilibria, even with ex ante symmetric bidders
and restriction to symmetric strictly increasing weakly undominated strategies (Bikhchandani, Haile
and Riley, 2002). In any such equilibrium, however, if i is one of the last two bidders to exit, his
exit price bi is
                       E[Ui | Xi = xi , Xj = xi ∀j ∈
                                                   / {i ∪ Ei }, Xk = xk ∀k ∈ Ei ],               (2.7)

where Ei denotes the set of bidders who exit before i. Milgrom and Weber (1982) originally identified
the equilibrium in which all bidders follow (2.7), which reduces to the weakly dominant strategy
(2.6) in the case of private values.
    While the Milgrom-Weber model yields a trivial relation between a bidder’s valuation and
his bid in a private values auction, we will see that even in this case identification can present
challenges, due to the fact that the auction ends before the winner bids (exits). Furthermore, in
many applications the Milgrom-Weber model may represent too great an abstraction from actual
practice, for example if prices are called out by bidders rather than by the auctioneer, or if bidders
are free to make a bid at any point in the auction, regardless of their activity (or lack thereof)
earlier in the auction. In Section 4.3 we will discuss an econometric approach that relaxes the
structure of the button auction model.


3     First-Price Auctions with Private Values: Basic Results

3.1    Identification

We begin by considering the case of private values auctions, assuming that bidders’ valuations
at each auction are draws from the same joint distribution FU (·). The primitive of interest in a
PV auction is this joint distribution: it distribution completely characterizes bidder demand and
information. With knowledge of FU (·) one can, for example, simulate outcomes under alternative
market mechanisms, assess eﬃciency and the division of surplus, and determine an optimal reserve
price. The simple idea underlying the structural approach to PV auctions is to use the distribution
of bids observed in a sample of auctions along with the equilibrium mapping between valuations
and bids (the observables) to learn about FU (·).
    Even when a closed form solution like (2.5) is available, however, it is not immediately clear
how one would proceed to use this equilibrium characterization for a first-price auction to obtain



                                                    17
identification. Even in the simplest symmetric IPV model, the equilibrium bid function takes the
form (recall that xi = ui )
                                                           Ru    (n−1:n−1)
                                                           −∞ t fU         (t) dt
                                              β (u; n) =       (n−1:n−1)
                                                             FU          (u)
which depends on the unknown distribution FU (·) of valuations, i.e., on the object one would like
to estimate.
       Several approaches were initially taken to address this problem within the symmetric IPV model.
Following Smiley (1979) and Paarsch (1992a), early work focused on parametric specifications
of FU (·) admitting simple closed form equilibrium bid functions that made it feasible to derive
likelihoods or moment conditions.17                 Laﬀont, Ossard and Vuong (1995) proposed an approach
combining parametric assumptions with a simulation based estimator that is made feasible in the
symmetric IPV framework by the revenue equivalence theorem (e.g., Myerson, 1981). Bajari (1997)
proposed a Bayesian approach applicable in the more diﬃcult case of asymmetric independent
private values. The role of the parametric distributional assumptions in these empirical approaches
was not initially clear.
       An important breakthrough due to Guerre, Perrigne and Vuong (2000) came from the simple
but powerful observation that equilibrium is attained when each player is acting optimally against
the distribution of behavior by opponents.18 When bids are observable, both the distribution of
opponent behavior and the optimal (equilibrium) action of each bidder are observable, enabling
identification of the latent joint distribution of bidder valuations under fairly weak restrictions. In
particular, the first order condition (2.4) can be written
                                                            GMi |Bi (bi |bi ; N )
                                                ui = bi +                         .                           (3.1)
                                                            gMi |Bi (bi |bi ; N )
Thus, each bidder’s latent private value can be expressed as a functional of his equilibrium bid
and the joint distribution of the competing equilibrium bids he faces.19 In fact, the function
                    G          (bi |bi ;N )
ξ i (bi , N ) ≡ bi + g Mi |Bi(bi |bi ;N ) is the inverse of bidder i’s equilibrium bid function, the mapping
                      Mi |Bi

needed to infer valuations from bids. Since the joint distribution of bids is observable, identification
of each private value ui (and, therefore, of the joint distribution FU (·)) follows directly from (3.1).
Formally,
                                                  ¡                                ¢
                                       FU (u) = GB ξ −1                 −1
                                                     1 (u1 , N ), .., ξ n (un , N ) .                         (3.2)
  17
     Smiley (1979) considered only common values models.
  18
     This approach was first described in print by Laﬀont and Vuong (1993), who attribute the idea to an early draft
of Guerre, Perrigne and Vuong (2000).
  19
     Note that in general this kind of approach relies on there being a unique equilibrium or on an assumption that
the equilibrium selected is the same across observations. Otherwise the observed distribution of opponent bids would
be a mixture of those in each equilibrium, and would not match the distribution characterizing a bidder’s beliefs in
a given auction.


                                                                18
This proves the following identification result, combining results from Guerre, Perrigne and Vuong
(2000), Li, Perrigne and Vuong (2002), and Campo, Perrigne and Vuong (2003).

Theorem 3.1 (i) Suppose all bids are observed in first-price sealed-bid auctions. Then the sym-
metric aﬃliated private values model is identified. (ii) Suppose all bids and bidder identities are
observed in first-price sealed-bid auctions. Then the asymmetric aﬃliated private values model is
identified.


3.2      Estimation

For purposes of estimation, suppose one observes bids from independent auctions t = 1, . . . , T . We
will add an auction index t to the notation above as necessary. For example, bit will denote the
realized bid of bidder i at auction t. Let TN denote the number of auctions in which N is the set
                          P
of bidders. We let Tn = N :|N |=n TN . We assume that for all n = n . . . n, Tn → ∞ and T → ∞.
When we consider asymmetric settings, we consider only sets N for which TN → ∞.
       A two-step estimation procedure can be employed, closely following the identification result in
                                                            G        (bit |bit ;N )
Theorem 3.1. In the first step, estimates of each g Mi |Bi(bit |bit ;N ) are obtained from the observed
                                                            Mi |Bi

bids.      These estimates are then used with equation (3.1) to construct estimates of each latent
valuation ui . This pseudo-sample of valuations (often referred to as a sample of “pseudo-values”)
is then treated as a sample from the true distribution FU (·), subject to first-stage estimation error.
       In principle each step could be parametric or nonparametric. As noted by Perrigne and Vuong
(1999), a challenge in a fully parametric method is the need for internal consistency between the
parametric families chosen for the distributions of bids and of valuations, since these are related
by the equilibrium bid function.        This issue would be avoided if only one of the two steps were
treated parametrically. Jofre-Bonet and Pesendorfer (2003) and Athey, Levin, and Seira (2004)
follow this approach, motivated by a desire to include covariates in a parsimonious way.20 Fully
parametric methods based on maximum likelihood or moment conditions (rather than the two-step
“indirect” approach discussed here) have been explored by, e.g., Paarsch (1992a,b), Donald and
Paarsch (1993, 1996), and Laﬀont, Ossard and Vuong (1995). In practice the applicability of these
methods has been limited to distributional families leading to simple closed forms for equilibrium
bid functions and/or to the symmetric independent private values setting.                As first explored by
Donald and Paarsch (1993), a violation of a standard regularity condition for maximum likelihood
estimation arises in a first-price auction, leading to non-standard asymptotic distributions (see also
Donald and Paarsch (1996), Chernozhukov and Hong (2003), and Hirano and Porter (2003)).
  20
    Note, however, that theory predicts that bid distributions should have compact support. To be consistent with
theory, an upper bound on the support of the bid distributions should be incorporated in estimation.


                                                       19
       Below we describe the fully nonparametric estimators that have thus far been proposed in the
literature.21

3.2.1      Symmetric Bidders

Consider first the case of symmetric bidders, where GMi |Bi (b|b; N ) can be written GM|B (b|b; n) ∀i.
Following Li, Perrigne and Vuong (2002), let

                                    GM,B (m, b; n) ≡ GM|B (m|b; n)gB (b; n)

and
                                     gM,B (m; b; n) ≡ gM|B (m|b; n)gB (b; n)

where gB (·) is the marginal density of a bidder’s equilibrium bid, given the number of bidders
n. Note that here we depart from our usual notational convention, since GM,B (·) is not the joint
distribution of (M, B) but its derivative with respect to its second argument. Let
                                                   Tn Xn     µ         ¶
                                            1 X                b − bit
                     ĜM,B (b, b; n) =                    K              1 {mit < b, nt = n}                      (3.3)
                                          nTn hG t=1             hG
                                                      i=1
                                                   Tn Xn                 µ                 ¶
                                            1 X                            b − bit b − mit
                     ĝM,B (b, b; n) =                    1 {nt = n} K            ,                               (3.4)
                                          nTn h2g t=1                        hg       hg
                                                        i=1

where Mit denotes the maximum of i’s opponents’ bids at auction t, K(·) is a kernel, and hG and
hg are appropriately chosen bandwidth sequences. Under standard conditions, ĜM,B (b, b; n) and
ĝM,B (b, b; n) are consistent estimators of GM,B (b, b; n) and gM,B (b; b; n). Noting that

                                          GM,B (b, b; n)   GM|B (b|b; n)
                                                         =
                                          gM,B (b, b; n)   gM|B (b|b; n)

                Ĝ
              M,B    (b,b;n)                             M |B   G      (b|b;n)
we see that ĝM,B (b,b;n) is a consistent estimator of g     (b|b;n) . Equation (3.1) then implies that
                                                                 M|B


                                                          ĜM,B (bit , bit ; n)
                                           ûit ≡ bit +
                                                          ĝM,B (bit , bit ; n)

is a consistent estimate of the latent valuation uit that generated the observed bid bit .
       Naively treating each ûit as a draw from FU (·) might suggest a kernel density estimator of the
form
  21
    Thus far, the literature has focused on kernel estimators. One possible alternative is sieve estimation (e.g., Chen,
2006). As we discuss below, such an approach might have a practical advantage in environments with observed
auction heterogeneity.




                                                           20
                                                    T     µ                         ¶
                                              1 X           u1− û1t       un− ûnt
                 fˆU (u1 , . . . , un ) =              Kf            ,...,            1 {nt = n}
                                            Tn hnf t=1        hf             hf

where Kf (·) is a multivariate kernel and hf is a bandwidth. Li, Perrigne and Vuong (2002, Proposi-
tion 2) show that with bandwidths hG , hg , and hf that vanish at appropriate rates, under standard
smoothness conditions fˆU (·) is in fact a uniformly consistent estimator of fU (·) on any inner com-
pact subset of its support.        The restriction to the region of support away from the boundaries
follows from the usual problem of asymptotic bias at the boundaries with kernel estimates.
   Li, Perrigne and Vuong (2002, page 180-181) suggest triweight kernels (using products of uni-
variate kernels for the multivariate kernels) and a standard rule of trimming the pseudo-values
associated with bids within one bandwidth of either boundary of the bid data. The most impor-
tant practical question is the choice of bandwidth.              Guerre, Perrigne and Vuong (2000) and Li,
Perrigne and Vuong (2002) suggest following Silverman’s (1986) “rule of thumb.” To our knowl-
edge, data driven bandwidth selection procedures have not been explored. Guerre, Perrigne and
Vuong (2000) also point out that the assumption of exchangeability can be imposed by averaging
fˆU (u1 , . . . , un ) over all permutations of the bidder indices. When there is exogenous variation in
the number of bidders, it may be useful to further exploit this restriction by optimally combining
information from auctions with diﬀerent numbers of bidders. As we discuss in more detail below,
the overidentifying exchangeability restriction or exogenous variation in participation can also serve
as a basis for specification testing.
   An important but largely unresolved question is the asymptotic distribution of the estimator
fˆU (·). The challenge is to appropriately account for the estimation error arising from the first-
stage estimation of the markdown component of the equilibrium bid functions (Guerre, Perrigne
and Vuong (2000)). Of course, one is often interested in confidence intervals on an estimate of some
functional of fU (·), rather than on fˆU (·) itself. For example, the goal of the empirical exercise
may be to determine optimal selling procedures, to assess eﬃciency, or to describe how valuations
are aﬀected by various factors. For the symmetric case, Haile, Hong and Shum (2003) have shown
that the estimates ûit themselves have asymptotic normal distributions, as do all fixed quantiles
(and many other functionals) of their empirical distribution. In practice, a bootstrap procedure
has sometimes been applied for inference on these functionals of FU (·) or others expected to have
a normal limiting distribution (e.g., Hendricks, Pinkse and Porter (2003), Haile, Hong and Shum
(2003), Krasnokutskaya (2004)). Outside the IPV model, a block bootstrap is used, reflecting the
assumption that auctions are independent, whereas bids may be correlated within an auction. In
particular, to construct one bootstrap sample of bids for a given value of n, auction indices s are
sampled with replacement from the set {t : nt = n}. All bids from each selected auction s are then


                                                          21
included in the bootstrap sample.            Haile, Hong and Shum (2003) have also explored the use of
subsampling.
       In the special case of (symmetric) independent private values, the joint distribution FU (·) is a
product of identical marginal distributions, FU (·), and the first order condition (3.1) simplifies to

                                                            GB (b; n)
                                             u=b+                                                                 (3.5)
                                                         (n − 1)gB (b; n)

where GB (·; n) is the marginal distribution of equilibrium bids in auctions with n bidders, and
gB (·; n) is the associated density.         Because GB (·; n) and gB (·; n) are univariate functions, this
simplifies estimation. Let
                                                  T     n
                                             1 XX
                           ĜB (b; n) =                1 {bit ≤ b, nt = n}
                                             T t=1
                                                   i=1
                                                     T   n     µ         ¶
                                               1 XX              b − bit
                            ĝB (b; n) =                    K              1 {nt = n}
                                             nTn hg t=1            hg
                                                              i=1
                                                         ĜB (bit ; nt )
                                    ûit = bit +
                                                      (n − 1) ĝB (bit ; nt )

where K (·) is a kernel (satisfying standard conditions) and hg is an appropriately chosen bandwidth
sequence.22 Guerre, Perrigne and Vuong (2000) show that with appropriately chosen bandwidth
sequence hf , one then obtains a uniformly consistent estimator of fU (·) from the kernel density
estimator
                                                  T
                                                  X   n                      µ              ¶
                                              1     1 X 1                        u − ûit
                                    fˆU (u) =                            K                      .
                                              T          nt         hf             hf
                                                  t=1         i=1


3.2.2      Asymmetric Bidders

Extending the approach above to the case of asymmetric bidders is straightforward, but more
data intensive. With symmetric bidders, estimation of the distribution of opposing bids (and the
               M,B  G     (b|b;n)
markdown term gM,B (b|b;n) this distribution implies) is performed separately for each value of n.
This reflects the fact that variation in n changes the distribution of the maximum opposing bid
and, therefore, the equilibrium bidding strategy that is inverted to recover private values from the
observed bids. With asymmetric bidders, variation in the identities of opposing bidders can have
  22
    See Guerre, Perrigne and Vuong (2000) for details. They also propose kernel smoothing over the diﬀerent values
of n in estimating each GB (·; n) and g (·; n) rather than the pure “binning” approach described here. Asymptotically
there is no diﬀerence and, since N is discrete, kernel smoothing is a generalization. In finite sample, kernel smoothing
that is not equivalent to binning will utilize bids from auctions with n0 6= n bidders to estimate the markdown
   GB (b;n)
(n−1)gB (b;n) in (3.5) . Whether this is desirable will depend on the data available, although we are not aware of a
careful analysis of this question.



                                                              22
a similar eﬀect, even when the number of opponents is held constant. Depending on the nature of
bidder asymmetries, diﬀerent approaches will be taken, although the general principle is clear: to
                                G         (bi |bi ;Nt )
estimate the markdown g Mi |Bi(bi |bi ;Nt ) for a bidder i in auction t, the relevant sample is the set of
                                 Mi |Bi

auctions s in which GMi |Bi (·|·i ; Ns ) = GMi |Bi (·|·; Nt ).
       In the most general case, each bidder is allowed to draw her valuation from a diﬀerent distri-
bution and each set of bidders N is treated separately. Again let Mit denote the maximum bid
among i’s opponents at auction t. Letting TNt denote the number of auctions in which the set of
bidders is Nt , one could let
                                                         T     µ           ¶
                                                  1 X            bit − bis
               ĜM,B (bit , bit ; Nt ) =                    K                1 {mis < bit , Ns = Nt }
                                                TNt hG s=1          hG
                                                         T                   µ            ¶ µ            ¶
                                                  1 X                           bit − bis      bit − mis
                ĝM,B (bit , bit ; Nt ) =                   1 {Ns = Nt } K                 K
                                                TNt h2g s=1                         hg             hg

and
                                                                 ĜM,B (bit , bit ; Nt )
                                                  ûit = bit +
                                                                 ĝM,B (bit , bit ; Nt )
to obtain consistent estimators under standard conditions.                               In practice, however, this approach
may require a great deal of data, since many observations will be needed for each set N considered.
       In some cases, one may be able to categorize bidders into a smaller set of heterogeneous classes,
assuming exchangeability within each class. This structure can lead to significant practical advan-
tages, as it allows use of substantially more data for each estimated pseudo-value. For example,
Campo, Perrigne and Vuong (2003) studied “wildcat” auctions for mineral extraction rights on the
U.S. outer-continental shelf, where bids may come from “solo” bidders (a single firm) or “joint”
bidders (more than one firm, legally bidding as one).23 This leads them to consider the case of two
classes of bidders, I and II. The first-order condition for a class-I bidder in an auction in which
the set of bidders is N can be written
                                                                 GIM,B (bI , bI ; N )
                                                   uI = bI +      I
                                                                                         .                               (3.6)
                                                                 gM,B (bI , bI ; N )

   Define the relation =I,II such that Nt =I,II N holds iﬀ Nt and N have the same number of
                                     P      ©          ª
bidders from each class. Let TNI,II = Tt=1 1 Nt =I,II N . Now GIM,B (bI , bI ; N ) can be estimated
by

                                                      X |N |
                                                      T X          µ             ¶
                                    1                                  b − bis        ©                                 ª
       ĜIM,B (b, b; N ) =                                     K                     1 mis < b, Nt =I,II N , i ∈ class I .
                             TNI,II × hG × nI s=1 i=1                    hG
  23
    Athey, Levin and Seira (2004) provide another example, treating loggers and sawmills as two diﬀerent classes of
bidders at timber auctions.


                                                                   23
                                                    I
Analogous adjustments are made to an estimator for gM,B (b, b; N ) and to the first-order condition
for a class-II bidder (see Campo, Perrigne and Vuong, 2003, pp. 186—187 for details). Note in
                                      GI     (bI ,bI ;N )
particular that in estimating gIM,B(b ,b ;N ) one can use data from all auctions t with Nt =I,II N .
                                       M,B    I   I
Furthermore, one can also utilize more bids from each auction than in the completely general case
since, as in the case of symmetry, all bidders in the same class as bidder i can be treated as if they
were bidder i, only with a new draw of Xi .
       Note that we have treated asymmetries as resulting from diﬀerences in the distributions from
which bidders draw unobservables. In some cases, it may be more natural that asymmetries arise
instead from observable covariates Zi that are idiosyncratic to each bidder–e.g., distance to a con-
struction site (e.g., Bajari (1997), Flambard and Perrigne (2003)). Conditional on having the same
value of the covariates, bidder valuations may still be exchangeable. Without further restriction,
this is similar to the case in which bidders fall into discrete categories; indeed, it is exactly the same
if the covariates are discrete. In the case of continuous covariates, standard smoothing techniques
would lead to similar approaches for estimating the joint distribution FX,U (·|Z1 , . . . , Zn ). In Sec-
tion 6.2.1 we will see how the presence of bidder-specific covariates can actually aid identification
in some cases.


3.3      Incomplete Bid Data and Dutch Auctions

3.3.1      Independent Private Values

The results above exploited the assumed observability of all bids from each auction. In some
applications, however, not all bids are available. For example, for some auctions only the transaction
price B (n:n) is recorded. One example is a Dutch auction, where the auctioneer starts with a very
high price and lowers it continuously until one bidder is willing to take the good at the current
price. Although a Dutch auction is seemingly diﬀerent from a first-price sealed bid auction, the
two formats are strategically equivalent (assuming the same information is observable prior to
bidding).24 Since a Dutch auction ends as soon as the winner makes his bid, only the winning bid
can be observed. We will see that in some cases the winning bid is suﬃcient for identification. In
other environments, only a partial set of bids may be available. For example, in a procurement
setting, the buyer might retain information regarding the best losing bid in case the auction winner
defaults. Viewed somewhat diﬀerently, identification results for the case of incomplete bid data can
  24
     Brendstrup and Paarsch (2003) point out that in a Dutch auction the set of actual opponents may be observable
before the bidding decision is made. With a binding reserve price that creates a distinction between the potential
bidders and actual bidders (see Section 6.3 for definitions), this destroys strategic equivalence. The basic approach
for first-price auctions can still be applied, however, if the distribution of the actual bidders’ valuations (which reflects
truncation at the reserve price) is the object of interest. See the related discussion in Section 6.3.1.



                                                             24
clarify how much information one would need to collect to create a useful data set.
       In an asymmetric IPV first-price (or Dutch) auction, identification of each marginal distrib-
ution GBi (·) from observation of the winning bid and winner’s identity is formally equivalent to
identification of the well known competing risks model with independent non-identically distrib-
uted risks.25 For that model, nonparametric identification was shown by Berman (1963). Since
knowledge of each GBi (·) completely determines the distribution of

                                                  GMi |Bi (Bi |Bi ; N )
                                           Bi +
                                                  gMi |Bi (Bi |Bi ; N )

identification of the marginal distributions FUi (·) then follows. This gives the following result from
Athey and Haile (2002).

Theorem 3.2 Suppose that the transaction price and the number of bidders (and, if bidders are
asymmetric, the set N and identity of the winner) are observed in first-price auctions with inde-
pendent private values. Then FU (·) is identified.

       To gain some intuition, consider the symmetric case, where the observable transaction price
                          (n:n)
B (n:n) has distribution GB (b), GBi (·) can be written as GB (·), and
                          (n:n)                                       µ                   ¶
                        GB        (b)  GB (b)n       n−1                     GB (b)
                          (n:n)
                                =              n−1 =                                          .              (3.7)
                         gB (b)   ngB (b)GB (b)       n                   (n − 1)gB (b)

As first observed by Guerre, Perrigne and Vuong (1995), identification then follows from (3.5).
       In the asymmetric case, the derivation of Berman’s (1963) equation (2) (see also Prakasa-Rao,
1998, Theorem 7.3.1 and Remarks 7.3.1) yields the relation (fixing N )
                                             ⎧    ⎛         ⎞−1      ⎫
                                             ⎨Z bi Xn                ⎬
                             GBi (bi ) = exp      ⎝   Gw
                                                       i (s)
                                                            ⎠ dGw
                                                                i (s)                                        (3.8)
                                             ⎩ −∞                    ⎭
                                                         j=1

where Gw                                                w
       i (bi ) = Pr (Bi ≤ bi , Bi ≥ Bj ∀j). Since each Gi (bi ) is observable, each GBi (bi ) is identi-
fied. The marginal distributions GBi (·) uniquely determine the underlying distributions FUi (·) through
the first-order condition (3.1) as in the case in which all bids are observed.
       An immediate implication of Theorem 3.2 is identification from the transaction price in a Dutch
auction.
  25
     The data generating process mapping bids to observables is formally identical to that in a complementary risks
model, where failure of all components triggers the observable system failure, and one observes the identity of the
last component to fail. This is isomorphic to the competing risks model.




                                                        25
Corollary 3.1 Suppose that the transaction price and the number of bidders (and, if bidders are
asymmetric, the set N and the identity of the winner) are observed in Dutch auctions with inde-
pendent private values. Then FU (·) is identified.

       As suggested by Laﬀont, Ossard and Vuong (1995), the requirement that n be observable by the
econometrician may fail in some Dutch auctions, where one might expect only the transaction price
(i.e., the only bid made in the auction) to be recorded. It should be clear that without knowledge
                          (n:n)
of n, knowledge of GB             (·) is insuﬃcient to determine even GB (·) .26
       The estimation approaches described in the preceding sections to cases in which only the trans-
action price (winning bid) is observed is straightforward in the symmetric case, where (3.7) can
be used. In the asymmetric case, Brendstrup and Paarsch (2003) have recently proposed substi-
tuting the empirical distribution function and a kernel density estimator for, respectively, Gw
                                                                                              i (s)
        dGw
          i (s)
and       ds      in equation (3.8). The close relation of the model to the competing risks model sug-
gests that other nonparametric estimators such as the Nelson-Aalan or Kaplan-Meier estimators
(e.g., David and Moeschberger (1978), Anderson et al. (1991)) might also be used to estimate each
GBi (·). Once these distributions are estimated, one might then simulate bids from these estimated
distributions in order to estimate pseudo-values using the first-order condition (3.1).

3.3.2      Aﬃliated Private Values

Next we consider what can be learned from the top two bids in first-price auctions in a richer
private values environment.           Intuitively, the top two bids contain much of the critical information
for a first-price auction. First, these are the only two bids necessary to determine the distribution
of the maximum opposing bid for each bidder, suggesting that at least some information about the
markdown components of the equilibrium bid functions could be learned. Second, in equilibrium,
the top two bids are monotonic transformations of the top two signals. As the following result,
adapted from Athey and Haile (2002) shows, this is suﬃcient to enable partial identification in a
symmetric first-price sealed-bid auction.

Theorem 3.3 Assume that the two highest bids are observed in first-price auctions. If bidders are
asymmetric, assume that the set N and the identity of the winner are also observed. Then (i) the
equilibrium bid functions β i (·; N ) are identified for all i = 1, . . . , n; (ii) with symmetric private
values, the joint distribution of U (n−1:n) and U (n:n) is identified.

       Proof. Part (ii) follows immediately from part (i), since in the symmetric private values case
the two highest bids are made by the bidders with the two highest valuations. To prove part (i) for
  26
    Laﬀont, Ossard and Vuong (1995) suggest an approach for estimating n when it is unkown but fixed.   They
assume that identification follows from a parametric distributional assumption.


                                                         26
the more general asymmetric case, consider bidder 1 without loss of generality. Let I (n:n) denote
the identity of the winning bidder. For almost all such b1 ∈supp[GB1 (·)] (using Bayes’ rule, and
canceling common terms)
                                                                                                          ¯
                                                              ∂                                  ¯
    Pr(maxj6=1 Bj ≤ b1 |B1 = b1 ; N )                         ∂y Pr(maxj6=1 Bj ≤ b1 , B1 ≤ y; N )¯y=b
                                      ¯            =                                                      ¯   1
 ∂
   Pr(max      B  ≤ m|B    = b   ; N )¯                   ∂2                                ¯
                                                         ∂m∂y Pr(maxj6=1 Bj ≤ m, B1 ≤ y; N )¯m=y=b
∂m       j6 =1  j        1     1       m=b1
                                                                                                                    1
                                                                                                 ¯
                                                                    ∂                              ¯
                                                                    ∂y GB (y, b1 , . . . , b1 ; N )¯y=b
                                                   =     P                                       ¯    1
                                                                 ∂2                               ¯
                                                           j6=1 ∂y∂sj GB (y, s2 , . . . , sn ; N )¯
                                                                                                   y=s =···=s =b
                                                                                                      2       n
                                                                                                                  ¯ 1
                                                                        ∂       (n:n) ≤ y, I (n:n) = 1, N )¯
                                                                        ∂y Pr(B                            ¯
                                                                                                            y=b
                                                   =                                                                    1
                                                                                                                            ¯       .
                                                          ∂2       (n−1:n) ≤ m, B (n:n) ≤ y, I (n:n) = 1, N )¯¯
                                                         ∂m∂y Pr(B                                             m=y=b            1


Since the last expression is the ratio of two observable functions, the right-hand side of (2.4)
is identified almost everywhere, which determines bidder 1’s (inverse) equilibrium bid function.
Q.E.D.

      Estimation approaches based on this partial identification result have not yet been explored.
Note that estimates of each β i (·; N ) are themselves of interest, since these characterize the wedge
between bids and valuations that determine the division of surplus and can lead to ineﬃciencies.
                                                                          ¡                   ¢
In the symmetric case, knowledge of β (·; n) and the joint distribution of U (n−1:n) , U (n:n) would
enable evaluation of rent extraction by the seller, the eﬀects of introducing a reserve price, and the
outcomes under a number of alternative selling mechanisms. As discussed in Section 8, this partial
identification result can also be suﬃcient to enable discrimination between private and common
values environments.
      Observing the top two bids, however, is insuﬃcient to identify the full joint distribution FU (·).
In fact, Athey and Haile (2002) have shown that observation of all bids is needed, even in a
symmetric setting.
                                                               ¡                   ¢
Theorem 3.4 In the symmetric private values model, suppose that B (n:n) , B (n−1:n) are observed
in first-price auctions but some B (j:n) , j < n − 1 is unobserved. Then FU (·) is not identified.

      Proof. Let the point (u1 , u2 , . . . , un ) be on the interior of the support of FU (·), with u1 <
· · · < un . Starting with the true joint density fU (·), define a new joint density f˜U (·) by shifting
mass δ from a neighborhood of (u1 , . . . , uj , . . . , un ) (and each permutation) to a neighborhood
of the point (u1 , . . . , uj + , . . . , un ) (and each permutation).27 For small                and δ, this change
 27
      Athey and Haile (2002, Theorem 4) describe this in more detail.


                                                         27
preserves exchangeability. Since the distribution of maxk6=i Bk is unaﬀected for any i by this change,
equilibrium bidding strategies (given by (3.1)) remain the same for all bidders. Furthermore, the
                                                                                            ¡           ¢
only order statistic aﬀected in moving from f˜U (·) to fU (·) is U (j:n) . Since B (j:n) = β U (j:n) ; n
is unobserved, the distribution of observables is unchanged.                                            Q.E.D.

    Intuitively, even under exchangeability, FU (·) is an n-dimensional joint distribution. Identifying
this distribution with data of dimension n − 1 or lower would require additional restrictions.


4     Ascending Auctions with Private Values: Basic Results

4.1    Identification

With private values, equilibrium bidding strategies in Milgrom and Weber’s (1982) model of the
ascending auction are particularly simple: it is a weakly dominant strategy for each bidder to exit
the auction at his valuation. Hence, unlike the first-price auction, here there is no need to estimate
inverse bid functions in order to relate the observed bids to the underlying valuations. This does
not make identification trivial, however. The reason is the fact that the auction ends as soon as
only one bidder remains. Because the auction stops at the second highest bid, the only information
revealed about the winner’s valuation is the censoring point B (n−1:n) .              This partial observability
of bids is the main challenge to identification.
    When valuations are independent, Athey and Haile (2002) have shown that identification does
hold, even if one observes only the transaction price (and the identity of the winner, if bidders are
asymmetric). This is easier to see when bidders are symmetric. In that case valuations are i.i.d.
draws from the marginal distribution FU (·). The transaction price is the order statistic U (n−1:n) ,
                           (n−1:n)
which has distribution FU            (·).    The distribution of an order statistic from an i.i.d. sample
of size n from an arbitrary distribution F (·) has the distribution (see, e.g., Arnold, Balakrishnan
and Nagaraja, 1992)
                                                          Z F (s)
                                             n!
                       F (i:n) (s) =                                ti−1 (1 − t)n−i dt ∀s.                 (4.1)
                                       (n − i)!(i − 1)!    0

Since the right-hand side of (4.1) is strictly increasing in F (s) ∈ [0, 1], F (i:n) (s) uniquely determines
F (s) for every s.
    When bidders have asymmetric independent private values, the identification argument is more
subtle. Athey and Haile (2002) point out that the asymmetric ascending auction model is isomor-
phic to a model considered in the statistics literature on reliability, where Meilijson (1981) has




                                                      28
provided a proof. To get some intuition, fix N with |N | = 3 and define

            G̃3 (t) ≡ Pr(price ≤ t, 3 is the winner)
                     = Pr(B1 ≤ t; B2 ≤ t; B3 ≥ t) + Pr(B1 ≤ B3 ; B2 ≤ B3 ; B3 ≤ t)
                                                     Z t
                     = FU1 (t)FU2 (t)(1 − FU3 (t)) +     FU1 (x)FU2 (x)dFU3 (x)
                                                            u
                          Z t
                     =          (FU1 (x) FU2 (x))0 (1 − FU3 (x))dx
                           u

where (FU1 FU2 )0 is the first derivative of FU1 FU2 and the last equality follows from integration by
parts. Diﬀerentiating both sides, we obtain

                                    g̃3 (t) = (FU1 (t) FU2 (t))0 (1 − FU3 (t))

which implies that
                                                          g̃3 (t)
                                    (FU1 (t) FU2 (t))0 =
                                                      1 − FU3 (t)
                                                      Z t
                                                               g̃3 (x)
                                    FU1 (t) FU2 (t) =                      dx
                                                        u 1 − FU3 (x)
                                                           Z t
                                                                    g̃3 (x)
                          log FU1 (t) + log FU2 (t) = log                     dx.
                                                             u  1  −  FU3 (x)

Rewrite this as       ⎡               ⎤⎡                ⎤         ⎡ R                ⎤
                                                                  t  g̃3 (x)
                        1 1         0     log FU1 (x)         ⎢  u 1−FU3 (x) dx ⎥
                      ⎢               ⎥⎢              ⎥       ⎢ R t g̃2 (x)     ⎥
                      ⎢ 1 0         1 ⎥ ⎢             ⎥
                      ⎣               ⎦ ⎣ log FU2 (x) ⎦ = log ⎢
                                                              ⎣ Ru 1−FU2 (x)
                                                                             dx ⎥ .
                                                                                ⎦
                                                                                                        (4.2)
                                                                  t  g̃1 (x)
                        0 1         1     log FU3 (x)            u 1−FU1 (x) dx
This is a 3x3 system of operator equations defining how the three observable marginal distributions
are related to the three marginal distributions FUi (·) of interest.             Meilijson (1981) showed that
this system has a unique solution.
   We summarize these results in the following theorem.

Theorem 4.1 In an ascending auction with symmetric independent private values, FU (·) is identi-
fied when the transaction price and the number of bidders are observable. In an ascending auction
with asymmetric independent private values, FU (·) is identified when the transaction price, the
identity of the winning bidder, and the set N are observable.

   One attractive feature of this result is that it implies that one need not use bids other than the
transaction price to estimate FU (·). This is valuable because in many applications one may have
little confidence in the interpretation of losing bids implied by Milgrom and Weber’s (1982) button

                                                       29
auction model. With independence, one is free to ignore losing bids altogether, relying only on the
assumption that the transaction price equals the second highest valuation.
       Athey and Haile (2002) give a much more negative result when the independence assumption
is dropped, even with symmetric bidders. The proof mirrors that of Theorem 3.4

Theorem 4.2 In a symmetric private values model, the joint distribution FU (·) is not identified
from the observable bids in an ascending auction.


4.2      Estimation

Here we make the same sampling assumptions made in the discussion of estimation for first-price
sealed bid auctions (see Section 3.2). In an ascending auction, typically one treats the highest price
oﬀered by each bidder as his “bid,” i.e., his exit price in the button auction model.28 Using these
data, several parametric estimation approaches for the symmetric IPV model have been explored
in the literature. Maximum likelihood, nonlinear least squares, and GMM are among the methods
considered. Due to the simplicity of the equilibrium bid function, likelihood functions or moment
conditions are easily derived from the probability density function of the winning bid alone (e.g.,
Paarsch (1992b), Donald and Paarsch (1996), Baldwin, Marshall and Richard (1997), Haile (2001)),
or of the n − 1 losing bids (e.g., Donald and Paarsch (1996), Paarsch (1997)). In the former case,
                                              (n−1:n)
the likelihood of a winning bid b is fU                 (b). For the latter case, the likelihood for the losing
bids in a given auction is
                                    h      ³           ´i Y   ³      ´
                                     1 − FU b(n−1:n−1)      fU b(j:n) .
                                                                  j<n−1

       To our knowledge, nonparametric estimation of the symmetric IPV model has been performed
only in simulations (Haile and Tamer (2003)), although this is actually simpler than nonparametric
estimation in the case of a first-price auction. Following Haile and Tamer (2003), for H ∈ [0, 1]
define the strictly increasing diﬀerentiable function φ (H; i, n) implicitly as the solution to
                                                            Z φ
                                               n!
                                   H=                              si−1 (1 − s)n−i ds                               (4.3)
                                         (n − i)!(i − 1)!     0

so that by (4.1)
                                              ³             ´
                                                (i:n)
                                    FU (u) = φ FU (u) ; i, n              ∀u, i ≤ n.                                (4.4)
  28
     See, e.g., the surveys of Paarsch (1994) and Hendricks and Paarsch (1995). A source of ambiguity arises when one
observes n such bids, with B (n:n) significantly higher than B (n−1:n) . In such cases, one may question the applicability
                                                                                                                  (n:n)
of the button auction model. For now we assume the button auction structure and treat the distributions GB (·)
       (n−1:n)
and GB          (·) as identical.



                                                           30
In particular,
                                               ³                       ´
                                                 (n−1:n)
                                     FU (u) = φ FU       (u) ; n − 1, n                      ∀u.                   (4.5)

Since the winning bid is B (n−1:n) = U (n−1:n) , one can construct an estimator of FU (u) by substi-
tuting the empirical distribution

                                                     1 X n                             o
                                                        T
                                 (n−1:n)
                               ĜB          (u) =          1 nt = n, B (nt −1:nt ) ≤ u
                                                    Tn t=1

         (n−1:n)                                                                                         (n−1:n)
for FU             (u) inside the function φ (·) on the right-hand side of (4.5).                  Since GB        (·) =
  (n−1:n)                              (n−1:n)                               (n−1:n)
FU        (·), by standard arguments ĜB       (u) converges uniformly to FU         (u) almost surely
                                                                  ³                        ´
                                                                     (n−1:n)
and has a normal asymptotic approximation. Convergence of φ F̂U              (u) ; n − 1, n to FU (u)
then follows, with an asymptotic normal distribution obtainable by the delta method.29 In practice,
one can use the relation
                                                     n
                                                     X µ ¶
                                (n−1:n)                 n
                               FU       (u) =             FU (u)j (1 − FU (u))n−j                                  (4.6)
                                                        j
                                                    j=n−1


instead of the equivalent but more computationally demanding (4.5) when solving for each F̂U (u).
                                                  (n−1:n)
Monotonicity of the relation between FU                     (u) and FU (u) makes numerical solution particularly
simple.
       Note that when there
                        ³ is exogenous variation
                                            ´    in the number of bidders, there will be as many
                                (n−1:n)
diﬀerent estimators φ F̂U                  (u) ; n − 1, n    of FU (u) available as there are diﬀerent values of
n in the data.         If one observes losing bids beyond the transaction price and assumes these are
generated by the button auction model, additional estimators will be available, based on equation
(4.4) with i < n − 1. An eﬃcient estimator would take an optimally weighted average of these
diﬀerent estimators, imposing the constraint that the estimated CDF be monotone.
       In the case of asymmetric bidders, no simple relation like (4.6) is available. However, a likelihood
approach provides several possible estimation strategies. The likelihood for the observable event
{i wins at price p} is
                                                        X                Y
                                       (1 − FUi (p))           fUj (p)            FUk (p) .
                                                        j6=i             k6=i,j

Hence, if we let It denote the winner of auction t, the likelihood function has the form
                                      Y³            ´X         Y
                                L=      1 − FUIt (p)   fUj (p)   FUk (p) .                                         (4.7)
                                       t                       j6=It              k6=It ,j

  29
    In fact, the convergence is uniform. These results follow from those given in Haile and Tamer (2002, Appendix
A; 2003, Theorem 3).



                                                               31
Parametric or nonparametric MLE might then be applied. Brendstrup and Paarsch (2004) have
recently proposed a “semi-nonparametric” (Gallant and Nychka (1987)) estimation approach based
on this likelihood.30


4.3      An Alternative, Incomplete Model of Ascending Auctions

In some cases an auction institution closely matching the structure of the button auction model is
observed in practice. Bidders may, for example, raise their hands or other objects to indicate their
participation continuously as the auctioneer raises the price (see, e.g., Zulehner’s (2003) description
of cattle auctions). When the auction is conducted in a less structured oral format, however, one
may question the applicability of the button auction model as an empirical structure. Of particular
concern is the fact that there is no need for a bidder to continuously indicate whether she is “in” or
“out” as the auction proceeds. Nontrivial minimum bid increments are often used, and a bidder is
free to “jump bid” or to remain silent for most of the auction and bid only when it looks like the
auction is about to end (if others don’t bid the price past her valuation first). Such behaviors are
common in practice and raise the possibility that bidders will fail to reveal their full willingness to
pay, or even fail to bid altogether. Several theoretical extensions of the standard model have been
proposed, mainly focusing on the case of common values (Avery (1998), Harstad and Rothkopf
(2000), Izmalkov (2003)). Until recently, however, all empirical models of the ascending auction
relied on significant abstractions for tractability of the underlying theoretical model.
       As an alternative to relying on the structure of the button auction or another stylized model,
Haile and Tamer (2003) have proposed an empirical approach to ascending auctions with symmet-
ric independent private values using two simple assumptions to govern the interpretation of the
observed bids:
       Assumption 4.1. Bidders do not bid more than they are willing to pay.
       Assumption 4.2. Bidders do not allow an opponent to win at a price they are willing to beat.
       These assumptions allow bidding as in the dominant strategy equilibrium of the button auction
model but do not require it. In particular, bids need not be equal to valuations or even monotonic
in valuations, and the price need not equal the second highest valuation. These assumptions
define an “incomplete” model of an ascending auction: they place some restrictions on the relation
between valuations and bids, but do not fully characterize behavior. While this incomplete model
is insuﬃcient to identify the distribution of valuations from the distribution of bids, they do provide
partial identification; in particular, one may still obtain informative bounds on the distribution of
valuations.
  30
   They also consider auctions in which multiple units are sold sequentially, focusing on bids in the (single-unit,
asymmetric) auction of the final unit.


                                                        32
4.3.1    Bounding the Distribution of Bidder Valuations

To obtain an upper bound on the distribution function FU (·), observe that Assumption 4.1 is
equivalent to assuming bi ≤ ui for all i.           In an n-bidder auction, it is easy to confirm that this
implies b(i:n) ≤ u(i:n)   ∀i, which then gives

                                       (i:n)              (i:n)
                                     GB        (u) ≥ FU           (u)     ∀i, n, u.                                  (4.8)

Recalling the definition (4.3) and equation (4.4), we know that
                                          ³              ´
                                             (i:n)
                                FU (u) = φ FU (u) ; i, n     ∀i, n, u.                                               (4.9)

Since the function φ (·; i, n) : [0, 1] → [0, 1] is strictly increasing, (4.8) and (4.9) together give
                                     ³                ´
                                        (i:n)
                                  φ GB (u) ; i, n ≥ FU (u) ∀i, n, u.
                          Pn
For each u, this yields      n=n n upper bounds on FU (u).                  The most informative bound (i.e., the
smallest upper bound) is obtained by taking the minimum at each value of u:
                                               ³             ´
                                                  (i:n)
                                FU+ (u) = min φ GB (u) ; i, n .                                                    (4.10)
                                                    i,n

    A similar approach can be taken to obtain a lower bound on FU (·).                            Letting ∆ ≥ 0 denote
the minimum bid increment in the auction, Assumption 4.2 implies that all losing bidders have
                                                                                      (n:n)
valuations less than b(n:n) + ∆, implying u(n−1:n) ≤ b(n:n) + ∆. If G∆                        (·) denotes the distribution
of B (n:n) + ∆, this gives
                                      (n:n)               (n−1:n)
                                    G∆         (u) ≤ FU             (u)      ∀n, u.

Applying the monotonic transformation φ (·; n − 1, n) to both sides gives
                            ³                    ´
                               (n:n)
                           φ G∆ (u) ; n − 1, n ≤ FU (u) ∀n, u.

This yields multiple lower bounds on FU (u) (one for each value of n). The most informative bound
can be constructed by taking the pointwise maximum:
                                            ³                 ´
                                               (n:n)
                             FU− (u) = max φ G∆ (u) ; n − 1, n .                                                   (4.11)
                                                n

We summarize these results in the following theorem.

Theorem 4.3 FU− (u) ≤ FU (u) ≤ FU+ (u) for all u.




                                                          33
       Note that in principle this approach can be followed even when the transaction price is the
only bid available from each auction–the only modification required is that the minimum in (4.10)
would be taken over n only, fixing i = n.              However, an essential requirement of the approach is
that the number of bidders, n, be observable to the econometrician. This is also essential for the
methods discussed above for both sealed-bid and button auction models, but the assumption may
be more suspect in an ascending auction in which the button auction structure is inappropriate.
The number n will be observed if all bidders make some bid during the auction, or if bidders must
pre-qualify, register, or otherwise identify themselves in order to be eligible to bid. This is the case
in the timber auctions studied by Haile and Tamer (2003) and many other public sector auctions.31
       In general, the informativeness of the bounds FU+ (u) and FU− (u) depends on the deviation of
the true data generating process from that implied by the button auction model. In fact, if the
restriction B (n:n) = B (n−1:n) implied by the button auction model is consistent with the data, the
bounds FU− (·) and FU+ (·) collapse to the true distribution FU (·), providing point identification. By
contrast, imposing the full structure of the button auction model when this is not the true data
generating process need not result in an estimate of FU (·) that lies within the bounds, regardless of
sample size.32     While this should not be surprising–imposing false restrictions should be expected
to yield misleading estimates–it is a useful reminder that imposing structure in order to obtain
point identification is not equivalent to selecting a point estimate within bounds obtained from a
less restrictive but incomplete model.
       Estimation of the bounds is achieved by substituting the empirical distributions

                                                     1 X n                     o
                                                       T
                                    (i:n)
                                  ĜB       (b) =        1 nt = n, b(i:nt ) ≤ b
                                                    Tn
                                                       t=1

and
                                               1 X n                              o
                                                  T
                               (n:n)
                             Ĝ∆ (b) =               1 nt = n, b(nt :nt ) + ∆t ≤ b
                                              Tn t=1

for the corresponding CDFs in (4.10) and (4.11). Since the empirical distribution functions are uni-
formly consistent and asymptotically normally distributed
                                                ³         estimators
                                                               ´     of ³their population analogs,
                                                                                            ´
                                                                  (i:n)                      (n:n)
diﬀerentiability of φ (·; i, n) ensures that each φ GB                    (u) ; i, n   and φ G∆      (u) ; n − 1, n   are
consistent and asymptotically normally distributed as well. Continuity of the min and max func-
  31
     Song (2004) has recently considered identification and estimation for ascending auctions (and others) when n is
not observed. We will discuss one such case in Section 6.3.4 below.
  32
     See Haile and Tamer (2003) for additional discussion and simulation results.




                                                             34
tions then ensures consistency of the estimates of the estimators
                                               ³              ´
                                                   (i:n)
                             F̂U+ (u) = min φ ĜB (u) ; i, n
                                           i,n
                                                ³                 ´
                                                    (n:n)
                             F̂U− (u) = max φ Ĝ∆ (u) ; n − 1, n .
                                                    n

       These estimators have non-normal asymptotic distributions, due to the max and min. However,
Haile and Tamer (2002) show that the bootstrap (see Section 3.2.1) may be used for inference. A
more diﬃcult problem is that, while these estimators are consistent, in practice the max and min can
lead to severe finitie sample bias, potentially even leading to estimated upper and lower bounds that
cross. Intuitively, taking the minimum (maximum) of several consistent estimators makes it likely
that an estimator with downward (upward) sampling error is selected. One solution, discussed in
greater detail by Haile and Tamer (2003), is to define bounds in finite samples based on smooth
approximations to the max and min functions in the definitions of F̂U+ (u) and F̂U− (u) above. This
amounts to using weighted averages instead of the max or min.

4.3.2      Bounding the Optimal Reserve Price

Unlike point estimates of FU (·), it is not immediately clear whether bounds on FU (·) would be
useful.33 For example the key policy choice for the seller in the symmetric IPV environment is the
reserve price (Myerson, 1981). When FU (·) is continuously diﬀerentiable, the optimal reserve price
r∗ is defined by the equation34
                                                           1 − FU (r∗ )
                                              r∗ = c0 +                                                         (4.12)
                                                             fU (r∗ )
where c0 is the seller’s valuation (or marginal cost) of the good. However, nondegenerate bounds on
FU (·) place no restriction on its derivative fU (·) at any given point. Hence, just as a monopolist’s
price need not shift in the same direction as demand, r∗ need not lie between the reserve prices that
would be optimal if FU+ (·) or FU− (·) were the true distribution of valuations. Note that the same
problem arises any time one wishes to construct confidence bands on the optimal reserve price from
confidence bands on nonparametric point estimates of FU (u), e.g., using the method described in
Section 4.2.
  33
     Haile and Tamer (2003) demonstrate an additional use of the bounds by showing how to incorporate auction co-
variates nonparametrically. Building on Manski and Tamer (2002), the resulting bounds on conditional distributions
can then be used to estimate bounds on parameters of a semiparametric model describing how valuations shift with
auction characteristics.
  34
     This is easily derived for a second-price sealed-bid or button auction, where a reserve price of r implies expected
                                       U∞
revenue r nFU (r)n−1 (1 − FU (r)) + t u n (n − 1) fU (u) FU (u) (1 − FU (u)) du. Myerson (1981) shows that, under
a regularity condition, a standard auction with an optimal reserve price is optimal among all possible selling mech-
anisms. Haile and Tamer (2003) show that r∗ is also optimal in their incomplete model ascending auction as long
as Assumptions 4.1 and 4.2 are interpreted as a partial characterization of equilibrium behavior in some true but
unspecified auction mechanism.


                                                          35
       Observe, however, that when the seller’s own valuation for the good is c0 , r∗ solves maxr π (r) ,
where35
                                         π (r) = (r − c0 ) (1 − FU (r)) .

Since FU (r) must lie between F − (r) and F + (r), π (r) must lie between
                                                            ¡           ¢
                                         π 1 (r) = (r − c0 ) 1 − FU+ (r)

and
                                                           ¡           ¢
                                        π 2 (r) = (r − c0 ) 1 − FU− (r) .

Figure 1 illustrates.      Under the additional assumption that π (r) is strictly quasi-concave in r
(which ensures a unique solution to (4.12)) we can use the bounding “profit” functions π 1 (·) and
π 2 (·) to place bounds on r∗ . Let r1∗ ∈ arg sup π 1 (r) , r2∗ ∈ arg sup π 2 (r), and π ∗1 = π 1 (r1∗ ).        We
obtain the trivial result r∗ = r1∗ when π 2 (r1∗ ) = π 2 (r2∗ ) = π ∗1 , or when π 2 (r1∗ ) = π ∗1 and either π 1 (·)
or π 2 (·) has slope zero at r1∗ . For these trivial cases let r− = r+ = r1∗ . For all other cases define

                                      r− = sup {r < r1∗ : π 2 (r) ≤ π ∗1 }
                                      r+ = inf {r > r1∗ : π 2 (r) ≤ π ∗1 } .

Haile and Tamer (2003) prove the following result.36

Theorem 4.4 Suppose π (r) is continuously diﬀerentiable and strictly quasi-concave in r. Then
r∗ ∈ [r− , r+ ].   Given the bounds F + (·) and F − (·) on FU (·), the bounds r− and r+ on r are sharp.

       Intuition for the result can be seen in Figure 1.          We know that the true function π (·) lies
between π 1 (·) and π 2 (·) and must, therefore, reach a peak of at least π ∗1 .          Such a peak cannot be
reached outside the interval [r− , r+ ].     However, prices arbitrarily close to either of these endpoints
could be the true optimum r∗ .

  35
     Note that π (r) is not the expected profit of the seller when n > 1. The usefulness of this function is the fact
that its maximum is attained at the same value of r that maximizes the seller’s expected profit.
  36
     Bounds are said to be sharp if they exhaust all information available from the data and a priori assumptions.




                                                         36
                                                Figure 1




                                                                  π 2 (r)


              π ∗1




                              π 1 (r)




                                         r−   r1∗         r2∗      r+
                                                                                       r




      For estimation, assume for simplicity that π 2 (r) has nonzero slope at r = r− and r = r+ .37
Let
                                                            ³            ´
                                        π̂ 1 (r) = (r − c0 ) 1 − F̂U+ (r)
                                                            ³            ´
                                        π̂ 2 (r) = (r − c0 ) 1 − F̂U− (r)
                                           π̂ ∗1 = sup π̂ 1 (r)
                                                      r
                                           r̂1∗ = arg sup π̂ 1 (r)
                                                           r
 37
      Haile and Tamer (2003) provide estimators that do not require this assumption.


                                                          37
and define the continuous correspondence π c2 (·) by
                                         ½                                ¾
                              c
                                                     ¡ 0¢             ¡ 0¢
                       {π ∈ π 2 (r)} ⇐⇒ lim   0
                                                 π̂ 2 r ≤ π ≤ lim
                                                               0
                                                                  π̂ 2 r    .
                                                    r ↑r                r ↓r

This defines a smooth sample analog of π 2 (·) that can be used to define consistent estimators of
r− and r+ :

                            r̂− = sup {r < r̂1∗ : π = π̂ ∗1 for some π ∈ π c2 (r)}
                            r̂+ = inf {r > r̂1∗ : π = π̂ ∗1 for some π ∈ π c2 (r)} .

4.3.3      Asymmetric and Aﬃliated Private Values

In principle, the applicability of Assumptions 4.1 and 4.2 is not limited to environments with
symmetric independent private values. Haile and Tamer (2001) have explored extensions to models
of asymmetric and/or aﬃliated private values. While it is encouraging that any restrictions at
all on the joint distribution FU (·) can be obtained without the assumption of independence that
was required for identification in the button auction model, in practice the bounds one can obtain
without the independence assumption are likely to be quite wide. Intuitively, when one observes
only bounds on realizations of random variables, it is diﬃcult to learn much about their correlation
structure.     Of course, without knowledge of the correlation structure, a number of important
positive and normative questions cannot be answered.38 Thus, while the bounds approach provides
a way of addressing concerns about the appropriateness of the standard button auction model, it
may provide little help in environments in which the button auction model itself is unidentified.


5        Specification Testing
Identification of the models discussed above relies on behavioral assumptions and on assumptions
about the underlying demand and information structure. Obviously, then, the choice of model is
important. In some environments there are overidentifying restrictions that can be used to test
some assumptions while maintaining others. Several testing approaches have been described in the
literature to date, although so far there has been little attention to development of formal statistical
tests.
    38
     Optimal auction design with correlated valuations is much more complex than in the IPV case, requiring precise
information about the underlying correlation structure (cf., Crémer and McLean (1988) and McAfee and Reny (1992)).
Quint (2004) has shown that even the simpler question of the optimal reserve price cannot be addressed with a bounds
approach in such an environment. In particular, for any reserve price r ≥ u0 and any distribution of bids, there
exists an underlying joint distribution of valuations consistent with these bids and Assumptions 1 and 2 such that r
is the optimal reserve price. Hence, no restriction on the optimal reserve price can be obtained from nondegenerate
bounds on the joint distribution of valuations.


                                                           38
5.1      Theoretical Restrictions in First-Price Auction Models

We first consider restrictions imposed by equilibrium bidding in first-price auctions.39 Recall that
a model is testable if there exists some joint distribution of observables that cannot be rationalized
by the model. It is then natural to ask what set of distributions can be rationalized. Here we
provide two results for the aﬃliated private values (APV) framework.40 The first gives necessary
conditions for a distribution of bids to be rationalized by equilibrium behavior, while the second
gives necessary and suﬃcient conditions in two special cases: symmetric aﬃliated private values,
or independent private values (IPV).

Theorem 5.1 Consider the APV first-price auction with fixed N . Necessary conditions for GB (·; N )
to be rationalized by equilibrium bidding are
(a) (B1 , . . . , Bn ) are aﬃliated;
(b) for each i, ξ i (·, N ) is continuous and strictly increasing on supp[Bi ];
(c) supp[ξ 1 (B1 , N )] × · · · ×supp[ξ n (Bn , N )] is a convex, compact set, and on this set the joint
                   ¡                               ¢
distribution GB ξ −1                    −1
                     1 (u1 , N ), .., ξ n (un , N ) is absolutely continuous (with respect to the Lebesgue
measure) as a function of u, with a strictly positive density;
(d) bi =b for all i, and ξ i (b, N ) =b for all i ∈ N ;
(e) ξ i (b̄i , N ) = ξ j (b̄j , N ) for all i, j ∈ N ; and
(f ) for each i, supp[Bi ] ⊆supp[maxj∈N \i Bj ], and supp[maxj∈N \i Bj ] is convex.

       Proof. Given strictly increasing bidding strategies and aﬃliated private values with an atomless
type distribution, aﬃliation of bids and strict monotonicity of ξ i (·, N ) on supp[Bi ] follow directly.
Continuity of ξ i (·, N ) follows from strict monotonicity of the bidding strategies together with the
assumption that suppFUi (·) is convex. Since Assumption 2.1 requires that FU (·) have a strictly
positive joint density on a compact convex set, the relationship between FU (·) and GB (·) given by
(3.2) implies that (c) must hold. The assumption that suppFUi (·) does not vary with i, together
with the equilibrium conditions max(r, u) = bi and β i (max(r, u))=max(r, u) for each i, imply (d)
and (e). The necessity of supp[Bi ] ⊆supp[maxj∈N \i Bj ] follows from (d) and the fact that when
bidding against opponents who use strictly increasing strategies it is never optimal for bidder i to
bid more than the minimum necessary to win with a particular probability. The same logic implies
  39
     Recall that we maintain Assumption 2.1, restricting the primitives of the model, and that we focus on equilibria in
strictly increasing strategies. Theorem 2.1 guarantees that such an equilibrium exists for the APV model. If bidders
are symmetric, Theorem 2.1 implies that there is a unique equilibrium in the class of equilibria in nondecreasing
strategies. When bidders are asymmetric, we do not have a uniqueness result.
  40
     Guerre, Perrigne and Vuong (2000) gave a similar result for the symmetric independent private values model.
See also Li, Perrigne and Vuong (2002).



                                                             39
that supp[maxj∈N \i Bj ] is convex, since no bidder j ∈ N \i would find it optimal to place a bid at
the upper boundary of a gap in this support.                                                          Q.E.D.

    Note that we do not provide suﬃcient conditions for GB (·) to be rationalized in the APV
model with asymmetric bidders, since a full equilibrium characterization is not available for that
case. However, in the special cases of IPV or symmetric bidders when valuations have a continuously
diﬀerentiable density, Theorem 2.1 implies that there is a unique equilibrium in strictly increasing,
diﬀerentiable strategies, and that the support of equilibrium bids is the same for all bidders. When
bidders are symmetric, the unique equilibrium is symmetric. In these settings we have necessary and
suﬃcient conditions for a bidding distribution to be rationalized. The statement of the conditions
of Theorem 5.1 can then also be simplified somewhat, exploiting diﬀerentiability of strategies.

Theorem 5.2 Consider the APV first-price auction with fixed N . Assume that fU (·) is continu-
ously diﬀerentiable and suppose, further, that either (i) (U1 , . . . , Un ) are mutually independent or
(ii) bidders are symmetric. Necessary and suﬃcient conditions for GB (·; N ) to be rationalized by
equilibrium bidding are:
(a) (B1 , . . . , Bn ) are aﬃliated, and in case (i) they are independent, while in case (ii) they are
exchangeable;
(b) for each i, ξ i (·, N ) is diﬀerentiable and strictly increasing on supp[Bi ];
         ¡                               ¢
(c) GB ξ −1                   −1
           1 (u1 , N ), .., ξ n (un , N ) is absolutely continuous (with respect to the Lebesgue mea-
sure) as a function of u, with a positive continuously diﬀerentiable density on supp[ξ 1 (B1 , N )] ×
· · · ×supp[ξ n (Bn , N )] and zero density elsewhere;
(d) ξ i (b, N ) =b for all i ∈ N ;
(e) ξ i (b̄i , N ) = ξ j (b̄j , N ) for all i, j ∈ N ; and
(f ) supp[Bi ] is convex, compact, and the same for all i.

    Proof. Given strictly increasing, diﬀerentiable bidding strategies and the conditions on the
FU (·), aﬃliation of bids and the relevant independence and symmetry conditions follow directly.
For condition (f), equal supports is necessary by Theorem 2.2 in case (i) and by symmetry in case
(ii). Convex, compact support follows because bidding strategies are strictly increasing, continuous
functions of random variables with convex, compact support. Condition (b) is necessary because
diﬀerentiability of ξ i (·, N ) is equivalent to diﬀerentiability of ξ −1
                                                                       i (·, N ) (since ξ i (·, N ) is strictly
increasing), with the latter equal to the equilibrium bidding strategy under the assumptions of the
model. Conditions (d) and (e) are necessary following the arguments in Theorem 5.1. Recall that
Assumption 2.1 requires that FU (·) has a strictly positive joint density on a compact, convex set,
and that we have further assumed that it has a diﬀerentiable density. The set supp[ξ 1 (B1 , N )] ×


                                                             40
· · · ×supp[ξ n (Bn , N )] is the support of valuations implied by the model, and it is convex and
compact by (f) and diﬀerentiability of ξ i (·). The relationship between FU (·) and GB (·) specified
by (3.2) then implies (c).
   To see that the stated conditions are suﬃcient for GB (·; N ) to be rationalized, observe that they
ensure that ξ −1
              i (·) is well-defined, diﬀerentiable, and strictly increasing on supp[ξ i (Bi )] for each i,
and that in symmetric models it is the same for each i, so that the expression for FU (·) in (3.2)
is well defined and satisfies the relevant aﬃliation, independence, symmetry, and diﬀerentiability
conditions. The conditions guarantee that the inferred FU (·) has a support that is convex and
compact; that it has a strictly positive, continuously diﬀerentiable density on this support; and
that the support is the same for all bidders. The definition of ξ i (·) implies that if each bidder i uses
the bidding strategy ξ −1
                       i (·),his first-order condition for optimality is satisfied. Under independence
or symmetry, bidder payoﬀs satisfy a single crossing property: for any fixed monotone strategies by
opposing bidders, a higher realized valuation ui leads to a higher marginal return to increasing one’s
bid. Standard results from the literature on auctions and mechanism design (see, e.g., Fudenberg
and Tirole (1991)) imply when the single crossing property holds, local optimality of a bid (i.e.,
first-order conditions hold) together with monotonicity of the bidding strategy are necessary and
suﬃcient for global optimality of the strategy. Thus the strategies {ξ −1
                                                                       i (·)}i∈N form an equilibrium.
Q.E.D.

   The importance of a result providing suﬃcient conditions for a bid distribution to be rationalized
by equilibrium behavior should not be underappreciated. Without such a result, one would have
no way of ensuring that the interpretation of bids based on the first-order condition is valid. In
particular, for an observed bid bi and an implied valuation ui = ξ i (bi ), there would be no guarantee
that bi was actually an equilibrium bid for a bidder with valuation ui . Verifying that the observed
bids actually can be rationalized by equilibrium behavior is analogous to verifying second-order
conditions for optimality: only when such suﬃcient conditions are verified can we be sure that the
mappings (forward or inverse) provided by the first-order conditions relate valuations to optimal
(best-response) bids. Theorem 5.2 and can then be used in two ways. First, in an application one
can attempt to verify that suﬃcient conditions for bid data to be consistent with the assumptions
of the model are satisfied. Second, the necessary conditions suggest specification tests, which we
discuss further in the following section.
   We note that it is possible to generalize the overall empirical approach to the case where
condition (e) above fails by relaxing the assumption that supp[Ui ] is the same for all bidders i. The
latter assumption is typically maintained in the literature (see, e.g. Campo, Perrigne and Vuong
(2003)). In independent private values models, it ensures that supp[Bi ] is the same for all bidders


                                                   41
i (Lebrun (1999)) and that the equilibrium is unique (Lebrun (1999), Bajari (2001)). However,
plausible specifications of primitives would lead to distributions of bids that violate condition (e),
so it may be useful to relax that assumption in practice.
   Let us briefly consider some examples. Consider maintaining the assumption that inf[supp[Ui ]]
is the same for all i, but allow ūi =sup[supp[Ui ]] to vary with i. For aﬃliated private values models,
there exists an equilibrium in nondecreasing strategies where supp[Bi ] ⊆supp[maxj6=i Bj ], and these
supports are convex and compact; in addition, in any equilibrium (mixed or pure) strategies must
be strictly increasing (i.e., separating) (Maskin and Riley (2000b), McAdams (2004b)). Thus, the
distributions of valuations can be identified using (3.1). For example, suppose n = 2, U1 is uniformly
distributed on [0, 3/2], and U2 is independent of U1 , with distribution FU2 (u2 ) = (1/4)u22 on the
support [0, 2]. Then, it can be shown that supp[Bi ] = [0, 1] for i ∈ {1, 2}, and that for b ∈ [0, 1],
GB1 (b) = b and GB2 (b) = b2 . With these bid distributions, gM1 (1; N ) = 1 while gM2 (1; N ) = 2,
violating the boundary condition (e). However, in this example, the each FUi (·) can be identified
if we expand the set of permissible distributions of valuations to allow supports that vary across
bidders.
   If both inf[supp[Ui ]] and sup[supp[Ui ]] vary with i, then it is possible that some bidders never
win in equilibrium. For example, if there are two bidders in an IPV auction, and supp[U1 ] = [0, 1]
while supp[U2 ] = [100, 101], in equilibrium B2 = 1 with probability 1, while B1 ≤ 1 (Maskin and
Riley, 2000a). Clearly, very little can be said about the distribution of U2 in this case. Despite the
possibility of degenerate equilibria like this, Maskin and Riley (2000b) show that the distribution
                    (n:n)                                                                          (n:n)
of winning bids, GB         (·) , is continuous on its support. This implies that a mass point in GB       (·)
such as the one in the latter example can only occur either (i) at the bottom of the support if the
support of winning bids is nondegenerate, or (ii) if the support of winning bids is degenerate. Thus,
outside of cases (i) and (ii), the equilibrium must be in strictly increasing strategies on supp[B (n:n) ],
so that it will be possible to recover the distribution of bidders’ valuations on the pre-image of the
interior of supp[B (n:n) ] using (3.1). This would lead to a partial identification result.
   For the remainder of the chapter, we follow the existing literature and maintain the assumption
that valuation distributions have the same support, while noting that many of the results generalize.

5.2    Testing Monotonicity of Bid Functions and Boundary Conditions

Here we consider two possible types of tests based on Theorem 5.1. Guerre, Perrigne, and Vuong
(2000) have suggested a specification test based on the observation that the right-hand side of
bidder i’s first-order condition (2.4), i.e.,
                                                             GMi |Bi (bi |bi ; N )
                                      ξ i (bi , N ) ≡ bi +
                                                             gMi |Bi (bi |bi ; N )

                                                         42
is the inverse of his equilibrium bidding strategy. This is true for private and common value
auctions.41 Since bidding strategies must be strictly increasing, so must ξ i (·, N ). Although test-
ing monotonicity of ξ i (·, N ) is conceptually straightforward, no formal statistical test has been
developed for this problem.          Existing tests of monotonicity in the statistics literature42 are not
directly applicable due to the fact that realizations of the random variables ξ i (Bi , N ) are estimated
rather than observed directly. In applications, researchers often find few (if any) violations of strict
monotonicity (e.g., Hendricks, Pinkse and Porter (2003), Haile, Hong and Shum (2003)), in which
case no formal test would reject. Nonetheless, formal tests could be valuable.
       Two things about such a test should be noted, however.                   First, the alternative hypothesis
is simply that some component of the specification is incorrect.                   A failure of monotonicity may
indicate the presence of unobserved heterogeneity, risk aversion, non-equilibrium bidding behavior,
or violation of some other maintained assumption. In general, testing one assumption will require
maintaining others, so many of the other specification tests discussed below will share this limita-
tion. Second, no test of this hypothesis will be consistent against all violations of the maintained
assumptions. In particular, one can easily construct examples in which one or more maintained
assumptions is violated, but monotonicity of ξ i (·, N ) still holds.
       Another potential specification test is based on the boundary condition (e) from Theorem 5.1.
This restriction can be simplified in the case of the IPV model. Let the common support of the
bid distribution be denoted supp[Bi ] = [b, b̄]. Then, the boundary condition requires
                                                 ¡     ¢     ¡      ¢
                                              gMi b̄; N = gMj b̄; N                                                 (5.1)

which is a testable restriction.

5.3      Multi-Sample Tests with Exogenous Variation in Participation

Athey and Haile (2002) discuss a diﬀerent principle for specification testing that can be used in
both first-price and ascending auctions whenever (a) there is exogenous variation in the number of
bidders, and (b) the underlying model is identified with a fixed number of bidders. For simplicity,
consider the case of symmetric bidders, although the same principle applies to asymmetric settings.
Let F̂U (u; n) denote a consistent estimator of FU (u) obtained using data from n-bidder auctions.
With exogenous variation in the number of bidders, for n0 6= n , F̂U (u; n) should equal F̂U (u; n0 ) up
to sampling error. Hence a test of the null hypothesis of equal distributions provides a specification
test.
  41
      One way to see this in the common values case is note that one possible normalization of signals sets Xi =
vi (Xi , Xi ; N ) so that the first order condition may still be directly interpreted as giving bidder i’s inverse bidding
strategy.
   42
      See, e.g., Bowman, Jones and Gijbels (1998), Gijbels et al. (2000), or Hall and Heckman (2000).


                                                           43
       While testing equality of distributions is a standard problem (e.g., McFadden (1989)), compli-
cations arise both in ascending and first-price auctions. In an ascending auction, the complication
is the fact that identification relies on mappings between distributions of order statistics and the
underlying marginal distributions (Theorem 4.1). Hence, asymptotic distributions of test statistics
must account for this transformation of the data. In a first-price auction, the complications are
more challenging, arising from the fact that valuations are estimated rather than observed directly.
This first-stage nonparametric estimation of FU (·) introduces nontrivial complications to the as-
ymptotic theory needed for inference. Haile, Hong and Shum (2003) develop several formal tests
applicable when all bids are observed, based on comparisons of diﬀerent estimates of the marginal
distribution FU (·) obtained from auctions with diﬀerent number of bidders.43 In models identi-
fied with partially observed bids, similar tests may be applicable, although this has not yet been
explored.


5.4      Multi-Sample Tests with Multiple Order Statistics

In IPV settings, a variation on the type of testing approach above may be available without exoge-
nous variation in participation. In an IPV auction each marginal distribution FUi (·) is identified
from observation of the transaction price (and bidder identities if the environment is asymmetric)
in both ascending and first-price auctions. Athey and Haile (2002) have shown that observation of
any other order statistic B (j:n) can be substituted for observability of the transaction price–in a
symmetric environment, for example, this follows from (4.1). When two or more order statistics
(e.g., the top two bids) are observed, the estimates of FUi (·) implied by each of these should be
identical up to sampling error.


5.5      Direct Tests of Exchangeability or Independence

There are other potential approaches to specification testing when bidders are assumed to be
symmetric or types are assumed independent. With symmetric bidders, the joint distribution of
bidder valuations is exchangeable and each bid Bi = β (Ui ; n).               Hence, the joint distribution of
bids must also be exchangeable.           When bidder identities are observed, there are several ways
to approach testing such a hypothesis. One is to test exchangeability of the bids (or subsets of
bids) directly. Nonparametric tests from the statistics literature may be directly applicable. For
example, Romano (1988, 1989) suggests tests based on the supremum distance between the values
of a multivariate CDF evaluated at permutations of its arguments.
  43
   They focus on tests of the private values hypothesis. However, their tests, which are based on comparisons of the
empirical distributions of pseudo-values for auctions with diﬀerent numbers of bidders, could be directly applied.



                                                        44
    One implication of exchangeability is equality of marginal distributions. For example, in a
symmetric model, any subset of bidders should have bids governed by the same marginal distribution
as those of another subset of bidders. A standard Kolmogorov-Smirnov test of equal distributions
could then be applied.
    Alternative tests may be useful when covariates are available and additional structure is as-
sumed. Suppose, for example, that valuations are assumed to have the structure
                                                ¡                         ¢
                                         Uit = h Z1t , Z2i , Z2(−i) , Ait

where Z1t is an auction-specific covariate, Z2i is a bidder-specific covariate, Z2(−i) denotes the
bidder-specific covariates of i’s opponents, and Ait is a private idiosyncratic factor. The restriction
to scalar covariates is only for expositional simplicity. Assume further that the conditional distri-
bution function FA (A1 , . . . , An |Z1 , Z21 , . . . , Z2n ) is exchangeable in the indices (1, . . . , n). Loosely
speaking, with this structure, all bidder valuations are aﬀected in the same way by covariates. In
                                                                   ¡                 ¢
particular, the distribution of bidder i’s valuation conditional on Z1 , Z2i , Z2(−i) is the same for all
i. Since bids are equal to valuations in an ascending auction, this can be tested, for example, by
examining coeﬃcient estimates in a regression of bids on covariates (auction- and bidder-specific)
interacted with bidder dummies (or indicators for diﬀerent “classes” of bidders).
   In a first-price auction, the structure above implies that the distribution of maxj6=i Bj is the
                              ¡                ¢
same for all i conditional on Z1 , Z2i , Z2(−i) . Hence, the distribution of i’s bids should depend only
   ¡                ¢
on Z1 , Z2i , Z2(−i) , not on the index i itself. This may again be evaluated in a regression. Bajari
and Ye (2003) apply these regression-based approaches in their analysis of highway construction
contracts (see also Porter and Zona (1993, 1999)).
    Note that similar restrictions will hold in a common values model, where it is the joint distrib-
ution of the random variables
                                                  vi (Xi , Xi , N )

that must be exchangeable.         As we will see below, this distribution will often be identified in a
common values model, even though FU,X (·) is not fully identified.                 Hence, specification testing
may be possible even for under-identified models.
    Another direct approach to specification testing is applicable in first-price auctions in the widely
used independent private values model (symmetric or asymmetric). Since each Bi is a measurable
function of Ui , bids must also be independent. In a first-price sealed-bid auction in which all bids
are observed, one can directly test this restriction using standard nonparametric tests (Guerre,
Perrigne and Vuong, 2000).           For example, Romano (1988, 1989) suggests tests based on the
supremum distance between an estimated joint distribution and the joint distribution obtained


                                                         45
as the product of the estimated underlying marginal distributions.44                In practice, it is typical to
assume that valuations, and thus bids, are independent conditional on a set of auction-specific and
perhaps bidder-specific covariates.         Su and White (2003) propose a testing approach that may
then be applicable. An alternative is to test for correlation of residuals from a regression of bids
on bidder-specific or auction-specific covariates. Bajari and Ye (2003) do this in their analysis
of highway construction procurement auctions. In an ascending auction, the problem of partially
observed bids appears to make direct testing impossible (recall, however, the indirect tests discussed
in Section 5.4).


6         Extensions of the Basic Results

6.1        Auction Heterogeneity

6.1.1        Observed Auction Heterogeneity

In practice, one rarely has access to data from auctions of identical objects. For example, the goods
for sale at each auction often diﬀer in observable characteristics, and we may expect distributions
of valuations to shift with these observables.            All of the identification results above hold in the
presence of auction-specific covariates. In particular, the previous discussion can be reinterpreted
as being conditioned on a given realization of the covariate values. To make this concrete, let Z be
a vector of auction covariates. We extend the notation defined above to condition on Z by defining
β i (·; N , Z), FU (·|Z) , GMi |Bi (b|b; N , Z) and gMi |Bi (b|b; N , Z), etc. Assuming all auction-specific
heterogeneity is captured by Z, in a first-price auction the first-order condition for bidder i at
auction t becomes
                                                     GMi |Bi (bit |bit ; N , zt )
                                       uit = bit +                                                             (6.1)
                                                     gMi |Bi (bit |bit ; N , zt )
which uniquely determines FU (·|zt ) in the aﬃliated private values model when all bids and bidder
identities are observable. In an ascending auction with private values that are independent con-
                                                                                            (n−1:n)
ditional on Zt , one can use the conditional distribution of transaction prices FU                    (·|zt ) for any
given value of zt to uniquely determine FU (·|zt ) through equation (4.4).
         The nonparametric estimation methods discussed above can also be extended, for example by
using standard kernel smoothing over covariates.                 Guerre, Perrigne and Vuong (2000) discuss
details of such an approach for the case of a first-price auction with symmetric independent private
values, and this approach is easily extended to the other models. This type of approach has been
applied to ascending auctions by Haile and Tamer (2003).
    44
    Other tests of the hypothesis that bids are uncorrelated (an implication of independence) could also be applied.
See, e.g., chapter 8 of Hollander and Wolfe (1999).


                                                         46
       Unless the dimensionality of the covariates is fairly small relative to the sample size, however, a
fully general nonparametric estimation approach may not be practical. One alternative suggested by
Haile, Hong and Shum (2003) exploits the observation that additive (or multiplicative) separability
is preserved by equilibrium bidding.45 In particular, suppose that in an auction with characteristics
zt valuations are given by
                                                    uit = Γ (zt ) + ait                                          (6.2)

for some (possibly unknown) function Γ (·), with the bidder-specific private information Ait inde-
pendent of Zt . Then, if we let z0 be such that46

                                                        Γ (z0 ) = 0                                              (6.3)

equilibrium bidding also follows the additively separable structure (an analogous result applies in
the case of multiplicative separability)

                                       β i (ui ; N , z) = Γ (z) + β i (ui ; N , z0 ) .                           (6.4)

       Proving this is trivial in an ascending auction, where the bid function is the identity function.
For a first-price sealed-bid auction, let

                                         β̆ i (ai , z;N ) ≡ β i (ai + Γ (z) ; N , z)

so that under (6.2) a bidder’s first-order condition can be written
                                                         ³                                                  ´
                                                  GMi |Bi β̆ i (ait , zt ;N ) |β̆ i (ait , zt ;N ) ; N , zt
            ait + Γ (zt ) = β̆ i (ait , zt ;N ) +        ³                                                  ´.   (6.5)
                                                  gMi |Bi β̆ i (ait , zt ;N ) |β̆ i (ait , zt ;N ) ; N , zt
                     n                                  o   n                                       o
Note that the events β̆ i (Ai , z;N ) = β̆ i (ai , z;N ) and β̆ i (Ai , z0 ;N ) = β̆ i (ai , z0 ;N ) are equiva-
                                        n                                  o     n                                     o
lent for any z. Under (6.4), the events β̆ j (Aj , z;N ) = β̆ i (ai , z;N ) and β̆ j (Aj , z0 ;N ) = β̆ i (ai , z0 ;N )
are also equivalent for j 6= i, so the expression
                                      ³                                                  ´
                              GMi |Bi β̆ i (ait , zt ;N ) |β̆ i (ait , zt ;N ) ; N , zt
                                      ³                                                  ´
                               gMi |Bi β̆ i (ait , zt ;N ) |β̆ i (ait , zt ;N ) ; N , zt

on the right-hand side of (6.5) is invariant to zt . Hence, (6.4) guarantees that (6.5) is satisfied for
all zt whenever it is for zt = z0 .
  45
    This approach has been applied by Krasnokutskaya (2004), Bajari and Tadelis (2004), and Shneyerov (2005).
  46
    We assume for simplicity that such a z0 exists. If it does not, the argument extends but with more cumbersome
notation.



                                                             47
    This preservation of additive separability is useful because it implies that the eﬀects of covariates
on valuations can be controlled for using a regression of bids on covariates. In particular, we can
write
                                           bit = α (Nt ) + Γ (zt ) + it                                       (6.6)
where α (Nt ) is an intercept specific to auctions in which the set of bidders is Nt (in a symmetric
environment, this can be α (nt )) and        it ≡ β i (uit ; Nt , z0 ) − α (Nt ) has mean zero conditional on zt .
Both α (Nt ) and Γ (zt ) are then identified from observation of bids, Nt , and zt ; indeed, they can
be estimated consistently using standard regression techniques.
    Let Γ̂ (zt ) denote a consistent estimate of Γ (zt ). Then bit − Γ̂ (zt ) provides a consistent estimate
of β i (uit ; Nt , z0 ), i.e., the bid i would have submitted in auction t if Zt were equal to z0 . Of course,
a sample of bids from auctions with the same value of Z of is exactly what we would like to have.
Estimation of (6.6) provides an approach for “homogenization” of the bid data by replacing each
bit with
                                                bhit = bit − Γ̂ (zt ) .
These homogenized bids can then be used to consistently estimate the underlying distribution of
valuations FU (·; z0 ) using the methods described in the previous sections; i.e., with Γ (·) known,
FU (·; z0 ) is identified through (6.1). Finally, since (6.3) and (6.2) imply

                 Pr (U1t ≤ u1 , . . . , Unt ≤ un ) = FU (u1 − Γ (zit ) , . . . , un − Γ (zit ) ; z0 )

FU (·; z) is then identified for all z in the support of the auction covariates. As usual, in a first-price
auction, equilibrium bidding implies that the distribution of the mean-zero                   it will vary with Nt .
So the “second stage” of estimating the joint distribution FU (·; z0 ) must be done separately for
each Nt .
    The number of observations available for the first-stage regression of bids on covariates is
P
  n nTn , which is often quite large.      Hence, a nonparametric or flexible parametric specification of
Γ (·) is will be feasible in data sets of reasonable size. Assuming that Γ (·) is known up to a finite
parameter vector has an advantage for some purposes in that estimates from the first stage will
converge at the parametric rate, leaving the asymptotic distribution of nonparametric estimators
applied to the homogenized sample unaﬀected. Note that the function Γ (·), which characterizes
the eﬀects of covariates on valuations, is sometimes of direct interest itself. Equation (6.4) implies
that one can estimate this primitive directly with a regression of bids on covariates. Bajari and
Tadelis (2004), for example, have recently exploited this observation to investigate the importance
of renegotiation costs in procurement auctions.
    This approach preserves the fully nonparametric specification of the idiosyncratic component
of bidders’ private values and allows direct inference (through the first-stage estimates) on the way

                                                         48
observables aﬀect valuations. However, it places a strong restriction on the way observables enter.
An alternative nonparametric approach is to use series or sieves (e.g., Chen, 2006), approximating
the bid distribution with a sequence of parametric models. In a given data set this will amount
to assuming a flexible parametric model, and one might also take such an approach directly. For
example, in an ascending auction with symmetric independent private values, one might specify
                                   (n−1:n)
the conditional distribution FU              (u|z) as a finite mixture of parametric distributions. Letting
H(·; γ) be a parameterized distribution function, the distribution of the transaction price could be
specified as
                                                               J
                                                               X
                      (n−1:n)                        1            ¡     ¢ ¡            ¢
                    FU          (u|z, θ,J) = PJ                  ω z; θj H u; γ(z; θj )                 (6.7)
                                                 j=1 ω(z; θ j ) j=1

given parametric specifications of the functions γ (·) and ω (·). Given an estimate θ̂ of the parameter
vector θ = (θ1 , . . . , θJ ), equation (4.9) implies that
                                                ³                               ´
                                                  (n−1:n)
                                  F̂U (u|z) ≡ φ FU        (u|z; θ̂, J); n − 1, n                        (6.8)

would provide a consistent estimator of FU (u|z) under (6.7).
    In a first-price sealed-bid auction, a similar approach might be applied. For a given set of bidders
N , the conditional distribution GMi |Bi (mi |bi ; N , z) could be assumed to have the parametric form
                                                 J          ¡         ¢
                                                X        ω bi , z; θj          ¡                 ¢
                GMi |Bi (mi |bi ; N , z, θ,J) =     PJ         ¡            ¢ H m; γ(bi , z; θj )  (6.9)
                                                j=1    j 0 =1 ω bi , z; θ j

providing a flexible parametric first step of the two-step estimation procedure discussed in Section
3.2. This kind of specification allows the distribution of bids to vary with auction covariates in
richer ways than is allowed by the “homogenization” approach described above. This flexibility
comes at the price of placing a priori structure on the distributions of bids and valuations.              Of
course, some approximation must always be used in a finite sample, and a finite mixture may
perform well in practice. Note that here the eﬀects of covariates on valuations, which are often of
primary interest, would be obtained indirectly, through (6.8) or through (6.1) and (6.9).

6.1.2    Unobserved Auction Heterogeneity

In many applications one may suspect that there are factors aﬀecting bidders’ valuations that are
common knowledge among bidders but unobserved by the econometrician. For example, suppose
valuations are given by the equation
                                                  Ui = V0 + Ai .                                       (6.10)

Even if the idiosyncratic components A1 , . . . , An are i.i.d., the valuations U1 , . . . , Un will be corre-
lated unconditional on V0 (they will be aﬃliated if the densities fAi (·) are log-concave).            When

                                                         49
bidders’ information consists only of their valuations ui , not the individual components v0 and ai ,
this merely provides one motivation for an aﬃliated private values model. When bidders observe
both v0 and ai , however, the situation can be more complicated.
       As noted above, information regarding an auction that is common knowledge among the bidders
creates no problem for the characterization of equilibrium bidding strategies–the theory can be
thought of as holding for each value of the public information. However, for empirical work,
diﬃculties can arise when the econometrician is unable to condition on all the information that is
public to bidders.
       There are at least three issues that arise in the presence of unobserved heterogeneity. The
first is whether unobserved heterogeneity is empirically distinguishable from other structures that
introduce correlation among bids. In an ascending auction, equilibrium bids satisfy Bi = Ui
regardless of whether bidders observe only their own valuations or also factors shifting all bidders’
valuations. Hence it will be impossible to distinguish an environment with unobserved heterogeneity
from an environment with correlated private values but no unobserved heterogeneity. In a first-
price auction, the situation is similar. As long as the conditions of Theorem 5.2 hold, the data can
be rationalized by equilibrium bidding. However, unobserved heterogeneity can account for some
or all of the observed correlation (if any) among bids.
       This observational equivalence is unfortunate. For example, if (6.10) holds, an assumption
about whether each bidder i observes only Ui or also V0 can have significant implications for
bidding strategies (and, therefore, the appropriate interpretation of bids) in a first-price auction.
Thus, one must rely on an assumption regarding which model is appropriate.47 In her application to
highway procurement auctions, Krasnokutskaya (2004) compares the estimated bid function under
an assumption of aﬃliated private values (with no unobserved heterogeneity) to the average (over
the unobserved heterogeneity) bid function under the assumption of independent private values
with unobserved heterogeneity. She finds that the estimated average bid function under unobserved
heterogeneity is steeper than the estimated bid function under aﬃliated private values, and that
estimated average markups are substantially higher when one ignores unobserved heterogeneity.
  47
    Although the literature has not yet considered approaches for distinguishing between the two models, it may be
possible to develop a test based on exogenous variation in participation. In particular, it is possible to estimate the
primitives of each model for a fixed set of potential bidders N . Then, these primitives can be used to make “out
of sample” predictions about bid distributions for other sets of potential bidders (e.g. a subset of the original set
N 0 ⊂ N ). We conjecture that in general the specific bid distributions predicted by the two models for the set of
bidders N 0 will diﬀer across the two models. However, to our knowledge this has not been formally analyzed. Note
that a test of this restriction would rely on the assumption that participation does not vary with the unobserved
heterogeneity. This assumption may be strong in practice; it may be satisfied, however, if bidders pay a cost to
acquire a signal, and the unobserved heterogeneity is not observed by bidders until they bear the cost of investigating
the auction. Instrumental variables approahces like that explored in Haile, Hong and Shum (2003) may also be useful.




                                                          50
Hence, the modeling choice can have important implications.
   The second issue is whether the joint distribution FU (·) is identified under the assumption
of unobserved heterogeneity.     We will see that in a first-price sealed-bid auction, identification
can be obtained through assumptions on the statistical and functional relationships between the
unobserved heterogeneity and bidder valuations. In an ascending auction, identification requires
additional sources of variation in the data, such as bidder-specific covariates.
   The third issue is whether identification of FU (·) is adequate. In the presence of unobserved
heterogeneity, knowledge of this distribution is suﬃcient to answer some important questions but
not others–in particular, not those concerning outcomes that depend on bidders’ beliefs about op-
ponents’ valuations, since these beliefs vary with the realization of the factor that is unobservable
to the econometrician. In ascending or second-price auctions (or any mechanism with a dominant
strategy equilibrium), FU (·) is the only primitive relevant for predicting equilibrium outcomes, de-
signing the auction rules, or performing counterfactual simulations. However, if we wish to consider
policy questions concerning first-price auctions or other mechanisms in which beliefs play a more
significant role, it will be necessary to know the joint distribution of bidders’ private information
and the unobserved heterogeneity (e.g., the distribution FA,V0 (·) if one assumes (6.10)), not just
FU (·). Below we will discuss conditions under which this joint distribution is identified.

   First-Price Sealed-Bid Auctions The problem of unobserved heterogeneity in a first-price
auction is closely related to two well-established literatures in econometrics: the literature on mea-
surement error with repeated measures (Li and Vuong (1998), Li (2002), Schennach (2004)) and
the literature on duration models with unobserved heterogeneity and multiple spells (see, e.g.,
Lancaster (1990)). These literatures consider multiple observations for each of many units, with
observations within each unit reflecting both a common (unobserved) shock as well as idiosyncratic
shocks. In the auction setting, the auction plays the role of the unit, with the individual bids being
the observations within unit.
   Although the early literature took parametric approaches to disentangling the common shock
from the idiosyncratic factors, more recently nonparametric methods have been proposed, exploiting
assumptions about the way in which the common shocks aﬀect outcomes — for example, assuming
multiplicative or additive separability. We will see below that similar restrictions make it possible
to apply existing results to bidding data in the presence of unobserved heterogeneity.
   To understand the problem, first consider a very general case. In a private values first-price
sealed-bid auction, suppose that information wt is common knowledge among the bidders at auction
t. Following the discussion in Section 6.1.1, the first-order condition relating bids to the underlying



                                                  51
valuations is
                                                      GMi |Bi (bit |bit ; N , wt )
                                        uit = bit +                                .
                                                      gMi |Bi (bit |bit ; N , wt )
If the econometrician does not observe wt , the conditional distribution GMi |Bi (bit |bit ; N , wt ) is not
                                                                                                       G         (bit |bit ;N ,wt )
identified. This creates a serious challenge to any attempt to uncover the markdown g Mi |Bi(bit |bit ;N ,wt ) .
                                                                                                        Mi |Bi

Indeed, because this markdown is a nonlinear function of wt , even the average markdown is not
identified in general (Hendricks, Pinkse and Porter, 2003).
       With some additional structure, however, it is possible to proceed. Consider a simplified model
of unobserved heterogeneity in which bidder valuations take the additively separable form in (6.10),
and (A1 , . . . , An , V0 ) are mutually independent with compact support. This is a special case of a
conditionally independent private values model (itself a special case of aﬃliated private values, so
long as each fAi (·) is log-concave).48 Li, Perrigne and Vuong (2000) considered this structure under
the assumption that bidders observe only their valuations Ui . They showed that, in that case, the
joint distribution FA,V0 (·) is nonparametrically identified up to a location normalization. While
there is no unobserved heterogeneity in their model, their approach turns out to be a useful starting
point. To see the idea behind their result, recall that observation of all bids and bidder identities
is suﬃcient to identify the joint distribution FU (·) in a first-price auction with aﬃliated private
values. Once FU (·) is known, a result from the literature on measurement error can be applied to
separately identify the component distributions FA (·) and FV0 (·) up to a location normalization.
Li, Perrigne and Vuong (2000) develop consistent nonparametric estimators for this environment
using empirical characteristic functions.49
       Krasnokutskaya (2004) shows that a very similar approach can be applied in the case of un-
observed heterogeneity–i.e., when valuations take the additively separable form in (6.10) and v0
is observed by bidders but not the econometrician.50 In essence, she reverses the two steps of Li,
Perrigne, and Vuong’s (2000) approach: she first uses a deconvolution technique to first remove the
eﬀects of unobserved heterogeneity from bids, then recovers the idiosyncratic factors ai through the
first-order condition for a hypothetical auction with no unobserved heterogeneity. In this sense,
the approach is similar to the “homogenization” approach for incorporating observable auction
  48
     In a general specification of conditionally independent private values, one would assume only
                                         T
FA,V0 (a1 , . . . , an , v0 ) = FV0 (v0 ) n
                                          i=1 FAi (ai |v0 ). With this more general specification, the linearity assumed in
(6.10) would be without loss of generality, since whatever the distributions of Ui |V0 , one can let Ai = Ui − V0 .
The de Finetti Theorem (e.g., Chow and Teicher, 1997) tells us that any infinite sequence of exchangeable random
variables can be represented by this more general conditionally independent structure. However, finite exchangeable
sequences, like those arising in symmetric auctions with a finite number of potential bidders, need not have such a
representation. Athey and Haile (2000, Proposition 4) explore limitations of the flexibility of the more restrictive
conditionally independent structure considered here.
  49
     See also the discussion of a closely related special case of the mineral rights model in Section 7.2.1 below.
  50
     An alternative is discussed in Section 8.2 below.


                                                            52
heterogeneity, discussed in Section 6.1.1.
       For the first step, recall from Section 6.1.1 that the additive separability in (6.10) is preserved
by equilibrium bidding.51 So if β i (uit ; Nt , v0t ) denotes bidder i’s equilibrium bid given uit , Nt , and
v0t , then
                                 β i (uit ; Nt , v0t ) = β i (uit − v0t ; Nt , 0) + v0t .                    (6.11)

If one observes all bids from each auction, the following result from Kotlarski (1966) implies iden-
tification of the joint distribution of (β 1 (A1 ; N , 0) , . . . , β n (An ; N , 0) , V0 ) up to a location normal-
ization.52

Lemma 6.1 Let Y1 , Y2 , and Y3 be mutually independent random variables with nonvanishing char-
acteristic functions φ1 (·), φ2 (·), and φ3 (·), respectively. Let Q1 = Y1 + Y3 , Q2 = Y2 +Y3 . Then (i)
the joint distribution of (Q1 , Q2 ) completely determines the distributions of Y1 , Y2 , and Y3 up to lo-
cation; (ii) if ψ (·, ·) denotes the characteristic function of (Q1 , Q2 ) and ψ i (·, ·) is its derivative with
                                                                                               nR              o
                                                                                                   t 1 (0,s)
respect to its ith argument, then under the normalization E [Y1 ] = 0, φ3 (t) = exp 0 ψψ(0,s)                ds ,
φ1 (t) = ψ(t,0)               ψ(0,t)
         φ (t) , and φ2 (t) = φ (t) .
             3                   3


       A proof can be found in Prakasa-Rao (1992, Theorem 2.1.1 and Remark 2.1.11).53 A key to
the result is the fact that the characteristic function of the sum of independent random variables is
the product of the characteristic functions of the component variables. With multiple observations
involving one component in common, this separability can be exploited to isolate the characteristic
functions (and, thereby, the distributions) of the individual components. Identification is up to a
location normalization, since adding a constant to Y3 and subtracting the same constant from Y1
and Y2 has no eﬀect on observables.
       Lemma 6.1 can be used to relate characteristic functions of the observed bids to those of the
“homogenized” bids β 1 (A1 ; N , 0) , . . . , β n (An ; N , 0) and the unobserved factor V0 . Identification
of the distribution of each Ai then follows from the first-order condition for a hypothetical auction
in which v0t = 0. In particular, if we let Bi0 = β i (Ai ; N , 0) = Bi − V0 ,
                                     ¡                                0
                                                                        ¢
                                  Pr  max  j6 =i β j (Aj ; N , 0) ≤ Bi
                 Ai = Bi0 + ∂       ¡                                ¢¯     ≡ ξ̃ i (Bi0 ; N ).               (6.12)
                                 Pr maxj6=i β j (Aj ; N , 0) ≤ m ¯
                                 ∂m                                       0    m=Bi

  51
      Krasnokutskaya (2003) focuses on the case of multiplicative rather than additive separability. The analysis
is equivalent with a logarithmic transformation. As she points out, a more general model allowing unobserved
heterogeneity aﬀecting both the location and scale of private values is also identifiable, since one can apply the
deconvolution step (Lemma 6.1) to the bids twice–once in logs and once in levels.
   52
      To see the connection to the original measurement error framework, observe that with an appropriate location
normalization, under (6.10) each Ai can be interpreted as an independent mean-zero measurement error on v0 .
   53
      See also Li and Vuong (1998), Lemma 2.1.



                                                           53
   Note that unlike the case without unobserved heterogeneity, it is not possible to identify the
valuations of bidders in a particular auction, because the realization of V0 is unobserved. Despite
this, because Lemma 6.1 implies that GB 0 (·) is identified, it follows that ξ̃ i (·; N ) is also identified,
                                                i

so that the distribution of private information is given by
                                                    ³ −1            ´
                                    FAi (ai ) = GBi0 (ξ̃ i (ai ; N ) .

   Nonparametric estimators can be developed by first substituting empirical characteristic func-
tions for the population characteristic functions in part (ii) of Lemma 6.1, and then using simulation
to construct pseudo-draws of the random variable on the right-hand-side of (6.12). We sketch the
approach here. For simplicity, consider the special case in which there are two classes of bidders,
with bidders in the same class drawing their valuations from the same marginal distribution (ex-
tension to more than two types is straightforward). Suppose one has a sample of T auctions in
which there are n1 class-1 and n2 class-2 bidders in each auction, and that all bids and bidder
identities are observable. As above, estimation must be undertaken fixing the number of bidders
of each type, which is equivalent here to fixing the set N .
   Let c (j, t) denote the class of bidder j in auction t. Impose the normalization E [Ai ] = 0 for
any class-1 bidder i.    Let GB j (·) denote the marginal distribution of the equilibrium bid B j of
                                   ¡       ¢                                ¡         ¢
a class-j bidder, and let GB 1 ,B 2 b1 , b2 denote the joint distribution of B 1 , B 2 . Similarly, let
B 0,j ≡ B j − V0 denote the homogenized bid of a class-j bidder. Note that the homogenized bids
are independent. Let ψ (·, ·), φ0 (·), φB 0,1 (·) and φB 0,2 (·) denote the characteristic functions of
¡ 1 2¢
 B , B , V0 , B 0,1 , and B 0,2 , respectively.
   Following Li and Vuong (1998) and Krasnokutskaya (2004) (see also Li, Perrigne and Vuong
(2000)), define estimators
                                             XT         X                X
                                       1
                ψ̂ (τ 1 , τ 2 ) =                                             exp (iτ 1 bjt + iτ 2 bkt )
                                     T n1 n2 t=1
                                                      j:c(j,t)=1 k:c(k,t)=2

                                             XT         X                X
                                       1
               ψ̂ 1 (τ 1 , τ 2 ) =                                            iBjt exp (iτ 1 bjt + iτ 2 bkt )
                                     T n1 n2 t=1
                                                      j:c(j,t)=1 k:c(k,t)=2

                                                                        ¡     ¢
where, for each estimator, an average is taken over all possible pairs b1 , b2 . Let
                                                 (Z                   )
                                                     t
                                                       ψ̂ 1 (0, v)
                                 φ̂0 (τ ) = exp                    dv
                                                    0 ψ̂(0, v)

                                                        ψ̂ (τ , 0)
                                     φ̂B 0,1 (τ ) =
                                                         φ̂0 (τ )
                                                        ψ̂ (0, τ )
                                     φ̂B 0,2 (τ ) =                  .
                                                         φ̂0 (τ )

                                                            54
Given these estimated characteristic functions, one can obtain estimates of the marginal densities
of B 0,1 , B 0,2 and V0 using the inverse Fourier transform. In particular, let
                                                Z µ
                                              1
                               ĝB 0,i (b) =         exp (−iτ b) φ̂B 0,i (τ ) dτ                           (6.13)
                                             2π −µ
                                                Z µ
                                 ˆ            1
                                 fV0 (v) =           exp (−iτ v) φ̂Vo (τ ) dτ                              (6.14)
                                             2π −µ

where µ is a trimming parameter.
       As shown by Li and Vuong (1998), under certain smoothness conditions (6.13) and (6.14) provide
uniformly consistent estimators of the density fV0 (·) of V0 and the densities of the homogenized bids
Bi0 for each bidder i. These densities can then be used to construct estimates of the right-hand-side
of the first-order condition (rewriting (6.12))
                                                       Q                   0
                                                        j6=i GB 0,c(j,t) (Bit )
                           Ait = Bit0 + P                    0
                                                                 Q                      0                  (6.15)
                                         j6=i gB 0,c(j,t) (Bit )   k6=i,j GB 0,c(k,t) (Bit )

where                                                    Z b
                                          GB 0,j (b) =         gB 0,j (s) ds.                              (6.16)
                                                          −∞

       In contrast to other applications of the indirect approach to first-price auctions (e.g., Guerre,
Perrigne and Vuong, 2000), however, here draws of the bids Bit0 on the right-hand-side of (6.15)
cannot be taken directly from the data.              Instead, they must be simulated from the estimated
densities ĝB 0 (b). Using simulated bids, (6.15) makes it possible to construct a pseudo-sample of
               i

draws of the idiosyncratic components Ai , which can be used to obtain estimates of their underlying
densities fAj (·) using standard methods. Krasnokutskaya (2004) provides additional details and
conditions under which this leads to uniformly consistent estimates of the marginal densities fV0 (·)
and fAj (·) for each bidder class j. She suggests the use of the bootstrap for inference.
       Note that while the approach here is similar to that in Li, Perrigne and Vuong (2000), there
are important distinctions. When V0 is not observed by bidders, the joint distribution FU (·) is
identified directly from the first-order condition and completely characterizes bidder demand and
information.       Since knowledge of FU (·) is suﬃcient for counterfactual simulations in a private
values model with no unobserved heterogeneity, it is not clear under what circumstances one would
need to separately identify FA (·) and FV0 (·).54              When V0 is observed by the bidders, however,
identification of the joint distribution FU (·) no longer follows directly from the first-order condition.
Furthermore, even if FU (·) were identified, in this environment separate identification of FA (·) and
FV0 (·) is required for many counterfactuals.
  54
   A separate (and open) question, however, is whether imposing the structure of this model in estimation leads to
more precise estimates in counterfactual simulations.


                                                          55
   The approach proposed by Krasnokutskaya (2004) is attractive in that is places no restriction
on the distribution of the idiosyncratic factor Ai or the distribution of V0 . It does restrict the way
unobservables aﬀect valuations. It may also require large samples–the slow convergence rates of
deconvolution estimators is well known. Athey, Levin, and Seira (2004) propose an alternative,
trading flexibility in the specifications of FV0 (·) and the FAi (·) for flexibility in how unobservable
and observable auction characteristics aﬀect valuations.      They propose parametric estimation of
the bid distributions and the distribution of auction heterogeneity. This is followed by estimation
of the distribution of valuations based on (6.12)) in a manner similar to Krasnokutskaya (2004).
Mixtures of parametric models might be introduced to allow for more flexibility, as described at
the end of Section 6.1.1. Although using a parametric first step is restrictive, it allows a par-
simonious specification whereby the unobserved heterogeneity may aﬀect some types of bidders
diﬀerently than others, and where the distribution of the unobserved heterogeneity depends on
auction characteristics. In principle, these features could be incorporated into Krasnokutskaya’s
(2004) approach by allowing auction characteristics to interact with V0 and Ai in (6.10), but in
practice this may be not be feasible in data sets of moderate size.

   Ascending Auctions The challenges created by unobserved auction heterogeneity in an as-
cending auction are quite diﬀerent. Because equilibrium is in weakly dominant strategies in the
standard model of the ascending auction, unobserved heterogeneity does not aﬀect the equilibrium
mapping (the identity function) between valuations and bids. For example, bidding in an envi-
ronment with valuations characterized by (6.10) is the same regardless of whether bidders observe
both v0 and ai or only their sum. The main problem posed by such an environment is the fact that
positive identification results for ascending auctions have been obtained primarily for environments
with independent valuations, yet the presence of an unobserved factor like v0 generally leads to a
violation of independence.
   In Section 6.2.1 we will show how additional data on bidder characteristics can be used to obtain
identification of the joint distribution of valuations in an ascending auction without independence.
This would not be suﬃcient for all economic questions of interest, however.          As the preceding
section makes clear, for example, separate identification of FV0 (·) and each FAi (·) is needed even
to simulate outcomes in a first-price sealed-bid auction.     However, with an estimate of the joint
distribution FU (·), it should be possible to use deconvolution techniques similar to those discussed
above to separately estimate FV0 (·) and each FAi (·) when Ui = Ai + V0 , under assumptions similar
to those discussed above. This has not yet been investigated.




                                                  56
6.2      Bidder Heterogeneity

6.2.1      Observed Bidder Heterogeneity

As discussed in prior sections, observable diﬀerences across bidders introduce asymmetry that can
complicate the analysis of bidding data. However, when bidder-specific covariates are observable
and vary across auctions, they can actually aid identification by enabling the distribution function
for a single order statistic to reveal more information. This is particularly valuable in an ascending
auction given the negative identification results above for environments without independence. In
fact, with suﬃciently rich variation in covariates, identification can be obtained with asymmetric
dependent valuations, even when the transaction price is the only bid available (or the only bid
assumed to have the unambiguous interpretation implied by the button auction model).
       The idea behind this approach is familiar from other types of models, including the Roy model
of labor supply (e.g., Heckman and Honoré (1990)) and competing risks models (e.g., Heckman and
Honoré (1989)). To see how this can work in the auction environment, suppose

                                                 Ui = gi (Wi ) + Ai

where each gi (·) is an unknown function, Wi is a covariate reflecting characteristics of bidder i,
and the private stochastic components (A1 , . . . , An ) are drawn from an arbitrary joint distribution
FA (·) and are independent of the matrix W = (w1 , . . . , wn ). Suppose for the moment that each
gi (·) is known and that we could somehow observe u(n:n) .55 Conditional on the vector w, U (n:n)
has cumulative distribution

                               (n:n)
                             FU        (u|w) = Pr(U (n:n) ≤ u|w)
                                             = FU (u, . . . , u|w)
                                             = Pr (gi (wi ) + Ai ≤ u ∀i)
                                             = FA (u − g1 (w1 ), . . . , u − gn (wn )).

While the joint distribution FU (·|w) is observed only along the diagonal (U1 = · · · = Un ), suﬃcient
variation in (g1 (w1 ), . . . , gn (wn )) would “trace out” the entire joint distribution FA (·). Further-
more, prior knowledge of the functions gi (·) is not necessary with suﬃcient variation in covariates:
at suﬃciently large negative values of gj (wj ) ∀j 6= i, bidder i will have the largest valuation with
probability arbitrarily close to one, so that variation in wi and the point of evaluation u would
trace out the function gi (·).
  55
    This is the observable order statistic in the Roy model, where the wage in the chosen sector (the one oﬀering the
highest wage) is the only one observed, yet one is interested in the joint distribution of wage oﬀers from all sectors.



                                                          57
       In practice we cannot observe u(n:n) in an ascending auction, and the distribution of an interior
order statistic has a more complicated relation to the underlying joint distribution than does the
maximum (or minimum, as in the case of competing risks). However, the following result shows
that the fundamental idea behind this approach can be used to obtain identification in an ascending
auction when only the transaction price is observable.56

Theorem 6.1 Assume
(i) Ui = gi (Wi ) + Ai , i = 1, . . . , n.
(ii) FA (·) has support Rn and a continuously diﬀerentiable density.
(iii) Ai and Wj are independent for all i, j.
(iv) supp(g1 (W1 ), . . . , gn (Wn )) = Rn .
(v) For all i, gi (·) is continuously diﬀerentiable, with limwi →(∞,...,∞) gi (wi ) = ∞ and limwi →(−∞,...,−∞) gi (wi ) =
−∞.
Then FA (·) and each gi (·), i = 1, . . . , n, are identified up to a location normalization from observa-
tion of U (j:n) and W, for any single value of j ∈ {1, . . . , n}.

Proof. For simplicity let each Wi = Wi be a scalar. For T ⊂ {1, . . . , n} define

                            T
                          F̄A (a1 , . . . , an ) ≡ Pr (Ai > ai ∀i ∈ T , Aj ≤ aj ∀j ∈
                                                                                   /T)

          T                          ∂
and let F̄A,Ai
               (a1 , . . . , an ) = ∂a  F̄ T (a1 , . . . , an ). For arbitrary u ∈ R, define z =(u − g1 (w1 ), .., u −
                                       i A

gn (wn )). Then
                                             X    XZ u
                Pr(U (j:n) ≤ u|w) =                             T
                                                              F̄A,Ai
                                                                     (ũ − g1 (w1 ), .., ũ − gn (wn ))dũ
                                       T ⊂{1,..,n} i∈T
                                                    /    −∞
                                        |T |=n−j

where the summations are over the possible identities of the bidders with the n − j highest bids,
and the identity of the bidder i with bid B (j:n) . Diﬀerentiation yields
                                                         X      X        n
                                                                         Y                        ¯
        ∂      ∂n                                                                       ∂         ¯
                         Pr(U (j:n) ≤ u|w) =                     (−1)n−j      0
                                                                           (−gk (wk ))     fA (a)¯¯
        ∂u ∂w1 · · · ∂wn                                                               ∂ai         a=z
                                                    T ⊂{1,..,n} i∈T
                                                                 /               k=1
                                                     |T |=n−j
                                                   µ     ¶        n
                                                                  Y             n
                                                                                X            ¯
                                                    n−1                            ∂         ¯
                                                 =        (−1)n−j      0
                                                                    (−gk (wk ))       fA (a)¯¯
                                                     n−j                          ∂ai          a=z
                                                                           k=1              i=1
  56
    The result is a slight modification of Theorem 5 of Athey and Haile (2002), correcting a minor error in their
proof.




                                                         58
                  ¡n−1¢
since there are    n−j    subsets T of size n − j that exclude i. Now observe that
                                                           n
                                                           Y             n
                                                                         X            ¯
∂      ∂n                                                                   ∂         ¯
                 FA (u − g1 (w1 ), . . . , u − gn (wn )) =      0
                                                             (−gk (wk ))       fA (a)¯¯
∂u ∂w1 · · · ∂wn                                                           ∂ai          a=z
                                                                 k=1              i=1
                                                                         1      ∂      ∂n
                                                           =      ¡n−1¢                          Pr(U (j:n) ≤ u|w).
                                                                        (−1)n−j ∂u ∂w1 · · · ∂wn
                                                                   n−j

Hence, using the fundamental theorem of calculus,
        ∂n                                                        1          ∂n
                  FA (u − g1 (w1 ), . . . , u − gn (wn )) = ¡n−1¢                      Pr(U (j:n) ≤ u|w).
    ∂w1 · · · ∂wn                                            n−j (−1)
                                                                     n−j ∂w1 · · · ∂wn


Repeated application of the fundamental theorem of calculus shows that
Z ∞     Z ∞
                  ∂n
    ...                       FA (u−g1 (w̃1 ), . . . , u−gn (w̃n )) dw̃n . . . dw̃1 = (−1)n FA (u−g1 (w1 ), . . . , u−gn (wn ))
 w1      wn ∂ w̃1 · · · ∂ w̃n

so that
                                                   Z ∞          Z ∞
                                           (−1)j                         ∂n
 FA (u − g1 (w1 ), . . . , u − gn (wn )) = ¡n−1¢          ...                        Pr(U (j:n) ≤ u|w̃) dw̃n . . . dw̃1 .
                                             n−j     w1         wn ∂ w̃1 · · · ∂ w̃n
                                                                                                                   (6.17)
Now note that limw−i →(−∞,...,−∞) FA (u − g1 (w1 ), . . . , u − gn (wn )) = FAi (u − gi (wi )), where FAi (·)
is the marginal distribution of Ai . For each i, then, variation in u and wi identifies gi (·) through
equation (6.17) by standard arguments. With knowledge of each gi (·) we can then use (6.17) to
uniquely determine FA (·) at any point (a1 , . . . , an ) through appropriate choices of u and w.Q.E.D.

    Estimation based on this result has not yet been explored. For the competing risks model,
however, Fermanian (2003) has recently proposed kernel methods that build directly on the closely
related identification proof of Heckman and Honoré (1989).

6.2.2     Unobserved Bidder Heterogeneity

We have already discussed several models with bidder heterogeneity that is either fixed across all
auctions or captured by observable bidder-specific covariates. However, one can imagine situations
in which asymmetries between bidders vary across auctions due to factors common knowledge to
bidders but unobserved to the econometrician. For example, the match between the specifications
of a procurement contract and each contractor’s particular expertise might be common knowledge
within the industry but unobservable to outsiders.
    In the most general case, this type of environment requires a diﬀerent marginal distribution
FUit (·) for each bidder i’s valuation in each auction t. It should be clear that identification of such



                                                          59
a model from bid data alone is impossible: the number of marginal distributions in the model is
equal to the number of observations, even assuming one observes all bids from each auction.
       Consider instead a more restrictive model

                                                Uit = Ait + Eit

where all (i) Ait are i.i.d. draws from a cumulative distribution FA (·) with density fA (·) ; (ii) Eit
and Ait are mutually independent; (iii) Eit is common knowledge among the bidders but unobserved
to the econometrician; and (iv) each Eit is an independent draw from a cumulative distribution
FEi (·) with density fEi (·). From the econometrician’s perspective, each bidder’s valuation is then
an independent draw from a density

                                            fUi (·) = fA (·) ∗ fEi (·)

where ∗ denotes convolution.
       In an ascending auction, Theorem 4.1 implies that each FUi (·) is identified if one observes
the transaction price, the set of bidders N , and the winner’s identity This would be suﬃcient for
some important questions and policy simulations, although not all. For example, it would not be
suﬃcient to simulate outcomes under a first-price sealed-bid auction, since to do this one would
need to know how much of the variation in valuations was common knowledge (through Ei ) and how
much was private information (through Ai ). Separate identification of FA (·) and FEi (·) for all i is
not possible from bid data, however: there are n + 1 marginal distribution functions of interest; yet
even if one observed bids from all bidders (instead of the n−1 losing bids, as usually assumed), there
are only n marginal distributions of observable bids. Without additional restrictions, identification
will not be possible.
       In a first-price auction, the situation is only complicated by the nontrivial strategic behavior.
In particular, even identification of each FUi (·) in the special case above is doubtful, since the
markdown in each bidder’s first-order condition
                                  Pr (maxj6=i Bj ≤ m|Bi = bi , E1, . . . , Ej )
                  ui = bi + ∂
                             ∂m Pr (maxj6=i Bj ≤ m|Bi = bi , E1, . . . , Ej ) |m=bi
involves expectations that are conditioned on the information E1, . . . , Ej that is unobservable to the
econometrician.57 The problem here is closely related to that discussed in Section 6.1.2, although
the dimensionality of the unobserved heterogeneity is higher, and the approaches thus far proposed
to address unobserved heterogeneity do not appear to be applicable.
  57
    Models similar to this have been explored in the related context of diﬀerentiated products oligopoly price com-
petition (e.g., Berry, Levinsohn and Pakes, 1995; see also the chapter by Ackerberg et al. in this volume). There,
common knowledge diﬀerences in unobservable (to the econometrician) quality of products that diﬀer across mar-
kets lead to asymmetries in the eﬀective common knowledge marginal costs of supplying utility to a buyer choosing
between firms. Identification in those models is obtained through a combination of parametric assumptions and


                                                        60
6.3     Endogenous Participation

So far, we have assumed that any variation in the set of bidders is exogenous. In this section
we consider several diﬀerent models of how the set of bidders is determined, and we explore the
consequences of these models for identification. Here it will be useful to draw a distinction between
potential bidders and actual bidders. As before, we let N (with |N | = n) denote the set of potential
bidders–those who draw signals and decide whether to bid.58 We let A ⊆ N (with |A| = a) denote
the set of actual bidders, i.e., those who actually place a bid. Variation in both N and A is possible.
Let Ne be the random set whose realization is denoted by N , and let Ae be the random set whose
realization is denoted by A.
    An example of why the set of potential bidders may vary is an environment in which obtaining
a signal is costly. Firms may then decide whether to investigate a particular opportunity at random
or based on some summary statistics about the auction (for example, the appraised value of the
object). Fixing the set of potential bidders, the set of actual bidders may vary, for example, if
there is a binding reserve price or if submitting a bid is costly. In such cases, typically only bidders
with suﬃciently favorable signals will bid. In addition, in an ascending auction that lacks a strict
“activity rule” like that in the standard Milgrom-Weber model, the set of actual bidders can exclude
even potential bidders with relatively high valuations, since others may push the price beyond these
bidders’ willingness to pay before they ever make a bid
    In this section we will see that the consequences of endogenous variation in A and N for
equilibrium and identification will depend on whether bidders’ participation decisions are common
knowledge among the bidders and whether these are observable by the econometrician.59 Often
the number of actual bidders in an auction is observed by the econometrician; the set of potential
bidders may or may not be observed.60

6.3.1     Binding Reserve Prices

We first consider the case in which a reserve price may be binding.                        Recalling (2.1), in an n-
bidder auction with reserve price r, only bidders with signals xi ≥ x∗i (r, N ) participate (with
restrictions from the demand side of the market. In the auction setting, the latter would be analogous to restrictions
from the seller’s (or auctioneer’s) side of the market, for example using the assumption that the reserve price is set
optimally. We are not aware of empirical approaches exploiting such information, although this is a direction worth
exploring. See Einav (2004) for a related discussion.
   58
      In the literature, sometimes agents with the option of acquiring a signal are referred to as potential bidders (e.g.,
Hendricks, Pinkse and Porter, 2003).
   59
      See also the discussion in Section 8.2 below.
   60
      In the case that N is not observed but fixed in a sample, in most models of endogenous participation the common
support assumpton ensures that the union of identities of all actual bidders ever observed will converge to N as the
sample of auctions grows (cf. Guerre, Perrigne and Vuong, 2000).


                                                            61
x∗i (r, N ) = r in a private values auction). Ignoring this endogenous participation can result in
misleading estimates due to the selection introduced by the endogenous participation decision.61
Throughout this section, we will assume N is observable, hold N fixed, and consider only bidders
i such that i ∈ N .

       Ascending Auctions For ascending auctions we obtained positive identification results above
primarily for models with independent private values (the exception is Theorem 6.1), so we will
focus on such models here. Donald and Paarsch (1996) and Paarsch (1997) were the first to
incorporate reserve prices in structural models of ascending auctions in the IPV setting.62 They
observed that in a parametric framework one may account for the endogeneity of participation in
one of two ways. First, if the number of potential bidders is observable, one may explicitly account
(e.g., in a likelihood function) for the fact that the valuations (bids) of (n − a) potential bidders
were censored because these were below r. Alternatively, one can examine the bidding behavior of
the actual bidders conditional on their decision to participate. This second approach is based on
the fact that under independence each participating bidder i has a valuation that is an independent
draw from the distribution
                                                         FUi (u) − FUi (r)
                                          FUi (u|r) =                      .                                     (6.18)
                                                           1 − FUi (r)
This observation is useful for considering nonparametric identification as well. With this observa-
tion, Theorem 4.1 implies that each truncated distribution FUi (·|r) is nonparametrically identified.

Corollary 6.1 In an ascending auction with symmetric independent private values, FU (·|r) is
identified when the transaction price and the number of actual bidders is observable. In the asym-
metric independent private values model, for each i ∈ N , FUi (·|r) is identified when the transaction
price, the identity of the winning bidder, and the set A are observable.

       In many cases, this result alone will be suﬃcient to enable one to address interesting questions.
In the symmetric case, for example, Haile and Tamer (2003) have shown that the truncated distri-
bution FU (·|r) can be suﬃcient to determine the optimal reserve price (recall equation (4.12)). To
  61
     A closely related model is that in which bidders must pay a fee to enter the auction (Samuelson, 1985) or,
equivalently from the perspective of identification, preparing a bid is costly. This can lead to a participation rule
very similar to that with a binding reserve price (Milgrom and Weber, 1982). For first-price sealed-bid auctions,
Haile, Hong and Shum (2003) discuss this case and provide results similar to those given in this section. Note that
bid preparation costs are diﬀerent from costs of acquiring a signal (discussed in Section 6.3.2), because in the former
case a bidder places a bid if his signal is high enough, while in the latter case the participation decision must be made
before bidders have obtained signals, and all bidders who acquire signals will bid (unless there is a binding reserve
price).
  62
     More recently, Donald, Paarsch and Robert (1999), and Bajari and Hortaçsu (2003a) have considered parametric
models incorporating endogenous participation with reserve prices.


                                                           62
state the result, let FU |r (·) denote FU (·|r), and let c0 be the value the seller places on the good (or
her marginal cost of providing it).

Theorem 6.2 Given any univariate CDF Φ (·), let π (r; Φ) = (r − c0 ) (1 − Φ(r)) and p∗ (Φ) ∈
arg maxp∈suppΦ(·) π (p; Φ). Suppose π (·; FU ) is continuously diﬀerentiable and strictly quasi-concave.
                             ¡    ¢                                     ¡    ¢
Then (i) if r < p∗ (FU ), r∗ FU |r = p∗ (FU ); (ii) if r ≥ p∗ (FU ) , p∗ FU|r = r.

      This result implies that in a symmetric IPV environment, the optimal reserve one would calcu-
late by ignoring the endogenous participation is actually optimal, except when the actual reserve
price results in truncation of the relevant region of support. This follows from the fact that the
                                    ¡        ¢
objective functions π (·; FU ) and π ·; FU |r diﬀer only by a multiplicative constant. The qualifi-
cation concerning truncation is important but not surprising: if there are no data below the true
optimal reserve price, this optimum cannot be detected. However, part (ii) of Theorem 6.2 ensures
that when such truncation has occurred, the data will at least reveal this fact.
      For some policy questions, including predicting revenues under a diﬀerent mechanism or reserve
price, the full (untruncated) distributions FUi (·) will be needed, even under the independent private
values assumption. It should be clear that the value of FUi (u) for u lower than all observed reserve
prices could not be determined except through a parametric assumption. However, if both N and A
                                                                                            ³      ´
                         i                                                                     / Ae ,
are observable, each FU (u) can be recovered for all u ≥ r. In particular, since FU (r) = Pr i ∈
                                                                                     i

identification of FUi (u) for all u ≥ r follows immediately from (6.18) and Corollary 6.1.

Theorem 6.3 In the symmetric¯ independent
                                  ¯          private values model, FU (u) is identified for all u ≥ r
                               ¯ e¯
when the transaction price and ¯A¯ are observable. In the asymmetric independent private values
model, each FUi (·) is identified when the transaction price, the identity of the winning bidder, and
Ae is observable.

      An estimate of FUi (u) for u ≥ r will be suﬃcient for some policy questions, e.g., calculations
of revenues with higher reserve prices or under some alternative mechanisms. Estimation of each
             ³      ´
FU (r) = Pr i ∈
  i             / Ae based on a sample analog is straightforward. In the case of symmetry, a
diﬀerent approach to estimation of FU (·) is available: observe that exchangeability implies (Haile,
Hong and Shum, 2003)

                                 FU (r) = Pr (U1 ≤ r)
                                          = FU (r, ∞, . . . , ∞; n)
                                            Xn
                                                k   ³¯ ¯            ´
                                                       ¯ ¯
                                          =       Pr ¯Ae¯ = n − k                                  (6.19)
                                               n
                                              k=1



                                                    63
A sample analog of (6.19) places much weaker demands on the data than a sample analog of
  ³      ´
     / Ae . Estimates of FU (·|r) can be obtained from the winning bids as in Section 4.2, simply
Pr i ∈
replacing N with A. Combining such estimators to form
                                        h            i
                              F̂Ui (u) = 1 − F̂Ui (r) F̂Ui (u|r) + F̂Ui (r)

leads to a consistent estimator if FUi (u).
   Haile and Tamer (2003) point out that similar extensions apply to the bounds approach to
ascending auctions discussed in Section 4.3.       Their assumptions (see Section 4.3) imply that all
bidders with valuations above the reserve price must participate, as in the standard model. Ignoring
the endogenous participation and treating A as the set of potential bidders then leads to bounds
on the CDF FU (u|r) for u ≥ r. Combining these with an estimate of FU (r) obtained from the
observable participation decision leads to bounds on FU (u) for u ≥ r.
   While we have treated the reserve price above as fixed, it should be clear that this is not
necessary. As with other auction-specific covariates, the results above can be interpreted as holding
for a given value of the reserve price.       However, because economic theory places considerable
structure on the eﬀect of the reserve price on the distribution of participating bidders’ valuations,
in practice this structure should be utilized in estimation. For example, one would want to use
data from all auctions with reserve prices below s to estimate FUi (u) for u ≥ s. This requires
a modified estimation approach that combines data drawn from diﬀerent truncated distributions.
Indeed, if the reserve price varies exogenously (e.g., as it would if it were set optimally by sellers with
stochastic private values for the good that are independent of bidders’ valuations), this variation
can trace out much (or even all) of the distributions FUi (·). For example, if the support of the
reserve price includes values below the lower boundary of the support of bidder valuations, then
identification of the full distribution FU (·) is immediate from the arguments above. The estimation
problem in such cases is similar to that for other models with random truncation (e.g., Woodroofe,
1985; Wang, Jewell and Tsai (1986)). While this idea has been mentioned by Guerre, Perrigne
and Vuong (2000), nonparametric estimators exploiting the presence of variation in reserve prices
have not yet been investigated, either for ascending or first-price auctions.

First-Price Auctions Similar arguments apply to first-price auctions, although here we can
consider a richer set of private values models. We will focus on the case in which the econometrician
observes all of the bids as well as the realizations of the sets Ae and N
                                                                        e . In first-price auctions, it is
necessary to make an assumption about whether the bidders observe the set Ae before placing their
bids. Since participation is determined by the realization of bidders’ private information, it will
often be most natural to assume that bidders do not know Ae when choosing their bids. We will

                                                    64
focus on this case.63
       Since for any bidder i making a bid in equilibrium
                                        ³         ¯                  ´
                                                  ¯    e Bi = bi , N
              GMi |Bi (mi |bi ; N ) = Pr Ae = {i} ¯i ∈ A,
                                          X          µ                        ¯            ¶
                                                                              ¯
                                      +          Pr Ae = A , max
                                                            0
                                                                   0
                                                                       Bk ≤ m ¯ B
                                                                             i¯ i = bi , N
                                                                      k∈A ,k6=i
                                          A0 ⊂N ,i∈A0

the observables and the first-order condition (2.4) uniquely determine the valuation uit associ-
ated with the bid bit of each actual bidder. Letting FU (·|A, r) denote the joint distribution of
{Ui |Ui ≥ r, i ∈ A}, this gives the following result.

Theorem 6.4 For each A ⊆ N , the joint distribution FU (·|A, r) is identified in a first-price
auction from observation of the reserve price r, all bids, and the associated bidder identities. In a
symmetric environment, it is suﬃcient to observe r and all bids.
                                      ³            ´
   Combined with the probabilities Pr Ae = A|N , r (for which identification is immediate when
A, N , and r are all observed), the joint distributions FU (·; A, r) will be suﬃcient for a number
of questions of interest, including predicting the eﬀects of an increase in the reserve price.                    As
discussed above, however, in some cases one will need an estimate of the untruncated distribu-
tion of valuations.     This does not appear to be possible in the case of correlated private values:
there is simply no information available regarding the correlation of valuations below the reserve
price. However, maintaining the assumption that N is observable, one can identify the marginal
distributions of bidder valuations evaluated at values above r.64

Theorem 6.5 In a first-price auction with private values, FUi (ui ) is identified for all ui ≥ r from
observation of all bids and the associated bidder identities. In a symmetric environment, it is
suﬃcient to observe all bids.

       Proof. For each A and each i ∈ A, the joint distribution FU (·|A, r) completely determines the
conditional distribution FUi (ui |r) = Pr (Ui ≤ ui |Ui ≥ r). Further,
                                                         FUi (ui ) − FUi (r)
                                         FUi (ui |r) =                                                        (6.20)
                                                            1 − FUi (r)
for all ui ≥ r. FUi (r) is identified from the observed participation decisions, as in the case of an
ascending auction. The result then follows from (6.20).                                                      Q.E.D.
  63
     In some auctions, bidders may be required to register or make a deposit in order to participate. If these actions
are observable to bidders, A will be known at the time they choose their bids.
  64
     Analogs of Theorems 6.4 and 6.5 were demonstrated for the case of symmetric independent private values by
Guerre, Perrigne and Vuong (2000). Haile, Hong and Shum (2003) extended these results to symmetric aﬃliated
private values and common values models.


                                                         65
   Note that in an independent private values auction, this provides identification of FU (u) for
u such that ui ≥ r for all i.        As with similar results in preceding sections, estimation is possi-
ble building directly on the identification result, substituting sample analogs for the probabilities
FUi (ui |r) and FUi (r) in (6.20).

6.3.2   Costly Signal Acquisition

Levin and Smith (1994) have considered a model in which players (“firms”) first choose whether
to become potential bidders (“enter”) by investing in signals of their valuations. Firms that invest
observe private signals. The assumption of costly signals is natural in many environments, particu-
larly in the procurement contexts that account for a large share of the data studied in the auctions
literature. For example, acquiring a signal might require conducting/analyzing a seismic survey or
reviewing detailed contract specifications. Levin and Smith (1994) assume that the bidders observe
the set of potential bidders before placing their bids; in Section 6.3.3 we discuss the alternative
assumption that investments in signal acquisition are private information so that bidders place
their bids without knowing which firms are potential bidders.
   Levin and Smith focus on symmetric equilibria of models with symmetric bidders. In equilib-
rium, firms acquiring a signal must expect to recover the cost of doing so on average. So when there
are suﬃciently many firms in the market, some must choose not to enter. In the unique symmetric
equilibrium, entry is determined by mixed strategies, leading to exogenous variation in the set of
potential bidders. One caveat is that, as in virtually all entry games, when asymmetric equilibria
are allowed, there will be multiple equilibria (see, e.g., Berry and Tamer (2005)).
   To extend the econometric model to this setting, observe that the distribution of the set of
potential bidders is determined by the
                                    ¯ mixing
                                       ¯      probabilities. Since firms make independent decisions
                                    ¯ e¯
about signal acquisition, the event ¯N ¯ = 1 occurs with positive probability. This case was ruled
out above because typically this is not an interesting case: if a bidder knows that |N | = 1, she will
simply bid the reserve price. However, for the purposes of this section and the next, we will allow
|N | = 1. If we assume that the reserve price r is less than ui for all firms i, the reserve price binds
only when |N | = 1, in which case the lone potential bidder bids the reserve. Hence when r <ui for
all i, the number of potential bidders is equal to the number of actual bidders, the model generates
exogenous variation in the number of bidders, and the methods described above can be used to
estimate primitive value distributions. When r >ui there will also be also variation in the number
of actual bidders for a given set of potential bidders, as in Section 6.3.1. There we assumed that
the set of potential bidders was observable to the econometrician for some results. That may be
unlikely in the presence of both a reserve price and costly signals, since the set of potential bidders



                                                     66
varies across auctions. Li (2003) considers parametric estimation of a model based on Levin and
Smith’s model with r >ui
   Hendricks, Pinkse and Porter (2003) have considered a variation on this model in a common
values setting in which bidders choose whether to invest in a signal based on noisier (in a precise
sense) preliminary estimates of their valuations. As they point out, their model can be interpreted
as providing a purification of Levin and Smith’s (1994) mixed strategy equilibrium. Athey, Levin,
and Seira (2004) consider another variation in the private values framework, allowing asymmetric
bidders and treating each firm’s entry cost as private information. They assume firms fall into two
classes, “weak” and “strong” (generalizations to more than two types are also possible). Strong
firms that choose to invest draw valuations from a distribution that stochastically dominates that
of the “weak” firms. They restrict attention to type-symmetric equilibria, in which all members
of a given class use the same strategies. Because firms are asymmetric, however, there may be
multiple type-symmetric equilibria. This can limit the possibility of making sharp counterfactual
predictions without additional assumptions about equilibrium selection. One possible solution is
to assume that strong firms enter more often than weak firms. This can eliminate some equilibria,
and for some parameter values can lead to a unique equilibrium.
    In any signal acquisition model that generates exogenous variation in Ne , if N
                                                                                  e and all bids
are observed (or in an IPV model if Ne and the winning bid is observed), our prior results imply
that (assuming r <ui ) a bidder’s ex ante gross expected profit Πi (N ) from entering the auction is
identified. In particular,
                              £                                                                ¤
                 Πi (N ) = EUi (Ui − β i (Ui ; N )) GMi |Bi (β i (Ui ; N ) | β i (Ui ; N ); N )

with the right-hand side determined by the observed bid distribution and the first-order conditions
for equilibrium bidding. Identification of Πi (N ) requires no assumptions about the nature of the
signal acquisition equilibrium (or equilibrium selection) beyond what is required to guarantee that
variation in Ne is exogenous. Estimates of Πi (N ) can then be used to calculate all equilibria of
an entry game for given entry costs. Thus, in an application, the existence of multiple equilibria
in the entry game can be assessed empirically. For example, Athey, Levin, and Seira (2004) find a
unique type-symmetric equilibrium for the relevant range of entry costs in their application, and in
this equilibrium strong firms enter with probability one and weak firms are indiﬀerent about entry.
   Athey, Levin, and Seira (2004) also observe that for any firms that are indiﬀerent about acquiring
a signal (as in a mixed strategy equilibrium), the expected profit from entry must be zero. Thus
                                                              e , which is directly observable. In
entry costs are identified by Πi (N ) and the distribution of N




                                                       67
particular, for any firm i that is indiﬀerent about acquiring a signal, entry costs must be equal to
                                       X               ¯
                               Π̄i =            e = N ¯¯ i ∈ N
                                            Pr( N            e ) Πi (N ).
                                            N :i∈N

Thus, in contrast to much of the empirical industrial organization literature on entry,65 which
draws inferences solely from entry decisions, the level of entry costs can be inferred. Hence it is
possible to conduct counterfactual simulations about changes in these costs on the competitiveness
of markets and bidder rents.

6.3.3      Bidder Uncertainty About the Competition

Throughout the preceding sections we maintained the assumption that bidders make their bids
knowing the set of competitors they face. In the standard model of the ascending auction with
private values, this is without loss of generality since the dominant strategy is not aﬀected by the
set of opponents. Furthermore, the assumption may be uncontroversial in an ascending auction;
certainly if one believes bidders observe their opponents’ exit prices (as in the standard model) it
is natural to presume that bidders are aware of all competitors. In a sealed-bid auction, however,
bidders need not gather to participate, making it less certain that bidders will know what com-
petition they face. And in a first-price auction, a bidder’s information about the competition is
critical to the characterization of equilibrium bidding. In some procurement settings, firms may in
fact know which of their competitors have the capability to compete for a given contract or even
which firms have been invited to bid, but in other contexts this may not be public information.
       Even if the set of firms who could in principle compete in an auction is common knowledge, in
models where firms incur a cost to acquire a signal (see, e.g., Section 6.3.2) bidders may not know
which other firms have actually invested in a signal for a particular auction. There the investment
choice is determined by randomization (in the case of a mixed strategy equilibrium) or as a function
of private information (in a pure strategy equilibrium).
       It is straightforward to modify theoretical models of costly signal acquisition to accommodate
the case where bidders do not observe who has acquired a signal before bidding. McAfee, Quan,
and Vincent (2002) and Hendricks, Pinkse and Porter (2003) consider models with this feature for
the case of first-price auctions. McAfee, Quan, and Vincent (2002) show that a slightly stronger
condition than aﬃliation of signals is required to ensure existence of a pure strategy Nash equi-
librium in increasing strategies.66 Li and Zheng (2005) also study such a model, highlighting an
  65
    See, e.g., Berry and Reiss (forthcoming).
  66
    In particular, they assume that there exists a nondecreasing function h (·) such that for each i, Ui = h(Xi , V0 ),
where (X1 , .., Xn ) are i.i.d. conditional on V0 . Private values, where Ui = Xi , is a special case. Each bidder bears a
cost (constant across bidders) to learn the value of Xi . Bidders first invest in their signals and then place bids, but


                                                           68
interesting testable theoretical possibility: bids may decrease when the number of firms increases,
because each firm will enter with lower probability, and the resulting change in the distribution of
potential bidders has ambiguous consequences for bidding strategies.

Unknown Potential Competition Now consider a first-price sealed-bid auction where N         e is
                                                      e = N ) is identified as long as the set of
unobserved to both bidders and the econometrician. Pr(N
bidders is observable at each auction. The distribution of the highest bid among i’s opponents is
calculated taking the expectation over the set of potential bidders:
                                          X          µ                ¯        ¶
                                                                      ¯
                       e = {i} |i ∈ N
GMi |Bi (mi |bi ) = Pr(N            e )+          Pr                               e = N |i ∈ N
                                                         max Bj ≤ mi ¯¯ Bi = bi Pr(N          e ).
                                                                    j∈N , j6=i
                                               N :i∈N ,|N |>1
                                                                                                                  (6.21)
Bidder i’s first-order condition is then given by

                                                          GMi |Bi (bi |bi )
                                              ui = bi +                     .                                     (6.22)
                                                          gMi |Bi (bi |bi )

This takes the usual form; however, here GMi |Bi (·) does not depend on N . Equation (6.22) and
observation of all bids then identifies the distribution of Ui , and straightforward extensions of the
estimation techniques described above can be applied.
     So far we have considered two assumptions that might be made when interpreting data from
                          e is observed by all bidders prior to bidding, or (ii) N
first-price auctions: (i) N                                                      e is unobserved prior
to bidding. In many settings, institutional detail may be available to guide the choice between these
                                                                                         e is observed
assumptions. When there is variation in N , the data can also help guide this choice. If N
by all bidders prior to bidding, then when |N | = 1 the bidder must bid the reserve
                                                                                 ¯ ¯ price.
                                                                                       ¯    Thus, the
                                                                    ³                       ´
                  e is observable to bidders could be rejected if Pr B (1:1)     ¯ ¯   ¯
                                                                                     e ¯ = 1 < 1. In
hypothesis that N                                                            = r ¯ ¯N
addition, building on the discussion in Section 5, we note that both assumptions can have additional
testable implications. If variation in Ne is exogenous (as in the models of costly signal acquisition
described above), it will be possible to estimate FU (·) separately for each N and compare the
                        e is observed by bidders before bidding, these estimates should be equal to
resulting estimates. If N
each other (up to sampling error). On the other hand, if bidders have no information regarding the
               e when choosing their bids, then the distribution of Bi itself should not vary with
realization of N
N (recall (6.22)).
investment decisions are not publicly observable. They derive an equilibrium in which firms randomize in the signal
acquisition decision. Then, for bidders who acquire a signal, bidding is in strictly monotone pure strategies. They
show that a suﬃcient (but not necessary) condition for existence of a such an equilibrium is that 1−ρ(1−FXi |V0 (xi |v0 ))
is log-supermodular in (xi , v0 ), where ρ is the entry probability in the mixed strategy equilibrium of the entry game.




                                                           69
Noisy Knowledge of the Competition Once we allow the possibility that bidders do not
        e prior to bidding, it is natural to consider more carefully what bidders do know. In
observe N
                                                                                    e when choosing
particular, it may be more reasonable to imagine that bidders have noisy signals of N
their bids. When the econometrician can condition on the same information available to bidders
(excluding their signals of course), extending the methods is straightforward. Suppose, for example,
that bidders form their beliefs about the set of competitors based on a public signal η that is also
observable to the econometrician. The signal, η, might contain information about how costly it
will be to evaluate the object and acquire a signal, or information about the expected value of the
object. In a model of costly signal acquisition, such factors will aﬀect the entry probability of each
bidder.
   We can extend the methods above by treating η as an auction-specific covariate to be conditioned
on in bidders’ first-order conditions. Note that the signal η need not be a scalar and can include any
information that may aﬀect the set of potential bidders, including, e.g., characteristics of the good
for sale or market conditions. Hendricks, Pinkse, and Porter (2003) consider a simple example of
this approach. They construct a binary signal η t = 1 {Υt ≥ Υ∗ } of the number of potential bidders
for tract t, where Υt is the number of firms ever to bid on an oil tract in a geographic neighborhood
of the tract oﬀered in auction t, and Υ∗ is a specified threshold value.
   In contrast, if bidders have signals (public or private) about factors that aﬀect the number of
competitors, but these signals are not observable to the econometrician, the problem of unobserved
heterogeneity discussed in Section 6.1.2 arises. For example, in a model where acquiring a signal
is costly, firms might observe an auction characteristic v0 before making entry decisions. Another
possibility is that firms observe auction characteristics that aﬀect the cost of acquiring information
about a particular object. Li and Zheng (2005) develop a model of a first-price auction with these
features.   They specify a semi-parametric model, leaving the distribution of unobserved hetero-
geneity unrestricted while assuming a functional form for the marginal distributions of valuations
conditional on the heterogeneity. They estimate the model using Bayesian methods.

6.3.4     Internet Auctions and Unobserved Participation

Internet auctions have recently attracted considerable attention from economists. In addition to
providing a great deal of new data, Internet auctions introduce a number of new and interesting
questions, including the role of seller reputations (see, e.g., the papers surveyed by Bajari and
Hortaçsu (2003b, 2004b)) and competition between sellers (e.g., Peters and Severinov, 2002).
   Internet auctions are most often conducted in one of several variations on the standard ascending
auction mechanism (Lucking-Reiley, 2000). However, a challenge to structural analysis of bid data



                                                 70
from Internet auctions is the fact that the number of bidders cannot be observed.                         Recall from
Section 4 that a key assumption for the identification arguments in even the simplest ascending
auction environments was observation of the number of bidders–either the number of potential
bidders or the number who have valuations above the reserve price. An Internet auction typically
takes place over several days (usually a week or more on eBay, for example), with bidders becoming
aware of the auction at diﬀerent times as they log onto the auction site while the auction is
underway. A bidder who logs on to discover that the price has already risen past his valuation
will not bid. Hence the number of submitted bids will not generally equal the number of bidders
willing to pay the reserve price (if any).67 The usual assumption that the transaction price is equal
to the second-highest valuation is of little use if it is not known whether it is the second highest of
two valuations or of ten, for example.
       This problem has accounted for a substantial impediment to progress in addressing questions
about the underlying demand structures at Internet auctions.68                      This includes even seemingly
simple questions like how seller reputations aﬀect bidders’ willingness to pay, since this requires
inference on the underlying distribution of bidder valuations.
       Song (2003) has proposed a model capturing key departures of Internet auctions from the
standard ascending auction model. Using this model, she derives conditions under which the
identification of the distribution FU (·) can be obtained in the symmetric independent private
values paradigm without observing the number of bidders, or even assuming that this number is
constant.
       In her model, an auction takes place over an interval of time [0, τ ].                The distribution of N
can vary across auctions, and need not be known to bidders. In a given auction, each potential
                                                  ¡                   ¢
bidder i draws a vector of “bidding opportunities” t1i , . . . , tτi i , with each tki ∈ [0, τ ]. Taking
t1i < · · · < tτi i without loss of generality, t1i represents the time of i’s “arrival” at the auction, and
tτi i represents i’s final bidding opportunity. No restriction is placed on the joint distribution of
¡            © ª¢
  N, {τ i } , tki  except that (a) these are independent of bidders’ valuations, and (b) each tτi i is
continuously distributed on some interval (t0i , τ ].           In this model, bidders may “arrive” early or
late, bid frequently or infrequently, and have diﬀerent notions of what bidding at the “last minute”
means.
  67
      This problem can also arise in other applications, particularly in other ascending auctions with similar deviations
from the button auction model, or in Dutch auctions, where only the winner makes a bid. Song (2004) explores
identification and estimation in these and other auction models when the number of bidders is not observable to the
econometrician.
   68
      Bajari and Hortaçsu (2003a) avoid this problem with a common values model that admits an equilibrium in which
all bidders willing to pay the reserve price will bid simultaneously at the end of the auction, as if in a second-price
sealed bid auction. See Ockenfels and Roth (2004) for an alternative model of Internet auctions.




                                                           71
       At each bidding opportunity, a bidder may specify a “cutoﬀ price” of any value above the
current standing bid. Whenever a new cutoﬀ price is submitted, the auctioneer raises the standing
bid (denoted st ) to the second-highest cutoﬀ price, and the bidder with the highest cutoﬀ price is
named the standing high bidder. This matches the actual procedure on eBay, the most popular
Internet auction site, for example.        At time τ , the standing high bidder wins the object at the
standing bid (for simplicity we assume no reserve price and no minimum bid increment). Typically,
the econometrician can observe the history of submitted cutoﬀ prices (except the winner’s), as well
as the identity of the bidder who placed each bid. This information is publicly available for eBay
auctions, for example.
       There are many equilibria of this game. For example, all bidders can submit cutoﬀ prices equal
to their valuations at their first bidding opportunities; bidders may start with low cutoﬀ prices and
gradually raise them as the auction proceeds; or some/all bidders may wait until their final bidding
opportunities to submit a cutoﬀ price. In some of these equilibria (like the last example), some
potential bidders will not bid, since at their planned bidding time the standing bid will already
exceed their valuations. However, Song (2003) shows that in all equilibria the highest cutoﬀ price
submitted by bidder i will be no larger than his valuation ui , and it will equal his valuation if the
standing bid at time tτi i was below ui .69
       Since the price can never rise above u(n−1:n) , this ensures that the allocation is eﬃcient and that
the transaction price is u(n−1:n) . Further, in some cases, the third-highest cutoﬀ price submitted
will be equal to u(n−2:n) . To see this, let bi denote the highest cutoﬀ price submitted by bidder i
(i.e., his “bid”) and let b(m−2:m) denote the third-highest such bid (or −∞ if there is no such bid).
Here m represents the number of observed bidders–those submitting cutoﬀ prices at some point
in the auction. Now suppose that at time t̃ the standing bid st̃ is no higher than b(m−2:m) . In
practice, whether this is true can be directly determined from the available bidding histories. In
particular, recalling that two bids above b are required for the standing bid to exceed b, this occurs
whenever at least one of the two bidders making the highest bids (as of the end of the auction)
makes no bid above b(m−2:m) prior to time t̃. In that case we have

                                    st̃ ≤ b(m−2:m) ≤ u(m−2:m) ≤ u(n−2:n)

implying that if the bidder with valuation u(n−2:n) has his final bidding opportunity at time t̃ or
earlier, he will submit a cutoﬀ price equal to his valuation. In that case, b(m−2:m) = u(n−2:n) . While
the final bidding time of this bidder is not known, by looking at auctions in which st̃ ≤ b(m−2:m)
for t̃ suﬃciently close to τ , the probability that b(m−2:m) = u(n−2:n) can be made arbitrarily close
  69
    The first property is easily understood. The second follows from arguments similar to those used in analyzing a
second-price auction.


                                                        72
to one.70
       This is useful because we typically cannot observe the cutoﬀ price submitted by the auction
winner.71 However, by examining only the set of auctions in which

                                         st̃ ≤ b(m−2:m)               t̃ ∈ (τ − δ, τ )                          (6.23)
                                                   ¡                    ¢
for small δ > 0, we can treat the order statistics U (n−1:n) , U (n−2:n) as “observed.” The following
                                                          ¡                     ¢
result, proved in Song (2003), implies that observation of U (n−1:n) , U (n−2:n) is suﬃcient to identify
FU (·), even though the realization of N at each auction is unknown.
             ¡                                  ¢
Lemma 6.2 Let Y (N :N) , Y (N−1:N ) , Y (N −2:N) denote random variables equal to the three highest
of N ≥ 3 independent draws from a univariate distribution FY (·), where N is stochastic and
                                                                      ¡                     ¢
unobserved. FY (·) is uniquely determined by the joint distribution of Y (N−1:N) , Y (N−2:N) .
                                       ¡                   ¢
Proof. Given Y (N−2:N) = y 0 , the pair Y (N−1:N) , Y (N:N) can be reinterpreted as the two order
statistics for an i.i.d. sample of size two from the distribution
                                           ¡ ¢      FY (·) − FY (y0 )
                                         FY ·|y 0 =                   .
                                                      1 − FY (y0 )

Although Y (N:N) is unobserved, equation (4.1) implies that the observation of Y (N−1:N) alone is
suﬃcient to identify the parent distribution FY (·|y 0 ) for this sample. Identification of FY (·) then
follows from the fact that
                                                                      ¡ ¢
                                              lim                   FY ·|y0 = FY (·) .
                                                  (N −2:N )
                                     y0 ↓inf suppFY           (·)

                                                                                                               Q.E.D.

       Key to the applicability of this result is an assumption that auctions in which at least one of
the two high bidders make late bids (i.e., where (6.23) holds) are representative of all auctions. If
τ i = 1 ∀i, this follows from the assumption that {τ i } and {Ui } are independent. In general, when
τ i > 1, this requires the additional assumption that the equilibrium selection does not depend on
(u1 , . . . , un ).72
       Song (2003) proposes a semi-nonparametric estimator (Gallant and Nychka, 1987) applicable
to the subset of auctions in which bids are observed from at least three distinct bidders.                         The
  70
      In finite sample, of course, there will be a tradeoﬀ between the bias of including auctions with t̃ far from τ and
the reduction in the variance from doing so. Song (2003) suggests a data-driven approach for choosing the sample.
   71
      If we could–for example, if such data were provided directly by eBay–a variation on the result below would
still be applicable to address the problem that the number of potential bidders is unobserved.
   72
      More precisely, the distribution of U (n−1:n) |U (n−2:n) conditional on at least three bidders’ being observed and
(6.23) holding must be the same as the unconditional distribution of U (n−1:n) |U (n−2:n) .



                                                               73
likelihood function is constructed from the conditional density of U (n−1:n) given U (n−2:n) , i.e.,

                        ∂    ³                           ´ 2 (1 − F (y)) f (y)
                                                                   U      U
                           Pr U (n−1:n) ≤ y|U (n−2:n) = x =
                        ∂y                                     (1 − FU (x))2

in which n does not appear. Monte Carlo experiments suggest that the approach can perform well
in sample sizes easily attainable from Internet auctions.


6.4       Risk Aversion

Most of the empirical literature on auctions assumes risk neutrality of bidders. Risk neutrality
is a natural assumption when the value of the object being sold is small relative to each bidder’s
wealth. Furthermore, in many applications bidders are firms, which economists usually assume to
be profit maximizers. However, many auctions involve highly valuable goods (or contracts). And
even when bidders represent firms, they may themselves be risk averse.73 Risk aversion can have
important implications for a wide range of policy questions, including the optimal reserve price and
a seller’s preference between the standard auction formats.74
       Risk aversion also creates significant challenges for identification. In an ascending auction with
private values, for example, risk aversion has no eﬀect on equilibrium bidding in the standard model:
bidding one’s valuation is still a dominant strategy. While this implies that identification of FU (·)
holds with risk aversion whenever it holds with risk neutrality, it also implies that there is no way
to distinguish risk neutrality from risk aversion, i.e., no way to identify bidders’ preferences. While
the distribution FU (·) will be suﬃcient for some questions (for example, the eﬀect of changing the
reserve price) it will be inadequate for many others.
       In a first-price auction, the implications of risk aversion for equilibrium bidding are nontrivial,
since bidding involves a gamble. Bidding less aggressively leads to a lower chance of winning but
higher profits conditional on winning. A more risk averse bidder will be less willing to accept a
reduced probability of winning in order to obtain a higher profit when she wins.                       This suggests
that there is at least hope for identification of preferences using data from first-price auctions.
However, identifying risk preferences generally requires observation of choices from diﬀerent menus
of lotteries.    Variations in bidders’ valuations do change the sets of lotteries available to them, but
not in ways that are observable to the econometrician, since valuations are private information. This
  73
      The incentives provided by the firms they work for may or may not “undo” such risk aversion. Athey and Levin
(2001), Campo, Guerre, Perrigne and Vuong (2002), and Perrigne (2003), for example, find evidence consistent with
risk averse bidding behavior by firms at timber auctions.
   74
      See, e.g., McAfee and McMillan (1987a) and references therein. The theory of first-price auctions with risk averse
bidders was initially developed by Maskin and Riley (1984). Campo, Guerre, Perrigne, and Vuong (2002) extend the
analysis to the case in which there is no binding reserve price and establish additional smoothness properties used
for identification and estimation.


                                                          74
suggests that some observable exogenous variation will be needed to separately identify preferences
and the distribution of valuations.75 Below we will first explore possible approaches to identification
in symmetric models, proceeding to consider models with asymmetric preferences in Section 6.4.2

6.4.1      Symmetric Preferences

We begin with a more formal illustration of the fundamental challenge for identification in models
of first-price auctions with risk aversion. For simplicity, consider the case of symmetric independent
private values, and assume that all bids are observable. Assume further that all bidders share the
same continuously diﬀerentiable utility function ω (·) . Taking equilibrium behavior of her opponents
as given, bidder i solves the problem

                                      max ω(ui − b̃i ) Pr( max Bj ≤ b̃i ).
                                        b̃i                     j∈N−i

If we define
                                                λ(s) ≡ ω(s)/ω0 (s)                                            (6.24)

then first-order condition

                                 ω0 (ui − bi )GB (bi ) = (n − 1)ω(ui − bi )gB (bi )

can be rewritten usefully as                              µ                    ¶
                                                     −1         1 GB (bi )
                                        ui = bi + λ                                .                          (6.25)
                                                              n − 1 gB (bi )
       Now define the function
                                                                µ                      ¶
                                                                      1 GB (bi )
                                    ξ(bi , n, λ) = bi + λ−1
                                                                    n − 1 gB (bi )

and let λI (·) denote the identity function–i.e, the function λ (·) implied in the case of risk neu-
trality. Campo, Guerre, Perrigne, and Vuong (2002) show that as long as bids are independent
(and additional regularity conditions are satisfied), an observed marginal bid distribution GB (·)
can be rationalized by equilibrium behavior if and only if there exists a utility function ω (·) such
that, for the associated λ (·), ξ(·; n, λ) is increasing (see Section 5.1). Hence, if bids are independent
and ξ(·, n, λI ) is increasing, it will be possible to find a distribution FU (·) that rationalizes the ob-
served bids within the symmetric risk neutral IPV model. If ξ(·, n, λI ) is decreasing at some point,
the observed bids could not have been generated by equilibrium bidding by risk-neutral bidders,
  75
    However, if the distribution FU (·) is known or identified from other data–for example, in a laboratory setting or
when one observes the same bidders participating in both first-price and ascending auctions–bid data from first-price
auctions might then be used to estimate the utility function.



                                                          75
although there may exist another utility function ω (·) with associated λ (·) such that ξ(·; n, λ) is
increasing. Thus, allowing for risk aversion expands the set of observable bid distributions that can
be rationalized by equilibrium bidding (Campo, Guerre, Perrigne, and Vuong , 2002).
       Unfortunately, ξ(·, n, λ) need not violate the monotonicity restriction when the model is mis-
specified – in particular when the given function λ (·) does not correspond to that for the true
preferences. When ξ(·, n, λI ) is increasing, for example, the observed bids can be rationalized with
risk neutrality, but they can also be rationalized with many diﬀerent specifications of risk aver-
                                                                                        ³           ´
                                                                                          1 GB (b)
sion. To suggest why, observe that if as long as a bidder is suﬃciently risk averse, λ−1 n−1 gB (b)
does not vary much with b, ensuring that ξ(b; n, λ) strictly increases in b. Consider the following
example of a CRRA utility function (with zero initial wealth): ω(u) = u1−c , with 0 ≤ c < 1.
Then λ(s) = s/(1 − c), and λ−1 (z) = z(1 − c). As c approaches 1, ξ(·; n, λ) approaches the iden-
tity function. Intuitively, suﬃciently risk averse bidders are not willing to risk losing the object by
shading their bids, so they do not respond to the shape of the opposing bid distribution. Thus,
even if GgBB(b)
            (b)
                is sharply decreasing in some places, there will be a critical level of risk aversion above
which ξ(·; n, λ) is everywhere increasing.
       Similarly, it is generally impossible to identify the degree of risk aversion from bid data in a
fixed environment. Perhaps surprisingly,76 however, this is true even with a strong functional form
assumption on bidders’ preferences. Again consider the CRRA example, and suppose that the
data can be rationalized by a distribution FU (·) and coeﬃcient of relative risk aversion c. Then,
for any c̃ ∈ (c, 1) , if we let ω̃(s) = s1−c̃ , we can find another distribution FŨ (·) that implies the
same distribution of bids, but where FŨ (·) stochastically dominates FU (·). In particular, to satisfy
(6.25), we define Ũi to be equal in distribution to
                                                   1 − c̃ GB (Bi )
                         ξ(Bi ; n, λ̃) = Bi +
                                                   n − 1 gB (Bi )
                                                                µ                        ¶
                                            c̃ − c       1 − c̃           1 − c GB (Bi )
                                       =           Bi +           Bi +
                                            1−c          1−c             n − 1 gB (Bi )
                                            c̃ − c       1 − c̃
                                       =           Bi +         ξ(Bi ; n, λ)
                                            1−c          1−c
                                            c̃ − c       1 − c̃
                                       =           Bi +         Ui .
                                            1−c          1−c
It follows that whenever ξ(bi ; n, λ) is increasing in bi , so is ξ(bi ; n, λ̃). Hence, the data can be ratio-
nalized with risk aversion c̃. Campo, Guerre, Perrigne and Vuong (2002) show that this argument
holds for other parameterized families, as well as general utility functions.
       These results are quite negative. Only for bid distributions such that GgBB(b)
                                                                                  (b)
                                                                                      decreases suﬃciently
  76
    Recall that with risk neutrality the symmetric IPV model is overidentified when one observes all bids from each
auction.


                                                        76
sharply in b in places can risk aversion be distinguished from risk neutrality; it is impossible to
distinguish among diﬀerent parameterized functional forms for risk aversion; and there exists a large
range of risk aversion parameters that can rationalize the observed bid data, even when attention
is restricted to a particular functional form.
    Following the intuition at the beginning of this section, however, this non-identification might
be overcome with observable exogenous variation in the sets of gambles available to bidders. One
possibility is a covariate that shifts bidders’ initial wealth or, equivalently, bidders’ valuations for
the good. Suppose, for example, that each bidder i’s utility from winning the auction is

                                                  ω(h(wi ) + ui − bi )                                          (6.26)

for some increasing function h (·), where the covariate wi is is independent of ui and is observable
to all bidders prior to the auction as well as to the econometrician. Let w = (w1 , .., wn ). The model
then becomes asymmetric, even though bidders’ preferences are given by the same function. Let
GMi (bi |w, N ) be the distribution of the maximum bid of bidder i’s opponents, conditional on w
and N . Let bα,w,N denote the αth quantile of the distribution GMi (bi |w, N ), while uα is the αth
quantile of FU (·) . Then equilibrium requires that
                                     µ                     ¶
                                  −1 GMi (bα,w,N |x, N )
        uα = bα,w,N − h(wi ) + λ                             ∀w ∈ suppW, ∀α ∈ [0, 1].                           (6.27)
                                       gMi (bα,w,N |x, N )

The data can be rationalized by the model only if we can find a λ (·) such that (6.27) holds and
such that                                                                µ                     ¶
                                                                  −1         GMi (bi |w, N )
                           ξ i (bi ; N , λ, w) ≡ bi − h(wi ) + λ
                                                                             gMi (bi |w, N )
is increasing in bi .
    This may not be possible, especially within a restricted class of utility functions. To see this,
again consider the one-parameter CRRA example and suppose that the vector W takes on only
two values, w0 and w00 . Then equilibrium requires that for all α ∈ [0, 1]
                                      GMi (bα,w00 ,N |w00 , N )                               GMi (bα,w0 ,N |w0 , N )
uα = bα,w00 ,N − h(wi00 ) + (1 − c)                             = bα,w
                                                                                 0
                                                                       0 ,N − h(w ) + (1 − c)
                                                                                 i                                    .
                                      gMi (bα,w00 ,N |w00 , N )                               gMi (bα,w0 ,N |w0 , N )
Thus
                                      bα,w00 ,N − bα,w0 ,N − (h(w00 ) − h(wi0 ))
                              c = 1 − G (b 0 |w0 ,N ) G (b i 00 |w00 ,N         )
                                                                                  .                             (6.28)
                                       Mi α,w ,N              Mi α,w ,N
                                      gM (b     0 |w0 ,N ) − gM (b   00 |w00 ,N )
                                              i   α,w ,N             i   α,w ,N

For a given quantile α, rationalizing the data with the CRRA model requires that there exist
a function h (·) such that this c lies in the interval [0, 1). If no such h (·) exists, then we can
immediately reject the CRRA model. Of course, (6.28) must hold for all quantiles α. Unless the
ratio on the right side of (6.28) is invariant to the quantile α, the model will be rejected. Thus, a

                                                           77
more flexible specification of risk preferences will typically be required to rationalize the observed
bidding data when there are bidder-specific covariates shifting wealth or valuations.
      Of course, there is more than one way to relax the structure imposed by (6.26) and CRRA.
Campo, Guerre, Perrigne and Vuong (2002) maintain the CRRA specification above but assume a
functional form for the eﬀect of covariates on valuations only at a single quantile of the distribution
of valuations. By leaving the eﬀects at other quantiles unspecified, the problem that the data may
reject the model is avoided. We refer readers to their paper for details, as well as an estimation
approach.77
      Another possible approach to identification is to exploit exogenous variation in the number
of bidders (e.g., Bajari and Hortaçsu, 2004a). Such exogenous variation changes the equilibrium
probability that each given bid wins and, therefore, changes the lotteries available to bidders. Note
that unlike the eﬀect of a covariate on the utility gain from winning, this variation in the probability
of winning can be determined directly from the equilibrium bid distribution for each N .                         Using
                                                                                                             0
             ¯ ¯ as an example, suppose that there are two groups of bidders, N and N , with
the CRRA model
             ¯ 0¯
|N | = n and ¯N ¯ = n + 1. Letting bα,N be the αth quantile of GBi (bi |N ), equilibrium requires
                                                                                             0
                                 1 − c GBi (bα,N |N )            1 − c GBi (bα,N 0 |N )
                     uα = bα,N +                      = bα,N 0 +
                                 n − 1 gBi (bα,N |N )              n gBi (bα,N 0 |N 0 )

so that
                                                       bα,N 0 − bα,N
                                  c=1−                                               .
                                                                   G (b     |N 0 )
                                             1 GBi (bα,N |N )    1 Bi α,N 0
                                            n−1 gBi (bα,N |N ) − n gB (b      0
                                                                         0 |N )
                                                                       i   α,N

Again, for a given α, this c may not lie in [0, 1) and, further, the right-hand side may not be
constant in α as required. Thus, exogenous variation in participation may allow us to reject the
CRRA model (or other parameterized utility functions). This suggests some hope of identifying
preferences. In the completely general case, one would need to find a utility function such that
                                            µ                      ¶
                                                1 GBi (bα,N |N )
                                bα,N + λ−1
                                              n − 1 gBi (bα,N |N )
                                                                                         G       (b   |N )
is invariant to N for each α. Depending on how much variation in bα,N and gBBi(bα,N
                                                                                α,N
                                                                                    |N ) is induced
                                                                                             i
by variation in N and α, it may be possible to identify the entire utility function.

6.4.2      Asymmetric Preferences

As we discussed at the start of Section 6, in many cases the econometrician is faced with several
modeling alternatives when attempting to rationalize a given distribution of observables. So far,
 77
      Bajari and Hortaçsu (2004) propose an alternative estimation approach.


                                                         78
we have assumed that all bidders had the same preferences (either risk averse or risk neutral), but
we have allowed distributions of valuations to vary across bidders. This allows us to reconcile bid
distributions that vary across bidders. However, a natural alternative is that the distribution of
valuations is the same for all bidders, but preferences diﬀer. As mentioned above, in an ascending
auction, behavior depends only on a bidder’s valuation for the object, so it is impossible to distin-
guish these two cases. In a first-price auction with a fixed number of bidders, it is also diﬃcult to
                                                             G            (bi |bi )
distinguish these cases: in particular, as long as g Mi |Bi(bi |bi ) is increasing for each i, it is possible
                                                                 Mi |Bi

to rationalize bidding data using a model with homogeneous preferences. More generally, following
the logic outlined above, there will generally exist homogeneous preferences with suﬃcient risk
aversion such that                                 µ                                  ¶
                                              −1         1 GMi |Bi (bi |bi )
                                       bi + λ
                                                       n − 1 gMi |Bi (bi |bi )
is increasing for all i.
       However, there may be settings in which institutional information leads the econometrician
to believe that a model with heterogeneous preferences is more natural than a model with het-
erogeneous value distributions. Campo (2002) has recently explored a model in which diﬀerent
bidders are permitted to have diﬀerent preferences even though they draw their valuations from
the same distribution. For α ∈ [0, 1] let ui,α and bi,α denote the αth quantile of bidder i’s valuation
and bid distributions, respectively. Generalizing our notation from above to allow bidders to have
heterogeneous preferences represented by ωi (·), let λi (s) ≡ ω i (s)/ω 0i (s). Then, for all i, j, α, we
have
                                                                  µ  ¶
                                                         GMi (bi,α )
                                     ui,α   =   bi,α + λ−1
                                                        i
                                                         gM (bi,α )
                                                        µ i          ¶
                                                      −1 GMj (bj,α )
                                     uj,α   = bj,α + λi                .
                                                         gMj (bj,α )

Since the distributions of valuations are assumed to be the same across bidders, it follows that
                                  µ             ¶             µ             ¶
                                −1 GMi (bi,α )              −1 GMj (bj,α )
                        bi,α + λi                 = bj,α + λj                 .               (6.29)
                                    gMi (bi,α )                 gMj (bj,α )

Campo (2002) shows that a set of observed bid distributions that are independent and satisfy
standard regularity conditions can be rationalized using this model if and only if (i) there exist
functions λ1 (·) , .., λn (·) such that (6.29) holds for every quantile α ∈ [0, 1] where, for each i,
                                                     ³ G (b ) ´
λi (0) = 0, λ0i (·) ≥ 1, and (ii) ξ i (b) = bi + λ−1
                                                  i
                                                        Mi i
                                                       gM (bi ) is strictly increasing. There is no guarantee
                                                             i
that these conditions can be satisfied, because (6.29) must hold for all α ∈ [0, 1] .78 Indeed, Campo
  78
    Campo (2002) requires the condition λ0i (·) ≥ 1 in order to guarantee that the induced preferences satisfy risk
aversion; in fact, existence of an equilibrium in increasing strategies requires a slightly weaker condition, namely


                                                           79
(2002) provides an example where the conditions cannot be satisfied, and establishes that the set
of bid distributions that can be rationalized using her model is a strict subset of those that can
be rationalized using the model with homogeneous preferences and heterogeneous distributions of
valuations.
    Rather than analyze conditions under which risk preferences are nonparametrically identified,
Campo (2002) takes a semi-parametric approach, with preferences given by ω (·; θi ) (implying an
associated λ (·; θi )), where θi is a finite dimensional parameter. To analyze identification, observe
that for all i, j, α, α0 , we have
                                                                 µ                ¶
                                                            −1  GMi (bi,α )
                                      ui,α =      bi,α + λ                   ; θi
                                                                gMi (bi,α )
                                                              µ                    ¶
                                                           −1 GMj (bj,α )
                                      uj,α =      bj,α + λ                    ; θj
                                                                 gMj (bj,α )
                                                               Ã      ¡      ¢ !
                                                           −1    GMi bi,α0
                                     ui,α0 =      bi,α0 + λ          ¡       ¢ ; θi
                                                                  gMi bi,α0
                                                               Ã      ¡       ¢ !
                                                            −1   GMj bj,α0
                                     uj,α0 =      bj,α0 + λ           ¡      ¢ ; θj .
                                                                  gMj bj,α0

Suppose, for example, that each θi is a scalar. Since by assumption ui,α = uj,α and ui,α0 =
uj,α0 , for a given pair of quantiles α and α0 , this is a system of four equations in four unknowns
¡                      ¢
 ui,α , ui,α0 , θi , θj , so that θi and θj are identified using data from just two quantiles. Once θi
and θj are known, FU (·) is uniquely determined by the first-order conditions and the observed
distribution GMi (·). Similarly, once FU (·) is identified, the first-order conditions and GMk (·)
determine θk for k 6= i, j. Campo (2002) considers the case of CRRA preferences discussed above
and gives the nonsingularity conditions for the system of equations above (restrictions on the
    ¡                 ¢
pair GMi (·) , GMj (·) ) that ensure identification in that case. It is crucial that there are some
asymmetries in the bid distributions. She proposes a parametric estimation approach. We refer
readers to her paper for details.
    Since it is possible to identify θi and θj using data from just two quantiles of the bidding
distribution when θi is a scalar, there is no guarantee that, given observed bid distributions, a
particular functional form can rationalize the data at every quantile. Indeed, the example considered
by Campo (2002) of CRRA preferences ω i (u) = u1−ci requires the existence of constants ci , cj on
that ln(ωi (·)) is concave in the relevant region, which is guaranteed if λ0i (·) ≥ 0. To see why log-concavity of ωi (·)
is important, note that in an IPV auction, a bidder’s objective function is ω i (bi − ui )GMi (bi ). Maximizing this is
                                                                                         2
equivalent to maximizing its logarithm; but, if ln(ωi (·)) is strictly convex, then ∂b∂i ∂ui ωi (bi − ui ) < 0, so that bidders
with higher valuations choose lower bids.




                                                              80
[0, 1) such that
                                           µ                 ¶                        µ                 ¶
                                               GMi (bi,α )                                GMj (bj,α )
                        bi,α + (1 − ci )                         = bj,α + (1 − cj )                         .               (6.30)
                                               gMi (bi,α )                                gMj (bj,α )

Suppose, for example, that there are just two bidders and that B1 is uniformly distributed on [0, 1].
Then, (6.30) becomes, for all α ∈ [0, 1],
                                                    µ              ¶
                                                        GB2 (α)
                                 α + (1 − c1 )                         = (2 − c2 )G−1
                                                                                   B2 (α) .                                 (6.31)
                                                        gB2 (α)

Clearly, this places strong restrictions on GB2 (·) . For example, this would rule out a distribution
of the form GB2 (b2 ) = bγ2 with supp[B2 ] = [0, 1] (unless γ = 1, which would violate the assumption
of asymmetric bid distributions).
         Finally, we note that even when the data can be rationalized by both the homogeneous preference-
heterogeneous valuations and the heterogeneous preference-homogeneous valuations models, it may
be possible to extend the testing approaches described above that exploit exogenous variation in
participation or other exclusion restrictions. When each model is identified for fixed N , exogenous
variation in N leads to over-identifying restrictions. In general, even if two diﬀerent models ra-
tionalize the same data for fixed N , the out-of-sample predictions of the models for N 0 6= N will
diﬀer between the two models. When data from auctions with both N and N 0 are observed, the
out-of-sample predictions might be tested.


7         Common Values Auctions
While we have discussed a wide range of private values models in the preceding sections, in
many applications a common values model may seem more natural. Recall that we use the term
“common values” to refer to a broad class of models in which information about each bidder’s
valuation is dispersed among bidders (see Section 2).We emphasize, however, that the presence of
factors aﬀecting all bidders’ valuations need not imply common values. For example, if for each

                                                    Xi = Ui = V0 + εi

this is a private values specification despite the “common” factor V0 . Indeed, in this example each
bidder knows his own valuation with certainty.79 The presence of V0 does introduce correlation of
bidders’ valuations and of bidders’ information, and even causes one bidder’s signal to be correlated
with another’s valuation; however, it does not introduce common values because no opponent has
    79
     This is not essential for a private values environment. For example, if Ui = Xi + i with                   i independent of Xj
for all j 6= i, this remains a private values setting.


                                                                 81
information that is relevant to a bidder’s assessment of his own valuation, given that he has observed
his own signal. The critical distinction concerns the nature of bidders’ private information. When
each bidder’s private information concerns only idiosyncratic determinants of his own valuation,
this is a private values setting.
       Nonetheless, many auction environments seem likely to fall in the common values category.
Often the good for sale will not be consumed immediately (or the procurement contract being bid
for will not be fulfilled immediately), and bidders may have diﬀerent information about future states
of the world–e.g., market conditions or the supply and demand of substitute objects.                 In some
applications bidders will naturally have access to diﬀerent information. A bidder might conduct her
own seismic survey of an oil tract or might learn about market conditions from her own customers
and suppliers. Furthermore, even if bidders have access to the same market data, they may have
diﬀerent algorithms or rules-of-thumb for using this information to form beliefs about the object’s
value. The output of one bidder’s algorithm (i.e., its signal) might then be useful to another bidder
in assessing her own valuation even after seeing the output of her own algorithm. In such cases it
may be appropriate to model bidders as having diﬀerent private information of a common values
nature.
       Aside from the potential prevalence of common values in practice, common values models are
also of particular interest because they provide and example of a market environment in which
adverse selection may play an important role. In a private values auction, bidders need only to
follow a simple dominant (“bid your value”) strategy in an ascending auction or to respond optimally
to a distribution of opposing bids in a first-price auction.        In a common values auction, bidders
must understand the strategies that underlie the competing bids in order to make correct inferences
about their informational content; in particular, bidders must account for the information that
would be implied by their winning the auction in order to avoid the winner’s curse. An important
contribution of the empirical industrial organization literature has been to confirm some of the
fairly subtle equilibrium predictions of common values auction models.80 However, a number of
positive and normative questions depend not just on whether bidder behavior is broadly consistent
with theory, but on the exact structure of demand and information.
       For example, typically the seller or auctioneer has some discretion over the auction rules. As
first demonstrated by Milgrom and Weber (1982) for symmetric common values environments,
the information revealed publicly by losing bidders’ exits in an ascending auction reduces both
the severity of the winner’s curse and the informational rents obtained by the winner, leading to
higher expected revenues than with a first-price sealed-bid auction. With asymmetries, first-price
  80
    Examples include Hendricks, Porter and Boudreau (1987), Hendricks and Porter (1988), Hendricks, Porter and
Wilson (1994), Athey and Levin (2001), and Haile (2001).


                                                     82
auctions may allocate the good ineﬃciently; however, they tend to raise more revenue in private
values settings, may be less susceptible to collusion (detection and response to defections are more
diﬃcult than in an ascending auction), and may be less costly to administer. The choice of auction
format also aﬀects bidder entry when bidders are asymmetric (Klemperer (2002), Athey, Levin,
and Seira (2004)). In trading oﬀ these factors, a seller must understand the underlying structure
of bidder demand and information that determines the significance of each factor. Even within an
auction format, the joint distribution of signals and valuations is important for positive questions
(e.g., the division of surplus) and for design issues (e.g., the optimal reserve price, the optimal entry
fee, and whether restrictions on participation would be profitable).81


7.1      Limits of Identification with a Fixed Number of Bidders

In a common values environment, identifying the joint distribution FX,U (·) requires substantial
restrictions on the underlying structure, and/or data beyond bids from a fixed environment. To
suggest why, observe that in common values auctions the primitives of the model involve two
diﬀerent random variables for each bidder i: Xi and Ui . Hence, the joint distribution FX,U (·)
governs 2n random variables, yet an auction will reveal at most n bids.82 Even in the special case
of pure common values, where Ui = U0 for all i, the primitive of interest, FX,U0 (·) has dimension
n + 1. So some additional structure will be necessary to obtain identification.
       We begin by considering first-price auctions. One convenient normalization of signals (recall
that this is without loss of generality) is83

                                       E[Ui |Xi = max Xj = x, N ] = x.                                          (7.1)
                                                      j6=i

With this normalization, (2.3) and the first-order condition (2.4) imply

                                                                  GMi |Bi (bi |bi ; N )
                                 vi (xi , xi ; N ) = xi = bi +                          .                       (7.2)
                                                                  gMi |Bi (bi |bi ; N )

In Section 3.2 we discussed the identification and estimation of the distribution of the random
variable
                                                   GMi |Bi (Bi |Bi ; N )
                                            Bi +                         .
                                                   gMi |Bi (Bi |Bi ; N )
  81
     In a common values auction, restricting participation reduces the severity of the winner’s curse, leading to more
aggressive bidding. This can result in higher expected revenues despite the presence of fewer bidders, depending on
the underlying distributions (e.g., Smiley (1979), Matthews (1984), Hong and Shum (2002)).
  82
     Note that a normalization of signals does not change this argument, since the normalization cannot address the
correlation between signals and valuations.
  83
     Note, however, that this normalization cannot be maintained if N varies.




                                                             83
All that changes when we consider common values settings is the interpretation of this distribution:
using (7.2) we now interpret it as the distribution of the random variable vi (Xi , Xi ; N ).
   This distribution alone will be suﬃcient for some questions of interest (see, e.g., Section 8),
but certainly not all. In particular, it does not provide identification of the joint distribution
FU,X (·). Consider the case in which one observes all bids from auctions with n symmetric bidders.
Under the private values assumption, v(Xi , Xi ; n) = Xi = Ui , and the joint distribution FU (·)
is just identified (see Section 3). Under the common values assumption the joint distribution of
(v(X1 , X1 ; n), .., v(Xn , Xn ; n)) is FX (·) under the normalization (7.1).   Since this distribution is
just identified when n is fixed, it follows that it is impossible to distinguish common values from
private values based on bidding data from first-price auctions with no reserve price and a fixed
number of bidders (Laﬀont and Vuong, 1996; Guerre, Perrigne, and Vuong, 2000).                Thus, it is
important to emphasize that any conclusions from data from a fixed set of bidders (and with no
reserve price) rely on a maintained assumption of common values or private values. For example,
it might be possible to justify a wide range of reserve prices as optimal for the seller under diﬀerent
assumptions about FU,X (·) that are consistent with the identified marginal distribution FX (·).
   Ascending auctions are even more diﬃcult in the common values setting. First, just as in a first-
price auction, it would be impossible to distinguish common values from private values using a data
set with a fixed number of bidders, even if all bids (including the planned exit price of the winner)
were observed. Any observed distribution of bids could simply be equal to the distribution of
private values for the bidders (Laﬀont and Vuong, 1996). Second, exactly as in the case of a private
values ascending auction, the unobservability of the winner’s planned exit price can challenge even
the identification of FX (·). Further, while a normalization like (7.1) can be applied to signals
in the initial phase of an ascending auction (the period before any bidders drop out), no single
normalization can induce the simple strategy β i (xi , n) = xi throughout the auction, since bidders
modify their strategies each time an opponent exits. The exact forms of these modifications depend
on the joint distribution of signals and valuations. While we might hope that this dependence
would enable observed bids to provide information about this joint distribution, it also creates
serious challenges. Finally, further complications arise from the fact that, when n > 2, there is a
multiplicity of symmetric equilibria in weakly undominated strategies in common values auctions
(Bikhchandani, Haile and Riley, 2002), implying that there is no unique interpretation of bids below
the transaction price.
   The following result from Athey and Haile (2002) establishes that the common values model
is generally not identified in ascending auctions. Here we ignore the multiplicity of equilibria and
assume a special case of a pure common values model in which signals are i.i.d. Even this very
restrictive common values model is not identified.

                                                    84
Theorem 7.1 In an ascending auction, assume the pure common values model, i.i.d. signals Xi ,
and select the equilibrium characterized by Milgrom and Weber (1982). With n fixed, the model is
not identified (even up to a normalization of signals) from the observable bids.

Proof. Take n = 3 and consider two models. In both, signals are uniform on [0, 1]. In the first,
the value of the good is                                                    P
                                                                             i xi
                                               u0 = u(x1 , x2 , x3 ) =              ,
                                                                             3
while in the second model
                                                                 x(1:3) x(2:3) x(3:3)
                                      u0 = û(x1 , x2 , x3 ) =         +      +       .
                                                                   3      6      2
Because in both models E[U0 |X1 = X2 = X3 = x] = x, equilibrium bidding in the initial phase of
the auction is identical in the two models in the Milgrom-Weber equilibrium (see Section 2.2.2);
           (1:3)          (1:3)
i.e., GB           (b) = FX       (b) = 1 − (1 − b)3 in both cases. Similarly, since b(2:3) = E[U0 |X (1:3) =
b(1:3) , X (3:3) = X (2:3) = x(2:3) ], the fact that û(x, y, y) = u(x, y, y) for all x and y implies that
 (2:3)                                                                      (1:3)           (2:3)
GB       (·|B (1:3) ) is identical under the two models. Since GB                   (·) and GB      (·|B (1:3) ) completely de-
termine the joint distribution of the observable bids, the two models are observationally equivalent.
Q.E.D.

      This is a strong negative result for common values ascending auctions. Even ignoring the equi-
librium selection problem and possible doubts about the interpretation of losing bids in an ascending
auction, this most restrictive of common values models is not identified. This nonidentification is
important for policy. Continuing the example from the proof of Theorem 7.1, consider the simple
problem of setting an optimal reserve price for a second-price sealed-bid auction.                              Recalling the
participation threshold (2.1), the optimal reserve price solves
                                                Z 1
                      ∗             ∗      2
   max 3(1 − FX (x (r, 3)) FX (x (r, 3)) r +            v (y, y; 3) 6fX (y) (1 − FX (y)) FX (y) dy.
       r                                                         x∗ (r,3)

By construction, v (x, x; 3) is the same for all x in the two models.                            However, for any r, the
participation threshold x∗ (r, 3) is lower in the second model, due to the reduced dependence of
each Ui on X−i when Xi is maximal.                     Hence, the objective function above diﬀers for the two
models and (as can be confirmed directly) implies diﬀerent optimal reserve prices.
      We will see in Section 8 that variation in the number of bidders can be useful for overcoming
at least some of these limitations. In particular, this variation can be suﬃcient to enable discrim-
ination between private and common values models. Whether this kind of variation can go farther
to enable nonparametric identification of a common values model is a question not yet explored.
Below we will consider identification through additional structure and through additional data.84
 84
      Parametric models of common values auctions have been estimated by, e.g., Smiley (1979), Paarsch (1992a),


                                                                 85
7.2     Pure Common Values

Given the negative identification results obtained thus far, it is natural to consider whether addi-
tional assumptions can alleviate the problem. One possible approach is to restrict attention to the
pure common values model, where Ui = U0 ∀i.
   In the pure common values model, the joint distribution FX,U (·) governs n+1 random variables
(U0 , X1 , . . . , Xn ); however, at most n bids are revealed in a first-price auction, and only n − 1
“bids” are revealed in the standard model of an ascending auction. This suggests that the pure
common values assumption alone will not be suﬃcient to obtain identification, and that either
additional structure or additional data will be needed. Below, we explore examples of both: we
first consider additional restrictions on FX,U0 (·) , and then consider cases in which the realization
of U0 is observable ex post.



7.2.1     Identification with Additional Structure: The Mineral Rights Model

A special case of the pure common values model given considerable attention in the literature
is the symmetric “mineral rights model” defined in Section 2.1.       Here, bidders’ signals are i.i.d.
conditional on the realization of the common value U0 .        As the name suggests, this model is
motivated by auctions in which firms bid for the right to extract oil from an oﬀshore tract. All
firms may place the same value on the oil, since it is sold in a common market, but none knows
how much oil (if any) there is. Each receives a seismologist’s report, providing a (conditionally
independent) noisy signal of U0 . This structure may be natural in other applications as well.
   Even with this structure, identification from bid data is not straightforward since this requires
somehow separating the variation in bids due to the randomness of U0 from that due to the ran-
domness of Xi conditional on u0 . One possible approach is to assume a separable functional form
like Xi = U0 + Ai , where the “errors” Ai mutually independent conditional on U0 . This can be
useful, although the additive structure need not survive the normalization (7.1) in general. Put
diﬀerently, while it will be useful for the left-hand side of the first-order condition (7.2) to have a
separable form, one must be careful about what underlying structures on (Xi , U0 ) can deliver this
separability.   This is a question that has been explored by Li, Perrigne and Vuong (2000).         To
discuss their approach, we first define two (nested) special cases of the symmetric mineral rights
model.

Linear Mineral Rights (LMR): Ui = U0 . In addition, for each n there exist two known con-
        stants (C, D) ∈ R × R+ and random variables (A1 , . . . , An ) with joint distribution FA (·)
Hong and Shum (2002, 2003), and Bajari and Hortaçsu (2003a).


                                                    86
         such that, with the normalization E[U0 |Xi = maxj6=i Xj = x, n] = x, either (i) Xi =
         exp(C)·(U0 ·Ai )D ∀i, with (Ai , U0 , Xi ) non-negative; or (ii) Xi = C +D(U0 +Ai ) ∀i. Further,
         conditional on U0 , the components of A are mutually independent and identically distributed.

LMR with Independent Components (LMR-I): In the LMR model, (U0 , A) are mutually
         independent, with all Ai identically distributed.

       Li, Perrigne, and Vuong (2000) focus on the LMR-I model and provide examples satisfying its
assumptions. Under the LMR-I model, taking case (ii), (7.2) simplifies to

                                                                 GMi |Bi (bi |bi ; n)
                                    C + D(u0 + ai ) = bi +                            .                             (7.3)
                                                                 gMi |Bi (bi |bi ; n)

Since C and D are known and the right-hand side of (7.3) is observable, it follows that the joint
distribution of (U0 + A1 , .., U0 + An ) is identified from a data set containing all bids in first-price
auctions. Li, Perrigne and Vuong (2000) note that standard deconvolution results, such as those
used in the literature on measurement error (see Section 6.1.2), can then be used to separately
identify the distributions FU0 (·) and FA (·) .85

Theorem 7.2 Assume that for all i, the characteristic functions ψ U0 (·) and ψ Ai (·) of the random
variables U0 and Ai are nonvanishing. If all bids are observed in a first-price auction, then the
LMR-I model is identified.

       Even with these kinds of strong assumptions, identification is problematic when some bids are
unobserved. Bids reveal realizations of order statistics of the form U0 + A(i:n) . Since order statistics
are correlated even when the underlying random variables are independent, the identification ap-
proach based on the measurement error literature followed by Li, Perrigne and Vuong (2000) fails,
unless all order statistics are observed (impossible in an ascending auction).

7.2.2      Identification and Testing when Ex Post Values are Observable

In some applications, an ex post measure of the realized common value u0 will be observable to
the econometrician.         One notable example is an U.S. outer-continental-shelf auction of drilling
rights, where the quantities of oil and other minerals extracted from a tract are metered (e.g.,
Hendricks and Porter, 1988; Hendricks, Pinkse and Porter 2003). Another example is a “scaled
  85
      Février (2004) has recently proposed an interesting alternative restriction of the mineral rights model that enables
identification. He considers the case in which, conditional on u0 , each Xi has support [u, u0 ] and density fx|u0 (·) =
  h(·)
H(u0 )
        for some function H (·) with derivative h (·) satisfying H (u) = 0. With this structure, conditional on having
the highest signal, there is no information in the signals of one’s opponents. He shows that this structure enables
identification up to scale.


                                                           87
sale” timber auction, common in the U.S. and Canada, where the quantity of each species of timber
extracted from a tract is recorded by an independent agent at the time of harvest (e.g., Athey and
Levin, 2001). In other cases, resale prices can provide measures of realized values (e.g., McAfee,
Takacs, and Vincent (1999)). Such additional data can be helpful in the mineral rights model.86
In practice, the measures of u0 available may be only imperfectly correlated with the true value to
the bidders; we discuss this possibility below.

First-Price Auctions When we impose the structure of the symmetric pure common values
model, the first-order condition (7.2) and the normalization (7.1) give
                       ∙                        ¸
                                                              GMi |Bi (bi |bi ; n)
                     E U0 |Xi = max Xj = xi , n = xi = bi +                         .                            (7.4)
                                  j6=i                         gMi |Bi (bi |bi ; n)

When all bids and the realization of U0 are observed, (7.4) enables identification of the joint
distribution FX,U0 (·).
       With knowledge of FX,U0 (·), it is possible to perform counterfactual experiments, quantify the
extent to which information is dispersed among the bidders, and characterize the magnitude of the
“winner’s curse.” For example, it is interesting to examine the diﬀerences
                                                ∙                        ¸
                         E [U0 |Xi = xi , n] − E U0 |Xi = max Xj = xi , n                                        (7.5)
                                                                     j6=i

and                                                ∙                             ¸
                            E [U0 |Xi = xi , n] − E U0 |Xi = xi , max Xj ≤ xi , n                                (7.6)
                                                                          j6=i

since these provide a measure bidders’ equilibrium responses to the winner’s curse under the pure
common values assumption.87
       Hendricks, Pinkse and Porter (2003) were the first to suggest this and also proposed a test of
equilibrium bidding in this model. Let
                                                 ∙                             ¸
                               ζ(bi , bj , n) = E U0 |Bi = bi , max Bj = bj , n .                                (7.7)
                                                                   j6=i
  86
     Smiley (1979) was the first to suggest the value of such information. In his application he did not have access to
an ex post measure and instead explored use of a noisy ex ante measure.
  87
     Hendricks, Pinkse and Porter (2003) point out that a positive value for the diﬀerence in (7.6) cannot be used as
evidence against a private values assumption. The problem is that the interpretation of the empirical measure of u0
as the realized value of the good relies on the pure common values assumption. For example, consider a symmetric
independent private values environment and suppose the measured “ex post value” u0 is actually just maxj uj , i.e.,
the value to the winner. Then the diﬀerence (7.6) is
                                                                                         
                           E max Uj |Ui = ui , n − E max Uj |Ui = ui , max Uk ≤ ui , n
                                j                         j                      k6=i

which is positive.   We will discuss approaches that can be used to discriminate private from common values models
in Section 8.


                                                          88
When the equilibrium bid function β(·; n) is strictly increasing, β(xi ; n) = bi implies
          ∙                       ¸           ∙                                          ¸
       E U0 |Xi = max Xj = xi , n = E U0 |β(Xi ; n) = max β(Xj ; n) = β(xi ; n), n
                    j6=i                                       j6=i
                                              ∙                          ¸
                                       = E U0 |Bi = max Bj = bi , n
                                                                                    j6=i
                                                            = ζ(bi , bi , n).

Thus, the first-order condition (7.4) can be written

                                                                    GM|B (bi |bi ; n)
                                            ζ(bi , bi , n) = bi +                     ≡ ξ(bi , n).                                    (7.8)
                                                                    gM|B (bi |bi ; n)

Note that because the joint distribution of (U0 , B,N ) is observable, ζ(bi , bi , n) is identified directly
through equation (7.7). No behavioral assumption is required for this identification: ζ(bi , bi , n)
is simply a conditional expectation of the observable U0 given that the observable bids satisfy
Bi = maxj6=i Bj = bi . Since ξ(bi , n) is also identified from the bidding data under the assumption
of equilibrium bidding, the overidentifying restriction ζ(bi , bi , n) = ξ(bi , n) can be tested.
   To examine the diﬀerences (7.5) and (7.6) empirically, Hendricks, Pinkse and Porter (2003) first
observe that since bi = β i (xi ; n) and bidding is strictly monotonic, these diﬀerences are equal to
the diﬀerences                                                 ∙                        ¸
                                        E [U0 |Bi = bi , n] − E U0 |Bi = max Bj = bi , n
                                                                                     j6=i

and                                                          ∙                             ¸
                                      E [U0 |Bi = bi , n] − E U0 |Bi = bi , max Bj ≤ bi , n .
                                                                                       j6=i

They suggest a univariate local linear estimator ŵ (b; n) of E [U0 |Bi = b, n], where ŵ (b; n) is the
solution for w in the problem
                                      Tn
                                      X   n                                                     µ              ¶
                                         1X                                                          b − bit
                                min                   (u0 − w − γ (b − bit ))2 1 {nt = n} K
                                w,γ
                                      t=1
                                            n                                                           h
                                                i=1

with K (·) denoting a kernel and h a bandwidth (see, e.g., Loader, 1999).                                       A similar estimator
for E [U0 |Bi = maxj6=i Bj ≤ bi , n] is obtained by using only the winning bid bi from each auction t,
rather than all bids.
   To examine the overidentifying restriction (7.8), the right-hand side can be estimated using the
kernel methods described in Section 3.2.1. A bivariate local linear estimator v̂(b) of the conditional
expectation ζ(bi , bi , n) = E [U0 |Bi = maxj6=i Bj = bi , n] is obtained from the solution to
                Tn
                X   n                                                                            µ              ¶       µ             ¶
                   1X                                                           2                     b − bit               b − mit
      min                       (u0 − v − γ 1 (b − bit ) − γ 2 (b − mit )) 1 {nt = n} K                             K                     .
   v,γ 1 ,γ 2
                t=1
                      n                                                                                 h1                     h2
                          i=1


                                                                       89
Here mit is the maximum realized bid among i’s opponents at auction t. Hendricks, Pinkse and
Porter (2003) suggest the use of the bootstrap to construct confidence intervals for testing.
   Because of their focus on testing, Hendricks, Pinkse and Porter (2003) did not explore estimation
of the joint distribution FX,U0 (·). However, with the normalization (7.1), an estimate of
                                     ∙                             ¸
                                    E U0 |Bi = bi , max Bj = bi , n
                                                        j6=i

(such as that obtained using the first-order condition and kernel methods described in Section
3.2.1) provides an estimate of each realized xi . Combining this with the observable realizations
of U0 presumably would enable consistent estimation of the joint distribution FX,U0 (·) and/or the
associated density fX,U0 (·).

Ascending Auctions Since the common values model is over-identified in a first-price auction
when ex post values are observed, one might hope for identification in an ascending auction with
similar data. However, the partial observability of bids in ascending auctions again presents serious
challenges. Consider the case of two symmetric bidders. Recall that in an ascending auction,
β i (Xi ; n) is bidder i’s planned exit price when his opponent has not yet exited the auction. With
n = 2 there is no problem of multiple equilibria (Bikhchandani, Haile and Riley (2002)), and

                     β i (xi ; 2) = E [U0 |X1 = X2 = xi , n = 2]
                                = E [U0 |β 1 (X1 ; 2) = β 2 (X2 ; 2) = β i (xi ; 2), n = 2]
                                ≡ ζ(bi , bi , 2)

where bi = β i (xi ; 2). However, it is not possible to estimate

                                  ζ(b1 , b2 , 2) = E [U0 |B1 = b1 , B2 = b2 ]

directly from the data (as is possible in a first-price auction) since in any given auction we observe
the exit price of only one bidder. We never observe B1 and B2 in the same auction. We can observe
the joint distribution of (U0 , B (1:2) ). Under (7.1), this is also the distribution of (U0 , X (1:2) ), but
without additional structure this information is not suﬃcient to recover FU0 ,X (·) .
   If we impose the additional structure of the mineral rights model, however, then conditional
on U0 , X (1:2) is an order statistic from a sample of independent draws from FX|U0 (·). Exploiting
equation (4.1), identification is then obtained in the symmetric two bidder case when the transaction
price and ex post value are observed. Extending this approach to the case with n > 2 symmetric
bidders is possible as well, although the suitability of these extensions may be doubted in practice.
To see one possible approach, note that with the normalization

                                   xi = E [U0 |Xj = xi ∀j ∈ {1, .., n}]

                                                      90
we have B (1:n) = X (1:n) .       Exploiting (4.1) again, we could recover the distribution of Xi |U0 ,
which then delivers identification of FU0 ,X (·). This relies on the interpretation of bids implied by
the button auction model, which may be especially dubious when applied to the interpretation of the
lowest bid. To apply a similar approach using the transaction price B (n−1:n) , it is still necessary to
make use of the losing bids because the bidders themselves condition on this information. However,
it may be easier to defend an approach which incorporates the information from all bids than one
based entirely on the lowest bid. Here, we sketch one possibility.
   Fix a set of realized values for the n − 2 lowest bids at (b(1:n) , .., b(n−2:n) ). Then, the (observable)
distribution of                  ¯n                                                      o
                                 ¯
                       B (n−1:n) ¯ U0 = u0 , B (1:n) = b(1:n) , .., B (n−2:n) = b(n−2:n)

is equal to the distribution of
                                            ¯n                               o
                                    (n−1:n) ¯             (n−1:n)    (n−2:n)
                                B           ¯ U0 = u0 , B         ≥b                                   (7.9)

since bids (which are strictly increasing functions of the signals) are independent conditional on U0
in the mineral rights model. Consider the following normalization of signals:
                      h                                                             i
               x = E U0 |Xn−1 = Xn = x, B (1:n) = · · · = B (n−2:n) = inf[supp[Bi ]] .

Imposing this normalization, when b(n−2:n) = inf[supp[Bi ]], the random variable in (7.9) is equal
in distribution to
                                                X (n−1:n) |U0 = u0 .

Equation (4.1) then uniquely determines the distribution of Xi |U0 and thus FU0 ,X (·) , since U0 is
directly observable.
   This result is not as strong as one might hope for. It relies on an interpretation of the losing
bids in an ascending auction (although it is not essential that the bidders use Milgrom and Weber’s
(1982) equilibrium) and on an assumption that the econometrician’s inferences about exit prices
match those that the bidders make during the auction. Furthermore, the identification argument
relies on the tails of the distribution of bids. In particular, building a nonparametric estimator based
on this argument would seem to require an estimate of the distribution of B (n−1:n) conditional on
both the ex post value u0 and the event that n − 2 losing bids are increasingly close to the bottom
of the support of the bid distribution.          Whether this kind of approach can work well in sample
sizes typically available has not been investigated.

Biased or Noisy Observations of Ex Post Values So far in this section we have assumed that
the econometrician observes the true realization of U0 . In the case of an oil auction, for example,

                                                        91
this requires that the oil extracted is measured without error and that the econometrician has
accurate measures of all costs (including opportunity costs) incurred in extracting the oil. These
may be strong assumptions in some applications, so it is useful to consider the degree to which they
can be relaxed. With the exception of Yin (2004), which does not fully address identification, the
literature has not analyzed the issue of imperfect measures of ex post values.88 Here, we present
some initial results.
       Consider a first-price auction in which all bids are observable and suppose the available measure
of U0 is
                                               Ũ0 = γ 0 + γ 1 U0 + ε                                      (7.10)

where γ 0 and γ 1 are fixed parameters, unknown to the econometrician, and ε is an unobserved
random variable satisfying E [ε|X = x] = 0 for all x. Recall that, given the normalization (7.1),
FX (·) is identified from the bidding data alone in this setting. Since we observe Ũ0 in every auction,
the distribution FX,Ũ0 (·) is identified as well. With this, we can compute

                                        η(x) ≡ E[Ũ0 |Xi = max Xj = x].
                                                                j6=i

Given (7.10), the normalization (7.1), and E [ε|X = x] = 0, we also have

                             η(x) = γ 0 + γ 1 E[U0 |Xi = max Xj = x] = γ 0 + γ 1 x.                        (7.11)
                                                             j6=i

Since η(·) is identified, the joint distribution of (η (X) , X) is identified, as is the bias in the measure
of the common value, determined by the parameters γ 0 and γ 1 .
       Identification of γ 0 , γ 1 , and FX,Ũ0 (·) implies identification of quantities such as

                                    E[U0 |Xi = x] = E[Ũ0 − γ 0 |Xi = x]/γ 1 ,

and
                     E[U0 |Xi = x, max Xj ≤ x] = E[Ũ0 − γ 0 |Xi = x, max Xj ≤ x]/γ 1 ,
                                     j6=i                                   j6=i

so that the diﬀerences (7.5) and (7.6) discussed above are identified, for example. Unfortunately,
unless ε is degenerate, the variance of U0 is not identified, nor is the joint distribution FX,U0 (·) . In
the setting studied by Yin (2004), where Ũ0 is the mean estimate from a survey, the assumption
that ε is degenerate may be a reasonable approximation when the number of survey respondents
per auction is large.
  88
    Yin (2004) obtained descriptions of items auctioned on eBay and recruited volunteers to make subjective as-
sessments of the value of the objects. The mean assessment was then treated as a potentially biased proxy for U0 .
Smiley (1979, Appendix), explored the use of a noisy ex ante measure of U0 within a parametric model.




                                                        92
         In ascending auctions, the analysis is more complex. Let us focus on the case of a pure CV
model with two bidders. Let us maintain the assumption E [ε|X = x] = 0 for all x, and in addition,
assume that (X1 , . . . , Xn ) are independent conditional on Ũ0 . The joint distribution of (B (1:2) ,Ũ0 )
is then identified and, under (7.1), this is equal to the joint distribution of (X (1:2) ,Ũ0 ). Given that
X1 is independent of X2 conditional on Ũ0 , the parent distribution FX (·) is identified using (4.1),
so that the joint distribution of (X, Ũ0 ) is identified. This completely determines η(·), which in
turn yields identification of γ 0 and γ 1 through (7.11).
         Of course, the assumption that X is independent conditional on Ũ0 may be strong, especially if
Ũ0 is a noisy measure of U0 . In practice this may be most defensible when ε is degenerate, so that
Ũ0 is a deterministic function of U0.


8         Private versus Common Values: Testing
Negative identification results for common values models provide one important motivation for
formal tests that could distinguish between common and private values models. Distinguishing
private values from common values was, in fact, the goal behind Paarsch’s (1992a) pioneering work
on structural empirical approaches to auctions.             The distinction between the two paradigms is
central to our understanding of behavior in auction markets and has important implications for
market design. For example, revenue superiority of an ascending auction relative to a second-price
sealed-bid auction in symmetric settings (Milgrom and Weber, 1982) holds only in a common values
environment.        Furthermore, a common values environment is one with adverse selection. There is
relatively little evidence on the empirical significance adverse selection, and an examination of the
prevalence of common values in auctions might be suggestive of the nature of private information
in other market environments as well.
         It might be surprising that questions about the qualitative nature of private information could
be answered at all empirically.       In fact, early approaches to testing based on reduced-form rela-
tionships between bids and the number of bidders were eventually discovered to be invalid. With
the structural approach proposed by Paarsch (1992a), it was possible to test particular common
values or private values models, but only with maintained parametric distributional assumptions.
More recently, Laﬀont and Vuong (1996) have pointed out that private values and common val-
ues models are empirically indistinguishable, suggesting that testing was impossible (see Section
7.1).89 However, they did not consider the possibilities created by variation in the number of bid-
ders or a binding reserve price. Below we will show how either of these can oﬀer approaches for
    89
   This can be thought of as a nonidentification result for the aﬃliated values model, which nests the private and
common values models.



                                                       93
discriminating between private and common values.
       In the case of variation in the number of bidders, the idea is simple. The winner’s curse is present
only in common values models and becomes more severe as more competitors are added. Having a
signal of the object’s value that is the highest among twenty implies a more severely biased signal
than does having the highest signal among two, for example. This greater severity manifests itself
as a reduction in a bidder’s expectation of his valuation conditional on winning a large auction. In
particular, while the unconditional expectation E [Ui |Xi = xi ] is invariant to the set of opponents
i faces, i’s his equilibrium bid reflects a downward adjustment

                                        E [Ui |Xi = xi ] − vi (xi , xi ; N )

that accounts for the information implied by his bid being pivotal. In a symmetric environment,
this downward adjustment is always larger when i faces more competition.
       To make this precise, suppose that the number of bidder is exogenous and let N+j denote the
set of bidders comprised of all members of N plus bidder j.90

Lemma 8.1 Suppose the number of bidders varies exogenously. With private values, vi (x, x; N ) =
vi (x, x; N+j ) for all x, N , i, j. With common values and symmetric bidders, vi (x, x; N ) >
vi (x, x; N+j ) for all x, N , i, j.

       Proof. The first claim is immediate from the fact that vi (x, x; N ) = x with private values.
With common values and symmetric bidders,
                                     ∙                               ¸
                    vi (x, x; N ) = E Ui | Xi = x, max Bk = β (x; N ) .
                                                              k∈N−i

Let m = arg maxk∈N−i Bk and suppose j ∈
                                      / N . Then

         vi (x, x; N ) = E [ Ui | Xi = x, Bm = β i (x; N ) , Bk ≤ β i (x; N ) ∀k ∈ N s.t. k 6= i, m]
                      = EXj [E [ Ui | Xi = x, Xm = x, Xk ≤ x ∀k ∈ N s.t. k 6= i, m]]
                      > E [ Ui | Xi = x, max {Xm , Xj } = x, Xk ≤ x ∀k ∈ N s.t. k 6= i, m]
                      = vi (x, x; N+j )

where the inequality follows from Definition 2.1 and the strict monotonicity of equilibrium bidding
strategies.91                                                                                             Q.E.D.
  90
     Note that because the normalization (7.1) depends on the set of bidders, we could not maintain this particular
normalization for all N . Other normalizations, e.g., xi = FXi (xi ), are of course possible.
  91
     Note that the second equality need not hold without symmetry. Conditions under which more competition
(appropriately defined) implies a more severe winner’s curse have not been fully explored.


                                                        94
       This result provides the basis for testing using variation in the number of bidders. Although
to our knowledge the proof was first given by Athey and Haile (2002) and Haile, Hong and Shum
(2003), the idea behind this result and its potential value for detecting the winner’s curse goes back
at least to Gilley and Karels (1981), who suggested regressing bids from first-price auctions on the
number of bidders as a test of a common values model. This reflected a belief that bids must increase
with n in a private values auction (since adding bidders makes the auction more competitive) but
might decline in n in a common values auction if the winner’s curse were suﬃciently severe to
overcome the competitive eﬀect of adding additional bidders (see, e.g., Brannman, Klein, and
Weiss (1987), Paarsch (1992a,b), Laﬀont (1997)). However, Pinkse and Tan (2004) have recently
shown that this is incorrect: bids may increase or decrease in n in both private values and common
values models. The regression approach might seem more promising in an ascending auction, due
to the simplicity of equilibrium bid functions in the button auction model.                  The multiplicity of
equilibria in common values auctions creates one problem. But even ignoring this (e.g., selecting
the equilibrium of the button auction given by Milgrom and Weber (1982)) this approach fails due
to the fact that the winner’s bid is never revealed. For example, in a private values auction the
                       ¡                        ¢
observable bids reveal u(1:n) , . . . , u(n−1:n) , but u(n:n) is censored. Because the distribution of
the censored valuation U (n:n) varies with n, so does the resulting censoring bias.                This makes it
impossible to discriminate between private values and common values models based on a regression
of bids on n.92
       In spite of this, and in spite of the lack of identification of many common values models, testing is
often possible. Lemma 8.1 makes use of the assumption of exogenous (to the distribution of signals
and valuations) variation in the number of bidders.               As discussed by Athey and Haile (2002)
and Haile, Hong and Shum (2003), this can be reasonable in some applications. Furthermore, it is
implied by some models of participation (see Section 6.3.2). However, the assumption of exogenous
participation is not always necessary.         Initially we will maintain this assumption to simplify the
exposition of the basic testing approaches. In Section 8.2 we discuss an approach to testing with
endogenous participation.


8.1       Testing in First-Price Auctions when All Bids are Observed

In the common values first-price auction, the first-order condition (7.2) requires that v(xi , xi ; N ) =
ξ(bi , N ). Note that both sides of this equation vary with N . However, because ξ(bi , N ) is identified,
  92
     However, as Bajari and Hortaçsu (2003a) have pointed out, the recurrence relation (8.6) below implies that with
this censoring, the average observed bid must increase in n in the dominant strategy equilibrium of a private values
button auction. While this is also possible in a common values auction, it provides a testable restriction of the
private values hypothesis.



                                                        95
it is possible to isolate the eﬀect of N on v(xi , xi ; N ) when N varies exogenously. Since v(xi , xi ; N )
does not vary with N in a private values model, it is possible to distinguish the two models, even
though FX,U (·) is not identified. To see how, let Fvi ,N (·) denote the marginal distribution of the
random variable vi (Xi , Xi ; N ) . Lemma 8.1 implies the following result.

Corollary 8.1 Assume exogenous variation in the number of bidders. Then Fvi ,N (v) is invariant
to N in a private values model for all v. In a common values model with symmetric bidders

                                             Fvi ,N (v) < Fvi ,N+j (v)                                          (8.1)

for all i, j and all v on the interior of the support of Fvi ,N (·) or Fvi ,N+j (·).

       Haile, Hong and Shum (2003) use this result to develop tests of the null hypothesis of private
values against the common values alternative.93 They focus on the case of symmetric bidders,
where Fvi ,N (·) can be more simply represented by Fv,n (·) , and (8.1) can be written

                                          Fv,n (v) < Fv,n+1 (v) ∀n, v.                                          (8.2)

Their approach involves two steps. The first is to form estimates v̂it of each v (xit , xit ; nt ) using the
methods described in Section 3.2.          The second step is to compare the empirical distributions
                                                    T nt
                                                1 XX
                                  F̂v̂,n (v) =           1 {nt = n, v̂it ≤ v}
                                               nTn t=1
                                                         i=1

for diﬀerent values of n.
       While tests of equality of distributions (or of the alternative of first-order stochastic dominance)
are common in statistics and econometrics, a complication here is the fact that only empirical
distributions of the “pseudo-values” v̂it can be compared, not those of the “values” v (xit , xit ; n).
Hence, the first-stage estimation error (which will be correlated in finite sample for nearby v̂it and
v̂jt0 ) must be accounted for. A second complication is the fact that trimming, which must be done
separately for each value of n, must be done carefully to avoid creating the appearance of a winner’s
curse when there is none, or hiding the winner’s curse in a common values model.
   Haile, Hong and Shum (2003) explore two types of tests.94 The first is a comparison of trimmed
                                                          ¡     ¢
means of each empirical distribution F̂v̂,n (·).95 For τ ∈ 0, 12 let xτ denote the τ th quantile of
the marginal distribution FX (·) and define the quantile-trimmed mean
                                      h              ¯                 i
                                                     ¯
                            µn,τ = E v (Xi , Xi ; n) ¯Xi ∈ [xτ , x1−τ ] .
  93
     They apply their tests to two types of auctions held by the U.S. Forest Service. Schneyerov (2003) has recently
applied one of their tests to data from municipal bond auctions.
  94
     Section 5 discusses several other hypotheses to which their tests may be adaptable.
  95
     The test generalizes to other finite vectors of functionals–e.g., a vector of quantiles. See Haile, Hong and Shum
(2003) for details.


                                                         96
Trimming at the same quantiles for all n fixes the set of signals xi implicitly included in each
mean. This is important since the first-order stochastic dominance relation in (8.2) extends to the
distributions of v (Xi , Xi ; n) over any fixed interval in [x, x] but need not hold for intervals that
vary with n. One can then test the hypotheses

                                                H0 :      µn,τ = · · · = µn̄                                   (8.3)
                                                H1 : µn,τ > · · · > µn̄

which are implied by Lemma 8.1.
       Let bτ denote the τ th quantile of the observed bids. Since bids are strictly increasing in signals,
µn,τ has sample analog
                                  T   n
                              1 XX
                             µ̂n,τ =     1 {nt = n, bit ∈ [bτ , b1−τ ]} v̂it .
                             nTn t=1
                                     i=1
                                                 ¡                     ¢
Haile, Hong and Shum (2003) show that the vector µ̂n,τ , . . . , µ̂n̄,τ is consistent and has a multi-
variate normal asymptotic distribution with diagonal covariance matrix Σ, enabling adaptation of a
standard multivariate one-sided likelihood-ratio test (Bartholomew (1959)). Monte Carlo evidence
suggests that size distortions may be reduced by using the bootstrap to estimate the elements of
the covariance matrix Σ.96
       The second testing approach uses a generalized version of a multi-sample one-sided Kolmogorov-
Smirnov test of equal distributions. Given a diﬀerentiable strictly decreasing function Λ (·), let
                                                     T  n
                                                 1 XX
                                 Λn (v) =                 1 {nt = n} Λ (v̂it − v)
                                                nTn t=1
                                                          i=1

and
                                                n−1
                                                X
                                       δ̄ T =         sup [Λn+1 (v) − Λn (v)]
                                                n=n v∈[v,v]

where the compact interval [v, v] is bounded away from the endpoints of the support Fv,n (·) under
the null. If Λ (·) is the smoothed step function
                                                            exp (−y/h)
                                                Λ (y) =
                                                          1 + exp (−y/h)
with h denoting a bandwidth, δ̄ T is easily interpreted as an approximation of a more familiar looking
one-sided test statistic
                                           n−1
                                           X              n                         o
                                   δT =            sup     F̂v̂,n+1 (v) − F̂v̂,n (v)
                                           n=n v∈[v,v]
  96
    The block bootstrap procedure is identical to that discussed in Section 3.2.1. Haile, Hong and Shum (2003)
point out that using the bootstrap to estimate the distribution of the test statistic itself would be diﬃcult, due to
the need to resample bids under the null hypothesis on the functions v (·, ·; n).


                                                              97
where F̂v̂,n+1 (·) and F̂v̂,n (·) denote empirical distribution functions.
   Strict monotonicity of Λ (·) and the fact that

                                    Λn (v) → E [Λ (v̂it − v) |nit = n]

uniformly in v ∈ [v, v] imply that δ̄ T → 0 under the private values null. Under the common values
alternative δ̄ T → δ > 0.      This is the basis for using δ T as a test statistic. Haile, Hong and
Shum (2003) show that for an appropriate normalizing sequence η T , the generalized Kolmogorov-
Smirnov statistic ST ≡ η T δ̄ T has a nondegenerate limiting distribution under H0 , enabling use of
subsampling for estimation of critical values (e.g., Politis, Romano and Wolf (1999)).
   Both types of test are easily adapted to the case in which bidders observe only a signal η of
the number of opponents they face before submitting their bids, as long as the econometrician also
observes (or can condition on) η. In that case estimation of pseudo-values follows the discussion
in Section 6.3.3. One could then compare the distribution of pseudo-values in auctions with higher
signals to those with lower signals.


8.2   Testing with Endogenous Participation

Haile, Hong and Shum (2003) discuss extensions of their testing approaches to cases in which bidder
participation is endogenous.     If there is a binding reserve price or a cost of preparing a bid, for
example, bidders’ participation decisions introduce truncation in the set of types submitting bids.
They show how their basic approach can still be applied in such cases by comparing estimated
distributions of v (Xi , Xi ; n), appropriately adjusted for truncation, on regions of common support.
We refer readers to their paper for details.
   A more diﬃcult case is that in which participation is aﬀected by unobserved factors that also
aﬀect valuations. This leads to two quite diﬀerent threats to the basic testing approach. First,
variation in Fv,n (·) with n will arise from variation in the unobserved factors, confounding attempts
to detect responses to the winner’s curse. For example, if auctions of goods that are more valuable
in unobserved dimensions also attract greater participation, this could mask the eﬀects of the
winner’s curse in a common values auction.           The second problem is even more fundamental:
unobserved heterogeneity threatens the identification of the distributions Fv,n (·) that underlies the
approach.    As discussed in Section 6.1.2, unobserved heterogeneity presents a serious challenge
that generally can be overcome only with additional structure.
   Haile, Hong and Shum (2003) have proposed an instrumental variables approach for such sit-
uations.    They build on an insight from Campo, Perrigne and Vuong (2003), who pointed out
that identification holds in a private values model with unobserved heterogeneity if there is a set


                                                    98
of observables Z that are suﬃcient for the unobserved factors W, in the sense that the distribu-
tion of (U1 , . . . , Un |Z,N ) is identical to the distribution of (U1 , . . . , Un |Z, W,N ). This may seem
implausible in some cases, since this essentially amounts to assuming that the unobserved factors
can be observed (or at least conditioned on) after all. However, as Campo, Perrigne and Vuong
(2003) point out, this is in fact natural when there is an observable endogenous variable in addition
to bids (like the number of participating bidders) that also responds to unobservables.97,98
       This kind of structure (a) provides the necessary partial identification of a common values model
and (b) provides an instrument that can generate the exogenous variation needed to extend Haile,
Hong and Shum’s testing approach. To see this, suppose the number of actual bidders in auction
t is a function of two factors, Zt and Wt :

                                                At = α (Zt , Wt ) .

Here Zt is an index capturing the eﬀects of factors observable to the econometrician as well as
the bidders, while Wt is an index capturing the eﬀects of unobservables.99 Assume that (i) Z is
independent of (X1 , . . . , Xn̄ , U1 , . . . , Un̄ ) and (ii) α (·, ·) is weakly increasing in its first argument
and strictly increasing in its second.
       Assumption (i) is a standard exclusion restriction: Zt is an instrument aﬀecting participation
but not the distribution of valuations and signals.               This instrument might be the number of
potential bidders or a proxy for it, like the number of firms in the local market.                   Of course, in
principle there need not be any diﬀerence between the potential and actual bidders here, based
on our definitions.     For example, if there is a cost of acquiring a signal but bidders have access
to some information about the distribution of valuations before bearing this cost, the number of
potential bidders will be correlated with unobservable factors shifting all bidder valuations. Valid
instruments in that case might be the number of firms in the market (those who choose whether to
invest in a signal), or factors aﬀecting the cost of acquiring a signal.
       Assumption (ii) is a monotonicity restriction. Monotonicity in the instrument Zt implies that
  97
      A similar approach is taken to address the problem of identification with unobserved heterogeneity in a very
diﬀerent environment by Olley and Pakes (1996).
   98
      As a general solution to the identification problem in a private values auction with unobserved heterogeneity,
there is an important caveat here. Identification with this assumption will be obtained conditional on a value of
(Z,A) , where A is the number of actual bidders. This is fine as long as policy questions of interest do not aﬀect
the distribution of (Z,A); however, this will not always be the case. A change in the auction rules could aﬀect
participation for any given value of Z, because it might change expected profits to bidders; Athey, Levin, and Seira
(2004) analyze such an example when bidders are asymmetric. This limitation might be overcome with an economic
model of participation that was integrated with the model of bidding. However, this is not a problem when the goal
is not counterfactual simulation but testing of equilibrium restrictions, as is the case here.
   99
      For simplicity we assume there are no auction-specific observables, although these can be allowed as in Section
6.1.1.


                                                         99
changes in Zt will provide the exogenous variation in the level of competition that will make it
possible to isolate the eﬀects (if any) of the winner’s curse. Note that Zt could be a function of a
vector of instrumental variables ζ t . If this function is unknown, it can be estimated in a first-stage
regression of At on ζ t . Weak monotonicity in the unobservable Wt could be assumed without loss
of generality (this would be a normalization of Wt ). Strict monotonicity is a key restriction that
requires that Wt be discrete (since At is). The important implication is that the joint distribution
of (X1 , . . . , Xa , U1 , . . . , Ua ) conditional on (At , Zt ) is identical to that conditional on (At , Zt , Wt ).100
This implies

                             v (x, x; a, w, z) ≡ E[Ui |Xi = x, At = a, Wt = w, Zt = z]
                                                   = E[Ui |Xi = x, At = a, Zt = z]
                                                   ≡ v (x, x; a, z) .

When bidders observe at , zt , and wt (in addition to their own signals) prior to bidding at each
auction t, equilibrium is characterized by the first-order condition
                                                 Pr (maxj6=i Bjt ≤ bit |Bit = bit , Zt = zt , At = at )
          v (xit , xit ; at , zt ) = bit +    ∂
                                                                                                                   (8.4)
                                             ∂m Pr (maxj6=i Bjt ≤ m|Bit = bit , Zt = zt , At = at ) |m=bit
providing identification of each v (xit , xit ; at , zt ).
       Estimation of the pseudo-values on the left-hand side of (8.4) proceeds by holding fixed both
the value of A and the value of the instrument Z to construct estimators of the right-hand side
of (8.4).      To test for common values, the pseudo-values v (xit , xit ; at , zt ) are then pooled across
realizations of At to compare the cumulative distributions

                                   Fv,z (v) = Pr (E [v (Xit , Xit ; At , Zt )] ≤ v|Zt = z)

across values of z.           While these distributions must be the same for all z under private values,
the assumptions above imply that Fv,z (v) is increasing in z under the common values alternative.
Haile, Hong and Shum (2003) provide additional details, as well as an application to US Forest
Service timber auctions, where they use the number of sawmills and logging firms in a geographic
neighborhood of a sale as an instrument for the number of bidders.

8.3      Testing with Incomplete Bid Data

Athey and Haile (2002) show that testing is also possible in ascending auctions (assuming the
button auction model) and in first-price auctions in which not all bids are observable.101 For
 100
     With weak monotonicity, conditioning on (At , Zt ) would limit the realization of Wt to some set W (At , Zt ). In
some applications this might be suﬃcient to use the first-order condition above as a useful approximation.
 101
     Haile (2001) develops a diﬀerent testing approach based on detecting bidders’ updating of their willingess to
pay as an ascending auction proceeds. The insight is that there is no such updating in a private values auction


                                                               100
the symmetric common values model, recall that the challenge arises because the distribution of
v(X (n−1:n) , X (n−1:n) , n) varies with n both due to the winner’s curse and because the distribution
of the order statistic varies with n even without any winner’s curse. However, since X (n:n) is
unobserved, the distribution of v(Xi , Xi , n) is not identified.
    Athey and Haile’s (2002) approach exploits the fact that for exchangeable random variables
                                               (i:n)
Y1 , . . . , Yn , the marginal distributions FY        (·) of the order statistics must satisfy the recurrence
relation (see, e.g., David (1981))
                     n − i (i:n)  i (i+1:n)        (i:n−1)
                          FY (y) + FY       (y) = FY       (y)             ∀y, n, i ≤ n − 1.                 (8.5)
                       n          n
Intuitively, in an ex ante sense, moving from a sample of n draws to a sample of n − 1 draws is
equivalent under exchangeability to taking the n draws and then dropping one at random. When
one draw, Yj , is dropped at random from the larger sample, the ith order statistic in the smaller
sample will be either the ith order statistic from the larger sample (when Yj was one of the n − i
highest draws), or the (i + 1)st order statistic (if Yj was among the i lowest draws). Note that one
direct implication of (8.5) is a recurrence relation between means:
                  n − i h (i:n) i i h (i+1:n) i          h         i
                        E Y         + E Y            = E Y (i:n−1)   ∀n, i ≤ n − 1.                          (8.6)
                    n                 n
    Using (8.5) and (8.6), the private values null can be tested against the common values alternative
in both first-price and ascending auctions. This is possible even when not all bids are observable
(as is always the case in an ascending auction) and despite the fact that the ascending auction
has multiple equilibria in the case of common values.               The following theorem combines results
originally given in Athey and Haile (2002).

Theorem 8.1 Assume exogenous variation in the number of bidders. In an ascending auction or
first-price sealed-bid auction, the symmetric private values model is testable against the symmetric
common values alternative if one observes the bids B (n−2:n) and B (n−1:n) in the ascending auction,
or B (n−1:n) and B (n:n) in a first-price auction.

    Proof. For the first-price auction, we have seen in Theorem 3.3 that the marginal distributions
 (n−1:n)          (n:n)         ¡                         ¢     ¡                     ¢
Fv       (·) and Fv     (·) of v X (n−1:n) , X (n−1:n) ; n and v X (n:n) , X (n:n) ; n are identified for all
or
 in a 2-bidder common values     auction. Hence one can compare distributions of bidders’ willingness to pay
            (n−1:n)
 i.e., φ GB         (·) ; n − 1, n  in 2-bidder auctions to that in auctions with larger numbers of bidders, with a
diﬀerence suggesting common values. A major limitation of this approach is a requirement of independent signals
under both the null and alternative hypotheses. While independence is implied by Haile’s model of auctions with
resale, this will typically be a strong restriction for a common values auction.




                                                         101
                                                                    (n−1:n)               (n:n)
n. In a private values auction, these distributions are FU                    (·) and FU          (·) so that (8.5) implies
the restriction
                             1 (n−1:n)       n − 1 (n:n)
                               Fv      (v) +      Fv     (v) = Fv(n−1:n−1) (v)              ∀v.
                             n                 n
Under the common values alternative, v (x, x; n) is still a strictly increasing function of x, so that
the random variables v (Xi , Xi ; n) are still exchangeable. But since v (Xi , Xi ; n) strictly decreases
in n (Lemma 8.1),
                               1 (n−1:n)       n − 1 (n:n)
                                 Fv      (v) +      Fv     (v) > Fv(n−1:n−1) (v)
                               n                 n
for all v on the interior of the support of Fvi ,N (·) or Fvi ,N+j (·).
       For the ascending auction, under the private values null, equation (8.6) implies
                       2 h (n−2:n) i n − 2 h (n−1:n) i   h
                                                            (n−2:n−1)
                                                                      i
                         E B        +     E B          =E B                                  ∀n > n.
                       n               n
Under the common values alternative, Athey and Haile (2002, Theorem 9) show that, regardless of
the equilibria selected in the n-bidder and (n − 1)-bidder auctions, one obtains the relation
                       2 h (n−2:n) i n − 2 h (n−1:n) i    h            i
                         E B        +     E B          < E B (n−2:n−1)                       ∀n > n.
                       n               n
                                                                                                                   Q.E.D.

       While Theorem 8.1 relies on exchangeability, Athey and Haile (2002) show how this kind of
approach can be adapted to asymmetric ascending auctions as well.102 To see the key idea, observe
that if (Y1 , . . . , Yn ) have an arbitrary joint distribution, one can obtain a sample of exchangeable
random variables (YR1 , YR2 , . . . , YRs ) by taking a random subsample of size Rs < n from the original
sample (Y1 , . . . , Yn ).   Hence, even without exchangeability of (Y1 , . . . , Yn ) , a recurrence relation
must hold for random subsamples (Balasubramanian and Balakrishnan, 1994). In a private values
                                                                                  (i:n)
auction this implies a recurrence relation between distributions FU                       (·) in auctions with bidders
N and those from smaller auctions in which the set of bidders is a subset of N .
       Formal testing approaches based on these results have not yet been explored. Since the null
(alternative) hypothesis can be represented as the hypothesis of equal (stochastically ordered)
distributions, it may be possible to adapt the testing approaches of Haile, Hong and Shum (2003),
which account for the estimation error arising from the nonparametric estimation of pseudo-values.


8.4       Testing with a Binding Reserve Price

While Haile, Hong and Shum (2003) show that their testing approach can be extended to cases
in which there is a binding reserve price, Hendricks, Pinkse and Porter (2003) have shown that
 102
       They also discuss extension to cases in which only non-adjacent values of n are observed in the data.


                                                          102
the presence of a binding reserve price can in fact make possible a diﬀerent sort of test for the
winner’s curse in first-price auctions. Focusing on the symmetric case, recall that participation is
determined by the threshold signal x∗ defined by (recall equation (2.1))
                                 ½                                    ¾
                         x∗ = inf x : E[Ui |Xi = x, max Xj ≤ x] ≥ r .
                                                                  j6=i

The equilibrium bid of a bidder with signal x∗ is
                                                      ∙                         ¸
                              ∗             ∗    ∗               ∗            ∗
                         β (x ; n) = v (x , x ; n) = E Ui |Xi = x , max Xj = x .
                                                                            j6=i

In a private values model, E[Ui |Xi = x, maxj6=i Xj ≤ x] = E [Ui |Xi = x, maxj6=i Xj = x] , so that

                                                      β (x∗ ; n) = r.                                             (8.7)

As originally noted by Milgrom and Weber (1982), in a common values model the fact that
E[Ui |Xi = x, maxj6=i Xj ≤ x] < E [Ui |Xi = x, maxj6=i Xj = x] implies

                                                      β (x∗ ; n) > r.                                             (8.8)

Hence, a test for common values can be based on the distinction between (8.7) and (8.8). In
particular, if we let b = inf supp Bi ,
                                                            GM|B (b|b; n)
                                                lim    b+
                                                b→b         gM|B (b|b; n)
should equal r under the private values hypothesis but should be strictly greater than r with
common values. A formal test based on this idea has not yet been developed.


9      Dynamics
Until very recently, virtually all structural empirical work on auctions has considered static models,
treating each auction in the data as an independent game. There are several reasons this may
not be the case. First, even in a stationary environment, dynamic considerations arise if firms
engage in collusion.103 We do not consider collusion in this chapter.104 Second, bidders’ valuation
 103
     Many models of collusion at auctions are static (e.g. McAfee and McMillan, 1992). Recently, the theory of tacit
collusion in repeated auctions has grown rapidly (Aoyagi (2003), Athey and Bagwell (2001, 2004a), Athey, Bagwell
and Sanchirico (2004) and Skryzpacz and Hopenhayn (2004)). Athey, Bagwell and Sanchirico (2004) show that when
only the winning bid, but not the bidder’s identity, is revealed by the auctioneer, optimal collusion entails bidding at
the reserve price with each bidder having an equal chance of winning, while Athey and Bagwell (2001, 2004a) show
that when the bidder’s identity is revealed as well, bidders engage in sophisticated rotation schemes so that a bidder’s
probability of winning is less correlated over time than the bidder’s valuation.
 104
     For empirical studies of collusion (which typically do not explicitly consider dynamics), see Porter and Zona
(1993, 1999), Bajari and Ye (2003), Pesendorfer (2000), Baldwin, Marshall, and Richard (1997), and Athey, Levin,
and Seira (2004). See Bajari and Summers (2002) for a survey.


                                                            103
distributions may change over time in a way that is exogenous, but is private information to each
bidder.105 This can create dynamic links in bidder strategies. In particular, a bidder’s behavior
in an auction will aﬀect opponents’ beliefs about his valuation distribution in future auctions,
changing the equilibrium of the auction game in each period.106 To our knowledge, there has been
no empirical investigation focusing on the dynamics of such models.
       Finally, the underlying distribution of valuations might change as a function of auction out-
comes, potentially in ways that are observable (or can be directly inferred) by the other bidders.
For example, there may be learning-by-doing, so that a firm that wins an auction today might have
stochastically lower costs (higher valuations) in the future. Alternatively, firms may have capacity
constraints (or more general forms of diseconomies of scale). In that case, a firm that wins an
auction today might draw a valuation from a less favorable distribution in the future. In either
case, the resulting dynamic considerations for bidders will change the equilibrium at each point in
time.
       To explore this type of environment, consider a model based on that of Jofre-Bonet and Pe-
sendorfer (2000, 2003).107 Time is discrete, and firms compete over an infinite horizon. In each
period t, an item is sold by first-price auction to one of n bidders. For simplicity, assume that there
is no reserve price and that all objects to be auctioned have the same observable characteristics (see
Jofre-Bonet and Pesendorfer (2003) for extensions). The distribution of bidder valuations depends
on the bidders’ capacities (more generally, it could depend on other covariates as well). Conditional
on capacities, bidder valuations are independent across bidders and over time. Letting ci,t be bidder
i’s publicly observable capacity in period t, the conditional distribution of bidder i’s valuation in
period t is denoted FU (·|ci,t ), where for simplicity we let this function be the same for all bidders.
       The econometrician and the bidders both know the (deterministic) transition function for bidder
capacities. In particular, if k is the identity of the winning bidder in period t and ct is the vector
of bidder capacities in period t, then108

                                                ci,t+1 = ω i (ct , k).
 105
     If the distribution of valuations changes over time in a way that is observed by all bidders, then either the
econometrician can observe (and condition on) the factors aﬀecting distribution, or the problem of unobserved het-
erogeneity discussed in Section 6.1.2 arises. The literature has not explored intertemporal correlation in unobserved
auction heterogeneity.
 106
     See e.g., Bikhchandani (1988), Bikhchandani and Huang (1989), Haile (1999, 2003), Katzman and Rhodes-Kropf
(2002), Das Varma (2003), Goeree (2003), and Athey and Bagwell (2004b).
 107
     They analyze a procurement auction. We recast the problem as one in which the bidders are buyers. They
also consider two types of bidders, “regular bidders” who bid often, and “fringe bidders” who bid rarely and do not
consider the future. We focus on regular bidders to simplify the analysis.
 108
     Jofre-Bonet and Pesendorfer (2003) allow a slightly richer specification in which transitions reflect information
about the size and duration of projects that have been won in the past.



                                                        104
       The solution concept is Markov-perfect equilibrium. Thus, collusion is ruled out, and dynamic
considerations in bidder strategies arise only because bidders anticipate that the identity of today’s
winner will aﬀect future capacities, which in turn will aﬀect outcomes in future auctions. Since
all asymmetries are captured through capacities, Jofre-Bonet and Pesendorfer (2003) focus on
exchangeable strategies. In particular, each bidder’s bid in a given period depends on the bidder’s
own valuation and the vector of capacities, so that strategies can be written β i (ui,t , ct ).109
       The first step in the analysis is to use dynamic programming to represent bidder payoﬀs.110
Suppressing N in the notation, let GMi (·|c) be the equilibrium distribution of the maximum oppo-
nent bid for bidder i when the vector of bidder capacities is c. Let δ denote the discount factor and
let ω (c, k) = (ω 1 (c, k) , . . . , ω n (c, k)). Holding opponents’ strategies fixed, the interim expected
discounted sum of future profits for bidder i is given by
                               ½
         Wi (ui , c) = max       (ui − bi )GMi (bi |c)
                                  bi
                                       n
                                       X                             Z                                                       ¾
                             +δ              Pr ( j wins | bi , c)          Wi (u0i , ω(c, j)) fUi (u0i | ω i (c, j)) du0i
                                       j=1                            u0i

where the second term sums over the possible identities of the winner to form an expectation of
the continuation value to player i, given current capacities. One can then define the ex ante value
function                                                  Z
                                               Vi (c) =        Wi (ui , c) fUi (ui |c)dui

which can be rewritten as
                                   Z (          ½
                      Vi (c) =               max (ui − bi )GMi (bi |c) + δVi (ω(c, i))
                                               bi

                           X                                                          ¾)
                      +δ          Pr ( j wins | bi , c) [Vi (ω(c, j)) − Vi (ω(c, i))]   fUi (ui |c)dui .
                           j6=i

       Note that in equilibrium, the probability that bidder i wins with bid bi is given by
                            µ                     ¯ ¶                 Y
                                                  ¯
                         Pr bi ≥ max β j (Uj , c)¯¯ c = GMi (bi |c) =   GBj (bi |c)                                              (9.1)
                                   j6=i
                                                                                            j6=i

where GBj (·|c) is the cumulative distribution of Bj conditional on capacity vector c. The probability
that bidder j 6= i wins when bidder i bids bi is
                                       ⎛               ⎞
                              Z b̄j (c) Y
                                       ⎝    GBk (bj |c)⎠ gBj (bj |c)dbj
                                             bi       k6=i,j

 109
     Jofre-Bonet and Pesendorfer (1999, 2003) establish existence of an equilibrium within the parametric framework
they use for estimation, and also sketch an approach for showing existence in general.
 110
     Ackerberg et al. (in this volume) discuss estimation of dynamic strategic models more generally.


                                                                   105
where b̄j (c) = sup suppGBj (·|c). Finally, using (9.1) note that

                                                  GMi (bi |c)              1
                                                              =P           gBj (bi |c)
                                                                                         .
                                                  gMi (bi |c)
                                                                      j6=i GBj (bi |c)

   The next step is to solve for the ex ante value functions in terms of observables. This requires
a significant generalization of the two-step indirect approach proposed by Guerre, Perrigne, and
Vuong (2000). Consider bidder i’s optimization problem in a given auction:
                   ½
              max (ui − bi )GMi (bi |c) + δVi (ω(c, i))
               bi
                    ⎛                                       ⎞
                  X Z b̄j (c) Y                                                           ¾
              +δ    ⎝                                       ⎠
                                   GBk (bj |c)gBj (bj |c)dbj [Vi (ω(c, j)) − Vi (ω(c, i))] .
                      j6=i      bi       k6=i,j

The first-order condition is

                             GMi (bi |c)    X GM (bi |c) gBj (bi |c)
                                                 i
             ui = bi +                   +δ                           (Vi (ω(c, j)) − Vi (ω(c, i)))    (9.2)
                             gMi (bi |c)      gMi (bi |c) GBj (bi |c)
                                                   j6=i

After substituting ψ i (bi |c, Vi ) into the ex ante value function, a change of variables yields
                                     Z b̄(c)
                                           GMi (bi |c)
                     Vi (c) =                          GMi (bi |c)dGBi (bi |c)
                                      b(c) gMi (bi |c)
                                                        (Z
                                         X                  b̄j (c) Y
                                     +δ    Vi (ω(c, j))                GBk (bj |c)gBj (bj |c)dbj
                                          j6=i                   bi        k6=i,j
                                         Z b̄(c)                                                  )
                                                   GMi (bi |c) gBj (bi |c)
                                     +                                     GMi (bi |c)dGBi (bi |c) .
                                          b(c)     gMi (bi |c) GBj (bi |c)


For any capacity vector c, this expresses each Vi (c) as a linear function of Vi (·) evaluated at
other capacity vectors. The coeﬃcients of this linear relation depend only on the observable bid
distributions. Thus, it is possible to solve for the ex ante value functions in terms of the observable
bid distributions.
   Once the ex ante value functions have been computed, identification of the distributions FU (ui |c)
(assuming the discount factor δ is known) follows from the first-order condition (9.2). In particular,
we can use the observed bid distributions and the ex ante value functions to compute the right-hand
side of (9.2). Then, if the discount factor δ is known (for example, from other empirical studies),
(9.2) implies that FUi (·|c) is identified from the observed bids and capacities.
   In addition to demonstrating the nonparametric identification of their model, Jofre-Bonet and
Pesendorfer (2003) propose a parametric estimation approach, motivated in part by a desire to

                                                               106
include covariates in a parsimonious manner. To solve for the value functions, they follow Judd
(1998) and discretize the set of possible capacities. Then, calculating the value functions entails
solving a system of linear equations. They further simplify the estimation by using a quadratic
approximation of the value function. They apply their approach to California highway construction
contracts. Using their estimates, they are able to assess the importance of private information,
capacity constraints, and the ineﬃciencies that arise due to the asymmetries induced by capacity
diﬀerences among bidders under the assumption of forward-looking equilibrium behavior. Note
that it is impossible to test whether bidders are forward looking in this environment, since the
discount factor δ is not identified.


10        Multi-Unit and Multi-Object Auctions

10.1       Auctions of Perfect Substitutes

While most of the empirical literature on auctions focuses on the case of single-unit auctions,
auctions of multiple units of identical goods (“multi-unit auctions”) have recently begun to gain
significant attention. One motivation is their importance in the public sector. For example, multi-
unit auctions have recently been implemented in restructured electricity markets to assign electric
power generation to diﬀerent plants (see, e.g., Wolfram (1998), Borenstein, Bushnell, and Wolak
(2002), or Wolak (2003)). Optimal design of such markets is complex: the usual goals of eﬃciency
and surplus extraction in single-unit auctions are complicated by (among other issues) nonlinearities
in cost functions, incentives to exercise market power by withholding marginal production capacity,
and the need for firms to recover substantial fixed costs (Wolak, 2003).                    Empirical analysis of
these markets can provide valuable information about the underlying cost structure, market power
opportunities, and profitability. Another important policy question that has been the subject of
discussion among economists at least since Friedman (1960) is how governments should auction
treasury securities to maximize revenues.            This question is potentially relevant to the design of
markets for other types of securities as well.
       In treasury auctions, a large number of identical securities is sold in a mechanism in which each
bidder submits an entire “demand function,” i.e., each bidder i oﬀers a (downward sloping) schedule
of price-quantity combinations (bij , qj ) specifying the price he is willing to pay for his qj th unit.111
Two auction mechanisms are commonly used: discriminatory and uniform-price. A discriminatory
auction is the most common in practice (although recently the U.S. adopted uniform-price auctions
after conducting an experiment to evaluate alternative formats). In this mechanism, each bidder
 111
    Note that this is a bidder’s strategic expression of quantities he demands at each price. This need not correspond
to the usual notion of a price-taking buyer’s demand function.


                                                        107
who oﬀers more than the market clearing bid for a unit receives that unit at the price he oﬀered.
As the name suggests, this results in diﬀerent prices for diﬀerent units of the same security–even a
given bidder will pay diﬀerent prices for each unit he wins. In contrast, in a uniform-price auction,
the market clearing price (lowest accepted bid) is paid on all units sold. In addition to U.S. treasury
bill auctions, electricity auctions are often uniform price, and some firms have used uniform price
auctions in initial public oﬀerings.112
       Of course, bidders will bid diﬀerently depending on whether a discriminatory or uniform-price
auction is used. The revenue ranking of the two mechanisms is theoretically ambiguous (Ausubel
and Cramton, 2002) and can only be determined with knowledge of the true distribution of bidder
valuations. To our knowledge, the literature has not yet presented a comprehensive analysis of
identification and estimation in uniform-price auctions, although Wolak (2003) provides some initial
results.
       Before proceeding, we pause to highlight the fact that the theory of multi-unit auctions is
much less well developed than the theory of first-price auctions and ascending auctions. Although
existence of equilibrium in mixed strategies can be guaranteed quite generally (Jackson, Simon,
Swinkels, Zame (2002)), Jackson and Swinkels (forthcoming)), existence of pure strategy Nash
equilibria in monotone strategies has been established for only a limited class of models, such as
private or common value models where bidder signals are independent (McAdams (2004a)).                                In
addition, examples have shown that there can be multiple equilibria (e.g. Back and Zender, 1993).
Thus, most existing econometric approaches to these auctions require assumptions on endogenous
variables to guarantee that the requisite regularity properties are satisfied, although in practice
some of the conditions can be verified empirically.
       Hortaçsu (2002) has empirically analyzed the question of which auction mechanism raises higher
revenue, and has shown that the relevant primitives can be identified nonparametrically in a pri-
vate values model of the discriminatory auction.113 His empirical model is based on the theoretical
framework of Wilson (1979). Building on the insight of Guerre, Perrigne and Vuong (2000), he
points out that equilibrium bidding strategies can be characterized as best responses by each bid-
der to the distribution of opposing bids he faces.              In this multi-unit setting, the distribution of
opposing bids cannot be described by the distribution of the maximum opposing bid (as in a single-
 112
     In the finance literature, these are often referred to as “Dutch auctions,” conflicting with economists’ use of this
term for descending price single-unit auctions.
 113
     Parametric structural models have been studied recently by Février, Préget, and Visser (2002) and by Armantier
and Sbaï (2003), both of which consider common values models. Common values models may be appropriate for
many securities auctions, although this is ultimately an empirical question–one for which testing approaches have
not been developed. Hortaçsu (2002) discusses institutional details that motivate the assumption of private values
in the case of the Turkish treasury bill auctions he studies.




                                                          108
unit auction); rather, it is the stochastic residual supply curve that characterizes the equilibrium
probabilities with which various quantities could be obtained at each possible price.
   For a discriminatory auction, suppose that the total quantity of securities to be oﬀered is Q.
Let qi (·) denote the demand function oﬀered by bidder i; i.e., qi (p) is the largest quantity for
which bidder i is oﬀering a price of p or more for his final unit. For a given set of demand functions
q1 (·), .., qn (·), the market clearing price pc then equates supply and demand:
                                                      X
                                                Q=         qi (pc )
                                                       i

This market clearing price can be reinterpreted as the price at which i’s demand function and his
residual supply curve
                                                            X
                                          QRi (b) = Q −            qj (b) .
                                                            j6=i

   Let vi (y; xi ) denote bidder i’s marginal valuation for a yth unit of the good, given the realization
of his signal xi . Each bidder i’s equilibrium strategy specifies, for each possible realization of xi , a
demand function qi (b) = ϕ (b; xi )˙ expressing the quantity demanded at each price b. Let
                             i
                                                 ⎛                              ⎞
                                                               X
                                 Gi (b, y) = Pr ⎝y ≤ Q −               ϕj (b; Xj )⎠                (10.1)
                                                                j6=i

so that Gi (b, y) is the probability that, given equilibrium bidding by i’s opponents, the market
clearing price falls below b if i himself demands quantity y at price b.
   For each Xi = xi , bidder i’s optimal strategy ϕi (·; xi ) then solves the problem
                       Z ∞ ÃZ qi (pc )                          !
                                       ¡               −1
                                                            ¢     ∂Gi (pc , qi (pc )) c
                max                     vi (y, xi ) − qi (y) dy                      dp
                 qi (·) 0      0                                        ∂pc

One can show that the optimal bidding strategy can be characterized by the necessary condition
                                                            Gi (b, ϕ(b; xi ))
                                 vi (ϕ(b; xi ), xi ) = b + ∂                    .
                                                           ∂b Gi (b, ϕ(b; xi ))

While this is an Euler-Lagrange condition for a functional optimization problem, this equation
closely resembles the first-order condition (2.4) used by Guerre, Perrigne and Vuong (2000) to
show identification of the single-unit discriminatory (i.e., first-price sealed-bid) auction with private
values. Its role in the identification argument is similar. Because the demand functions qj (b) =
ϕi (b; xj ) are directly observed, Gi (b, y) is identified from equation (10.1). Then, for any quantity
y demanded at price b by bidder i, we have
                                                           Gi (b, y)
                                        vi (y, xi ) = b + ∂
                                                          ∂b Gi (b, y)


                                                      109
which uniquely determines the realizations of bidder i’s marginal valuations at each quantity y.
This implies identification of the distributions of each vi (y, Xi ), which are the primitives needed for
policy simulations.114 In particular, if for each quantity y we let Biy be a random variable equal in
distribution to ϕ−1
                 i (y; Xi ) , vi (y, Xi ) must be equal in distribution to

                                                       Gi (Biy , y)
                                            Biy +               ¯      .
                                                    ∂           ¯
                                                    ∂b Gi (b, y) b=B y
                                                                     i


       Hortaçsu (2002) explores several estimation approaches, both parametric and nonparametric.
He also finds a clever way to place an upper bound on the revenue that would be obtained under
the uniform price auction, while avoiding the diﬃcult problem of solving for the equilibrium given
the estimated distribution of valuations: since a bidders will never bid more than her marginal
valuation for each unit, the revenue that would be obtained if bidders simply bid their marginal
valuations for each unit in a uniform auction provides an upper bound on the equilibrium revenue.


10.2       Auctions of Imperfect Substitutes and Complements

One prominent area in which economists’ understanding of auctions has been used to guide policy
over the last decade is in the design of institutions to allocate spectrum rights (see, e.g., McAfee
and McMillan, 1996). Questions regarding the optimal design of spectrum auctions led to much
new theoretical work considering the complications to equilibrium strategies arising in multi-object
auctions, where the heterogeneous goods auctioned at the same time may be imperfect substitutes,
complements, or combinations of these. Similar issues arise in a number of procurement applica-
tions, where complementarities may exist between contracts, and some bundles of contracts may
be substitutes for others. Cantillon and Pesendorfer (2003) study one such application: auctions
for bus services in London, where it may be cheaper to operate one route if a nearby route is also
served. Here, we describe their model and identification results. For consistency with the rest of the
chapter, we treat the auction as one in which the bidders are buyers rather than sellers of services.
       Let S be the set of goods oﬀered for sale, with |S| = m.   Let Ui,s be bidder i’s valuation for
                                  2m −1
the bundle s ⊆ S, with Ui       ∈R      denoting the vector of his valuations for all possible bundles
s ⊆ S. Bidders’ preferences over combinations of goods may exhibit sub- and/or super-additivity.
Let FUi (·) be the joint distribution of Ui , while FUi,s (·) denotes the marginal distribution of Ui,s .
Let Bi,s denote bidder i’s bid on bundle s, and let Bi be the vector of bids placed by bidder i. We
let Bi,−s denote the vector of bids placed by bidder i on all bundles other than s.
 114
   Note that signals play a purely informational role here. Hence, their distribution can be normalized (and assumed
symmetric) without loss of generality. Put diﬀerently, only the distribution of marginal valuations, not that of the
underlying signals, is of economic relevance.



                                                       110
       For simplicity, we focus on a fixed set of n symmetric bidders. Bidders participate in a sealed-
bid discriminatory auction with combination bidding: each bidder submits bids on all bundles, and
the auctioneer chooses the allocation of all objects that maximizes total revenue, charging each
bidder the price he oﬀered for each bundle he is allocated.
       Combination bidding enables bids to express complementarities and substitutabilities between
objects and/or bundles. Further, we might expect combination bidding to aid eﬃciency and to
encourage less cautious bidding by bidders who desire certain combinations of goods. However,
combination bidding also introduces a strategic incentive absent in auctions of homogeneous goods.
This arises from the fact that a bidder’s bid on one bundle competes with his own bids on other
bundles.      If a bidder raises his bid for bundle s, for example, that will make him more likely to
win s, but it may reduce his chances of winning a diﬀerent bundle t. This is because an increase
in bi,s may make it profitable for the seller to allocate bundle s to i instead of bundle t, allocating
t to some other bidder instead.
       A bidder’s problem here turns out to be very closely related to the problem of multiproduct
pricing, where it is known that a firm may find it profitable to bundle goods for which demands
are independent. Analogously, here a bidder may find it profitable to place bids on bundles (i.e.,
to make “combination bids” or “bundle bids”) even if the goods in the bundle are independent in
the sense that Ui,s∪t = Ui,s + Ui,t when s ∩ t = ∅. This is because the combination bid on the
bundle s ∪ t can enable bidder i to win bundle s even when bidder i’s opponents place a high bid for
bundle s, unless they also place a high bid for bundle t. Thus, the combination bid allows bidder
i to “leverage” a high valuation for bundle s into a lower price paid for bundle t, or vice versa (cf.
Whinston, 1989). Note that this leads bidder i to bid less aggressively on the individual bundles s
and t, in order to avoid competing with her combination bid.
       Following intuition from the literature on bundling (see McAfee, McMillan, and Whinston (1989)
or Armstrong and Rochet (1999)), as long as the correlation among opponent bids for s and t is not
too high, making a combination bid is profitable for the bidder. Cantillon and Pesendorfer (2003)
describe a plausible environment in which allowing combination bids will reduce both expected
revenue and eﬃciency if goods are independent. This provides one motivation for determining
whether bidders view the goods as independent, substitutes, or complements.
       For the purposes of this chapter, we will make the following non-primitive assumptions (Cantil-
lon and Pesendorfer use slightly weaker assumptions):115 a pure strategy Nash equilibrium exists,
 115
    They argue that a mixed strategy equilibrium exists, but to our knowledge it is not known what additional
assumptions would be required to guarantee that a pure strategy equilibrium exists. Although it might seem that a
mixed strategy equilibrium should be inconsistent with identification, that is not necessarily true. In a mixed strategy
equilibrium, for at least some valuations, a bidder uses more than one bid vector: the mapping from valuations to
bids is one-to-many. Identification of the primitive valuation functions will require that for each bid vector, there is


                                                         111
the joint distribution of equilibrium bid vectors (B1 , .., Bn ) is diﬀerentiable almost everywhere in
the support of equilibrium bids, and there is zero probability that bidder i uses a bid in equilibrium
at which the joint distribution of opponent bids fails to be diﬀerentiable.
    Given the equilibrium distribution of bid vectors for bidder i’s opponents j 6= i, let Gs (bi )
denote the probability that bidder i wins the objects in bundle s when bidder i chooses the bid
vector bi . Note that Gs (·) generally is not a cumulative distribution function and need not even be
increasing, since increasing bi,t for a bundle t such that s ∩ t 6= ∅ might lead to a lower probability
that i wins all objects in bundle s. When there are no reserve prices, bidder i solves the problem
                                                   X
                                           max           (ui,s − bi,s )Gs (bi ).
                                              bi
                                                   s⊆S

If bi is the equilibrium bid for bidder i when his type is ui , then as long as the objective function
is diﬀerentiable at bi , the following system of first-order conditions must be satisfied:
                                        X                ∂
                          −Gs (bi ) +    (ui,t − bi,t )       Gt (bi ) = 0 for all s ⊆ S.                     (10.2)
                                                        ∂bi,s
                                        t⊆S

Let G(bi ) denote the (2m − 1) × 1 vector with components Gs (bi ), and let ∇G(bi ) be the (2m − 1)
× (2m − 1) matrix with (s, t) element ∂b∂i,s Gt (bi ). Then we can rewrite the system of first-order
conditions in matrix notation as

                                           ∇G(bi ) [ui − bi ] = G(bi ).

This is a system of linear equations in the vector of valuations ui . If ∇G(bi ) is invertible, we can
rewrite the first-order conditions in a form analogous to the single-unit auction case (2.4):

                                         ui = bi + [∇G(bi )]−1 G(bi ).                                        (10.3)

Invertibility of ∇G(bi ) would then imply that the distribution of (multidimensional) valuations
were nonparametrically identified, following the logic developed above for the single-object first-
price auction.
    One unresolved question is whether there are useful suﬃcient conditions on the distribution of
bids (or on G (·)) that ensure that observed bidding is consistent with equilibrium behavior (see
Section 5.1).     First-order conditions are, of course, necessary but not suﬃcient for equilibrium.
In the case of a single-unit first-price auction, Theorem 5.2 ensures that the first-order conditions
together with monotonicity of the (inverse) bid function are necessary and suﬃcient for optimality
of each bidder’s best response. Thus far there is no analogous result for the multi-object auction
a unique valuation that uses that bid vector; i.e, that the mapping from bids to valuations is many-to-one.


                                                             112
considered here.         Hence, for an observed bid vector bi it is possible that there is a unique ui
satisfying (10.3), yet for that ui , bi is not a best response to the distribution of i’s opponents’ bids.
However, it should be possible to rule this out in a given application: since the bidder’s objective
function can be calculated from observables for each vector of valuations, for each observed bi and
corresponding ui satisfying (10.3) it is possible to compute the globally optimal bid vector for ui
and confirm that it is equal to bi , thereby verifying that the inverse bid functions implied by (10.3)
are mutual best responses.
       A second diﬃculty with using (10.3) arises from the fact ∇G(·) will not in general be invertible,
since bidders need not make bids on all bundles–not even on all those for which they have positive
valuations.       Making no bid on a given bundle (or, equivalently, making a bid for this bundle that
is sure to lose) can be optimal for a bidder since this ensures that she does not compete with her
own bids on other bundles. Given a bid vector bi,−s , Cantillon and Pesendorfer (2003) call a bid
bi,s irrelevant if
                                                  n                               o
                                        bi,s < inf b̃i,s : Gs (b̃i,s , bi,−s ) > 0 .

Irrelevant bids are bids that could never win. The problem for identification is that if a bidder
places an irrelevant bid on bundle s, ∂b∂i,t Gs (bi ) = 0 and ∂b∂i,s Gt (bi ) = 0 for all t ⊆ S, implying
that ∇G(bi ) is not invertible. Indeed, Cantillon and Pesendorfer (2003) establish that ∇G(bi ) is
invertible if and only if there are no irrelevant bids. In their application, bidders appear to make
many irrelevant bids.116
       Although irrelevant bids preclude point identification, there is still information in such bids.
First observe that if bi includes an irrelevant bid for bundle t, it is still possible to identify the
valuations associated with the bids for other bundles. To see this, note that if for valuation vector ui
it is optimal to place relevant bids for all bundles in K ⊂ 2S and irrelevant bids on other bundles,
one obtains the same solution if one treats the bidder’s optimization problem as a constrained
problem, with the bidder required to place irrelevant bids on all bundles 2S \K. Formally, let bK
                                                                                                i
be the subvector of bids on the elements of K, and let GsK (bK
                                                             i ) denote the probability that bidder
i wins bundle s when he places irrelevant bids on bundles t ∈ 2S \K and bids bK
                                                                              i on bundles in K.
Finally, let GK (·) denote a vector with elements given by GsK (·) for s ∈ K. Then the optimal bid
for type ui of bidder i in the original game is also the solution to
                                                  X
                                            max         (ui,s − bi,s )GsK (bK
                                                                            i ).
                                             bK
                                              i   s⊆K

The solution to this problem will involve no irrelevant bids, so ∇GK (bK
                                                                       i ) will be invertible. Hence,
 116
       Irrelevant bids are identified by replacing G (·) with the empirical analog and directly checking whether each bid
has a positive probability of winning


                                                            113
the valuations uK                                         K
                i that in equilibrium correspond to bids bi will be identified.
     There is also information in bids about valuations for bundles for which irrelevant bids have
been placed. Given a bid vector bi,−s , define the “eﬀective bid”

                                         bef f             s
                                          i,s = inf {bs : G (bs , bi,−s ) > 0} .

Given continuity of payoﬀs and the opponent bid distribution, bidder i will always be indiﬀerent
between bidding (bi,s , bi,−s ), where bi,s is irrelevant, and (bef f
                                                                 i,s , bi,−s ). This implies that increasing
bi,s is unprofitable at bi,s = bef          f
                                         i,s when bi,s is irrelevant, i.e.,
                          ¯                            X                                           ¯
   ∂                      ¯                                                 ∂                      ¯
       G (bi,s , bi,−s ) ¯¯
         s                                      ef f
                                        (ui,s −bi,s )+       (ui,t −bi,t )       G (bi,s , bi,−s )¯¯
                                                                                  t
                                                                                                                ≤ 0 for all s ⊆ S,
 ∂bi,s                      bi,s =bef f                                    ∂bi,s                    bi,s =bef f
                               i,s                  t⊆S,t6=s                                           i,s
                                                                                                                      (10.4)
where all derivatives are taken from the right. Since                    ∂     t ef f
                                                                        ∂bi,s G (bi,s , bi,−s ) = 0 (again taking the
derivative from the right) for all t 6= s such that bi,t is irrelevant, and since we have just argued
that ui,t is identified for all t such that bi,t is relevant, the only remaining unknown in (10.4) is ui,s .
Thus, (10.4) places an upper bound on the bidder’s valuation for bundle s. In particular, the true
ui,s must be less than the value of ui,s that makes (10.4) hold with equality. This can be used to
provide a lower bound on the cumulative distribution of Ui,s . More generally, a lower bound on the
distribution of Ui is identified using (10.4).
     In Cantillon and Pesendorfer’s application, two additional constraints are imposed on bids.
First, there are reserve prices, denoted rs ; bids below the reserve price win with probability zero.
Second, the auction rules specify that

                             bi,s∪t ≥ bi,s + bi,t for all s, t ⊆ S such that s ∩ t = ∅.                               (10.5)

This rule is motivated by the idea that if this constraint were violated, the auctioneer could choose to
ignore the bid bi,s∪t , and instead accept the bids bi,s and bi,t . Thus, bidders can express preferences
for complements, but their bids cannot be less for a combination than for the component parts.
Cantillon and Pesendorfer (2003) extend the analysis to incorporate these constraints, showing that
even in their presence, it is possible to place an upper bound on the extent of the synergies that
exist between items.


11      Concluding Remarks
The prominent role of auctions in allocating a wide range of public and private resources provides
one strong motivation for empirical work on auctions.                       Recent methodological advances have
made it possible to address old market design questions (e.g., how to auction Treasury bills),

                                                               114
while new policy questions (e.g., how to auction multiple complementary goods) have motivated
development of new methodological tools. In addition, auctions hold the promise of shedding light
on fundamental questions about the nature information, preferences, and behavior that are of
importance to a much broader scope of economic environments. Like earlier descriptive empirical
work on auctions that provided influential evidence on the importance of asymmetric information
and strategic behavior, recent empirical work using structural econometric models has also begun to
deliver on this promise, addressing such questions as the empirical importance of reputations, entry
costs, or adverse selection. Because of the close match between the theory and actual institutions,
auctions have the potential to provide insights into fundamental questions that are diﬃcult or
impossible to address without the benefit of structure from economic theory. We expect much of
the most interesting future work the empirical auction literature to push farther in this direction.
       It is worth noting that the analysis of identification in auction models is useful outside of the
realm of econometrics. For example, in some models of learning in games, a central component of
the analysis concerns whether it is possible to infer primitives of the game from the distribution of
equilibrium outcomes that can be observed by players. The equilibrium concept of self-confirming
equilibrium (Fudenberg and Levine (1993), Dekel, Fudenberg, and Levine (2003)), motivated by
learning models, hinges on just this issue.117 Recently, Esponda (2004) analyzed self-confirming
equilibria in auction games, focusing on the extent to which information revealed by an auctioneer
allows bidders to infer the distribution over opponent types. This problem is closely related to the
identification problem.118
       Auctions have long been recognized as providing ideal market institutions for exploring the
relationships between economic theory and the actual behavior of economic agents. Since the
seminal work of Vickrey (1961) and Wilson (1967), rich theoretical and empirical literatures on
auctions have developed.           In our view, one of the most exciting advances in this literature is
the development of methods for combining theoretical and statistical analysis in order to learn
about the primitive features of an auction environment from observed bidding behavior. We have
focused our discussion on nonparametric identification, in part because this makes transparent how
the relationships derived from theory can be used to make valid inferences from data. We hope
that this chapter will be a valuable reference and starting point for researchers who will apply and
expand upon these methods to explore the wide range of open questions in the future.


 117
     This concept relaxes the common knowledge assumption of Nash equilibrium, but requires that bidders best-
respond to beliefs that are consistent with the equilibrium distribution of outcomes that is observable to the bidders.
For example, the bidders might observe the distribution of transactions prices, or the distribution of all bids.
 118
     Furthermore, this alternative to the standard common knowledge assumption may be an interesting possibility
to explore in an empirical model.


                                                         115
                                         References

Ackerberg, D., L. Benkard, S. Berry and A. Pakes (2005), “Econometric Tools for Analyzing
    Market Outcomes,” in J. Heckman, ed., Handbook of Econometrics, vol 6.
Anderson, P., O. Borgan, R. Gill and N. Keiding (1991), Statistical Models Based on Counting
   Processes, New York: Springer.
Aoyagi, M. (2003), “Bid Rotation and Collusion in Repeated Auctions,” Journal of Economic
    Theory, 112: 79-105.
Armantier, O. and E. Sbaï (2003). “Estimation and Comparison of Treasury Auction Formats
   when Bidders are Asymmetric,” Working Paper (SUNY-Stony Brook).
Armstrong, M. and J.C. Rochet (1999), “Multidimensional Screening: A User’s Guide,” European
   Economic Review 43: 959—979.
Arnold, B., N. Balakrishnan and H. Nagaraja (1992), A First Course in Order Statistics (Wiley
    & Sons, New York).
Athey, S. (2001), “Single Crossing Properties and the Existence of Pure Strategy Equilibrium in
    Games of Incomplete Information,” Econometrica, 69: 861-890.
Athey, S. and K. Bagwell (2001), “Optimal Collusion with Private Information,” RAND Journal
    of Economics, 32: 428-65.
Athey, S. and K. Bagwell (2004a), “Collusion with Persistent Cost Shocks,” Working Paper (Stan-
    ford University).
Athey, S. and K. Bagwell (2004b), “Dynamic Auctions with Persistent Cost Shocks,” Working
    Paper (Stanford University)
Athey, S., K. Bagwell, and C. Sanchirico (2004), “Collusion and Price Rigidity,” The Review of
    Economic Studies, 71: 317-49.
Athey, S. and P. Haile (2000), “Identification of Standard Auction Models,” MIT Working Paper
    00-18.
Athey, S. and P. Haile (2002), “Identification of Standard Auction Models,” Econometrica 70:2107—
    2140.
Athey, S. and J. Levin (2001), “Information and Competition in U.S. Forest Service Timber
    Auctions,” Journal of Political Economy 109:375—417.
Athey, S., J. Levin, and E. Seira (2004), “Comparing Open and Sealed Bid Auctions: Theory and
    Evidence from Timber Auctions,” Working Paper (Stanford University).
Avery, C. (1998). “Strategic Jump Bidding in English Auctions,” Review of Economic Studies 65:
    185—210.
Ausubel, L. and P. Cramton (2002), “Demand Reduction and Ineﬃciency in Multi-Unit Auctions,”
    Working Paper 96—07 (University of Maryland).
Back, K. and J. Zender (1993), “Auctions of Divisible Goods: On the Rationale for the U.S.
    Treasury Experiment,” Review of Financial Studies, 6: 733-764.
Bajari, P. (1997), “The First-Price Auction with Asymmetric Bidders: Theory and Applications,”
    Ph.D. Dissertation (University of Minnesota).
Bajari, P. (2001), “Comparing Competition and Collusion: A Numerical Approach,” Economic
    Theory, 18: 187-205.
Bajari, P. and A. Hortaçsu (2003a), “The Winner’s Curse, Reserve Prices, and Endogenous Entry:
    Empirical Insights from eBay Auctions,” RAND Journal of Economics 34:329—355.
Bajari, P. and A. Hortaçsu (2003b), “Cyberspace Auctions and Pricing Issues, A Review of Em-
    pirical Findings,” New Economy Handbook, D. Jones ed., Elsevier.
Bajari, P. and A. Hortaçsu (2004a), “Are Structural Estimates of Auction Models Reasonable?
    Evidence from Experimental Data,” Working Paper (Duke University).
Bajari, P. and A. Hortaçsu (2004b), “Economic Insights from Internet Auctions,” Journal of
    Economic Literature, 17: 457-486.
Bajari, P., S. Houghton, and S. Tadelis (2004), “Bidding for Incomplete Contracts,” Working
    Paper (Duke University).
Bajari, P. and G. Summers (2002), “Detecting Collusion in Procurement Auctions,” Antitrust
    Law Journal 70: 143-170.
Bajari, P. and L. Ye (2003), “Deciding Between Competition and Collusion,” Review of Economics
    and Statistics 85: 971—989.
Balasubramanian, K. and N. Balakrishnan (1994), “Equivalence of Relations for Order Statistics
    for Exchangeable and Arbitrary Cases,” Statistics and Probability Letters 21:405—407.
Baldwin, L., R. Marshall and J. Richard (1997), “Bidder Collusion in U.S. Forest Service Timber
    Sales,” Journal of Political Economy 105: 657—699.
Bartholomew, D. (1959), “A Test of Homogeneity for Ordered Alternatives,” Biometrika 46:36—48.
Berman, S. (1963), “Note on Extreme Values, Competing Risks, and Semi-Markov Processes,”
    Annals of Mathematical Statistics 34:1104—1106.
Berry, S., Levinsohn, J. and Pakes, A. (1995), “Automobile Prices in Market Equilibrium,” Econo-
    metrica, 63: 841—890.
Berry, S. and P. Reiss (forthcoming), “Empirical Models of Entry and Market Structure,” in M.
    Armstrong and R. Porter, eds. Handbook of Industrial Organization, vol. III, Elsevier.
Berry, S. and E. Tamer (2005), “Identification in Models of Oligopoly Entry,” Working Paper
    (Yale University).
Bikhchandani, S. (1988) “Reputation in Repeated Second-Price Auctions,” Journal of Economic
    Theory 46: 97—119.
Bikhchandani, S., P. Haile and J. Riley (2002), “Symmetric Separating Equilibria in English
    Auctions,” Games and Economic Behavior 38:19—27.
Bikhchandani, S. and C. Huang (1989), “Auctions with Resale Markets: An Exploratory Model
    of Treasury Bill Markets,” Review of Financial Studies 2:311—339.
Borenstein, S., J. Bushnell, and F. Wolak (2002), “Measuring Market Ineﬃciencies in California’s
    Restructured Wholesale Electricity Market,” American Economic Review 92: 1376-1405.
Bowman, A., M. Jones and I. Gijbels (1998), “Testing Monotonicity of a Regression,” Journal of
   Computational and Graphical Statistics 7:489—500.
Brannman, L., Klein, D., and L. Weiss (1987), “The Price Eﬀects of Increased Competition in
    Auction Markets,” Review of Economics and Statistics 69: 24-32.
Brendstrup, B. and H. Paarsch (2003), “Nonparametric Estimation of Dutch and First-Price,
    Sealed-Bid Auction Models with Asymmetric Bidders,” Working Paper (University of Iowa).
Brendstrup, B. and H. Paarsch (2004), “Nonparametric Identification and Estimation of Multi-
    Unit, Sequential, Oral Ascending-Price Auctions with Asymmetric Bidders,” Working Paper
    (University of Iowa).
Campo, S. (2002). “Asymmetry and Risk Aversion within the Independent Private Values Par-
   adigm: The Case of Construction Procurement Contracts,” Working Paper (University of
   Southern California).
Campo, S. E. Guerre, I. Perrigne, and Q. Vuong (2002), “Semiparametric Estimation of First-Price
   Auctions with Risk Averse Bidders,” working paper, Pennsylvania State University.
Campo, S., I. Perrigne and Q. Vuong (2003), “Asymmetry in First-Price Auctions with Aﬃliated
   Private Values,” Journal of Applied Econometrics 18:197—207.
Cantillon, E. and M. Pesendorfer (2003), “Combination Bidding in Multi-Unit Auctions ,” Working
    Paper (London School of Economics and Political Science).
Chen, X. (2006), “Large Sample Sieve Estimation of Semi-Nonparametric Models,” Handbook of
    Econometrics Volume 6.
Chernozhukov, V. and H. Hong (2003), “Likelihood Inference in a Class of Nonregular Econometric
    Models,” Econometrica 72: 1445-1480.
Chow, Y. and H. Teicher (1997), Probability Theory: Independence, Interchangeability, and Mar-
   tingales, New York: Springer.
Crémer, J. and R. McLean (1988), “Full Extraction of the Surplus in Bayesian and Dominant
    Strategy Auctions,” Econometrica 56: 1247—57.
David, H. (1981), Order Statistics, New York: Wiley.
David, H. and M. Moeeschberger (1978), The Theory of Competing Risks, New York: Macmillan.
Das Varma, G. (2003), “Bidding for a Process Innovation under Alternative Modes of Competi-
    tion,” International Journal of Industrial Organization,
Dekel, E., D. Fudenberg, and D. Levine (2003), “Learning to Play Bayesian Games,” Games and
    Economic Behavior, 46: 282-303.
Donald, S. and H. Paarsch (1993), “Piecewise Pseudo-Maximum Likelihood Estimation in Empir-
   ical Models of Auctions,” International Economic Review 34:121-148.
Donald, S. and H. Paarsch (1996), “Identification, Estimation, and Testing in Parametric Em-
   pirical Models of Auctions within the Independent Private Values Paradigm,” Econometric
   Theory 12:517—567.
Donald, S. , H.. Paarsch and J. Robert (1999), “Identification, Estimation, and Testing in Empiri-
   cal Models of Sequential, Ascending-Price Auctions with Multi-Unit Demand: An Application
   to Siberian Timber-Export Permits,” Working Paper (University of Iowa).
Einav, L. (2004), “A Note on The Analogies between Empirical Models of Auctions and of Diﬀer-
    entiated Product Markets,” Working Paper (Stanford University).
Esponda, I. (2004), “Information Feedback and Self-Confirming Equilibrium in First Price Auc-
    tions,” Working Paper (Stanford University).
Fermanian, J. (2003), “Nonparametric Estimation of Competing Risks Models with Covariates,”
    Journal of Multivariate Analysis 85: 156—191.
Février, P. (2004), “Semiparametric Identification and Estimation of Common Value Auctions,”
    working paper, (CREST).
Février, P., R. Préget, and M. Visser (2002), “Econometrics of Share Auctions,” Working Paper
    (CREST).
Flambard, V. and I. Perrigne (2003), “Asymmetry in Procurement Auctions: Some Evidence from
    Snow Removal Contracts,” working paper, Pennsylvania State University.
Friedman, M. (1960), A Program for Monetary Stability (Fordham University Press, New York).
Fudenberg, D. and D. Levine (1993), “Self-Confirming Equilibrium,” Econometrica, 61: 523- 546.
Fudenberg, D. and J. Tirole (1991), Game Theory (MIT Press, Cambridge).
Gallant R. and D. Nychka (1987), “Semi-nonparametric Maximum Likelihood Estimation,” Econo-
    metrica 55:363—390.
Gijbels, I., P. Hall, M.C. Jones, and I. Koch (2000). “Tests for Monotonicity of a Regression Mean
    with Guaranteed Level,” Biometrika 87:663—673.
Gilley, O. and G. Karels (1981). “The Competitive Eﬀect in Bonus Bidding: New Evidence,” Bell
     Journal of Economics: 12:637—648.
Goeree, J. (2003). “Bidding for the Future: Signaling in Auctions with an Afermarket,” Journal
    of Economic Theory 108: 345—364.
Guerre, E., I. Perrigne and Q. Vuong (1995), “Nonparametric Estimation of First-Price Auctions,”
    Working Paper #9504 (University Southern California).
Guerre, E., I. Perrigne and Q. Vuong (2000), “Optimal Nonparametric Estimation of First-Price
    Auctions,” Econometrica 68:525—574.
Haile, P. (1999), “Auctions with Resale,” working paper, University of Wisconsin.
Haile, P. (2001), “Auctions with Resale Markets: An Application to U.S. Forest Service Timber
    Sales,” American Economic Review 91:399—427.
Haile, P. (2003), “Auctions with Private Uncertainty and Resale Opportunities,” Journal of Eco-
    nomic Theory 108:72—110.
Haile, P., H. Hong and M. Shum (2003), “Nonparametric Tests for Common Values in First-Price
    Sealed-Bid Auctions,” NBER Working Paper 10105.
Haile, P. and E. Tamer (2001), “Inference from English Auctions with Asymmetric Aﬃliated
    Private Values,” Working Paper (University of Wisconsin-Madison).
Haile, P. and E. Tamer (2002), “Inference with an Incomplete Model of English Auctions,” Working
    Paper, Princeton University.
Haile, P. and E. Tamer (2003), “Inference with an Incomplete Model of English Auctions,” Journal
    of Political Economy 111:1—52.
Hall, P. and N. Heckman (2000). “Testing for Monotonicity of a Regression Mean by Calibrating
     for Linear Functions,” Annals of Statistics 28: 20—39.
Harstad, R. and M. Rothkopf (2000), “An ‘Alternating Recognition’ Model of English Auctions,”
    Management Science 46:1—12.
Heckman, J. and B. Honoré (1989), “The Identifiability of the Competing Risks Model,” Bio-
    metrika 76:325—330.
Heckman, J. and B. Honoré (1990), “The Empirical Content of the Roy Model,” Econometrica
    58:1121—1149.
Hendricks, K. and H. Paarsch (1995), “A Survey of Recent Empirical Work Concerning Auctions,”
   Canadian Journal of Economics 28:403—426.
Hendricks, K. and R. Porter (forthcoming), “Lectures on Auctions: An Empirical Perspective,” in
   M. Armstrong and R. Porter, eds, Handbook of Industrial Organization, vol III, Elsevier.
Hendricks, K., J. Pinkse and R. Porter (2003), “Empirical Implications of Equilibrium Bidding in
   First-Price, Symmetric, Common Value Auctions,” Review of Economic Studies 70:115—145.
Hendricks, K. and R. Porter (1988), “An Empirical Study of an Auction with Asymmetric Infor-
   mation,” American Economic Review 78:865—883.
Hendricks, K., R. Porter and B. Boudreau (1987), “Information, Returns, and Bidding Behavior
   in OCS Auctions: 1954-1969,” Journal of Industrial Economics 35:517—42.
Hendricks, K., R. Porter and C. Wilson (1994), “Auctions for Oil and Gas Leases with an Informed
   Bidder and a Random Reservation Price,” Econometrica 62:1415—44.
Hirano, K. and J. Porter (2003), “Asymptotic Eﬃciency in Parametric Structural Models with
    Parameter-Dependent Support,” Econometrica 71:1307-38.
Hollander, M. and D. Wolfe (1999), Nonparametric Statistical Methods, New York: John Wiley
    and Sons.
Hong, H. and M. Shum (2000), “Structural Estimation of Auction Models,” in F. Patrone, I.
   Garcia-Jurado, and S. Tijs, eds., Game Practice" Contributions from Applied Game Theory,
   Boston: Kluwer.
Hong, H. and M. Shum (2002), “Increasing Competition and the Winner’s Curse: Evidence from
   Procurement,” Review of Economic Studies 69:871—898.
Hong, H. and M. Shum (2003), “Econometric Models of Ascending Auctions,” Journal of Econo-
   metrics 112:327—358.
Hortaçsu, A. (2002), “Mechanism Choice and Strategic Bidding in Divisible Good Auctions: An
    Empirical Analysis of the Turkish Treasury Auction Market,” Working Paper (University of
    Chicago).
Izmalkov, S. (2003), “English Auctions with Reentry,” Working Paper (MIT)
Jackson, M. and J. Swinkels (forthcoming), “Existence of Equilibria in Single and Double Private
    Value Auctions,” Econometrica.
Jackson, M., L. Simon, J. Swinkels, and W. Zame (2002), “Equilibrium, Communication, and
    Endogenous Sharing Rules in Discontinuous Games of Incomplete Information,” Econometrica
    70: 1711-1740.
Jofre-Bonet, M. and M. Pesendorfer (2000), “Bidding Behavior in Repeated Procurement Auc-
     tions,” European Economic Review 44:1006—1020.
Jofre-Bonet, M. and M. Pesendorfer (2003), “Estimation of a Dynamic Auction Game,” Econo-
     metrica, 71: 1443—1489.
Judd, K. (1998), Numerical Methods in Economics, Cambridge: MIT Press.
Kagel, J. (1995), ”Auctions: A Survey of Experimental Research,” in The Handbook of Ex-
   perimental Economics, J. Kagel and A. Roth, eds. Princeton: Princeton University Press,
   pp.501-585.
Katzman, B. and M. Rhodes-Kropf (2002), “The Consequences of Information Revealed in Auc-
    tions,” working paper, Columbia University.
Klemperer, P (1999), “Auction Theory: A Guide to the Literature,” Journal of Economic Surveys
    13:227—286.
Klemperer, P. (2002), “What Really Matters in Auction Design,” Journal of Economic Perspectives
    16: 169—189.
Koopmans, T. (1945). “Statistical Estimation of Simultaneous Economic Relations,” Journal of
   the American Statistical Association 40: 448—466.
Kotlarski, I. (1966), “On Some Characterization of Probability Distributions in Hilbert Spaces,”
    Annali di Matematica Pura ed Applicata 74:129—134.
Krasnokutskaya, E. (2004), “Auction Models with Unobserved Heterogeneity: Application to the
    Michigan Highway Procurement Auctions,” Working Paper (University of Pennsylvania).
Krishna, V. (2002), Auction Theory (Academic Press, San Diego).
Laﬀont, J. (1997), “Game Theory and Empirical Economics: The Case of Auction Data,” European
    Economic Review 41:1—35.
Laﬀont, J., H. Ossard and Q. Vuong (1995), “Econometrics of First-Price Auctions,” Econometrica
    63:953—980.
Laﬀont, J. and Q. Vuong (1993), “Structural Econometric Analysis of Descending Auctions,”
    European Economic Review 37:329—341.
Laﬀont, J. and Q. Vuong (1996), “Structural Analysis of Auction Data,” American Economic
    Review, Papers and Proceedings 86:414—420.
Lancaster, T. (1990), The Econometric Analysis of Transition Data: An Econometric Society
    Monograph, Cambridge University Press.
Lebrun, B. (1999), “First Price Auctions in the Asymmetric N Bidder Case,” International Eco-
    nomic Review, 40: 125-142.
Levin, D. and J. Smith (1994), “Equilibrium in Auctions with Entry,” American Economic Review
    84: 585—599.
Li, T., (2002), “Robust and Consistent Estimation of Nonlinear Errors-in-Variables Models,”
    Journal of Econometrics 110: 1-26.
Li, T. (2003), “Econometrics of First-Price Auctions with Entry and Binding Reservation Prices,”
     Working Paper (Indiana University).
Li, T., I. Perrigne and Q. Vuong (2000), “Conditionally Independent Private Information in OCS
     Wildcat Auctions,” Journal of Econometrics 98:129—161.
Li, T., I. Perrigne, and Q. Vuong (2002), “Structural Estimation of the Aﬃliated Private Value
     Auction Model,” RAND Journal of Economics 33:171—193.
Li, T. and Q. Vuong (1998), “Nonparametric Estimation of the Measurement Error Model Using
     Multiple Indicators,” Journal of Multivariate Analysis 65:139—165.
Li, T. and X. Zheng (2005), “Procurement Auctions with Entry and an Uncertain Number of
     Actual Bidders: Theory, Structural Inference, and an Application,” Working Paper, Indiana
     University.
Lizzeri, A. and N. Persico (2000), “Uniqueness and Existence of Equilibrium in Auctions with a
    Reserve Price,” Games and Economic Behavior 30: 83-114.
Loader, C. (1999), Local Regression and Likelihood, New York: Springer.
Lucking-Reiley, D. (2000), “Auctions on the Internet: What’s Being Auctioned, and How?” Journal
    of Industrial Economics 48:227—252.
Manski, C. (1995), Identification Problems in the Social Sciences, Harvard University Press.
Manski, C. and E. Tamer (2002), “Inference on Regressions with Interval Data on a Regressor or
   Outcome.” Econometrica 70: 519—546.
Maskin, E., and J. Riley (1984), “Optimal Auctions with Risk Averse Buyers,” Econometrica 52:
   1473-1518.
Maskin, E., and J. Riley (2003), “Uniqueness of Equilibrium in Sealed High-Bid Auctions,” Games
   and Economic Behavior, 45: 395—409.
Matthews, S. (1984), “Information Acquisition in Discriminatory Auctions,” in M. Boyer and R.E.
    Kihlstrom, eds. Bayesian Models in Economic Theory, New York:North-Holland.
McAdams, D. (2003), “Characterizing Equilibria in Asymmetric First-Price Auctions,” Working
   Paper (MIT).
McAdams, D. (2004a), “Monotone Equilibrium in Multi-Unit Auctions,” Working Paper (MIT).
McAdams, D. (2004b), “Uniqueness in First-Price Auctions with Aﬃliation,” Working Paper
   (MIT).
McAfee R.P. and J. McMillan (1987a), “Auctions and Bidding,” Journal of Economic Literature
   25:669—738.
McAfee, P. and J. McMillan (1992), “Bidding Rings,” American Economic Review, 82: 579-599.
McAfee, R. P. and J. McMillan (1996), “Analyzing the Airwaves Auction,” Journal of Economic
   Perspectives 10:159—75.
McAfee, R. P., J. McMillan and M. Whinston (1989), “Multiproduct Monopoly, Commodity
   Bundling and Correlation of Values,” Quarterly Journal of Economics 102: 371—383.
McAfee, P., D. Quan and D. Vincent (2002), “Minimum Acceptable Bids, with Application to
   Real Estate Auctions,” Journal of Industrial Economics 50: 391-416.
McAfee, R.P. and P. Reny (1992), “Correlated Information and Mechanism Design,” Econometrica
   60: 395—421.
McAfee, R. P., W. Takacs and D. R. Vincent (1999), “Tariﬀying Auctions,” RAND Journal of
   Economics 30:158—179.
McFadden, D. (1989), “Testing for Stochastic Dominance,” in Studies in the Economics of Uncer-
   tainty: In Honor of Josef Hadar (Springer, New York).
Meilijson, I. (1981), “Estimation of the Lifetime Distribution of the Parts from the Autopsy
    Statistics of the Machine,” Journal of Applied Probability 18:829—838.
Milgrom, P. (1981), “Good News and Bad News: Representation Theorems and Applications,”
    Bell Journal of Economics 12: 380—391.
Milgrom, P. (2004), Putting Auction Theory to Work, Cambridge: Cambridge University Press.
    Milgrom, P. R. and R. J. Weber (1982), “A Theory of Auctions and Competitive Bidding,”
    Econometrica 50:1089—1122.
Myerson, R. (1981), “Optimal Auction Design,” Mathematics of Operations Research 6:58—73.
Ockenfels, A. and Roth, A.E. (2004), “Late Bidding in Second Price Internet Auctions: Theory
    and Evidence Concerning Diﬀerent Rules for Ending an Auction,” Games and Economic
    Behavior, (forthcoming).
Olley, S. and A. Pakes (1996), “The Dynamics of Productivity in the Telecommunications Equip-
     ment Industry,” Econometrica 64:1263—1297.
Paarsch, H. (1992a), “Deciding Between Common and Private Values Paradigms in Empirical
    Models of Auctions,” Journal of Econometrics 51:191—215.
Paarsch, H. (1992b), “Empirical Models of Auctions and an Application to British Columbian
    Timber Sales,” Research Report 9212 (University of Western Ontario).
Paarsch, H. (1994), “A Comparison of Estimators for Empirical Models of Auctions,” Annales
    d’Economie et de Statistique 34: 143—157.
Paarsch, H. (1997), “Deriving an Estimate of the Optimal Reserve Price: An Application to
    British Columbian Timber Sales,” Journal of Econometrics 78:333—57.
Perrigne, I. and Q. Vuong (1999), “Structural Econometrics of First-price Auctions: A Survey of
    Methods,” Canadian Journal of Agricultural Economics 47:203—223.
Perrigne, Isabelle (2003), “Random Reserve Prices and Risk Aversion in Timber Sale Auctions,”
    Working Paper (Pennsylvania State University).
Pesendorfer, M. (2000), “A Study of Collusion in First-Price Auctions, ” Review of Economic
    Studies, 67, 381-411.
Peters, M. and S. Severinov (2002), “Internet Auctions with Many Traders,” Working Paper (Duke
    University).
Pinkse, J. and G. Tan (2004), “The Aﬃliation Eﬀect in First-Price Auctions,” forthcoming in
    Econometrica.
Politis, D., J. Romano and M. Wolf (1999), Subsampling (Springer Verlag, New York).
Porter, R. and J. D. Zona (1993), “Detection of Bid Rigging in Procurement Auctions,” Journal
    of Political Economy 101: 518-538.
Porter, R. and J. D. Zona (1999), “Ohio School Milk Markets: An Analysis of Bidding,” RAND
    Journal of Economics 30: 263-288.
Prakasa-Rao, B.L.S. (1992), Identifiability in Stochastic Models: Characterization of Probability
    Distributions (Academic Press, San Diego).
Quint, D. (2004), “Optimal Second Price Auctions with Positively Correlated Private Values and
    Limited Information,” SIEPR Discussion Paper 03-14, Stanford University.
Reiss, P. and F. Wolak (2005), “Structural Econometric Modeling: Rationales and Examples from
    Industrial Organization,” in J. Heckman, ed., Handbook of Econometrics, vol 6.
Romano, J. (1988), “A Bootstrap Revival of Some Nonparametric Distance Tests,” Journal of the
   American Statistical Association 83: 698—708.
Romano, J. (1989), “Bootstrap and Randomization Tests of Some Nonparametric Hypotheses,”
   Annals of Statistics 17: 141—159.
Samuelson, W. (1985), “Competitive Bidding with Entry Costs,” Economics Letters 17:53—57.
Schennach, S. (2004), “Estimation of Nonlinear Models with Measurement Error,” Econometrica
    72: 33-75.
Shneyerov, A. (2005), “An Empirical Study of Auction Revenue Rankings: The Case of Municipal
    Bonds,” Working Paper (University of British Columbia).
Silverman, B. (1986), Density Estimation for Statistics and Data Analysis (Chapman and Hall,
     London).
Skryzpacz, A. and H. Hopenhayn (2004), “Tacit Collusion in Repeated Auctions,” Journal of
    Economic Theory, 114: 153-69.
Smiley, A. (1979), Competitive Bidding Under Uncertainty: The Case of Oﬀshore Oil, Cambridge:
    Ballinger.
Song, U. (2003), “Nonparametric Estimation of an eBay Auction Model with an Unknown Number
    of Bidders,” Working Paper (University of Wisconsin).
Song, U. (2004), Structural Analysis of Auction Data with an Unknown Number of Bidders, Ph.D.
    Dissertation, University of Wisconsin.
Su, L. and H. White (2003), “Testing Conditional Independence via Empirical Likelihood,”
    Working Paper (University of California San Diego).
Thiel, S. (1988), “Some Evidence on the Winner’s Curse,” American Economic Review, 78: 884-
    895.
Wang, M., N. P. Jewell and W. Tsai (1986), “Asymptotic Properties of the Product Limit Estimate
   Under Random Truncation,” Annals of Statistics 14: 1597—1605.
Whinston, M. (1989), “Tying, Foreclosure, and Exclusion,” American Economic Review 90: 837—
   859.
Wilson, R. (1967), “Competitive Bidding with Asymmetric Information,” Management Science
    11:816—820.
Wilson, R. (1979), “Auctions of Shares,” Quarterly Journal of Economics 93:675—689.
Wolak, F. (2003) “Identification and Estimation of Cost Functions Using Observed Bid Data: An
    Application to Electricity Markets,” in Advances in Economics and Econometrics - Theory
    and Applications, Eighth World Congress, M. Dewatripont, L. Hansen and P. Turnovsky, ed.,
    Econometric Society Monographs, Cambridge University Press, Cambridge, vol. 2., 115-149
Wolfram, C. (1998), “Strategic Bidding in a Multi-Unit Auction, An Empirical Analysis of Bids
    to Supply Electricity in England and Wales,” RAND Journal of Economics 29: 703—725.
Woodroofe, M. (1985), “Estimating a Distribution Function with Truncated Data,” Annals of
   Statistics 13:163—177.
Vickrey, W. (1961), “Counterspeculation, Auctions, and Competitive Sealed Tenders,” Journal of
    Finance 16:8—37.
Zulehner, C. (2003), “Bidding Behavior and Bidders’ Valuations in Austrian Cattle Auctions,”
    Working Paper (University of Vienna).



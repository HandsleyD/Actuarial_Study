---
normalized_id: shared-pdf-reference-vega-redondo-f-evolution-games-and-economic-behaviour-oup-1996-isbn-0198774737-o-222s-gg
exam_code: SHARED
material_scope: vega-redondo f. evolution, games, and economic behaviour (oup, 1996)(isbn 0198774737)(o)(222s)_gg_.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Vega-Redondo F. Evolution, games, and economic behaviour (OUP, 1996)(ISBN 0198774737)(O)(222s)_GG_.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-vega-redondo-f-evolution-games-and-economic-behaviour-oup-1996-isbn-0198774737-o-222s-gg

Evolution, Games, and Economic Behaviour
This page intentionally left blank
Evolution, Games, and Economic Behaviour




               Fernando Vega-Redondo
                    Great Clarendon Street, Oxford OX2 6DP
    Oxford University Press is a department of the University of Oxford
 It furthers the University's objective of excellence in research, scholarship,
                   and education by publishing worldwide in
                                Oxford New York
            Auckland Bangkok Buenos Aires Cape Town Chennai
         Dar es Salaam Delhi Hong Kong Istanbul Karachi Kolkata
      Kuala Lumpur Madrid Melbourne Mexico City Mumbai Nairobi
                   São Paulo Shanghai Taipei Tokyo Toronto
        Oxford is a registered trade mark of Oxford University Press
                    in the UK and in certain other countries
                         Published in the United States by
                    Oxford University Press Inc., New York
                          © Fernando Vega-Redondo, 1996
              The moral rights of the authors have been asserted
                Database right Oxford University Press (maker)
                               First published 1996
     All rights reserved. No part of this publication may be reproduced,
 stored in a retrieval system, or transmitted, in any form or by any means,
     without the prior permission in writing of Oxford University Press,
or as expressly permitted by law, or under terms agreed with the appropriate
    reprographics rights organization. Enquiries concerning reproduction
  outside the scope of the above should be sent to the Rights Department,
                 Oxford University Press, at the address above
       You must not circulate this book in any other binding or cover
          and you must impose this same condition on any acquirer
                   British Library Cataloguing in Publication Data
                                   Data available
                 Library of Congress Cataloging in Publication Data
                                   Data available
                            ISBN 0-19-877473-7 (Hbk)
                            ISBN 0-19-877472-9 (Pbk)
A mis padres
This page intentionally left blank
                                                   Preface
This is a book on Evolutionary Game Theory from an economic viewpoint. Indeed, to mention the obvious, I should
more appropriately describe it as reﬂecting a particular economist's point of view of the discipline. Even though this
view is certainly not unbiased, I still hope that it is sufﬁciently balanced to be useful and informative.
I have tried to provide the reader with a general overview of the different approaches pursued by the literature in
recent years. Some of its developments are treated in detail. For those that are not, at least a summary is included
which should help the reader place them in the general unfolding of ideas. In any case, what I have certainly not
attempted to do is to produce an “encyclopaedic account” of the subject. This, in my view, is hardly of much use to
someone who wants to get acquainted with any new ﬁeld of inquiry. Moreover, the recent surge of evolutionary
research has led to a rather diffuse body of literature which is still too unsettled to make such an exercise sufﬁciently
fruitful.
Precisely due to this state of (evolutionary) ﬂux, I have thought it important to place recent developments in the wider
theoretical and historical perspective provided by the original (biologically motivated) discipline. This much more
mature area of research provides a good framework of reference to understand the approach, questions, and tentative
answers put forward by economic-oriented evolutionary models.
Despite this useful biological perspective, this book is essentially motivated by the belief that evolutionary theory
affords a versatile and powerful tool for the analysis of non-biological contexts as well; especially, that is, those of a
social or economic nature. Of course, the proof of this “pudding” is in the eating. This is why the book provides a
substantial number of applications (mostly of an economic character) which may convince the reader of its wide
potential.
To end this short preface, I could adhere to academic ritual and express my thanks to the large number of people who
have helped and inﬂuenced me in the course of the years. Since this list is exceptionally long, I will simply mention
those colleagues and students who have directly participated in the present endeavour. They have read parts of the
manuscript (even the whole of it), sometimes detecting errors and imprecisions, in other cases simply offering their
honest advice. My sincere thanks to Carlos Alós, Ana Begoña Ania, V. Bhaskar, Larry Samuelson, Joel Sobel, and Chu
Lei Yang.
viii                                                  Preface


I would also like to express my gratitude to the different institutions whose support and hospitality has made the
completion of this book a pleasurable task during part of my sabbatical year. Besides my home institution at the
Universidad de Alicante, these are the Department of Economics of the University of California at San Diego, the
Institute for Economic Development at Boston University, and the Instituto de Análisis Económico (CSIC) at the
Universitat Autònoma de Barcelona. Throughout, I have received ﬁnancial assistance from the CICYT (Project nos.
PS90-156 and PB94-1504) and the Sabbatical Program of the Spanish Ministry of Education.
Finally, I would like to turn to the more personal side of these matters where any expression of thanks is always an
understatement. To stress their unique role, I want to focus on just three persons whose disinterested and open-ended
support was consistently there whenever I needed it. To two of them, certainly irreplaceable (as biology goes), this
book is dedicated. To the other one, my friend (and wife) Mireia, moltes gràcies.
                                    Table of Contents
1 Introduction                                                                             1
  1.1 What is an Evolutionary Model                                                        1
  1.2 Why Evolutionary Models?                                                             2
  1.3 The Plan of What Follows                                                             3
2 Static Analysis                                                                         11
  2.1 Theoretical Framework                                                               11
      2.1.1 Basic model                                                                   11
      2.1.2 Alternative scenarios: “Playing the Field” or “Pairwise Contests”             13
  2.2 Evolutionarily Stable Strategy                                                      13
      2.2.1 General deﬁnition                                                             13
      2.2.2 Alternative interpretations of ESS: monomorphic vs. polymorphic populations   14
  2.3 Examples                                                                            15
      2.3.1 Pairwise contests: the Hawk– Dove game                                        15
      2.3.2 Playing the ﬁeld: the Sex-Ratio game                                          17
  2.4 ESS and Reﬁnements of Nash Equilibrium                                              20
  2.5 The Existence of an ESS                                                             21
  2.6 Asymmetric Contests                                                                 25
      2.6.1 Introduction                                                                  25
      2.6.2Ex ante symmetry with ex post asymmetries                                      25
      2.6.3 Example: the Hawk– Dove game revisited (I)                                    29
      2.6.4 Extensive-form contests                                                       30
  2.7 ESS and Finite Populations                                                          31
      2.7.1 The “spite” of an ESS                                                         31
      2.7.2 An example of oligopolistic competition                                       33
  2.8 Evolution and Cheap Talk                                                            35
3 Basic Dynamic Analysis                                                                  43
  3.1 Introduction                                                                        43
  3.2 The Replicator Dynamics                                                             44
      3.2.1 The discrete-time case                                                        44
      3.2.2 The continuous-time case                                                      45
      3.2.3 Properties of the Replicator Dynamics                                         46
  3.3 The ESS and the Replicator Dynamics                                                 48
      3.3.1 The implicit dynamics of a monomorphic ESS                                    48
      3.3.2 ESS conditions and polymorphic stability                                      49
x                                               Table of Contents


  3.4 Evolutionary Dynamics and Nash Reﬁnements                      52
  3.5 Some Examples                                                  55
      3.5.1 The Hawk– Dove game revisited (II)                       55
      3.5.2 The Rock-Scissors-Paper game                             56
  3.6 Replicator Dynamics in Mixed Strategies                        57
      3.6.1 The model                                                57
      3.6.2 ESS conditions and dynamic evolutionary stability        59
  3.7 Permanence and Survival                                        61
      3.7.1 Deﬁnitions                                               61
      3.7.2 Necessary conditions for persistence and permanence      62
      3.7.3 Sufﬁcient conditions for permanence                      64
      3.7.4 Average behaviour in permanent systems                   66
  3.8 Population Genetics                                            68
  3.9 The Prisoner's Dilemma                                         72
      3.9.1 Basic (unperturbed) model                                73
      3.9.2 Noisy dynamics                                           76
  3.10 Pollination and Reward: An Example                            79
      3.10.1 Preliminaries                                           79
      3.10.2 The model                                               81
4 Evolution in Social Environments                                   85
  4.1 Introduction                                                   85
  4.2 Theoretical Framework                                          86
  4.3 Evolutionary Growth Dynamics                                   87
      4.3.1 The model                                                87
      4.3.2 Monotonicity properties                                  87
      4.3.3 Some examples                                            89
  4.4 Dynamics of Monotonic Evolutionary Systems                     92
      4.4.1 Dynamic stability and Nash equilibrium                   92
      4.4.2 Set stability                                            95
      4.4.3 Long-run regularities                                    98
  4.5 Evolution and Rationality                                     100
      4.5.1 Evolution and pay-off dominance                         100
      4.5.2 Evolution, iterative dominance, and rationalizability   104
  4.6 General Evolutionary Processes                                106
      4.6.1 Gradient monotonicity                                   107
      4.6.2 Dynamic stability and rationality                       107
  4.7 Examples                                                      109
      4.7.1 Trading complementarities                               109
      4.7.2 Risky trading                                           110
  4.8 A Simpliﬁed Ultimatum Game                                    114
  4.9 A Hierarchic Model of Cultural Evolution                      121
5 Stochastic Evolution                                              127
  5.1 Introduction                                                  127
                                               Table of Contents    xi


  5.2 A Simple Example                                             128
  5.3 Theoretical Framework                                        133
  5.4 Analysis                                                     135
      5.4.1 Large matching noise                                   136
      5.4.2 Small matching noise                                   140
      5.4.3 On the role of noise in evolutionary models            142
      5.4.4 Extensions                                             144
  5.5 Continuous-Time Dynamics                                     146
  5.6 Rate of Convergence and Interaction Pattern                  150
      5.6.1 Global interaction                                     150
      5.6.2 Local interaction                                      154
  5.7 The Evolution of Walrasian Behaviour                         157
6 Evolution, Expectations, and Drift                               161
  6.1 Introduction                                                 161
  6.2 General Theoretical Framework                                162
  6.3 Static Expectations                                          165
  6.4 Simultaneous Contexts                                        166
      6.4.1 Co-ordination games                                    166
      6.4.2 A simple model of bargaining                           170
  6.5 Multi-Stage Contexts                                         173
      6.5.1 Introduction                                           173
      6.5.2 Forward induction and efﬁcient co-ordination           174
  6.6 Dynamic Expectations                                         179
      6.6.1 Introduction                                           179
      6.6.2 Admissible updating rules                              180
      6.6.3 Equilibrium volatility                                 181
  6.7 On the Evolution of Sophistication                           186
      6.7.1 Introduction                                           186
      6.7.2 The model                                              187
      6.7.3 Narrow sophistication range                            190
      6.7.4 Wide sophistication range                              192
      6.7.5 Discussion                                             193
Afterword                                                          195
7 Appendix                                                         197
  7.1 Liapunov's Theorem                                           197
  7.2 Liouville's Theorem                                          197
  7.3 A Characterization of Negative-Deﬁniteness                   198
  7.4 Invariant Distribution: Graph Characterization               199
Bibliography                                                       201
Subject Index                                                      207
This page intentionally left blank
                                             1 Introduction
Before starting to explore in detail the wide ﬁeld of Evolutionary Theory, let me begin by posing the following two
basic questions:
  (i) What is an evolutionary model?
  (ii) Why should we be interested in evolutionary models?
Once some simple answers to these questions are sketched, the reader may still feel inclined to press ahead. With this
in mind, the present introductory chapter closes with a plan of what comes next.


1.1 What Is an Evolutionary Model?
Evolution, as a vague general idea, could perhaps be suitably used to refer to any dynamic process. Here, however, it
will be understood in the narrower sense espoused by biology and, following its lead, by other social sciences.
Essentially, a dynamic model will be termed evolutionary if its laws of motion reﬂect the following “forces”: selection,
mutation and inheritance, appropriately interpreted for the context at hand.
Out of these three forces, selection was the ﬁrst to be well understood in biology. Darwin, in his The Origin of the Species,
conceived it in a form that has been essentially maintained to the present date. Since then, the phrase “the survival of
the ﬁttest” has cropped up here and there in the most diverse scenarios and for the most varied ends. It has become, in
a sense, a well-accepted phrase applied in very different lines of discourse: scientiﬁc, of course, but often also political
or even ethical.
Loosely speaking, selection is understood in biology as the force which, reﬂecting the conditions of the environment,
determines the chances of survival
2                                                Chapter 1. Introduction


and “reproductive success” of an individual exhibiting a certain type of behaviour. So generally deﬁned, it is
tautological to assert that selection will be important in explaining short-run behaviour, be it animal, social, or strictly
economic. The challenge, however, is twofold: ﬁrst, to identify a useful (operational) concept to which this force may
be related in a particular context; secondly, to understand the signiﬁcant long-run effects produced by the repeated
operation of short-run selection forces.
As compared to selection, the other two evolutionary forces, mutation and inheritance, have been much harder to
formulate and understand in the history of biological thought. In recent decades, to be sure, biologists have progressed
enormously in tackling them. Despite such progress, and due to their inherent complexity, existing models of
theoretical biology only incorporate mutation and inheritance in a rather simplistic fashion.
Roughly speaking, inheritance is to be conceived as the force that links patterns of behaviour across consecutive
generations. It is, of course, a precondition for selection to be effective that inheritance be able to transfer behaviour
across generations (at least some of its traits) in a sufﬁciently stable manner. Selection and inheritance are, in a sense,
two sides of the same coin in any evolutionary model.
As mentioned, evolutionary coins (rare mutants) come with three sides. Mutation, the third side of the coin, also fulﬁls
a crucial role in long-run evolution. It is the force that, by generating new and previously non-existent behaviour, is
able to enrich prior patterns of behaviour so that adaptation to the environment is possible at all.
Inspired by their role in biological settings, these three forces have been modelled to play analogous functions in the
still quite tentative instances in which evolutionary models have been applied to social contexts. In this new realm of
application, the approach must necessarily be much more ﬂexible and open-ended than in biology. Evolutionary forces
in social environments are always multifaceted, often context-dependent, and, in any case, ever-changing. Moreover, as
suggested above, it is seldom obvious what is the best operational content for these forces in many social and
economic scenarios. For example: Is differential proﬁt the best basis for understanding the interﬁrm dynamics of
industrial competition, or is it instead differential growth rates and bankruptcy considerations which provide the best
explanation? As in biology (or, for that matter, any other science), this difﬁcult kind of issue can only be settled
empirically.


1.2 Why Evolutionary Models?
In the real world, essentially every important decision problem is enormously complicated. Indeed, people are often
forced to tackle several such problems
                                            1.3. The Plan of What Follows                                               3


simultaneously. Thus, given our limited capabilities of attention, computation, association, etc., it is no wonder that we
usually resort to certain relatively simple rules that, according to our past experience, have worked out reasonably well.
On the basis of our past “record” of the performance achieved by such rules, we tend to adjust our relative disposition
to adopting each one of them. This, one might dare to say, looks as if we were implicitly carrying out a certain process
of internal (mental) selection, quite reminiscent of the phenomenon of biological selection described above.
But, superimposed on this internal process, social and economic environments often display an additional level of
selection, now closer in spirit and form to biological selection. In markets, for example, only those ﬁrms which do
relatively well can survive in the long run. Or, within organizations under some sort of pressure, only those members
who perform satisfactorily (always in relative terms) will tend to remain part of it. Again, such selection (with its
implicit “inheritance” as a twin counterpart) appears to play in these social settings a role altogether analogous to that
played in biological contexts.
The complexity of the environment and our consequent imperfect understanding of it always holds the potential for
some further improvements in our array of actions, strategies, rules, etc. Sometimes, the discovery of new, proﬁtable
alternatives comes about by pure (unintended) serendipity. In other cases, one aims consciously for new courses of
action by combining a limited understanding of the problem with some random sample of new choices. Occasionally, a
good, really good, action is found. Then it is selected, thus becoming part of the present and future choice set. A
beneﬁcial “mutation” has occurred which will surely affect the evolutionary course of future actions.
Of course, this discussion is meant to be only suggestive, a metaphorical basis for motivating the reader. She (or he)
should not conclude from the preceding discussion that evolution in social and economic systems is “just as in
biology”. Indeed, evolutionary models in biology can and will be important sources of tools and inspiration for an
evolutionary analysis of social environments. However, as will be apparent as we proceed, much needs to be built upon
such foundations to produce an evolutionary discipline which is suitable for social and economic analysis.


1.3 The Plan of What Follows
The next chapter deals with basic evolutionary analysis as it originated in, and has been applied to, theoretical biology.
First, its theoretical framework is presented. In it, the population is assumed to be very large (formally, a continuum),
either interacting through random bilateral matching to play some bilateral game (the most common scenario) or by
“playing the ﬁeld” (joint population-wide interaction).
4                                               Chapter 1. Introduction


This framework is maintained throughout the ﬁrst part of the book (Chapters 2 to 4).
Much of the original evolutionary analysis centred on the key notion of Evolutionary Stable Strategy (ESS), the ﬁrst
formal notion of evolutionary equilibrium to be developed in the early 1970s. Once the concept of ESS is deﬁned,
discussed, and illustrated by a collection of examples, its (problematic) existence is addressed. Then, this concept is
related to some of the most signiﬁcant notions of equilibrium used in (classical) Game Theory, paying special attention
to some of the so-called reﬁnements of Nash equilibrium. In fact, the ESS concept is itself found to be one such
reﬁnement, more demanding, for example, than the well-known notion of perfect equilibrium.
The second part of Chapter 2 deals with different variations of the general framework which raise some interesting
issues. First, the focus is on the case of asymmetric contexts where not all participants in the interaction play the same
role (for example, contexts where there is an asymmetry between those that own a key resource and those that do not).
Then, the analysis turns to interactions that take place within a ﬁnite population. The important difference between
this context and that of an “inﬁnite” population is that, if the population is (modelled as) ﬁnite, a single individual may
have signiﬁcant effect on the rest. This leads to a modiﬁcation of the ESS concept which allows for the consideration of
so-called (evolutionary) spite. Its implications are illustrated by means of a simple example of oligopolistic competition.
Finally, the chapter ends with an interesting application of the “static” evolutionary approach to the topic of (cheap)
communication in games. Building upon implicit ideas of neutral drift (a phenomenon which will explicitly reappear
later on in different contexts), evolutionary stability is shown to provide a natural basis for understanding the
endogenous rise of cheap but meaningful talk in games. In certain set-ups (e.g. games of common interest) it is able to
achieve players' efﬁcient co-ordination.
Chapter 3 turns to dynamics. Here, the key theoretical object is the Replicator Dynamics (RD), a stylized formalization
of Darwinian natural selection which follows directly from an identiﬁcation of pay-off and “ﬁtness”, i.e. reproductive
success. The RD is ﬁrst motivated in discrete time, subsequently reformulated in a continuous-time set-up. Then, the
relationship between the RD and the “static” concept of ESS is explored. This is carried out on two levels: ﬁrst, by
formulating explicitly the merely implicit dynamics underlying the ESS concept; secondly, by establishing a remarkable
role for the ESS concept as a sufﬁcient condition for asymptotic stability of the RD.
In parallel with Chapter 2, this chapter also investigates the formal relationship between the equilibrium notions
derived from the RD and those of classical Game Theory. For instance, the requirement of asymptotic stability is seen
to induce a reﬁnement of perfect (and therefore Nash) equilibrium. As before, examples are discussed which illustrate
the different issues involved.
Next, the RD is extended to the general context where players can adopt
                                            1.3. The Plan of What Follows                                                5


(any) mixed strategies. Despite its formal complexity (the resulting dynamical system is inﬁnite-dimensional), the
analysis reinforces the formerly established link between the ESS concept and dynamic stability. In this more general
context, the ESS condition is not only shown to be still a sufﬁcient condition for dynamic stability, but also seen to
become necessary in a suitable “average” sense.
Motivated by the stringent conditions generally required for dynamic stability, Chapter 3 turns its attention towards an
analysis that (free from the “ballast” of stability requirements) is concerned with the existence of some long-run
regularities. Two key ideas in this respect are the similar notions of permanence and survival. Both are concerned with the
question of whether a particular strategy can be certain to remain present (at a signiﬁcant frequency) in the long run.
Necessary and sufﬁcient conditions for this are explored. As it turns out, they are closely linked to the presence of
cyclical behaviour in the dynamic system, which in turn ensures the appearance of well-deﬁned “average behaviour” in
the long run.
This chapter also includes a brief discussion of the relationship between the RD and its direct predecessor in the
biological literature: the dynamic model of population genetics extensively studied in the 1930s by Fisher and others.
Conceptually, these models are mirror images of each other. (Whereas the RD abstracts from genetics and focuses on
pay-off interdependence, population genetics adopts the converse stand.) Formally, however, their frameworks are
very similar since that studied by population genetics may be regarded as a “symmetric RD”. Surprisingly, this
symmetry is shown to have very strong implications. For example, in sharp contrast with the complex dynamic
behaviour typically induced by the RD, population-genetic dynamics is shown to display both long-run convergence
and monotonic increase in average ﬁtness.
Chapter 3 closes with two different applications. The ﬁrst one centres on the prisoner's dilemma as the paradigmatic
framework used to study the long-run evolution of co-operation. It represents the ﬁrst instance where the reader will
be exposed to the idea that the introduction of noise into the evolutionary system (in this case “deterministic”
mutational noise) may have interesting dynamic implications. As explained below, this “noise-perturbation approach”
plays a key role in the analysis carried out in Chapters 5 and 6. The second application is of a more biological nature. It
proposes a stylized model of plant pollination, where the twin issues of costly plant reward and possible “free riding”
are dynamically analysed in terms of a suitably formulated RD.
Chapter 4 addresses the study of evolutionary processes in social environments. This requires generalizing the previous
theoretical framework in several respects. First, interaction must be allowed to take place among different populations
in a possibly asymmetric fashion. Second, the set-up has to be ﬂexible enough to accommodate the variety of different
factors which underlie evolutionary forces in social environments. To illustrate such variety, two separate families of
examples are presented, each one of them reﬂecting quite different
6                                                Chapter 1. Introduction


types of considerations. The ﬁrst one is based on imitation, an inherently “social” phenomenon. In contrast, the
second one relies on satisﬁcing behaviour, which is assumed to be carried out by individuals in a fully independent
fashion. By imposing speciﬁc functional restrictions within each of these two set-ups, the Replicator Dynamics is seen
to arise as a particular case.
In general, the essential condition required from any evolutionary system is some notion of monotonicity, i.e. the idea that
those strategies which fare relatively better tend to grow at the expense of those which do relatively worse. Various
manifestations of this general idea are postulated in this chapter (growth monotonicity, sign-preservation, gradient
monotonicity), each reﬂecting either a different emphasis or some speciﬁc details of the evolutionary system under
consideration (for example, whether extinct strategies may endogenously (re)appear). As illustrated by different
examples, which of these alternative speciﬁcations should be regarded as more appropriate must naturally depend on
the particular context of application.
The ﬁrst analytical task undertaken in Chapter 4 involves the study of the relationship between the dynamic stability of
monotonic evolutionary systems and the concept of Nash equilibrium. In this respect, it is ﬁrst shown that if an
equilibrium of a two-population monotonic system is asymptotically stable, it must induce a Nash equilibrium of the
underlying game. The reciprocal statement, however, is typically false. In general, only a very special class of Nash
equilibria will qualify as asymptotically stable. For the (monotonic) Replicator Dynamics, for example, only Nash
equilibria which are strict (thus, in particular, involving only pure strategies) can have this property.
Since stability is such a restrictive demand for monotonic evolutionary systems with more than one population, two
alternative approaches are pursued. The ﬁrst one involves contemplating set-based notions of stability. As illustrated by
means of an example, this may provide some interesting “cutting power” in certain contexts. The second approach
(similar to that explored in Chapter 3) aims at identifying some of the regularities which the system might generate in
the long run, even along non-convergent paths.
For general monotonic evolutionary systems one cannot hope to obtain the long-run “average regularities” which are
shown to hold for the Replicator Dynamics. However, a natural and important question deals with the extent to which
more general evolutionary systems may at least be successful in discarding non-rational behaviour in the long run. The
answer to this question is only mixed: whereas strategies that are strictly dominated by pure strategies (even after
deletion of other dominated strategies) can be guaranteed to enjoy only vanishing limit weight, general monotonic
evolutionary systems need not be so responsive to other weaker concepts of rationality (for example, strict domination
by mixed strategies).
Two different applications close Chapter 4. The ﬁrst one is a stylized Ultimatum game with just two possible proposals
(high and low), where the two populations of proposers and responders evolve according to the RD. As in one
                                             1.3. The Plan of What Follows                                                 7


of our former applications (Chapter 3), the theoretical exercise here involves adding (deterministic mutational) noise to
the system in order to “test” the relative robustness of its different equilibria. In particular, the main concern is
whether some of the (non-perfect) equilibria where proposers share some of the surplus might be dynamically robust,
i.e. have a non-degenerate basin of attraction.
The second application proposes a two-tier hierarchic model of cultural evolution where the population is assumed to
be divided into a large number of equal-sized groups, and monotonic selection operates at both the intragroup and
intergroup levels. In this context, alternative “cultural” mechanisms for group formation, or the severity of inter-group
selection, are seen to have a crucial effect on the long-run prospects of the economy. Speciﬁcally, they determine
whether it will eventually develop an efﬁcient or an inefﬁcient “convention”.
Chapter 5 starts the analysis of genuinely stochastic (or “noisy”) evolutionary dynamics. There are two main sources of
noise typically considered in evolutionary systems. One of them is environmental noise, such as that produced by
random matching or stochastically determined exogenous circumstances. The second one is “mutation”, which in
social applications is usually interpreted as the result of either individual experimentation or population renewal.
In line with much recent stochastic evolutionary literature, the theoretical framework mostly considered in the last two
chapters is discrete. Not only is time indexed discretely but the population is assumed ﬁnite. Within every time-period,
the population is assumed to be randomly matched in pairs (for some given number of rounds) in order to play a
certain bilateral game. As time proceeds, (monotonic) selection forces, matching noise (the only environmental noise
considered), and mutation, all interact to produce a well-deﬁned long-run behaviour of the system. Since, due to
mutation, the process is ergodic, such long-run behaviour is unique, independently of initial conditions.
In this context, the following basic question is asked: What is the long-run behaviour of the system when mutational
noise becomes arbitrarily small? As it turns out, the answer to this question is crucially dependent on the assumption
made on the other source of noise in the system: environmental (matching) noise.
Suppose that attention is restricted to a simple symmetric co-ordination game with two actions and two corresponding
pure-strategy equilibria. Then, if matching noise remains relatively large (possibly falling to zero, but at a lower rate
than mutation), the equilibrium selected in the long run is shown to be the efﬁcient one. In the opposite case (relatively
small matching noise, induced by a very large number of rounds every period), the risk-dominant equilibrium (perhaps
inefﬁcient) is selected instead.
These contrasting conclusions illustrate the subtle effect played by noise (and, most crucially, different kinds of noise) in
stochastic evolutionary systems. After elaborating on the intuition underlying this state of affairs, different extensions
to other kinds of games and frameworks (for example, a continuous-time stochastic
8                                               Chapter 1. Introduction


version of the Replicator Dynamics) are also brieﬂy discussed.
Next, this chapter turns to the important issue of how quickly the established long-run convergence will be achieved;
or, in other words, how long is the long run. In this respect, it turns out that, as for the long-run conclusions
themselves, the expected rate at which these conclusions materialize is crucially dependent on the relative magnitude of
the matching noise. If large, convergence is relatively fast; if small, it will generally be quite slow since it depends on
population size (as the population grows, the order associated with the rate of convergence becomes of progressively
lower order). This latter statement, however, hinges very critically upon the assumed global pattern of interaction. If, as
seems natural, agents are assumed to interact most likely with close-by neighbours (i.e. the pattern of interaction
displays a local structure) the rate of convergence will also tend to be fast (independent of population size) in the
scenario displaying small matching noise.
Chapter 5 concludes with the following application. Consider any given number of Cournot (quantity-setting)
oligopolists who, as time proceeds, adjust their actions by mimicking successful behaviour (i.e. choosing that output
which happens to induce the highest current proﬁts). Further assume that they occasionally experiment (or “mutate”).
Then, the unique long-run outcome of the process is seen to coincide with the Walrasian state (of course, not a Nash
equilibrium) where all ﬁrms behave as if they were maximizing proﬁts, taking the market-clearing price as given. This
application illustrates the following points: ﬁrst, the wide applicability of the evolutionary approach to contexts very
different from those with random pairwise matching usually contemplated by most of the theory; second, its potential,
as an analytical tool, to go well beyond a mere mechanism of (Nash) equilibrium selection in games.
The main body of the book ends with Chapter 6. In this chapter, the objective is to enrich the previous evolutionary
framework by considering agents who may enjoy a higher degree of sophistication than formerly (implicitly) assumed.
Speciﬁcally, they are assumed to be able to form expectations on the future state of the process, choosing their actions
as an optimal reaction to them.
The chapter starts by proposing a general evolutionary framework of expectation formation, which encompasses the
different variations and examples subsequently studied. Since some of these involve asymmetric interactions, the
previous single-population approach is extended to the consideration of two different populations. In this context, the
evolutionary process is formulated to proceed in two complementary dimensions. First, it has players continuously
updating their prior expectations, on the basis of realized (observed) history. Second, it postulates that players react
optimally to these expectations by adjusting their prior strategies, possibly with some friction (i.e. only with some
probability). As before, the core dynamics of the process (strategy adjustment and expectation updating) is perturbed
with some small probability of mutation, now operating on both the strategy and the expectation components. The
theoretical question posed also remains the same. It involves determining the
                                             1.3. The Plan of What Follows                                                 9


long-run performance of the process when the mutation-induced perturbation becomes small.
The key differences displayed by the alternative contexts analysed in this chapter hinge upon the following two
considerations. First, the nature of the game; speciﬁcally, whether it is simultaneous (with all its information sets visited
along every possible path of play) or genuinely sequential (with some of its information sets potentially not visited). The
second crucial issue concerns the particular postulates assumed on the expectation-formation process. In particular,
static and dynamic mechanisms of expectation formation are contrasted.
The ﬁrst and simplest context analysed is one where players are involved in a simple (2×2)-co-ordination game and
expectations are statically formed. That is, players implicitly assume that the currently observed conﬁguration will
remain in place next period (except, of course, for their own possible adjustment). In this case, the equilibrium selected
in the long run turns out to be as in one of the scenarios discussed in Chapter 5, namely the risk-dominant equilibrium.
When static expectations are the driving force of the evolutionary system, considerations related to relative basins of
attractions become pre-eminent, just as when no signiﬁcant matching noise interferes with monotonic (pay-off-based)
selection dynamics.
Attention then turns to asymmetric games (still simultaneous, and with a static rule of expectation formation). As an
interesting example, the discussion focuses on a simple bargaining scenario between two different populations. In this
context, the former considerations involving the basins of attraction of the alternative (now asymmetric) equilibria can
be linked to the corresponding degrees of risk-aversion displayed by each population. If these are different, the
evolutionary process is seen to select the equilibrium which is more favourable to the less risk-averse population. This
provides an evolutionary counterpart of the analogous conclusion derived from the classical analysis of the bargaining
problem.
Next, a genuinely dynamic game is considered. Speciﬁcally, it is postulated that the simple and symmetric co-ordination
game described above is preceded by the possibility that one (and only one) of the populations may guarantee for itself
some outside option. This variation turns out to have drastic implications. For, independently of any risk-related
considerations, the efﬁcient equilibrium is now selected by the evolutionary process as the unique long-run outcome.
Expectations are still being updated in a static manner. However, the key point to note is that, since not all information
sets are necessarily visited along every course of play (for example, the co-ordination game is not reached if the outside
option is chosen) “expectational drift” may set in on the expectations associated with such information sets. That is,
even if mutation on these expectations makes them change arbitrarily, selection (i.e. updating) forces may ﬁnd no basis
to “discipline” them. This, in the end, turns out to permit fast and easy transition towards the efﬁcient equilibrium, by
an appropriate build-up of “expectational” drift.
10                                                Chapter 1. Introduction


A similar kind of drift also plays a crucial role when expectations are allowed to be dynamic. In this case, agents do not
necessarily predict the stationarity of the previous situation, but rely on past history to detect some dynamic
(i.e. interperiod) regularities. Expectations, in fact, must not be conceived in this context as a certain given subjective
probability on ensuing play. Instead, they should be viewed as consisting of a whole array of such probabilities, one for
every possible history which an agent may observe. It is precisely because of this wealth of possible contingencies on
which expectations are conditioned that drift may set in again. In general (certainly so if the situation has remained
stationary for a long time), most of the a priori possible contingencies will not have been observed for many periods.
Thus, expectations conditional on these contingencies may drift, unaffected by an updating mechanism which is
sensitive only to observed realizations. In the long run, this is shown to lead to a state of affairs which is labelled
“equilibrium volatility”; essentially, it reﬂects the lack of any speciﬁc criterion for selecting among alternative equilibria.
As outlined, Chapters 5 and 6 involve the exploration of alternative speciﬁcations for the evolutionary system. Each of
these can be conceived as reﬂecting different behavioural paradigms on the agents' part. In a sense, they embody
alternative assumptions on players' sophistication. Players may range from being, for example, mere imitators
(Chapters 5) to being capable of forming expectations on the evolution of the process — be they static or dynamic —
and react optimally to them (Chapter 6). In this light, it is natural to ask how the analysis might be affected if players of
different types are a priori possible, their corresponding frequencies varying endogenously as dictated by relative pay-
offs. An analysis of this important issue closes the chapter, leading to the following two conclusions.
First, evolutionary processes only work as effective (and efﬁcient) mechanisms of equilibrium selection when the upper
bound on the sophistication of players is not too high. For example, if only imitators and static-expectations optimizers
are possible, efﬁcient equilibrium selection always results. However, if dynamic-expectations optimizers are also
allowed, equilibrium volatility (as described above) becomes the prevailing state of affairs.
The second conclusion involves the long-run selection of types, not behaviour per se. Since alternative behavioural rules
turn out to be fully equivalent at stationary points (i.e. they prescribe the same strategy), the conclusion here is, in fact,
one of non-selection: all types may coexist in the long run. As before, drift (now on the type dimension) is also found
to play a crucial role in the analysis.
The book ends with a short Appendix, which includes some technical material used throughout. It is collected there in
order to avoid interference with the general line of discussion.
                                        2 Static Analysis

2.1 Theoretical Framework

2.1.1 Basic Model
Consider a given population of a certain “species”, which has a corresponding range of behaviour (or phenotypes)
available. These phenotypes are conceived as a (ﬁnite) collection of strategies S = {s1, s2, . . . , sm}, each individual
adopting one of them in the contest for survival with the remaining members of the population.
For the moment, we shall focus on symmetric situations, i.e. situations in which every individual has the same set of
available strategies and pay-offs reﬂect only fully symmetric considerations. Section 2.6 will deal with asymmetric
contests. These will be viewed, however, as embedded into an appropriately enlarged symmetric ex ante game.
Each one of the possible strategies induces an associated pay-off for the individual that adopts it, given the behaviour
proﬁle of the rest of the population. In order to formalize the link between behaviour and pay-off, we deﬁne the
function



                                                                                                                    (2.1)
determining the pay-off π (si, ν) of any individual adopting strategy si∈ S when the vector of frequencies with which the
population plays each of the m different strategies is ν ∈ Δm − 1.
There are two assumptions implicit in the previous formalization of pay-offs.
First, it is implicitly assumed that the population is so large that every given individual has an insigniﬁcant weight.
(Otherwise, the two arguments of π could not be treated independently.) The important case of ﬁnite populations will
require a speciﬁc formulation in Section 2.7.
Second, the formulation described in (2.1) reﬂects a so-called population game. That is, a context where the inﬂuence of
the population on the pay-off of any given individual is contained in the anonymous description of the
12                                                                 Chapter 2. Static Analysis


frequencies with which each strategy is being played by the population. This will be a convenient assumption
maintained throughout.
As presented, the above formulation is restricted to contexts where individuals adopt only pure (i.e. deterministic)
choices in S. If individuals may adopt mixed (i.e. random) choices, the simplex Δm − 1 representing the probability
measures on S must substitute this latter set as the relevant strategy space of an individual. And then, a strategy proﬁle
of the population is a probability measure λ ∈ Δ (Δm − 1) over the simplex Δm − 1 of mixed strategies. We shall call such a
proﬁle a (population) state.
The assumption that the population is large (“inﬁnite”) and that individuals make their choices independently, allows
us to generalize the former pay-off structure in a simple fashion. Speciﬁcally, given a certain population state λ, we
implicitly resort to the Law of Large Numbers and identify the expected population proﬁle




with the realized proﬁle of pure strategies. Then, abusing previous notation, the expected pay-off obtained by an
individual playing a mixed strategy σ ≡ (σ1, σ2, . . . σm) is simply deﬁned as:




                                                                                                                                                                      (2.2)

The essential postulate underlying Evolutionary Game Theory is that current pay-offs determine the relative viability
of the different strategies, thus affecting the short-run evolution of their corresponding population frequencies. When
applied to biological contexts, this would seem to imply that it is the phenotype (the argument of pay-offs) which is the
object of inheritance across generations. However, as is well known today, living beings do not actually inherit
behaviour: they inherit the genes that (according to the laws of genetics and interaction with the environment) lead to a
speciﬁc type of behaviour. Evolution is not Lamarckian.1 That is, behavioural traits (learned or otherwise) are not
themselves the object of inheritance.
In theoretical biology, the explicit consideration of the laws of genetics in sufﬁciently rich (in particular, sexual)
contexts is at present one of its important avenues of research. (See, for example, Eshel (1991) for an early
consideration of these issues.) For our purposes, however, we shall ﬁnd it suitable to abstract from this source of
complexity, assuming in most of our models that behaviour is both the object of inheritance and the basis for pay-offs.
Only a brief digression into genetic-based models will be carried out in Section 3.8 within the framework of traditional
population genetics.




1
     This was certainly not the view espoused at the time of Darwin. He himself had a Lamarckian notion of biological evolution–see Bowler (1984). Cultural beings can, of
     course, “inherit” behaviour from the culture to which they belong. However, this alternative notion of “inheritance” is quite different from its biological counterpart.
                                             2.2. Evolutionarily Stable Strategy                                            13


2.1.2 Alternative Scenarios: “Playing the Field” Or “Pairwise Contests”
The general formulation postulated in (2.2) is consistent with a variety of quite different scenarios.
A very common one is labelled “pairwise contests”. It refers to a scenario where every round of interaction has each
individual randomly paired with another member of the population in order to play a certain bilateral game in normal
form (ﬁnite and symmetric). Such a game can be formalized through a certain square matrix A of dimension m, the
number of pure strategies. The entry aij of A indicates the pay-off to an individual who chooses strategy si against the
strategy sj chosen by the rest of the population (i, j = 1, 2, . . . , m). Or in terms of the previous notation,



where δi ∈ Δm − 1 denotes the simplex vector whose jth component equals 1 (and others equal zero). For a general proﬁle
ν = (ν1, ν2, . . . , νm) ∈ Δm − 1 the expected pay-off associated with strategy si is given by:




Thus, in a scenario with pairwise contests, the pay-off function displays the property of being linear in the population
proﬁle vector. Combined with (2.2), we conclude that the pay-off function π (σ, ν) is, in this case, separately linear
(i.e. co-linear) in both of its arguments. This is the key feature of the scenario which has been labelled “pairwise
contests”.
In the alternative case when the pay-off function is not linear with respect to ν, the context is usually labelled “playing the
ﬁeld”. This phrase is intended to reﬂect a situation where, unlike the case where contests are pairwise and random, the
interaction within the population is best viewed as conducted jointly at the population-wide level. It does not admit,
therefore, an ex ante linear dependence on the population proﬁle. Examples of both scenarios are presented below.


2.2 Evolutionarily Stable Strategy

2.2.1 General Denition
The concept of Evolutionarily Stable Strategy (ESS) is a central one in evolutionary theory. It is intended to reﬂect a
stationary situation in the evolutionary process. A situation, that is, in which the pattern of behaviour prevailing in the
species cannot be invaded by any mutation which is better ﬁt.
14                                                                  Chapter 2. Static Analysis


Deﬁnition 1 A (possibly mixed) strategy σ* ∈ Δm − 1is said to be an Evolutionarily Stable Strategy if, for any other ρ ∈ Δm − 1, there
exists someɛ > 0 such that if 0 < ɛ ≤ ɛ,2




Verbally, a strategy σ* is said to be an ESS if, once adopted by the whole population, no mutation ρ adopted by an
arbitrarily small fraction of individuals can “invade” (i.e. enter and survive) by getting at least a comparable pay-off. As
explained above, the relationship between relative pay-offs and invadability is essentially a matter of deﬁnition in
biology, where the pay-off is taken to reﬂect inclusive ﬁtness (i.e. the number of successful offspring). Of course, the
empirical issue of measuring such inclusive ﬁtness might nevertheless be quite difﬁcult in particular cases.


2.2.2 Alternative Interpretations of ESS: Monomorphic Vs. Polymorphic
Populations
As introduced in Deﬁnition 1, the concept of ESS essentially calls for what is known as a monomorphic interpretation.
That is, it aims to capture an evolutionarily stable situation in which all members of the population adopt a common
strategy. Of course, if such a strategy is mixed, the proﬁle over pure strategies induced by it will not be concentrated in
a single kind of observed behaviour (i.e. a single phenotype). However, even though realized behaviour may well be ex
post heterogeneous, any natural interpretation of an ESS must still embody the idea that all individuals “inherit” the
same mixed strategy, i.e. it must formalize a monomorphic ex ante conﬁguration.
The restriction of the ESS concept to such monomorphic conﬁgurations is obviously very strong and quite
unsatisfactory. In general, we would like to be able to encompass in our analysis the possibility that a genuinely diverse
range of behaviour (that is, a polymorphic proﬁle of strategies) could arise in an evolutionary stable fashion. However, to
formalize any such state of affairs, it is essential to overcome the purely dichotomous considerations (mutant vs. non-
mutant) contemplated by the ESS concept. Instead, one needs to allow for the joint (and dynamic) interaction among
different strategies which must underlie any stable polymorphic conﬁguration.
In biological settings, the dynamic framework required to analyse such joint interaction is provided by the so-called
Replicator Dynamics, the analysis of which is set out in Chapter 3. We shall discover then an unexpectedly central role
for the static ESS concept. First (Theorem 3), it will be shown that, even in polymorphic cases, every mixed
ESS–interpreted now as a polymorphic state in




2
     Note that if (1 − ɛ) σ* ⊕ ɛ ρ denotes the two-point distribution (population state) where (1 − ɛ) of the population plays σ* and ɛ plays ρ, then ν ((1 − ɛ) σ* ⊕ ɛ ρ) = (1 −
     ɛ) ν (σ* ) + ɛ ν (ρ).
                                                     2.3. Examples                                                    15


pure strategies–arises as a strong local attractor for the dynamic evolutionary system. Secondly (Theorem 5), the ESS
concept will be seen to provide in addition a necessary condition for dynamic stability (at least in a certain “average
sense”) if no a priori restrictions are imposed on the set of admissible mixed strategies. Thus, in this sense, the ESS
concept turns out to play a very useful (instrumental) role in addressing issues of dynamic stability, even in
polymorphic contexts.


2.3 Examples
This section discusses two different examples which illustrate some of the ideas proposed so far. The ﬁrst example
involves random pairwise contests; the second one displays individuals who are playing the ﬁeld.


2.3.1 Pairwise Contests: The Hawk–Dove Game
Consider a certain (“inﬁnite”) population of the same species competing for a scarce resource. Think of this resource
as, for example, land or food given in some ﬁxed and indivisible amount. Each contest for the use of this resource is
pairwise, i.e. it confronts two, and only two, members of the species, randomly chosen among the given population.
Once the contest is decided, the winner is assumed to extract the full value of the resource. Denote this value by V, the
same for each member of the species. On the other hand, the loser suffers a cost of C, also identical for all members of
the population.
The contestants may use one of two strategies. We refer to them as “Hawk” and “Dove”, denoted by H and D
respectively. We think of H as representing an all-out aggressive strategy; D, on the other hand, is to be conceived as a
passive strategy, retreating in the face of escalation.
Based on the previous considerations, we shall assume that when H meets D, the individual playing the former strategy
(the “hawk”) obtains the resource and, therefore, the whole surplus V. The pay-off of D in this case is therefore taken
to be zero. If any strategy, H or D meets itself, we shall assume that the chances of getting the resource are divided
equally between the contestants. Thus, the ex ante expected gross gain from participating in the contest for individuals
playing the same strategy is V/2 for both of them. The net gain, though, differs in each of the two cases: both D or
both H. If two doves meet, there is no escalation to an actual ﬁght and, therefore, there is no cost incurred from the
contest. If, instead, two hawks meet, the expected losses are C/2, which have to be subtracted from V/2 to obtain the
expected net gains.
The previous pay-off description is summarized in the following table:
16                                             Chapter 2. Static Analysis


Table 1
                                          H                                       D
     H                                                                            V, 0
     D                                    0, V

Consider now a certain population which adopts H and D in some given proportions, p and (1 − p) respectively. For
the moment we will conceive of this situation as arising monomorphically, i.e. with all members of the population
playing a common mixed strategy with the corresponding probabilities. The question we now ask is whether such a
mixed strategy σ = (p, 1 − p) is non-invadable, i.e. whether it is an ESS (Deﬁnition 1).
Three cases may be considered.
First, the case where V > C. In these circumstances, to play H with probability 1, i.e. to choose σ = (1, 0), is a strictly
dominant strategy. Thus, no other strategy can invade it. This strategy, however, can invade any other. It deﬁnes,
consequently, the only ESS in this case.
If V = C, to play H is only weakly dominant. But, if there is any positive probability of confronting an individual
playing D, H yields a pay-off strictly higher than any other strategy, pure or mixed. Thus, again strategy H is the unique
ESS in this case.
Finally, consider the case where C > V. In these circumstances, the strategy that previously was an ESS can now be
invaded by any other that gives some positive probability to playing D. To play D with probability 1 is, nevertheless, not
an ESS. For, if this strategy were adopted by the whole population, to play H with some positive probability could then
invade as a small-frequency mutation. Only a genuinely mixed strategy σ = (p, 1 − p) with 0 < p < 1 can deﬁne an ESS
in this case.
A ﬁrst requirement that any such mixed strategy must satisfy to be a potential ESS is to yield the same pay-off to each
of its constituent pure strategies. Otherwise, a lower probability to the one with a smaller pay-off could invade the
population. Thus, if p denotes the probability of playing H, such a strategy must satisfy:



where the population proﬁle ν (σ) = σ = (p, 1 − p) gives to each pure strategy the same weights as σ.
Since the pairing of contestants is assumed to be random, the previous equality becomes:
                                                       2.3. Examples                                                        17


or



which yields:




This value of p deﬁnes a (symmetric) Nash equilibrium of the game described in Table 1: it deﬁnes a strategy that is a
best response to itself. To conﬁrm that it is indeed an ESS we need to show that no other strategy can invade it. This,
according to Deﬁnition 1, requires that for any other strategy σ′ = (q, 1 − q), q ≠ p, there should exist some ɛ > 0 such
that if 0 < ɛ ≤ ɛ, then



which, by the linearity of π induced by our assumption of random pairings, we can rewrite:




The fact that σ is a Nash equilibrium implies that π (σ, σ) ≥ π (σ′, σ). Thus, the above inequality is ensured if:



that is, if σ does better against σ′ than σ′ itself does. Let us conﬁrm this inequality. It is just a matter of straightforward
computation to see that:




which guarantees that, for p ≠ q, π (σ, σ′) − π (σ′, σ′) > 0. This yields the desired conclusion.
To summarize, we have been able to show that, under all values of the parameters, there exists an ESS in the
Hawk–Dove game. The values of the parameters do affect, however, the nature of the equilibrium. If the resource is
valuable relative to the ﬁghting cost, the only ESS is to play Hawk with probability one. If, instead, the cost of losing a
ﬁght is higher than the value of the resource, only a completely mixed ESS exists. In it, the probability of adopting a
Hawk strategy naturally depends (in a direct fashion) on the ratio of the value of the resource to the cost which may be
incurred in struggling for it.


2.3.2 Playing the Field: The Sex-Ratio Game
To draw a comparison with the case of pairwise contests discussed in the previous section, we now focus on a scenario
where the actual contests are population-wide (i.e. “playing the ﬁeld”). The example chosen is a simpliﬁed version of
the traditional sex-ratio game.
18                                              Chapter 2. Static Analysis


Consider some given (“inﬁnite”) population with a proportion ζ of males and (1 − ζ) of females. Each generation of
females can breed a given ﬁxed number n of offspring and can mate only once. Males, on the other hand, obtain on
average a number (1 − ζ) / ζ of mates (which can obviously be greater or less than one, depending on the relative
frequencies of males and females).
Not all females bear the same proportion of males in their offspring. Let us assume that only two such proportions are
genetically possible: α1 = 0.1 and α2 = 0.6. They represent the two possible pure strategies (phenotypes) in the sex-ratio
game we now consider.
In the simplest version of this game, females are the only relevant players and their pay-off is identiﬁed with
(approximated by) the number of grandchildren they can breed. This number will depend, of course, on the sex ratio
prevailing in the population during their own and their children's lifetime. Let us focus ﬁrst on a situation where the
whole population (except possibly the given female considered) adopts a common and pure strategy; a situation,
therefore, where the population sex ratio is either α1 or α2. It can be seen immediately that, for each of the four possible
instances that may a priori occur, the pay-offs for any given female adopting strategy αi are as follows:




                                                                                                                       (2.3)
for each i, j = 1, 2, where δkj = 0 if k ≠ j, δkj = 1 if k = j.
Normalizing, for simplicity, to n = 1 and particularizing for α1 = 0.1 and α2 = 0.6 we obtain the following pay-off
table:0
Table 2
                                 Population
     Individual Female                                            α1                         α2
                                 α1                               1.8                        0.967
                                 α2                               5.8                        0.8

From this table, it is clear that neither α1 nor α2 can, as pure strategies adopted by the whole population, become an
ESS: a potential mutant does strictly better than the population by adopting the alternative strategy. Therefore, an ESS
(p*, 1 − p*), if it exists, must be mixed. That is, it must involve p* ∈ (0, 1).
By an argument already used in the previous section, it must then be the case that both pure strategies obtain the same
pay-off when confronting a population which plays such an ESS. That is:



                                                                                                                       (2.4)
                                                     2.3. Examples                                                    19


Let α (p) ≡ p · 0.1 + (1 − p) · 0.6 denote the average sex ratio induced by any given mixed strategy (p, 1 − p) played by
the whole population. Since the pay-off of any given strategy only depends on the average sex ratio it confronts, (2.4)
may be rewritten as follows:




which has p* = 0.2 as its unique solution. (Note that, in contrast with the previous example with pairwise meetings, the
pay-off function is no longer linear in the population proﬁle.) The average sex ratio associated with p* = 0.2 is:



i.e. an equal proportion of males and females.
The above condition is a necessary, but still not sufﬁcient, condition for an ESS. To be an ESS, (p*, 1 − p*) has to be
protected from invasion, in the sense of Deﬁnition 1. This occurs if, for any other strategy which assigns a probability
q ≠ p* to the pure strategy α1, there exists some ɛ > 0 such that if 0 < ɛ ≤ ɛ, then




                                                                                                                    (2.5)
Given any ɛ > 0, let p̃ ≡ (1 − ɛ) p* + ɛ q be the population proﬁle induced by an ɛ-frequency mutation towards
strategy (q, 1 − q) and assume, for concreteness, that q > p*. (The opposite case is totally symmetric.) The
corresponding average sex ratio becomes:



which is clearly smaller than α (p*). Then, from (2.3), one has:



Thus, since the weight that strategy q assigns to α1 is larger than that of p*, (2.5) follows, as desired.
Thus, it has been shown that in a simple sex-ratio game where females can mix in an unrestricted manner between
proportions α1 = 0.1 and α2 = 0.6 of male and female offspring, a unique ESS exists. When such a strategy (by virtue of
the Law of Large Numbers) is identiﬁed with the proportions actually prevailing in the large population, the average
sex ratio induced by it turns out to be a one-to-one proportion of male and female offspring in each generation. It can
be shown that this conclusion also holds in the general case where all sex proportions of offspring are, a priori,
possible phenotypes.
20                                                     Chapter 2. Static Analysis


2.4 ESS and Renements of Nash Equilibrium
Consider a context with pairwise contests, as described in Subsection 2.1.2. In this section, it is ﬁrst established
(Proposition 1) that the ESS concept may be viewed as a reﬁnement of Nash equilibrium in the bilateral symmetric
game played by every pair of randomly matched individuals. It is further shown (Proposition 2) that it is even a
reﬁnement of one of the most common concepts used to reﬁne Nash equilibrium: the concept of perfect equilibrium.
Denote by A ≡ (aij)ij = 1, 2, . . . , m the m-dimensional pay-off matrix corresponding to the symmetric game played in every
bilateral encounter.
Proposition 1Let σ ∈ Δm − 1be an ESS. Then,
     (i) The pair (σ, σ)is a (symmetric) Nash equilibrium of the bilateral game induced by the pay-off matrix A, i.e. ∀ σ′ ∈ Δm − 1, σ · A σ
          ≥ σ′ · A σ.
     (ii) ∀ σ′ ∈ Δm − 1, σ′ ≠ σ, σ · A σ = σ′ · A σ ⇒ σ · A σ′ > σ′ · A σ′.
         Reciprocally, if (i) and (ii) hold, then σ is an ESS.
Proof. Let σ be an ESS. If (i) fails, then:



which implies that, for some ɛ > 0 sufﬁciently small, it must be the case that:



                                                                                                                                      (2.6)
This contradicts Deﬁnition 1.
Suppose now that (ii) fails. That is, there is some σ′ ∈ Δm − 1, σ′ ≠ σ, with


                                                                                                                                      (2.7)
and


                                                                                                                                      (2.8)

Multiplying (2.7) by (1 − ɛ), (2.8) by ɛ, and adding both expressions we obtain (2.6), again contradicting Deﬁnition 1.
The reciprocal statement is immediate. If the inequality in (i) holds strictly, it is clear that an ɛ > 0 can be found such
that, if ɛ ≤ ɛ,



for all σ′ ∈ Δm − 1, σ′ ≠ σ. If (i) holds with equality for some σ′, then (ii) implies that the previous inequality must also hold
in this case. ▪
Proposition 1 establishes that the ESS concept represents a reﬁnement of Nash equilibrium for the game played in
bilateral encounters. That is, if some σ is an ESS, it must be a Nash equilibrium (i.e. (i) above) and “something
                                               2.5. The Existence of an ESS                                                   21


else” (satisfy condition (ii)). The next proposition indicates that the reﬁnement of Nash equilibrium induced by the ESS
concept is quite strong; in particular, stronger than that derived from the notion of perfect equilibrium.
Proposition 2 (Bomze (1986))Let σ ∈ Δm − 1be an ESS. Then, the pair (σ, σ) is a perfect equilibrium of the bilateral game induced
by the pay-off matrix A.
Proof. It is well known (see, for example, van Damme (1987, Theorem 3.2.2)) that, in bilateral ﬁnite games, an
equilibrium is perfect if, and only if, it involves weakly undominated strategies.
Thus, let σ be an ESS of the bilateral game induced by the pay-off matrix A. Then, by Proposition 1, (σ, σ) is a Nash
equilibrium. Suppose, for the sake of contradiction, that σ is a weakly dominated strategy. That is, ∃ σ′ ∈ Δm − 1 such
that:




Particularizing σ″ in the above expression to both σ and σ′, we obtain the following two inequalities:




If (a) is satisﬁed strictly, it violates (i) in Proposition 1. Thus, suppose that it holds with equality. Then, (b) contradicts
point (ii) of Proposition 1. ▪
The previous results can be strengthened even further. It can be shown, for example, that an ESS σ deﬁnes a
symmetric proper equilibrium (σ, σ) of the associated bilateral game, a concept even stronger than perfect equilibrium.
Additional relationships with the Nash reﬁnement literature are thoroughly discussed in van Damme (1987).


2.5 The Existence of an ESS
Our primary focus in this chapter has thus far been the concept of Evolutionarily Stable Strategy. There is no available
result in the literature which identiﬁes sufﬁcient conditions for the existence of an ESS in sufﬁciently general scenarios.
Even when contests are assumed pairwise and random – arguably, the simplest case to analyse – straightforward
examples can be provided (see below) that show that an ESS may fail to exist in quite “non-pathological” cases.
However, if one wants to rule out that these examples be non-generic (i.e. dependent on
22                                                                 Chapter 2. Static Analysis


precise relationships among the pay-off entries),3 we need to consider set-ups with more than two strategies. This is
established by the following generic existence result for 2 × 2-games:
Proposition 3Consider a context of pairwise contests and two-dimensional pay-off matrix A ≡ (aij). Assume aii ≠ aij (i = 1, 2, j ≠ i).
Then, an ESS exists.
Proof. If aii > aji for some i, j = 1, 2, i ≠ j, the result is a consequence of the fact that in this case there exists a strict
Nash equilibrium strategy which, as it is easy to see, is also an ESS. If the preceding inequality does not hold for any i =
1, 2, i.e. aii < aji (i = 1, 2, i ≠ j), then the unique equilibrium (mixed) strategy of the game is σ* = (p, 1 − p) with p = (a12 −
a22) (a12 − a22 + a21 − a11)−1. In this case, part (ii) of Proposition 1 applies and, in order to verify that σ* is an ESS, it is
enough to check that



since



the desired conclusion follows. ▪
Despite the lack of a sufﬁciently general existence result, a useful sufﬁcient condition for existence of an interior ESS in
general contexts with pairwise encounters is provided by the following result.
Proposition 4 (Hines (1980a))Let T denote the tangent space of Δm − 1, i.e.                               . Consider a context of
pairwise encounters with m-dimensional pay-off matrix A and an interior Nash equilibrium σ* ∈ int (Δm − 1). Then, if the quadratic
form               q is negative deﬁnite for q ∈ T, σ*is an ESS.
Proof. Since σ* is a Nash equilibrium and gives positive weight to all pure strategies, it follows that, for all σ ∈ Δm − 1:



                                                                                                                                                                        (2.9)

Thus, by part (ii) of Proposition 1, σ* is an ESS if:



                                                                                                                                                                      (2.10)




3
     This intuitive idea can be rigorously formulated: a certain set of games is said to be non-generic if, in an appropriately speciﬁed (measure) space of possible games, the
     closure of this set is of measure zero.
                                                                2.5. The Existence of an ESS                                                   23


for all σ ∈ Δm − 1, σ ≠ σ*. Given any such σ ∈ Δm − 1, denote x ≡ σ − σ*. Then, the previous expression may be rewritten as
follows:




Or, using (2.9):



that is obviously equivalent to:



                                                                                                                                            (2.11)
for all x of the form σ − σ* with σ ∈ Δm − 1, σ ≠ σ*. Since such x ∈ T, x ≠ 0, the proof is complete from the assumed
negative-deﬁniteness of          in T. ▪
Proceeding along the lines of Proposition 4, it is a simple matter to establish the following useful necessary condition for
the existence of an interior ESS. (See Theorem 5 for an application.)
Proposition 5Consider a context of pairwise encounters with m-dimensional pay-off matrix A. If an ESS σ* ∈ int (Δm − 1) exists,4then
the quadratic form          q is negative deﬁnite for q ∈ T.
Proof. Let σ* ∈ int (Δm − 1) be an ESS. Then, it must satisfy (2.9) and (2.10) for every σ ≠ σ*. Note, moreover, that every
q ∈ T can be written as:



for some λ ∈ R and σ ∈ Δm − 1. In view of (2.11) – which follows from (2.9) and (2.10) – this implies that:



as desired. ▪
We end this section with a simple 3-strategy scenario which starkly illustrates the problem of non-existence raised by
the ESS concept. Consider a scenario with pairwise contests where the bilateral game being played is a variation of the
familiar Rock-Scissors-Paper (RSP) game. There are three strategies, R, S, and P, which form a cycle in terms of the
success they experience in pairwise




4
    If the ESS is not interior to the simplex, then the result can be reformulated with respect to the face of the simplex where it lies.
24                                                                Chapter 2. Static Analysis


encounters: R beats S, S beats P, and P beats R. The traditional such game is zero sum: what one player wins, the other
loses. This requires that if the game is to be kept symmetric, the pay-off in the case of an encounter between two
identical strategies has to be made (by appropriate normalization) equal to zero.
Instead of this game we shall consider a slight variation of it in which when two identical strategies meet, they both
receive a positive, albeit small, ϕ.5 By equating success with a pay-off of 1, and failure with a pay-off of −1, the
variation of the RSP game can be described by the following table:
Table 3
                                             R                                        S                                        P
     R                                       ϕ, ϕ                                     1, −1                                    −1, 1
     S                                       −1, 1                                    ϕ, ϕ                                     1, −1
     P                                       1, −1                                    −1, 1                                    ϕ, ϕ

We now argue that, in a context where every pair of randomly paired individuals plays the above bilateral game, there is
no ESS. A ﬁrst necessary condition for a strategy to be an ESS is that it be a best response to itself (i.e. a symmetric
Nash equilibrium of the above bilateral game; cf. Proposition 1). In this game, it is immediately seen that there is only
one Nash equilibrium. This is the one deﬁned by the mixed strategy σ = (1/3, 1/3, 1/3). Its expected pay-off is π (σ, σ)
= ϕ/3.
Since σ is a Nash equilibrium strategy, all three pure strategies in its support yield the same pay-off. Speciﬁcally:



Furthermore, the expected pay-off earned by σ is independent of the particular (pure or mixed) strategy played by the
opponent. That is:




Suppose now that some “mutants” enter the population with strategy σ′ = (1, 0, 0) in some arbitrarily small frequency
ɛ > 0. Their expected pay-off is:




Thus, strategy σ′ can invade the original σ-monomorphic population, rendering σ evolutionary unstable. Since σ is the
only strategy that, being a Nash equilibrium for the bilateral game, can be a candidate for ESS, we may conclude that
no ESS exists in this case.




5
     In fact, as explained in Subsection 3.5.2, no ESS exists even when ϕ = 0. Here, we postulate some ϕ > 0 for the sake of a more clear-cut illustration.
                                                                2.6. Asymmetric Contests                                                                   25


2.6 Asymmetric Contests
2.6.1 Introduction
Unlike what has been postulated so far, many interesting contexts of interaction in the biological world are not
symmetric. They often involve some asymmetry among the contestants. For example, one of them may be the original
owner of the resource, or the larger individual, or of different sex. Such differences may, or may not, affect pay-offs.
But even if they do not, they may have strong inﬂuence on the behaviour of individuals by establishing useful
correlations which may materialize as equilibrium conventions. An illustration of this possibility will be discussed below
in the already familiar Hawk–Dove context.
The way the literature has dealt with these asymmetric situations is by embedding them into an ex ante symmetric
context. In any particular juncture, individuals may well confront an asymmetric situation. However, their strategy
cannot be restricted to just one such particular case; it has to prescribe some behaviour for each of the different cases
(symmetric or asymmetric) which it may ever confront. The strategy adopted by an individual has to tell it how to
behave when young or old, owner or intruder, male or female. When viewed from such a global perspective, the
contingent strategy of an individual can be appropriately conceived as belonging to a fully symmetric game: that
symmetric game in which every individual of the species faces, a priori, the same set of circumstances and with
identical probability.


2.6.2 Ex Ante Symmetry With Ex Post Asymmetries
For expositional simplicity, the presentation will focus on scenarios with pair-wise random matching. In the present
asymmetric context, a full description of these pairwise scenarios cannot be done just through the consideration of a
single pay-off matrix A. It requires instead the speciﬁcation of several pairs of matrices, one separate pair for each of
the possible situations which may ever arise. We shall consider a (ﬁnite) collection of such situations, H = R × R, where
R represents the set of possible roles to be played in each of the two “positions”, 1 and 2, describing a given situation.
Consider two paired individuals, arbitrarily assigned to positions 1 and 2, with h = (r1, r2) ∈ H specifying their respective
roles in the given situation. Associated with situation h there is a pair (Ah, Bh) of pay-off matrices, Ah representing the
pay-off matrix of the individual in position 1 and role r1, Bh that of the individual in position 2 and role r2. In general, of
course, the situation considered need not be symmetric, i.e. the bimatrix game induced by the pair (Ah, Bh) need not
satisfy            .6 However, ex ante symmetry over




6
    Of course, both matrices Ah and Bh have to be of the same dimension, with the usual interpretation: player 1 selects rows, player 2 selects columns.
26                                              Chapter 2. Static Analysis


positions does require that:




Ex ante symmetry also requires that the a priori possibilities for each position to occupy any of the two roles present in
any given situation must be identical. To formalize this, deﬁne the density function:



reﬂecting the ex ante probability P(h) of situation h. Symmetry over positions demands that:



                                                                                                                     (2.12)
Bringing together all of the above items and considerations, we deﬁne an asymmetric context with pairwise meetings (ACPM)
as a collection




In such a description, the role of an individual is intended to summarize all the information it has in any particular
situation. Therefore, any (ex ante) strategy in Γ may be simply deﬁned as a mapping



where                  , and A (r) denotes the set of actions available to an individual in role r. Note that the above
description allows for the possibility that there is incomplete or asymmetric information in any given situation. The
exact amount of information which the individual has about the prevailing situation is fully contained in its “role”. In
particular, its role gives the individual enough information to know at least its set of available actions. (Of course, this
set must be identical, for any given role, across all situations where this role is present. Otherwise, the implicit
information this would entail would require some further differentiation of roles.)
Let F denote the set of all strategies of Γ. The set of probability measures of F, denoted by Φ, deﬁnes the set of mixed
strategies of Γ. Identifying the role of an individual as its “information set”, the notion of behavioural strategy can be
directly transferred from classical Game Theory. Thus, associated with each mixed strategy φ ∈ Φ, there is a uniquely
associated behavioural strategy



which with every role r ∈ R associates a probability measure β (r) with support on A (r).
As is well known, even though every mixed strategy deﬁnes a unique behavioural strategy, the converse need not be
true. Such potential multiplicity
                                                    2.6. Asymmetric Contests                                                        27


conﬂicts with the strict dominance condition required by evolutionary stability. Since, typically, there will be several
mixed strategies which are “behaviourally equivalent”, it will be generally impossible to single out any one of them as
evolutionarily stable. Or, expressed somewhat differently, there will be no selective pressure to prevent uncontrolled
drift among mixed strategies which induce the same pattern of (stochastic) behaviour for the different roles.
To remedy this problem, the notion of evolutionary stability proposed below recasts the original formulation of
Deﬁnition 1 (which focused on mixed strategies) in terms of the induced behavioural strategies. Let βo represent the
behavioural strategy monomorphically played by the population. The pay-off obtained by an (“inﬁnitesimal”)
individual in position 1 which adopts some (possibly different) strategy β may be written as follows:




This leads to the following adaptation of our former concept of evolutionary stability.
Deﬁnition 2A (behavioural) strategy β*is said to be an Evolutionarily Stable Strategy of Γ if, given any other strategy β, there exists
someɛ > 0 such that if 0 < ɛ ≤ ɛ,




Particularly interesting asymmetric contexts are those in which each one of the two individuals that meet in every
encounter always play different roles (e.g. there cannot be two individuals disputing a resource who are both its former
“owner”, or two members of a mating couple who simultaneously play the “female” role). Such contexts are said to
display role asymmetry.
Formally, an asymmetric context Γ is said to display role asymmetry if



                                                                                                                                (2.13)
Besides its intuitive appeal, the preceding condition also has strong theoretical implications on the kind of strategy
which may qualify as ESS. To establish these implications is the focus of the following result.
Theorem 1 (Selten (1980))Let the ACPM Γ display role asymmetry. Every ESS is a pure strategy.
Proof. The key point of the proof is to show that if β* is an ESS, then it is also the unique best response to itself
according to ˜π. Thus, it has to be a pure strategy.
Suppose otherwise. Then, there exists some alternative β ≠ β* such that ˜π (β, β*) = ˜π (β*, β*). Choose one of the roles
in which both strategies differ,
28                                               Chapter 2. Static Analysis


say ro. Consider the strategy    which coincides with β in ro, and with β* elsewhere. Obviously




Thus, by Proposition 1, in order for β* to be an ESS, it must be that:




                                                                                                                       (2.14)
But, from the assumption of role asymmetry, P (ro, ro) = 0. Thus, when β* and prescribe different behaviour (i.e. when
the individual in question has role ro), it is immaterial whether the opponent plays β* or (since the opponent will not
have role ro, the only case in which they differ). Denote by P (r′ = ro) and P (r′ ≠ ro) the marginal distributions induced by
P (·) on the events r′ = ro and r′ ≠ ro, respectively, where r′ stands for the role of the individual in position 2.
Furthermore, let ˜π (· | r′ = ro) and ˜π (· | r′ ≠ ro) represent conditional expected pay-offs on those respective events.
The previous considerations lead to the following chain of expressions:




which contradicts (2.14). This completes the proof of the theorem. ▪
The previous result indicates that any ACPM which displays role asymmetry only admits pure ESS. This, of course,
narrows down substantially our search for ESS, drastically simplifying the analysis of these important contexts. In
general, it will also tend to aggravate the fundamental non-existence problem which already afﬂicts the ESS concept in
symmetric environments. (Recall our discussion in Section 2.5 and see Subsection 2.6.4 below for a brief discussion on
ways to circumvent this problem.)
Despite these potential problems, role asymmetry in an ACPM may lead to new and very interesting features which are
only possible when the underlying context is sufﬁciently rich to allow for ex post asymmetries. An illustration to this effect
is included in the next subsection.
                                               2.6. Asymmetric Contests                                                29


2.6.3 Example: The Hawk–Dove Game Revisited (I)
In Subsection 2.3.1, we discussed the popular Hawk–Dove game in its original (symmetric) formulation. Presently, we
turn to an asymmetric version of it, whose conclusions are qualitatively very different.
Consider a Hawk–Dove context as described above, except that we now incorporate the following pay-off-irrelevant
feature. When two individuals meet they occupy different roles: owner (o) and intruder (i). Neither of these roles affects
the pay-offs of the interaction which are as in Table 1.
This deﬁnes an asymmetric game



where:



and



Furthermore, by (2.12) and role asymmetry,



From Theorem 1, we know that only a pure (behavioural) strategy of the type:



can be an ESS.
If V > C, it is clear that, as in the symmetric context, the constant strategy β (r) = H is the only ESS.7
If V < C, the strategy



                                                                                                                    (2.15)
is easily veriﬁed to be an ESS. In this case, the owner exploits the asymmetry of roles in the game to obtain the full
value of the resource. But, equivalently, roles could be used to co-ordinate actions in the opposite way. That is, the
strategy




                                                                                                                    (2.16)
is also an ESS of the game. Since the pay-off structure of the game is fully symmetric across roles, these can be used in
totally equivalent ways to co-ordinate actions.
In a sense, the situation is very reminiscent of the concept of correlated equilibrium studied by classical Game Theory.
Here, it is the ex ante lottery over roles which serves to achieve the equilibrium correlation between players'
7
      When V = C, there is no ESS.
30                                             Chapter 2. Static Analysis


actions. And indeed, as could also happen with a suitably selected correlated equilibrium, the present correlation
improves the expected (or average) pay-offs of the individuals involved.
To see this, note that in any of the two ESS's deﬁned by (2.15) or (2.16), individuals obtain an expected pay-off equal
to:




In contrast, the pay-off obtained in the symmetric Hawk–Dove game studied in Subsection 2.3.1 is:




Clearly, the latter pay-off is always smaller than the former if V < C.


2.6.4 Extensive-Form Contests
Games represented in extensive form are always formally asymmetric since the extensive form representation of a game
always involves an unavoidable asymmetry. Even if it formalizes a simultaneous interaction, there is always a well-deﬁned
(but ﬁctitious) order of move, players moving at subsequent stages of the game assumed uninformed of the choices
made by their predecessors.
Many such asymmetries can be seen as purely a matter of representation and, therefore, circumvented by appropriate
identiﬁcation of equivalent representations (see Selten 1983, 1988). However, when this is the case and the game may
be viewed as essentially symmetric, the extensive-form representation is an unnecessarily complex object to represent
it. The alternative representation in normal (or strategic) form does not lose any essential information and is a much
more amenable object of analysis. It may then be analysed as explained in the preceding sections.
In contexts where the game in extensive form genuinely describes a multistage situation (i.e. it involves a real ordering
of moves), the analysis of the evolutionary stability of its equilibria brings up issues quite reminiscent of those studied
above for general asymmetric conﬂicts. They will merely be sketched here.
On the one hand, there is the issue that, as in asymmetric games, evolutionarily stable strategies in extensive-form
games will tend to be pure, i.e. will prescribe deterministic choices at each information set. As shown by Selten (1983),
this will occur for all those information sets which, heuristically, already induce some asymmetry in the future “roles”
of the player for the remaining part of the game. (As explained, all genuinely dynamic games will eventually display such
asymmetry.) The choice of the term “role” in this statement is already indicative of the rationale, very analogous to that
used in Theorem 1 above, which leads to the previous conclusion.
                                                            2.7. ESS and Finite Populations                                                                             31


On the other hand, there is a problem similar to the lack of selective pressure on equivalent behaviour discussed above
for asymmetric conﬂicts. In the present context, the problem manifests itself in the fact that, in extensive-form games,
some subgames may never be reached in equilibrium. Thus, what the strategy prescribes in those subgames can have
no evolutionary relevance. In particular, evolutionary forces will be incapable of preventing uncontrolled drift among
such equivalent strategies, even if they are modelled in a behavioural form. None of them can, therefore, be
evolutionarily stable in a strict sense.
To remedy this problem, Selten (1983, 1988) proposed the concept of limit ESS.8 Essentially, it reﬂects the idea that the
equilibrium strategy may be seen as the limit of evolutionarily stable strategies for close “perturbed games”. In these
perturbed games, admissible strategies may be required to play some actions with arbitrarily small (but positive)
probability, thus ensuring that subgames which might otherwise not be reached in the original game are visited with at
least some positive probability. In this fashion, one overcomes the key cause for non-existence outlined above, i.e. the
fact that evolutionary forces prove ineffective at unreached subgames.
In a sense, the approach underlying the idea of a limit ESS is quite reminiscent of that associated with perfect
equilibrium, a concept also proposed by Selten himself. However, it is important to understand that, unlike this latter
concept (whose motivation is to reﬁne the concept of Nash equilibrium), the rationale for the present one is to generalize
the ESS concept in order to obtain the desired existence. Thus, in particular, every ESS is always itself a limit ESS since
one may always consider the original game as a close and “degenerate” perturbed game. This contrasts with the
approach underlying the concept of perfect equilibrium where such degenerate perturbations are not allowed: all
perturbed games must have every pure strategy played with some positive probability.


2.7 ESS and Finite Populations
2.7.1 The “Spite” Of an ESS
The theoretical framework considered so far has, more or less implicitly, focused on a context where there is an
“inﬁnite” population, i.e. one whose members are inﬁnitesimal relative to the size of the population.
This was the case, for example, in our discussion of the ESS concept in Section 2.2. Recall that, in interpreting this
deﬁnition, a crucial point was that, in the event of a mutation with ɛ frequency, both the predominant phenotype and
the mutant confront the same population proﬁle. But, if the population




8
    See Samuelson (1990) for an application of this concept to asymmetric contexts. As explained above, these contexts are subject to similar non-existence problems.
32                                                                   Chapter 2. Static Analysis


is ﬁnite, this is clearly incorrect. (Heuristically, the “ɛ-frequency” of mutants which the majority of the population faces
is not the same, i.e. is greater, than that of the mutants themselves.) And, as we shall see, the issue is not just one of
formal inaccuracy: if the population is relatively small, it may have signiﬁcant implications as to what has to be viewed
as evolutionarily stable.
Consider a context as described in Section 2.1, except that now the (ﬁnite) population is composed of n individuals. Let
σ* denote the strategy adopted by some originally monomorphic population, and let ρ be the strategy of a mutant
threatening to invade the population. The intuitive idea underlying the issue of evolutionary stability is as before: Can σ*
resist and expel the mutant ρ? The following deﬁnition captures the corresponding notion of non-invadability, as
applied to the present ﬁnite-population context.9
Deﬁnition 3A strategy σ* ∈ Δm − 1is said to be evolutionarily stable if, for any other strategy ρ and ɛ = 1 / (n − 1),




The previous deﬁnition evaluates a situation where an originally monomorphic population playing σ* is threatened by a
single mutation ρ. In order to have σ* evolutionarily stable, it is necessary that its associated expected pay-off (when
confronting a proﬁle with n − 2 non-mutants and one single mutant)10 is higher than that corresponding to strategy ρ
when facing a homogeneous proﬁle of n − 1 non-mutants. That is, only non-mutants confront the (single) mutant with
probability 1/(n−1); the latter only confronts non-mutants.
There are two implicit but crucial assumptions underlying Deﬁnition 3.
One is that mutations are so rare that they appear only one at a time (and in just a single individual). A similar idea lay
behind the inﬁnite-population version of ESS presented in Deﬁnition 1. As explained in the following chapters, our
conclusions (those here as well as the preceding ones) may be substantially affected if several mutations may arise at
the same time.
A second implicit assumption is that the appropriate pay-offs in order to evaluate the survival possibilities of a given
strategy are expected pay-offs. When the population is very large (i.e. formally inﬁnite), such an assumption is a good
enough approximation since expected and average pay-offs will tend to come very close. However, if the population is
relatively small (formally ﬁnite), there will typically be large amounts of noise present in the interaction. This brings
important issues into the picture, whose analysis is again postponed to ensuing chapters. For the moment, the
identiﬁcation of average and expected pay-offs will be maintained, even for ﬁnite populations.
To illustrate the implications of the ESS concept in ﬁnite populations, let us restrict our attention to contexts with
pairwise random meetings and a bilateral




9
     Much of what is discussed in this subsection is taken from Shaffer (1988, 1989).
10
     As a natural adaptation of the inﬁnite-population concept, the population proﬁle confronted by a given individual is identiﬁed with the strategy frequencies played by the rest
     of the population.
                                                             2.7. ESS and Finite Populations                                 33


symmetric game with pay-off matrix A. The inequality in Deﬁnition 3 may then be formulated as follows:




                                                                                                                         (2.17)
For arbitrarily large n, a strategy σ* satisﬁes (2.17) only if it is a Nash equilibrium of the bilateral game. This is in accord
with Proposition 1, which referred to contexts with an inﬁnite population.
For n relatively small, however, a strategy σ* satisfying (2.17) for all ρ ≠ σ* may be far from being a symmetric Nash
equilibrium of the bilateral game, i.e. it may not be a best response to itself. This can best be seen if (2.17) is rewritten
as




                                                                                                                         (2.18)
This expression indicates that, for strategy σ* to be able to expel any given mutant ρ, the former need not be an optimal
response to itself. In other words, even if some mutant ρ is a strict better response to σ*, i.e. π (ρ, σ*) > π (σ*, σ*), (2.17)
(or (2.18)) may still hold if π (σ*, ρ) − π (ρ, σ*) is sufﬁciently large relative to the size of the population.
The previous expression reﬂects the fact that, in ﬁnite populations, a successful mutation not only has to compare its
pay-off with the original one of the predominant strategy, i.e. compare π (ρ, σ*) and π (σ*, σ*). In addition, it must take
into account the effect that its entrance will have on the pay-off of the prevailing strategy as compared to its own pay-
off. When this difference is appropriately scaled by the size of the population, we are led to the term (π (σ*, ρ) − π (ρ,
σ*)) / (n − 2) appearing in (2.18).
This may be better understood by adopting a reciprocal perspective and asking what makes a population-wide strategy
resist any given mutation threat. As indicated by the above expression, a certain strategy not deﬁning a symmetric Nash
equilibrium may still be evolutionarily stable if any deviation from it which is proﬁtable (à la Nash) would nevertheless
beneﬁt the dominant phenotype in relative terms, i.e. even more than the mutant. This “concern” for relative (rather than
absolute) pay-offs is what, in another context, Hamilton (1970) has labelled spiteful behaviour. This type of behaviour
represents a distinctive feature of the ESS concept in ﬁnite populations.


2.7.2 An Example of Oligopolistic Competition
Consider a given industry composed of n ﬁrms, all of which sell a certain homogeneous product.11 Let the demand
function of this product be given




11
     This example was developed jointly with Luis Corchón.
34                                                 Chapter 2. Static Analysis


by a certain (strictly) decreasing function P (·), whose argument is the sum x1 + x2 + . . . + xn, where each xi denotes the
sales of ﬁrm i = 1, 2, . . . , n. Let cost conditions be identical for each ﬁrm i and represented by a common
(differentiable) cost function C (·) with             .
Suppose ﬁrms choose their quantities simultaneously. A symmetric Cournot-Nash equilibrium of this game, (x*, x*, . . . ,
x*) is characterized by the inequality:



for all x ≥ 0.
On the other hand, Walrasian (or competitive) behaviour requires that each ﬁrm i = 1, 2, . . . , n chooses a quantity xw
such that:



                                                                                                                             (2.19)
for all x ≥ 0. That is, each ﬁrm takes the market-clearing price P (n xw) as given and maximizes proﬁts. Under our
assumptions on P (·) and C (·), it is easy to see that x* < xw. Thus, in particular, (xw, xw, . . . , xw) is not a Nash equilibrium.
It is now shown that xw is, however, an ESS for the n-ﬁrm industry described. Speciﬁcally, if all other ﬁrms choose xw,
any single ﬁrm which chooses a different output always obtains a strictly lower proﬁt than the other n − 1 ﬁrms. (This
proﬁt, of course, can be greater in absolute terms than what it would have obtained by choosing xw, given that (xw, . . . , xw)
is not a Nash equilibrium.) Thus, it is claimed that the following inequality holds:



                                                                                                                             (2.20)
for all x ≠ xw.
Since P (·) is decreasing, we have:



or



Subtracting the term [C (x) + C (xw)] from both sides, and after some rearrangement, we get:




By (2.19) the second term of the right-hand side (RHS) of the above expression is no smaller than the corresponding
second term of the left-hand side (LHS). Thus, it follows that the ﬁrst term of the LHS is larger than the
corresponding ﬁrst term of the RHS. This yields expression (2.20), as desired.
                                                                2.8. Evolution and Cheap Talk                                                                                35


The previous argument shows that the Walrasian strategy (output) xw, as deﬁned by (2.19), is evolutionarily stable.
Thus, if survival is linked to differential proﬁts, a ﬁrm which lives in a competitive industry will only survive by being
competitive.
It is important to emphasize that the previous conclusion is generally false if other ﬁrms are not competitive. Suppose,
however, that either n = 2 or that, for arbitrary n, the context is one of random bilateral encounters. Then, the above
argument indicates that a ﬁrm will survive (i.e. will obtain at least as large proﬁts as its competitors) by choosing the
Walrasian output, irrespective of the strategies chosen by the other ﬁrms. In a certain sense, we may say that, in this
context, Walrasian behaviour is a “dominant strategy” for survival.


2.8 Evolution and Cheap Talk
We end this chapter with an interesting application of evolutionary analysis. It involves a natural rationalization of
“cheap talk” as a mechanism for the consolidation of co-operative (i.e. efﬁcient) behaviour.12
Besides its inherent interest, this application is also quite useful for its illustrative potential. In a single set-up, it
elaborates many of the different issues studied throughout this chapter. For example, it will bear on the topic of
monomorphic vs. polymorphic interpretations of an ESS which was discussed in Subsection 2.2.2. It will also focus on
an asymmetric and multi-stage context, as considered in Section 2.6. Finally, it will involve a ﬁnite population of
individuals, as studied in Section 2.7.
The model proposed here is largely inspired by Sobel (1993). (See also Matsui (1991), Wärneryd (1993), Bhaskar
(1994), or Kim and Sobel (1995) for a discussion of related issues.) Consider a ﬁnite population of n agents playing a
certain bimatrix game G with pay-off matrices A and B. Individuals are randomly paired to play the game, occupying
one of the two alternative positions in it, 1 or 2, with the same probability. If an individual occupies position 1, he is
identiﬁed with the “row player”, his pay-off matrix is A, and his action set is Q1. If he occupies position 2, his pay-off
matrix is B, and his strategy set is Q2. For notational simplicity, we ﬁnd it convenient to extend the previous notation
and write ˜πk(a1, a2) as the pay-off achieved by a player in position k ∈ {1, 2} when the individual in position 1 plays
action a1 and that in position 2 plays action a2.13
Assuming that the number of matchings taking place is very large, we shall identify the total realized pay-off of playing
any strategy against a certain population




12
     I am indebted to Joel Sobel for very helpful conversations in the preparation of this section.
13
     Note that, in terms of the context for an ACPM developed in Section 2.6, there is no role diversity in each position (i.e. we can think of just having a single role in each
     position, the game asymmetry being exclusively linked to the existence of alternative player positions).
36                                                                     Chapter 2. Static Analysis


proﬁle with its expected pay-off. (Equivalently, we may think of the situation as being one where players are involved in a
round-robin tournament, each of them playing everyone else once in each of the two roles.) In this context, the full set
of possible strategies is the collection of all those contingent plans which specify an action to be played in each of the
two roles. Thus, formally, it can be identiﬁed with the set S ≡ Q1 × Q2, whose typical element s = (a1, a2) indicates the
actions a1 and a2 to be played in the ﬁrst and second roles, respectively.
The particular kind of game we shall consider here is usually referred to as a game of common interest. As its label
indicates, this is a game where the players are subject to no conﬂict of interest whatsoever: the outcome one of them
prefers in any given role is also the outcome the other prefers in the alternative role. Formally, this idea is contained in
the following deﬁnition.14
Deﬁnition 4 A bimatrix game G as described is called of common interest if there exists a single action pair                                                               such
that



.
For the sake of illustration, suppose that the game G is a simple pure co-ordination game with just two actions and two
corresponding pure-strategy equilibria. In the ﬁrst equilibrium, (â1, â2), the induced pair of pay-offs is ( 1, 2); in the
second equilibrium, (ã1, ã2), the induced pair of pay-offs is (˜π1, ˜π2). Further assume that, for each k = 1, 2, k > ˜πk, i.e.
the ﬁrst equilibrium dominates the second one in the Pareto sense. Despite this unambiguous ranking of the two
equilibria, it is clear that the following two strategies of the asymmetric context, ŝ = (â1, â2) and s̃ = (ã1, ã2), both deﬁne
an evolutionarily stable strategy in the sense of Deﬁnition 3. This illustrates the fact that, unless one enriches the underlying
framework appropriately, there is no hope of ﬁnding a purely evolutionary argument which, even in simple games of
common interest, would select for efﬁcient conﬁgurations.
A natural way of enriching the context in cases where no conﬂict of interest exists is to allow for communication
among the players. In those contexts where all players share the same objectives, it would seem that unrestricted
communication among them should naturally lead to co-ordination on their commonly most preferred outcome
(i.e. strategy proﬁle).
In addressing this issue, the ﬁrst choice to make is a modelling one. How are we to model such imprecise notions as
“communication”? Even though much more complicated formalizations of the idea would perform similarly, the
literature has often relied on the following simple one. Every pair of players who are matched becomes involved in a
two-stage game. In the ﬁrst stage, they simultaneously decide on a message m ∈ M to send to their opponent. (We shall
assume that the message space is sufﬁciently rich so that |M| > n, i.e.




    14
         This is stronger than the concept proposed by Aumann and Sorin (1989) in that these authors admit that different action proﬁles may lead to the same most preferred pay-
         off proﬁle. This slightly more general concept could have been adopted at the cost of some complication in the argument.
                                                                 2.8. Evolution and Cheap Talk                                                                                  37


there are more messages than individuals.) The messages are costless, in the sense that they will not play any direct role
(either positive or negative) in the eventual pay-offs earned by the players. The only indirect way in which they may
impinge on players' pay-offs is by affecting what they decide to do in the second stage of the game. In this second
stage, players are confronted with a game G as described above. In deciding upon the continuation strategy to play at
this point, players are assumed to have observed the message sent by their opponent (and remember also its own
message), possibly linking their choice at this stage to these observed messages.
In the two-stage game with pre-play communication described, strategies are somewhat complicated. On the one hand,
they must specify the message mk ∈ M to be sent in the ﬁrst stage of the game, depending on the position k = 1, 2 that
the individual occupies in the game.15 In addition, they must determine what action to choose, given the pair of
messages (m1, m2) observed, again depending on the position k occupied. Since there are |M|2 such possible pairs of
message observations, a complete strategy for the communication game can be identiﬁed with an element of the set Φ
≡ M2 × (S|M| × |M|)2.
It is easy to see that it is impossible in this context to ﬁnd a single pure strategy proﬁle that could alone qualify as
evolutionarily stable. The reason is akin to the ideas verbally explained in Subsection 2.6.4. If a single pure strategy
proﬁle is played, all but two of the action-message components contained in each player's strategy are irrelevant.
Therefore, there is no selective pressure on them which may render any particular choice stable.
These considerations suggest extending our former notions of evolutionary stability to a set-valued concept which
allows for the co-existence of a variety of alternative strategies played by different individuals. This is, for example, the
approach undertaken by Sobel (1993), which captures the idea that agents may “drift” by adopting (in a weakly optimal
fashion) new strategies which only differ from the original ones in contingencies (i.e. messages) which are irrelevant
(i.e. currently not sent). Here, we focus on a very similar approach. However, unlike Sobel's, it is evolutionary in a strict
“biological sense”. That is, as in the concepts discussed so far (e.g. ESS), it evaluates the viability of any new strategies
on the exclusive basis of their relative pay-offs. (It ignores, therefore, any considerations related to agents' best
responses per se.) To proceed formally, some additional notation is ﬁrst introduced.
Let Φn be the set of strategy proﬁles in the communication game. A typical element of it will be denoted by φ ≡ (φ1, φ2, .
. . , φn). For each i = 1, 2, . . . , n,                               denotes the strategy played by individual i, its
interpretation being as explained above. We shall use the notation φ \i to represent the proﬁle of strategies resulting
when the original φi played by




15
     We are implicitly assuming that the message exchange takes place after each player learns his position in the game. Alternatively, it could have been assumed that the position
     assignment is only resolved after the message exchange has taken place. Nothing essential would be affected by this alternative formulation.
38                                                                  Chapter 2. Static Analysis


individual i is replaced by . For any given φ, the pay-off obtained by player i is given by some function πi (φ) which
reﬂects the expected (or average) magnitudes resulting from the postulated matching framework. Speciﬁcally, it is
deﬁned as follows:




                                                                                                                                                                         (2.21)
The previous expression simply reﬂects the assumption that every individual i = 1, 2, . . . , n meets (or is expected to
meet) every other individual j ≠ i exactly once (respectively, with uniform probability) in each of the two game
positions.16
The evolutionary concept proposed is described in the following deﬁnition.17
Deﬁnition 5A set Θ ⊂ Φnis an evolutionarily absorbing set (EAS) if it is a non-empty set of strategy proﬁles which is minimal with
respect to the following twofold property:




                                                                                                                                                                         (2.22)

The twofold property contemplated by the previous deﬁnition implicitly embodies the two evolutionary forces which
interest us here. Part (a) captures selection forces: if the strategy φi adopted by individual i earns a pay-off lower than
that of some opponent, then evolution may replace i's strategy with that of the opponent. Part (b), on the other hand,
reﬂects the dynamics of drift: if any “mutation” renders player i a pay-off as great as that of any other agent, then it
may evolve into the set Θ.
The previous concept could be modiﬁed in a number of ways without affecting the analysis. For example, part (b)
could be reformulated so that a strategy which earns at least average pay-offs may evolve into the set Θ. Analogously,
part (a) could be modiﬁed so that if a strategy fares worse than average (i.e. not just worse than some strategy) it is
eligible for replacement by the strategy of a better-off opponent. Of all the different possible variations which could be




16
     Strictly speaking, the formulation contained in (2.21) describes the round-robin interpretation of our matching framework. If the random-matching alternative
     interpretation were considered, the above expression would have to be multiplied by the constant 1/[2 (n − 1)].
17
     Besides Sobel's (1993) similar concept mentioned above, other related notions have been proposed in the literature. For example, Thomas (1985) proposes an alternative
     set-valued concept which requires that any invading strategy renders a strictly better pay-off than the one it replaces. Swinkels (1992) strengthens the previous requirement
     by postulating that entrants play an optimal strategy relative to the post-entry conﬁguration. Both of them focus on sets of Nash equilibria which are closed with respect to
     their respective entry condition.
                                              2.8. Evolution and Cheap Talk                                                39


contemplated, the arguably simplest one has been chosen in Deﬁnition 5 for the sake of clarity.
The considerations underlying a EAS are qualitatively different from the strict selection pressures which sustain a given
ESS. As will be recalled, an ESS is required to dominate strictly any other alternative strategy which might enter the
population in small frequency. The EAS concept is more “pragmatic”: if an alternative strategy to be played by some
member of the population yields a pay-off as large as that of all others, it is admitted. Note, however, that EAS
generalizes the ESS concept, as deﬁned in Deﬁnition 3 for ﬁnite populations. That is, any ESS (when one exists)
obviously deﬁnes a singleton EAS.
When an EAS is not a singleton (as will be the case here), this concept provides a theoretical underpinning for the sort
of polymorphism which (as explained in Subsection 2.2.2) is inconsistent with the implicit motivation underlying the
ESS concept. However, along the lines of some of our former discussion, one could still argue that the static nature of
this new concept should provide little insight into phenomena such as polymorphism and drift, which are inherently
dynamic. Even though this might be a reasonable criticism in general, it loses much of its appeal in those particular
cases where every element of a certain “evolutionarily stable set” induces the same kind of realized behaviour. This is
indeed the state of affairs established by the central result of this section.
Theorem 2Consider a common interest game G subject to pre-play communication as described. A unique EAS Θ exists. Moreover, if
the population is large enough,                                                      and              .
Proof. First, it is argued that an EAS always exists. Since this concept is deﬁned as the minimal non-empty set
satisfying condition (2.22), it is enough to show that a non-empty set satisfying this condition exists. But, obviously, the
whole set Φn satisﬁes it, thus conﬁrming existence of an EAS.
Next, it is claimed that Θ must have all its strategy proﬁles φ ∈ Θ satisfy:



                                                                                                                       (2.23)
i.e. they have to induce the (single) efﬁcient pair of actions. To show this, we argue that any proﬁle of strategies which
does not have this property cannot be part of an EAS. Let 0φ be some such strategy proﬁle. The argument involves two
parts.
First, it is shown that a ﬁnite chain of strategy proﬁles (0φ, 1φ, . . . , rφ) can be constructed where rφ satisﬁes condition
(2.23) and ∀ q = 1, . . . , r, ∃ i such that:



                                                                                                                       (2.24)
40                                                        Chapter 2. Static Analysis


and either18




or                                                                                                                      (2.25)



with                                                                                                                    (2.26)




                                                                                                                        (2.27)
Secondly, it will be shown that no converse transition is possible, i.e. there is no path satisfying (2.24)–(2.27) which,
from a strategy proﬁle that satisﬁes (2.23), may lead to another strategy proﬁle not satisfying it.
To show the ﬁrst part, let m̂∈M be some message not included in the strategy proﬁle 0φ by any player in one of the
positions, say 1. Some such message is bound to exist since a rich enough message space has been assumed (|M| > n).
It is now claimed that, from 0φ, one can construct a chain satisfying (2.24)–(2.27) which after n steps at most has all
players in position 2 reacting to a (hypothetical) message m̂ by its opponent with action .
The intuitive reason is that, since m̂ is never sent by players in position 1 along the contemplated chain, any reaction to
it has no pay-off relevance. Formally, for each q = 1, 2, . . . , n, denote:




Then, at each q = 1, 2, . . . , r1 (r1 ≤ n), consider the following transitions:
     (i) If R(q − 1)\ U(q − 1) ≠ ∅, choose any i ∈ R(q − 1)\ U(q − 1) and change its strategy at q so that               .
     (ii) Otherwise (i.e. if R(q − 1)\ U(q − 1) = ∅), choose any i ∉ U(q − 1) and make φ equal to the strategy
                                                                                        q i
                                                                                                                      φ of
                                                                                                               (q − 1) j


          some individual j ∈ R(q − 1).
Note that if (i) applies, it induces an admissible transition due to (2.24) and (2.25). If, on the other hand, (ii) applies, it
also leads to an admissible transition since, in this case (i.e. provided (i) does not apply), the contemplated agents i and j
must satisfy i ∉ R(q − 1) and j ∈ U(q − 1). Thus, the postulated transition is consistent with (2.24) and (2.26)–(2.27).
Clearly, in n steps at most (i.e. with r1 ≤ n), we have that



                                                                                                                       (2.28)
Consider now some message m̃ ∈ M not used by any player in position 2 when proﬁle                   prevails, and consider an
analogous consecutive chain of



18
      Note, of course, that (q − 1) φ \i (q φi ) = q φ.
                                              2.8. Evolution and Cheap Talk                                                41


proﬁles for q = r1 + 1, . . . , r2. This chain may be constructed so that condition (2.28) is not altered throughout, but at q
= r2 one has:



                                                                                                                       (2.29)
i.e. the analogue of (2.28) for message m̃. Now simply consider a ﬁnal chain for q = r2 + 1, . . . , r2 + n (≡ r) which for
each i = q − r2 has individual i's strategy (and only this strategy) changed to satisfy



and



without violating (2.28) and (2.29). Such transitions are admissible by virtue of (2.25) and the eventual proﬁle rφ clearly
satisﬁes (2.23). This completes the ﬁrst part of the proof.
Consider now any strategy proﬁle φ which satisﬁes (2.23). Since all individuals are attaining at φ the same pay-off, it
just needs to be checked that no transition of the type contemplated in (b) of Deﬁnition 5 may lead the population to
violate (2.23). Any unilateral change by some individual i to a strategy i ≠ φi which leads to such a violation must
decrease i's pay-off by some minimum amount Δ (which depends on the pay-offs of the game) for each one of its
encounters in which an action proﬁle different from             occurs. However, only if there are at least n − 1 such
encounters could every individual j ≠ i obtain a pay-off lower than the maximum pay-off



And then, the difference with this pay-off could be no larger than




Of course, if n is large enough, Δ (n − 1) > η, which implies that φ \i     cannot belong to a minimal set satisfying both
(a) and (b) in Deﬁnition 5.
Finally, we must address the uniqueness of an EAS. But this simply follows from the fact that every two strategy
proﬁles satisfying (2.23) can be connected through admissible transitions (2.24)–(2.27). This completes the proof of the
theorem. ▪
When there is no conﬂict of interest among the players, the above result clariﬁes the powerful role played by
communication in allowing for the evolution of co-operative behaviour. Speciﬁcally, when a game of common interest
is preceded by the possibility of some stylized form of “cheap” communication,
42                                             Chapter 2. Static Analysis


the unique evolutionarily stable set (in the sense of Deﬁnition 5) ensures that the single efﬁcient outcome will be
achieved in all circumstances, provided that the population is large enough. This latter caveat emphasizes again (recall
Section 2.7) the potentially interfering role which “spite” may have in blocking otherwise beneﬁcial mutations in
contexts (modelled) with a ﬁnite population.
There is some related evolutionary literature which, despite being formulated in a quite different theoretical
framework, displays some basic ideas very similar to those of Theorem 2. Noted representatives of it are Fudenberg
and Maskin (1990) and Binmore and Samuelson (1992). In both cases, players are assumed involved in a repeated
game with no discounting. Their strategies must be either ﬁnitely complex (in Fudenberg and Maskin (1990)) or their
complexity is assumed costly (in Binmore and Samuelson (1992), where complexity costs are assumed lexicographically
less important than the pay-offs strictly derived from playing the game). The key observation to make in this context is
that, since no ﬁnite history has any effect on intertemporal pay-offs, players can use ﬁnite strings of play as a costless
mechanism for communication. Relying on such indirect communication, these authors show that any conﬁguration
which does not satisfy some strong notion of joint rationality (e.g., that does not maximize total pay-offs, in Binmore
and Samuelson (1992)) will be destabilized by a “secret handshake” (Robson's felicitous term). Finally, note that the
efﬁciency implications of this approach are, in a sense, much stronger than those of Theorem 2: some efﬁcient
outcomes (as, for example, “joint co-operation” in the prisoner's dilemma) may arise as the unique evolutionarily stable
conﬁguration, despite not forming part of any “strategic equilibrium” of the stage game.
                                         3 Basic Dynamic Analysis

3.1 Introduction
In the previous chapter we made the following “methodological” point. In general, no purely static analysis of
evolutionary processes can be judged satisfactory unless complemented with appropriate dynamic foundations. Such a
point is, of course, common to many different areas of theoretical research.19 But, in our case, the need to go beyond
static analysis and propose a genuinely dynamic framework represents more than just a methodological consideration.
For, as already noted in the preceding chapter, the following two crucial problems with our static approach make it
especially unsatisfactory.
First, there is a lack of general conditions under which the central static equilibrium concept, the concept of ESS, can
be ensured non-vacuous. For generic games, the reader will recall, it was shown in Section 2.5 that an ESS may not
exist.
Secondly, the concept of ESS makes good theoretical sense only if the situation it represents is monomorphic, i.e. all
members of the population are playing the same strategy. In the generalizations of this concept where the population
proﬁle has been allowed to be polymorphic (e.g. the EAS concept proposed in Section 2.8), the validity of the
approach crucially relies upon the fact that all individuals are taken to adopt the same action, even though they may
play strategies with different prescriptions off the equilibrium path. In general, however, we would like to have a
general model for stable and genuine polymorphic situations in which different members of the population may be
adopting different actions. As explained in the previous chapter (recall our discussion in Section 2.2) a proper
theoretical analysis of these situations cannot avoid an explicit modelling of the evolutionary dynamics. To take a ﬁrst
step along this path will be our task in this chapter.




19
     Paul Samuelson's well known Correspondence Principle is, for instance, an embodiment of this principle for conventional economic analysis.
44                                                           Chapter 3. Basic Dynamic Analysis


3.2 The Replicator Dynamics
Recall the general framework introduced in Subsection 2.1.1 and assume, for the moment, that the set of possible
phenotypes is ﬁnite. For simplicity, we shall assume that they coincide with the set of pure strategies S = {s1, s2, . . . , sm}.
This restriction will be relaxed in Section 3.6, where the dynamics involving the whole set of mixed strategies will be
presented and discussed.
The presentation of the evolutionary dynamics will be ﬁrst conducted in a discrete-time framework where the
motivation of it is clearer. Then, we turn to the continuous-time framework, which may be conceived as the limit of its
discrete-time counterpart when either period lengths are short or relative ﬁtness differences are small (for example,
because all strategies enjoy a relatively large and common “basic ﬁtness”).


3.2.1 The Discrete-Time Case
Let time be measured discretely, t = 1, 2, . . . Denote by ν (t) ≡ (νi (t))i = 1, 2, . . . , m, Σ ν (·) ≡ 1, the population proﬁle over
pure strategies prevailing at t. For simplicity, each member of the population is assumed to live only one period, leaving
some offspring which inherits the same phenotype as the parent. Reproduction, therefore, is assumed asexual, with
each member of every new generation having only one parent.
Naturally, the number of offspring left by each member of the population is taken to depend on the pay-off earned
during his (one-period) lifetime. Speciﬁcally, we shall adopt a strictly biological approach here and identify the “pay-
off ” of an individual with the expected number of viable20 offspring he is able to produce. Thus, if an individual of
“generation” t plays strategy si against a population proﬁle ν (t), the expected number of offspring he is assumed to
produce (with the same phenotype) exactly equals its pay-off π (si, ν (t)) ≡ πi (ν (t)).
With the previous interpretation for pay-offs, the phenotypical dynamics induced becomes a matter of sheer deﬁnition.
Normalize the size of the population to one. Then, if the population proﬁle at t is ν (t) the size of the population at t +
1 is given by:



where recall that each πi (ν (t)) has been identiﬁed with the number of offspring produced by each individual which plays
strategy si. Thus, νi (t + 1), the fraction of the population which plays strategy si at t + 1, is obtained as follows:




                                                                                                                                 (3.1)




20
     Here, viability is identiﬁed with the capacity for survival and reproduction.
                                                                  3.2 The Replicator Dynamics                           45


or, denoting the average pay-off                                                ,




                                                                                                                      (3.2)
which, for strategies with positive population frequency νi (t) becomes:




                                                                                                                      (3.3)
The previous expression has the following intuitive interpretation: the share of the population which plays any given
strategy changes in proportion to its relative pay-off (i.e. in proportion to its deviation, positive or negative, from the
average pay-off).


3.2.2 The Continuous-Time Case
When adjustments in each period are sufﬁciently small, the discrete-time dynamics can be approximated, in an
arbitrarily close fashion, by a corresponding continuous-time version. An advantage of this alternative formulation is
its larger analytical tractability. (For example, the conclusions derived from it do not depend on speeds of adjustment,
which can play instead a crucial role when time is modelled discretely.) Moreover, one could argue that, in fact, time is
(and therefore should be modelled as) a continuous variable. From this point of view, the division of time in discrete
periods is merely an artefact.
To make precise a sense in which one can speak of the above-mentioned approximation, consider a discrete-time
framework with variable period length Δ > 0. Following Cabrales and Sobel (1992), assume that, in every period of
length Δ, only a fraction Δ of the population is replaced by its offspring, the rest of the population remaining
unchanged. If the fraction of the population which reproduces every period is an unbiased representation of the whole
population, and the rate of reproduction of any phenotype is again identiﬁed with its average pay-offs, the resulting law
of motion can be written (in analogy with (3.1)) as follows:




or21




 21
       Note that for Δ = 1 one obtains (3.2), i.e. the discrete-time version.
46                                        Chapter 3. Basic Dynamic Analysis


Dividing by Δ, and taking limits as Δ → 0 (i.e. as the length of the time interval becomes inﬁnitesimal), the above
expression becomes:




                                                                                                                     (3.4)
The above law of motion is labelled the Replicator Dynamics (RD) since (in the terminology ﬁrst suggested by Dawkins
(1982)) it models a process of differential “replication” among a given set of strategies or phenotypes. It is the
counterpart of (3.2) for a continuous-time framework. Note that the alternative formulation




                                                                                                                     (3.5)
which has a closer formal parallelism with the discrete-time version (3.2) will display the same qualitative properties
(e.g. the stability of its rest points) as (3.4). This follows from the simple observation that the term π (ν (t)) in the
denominator of (3.5) is common to all of its m equations and, therefore, only affects the “speed” of adjustment of the
system, not its trajectories.
The dynamical system given by (3.4) can be conceived as the model of an evolutionary process directly taking place in
continuous time. Alternatively, as explained, it may be interpreted as an approximation to a discrete-time system for
which the magnitude of differential ﬁtness per period is very small. Having the time-period become inﬁnitesimal is one
natural way of achieving such small differential ﬁtness per period. A second possibility in this respect is to assume that
pay-offs display some large “basic ﬁtness”, relative to which differential magnitudes are very small.
To clarify this latter statement, assume that pay-off functions are rewritten in the following form




for some basic ﬁtness B (independent of ν) and some appropriate set of functions (                    . Consider now the
discrete-time RD applied to this set-up and make B → ∞ (ﬁxing the functions (                 ). It is easy to see that the
induced (discrete-time) paths converge to those induced by (3.4).


3.2.3 Properties of the Replicator Dynamics

3.2.3.1 Invariance of Δ           m − 1



The above system of differential equations is given by a vector ﬁeld on Δm − 1. If it is to be well deﬁned, the domain of
this vector ﬁeld must be invariant under (3.4). In other words, every trajectory which starts in Δm − 1 must remain in it
when governed by such a law of motion. It is a straightforward task to conﬁrm
                                                  3.2 The Replicator Dynamics                                                47


it. Simply note that:




and, therefore,                if, and only if,               .


3.2.3.2 Invariance of the Boundaries and Interior of Δ                             m−1



The above property can be strengthened to the following conclusion:



                                                                                                                           (3.6)
Verbally, (3.6) expresses the idea that if any strategy is played by the population in positive proportion at the start of the
process, it will remain played in positive (perhaps very small) proportion all throughout. And conversely, only a strategy
which was played in some positive proportion at the start of the process may be played in positive proportion at any
time along it.
This property points to an important conceptual problem of the RD: only initially present behaviour may arise along
the process. This property of the RD is a consequence of the fact that it only considers exact replication (i.e. offspring
inherit the same strategy as their parents). This feature will later be modiﬁed (see, for example, Section 3.9) by
incorporating the possibility that “mutation” may introduce into the process previously inexistent variability.


3.2.3.3 Additive Invariance
Since only relative differences in pay-offs matter for the RD, its behaviour is unaffected by a common additive shift in
the pay-off functions. This shift, moreover, may depend on the current population proﬁle of strategies.
To be precise, consider any function ϑ : Δm−1 → ℜ. If the original set of pay-off functions (πi)i=1,2,. . . ,m is replaced by an
alternative set              such that                       , the dynamic behaviour of the system is completely
unaffected. Mere inspection of (3.4) will conﬁrm this assertion.


3.2.3.4 The Quotient Replicator Dynamics
Expression (3.4) determines the law of motion of the different strategy frequencies played in the population. Induced
by it, we can derive an equivalent law of motion for the relative frequencies of any pair of strategies. Simple calculation
yields:
48                                           Chapter 3. Basic Dynamic Analysis


for all i,j = 1,2, . . . , m such that νi(t), νj(t) > 0. The above law of motion is mathematically equivalent to (3.4), under the
interpretation that strategies with zero frequency experience zero proportional rates of change. It describes the RD in
an alternative intuitive way: given any two strategies, the relative weights (frequencies) with which they are played in the
population change as dictated exclusively by their pay-off difference.


3.3 The ESS and the Replicator Dynamics
In this section we start the analysis of the RD by exploring its relationship to the central static concept of ESS
presented and discussed in the previous chapter.
For simplicity, subsequent discussion in this chapter will focus on scenarios where contests are random and pairwise, in
terms of a certain bilateral game with pay-off matrix A = (aij)ij=1,2,. . . ,m (cf. Subsection 2.1.2). Its extension to more general
contexts is generally easy and thus left to the reader.


3.3.1 The Implicit Dynamics of a Monomorphic ESS
There is a simple dynamic motivation implicit in the ESS concept (Deﬁnition 1): If the ESS strategy (viewed as being
initially adopted by the whole population) is threatened by any small mutation, the fact that the latter does strictly
worse than the ESS strategy leads to the implicit dynamic conclusion that the mutation will eventually disappear.
Such dynamics can be formally described in terms of a replicator system where two (and only two) strategies are
possible: the ESS, say σ*, and some mutant strategy, denoted by ρ. In this context, the state of the system can be fully
described by the proportion ν1 ∈ [0,1] with which the ESS strategy σ* is played in the population (ν2 = 1 − ν1 represents
the complementary frequency with which strategy ρ is played). The (one-dimensional) Replicator Dynamics applied to
this case has the following form:




which for small 1 − ν1(0) yields           since σ* is an ESS (and, therefore, the term in brackets above must be
positive). This conﬁrms the dynamic local stability of the ESS strategy.
                                                         3.3 The ESS and the Replicator Dynamics                                                                                  49


3.3.2 ESS Conditions and Polymorphic Stability
As explained in Chapter 2, the interpretation of the ESS concept depends crucially on two assumptions:
     (i) mutations arise only one at a time;
     (ii) the initial state is monomorphic.
Assumption (i) may be acceptable if mutations are conceived as very rare phenomena with insigniﬁcant probability of
arising jointly.22 Assumption (ii), on the other hand, is much less appealing. It seems a fundamental shortcoming to
restrict our consideration to situations in which only a single type of behaviour (i.e. strategy) may exist at equilibrium.
Instead, behavioural diversity, with all the balances and complementarities that it may afford, often seems a much more
likely and natural outcome of evolution.
Such diversity in “observed behaviour” may arise monomorphically if the population plays some genuinely mixed strategy.
In this case, the pattern of realized behaviour — not of inherited behaviour, which is monomorphic — will indeed be
polymorphic. However, in many contexts, a polymorphic situation is better described as one where the underlying
pattern of inherited behaviour — not just of realized behaviour — is itself polymorphic. But then, as our previous
discussion in Subsection 2.2.2 emphasized, it is necessary to rely on an explicitly dynamic analysis to study its
evolutionary stability. This is precisely what is provided by the RD, whose stability features are presently studied.


3.3.2.1 Polymorphic Stability (I): Sufciency
Despite its dichotomic and inherently “static” nature, the ESS concept turns out to have a very useful instrumental
value in the stability analysis of polymorphic situations. For, as we shall presently show, any ESS (in pure or mixed
strategies) always23 deﬁnes a locally stable state of the Replicator Dynamics over pure strategies. However, as we shall
illustrate in the next subsection, this unexpected role of the ESS concept cannot be taken too far: there might well exist
stable polymorphic states which cannot be associated with any corresponding ESS.
For the sake of completeness, we ﬁrst present the following standard stability notion.




22
      This is not the stand taken e.g. in Chs. 5 and 6 where the analysis relies heavily on the possibility that, despite their relatively low probability, simultaneous mutations may
      indeed arise and play a crucial role in destabilizing otherwise stationary conﬁgurations.
23
      In general scenarios (not necessarily with pairwise contests), Theorem 3 below has to be modiﬁed slightly: instead of involving the ESS notion, it applies to a strengthening
      of it that Bomze and Pötscher (1988) call non-invadability. Essentially, this concept requires that there exists a uniform positive threshold across mutations such that, below
      it, no mutant invasion is possible. In pairwise random contests this notion coincides with that of ESS.
50                                                           Chapter 3. Basic Dynamic Analysis


Deﬁnition 6Let                       be a dynamical system in ℜk. The point x*is an asymptotically stable equilibrium of it if:
     (i) It is Liapunov stable, i.e. given any neighbourhood U1of x*there exists another neighbourhood U2of x*such that all trajectories with
          x(0) ∈ U2satisfy x(t) ∈ U1, ∀ t ≥ 0.
     (ii) There exists some neighbourhood V of x*such that all trajectories starting in V satisfy x(t) → x*as t → ∞.
We can now state the main result of this section.
Theorem 3 (Hofbaueret al.(1979))Let σ*be an ESS. Then, the state ν* = σ*is an asymptotically stable equilibrium of RD.
Proof. Let σ* be an ESS. Then, ∀ σ ≠ σ*, ∃ ɛ > 0 s.t. if ɛ ≤ ɛ,



                                                                                                                                                  (3.7)

We ﬁrst establish the following Lemma:
Lemma 1Condition (3.7) implies:24




                                                                                                                                                  (3.8)

Proof: Consider the following two possibilities.
If σ* ∈ int (Δm−1), then simply choose                                    . Since, in this case,




it follows from Proposition 1 that




as desired.
If σ* ¬∈ int (Δm−1), denote by bd(Δm−1) the boundary of the simplex Δm−1 (the union of all the (m − 2)-dimensional facets
of Δm−1) and by                the set of those facets in bd (Δm−1) which include σ*. Let                               ,
where int (·) here denotes the relative interior in bd (Δ ). Clearly, H is relatively compact in bd (Δ ), and σ ¬∈ H.
                                                         m−1                                          m−1      *



For every σ ∈ H, let ˜ɛ (σ) be the supremum over all ɛ > 0 such that




24
      In fact, Conditions (3.7) and (3.8) can easily be seen to be equivalent, i.e. the implication reciprocal to that of the Lemma also holds.
                                                   3.3 The ESS and the Replicator Dynamics                                  51


Since σ* is assumed ESS, ˜ɛ(σ) > 0 for all such σ. Moreover, it deﬁnes a continuous function on the compact set H.
Therefore




It is easy to check that the set



may be selected as the desired neighbourhood                    . This completes the proof of the Lemma.
To show now the stability of the state ν* = σ*, deﬁne the local Liapunov function ψ on Δm − 1 (see the Appendix):




Denote ϑ (·) ≡ log ψ(·). For ν in a sufﬁciently small neighbourhood of ν*, say W, νi > 0 if   . Therefore, ψ(·) is
positive and ϑ(·) is well deﬁned in such a neighbourhood. Consider now some other neighbourhood of ν* of the form



for some suitable δ. Given any arbitrary neighbourhood U1 (as in Deﬁnition 6), choose δ now large enough such that
           where        is as in the above Lemma. For any t with ν(t) ∈ U* we have:25




 since σ* (= ν*) is an ESS. Making U2 and V in Deﬁnition 6 both equal to U*, the desired conclusion follows, completing
the proof of the theorem. ▪


3.3.2.2 Polymorphic Stability (II): Necessity
The previous result indicates that if the frequencies deﬁning a certain state may be identiﬁed with the corresponding
probability weights of an ESS, then this is a sufﬁcient condition for the state to be asymptotically stable with respect to the
RD. An example borrowed from Taylor and Jonker (1978) is now presented, which shows that such a condition is not
necessary for asymptotic stability.
Consider a scenario with pairwise contest where every two randomly paired individuals play the game deﬁned by the
following pay-off table:




25
     The notation Ai stands for the i th row of the matrix A.
52                                       Chapter 3. Basic Dynamic Analysis


Table 4
                                α                            β                            γ
     α                          0,0                          1, −2                        1,1
     β                          -2, 1                        0, 0                         4, 1
     γ                          1, 1                         1, 4                         0, 0

It is straightforward to check that σ̃ = (1/3, 1/3, 1/3) is the only symmetric Nash equilibrium of this game. This
mixed strategy, therefore, is the only possible ESS.
But σ̃ is not an ESS. To see this, we now show that σ̂ = (0, 1/2, 1/2) can invade σ̃ . Making




we have:




which means that a small fraction of mutants playing σ\may invade a monomorphic population playing σ̃.
Consider now the stability of σ̃ according to the RD. Denoting Fi (σ) ≡ σi [Aiσ − σ · Aσ], the RD is deﬁned by the
vector ﬁeld F ≡ (Fi)i=1,2,3. Thus, the local stability of σ̃ depends on the Jacobian DF(·) evaluated at σ̃. We compute:




It can be checked that the eigenvalues of the matrix DF (σ̃) are {−1/3, −1/3, −2/3}, all negative real numbers. We
may conclude, therefore, that σ̃ is locally (asymptotically) stable in terms of the RD even though it is not an ESS.


3.4 Evolutionary Dynamics and Nash Renements
The discussion carried out here is parallel to that of Section 2.4. Now, however, the links between equilibrium concepts
of Classical and Evolutionary Game Theory will be discussed within a dynamic framework.
                                             3.4 Evolutionary Dynamics and Nash Reﬁnements                                                      53


The most “primitive” concept to be derived from the RD is that of a stationary state. Speciﬁcally, a certain ν* ∈ Δm−1 is
called a stationary state if it satisﬁes:



                                                                                                                                             (3.9)
where recall that Ai denotes the ith row of A. The relationship between this concept and that of Nash equilibrium
(always applied to the underlying bilateral game with pay-off matrix A) is contained in the following proposition.
Proposition 6If ν*deﬁnes a symmetric Nash equilibrium, it is a stationary state of the RD. The converse need not be true.
Proof. If (ν*, ν*) is a Nash equilibrium, it is clear that:



                                                                                                                                            (3.10)
for all i,j such that                        . Thus, (3.9) obviously follows.
Consider, on the other hand, a population state




 fully concentrated in some strategy sj. Any such vector                          will always satisfy (3.9) trivially, but, in general, it need not
deﬁne a Nash equilibrium. ▪
The second part of the previous result indicates that, in general, some stationary states will not deﬁne Nash equilibria.
Clearly, this can only occur if the stationary state in question is not interior to Δm−1. For, otherwise, if an interior point
satisﬁes (3.10), it must also deﬁne a Nash equilibrium.
More interestingly, the next result shows that if a stationary state is required to be locally stable, then it must also deﬁne
a Nash equilibrium.
Proposition 7 (Bomze (1986))Let ν*be an asymptotically stable equilibrium of (3.4). Then, (ν*,ν*) is a Nash equilibrium.
Proof. Let ν* be an asymptotically stable point of (3.4), and let       be a sufﬁciently small neighbourhood of it. Take
           such that νi (0) > 0 for all i = 1, 2, . . . , m. By the asymptotic stability of ν* we know that ν (t) → ν*.
Suppose ν* were not a Nash equilibrium. Then, there exists some i, j ∈ {1, 2, . . . , m} such that           and Aiν* > Ajν*.
Since νi (t) > 0 for all t, this implies (cf. the Quotient Replicator Dynamics of Subsection 3.2.3) that there is some γ > 0
and T > 0 such that if t ≥ T,




This obviously yields a contradiction with the assumed convergence to ν*. ▪
By a more elaborate argument, we can even strengthen the previous theorem as follows.26



26
     Obviously, Theorem 4 makes Proposition 7 redundant. However, for pedagogical reasons, both are included.
54                                                          Chapter 3. Basic Dynamic Analysis


Theorem 4 (Bomze (1986))Let ν*be an asymptotically stable equilibrium of (3.4). Then (ν*,ν*) is a perfect equilibrium.
Proof. Let ν* be an asymptotically stable equilibrium and suppose, for the sake of contradiction, that (ν*,ν*) is not
perfect. By the characterization result already invoked in the proof of Proposition 2, the (mixed) strategy σ* = ν* must
be dominated by some other strategy             . In particular,




Deﬁne φ : Δm−1 → ℜ by:




which guarantees that φ (ρ) > 0 for all ρ >> 0.27 For such ρ we can compute:




We now show that ν* is not a local maximum of φ. This is certainly the case if, for some                        but        .
For in this case φ (ν*) = 0. Suppose then that for all i = 1, 2, . . . , m such that  , we have    . In this case, φ (ν*) >
0 and for some i′ for which           (one such co-ordinate must exist since         and both belong to the simplex Δm−1)
we have:




                                                                                                                        (3.11)
 Thus, in the direction in which the i′ co-ordinate increases so does φ(·) in a neighbourhood of ν*. Let U be such a
neighbourhood and choose some ρ° ∈ U with             for all i = 1, 2, . . . , m and φ (ρ°) > φ (ν*). This choice is feasible
from (3.11).
Consider then a trajectory ρ (·) of (3.4) with ρ (0) = ρ°. The time-derivative of φ (·) along this trajectory is:




27
     The notation “>>” indicates that the strict inequality applies to all vector components.
                                                       3.5 Some Examples                                                            55


which implies that φ (·) does not decrease along any trajectory of (3.4). If such a trajectory starts at ρ°, φ(ρ(t)) ≥ φ(ρ°) >
φ(ν*). Thus, it cannot converge to ν*, as claimed. This completes the proof. ▪
Remark 1Note that the preceding theorem, together with Theorem 3, provides an alternative way of proving Proposition 2. By the previous
theorem, any asymptotically stable state deﬁnes a perfect equilibrium. Furthermore, by Theorem 3, every ESS induces an asymptotically
stable state. Thus, every ESS must also be a perfect equilibrium, which is the statement of Proposition 2.


3.5 Some Examples
In order to illustrate the operation of the Replicator Dynamics, two already familiar examples are now reconsidered:
the Hawk–Dove and the Rock-Scissors-Papers games, both played in a context with random pairwise meetings.


3.5.1 The Hawk–Dove Game Revisited (II)
Consider the Hawk–Dove game, as described in Subsection 2.3.1. We recall its pay-off table:
Table 5
                                               H                                          D
   H                                              ,                                       V, 0
   D                                           0, V                                        ,

which deﬁnes the pay-off matrix




If only pure strategies are allowed, the Replicator Dynamics of this game is given by:
56                                                           Chapter 3. Basic Dynamic Analysis


By deﬁning ν1 ≡ x and ν2 ≡ 1 − x, it can be analysed through the following one-dimensional dynamical system:



or




                                                                                                                                                                        (3.12)

We now show that, if V ≤ C, the equilibrium of this dynamical system, x = V/C, is globally stable. To verify this, it is
enough to ﬁnd a global Liapunov function.28 As such a function, we propose the same ψ(·) which was used in the proof
of Theorem 3, as particularized to (3.12). That is,



Along any trajectory of (3.12) we compute:




which, being positive except at the maximum of ψ(·), the point            , proves the desired conclusion. Note that
this conclusion does not follow directly from Theorem 3, since this result only establishes local stability.


3.5.2 The Rock-Scissors-Paper Game
Consider the Rock-Scissors-Paper game (R-S-P), described in Section 2.5 for ϕ = 0. The pay-offs are summarized by
the following table:
Table 6
                                               R                                          S                                          P
     R                                         0,0                                        1, −1                                      −1, 1
     S                                         −1, 1                                      0,0                                        1, −1
     P                                         1, −1                                      −1, 1                                      0,0




28
     Of course, a more direct argument for this case could build upon the simple observation that V − Cx (the last term of (3.12)) deﬁnes a monotonically decreasing
     function of x in [0, 1] with a zero in x* = V /C. We resort to a Liapunov function here in order to illustrate the potential global use of the approach pursued in the proof
     of Theorem 3.
                                                       3.6 Replicator Dynamics in Mixed Strategies                                                                              57


which deﬁnes the pay-off matrix:




A slightly more complicated argument than the one used in Section 2.5 shows that the R-S-P game allows for no ESS.29
We lose, therefore, a natural candidate for an asymptotically stable equilibrium. In fact, no such equilibrium exists. For,
as we shall presently show, the product ξ(t) ≡ ν1(t)ν2(t)ν3(t) is a constant of motion, i.e. a function which remains constant
along any trajectory. This indicates that all trajectories are cycles around the equilibrium (1/3,1/3,1/3), each one of
them coinciding with a particular level set, {ν ∈ Δ2 : ν1 · ν2 · ν3 = K}, for some 0 ≤ K ≤ 1/27.
The previous assertion is an immediate consequence of the fact that, along any trajectory of the corresponding RD,
       . Indeed, we compute:




which obviously equals zero.
The situation is represented in Figure 1.


3.6 Replicator Dynamics in Mixed Strategies
3.6.1 The Model
Suppose now that, in contrast with the dynamic model described in Section 3.2, individuals can adopt any of the mixed
strategies in the set Δm−1. Then, a state of the system at any given point in time is given by a probability measure λt ∈ Δ
(Δm−1), which speciﬁes the different weight with which each mixed strategy σ ∈ Δm−1 is adopted in the population at t.
Given the probability measure



where          is a corresponding σ-ﬁeld on Δm − 1, the expected pay-off of any strategy σ ∈ Δm − 1 is given by:



                                                                                                                                                                           (3.13)




29
     Now it is not possible to argue that there is a mutation that fares strictly better than the unique Nash equilibrium. Rather, the argument is that such a Nash equilibrium does
     not do strictly better than every possible mutation. This is enough to contradict the ESS deﬁnition.
58                                        Chapter 3. Basic Dynamic Analysis


Figure 1:Rock-Scissors-Paper Game, Replicator Dynamics




where, for notational simplicity, we shall make νt ≡ ν(λt).
For the moment, time will be considered discrete, t = 1, 2, . . . From the interpretation of pay-offs explained in Section
3.2, we may write the following law of motion for the frequency of any given mixed strategy σ ∈ Δm − 1:



                                                                                                                   (3.14)
i.e. the frequency (or “density”) of individuals adopting strategy σ is proportional to their preceding frequency and its
former pay-off (cf. the analogous expression (3.1) above). Here, αt is some appropriate proportionality variable chosen
to guarantee that:




That is:




which implies:




again analogous to the normalizing factor speciﬁed by (3.1).
Since the scenario considered involves a population game, only population frequencies over pure strategies matter for
determining the individuals' pay-offs.
                                                    3.6 Replicator Dynamics in Mixed Strategies                                                                        59


Motivated by this fact (see also Remark 2 below), our main concern is with the dynamics induced on population states
νt as given by:




or, from (3.14):




which, applying (3.13), becomes:




A standard formula in statistics reads as follows:30
                                                                                                                                                                  (3.15)



where
                                                                                                                                                                  (3.16)




represents the covariance matrix of the probability measure λt. Denote by Ξit its ith row. Applying (3.16) in (3.15), we
obtain:



                                                                                                                                                                  (3.17)
If, as in Subsection 3.2.2, the discrete-time framework is assumed to reﬂect only small ﬁtness differentials per time-
period, (3.17) approximates the following continuous-time system:




Because of its tractability, the analysis will focus on this continuous-time version of the dynamics.                                                             (3.18)


3.6.2ESS Conditions and Dynamic Evolutionary Stability
The objective of this section is to show that, if no a priori restrictions are imposed on the set of possible mixed
strategies which can arise in the population, then local stability of any (interior) equilibrium state of (3.18) is equivalent to
the requirement that this state be an ESS.



30
     The notational superindex “        ” denotes transpose (here, of row vectors) and is only explicitly used in cases such as this one where dispensing with it may cause
     confusion. Otherwise, it is avoided for the sake of notational simplicity.
60                                                              Chapter 3. Basic Dynamic Analysis


Thus, in this sense, we may say that ESS conditions are both necessary and sufﬁcient for evolutionary dynamic stability.
This contrasts with the conclusion of Subsection 3.3.2. There, it was shown that if the population can only adopt pure
strategies (i.e. population proﬁles λ may only assign positive weight to the “degenerate” mixed strategies identiﬁed with
the vertices of Δm−1), the so-restricted RD may have asymptotically stable states which do not correspond to any ESS.
A precise statement embodying the previous discussion is contained in the following result.
Theorem 5 (Hines (1980b))An equilibrium state ν* >> 0 of (3.18) is asymptotically stable if, and only if, σ* = ν*is an ESS.
Proof. The asymptotic stability of any interior equilibrium state ν* of (3.18) depends on the properties of the matrices
(Ξ (·) A) “around” this point. Locally, Ξ(·) can be assumed constant, say equal to Ξ*.31 Thus, ν* will be asymptotically
stable if, and only if, the eigenvalues of Ξ*A all have negative real parts.
However, if no particular restrictions on the strategy proﬁle λ around ν* are to be considered, any positive-deﬁnite and
symmetric matrix has to be accepted as a possible candidate for Ξ*. This uniform stability of ν* then hinges upon
whether the eigenvalues of every such matrix Ξ*A have negative real part. In this respect, the following result is shown
in the Appendix.
Lemma 2Let M be any square matrix of dimension m. The following two statements are equivalent.
     (i) For every positive deﬁnite and symmetric square matrix Q, QM has all its eigenvalues with negative real parts;
     (ii)            is negative deﬁnite.
Let the pay-off matrix A play the role of the matrix M in the above Lemma. If it is required that (Ξ*A) have
eigenvalues with negative real parts for all positive deﬁnite and symmetric Ξ*, this Lemma indicates that it is both
necessary and sufﬁcient that            be negative deﬁnite.32
Since ν* is an equilibrium of (3.18), it is also a Nash equilibrium of the game with pay-off matrix A. Therefore, by
virtue of Proposition 4, we have that, if            is negative deﬁnite, then ν* is an ESS. This completes the necessity
part of the Theorem.
As for its sufﬁciency part, recall that, by Proposition 5, if σ* = ν* is an ESS, then                                                       must be negative deﬁnite. In
view of the above Lemma,




31                                                          *
      Note that, close to any equilibrium population state ν , the differential ﬁtness across pure (and therefore mixed) strategies can be made arbitrarily small. Therefore, the same
      applies to changes on the covariance matrix.
32
      The sufﬁciency follows from a standard result in the Theory of Dynamical Systems (see e.g. Hirsch and Smale (1974)). On the other hand, the necessity is implicitly
      restricted to so-called hyperbolic equilibria (i.e. equilibria whose corresponding eigenvalues do not vanish). Only these equilibria are structurally stable, in the sense of being
      robust to arbitrarily small perturbations of the functions involved.
                                                     3.7 Permanence and Survival                                                           61


the asymptotic stability of ν* then follows. This completes the proof of the theorem. ▪
Remark 2Note that Theorem 5 does not imply that an asymptotically stable equilibrium ν*of (3.18) will induce a corresponding
asymptotically stable equilibrium in the strategy proﬁle λ. Indeed, given any stationary state of (3.18), there is a continuum of alternative
population strategy proﬁles which induce this state. Since this set is connected, it is clearly futile to try to achieve a stringent concept of
evolutionary stability in strategy proﬁles for population games. Only some suitable notion of Liapunov stability (cf. part (i) of Deﬁnition 6)
can be hoped for in this case.


3.7 Permanence and Survival
The former sections have primarily focused on issues of dynamic stability. It was shown, however, that it is only in
cases where as ESS exists that such stability can be guaranteed. And then, of course, only local stability around an ESS
may be ensured. Nothing has been established, in general, about the global properties of the RD sufﬁciently far from
stationary proﬁles.
These considerations make it important to have some understanding of the global properties of the RD, even when the
latter yield non-convergent paths. In this respect, an often crucial issue turns out to be that of so-called “permanence”:
essentially, the question of whether pre-existing strategies can be ensured long-run survival. As will be explained,
closely connected to this idea is the possibility that well-deﬁned average behaviour will arise along (possibly non-
convergent) paths.


3.7.1 Denitions
The ﬁrst and weakest notion of long-run survival which will be considered here is that of persistence. Verbally, a certain
RD is said to be persistent if, for each of the strategies initially present at the start of the process, its frequency along
the ensuing path cannot be bounded above at progressively lower levels converging to zero. Persistency, in other words,
requires that there should be some positive level for each pre-existing strategy such that, no matter how far into the
future the process is being considered, the frequency of this strategy at some further date must not fall below that level.
Formally:
Deﬁnition 7A given RD is said to be persistent if every path ν (·) with νi (0) > 0 for some i = 1, 2, . . . , m, satisﬁes lim supt→ ∞ νi
(t) > 0.
62                                              Chapter 3. Basic Dynamic Analysis


More stringent is the notion of strong persistence. It requires that all limit frequencies (not just some of them) be positive
for all pre-existing strategies.
Deﬁnition 8A given RD is said to be strongly persistent if any path ν (·) with νi(0) > 0 for some i = 1, 2, . . . , m, satisﬁes lim inft→ ∞
νi (t) > 0.
Finally, the even stronger notion of permanence will be of interest for some purposes. Roughly speaking, it demands that
the boundary of the state space (the simplex Δm−1) is a “repeller” of the dynamical system. (That is, any trajectory that
approaches the boundary of the simplex from its interior must be “pushed inwards”.)
Deﬁnition 9A given RD is said to be permanent if there exists some δ > 0 such that all paths ν (·) with νi (0) > 0 for
some i = 1, 2, . . . , m, satisfy lim inft→ ∞ νi (t) > δ.
Notice that strong persistence may be identiﬁed with the notion of permanence for δ = 0. Also note that, in this latter
concept of permanence, the lower bound δ is taken uniformly over all paths of the dynamical system. It is, therefore,
quite a strong notion. Sufﬁcient conditions for it are presented in Subsection 3.7.3. Before this is done, our discussion
in the next subsection centres on necessary conditions.


3.7.2 Necessary Conditions for Persistence and Permanence
As established by the next result, a necessary condition for strong persistence is that the system have some interior rest
point, i.e. a stationary state where all pure strategies are played with positive frequency.
Theorem 6 (Hutson and Moran (1982))If an RD is strongly persistent, it has some rest point ν ∈ int(Δm−1).
Proof. By the additive invariance of the RD (see Subsection 3.2.3 above), the dynamics is unaffected if, instead of the
original pay-off matrix A, an alternative matrix A′ is considered which is derived from the former by adding a certain
constant to each column. In this fashion, a matrix A′ may be constructed so that one of its rows, say the last one, has
all its entries equal to zero.
In view of the previous considerations, assume, without loss of generality, that the pay-off matrix A has all of its entries
in the mth row equal to zero. Then, if ν(t) ∈ int(Δm−1), the quotient RD discussed in Subsection 3.2.3 yields the following
law of motion:
                                             3.7 Permanence and Survival                                                63


Denoting               we may rewrite the former expression as follows:




                                                                                                                    (3.19)
where, for formal simplicity in what follows, we include the mth trivial component for which ξm (·) ≡ 1 and              .
Obviously, there is a one-to-one correspondence between the interior limit points of the RD (as well as, a fortiori, its
interior rest points) and those of (3.19). Moreover, since all equations in (3.19) are multiplied by a common factor νm (t)
≥ η > 0 (by strong persistence), the same applies when, instead of (3.19), we consider the following dynamical system:




                                                                                                                     (3.20)
Thus, assume, for the sake of contradiction, that (3.20) has no interior rest points. Then, denoting by        the interior
of the positive orthant of ℜm−1 and                        , the set



does not include the origin 0 ∈ ℜm. Since W is obviously convex, the well-known Separation Theorem of Convex
Analysis implies that there exists some vector μ ∈ ℜm, μ ≠ 0, which separates W from 0, i.e.



                                                                                                                    (3.21)
Consider now the function ϕ : X → ℜ given by                          . The time derivative of ϕ (·) along any path of the
system in the interior of X is given by:



                                                                                                                    (3.22)
which is strictly positive, by (3.21). This, as we shall now argue, implies that no limit point of the dynamics (3.20) can
lie in       . By previous considerations, the same happens with the limit points of (3.19). But then, because of the
correspondence between the interior limit points of (3.19) and the RD, it follows that no limit point of the RD can lie
in int(Δm−1), contradicting the assumed strong persistence of the system.
Thus, to complete the proof of the theorem, it needs to be shown that there cannot exist some         which is a limit
point of (3.20). Suppose otherwise. Then, for any such ξ0, there must be a sequence of “times” (tk)k=1,2. . ., such that:


                                                                                                                    (3.23)
By the continuity of both ϕ (·) and       , (3.23) implies that, given any ɛ1 > 0, ɛ2 > 0, there is some      such that, if
k0 ≥ K,
64                                             Chapter 3. Basic Dynamic Analysis


which, in view of (3.21) and (3.22), implies that, for some                          . Since            for all t, this
contradicts the fact that ξ is a limit point of the dynamics, thus completing the proof of the theorem. ▪
                           0



Since strong persistence is a concept weaker than permanence, the following Corollary follows:
Corollary 1If an RD is permanent, it has some rest point ν ∈ int (Δm−1).


3.7.3 Sufcient Conditions for Permanence
In order to establish the desired sufﬁcient conditions, the following auxiliary result is needed.
Theorem 7 (Hofbauer and Sigmund (1987))Consider some given RD and let ϕ : Δm−1 → ℜ be a differentiable function which
vanishes in bd(Δm−1) and is strictly positive elsewhere. If there is a continuous function φ : Δm−1 → ℜ which satisﬁes the following two
conditions:




                                                                                                                                 (3.24)




                                                                                                                                 (3.25)
then the dynamical system is permanent.
The former result is an intuitive generalization of the so-called Second Liapunov Theorem, applied to the RD. Instead
of using Liapunov functions in the usual sense (functions whose time-derivatives are of deﬁnite sign along any
trajectory), it relies on “average Liapunov functions”, i.e. Liapunov functions whose time-integrals over ﬁnite horizons
have the required deﬁnite sign.
Because of its merely instrumental role here, the proof of Theorem 7 is not included. The interested reader is referred
to Hofbauer and Sigmund (1988, Theorem 1, p. 98) for a detailed proof of this result. Relying on it, the following
Theorem is now established.
Theorem 8 (Hofbauer and Sigmund (1987))Assume that there exists some η ∈ int(Δm−1) such that


                                                                                                                                 (3.26)
for all rest points ζ in bd(Δm−1). Then the RD is permanent.
                                               3.7 Permanence and Survival                                                 65


Proof. With the aim of applying Theorem 7, deﬁne ϕ : (Δm−1) → ℜ as follows:




The function ϕ(·) obviously satisﬁes the requirements contemplated by Theorem 7. Consider now the function φ :
(Δm−1) → ℜ deﬁned by:



which clearly fulﬁls (3.24). Thus, the desired conclusion only requires the veriﬁcation of (3.25).
Given any t and the corresponding ν (t), the argument proceeds inductively on the number of components
r = 1, 2, . . . , m, of ν (t) which are positive. Initially, let r = 1. Then, ν (t) is a vertex of the simplex Δm−1 and (3.25)
immediately follows from (3.26) and the fact that every simplex vertex is stationary (cf. Proposition 6). Assume now
that (3.25) holds for all r = 1, 2, . . . , s, with s ≤ m − 2. We need to show that it also holds for r = s + 1.
Let ν (t) have all but s + 1 of its components vanish. Then the (s + 1)- dimensional vector formed by the positive
components of ν (t) belongs to the simplex Δs. Two possibilities arise:
  (i) ν (τ) converges to bd (Δs) as τ → ∞;
  (ii) ν (τ) does not converge to bd (Δs) as τ → ∞.
If (i) applies, the fulﬁlment of (3.25) for r = s is easily seen to imply that it must also hold for such a trajectory. (Here,
the main point to observe is that, if ν (τ) remains in some sufﬁciently small neighbourhood bd (Δs) after some time τ0,
the subsequent repeated application of (3.25) will offset any prior negative value for the average Liapunov function.)
If (ii) applies, one may choose some ɛ > 0 and a sequence {tk} of times, tk ≥ t, tk → ∞, such that νi(tk) ≥ ɛ
for i = 1, 2, . . . , s + 1 (for simplicity, it is assumed that the non-vanishing components of ν (·) correspond to those
with the ﬁrst s + 1 indices). Consider the associated sequences {˜ν(tk)}k=1,2,. . ., {ρ(tk)}k=1,2,. . ., deﬁned as follows:




                                                                                                                       (3.27)




                                                                                                                       (3.28)
Since both sequences are bounded, there is a (common) subsequence {t̂ k} ⊆ {tk} such that the corresponding
subsequences {˜ν(t̂k)}k=1,2,. . ., {ρ(t̂k)}k=1,2,. . . are convergent. Let ˜ν* and ρ* denote their respective limits.
66                                          Chapter 3. Basic Dynamic Analysis


Consider now the sequences {ϕi(t̂k)}k=1,2,. . ., i = 1, 2, . . . , s + 1, deﬁned as follows:




                                                                                                                        (3.29)
Since




is bounded by the assumption that νi (tk) ≥ ε for all tk, it follows that ϕi (t̂k) → 0 as tk → ∞. Therefore,




which implies that ˜ν* is a rest point of the RD. From these considerations, it follows that the sequence {ζ (t̂k)} deﬁned by:




converges to η · Ai˜ν* − ρ*, which is positive by (3.26). This conﬁrms (3.25) for case (ii) and the proof is complete. ▪


3.7.4 Average Behaviour in Permanent Systems
The previous subsections have determined necessary and sufﬁcient conditions for an RD to display permanence. As
presently shown, the notion of permanence has, beyond its inherent interest, useful long-run implications. In
particular, it ensures that the system will exhibit a well-deﬁned and unique average behaviour in the long run.
As established by Theorem 9 below, the long-run frequencies of a permanent system are directly associated with the
corresponding frequencies of some interior equilibrium, the existence of which was shown in Theorem 6 to be a
necessary condition for permanence. Thus, in order to ensure that long-run behaviour is uniquely deﬁned, the
existence of a unique interior equilibrium must ﬁrst be established. This is done by the next result, an immediate
strengthening of Theorem 6:
Proposition 8If an RD is permanent, it has a unique rest point ν ∈ int (Δm−1).
Proof. By Theorem 6 and its Corollary, every permanent system has some interior rest point. To prove that any such
rest point must be unique, suppose a given permanent RD had two of them, ν1 and ν2, ν1 ≠ ν2.
                                                3.7 Permanence and Survival                                                   67


Since both ν1 and ν2 are interior rest points of the RD they must satisfy:



Therefore, it is clear that every population state in the set



must also be an equilibrium of the RD. This set deﬁnes a line in Δm−1 which obviously intersects bd (Δm−1) at some . For
this state,      for some i′ = 1, 2, . . . , m.
Consider now any δ > 0, as contemplated in Deﬁnition 9. Clearly, there is an element ˜ν in the set E, sufﬁciently close
to , such that ˜ν ∈ int (Δm−1) and ˜νi′ < δ. Since the point ˜ν is a rest point of the RD, the system cannot be permanent.
This contradiction completes the proof of the Theorem. ▪
On the basis of the preceding result, the main conclusion of this subsection can now be established: the long-run
behaviour of a permanent RD is uniquely deﬁned.
Theorem 9 (Hofbauer and Sigmund (1987))Let ν(·) ⊂ int (Δm−1) be any path of a permanent RD. It satisﬁes:




where ν*is the unique interior equilibrium.
Proof. For ν(t) ∈ int(Δm−1), write the RD as follows:



                                                                                                                          (3.30)
Given any t > 0, integrate (3.30) over the time-interval [0, t] and divide by its length to obtain, for each i = 1, 2, . . . , m,




                                                                                                                          (3.31)
where, by analogy with (3.27) and (3.28) above,            and        are deﬁned as follows:
68                                         Chapter 3. Basic Dynamic Analysis




The remainder of the argument is essentially parallel to that of the proof of Theorem 8. Consider a sequence {tk} of
times, tk → ∞, and their corresponding sequences                                     . The sequences                are
obviously bounded above. Moreover, since the RD is assumed permanent, they are also bounded below by some δ >
0. Thus, there must exist some subsequence {t̂k}k=1,. . . such that each of the subsequences                         is
convergent to some corresponding                                     and          with    for each i = 1, 2, . . . , m.
Since the LHS of (3.31) converges to zero as t → ∞, it follows that:




Therefore, the average frequencies,                deﬁne an interior equilibrium. By Proposition 8, such equilibrium
and, therefore, the average frequencies are unique. This completes the proof of the Theorem. ▪


3.8 Population Genetics
As emphasized in Subsection 2.1.1, the stylized model of phenotypical evolution given by the RD abstracts from
genetic considerations. Phenotypes themselves are taken to be the object of inheritance, a process modelled in a fully
asexual manner. Of course, this is not a faithful description of what happens in the biological world, where
reproduction is both genetic (i.e. not “phenotypic”) and often sexual.
In contrast, population genetics concerns itself with the genetic evolution of sexual populations, its traditional focus
being on models where individual pay-offs are assumed independent of population frequencies (i.e. exclusively linked to
the genetic make-up of each individual). The underlying emphasis and motivation of classical population genetics is,
therefore, polar to that exhibited by the RD. However, as explained below, both contexts exhibit close formal
parallelisms. In both of them, the dynamics of relative growth is modelled though replicator equations, only their
respective interpretations being, of course, substantially different. A comparison of both approaches (their similar
features, but also their qualitatively different conclusions) will shed new light on our previous analysis of the RD.
Consider the simplest case of some interest in population genetics: a one-locus diploid genetic system. In this context, the
ﬁtness of any given individual depends on just one single locus, two alleles occupying it to determine the
                                                                     3.8 Population Genetics                                    69


individual's phenotypical (and, therefore, pay-off-relevant) characteristics.33
Let                              be the set of alleles (the “genetic pool”) which is a priori available to the population. Since
the genetic system is assumed diploid, there are m2 possible genotypes, corresponding to each of the possible pairs
(combinations) of alleles (ai, aj), i, j = 1, 2, . . . , m, which an individual may have. The ﬁtness of each genotype (ai, aj) is
captured by the so-called ﬁtness matrix W ≡ (wij)i,i=1,2,. . . ,m. A typical entry of it, wij, indicates the pay-off obtained by an
individual whose genotype is (ai, aj). Since genotype (ai, aj) is identical to (aj, ai), the matrix W must be symmetric, i.e. wij =
wji, ∀ i, j = 1, 2, . . . , m. Symmetry of the ﬁtness matrix W is one of the key features of the present context. The other
one, as explained, is the assumption that individuals' pay-offs are exclusively linked to their genotype (i.e. they are
frequency independent).
Suppose that reproduction is sexual and mating is random, with each of the parents of the couple transmitting one of its
alleles to their offspring with equal probability. For simplicity, assume that every couple produces the same number of
offspring, irrespective of their genetic make-up. Not every new offspring, however, has the same chance of becoming a
viable adult and thus capable of further reproduction. This depends on its ﬁtness (as given by the matrix W), which
may be interpreted as (proportional to) its probability of reaching sexual maturity.
More precisely, let ξ(t) ≡ (ξ1(t), ξ2(t), . . . , ξm(t)) ∈ Δm−1 denote the population frequencies prevailing at t for each of the m
alleles. From our assumption of random sexual mating, the frequency of (not yet necessarily viable) offspring with
heterozygotic genotype (ai, aj) in the new generation must be 2ξi ξj if i ≠ j. (Notice that, since genotypes (ai, aj) or (aj, ai)
are equivalent, the same genotype results if the “ﬁrst” individual contributes allele ai and the “second” aj, or vice versa.)
On the other hand, the frequency of the homozygotic offspring (ai, ai) will simply be .
As explained, not all these offspring reach maturity with the same probability. To obtain the genotype frequencies
resulting at maturity, we must weigh the above computed frequencies by their respective ﬁtness. Thus, the frequency of
new mature individuals with genotype (ai, aj) in the next generation is proportional to 2wij ξi ξj. For those individuals
whose genotype is (ai, aj), it will be proportional to   .
From these ﬁtness-weighted frequencies over genotypes in the next generation, we can obtain the new vector of allele
frequencies ready for fresh combination and reproduction. Adding up across all possible genotypes, we conclude that
the frequency of each allele ai in the next generation involves the following two terms. First, one “copy” of ai exists in
all heterozygotic individuals with genotypes (ai, aj) − or (aj, ai) − with i ≠ j. As explained above, the aggregate frequency
for these individuals is proportional to ∑j≠ i 2wij ξi ξj. On




33
     An allele is each of the independent pieces (or “bits”) of genetic information speciﬁed in every genetic locus.
70                                          Chapter 3. Basic Dynamic Analysis


the other hand, there are two copies of allele ai in every homozygotic individual with genotype (ai, ai). The allele
frequency in this latter case is therefore proportional to   .
Denote by ξ′i the frequency of allele ai in the next generation. From the previous considerations, we conclude that




for some common α > 0. Thus, ξ′i is proportional to ξi (the preceding frequency) and the average pay-off
associated with allele ai in the preceding generation, as measured by the average ﬁtness of the individuals which hold it.
Formally, therefore, the dynamics induced are exactly as for the RD. If time is modelled continuously (possibly relying
on considerations analogous to those explained in Subsection 3.2.2 for the RD), the law of motion for ξ(t) = (ξ1(t), ξ2
(t), . . . , ξm(t)) is of the following form:




                                                                                                                    (3.32)
which is the same as (3.4), with the obvious notational adjustments.
As explained, there is a crucial difference between the RD and the model of genetic dynamics outlined here: in the
present context, the pay-off (ﬁtness) matrix W has to be symmetric, since allele permutation yields a fully equivalent
genotype. Due to this symmetry, the dynamics of population genetics leads to sharp and strong conclusions which are
generally out of reach in the RD context. A classical result of this type, often labelled Fisher's Fundamental Theorem of
Natural Selection, reads as follows.
Theorem 10The average ﬁtness ξ(t) · W ξ(t) increases monotonically along any trajectory of (3.32).
Proof. It is enough to show that the time-derivative of the function φ(t) ≡ ξ(t) · W ξ(t) is positive along any trajectory
ξ(·) of the dynamical system. We compute:




Since W is symmetric,




and therefore:
                                                         3.8 Population Genetics                                                              71


which, applying (3.32), becomes:




                                                                                                                                          (3.33)
where the last term is simply twice the ﬁtness variance at t, obviously positive unless



for all i = 1, 2, . . . , m such that ξi(t) ≠ 0, that is, unless the system is at a stationary point. ▪
The previous result underscores the important point that, if one abstracts from the “complexities” of frequency-
dependent selection (precisely what is at the heart of the RD) natural selection operating on the genetic base of the
population always has the unambiguous effect of increasing its average ﬁtness. In a sense, we can view this elegant
result as the paradigm of what natural selection could achieve if (of course, a major “if ”) it were to function without the
interference on pay-offs induced by intraspeciﬁc interaction. Reciprocally, it highlights the important role of frequency-
dependent considerations in understanding realistic evolutionary dynamics.
To close this section, we point to two very interesting implications of Theorem 10.
Remark 3Expression (3.33) indicates that the rate of change of (3.32), as measured by the rate at which average ﬁtness changes along
any given trajectory, is proportional to the current ﬁtness variance. This reﬂects the intuitive idea that natural selection thrives on
heterogeneity, if not of genes per se at least of pay-offs.
Remark 4Generically, the stationary points induced by a certain ﬁtness matrix W must be isolated. In combination with Theorem 10,
this implies that, generically, all trajectories of the system (3.32) will converge to a limit point (not necessarily the same one for all initial
conditions). In fact, this conclusion on long-run convergence may be shown to be true (see, for example, Losert and Akin (1983))even
without the genericity proviso. This, of course, contrasts sharply with the behaviour of the RD, as discussed for example in Section3.7.
72                                                         Chapter 3. Basic Dynamic Analysis


3.9 The Prisoner's Dilemma
The prisoner's dilemma has become a paradigmatic benchmark for the analysis of many interesting game-theoretic
issues: bounded rationality, repeated interaction, incomplete information, etc. It should be useful, therefore, to turn
towards this traditional context for an illustration of our evolutionary models.
Consider, for concreteness, a prisoner's dilemma (PD) with the following pay-off matrix:
Table 7
                                                           C                                                      D
     C                                                     3, 3                                                   0, 4
     D                                                     4, 0                                                   1, 1

As is well known, each player has an unambiguous dominant strategy in a PD (D above, standing for “defection”)
which leads to an inefﬁcient outcome. In particular, if both players were to choose strategy C (“co-operation”), both
would be better off than by jointly playing their dominant strategy D.
In the face of this state of affairs (sometimes labelled the “prisoner's dilemma paradox”), the received game-theoretic
literature has proposed quite a number of different approaches. A key one has been to postulate that players are
involved in repeated interaction, an identical PD being played over time between the same two players. As it turns out,
the possibilities open to the players in this repeated context (at least within the classical strategic framework) crucially
depend on the duration of the relationship. If ﬁnite, simple backwards induction (from the last time at which the game
is played to any former period) forces the agents to the same “rational” outcome as before: joint defection throughout.
However, if the situation can be appropriately modelled as one with an inﬁnite horizon, a wide range of new
possibilities arises. To be sure, one of them still is joint indeﬁnite defection. But, in addition, if players do not discount
future pay-offs too much, indeﬁnite co-operation is another possibility. It is built upon the threat that if any player ever
deviates, the opponent will “punish” him with defection thereafter. In fact, the so-called folk theorems have established
the following general result: If players are sufﬁciently patient, any outcome that yields at least the maximin pay-off to
each of them (in our case, a pay-off of 3, which both may guarantee for themselves by playing D) can be supported as
a Nash equilibrium of the inﬁnitely repeated game.
We shall not elaborate upon this well-known literature since it is only of tangential relevance to our present concerns.34
Partly in response to it, there




34
     The interested reader may refer to the classical book by Friedman (1977) for an exhaustive treatment of this subject.
                                                                    3.9 The Prisoner's Dilemma                          73


was a lively resurgence of interest in the repeated prisoner's dilemma (RPD) during the 1980s, whose focus was much
more evolutionary than strategic. It started with the pioneering work of Axelrod and Hamilton (1981) – see also
Axelrod (1984). His concern was not so much to evaluate the “rationality” of any given strategy per se, but rather to
understand its potential for long-run survival in competition with other alternative strategies.
Axelrod's ﬁrst exploration of these issues sprang from a series of experiments of “natural selection” conducted on a
collection of strategies for the RPD submitted by a number of different game theorists. To the initial surprise of many,
the strategy which fared relatively better in the long run was the natural (and simple) one suggested by Anatol
Rapoport: tit-for-tat. Since then, a number of different lines of research have underscored the central role played by
simple and reactive strategies in the long-run evolution of co-operation.35
This fast-growing literature is already too vast and rich to make a short summary possible.36 Instead, we shall focus on
a simpliﬁed version of the RPD that illustrates the operation of evolutionary forces (in particular, the Replicator
Dynamics) in the rise of co-operative behaviour. As an interesting by-product, we shall be exposed for the ﬁrst time in
this book to an idea which will play a much more central role in future analysis. Very succinctly, it points to the drastic
qualitative effects which the introduction of small amounts of noise (due, for example, to mutation) may have on the
long-run performance of the evolutionary process.


3.9.1 Basic (Unperturbed) Model
Consider the following theoretical, very stylized, context. Individuals of a large population (with the cardinality of the
continuum) are randomly matched every period to play an RPD with an inﬁnite horizon. They adopt one of the
following three (repeated-game) strategies:
     •       Strategy C*, which chooses the action C throughout, irrespective of past history.
     •       Strategy D*, which chooses the action D throughout, again irrespective of past history.
     •       Strategy T (tit-for-tat), which starts by co-operating and, subsequently, responds by matching the opponent's
             action in the preceding stage.
Assume that players' intertemporal pay-off in each matching round equals the discounted sum of their corresponding
stream of pay-offs. Suppose, for




35
         See e.g. the recent paper by Nowak and Sigmund (1992).
36
         The interested reader may refer to the recent monographic issue of BioSystems on this topic, Fogel (1996).
74                                         Chapter 3. Basic Dynamic Analysis


concreteness, that both of them have a common discount rate δ = 2/3. Then, we can set up the following nine-entry
table, which summarizes the pay-offs resulting from every possible matching in the RPD under consideration. (As
customary, discounted pay-offs are multiplied by the factor (1 − δ), in order to have them remain within the convex
hull of stage pay-offs.)
Table 8
                                 C*                             D*                            T
     C*
                                 3, 3                           0, 4                          3, 3
     D*                          4, 0                           1, 1                          2, 2/3
     T                           3, 3                           2/3, 2                        3, 3

Consider now the Replicator Dynamics applied to this context on the basis of the expected (or average) pay-offs
earned by each strategy. Denote by x(t) the frequency of D*-strategists at time t, and let y(t) represent the frequency of
T-strategists. Obviously, the vector (x(t), y(t)) is a sufﬁcient description of the state of the system. Given any such state,
it is straightforward to compute the expected pay-offs obtained by each of the three strategies. Relying on obvious
notation, they may be written as follows:




Correspondingly, the mean expected pay-off across all three strategies is given by:




This leads to the following Replicator Dynamics:




The stationary points of this dynamics are as follows. On the one hand, we know that the homogeneous proﬁles: (1, 0),
(0, 1), and (0, 0), are always stationary in the Replicator Dynamics. In addition, all points in the set H ≡ {(0, y) : 1 > y >
0} are also stationary, i.e. the set of proﬁles where all players either play C* or T in any arbitrary (positive) proportion.
Finally, there is also an isolated stationary point (x̃, 1 − x̃) where x̃ is the unique point which satisﬁes:



In our example, x̃ = 3/4.
                                               3.9 The Prisoner's Dilemma                                                   75


Let us turn now to the stability of these stationary points. Since the analysis is straightforward, it is only sketched. First,
it is clear that (1, 0) is asymptotically stable (recall Deﬁnition 6). Speciﬁcally, consider the neighbourhood of this point
given by                               . If x(0) ∈ U, we have that, for all                  and (if y(t) > 0)        , which
implies both Liapunov stability and convergence towards (1, 0).
On the other hand, the set H ∪ {(0, 0), (0, 1)} can be partitioned into two subsets, H1 and H2, separated by the point
(0, ŷ) that satisﬁes:



                                                                                                                        (3.34)
i.e. where strategies C* and T obtain identical pay-offs. In our example, we have    . The points in the set H1 ≡ {(0, y)
: 1 ≥ y ≥ ŷ} all satisfy Liapunov stability but fail nevertheless to satisfy the second convergence requirement of
asymptotic stability. To see this, consider any (0, y′) ∈ H1 (and some given neighbourhood V of it). If (x(0), y(0)) ∈ V
and x(0) > 0, y(0) ≥ y′, then the ensuing trajectory satisﬁes:




Thus, convergence to (0, y′) does not follow, no matter how small the neighbourhood V is. However, if this
neighbourhood is chosen small enough, it can be ensured that |y* − y′| is arbitrarily small, i.e. it belongs to any pre-
speciﬁed neighbourhood of (0, y′). The reason for this is quite clear. The limit frequency of T-strategists will increase
over its initial value as a continuous function on the frequency of D*-strategists in the initial state. It is precisely this
(small) frequency of D*-strategists which induces the (progressively smaller) pay-off wedge between the pay-offs of T-
and C-strategists along the trajectory. By a similarly straightforward argument, it may be concluded that neither the
point (x̃, 1 − x̃) nor those in the set                                  are asymptotically stable. Indeed, they are not
even Liapunov stable.
One may go beyond the purely local analysis summarized so far to ﬁnd (via simulations) that the typical global dynamics
of the Replicator Dynamics is as illustrated in Figure 2.
Thus, except for a one-dimensional manifold along which the system converges to the point (x̃, 1 − x̃), any other point
in the interior of the state space belongs to the basin of convergence of either the point (1, 0) or the set H1. In fact,
such a manifold separates those two basins of attraction. These stark dynamics illustrate in a simple fashion the crucial
role played by the strategy tit-for-tat in the consolidation of co-operative behaviour (recall our former discussion). In
particular, it indicates that only if the eventual proportion of individuals playing strategy T is large enough (in
particular, above ŷ) may a co-operative conﬁguration prevail in the long run. This reﬂects the simple (but important)
fact that, if co-operation is to survive in the long run, enough “reactive” individuals must persist in the population in
order to protect otherwise exploitable “ﬂat” co-operators.
76                                                          Chapter 3. Basic Dynamic Analysis


Figure 2: Repeated Prisoner's Dilemma, Unperturbed Dynamics




3.9.2 Noisy Dynamics
The fact that the “co-operation component” H1 merely speciﬁes a lower bound on y (thus allowing for a continuous
range of different proportions between C* and T-strategists) implies that, close to this set, selection forces
discriminating between strategies C* and T must be very weak. In these circumstances, one should expect that, in the
vicinity of the set H1, small perturbations (or noise) may have a signiﬁcant effect on the evolutionary dynamics.37
Noise may be introduced into the evolutionary dynamics in at least two different ways. One possibility is to
contemplate aggregate-based noise that affects all individuals in the population in some correlated fashion. This would
lead to the study of a genuinely stochastic dynamical system, as formulated in Section 5.5. Here, the alternative option
is considered where noise is conceived as an individual-based phenomenon of “mutation”. Assuming that it is
statistically independent across individuals and time, we invoke the Law of Large Numbers to formulate a deterministic
perturbation of the original Replicator Dynamics.
Speciﬁcally, we focus on a perturbation of the original system where, in




37
     Much of this subsection is heavily inspired by the work of Gale et al. (1995), applied to the so-called Ultimatum Game. Their approach is summarized in Section 4.8. The
     work by Hirshleifer and Martinez Coll (1992) for the repeated prisoner's dilemma also bears some relationship to the present discussion. Relying on numerical simulations,
     they reach similar conclusions.
                                              3.9 The Prisoner's Dilemma                                                77


a small but steady frequency, each one of the three strategies of the game is assumed to be introduced in the population
irrespective of any pay-off (or selection) considerations. If θ > 0 stands for the mutation rate, this amounts to
transforming the original Replicator Dynamics as follows:




                                                                                                                    (3.35)


                                                                                                                    (3.36)
The above expressions may be provided with the following interpretation. At every t ≥ 0, each individual is subject to
the same independent probability (1 − θ) of “staying alive” and producing offspring in proportion to its respective pay-
offs (i.e. in accordance with the Replicator Dynamics). With the complementary probability θ, an individual dies
(migrates or mutates), after which the individual that replaces it (perhaps itself, if it has only mutated) adopts some new
strategy afresh, all three strategies selected with the same a priori probability of .
As advanced, the introduction of such perturbation into the model has signiﬁcant qualitative effects on its long-run
performance. And this, it must be emphasized, occurs even if θ is chosen arbitrarily small. The most interesting effect
takes place in a neighbourhood of the set H1. Speciﬁcally, it will be shown below that, if θ is small, the analogue of this
set now shrinks to just two points. Only one of them is locally stable, and converges to a point in H1 as θ → 0. Thus,
by introducing such mutational noise into the system, a clear-cut selection criterion is obtained which singles out a
unique co-operative conﬁguration in H1.
To show this, ﬁrst compute the stationary points of the perturbed Replicator Dynamics close to the set H as follows.
Make                 in (3.35)–(3.36) and rewrite the resulting equations as follows:



                                                                                                                    (3.37)



                                                                                                                    (3.38)
Dividing (3.37) by (3.38), and realizing that the value of x that solves the above system of equations must be positive
(since θ > 0), we obtain the following equation:



If θ is small (or, more formally, if we make θ → 0), the value of x which solves the previous equation must converge to
zero. Thus, making x = 0 in the above expression and rearranging terms, we have:



                                                                                                                    (3.39)
Hence we can solve for the limit stationary values of y, close to H, which arise when θ becomes arbitrarily small. From
(3.39), they can be seen to be the roots
78                                                          Chapter 3. Basic Dynamic Analysis


of the polynomial                          . That is:




Notice that y1 > ŷ > y2, where recall that ŷ (= 1/2) was deﬁned by (3.34) as the minimum T-frequency in the set H1.
Thus, y1 ∈ H1 and y2 ∈ H2.
We ﬁnally argue that the stationary point (x1, y1) is locally stable, whereas (x2, y2) is not. Let G : [0, 1]2 → ℜ2 be the
vector ﬁeld which deﬁnes the perturbed dynamical system (3.35)–(3.36) and denote by Ji ≡ DG(xi, yi) its Jacobian
matrices evaluated at each of the two former stationary points (xi, yi), i = 1, 2. We have:




Since, for small θ and xi, 1 − 2yi dominates all other terms in the trace of each Ji (i = 1, 2), it follows immediately that
the trace of J1 is negative whereas that of J2 is positive. This already discards (x2, y2) as a potential asymptotically stable
equilibrium of (3.35)–(3.36).38 To conﬁrm that (x1, y1) is indeed asymptotically stable, it still needs to be checked that
|J1| > 0. By relying on the equilibrium conditions (3.37) and (3.38), it is easy to conﬁrm that, for small θ (which allows
us to ignore terms which are of second order in θ and/or x1), the product of the main-diagonal elements of J1 is
positive, whereas that of its other two entries is negative.
This provides us with a clear picture of the local dynamics of the perturbed model close to the set H. The global picture
elsewhere is not much affected (in comparison with that discussed in Subsection 3.9.1) by the introduction of small
noise into the system. Figure 3 illustrates such global behaviour.
To summarize, we have shown that if the original Replicator Dynamics is perturbed by small mutational noise as
described, only an exact frequency close to           of T-strategists will support a stable (in fact, an asymptotically
stable) co-operative outcome. This contrasts with the wider range of less solid (i.e. only Liapunov stable) predictions
arising from the unperturbed Replicator Dynamics. In a sense, what mutation does is to impose a test of robustness on
these Liapunov stable equilibria which is able to select uniquely among them.
Nothing perhaps very new or surprising is added by this analysis to the insights already derived from the original
model (especially, on the role played by T-strategists in the consolidation of co-operation). However, as mentioned, it
illustrates the following important point, which will be repeatedly encountered in much of what follows (especially in
Chapters 5 and 6): the (natural) introduction of noise into an evolutionary model often brings “order rather than
chaos” into the model's behaviour.




38
     A two-dimensional square matrix A has eigenvalues with negative real part if, and only if, its trace is negative and its determinant positive.
                                                      3.10 Pollination and Reward: An Example                           79


Figure 3: Repeated Prisoner's Dilemma, Noisy Dynamics




3.10 Pollination and Reward: An Example
3.10.1 Preliminaries
As explained in Section 3.2, the basic interpretation of the Replicator Dynamics is of a biological nature, i.e. as a
formalization of a Darwinian process of natural selection which reﬂects ﬁtness — or reproductive — differentials.39
Thus, before we turn to the study of social evolutionary systems in the ensuing chapters, it will be instructive to close
this chapter with an application whose concern is strictly biological. Speciﬁcally, we shall focus on the study of
pollination, which is a biological phenomenon which displays a strong “strategic ﬂavour.”
Pollination, as everyone knows, involves a balanced quid pro quo between plants and animals. Plants provide some
substance which the animals value (say, nectar), thus inducing the latter to visit the former. This, in turn, allows plants
to cross-fertilize each other by having the pollen attached to their visitors land in other members of their same species.
This is a rich phenomenon which can be, and has been, analysed from a wide variety of perspectives.40 Here, we shall
focus on the plants' perspective,




39
     See, however, Subsection 4.3.3 for a social interpretation (based on learning) of the Replicator Dynamics.
40
     See e.g. Selten and Shmida (1991) or Peleg and Shmida (1992).
80                                          Chapter 3. Basic Dyamic Analysis


taking the pollinators' behaviour as given. The question we shall ask is a simple one, phrased in a way that economists
will ﬁnd very familiar: How is it that offering reward, certainly a very costly activity, can persist in the presence of the
acute free-rider problem it induces? If non-rewarding plants cannot be externally distinguished from rewarding ones, it
seems that any given plant would have strong incentive to “cheat” the pollinator and free-ride on the other (say, the
majority of) rewarding individuals of the same species.
The following two alternative arguments might be offered to tackle the previous question:
     (a) If the plant species under consideration were not rewarding, it could not reproduce itself (abstracting from the
         possibility of self-fertilization) and would become extinct. This is why we observe that plants are typically
         rewarding, unless they can mimic other species that reward pollinators (or are otherwise able to deceive them).
     (b) If (as in fact happens) pollinators learn to avoid a species that does not reward them, any individual plant which
         wants to have its pollen fertilize some other individual of the same species (i.e. enjoy what is labelled “male
         ﬁtness”) had better reward it. In a nutshell, plant male ﬁtness is the incentive for reward.
The ﬁrst tentative answer is, of course, utterly fallacious if interpreted to mean that what is “good for the species” must
eventually evolve. It is precisely the desire to escape such teleological considerations which, to a great extent, has
promoted the widespread use of Evolutionary Game Theory in modern biological analysis.
There is, however, an alternative interpretation for (a) which is based upon a hierarchical (or multi-level) view of the
evolutionary process. That is, the view that evolution proceeding within each species at the “lower level” should be
viewed as complemented by selection taking place across different species at some upper level. In the present case,
however, this approach is highly problematic. It implicitly builds upon the untenable assumption that selection at the
upper (interspecies) level is sufﬁciently fast to be relevant for the developments unfolding at the lower (intraspecies)
level. As illustrated below (see Section 4.9), a hierarchic approach to evolution is much more natural in those contexts
(mostly social or economic) where selection at the higher level operates on relatively small groups (e.g. ﬁrms), whose
rate of selection (e.g. turnover) may be appropriately conceived as being relatively fast.
Let us now turn to (b) above. It focuses on what must surely be one important aspect of the phenomenon at hand, i.e.
the incentives enjoyed by pollen-providing plants (in their male roles), aiming to have their pollen fertilize other ﬂowers
(in their female roles). The emphasis suggested by (b) is certainly important: pollinators must be provided with the
right inducements to keep visiting plants of the same species. However, there is another dimension of the problem
                                                        3.10 Pollination and Reward: An Example                                                                                81


which (b) ignores that may be summarized as follows. For a rewarding plant, it is crucial to “assess” the likelihood that
a rightly induced pollinator subsequently ﬁnds some other plant (i.e. ﬂower) of the species which has not yet been
fertilized. Of course, this likelihood must depend on how frequently plants are visited, and how often ﬂowers are
renewed during the season. In fact, one would expect that any analysis of the phenomenon (either theoretical or
empirical) should display a positive relationship between ﬂower turnover and the extent of rewarding behaviour. (See
Primack (1985), for empirical evidence conﬁrming this relationship.) A simple model with these characteristics
(essentially taken from Vega-Redondo (1996b)) is subsequently proposed.


3.10.2 The Model
Consider some given plant and pollinator species coexisting throughout every pollination season. These seasons are
segmented into T discrete periods, indexed by t = 1, 2, . . . T. Every pollinator lives one whole season, its behaviour
throughout it modelled exogenously according to the following simple behavioural rule:
         At any t = 1, 2, . . . T − 1, if the visited plant has offered no reward, avoid the species during the following
         period. Otherwise, visit the species (once) again at t + 1.41
Plants (or ﬂowers), on the other hand, may have a life-span m (1 ≤ m ≤ T) shorter than the duration of the
season. Speciﬁcally, we postulate an overlapping-generation structure of the following type. At the beginning of each
t = 1, 2, . . . , T − m + 1, there are ξ ﬂowers newly blooming which live for m full periods. Thus, throughout the season,
there is a total of ξ(T − m + 1) ﬂowers, their numbers at any given period ranging from a minimum of ξ at the
beginning and end of the season, to a maximum of ξ m ﬂowers at intermediate periods.
Plants can be of two types: rewarding (the α-type) or non-rewarding (the β-type). Their respective frequencies will be
denoted by να and νβ, respectively (να + νβ = 1). The following three key assumptions will be made.
The ﬁrst assumption speciﬁes that reward is costly. That is, an α-plant incurs a cost by rewarding that is reﬂected by a
lower number of seeds produced when fertilized by incoming pollen (i.e. in its female role). Naturally, this cost is
assumed to increase monotonically with the ﬂower life-span. Formally,




41
     Implicit in this formulation is the idea that several plant species coexist throughout the season, any pollinator which is avoiding any given one of them visiting instead the
     other species. It is also convenient to make the assumption that the period length is so short that no pollinator can make more than one visit in each period.
82                                                          Chapter 3. Basic Dyamic Analysis


Assumption 1: When fertilized, the β-plants produce k times more seeds than the α-plants, with k = 1 + ψ(m), where ψ(·)
is positive and non-decreasing.
The second assumption implicitly captures, in a very schematic fashion, what could be described as a pollinator-
abundant scenario.42 The underlying idea is that, when there are many pollinators relative to the number of plants,
essentially all blooming ﬂowers must be fertilized as long as some pollinators are being rewarded (and thus subsequently
revisit the species). That is:
Assumption 2: If να > 0, all ﬂowers newly bloomed at t = 2, 3, . . . , T − m + 1 are fertilized (i.e. produce seeds).
Finally, the third assumption concerns the “durability” of pollen.
Assumption 3: The pollen gathered at any t = 1, 2, . . . , T − 1 is only suitable for fertilization at t + 1.
The previous assumption may be interpreted as reﬂecting, for example, a situation where the pollen is very weakly
attached to the pollinator's body. In our analysis, it is connected to the assumed forgetfulness of at least one period by
any “frustrated” pollinator. If pollinators were assumed to remember avoiding a non-rewarding species for more than
one period, Assumption 3 could be relaxed accordingly.
We shall be concerned with the dynamics across seasons induced by the different rates of seed production enjoyed by
each type of plant. Let seasons be indexed by s = 1, 2, . . . , and denote by ν(s) ≡ (να(s), νβ(s)) the proﬁle of rewarding and
non-rewarding plants prevailing in any given season. From Assumptions 1–3, the amounts of seeds produced of each
type, α and β, must be proportional to the following respective magnitudes




                                                                                                                                                         (3.40)




                                                                                                                                                         (3.41)
where the above expressions implicitly assume that every α-pollen fertilizing a β-plant produces equal numbers of α-
and β-seeds. (Note that, given our assumption on pollinator behaviour, only α-pollen will be available for fertilization.)
Further suppose that the numbers of viable seeds produced at the end of the season (i.e. those seeds which give rise to
an “adult” plant at s + 1) are proportional to nα(s) and nβ(s).43 Then, the average pay-off (or ﬁtness) earned by each
strategy may be written as follows:




42
     The symmetric pollinator-scarce context is analysed as well in Vega-Redondo (1996b), the main considerations involved shown to be very different.
43
     Thus, both α- and β-seeds are affected by the same exogenous forces determining the probability that any given seed successfully germinates.
                                                         3.10 Pollination and Reward: An Example                                                                                83


for some given κ > 0. Hence, the discrete-time Replicator Dynamics (across seasons) induced by the model (cf. (3.3))
becomes:




for each h = α, β.
For the sake of simplicity, it will be assumed that the above system may be appropriately analysed (or approximated) by
its continuous-time version:44




for all s ≥ 0.                                                                                                                                                             (3.42)
The analysis will focus on issues of global stability. Speciﬁcally, a proﬁle              will be said to be globally evolutionarily
stable (GES) if for all interior initial conditions (να(0), νβ(0)) ∈ (0, 1) , any trajectory of the system (να(·), νβ(·)) satisﬁes
                                                                           2


                           . As shown below, our previous assumptions guarantee that the model always has a (unique)
GES.
Let        denote the ﬂower turnover rate (i.e. the fraction of ﬂowers being renewed in every “central” period t with T
− m + 1 ≥ t ≥ m + 1). The main objective is to establish a clear-cut relationship between this turnover rate ρ and the
extent of rewarding behaviour (i.e. the frequency ) prevailing at the GES state of the system. Such a relationship is
contained in the following result.
Theorem 11 (Vega-Redondo (1996b))Consider Assumptions 1–3, and let ψ(1) ≤ 1 < ψ(T). There exists some                                                                         such
that:
     (a) if        , the (unique) GES state is (1, 0);
     (b) if        , the (unique) GES state         satisﬁes                                     .
Proof. Deﬁne:




which, from (3.40) and (3.41), can be rewritten as




44
      As explained in Subsection 3.2.2, we may assume that the base ﬁtness of both types is very high, implying that their relative ﬁtness differentials within each season are very
      low.
84                                          Chapter 3. Basic Dyamic Analysis


Consider ﬁrst the case where ρ = m = 1. Then, since ψ(1) ≤ 1, we must have φ(να) > 0 for all να < 1. Since, from (3.42),




 it follows that [1, 0] is the unique GES state for this case. Clearly, the same applies for all ρ such that         . Choose
    as the smallest ρ for which the previous inequality applies. Since ψ(T) > 1, such         exists, and the proof of part (a)
is complete.
Consider now the case where         . Then, φ(1) < 0, which implies that [1, 0] is not a GES state. On the other hand, we
have          and, therefore, all interior stationary points of the dynamics must have a frequency of α-plants larger
than . In fact, since φ(·) is a monotonic function in να there is a unique                   such that            . Since,
moreover, φ(·) is strictly decreasing (cf. Figure 4), we conclude that                is a GES state. This completes the
proof. ▪
Figure 4: Differential-Fitness Function φ




The previous result makes transparent the necessary balance between the two dimensions of plant ﬁtness (male- and
female-based) which must underlie any evolutionarily stable state in a pollination environment. It also clariﬁes the fact
that, in a pollinator-abundant context, this balance has to depend crucially on the rate of ﬂower turnover prevailing
throughout the pollination season.
                   4 Evolution in Social Environments

4.1 Introduction
The previous chapter has focused on the Replicator Dynamics (RD), a dynamic evolutionary system whose
interpretation is of a strict biological nature. As explained in Section 3.2, it represents a direct formalization of a
Darwinian process of selection, i.e. a process by which those strategies that prevail in the long run are merely those that
reproduce faster.
Subsection 4.3.3 below illustrates that one may also attribute to the RD a certain “social interpretation” as the outcome
of very speciﬁc processes of imitation or other particular forms of bounded-rationality decision making. In general,
however, the RD formalization is too rigid to encompass the wealth of social evolutionary processes that will interest
us. In most social and economic contexts, the underlying evolutionary process can only be determined at a broad
qualitative level. That is, it is only possible to specify certain general features of the process, without being able to
pinpoint any precise formulation for it. For example, we may be able to assert that actions which enjoy a relatively
higher pay-off tend to spread, without being in a position to formulate any precise or cardinal measure of the extent to
which this happens. In a natural sense, processes which display such qualitative behaviour should still be labelled
evolutionary. However, a rigorous analysis of them requires the formulation of a theoretical framework which admits a
much larger ﬂexibility than that studied in the previous chapter.
This will be one of the concerns and motivations for the present chapter. A second one derives from our desire to
tackle contexts where, unlike what was postulated in the previous chapter, individuals cannot be suitably viewed as
members of a single population. In many interesting situations, some members of the population (say, buyers) will not
interact among themselves but rather do it with some other different set of individuals (i.e. sellers). In order to study
these
86                                   Chapter 4. Evolution in Social Environments


contexts, we need to consider a richer theoretical framework that potentially allows for several distinct populations,
their respective members cross-interacting in some particular way.
The two issues outlined require a substantial generalization of the evolutionary approach studied in the preceding two
chapters. The pay-off will also be substantial. We shall enlarge the range of application of the theory to many social and
economic environments for which a generalized evolutionary approach will provide new and important insights.


4.2 Theoretical Framework
For simplicity, we shall just consider two populations, 1 and 2. (Most of the analysis may be extended to any ﬁnite
number of populations, at the cost merely of notational complexity.) Time t is measured continuously, t ∈ [0, ∞). At
each t, every member of each population is randomly matched with individuals from the other population in order to
play a bilateral ﬁnite game with pay-off matrices            . Here,             and               stand for the pay-
offs obtained by a player of type 1 (population 1) and a player of type 2 (population 2), respectively, if the former
adopts strategy       and the latter strategy .
The strategy spaces of each type are denoted by S1 and S2, with respective cardinalities            . Correspondingly,
           and            stand for their respective spaces of mixed strategies, with generic elements σ1 ∈ Σ1 and σ2 ∈
Σ . The pay-off functions π1 and π2 are extended to these latter spaces in the usual fashion.
 2



If individuals are assumed to adopt only pure strategies (which will be assumed for most of this chapter), the spaces
       and         can also be interpreted as the set of possible population states (i.e. population proﬁles specifying the
fraction of individuals playing each of the different pure strategies). Such population states will be generically denoted
by ν1 and ν2, where speciﬁes the fraction of individuals of population k = 1, 2 which adopt strategy               . Under
our assumption of random matching, we shall abuse previous notation and denote by                                     , the
expected pay-off of playing strategy      for an individual of population k when the strategy proﬁle prevailing in the
other population k′ is νk′. Further assuming that the cardinality of each population is the continuum, such expected
values are also identiﬁed with the corresponding average magnitudes.
                                                           4.3. Evolutionary Growth Dynamics                                                                               87


4.3 Evolutionary Growth Dynamics
4.3.1 The Model
For the moment, the analysis will focus on dynamical systems on                                                                of the form:




                                                                                                                                                                        (4.1)
where every            is assumed Lipschitz-continuous.45 To be well deﬁned, any such evolutionary system has to
leave the state space Ω invariant, i.e. every trajectory induced by (4.1) must satisfy:



To guarantee such invariance, it is enough to assume that, for each k = 1, 2,




i.e. all vectors of change induced by (4.1) belong to the tangent space of Ω.
When the frequency of a certain strategy          is positive, the respective               determines its current rate of
change. This focus on rates of change may indeed be a suitable one for many social applications (see Sub-section 4.3.3
for some examples). In other cases, however, it imposes undesirable restrictions. For example, it forces every strategy
which is extinct at the beginning of the process to remain so throughout irrespective of any pay-off considerations.
(Formally, this is a consequence of the fact that, as for the RD, the dynamical system (4.1) renders every face of the two
simplices in Ω invariant.) This issue will be addressed in Section 4.6 by postulating a more general approach which is
not subject to this limitation.


4.3.2 Monotonicity Properties
Naturally, in order to think of any dynamical system as “evolutionary”, it must be required to reﬂect some appropriate
idea of selection. In the literature, this usually goes under the label of “monotonicity”, with different qualiﬁers to this
term indicating alternative variations of the general idea. A quite weak monotonicity concept (see Nachbar (1990)) is
provided by the following deﬁnition.




45
     A function f : ℜn → ℜ is said to be Lipschitz-continuous if ∃ k > 0 such that ∀ x, y ∈ ℜn , | f (x ) − f (y )| ≤ k | x − y |, where | · | denotes the Euclidean norm.
     By a standard result in the Theory of Differential Equations, this condition is sufﬁcient to guarantee the existence and uniqueness of a solution to the dynamical system.
88                                                     Chapter 4. Evolution in Social Environments


Deﬁnition 10An evolutionary system (4.1) is said to be growth-monotonic if ∀ k, k′ = 1, 2 (k ≠ k′), ∀ i, j = 1, 2, . . . , mk, ∀ ν =
(ν1, ν2) ∈ Ω,46




Verbally, an evolutionary system is called growth-monotonic if the differential rates of change between any two pairs of
strategies    and    which are played in positive frequency:




is of the same sign as their differential pay-offs                     . This concept captures a very ﬂexible notion of
selection by which any strategy which does relatively better (worse, or equal) than any other within population k
is simply required to have its relative frequency νi/νj grow (respectively, fall or remain equal), unless prevented from
doing so by boundary considerations.
Growth monotonicity focuses on dichotomic comparisons between every pair of strategies. It generalizes the idea
captured by the quotient representation of RD which, as explained in Subsection 3.2.3, is fully equivalent to the original
formulation of the RD.
In the original speciﬁcation of the RD (3.4), the rate at which the share of each strategy grows is linked to the
difference between its current pay-off and the average pay-off. The next deﬁnition presents an alternative
monotonicity concept proposed by Ritzberger and Weibull (1995) which generalizes this alternative formulation of the
RD.
Deﬁnition 11An evolutionary system (4.1) is said to be sign-preserving if ∀ k, k′ = 1, 2 (k ≠ k′), ∀ i = 1, 2, . . . , mk, ∀ ν = (ν1, ν2)
∈ Ω,




Thus, an evolutionary system is sign-preserving if for any given pure strategy to increase its frequency it is both necessary
and sufﬁcient that its pay-off be above the average one for the respective population.47 Clearly, there is no




 46
      Here, we abuse slightly previous notation since, when writing                   , the ﬁrst argument always corresponds to population k (even if k = 2).
 47
      Note that the statement of equivalence included in Deﬁnition 11 can be reformulated in terms of the reverse strict inequalities. In fact, the same applies to the equivalence
      included in Deﬁnition 10). In this latter case, however, one need not reverse the strict inequalities due to to the symmetry of the expression across different pairs of indices.
                                           4.3. Evolutionary Growth Dynamics                                                 89


relationship of logical inclusion between the monotonicity conditions of Deﬁnitions 10 and 11. Both of them, of
course, are satisﬁed by the “benchmark model” provided by the two-population RD:




                                                                                                                           (4.2)
for each i = 1, 2, . . . , mk where k, k′ = 1, 2 (k ≠ k′).


4.3.3 Some Examples
We now discuss two alternative classes of examples which respond to very different underlying motivations. Within
both of them, however, a particular (quite special) subclass induces a Replicator Dynamics which has a social-based
(rather than biological) underpinning.


4.3.3.1 Imitation Dynamics
Consider two given populations with a continuum of individuals, matched every period to play some bimatrix game as
described above. Suppose that, at every t ≥ 0, an “inﬁnitesimal” fraction of individuals in each population have the
option of revising their strategy. In doing so, they adopt the following two-step procedure.
First, each one of them meets at random somebody else of their own population and observes both the latter's action,
say s′, and associated pay-off, say π′. Second, each one compares his own action and pay-off, s and π, with the realized
observation. If it happens that s′ ≠ s and π′ > π, the individual in question is assumed to shift from s to s′ with some
probability p (s, s′, π′, π) > 0 which, in general, is some function of the strategies and pay-offs involved. Otherwise (i.e. if
s = s′ or π′ ≤ π), he is assumed to continue playing the original strategy s. Here, strategies could be identiﬁed with
technologies, degrees of altruism, or languages, all of them adopted to some extent by imitation in social environments.
Assume, for simplicity, that the number of random matchings per period is large so that each individual's average pay-
off may be well approximated by the corresponding expected magnitude. Then, if p(·) is symmetric across strategies
and non-decreasing in payoff gaps, the resulting adjustment process yields a growth-monotonic evolutionary system
when formulated in continuous time. For, in this case, strategies which yield a higher average pay-off are freshly
adopted by more individuals (and abandoned by fewer) than those with lower average pay-off.
The following interesting interpretation for the revision probability p(·) has been suggested by Nachbar (1990).
Assume that individuals evaluate their
90                                                Chapter 4. Evolution in Social Environments


strategies solely in terms of short-run pay-offs. Then, as long as π′ > π (with the above interpretation), it will pay for an
individual to shift to strategy s′ with probability one if there are no adjustment costs and the population adjustment is very
gradual (thus, current pay-offs are good predictors of those following next). Suppose, however, that individuals are
subject to a switching cost c, which has to be instantaneously paid if an individual changes his strategy. Furthermore,
suppose that this switching cost is not ﬁxed and deterministically given but, rather, is independently determined across
individuals and time according to some common probability measure on ℜ+. Let D(·) be its cumulative distribution
function. Then, any individual whose observation of a strategy s′ (≠ s) is associated with a higher pay-off π′ will adopt s′
only if c ≤ π′ − π. This will occur with a probability:




Interestingly enough, if the framework described is now specialized even further by assuming that the probability
distribution over switching costs is uniform with support on a sufﬁciently large interval [0, M], the resulting
evolutionary system coincides with the Replicator Dynamics. Speciﬁcally, it is enough that M ≥ 2 max{| aij|, | bij| : i =
1, 2, . . . , m1, j = 1, 2, . . . , m2}. In this case, D (π − π′) = (π − π′)/M and the contemplated formulation induces the
following population dynamics:




                                                                                                                         (4.3)
where [x]+ ≡ max {x, 0}. The ﬁrst term in (4.3) represents the rate at which -adopters, on average, quit using this
strategy. On the other hand, its second term reﬂects the average rate at which the individuals of population k switch to
(or remain with) strategy . Immediate algebraic manipulation of (4.3) yields:




for each i = 1, 2, . . . , mk, k, k′ = 1, 2 (k ≠ k′). Modulo some “scale factor” 1/ M (which, being common to both
populations, does not affect the qualitative behaviour of the system),48 it coincides with the two-population RD (4.2).




48
     Recall our discussion in Subsection 3.2.2.
                                          4.3. Evolutionary Growth Dynamics                                             91


4.3.3.2 Satiscing Dynamics
Consider now a different approach which is a slight variation of a formulation proposed by Cabrales (1992), itself
inspired in a model of Smallwood and Conlisk (1979). In contrast with the preceding context, individuals are assumed
to learn nothing at all about the pay-offs obtained by others. They only observe the average pay-off π which they earn
from their current strategy s, and compare it to some target level of satisfaction μ. If π ≥ μ, they stay with strategy s.
Otherwise, they choose some new strategy, the probability with which any given si is then selected being equal to the
frequency of individuals νi who adopt it within the corresponding population.
In the context just outlined, the probability that a certain strategy is selected afresh only depends on the relative
frequencies with which it is currently adopted in the corresponding population, not on its average pay-off. Pay-offs, in
this case, are only relevant in triggering the decision of changing strategies when the target level of satisfaction is not
met.
To complete the model, we need to specify how individuals determine their satisfaction target level. Let us assume that
it is determined stochastically according to some common probability measure on ℜ, independent across individuals
and time, and with cumulative distribution function Y (·). One possible interpretation here is that the “mood” of an
individual (e.g. whether he feels ambitious or not) is determined stochastically, depending on a set of variable
idiosyncratic conditions. In any case, it should be clear that, under gradual adjustment, i.e. when only a “very small”
(inﬁnitesimal) fraction of individuals may revise their strategy at each point in (continuous) time, the postulated
framework yields a growth-monotonic evolutionary system.
As before, let us now assume that Y (·) deﬁnes a uniform probability measure on a sufﬁciently large interval [α, β] ⊂
ℜ. Speciﬁcally, suppose that




Given any prevailing state ν, consider an individual of population k = 1, 2 who is in a position to revise his current
strategy        and whose current payoff is π. With probability        this individual is dissatisﬁed with his strategy and
will therefore revise it. In this case, the probability of choosing any particular          coincides with , the current
frequency of -adopters in population k. Averaging over the individuals of population k who are currently adopting
strategy    and have the option of revising their strategy, the following law of motion results:




                                                                                                                      (4.4)
92                                                  Chapter 4. Evolution in Social Environments


where, as before, the ﬁrst term of (4.4) represents the rate at which -adopters choose a new strategy, whereas its
second term captures those who adopt        when revising their prior strategy. Straightforward manipulation of (4.4)
yields:




for each i = 1, 2, . . . , mk, k, k′ = 1, 2 (k ≠ k′), again a mere scaling of the two-population RD.


4.4 Dynamics of Monotonic Evolutionary Systems
4.4.1 Dynamic Stability and Nash Equilibrium
The stability analysis of growth-monotonic (GM) or sign-preserving (SP) evolutionary systems with several
populations displays some parallels, but also some essential differences from that conducted in Chapter 3 for a single
population.
On the one hand, as before (cf. Proposition 7), asymptotic stability is a sufﬁcient condition for Nash equilibrium, as
stated by the following result.49
Proposition 9 (Nachbar (1990)) Let          be an asymptotically stable point of a GM evolutionary dynamics (4.1). Then, as an
element of        is a Nash equilibrium of the bimatrix game (A, B).
Proof. The proof is completely analogous to that of Proposition 7. Consequently, it is left to the reader. ▪
Remark 5It should be apparent that the same conclusion of Proposition 9 applies to any asymptotically stable point of an SP evolutionary
system.
A more interesting question is polar to that addressed above, i.e. under what conditions is a Nash equilibrium
asymptotically stable? In general, as we shall show below, only the very restrictive class of strict Nash equilibria may be
asymptotically stable. To establish this negative claim, it is enough to show that it applies to some interesting set of
cases. For the sake of concreteness, we shall focus on the most paradigmatic representative of the class of monotonic
evolutionary systems: the Replicator Dynamics, as given by (4.2).
First, it is shown that only pure-strategy Nash equilibria can be asymptotically stable.




 49
      In analogy with Proposition 6, it is clear that the set of Nash equilibria induces a subset (in general a proper one) of the set of rest points of a growth-monotonic
      evolutionary system.
                                 4.4. Dynamics of Monotonic Evolutionary Systems                                             93


Theorem 12 (Eshel and Akin (1983)) Let                        be an asymptotically stable equilibrium of the RD. Then, each νk*,
k = 1, 2, is a vertex of its respective .
Proof. Let                                        , and conceive the RD as a (m1 + m2 − 2)-dimensional vector ﬁeld on
B,



                                                                                                                          (4.5)
Assume, for the sake of contradiction, that there is an interior equilibrium which is asymptotically stable and let A be
an open neighbourhood of it. Based on H (·), deﬁne the instrumental vector ﬁeld                              as follows:



where:




Obviously, Q (·) and H (·) have the same qualitative dynamic behaviour (in particular, the same stable equilibria).
Now, we apply Liouville's Theorem (see the Appendix) on the vector ﬁeld Q (·) to assert that the volume V (t) of the
set                         satisﬁes:




                                                                                                                          (4.6)
where:




                                                                                                                          (4.7)
is the divergence of the vector ﬁeld Q at ν. We compute:




Therefore,
94                                   Chapter 4. Evolution in Social Environments


Since, for each k = 1, 2, i = 1, 2, . . . , mk − 1,




and, for each k = 1, 2,




we have




On the other hand, it is easy to calculate that:




Thus, we conclude that div Q(ν) = 0 and, from (4.6) and (4.7), V (t) = V (0) > 0. This is obviously incompatible with
asymptotic stability of the contemplated equilibrium. It follows, therefore, that no equilibrium interior to Ω (or B) can
be asymptotically stable. But clearly, the same argument can be applied to any product of faces in the product simplex
                   . Thus, any asymptotically stable equilibrium of H (·) must be a vertex of Ω, i.e. must involve only
pure strategies. ▪
From the previous result, the conclusion that every asymptotically stable state corresponds to a strict Nash equilibrium
(cf. van Damme (1987)) follows as an easy corollary.
                                   4.4. Dynamics of Monotonic Evolutionary Systems                                            95


Corollary 2 (Ritzberger and Vogelsberg (1990)) Let                             be an asymptotically stable equilibrium of the RD.
Then, as an element of Σ = Σ × Σ , ν is a strict Nash equilibrium of the bimatrix game (A, B).
                            1   2   *



Proof. Let        correspond to an asymptotically stable pair of vertices and assume it does not deﬁne a strict Nash
equilibrium. That is, there is for one of the populations, say population 1, another pure strategy       , such that
                   . Deﬁne      to be the vector in      whose hth component equals one. Then, the following set of
states



are all rest points of H (·), as introduced in (4.5). This obviously contradicts the fact that                is asymptotically
stable, which completes the proof of the corollary. ▪
In contrast with the analysis undertaken in Chapter 3 (recall, for example, Theorem 3) the preceding results underscore
the point that asymptotic stability is too restrictive a requirement in a context with several populations. In most
interesting contexts, equilibria will typically involve some degree of polymorphism and, therefore, cannot be associated
with a strict Nash equilibrium of the underlying game. In these circumstances, dynamic analysis cannot rely on the
study of stable conﬁgurations. Instead, it may undertake two different (but complementary) approaches. On the one
hand, it may extend the stability analysis to subsets of the state space rather than single points. As a second alternative,
the analysis can aim at identifying certain long-run regularities displayed by dynamic trajectories, even if these are not
convergent. Both approaches are illustrated in turn by the following two subsections.


4.4.2 Set Stability
By suitably adapting Deﬁnition 6, the notion of asymptotic stability can be extended to any closed subset of the state
space (not just points) in the obvious fashion. Relying on such a set-stability concept and focusing on sign-preserving
evolutionary systems (SPES), Ritzberger and Weibull (1995) pose the following general question: Can sets which are
asymptotically stable be usefully characterized, even if the particular evolutionary system in operation (only guaranteed
to be an SPES) is not known?
To tackle this issue, they restrict their attention to those sets which are Cartesian products of (whole) simplex faces. Let
Xk ⊂ Sk stand for some given subset of pure strategies for population k and make
96                                                   Chapter 4. Evolution in Social Environments


Further denote X ≡ X1 × X2 and Δ(X) ≡ Δ(X1) × Δ(X2). An easy adaptation of the proof of Theorem 12 leads to the
conclusion that, for the RD, every asymptotically stable set must be of the form Δ(X). Since the RD represents a
special benchmark in evolutionary analysis (which is obviously sign-preserving – recall Subsection 4.3.2), restricting to
sets of this form is a natural course to take in shedding some light on the previous question.
A key role in the present analysis is played by the so-called better-reply correspondence γ = (γk)k=1,2 : Ω → → S1 × S2, deﬁned
as follows:



In contrast with the standard best-response correspondence, γ(·) reﬂects the relative (rather than absolute) pay-off
considerations which must underlie evolutionary analysis. In the spirit of the SPES concept, it relies on average pay-
offs as the benchmark of comparison.
Heuristically, it seems clear that a necessary condition for any product simplex Δ(X) to be asymptotically stable with
respect to a SPES must be that γ(Δ(X)) ⊆ X, i.e. for any (ν1, ν2) ∈ Δ(X), γ(ν1, ν2) ⊆ X. Otherwise, some trajectories which
start close to Δ(X) would evolve in the direction of pure strategies which do not belong to X, i.e. away from Δ(X).
When such inclusion applies, the set X is said to be closed under γ. In fact, the next result establishes that such γ-
closedness is not only necessary, but also a sufﬁcient condition, for asymptotic stability.
Theorem 13 (Ritzberger and Weibull (1995)) Consider an arbitrary SPES and any X ⊆ S1 × S2. The set Δ(X) is
asymptotically stable if, and only if, X is closed under γ.
Proof. To show sufﬁciency ﬁrst, assume X is closed under γ. Since γ is an upper hemi-continuous correspondence
(i.e. has a closed graph), there must exist some ε > 0 and some associated open neighbourhood of Δ(X)



such that               . Otherwise, one could construct a convergent sequence                           such that
                         , for all r = 1, 2, . . . , with εr → 0 and νr → ν* ∈ Δ(X), yr → y*. Since the set S\ X is
closed,50 we should have y* ¬∈ X, which contradicts the upper hemi-continuity of γ.
Having established the existence of some such neighbourhood         , suppose that                          at some given t.
Since the evolutionary system is assumed sign-preserving, it must be that      for all              and each k = 1, 2. Thus,
the ensuing trajectory never leaves     , eventually converging to Δ(X).




50
     As is customary, the notation \ represents set substraction, i.e.                     .
                                  4.4. Dynamics of Monotonic Evolutionary Systems                                       97


For the necessity part of the theorem, suppose that X is not closed under γ. That is, there is some
                           , such that



Since πk(νk, νk′) is just a convex combination of pay-offs       for pure strategies           and          , the previous
inequality implies that there must exist some such pure strategies for which



                                                                                                                      (4.8)
where, recall,        . Consider now initial conditions (ν1(0), ν2(0)) such that                       , and            for
any arbitrary η > 0. By (4.8), since the evolutionary system is sign-preserving and no extinct strategies ever arise along
the process, it follows that           and, therefore,          for all t, showing the asymptotic instability of Δ(X). This
completes the proof of the theorem. ▪
To illustrate the potential usefulness of the characterization provided by the former result, consider a simple two-stage
game proposed by van Damme (1989) to motivate issues of forward induction. (This game is also considered by
Ritzberger and Weibull (1995).) Individuals of two populations meet at random to play a co-ordination game with the
following pay-off table:
Table 9
                                          A                                       B
   A                                      3, 1                                    0, 0
   B                                      0, 0                                    1, 3

However, before entering this (simultaneous) game, the player of population 1 has the option of choosing an outside
option R which guarantees him a pay-off of 2, providing the player of population 2 with a pay-off of 5. If we now
consider the full two-stage game, its reduced normal form is given by the following pay-off matrix:
Table 10
    2
   1                                       A                                      B
    R                                      2, 5                                   2, 5
    A                                      3, 1                                   0, 0
    B                                      0, 0                                   1, 3
98                                                   Chapter 4. Evolution in Social Environments


The normal-form game described by the previous pay-off table has two Nash equilibria, both of them subgame-
perfect in the underlying extensive form. One of them, (R, B), has player 1 choosing the outside option, under the
“threat” that player 2 will aim for the worst equilibrium for player 1 if the co-ordination subgame were played. This
equilibrium is subgame-perfect but fails to satisfy a criterion of forward induction. This would require that player 2
interprets a move by player 1 into the co-ordination sub-game as a signal that he intends to play the only ensuing
equilibrium strategy which is not dominated by his outside option, i.e. strategy A. Consequently, the best response by
player 2 to this “signal” should be to play A himself, which only reinforces the reason for player 1 to move into the co-
ordination subgame and play A. Thus, (A, A) is the only equilibrium (also subgame-perfect) which doesn't violate
forward-induction rationality.
These considerations are by now very familiar to game theorists. For our purposes, the interesting point arising in this
respect is that an identical outcome is obtained if the quite involved chain of signalling outlined above is replaced by
mere evolutionary arguments. This idea will be explored in more detail in Subsection 6.5.2 within a stochastic
evolutionary scenario. Here, as subsequently explained, it may be derived from the simple requirement of evolutionary
stability in the context of any SPES.
By Theorem 13, the asymptotically stable sets induced by any SPES can be associated with the product sets of
strategies which are closed under the better-response correspondence. It is easy to see that only two such sets exist in
the present example. One of them is the (uninteresting) set consisting of all the strategies available to each population,
i.e. X̂ = {R, A, B} × {A, B}. In general, of course, the interesting sets are those which are minimal with respect to the
contemplated closedness requirement. This is indeed the case for the second set which satisﬁes it, X̃ = {A} × {A}. As
advanced, this singleton coincides with the outcome derived from the usual forward-induction arguments.


4.4.3 Long-Run Regularities
Even if the evolutionary process is not convergent, it may still display signiﬁcant long-run regularities, e.g. the
constancy of some appropriate magnitude over time. As suggested by the proof of Theorem 12, “volume”, for an
appropriate transformation of the RD, is always one of them. This, however, is not very informative per se about any
interesting feature of the process. Much more useful would be to establish the constancy of some real function
(preferably smooth) of the state space along any dynamic path. Such a function, usually called a constant of motion,
guarantees that every trajectory of the system remains within some given submanifold of Ω,51 thus providing some
extent of




51
     Heuristically, a submanifold of Ω is just a lower-dimensional surface included in it.
                                  4.4. Dynamics of Monotonic Evolutionary Systems                                        99


“order” for its long-run behaviour.
But even this, in general, will not be easy to obtain. However, if the system is especially simple, i.e. bidimensional (with
two strategies per population), a general and clear-cut result can be obtained for the RD if the underlying game has an
interior Nash equilibrium. This conclusion is established by the following result, Section 4.7 providing some illustrative
examples.
Theorem 14 (Hofbauer and Sigmund (1988)) Let A, B ∈ ℜ2 × 2and assume the corresponding bimatrix game has an interior
Nash equilibrium ∈ Σ. (That is,      .) Then, generically, there is some c ∈ ℜ such that                        is a
constant of motion for the RD.
Proof. The ﬁrst point to note is that, with only two strategies for each population, it is generically possible to ﬁnd real
values α1, α2, β1, β2, and c such that




                                                                                                                       (4.9)
where                   . (Here, the only point to check is that the corresponding linear system of equations has a
solution unless the original pay-off matrices exhibit some precise “ties” among their entries.)
Given the function ζ (·) deﬁned in the statement of the Theorem, it follows that:




                                                                                                                     (4.10)
where one relies on the additive invariance of the RD (cf. Subsection 3.2.3). From the fact that, at an interior Nash
equilibrium, all pure strategies must earn the same pay-off, it follows that:




which allows (4.10) to be rewritten as follows:




which, by virtue of (4.9), is identically equal to zero. This completes the proof of the Theorem. ▪
100                                   Chapter 4. Evolution in Social Environments


4.5 Evolution and Rationality
Even if, in general, one may not rely on the stability of equilibria in order to obtain some clear-cut dynamic prediction
from an evolutionary model, some basic questions about its long-run implications may still be asked. For example,
there is the important issue of whether evolution will be able to narrow down the span of admissible strategies in the
long run, discarding all suboptimal behaviour. In fact, it has been precisely a positive, but merely heuristic, answer to
this question which has underlain much of the “as-if ” motivations of (unbounded) rationality often found in traditional
economic theory.
To approach this issue in a rigorous fashion, the ﬁrst question to settle is what criterion for suboptimal (or “irrational”)
behaviour one should consider. In this respect, the elimination of dominated strategies seems to represent a minimal
demand of rationality. However, as readers familiar with Game Theory will be well aware, such domination can be
formulated in a variety of different ways:
  1. Strict domination in terms of pure strategies alone,
  2. Strict domination in terms of arbitrary, possibly mixed, strategies,
  3. Weak domination, again in pure or mixed strategies.
As we shall see, our conclusions will signiﬁcantly differ depending on the particular concept under consideration.
Once this issue is settled, a natural second step to take involves exploring whether evolutionary dynamics might be
responsive to a repeated application of any of the above domination criteria. This, for our two-population scenario and
criterion 2 above, leads to the familiar notion of rationalizability (Bernhein (1984) and Pearce (1984)). This concept, it is
often argued, embodies the essential idea of rationality that (minimally or maximally, depending on one's particular
emphasis) game-theoretic analysis should insist upon.


4.5.1 Evolution and Pay-Off Dominance
First, the three different criteria of domination to be considered here are formally deﬁned.
Deﬁnition 12For each population k = 1, 2, strategy        is said to be dominated in pure strategies if       such that:




Deﬁnition 13For each population k = 1, 2, strategy        is said to be dominated (in mixed strategies) if ∃ σk ∈ Σksuch that:
                                                                4.5. Evolution and Rationality                                                                           101


Deﬁnition 14For each population k = 1, 2, strategy                                is said to be weakly dominated if ∃ σk ∈ Σksuch that:




Denote by Dk, D̂k, and D̃k the strategies of population k which are dominated in pure strategies, in mixed strategies, and
weakly dominated respectively. Obviously, Dk ⊆ D̂k ⊆ D̃k.
The ﬁrst (and weakest) conclusion concerns the strongest domination criterion, i.e. that involving only pure strategies.
Theorem 15 (Samuelson and Zhang (1992)) Let                                          for some k = 1, 2. Then, every trajectory ν (·) of a GM evolutionary
system with ν (0) ∈ int (Ω) satisﬁes   .
Proof. Let                  for some k = 1, 2, and let ɛ > 0 be chosen such that for some                                              ,52




Such an ɛ always exists due to the continuity of each πk (·) and the compactness of      . Thus, from the assumed
growth-monotonicity (together with continuity) of the evolutionary system, there is some δ > 0 such that:




for all t, which implies that




thus proving the desired conclusion. ▪
Suppose now that, in line with the domination criterion presented in Deﬁnition 13, the issue becomes whether all pure
strategies that are (strictly) dominated by mixed ones are certain to be played in vanishing long-run frequencies. One
may construct examples (see Bjönerstedt et al. (1993)) which indicate that the monotonicity requirements proposed in
Subsection 4.3.2 need to be substantially strengthened. For example, if one is willing to restrict to the Replicator
Dynamics, the next result guarantees the desired conclusion.




52
     Note, of course, that if   dominates        when the opponent plays any given pure strategy (cf. Deﬁnition 12), this also happens when the particular strategy to be faced
     is determined by any given probability vector νk′ .
102                                  Chapter 4. Evolution in Social Environments


Theorem 16 (Samuelson and Zhang (1992)) Let                   for some k = 1, 2. Then, every trajectory ν (·) of the Replicator
Dynamics with ν (0) ∈ int (Ω) satisﬁes   .
Proof. Let          for some k = 1, 2, and let ɛ > 0 be chosen such that, for some σk ∈ Σk, one has:




                                                                                                                      (4.11)
Again, such an ɛ always exists due to the continuity of each π (·) and the compactness of
                                                                 k
                                                                                                        . Deﬁne the function
              as follows:



Along any trajectory of the RD which starts in the interior of Ω, its time derivative may be computed as follows:




which, by (4.11) is bounded below by ɛ. Therefore,




which implies, as desired, that               .▪
There are two signiﬁcant elaborations on the previous result which are worth summarizing.
(i) Samuelson and Zhang (1992) show that, in fact, the conclusion of Theorem 16 follows from a weaker hypothesis on
the evolutionary system. Speciﬁcally, the system simply needs to be aggregate monotonic, as described by the following
deﬁnition.
Deﬁnition 15An evolutionary system (4.1) is said to be aggregate-monotonic if ∀ k = 1, 2, ∀ σk,   k
                                                                                                      ∈ Σk, ∀ ν ∈ Ω,
                                                                4.5. Evolution and Rationality                                                                            103


The concept of aggregate-monotonicity demands for mixed strategies the counterpart of the monotonicity condition
contemplated by Deﬁnition 10 for pure strategies. Obviously, since a pure strategy is just a degenerate mixed strategy,
growth monotonicity is weaker than aggregate monotonicity. Whereas the former allows the frequencies of pure
strategies to change in any arbitrary manner as long as they respect the (ordinal) ranking contemplated by Deﬁnition
10, the latter introduces a cardinal requirement on their respective rates of change. It requires that, even though the
system is deﬁned on pure-strategy frequencies, it should always evolve in the direction of higher-pay-off mixed
strategies.
Samuelson and Zhang (1992, Theorem 3) show that the aggregate-monotonicity condition is closely related to the
Replicator Dynamics. Speciﬁcally, every aggregate monotonic system represents a “variable scaling” of the RD which
may be written as follows:




                                                                                                                                                                       (4.12)
for each i = 1, 2, . . . , mk; k, k′ = 1, 2 (k ≠ k′), where the factor λk(·) > 0 in the above expression only depends on the
population k = 1, 2 under consideration, not on the particular strategy. If λ1(·) ≡ λ2(·) ≡ 1, we obtain the RD (recall
Subsection 4.3.3). Slightly more generally, if λ1(·) ≡ λ2(·), the system is essentially equivalent to the RD since, as
explained above, it only differs from it in that a variable rate of adjustment is allowed.
(ii) Theorem 16 crucially depends on the continuous-time formalization of the RD. Dekel and Scotchmer (1992) have
shown that, in a discrete-time version of the RD, a dominated strategy (in the sense of Deﬁnition 13) may survive in
the long run. However, Cabrales and Sobel (1992) make it clear that this depends on the adjustment framework not
being sufﬁciently gradual. If it is gradual enough, only non-dominated strategies may persist in the long run.
Let us now turn to the third and weakest criterion of domination presented in Deﬁnition 14. It is not difﬁcult to ﬁnd
particular scenarios where evolutionary processes do not weed out weakly dominated strategies for any (interior) initial
conditions. Since this claim is of a negative nature, it becomes stronger the more demanding is the evolutionary system
under consideration. For example, Samuelson and Zhang (1992) consider the Replicator Dynamics53 applied to a
bilateral game with pay-off matrices




53
     In this respect, recall that the RD not only satisﬁes both of the monotonicity criteria proposed in Subsection 4.3.2 but, in view of Theorem 16 and point (i) above, may be
     seen as a strong selection mechanism.
104                                                   Chapter 4. Evolution in Social Environments


If one denotes                          , and                    , the RD applied to the example induces the following system of differential
equations:




                                                                                                                                                                          (4.13)
Assume interior initial conditions x (0), y (0) ∈ (0, 1) and let                                                 . Then,




and, therefore,




Since, from (4.13),




we have



which indicates that the frequency of individuals of population 1 adopting the weakly dominated strategy must remain
positive in the long run for all interior initial conditions.
To summarize what has been presented so far, evolutionary forces have been shown to be responsive to considerations
of (strict) domination. Whereas those based only on pure strategies are reﬂected by any evolutionary system displaying
growth-monotonicity, the weaker notion based on mixed strategies requires an evolutionary system which is a close
“relative” of the RD. With respect to weak (i.e. non-strict) concepts of domination, evolutionary systems, even
demanding ones, fare much worse. In general, not even the RD guarantees that a weakly dominated strategy is not
played in the long run in positive frequency. Thus, in particular, as in the previous example, it may induce a limit state
which corresponds to a Nash equilibrium which is not perfect.54


4.5.2 Evolution, Iterative Dominance, and Rationalizability
As straightforward corollaries of Theorems 15 and 16, it is now veriﬁed that their conclusions apply not just to a
strategy which is dominated when all possible strategies are available, but also to any strategy which becomes
dominated only

54
      Recall that, as explained in the proof of Proposition 2, if an equilibrium is perfect, it cannot involve playing weakly dominated strategies with positive probability.
                                                                   4.5. Evolution and Rationality                                                                                 105


after repeated application of the corresponding dominance criterion. This leads us to two alternative notions of
iterative dominance, which are formalized as follows.
Deﬁnition 16 For each population k = 1, 2, deﬁne iteratively the following sets:



and, for q = 1, 2, . . . ,




The set                        is called the set of strongly55iteratively undominated strategies of population k.
Deﬁnition 17 For each population k = 1, 2, deﬁne iteratively the following sets:




and for q = 1, 2, . . . ,




The set                        is called the set of iteratively undominated (or rationalizable)56strategies of population k.
The following two corollaries of Theorems 15 and 16 formally state the advanced conclusions.
Corollary 3Let                                . Then, every trajectory ν (·) of a GM evolutionary system with ν (0) ∈ int (Ω)
satisﬁes                        .




55
     Here, the term “strongly” refers to the fact that the considered concept of dominance in pure strategies is the strongest one proposed; reciprocally, of course, the
     corresponding concept of undomination is the weakest. Incidentally, note that, by construction, the sets Sk* (as well as the sets Ŝk* in Deﬁnition 17 below) are always non-
     empty.
56
     It is well known that, for bilateral games, the set of iteratively undominated strategies coincides with the set of rationalizable strategies (see Bernheim (1984), Pearce (1984)).
     Being standard, an independent general deﬁnition for this concept is not provided here. As shown by Brandemburger and Dekel (1987), one can associate rationalizability
     with underlying common knowledge of rationality. It is in this sense that, as mentioned, one may informally think of rationalizability as representing the core implication of
     rationality in the analysis of games.
106                                    Chapter 4. Evolution in Social Environments


Corollary 4Let                 . Then, every trajectory ν (·) of the Replicator Dynamics with ν (0) ∈ int (Ω) satisﬁes        .
The proof of the above corollaries is an immediate consequence of the line of argument used to prove the theorems
above. Simply note that any strategies which would become dominated if some other strategies were discarded, will
also appear dominated if these strategies are present in a sufﬁciently small frequency. (Here, of course, one must rely
on the continuity of the pay-off functions.) But then, if these other strategies are dominated in the ﬁrst place, their
frequency will become arbitrarily small once the evolutionary system has proceeded for long enough, by virtue of
Theorems 15 or 16 (whichever applies for the domination criterion in question). The inductive reasoning underlying
the previous corollaries then becomes apparent. Applied to any arbitrary level, it implies that the consequences (as well
as the caveats) which evolution was seen to have on “single-level rationality” (recall the preceding subsection) extend to
the multi-level, hierarchic considerations arising here.


4.6 General Evolutionary Processes
The family of evolutionary processes deﬁned in (4.1) is quite restrictive in a number of respects. For example, every
extinct strategy is forced to remain so forever since growth rates are given by functions          which are assumed
Lipschitz-continuous. A more ﬂexible formulation can bypass this limitation. In general, one may simply postulate an
evolutionary system of the form




                                                                                                                         (4.14)
for some set of functions         . We shall not insist that the functions     be Lipschitz, or even continuous, on the
whole of Ω, now interpreting the dot in (4.14) as right-derivatives when necessary. Of course, it will be assumed that a
unique solution to the dynamical system exists. This requires, in particular, that




                                                                                                                         (4.15)
for each k = 1, 2, i = 1, 2, . . . , mk.
The above general formulation permits the consideration of a wide range of monotonicity concepts, not necessarily
focused on growth rates as in Deﬁnitions 10 and 11. Depending on the particular scenario under consideration (see
some illustrative examples below), these alternative concepts might be better suited to describe the evolutionary forces
at work.
                                                           4.6. General Evolutionary Processes                                                                          107


4.6.1 Gradient Monotonicity
As an interesting variation on the general idea of evolutionary monotonicity, consider the following alternative to
Deﬁnition 10.57
Deﬁnition 18An evolutionary system (4.14) is said to be gradient-monotonic if ∀ k = 1, 2, ∀ ν = (ν1, ν2) ∈ Ω, ∀ i, j = 1, 2, . . . ,
mk,




To understand the previous concept, consider any two strategies and such that the pay-off for the ﬁrst is higher
than for the second. Gradient monotonicity simply requires that the only case in which the (absolute) magnitudes of change
in their respective frequencies may not reﬂect this difference in pay-offs is when            . In these circumstances, one
must have             due to the boundary constraints which ensure that the system is well deﬁned. However, if           ,a
gradient-monotonic evolutionary system would still ﬁnd it admissible that, in this case,                 .


4.6.2 Dynamic Stability and Rationality
In Subsection 4.4.1, it was established that every asymptotically stable state of either a growth-monotonic or a sign-
preserving evolutionary system is associated with a Nash equilibrium of the underlying game. Now, the result is
stronger in that the same conclusion applies to all rest points of the dynamics, be they asymptotically stable or not.
Theorem 17Let               be an equilibrium (or rest point) of a gradient-monotonic evolutionary system (4.14). Then,                                              , as an
element of Σ ≡ Σ1 × Σ2, is a Nash equilibrium of the underlying bimatrix game.
Proof. Every rest point                of the evolutionary system must satisfy:



                                                                                                                                                                     (4.16)
Consider, for each k = 1, 2, any strategy                              such that               . By (4.16) and gradient monotonicity, it follows that:




which proves the desired conclusion. ▪




57
     Although reminiscent of absolute monotonicity in Nachbar (1990), and order compatibility in Friedman (1991), the concept proposed here is quite different. As illustrated
     below, its implications also differ.
108                                      Chapter 4. Evolution in Social Environments


Finally, as a further illustration of the implications of gradient-monotonic systems, we present a counterpart of
Theorem 15 above. It requires two further qualiﬁcations on the evolutionary system which are contained in the
following assumptions:
Assumption PR (Pay-off Responsiveness): There exists some strictly increasing continuous function ϕ : ℜ+ → ℜ+ such
that ∀ k = 1, 2, ∀ ν ∈ Ω, ∀ i, j = 1, 2, . . . , mk,




Assumption SMB (Strong Monotonicity at the Boundary): ∀ k = 1, 2, ∀ ν ∈ Ω, ∀ i = 1, 2, . . . , mk,




Assumption PR requires that the system's sensitivity increases continuously in pay-off differences. It prevents, for
example, the differential rate of change between two strategies becoming arbitrarily small even though their pay-off
difference might remain bounded above zero. Assumption SMB, on the other hand, is a relaxation of the concept of
strong monotonicity contemplated in Samuelson (1988) in that it only applies at points on the boundary of Ω. It
requires that if a previously extinct strategy is to enter the population, it must not be dominated by any other. Or, in
other words, it reﬂects the idea that no “mutation” will be able to gain a signiﬁcant foothold in the population if some
other strategy is faring better.
The following result establishes that gradient-monotonic systems ensure a degree of long-run rationality comparable to
that of GM evolutionary systems:
Theorem 18Let            for some k = 1, 2 (cf. Subsection4.5.1). Then, every trajectory ν(·) of a gradient-monotonic evolutionary system
(4.14) which satisﬁes Assumptions PR and SMB induces                       .
Proof. Let             for some k = 1, 2. Of course, if             , then            for all t ≥ 0 due to Assumption SMB. Thus,
assume             .
The continuity of the pay-off functions and the compactness of Ω imply that                            such that




for some ξ > 0. Therefore, by gradient monotonicity of the evolutionary system and Assumption PR, it follows that,
for any t,
                                                      4.7. Examples                                                    109


Hence, for every τ ≥ 0,




Therefore,




Thus, for some                            . Beyond this point, i.e. for all                , again by Assumption SMB. ▪


4.7 Examples
Two different types of scenarios will be considered here, which are simple illustrations of the general random-matching
framework proposed in Section 4.2. In the ﬁrst of them, interaction between populations exhibits strategic
complementarities. In contrast, the second scenario displays a highly competitive (in fact, zero-sum) strategic
interaction.


4.7.1 Trading Complementarities
Consider the following context, reminiscent of the well-known work of Diamond (1982). There are two islands, 1 and
2. At every point in time t, each agent of island k = 1, 2 is in one of two states: employed or unemployed. In the
former case, he produces y > 0 units of consumption good and incurs a utility cost of c > 0 (c < y); in the latter case, he
simply produces no output and incurs no cost.
Assume that the consumption good produced in one island cannot be proﬁtably consumed by agents of the same
island. In order to derive utility from it, the good needs to be exchanged for that produced in the other island. More
speciﬁcally, suppose that at every t ≥ 0, agents of both islands are randomly matched in pairs. If two employed
individuals meet, they exchange their goods and they both enjoy a utility of y − c. Otherwise, no trade takes place and
the pay-off is zero if the worker is unemployed and −c if he is employed (but cannot exchange his produced good).
110                                 Chapter 4. Evolution in Social Environments


If we identify with being unemployed and with being employed in island k, their corresponding expected pay-offs
for a population state                 are as follows:




Consider now any evolutionary system (either of the form (4.1) or (4.14)) satisfying one of the monotonicity concepts
proposed. It can be seen at once that the population states




where either nobody is employed in the two islands (state ) or everyone is in both of them (state ˜ν) are asymptotically
stable. Moreover, there is a population state ν* deﬁned by:




such that




                                                                                                                  (4.17)




                                                                                                                  (4.18)

All other initial conditions for which neither (4.17) nor (4.18) apply belong to the basin of attraction of one of the
states or ˜ν, except for a one-dimensional manifold (of measure zero) which goes through ν* and separates both of
them, its particular form depending on the details of the evolutionary system considered. Figure 5 illustrates the
situation.


4.7.2 Risky Trading
Consider again a trading context between two populations, 1 and 2, whose members are randomly matched in pairs
(one from each population) every period. All individuals produce two units of a certain population-speciﬁc commodity.
However, to be enjoyed, this commodity has to be consumed together with that produced by the other population.
The two populations are not symmetric. Population 1 is potentially aggressive. A certain fraction     of them, when
matched with an individual of population 2, will attempt to forcefully deprive the latter of his two commodity
                                                    4.7. Examples                                                  111


Figure 5: Trading Complementarities, a Monotonic Evolutionary System




units (strategy ). On the other hand, the complementary fraction             are peaceful individuals (they adopt
strategy ) and exchange one unit of their produced commodity for a corresponding unit of the commodity produced
by the other population.
Faced with this state of affairs, individuals of population 2 can adopt one of two possible strategies. They can either
obtain protection at some cost (strategy ), or instead risk unprotected trading (strategy ). The fractions of the
population which decide on each of these options are denoted by         and , respectively.
Motivated by the previous story, the following pay-off table is postulated:
Table 11
    2
   1
                                         1, 1                                  7, −2
                                         4, 1                                  4, 4
112                                                  Chapter 4. Evolution in Social Environments


Thus, an individual of population 2 can guarantee for himself a pay-off of 1 by choosing to protect himself, whereas an
individual of population 1 can ensure himself a pay-off of 4 if he acts peacefully. On the other hand, if an aggressive
individual of population 1 meets an unprotected one from population 2, the beneﬁts for the former and the losses for
the latter are both substantial.
By way of illustration, two different evolutionary systems are considered. First, we shall consider the two-dimensional
Replicator Dynamics given by:58




(4.19)




                                                                                                                                                                       (4.20)
It will be contrasted with a (gradient-monotonic) evolutionary dynamics which for the interior points of the state space
(i.e. if      and        both belong to the open interval (0, 1)) is deﬁned as follows:




                                                                                                                                                                       (4.21)




                                                                                                                   (4.22)
where α, β > 0 are interpreted as the rate at which population 1 or 2 respectively adjust in a pay-off-monotone
direction. The system is then extended to the boundary of the state space as follows. Let ϕ1 (ν) and ϕ2 (ν) represent the
functions which deﬁne the RHS of expressions (4.21) and (4.22). When the current state is on the boundaries of the
state space, the dynamical system is deﬁned as follows:




                                                                                                                                                                       (4.23)



                                                                                                                                                                       (4.24)
for each k = 1, 2.
One may provide a variety of different interpretations for the dynamics described by (4.21)–(4.24). One possibility is in
terms of a generally conceived process of “migration”. Just to make matters vivid and simple, suppose again that each
of the two populations lives in its corresponding island and, in each of these islands, there are separate geographical
areas where individuals of each type live. When news arrives that the average pay-off in one part of the island

58
      Of course, only the dynamics for one of the components of each population's proﬁle needs to be explicitly speciﬁed (in this case, it is the ﬁrst component for each one of
      them).
                                                      4.7. Examples                                                      113


is higher than in the other, migration from the former to the latter starts to take place. The rates α and β at which this
migration occurs should be related, for example, to the characteristics of the island (orography, size, etc.). In any case,
these rates are postulated to be identical for migration in both directions and independent of the magnitude of the pay-
off gap.
We now turn to the analysis and comparison of the two evolutionary systems proposed. For the RD (4.19)–(4.20), ﬁrst
observe that Table 11 can be transformed into that of a zero-sum game through manipulations which do not affect the
dynamics. For example, take the pay-off matrix of the second population and simply add 2 to its ﬁrst-row pay-offs and
−1 to those in the second row. Analogously, take the pay-off matrix of the ﬁrst population and add −4 to the ﬁrst-
column entries and −7 to those of the second column. After performing these operations, the following pay-off table
results:
Table 12
    2
   1

                                           −3, 3                                   0, 0

                                           0, 0                                     −3, 3


Denote by A and B the resulting pay-off matrices of players 1 and 2. Then, A = −B. Moreover, the game has the
(unique) interior Nash equilibrium            . Thus, along the lines of Theorem 14 it may be asserted that the
function deﬁned by



represents a constant of motion for the evolutionary system. As established by this Theorem (which may readily be
veriﬁed directly),             . This indicates that, as illustrated in Figure 6, the system displays closed counter-
clockwise orbits around the point         in the       -space.
On the other hand, it is easy to see that the orbits of the dynamical system (4.21)–(4.24) are closed, counter-clockwise,
and piece-wise linear around        , with an absolute slope equal to β/α in the interior of the state space. If a trajectory
enters the boundary at some point, it coincides with it up to the point where it can “merge” with a trajectory which is
reﬂected by the boundary and enters the interior of the state space. An illustration is contained in Figure 7.
Thus, qualitatively, the behaviour of the two dynamics considered is quite similar. Essentially, they both yield closed
orbits around their unique (interior) rest point (1/2, 1/2). They only differ in one important point, already discussed in
Section 4.6 when contrasting (4.1) with the more general formulation (4.14).
114                                  Chapter 4. Evolution in Social Environments


Figure 6: Risky Trading, Replicator Dynamics




Whereas the Replicator Dynamics (4.19)–(4.20) never allows an extinct strategy to appear (or, for that matter, a
previously present strategy to go extinct), the gradient-monotonic system (4.21)–(4.24) permits both of these
possibilities.
It seems natural to require that an evolutionary system should display the potential of escaping the boundary of the
state space. Gradient monotonicity provides an interesting possibility in this respect. Another possibility, the explicit
modelling of mutation, will be one of the main themes of the next two chapters. Still a third approach, the perturbation
of the dynamical system so that a permanent ﬂow of individuals adopt (mutate to) every given strategy, has already
been illustrated in Section 3.9. An additional, similar context is presented in the next section, within the framework of a
simple two-population bargaining game.


4.8 A Simplied Ultimatum Game
Consider two populations, 1 and 2, whose members are randomly matched to play an ultimatum game. This game
involves dividing a given total surplus
                                           4.8. A Simpliﬁed Ultimatum Game                                               115


Figure 7: Risky Trading, a Gradient-Monotonic Evolutionary System




between the two players matched, with the player of population 1 (the proposer) making a take-it-or-leave-it offer and
the player of population 2 (the responder) either accepting or rejecting it. If the offer is rejected, the surplus is lost to
both players.
Following Gale et al. (1995), a simpliﬁed and concrete version of this game will be analysed in which the total surplus to
be divided is 4, and the proposer just makes one of two proposals: a high one equal to 2 (strategy ) or a low one
equal to 1 (strategy ). Assuming a responder always accepts a high offer, this game may be summarized by the
following pay-off table (where      stands for “acceptance” and       for “rejection” of a low offer):
Table 13
   2
   1
                                           2, 2                                     2, 2
                                           3, 1                                     0, 0
116                                                    Chapter 4. Evolution in Social Environments


This normal-form game has a unique perfect equilibrium which corresponds to the subgame-perfect equilibrium of
the underlying game in extensive form, i.e.     . In addition, there is a connected component of (non-perfect) Nash
equilibria where responders accept a low offer with a probability no larger than and the proposers submit a high
proposal. Formally, this component is given by




In experimental set-ups (see, for example, Güth et al. (1982)), it has been widely conﬁrmed that subjects involved in an
Ultimatum game tend to deviate quite signiﬁcantly from its subgame-perfect prediction. Usually, modal behaviour
coincides with the equal-split proposal, analogous to the outcome associated with component Γ in the above-described
game. A number of alternative solutions to this “paradox” (i.e. contradiction with “rational” behaviour) have been
proposed. Here, we shall focus on the evolutionary approach proposed by Gale et al. (1985).
Consider the RD operating on a two-population scenario as described above. On the basis of the pay-offs speciﬁed in
Table 13, it may be written as follows:




                                                                                                                                                                              (4.25)




                                                                                                                                                                              (4.26)

The dynamics induced by (4.25)–(4.26) may be seen to display the qualitative features shown in Figure 8. On the one
hand, only the population state ν* = ((0, 1), (1, 0)) qualiﬁes as asymptotically stable, having a neighbourhood around it
where all trajectories converge to this point. On the other hand, all those trajectories which do not fall into the basin of
attraction of ν* must converge to the set Γ.59 In this set, every state is Liapunov-stable (i.e. satisﬁes condition (i) of
Deﬁnition 6 but not its condition (ii)), with the sole exception of its boundary point                  .
The qualitative behaviour just described is quite reminiscent of that described in Section 3.9 for a single-population
context involving the repeated prisoner's dilemma. Thus, in analogy with the approach undertaken there, it is natural to
ask whether a slight perturbation of the dynamics (4.25)–(4.26) may have signiﬁcant qualitative effects on its long-run
behaviour. In particular, the key issue centres on analysing the behaviour of the perturbed system close to the
component Γ, where the rest points of the system could not be structurally stable. (Elsewhere, the introduction of just
small noise cannot have any qualitative effect on the dynamics of the system.)




59
      Of course, this statement only applies to those interior trajectories which do not start at a simplex vertex for both populations. Also note that, for notational simplicity, the
      set of population states and the set of mixed-strategy proﬁles are both denoted by Γ.
                                          4.8. A Simpliﬁed Ultimatum Game                                              117


Figure 8: Simpliﬁed Ultimatum Game, Unperturbed Dynamics




A priori, two alternative types of behaviour might be expected around this component from the introduction of small
“mutational noise” into the system:
  (a) No rest points remain close to Γ, the composition of selection and mutational forces leading every trajectory of
      the system towards state ν*.
  (b) The whole component Γ shrinks to a single point close to it which is asymptotically stable for the perturbed
      dynamics.
Alternative (a) would clearly prevail if mutation were to operate only on proposers. For, in this case, the fact that there
would always be a small (but positive) fraction of proposers adopting strategy implies that the expected pay-off for
   would be higher than for . Consequently, selection forces (the only ones at work on responders in this case) would
induce        , eventually making the system exit any small neighbourhood of Γ, subsequently converging towards ν*.
In contrast, alternative (b) would materialize if mutation were to impinge only on responders. In this case, selection
pressures on the latter operating in a sufﬁciently small neighbourhood of Γ would be so small that mutation would play
the decisive dynamical role. But within Γ, mutation, by itself,
118                                  Chapter 4. Evolution in Social Environments


determines a unique asymptotically stable point (one with equal frequencies for both strategies). Therefore, if a
trajectory approaches Γ in these circumstances, it must also come close to a proﬁle where responders adopt each of
their strategies with equal frequencies.
The previous considerations suggest that the qualitative dynamic behaviour of the perturbed system should hinge on a
delicate balance between the rates of mutation prevailing in each population. As presently shown, this intuition is fully
conﬁrmed by rigorous analysis.
Proceeding along the lines described and motivated in Section 3.9, assume that each population k = 1, 2 is subject to a
speciﬁc mutation rate θk > 0. As before, this rate may be interpreted as a turnover rate which determines the ﬂow of
inexperienced newcomers into population k, each of them adopting each of the two available strategies with equal
probability. This leads to the following transformation of the original RD:




which can be simpliﬁed as follows:




                                                                                                                   (4.27)




                                                                                                                   (4.28)
Our analysis will be concerned with the dynamics induced by (4.27)–(4.28) when the mutation rates are very small.
Formally, this involves studying the behaviour of this dynamical system in the limit, when both θ1 and θ2 converge to
zero. As suggested above, the relative speeds at which these parameters become small should play a crucial role in the
outcome of this limit exercise. As it turns out, if given any φ > 0, we ﬁx




                                                                                                                   (4.29)
as θ1 → 0 and θ2 → 0, two different cases need to be considered.




Cases 1 and 2 deﬁne alternative scenarios where, respectively, the proposer or responder population is subject to a
relatively higher mutation rate. Thus,
                                         4.8. A Simpliﬁed Ultimatum Game                                                         119


whereas Case 1 may be viewed as approaching the extreme context where only proposers are subject to mutation, Case
2 may be seen as an approximation to the extreme polar context where only responders are subject to it. (Recall the
previous discussion concerning (a) and (b) above.) For each of these two cases, the next result establishes limit
behaviours for the system which are qualitatively very different.
Proposition 10 (Galeet al. (1995)) Denote by          the set of asymptotically stable states of the system for mutation (or turnover)
rates (θ1, θ2), and let                    with         for some ﬁxed φ.
  (i) In Case 1,            .
  (ii) In Case 2,               , with   and      .
Proof. First, the stationary points of the system are computed by making                            in (4.28)–(4.29). This yields
the following equations




                                                                                                                               (4.30)



Dividing (4.31) by (4.30), and after some rearrangement, one obtains                                                           (4.31)




                                                                                                             (4.32)
where the term          in the numerator and denominator of the above expression can be cancelled since every rest
point of the system must have     . Looking for solutions close to Γ, we make      in (4.32) to obtain the equation




When                (Case 1), it can be checked that the above equation has no well-deﬁned solutions in the interval [0,
1]. In alternative Case 2, it has two solutions,     and , satisfying:




                                                                                                                               (4.33)
To complete the proof, it is enough to show that, for small θ1 and θ2 which satisfy (4.29), the rest point close to
             is stable whereas the one near                is not. To assess this stability, let        stand for the
Jacobian-matrix function associated with the vector ﬁeld deﬁning (4.27)–(4.28). This 2 × 2-matrix is of the following
form:




                                                                                                                               (4.34)
120                                   Chapter 4. Evolution in Social Environments


It is enough to show that the eigenvalues of




have both negative real parts whereas at least one of




 has a positive real part. From (4.33), it follows that the trace of both of these matrices is negative. Thus, the claim
hinges upon their respective determinants. To evaluate them, multiply the second column of (4.34) by             (which,
by (4.33), is positive at every rest point) and use the equality



which results from (4.31) and, therefore, is satisﬁed at every rest point. Factoring out                                 and
making θ1 → 0 and          , the sign of the determinant              is that of




Since the roots of the previous polynomial are          , (4.33) conﬁrms the desired conclusion, completing the proof of
the proposition. ▪
The previous result establishes that, in cases where the noise which affects responders is sufﬁciently higher than that on
proposers, a unique (but non-perfect) Nash equilibrium, close to the component Γ, will be asymptotically stable (cf.
Figure 9). Thus, in this case, evolutionary arguments are consistent with the existence of a dynamically robust
equilibrium which, in line with empirical evidence, does not necessarily assign all (or most of) the surplus to the
proposer.
The previous considerations raise the natural question of what might underlie any interpopulation differences in
mutation rates. Adopting the interpretation formerly proposed, i.e. that these rates reﬂect a ﬂow of newcomers
entering the game, Gale et al. (1995) suggest the following motivation. Any new individual who comes into the game
will typically be involved in many such games. Therefore, it is reasonable to postulate that the attention he will devote
to analysing any particular new game should depend on what are the pay-offs at stake. If these are small, he will tend to
decide on his action in a basically random fashion, selecting any of the available strategies with equal probability. On
the contrary, if the stakes are relatively large, his choice will be more closely tailored to the characteristics of the game
and, on average, closer to the currently best action. Within the contemplated formulation, this would amount to saying
that the rate θk at which “heedless' players ﬂow into population k will be larger the smaller are the pay-offs at stake.
Within the Ultimatum game under consideration, the previous discussion provides some heuristic basis for the idea
that, as a trajectory close to the component Γ sees the stakes for proposers rise, the (purely unbiased) noise which
affects this population should decrease (reciprocally, that on responders should increase). Of course, a complete
formalization of this idea would require
                                                   4.9. A Hierarchic Model of Cultural Evolution                                                                      121


Figure 9: Simpliﬁed Ultimatum Game, Noisy Dynamics




introducing into the model a variable mutation rate whose magnitude is linked to the current state of the system. This,
however, would complicate the model substantially, rendering a formal analysis of it signiﬁcantly more difﬁcult.60


4.9 A Hierarchic Model of Cultural Evolution
As suggested in Section 3.10, some evolutionary processes might be suitably conceived as proceeding at different and
interacting levels. It was also argued there that, in order for such a multi-level approach to be fruitful, the evolutionary
process under consideration must proceed at a relatively fast pace at every one of the considered levels. Only then
would these different levels genuinely interact, thus rendering it worth while to study a simultaneous dynamical system
that encompasses all of them.
Whereas in biology the validity of such an implicit assumption (i.e. relatively fast evolution at different levels) is
typically dubious, it may nevertheless




60
     Even though Gale et al. (1995) conﬁrm the outlined intuition through extensive simulations, they rely on the condition speciﬁed for Case 1 above in order to address it
     formally in a more tractable manner.
122                                                   Chapter 4. Evolution in Social Environments


represent an appropriate working hypothesis for modelling certain economic and other social environments. Here, no
attempt will be made to provide a general framework for the study of hierarchical evolutionary models in these
contexts. Rather, we shall simply illustrate the nature of this approach by means of a simple economic application.61
Consider a dynamic context where at each point in (continuous) time t ≥ 0 there is a large population of ﬁrms.
Speciﬁcally, assume that there is a continuum of them, with a total and ﬁxed measure equal to one. Each of these ﬁrms
employs the same (ﬁnite) number of workers, say m, its production activities modelled as a simple m-person game
played among its workers. This game is supposed to include just two actions, H and L, interpreted as high- and low-
effort levels, respectively.
Pay-offs are postulated as follows. Let e = (e1, e2, . . . , em) be the effort proﬁle prevailing in some given ﬁrm. The pay-off
earned by worker i is given by




where




and



Clearly, this game has two (strict) Nash equilibria, e0 = (L, L, . . . , L) and e1 = (H, H, . . . , H), where workers co-
ordinate in one of the effort levels, low or high, respectively.
The proposed game is a rather extreme representative of the so-called stag-hunt variety.62 In particular, this implies
that, within each ﬁrm, only the Pareto-inferior (or inefﬁcient) equilibrium e0 is evolutionarily stable. (Recall the ﬁnite-
population version of this concept introduced in Deﬁnition 3.) In fact, it is clear that if one postulates any evolutionary
dynamics operating within the ﬁrm which satisﬁes one of the (suitably adapted) monotonicity concepts proposed
above, the basin of attraction of e0 includes all proﬁles e ≠ e1.63 This suggests assuming that, at the lower (intraﬁrm)
level, evolution will always lead to the inefﬁcient




61
      This application relies heavily upon Vega-Redondo (1993). Other instances of multi-level evolutionary analysis can be found in Robson (1993), Oechssler (1993), or Vega-
      Redondo (1996a ).
62
      There is nothing essential in the extreme nature of the stag-hunt game considered. As shown in Vega-Redondo (1993), the analysis can be extended to analogous stag-hunt
      games where the threshold for L to be the relatively better strategy is not just one player but any number smaller than m.
63                                                                               0
      As emphasized by Crawford (1991), it is precisely this strong property of e which seems to underlie the rather clear-cut experimental results obtained by van Huyck et al.
      (1990) for this type of games. These authors have found that, in a large fraction of cases, experimental subjects who play these games repeatedly end up co-ordinated in the
      inefﬁcient equilibrium.
                                     4.9. A Hierarchic Model of Cultural Evolution                                      123


equilibrium whenever the ﬁrm in question has some player choosing a low-effort level. For future reference, this is
contained in the following postulate:
      Postulate 1: If a ﬁrm is playing one of the two equilibria, it remains playing it. Otherwise, it evolves towards e0.
This addresses the lower level dynamics of the process. For simplicity, it will be assumed that the ﬁnal outcome of this
intra-ﬁrm process (either e0 or e1) materializes before any of the inter-ﬁrm considerations described below are to apply.
The upper level (inter-ﬁrm) dynamics is taken to include two different components. The ﬁrst one pertains to the
(differential) rate at which alternative types of ﬁrms survive. A natural “monotonicity condition” in this respect would
be to link the chances of survival of each ﬁrm to its relative total pay-off. Since, given Postulate 1, ﬁrms may be
partitioned into two groups (those that play the efﬁcient equilibrium – the “efﬁcient ﬁrms” – and those that play the
inefﬁcient one, i.e. the “inefﬁcient ﬁrms”), a very stylized way of capturing this idea may be formulated as follows.
      Postulate 2: Efﬁcient and inefﬁcient ﬁrms dissolve at respective rates p, q; p < q.
The former postulate captures only one of the dimensions of interﬁrm selection: inefﬁcient ﬁrms disappear at a faster
rate than efﬁcient ones. The other side of the coin involves the rate at which new ﬁrms are created. Different
possibilities may be contemplated in this respect. To discuss them formally, some notation is now introduced.
Let μ (t) denote the fraction of efﬁcient ﬁrms prevailing at t. By Postulate 2, these efﬁcient ﬁrms dissolve at the rate p μ
(t). Correspondingly, inefﬁcient ﬁrms do so at the rate q (1 − μ (t)). Since the total measure of ﬁrms is assumed to
remain ﬁxed, the rate at which new ﬁrms are created must be d(t) ≡ p μ (t) + q(1 − μ (t)).
From Postulate 1, one just needs to consider the rates at which efﬁcient and inefﬁcient ﬁrms are eventually formed (i.e.
once the intraﬁrm dynamics is complete). Thus, let χ (μ (t)) be the proportion of ﬁrms created at t which become
efﬁcient. If one adopted the view that ﬁrms expand (or “reproduce”) by generating entities similar to themselves (i.e.
just as biological individuals would do), a counterpart of the monotonicity contemplated by Postulate 2 could be stated
as follows:
      Postulate 3: For all μ ∈ [0, 1], χ (μ) ≥ μ.
However, this formulation is highly questionable on the grounds that, in fact, groups are not individuals. Therefore,
they will generally ﬁnd it very hard, if not impossible, to replicate themselves, achieving the ﬁne-tuned degree of
coordination required for an efﬁcient equilibrium so fragile as the one considered. Only to the extent that some “ﬁrm
culture” can be passed on quite rigidly,
124                                    Chapter 4. Evolution in Social Environments


Postulate 3 could be a reasonable theoretical approximation of the underlying evolutionary forces. In this case, it is easy
to see that the pressure towards efﬁciency must eventually prevail. Simply write the (one-dimensional) upper-level
dynamics as follows:




                                                                                                                     (4.35)
Since d(t) is a convex combination of p and q which remains strictly larger than p if μ is bounded below 1, Postulate 3
implies that μ (t) → 1 as t → ∞.
To obtain a more interesting model, Postulate 3 must be replaced by an inheritance mechanism which is much less
group-based. For example, in the spirit of Boyd and Richerson (1985), it may be assumed that those workers who
enter new ﬁrms adopt their initial strategy by global mechanisms of cultural inheritance. As a simple embodiment of
this idea, let us assume that workers enter new ﬁrms with an initial propensity (i.e. ex ante probability) for high effort
equal to the frequency with which H is adopted in the overall population. In view of Postulate 1, the effect of this
cultural mechanism on the rate of creation of efﬁcient ﬁrms may be compactly described as follows.
      Postulate 3′: For all μ ∈ [0, 1], χ (μ) = [μ (t)]m.
As established by the following proposition, the dynamic analysis resulting from Postulates 1, 2, and 3′ is now
substantially richer than before. In particular, the long-run behaviour of the system hinges upon a clear-cut comparison
between the “efﬁciency bite”           and the size m of the ﬁrms (an intuitive measure of how difﬁcult it is to achieve
efﬁcient co-ordination).
Proposition 11 (Vega-Redondo (1993))Under Postulates 1, 2, and 3′, the long-run dynamics of the evolutionary process may be
characterized as follows:
  (a) If α ≤ m, limt→ ∞ μ (t) = 0, for all initial μ (0) < 1.
  (b) If α > m, there exists some stationary μ* ∈ (0, 1) such that:
          (b.1) limt→ ∞ μ (t) = 0 if μ (0) < μ*;
          (b.2) limt→ ∞ μ (t) = 1 if μ (0) > μ*.
Proof. Deﬁne the function f : [0, 1] → ℜ by



                                                                                                                     (4.36)
From (4.35) and Postulate 3′, the dynamics of the process can be written as




Therefore, stationary points of the dynamics are zeros of the function f(·). In particular, f(0) = f(1) = 0, which implies
that the two monomorphic conﬁgurations are stationary.
                                    4.9. A Hierarchic Model of Cultural Evolution                                     125


The desired characterization then easily follows once the following three claims are veriﬁed.
  Claim 1:    For all                               .
  Claim 2:    If α > m, f′ (1) < 0. Otherwise (i.e. if α ≤ m), the function f(·) is locally increasing at μ = 1.
  Claim 3:    There is at most one μ* ∈ (0, 1) such that f(μ*) = 0. Moreover, if such μ* exists,                .
The proofs of Claim 1 and the ﬁrst part of Claim 2 follow from direct computation. This is also the case for the
second part of Claim 2 if α < m. In the boundary case α = m, we have f′(1) = 0 and, therefore one needs to resort to
straightforward second-order considerations.
To prove Claim 3, deﬁne the function g : [0, 1] → ℜ by



Since, for every μ > 0,




it is clear that the interior zeros of f(·) are also zeros of g(·). Now compute:




and deﬁne h : (0, 1) → ℜ by




The function h(·) is linear in μ with negative slope equal to − m(q − p). Moreover, one has



for all μ ∈ (0, 1). Therefore, there can only be at most one interior point        where         . Since



this implies the desired conclusion, i.e. there exists at most one μ* ∈ (0, 1) such that f(μ*) = 0 and, if such μ* exists,
            .
Combining Claims 1 to 3, the desired characterization follows immediately, thus completing the proof of the Theorem.
▪
The preceding result provides an intuitive characterization of the conditions under which the efﬁcient social
convention (high effort) will be locally stable,
126                                  Chapter 4. Evolution in Social Environments


thus having at least some basin of attraction with positive measure. Essentially, what is required is that the forces of
selection (or “competition”) be strong enough relative to the difﬁculty (or “fragility”) of efﬁcient co-ordination. Indeed,
it is easy to derive parameter-sensitivity results which reﬂect this idea in a stark fashion. For example, it can be shown
that the dividing frontier μ* between the two basins of attraction moves arbitrarily close to the lower (or upper) end of
the state space [0, 1] as the parameter α reﬂecting the severity of competition falls (respectively, grows) or as ﬁrm size m
grows (respectively, falls).
                                 5 Stochastic Evolution

5.1 Introduction
Out of the three basic evolutionary forces described in Chapter 1 – selection, inheritance, and mutation – the latter has
only played an implicit role in most of our developments so far. (For example, even though an idea of infrequent
mutation underlay the concept of ESS presented in Deﬁnition 1, this remained at a purely implicit level.) Only Sections
3.9 and 4.8 have discussed some illustrative models where the force of mutation is an explicit component of the
analysis. There, the reader will recall, it amounts to a perturbation of the selection-based dynamic system whose effect
is to introduce a deterministic ﬂow of individuals adopting every possible strategy.
Within the large (formally inﬁnite) population context considered in those examples, this deterministic approach to the
phenomenon of mutation may be conceived as a suitable theoretical idealization. As discussed, it sheds new light on
the relative robustness of alternative outcomes of the model. It may be argued, however, that mutation is an
intrinsically stochastic phenomenon whose appropriate formulation requires a fully stochastic (as well as dynamic)
model. It is essentially this view which has led to the large body of recent literature whose models are explicitly
stochastic and dynamic. In most of these models, the population is assumed ﬁnite and therefore subject to the a priori
uncertain effects of random mutation. Hence, instead of deterministic trajectories, only the prior probabilities over
alternative paths may be determined ex ante.
If the evolutionary process is ergodic, one may also be able to specify the long-run (average) behaviour of the system,
somewhat in the spirit of the analysis conducted in Subsection 3.7.4. As it turns out, this long-run analysis will
sometimes produce a clear-cut selection outcome (independent of initial conditions) in cases where traditional Game
Theory typically remains silent (for example, in strict co-ordination games). In other cases, however (see the next
128                                                               Chapter 5. Stochastic Evolution


introduce “volatility” where, a priori, some deﬁnite selection criteria would seem quite forceful.


5.2 A Simple Example
Consider a certain ﬁnite population of n individuals (n even) which are matched to play the following (symmetric) co-
ordination game:64
Table 14
                                                             s1                                                      s2
     s1                                                                                                              0, 1


     s2                                                      1, 0                                                    1, 1

Note that, in this game, strategy s1 is the efﬁcient (Nash-equilibrium) strategy. However, strategy s2 also deﬁnes a
symmetric Nash equilibrium, with the additional feature that it is risk-dominant in the sense of Harsanyi and Selten
(1988). Speciﬁcally, s2 is the optimal strategy for an individual who (under the implicit assumption that he has no
information on the basis of which to discriminate between the two strategies) attributes the same probability to his
opponent playing either of them.
Modelling time in a discrete fashion,65 assume that every period t = 1, 2, . . . there is some given number of
independent matching rounds, and denote by zt ∈ {0, 1, . . . , n} the number of individuals who play strategy s1 in each
one of them (of course, n − zt play strategy s2). The general idea embodied by the evolutionary system proposed is
twofold:
     (a) Changes in the frequency with which each strategy is played at t + 1 must “monotonically” depend on the
         relative average pay-offs prevailing at t.
     (b) Occasionally (i.e. with some small probability) players “mutate” (or experiment), their new strategy choices being
         then unrelated to the strategies' current pay-offs.
The ﬁrst point captures the selection (core) component of the evolutionary dynamics. It reﬂects the generalized
Darwinian idea that the ﬁttest strategies




64
      This example is borrowed from Robson and Vega-Redondo (1996).
65
      Most of the recent evolutionary literature in a stochastic framework considers a discrete-time set-up. Some exceptions e.g. Foster and Young (1990), Fudenberg and Harris
      (1992), are summarized in Section 5.5.
                                                                           5.2. A Simple Example                                                                                129


(i.e. those with the highest average pay-off) should see their population frequency increase. The second point responds
to the idea that players will also sporadically experiment. In a stylized fashion, this is identiﬁed with the notion that,
with small probability, agents will choose their strategy in a way fully unrelated to current circumstances.
Heuristically, one may think of an evolutionary system as the composition of “selection plus noise”. As explained in (b)
above, one source for such noise is mutational (or experimental). However, in ﬁnite populations, another source of
potentially crucial noise is induced by the fact that the matching mechanism is assumed random.66 In some contexts,
this latter type of noise, in rich interaction with mutational noise, may have substantial effects on the outcome of the
model. To illustrate these matters, two alternative scenarios will be compared here: one where the matching-based
noise is high relative to mutational noise; a second one, where the opposite applies. For the illustrative purposes of our
present example, the comparison will be established between the following two extreme contexts:
      •       Scenario 1, where there is just one round of matching per period.
      •       Scenario 2, where there are an “inﬁnite” number of independent matching rounds per period.
Consider ﬁrst Scenario 1. Because of random matching, the average pay-offs earned by each strategy will depend not
only on the current number of individuals (zt, n − zt) who play each strategy but also on the number of cross-matchings
realized, i.e. the number of pairings where each of the two individuals adopts a different strategy.
Let p̃t stand for the random variable determining the number of cross-matchings realized at t, and denote by pt a typical
realization of it. If zt is even, it is clear that the set of possible realizations is given by the set {0, 2, . . . , min [zt, n − zt]}.
On the other hand, if zt is an odd number, the support of p̃t is the set {1, 3, . . . , min [zt, n − zt]}.
Let πi(zt, pt) denote the average pay-off earned by strategy si when the state of the system is zt and the number of
realized cross-matchings is pt. On the basis of Table 14, and provided 0 < zt < n, they may be computed as follows:




Given any such realized average pay-offs, denote by B(zt, pt) the number of individuals who choose to adopt strategy s1
at t + 1 due to selection forces, i.e. by the considerations explained in (a) above. If, to simplify matters, it




 66
          In a ﬁnitely repeated prisoner's dilemma, Young and Foster (1991) still consider a third kind of noise which they show to have interesting long-run implications, namely the
          number of periods during which interaction takes place between any two given players.
130                                                               Chapter 5. Stochastic Evolution


is assumed that all players react immediately to any pay-off differences, the selection component of the dynamics may
be formulated as follows:




                                                                                                                                                                                (5.1)
when 0 < zt < n. (Note that the pay-off of                               in Table 14 – an irrational number – implies that pay-off ties between
the two strategies can never occur.)
If either zt = 0 or zt = n, the system is assumed to remain ﬁxed, i.e. B(0, 0) = 0 or B(n, 0) = n, respectively. The implicit
idea here is that no new strategies may arise except by mutation (recall (b) above). To model mutation the following
simple formulation is proposed:

     Every period t, each player switches to a new strategy with some independent probability ε > 0. In that event, both
     strategies are chosen with positive probability, independently of what (5.1) prescribes.

In order to keep track of the evolution of the process in a convenient fashion, identify the state of the system at any t
with the number of individuals who adopt strategy s1 right after selection has taken place, but before any individual may
mutate. Clearly, from (5.1), the system can then be represented by a two-state Markov chain with just two states: ω1,
where every player adopts strategy s1, and ω2 where nobody does.
The following question is now asked: What is the long-run behaviour of the system when the probability of
experimentation is small? First, it has to be veriﬁed that such a notion as the long-run behaviour of the system is well
deﬁned in the present context (in particular, unique, independently of initial conditions). But this is an immediate
consequence of the fact that, due to mutation, there is positive probability no lower than εn (associated with the event
that every individual simultaneously mutates) for a transition across the two states (in either direction) to materialize
every period. Thus, from the well-known Ergodic Theorem (see, for example, Karlin and Taylor (1975) for a standard
review of the Theory of Stochastic Processes), the Markov chain has a unique invariant distribution μ (·) which
summarizes the long-run behaviour of the system in the following strong sense: with ex ante probability one, the
frequency with which each of the two states, ω1 and ω2, is visited along any sample path of the process converges to μ
(ω1) and μ (ω2) respectively.
Of course, the particular form of this unique invariant distribution must depend on the mutation probability rate ε
under consideration. Thus, write με to express such dependence. Then, more precisely, the previous question can be
reformulated as follows. What is the limit of με when ε → 0?
To compute the limit of με,67 it is enough to rely on the following bounds on the cross-transition probabilities of the
process.




67
      Again, ﬁrst of all, one needs to make sure that this limit is well deﬁned (i.e. unique). But this may be conﬁrmed by simply observing that each entry in the transition matrix of
      the Markov chain is a polynomial in ε.
                                                                        5.2. A Simple Example                                                                                   131


On the one hand, there exists some ε > 0, β > 0 such that, if 0 < ε ≤ ε,



                                                                                                                                                                               (5.2)
To verify this, simply note that, if at some t every player is planning to play strategy s2 (prior to mutation), it is enough
that two players mutate towards s1and become paired by the matching mechanism for the transition towards state ω1 to
take place. (Then, the average pay-off of s1 will be higher than that of s2, which by (5.1) leads to such transition.) For
small ε, this event is clearly of order ε2.
Assume now that the population is large enough. (Speciﬁcally, it is enough that n ≥ 8.) Then, there exists some                                                             > 0, γ
> 0 such that, if 0 < ε ≤ , the converse transition probability



                                                                                                                                                                               (5.3)
The reason here is that, if at some t every player is planning to play strategy s1 (prior to mutation), then only two players
mutating is not enough (under any realization of the matching mechanism) for strategy s2 to enjoy a higher average pay-
off than s1. Therefore, at least three mutations are required for a transition to ω2 to take place which, for small ε, is an
event of order no higher than ε3.
Since the invariant distribution of the two-state Markov chain is given by




a combination of (5.2) and (5.3) yields:




That is, in the long run, for small mutation probability, the process spends most of the time at the state where all
players play strategy s1, the efﬁcient strategy.68
Consider now Scenario 2. In this case, the average pay-off earned by each strategy can be identiﬁed with its expected
pay-off, due to the Law of Large Numbers and the postulated independence across matching rounds taking place
within each period (see Section 5.3 for a precise formulation of this idea). The important point to notice here is that,
unlike Scenario 1, these expected/average magnitudes only depend on the current number of individuals (zt, n − zt)
who play each strategy. Adapting previous notation, they are deﬁned as follows (of course, provided 0 < zt < n):




68
     Strictly speaking, it is only shown that players will spend most of the time “planning” to play s1 (i.e. before mutation). However, since the mutation probability is taken to be
     small, they will also end up actually playing s1 most of the time.
132                                         Chapter 5. Stochastic Evolution


On the basis of these pay-offs and the maintained simplifying assumption that players adjust their planned strategies
immediately, the analogue of (5.1) for this case may be written as follows:




                                                                                                                       (5.4)
Focusing again on the states of the system right before mutation takes place in each period, denote by          the
corresponding invariant distribution when the mutation rate is ε > 0. To evaluate it when ε → 0, ﬁrst note that




                                                                                                                  (5.5)
Therefore, there exists some     > 0,     > 0,    > 0, such that, if 0 < ε < , the following two inequalities apply:




                                                                                                                       (5.6)
and




                                                                                                                       (5.7)
The ﬁrst inequality is a consequence of the fact that, from (5.4) and (5.5), at least  mutations are needed to trigger
a transition from ω to ω . The second inequality also follows from (5.4)–(5.5) which jointly imply that, reciprocally,
                    2     1


mutations are sufﬁcient for a transition from ω1 to ω2 to occur.
A combination of (5.6) and (5.7) yields




That is, in the long run, for small mutation probability, the process selects the opposite strategy as before.
The previous example serves two basic purposes.
First, it illustrates the essential “mutation-counting logic” which, in a less stylized form, will underlie much of our
future analysis. In general, the task of ﬁnding the long-run (stochastically stable) states will be seen to be equivalent to
identifying those states whose “stochastic potential” (heuristically, the difference between the number of mutations
needed to reach and exit them) is maximal.
The previous example also makes clear the following second point. Certain details of the environment (for example,
the relative importance to be attributed to the different sources of noise) will generally have an interesting and crucial
role to play in the model's long-run predictions.
                                                 5.3. Theoretical Framework                                            133


5.3 Theoretical Framework
Consider now the following theoretical framework. As before, there is a ﬁnite population of n individuals which are
randomly matched every period t = 1, 2, . . . , to play a certain bilateral symmetric game. Within each period, there is
some ﬁxed number        of independent matching rounds, with each player adopting the same action in every one of
them.
For the moment, attention is restricted to games with just two strategies, represented by the following general pay-off
table:
Table 15
                                          s1                                      s2
   s1                                     a, a                                    d, c
   s2                                     c, d                                    b, b

Generalizations of this two-strategy framework will be discussed below in Subsection 5.4.4.
Within such a (2 × 2)-scenario, the most interesting case corresponds to a game which is of the co-ordination type, i.e.
both (s1, s1) and (s2, s2) are strict equilibria. This amounts to the following restrictions on pay-offs:



                                                                                                                      (5.8)
which will be maintained throughout most of this chapter. The other two alternative cases which (generically) exhaust
all other possibilities are given by:



                                                                                                                      (5.9)
and



                                                                                                                    (5.10)
The ﬁrst case reﬂects a game where one of the strategies strictly dominates the other. The second case involves a game
whose unique symmetric equilibrium involves mixed strategies (speciﬁcally, each player chooses strategy s1 with
probability             ). As mentioned, (5.8) raises equilibrium-selection issues which are much more interesting than
those induced by (5.9) or (5.10), where the issue of equilibrium selection is trivially absent. Therefore, these two latter
cases will be only informally discussed below.
The state space of the process is identiﬁed with the set
134                                                          Chapter 5. Stochastic Evolution


where, at each t, ωt = (zt, n − zt) ∈ Ω is interpreted as the number of individuals zt and n − zt respectively playing
strategies s1 and s2 at t.69 Along the lines proposed for the above example, the state of the system will change in response
to two different mechanisms: selection and mutation.
First, the selection component of the dynamics is described. Formulated in a very ﬂexible manner, it is simply required
to satisfy the requirement that the frequency of any strategy which uniquely enjoys the highest pay-off should never
decrease, displaying also some positive probability of strictly increasing. This reﬂects a very weak notion of
monotonicity, akin to those considered in previous chapters.
To express it formally, let    denote the random variable (a function of ωt) expressing the number of cross-pairings
prevailing at t along v independent matching rounds. Associated with any realization     of this random variable, the
average pay-offs obtained by each strategy are given by:




                                                                                                                                                     (5.11)
provided, of course, both strategies are played in positive frequency, i.e. zt > 0 and n − zt > 0. Note of course that, ex
ante, these average pay-offs are typically random since the number of cross-pairings deﬁnes a random variable which
generally has a non-degenerate support (speciﬁcally, this happens when 1 < zt < n − 1).
Given zt and      (respectively, the number of s1-adopters and total number of cross-matchings prevailing at t) let
             denote the random variable which determines the new number of s1-adopters after strategy adjustment.
This random variable determines the state of the process at t + 1 prior to the operation of mutation. The previous
verbal requirement on the selection dynamics may be formalized as follows:




                                                                                                                                                     (5.12)
where all these inequalities are required to be strict with some positive probability. In case                                                        , the
dynamics may be speciﬁed in any arbitrary manner, inessential to the analysis.
Note that this formulation admits of a large variety of concrete speciﬁcations for the adjustment process; in particular,
it allows for a substantial degree of inertia in strategy adjustment. The only essential requirement is that when
adjustment takes place (which occurs with some probability unless both strategies yield identical average pay-offs), it is
never performed against (and sometimes towards) the strategy with the highest average pay-off. As before, the




69
      Thus, unlike in the example discussed above, the state at t reﬂects both the strategy adjustment and mutation occurring between t − 1 and t.
                                                      5.4. Analysis                                                    135


two monomorphic conﬁgurations (zt = 0 or zt = n) will be assumed stationary from the viewpoint of the selection
dynamics, i.e. B̃(0,0) = 0 and B̃(n, 0) = n.
Selection is the core component of the evolutionary dynamics. With a very high probability, transitions take place
exclusively in accordance with it. Occasionally, however, it is perturbed by mutation, a phenomenon which in social
environments may be interpreted as formalizing some notion of, say, individual experimentation or population
renewal. In this respect, we adopt the formulation described in the previous section and assume that, prior to play
being conducted at t + 1 and after selection has modiﬁed the former conﬁguration prevailing at t, every individual is
subject to some independent (and, for simplicity, common) mutation probability ε > 0. In the event of mutation, each
agent is assumed to adopt any of the available strategies with some positive (say, equal) probability.
When the phenomenon of mutation is added to the selection dynamics, every transition has positive probability.
Therefore, the stochastic process becomes an aperiodic and irreducible Markov chain on the state space Ω. This, in
turn, has the important analytical consequence explained above: the process has a unique invariant distribution μ ∈ Δ
(Ω) which fully summarizes its long-run behaviour, almost surely (a.s.), independently of initial conditions. To express
the dependence of this invariant distribution μ on the key parameters of the model, ε and v, the notation με, v (·) will be
used.
As suggested by the simple example discussed in Section 5.2, one of the interesting features to be expected from the
evolutionary framework proposed is a rich interaction between its different sources of noise: mutational and matching-
induced noise. Indeed, as the next section analyses in detail, different relative magnitudes for each of them (as they
become small) lead to sharply different conclusions on the long-run selection achieved by the model.


5.4 Analysis
In order to illustrate in a clear-cut way the different issues involved, the analysis will be structured in two different
polar scenarios. In the ﬁrst one, the mutational noise is of a smaller order of magnitude than the matching-induced
noise. This asymmetry arises because, ﬁxing the number of matching rounds per period (arbitrarily large but ﬁnite),
the analysis focuses on the long-run behaviour of the system when the mutation probability becomes inﬁnitesimal
(i.e. converges to zero).
The second scenario considers the opposite case. First, it removes all matching uncertainty by having the number of
matching rounds per period become unboundedly large for any given mutation rate. Once matching uncertainty is so
eliminated (i.e. expected and average magnitudes coincide a.s. due to the Law of Large Numbers), the analysis focuses
on the long-run performance of the model for an arbitrarily small mutation probability.
136                                           Chapter 5. Stochastic Evolution


Formally, these two polar scenarios are associated with two different orders in which the limit operations on the
parameters ε and (possibly) v are conducted. In the former case, the limit on ε is taken ﬁrst; in the second case, on the
contrary, it is the limit as v → ∞ which is computed initially. Focusing on each of these two alternative scenarios, one
obtains a stylized (i.e. extreme) approximation for the state of affairs prevailing when both the mutation probability and
the matching noise become small, but at different relative rates. A conceptual motivation for this theoretical exercise is
provided below (see Subsection 5.4.3), once the corresponding formal analysis has been completed.


5.4.1 Large Matching Noise
Deﬁne




                                                                                                                        (5.13)
i.e. the limit invariant distribution obtained, for any given v, when the mutation probability becomes arbitrarily small.
The next result shows that          is a well-deﬁned element of Δ (Ω) which is independent of the particular value of v
considered. Moreover, it uniquely selects the efﬁcient outcome, provided the population is large enough.
Theorem 19 (Robson and Vega-Redondo (1996))Assume (5.8), a > b, and let ω1 ≡ (n, 0) be the state where all players
adopt s1(the efﬁcient strategy). For all . Moreover, there exists some   such that if n ≥ n̂, then             .
Proof. Given v, the number of matching rounds per period, let Tε stand for the transition matrix of the evolutionary
process described, where ε is the corresponding mutation rate and Tε (ω, ω′) indicates the probability that the process
transits from state ω to state ω′. As explained, for ε > 0, the existence of an invariant distribution με, v (·) is guaranteed
by the ergodicity of the induced stochastic process.
Now, we argue that the limit invariant distribution deﬁned by (5.13) is also well deﬁned. This follows directly from the
graph characterization described in the Appendix. By (7.1) and Proposition 17, each of the components of με, v(·), for
any ε > 0 and        , is given by a ratio of polynomials in ε. Therefore, its limit is well deﬁned when ε → 0.
As a further consequence of Proposition 17, one may also conclude that the support of                         – i.e. the set of
stochastically stable states – consists of those ω whose corresponding qω display, as ε → 0, the smallest rate of convergence
to zero,           . Since every qω is a polynomial in          coincides with its lowest exponent of ε. This, in turn, from
mere inspection of (7.1), is seen to be equal to the minimum total number of mutations required in some ω-tree                .
                                                                              5.4. Analysis                           137


To make this discussion precise, it is useful to resort to a certain notion of cost associated with the different possible
transitions. Denote by T0 the transition matrix associated with the mutation-free dynamics (i.e. the evolutionary
dynamics resulting when ε = 0). Furthermore, deﬁne a distance function on                       , which for every pair of
states, ω = (z, n − z) and ω′ = (z′, n − z′), indicates the minimum number of agents who must be playing a different
action at ω and ω′, i.e.



Then, a cost function                                 is deﬁned as follows:



                                                                                                                    (5.14)
This cost function indicates the minimum number of mutations required to complement the mutation-free dynamics
in order to carry out any contemplated transition. This cost function can be extended to any path y or tree Y in the
natural fashion: the cost of a path or a tree is identiﬁed with the aggregate cost of its constituent links. Extending the
former notation, such a cost is denoted by c(y) or c(Y).
From the considerations explained above, it follows that, as ε → 0, the order          for any given state ω is equal to
the minimum cost c(Y) achievable for some          . Thus, combining this with Proposition 17, one concludes that the
task of identifying the stochastically stable states simply reduces to determining which states ω ∈ Ω display a
corresponding ω-tree Y of minimum cost, i.e. a tree         whose cost c(Y) is no larger than any other           for all
ω′ ∈ Ω.
This search is substantially facilitated by the following two Lemmas. To state them precisely, one needs the following
standard deﬁnition, as particularized to the present framework.
Deﬁnition 19A certain D ⊆ Ω is a limit (or absorbing) set of the mutation-free dynamics induced by T0if:
     (a) ∀ ω ∈ D, T0 (ω, ω′) > 0 ⇒ ω′ ∈ D;
     (b)                  such that                                   .70
Lemma 3Let                             .71Then, ω belongs to some limit set of the mutation-free dynamics.
Proof: For any given ε > 0, the invariant distribution με, v satisﬁes:




70
      Here,         stands for the m th iteration of the transition matrix T0 .
71
      As customary, the notation supp (·) stands for the support of the probability distribution in question.
138                                               Chapter 5. Stochastic Evolution


By taking limits on the above expression for ε → 0, and relying on the continuity of Tε in ε, one obtains




This expression obviously implies that if        , it must also belong to a limit set of the mutation-free dynamics
induced by T0, thus completing the proof of the Lemma.
Lemma 4There exists some            such that if n ≥ ñ, the only limit sets of the mutation-free dynamics are the singletons {ω1} and {ω2},
where ω stands for the state where every agent adopts si.
       i



Proof: Deﬁne the (mutation-free) basin of attraction Ui of the limit set {ωi}, i = 1, 2, as the subset of the state space
from which there is a positive probability to make a transition to this limit set in some ﬁnite number of periods without
relying on mutation. Formally,




Now choose k as the smallest integer such that:




                                                                                                                                    (5.15)
Note that k depends only on the pay-offs of the game, and not on n, the number of players. The proof of the Lemma
is based on the following two Claims.
       Claim 1: If ω = (z, n − z) satisﬁes z ≥ k, then ω ∈ U1.
To prove this claim, note that if there are at least k individuals playing strategy s1, then, provided all of them meet
among themselves in each round of matching (with the possible exception of one of them, if z is an odd number),
strategy s1 will earn an average pay-off higher than s2. Since this matching outcome displays some positive probability,
the same applies to having the ensuing state involve at least one more player adopting strategy s1. Proceeding in this
fashion for at most n − z periods, the stated conclusion follows.
The second claim pertains to the basin of attraction of the alternative limit state ω2.
       Claim 2: There exists some               such that if n ≥ ñ and ω = (z, n − z) satisﬁes z < k, then ω ∈ U2.
The proof of this second claim derives from the fact that if n is large enough and fewer than k players are adopting
strategy s1, the average pay-off of strategy s1 is bound to be lower than that of s2, provided all individuals playing the
                                                                               5.4. Analysis                                                                               139


former strategy are matched with individuals playing the latter in every matching round. For in this case, the average
pay-off of s2 will be arbitrarily close to b if n is large enough. And this average pay-off will be larger than d, which is the
pay-off obtained in every one of their encounters by players adopting strategy s1.
From Claims 1 and 2, there is positive probability that, from any state ω ∈ Ω, the mutation-free dynamics will become
absorbed by either ω1 or ω2 in some ﬁnite number of steps. This implies, as desired, that {ω1} and {ω2} are the only
limit sets of the mutation-free dynamics.
The proof of the Theorem is then completed through the following two Lemmas.
Lemma 5Let n ≥ ñ, as in Lemma 4. Then there exists an ω1-tree Y such that c(Y) = k, where k satisﬁes (5.15).
Proof: Let ˜ω = (k, n − k) and consider the path ỹ = {(ω2, ˜ω), (˜ω, ω(1)), (ω(1), ω(2)), . . . , (ω(r), ω1)} where T0 (˜ω, ω(1)) > 0, T0
(ω(r), ω1) > 0, and T0 (ω(q), ω(q+1)) > 0 for all q = 1, 2, . . . , r − 1. From Claim 1 above, such a path can be constructed, with
c(ỹ) = k. Moreover, since all states in Ω \ {ω1, ω2} belong to either U1 or U2 (cf. again Claims 1 and 2 above) it is clear
that the path ỹ can be completed to form a ω1-tree without increasing the cost of k contributed by this path. This
completes the proof of the Lemma.
Lemma 6There exists some n̂ (≥ ñ in Lemma 4) such that if n ≥ n̂, then                                                             , where k is chosen as in Lemma 5.
Proof: Choose                  to satisfy




where f is deﬁned in (5.15). If n ≥ n̂, then                              , and




                                                                                                                                                                        (5.16)
Consider now any ω = (z, n − z) where z ≥ n − k. By (5.16), the average pay-off obtained by strategy s1 must always be
larger than that of s2 for any outcome of the matching process. In particular, therefore, one has that ω ∉ U2.72




 72
      Of course, if ω ∉ U2 it must be the case that ω ∈ U1 . However, notice that, in general, the latter statement does not imply the former since, in the evolutionary dynamics
      considered, basins of attraction are not disjoint sets.
140                                                              Chapter 5. Stochastic Evolution


Let Y be any given ω2-tree. As required by Deﬁnition 21, this tree must include a path y from ω1 to ω2. From the
considerations above, c(y) > k. Therefore, c(Y) > k, which completes the proof of the Lemma. ▪
Since the conclusion of Theorem 19 is independent of v, the number of matching rounds per period, the next obvious
Corollary follows.
Corollary 5Under the conditions of Theorem 19, there exists some                                    such that if n ≥ n̂, then




                                                                                                                                                                            (5.17)



5.4.2 Small Matching Noise
Now we consider the polar scenario where, in taking limits on v and ε, matching noise is made to vanish at a faster
pace than mutational noise. This amounts to interchanging the order of the limit operation in (5.17), giving rise to the
following result.
Theorem 20 (Kandoriet al. (1993)) Assume (5.8), c+b > a+d, and let ω2 ≡ (0, n) be the state where all players adopt s2(the risk-
dominant strategy).73There exists some such that if n ≥ ñ, then




                                                                                                                                                                            (5.18)

Proof. Given any ε> 0, denote by T̂ε the transition matrix of the (limit) evolutionary process resulting when all
matching uncertainty is removed by making v → ∞. In this case, (5.12) can be rewritten as:74




                                                                                                                                                                            (5.19)
where B̂(zt) stands for the random variable expressing the number of new s1-adopters after strategy adjustment at t + 1
(prior to mutation) and each i(zt) stands for the expected pay-off obtained at t by each strategy si, i = 1, 2. By




73
      The well-known concept of risk-dominance has been proposed by Harsanyi and Selten (1988). Of course, risk-dominance and Pareto efﬁciency may well conﬂict as
      illustrated e.g. by the game discussed in Section 5.2.
74
      Notice that, as before, these inequalities must continue to hold strictly with some positive probability, provided that (5.12) does not depend directly on v (as was implicitly
      postulated). In this case, (5.19) must inherit such a requirement from (5.12).
                                                                              5.4. Analysis                                                                                141


the Law of Large Numbers, these expected pay-offs equal average pay-offs a.s. and are given by:




Denote                                . From considerations identical to those explained in the proof of Theorem 19,
this limit is a well-deﬁned probability distribution on Ω. In characterizing its support, one may rely again on the direct
counterpart of Lemma 3 which, for completeness, is now stated without proof.
Lemma 7Let                           . Then ω belongs to some limit set of the mutation-free dynamics induced by T̂0.
As before, the next step is to characterize the limit sets of the mutation-free dynamics. This is the content of the
following obvious Lemma, again stated without proof.
Lemma 8Let ρ be the unique real number that satisﬁes a(ρ − 1) + d(n − ρ) = cρ + b(n − ρ − 1).75The only limit sets of the
mutation-free dynamics are {ω1}, {ω2} and, possibly (if ), the singleton {˜ω} where ˜ω = (ρ, n − ρ).
Deﬁne now a cost function                                    , which is the direct counterpart of that deﬁned in (5.14), i.e.




From the considerations already explained in the proof of Theorem 19, the present result follows from the following
Lemmata.
Lemma 9There exists some                      such that if n ≥ ñ, an ω2-tree Y exists with                             .
Proof: Let ρ be deﬁned as in the statement of Lemma 8. From the fact that a + d < c + b, there must exist some
such that if n ≥ ñ, the corresponding value of      . Which, in particular, implies that              , i.e. when exactly
half of the population plays each strategy, the average pay-off of strategy s2 is higher than that of s1.
For concreteness, assume that ρ is an integer so that the state ˜ω = (ρ, n − ρ) is well deﬁned. (If it were not deﬁned,
then the ensuing argument would merely




75
     Thus, if ρ happens to be an integer, it is the precise number of s1 -adopters for which 1 (ρ) = 2 (ρ). In general, however, it will not be an integer and will partition the
     state space into the basins of attraction of each monomorphic state, Û1 = {ω = (z, n − z ) : z > ρ} and Û2 = {ω = (z, n − z ) : z < ρ}.
142                                          Chapter 5. Stochastic Evolution


be simpliﬁed.) By the deﬁnition of ρ, the state    = (ρ − 1, n − ρ + 1) belongs to the basin of attraction of ω2.
Therefore, there is a path y joining  and ω2 at zero cost. Since ĉ(˜ω, ) = 1 and




the path y′ = {(ω1, ˜ω), (˜ω,   )} ∪ y joins ω1 to ω2 at a total cost




Moreover, y′ includes in it all three limit states, ω1, ω2, and ˜ω. Therefore, it can be completed to construct a ω2-tree at
no additional cost. This completes the proof of the Lemma. ▪
Lemma 10There exists some         such that if n ≥ ñ, then                              .
Proof: Assume again, for the sake of concreteness, that ˜ω is well deﬁned. To show that every tree belonging to either
      or     must have a cost larger than , it is enough to show that all of them must have some path with this
property. Speciﬁcally, note that every such tree must include a path y which joins ω2 to some state ω = (z, n − z) with z
≥ ρ, where ρ is as deﬁned above. It is now argued that this path must satisfy                     . First, notice that, for
sufﬁciently large        . Therefore, any state ω′ along path y for which the subpath joining ω2 and ω′ has a cost no
larger than must still belong to the basin of attraction of ω2. Since in the present context (with no matching noise), all
basins of attraction are disjoint, this implies that further mutations are needed to reach state ω1 with positive
probability. This completes the proof. ▪


5.4.3 On the Role of Noise in Evolutionary Models
The analysis just presented illustrates how the addition of genuine stochastic noise to an evolutionary framework may
fruitfully interact with the forces of selection to provide a strong and clear-cut selection device in games. Even in those
cases where the game has several strict Nash equilibria (and, therefore, all of them are immune to any of the usual
criteria of Nash reﬁnement) this evolutionary approach is able to pinpoint a particular equilibrium. Speciﬁcally, it is the
one associated with the unique (stochastically stable) state remaining within the support of the limit invariant
distribution as the noise of the system becomes vanishingly small. In general, the equilibrium selected reﬂects both the
pay-off structure of the game and the relative orders in which the different sources of noise are assumed to vanish.
In contrast with the developments discussed in previous chapters, the key new feature of the present approach is the
role played by noise (both matching
                                                                                5.4. Analysis                                                                                  143


noise and mutation) in liberating the process from absorption at one of the different limit sets of the selection
dynamics. The introduction of this new evolutionary factor raises a number of interesting (and somewhat
controversial) issues which are worth elaborating upon in some detail in what follows.
Each of the two sources of noise contemplated by the evolutionary process plays a quite different role in the
underlying logic of the model.
Mutational noise, on the one hand, is best viewed as a source of perturbation of the “core” (i.e. selection) component
of the process. In a sense, it entails a test of robustness for each of the several limit sets which will typically result from
the exclusive operation of the selection (mutation-free) dynamics.76 Allowing for mutation, one may discriminate
among all these sets, based on the fact that not all of them are equally robust under mutation. Only those which are
most resistant to mutation may qualify as long-run outcomes. They will include the most frequently observed states
when, in the long run, mutation is given enough time to upset the temporary workings of the selection dynamics.77
Matching noise, on the other hand, fulﬁls a very different (but complementary) role in the evolutionary process. By
itself, it can never upset a conﬁguration where, for example, the population is fully co-ordinated at a certain
equilibrium. However, when remaining at a signiﬁcant level (i.e. the case addressed by Theorem 19), it enhances the
power and ﬂexibility by which mutations (even when appearing in small numbers) may impinge on the long-run
evolution of the process.78 But, in general, matching-induced noise will not just be a mere unbiased catalyst. As
exempliﬁed by our former analysis, it may well display some inherent biases which qualitatively affect the long-run
behaviour of the process.
Besides their “technical” usefulness as a selection device, one may still wonder what is the conceptual basis for including
these different types of noise in the evolutionary framework. Concerning mutation, it has already been amply explained
that it represents an essential building block of evolutionary processes and, as such, is best modelled in a fully ﬂedged
manner. Mutation provides the indispensable source of variation needed for selection forces to operate fruitfully. In
this sense, the introduction of mutational noise as an explicit component of the theoretical framework should be seen as
addressing one of the main conceptual voids left untackled by previous developments.
The motivation for allowing for a signiﬁcant extent of noise to persist within




76
     Recall e.g. Lemmata 4 and 8 above. One trivial exception to this multiplicity of limit sets occurs when one of the strategies strictly dominates all others. In this case, and
     provided the number of players is large enough, the only non-degenerate limit set has all players choosing the dominant strategy. As explained in Subsection 5.4.4, an
     analogous situation happens when the game has a unique (mixed-strategy) equilibrium.
77
     As formulated, the perturbation on the selection dynamics induced by mutation is unbiased in two implicit (but crucial) respects. First, it may lead to any ensuing strategy
     with non-vanishing probability when it occurs. Second, its (full) probability of occurrence is state-independent. The ﬁrst condition is obviously required if the above analysis
     is to apply (otherwise, the process may be non-ergodic). The second condition is also essential, as shown by Bergin and Lipman (1995).
78
     See Section 5.6 for a precise formalization of the role of matching noise in increasing the rate of convergence of the process.
144                                                             Chapter 5. Stochastic Evolution


the matching framework is somewhat more controversial. One could probably argue that evolutionary models are only
suitably applied to large populations and that, therefore, matching noise (or, for that matter, any other source of noise
associated with relatively small populations) is best ignored. However, much in line with analogous ideas put forward
by some biologists (most notably, Sewal Wright – see Wright (1945)), one could also argue that occasional (perhaps
quite unlikely) “small-population effects” (i.e. effects which cannot always be discarded by resorting to the Law of
Large Numbers) are crucial to understanding the evolution of some beneﬁcial traits in large populations.79
In the evolutionary framework described, the relative magnitudes associated with the two alternative sources of noise
are formally captured by the particular order in which the limit operations are sequentially taken (ﬁrst on ε then on v, or
vice versa).80 As the previous discussion suggests, the “right” order in which the different limit operations are to be
taken must be tailored to the particular details of the context under consideration. In general, it will have to be one of
the choices made at the “modelling stage” in the analysis.


5.4.4 Extensions
Theorems 19 and 20 have focused on symmetric games with just two strategies and two different co-ordination
equilibria. As mentioned, this is the case which in the context of (2 × 2)-games raises the most interesting questions,
and where evolutionary analysis makes a more substantive contribution to traditional game-theoretic analysis. For the
other two kinds of symmetric (2 × 2)-games which generically cover all other possibilities (those given by inequalities
(5.9) and (5.10)), the game has a unique equilibrium. In the ﬁrst case, this (pure strategy) equilibrium is trivial since one
of the strategies strictly dominates the other; in the second one, the unique equilibrium involves mixed-strategies (cf.
Section 5.3).
In both of these latter contexts, any “monotonic” selection dynamics will tend to make the unique equilibrium
conﬁguration stable, provided that the population is large enough.81 This is obvious in the case of a dominant strategy




79
      In the shifting balance theory of Wright's (see Sigmund (1993) for a good summary), these small-population effects take place when some small fraction of the whole (large)
      population happens to be temporarily isolated. In these circumstances, some rate trait may become ﬁxed due to mere chance (something that could hardly occur in very large
      populations), thus becoming instrumental in the unfolding of a major population shift. Even though our framework is not rich enough to accommodate such ideas fully, the
      scenario where matching noise remains at signiﬁcant levels (cf. Theorem 19) reﬂects similar considerations. Namely the idea that, in not too large populations, the
      unavoidable noisy interaction which results may render feasible the consolidation of some actions which otherwise would be much less likely to arise.
80
      See Binmore et al. (1993) for another instance of an evolutionary framework where long-run outcomes depend on the particular order in which the limits on the different
      parameters involved is taken.
81
      Rhode and Stegeman (1996) demonstrate that, even for games with a strictly dominant strategy, the proviso on the size of the population cannot be dispensed with.
      Speciﬁcally, they show that, for any given population size, there is a (2 × 2)-game with a dominant strategy for which the unique stochastically stable outcome has the
      population play the dominated strategy. (Notice that the population size is here taken as given, the aim being to ﬁnd a game where the paradoxical conclusion applies. Thus,
      the quantiﬁers on population size and pay-off structure are reversed as compared, say, with the statements of Theorems 19 or 20.) The essential gist of their examples has
      already been found in Section 2.7 and will again be encountered in the example presented in Section 5.7. In a ﬁnite population, a player can always deviate from a certain
      strategy to become worse off in absolute terms (e.g. if he adopts a dominated strategy) but still make his opponents even worse off.
                                                                               5.4. Analysis                                                                               145


since selection-induced adjustment can only proceed in the direction of increasing the number of players choosing this
strategy. In the second case, the same tendency towards the equilibrium proportions of players is present, but the
question becomes slightly more subtle because of the following three complications:
     (i) The adjustment may permanently “overshoot” the equilibrium proportions of players if it is not gradual enough.
           For example, it could repeatedly oscillate between the two monomorphic states if, in every period, adjustment is
           instantaneous for all players.
     (ii) Due to the ﬁniteness of the population, the proportion of it,              , which must play strategy s1 in order to
           mimic the probability weights of the mixed-strategy equilibrium will typically involve a number of players, γ n,
           which is not an integer.
     (iii) Since players adopting strategy s1 do not face the same proﬁle of opponents as those adopting strategy s2 (no
           player meets himself), the number of players ρ (again, typically not an integer) which would yield an identical
           pay-off to both strategies (an obvious necessary condition for stationarity of the selection dynamics) is equal to
                            (recall Lemma 8). Unless b = a, it will not be the case that γ n = ρ.
To remedy (i), let us assume that the selection process is gradual so that, say, only a maximum pre-established number
of players may adjust at a time. Further assume, to simplify matters, that we restrict our considerations to “interior” (or
polymorphic) states where both strategies are present.82 Then, if the population is large enough (which, in particular,
will decrease matching-induced noise arbitrarily), it is not difﬁcult to see that the selection dynamics will tend to spend
“most of its time” in some relatively small set of states whose proportion of s1-adopters is arbitrarily close to γ (or ρ/n).
Due to the considerations explained in (ii) and (iii), one may not generally go beyond such an approximate statement.
However, to repeat, the approximation to the mixed-equilibrium proﬁle can be made arbitrarily close if the population
is sufﬁciently large.
Consider now how this state of affairs (for both (5.9) or (5.10)) is affected




82
      The essence of the argument is not affected by the fact that the selection dynamics is assumed to leave the monomorphic states ﬁxed. Note that, in the present context, any
      monomorphic state is destabilized by just one mutation, whereas it will require a large number of mutations (if the population is large) to restore this monomorphic state
      once the selection dynamics leads the system away from it.
146                                                              Chapter 5. Stochastic Evolution


by the introduction of mutation. Since the motion induced by the selection dynamics is always active in the same
direction (again, restricting to polymorphic states), mutation can only temporarily offset the tendencies induced by it.
Thus, when mutational noise becomes small, the long-run behaviour of the system will follow arbitrarily closely that
induced by the selection dynamics. In the long run, therefore, the unique equilibrium is being selected (only
approximately for the case given by (5.10)), both when the game has a dominant strategy and when the unique
equilibrium involves mixed strategies.
The previous heuristic discussion suggests that the postulated evolutionary approach behaves in a natural (“non-
pathological”) fashion when equilibrium selection is not an issue, i.e. when either (5.9) or (5.10) applies. A formal proof
of this conclusion can be found in Kandori et al. (1993) and Robson and Vega-Redondo (1996) for each of the
scenarios considered here (i.e. under small or large matching noise, respectively).83


5.5 Continuous-Time Dynamics
As in much of the recent evolutionary literature, the dynamic processes studied in this chapter have been modelled in a
discrete temporal framework. There are, however, a few important exceptions where time has been modelled
continuously. Two such instances are now brieﬂy summarized.
One of them, the seminal work of Foster and Young (1990), represents the ﬁrst attempt at explicitly modelling
ceaseless stochastic noise in evolutionary contexts. Not only did it provide much of the conceptual thrust which fuelled
the early developments of this literature, but it also imported from the mathematical arena some of the powerful
analytical tools which have been extensively used since (speciﬁcally, the techniques developed by Freidlin and Wentzel
(1984), used in the proofs of Theorems 19 and 20). These authors focused on the standard (continuous-time)
Replicator Dynamics (3.4), adding to it a (variably scaled) Wiener process, i.e. a continuous white noise process with
mean zero and unit variance-covariance matrix. Speciﬁcally, that is, they studied a stochastic dynamical system on Δm − 1
(the (m − 1)-dimensional simplex) of the following form:84



                                                                                                                                                                           (5.20)




83
      Other extensions for the scenario with small matching noise are discussed by Kandori and Rob (1995) who address strict co-ordination games (games where all off-
      diagonal pay-offs are zero) and general supermodular games (see Topkis (1979)). Robson and Vega-Redondo (1996) also explore some generalizations of Theorem 19. In
      particular, they show that efﬁcient selection still applies to any common-interest game (cf. Deﬁnition 4), even if the game is not symmetric and two different populations are
      involved.
84
      The notation here is as in Ch. 3. The pay-off matrix is denoted by A, with Ai standing for its i th row. The vector of population frequencies is denoted by ν(t ) = (ν1
      (t ), . . . , νm (t )).
                                            5.5. Continuous-Time Dynamics                                               147


for all i = 1, 2, . . . , m, where σ ∈ ℜ+ is a parameter scaling the magnitude of noise, W(t) is the described
m-dimensional Wiener process, and Γ(ν) ∈ ℜm × m is continuous in ν, bounded away from zero, and has the property that
ν · Γ(ν) ≡ (0, 0, . . . , 0), for all ν ∈ Δm − 1.
The noise term added in (5.20) represents a “catch-all” aggregate disturbance which can be provided with a number of
different interpretations. One possibility is to view it as capturing the unavoidable uncertainties which arise when a
ﬁnite-population context (as, of course, all of them are in the real world) is approximated by a continuum-population
model. Another possible interpretation is that any given population (independently of its size) confronts sources of
uncertainty (e.g. exogenous changes in the environment) which will affect all of them in a correlated fashion and,
therefore, cannot be ignored by resorting to large-number arguments. In any case, even if these effects are small, the
basic tenet of the approach pioneered by Foster and Young is that they may well have very signiﬁcant qualitative effects
on the long-run behaviour of the system.
Under the implicit assumption that the system is subject to some background process of mutation (or migration) by
which all strategies remain represented in the population at some signiﬁcant frequencies, Foster and Young (1990)
assume that the analysis of the system can be restricted to some subset Sδ = {ν ∈ Δm − 1 : νi ≥ δ} ⊂ Δm − 1 where δ > 0 is
chosen sufﬁciently small. This assumption has been incorporated explicitly into the theoretical framework of
Fudenberg and Harris (1992), as explained below.
Foster and Young pose the following, by now familiar-sounding, question: What is the long-run behaviour of the
system as σ, the noise parameter, converges to zero? First, they show that this question can always be provided with a
well-deﬁned and deﬁnite answer (at least, focusing on the limit superior, as σ → 0). Second, they illustrate by means of
examples that this approach is a fruitful one and provides interesting insights.
In particular, they show that, in some contexts where several ESS conﬁgurations exist, their approach is able to single
out one of them as the unique stochastically stable state, i.e. the unique state which retains positive density in the limit
ergodic distribution. On the other hand, they also show that there are scenarios where a unique ESS exists but whose
set of stochastically stable states is completely disjoint from the support of the ESS population proﬁle. Thus, in this
latter sense, one arrives at the following conclusion: Even though the ESS concept may embody a suitable notion of
dynamic stability when the environment displays very rare perturbations (cf. Theorem 3), it represents a much less
appropriate concept in case of ceaseless perturbations.
This approach has been developed further by Fudenberg and Harris (1992), who suggest that the best way to
introduce noise into the Replicator Dynamics is by incorporating it directly in the underlying dynamics in population
sizes (rather than frequencies) which is taken to generate it (recall Section 3.2). They argue that, in this fashion, one is
better able to discern the appropriate natural restrictions to be imposed on the stochastic component of the dynamics.
Since,
148                                                            Chapter 5. Stochastic Evolution


in a sense, the Replicator Dynamics is a reduced model, any assumptions directly made on it may hide unsuitable
requirements on the underlying, more “primitive” model.
Denote by r(t) = (r1(t), r2(t), . . . , rm(t)) ∈ ℜm the vector of population sizes expressing the “number” of individuals
adopting each of the m strategies at t, and let ν(t) = (ν1(t), . . . , νm(t)) be the associated population frequencies, i.e.




Fudenberg and Harris propose the following stochastic dynamical system:


                                                                                                                                       (5.21)
where again W(t) = (W1(t), . . . , Wm(t)) is an m-dimensional Wiener process and
                                                              is a vector of parameters scaling noise. Applying Ito's
Lemma (see Gihman and Skorohod (1972)), one may derive the induced dynamics for population frequencies. For
example, in the simple context with just two strategies (m = 2), it may be represented as follows:85



                                                                                                                                       (5.22)

Suppose that the pay-off matrix A included in (5.22) deﬁnes a co-ordination game. (That is, a game as in Table 15 with
a > c, b > d.) In that case, Fudenberg and Harris show that the system will eventually become absorbed by an essentially
monomorphic proﬁle with probability one. However, with positive σ1 and σ2, the stochastic nature of the system makes
the prediction of which of the two monomorphic situations will prevail (i.e. one with ν1 = 1 or ν2 = 1) far from certain.
Ex ante, the only statement that can be made is on the relative prior probabilities of achieving each of them. Naturally,
these probabilities will depend on the initial conditions, relative basins of attraction, and noise parameters. For
example, in the limit case where σ1 and σ2 converge to zero, initial conditions and basins of attraction become pre-
eminent. And then it can be asserted that the situation achieved in the long run will be, with arbitrarily high probability,
the one corresponding to the basin of attraction where the initial conditions happen to lie.
If, instead, the pay-off matrix A deﬁnes a game with either a dominant strategy or a unique mixed-strategy equilibrium
– the other two possible (generic) (2 × 2)-scenarios – the process is always ergodic. Furthermore, its long-run
probability is fully concentrated on the population state which mimics the unique equilibrium.




85
      Since the system is one-dimensional, only the law of motion for one of the strategies (say the ﬁrst one) needs to be speciﬁed.
                                                             5.5. Continuous-Time Dynamics                                                                             149


To regain ergodicity in the co-ordination case, Fudenberg and Harris modify (5.22) by adding a constant ﬂow of
mutation. Generalizing the formulation described in Sections 3.9 and 4.8 (where the perturbation was channelled
through unbiased newcomers replacing incumbents at a uniform rate) mutation is identiﬁed here with a given
conversion ﬂow across populations playing different strategies.86 Speciﬁcally, if λi (i = 1, 2) denotes the rate at which
individuals adopting strategy si switch to strategy sj (j = 3 − i), the system (5.22) is modiﬁed as follows:



                                                                                                                                                                    (5.23)
for each i, j = 1, 2, j = 3 − i. Applying again Ito's Lemma to derive a corresponding system in population frequencies,
one obtains:




                                                                                                                                                                    (5.24)

In this context, it is shown that as every σi and λi converge to zero (in any order, provided the ratio λ1/λ2 remains
constant) the process remains ergodic, the limit long-run distribution of the process concentrating its full mass in the
risk-dominant equilibrium.
It is important to understand the intuition underlying the sharp contrast between the long-run behaviour of (5.22) and
(5.24). This contrast underscores the qualitative differences between pay-off-perturbing noise – i.e. that induced by the
Wiener process W(t) – and mutation. The ﬁrst one always maintains a large potential inﬂuence throughout the state
space in affecting the direction of movement of the system. However, as the process approaches the boundary, the
magnitude of the effect vanishes as the factor ν1(t) ν2(t) appearing in (5.24) becomes very small. It is precisely these
considerations which cause the process to be non-ergodic in the absence of mutation: eventually, the process will
become “trapped” near one of the boundaries, pay-off-perturbing noise becoming progressively more unlikely to bring
it out of this situation.
To prevent such a state of affairs is precisely the function of the mutation rates in (5.24). No matter how small they are,
they always have the effect of keeping the system within some compact subset of int(Δ1), even though their absolute
impact in “bending” the system away from its boundaries might be very small. In these circumstances, pay-off-
perturbing noise is sure to maintain its role in having the system escape the basin of attraction of either equilibrium.
And again, given such a guaranteed role for (small) noise, the equilibrium that




86
     Note that, if λ1 = λ2 = λ, this formulation is essentially identical to that postulated in Sections 3.9 and 4.8. In this case, the mutation term in (5.23) below becomes
                          , which is formally analogous to the one postulated there.
150                                          Chapter 5. Stochastic Evolution


will be selected in the long-run turns out to be the risk-dominant one, due to a similar kind of reasoning to that which
underlies Theorem 20. (Note that the present framework displays no matching noise, due to the assumption of large
numbers implicitly built in the Replicator Dynamics.)
Given that similar considerations seem to arise from both the continuous- and discrete-time frameworks, one may
wonder whether they can be conceived as essentially equivalent. Even though much less work has been carried out in
the continuous-time framework, an important distinction between the two approaches lies in their differing robustness to
alternative particular speciﬁcations. As described above, the discrete-time approach merely demands that some general
(qualitative) requirements of monotonicity be met, thus abstracting from any precise formulation of the selection
dynamics. This, however, is not the case for the evolutionary framework modelled in continuous time. In this latter
context, the analysis will, in general, be highly dependent on the particular formulation adopted. For example, the
above-described conclusions will not carry over to other monotonic selection dynamics different from the Replicator
Dynamics. In particular, one may ﬁnd perturbed monotonic dynamics whose limit distribution is concentrated on the
risk-dominated equilibrium.
One must understand, however, that the discrete-time approach builds its robustness upon the following critical and
potentially controversial feature: under small matching noise, transition probabilities across different equilibria will only
be dependent on the respective sizes of their basins of attraction. This arises from the fact that, typically, such
transitions will be conducted through large “jumps”. (In the continuous-time framework, what is needed is a “lucky
concatenation” of suitable random events.) Since such large jumps require a correspondingly large number of simultaneous
mutations, their likelihood becomes very small as the mutation probability also becomes small. This raises the question
of how one should interpret long-run results which, if the transition probabilities are very small, may take an unduly
large amount of time to materialize. A discussion of these issues, together with their relationship to some important
details of the theoretical framework (speciﬁcally, the postulated interaction pattern), is the object of the next section.


5.6 Rate of Convergence and Interaction Pattern
5.6.1 Global Interaction
Theorems 19 and 20 have been interpreted as statements of equilibrium selection in games, even though they are
couched in a somewhat unusual form. In particular, they do not assert that the system will eventually converge to a
certain outcome (something precluded from the recurrent operation of mutation)
                                                   5.6. Rate of Convergence and Interaction Pattern                                                                          151


but, rather, that a.s. the system will spend “most of its time” along any sample path at some speciﬁc state.
These results do not convey in themselves any idea on how long the long run might be. Or, to express it somewhat
more precisely, they do not provide any information on whether one should expect the stated long-run conclusion to
be realized at a fast or slow rate. As suggested above, it might be rightly argued that if the expected rate at which the
system achieves its long-run outcome is very slow, the independence of initial conditions that these results formally
display is only of limited relevance as an equilibrium selection device.
Clearly, any assessment on the rate at which the long-run state of affairs is to be realized must depend, very crucially,
on the mutation rate ε under consideration. Mutation is the phenomenon which essentially carries the “ergodicity
burden” in the model. It is mutation which eventually makes initial conditions irrelevant by, sooner or later, upsetting
the forces of selection. It is apparent, therefore, that any precise assessment of the rate of long-run convergence must
be related to the probabilities that certain mutation events (typically a combination of them) happen to take place. In
the end, as ε becomes small, these probabilities must be of the same order as some appropriate power of ε, the
mutation rate.
The speed at which the process converges to its long-run state of affairs may be formally evaluated in a variety of
different ways, all of them basically equivalent. For example, in contexts such as the present one where the (limit)
invariant distribution is known to be fully concentrated in a single long-run (stochastically stable) state, the question
can be posed in either one of the following ways:
     (a) Suppose the system is not in the long-run state. What is the maximum expected time that will elapse before the
         process visits this state?
     (b) Choose the initial state of the system with some arbitrary prior probability. What is the fastest rate (exponential
         on t)87 at which the probability of being in the long-run state at some future t converges to one?
Only the approach suggested by (a) will be formally discussed here. The reader can ﬁnd in Ellison (1993) a detailed
discussion of approach (b) for a context essentially analogous to one with small matching noise (i.e. one where players
form static expectations – see Chapter 6). As mentioned, both (a) and (b) yield the same insights.
First, the focus is on how the rate of convergence is affected by the different matching-noise scenarios contemplated
above. As established in Subsections 5.4.1 and 5.4.2, the long-run outcome is generally different in each of these
scenarios. Here, it is shown that they also display drastically different rates of long-run convergence.




87
      As is well known from standard results in the Theory on Stochastic Processes (see e.g. Karlin and Taylor (1975)), convergence towards the invariant distribution is always at
      an exponential rate.
152                                                          Chapter 5. Stochastic Evolution


To simplify matters, the analysis will focus on the especially simple speciﬁcation of the selection dynamics in which
adjustment is assumed instantaneous.88 Thus (as postulated in Section 5.2 too) the selection component of the
evolutionary process is assumed to be as follows:




                                                                                                                                                     (5.25)
Relying on previous notation, it becomes




                                                                                                                                                     (5.26)
when matching noise is made to vanish by making the number of rounds grow unboundedly.
The contrast between the two scenarios is then established by the following two respective Propositions.
Proposition 12Under the conditions speciﬁed in Theorem 19, suppose that the selection dynamics is given by (5.25) for any
given            such that, for small enough ε > 0, the maximum expected time τ*at which the process ﬁrst visits the unique long-run
state ω = (n, 0) satisﬁes τ* ≤ α ε−2.
       1



Proposition 13Under the conditions speciﬁed in Theorem 20, suppose that the selection dynamics is given by (5.26).
Let                and denote Δ ≡ |a − b|. ∃ β > 0 such that, for small enough ε > 0, the maximum expected time at which the process
ﬁrst visits the unique long-run state ω2 = (0, n) satisﬁes          .
Proof of Proposition 12. Given any ε > 0, consider an evolutionary process as described, with the only exception that
it makes the state ω1 absorbing. Denote by Qε(·, ·) its corresponding transition matrix. The proof of the result easily
follows from the following claim.
         Claim 3: Let ω = (z, n − z) ∈ Ω be any arbitrary state of the process. There is some η > 0, independent of ε and
         ω, such that                  .
To prove this claim, let ω′ = (z′, n − z′) be any state for which Q0(ω, ω′) > 0, i.e. a transition from ω may occur without
resorting to mutation. Denote by z″ the least positive even number such that z″ ≥ z′. Obviously, z″ − z′ ≤ 2, which
implies that at most two mutations will transform state ω′ into a state where there is some positive and even number of
players adopting strategy s1. Given that some such state has been reached, assume that all s1-adopters are matched
among themselves in each of the v matching rounds. In this event,




88
      The gist of the conclusions, however, is fully general, as can be found formally proved in Ellison (1993) or Robson and Vega-Redondo (1996).
                                                  5.6. Rate of Convergence and Interaction Pattern                                                                              153


the ensuing transition must be towards state ω1 with probability one, in view of (5.25). This implies that, in at most two
periods, the process with transition matrix Qε will be absorbed at ω1 with a probability that, for ε small, is of an order
no lower than ε2. That is, it is bounded below by some ηω ε2 for some ηω > 0 independent of ε. The proof of the claim is
then completed by making η = minω ε Ω {ηω}, which is positive due to the ﬁniteness of the state space.
Claim 3 implies that the maximum expected time to absorption of the process with transition matrix Qε (an upper
bound for τ*) must itself be bounded above by twice that of a Poisson process with arrival rate η ε2. That is, it must be
bounded above by 2(η ε2)−1. Choosing α = 2η−1, the proof of the Proposition is complete. ▪
Proof of Proposition 13. To ﬁnd a lower bound on the maximum expected time of transition to state ω2, consider
speciﬁcally that corresponding to the transition from ω1. In view of (5.26) and the considerations explained in the proof
of Theorem 20, this transition will require a number of mutations no smaller than γ n − Δ. (Fewer mutations from
state ω1 will immediately return the process to this state next period.) For small ε, the probability of this event is of
order no higher than εγ n − Δ. That is, there is some ζ > 0 such that this probability is bounded above by ζ εγ n − Δ for
sufﬁciently small ε. Consequently, the expected time for this event to materialize (again, bounding it by that of a
corresponding Poisson process) is (ζ εγ n − Δ)−1. Choosing β = ζ−1, the proof of the Proposition is complete. ▪
Contrasting Propositions 12 and 13, one observes a qualitatively very signiﬁcant difference between the speeds of
convergence prevailing in each case. Whereas in the context of Proposition 12, the order in ε of the maximum
expected waiting time does not depend on population size,89 it does so in an afﬁne increasing way in the context of
Proposition 13. If the population is large (but given),90 this amounts to a substantial difference in the rate of long-run
convergence between both cases. This formalizes in a precise way the heuristic role formerly attributed to matching
noise as a potential “ampliﬁer” (a biased one, however) of mutational noise – cf. Subsection 5.4.3.




89                                                                                                                                               −2
     In the general case where selection adjustment is not necessarily instantaneous, this expected waiting time may be of order lower than ε         , but it still is independent of
     population size.
90
     Of course, if one allows population size to grow, this will have an effect on matching-induced noise analogous to that of increasing the number of rounds. In that case, again
     one would have to compare the different rates at which population grows (with its corresponding effect on matching noise) and the rate at which the mutation probability
     becomes small.
154                                                            Chapter 5. Stochastic Evolution


5.6.2 Local Interaction
The role played by population size in the context of Proposition 13 (with small matching noise) seems inherently
associated with the fact that interaction and selection are postulated to be fully global phenomena. In most real-world
contexts, however, it seems more appropriate to conceive both of these components of the model as having quite a
local dimension. Agents, that is, usually tend to interact more often with a certain subset of neighbours, also tailoring
their action adjustments to the pay-offs and actions these neighbours display.
This, to be sure, need not eliminate matching uncertainty. For any given agent, it will simply be narrowed down to his
respective set of “neighbours”. Thus, local interaction is still conceptually consistent with the presence of signiﬁcant
matching noise. And if this is the case, the analysis on the long-run performance of the model which was conducted in
Subsection 5.4.1 remains essentially unaffected. Even the conclusion of Proposition 12 on relatively fast (population-
independent) rate of long-run convergence applies without any signiﬁcant variation.
In contrast, one would expect that the analysis conducted for small matching noise would be signiﬁcantly affected by
the consideration of a local interaction pattern. As suggested above, at least the result on the rate of convergence
established by Proposition 13 appears to be crucially dependent on the postulated pattern of global interaction.
To explore this issue, a very simple framework of local interaction is now proposed, similar to that of Ellison (1993).
Within this model, the previous intuitive conjecture is conﬁrmed, i.e. the rate of long-run convergence is substantially
faster. On the other hand, the nature of the long-run outcome is also affected since, as explained below, the force of
risk-dominance as a selection criterion becomes somewhat weakened.
Assume that the population is arranged in a “circle”, with each individual i = 1, 2, . . . , n having exactly two
neighbours: agent [i − 1] and agent [i + 1], where [·] denotes “modulo n”. (That is, [i] = i for i = 1, 2, . . . , n, but [0] = n
and [n + 1] = 1.) Every individual meets each one of his two neighbours some arbitrarily given number of times (the
same number of times for each neighbour)91 in order to play a game as described in Table 15.
In this context, the state space cannot be formulated any longer in an anonymous way. Now, the state of the system
must specify the strategy adopted by each (well-identiﬁed) player. Thus, the state space is made equal to Θ = {s1, s2}n
where each θ ε Θ is the n-tuple of current strategies adopted by each player.
Let us now postulate a selection dynamics that is formulated in the spirit of




91
      This is assumed in order to remove all matching uncertainty in the simplest manner, thus allowing us to contrast the present analysis with that carried out in Subsection
      5.4.2. This assumption could again be rationalized by a suitable application of the Law of Large Numbers if the number of matching rounds is taken to be large enough and
      the probability that each individual meets either of his neighbours is identical.
                                                   5.6. Rate of Convergence and Interaction Pattern                                                                          155


(5.26) but reﬂects the local nature of the interaction. Denote by B̂i (θt) the new strategy adopted by player i at the
selection phase in t + 1 when the previous state is θt. Furthermore, let             and           stand for the respective
average pay-offs earned by strategies s1 and s2 in the neighbourhood of player i (that is, by players [i − 1], [i] and [i + 1]),
with the convention that they equal −∞ if the corresponding strategy is not adopted in this neighbourhood.92 The
selection component of the dynamics is simply formulated as follows:




                                                                                                                                                                          (5.27)
for each i = 1, 2, . . . , n.
As in the original model, assume that, every period, each player mutates with an independent probability ε just before
entering any round of matching and play. This renders the evolutionary process ergodic, its unique invariant
distribution being denoted by λε (·) ∈ Δ (Θ). Again, the analysis will focus on the limit invariant distribution obtained
when the mutation probability ε becomes arbitrarily small.
As advanced, not only the rate of convergence but also the long-run outcome is affected by the local nature of the
interaction. As before, there is a tendency for risk-dominance to prevail over efﬁciency, although in a weaker form.
Now, the inefﬁcient equilibrium will only be selected in the long run when the efﬁcient one is substantially more
“risky” than before. Speciﬁcally, it turns out that in order for θ2 ≡ (s2, s2, . . . , s2) to be the unique stochastically stable
state the following inequality (in terms of the pay-offs speciﬁed in Table 15) must hold:



                                                                                                                                                                          (5.28)
It is easy to check that this inequality implies that b + c > a + d, i.e. the strategy s2 is risk-dominant. In general, of
course, (5.28) is consistent with s1 being the efﬁcient strategy, i.e. a > b.
A combined statement on both the long-run outcome and the associated rate of long-run convergence for the present
context is contained in the following result.
Theorem 21Assume (5.8), (5.28), n ≥ 5, and let θ2be the monomorphic state where all players adopt s2. Then:
     (a) limε → 0 λε (θ2) = 1.
     (b) ∃ χ > 0 such that, for small enough ε > 0, the maximum expected time ˜τ at which the process ﬁrst visits the (unique) long-run
         state θ2satisﬁes ˜τ ≤ χ ε−2.
Proof. Since it relies on arguments very analogous to those used in previous analysis, the proof will be merely
sketched. To show (a), the main observation




92
      Note that, as was also generally the case in (5.11), the average pay-offs for each strategy are not computed over the same number of occurrences. In particular, it can never
      be the case in the present context that the two strategies are played the same number of times in any of the three-individual neighbourhoods.
156                                           Chapter 5. Stochastic Evolution


to make is that, as long as there is one connected string of (at least two) neighbouring individuals choosing s2, (5.27)
and (5.28) imply:
       Claim 4: Every s1-adopter i who is adjacent to such an s2-string will adjust his strategy towards s2.
This claim follows from the following straightforward computations. In the neighbourhood of i, the average pay-off to
strategy     , is bounded above by               if one of his neighbours also does s1 (which will be labelled Case 1) or
simply equals 2d otherwise (Case 2). On the other hand, the average pay-off to strategy s2 in the neighbourhood of ,
is either (b + c) in Case 1, or bounded below by                       in Case 2. Under (5.28), it can easily be veriﬁed
that          in either Case 1 or Case 2.
       Claim 5: Every s2-adopter j who is in the frontier of the s2-string (in particular, has neighbours doing different
       strategies on each side) will stay with strategy s2.
This claim follows from the following two facts. On the one hand,        is bounded above by a + d, the maximum pay-
off which can be achieved by j's only neighbour choosing s1. On the other hand,                is bounded below by
                       , where the actual value achieved by this expression depends on whether individual j forms part
of an s2-string with two or more individuals. In any case, again (5.28) implies       .
The previous two claims indicate that just two adjacent mutations can trigger a transition from θ1 = (s1, s1, . . . , s1) to θ2 =
(s2, s2, . . . , s2). However, the converse transition will require more than two mutations if n ≥ 5. (In this case, only two
mutations from θ2 will always leave a string of at least two individuals playing s2.) Proceeding along the lines used in
previous proofs, one can rely on these two insights to prove that, for small ε > 0, the unique long-run outcome of the
process is indeed θ2.
Finally, the fact that a two-individual string of s2-adopters is by itself enough to cause a transition to state θ2 guarantees
(by an argument fully analogous to that used in Proposition 12) that the maximum expected waiting time for visiting
the long-run state θ2 is of the order ε−2, for small ε. This completes the proof. ▪
In contrast with Theorem 20, the previous result conﬁrms the intuition that a local interaction pattern will increase
substantially the rate of long-run convergence. In particular, Theorem 21 shows that this rate becomes independent of
population size, an upper bound on it being established which is of the same order as that established by Proposition
12 for the large matching-noise scenario.
The previous result also demands a more stringent requirement of risk domination for an inefﬁcient outcome to be
selected in the long run. (Note, of course,
                                                       5.7. The Evolution of Walrasian Behaviour                                                                            157


that the violation of (5.28) is consistent with the usual risk-dominance criterion reﬂected by the inequality b + c > a +
d). In fact, it is not difﬁcult to show that, in the local-interaction context considered here, the efﬁcient outcome may be
selected in the long run even though the alternative equilibrium is risk-dominant.


5.7 The Evolution of Walrasian Behaviour
We close this chapter with a simple evolutionary model of Cournotian oligopoly, taken from Vega-Redondo (1996c).93
The purpose of this application is twofold. First, it illustrates the wide applicability of evolutionary analysis to
economic contexts, well beyond the stylized random-matching scenarios used above to introduce the basic ideas.
Second, it shows that evolutionary processes may represent much more than mere equilibrium-selection devices, and
have the potential of inducing interesting non-Nash behaviour.94
The context is as described in Subsection 2.7.2. A set of ﬁrms N = {1, 2, . . . , n} is involved in a market for an
homogeneous product with an inverse-demand function P : ℜ+ → ℜ+, assumed decreasing (i.e. satisfying the Law of
Demand). Every ﬁrm i = 1, 2, . . . , n has an identical cost function C : ℜ+ → ℜ+ which determines its cost C(xi) of
producing each possible output xi. No particular condition is demanded from this cost function other than it should
allow for the existence of a symmetric Walrasian equilibrium. (Thus, for example, it cannot display decreasing marginal
costs throughout.)
A symmetric Walrasian equilibrium (cf. (2.19)) is deﬁned as a monomorphic conﬁguration where the output xw
produced by each ﬁrm satisﬁes:



                                                                                                                                                                         (5.29)
that is, maximizes its proﬁts, taking the induced market-clearing price as given. (The argument used in the proof below
guarantees that, provided it exists, a symmetric Walrasian equilibrium is unique.)
In order to remain within the context of a ﬁnite-state Markov chain, it is assumed that ﬁrms have to choose their
output from a common real grid Γ = {0, δ, 2δ, . . . , rδ} for any arbitrary δ > 0 and . The only requirement is that
x ∈ Γ.
 w



As time proceeds, ﬁrms are postulated to adjust their output by simply mimicking that of a ﬁrm which is earning
(i.e. has earned the previous period) the highest proﬁt. Occasionally, they also mutate. To deﬁne this combined
dynamics precisely, some notation is ﬁrst introduced.




93
     Rhode and Stegeman (1995) develop a similar application focused on a two-ﬁrm (i.e. duopoly) scenario.
94
     In a sense, what is done here can be seen as a dynamic elaboration of the analysis carried out in Subsection 2.7.2 on the “evolutionary stability” of Walrasian behaviour. In
     contrast with our former static analysis, this behaviour is now shown to be uniquely evolutionarily stable (in the stochastic sense).
158                                                           Chapter 5. Stochastic Evolution


At each t = 0, 1, 2, . . . , the state of the system ωt is identiﬁed with the current output proﬁle (x1t, x2t, . . . , xnt).
Associated with it, the corresponding vector of proﬁts πt = (π1t, π2t, . . . , πnt) is given by




On the basis of these realized proﬁts, the set of “best outputs” at t is deﬁned as




Selection dynamics is formulated as follows. At every t, each ﬁrm i = 1, 2, . . . , n enjoys a common
independent probability p ∈ (0, 1) of revising its former output. In this event, it is assumed to choose any output from
the set Bt−1, i.e. the previous set of best outputs, according to a certain probability distribution with full support.95
On the other hand, mutation is formalized as usual. At every t, and once the selection adjustment has been completed,
every ﬁrm changes its output with some probability ε > 0, the new output being selected according to some given
probability distribution with full support on Γ. After selection and mutation have been completed, pay-offs materialize,
which then leads into the ensuing period.
Given ε > 0, let με (·) denote the unique invariant distribution associated with the corresponding ergodic process. The
following result establishes a clear-cut identity between its (unique) stochastically stable outcome and Walrasian
behaviour.
Proposition 14 (Vega-Redondo (1996c)) Let                               = (xw, xw, . . . , xw). Then, limε → 0 με ( ) = 1.
Proof. The argument relies on the graph-theoretic techniques of Freidlin and Wentzel (1984) used throughout this
chapter. The previous concepts and notation are readily adapted to the present context. On this basis, the proof of the
Proposition follows from the following three Lemmas and the usual complementary arguments.
Lemma 11Some set A ⊂ Ω is a limit set of the mutation-free dynamics if, and only if, it is a singleton {ω} consisting of a monomorphic
state ω (i.e. ω = (q, q, . . . , q) for some common q ∈ Γ).
Lemma 12There exists an -tree                         such that c(Ŷ) = r, where recall that r + 1 is the cardinality of the grid Γ.
Lemma 13For all monomorphic states ˜ω ≠                         , any ˜ω-tree             has c(Ỹ) ≥ r + 1.




95
      As explained in Vega-Redondo (1996c), this simple formulation can be substantially generalized.
                                       5.7. The Evolution of Walrasian Behaviour                                           159


Proof of Lemma 11 The sufﬁciency part is obvious from the speciﬁcation of the process (i.e. if a state is monomorphic,
no strategy revision possibilities will alter the state). On the other hand, the necessity follows from the fact that strategy
revision is a ﬁrm-independent phenomenon whose probability density at each t is assumed to have full support on the
(common) set Bt−1. Therefore, there is always positive probability (bounded above zero, since the state space is ﬁnite)
that all ﬁrms adjust their strategy towards the same output.
Proof of Lemma 12. Let ωx = (x, . . . , x) be any monomorphic (limit) state with x ≠ xw. It is ﬁrst claimed that there exists a
path yx linking ωx to such that c(yx) = 1.
Let ω′x be a state where all ﬁrms choose output x except for a single (arbitrary) ﬁrm which chooses the Walrasian
output xw. Make yx = {(ωx, ω′x), (ω′x, )}. Obviously, c(ωx, ω′x) = 1. To establish now that c(ω′x, ) = 0, it is enough to
show that in state ω′x the ﬁrm that produces xw obtains strictly higher proﬁts than the rest. That is,



                                                                                                                        (5.30)
The argument is quite similar to that developed in Subsection 2.7.2. Since P(·) is strictly decreasing, one has:



Or equivalently,



Subtracting the term [C(x) + C(xw)] from both sides of the above expression it follows that




                                                                                                                        (5.31)
From (5.29), the ﬁrst term in the LHS of (5.31) is no smaller than the ﬁrst term in its RHS. Therefore, it must be the
case that the second term in the LHS of this expression is strictly smaller than its second term in the RHS. But this is
just what (5.30) expresses, which conﬁrms the desired claim.
It is now veriﬁed that there is a -tree Ŷ whose cost c(Ŷ) = r. To construct such a tree consider ﬁrst the 2r links {(ωx,
ω′x), (ω′x, ) : x ≠ xw}. The aggregate cost of these links is r. But then, since monomorphic states are the only limit sets
of the mutation-free dynamics (recall above), the remaining states can be linked to them in a costless manner to
complete a full -tree from the above set of links with a total cost of r. This completes the proof of the Lemma.
Proof of Lemma 13. Let ˜ω = (x̃, x̃, . . . , x̃), x̃ ≠ xw, be some limit (monomorphic) state of the mutation-free dynamics.
Every ˜ω-tree Ỹ must incur a cost c(Ỹ) ≥ r since at least one mutation is needed to escape every one of the r
160                                                          Chapter 5. Stochastic Evolution


limit sets {{ωx} : x ≠ x̃}. But, in fact, the cost of escaping the limit set {xw} must be no smaller than two. This follows
from the derivations carried out in Subsection 2.7.2, which show that in a context where all but one ﬁrm produce
output xw, this single ﬁrm obtains a proﬁt lower than the rest. Thus, at least two mutations are necessary to escape the
limit set {xw}, leading to r + 1 as the lower bound for c(Ỹ). This completes the proof of the Lemma (and the
Proposition). ▪
As mentioned, the previous result illustrates the potential of evolutionary analysis for the study of classical economic
problems. Theorem 21, in particular, provides a new evolutionary foundation for Walrasian behaviour which is very
different from other traditional approaches found in the literature. These approaches – both those based on Co-
operative and those based on Non-co-operative Game Theory96 – have aimed at characterizing those circumstances in
which, in a general sense, there is no “monopoly power” (i.e. no agent has the possibility of affecting his terms of
trade). In essence, this has been seen to rely crucially on the existence of a large enough population, a consideration
which is fully absent from the present analysis. (The conclusion obtained in Proposition 14 is independent of the
number of ﬁrms in the market.)




96
      See e.g. Hildenbrand (1974) or Mas-Colell (1980) for a discussion of the co-operative and non-co-operative approaches respectively.
                  6 Evolution, Expectations, and Drift

6.1 Introduction
The approach undertaken in the previous chapter explored a stochastic evolutionary framework which is a direct
analogue of biological (Darwinian) processes. In particular, the postulated selection dynamics involved the requirement
that any strategy which performs better (on average) should tend to see its frequency increase at the expense of other
worse-performing strategies. Some simple, but appealing, assumptions on the underlying behaviour of agents would
induce such a formulation. For example, one could simply assume (as in Section 5.7) that players tend to imitate those
strategies whose average pay-off is highest.
There are, however, many economic applications where it is natural to allow for agents who rely on richer, more
sophisticated, considerations in shaping their behaviour. In consonance with much of traditional economic analysis, a
natural option in this respect is to consider agents who can form some (certainly not “rational”) expectations on the
future course of the system, then reacting optimally to them. Recent evolutionary literature largely focuses on what
appears to be the ﬁrst, most straightforward possibility of addressing this issue. It postulates that agents simply look at
the immediate past and use it as a one-point predictor of what will happen next. Players, in other words, are assumed to
form what is customarily labelled static expectations.
This approach encounters some difﬁculties if the immediate past does not necessarily provide a sufﬁcient basis for the
formation of a complete range of expectations. This will be the case, for example, in most extensive-form games where
some of the information sets of the game may not have been reached in the previous period. Since many interesting
economic applications will display this feature (recall, for example, the two-stage cheap talk games discussed in Section
2.8), an extension of the static-expectations approach will be needed to deal with this problem.
162                                                 Chapter 6. Evolution, Expectations, and Drift


As a further extension, one would also want to consider the possibility that agents, aware that they are in an ever-
changing context, may want to form dynamic (i.e. not necessarily static) expectations on the evolution of the process.
Of course, in shaping such expectations, history should still continue to play an important role. Only if some
requirement of “historical consistency” is imposed on the expectation-formation rule may one hope that the model
will exhibit any interesting long-run regularities. However, in contrast with the strong rigidity induced by static
expectations, “dynamic” expectations introduce new degrees of freedom whose implications are worth exploring in
some detail.
The key new phenomenon which will be seen to play a crucial role when agents rely on dynamic expectations is some
notion of (expectational) drift. In fact, a similar idea happens to underlie some of our discussion of extensive-form games
also, even when the expectation-formation rule is static. The role of drift in these models is very analogous to that often
attributed to genetic drift in biological contexts. As stressed by many biologists (see Kimura (1983)), drift enhances
substantially the adaptability of the system by allowing for the build-up of initially neutral, but later on decisive,
“material” for fruitful selection.
Our approach in this chapter will be as follows. First, in the next section, a general framework is proposed that
encompasses all the different speciﬁc scenarios which are subsequently studied. Then, specializing this general
framework in different directions (different updating rules, alternative types of games, some examples) a diverse set of
issues is formally addressed: equilibrium selection and forward induction, bargaining, equilibrium volatility, etc. The
chapter closes with a certain recapitulation which compares the different behavioural paradigms considered and
proposes some stylized discussion on the “evolution of smartness”, i.e. the issue of how (or whether) evolutionary
processes may select among alternative degrees of players' sophistication.


6.2 General Theoretical Framework
In contrast with Chapter 5, the context here is assumed to involve two different populations (or types), 1 and 2, each
assumed of equal size n.97 In every period t = 1, 2, . . . , members of both populations are assumed randomly matched
in pairs (one from each population, some given number of independent rounds)98 in order to play a certain bilateral
game G in extensive form with perfect recall.99




97
      The reason for contemplating two different populations here is to accommodate a wider number of applications which require this feature (see below). In cases where two
      populations are not indispensable (e.g. in Subsections 6.4.1 or 6.6.3), the results obtained carry over to the single-population scenario in an obvious fashion.
98
      The particular number of rounds played every period (possibly “inﬁnite”, which would eliminate all matching uncertainty) is inconsequential for the present approach.
99
      See e.g. Fudenberg and Tirole (1991: 77–82) for the standard formal description of a game in extensive form.
                                                            6.2 General Theoretical Framework                                                                            163


The (ﬁnite) strategy set of each population is respectively denoted by Si, pay-off functions given by πi : S1 × S2 → ℜ.
Let Ui, i = 1, 2, denote the collection of information sets of each player type in game G, and let A(u) stand for the set
of actions available at each of its information sets u ∈ Ui. Every player of type j = 3 − i is postulated to have a pattern
of expectations (a collection of probability densities) over each of the sets A(u), u ∈ Ui. These expectations specify the
subjective probabilities which a player of type j attributes to his opponent playing each of the actions available in the
latter's information sets.
Expectations are taken to depend on history in the following two different ways.
  (a) They are formulated as a pattern of expectations conditional on every possible past history. It is precisely such
      conditioning on history which will allow for genuinely dynamic expectations.
  (b) Of course, expectations are also assumed updated on the basis of past history. This is reﬂected by the alternative
      postulates of “historical consistency” contemplated below.
Even though the approach undertaken here may be extended to the consideration of any ﬁnite strings of past
history, nothing essential is lost for our purposes if, for the sake of simplicity, we restrict ourselves to two-period
histories, i.e. histories which involve just the current and immediately preceding periods. Thus, simplifying the
theoretical framework in this fashion, a history up to (and including) t just requires the speciﬁcation of which actions
have been taken by all players in periods t and t − 1. For each population i = 1, 2, denote




and




Then, the set H of all possible (two-period) histories may be identiﬁed with an appropriate subset100 of [X1 × X2] × [X1
× X2]. For any given t, a typical element of it,                       , includes the vectors and         specifying, for
each population i = 1, 2, how many individuals have played each action a ∈ A in periods t and t − 1, respectively.
                                                                                   i



For each population i = 1, 2, a pattern of expectations is deﬁned as a collection




100
      If the game G is simultaneous, then the set of all possible histories can be exactly identiﬁed with (X̂1 × X̂2 ) × (X̂1 × X̂2 ), where                      . In general,
      however, the restrictions on Xi characterizing admissible histories must be tailored to the speciﬁc details of the extensive-form game under consideration.
164                                   Chapter 6. Evolution, Expectations, and Drift


which, contingent on every possible prior history h ∈ H, speciﬁes the subjective probability ei(a | h) that a type-i player
currently attributes to his opponent choosing (or planning to choose) action a ∈ A(u) if the corresponding information
set u ∈ Uj is reached. Note of course that, for any given u ∈ Uj, we must have




To remain within a ﬁnite set-up, it will be assumed that the values of any ei(· | h) must belong to a certain (arbitrarily
ﬁne) grid, which always includes (at least) every point of the form r/q where r = 0, 1, 2, . . . , q and q = 1, 2, . . . , n.
(That is, it includes all conceivable “fractions” associated with any subset of players in each population.)
Let Ei, i = 1, 2, denote the set of admissible patterns of expectations for population i and denote by Ψi = Si × Ei the
corresponding set of possible individual characteristics (i.e. pairs consisting of a strategy and an expectation pattern). For
any given t, the current state of the process is identiﬁed with the tuple                                                 which
speciﬁes the current history ht and the number of individuals                displaying every possible characteristic ψi in each
population i = 1, 2. The set of all such possible states will be denoted by Ω.
The dynamics of the process may be decomposed in the following two sequential components: (i) expectation
updating; (ii) strategy adjustment.
(i) Expectation updating
For each population i = 1, 2, expectation patterns are assumed updated on the basis of some (time-invariant) updating
rule of the form




                                                                                                                           (6.1)
which speciﬁes the expectation pattern held at t by any given agent of population i whose preceding pattern was ei,
given that prior history is ht−1. The speciﬁc requirements demanded from such Fi(·) will depend on the particular
scenario under consideration. For example, if the expectations are assumed static and the game is simultaneous
(Section 6.4 below), the mapping Fi(·) becomes a trivial projection. If, instead, the game and/or expectations are
assumed to be of a dynamic nature (Sections 6.5 and 6.6), the updating rule will generally be a much more complicated
object. Each of these possibilities is formulated and discussed in detail when introduced below.
(ii) Strategy adjustment
Every period t, each individual is assumed to enjoy a common and independent probability p ∈ (0, 1) of being able to
revise his strategy. In that event, and given any pattern of expectations ei which the agent happens to hold at t, he
chooses a new strategy which is a best response to the beliefs ei(· | ht−1) induced by the prior history ht−1. If, abusing
previous notation, we simply
                                                                      6.3. Static Expectations                                                                            165


denote by πi(si; ei, ht−1) the expected pay-off for strategy si induced by the pattern of expectations ei and history ht−1, the
set of such best responses at t is given by




If this set is not a singleton, all of its elements are assumed chosen, say, with equal probability, independently across
players.
Strategy adjustment and expectation updating embody the selection component of the evolutionary dynamics. As
before, it will be postulated that, before play is conducted in every period,101 each individual is subject to a common
independent probability ε > 0 of mutation. In this event, his new characteristic is selected from the corresponding set
Ψi according to some given (time-invariant) probability distribution with full support.
Mutation, as before, will have the effect of making the process ergodic. Its unique invariant distribution – an element
of Δ(Ω) – will be denoted by με, the focus being again on its limit when ε becomes arbitrarily small.


6.3 Static Expectations
Young (1993a) was the ﬁrst to introduce a process of expectation formation into stochastic evolutionary models in an
explicit manner. His framework is somewhat different from the one proposed above. Speciﬁcally, he considers a
context where, every period, only two individuals are randomly drawn to play a certain bilateral game. In deciding what
to do, each of these two players looks back at history in order to shape his expectations on the opponent's strategy.
Both of them are assumed to obtain a ﬁnite (non-exhaustive) sample of past (ﬁnite)102 history. Once this sample is
obtained, they have their subjective probabilities simply match the sample frequencies, then playing a best response to
these expectations.
In contrast with the theoretical framework presented above, Young's sampling-based formulation introduces a
mechanism for expectation formation that is of a stochastic nature. But except for this feature (which could be made
consistent with our general framework by postulating a random updating function in (6.1)), Young's approach
essentially reﬂects a static-like updating rule. To analyse in




101
      This formulation of mutation is proposed in order to keep the formal parallelism with what was postulated in the previous chapter. However, many other speciﬁcations are
      possible e.g. a natural one in the present context would be to restrict mutation to operate exclusively on the expectation component of individual's characteristics.
102
      As before, history is truncated in order to preserve the ﬁnite and Markovian nature of the process, any past realization of the process beyond a certain point taken to be
      either unavailable or ignored.
166                                                Chapter 6. Evolution, Expectations, and Drift


a simple fashion the implications of such a static-expectations approach within our proposed framework, we postulate:
          Static Expectations (SE) Given any history                                                           and some former pattern of expectations
          ei ∈ Ei (i = 1, 2) the new (updated) expectation pattern




          satisﬁes the following condition: ∀ a ∈ A(u), u ∈ Uj, j = 3 − i,




          Moreover, êi (· | h̃) = ei (· | h̃), for all h̃ ≠ h.
Thus, verbally, the former postulate speciﬁes that agents update their relevant expectations (i.e. those contingent on
prevailing history) by simply “matching” the action frequencies just observed at every information set. If no instance of
play is observed at some information set, the previous associated beliefs remain unchanged. Notice that this
formulation implicitly assumes that agents carry out their considerations independently at each information set. Thus,
in particular, they are unable to detect any correlation of behaviour across them. If such correlation could be observed,
the above formulation should be modiﬁed, this having no essential effect on our future analysis.


6.4 Simultaneous Contexts
6.4.1 Co-Ordination Games
To explore the implications of SE, we start by focusing on the simple co-ordination case studied in Section 5.4.
Suppose that every pair of matched individuals plays a symmetric103 (2 × 2)-game as described by Table 15 with



In line with the conclusions obtained by Young (1993a), the next result shows that Postulate SE above (i.e. static
expectations) yields the long-run selection of the risk-dominant equilibrium.
Theorem 22Assume SE, c + b > a + d, and n even. Let                                                                                     represent a typical history of
the process. Then, any




103
      Even though the present two-population context would allow the study of asymmetric games, this is postponed to Subsection 6.4.2 below. Here, the focus is on the same
      symmetric context studied in Ch. 5 in order to facilitate the comparison with previous analysis.
                                                                       6.4. Simultaneous Contexts                                                                             167


given                        displays limε → 0 με(˜ω) > 0 if, and only if, h̃ = [(0, n), (0, n)]2and




Proof. Despite their different frameworks, the proof here is quite similar to that of Theorem 20. In order to emphasize
their parallelisms, we use the same notation throughout, even though the objects to which it refers are obviously
different. No confusion should arise.
Let Tε be the transition matrix of the evolutionary process induced by some given ε > 0. Distance and cost functions
on Ω × Ω are deﬁned as follows:104




                                                                                                                     (6.2)
here note that, unlike the case of the scenario studied in Chapter 5, one may well now have Tε(ω, ) = 0 if the histories
included in ω and are not consistent, i.e. if the ﬁrst component of ω (i.e. its “current” outcome) is not identical to the
second component of (i.e. its “former” outcome). Based on the function d(·, ·), a cost function for each possible
transition is deﬁned as follows:




where, as before, T0(·) stands for the transition-probability matrix of the mutation-free dynamics.                                                                          (6.3)
Let h1 ≡ [(n, 0), (n, 0)]2 and h2 ≡ [(0, n), (0, n)]2, i.e. the constant histories induced by the two populations all playing
either one strategy or the other for two consecutive periods. For each strategy, s1 and s2, and each population i = 1, 2,
deﬁne




and then consider, for each q = 1, 2, the following two subsets of the state space:                                                                                          (6.4)




                                                                                                                                                                             (6.5)
Only states in either g1 or g2 can belong to absorbing sets of the mutation-free dynamics. To verify this, it is enough to
conﬁrm that, from any state ωt prevailing at some t, there is positive probability (bounded above zero)



 104
       The interpretation here bears a close analogy to that given before, i.e., provided there is a feasible transition from ω to  , d (ω,   ) indicates the number of agents whose
       characteristics differ between the former and the latter states. Note that the factor          simply eliminates double counting.
168                                   Chapter 6. Evolution, Expectations, and Drift


that the mutation-free process enters one of these two sets in some prespeciﬁed number of periods and remains there.
Suppose, for example, that each of the two populations fully adjusts in turn (say, ﬁrst the whole of population 1 at t+1,
then everyone of population 2 at t+2). This pattern has positive probability, bounded above zero, because p ∈ (0, 1).
Since every individual shares the same relevant expectations at the time of adjustment, it may be assumed that (at least
with some given positive probability) every one of them in each population adjusts towards the same strategy. This, at t
+ 2, leads to a state where every agent in both populations chooses the same strategy. From this state, that prevailing in
the ensuing period t + 3 must belong to either g1 or g2. But then, since every state in either g1 or g2 is stationary in the
mutation-free dynamics, the process will trivially remain in each of these sets in the absence of mutation. This,
incidentally, also conﬁrms the validity of the statement reciprocal to the one initially aimed at. That is, every state in g1 ∪
g2 belongs to an absorbing set (in fact, a singleton) of the mutation-free dynamics.
From the usual considerations, the proof of the theorem then follows from the two following Lemmas. Let r = card(g1)
+ card(g2).
Lemma 14 There exists some       ∈ g2with an    -tree Ŷ such that               .
Lemma 15 For any        ∈ g1, every   -tree Ŷ has                   .
Proof of Lemma 14: Let ω ∈ g1. First, it is argued that there is a four-link path y = {(ω, ω′), (ω′, ω″), (ω″, ω″′), (ω″′, )}
leading from ω to some state ∈ g2 such that                   . To verify this claim, choose ω′ to differ from state ω only in
that individuals of one of the populations, say population 1, mutate towards strategy s2, expectations then being
adjusted according to the updating rule. From (6.3),                     . Then, from state ω′ the mutation-free dynamics
attributes positive probability to the transition towards a state ω″ where all individuals of population 1 stay with their
former strategy — due to inertia, whose (marginal) probability is (1 − p)n — but all individuals of population 2 have the
opportunity of adjusting their strategy. In that case, the assumption that c + b > a + d implies that all of them will shift
to strategy s2. This transition has therefore a cost c(ω′, ω″) = 0. Then, since the transition towards the state ω″′ where the
remaining       individuals of population 1 switch to s2 also has positive probability according to the mutation-free
dynamics, it also follows that c(ω″, ω″′) = 0. Finally, if       simply denotes the state following ω″′ when no individual
mutates (and therefore c(ω″, ) = 0),          ∈ g2 as desired.
To complete the proof of the Lemma, one just needs to observe that the path y just constructed can be completed to
form a full -tree at an additional cost of r − 2. First, notice that all states in g1\ {ω} can be directly or indirectly
linked to ω with a cost equal to card(g1) − 1 through a sub-tree Ý (restricted to g1) which involves only one-step
mutations. This is due to the fact that all states in g1 only differ in expectations contingent on “unobserved” histories.
                                                6.4. Simultaneous Contexts                                                169


Analogously, all states in g2\ { } can be directly or indirectly linked to with a cost equal to card(g2) − 1 through a
sub-tree Y̆ on g2 with only one-step mutations. Since all the remaining states in Ω \ (g1 ∪ g2) are just transitory in the
mutation-free dynamics, it is clear that y ∪ Ý ∪ ✓Y can be further completed to form a full -tree at no extra cost, i.e.
with a total cost of                              . This completes the proof of Lemma 14.
Proof of Lemma 15: Let ∈ g1 and suppose, for the sake of contradiction, that there exists some -tree Ŷ whose cost
               . First note that since every state in g1 ∪ g2 is a stationary state of the mutation-free dynamics, at least one
mutation is required to exit it. This implies that every -tree must incur a cost no smaller than r − 1 (i.e. at least a cost
of 1 associated with each of the arrows originating in the states belonging to (g1 ∪ g2)\ { }). One the other hand,
observe as well that any       -tree must involve a path y linking some state in g2 to some other state in g1. Since it is
immediately seen that any such path must have a cost                     , a contradiction results. This completes the proof of
the Lemma and the Theorem. ▪
In line with Theorem 20, the previous result establishes a role for risk-dominance as a criterion for equilibrium
selection in simple (2 × 2)-games when players optimize relative to static expectations. As will be discussed below
(Subsection 6.5.2), a certain “dynamic” enrichment of the former scenario (one which allows for a prior outside
option) leads back to efﬁciency as the selection criterion in simple co-ordination games — recall Theorem 19.
One particular aspect of the previous result is worth some attention, since it will reappear below with much more
substantial implications. Even though Theorem 22 fully narrows down long-run behaviour, it leads nevertheless to a
large degree of “expectation indeterminacy”. Speciﬁcally, it only imposes constraints on those beliefs which are
contingent on established long-run history. For any other histories, no discipline is imposed on the pattern of
expectations since, naturally, the updating process can only be responsive to those histories which are being observed.
In principle, therefore, one may well have a substantial range of expectational heterogeneity due to drift (i.e. mutations
unopposed by selection forces). In the present context, however, such heterogeneity is inconsequential because static
updating brings in immediate convergence of the expectation patterns where it matters, namely on the unique
information set of each population (always visited along any path of play), and contingent on the only relevant history
(that recently observed). As discussed below, the implications of this potential heterogeneity will turn out to be
important when either the game is dynamic (i.e. it involves sequential decisions, as in Section 6.5) or expectations are
dynamic (i.e. do not necessarily predict a stationary evolution of the process, as in Section 6.6).
170                                 Chapter 6. Evolution, Expectations, and Drift


6.4.2 A Simple Model of Bargaining
The analysis conducted so far (both in this chapter and the previous one) has focused solely on symmetric games.
However, by allowing now for two distinct populations, we have the potential of analysing interesting asymmetric
interactions between them. To illustrate these new possibilities, we discuss here a simple bargaining scenario which is
largely inspired in the much more elaborate model studied by Young (1993b).
Suppose that when two individuals of population 1 and 2 meet, they confront a restricted Nash demand game with just
two proposals: a high one M and a low one N. For simplicity, let us normalize the total surplus to be divided and make
it equal to 2 units, identifying the high demand M with some           and the low demand N with 2 − x < 1. If the
(simultaneous) proposals submitted are consistent (i.e. add up to less than 2), then each individual gets what he
proposed plus half of any remaining surplus. Otherwise, if the proposals are inconsistent (their sum exceeds 2), no
individual gets any surplus at all.
The amount of the surplus obtained represents the argument of each individual's utility function. Let vi : [0, 2] → ℜ
stand for the common utility function of the individuals of population i = 1, 2. It is assumed to be of the following
form:




Given any pair of utility functions, v1(·) and v2(·), the bilateral game played by each pair of individuals can be
represented as follows:
Table 16
   1
   2                                     M                                      N
   M                                     0, 0

   N                                                                            1, 1


This game has only two pure-strategy equilibria, (M, N) and (N, M), which are asymmetric. Moreover, the game itself is
asymmetric if α1 ≠ α2. Conceiving of each population's αi as a measure of their respective risk aversion, one would
intuitively expect that the population with the higher such parameter (i.e. the population which is less “risk-averse”)
would end up capturing the larger share of the surplus in the long run. Or if, say, α1 > α2, the long-run outcome should
be concentrated in the equilibrium (M, N) which favours population 1. Modelling the evolutionary process as above,
this conjecture is indeed conﬁrmed (provided the populations are large enough) by the following result.
                                                                 6.4. Simultaneous Contexts                               171


Proposition 15Assume SE and α1 > α2, and let                             be a typical history of the process. There exists
some    such that if n ≥ ñ, any given        displays limε → 0 με (˜ω) > 0 if, and only if, h̃ = [(n, 0), (0, n)]2and




Proof. Deﬁne by γi ∈ (0, 1) the fraction of population i = 1, 2 which has to play strategy M in order for individuals in
population j = 3 − i to be indifferent between either strategy, M or N–that is, the probability weights deﬁning the
unique mixed-strategy equilibrium of the game. They are easily computed to be:




                                                                                                                         (6.6)
By differentiating the above expression with respect to αj, one may verify that it is increasing in αj, ranging from γi = 0 if
αj = 0 to γi = x − 1 if αj = 1. Thus, in particular, since it is assumed that α1 > α2, it follows that γ1 < γ2.
Deﬁne, for each population i = 1, 2,105




which specify the set of characteristics in which the respective population plays strategy M, expecting the other
population to play N contingent on a history which fully matches this behaviour. The sets  and     may be deﬁned
analogously. Based on these sets (which are the counterparts of those deﬁned in (6.4) for the present context), the
analogues of (6.5) are deﬁned as follows:




The previous sets represent the two state components where the populations indeﬁnitely play, and expect to play, one of
the two pure-strategy equilibria. Along the lines of the proof of Theorem 22, it can easily be veriﬁed that a certain state
belongs to some absorbing set of the mutation-free dynamics if, and only if, it is an element of one of these sets. Thus,
relying on familiar considerations, the




105
      In terms of previous notation, proposal M is interpreted here as strategy s1 and proposal N as strategy s2 .
172                                  Chapter 6. Evolution, Expectations, and Drift


proof of the present result follows from the following two Lemmas. (Previous notation, when obviously
reinterpretable, remains unchanged throughout.)
Lemma 16For any




∈ gNM, there is a path y linking to some ✓ω ∈ gMNwith               , where [x]+stands for the smallest integer no smaller than x.
Proof: Consider any     ∈ gNM, and let ω′ be the state derived from         by           mutations in population 1 towards
strategy M and the corresponding adjustment on expectations. This transition has a cost                  . Now let ω″ be the
state reached from ω′ when all individuals of population 2 switch to strategy N but no member of population 1 receives
a strategy-adjustment opportunity. From the deﬁnition of γ1 in (6.6), this transition can be chosen to have a cost c(ω′,
ω″) = 0. Then, consider the transition to the state ω″′ which results when all members of population 1 are given the
opportunity to adjust their strategies. Again, c(ω″, ω″′) = 0, and in this state every agent of population 1 chooses M and
everyone in population 2 chooses N. Without any further mutation, the ensuing state ✓ω ∈ gMN, which completes the
proof of the Lemma.
Lemma 17For any        ∈ gMN, every path y linking to some ✓ω ∈ gNMhas a cost                 .
Proof: First, note that since




we must have



This indicates that the “easiest” transition from a state in gMN to a state in gNM must involve members of population 2
ﬁrst mutating towards strategy M. Any fewer than                  mutations from any state      ∈ gMN still has the process
remain in the basin of attraction of the set gMN. (That is, if no further mutation occurs, the selection dynamics will lead
the process back to some state in gMN with probability one.) Therefore, in order to complete a transition from           to
some ✓ω ∈ gNM the corresponding path y must involve at least                mutations. This integer is then a lower bound
on c(y), which is the desired claim.
To complete the proof of the Proposition, simply note that the inequality γ1 < γ2 implies                              for large
enough n. ▪
Proposition 15 reﬂects in, a very schematic way, considerations very similar to those established by Young (1993b) in a
model where the range of proposals consists of an arbitrarily ﬁne grid. Applying to this richer framework the
                                                                        6.5. Multi-Stage Contexts                                                                                 173


sampling approach to expectation formation which was outlined in Section 6.3, Young shows that the unique long-run
outcome of the process approximates the Nash bargaining solution (Nash (1950)) as the grid of proposals becomes
arbitrarily ﬁne.106 The conclusion of Proposition 15 is a very simpliﬁed variation on Young's result. As in the Nash
bargaining solution, the outcome selected by the evolutionary process provides the largest share of the surplus to the
less risk-averse party.


6.5 Multi-Stage Contexts
6.5.1 Introduction
When the game being played is simultaneous (as in the previous section), a static rule for expectation formation
imposes an immediate homogeneity on players' expectations at the opponents' unique information set. No relevant
heterogeneity in expectations can arise within each population since any past history has been commonly observed.
This, of course, is not any longer true when the game in question displays a genuine dynamic dimension and, therefore,
some paths of past play may have failed to visit certain information sets. In this case, substantial expectation
heterogeneity may set in at these information sets, leading in turn to some signiﬁcant implications on the evolution of
the process.
To illustrate these matters in a simple way, we turn again to (2 × 2)-co-ordination games. This set-up is now embedded
into a dynamic scenario by providing one of the parties with an outside option to be exercised (or not) prior to the co-
ordination game. Despite the fact that this outside option ends up not being used in the long run, its mere availability
turns out to destabilize the inefﬁcient equilibrium. In fact, the considerations involved in this respect happen to be
quite reminiscent of the familiar ideas of forward induction often used in classical Game Theory (recall Subsection
4.4.2). Here, however, the implicit (and iterative) reasoning process typically conceived to underlie it does not take
place in the players' minds but is the “patient” work of evolutionary drift.




106
      Strictly speaking, Young (1993b) shows that the outcome will approximate the usual (symmetric) Nash Bargaining Solution only if, except for their pay-off functions, the two
      populations are fully symmetric. He proves, for example, that if one population samples a larger fraction of past history than the other one, the long-run outcome will be
      biased in the former's favour. In this case, the outcome coincides with the asymmetric (or weighted) Nash bargaining solution, where each population's weights correspond
      to their respective sampling fractions.In our context, one can also incorporate some natural asymmetries not derived from differences in the utility functions, e.g. it is easy to
      see that, if the two populations have a different cardinality, the one with fewer members will be favoured by the long-run outcome (in particular, if both populations have the
      same pay-off functions, the one with fewer individuals will achieve the x-share of the surplus in the long run).
174                                 Chapter 6. Evolution, Expectations, and Drift


6.5.2 Forward Induction and Efcient Co-Ordination
Assume that two populations, 1 and 2, are matched to play a co-ordination game as described in Subsection 6.4.1.
Now, however, before entering the co-ordination game proper, let us assume that the player of population 1 may
choose to avoid playing this game and instead ensure for himself a certain pay-off equal to f. If he does so, the type-2
player gets a pay-off of g, whose magnitude is fully irrelevant to what follows.
One possible extensive-form representation of the game is presented in Figure 10. In this extensive-form game, the
type-1 player has two information sets:        at the beginning of the game,    after player 2's move. Thus, his (pure)
strategy set S can be identiﬁed with the Cartesian product {P, Q} × {s1, s2}, where P and Q stand for “play” and “quit”
              1


respectively, the actions available in his ﬁrst information set. On the other hand, the strategy set for a type-2 player
merely coincides with that of the co-ordination game, S2 = {s1, s2}, since his only information set is within the co-
ordination subgame.
Figure 10: A Coordination Game With an Outside Option




To make the considerations involved interesting, suppose that



                                                                                                                    (6.7)
That is, the “outside option” for player 1 guarantees him a pay-off which is precisely between the two different pay-
offs attainable at each of the respective equilibria of the ensuing co-ordination (sub-)game. The next result establishes
                                                                    6.5. Multi-Stage Contexts                                                                            175


that, under static expectation-updating (Postulate SE above), every long-run state of the process has agents playing the
co-ordination subgame and its efﬁcient equilibrium. This conclusion requires that the population be large enough, but
is independent of any other (in particular, risk-dominance) considerations.107
Proposition 16 (Nöldeke and Samuelson (1993)) Assume SE and (6.7), and let                                        be a
typical history of the process. There exists some such that if n ≥ ñ, every with limε → 0 με(˜ω) > 0 satisﬁes h̃ = [(0,
n, n, 0), (n, 0)]2and




Proof. Denote by hQ ≡ [(n, 0, 0, 0), (0, 0)]2 and hP ≡ [(0, n, n, 0), (n, 0)]2 the two constant histories induced by each of the
two alternative pure-strategy, Nash-equilibrium paths of play in the game. In the ﬁrst one, hQ, population 1 chooses to
avoid the co-ordination subgame. In the second one, hP, the whole of population 1 enters the co-ordination subgame to
play its efﬁcient equilibrium. Now, in analogy with (6.4), deﬁne:




As for (6.5), one may now associate with the above subsets of individual characteristics the following two state
components:




The proof of the proposition follows from the following four Lemmata.
Lemma 18A state ω ∈ Ω belongs to an absorbing set of the mutation-free dynamics if, and only if, ω ∈ gQ ∪ gP.
Proof: The argument is similar to that applied above. The sufﬁciency statement is obvious. For the necessity part,
choose any arbitrary ωt ∈ Ω




107
      The analysis here follows that of Nöldeke and Samuelson (1993) very closely. However, the framework is slightly different. For example, these authors postulate that when
      inertia operates on a particular agent, it “freezes” adjustment on both his strategy and his expectation.
176                                                 Chapter 6. Evolution, Expectations, and Drift


prevailing at some t and consider ﬁve consecutive periods t + 1, . . . , t + 5 with the following alternative sequences of
mutation-free events.
First, suppose that in the initial two periods t + 1 and t + 2, the whole of population 1 is given the opportunity to
adjust. In implementing their adjustment, assume that every individual of population 1 who ﬁnds it weakly optimal to
play the co-ordination subgame does enter it. Then, if even under these conditions neither of them decides to play the
co-ordination subgame at t + 1, the state ωt+2 belongs to gQ and is stationary for the mutation-free dynamics.
Alternatively, suppose that some individual of population 1 does play P at t + 1. Then, in period t + 2, since all
individuals of population 1 share the same beliefs, suppose that all of them either play Q or, if they all play P, then they
choose the same ensuing action, s1 or s2.108 In the former case, we may conclude that ωt+3 ∈ gQ, as before. If, instead, the
second possibility applies, suppose that players of population 1 are unable to adjust their strategy at t + 3 but the whole
of population 2 is able to do so. Then, the latter will all adjust to either s1 or s2, matching the single action chosen by
population 1. In the ﬁrst subcase (i.e. if they adjust towards s1), the state ωt+4 ∈ gP. In the second subcase (i.e. population
2 adjusts towards s2 in t + 3), every member of population 1 who could adjust his strategy at t + 4 will switch to Q.
Suppose indeed that all of them enjoy such adjustment possibility. Then, ωt+5 ∈ gQ.
One of the different alternative paths considered has positive probability (bounded above zero). Thus, overall, it may
be concluded that there is positive probability (bounded above zero) that, in at most ﬁve periods, the process reaches
gQ or gP. This obviously guarantees the desired conclusion.
Lemma 19Let ω, ω′ ∈ grfor some given r = P, Q. Then,




                                                                                                                                    (6.8)

Proof: Let ω, ω′ ∈ gr be two different states such that d(ω, ω′) = 1. From the deﬁnition of the sets gr, r = P, Q, this implies
that the only difference between ω and ω′ is that one (and only one) agent has expectation patterns in these states which
differ exclusively for histories h ≠ hr.
Let Y be some arbitrary ω-tree. It is ﬁrst claimed that there always exists some ω′-tree Y′ such that c(Y′) ≤ c(Y). The
argument is constructive. Consider the arrow starting at ω′ in tree Y, say (ω′, ω″). Delete this arrow and add the arrow
(ω, ω′). These transformations produce an ω′-tree whose cost cannot be larger than c(Y). The reason is that the
elimination of the arrow (ω′, ω″) in the tree Y decreases the cost in at least one unit. On the other hand, the arrow (ω,
ω′) has a cost c(ω, ω′) = 1.
Since the argument is fully symmetric between ω and ω′, one may in fact conclude that the equality (6.8) applies for any
two such “neighbouring” states.




108
      Note that if c > f (> b ), players' beliefs may be such that it is optimal to enter the co-ordination subgame and play s2 .
                                                6.5. Multi-Stage Contexts                                                177


But then, the conclusion of the lemma directly follows from the simple observation that every two states in a given gr
can be joined through a path whose links involve only neighbouring states (in the previous sense). This implies (6.8) for
any two states in each gr, as desired.
Lemma 20There exists a path y linking some ω ∈ gQto some other      ∈ gPwith c(y) = 1.
Proof: Consider the state                              where



Consider now a state ˜ω ∈ Ω in which one of the individuals in population 1 has a pattern of expectations e1 for which



                                                                                                                        (6.9)
Clearly, d(ω, ˜ω) = 1.
Let h̃ = [((n − 1, 1, 1, 0), (1, 0)), ((n, 0, 0, 0), (0, 0))] denote the history induced from hQ when the individual for whom
(6.9) applies switches to strategy (P, s1). From ˜ω, a transition to a state where the pattern of expectation of every agent
of population 1 satisﬁes




results merely from application of postulate SE under no mutation. From this point, if all agents of population 1 can
simultaneously adjust their strategy (and do not mutate), the ensuing state                     will satisfy




If no further mutation occurs, the ensuing state ∈ gP. Therefore, the path                                 links ω to a state
in gP, as required. Moreover, c(y) = 1, which completes the proof of the Lemma.
Lemma 21There exists some         such that if n ≥ ñ, ∀ ω ∈ gQ, ∀     ∈ gP, and any path y linking to ω, c(y) > 1.
Proof: Let be any state in gP. If just one mutation takes place from state , the second information set for type-1
players, , is still reached in at least      of the encounters (in fact, in every encounter if the mutation is on an agent of
population 2). If n is large enough, it is clear that the ensuing expectation pattern resulting from the application of SE
must still make it optimal for every agent to choose strategy s1 next period, thus leading back to a state belonging to gP.
Thus, one mutation is not enough to trigger a transition to the component gQ. This completes the proof of both the
Lemma and the Proposition. ▪
178                                  Chapter 6. Evolution, Expectations, and Drift


In contrast with previous results, drift (more speciﬁcally, “expectational drift”) is the key phenomenon at work in the
present scenario. It crucially underlies the selection of the efﬁcient co-ordination equilibrium, allowing the process to
overcome the risk-dominance considerations which proved decisive in the context of Theorem 22 above.
The fact that, in the present multistage context, not all information sets need to be reached every period is the main
feature which permits drift to have such an important effect. In particular, it is clear that neither the single information
set of player 2 nor the second one of player 1 will be reached if every player of this latter type decides to eschew the co-
ordination game altogether by choosing the outside option Q. But then, if this happens, players' expectations on the
opponents' behaviour at these information sets may drift undisciplined by selection (i.e. updating) forces. In particular, a
suitable concatenation of one-step mutations may by itself lead to a state where every player of population 2 believes
that, if any of his opponents were to decide to play the co-ordination subgame, he would choose s1. From such a
situation (which is stationary for the mutation-free dynamics), only one further mutation is required to make some type-
1 player expect that he will be responded to with s1 if he decides to enter the co-ordination subgame by choosing P. If
this mutation indeed occurs, those expectations are fully conﬁrmed, this event immediately “locking in” all other
players' expectations on the efﬁcient path of play. Subsequently, a complete transition is triggered towards the efﬁcient
outcome (at least with some positive probability) without the need of any further mutation.
Once the population is playing the efﬁcient co-ordination equilibrium, all information sets (         , and u2) are being
visited every period. Therefore, there is no range for analogous drift to materialize, since all conditional expectations
are permanently being determined by currently observed (and conﬁrming) evidence. In this case, a transition away
from the efﬁcient path of play requires a certain number of simultaneous mutations, exactly as in the pure co-ordination
context studied in Subsection 6.4.1. When the population is large and ε small, these simultaneous mutations give rise to
an event that is much more unlikely than the drift-based transition outlined above.
Interestingly enough, the evolutionary considerations just described end up selecting the only equilibrium of the game
which is consistent with “rational” forward induction, as considered by classical Game Theory in a variety of
alternative formulations (see, for example, van Damme (1989)). As the reader will recall, similar ideas also played a key
role in the example discussed in 4.2 within a continuous-time, deterministic set-up. In a sense, the potential for drift at
untested information sets may be seen as a certain test of robustness on mutation-free stationary states which discards
weakly dominated strategies. As is well-known (cf. Fudenberg and Tirole (1991: 460–67)), iterative elimination of
weakly dominated strategies reﬂects considerations of forward induction, at
                                                                       6.6. Dynamic Expectations                                                                                   179


least in simple multistage games.109
To provide some heuristic understanding of this idea, suppose that the system is at a state where the inefﬁcient
equilibrium is being played. Then, one may view evolutionary drift as occasionally “sending the signal” that, if a player
of population 1 is willing to play P, it is because he expects to be responded to with s1. (Equivalently, of course, this can
be interpreted as indicating that type-1 players are not planning to choose the dominated s2). Sometimes this same drift
will lead the system to a state where this signal is suitable reacted to by type-2 players (i.e. they actually play s1). In that
case, a transition to the efﬁcient equilibrium is carried out, thus exposing the weakness of the inefﬁcient equilibrium for
which the co-ordination subgame was not reached.


6.6 Dynamic Expectations
6.6.1 Introduction
Given the dynamic nature of the context in which players interact, it seems natural to allow for the possibility that they
may rely on genuinely dynamic considerations in shaping their expectations. Of course, this is not meant to suggest
that they must be viewed as fully understanding the underlying dynamic process, thus being able to predict “optimally”
its future evolution. More in consonance with the evolutionary paradigm, agents should rather be conceived of as
striving to detect some regularities in previous history, then building upon them to shape their current expectations.
Once we decide to go beyond the clear-cut static rule of expectation formation (Postulate SE above), there seems to be
little theoretical ground for postulating any alternative particular rule that reﬂects the desired dynamic considerations.
Instead, the reasonable course to take seems to be the formulation of certain natural conditions that any admissible
updating rule should satisfy, thus eschewing any speciﬁc formulation for it.
Subsection 6.6.2 below proposes two such conditions. The ﬁrst one is a weak demand of intertemporal consistency.
The second condition requires that only relevant precedents should matter. Their implications for the analysis of
simple co-ordination games are discussed in Subsection 6.6.3. In contrast with our former analysis, the introduction of
dynamic expectation rules will be seen to have drastic effects on the long-run predictions of the model. Most crucially,
it transforms the evolutionary process from a mechanism of equilibrium selection




109
      See Nöldeke and Samuelson (1993) and Swinkels (1993) for further discussion of these issues. As mentioned, the framework of Nöldeke and Samuelson is very similar to
      that described here. Swinkels, however, studies deterministic evolutionary dynamics, similar in spirit to that studied by Ritzberger and Weibull (1995). He shows that any set
      satisfying a certain criterion of evolutionary stability must include a hyper-stable set, in the sense of Kohlberg and Mertens (1986). This set always satisﬁes a certain notion of
      forward induction.
180                                                   Chapter 6. Evolution, Expectations, and Drift


into one displaying equilibrium volatility (i.e. all equilibria end up being played in the long run).


6.6.2 Admissible Updating Rules
As advanced, admissible updating rules will be required to satisfy the following two requirements:
  (a) Induced expectations have to be consistent with any sufﬁcient long string of stationary evidence.
  (b) The revision of expectation patterns must be restricted to those contingencies for which observed history is
      relevant.
The formalization of each of these conditions is addressed in turn.


6.6.2.1 Consistency With Long Stationary Evidence
Only a weak criterion of historical consistency will be considered here. It requires that if a certain given outcome has
been constantly observed for a sufﬁciently long stretch of time in the past, the expectation pattern should predict that it
will continue to repeat itself (of course, as long as no contradictory evidence is realized).110 Formally, it may be
described as follows:
          Constant Evidence (CE)                               such that




The former condition can be seen as a substantial relaxation of Postulate SE (cf. Section 6.3).111 Unlike this former
postulate, expectation updating is required to be static only when arbitrarily long evidence to that effect (i.e. conﬁrming
that the opponent's behaviour indeed remains static) has been observed. Otherwise, no requirement whatsoever is
imposed by CE on the expectation-updating rule.




110
      Similar conditions of historical consistency have been often proposed in the learning literature. See e.g. Milgrom and Roberts (1991).
111
      Note that nothing is required on        if a ∈ A (u ) and                . In line with SE, it could be demanded that, in this case,     . However, since any such
      requirement is irrelevant for our future analysis (which will focus on simultaneous games), it is simply dispensed with.
                                                                     6.6. Dynamic Expectations                                                                                181


6.6.2.2 No Revision After Irrelevant Evidence
The second condition required from expectation-updating rules is of a quite different nature. It expresses the idea that
agents should not revise their pattern of expectations for those contingencies for which the recently observed history is
not relevant. Of course, the key question here is what histories are to be conceived as “relevant” for any particular
contingency. The following criterion is proposed.
Let ht be the history observed up to (and including) some given t. Every player of population i = 1, 2 is assumed to rely
on this history to update his current expectation pattern (recall Section 6.2). Two different sub-histories of ht need to be
singled out. On the one hand, there is the prior sub-history       which includes the outcomes in ht observed before the
current period t. In our simple case, where histories only include two periods, we have                       . On the other
hand, there is what may be called the recent sub-history . It includes all outcomes in ht except its very earliest one. Since
in our simpliﬁed context this earliest outcome is merely given by                , one has               .112
In updating the expectations which prevailed at t, the implicit assumption is that every player will attempt to identify
some regularities in the prior history    and associate them with the ensuing outcome observed at t,              . Thus,
along these lines, only when a given ĥ ∈ H has a sub-history ĥ which matches
                                                               +
                                                                                    can history ht be taken as a relevant
precedent to assess the outcome which will follow ĥ. For all other h̃ ∈ H such that         , the associated conditional
expectations should remain unaffected by the observation of the (“irrelevant”) history ht. This idea may be formalized
as follows.
          Relevant Evidence (RE) ∀ i = 1, 2, ∀ ei ∈ Ei, ∀ h ∈ H,




In a heuristic sense, the previous condition shares some of the spirit of Postulate SE. As in it, expectations associated
with unobserved realizations (there, information sets; here, prior histories) are required to be left unchanged by the
updating process.


6.6.3 Equilibrium Volatility
For a sharper contrast with previous results, we focus again on the co-ordination set-up analysed in Subsection 6.4.1.
Thus, individuals are paired to play a




112
      Thus, recent sub-history and “current” outcome coincide. In general, of course, if histories included more than two periods, this would not be the case. Speciﬁcally, if they
      consisted of the last three periods, the recent history would include both the current and previous observations. It should be clear how the approach and motivation discussed
      here are fully extendable to histories of any arbitrary – but ﬁnite – length.
182                                                 Chapter 6. Evolution, Expectations, and Drift


symmetric 2 × 2-game, with pay-off structure as described in Table 15 and




Under no further restrictions on the game pay-offs, the next result establishes that the evolutionary process will lead to
what could be labelled as long-run “equilibrium volatility”. That is, the two equilibria of the co-ordination game (but
only equilibria) will be played, a.s., some signiﬁcant fraction of the time in the long run.
Theorem 23 (Vega-Redondo (1995))Assume CE and RE. Then, for each q = 1, 2, there exists some




such that limε → 0 με (˜ω) > 0 and




                                                                                                                                                                      (6.10)
Conversely, any state ˜ω ∈ Ω which displays limε → 0 με(˜ω) > 0 satisﬁes (6.10) for some q = 1, 2.
Proof. Deﬁne            as in the proof of Theorem 22 (see (6.4) and (6.5)). First, the absorbing sets of the mutation-
free dynamics are narrowed down as follows.113
Lemma 22Let ω ∈ Ω belong to an absorbing set of the mutation-free dynamics. Then, ω ∈ g1 ∪ g2.
Proof: Consider any                                   prevailing at some given t. It is argued that there is a ﬁnite chain of
transitions {(ω0, ω1), (ω1, ω2), . . . , (ωm−1, ωm)} which has positive probability (bounded above zero) and such that ωm ∈ gq
for some q = 1, 2. Moreover, such ωm is a stationary state of the mutation-free dynamics.
Suppose ﬁrst that every individual of both populations chooses some given strategy sq at ω0. That is,



                                                                                                                                                                      (6.11)
Then, one just needs to choose m > r (where r is the pre-established number of steps contemplated by Postulate CE)
and assume that no individual is able to adjust his action for the ensuing m periods. Then, by CE, one has




113
      If, as in Vega-Redondo (1995), one required the condition that all admissible expectation patterns ei ∈ Ei satisfy




i.e. expectations only depend on the latest observed outcome of prior history, then every state in g1 ∪ g2 would be stationary in the mutation-free dynamics. In that case, the
      statement of Lemma 22 and that of the Theorem could be expressed in terms of a single necessity and sufﬁciency requirement.
                                                6.6. Dynamic Expectations                                                 183


Since the history prevailing at state ωm, hm−1, is obviously equal to hq, and so it happens for all other previous ωv, v = 2,
3, . . . , m − 1, it follows from Postulate CE both that ωm ∈ gq and that this state is stationary for the mutation-free
dynamics. Moreover, given the postulated formulation for strategy adjustment, such a chain has an ex ante probability
not less than [(1 − p)2n]m.
Suppose now that (6.11) is not satisﬁed at ω0. Then, one needs to consider a longer chain of transitions {(ω0, ω1), (ω1,
ω2), . . . , (ωm−1, ωm)} as follows.
Divide this chain into ﬁve subchains of respective lengths                            . In the ﬁrst subchain, with length m1
≥ r, all individuals remain throughout with their initial strategy. As before, this subchain has prior probability not less
than                 . At the end of it, due to Postulate CE, all individuals of any given population will share the same
respective expectations contingent on the relevant history. That is




where h̄ is the constant history induced by the initial proﬁle of strategies.
The second subchain consists of just one transition. In it, all individuals of one of the populations, say population 1,
switch to an identical strategy sq which is optimal given their identical relevant beliefs. This transition has probability at
least equal to                , due to the assumption that all strategies in the current set of optimal best responses are
chosen with equal probability.
The third subchain again has length m3 ≥ r. It is analogous to the ﬁrst subchain in that all individuals are assumed to
remain with their initial strategy, at the end of which every one of them is sharing the same expectation contingent on
the prevailing history. In particular, all individuals of population 2 believe with probability one that every member of
population 1 will play strategy sq, as speciﬁed above. The prior probability of this subchain is                 .
Given these beliefs, the fourth subchain, again composed of just one transition, involves all players of population 2
switching to strategy sq. This transition has probability not less than pn(1 − p)n.
From this point onwards, one just needs to replicate the chain considered in the ﬁrst part of the argument (under the
assumption that all individuals of both populations keep playing the same strategy). Let m5 be the length of this last
chain. Its prior probability is at least           . At the end of it, the state ωm ∈ gq, as explained above. Moreover, by
Postulate CE, one may also conclude that ω is a stationary state for the mutation-free dynamics. Since, combining the
                                             m


former considerations, it follows that the prior probability of the composite chain can be bounded above zero,
independently of the initial state ω0, the proof of the Lemma is complete.
Let          , denote the collection of states in gq which, viewed as singletons, are absorbing sets of the mutation-free
dynamics. Obviously, each          . To complete the proof of the Theorem, two further steps are required. The ﬁrst
one is based on the observation that, within each , states only differ
184                                  Chapter 6. Evolution, Expectations, and Drift


in those players' expectations which are contingent on histories not observed within it. Thus, relying on an argument
identical to that of Lemma 19 above, the following analogous result can be shown.
Lemma 23Let              , for some given q = 1, 2. Then,



And then, in view of the preceding result, the proof of the Theorem follows from the following ﬁnal Lemma.
Lemma 24Let           for some given q = 1, 2. Then there exists some              , such that



Proof: Consider any arbitrary        . By the deﬁnition of this set and postulate RE, there is some




such that:




Let Ŷ be the     -tree which achieves the minimum cost in           . From Lemma 23,                                (6.12)




Now, construct a path y joining to some state                      as follows. First, consider the state derived from
when a single player of, say, population 1 mutates by choosing strategy sq′. Let                         denote the state
induced by this mutation. By construction d( , ω1) = 1. Consider then the state                          derived from ω1
when every player of each population adjusts his strategy and experiences no mutation (therefore d(ω1, ω2) = 0). From
(6.12) and Postulate RE, it follows that



Therefore, state ω2 also has



Suppose now that players remain with their strategies ﬁxed for m periods and let ω3, ω4, . . . , ωm+2 be the corresponding
states. Of course, one has



due to the assumed positive (and independent) probability of inertia affecting all players each period. If m > r, where r
is the pre-established parameter speciﬁed by Postulate CE, it follows that                   , as desired.
                                                                     6.6. Dynamic Expectations                                                                        185


Finally, it is argued that there is an ω′-tree Y′ which satisﬁes c(Y′) ≤ c(Ŷ). The argument is constructive. First, consider
the m + 3 (incomplete) sub-trees associated with each of the states in the path y, obtained by deleting the arrows
starting in each of them in the (full) tree Ŷ. Then, add the arrows included in the path y. This gives rise to an ω′-tree Y′.
The total cost of this operation is c(y) = 1. On the other hand, note that there has been a decrease of at least one cost
unit by eliminating the arrow starting at ω′ in tree Ŷ. (This follows from the fact that ω′ is a stationary point of the
mutation-free dynamics and, therefore, it cannot be exited without mutation.) Overall, it may be concluded that c(Y′) ≤
c(Ŷ), as claimed. This completes the proof of the Lemma and, thus, of the Theorem. ▪
The previous result tempers any excessive hopes one might have entertained on the potential of evolutionary processes
as equilibrium-selection mechanisms. In a sense, it reinforces the widely accepted view that equilibrium selection is an
issue which cannot generally be addressed in the abstract, i.e. without some reference to the particular context of
application.
If players are relatively sophisticated and can view their context as what it indeed is, i.e. a dynamic one, expectational
drift at untested contingencies may lead to (dynamic) expectations which interpret any change in the status quo as a
“transition signal”. This, in the end, brings about equilibrium volatility: the impossibility of anchoring the system at a
particular equilibrium. Such a conclusion is underscored by the fact that, in the context of Theorem 23, no restrictions
are imposed on the game pay-offs other than assuming that there is some selection issue to be concerned with (that is,
there are two different equilibria in which players can be co-ordinated). Thus, its conclusion applies even if one of the
equilibria dominates the other one, both in the Pareto and the risk-dominance sense.114
This raises the question of how much sophistication is it reasonable to assume on the part of the players. One should
always bear in mind that, as stressed by Mailath (1992), modelling is a “metaphorical” activity, which is never to be
interpreted literally. From this perspective, the assumption that players' sophistication is quite limited (even as limited
as postulated implicitly in Chapter 5) might not be a bad modelling assumption at all. In the real world (of which our
models are supposed to be a schematic sketch) players do actually behave in a very simple way relative to the complexity
of the environment. When these key relative considerations are contemplated within an unavoidably simple (if
manageable) model, quite simple rules of behaviour may well appear to be the most interesting ones.
This, of course, does not make it less theoretically interesting to explore the sensitivity of our approach to the
consideration of different degrees of players'




114
      In fact, as discussed in Vega-Redondo (1995), volatility will prevail in any arbitrarily large co-ordination game, among all of its pure-strategy equilibria.
186                                               Chapter 6. Evolution, Expectations, and Drift


sophistication. In a sense, this is partly what much of this chapter has been concerned with. Now, the next natural step
is undertaken: the introduction of “sophistication” as an endogenous component of the model. A preliminary, simply
suggestive attempt in this direction closes the chapter.


6.7 On the Evolution of Sophistication
6.7.1 Introduction
Throughout this and previous chapters, we have explored how a (stochastic) evolutionary approach to the analysis of
games is affected by the speciﬁcation of different details on the underlying environment, e.g. the number of matching
rounds taking place every period (cf. Subsections 5.4.1 and 5.4.2) or the particular nature of the interaction pattern (cf.
Subsections 5.6.1 and 5.6.2). But, arguably, the most interesting variations explored pertain to the alternative
behavioural paradigms which are, more or less explicitly, embodied by the different frameworks considered.
Thus, in Chapter 5, no expectation-based considerations were involved and, in line with the more traditional
evolutionary approach, the evolution of a certain strategy was linked to its relative (average) performance. A natural
interpretation of this formulation is that players are mere imitators. That is, they simply observe the average pay-off
earned by the different strategies and decide to mimic that one which is highest.115 Such an interpretation presumes no
knowledge whatsoever on any agent's part about the structure of the game he is playing, not even about the details
which affect him directly (for example, his own pay-off structure). This will be one of the levels of sophistication (the
lowest one) which will be considered below. It postulates that players are (or at least behave as if they were) pure
imitators, along the lines described.
The second higher level of sophistication considered will assume players can form expectations on the evolution of the
process, but only static ones. Thus, as speciﬁed in Section 6.3, it will postulate players who observe the previous
outcome and simply predict that other agents will keep playing as observed. Then, on the basis of such predictions,
they simply choose an optimal response. Note, of course, that this formulation implicitly embodies the assumption that
players are at least aware of their own best-response correspondence. For the sake of a better label, agents of this kind
will be described as myopic optimizers.
Finally, the third (highest) level to be considered involves players whose expectations are shaped dynamically (in the
manner described in the previous section), and respond optimally to whatever beliefs their current expectation
patterns and prior history induce. In an intuitive sense, these players exhibit




115
      Recall Subsection 4.3.3, where an analogous speciﬁcation was suggested within a continuous-time and deterministic evolutionary framework
                                                          6.7. On the Evolution of Sophistication                                                                          187


a degree of sophistication much higher than the two previous ones. Not only must they know their own pay-off
structure, but they must also be able to “keep track” of a whole pattern of conditional expectations which are updated
as the process evolves.116 Such players will be called dynamic optimizers.
The theoretical exercise to be conducted may be outlined as follows. Consider a context where, in principle, players of
different degrees of sophistication (i.e. different types) may coexist. (Here, the term type will be reserved to identify the
player's degree of sophistication. No confusion should arise with our previous use of it to specify the population to
which a player belongs.) As the process unfolds, each individual adjusts his behaviour and other characteristics as
described above, depending on his respective type. Furthermore, with some given probability, every one of them also
has the opportunity of changing his type. In that case, he is assumed to revise it only if some other type has obtained a
higher average pay-off in recent (“recorded”) history. Again, perturbing the process by sporadic and independent
mutation (which affects both characteristics and types), the question then posed is the usual one: What is the long-run
behaviour of the process as the mutation probability becomes small?
As it turns out, the answer to the speciﬁc question of what equilibrium behaviour is selected depends crucially on the
range of types admitted as possible. This will be seen to reinforce previous considerations, to the effect that
evolutionary mechanisms are more effective the less sophisticated players are assumed (or allowed) to be. On the other
dimension of the process, i.e. selection of types, the effectiveness of the process in narrowing down the set of long-run
types will be shown independent (perhaps disappointingly so) of the range of types under consideration. Speciﬁcally, an
evolutionary process of the kind proposed will prove unable to discard any type as a “viable” candidate in the long run,
irrespective of its relative sophistication.


6.7.2 The Model
As before, individuals of two populations (with equal size n) are assumed randomly matched in a given number of
rounds every period in order to play a 2 × 2-game of co-ordination with the pay-off structure described in Table 15.
For every period t, the state of the process includes a speciﬁcation of how many individuals display a certain
characteristic. Now, however, the space of characteristics not only includes the strategy and the expectation held by a
given player but also his type. Let            be the type space under consideration for population i, where ι stands
for “imitator”, σ for “static optimizer”,




116
      It is true that, within the general framework proposed in this chapter, players are always assumed to hold a complete pattern of expectations, even if they update their
      expectations in a static manner. In this latter case, however, all of its components except the one associated with the prevailing history do not have any effect on future
      behaviour and, therefore, may be fully ignored by these agents. In this sense, myopic optimizers are less sophisticated than dynamic optimizers.
188                                                   Chapter 6. Evolution, Expectations, and Drift


and δ for “dynamic optimizer”. Adhering to previous notational conventions for the sake of simplicity, the space of
characteristics of population i is given by                   . (Of course, for any individual who is an imitator, his
expectation component is irrelevant. In fact, it may as well be assumed that he holds no expectations, just attributing to
him some constant “dummy” element of his respective Ei.)
The state of the process at t must also include the current history. Again, this object must be somewhat more
complicated than in the original framework. It must certainly include the outcomes realized in the current and previous
period                   , where the term “outcome” is interpreted as above, i.e. a speciﬁcation of how many individuals
have been observed to choose each of the possible actions. However, there is an additional piece of information which
should also be included in the current state of the system if its description is to be sufﬁcient. Speciﬁcally, the average
pay-offs earned by each type and every action must also be speciﬁed. The ﬁrst bit of this information (average pay-offs
of types) is needed to formulate the type-adjustment dynamics outlined above. On the other hand, information on the
average pay-offs earned by each strategy is required by any imitator who might be in a position to revise his strategy.117
Therefore, histories h ∈ H (again, adopting prior notation) must be vectors of the following form
                        , where each       has the former interpretation and every       is a ﬁve-dimensional vector
which, for each population i = 1, 2, speciﬁes the average pay-off      earned by each type       and every strategy sq
∈ Si in the current (k = 0) and previous (k = 1) periods. If one of the strategies or types is not represented in the
population, it is formally assigned a small enough pay-off value (say −∞), thus guaranteeing that it will never be
adopted through imitation alone – recall Chapter 5, where a similar assumption was made.
The mutation-free dynamics of the process may be then described as follows. Every period t, each individual of
population i = 1, 2 carries out the following sequential operations. (In order to avoid cumbersome notation, some
formalities are dispensed with. The reader familiar with the previous developments should have no trouble ﬁlling in
the formal details.)
  (i) Type adjustment
      With probability θ ∈ (0, 1), the agent receives the opportunity of adjusting his prior type         . In that case, he
      will change to a new type if, and only if, there is another type that, on average over past history ht−1, has earned a
      higher pay-off than his own. If several such exist, every one of them is chosen with equal probability.118




117
      Of course, information on the average pay-offs earned by each strategy would not be needed if, as in Subsection 5.4.2, the focus were on a context with small matching
      noise (that is, if we made the number of rounds grow to inﬁnity before the limit on ε is undertaken). However, in this context, the behaviour of imitators and myopic
      optimizers is essentially equivalent, thus rendering redundant the inclusion of both types. This is the reason why the number of rounds is maintained ﬁxed in the present
      analysis.
118
      Different formulations could be postulated as well e.g. the average pay-offs earned by each type in the earlier past could be assigned a lower weight (even one equal to zero).
      Or the status quo type could be assigned no priority in the adjustment rule. All of these variations would yield equivalent implications.
                                                          6.7. On the Evolution of Sophistication                                                                           189


        If the new type is δ (i.e. the agent becomes a dynamic optimizer), the question arises as to what expectation
        pattern the agent should hold after the switch. If any expectation pattern were allowed at this point, type
        adjustment could act as a disguised mutation. To prevent this, a number of alternative possibilities could be
        considered. For the sake of concreteness, it will be simply assumed that the new expectations are chosen to
        coincide with those previously held by one of the individuals with dynamic expectations.119
  (ii) Expectation updating
        Depending on whether the player's type is relevant in this respect (i.e. it is either σ or δ), his expectations are
        adjusted accordingly. That is, they are updated as indicated by Postulate SE if his type is σ, or some given
        updating rule Fi(·) which satisﬁes Postulates CE and RE if his type is δ.
  (iii) Strategy adjustment
        The player enjoys a common and independent probability p ∈ (0, 1) of adjusting his strategy. If he receives a
        strategy-revision opportunity, he chooses the new strategy as dictated by his current type. Speciﬁcally, if he is an
        imitator, he chooses the strategy which earned the highest average pay-off over history ht−1.120 Otherwise, he
        chooses a strategy which is a best response to his current beliefs, as induced by prior history and his current
        pattern of expectations.
Items (i) to (iii) deﬁne the mutation-free dynamics of the process. As usual, this dynamics will be perturbed by
introducing mutation. That is, prior to play being conducted every period, each individual is subject to a common and
independent probability ε > 0 of mutation. If this event happens to materialize for any given individual, his new
characteristic is chosen from the respective Ψi according to a given probability distribution with full support.
The combination of these components yields an ergodic stochastic process on Ω with unique invariant distribution με
∈ Δ (Ω). Its long-run behaviour is studied below (for small ε) in two alternative scenarios. First, the analysis focuses on
a context where the “sophistication range” is relatively “narrow”. This is taken to mean that the set of available types
is simply            for each i = 1, 2. The second scenario, with a “wide sophistication range”, has                    for
each i = 1, 2.




119
      Note, of course, that at least one such individual must exist if this type is worth “imitating”. (Otherwise, this type's average pay-off would be −∞, as postulated above).
      Another possibility would be to assume that (under the implicit assumption that the player has no prior relevant information) initial expectations are just static for every
      conceivable history.
120
      To match exactly the framework discussed in Ch. 5, only the pay-offs earned in the previous period should be involved. As explained above for the adjustment on types,
      variations on these matters are inessential.
190                                    Chapter 6. Evolution, Expectations, and Drift


6.7.3 Narrow Sophistication Range
As explained, we assume ﬁrst that                    for each i = 1, 2. In this case, the next result shows that the
evolutionary process selects the efﬁcient equilibrium in the long run.
Theorem 24Assume a > b, and       for each i = 1, 2. Then there exists some           such that if n ≥ ñ, any ˜ω ∈ Ω with limε → 0 με
(˜ω) > 0 satisﬁes    for each i = 1, 2, k = 0, 1.
Proof (sketch). The proof is just outlined here, since it relies on ideas that have already been explained in detail at
different points in this chapter. First, it can be veriﬁed that the absorbing sets of the mutation-free dynamics are as
indicated by the following Lemma.
Lemma 25Let                              belong to some absorbing set of the mutation-free dynamics. Then, ˜ω is stationary for this
dynamics and there exists some q = 1, 2 such that




The proof of this Lemma is essentially a combination of the arguments used in the proofs of Theorems 19, 22, and 23.
From it, one may conclude that those states which, as singletons, are absorbing sets of the mutation-free dynamics can
be partitioned into two classes,          , analogous to those deﬁned in the proof of Theorem 23. In each of them, the
same strategy sq is respectively being played by all individuals in every state.
The following instrumental results also apply to these sets.
Lemma 26Let                , for some given q = 1, 2. Then,




Lemma 27For each q = 1, 2, and every given            , there exists some                          such that




                                                                                                                              (6.13)

The proof of Lemma 26 is the counterpart of Lemma 23 above and is based on the same underlying fact, i.e. all states
in any given   can be connected through one-step mutations. This fact follows from the following two observations:
  (i) Expectation patterns in any given  can only differ for contingencies which are not observed within this set
      (recall the argument of Lemma 19).
                                        6.7. On the Evolution of Sophistication                                       191


  (ii) Each of the two possible types in        leads to the same strategy and receives the same pay-off within any
       given . Thus, any mutation of one agent from one type to the alternative one (keeping his action unchanged)
       will make the system remain in this set.
The latter point can be directly used to prove Lemma 27. Based on this Lemma, the rest of the proof may be outlined
as follows. Consider any given state in      where (6.13) is satisﬁed for    . From such a state, a transition can be
triggered towards     with a number of mutations, say k, that is independent of population size. The argument is as in
Lemma 5 in Chapter 5. On the other hand, from Lemmas 6 and 14, it should be clear that the number of mutations
required to implement the converse transition from any             to some          is bounded below by some given
proportion of n, the common size of both populations. Thus, it is always larger than k if n is large enough. These two
facts, combined with Lemma 26, yield the desired conclusion by relying on the usual “tree-pruning operations”
repeatedly used in this chapter. ▪
Theorem 24 addresses explicitly only one of the dimensions of the process that interests us here: the equilibrium
behaviour observed in the long run. It establishes that if imitators and myopic optimizers are the only possible types,
the former play the crucial role in determining the long-run behaviour of the system. Speciﬁcally, the populations end
up spending most of the time playing the efﬁcient equilibrium, the outcome which was shown to prevail when all
agents are always imitators.
About the other interesting dimension of the process, the evolution of types, the key issue concerns what level(s) of
sophistication is selected in the long run. To address it formally, let      denote the marginal density on the type
space induced by the corresponding distribution με on Ω. Directly from Lemma 27, one obtains the following
corollary:
      Corollary 6Under the conditions of Theorem 24, limε → 0 λε (τ) > 0 for each    .
Thus, as advanced, the evolutionary process does not select, uniquely, between any of the two possible types
considered here (i.e. between the two alternative levels of sophistication considered). A discussion and interpretation of
this state of affairs is postponed to Subsection 6.7.5 below. Next, we turn to analysing how these matters are affected if
the type space is enlarged to include dynamic optimizers as well.
192                                    Chapter 6. Evolution, Expectations, and Drift


6.7.4 Wide Sophistication Range
Suppose now that the type space equals                  for both populations. In this case, the next result establishes that
the evolutionary process will lead to the kind of equilibrium volatility obtained in Subsection 6.6.3, when only dynamic
optimizers were allowed.
Theorem 25Let            for each i = 1, 2. For each q = 1, 2, there exists some                      with limε → 0 με (˜ω) > 0 such
that



                                                                                                                             (6.14)
Conversely, every state ˜ω ∈ Ω which displays limε → 0 με (˜ω) > 0 also satisﬁes (6.14) for some q = 1, 2.
Proof (sketch). Lemmata 25 and 26, stated above for Theorem 24, apply in the present context without modiﬁcation.
On the other hand, the analogue of Lemma 27 can be formulated as follows.
Lemma 28For each q = 1, 2, and every given             , there exists some                       such that




                                                                                                                             (6.15)

The proof may then be completed as follows. Consider any given q = 1, 2, and let                      be a state where (6.15) is
satisﬁed for   . Moreover, in analogy with (6.12), assume that satisﬁes:




Such a state exists, due to considerations explained in the proofs of Theorems 23 and 24. One may then rely on a
familiar line of argument to conclude that there is a path y joining to some state                   , with cost c(y) = 1.
(Note that the type-proﬁle prevailing at , i.e. everyone being a dynamic optimizer, can be held ﬁxed through any
ﬁnite chain of transitions with positive probability.) Since this construction is independent of the particular q and q′
chosen (that is, it is fully symmetric between   and ), it follows that the transition across these sets is equally costly
in either direction. Relying on the usual graph-theoretic techniques, this leads to the desired conclusion. ▪
In parallel with Corollary 6, Lemma 28 leads to the following result pertaining to the long-run marginal distribution on
the type space.
Corollary 7Under the conditions of Theorem 25, limε → 0 λε (τ) > 0 for each        .
                                                           6.7. On the Evolution of Sophistication                                                                              193


6.7.5 Discussion
The contrasting conclusions of Theorems 24 and 25 support the heuristic notion that evolutionary processes will be
the most effective in singling out efﬁcient behaviour when the sophistication of players is not too high. To a certain
extent, this idea has already emerged from our previous analysis (cf. Theorems 19, 22, and 23). The present approach
substantially reinforces it by allowing the degree of sophistication of players to be endogenously determined by the
evolutionary system. In this context, the former results can be interpreted as specifying a certain sophistication
threshold below which efﬁcient performance still results in the long run.
Thus, Theorem 24 establishes that the long-run behaviour of the system will be concentrated on the efﬁcient
equilibrium if, despite the fact that agents have the potential of behaving as static optimizers, they may also choose to
act as mere imitators. In a sense, this points to a certain lack of robustness in the conclusion of Theorem 22, which is
thus seen to depend crucially on the fact that all agents must always behave as static optimizers.
On the other hand, Theorem 25 points to the fact that such “good news” may collapse altogether if the ladder of
possible sophistication is enlarged one further rung to include dynamic optimizers. In this case, the process displays
the equilibrium volatility established by Theorem 23 under the assumption that all agents are dynamic optimizers.
Thus, in line with the previous comment, equilibrium volatility is seen to be a robust phenomenon under dynamic
expectations, in the sense of arising even when players may choose to behave with lower levels of sophistication.
As is apparent from the arguments used above to prove these results, the crucial fact underlying both of them may be
outlined as follows. When both populations are monomorphically playing some particular equilibrium, any of the
admissible types obtains the same pay-off. Therefore, evolutionary drift can “costlessly” operate on the type
component of the prevailing state, leading the system to the conﬁguration where any given contemplated transition is
easiest. Borrowing a phrase from Stahl (1993), such a process of drift reﬂects the fact that, from an evolutionary
perspective, “being right is just as good as being smart”.121, 122 Although, with a reciprocal emphasis, one could also
argue that,




121
      Stahl (1993) analyses a context in which evolution is modelled by the Replicator Dynamics and players of different levels of “smartness” coexist. Proceeding iteratively for
      any level of smartness, he inductively deﬁnes the following chain. Smart0 players are those who simply play any given strategy. For any n ≥ 1, smartn players are those who
      choose their strategies to be a best response, given precise information on the strategy proﬁle chosen by all less smart players and some probability over the strategies
      adopted by other players (of smartness equal to or higher than oneself) that does not violate smartness of order n − 1. Stahl shows that, under a variety of alternative
      conditions, some fraction of smart0 players will survive in the long run.
122
      A related work is Banerjee and Weibull (1991). They consider a model (also based in the Replicator Dynamics) where some players of the (unique) sophisticated type are
      able to anticipate the strategy played by every one of the non-sophisticated agents they meet, while playing some rationalizable strategy among themselves. Non-sophisticated
      players simply adhere to one given strategy in all of their encounters. They are, therefore, like Stahl's (1993) smart0 players. In this context, they show that the fraction of
      sophisticated players need not converge to 1 for some games. This happens, for example, when there is an “aggressive” strategy (like H in the Hawk–Dove game of
      Subsection 2.3.1) whose pay-off is larger when meeting a best response than the pay-off obtained by the best responder himself.
194                                                    Chapter 6. Evolution, Expectations, and Drift


from an evolutionary perspective, being smart just involves doing what is right. “Evolution” (or, more precisely, our
single-minded players) does not have, after all, any standard of smartness different from that given by pay-offs.
The previous discussion raises the question, also partially addressed by Stahl (1993), of how the analysis would be
affected if sophistication is not only assumed unimportant per se but, quite naturally, is postulated costly. In this case
(even if these costs are lexicographically less important than other pay-offs), drift within a certain “equilibrium
component” can only proceed downwards (i.e. to lower levels of sophistication).123 This, in turn, will lead to a situation
where, even though higher sophistication levels might be possible, the lowest one must in the end prevail. Along the
lines of Theorem 24, it is not difﬁcult to see that such considerations restore efﬁciency as the long-run criterion of
equilibrium selection.




123
      In this case, the adjustment toward lower-sophistication types would unfold (without any further mutation) as long as one mutation introduces a single representative of it.
      In this sense, the term “drift” applied to this phenomenon is not in line with our previous usage of it. It is still employed here, however, in order to stress the fact that the
      costs of sophistication could be lexicographically less important than the pay-offs derived from playing the game.
                                                 Afterword
Having reached this point, the reader may still harbour some doubts concerning the potential of Evolutionary Theory
for the analysis of social and economic situations. Indeed, such a cautionary response is fully justiﬁed, given the infant
nature of the discipline, still deﬁning its boundaries and shaping its agenda. Since, as mentioned in the Preface, this
effort is very much “work in progress”, it would be futile to attempt any prediction of where it will lead. Instead, let me
simply conclude by suggesting three different avenues of research which, in my opinion, should be of leading concern
in the near future.
  •   Throughout this book, the pattern in which the population (or populations) interact has been taken as given. In
      most cases, it was assumed to involve global random matching, although a few exceptions were also considered
      (e.g. local matching or “playing-the-ﬁeld” contexts). An important issue which all of these models brushed aside
      concerns the (endogenous) evolution of the pattern of interaction itself. In many interesting cases (for example,
      if one is to understand the rise and evolution of new markets) a suitable account of how the network of
      interaction unfolds seems crucial for predicting (or inﬂuencing) the future course of events.
  •   The last two chapters have focused on the analysis of evolutionary systems which are perturbed by some
      stochastic process of mutation. In non-biological contexts, this process of mutation should be interpreted as
      reﬂecting genuinely social considerations, such as experimentation, population renewal, or some other kind of
      exogenous phenomenon. A more precise, well-founded formulation of evolutionary noise should signiﬁcantly
      enrich evolutionary models in at least two respects. First, it would allow the particular speciﬁcation of its crucial
      stochastic component to be tailored to some underlying features of the environment. Second, it would
      substantially help in the task of interpreting the nature and conceptual implications of its long-run predictions.
  •   I made the point above that, by postulating a given pattern of interaction, one prevents evolutionary models from
      analysing the important issue of how these patterns endogenously evolve. In this vein, an analogous issue may
      be raised in connection with the assumption that the strategy set of the game remains ﬁxed. This, in particular,
      makes it impossible to analyse how genuine “mutation” (which in social environments could be interpreted as
      innovation) might affect, and in turn be affected by, evolutionary dynamics.
196                                                  Afterword


In a theoretical framework where new strategies may come about through some appropriately formulated process of
“strategy innovation”, the important issue of growth or/and technological change can be studied from an evolutionary
perspective. Since these phenomena appear to be inherently evolutionary in the real world (in the sense of involving
gradual, trial-and-error adjustment rather than the solution of some well-deﬁned intertemporal optimization problem),
the potential for this approach seems quite substantial.
                                                7 Appendix
7.1Liapunov's Theorem
The following Theorem, due to Liapunov, represents a standard tool to tackle the issue of stability of a dynamical
system. As formulated, it addresses the question of global stability. However, by a suitable application of it in a
neighbourhood of a certain equilibrium, it can also be used (as in Chapter 3) for deriving conclusions of local stability.
Theorem 26Let                       be a dynamical system deﬁned on a certain compact subset C ⊆ ℜn. Let V : C → ℜ be a
continuously differentiable function with a unique maximum at x* ∈ C. Then, if along any given trajectory x(·) of the system,
                                          , then limt → ∞x(t) = x*.


7.2Liouville's Theorem
The following result by Liouville on the conservation of volume of a dynamical system is used in the proof of
Theorem 12.
Theorem 27 (Liouville's Theorem)Let                    be a dynamical system deﬁned on a certain open subset U ⊆ ℜn. Then, if
A ⊆ U has a volume V ≡ ∫Adx, then the volume V (t) of the set A (t) = {y = x(t) : x(0) ∈ A} satisﬁes:
198                                                            Appendix


where the divergence of the vector ﬁeld H (·) is deﬁned as follows:




i.e. the trace of the Jacobian of H (·).


7.3 A Characterization of Negative-Deniteness
The following Lemma characterizing negative deﬁniteness of a certain matrix was required in the proof of Theorem 5,
due to Hines (1980b).
Lemma 29Let M be any square matrix of dimension m. The following two statements are equivalent.
   (i) For every positive deﬁnite and symmetric square matrix Q, QM has all its eigenvalues with negative real parts;
   (ii)            is negative deﬁnite.
Proof.
   (ii) ⇒ (i): Let a + ib be an eigenvalue of QM. Then, as can be seen from expressing QM in Jordan canonical form,
        there exists at least one corresponding eigenvector z = x + iy such that x ≠ 0 ≠ y and



       (If b = 0, take y = x.) Hence,



       and



       which implies



       and




Since x · Mx and y · My are negative, and x · Q−1x and y · Q−1y are positive, for x ≠ 0 ≠ y, a must necessarily also be
negative.
(i) ⇒ (ii): Since Q is positive deﬁnite and symmetric, it can be expressed as       where P consists of m orthogonal
column vectors e1, . . . , em and A is a diagonal matrix with positive diagonal elements λi.
                                    7.4. Invariant Distribution: Graph Characterization                                     199


Since all eigenvalues of QM have negative real parts, the trace of QM is negative. That is




Note that Q is arbitrary so that the previous expression holds for all P and A. Choose x to be an arbitrary vector in ℜm,
x ≠ 0, set e1 = x /‖x‖, take e2, . . . , em to be any other orthonormal vectors, and take λ1 = 1 and λi = ɛ, for i > 1. Then, (i)
implies that:




or in the limit, as ɛ → 0, x · Mx ≤ 0.
If x · Mx = 0 for x ≠ 0, 0 is an eigenvalue of M, and so det (M) = 0. Since I· M is known to have no eigenvalues with
real part zero, by hypothesis, the case x· Mx = 0 can be excluded. Since x is arbitrary,                        for x
≠ 0, so that            is negative deﬁnite, completing the proof. ▪


7.4 Invariant Distribution: Graph Characterization
Let (Ω, T) be a ﬁnite-state Markov process, where Ω is the (ﬁnite) state space and T : Ω → Δ (Ω) stands for the
transition probability function. For convenience, we shall often abuse notation and represent this function in matrix
form, with T(ω, ω′) standing for the probability of a transition from state ω to state ω′.
Deﬁnition 20The probability distribution μ ∈ Δ (Ω) is an invariant (or stationary) distribution of the process if:




By the standard Theory of Stochastic Processes (see, for example, Karlin and Taylor (1975: Theorem 1.3, p. 35)), if the
Markov process (Ω, T) satisﬁes ∀ ω, ω′ ∈ Ω, T(ω, ω′) > 0, then it has a unique invariant distribution. Freidlin and
Wentzel (1984) characterize this distribution as follows:
200                                                   Chapter 7. Appendix


      Deﬁnition 21Let ω ∈ Ω. An ω-tree Y is a directed graph on Ω such that: (i) Every state ω′ ∈ Ω \ {ω} is the initial point of
      exactly one arrow; and (ii) for every state ω′ ∈ Ω \ {ω}, there is a path linking ω′ to ω, i.e. there is a sequence of arrows y =
      {(ω(0), ω(1)), (ω(1), ω(2)), . . . , (ω(n−1), ω(n))} such that ω(0) = ω′ and ω(n) = ω.

Denoting by        the set of all ω-trees, deﬁne the vector q = (qω)ω ∈ Ω ∈ ℜ|Ω| as follows:




                                                                                                                                 (7.1)

The following result – a particularization of Lemma 3.1 in Freidlin and Wentzel (1984: p 177) – provides a very useful
characterization of the stationary distribution of (Ω, T):
      Proposition 17The stationary distribution of (Ω, T) is given by




      for all ω ∈ Ω.
                                             Bibliography
Axelrod, R. (1984): The Evolution of Cooperation, New York, Basic Publ.
Axelrod, R., and W.D. Hamilton (1981): “The evolution of cooperation”, Science 211, 1390–6.
Auman, R., and S. Sorin (1989): “Cooperation and bounded recall”, Games and Economic Behavior 1, 5–39.
Banerjee, A., and J. Weibull (1991): “Evolutionary selection and rational behavior”, in A. Kirman and M. Salmon,
   (eds.), Rationality and Learning in Economics, Blackwell.
Bergin, J., and B. Lipman (1995): “Evolution with state–dependent mutations”, Econometrica, forthcoming.
Bernheim, D. (1984): “Rationalizable strategic behavior”, Econometrica 52, 1007–28.
Bhaskar, V. (1994): “Noisy communication and the fast evolution of cooperation”, Center Discussion Paper no. 94112.
Binmore, K., and L. Samuelson (1992): “Evolutionary stability in games played by ﬁnite automata”, Journal of Economic
   Theory 57, 278–305.
Binmore, K., L. Samuelson, and R. Vaughan (1993): “Musical chairs: modeling noisy evolution”, mimeo, University
   College (London) and University of Wisconsin.
Björnerstedt, J., M. Dufwenberg, P. Norman and J. Weibull (1993): “Evolutionary selection dynamics and irrational
   survivors”, mimeo, Dept. of Economics, Stockholm University.
Bomze, I. M. (1986): “Non–Cooperative, Two–Person Games in Biology: A Classiﬁcation”, International Journal of Game
   Theory 15, 31–57.
Bomze, I. M., and B. M. Pötscher (1988): Game Theoretic Foundations of Evolutionary Stability, Berlin, Springer–Verlag.
Bowler, P.J. (1984): Evolution: The History of an Idea, University of California Press.
Boyd, R., and P. Richerson (1985): Culture and the Evolutionary Process, Chicago: University of Chicago Press.
Brandemburger, A., and E. Dekel (1987): “Rationalizability and correlated equilibrium”, Econometrica 55, 1391–402.
Cabrales, A. (1992): “Stochastic replicator dynamics”, mimeo, University of California at San Diego.
Cabrales, A., and J. Sobel (1992): “On the limit points of discrete selection dynamics”, Journal of Economic Theory 57,
   407–19.
Crawford, V. (1991): “An ‘evolutionary’ interpretation of van Huyck, Battalio, and Beil's experimental results on
   coordination”, Games and Economic Behavior 3, 25–59.
Dawkins, R. (1982): The Selﬁsh Gene, Oxford and San Francisco, Freeman.
202                                                   Bibliography


Dekel, E., and S. Scotchmer (1992): “On the evolution of optimizing behavior”, Journal of Economic Theory 57, 392–406.
Diamond, P. A. (1982): “Aggregate–demand management in search equilibrium”, Journal of Political Economy 4, 881–94.
Ellison, G. (1993): “Learning, local interaction, and coordination”, Econometrica 4, 1047–73.
Eshel, I. (1982): “Evolutionary stable strategies and viability selection in Mendelian populations”, Theoretical Population
    Biology 22, 204–17.
Eshel, I. (1991): “Game Theory and population dynamics in complex genetical systems: the role of sex in short term
    and long term evolution”, in R. Selten (ed.), Game Equilibrium Models, vol. I, Evolution and Game Dynamics, Berlin,
    Springer-Verlag, 6–28.
Eshel, I., and E. Akin (1983): “Co–evolutionary instability of mixed Nash solutions”, Journal of Mathematical Biology 18,
    123–33.
Fogel, D. (1996): “Special Issue on the Prisoner's Dilemma”, BioSystems 37.
Foster, D., and P. Young (1990): “Stochastic evolutionary game dynamics”, Theoretical Population Biology 38, 219–32.
Freidlin, M. I., and A. D. Wentzel (1984): Random Perturbations of Dynamical Systems, New York, Springer-Verlag.
Friedman, D. (1991): “Evolutionary games in Economics”, Econometrica 59, 637–66.
Friedman, J. (1977): Oligopoly and the Theory of Games, Amsterdam, North Holland.
Fudenberg, D., and C. Harris (1992): “Evolutionary dynamics with aggregate shocks”, Journal of Economic Theory 57,
    420–41.
Fudenberg, D., and E. Maskin (1990): “Evolution and cooperation in noisy repeated games”, American Economic Review
    80, 274–9.
Fudenberg, D., and J. Tirole (1991): Game Theory, Cambridge, Mass., MIT Press.
Gale, J., K. Binmore, and L. Samuelson (1995): “Learning to be imperfect: the ultimatum game”, Games and Economic
    Behavior 8, 56–90.
Gihman, I., and A. V. Skorohod (1972): Stochastic Differential Equations, Berlin, Springer-Verlag.
Güth, W., R. Schmittberger, and B. Schwarze (1982): “An experimental analysis of ultimatum bargaining”, Journal of
    Economic Behavior and Organization 3, 367–88.
Hamilton, W. D. (1970): “Selﬁsh and spiteful behavior in an evolutionary model”, Nature 228, 1218–20.
Hammerstein, P., and G. A. Parker (1981): “The asymmetric war of attrition”, Journal of Theoretical Biology 96, 647–82.
Hammerstein, P., and R. Selten (1992): “Evolutionary Game Theory”, Handbook of Game Theory, in R. Aumann and S.
    Hart (eds.), Amsterdam, North–Holland.
Harsanyi, J. C., and R. Selten (1988): A General Theory of Equilibrium Selection, Cambridge, Mass., MIT Press.
Hildenbrand, W. (1974): Core and Equilibria of a Large Economy, Princeton, Princeton Univ. Press.
                                                     Bibliography                                                   203


Hines, W. G. S. (1980a): “Three characterizations of population strategy stability”, Journal of Applied Probability 17,
    333–40.
Hines, W.G.S. (1980b): “Strategy stability in complex populations”, Journal of Applied Probability 17, 600–10.
Hirsch, M. W., and S. Smale (1974): Differential Equations, Dynamical Systems and Linear Algebra, New York, Academic
    Press.
Hirshleifer, J., and J. C. Martinez Coll (1992): “Selection, mutation and the preservation of diversity in evolutionary
    games”, Revista Española de Economía 9, 251–73.
Hofbauer, J., P. Schuster, and K. Sigmund (1979): A note on evolutionary stable strategies and game dynamics”, Journal
    of Theoretical Biology 81, 609–12.
Hofbauer, J., and K. Sigmund (1987): “Permanence for replicator equations” in A. Kurzhanski, and K. Sigmund (eds.),
    Dynamical Systems, Lecture Notes in Economics and Mathematical Systems 287, Berlin, Springer-Verlag.
Hofbauer, J., and K. Sigmund (1988): Dynamical Systems and the Theory of Evolution, Cambridge, Cambridge University
   Press.
Hutson, V., and W. Moran (1982): “Persistence of species obeying difference equations”, Mathematical Biosciences 63,
   253–69.
Kandori, M., G. Mailath, and R. Rob (1993): “Learning, mutation, and long–run equilibria in games”, Econometrica 61,
   29–56.
Kandori, M., and R. Rob (1995): “Evolution of equilibria in the long run: a general theory and applications”, Journal of
   Economic Theory 65, 383–414.
Karlin, S., and H.M. Taylor (1975): A First Course in Stochastic Processes, London, Academic Press.
Kim, Y.–G., and J. Sobel (1995): “An evolutionary approach to pre–play communication”, Econometrica 63, 1181–93.
Kimura, M. (1983): The Neutral Theory of Molecular Evolution, Cambridge, Cambridge University Press.
Kohlberg, E., and J.–F. Mertens (1986): “On the strategic stability of equilibria”, Econometrica 54, 1003–37.
Losert, V., and E. Akin (1983): “Dynamics of games and genes: discrete versus continuous time”, Journal of Mathematical
    Biology 17, 241–51.
Mailath, G. (1992): “Introduction: Symposium on Evolutionary Game Theory”, Journal of Economic Theory 57, 259–77.
Mas–Colell, A. (1980): “Non–cooperative approaches to the theory of perfect competition”, Journal of Economic Theory
    22, 121–376
Matsui, A. (1991): “Cheap talk and cooperation in a society”, Journal of Economic Theory 54, 245–58.
Maynard Smith, J. (1982): Evolution and the Theory of Games, Cambridge, Cambridge University Press.
Maynard Smith, J., and G. Price (1973): “The logic of animal conﬂicts”, Nature 246, 15–18.
Milgrom, P., and J. Roberts (1991): “Adaptative and sophisticated learning in normal form games”, Games and Economic
    Behavior 3, 82–100.
204                                                   Bibliography


Nachbar, J. H. (1990): “Evolutionary selection in dynamic games”, International Journal of Game Theory 19, 59–90.
Nash, J. (1950): “The bargaining problem”, Econometrica 18, 155–62.
Nöldeke, G., and L. Samuelson (1993): “An evolutionary analysis of backward and forward induction”, Games and
    Economic Behavior 5, 425–55.
Nowak, M., and K. Sigmund (1992): “Tit for Tat in heterogeneous populations”, Nature 355, 250–2.
Oechssler, J. (1993): “Competition among conventions”, mimeo, Columbia University.
Pearce, D. (1984): “Rationalizable strategic behavior and the problem of perfection”, Econometrica 52, 1029–50.
Peleg, B., and A. Shmida (1992): “Short–run stable matchings between bees and ﬂowers”, Games and Economic Behavior
    4, 232–51.
Primack, A. (1985): “Patterns of ﬂowering phenology in communities, populations, individuals, and single ﬂowers”, in
    J. White (ed.), The Population Structure of Vegetation, Dordretch, The Netherlands, Junk, 571–593.
Rhode, P., and M. Stegeman (1995): “Non–Nash equilibria of Darwinian dynamics”, mimeo.
Rhode, P., and M. Stegeman (1996): “A comment on learning, evolution, and long–run equilibria in games”,
    Econometrica 64, 443–50.
Ritzberger, K., and K. Vogelsberg (1990): “The Nash ﬁeld”, IAS research report no. 263, Vienna.
Ritzberger, K., and J. Weibull (1995): “Evolutionary selection in normal–form games”, Econometrica 63, 1371–400.
Robson, A. (1990): “Efﬁciency in evolutionary games: Darwin, Nash, and the secret handshake”, Journal of Theoretical
    Biology 144, 379–96.
Robson, A. (1993): “The ‘Adam and Eve effect’ and fast evolution of efﬁcient equilibria”, mimeo, University of
    Western Ontario.
Robson, A., and F. Vega–Redondo (1996): “Efﬁcient equilibrium selection in evolutionary games with random
    matching”, Journal of Economic Theory, forthcoming.
Samuelson, L. (1988): “Evolutionary foundations of solution concepts for ﬁnite, two–player, normal–form games”, in
    M.Y. Vardi (ed.), Theoretical Aspects of Reasoning About Knowledge, Los Altos, Morgan Kauffman, 221–5.
Samuelson, L. (1990): “Limit evolutionarily stable strategies in asymmetric games”, Games and Economic Behavior 3,
    110–28.
Samuelson, L. (1994): “Stochastic stability in games with alternative best replies”, Journal of Economic Theory 64, 35–65.
Samuelson, L., and J. Zhang (1992): “Evolutionary stability in asymmetric games”, Journal of Economic Theory 57,
    363–91.
Schaffer, M. E. (1988): “Evolutionary stable strategies for a ﬁnite population and a variable contest size”, Journal of
    Theoretical Biology 132, 469–78.
Schaffer, M.E. (1989): “Are proﬁt maximisers the best survivors?: A Darwinian model of economic natural selection”,
    Journal of Economic Behavior and Organization 12, 29–45.
                                                      Bibliography                                                    205


Selten, R. (1980): “A note on evolutionary stable strategies in asymmetric animal conﬂics”, Journal of Theoretical Biology
    84, 93–101.
Selten, R. (1983): “Evolutionary stability in extensive two–person games”, Mathematical Social Sciences 5, 269–363.
Selten, R. (1988): “Evolutionary stability in extensive two–person games: correction and further development”,
    Mathematical Social Sciences 16, 223–66.
Selten, R., and A. Shmida (1991): “Pollinator foraging and ﬂower competition in a game equilibrium model”, in R.
    Selten (ed.), Game Equilibrium Models I: Evolution and Game Dynamics, Berlin, Springer-Verlag.
Sigmund, K. (1993): Games of Life: Explorations in Ecology, Evolution, and Behaviour, Oxford, Oxford University Press.
Smallwood, D., and J. Conlisk (1979): “Product quality in markets where consumes are imperfectly informed”,
    Quarterly Journal of Economics 93, 1–23.
Sobel, J. (1993): “Evolutionary stability and efﬁciency”, Economic Letters 42, 313–19.
Stahl, D.O. (1993): “Evolution of smartn players”, Games and Economic Behavior 5, 604–17.
Swinkels, J. (1992): “Evolutionary stability with equilibrium entrants”, Journal of Economic Theory 57, 306–32.
Swinkels, J. (1993): “Adjustment dynamics and rational play in games”, Games and Economic Behavior 5, 455–84.
Taylor, P. D., and L. B. Jonker (1978): “Evolutionary stable strategies and game dynamics”, Mathematical Bioscience 40,
    145–56.
Thomas, B. (1985): “On evolutionary stable sets”, Journal of Mathematical Biology 22, 105–15.
Topkis, D. (1979): “Equilibrium points in nonzero–sum n–person submodular games”, SIAM Journal of Control and
    Optimization 17, 773–87.
Van Damme, E. (1987): Stability and the Perfection of Nash Equilibria, Berlin, Springer-Verlag.
Van Damme, E. (1989): “Stable equilibria and forward induction”, Journal of Economic Theory 48, 476–96.
Vega–Redondo, F. (1993): “Competition and culture in the evolution of economic behavior”, Games and Economic
    Behavior 5, 618–31.
Vega–Redondo, F. (1995): “Expectations, drift, and volatility in evolutionary games”, Games and Economic Behavior 11,
    391–412.
Vega–Redondo, F. (1996a): “Long–run cooperation in the one–shot Prisoner's Dilemma”, BioSystems 37, 39–47.
Vega–Redondo, F. (1996b): “Pollination and reward: a game–theoretic approach”, Games and Economic Behavior 12,
    127–43.
Vega–Redondo, F. (1996c): “The evolution of Walrasian behavior”, Econometrica, forthcoming.
Wärneryd, K. (1993): “Cheap talk, coordination, and evolutionary stability”, Games and Economic Behavior 5, 532–46.
Wright, S. (1945): “Tempo and mode in evolution”, Ecology 26, 415–19.
206                                                  Bibliography


Young, P., and D. Foster (1991): “Cooperation in the short and in the long run”, Games and Economic Behavior 3, 145–56.
Young, P. (1993a): “The evolution of conventions”, Econometrica 61, 57–84.
Young, P. (1993b): “An evolutionary model of bargaining”, Journal of Economic Theory 59, 145–68.
Zeeman, E.C. (1981): “Dynamics of the evolution of animal conﬂicts”, Journal of Theoretical Biology 89, 249–70.
                                                                        relevant evidence, 181; temporal consistency, 180
                         Index                                      expectations; dynamic, 162, 179; indeterminacy of, 169;
                                                                        pattern of, 163; static, 161, 165


A
allele, 69
asymmetric context with pairwise meetings, 26

B
backwards induction, 72
bargaining, 170; risk aversion, 170
behavioural strategy, 27
better-reply correspondence, 96

C
cheap talk, 35
co-operation, 72
co-ordination games, 128, 133, 166; with an outside option,
    174
common interest, games of, 36
common knowledge of rationality, 105
communication game, 37
constant of motion, 57, 99
correlated equilibrium, 29
Cournot-Nash equilibrium, 34

D
Darwin, 12
drift, 173; expectational, 162, 169, 178, 185

E
equilibrium selection; efﬁciency, 131, 136; risk dominance,
    132, 140; volatility, 182, 185
ergodicity, 130, 135
evolution; cultural, 121; hierarchical, 80, 121; Lamarckian,
    12
evolution and efﬁciency, 123
evolution and rationality, 100; rationalizability, 104; strict
    domination in mixed strategies, 102; strict domination in
    pure strategies, 101; weak domination, 103, 178
evolutionarily absorbing set, 38
Evolutionarily Stable Strategy (ESS), 14; spite of, 31; existence
    of, 21
evolutionary dynamics; continuous time, 45, 146; discrete
    time, 44, 133
evolutionary system; aggregate-monotonic, 102; gradient-
    monotonic, 107; growth-monotonic, 88; monotonic,
    87, 134, 144; pay-off responsive, 108; sign-preserving,
    88; strongly monotonic at the boundary, 108
expectation updating, 164–165, 189; admissible rules, 180;
208                                                   Subject Index

extensive-form games, 30                                           systems, 68
                                                               prisoner’s dilemma, 72
F
ﬁtness, 14, 44; average, 70; female, 80–81; male, 80–81;       R
    matrix, 69                                                 random matching, 13, 48, 86, 128, 133
folk theorems, 72                                              rate of convergence, 150
forward induction, 98, 173, 178
Fundamental Theorem of Natural Selection, 70

H
Hawk–Dove game, 15, 29, 55

I
imitation dynamics, 89
information sets, 26
inheritance, 2, 47, 69; cultural, 124
invariance, 46; additive, 47
invariant distribution, 130, 135; graph-theoretic character-
     ization, 199
Ito’s Lemma, 148, 149

L
Law of Large Numbers, 12, 144
Liapunov function, 51; average, 64
Liapunov’s Theorem, 197
limit ESS, 31
Liouville’s Theorem, 93, 197

M
Markov chain, 130, 135
mutation, 2, 14, 47, 49, 76, 135, 149; simultaneous, 150

N
Nash bargaining solution, 173
Nash equilibrium, 20, 53; reﬁnements of, 20, 52; symmetric,
    20, 53
noise; matching, 143; mutational, 143
non-invadability, 49

O
oligopolistic competition, 33, 157

P
pairwise contests, 13
pattern of interaction; global, 150; local, 154
perfect equilibrium, 21, 54
playing the ﬁeld, 13
pollination, 79
population; large, 11, 86, 146; small, 144, 145
population genetics, 68; diploid systems, 68; one-locus
                                                         Subject Index   209

Replicator Dynamics, 44; (strong) persistence, 61–62; average
    behaviour, 66; mixed strategies, 57; permanence, 62;
    two populations, 90
reproduction; asexual, 44; sexual, 68
Rock-Scissors-Paper game, 23, 56
roles, 25; asymmetry of, 27

S
satisﬁcing dynamics, 91
selection, 1, 128, 134; frequency-dependent, 71; frequency-
     independent, 69
Sex-Ratio game, 17
shifting balance theory, 144
sophistication levels; dynamic optimizers, 187; imitators, 186;
     myopic optimizers, 186
sophistication range; narrow, 190; wide, 192
stability; asymptotic, 50; Liapunov, 50; set, 95; stochastic,
     132, 136, 142; structural, 60
state; components, 171, 175; globally evolutionarily stable, 83;
     monomorphic, 14, 49; polymorphic, 14; stationary, 53;
     stochastically stable, 132, 136, 142
strategy adjustment, 89, 91, 134, 164, 189
subgame-perfect equilibrium, 98

T
tit-for-tat strategy, 73
type adjustment, 188

U
Ultimatum game, 114

W
Walrasian behaviour, 34, 157; evolution of, 157
Wiener process, 147, 148


